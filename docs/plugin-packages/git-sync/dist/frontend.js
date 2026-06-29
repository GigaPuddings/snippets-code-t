import * as Ia from "vue";
import { inject as ye, createVNode as Z, defineAsyncComponent as Rs, getCurrentInstance as Mt, ref as I, computed as M, unref as m, shallowRef as Qi, watchEffect as xu, readonly as Ql, getCurrentScope as rb, onScopeDispose as fg, onMounted as it, nextTick as ct, watch as pe, isRef as Qt, warn as sb, provide as Lt, defineComponent as Q, createElementBlock as R, openBlock as x, mergeProps as On, renderSlot as oe, createElementVNode as T, toRef as Jt, onUnmounted as Jr, useAttrs as ob, useSlots as Mu, normalizeStyle as tt, normalizeClass as U, createCommentVNode as j, Fragment as _e, createBlock as se, withCtx as X, resolveDynamicComponent as en, withModifiers as at, toDisplayString as G, onBeforeUnmount as yn, Transition as Ri, withDirectives as nn, vShow as ai, reactive as tr, onActivated as lb, onUpdated as dg, cloneVNode as ab, Text as Lu, Comment as cb, Teleport as hg, onBeforeMount as ub, onDeactivated as fb, createTextVNode as Ve, h as Iu, createSlots as ea, resolveComponent as rt, normalizeProps as db, guardReactiveProps as hb, withKeys as Si, toRaw as pb, toRefs as Pu, resolveDirective as gb, toHandlerKey as mb, renderList as Ct, vModelText as vb, shallowReactive as yb, isVNode as qs, render as _l } from "vue";
var bb = {
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
function wb() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Sb(t, e, n) {
  var i = typeof e.fill == "string" ? [e.fill] : e.fill || [], r = [], s = e.theme || n.theme;
  switch (s) {
    case "outline":
      r.push(typeof i[0] == "string" ? i[0] : "currentColor"), r.push("none"), r.push(typeof i[0] == "string" ? i[0] : "currentColor"), r.push("none");
      break;
    case "filled":
      r.push(typeof i[0] == "string" ? i[0] : "currentColor"), r.push(typeof i[0] == "string" ? i[0] : "currentColor"), r.push("#FFF"), r.push("#FFF");
      break;
    case "two-tone":
      r.push(typeof i[0] == "string" ? i[0] : "currentColor"), r.push(typeof i[1] == "string" ? i[1] : n.colors.twoTone.twoTone), r.push(typeof i[0] == "string" ? i[0] : "currentColor"), r.push(typeof i[1] == "string" ? i[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      r.push(typeof i[0] == "string" ? i[0] : "currentColor"), r.push(typeof i[1] == "string" ? i[1] : n.colors.multiColor.outFillColor), r.push(typeof i[2] == "string" ? i[2] : n.colors.multiColor.innerStrokeColor), r.push(typeof i[3] == "string" ? i[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: e.size || n.size,
    strokeWidth: e.strokeWidth || n.strokeWidth,
    strokeLinecap: e.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: e.strokeLinejoin || n.strokeLinejoin,
    colors: r,
    id: t
  };
}
var Cb = Symbol("icon-context");
function ps(t, e, n) {
  var i = {
    name: "icon-" + t,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var o = wb(), l = ye(Cb, bb);
      return function() {
        var a = s.size, c = s.strokeWidth, u = s.strokeLinecap, f = s.strokeLinejoin, d = s.theme, h = s.fill, p = s.spin, v = Sb(o, {
          size: a,
          strokeWidth: c,
          strokeLinecap: u,
          strokeLinejoin: f,
          theme: d,
          fill: h
        }, l), y = [l.prefix + "-icon"];
        return y.push(l.prefix + "-icon-" + t), e && l.rtl && y.push(l.prefix + "-icon-rtl"), p && y.push(l.prefix + "-icon-spin"), Z("span", {
          class: y.join(" ")
        }, [n(v)]);
      };
    }
  };
  return i;
}
const kb = ps("attention", !0, function(t) {
  return Z("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Z("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), Z("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z",
    fill: t.colors[2]
  }, null), Z("path", {
    d: "M24 12V28",
    stroke: t.colors[2],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), Zf = ps("branch", !0, function(t) {
  return Z("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Z("path", {
    d: "M40 28C42.2091 28 44 26.2091 44 24C44 21.7909 42.2091 20 40 20C37.7909 20 36 21.7909 36 24C36 26.2091 37.7909 28 40 28Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), Z("path", {
    d: "M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), Z("path", {
    d: "M9 44C11.2091 44 13 42.2091 13 40C13 37.7909 11.2091 36 9 36C6.79086 36 5 37.7909 5 40C5 42.2091 6.79086 44 9 44Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), Z("path", {
    d: "M9 12V36V24.0083H36",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), _b = ps("check-one", !0, function(t) {
  return Z("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Z("path", {
    d: "M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z",
    fill: t.colors[1],
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linejoin": t.strokeLinejoin
  }, null), Z("path", {
    d: "M16 24L22 30L34 18",
    stroke: t.colors[2],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), Eb = ps("close-small", !1, function(t) {
  return Z("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Z("path", {
    d: "M14 14L34 34",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null), Z("path", {
    d: "M14 34L34 14",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), Tb = ps("github", !0, function(t) {
  return Z("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Z("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",
    fill: t.colors[0]
  }, null), Z("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z",
    fill: t.colors[0]
  }, null)]);
}), pg = ps("loading", !0, function(t) {
  return Z("svg", {
    width: t.size,
    height: t.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [Z("path", {
    d: "M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null), Z("path", {
    d: "M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36",
    stroke: t.colors[0],
    "stroke-width": t.strokeWidth,
    "stroke-linecap": t.strokeLinecap,
    "stroke-linejoin": t.strokeLinejoin
  }, null)]);
}), XR = (t) => {
  t.registerSettingsTab({
    id: "gitSync",
    labelKey: "settings.gitSync.menu",
    icon: Tb,
    component: Rs(() => Promise.resolve().then(() => gL))
  }), t.registerTitlebarAction({
    id: "git-sync-status",
    component: Rs(() => Promise.resolve().then(() => kL))
  }), t.registerHostComponent({
    id: "git-sync-runtime",
    target: "config",
    component: Rs(() => Promise.resolve().then(() => eI))
  });
}, gg = Symbol(), Ns = "el", Ab = "is-", gr = (t, e, n, i, r) => {
  let s = `${t}-${e}`;
  return n && (s += `-${n}`), i && (s += `__${i}`), r && (s += `--${r}`), s;
}, mg = Symbol("namespaceContextKey"), Du = (t) => {
  const e = t || (Mt() ? ye(mg, I(Ns)) : I(Ns));
  return M(() => m(e) || Ns);
}, Ue = (t, e) => {
  const n = Du(e);
  return {
    namespace: n,
    b: (v = "") => gr(n.value, t, v, "", ""),
    e: (v) => v ? gr(n.value, t, "", v, "") : "",
    m: (v) => v ? gr(n.value, t, "", "", v) : "",
    be: (v, y) => v && y ? gr(n.value, t, v, y, "") : "",
    em: (v, y) => v && y ? gr(n.value, t, "", v, y) : "",
    bm: (v, y) => v && y ? gr(n.value, t, v, "", y) : "",
    bem: (v, y, g) => v && y && g ? gr(n.value, t, v, y, g) : "",
    is: (v, ...y) => {
      const g = y.length >= 1 ? y[0] : !0;
      return v && g ? `${Ab}${v}` : "";
    },
    cssVar: (v) => {
      const y = {};
      for (const g in v)
        v[g] && (y[`--${n.value}-${g}`] = v[g]);
      return y;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const y = {};
      for (const g in v)
        v[g] && (y[`--${n.value}-${t}-${g}`] = v[g]);
      return y;
    },
    cssVarBlockName: (v) => `--${n.value}-${t}-${v}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const er = () => {
}, Ob = Object.prototype.hasOwnProperty, Qf = (t, e) => Ob.call(t, e), ei = Array.isArray, gt = (t) => typeof t == "function", mn = (t) => typeof t == "string", Sn = (t) => t !== null && typeof t == "object", xb = Object.prototype.toString, Mb = (t) => xb.call(t), Lb = (t) => Mb(t) === "[object Object]", Ib = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, Pb = /-(\w)/g, Db = Ib(
  (t) => t.replace(Pb, (e, n) => n ? n.toUpperCase() : "")
);
var vg = typeof global == "object" && global && global.Object === Object && global, Rb = typeof self == "object" && self && self.Object === Object && self, pi = vg || Rb || Function("return this")(), ci = pi.Symbol, yg = Object.prototype, Nb = yg.hasOwnProperty, Fb = yg.toString, Ss = ci ? ci.toStringTag : void 0;
function $b(t) {
  var e = Nb.call(t, Ss), n = t[Ss];
  try {
    t[Ss] = void 0;
    var i = !0;
  } catch {
  }
  var r = Fb.call(t);
  return i && (e ? t[Ss] = n : delete t[Ss]), r;
}
var Bb = Object.prototype, Vb = Bb.toString;
function Hb(t) {
  return Vb.call(t);
}
var Wb = "[object Null]", zb = "[object Undefined]", ed = ci ? ci.toStringTag : void 0;
function gs(t) {
  return t == null ? t === void 0 ? zb : Wb : ed && ed in Object(t) ? $b(t) : Hb(t);
}
function Xr(t) {
  return t != null && typeof t == "object";
}
var Gb = "[object Symbol]";
function ta(t) {
  return typeof t == "symbol" || Xr(t) && gs(t) == Gb;
}
function Ub(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length, r = Array(i); ++n < i; )
    r[n] = e(t[n], n, t);
  return r;
}
var Hn = Array.isArray, td = ci ? ci.prototype : void 0, nd = td ? td.toString : void 0;
function bg(t) {
  if (typeof t == "string")
    return t;
  if (Hn(t))
    return Ub(t, bg) + "";
  if (ta(t))
    return nd ? nd.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var jb = /\s/;
function Kb(t) {
  for (var e = t.length; e-- && jb.test(t.charAt(e)); )
    ;
  return e;
}
var Yb = /^\s+/;
function qb(t) {
  return t && t.slice(0, Kb(t) + 1).replace(Yb, "");
}
function nr(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var id = NaN, Jb = /^[-+]0x[0-9a-f]+$/i, Xb = /^0b[01]+$/i, Zb = /^0o[0-7]+$/i, Qb = parseInt;
function rd(t) {
  if (typeof t == "number")
    return t;
  if (ta(t))
    return id;
  if (nr(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = nr(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = qb(t);
  var n = Xb.test(t);
  return n || Zb.test(t) ? Qb(t.slice(2), n ? 2 : 8) : Jb.test(t) ? id : +t;
}
function wg(t) {
  return t;
}
var e1 = "[object AsyncFunction]", t1 = "[object Function]", n1 = "[object GeneratorFunction]", i1 = "[object Proxy]";
function Sg(t) {
  if (!nr(t))
    return !1;
  var e = gs(t);
  return e == t1 || e == n1 || e == e1 || e == i1;
}
var Pa = pi["__core-js_shared__"], sd = function() {
  var t = /[^.]+$/.exec(Pa && Pa.keys && Pa.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function r1(t) {
  return !!sd && sd in t;
}
var s1 = Function.prototype, o1 = s1.toString;
function Lr(t) {
  if (t != null) {
    try {
      return o1.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var l1 = /[\\^$.*+?()[\]{}|]/g, a1 = /^\[object .+?Constructor\]$/, c1 = Function.prototype, u1 = Object.prototype, f1 = c1.toString, d1 = u1.hasOwnProperty, h1 = RegExp(
  "^" + f1.call(d1).replace(l1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function p1(t) {
  if (!nr(t) || r1(t))
    return !1;
  var e = Sg(t) ? h1 : a1;
  return e.test(Lr(t));
}
function g1(t, e) {
  return t?.[e];
}
function Ir(t, e) {
  var n = g1(t, e);
  return p1(n) ? n : void 0;
}
var gc = Ir(pi, "WeakMap");
function m1(t, e, n) {
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
var v1 = 800, y1 = 16, b1 = Date.now;
function w1(t) {
  var e = 0, n = 0;
  return function() {
    var i = b1(), r = y1 - (i - n);
    if (n = i, r > 0) {
      if (++e >= v1)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function S1(t) {
  return function() {
    return t;
  };
}
var El = function() {
  try {
    var t = Ir(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), C1 = El ? function(t, e) {
  return El(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: S1(e),
    writable: !0
  });
} : wg, k1 = w1(C1);
function _1(t, e, n, i) {
  t.length;
  for (var r = n + 1; r--; )
    if (e(t[r], r, t))
      return r;
  return -1;
}
var E1 = 9007199254740991, T1 = /^(?:0|[1-9]\d*)$/;
function Ru(t, e) {
  var n = typeof t;
  return e = e ?? E1, !!e && (n == "number" || n != "symbol" && T1.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function A1(t, e, n) {
  e == "__proto__" && El ? El(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Nu(t, e) {
  return t === e || t !== t && e !== e;
}
var O1 = Object.prototype, x1 = O1.hasOwnProperty;
function M1(t, e, n) {
  var i = t[e];
  (!(x1.call(t, e) && Nu(i, n)) || n === void 0 && !(e in t)) && A1(t, e, n);
}
var od = Math.max;
function L1(t, e, n) {
  return e = od(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var i = arguments, r = -1, s = od(i.length - e, 0), o = Array(s); ++r < s; )
      o[r] = i[e + r];
    r = -1;
    for (var l = Array(e + 1); ++r < e; )
      l[r] = i[r];
    return l[e] = n(o), m1(t, this, l);
  };
}
var I1 = 9007199254740991;
function Fu(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= I1;
}
function P1(t) {
  return t != null && Fu(t.length) && !Sg(t);
}
var D1 = Object.prototype;
function R1(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || D1;
  return t === n;
}
function N1(t, e) {
  for (var n = -1, i = Array(t); ++n < t; )
    i[n] = e(n);
  return i;
}
var F1 = "[object Arguments]";
function ld(t) {
  return Xr(t) && gs(t) == F1;
}
var Cg = Object.prototype, $1 = Cg.hasOwnProperty, B1 = Cg.propertyIsEnumerable, $u = ld(/* @__PURE__ */ function() {
  return arguments;
}()) ? ld : function(t) {
  return Xr(t) && $1.call(t, "callee") && !B1.call(t, "callee");
};
function V1() {
  return !1;
}
var kg = typeof exports == "object" && exports && !exports.nodeType && exports, ad = kg && typeof module == "object" && module && !module.nodeType && module, H1 = ad && ad.exports === kg, cd = H1 ? pi.Buffer : void 0, W1 = cd ? cd.isBuffer : void 0, mc = W1 || V1, z1 = "[object Arguments]", G1 = "[object Array]", U1 = "[object Boolean]", j1 = "[object Date]", K1 = "[object Error]", Y1 = "[object Function]", q1 = "[object Map]", J1 = "[object Number]", X1 = "[object Object]", Z1 = "[object RegExp]", Q1 = "[object Set]", ew = "[object String]", tw = "[object WeakMap]", nw = "[object ArrayBuffer]", iw = "[object DataView]", rw = "[object Float32Array]", sw = "[object Float64Array]", ow = "[object Int8Array]", lw = "[object Int16Array]", aw = "[object Int32Array]", cw = "[object Uint8Array]", uw = "[object Uint8ClampedArray]", fw = "[object Uint16Array]", dw = "[object Uint32Array]", Je = {};
Je[rw] = Je[sw] = Je[ow] = Je[lw] = Je[aw] = Je[cw] = Je[uw] = Je[fw] = Je[dw] = !0;
Je[z1] = Je[G1] = Je[nw] = Je[U1] = Je[iw] = Je[j1] = Je[K1] = Je[Y1] = Je[q1] = Je[J1] = Je[X1] = Je[Z1] = Je[Q1] = Je[ew] = Je[tw] = !1;
function hw(t) {
  return Xr(t) && Fu(t.length) && !!Je[gs(t)];
}
function pw(t) {
  return function(e) {
    return t(e);
  };
}
var _g = typeof exports == "object" && exports && !exports.nodeType && exports, Fs = _g && typeof module == "object" && module && !module.nodeType && module, gw = Fs && Fs.exports === _g, Da = gw && vg.process, ud = function() {
  try {
    var t = Fs && Fs.require && Fs.require("util").types;
    return t || Da && Da.binding && Da.binding("util");
  } catch {
  }
}(), fd = ud && ud.isTypedArray, Eg = fd ? pw(fd) : hw, mw = Object.prototype, vw = mw.hasOwnProperty;
function yw(t, e) {
  var n = Hn(t), i = !n && $u(t), r = !n && !i && mc(t), s = !n && !i && !r && Eg(t), o = n || i || r || s, l = o ? N1(t.length, String) : [], a = l.length;
  for (var c in t)
    vw.call(t, c) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Ru(c, a))) && l.push(c);
  return l;
}
function bw(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var ww = bw(Object.keys, Object), Sw = Object.prototype, Cw = Sw.hasOwnProperty;
function kw(t) {
  if (!R1(t))
    return ww(t);
  var e = [];
  for (var n in Object(t))
    Cw.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Tg(t) {
  return P1(t) ? yw(t) : kw(t);
}
var _w = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ew = /^\w*$/;
function Bu(t, e) {
  if (Hn(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || ta(t) ? !0 : Ew.test(t) || !_w.test(t) || e != null && t in Object(e);
}
var Js = Ir(Object, "create");
function Tw() {
  this.__data__ = Js ? Js(null) : {}, this.size = 0;
}
function Aw(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Ow = "__lodash_hash_undefined__", xw = Object.prototype, Mw = xw.hasOwnProperty;
function Lw(t) {
  var e = this.__data__;
  if (Js) {
    var n = e[t];
    return n === Ow ? void 0 : n;
  }
  return Mw.call(e, t) ? e[t] : void 0;
}
var Iw = Object.prototype, Pw = Iw.hasOwnProperty;
function Dw(t) {
  var e = this.__data__;
  return Js ? e[t] !== void 0 : Pw.call(e, t);
}
var Rw = "__lodash_hash_undefined__";
function Nw(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Js && e === void 0 ? Rw : e, this;
}
function Er(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Er.prototype.clear = Tw;
Er.prototype.delete = Aw;
Er.prototype.get = Lw;
Er.prototype.has = Dw;
Er.prototype.set = Nw;
function Fw() {
  this.__data__ = [], this.size = 0;
}
function na(t, e) {
  for (var n = t.length; n--; )
    if (Nu(t[n][0], e))
      return n;
  return -1;
}
var $w = Array.prototype, Bw = $w.splice;
function Vw(t) {
  var e = this.__data__, n = na(e, t);
  if (n < 0)
    return !1;
  var i = e.length - 1;
  return n == i ? e.pop() : Bw.call(e, n, 1), --this.size, !0;
}
function Hw(t) {
  var e = this.__data__, n = na(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Ww(t) {
  return na(this.__data__, t) > -1;
}
function zw(t, e) {
  var n = this.__data__, i = na(n, t);
  return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this;
}
function Ni(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Ni.prototype.clear = Fw;
Ni.prototype.delete = Vw;
Ni.prototype.get = Hw;
Ni.prototype.has = Ww;
Ni.prototype.set = zw;
var Xs = Ir(pi, "Map");
function Gw() {
  this.size = 0, this.__data__ = {
    hash: new Er(),
    map: new (Xs || Ni)(),
    string: new Er()
  };
}
function Uw(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function ia(t, e) {
  var n = t.__data__;
  return Uw(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function jw(t) {
  var e = ia(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Kw(t) {
  return ia(this, t).get(t);
}
function Yw(t) {
  return ia(this, t).has(t);
}
function qw(t, e) {
  var n = ia(this, t), i = n.size;
  return n.set(t, e), this.size += n.size == i ? 0 : 1, this;
}
function Fi(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
Fi.prototype.clear = Gw;
Fi.prototype.delete = jw;
Fi.prototype.get = Kw;
Fi.prototype.has = Yw;
Fi.prototype.set = qw;
var Jw = "Expected a function";
function Vu(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Jw);
  var n = function() {
    var i = arguments, r = e ? e.apply(this, i) : i[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var o = t.apply(this, i);
    return n.cache = s.set(r, o) || s, o;
  };
  return n.cache = new (Vu.Cache || Fi)(), n;
}
Vu.Cache = Fi;
var Xw = 500;
function Zw(t) {
  var e = Vu(t, function(i) {
    return n.size === Xw && n.clear(), i;
  }), n = e.cache;
  return e;
}
var Qw = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, eS = /\\(\\)?/g, tS = Zw(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Qw, function(n, i, r, s) {
    e.push(r ? s.replace(eS, "$1") : i || n);
  }), e;
});
function nS(t) {
  return t == null ? "" : bg(t);
}
function ra(t, e) {
  return Hn(t) ? t : Bu(t, e) ? [t] : tS(nS(t));
}
function po(t) {
  if (typeof t == "string" || ta(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Hu(t, e) {
  e = ra(e, t);
  for (var n = 0, i = e.length; t != null && n < i; )
    t = t[po(e[n++])];
  return n && n == i ? t : void 0;
}
function Yi(t, e, n) {
  var i = t == null ? void 0 : Hu(t, e);
  return i === void 0 ? n : i;
}
function Ag(t, e) {
  for (var n = -1, i = e.length, r = t.length; ++n < i; )
    t[r + n] = e[n];
  return t;
}
var dd = ci ? ci.isConcatSpreadable : void 0;
function iS(t) {
  return Hn(t) || $u(t) || !!(dd && t && t[dd]);
}
function rS(t, e, n, i, r) {
  var s = -1, o = t.length;
  for (n || (n = iS), r || (r = []); ++s < o; ) {
    var l = t[s];
    n(l) ? Ag(r, l) : r[r.length] = l;
  }
  return r;
}
function sS(t) {
  var e = t == null ? 0 : t.length;
  return e ? rS(t) : [];
}
function oS(t) {
  return k1(L1(t, void 0, sS), t + "");
}
function Ci() {
  if (!arguments.length)
    return [];
  var t = arguments[0];
  return Hn(t) ? t : [t];
}
function lS() {
  this.__data__ = new Ni(), this.size = 0;
}
function aS(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function cS(t) {
  return this.__data__.get(t);
}
function uS(t) {
  return this.__data__.has(t);
}
var fS = 200;
function dS(t, e) {
  var n = this.__data__;
  if (n instanceof Ni) {
    var i = n.__data__;
    if (!Xs || i.length < fS - 1)
      return i.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new Fi(i);
  }
  return n.set(t, e), this.size = n.size, this;
}
function Oi(t) {
  var e = this.__data__ = new Ni(t);
  this.size = e.size;
}
Oi.prototype.clear = lS;
Oi.prototype.delete = aS;
Oi.prototype.get = cS;
Oi.prototype.has = uS;
Oi.prototype.set = dS;
function hS(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length, r = 0, s = []; ++n < i; ) {
    var o = t[n];
    e(o, n, t) && (s[r++] = o);
  }
  return s;
}
function pS() {
  return [];
}
var gS = Object.prototype, mS = gS.propertyIsEnumerable, hd = Object.getOwnPropertySymbols, vS = hd ? function(t) {
  return t == null ? [] : (t = Object(t), hS(hd(t), function(e) {
    return mS.call(t, e);
  }));
} : pS;
function yS(t, e, n) {
  var i = e(t);
  return Hn(t) ? i : Ag(i, n(t));
}
function pd(t) {
  return yS(t, Tg, vS);
}
var vc = Ir(pi, "DataView"), yc = Ir(pi, "Promise"), bc = Ir(pi, "Set"), gd = "[object Map]", bS = "[object Object]", md = "[object Promise]", vd = "[object Set]", yd = "[object WeakMap]", bd = "[object DataView]", wS = Lr(vc), SS = Lr(Xs), CS = Lr(yc), kS = Lr(bc), _S = Lr(gc), zi = gs;
(vc && zi(new vc(new ArrayBuffer(1))) != bd || Xs && zi(new Xs()) != gd || yc && zi(yc.resolve()) != md || bc && zi(new bc()) != vd || gc && zi(new gc()) != yd) && (zi = function(t) {
  var e = gs(t), n = e == bS ? t.constructor : void 0, i = n ? Lr(n) : "";
  if (i)
    switch (i) {
      case wS:
        return bd;
      case SS:
        return gd;
      case CS:
        return md;
      case kS:
        return vd;
      case _S:
        return yd;
    }
  return e;
});
var wd = pi.Uint8Array, ES = "__lodash_hash_undefined__";
function TS(t) {
  return this.__data__.set(t, ES), this;
}
function AS(t) {
  return this.__data__.has(t);
}
function Tl(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new Fi(); ++e < n; )
    this.add(t[e]);
}
Tl.prototype.add = Tl.prototype.push = TS;
Tl.prototype.has = AS;
function OS(t, e) {
  for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function xS(t, e) {
  return t.has(e);
}
var MS = 1, LS = 2;
function Og(t, e, n, i, r, s) {
  var o = n & MS, l = t.length, a = e.length;
  if (l != a && !(o && a > l))
    return !1;
  var c = s.get(t), u = s.get(e);
  if (c && u)
    return c == e && u == t;
  var f = -1, d = !0, h = n & LS ? new Tl() : void 0;
  for (s.set(t, e), s.set(e, t); ++f < l; ) {
    var p = t[f], v = e[f];
    if (i)
      var y = o ? i(v, p, f, e, t, s) : i(p, v, f, t, e, s);
    if (y !== void 0) {
      if (y)
        continue;
      d = !1;
      break;
    }
    if (h) {
      if (!OS(e, function(g, b) {
        if (!xS(h, b) && (p === g || r(p, g, n, i, s)))
          return h.push(b);
      })) {
        d = !1;
        break;
      }
    } else if (!(p === v || r(p, v, n, i, s))) {
      d = !1;
      break;
    }
  }
  return s.delete(t), s.delete(e), d;
}
function IS(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(i, r) {
    n[++e] = [r, i];
  }), n;
}
function PS(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(i) {
    n[++e] = i;
  }), n;
}
var DS = 1, RS = 2, NS = "[object Boolean]", FS = "[object Date]", $S = "[object Error]", BS = "[object Map]", VS = "[object Number]", HS = "[object RegExp]", WS = "[object Set]", zS = "[object String]", GS = "[object Symbol]", US = "[object ArrayBuffer]", jS = "[object DataView]", Sd = ci ? ci.prototype : void 0, Ra = Sd ? Sd.valueOf : void 0;
function KS(t, e, n, i, r, s, o) {
  switch (n) {
    case jS:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case US:
      return !(t.byteLength != e.byteLength || !s(new wd(t), new wd(e)));
    case NS:
    case FS:
    case VS:
      return Nu(+t, +e);
    case $S:
      return t.name == e.name && t.message == e.message;
    case HS:
    case zS:
      return t == e + "";
    case BS:
      var l = IS;
    case WS:
      var a = i & DS;
      if (l || (l = PS), t.size != e.size && !a)
        return !1;
      var c = o.get(t);
      if (c)
        return c == e;
      i |= RS, o.set(t, e);
      var u = Og(l(t), l(e), i, r, s, o);
      return o.delete(t), u;
    case GS:
      if (Ra)
        return Ra.call(t) == Ra.call(e);
  }
  return !1;
}
var YS = 1, qS = Object.prototype, JS = qS.hasOwnProperty;
function XS(t, e, n, i, r, s) {
  var o = n & YS, l = pd(t), a = l.length, c = pd(e), u = c.length;
  if (a != u && !o)
    return !1;
  for (var f = a; f--; ) {
    var d = l[f];
    if (!(o ? d in e : JS.call(e, d)))
      return !1;
  }
  var h = s.get(t), p = s.get(e);
  if (h && p)
    return h == e && p == t;
  var v = !0;
  s.set(t, e), s.set(e, t);
  for (var y = o; ++f < a; ) {
    d = l[f];
    var g = t[d], b = e[d];
    if (i)
      var k = o ? i(b, g, d, e, t, s) : i(g, b, d, t, e, s);
    if (!(k === void 0 ? g === b || r(g, b, n, i, s) : k)) {
      v = !1;
      break;
    }
    y || (y = d == "constructor");
  }
  if (v && !y) {
    var S = t.constructor, _ = e.constructor;
    S != _ && "constructor" in t && "constructor" in e && !(typeof S == "function" && S instanceof S && typeof _ == "function" && _ instanceof _) && (v = !1);
  }
  return s.delete(t), s.delete(e), v;
}
var ZS = 1, Cd = "[object Arguments]", kd = "[object Array]", Oo = "[object Object]", QS = Object.prototype, _d = QS.hasOwnProperty;
function eC(t, e, n, i, r, s) {
  var o = Hn(t), l = Hn(e), a = o ? kd : zi(t), c = l ? kd : zi(e);
  a = a == Cd ? Oo : a, c = c == Cd ? Oo : c;
  var u = a == Oo, f = c == Oo, d = a == c;
  if (d && mc(t)) {
    if (!mc(e))
      return !1;
    o = !0, u = !1;
  }
  if (d && !u)
    return s || (s = new Oi()), o || Eg(t) ? Og(t, e, n, i, r, s) : KS(t, e, a, n, i, r, s);
  if (!(n & ZS)) {
    var h = u && _d.call(t, "__wrapped__"), p = f && _d.call(e, "__wrapped__");
    if (h || p) {
      var v = h ? t.value() : t, y = p ? e.value() : e;
      return s || (s = new Oi()), r(v, y, n, i, s);
    }
  }
  return d ? (s || (s = new Oi()), XS(t, e, n, i, r, s)) : !1;
}
function sa(t, e, n, i, r) {
  return t === e ? !0 : t == null || e == null || !Xr(t) && !Xr(e) ? t !== t && e !== e : eC(t, e, n, i, sa, r);
}
var tC = 1, nC = 2;
function iC(t, e, n, i) {
  var r = n.length, s = r;
  if (t == null)
    return !s;
  for (t = Object(t); r--; ) {
    var o = n[r];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++r < s; ) {
    o = n[r];
    var l = o[0], a = t[l], c = o[1];
    if (o[2]) {
      if (a === void 0 && !(l in t))
        return !1;
    } else {
      var u = new Oi(), f;
      if (!(f === void 0 ? sa(c, a, tC | nC, i, u) : f))
        return !1;
    }
  }
  return !0;
}
function xg(t) {
  return t === t && !nr(t);
}
function rC(t) {
  for (var e = Tg(t), n = e.length; n--; ) {
    var i = e[n], r = t[i];
    e[n] = [i, r, xg(r)];
  }
  return e;
}
function Mg(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function sC(t) {
  var e = rC(t);
  return e.length == 1 && e[0][2] ? Mg(e[0][0], e[0][1]) : function(n) {
    return n === t || iC(n, t, e);
  };
}
function oC(t, e) {
  return t != null && e in Object(t);
}
function lC(t, e, n) {
  e = ra(e, t);
  for (var i = -1, r = e.length, s = !1; ++i < r; ) {
    var o = po(e[i]);
    if (!(s = t != null && n(t, o)))
      break;
    t = t[o];
  }
  return s || ++i != r ? s : (r = t == null ? 0 : t.length, !!r && Fu(r) && Ru(o, r) && (Hn(t) || $u(t)));
}
function Lg(t, e) {
  return t != null && lC(t, e, oC);
}
var aC = 1, cC = 2;
function uC(t, e) {
  return Bu(t) && xg(e) ? Mg(po(t), e) : function(n) {
    var i = Yi(n, t);
    return i === void 0 && i === e ? Lg(n, t) : sa(e, i, aC | cC);
  };
}
function fC(t) {
  return function(e) {
    return e?.[t];
  };
}
function dC(t) {
  return function(e) {
    return Hu(e, t);
  };
}
function hC(t) {
  return Bu(t) ? fC(po(t)) : dC(t);
}
function pC(t) {
  return typeof t == "function" ? t : t == null ? wg : typeof t == "object" ? Hn(t) ? uC(t[0], t[1]) : sC(t) : hC(t);
}
var Na = function() {
  return pi.Date.now();
}, gC = "Expected a function", mC = Math.max, vC = Math.min;
function yC(t, e, n) {
  var i, r, s, o, l, a, c = 0, u = !1, f = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(gC);
  e = rd(e) || 0, nr(n) && (u = !!n.leading, f = "maxWait" in n, s = f ? mC(rd(n.maxWait) || 0, e) : s, d = "trailing" in n ? !!n.trailing : d);
  function h(E) {
    var C = i, H = r;
    return i = r = void 0, c = E, o = t.apply(H, C), o;
  }
  function p(E) {
    return c = E, l = setTimeout(g, e), u ? h(E) : o;
  }
  function v(E) {
    var C = E - a, H = E - c, N = e - C;
    return f ? vC(N, s - H) : N;
  }
  function y(E) {
    var C = E - a, H = E - c;
    return a === void 0 || C >= e || C < 0 || f && H >= s;
  }
  function g() {
    var E = Na();
    if (y(E))
      return b(E);
    l = setTimeout(g, v(E));
  }
  function b(E) {
    return l = void 0, d && i ? h(E) : (i = r = void 0, o);
  }
  function k() {
    l !== void 0 && clearTimeout(l), c = 0, i = a = r = l = void 0;
  }
  function S() {
    return l === void 0 ? o : b(Na());
  }
  function _() {
    var E = Na(), C = y(E);
    if (i = arguments, r = this, a = E, C) {
      if (l === void 0)
        return p(a);
      if (f)
        return clearTimeout(l), l = setTimeout(g, e), h(a);
    }
    return l === void 0 && (l = setTimeout(g, e)), o;
  }
  return _.cancel = k, _.flush = S, _;
}
function bC(t, e, n) {
  var i = t == null ? 0 : t.length;
  if (!i)
    return -1;
  var r = i - 1;
  return _1(t, pC(e), r);
}
function Al(t) {
  for (var e = -1, n = t == null ? 0 : t.length, i = {}; ++e < n; ) {
    var r = t[e];
    i[r[0]] = r[1];
  }
  return i;
}
function $s(t, e) {
  return sa(t, e);
}
function xi(t) {
  return t == null;
}
function Ig(t) {
  return t === void 0;
}
function wC(t, e, n, i) {
  if (!nr(t))
    return t;
  e = ra(e, t);
  for (var r = -1, s = e.length, o = s - 1, l = t; l != null && ++r < s; ) {
    var a = po(e[r]), c = n;
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return t;
    if (r != o) {
      var u = l[a];
      c = void 0, c === void 0 && (c = nr(u) ? u : Ru(e[r + 1]) ? [] : {});
    }
    M1(l, a, c), l = l[a];
  }
  return t;
}
function SC(t, e, n) {
  for (var i = -1, r = e.length, s = {}; ++i < r; ) {
    var o = e[i], l = Hu(t, o);
    n(l, o) && wC(s, ra(o, t), l);
  }
  return s;
}
function CC(t, e) {
  return SC(t, e, function(n, i) {
    return Lg(t, i);
  });
}
var kC = oS(function(t, e) {
  return t == null ? {} : CC(t, e);
});
const ti = (t) => t === void 0, Zs = (t) => typeof t == "boolean", Ke = (t) => typeof t == "number", Bn = (t) => typeof Element > "u" ? !1 : t instanceof Element, _C = (t) => mn(t) ? !Number.isNaN(Number(t)) : !1;
var EC = Object.defineProperty, TC = Object.defineProperties, AC = Object.getOwnPropertyDescriptors, Ed = Object.getOwnPropertySymbols, OC = Object.prototype.hasOwnProperty, xC = Object.prototype.propertyIsEnumerable, Td = (t, e, n) => e in t ? EC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, MC = (t, e) => {
  for (var n in e || (e = {}))
    OC.call(e, n) && Td(t, n, e[n]);
  if (Ed)
    for (var n of Ed(e))
      xC.call(e, n) && Td(t, n, e[n]);
  return t;
}, LC = (t, e) => TC(t, AC(e));
function IC(t, e) {
  var n;
  const i = Qi();
  return xu(() => {
    i.value = t();
  }, LC(MC({}, e), {
    flush: (n = void 0) != null ? n : "sync"
  })), Ql(i);
}
var Ad;
const nt = typeof window < "u", PC = (t) => typeof t == "string", Pg = () => {
}, wc = nt && ((Ad = window?.navigator) == null ? void 0 : Ad.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Wu(t) {
  return typeof t == "function" ? t() : m(t);
}
function DC(t) {
  return t;
}
function go(t) {
  return rb() ? (fg(t), !0) : !1;
}
function RC(t, e = !0) {
  Mt() ? it(t) : e ? t() : ct(t);
}
function Ol(t, e, n = {}) {
  const {
    immediate: i = !0
  } = n, r = I(!1);
  let s = null;
  function o() {
    s && (clearTimeout(s), s = null);
  }
  function l() {
    r.value = !1, o();
  }
  function a(...c) {
    o(), r.value = !0, s = setTimeout(() => {
      r.value = !1, s = null, t(...c);
    }, Wu(e));
  }
  return i && (r.value = !0, nt && a()), go(l), {
    isPending: Ql(r),
    start: a,
    stop: l
  };
}
function _i(t) {
  var e;
  const n = Wu(t);
  return (e = n?.$el) != null ? e : n;
}
const oa = nt ? window : void 0;
function kn(...t) {
  let e, n, i, r;
  if (PC(t[0]) || Array.isArray(t[0]) ? ([n, i, r] = t, e = oa) : [e, n, i, r] = t, !e)
    return Pg;
  Array.isArray(n) || (n = [n]), Array.isArray(i) || (i = [i]);
  const s = [], o = () => {
    s.forEach((u) => u()), s.length = 0;
  }, l = (u, f, d, h) => (u.addEventListener(f, d, h), () => u.removeEventListener(f, d, h)), a = pe(() => [_i(e), Wu(r)], ([u, f]) => {
    o(), u && s.push(...n.flatMap((d) => i.map((h) => l(u, d, h, f))));
  }, { immediate: !0, flush: "post" }), c = () => {
    a(), o();
  };
  return go(c), c;
}
let Od = !1;
function NC(t, e, n = {}) {
  const { window: i = oa, ignore: r = [], capture: s = !0, detectIframe: o = !1 } = n;
  if (!i)
    return;
  wc && !Od && (Od = !0, Array.from(i.document.body.children).forEach((d) => d.addEventListener("click", Pg)));
  let l = !0;
  const a = (d) => r.some((h) => {
    if (typeof h == "string")
      return Array.from(i.document.querySelectorAll(h)).some((p) => p === d.target || d.composedPath().includes(p));
    {
      const p = _i(h);
      return p && (d.target === p || d.composedPath().includes(p));
    }
  }), u = [
    kn(i, "click", (d) => {
      const h = _i(t);
      if (!(!h || h === d.target || d.composedPath().includes(h))) {
        if (d.detail === 0 && (l = !a(d)), !l) {
          l = !0;
          return;
        }
        e(d);
      }
    }, { passive: !0, capture: s }),
    kn(i, "pointerdown", (d) => {
      const h = _i(t);
      h && (l = !d.composedPath().includes(h) && !a(d));
    }, { passive: !0 }),
    o && kn(i, "blur", (d) => {
      var h;
      const p = _i(t);
      ((h = i.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !p?.contains(i.document.activeElement) && e(d);
    })
  ].filter(Boolean);
  return () => u.forEach((d) => d());
}
function Dg(t, e = !1) {
  const n = I(), i = () => n.value = !!t();
  return i(), RC(i, e), n;
}
const xd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Md = "__vueuse_ssr_handlers__";
xd[Md] = xd[Md] || {};
var Ld = Object.getOwnPropertySymbols, FC = Object.prototype.hasOwnProperty, $C = Object.prototype.propertyIsEnumerable, BC = (t, e) => {
  var n = {};
  for (var i in t)
    FC.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Ld)
    for (var i of Ld(t))
      e.indexOf(i) < 0 && $C.call(t, i) && (n[i] = t[i]);
  return n;
};
function Xn(t, e, n = {}) {
  const i = n, { window: r = oa } = i, s = BC(i, ["window"]);
  let o;
  const l = Dg(() => r && "ResizeObserver" in r), a = () => {
    o && (o.disconnect(), o = void 0);
  }, c = pe(() => _i(t), (f) => {
    a(), l.value && r && f && (o = new ResizeObserver(e), o.observe(f, s));
  }, { immediate: !0, flush: "post" }), u = () => {
    a(), c();
  };
  return go(u), {
    isSupported: l,
    stop: u
  };
}
var Id = Object.getOwnPropertySymbols, VC = Object.prototype.hasOwnProperty, HC = Object.prototype.propertyIsEnumerable, WC = (t, e) => {
  var n = {};
  for (var i in t)
    VC.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
  if (t != null && Id)
    for (var i of Id(t))
      e.indexOf(i) < 0 && HC.call(t, i) && (n[i] = t[i]);
  return n;
};
function zC(t, e, n = {}) {
  const i = n, { window: r = oa } = i, s = WC(i, ["window"]);
  let o;
  const l = Dg(() => r && "MutationObserver" in r), a = () => {
    o && (o.disconnect(), o = void 0);
  }, c = pe(() => _i(t), (f) => {
    a(), l.value && r && f && (o = new MutationObserver(e), o.observe(f, s));
  }, { immediate: !0 }), u = () => {
    a(), c();
  };
  return go(u), {
    isSupported: l,
    stop: u
  };
}
var Pd;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Pd || (Pd = {}));
var GC = Object.defineProperty, Dd = Object.getOwnPropertySymbols, UC = Object.prototype.hasOwnProperty, jC = Object.prototype.propertyIsEnumerable, Rd = (t, e, n) => e in t ? GC(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, KC = (t, e) => {
  for (var n in e || (e = {}))
    UC.call(e, n) && Rd(t, n, e[n]);
  if (Dd)
    for (var n of Dd(e))
      jC.call(e, n) && Rd(t, n, e[n]);
  return t;
};
const YC = {
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
KC({
  linear: DC
}, YC);
class qC extends Error {
  constructor(e) {
    super(e), this.name = "ElementPlusError";
  }
}
function zu(t, e) {
  throw new qC(`[${t}] ${e}`);
}
const Nd = {
  current: 0
}, Fd = I(0), Rg = 2e3, $d = Symbol("elZIndexContextKey"), Ng = Symbol("zIndexContextKey"), Gu = (t) => {
  const e = Mt() ? ye($d, Nd) : Nd, n = t || (Mt() ? ye(Ng, void 0) : void 0), i = M(() => {
    const o = m(n);
    return Ke(o) ? o : Rg;
  }), r = M(() => i.value + Fd.value), s = () => (e.current++, Fd.value = e.current, r.value);
  return !nt && ye($d), {
    initialZIndex: i,
    currentZIndex: r,
    nextZIndex: s
  };
};
var JC = {
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
const XC = (t) => (e, n) => ZC(e, n, m(t)), ZC = (t, e, n) => Yi(n, t, t).replace(/\{(\w+)\}/g, (i, r) => {
  var s;
  return `${(s = e?.[r]) != null ? s : `{${r}}`}`;
}), QC = (t) => {
  const e = M(() => m(t).name), n = Qt(t) ? t : I(t);
  return {
    lang: e,
    locale: n,
    t: XC(t)
  };
}, Fg = Symbol("localeContextKey"), mo = (t) => {
  const e = t || ye(Fg, I());
  return QC(M(() => e.value || JC));
}, $g = "__epPropKey", fe = (t) => t, ek = (t) => Sn(t) && !!t[$g], la = (t, e) => {
  if (!Sn(t) || ek(t))
    return t;
  const { values: n, required: i, default: r, type: s, validator: o } = t, a = {
    type: s,
    required: !!i,
    validator: n || o ? (c) => {
      let u = !1, f = [];
      if (n && (f = Array.from(n), Qf(t, "default") && f.push(r), u || (u = f.includes(c))), o && (u || (u = o(c))), !u && f.length > 0) {
        const d = [...new Set(f)].map((h) => JSON.stringify(h)).join(", ");
        sb(`Invalid prop: validation failed${e ? ` for prop "${e}"` : ""}. Expected one of [${d}], got value ${JSON.stringify(c)}.`);
      }
      return u;
    } : void 0,
    [$g]: !0
  };
  return Qf(t, "default") && (a.default = r), a;
}, Re = (t) => Al(Object.entries(t).map(([e, n]) => [
  e,
  la(n, e)
])), Bg = ["", "default", "small", "large"], vo = la({
  type: String,
  values: Bg,
  required: !1
}), Vg = Symbol("size"), tk = () => {
  const t = ye(Vg, {});
  return M(() => m(t.size) || "");
}, Hg = Symbol("emptyValuesContextKey"), nk = ["", void 0, null], ik = void 0, Wg = Re({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (t) => gt(t) ? !t() : !t
  }
}), rk = (t, e) => {
  const n = Mt() ? ye(Hg, I({})) : I({}), i = M(() => t.emptyValues || n.value.emptyValues || nk), r = M(() => gt(t.valueOnClear) ? t.valueOnClear() : t.valueOnClear !== void 0 ? t.valueOnClear : gt(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : ik), s = (o) => i.value.includes(o);
  return i.value.includes(r.value), {
    emptyValues: i,
    valueOnClear: r,
    isEmptyValue: s
  };
}, Bd = (t) => Object.keys(t), xl = I();
function aa(t, e = void 0) {
  const n = Mt() ? ye(gg, xl) : xl;
  return t ? M(() => {
    var i, r;
    return (r = (i = n.value) == null ? void 0 : i[t]) != null ? r : e;
  }) : n;
}
function zg(t, e) {
  const n = aa(), i = Ue(t, M(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || Ns;
  })), r = mo(M(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), s = Gu(M(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || Rg;
  })), o = M(() => {
    var l;
    return m(e) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return Gg(M(() => m(n) || {})), {
    ns: i,
    locale: r,
    zIndex: s,
    size: o
  };
}
const Gg = (t, e, n = !1) => {
  var i;
  const r = !!Mt(), s = r ? aa() : void 0, o = (i = void 0) != null ? i : r ? Lt : void 0;
  if (!o)
    return;
  const l = M(() => {
    const a = m(t);
    return s?.value ? sk(s.value, a) : a;
  });
  return o(gg, l), o(Fg, M(() => l.value.locale)), o(mg, M(() => l.value.namespace)), o(Ng, M(() => l.value.zIndex)), o(Vg, {
    size: M(() => l.value.size || "")
  }), o(Hg, M(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !xl.value) && (xl.value = l.value), l;
}, sk = (t, e) => {
  const n = [.../* @__PURE__ */ new Set([...Bd(t), ...Bd(e)])], i = {};
  for (const r of n)
    i[r] = e[r] !== void 0 ? e[r] : t[r];
  return i;
}, $t = "update:modelValue", Zr = "change", jr = "input";
var Me = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, r] of e)
    n[i] = r;
  return n;
};
const Ug = (t = "") => t.split(" ").filter((e) => !!e.trim()), Vd = (t, e) => {
  if (!t || !e)
    return !1;
  if (e.includes(" "))
    throw new Error("className should not contain space.");
  return t.classList.contains(e);
}, ok = (t, e) => {
  !t || !e.trim() || t.classList.add(...Ug(e));
}, lk = (t, e) => {
  !t || !e.trim() || t.classList.remove(...Ug(e));
}, ak = (t, e) => {
  var n;
  if (!nt || !t)
    return "";
  let i = Db(e);
  i === "float" && (i = "cssFloat");
  try {
    const r = t.style[i];
    if (r)
      return r;
    const s = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(t, "");
    return s ? s[i] : "";
  } catch {
    return t.style[i];
  }
};
function Ii(t, e = "px") {
  if (!t)
    return "";
  if (Ke(t) || _C(t))
    return `${t}${e}`;
  if (mn(t))
    return t;
}
let xo;
const ck = (t) => {
  var e;
  if (!nt)
    return 0;
  if (xo !== void 0)
    return xo;
  const n = document.createElement("div");
  n.className = `${t}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const i = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const s = r.offsetWidth;
  return (e = n.parentNode) == null || e.removeChild(n), xo = i - s, xo;
};
function uk(t, e) {
  if (!nt)
    return;
  if (!e) {
    t.scrollTop = 0;
    return;
  }
  const n = [];
  let i = e.offsetParent;
  for (; i !== null && t !== i && t.contains(i); )
    n.push(i), i = i.offsetParent;
  const r = e.offsetTop + n.reduce((a, c) => a + c.offsetTop, 0), s = r + e.offsetHeight, o = t.scrollTop, l = o + t.clientHeight;
  r < o ? t.scrollTop = r : s > l && (t.scrollTop = s - t.clientHeight);
}
const bn = (t, e) => {
  if (t.install = (n) => {
    for (const i of [t, ...Object.values(e ?? {})])
      n.component(i.name, i);
  }, e)
    for (const [n, i] of Object.entries(e))
      t[n] = i;
  return t;
}, jg = (t, e) => (t.install = (n) => {
  t._context = n._context, n.config.globalProperties[e] = t;
}, t), yo = (t) => (t.install = er, t), fk = Re({
  size: {
    type: fe([Number, String])
  },
  color: {
    type: String
  }
}), dk = Q({
  name: "ElIcon",
  inheritAttrs: !1
}), hk = /* @__PURE__ */ Q({
  ...dk,
  props: fk,
  setup(t) {
    const e = t, n = Ue("icon"), i = M(() => {
      const { size: r, color: s } = e;
      return !r && !s ? {} : {
        fontSize: ti(r) ? void 0 : Ii(r),
        "--color": s
      };
    });
    return (r, s) => (x(), R("i", On({
      class: m(n).b(),
      style: m(i)
    }, r.$attrs), [
      oe(r.$slots, "default")
    ], 16));
  }
});
var pk = /* @__PURE__ */ Me(hk, [["__file", "icon.vue"]]);
const _t = bn(pk);
/*! Element Plus Icons Vue v2.3.1 */
var gk = /* @__PURE__ */ Q({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Uu = gk, mk = /* @__PURE__ */ Q({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), vk = mk, yk = /* @__PURE__ */ Q({
  name: "CircleCheck",
  __name: "circle-check",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      T("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), bk = yk, wk = /* @__PURE__ */ Q({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Sk = wk, Ck = /* @__PURE__ */ Q({
  name: "CircleClose",
  __name: "circle-close",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      T("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), ju = Ck, kk = /* @__PURE__ */ Q({
  name: "Close",
  __name: "close",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Ml = kk, _k = /* @__PURE__ */ Q({
  name: "Hide",
  __name: "hide",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      T("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), Ek = _k, Tk = /* @__PURE__ */ Q({
  name: "InfoFilled",
  __name: "info-filled",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Ak = Tk, Ok = /* @__PURE__ */ Q({
  name: "Loading",
  __name: "loading",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Kg = Ok, xk = /* @__PURE__ */ Q({
  name: "Minus",
  __name: "minus",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), Mk = xk, Lk = /* @__PURE__ */ Q({
  name: "Plus",
  __name: "plus",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), Ik = Lk, Pk = /* @__PURE__ */ Q({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Dk = Pk, Rk = /* @__PURE__ */ Q({
  name: "View",
  __name: "view",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Nk = Rk, Fk = /* @__PURE__ */ Q({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(t) {
    return (e, n) => (x(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      T("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), $k = Fk;
const ui = fe([
  String,
  Object,
  Function
]), Yg = {
  Close: Ml
}, Bk = {
  Close: Ml
}, Ll = {
  success: Dk,
  warning: $k,
  error: Sk,
  info: Ak
}, qg = {
  validating: Kg,
  success: bk,
  error: ju
}, Jg = () => nt && /firefox/i.test(window.navigator.userAgent);
let on;
const Vk = {
  height: "0",
  visibility: "hidden",
  overflow: Jg() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Hk = [
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
function Wk(t) {
  const e = window.getComputedStyle(t), n = e.getPropertyValue("box-sizing"), i = Number.parseFloat(e.getPropertyValue("padding-bottom")) + Number.parseFloat(e.getPropertyValue("padding-top")), r = Number.parseFloat(e.getPropertyValue("border-bottom-width")) + Number.parseFloat(e.getPropertyValue("border-top-width"));
  return { contextStyle: Hk.map((o) => [
    o,
    e.getPropertyValue(o)
  ]), paddingSize: i, borderSize: r, boxSizing: n };
}
function Hd(t, e = 1, n) {
  var i;
  on || (on = document.createElement("textarea"), document.body.appendChild(on));
  const { paddingSize: r, borderSize: s, boxSizing: o, contextStyle: l } = Wk(t);
  l.forEach(([f, d]) => on?.style.setProperty(f, d)), Object.entries(Vk).forEach(([f, d]) => on?.style.setProperty(f, d, "important")), on.value = t.value || t.placeholder || "";
  let a = on.scrollHeight;
  const c = {};
  o === "border-box" ? a = a + s : o === "content-box" && (a = a - r), on.value = "";
  const u = on.scrollHeight - r;
  if (Ke(e)) {
    let f = u * e;
    o === "border-box" && (f = f + r + s), a = Math.max(f, a), c.minHeight = `${f}px`;
  }
  if (Ke(n)) {
    let f = u * n;
    o === "border-box" && (f = f + r + s), a = Math.min(f, a);
  }
  return c.height = `${a}px`, (i = on.parentNode) == null || i.removeChild(on), on = void 0, c;
}
const Xg = (t) => t, zk = Re({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), ms = (t) => kC(zk, t), Gk = Re({
  id: {
    type: String,
    default: void 0
  },
  size: vo,
  disabled: Boolean,
  modelValue: {
    type: fe([
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
    type: fe([Boolean, Object]),
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
    type: ui
  },
  prefixIcon: {
    type: ui
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
    type: fe([Object, Array, String]),
    default: () => Xg({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...ms(["ariaLabel"])
}), Uk = {
  [$t]: (t) => mn(t),
  input: (t) => mn(t),
  change: (t) => mn(t),
  focus: (t) => t instanceof FocusEvent,
  blur: (t) => t instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (t) => t instanceof MouseEvent,
  mouseenter: (t) => t instanceof MouseEvent,
  keydown: (t) => t instanceof Event,
  compositionstart: (t) => t instanceof CompositionEvent,
  compositionupdate: (t) => t instanceof CompositionEvent,
  compositionend: (t) => t instanceof CompositionEvent
}, jk = ["class", "style"], Kk = /^on[A-Z]/, Yk = (t = {}) => {
  const { excludeListeners: e = !1, excludeKeys: n } = t, i = M(() => (n?.value || []).concat(jk)), r = Mt();
  return r ? M(() => {
    var s;
    return Al(Object.entries((s = r.proxy) == null ? void 0 : s.$attrs).filter(([o]) => !i.value.includes(o) && !(e && Kk.test(o))));
  }) : M(() => ({}));
}, Ku = Symbol("formContextKey"), Il = Symbol("formItemContextKey"), Wd = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, qk = Symbol("elIdInjection"), Zg = () => Mt() ? ye(qk, Wd) : Wd, ir = (t) => {
  const e = Zg(), n = Du();
  return IC(() => m(t) || `${n.value}-id-${e.prefix}-${e.current++}`);
}, ca = () => {
  const t = ye(Ku, void 0), e = ye(Il, void 0);
  return {
    form: t,
    formItem: e
  };
}, Qg = (t, {
  formItemContext: e,
  disableIdGeneration: n,
  disableIdManagement: i
}) => {
  n || (n = I(!1)), i || (i = I(!1));
  const r = I();
  let s;
  const o = M(() => {
    var l;
    return !!(!(t.label || t.ariaLabel) && e && e.inputIds && ((l = e.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return it(() => {
    s = pe([Jt(t, "id"), n], ([l, a]) => {
      const c = l ?? (a ? void 0 : ir().value);
      c !== r.value && (e?.removeInputId && (r.value && e.removeInputId(r.value), !i?.value && !a && c && e.addInputId(c)), r.value = c);
    }, { immediate: !0 });
  }), Jr(() => {
    s && s(), e?.removeInputId && r.value && e.removeInputId(r.value);
  }), {
    isLabeledByFormItem: o,
    inputId: r
  };
}, em = (t) => {
  const e = Mt();
  return M(() => {
    var n, i;
    return (i = (n = e?.proxy) == null ? void 0 : n.$props) == null ? void 0 : i[t];
  });
}, vs = (t, e = {}) => {
  const n = I(void 0), i = e.prop ? n : em("size"), r = e.global ? n : tk(), s = e.form ? { size: void 0 } : ye(Ku, void 0), o = e.formItem ? { size: void 0 } : ye(Il, void 0);
  return M(() => i.value || m(t) || o?.size || s?.size || r.value || "");
}, ua = (t) => {
  const e = em("disabled"), n = ye(Ku, void 0);
  return M(() => e.value || m(t) || n?.disabled || !1);
};
function tm(t, {
  beforeFocus: e,
  afterFocus: n,
  beforeBlur: i,
  afterBlur: r
} = {}) {
  const s = Mt(), { emit: o } = s, l = Qi(), a = I(!1), c = (d) => {
    gt(e) && e(d) || a.value || (a.value = !0, o("focus", d), n?.());
  }, u = (d) => {
    var h;
    gt(i) && i(d) || d.relatedTarget && ((h = l.value) != null && h.contains(d.relatedTarget)) || (a.value = !1, o("blur", d), r?.());
  }, f = () => {
    var d, h;
    (d = l.value) != null && d.contains(document.activeElement) && l.value !== document.activeElement || (h = t.value) == null || h.focus();
  };
  return pe(l, (d) => {
    d && d.setAttribute("tabindex", "-1");
  }), kn(l, "focus", c, !0), kn(l, "blur", u, !0), kn(l, "click", f, !0), {
    isFocused: a,
    wrapperRef: l,
    handleFocus: c,
    handleBlur: u
  };
}
const Jk = (t) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(t);
function nm({
  afterComposition: t,
  emit: e
}) {
  const n = I(!1), i = (l) => {
    e?.("compositionstart", l), n.value = !0;
  }, r = (l) => {
    var a;
    e?.("compositionupdate", l);
    const c = (a = l.target) == null ? void 0 : a.value, u = c[c.length - 1] || "";
    n.value = !Jk(u);
  }, s = (l) => {
    e?.("compositionend", l), n.value && (n.value = !1, ct(() => t(l)));
  };
  return {
    isComposing: n,
    handleComposition: (l) => {
      l.type === "compositionend" ? s(l) : r(l);
    },
    handleCompositionStart: i,
    handleCompositionUpdate: r,
    handleCompositionEnd: s
  };
}
function Xk(t) {
  let e;
  function n() {
    if (t.value == null)
      return;
    const { selectionStart: r, selectionEnd: s, value: o } = t.value;
    if (r == null || s == null)
      return;
    const l = o.slice(0, Math.max(0, r)), a = o.slice(Math.max(0, s));
    e = {
      selectionStart: r,
      selectionEnd: s,
      value: o,
      beforeTxt: l,
      afterTxt: a
    };
  }
  function i() {
    if (t.value == null || e == null)
      return;
    const { value: r } = t.value, { beforeTxt: s, afterTxt: o, selectionStart: l } = e;
    if (s == null || o == null || l == null)
      return;
    let a = r.length;
    if (r.endsWith(o))
      a = r.length - o.length;
    else if (r.startsWith(s))
      a = s.length;
    else {
      const c = s[l - 1], u = r.indexOf(c, l - 1);
      u !== -1 && (a = u + 1);
    }
    t.value.setSelectionRange(a, a);
  }
  return [n, i];
}
const Zk = "ElInput", Qk = Q({
  name: Zk,
  inheritAttrs: !1
}), e_ = /* @__PURE__ */ Q({
  ...Qk,
  props: Gk,
  emits: Uk,
  setup(t, { expose: e, emit: n }) {
    const i = t, r = ob(), s = Yk(), o = Mu(), l = M(() => [
      i.type === "textarea" ? v.b() : p.b(),
      p.m(d.value),
      p.is("disabled", h.value),
      p.is("exceed", Ae.value),
      {
        [p.b("group")]: o.prepend || o.append,
        [p.m("prefix")]: o.prefix || i.prefixIcon,
        [p.m("suffix")]: o.suffix || i.suffixIcon || i.clearable || i.showPassword,
        [p.bm("suffix", "password-clear")]: ce.value && ae.value,
        [p.b("hidden")]: i.type === "hidden"
      },
      r.class
    ]), a = M(() => [
      p.e("wrapper"),
      p.is("focus", H.value)
    ]), { form: c, formItem: u } = ca(), { inputId: f } = Qg(i, {
      formItemContext: u
    }), d = vs(), h = ua(), p = Ue("input"), v = Ue("textarea"), y = Qi(), g = Qi(), b = I(!1), k = I(!1), S = I(), _ = Qi(i.inputStyle), E = M(() => y.value || g.value), { wrapperRef: C, isFocused: H, handleFocus: N, handleBlur: q } = tm(E, {
      beforeFocus() {
        return h.value;
      },
      afterBlur() {
        var A;
        i.validateEvent && ((A = u?.validate) == null || A.call(u, "blur").catch((F) => void 0));
      }
    }), z = M(() => {
      var A;
      return (A = c?.statusIcon) != null ? A : !1;
    }), W = M(() => u?.validateState || ""), te = M(() => W.value && qg[W.value]), ge = M(() => k.value ? Nk : Ek), D = M(() => [
      r.style
    ]), B = M(() => [
      i.inputStyle,
      _.value,
      { resize: i.resize }
    ]), V = M(() => xi(i.modelValue) ? "" : String(i.modelValue)), ce = M(() => i.clearable && !h.value && !i.readonly && !!V.value && (H.value || b.value)), ae = M(() => i.showPassword && !h.value && !!V.value && (!!V.value || H.value)), ke = M(() => i.showWordLimit && !!i.maxlength && (i.type === "text" || i.type === "textarea") && !h.value && !i.readonly && !i.showPassword), Oe = M(() => V.value.length), Ae = M(() => !!ke.value && Oe.value > Number(i.maxlength)), be = M(() => !!o.suffix || !!i.suffixIcon || ce.value || i.showPassword || ke.value || !!W.value && z.value), [We, xe] = Xk(y);
    Xn(g, (A) => {
      if (Ie(), !ke.value || i.resize !== "both")
        return;
      const F = A[0], { width: me } = F.contentRect;
      S.value = {
        right: `calc(100% - ${me + 15 + 6}px)`
      };
    });
    const ze = () => {
      const { type: A, autosize: F } = i;
      if (!(!nt || A !== "textarea" || !g.value))
        if (F) {
          const me = Sn(F) ? F.minRows : void 0, Ee = Sn(F) ? F.maxRows : void 0, et = Hd(g.value, me, Ee);
          _.value = {
            overflowY: "hidden",
            ...et
          }, ct(() => {
            g.value.offsetHeight, _.value = et;
          });
        } else
          _.value = {
            minHeight: Hd(g.value).minHeight
          };
    }, Ie = ((A) => {
      let F = !1;
      return () => {
        var me;
        if (F || !i.autosize)
          return;
        ((me = g.value) == null ? void 0 : me.offsetParent) === null || (A(), F = !0);
      };
    })(ze), bt = () => {
      const A = E.value, F = i.formatter ? i.formatter(V.value) : V.value;
      !A || A.value === F || (A.value = F);
    }, It = async (A) => {
      We();
      let { value: F } = A.target;
      if (i.formatter && i.parser && (F = i.parser(F)), !Wt.value) {
        if (F === V.value) {
          bt();
          return;
        }
        n($t, F), n(jr, F), await ct(), bt(), xe();
      }
    }, Pt = (A) => {
      let { value: F } = A.target;
      i.formatter && i.parser && (F = i.parser(F)), n(Zr, F);
    }, {
      isComposing: Wt,
      handleCompositionStart: At,
      handleCompositionUpdate: wt,
      handleCompositionEnd: ot
    } = nm({ emit: n, afterComposition: It }), zt = () => {
      We(), k.value = !k.value, setTimeout(xe);
    }, Dt = () => {
      var A;
      return (A = E.value) == null ? void 0 : A.focus();
    }, O = () => {
      var A;
      return (A = E.value) == null ? void 0 : A.blur();
    }, w = (A) => {
      b.value = !1, n("mouseleave", A);
    }, L = (A) => {
      b.value = !0, n("mouseenter", A);
    }, K = (A) => {
      n("keydown", A);
    }, de = () => {
      var A;
      (A = E.value) == null || A.select();
    }, he = () => {
      n($t, ""), n(Zr, ""), n("clear"), n(jr, "");
    };
    return pe(() => i.modelValue, () => {
      var A;
      ct(() => ze()), i.validateEvent && ((A = u?.validate) == null || A.call(u, "change").catch((F) => void 0));
    }), pe(V, () => bt()), pe(() => i.type, async () => {
      await ct(), bt(), ze();
    }), it(() => {
      !i.formatter && i.parser, bt(), ct(ze);
    }), e({
      input: y,
      textarea: g,
      ref: E,
      textareaStyle: B,
      autosize: Jt(i, "autosize"),
      isComposing: Wt,
      focus: Dt,
      blur: O,
      select: de,
      clear: he,
      resizeTextarea: ze
    }), (A, F) => (x(), R("div", {
      class: U([
        m(l),
        {
          [m(p).bm("group", "append")]: A.$slots.append,
          [m(p).bm("group", "prepend")]: A.$slots.prepend
        }
      ]),
      style: tt(m(D)),
      onMouseenter: L,
      onMouseleave: w
    }, [
      j(" input "),
      A.type !== "textarea" ? (x(), R(_e, { key: 0 }, [
        j(" prepend slot "),
        A.$slots.prepend ? (x(), R("div", {
          key: 0,
          class: U(m(p).be("group", "prepend"))
        }, [
          oe(A.$slots, "prepend")
        ], 2)) : j("v-if", !0),
        T("div", {
          ref_key: "wrapperRef",
          ref: C,
          class: U(m(a))
        }, [
          j(" prefix slot "),
          A.$slots.prefix || A.prefixIcon ? (x(), R("span", {
            key: 0,
            class: U(m(p).e("prefix"))
          }, [
            T("span", {
              class: U(m(p).e("prefix-inner"))
            }, [
              oe(A.$slots, "prefix"),
              A.prefixIcon ? (x(), se(m(_t), {
                key: 0,
                class: U(m(p).e("icon"))
              }, {
                default: X(() => [
                  (x(), se(en(A.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0),
          T("input", On({
            id: m(f),
            ref_key: "input",
            ref: y,
            class: m(p).e("inner")
          }, m(s), {
            minlength: A.minlength,
            maxlength: A.maxlength,
            type: A.showPassword ? k.value ? "text" : "password" : A.type,
            disabled: m(h),
            readonly: A.readonly,
            autocomplete: A.autocomplete,
            tabindex: A.tabindex,
            "aria-label": A.ariaLabel,
            placeholder: A.placeholder,
            style: A.inputStyle,
            form: A.form,
            autofocus: A.autofocus,
            role: A.containerRole,
            onCompositionstart: m(At),
            onCompositionupdate: m(wt),
            onCompositionend: m(ot),
            onInput: It,
            onChange: Pt,
            onKeydown: K
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          j(" suffix slot "),
          m(be) ? (x(), R("span", {
            key: 1,
            class: U(m(p).e("suffix"))
          }, [
            T("span", {
              class: U(m(p).e("suffix-inner"))
            }, [
              !m(ce) || !m(ae) || !m(ke) ? (x(), R(_e, { key: 0 }, [
                oe(A.$slots, "suffix"),
                A.suffixIcon ? (x(), se(m(_t), {
                  key: 0,
                  class: U(m(p).e("icon"))
                }, {
                  default: X(() => [
                    (x(), se(en(A.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : j("v-if", !0)
              ], 64)) : j("v-if", !0),
              m(ce) ? (x(), se(m(_t), {
                key: 1,
                class: U([m(p).e("icon"), m(p).e("clear")]),
                onMousedown: at(m(er), ["prevent"]),
                onClick: he
              }, {
                default: X(() => [
                  Z(m(ju))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : j("v-if", !0),
              m(ae) ? (x(), se(m(_t), {
                key: 2,
                class: U([m(p).e("icon"), m(p).e("password")]),
                onClick: zt
              }, {
                default: X(() => [
                  (x(), se(en(m(ge))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              m(ke) ? (x(), R("span", {
                key: 3,
                class: U(m(p).e("count"))
              }, [
                T("span", {
                  class: U(m(p).e("count-inner"))
                }, G(m(Oe)) + " / " + G(A.maxlength), 3)
              ], 2)) : j("v-if", !0),
              m(W) && m(te) && m(z) ? (x(), se(m(_t), {
                key: 4,
                class: U([
                  m(p).e("icon"),
                  m(p).e("validateIcon"),
                  m(p).is("loading", m(W) === "validating")
                ])
              }, {
                default: X(() => [
                  (x(), se(en(m(te))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0)
        ], 2),
        j(" append slot "),
        A.$slots.append ? (x(), R("div", {
          key: 1,
          class: U(m(p).be("group", "append"))
        }, [
          oe(A.$slots, "append")
        ], 2)) : j("v-if", !0)
      ], 64)) : (x(), R(_e, { key: 1 }, [
        j(" textarea "),
        T("textarea", On({
          id: m(f),
          ref_key: "textarea",
          ref: g,
          class: [m(v).e("inner"), m(p).is("focus", m(H))]
        }, m(s), {
          minlength: A.minlength,
          maxlength: A.maxlength,
          tabindex: A.tabindex,
          disabled: m(h),
          readonly: A.readonly,
          autocomplete: A.autocomplete,
          style: m(B),
          "aria-label": A.ariaLabel,
          placeholder: A.placeholder,
          form: A.form,
          autofocus: A.autofocus,
          rows: A.rows,
          role: A.containerRole,
          onCompositionstart: m(At),
          onCompositionupdate: m(wt),
          onCompositionend: m(ot),
          onInput: It,
          onFocus: m(N),
          onBlur: m(q),
          onChange: Pt,
          onKeydown: K
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        m(ke) ? (x(), R("span", {
          key: 0,
          style: tt(S.value),
          class: U(m(p).e("count"))
        }, G(m(Oe)) + " / " + G(A.maxlength), 7)) : j("v-if", !0)
      ], 64))
    ], 38));
  }
});
var t_ = /* @__PURE__ */ Me(e_, [["__file", "input.vue"]]);
const n_ = bn(t_), Nr = 4, i_ = {
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
}, r_ = ({
  move: t,
  size: e,
  bar: n
}) => ({
  [n.size]: e,
  transform: `translate${n.axis}(${t}%)`
}), Yu = Symbol("scrollbarContextKey"), s_ = Re({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), o_ = "Thumb", l_ = /* @__PURE__ */ Q({
  __name: "thumb",
  props: s_,
  setup(t) {
    const e = t, n = ye(Yu), i = Ue("scrollbar");
    n || zu(o_, "can not inject scrollbar context");
    const r = I(), s = I(), o = I({}), l = I(!1);
    let a = !1, c = !1, u = nt ? document.onselectstart : null;
    const f = M(() => i_[e.vertical ? "vertical" : "horizontal"]), d = M(() => r_({
      size: e.size,
      move: e.move,
      bar: f.value
    })), h = M(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / e.ratio / s.value[f.value.offset]), p = (E) => {
      var C;
      if (E.stopPropagation(), E.ctrlKey || [1, 2].includes(E.button))
        return;
      (C = window.getSelection()) == null || C.removeAllRanges(), y(E);
      const H = E.currentTarget;
      H && (o.value[f.value.axis] = H[f.value.offset] - (E[f.value.client] - H.getBoundingClientRect()[f.value.direction]));
    }, v = (E) => {
      if (!s.value || !r.value || !n.wrapElement)
        return;
      const C = Math.abs(E.target.getBoundingClientRect()[f.value.direction] - E[f.value.client]), H = s.value[f.value.offset] / 2, N = (C - H) * 100 * h.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = N * n.wrapElement[f.value.scrollSize] / 100;
    }, y = (E) => {
      E.stopImmediatePropagation(), a = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", b), u = document.onselectstart, document.onselectstart = () => !1;
    }, g = (E) => {
      if (!r.value || !s.value || a === !1)
        return;
      const C = o.value[f.value.axis];
      if (!C)
        return;
      const H = (r.value.getBoundingClientRect()[f.value.direction] - E[f.value.client]) * -1, N = s.value[f.value.offset] - C, q = (H - N) * 100 * h.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = q * n.wrapElement[f.value.scrollSize] / 100;
    }, b = () => {
      a = !1, o.value[f.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", b), _(), c && (l.value = !1);
    }, k = () => {
      c = !1, l.value = !!e.size;
    }, S = () => {
      c = !0, l.value = a;
    };
    yn(() => {
      _(), document.removeEventListener("mouseup", b);
    });
    const _ = () => {
      document.onselectstart !== u && (document.onselectstart = u);
    };
    return kn(Jt(n, "scrollbarElement"), "mousemove", k), kn(Jt(n, "scrollbarElement"), "mouseleave", S), (E, C) => (x(), se(Ri, {
      name: m(i).b("fade"),
      persisted: ""
    }, {
      default: X(() => [
        nn(T("div", {
          ref_key: "instance",
          ref: r,
          class: U([m(i).e("bar"), m(i).is(m(f).key)]),
          onMousedown: v
        }, [
          T("div", {
            ref_key: "thumb",
            ref: s,
            class: U(m(i).e("thumb")),
            style: tt(m(d)),
            onMousedown: p
          }, null, 38)
        ], 34), [
          [ai, E.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var zd = /* @__PURE__ */ Me(l_, [["__file", "thumb.vue"]]);
const a_ = Re({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), c_ = /* @__PURE__ */ Q({
  __name: "bar",
  props: a_,
  setup(t, { expose: e }) {
    const n = t, i = ye(Yu), r = I(0), s = I(0), o = I(""), l = I(""), a = I(1), c = I(1);
    return e({
      handleScroll: (d) => {
        if (d) {
          const h = d.offsetHeight - Nr, p = d.offsetWidth - Nr;
          s.value = d.scrollTop * 100 / h * a.value, r.value = d.scrollLeft * 100 / p * c.value;
        }
      },
      update: () => {
        const d = i?.wrapElement;
        if (!d)
          return;
        const h = d.offsetHeight - Nr, p = d.offsetWidth - Nr, v = h ** 2 / d.scrollHeight, y = p ** 2 / d.scrollWidth, g = Math.max(v, n.minSize), b = Math.max(y, n.minSize);
        a.value = v / (h - v) / (g / (h - g)), c.value = y / (p - y) / (b / (p - b)), l.value = g + Nr < h ? `${g}px` : "", o.value = b + Nr < p ? `${b}px` : "";
      }
    }), (d, h) => (x(), R(_e, null, [
      Z(zd, {
        move: r.value,
        ratio: c.value,
        size: o.value,
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      Z(zd, {
        move: s.value,
        ratio: a.value,
        size: l.value,
        vertical: "",
        always: d.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var u_ = /* @__PURE__ */ Me(c_, [["__file", "bar.vue"]]);
const f_ = Re({
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
    type: fe([String, Object, Array]),
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
  ...ms(["ariaLabel", "ariaOrientation"])
}), d_ = {
  scroll: ({
    scrollTop: t,
    scrollLeft: e
  }) => [t, e].every(Ke)
}, h_ = "ElScrollbar", p_ = Q({
  name: h_
}), g_ = /* @__PURE__ */ Q({
  ...p_,
  props: f_,
  emits: d_,
  setup(t, { expose: e, emit: n }) {
    const i = t, r = Ue("scrollbar");
    let s, o, l = 0, a = 0;
    const c = I(), u = I(), f = I(), d = I(), h = M(() => {
      const _ = {};
      return i.height && (_.height = Ii(i.height)), i.maxHeight && (_.maxHeight = Ii(i.maxHeight)), [i.wrapStyle, _];
    }), p = M(() => [
      i.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !i.native }
    ]), v = M(() => [r.e("view"), i.viewClass]), y = () => {
      var _;
      u.value && ((_ = d.value) == null || _.handleScroll(u.value), l = u.value.scrollTop, a = u.value.scrollLeft, n("scroll", {
        scrollTop: u.value.scrollTop,
        scrollLeft: u.value.scrollLeft
      }));
    };
    function g(_, E) {
      Sn(_) ? u.value.scrollTo(_) : Ke(_) && Ke(E) && u.value.scrollTo(_, E);
    }
    const b = (_) => {
      Ke(_) && (u.value.scrollTop = _);
    }, k = (_) => {
      Ke(_) && (u.value.scrollLeft = _);
    }, S = () => {
      var _;
      (_ = d.value) == null || _.update();
    };
    return pe(() => i.noresize, (_) => {
      _ ? (s?.(), o?.()) : ({ stop: s } = Xn(f, S), o = kn("resize", S));
    }, { immediate: !0 }), pe(() => [i.maxHeight, i.height], () => {
      i.native || ct(() => {
        var _;
        S(), u.value && ((_ = d.value) == null || _.handleScroll(u.value));
      });
    }), Lt(Yu, tr({
      scrollbarElement: c,
      wrapElement: u
    })), lb(() => {
      u.value && (u.value.scrollTop = l, u.value.scrollLeft = a);
    }), it(() => {
      i.native || ct(() => {
        S();
      });
    }), dg(() => S()), e({
      wrapRef: u,
      update: S,
      scrollTo: g,
      setScrollTop: b,
      setScrollLeft: k,
      handleScroll: y
    }), (_, E) => (x(), R("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: U(m(r).b())
    }, [
      T("div", {
        ref_key: "wrapRef",
        ref: u,
        class: U(m(p)),
        style: tt(m(h)),
        tabindex: _.tabindex,
        onScroll: y
      }, [
        (x(), se(en(_.tag), {
          id: _.id,
          ref_key: "resizeRef",
          ref: f,
          class: U(m(v)),
          style: tt(_.viewStyle),
          role: _.role,
          "aria-label": _.ariaLabel,
          "aria-orientation": _.ariaOrientation
        }, {
          default: X(() => [
            oe(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      _.native ? j("v-if", !0) : (x(), se(u_, {
        key: 0,
        ref_key: "barRef",
        ref: d,
        always: _.always,
        "min-size": _.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var m_ = /* @__PURE__ */ Me(g_, [["__file", "scrollbar.vue"]]);
const im = bn(m_), qu = Symbol("popper"), rm = Symbol("popperContent"), sm = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], om = Re({
  role: {
    type: String,
    values: sm,
    default: "tooltip"
  }
}), v_ = Q({
  name: "ElPopper",
  inheritAttrs: !1
}), y_ = /* @__PURE__ */ Q({
  ...v_,
  props: om,
  setup(t, { expose: e }) {
    const n = t, i = I(), r = I(), s = I(), o = I(), l = M(() => n.role), a = {
      triggerRef: i,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: o,
      role: l
    };
    return e(a), Lt(qu, a), (c, u) => oe(c.$slots, "default");
  }
});
var b_ = /* @__PURE__ */ Me(y_, [["__file", "popper.vue"]]);
const lm = Re({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), w_ = Q({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), S_ = /* @__PURE__ */ Q({
  ...w_,
  props: lm,
  setup(t, { expose: e }) {
    const n = t, i = Ue("popper"), { arrowOffset: r, arrowRef: s, arrowStyle: o } = ye(rm, void 0);
    return pe(() => n.arrowOffset, (l) => {
      r.value = l;
    }), yn(() => {
      s.value = void 0;
    }), e({
      arrowRef: s
    }), (l, a) => (x(), R("span", {
      ref_key: "arrowRef",
      ref: s,
      class: U(m(i).e("arrow")),
      style: tt(m(o)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var C_ = /* @__PURE__ */ Me(S_, [["__file", "arrow.vue"]]);
const am = Re({
  virtualRef: {
    type: fe(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: fe(Function)
  },
  onMouseleave: {
    type: fe(Function)
  },
  onClick: {
    type: fe(Function)
  },
  onKeydown: {
    type: fe(Function)
  },
  onFocus: {
    type: fe(Function)
  },
  onBlur: {
    type: fe(Function)
  },
  onContextmenu: {
    type: fe(Function)
  },
  id: String,
  open: Boolean
}), cm = Symbol("elForwardRef"), k_ = (t) => {
  Lt(cm, {
    setForwardRef: (n) => {
      t.value = n;
    }
  });
}, __ = (t) => ({
  mounted(e) {
    t(e);
  },
  updated(e) {
    t(e);
  },
  unmounted() {
    t(null);
  }
}), Sc = (t) => {
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
}, E_ = "ElOnlyChild", um = Q({
  name: E_,
  setup(t, {
    slots: e,
    attrs: n
  }) {
    var i;
    const r = ye(cm), s = __((i = r?.setForwardRef) != null ? i : er);
    return () => {
      var o;
      const l = (o = e.default) == null ? void 0 : o.call(e, n);
      if (!l || l.length > 1)
        return null;
      const a = fm(l);
      return a ? nn(ab(a, n), [[s]]) : null;
    };
  }
});
function fm(t) {
  if (!t)
    return null;
  const e = t;
  for (const n of e) {
    if (Sn(n))
      switch (n.type) {
        case cb:
          continue;
        case Lu:
        case "svg":
          return Gd(n);
        case _e:
          return fm(n.children);
        default:
          return n;
      }
    return Gd(n);
  }
  return null;
}
function Gd(t) {
  const e = Ue("only-child");
  return Z("span", {
    class: e.e("content")
  }, [t]);
}
const T_ = Q({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), A_ = /* @__PURE__ */ Q({
  ...T_,
  props: am,
  setup(t, { expose: e }) {
    const n = t, { role: i, triggerRef: r } = ye(qu, void 0);
    k_(r);
    const s = M(() => l.value ? n.id : void 0), o = M(() => {
      if (i && i.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), l = M(() => {
      if (i && i.value !== "tooltip")
        return i.value;
    }), a = M(() => l.value ? `${n.open}` : void 0);
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
    return it(() => {
      pe(() => n.virtualRef, (f) => {
        f && (r.value = _i(f));
      }, {
        immediate: !0
      }), pe(r, (f, d) => {
        c?.(), c = void 0, Bn(f) && (u.forEach((h) => {
          var p;
          const v = n[h];
          v && (f.addEventListener(h.slice(2).toLowerCase(), v), (p = d?.removeEventListener) == null || p.call(d, h.slice(2).toLowerCase(), v));
        }), Sc(f) && (c = pe([s, o, l, a], (h) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((p, v) => {
            xi(h[v]) ? f.removeAttribute(p) : f.setAttribute(p, h[v]);
          });
        }, { immediate: !0 }))), Bn(d) && Sc(d) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((h) => d.removeAttribute(h));
      }, {
        immediate: !0
      });
    }), yn(() => {
      if (c?.(), c = void 0, r.value && Bn(r.value)) {
        const f = r.value;
        u.forEach((d) => {
          const h = n[d];
          h && f.removeEventListener(d.slice(2).toLowerCase(), h);
        }), r.value = void 0;
      }
    }), e({
      triggerRef: r
    }), (f, d) => f.virtualTriggering ? j("v-if", !0) : (x(), se(m(um), On({ key: 0 }, f.$attrs, {
      "aria-controls": m(s),
      "aria-describedby": m(o),
      "aria-expanded": m(a),
      "aria-haspopup": m(l)
    }), {
      default: X(() => [
        oe(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var O_ = /* @__PURE__ */ Me(A_, [["__file", "trigger.vue"]]);
const Fa = "focus-trap.focus-after-trapped", $a = "focus-trap.focus-after-released", x_ = "focus-trap.focusout-prevented", Ud = {
  cancelable: !0,
  bubbles: !1
}, M_ = {
  cancelable: !0,
  bubbles: !1
}, jd = "focusAfterTrapped", Kd = "focusAfterReleased", Ju = Symbol("elFocusTrap"), Xu = I(), fa = I(0), Zu = I(0);
let Mo = 0;
const dm = (t) => {
  const e = [], n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (i) => {
      const r = i.tagName === "INPUT" && i.type === "hidden";
      return i.disabled || i.hidden || r ? NodeFilter.FILTER_SKIP : i.tabIndex >= 0 || i === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    e.push(n.currentNode);
  return e;
}, Yd = (t, e) => {
  for (const n of t)
    if (!L_(n, e))
      return n;
}, L_ = (t, e) => {
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
}, I_ = (t) => {
  const e = dm(t), n = Yd(e, t), i = Yd(e.reverse(), t);
  return [n, i];
}, P_ = (t) => t instanceof HTMLInputElement && "select" in t, bi = (t, e) => {
  if (t && t.focus) {
    const n = document.activeElement;
    let i = !1;
    Bn(t) && !Sc(t) && !t.getAttribute("tabindex") && (t.setAttribute("tabindex", "-1"), i = !0), t.focus({ preventScroll: !0 }), Zu.value = window.performance.now(), t !== n && P_(t) && e && t.select(), Bn(t) && i && t.removeAttribute("tabindex");
  }
};
function qd(t, e) {
  const n = [...t], i = t.indexOf(e);
  return i !== -1 && n.splice(i, 1), n;
}
const D_ = () => {
  let t = [];
  return {
    push: (i) => {
      const r = t[0];
      r && i !== r && r.pause(), t = qd(t, i), t.unshift(i);
    },
    remove: (i) => {
      var r, s;
      t = qd(t, i), (s = (r = t[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, R_ = (t, e = !1) => {
  const n = document.activeElement;
  for (const i of t)
    if (bi(i, e), document.activeElement !== n)
      return;
}, Jd = D_(), N_ = () => fa.value > Zu.value, Lo = () => {
  Xu.value = "pointer", fa.value = window.performance.now();
}, Xd = () => {
  Xu.value = "keyboard", fa.value = window.performance.now();
}, F_ = () => (it(() => {
  Mo === 0 && (document.addEventListener("mousedown", Lo), document.addEventListener("touchstart", Lo), document.addEventListener("keydown", Xd)), Mo++;
}), yn(() => {
  Mo--, Mo <= 0 && (document.removeEventListener("mousedown", Lo), document.removeEventListener("touchstart", Lo), document.removeEventListener("keydown", Xd));
}), {
  focusReason: Xu,
  lastUserFocusTimestamp: fa,
  lastAutomatedFocusTimestamp: Zu
}), Io = (t) => new CustomEvent(x_, {
  ...M_,
  detail: t
}), Ze = {
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
let Hr = [];
const Zd = (t) => {
  t.code === Ze.esc && Hr.forEach((e) => e(t));
}, $_ = (t) => {
  it(() => {
    Hr.length === 0 && document.addEventListener("keydown", Zd), nt && Hr.push(t);
  }), yn(() => {
    Hr = Hr.filter((e) => e !== t), Hr.length === 0 && nt && document.removeEventListener("keydown", Zd);
  });
}, B_ = Q({
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
    jd,
    Kd,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(t, { emit: e }) {
    const n = I();
    let i, r;
    const { focusReason: s } = F_();
    $_((p) => {
      t.trapped && !o.paused && e("release-requested", p);
    });
    const o = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, l = (p) => {
      if (!t.loop && !t.trapped || o.paused)
        return;
      const { code: v, altKey: y, ctrlKey: g, metaKey: b, currentTarget: k, shiftKey: S } = p, { loop: _ } = t, E = v === Ze.tab && !y && !g && !b, C = document.activeElement;
      if (E && C) {
        const H = k, [N, q] = I_(H);
        if (N && q) {
          if (!S && C === q) {
            const W = Io({
              focusReason: s.value
            });
            e("focusout-prevented", W), W.defaultPrevented || (p.preventDefault(), _ && bi(N, !0));
          } else if (S && [N, H].includes(C)) {
            const W = Io({
              focusReason: s.value
            });
            e("focusout-prevented", W), W.defaultPrevented || (p.preventDefault(), _ && bi(q, !0));
          }
        } else if (C === H) {
          const W = Io({
            focusReason: s.value
          });
          e("focusout-prevented", W), W.defaultPrevented || p.preventDefault();
        }
      }
    };
    Lt(Ju, {
      focusTrapRef: n,
      onKeydown: l
    }), pe(() => t.focusTrapEl, (p) => {
      p && (n.value = p);
    }, { immediate: !0 }), pe([n], ([p], [v]) => {
      p && (p.addEventListener("keydown", l), p.addEventListener("focusin", u), p.addEventListener("focusout", f)), v && (v.removeEventListener("keydown", l), v.removeEventListener("focusin", u), v.removeEventListener("focusout", f));
    });
    const a = (p) => {
      e(jd, p);
    }, c = (p) => e(Kd, p), u = (p) => {
      const v = m(n);
      if (!v)
        return;
      const y = p.target, g = p.relatedTarget, b = y && v.contains(y);
      t.trapped || g && v.contains(g) || (i = g), b && e("focusin", p), !o.paused && t.trapped && (b ? r = y : bi(r, !0));
    }, f = (p) => {
      const v = m(n);
      if (!(o.paused || !v))
        if (t.trapped) {
          const y = p.relatedTarget;
          !xi(y) && !v.contains(y) && setTimeout(() => {
            if (!o.paused && t.trapped) {
              const g = Io({
                focusReason: s.value
              });
              e("focusout-prevented", g), g.defaultPrevented || bi(r, !0);
            }
          }, 0);
        } else {
          const y = p.target;
          y && v.contains(y) || e("focusout", p);
        }
    };
    async function d() {
      await ct();
      const p = m(n);
      if (p) {
        Jd.push(o);
        const v = p.contains(document.activeElement) ? i : document.activeElement;
        if (i = v, !p.contains(v)) {
          const g = new Event(Fa, Ud);
          p.addEventListener(Fa, a), p.dispatchEvent(g), g.defaultPrevented || ct(() => {
            let b = t.focusStartEl;
            mn(b) || (bi(b), document.activeElement !== b && (b = "first")), b === "first" && R_(dm(p), !0), (document.activeElement === v || b === "container") && bi(p);
          });
        }
      }
    }
    function h() {
      const p = m(n);
      if (p) {
        p.removeEventListener(Fa, a);
        const v = new CustomEvent($a, {
          ...Ud,
          detail: {
            focusReason: s.value
          }
        });
        p.addEventListener($a, c), p.dispatchEvent(v), !v.defaultPrevented && (s.value == "keyboard" || !N_() || p.contains(document.activeElement)) && bi(i ?? document.body), p.removeEventListener($a, c), Jd.remove(o);
      }
    }
    return it(() => {
      t.trapped && d(), pe(() => t.trapped, (p) => {
        p ? d() : h();
      });
    }), yn(() => {
      t.trapped && h(), n.value && (n.value.removeEventListener("keydown", l), n.value.removeEventListener("focusin", u), n.value.removeEventListener("focusout", f), n.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function V_(t, e, n, i, r, s) {
  return oe(t.$slots, "default", { handleKeydown: t.onKeydown });
}
var hm = /* @__PURE__ */ Me(B_, [["render", V_], ["__file", "focus-trap.vue"]]), cn = "top", xn = "bottom", Mn = "right", un = "left", Qu = "auto", bo = [cn, xn, Mn, un], Qr = "start", Qs = "end", H_ = "clippingParents", pm = "viewport", Cs = "popper", W_ = "reference", Qd = bo.reduce(function(t, e) {
  return t.concat([e + "-" + Qr, e + "-" + Qs]);
}, []), da = [].concat(bo, [Qu]).reduce(function(t, e) {
  return t.concat([e, e + "-" + Qr, e + "-" + Qs]);
}, []), z_ = "beforeRead", G_ = "read", U_ = "afterRead", j_ = "beforeMain", K_ = "main", Y_ = "afterMain", q_ = "beforeWrite", J_ = "write", X_ = "afterWrite", Z_ = [z_, G_, U_, j_, K_, Y_, q_, J_, X_];
function fi(t) {
  return t ? (t.nodeName || "").toLowerCase() : null;
}
function vn(t) {
  if (t == null) return window;
  if (t.toString() !== "[object Window]") {
    var e = t.ownerDocument;
    return e && e.defaultView || window;
  }
  return t;
}
function Tr(t) {
  var e = vn(t).Element;
  return t instanceof e || t instanceof Element;
}
function _n(t) {
  var e = vn(t).HTMLElement;
  return t instanceof e || t instanceof HTMLElement;
}
function ef(t) {
  if (typeof ShadowRoot > "u") return !1;
  var e = vn(t).ShadowRoot;
  return t instanceof e || t instanceof ShadowRoot;
}
function Q_(t) {
  var e = t.state;
  Object.keys(e.elements).forEach(function(n) {
    var i = e.styles[n] || {}, r = e.attributes[n] || {}, s = e.elements[n];
    !_n(s) || !fi(s) || (Object.assign(s.style, i), Object.keys(r).forEach(function(o) {
      var l = r[o];
      l === !1 ? s.removeAttribute(o) : s.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function e2(t) {
  var e = t.state, n = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function() {
    Object.keys(e.elements).forEach(function(i) {
      var r = e.elements[i], s = e.attributes[i] || {}, o = Object.keys(e.styles.hasOwnProperty(i) ? e.styles[i] : n[i]), l = o.reduce(function(a, c) {
        return a[c] = "", a;
      }, {});
      !_n(r) || !fi(r) || (Object.assign(r.style, l), Object.keys(s).forEach(function(a) {
        r.removeAttribute(a);
      }));
    });
  };
}
var gm = { name: "applyStyles", enabled: !0, phase: "write", fn: Q_, effect: e2, requires: ["computeStyles"] };
function si(t) {
  return t.split("-")[0];
}
var kr = Math.max, Pl = Math.min, es = Math.round;
function Cc() {
  var t = navigator.userAgentData;
  return t != null && t.brands && Array.isArray(t.brands) ? t.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function mm() {
  return !/^((?!chrome|android).)*safari/i.test(Cc());
}
function ts(t, e, n) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  var i = t.getBoundingClientRect(), r = 1, s = 1;
  e && _n(t) && (r = t.offsetWidth > 0 && es(i.width) / t.offsetWidth || 1, s = t.offsetHeight > 0 && es(i.height) / t.offsetHeight || 1);
  var o = Tr(t) ? vn(t) : window, l = o.visualViewport, a = !mm() && n, c = (i.left + (a && l ? l.offsetLeft : 0)) / r, u = (i.top + (a && l ? l.offsetTop : 0)) / s, f = i.width / r, d = i.height / s;
  return { width: f, height: d, top: u, right: c + f, bottom: u + d, left: c, x: c, y: u };
}
function tf(t) {
  var e = ts(t), n = t.offsetWidth, i = t.offsetHeight;
  return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), { x: t.offsetLeft, y: t.offsetTop, width: n, height: i };
}
function vm(t, e) {
  var n = e.getRootNode && e.getRootNode();
  if (t.contains(e)) return !0;
  if (n && ef(n)) {
    var i = e;
    do {
      if (i && t.isSameNode(i)) return !0;
      i = i.parentNode || i.host;
    } while (i);
  }
  return !1;
}
function Pi(t) {
  return vn(t).getComputedStyle(t);
}
function t2(t) {
  return ["table", "td", "th"].indexOf(fi(t)) >= 0;
}
function cr(t) {
  return ((Tr(t) ? t.ownerDocument : t.document) || window.document).documentElement;
}
function ha(t) {
  return fi(t) === "html" ? t : t.assignedSlot || t.parentNode || (ef(t) ? t.host : null) || cr(t);
}
function eh(t) {
  return !_n(t) || Pi(t).position === "fixed" ? null : t.offsetParent;
}
function n2(t) {
  var e = /firefox/i.test(Cc()), n = /Trident/i.test(Cc());
  if (n && _n(t)) {
    var i = Pi(t);
    if (i.position === "fixed") return null;
  }
  var r = ha(t);
  for (ef(r) && (r = r.host); _n(r) && ["html", "body"].indexOf(fi(r)) < 0; ) {
    var s = Pi(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || e && s.willChange === "filter" || e && s.filter && s.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function wo(t) {
  for (var e = vn(t), n = eh(t); n && t2(n) && Pi(n).position === "static"; ) n = eh(n);
  return n && (fi(n) === "html" || fi(n) === "body" && Pi(n).position === "static") ? e : n || n2(t) || e;
}
function nf(t) {
  return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
}
function Bs(t, e, n) {
  return kr(t, Pl(e, n));
}
function i2(t, e, n) {
  var i = Bs(t, e, n);
  return i > n ? n : i;
}
function ym() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function bm(t) {
  return Object.assign({}, ym(), t);
}
function wm(t, e) {
  return e.reduce(function(n, i) {
    return n[i] = t, n;
  }, {});
}
var r2 = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, { placement: e.placement })) : t, bm(typeof t != "number" ? t : wm(t, bo));
};
function s2(t) {
  var e, n = t.state, i = t.name, r = t.options, s = n.elements.arrow, o = n.modifiersData.popperOffsets, l = si(n.placement), a = nf(l), c = [un, Mn].indexOf(l) >= 0, u = c ? "height" : "width";
  if (!(!s || !o)) {
    var f = r2(r.padding, n), d = tf(s), h = a === "y" ? cn : un, p = a === "y" ? xn : Mn, v = n.rects.reference[u] + n.rects.reference[a] - o[a] - n.rects.popper[u], y = o[a] - n.rects.reference[a], g = wo(s), b = g ? a === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, k = v / 2 - y / 2, S = f[h], _ = b - d[u] - f[p], E = b / 2 - d[u] / 2 + k, C = Bs(S, E, _), H = a;
    n.modifiersData[i] = (e = {}, e[H] = C, e.centerOffset = C - E, e);
  }
}
function o2(t) {
  var e = t.state, n = t.options, i = n.element, r = i === void 0 ? "[data-popper-arrow]" : i;
  r != null && (typeof r == "string" && (r = e.elements.popper.querySelector(r), !r) || vm(e.elements.popper, r) && (e.elements.arrow = r));
}
var l2 = { name: "arrow", enabled: !0, phase: "main", fn: s2, effect: o2, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function ns(t) {
  return t.split("-")[1];
}
var a2 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function c2(t, e) {
  var n = t.x, i = t.y, r = e.devicePixelRatio || 1;
  return { x: es(n * r) / r || 0, y: es(i * r) / r || 0 };
}
function th(t) {
  var e, n = t.popper, i = t.popperRect, r = t.placement, s = t.variation, o = t.offsets, l = t.position, a = t.gpuAcceleration, c = t.adaptive, u = t.roundOffsets, f = t.isFixed, d = o.x, h = d === void 0 ? 0 : d, p = o.y, v = p === void 0 ? 0 : p, y = typeof u == "function" ? u({ x: h, y: v }) : { x: h, y: v };
  h = y.x, v = y.y;
  var g = o.hasOwnProperty("x"), b = o.hasOwnProperty("y"), k = un, S = cn, _ = window;
  if (c) {
    var E = wo(n), C = "clientHeight", H = "clientWidth";
    if (E === vn(n) && (E = cr(n), Pi(E).position !== "static" && l === "absolute" && (C = "scrollHeight", H = "scrollWidth")), E = E, r === cn || (r === un || r === Mn) && s === Qs) {
      S = xn;
      var N = f && E === _ && _.visualViewport ? _.visualViewport.height : E[C];
      v -= N - i.height, v *= a ? 1 : -1;
    }
    if (r === un || (r === cn || r === xn) && s === Qs) {
      k = Mn;
      var q = f && E === _ && _.visualViewport ? _.visualViewport.width : E[H];
      h -= q - i.width, h *= a ? 1 : -1;
    }
  }
  var z = Object.assign({ position: l }, c && a2), W = u === !0 ? c2({ x: h, y: v }, vn(n)) : { x: h, y: v };
  if (h = W.x, v = W.y, a) {
    var te;
    return Object.assign({}, z, (te = {}, te[S] = b ? "0" : "", te[k] = g ? "0" : "", te.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + v + "px)" : "translate3d(" + h + "px, " + v + "px, 0)", te));
  }
  return Object.assign({}, z, (e = {}, e[S] = b ? v + "px" : "", e[k] = g ? h + "px" : "", e.transform = "", e));
}
function u2(t) {
  var e = t.state, n = t.options, i = n.gpuAcceleration, r = i === void 0 ? !0 : i, s = n.adaptive, o = s === void 0 ? !0 : s, l = n.roundOffsets, a = l === void 0 ? !0 : l, c = { placement: si(e.placement), variation: ns(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: r, isFixed: e.options.strategy === "fixed" };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, th(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: o, roundOffsets: a })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, th(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: a })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
}
var Sm = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: u2, data: {} }, Po = { passive: !0 };
function f2(t) {
  var e = t.state, n = t.instance, i = t.options, r = i.scroll, s = r === void 0 ? !0 : r, o = i.resize, l = o === void 0 ? !0 : o, a = vn(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return s && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, Po);
  }), l && a.addEventListener("resize", n.update, Po), function() {
    s && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, Po);
    }), l && a.removeEventListener("resize", n.update, Po);
  };
}
var Cm = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: f2, data: {} }, d2 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ol(t) {
  return t.replace(/left|right|bottom|top/g, function(e) {
    return d2[e];
  });
}
var h2 = { start: "end", end: "start" };
function nh(t) {
  return t.replace(/start|end/g, function(e) {
    return h2[e];
  });
}
function rf(t) {
  var e = vn(t), n = e.pageXOffset, i = e.pageYOffset;
  return { scrollLeft: n, scrollTop: i };
}
function sf(t) {
  return ts(cr(t)).left + rf(t).scrollLeft;
}
function p2(t, e) {
  var n = vn(t), i = cr(t), r = n.visualViewport, s = i.clientWidth, o = i.clientHeight, l = 0, a = 0;
  if (r) {
    s = r.width, o = r.height;
    var c = mm();
    (c || !c && e === "fixed") && (l = r.offsetLeft, a = r.offsetTop);
  }
  return { width: s, height: o, x: l + sf(t), y: a };
}
function g2(t) {
  var e, n = cr(t), i = rf(t), r = (e = t.ownerDocument) == null ? void 0 : e.body, s = kr(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), o = kr(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -i.scrollLeft + sf(t), a = -i.scrollTop;
  return Pi(r || n).direction === "rtl" && (l += kr(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: o, x: l, y: a };
}
function of(t) {
  var e = Pi(t), n = e.overflow, i = e.overflowX, r = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + i);
}
function km(t) {
  return ["html", "body", "#document"].indexOf(fi(t)) >= 0 ? t.ownerDocument.body : _n(t) && of(t) ? t : km(ha(t));
}
function Vs(t, e) {
  var n;
  e === void 0 && (e = []);
  var i = km(t), r = i === ((n = t.ownerDocument) == null ? void 0 : n.body), s = vn(i), o = r ? [s].concat(s.visualViewport || [], of(i) ? i : []) : i, l = e.concat(o);
  return r ? l : l.concat(Vs(ha(o)));
}
function kc(t) {
  return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
}
function m2(t, e) {
  var n = ts(t, !1, e === "fixed");
  return n.top = n.top + t.clientTop, n.left = n.left + t.clientLeft, n.bottom = n.top + t.clientHeight, n.right = n.left + t.clientWidth, n.width = t.clientWidth, n.height = t.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ih(t, e, n) {
  return e === pm ? kc(p2(t, n)) : Tr(e) ? m2(e, n) : kc(g2(cr(t)));
}
function v2(t) {
  var e = Vs(ha(t)), n = ["absolute", "fixed"].indexOf(Pi(t).position) >= 0, i = n && _n(t) ? wo(t) : t;
  return Tr(i) ? e.filter(function(r) {
    return Tr(r) && vm(r, i) && fi(r) !== "body";
  }) : [];
}
function y2(t, e, n, i) {
  var r = e === "clippingParents" ? v2(t) : [].concat(e), s = [].concat(r, [n]), o = s[0], l = s.reduce(function(a, c) {
    var u = ih(t, c, i);
    return a.top = kr(u.top, a.top), a.right = Pl(u.right, a.right), a.bottom = Pl(u.bottom, a.bottom), a.left = kr(u.left, a.left), a;
  }, ih(t, o, i));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function _m(t) {
  var e = t.reference, n = t.element, i = t.placement, r = i ? si(i) : null, s = i ? ns(i) : null, o = e.x + e.width / 2 - n.width / 2, l = e.y + e.height / 2 - n.height / 2, a;
  switch (r) {
    case cn:
      a = { x: o, y: e.y - n.height };
      break;
    case xn:
      a = { x: o, y: e.y + e.height };
      break;
    case Mn:
      a = { x: e.x + e.width, y: l };
      break;
    case un:
      a = { x: e.x - n.width, y: l };
      break;
    default:
      a = { x: e.x, y: e.y };
  }
  var c = r ? nf(r) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (s) {
      case Qr:
        a[c] = a[c] - (e[u] / 2 - n[u] / 2);
        break;
      case Qs:
        a[c] = a[c] + (e[u] / 2 - n[u] / 2);
        break;
    }
  }
  return a;
}
function eo(t, e) {
  e === void 0 && (e = {});
  var n = e, i = n.placement, r = i === void 0 ? t.placement : i, s = n.strategy, o = s === void 0 ? t.strategy : s, l = n.boundary, a = l === void 0 ? H_ : l, c = n.rootBoundary, u = c === void 0 ? pm : c, f = n.elementContext, d = f === void 0 ? Cs : f, h = n.altBoundary, p = h === void 0 ? !1 : h, v = n.padding, y = v === void 0 ? 0 : v, g = bm(typeof y != "number" ? y : wm(y, bo)), b = d === Cs ? W_ : Cs, k = t.rects.popper, S = t.elements[p ? b : d], _ = y2(Tr(S) ? S : S.contextElement || cr(t.elements.popper), a, u, o), E = ts(t.elements.reference), C = _m({ reference: E, element: k, placement: r }), H = kc(Object.assign({}, k, C)), N = d === Cs ? H : E, q = { top: _.top - N.top + g.top, bottom: N.bottom - _.bottom + g.bottom, left: _.left - N.left + g.left, right: N.right - _.right + g.right }, z = t.modifiersData.offset;
  if (d === Cs && z) {
    var W = z[r];
    Object.keys(q).forEach(function(te) {
      var ge = [Mn, xn].indexOf(te) >= 0 ? 1 : -1, D = [cn, xn].indexOf(te) >= 0 ? "y" : "x";
      q[te] += W[D] * ge;
    });
  }
  return q;
}
function b2(t, e) {
  e === void 0 && (e = {});
  var n = e, i = n.placement, r = n.boundary, s = n.rootBoundary, o = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, c = a === void 0 ? da : a, u = ns(i), f = u ? l ? Qd : Qd.filter(function(p) {
    return ns(p) === u;
  }) : bo, d = f.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  d.length === 0 && (d = f);
  var h = d.reduce(function(p, v) {
    return p[v] = eo(t, { placement: v, boundary: r, rootBoundary: s, padding: o })[si(v)], p;
  }, {});
  return Object.keys(h).sort(function(p, v) {
    return h[p] - h[v];
  });
}
function w2(t) {
  if (si(t) === Qu) return [];
  var e = ol(t);
  return [nh(t), e, nh(e)];
}
function S2(t) {
  var e = t.state, n = t.options, i = t.name;
  if (!e.modifiersData[i]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, o = n.altAxis, l = o === void 0 ? !0 : o, a = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, h = n.flipVariations, p = h === void 0 ? !0 : h, v = n.allowedAutoPlacements, y = e.options.placement, g = si(y), b = g === y, k = a || (b || !p ? [ol(y)] : w2(y)), S = [y].concat(k).reduce(function(We, xe) {
      return We.concat(si(xe) === Qu ? b2(e, { placement: xe, boundary: u, rootBoundary: f, padding: c, flipVariations: p, allowedAutoPlacements: v }) : xe);
    }, []), _ = e.rects.reference, E = e.rects.popper, C = /* @__PURE__ */ new Map(), H = !0, N = S[0], q = 0; q < S.length; q++) {
      var z = S[q], W = si(z), te = ns(z) === Qr, ge = [cn, xn].indexOf(W) >= 0, D = ge ? "width" : "height", B = eo(e, { placement: z, boundary: u, rootBoundary: f, altBoundary: d, padding: c }), V = ge ? te ? Mn : un : te ? xn : cn;
      _[D] > E[D] && (V = ol(V));
      var ce = ol(V), ae = [];
      if (s && ae.push(B[W] <= 0), l && ae.push(B[V] <= 0, B[ce] <= 0), ae.every(function(We) {
        return We;
      })) {
        N = z, H = !1;
        break;
      }
      C.set(z, ae);
    }
    if (H) for (var ke = p ? 3 : 1, Oe = function(We) {
      var xe = S.find(function(ze) {
        var Qe = C.get(ze);
        if (Qe) return Qe.slice(0, We).every(function(Ie) {
          return Ie;
        });
      });
      if (xe) return N = xe, "break";
    }, Ae = ke; Ae > 0; Ae--) {
      var be = Oe(Ae);
      if (be === "break") break;
    }
    e.placement !== N && (e.modifiersData[i]._skip = !0, e.placement = N, e.reset = !0);
  }
}
var C2 = { name: "flip", enabled: !0, phase: "main", fn: S2, requiresIfExists: ["offset"], data: { _skip: !1 } };
function rh(t, e, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: t.top - e.height - n.y, right: t.right - e.width + n.x, bottom: t.bottom - e.height + n.y, left: t.left - e.width - n.x };
}
function sh(t) {
  return [cn, Mn, xn, un].some(function(e) {
    return t[e] >= 0;
  });
}
function k2(t) {
  var e = t.state, n = t.name, i = e.rects.reference, r = e.rects.popper, s = e.modifiersData.preventOverflow, o = eo(e, { elementContext: "reference" }), l = eo(e, { altBoundary: !0 }), a = rh(o, i), c = rh(l, r, s), u = sh(a), f = sh(c);
  e.modifiersData[n] = { referenceClippingOffsets: a, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: f }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": f });
}
var _2 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: k2 };
function E2(t, e, n) {
  var i = si(t), r = [un, cn].indexOf(i) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, e, { placement: t })) : n, o = s[0], l = s[1];
  return o = o || 0, l = (l || 0) * r, [un, Mn].indexOf(i) >= 0 ? { x: l, y: o } : { x: o, y: l };
}
function T2(t) {
  var e = t.state, n = t.options, i = t.name, r = n.offset, s = r === void 0 ? [0, 0] : r, o = da.reduce(function(u, f) {
    return u[f] = E2(f, e.rects, s), u;
  }, {}), l = o[e.placement], a = l.x, c = l.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += a, e.modifiersData.popperOffsets.y += c), e.modifiersData[i] = o;
}
var A2 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: T2 };
function O2(t) {
  var e = t.state, n = t.name;
  e.modifiersData[n] = _m({ reference: e.rects.reference, element: e.rects.popper, placement: e.placement });
}
var Em = { name: "popperOffsets", enabled: !0, phase: "read", fn: O2, data: {} };
function x2(t) {
  return t === "x" ? "y" : "x";
}
function M2(t) {
  var e = t.state, n = t.options, i = t.name, r = n.mainAxis, s = r === void 0 ? !0 : r, o = n.altAxis, l = o === void 0 ? !1 : o, a = n.boundary, c = n.rootBoundary, u = n.altBoundary, f = n.padding, d = n.tether, h = d === void 0 ? !0 : d, p = n.tetherOffset, v = p === void 0 ? 0 : p, y = eo(e, { boundary: a, rootBoundary: c, padding: f, altBoundary: u }), g = si(e.placement), b = ns(e.placement), k = !b, S = nf(g), _ = x2(S), E = e.modifiersData.popperOffsets, C = e.rects.reference, H = e.rects.popper, N = typeof v == "function" ? v(Object.assign({}, e.rects, { placement: e.placement })) : v, q = typeof N == "number" ? { mainAxis: N, altAxis: N } : Object.assign({ mainAxis: 0, altAxis: 0 }, N), z = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, W = { x: 0, y: 0 };
  if (E) {
    if (s) {
      var te, ge = S === "y" ? cn : un, D = S === "y" ? xn : Mn, B = S === "y" ? "height" : "width", V = E[S], ce = V + y[ge], ae = V - y[D], ke = h ? -H[B] / 2 : 0, Oe = b === Qr ? C[B] : H[B], Ae = b === Qr ? -H[B] : -C[B], be = e.elements.arrow, We = h && be ? tf(be) : { width: 0, height: 0 }, xe = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : ym(), ze = xe[ge], Qe = xe[D], Ie = Bs(0, C[B], We[B]), bt = k ? C[B] / 2 - ke - Ie - ze - q.mainAxis : Oe - Ie - ze - q.mainAxis, It = k ? -C[B] / 2 + ke + Ie + Qe + q.mainAxis : Ae + Ie + Qe + q.mainAxis, Pt = e.elements.arrow && wo(e.elements.arrow), Wt = Pt ? S === "y" ? Pt.clientTop || 0 : Pt.clientLeft || 0 : 0, At = (te = z?.[S]) != null ? te : 0, wt = V + bt - At - Wt, ot = V + It - At, zt = Bs(h ? Pl(ce, wt) : ce, V, h ? kr(ae, ot) : ae);
      E[S] = zt, W[S] = zt - V;
    }
    if (l) {
      var Dt, O = S === "x" ? cn : un, w = S === "x" ? xn : Mn, L = E[_], K = _ === "y" ? "height" : "width", de = L + y[O], he = L - y[w], A = [cn, un].indexOf(g) !== -1, F = (Dt = z?.[_]) != null ? Dt : 0, me = A ? de : L - C[K] - H[K] - F + q.altAxis, Ee = A ? L + C[K] + H[K] - F - q.altAxis : he, et = h && A ? i2(me, L, Ee) : Bs(h ? me : de, L, h ? Ee : he);
      E[_] = et, W[_] = et - L;
    }
    e.modifiersData[i] = W;
  }
}
var L2 = { name: "preventOverflow", enabled: !0, phase: "main", fn: M2, requiresIfExists: ["offset"] };
function I2(t) {
  return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop };
}
function P2(t) {
  return t === vn(t) || !_n(t) ? rf(t) : I2(t);
}
function D2(t) {
  var e = t.getBoundingClientRect(), n = es(e.width) / t.offsetWidth || 1, i = es(e.height) / t.offsetHeight || 1;
  return n !== 1 || i !== 1;
}
function R2(t, e, n) {
  n === void 0 && (n = !1);
  var i = _n(e), r = _n(e) && D2(e), s = cr(e), o = ts(t, r, n), l = { scrollLeft: 0, scrollTop: 0 }, a = { x: 0, y: 0 };
  return (i || !i && !n) && ((fi(e) !== "body" || of(s)) && (l = P2(e)), _n(e) ? (a = ts(e, !0), a.x += e.clientLeft, a.y += e.clientTop) : s && (a.x = sf(s))), { x: o.left + l.scrollLeft - a.x, y: o.top + l.scrollTop - a.y, width: o.width, height: o.height };
}
function N2(t) {
  var e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), i = [];
  t.forEach(function(s) {
    e.set(s.name, s);
  });
  function r(s) {
    n.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function(l) {
      if (!n.has(l)) {
        var a = e.get(l);
        a && r(a);
      }
    }), i.push(s);
  }
  return t.forEach(function(s) {
    n.has(s.name) || r(s);
  }), i;
}
function F2(t) {
  var e = N2(t);
  return Z_.reduce(function(n, i) {
    return n.concat(e.filter(function(r) {
      return r.phase === i;
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
function B2(t) {
  var e = t.reduce(function(n, i) {
    var r = n[i.name];
    return n[i.name] = r ? Object.assign({}, r, i, { options: Object.assign({}, r.options, i.options), data: Object.assign({}, r.data, i.data) }) : i, n;
  }, {});
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}
var oh = { placement: "bottom", modifiers: [], strategy: "absolute" };
function lh() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
  return !e.some(function(i) {
    return !(i && typeof i.getBoundingClientRect == "function");
  });
}
function lf(t) {
  t === void 0 && (t = {});
  var e = t, n = e.defaultModifiers, i = n === void 0 ? [] : n, r = e.defaultOptions, s = r === void 0 ? oh : r;
  return function(o, l, a) {
    a === void 0 && (a = s);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, oh, s), modifiersData: {}, elements: { reference: o, popper: l }, attributes: {}, styles: {} }, u = [], f = !1, d = { state: c, setOptions: function(v) {
      var y = typeof v == "function" ? v(c.options) : v;
      p(), c.options = Object.assign({}, s, c.options, y), c.scrollParents = { reference: Tr(o) ? Vs(o) : o.contextElement ? Vs(o.contextElement) : [], popper: Vs(l) };
      var g = F2(B2([].concat(i, c.options.modifiers)));
      return c.orderedModifiers = g.filter(function(b) {
        return b.enabled;
      }), h(), d.update();
    }, forceUpdate: function() {
      if (!f) {
        var v = c.elements, y = v.reference, g = v.popper;
        if (lh(y, g)) {
          c.rects = { reference: R2(y, wo(g), c.options.strategy === "fixed"), popper: tf(g) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(H) {
            return c.modifiersData[H.name] = Object.assign({}, H.data);
          });
          for (var b = 0; b < c.orderedModifiers.length; b++) {
            if (c.reset === !0) {
              c.reset = !1, b = -1;
              continue;
            }
            var k = c.orderedModifiers[b], S = k.fn, _ = k.options, E = _ === void 0 ? {} : _, C = k.name;
            typeof S == "function" && (c = S({ state: c, options: E, name: C, instance: d }) || c);
          }
        }
      }
    }, update: $2(function() {
      return new Promise(function(v) {
        d.forceUpdate(), v(c);
      });
    }), destroy: function() {
      p(), f = !0;
    } };
    if (!lh(o, l)) return d;
    d.setOptions(a).then(function(v) {
      !f && a.onFirstUpdate && a.onFirstUpdate(v);
    });
    function h() {
      c.orderedModifiers.forEach(function(v) {
        var y = v.name, g = v.options, b = g === void 0 ? {} : g, k = v.effect;
        if (typeof k == "function") {
          var S = k({ state: c, name: y, instance: d, options: b }), _ = function() {
          };
          u.push(S || _);
        }
      });
    }
    function p() {
      u.forEach(function(v) {
        return v();
      }), u = [];
    }
    return d;
  };
}
lf();
var V2 = [Cm, Em, Sm, gm];
lf({ defaultModifiers: V2 });
var H2 = [Cm, Em, Sm, gm, A2, C2, L2, l2, _2], W2 = lf({ defaultModifiers: H2 });
const z2 = ["fixed", "absolute"], G2 = Re({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: fe(Array),
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
    values: da,
    default: "bottom"
  },
  popperOptions: {
    type: fe(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: z2,
    default: "absolute"
  }
}), Tm = Re({
  ...G2,
  id: String,
  style: {
    type: fe([String, Array, Object])
  },
  className: {
    type: fe([String, Array, Object])
  },
  effect: {
    type: fe(String),
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
    type: fe([String, Array, Object])
  },
  popperStyle: {
    type: fe([String, Array, Object])
  },
  referenceEl: {
    type: fe(Object)
  },
  triggerTargetEl: {
    type: fe(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...ms(["ariaLabel"])
}), U2 = {
  mouseenter: (t) => t instanceof MouseEvent,
  mouseleave: (t) => t instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, j2 = (t, e) => {
  const n = I(!1), i = I();
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
  const { placement: n, strategy: i, popperOptions: r } = t, s = {
    placement: n,
    strategy: i,
    ...r,
    modifiers: [...q2(t), ...e]
  };
  return J2(s, r?.modifiers), s;
}, Y2 = (t) => {
  if (nt)
    return _i(t);
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
function J2(t, e) {
  e && (t.modifiers = [...t.modifiers, ...e ?? []]);
}
const X2 = (t, e, n = {}) => {
  const i = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: a }) => {
      const c = Z2(a);
      Object.assign(o.value, c);
    },
    requires: ["computeStyles"]
  }, r = M(() => {
    const { onFirstUpdate: a, placement: c, strategy: u, modifiers: f } = m(n);
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
  }), s = Qi(), o = I({
    styles: {
      popper: {
        position: m(r).strategy,
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
  return pe(r, (a) => {
    const c = m(s);
    c && c.setOptions(a);
  }, {
    deep: !0
  }), pe([t, e], ([a, c]) => {
    l(), !(!a || !c) && (s.value = W2(a, c, m(r)));
  }), yn(() => {
    l();
  }), {
    state: M(() => {
      var a;
      return { ...((a = m(s)) == null ? void 0 : a.state) || {} };
    }),
    styles: M(() => m(o).styles),
    attributes: M(() => m(o).attributes),
    update: () => {
      var a;
      return (a = m(s)) == null ? void 0 : a.update();
    },
    forceUpdate: () => {
      var a;
      return (a = m(s)) == null ? void 0 : a.forceUpdate();
    },
    instanceRef: M(() => m(s))
  };
};
function Z2(t) {
  const e = Object.keys(t.elements), n = Al(e.map((r) => [r, t.styles[r] || {}])), i = Al(e.map((r) => [r, t.attributes[r]]));
  return {
    styles: n,
    attributes: i
  };
}
const Q2 = 0, eE = (t) => {
  const { popperInstanceRef: e, contentRef: n, triggerRef: i, role: r } = ye(qu, void 0), s = I(), o = I(), l = M(() => ({
    name: "eventListeners",
    enabled: !!t.visible
  })), a = M(() => {
    var g;
    const b = m(s), k = (g = m(o)) != null ? g : Q2;
    return {
      name: "arrow",
      enabled: !Ig(b),
      options: {
        element: b,
        padding: k
      }
    };
  }), c = M(() => ({
    onFirstUpdate: () => {
      p();
    },
    ...K2(t, [
      m(a),
      m(l)
    ])
  })), u = M(() => Y2(t.referenceEl) || m(i)), { attributes: f, state: d, styles: h, update: p, forceUpdate: v, instanceRef: y } = X2(u, n, c);
  return pe(y, (g) => e.value = g), it(() => {
    pe(() => {
      var g;
      return (g = m(u)) == null ? void 0 : g.getBoundingClientRect();
    }, () => {
      p();
    });
  }), {
    attributes: f,
    arrowRef: s,
    contentRef: n,
    instanceRef: y,
    state: d,
    styles: h,
    role: r,
    forceUpdate: v,
    update: p
  };
}, tE = (t, {
  attributes: e,
  styles: n,
  role: i
}) => {
  const { nextZIndex: r } = Gu(), s = Ue("popper"), o = M(() => m(e).popper), l = I(Ke(t.zIndex) ? t.zIndex : r()), a = M(() => [
    s.b(),
    s.is("pure", t.pure),
    s.is(t.effect),
    t.popperClass
  ]), c = M(() => [
    { zIndex: m(l) },
    m(n).popper,
    t.popperStyle || {}
  ]), u = M(() => i.value === "dialog" ? "false" : void 0), f = M(() => m(n).arrow || {});
  return {
    ariaModal: u,
    arrowStyle: f,
    contentAttrs: o,
    contentClass: a,
    contentStyle: c,
    contentZIndex: l,
    updateZIndex: () => {
      l.value = Ke(t.zIndex) ? t.zIndex : r();
    }
  };
}, nE = Q({
  name: "ElPopperContent"
}), iE = /* @__PURE__ */ Q({
  ...nE,
  props: Tm,
  emits: U2,
  setup(t, { expose: e, emit: n }) {
    const i = t, {
      focusStartRef: r,
      trapped: s,
      onFocusAfterReleased: o,
      onFocusAfterTrapped: l,
      onFocusInTrap: a,
      onFocusoutPrevented: c,
      onReleaseRequested: u
    } = j2(i, n), { attributes: f, arrowRef: d, contentRef: h, styles: p, instanceRef: v, role: y, update: g } = eE(i), {
      ariaModal: b,
      arrowStyle: k,
      contentAttrs: S,
      contentClass: _,
      contentStyle: E,
      updateZIndex: C
    } = tE(i, {
      styles: p,
      attributes: f,
      role: y
    }), H = ye(Il, void 0), N = I();
    Lt(rm, {
      arrowStyle: k,
      arrowRef: d,
      arrowOffset: N
    }), H && Lt(Il, {
      ...H,
      addInputId: er,
      removeInputId: er
    });
    let q;
    const z = (te = !0) => {
      g(), te && C();
    }, W = () => {
      z(!1), i.visible && i.focusOnShow ? s.value = !0 : i.visible === !1 && (s.value = !1);
    };
    return it(() => {
      pe(() => i.triggerTargetEl, (te, ge) => {
        q?.(), q = void 0;
        const D = m(te || h.value), B = m(ge || h.value);
        Bn(D) && (q = pe([y, () => i.ariaLabel, b, () => i.id], (V) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ce, ae) => {
            xi(V[ae]) ? D.removeAttribute(ce) : D.setAttribute(ce, V[ae]);
          });
        }, { immediate: !0 })), B !== D && Bn(B) && ["role", "aria-label", "aria-modal", "id"].forEach((V) => {
          B.removeAttribute(V);
        });
      }, { immediate: !0 }), pe(() => i.visible, W, { immediate: !0 });
    }), yn(() => {
      q?.(), q = void 0;
    }), e({
      popperContentRef: h,
      popperInstanceRef: v,
      updatePopper: z,
      contentStyle: E
    }), (te, ge) => (x(), R("div", On({
      ref_key: "contentRef",
      ref: h
    }, m(S), {
      style: m(E),
      class: m(_),
      tabindex: "-1",
      onMouseenter: (D) => te.$emit("mouseenter", D),
      onMouseleave: (D) => te.$emit("mouseleave", D)
    }), [
      Z(m(hm), {
        trapped: m(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": m(h),
        "focus-start-el": m(r),
        onFocusAfterTrapped: m(l),
        onFocusAfterReleased: m(o),
        onFocusin: m(a),
        onFocusoutPrevented: m(c),
        onReleaseRequested: m(u)
      }, {
        default: X(() => [
          oe(te.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var rE = /* @__PURE__ */ Me(iE, [["__file", "content.vue"]]);
const sE = bn(b_), af = Symbol("elTooltip");
function ah() {
  let t;
  const e = (i, r) => {
    n(), t = window.setTimeout(i, r);
  }, n = () => window.clearTimeout(t);
  return go(() => n()), {
    registerTimeout: e,
    cancelTimeout: n
  };
}
const oE = Re({
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
}), lE = ({
  showAfter: t,
  hideAfter: e,
  autoClose: n,
  open: i,
  close: r
}) => {
  const { registerTimeout: s } = ah(), {
    registerTimeout: o,
    cancelTimeout: l
  } = ah();
  return {
    onOpen: (u) => {
      s(() => {
        i(u);
        const f = m(n);
        Ke(f) && f > 0 && o(() => {
          r(u);
        }, f);
      }, m(t));
    },
    onClose: (u) => {
      l(), s(() => {
        r(u);
      }, m(e));
    }
  };
}, to = Re({
  ...oE,
  ...Tm,
  appendTo: {
    type: fe([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: fe(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...ms(["ariaLabel"])
}), cf = Re({
  ...am,
  disabled: Boolean,
  trigger: {
    type: fe([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: fe(Array),
    default: () => [Ze.enter, Ze.numpadEnter, Ze.space]
  }
}), aE = la({
  type: fe(Boolean),
  default: null
}), cE = la({
  type: fe(Function)
}), uE = (t) => {
  const e = `update:${t}`, n = `onUpdate:${t}`, i = [e], r = {
    [t]: aE,
    [n]: cE
  };
  return {
    useModelToggle: ({
      indicator: o,
      toggleReason: l,
      shouldHideWhenRouteChanges: a,
      shouldProceed: c,
      onShow: u,
      onHide: f
    }) => {
      const d = Mt(), { emit: h } = d, p = d.props, v = M(() => gt(p[n])), y = M(() => p[t] === null), g = (C) => {
        o.value !== !0 && (o.value = !0, l && (l.value = C), gt(u) && u(C));
      }, b = (C) => {
        o.value !== !1 && (o.value = !1, l && (l.value = C), gt(f) && f(C));
      }, k = (C) => {
        if (p.disabled === !0 || gt(c) && !c())
          return;
        const H = v.value && nt;
        H && h(e, !0), (y.value || !H) && g(C);
      }, S = (C) => {
        if (p.disabled === !0 || !nt)
          return;
        const H = v.value && nt;
        H && h(e, !1), (y.value || !H) && b(C);
      }, _ = (C) => {
        Zs(C) && (p.disabled && C ? v.value && h(e, !1) : o.value !== C && (C ? g() : b()));
      }, E = () => {
        o.value ? S() : k();
      };
      return pe(() => p[t], _), a && d.appContext.config.globalProperties.$route !== void 0 && pe(() => ({
        ...d.proxy.$route
      }), () => {
        a.value && o.value && S();
      }), it(() => {
        _(p[t]);
      }), {
        hide: S,
        show: k,
        toggle: E,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: i
  };
}, {
  useModelToggleProps: fE,
  useModelToggleEmits: dE,
  useModelToggle: hE
} = uE("visible"), pE = Re({
  ...om,
  ...fE,
  ...to,
  ...cf,
  ...lm,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), gE = [
  ...dE,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], mE = (t, e) => ei(t) ? t.includes(e) : t === e, Fr = (t, e, n) => (i) => {
  mE(m(t), e) && n(i);
}, yt = (t, e, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = t?.(r);
  if (n === !1 || !s)
    return e?.(r);
}, ch = (t) => (e) => e.pointerType === "mouse" ? t(e) : void 0, vE = Q({
  name: "ElTooltipTrigger"
}), yE = /* @__PURE__ */ Q({
  ...vE,
  props: cf,
  setup(t, { expose: e }) {
    const n = t, i = Ue("tooltip"), { controlled: r, id: s, open: o, onOpen: l, onClose: a, onToggle: c } = ye(af, void 0), u = I(null), f = () => {
      if (m(r) || n.disabled)
        return !0;
    }, d = Jt(n, "trigger"), h = yt(f, Fr(d, "hover", l)), p = yt(f, Fr(d, "hover", a)), v = yt(f, Fr(d, "click", (S) => {
      S.button === 0 && c(S);
    })), y = yt(f, Fr(d, "focus", l)), g = yt(f, Fr(d, "focus", a)), b = yt(f, Fr(d, "contextmenu", (S) => {
      S.preventDefault(), c(S);
    })), k = yt(f, (S) => {
      const { code: _ } = S;
      n.triggerKeys.includes(_) && (S.preventDefault(), c(S));
    });
    return e({
      triggerRef: u
    }), (S, _) => (x(), se(m(O_), {
      id: m(s),
      "virtual-ref": S.virtualRef,
      open: m(o),
      "virtual-triggering": S.virtualTriggering,
      class: U(m(i).e("trigger")),
      onBlur: m(g),
      onClick: m(v),
      onContextmenu: m(b),
      onFocus: m(y),
      onMouseenter: m(h),
      onMouseleave: m(p),
      onKeydown: m(k)
    }, {
      default: X(() => [
        oe(S.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var bE = /* @__PURE__ */ Me(yE, [["__file", "trigger.vue"]]);
const wE = Re({
  to: {
    type: fe([String, Object]),
    required: !0
  },
  disabled: Boolean
}), SE = /* @__PURE__ */ Q({
  __name: "teleport",
  props: wE,
  setup(t) {
    return (e, n) => e.disabled ? oe(e.$slots, "default", { key: 0 }) : (x(), se(hg, {
      key: 1,
      to: e.to
    }, [
      oe(e.$slots, "default")
    ], 8, ["to"]));
  }
});
var CE = /* @__PURE__ */ Me(SE, [["__file", "teleport.vue"]]);
const Am = bn(CE), Om = () => {
  const t = Du(), e = Zg(), n = M(() => `${t.value}-popper-container-${e.prefix}`), i = M(() => `#${n.value}`);
  return {
    id: n,
    selector: i
  };
}, kE = (t) => {
  const e = document.createElement("div");
  return e.id = t, document.body.appendChild(e), e;
}, _E = () => {
  const { id: t, selector: e } = Om();
  return ub(() => {
    nt && (document.body.querySelector(e.value) || kE(t.value));
  }), {
    id: t,
    selector: e
  };
}, EE = Q({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), TE = /* @__PURE__ */ Q({
  ...EE,
  props: to,
  setup(t, { expose: e }) {
    const n = t, { selector: i } = Om(), r = Ue("tooltip"), s = I();
    let o;
    const {
      controlled: l,
      id: a,
      open: c,
      trigger: u,
      onClose: f,
      onOpen: d,
      onShow: h,
      onHide: p,
      onBeforeShow: v,
      onBeforeHide: y
    } = ye(af, void 0), g = M(() => n.transition || `${r.namespace.value}-fade-in-linear`), b = M(() => n.persistent);
    yn(() => {
      o?.();
    });
    const k = M(() => m(b) ? !0 : m(c)), S = M(() => n.disabled ? !1 : m(c)), _ = M(() => n.appendTo || i.value), E = M(() => {
      var V;
      return (V = n.style) != null ? V : {};
    }), C = I(!0), H = () => {
      p(), B() && bi(document.body), C.value = !0;
    }, N = () => {
      if (m(l))
        return !0;
    }, q = yt(N, () => {
      n.enterable && m(u) === "hover" && d();
    }), z = yt(N, () => {
      m(u) === "hover" && f();
    }), W = () => {
      var V, ce;
      (ce = (V = s.value) == null ? void 0 : V.updatePopper) == null || ce.call(V), v?.();
    }, te = () => {
      y?.();
    }, ge = () => {
      h(), o = NC(M(() => {
        var V;
        return (V = s.value) == null ? void 0 : V.popperContentRef;
      }), () => {
        if (m(l))
          return;
        m(u) !== "hover" && f();
      });
    }, D = () => {
      n.virtualTriggering || f();
    }, B = (V) => {
      var ce;
      const ae = (ce = s.value) == null ? void 0 : ce.popperContentRef, ke = V?.relatedTarget || document.activeElement;
      return ae?.contains(ke);
    };
    return pe(() => m(c), (V) => {
      V ? C.value = !1 : o?.();
    }, {
      flush: "post"
    }), pe(() => n.content, () => {
      var V, ce;
      (ce = (V = s.value) == null ? void 0 : V.updatePopper) == null || ce.call(V);
    }), e({
      contentRef: s,
      isFocusInsideContent: B
    }), (V, ce) => (x(), se(m(Am), {
      disabled: !V.teleported,
      to: m(_)
    }, {
      default: X(() => [
        Z(Ri, {
          name: m(g),
          onAfterLeave: H,
          onBeforeEnter: W,
          onAfterEnter: ge,
          onBeforeLeave: te
        }, {
          default: X(() => [
            m(k) ? nn((x(), se(m(rE), On({
              key: 0,
              id: m(a),
              ref_key: "contentRef",
              ref: s
            }, V.$attrs, {
              "aria-label": V.ariaLabel,
              "aria-hidden": C.value,
              "boundaries-padding": V.boundariesPadding,
              "fallback-placements": V.fallbackPlacements,
              "gpu-acceleration": V.gpuAcceleration,
              offset: V.offset,
              placement: V.placement,
              "popper-options": V.popperOptions,
              strategy: V.strategy,
              effect: V.effect,
              enterable: V.enterable,
              pure: V.pure,
              "popper-class": V.popperClass,
              "popper-style": [V.popperStyle, m(E)],
              "reference-el": V.referenceEl,
              "trigger-target-el": V.triggerTargetEl,
              visible: m(S),
              "z-index": V.zIndex,
              onMouseenter: m(q),
              onMouseleave: m(z),
              onBlur: D,
              onClose: m(f)
            }), {
              default: X(() => [
                oe(V.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [ai, m(S)]
            ]) : j("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var AE = /* @__PURE__ */ Me(TE, [["__file", "content.vue"]]);
const OE = Q({
  name: "ElTooltip"
}), xE = /* @__PURE__ */ Q({
  ...OE,
  props: pE,
  emits: gE,
  setup(t, { expose: e, emit: n }) {
    const i = t;
    _E();
    const r = ir(), s = I(), o = I(), l = () => {
      var g;
      const b = m(s);
      b && ((g = b.popperInstanceRef) == null || g.update());
    }, a = I(!1), c = I(), { show: u, hide: f, hasUpdateHandler: d } = hE({
      indicator: a,
      toggleReason: c
    }), { onOpen: h, onClose: p } = lE({
      showAfter: Jt(i, "showAfter"),
      hideAfter: Jt(i, "hideAfter"),
      autoClose: Jt(i, "autoClose"),
      open: u,
      close: f
    }), v = M(() => Zs(i.visible) && !d.value);
    Lt(af, {
      controlled: v,
      id: r,
      open: Ql(a),
      trigger: Jt(i, "trigger"),
      onOpen: (g) => {
        h(g);
      },
      onClose: (g) => {
        p(g);
      },
      onToggle: (g) => {
        m(a) ? p(g) : h(g);
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
    }), pe(() => i.disabled, (g) => {
      g && a.value && (a.value = !1);
    });
    const y = (g) => {
      var b;
      return (b = o.value) == null ? void 0 : b.isFocusInsideContent(g);
    };
    return fb(() => a.value && f()), e({
      popperRef: s,
      contentRef: o,
      isFocusInsideContent: y,
      updatePopper: l,
      onOpen: h,
      onClose: p,
      hide: f
    }), (g, b) => (x(), se(m(sE), {
      ref_key: "popperRef",
      ref: s,
      role: g.role
    }, {
      default: X(() => [
        Z(bE, {
          disabled: g.disabled,
          trigger: g.trigger,
          "trigger-keys": g.triggerKeys,
          "virtual-ref": g.virtualRef,
          "virtual-triggering": g.virtualTriggering
        }, {
          default: X(() => [
            g.$slots.default ? oe(g.$slots, "default", { key: 0 }) : j("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        Z(AE, {
          ref_key: "contentRef",
          ref: o,
          "aria-label": g.ariaLabel,
          "boundaries-padding": g.boundariesPadding,
          content: g.content,
          disabled: g.disabled,
          effect: g.effect,
          enterable: g.enterable,
          "fallback-placements": g.fallbackPlacements,
          "hide-after": g.hideAfter,
          "gpu-acceleration": g.gpuAcceleration,
          offset: g.offset,
          persistent: g.persistent,
          "popper-class": g.popperClass,
          "popper-style": g.popperStyle,
          placement: g.placement,
          "popper-options": g.popperOptions,
          pure: g.pure,
          "raw-content": g.rawContent,
          "reference-el": g.referenceEl,
          "trigger-target-el": g.triggerTargetEl,
          "show-after": g.showAfter,
          strategy: g.strategy,
          teleported: g.teleported,
          transition: g.transition,
          "virtual-triggering": g.virtualTriggering,
          "z-index": g.zIndex,
          "append-to": g.appendTo
        }, {
          default: X(() => [
            oe(g.$slots, "content", {}, () => [
              g.rawContent ? (x(), R("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, ["innerHTML"])) : (x(), R("span", { key: 1 }, G(g.content), 1))
            ]),
            g.showArrow ? (x(), se(m(C_), {
              key: 0,
              "arrow-offset": g.arrowOffset
            }, null, 8, ["arrow-offset"])) : j("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var ME = /* @__PURE__ */ Me(xE, [["__file", "tooltip.vue"]]);
const xm = bn(ME), LE = Re({
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
    type: fe([String, Object, Array])
  },
  offset: {
    type: fe(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), IE = Q({
  name: "ElBadge"
}), PE = /* @__PURE__ */ Q({
  ...IE,
  props: LE,
  setup(t, { expose: e }) {
    const n = t, i = Ue("badge"), r = M(() => n.isDot ? "" : Ke(n.value) && Ke(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = M(() => {
      var o, l, a, c, u;
      return [
        {
          backgroundColor: n.color,
          marginRight: Ii(-((l = (o = n.offset) == null ? void 0 : o[0]) != null ? l : 0)),
          marginTop: Ii((c = (a = n.offset) == null ? void 0 : a[1]) != null ? c : 0)
        },
        (u = n.badgeStyle) != null ? u : {}
      ];
    });
    return e({
      content: r
    }), (o, l) => (x(), R("div", {
      class: U(m(i).b())
    }, [
      oe(o.$slots, "default"),
      Z(Ri, {
        name: `${m(i).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: X(() => [
          nn(T("sup", {
            class: U([
              m(i).e("content"),
              m(i).em("content", o.type),
              m(i).is("fixed", !!o.$slots.default),
              m(i).is("dot", o.isDot),
              m(i).is("hide-zero", !o.showZero && n.value === 0),
              o.badgeClass
            ]),
            style: tt(m(s))
          }, [
            oe(o.$slots, "content", { value: m(r) }, () => [
              Ve(G(m(r)), 1)
            ])
          ], 6), [
            [ai, !o.hidden && (m(r) || o.isDot || o.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var DE = /* @__PURE__ */ Me(PE, [["__file", "badge.vue"]]);
const RE = bn(DE), Mm = Symbol("buttonGroupContextKey"), Lm = ({ from: t, replacement: e, scope: n, version: i, ref: r, type: s = "API" }, o) => {
  pe(() => m(o), (l) => {
  }, {
    immediate: !0
  });
}, NE = (t, e) => {
  Lm({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, M(() => t.type === "text"));
  const n = ye(Mm, void 0), i = aa("button"), { form: r } = ca(), s = vs(M(() => n?.size)), o = ua(), l = I(), a = Mu(), c = M(() => t.type || n?.type || ""), u = M(() => {
    var p, v, y;
    return (y = (v = t.autoInsertSpace) != null ? v : (p = i.value) == null ? void 0 : p.autoInsertSpace) != null ? y : !1;
  }), f = M(() => t.tag === "button" ? {
    ariaDisabled: o.value || t.loading,
    disabled: o.value || t.loading,
    autofocus: t.autofocus,
    type: t.nativeType
  } : {}), d = M(() => {
    var p;
    const v = (p = a.default) == null ? void 0 : p.call(a);
    if (u.value && v?.length === 1) {
      const y = v[0];
      if (y?.type === Lu) {
        const g = y.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(g.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: o,
    _size: s,
    _type: c,
    _ref: l,
    _props: f,
    shouldAddSpace: d,
    handleClick: (p) => {
      if (o.value || t.loading) {
        p.stopPropagation();
        return;
      }
      t.nativeType === "reset" && r?.resetFields(), e("click", p);
    }
  };
}, FE = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], $E = ["button", "submit", "reset"], _c = Re({
  size: vo,
  disabled: Boolean,
  type: {
    type: String,
    values: FE,
    default: ""
  },
  icon: {
    type: ui
  },
  nativeType: {
    type: String,
    values: $E,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: ui,
    default: () => Kg
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
    type: fe([String, Object]),
    default: "button"
  }
}), BE = {
  click: (t) => t instanceof MouseEvent
};
function Bt(t, e) {
  VE(t) && (t = "100%");
  var n = HE(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), n && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function Do(t) {
  return Math.min(1, Math.max(0, t));
}
function VE(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function HE(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function Im(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function Ro(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function yr(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function WE(t, e, n) {
  return {
    r: Bt(t, 255) * 255,
    g: Bt(e, 255) * 255,
    b: Bt(n, 255) * 255
  };
}
function uh(t, e, n) {
  t = Bt(t, 255), e = Bt(e, 255), n = Bt(n, 255);
  var i = Math.max(t, e, n), r = Math.min(t, e, n), s = 0, o = 0, l = (i + r) / 2;
  if (i === r)
    o = 0, s = 0;
  else {
    var a = i - r;
    switch (o = l > 0.5 ? a / (2 - i - r) : a / (i + r), i) {
      case t:
        s = (e - n) / a + (e < n ? 6 : 0);
        break;
      case e:
        s = (n - t) / a + 2;
        break;
      case n:
        s = (t - e) / a + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: o, l };
}
function Ba(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * (6 * n) : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function zE(t, e, n) {
  var i, r, s;
  if (t = Bt(t, 360), e = Bt(e, 100), n = Bt(n, 100), e === 0)
    r = n, s = n, i = n;
  else {
    var o = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - o;
    i = Ba(l, o, t + 1 / 3), r = Ba(l, o, t), s = Ba(l, o, t - 1 / 3);
  }
  return { r: i * 255, g: r * 255, b: s * 255 };
}
function fh(t, e, n) {
  t = Bt(t, 255), e = Bt(e, 255), n = Bt(n, 255);
  var i = Math.max(t, e, n), r = Math.min(t, e, n), s = 0, o = i, l = i - r, a = i === 0 ? 0 : l / i;
  if (i === r)
    s = 0;
  else {
    switch (i) {
      case t:
        s = (e - n) / l + (e < n ? 6 : 0);
        break;
      case e:
        s = (n - t) / l + 2;
        break;
      case n:
        s = (t - e) / l + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: a, v: o };
}
function GE(t, e, n) {
  t = Bt(t, 360) * 6, e = Bt(e, 100), n = Bt(n, 100);
  var i = Math.floor(t), r = t - i, s = n * (1 - e), o = n * (1 - r * e), l = n * (1 - (1 - r) * e), a = i % 6, c = [n, o, s, s, l, n][a], u = [l, n, n, o, s, s][a], f = [s, s, l, n, n, o][a];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function dh(t, e, n, i) {
  var r = [
    yr(Math.round(t).toString(16)),
    yr(Math.round(e).toString(16)),
    yr(Math.round(n).toString(16))
  ];
  return i && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function UE(t, e, n, i, r) {
  var s = [
    yr(Math.round(t).toString(16)),
    yr(Math.round(e).toString(16)),
    yr(Math.round(n).toString(16)),
    yr(jE(i))
  ];
  return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("");
}
function jE(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function hh(t) {
  return dn(t) / 255;
}
function dn(t) {
  return parseInt(t, 16);
}
function KE(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
var Ec = {
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
function YE(t) {
  var e = { r: 0, g: 0, b: 0 }, n = 1, i = null, r = null, s = null, o = !1, l = !1;
  return typeof t == "string" && (t = XE(t)), typeof t == "object" && (vi(t.r) && vi(t.g) && vi(t.b) ? (e = WE(t.r, t.g, t.b), o = !0, l = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : vi(t.h) && vi(t.s) && vi(t.v) ? (i = Ro(t.s), r = Ro(t.v), e = GE(t.h, i, r), o = !0, l = "hsv") : vi(t.h) && vi(t.s) && vi(t.l) && (i = Ro(t.s), s = Ro(t.l), e = zE(t.h, i, s), o = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (n = t.a)), n = Im(n), {
    ok: o,
    format: t.format || l,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: n
  };
}
var qE = "[-\\+]?\\d+%?", JE = "[-\\+]?\\d*\\.\\d+%?", qi = "(?:".concat(JE, ")|(?:").concat(qE, ")"), Va = "[\\s|\\(]+(".concat(qi, ")[,|\\s]+(").concat(qi, ")[,|\\s]+(").concat(qi, ")\\s*\\)?"), Ha = "[\\s|\\(]+(".concat(qi, ")[,|\\s]+(").concat(qi, ")[,|\\s]+(").concat(qi, ")[,|\\s]+(").concat(qi, ")\\s*\\)?"), Rn = {
  CSS_UNIT: new RegExp(qi),
  rgb: new RegExp("rgb" + Va),
  rgba: new RegExp("rgba" + Ha),
  hsl: new RegExp("hsl" + Va),
  hsla: new RegExp("hsla" + Ha),
  hsv: new RegExp("hsv" + Va),
  hsva: new RegExp("hsva" + Ha),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function XE(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var e = !1;
  if (Ec[t])
    t = Ec[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Rn.rgb.exec(t);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Rn.rgba.exec(t), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Rn.hsl.exec(t), n ? { h: n[1], s: n[2], l: n[3] } : (n = Rn.hsla.exec(t), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Rn.hsv.exec(t), n ? { h: n[1], s: n[2], v: n[3] } : (n = Rn.hsva.exec(t), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Rn.hex8.exec(t), n ? {
    r: dn(n[1]),
    g: dn(n[2]),
    b: dn(n[3]),
    a: hh(n[4]),
    format: e ? "name" : "hex8"
  } : (n = Rn.hex6.exec(t), n ? {
    r: dn(n[1]),
    g: dn(n[2]),
    b: dn(n[3]),
    format: e ? "name" : "hex"
  } : (n = Rn.hex4.exec(t), n ? {
    r: dn(n[1] + n[1]),
    g: dn(n[2] + n[2]),
    b: dn(n[3] + n[3]),
    a: hh(n[4] + n[4]),
    format: e ? "name" : "hex8"
  } : (n = Rn.hex3.exec(t), n ? {
    r: dn(n[1] + n[1]),
    g: dn(n[2] + n[2]),
    b: dn(n[3] + n[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function vi(t) {
  return !!Rn.CSS_UNIT.exec(String(t));
}
var ZE = (
  /** @class */
  function() {
    function t(e, n) {
      e === void 0 && (e = ""), n === void 0 && (n = {});
      var i;
      if (e instanceof t)
        return e;
      typeof e == "number" && (e = KE(e)), this.originalInput = e;
      var r = YE(e);
      this.originalInput = e, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (i = n.format) !== null && i !== void 0 ? i : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return t.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, t.prototype.isLight = function() {
      return !this.isDark();
    }, t.prototype.getBrightness = function() {
      var e = this.toRgb();
      return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
    }, t.prototype.getLuminance = function() {
      var e = this.toRgb(), n, i, r, s = e.r / 255, o = e.g / 255, l = e.b / 255;
      return s <= 0.03928 ? n = s / 12.92 : n = Math.pow((s + 0.055) / 1.055, 2.4), o <= 0.03928 ? i = o / 12.92 : i = Math.pow((o + 0.055) / 1.055, 2.4), l <= 0.03928 ? r = l / 12.92 : r = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * i + 0.0722 * r;
    }, t.prototype.getAlpha = function() {
      return this.a;
    }, t.prototype.setAlpha = function(e) {
      return this.a = Im(e), this.roundA = Math.round(100 * this.a) / 100, this;
    }, t.prototype.isMonochrome = function() {
      var e = this.toHsl().s;
      return e === 0;
    }, t.prototype.toHsv = function() {
      var e = fh(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
    }, t.prototype.toHsvString = function() {
      var e = fh(this.r, this.g, this.b), n = Math.round(e.h * 360), i = Math.round(e.s * 100), r = Math.round(e.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(i, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(i, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHsl = function() {
      var e = uh(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
    }, t.prototype.toHslString = function() {
      var e = uh(this.r, this.g, this.b), n = Math.round(e.h * 360), i = Math.round(e.s * 100), r = Math.round(e.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(i, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(i, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHex = function(e) {
      return e === void 0 && (e = !1), dh(this.r, this.g, this.b, e);
    }, t.prototype.toHexString = function(e) {
      return e === void 0 && (e = !1), "#" + this.toHex(e);
    }, t.prototype.toHex8 = function(e) {
      return e === void 0 && (e = !1), UE(this.r, this.g, this.b, this.a, e);
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
        return "".concat(Math.round(Bt(n, 255) * 100), "%");
      };
      return {
        r: e(this.r),
        g: e(this.g),
        b: e(this.b),
        a: this.a
      };
    }, t.prototype.toPercentageRgbString = function() {
      var e = function(n) {
        return Math.round(Bt(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%)") : "rgba(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%, ").concat(this.roundA, ")");
    }, t.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var e = "#" + dh(this.r, this.g, this.b, !1), n = 0, i = Object.entries(Ec); n < i.length; n++) {
        var r = i[n], s = r[0], o = r[1];
        if (e === o)
          return s;
      }
      return !1;
    }, t.prototype.toString = function(e) {
      var n = !!e;
      e = e ?? this.format;
      var i = !1, r = this.a < 1 && this.a >= 0, s = !n && r && (e.startsWith("hex") || e === "name");
      return s ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (i = this.toRgbString()), e === "prgb" && (i = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (i = this.toHexString()), e === "hex3" && (i = this.toHexString(!0)), e === "hex4" && (i = this.toHex8String(!0)), e === "hex8" && (i = this.toHex8String()), e === "name" && (i = this.toName()), e === "hsl" && (i = this.toHslString()), e === "hsv" && (i = this.toHsvString()), i || this.toHexString());
    }, t.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, t.prototype.clone = function() {
      return new t(this.toString());
    }, t.prototype.lighten = function(e) {
      e === void 0 && (e = 10);
      var n = this.toHsl();
      return n.l += e / 100, n.l = Do(n.l), new t(n);
    }, t.prototype.brighten = function(e) {
      e === void 0 && (e = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(e / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(e / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(e / 100)))), new t(n);
    }, t.prototype.darken = function(e) {
      e === void 0 && (e = 10);
      var n = this.toHsl();
      return n.l -= e / 100, n.l = Do(n.l), new t(n);
    }, t.prototype.tint = function(e) {
      return e === void 0 && (e = 10), this.mix("white", e);
    }, t.prototype.shade = function(e) {
      return e === void 0 && (e = 10), this.mix("black", e);
    }, t.prototype.desaturate = function(e) {
      e === void 0 && (e = 10);
      var n = this.toHsl();
      return n.s -= e / 100, n.s = Do(n.s), new t(n);
    }, t.prototype.saturate = function(e) {
      e === void 0 && (e = 10);
      var n = this.toHsl();
      return n.s += e / 100, n.s = Do(n.s), new t(n);
    }, t.prototype.greyscale = function() {
      return this.desaturate(100);
    }, t.prototype.spin = function(e) {
      var n = this.toHsl(), i = (n.h + e) % 360;
      return n.h = i < 0 ? 360 + i : i, new t(n);
    }, t.prototype.mix = function(e, n) {
      n === void 0 && (n = 50);
      var i = this.toRgb(), r = new t(e).toRgb(), s = n / 100, o = {
        r: (r.r - i.r) * s + i.r,
        g: (r.g - i.g) * s + i.g,
        b: (r.b - i.b) * s + i.b,
        a: (r.a - i.a) * s + i.a
      };
      return new t(o);
    }, t.prototype.analogous = function(e, n) {
      e === void 0 && (e = 6), n === void 0 && (n = 30);
      var i = this.toHsl(), r = 360 / n, s = [this];
      for (i.h = (i.h - (r * e >> 1) + 720) % 360; --e; )
        i.h = (i.h + r) % 360, s.push(new t(i));
      return s;
    }, t.prototype.complement = function() {
      var e = this.toHsl();
      return e.h = (e.h + 180) % 360, new t(e);
    }, t.prototype.monochromatic = function(e) {
      e === void 0 && (e = 6);
      for (var n = this.toHsv(), i = n.h, r = n.s, s = n.v, o = [], l = 1 / e; e--; )
        o.push(new t({ h: i, s: r, v: s })), s = (s + l) % 1;
      return o;
    }, t.prototype.splitcomplement = function() {
      var e = this.toHsl(), n = e.h;
      return [
        this,
        new t({ h: (n + 72) % 360, s: e.s, l: e.l }),
        new t({ h: (n + 216) % 360, s: e.s, l: e.l })
      ];
    }, t.prototype.onBackground = function(e) {
      var n = this.toRgb(), i = new t(e).toRgb(), r = n.a + i.a * (1 - n.a);
      return new t({
        r: (n.r * n.a + i.r * i.a * (1 - n.a)) / r,
        g: (n.g * n.a + i.g * i.a * (1 - n.a)) / r,
        b: (n.b * n.a + i.b * i.a * (1 - n.a)) / r,
        a: r
      });
    }, t.prototype.triad = function() {
      return this.polyad(3);
    }, t.prototype.tetrad = function() {
      return this.polyad(4);
    }, t.prototype.polyad = function(e) {
      for (var n = this.toHsl(), i = n.h, r = [this], s = 360 / e, o = 1; o < e; o++)
        r.push(new t({ h: (i + o * s) % 360, s: n.s, l: n.l }));
      return r;
    }, t.prototype.equals = function(e) {
      return this.toRgbString() === new t(e).toRgbString();
    }, t;
  }()
);
function Hi(t, e = 20) {
  return t.mix("#141414", e).toString();
}
function QE(t) {
  const e = ua(), n = Ue("button");
  return M(() => {
    let i = {}, r = t.color;
    if (r) {
      const s = r.match(/var\((.*?)\)/);
      s && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(s[1]));
      const o = new ZE(r), l = t.dark ? o.tint(20).toString() : Hi(o, 20);
      if (t.plain)
        i = n.cssVarBlock({
          "bg-color": t.dark ? Hi(o, 90) : o.tint(90).toString(),
          "text-color": r,
          "border-color": t.dark ? Hi(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": l,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": l
        }), e.value && (i[n.cssVarBlockName("disabled-bg-color")] = t.dark ? Hi(o, 90) : o.tint(90).toString(), i[n.cssVarBlockName("disabled-text-color")] = t.dark ? Hi(o, 50) : o.tint(50).toString(), i[n.cssVarBlockName("disabled-border-color")] = t.dark ? Hi(o, 80) : o.tint(80).toString());
      else {
        const a = t.dark ? Hi(o, 30) : o.tint(30).toString(), c = o.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (i = n.cssVarBlock({
          "bg-color": r,
          "text-color": c,
          "border-color": r,
          "hover-bg-color": a,
          "hover-text-color": c,
          "hover-border-color": a,
          "active-bg-color": l,
          "active-border-color": l
        }), e.value) {
          const u = t.dark ? Hi(o, 50) : o.tint(50).toString();
          i[n.cssVarBlockName("disabled-bg-color")] = u, i[n.cssVarBlockName("disabled-text-color")] = t.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, i[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return i;
  });
}
const eT = Q({
  name: "ElButton"
}), tT = /* @__PURE__ */ Q({
  ...eT,
  props: _c,
  emits: BE,
  setup(t, { expose: e, emit: n }) {
    const i = t, r = QE(i), s = Ue("button"), { _ref: o, _size: l, _type: a, _disabled: c, _props: u, shouldAddSpace: f, handleClick: d } = NE(i, n), h = M(() => [
      s.b(),
      s.m(a.value),
      s.m(l.value),
      s.is("disabled", c.value),
      s.is("loading", i.loading),
      s.is("plain", i.plain),
      s.is("round", i.round),
      s.is("circle", i.circle),
      s.is("text", i.text),
      s.is("link", i.link),
      s.is("has-bg", i.bg)
    ]);
    return e({
      ref: o,
      size: l,
      type: a,
      disabled: c,
      shouldAddSpace: f
    }), (p, v) => (x(), se(en(p.tag), On({
      ref_key: "_ref",
      ref: o
    }, m(u), {
      class: m(h),
      style: m(r),
      onClick: m(d)
    }), {
      default: X(() => [
        p.loading ? (x(), R(_e, { key: 0 }, [
          p.$slots.loading ? oe(p.$slots, "loading", { key: 0 }) : (x(), se(m(_t), {
            key: 1,
            class: U(m(s).is("loading"))
          }, {
            default: X(() => [
              (x(), se(en(p.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : p.icon || p.$slots.icon ? (x(), se(m(_t), { key: 1 }, {
          default: X(() => [
            p.icon ? (x(), se(en(p.icon), { key: 0 })) : oe(p.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : j("v-if", !0),
        p.$slots.default ? (x(), R("span", {
          key: 2,
          class: U({ [m(s).em("text", "expand")]: m(f) })
        }, [
          oe(p.$slots, "default")
        ], 2)) : j("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var nT = /* @__PURE__ */ Me(tT, [["__file", "button.vue"]]);
const iT = {
  size: _c.size,
  type: _c.type
}, rT = Q({
  name: "ElButtonGroup"
}), sT = /* @__PURE__ */ Q({
  ...rT,
  props: iT,
  setup(t) {
    const e = t;
    Lt(Mm, tr({
      size: Jt(e, "size"),
      type: Jt(e, "type")
    }));
    const n = Ue("button");
    return (i, r) => (x(), R("div", {
      class: U(m(n).b("group"))
    }, [
      oe(i.$slots, "default")
    ], 2));
  }
});
var Pm = /* @__PURE__ */ Me(sT, [["__file", "button-group.vue"]]);
const Dm = bn(nT, {
  ButtonGroup: Pm
});
yo(Pm);
var ll = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CLASS = 2] = "CLASS", t[t.STYLE = 4] = "STYLE", t[t.PROPS = 8] = "PROPS", t[t.FULL_PROPS = 16] = "FULL_PROPS", t[t.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", t[t.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", t[t.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", t[t.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", t[t.NEED_PATCH = 512] = "NEED_PATCH", t[t.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", t[t.HOISTED = -1] = "HOISTED", t[t.BAIL = -2] = "BAIL", t))(ll || {});
const oT = (t = "") => t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Tc = Re({
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
    values: Bg
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), lT = {
  close: (t) => t instanceof MouseEvent,
  click: (t) => t instanceof MouseEvent
}, aT = Q({
  name: "ElTag"
}), cT = /* @__PURE__ */ Q({
  ...aT,
  props: Tc,
  emits: lT,
  setup(t, { emit: e }) {
    const n = t, i = vs(), r = Ue("tag"), s = M(() => {
      const { type: c, hit: u, effect: f, closable: d, round: h } = n;
      return [
        r.b(),
        r.is("closable", d),
        r.m(c || "primary"),
        r.m(i.value),
        r.m(f),
        r.is("hit", u),
        r.is("round", h)
      ];
    }), o = (c) => {
      e("close", c);
    }, l = (c) => {
      e("click", c);
    }, a = (c) => {
      var u, f, d;
      (d = (f = (u = c?.component) == null ? void 0 : u.subTree) == null ? void 0 : f.component) != null && d.bum && (c.component.subTree.component.bum = null);
    };
    return (c, u) => c.disableTransitions ? (x(), R("span", {
      key: 0,
      class: U(m(s)),
      style: tt({ backgroundColor: c.color }),
      onClick: l
    }, [
      T("span", {
        class: U(m(r).e("content"))
      }, [
        oe(c.$slots, "default")
      ], 2),
      c.closable ? (x(), se(m(_t), {
        key: 0,
        class: U(m(r).e("close")),
        onClick: at(o, ["stop"])
      }, {
        default: X(() => [
          Z(m(Ml))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : j("v-if", !0)
    ], 6)) : (x(), se(Ri, {
      key: 1,
      name: `${m(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: a
    }, {
      default: X(() => [
        T("span", {
          class: U(m(s)),
          style: tt({ backgroundColor: c.color }),
          onClick: l
        }, [
          T("span", {
            class: U(m(r).e("content"))
          }, [
            oe(c.$slots, "default")
          ], 2),
          c.closable ? (x(), se(m(_t), {
            key: 0,
            class: U(m(r).e("close")),
            onClick: at(o, ["stop"])
          }, {
            default: X(() => [
              Z(m(Ml))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : j("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var uT = /* @__PURE__ */ Me(cT, [["__file", "tag.vue"]]);
const fT = bn(uT), Wi = /* @__PURE__ */ new Map();
if (nt) {
  let t;
  document.addEventListener("mousedown", (e) => t = e), document.addEventListener("mouseup", (e) => {
    if (t) {
      for (const n of Wi.values())
        for (const { documentHandler: i } of n)
          i(e, t);
      t = void 0;
    }
  });
}
function ph(t, e) {
  let n = [];
  return ei(e.arg) ? n = e.arg : Bn(e.arg) && n.push(e.arg), function(i, r) {
    const s = e.instance.popperRef, o = i.target, l = r?.target, a = !e || !e.instance, c = !o || !l, u = t.contains(o) || t.contains(l), f = t === o, d = n.length && n.some((p) => p?.contains(o)) || n.length && n.includes(l), h = s && (s.contains(o) || s.contains(l));
    a || c || u || f || d || h || e.value(i, r);
  };
}
const dT = {
  beforeMount(t, e) {
    Wi.has(t) || Wi.set(t, []), Wi.get(t).push({
      documentHandler: ph(t, e),
      bindingFn: e.value
    });
  },
  updated(t, e) {
    Wi.has(t) || Wi.set(t, []);
    const n = Wi.get(t), i = n.findIndex((s) => s.bindingFn === e.oldValue), r = {
      documentHandler: ph(t, e),
      bindingFn: e.value
    };
    i >= 0 ? n.splice(i, 1, r) : n.push(r);
  },
  unmounted(t) {
    Wi.delete(t);
  }
}, hT = Re({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: fe(Object)
  },
  size: vo,
  button: {
    type: fe(Object)
  },
  experimentalFeatures: {
    type: fe(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: fe(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Wg
}), Nn = {};
Q({
  name: "ElConfigProvider",
  props: hT,
  setup(t, { slots: e }) {
    pe(() => t.message, (i) => {
      Object.assign(Nn, i ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Gg(t);
    return () => oe(e, "default", { config: n?.value });
  }
});
const pT = 100, gT = 600, gh = {
  beforeMount(t, e) {
    const n = e.value, { interval: i = pT, delay: r = gT } = gt(n) ? {} : n;
    let s, o;
    const l = () => gt(n) ? n() : n.handler(), a = () => {
      o && (clearTimeout(o), o = void 0), s && (clearInterval(s), s = void 0);
    };
    t.addEventListener("mousedown", (c) => {
      c.button === 0 && (a(), l(), document.addEventListener("mouseup", () => a(), {
        once: !0
      }), o = setTimeout(() => {
        s = setInterval(() => {
          l();
        }, i);
      }, r));
    });
  }
}, Rm = (t) => {
  if (!t)
    return { onClick: er, onMousedown: er, onMouseup: er };
  let e = !1, n = !1;
  return { onClick: (o) => {
    e && n && t(o), e = n = !1;
  }, onMousedown: (o) => {
    e = o.target === o.currentTarget;
  }, onMouseup: (o) => {
    n = o.target === o.currentTarget;
  } };
}, mT = Re({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: fe([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: fe([String, Number])
  }
}), vT = {
  click: (t) => t instanceof MouseEvent
}, yT = "overlay";
var bT = Q({
  name: "ElOverlay",
  props: mT,
  emits: vT,
  setup(t, { slots: e, emit: n }) {
    const i = Ue(yT), r = (a) => {
      n("click", a);
    }, { onClick: s, onMousedown: o, onMouseup: l } = Rm(t.customMaskEvent ? void 0 : r);
    return () => t.mask ? Z("div", {
      class: [i.b(), t.overlayClass],
      style: {
        zIndex: t.zIndex
      },
      onClick: s,
      onMousedown: o,
      onMouseup: l
    }, [oe(e, "default")], ll.STYLE | ll.CLASS | ll.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Iu("div", {
      class: t.overlayClass,
      style: {
        zIndex: t.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [oe(e, "default")]);
  }
});
const wT = bT, Nm = Symbol("dialogInjectionKey"), Fm = Re({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: ui
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
}), ST = {
  close: () => !0
}, CT = (t, e, n, i) => {
  let r = {
    offsetX: 0,
    offsetY: 0
  };
  const s = (c) => {
    const u = c.clientX, f = c.clientY, { offsetX: d, offsetY: h } = r, p = t.value.getBoundingClientRect(), v = p.left, y = p.top, g = p.width, b = p.height, k = document.documentElement.clientWidth, S = document.documentElement.clientHeight, _ = -v + d, E = -y + h, C = k - v - g + d, H = S - y - b + h, N = (z) => {
      let W = d + z.clientX - u, te = h + z.clientY - f;
      i?.value || (W = Math.min(Math.max(W, _), C), te = Math.min(Math.max(te, E), H)), r = {
        offsetX: W,
        offsetY: te
      }, t.value && (t.value.style.transform = `translate(${Ii(W)}, ${Ii(te)})`);
    }, q = () => {
      document.removeEventListener("mousemove", N), document.removeEventListener("mouseup", q);
    };
    document.addEventListener("mousemove", N), document.addEventListener("mouseup", q);
  }, o = () => {
    e.value && t.value && e.value.addEventListener("mousedown", s);
  }, l = () => {
    e.value && t.value && e.value.removeEventListener("mousedown", s);
  }, a = () => {
    r = {
      offsetX: 0,
      offsetY: 0
    }, t.value && (t.value.style.transform = "none");
  };
  return it(() => {
    xu(() => {
      n.value ? o() : l();
    });
  }), yn(() => {
    l();
  }), {
    resetPosition: a
  };
}, uf = (...t) => (e) => {
  t.forEach((n) => {
    gt(n) ? n(e) : n.value = e;
  });
}, kT = Q({ name: "ElDialogContent" }), _T = /* @__PURE__ */ Q({
  ...kT,
  props: Fm,
  emits: ST,
  setup(t, { expose: e }) {
    const n = t, { t: i } = mo(), { Close: r } = Yg, { dialogRef: s, headerRef: o, bodyId: l, ns: a, style: c } = ye(Nm), { focusTrapRef: u } = ye(Ju), f = M(() => [
      a.b(),
      a.is("fullscreen", n.fullscreen),
      a.is("draggable", n.draggable),
      a.is("align-center", n.alignCenter),
      { [a.m("center")]: n.center }
    ]), d = uf(u, s), h = M(() => n.draggable), p = M(() => n.overflow), { resetPosition: v } = CT(s, o, h, p);
    return e({
      resetPosition: v
    }), (y, g) => (x(), R("div", {
      ref: m(d),
      class: U(m(f)),
      style: tt(m(c)),
      tabindex: "-1"
    }, [
      T("header", {
        ref_key: "headerRef",
        ref: o,
        class: U([m(a).e("header"), y.headerClass, { "show-close": y.showClose }])
      }, [
        oe(y.$slots, "header", {}, () => [
          T("span", {
            role: "heading",
            "aria-level": y.ariaLevel,
            class: U(m(a).e("title"))
          }, G(y.title), 11, ["aria-level"])
        ]),
        y.showClose ? (x(), R("button", {
          key: 0,
          "aria-label": m(i)("el.dialog.close"),
          class: U(m(a).e("headerbtn")),
          type: "button",
          onClick: (b) => y.$emit("close")
        }, [
          Z(m(_t), {
            class: U(m(a).e("close"))
          }, {
            default: X(() => [
              (x(), se(en(y.closeIcon || m(r))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : j("v-if", !0)
      ], 2),
      T("div", {
        id: m(l),
        class: U([m(a).e("body"), y.bodyClass])
      }, [
        oe(y.$slots, "default")
      ], 10, ["id"]),
      y.$slots.footer ? (x(), R("footer", {
        key: 0,
        class: U([m(a).e("footer"), y.footerClass])
      }, [
        oe(y.$slots, "footer")
      ], 2)) : j("v-if", !0)
    ], 6));
  }
});
var ET = /* @__PURE__ */ Me(_T, [["__file", "dialog-content.vue"]]);
const TT = Re({
  ...Fm,
  appendToBody: Boolean,
  appendTo: {
    type: fe([String, Object]),
    default: "body"
  },
  beforeClose: {
    type: fe(Function)
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
}), AT = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [$t]: (t) => Zs(t),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, OT = (t, e = {}) => {
  Qt(t) || zu("[useLockscreen]", "You need to pass a ref param to this function");
  const n = e.ns || Ue("popup"), i = M(() => n.bm("parent", "hidden"));
  if (!nt || Vd(document.body, i.value))
    return;
  let r = 0, s = !1, o = "0";
  const l = () => {
    setTimeout(() => {
      typeof document > "u" || s && document && (document.body.style.width = o, lk(document.body, i.value));
    }, 200);
  };
  pe(t, (a) => {
    if (!a) {
      l();
      return;
    }
    s = !Vd(document.body, i.value), s && (o = document.body.style.width, ok(document.body, i.value)), r = ck(n.namespace.value);
    const c = document.documentElement.clientHeight < document.body.scrollHeight, u = ak(document.body, "overflowY");
    r > 0 && (c || u === "scroll") && s && (document.body.style.width = `calc(100% - ${r}px)`);
  }), fg(() => l());
}, xT = (t, e) => {
  var n;
  const r = Mt().emit, { nextZIndex: s } = Gu();
  let o = "";
  const l = ir(), a = ir(), c = I(!1), u = I(!1), f = I(!1), d = I((n = t.zIndex) != null ? n : s());
  let h, p;
  const v = aa("namespace", Ns), y = M(() => {
    const D = {}, B = `--${v.value}-dialog`;
    return t.fullscreen || (t.top && (D[`${B}-margin-top`] = t.top), t.width && (D[`${B}-width`] = Ii(t.width))), D;
  }), g = M(() => t.alignCenter ? { display: "flex" } : {});
  function b() {
    r("opened");
  }
  function k() {
    r("closed"), r($t, !1), t.destroyOnClose && (f.value = !1);
  }
  function S() {
    r("close");
  }
  function _() {
    p?.(), h?.(), t.openDelay && t.openDelay > 0 ? { stop: h } = Ol(() => N(), t.openDelay) : N();
  }
  function E() {
    h?.(), p?.(), t.closeDelay && t.closeDelay > 0 ? { stop: p } = Ol(() => q(), t.closeDelay) : q();
  }
  function C() {
    function D(B) {
      B || (u.value = !0, c.value = !1);
    }
    t.beforeClose ? t.beforeClose(D) : E();
  }
  function H() {
    t.closeOnClickModal && C();
  }
  function N() {
    nt && (c.value = !0);
  }
  function q() {
    c.value = !1;
  }
  function z() {
    r("openAutoFocus");
  }
  function W() {
    r("closeAutoFocus");
  }
  function te(D) {
    var B;
    ((B = D.detail) == null ? void 0 : B.focusReason) === "pointer" && D.preventDefault();
  }
  t.lockScroll && OT(c);
  function ge() {
    t.closeOnPressEscape && C();
  }
  return pe(() => t.modelValue, (D) => {
    D ? (u.value = !1, _(), f.value = !0, d.value = Ig(t.zIndex) ? s() : d.value++, ct(() => {
      r("open"), e.value && (e.value.parentElement.scrollTop = 0, e.value.parentElement.scrollLeft = 0, e.value.scrollTop = 0);
    })) : c.value && E();
  }), pe(() => t.fullscreen, (D) => {
    e.value && (D ? (o = e.value.style.transform, e.value.style.transform = "") : e.value.style.transform = o);
  }), it(() => {
    t.modelValue && (c.value = !0, f.value = !0, _());
  }), {
    afterEnter: b,
    afterLeave: k,
    beforeLeave: S,
    handleClose: C,
    onModalClick: H,
    close: E,
    doClose: q,
    onOpenAutoFocus: z,
    onCloseAutoFocus: W,
    onCloseRequested: ge,
    onFocusoutPrevented: te,
    titleId: l,
    bodyId: a,
    closed: u,
    style: y,
    overlayDialogStyle: g,
    rendered: f,
    visible: c,
    zIndex: d
  };
}, MT = Q({
  name: "ElDialog",
  inheritAttrs: !1
}), LT = /* @__PURE__ */ Q({
  ...MT,
  props: TT,
  emits: AT,
  setup(t, { expose: e }) {
    const n = t, i = Mu();
    Lm({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, M(() => !!i.title));
    const r = Ue("dialog"), s = I(), o = I(), l = I(), {
      visible: a,
      titleId: c,
      bodyId: u,
      style: f,
      overlayDialogStyle: d,
      rendered: h,
      zIndex: p,
      afterEnter: v,
      afterLeave: y,
      beforeLeave: g,
      handleClose: b,
      onModalClick: k,
      onOpenAutoFocus: S,
      onCloseAutoFocus: _,
      onCloseRequested: E,
      onFocusoutPrevented: C
    } = xT(n, s);
    Lt(Nm, {
      dialogRef: s,
      headerRef: o,
      bodyId: u,
      ns: r,
      rendered: h,
      style: f
    });
    const H = Rm(k), N = M(() => n.draggable && !n.fullscreen);
    return e({
      visible: a,
      dialogContentRef: l,
      resetPosition: () => {
        var z;
        (z = l.value) == null || z.resetPosition();
      }
    }), (z, W) => (x(), se(m(Am), {
      to: z.appendTo,
      disabled: z.appendTo !== "body" ? !1 : !z.appendToBody
    }, {
      default: X(() => [
        Z(Ri, {
          name: "dialog-fade",
          onAfterEnter: m(v),
          onAfterLeave: m(y),
          onBeforeLeave: m(g),
          persisted: ""
        }, {
          default: X(() => [
            nn(Z(m(wT), {
              "custom-mask-event": "",
              mask: z.modal,
              "overlay-class": z.modalClass,
              "z-index": m(p)
            }, {
              default: X(() => [
                T("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": z.title || void 0,
                  "aria-labelledby": z.title ? void 0 : m(c),
                  "aria-describedby": m(u),
                  class: U(`${m(r).namespace.value}-overlay-dialog`),
                  style: tt(m(d)),
                  onClick: m(H).onClick,
                  onMousedown: m(H).onMousedown,
                  onMouseup: m(H).onMouseup
                }, [
                  Z(m(hm), {
                    loop: "",
                    trapped: m(a),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: m(S),
                    onFocusAfterReleased: m(_),
                    onFocusoutPrevented: m(C),
                    onReleaseRequested: m(E)
                  }, {
                    default: X(() => [
                      m(h) ? (x(), se(ET, On({
                        key: 0,
                        ref_key: "dialogContentRef",
                        ref: l
                      }, z.$attrs, {
                        center: z.center,
                        "align-center": z.alignCenter,
                        "close-icon": z.closeIcon,
                        draggable: m(N),
                        overflow: z.overflow,
                        fullscreen: z.fullscreen,
                        "header-class": z.headerClass,
                        "body-class": z.bodyClass,
                        "footer-class": z.footerClass,
                        "show-close": z.showClose,
                        title: z.title,
                        "aria-level": z.headerAriaLevel,
                        onClose: m(b)
                      }), ea({
                        header: X(() => [
                          z.$slots.title ? oe(z.$slots, "title", { key: 1 }) : oe(z.$slots, "header", {
                            key: 0,
                            close: m(b),
                            titleId: m(c),
                            titleClass: m(r).e("title")
                          })
                        ]),
                        default: X(() => [
                          oe(z.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        z.$slots.footer ? {
                          name: "footer",
                          fn: X(() => [
                            oe(z.$slots, "footer")
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
              [ai, m(a)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var IT = /* @__PURE__ */ Me(LT, [["__file", "dialog.vue"]]);
const PT = bn(IT), DT = /* @__PURE__ */ Q({
  inheritAttrs: !1
});
function RT(t, e, n, i, r, s) {
  return oe(t.$slots, "default");
}
var NT = /* @__PURE__ */ Me(DT, [["render", RT], ["__file", "collection.vue"]]);
const FT = /* @__PURE__ */ Q({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function $T(t, e, n, i, r, s) {
  return oe(t.$slots, "default");
}
var BT = /* @__PURE__ */ Me(FT, [["render", $T], ["__file", "collection-item.vue"]]);
const $m = "data-el-collection-item", Bm = (t) => {
  const e = `El${t}Collection`, n = `${e}Item`, i = Symbol(e), r = Symbol(n), s = {
    ...NT,
    name: e,
    setup() {
      const l = I(), a = /* @__PURE__ */ new Map();
      Lt(i, {
        itemMap: a,
        getItems: () => {
          const u = m(l);
          if (!u)
            return [];
          const f = Array.from(u.querySelectorAll(`[${$m}]`));
          return [...a.values()].sort((h, p) => f.indexOf(h.ref) - f.indexOf(p.ref));
        },
        collectionRef: l
      });
    }
  }, o = {
    ...BT,
    name: n,
    setup(l, { attrs: a }) {
      const c = I(), u = ye(i, void 0);
      Lt(r, {
        collectionItemRef: c
      }), it(() => {
        const f = m(c);
        f && u.itemMap.set(f, {
          ref: f,
          ...a
        });
      }), yn(() => {
        const f = m(c);
        u.itemMap.delete(f);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: i,
    COLLECTION_ITEM_INJECTION_KEY: r,
    ElCollection: s,
    ElCollectionItem: o
  };
}, VT = Re({
  style: { type: fe([String, Array, Object]) },
  currentTabId: {
    type: fe(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: fe(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
}), {
  ElCollection: HT,
  ElCollectionItem: WT,
  COLLECTION_INJECTION_KEY: ff,
  COLLECTION_ITEM_INJECTION_KEY: zT
} = Bm("RovingFocusGroup"), df = Symbol("elRovingFocusGroup"), Vm = Symbol("elRovingFocusGroupItem"), GT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
}, UT = (t, e) => t, jT = (t, e, n) => {
  const i = UT(t.code);
  return GT[i];
}, KT = (t, e) => t.map((n, i) => t[(i + e) % t.length]), hf = (t) => {
  const { activeElement: e } = document;
  for (const n of t)
    if (n === e || (n.focus(), e !== document.activeElement))
      return;
}, mh = "currentTabIdChange", vh = "rovingFocusGroup.entryFocus", YT = { bubbles: !1, cancelable: !0 }, qT = Q({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: !1,
  props: VT,
  emits: [mh, "entryFocus"],
  setup(t, { emit: e }) {
    var n;
    const i = I((n = t.currentTabId || t.defaultCurrentTabId) != null ? n : null), r = I(!1), s = I(!1), o = I(), { getItems: l } = ye(ff, void 0), a = M(() => [
      {
        outline: "none"
      },
      t.style
    ]), c = (v) => {
      e(mh, v);
    }, u = () => {
      r.value = !0;
    }, f = yt((v) => {
      var y;
      (y = t.onMousedown) == null || y.call(t, v);
    }, () => {
      s.value = !0;
    }), d = yt((v) => {
      var y;
      (y = t.onFocus) == null || y.call(t, v);
    }, (v) => {
      const y = !m(s), { target: g, currentTarget: b } = v;
      if (g === b && y && !m(r)) {
        const k = new Event(vh, YT);
        if (b?.dispatchEvent(k), !k.defaultPrevented) {
          const S = l().filter((N) => N.focusable), _ = S.find((N) => N.active), E = S.find((N) => N.id === m(i)), H = [_, E, ...S].filter(Boolean).map((N) => N.ref);
          hf(H);
        }
      }
      s.value = !1;
    }), h = yt((v) => {
      var y;
      (y = t.onBlur) == null || y.call(t, v);
    }, () => {
      r.value = !1;
    }), p = (...v) => {
      e("entryFocus", ...v);
    };
    Lt(df, {
      currentTabbedId: Ql(i),
      loop: Jt(t, "loop"),
      tabIndex: M(() => m(r) ? -1 : 0),
      rovingFocusGroupRef: o,
      rovingFocusGroupRootStyle: a,
      orientation: Jt(t, "orientation"),
      dir: Jt(t, "dir"),
      onItemFocus: c,
      onItemShiftTab: u,
      onBlur: h,
      onFocus: d,
      onMousedown: f
    }), pe(() => t.currentTabId, (v) => {
      i.value = v ?? null;
    }), kn(o, vh, p);
  }
});
function JT(t, e, n, i, r, s) {
  return oe(t.$slots, "default");
}
var XT = /* @__PURE__ */ Me(qT, [["render", JT], ["__file", "roving-focus-group-impl.vue"]]);
const ZT = Q({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: HT,
    ElRovingFocusGroupImpl: XT
  }
});
function QT(t, e, n, i, r, s) {
  const o = rt("el-roving-focus-group-impl"), l = rt("el-focus-group-collection");
  return x(), se(l, null, {
    default: X(() => [
      Z(o, db(hb(t.$attrs)), {
        default: X(() => [
          oe(t.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  });
}
var eA = /* @__PURE__ */ Me(ZT, [["render", QT], ["__file", "roving-focus-group.vue"]]);
const tA = Re({
  trigger: cf.trigger,
  triggerKeys: {
    type: fe(Array),
    default: () => [
      Ze.enter,
      Ze.numpadEnter,
      Ze.space,
      Ze.down
    ]
  },
  effect: {
    ...to.effect,
    default: "light"
  },
  type: {
    type: fe(String)
  },
  placement: {
    type: fe(String),
    default: "bottom"
  },
  popperOptions: {
    type: fe(Object),
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
    type: fe([Number, String]),
    default: 0
  },
  maxHeight: {
    type: fe([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  role: {
    type: String,
    values: sm,
    default: "menu"
  },
  buttonProps: {
    type: fe(Object)
  },
  teleported: to.teleported,
  persistent: {
    type: Boolean,
    default: !0
  }
}), Hm = Re({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: ui
  }
}), nA = Re({
  onKeydown: { type: fe(Function) }
}), iA = [
  Ze.down,
  Ze.pageDown,
  Ze.home
], Wm = [Ze.up, Ze.pageUp, Ze.end], rA = [...iA, ...Wm], {
  ElCollection: sA,
  ElCollectionItem: oA,
  COLLECTION_INJECTION_KEY: lA,
  COLLECTION_ITEM_INJECTION_KEY: aA
} = Bm("Dropdown"), pa = Symbol("elDropdown"), { ButtonGroup: cA } = Dm, uA = Q({
  name: "ElDropdown",
  components: {
    ElButton: Dm,
    ElButtonGroup: cA,
    ElScrollbar: im,
    ElDropdownCollection: sA,
    ElTooltip: xm,
    ElRovingFocusGroup: eA,
    ElOnlyChild: um,
    ElIcon: _t,
    ArrowDown: Uu
  },
  props: tA,
  emits: ["visible-change", "click", "command"],
  setup(t, { emit: e }) {
    const n = Mt(), i = Ue("dropdown"), { t: r } = mo(), s = I(), o = I(), l = I(), a = I(), c = I(null), u = I(null), f = I(!1), d = M(() => ({
      maxHeight: Ii(t.maxHeight)
    })), h = M(() => [i.m(S.value)]), p = M(() => Ci(t.trigger)), v = ir().value, y = M(() => t.id || v);
    pe([s, p], ([B, V], [ce]) => {
      var ae, ke, Oe;
      (ae = ce?.$el) != null && ae.removeEventListener && ce.$el.removeEventListener("pointerenter", E), (ke = B?.$el) != null && ke.removeEventListener && B.$el.removeEventListener("pointerenter", E), (Oe = B?.$el) != null && Oe.addEventListener && V.includes("hover") && B.$el.addEventListener("pointerenter", E);
    }, { immediate: !0 }), yn(() => {
      var B, V;
      (V = (B = s.value) == null ? void 0 : B.$el) != null && V.removeEventListener && s.value.$el.removeEventListener("pointerenter", E);
    });
    function g() {
      b();
    }
    function b() {
      var B;
      (B = l.value) == null || B.onClose();
    }
    function k() {
      var B;
      (B = l.value) == null || B.onOpen();
    }
    const S = vs();
    function _(...B) {
      e("command", ...B);
    }
    function E() {
      var B, V;
      (V = (B = s.value) == null ? void 0 : B.$el) == null || V.focus();
    }
    function C() {
    }
    function H() {
      const B = m(a);
      p.value.includes("hover") && B?.focus(), u.value = null;
    }
    function N(B) {
      u.value = B;
    }
    function q(B) {
      f.value || (B.preventDefault(), B.stopImmediatePropagation());
    }
    function z() {
      e("visible-change", !0);
    }
    function W(B) {
      var V;
      B?.type === "keydown" && ((V = a.value) == null || V.focus());
    }
    function te() {
      e("visible-change", !1);
    }
    return Lt(pa, {
      contentRef: a,
      role: M(() => t.role),
      triggerId: y,
      isUsingKeyboard: f,
      onItemEnter: C,
      onItemLeave: H
    }), Lt("elDropdown", {
      instance: n,
      dropdownSize: S,
      handleClick: g,
      commandHandler: _,
      trigger: Jt(t, "trigger"),
      hideOnClick: Jt(t, "hideOnClick")
    }), {
      t: r,
      ns: i,
      scrollbar: c,
      wrapStyle: d,
      dropdownTriggerKls: h,
      dropdownSize: S,
      triggerId: y,
      currentTabId: u,
      handleCurrentTabIdChange: N,
      handlerMainButtonClick: (B) => {
        e("click", B);
      },
      handleEntryFocus: q,
      handleClose: b,
      handleOpen: k,
      handleBeforeShowTooltip: z,
      handleShowTooltip: W,
      handleBeforeHideTooltip: te,
      onFocusAfterTrapped: (B) => {
        var V, ce;
        B.preventDefault(), (ce = (V = a.value) == null ? void 0 : V.focus) == null || ce.call(V, {
          preventScroll: !0
        });
      },
      popperRef: l,
      contentRef: a,
      triggeringElementRef: s,
      referenceElementRef: o
    };
  }
});
function fA(t, e, n, i, r, s) {
  var o;
  const l = rt("el-dropdown-collection"), a = rt("el-roving-focus-group"), c = rt("el-scrollbar"), u = rt("el-only-child"), f = rt("el-tooltip"), d = rt("el-button"), h = rt("arrow-down"), p = rt("el-icon"), v = rt("el-button-group");
  return x(), R("div", {
    class: U([t.ns.b(), t.ns.is("disabled", t.disabled)])
  }, [
    Z(f, {
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
      "reference-element": (o = t.referenceElementRef) == null ? void 0 : o.$el,
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
    }, ea({
      content: X(() => [
        Z(c, {
          ref: "scrollbar",
          "wrap-style": t.wrapStyle,
          tag: "div",
          "view-class": t.ns.e("list")
        }, {
          default: X(() => [
            Z(a, {
              loop: t.loop,
              "current-tab-id": t.currentTabId,
              orientation: "horizontal",
              onCurrentTabIdChange: t.handleCurrentTabIdChange,
              onEntryFocus: t.handleEntryFocus
            }, {
              default: X(() => [
                Z(l, null, {
                  default: X(() => [
                    oe(t.$slots, "dropdown")
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
        fn: X(() => [
          Z(u, {
            id: t.triggerId,
            ref: "triggeringElementRef",
            role: "button",
            tabindex: t.tabindex
          }, {
            default: X(() => [
              oe(t.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "tabindex"])
        ])
      }
    ]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "persistent", "onBeforeShow", "onShow", "onBeforeHide"]),
    t.splitButton ? (x(), se(v, { key: 0 }, {
      default: X(() => [
        Z(d, On({ ref: "referenceElementRef" }, t.buttonProps, {
          size: t.dropdownSize,
          type: t.type,
          disabled: t.disabled,
          tabindex: t.tabindex,
          onClick: t.handlerMainButtonClick
        }), {
          default: X(() => [
            oe(t.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "tabindex", "onClick"]),
        Z(d, On({
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
          default: X(() => [
            Z(p, {
              class: U(t.ns.e("icon"))
            }, {
              default: X(() => [
                Z(h)
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
var dA = /* @__PURE__ */ Me(uA, [["render", fA], ["__file", "dropdown.vue"]]);
const hA = Q({
  components: {
    ElRovingFocusCollectionItem: WT
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
    const { currentTabbedId: n, loop: i, onItemFocus: r, onItemShiftTab: s } = ye(df, void 0), { getItems: o } = ye(ff, void 0), l = ir(), a = I(), c = yt((h) => {
      e("mousedown", h);
    }, (h) => {
      t.focusable ? r(m(l)) : h.preventDefault();
    }), u = yt((h) => {
      e("focus", h);
    }, () => {
      r(m(l));
    }), f = yt((h) => {
      e("keydown", h);
    }, (h) => {
      const { code: p, shiftKey: v, target: y, currentTarget: g } = h;
      if (p === Ze.tab && v) {
        s();
        return;
      }
      if (y !== g)
        return;
      const b = jT(h);
      if (b) {
        h.preventDefault();
        let S = o().filter((_) => _.focusable).map((_) => _.ref);
        switch (b) {
          case "last": {
            S.reverse();
            break;
          }
          case "prev":
          case "next": {
            b === "prev" && S.reverse();
            const _ = S.indexOf(g);
            S = i.value ? KT(S, _ + 1) : S.slice(_ + 1);
            break;
          }
        }
        ct(() => {
          hf(S);
        });
      }
    }), d = M(() => n.value === m(l));
    return Lt(Vm, {
      rovingFocusGroupItemRef: a,
      tabIndex: M(() => m(d) ? 0 : -1),
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
function pA(t, e, n, i, r, s) {
  const o = rt("el-roving-focus-collection-item");
  return x(), se(o, {
    id: t.id,
    focusable: t.focusable,
    active: t.active
  }, {
    default: X(() => [
      oe(t.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var gA = /* @__PURE__ */ Me(hA, [["render", pA], ["__file", "roving-focus-item.vue"]]);
const mA = Q({
  name: "DropdownItemImpl",
  components: {
    ElIcon: _t
  },
  props: Hm,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(t, { emit: e }) {
    const n = Ue("dropdown"), { role: i } = ye(pa, void 0), { collectionItemRef: r } = ye(aA, void 0), { collectionItemRef: s } = ye(zT, void 0), {
      rovingFocusGroupItemRef: o,
      tabIndex: l,
      handleFocus: a,
      handleKeydown: c,
      handleMousedown: u
    } = ye(Vm, void 0), f = uf(r, s, o), d = M(() => i.value === "menu" ? "menuitem" : i.value === "navigation" ? "link" : "button"), h = yt((p) => {
      if ([Ze.enter, Ze.numpadEnter, Ze.space].includes(p.code))
        return p.preventDefault(), p.stopImmediatePropagation(), e("clickimpl", p), !0;
    }, c);
    return {
      ns: n,
      itemRef: f,
      dataset: {
        [$m]: ""
      },
      role: d,
      tabIndex: l,
      handleFocus: a,
      handleKeydown: h,
      handleMousedown: u
    };
  }
});
function vA(t, e, n, i, r, s) {
  const o = rt("el-icon");
  return x(), R(_e, null, [
    t.divided ? (x(), R("li", {
      key: 0,
      role: "separator",
      class: U(t.ns.bem("menu", "item", "divided"))
    }, null, 2)) : j("v-if", !0),
    T("li", On({ ref: t.itemRef }, { ...t.dataset, ...t.$attrs }, {
      "aria-disabled": t.disabled,
      class: [t.ns.be("menu", "item"), t.ns.is("disabled", t.disabled)],
      tabindex: t.tabIndex,
      role: t.role,
      onClick: (l) => t.$emit("clickimpl", l),
      onFocus: t.handleFocus,
      onKeydown: at(t.handleKeydown, ["self"]),
      onMousedown: t.handleMousedown,
      onPointermove: (l) => t.$emit("pointermove", l),
      onPointerleave: (l) => t.$emit("pointerleave", l)
    }), [
      t.icon ? (x(), se(o, { key: 0 }, {
        default: X(() => [
          (x(), se(en(t.icon)))
        ]),
        _: 1
      })) : j("v-if", !0),
      oe(t.$slots, "default")
    ], 16, ["aria-disabled", "tabindex", "role", "onClick", "onFocus", "onKeydown", "onMousedown", "onPointermove", "onPointerleave"])
  ], 64);
}
var yA = /* @__PURE__ */ Me(mA, [["render", vA], ["__file", "dropdown-item-impl.vue"]]);
const zm = () => {
  const t = ye("elDropdown", {}), e = M(() => t?.dropdownSize);
  return {
    elDropdown: t,
    _elDropdownSize: e
  };
}, bA = Q({
  name: "ElDropdownItem",
  components: {
    ElDropdownCollectionItem: oA,
    ElRovingFocusItem: gA,
    ElDropdownItemImpl: yA
  },
  inheritAttrs: !1,
  props: Hm,
  emits: ["pointermove", "pointerleave", "click"],
  setup(t, { emit: e, attrs: n }) {
    const { elDropdown: i } = zm(), r = Mt(), s = I(null), o = M(() => {
      var h, p;
      return (p = (h = m(s)) == null ? void 0 : h.textContent) != null ? p : "";
    }), { onItemEnter: l, onItemLeave: a } = ye(pa, void 0), c = yt((h) => (e("pointermove", h), h.defaultPrevented), ch((h) => {
      if (t.disabled) {
        a(h);
        return;
      }
      const p = h.currentTarget;
      p === document.activeElement || p.contains(document.activeElement) || (l(h), h.defaultPrevented || p?.focus());
    })), u = yt((h) => (e("pointerleave", h), h.defaultPrevented), ch(a)), f = yt((h) => {
      if (!t.disabled)
        return e("click", h), h.type !== "keydown" && h.defaultPrevented;
    }, (h) => {
      var p, v, y;
      if (t.disabled) {
        h.stopImmediatePropagation();
        return;
      }
      (p = i?.hideOnClick) != null && p.value && ((v = i.handleClick) == null || v.call(i)), (y = i.commandHandler) == null || y.call(i, t.command, r, h);
    }), d = M(() => ({ ...t, ...n }));
    return {
      handleClick: f,
      handlePointerMove: c,
      handlePointerLeave: u,
      textContent: o,
      propsAndAttrs: d
    };
  }
});
function wA(t, e, n, i, r, s) {
  var o;
  const l = rt("el-dropdown-item-impl"), a = rt("el-roving-focus-item"), c = rt("el-dropdown-collection-item");
  return x(), se(c, {
    disabled: t.disabled,
    "text-value": (o = t.textValue) != null ? o : t.textContent
  }, {
    default: X(() => [
      Z(a, {
        focusable: !t.disabled
      }, {
        default: X(() => [
          Z(l, On(t.propsAndAttrs, {
            onPointerleave: t.handlePointerLeave,
            onPointermove: t.handlePointerMove,
            onClickimpl: t.handleClick
          }), {
            default: X(() => [
              oe(t.$slots, "default")
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
var Gm = /* @__PURE__ */ Me(bA, [["render", wA], ["__file", "dropdown-item.vue"]]);
const SA = Q({
  name: "ElDropdownMenu",
  props: nA,
  setup(t) {
    const e = Ue("dropdown"), { _elDropdownSize: n } = zm(), i = n.value, { focusTrapRef: r, onKeydown: s } = ye(Ju, void 0), { contentRef: o, role: l, triggerId: a } = ye(pa, void 0), { collectionRef: c, getItems: u } = ye(lA, void 0), {
      rovingFocusGroupRef: f,
      rovingFocusGroupRootStyle: d,
      tabIndex: h,
      onBlur: p,
      onFocus: v,
      onMousedown: y
    } = ye(df, void 0), { collectionRef: g } = ye(ff, void 0), b = M(() => [e.b("menu"), e.bm("menu", i?.value)]), k = uf(o, c, r, f, g), S = yt((E) => {
      var C;
      (C = t.onKeydown) == null || C.call(t, E);
    }, (E) => {
      const { currentTarget: C, code: H, target: N } = E;
      if (C.contains(N), Ze.tab === H && E.stopImmediatePropagation(), E.preventDefault(), N !== m(o) || !rA.includes(H))
        return;
      const z = u().filter((W) => !W.disabled).map((W) => W.ref);
      Wm.includes(H) && z.reverse(), hf(z);
    });
    return {
      size: i,
      rovingFocusGroupRootStyle: d,
      tabIndex: h,
      dropdownKls: b,
      role: l,
      triggerId: a,
      dropdownListWrapperRef: k,
      handleKeydown: (E) => {
        S(E), s(E);
      },
      onBlur: p,
      onFocus: v,
      onMousedown: y
    };
  }
});
function CA(t, e, n, i, r, s) {
  return x(), R("ul", {
    ref: t.dropdownListWrapperRef,
    class: U(t.dropdownKls),
    style: tt(t.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: t.role,
    "aria-labelledby": t.triggerId,
    onBlur: t.onBlur,
    onFocus: t.onFocus,
    onKeydown: at(t.handleKeydown, ["self"]),
    onMousedown: at(t.onMousedown, ["self"])
  }, [
    oe(t.$slots, "default")
  ], 46, ["role", "aria-labelledby", "onBlur", "onFocus", "onKeydown", "onMousedown"]);
}
var Um = /* @__PURE__ */ Me(SA, [["render", CA], ["__file", "dropdown-menu.vue"]]);
bn(dA, {
  DropdownItem: Gm,
  DropdownMenu: Um
});
const kA = yo(Gm);
yo(Um);
const _A = Re({
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
  size: vo,
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
    validator: (t) => t === null || Ke(t) || ["min", "max"].includes(t),
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
  ...ms(["ariaLabel"])
}), EA = {
  [Zr]: (t, e) => e !== t,
  blur: (t) => t instanceof FocusEvent,
  focus: (t) => t instanceof FocusEvent,
  [jr]: (t) => Ke(t) || xi(t),
  [$t]: (t) => Ke(t) || xi(t)
}, TA = Q({
  name: "ElInputNumber"
}), AA = /* @__PURE__ */ Q({
  ...TA,
  props: _A,
  emits: EA,
  setup(t, { expose: e, emit: n }) {
    const i = t, { t: r } = mo(), s = Ue("input-number"), o = I(), l = tr({
      currentValue: i.modelValue,
      userInput: null
    }), { formItem: a } = ca(), c = M(() => Ke(i.modelValue) && i.modelValue <= i.min), u = M(() => Ke(i.modelValue) && i.modelValue >= i.max), f = M(() => {
      const D = g(i.step);
      return ti(i.precision) ? Math.max(g(i.modelValue), D) : (D > i.precision, i.precision);
    }), d = M(() => i.controls && i.controlsPosition === "right"), h = vs(), p = ua(), v = M(() => {
      if (l.userInput !== null)
        return l.userInput;
      let D = l.currentValue;
      if (xi(D))
        return "";
      if (Ke(D)) {
        if (Number.isNaN(D))
          return "";
        ti(i.precision) || (D = D.toFixed(i.precision));
      }
      return D;
    }), y = (D, B) => {
      if (ti(B) && (B = f.value), B === 0)
        return Math.round(D);
      let V = String(D);
      const ce = V.indexOf(".");
      if (ce === -1 || !V.replace(".", "").split("")[ce + B])
        return D;
      const Oe = V.length;
      return V.charAt(Oe - 1) === "5" && (V = `${V.slice(0, Math.max(0, Oe - 1))}6`), Number.parseFloat(Number(V).toFixed(B));
    }, g = (D) => {
      if (xi(D))
        return 0;
      const B = D.toString(), V = B.indexOf(".");
      let ce = 0;
      return V !== -1 && (ce = B.length - V - 1), ce;
    }, b = (D, B = 1) => Ke(D) ? y(D + i.step * B) : l.currentValue, k = () => {
      if (i.readonly || p.value || u.value)
        return;
      const D = Number(v.value) || 0, B = b(D);
      E(B), n(jr, l.currentValue), te();
    }, S = () => {
      if (i.readonly || p.value || c.value)
        return;
      const D = Number(v.value) || 0, B = b(D, -1);
      E(B), n(jr, l.currentValue), te();
    }, _ = (D, B) => {
      const { max: V, min: ce, step: ae, precision: ke, stepStrictly: Oe, valueOnClear: Ae } = i;
      V < ce && zu("InputNumber", "min should not be greater than max.");
      let be = Number(D);
      if (xi(D) || Number.isNaN(be))
        return null;
      if (D === "") {
        if (Ae === null)
          return null;
        be = mn(Ae) ? { min: ce, max: V }[Ae] : Ae;
      }
      return Oe && (be = y(Math.round(be / ae) * ae, ke), be !== D && B && n($t, be)), ti(ke) || (be = y(be, ke)), (be > V || be < ce) && (be = be > V ? V : ce, B && n($t, be)), be;
    }, E = (D, B = !0) => {
      var V;
      const ce = l.currentValue, ae = _(D);
      if (!B) {
        n($t, ae);
        return;
      }
      ce === ae && D || (l.userInput = null, n($t, ae), ce !== ae && n(Zr, ae, ce), i.validateEvent && ((V = a?.validate) == null || V.call(a, "change").catch((ke) => void 0)), l.currentValue = ae);
    }, C = (D) => {
      l.userInput = D;
      const B = D === "" ? null : Number(D);
      n(jr, B), E(B, !1);
    }, H = (D) => {
      const B = D !== "" ? Number(D) : "";
      (Ke(B) && !Number.isNaN(B) || D === "") && E(B), te(), l.userInput = null;
    }, N = () => {
      var D, B;
      (B = (D = o.value) == null ? void 0 : D.focus) == null || B.call(D);
    }, q = () => {
      var D, B;
      (B = (D = o.value) == null ? void 0 : D.blur) == null || B.call(D);
    }, z = (D) => {
      n("focus", D);
    }, W = (D) => {
      var B, V;
      l.userInput = null, Jg() && l.currentValue === null && ((B = o.value) != null && B.input) && (o.value.input.value = ""), n("blur", D), i.validateEvent && ((V = a?.validate) == null || V.call(a, "blur").catch((ce) => void 0));
    }, te = () => {
      l.currentValue !== i.modelValue && (l.currentValue = i.modelValue);
    }, ge = (D) => {
      document.activeElement === D.target && D.preventDefault();
    };
    return pe(() => i.modelValue, (D, B) => {
      const V = _(D, !0);
      l.userInput === null && V !== B && (l.currentValue = V);
    }, { immediate: !0 }), it(() => {
      var D;
      const { min: B, max: V, modelValue: ce } = i, ae = (D = o.value) == null ? void 0 : D.input;
      if (ae.setAttribute("role", "spinbutton"), Number.isFinite(V) ? ae.setAttribute("aria-valuemax", String(V)) : ae.removeAttribute("aria-valuemax"), Number.isFinite(B) ? ae.setAttribute("aria-valuemin", String(B)) : ae.removeAttribute("aria-valuemin"), ae.setAttribute("aria-valuenow", l.currentValue || l.currentValue === 0 ? String(l.currentValue) : ""), ae.setAttribute("aria-disabled", String(p.value)), !Ke(ce) && ce != null) {
        let ke = Number(ce);
        Number.isNaN(ke) && (ke = null), n($t, ke);
      }
      ae.addEventListener("wheel", ge, { passive: !1 });
    }), dg(() => {
      var D, B;
      const V = (D = o.value) == null ? void 0 : D.input;
      V?.setAttribute("aria-valuenow", `${(B = l.currentValue) != null ? B : ""}`);
    }), e({
      focus: N,
      blur: q
    }), (D, B) => (x(), R("div", {
      class: U([
        m(s).b(),
        m(s).m(m(h)),
        m(s).is("disabled", m(p)),
        m(s).is("without-controls", !D.controls),
        m(s).is("controls-right", m(d))
      ]),
      onDragstart: at(() => {
      }, ["prevent"])
    }, [
      D.controls ? nn((x(), R("span", {
        key: 0,
        role: "button",
        "aria-label": m(r)("el.inputNumber.decrease"),
        class: U([m(s).e("decrease"), m(s).is("disabled", m(c))]),
        onKeydown: Si(S, ["enter"])
      }, [
        oe(D.$slots, "decrease-icon", {}, () => [
          Z(m(_t), null, {
            default: X(() => [
              m(d) ? (x(), se(m(Uu), { key: 0 })) : (x(), se(m(Mk), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [m(gh), S]
      ]) : j("v-if", !0),
      D.controls ? nn((x(), R("span", {
        key: 1,
        role: "button",
        "aria-label": m(r)("el.inputNumber.increase"),
        class: U([m(s).e("increase"), m(s).is("disabled", m(u))]),
        onKeydown: Si(k, ["enter"])
      }, [
        oe(D.$slots, "increase-icon", {}, () => [
          Z(m(_t), null, {
            default: X(() => [
              m(d) ? (x(), se(m(vk), { key: 0 })) : (x(), se(m(Ik), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [m(gh), k]
      ]) : j("v-if", !0),
      Z(m(n_), {
        id: D.id,
        ref_key: "input",
        ref: o,
        type: "number",
        step: D.step,
        "model-value": m(v),
        placeholder: D.placeholder,
        readonly: D.readonly,
        disabled: m(p),
        size: m(h),
        max: D.max,
        min: D.min,
        name: D.name,
        "aria-label": D.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          Si(at(k, ["prevent"]), ["up"]),
          Si(at(S, ["prevent"]), ["down"])
        ],
        onBlur: W,
        onFocus: z,
        onInput: C,
        onChange: H
      }, ea({
        _: 2
      }, [
        D.$slots.prefix ? {
          name: "prefix",
          fn: X(() => [
            oe(D.$slots, "prefix")
          ])
        } : void 0,
        D.$slots.suffix ? {
          name: "suffix",
          fn: X(() => [
            oe(D.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var OA = /* @__PURE__ */ Me(AA, [["__file", "input-number.vue"]]);
const xA = bn(OA);
function MA() {
  const t = Qi(), e = I(0), n = 11, i = M(() => ({
    minWidth: `${Math.max(e.value, n)}px`
  }));
  return Xn(t, () => {
    var s, o;
    e.value = (o = (s = t.value) == null ? void 0 : s.getBoundingClientRect().width) != null ? o : 0;
  }), {
    calculatorRef: t,
    calculatorWidth: e,
    inputStyle: i
  };
}
const jm = Symbol("ElSelectGroup"), ga = Symbol("ElSelect");
function LA(t, e) {
  const n = ye(ga), i = ye(jm, { disabled: !1 }), r = M(() => u(Ci(n.props.modelValue), t.value)), s = M(() => {
    var h;
    if (n.props.multiple) {
      const p = Ci((h = n.props.modelValue) != null ? h : []);
      return !r.value && p.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), o = M(() => t.label || (Sn(t.value) ? "" : t.value)), l = M(() => t.value || t.label || ""), a = M(() => t.disabled || e.groupDisabled || s.value), c = Mt(), u = (h = [], p) => {
    if (Sn(t.value)) {
      const v = n.props.valueKey;
      return h && h.some((y) => pb(Yi(y, v)) === Yi(p, v));
    } else
      return h && h.includes(p);
  }, f = () => {
    !t.disabled && !i.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, d = (h) => {
    const p = new RegExp(oT(h), "i");
    e.visible = p.test(o.value) || t.created;
  };
  return pe(() => o.value, () => {
    !t.created && !n.props.remote && n.setSelected();
  }), pe(() => t.value, (h, p) => {
    const { remote: v, valueKey: y } = n.props;
    if ((v ? h !== p : !$s(h, p)) && (n.onOptionDestroy(p, c.proxy), n.onOptionCreate(c.proxy)), !t.created && !v) {
      if (y && Sn(h) && Sn(p) && h[y] === p[y])
        return;
      n.setSelected();
    }
  }), pe(() => i.disabled, () => {
    e.groupDisabled = i.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: o,
    currentValue: l,
    itemSelected: r,
    isDisabled: a,
    hoverItem: f,
    updateOption: d
  };
}
const IA = Q({
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
    const e = Ue("select"), n = ir(), i = M(() => [
      e.be("dropdown", "item"),
      e.is("disabled", m(l)),
      e.is("selected", m(o)),
      e.is("hovering", m(d))
    ]), r = tr({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: s,
      itemSelected: o,
      isDisabled: l,
      select: a,
      hoverItem: c,
      updateOption: u
    } = LA(t, r), { visible: f, hover: d } = Pu(r), h = Mt().proxy;
    a.onOptionCreate(h), yn(() => {
      const v = h.value, { selected: y } = a.states, g = y.some((b) => b.value === h.value);
      ct(() => {
        a.states.cachedOptions.get(v) === h && !g && a.states.cachedOptions.delete(v);
      }), a.onOptionDestroy(v, h);
    });
    function p() {
      l.value || a.handleOptionSelect(h);
    }
    return {
      ns: e,
      id: n,
      containerKls: i,
      currentLabel: s,
      itemSelected: o,
      isDisabled: l,
      select: a,
      hoverItem: c,
      updateOption: u,
      visible: f,
      hover: d,
      selectOptionClick: p,
      states: r
    };
  }
});
function PA(t, e, n, i, r, s) {
  return nn((x(), R("li", {
    id: t.id,
    class: U(t.containerKls),
    role: "option",
    "aria-disabled": t.isDisabled || void 0,
    "aria-selected": t.itemSelected,
    onMousemove: t.hoverItem,
    onClick: at(t.selectOptionClick, ["stop"])
  }, [
    oe(t.$slots, "default", {}, () => [
      T("span", null, G(t.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [ai, t.visible]
  ]);
}
var pf = /* @__PURE__ */ Me(IA, [["render", PA], ["__file", "option.vue"]]);
const DA = Q({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const t = ye(ga), e = Ue("select"), n = M(() => t.props.popperClass), i = M(() => t.props.multiple), r = M(() => t.props.fitInputWidth), s = I("");
    function o() {
      var l;
      s.value = `${(l = t.selectRef) == null ? void 0 : l.offsetWidth}px`;
    }
    return it(() => {
      o(), Xn(t.selectRef, o);
    }), {
      ns: e,
      minWidth: s,
      popperClass: n,
      isMultiple: i,
      isFitInputWidth: r
    };
  }
});
function RA(t, e, n, i, r, s) {
  return x(), R("div", {
    class: U([t.ns.b("dropdown"), t.ns.is("multiple", t.isMultiple), t.popperClass]),
    style: tt({ [t.isFitInputWidth ? "width" : "minWidth"]: t.minWidth })
  }, [
    t.$slots.header ? (x(), R("div", {
      key: 0,
      class: U(t.ns.be("dropdown", "header"))
    }, [
      oe(t.$slots, "header")
    ], 2)) : j("v-if", !0),
    oe(t.$slots, "default"),
    t.$slots.footer ? (x(), R("div", {
      key: 1,
      class: U(t.ns.be("dropdown", "footer"))
    }, [
      oe(t.$slots, "footer")
    ], 2)) : j("v-if", !0)
  ], 6);
}
var NA = /* @__PURE__ */ Me(DA, [["render", RA], ["__file", "select-dropdown.vue"]]);
const FA = (t, e) => {
  const { t: n } = mo(), i = ir(), r = Ue("select"), s = Ue("input"), o = tr({
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
  }), l = I(null), a = I(null), c = I(null), u = I(null), f = I(null), d = I(null), h = I(null), p = I(null), v = I(null), y = I(null), g = I(null), {
    isComposing: b,
    handleCompositionStart: k,
    handleCompositionUpdate: S,
    handleCompositionEnd: _
  } = nm({
    afterComposition: ($) => et($)
  }), { wrapperRef: E, isFocused: C, handleBlur: H } = tm(f, {
    beforeFocus() {
      return B.value;
    },
    afterFocus() {
      t.automaticDropdown && !N.value && (N.value = !0, o.menuVisibleOnFocus = !0);
    },
    beforeBlur($) {
      var ie, Te;
      return ((ie = c.value) == null ? void 0 : ie.isFocusInsideContent($)) || ((Te = u.value) == null ? void 0 : Te.isFocusInsideContent($));
    },
    afterBlur() {
      N.value = !1, o.menuVisibleOnFocus = !1;
    }
  }), N = I(!1), q = I(), { form: z, formItem: W } = ca(), { inputId: te } = Qg(t, {
    formItemContext: W
  }), { valueOnClear: ge, isEmptyValue: D } = rk(t), B = M(() => t.disabled || z?.disabled), V = M(() => ei(t.modelValue) ? t.modelValue.length > 0 : !D(t.modelValue)), ce = M(() => {
    var $;
    return ($ = z?.statusIcon) != null ? $ : !1;
  }), ae = M(() => t.clearable && !B.value && o.inputHovering && V.value), ke = M(() => t.remote && t.filterable && !t.remoteShowSuffix ? "" : t.suffixIcon), Oe = M(() => r.is("reverse", ke.value && N.value)), Ae = M(() => W?.validateState || ""), be = M(() => qg[Ae.value]), We = M(() => t.remote ? 300 : 0), xe = M(() => t.remote && !o.inputValue && o.options.size === 0), ze = M(() => t.loading ? t.loadingText || n("el.select.loading") : t.filterable && o.inputValue && o.options.size > 0 && Qe.value === 0 ? t.noMatchText || n("el.select.noMatch") : o.options.size === 0 ? t.noDataText || n("el.select.noData") : null), Qe = M(() => Ie.value.filter(($) => $.visible).length), Ie = M(() => {
    const $ = Array.from(o.options.values()), ie = [];
    return o.optionValues.forEach((Te) => {
      const St = $.findIndex((fn) => fn.value === Te);
      St > -1 && ie.push($[St]);
    }), ie.length >= $.length ? ie : $;
  }), bt = M(() => Array.from(o.cachedOptions.values())), It = M(() => {
    const $ = Ie.value.filter((ie) => !ie.created).some((ie) => ie.currentLabel === o.inputValue);
    return t.filterable && t.allowCreate && o.inputValue !== "" && !$;
  }), Pt = () => {
    t.filterable && gt(t.filterMethod) || t.filterable && t.remote && gt(t.remoteMethod) || Ie.value.forEach(($) => {
      var ie;
      (ie = $.updateOption) == null || ie.call($, o.inputValue);
    });
  }, Wt = vs(), At = M(() => ["small"].includes(Wt.value) ? "small" : "default"), wt = M({
    get() {
      return N.value && !xe.value;
    },
    set($) {
      N.value = $;
    }
  }), ot = M(() => {
    if (t.multiple && !ti(t.modelValue))
      return Ci(t.modelValue).length === 0 && !o.inputValue;
    const $ = ei(t.modelValue) ? t.modelValue[0] : t.modelValue;
    return t.filterable || ti($) ? !o.inputValue : !0;
  }), zt = M(() => {
    var $;
    const ie = ($ = t.placeholder) != null ? $ : n("el.select.placeholder");
    return t.multiple || !V.value ? ie : o.selectedLabel;
  }), Dt = M(() => wc ? null : "mouseenter");
  pe(() => t.modelValue, ($, ie) => {
    t.multiple && t.filterable && !t.reserveKeyword && (o.inputValue = "", O("")), L(), !$s($, ie) && t.validateEvent && W?.validate("change").catch((Te) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), pe(() => N.value, ($) => {
    $ ? O(o.inputValue) : (o.inputValue = "", o.previousQuery = null, o.isBeforeHide = !0), e("visible-change", $);
  }), pe(() => o.options.entries(), () => {
    nt && (L(), t.defaultFirstOption && (t.filterable || t.remote) && Qe.value && w());
  }, {
    flush: "post"
  }), pe([() => o.hoveringIndex, Ie], ([$]) => {
    Ke($) && $ > -1 ? q.value = Ie.value[$] || {} : q.value = {}, Ie.value.forEach((ie) => {
      ie.hover = q.value === ie;
    });
  }), xu(() => {
    o.isBeforeHide || Pt();
  });
  const O = ($) => {
    o.previousQuery === $ || b.value || (o.previousQuery = $, t.filterable && gt(t.filterMethod) ? t.filterMethod($) : t.filterable && t.remote && gt(t.remoteMethod) && t.remoteMethod($), t.defaultFirstOption && (t.filterable || t.remote) && Qe.value ? ct(w) : ct(de));
  }, w = () => {
    const $ = Ie.value.filter((fn) => fn.visible && !fn.disabled && !fn.states.groupDisabled), ie = $.find((fn) => fn.created), Te = $[0], St = Ie.value.map((fn) => fn.value);
    o.hoveringIndex = ut(St, ie || Te);
  }, L = () => {
    if (t.multiple)
      o.selectedLabel = "";
    else {
      const ie = ei(t.modelValue) ? t.modelValue[0] : t.modelValue, Te = K(ie);
      o.selectedLabel = Te.currentLabel, o.selected = [Te];
      return;
    }
    const $ = [];
    ti(t.modelValue) || Ci(t.modelValue).forEach((ie) => {
      $.push(K(ie));
    }), o.selected = $;
  }, K = ($) => {
    let ie;
    const Te = Lb($);
    for (let Rr = o.cachedOptions.size - 1; Rr >= 0; Rr--) {
      const Vi = bt.value[Rr];
      if (Te ? Yi(Vi.value, t.valueKey) === Yi($, t.valueKey) : Vi.value === $) {
        ie = {
          value: $,
          currentLabel: Vi.currentLabel,
          get isDisabled() {
            return Vi.isDisabled;
          }
        };
        break;
      }
    }
    if (ie)
      return ie;
    const St = Te ? $.label : $ ?? "";
    return {
      value: $,
      currentLabel: St
    };
  }, de = () => {
    o.hoveringIndex = Ie.value.findIndex(($) => o.selected.some((ie) => To(ie) === To($)));
  }, he = () => {
    o.selectionWidth = a.value.getBoundingClientRect().width;
  }, A = () => {
    o.collapseItemWidth = y.value.getBoundingClientRect().width;
  }, F = () => {
    var $, ie;
    (ie = ($ = c.value) == null ? void 0 : $.updatePopper) == null || ie.call($);
  }, me = () => {
    var $, ie;
    (ie = ($ = u.value) == null ? void 0 : $.updatePopper) == null || ie.call($);
  }, Ee = () => {
    o.inputValue.length > 0 && !N.value && (N.value = !0), O(o.inputValue);
  }, et = ($) => {
    if (o.inputValue = $.target.value, t.remote)
      mi();
    else
      return Ee();
  }, mi = yC(() => {
    Ee();
  }, We.value), sn = ($) => {
    $s(t.modelValue, $) || e(Zr, $);
  }, bs = ($) => bC($, (ie) => {
    const Te = o.cachedOptions.get(ie);
    return Te && !Te.disabled && !Te.states.groupDisabled;
  }), _o = ($) => {
    if (t.multiple && $.code !== Ze.delete && $.target.value.length <= 0) {
      const ie = Ci(t.modelValue).slice(), Te = bs(ie);
      if (Te < 0)
        return;
      const St = ie[Te];
      ie.splice(Te, 1), e($t, ie), sn(ie), e("remove-tag", St);
    }
  }, P = ($, ie) => {
    const Te = o.selected.indexOf(ie);
    if (Te > -1 && !B.value) {
      const St = Ci(t.modelValue).slice();
      St.splice(Te, 1), e($t, St), sn(St), e("remove-tag", ie.value);
    }
    $.stopPropagation(), Eo();
  }, J = ($) => {
    $.stopPropagation();
    const ie = t.multiple ? [] : ge.value;
    if (t.multiple)
      for (const Te of o.selected)
        Te.isDisabled && ie.push(Te.value);
    e($t, ie), sn(ie), o.hoveringIndex = -1, N.value = !1, e("clear"), Eo();
  }, Pe = ($) => {
    var ie;
    if (t.multiple) {
      const Te = Ci((ie = t.modelValue) != null ? ie : []).slice(), St = ut(Te, $);
      St > -1 ? Te.splice(St, 1) : (t.multipleLimit <= 0 || Te.length < t.multipleLimit) && Te.push($.value), e($t, Te), sn(Te), $.created && O(""), t.filterable && !t.reserveKeyword && (o.inputValue = "");
    } else
      e($t, $.value), sn($.value), N.value = !1;
    Eo(), !N.value && ct(() => {
      Ot($);
    });
  }, ut = ($ = [], ie) => ti(ie) ? -1 : Sn(ie.value) ? $.findIndex((Te) => $s(Yi(Te, t.valueKey), To(ie))) : $.indexOf(ie.value), Ot = ($) => {
    var ie, Te, St, fn, Rr;
    const Vi = ei($) ? $[0] : $;
    let Ao = null;
    if (Vi?.value) {
      const ws = Ie.value.filter((ib) => ib.value === Vi.value);
      ws.length > 0 && (Ao = ws[0].$el);
    }
    if (c.value && Ao) {
      const ws = (fn = (St = (Te = (ie = c.value) == null ? void 0 : ie.popperRef) == null ? void 0 : Te.contentRef) == null ? void 0 : St.querySelector) == null ? void 0 : fn.call(St, `.${r.be("dropdown", "wrap")}`);
      ws && uk(ws, Ao);
    }
    (Rr = g.value) == null || Rr.handleScroll();
  }, ne = ($) => {
    o.options.set($.value, $), o.cachedOptions.set($.value, $);
  }, lt = ($, ie) => {
    o.options.get($) === ie && o.options.delete($);
  }, Gt = M(() => {
    var $, ie;
    return (ie = ($ = c.value) == null ? void 0 : $.popperRef) == null ? void 0 : ie.contentRef;
  }), Bi = () => {
    o.isBeforeHide = !1, ct(() => {
      var $;
      ($ = g.value) == null || $.update(), Ot(o.selected);
    });
  }, Eo = () => {
    var $;
    ($ = f.value) == null || $.focus();
  }, Uy = () => {
    var $;
    if (N.value) {
      N.value = !1, ct(() => {
        var ie;
        return (ie = f.value) == null ? void 0 : ie.blur();
      });
      return;
    }
    ($ = f.value) == null || $.blur();
  }, jy = ($) => {
    J($);
  }, Ky = ($) => {
    if (N.value = !1, C.value) {
      const ie = new FocusEvent("focus", $);
      ct(() => H(ie));
    }
  }, Yy = () => {
    o.inputValue.length > 0 ? o.inputValue = "" : N.value = !1;
  }, Jf = () => {
    B.value || (wc && (o.inputHovering = !0), o.menuVisibleOnFocus ? o.menuVisibleOnFocus = !1 : N.value = !N.value);
  }, qy = () => {
    if (!N.value)
      Jf();
    else {
      const $ = Ie.value[o.hoveringIndex];
      $ && !$.isDisabled && Pe($);
    }
  }, To = ($) => Sn($.value) ? Yi($.value, t.valueKey) : $.value, Jy = M(() => Ie.value.filter(($) => $.visible).every(($) => $.isDisabled)), Xy = M(() => t.multiple ? t.collapseTags ? o.selected.slice(0, t.maxCollapseTags) : o.selected : []), Zy = M(() => t.multiple ? t.collapseTags ? o.selected.slice(t.maxCollapseTags) : [] : []), Xf = ($) => {
    if (!N.value) {
      N.value = !0;
      return;
    }
    if (!(o.options.size === 0 || Qe.value === 0 || b.value) && !Jy.value) {
      $ === "next" ? (o.hoveringIndex++, o.hoveringIndex === o.options.size && (o.hoveringIndex = 0)) : $ === "prev" && (o.hoveringIndex--, o.hoveringIndex < 0 && (o.hoveringIndex = o.options.size - 1));
      const ie = Ie.value[o.hoveringIndex];
      (ie.isDisabled || !ie.visible) && Xf($), ct(() => Ot(q.value));
    }
  }, Qy = () => {
    if (!a.value)
      return 0;
    const $ = window.getComputedStyle(a.value);
    return Number.parseFloat($.gap || "6px");
  }, eb = M(() => {
    const $ = Qy();
    return { maxWidth: `${y.value && t.maxCollapseTags === 1 ? o.selectionWidth - o.collapseItemWidth - $ : o.selectionWidth}px` };
  }), tb = M(() => ({ maxWidth: `${o.selectionWidth}px` })), nb = ($) => {
    e("popup-scroll", $);
  };
  return Xn(a, he), Xn(p, F), Xn(E, F), Xn(v, me), Xn(y, A), it(() => {
    L();
  }), {
    inputId: te,
    contentId: i,
    nsSelect: r,
    nsInput: s,
    states: o,
    isFocused: C,
    expanded: N,
    optionsArray: Ie,
    hoverOption: q,
    selectSize: Wt,
    filteredOptionsCount: Qe,
    updateTooltip: F,
    updateTagTooltip: me,
    debouncedOnInputChange: mi,
    onInput: et,
    deletePrevTag: _o,
    deleteTag: P,
    deleteSelected: J,
    handleOptionSelect: Pe,
    scrollToOption: Ot,
    hasModelValue: V,
    shouldShowPlaceholder: ot,
    currentPlaceholder: zt,
    mouseEnterEventName: Dt,
    needStatusIcon: ce,
    showClose: ae,
    iconComponent: ke,
    iconReverse: Oe,
    validateState: Ae,
    validateIcon: be,
    showNewOption: It,
    updateOptions: Pt,
    collapseTagSize: At,
    setSelected: L,
    selectDisabled: B,
    emptyText: ze,
    handleCompositionStart: k,
    handleCompositionUpdate: S,
    handleCompositionEnd: _,
    onOptionCreate: ne,
    onOptionDestroy: lt,
    handleMenuEnter: Bi,
    focus: Eo,
    blur: Uy,
    handleClearClick: jy,
    handleClickOutside: Ky,
    handleEsc: Yy,
    toggleMenu: Jf,
    selectOption: qy,
    getValueKey: To,
    navigateOptions: Xf,
    dropdownMenuVisible: wt,
    showTagList: Xy,
    collapseTagList: Zy,
    popupScroll: nb,
    tagStyle: eb,
    collapseTagStyle: tb,
    popperRef: Gt,
    inputRef: f,
    tooltipRef: c,
    tagTooltipRef: u,
    prefixRef: d,
    suffixRef: h,
    selectRef: l,
    wrapperRef: E,
    selectionRef: a,
    scrollbarRef: g,
    menuRef: p,
    tagMenuRef: v,
    collapseItemRef: y
  };
};
var $A = Q({
  name: "ElOptions",
  setup(t, { slots: e }) {
    const n = ye(ga);
    let i = [];
    return () => {
      var r, s;
      const o = (r = e.default) == null ? void 0 : r.call(e), l = [];
      function a(c) {
        ei(c) && c.forEach((u) => {
          var f, d, h, p;
          const v = (f = u?.type || {}) == null ? void 0 : f.name;
          v === "ElOptionGroup" ? a(!mn(u.children) && !ei(u.children) && gt((d = u.children) == null ? void 0 : d.default) ? (h = u.children) == null ? void 0 : h.default() : u.children) : v === "ElOption" ? l.push((p = u.props) == null ? void 0 : p.value) : ei(u.children) && a(u.children);
        });
      }
      return o.length && a((s = o[0]) == null ? void 0 : s.children), $s(l, i) || (i = l, n && (n.states.optionValues = l)), o;
    };
  }
});
const BA = Re({
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
  size: vo,
  effect: {
    type: fe(String),
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
    type: fe(Object),
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
  teleported: to.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: ui,
    default: ju
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: ui,
    default: Uu
  },
  tagType: { ...Tc.type, default: "info" },
  tagEffect: { ...Tc.effect, default: "light" },
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
    type: fe(String),
    values: da,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: fe(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...Wg,
  ...ms(["ariaLabel"])
}), yh = "ElSelect", VA = Q({
  name: yh,
  componentName: yh,
  components: {
    ElSelectMenu: NA,
    ElOption: pf,
    ElOptions: $A,
    ElTag: fT,
    ElScrollbar: im,
    ElTooltip: xm,
    ElIcon: _t
  },
  directives: { ClickOutside: dT },
  props: BA,
  emits: [
    $t,
    Zr,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(t, { emit: e }) {
    const n = M(() => {
      const { modelValue: a, multiple: c } = t, u = c ? [] : void 0;
      return ei(a) ? c ? a : u : c ? u : a;
    }), i = tr({
      ...Pu(t),
      modelValue: n
    }), r = FA(i, e), { calculatorRef: s, inputStyle: o } = MA();
    Lt(ga, tr({
      props: i,
      states: r.states,
      optionsArray: r.optionsArray,
      handleOptionSelect: r.handleOptionSelect,
      onOptionCreate: r.onOptionCreate,
      onOptionDestroy: r.onOptionDestroy,
      selectRef: r.selectRef,
      setSelected: r.setSelected
    }));
    const l = M(() => t.multiple ? r.states.selected.map((a) => a.currentLabel) : r.states.selectedLabel);
    return {
      ...r,
      modelValue: n,
      selectedLabel: l,
      calculatorRef: s,
      inputStyle: o
    };
  }
});
function HA(t, e, n, i, r, s) {
  const o = rt("el-tag"), l = rt("el-tooltip"), a = rt("el-icon"), c = rt("el-option"), u = rt("el-options"), f = rt("el-scrollbar"), d = rt("el-select-menu"), h = gb("click-outside");
  return nn((x(), R("div", {
    ref: "selectRef",
    class: U([t.nsSelect.b(), t.nsSelect.m(t.selectSize)]),
    [mb(t.mouseEnterEventName)]: (p) => t.states.inputHovering = !0,
    onMouseleave: (p) => t.states.inputHovering = !1
  }, [
    Z(l, {
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
      onHide: (p) => t.states.isBeforeHide = !1
    }, {
      default: X(() => {
        var p;
        return [
          T("div", {
            ref: "wrapperRef",
            class: U([
              t.nsSelect.e("wrapper"),
              t.nsSelect.is("focused", t.isFocused),
              t.nsSelect.is("hovering", t.states.inputHovering),
              t.nsSelect.is("filterable", t.filterable),
              t.nsSelect.is("disabled", t.selectDisabled)
            ]),
            onClick: at(t.toggleMenu, ["prevent"])
          }, [
            t.$slots.prefix ? (x(), R("div", {
              key: 0,
              ref: "prefixRef",
              class: U(t.nsSelect.e("prefix"))
            }, [
              oe(t.$slots, "prefix")
            ], 2)) : j("v-if", !0),
            T("div", {
              ref: "selectionRef",
              class: U([
                t.nsSelect.e("selection"),
                t.nsSelect.is("near", t.multiple && !t.$slots.prefix && !!t.states.selected.length)
              ])
            }, [
              t.multiple ? oe(t.$slots, "tag", { key: 0 }, () => [
                (x(!0), R(_e, null, Ct(t.showTagList, (v) => (x(), R("div", {
                  key: t.getValueKey(v),
                  class: U(t.nsSelect.e("selected-item"))
                }, [
                  Z(o, {
                    closable: !t.selectDisabled && !v.isDisabled,
                    size: t.collapseTagSize,
                    type: t.tagType,
                    effect: t.tagEffect,
                    "disable-transitions": "",
                    style: tt(t.tagStyle),
                    onClose: (y) => t.deleteTag(y, v)
                  }, {
                    default: X(() => [
                      T("span", {
                        class: U(t.nsSelect.e("tags-text"))
                      }, [
                        oe(t.$slots, "label", {
                          label: v.currentLabel,
                          value: v.value
                        }, () => [
                          Ve(G(v.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                t.collapseTags && t.states.selected.length > t.maxCollapseTags ? (x(), se(l, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: t.dropdownMenuVisible || !t.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: t.effect,
                  placement: "bottom",
                  teleported: t.teleported
                }, {
                  default: X(() => [
                    T("div", {
                      ref: "collapseItemRef",
                      class: U(t.nsSelect.e("selected-item"))
                    }, [
                      Z(o, {
                        closable: !1,
                        size: t.collapseTagSize,
                        type: t.tagType,
                        effect: t.tagEffect,
                        "disable-transitions": "",
                        style: tt(t.collapseTagStyle)
                      }, {
                        default: X(() => [
                          T("span", {
                            class: U(t.nsSelect.e("tags-text"))
                          }, " + " + G(t.states.selected.length - t.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: X(() => [
                    T("div", {
                      ref: "tagMenuRef",
                      class: U(t.nsSelect.e("selection"))
                    }, [
                      (x(!0), R(_e, null, Ct(t.collapseTagList, (v) => (x(), R("div", {
                        key: t.getValueKey(v),
                        class: U(t.nsSelect.e("selected-item"))
                      }, [
                        Z(o, {
                          class: "in-tooltip",
                          closable: !t.selectDisabled && !v.isDisabled,
                          size: t.collapseTagSize,
                          type: t.tagType,
                          effect: t.tagEffect,
                          "disable-transitions": "",
                          onClose: (y) => t.deleteTag(y, v)
                        }, {
                          default: X(() => [
                            T("span", {
                              class: U(t.nsSelect.e("tags-text"))
                            }, [
                              oe(t.$slots, "label", {
                                label: v.currentLabel,
                                value: v.value
                              }, () => [
                                Ve(G(v.currentLabel), 1)
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
              T("div", {
                class: U([
                  t.nsSelect.e("selected-item"),
                  t.nsSelect.e("input-wrapper"),
                  t.nsSelect.is("hidden", !t.filterable)
                ])
              }, [
                nn(T("input", {
                  id: t.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (v) => t.states.inputValue = v,
                  type: "text",
                  name: t.name,
                  class: U([t.nsSelect.e("input"), t.nsSelect.is(t.selectSize)]),
                  disabled: t.selectDisabled,
                  autocomplete: t.autocomplete,
                  style: tt(t.inputStyle),
                  tabindex: t.tabindex,
                  role: "combobox",
                  readonly: !t.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((p = t.hoverOption) == null ? void 0 : p.id) || "",
                  "aria-controls": t.contentId,
                  "aria-expanded": t.dropdownMenuVisible,
                  "aria-label": t.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    Si(at((v) => t.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Si(at((v) => t.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    Si(at(t.handleEsc, ["stop", "prevent"]), ["esc"]),
                    Si(at(t.selectOption, ["stop", "prevent"]), ["enter"]),
                    Si(at(t.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: t.handleCompositionStart,
                  onCompositionupdate: t.handleCompositionUpdate,
                  onCompositionend: t.handleCompositionEnd,
                  onInput: t.onInput,
                  onClick: at(t.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [vb, t.states.inputValue]
                ]),
                t.filterable ? (x(), R("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: U(t.nsSelect.e("input-calculator")),
                  textContent: G(t.states.inputValue)
                }, null, 10, ["textContent"])) : j("v-if", !0)
              ], 2),
              t.shouldShowPlaceholder ? (x(), R("div", {
                key: 1,
                class: U([
                  t.nsSelect.e("selected-item"),
                  t.nsSelect.e("placeholder"),
                  t.nsSelect.is("transparent", !t.hasModelValue || t.expanded && !t.states.inputValue)
                ])
              }, [
                t.hasModelValue ? oe(t.$slots, "label", {
                  key: 0,
                  label: t.currentPlaceholder,
                  value: t.modelValue
                }, () => [
                  T("span", null, G(t.currentPlaceholder), 1)
                ]) : (x(), R("span", { key: 1 }, G(t.currentPlaceholder), 1))
              ], 2)) : j("v-if", !0)
            ], 2),
            T("div", {
              ref: "suffixRef",
              class: U(t.nsSelect.e("suffix"))
            }, [
              t.iconComponent && !t.showClose ? (x(), se(a, {
                key: 0,
                class: U([t.nsSelect.e("caret"), t.nsSelect.e("icon"), t.iconReverse])
              }, {
                default: X(() => [
                  (x(), se(en(t.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              t.showClose && t.clearIcon ? (x(), se(a, {
                key: 1,
                class: U([
                  t.nsSelect.e("caret"),
                  t.nsSelect.e("icon"),
                  t.nsSelect.e("clear")
                ]),
                onClick: t.handleClearClick
              }, {
                default: X(() => [
                  (x(), se(en(t.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : j("v-if", !0),
              t.validateState && t.validateIcon && t.needStatusIcon ? (x(), se(a, {
                key: 2,
                class: U([
                  t.nsInput.e("icon"),
                  t.nsInput.e("validateIcon"),
                  t.nsInput.is("loading", t.validateState === "validating")
                ])
              }, {
                default: X(() => [
                  (x(), se(en(t.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: X(() => [
        Z(d, { ref: "menuRef" }, {
          default: X(() => [
            t.$slots.header ? (x(), R("div", {
              key: 0,
              class: U(t.nsSelect.be("dropdown", "header")),
              onClick: at(() => {
              }, ["stop"])
            }, [
              oe(t.$slots, "header")
            ], 10, ["onClick"])) : j("v-if", !0),
            nn(Z(f, {
              id: t.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": t.nsSelect.be("dropdown", "wrap"),
              "view-class": t.nsSelect.be("dropdown", "list"),
              class: U([t.nsSelect.is("empty", t.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": t.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: t.popupScroll
            }, {
              default: X(() => [
                t.showNewOption ? (x(), se(c, {
                  key: 0,
                  value: t.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : j("v-if", !0),
                Z(u, null, {
                  default: X(() => [
                    oe(t.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [ai, t.states.options.size > 0 && !t.loading]
            ]),
            t.$slots.loading && t.loading ? (x(), R("div", {
              key: 1,
              class: U(t.nsSelect.be("dropdown", "loading"))
            }, [
              oe(t.$slots, "loading")
            ], 2)) : t.loading || t.filteredOptionsCount === 0 ? (x(), R("div", {
              key: 2,
              class: U(t.nsSelect.be("dropdown", "empty"))
            }, [
              oe(t.$slots, "empty", {}, () => [
                T("span", null, G(t.emptyText), 1)
              ])
            ], 2)) : j("v-if", !0),
            t.$slots.footer ? (x(), R("div", {
              key: 3,
              class: U(t.nsSelect.be("dropdown", "footer")),
              onClick: at(() => {
              }, ["stop"])
            }, [
              oe(t.$slots, "footer")
            ], 10, ["onClick"])) : j("v-if", !0)
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
var WA = /* @__PURE__ */ Me(VA, [["render", HA], ["__file", "select.vue"]]);
const zA = Q({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(t) {
    const e = Ue("select"), n = I(null), i = Mt(), r = I([]);
    Lt(jm, tr({
      ...Pu(t)
    }));
    const s = M(() => r.value.some((c) => c.visible === !0)), o = (c) => {
      var u, f;
      return ((u = c.type) == null ? void 0 : u.name) === "ElOption" && !!((f = c.component) != null && f.proxy);
    }, l = (c) => {
      const u = Ci(c), f = [];
      return u.forEach((d) => {
        var h, p;
        o(d) ? f.push(d.component.proxy) : (h = d.children) != null && h.length ? f.push(...l(d.children)) : (p = d.component) != null && p.subTree && f.push(...l(d.component.subTree));
      }), f;
    }, a = () => {
      r.value = l(i.subTree);
    };
    return it(() => {
      a();
    }), zC(n, a, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: s,
      ns: e
    };
  }
});
function GA(t, e, n, i, r, s) {
  return nn((x(), R("ul", {
    ref: "groupRef",
    class: U(t.ns.be("group", "wrap"))
  }, [
    T("li", {
      class: U(t.ns.be("group", "title"))
    }, G(t.label), 3),
    T("li", null, [
      T("ul", {
        class: U(t.ns.b("group"))
      }, [
        oe(t.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [ai, t.visible]
  ]);
}
var Km = /* @__PURE__ */ Me(zA, [["render", GA], ["__file", "option-group.vue"]]);
const Ym = bn(WA, {
  Option: pf,
  OptionGroup: Km
}), qm = yo(pf);
yo(Km);
const Jm = ["success", "info", "warning", "error"], Ut = Xg({
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
  appendTo: nt ? document.body : void 0
}), UA = Re({
  customClass: {
    type: String,
    default: Ut.customClass
  },
  center: {
    type: Boolean,
    default: Ut.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Ut.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Ut.duration
  },
  icon: {
    type: ui,
    default: Ut.icon
  },
  id: {
    type: String,
    default: Ut.id
  },
  message: {
    type: fe([
      String,
      Object,
      Function
    ]),
    default: Ut.message
  },
  onClose: {
    type: fe(Function),
    default: Ut.onClose
  },
  showClose: {
    type: Boolean,
    default: Ut.showClose
  },
  type: {
    type: String,
    values: Jm,
    default: Ut.type
  },
  plain: {
    type: Boolean,
    default: Ut.plain
  },
  offset: {
    type: Number,
    default: Ut.offset
  },
  zIndex: {
    type: Number,
    default: Ut.zIndex
  },
  grouping: {
    type: Boolean,
    default: Ut.grouping
  },
  repeatNum: {
    type: Number,
    default: Ut.repeatNum
  }
}), jA = {
  destroy: () => !0
}, Fn = yb([]), KA = (t) => {
  const e = Fn.findIndex((r) => r.id === t), n = Fn[e];
  let i;
  return e > 0 && (i = Fn[e - 1]), { current: n, prev: i };
}, YA = (t) => {
  const { prev: e } = KA(t);
  return e ? e.vm.exposed.bottom.value : 0;
}, qA = (t, e) => Fn.findIndex((i) => i.id === t) > 0 ? 16 : e, JA = Q({
  name: "ElMessage"
}), XA = /* @__PURE__ */ Q({
  ...JA,
  props: UA,
  emits: jA,
  setup(t, { expose: e }) {
    const n = t, { Close: i } = Bk, { ns: r, zIndex: s } = zg("message"), { currentZIndex: o, nextZIndex: l } = s, a = I(), c = I(!1), u = I(0);
    let f;
    const d = M(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), h = M(() => {
      const C = n.type;
      return { [r.bm("icon", C)]: C && Ll[C] };
    }), p = M(() => n.icon || Ll[n.type] || ""), v = M(() => YA(n.id)), y = M(() => qA(n.id, n.offset) + v.value), g = M(() => u.value + y.value), b = M(() => ({
      top: `${y.value}px`,
      zIndex: o.value
    }));
    function k() {
      n.duration !== 0 && ({ stop: f } = Ol(() => {
        _();
      }, n.duration));
    }
    function S() {
      f?.();
    }
    function _() {
      c.value = !1;
    }
    function E({ code: C }) {
      C === Ze.esc && _();
    }
    return it(() => {
      k(), l(), c.value = !0;
    }), pe(() => n.repeatNum, () => {
      S(), k();
    }), kn(document, "keydown", E), Xn(a, () => {
      u.value = a.value.getBoundingClientRect().height;
    }), e({
      visible: c,
      bottom: g,
      close: _
    }), (C, H) => (x(), se(Ri, {
      name: m(r).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (N) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: X(() => [
        nn(T("div", {
          id: C.id,
          ref_key: "messageRef",
          ref: a,
          class: U([
            m(r).b(),
            { [m(r).m(C.type)]: C.type },
            m(r).is("center", C.center),
            m(r).is("closable", C.showClose),
            m(r).is("plain", C.plain),
            C.customClass
          ]),
          style: tt(m(b)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: k
        }, [
          C.repeatNum > 1 ? (x(), se(m(RE), {
            key: 0,
            value: C.repeatNum,
            type: m(d),
            class: U(m(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : j("v-if", !0),
          m(p) ? (x(), se(m(_t), {
            key: 1,
            class: U([m(r).e("icon"), m(h)])
          }, {
            default: X(() => [
              (x(), se(en(m(p))))
            ]),
            _: 1
          }, 8, ["class"])) : j("v-if", !0),
          oe(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (x(), R(_e, { key: 1 }, [
              j(" Caution here, message could've been compromised, never use user's input as message "),
              T("p", {
                class: U(m(r).e("content")),
                innerHTML: C.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (x(), R("p", {
              key: 0,
              class: U(m(r).e("content"))
            }, G(C.message), 3))
          ]),
          C.showClose ? (x(), se(m(_t), {
            key: 2,
            class: U(m(r).e("closeBtn")),
            onClick: at(_, ["stop"])
          }, {
            default: X(() => [
              Z(m(i))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : j("v-if", !0)
        ], 46, ["id"]), [
          [ai, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ZA = /* @__PURE__ */ Me(XA, [["__file", "message.vue"]]);
let QA = 1;
const Xm = (t) => {
  const e = !t || mn(t) || qs(t) || gt(t) ? { message: t } : t, n = {
    ...Ut,
    ...e
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (mn(n.appendTo)) {
    let i = document.querySelector(n.appendTo);
    Bn(i) || (i = document.body), n.appendTo = i;
  }
  return Zs(Nn.grouping) && !n.grouping && (n.grouping = Nn.grouping), Ke(Nn.duration) && n.duration === 3e3 && (n.duration = Nn.duration), Ke(Nn.offset) && n.offset === 16 && (n.offset = Nn.offset), Zs(Nn.showClose) && !n.showClose && (n.showClose = Nn.showClose), n;
}, eO = (t) => {
  const e = Fn.indexOf(t);
  if (e === -1)
    return;
  Fn.splice(e, 1);
  const { handler: n } = t;
  n.close();
}, tO = ({ appendTo: t, ...e }, n) => {
  const i = `message_${QA++}`, r = e.onClose, s = document.createElement("div"), o = {
    ...e,
    id: i,
    onClose: () => {
      r?.(), eO(u);
    },
    onDestroy: () => {
      _l(null, s);
    }
  }, l = Z(ZA, o, gt(o.message) || qs(o.message) ? {
    default: gt(o.message) ? o.message : () => o.message
  } : null);
  l.appContext = n || is._context, _l(l, s), t.appendChild(s.firstElementChild);
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
}, is = (t = {}, e) => {
  if (!nt)
    return { close: () => {
    } };
  const n = Xm(t);
  if (n.grouping && Fn.length) {
    const r = Fn.find(({ vnode: s }) => {
      var o;
      return ((o = s.props) == null ? void 0 : o.message) === n.message;
    });
    if (r)
      return r.props.repeatNum += 1, r.props.type = n.type, r.handler;
  }
  if (Ke(Nn.max) && Fn.length >= Nn.max)
    return { close: () => {
    } };
  const i = tO(n, e);
  return Fn.push(i), i.handler;
};
Jm.forEach((t) => {
  is[t] = (e = {}, n) => {
    const i = Xm(e);
    return is({ ...i, type: t }, n);
  };
});
function nO(t) {
  for (const e of Fn)
    (!t || t === e.props.type) && e.handler.close();
}
is.closeAll = nO;
is._context = null;
const iO = jg(is, "$message"), Zm = [
  "success",
  "info",
  "warning",
  "error"
], rO = Re({
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
    type: ui
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: fe([
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
    type: fe(Function),
    default: () => {
    }
  },
  onClose: {
    type: fe(Function),
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
    values: [...Zm, ""],
    default: ""
  },
  zIndex: Number
}), sO = {
  destroy: () => !0
}, oO = Q({
  name: "ElNotification"
}), lO = /* @__PURE__ */ Q({
  ...oO,
  props: rO,
  emits: sO,
  setup(t, { expose: e }) {
    const n = t, { ns: i, zIndex: r } = zg("notification"), { nextZIndex: s, currentZIndex: o } = r, { Close: l } = Yg, a = I(!1);
    let c;
    const u = M(() => {
      const k = n.type;
      return k && Ll[n.type] ? i.m(k) : "";
    }), f = M(() => n.type && Ll[n.type] || n.icon), d = M(() => n.position.endsWith("right") ? "right" : "left"), h = M(() => n.position.startsWith("top") ? "top" : "bottom"), p = M(() => {
      var k;
      return {
        [h.value]: `${n.offset}px`,
        zIndex: (k = n.zIndex) != null ? k : o.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: c } = Ol(() => {
        a.value && g();
      }, n.duration));
    }
    function y() {
      c?.();
    }
    function g() {
      a.value = !1;
    }
    function b({ code: k }) {
      k === Ze.delete || k === Ze.backspace ? y() : k === Ze.esc ? a.value && g() : v();
    }
    return it(() => {
      v(), s(), a.value = !0;
    }), kn(document, "keydown", b), e({
      visible: a,
      close: g
    }), (k, S) => (x(), se(Ri, {
      name: m(i).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: (_) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: X(() => [
        nn(T("div", {
          id: k.id,
          class: U([m(i).b(), k.customClass, m(d)]),
          style: tt(m(p)),
          role: "alert",
          onMouseenter: y,
          onMouseleave: v,
          onClick: k.onClick
        }, [
          m(f) ? (x(), se(m(_t), {
            key: 0,
            class: U([m(i).e("icon"), m(u)])
          }, {
            default: X(() => [
              (x(), se(en(m(f))))
            ]),
            _: 1
          }, 8, ["class"])) : j("v-if", !0),
          T("div", {
            class: U(m(i).e("group"))
          }, [
            T("h2", {
              class: U(m(i).e("title")),
              textContent: G(k.title)
            }, null, 10, ["textContent"]),
            nn(T("div", {
              class: U(m(i).e("content")),
              style: tt(k.title ? void 0 : { margin: 0 })
            }, [
              oe(k.$slots, "default", {}, () => [
                k.dangerouslyUseHTMLString ? (x(), R(_e, { key: 1 }, [
                  j(" Caution here, message could've been compromised, never use user's input as message "),
                  T("p", { innerHTML: k.message }, null, 8, ["innerHTML"])
                ], 2112)) : (x(), R("p", { key: 0 }, G(k.message), 1))
              ])
            ], 6), [
              [ai, k.message]
            ]),
            k.showClose ? (x(), se(m(_t), {
              key: 0,
              class: U(m(i).e("closeBtn")),
              onClick: at(g, ["stop"])
            }, {
              default: X(() => [
                Z(m(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : j("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [ai, a.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var aO = /* @__PURE__ */ Me(lO, [["__file", "notification.vue"]]);
const Dl = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Ac = 16;
let cO = 1;
const rs = function(t = {}, e) {
  if (!nt)
    return { close: () => {
    } };
  (mn(t) || qs(t)) && (t = { message: t });
  const n = t.position || "top-right";
  let i = t.offset || 0;
  Dl[n].forEach(({ vm: u }) => {
    var f;
    i += (((f = u.el) == null ? void 0 : f.offsetHeight) || 0) + Ac;
  }), i += Ac;
  const r = `notification_${cO++}`, s = t.onClose, o = {
    ...t,
    offset: i,
    id: r,
    onClose: () => {
      uO(r, n, s);
    }
  };
  let l = document.body;
  Bn(t.appendTo) ? l = t.appendTo : mn(t.appendTo) && (l = document.querySelector(t.appendTo)), Bn(l) || (l = document.body);
  const a = document.createElement("div"), c = Z(aO, o, gt(o.message) ? o.message : qs(o.message) ? () => o.message : null);
  return c.appContext = ti(e) ? rs._context : e, c.props.onDestroy = () => {
    _l(null, a);
  }, _l(c, a), Dl[n].push({ vm: c }), l.appendChild(a.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
Zm.forEach((t) => {
  rs[t] = (e = {}, n) => ((mn(e) || qs(e)) && (e = {
    message: e
  }), rs({ ...e, type: t }, n));
});
function uO(t, e, n) {
  const i = Dl[e], r = i.findIndex(({ vm: c }) => {
    var u;
    return ((u = c.component) == null ? void 0 : u.props.id) === t;
  });
  if (r === -1)
    return;
  const { vm: s } = i[r];
  if (!s)
    return;
  n?.(s);
  const o = s.el.offsetHeight, l = e.split("-")[0];
  i.splice(r, 1);
  const a = i.length;
  if (!(a < 1))
    for (let c = r; c < a; c++) {
      const { el: u, component: f } = i[c].vm, d = Number.parseInt(u.style[l], 10) - o - Ac;
      f.props.offset = d;
    }
}
function fO() {
  for (const t of Object.values(Dl))
    t.forEach(({ vm: e }) => {
      e.component.exposed.visible.value = !1;
    });
}
rs.closeAll = fO;
rs._context = null;
const dO = jg(rs, "$notify");
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function hO(t, e) {
  typeof console < "u" && (console.warn("[intlify] " + t), e && console.warn(e.stack));
}
const bh = typeof window < "u", Pr = (t, e = !1) => e ? Symbol.for(t) : Symbol(t), pO = (t, e, n) => gO({ l: t, k: e, s: n }), gO = (t) => JSON.stringify(t).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), xt = (t) => typeof t == "number" && isFinite(t), mO = (t) => gf(t) === "[object Date]", Rl = (t) => gf(t) === "[object RegExp]", ma = (t) => Fe(t) && Object.keys(t).length === 0, Vt = Object.assign, vO = Object.create, Ge = (t = null) => vO(t);
let wh;
const al = () => wh || (wh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Ge());
function Sh(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Ch(t) {
  return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function yO(t) {
  return t = t.replace(/(\w+)\s*=\s*"([^"]*)"/g, (i, r, s) => `${r}="${Ch(s)}"`), t = t.replace(/(\w+)\s*=\s*'([^']*)'/g, (i, r, s) => `${r}='${Ch(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t) && (t = t.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((i) => {
    t = t.replace(i, "$1javascript&#58;");
  }), t;
}
const bO = Object.prototype.hasOwnProperty;
function $n(t, e) {
  return bO.call(t, e);
}
const pt = Array.isArray, st = (t) => typeof t == "function", ue = (t) => typeof t == "string", ht = (t) => typeof t == "boolean", $e = (t) => t !== null && typeof t == "object", wO = (t) => $e(t) && st(t.then) && st(t.catch), Qm = Object.prototype.toString, gf = (t) => Qm.call(t), Fe = (t) => gf(t) === "[object Object]", SO = (t) => t == null ? "" : pt(t) || Fe(t) && t.toString === Qm ? JSON.stringify(t, null, 2) : String(t);
function mf(t, e = "") {
  return t.reduce((n, i, r) => r === 0 ? n + i : n + e + i, "");
}
const No = (t) => !$e(t) || pt(t);
function cl(t, e) {
  if (No(t) || No(e))
    throw new Error("Invalid value");
  const n = [{ src: t, des: e }];
  for (; n.length; ) {
    const { src: i, des: r } = n.pop();
    Object.keys(i).forEach((s) => {
      s !== "__proto__" && ($e(i[s]) && !$e(r[s]) && (r[s] = Array.isArray(i[s]) ? [] : Ge()), No(r[s]) || No(i[s]) ? r[s] = i[s] : n.push({ src: i[s], des: r[s] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function CO(t, e, n) {
  return { line: t, column: e, offset: n };
}
function Oc(t, e, n) {
  return { start: t, end: e };
}
const Be = {
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
}, kO = 17;
function va(t, e, n = {}) {
  const { domain: i, messages: r, args: s } = n, o = t, l = new SyntaxError(String(o));
  return l.code = t, e && (l.location = e), l.domain = i, l;
}
function _O(t) {
  throw t;
}
const Un = " ", EO = "\r", jt = `
`, TO = "\u2028", AO = "\u2029";
function OO(t) {
  const e = t;
  let n = 0, i = 1, r = 1, s = 0;
  const o = (C) => e[C] === EO && e[C + 1] === jt, l = (C) => e[C] === jt, a = (C) => e[C] === AO, c = (C) => e[C] === TO, u = (C) => o(C) || l(C) || a(C) || c(C), f = () => n, d = () => i, h = () => r, p = () => s, v = (C) => o(C) || a(C) || c(C) ? jt : e[C], y = () => v(n), g = () => v(n + s);
  function b() {
    return s = 0, u(n) && (i++, r = 0), o(n) && n++, n++, r++, e[n];
  }
  function k() {
    return o(n + s) && s++, s++, e[n + s];
  }
  function S() {
    n = 0, i = 1, r = 1, s = 0;
  }
  function _(C = 0) {
    s = C;
  }
  function E() {
    const C = n + s;
    for (; C !== n; )
      b();
    s = 0;
  }
  return {
    index: f,
    line: d,
    column: h,
    peekOffset: p,
    charAt: v,
    currentChar: y,
    currentPeek: g,
    next: b,
    peek: k,
    reset: S,
    resetPeek: _,
    skipToPeek: E
  };
}
const yi = void 0, xO = ".", kh = "'", MO = "tokenizer";
function LO(t, e = {}) {
  const n = e.location !== !1, i = OO(t), r = () => i.index(), s = () => CO(i.line(), i.column(), i.index()), o = s(), l = r(), a = {
    currentType: 13,
    offset: l,
    startLoc: o,
    endLoc: o,
    lastType: 13,
    lastOffset: l,
    lastStartLoc: o,
    lastEndLoc: o,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, c = () => a, { onError: u } = e;
  function f(O, w, L, ...K) {
    const de = c();
    if (w.column += L, w.offset += L, u) {
      const he = n ? Oc(de.startLoc, w) : null, A = va(O, he, {
        domain: MO,
        args: K
      });
      u(A);
    }
  }
  function d(O, w, L) {
    O.endLoc = s(), O.currentType = w;
    const K = { type: w };
    return n && (K.loc = Oc(O.startLoc, O.endLoc)), L != null && (K.value = L), K;
  }
  const h = (O) => d(
    O,
    13
    /* TokenTypes.EOF */
  );
  function p(O, w) {
    return O.currentChar() === w ? (O.next(), w) : (f(Be.EXPECTED_TOKEN, s(), 0, w), "");
  }
  function v(O) {
    let w = "";
    for (; O.currentPeek() === Un || O.currentPeek() === jt; )
      w += O.currentPeek(), O.peek();
    return w;
  }
  function y(O) {
    const w = v(O);
    return O.skipToPeek(), w;
  }
  function g(O) {
    if (O === yi)
      return !1;
    const w = O.charCodeAt(0);
    return w >= 97 && w <= 122 || // a-z
    w >= 65 && w <= 90 || // A-Z
    w === 95;
  }
  function b(O) {
    if (O === yi)
      return !1;
    const w = O.charCodeAt(0);
    return w >= 48 && w <= 57;
  }
  function k(O, w) {
    const { currentType: L } = w;
    if (L !== 2)
      return !1;
    v(O);
    const K = g(O.currentPeek());
    return O.resetPeek(), K;
  }
  function S(O, w) {
    const { currentType: L } = w;
    if (L !== 2)
      return !1;
    v(O);
    const K = O.currentPeek() === "-" ? O.peek() : O.currentPeek(), de = b(K);
    return O.resetPeek(), de;
  }
  function _(O, w) {
    const { currentType: L } = w;
    if (L !== 2)
      return !1;
    v(O);
    const K = O.currentPeek() === kh;
    return O.resetPeek(), K;
  }
  function E(O, w) {
    const { currentType: L } = w;
    if (L !== 7)
      return !1;
    v(O);
    const K = O.currentPeek() === ".";
    return O.resetPeek(), K;
  }
  function C(O, w) {
    const { currentType: L } = w;
    if (L !== 8)
      return !1;
    v(O);
    const K = g(O.currentPeek());
    return O.resetPeek(), K;
  }
  function H(O, w) {
    const { currentType: L } = w;
    if (!(L === 7 || L === 11))
      return !1;
    v(O);
    const K = O.currentPeek() === ":";
    return O.resetPeek(), K;
  }
  function N(O, w) {
    const { currentType: L } = w;
    if (L !== 9)
      return !1;
    const K = () => {
      const he = O.currentPeek();
      return he === "{" ? g(O.peek()) : he === "@" || he === "|" || he === ":" || he === "." || he === Un || !he ? !1 : he === jt ? (O.peek(), K()) : z(O, !1);
    }, de = K();
    return O.resetPeek(), de;
  }
  function q(O) {
    v(O);
    const w = O.currentPeek() === "|";
    return O.resetPeek(), w;
  }
  function z(O, w = !0) {
    const L = (de = !1, he = "") => {
      const A = O.currentPeek();
      return A === "{" || A === "@" || !A ? de : A === "|" ? !(he === Un || he === jt) : A === Un ? (O.peek(), L(!0, Un)) : A === jt ? (O.peek(), L(!0, jt)) : !0;
    }, K = L();
    return w && O.resetPeek(), K;
  }
  function W(O, w) {
    const L = O.currentChar();
    return L === yi ? yi : w(L) ? (O.next(), L) : null;
  }
  function te(O) {
    const w = O.charCodeAt(0);
    return w >= 97 && w <= 122 || // a-z
    w >= 65 && w <= 90 || // A-Z
    w >= 48 && w <= 57 || // 0-9
    w === 95 || // _
    w === 36;
  }
  function ge(O) {
    return W(O, te);
  }
  function D(O) {
    const w = O.charCodeAt(0);
    return w >= 97 && w <= 122 || // a-z
    w >= 65 && w <= 90 || // A-Z
    w >= 48 && w <= 57 || // 0-9
    w === 95 || // _
    w === 36 || // $
    w === 45;
  }
  function B(O) {
    return W(O, D);
  }
  function V(O) {
    const w = O.charCodeAt(0);
    return w >= 48 && w <= 57;
  }
  function ce(O) {
    return W(O, V);
  }
  function ae(O) {
    const w = O.charCodeAt(0);
    return w >= 48 && w <= 57 || // 0-9
    w >= 65 && w <= 70 || // A-F
    w >= 97 && w <= 102;
  }
  function ke(O) {
    return W(O, ae);
  }
  function Oe(O) {
    let w = "", L = "";
    for (; w = ce(O); )
      L += w;
    return L;
  }
  function Ae(O) {
    let w = "";
    for (; ; ) {
      const L = O.currentChar();
      if (L === "{" || L === "}" || L === "@" || L === "|" || !L)
        break;
      if (L === Un || L === jt)
        if (z(O))
          w += L, O.next();
        else {
          if (q(O))
            break;
          w += L, O.next();
        }
      else
        w += L, O.next();
    }
    return w;
  }
  function be(O) {
    y(O);
    let w = "", L = "";
    for (; w = B(O); )
      L += w;
    const K = O.currentChar();
    if (K && K !== "}" && K !== yi && K !== Un && K !== jt && K !== "　") {
      const de = It(O);
      return f(Be.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, L + de), L + de;
    }
    return O.currentChar() === yi && f(Be.UNTERMINATED_CLOSING_BRACE, s(), 0), L;
  }
  function We(O) {
    y(O);
    let w = "";
    return O.currentChar() === "-" ? (O.next(), w += `-${Oe(O)}`) : w += Oe(O), O.currentChar() === yi && f(Be.UNTERMINATED_CLOSING_BRACE, s(), 0), w;
  }
  function xe(O) {
    return O !== kh && O !== jt;
  }
  function ze(O) {
    y(O), p(O, "'");
    let w = "", L = "";
    for (; w = W(O, xe); )
      w === "\\" ? L += Qe(O) : L += w;
    const K = O.currentChar();
    return K === jt || K === yi ? (f(Be.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), K === jt && (O.next(), p(O, "'")), L) : (p(O, "'"), L);
  }
  function Qe(O) {
    const w = O.currentChar();
    switch (w) {
      case "\\":
      case "'":
        return O.next(), `\\${w}`;
      case "u":
        return Ie(O, w, 4);
      case "U":
        return Ie(O, w, 6);
      default:
        return f(Be.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, w), "";
    }
  }
  function Ie(O, w, L) {
    p(O, w);
    let K = "";
    for (let de = 0; de < L; de++) {
      const he = ke(O);
      if (!he) {
        f(Be.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${w}${K}${O.currentChar()}`);
        break;
      }
      K += he;
    }
    return `\\${w}${K}`;
  }
  function bt(O) {
    return O !== "{" && O !== "}" && O !== Un && O !== jt;
  }
  function It(O) {
    y(O);
    let w = "", L = "";
    for (; w = W(O, bt); )
      L += w;
    return L;
  }
  function Pt(O) {
    let w = "", L = "";
    for (; w = ge(O); )
      L += w;
    return L;
  }
  function Wt(O) {
    const w = (L) => {
      const K = O.currentChar();
      return K === "{" || K === "@" || K === "|" || K === "(" || K === ")" || !K || K === Un ? L : (L += K, O.next(), w(L));
    };
    return w("");
  }
  function At(O) {
    y(O);
    const w = p(
      O,
      "|"
      /* TokenChars.Pipe */
    );
    return y(O), w;
  }
  function wt(O, w) {
    let L = null;
    switch (O.currentChar()) {
      case "{":
        return w.braceNest >= 1 && f(Be.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), O.next(), L = d(
          w,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), y(O), w.braceNest++, L;
      case "}":
        return w.braceNest > 0 && w.currentType === 2 && f(Be.EMPTY_PLACEHOLDER, s(), 0), O.next(), L = d(
          w,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), w.braceNest--, w.braceNest > 0 && y(O), w.inLinked && w.braceNest === 0 && (w.inLinked = !1), L;
      case "@":
        return w.braceNest > 0 && f(Be.UNTERMINATED_CLOSING_BRACE, s(), 0), L = ot(O, w) || h(w), w.braceNest = 0, L;
      default: {
        let de = !0, he = !0, A = !0;
        if (q(O))
          return w.braceNest > 0 && f(Be.UNTERMINATED_CLOSING_BRACE, s(), 0), L = d(w, 1, At(O)), w.braceNest = 0, w.inLinked = !1, L;
        if (w.braceNest > 0 && (w.currentType === 4 || w.currentType === 5 || w.currentType === 6))
          return f(Be.UNTERMINATED_CLOSING_BRACE, s(), 0), w.braceNest = 0, zt(O, w);
        if (de = k(O, w))
          return L = d(w, 4, be(O)), y(O), L;
        if (he = S(O, w))
          return L = d(w, 5, We(O)), y(O), L;
        if (A = _(O, w))
          return L = d(w, 6, ze(O)), y(O), L;
        if (!de && !he && !A)
          return L = d(w, 12, It(O)), f(Be.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, L.value), y(O), L;
        break;
      }
    }
    return L;
  }
  function ot(O, w) {
    const { currentType: L } = w;
    let K = null;
    const de = O.currentChar();
    switch ((L === 7 || L === 8 || L === 11 || L === 9) && (de === jt || de === Un) && f(Be.INVALID_LINKED_FORMAT, s(), 0), de) {
      case "@":
        return O.next(), K = d(
          w,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), w.inLinked = !0, K;
      case ".":
        return y(O), O.next(), d(
          w,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return y(O), O.next(), d(
          w,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return q(O) ? (K = d(w, 1, At(O)), w.braceNest = 0, w.inLinked = !1, K) : E(O, w) || H(O, w) ? (y(O), ot(O, w)) : C(O, w) ? (y(O), d(w, 11, Pt(O))) : N(O, w) ? (y(O), de === "{" ? wt(O, w) || K : d(w, 10, Wt(O))) : (L === 7 && f(Be.INVALID_LINKED_FORMAT, s(), 0), w.braceNest = 0, w.inLinked = !1, zt(O, w));
    }
  }
  function zt(O, w) {
    let L = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (w.braceNest > 0)
      return wt(O, w) || h(w);
    if (w.inLinked)
      return ot(O, w) || h(w);
    switch (O.currentChar()) {
      case "{":
        return wt(O, w) || h(w);
      case "}":
        return f(Be.UNBALANCED_CLOSING_BRACE, s(), 0), O.next(), d(
          w,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return ot(O, w) || h(w);
      default: {
        if (q(O))
          return L = d(w, 1, At(O)), w.braceNest = 0, w.inLinked = !1, L;
        if (z(O))
          return d(w, 0, Ae(O));
        break;
      }
    }
    return L;
  }
  function Dt() {
    const { currentType: O, offset: w, startLoc: L, endLoc: K } = a;
    return a.lastType = O, a.lastOffset = w, a.lastStartLoc = L, a.lastEndLoc = K, a.offset = r(), a.startLoc = s(), i.currentChar() === yi ? d(
      a,
      13
      /* TokenTypes.EOF */
    ) : zt(i, a);
  }
  return {
    nextToken: Dt,
    currentOffset: r,
    currentPosition: s,
    context: c
  };
}
const IO = "parser", PO = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function DO(t, e, n) {
  switch (t) {
    case "\\\\":
      return "\\";
    // eslint-disable-next-line no-useless-escape
    case "\\'":
      return "'";
    default: {
      const i = parseInt(e || n, 16);
      return i <= 55295 || i >= 57344 ? String.fromCodePoint(i) : "�";
    }
  }
}
function RO(t = {}) {
  const e = t.location !== !1, { onError: n } = t;
  function i(g, b, k, S, ..._) {
    const E = g.currentPosition();
    if (E.offset += S, E.column += S, n) {
      const C = e ? Oc(k, E) : null, H = va(b, C, {
        domain: IO,
        args: _
      });
      n(H);
    }
  }
  function r(g, b, k) {
    const S = { type: g };
    return e && (S.start = b, S.end = b, S.loc = { start: k, end: k }), S;
  }
  function s(g, b, k, S) {
    e && (g.end = b, g.loc && (g.loc.end = k));
  }
  function o(g, b) {
    const k = g.context(), S = r(3, k.offset, k.startLoc);
    return S.value = b, s(S, g.currentOffset(), g.currentPosition()), S;
  }
  function l(g, b) {
    const k = g.context(), { lastOffset: S, lastStartLoc: _ } = k, E = r(5, S, _);
    return E.index = parseInt(b, 10), g.nextToken(), s(E, g.currentOffset(), g.currentPosition()), E;
  }
  function a(g, b) {
    const k = g.context(), { lastOffset: S, lastStartLoc: _ } = k, E = r(4, S, _);
    return E.key = b, g.nextToken(), s(E, g.currentOffset(), g.currentPosition()), E;
  }
  function c(g, b) {
    const k = g.context(), { lastOffset: S, lastStartLoc: _ } = k, E = r(9, S, _);
    return E.value = b.replace(PO, DO), g.nextToken(), s(E, g.currentOffset(), g.currentPosition()), E;
  }
  function u(g) {
    const b = g.nextToken(), k = g.context(), { lastOffset: S, lastStartLoc: _ } = k, E = r(8, S, _);
    return b.type !== 11 ? (i(g, Be.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), E.value = "", s(E, S, _), {
      nextConsumeToken: b,
      node: E
    }) : (b.value == null && i(g, Be.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, jn(b)), E.value = b.value || "", s(E, g.currentOffset(), g.currentPosition()), {
      node: E
    });
  }
  function f(g, b) {
    const k = g.context(), S = r(7, k.offset, k.startLoc);
    return S.value = b, s(S, g.currentOffset(), g.currentPosition()), S;
  }
  function d(g) {
    const b = g.context(), k = r(6, b.offset, b.startLoc);
    let S = g.nextToken();
    if (S.type === 8) {
      const _ = u(g);
      k.modifier = _.node, S = _.nextConsumeToken || g.nextToken();
    }
    switch (S.type !== 9 && i(g, Be.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jn(S)), S = g.nextToken(), S.type === 2 && (S = g.nextToken()), S.type) {
      case 10:
        S.value == null && i(g, Be.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jn(S)), k.key = f(g, S.value || "");
        break;
      case 4:
        S.value == null && i(g, Be.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jn(S)), k.key = a(g, S.value || "");
        break;
      case 5:
        S.value == null && i(g, Be.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jn(S)), k.key = l(g, S.value || "");
        break;
      case 6:
        S.value == null && i(g, Be.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jn(S)), k.key = c(g, S.value || "");
        break;
      default: {
        i(g, Be.UNEXPECTED_EMPTY_LINKED_KEY, b.lastStartLoc, 0);
        const _ = g.context(), E = r(7, _.offset, _.startLoc);
        return E.value = "", s(E, _.offset, _.startLoc), k.key = E, s(k, _.offset, _.startLoc), {
          nextConsumeToken: S,
          node: k
        };
      }
    }
    return s(k, g.currentOffset(), g.currentPosition()), {
      node: k
    };
  }
  function h(g) {
    const b = g.context(), k = b.currentType === 1 ? g.currentOffset() : b.offset, S = b.currentType === 1 ? b.endLoc : b.startLoc, _ = r(2, k, S);
    _.items = [];
    let E = null;
    do {
      const N = E || g.nextToken();
      switch (E = null, N.type) {
        case 0:
          N.value == null && i(g, Be.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jn(N)), _.items.push(o(g, N.value || ""));
          break;
        case 5:
          N.value == null && i(g, Be.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jn(N)), _.items.push(l(g, N.value || ""));
          break;
        case 4:
          N.value == null && i(g, Be.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jn(N)), _.items.push(a(g, N.value || ""));
          break;
        case 6:
          N.value == null && i(g, Be.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, jn(N)), _.items.push(c(g, N.value || ""));
          break;
        case 7: {
          const q = d(g);
          _.items.push(q.node), E = q.nextConsumeToken || null;
          break;
        }
      }
    } while (b.currentType !== 13 && b.currentType !== 1);
    const C = b.currentType === 1 ? b.lastOffset : g.currentOffset(), H = b.currentType === 1 ? b.lastEndLoc : g.currentPosition();
    return s(_, C, H), _;
  }
  function p(g, b, k, S) {
    const _ = g.context();
    let E = S.items.length === 0;
    const C = r(1, b, k);
    C.cases = [], C.cases.push(S);
    do {
      const H = h(g);
      E || (E = H.items.length === 0), C.cases.push(H);
    } while (_.currentType !== 13);
    return E && i(g, Be.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), s(C, g.currentOffset(), g.currentPosition()), C;
  }
  function v(g) {
    const b = g.context(), { offset: k, startLoc: S } = b, _ = h(g);
    return b.currentType === 13 ? _ : p(g, k, S, _);
  }
  function y(g) {
    const b = LO(g, Vt({}, t)), k = b.context(), S = r(0, k.offset, k.startLoc);
    return e && S.loc && (S.loc.source = g), S.body = v(b), t.onCacheKey && (S.cacheKey = t.onCacheKey(g)), k.currentType !== 13 && i(b, Be.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, g[k.offset] || ""), s(S, b.currentOffset(), b.currentPosition()), S;
  }
  return { parse: y };
}
function jn(t) {
  if (t.type === 13)
    return "EOF";
  const e = (t.value || "").replace(/\r?\n/gu, "\\n");
  return e.length > 10 ? e.slice(0, 9) + "…" : e;
}
function NO(t, e = {}) {
  const n = {
    ast: t,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function _h(t, e) {
  for (let n = 0; n < t.length; n++)
    vf(t[n], e);
}
function vf(t, e) {
  switch (t.type) {
    case 1:
      _h(t.cases, e), e.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      _h(t.items, e);
      break;
    case 6: {
      vf(t.key, e), e.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), e.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      e.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), e.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      e.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), e.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function FO(t, e = {}) {
  const n = NO(t);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), t.body && vf(t.body, n);
  const i = n.context();
  t.helpers = Array.from(i.helpers);
}
function $O(t) {
  const e = t.body;
  return e.type === 2 ? Eh(e) : e.cases.forEach((n) => Eh(n)), t;
}
function Eh(t) {
  if (t.items.length === 1) {
    const e = t.items[0];
    (e.type === 3 || e.type === 9) && (t.static = e.value, delete e.value);
  } else {
    const e = [];
    for (let n = 0; n < t.items.length; n++) {
      const i = t.items[n];
      if (!(i.type === 3 || i.type === 9) || i.value == null)
        break;
      e.push(i.value);
    }
    if (e.length === t.items.length) {
      t.static = mf(e);
      for (let n = 0; n < t.items.length; n++) {
        const i = t.items[n];
        (i.type === 3 || i.type === 9) && delete i.value;
      }
    }
  }
}
function Wr(t) {
  switch (t.t = t.type, t.type) {
    case 0: {
      const e = t;
      Wr(e.body), e.b = e.body, delete e.body;
      break;
    }
    case 1: {
      const e = t, n = e.cases;
      for (let i = 0; i < n.length; i++)
        Wr(n[i]);
      e.c = n, delete e.cases;
      break;
    }
    case 2: {
      const e = t, n = e.items;
      for (let i = 0; i < n.length; i++)
        Wr(n[i]);
      e.i = n, delete e.items, e.static && (e.s = e.static, delete e.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const e = t;
      e.value && (e.v = e.value, delete e.value);
      break;
    }
    case 6: {
      const e = t;
      Wr(e.key), e.k = e.key, delete e.key, e.modifier && (Wr(e.modifier), e.m = e.modifier, delete e.modifier);
      break;
    }
    case 5: {
      const e = t;
      e.i = e.index, delete e.index;
      break;
    }
    case 4: {
      const e = t;
      e.k = e.key, delete e.key;
      break;
    }
  }
  delete t.type;
}
function BO(t, e) {
  const { filename: n, breakLineCode: i, needIndent: r } = e, s = e.location !== !1, o = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: i,
    needIndent: r,
    indentLevel: 0
  };
  s && t.loc && (o.source = t.loc.source);
  const l = () => o;
  function a(v, y) {
    o.code += v;
  }
  function c(v, y = !0) {
    const g = y ? i : "";
    a(r ? g + "  ".repeat(v) : g);
  }
  function u(v = !0) {
    const y = ++o.indentLevel;
    v && c(y);
  }
  function f(v = !0) {
    const y = --o.indentLevel;
    v && c(y);
  }
  function d() {
    c(o.indentLevel);
  }
  return {
    context: l,
    push: a,
    indent: u,
    deindent: f,
    newline: d,
    helper: (v) => `_${v}`,
    needIndent: () => o.needIndent
  };
}
function VO(t, e) {
  const { helper: n } = t;
  t.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ss(t, e.key), e.modifier ? (t.push(", "), ss(t, e.modifier), t.push(", _type")) : t.push(", undefined, _type"), t.push(")");
}
function HO(t, e) {
  const { helper: n, needIndent: i } = t;
  t.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), t.indent(i());
  const r = e.items.length;
  for (let s = 0; s < r && (ss(t, e.items[s]), s !== r - 1); s++)
    t.push(", ");
  t.deindent(i()), t.push("])");
}
function WO(t, e) {
  const { helper: n, needIndent: i } = t;
  if (e.cases.length > 1) {
    t.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), t.indent(i());
    const r = e.cases.length;
    for (let s = 0; s < r && (ss(t, e.cases[s]), s !== r - 1); s++)
      t.push(", ");
    t.deindent(i()), t.push("])");
  }
}
function zO(t, e) {
  e.body ? ss(t, e.body) : t.push("null");
}
function ss(t, e) {
  const { helper: n } = t;
  switch (e.type) {
    case 0:
      zO(t, e);
      break;
    case 1:
      WO(t, e);
      break;
    case 2:
      HO(t, e);
      break;
    case 6:
      VO(t, e);
      break;
    case 8:
      t.push(JSON.stringify(e.value), e);
      break;
    case 7:
      t.push(JSON.stringify(e.value), e);
      break;
    case 5:
      t.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${e.index}))`, e);
      break;
    case 4:
      t.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(e.key)}))`, e);
      break;
    case 9:
      t.push(JSON.stringify(e.value), e);
      break;
    case 3:
      t.push(JSON.stringify(e.value), e);
      break;
  }
}
const GO = (t, e = {}) => {
  const n = ue(e.mode) ? e.mode : "normal", i = ue(e.filename) ? e.filename : "message.intl";
  e.sourceMap;
  const r = e.breakLineCode != null ? e.breakLineCode : n === "arrow" ? ";" : `
`, s = e.needIndent ? e.needIndent : n !== "arrow", o = t.helpers || [], l = BO(t, {
    filename: i,
    breakLineCode: r,
    needIndent: s
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(s), o.length > 0 && (l.push(`const { ${mf(o.map((u) => `${u}: _${u}`), ", ")} } = ctx`), l.newline()), l.push("return "), ss(l, t), l.deindent(s), l.push("}"), delete t.helpers;
  const { code: a, map: c } = l.context();
  return {
    ast: t,
    code: a,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function UO(t, e = {}) {
  const n = Vt({}, e), i = !!n.jit, r = !!n.minify, s = n.optimize == null ? !0 : n.optimize, l = RO(n).parse(t);
  return i ? (s && $O(l), r && Wr(l), { ast: l, code: "" }) : (FO(l, n), GO(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function jO() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (al().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function oi(t) {
  return $e(t) && yf(t) === 0 && ($n(t, "b") || $n(t, "body"));
}
const ev = ["b", "body"];
function KO(t) {
  return ur(t, ev);
}
const tv = ["c", "cases"];
function YO(t) {
  return ur(t, tv, []);
}
const nv = ["s", "static"];
function qO(t) {
  return ur(t, nv);
}
const iv = ["i", "items"];
function JO(t) {
  return ur(t, iv, []);
}
const rv = ["t", "type"];
function yf(t) {
  return ur(t, rv);
}
const sv = ["v", "value"];
function Fo(t, e) {
  const n = ur(t, sv);
  if (n != null)
    return n;
  throw no(e);
}
const ov = ["m", "modifier"];
function XO(t) {
  return ur(t, ov);
}
const lv = ["k", "key"];
function ZO(t) {
  const e = ur(t, lv);
  if (e)
    return e;
  throw no(
    6
    /* NodeTypes.Linked */
  );
}
function ur(t, e, n) {
  for (let i = 0; i < e.length; i++) {
    const r = e[i];
    if ($n(t, r) && t[r] != null)
      return t[r];
  }
  return n;
}
const av = [
  ...ev,
  ...tv,
  ...nv,
  ...iv,
  ...lv,
  ...ov,
  ...sv,
  ...rv
];
function no(t) {
  return new Error(`unhandled node type: ${t}`);
}
function Wa(t) {
  return (n) => QO(n, t);
}
function QO(t, e) {
  const n = KO(e);
  if (n == null)
    throw no(
      0
      /* NodeTypes.Resource */
    );
  if (yf(n) === 1) {
    const s = YO(n);
    return t.plural(s.reduce((o, l) => [
      ...o,
      Th(t, l)
    ], []));
  } else
    return Th(t, n);
}
function Th(t, e) {
  const n = qO(e);
  if (n != null)
    return t.type === "text" ? n : t.normalize([n]);
  {
    const i = JO(e).reduce((r, s) => [...r, xc(t, s)], []);
    return t.normalize(i);
  }
}
function xc(t, e) {
  const n = yf(e);
  switch (n) {
    case 3:
      return Fo(e, n);
    case 9:
      return Fo(e, n);
    case 4: {
      const i = e;
      if ($n(i, "k") && i.k)
        return t.interpolate(t.named(i.k));
      if ($n(i, "key") && i.key)
        return t.interpolate(t.named(i.key));
      throw no(n);
    }
    case 5: {
      const i = e;
      if ($n(i, "i") && xt(i.i))
        return t.interpolate(t.list(i.i));
      if ($n(i, "index") && xt(i.index))
        return t.interpolate(t.list(i.index));
      throw no(n);
    }
    case 6: {
      const i = e, r = XO(i), s = ZO(i);
      return t.linked(xc(t, s), r ? xc(t, r) : void 0, t.type);
    }
    case 7:
      return Fo(e, n);
    case 8:
      return Fo(e, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const ex = (t) => t;
let $o = Ge();
function tx(t, e = {}) {
  let n = !1;
  const i = e.onError || _O;
  return e.onError = (r) => {
    n = !0, i(r);
  }, { ...UO(t, e), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function nx(t, e) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ue(t)) {
    ht(e.warnHtmlMessage) && e.warnHtmlMessage;
    const i = (e.onCacheKey || ex)(t), r = $o[i];
    if (r)
      return r;
    const { ast: s, detectError: o } = tx(t, {
      ...e,
      location: !1,
      jit: !0
    }), l = Wa(s);
    return o ? l : $o[i] = l;
  } else {
    const n = t.cacheKey;
    if (n) {
      const i = $o[n];
      return i || ($o[n] = Wa(t));
    } else
      return Wa(t);
  }
}
const Ei = {
  INVALID_ARGUMENT: kO,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, ix = 24;
function Ti(t) {
  return va(t, null, void 0);
}
function bf(t, e) {
  return e.locale != null ? Ah(e.locale) : Ah(t.locale);
}
let za;
function Ah(t) {
  if (ue(t))
    return t;
  if (st(t)) {
    if (t.resolvedOnce && za != null)
      return za;
    if (t.constructor.name === "Function") {
      const e = t();
      if (wO(e))
        throw Ti(Ei.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return za = e;
    } else
      throw Ti(Ei.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Ti(Ei.NOT_SUPPORT_LOCALE_TYPE);
}
function rx(t, e, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...pt(e) ? e : $e(e) ? Object.keys(e) : ue(e) ? [e] : [n]
  ])];
}
function cv(t, e, n) {
  const i = ue(n) ? n : Nl, r = t;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(i);
  if (!s) {
    s = [];
    let o = [n];
    for (; pt(o); )
      o = Oh(s, o, e);
    const l = pt(e) || !Fe(e) ? e : e.default ? e.default : null;
    o = ue(l) ? [l] : l, pt(o) && Oh(s, o, !1), r.__localeChainCache.set(i, s);
  }
  return s;
}
function Oh(t, e, n) {
  let i = !0;
  for (let r = 0; r < e.length && ht(i); r++) {
    const s = e[r];
    ue(s) && (i = sx(t, e[r], n));
  }
  return i;
}
function sx(t, e, n) {
  let i;
  const r = e.split("-");
  do {
    const s = r.join("-");
    i = ox(t, s, n), r.splice(-1, 1);
  } while (r.length && i === !0);
  return i;
}
function ox(t, e, n) {
  let i = !1;
  if (!t.includes(e) && (i = !0, e)) {
    i = e[e.length - 1] !== "!";
    const r = e.replace(/!/g, "");
    t.push(r), (pt(n) || Fe(n)) && n[r] && (i = n[r]);
  }
  return i;
}
const fr = [];
fr[
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
fr[
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
fr[
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
fr[
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
fr[
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
fr[
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
fr[
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
const lx = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function ax(t) {
  return lx.test(t);
}
function cx(t) {
  const e = t.charCodeAt(0), n = t.charCodeAt(t.length - 1);
  return e === n && (e === 34 || e === 39) ? t.slice(1, -1) : t;
}
function ux(t) {
  if (t == null)
    return "o";
  switch (t.charCodeAt(0)) {
    case 91:
    // [
    case 93:
    // ]
    case 46:
    // .
    case 34:
    // "
    case 39:
      return t;
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
function fx(t) {
  const e = t.trim();
  return t.charAt(0) === "0" && isNaN(parseInt(t)) ? !1 : ax(e) ? cx(e) : "*" + e;
}
function dx(t) {
  const e = [];
  let n = -1, i = 0, r = 0, s, o, l, a, c, u, f;
  const d = [];
  d[
    0
    /* Actions.APPEND */
  ] = () => {
    o === void 0 ? o = l : o += l;
  }, d[
    1
    /* Actions.PUSH */
  ] = () => {
    o !== void 0 && (e.push(o), o = void 0);
  }, d[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    d[
      0
      /* Actions.APPEND */
    ](), r++;
  }, d[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (r > 0)
      r--, i = 4, d[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (r = 0, o === void 0 || (o = fx(o), o === !1))
        return !1;
      d[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function h() {
    const p = t[n + 1];
    if (i === 5 && p === "'" || i === 6 && p === '"')
      return n++, l = "\\" + p, d[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; i !== null; )
    if (n++, s = t[n], !(s === "\\" && h())) {
      if (a = ux(s), f = fr[i], c = f[a] || f.l || 8, c === 8 || (i = c[0], c[1] !== void 0 && (u = d[c[1]], u && (l = s, u() === !1))))
        return;
      if (i === 7)
        return e;
    }
}
const xh = /* @__PURE__ */ new Map();
function hx(t, e) {
  return $e(t) ? t[e] : null;
}
function px(t, e) {
  if (!$e(t))
    return null;
  let n = xh.get(e);
  if (n || (n = dx(e), n && xh.set(e, n)), !n)
    return null;
  const i = n.length;
  let r = t, s = 0;
  for (; s < i; ) {
    const o = n[s];
    if (av.includes(o) && oi(r))
      return null;
    const l = r[o];
    if (l === void 0 || st(r))
      return null;
    r = l, s++;
  }
  return r;
}
const gx = "11.2.2", ya = -1, Nl = "en-US", Mh = "", Lh = (t) => `${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;
function mx() {
  return {
    upper: (t, e) => e === "text" && ue(t) ? t.toUpperCase() : e === "vnode" && $e(t) && "__v_isVNode" in t ? t.children.toUpperCase() : t,
    lower: (t, e) => e === "text" && ue(t) ? t.toLowerCase() : e === "vnode" && $e(t) && "__v_isVNode" in t ? t.children.toLowerCase() : t,
    capitalize: (t, e) => e === "text" && ue(t) ? Lh(t) : e === "vnode" && $e(t) && "__v_isVNode" in t ? Lh(t.children) : t
  };
}
let uv;
function vx(t) {
  uv = t;
}
let fv;
function yx(t) {
  fv = t;
}
let dv;
function bx(t) {
  dv = t;
}
let hv = null;
const Ih = (t) => {
  hv = t;
}, wx = () => hv;
let Ph = 0;
function Sx(t = {}) {
  const e = st(t.onWarn) ? t.onWarn : hO, n = ue(t.version) ? t.version : gx, i = ue(t.locale) || st(t.locale) ? t.locale : Nl, r = st(i) ? Nl : i, s = pt(t.fallbackLocale) || Fe(t.fallbackLocale) || ue(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : r, o = Fe(t.messages) ? t.messages : Ga(r), l = Fe(t.datetimeFormats) ? t.datetimeFormats : Ga(r), a = Fe(t.numberFormats) ? t.numberFormats : Ga(r), c = Vt(Ge(), t.modifiers, mx()), u = t.pluralRules || Ge(), f = st(t.missing) ? t.missing : null, d = ht(t.missingWarn) || Rl(t.missingWarn) ? t.missingWarn : !0, h = ht(t.fallbackWarn) || Rl(t.fallbackWarn) ? t.fallbackWarn : !0, p = !!t.fallbackFormat, v = !!t.unresolving, y = st(t.postTranslation) ? t.postTranslation : null, g = Fe(t.processor) ? t.processor : null, b = ht(t.warnHtmlMessage) ? t.warnHtmlMessage : !0, k = !!t.escapeParameter, S = st(t.messageCompiler) ? t.messageCompiler : uv, _ = st(t.messageResolver) ? t.messageResolver : fv || hx, E = st(t.localeFallbacker) ? t.localeFallbacker : dv || rx, C = $e(t.fallbackContext) ? t.fallbackContext : void 0, H = t, N = $e(H.__datetimeFormatters) ? H.__datetimeFormatters : /* @__PURE__ */ new Map(), q = $e(H.__numberFormatters) ? H.__numberFormatters : /* @__PURE__ */ new Map(), z = $e(H.__meta) ? H.__meta : {};
  Ph++;
  const W = {
    version: n,
    cid: Ph,
    locale: i,
    fallbackLocale: s,
    messages: o,
    modifiers: c,
    pluralRules: u,
    missing: f,
    missingWarn: d,
    fallbackWarn: h,
    fallbackFormat: p,
    unresolving: v,
    postTranslation: y,
    processor: g,
    warnHtmlMessage: b,
    escapeParameter: k,
    messageCompiler: S,
    messageResolver: _,
    localeFallbacker: E,
    fallbackContext: C,
    onWarn: e,
    __meta: z
  };
  return W.datetimeFormats = l, W.numberFormats = a, W.__datetimeFormatters = N, W.__numberFormatters = q, W;
}
const Ga = (t) => ({ [t]: Ge() });
function wf(t, e, n, i, r) {
  const { missing: s, onWarn: o } = t;
  if (s !== null) {
    const l = s(t, n, e, r);
    return ue(l) ? l : e;
  } else
    return e;
}
function ks(t, e, n) {
  const i = t;
  i.__localeChainCache = /* @__PURE__ */ new Map(), t.localeFallbacker(t, n, e);
}
function Cx(t, e) {
  return t === e ? !1 : t.split("-")[0] === e.split("-")[0];
}
function kx(t, e) {
  const n = e.indexOf(t);
  if (n === -1)
    return !1;
  for (let i = n + 1; i < e.length; i++)
    if (Cx(t, e[i]))
      return !0;
  return !1;
}
function Dh(t, ...e) {
  const { datetimeFormats: n, unresolving: i, fallbackLocale: r, onWarn: s, localeFallbacker: o } = t, { __datetimeFormatters: l } = t, [a, c, u, f] = Mc(...e), d = ht(u.missingWarn) ? u.missingWarn : t.missingWarn;
  ht(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
  const h = !!u.part, p = bf(t, u), v = o(
    t,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    p
  );
  if (!ue(a) || a === "")
    return new Intl.DateTimeFormat(p, f).format(c);
  let y = {}, g, b = null;
  const k = "datetime format";
  for (let E = 0; E < v.length && (g = v[E], y = n[g] || {}, b = y[a], !Fe(b)); E++)
    wf(t, a, g, d, k);
  if (!Fe(b) || !ue(g))
    return i ? ya : a;
  let S = `${g}__${a}`;
  ma(f) || (S = `${S}__${JSON.stringify(f)}`);
  let _ = l.get(S);
  return _ || (_ = new Intl.DateTimeFormat(g, Vt({}, b, f)), l.set(S, _)), h ? _.formatToParts(c) : _.format(c);
}
const pv = [
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
function Mc(...t) {
  const [e, n, i, r] = t, s = Ge();
  let o = Ge(), l;
  if (ue(e)) {
    const a = e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!a)
      throw Ti(Ei.INVALID_ISO_DATE_ARGUMENT);
    const c = a[3] ? a[3].trim().startsWith("T") ? `${a[1].trim()}${a[3].trim()}` : `${a[1].trim()}T${a[3].trim()}` : a[1].trim();
    l = new Date(c);
    try {
      l.toISOString();
    } catch {
      throw Ti(Ei.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (mO(e)) {
    if (isNaN(e.getTime()))
      throw Ti(Ei.INVALID_DATE_ARGUMENT);
    l = e;
  } else if (xt(e))
    l = e;
  else
    throw Ti(Ei.INVALID_ARGUMENT);
  return ue(n) ? s.key = n : Fe(n) && Object.keys(n).forEach((a) => {
    pv.includes(a) ? o[a] = n[a] : s[a] = n[a];
  }), ue(i) ? s.locale = i : Fe(i) && (o = i), Fe(r) && (o = r), [s.key || "", l, s, o];
}
function Rh(t, e, n) {
  const i = t;
  for (const r in n) {
    const s = `${e}__${r}`;
    i.__datetimeFormatters.has(s) && i.__datetimeFormatters.delete(s);
  }
}
function Nh(t, ...e) {
  const { numberFormats: n, unresolving: i, fallbackLocale: r, onWarn: s, localeFallbacker: o } = t, { __numberFormatters: l } = t, [a, c, u, f] = Lc(...e), d = ht(u.missingWarn) ? u.missingWarn : t.missingWarn;
  ht(u.fallbackWarn) ? u.fallbackWarn : t.fallbackWarn;
  const h = !!u.part, p = bf(t, u), v = o(
    t,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    p
  );
  if (!ue(a) || a === "")
    return new Intl.NumberFormat(p, f).format(c);
  let y = {}, g, b = null;
  const k = "number format";
  for (let E = 0; E < v.length && (g = v[E], y = n[g] || {}, b = y[a], !Fe(b)); E++)
    wf(t, a, g, d, k);
  if (!Fe(b) || !ue(g))
    return i ? ya : a;
  let S = `${g}__${a}`;
  ma(f) || (S = `${S}__${JSON.stringify(f)}`);
  let _ = l.get(S);
  return _ || (_ = new Intl.NumberFormat(g, Vt({}, b, f)), l.set(S, _)), h ? _.formatToParts(c) : _.format(c);
}
const gv = [
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
function Lc(...t) {
  const [e, n, i, r] = t, s = Ge();
  let o = Ge();
  if (!xt(e))
    throw Ti(Ei.INVALID_ARGUMENT);
  const l = e;
  return ue(n) ? s.key = n : Fe(n) && Object.keys(n).forEach((a) => {
    gv.includes(a) ? o[a] = n[a] : s[a] = n[a];
  }), ue(i) ? s.locale = i : Fe(i) && (o = i), Fe(r) && (o = r), [s.key || "", l, s, o];
}
function Fh(t, e, n) {
  const i = t;
  for (const r in n) {
    const s = `${e}__${r}`;
    i.__numberFormatters.has(s) && i.__numberFormatters.delete(s);
  }
}
const _x = (t) => t, Ex = (t) => "", Tx = "text", Ax = (t) => t.length === 0 ? "" : mf(t), Ox = SO;
function $h(t, e) {
  return t = Math.abs(t), e === 2 ? t ? t > 1 ? 1 : 0 : 1 : t ? Math.min(t, 2) : 0;
}
function xx(t) {
  const e = xt(t.pluralIndex) ? t.pluralIndex : -1;
  return t.named && (xt(t.named.count) || xt(t.named.n)) ? xt(t.named.count) ? t.named.count : xt(t.named.n) ? t.named.n : e : e;
}
function Mx(t, e) {
  e.count || (e.count = t), e.n || (e.n = t);
}
function Lx(t = {}) {
  const e = t.locale, n = xx(t), i = $e(t.pluralRules) && ue(e) && st(t.pluralRules[e]) ? t.pluralRules[e] : $h, r = $e(t.pluralRules) && ue(e) && st(t.pluralRules[e]) ? $h : void 0, s = (g) => g[i(n, g.length, r)], o = t.list || [], l = (g) => o[g], a = t.named || Ge();
  xt(t.pluralIndex) && Mx(n, a);
  const c = (g) => a[g];
  function u(g, b) {
    const k = st(t.messages) ? t.messages(g, !!b) : $e(t.messages) ? t.messages[g] : !1;
    return k || (t.parent ? t.parent.message(g) : Ex);
  }
  const f = (g) => t.modifiers ? t.modifiers[g] : _x, d = Fe(t.processor) && st(t.processor.normalize) ? t.processor.normalize : Ax, h = Fe(t.processor) && st(t.processor.interpolate) ? t.processor.interpolate : Ox, p = Fe(t.processor) && ue(t.processor.type) ? t.processor.type : Tx, y = {
    list: l,
    named: c,
    plural: s,
    linked: (g, ...b) => {
      const [k, S] = b;
      let _ = "text", E = "";
      b.length === 1 ? $e(k) ? (E = k.modifier || E, _ = k.type || _) : ue(k) && (E = k || E) : b.length === 2 && (ue(k) && (E = k || E), ue(S) && (_ = S || _));
      const C = u(g, !0)(y), H = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        _ === "vnode" && pt(C) && E ? C[0] : C
      );
      return E ? f(E)(H, _) : H;
    },
    message: u,
    type: p,
    interpolate: h,
    normalize: d,
    values: Vt(Ge(), o, a)
  };
  return y;
}
const Bh = () => "", Mi = (t) => st(t);
function Vh(t, ...e) {
  const { fallbackFormat: n, postTranslation: i, unresolving: r, messageCompiler: s, fallbackLocale: o, messages: l } = t, [a, c] = Ic(...e), u = ht(c.missingWarn) ? c.missingWarn : t.missingWarn, f = ht(c.fallbackWarn) ? c.fallbackWarn : t.fallbackWarn, d = ht(c.escapeParameter) ? c.escapeParameter : t.escapeParameter, h = !!c.resolvedMessage, p = ue(c.default) || ht(c.default) ? ht(c.default) ? s ? a : () => a : c.default : n ? s ? a : () => a : null, v = n || p != null && (ue(p) || st(p)), y = bf(t, c);
  d && Ix(c);
  let [g, b, k] = h ? [
    a,
    y,
    l[y] || Ge()
  ] : mv(t, a, y, o, f, u), S = g, _ = a;
  if (!h && !(ue(S) || oi(S) || Mi(S)) && v && (S = p, _ = S), !h && (!(ue(S) || oi(S) || Mi(S)) || !ue(b)))
    return r ? ya : a;
  let E = !1;
  const C = () => {
    E = !0;
  }, H = Mi(S) ? S : vv(t, a, b, S, _, C);
  if (E)
    return S;
  const N = Rx(t, b, k, c), q = Lx(N), z = Px(t, H, q);
  let W = i ? i(z, a) : z;
  return d && ue(W) && (W = yO(W)), W;
}
function Ix(t) {
  pt(t.list) ? t.list = t.list.map((e) => ue(e) ? Sh(e) : e) : $e(t.named) && Object.keys(t.named).forEach((e) => {
    ue(t.named[e]) && (t.named[e] = Sh(t.named[e]));
  });
}
function mv(t, e, n, i, r, s) {
  const { messages: o, onWarn: l, messageResolver: a, localeFallbacker: c } = t, u = c(t, i, n);
  let f = Ge(), d, h = null;
  const p = "translate";
  for (let v = 0; v < u.length && (d = u[v], f = o[d] || Ge(), (h = a(f, e)) === null && (h = f[e]), !(ue(h) || oi(h) || Mi(h))); v++)
    if (!kx(d, u)) {
      const y = wf(
        t,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        e,
        d,
        s,
        p
      );
      y !== e && (h = y);
    }
  return [h, d, f];
}
function vv(t, e, n, i, r, s) {
  const { messageCompiler: o, warnHtmlMessage: l } = t;
  if (Mi(i)) {
    const c = i;
    return c.locale = c.locale || n, c.key = c.key || e, c;
  }
  if (o == null) {
    const c = () => i;
    return c.locale = n, c.key = e, c;
  }
  const a = o(i, Dx(t, n, r, i, l, s));
  return a.locale = n, a.key = e, a.source = i, a;
}
function Px(t, e, n) {
  return e(n);
}
function Ic(...t) {
  const [e, n, i] = t, r = Ge();
  if (!ue(e) && !xt(e) && !Mi(e) && !oi(e))
    throw Ti(Ei.INVALID_ARGUMENT);
  const s = xt(e) ? String(e) : (Mi(e), e);
  return xt(n) ? r.plural = n : ue(n) ? r.default = n : Fe(n) && !ma(n) ? r.named = n : pt(n) && (r.list = n), xt(i) ? r.plural = i : ue(i) ? r.default = i : Fe(i) && Vt(r, i), [s, r];
}
function Dx(t, e, n, i, r, s) {
  return {
    locale: e,
    key: n,
    warnHtmlMessage: r,
    onError: (o) => {
      throw s && s(o), o;
    },
    onCacheKey: (o) => pO(e, n, o)
  };
}
function Rx(t, e, n, i) {
  const { modifiers: r, pluralRules: s, messageResolver: o, fallbackLocale: l, fallbackWarn: a, missingWarn: c, fallbackContext: u } = t, d = {
    locale: e,
    modifiers: r,
    pluralRules: s,
    messages: (h, p) => {
      let v = o(n, h);
      if (v == null && (u || p)) {
        const [, , y] = mv(
          u || t,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          h,
          e,
          l,
          a,
          c
        );
        v = o(y, h);
      }
      if (ue(v) || oi(v)) {
        let y = !1;
        const b = vv(t, h, e, v, h, () => {
          y = !0;
        });
        return y ? Bh : b;
      } else return Mi(v) ? v : Bh;
    }
  };
  return t.processor && (d.processor = t.processor), i.list && (d.list = i.list), i.named && (d.named = i.named), xt(i.plural) && (d.pluralIndex = i.plural), d;
}
jO();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Nx = "11.2.2";
function Fx() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (al().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (al().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (al().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const os = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: ix,
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
function io(t, ...e) {
  return va(t, null, void 0);
}
const Pc = /* @__PURE__ */ Pr("__translateVNode"), Dc = /* @__PURE__ */ Pr("__datetimeParts"), Rc = /* @__PURE__ */ Pr("__numberParts"), $x = Pr("__setPluralRules"), yv = /* @__PURE__ */ Pr("__injectWithOption"), Nc = /* @__PURE__ */ Pr("__dispose");
function ro(t) {
  if (!$e(t) || oi(t))
    return t;
  for (const e in t)
    if ($n(t, e))
      if (!e.includes("."))
        $e(t[e]) && ro(t[e]);
      else {
        const n = e.split("."), i = n.length - 1;
        let r = t, s = !1;
        for (let o = 0; o < i; o++) {
          if (n[o] === "__proto__")
            throw new Error(`unsafe key: ${n[o]}`);
          if (n[o] in r || (r[n[o]] = Ge()), !$e(r[n[o]])) {
            s = !0;
            break;
          }
          r = r[n[o]];
        }
        if (s || (oi(r) ? av.includes(n[i]) || delete t[e] : (r[n[i]] = t[e], delete t[e])), !oi(r)) {
          const o = r[n[i]];
          $e(o) && ro(o);
        }
      }
  return t;
}
function bv(t, e) {
  const { messages: n, __i18n: i, messageResolver: r, flatJson: s } = e, o = Fe(n) ? n : pt(i) ? Ge() : { [t]: Ge() };
  if (pt(i) && i.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: a, resource: c } = l;
      a ? (o[a] = o[a] || Ge(), cl(c, o[a])) : cl(c, o);
    } else
      ue(l) && cl(JSON.parse(l), o);
  }), r == null && s)
    for (const l in o)
      $n(o, l) && ro(o[l]);
  return o;
}
function Bx(t) {
  return t.type;
}
function Vx(t, e, n) {
  let i = $e(e.messages) ? e.messages : Ge();
  "__i18nGlobal" in n && (i = bv(t.locale.value, {
    messages: i,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(i);
  r.length && r.forEach((s) => {
    t.mergeLocaleMessage(s, i[s]);
  });
  {
    if ($e(e.datetimeFormats)) {
      const s = Object.keys(e.datetimeFormats);
      s.length && s.forEach((o) => {
        t.mergeDateTimeFormat(o, e.datetimeFormats[o]);
      });
    }
    if ($e(e.numberFormats)) {
      const s = Object.keys(e.numberFormats);
      s.length && s.forEach((o) => {
        t.mergeNumberFormat(o, e.numberFormats[o]);
      });
    }
  }
}
function Hh(t) {
  return Z(Lu, null, t, 0);
}
function wv() {
  return "currentInstance" in Ia ? Ia["currentInstance"] : Ia.getCurrentInstance();
}
const Wh = () => [], Hx = () => !1;
let zh = 0;
function Gh(t) {
  return (e, n, i, r) => t(n, i, wv() || void 0, r);
}
function Wx(t = {}) {
  const { __root: e, __injectWithOption: n } = t, i = e === void 0, r = t.flatJson, s = bh ? I : Qi;
  let o = ht(t.inheritLocale) ? t.inheritLocale : !0;
  const l = s(
    // prettier-ignore
    e && o ? e.locale.value : ue(t.locale) ? t.locale : Nl
  ), a = s(
    // prettier-ignore
    e && o ? e.fallbackLocale.value : ue(t.fallbackLocale) || pt(t.fallbackLocale) || Fe(t.fallbackLocale) || t.fallbackLocale === !1 ? t.fallbackLocale : l.value
  ), c = s(bv(l.value, t)), u = s(Fe(t.datetimeFormats) ? t.datetimeFormats : { [l.value]: {} }), f = s(Fe(t.numberFormats) ? t.numberFormats : { [l.value]: {} });
  let d = e ? e.missingWarn : ht(t.missingWarn) || Rl(t.missingWarn) ? t.missingWarn : !0, h = e ? e.fallbackWarn : ht(t.fallbackWarn) || Rl(t.fallbackWarn) ? t.fallbackWarn : !0, p = e ? e.fallbackRoot : ht(t.fallbackRoot) ? t.fallbackRoot : !0, v = !!t.fallbackFormat, y = st(t.missing) ? t.missing : null, g = st(t.missing) ? Gh(t.missing) : null, b = st(t.postTranslation) ? t.postTranslation : null, k = e ? e.warnHtmlMessage : ht(t.warnHtmlMessage) ? t.warnHtmlMessage : !0, S = !!t.escapeParameter;
  const _ = e ? e.modifiers : Fe(t.modifiers) ? t.modifiers : {};
  let E = t.pluralRules || e && e.pluralRules, C;
  C = (() => {
    i && Ih(null);
    const A = {
      version: Nx,
      locale: l.value,
      fallbackLocale: a.value,
      messages: c.value,
      modifiers: _,
      pluralRules: E,
      missing: g === null ? void 0 : g,
      missingWarn: d,
      fallbackWarn: h,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: b === null ? void 0 : b,
      warnHtmlMessage: k,
      escapeParameter: S,
      messageResolver: t.messageResolver,
      messageCompiler: t.messageCompiler,
      __meta: { framework: "vue" }
    };
    A.datetimeFormats = u.value, A.numberFormats = f.value, A.__datetimeFormatters = Fe(C) ? C.__datetimeFormatters : void 0, A.__numberFormatters = Fe(C) ? C.__numberFormatters : void 0;
    const F = Sx(A);
    return i && Ih(F), F;
  })(), ks(C, l.value, a.value);
  function N() {
    return [
      l.value,
      a.value,
      c.value,
      u.value,
      f.value
    ];
  }
  const q = M({
    get: () => l.value,
    set: (A) => {
      C.locale = A, l.value = A;
    }
  }), z = M({
    get: () => a.value,
    set: (A) => {
      C.fallbackLocale = A, a.value = A, ks(C, l.value, A);
    }
  }), W = M(() => c.value), te = /* @__PURE__ */ M(() => u.value), ge = /* @__PURE__ */ M(() => f.value);
  function D() {
    return st(b) ? b : null;
  }
  function B(A) {
    b = A, C.postTranslation = A;
  }
  function V() {
    return y;
  }
  function ce(A) {
    A !== null && (g = Gh(A)), y = A, C.missing = g;
  }
  const ae = (A, F, me, Ee, et, mi) => {
    N();
    let sn;
    try {
      i || (C.fallbackContext = e ? wx() : void 0), sn = A(C);
    } finally {
      i || (C.fallbackContext = void 0);
    }
    if (me !== "translate exists" && // for not `te` (e.g `t`)
    xt(sn) && sn === ya || me === "translate exists" && !sn) {
      const [bs, _o] = F();
      return e && p ? Ee(e) : et(bs);
    } else {
      if (mi(sn))
        return sn;
      throw io(os.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ke(...A) {
    return ae((F) => Reflect.apply(Vh, null, [F, ...A]), () => Ic(...A), "translate", (F) => Reflect.apply(F.t, F, [...A]), (F) => F, (F) => ue(F));
  }
  function Oe(...A) {
    const [F, me, Ee] = A;
    if (Ee && !$e(Ee))
      throw io(os.INVALID_ARGUMENT);
    return ke(F, me, Vt({ resolvedMessage: !0 }, Ee || {}));
  }
  function Ae(...A) {
    return ae((F) => Reflect.apply(Dh, null, [F, ...A]), () => Mc(...A), "datetime format", (F) => Reflect.apply(F.d, F, [...A]), () => Mh, (F) => ue(F) || pt(F));
  }
  function be(...A) {
    return ae((F) => Reflect.apply(Nh, null, [F, ...A]), () => Lc(...A), "number format", (F) => Reflect.apply(F.n, F, [...A]), () => Mh, (F) => ue(F) || pt(F));
  }
  function We(A) {
    return A.map((F) => ue(F) || xt(F) || ht(F) ? Hh(String(F)) : F);
  }
  const ze = {
    normalize: We,
    interpolate: (A) => A,
    type: "vnode"
  };
  function Qe(...A) {
    return ae((F) => {
      let me;
      const Ee = F;
      try {
        Ee.processor = ze, me = Reflect.apply(Vh, null, [Ee, ...A]);
      } finally {
        Ee.processor = null;
      }
      return me;
    }, () => Ic(...A), "translate", (F) => F[Pc](...A), (F) => [Hh(F)], (F) => pt(F));
  }
  function Ie(...A) {
    return ae((F) => Reflect.apply(Nh, null, [F, ...A]), () => Lc(...A), "number format", (F) => F[Rc](...A), Wh, (F) => ue(F) || pt(F));
  }
  function bt(...A) {
    return ae((F) => Reflect.apply(Dh, null, [F, ...A]), () => Mc(...A), "datetime format", (F) => F[Dc](...A), Wh, (F) => ue(F) || pt(F));
  }
  function It(A) {
    E = A, C.pluralRules = E;
  }
  function Pt(A, F) {
    return ae(() => {
      if (!A)
        return !1;
      const me = ue(F) ? F : l.value, Ee = wt(me), et = C.messageResolver(Ee, A);
      return oi(et) || Mi(et) || ue(et);
    }, () => [A], "translate exists", (me) => Reflect.apply(me.te, me, [A, F]), Hx, (me) => ht(me));
  }
  function Wt(A) {
    let F = null;
    const me = cv(C, a.value, l.value);
    for (let Ee = 0; Ee < me.length; Ee++) {
      const et = c.value[me[Ee]] || {}, mi = C.messageResolver(et, A);
      if (mi != null) {
        F = mi;
        break;
      }
    }
    return F;
  }
  function At(A) {
    const F = Wt(A);
    return F ?? (e ? e.tm(A) || {} : {});
  }
  function wt(A) {
    return c.value[A] || {};
  }
  function ot(A, F) {
    if (r) {
      const me = { [A]: F };
      for (const Ee in me)
        $n(me, Ee) && ro(me[Ee]);
      F = me[A];
    }
    c.value[A] = F, C.messages = c.value;
  }
  function zt(A, F) {
    c.value[A] = c.value[A] || {};
    const me = { [A]: F };
    if (r)
      for (const Ee in me)
        $n(me, Ee) && ro(me[Ee]);
    F = me[A], cl(F, c.value[A]), C.messages = c.value;
  }
  function Dt(A) {
    return u.value[A] || {};
  }
  function O(A, F) {
    u.value[A] = F, C.datetimeFormats = u.value, Rh(C, A, F);
  }
  function w(A, F) {
    u.value[A] = Vt(u.value[A] || {}, F), C.datetimeFormats = u.value, Rh(C, A, F);
  }
  function L(A) {
    return f.value[A] || {};
  }
  function K(A, F) {
    f.value[A] = F, C.numberFormats = f.value, Fh(C, A, F);
  }
  function de(A, F) {
    f.value[A] = Vt(f.value[A] || {}, F), C.numberFormats = f.value, Fh(C, A, F);
  }
  zh++, e && bh && (pe(e.locale, (A) => {
    o && (l.value = A, C.locale = A, ks(C, l.value, a.value));
  }), pe(e.fallbackLocale, (A) => {
    o && (a.value = A, C.fallbackLocale = A, ks(C, l.value, a.value));
  }));
  const he = {
    id: zh,
    locale: q,
    fallbackLocale: z,
    get inheritLocale() {
      return o;
    },
    set inheritLocale(A) {
      o = A, A && e && (l.value = e.locale.value, a.value = e.fallbackLocale.value, ks(C, l.value, a.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: W,
    get modifiers() {
      return _;
    },
    get pluralRules() {
      return E || {};
    },
    get isGlobal() {
      return i;
    },
    get missingWarn() {
      return d;
    },
    set missingWarn(A) {
      d = A, C.missingWarn = d;
    },
    get fallbackWarn() {
      return h;
    },
    set fallbackWarn(A) {
      h = A, C.fallbackWarn = h;
    },
    get fallbackRoot() {
      return p;
    },
    set fallbackRoot(A) {
      p = A;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(A) {
      v = A, C.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return k;
    },
    set warnHtmlMessage(A) {
      k = A, C.warnHtmlMessage = A;
    },
    get escapeParameter() {
      return S;
    },
    set escapeParameter(A) {
      S = A, C.escapeParameter = A;
    },
    t: ke,
    getLocaleMessage: wt,
    setLocaleMessage: ot,
    mergeLocaleMessage: zt,
    getPostTranslationHandler: D,
    setPostTranslationHandler: B,
    getMissingHandler: V,
    setMissingHandler: ce,
    [$x]: It
  };
  return he.datetimeFormats = te, he.numberFormats = ge, he.rt = Oe, he.te = Pt, he.tm = At, he.d = Ae, he.n = be, he.getDateTimeFormat = Dt, he.setDateTimeFormat = O, he.mergeDateTimeFormat = w, he.getNumberFormat = L, he.setNumberFormat = K, he.mergeNumberFormat = de, he[yv] = n, he[Pc] = Qe, he[Dc] = bt, he[Rc] = Ie, he;
}
const Sf = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (t) => t === "parent" || t === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function zx({ slots: t }, e) {
  return e.length === 1 && e[0] === "default" ? (t.default ? t.default() : []).reduce((i, r) => [
    ...i,
    // prettier-ignore
    ...r.type === _e ? r.children : [r]
  ], []) : e.reduce((n, i) => {
    const r = t[i];
    return r && (n[i] = r()), n;
  }, Ge());
}
function Sv() {
  return _e;
}
Vt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (t) => xt(t) || !isNaN(t)
  }
}, Sf);
function Gx(t) {
  return pt(t) && !ue(t[0]);
}
function Cv(t, e, n, i) {
  const { slots: r, attrs: s } = e;
  return () => {
    const o = { part: !0 };
    let l = Ge();
    t.locale && (o.locale = t.locale), ue(t.format) ? o.key = t.format : $e(t.format) && (ue(t.format.key) && (o.key = t.format.key), l = Object.keys(t.format).reduce((d, h) => n.includes(h) ? Vt(Ge(), d, { [h]: t.format[h] }) : d, Ge()));
    const a = i(t.value, o, l);
    let c = [o.key];
    pt(a) ? c = a.map((d, h) => {
      const p = r[d.type], v = p ? p({ [d.type]: d.value, index: h, parts: a }) : [d.value];
      return Gx(v) && (v[0].key = `${d.type}-${h}`), v;
    }) : ue(a) && (c = [a]);
    const u = Vt(Ge(), s), f = ue(t.tag) || $e(t.tag) ? t.tag : Sv();
    return Iu(f, u, c);
  };
}
Vt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Sf);
const Ux = /* @__PURE__ */ Pr("global-vue-i18n");
function Dr(t = {}) {
  const e = wv();
  if (e == null)
    throw io(os.MUST_BE_CALL_SETUP_TOP);
  if (!e.isCE && e.appContext.app != null && !e.appContext.app.__VUE_I18N_SYMBOL__)
    throw io(os.NOT_INSTALLED);
  const n = jx(e), i = Yx(n), r = Bx(e), s = Kx(t, r);
  if (s === "global")
    return Vx(i, t, r), i;
  if (s === "parent") {
    let a = qx(n, e, t.__useComponent);
    return a == null && (a = i), a;
  }
  const o = n;
  let l = o.__getInstance(e);
  if (l == null) {
    const a = Vt({}, t);
    "__i18n" in r && (a.__i18n = r.__i18n), i && (a.__root = i), l = Wx(a), o.__composerExtend && (l[Nc] = o.__composerExtend(l)), Xx(o, e, l), o.__setInstance(e, l);
  }
  return l;
}
function jx(t) {
  const e = ye(t.isCE ? Ux : t.appContext.app.__VUE_I18N_SYMBOL__);
  if (!e)
    throw io(t.isCE ? os.NOT_INSTALLED_WITH_PROVIDE : os.UNEXPECTED_ERROR);
  return e;
}
function Kx(t, e) {
  return ma(t) ? "__i18n" in e ? "local" : "global" : t.useScope ? t.useScope : "local";
}
function Yx(t) {
  return t.mode === "composition" ? t.global : t.global.__composer;
}
function qx(t, e, n = !1) {
  let i = null;
  const r = e.root;
  let s = Jx(e, n);
  for (; s != null; ) {
    const o = t;
    if (t.mode === "composition")
      i = o.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = o.__getInstance(s);
      l != null && (i = l.__composer, n && i && !i[yv] && (i = null));
    }
    if (i != null || r === s)
      break;
    s = s.parent;
  }
  return i;
}
function Jx(t, e = !1) {
  return t == null ? null : e && t.vnode.ctx || t.parent;
}
function Xx(t, e, n) {
  it(() => {
  }, e), Jr(() => {
    const i = n;
    t.__deleteInstance(e);
    const r = i[Nc];
    r && (r(), delete i[Nc]);
  }, e);
}
Vt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Sf);
Fx();
vx(nx);
yx(px);
bx(cv);
const Zx = ["disabled"], Qx = {
  key: 0,
  class: "custom-button__loading"
}, eM = /* @__PURE__ */ Q({
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
    return (n, i) => (x(), R("button", {
      class: U([
        "custom-button",
        `custom-button--${e.type || "default"}`,
        e.size ? `custom-button--${e.size}` : "custom-button--medium",
        { "custom-button--loading": e.loading },
        { "custom-button--circle": e.circle },
        { "custom-button--plain": e.plain }
      ]),
      disabled: t.loading || t.disabled,
      onClick: i[0] || (i[0] = (r) => n.$emit("click", r))
    }, [
      t.loading ? (x(), R("div", Qx, i[1] || (i[1] = [
        T(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            T("circle", {
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
      oe(n.$slots, "default", {}, void 0, !0)
    ], 10, Zx));
  }
}), $i = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [i, r] of e)
    n[i] = r;
  return n;
}, Vn = /* @__PURE__ */ $i(eM, [["__scopeId", "data-v-9497085f"]]), tM = /* @__PURE__ */ Q({
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
    const n = t, i = e, r = () => {
      if (n.disabled) return;
      const s = !n.modelValue;
      i("update:modelValue", s), i("change", s);
    };
    return (s, o) => (x(), R(
      "div",
      {
        class: U(["custom-switch", {
          "custom-switch--active": t.modelValue,
          "custom-switch--disabled": t.disabled
        }]),
        onClick: r
      },
      [
        t.activeText || t.inactiveText ? (x(), R(
          "span",
          {
            key: 0,
            class: U(["custom-switch__text", { "custom-switch__text--active": t.modelValue }])
          },
          G(t.modelValue ? t.activeText : t.inactiveText),
          3
          /* TEXT, CLASS */
        )) : j("v-if", !0),
        o[0] || (o[0] = T(
          "div",
          { class: "custom-switch__core" },
          [
            T("div", { class: "custom-switch__handle" })
          ],
          -1
          /* HOISTED */
        ))
      ],
      2
      /* CLASS */
    ));
  }
}), Ua = /* @__PURE__ */ $i(tM, [["__scopeId", "data-v-09573d1e"]]), nM = { class: "dialog-footer-default" }, iM = { class: "footer-left" }, rM = { class: "footer-right" }, sM = /* @__PURE__ */ Q({
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
    const i = t, r = n, s = I(i.modelValue), o = M(() => ["app-dialog", i.customClass].filter(Boolean).join(" "));
    pe(
      () => i.modelValue,
      (u) => {
        s.value = u;
      }
    ), pe(s, (u) => {
      r("update:modelValue", u);
    });
    const l = () => {
      r("close");
    }, a = () => {
      r("confirm");
    }, c = () => {
      s.value = !1, r("cancel");
    };
    return e({
      open: () => {
        s.value = !0;
      },
      close: () => {
        s.value = !1;
      }
    }), (u, f) => {
      const d = PT;
      return x(), se(d, {
        modelValue: m(s),
        "onUpdate:modelValue": f[0] || (f[0] = (h) => Qt(s) ? s.value = h : null),
        title: u.title,
        width: u.width,
        "close-on-click-modal": u.closeOnClickModal,
        draggable: u.draggable,
        center: u.center,
        "show-close": u.showClose,
        "close-on-press-escape": u.closeOnPressEscape,
        "append-to-body": u.appendToBody,
        "align-center": u.alignCenter,
        "custom-class": m(o),
        onClose: l
      }, ea({
        default: X(() => [
          oe(u.$slots, "default", {}, void 0, !0)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        u.$slots.header ? {
          name: "header",
          fn: X(() => [
            oe(u.$slots, "header", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        u.$slots.footer || u.showDefaultFooter ? {
          name: "footer",
          fn: X(() => [
            oe(u.$slots, "footer", {}, () => [
              T("div", nM, [
                T("div", iM, [
                  oe(u.$slots, "footer-left", {}, void 0, !0)
                ]),
                T("div", rM, [
                  Z(Vn, { onClick: c }, {
                    default: X(() => [
                      Ve(
                        G(u.cancelText),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  Z(Vn, {
                    type: "primary",
                    loading: u.loading,
                    onClick: a
                  }, {
                    default: X(() => [
                      Ve(
                        G(u.confirmText),
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
}), Cf = /* @__PURE__ */ $i(sM, [["__scopeId", "data-v-a7e8a5d6"]]), oM = { class: "select-confirm-content" }, lM = { class: "mb-4" }, aM = { class: "select-confirm-footer" }, cM = /* @__PURE__ */ Q({
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
    const i = t, r = n, s = I(i.modelValue), o = I(i.defaultValue);
    pe(
      () => i.modelValue,
      (c) => {
        s.value = c, c && (o.value = i.defaultValue);
      }
    ), pe(
      () => i.defaultValue,
      (c) => {
        s.value && (o.value = c);
      }
    ), pe(s, (c) => {
      r("update:modelValue", c);
    });
    const l = () => {
      r("confirm", o.value);
    }, a = () => {
      s.value = !1, r("cancel");
    };
    return e({
      open: () => {
        s.value = !0, o.value = i.defaultValue;
      },
      close: () => {
        s.value = !1;
      }
    }), (c, u) => {
      const f = qm, d = Ym;
      return x(), se(Cf, {
        modelValue: m(s),
        "onUpdate:modelValue": u[1] || (u[1] = (h) => Qt(s) ? s.value = h : null),
        title: c.title,
        width: c.width,
        center: c.center,
        "show-close": c.showClose
      }, {
        footer: X(() => [
          T("div", aM, [
            Z(Vn, {
              type: "default",
              onClick: a
            }, {
              default: X(() => [
                Ve(
                  G(c.cancelText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            Z(Vn, {
              type: "primary",
              loading: c.loading,
              onClick: l
            }, {
              default: X(() => [
                Ve(
                  G(c.confirmText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        default: X(() => [
          T("div", oM, [
            T(
              "div",
              lM,
              G(c.message),
              1
              /* TEXT */
            ),
            Z(d, {
              modelValue: m(o),
              "onUpdate:modelValue": u[0] || (u[0] = (h) => Qt(o) ? o.value = h : null),
              class: "w-full",
              placeholder: c.selectPlaceholder
            }, {
              default: X(() => [
                (x(!0), R(
                  _e,
                  null,
                  Ct(c.options, (h) => (x(), se(f, {
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
}), uM = /* @__PURE__ */ $i(cM, [["__scopeId", "data-v-f4b56648"]]), qe = {
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
      duration: r = 3e3,
      showClose: s = !1
    } = t;
    i === "center" ? iO({
      message: e,
      type: n,
      duration: r,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : dO({
      message: e,
      type: n,
      position: i,
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
function fM(t, e, n, i) {
  if (typeof e == "function" ? t !== e || !0 : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? i : n === "a" ? i.call(t) : i ? i.value : e.get(t);
}
function dM(t, e, n, i, r) {
  if (typeof e == "function" ? t !== e || !0 : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(t, n), n;
}
var ul;
const Ln = "__TAURI_TO_IPC_KEY__";
function hM(t, e = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(t, e);
}
async function Y(t, e = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(t, e, n);
}
class pM {
  get rid() {
    return fM(this, ul, "f");
  }
  constructor(e) {
    ul.set(this, void 0), dM(this, ul, e);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return Y("plugin:resources|close", {
      rid: this.rid
    });
  }
}
ul = /* @__PURE__ */ new WeakMap();
const gM = "snippets-code:developer-mode", kv = "snippets-code:frontend-diagnostics", mM = 240, _s = "[REDACTED]", fl = (t) => t.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${_s}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${_s}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  _s
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${_s}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${_s}`
), _v = (t) => {
  if (t === void 0) return;
  if (typeof t == "string") return fl(t);
  const e = /* @__PURE__ */ new WeakSet();
  try {
    return fl(
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
    return fl(String(t));
  }
}, vM = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, yM = () => {
  if (typeof localStorage > "u") return [];
  try {
    const t = JSON.parse(localStorage.getItem(kv) || "[]");
    return Array.isArray(t) ? t : [];
  } catch {
    return [];
  }
}, kf = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(gM) === "true";
  } catch {
    return !1;
  }
}, bM = (t, e, n) => {
  if (!kf() || typeof localStorage > "u") return;
  const i = yM();
  i.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: t,
    windowLabel: vM(),
    message: fl(e),
    data: _v(n)
  });
  try {
    localStorage.setItem(
      kv,
      JSON.stringify(i.slice(-mM))
    );
  } catch {
  }
}, wM = () => kf(), SM = (t) => t === "error" || kf(), Bo = (t, e, n) => {
  bM(t, e, n), SM(t) && Y("frontend_log", {
    level: t,
    message: e,
    data: n === void 0 ? null : _v(n)
  }).catch(() => {
  });
}, Ce = {
  info: (t, e, ...n) => {
    Bo("info", t, e);
  },
  error: (t, e) => {
    Bo("error", t, e);
  },
  warn: (t, e) => {
    Bo("warn", t, e);
  },
  debug: (t, e) => {
    wM() && Bo("debug", t, e);
  }
}, CM = { class: "confirm-choice-body" }, kM = { class: "message-row" }, _M = { class: "message-text" }, EM = {
  key: 0,
  class: "hint-list"
}, TM = { class: "confirm-footer" }, AM = /* @__PURE__ */ Q({
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
    const i = t, r = n, s = I(i.modelValue), o = I(!1), l = M(() => {
      switch (i.type) {
        case "warning":
          return "!";
        case "danger":
          return "!";
        default:
          return "i";
      }
    }), a = M(
      () => `confirm-choice-dialog ${i.type === "danger" ? "delete-dialog" : i.type === "warning" ? "warning-dialog" : ""}`
    ), c = M(() => {
      const v = i.message || "", y = v.split(`
`).filter(Boolean), g = [];
      for (const b of y) {
        const k = b.trim();
        if (/^[•·\-]\s*/.test(k)) break;
        k && g.push(b);
      }
      return g.join(`
`) || y[0] || v;
    }), u = M(() => {
      const y = (i.message || "").split(`
`).filter(Boolean), g = [];
      for (const b of y) {
        const S = b.trim().match(/^[•·\-]\s*(.+)$/);
        S && g.push(S[1].trim());
      }
      return g;
    });
    pe(
      () => i.modelValue,
      (v) => {
        s.value = v;
      }
    ), pe(s, (v) => {
      r("update:modelValue", v);
    });
    function f() {
      p(), r("primary");
    }
    function d() {
      p(), r("secondary");
    }
    function h() {
      if (s.value = !1, o.value) {
        o.value = !1;
        return;
      }
      r("close");
    }
    function p() {
      o.value = !0, s.value = !1;
    }
    return e({
      open: () => {
        s.value = !0;
      },
      close: () => {
        s.value = !1;
      }
    }), (v, y) => (x(), se(Cf, {
      modelValue: m(s),
      "onUpdate:modelValue": y[0] || (y[0] = (g) => Qt(s) ? s.value = g : null),
      title: v.title,
      width: "440px",
      "custom-class": m(a),
      onClose: h
    }, {
      footer: X(() => [
        T("div", TM, [
          v.secondaryText ? (x(), se(Vn, {
            key: 0,
            onClick: d
          }, {
            default: X(() => [
              Ve(
                G(v.secondaryText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          })) : j("v-if", !0),
          Z(Vn, {
            type: v.type === "danger" ? "danger" : "primary",
            onClick: f
          }, {
            default: X(() => [
              Ve(
                G(v.primaryText),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["type"])
        ])
      ]),
      default: X(() => [
        T("div", CM, [
          T("div", kM, [
            T(
              "span",
              {
                class: U(["type-indicator", `type-${v.type}`])
              },
              G(m(l)),
              3
              /* TEXT, CLASS */
            ),
            T(
              "div",
              _M,
              G(m(c)),
              1
              /* TEXT */
            )
          ]),
          m(u).length ? (x(), R("div", EM, [
            (x(!0), R(
              _e,
              null,
              Ct(m(u), (g, b) => (x(), R("div", {
                key: b,
                class: "hint-item"
              }, [
                y[1] || (y[1] = T(
                  "span",
                  { class: "hint-dot" },
                  null,
                  -1
                  /* HOISTED */
                )),
                T(
                  "span",
                  null,
                  G(g),
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
}), Hs = /* @__PURE__ */ $i(AM, [["__scopeId", "data-v-42ef6276"]]);
var hn;
(function(t) {
  t.WINDOW_RESIZED = "tauri://resize", t.WINDOW_MOVED = "tauri://move", t.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", t.WINDOW_DESTROYED = "tauri://destroyed", t.WINDOW_FOCUS = "tauri://focus", t.WINDOW_BLUR = "tauri://blur", t.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", t.WINDOW_THEME_CHANGED = "tauri://theme-changed", t.WINDOW_CREATED = "tauri://window-created", t.WEBVIEW_CREATED = "tauri://webview-created", t.DRAG_ENTER = "tauri://drag-enter", t.DRAG_OVER = "tauri://drag-over", t.DRAG_DROP = "tauri://drag-drop", t.DRAG_LEAVE = "tauri://drag-leave";
})(hn || (hn = {}));
async function Ev(t, e) {
  await Y("plugin:event|unlisten", {
    event: t,
    eventId: e
  });
}
async function Kt(t, e, n) {
  var i;
  const r = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (i = n?.target) !== null && i !== void 0 ? i : { kind: "Any" };
  return Y("plugin:event|listen", {
    event: t,
    target: r,
    handler: hM(e)
  }).then((s) => async () => Ev(t, s));
}
async function OM(t, e, n) {
  return Kt(t, (i) => {
    Ev(t, i.id), e(i);
  }, n);
}
async function Tv(t, e) {
  await Y("plugin:event|emit", {
    event: t,
    payload: e
  });
}
async function xM(t, e, n) {
  await Y("plugin:event|emit_to", {
    target: typeof t == "string" ? { kind: "AnyLabel", label: t } : t,
    event: e,
    payload: n
  });
}
async function ba() {
  try {
    return await Y("get_git_settings_command");
  } catch (t) {
    throw new Error(`获取 Git 设置失败: ${t}`);
  }
}
async function MM(t) {
  try {
    await Y("update_git_settings_command", { settings: t }), Tv("git-settings-changed").catch(() => {
    });
  } catch (e) {
    throw new Error(`更新 Git 设置失败: ${e}`);
  }
}
var Fc = /* @__PURE__ */ ((t) => (t.KeepLocal = "KeepLocal", t.KeepRemote = "KeepRemote", t))(Fc || {});
async function LM() {
  try {
    return await Y("check_git_repo_command");
  } catch (t) {
    throw new Error(`检查 Git 仓库失败: ${t}`);
  }
}
async function Av() {
  try {
    return await Y("get_git_status_command");
  } catch (t) {
    throw new Error(`获取 Git 状态失败: ${t}`);
  }
}
async function IM(t = 10) {
  try {
    return await Y("get_git_records_command", { limit: t });
  } catch (e) {
    throw new Error(`获取 Git 记录失败: ${e}`);
  }
}
async function PM(t) {
  try {
    return await Y("get_git_contribution_activity_command", { year: t });
  } catch (e) {
    throw new Error(`获取 Git 提交活跃度失败: ${e}`);
  }
}
async function DM(t, e) {
  try {
    await Y("restore_git_record_file_command", { commitHash: t, filePath: e });
  } catch (n) {
    throw new Error(`恢复 Git 记录文件失败: ${n}`);
  }
}
async function RM(t, e, n, i) {
  try {
    await Y("init_git_repository_command", { userName: t, userEmail: e, remoteUrl: n, token: i });
  } catch (r) {
    throw new Error(`Git 仓库初始化失败: ${r}`);
  }
}
async function $c() {
  try {
    return await Y("git_pull_command");
  } catch (t) {
    throw new Error(`Git pull 失败: ${t}`);
  }
}
async function Uh(t) {
  try {
    await Y("switch_git_branch_command", { branch: t });
  } catch (e) {
    throw new Error(`切换 Git 分支失败: ${e}`);
  }
}
async function Ov(t) {
  try {
    await Y("remove_untracked_file_command", { filePath: t });
  } catch (e) {
    throw new Error(`删除未跟踪文件失败: ${e}`);
  }
}
async function NM(t) {
  try {
    return await Y("git_push_command", { message: t });
  } catch (e) {
    throw new Error(`Git push 失败: ${e}`);
  }
}
async function Fl() {
  try {
    await Y("start_auto_sync_command");
  } catch (t) {
    throw new Error(`启动自动同步失败: ${t}`);
  }
}
async function Bc() {
  try {
    await Y("stop_auto_sync_command");
  } catch (t) {
    throw new Error(`停止自动同步失败: ${t}`);
  }
}
async function FM() {
  try {
    return await Y("get_auto_sync_status_command");
  } catch (t) {
    return console.error("获取自动同步状态失败:", t), !1;
  }
}
async function xv() {
  try {
    await Y("pause_auto_sync_command");
  } catch (t) {
    throw new Error(`暂停自动同步失败: ${t}`);
  }
}
async function $M() {
  try {
    await Y("resume_auto_sync_command");
  } catch (t) {
    throw new Error(`恢复自动同步失败: ${t}`);
  }
}
async function BM(t) {
  try {
    return await Y("get_conflict_file_content", {
      filePath: t
    });
  } catch (e) {
    throw new Error(`获取冲突文件内容失败: ${e}`);
  }
}
async function VM(t) {
  try {
    return await Y("force_push_command", { message: t });
  } catch (e) {
    throw new Error(`强制推送失败: ${e}`);
  }
}
async function HM() {
  try {
    return await Y("force_pull_command");
  } catch (t) {
    throw new Error(`强制拉取失败: ${t}`);
  }
}
async function WM(t) {
  try {
    return await Y("resolve_conflicts_batch", { resolutions: t });
  } catch (e) {
    throw new Error(`批量解决冲突失败: ${e}`);
  }
}
async function zM() {
  try {
    return await Y("ensure_gitignore_command");
  } catch (t) {
    throw new Error(`确保 .gitignore 失败: ${t}`);
  }
}
const ft = I("disabled"), wi = I(null), zr = I(null), $r = I(null), Vo = I(!1);
let br = null, wr = null;
const ja = I(!1);
let Ho = 0, Ka = 0;
const Mv = I(0), Lv = I(Date.now());
let Ws = null, dl = null, hl = null, pl = null, gl = null;
const Iv = (t) => {
  const n = (t instanceof Error ? t.message : String(t)).toLowerCase();
  return [
    "工作区未设置",
    "工作区未配置",
    "workspace not set",
    "workspace is not set",
    "workspace root"
  ].some((i) => n.includes(i.toLowerCase()));
}, Pv = (t) => {
  const n = (t instanceof Error ? t.message : String(t)).toLowerCase();
  return n.includes("插件 'git-sync' 未启用") || n.includes('插件 "git-sync" 未启用') || n.includes("plugin 'git-sync'") && (n.includes("disabled") || n.includes("not enabled") || n.includes("未启用"));
};
function _f() {
  const t = M(() => !wi.value || !wi.value.is_repo ? 0 : wi.value.changed_files.length), e = M(() => {
    if (Mv.value, !zr.value) return "";
    const l = new Date(zr.value), a = Lv.value - l.getTime(), c = Math.floor(a / 6e4), u = Math.floor(c / 60), f = Math.floor(u / 24);
    return c < 1 ? "刚刚" : c < 60 ? `${c}分钟前` : u < 24 ? `${u}小时前` : f < 7 ? `${f}天前` : l.toLocaleDateString("zh-CN");
  }), n = M(() => {
    const l = $r.value;
    if (!l || !l.enabled)
      return "Git 同步已禁用";
    if (t.value > 0)
      return `${t.value} 个文件待同步`;
    switch (ft.value) {
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
    if ($r.value && !$r.value.enabled) {
      wi.value = null, ft.value = "disabled";
      return;
    }
    if (Vo.value || ft.value === "syncing") {
      ja.value = !0, Ce.debug("[GitStatus] 正在加载/同步中，标记待刷新");
      return;
    }
    Vo.value = !0;
    try {
      const l = await Av();
      wi.value = l, !l.is_repo || !$r.value?.enabled ? ft.value = "disabled" : l.has_changes ? ft.value = "has_changes" : ft.value = "synced";
    } catch (l) {
      if (Iv(l) || Pv(l)) {
        wi.value = null, ft.value = "disabled";
        return;
      }
      Ce.error("[GitStatus] 获取 Git 状态失败", l), ft.value = "error";
    } finally {
      Vo.value = !1, ja.value && (ja.value = !1, Ce.debug("[GitStatus] 执行待刷新请求"), setTimeout(() => i(), 100));
    }
  };
  return {
    syncState: ft,
    gitStatus: wi,
    pendingFilesCount: t,
    lastSyncTime: zr,
    gitSettings: $r,
    isLoading: Vo,
    refreshStatus: i,
    refreshSettings: async () => {
      try {
        const l = await ba();
        $r.value = l, l.enabled ? (ft.value === "disabled" && (ft.value = "idle"), l.last_sync_time && (zr.value = l.last_sync_time)) : ft.value = "disabled";
      } catch (l) {
        Ce.error("[GitStatus] 获取 Git 设置失败", l);
      }
    },
    formattedLastSyncTime: e,
    stateDescription: n,
    // 导出内部方法供外部调用
    _setSyncState: (l) => {
      ft.value = l;
    },
    _setLastSyncTime: (l) => {
      zr.value = l;
    }
  };
}
function GM() {
  Ws || (Ws = setInterval(() => {
    Lv.value = Date.now(), Mv.value += 1;
  }, 6e4)), Kt("git-pull-start", () => {
    ft.value = "syncing";
  }).then((t) => {
    dl = t;
  }), Kt("git-push-start", () => {
    ft.value = "syncing";
  }).then((t) => {
    hl = t;
  }), Kt("git-sync-complete", (t) => {
    t.payload.success ? (ft.value = "syncing", t.payload.last_sync_time && (zr.value = t.payload.last_sync_time)) : ft.value = "error", wr !== null && clearTimeout(wr), wr = setTimeout(() => {
      wr = null, Ce.debug("[GitStatus] git-sync-complete 防抖时间到，刷新状态"), Av().then((e) => {
        wi.value = e, e.has_changes ? ft.value = "has_changes" : ft.value = "synced";
      }).catch((e) => {
        if (Iv(e) || Pv(e)) {
          wi.value = null, ft.value = "disabled";
          return;
        }
        Ce.error("[GitStatus] git-sync-complete 后刷新状态失败", e), ft.value = "error";
      });
    }, 1e3);
  }).then((t) => {
    pl = t;
  });
}
function UM(t, e = 300) {
  Kt("git-workspace-changed", () => {
    Ho++, Ce.debug(`[GitStatus] 收到 git-workspace-changed 事件（累计: ${Ho}），防抖刷新`), br !== null && clearTimeout(br), br = setTimeout(async () => {
      br = null, Ka++;
      const n = Ho - Ka;
      n > 0 ? Ce.debug(`[GitStatus] 防抖时间到，执行刷新（合并了 ${n} 个事件，累计收到 ${Ho}，已执行 ${Ka}）`) : Ce.debug("[GitStatus] 防抖时间到，执行刷新"), await t();
    }, e);
  }).then((n) => {
    gl = n;
  });
}
function jM() {
  Ws && (clearInterval(Ws), Ws = null), br && (clearTimeout(br), br = null), wr && (clearTimeout(wr), wr = null), dl && (dl(), dl = null), hl && (hl(), hl = null), pl && (pl(), pl = null), gl && (gl(), gl = null);
}
function KM(t) {
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
function YM(t) {
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
const qM = { class: "settings-panel" }, JM = { class: "panel-header" }, XM = { class: "panel-title" }, ZM = { class: "panel-content" }, QM = { class: "sync-status-panel__left" }, e4 = { class: "sync-status-icon" }, t4 = { class: "sync-status-info" }, n4 = { class: "sync-status-label" }, i4 = { class: "sync-status-detail" }, r4 = {
  key: 1,
  class: "pending-count"
}, s4 = { class: "sync-status-panel__right" }, o4 = { class: "sync-pending-files-header" }, l4 = { class: "sync-pending-files-list" }, a4 = { class: "file-name" }, c4 = {
  key: 1,
  class: "contribution-section"
}, u4 = { class: "contribution-head" }, f4 = { class: "contribution-summary" }, d4 = { class: "summarize-label-title" }, h4 = { class: "summarize-label-desc" }, p4 = { class: "contribution-actions" }, g4 = ["disabled", "onClick"], m4 = {
  key: 0,
  class: "contribution-empty"
}, v4 = {
  key: 1,
  class: "contribution-empty"
}, y4 = ["aria-label"], b4 = { class: "contribution-body" }, w4 = {
  class: "contribution-weekdays",
  "aria-hidden": "true"
}, S4 = ["title"], C4 = { class: "contribution-footer" }, k4 = { class: "contribution-legend" }, _4 = { class: "settings-section-title" }, E4 = { class: "summarize-section" }, T4 = { class: "summarize-label" }, A4 = { class: "summarize-label-title" }, O4 = { class: "summarize-label-desc" }, x4 = { class: "summarize-input-wrapper" }, M4 = {
  key: 0,
  class: "summarize-section"
}, L4 = { class: "summarize-input-wrapper" }, I4 = { class: "summarize-section" }, P4 = { class: "summarize-label" }, D4 = { class: "summarize-label-title" }, R4 = { class: "summarize-label-desc" }, N4 = { class: "summarize-input-wrapper" }, F4 = { class: "summarize-section" }, $4 = { class: "summarize-label" }, B4 = { class: "summarize-label-title" }, V4 = { class: "summarize-label-desc" }, H4 = { class: "summarize-input-wrapper" }, W4 = {
  key: 1,
  class: "summarize-section transparent-input"
}, z4 = { class: "summarize-label" }, G4 = { class: "summarize-label-title" }, U4 = { class: "summarize-label-desc" }, j4 = { class: "summarize-input-wrapper" }, K4 = { class: "ml-2 text-sm text-panel" }, Y4 = { class: "settings-section-title" }, q4 = { class: "summarize-section" }, J4 = { class: "summarize-label" }, X4 = { class: "summarize-label-title" }, Z4 = { class: "summarize-label-desc" }, Q4 = { class: "summarize-input-wrapper flex gap-2" }, eL = { class: "git-records-section" }, tL = { class: "git-records-head" }, nL = {
  key: 0,
  class: "git-records-list"
}, iL = { class: "git-record-main" }, rL = ["title"], sL = { class: "git-record-time" }, oL = { class: "git-record-meta" }, lL = {
  key: 0,
  class: "git-record-files"
}, aL = ["title", "onClick"], cL = { class: "git-record-file-status" }, uL = { class: "git-record-file-name" }, fL = {
  key: 0,
  class: "git-record-more"
}, dL = {
  key: 1,
  class: "git-records-empty"
}, hL = /* @__PURE__ */ Q({
  name: "GitSync",
  __name: "index",
  setup(t) {
    const { t: e, locale: n } = Dr(), {
      syncState: i,
      pendingFilesCount: r,
      formattedLastSyncTime: s,
      gitStatus: o,
      refreshStatus: l,
      refreshSettings: a
    } = _f(), c = M(() => o.value?.changed_files ? o.value.changed_files : []), u = (P) => {
      switch (P) {
        case "syncing":
          return e("settings.gitSync.status.syncing") || "同步中";
        case "synced":
          return e("settings.gitSync.status.synced") || "已同步";
        case "has_changes":
          return e("settings.gitSync.status.hasChanges") || "有待同步";
        case "error":
          return e("settings.gitSync.status.error") || "同步出错";
        case "idle":
          return e("settings.gitSync.status.idle") || "空闲";
        case "disabled":
          return e("settings.gitSync.status.ready") || "就绪";
        default:
          return e("settings.gitSync.status.ready") || "就绪";
      }
    }, f = I({
      enabled: !1,
      user_name: "",
      user_email: "",
      token: "",
      remote_url: "",
      pull_on_start: !0,
      auto_sync: !1,
      auto_sync_delay: 1
    }), d = I(!1), h = I(!1), p = I(!1), v = I(!1), y = I({
      title: "",
      message: "",
      primaryText: "",
      secondaryText: "",
      type: "info"
    }), g = I(!1), b = I(null), k = I("main"), S = I(!1), _ = I(""), E = I([]), C = I([]), H = I(!1), N = I(!1), q = I(!1), z = I(null), W = I(null), te = I((/* @__PURE__ */ new Date()).getFullYear()), ge = I(!1), D = M(() => (b.value?.available_branches?.length ? b.value.available_branches : ["main"]).map((J) => ({
      label: J === "main" ? `${J}（主分支）` : J,
      value: J
    }))), B = M(() => b.value ? `${b.value.reason}
当前分支：${b.value.current_branch || "未知"}；建议选择：${b.value.recommended_branch}` : "请选择要同步的分支"), V = M(() => {
      const P = E.value.map((J) => `- ${J}`).join(`
`);
      return `目标分支会覆盖以下未跟踪文件。选择“使用目标分支文件”会先删除这些本地未跟踪文件，再切换到 ${_.value || "目标"} 分支。

${P}`;
    }), ce = M(() => {
      const P = z.value;
      return P ? `确认将文件恢复到这条记录之前的版本？

- 文件：${P.file.file_path}
- 记录：${P.record.short_hash} ${P.record.message}

当前文件内容会被覆盖，恢复后会出现在待同步列表中。` : "";
    }), ae = M(() => {
      if (W.value?.years.length)
        return W.value.years;
      const P = (/* @__PURE__ */ new Date()).getFullYear();
      return Array.from({ length: 5 }, (J, Pe) => P - Pe);
    }), ke = M(() => {
      const P = W.value;
      return P ? P.year === P.current_year ? e("settings.gitSync.contribution.totalLastYear", { count: P.total }) : e("settings.gitSync.contribution.totalYear", {
        year: P.year,
        count: P.total
      }) : e("settings.gitSync.contribution.title");
    }), Oe = M(() => {
      const P = W.value;
      return P ? `${P.start_date} - ${P.end_date}` : "";
    }), Ae = M(() => n.value.startsWith("zh") ? ["", "一", "", "三", "", "五", ""] : ["", "Mon", "", "Wed", "", "Fri", ""]), be = M(() => {
      const P = W.value;
      if (!P) return [];
      const J = Dt(P.start_date), Pe = [
        ...Array.from({ length: J.getDay() }, () => null),
        ...P.days
      ], ut = Pe.length % 7 === 0 ? 0 : 7 - Pe.length % 7;
      Pe.push(...Array.from({ length: ut }, () => null));
      const Ot = [];
      for (let ne = 0; ne < Pe.length; ne += 7)
        Ot.push(Pe.slice(ne, ne + 7));
      return Ot;
    }), We = M(() => {
      let P = "";
      return be.value.map((J, Pe) => {
        const ut = J.find((Bi) => Bi ? Dt(Bi.date).getDate() === 1 : !1), Ot = J.find((Bi) => !!Bi), ne = ut ?? (Pe === 0 ? Ot : null);
        if (!ne) return "";
        const lt = Dt(ne.date), Gt = `${lt.getFullYear()}-${lt.getMonth()}`;
        return Gt === P ? "" : (P = Gt, O(ne.date));
      });
    }), xe = (P) => {
      const J = KM(P), Pe = YM(J.type), ut = String(P).replace(/^Error:\s*/, "");
      let Ot = `${Pe} ${J.title}

${J.message}`;
      ut && !J.message.includes(ut) && (Ot += `

详情: ${ut.slice(0, 100)}${ut.length > 100 ? "..." : ""}`), qe.msg(Ot, "error", "top-right"), console.group(`🔧 Git 错误解决建议 - ${J.title}`), console.log(ut), console.log("建议步骤:"), J.suggestions.forEach((ne, lt) => {
        console.log(`${lt + 1}. ${ne}`);
      }), console.groupEnd();
    }, ze = (P) => {
      v.value = !1;
    }, Qe = (P) => {
      b.value = P, k.value = P.recommended_branch || "main", g.value = !0;
    }, Ie = (P) => {
      const J = String(P), Pe = "would be overwritten by checkout:", ut = J.indexOf(Pe);
      if (ut < 0) return [];
      const Ot = J.slice(ut + Pe.length), ne = Ot.search(/Please move|Aborting|Error:/);
      return (ne >= 0 ? Ot.slice(0, ne) : Ot).split(/\r?\n/).map((Gt) => Gt.trim()).filter((Gt) => Gt && !Gt.startsWith("Please ") && !Gt.startsWith("Aborting"));
    }, bt = async (P) => {
      try {
        return await Uh(P), await l(), qe.msg(`已切换到 ${P} 分支`, "success", "bottom-right"), !0;
      } catch (J) {
        const Pe = Ie(J);
        if (Pe.length > 0)
          return _.value = P, E.value = Pe, g.value = !1, S.value = !0, !1;
        throw J;
      }
    }, It = async (P) => {
      d.value = !0;
      try {
        await bt(P);
      } catch (J) {
        Ce.error("[GitSync] 切换分支失败", J), xe(J);
      } finally {
        d.value = !1;
      }
    }, Pt = async () => {
      const P = _.value, J = [...E.value];
      if (!P || J.length === 0) {
        S.value = !1;
        return;
      }
      d.value = !0;
      try {
        for (const Pe of J)
          await Ov(Pe);
        S.value = !1, E.value = [], _.value = "", await Uh(P), await l(), qe.msg(`已切换到 ${P} 分支`, "success", "bottom-right");
      } catch (Pe) {
        Ce.error("[GitSync] 处理未跟踪文件后切换分支失败", Pe), xe(Pe);
      } finally {
        d.value = !1;
      }
    }, Wt = (P) => {
      if (P.branch_selection) {
        Qe(P.branch_selection);
        return;
      }
      P.success ? P.has_conflicts ? Ce.info("[GitSync] Pull 检测到冲突，由全局对话框处理") : P.files_updated === 0 ? qe.msg(e("settings.gitSync.alreadyUpToDate"), "success", "bottom-right") : qe.msg(e("settings.gitSync.pullSuccess", { count: P.files_updated }), "success", "bottom-right") : qe.msg(e("settings.gitSync.pullFailed"), "error", "top-right");
    }, At = async () => {
      H.value = !0;
      try {
        C.value = await IM(10), N.value = !0;
      } catch (P) {
        Ce.error("[GitSync] 加载 Git 记录失败", P), xe(P);
      } finally {
        H.value = !1;
      }
    }, wt = async (P = te.value) => {
      ge.value = !0;
      try {
        const J = await PM(P);
        W.value = J, te.value = J.year;
      } catch (J) {
        Ce.error("[GitSync] 加载 Git 提交活跃度失败", J), xe(J);
      } finally {
        ge.value = !1;
      }
    }, ot = async () => {
      f.value.enabled && await wt(te.value);
    }, zt = (P) => {
      P === te.value || ge.value || (te.value = P, wt(P));
    };
    function Dt(P) {
      const [J, Pe, ut] = P.split("-").map(Number);
      return new Date(J, Pe - 1, ut);
    }
    function O(P) {
      return new Intl.DateTimeFormat(n.value.startsWith("zh") ? "zh-CN" : "en-US", {
        month: "short"
      }).format(Dt(P));
    }
    function w(P) {
      if (P <= 0) return 0;
      const J = W.value?.max_count || 0;
      return J <= 1 ? 1 : Math.min(4, Math.max(1, Math.ceil(P / J * 4)));
    }
    function L(P) {
      return P ? `contribution-day--level-${w(P.count)}` : "contribution-day--empty";
    }
    function K(P) {
      return e("settings.gitSync.contribution.dayTitle", {
        date: P.date,
        count: P.count
      });
    }
    const de = (P, J) => {
      z.value = { record: P, file: J }, q.value = !0;
    }, he = async () => {
      const P = z.value;
      if (P)
        try {
          await DM(P.record.commit_hash, P.file.file_path), qe.msg("文件已恢复，请检查待同步记录后再推送", "success", "bottom-right"), z.value = null, await l(), await ot();
        } catch (J) {
          Ce.error("[GitSync] 恢复 Git 文件失败", J), xe(J);
        }
    }, A = async () => {
      try {
        Ce.info("[GitSync] 开始加载 Git 设置");
        const P = await ba();
        f.value = P, Ce.info("[GitSync] Git 设置加载成功", P);
      } catch (P) {
        Ce.error("[GitSync] 加载 Git 设置失败", P), qe.msg(e("settings.gitSync.loadFailed"), "error", "top-right");
      }
    }, F = async () => {
      try {
        await MM(f.value);
      } catch (P) {
        throw Ce.error("[GitSync] 保存 Git 设置失败", P), P;
      }
    }, me = async (P) => {
      d.value = !0;
      try {
        await F(), qe.msg(e(P ? "settings.gitSync.enabledSuccess" : "settings.gitSync.disabledSuccess"), "success", "bottom-right"), P && await ot();
      } catch {
        qe.msg(e("settings.gitSync.saveFailed"), "error", "top-right"), f.value.enabled = !P;
      } finally {
        d.value = !1;
      }
    }, Ee = async (P) => {
      d.value = !0;
      try {
        await F(), qe.msg(e(P ? "settings.gitSync.pullOnStartEnabled" : "settings.gitSync.pullOnStartDisabled"), "success", "bottom-right");
      } catch {
        qe.msg(e("settings.gitSync.saveFailed"), "error", "top-right"), f.value.pull_on_start = !P;
      } finally {
        d.value = !1;
      }
    }, et = async (P) => {
      d.value = !0;
      try {
        await F(), P ? await Fl() : await Bc(), qe.msg(e(P ? "settings.gitSync.autoSyncEnabled" : "settings.gitSync.autoSyncDisabled"), "success", "bottom-right");
      } catch {
        qe.msg(e("settings.gitSync.saveFailed"), "error", "top-right"), f.value.auto_sync = !P;
      } finally {
        d.value = !1;
      }
    }, mi = async () => {
      d.value = !0;
      try {
        await F(), f.value.auto_sync && (await Bc(), await Fl());
      } catch {
        qe.msg(e("settings.gitSync.saveFailed"), "error", "top-right");
      } finally {
        d.value = !1;
      }
    }, sn = async () => {
      Ce.info("[GitSync] 手动 Pull 开始"), h.value = !0;
      try {
        const P = await $c();
        Wt(P), await ot();
      } catch (P) {
        Ce.error("[GitSync] 手动 Pull 失败", P), xe(P);
      } finally {
        h.value = !1;
      }
    }, bs = async (P) => {
      const J = String(P || "main");
      h.value = !0;
      try {
        if (!await bt(J)) return;
        g.value = !1;
        const ut = await $c();
        Wt(ut);
      } catch (Pe) {
        Ce.error("[GitSync] 切换分支后 Pull 失败", Pe), xe(Pe);
      } finally {
        h.value = !1;
      }
    }, _o = async () => {
      Ce.info("[GitSync] 手动 Push 开始"), p.value = !0;
      try {
        const P = await NM("Manual sync");
        P.success ? (qe.msg(e("settings.gitSync.pushSuccess", { count: P.files_pushed }), "success", "bottom-right"), await ot()) : qe.msg(e("settings.gitSync.pushFailed"), "error", "top-right");
      } catch (P) {
        Ce.error("[GitSync] 手动 Push 失败", P), xe(P);
      } finally {
        p.value = !1;
      }
    };
    return it(async () => {
      await A(), await a(), await l(), await ot();
    }), (P, J) => {
      const Pe = qm, ut = Ym, Ot = xA;
      return x(), R("div", qM, [
        j(" 固定标题 "),
        T("div", JM, [
          T(
            "h3",
            XM,
            G(P.$t("settings.gitSync.title")),
            1
            /* TEXT */
          )
        ]),
        j(" 可滚动内容 "),
        T("main", ZM, [
          j(" 当前同步状态：同面板内左右分栏 "),
          m(f).enabled ? (x(), R(
            "div",
            {
              key: 0,
              class: U(["sync-status-panel", `sync-status-panel--${m(i)}`])
            },
            [
              j(" 左侧：状态摘要 "),
              T("div", QM, [
                T("div", e4, [
                  m(i) === "syncing" ? (x(), se(m(pg), {
                    key: 0,
                    class: "git-sync-icon",
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : m(i) === "synced" || m(i) === "idle" || m(i) === "disabled" ? (x(), se(m(_b), {
                    key: 1,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : m(i) === "has_changes" ? (x(), se(m(kb), {
                    key: 2,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : m(i) === "error" ? (x(), se(m(Eb), {
                    key: 3,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : j("v-if", !0)
                ]),
                T("div", t4, [
                  T(
                    "div",
                    n4,
                    G(u(m(i))),
                    1
                    /* TEXT */
                  ),
                  T("div", i4, [
                    m(i) === "syncing" ? (x(), R(
                      _e,
                      { key: 0 },
                      [
                        Ve(
                          G(P.$t("settings.gitSync.status.syncing")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : m(i) === "has_changes" ? (x(), R(
                      "span",
                      r4,
                      G(m(r)) + " " + G(P.$t("settings.gitSync.status.pendingFiles")),
                      1
                      /* TEXT */
                    )) : m(i) === "synced" || m(i) === "idle" ? (x(), R(
                      _e,
                      { key: 2 },
                      [
                        Ve(
                          G(m(s) ? `${P.$t("settings.gitSync.status.lastSync")}: ${m(s)}` : P.$t("settings.gitSync.status.waitingSync")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : m(i) === "error" ? (x(), R(
                      _e,
                      { key: 3 },
                      [
                        Ve(
                          G(P.$t("settings.gitSync.status.error")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : m(i) === "disabled" ? (x(), R(
                      _e,
                      { key: 4 },
                      [
                        Ve(
                          G(P.$t("settings.gitSync.status.checking")),
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
              m(i) === "has_changes" && m(r) > 0 ? (x(), R(
                _e,
                { key: 0 },
                [
                  J[16] || (J[16] = T(
                    "div",
                    { class: "sync-status-panel__divider" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  T("div", s4, [
                    T(
                      "div",
                      o4,
                      G(P.$t("settings.gitSync.status.pendingFilesTitle")) + " (" + G(m(r)) + ") ",
                      1
                      /* TEXT */
                    ),
                    T("div", l4, [
                      (x(!0), R(
                        _e,
                        null,
                        Ct(m(c), (ne) => (x(), R("div", {
                          key: ne,
                          class: "sync-pending-file-item"
                        }, [
                          T(
                            "span",
                            a4,
                            G(ne),
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
          m(f).enabled ? (x(), R("section", c4, [
            T("div", u4, [
              T("div", f4, [
                T(
                  "div",
                  d4,
                  G(m(ke)),
                  1
                  /* TEXT */
                ),
                T(
                  "div",
                  h4,
                  G(P.$t("settings.gitSync.contribution.desc")),
                  1
                  /* TEXT */
                )
              ]),
              T("div", p4, [
                (x(!0), R(
                  _e,
                  null,
                  Ct(m(ae), (ne) => (x(), R("button", {
                    key: ne,
                    class: U(["contribution-year", { active: ne === m(te) }]),
                    type: "button",
                    disabled: m(ge),
                    onClick: (lt) => zt(ne)
                  }, G(ne), 11, g4))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ]),
            m(ge) && !m(W) ? (x(), R(
              "div",
              m4,
              G(P.$t("settings.gitSync.contribution.loading")),
              1
              /* TEXT */
            )) : m(W) ? (x(), R("div", {
              key: 2,
              class: "contribution-board",
              "aria-label": P.$t("settings.gitSync.contribution.title")
            }, [
              T(
                "div",
                {
                  class: "contribution-months",
                  style: tt({ gridTemplateColumns: `repeat(${m(be).length}, minmax(0, 1fr))` })
                },
                [
                  (x(!0), R(
                    _e,
                    null,
                    Ct(m(We), (ne, lt) => (x(), R(
                      "span",
                      {
                        key: `${ne}-${lt}`
                      },
                      G(ne),
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
              T("div", b4, [
                T("div", w4, [
                  (x(!0), R(
                    _e,
                    null,
                    Ct(m(Ae), (ne, lt) => (x(), R(
                      "span",
                      { key: lt },
                      G(ne),
                      1
                      /* TEXT */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                T(
                  "div",
                  {
                    class: "contribution-weeks",
                    style: tt({ gridTemplateColumns: `repeat(${m(be).length}, minmax(0, 1fr))` })
                  },
                  [
                    (x(!0), R(
                      _e,
                      null,
                      Ct(m(be), (ne, lt) => (x(), R("div", {
                        key: lt,
                        class: "contribution-week"
                      }, [
                        (x(!0), R(
                          _e,
                          null,
                          Ct(ne, (Gt, Bi) => (x(), R("span", {
                            key: Gt?.date || `empty-${lt}-${Bi}`,
                            class: U(["contribution-day", L(Gt)]),
                            title: Gt ? K(Gt) : ""
                          }, null, 10, S4))),
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
              T("div", C4, [
                T(
                  "span",
                  null,
                  G(m(Oe)),
                  1
                  /* TEXT */
                ),
                T("span", k4, [
                  Ve(
                    G(P.$t("settings.gitSync.contribution.less")) + " ",
                    1
                    /* TEXT */
                  ),
                  (x(), R(
                    _e,
                    null,
                    Ct([0, 1, 2, 3, 4], (ne) => T(
                      "i",
                      {
                        key: ne,
                        class: U(["contribution-day contribution-day--legend", `contribution-day--level-${ne}`])
                      },
                      null,
                      2
                      /* CLASS */
                    )),
                    64
                    /* STABLE_FRAGMENT */
                  )),
                  Ve(
                    " " + G(P.$t("settings.gitSync.contribution.more")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ], 8, y4)) : (x(), R(
              "div",
              v4,
              G(P.$t("settings.gitSync.contribution.empty")),
              1
              /* TEXT */
            ))
          ])) : j("v-if", !0),
          j(" 第一部分：Git 配置 "),
          T(
            "div",
            _4,
            G(P.$t("settings.gitSync.status.section.config")),
            1
            /* TEXT */
          ),
          j(" 启用 Git 同步 "),
          T("section", E4, [
            T("div", T4, [
              T(
                "div",
                A4,
                G(P.$t("settings.gitSync.enabled")),
                1
                /* TEXT */
              ),
              T(
                "div",
                O4,
                G(P.$t("settings.gitSync.enabledDesc")),
                1
                /* TEXT */
              )
            ]),
            T("div", x4, [
              Z(m(Ua), {
                modelValue: m(f).enabled,
                "onUpdate:modelValue": J[0] || (J[0] = (ne) => m(f).enabled = ne),
                "active-text": P.$t("common.on"),
                "inactive-text": P.$t("common.off"),
                disabled: m(d),
                onChange: me
              }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
            ])
          ]),
          j(" 同步选项（Git 必要配置在个人中心填写，此处仅保留开关与同步操作） "),
          m(f).enabled ? (x(), R(
            _e,
            { key: 2 },
            [
              m(o)?.available_branches?.length ? (x(), R("section", M4, [
                J[17] || (J[17] = T(
                  "div",
                  { class: "summarize-label" },
                  [
                    T("div", { class: "summarize-label-title" }, "同步分支"),
                    T("div", { class: "summarize-label-desc" }, " 主分支固定为 main，检测到其他分支时可在这里切换 ")
                  ],
                  -1
                  /* HOISTED */
                )),
                T("div", L4, [
                  Z(ut, {
                    "model-value": m(o).branch || "main",
                    class: "summarize-input !w-40",
                    disabled: m(d) || m(h) || m(p),
                    onChange: It
                  }, {
                    default: X(() => [
                      (x(!0), R(
                        _e,
                        null,
                        Ct(m(o).available_branches, (ne) => (x(), se(Pe, {
                          key: ne,
                          label: ne === "main" ? `${ne}（主分支）` : ne,
                          value: ne
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
              T("section", I4, [
                T("div", P4, [
                  T(
                    "div",
                    D4,
                    G(P.$t("settings.gitSync.pullOnStart")),
                    1
                    /* TEXT */
                  ),
                  T(
                    "div",
                    R4,
                    G(P.$t("settings.gitSync.pullOnStartDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                T("div", N4, [
                  Z(m(Ua), {
                    modelValue: m(f).pull_on_start,
                    "onUpdate:modelValue": J[1] || (J[1] = (ne) => m(f).pull_on_start = ne),
                    "active-text": P.$t("common.on"),
                    "inactive-text": P.$t("common.off"),
                    disabled: m(d),
                    onChange: Ee
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              j(" 自动同步 "),
              T("section", F4, [
                T("div", $4, [
                  T(
                    "div",
                    B4,
                    G(P.$t("settings.gitSync.autoSync")),
                    1
                    /* TEXT */
                  ),
                  T(
                    "div",
                    V4,
                    G(P.$t("settings.gitSync.autoSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                T("div", H4, [
                  Z(m(Ua), {
                    modelValue: m(f).auto_sync,
                    "onUpdate:modelValue": J[2] || (J[2] = (ne) => m(f).auto_sync = ne),
                    "active-text": P.$t("common.on"),
                    "inactive-text": P.$t("common.off"),
                    disabled: m(d),
                    onChange: et
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              j(" 自动同步延迟（仅在启用自动同步时显示） "),
              m(f).auto_sync ? (x(), R("section", W4, [
                T("div", z4, [
                  T(
                    "div",
                    G4,
                    G(P.$t("settings.gitSync.autoSyncDelay")),
                    1
                    /* TEXT */
                  ),
                  T(
                    "div",
                    U4,
                    G(P.$t("settings.gitSync.autoSyncDelayDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                T("div", j4, [
                  Z(Ot, {
                    modelValue: m(f).auto_sync_delay,
                    "onUpdate:modelValue": J[3] || (J[3] = (ne) => m(f).auto_sync_delay = ne),
                    min: 1,
                    max: 60,
                    disabled: m(d),
                    onChange: mi,
                    class: "!w-32"
                  }, null, 8, ["modelValue", "disabled"]),
                  T(
                    "span",
                    K4,
                    G(P.$t("settings.gitSync.minutes")),
                    1
                    /* TEXT */
                  )
                ])
              ])) : j("v-if", !0),
              j(" 第二部分：同步操作 "),
              T(
                "div",
                Y4,
                G(P.$t("settings.gitSync.status.section.sync") || "同步操作"),
                1
                /* TEXT */
              ),
              j(" 手动同步按钮 "),
              T("section", q4, [
                T("div", J4, [
                  T(
                    "div",
                    X4,
                    G(P.$t("settings.gitSync.manualSync")),
                    1
                    /* TEXT */
                  ),
                  T(
                    "div",
                    Z4,
                    G(P.$t("settings.gitSync.manualSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                T("div", Q4, [
                  Z(m(Vn), {
                    type: "primary",
                    size: "small",
                    loading: m(h),
                    onClick: sn
                  }, {
                    default: X(() => [
                      Ve(
                        G(P.$t("settings.gitSync.pull")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"]),
                  Z(m(Vn), {
                    type: "primary",
                    size: "small",
                    loading: m(p),
                    onClick: _o
                  }, {
                    default: X(() => [
                      Ve(
                        G(P.$t("settings.gitSync.push")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ])
              ]),
              T("section", eL, [
                T("div", tL, [
                  J[19] || (J[19] = T(
                    "div",
                    null,
                    [
                      T("div", { class: "summarize-label-title" }, "Git 记录"),
                      T("div", { class: "summarize-label-desc" }, "最近 10 条提交，可查看同步状态并恢复单个文件")
                    ],
                    -1
                    /* HOISTED */
                  )),
                  Z(m(Vn), {
                    size: "small",
                    loading: m(H),
                    onClick: At
                  }, {
                    default: X(() => J[18] || (J[18] = [
                      Ve(" 刷新 ")
                    ])),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ]),
                m(C).length ? (x(), R("div", nL, [
                  (x(!0), R(
                    _e,
                    null,
                    Ct(m(C), (ne) => (x(), R("div", {
                      key: ne.commit_hash,
                      class: "git-record-item"
                    }, [
                      T("div", iL, [
                        T(
                          "span",
                          {
                            class: U(["git-record-state", { synced: ne.synced }])
                          },
                          G(ne.synced ? "已同步" : "待推送"),
                          3
                          /* TEXT, CLASS */
                        ),
                        T("span", {
                          class: "git-record-message",
                          title: ne.message
                        }, G(ne.message), 9, rL),
                        T(
                          "span",
                          sL,
                          G(ne.time),
                          1
                          /* TEXT */
                        )
                      ]),
                      T("div", oL, [
                        T(
                          "span",
                          null,
                          G(ne.short_hash),
                          1
                          /* TEXT */
                        ),
                        T(
                          "span",
                          null,
                          G(ne.author),
                          1
                          /* TEXT */
                        )
                      ]),
                      ne.files.length ? (x(), R("div", lL, [
                        (x(!0), R(
                          _e,
                          null,
                          Ct(ne.files.slice(0, 6), (lt) => (x(), R("button", {
                            key: `${ne.commit_hash}-${lt.file_path}`,
                            class: "git-record-file",
                            type: "button",
                            title: `${lt.status} ${lt.file_path}`,
                            onClick: (Gt) => de(ne, lt)
                          }, [
                            T(
                              "span",
                              cL,
                              G(lt.status),
                              1
                              /* TEXT */
                            ),
                            T(
                              "span",
                              uL,
                              G(lt.file_name),
                              1
                              /* TEXT */
                            )
                          ], 8, aL))),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        ne.files.length > 6 ? (x(), R(
                          "span",
                          fL,
                          " +" + G(ne.files.length - 6),
                          1
                          /* TEXT */
                        )) : j("v-if", !0)
                      ])) : j("v-if", !0)
                    ]))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (x(), R(
                  "div",
                  dL,
                  G(m(H) ? "正在加载记录..." : m(N) ? "暂无 Git 记录" : "点击刷新查看最近 10 条提交"),
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
        Z(Hs, {
          modelValue: m(v),
          "onUpdate:modelValue": J[4] || (J[4] = (ne) => Qt(v) ? v.value = ne : null),
          title: m(y).title,
          message: m(y).message,
          "primary-text": m(y).primaryText,
          "secondary-text": m(y).secondaryText,
          type: m(y).type,
          onPrimary: J[5] || (J[5] = (ne) => ze()),
          onSecondary: J[6] || (J[6] = (ne) => ze()),
          onClose: J[7] || (J[7] = (ne) => ze())
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text", "type"]),
        Z(m(uM), {
          modelValue: m(g),
          "onUpdate:modelValue": J[8] || (J[8] = (ne) => Qt(g) ? g.value = ne : null),
          title: "选择同步分支",
          message: m(B),
          options: m(D),
          "default-value": m(k),
          "confirm-text": "切换并同步",
          "cancel-text": "取消",
          loading: m(h),
          onConfirm: bs,
          onCancel: J[9] || (J[9] = (ne) => g.value = !1)
        }, null, 8, ["modelValue", "message", "options", "default-value", "loading"]),
        Z(Hs, {
          modelValue: m(S),
          "onUpdate:modelValue": J[10] || (J[10] = (ne) => Qt(S) ? S.value = ne : null),
          title: "切换分支前需要处理未跟踪文件",
          message: m(V),
          "primary-text": "使用目标分支文件",
          "secondary-text": "取消",
          type: "warning",
          onPrimary: Pt,
          onSecondary: J[11] || (J[11] = (ne) => S.value = !1),
          onClose: J[12] || (J[12] = (ne) => S.value = !1)
        }, null, 8, ["modelValue", "message"]),
        Z(Hs, {
          modelValue: m(q),
          "onUpdate:modelValue": J[13] || (J[13] = (ne) => Qt(q) ? q.value = ne : null),
          title: "恢复文件",
          message: m(ce),
          "primary-text": "确认恢复",
          "secondary-text": "取消",
          type: "warning",
          onPrimary: he,
          onSecondary: J[14] || (J[14] = (ne) => q.value = !1),
          onClose: J[15] || (J[15] = (ne) => q.value = !1)
        }, null, 8, ["modelValue", "message"])
      ]);
    };
  }
}), pL = /* @__PURE__ */ $i(hL, [["__scopeId", "data-v-88fc1205"]]), gL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pL
}, Symbol.toStringTag, { value: "Module" })), mL = ["title"], vL = {
  key: 2,
  class: "git-badge"
}, yL = {
  key: 3,
  class: "git-time"
}, bL = { class: "ml-2" }, wL = {
  key: 0,
  class: "git-badge ml-1"
}, SL = /* @__PURE__ */ Q({
  __name: "TitlebarGitStatus",
  props: {
    variant: { default: "inline" }
  },
  setup(t) {
    const {
      syncState: e,
      pendingFilesCount: n,
      formattedLastSyncTime: i,
      refreshStatus: r,
      refreshSettings: s,
      stateDescription: o,
      gitSettings: l
    } = _f(), a = M(() => !!l.value?.enabled && e.value !== "error"), c = () => {
      window.location.hash = "#/config/category/settings?tab=gitSync";
    };
    return it(async () => {
      GM(), UM(r), await s(), await r();
    }), Jr(() => {
      jM();
    }), (u, f) => {
      const d = kA;
      return a.value && u.variant === "inline" ? (x(), R("div", {
        key: 0,
        class: U(["git-status-indicator", `git-status-${m(e)}`]),
        title: m(o),
        onClick: c
      }, [
        m(e) === "syncing" ? (x(), se(m(pg), {
          key: 0,
          class: "icon git-sync-icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })) : (x(), se(m(Zf), {
          key: 1,
          class: "icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })),
        m(e) === "has_changes" ? (x(), R(
          "span",
          vL,
          G(m(n)),
          1
          /* TEXT */
        )) : j("v-if", !0),
        m(i) && m(e) !== "syncing" ? (x(), R(
          "span",
          yL,
          G(m(i)),
          1
          /* TEXT */
        )) : j("v-if", !0)
      ], 10, mL)) : a.value ? (x(), se(d, {
        key: 1,
        onClick: c
      }, {
        default: X(() => [
          Z(m(Zf), {
            theme: "outline",
            size: "16",
            strokeWidth: 3,
            class: "align-middle"
          }),
          T(
            "span",
            bL,
            G(u.$t("titlebar.gitSync")),
            1
            /* TEXT */
          ),
          m(e) === "has_changes" ? (x(), R(
            "span",
            wL,
            G(m(n)),
            1
            /* TEXT */
          )) : j("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })) : j("v-if", !0);
    };
  }
}), CL = /* @__PURE__ */ $i(SL, [["__scopeId", "data-v-44eb62bb"]]), kL = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CL
}, Symbol.toStringTag, { value: "Module" }));
class Dv {
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
    return new zs(this.width * e, this.height * e);
  }
  [Ln]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ln]();
  }
}
class zs {
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
    return new Dv(this.width / e, this.height / e);
  }
  [Ln]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[Ln]();
  }
}
class Br {
  constructor(e) {
    this.size = e;
  }
  toLogical(e) {
    return this.size instanceof Dv ? this.size : this.size.toLogical(e);
  }
  toPhysical(e) {
    return this.size instanceof zs ? this.size : this.size.toPhysical(e);
  }
  [Ln]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[Ln]();
  }
}
class Rv {
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
    return new Gi(this.x * e, this.y * e);
  }
  [Ln]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ln]();
  }
}
class Gi {
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
    return new Rv(this.x / e, this.y / e);
  }
  [Ln]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[Ln]();
  }
}
class Wo {
  constructor(e) {
    this.position = e;
  }
  toLogical(e) {
    return this.position instanceof Rv ? this.position : this.position.toLogical(e);
  }
  toPhysical(e) {
    return this.position instanceof Gi ? this.position : this.position.toPhysical(e);
  }
  [Ln]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[Ln]();
  }
}
class Gs extends pM {
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
    return Y("plugin:image|new", {
      rgba: $l(e),
      width: n,
      height: i
    }).then((r) => new Gs(r));
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
    return Y("plugin:image|from_bytes", {
      bytes: $l(e)
    }).then((n) => new Gs(n));
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
    return Y("plugin:image|from_path", { path: e }).then((n) => new Gs(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return Y("plugin:image|rgba", {
      rid: this.rid
    }).then((e) => new Uint8Array(e));
  }
  /** Returns the size of this image.  */
  async size() {
    return Y("plugin:image|size", { rid: this.rid });
  }
}
function $l(t) {
  return t == null ? null : typeof t == "string" ? t : t instanceof Gs ? t.rid : t;
}
var Vc;
(function(t) {
  t[t.Critical = 1] = "Critical", t[t.Informational = 2] = "Informational";
})(Vc || (Vc = {}));
class _L {
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
var jh;
(function(t) {
  t.None = "none", t.Normal = "normal", t.Indeterminate = "indeterminate", t.Paused = "paused", t.Error = "error";
})(jh || (jh = {}));
function Ef() {
  return new Nv(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Ya() {
  return Y("plugin:window|get_all_windows").then((t) => t.map((e) => new Nv(e, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const qa = ["tauri://created", "tauri://error"];
class Nv {
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
    this.label = e, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || Y("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (i = n.parent) === null || i === void 0 ? void 0 : i.label,
        label: e
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
  static async getByLabel(e) {
    var n;
    return (n = (await Ya()).find((i) => i.label === e)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Ef();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Ya();
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
    for (const e of await Ya())
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
    } : Kt(e, n, {
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
    } : OM(e, n, {
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
    if (qa.includes(e)) {
      for (const i of this.listeners[e] || [])
        i({
          event: e,
          id: -1,
          payload: n
        });
      return;
    }
    return Tv(e, n);
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
    if (qa.includes(n)) {
      for (const r of this.listeners[n] || [])
        r({
          event: n,
          id: -1,
          payload: i
        });
      return;
    }
    return xM(e, n, i);
  }
  /** @ignore */
  _handleTauriEvent(e, n) {
    return qa.includes(e) ? (e in this.listeners ? this.listeners[e].push(n) : this.listeners[e] = [n], !0) : !1;
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
    return Y("plugin:window|scale_factor", {
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
    return Y("plugin:window|inner_position", {
      label: this.label
    }).then((e) => new Gi(e));
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
    return Y("plugin:window|outer_position", {
      label: this.label
    }).then((e) => new Gi(e));
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
    return Y("plugin:window|inner_size", {
      label: this.label
    }).then((e) => new zs(e));
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
    return Y("plugin:window|outer_size", {
      label: this.label
    }).then((e) => new zs(e));
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
    return Y("plugin:window|is_fullscreen", {
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
    return Y("plugin:window|is_minimized", {
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
    return Y("plugin:window|is_maximized", {
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
    return Y("plugin:window|is_focused", {
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
    return Y("plugin:window|is_decorated", {
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
    return Y("plugin:window|is_resizable", {
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
    return Y("plugin:window|is_maximizable", {
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
    return Y("plugin:window|is_minimizable", {
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
    return Y("plugin:window|is_closable", {
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
    return Y("plugin:window|is_visible", {
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
    return Y("plugin:window|title", {
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
    return Y("plugin:window|theme", {
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
    return Y("plugin:window|is_always_on_top", {
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
    return Y("plugin:window|center", {
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
    return e && (e === Vc.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), Y("plugin:window|request_user_attention", {
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
    return Y("plugin:window|set_resizable", {
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
    return Y("plugin:window|set_enabled", {
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
    return Y("plugin:window|is_enabled", {
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
    return Y("plugin:window|set_maximizable", {
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
    return Y("plugin:window|set_minimizable", {
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
    return Y("plugin:window|set_closable", {
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
    return Y("plugin:window|set_title", {
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
    return Y("plugin:window|maximize", {
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
    return Y("plugin:window|unmaximize", {
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
    return Y("plugin:window|toggle_maximize", {
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
    return Y("plugin:window|minimize", {
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
    return Y("plugin:window|unminimize", {
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
    return Y("plugin:window|show", {
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
    return Y("plugin:window|hide", {
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
    return Y("plugin:window|close", {
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
    return Y("plugin:window|destroy", {
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
    return Y("plugin:window|set_decorations", {
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
    return Y("plugin:window|set_shadow", {
      label: this.label,
      value: e
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(e) {
    return Y("plugin:window|set_effects", {
      label: this.label,
      value: e
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return Y("plugin:window|set_effects", {
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
    return Y("plugin:window|set_always_on_top", {
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
    return Y("plugin:window|set_always_on_bottom", {
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
    return Y("plugin:window|set_content_protected", {
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
    return Y("plugin:window|set_size", {
      label: this.label,
      value: e instanceof Br ? e : new Br(e)
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
    return Y("plugin:window|set_min_size", {
      label: this.label,
      value: e instanceof Br ? e : e ? new Br(e) : null
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
    return Y("plugin:window|set_max_size", {
      label: this.label,
      value: e instanceof Br ? e : e ? new Br(e) : null
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
    return Y("plugin:window|set_size_constraints", {
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
    return Y("plugin:window|set_position", {
      label: this.label,
      value: e instanceof Wo ? e : new Wo(e)
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
    return Y("plugin:window|set_fullscreen", {
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
    return Y("plugin:window|set_focus", {
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
    return Y("plugin:window|set_icon", {
      label: this.label,
      value: $l(e)
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
    return Y("plugin:window|set_skip_taskbar", {
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
    return Y("plugin:window|set_cursor_grab", {
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
    return Y("plugin:window|set_cursor_visible", {
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
    return Y("plugin:window|set_cursor_icon", {
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
    return Y("plugin:window|set_background_color", { color: e });
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
    return Y("plugin:window|set_cursor_position", {
      label: this.label,
      value: e instanceof Wo ? e : new Wo(e)
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
    return Y("plugin:window|set_ignore_cursor_events", {
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
    return Y("plugin:window|start_dragging", {
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
    return Y("plugin:window|start_resize_dragging", {
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
    return Y("plugin:window|set_badge_count", {
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
    return Y("plugin:window|set_badge_label", {
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
    return Y("plugin:window|set_overlay_icon", {
      label: this.label,
      value: e ? $l(e) : void 0
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
    return Y("plugin:window|set_progress_bar", {
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
    return Y("plugin:window|set_visible_on_all_workspaces", {
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
    return Y("plugin:window|set_title_bar_style", {
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
    return Y("plugin:window|set_theme", {
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
    return this.listen(hn.WINDOW_RESIZED, (n) => {
      n.payload = new zs(n.payload), e(n);
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
    return this.listen(hn.WINDOW_MOVED, (n) => {
      n.payload = new Gi(n.payload), e(n);
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
    return this.listen(hn.WINDOW_CLOSE_REQUESTED, async (n) => {
      const i = new _L(n);
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
    const n = await this.listen(hn.DRAG_ENTER, (o) => {
      e({
        ...o,
        payload: {
          type: "enter",
          paths: o.payload.paths,
          position: new Gi(o.payload.position)
        }
      });
    }), i = await this.listen(hn.DRAG_OVER, (o) => {
      e({
        ...o,
        payload: {
          type: "over",
          position: new Gi(o.payload.position)
        }
      });
    }), r = await this.listen(hn.DRAG_DROP, (o) => {
      e({
        ...o,
        payload: {
          type: "drop",
          paths: o.payload.paths,
          position: new Gi(o.payload.position)
        }
      });
    }), s = await this.listen(hn.DRAG_LEAVE, (o) => {
      e({ ...o, payload: { type: "leave" } });
    });
    return () => {
      n(), r(), i(), s();
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
    const n = await this.listen(hn.WINDOW_FOCUS, (r) => {
      e({ ...r, payload: !0 });
    }), i = await this.listen(hn.WINDOW_BLUR, (r) => {
      e({ ...r, payload: !1 });
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
    return this.listen(hn.WINDOW_SCALE_FACTOR_CHANGED, e);
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
    return this.listen(hn.WINDOW_THEME_CHANGED, e);
  }
}
var Kh;
(function(t) {
  t.Disabled = "disabled", t.Throttle = "throttle", t.Suspend = "suspend";
})(Kh || (Kh = {}));
var Yh;
(function(t) {
  t.AppearanceBased = "appearanceBased", t.Light = "light", t.Dark = "dark", t.MediumLight = "mediumLight", t.UltraDark = "ultraDark", t.Titlebar = "titlebar", t.Selection = "selection", t.Menu = "menu", t.Popover = "popover", t.Sidebar = "sidebar", t.HeaderView = "headerView", t.Sheet = "sheet", t.WindowBackground = "windowBackground", t.HudWindow = "hudWindow", t.FullScreenUI = "fullScreenUI", t.Tooltip = "tooltip", t.ContentBackground = "contentBackground", t.UnderWindowBackground = "underWindowBackground", t.UnderPageBackground = "underPageBackground", t.Mica = "mica", t.Blur = "blur", t.Acrylic = "acrylic", t.Tabbed = "tabbed", t.TabbedDark = "tabbedDark", t.TabbedLight = "tabbedLight";
})(Yh || (Yh = {}));
var qh;
(function(t) {
  t.FollowsWindowActiveState = "followsWindowActiveState", t.Active = "active", t.Inactive = "inactive";
})(qh || (qh = {}));
const EL = /* @__PURE__ */ Q({
  __name: "GitSyncRuntimePortal",
  props: {
    runtimeReady: { type: Boolean },
    state: {},
    controller: {}
  },
  setup(t, { expose: e }) {
    const n = Rs(() => Promise.resolve().then(() => OI)), i = Rs(() => Promise.resolve().then(() => NR)), r = t, { t: s } = Dr(), o = I(null), l = I(null), a = M(() => r.state.dialogs.conflictFiles.value), c = M(() => r.state.dialogs.untrackedFiles.value), u = M(() => r.state.dialogs.mergeFileList.value), f = M(() => r.state.repoNotFound.message.value), d = M(() => r.state.confirm.options.value), h = M({
      get: () => r.state.dialogs.showConflictDialog.value,
      set: (g) => {
        r.state.dialogs.showConflictDialog.value = g;
      }
    }), p = M({
      get: () => r.state.dialogs.showManualMergeDialog.value,
      set: (g) => {
        r.state.dialogs.showManualMergeDialog.value = g;
      }
    }), v = M({
      get: () => r.state.repoNotFound.visible.value,
      set: (g) => {
        r.state.repoNotFound.visible.value = g;
      }
    }), y = M({
      get: () => r.state.confirm.visible.value,
      set: (g) => {
        r.state.confirm.visible.value = g;
      }
    });
    return e({
      setConflictDialogLoading: (g) => {
        o.value?.setLoading(g);
      },
      setManualMergeLoading: (g) => {
        l.value?.setLoading(g);
      }
    }), (g, b) => (x(), R(
      _e,
      null,
      [
        g.runtimeReady ? (x(), se(m(n), {
          key: 0,
          modelValue: m(h),
          "onUpdate:modelValue": b[0] || (b[0] = (k) => Qt(h) ? h.value = k : null),
          "conflict-files": m(a),
          "untracked-files": m(c),
          onConfirm: g.controller.handleConflictResolution,
          onCancel: g.controller.handleConflictCancel,
          onEscape: g.controller.handleConflictEscape,
          ref_key: "conflictDialogRef",
          ref: o
        }, null, 8, ["modelValue", "conflict-files", "untracked-files", "onConfirm", "onCancel", "onEscape"])) : j("v-if", !0),
        g.runtimeReady ? (x(), se(m(i), {
          key: 1,
          modelValue: m(p),
          "onUpdate:modelValue": b[1] || (b[1] = (k) => Qt(p) ? p.value = k : null),
          "conflict-files": m(u),
          onComplete: g.controller.handleManualMergeComplete,
          onCancel: g.controller.handleManualMergeCancel,
          onBack: g.controller.handleManualMergeBack,
          onEscape: g.controller.handleManualMergeEscape,
          ref_key: "manualMergeRef",
          ref: l
        }, null, 8, ["modelValue", "conflict-files", "onComplete", "onCancel", "onBack", "onEscape"])) : j("v-if", !0),
        Z(Hs, {
          modelValue: m(v),
          "onUpdate:modelValue": b[2] || (b[2] = (k) => Qt(v) ? v.value = k : null),
          title: m(s)("settings.gitSync.repoNotFoundTitle"),
          message: m(f),
          "primary-text": m(s)("settings.gitSync.repoNotFoundReconfig"),
          "secondary-text": m(s)("settings.gitSync.repoNotFoundIgnore"),
          type: "warning",
          onPrimary: g.controller.handleRepoNotFoundReconfig,
          onSecondary: g.controller.handleRepoNotFoundIgnore,
          onClose: g.controller.handleRepoNotFoundIgnore
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text", "onPrimary", "onSecondary", "onClose"]),
        Z(Hs, {
          modelValue: m(y),
          "onUpdate:modelValue": b[3] || (b[3] = (k) => Qt(y) ? y.value = k : null),
          title: m(d).title,
          message: m(d).message,
          "primary-text": m(d).primaryText,
          "secondary-text": m(d).secondaryText,
          type: m(d).type,
          onPrimary: b[4] || (b[4] = (k) => g.state.confirm.handleResult("primary")),
          onSecondary: b[5] || (b[5] = (k) => g.state.confirm.handleResult("secondary")),
          onClose: b[6] || (b[6] = (k) => g.state.confirm.handleResult("close"))
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text", "type"])
      ],
      64
      /* STABLE_FRAGMENT */
    ));
  }
});
function TL({
  runtime: t,
  shouldInit: e,
  getAutoSyncWindow: n
}) {
  let i = !1;
  pe(
    e,
    async (r) => {
      r === null || i || (i = !0, await t.setupAndRestore({
        shouldInit: r,
        autoSyncWindow: n?.()
      }));
    },
    { immediate: !0 }
  ), Jr(() => {
    t.cleanup();
  });
}
const AL = /* @__PURE__ */ Q({
  __name: "GitSyncRuntimeMount",
  props: {
    runtime: {},
    shouldInit: { type: [Boolean, null] }
  },
  setup(t) {
    const e = t, { portalRef: n } = e.runtime;
    return TL({
      runtime: e.runtime,
      shouldInit: M(() => e.shouldInit),
      getAutoSyncWindow: Ef
    }), (i, r) => (x(), se(EL, {
      ref_key: "portalRef",
      ref: n,
      "runtime-ready": i.runtime.ready.value,
      state: i.runtime.state,
      controller: i.runtime.controller
    }, null, 8, ["runtime-ready", "state", "controller"]));
  }
}), OL = (t) => {
  window.dispatchEvent(new CustomEvent("refresh-data", {
    detail: { source: t }
  }));
}, xL = (t) => ({
  t: t.t,
  modalMsg: t.modalMsg,
  dispatchRefreshData: t.dispatchRefreshData ?? OL,
  logger: t.logger ?? Ce
});
function ML(t) {
  const {
    t: e,
    modalMsg: n,
    dispatchRefreshData: i,
    logger: r
  } = xL(t);
  return {
    notifyForcePushResolved: () => {
      n(e("settings.gitSync.forcePushSuccess"), "success", "bottom-right"), i("force-push");
    },
    notifyForcePullResolved: () => {
      n(e("settings.gitSync.forcePullSuccess"), "success", "bottom-right"), i("force-pull");
    },
    notifyManualMergeResolved: () => {
      n(e("settings.gitSync.mergeSuccess"), "success", "bottom-right"), i("manual-merge"), r.info("[GitSync] 手动合并完成，自动同步已由后端恢复");
    },
    notifyAutoSyncResumed: (c) => {
      n(e("settings.gitSync.autoSyncResumed"), "info", "bottom-right"), c === "manual-merge" ? r.info("[GitSync] 用户从手动合并中选择恢复自动同步") : r.info("[GitSync] 用户选择恢复自动同步");
    }
  };
}
const LL = async (t, e) => {
  await Y("write_conflict_file", {
    filePath: t,
    content: e
  });
}, wa = (t = {}) => ({
  forcePush: t.forcePush ?? VM,
  forcePull: t.forcePull ?? HM,
  removeUntrackedFile: t.removeUntrackedFile ?? Ov,
  resumeAutoSync: t.resumeAutoSync ?? $M,
  resolveConflictsBatch: t.resolveConflictsBatch ?? WM,
  writeConflictFile: t.writeConflictFile ?? LL,
  logger: t.logger ?? Ce
});
async function Tf(t = {}) {
  const { resumeAutoSync: e, logger: n } = wa(t);
  try {
    return await e(), n.info("[GitSync] 冲突已解决，已恢复自动同步"), !0;
  } catch (i) {
    return n.error("[GitSync] 恢复自动同步失败:", i), !1;
  }
}
async function IL(t = {}) {
  const { forcePush: e } = wa(t);
  await e(), await Tf(t);
}
async function PL(t, e = {}) {
  const { forcePull: n, removeUntrackedFile: i, logger: r } = wa(e);
  for (const s of t)
    try {
      await i(s), r.info("[GitSync] 已删除未跟踪文件:", s);
    } catch (o) {
      r.warn(`[GitSync] 删除未跟踪文件失败: ${s} ${o}`);
    }
  await n(), await Tf(e);
}
async function DL(t, e = {}) {
  const { files: n, selections: i, editedContents: r } = t, { resolveConflictsBatch: s, writeConflictFile: o, logger: l } = wa(e);
  for (const [u, f] of Object.entries(r)) {
    const d = Number.parseInt(u, 10);
    if (i[d] === "local" && f) {
      const h = n[d];
      if (!h) continue;
      l.info("[GitSync] 保存编辑后的本地内容:", h), await o(h, f), l.info("[GitSync] 已保存编辑后的内容到:", h);
    }
  }
  const a = n.map((u, f) => [
    u,
    i[f] === "remote" ? Fc.KeepRemote : Fc.KeepLocal
  ]), c = await s(a);
  return l.info(`[GitSync] 手动合并成功，已解决 ${c.resolved_count} 个冲突`), c;
}
function RL(t) {
  const e = t.logger ?? Ce, n = t.resolveForcePush ?? IL, i = t.resolveForcePull ?? PL, r = t.completeMerge ?? DL, s = t.resumeAutoSync ?? Tf;
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
      t.closeConflictDialog(), t.resetConflictHandled(), h === "secondary" ? (t.clearConflictFiles({ clearUntracked: !1 }), await s() && t.feedback.notifyAutoSyncResumed("conflict-dialog")) : e.info("[GitSync] 用户选择稍后处理冲突");
    },
    handleManualMergeComplete: async (h, p) => {
      if (t.manualMergeRef.value) {
        t.resetConflictHandled(), t.manualMergeRef.value.setLoading(!0);
        try {
          await r(t.getManualMergeInput(h, p)), t.feedback.notifyManualMergeResolved(), t.closeManualMergeDialog(), t.clearConflictFiles();
        } finally {
          t.manualMergeRef.value?.setLoading(!1);
        }
      }
    },
    handleManualMergeCancel: async () => {
      const h = await t.confirmCancelConflict();
      t.closeManualMergeDialog(), t.resetConflictHandled(), h === "secondary" ? (t.clearConflictFiles(), await s() && t.feedback.notifyAutoSyncResumed("manual-merge")) : e.info("[GitSync] 用户选择稍后处理手动合并");
    },
    handleManualMergeBack: () => {
      t.backToConflictDialog(), e.info("[GitSync] 用户从手动合并返回到冲突对话框");
    },
    handleManualMergeEscape: () => {
      t.closeManualMergeDialog(), t.resetConflictHandled();
    }
  };
}
function NL(t) {
  const e = t.logger ?? Ce, { dialogs: n, confirm: i, repoNotFound: r } = t.state, s = I(null), o = M(() => s.value ? {
    setLoading: s.value.setConflictDialogLoading
  } : null), l = M(() => s.value ? {
    setLoading: s.value.setManualMergeLoading
  } : null), a = ML({
    t: t.t,
    modalMsg: t.modalMsg
  }), c = (g, b) => {
    if (b === "cancel") return;
    const k = String(b).replace(/^Error:\s*/, "");
    if (g === "manual-merge") {
      e.error("[GitSync] 手动合并失败:", b), t.modalMsg(`${t.t("settings.gitSync.mergeFailed")}: ${k}`, "error", "top-right");
      return;
    }
    e.error("[GitSync] 冲突处理失败:", b), t.modalMsg(`${t.t("settings.gitSync.conflictResolutionFailed")}: ${k}`, "error", "top-right");
  }, u = RL({
    conflictDialogRef: o,
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
    getManualMergeInput: (g, b) => ({
      files: n.mergeFileList.value,
      selections: g,
      editedContents: b
    }),
    feedback: a,
    logger: e
  }), f = async (g) => {
    try {
      await u.handleConflictResolution(g);
    } catch (b) {
      c("conflict", b);
    }
  }, d = async () => {
    try {
      await u.handleConflictCancel();
    } catch (g) {
      c("conflict", g);
    }
  }, h = async (g, b) => {
    try {
      await u.handleManualMergeComplete(g, b);
    } catch (k) {
      c("manual-merge", k);
    }
  }, p = async () => {
    try {
      await u.handleManualMergeCancel();
    } catch (g) {
      c("manual-merge", g);
    }
  }, v = async () => {
    r.close(), e.info("[GitSync] 用户选择重新配置仓库"), await t.routeToGitSettings();
  }, y = () => {
    r.ignore(), e.info("[GitSync] 用户选择忽略仓库不存在错误"), t.modalMsg(t.t("settings.gitSync.repoNotFoundIgnored"), "info", "bottom-right");
  };
  return {
    gitSyncRuntimePortalRef: s,
    handleConflictResolution: f,
    handleConflictEscape: u.handleConflictEscape,
    handleConflictCancel: d,
    handleManualMergeComplete: h,
    handleManualMergeCancel: p,
    handleManualMergeBack: u.handleManualMergeBack,
    handleManualMergeEscape: u.handleManualMergeEscape,
    handleRepoNotFoundReconfig: v,
    handleRepoNotFoundIgnore: y
  };
}
const FL = () => {
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent("refresh-data", {
      detail: { source: "startup-pull" }
    }));
  }, 500);
}, Fv = () => Promise.resolve().then(() => WR), $v = () => Promise.resolve().then(() => jR), Bv = () => Promise.resolve().then(() => qR);
async function $L(t) {
  const [
    e,
    n,
    i
  ] = await Promise.all([
    (t.loadGitLifecycle ?? Fv)(),
    (t.loadGitSyncRuntime ?? $v)(),
    (t.loadGitAutoSyncLifecycle ?? Bv)()
  ]);
  return VL({
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
async function BL(t) {
  const [
    e,
    n,
    i
  ] = await Promise.all([
    (t.loadGitLifecycle ?? Fv)(),
    (t.loadGitSyncRuntime ?? $v)(),
    (t.loadGitAutoSyncLifecycle ?? Bv)()
  ]);
  await HL({
    host: t.host,
    cleanupGitEventListeners: e.cleanupGitEventListeners,
    cleanupGitSyncRuntimeListeners: n.cleanupGitSyncRuntimeListeners,
    stopAutoSyncForHiddenWindow: i.stopAutoSyncForHiddenWindow,
    isPluginEnabled: t.isPluginEnabled,
    logger: t.logger
  });
}
async function VL(t) {
  const e = t.logger, n = {
    gitListeners: null,
    runtimeListeners: null,
    autoSyncWindowListeners: null
  };
  return n.gitListeners = await t.setupGitEventListeners(t.t), e?.info("[GitSync] Git 事件监听器已设置"), n.runtimeListeners = await t.setupGitSyncRuntimeListeners({
    isConflictDialogVisible: t.isConflictDialogVisible,
    onConflictDetected: t.onConflictDetected,
    onRepoNotFound: t.onRepoNotFound
  }), e?.info("[GitSync] Git runtime 事件监听器已设置"), await t.ensureWorkspaceGitignore(), t.shouldInit && await t.initGitSync(t.t) && (t.scheduleStartupRefresh ?? FL)(), t.autoSyncWindow && t.startAutoSyncForVisibleWindow && t.stopAutoSyncForHiddenWindow && (n.autoSyncWindowListeners = await WL(t)), n;
}
async function HL(t) {
  t.host.gitListeners && (t.cleanupGitEventListeners(t.host.gitListeners), t.logger?.info("[GitSync] Git 事件监听器已清理")), t.host.runtimeListeners && (t.cleanupGitSyncRuntimeListeners(t.host.runtimeListeners), t.logger?.info("[GitSync] Git runtime 事件监听器已清理")), t.host.autoSyncWindowListeners && (t.host.autoSyncWindowListeners.show?.(), t.host.autoSyncWindowListeners.hide?.(), t.logger?.info("[GitSync] Git 自动同步窗口监听器已清理")), t.stopAutoSyncForHiddenWindow && await t.stopAutoSyncForHiddenWindow({
    isPluginEnabled: t.isPluginEnabled
  });
}
async function WL(t) {
  const e = t.autoSyncWindow, n = t.startAutoSyncForVisibleWindow, i = t.stopAutoSyncForHiddenWindow;
  if (!e || !n || !i)
    return {
      show: null,
      hide: null
    };
  const r = async () => {
    await n({
      isPluginEnabled: t.isPluginEnabled
    });
  }, s = async () => {
    await i({
      isPluginEnabled: t.isPluginEnabled
    });
  }, o = await e.listen("tauri://show", async () => {
    t.logger?.info("[GitSync] 窗口显示事件触发"), await r();
  }), l = await e.listen("tauri://hide", async () => {
    t.logger?.info("[GitSync] 窗口隐藏事件触发"), await s();
  });
  return await e.isVisible() && await r(), {
    show: o,
    hide: l
  };
}
function zL(t = {}) {
  const e = t.logger ?? Ce, n = t.setupHost ?? $L, i = t.cleanupHost ?? BL, r = I(!1), s = I(null), o = async (u) => {
    r.value = !0, s.value = await n({
      ...u,
      logger: e
    }), e.info("[GitSync] runtime host 已设置");
  };
  return {
    ready: r,
    host: s,
    setup: o,
    setupWithState: async (u) => o({
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
      s.value && (await i({
        host: s.value,
        isPluginEnabled: u,
        logger: e
      }), s.value = null, r.value = !1);
    },
    resetConflictHandled: () => {
      s.value?.runtimeListeners?.resetConflictHandled();
    }
  };
}
const GL = {
  title: "",
  message: "",
  primaryText: "",
  secondaryText: "",
  type: "info"
};
function UL(t) {
  const e = I(!1), n = I({ ...GL });
  let i = null;
  const r = (c) => (n.value = {
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
    confirmForcePush: async () => await r({
      title: t("settings.gitSync.confirmForcePush"),
      message: t("settings.gitSync.confirmForcePushMessage"),
      primaryText: t("common.confirm"),
      secondaryText: t("common.cancel"),
      type: "warning"
    }) === "primary",
    confirmForcePull: async () => await r({
      title: t("settings.gitSync.confirmForcePull"),
      message: t("settings.gitSync.confirmForcePullMessage"),
      primaryText: t("common.confirm"),
      secondaryText: t("common.cancel"),
      type: "warning"
    }) === "primary",
    confirmCancelConflict: async () => r({
      title: t("settings.gitSync.cancelConflictTitle"),
      message: t("settings.gitSync.cancelConflictMessage"),
      primaryText: t("settings.gitSync.handleLater"),
      secondaryText: t("settings.gitSync.resumeSync"),
      type: "warning"
    })
  };
}
const Af = "git-conflict-state", jL = 1e4;
function Jh(t) {
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
function KL(t, e, n = Date.now()) {
  if (e.length === 0) return;
  const i = {
    conflictFiles: e,
    timestamp: n
  };
  t.setItem(Af, JSON.stringify(i));
}
function Vv(t) {
  t.removeItem(Af);
}
function YL(t, e = Date.now(), n = jL) {
  const i = t.getItem(Af);
  if (!i) return null;
  try {
    const r = JSON.parse(i), s = Array.isArray(r.conflictFiles) ? r.conflictFiles.filter((l) => typeof l == "string") : [], o = typeof r.timestamp == "number" ? r.timestamp : 0;
    if (s.length > 0 && e - o < n)
      return {
        conflictFiles: s,
        timestamp: o
      };
  } catch {
  }
  return Vv(t), null;
}
function qL(t = {}) {
  const e = t.storage ?? sessionStorage, n = t.logger ?? Ce, i = I(!1), r = I(!1), s = I([]), o = I([]), l = M(() => [...s.value, ...o.value]), a = () => {
    KL(e, s.value);
  };
  return {
    showConflictDialog: i,
    showManualMergeDialog: r,
    conflictFiles: s,
    untrackedFiles: o,
    mergeFileList: l,
    persistConflictState: a,
    restoreConflictDialogState: () => {
      const y = YL(e);
      return y ? (s.value = y.conflictFiles, i.value = !0, n.info("[GitSync] 恢复冲突状态，显示对话框"), !0) : !1;
    },
    setConflictFiles: ({
      conflictFiles: y,
      untrackedFiles: g = []
    }) => {
      s.value = y, o.value = g, a(), i.value = !0;
    },
    clearConflictFiles: (y = {}) => {
      Vv(e), s.value = [], y.clearUntracked !== !1 && (o.value = []);
    },
    closeConflictDialog: () => {
      i.value = !1;
    },
    openManualMergeDialog: () => {
      i.value = !1, r.value = !0;
    },
    closeManualMergeDialog: () => {
      r.value = !1;
    },
    backToConflictDialog: () => {
      r.value = !1, i.value = !0;
    }
  };
}
function JL(t) {
  const e = I(!1), n = I({
    remoteUrl: "",
    operation: ""
  }), i = M(() => t("settings.gitSync.repoNotFoundMessage", {
    url: n.value.remoteUrl,
    operation: n.value.operation
  })), r = (a) => {
    n.value = a, e.value = !0;
  }, s = () => {
    e.value = !1;
  }, o = () => {
    n.value = {
      remoteUrl: "",
      operation: ""
    };
  };
  return {
    visible: e,
    info: n,
    message: i,
    open: r,
    close: s,
    reset: o,
    ignore: () => {
      s(), o();
    }
  };
}
function XL(t) {
  const e = qL({
    storage: t.storage,
    logger: t.logger
  }), n = UL(t.t), i = JL(t.t);
  return {
    dialogs: e,
    confirm: n,
    repoNotFound: i
  };
}
function ZL(t) {
  const e = t.logger ?? Ce, n = XL({
    t: t.t,
    ...t.stateDeps
  }), i = zL({
    ...t.hostControllerDeps,
    logger: e
  }), r = NL({
    t: t.t,
    modalMsg: t.modalMsg,
    routeToGitSettings: t.routeToGitSettings,
    resetConflictHandled: i.resetConflictHandled,
    state: n,
    logger: e
  }), s = async ({ shouldInit: c, autoSyncWindow: u }) => {
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
  }, o = () => n.dialogs.restoreConflictDialogState(), l = async (c) => (await s(c), o()), a = () => i.cleanup(t.isPluginEnabled);
  return {
    state: n,
    controller: r,
    portalRef: r.gitSyncRuntimePortalRef,
    ready: i.ready,
    setup: s,
    setupAndRestore: l,
    restoreConflictDialogState: o,
    cleanup: a
  };
}
const QL = /* @__PURE__ */ Q({
  name: "GitSyncRuntimeHost",
  __name: "GitSyncRuntimeHost",
  props: {
    configHostContext: {}
  },
  setup(t) {
    const e = t, { t: n } = Dr(), i = ZL({
      t: n,
      modalMsg: qe.msg.bind(qe),
      routeToGitSettings: () => e.configHostContext.navigateTo("/config/category/settings?tab=gitSync"),
      isPluginEnabled: () => e.configHostContext.isPluginEnabled("git-sync"),
      logger: Ce
    });
    return (r, s) => (x(), se(AL, {
      runtime: m(i),
      "should-init": r.configHostContext.shouldInit
    }, null, 8, ["runtime", "should-init"]));
  }
}), eI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: QL
}, Symbol.toStringTag, { value: "Module" })), tI = { class: "conflict-body" }, nI = {
  key: 0,
  class: "section"
}, iI = { class: "section-label" }, rI = { class: "file-list" }, sI = { class: "file-name" }, oI = {
  key: 1,
  class: "section"
}, lI = { class: "section-label" }, aI = { class: "file-list" }, cI = { class: "file-name" }, uI = { class: "section" }, fI = { class: "section-label" }, dI = { class: "strategy-list" }, hI = { class: "card-body" }, pI = { class: "card-title" }, gI = { class: "card-desc" }, mI = { class: "card-badge recommended" }, vI = { class: "card-body" }, yI = { class: "card-title" }, bI = { class: "card-desc" }, wI = { class: "card-body" }, SI = { class: "card-title" }, CI = { class: "card-desc" }, kI = {
  key: 0,
  class: "warning-box"
}, _I = { class: "warning-text" }, EI = { class: "conflict-footer" }, TI = /* @__PURE__ */ Q({
  __name: "index",
  props: {
    modelValue: { type: Boolean },
    conflictFiles: {},
    untrackedFiles: {}
  },
  emits: ["update:modelValue", "confirm", "cancel", "escape"],
  setup(t, { expose: e, emit: n }) {
    const i = t, r = n, s = M({
      get: () => i.modelValue,
      set: (v) => r("update:modelValue", v)
    }), o = M(() => i.conflictFiles || []), l = M(() => i.untrackedFiles || []), a = I(""), c = I(!1), u = I(!1);
    pe(s, (v) => {
      v && (a.value = "", c.value = !1);
    });
    function f() {
      a.value && r("confirm", a.value);
    }
    function d() {
      p(), r("cancel");
    }
    function h() {
      if (s.value = !1, u.value) {
        u.value = !1;
        return;
      }
      r("escape");
    }
    function p() {
      u.value = !0, s.value = !1;
    }
    return e({
      setLoading: (v) => {
        c.value = v;
      }
    }), (v, y) => (x(), se(m(Cf), {
      modelValue: m(s),
      "onUpdate:modelValue": y[3] || (y[3] = (g) => Qt(s) ? s.value = g : null),
      title: v.$t("settings.gitSync.conflictDetected"),
      width: "520px",
      "custom-class": "git-conflict-dialog warning-dialog",
      "close-on-click-modal": !0,
      onClose: h
    }, {
      footer: X(() => [
        T("div", EI, [
          Z(m(Vn), {
            onClick: d,
            disabled: m(c)
          }, {
            default: X(() => [
              Ve(
                G(v.$t("common.cancel")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled"]),
          Z(m(Vn), {
            type: "primary",
            onClick: f,
            disabled: !m(a),
            loading: m(c)
          }, {
            default: X(() => [
              Ve(
                G(v.$t("common.confirm")),
                1
                /* TEXT */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "loading"])
        ])
      ]),
      default: X(() => [
        T("div", tI, [
          j(" 冲突文件列表 "),
          m(o).length > 0 ? (x(), R("div", nI, [
            T(
              "div",
              iI,
              G(v.$t("settings.gitSync.conflictFiles")),
              1
              /* TEXT */
            ),
            T("div", rI, [
              (x(!0), R(
                _e,
                null,
                Ct(m(o), (g) => (x(), R("div", {
                  key: g,
                  class: "file-item conflict"
                }, [
                  y[4] || (y[4] = T(
                    "span",
                    { class: "file-dot conflict-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  T(
                    "span",
                    sI,
                    G(g),
                    1
                    /* TEXT */
                  )
                ]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])) : j("v-if", !0),
          j(" 未跟踪文件列表（会被远程覆盖） "),
          m(l).length > 0 ? (x(), R("div", oI, [
            T(
              "div",
              lI,
              G(v.$t("settings.gitSync.untrackedFiles") || "未跟踪文件（会被远程覆盖）"),
              1
              /* TEXT */
            ),
            T("div", aI, [
              (x(!0), R(
                _e,
                null,
                Ct(m(l), (g) => (x(), R("div", {
                  key: g,
                  class: "file-item untracked"
                }, [
                  y[5] || (y[5] = T(
                    "span",
                    { class: "file-dot untracked-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  T(
                    "span",
                    cI,
                    G(g),
                    1
                    /* TEXT */
                  )
                ]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])) : j("v-if", !0),
          j(" 策略选择 "),
          T("div", uI, [
            T(
              "div",
              fI,
              G(v.$t("settings.gitSync.selectResolution")),
              1
              /* TEXT */
            ),
            T("div", dI, [
              T(
                "button",
                {
                  class: U(["strategy-card", { active: m(a) === "manual-merge" }]),
                  onClick: y[0] || (y[0] = (g) => a.value = "manual-merge")
                },
                [
                  y[6] || (y[6] = T(
                    "div",
                    { class: "card-icon merge-icon" },
                    "⇄",
                    -1
                    /* HOISTED */
                  )),
                  T("div", hI, [
                    T(
                      "div",
                      pI,
                      G(v.$t("settings.gitSync.manualMerge")),
                      1
                      /* TEXT */
                    ),
                    T(
                      "div",
                      gI,
                      G(v.$t("settings.gitSync.manualMergeDesc")),
                      1
                      /* TEXT */
                    )
                  ]),
                  T(
                    "div",
                    mI,
                    G(v.$t("settings.gitSync.recommended")),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              T(
                "button",
                {
                  class: U(["strategy-card", { active: m(a) === "force-pull" }]),
                  onClick: y[1] || (y[1] = (g) => a.value = "force-pull")
                },
                [
                  y[7] || (y[7] = T(
                    "div",
                    { class: "card-icon pull-icon" },
                    "↓",
                    -1
                    /* HOISTED */
                  )),
                  T("div", vI, [
                    T(
                      "div",
                      yI,
                      G(v.$t("settings.gitSync.forcePull")),
                      1
                      /* TEXT */
                    ),
                    T(
                      "div",
                      bI,
                      G(v.$t("settings.gitSync.forcePullDesc")),
                      1
                      /* TEXT */
                    )
                  ])
                ],
                2
                /* CLASS */
              ),
              T(
                "button",
                {
                  class: U(["strategy-card", { active: m(a) === "force-push" }]),
                  onClick: y[2] || (y[2] = (g) => a.value = "force-push")
                },
                [
                  y[8] || (y[8] = T(
                    "div",
                    { class: "card-icon push-icon" },
                    "↑",
                    -1
                    /* HOISTED */
                  )),
                  T("div", wI, [
                    T(
                      "div",
                      SI,
                      G(v.$t("settings.gitSync.forcePush")),
                      1
                      /* TEXT */
                    ),
                    T(
                      "div",
                      CI,
                      G(v.$t("settings.gitSync.forcePushDesc")),
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
          j(" 警告提示 "),
          Z(Ri, { name: "warning-slide" }, {
            default: X(() => [
              m(a) === "force-push" || m(a) === "force-pull" ? (x(), R("div", kI, [
                y[9] || (y[9] = T(
                  "span",
                  { class: "warning-icon" },
                  "⚠",
                  -1
                  /* HOISTED */
                )),
                T(
                  "span",
                  _I,
                  G(m(a) === "force-push" ? v.$t("settings.gitSync.forcePushWarning") : v.$t("settings.gitSync.forcePullWarning")),
                  1
                  /* TEXT */
                )
              ])) : j("v-if", !0)
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
}), AI = /* @__PURE__ */ $i(TI, [["__scopeId", "data-v-944a888d"]]), OI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AI
}, Symbol.toStringTag, { value: "Module" }));
let Hc = [], Hv = [];
(() => {
  let t = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((e) => e ? parseInt(e, 36) : 1);
  for (let e = 0, n = 0; e < t.length; e++)
    (e % 2 ? Hv : Hc).push(n = n + t[e]);
})();
function xI(t) {
  if (t < 768) return !1;
  for (let e = 0, n = Hc.length; ; ) {
    let i = e + n >> 1;
    if (t < Hc[i]) n = i;
    else if (t >= Hv[i]) e = i + 1;
    else return !0;
    if (e == n) return !1;
  }
}
function Xh(t) {
  return t >= 127462 && t <= 127487;
}
const Zh = 8205;
function MI(t, e, n = !0, i = !0) {
  return (n ? Wv : LI)(t, e, i);
}
function Wv(t, e, n) {
  if (e == t.length) return e;
  e && zv(t.charCodeAt(e)) && Gv(t.charCodeAt(e - 1)) && e--;
  let i = Ja(t, e);
  for (e += Qh(i); e < t.length; ) {
    let r = Ja(t, e);
    if (i == Zh || r == Zh || n && xI(r))
      e += Qh(r), i = r;
    else if (Xh(r)) {
      let s = 0, o = e - 2;
      for (; o >= 0 && Xh(Ja(t, o)); )
        s++, o -= 2;
      if (s % 2 == 0) break;
      e += 2;
    } else
      break;
  }
  return e;
}
function LI(t, e, n) {
  for (; e > 0; ) {
    let i = Wv(t, e - 2, n);
    if (i < e) return i;
    e--;
  }
  return 0;
}
function Ja(t, e) {
  let n = t.charCodeAt(e);
  if (!Gv(n) || e + 1 == t.length) return n;
  let i = t.charCodeAt(e + 1);
  return zv(i) ? (n - 55296 << 10) + (i - 56320) + 65536 : n;
}
function zv(t) {
  return t >= 56320 && t < 57344;
}
function Gv(t) {
  return t >= 55296 && t < 56320;
}
function Qh(t) {
  return t < 65536 ? 1 : 2;
}
class De {
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
    [e, n] = ls(this, e, n);
    let r = [];
    return this.decompose(
      0,
      e,
      r,
      2
      /* Open.To */
    ), i.length && i.decompose(
      0,
      i.length,
      r,
      3
      /* Open.To */
    ), this.decompose(
      n,
      this.length,
      r,
      1
      /* Open.From */
    ), Zn.from(r, this.length - (n - e) + i.length);
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
    [e, n] = ls(this, e, n);
    let i = [];
    return this.decompose(e, n, i, 0), Zn.from(i, n - e);
  }
  /**
  Test whether this text is equal to another instance.
  */
  eq(e) {
    if (e == this)
      return !0;
    if (e.length != this.length || e.lines != this.lines)
      return !1;
    let n = this.scanIdentical(e, 1), i = this.length - this.scanIdentical(e, -1), r = new Us(this), s = new Us(e);
    for (let o = n, l = n; ; ) {
      if (r.next(o), s.next(o), o = 0, r.lineBreak != s.lineBreak || r.done != s.done || r.value != s.value)
        return !1;
      if (l += r.value.length, r.done || l >= i)
        return !0;
    }
  }
  /**
  Iterate over the text. When `dir` is `-1`, iteration happens
  from end to start. This will return lines and the breaks between
  them as separate strings.
  */
  iter(e = 1) {
    return new Us(this, e);
  }
  /**
  Iterate over a range of the text. When `from` > `to`, the
  iterator will run in reverse.
  */
  iterRange(e, n = this.length) {
    return new Uv(this, e, n);
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
      let r = this.line(e).from;
      i = this.iterRange(r, Math.max(r, n == this.lines + 1 ? this.length : n <= 1 ? 0 : this.line(n - 1).to));
    }
    return new jv(i);
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
    return e.length == 1 && !e[0] ? De.empty : e.length <= 32 ? new dt(e) : Zn.from(dt.split(e, []));
  }
}
class dt extends De {
  constructor(e, n = II(e)) {
    super(), this.text = e, this.length = n;
  }
  get lines() {
    return this.text.length;
  }
  get children() {
    return null;
  }
  lineInner(e, n, i, r) {
    for (let s = 0; ; s++) {
      let o = this.text[s], l = r + o.length;
      if ((n ? i : l) >= e)
        return new PI(r, l, i, o);
      r = l + 1, i++;
    }
  }
  decompose(e, n, i, r) {
    let s = e <= 0 && n >= this.length ? this : new dt(ep(this.text, e, n), Math.min(n, this.length) - Math.max(0, e));
    if (r & 1) {
      let o = i.pop(), l = ml(s.text, o.text.slice(), 0, s.length);
      if (l.length <= 32)
        i.push(new dt(l, o.length + s.length));
      else {
        let a = l.length >> 1;
        i.push(new dt(l.slice(0, a)), new dt(l.slice(a)));
      }
    } else
      i.push(s);
  }
  replace(e, n, i) {
    if (!(i instanceof dt))
      return super.replace(e, n, i);
    [e, n] = ls(this, e, n);
    let r = ml(this.text, ml(i.text, ep(this.text, 0, e)), n), s = this.length + i.length - (n - e);
    return r.length <= 32 ? new dt(r, s) : Zn.from(dt.split(r, []), s);
  }
  sliceString(e, n = this.length, i = `
`) {
    [e, n] = ls(this, e, n);
    let r = "";
    for (let s = 0, o = 0; s <= n && o < this.text.length; o++) {
      let l = this.text[o], a = s + l.length;
      s > e && o && (r += i), e < a && n > s && (r += l.slice(Math.max(0, e - s), n - s)), s = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let n of this.text)
      e.push(n);
  }
  scanIdentical() {
    return 0;
  }
  static split(e, n) {
    let i = [], r = -1;
    for (let s of e)
      i.push(s), r += s.length + 1, i.length == 32 && (n.push(new dt(i, r)), i = [], r = -1);
    return r > -1 && n.push(new dt(i, r)), n;
  }
}
class Zn extends De {
  constructor(e, n) {
    super(), this.children = e, this.length = n, this.lines = 0;
    for (let i of e)
      this.lines += i.lines;
  }
  lineInner(e, n, i, r) {
    for (let s = 0; ; s++) {
      let o = this.children[s], l = r + o.length, a = i + o.lines - 1;
      if ((n ? a : l) >= e)
        return o.lineInner(e, n, i, r);
      r = l + 1, i = a + 1;
    }
  }
  decompose(e, n, i, r) {
    for (let s = 0, o = 0; o <= n && s < this.children.length; s++) {
      let l = this.children[s], a = o + l.length;
      if (e <= a && n >= o) {
        let c = r & ((o <= e ? 1 : 0) | (a >= n ? 2 : 0));
        o >= e && a <= n && !c ? i.push(l) : l.decompose(e - o, n - o, i, c);
      }
      o = a + 1;
    }
  }
  replace(e, n, i) {
    if ([e, n] = ls(this, e, n), i.lines < this.lines)
      for (let r = 0, s = 0; r < this.children.length; r++) {
        let o = this.children[r], l = s + o.length;
        if (e >= s && n <= l) {
          let a = o.replace(e - s, n - s, i), c = this.lines - o.lines + a.lines;
          if (a.lines < c >> 4 && a.lines > c >> 6) {
            let u = this.children.slice();
            return u[r] = a, new Zn(u, this.length - (n - e) + i.length);
          }
          return super.replace(s, l, a);
        }
        s = l + 1;
      }
    return super.replace(e, n, i);
  }
  sliceString(e, n = this.length, i = `
`) {
    [e, n] = ls(this, e, n);
    let r = "";
    for (let s = 0, o = 0; s < this.children.length && o <= n; s++) {
      let l = this.children[s], a = o + l.length;
      o > e && s && (r += i), e < a && n > o && (r += l.sliceString(e - o, n - o, i)), o = a + 1;
    }
    return r;
  }
  flatten(e) {
    for (let n of this.children)
      n.flatten(e);
  }
  scanIdentical(e, n) {
    if (!(e instanceof Zn))
      return 0;
    let i = 0, [r, s, o, l] = n > 0 ? [0, 0, this.children.length, e.children.length] : [this.children.length - 1, e.children.length - 1, -1, -1];
    for (; ; r += n, s += n) {
      if (r == o || s == l)
        return i;
      let a = this.children[r], c = e.children[s];
      if (a != c)
        return i + a.scanIdentical(c, n);
      i += a.length + 1;
    }
  }
  static from(e, n = e.reduce((i, r) => i + r.length + 1, -1)) {
    let i = 0;
    for (let h of e)
      i += h.lines;
    if (i < 32) {
      let h = [];
      for (let p of e)
        p.flatten(h);
      return new dt(h, n);
    }
    let r = Math.max(
      32,
      i >> 5
      /* Tree.BranchShift */
    ), s = r << 1, o = r >> 1, l = [], a = 0, c = -1, u = [];
    function f(h) {
      let p;
      if (h.lines > s && h instanceof Zn)
        for (let v of h.children)
          f(v);
      else h.lines > o && (a > o || !a) ? (d(), l.push(h)) : h instanceof dt && a && (p = u[u.length - 1]) instanceof dt && h.lines + p.lines <= 32 ? (a += h.lines, c += h.length + 1, u[u.length - 1] = new dt(p.text.concat(h.text), p.length + 1 + h.length)) : (a + h.lines > r && d(), a += h.lines, c += h.length + 1, u.push(h));
    }
    function d() {
      a != 0 && (l.push(u.length == 1 ? u[0] : Zn.from(u, c)), c = -1, a = u.length = 0);
    }
    for (let h of e)
      f(h);
    return d(), l.length == 1 ? l[0] : new Zn(l, n);
  }
}
De.empty = /* @__PURE__ */ new dt([""], 0);
function II(t) {
  let e = -1;
  for (let n of t)
    e += n.length + 1;
  return e;
}
function ml(t, e, n = 0, i = 1e9) {
  for (let r = 0, s = 0, o = !0; s < t.length && r <= i; s++) {
    let l = t[s], a = r + l.length;
    a >= n && (a > i && (l = l.slice(0, i - r)), r < n && (l = l.slice(n - r)), o ? (e[e.length - 1] += l, o = !1) : e.push(l)), r = a + 1;
  }
  return e;
}
function ep(t, e, n) {
  return ml(t, [""], e, n);
}
class Us {
  constructor(e, n = 1) {
    this.dir = n, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [e], this.offsets = [n > 0 ? 1 : (e instanceof dt ? e.text.length : e.children.length) << 1];
  }
  nextInner(e, n) {
    for (this.done = this.lineBreak = !1; ; ) {
      let i = this.nodes.length - 1, r = this.nodes[i], s = this.offsets[i], o = s >> 1, l = r instanceof dt ? r.text.length : r.children.length;
      if (o == (n > 0 ? l : 0)) {
        if (i == 0)
          return this.done = !0, this.value = "", this;
        n > 0 && this.offsets[i - 1]++, this.nodes.pop(), this.offsets.pop();
      } else if ((s & 1) == (n > 0 ? 0 : 1)) {
        if (this.offsets[i] += n, e == 0)
          return this.lineBreak = !0, this.value = `
`, this;
        e--;
      } else if (r instanceof dt) {
        let a = r.text[o + (n < 0 ? -1 : 0)];
        if (this.offsets[i] += n, a.length > Math.max(0, e))
          return this.value = e == 0 ? a : n > 0 ? a.slice(e) : a.slice(0, a.length - e), this;
        e -= a.length;
      } else {
        let a = r.children[o + (n < 0 ? -1 : 0)];
        e > a.length ? (e -= a.length, this.offsets[i] += n) : (n < 0 && this.offsets[i]--, this.nodes.push(a), this.offsets.push(n > 0 ? 1 : (a instanceof dt ? a.text.length : a.children.length) << 1));
      }
    }
  }
  next(e = 0) {
    return e < 0 && (this.nextInner(-e, -this.dir), e = this.value.length), this.nextInner(e, this.dir);
  }
}
class Uv {
  constructor(e, n, i) {
    this.value = "", this.done = !1, this.cursor = new Us(e, n > i ? -1 : 1), this.pos = n > i ? e.length : 0, this.from = Math.min(n, i), this.to = Math.max(n, i);
  }
  nextInner(e, n) {
    if (n < 0 ? this.pos <= this.from : this.pos >= this.to)
      return this.value = "", this.done = !0, this;
    e += Math.max(0, n < 0 ? this.pos - this.to : this.from - this.pos);
    let i = n < 0 ? this.pos - this.from : this.to - this.pos;
    e > i && (e = i), i -= e;
    let { value: r } = this.cursor.next(e);
    return this.pos += (r.length + e) * n, this.value = r.length <= i ? r : n < 0 ? r.slice(r.length - i) : r.slice(0, i), this.done = !this.value, this;
  }
  next(e = 0) {
    return e < 0 ? e = Math.max(e, this.from - this.pos) : e > 0 && (e = Math.min(e, this.to - this.pos)), this.nextInner(e, this.cursor.dir);
  }
  get lineBreak() {
    return this.cursor.lineBreak && this.value != "";
  }
}
class jv {
  constructor(e) {
    this.inner = e, this.afterBreak = !0, this.value = "", this.done = !1;
  }
  next(e = 0) {
    let { done: n, lineBreak: i, value: r } = this.inner.next(e);
    return n && this.afterBreak ? (this.value = "", this.afterBreak = !1) : n ? (this.done = !0, this.value = "") : i ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = r, this.afterBreak = !1), this;
  }
  get lineBreak() {
    return !1;
  }
}
typeof Symbol < "u" && (De.prototype[Symbol.iterator] = function() {
  return this.iter();
}, Us.prototype[Symbol.iterator] = Uv.prototype[Symbol.iterator] = jv.prototype[Symbol.iterator] = function() {
  return this;
});
class PI {
  /**
  @internal
  */
  constructor(e, n, i, r) {
    this.from = e, this.to = n, this.number = i, this.text = r;
  }
  /**
  The length of the line (not including any line break after it).
  */
  get length() {
    return this.to - this.from;
  }
}
function ls(t, e, n) {
  return e = Math.max(0, Math.min(t.length, e)), [e, Math.max(e, Math.min(t.length, n))];
}
function tn(t, e, n = !0, i = !0) {
  return MI(t, e, n, i);
}
function DI(t) {
  return t >= 56320 && t < 57344;
}
function RI(t) {
  return t >= 55296 && t < 56320;
}
function NI(t, e) {
  let n = t.charCodeAt(e);
  if (!RI(n) || e + 1 == t.length)
    return n;
  let i = t.charCodeAt(e + 1);
  return DI(i) ? (n - 55296 << 10) + (i - 56320) + 65536 : n;
}
function FI(t) {
  return t < 65536 ? 1 : 2;
}
const Wc = /\r\n?|\n/;
var gn = /* @__PURE__ */ function(t) {
  return t[t.Simple = 0] = "Simple", t[t.TrackDel = 1] = "TrackDel", t[t.TrackBefore = 2] = "TrackBefore", t[t.TrackAfter = 3] = "TrackAfter", t;
}(gn || (gn = {}));
class li {
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
    for (let n = 0, i = 0, r = 0; n < this.sections.length; ) {
      let s = this.sections[n++], o = this.sections[n++];
      o < 0 ? (e(i, r, s), r += s) : r += o, i += s;
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
    zc(this, e, n);
  }
  /**
  Get a description of the inverted form of these changes.
  */
  get invertedDesc() {
    let e = [];
    for (let n = 0; n < this.sections.length; ) {
      let i = this.sections[n++], r = this.sections[n++];
      r < 0 ? e.push(i, r) : e.push(r, i);
    }
    return new li(e);
  }
  /**
  Compute the combined effect of applying another set of changes
  after this one. The length of the document after this set should
  match the length before `other`.
  */
  composeDesc(e) {
    return this.empty ? e : e.empty ? this : Kv(this, e);
  }
  /**
  Map this description, which should start with the same document
  as `other`, over another set of changes, so that it can be
  applied after it. When `before` is true, map as if the changes
  in `this` happened before the ones in `other`.
  */
  mapDesc(e, n = !1) {
    return e.empty ? this : Gc(this, e, n);
  }
  mapPos(e, n = -1, i = gn.Simple) {
    let r = 0, s = 0;
    for (let o = 0; o < this.sections.length; ) {
      let l = this.sections[o++], a = this.sections[o++], c = r + l;
      if (a < 0) {
        if (c > e)
          return s + (e - r);
        s += l;
      } else {
        if (i != gn.Simple && c >= e && (i == gn.TrackDel && r < e && c > e || i == gn.TrackBefore && r < e || i == gn.TrackAfter && c > e))
          return null;
        if (c > e || c == e && n < 0 && !l)
          return e == r || n < 0 ? s : s + a;
        s += a;
      }
      r = c;
    }
    if (e > r)
      throw new RangeError(`Position ${e} is out of range for changeset of length ${r}`);
    return s;
  }
  /**
  Check whether these changes touch a given range. When one of the
  changes entirely covers the range, the string `"cover"` is
  returned.
  */
  touchesRange(e, n = e) {
    for (let i = 0, r = 0; i < this.sections.length && r <= n; ) {
      let s = this.sections[i++], o = this.sections[i++], l = r + s;
      if (o >= 0 && r <= n && l >= e)
        return r < e && l > n ? "cover" : !0;
      r = l;
    }
    return !1;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let n = 0; n < this.sections.length; ) {
      let i = this.sections[n++], r = this.sections[n++];
      e += (e ? " " : "") + i + (r >= 0 ? ":" + r : "");
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
    return new li(e);
  }
  /**
  @internal
  */
  static create(e) {
    return new li(e);
  }
}
class kt extends li {
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
    return zc(this, (n, i, r, s, o) => e = e.replace(r, r + (i - n), o), !1), e;
  }
  mapDesc(e, n = !1) {
    return Gc(this, e, n, !0);
  }
  /**
  Given the document as it existed _before_ the changes, return a
  change set that represents the inverse of this set, which could
  be used to go from the document created by the changes back to
  the document as it existed before the changes.
  */
  invert(e) {
    let n = this.sections.slice(), i = [];
    for (let r = 0, s = 0; r < n.length; r += 2) {
      let o = n[r], l = n[r + 1];
      if (l >= 0) {
        n[r] = l, n[r + 1] = o;
        let a = r >> 1;
        for (; i.length < a; )
          i.push(De.empty);
        i.push(o ? e.slice(s, s + o) : De.empty);
      }
      s += o;
    }
    return new kt(n, i);
  }
  /**
  Combine two subsequent change sets into a single set. `other`
  must start in the document produced by `this`. If `this` goes
  `docA` → `docB` and `other` represents `docB` → `docC`, the
  returned value will represent the change `docA` → `docC`.
  */
  compose(e) {
    return this.empty ? e : e.empty ? this : Kv(this, e, !0);
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
    return e.empty ? this : Gc(this, e, n, !0);
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
    zc(this, e, n);
  }
  /**
  Get a [change description](https://codemirror.net/6/docs/ref/#state.ChangeDesc) for this change
  set.
  */
  get desc() {
    return li.create(this.sections);
  }
  /**
  @internal
  */
  filter(e) {
    let n = [], i = [], r = [], s = new so(this);
    e: for (let o = 0, l = 0; ; ) {
      let a = o == e.length ? 1e9 : e[o++];
      for (; l < a || l == a && s.len == 0; ) {
        if (s.done)
          break e;
        let u = Math.min(s.len, a - l);
        Yt(r, u, -1);
        let f = s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0;
        Yt(n, u, f), f > 0 && Ji(i, n, s.text), s.forward(u), l += u;
      }
      let c = e[o++];
      for (; l < c; ) {
        if (s.done)
          break e;
        let u = Math.min(s.len, c - l);
        Yt(n, u, -1), Yt(r, u, s.ins == -1 ? -1 : s.off == 0 ? s.ins : 0), s.forward(u), l += u;
      }
    }
    return {
      changes: new kt(n, i),
      filtered: li.create(r)
    };
  }
  /**
  Serialize this change set to a JSON-representable value.
  */
  toJSON() {
    let e = [];
    for (let n = 0; n < this.sections.length; n += 2) {
      let i = this.sections[n], r = this.sections[n + 1];
      r < 0 ? e.push(i) : r == 0 ? e.push([i]) : e.push([i].concat(this.inserted[n >> 1].toJSON()));
    }
    return e;
  }
  /**
  Create a change set for the given changes, for a document of the
  given length, using `lineSep` as line separator.
  */
  static of(e, n, i) {
    let r = [], s = [], o = 0, l = null;
    function a(u = !1) {
      if (!u && !r.length)
        return;
      o < n && Yt(r, n - o, -1);
      let f = new kt(r, s);
      l = l ? l.compose(f.map(l)) : f, r = [], s = [], o = 0;
    }
    function c(u) {
      if (Array.isArray(u))
        for (let f of u)
          c(f);
      else if (u instanceof kt) {
        if (u.length != n)
          throw new RangeError(`Mismatched change set length (got ${u.length}, expected ${n})`);
        a(), l = l ? l.compose(u.map(l)) : u;
      } else {
        let { from: f, to: d = f, insert: h } = u;
        if (f > d || f < 0 || d > n)
          throw new RangeError(`Invalid change range ${f} to ${d} (in doc of length ${n})`);
        let p = h ? typeof h == "string" ? De.of(h.split(i || Wc)) : h : De.empty, v = p.length;
        if (f == d && v == 0)
          return;
        f < o && a(), f > o && Yt(r, f - o, -1), Yt(r, d - f, v), Ji(s, r, p), o = d;
      }
    }
    return c(e), a(!l), l;
  }
  /**
  Create an empty changeset of the given length.
  */
  static empty(e) {
    return new kt(e ? [e, -1] : [], []);
  }
  /**
  Create a changeset from its JSON representation (as produced by
  [`toJSON`](https://codemirror.net/6/docs/ref/#state.ChangeSet.toJSON).
  */
  static fromJSON(e) {
    if (!Array.isArray(e))
      throw new RangeError("Invalid JSON representation of ChangeSet");
    let n = [], i = [];
    for (let r = 0; r < e.length; r++) {
      let s = e[r];
      if (typeof s == "number")
        n.push(s, -1);
      else {
        if (!Array.isArray(s) || typeof s[0] != "number" || s.some((o, l) => l && typeof o != "string"))
          throw new RangeError("Invalid JSON representation of ChangeSet");
        if (s.length == 1)
          n.push(s[0], 0);
        else {
          for (; i.length < r; )
            i.push(De.empty);
          i[r] = De.of(s.slice(1)), n.push(s[0], i[r].length);
        }
      }
    }
    return new kt(n, i);
  }
  /**
  @internal
  */
  static createSet(e, n) {
    return new kt(e, n);
  }
}
function Yt(t, e, n, i = !1) {
  if (e == 0 && n <= 0)
    return;
  let r = t.length - 2;
  r >= 0 && n <= 0 && n == t[r + 1] ? t[r] += e : r >= 0 && e == 0 && t[r] == 0 ? t[r + 1] += n : i ? (t[r] += e, t[r + 1] += n) : t.push(e, n);
}
function Ji(t, e, n) {
  if (n.length == 0)
    return;
  let i = e.length - 2 >> 1;
  if (i < t.length)
    t[t.length - 1] = t[t.length - 1].append(n);
  else {
    for (; t.length < i; )
      t.push(De.empty);
    t.push(n);
  }
}
function zc(t, e, n) {
  let i = t.inserted;
  for (let r = 0, s = 0, o = 0; o < t.sections.length; ) {
    let l = t.sections[o++], a = t.sections[o++];
    if (a < 0)
      r += l, s += l;
    else {
      let c = r, u = s, f = De.empty;
      for (; c += l, u += a, a && i && (f = f.append(i[o - 2 >> 1])), !(n || o == t.sections.length || t.sections[o + 1] < 0); )
        l = t.sections[o++], a = t.sections[o++];
      e(r, c, s, u, f), r = c, s = u;
    }
  }
}
function Gc(t, e, n, i = !1) {
  let r = [], s = i ? [] : null, o = new so(t), l = new so(e);
  for (let a = -1; ; ) {
    if (o.done && l.len || l.done && o.len)
      throw new Error("Mismatched change set lengths");
    if (o.ins == -1 && l.ins == -1) {
      let c = Math.min(o.len, l.len);
      Yt(r, c, -1), o.forward(c), l.forward(c);
    } else if (l.ins >= 0 && (o.ins < 0 || a == o.i || o.off == 0 && (l.len < o.len || l.len == o.len && !n))) {
      let c = l.len;
      for (Yt(r, l.ins, -1); c; ) {
        let u = Math.min(o.len, c);
        o.ins >= 0 && a < o.i && o.len <= u && (Yt(r, 0, o.ins), s && Ji(s, r, o.text), a = o.i), o.forward(u), c -= u;
      }
      l.next();
    } else if (o.ins >= 0) {
      let c = 0, u = o.len;
      for (; u; )
        if (l.ins == -1) {
          let f = Math.min(u, l.len);
          c += f, u -= f, l.forward(f);
        } else if (l.ins == 0 && l.len < u)
          u -= l.len, l.next();
        else
          break;
      Yt(r, c, a < o.i ? o.ins : 0), s && a < o.i && Ji(s, r, o.text), a = o.i, o.forward(o.len - u);
    } else {
      if (o.done && l.done)
        return s ? kt.createSet(r, s) : li.create(r);
      throw new Error("Mismatched change set lengths");
    }
  }
}
function Kv(t, e, n = !1) {
  let i = [], r = n ? [] : null, s = new so(t), o = new so(e);
  for (let l = !1; ; ) {
    if (s.done && o.done)
      return r ? kt.createSet(i, r) : li.create(i);
    if (s.ins == 0)
      Yt(i, s.len, 0, l), s.next();
    else if (o.len == 0 && !o.done)
      Yt(i, 0, o.ins, l), r && Ji(r, i, o.text), o.next();
    else {
      if (s.done || o.done)
        throw new Error("Mismatched change set lengths");
      {
        let a = Math.min(s.len2, o.len), c = i.length;
        if (s.ins == -1) {
          let u = o.ins == -1 ? -1 : o.off ? 0 : o.ins;
          Yt(i, a, u, l), r && u && Ji(r, i, o.text);
        } else o.ins == -1 ? (Yt(i, s.off ? 0 : s.len, a, l), r && Ji(r, i, s.textBit(a))) : (Yt(i, s.off ? 0 : s.len, o.off ? 0 : o.ins, l), r && !o.off && Ji(r, i, o.text));
        l = (s.ins > a || o.ins >= 0 && o.len > a) && (l || i.length > c), s.forward2(a), o.forward(a);
      }
    }
  }
}
class so {
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
    return n >= e.length ? De.empty : e[n];
  }
  textBit(e) {
    let { inserted: n } = this.set, i = this.i - 2 >> 1;
    return i >= n.length && !e ? De.empty : n[i].slice(this.off, e == null ? void 0 : this.off + e);
  }
  forward(e) {
    e == this.len ? this.next() : (this.len -= e, this.off += e);
  }
  forward2(e) {
    this.ins == -1 ? this.forward(e) : e == this.ins ? this.next() : (this.ins -= e, this.off += e);
  }
}
class Sr {
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
    let i, r;
    return this.empty ? i = r = e.mapPos(this.from, n) : (i = e.mapPos(this.from, 1), r = e.mapPos(this.to, -1)), i == this.from && r == this.to ? this : new Sr(i, r, this.flags);
  }
  /**
  Extend this range to cover at least `from` to `to`.
  */
  extend(e, n = e) {
    if (e <= this.anchor && n >= this.anchor)
      return ee.range(e, n);
    let i = Math.abs(e - this.anchor) > Math.abs(n - this.anchor) ? e : n;
    return ee.range(this.anchor, i);
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
    return ee.range(e.anchor, e.head);
  }
  /**
  @internal
  */
  static create(e, n, i) {
    return new Sr(e, n, i);
  }
}
class ee {
  constructor(e, n) {
    this.ranges = e, this.mainIndex = n;
  }
  /**
  Map a selection through a change. Used to adjust the selection
  position for changes.
  */
  map(e, n = -1) {
    return e.empty ? this : ee.create(this.ranges.map((i) => i.map(e, n)), this.mainIndex);
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
    return this.ranges.length == 1 ? this : new ee([this.main], 0);
  }
  /**
  Extend this selection with an extra range.
  */
  addRange(e, n = !0) {
    return ee.create([e].concat(this.ranges), n ? 0 : this.mainIndex + 1);
  }
  /**
  Replace a given range with another range, and then normalize the
  selection to merge and sort ranges if necessary.
  */
  replaceRange(e, n = this.mainIndex) {
    let i = this.ranges.slice();
    return i[n] = e, ee.create(i, this.mainIndex);
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
    return new ee(e.ranges.map((n) => Sr.fromJSON(n)), e.main);
  }
  /**
  Create a selection holding a single range.
  */
  static single(e, n = e) {
    return new ee([ee.range(e, n)], 0);
  }
  /**
  Sort and merge the given set of ranges, creating a valid
  selection.
  */
  static create(e, n = 0) {
    if (e.length == 0)
      throw new RangeError("A selection needs at least one range");
    for (let i = 0, r = 0; r < e.length; r++) {
      let s = e[r];
      if (s.empty ? s.from <= i : s.from < i)
        return ee.normalized(e.slice(), n);
      i = s.to;
    }
    return new ee(e, n);
  }
  /**
  Create a cursor selection range at the given position. You can
  safely ignore the optional arguments in most situations.
  */
  static cursor(e, n = 0, i, r) {
    return Sr.create(e, e, (n == 0 ? 0 : n < 0 ? 8 : 16) | (i == null ? 7 : Math.min(6, i)) | (r ?? 16777215) << 6);
  }
  /**
  Create a selection range.
  */
  static range(e, n, i, r) {
    let s = (i ?? 16777215) << 6 | (r == null ? 7 : Math.min(6, r));
    return n < e ? Sr.create(n, e, 48 | s) : Sr.create(e, n, (n > e ? 8 : 0) | s);
  }
  /**
  @internal
  */
  static normalized(e, n = 0) {
    let i = e[n];
    e.sort((r, s) => r.from - s.from), n = e.indexOf(i);
    for (let r = 1; r < e.length; r++) {
      let s = e[r], o = e[r - 1];
      if (s.empty ? s.from <= o.to : s.from < o.to) {
        let l = o.from, a = Math.max(s.to, o.to);
        r <= n && n--, e.splice(--r, 2, s.anchor > s.head ? ee.range(a, l) : ee.range(l, a));
      }
    }
    return new ee(e, n);
  }
}
function Yv(t, e) {
  for (let n of t.ranges)
    if (n.to > e)
      throw new RangeError("Selection points outside of document");
}
let Of = 0;
class ve {
  constructor(e, n, i, r, s) {
    this.combine = e, this.compareInput = n, this.compare = i, this.isStatic = r, this.id = Of++, this.default = e([]), this.extensions = typeof s == "function" ? s(this) : s;
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
    return new ve(e.combine || ((n) => n), e.compareInput || ((n, i) => n === i), e.compare || (e.combine ? (n, i) => n === i : xf), !!e.static, e.enables);
  }
  /**
  Returns an extension that adds the given value to this facet.
  */
  of(e) {
    return new vl([], this, 0, e);
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
    return new vl(e, this, 1, n);
  }
  /**
  Create an extension that computes zero or more values for this
  facet from a state.
  */
  computeN(e, n) {
    if (this.isStatic)
      throw new Error("Can't compute a static facet");
    return new vl(e, this, 2, n);
  }
  from(e, n) {
    return n || (n = (i) => i), this.compute([e], (i) => n(i.field(e)));
  }
}
function xf(t, e) {
  return t == e || t.length == e.length && t.every((n, i) => n === e[i]);
}
class vl {
  constructor(e, n, i, r) {
    this.dependencies = e, this.facet = n, this.type = i, this.value = r, this.id = Of++;
  }
  dynamicSlot(e) {
    var n;
    let i = this.value, r = this.facet.compareInput, s = this.id, o = e[s] >> 1, l = this.type == 2, a = !1, c = !1, u = [];
    for (let f of this.dependencies)
      f == "doc" ? a = !0 : f == "selection" ? c = !0 : (((n = e[f.id]) !== null && n !== void 0 ? n : 1) & 1) == 0 && u.push(e[f.id]);
    return {
      create(f) {
        return f.values[o] = i(f), 1;
      },
      update(f, d) {
        if (a && d.docChanged || c && (d.docChanged || d.selection) || Uc(f, u)) {
          let h = i(f);
          if (l ? !tp(h, f.values[o], r) : !r(h, f.values[o]))
            return f.values[o] = h, 1;
        }
        return 0;
      },
      reconfigure: (f, d) => {
        let h, p = d.config.address[s];
        if (p != null) {
          let v = Vl(d, p);
          if (this.dependencies.every((y) => y instanceof ve ? d.facet(y) === f.facet(y) : y instanceof dr ? d.field(y, !1) == f.field(y, !1) : !0) || (l ? tp(h = i(f), v, r) : r(h = i(f), v)))
            return f.values[o] = v, 0;
        } else
          h = i(f);
        return f.values[o] = h, 1;
      }
    };
  }
}
function tp(t, e, n) {
  if (t.length != e.length)
    return !1;
  for (let i = 0; i < t.length; i++)
    if (!n(t[i], e[i]))
      return !1;
  return !0;
}
function Uc(t, e) {
  let n = !1;
  for (let i of e)
    js(t, i) & 1 && (n = !0);
  return n;
}
function $I(t, e, n) {
  let i = n.map((a) => t[a.id]), r = n.map((a) => a.type), s = i.filter((a) => !(a & 1)), o = t[e.id] >> 1;
  function l(a) {
    let c = [];
    for (let u = 0; u < i.length; u++) {
      let f = Vl(a, i[u]);
      if (r[u] == 2)
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
        js(a, c);
      return a.values[o] = l(a), 1;
    },
    update(a, c) {
      if (!Uc(a, s))
        return 0;
      let u = l(a);
      return e.compare(u, a.values[o]) ? 0 : (a.values[o] = u, 1);
    },
    reconfigure(a, c) {
      let u = Uc(a, i), f = c.config.facets[e.id], d = c.facet(e);
      if (f && !u && xf(n, f))
        return a.values[o] = d, 0;
      let h = l(a);
      return e.compare(h, d) ? (a.values[o] = d, 0) : (a.values[o] = h, 1);
    }
  };
}
const zo = /* @__PURE__ */ ve.define({ static: !0 });
class dr {
  constructor(e, n, i, r, s) {
    this.id = e, this.createF = n, this.updateF = i, this.compareF = r, this.spec = s, this.provides = void 0;
  }
  /**
  Define a state field.
  */
  static define(e) {
    let n = new dr(Of++, e.create, e.update, e.compare || ((i, r) => i === r), e);
    return e.provide && (n.provides = e.provide(n)), n;
  }
  create(e) {
    let n = e.facet(zo).find((i) => i.field == this);
    return (n?.create || this.createF)(e);
  }
  /**
  @internal
  */
  slot(e) {
    let n = e[this.id] >> 1;
    return {
      create: (i) => (i.values[n] = this.create(i), 1),
      update: (i, r) => {
        let s = i.values[n], o = this.updateF(s, r);
        return this.compareF(s, o) ? 0 : (i.values[n] = o, 1);
      },
      reconfigure: (i, r) => {
        let s = i.facet(zo), o = r.facet(zo), l;
        return (l = s.find((a) => a.field == this)) && l != o.find((a) => a.field == this) ? (i.values[n] = l.create(i), 1) : r.config.address[this.id] != null ? (i.values[n] = r.field(this), 0) : (i.values[n] = this.create(i), 1);
      }
    };
  }
  /**
  Returns an extension that enables this field and overrides the
  way it is initialized. Can be useful when you need to provide a
  non-default starting value for the field.
  */
  init(e) {
    return [this, zo.of({ field: this, create: e })];
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
const vr = { lowest: 4, low: 3, default: 2, high: 1, highest: 0 };
function Es(t) {
  return (e) => new qv(e, t);
}
const Mf = {
  /**
  The highest precedence level, for extensions that should end up
  near the start of the precedence ordering.
  */
  highest: /* @__PURE__ */ Es(vr.highest),
  /**
  A higher-than-default precedence, for extensions that should
  come before those with default precedence.
  */
  high: /* @__PURE__ */ Es(vr.high),
  /**
  The default precedence, which is also used for extensions
  without an explicit precedence.
  */
  default: /* @__PURE__ */ Es(vr.default),
  /**
  A lower-than-default precedence.
  */
  low: /* @__PURE__ */ Es(vr.low),
  /**
  The lowest precedence level. Meant for things that should end up
  near the end of the extension order.
  */
  lowest: /* @__PURE__ */ Es(vr.lowest)
};
class qv {
  constructor(e, n) {
    this.inner = e, this.prec = n;
  }
}
class Sa {
  /**
  Create an instance of this compartment to add to your [state
  configuration](https://codemirror.net/6/docs/ref/#state.EditorStateConfig.extensions).
  */
  of(e) {
    return new jc(this, e);
  }
  /**
  Create an [effect](https://codemirror.net/6/docs/ref/#state.TransactionSpec.effects) that
  reconfigures this compartment.
  */
  reconfigure(e) {
    return Sa.reconfigure.of({ compartment: this, extension: e });
  }
  /**
  Get the current content of the compartment in the state, or
  `undefined` if it isn't present.
  */
  get(e) {
    return e.config.compartments.get(this);
  }
}
class jc {
  constructor(e, n) {
    this.compartment = e, this.inner = n;
  }
}
class Bl {
  constructor(e, n, i, r, s, o) {
    for (this.base = e, this.compartments = n, this.dynamicSlots = i, this.address = r, this.staticValues = s, this.facets = o, this.statusTemplate = []; this.statusTemplate.length < i.length; )
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
    let r = [], s = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Map();
    for (let d of BI(e, n, o))
      d instanceof dr ? r.push(d) : (s[d.facet.id] || (s[d.facet.id] = [])).push(d);
    let l = /* @__PURE__ */ Object.create(null), a = [], c = [];
    for (let d of r)
      l[d.id] = c.length << 1, c.push((h) => d.slot(h));
    let u = i?.config.facets;
    for (let d in s) {
      let h = s[d], p = h[0].facet, v = u && u[d] || [];
      if (h.every(
        (y) => y.type == 0
        /* Provider.Static */
      ))
        if (l[p.id] = a.length << 1 | 1, xf(v, h))
          a.push(i.facet(p));
        else {
          let y = p.combine(h.map((g) => g.value));
          a.push(i && p.compare(y, i.facet(p)) ? i.facet(p) : y);
        }
      else {
        for (let y of h)
          y.type == 0 ? (l[y.id] = a.length << 1 | 1, a.push(y.value)) : (l[y.id] = c.length << 1, c.push((g) => y.dynamicSlot(g)));
        l[p.id] = c.length << 1, c.push((y) => $I(y, p, h));
      }
    }
    let f = c.map((d) => d(l));
    return new Bl(e, o, f, l, a, s);
  }
}
function BI(t, e, n) {
  let i = [[], [], [], [], []], r = /* @__PURE__ */ new Map();
  function s(o, l) {
    let a = r.get(o);
    if (a != null) {
      if (a <= l)
        return;
      let c = i[a].indexOf(o);
      c > -1 && i[a].splice(c, 1), o instanceof jc && n.delete(o.compartment);
    }
    if (r.set(o, l), Array.isArray(o))
      for (let c of o)
        s(c, l);
    else if (o instanceof jc) {
      if (n.has(o.compartment))
        throw new RangeError("Duplicate use of compartment in extensions");
      let c = e.get(o.compartment) || o.inner;
      n.set(o.compartment, c), s(c, l);
    } else if (o instanceof qv)
      s(o.inner, o.prec);
    else if (o instanceof dr)
      i[l].push(o), o.provides && s(o.provides, l);
    else if (o instanceof vl)
      i[l].push(o), o.facet.extensions && s(o.facet.extensions, vr.default);
    else {
      let c = o.extension;
      if (!c)
        throw new Error(`Unrecognized extension value in extension set (${o}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
      s(c, l);
    }
  }
  return s(t, vr.default), i.reduce((o, l) => o.concat(l));
}
function js(t, e) {
  if (e & 1)
    return 2;
  let n = e >> 1, i = t.status[n];
  if (i == 4)
    throw new Error("Cyclic dependency between fields and/or facets");
  if (i & 2)
    return i;
  t.status[n] = 4;
  let r = t.computeSlot(t, t.config.dynamicSlots[n]);
  return t.status[n] = 2 | r;
}
function Vl(t, e) {
  return e & 1 ? t.config.staticValues[e >> 1] : t.values[e >> 1];
}
const Jv = /* @__PURE__ */ ve.define(), Kc = /* @__PURE__ */ ve.define({
  combine: (t) => t.some((e) => e),
  static: !0
}), Xv = /* @__PURE__ */ ve.define({
  combine: (t) => t.length ? t[0] : void 0,
  static: !0
}), Zv = /* @__PURE__ */ ve.define(), Qv = /* @__PURE__ */ ve.define(), e0 = /* @__PURE__ */ ve.define(), t0 = /* @__PURE__ */ ve.define({
  combine: (t) => t.length ? t[0] : !1
});
class hr {
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
    return new VI();
  }
}
class VI {
  /**
  Create an instance of this annotation.
  */
  of(e) {
    return new hr(this, e);
  }
}
class HI {
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
    return new mt(this, e);
  }
}
class mt {
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
    return n === void 0 ? void 0 : n == this.value ? this : new mt(this.type, n);
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
    return new HI(e.map || ((n) => n));
  }
  /**
  Map an array of effects through a change set.
  */
  static mapEffects(e, n) {
    if (!e.length)
      return e;
    let i = [];
    for (let r of e) {
      let s = r.map(n);
      s && i.push(s);
    }
    return i;
  }
}
mt.reconfigure = /* @__PURE__ */ mt.define();
mt.appendConfig = /* @__PURE__ */ mt.define();
class Et {
  constructor(e, n, i, r, s, o) {
    this.startState = e, this.changes = n, this.selection = i, this.effects = r, this.annotations = s, this.scrollIntoView = o, this._doc = null, this._state = null, i && Yv(i, n.newLength), s.some((l) => l.type == Et.time) || (this.annotations = s.concat(Et.time.of(Date.now())));
  }
  /**
  @internal
  */
  static create(e, n, i, r, s, o) {
    return new Et(e, n, i, r, s, o);
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
    let n = this.annotation(Et.userEvent);
    return !!(n && (n == e || n.length > e.length && n.slice(0, e.length) == e && n[e.length] == "."));
  }
}
Et.time = /* @__PURE__ */ hr.define();
Et.userEvent = /* @__PURE__ */ hr.define();
Et.addToHistory = /* @__PURE__ */ hr.define();
Et.remote = /* @__PURE__ */ hr.define();
function WI(t, e) {
  let n = [];
  for (let i = 0, r = 0; ; ) {
    let s, o;
    if (i < t.length && (r == e.length || e[r] >= t[i]))
      s = t[i++], o = t[i++];
    else if (r < e.length)
      s = e[r++], o = e[r++];
    else
      return n;
    !n.length || n[n.length - 1] < s ? n.push(s, o) : n[n.length - 1] < o && (n[n.length - 1] = o);
  }
}
function n0(t, e, n) {
  var i;
  let r, s, o;
  return n ? (r = e.changes, s = kt.empty(e.changes.length), o = t.changes.compose(e.changes)) : (r = e.changes.map(t.changes), s = t.changes.mapDesc(e.changes, !0), o = t.changes.compose(r)), {
    changes: o,
    selection: e.selection ? e.selection.map(s) : (i = t.selection) === null || i === void 0 ? void 0 : i.map(r),
    effects: mt.mapEffects(t.effects, r).concat(mt.mapEffects(e.effects, s)),
    annotations: t.annotations.length ? t.annotations.concat(e.annotations) : e.annotations,
    scrollIntoView: t.scrollIntoView || e.scrollIntoView
  };
}
function Yc(t, e, n) {
  let i = e.selection, r = Kr(e.annotations);
  return e.userEvent && (r = r.concat(Et.userEvent.of(e.userEvent))), {
    changes: e.changes instanceof kt ? e.changes : kt.of(e.changes || [], n, t.facet(Xv)),
    selection: i && (i instanceof ee ? i : ee.single(i.anchor, i.head)),
    effects: Kr(e.effects),
    annotations: r,
    scrollIntoView: !!e.scrollIntoView
  };
}
function i0(t, e, n) {
  let i = Yc(t, e.length ? e[0] : {}, t.doc.length);
  e.length && e[0].filter === !1 && (n = !1);
  for (let s = 1; s < e.length; s++) {
    e[s].filter === !1 && (n = !1);
    let o = !!e[s].sequential;
    i = n0(i, Yc(t, e[s], o ? i.changes.newLength : t.doc.length), o);
  }
  let r = Et.create(t, i.changes, i.selection, i.effects, i.annotations, i.scrollIntoView);
  return GI(n ? zI(r) : r);
}
function zI(t) {
  let e = t.startState, n = !0;
  for (let r of e.facet(Zv)) {
    let s = r(t);
    if (s === !1) {
      n = !1;
      break;
    }
    Array.isArray(s) && (n = n === !0 ? s : WI(n, s));
  }
  if (n !== !0) {
    let r, s;
    if (n === !1)
      s = t.changes.invertedDesc, r = kt.empty(e.doc.length);
    else {
      let o = t.changes.filter(n);
      r = o.changes, s = o.filtered.mapDesc(o.changes).invertedDesc;
    }
    t = Et.create(e, r, t.selection && t.selection.map(s), mt.mapEffects(t.effects, s), t.annotations, t.scrollIntoView);
  }
  let i = e.facet(Qv);
  for (let r = i.length - 1; r >= 0; r--) {
    let s = i[r](t);
    s instanceof Et ? t = s : Array.isArray(s) && s.length == 1 && s[0] instanceof Et ? t = s[0] : t = i0(e, Kr(s), !1);
  }
  return t;
}
function GI(t) {
  let e = t.startState, n = e.facet(e0), i = t;
  for (let r = n.length - 1; r >= 0; r--) {
    let s = n[r](t);
    s && Object.keys(s).length && (i = n0(i, Yc(e, s, t.changes.newLength), !0));
  }
  return i == t ? t : Et.create(e, t.changes, t.selection, i.effects, i.annotations, i.scrollIntoView);
}
const UI = [];
function Kr(t) {
  return t == null ? UI : Array.isArray(t) ? t : [t];
}
var Ai = /* @__PURE__ */ function(t) {
  return t[t.Word = 0] = "Word", t[t.Space = 1] = "Space", t[t.Other = 2] = "Other", t;
}(Ai || (Ai = {}));
const jI = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
let qc;
try {
  qc = /* @__PURE__ */ new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
} catch {
}
function KI(t) {
  if (qc)
    return qc.test(t);
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (/\w/.test(n) || n > "" && (n.toUpperCase() != n.toLowerCase() || jI.test(n)))
      return !0;
  }
  return !1;
}
function YI(t) {
  return (e) => {
    if (!/\S/.test(e))
      return Ai.Space;
    if (KI(e))
      return Ai.Word;
    for (let n = 0; n < t.length; n++)
      if (e.indexOf(t[n]) > -1)
        return Ai.Word;
    return Ai.Other;
  };
}
class Ne {
  constructor(e, n, i, r, s, o) {
    this.config = e, this.doc = n, this.selection = i, this.values = r, this.status = e.statusTemplate.slice(), this.computeSlot = s, o && (o._state = this);
    for (let l = 0; l < this.config.dynamicSlots.length; l++)
      js(this, l << 1);
    this.computeSlot = null;
  }
  field(e, n = !0) {
    let i = this.config.address[e.id];
    if (i == null) {
      if (n)
        throw new RangeError("Field is not present in this state");
      return;
    }
    return js(this, i), Vl(this, i);
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
    return i0(this, e, !0);
  }
  /**
  @internal
  */
  applyTransaction(e) {
    let n = this.config, { base: i, compartments: r } = n;
    for (let l of e.effects)
      l.is(Sa.reconfigure) ? (n && (r = /* @__PURE__ */ new Map(), n.compartments.forEach((a, c) => r.set(c, a)), n = null), r.set(l.value.compartment, l.value.extension)) : l.is(mt.reconfigure) ? (n = null, i = l.value) : l.is(mt.appendConfig) && (n = null, i = Kr(i).concat(l.value));
    let s;
    n ? s = e.startState.values.slice() : (n = Bl.resolve(i, r, this), s = new Ne(n, this.doc, this.selection, n.dynamicSlots.map(() => null), (a, c) => c.reconfigure(a, this), null).values);
    let o = e.startState.facet(Kc) ? e.newSelection : e.newSelection.asSingle();
    new Ne(n, e.newDoc, o, s, (l, a) => a.update(l, e), e);
  }
  /**
  Create a [transaction spec](https://codemirror.net/6/docs/ref/#state.TransactionSpec) that
  replaces every selection range with the given content.
  */
  replaceSelection(e) {
    return typeof e == "string" && (e = this.toText(e)), this.changeByRange((n) => ({
      changes: { from: n.from, to: n.to, insert: e },
      range: ee.cursor(n.from + e.length)
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
    let n = this.selection, i = e(n.ranges[0]), r = this.changes(i.changes), s = [i.range], o = Kr(i.effects);
    for (let l = 1; l < n.ranges.length; l++) {
      let a = e(n.ranges[l]), c = this.changes(a.changes), u = c.map(r);
      for (let d = 0; d < l; d++)
        s[d] = s[d].map(u);
      let f = r.mapDesc(c, !0);
      s.push(a.range.map(f)), r = r.compose(u), o = mt.mapEffects(o, u).concat(mt.mapEffects(Kr(a.effects), f));
    }
    return {
      changes: r,
      selection: ee.create(s, n.mainIndex),
      effects: o
    };
  }
  /**
  Create a [change set](https://codemirror.net/6/docs/ref/#state.ChangeSet) from the given change
  description, taking the state's document length and line
  separator into account.
  */
  changes(e = []) {
    return e instanceof kt ? e : kt.of(e, this.doc.length, this.facet(Ne.lineSeparator));
  }
  /**
  Using the state's [line
  separator](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator), create a
  [`Text`](https://codemirror.net/6/docs/ref/#state.Text) instance from the given string.
  */
  toText(e) {
    return De.of(e.split(this.facet(Ne.lineSeparator) || Wc));
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
    return n == null ? e.default : (js(this, n), Vl(this, n));
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
        let r = e[i];
        r instanceof dr && this.config.address[r.id] != null && (n[i] = r.spec.toJSON(this.field(e[i]), this));
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
    let r = [];
    if (i) {
      for (let s in i)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
          let o = i[s], l = e[s];
          r.push(o.init((a) => o.spec.fromJSON(l, a)));
        }
    }
    return Ne.create({
      doc: e.doc,
      selection: ee.fromJSON(e.selection),
      extensions: n.extensions ? r.concat([n.extensions]) : r
    });
  }
  /**
  Create a new state. You'll usually only need this when
  initializing an editor—updated states are created by applying
  transactions.
  */
  static create(e = {}) {
    let n = Bl.resolve(e.extensions || [], /* @__PURE__ */ new Map()), i = e.doc instanceof De ? e.doc : De.of((e.doc || "").split(n.staticFacet(Ne.lineSeparator) || Wc)), r = e.selection ? e.selection instanceof ee ? e.selection : ee.single(e.selection.anchor, e.selection.head) : ee.single(0);
    return Yv(r, i.length), n.staticFacet(Kc) || (r = r.asSingle()), new Ne(n, i, r, n.dynamicSlots.map(() => null), (s, o) => o.create(s), null);
  }
  /**
  The size (in columns) of a tab in the document, determined by
  the [`tabSize`](https://codemirror.net/6/docs/ref/#state.EditorState^tabSize) facet.
  */
  get tabSize() {
    return this.facet(Ne.tabSize);
  }
  /**
  Get the proper [line-break](https://codemirror.net/6/docs/ref/#state.EditorState^lineSeparator)
  string for this state.
  */
  get lineBreak() {
    return this.facet(Ne.lineSeparator) || `
`;
  }
  /**
  Returns true when the editor is
  [configured](https://codemirror.net/6/docs/ref/#state.EditorState^readOnly) to be read-only.
  */
  get readOnly() {
    return this.facet(t0);
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
    for (let i of this.facet(Ne.phrases))
      if (Object.prototype.hasOwnProperty.call(i, e)) {
        e = i[e];
        break;
      }
    return n.length && (e = e.replace(/\$(\$|\d*)/g, (i, r) => {
      if (r == "$")
        return "$";
      let s = +(r || 1);
      return !s || s > n.length ? i : n[s - 1];
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
    let r = [];
    for (let s of this.facet(Jv))
      for (let o of s(this, n, i))
        Object.prototype.hasOwnProperty.call(o, e) && r.push(o[e]);
    return r;
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
    return YI(this.languageDataAt("wordChars", e).join(""));
  }
  /**
  Find the word at the given position, meaning the range
  containing all [word](https://codemirror.net/6/docs/ref/#state.CharCategory.Word) characters
  around it. If no word characters are adjacent to the position,
  this returns null.
  */
  wordAt(e) {
    let { text: n, from: i, length: r } = this.doc.lineAt(e), s = this.charCategorizer(e), o = e - i, l = e - i;
    for (; o > 0; ) {
      let a = tn(n, o, !1);
      if (s(n.slice(a, o)) != Ai.Word)
        break;
      o = a;
    }
    for (; l < r; ) {
      let a = tn(n, l);
      if (s(n.slice(l, a)) != Ai.Word)
        break;
      l = a;
    }
    return o == l ? null : ee.range(o + i, l + i);
  }
}
Ne.allowMultipleSelections = Kc;
Ne.tabSize = /* @__PURE__ */ ve.define({
  combine: (t) => t.length ? t[0] : 4
});
Ne.lineSeparator = Xv;
Ne.readOnly = t0;
Ne.phrases = /* @__PURE__ */ ve.define({
  compare(t, e) {
    let n = Object.keys(t), i = Object.keys(e);
    return n.length == i.length && n.every((r) => t[r] == e[r]);
  }
});
Ne.languageData = Jv;
Ne.changeFilter = Zv;
Ne.transactionFilter = Qv;
Ne.transactionExtender = e0;
Sa.reconfigure = /* @__PURE__ */ mt.define();
function r0(t, e, n = {}) {
  let i = {};
  for (let r of t)
    for (let s of Object.keys(r)) {
      let o = r[s], l = i[s];
      if (l === void 0)
        i[s] = o;
      else if (!(l === o || o === void 0)) if (Object.hasOwnProperty.call(n, s))
        i[s] = n[s](l, o);
      else
        throw new Error("Config merge conflict for field " + s);
    }
  for (let r in e)
    i[r] === void 0 && (i[r] = e[r]);
  return i;
}
class as {
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
    return Jc.create(e, n, this);
  }
}
as.prototype.startSide = as.prototype.endSide = 0;
as.prototype.point = !1;
as.prototype.mapMode = gn.TrackDel;
let Jc = class s0 {
  constructor(e, n, i) {
    this.from = e, this.to = n, this.value = i;
  }
  /**
  @internal
  */
  static create(e, n, i) {
    return new s0(e, n, i);
  }
};
function Xc(t, e) {
  return t.from - e.from || t.value.startSide - e.value.startSide;
}
class Lf {
  constructor(e, n, i, r) {
    this.from = e, this.to = n, this.value = i, this.maxPoint = r;
  }
  get length() {
    return this.to[this.to.length - 1];
  }
  // Find the index of the given position and side. Use the ranges'
  // `from` pos when `end == false`, `to` when `end == true`.
  findIndex(e, n, i, r = 0) {
    let s = i ? this.to : this.from;
    for (let o = r, l = s.length; ; ) {
      if (o == l)
        return o;
      let a = o + l >> 1, c = s[a] - e || (i ? this.value[a].endSide : this.value[a].startSide) - n;
      if (a == o)
        return c >= 0 ? o : l;
      c >= 0 ? l = a : o = a + 1;
    }
  }
  between(e, n, i, r) {
    for (let s = this.findIndex(n, -1e9, !0), o = this.findIndex(i, 1e9, !1, s); s < o; s++)
      if (r(this.from[s] + e, this.to[s] + e, this.value[s]) === !1)
        return !1;
  }
  map(e, n) {
    let i = [], r = [], s = [], o = -1, l = -1;
    for (let a = 0; a < this.value.length; a++) {
      let c = this.value[a], u = this.from[a] + e, f = this.to[a] + e, d, h;
      if (u == f) {
        let p = n.mapPos(u, c.startSide, c.mapMode);
        if (p == null || (d = h = p, c.startSide != c.endSide && (h = n.mapPos(u, c.endSide), h < d)))
          continue;
      } else if (d = n.mapPos(u, c.startSide), h = n.mapPos(f, c.endSide), d > h || d == h && c.startSide > 0 && c.endSide <= 0)
        continue;
      (h - d || c.endSide - c.startSide) < 0 || (o < 0 && (o = d), c.point && (l = Math.max(l, h - d)), i.push(c), r.push(d - o), s.push(h - o));
    }
    return { mapped: i.length ? new Lf(r, s, i, l) : null, pos: o };
  }
}
class He {
  constructor(e, n, i, r) {
    this.chunkPos = e, this.chunk = n, this.nextLayer = i, this.maxPoint = r;
  }
  /**
  @internal
  */
  static create(e, n, i, r) {
    return new He(e, n, i, r);
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
    let { add: n = [], sort: i = !1, filterFrom: r = 0, filterTo: s = this.length } = e, o = e.filter;
    if (n.length == 0 && !o)
      return this;
    if (i && (n = n.slice().sort(Xc)), this.isEmpty)
      return n.length ? He.of(n) : this;
    let l = new o0(this, null, -1).goto(0), a = 0, c = [], u = new oo();
    for (; l.value || a < n.length; )
      if (a < n.length && (l.from - n[a].from || l.startSide - n[a].value.startSide) >= 0) {
        let f = n[a++];
        u.addInner(f.from, f.to, f.value) || c.push(f);
      } else l.rangeIndex == 1 && l.chunkIndex < this.chunk.length && (a == n.length || this.chunkEnd(l.chunkIndex) < n[a].from) && (!o || r > this.chunkEnd(l.chunkIndex) || s < this.chunkPos[l.chunkIndex]) && u.addChunk(this.chunkPos[l.chunkIndex], this.chunk[l.chunkIndex]) ? l.nextChunk() : ((!o || r > l.to || s < l.from || o(l.from, l.to, l.value)) && (u.addInner(l.from, l.to, l.value) || c.push(Jc.create(l.from, l.to, l.value))), l.next());
    return u.finishInner(this.nextLayer.isEmpty && !c.length ? He.empty : this.nextLayer.update({ add: c, filter: o, filterFrom: r, filterTo: s }));
  }
  /**
  Map this range set through a set of changes, return the new set.
  */
  map(e) {
    if (e.empty || this.isEmpty)
      return this;
    let n = [], i = [], r = -1;
    for (let o = 0; o < this.chunk.length; o++) {
      let l = this.chunkPos[o], a = this.chunk[o], c = e.touchesRange(l, l + a.length);
      if (c === !1)
        r = Math.max(r, a.maxPoint), n.push(a), i.push(e.mapPos(l));
      else if (c === !0) {
        let { mapped: u, pos: f } = a.map(l, e);
        u && (r = Math.max(r, u.maxPoint), n.push(u), i.push(f));
      }
    }
    let s = this.nextLayer.map(e);
    return n.length == 0 ? s : new He(i, n, s || He.empty, r);
  }
  /**
  Iterate over the ranges that touch the region `from` to `to`,
  calling `f` for each. There is no guarantee that the ranges will
  be reported in any specific order. When the callback returns
  `false`, iteration stops.
  */
  between(e, n, i) {
    if (!this.isEmpty) {
      for (let r = 0; r < this.chunk.length; r++) {
        let s = this.chunkPos[r], o = this.chunk[r];
        if (n >= s && e <= s + o.length && o.between(s, e - s, n - s, i) === !1)
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
    return lo.from([this]).goto(e);
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
    return lo.from(e).goto(n);
  }
  /**
  Iterate over two groups of sets, calling methods on `comparator`
  to notify it of possible differences.
  */
  static compare(e, n, i, r, s = -1) {
    let o = e.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= s), l = n.filter((f) => f.maxPoint > 0 || !f.isEmpty && f.maxPoint >= s), a = np(o, l, i), c = new Ts(o, a, s), u = new Ts(l, a, s);
    i.iterGaps((f, d, h) => ip(c, f, u, d, h, r)), i.empty && i.length == 0 && ip(c, 0, u, 0, 0, r);
  }
  /**
  Compare the contents of two groups of range sets, returning true
  if they are equivalent in the given range.
  */
  static eq(e, n, i = 0, r) {
    r == null && (r = 999999999);
    let s = e.filter((u) => !u.isEmpty && n.indexOf(u) < 0), o = n.filter((u) => !u.isEmpty && e.indexOf(u) < 0);
    if (s.length != o.length)
      return !1;
    if (!s.length)
      return !0;
    let l = np(s, o), a = new Ts(s, l, 0).goto(i), c = new Ts(o, l, 0).goto(i);
    for (; ; ) {
      if (a.to != c.to || !Zc(a.active, c.active) || a.point && (!c.point || !a.point.eq(c.point)))
        return !1;
      if (a.to > r)
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
  static spans(e, n, i, r, s = -1) {
    let o = new Ts(e, null, s).goto(n), l = n, a = o.openStart;
    for (; ; ) {
      let c = Math.min(o.to, i);
      if (o.point) {
        let u = o.activeForPoint(o.to), f = o.pointFrom < n ? u.length + 1 : o.point.startSide < 0 ? u.length : Math.min(u.length, a);
        r.point(l, c, o.point, u, f, o.pointRank), a = Math.min(o.openEnd(c), u.length);
      } else c > l && (r.span(l, c, o.active, a), a = o.openEnd(c));
      if (o.to > i)
        return a + (o.point && o.to > i ? 1 : 0);
      l = o.to, o.next();
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
    let i = new oo();
    for (let r of e instanceof Jc ? [e] : n ? qI(e) : e)
      i.add(r.from, r.to, r.value);
    return i.finish();
  }
  /**
  Join an array of range sets into a single set.
  */
  static join(e) {
    if (!e.length)
      return He.empty;
    let n = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--)
      for (let r = e[i]; r != He.empty; r = r.nextLayer)
        n = new He(r.chunkPos, r.chunk, n, Math.max(r.maxPoint, n.maxPoint));
    return n;
  }
}
He.empty = /* @__PURE__ */ new He([], [], null, -1);
function qI(t) {
  if (t.length > 1)
    for (let e = t[0], n = 1; n < t.length; n++) {
      let i = t[n];
      if (Xc(e, i) > 0)
        return t.slice().sort(Xc);
      e = i;
    }
  return t;
}
He.empty.nextLayer = He.empty;
class oo {
  finishChunk(e) {
    this.chunks.push(new Lf(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, e && (this.from = [], this.to = [], this.value = []);
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
    this.addInner(e, n, i) || (this.nextLayer || (this.nextLayer = new oo())).add(e, n, i);
  }
  /**
  @internal
  */
  addInner(e, n, i) {
    let r = e - this.lastTo || i.startSide - this.last.endSide;
    if (r <= 0 && (e - this.lastFrom || i.startSide - this.last.startSide) < 0)
      throw new Error("Ranges must be added sorted by `from` position and `startSide`");
    return r < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = e), this.from.push(e - this.chunkStart), this.to.push(n - this.chunkStart), this.last = i, this.lastFrom = e, this.lastTo = n, this.value.push(i), i.point && (this.maxPoint = Math.max(this.maxPoint, n - e)), !0);
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
    return this.finishInner(He.empty);
  }
  /**
  @internal
  */
  finishInner(e) {
    if (this.from.length && this.finishChunk(!1), this.chunks.length == 0)
      return e;
    let n = He.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(e) : e, this.setMaxPoint);
    return this.from = null, n;
  }
}
function np(t, e, n) {
  let i = /* @__PURE__ */ new Map();
  for (let s of t)
    for (let o = 0; o < s.chunk.length; o++)
      s.chunk[o].maxPoint <= 0 && i.set(s.chunk[o], s.chunkPos[o]);
  let r = /* @__PURE__ */ new Set();
  for (let s of e)
    for (let o = 0; o < s.chunk.length; o++) {
      let l = i.get(s.chunk[o]);
      l != null && (n ? n.mapPos(l) : l) == s.chunkPos[o] && !n?.touchesRange(l, l + s.chunk[o].length) && r.add(s.chunk[o]);
    }
  return r;
}
class o0 {
  constructor(e, n, i, r = 0) {
    this.layer = e, this.skip = n, this.minPoint = i, this.rank = r;
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
      let r = this.layer.chunk[this.chunkIndex];
      if (!(this.skip && this.skip.has(r) || this.layer.chunkEnd(this.chunkIndex) < e || r.maxPoint < this.minPoint))
        break;
      this.chunkIndex++, i = !1;
    }
    if (this.chunkIndex < this.layer.chunk.length) {
      let r = this.layer.chunk[this.chunkIndex].findIndex(e - this.layer.chunkPos[this.chunkIndex], n, !0);
      (!i || this.rangeIndex < r) && this.setRangeIndex(r);
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
class lo {
  constructor(e) {
    this.heap = e;
  }
  static from(e, n = null, i = -1) {
    let r = [];
    for (let s = 0; s < e.length; s++)
      for (let o = e[s]; !o.isEmpty; o = o.nextLayer)
        o.maxPoint >= i && r.push(new o0(o, n, i, s));
    return r.length == 1 ? r[0] : new lo(r);
  }
  get startSide() {
    return this.value ? this.value.startSide : 0;
  }
  goto(e, n = -1e9) {
    for (let i of this.heap)
      i.goto(e, n);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Xa(this.heap, i);
    return this.next(), this;
  }
  forward(e, n) {
    for (let i of this.heap)
      i.forward(e, n);
    for (let i = this.heap.length >> 1; i >= 0; i--)
      Xa(this.heap, i);
    (this.to - e || this.value.endSide - n) < 0 && this.next();
  }
  next() {
    if (this.heap.length == 0)
      this.from = this.to = 1e9, this.value = null, this.rank = -1;
    else {
      let e = this.heap[0];
      this.from = e.from, this.to = e.to, this.value = e.value, this.rank = e.rank, e.value && e.next(), Xa(this.heap, 0);
    }
  }
}
function Xa(t, e) {
  for (let n = t[e]; ; ) {
    let i = (e << 1) + 1;
    if (i >= t.length)
      break;
    let r = t[i];
    if (i + 1 < t.length && r.compare(t[i + 1]) >= 0 && (r = t[i + 1], i++), n.compare(r) < 0)
      break;
    t[i] = n, t[e] = r, e = i;
  }
}
class Ts {
  constructor(e, n, i) {
    this.minPoint = i, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = lo.from(e, n, i);
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
    Go(this.active, e), Go(this.activeTo, e), Go(this.activeRank, e), this.minActive = rp(this.active, this.activeTo);
  }
  addActive(e) {
    let n = 0, { value: i, to: r, rank: s } = this.cursor;
    for (; n < this.activeRank.length && (s - this.activeRank[n] || r - this.activeTo[n]) > 0; )
      n++;
    Uo(this.active, n, i), Uo(this.activeTo, n, r), Uo(this.activeRank, n, s), e && Uo(e, n, this.cursor.from), this.minActive = rp(this.active, this.activeTo);
  }
  // After calling this, if `this.point` != null, the next range is a
  // point. Otherwise, it's a regular range, covered by `this.active`.
  next() {
    let e = this.to, n = this.point;
    this.point = null;
    let i = this.openStart < 0 ? [] : null;
    for (; ; ) {
      let r = this.minActive;
      if (r > -1 && (this.activeTo[r] - this.cursor.from || this.active[r].endSide - this.cursor.startSide) < 0) {
        if (this.activeTo[r] > e) {
          this.to = this.activeTo[r], this.endSide = this.active[r].endSide;
          break;
        }
        this.removeActive(r), i && Go(i, r);
      } else if (this.cursor.value)
        if (this.cursor.from > e) {
          this.to = this.cursor.from, this.endSide = this.cursor.startSide;
          break;
        } else {
          let s = this.cursor.value;
          if (!s.point)
            this.addActive(i), this.cursor.next();
          else if (n && this.cursor.to == this.to && this.cursor.from < this.cursor.to)
            this.cursor.next();
          else {
            this.point = s, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = s.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
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
      for (let r = i.length - 1; r >= 0 && i[r] < e; r--)
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
function ip(t, e, n, i, r, s) {
  t.goto(e), n.goto(i);
  let o = i + r, l = i, a = i - e;
  for (; ; ) {
    let c = t.to + a - n.to, u = c || t.endSide - n.endSide, f = u < 0 ? t.to + a : n.to, d = Math.min(f, o);
    if (t.point || n.point ? t.point && n.point && (t.point == n.point || t.point.eq(n.point)) && Zc(t.activeForPoint(t.to), n.activeForPoint(n.to)) || s.comparePoint(l, d, t.point, n.point) : d > l && !Zc(t.active, n.active) && s.compareRange(l, d, t.active, n.active), f > o)
      break;
    (c || t.openEnd != n.openEnd) && s.boundChange && s.boundChange(f), l = f, u <= 0 && t.next(), u >= 0 && n.next();
  }
}
function Zc(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (t[n] != e[n] && !t[n].eq(e[n]))
      return !1;
  return !0;
}
function Go(t, e) {
  for (let n = e, i = t.length - 1; n < i; n++)
    t[n] = t[n + 1];
  t.pop();
}
function Uo(t, e, n) {
  for (let i = t.length - 1; i >= e; i--)
    t[i + 1] = t[i];
  t[e] = n;
}
function rp(t, e) {
  let n = -1, i = 1e9;
  for (let r = 0; r < e.length; r++)
    (e[r] - i || t[r].endSide - t[n].endSide) < 0 && (n = r, i = e[r]);
  return n;
}
function Ca(t, e, n = t.length) {
  let i = 0;
  for (let r = 0; r < n && r < t.length; )
    t.charCodeAt(r) == 9 ? (i += e - i % e, r++) : (i++, r = tn(t, r));
  return i;
}
function JI(t, e, n, i) {
  for (let r = 0, s = 0; ; ) {
    if (s >= e)
      return r;
    if (r == t.length)
      break;
    s += t.charCodeAt(r) == 9 ? n - s % n : 1, r = tn(t, r);
  }
  return t.length;
}
const Qc = "ͼ", sp = typeof Symbol > "u" ? "__" + Qc : Symbol.for(Qc), eu = typeof Symbol > "u" ? "__styleSet" + Math.floor(Math.random() * 1e8) : Symbol("styleSet"), op = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : {};
class rr {
  // :: (Object<Style>, ?{finish: ?(string) → string})
  // Create a style module from the given spec.
  //
  // When `finish` is given, it is called on regular (non-`@`)
  // selectors (after `&` expansion) to compute the final selector.
  constructor(e, n) {
    this.rules = [];
    let { finish: i } = n || {};
    function r(o) {
      return /^@/.test(o) ? [o] : o.split(/,\s*/);
    }
    function s(o, l, a, c) {
      let u = [], f = /^@(\w+)\b/.exec(o[0]), d = f && f[1] == "keyframes";
      if (f && l == null) return a.push(o[0] + ";");
      for (let h in l) {
        let p = l[h];
        if (/&/.test(h))
          s(
            h.split(/,\s*/).map((v) => o.map((y) => v.replace(/&/, y))).reduce((v, y) => v.concat(y)),
            p,
            a
          );
        else if (p && typeof p == "object") {
          if (!f) throw new RangeError("The value of a property (" + h + ") should be a primitive value.");
          s(r(h), p, u, d);
        } else p != null && u.push(h.replace(/_.*/, "").replace(/[A-Z]/g, (v) => "-" + v.toLowerCase()) + ": " + p + ";");
      }
      (u.length || d) && a.push((i && !f && !c ? o.map(i) : o).join(", ") + " {" + u.join(" ") + "}");
    }
    for (let o in e) s(r(o), e[o], this.rules);
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
    let e = op[sp] || 1;
    return op[sp] = e + 1, Qc + e.toString(36);
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
    let r = e[eu], s = i && i.nonce;
    r ? s && r.setNonce(s) : r = new XI(e, s), r.mount(Array.isArray(n) ? n : [n], e);
  }
}
let lp = /* @__PURE__ */ new Map();
class XI {
  constructor(e, n) {
    let i = e.ownerDocument || e, r = i.defaultView;
    if (!e.head && e.adoptedStyleSheets && r.CSSStyleSheet) {
      let s = lp.get(i);
      if (s) return e[eu] = s;
      this.sheet = new r.CSSStyleSheet(), lp.set(i, this);
    } else
      this.styleTag = i.createElement("style"), n && this.styleTag.setAttribute("nonce", n);
    this.modules = [], e[eu] = this;
  }
  mount(e, n) {
    let i = this.sheet, r = 0, s = 0;
    for (let o = 0; o < e.length; o++) {
      let l = e[o], a = this.modules.indexOf(l);
      if (a < s && a > -1 && (this.modules.splice(a, 1), s--, a = -1), a == -1) {
        if (this.modules.splice(s++, 0, l), i) for (let c = 0; c < l.rules.length; c++)
          i.insertRule(l.rules[c], r++);
      } else {
        for (; s < a; ) r += this.modules[s++].rules.length;
        r += l.rules.length, s++;
      }
    }
    if (i)
      n.adoptedStyleSheets.indexOf(this.sheet) < 0 && (n.adoptedStyleSheets = [this.sheet, ...n.adoptedStyleSheets]);
    else {
      let o = "";
      for (let a = 0; a < this.modules.length; a++)
        o += this.modules[a].getRules() + `
`;
      this.styleTag.textContent = o;
      let l = n.head || n;
      this.styleTag.parentNode != l && l.insertBefore(this.styleTag, l.firstChild);
    }
  }
  setNonce(e) {
    this.styleTag && this.styleTag.getAttribute("nonce") != e && this.styleTag.setAttribute("nonce", e);
  }
}
var sr = {
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
}, ao = {
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
}, ZI = typeof navigator < "u" && /Mac/.test(navigator.platform), QI = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Nt = 0; Nt < 10; Nt++) sr[48 + Nt] = sr[96 + Nt] = String(Nt);
for (var Nt = 1; Nt <= 24; Nt++) sr[Nt + 111] = "F" + Nt;
for (var Nt = 65; Nt <= 90; Nt++)
  sr[Nt] = String.fromCharCode(Nt + 32), ao[Nt] = String.fromCharCode(Nt);
for (var Za in sr) ao.hasOwnProperty(Za) || (ao[Za] = sr[Za]);
function eP(t) {
  var e = ZI && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || QI && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? ao : sr)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
function co(t) {
  let e;
  return t.nodeType == 11 ? e = t.getSelection ? t : t.ownerDocument : e = t, e.getSelection();
}
function tu(t, e) {
  return e ? t == e || t.contains(e.nodeType != 1 ? e.parentNode : e) : !1;
}
function yl(t, e) {
  if (!e.anchorNode)
    return !1;
  try {
    return tu(t, e.anchorNode);
  } catch {
    return !1;
  }
}
function uo(t) {
  return t.nodeType == 3 ? Or(t, 0, t.nodeValue.length).getClientRects() : t.nodeType == 1 ? t.getClientRects() : [];
}
function Ks(t, e, n, i) {
  return n ? ap(t, e, n, i, -1) || ap(t, e, n, i, 1) : !1;
}
function Ar(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}
function Hl(t) {
  return t.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName);
}
function ap(t, e, n, i, r) {
  for (; ; ) {
    if (t == n && e == i)
      return !0;
    if (e == (r < 0 ? 0 : di(t))) {
      if (t.nodeName == "DIV")
        return !1;
      let s = t.parentNode;
      if (!s || s.nodeType != 1)
        return !1;
      e = Ar(t) + (r < 0 ? 0 : 1), t = s;
    } else if (t.nodeType == 1) {
      if (t = t.childNodes[e + (r < 0 ? -1 : 0)], t.nodeType == 1 && t.contentEditable == "false")
        return !1;
      e = r < 0 ? di(t) : 0;
    } else
      return !1;
  }
}
function di(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function ka(t, e) {
  let n = e ? t.left : t.right;
  return { left: n, right: n, top: t.top, bottom: t.bottom };
}
function tP(t) {
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
function l0(t, e) {
  let n = e.width / t.offsetWidth, i = e.height / t.offsetHeight;
  return (n > 0.995 && n < 1.005 || !isFinite(n) || Math.abs(e.width - t.offsetWidth) < 1) && (n = 1), (i > 0.995 && i < 1.005 || !isFinite(i) || Math.abs(e.height - t.offsetHeight) < 1) && (i = 1), { scaleX: n, scaleY: i };
}
function nP(t, e, n, i, r, s, o, l) {
  let a = t.ownerDocument, c = a.defaultView || window;
  for (let u = t, f = !1; u && !f; )
    if (u.nodeType == 1) {
      let d, h = u == a.body, p = 1, v = 1;
      if (h)
        d = tP(c);
      else {
        if (/^(fixed|sticky)$/.test(getComputedStyle(u).position) && (f = !0), u.scrollHeight <= u.clientHeight && u.scrollWidth <= u.clientWidth) {
          u = u.assignedSlot || u.parentNode;
          continue;
        }
        let b = u.getBoundingClientRect();
        ({ scaleX: p, scaleY: v } = l0(u, b)), d = {
          left: b.left,
          right: b.left + u.clientWidth * p,
          top: b.top,
          bottom: b.top + u.clientHeight * v
        };
      }
      let y = 0, g = 0;
      if (r == "nearest")
        e.top < d.top ? (g = e.top - (d.top + o), n > 0 && e.bottom > d.bottom + g && (g = e.bottom - d.bottom + o)) : e.bottom > d.bottom && (g = e.bottom - d.bottom + o, n < 0 && e.top - g < d.top && (g = e.top - (d.top + o)));
      else {
        let b = e.bottom - e.top, k = d.bottom - d.top;
        g = (r == "center" && b <= k ? e.top + b / 2 - k / 2 : r == "start" || r == "center" && n < 0 ? e.top - o : e.bottom - k + o) - d.top;
      }
      if (i == "nearest" ? e.left < d.left ? (y = e.left - (d.left + s), n > 0 && e.right > d.right + y && (y = e.right - d.right + s)) : e.right > d.right && (y = e.right - d.right + s, n < 0 && e.left < d.left + y && (y = e.left - (d.left + s))) : y = (i == "center" ? e.left + (e.right - e.left) / 2 - (d.right - d.left) / 2 : i == "start" == l ? e.left - s : e.right - (d.right - d.left) + s) - d.left, y || g)
        if (h)
          c.scrollBy(y, g);
        else {
          let b = 0, k = 0;
          if (g) {
            let S = u.scrollTop;
            u.scrollTop += g / v, k = (u.scrollTop - S) * v;
          }
          if (y) {
            let S = u.scrollLeft;
            u.scrollLeft += y / p, b = (u.scrollLeft - S) * p;
          }
          e = {
            left: e.left - b,
            top: e.top - k,
            right: e.right - b,
            bottom: e.bottom - k
          }, b && Math.abs(b - y) < 1 && (i = "nearest"), k && Math.abs(k - g) < 1 && (r = "nearest");
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
function iP(t) {
  let e = t.ownerDocument, n, i;
  for (let r = t.parentNode; r && !(r == e.body || n && i); )
    if (r.nodeType == 1)
      !i && r.scrollHeight > r.clientHeight && (i = r), !n && r.scrollWidth > r.clientWidth && (n = r), r = r.assignedSlot || r.parentNode;
    else if (r.nodeType == 11)
      r = r.host;
    else
      break;
  return { x: n, y: i };
}
class rP {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  eq(e) {
    return this.anchorNode == e.anchorNode && this.anchorOffset == e.anchorOffset && this.focusNode == e.focusNode && this.focusOffset == e.focusOffset;
  }
  setRange(e) {
    let { anchorNode: n, focusNode: i } = e;
    this.set(n, Math.min(e.anchorOffset, n ? di(n) : 0), i, Math.min(e.focusOffset, i ? di(i) : 0));
  }
  set(e, n, i, r) {
    this.anchorNode = e, this.anchorOffset = n, this.focusNode = i, this.focusOffset = r;
  }
}
let Vr = null;
function a0(t) {
  if (t.setActive)
    return t.setActive();
  if (Vr)
    return t.focus(Vr);
  let e = [];
  for (let n = t; n && (e.push(n, n.scrollTop, n.scrollLeft), n != n.ownerDocument); n = n.parentNode)
    ;
  if (t.focus(Vr == null ? {
    get preventScroll() {
      return Vr = { preventScroll: !0 }, !0;
    }
  } : void 0), !Vr) {
    Vr = !1;
    for (let n = 0; n < e.length; ) {
      let i = e[n++], r = e[n++], s = e[n++];
      i.scrollTop != r && (i.scrollTop = r), i.scrollLeft != s && (i.scrollLeft = s);
    }
  }
}
let cp;
function Or(t, e, n = e) {
  let i = cp || (cp = document.createRange());
  return i.setEnd(t, n), i.setStart(t, e), i;
}
function Yr(t, e, n, i) {
  let r = { key: e, code: e, keyCode: n, which: n, cancelable: !0 };
  i && ({ altKey: r.altKey, ctrlKey: r.ctrlKey, shiftKey: r.shiftKey, metaKey: r.metaKey } = i);
  let s = new KeyboardEvent("keydown", r);
  s.synthetic = !0, t.dispatchEvent(s);
  let o = new KeyboardEvent("keyup", r);
  return o.synthetic = !0, t.dispatchEvent(o), s.defaultPrevented || o.defaultPrevented;
}
function sP(t) {
  for (; t; ) {
    if (t && (t.nodeType == 9 || t.nodeType == 11 && t.host))
      return t;
    t = t.assignedSlot || t.parentNode;
  }
  return null;
}
function c0(t) {
  for (; t.attributes.length; )
    t.removeAttributeNode(t.attributes[0]);
}
function oP(t, e) {
  let n = e.focusNode, i = e.focusOffset;
  if (!n || e.anchorNode != n || e.anchorOffset != i)
    return !1;
  for (i = Math.min(i, di(n)); ; )
    if (i) {
      if (n.nodeType != 1)
        return !1;
      let r = n.childNodes[i - 1];
      r.contentEditable == "false" ? i-- : (n = r, i = di(n));
    } else {
      if (n == t)
        return !0;
      i = Ar(n), n = n.parentNode;
    }
}
function u0(t) {
  return t.scrollTop > Math.max(1, t.scrollHeight - t.clientHeight - 4);
}
function f0(t, e) {
  for (let n = t, i = e; ; ) {
    if (n.nodeType == 3 && i > 0)
      return { node: n, offset: i };
    if (n.nodeType == 1 && i > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[i - 1], i = di(n);
    } else if (n.parentNode && !Hl(n))
      i = Ar(n), n = n.parentNode;
    else
      return null;
  }
}
function d0(t, e) {
  for (let n = t, i = e; ; ) {
    if (n.nodeType == 3 && i < n.nodeValue.length)
      return { node: n, offset: i };
    if (n.nodeType == 1 && i < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[i], i = 0;
    } else if (n.parentNode && !Hl(n))
      i = Ar(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
class qt {
  constructor(e, n, i = !0) {
    this.node = e, this.offset = n, this.precise = i;
  }
  static before(e, n) {
    return new qt(e.parentNode, Ar(e), n);
  }
  static after(e, n) {
    return new qt(e.parentNode, Ar(e) + 1, n);
  }
}
const If = [];
class Ye {
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
      let i = this.dom, r = null, s;
      for (let o of this.children) {
        if (o.flags & 7) {
          if (!o.dom && (s = r ? r.nextSibling : i.firstChild)) {
            let l = Ye.get(s);
            (!l || !l.parent && l.canReuseDOM(o)) && o.reuseDOM(s);
          }
          o.sync(e, n), o.flags &= -8;
        }
        if (s = r ? r.nextSibling : i.firstChild, n && !n.written && n.node == i && s != o.dom && (n.written = !0), o.dom.parentNode == i)
          for (; s && s != o.dom; )
            s = up(s);
        else
          i.insertBefore(o.dom, s);
        r = o.dom;
      }
      for (s = r ? r.nextSibling : i.firstChild, s && n && n.node == i && (n.written = !0); s; )
        s = up(s);
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
      let r = di(e) == 0 ? 0 : n == 0 ? -1 : 1;
      for (; ; ) {
        let s = e.parentNode;
        if (s == this.dom)
          break;
        r == 0 && s.firstChild != s.lastChild && (e == s.firstChild ? r = -1 : r = 1), e = s;
      }
      r < 0 ? i = e : i = e.nextSibling;
    }
    if (i == this.dom.firstChild)
      return 0;
    for (; i && !Ye.get(i); )
      i = i.nextSibling;
    if (!i)
      return this.length;
    for (let r = 0, s = 0; ; r++) {
      let o = this.children[r];
      if (o.dom == i)
        return s;
      s += o.length + o.breakAfter;
    }
  }
  domBoundsAround(e, n, i = 0) {
    let r = -1, s = -1, o = -1, l = -1;
    for (let a = 0, c = i, u = i; a < this.children.length; a++) {
      let f = this.children[a], d = c + f.length;
      if (c < e && d > n)
        return f.domBoundsAround(e, n, c);
      if (d >= e && r == -1 && (r = a, s = c), c > n && f.dom.parentNode == this.dom) {
        o = a, l = u;
        break;
      }
      u = d, c = d + f.breakAfter;
    }
    return {
      from: s,
      to: l < 0 ? i + this.length : l,
      startDOM: (r ? this.children[r - 1].dom.nextSibling : null) || this.dom.firstChild,
      endDOM: o < this.children.length && o >= 0 ? this.children[o].dom : null
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
  replaceChildren(e, n, i = If) {
    this.markDirty();
    for (let r = e; r < n; r++) {
      let s = this.children[r];
      s.parent == this && i.indexOf(s) < 0 && s.destroy();
    }
    i.length < 250 ? this.children.splice(e, n - e, ...i) : this.children = [].concat(this.children.slice(0, e), i, this.children.slice(n));
    for (let r = 0; r < i.length; r++)
      i[r].setParent(this);
  }
  ignoreMutation(e) {
    return !1;
  }
  ignoreEvent(e) {
    return !1;
  }
  childCursor(e = this.length) {
    return new h0(this.children, e, this.children.length);
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
  merge(e, n, i, r, s, o) {
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
Ye.prototype.breakAfter = 0;
function up(t) {
  let e = t.nextSibling;
  return t.parentNode.removeChild(t), e;
}
class h0 {
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
function p0(t, e, n, i, r, s, o, l, a) {
  let { children: c } = t, u = c.length ? c[e] : null, f = s.length ? s[s.length - 1] : null, d = f ? f.breakAfter : o;
  if (!(e == i && u && !o && !d && s.length < 2 && u.merge(n, r, s.length ? f : null, n == 0, l, a))) {
    if (i < c.length) {
      let h = c[i];
      h && (r < h.length || h.breakAfter && f?.breakAfter) ? (e == i && (h = h.split(r), r = 0), !d && f && h.merge(0, r, f, !0, 0, a) ? s[s.length - 1] = h : ((r || h.children.length && !h.children[0].length) && h.merge(0, r, null, !1, 0, a), s.push(h))) : h?.breakAfter && (f ? f.breakAfter = 1 : o = 1), i++;
    }
    for (u && (u.breakAfter = o, n > 0 && (!o && s.length && u.merge(n, u.length, s[0], !1, l, 0) ? u.breakAfter = s.shift().breakAfter : (n < u.length || u.children.length && u.children[u.children.length - 1].length == 0) && u.merge(n, u.length, null, !1, l, 0), e++)); e < i && s.length; )
      if (c[i - 1].become(s[s.length - 1]))
        i--, s.pop(), a = s.length ? 0 : l;
      else if (c[e].become(s[0]))
        e++, s.shift(), l = s.length ? 0 : a;
      else
        break;
    !s.length && e && i < c.length && !c[e - 1].breakAfter && c[i].merge(0, 0, c[e - 1], !1, l, a) && e--, (e < i || s.length) && t.replaceChildren(e, i, s);
  }
}
function g0(t, e, n, i, r, s) {
  let o = t.childCursor(), { i: l, off: a } = o.findPos(n, 1), { i: c, off: u } = o.findPos(e, -1), f = e - n;
  for (let d of i)
    f += d.length;
  t.length += f, p0(t, c, u, l, a, i, 0, r, s);
}
let ln = typeof navigator < "u" ? navigator : { userAgent: "", vendor: "", platform: "" }, nu = typeof document < "u" ? document : { documentElement: { style: {} } };
const iu = /* @__PURE__ */ /Edge\/(\d+)/.exec(ln.userAgent), m0 = /* @__PURE__ */ /MSIE \d/.test(ln.userAgent), ru = /* @__PURE__ */ /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(ln.userAgent), _a = !!(m0 || ru || iu), fp = !_a && /* @__PURE__ */ /gecko\/(\d+)/i.test(ln.userAgent), Qa = !_a && /* @__PURE__ */ /Chrome\/(\d+)/.exec(ln.userAgent), dp = "webkitFontSmoothing" in nu.documentElement.style, v0 = !_a && /* @__PURE__ */ /Apple Computer/.test(ln.vendor), hp = v0 && (/* @__PURE__ */ /Mobile\/\w+/.test(ln.userAgent) || ln.maxTouchPoints > 2);
var le = {
  mac: hp || /* @__PURE__ */ /Mac/.test(ln.platform),
  windows: /* @__PURE__ */ /Win/.test(ln.platform),
  linux: /* @__PURE__ */ /Linux|X11/.test(ln.platform),
  ie: _a,
  ie_version: m0 ? nu.documentMode || 6 : ru ? +ru[1] : iu ? +iu[1] : 0,
  gecko: fp,
  gecko_version: fp ? +(/* @__PURE__ */ /Firefox\/(\d+)/.exec(ln.userAgent) || [0, 0])[1] : 0,
  chrome: !!Qa,
  chrome_version: Qa ? +Qa[1] : 0,
  ios: hp,
  android: /* @__PURE__ */ /Android\b/.test(ln.userAgent),
  webkit: dp,
  safari: v0,
  webkit_version: dp ? +(/* @__PURE__ */ /\bAppleWebKit\/(\d+)/.exec(ln.userAgent) || [0, 0])[1] : 0,
  tabSize: nu.documentElement.style.tabSize != null ? "tab-size" : "-moz-tab-size"
};
const lP = 256;
class Wn extends Ye {
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
    return this.flags & 8 || i && (!(i instanceof Wn) || this.length - (n - e) + i.length > lP || i.flags & 8) ? !1 : (this.text = this.text.slice(0, e) + (i ? i.text : "") + this.text.slice(n), this.markDirty(), !0);
  }
  split(e) {
    let n = new Wn(this.text.slice(e));
    return this.text = this.text.slice(0, e), this.markDirty(), n.flags |= this.flags & 8, n;
  }
  localPosFromDOM(e, n) {
    return e == this.dom ? n : n ? this.text.length : 0;
  }
  domAtPos(e) {
    return new qt(this.dom, e);
  }
  domBoundsAround(e, n, i) {
    return { from: i, to: i + this.length, startDOM: this.dom, endDOM: this.dom.nextSibling };
  }
  coordsAt(e, n) {
    return aP(this.dom, e, n);
  }
}
class Di extends Ye {
  constructor(e, n = [], i = 0) {
    super(), this.mark = e, this.children = n, this.length = i;
    for (let r of n)
      r.setParent(this);
  }
  setAttrs(e) {
    if (c0(e), this.mark.class && (e.className = this.mark.class), this.mark.attrs)
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
  merge(e, n, i, r, s, o) {
    return i && (!(i instanceof Di && i.mark.eq(this.mark)) || e && s <= 0 || n < this.length && o <= 0) ? !1 : (g0(this, e, n, i ? i.children.slice() : [], s - 1, o - 1), this.markDirty(), !0);
  }
  split(e) {
    let n = [], i = 0, r = -1, s = 0;
    for (let l of this.children) {
      let a = i + l.length;
      a > e && n.push(i < e ? l.split(e - i) : l), r < 0 && i >= e && (r = s), i = a, s++;
    }
    let o = this.length - e;
    return this.length = e, r > -1 && (this.children.length = r, this.markDirty()), new Di(this.mark, n, o);
  }
  domAtPos(e) {
    return y0(this, e);
  }
  coordsAt(e, n) {
    return w0(this, e, n);
  }
}
function aP(t, e, n) {
  let i = t.nodeValue.length;
  e > i && (e = i);
  let r = e, s = e, o = 0;
  e == 0 && n < 0 || e == i && n >= 0 ? le.chrome || le.gecko || (e ? (r--, o = 1) : s < i && (s++, o = -1)) : n < 0 ? r-- : s < i && s++;
  let l = Or(t, r, s).getClientRects();
  if (!l.length)
    return null;
  let a = l[(o ? o < 0 : n >= 0) ? 0 : l.length - 1];
  return le.safari && !o && a.width == 0 && (a = Array.prototype.find.call(l, (c) => c.width) || a), o ? ka(a, o < 0) : a || null;
}
class Cr extends Ye {
  static create(e, n, i) {
    return new Cr(e, n, i);
  }
  constructor(e, n, i) {
    super(), this.widget = e, this.length = n, this.side = i, this.prevWidget = null;
  }
  split(e) {
    let n = Cr.create(this.widget, this.length - e, this.side);
    return this.length -= e, n;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  getSide() {
    return this.side;
  }
  merge(e, n, i, r, s, o) {
    return i && (!(i instanceof Cr) || !this.widget.compare(i.widget) || e > 0 && s <= 0 || n < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - n), !0);
  }
  become(e) {
    return e instanceof Cr && e.side == this.side && this.widget.constructor == e.widget.constructor ? (this.widget.compare(e.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, !0) : !1;
  }
  ignoreMutation() {
    return !0;
  }
  ignoreEvent(e) {
    return this.widget.ignoreEvent(e);
  }
  get overrideDOMText() {
    if (this.length == 0)
      return De.empty;
    let e = this;
    for (; e.parent; )
      e = e.parent;
    let { view: n } = e, i = n && n.state.doc, r = this.posAtStart;
    return i ? i.slice(r, r + this.length) : De.empty;
  }
  domAtPos(e) {
    return (this.length ? e == 0 : this.side > 0) ? qt.before(this.dom) : qt.after(this.dom, e == this.length);
  }
  domBoundsAround() {
    return null;
  }
  coordsAt(e, n) {
    let i = this.widget.coordsAt(this.dom, e, n);
    if (i)
      return i;
    let r = this.dom.getClientRects(), s = null;
    if (!r.length)
      return null;
    let o = this.side ? this.side < 0 : e > 0;
    for (let l = o ? r.length - 1 : 0; s = r[l], !(e > 0 ? l == 0 : l == r.length - 1 || s.top < s.bottom); l += o ? -1 : 1)
      ;
    return ka(s, !o);
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
class cs extends Ye {
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
    return e instanceof cs && e.side == this.side;
  }
  split() {
    return new cs(this.side);
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
    return this.side > 0 ? qt.before(this.dom) : qt.after(this.dom);
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
    return De.empty;
  }
  get isHidden() {
    return !0;
  }
}
Wn.prototype.children = Cr.prototype.children = cs.prototype.children = If;
function y0(t, e) {
  let n = t.dom, { children: i } = t, r = 0;
  for (let s = 0; r < i.length; r++) {
    let o = i[r], l = s + o.length;
    if (!(l == s && o.getSide() <= 0)) {
      if (e > s && e < l && o.dom.parentNode == n)
        return o.domAtPos(e - s);
      if (e <= s)
        break;
      s = l;
    }
  }
  for (let s = r; s > 0; s--) {
    let o = i[s - 1];
    if (o.dom.parentNode == n)
      return o.domAtPos(o.length);
  }
  for (let s = r; s < i.length; s++) {
    let o = i[s];
    if (o.dom.parentNode == n)
      return o.domAtPos(0);
  }
  return new qt(n, 0);
}
function b0(t, e, n) {
  let i, { children: r } = t;
  n > 0 && e instanceof Di && r.length && (i = r[r.length - 1]) instanceof Di && i.mark.eq(e.mark) ? b0(i, e.children[0], n - 1) : (r.push(e), e.setParent(t)), t.length += e.length;
}
function w0(t, e, n) {
  let i = null, r = -1, s = null, o = -1;
  function l(c, u) {
    for (let f = 0, d = 0; f < c.children.length && d <= u; f++) {
      let h = c.children[f], p = d + h.length;
      p >= u && (h.children.length ? l(h, u - d) : (!s || s.isHidden && n > 0) && (p > u || d == p && h.getSide() > 0) ? (s = h, o = u - d) : (d < u || d == p && h.getSide() < 0 && !h.isHidden) && (i = h, r = u - d)), d = p;
    }
  }
  l(t, e);
  let a = (n < 0 ? i : s) || i || s;
  return a ? a.coordsAt(Math.max(0, a == i ? r : o), n) : cP(t);
}
function cP(t) {
  let e = t.dom.lastChild;
  if (!e)
    return t.dom.getBoundingClientRect();
  let n = uo(e);
  return n[n.length - 1] || null;
}
function su(t, e) {
  for (let n in t)
    n == "class" && e.class ? e.class += " " + t.class : n == "style" && e.style ? e.style += ";" + t.style : e[n] = t[n];
  return e;
}
const pp = /* @__PURE__ */ Object.create(null);
function Wl(t, e, n) {
  if (t == e)
    return !0;
  t || (t = pp), e || (e = pp);
  let i = Object.keys(t), r = Object.keys(e);
  if (i.length - (n && i.indexOf(n) > -1 ? 1 : 0) != r.length - (n && r.indexOf(n) > -1 ? 1 : 0))
    return !1;
  for (let s of i)
    if (s != n && (r.indexOf(s) == -1 || t[s] !== e[s]))
      return !1;
  return !0;
}
function ou(t, e, n) {
  let i = !1;
  if (e)
    for (let r in e)
      n && r in n || (i = !0, r == "style" ? t.style.cssText = "" : t.removeAttribute(r));
  if (n)
    for (let r in n)
      e && e[r] == n[r] || (i = !0, r == "style" ? t.style.cssText = n[r] : t.setAttribute(r, n[r]));
  return i;
}
function uP(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n = 0; n < t.attributes.length; n++) {
    let i = t.attributes[n];
    e[i.name] = i.value;
  }
  return e;
}
class Pf {
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
var En = /* @__PURE__ */ function(t) {
  return t[t.Text = 0] = "Text", t[t.WidgetBefore = 1] = "WidgetBefore", t[t.WidgetAfter = 2] = "WidgetAfter", t[t.WidgetRange = 3] = "WidgetRange", t;
}(En || (En = {}));
class Ht extends as {
  constructor(e, n, i, r) {
    super(), this.startSide = e, this.endSide = n, this.widget = i, this.spec = r;
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
    return new So(e);
  }
  /**
  Create a widget decoration, which displays a DOM element at the
  given position.
  */
  static widget(e) {
    let n = Math.max(-1e4, Math.min(1e4, e.side || 0)), i = !!e.block;
    return n += i && !e.inlineOrder ? n > 0 ? 3e8 : -4e8 : n > 0 ? 1e8 : -1e8, new or(e, n, n, i, e.widget || null, !1);
  }
  /**
  Create a replace decoration which replaces the given range with
  a widget, or simply hides it.
  */
  static replace(e) {
    let n = !!e.block, i, r;
    if (e.isBlockGap)
      i = -5e8, r = 4e8;
    else {
      let { start: s, end: o } = S0(e, n);
      i = (s ? n ? -3e8 : -1 : 5e8) - 1, r = (o ? n ? 2e8 : 1 : -6e8) + 1;
    }
    return new or(e, i, r, n, e.widget || null, !0);
  }
  /**
  Create a line decoration, which can add DOM attributes to the
  line starting at the given position.
  */
  static line(e) {
    return new Co(e);
  }
  /**
  Build a [`DecorationSet`](https://codemirror.net/6/docs/ref/#view.DecorationSet) from the given
  decorated range or ranges. If the ranges aren't already sorted,
  pass `true` for `sort` to make the library sort them for you.
  */
  static set(e, n = !1) {
    return He.of(e, n);
  }
  /**
  @internal
  */
  hasHeight() {
    return this.widget ? this.widget.estimatedHeight > -1 : !1;
  }
}
Ht.none = He.empty;
class So extends Ht {
  constructor(e) {
    let { start: n, end: i } = S0(e);
    super(n ? -1 : 5e8, i ? 1 : -6e8, null, e), this.tagName = e.tagName || "span", this.class = e.class || "", this.attrs = e.attributes || null;
  }
  eq(e) {
    var n, i;
    return this == e || e instanceof So && this.tagName == e.tagName && (this.class || ((n = this.attrs) === null || n === void 0 ? void 0 : n.class)) == (e.class || ((i = e.attrs) === null || i === void 0 ? void 0 : i.class)) && Wl(this.attrs, e.attrs, "class");
  }
  range(e, n = e) {
    if (e >= n)
      throw new RangeError("Mark decorations may not be empty");
    return super.range(e, n);
  }
}
So.prototype.point = !1;
class Co extends Ht {
  constructor(e) {
    super(-2e8, -2e8, null, e);
  }
  eq(e) {
    return e instanceof Co && this.spec.class == e.spec.class && Wl(this.spec.attributes, e.spec.attributes);
  }
  range(e, n = e) {
    if (n != e)
      throw new RangeError("Line decoration ranges must be zero-length");
    return super.range(e, n);
  }
}
Co.prototype.mapMode = gn.TrackBefore;
Co.prototype.point = !0;
class or extends Ht {
  constructor(e, n, i, r, s, o) {
    super(n, i, s, e), this.block = r, this.isReplace = o, this.mapMode = r ? n <= 0 ? gn.TrackBefore : gn.TrackAfter : gn.TrackDel;
  }
  // Only relevant when this.block == true
  get type() {
    return this.startSide != this.endSide ? En.WidgetRange : this.startSide <= 0 ? En.WidgetBefore : En.WidgetAfter;
  }
  get heightRelevant() {
    return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
  }
  eq(e) {
    return e instanceof or && fP(this.widget, e.widget) && this.block == e.block && this.startSide == e.startSide && this.endSide == e.endSide;
  }
  range(e, n = e) {
    if (this.isReplace && (e > n || e == n && this.startSide > 0 && this.endSide <= 0))
      throw new RangeError("Invalid range for replacement decoration");
    if (!this.isReplace && n != e)
      throw new RangeError("Widget decorations can only have zero-length ranges");
    return super.range(e, n);
  }
}
or.prototype.point = !0;
function S0(t, e = !1) {
  let { inclusiveStart: n, inclusiveEnd: i } = t;
  return n == null && (n = t.inclusive), i == null && (i = t.inclusive), { start: n ?? e, end: i ?? e };
}
function fP(t, e) {
  return t == e || !!(t && e && t.compare(e));
}
function bl(t, e, n, i = 0) {
  let r = n.length - 1;
  r >= 0 && n[r] + i >= t ? n[r] = Math.max(n[r], e) : n.push(t, e);
}
class vt extends Ye {
  constructor() {
    super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
  }
  // Consumes source
  merge(e, n, i, r, s, o) {
    if (i) {
      if (!(i instanceof vt))
        return !1;
      this.dom || i.transferDOM(this);
    }
    return r && this.setDeco(i ? i.attrs : null), g0(this, e, n, i ? i.children.slice() : [], s, o), !0;
  }
  split(e) {
    let n = new vt();
    if (n.breakAfter = this.breakAfter, this.length == 0)
      return n;
    let { i, off: r } = this.childPos(e);
    r && (n.append(this.children[i].split(r), 0), this.children[i].merge(r, this.children[i].length, null, !1, 0, 0), i++);
    for (let s = i; s < this.children.length; s++)
      n.append(this.children[s], 0);
    for (; i > 0 && this.children[i - 1].length == 0; )
      this.children[--i].destroy();
    return this.children.length = i, this.markDirty(), this.length = e, n;
  }
  transferDOM(e) {
    this.dom && (this.markDirty(), e.setDOM(this.dom), e.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, this.dom = null);
  }
  setDeco(e) {
    Wl(this.attrs, e) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = e);
  }
  append(e, n) {
    b0(this, e, n);
  }
  // Only called when building a line view in ContentBuilder
  addLineDeco(e) {
    let n = e.spec.attributes, i = e.spec.class;
    n && (this.attrs = su(n, this.attrs || {})), i && (this.attrs = su({ class: i }, this.attrs || {}));
  }
  domAtPos(e) {
    return y0(this, e);
  }
  reuseDOM(e) {
    e.nodeName == "DIV" && (this.setDOM(e), this.flags |= 6);
  }
  sync(e, n) {
    var i;
    this.dom ? this.flags & 4 && (c0(this.dom), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement("div")), this.dom.className = "cm-line", this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (ou(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add("cm-line"), this.prevAttrs = void 0), super.sync(e, n);
    let r = this.dom.lastChild;
    for (; r && Ye.get(r) instanceof Di; )
      r = r.lastChild;
    if (!r || !this.length || r.nodeName != "BR" && ((i = Ye.get(r)) === null || i === void 0 ? void 0 : i.isEditable) == !1 && (!le.ios || !this.children.some((s) => s instanceof Wn))) {
      let s = document.createElement("BR");
      s.cmIgnore = !0, this.dom.appendChild(s);
    }
  }
  measureTextSize() {
    if (this.children.length == 0 || this.length > 20)
      return null;
    let e = 0, n;
    for (let i of this.children) {
      if (!(i instanceof Wn) || /[^ -~]/.test(i.text))
        return null;
      let r = uo(i.dom);
      if (r.length != 1)
        return null;
      e += r[0].width, n = r[0].height;
    }
    return e ? {
      lineHeight: this.dom.getBoundingClientRect().height,
      charWidth: e / this.length,
      textHeight: n
    } : null;
  }
  coordsAt(e, n) {
    let i = w0(this, e, n);
    if (!this.children.length && i && this.parent) {
      let { heightOracle: r } = this.parent.view.viewState, s = i.bottom - i.top;
      if (Math.abs(s - r.lineHeight) < 2 && r.textHeight < s) {
        let o = (s - r.textHeight) / 2;
        return { top: i.top + o, bottom: i.bottom - o, left: i.left, right: i.left };
      }
    }
    return i;
  }
  become(e) {
    return e instanceof vt && this.children.length == 0 && e.children.length == 0 && Wl(this.attrs, e.attrs) && this.breakAfter == e.breakAfter;
  }
  covers() {
    return !0;
  }
  static find(e, n) {
    for (let i = 0, r = 0; i < e.children.length; i++) {
      let s = e.children[i], o = r + s.length;
      if (o >= n) {
        if (s instanceof vt)
          return s;
        if (o > n)
          break;
      }
      r = o + s.breakAfter;
    }
    return null;
  }
}
class Li extends Ye {
  constructor(e, n, i) {
    super(), this.widget = e, this.length = n, this.deco = i, this.breakAfter = 0, this.prevWidget = null;
  }
  merge(e, n, i, r, s, o) {
    return i && (!(i instanceof Li) || !this.widget.compare(i.widget) || e > 0 && s <= 0 || n < this.length && o <= 0) ? !1 : (this.length = e + (i ? i.length : 0) + (this.length - n), !0);
  }
  domAtPos(e) {
    return e == 0 ? qt.before(this.dom) : qt.after(this.dom, e == this.length);
  }
  split(e) {
    let n = this.length - e;
    this.length = e;
    let i = new Li(this.widget, n, this.deco);
    return i.breakAfter = this.breakAfter, i;
  }
  get children() {
    return If;
  }
  sync(e) {
    (!this.dom || !this.widget.updateDOM(this.dom, e)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(e)), this.widget.editable || (this.dom.contentEditable = "false"));
  }
  get overrideDOMText() {
    return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : De.empty;
  }
  domBoundsAround() {
    return null;
  }
  become(e) {
    return e instanceof Li && e.widget.constructor == this.widget.constructor ? (e.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = e.widget, this.length = e.length, this.deco = e.deco, this.breakAfter = e.breakAfter, !0) : !1;
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
    return i || (this.widget instanceof lu ? null : ka(this.dom.getBoundingClientRect(), this.length ? e == 0 : n <= 0));
  }
  destroy() {
    super.destroy(), this.dom && this.widget.destroy(this.dom);
  }
  covers(e) {
    let { startSide: n, endSide: i } = this.deco;
    return n == i ? !1 : e < 0 ? n < 0 : i > 0;
  }
}
class lu extends Pf {
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
class Ys {
  constructor(e, n, i, r) {
    this.doc = e, this.pos = n, this.end = i, this.disallowBlockEffectsFor = r, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = "", this.textOff = 0, this.cursor = e.iter(), this.skip = n;
  }
  posCovered() {
    if (this.content.length == 0)
      return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
    let e = this.content[this.content.length - 1];
    return !(e.breakAfter || e instanceof Li && e.deco.endSide < 0);
  }
  getLine() {
    return this.curLine || (this.content.push(this.curLine = new vt()), this.atCursorPos = !0), this.curLine;
  }
  flushBuffer(e = this.bufferMarks) {
    this.pendingBuffer && (this.curLine.append(jo(new cs(-1), e), e.length), this.pendingBuffer = 0);
  }
  addBlockWidget(e) {
    this.flushBuffer(), this.curLine = null, this.content.push(e);
  }
  finish(e) {
    this.pendingBuffer && e <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(e && this.content.length && this.content[this.content.length - 1] instanceof Li) && this.getLine();
  }
  buildText(e, n, i) {
    for (; e > 0; ) {
      if (this.textOff == this.text.length) {
        let { value: s, lineBreak: o, done: l } = this.cursor.next(this.skip);
        if (this.skip = 0, l)
          throw new Error("Ran out of text content when drawing inline views");
        if (o) {
          this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, e--;
          continue;
        } else
          this.text = s, this.textOff = 0;
      }
      let r = Math.min(
        this.text.length - this.textOff,
        e,
        512
        /* T.Chunk */
      );
      this.flushBuffer(n.slice(n.length - i)), this.getLine().append(jo(new Wn(this.text.slice(this.textOff, this.textOff + r)), n), i), this.atCursorPos = !0, this.textOff += r, e -= r, i = 0;
    }
  }
  span(e, n, i, r) {
    this.buildText(n - e, i, r), this.pos = n, this.openStart < 0 && (this.openStart = r);
  }
  point(e, n, i, r, s, o) {
    if (this.disallowBlockEffectsFor[o] && i instanceof or) {
      if (i.block)
        throw new RangeError("Block decorations may not be specified via plugins");
      if (n > this.doc.lineAt(this.pos).to)
        throw new RangeError("Decorations that replace line breaks may not be specified via plugins");
    }
    let l = n - e;
    if (i instanceof or)
      if (i.block)
        i.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new Li(i.widget || us.block, l, i));
      else {
        let a = Cr.create(i.widget || us.inline, l, l ? 0 : i.startSide), c = this.atCursorPos && !a.isEditable && s <= r.length && (e < n || i.startSide > 0), u = !a.isEditable && (e < n || s > r.length || i.startSide <= 0), f = this.getLine();
        this.pendingBuffer == 2 && !c && !a.isEditable && (this.pendingBuffer = 0), this.flushBuffer(r), c && (f.append(jo(new cs(1), r), s), s = r.length + Math.max(0, s - r.length)), f.append(jo(a, r), s), this.atCursorPos = u, this.pendingBuffer = u ? e < n || s > r.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = r.slice());
      }
    else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(i);
    l && (this.textOff + l <= this.text.length ? this.textOff += l : (this.skip += l - (this.text.length - this.textOff), this.text = "", this.textOff = 0), this.pos = n), this.openStart < 0 && (this.openStart = s);
  }
  static build(e, n, i, r, s) {
    let o = new Ys(e, n, i, s);
    return o.openEnd = He.spans(r, n, i, o), o.openStart < 0 && (o.openStart = o.openEnd), o.finish(o.openEnd), o;
  }
}
function jo(t, e) {
  for (let n of e)
    t = new Di(n, [t], t.length);
  return t;
}
class us extends Pf {
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
us.inline = /* @__PURE__ */ new us("span");
us.block = /* @__PURE__ */ new us("div");
var Tt = /* @__PURE__ */ function(t) {
  return t[t.LTR = 0] = "LTR", t[t.RTL = 1] = "RTL", t;
}(Tt || (Tt = {}));
const xr = Tt.LTR, Df = Tt.RTL;
function C0(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    e.push(1 << +t[n]);
  return e;
}
const dP = /* @__PURE__ */ C0("88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"), hP = /* @__PURE__ */ C0("4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"), au = /* @__PURE__ */ Object.create(null), Kn = [];
for (let t of ["()", "[]", "{}"]) {
  let e = /* @__PURE__ */ t.charCodeAt(0), n = /* @__PURE__ */ t.charCodeAt(1);
  au[e] = n, au[n] = -e;
}
function k0(t) {
  return t <= 247 ? dP[t] : 1424 <= t && t <= 1524 ? 2 : 1536 <= t && t <= 1785 ? hP[t - 1536] : 1774 <= t && t <= 2220 ? 4 : 8192 <= t && t <= 8204 ? 256 : 64336 <= t && t <= 65023 ? 4 : 1;
}
const pP = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
class Xi {
  /**
  The direction of this span.
  */
  get dir() {
    return this.level % 2 ? Df : xr;
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
  static find(e, n, i, r) {
    let s = -1;
    for (let o = 0; o < e.length; o++) {
      let l = e[o];
      if (l.from <= n && l.to >= n) {
        if (l.level == i)
          return o;
        (s < 0 || (r != 0 ? r < 0 ? l.from < n : l.to > n : e[s].level > l.level)) && (s = o);
      }
    }
    if (s < 0)
      throw new RangeError("Index out of range");
    return s;
  }
}
function _0(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++) {
    let i = t[n], r = e[n];
    if (i.from != r.from || i.to != r.to || i.direction != r.direction || !_0(i.inner, r.inner))
      return !1;
  }
  return !0;
}
const je = [];
function gP(t, e, n, i, r) {
  for (let s = 0; s <= i.length; s++) {
    let o = s ? i[s - 1].to : e, l = s < i.length ? i[s].from : n, a = s ? 256 : r;
    for (let c = o, u = a, f = a; c < l; c++) {
      let d = k0(t.charCodeAt(c));
      d == 512 ? d = u : d == 8 && f == 4 && (d = 16), je[c] = d == 4 ? 2 : d, d & 7 && (f = d), u = d;
    }
    for (let c = o, u = a, f = a; c < l; c++) {
      let d = je[c];
      if (d == 128)
        c < l - 1 && u == je[c + 1] && u & 24 ? d = je[c] = u : je[c] = 256;
      else if (d == 64) {
        let h = c + 1;
        for (; h < l && je[h] == 64; )
          h++;
        let p = c && u == 8 || h < n && je[h] == 8 ? f == 1 ? 1 : 8 : 256;
        for (let v = c; v < h; v++)
          je[v] = p;
        c = h - 1;
      } else d == 8 && f == 1 && (je[c] = 1);
      u = d, d & 7 && (f = d);
    }
  }
}
function mP(t, e, n, i, r) {
  let s = r == 1 ? 2 : 1;
  for (let o = 0, l = 0, a = 0; o <= i.length; o++) {
    let c = o ? i[o - 1].to : e, u = o < i.length ? i[o].from : n;
    for (let f = c, d, h, p; f < u; f++)
      if (h = au[d = t.charCodeAt(f)])
        if (h < 0) {
          for (let v = l - 3; v >= 0; v -= 3)
            if (Kn[v + 1] == -h) {
              let y = Kn[v + 2], g = y & 2 ? r : y & 4 ? y & 1 ? s : r : 0;
              g && (je[f] = je[Kn[v]] = g), l = v;
              break;
            }
        } else {
          if (Kn.length == 189)
            break;
          Kn[l++] = f, Kn[l++] = d, Kn[l++] = a;
        }
      else if ((p = je[f]) == 2 || p == 1) {
        let v = p == r;
        a = v ? 0 : 1;
        for (let y = l - 3; y >= 0; y -= 3) {
          let g = Kn[y + 2];
          if (g & 2)
            break;
          if (v)
            Kn[y + 2] |= 2;
          else {
            if (g & 4)
              break;
            Kn[y + 2] |= 4;
          }
        }
      }
  }
}
function vP(t, e, n, i) {
  for (let r = 0, s = i; r <= n.length; r++) {
    let o = r ? n[r - 1].to : t, l = r < n.length ? n[r].from : e;
    for (let a = o; a < l; ) {
      let c = je[a];
      if (c == 256) {
        let u = a + 1;
        for (; ; )
          if (u == l) {
            if (r == n.length)
              break;
            u = n[r++].to, l = r < n.length ? n[r].from : e;
          } else if (je[u] == 256)
            u++;
          else
            break;
        let f = s == 1, d = (u < e ? je[u] : i) == 1, h = f == d ? f ? 1 : 2 : i;
        for (let p = u, v = r, y = v ? n[v - 1].to : t; p > a; )
          p == y && (p = n[--v].from, y = v ? n[v - 1].to : t), je[--p] = h;
        a = u;
      } else
        s = c, a++;
    }
  }
}
function cu(t, e, n, i, r, s, o) {
  let l = i % 2 ? 2 : 1;
  if (i % 2 == r % 2)
    for (let a = e, c = 0; a < n; ) {
      let u = !0, f = !1;
      if (c == s.length || a < s[c].from) {
        let v = je[a];
        v != l && (u = !1, f = v == 16);
      }
      let d = !u && l == 1 ? [] : null, h = u ? i : i + 1, p = a;
      e: for (; ; )
        if (c < s.length && p == s[c].from) {
          if (f)
            break e;
          let v = s[c];
          if (!u)
            for (let y = v.to, g = c + 1; ; ) {
              if (y == n)
                break e;
              if (g < s.length && s[g].from == y)
                y = s[g++].to;
              else {
                if (je[y] == l)
                  break e;
                break;
              }
            }
          if (c++, d)
            d.push(v);
          else {
            v.from > a && o.push(new Xi(a, v.from, h));
            let y = v.direction == xr != !(h % 2);
            uu(t, y ? i + 1 : i, r, v.inner, v.from, v.to, o), a = v.to;
          }
          p = v.to;
        } else {
          if (p == n || (u ? je[p] != l : je[p] == l))
            break;
          p++;
        }
      d ? cu(t, a, p, i + 1, r, d, o) : a < p && o.push(new Xi(a, p, h)), a = p;
    }
  else
    for (let a = n, c = s.length; a > e; ) {
      let u = !0, f = !1;
      if (!c || a > s[c - 1].to) {
        let v = je[a - 1];
        v != l && (u = !1, f = v == 16);
      }
      let d = !u && l == 1 ? [] : null, h = u ? i : i + 1, p = a;
      e: for (; ; )
        if (c && p == s[c - 1].to) {
          if (f)
            break e;
          let v = s[--c];
          if (!u)
            for (let y = v.from, g = c; ; ) {
              if (y == e)
                break e;
              if (g && s[g - 1].to == y)
                y = s[--g].from;
              else {
                if (je[y - 1] == l)
                  break e;
                break;
              }
            }
          if (d)
            d.push(v);
          else {
            v.to < a && o.push(new Xi(v.to, a, h));
            let y = v.direction == xr != !(h % 2);
            uu(t, y ? i + 1 : i, r, v.inner, v.from, v.to, o), a = v.from;
          }
          p = v.from;
        } else {
          if (p == e || (u ? je[p - 1] != l : je[p - 1] == l))
            break;
          p--;
        }
      d ? cu(t, p, a, i + 1, r, d, o) : p < a && o.push(new Xi(p, a, h)), a = p;
    }
}
function uu(t, e, n, i, r, s, o) {
  let l = e % 2 ? 2 : 1;
  gP(t, r, s, i, l), mP(t, r, s, i, l), vP(r, s, i, l), cu(t, r, s, e, n, i, o);
}
function yP(t, e, n) {
  if (!t)
    return [new Xi(0, 0, e == Df ? 1 : 0)];
  if (e == xr && !n.length && !pP.test(t))
    return E0(t.length);
  if (n.length)
    for (; t.length > je.length; )
      je[je.length] = 256;
  let i = [], r = e == xr ? 0 : 1;
  return uu(t, r, r, n, 0, t.length, i), i;
}
function E0(t) {
  return [new Xi(0, t, 0)];
}
let T0 = "";
function bP(t, e, n, i, r) {
  var s;
  let o = i.head - t.from, l = Xi.find(e, o, (s = i.bidiLevel) !== null && s !== void 0 ? s : -1, i.assoc), a = e[l], c = a.side(r, n);
  if (o == c) {
    let d = l += r ? 1 : -1;
    if (d < 0 || d >= e.length)
      return null;
    a = e[l = d], o = a.side(!r, n), c = a.side(r, n);
  }
  let u = tn(t.text, o, a.forward(r, n));
  (u < a.from || u > a.to) && (u = c), T0 = t.text.slice(Math.min(o, u), Math.max(o, u));
  let f = l == (r ? e.length - 1 : 0) ? null : e[l + (r ? 1 : -1)];
  return f && u == c && f.level + (r ? 0 : 1) < a.level ? ee.cursor(f.side(!r, n) + t.from, f.forward(r, n) ? 1 : -1, f.level) : ee.cursor(u + t.from, a.forward(r, n) ? -1 : 1, a.level);
}
function wP(t, e, n) {
  for (let i = e; i < n; i++) {
    let r = k0(t.charCodeAt(i));
    if (r == 1)
      return xr;
    if (r == 2 || r == 4)
      return Df;
  }
  return xr;
}
const A0 = /* @__PURE__ */ ve.define(), O0 = /* @__PURE__ */ ve.define(), x0 = /* @__PURE__ */ ve.define(), M0 = /* @__PURE__ */ ve.define(), fu = /* @__PURE__ */ ve.define(), L0 = /* @__PURE__ */ ve.define(), I0 = /* @__PURE__ */ ve.define(), Rf = /* @__PURE__ */ ve.define(), Nf = /* @__PURE__ */ ve.define(), P0 = /* @__PURE__ */ ve.define({
  combine: (t) => t.some((e) => e)
}), SP = /* @__PURE__ */ ve.define({
  combine: (t) => t.some((e) => e)
}), D0 = /* @__PURE__ */ ve.define();
class qr {
  constructor(e, n = "nearest", i = "nearest", r = 5, s = 5, o = !1) {
    this.range = e, this.y = n, this.x = i, this.yMargin = r, this.xMargin = s, this.isSnapshot = o;
  }
  map(e) {
    return e.empty ? this : new qr(this.range.map(e), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
  clip(e) {
    return this.range.to <= e.doc.length ? this : new qr(ee.cursor(e.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
  }
}
const Ko = /* @__PURE__ */ mt.define({ map: (t, e) => t.map(e) }), R0 = /* @__PURE__ */ mt.define();
function ni(t, e, n) {
  let i = t.facet(M0);
  i.length ? i[0](e) : window.onerror ? window.onerror(String(e), n, void 0, void 0, e) : n ? console.error(n + ":", e) : console.error(e);
}
const ki = /* @__PURE__ */ ve.define({ combine: (t) => t.length ? t[0] : !0 });
let CP = 0;
const Ms = /* @__PURE__ */ ve.define();
class lr {
  constructor(e, n, i, r, s) {
    this.id = e, this.create = n, this.domEventHandlers = i, this.domEventObservers = r, this.extension = s(this);
  }
  /**
  Define a plugin from a constructor function that creates the
  plugin's value, given an editor view.
  */
  static define(e, n) {
    const { eventHandlers: i, eventObservers: r, provide: s, decorations: o } = n || {};
    return new lr(CP++, e, i, r, (l) => {
      let a = [Ms.of(l)];
      return o && a.push(fo.of((c) => {
        let u = c.plugin(l);
        return u ? o(u) : Ht.none;
      })), s && a.push(s(l)), a;
    });
  }
  /**
  Create a plugin for a class whose constructor takes a single
  editor view as argument.
  */
  static fromClass(e, n) {
    return lr.define((i) => new e(i), n);
  }
}
class ec {
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
            if (ni(n.state, i, "CodeMirror plugin crashed"), this.value.destroy)
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
        ni(e.state, n, "CodeMirror plugin crashed"), this.deactivate();
      }
    return this;
  }
  destroy(e) {
    var n;
    if (!((n = this.value) === null || n === void 0) && n.destroy)
      try {
        this.value.destroy();
      } catch (i) {
        ni(e.state, i, "CodeMirror plugin crashed");
      }
  }
  deactivate() {
    this.spec = this.value = null;
  }
}
const N0 = /* @__PURE__ */ ve.define(), Ff = /* @__PURE__ */ ve.define(), fo = /* @__PURE__ */ ve.define(), F0 = /* @__PURE__ */ ve.define(), $f = /* @__PURE__ */ ve.define(), $0 = /* @__PURE__ */ ve.define();
function gp(t, e) {
  let n = t.state.facet($0);
  if (!n.length)
    return n;
  let i = n.map((s) => s instanceof Function ? s(t) : s), r = [];
  return He.spans(i, e.from, e.to, {
    point() {
    },
    span(s, o, l, a) {
      let c = s - e.from, u = o - e.from, f = r;
      for (let d = l.length - 1; d >= 0; d--, a--) {
        let h = l[d].spec.bidiIsolate, p;
        if (h == null && (h = wP(e.text, c, u)), a > 0 && f.length && (p = f[f.length - 1]).to == c && p.direction == h)
          p.to = u, f = p.inner;
        else {
          let v = { from: c, to: u, direction: h, inner: [] };
          f.push(v), f = v.inner;
        }
      }
    }
  }), r;
}
const B0 = /* @__PURE__ */ ve.define();
function V0(t) {
  let e = 0, n = 0, i = 0, r = 0;
  for (let s of t.state.facet(B0)) {
    let o = s(t);
    o && (o.left != null && (e = Math.max(e, o.left)), o.right != null && (n = Math.max(n, o.right)), o.top != null && (i = Math.max(i, o.top)), o.bottom != null && (r = Math.max(r, o.bottom)));
  }
  return { left: e, right: n, top: i, bottom: r };
}
const Ls = /* @__PURE__ */ ve.define();
class Tn {
  constructor(e, n, i, r) {
    this.fromA = e, this.toA = n, this.fromB = i, this.toB = r;
  }
  join(e) {
    return new Tn(Math.min(this.fromA, e.fromA), Math.max(this.toA, e.toA), Math.min(this.fromB, e.fromB), Math.max(this.toB, e.toB));
  }
  addToSet(e) {
    let n = e.length, i = this;
    for (; n > 0; n--) {
      let r = e[n - 1];
      if (!(r.fromA > i.toA)) {
        if (r.toA < i.fromA)
          break;
        i = i.join(r), e.splice(n - 1, 1);
      }
    }
    return e.splice(n, 0, i), e;
  }
  static extendWithRanges(e, n) {
    if (n.length == 0)
      return e;
    let i = [];
    for (let r = 0, s = 0, o = 0, l = 0; ; r++) {
      let a = r == e.length ? null : e[r], c = o - l, u = a ? a.fromB : 1e9;
      for (; s < n.length && n[s] < u; ) {
        let f = n[s], d = n[s + 1], h = Math.max(l, f), p = Math.min(u, d);
        if (h <= p && new Tn(h + c, p + c, h, p).addToSet(i), d > u)
          break;
        s += 2;
      }
      if (!a)
        return i;
      new Tn(a.fromA, a.toA, a.fromB, a.toB).addToSet(i), o = a.toA, l = a.toB;
    }
  }
}
class zl {
  constructor(e, n, i) {
    this.view = e, this.state = n, this.transactions = i, this.flags = 0, this.startState = e.state, this.changes = kt.empty(this.startState.doc.length);
    for (let s of i)
      this.changes = this.changes.compose(s.changes);
    let r = [];
    this.changes.iterChangedRanges((s, o, l, a) => r.push(new Tn(s, o, l, a))), this.changedRanges = r;
  }
  /**
  @internal
  */
  static create(e, n, i) {
    return new zl(e, n, i);
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
class mp extends Ye {
  get length() {
    return this.view.state.doc.length;
  }
  constructor(e) {
    super(), this.view = e, this.decorations = [], this.dynamicDecorationMap = [!1], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.editContextFormatting = Ht.none, this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(e.contentDOM), this.children = [new vt()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new Tn(0, 0, 0, e.state.doc.length)], 0, null);
  }
  // Update the document view to a given state.
  update(e) {
    var n;
    let i = e.changedRanges;
    this.minWidth > 0 && i.length && (i.every(({ fromA: c, toA: u }) => u < this.minWidthFrom || c > this.minWidthTo) ? (this.minWidthFrom = e.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = e.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0), this.updateEditContextFormatting(e);
    let r = -1;
    this.view.inputState.composing >= 0 && !this.view.observer.editContext && (!((n = this.domChanged) === null || n === void 0) && n.newSel ? r = this.domChanged.newSel.head : !xP(e.changes, this.hasComposition) && !e.selectionSet && (r = e.state.selection.main.head));
    let s = r > -1 ? _P(this.view, e.changes, r) : null;
    if (this.domChanged = null, this.hasComposition) {
      this.markedForComposition.clear();
      let { from: c, to: u } = this.hasComposition;
      i = new Tn(c, u, e.changes.mapPos(c, -1), e.changes.mapPos(u, 1)).addToSet(i.slice());
    }
    this.hasComposition = s ? { from: s.range.fromB, to: s.range.toB } : null, (le.ie || le.chrome) && !s && e && e.state.doc.lines != e.startState.doc.lines && (this.forceSelection = !0);
    let o = this.decorations, l = this.updateDeco(), a = AP(o, l, e.changes);
    return i = Tn.extendWithRanges(i, a), !(this.flags & 7) && i.length == 0 ? !1 : (this.updateInner(i, e.startState.doc.length, s), e.transactions.length && (this.lastUpdate = Date.now()), !0);
  }
  // Used by update and the constructor do perform the actual DOM
  // update
  updateInner(e, n, i) {
    this.view.viewState.mustMeasureContent = !0, this.updateChildren(e, n, i);
    let { observer: r } = this.view;
    r.ignore(() => {
      this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + "px", this.dom.style.flexBasis = this.minWidth ? this.minWidth + "px" : "";
      let o = le.chrome || le.ios ? { node: r.selectionRange.focusNode, written: !1 } : void 0;
      this.sync(this.view, o), this.flags &= -8, o && (o.written || r.selectionRange.focusNode != o.node) && (this.forceSelection = !0), this.dom.style.height = "";
    }), this.markedForComposition.forEach(
      (o) => o.flags &= -9
      /* ViewFlag.Composition */
    );
    let s = [];
    if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length)
      for (let o of this.children)
        o instanceof Li && o.widget instanceof lu && s.push(o.dom);
    r.updateGaps(s);
  }
  updateChildren(e, n, i) {
    let r = i ? i.range.addToSet(e.slice()) : e, s = this.childCursor(n);
    for (let o = r.length - 1; ; o--) {
      let l = o >= 0 ? r[o] : null;
      if (!l)
        break;
      let { fromA: a, toA: c, fromB: u, toB: f } = l, d, h, p, v;
      if (i && i.range.fromB < f && i.range.toB > u) {
        let S = Ys.build(this.view.state.doc, u, i.range.fromB, this.decorations, this.dynamicDecorationMap), _ = Ys.build(this.view.state.doc, i.range.toB, f, this.decorations, this.dynamicDecorationMap);
        h = S.breakAtStart, p = S.openStart, v = _.openEnd;
        let E = this.compositionView(i);
        _.breakAtStart ? E.breakAfter = 1 : _.content.length && E.merge(E.length, E.length, _.content[0], !1, _.openStart, 0) && (E.breakAfter = _.content[0].breakAfter, _.content.shift()), S.content.length && E.merge(0, 0, S.content[S.content.length - 1], !0, 0, S.openEnd) && S.content.pop(), d = S.content.concat(E).concat(_.content);
      } else
        ({ content: d, breakAtStart: h, openStart: p, openEnd: v } = Ys.build(this.view.state.doc, u, f, this.decorations, this.dynamicDecorationMap));
      let { i: y, off: g } = s.findPos(c, 1), { i: b, off: k } = s.findPos(a, -1);
      p0(this, b, k, y, g, d, h, p, v);
    }
    i && this.fixCompositionDOM(i);
  }
  updateEditContextFormatting(e) {
    this.editContextFormatting = this.editContextFormatting.map(e.changes);
    for (let n of e.transactions)
      for (let i of n.effects)
        i.is(R0) && (this.editContextFormatting = i.value);
  }
  compositionView(e) {
    let n = new Wn(e.text.nodeValue);
    n.flags |= 8;
    for (let { deco: r } of e.marks)
      n = new Di(r, [n], n.length);
    let i = new vt();
    return i.append(n, 0), i;
  }
  fixCompositionDOM(e) {
    let n = (s, o) => {
      o.flags |= 8 | (o.children.some(
        (a) => a.flags & 7
        /* ViewFlag.Dirty */
      ) ? 1 : 0), this.markedForComposition.add(o);
      let l = Ye.get(s);
      l && l != o && (l.dom = null), o.setDOM(s);
    }, i = this.childPos(e.range.fromB, 1), r = this.children[i.i];
    n(e.line, r);
    for (let s = e.marks.length - 1; s >= -1; s--)
      i = r.childPos(i.off, 1), r = r.children[i.i], n(s >= 0 ? e.marks[s].node : e.text, r);
  }
  // Sync the DOM selection to this.state.selection
  updateSelection(e = !1, n = !1) {
    (e || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
    let i = this.view.root.activeElement, r = i == this.dom, s = !r && !(this.view.state.facet(ki) || this.dom.tabIndex > -1) && yl(this.dom, this.view.observer.selectionRange) && !(i && this.dom.contains(i));
    if (!(r || n || s))
      return;
    let o = this.forceSelection;
    this.forceSelection = !1;
    let l = this.view.state.selection.main, a = this.moveToLine(this.domAtPos(l.anchor)), c = l.empty ? a : this.moveToLine(this.domAtPos(l.head));
    if (le.gecko && l.empty && !this.hasComposition && kP(a)) {
      let f = document.createTextNode("");
      this.view.observer.ignore(() => a.node.insertBefore(f, a.node.childNodes[a.offset] || null)), a = c = new qt(f, 0), o = !0;
    }
    let u = this.view.observer.selectionRange;
    (o || !u.focusNode || (!Ks(a.node, a.offset, u.anchorNode, u.anchorOffset) || !Ks(c.node, c.offset, u.focusNode, u.focusOffset)) && !this.suppressWidgetCursorChange(u, l)) && (this.view.observer.ignore(() => {
      le.android && le.chrome && this.dom.contains(u.focusNode) && OP(u.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
      let f = co(this.view.root);
      if (f) if (l.empty) {
        if (le.gecko) {
          let d = EP(a.node, a.offset);
          if (d && d != 3) {
            let h = (d == 1 ? f0 : d0)(a.node, a.offset);
            h && (a = new qt(h.node, h.offset));
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
      s && this.view.root.activeElement == this.dom && (this.dom.blur(), i && i.focus());
    }), this.view.observer.setSelectionRange(a, c)), this.impreciseAnchor = a.precise ? null : new qt(u.anchorNode, u.anchorOffset), this.impreciseHead = c.precise ? null : new qt(u.focusNode, u.focusOffset);
  }
  // If a zero-length widget is inserted next to the cursor during
  // composition, avoid moving it across it and disrupting the
  // composition.
  suppressWidgetCursorChange(e, n) {
    return this.hasComposition && n.empty && Ks(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset) && this.posFromDOM(e.focusNode, e.focusOffset) == n.head;
  }
  enforceCursorAssoc() {
    if (this.hasComposition)
      return;
    let { view: e } = this, n = e.state.selection.main, i = co(e.root), { anchorNode: r, anchorOffset: s } = e.observer.selectionRange;
    if (!i || !n.empty || !n.assoc || !i.modify)
      return;
    let o = vt.find(this, n.head);
    if (!o)
      return;
    let l = o.posAtStart;
    if (n.head == l || n.head == l + o.length)
      return;
    let a = this.coordsAt(n.head, -1), c = this.coordsAt(n.head, 1);
    if (!a || !c || a.bottom > c.top)
      return;
    let u = this.domAtPos(n.head + n.assoc);
    i.collapse(u.node, u.offset), i.modify("move", n.assoc < 0 ? "forward" : "backward", "lineboundary"), e.observer.readSelectionRange();
    let f = e.observer.selectionRange;
    e.docView.posFromDOM(f.anchorNode, f.anchorOffset) != n.from && i.collapse(r, s);
  }
  // If a position is in/near a block widget, move it to a nearby text
  // line, since we don't want the cursor inside a block widget.
  moveToLine(e) {
    let n = this.dom, i;
    if (e.node != n)
      return e;
    for (let r = e.offset; !i && r < n.childNodes.length; r++) {
      let s = Ye.get(n.childNodes[r]);
      s instanceof vt && (i = s.domAtPos(0));
    }
    for (let r = e.offset - 1; !i && r >= 0; r--) {
      let s = Ye.get(n.childNodes[r]);
      s instanceof vt && (i = s.domAtPos(s.length));
    }
    return i ? new qt(i.node, i.offset, !0) : e;
  }
  nearest(e) {
    for (let n = e; n; ) {
      let i = Ye.get(n);
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
      let r = this.children[n];
      if (i < r.length || r instanceof vt)
        break;
      n++, i = 0;
    }
    return this.children[n].domAtPos(i);
  }
  coordsAt(e, n) {
    let i = null, r = 0;
    for (let s = this.length, o = this.children.length - 1; o >= 0; o--) {
      let l = this.children[o], a = s - l.breakAfter, c = a - l.length;
      if (a < e)
        break;
      if (c <= e && (c < e || l.covers(-1)) && (a > e || l.covers(1)) && (!i || l instanceof vt && !(i instanceof vt && n >= 0)))
        i = l, r = c;
      else if (i && c == e && a == e && l instanceof Li && Math.abs(n) < 2) {
        if (l.deco.startSide < 0)
          break;
        o && (i = null);
      }
      s = c;
    }
    return i ? i.coordsAt(e - r, n) : null;
  }
  coordsForChar(e) {
    let { i: n, off: i } = this.childPos(e, 1), r = this.children[n];
    if (!(r instanceof vt))
      return null;
    for (; r.children.length; ) {
      let { i: l, off: a } = r.childPos(i, 1);
      for (; ; l++) {
        if (l == r.children.length)
          return null;
        if ((r = r.children[l]).length)
          break;
      }
      i = a;
    }
    if (!(r instanceof Wn))
      return null;
    let s = tn(r.text, i);
    if (s == i)
      return null;
    let o = Or(r.dom, i, s).getClientRects();
    for (let l = 0; l < o.length; l++) {
      let a = o[l];
      if (l == o.length - 1 || a.top < a.bottom && a.left < a.right)
        return a;
    }
    return null;
  }
  measureVisibleLineHeights(e) {
    let n = [], { from: i, to: r } = e, s = this.view.contentDOM.clientWidth, o = s > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, l = -1, a = this.view.textDirection == Tt.LTR;
    for (let c = 0, u = 0; u < this.children.length; u++) {
      let f = this.children[u], d = c + f.length;
      if (d > r)
        break;
      if (c >= i) {
        let h = f.dom.getBoundingClientRect();
        if (n.push(h.height), o) {
          let p = f.dom.lastChild, v = p ? uo(p) : [];
          if (v.length) {
            let y = v[v.length - 1], g = a ? y.right - h.left : h.right - y.left;
            g > l && (l = g, this.minWidth = s, this.minWidthFrom = c, this.minWidthTo = d);
          }
        }
      }
      c = d + f.breakAfter;
    }
    return n;
  }
  textDirectionAt(e) {
    let { i: n } = this.childPos(e, 1);
    return getComputedStyle(this.children[n].dom).direction == "rtl" ? Tt.RTL : Tt.LTR;
  }
  measureTextSize() {
    for (let s of this.children)
      if (s instanceof vt) {
        let o = s.measureTextSize();
        if (o)
          return o;
      }
    let e = document.createElement("div"), n, i, r;
    return e.className = "cm-line", e.style.width = "99999px", e.style.position = "absolute", e.textContent = "abc def ghi jkl mno pqr stu", this.view.observer.ignore(() => {
      this.dom.appendChild(e);
      let s = uo(e.firstChild)[0];
      n = e.getBoundingClientRect().height, i = s ? s.width / 27 : 7, r = s ? s.height : n, e.remove();
    }), { lineHeight: n, charWidth: i, textHeight: r };
  }
  childCursor(e = this.length) {
    let n = this.children.length;
    return n && (e -= this.children[--n].length), new h0(this.children, e, n);
  }
  computeBlockGapDeco() {
    let e = [], n = this.view.viewState;
    for (let i = 0, r = 0; ; r++) {
      let s = r == n.viewports.length ? null : n.viewports[r], o = s ? s.from - 1 : this.length;
      if (o > i) {
        let l = (n.lineBlockAt(o).bottom - n.lineBlockAt(i).top) / this.view.scaleY;
        e.push(Ht.replace({
          widget: new lu(l),
          block: !0,
          inclusive: !0,
          isBlockGap: !0
        }).range(i, o));
      }
      if (!s)
        break;
      i = s.to + 1;
    }
    return Ht.set(e);
  }
  updateDeco() {
    let e = 1, n = this.view.state.facet(fo).map((s) => (this.dynamicDecorationMap[e++] = typeof s == "function") ? s(this.view) : s), i = !1, r = this.view.state.facet(F0).map((s, o) => {
      let l = typeof s == "function";
      return l && (i = !0), l ? s(this.view) : s;
    });
    for (r.length && (this.dynamicDecorationMap[e++] = i, n.push(He.join(r))), this.decorations = [
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
    for (let c of this.view.state.facet(D0))
      try {
        if (c(this.view, e.range, e))
          return !0;
      } catch (u) {
        ni(this.view.state, u, "scroll handler");
      }
    let { range: n } = e, i = this.coordsAt(n.head, n.empty ? n.assoc : n.head > n.anchor ? -1 : 1), r;
    if (!i)
      return;
    !n.empty && (r = this.coordsAt(n.anchor, n.anchor > n.head ? -1 : 1)) && (i = {
      left: Math.min(i.left, r.left),
      top: Math.min(i.top, r.top),
      right: Math.max(i.right, r.right),
      bottom: Math.max(i.bottom, r.bottom)
    });
    let s = V0(this.view), o = {
      left: i.left - s.left,
      top: i.top - s.top,
      right: i.right + s.right,
      bottom: i.bottom + s.bottom
    }, { offsetWidth: l, offsetHeight: a } = this.view.scrollDOM;
    nP(this.view.scrollDOM, o, n.head < n.anchor ? -1 : 1, e.x, e.y, Math.max(Math.min(e.xMargin, l), -l), Math.max(Math.min(e.yMargin, a), -a), this.view.textDirection == Tt.LTR);
  }
}
function kP(t) {
  return t.node.nodeType == 1 && t.node.firstChild && (t.offset == 0 || t.node.childNodes[t.offset - 1].contentEditable == "false") && (t.offset == t.node.childNodes.length || t.node.childNodes[t.offset].contentEditable == "false");
}
function H0(t, e) {
  let n = t.observer.selectionRange;
  if (!n.focusNode)
    return null;
  let i = f0(n.focusNode, n.focusOffset), r = d0(n.focusNode, n.focusOffset), s = i || r;
  if (r && i && r.node != i.node) {
    let l = Ye.get(r.node);
    if (!l || l instanceof Wn && l.text != r.node.nodeValue)
      s = r;
    else if (t.docView.lastCompositionAfterCursor) {
      let a = Ye.get(i.node);
      !a || a instanceof Wn && a.text != i.node.nodeValue || (s = r);
    }
  }
  if (t.docView.lastCompositionAfterCursor = s != i, !s)
    return null;
  let o = e - s.offset;
  return { from: o, to: o + s.node.nodeValue.length, node: s.node };
}
function _P(t, e, n) {
  let i = H0(t, n);
  if (!i)
    return null;
  let { node: r, from: s, to: o } = i, l = r.nodeValue;
  if (/[\n\r]/.test(l) || t.state.doc.sliceString(i.from, i.to) != l)
    return null;
  let a = e.invertedDesc, c = new Tn(a.mapPos(s), a.mapPos(o), s, o), u = [];
  for (let f = r.parentNode; ; f = f.parentNode) {
    let d = Ye.get(f);
    if (d instanceof Di)
      u.push({ node: f, deco: d.mark });
    else {
      if (d instanceof vt || f.nodeName == "DIV" && f.parentNode == t.contentDOM)
        return { range: c, text: r, marks: u, line: f };
      if (f != t.contentDOM)
        u.push({ node: f, deco: new So({
          inclusive: !0,
          attributes: uP(f),
          tagName: f.tagName.toLowerCase()
        }) });
      else
        return null;
    }
  }
}
function EP(t, e) {
  return t.nodeType != 1 ? 0 : (e && t.childNodes[e - 1].contentEditable == "false" ? 1 : 0) | (e < t.childNodes.length && t.childNodes[e].contentEditable == "false" ? 2 : 0);
}
let TP = class {
  constructor() {
    this.changes = [];
  }
  compareRange(e, n) {
    bl(e, n, this.changes);
  }
  comparePoint(e, n) {
    bl(e, n, this.changes);
  }
  boundChange(e) {
    bl(e, e, this.changes);
  }
};
function AP(t, e, n) {
  let i = new TP();
  return He.compare(t, e, n, i), i.changes;
}
function OP(t, e) {
  for (let n = t; n && n != e; n = n.assignedSlot || n.parentNode)
    if (n.nodeType == 1 && n.contentEditable == "false")
      return !0;
  return !1;
}
function xP(t, e) {
  let n = !1;
  return e && t.iterChangedRanges((i, r) => {
    i < e.to && r > e.from && (n = !0);
  }), n;
}
function MP(t, e, n = 1) {
  let i = t.charCategorizer(e), r = t.doc.lineAt(e), s = e - r.from;
  if (r.length == 0)
    return ee.cursor(e);
  s == 0 ? n = 1 : s == r.length && (n = -1);
  let o = s, l = s;
  n < 0 ? o = tn(r.text, s, !1) : l = tn(r.text, s);
  let a = i(r.text.slice(o, l));
  for (; o > 0; ) {
    let c = tn(r.text, o, !1);
    if (i(r.text.slice(c, o)) != a)
      break;
    o = c;
  }
  for (; l < r.length; ) {
    let c = tn(r.text, l);
    if (i(r.text.slice(l, c)) != a)
      break;
    l = c;
  }
  return ee.range(o + r.from, l + r.from);
}
function LP(t, e) {
  return e.left > t ? e.left - t : Math.max(0, t - e.right);
}
function IP(t, e) {
  return e.top > t ? e.top - t : Math.max(0, t - e.bottom);
}
function tc(t, e) {
  return t.top < e.bottom - 1 && t.bottom > e.top + 1;
}
function vp(t, e) {
  return e < t.top ? { top: e, left: t.left, right: t.right, bottom: t.bottom } : t;
}
function yp(t, e) {
  return e > t.bottom ? { top: t.top, left: t.left, right: t.right, bottom: e } : t;
}
function du(t, e, n) {
  let i, r, s, o, l = !1, a, c, u, f;
  for (let p = t.firstChild; p; p = p.nextSibling) {
    let v = uo(p);
    for (let y = 0; y < v.length; y++) {
      let g = v[y];
      r && tc(r, g) && (g = vp(yp(g, r.bottom), r.top));
      let b = LP(e, g), k = IP(n, g);
      if (b == 0 && k == 0)
        return p.nodeType == 3 ? bp(p, e, n) : du(p, e, n);
      if (!i || o > k || o == k && s > b) {
        i = p, r = g, s = b, o = k;
        let S = k ? n < g.top ? -1 : 1 : b ? e < g.left ? -1 : 1 : 0;
        l = !S || (S > 0 ? y < v.length - 1 : y > 0);
      }
      b == 0 ? n > g.bottom && (!u || u.bottom < g.bottom) ? (a = p, u = g) : n < g.top && (!f || f.top > g.top) && (c = p, f = g) : u && tc(u, g) ? u = yp(u, g.bottom) : f && tc(f, g) && (f = vp(f, g.top));
    }
  }
  if (u && u.bottom >= n ? (i = a, r = u) : f && f.top <= n && (i = c, r = f), !i)
    return { node: t, offset: 0 };
  let d = Math.max(r.left, Math.min(r.right, e));
  if (i.nodeType == 3)
    return bp(i, d, n);
  if (l && i.contentEditable != "false")
    return du(i, d, n);
  let h = Array.prototype.indexOf.call(t.childNodes, i) + (e >= (r.left + r.right) / 2 ? 1 : 0);
  return { node: t, offset: h };
}
function bp(t, e, n) {
  let i = t.nodeValue.length, r = -1, s = 1e9, o = 0;
  for (let l = 0; l < i; l++) {
    let a = Or(t, l, l + 1).getClientRects();
    for (let c = 0; c < a.length; c++) {
      let u = a[c];
      if (u.top == u.bottom)
        continue;
      o || (o = e - u.left);
      let f = (u.top > n ? u.top - n : n - u.bottom) - 1;
      if (u.left - 1 <= e && u.right + 1 >= e && f < s) {
        let d = e >= (u.left + u.right) / 2, h = d;
        if ((le.chrome || le.gecko) && Or(t, l).getBoundingClientRect().left == u.right && (h = !d), f <= 0)
          return { node: t, offset: l + (h ? 1 : 0) };
        r = l + (h ? 1 : 0), s = f;
      }
    }
  }
  return { node: t, offset: r > -1 ? r : o > 0 ? t.nodeValue.length : 0 };
}
function W0(t, e, n, i = -1) {
  var r, s;
  let o = t.contentDOM.getBoundingClientRect(), l = o.top + t.viewState.paddingTop, a, { docHeight: c } = t.viewState, { x: u, y: f } = e, d = f - l;
  if (d < 0)
    return 0;
  if (d > c)
    return t.state.doc.length;
  for (let S = t.viewState.heightOracle.textHeight / 2, _ = !1; a = t.elementAtHeight(d), a.type != En.Text; )
    for (; d = i > 0 ? a.bottom + S : a.top - S, !(d >= 0 && d <= c); ) {
      if (_)
        return n ? null : 0;
      _ = !0, i = -i;
    }
  f = l + d;
  let h = a.from;
  if (h < t.viewport.from)
    return t.viewport.from == 0 ? 0 : n ? null : wp(t, o, a, u, f);
  if (h > t.viewport.to)
    return t.viewport.to == t.state.doc.length ? t.state.doc.length : n ? null : wp(t, o, a, u, f);
  let p = t.dom.ownerDocument, v = t.root.elementFromPoint ? t.root : p, y = v.elementFromPoint(u, f);
  y && !t.contentDOM.contains(y) && (y = null), y || (u = Math.max(o.left + 1, Math.min(o.right - 1, u)), y = v.elementFromPoint(u, f), y && !t.contentDOM.contains(y) && (y = null));
  let g, b = -1;
  if (y && ((r = t.docView.nearest(y)) === null || r === void 0 ? void 0 : r.isEditable) != !1) {
    if (p.caretPositionFromPoint) {
      let S = p.caretPositionFromPoint(u, f);
      S && ({ offsetNode: g, offset: b } = S);
    } else if (p.caretRangeFromPoint) {
      let S = p.caretRangeFromPoint(u, f);
      S && ({ startContainer: g, startOffset: b } = S, (!t.contentDOM.contains(g) || le.safari && PP(g, b, u) || le.chrome && DP(g, b, u)) && (g = void 0));
    }
    g && (b = Math.min(di(g), b));
  }
  if (!g || !t.docView.dom.contains(g)) {
    let S = vt.find(t.docView, h);
    if (!S)
      return d > a.top + a.height / 2 ? a.to : a.from;
    ({ node: g, offset: b } = du(S.dom, u, f));
  }
  let k = t.docView.nearest(g);
  if (!k)
    return null;
  if (k.isWidget && ((s = k.dom) === null || s === void 0 ? void 0 : s.nodeType) == 1) {
    let S = k.dom.getBoundingClientRect();
    return e.y < S.top || e.y <= S.bottom && e.x <= (S.left + S.right) / 2 ? k.posAtStart : k.posAtEnd;
  } else
    return k.localPosFromDOM(g, b) + k.posAtStart;
}
function wp(t, e, n, i, r) {
  let s = Math.round((i - e.left) * t.defaultCharacterWidth);
  if (t.lineWrapping && n.height > t.defaultLineHeight * 1.5) {
    let l = t.viewState.heightOracle.textHeight, a = Math.floor((r - n.top - (t.defaultLineHeight - l) * 0.5) / l);
    s += a * t.viewState.heightOracle.lineLength;
  }
  let o = t.state.sliceDoc(n.from, n.to);
  return n.from + JI(o, s, t.state.tabSize);
}
function PP(t, e, n) {
  let i;
  if (t.nodeType != 3 || e != (i = t.nodeValue.length))
    return !1;
  for (let r = t.nextSibling; r; r = r.nextSibling)
    if (r.nodeType != 1 || r.nodeName != "BR")
      return !1;
  return Or(t, i - 1, i).getBoundingClientRect().left > n;
}
function DP(t, e, n) {
  if (e != 0)
    return !1;
  for (let r = t; ; ) {
    let s = r.parentNode;
    if (!s || s.nodeType != 1 || s.firstChild != r)
      return !1;
    if (s.classList.contains("cm-line"))
      break;
    r = s;
  }
  let i = t.nodeType == 1 ? t.getBoundingClientRect() : Or(t, 0, Math.max(t.nodeValue.length, 1)).getBoundingClientRect();
  return n - i.left > 5;
}
function RP(t, e) {
  let n = t.lineBlockAt(e);
  if (Array.isArray(n.type)) {
    for (let i of n.type)
      if (i.to > e || i.to == e && (i.to == n.to || i.type == En.Text))
        return i;
  }
  return n;
}
function NP(t, e, n, i) {
  let r = RP(t, e.head), s = !i || r.type != En.Text || !(t.lineWrapping || r.widgetLineBreaks) ? null : t.coordsAtPos(e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head);
  if (s) {
    let o = t.dom.getBoundingClientRect(), l = t.textDirectionAt(r.from), a = t.posAtCoords({
      x: n == (l == Tt.LTR) ? o.right - 1 : o.left + 1,
      y: (s.top + s.bottom) / 2
    });
    if (a != null)
      return ee.cursor(a, n ? -1 : 1);
  }
  return ee.cursor(n ? r.to : r.from, n ? -1 : 1);
}
function Sp(t, e, n, i) {
  let r = t.state.doc.lineAt(e.head), s = t.bidiSpans(r), o = t.textDirectionAt(r.from);
  for (let l = e, a = null; ; ) {
    let c = bP(r, s, o, l, n), u = T0;
    if (!c) {
      if (r.number == (n ? t.state.doc.lines : 1))
        return l;
      u = `
`, r = t.state.doc.line(r.number + (n ? 1 : -1)), s = t.bidiSpans(r), c = t.visualLineSide(r, !n);
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
function FP(t, e, n) {
  let i = t.state.charCategorizer(e), r = i(n);
  return (s) => {
    let o = i(s);
    return r == Ai.Space && (r = o), r == o;
  };
}
function $P(t, e, n, i) {
  let r = e.head, s = n ? 1 : -1;
  if (r == (n ? t.state.doc.length : 0))
    return ee.cursor(r, e.assoc);
  let o = e.goalColumn, l, a = t.contentDOM.getBoundingClientRect(), c = t.coordsAtPos(r, e.assoc || -1), u = t.documentTop;
  if (c)
    o == null && (o = c.left - a.left), l = s < 0 ? c.top : c.bottom;
  else {
    let h = t.viewState.lineBlockAt(r);
    o == null && (o = Math.min(a.right - a.left, t.defaultCharacterWidth * (r - h.from))), l = (s < 0 ? h.top : h.bottom) + u;
  }
  let f = a.left + o, d = i ?? t.viewState.heightOracle.textHeight >> 1;
  for (let h = 0; ; h += 10) {
    let p = l + (d + h) * s, v = W0(t, { x: f, y: p }, !1, s);
    if (p < a.top || p > a.bottom || (s < 0 ? v < r : v > r)) {
      let y = t.docView.coordsForChar(v), g = !y || p < y.top ? -1 : 1;
      return ee.cursor(v, g, void 0, o);
    }
  }
}
function wl(t, e, n) {
  for (; ; ) {
    let i = 0;
    for (let r of t)
      r.between(e - 1, e + 1, (s, o, l) => {
        if (e > s && e < o) {
          let a = i || n || (e - s < o - e ? -1 : 1);
          e = a < 0 ? s : o, i = a;
        }
      });
    if (!i)
      return e;
  }
}
function nc(t, e, n) {
  let i = wl(t.state.facet($f).map((r) => r(t)), n.from, e.head > n.from ? -1 : 1);
  return i == n.from ? n : ee.cursor(i, i < n.from ? 1 : -1);
}
const Is = "￿";
class BP {
  constructor(e, n) {
    this.points = e, this.text = "", this.lineSeparator = n.facet(Ne.lineSeparator);
  }
  append(e) {
    this.text += e;
  }
  lineBreak() {
    this.text += Is;
  }
  readRange(e, n) {
    if (!e)
      return this;
    let i = e.parentNode;
    for (let r = e; ; ) {
      this.findPointBefore(i, r);
      let s = this.text.length;
      this.readNode(r);
      let o = r.nextSibling;
      if (o == n)
        break;
      let l = Ye.get(r), a = Ye.get(o);
      (l && a ? l.breakAfter : (l ? l.breakAfter : Hl(r)) || Hl(o) && (r.nodeName != "BR" || r.cmIgnore) && this.text.length > s) && this.lineBreak(), r = o;
    }
    return this.findPointBefore(i, n), this;
  }
  readTextNode(e) {
    let n = e.nodeValue;
    for (let i of this.points)
      i.node == e && (i.pos = this.text.length + Math.min(i.offset, n.length));
    for (let i = 0, r = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
      let s = -1, o = 1, l;
      if (this.lineSeparator ? (s = n.indexOf(this.lineSeparator, i), o = this.lineSeparator.length) : (l = r.exec(n)) && (s = l.index, o = l[0].length), this.append(n.slice(i, s < 0 ? n.length : s)), s < 0)
        break;
      if (this.lineBreak(), o > 1)
        for (let a of this.points)
          a.node == e && a.pos > this.text.length && (a.pos -= o - 1);
      i = s + o;
    }
  }
  readNode(e) {
    if (e.cmIgnore)
      return;
    let n = Ye.get(e), i = n && n.overrideDOMText;
    if (i != null) {
      this.findPointInside(e, i.length);
      for (let r = i.iter(); !r.next().done; )
        r.lineBreak ? this.lineBreak() : this.append(r.value);
    } else e.nodeType == 3 ? this.readTextNode(e) : e.nodeName == "BR" ? e.nextSibling && this.lineBreak() : e.nodeType == 1 && this.readRange(e.firstChild, null);
  }
  findPointBefore(e, n) {
    for (let i of this.points)
      i.node == e && e.childNodes[i.offset] == n && (i.pos = this.text.length);
  }
  findPointInside(e, n) {
    for (let i of this.points)
      (e.nodeType == 3 ? i.node == e : e.contains(i.node)) && (i.pos = this.text.length + (VP(e, i.node, i.offset) ? n : 0));
  }
}
function VP(t, e, n) {
  for (; ; ) {
    if (!e || n < di(e))
      return !1;
    if (e == t)
      return !0;
    n = Ar(e) + 1, e = e.parentNode;
  }
}
class Cp {
  constructor(e, n) {
    this.node = e, this.offset = n, this.pos = -1;
  }
}
class HP {
  constructor(e, n, i, r) {
    this.typeOver = r, this.bounds = null, this.text = "", this.domChanged = n > -1;
    let { impreciseHead: s, impreciseAnchor: o } = e.docView;
    if (e.state.readOnly && n > -1)
      this.newSel = null;
    else if (n > -1 && (this.bounds = e.docView.domBoundsAround(n, i, 0))) {
      let l = s || o ? [] : GP(e), a = new BP(l, e.state);
      a.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = a.text, this.newSel = UP(l, this.bounds.from);
    } else {
      let l = e.observer.selectionRange, a = s && s.node == l.focusNode && s.offset == l.focusOffset || !tu(e.contentDOM, l.focusNode) ? e.state.selection.main.head : e.docView.posFromDOM(l.focusNode, l.focusOffset), c = o && o.node == l.anchorNode && o.offset == l.anchorOffset || !tu(e.contentDOM, l.anchorNode) ? e.state.selection.main.anchor : e.docView.posFromDOM(l.anchorNode, l.anchorOffset), u = e.viewport;
      if ((le.ios || le.chrome) && e.state.selection.main.empty && a != c && (u.from > 0 || u.to < e.state.doc.length)) {
        let f = Math.min(a, c), d = Math.max(a, c), h = u.from - f, p = u.to - d;
        (h == 0 || h == 1 || f == 0) && (p == 0 || p == -1 || d == e.state.doc.length) && (a = 0, c = e.state.doc.length);
      }
      this.newSel = ee.single(c, a);
    }
  }
}
function z0(t, e) {
  let n, { newSel: i } = e, r = t.state.selection.main, s = t.inputState.lastKeyTime > Date.now() - 100 ? t.inputState.lastKeyCode : -1;
  if (e.bounds) {
    let { from: o, to: l } = e.bounds, a = r.from, c = null;
    (s === 8 || le.android && e.text.length < l - o) && (a = r.to, c = "end");
    let u = zP(t.state.doc.sliceString(o, l, Is), e.text, a - o, c);
    u && (le.chrome && s == 13 && u.toB == u.from + 2 && e.text.slice(u.from, u.toB) == Is + Is && u.toB--, n = {
      from: o + u.from,
      to: o + u.toA,
      insert: De.of(e.text.slice(u.from, u.toB).split(Is))
    });
  } else i && (!t.hasFocus && t.state.facet(ki) || i.main.eq(r)) && (i = null);
  if (!n && !i)
    return !1;
  if (!n && e.typeOver && !r.empty && i && i.main.empty ? n = { from: r.from, to: r.to, insert: t.state.doc.slice(r.from, r.to) } : (le.mac || le.android) && n && n.from == n.to && n.from == r.head - 1 && /^\. ?$/.test(n.insert.toString()) && t.contentDOM.getAttribute("autocorrect") == "off" ? (i && n.insert.length == 2 && (i = ee.single(i.main.anchor - 1, i.main.head - 1)), n = { from: n.from, to: n.to, insert: De.of([n.insert.toString().replace(".", " ")]) }) : n && n.from >= r.from && n.to <= r.to && (n.from != r.from || n.to != r.to) && r.to - r.from - (n.to - n.from) <= 4 ? n = {
    from: r.from,
    to: r.to,
    insert: t.state.doc.slice(r.from, n.from).append(n.insert).append(t.state.doc.slice(n.to, r.to))
  } : le.chrome && n && n.from == n.to && n.from == r.head && n.insert.toString() == `
 ` && t.lineWrapping && (i && (i = ee.single(i.main.anchor - 1, i.main.head - 1)), n = { from: r.from, to: r.to, insert: De.of([" "]) }), n)
    return Bf(t, n, i, s);
  if (i && !i.main.eq(r)) {
    let o = !1, l = "select";
    return t.inputState.lastSelectionTime > Date.now() - 50 && (t.inputState.lastSelectionOrigin == "select" && (o = !0), l = t.inputState.lastSelectionOrigin), t.dispatch({ selection: i, scrollIntoView: o, userEvent: l }), !0;
  } else
    return !1;
}
function Bf(t, e, n, i = -1) {
  if (le.ios && t.inputState.flushIOSKey(e))
    return !0;
  let r = t.state.selection.main;
  if (le.android && (e.to == r.to && // GBoard will sometimes remove a space it just inserted
  // after a completion when you press enter
  (e.from == r.from || e.from == r.from - 1 && t.state.sliceDoc(e.from, r.from) == " ") && e.insert.length == 1 && e.insert.lines == 2 && Yr(t.contentDOM, "Enter", 13) || (e.from == r.from - 1 && e.to == r.to && e.insert.length == 0 || i == 8 && e.insert.length < e.to - e.from && e.to > r.head) && Yr(t.contentDOM, "Backspace", 8) || e.from == r.from && e.to == r.to + 1 && e.insert.length == 0 && Yr(t.contentDOM, "Delete", 46)))
    return !0;
  let s = e.insert.toString();
  t.inputState.composing >= 0 && t.inputState.composing++;
  let o, l = () => o || (o = WP(t, e, n));
  return t.state.facet(L0).some((a) => a(t, e.from, e.to, s, l)) || t.dispatch(l()), !0;
}
function WP(t, e, n) {
  let i, r = t.state, s = r.selection.main;
  if (e.from >= s.from && e.to <= s.to && e.to - e.from >= (s.to - s.from) / 3 && (!n || n.main.empty && n.main.from == e.from + e.insert.length) && t.inputState.composing < 0) {
    let l = s.from < e.from ? r.sliceDoc(s.from, e.from) : "", a = s.to > e.to ? r.sliceDoc(e.to, s.to) : "";
    i = r.replaceSelection(t.state.toText(l + e.insert.sliceString(0, void 0, t.state.lineBreak) + a));
  } else {
    let l = r.changes(e), a = n && n.main.to <= l.newLength ? n.main : void 0;
    if (r.selection.ranges.length > 1 && t.inputState.composing >= 0 && e.to <= s.to && e.to >= s.to - 10) {
      let c = t.state.sliceDoc(e.from, e.to), u, f = n && H0(t, n.main.head);
      if (f) {
        let p = e.insert.length - (e.to - e.from);
        u = { from: f.from, to: f.to - p };
      } else
        u = t.state.doc.lineAt(s.head);
      let d = s.to - e.to, h = s.to - s.from;
      i = r.changeByRange((p) => {
        if (p.from == s.from && p.to == s.to)
          return { changes: l, range: a || p.map(l) };
        let v = p.to - d, y = v - c.length;
        if (p.to - p.from != h || t.state.sliceDoc(y, v) != c || // Unfortunately, there's no way to make multiple
        // changes in the same node work without aborting
        // composition, so cursors in the composition range are
        // ignored.
        p.to >= u.from && p.from <= u.to)
          return { range: p };
        let g = r.changes({ from: y, to: v, insert: e.insert }), b = p.to - s.to;
        return {
          changes: g,
          range: a ? ee.range(Math.max(0, a.anchor + b), Math.max(0, a.head + b)) : p.map(g)
        };
      });
    } else
      i = {
        changes: l,
        selection: a && r.selection.replaceRange(a)
      };
  }
  let o = "input.type";
  return (t.composing || t.inputState.compositionPendingChange && t.inputState.compositionEndedAt > Date.now() - 50) && (t.inputState.compositionPendingChange = !1, o += ".compose", t.inputState.compositionFirstChange && (o += ".start", t.inputState.compositionFirstChange = !1)), r.update(i, { userEvent: o, scrollIntoView: !0 });
}
function zP(t, e, n, i) {
  let r = Math.min(t.length, e.length), s = 0;
  for (; s < r && t.charCodeAt(s) == e.charCodeAt(s); )
    s++;
  if (s == r && t.length == e.length)
    return null;
  let o = t.length, l = e.length;
  for (; o > 0 && l > 0 && t.charCodeAt(o - 1) == e.charCodeAt(l - 1); )
    o--, l--;
  if (i == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    n -= o + a - s;
  }
  if (o < s && t.length < e.length) {
    let a = n <= s && n >= o ? s - n : 0;
    s -= a, l = s + (l - o), o = s;
  } else if (l < s) {
    let a = n <= s && n >= l ? s - n : 0;
    s -= a, o = s + (o - l), l = s;
  }
  return { from: s, toA: o, toB: l };
}
function GP(t) {
  let e = [];
  if (t.root.activeElement != t.contentDOM)
    return e;
  let { anchorNode: n, anchorOffset: i, focusNode: r, focusOffset: s } = t.observer.selectionRange;
  return n && (e.push(new Cp(n, i)), (r != n || s != i) && e.push(new Cp(r, s))), e;
}
function UP(t, e) {
  if (t.length == 0)
    return null;
  let n = t[0].pos, i = t.length == 2 ? t[1].pos : n;
  return n > -1 && i > -1 ? ee.single(n + e, i + e) : null;
}
class jP {
  setSelectionOrigin(e) {
    this.lastSelectionOrigin = e, this.lastSelectionTime = Date.now();
  }
  constructor(e) {
    this.view = e, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.tabFocusMode = -1, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = /* @__PURE__ */ Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = e.hasFocus, le.safari && e.contentDOM.addEventListener("input", () => null), le.gecko && aD(e.contentDOM.ownerDocument);
  }
  handleEvent(e) {
    !eD(this.view, e) || this.ignoreDuringComposition(e) || e.type == "keydown" && this.keydown(e) || (this.view.updateState != 0 ? Promise.resolve().then(() => this.runHandlers(e.type, e)) : this.runHandlers(e.type, e));
  }
  runHandlers(e, n) {
    let i = this.handlers[e];
    if (i) {
      for (let r of i.observers)
        r(this.view, n);
      for (let r of i.handlers) {
        if (n.defaultPrevented)
          break;
        if (r(this.view, n)) {
          n.preventDefault();
          break;
        }
      }
    }
  }
  ensureHandlers(e) {
    let n = KP(e), i = this.handlers, r = this.view.contentDOM;
    for (let s in n)
      if (s != "scroll") {
        let o = !n[s].handlers.length, l = i[s];
        l && o != !l.handlers.length && (r.removeEventListener(s, this.handleEvent), l = null), l || r.addEventListener(s, this.handleEvent, { passive: o });
      }
    for (let s in i)
      s != "scroll" && !n[s] && r.removeEventListener(s, this.handleEvent);
    this.handlers = n;
  }
  keydown(e) {
    if (this.lastKeyCode = e.keyCode, this.lastKeyTime = Date.now(), e.keyCode == 9 && this.tabFocusMode > -1 && (!this.tabFocusMode || Date.now() <= this.tabFocusMode))
      return !0;
    if (this.tabFocusMode > 0 && e.keyCode != 27 && U0.indexOf(e.keyCode) < 0 && (this.tabFocusMode = -1), le.android && le.chrome && !e.synthetic && (e.keyCode == 13 || e.keyCode == 8))
      return this.view.observer.delayAndroidKey(e.key, e.keyCode), !0;
    let n;
    return le.ios && !e.synthetic && !e.altKey && !e.metaKey && ((n = G0.find((i) => i.keyCode == e.keyCode)) && !e.ctrlKey || YP.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey) ? (this.pendingIOSKey = n || e, setTimeout(() => this.flushIOSKey(), 250), !0) : (e.keyCode != 229 && this.view.observer.forceFlush(), !1);
  }
  flushIOSKey(e) {
    let n = this.pendingIOSKey;
    return !n || n.key == "Enter" && e && e.from < e.to && /^\S+$/.test(e.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, Yr(this.view.contentDOM, n.key, n.keyCode, n instanceof KeyboardEvent ? n : void 0));
  }
  ignoreDuringComposition(e) {
    return /^key/.test(e.type) ? this.composing > 0 ? !0 : le.safari && !le.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
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
function kp(t, e) {
  return (n, i) => {
    try {
      return e.call(t, i, n);
    } catch (r) {
      ni(n.state, r);
    }
  };
}
function KP(t) {
  let e = /* @__PURE__ */ Object.create(null);
  function n(i) {
    return e[i] || (e[i] = { observers: [], handlers: [] });
  }
  for (let i of t) {
    let r = i.spec;
    if (r && r.domEventHandlers)
      for (let s in r.domEventHandlers) {
        let o = r.domEventHandlers[s];
        o && n(s).handlers.push(kp(i.value, o));
      }
    if (r && r.domEventObservers)
      for (let s in r.domEventObservers) {
        let o = r.domEventObservers[s];
        o && n(s).observers.push(kp(i.value, o));
      }
  }
  for (let i in zn)
    n(i).handlers.push(zn[i]);
  for (let i in In)
    n(i).observers.push(In[i]);
  return e;
}
const G0 = [
  { key: "Backspace", keyCode: 8, inputType: "deleteContentBackward" },
  { key: "Enter", keyCode: 13, inputType: "insertParagraph" },
  { key: "Enter", keyCode: 13, inputType: "insertLineBreak" },
  { key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
], YP = "dthko", U0 = [16, 17, 18, 20, 91, 92, 224, 225], Yo = 6;
function qo(t) {
  return Math.max(0, t) * 0.7 + 8;
}
function qP(t, e) {
  return Math.max(Math.abs(t.clientX - e.clientX), Math.abs(t.clientY - e.clientY));
}
class JP {
  constructor(e, n, i, r) {
    this.view = e, this.startEvent = n, this.style = i, this.mustSelect = r, this.scrollSpeed = { x: 0, y: 0 }, this.scrolling = -1, this.lastEvent = n, this.scrollParents = iP(e.contentDOM), this.atoms = e.state.facet($f).map((o) => o(e));
    let s = e.contentDOM.ownerDocument;
    s.addEventListener("mousemove", this.move = this.move.bind(this)), s.addEventListener("mouseup", this.up = this.up.bind(this)), this.extend = n.shiftKey, this.multiple = e.state.facet(Ne.allowMultipleSelections) && XP(e, n), this.dragging = QP(e, n) && Y0(n) == 1 ? null : !1;
  }
  start(e) {
    this.dragging === !1 && this.select(e);
  }
  move(e) {
    if (e.buttons == 0)
      return this.destroy();
    if (this.dragging || this.dragging == null && qP(this.startEvent, e) < 10)
      return;
    this.select(this.lastEvent = e);
    let n = 0, i = 0, r = 0, s = 0, o = this.view.win.innerWidth, l = this.view.win.innerHeight;
    this.scrollParents.x && ({ left: r, right: o } = this.scrollParents.x.getBoundingClientRect()), this.scrollParents.y && ({ top: s, bottom: l } = this.scrollParents.y.getBoundingClientRect());
    let a = V0(this.view);
    e.clientX - a.left <= r + Yo ? n = -qo(r - e.clientX) : e.clientX + a.right >= o - Yo && (n = qo(e.clientX - o)), e.clientY - a.top <= s + Yo ? i = -qo(s - e.clientY) : e.clientY + a.bottom >= l - Yo && (i = qo(e.clientY - l)), this.setScrollSpeed(n, i);
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
      let r = e.ranges[i], s = null;
      if (r.empty) {
        let o = wl(this.atoms, r.from, 0);
        o != r.from && (s = ee.cursor(o, -1));
      } else {
        let o = wl(this.atoms, r.from, -1), l = wl(this.atoms, r.to, 1);
        (o != r.from || l != r.to) && (s = ee.range(r.from == r.anchor ? o : l, r.from == r.head ? o : l));
      }
      s && (n || (n = e.ranges.slice()), n[i] = s);
    }
    return n ? ee.create(n, e.mainIndex) : e;
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
function XP(t, e) {
  let n = t.state.facet(A0);
  return n.length ? n[0](e) : le.mac ? e.metaKey : e.ctrlKey;
}
function ZP(t, e) {
  let n = t.state.facet(O0);
  return n.length ? n[0](e) : le.mac ? !e.altKey : !e.ctrlKey;
}
function QP(t, e) {
  let { main: n } = t.state.selection;
  if (n.empty)
    return !1;
  let i = co(t.root);
  if (!i || i.rangeCount == 0)
    return !0;
  let r = i.getRangeAt(0).getClientRects();
  for (let s = 0; s < r.length; s++) {
    let o = r[s];
    if (o.left <= e.clientX && o.right >= e.clientX && o.top <= e.clientY && o.bottom >= e.clientY)
      return !0;
  }
  return !1;
}
function eD(t, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let n = e.target, i; n != t.contentDOM; n = n.parentNode)
    if (!n || n.nodeType == 11 || (i = Ye.get(n)) && i.ignoreEvent(e))
      return !1;
  return !0;
}
const zn = /* @__PURE__ */ Object.create(null), In = /* @__PURE__ */ Object.create(null), j0 = le.ie && le.ie_version < 15 || le.ios && le.webkit_version < 604;
function tD(t) {
  let e = t.dom.parentNode;
  if (!e)
    return;
  let n = e.appendChild(document.createElement("textarea"));
  n.style.cssText = "position: fixed; left: -10000px; top: 10px", n.focus(), setTimeout(() => {
    t.focus(), n.remove(), K0(t, n.value);
  }, 50);
}
function Ea(t, e, n) {
  for (let i of t.facet(e))
    n = i(n, t);
  return n;
}
function K0(t, e) {
  e = Ea(t.state, Rf, e);
  let { state: n } = t, i, r = 1, s = n.toText(e), o = s.lines == n.selection.ranges.length;
  if (hu != null && n.selection.ranges.every((a) => a.empty) && hu == s.toString()) {
    let a = -1;
    i = n.changeByRange((c) => {
      let u = n.doc.lineAt(c.from);
      if (u.from == a)
        return { range: c };
      a = u.from;
      let f = n.toText((o ? s.line(r++).text : e) + n.lineBreak);
      return {
        changes: { from: u.from, insert: f },
        range: ee.cursor(c.from + f.length)
      };
    });
  } else o ? i = n.changeByRange((a) => {
    let c = s.line(r++);
    return {
      changes: { from: a.from, to: a.to, insert: c.text },
      range: ee.cursor(a.from + c.length)
    };
  }) : i = n.replaceSelection(s);
  t.dispatch(i, {
    userEvent: "input.paste",
    scrollIntoView: !0
  });
}
In.scroll = (t) => {
  t.inputState.lastScrollTop = t.scrollDOM.scrollTop, t.inputState.lastScrollLeft = t.scrollDOM.scrollLeft;
};
zn.keydown = (t, e) => (t.inputState.setSelectionOrigin("select"), e.keyCode == 27 && t.inputState.tabFocusMode != 0 && (t.inputState.tabFocusMode = Date.now() + 2e3), !1);
In.touchstart = (t, e) => {
  t.inputState.lastTouchTime = Date.now(), t.inputState.setSelectionOrigin("select.pointer");
};
In.touchmove = (t) => {
  t.inputState.setSelectionOrigin("select.pointer");
};
zn.mousedown = (t, e) => {
  if (t.observer.flush(), t.inputState.lastTouchTime > Date.now() - 2e3)
    return !1;
  let n = null;
  for (let i of t.state.facet(x0))
    if (n = i(t, e), n)
      break;
  if (!n && e.button == 0 && (n = rD(t, e)), n) {
    let i = !t.hasFocus;
    t.inputState.startMouseSelection(new JP(t, e, n, i)), i && t.observer.ignore(() => {
      a0(t.contentDOM);
      let s = t.root.activeElement;
      s && !s.contains(t.contentDOM) && s.blur();
    });
    let r = t.inputState.mouseSelection;
    if (r)
      return r.start(e), r.dragging === !1;
  }
  return !1;
};
function _p(t, e, n, i) {
  if (i == 1)
    return ee.cursor(e, n);
  if (i == 2)
    return MP(t.state, e, n);
  {
    let r = vt.find(t.docView, e), s = t.state.doc.lineAt(r ? r.posAtEnd : e), o = r ? r.posAtStart : s.from, l = r ? r.posAtEnd : s.to;
    return l < t.state.doc.length && l == s.to && l++, ee.range(o, l);
  }
}
let Ep = (t, e, n) => e >= n.top && e <= n.bottom && t >= n.left && t <= n.right;
function nD(t, e, n, i) {
  let r = vt.find(t.docView, e);
  if (!r)
    return 1;
  let s = e - r.posAtStart;
  if (s == 0)
    return 1;
  if (s == r.length)
    return -1;
  let o = r.coordsAt(s, -1);
  if (o && Ep(n, i, o))
    return -1;
  let l = r.coordsAt(s, 1);
  return l && Ep(n, i, l) ? 1 : o && o.bottom >= i ? -1 : 1;
}
function Tp(t, e) {
  let n = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
  return { pos: n, bias: nD(t, n, e.clientX, e.clientY) };
}
const iD = le.ie && le.ie_version <= 11;
let Ap = null, Op = 0, xp = 0;
function Y0(t) {
  if (!iD)
    return t.detail;
  let e = Ap, n = xp;
  return Ap = t, xp = Date.now(), Op = !e || n > Date.now() - 400 && Math.abs(e.clientX - t.clientX) < 2 && Math.abs(e.clientY - t.clientY) < 2 ? (Op + 1) % 3 : 1;
}
function rD(t, e) {
  let n = Tp(t, e), i = Y0(e), r = t.state.selection;
  return {
    update(s) {
      s.docChanged && (n.pos = s.changes.mapPos(n.pos), r = r.map(s.changes));
    },
    get(s, o, l) {
      let a = Tp(t, s), c, u = _p(t, a.pos, a.bias, i);
      if (n.pos != a.pos && !o) {
        let f = _p(t, n.pos, n.bias, i), d = Math.min(f.from, u.from), h = Math.max(f.to, u.to);
        u = d < u.from ? ee.range(d, h) : ee.range(h, d);
      }
      return o ? r.replaceRange(r.main.extend(u.from, u.to)) : l && i == 1 && r.ranges.length > 1 && (c = sD(r, a.pos)) ? c : l ? r.addRange(u) : ee.create([u]);
    }
  };
}
function sD(t, e) {
  for (let n = 0; n < t.ranges.length; n++) {
    let { from: i, to: r } = t.ranges[n];
    if (i <= e && r >= e)
      return ee.create(t.ranges.slice(0, n).concat(t.ranges.slice(n + 1)), t.mainIndex == n ? 0 : t.mainIndex - (t.mainIndex > n ? 1 : 0));
  }
  return null;
}
zn.dragstart = (t, e) => {
  let { selection: { main: n } } = t.state;
  if (e.target.draggable) {
    let r = t.docView.nearest(e.target);
    if (r && r.isWidget) {
      let s = r.posAtStart, o = s + r.length;
      (s >= n.to || o <= n.from) && (n = ee.range(s, o));
    }
  }
  let { inputState: i } = t;
  return i.mouseSelection && (i.mouseSelection.dragging = !0), i.draggedContent = n, e.dataTransfer && (e.dataTransfer.setData("Text", Ea(t.state, Nf, t.state.sliceDoc(n.from, n.to))), e.dataTransfer.effectAllowed = "copyMove"), !1;
};
zn.dragend = (t) => (t.inputState.draggedContent = null, !1);
function Mp(t, e, n, i) {
  if (n = Ea(t.state, Rf, n), !n)
    return;
  let r = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1), { draggedContent: s } = t.inputState, o = i && s && ZP(t, e) ? { from: s.from, to: s.to } : null, l = { from: r, insert: n }, a = t.state.changes(o ? [o, l] : l);
  t.focus(), t.dispatch({
    changes: a,
    selection: { anchor: a.mapPos(r, -1), head: a.mapPos(r, 1) },
    userEvent: o ? "move.drop" : "input.drop"
  }), t.inputState.draggedContent = null;
}
zn.drop = (t, e) => {
  if (!e.dataTransfer)
    return !1;
  if (t.state.readOnly)
    return !0;
  let n = e.dataTransfer.files;
  if (n && n.length) {
    let i = Array(n.length), r = 0, s = () => {
      ++r == n.length && Mp(t, e, i.filter((o) => o != null).join(t.state.lineBreak), !1);
    };
    for (let o = 0; o < n.length; o++) {
      let l = new FileReader();
      l.onerror = s, l.onload = () => {
        /[\x00-\x08\x0e-\x1f]{2}/.test(l.result) || (i[o] = l.result), s();
      }, l.readAsText(n[o]);
    }
    return !0;
  } else {
    let i = e.dataTransfer.getData("Text");
    if (i)
      return Mp(t, e, i, !0), !0;
  }
  return !1;
};
zn.paste = (t, e) => {
  if (t.state.readOnly)
    return !0;
  t.observer.flush();
  let n = j0 ? null : e.clipboardData;
  return n ? (K0(t, n.getData("text/plain") || n.getData("text/uri-list")), !0) : (tD(t), !1);
};
function oD(t, e) {
  let n = t.dom.parentNode;
  if (!n)
    return;
  let i = n.appendChild(document.createElement("textarea"));
  i.style.cssText = "position: fixed; left: -10000px; top: 10px", i.value = e, i.focus(), i.selectionEnd = e.length, i.selectionStart = 0, setTimeout(() => {
    i.remove(), t.focus();
  }, 50);
}
function lD(t) {
  let e = [], n = [], i = !1;
  for (let r of t.selection.ranges)
    r.empty || (e.push(t.sliceDoc(r.from, r.to)), n.push(r));
  if (!e.length) {
    let r = -1;
    for (let { from: s } of t.selection.ranges) {
      let o = t.doc.lineAt(s);
      o.number > r && (e.push(o.text), n.push({ from: o.from, to: Math.min(t.doc.length, o.to + 1) })), r = o.number;
    }
    i = !0;
  }
  return { text: Ea(t, Nf, e.join(t.lineBreak)), ranges: n, linewise: i };
}
let hu = null;
zn.copy = zn.cut = (t, e) => {
  let { text: n, ranges: i, linewise: r } = lD(t.state);
  if (!n && !r)
    return !1;
  hu = r ? n : null, e.type == "cut" && !t.state.readOnly && t.dispatch({
    changes: i,
    scrollIntoView: !0,
    userEvent: "delete.cut"
  });
  let s = j0 ? null : e.clipboardData;
  return s ? (s.clearData(), s.setData("text/plain", n), !0) : (oD(t, n), !1);
};
const q0 = /* @__PURE__ */ hr.define();
function J0(t, e) {
  let n = [];
  for (let i of t.facet(I0)) {
    let r = i(t, e);
    r && n.push(r);
  }
  return n ? t.update({ effects: n, annotations: q0.of(!0) }) : null;
}
function X0(t) {
  setTimeout(() => {
    let e = t.hasFocus;
    if (e != t.inputState.notifiedFocused) {
      let n = J0(t.state, e);
      n ? t.dispatch(n) : t.update([]);
    }
  }, 10);
}
In.focus = (t) => {
  t.inputState.lastFocusTime = Date.now(), !t.scrollDOM.scrollTop && (t.inputState.lastScrollTop || t.inputState.lastScrollLeft) && (t.scrollDOM.scrollTop = t.inputState.lastScrollTop, t.scrollDOM.scrollLeft = t.inputState.lastScrollLeft), X0(t);
};
In.blur = (t) => {
  t.observer.clearSelectionRange(), X0(t);
};
In.compositionstart = In.compositionupdate = (t) => {
  t.observer.editContext || (t.inputState.compositionFirstChange == null && (t.inputState.compositionFirstChange = !0), t.inputState.composing < 0 && (t.inputState.composing = 0));
};
In.compositionend = (t) => {
  t.observer.editContext || (t.inputState.composing = -1, t.inputState.compositionEndedAt = Date.now(), t.inputState.compositionPendingKey = !0, t.inputState.compositionPendingChange = t.observer.pendingRecords().length > 0, t.inputState.compositionFirstChange = null, le.chrome && le.android ? t.observer.flushSoon() : t.inputState.compositionPendingChange ? Promise.resolve().then(() => t.observer.flush()) : setTimeout(() => {
    t.inputState.composing < 0 && t.docView.hasComposition && t.update([]);
  }, 50));
};
In.contextmenu = (t) => {
  t.inputState.lastContextMenu = Date.now();
};
zn.beforeinput = (t, e) => {
  var n, i;
  if (e.inputType == "insertReplacementText" && t.observer.editContext) {
    let s = (n = e.dataTransfer) === null || n === void 0 ? void 0 : n.getData("text/plain"), o = e.getTargetRanges();
    if (s && o.length) {
      let l = o[0], a = t.posAtDOM(l.startContainer, l.startOffset), c = t.posAtDOM(l.endContainer, l.endOffset);
      return Bf(t, { from: a, to: c, insert: t.state.toText(s) }, null), !0;
    }
  }
  let r;
  if (le.chrome && le.android && (r = G0.find((s) => s.inputType == e.inputType)) && (t.observer.delayAndroidKey(r.key, r.keyCode), r.key == "Backspace" || r.key == "Delete")) {
    let s = ((i = window.visualViewport) === null || i === void 0 ? void 0 : i.height) || 0;
    setTimeout(() => {
      var o;
      (((o = window.visualViewport) === null || o === void 0 ? void 0 : o.height) || 0) > s + 10 && t.hasFocus && (t.contentDOM.blur(), t.focus());
    }, 100);
  }
  return le.ios && e.inputType == "deleteContentForward" && t.observer.flushSoon(), le.safari && e.inputType == "insertText" && t.inputState.composing >= 0 && setTimeout(() => In.compositionend(t, e), 20), !1;
};
const Lp = /* @__PURE__ */ new Set();
function aD(t) {
  Lp.has(t) || (Lp.add(t), t.addEventListener("copy", () => {
  }), t.addEventListener("cut", () => {
  }));
}
const Ip = ["pre-wrap", "normal", "pre-line", "break-spaces"];
let fs = !1;
function Pp() {
  fs = !1;
}
class cD {
  constructor(e) {
    this.lineWrapping = e, this.doc = De.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30;
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
    return Ip.indexOf(e) > -1 != this.lineWrapping;
  }
  mustRefreshForHeights(e) {
    let n = !1;
    for (let i = 0; i < e.length; i++) {
      let r = e[i];
      r < 0 ? i++ : this.heightSamples[Math.floor(r * 10)] || (n = !0, this.heightSamples[Math.floor(r * 10)] = !0);
    }
    return n;
  }
  refresh(e, n, i, r, s, o) {
    let l = Ip.indexOf(e) > -1, a = Math.round(n) != Math.round(this.lineHeight) || this.lineWrapping != l;
    if (this.lineWrapping = l, this.lineHeight = n, this.charWidth = i, this.textHeight = r, this.lineLength = s, a) {
      this.heightSamples = {};
      for (let c = 0; c < o.length; c++) {
        let u = o[c];
        u < 0 ? c++ : this.heightSamples[Math.floor(u * 10)] = !0;
      }
    }
    return a;
  }
}
class uD {
  constructor(e, n) {
    this.from = e, this.heights = n, this.index = 0;
  }
  get more() {
    return this.index < this.heights.length;
  }
}
class Qn {
  /**
  @internal
  */
  constructor(e, n, i, r, s) {
    this.from = e, this.length = n, this.top = i, this.height = r, this._content = s;
  }
  /**
  The type of element this is. When querying lines, this may be
  an array of all the blocks that make up the line.
  */
  get type() {
    return typeof this._content == "number" ? En.Text : Array.isArray(this._content) ? this._content : this._content.type;
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
    return this._content instanceof or ? this._content.widget : null;
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
    return new Qn(this.from, this.length + e.length, this.top, this.height + e.height, n);
  }
}
var Xe = /* @__PURE__ */ function(t) {
  return t[t.ByPos = 0] = "ByPos", t[t.ByHeight = 1] = "ByHeight", t[t.ByPosNoHeight = 2] = "ByPosNoHeight", t;
}(Xe || (Xe = {}));
const Sl = 1e-3;
class rn {
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
    this.height != e && (Math.abs(this.height - e) > Sl && (fs = !0), this.height = e);
  }
  // Base case is to replace a leaf node, which simply builds a tree
  // from the new nodes and returns that (HeightMapBranch and
  // HeightMapGap override this to actually use from/to)
  replace(e, n, i) {
    return rn.of(i);
  }
  // Again, these are base cases, and are overridden for branch and gap nodes.
  decomposeLeft(e, n) {
    n.push(this);
  }
  decomposeRight(e, n) {
    n.push(this);
  }
  applyChanges(e, n, i, r) {
    let s = this, o = i.doc;
    for (let l = r.length - 1; l >= 0; l--) {
      let { fromA: a, toA: c, fromB: u, toB: f } = r[l], d = s.lineAt(a, Xe.ByPosNoHeight, i.setDoc(n), 0, 0), h = d.to >= c ? d : s.lineAt(c, Xe.ByPosNoHeight, i, 0, 0);
      for (f += h.to - c, c = h.to; l > 0 && d.from <= r[l - 1].toA; )
        a = r[l - 1].fromA, u = r[l - 1].fromB, l--, a < d.from && (d = s.lineAt(a, Xe.ByPosNoHeight, i, 0, 0));
      u += d.from - a, a = d.from;
      let p = Vf.build(i.setDoc(o), e, u, f);
      s = Gl(s, s.replace(a, c, p));
    }
    return s.updateHeight(i, 0);
  }
  static empty() {
    return new pn(0, 0);
  }
  // nodes uses null values to indicate the position of line breaks.
  // There are never line breaks at the start or end of the array, or
  // two line breaks next to each other, and the array isn't allowed
  // to be empty (same restrictions as return value from the builder).
  static of(e) {
    if (e.length == 1)
      return e[0];
    let n = 0, i = e.length, r = 0, s = 0;
    for (; ; )
      if (n == i)
        if (r > s * 2) {
          let l = e[n - 1];
          l.break ? e.splice(--n, 1, l.left, null, l.right) : e.splice(--n, 1, l.left, l.right), i += 1 + l.break, r -= l.size;
        } else if (s > r * 2) {
          let l = e[i];
          l.break ? e.splice(i, 1, l.left, null, l.right) : e.splice(i, 1, l.left, l.right), i += 2 + l.break, s -= l.size;
        } else
          break;
      else if (r < s) {
        let l = e[n++];
        l && (r += l.size);
      } else {
        let l = e[--i];
        l && (s += l.size);
      }
    let o = 0;
    return e[n - 1] == null ? (o = 1, n--) : e[n] == null && (o = 1, i++), new fD(rn.of(e.slice(0, n)), o, rn.of(e.slice(i)));
  }
}
function Gl(t, e) {
  return t == e ? t : (t.constructor != e.constructor && (fs = !0), e);
}
rn.prototype.size = 1;
class Z0 extends rn {
  constructor(e, n, i) {
    super(e, n), this.deco = i;
  }
  blockAt(e, n, i, r) {
    return new Qn(r, this.length, i, this.height, this.deco || 0);
  }
  lineAt(e, n, i, r, s) {
    return this.blockAt(0, i, r, s);
  }
  forEachLine(e, n, i, r, s, o) {
    e <= s + this.length && n >= s && o(this.blockAt(0, i, r, s));
  }
  updateHeight(e, n = 0, i = !1, r) {
    return r && r.from <= n && r.more && this.setHeight(r.heights[r.index++]), this.outdated = !1, this;
  }
  toString() {
    return `block(${this.length})`;
  }
}
class pn extends Z0 {
  constructor(e, n) {
    super(e, n, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
  }
  blockAt(e, n, i, r) {
    return new Qn(r, this.length, i, this.height, this.breaks);
  }
  replace(e, n, i) {
    let r = i[0];
    return i.length == 1 && (r instanceof pn || r instanceof Rt && r.flags & 4) && Math.abs(this.length - r.length) < 10 ? (r instanceof Rt ? r = new pn(r.length, this.height) : r.height = this.height, this.outdated || (r.outdated = !1), r) : rn.of(i);
  }
  updateHeight(e, n = 0, i = !1, r) {
    return r && r.from <= n && r.more ? this.setHeight(r.heights[r.index++]) : (i || this.outdated) && this.setHeight(Math.max(this.widgetHeight, e.heightForLine(this.length - this.collapsed)) + this.breaks * e.lineHeight), this.outdated = !1, this;
  }
  toString() {
    return `line(${this.length}${this.collapsed ? -this.collapsed : ""}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
  }
}
class Rt extends rn {
  constructor(e) {
    super(e, 0);
  }
  heightMetrics(e, n) {
    let i = e.doc.lineAt(n).number, r = e.doc.lineAt(n + this.length).number, s = r - i + 1, o, l = 0;
    if (e.lineWrapping) {
      let a = Math.min(this.height, e.lineHeight * s);
      o = a / s, this.length > s + 1 && (l = (this.height - a) / (this.length - s - 1));
    } else
      o = this.height / s;
    return { firstLine: i, lastLine: r, perLine: o, perChar: l };
  }
  blockAt(e, n, i, r) {
    let { firstLine: s, lastLine: o, perLine: l, perChar: a } = this.heightMetrics(n, r);
    if (n.lineWrapping) {
      let c = r + (e < n.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (e - i) / this.height)) * this.length)), u = n.doc.lineAt(c), f = l + u.length * a, d = Math.max(i, e - f / 2);
      return new Qn(u.from, u.length, d, f, 0);
    } else {
      let c = Math.max(0, Math.min(o - s, Math.floor((e - i) / l))), { from: u, length: f } = n.doc.line(s + c);
      return new Qn(u, f, i + l * c, l, 0);
    }
  }
  lineAt(e, n, i, r, s) {
    if (n == Xe.ByHeight)
      return this.blockAt(e, i, r, s);
    if (n == Xe.ByPosNoHeight) {
      let { from: h, to: p } = i.doc.lineAt(e);
      return new Qn(h, p - h, 0, 0, 0);
    }
    let { firstLine: o, perLine: l, perChar: a } = this.heightMetrics(i, s), c = i.doc.lineAt(e), u = l + c.length * a, f = c.number - o, d = r + l * f + a * (c.from - s - f);
    return new Qn(c.from, c.length, Math.max(r, Math.min(d, r + this.height - u)), u, 0);
  }
  forEachLine(e, n, i, r, s, o) {
    e = Math.max(e, s), n = Math.min(n, s + this.length);
    let { firstLine: l, perLine: a, perChar: c } = this.heightMetrics(i, s);
    for (let u = e, f = r; u <= n; ) {
      let d = i.doc.lineAt(u);
      if (u == e) {
        let p = d.number - l;
        f += a * p + c * (e - s - p);
      }
      let h = a + c * d.length;
      o(new Qn(d.from, d.length, f, h, 0)), f += h, u = d.to + 1;
    }
  }
  replace(e, n, i) {
    let r = this.length - n;
    if (r > 0) {
      let s = i[i.length - 1];
      s instanceof Rt ? i[i.length - 1] = new Rt(s.length + r) : i.push(null, new Rt(r - 1));
    }
    if (e > 0) {
      let s = i[0];
      s instanceof Rt ? i[0] = new Rt(e + s.length) : i.unshift(new Rt(e - 1), null);
    }
    return rn.of(i);
  }
  decomposeLeft(e, n) {
    n.push(new Rt(e - 1), null);
  }
  decomposeRight(e, n) {
    n.push(null, new Rt(this.length - e - 1));
  }
  updateHeight(e, n = 0, i = !1, r) {
    let s = n + this.length;
    if (r && r.from <= n + this.length && r.more) {
      let o = [], l = Math.max(n, r.from), a = -1;
      for (r.from > n && o.push(new Rt(r.from - n - 1).updateHeight(e, n)); l <= s && r.more; ) {
        let u = e.doc.lineAt(l).length;
        o.length && o.push(null);
        let f = r.heights[r.index++];
        a == -1 ? a = f : Math.abs(f - a) >= Sl && (a = -2);
        let d = new pn(u, f);
        d.outdated = !1, o.push(d), l += u + 1;
      }
      l <= s && o.push(null, new Rt(s - l).updateHeight(e, l));
      let c = rn.of(o);
      return (a < 0 || Math.abs(c.height - this.height) >= Sl || Math.abs(a - this.heightMetrics(e, n).perLine) >= Sl) && (fs = !0), Gl(this, c);
    } else (i || this.outdated) && (this.setHeight(e.heightForGap(n, n + this.length)), this.outdated = !1);
    return this;
  }
  toString() {
    return `gap(${this.length})`;
  }
}
class fD extends rn {
  constructor(e, n, i) {
    super(e.length + n + i.length, e.height + i.height, n | (e.outdated || i.outdated ? 2 : 0)), this.left = e, this.right = i, this.size = e.size + i.size;
  }
  get break() {
    return this.flags & 1;
  }
  blockAt(e, n, i, r) {
    let s = i + this.left.height;
    return e < s ? this.left.blockAt(e, n, i, r) : this.right.blockAt(e, n, s, r + this.left.length + this.break);
  }
  lineAt(e, n, i, r, s) {
    let o = r + this.left.height, l = s + this.left.length + this.break, a = n == Xe.ByHeight ? e < o : e < l, c = a ? this.left.lineAt(e, n, i, r, s) : this.right.lineAt(e, n, i, o, l);
    if (this.break || (a ? c.to < l : c.from > l))
      return c;
    let u = n == Xe.ByPosNoHeight ? Xe.ByPosNoHeight : Xe.ByPos;
    return a ? c.join(this.right.lineAt(l, u, i, o, l)) : this.left.lineAt(l, u, i, r, s).join(c);
  }
  forEachLine(e, n, i, r, s, o) {
    let l = r + this.left.height, a = s + this.left.length + this.break;
    if (this.break)
      e < a && this.left.forEachLine(e, n, i, r, s, o), n >= a && this.right.forEachLine(e, n, i, l, a, o);
    else {
      let c = this.lineAt(a, Xe.ByPos, i, r, s);
      e < c.from && this.left.forEachLine(e, c.from - 1, i, r, s, o), c.to >= e && c.from <= n && o(c), n > c.to && this.right.forEachLine(c.to + 1, n, i, l, a, o);
    }
  }
  replace(e, n, i) {
    let r = this.left.length + this.break;
    if (n < r)
      return this.balanced(this.left.replace(e, n, i), this.right);
    if (e > this.left.length)
      return this.balanced(this.left, this.right.replace(e - r, n - r, i));
    let s = [];
    e > 0 && this.decomposeLeft(e, s);
    let o = s.length;
    for (let l of i)
      s.push(l);
    if (e > 0 && Dp(s, o - 1), n < this.length) {
      let l = s.length;
      this.decomposeRight(n, s), Dp(s, l);
    }
    return rn.of(s);
  }
  decomposeLeft(e, n) {
    let i = this.left.length;
    if (e <= i)
      return this.left.decomposeLeft(e, n);
    n.push(this.left), this.break && (i++, e >= i && n.push(null)), e > i && this.right.decomposeLeft(e - i, n);
  }
  decomposeRight(e, n) {
    let i = this.left.length, r = i + this.break;
    if (e >= r)
      return this.right.decomposeRight(e - r, n);
    e < i && this.left.decomposeRight(e, n), this.break && e < r && n.push(null), n.push(this.right);
  }
  balanced(e, n) {
    return e.size > 2 * n.size || n.size > 2 * e.size ? rn.of(this.break ? [e, null, n] : [e, n]) : (this.left = Gl(this.left, e), this.right = Gl(this.right, n), this.setHeight(e.height + n.height), this.outdated = e.outdated || n.outdated, this.size = e.size + n.size, this.length = e.length + this.break + n.length, this);
  }
  updateHeight(e, n = 0, i = !1, r) {
    let { left: s, right: o } = this, l = n + s.length + this.break, a = null;
    return r && r.from <= n + s.length && r.more ? a = s = s.updateHeight(e, n, i, r) : s.updateHeight(e, n, i), r && r.from <= l + o.length && r.more ? a = o = o.updateHeight(e, l, i, r) : o.updateHeight(e, l, i), a ? this.balanced(s, o) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
  }
  toString() {
    return this.left + (this.break ? " " : "-") + this.right;
  }
}
function Dp(t, e) {
  let n, i;
  t[e] == null && (n = t[e - 1]) instanceof Rt && (i = t[e + 1]) instanceof Rt && t.splice(e - 1, 3, new Rt(n.length + 1 + i.length));
}
const dD = 5;
class Vf {
  constructor(e, n) {
    this.pos = e, this.oracle = n, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = e;
  }
  get isCovered() {
    return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
  }
  span(e, n) {
    if (this.lineStart > -1) {
      let i = Math.min(n, this.lineEnd), r = this.nodes[this.nodes.length - 1];
      r instanceof pn ? r.length += i - this.pos : (i > this.pos || !this.isCovered) && this.nodes.push(new pn(i - this.pos, -1)), this.writtenTo = i, n > i && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
    }
    this.pos = n;
  }
  point(e, n, i) {
    if (e < n || i.heightRelevant) {
      let r = i.widget ? i.widget.estimatedHeight : 0, s = i.widget ? i.widget.lineBreaks : 0;
      r < 0 && (r = this.oracle.lineHeight);
      let o = n - e;
      i.block ? this.addBlock(new Z0(o, r, i)) : (o || s || r >= dD) && this.addLineDeco(r, s, o);
    } else n > e && this.span(e, n);
    this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
  }
  enterLine() {
    if (this.lineStart > -1)
      return;
    let { from: e, to: n } = this.oracle.doc.lineAt(this.pos);
    this.lineStart = e, this.lineEnd = n, this.writtenTo < e && ((this.writtenTo < e - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, e - 1)), this.nodes.push(null)), this.pos > e && this.nodes.push(new pn(this.pos - e, -1)), this.writtenTo = this.pos;
  }
  blankContent(e, n) {
    let i = new Rt(n - e);
    return this.oracle.doc.lineAt(e).to == n && (i.flags |= 4), i;
  }
  ensureLine() {
    this.enterLine();
    let e = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
    if (e instanceof pn)
      return e;
    let n = new pn(0, -1);
    return this.nodes.push(n), n;
  }
  addBlock(e) {
    this.enterLine();
    let n = e.deco;
    n && n.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(e), this.writtenTo = this.pos = this.pos + e.length, n && n.endSide > 0 && (this.covering = e);
  }
  addLineDeco(e, n, i) {
    let r = this.ensureLine();
    r.length += i, r.collapsed += i, r.widgetHeight = Math.max(r.widgetHeight, e), r.breaks += n, this.writtenTo = this.pos = this.pos + i;
  }
  finish(e) {
    let n = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
    this.lineStart > -1 && !(n instanceof pn) && !this.isCovered ? this.nodes.push(new pn(0, -1)) : (this.writtenTo < this.pos || n == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
    let i = e;
    for (let r of this.nodes)
      r instanceof pn && r.updateHeight(this.oracle, i), i += r ? r.length : 1;
    return this.nodes;
  }
  // Always called with a region that on both sides either stretches
  // to a line break or the end of the document.
  // The returned array uses null to indicate line breaks, but never
  // starts or ends in a line break, or has multiple line breaks next
  // to each other.
  static build(e, n, i, r) {
    let s = new Vf(i, e);
    return He.spans(n, i, r, s, 0), s.finish(i);
  }
}
function hD(t, e, n) {
  let i = new pD();
  return He.compare(t, e, n, i, 0), i.changes;
}
class pD {
  constructor() {
    this.changes = [];
  }
  compareRange() {
  }
  comparePoint(e, n, i, r) {
    (e < n || i && i.heightRelevant || r && r.heightRelevant) && bl(e, n, this.changes, 5);
  }
}
function gD(t, e) {
  let n = t.getBoundingClientRect(), i = t.ownerDocument, r = i.defaultView || window, s = Math.max(0, n.left), o = Math.min(r.innerWidth, n.right), l = Math.max(0, n.top), a = Math.min(r.innerHeight, n.bottom);
  for (let c = t.parentNode; c && c != i.body; )
    if (c.nodeType == 1) {
      let u = c, f = window.getComputedStyle(u);
      if ((u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth) && f.overflow != "visible") {
        let d = u.getBoundingClientRect();
        s = Math.max(s, d.left), o = Math.min(o, d.right), l = Math.max(l, d.top), a = Math.min(c == t.parentNode ? r.innerHeight : a, d.bottom);
      }
      c = f.position == "absolute" || f.position == "fixed" ? u.offsetParent : u.parentNode;
    } else if (c.nodeType == 11)
      c = c.host;
    else
      break;
  return {
    left: s - n.left,
    right: Math.max(s, o) - n.left,
    top: l - (n.top + e),
    bottom: Math.max(l, a) - (n.top + e)
  };
}
function mD(t) {
  let e = t.getBoundingClientRect(), n = t.ownerDocument.defaultView || window;
  return e.left < n.innerWidth && e.right > 0 && e.top < n.innerHeight && e.bottom > 0;
}
function vD(t, e) {
  let n = t.getBoundingClientRect();
  return {
    left: 0,
    right: n.right - n.left,
    top: e,
    bottom: n.bottom - (n.top + e)
  };
}
class ic {
  constructor(e, n, i, r) {
    this.from = e, this.to = n, this.size = i, this.displaySize = r;
  }
  static same(e, n) {
    if (e.length != n.length)
      return !1;
    for (let i = 0; i < e.length; i++) {
      let r = e[i], s = n[i];
      if (r.from != s.from || r.to != s.to || r.size != s.size)
        return !1;
    }
    return !0;
  }
  draw(e, n) {
    return Ht.replace({
      widget: new yD(this.displaySize * (n ? e.scaleY : e.scaleX), n)
    }).range(this.from, this.to);
  }
}
class yD extends Pf {
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
class Rp {
  constructor(e) {
    this.state = e, this.pixelViewport = { left: 0, right: window.innerWidth, top: 0, bottom: 0 }, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = Np, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = Tt.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
    let n = e.facet(Ff).some((i) => typeof i != "function" && i.class == "cm-lineWrapping");
    this.heightOracle = new cD(n), this.stateDeco = e.facet(fo).filter((i) => typeof i != "function"), this.heightMap = rn.empty().applyChanges(this.stateDeco, De.empty, this.heightOracle.setDoc(e.doc), [new Tn(0, 0, 0, e.doc.length)]);
    for (let i = 0; i < 2 && (this.viewport = this.getViewport(0, null), !!this.updateForViewport()); i++)
      ;
    this.updateViewportLines(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Ht.set(this.lineGaps.map((i) => i.draw(this, !1))), this.computeVisibleRanges();
  }
  updateForViewport() {
    let e = [this.viewport], { main: n } = this.state.selection;
    for (let i = 0; i <= 1; i++) {
      let r = i ? n.head : n.anchor;
      if (!e.some(({ from: s, to: o }) => r >= s && r <= o)) {
        let { from: s, to: o } = this.lineBlockAt(r);
        e.push(new Jo(s, o));
      }
    }
    return this.viewports = e.sort((i, r) => i.from - r.from), this.updateScaler();
  }
  updateScaler() {
    let e = this.scaler;
    return this.scaler = this.heightMap.height <= 7e6 ? Np : new Hf(this.heightOracle, this.heightMap, this.viewports), e.eq(this.scaler) ? 0 : 2;
  }
  updateViewportLines() {
    this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (e) => {
      this.viewportLines.push(Ps(e, this.scaler));
    });
  }
  update(e, n = null) {
    this.state = e.state;
    let i = this.stateDeco;
    this.stateDeco = this.state.facet(fo).filter((u) => typeof u != "function");
    let r = e.changedRanges, s = Tn.extendWithRanges(r, hD(i, this.stateDeco, e ? e.changes : kt.empty(this.state.doc.length))), o = this.heightMap.height, l = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
    Pp(), this.heightMap = this.heightMap.applyChanges(this.stateDeco, e.startState.doc, this.heightOracle.setDoc(this.state.doc), s), (this.heightMap.height != o || fs) && (e.flags |= 2), l ? (this.scrollAnchorPos = e.changes.mapPos(l.from, -1), this.scrollAnchorHeight = l.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
    let a = s.length ? this.mapViewport(this.viewport, e.changes) : this.viewport;
    (n && (n.range.head < a.from || n.range.head > a.to) || !this.viewportIsAppropriate(a)) && (a = this.getViewport(0, n));
    let c = a.from != this.viewport.from || a.to != this.viewport.to;
    this.viewport = a, e.flags |= this.updateForViewport(), (c || !e.changes.empty || e.flags & 2) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, e.changes))), e.flags |= this.computeVisibleRanges(e.changes), n && (this.scrollTarget = n), !this.mustEnforceCursorAssoc && e.selectionSet && e.view.lineWrapping && e.state.selection.main.empty && e.state.selection.main.assoc && !e.state.facet(SP) && (this.mustEnforceCursorAssoc = !0);
  }
  measure(e) {
    let n = e.contentDOM, i = window.getComputedStyle(n), r = this.heightOracle, s = i.whiteSpace;
    this.defaultTextDirection = i.direction == "rtl" ? Tt.RTL : Tt.LTR;
    let o = this.heightOracle.mustRefreshForWrapping(s), l = n.getBoundingClientRect(), a = o || this.mustMeasureContent || this.contentDOMHeight != l.height;
    this.contentDOMHeight = l.height, this.mustMeasureContent = !1;
    let c = 0, u = 0;
    if (l.width && l.height) {
      let { scaleX: S, scaleY: _ } = l0(n, l);
      (S > 5e-3 && Math.abs(this.scaleX - S) > 5e-3 || _ > 5e-3 && Math.abs(this.scaleY - _) > 5e-3) && (this.scaleX = S, this.scaleY = _, c |= 16, o = a = !0);
    }
    let f = (parseInt(i.paddingTop) || 0) * this.scaleY, d = (parseInt(i.paddingBottom) || 0) * this.scaleY;
    (this.paddingTop != f || this.paddingBottom != d) && (this.paddingTop = f, this.paddingBottom = d, c |= 18), this.editorWidth != e.scrollDOM.clientWidth && (r.lineWrapping && (a = !0), this.editorWidth = e.scrollDOM.clientWidth, c |= 16);
    let h = e.scrollDOM.scrollTop * this.scaleY;
    this.scrollTop != h && (this.scrollAnchorHeight = -1, this.scrollTop = h), this.scrolledToBottom = u0(e.scrollDOM);
    let p = (this.printing ? vD : gD)(n, this.paddingTop), v = p.top - this.pixelViewport.top, y = p.bottom - this.pixelViewport.bottom;
    this.pixelViewport = p;
    let g = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
    if (g != this.inView && (this.inView = g, g && (a = !0)), !this.inView && !this.scrollTarget && !mD(e.dom))
      return 0;
    let b = l.width;
    if ((this.contentDOMWidth != b || this.editorHeight != e.scrollDOM.clientHeight) && (this.contentDOMWidth = l.width, this.editorHeight = e.scrollDOM.clientHeight, c |= 16), a) {
      let S = e.docView.measureVisibleLineHeights(this.viewport);
      if (r.mustRefreshForHeights(S) && (o = !0), o || r.lineWrapping && Math.abs(b - this.contentDOMWidth) > r.charWidth) {
        let { lineHeight: _, charWidth: E, textHeight: C } = e.docView.measureTextSize();
        o = _ > 0 && r.refresh(s, _, E, C, b / E, S), o && (e.docView.minWidth = 0, c |= 16);
      }
      v > 0 && y > 0 ? u = Math.max(v, y) : v < 0 && y < 0 && (u = Math.min(v, y)), Pp();
      for (let _ of this.viewports) {
        let E = _.from == this.viewport.from ? S : e.docView.measureVisibleLineHeights(_);
        this.heightMap = (o ? rn.empty().applyChanges(this.stateDeco, De.empty, this.heightOracle, [new Tn(0, 0, 0, e.state.doc.length)]) : this.heightMap).updateHeight(r, 0, o, new uD(_.from, E));
      }
      fs && (c |= 2);
    }
    let k = !this.viewportIsAppropriate(this.viewport, u) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
    return k && (c & 2 && (c |= this.updateScaler()), this.viewport = this.getViewport(u, this.scrollTarget), c |= this.updateForViewport()), (c & 2 || k) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(o ? [] : this.lineGaps, e)), c |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, e.docView.enforceCursorAssoc()), c;
  }
  get visibleTop() {
    return this.scaler.fromDOM(this.pixelViewport.top);
  }
  get visibleBottom() {
    return this.scaler.fromDOM(this.pixelViewport.bottom);
  }
  getViewport(e, n) {
    let i = 0.5 - Math.max(-0.5, Math.min(0.5, e / 1e3 / 2)), r = this.heightMap, s = this.heightOracle, { visibleTop: o, visibleBottom: l } = this, a = new Jo(r.lineAt(o - i * 1e3, Xe.ByHeight, s, 0, 0).from, r.lineAt(l + (1 - i) * 1e3, Xe.ByHeight, s, 0, 0).to);
    if (n) {
      let { head: c } = n.range;
      if (c < a.from || c > a.to) {
        let u = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), f = r.lineAt(c, Xe.ByPos, s, 0, 0), d;
        n.y == "center" ? d = (f.top + f.bottom) / 2 - u / 2 : n.y == "start" || n.y == "nearest" && c < a.from ? d = f.top : d = f.bottom - u, a = new Jo(r.lineAt(d - 1e3 / 2, Xe.ByHeight, s, 0, 0).from, r.lineAt(d + u + 1e3 / 2, Xe.ByHeight, s, 0, 0).to);
      }
    }
    return a;
  }
  mapViewport(e, n) {
    let i = n.mapPos(e.from, -1), r = n.mapPos(e.to, 1);
    return new Jo(this.heightMap.lineAt(i, Xe.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(r, Xe.ByPos, this.heightOracle, 0, 0).to);
  }
  // Checks if a given viewport covers the visible part of the
  // document and not too much beyond that.
  viewportIsAppropriate({ from: e, to: n }, i = 0) {
    if (!this.inView)
      return !0;
    let { top: r } = this.heightMap.lineAt(e, Xe.ByPos, this.heightOracle, 0, 0), { bottom: s } = this.heightMap.lineAt(n, Xe.ByPos, this.heightOracle, 0, 0), { visibleTop: o, visibleBottom: l } = this;
    return (e == 0 || r <= o - Math.max(10, Math.min(
      -i,
      250
      /* VP.MaxCoverMargin */
    ))) && (n == this.state.doc.length || s >= l + Math.max(10, Math.min(
      i,
      250
      /* VP.MaxCoverMargin */
    ))) && r > o - 2 * 1e3 && s < l + 2 * 1e3;
  }
  mapLineGaps(e, n) {
    if (!e.length || n.empty)
      return e;
    let i = [];
    for (let r of e)
      n.touchesRange(r.from, r.to) || i.push(new ic(n.mapPos(r.from), n.mapPos(r.to), r.size, r.displaySize));
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
    let i = this.heightOracle.lineWrapping, r = i ? 1e4 : 2e3, s = r >> 1, o = r << 1;
    if (this.defaultTextDirection != Tt.LTR && !i)
      return [];
    let l = [], a = (u, f, d, h) => {
      if (f - u < s)
        return;
      let p = this.state.selection.main, v = [p.from];
      p.empty || v.push(p.to);
      for (let g of v)
        if (g > u && g < f) {
          a(u, g - 10, d, h), a(g + 10, f, d, h);
          return;
        }
      let y = wD(e, (g) => g.from >= d.from && g.to <= d.to && Math.abs(g.from - u) < s && Math.abs(g.to - f) < s && !v.some((b) => g.from < b && g.to > b));
      if (!y) {
        if (f < d.to && n && i && n.visibleRanges.some((k) => k.from <= f && k.to >= f)) {
          let k = n.moveToLineBoundary(ee.cursor(f), !1, !0).head;
          k > u && (f = k);
        }
        let g = this.gapSize(d, u, f, h), b = i || g < 2e6 ? g : 2e6;
        y = new ic(u, f, g, b);
      }
      l.push(y);
    }, c = (u) => {
      if (u.length < o || u.type != En.Text)
        return;
      let f = bD(u.from, u.to, this.stateDeco);
      if (f.total < o)
        return;
      let d = this.scrollTarget ? this.scrollTarget.range.head : null, h, p;
      if (i) {
        let v = r / this.heightOracle.lineLength * this.heightOracle.lineHeight, y, g;
        if (d != null) {
          let b = Zo(f, d), k = ((this.visibleBottom - this.visibleTop) / 2 + v) / u.height;
          y = b - k, g = b + k;
        } else
          y = (this.visibleTop - u.top - v) / u.height, g = (this.visibleBottom - u.top + v) / u.height;
        h = Xo(f, y), p = Xo(f, g);
      } else {
        let v = f.total * this.heightOracle.charWidth, y = r * this.heightOracle.charWidth, g = 0;
        if (v > 2e6)
          for (let E of e)
            E.from >= u.from && E.from < u.to && E.size != E.displaySize && E.from * this.heightOracle.charWidth + g < this.pixelViewport.left && (g = E.size - E.displaySize);
        let b = this.pixelViewport.left + g, k = this.pixelViewport.right + g, S, _;
        if (d != null) {
          let E = Zo(f, d), C = ((k - b) / 2 + y) / v;
          S = E - C, _ = E + C;
        } else
          S = (b - y) / v, _ = (k + y) / v;
        h = Xo(f, S), p = Xo(f, _);
      }
      h > u.from && a(u.from, h, u, f), p < u.to && a(p, u.to, u, f);
    };
    for (let u of this.viewportLines)
      Array.isArray(u.type) ? u.type.forEach(c) : c(u);
    return l;
  }
  gapSize(e, n, i, r) {
    let s = Zo(r, i) - Zo(r, n);
    return this.heightOracle.lineWrapping ? e.height * s : r.total * this.heightOracle.charWidth * s;
  }
  updateLineGaps(e) {
    ic.same(e, this.lineGaps) || (this.lineGaps = e, this.lineGapDeco = Ht.set(e.map((n) => n.draw(this, this.heightOracle.lineWrapping))));
  }
  computeVisibleRanges(e) {
    let n = this.stateDeco;
    this.lineGaps.length && (n = n.concat(this.lineGapDeco));
    let i = [];
    He.spans(n, this.viewport.from, this.viewport.to, {
      span(s, o) {
        i.push({ from: s, to: o });
      },
      point() {
      }
    }, 20);
    let r = 0;
    if (i.length != this.visibleRanges.length)
      r = 12;
    else
      for (let s = 0; s < i.length && !(r & 8); s++) {
        let o = this.visibleRanges[s], l = i[s];
        (o.from != l.from || o.to != l.to) && (r |= 4, e && e.mapPos(o.from, -1) == l.from && e.mapPos(o.to, 1) == l.to || (r |= 8));
      }
    return this.visibleRanges = i, r;
  }
  lineBlockAt(e) {
    return e >= this.viewport.from && e <= this.viewport.to && this.viewportLines.find((n) => n.from <= e && n.to >= e) || Ps(this.heightMap.lineAt(e, Xe.ByPos, this.heightOracle, 0, 0), this.scaler);
  }
  lineBlockAtHeight(e) {
    return e >= this.viewportLines[0].top && e <= this.viewportLines[this.viewportLines.length - 1].bottom && this.viewportLines.find((n) => n.top <= e && n.bottom >= e) || Ps(this.heightMap.lineAt(this.scaler.fromDOM(e), Xe.ByHeight, this.heightOracle, 0, 0), this.scaler);
  }
  scrollAnchorAt(e) {
    let n = this.lineBlockAtHeight(e + 8);
    return n.from >= this.viewport.from || this.viewportLines[0].top - e > 200 ? n : this.viewportLines[0];
  }
  elementAtHeight(e) {
    return Ps(this.heightMap.blockAt(this.scaler.fromDOM(e), this.heightOracle, 0, 0), this.scaler);
  }
  get docHeight() {
    return this.scaler.toDOM(this.heightMap.height);
  }
  get contentHeight() {
    return this.docHeight + this.paddingTop + this.paddingBottom;
  }
}
class Jo {
  constructor(e, n) {
    this.from = e, this.to = n;
  }
}
function bD(t, e, n) {
  let i = [], r = t, s = 0;
  return He.spans(n, t, e, {
    span() {
    },
    point(o, l) {
      o > r && (i.push({ from: r, to: o }), s += o - r), r = l;
    }
  }, 20), r < e && (i.push({ from: r, to: e }), s += e - r), { total: s, ranges: i };
}
function Xo({ total: t, ranges: e }, n) {
  if (n <= 0)
    return e[0].from;
  if (n >= 1)
    return e[e.length - 1].to;
  let i = Math.floor(t * n);
  for (let r = 0; ; r++) {
    let { from: s, to: o } = e[r], l = o - s;
    if (i <= l)
      return s + i;
    i -= l;
  }
}
function Zo(t, e) {
  let n = 0;
  for (let { from: i, to: r } of t.ranges) {
    if (e <= r) {
      n += e - i;
      break;
    }
    n += r - i;
  }
  return n / t.total;
}
function wD(t, e) {
  for (let n of t)
    if (e(n))
      return n;
}
const Np = {
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
class Hf {
  constructor(e, n, i) {
    let r = 0, s = 0, o = 0;
    this.viewports = i.map(({ from: l, to: a }) => {
      let c = n.lineAt(l, Xe.ByPos, e, 0, 0).top, u = n.lineAt(a, Xe.ByPos, e, 0, 0).bottom;
      return r += u - c, { from: l, to: a, top: c, bottom: u, domTop: 0, domBottom: 0 };
    }), this.scale = (7e6 - r) / (n.height - r);
    for (let l of this.viewports)
      l.domTop = o + (l.top - s) * this.scale, o = l.domBottom = l.domTop + (l.bottom - l.top), s = l.bottom;
  }
  toDOM(e) {
    for (let n = 0, i = 0, r = 0; ; n++) {
      let s = n < this.viewports.length ? this.viewports[n] : null;
      if (!s || e < s.top)
        return r + (e - i) * this.scale;
      if (e <= s.bottom)
        return s.domTop + (e - s.top);
      i = s.bottom, r = s.domBottom;
    }
  }
  fromDOM(e) {
    for (let n = 0, i = 0, r = 0; ; n++) {
      let s = n < this.viewports.length ? this.viewports[n] : null;
      if (!s || e < s.domTop)
        return i + (e - r) / this.scale;
      if (e <= s.domBottom)
        return s.top + (e - s.domTop);
      i = s.bottom, r = s.domBottom;
    }
  }
  eq(e) {
    return e instanceof Hf ? this.scale == e.scale && this.viewports.length == e.viewports.length && this.viewports.every((n, i) => n.from == e.viewports[i].from && n.to == e.viewports[i].to) : !1;
  }
}
function Ps(t, e) {
  if (e.scale == 1)
    return t;
  let n = e.toDOM(t.top), i = e.toDOM(t.bottom);
  return new Qn(t.from, t.length, n, i - n, Array.isArray(t._content) ? t._content.map((r) => Ps(r, e)) : t._content);
}
const Qo = /* @__PURE__ */ ve.define({ combine: (t) => t.join(" ") }), pu = /* @__PURE__ */ ve.define({ combine: (t) => t.indexOf(!0) > -1 }), gu = /* @__PURE__ */ rr.newName(), Q0 = /* @__PURE__ */ rr.newName(), ey = /* @__PURE__ */ rr.newName(), ty = { "&light": "." + Q0, "&dark": "." + ey };
function mu(t, e, n) {
  return new rr(e, {
    finish(i) {
      return /&/.test(i) ? i.replace(/&\w*/, (r) => {
        if (r == "&")
          return t;
        if (!n || !n[r])
          throw new RangeError(`Unsupported selector: ${r}`);
        return n[r];
      }) : t + " " + i;
    }
  });
}
const SD = /* @__PURE__ */ mu("." + gu, {
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
}, ty), CD = {
  childList: !0,
  characterData: !0,
  subtree: !0,
  attributes: !0,
  characterDataOldValue: !0
}, rc = le.ie && le.ie_version <= 11;
class kD {
  constructor(e) {
    this.view = e, this.active = !1, this.editContext = null, this.selectionRange = new rP(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = e.contentDOM, this.observer = new MutationObserver((n) => {
      for (let i of n)
        this.queue.push(i);
      (le.ie && le.ie_version <= 11 || le.ios && e.composing) && n.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), window.EditContext && e.constructor.EDIT_CONTEXT !== !1 && // Chrome <126 doesn't support inverted selections in edit context (#1392)
    !(le.chrome && le.chrome_version < 126) && (this.editContext = new ED(e), e.state.facet(ki) && (e.contentDOM.editContext = this.editContext.editContext)), rc && (this.onCharData = (n) => {
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
    let { view: i } = this, r = this.selectionRange;
    if (i.state.facet(ki) ? i.root.activeElement != this.dom : !yl(this.dom, r))
      return;
    let s = r.anchorNode && i.docView.nearest(r.anchorNode);
    if (s && s.ignoreEvent(e)) {
      n || (this.selectionChanged = !1);
      return;
    }
    (le.ie && le.ie_version <= 11 || le.android && le.chrome) && !i.state.selection.main.empty && // (Selection.isCollapsed isn't reliable on IE)
    r.focusNode && Ks(r.focusNode, r.focusOffset, r.anchorNode, r.anchorOffset) ? this.flushSoon() : this.flush(!1);
  }
  readSelectionRange() {
    let { view: e } = this, n = co(e.root);
    if (!n)
      return !1;
    let i = le.safari && e.root.nodeType == 11 && e.root.activeElement == this.dom && _D(this.view, n) || n;
    if (!i || this.selectionRange.eq(i))
      return !1;
    let r = yl(this.dom, i);
    return r && !this.selectionChanged && e.inputState.lastFocusTime > Date.now() - 200 && e.inputState.lastTouchTime < Date.now() - 300 && oP(this.dom, i) ? (this.view.inputState.lastFocusTime = 0, e.docView.updateSelection(), !1) : (this.selectionRange.setRange(i), r && (this.selectionChanged = !0), !0);
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
    this.active || (this.observer.observe(this.dom, CD), rc && this.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.active = !0);
  }
  stop() {
    this.active && (this.active = !1, this.observer.disconnect(), rc && this.dom.removeEventListener("DOMCharacterDataModified", this.onCharData));
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
      let r = () => {
        let s = this.delayedAndroidKey;
        s && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = s.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && s.force && Yr(this.dom, s.key, s.keyCode));
      };
      this.flushingAndroidKey = this.view.win.requestAnimationFrame(r);
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
    let n = -1, i = -1, r = !1;
    for (let s of e) {
      let o = this.readMutation(s);
      o && (o.typeOver && (r = !0), n == -1 ? { from: n, to: i } = o : (n = Math.min(o.from, n), i = Math.max(o.to, i)));
    }
    return { from: n, to: i, typeOver: r };
  }
  readChange() {
    let { from: e, to: n, typeOver: i } = this.processRecords(), r = this.selectionChanged && yl(this.dom, this.selectionRange);
    if (e < 0 && !r)
      return null;
    e > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
    let s = new HP(this.view, e, n, i);
    return this.view.docView.domChanged = { newSel: s.newSel ? s.newSel.main : null }, s;
  }
  // Apply pending changes, if any
  flush(e = !0) {
    if (this.delayedFlush >= 0 || this.delayedAndroidKey)
      return !1;
    e && this.readSelectionRange();
    let n = this.readChange();
    if (!n)
      return this.view.requestMeasure(), !1;
    let i = this.view.state, r = z0(this.view, n);
    return this.view.state == i && (n.domChanged || n.newSel && !n.newSel.main.eq(this.view.state.selection.main)) && this.view.update([]), r;
  }
  readMutation(e) {
    let n = this.view.docView.nearest(e.target);
    if (!n || n.ignoreMutation(e))
      return null;
    if (n.markDirty(e.type == "attributes"), e.type == "attributes" && (n.flags |= 4), e.type == "childList") {
      let i = Fp(n, e.previousSibling || e.target.previousSibling, -1), r = Fp(n, e.nextSibling || e.target.nextSibling, 1);
      return {
        from: i ? n.posAfter(i) : n.posAtStart,
        to: r ? n.posBefore(r) : n.posAtEnd,
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
    this.editContext && (this.editContext.update(e), e.startState.facet(ki) != e.state.facet(ki) && (e.view.contentDOM.editContext = e.state.facet(ki) ? this.editContext.editContext : null));
  }
  destroy() {
    var e, n, i;
    this.stop(), (e = this.intersection) === null || e === void 0 || e.disconnect(), (n = this.gapIntersection) === null || n === void 0 || n.disconnect(), (i = this.resizeScroll) === null || i === void 0 || i.disconnect();
    for (let r of this.scrollTargets)
      r.removeEventListener("scroll", this.onScroll);
    this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey), this.editContext && (this.view.contentDOM.editContext = null, this.editContext.destroy());
  }
}
function Fp(t, e, n) {
  for (; e; ) {
    let i = Ye.get(e);
    if (i && i.parent == t)
      return i;
    let r = e.parentNode;
    e = r != t.dom ? r : n > 0 ? e.nextSibling : e.previousSibling;
  }
  return null;
}
function $p(t, e) {
  let n = e.startContainer, i = e.startOffset, r = e.endContainer, s = e.endOffset, o = t.docView.domAtPos(t.state.selection.main.anchor);
  return Ks(o.node, o.offset, r, s) && ([n, i, r, s] = [r, s, n, i]), { anchorNode: n, anchorOffset: i, focusNode: r, focusOffset: s };
}
function _D(t, e) {
  if (e.getComposedRanges) {
    let r = e.getComposedRanges(t.root)[0];
    if (r)
      return $p(t, r);
  }
  let n = null;
  function i(r) {
    r.preventDefault(), r.stopImmediatePropagation(), n = r.getTargetRanges()[0];
  }
  return t.contentDOM.addEventListener("beforeinput", i, !0), t.dom.ownerDocument.execCommand("indent"), t.contentDOM.removeEventListener("beforeinput", i, !0), n ? $p(t, n) : null;
}
class ED {
  constructor(e) {
    this.from = 0, this.to = 0, this.pendingContextChange = null, this.handlers = /* @__PURE__ */ Object.create(null), this.composing = null, this.resetRange(e.state);
    let n = this.editContext = new window.EditContext({
      text: e.state.doc.sliceString(this.from, this.to),
      selectionStart: this.toContextPos(Math.max(this.from, Math.min(this.to, e.state.selection.main.anchor))),
      selectionEnd: this.toContextPos(e.state.selection.main.head)
    });
    this.handlers.textupdate = (i) => {
      let r = e.state.selection.main, { anchor: s, head: o } = r, l = this.toEditorPos(i.updateRangeStart), a = this.toEditorPos(i.updateRangeEnd);
      e.inputState.composing >= 0 && !this.composing && (this.composing = { contextBase: i.updateRangeStart, editorBase: l, drifted: !1 });
      let c = { from: l, to: a, insert: De.of(i.text.split(`
`)) };
      if (c.from == this.from && s < this.from ? c.from = s : c.to == this.to && s > this.to && (c.to = s), c.from == c.to && !c.insert.length) {
        let u = ee.single(this.toEditorPos(i.selectionStart), this.toEditorPos(i.selectionEnd));
        u.main.eq(r) || e.dispatch({ selection: u, userEvent: "select" });
        return;
      }
      if ((le.mac || le.android) && c.from == o - 1 && /^\. ?$/.test(i.text) && e.contentDOM.getAttribute("autocorrect") == "off" && (c = { from: l, to: a, insert: De.of([i.text.replace(".", " ")]) }), this.pendingContextChange = c, !e.state.readOnly) {
        let u = this.to - this.from + (c.to - c.from + c.insert.length);
        Bf(e, c, ee.single(this.toEditorPos(i.selectionStart, u), this.toEditorPos(i.selectionEnd, u)));
      }
      this.pendingContextChange && (this.revertPending(e.state), this.setSelection(e.state));
    }, this.handlers.characterboundsupdate = (i) => {
      let r = [], s = null;
      for (let o = this.toEditorPos(i.rangeStart), l = this.toEditorPos(i.rangeEnd); o < l; o++) {
        let a = e.coordsForChar(o);
        s = a && new DOMRect(a.left, a.top, a.right - a.left, a.bottom - a.top) || s || new DOMRect(), r.push(s);
      }
      n.updateCharacterBounds(i.rangeStart, r);
    }, this.handlers.textformatupdate = (i) => {
      let r = [];
      for (let s of i.getTextFormats()) {
        let o = s.underlineStyle, l = s.underlineThickness;
        if (o != "None" && l != "None") {
          let a = this.toEditorPos(s.rangeStart), c = this.toEditorPos(s.rangeEnd);
          if (a < c) {
            let u = `text-decoration: underline ${o == "Dashed" ? "dashed " : o == "Squiggle" ? "wavy " : ""}${l == "Thin" ? 1 : 2}px`;
            r.push(Ht.mark({ attributes: { style: u } }).range(a, c));
          }
        }
      }
      e.dispatch({ effects: R0.of(Ht.set(r)) });
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
      let r = co(i.root);
      r && r.rangeCount && this.editContext.updateSelectionBounds(r.getRangeAt(0).getBoundingClientRect());
    } };
  }
  applyEdits(e) {
    let n = 0, i = !1, r = this.pendingContextChange;
    return e.changes.iterChanges((s, o, l, a, c) => {
      if (i)
        return;
      let u = c.length - (o - s);
      if (r && o >= r.to)
        if (r.from == s && r.to == o && r.insert.eq(c)) {
          r = this.pendingContextChange = null, n += u, this.to += u;
          return;
        } else
          r = null, this.revertPending(e.state);
      if (s += n, o += n, o <= this.from)
        this.from += u, this.to += u;
      else if (s < this.to) {
        if (s < this.from || o > this.to || this.to - this.from + c.length > 3e4) {
          i = !0;
          return;
        }
        this.editContext.updateText(this.toContextPos(s), this.toContextPos(o), c.toString()), this.to += u;
      }
      n += u;
    }), r && !i && this.revertPending(e.state), !i;
  }
  update(e) {
    let n = this.pendingContextChange, i = e.startState.selection.main;
    this.composing && (this.composing.drifted || !e.changes.touchesRange(i.from, i.to) && e.transactions.some((r) => !r.isUserEvent("input.type") && r.changes.touchesRange(this.from, this.to))) ? (this.composing.drifted = !0, this.composing.editorBase = e.changes.mapPos(this.composing.editorBase)) : !this.applyEdits(e) || !this.rangeIsValid(e.state) ? (this.pendingContextChange = null, this.reset(e.state)) : (e.docChanged || e.selectionSet || n) && this.setSelection(e.state), (e.geometryChanged || e.docChanged || e.selectionSet) && e.view.requestMeasure(this.measureReq);
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
    let { main: n } = e.selection, i = this.toContextPos(Math.max(this.from, Math.min(this.to, n.anchor))), r = this.toContextPos(n.head);
    (this.editContext.selectionStart != i || this.editContext.selectionEnd != r) && this.editContext.updateSelection(i, r);
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
class we {
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
    this.dispatchTransactions = e.dispatchTransactions || i && ((r) => r.forEach((s) => i(s, this))) || ((r) => this.update(r)), this.dispatch = this.dispatch.bind(this), this._root = e.root || sP(e.parent) || document, this.viewState = new Rp(e.state || Ne.create(e)), e.scrollTo && e.scrollTo.is(Ko) && (this.viewState.scrollTarget = e.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Ms).map((r) => new ec(r));
    for (let r of this.plugins)
      r.update(this);
    this.observer = new kD(this), this.inputState = new jP(this), this.inputState.ensureHandlers(this.plugins), this.docView = new mp(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure(), !((n = document.fonts) === null || n === void 0) && n.ready && document.fonts.ready.then(() => this.requestMeasure());
  }
  dispatch(...e) {
    let n = e.length == 1 && e[0] instanceof Et ? e : e.length == 1 && Array.isArray(e[0]) ? e[0] : [this.state.update(...e)];
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
    let n = !1, i = !1, r, s = this.state;
    for (let d of e) {
      if (d.startState != s)
        throw new RangeError("Trying to update state with a transaction that doesn't start from the previous state.");
      s = d.state;
    }
    if (this.destroyed) {
      this.viewState.state = s;
      return;
    }
    let o = this.hasFocus, l = 0, a = null;
    e.some((d) => d.annotation(q0)) ? (this.inputState.notifiedFocused = o, l = 1) : o != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = o, a = J0(s, o), a || (l = 1));
    let c = this.observer.delayedAndroidKey, u = null;
    if (c ? (this.observer.clearDelayedAndroidKey(), u = this.observer.readChange(), (u && !this.state.doc.eq(s.doc) || !this.state.selection.eq(s.selection)) && (u = null)) : this.observer.clear(), s.facet(Ne.phrases) != this.state.facet(Ne.phrases))
      return this.setState(s);
    r = zl.create(this, s, e), r.flags |= l;
    let f = this.viewState.scrollTarget;
    try {
      this.updateState = 2;
      for (let d of e) {
        if (f && (f = f.map(d.changes)), d.scrollIntoView) {
          let { main: h } = d.state.selection;
          f = new qr(h.empty ? h : ee.cursor(h.head, h.head > h.anchor ? -1 : 1));
        }
        for (let h of d.effects)
          h.is(Ko) && (f = h.value.clip(this.state));
      }
      this.viewState.update(r, f), this.bidiCache = Ul.update(this.bidiCache, r.changes), r.empty || (this.updatePlugins(r), this.inputState.update(r)), n = this.docView.update(r), this.state.facet(Ls) != this.styleModules && this.mountStyles(), i = this.updateAttrs(), this.showAnnouncements(e), this.docView.updateSelection(n, e.some((d) => d.isUserEvent("select.pointer")));
    } finally {
      this.updateState = 0;
    }
    if (r.startState.facet(Qo) != r.state.facet(Qo) && (this.viewState.mustMeasureContent = !0), (n || i || f || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), n && this.docViewUpdate(), !r.empty)
      for (let d of this.state.facet(fu))
        try {
          d(r);
        } catch (h) {
          ni(this.state, h, "update listener");
        }
    (a || u) && Promise.resolve().then(() => {
      a && this.state == a.startState && this.dispatch(a), u && !z0(this, u) && c.force && Yr(this.contentDOM, c.key, c.keyCode);
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
      this.viewState = new Rp(e), this.plugins = e.facet(Ms).map((i) => new ec(i)), this.pluginMap.clear();
      for (let i of this.plugins)
        i.update(this);
      this.docView.destroy(), this.docView = new mp(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
    } finally {
      this.updateState = 0;
    }
    n && this.focus(), this.requestMeasure();
  }
  updatePlugins(e) {
    let n = e.startState.facet(Ms), i = e.state.facet(Ms);
    if (n != i) {
      let r = [];
      for (let s of i) {
        let o = n.indexOf(s);
        if (o < 0)
          r.push(new ec(s));
        else {
          let l = this.plugins[o];
          l.mustUpdate = e, r.push(l);
        }
      }
      for (let s of this.plugins)
        s.mustUpdate != e && s.destroy(this);
      this.plugins = r, this.pluginMap.clear();
    } else
      for (let r of this.plugins)
        r.mustUpdate = e;
    for (let r = 0; r < this.plugins.length; r++)
      this.plugins[r].update(this);
    n != i && this.inputState.ensureHandlers(this.plugins);
  }
  docViewUpdate() {
    for (let e of this.plugins) {
      let n = e.value;
      if (n && n.docViewUpdate)
        try {
          n.docViewUpdate(this);
        } catch (i) {
          ni(this.state, i, "doc view update listener");
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
    let n = null, i = this.scrollDOM, r = i.scrollTop * this.scaleY, { scrollAnchorPos: s, scrollAnchorHeight: o } = this.viewState;
    Math.abs(r - this.viewState.scrollTop) > 1 && (o = -1), this.viewState.scrollAnchorHeight = -1;
    try {
      for (let l = 0; ; l++) {
        if (o < 0)
          if (u0(i))
            s = -1, o = this.viewState.heightMap.height;
          else {
            let h = this.viewState.scrollAnchorAt(r);
            s = h.from, o = h.top;
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
          } catch (p) {
            return ni(this.state, p), Bp;
          }
        }), f = zl.create(this, this.state, []), d = !1;
        f.flags |= a, n ? n.flags |= a : n = f, this.updateState = 2, f.empty || (this.updatePlugins(f), this.inputState.update(f), this.updateAttrs(), d = this.docView.update(f), d && this.docViewUpdate());
        for (let h = 0; h < c.length; h++)
          if (u[h] != Bp)
            try {
              let p = c[h];
              p.write && p.write(u[h], this);
            } catch (p) {
              ni(this.state, p);
            }
        if (d && this.docView.updateSelection(!0), !f.viewportChanged && this.measureRequests.length == 0) {
          if (this.viewState.editorHeight)
            if (this.viewState.scrollTarget) {
              this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, o = -1;
              continue;
            } else {
              let p = (s < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(s).top) - o;
              if (p > 1 || p < -1) {
                r = r + p, i.scrollTop = r / this.scaleY, o = -1;
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
      for (let l of this.state.facet(fu))
        l(n);
  }
  /**
  Get the CSS classes for the currently active editor themes.
  */
  get themeClasses() {
    return gu + " " + (this.state.facet(pu) ? ey : Q0) + " " + this.state.facet(Qo);
  }
  updateAttrs() {
    let e = Vp(this, N0, {
      class: "cm-editor" + (this.hasFocus ? " cm-focused " : " ") + this.themeClasses
    }), n = {
      spellcheck: "false",
      autocorrect: "off",
      autocapitalize: "off",
      writingsuggestions: "false",
      translate: "no",
      contenteditable: this.state.facet(ki) ? "true" : "false",
      class: "cm-content",
      style: `${le.tabSize}: ${this.state.tabSize}`,
      role: "textbox",
      "aria-multiline": "true"
    };
    this.state.readOnly && (n["aria-readonly"] = "true"), Vp(this, Ff, n);
    let i = this.observer.ignore(() => {
      let r = ou(this.contentDOM, this.contentAttrs, n), s = ou(this.dom, this.editorAttrs, e);
      return r || s;
    });
    return this.editorAttrs = e, this.contentAttrs = n, i;
  }
  showAnnouncements(e) {
    let n = !0;
    for (let i of e)
      for (let r of i.effects)
        if (r.is(we.announce)) {
          n && (this.announceDOM.textContent = ""), n = !1;
          let s = this.announceDOM.appendChild(document.createElement("div"));
          s.textContent = r.value;
        }
  }
  mountStyles() {
    this.styleModules = this.state.facet(Ls);
    let e = this.state.facet(we.cspNonce);
    rr.mount(this.root, this.styleModules.concat(SD).reverse(), e ? { nonce: e } : void 0);
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
    return nc(this, e, Sp(this, e, n, i));
  }
  /**
  Move a cursor position across the next group of either
  [letters](https://codemirror.net/6/docs/ref/#state.EditorState.charCategorizer) or non-letter
  non-whitespace characters.
  */
  moveByGroup(e, n) {
    return nc(this, e, Sp(this, e, n, (i) => FP(this, e.head, i)));
  }
  /**
  Get the cursor position visually at the start or end of a line.
  Note that this may differ from the _logical_ position at its
  start or end (which is simply at `line.from`/`line.to`) if text
  at the start or end goes against the line's base text direction.
  */
  visualLineSide(e, n) {
    let i = this.bidiSpans(e), r = this.textDirectionAt(e.from), s = i[n ? i.length - 1 : 0];
    return ee.cursor(s.side(n, r) + e.from, s.forward(!n, r) ? 1 : -1);
  }
  /**
  Move to the next line boundary in the given direction. If
  `includeWrap` is true, line wrapping is on, and there is a
  further wrap point on the current line, the wrap point will be
  returned. Otherwise this function will return the start or end
  of the line.
  */
  moveToLineBoundary(e, n, i = !0) {
    return NP(this, e, n, i);
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
    return nc(this, e, $P(this, e, n, i));
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
    return this.readMeasured(), W0(this, e, n);
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
    let r = this.state.doc.lineAt(e), s = this.bidiSpans(r), o = s[Xi.find(s, e - r.from, -1, n)];
    return ka(i, o.dir == Tt.LTR == n > 0);
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
    return !this.state.facet(P0) || e < this.viewport.from || e > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(e));
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
    if (e.length > TD)
      return E0(e.length);
    let n = this.textDirectionAt(e.from), i;
    for (let s of this.bidiCache)
      if (s.from == e.from && s.dir == n && (s.fresh || _0(s.isolates, i = gp(this, e))))
        return s.order;
    i || (i = gp(this, e));
    let r = yP(e.text, n, i);
    return this.bidiCache.push(new Ul(e.from, e.to, n, i, !0, r)), r;
  }
  /**
  Check whether the editor has focus.
  */
  get hasFocus() {
    var e;
    return (this.dom.ownerDocument.hasFocus() || le.safari && ((e = this.inputState) === null || e === void 0 ? void 0 : e.lastContextMenu) > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
  }
  /**
  Put focus on the editor.
  */
  focus() {
    this.observer.ignore(() => {
      a0(this.contentDOM), this.docView.updateSelection();
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
    return Ko.of(new qr(typeof e == "number" ? ee.cursor(e) : e, n.y, n.x, n.yMargin, n.xMargin));
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
    return Ko.of(new qr(ee.cursor(i.from), "start", "start", i.top - e, n, !0));
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
    return lr.define(() => ({}), { eventHandlers: e });
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
    return lr.define(() => ({}), { eventObservers: e });
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
    let i = rr.newName(), r = [Qo.of(i), Ls.of(mu(`.${i}`, e))];
    return n && n.dark && r.push(pu.of(!0)), r;
  }
  /**
  Create an extension that adds styles to the base theme. Like
  with [`theme`](https://codemirror.net/6/docs/ref/#view.EditorView^theme), use `&` to indicate the
  place of the editor wrapper element when directly targeting
  that. You can also use `&dark` or `&light` instead to only
  target editors with a dark or light theme.
  */
  static baseTheme(e) {
    return Mf.lowest(Ls.of(mu("." + gu, e, ty)));
  }
  /**
  Retrieve an editor view instance from the view's DOM
  representation.
  */
  static findFromDOM(e) {
    var n;
    let i = e.querySelector(".cm-content"), r = i && Ye.get(i) || Ye.get(e);
    return ((n = r?.rootView) === null || n === void 0 ? void 0 : n.view) || null;
  }
}
we.styleModule = Ls;
we.inputHandler = L0;
we.clipboardInputFilter = Rf;
we.clipboardOutputFilter = Nf;
we.scrollHandler = D0;
we.focusChangeEffect = I0;
we.perLineTextDirection = P0;
we.exceptionSink = M0;
we.updateListener = fu;
we.editable = ki;
we.mouseSelectionStyle = x0;
we.dragMovesSelection = O0;
we.clickAddsSelectionRange = A0;
we.decorations = fo;
we.outerDecorations = F0;
we.atomicRanges = $f;
we.bidiIsolatedRanges = $0;
we.scrollMargins = B0;
we.darkTheme = pu;
we.cspNonce = /* @__PURE__ */ ve.define({ combine: (t) => t.length ? t[0] : "" });
we.contentAttributes = Ff;
we.editorAttributes = N0;
we.lineWrapping = /* @__PURE__ */ we.contentAttributes.of({ class: "cm-lineWrapping" });
we.announce = /* @__PURE__ */ mt.define();
const TD = 4096, Bp = {};
class Ul {
  constructor(e, n, i, r, s, o) {
    this.from = e, this.to = n, this.dir = i, this.isolates = r, this.fresh = s, this.order = o;
  }
  static update(e, n) {
    if (n.empty && !e.some((s) => s.fresh))
      return e;
    let i = [], r = e.length ? e[e.length - 1].dir : Tt.LTR;
    for (let s = Math.max(0, e.length - 10); s < e.length; s++) {
      let o = e[s];
      o.dir == r && !n.touchesRange(o.from, o.to) && i.push(new Ul(n.mapPos(o.from, 1), n.mapPos(o.to, -1), o.dir, o.isolates, !1, o.order));
    }
    return i;
  }
}
function Vp(t, e, n) {
  for (let i = t.state.facet(e), r = i.length - 1; r >= 0; r--) {
    let s = i[r], o = typeof s == "function" ? s(t) : s;
    o && su(o, n);
  }
  return n;
}
const AD = le.mac ? "mac" : le.windows ? "win" : le.linux ? "linux" : "key";
function OD(t, e) {
  const n = t.split(/-(?!$)/);
  let i = n[n.length - 1];
  i == "Space" && (i = " ");
  let r, s, o, l;
  for (let a = 0; a < n.length - 1; ++a) {
    const c = n[a];
    if (/^(cmd|meta|m)$/i.test(c))
      l = !0;
    else if (/^a(lt)?$/i.test(c))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      s = !0;
    else if (/^s(hift)?$/i.test(c))
      o = !0;
    else if (/^mod$/i.test(c))
      e == "mac" ? l = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + c);
  }
  return r && (i = "Alt-" + i), s && (i = "Ctrl-" + i), l && (i = "Meta-" + i), o && (i = "Shift-" + i), i;
}
function el(t, e, n) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n !== !1 && e.shiftKey && (t = "Shift-" + t), t;
}
const xD = /* @__PURE__ */ Mf.default(/* @__PURE__ */ we.domEventHandlers({
  keydown(t, e) {
    return PD(MD(e.state), t, e, "editor");
  }
})), ny = /* @__PURE__ */ ve.define({ enables: xD }), Hp = /* @__PURE__ */ new WeakMap();
function MD(t) {
  let e = t.facet(ny), n = Hp.get(e);
  return n || Hp.set(e, n = ID(e.reduce((i, r) => i.concat(r), []))), n;
}
let Ki = null;
const LD = 4e3;
function ID(t, e = AD) {
  let n = /* @__PURE__ */ Object.create(null), i = /* @__PURE__ */ Object.create(null), r = (o, l) => {
    let a = i[o];
    if (a == null)
      i[o] = l;
    else if (a != l)
      throw new Error("Key binding " + o + " is used both as a regular binding and as a multi-stroke prefix");
  }, s = (o, l, a, c, u) => {
    var f, d;
    let h = n[o] || (n[o] = /* @__PURE__ */ Object.create(null)), p = l.split(/ (?!$)/).map((g) => OD(g, e));
    for (let g = 1; g < p.length; g++) {
      let b = p.slice(0, g).join(" ");
      r(b, !0), h[b] || (h[b] = {
        preventDefault: !0,
        stopPropagation: !1,
        run: [(k) => {
          let S = Ki = { view: k, prefix: b, scope: o };
          return setTimeout(() => {
            Ki == S && (Ki = null);
          }, LD), !0;
        }]
      });
    }
    let v = p.join(" ");
    r(v, !1);
    let y = h[v] || (h[v] = {
      preventDefault: !1,
      stopPropagation: !1,
      run: ((d = (f = h._any) === null || f === void 0 ? void 0 : f.run) === null || d === void 0 ? void 0 : d.slice()) || []
    });
    a && y.run.push(a), c && (y.preventDefault = !0), u && (y.stopPropagation = !0);
  };
  for (let o of t) {
    let l = o.scope ? o.scope.split(" ") : ["editor"];
    if (o.any)
      for (let c of l) {
        let u = n[c] || (n[c] = /* @__PURE__ */ Object.create(null));
        u._any || (u._any = { preventDefault: !1, stopPropagation: !1, run: [] });
        let { any: f } = o;
        for (let d in u)
          u[d].run.push((h) => f(h, vu));
      }
    let a = o[e] || o.key;
    if (a)
      for (let c of l)
        s(c, a, o.run, o.preventDefault, o.stopPropagation), o.shift && s(c, "Shift-" + a, o.shift, o.preventDefault, o.stopPropagation);
  }
  return n;
}
let vu = null;
function PD(t, e, n, i) {
  vu = e;
  let r = eP(e), s = NI(r, 0), o = FI(s) == r.length && r != " ", l = "", a = !1, c = !1, u = !1;
  Ki && Ki.view == n && Ki.scope == i && (l = Ki.prefix + " ", U0.indexOf(e.keyCode) < 0 && (c = !0, Ki = null));
  let f = /* @__PURE__ */ new Set(), d = (y) => {
    if (y) {
      for (let g of y.run)
        if (!f.has(g) && (f.add(g), g(n)))
          return y.stopPropagation && (u = !0), !0;
      y.preventDefault && (y.stopPropagation && (u = !0), c = !0);
    }
    return !1;
  }, h = t[i], p, v;
  return h && (d(h[l + el(r, e, !o)]) ? a = !0 : o && (e.altKey || e.metaKey || e.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
  !(le.windows && e.ctrlKey && e.altKey) && (p = sr[e.keyCode]) && p != r ? (d(h[l + el(p, e, !0)]) || e.shiftKey && (v = ao[e.keyCode]) != r && v != p && d(h[l + el(v, e, !1)])) && (a = !0) : o && e.shiftKey && d(h[l + el(r, e, !0)]) && (a = !0), !a && d(h._any) && (a = !0)), c && (a = !0), a && u && e.stopPropagation(), vu = null, a;
}
const DD = !(le.ios && le.webkit && le.webkit_version < 534), Wp = {
  ".cm-line": {},
  ".cm-content": {}
};
DD && (Wp[".cm-line"].caretColor = Wp[".cm-content"].caretColor = "transparent !important");
class Mr extends as {
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
Mr.prototype.elementClass = "";
Mr.prototype.toDOM = void 0;
Mr.prototype.mapMode = gn.TrackBefore;
Mr.prototype.startSide = Mr.prototype.endSide = -1;
Mr.prototype.point = !0;
const sc = /* @__PURE__ */ ve.define(), RD = /* @__PURE__ */ ve.define(), Cl = /* @__PURE__ */ ve.define(), zp = /* @__PURE__ */ ve.define({
  combine: (t) => t.some((e) => e)
});
function ND(t) {
  return [
    FD
  ];
}
const FD = /* @__PURE__ */ lr.fromClass(class {
  constructor(t) {
    this.view = t, this.prevViewport = t.viewport, this.dom = document.createElement("div"), this.dom.className = "cm-gutters", this.dom.setAttribute("aria-hidden", "true"), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px", this.gutters = t.state.facet(Cl).map((e) => new Up(t, e));
    for (let e of this.gutters)
      this.dom.appendChild(e.dom);
    this.fixed = !t.state.facet(zp), this.fixed && (this.dom.style.position = "sticky"), this.syncGutters(!1), t.scrollDOM.insertBefore(this.dom, t.contentDOM);
  }
  update(t) {
    if (this.updateGutters(t)) {
      let e = this.prevViewport, n = t.view.viewport, i = Math.min(e.to, n.to) - Math.max(e.from, n.from);
      this.syncGutters(i < (n.to - n.from) * 0.8);
    }
    t.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + "px"), this.view.state.facet(zp) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? "sticky" : ""), this.prevViewport = t.view.viewport;
  }
  syncGutters(t) {
    let e = this.dom.nextSibling;
    t && this.dom.remove();
    let n = He.iter(this.view.state.facet(sc), this.view.viewport.from), i = [], r = this.gutters.map((s) => new $D(s, this.view.viewport, -this.view.documentPadding.top));
    for (let s of this.view.viewportLineBlocks)
      if (i.length && (i = []), Array.isArray(s.type)) {
        let o = !0;
        for (let l of s.type)
          if (l.type == En.Text && o) {
            yu(n, i, l.from);
            for (let a of r)
              a.line(this.view, l, i);
            o = !1;
          } else if (l.widget)
            for (let a of r)
              a.widget(this.view, l);
      } else if (s.type == En.Text) {
        yu(n, i, s.from);
        for (let o of r)
          o.line(this.view, s, i);
      } else if (s.widget)
        for (let o of r)
          o.widget(this.view, s);
    for (let s of r)
      s.finish();
    t && this.view.scrollDOM.insertBefore(this.dom, e);
  }
  updateGutters(t) {
    let e = t.startState.facet(Cl), n = t.state.facet(Cl), i = t.docChanged || t.heightChanged || t.viewportChanged || !He.eq(t.startState.facet(sc), t.state.facet(sc), t.view.viewport.from, t.view.viewport.to);
    if (e == n)
      for (let r of this.gutters)
        r.update(t) && (i = !0);
    else {
      i = !0;
      let r = [];
      for (let s of n) {
        let o = e.indexOf(s);
        o < 0 ? r.push(new Up(this.view, s)) : (this.gutters[o].update(t), r.push(this.gutters[o]));
      }
      for (let s of this.gutters)
        s.dom.remove(), r.indexOf(s) < 0 && s.destroy();
      for (let s of r)
        this.dom.appendChild(s.dom);
      this.gutters = r;
    }
    return i;
  }
  destroy() {
    for (let t of this.gutters)
      t.destroy();
    this.dom.remove();
  }
}, {
  provide: (t) => we.scrollMargins.of((e) => {
    let n = e.plugin(t);
    return !n || n.gutters.length == 0 || !n.fixed ? null : e.textDirection == Tt.LTR ? { left: n.dom.offsetWidth * e.scaleX } : { right: n.dom.offsetWidth * e.scaleX };
  })
});
function Gp(t) {
  return Array.isArray(t) ? t : [t];
}
function yu(t, e, n) {
  for (; t.value && t.from <= n; )
    t.from == n && e.push(t.value), t.next();
}
class $D {
  constructor(e, n, i) {
    this.gutter = e, this.height = i, this.i = 0, this.cursor = He.iter(e.markers, n.from);
  }
  addElement(e, n, i) {
    let { gutter: r } = this, s = (n.top - this.height) / e.scaleY, o = n.height / e.scaleY;
    if (this.i == r.elements.length) {
      let l = new iy(e, o, s, i);
      r.elements.push(l), r.dom.appendChild(l.dom);
    } else
      r.elements[this.i].update(e, o, s, i);
    this.height = n.bottom, this.i++;
  }
  line(e, n, i) {
    let r = [];
    yu(this.cursor, r, n.from), i.length && (r = r.concat(i));
    let s = this.gutter.config.lineMarker(e, n, r);
    s && r.unshift(s);
    let o = this.gutter;
    r.length == 0 && !o.config.renderEmptyElements || this.addElement(e, n, r);
  }
  widget(e, n) {
    let i = this.gutter.config.widgetMarker(e, n.widget, n), r = i ? [i] : null;
    for (let s of e.state.facet(RD)) {
      let o = s(e, n.widget, n);
      o && (r || (r = [])).push(o);
    }
    r && this.addElement(e, n, r);
  }
  finish() {
    let e = this.gutter;
    for (; e.elements.length > this.i; ) {
      let n = e.elements.pop();
      e.dom.removeChild(n.dom), n.destroy();
    }
  }
}
class Up {
  constructor(e, n) {
    this.view = e, this.config = n, this.elements = [], this.spacer = null, this.dom = document.createElement("div"), this.dom.className = "cm-gutter" + (this.config.class ? " " + this.config.class : "");
    for (let i in n.domEventHandlers)
      this.dom.addEventListener(i, (r) => {
        let s = r.target, o;
        if (s != this.dom && this.dom.contains(s)) {
          for (; s.parentNode != this.dom; )
            s = s.parentNode;
          let a = s.getBoundingClientRect();
          o = (a.top + a.bottom) / 2;
        } else
          o = r.clientY;
        let l = e.lineBlockAtHeight(o - e.documentTop);
        n.domEventHandlers[i](e, l, r) && r.preventDefault();
      });
    this.markers = Gp(n.markers(e)), n.initialSpacer && (this.spacer = new iy(e, 0, 0, [n.initialSpacer(e)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += "visibility: hidden; pointer-events: none");
  }
  update(e) {
    let n = this.markers;
    if (this.markers = Gp(this.config.markers(e.view)), this.spacer && this.config.updateSpacer) {
      let r = this.config.updateSpacer(this.spacer.markers[0], e);
      r != this.spacer.markers[0] && this.spacer.update(e.view, 0, 0, [r]);
    }
    let i = e.view.viewport;
    return !He.eq(this.markers, n, i.from, i.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(e) : !1);
  }
  destroy() {
    for (let e of this.elements)
      e.destroy();
  }
}
class iy {
  constructor(e, n, i, r) {
    this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement("div"), this.dom.className = "cm-gutterElement", this.update(e, n, i, r);
  }
  update(e, n, i, r) {
    this.height != n && (this.height = n, this.dom.style.height = n + "px"), this.above != i && (this.dom.style.marginTop = (this.above = i) ? i + "px" : ""), BD(this.markers, r) || this.setMarkers(e, r);
  }
  setMarkers(e, n) {
    let i = "cm-gutterElement", r = this.dom.firstChild;
    for (let s = 0, o = 0; ; ) {
      let l = o, a = s < n.length ? n[s++] : null, c = !1;
      if (a) {
        let u = a.elementClass;
        u && (i += " " + u);
        for (let f = o; f < this.markers.length; f++)
          if (this.markers[f].compare(a)) {
            l = f, c = !0;
            break;
          }
      } else
        l = this.markers.length;
      for (; o < l; ) {
        let u = this.markers[o++];
        if (u.toDOM) {
          u.destroy(r);
          let f = r.nextSibling;
          r.remove(), r = f;
        }
      }
      if (!a)
        break;
      a.toDOM && (c ? r = r.nextSibling : this.dom.insertBefore(a.toDOM(e), r)), c && o++;
    }
    this.dom.className = i, this.markers = n;
  }
  destroy() {
    this.setMarkers(null, []);
  }
}
function BD(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!t[n].compare(e[n]))
      return !1;
  return !0;
}
const VD = /* @__PURE__ */ ve.define(), HD = /* @__PURE__ */ ve.define(), Gr = /* @__PURE__ */ ve.define({
  combine(t) {
    return r0(t, { formatNumber: String, domEventHandlers: {} }, {
      domEventHandlers(e, n) {
        let i = Object.assign({}, e);
        for (let r in n) {
          let s = i[r], o = n[r];
          i[r] = s ? (l, a, c) => s(l, a, c) || o(l, a, c) : o;
        }
        return i;
      }
    });
  }
});
class oc extends Mr {
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
function lc(t, e) {
  return t.state.facet(Gr).formatNumber(e, t.state);
}
const WD = /* @__PURE__ */ Cl.compute([Gr], (t) => ({
  class: "cm-lineNumbers",
  renderEmptyElements: !1,
  markers(e) {
    return e.state.facet(VD);
  },
  lineMarker(e, n, i) {
    return i.some((r) => r.toDOM) ? null : new oc(lc(e, e.state.doc.lineAt(n.from).number));
  },
  widgetMarker: (e, n, i) => {
    for (let r of e.state.facet(HD)) {
      let s = r(e, n, i);
      if (s)
        return s;
    }
    return null;
  },
  lineMarkerChange: (e) => e.startState.facet(Gr) != e.state.facet(Gr),
  initialSpacer(e) {
    return new oc(lc(e, jp(e.state.doc.lines)));
  },
  updateSpacer(e, n) {
    let i = lc(n.view, jp(n.view.state.doc.lines));
    return i == e.number ? e : new oc(i);
  },
  domEventHandlers: t.facet(Gr).domEventHandlers
}));
function zD(t = {}) {
  return [
    Gr.of(t),
    ND(),
    WD
  ];
}
function jp(t) {
  let e = 9;
  for (; e < t; )
    e = e * 10 + 9;
  return e;
}
const GD = 1024;
let UD = 0;
class ac {
  constructor(e, n) {
    this.from = e, this.to = n;
  }
}
class Le {
  /**
  Create a new node prop type.
  */
  constructor(e = {}) {
    this.id = UD++, this.perNode = !!e.perNode, this.deserialize = e.deserialize || (() => {
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
    return typeof e != "function" && (e = Pn.match(e)), (n) => {
      let i = e(n);
      return i === void 0 ? null : [this, i];
    };
  }
}
Le.closedBy = new Le({ deserialize: (t) => t.split(" ") });
Le.openedBy = new Le({ deserialize: (t) => t.split(" ") });
Le.group = new Le({ deserialize: (t) => t.split(" ") });
Le.isolate = new Le({ deserialize: (t) => {
  if (t && t != "rtl" && t != "ltr" && t != "auto")
    throw new RangeError("Invalid value for isolate: " + t);
  return t || "auto";
} });
Le.contextHash = new Le({ perNode: !0 });
Le.lookAhead = new Le({ perNode: !0 });
Le.mounted = new Le({ perNode: !0 });
class jl {
  constructor(e, n, i) {
    this.tree = e, this.overlay = n, this.parser = i;
  }
  /**
  @internal
  */
  static get(e) {
    return e && e.props && e.props[Le.mounted.id];
  }
}
const jD = /* @__PURE__ */ Object.create(null);
class Pn {
  /**
  @internal
  */
  constructor(e, n, i, r = 0) {
    this.name = e, this.props = n, this.id = i, this.flags = r;
  }
  /**
  Define a node type.
  */
  static define(e) {
    let n = e.props && e.props.length ? /* @__PURE__ */ Object.create(null) : jD, i = (e.top ? 1 : 0) | (e.skipped ? 2 : 0) | (e.error ? 4 : 0) | (e.name == null ? 8 : 0), r = new Pn(e.name || "", n, e.id, i);
    if (e.props) {
      for (let s of e.props)
        if (Array.isArray(s) || (s = s(r)), s) {
          if (s[0].perNode)
            throw new RangeError("Can't store a per-node prop on a node type");
          n[s[0].id] = s[1];
        }
    }
    return r;
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
      let n = this.prop(Le.group);
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
      for (let r of i.split(" "))
        n[r] = e[i];
    return (i) => {
      for (let r = i.prop(Le.group), s = -1; s < (r ? r.length : 0); s++) {
        let o = n[s < 0 ? i.name : r[s]];
        if (o)
          return o;
      }
    };
  }
}
Pn.none = new Pn(
  "",
  /* @__PURE__ */ Object.create(null),
  0,
  8
  /* NodeFlag.Anonymous */
);
const tl = /* @__PURE__ */ new WeakMap(), Kp = /* @__PURE__ */ new WeakMap();
var Ft;
(function(t) {
  t[t.ExcludeBuffers = 1] = "ExcludeBuffers", t[t.IncludeAnonymous = 2] = "IncludeAnonymous", t[t.IgnoreMounts = 4] = "IgnoreMounts", t[t.IgnoreOverlays = 8] = "IgnoreOverlays";
})(Ft || (Ft = {}));
class Xt {
  /**
  Construct a new tree. See also [`Tree.build`](#common.Tree^build).
  */
  constructor(e, n, i, r, s) {
    if (this.type = e, this.children = n, this.positions = i, this.length = r, this.props = null, s && s.length) {
      this.props = /* @__PURE__ */ Object.create(null);
      for (let [o, l] of s)
        this.props[typeof o == "number" ? o : o.id] = l;
    }
  }
  /**
  @internal
  */
  toString() {
    let e = jl.get(this);
    if (e && !e.overlay)
      return e.tree.toString();
    let n = "";
    for (let i of this.children) {
      let r = i.toString();
      r && (n && (n += ","), n += r);
    }
    return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (n.length ? "(" + n + ")" : "") : n;
  }
  /**
  Get a [tree cursor](#common.TreeCursor) positioned at the top of
  the tree. Mode can be used to [control](#common.IterMode) which
  nodes the cursor visits.
  */
  cursor(e = 0) {
    return new wu(this.topNode, e);
  }
  /**
  Get a [tree cursor](#common.TreeCursor) pointing into this tree
  at the given position and side (see
  [`moveTo`](#common.TreeCursor.moveTo).
  */
  cursorAt(e, n = 0, i = 0) {
    let r = tl.get(this) || this.topNode, s = new wu(r);
    return s.moveTo(e, n), tl.set(this, s._tree), s;
  }
  /**
  Get a [syntax node](#common.SyntaxNode) object for the top of the
  tree.
  */
  get topNode() {
    return new An(this, 0, 0, null);
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
    let i = ho(tl.get(this) || this.topNode, e, n, !1);
    return tl.set(this, i), i;
  }
  /**
  Like [`resolve`](#common.Tree.resolve), but will enter
  [overlaid](#common.MountedTree.overlay) nodes, producing a syntax node
  pointing into the innermost overlaid tree at the given position
  (with parent links going through all parent structure, including
  the host trees).
  */
  resolveInner(e, n = 0) {
    let i = ho(Kp.get(this) || this.topNode, e, n, !0);
    return Kp.set(this, i), i;
  }
  /**
  In some situations, it can be useful to iterate through all
  nodes around a position, including those in overlays that don't
  directly cover the position. This method gives you an iterator
  that will produce all nodes, from small to big, around the given
  position.
  */
  resolveStack(e, n = 0) {
    return qD(this, e, n);
  }
  /**
  Iterate over the tree and its children, calling `enter` for any
  node that touches the `from`/`to` region (if given) before
  running over such a node's children, and `leave` (if given) when
  leaving the node. When `enter` returns `false`, that node will
  not have its children iterated over (or `leave` called).
  */
  iterate(e) {
    let { enter: n, leave: i, from: r = 0, to: s = this.length } = e, o = e.mode || 0, l = (o & Ft.IncludeAnonymous) > 0;
    for (let a = this.cursor(o | Ft.IncludeAnonymous); ; ) {
      let c = !1;
      if (a.from <= s && a.to >= r && (!l && a.type.isAnonymous || n(a) !== !1)) {
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
    return this.children.length <= 8 ? this : Gf(Pn.none, this.children, this.positions, 0, this.children.length, 0, this.length, (n, i, r) => new Xt(this.type, n, i, r, this.propValues), e.makeTree || ((n, i, r) => new Xt(Pn.none, n, i, r)));
  }
  /**
  Build a tree from a postfix-ordered buffer of node information,
  or a cursor over such a buffer.
  */
  static build(e) {
    return JD(e);
  }
}
Xt.empty = new Xt(Pn.none, [], [], 0);
class Wf {
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
    return new Wf(this.buffer, this.index);
  }
}
class ar {
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
    return Pn.none;
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
    let n = this.buffer[e], i = this.buffer[e + 3], r = this.set.types[n], s = r.name;
    if (/\W/.test(s) && !r.isError && (s = JSON.stringify(s)), e += 4, i == e)
      return s;
    let o = [];
    for (; e < i; )
      o.push(this.childString(e)), e = this.buffer[e + 3];
    return s + "(" + o.join(",") + ")";
  }
  /**
  @internal
  */
  findChild(e, n, i, r, s) {
    let { buffer: o } = this, l = -1;
    for (let a = e; a != n && !(ry(s, r, o[a + 1], o[a + 2]) && (l = a, i > 0)); a = o[a + 3])
      ;
    return l;
  }
  /**
  @internal
  */
  slice(e, n, i) {
    let r = this.buffer, s = new Uint16Array(n - e), o = 0;
    for (let l = e, a = 0; l < n; ) {
      s[a++] = r[l++], s[a++] = r[l++] - i;
      let c = s[a++] = r[l++] - i;
      s[a++] = r[l++] - e, o = Math.max(o, c);
    }
    return new ar(s, o, this.set);
  }
}
function ry(t, e, n, i) {
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
function ho(t, e, n, i) {
  for (var r; t.from == t.to || (n < 1 ? t.from >= e : t.from > e) || (n > -1 ? t.to <= e : t.to < e); ) {
    let o = !i && t instanceof An && t.index < 0 ? null : t.parent;
    if (!o)
      return t;
    t = o;
  }
  let s = i ? 0 : Ft.IgnoreOverlays;
  if (i)
    for (let o = t, l = o.parent; l; o = l, l = o.parent)
      o instanceof An && o.index < 0 && ((r = l.enter(e, n, s)) === null || r === void 0 ? void 0 : r.from) != o.from && (t = l);
  for (; ; ) {
    let o = t.enter(e, n, s);
    if (!o)
      return t;
    t = o;
  }
}
class sy {
  cursor(e = 0) {
    return new wu(this, e);
  }
  getChild(e, n = null, i = null) {
    let r = Yp(this, e, n, i);
    return r.length ? r[0] : null;
  }
  getChildren(e, n = null, i = null) {
    return Yp(this, e, n, i);
  }
  resolve(e, n = 0) {
    return ho(this, e, n, !1);
  }
  resolveInner(e, n = 0) {
    return ho(this, e, n, !0);
  }
  matchContext(e) {
    return bu(this.parent, e);
  }
  enterUnfinishedNodesBefore(e) {
    let n = this.childBefore(e), i = this;
    for (; n; ) {
      let r = n.lastChild;
      if (!r || r.to != n.to)
        break;
      r.type.isError && r.from == r.to ? (i = n, n = r.prevSibling) : n = r;
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
class An extends sy {
  constructor(e, n, i, r) {
    super(), this._tree = e, this.from = n, this.index = i, this._parent = r;
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
  nextChild(e, n, i, r, s = 0) {
    for (let o = this; ; ) {
      for (let { children: l, positions: a } = o._tree, c = n > 0 ? l.length : -1; e != c; e += n) {
        let u = l[e], f = a[e] + o.from;
        if (ry(r, i, f, f + u.length)) {
          if (u instanceof ar) {
            if (s & Ft.ExcludeBuffers)
              continue;
            let d = u.findChild(0, u.buffer.length, n, i - f, r);
            if (d > -1)
              return new Zi(new KD(o, u, e, f), null, d);
          } else if (s & Ft.IncludeAnonymous || !u.type.isAnonymous || zf(u)) {
            let d;
            if (!(s & Ft.IgnoreMounts) && (d = jl.get(u)) && !d.overlay)
              return new An(d.tree, f, e, o);
            let h = new An(u, f, e, o);
            return s & Ft.IncludeAnonymous || !h.type.isAnonymous ? h : h.nextChild(n < 0 ? u.children.length - 1 : 0, n, i, r);
          }
        }
      }
      if (s & Ft.IncludeAnonymous || !o.type.isAnonymous || (o.index >= 0 ? e = o.index + n : e = n < 0 ? -1 : o._parent._tree.children.length, o = o._parent, !o))
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
    let r;
    if (!(i & Ft.IgnoreOverlays) && (r = jl.get(this._tree)) && r.overlay) {
      let s = e - this.from;
      for (let { from: o, to: l } of r.overlay)
        if ((n > 0 ? o <= s : o < s) && (n < 0 ? l >= s : l > s))
          return new An(r.tree, r.overlay[0].from + this.from, -1, this);
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
function Yp(t, e, n, i) {
  let r = t.cursor(), s = [];
  if (!r.firstChild())
    return s;
  if (n != null) {
    for (let o = !1; !o; )
      if (o = r.type.is(n), !r.nextSibling())
        return s;
  }
  for (; ; ) {
    if (i != null && r.type.is(i))
      return s;
    if (r.type.is(e) && s.push(r.node), !r.nextSibling())
      return i == null ? s : [];
  }
}
function bu(t, e, n = e.length - 1) {
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
class KD {
  constructor(e, n, i, r) {
    this.parent = e, this.buffer = n, this.index = i, this.start = r;
  }
}
class Zi extends sy {
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
    let { buffer: r } = this.context, s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, n - this.context.start, i);
    return s < 0 ? null : new Zi(this.context, this, s);
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
    if (i & Ft.ExcludeBuffers)
      return null;
    let { buffer: r } = this.context, s = r.findChild(this.index + 4, r.buffer[this.index + 3], n > 0 ? 1 : -1, e - this.context.start, n);
    return s < 0 ? null : new Zi(this.context, this, s);
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
    return n < (this._parent ? e.buffer[this._parent.index + 3] : e.buffer.length) ? new Zi(this.context, this._parent, n) : this.externalSibling(1);
  }
  get prevSibling() {
    let { buffer: e } = this.context, n = this._parent ? this._parent.index + 4 : 0;
    return this.index == n ? this.externalSibling(-1) : new Zi(this.context, this._parent, e.findChild(
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
    let e = [], n = [], { buffer: i } = this.context, r = this.index + 4, s = i.buffer[this.index + 3];
    if (s > r) {
      let o = i.buffer[this.index + 1];
      e.push(i.slice(r, s, o)), n.push(0);
    }
    return new Xt(this.type, e, n, this.to - this.from);
  }
  /**
  @internal
  */
  toString() {
    return this.context.buffer.childString(this.index);
  }
}
function oy(t) {
  if (!t.length)
    return null;
  let e = 0, n = t[0];
  for (let s = 1; s < t.length; s++) {
    let o = t[s];
    (o.from > n.from || o.to < n.to) && (n = o, e = s);
  }
  let i = n instanceof An && n.index < 0 ? null : n.parent, r = t.slice();
  return i ? r[e] = i : r.splice(e, 1), new YD(r, n);
}
class YD {
  constructor(e, n) {
    this.heads = e, this.node = n;
  }
  get next() {
    return oy(this.heads);
  }
}
function qD(t, e, n) {
  let i = t.resolveInner(e, n), r = null;
  for (let s = i instanceof An ? i : i.context.parent; s; s = s.parent)
    if (s.index < 0) {
      let o = s.parent;
      (r || (r = [i])).push(o.resolve(e, n)), s = o;
    } else {
      let o = jl.get(s.tree);
      if (o && o.overlay && o.overlay[0].from <= e && o.overlay[o.overlay.length - 1].to >= e) {
        let l = new An(o.tree, o.overlay[0].from + s.from, -1, s);
        (r || (r = [i])).push(ho(l, e, n, !1));
      }
    }
  return r ? oy(r) : i;
}
class wu {
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
    if (this.mode = n, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, e instanceof An)
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
    let { start: i, buffer: r } = this.buffer;
    return this.type = n || r.set.types[r.buffer[e]], this.from = i + r.buffer[e + 1], this.to = i + r.buffer[e + 2], !0;
  }
  /**
  @internal
  */
  yield(e) {
    return e ? e instanceof An ? (this.buffer = null, this.yieldNode(e)) : (this.buffer = e.context, this.yieldBuf(e.index, e.type)) : !1;
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
    let { buffer: r } = this.buffer, s = r.findChild(this.index + 4, r.buffer[this.index + 3], e, n - this.buffer.start, i);
    return s < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(s));
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
    return this.buffer ? i & Ft.ExcludeBuffers ? !1 : this.enterChild(1, e, n) : this.yield(this._tree.enter(e, n, i));
  }
  /**
  Move to the node's parent node, if this isn't the top node.
  */
  parent() {
    if (!this.buffer)
      return this.yieldNode(this.mode & Ft.IncludeAnonymous ? this._tree._parent : this._tree.parent);
    if (this.stack.length)
      return this.yieldBuf(this.stack.pop());
    let e = this.mode & Ft.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
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
      let r = i < 0 ? 0 : this.stack[i] + 4;
      if (this.index != r)
        return this.yieldBuf(n.findChild(
          r,
          this.index,
          -1,
          0,
          4
          /* Side.DontCare */
        ));
    } else {
      let r = n.buffer[this.index + 3];
      if (r < (i < 0 ? n.buffer.length : n.buffer[this.stack[i] + 3]))
        return this.yieldBuf(r);
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
    let n, i, { buffer: r } = this;
    if (r) {
      if (e > 0) {
        if (this.index < r.buffer.buffer.length)
          return !1;
      } else
        for (let s = 0; s < this.index; s++)
          if (r.buffer.buffer[s + 3] < this.index)
            return !1;
      ({ index: n, parent: i } = r);
    } else
      ({ index: n, _parent: i } = this._tree);
    for (; i; { index: n, _parent: i } = i)
      if (n > -1)
        for (let s = n + e, o = e < 0 ? -1 : i._tree.children.length; s != o; s += e) {
          let l = i._tree.children[s];
          if (this.mode & Ft.IncludeAnonymous || l instanceof ar || !l.type.isAnonymous || zf(l))
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
      e: for (let r = this.index, s = this.stack.length; s >= 0; ) {
        for (let o = e; o; o = o._parent)
          if (o.index == r) {
            if (r == this.index)
              return o;
            n = o, i = s + 1;
            break e;
          }
        r = this.stack[--s];
      }
    for (let r = i; r < this.stack.length; r++)
      n = new Zi(this.buffer, n, this.stack[r]);
    return this.bufferNode = new Zi(this.buffer, n, this.index);
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
      let r = !1;
      if (this.type.isAnonymous || e(this) !== !1) {
        if (this.firstChild()) {
          i++;
          continue;
        }
        this.type.isAnonymous || (r = !0);
      }
      for (; ; ) {
        if (r && n && n(this), r = this.type.isAnonymous, !i)
          return;
        if (this.nextSibling())
          break;
        this.parent(), i--, r = !0;
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
      return bu(this.node.parent, e);
    let { buffer: n } = this.buffer, { types: i } = n.set;
    for (let r = e.length - 1, s = this.stack.length - 1; r >= 0; s--) {
      if (s < 0)
        return bu(this._tree, e, r);
      let o = i[n.buffer[this.stack[s]]];
      if (!o.isAnonymous) {
        if (e[r] && e[r] != o.name)
          return !1;
        r--;
      }
    }
    return !0;
  }
}
function zf(t) {
  return t.children.some((e) => e instanceof ar || !e.type.isAnonymous || zf(e));
}
function JD(t) {
  var e;
  let { buffer: n, nodeSet: i, maxBufferLength: r = GD, reused: s = [], minRepeatType: o = i.types.length } = t, l = Array.isArray(n) ? new Wf(n, n.length) : n, a = i.types, c = 0, u = 0;
  function f(_, E, C, H, N, q) {
    let { id: z, start: W, end: te, size: ge } = l, D = u, B = c;
    for (; ge < 0; )
      if (l.next(), ge == -1) {
        let Oe = s[z];
        C.push(Oe), H.push(W - _);
        return;
      } else if (ge == -3) {
        c = z;
        return;
      } else if (ge == -4) {
        u = z;
        return;
      } else
        throw new RangeError(`Unrecognized record size: ${ge}`);
    let V = a[z], ce, ae, ke = W - _;
    if (te - W <= r && (ae = y(l.pos - E, N))) {
      let Oe = new Uint16Array(ae.size - ae.skip), Ae = l.pos - ae.size, be = Oe.length;
      for (; l.pos > Ae; )
        be = g(ae.start, Oe, be);
      ce = new ar(Oe, te - ae.start, i), ke = ae.start - _;
    } else {
      let Oe = l.pos - ge;
      l.next();
      let Ae = [], be = [], We = z >= o ? z : -1, xe = 0, ze = te;
      for (; l.pos > Oe; )
        We >= 0 && l.id == We && l.size >= 0 ? (l.end <= ze - r && (p(Ae, be, W, xe, l.end, ze, We, D, B), xe = Ae.length, ze = l.end), l.next()) : q > 2500 ? d(W, Oe, Ae, be) : f(W, Oe, Ae, be, We, q + 1);
      if (We >= 0 && xe > 0 && xe < Ae.length && p(Ae, be, W, xe, W, ze, We, D, B), Ae.reverse(), be.reverse(), We > -1 && xe > 0) {
        let Qe = h(V, B);
        ce = Gf(V, Ae, be, 0, Ae.length, 0, te - W, Qe, Qe);
      } else
        ce = v(V, Ae, be, te - W, D - te, B);
    }
    C.push(ce), H.push(ke);
  }
  function d(_, E, C, H) {
    let N = [], q = 0, z = -1;
    for (; l.pos > E; ) {
      let { id: W, start: te, end: ge, size: D } = l;
      if (D > 4)
        l.next();
      else {
        if (z > -1 && te < z)
          break;
        z < 0 && (z = ge - r), N.push(W, te, ge), q++, l.next();
      }
    }
    if (q) {
      let W = new Uint16Array(q * 4), te = N[N.length - 2];
      for (let ge = N.length - 3, D = 0; ge >= 0; ge -= 3)
        W[D++] = N[ge], W[D++] = N[ge + 1] - te, W[D++] = N[ge + 2] - te, W[D++] = D;
      C.push(new ar(W, N[2] - te, i)), H.push(te - _);
    }
  }
  function h(_, E) {
    return (C, H, N) => {
      let q = 0, z = C.length - 1, W, te;
      if (z >= 0 && (W = C[z]) instanceof Xt) {
        if (!z && W.type == _ && W.length == N)
          return W;
        (te = W.prop(Le.lookAhead)) && (q = H[z] + W.length + te);
      }
      return v(_, C, H, N, q, E);
    };
  }
  function p(_, E, C, H, N, q, z, W, te) {
    let ge = [], D = [];
    for (; _.length > H; )
      ge.push(_.pop()), D.push(E.pop() + C - N);
    _.push(v(i.types[z], ge, D, q - N, W - q, te)), E.push(N - C);
  }
  function v(_, E, C, H, N, q, z) {
    if (q) {
      let W = [Le.contextHash, q];
      z = z ? [W].concat(z) : [W];
    }
    if (N > 25) {
      let W = [Le.lookAhead, N];
      z = z ? [W].concat(z) : [W];
    }
    return new Xt(_, E, C, H, z);
  }
  function y(_, E) {
    let C = l.fork(), H = 0, N = 0, q = 0, z = C.end - r, W = { size: 0, start: 0, skip: 0 };
    e: for (let te = C.pos - _; C.pos > te; ) {
      let ge = C.size;
      if (C.id == E && ge >= 0) {
        W.size = H, W.start = N, W.skip = q, q += 4, H += 4, C.next();
        continue;
      }
      let D = C.pos - ge;
      if (ge < 0 || D < te || C.start < z)
        break;
      let B = C.id >= o ? 4 : 0, V = C.start;
      for (C.next(); C.pos > D; ) {
        if (C.size < 0)
          if (C.size == -3)
            B += 4;
          else
            break e;
        else C.id >= o && (B += 4);
        C.next();
      }
      N = V, H += ge, q += B;
    }
    return (E < 0 || H == _) && (W.size = H, W.start = N, W.skip = q), W.size > 4 ? W : void 0;
  }
  function g(_, E, C) {
    let { id: H, start: N, end: q, size: z } = l;
    if (l.next(), z >= 0 && H < o) {
      let W = C;
      if (z > 4) {
        let te = l.pos - (z - 4);
        for (; l.pos > te; )
          C = g(_, E, C);
      }
      E[--C] = W, E[--C] = q - _, E[--C] = N - _, E[--C] = H;
    } else z == -3 ? c = H : z == -4 && (u = H);
    return C;
  }
  let b = [], k = [];
  for (; l.pos > 0; )
    f(t.start || 0, t.bufferStart || 0, b, k, -1, 0);
  let S = (e = t.length) !== null && e !== void 0 ? e : b.length ? k[0] + b[0].length : 0;
  return new Xt(a[t.topID], b.reverse(), k.reverse(), S);
}
const qp = /* @__PURE__ */ new WeakMap();
function kl(t, e) {
  if (!t.isAnonymous || e instanceof ar || e.type != t)
    return 1;
  let n = qp.get(e);
  if (n == null) {
    n = 1;
    for (let i of e.children) {
      if (i.type != t || !(i instanceof Xt)) {
        n = 1;
        break;
      }
      n += kl(t, i);
    }
    qp.set(e, n);
  }
  return n;
}
function Gf(t, e, n, i, r, s, o, l, a) {
  let c = 0;
  for (let p = i; p < r; p++)
    c += kl(t, e[p]);
  let u = Math.ceil(
    c * 1.5 / 8
    /* Balance.BranchFactor */
  ), f = [], d = [];
  function h(p, v, y, g, b) {
    for (let k = y; k < g; ) {
      let S = k, _ = v[k], E = kl(t, p[k]);
      for (k++; k < g; k++) {
        let C = kl(t, p[k]);
        if (E + C >= u)
          break;
        E += C;
      }
      if (k == S + 1) {
        if (E > u) {
          let C = p[S];
          h(C.children, C.positions, 0, C.children.length, v[S] + b);
          continue;
        }
        f.push(p[S]);
      } else {
        let C = v[k - 1] + p[k - 1].length - _;
        f.push(Gf(t, p, v, S, k, _, C, null, a));
      }
      d.push(_ + b - s);
    }
  }
  return h(e, n, i, r, 0), (l || a)(f, d, o);
}
class _r {
  /**
  Construct a tree fragment. You'll usually want to use
  [`addTree`](#common.TreeFragment^addTree) and
  [`applyChanges`](#common.TreeFragment^applyChanges) instead of
  calling this directly.
  */
  constructor(e, n, i, r, s = !1, o = !1) {
    this.from = e, this.to = n, this.tree = i, this.offset = r, this.open = (s ? 1 : 0) | (o ? 2 : 0);
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
    let r = [new _r(0, e.length, e, 0, !1, i)];
    for (let s of n)
      s.to > e.length && r.push(s);
    return r;
  }
  /**
  Apply a set of edits to an array of fragments, removing or
  splitting fragments as necessary to remove edited ranges, and
  adjusting offsets for fragments that moved.
  */
  static applyChanges(e, n, i = 128) {
    if (!n.length)
      return e;
    let r = [], s = 1, o = e.length ? e[0] : null;
    for (let l = 0, a = 0, c = 0; ; l++) {
      let u = l < n.length ? n[l] : null, f = u ? u.fromA : 1e9;
      if (f - a >= i)
        for (; o && o.from < f; ) {
          let d = o;
          if (a >= d.from || f <= d.to || c) {
            let h = Math.max(d.from, a) - c, p = Math.min(d.to, f) - c;
            d = h >= p ? null : new _r(h, p, d.tree, d.offset + c, l > 0, !!u);
          }
          if (d && r.push(d), o.to > f)
            break;
          o = s < e.length ? e[s++] : null;
        }
      if (!u)
        break;
      a = u.toA, c = u.toA - u.toB;
    }
    return r;
  }
}
class XD {
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
    return typeof e == "string" && (e = new ZD(e)), i = i ? i.length ? i.map((r) => new ac(r.from, r.to)) : [new ac(0, 0)] : [new ac(0, e.length)], this.createParse(e, n || [], i);
  }
  /**
  Run a full parse, returning the resulting tree.
  */
  parse(e, n, i) {
    let r = this.startParse(e, n, i);
    for (; ; ) {
      let s = r.advance();
      if (s)
        return s;
    }
  }
}
class ZD {
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
new Le({ perNode: !0 });
let QD = 0;
class wn {
  /**
  @internal
  */
  constructor(e, n, i, r) {
    this.name = e, this.set = n, this.base = i, this.modified = r, this.id = QD++;
  }
  toString() {
    let { name: e } = this;
    for (let n of this.modified)
      n.name && (e = `${n.name}(${e})`);
    return e;
  }
  static define(e, n) {
    let i = typeof e == "string" ? e : "?";
    if (e instanceof wn && (n = e), n?.base)
      throw new Error("Can not derive from a modified tag");
    let r = new wn(i, [], null, []);
    if (r.set.push(r), n)
      for (let s of n.set)
        r.set.push(s);
    return r;
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
    let n = new Kl(e);
    return (i) => i.modified.indexOf(n) > -1 ? i : Kl.get(i.base || i, i.modified.concat(n).sort((r, s) => r.id - s.id));
  }
}
let e8 = 0;
class Kl {
  constructor(e) {
    this.name = e, this.instances = [], this.id = e8++;
  }
  static get(e, n) {
    if (!n.length)
      return e;
    let i = n[0].instances.find((l) => l.base == e && t8(n, l.modified));
    if (i)
      return i;
    let r = [], s = new wn(e.name, r, e, n);
    for (let l of n)
      l.instances.push(s);
    let o = n8(n);
    for (let l of e.set)
      if (!l.modified.length)
        for (let a of o)
          r.push(Kl.get(l, a));
    return s;
  }
}
function t8(t, e) {
  return t.length == e.length && t.every((n, i) => n == e[i]);
}
function n8(t) {
  let e = [[]];
  for (let n = 0; n < t.length; n++)
    for (let i = 0, r = e.length; i < r; i++)
      e.push(e[i].concat(t[n]));
  return e.sort((n, i) => i.length - n.length);
}
function i8(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let i = t[n];
    Array.isArray(i) || (i = [i]);
    for (let r of n.split(" "))
      if (r) {
        let s = [], o = 2, l = r;
        for (let f = 0; ; ) {
          if (l == "..." && f > 0 && f + 3 == r.length) {
            o = 1;
            break;
          }
          let d = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(l);
          if (!d)
            throw new RangeError("Invalid path: " + r);
          if (s.push(d[0] == "*" ? "" : d[0][0] == '"' ? JSON.parse(d[0]) : d[0]), f += d[0].length, f == r.length)
            break;
          let h = r[f++];
          if (f == r.length && h == "!") {
            o = 0;
            break;
          }
          if (h != "/")
            throw new RangeError("Invalid path: " + r);
          l = r.slice(f);
        }
        let a = s.length - 1, c = s[a];
        if (!c)
          throw new RangeError("Invalid path: " + r);
        let u = new Yl(i, o, a > 0 ? s.slice(0, a) : null);
        e[c] = u.sort(e[c]);
      }
  }
  return ly.add(e);
}
const ly = new Le();
class Yl {
  constructor(e, n, i, r) {
    this.tags = e, this.mode = n, this.context = i, this.next = r;
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
Yl.empty = new Yl([], 2, null);
function ay(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let s of t)
    if (!Array.isArray(s.tag))
      n[s.tag.id] = s.class;
    else
      for (let o of s.tag)
        n[o.id] = s.class;
  let { scope: i, all: r = null } = e || {};
  return {
    style: (s) => {
      let o = r;
      for (let l of s)
        for (let a of l.set) {
          let c = n[a.id];
          if (c) {
            o = o ? o + " " + c : c;
            break;
          }
        }
      return o;
    },
    scope: i
  };
}
function r8(t, e) {
  let n = null;
  for (let i of t) {
    let r = i.style(e);
    r && (n = n ? n + " " + r : r);
  }
  return n;
}
function s8(t, e, n, i = 0, r = t.length) {
  let s = new o8(i, Array.isArray(e) ? e : [e], n);
  s.highlightRange(t.cursor(), i, r, "", s.highlighters), s.flush(r);
}
class o8 {
  constructor(e, n, i) {
    this.at = e, this.highlighters = n, this.span = i, this.class = "";
  }
  startSpan(e, n) {
    n != this.class && (this.flush(e), e > this.at && (this.at = e), this.class = n);
  }
  flush(e) {
    e > this.at && this.class && this.span(this.at, e, this.class);
  }
  highlightRange(e, n, i, r, s) {
    let { type: o, from: l, to: a } = e;
    if (l >= i || a <= n)
      return;
    o.isTop && (s = this.highlighters.filter((h) => !h.scope || h.scope(o)));
    let c = r, u = l8(e) || Yl.empty, f = r8(s, u.tags);
    if (f && (c && (c += " "), c += f, u.mode == 1 && (r += (r ? " " : "") + f)), this.startSpan(Math.max(n, l), c), u.opaque)
      return;
    let d = e.tree && e.tree.prop(Le.mounted);
    if (d && d.overlay) {
      let h = e.node.enter(d.overlay[0].from + l, 1), p = this.highlighters.filter((y) => !y.scope || y.scope(d.tree.type)), v = e.firstChild();
      for (let y = 0, g = l; ; y++) {
        let b = y < d.overlay.length ? d.overlay[y] : null, k = b ? b.from + l : a, S = Math.max(n, g), _ = Math.min(i, k);
        if (S < _ && v)
          for (; e.from < _ && (this.highlightRange(e, S, _, r, s), this.startSpan(Math.min(_, e.to), c), !(e.to >= k || !e.nextSibling())); )
            ;
        if (!b || k > i)
          break;
        g = b.to + l, g > n && (this.highlightRange(h.cursor(), Math.max(n, b.from + l), Math.min(i, g), "", p), this.startSpan(Math.min(i, g), c));
      }
      v && e.parent();
    } else if (e.firstChild()) {
      d && (r = "");
      do
        if (!(e.to <= n)) {
          if (e.from >= i)
            break;
          this.highlightRange(e, n, i, r, s), this.startSpan(Math.min(i, e.to), c);
        }
      while (e.nextSibling());
      e.parent();
    }
  }
}
function l8(t) {
  let e = t.type.prop(ly);
  for (; e && e.context && !t.matchContext(e.context); )
    e = e.next;
  return e || null;
}
const re = wn.define, nl = re(), Ui = re(), Jp = re(Ui), Xp = re(Ui), ji = re(), il = re(ji), cc = re(ji), Jn = re(), mr = re(Jn), Yn = re(), qn = re(), Su = re(), As = re(Su), rl = re(), Se = {
  /**
  A comment.
  */
  comment: nl,
  /**
  A line [comment](#highlight.tags.comment).
  */
  lineComment: re(nl),
  /**
  A block [comment](#highlight.tags.comment).
  */
  blockComment: re(nl),
  /**
  A documentation [comment](#highlight.tags.comment).
  */
  docComment: re(nl),
  /**
  Any kind of identifier.
  */
  name: Ui,
  /**
  The [name](#highlight.tags.name) of a variable.
  */
  variableName: re(Ui),
  /**
  A type [name](#highlight.tags.name).
  */
  typeName: Jp,
  /**
  A tag name (subtag of [`typeName`](#highlight.tags.typeName)).
  */
  tagName: re(Jp),
  /**
  A property or field [name](#highlight.tags.name).
  */
  propertyName: Xp,
  /**
  An attribute name (subtag of [`propertyName`](#highlight.tags.propertyName)).
  */
  attributeName: re(Xp),
  /**
  The [name](#highlight.tags.name) of a class.
  */
  className: re(Ui),
  /**
  A label [name](#highlight.tags.name).
  */
  labelName: re(Ui),
  /**
  A namespace [name](#highlight.tags.name).
  */
  namespace: re(Ui),
  /**
  The [name](#highlight.tags.name) of a macro.
  */
  macroName: re(Ui),
  /**
  A literal value.
  */
  literal: ji,
  /**
  A string [literal](#highlight.tags.literal).
  */
  string: il,
  /**
  A documentation [string](#highlight.tags.string).
  */
  docString: re(il),
  /**
  A character literal (subtag of [string](#highlight.tags.string)).
  */
  character: re(il),
  /**
  An attribute value (subtag of [string](#highlight.tags.string)).
  */
  attributeValue: re(il),
  /**
  A number [literal](#highlight.tags.literal).
  */
  number: cc,
  /**
  An integer [number](#highlight.tags.number) literal.
  */
  integer: re(cc),
  /**
  A floating-point [number](#highlight.tags.number) literal.
  */
  float: re(cc),
  /**
  A boolean [literal](#highlight.tags.literal).
  */
  bool: re(ji),
  /**
  Regular expression [literal](#highlight.tags.literal).
  */
  regexp: re(ji),
  /**
  An escape [literal](#highlight.tags.literal), for example a
  backslash escape in a string.
  */
  escape: re(ji),
  /**
  A color [literal](#highlight.tags.literal).
  */
  color: re(ji),
  /**
  A URL [literal](#highlight.tags.literal).
  */
  url: re(ji),
  /**
  A language keyword.
  */
  keyword: Yn,
  /**
  The [keyword](#highlight.tags.keyword) for the self or this
  object.
  */
  self: re(Yn),
  /**
  The [keyword](#highlight.tags.keyword) for null.
  */
  null: re(Yn),
  /**
  A [keyword](#highlight.tags.keyword) denoting some atomic value.
  */
  atom: re(Yn),
  /**
  A [keyword](#highlight.tags.keyword) that represents a unit.
  */
  unit: re(Yn),
  /**
  A modifier [keyword](#highlight.tags.keyword).
  */
  modifier: re(Yn),
  /**
  A [keyword](#highlight.tags.keyword) that acts as an operator.
  */
  operatorKeyword: re(Yn),
  /**
  A control-flow related [keyword](#highlight.tags.keyword).
  */
  controlKeyword: re(Yn),
  /**
  A [keyword](#highlight.tags.keyword) that defines something.
  */
  definitionKeyword: re(Yn),
  /**
  A [keyword](#highlight.tags.keyword) related to defining or
  interfacing with modules.
  */
  moduleKeyword: re(Yn),
  /**
  An operator.
  */
  operator: qn,
  /**
  An [operator](#highlight.tags.operator) that dereferences something.
  */
  derefOperator: re(qn),
  /**
  Arithmetic-related [operator](#highlight.tags.operator).
  */
  arithmeticOperator: re(qn),
  /**
  Logical [operator](#highlight.tags.operator).
  */
  logicOperator: re(qn),
  /**
  Bit [operator](#highlight.tags.operator).
  */
  bitwiseOperator: re(qn),
  /**
  Comparison [operator](#highlight.tags.operator).
  */
  compareOperator: re(qn),
  /**
  [Operator](#highlight.tags.operator) that updates its operand.
  */
  updateOperator: re(qn),
  /**
  [Operator](#highlight.tags.operator) that defines something.
  */
  definitionOperator: re(qn),
  /**
  Type-related [operator](#highlight.tags.operator).
  */
  typeOperator: re(qn),
  /**
  Control-flow [operator](#highlight.tags.operator).
  */
  controlOperator: re(qn),
  /**
  Program or markup punctuation.
  */
  punctuation: Su,
  /**
  [Punctuation](#highlight.tags.punctuation) that separates
  things.
  */
  separator: re(Su),
  /**
  Bracket-style [punctuation](#highlight.tags.punctuation).
  */
  bracket: As,
  /**
  Angle [brackets](#highlight.tags.bracket) (usually `<` and `>`
  tokens).
  */
  angleBracket: re(As),
  /**
  Square [brackets](#highlight.tags.bracket) (usually `[` and `]`
  tokens).
  */
  squareBracket: re(As),
  /**
  Parentheses (usually `(` and `)` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  paren: re(As),
  /**
  Braces (usually `{` and `}` tokens). Subtag of
  [bracket](#highlight.tags.bracket).
  */
  brace: re(As),
  /**
  Content, for example plain text in XML or markup documents.
  */
  content: Jn,
  /**
  [Content](#highlight.tags.content) that represents a heading.
  */
  heading: mr,
  /**
  A level 1 [heading](#highlight.tags.heading).
  */
  heading1: re(mr),
  /**
  A level 2 [heading](#highlight.tags.heading).
  */
  heading2: re(mr),
  /**
  A level 3 [heading](#highlight.tags.heading).
  */
  heading3: re(mr),
  /**
  A level 4 [heading](#highlight.tags.heading).
  */
  heading4: re(mr),
  /**
  A level 5 [heading](#highlight.tags.heading).
  */
  heading5: re(mr),
  /**
  A level 6 [heading](#highlight.tags.heading).
  */
  heading6: re(mr),
  /**
  A prose [content](#highlight.tags.content) separator (such as a horizontal rule).
  */
  contentSeparator: re(Jn),
  /**
  [Content](#highlight.tags.content) that represents a list.
  */
  list: re(Jn),
  /**
  [Content](#highlight.tags.content) that represents a quote.
  */
  quote: re(Jn),
  /**
  [Content](#highlight.tags.content) that is emphasized.
  */
  emphasis: re(Jn),
  /**
  [Content](#highlight.tags.content) that is styled strong.
  */
  strong: re(Jn),
  /**
  [Content](#highlight.tags.content) that is part of a link.
  */
  link: re(Jn),
  /**
  [Content](#highlight.tags.content) that is styled as code or
  monospace.
  */
  monospace: re(Jn),
  /**
  [Content](#highlight.tags.content) that has a strike-through
  style.
  */
  strikethrough: re(Jn),
  /**
  Inserted text in a change-tracking format.
  */
  inserted: re(),
  /**
  Deleted text.
  */
  deleted: re(),
  /**
  Changed text.
  */
  changed: re(),
  /**
  An invalid or unsyntactic element.
  */
  invalid: re(),
  /**
  Metadata or meta-instruction.
  */
  meta: rl,
  /**
  [Metadata](#highlight.tags.meta) that applies to the entire
  document.
  */
  documentMeta: re(rl),
  /**
  [Metadata](#highlight.tags.meta) that annotates or adds
  attributes to a given syntactic element.
  */
  annotation: re(rl),
  /**
  Processing instruction or preprocessor directive. Subtag of
  [meta](#highlight.tags.meta).
  */
  processingInstruction: re(rl),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that a
  given element is being defined. Expected to be used with the
  various [name](#highlight.tags.name) tags.
  */
  definition: wn.defineModifier("definition"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates that
  something is constant. Mostly expected to be used with
  [variable names](#highlight.tags.variableName).
  */
  constant: wn.defineModifier("constant"),
  /**
  [Modifier](#highlight.Tag^defineModifier) used to indicate that
  a [variable](#highlight.tags.variableName) or [property
  name](#highlight.tags.propertyName) is being called or defined
  as a function.
  */
  function: wn.defineModifier("function"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that can be applied to
  [names](#highlight.tags.name) to indicate that they belong to
  the language's standard environment.
  */
  standard: wn.defineModifier("standard"),
  /**
  [Modifier](#highlight.Tag^defineModifier) that indicates a given
  [names](#highlight.tags.name) is local to some scope.
  */
  local: wn.defineModifier("local"),
  /**
  A generic variant [modifier](#highlight.Tag^defineModifier) that
  can be used to tag language-specific alternative variants of
  some common tag. It is recommended for themes to define special
  forms of at least the [string](#highlight.tags.string) and
  [variable name](#highlight.tags.variableName) tags, since those
  come up a lot.
  */
  special: wn.defineModifier("special")
};
for (let t in Se) {
  let e = Se[t];
  e instanceof wn && (e.name = t);
}
ay([
  { tag: Se.link, class: "tok-link" },
  { tag: Se.heading, class: "tok-heading" },
  { tag: Se.emphasis, class: "tok-emphasis" },
  { tag: Se.strong, class: "tok-strong" },
  { tag: Se.keyword, class: "tok-keyword" },
  { tag: Se.atom, class: "tok-atom" },
  { tag: Se.bool, class: "tok-bool" },
  { tag: Se.url, class: "tok-url" },
  { tag: Se.labelName, class: "tok-labelName" },
  { tag: Se.inserted, class: "tok-inserted" },
  { tag: Se.deleted, class: "tok-deleted" },
  { tag: Se.literal, class: "tok-literal" },
  { tag: Se.string, class: "tok-string" },
  { tag: Se.number, class: "tok-number" },
  { tag: [Se.regexp, Se.escape, Se.special(Se.string)], class: "tok-string2" },
  { tag: Se.variableName, class: "tok-variableName" },
  { tag: Se.local(Se.variableName), class: "tok-variableName tok-local" },
  { tag: Se.definition(Se.variableName), class: "tok-variableName tok-definition" },
  { tag: Se.special(Se.variableName), class: "tok-variableName2" },
  { tag: Se.definition(Se.propertyName), class: "tok-propertyName tok-definition" },
  { tag: Se.typeName, class: "tok-typeName" },
  { tag: Se.namespace, class: "tok-namespace" },
  { tag: Se.className, class: "tok-className" },
  { tag: Se.macroName, class: "tok-macroName" },
  { tag: Se.propertyName, class: "tok-propertyName" },
  { tag: Se.operator, class: "tok-operator" },
  { tag: Se.comment, class: "tok-comment" },
  { tag: Se.meta, class: "tok-meta" },
  { tag: Se.invalid, class: "tok-invalid" },
  { tag: Se.punctuation, class: "tok-punctuation" }
]);
var uc;
const Ds = /* @__PURE__ */ new Le(), a8 = /* @__PURE__ */ new Le();
class ii {
  /**
  Construct a language object. If you need to invoke this
  directly, first define a data facet with
  [`defineLanguageFacet`](https://codemirror.net/6/docs/ref/#language.defineLanguageFacet), and then
  configure your parser to [attach](https://codemirror.net/6/docs/ref/#language.languageDataProp) it
  to the language's outer syntax node.
  */
  constructor(e, n, i = [], r = "") {
    this.data = e, this.name = r, Ne.prototype.hasOwnProperty("tree") || Object.defineProperty(Ne.prototype, "tree", { get() {
      return hi(this);
    } }), this.parser = n, this.extension = [
      hs.of(this),
      Ne.languageData.of((s, o, l) => {
        let a = Zp(s, o, l), c = a.type.prop(Ds);
        if (!c)
          return [];
        let u = s.facet(c), f = a.type.prop(a8);
        if (f) {
          let d = a.resolve(o - a.from, l);
          for (let h of f)
            if (h.test(d, s)) {
              let p = s.facet(h.facet);
              return h.type == "replace" ? p : p.concat(u);
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
    return Zp(e, n, i).type.prop(Ds) == this.data;
  }
  /**
  Find the document regions that were parsed using this language.
  The returned regions will _include_ any nested languages rooted
  in this language, when those exist.
  */
  findRegions(e) {
    let n = e.facet(hs);
    if (n?.data == this.data)
      return [{ from: 0, to: e.doc.length }];
    if (!n || !n.allowsNesting)
      return [];
    let i = [], r = (s, o) => {
      if (s.prop(Ds) == this.data) {
        i.push({ from: o, to: o + s.length });
        return;
      }
      let l = s.prop(Le.mounted);
      if (l) {
        if (l.tree.prop(Ds) == this.data) {
          if (l.overlay)
            for (let a of l.overlay)
              i.push({ from: a.from + o, to: a.to + o });
          else
            i.push({ from: o, to: o + s.length });
          return;
        } else if (l.overlay) {
          let a = i.length;
          if (r(l.tree, l.overlay[0].from + o), i.length > a)
            return;
        }
      }
      for (let a = 0; a < s.children.length; a++) {
        let c = s.children[a];
        c instanceof Xt && r(c, s.positions[a] + o);
      }
    };
    return r(hi(e), 0), i;
  }
  /**
  Indicates whether this language allows nested languages. The
  default implementation returns true.
  */
  get allowsNesting() {
    return !0;
  }
}
ii.setState = /* @__PURE__ */ mt.define();
function Zp(t, e, n) {
  let i = t.facet(hs), r = hi(t).topNode;
  if (!i || i.allowsNesting)
    for (let s = r; s; s = s.enter(e, n, Ft.ExcludeBuffers))
      s.type.isTop && (r = s);
  return r;
}
function hi(t) {
  let e = t.field(ii.state, !1);
  return e ? e.tree : Xt.empty;
}
class c8 {
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
let Os = null;
class ql {
  constructor(e, n, i = [], r, s, o, l, a) {
    this.parser = e, this.state = n, this.fragments = i, this.tree = r, this.treeLen = s, this.viewport = o, this.skipped = l, this.scheduleOn = a, this.parse = null, this.tempSkipped = [];
  }
  /**
  @internal
  */
  static create(e, n, i) {
    return new ql(e, n, [], Xt.empty, 0, i, [], null);
  }
  startParse() {
    return this.parser.startParse(new c8(this.state.doc), this.fragments);
  }
  /**
  @internal
  */
  work(e, n) {
    return n != null && n >= this.state.doc.length && (n = void 0), this.tree != Xt.empty && this.isDone(n ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
      var i;
      if (typeof e == "number") {
        let r = Date.now() + e;
        e = () => Date.now() > r;
      }
      for (this.parse || (this.parse = this.startParse()), n != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > n) && n < this.state.doc.length && this.parse.stopAt(n); ; ) {
        let r = this.parse.advance();
        if (r)
          if (this.fragments = this.withoutTempSkipped(_r.addTree(r, this.fragments, this.parse.stoppedAt != null)), this.treeLen = (i = this.parse.stoppedAt) !== null && i !== void 0 ? i : this.state.doc.length, this.tree = r, this.parse = null, this.treeLen < (n ?? this.state.doc.length))
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
    }), this.treeLen = e, this.tree = n, this.fragments = this.withoutTempSkipped(_r.addTree(this.tree, this.fragments, !0)), this.parse = null);
  }
  withContext(e) {
    let n = Os;
    Os = this;
    try {
      return e();
    } finally {
      Os = n;
    }
  }
  withoutTempSkipped(e) {
    for (let n; n = this.tempSkipped.pop(); )
      e = Qp(e, n.from, n.to);
    return e;
  }
  /**
  @internal
  */
  changes(e, n) {
    let { fragments: i, tree: r, treeLen: s, viewport: o, skipped: l } = this;
    if (this.takeTree(), !e.empty) {
      let a = [];
      if (e.iterChangedRanges((c, u, f, d) => a.push({ fromA: c, toA: u, fromB: f, toB: d })), i = _r.applyChanges(i, a), r = Xt.empty, s = 0, o = { from: e.mapPos(o.from, -1), to: e.mapPos(o.to, 1) }, this.skipped.length) {
        l = [];
        for (let c of this.skipped) {
          let u = e.mapPos(c.from, 1), f = e.mapPos(c.to, -1);
          u < f && l.push({ from: u, to: f });
        }
      }
    }
    return new ql(this.parser, n, i, r, s, o, l, this.scheduleOn);
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
      let { from: r, to: s } = this.skipped[i];
      r < e.to && s > e.from && (this.fragments = Qp(this.fragments, r, s), this.skipped.splice(i--, 1));
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
    return new class extends XD {
      createParse(n, i, r) {
        let s = r[0].from, o = r[r.length - 1].to;
        return {
          parsedPos: s,
          advance() {
            let a = Os;
            if (a) {
              for (let c of r)
                a.tempSkipped.push(c);
              e && (a.scheduleOn = a.scheduleOn ? Promise.all([a.scheduleOn, e]) : e);
            }
            return this.parsedPos = o, new Xt(Pn.none, [], [], o - s);
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
    return Os;
  }
}
function Qp(t, e, n) {
  return _r.applyChanges(t, [{ fromA: e, toA: n, fromB: e, toB: n }]);
}
class ds {
  constructor(e) {
    this.context = e, this.tree = e.tree;
  }
  apply(e) {
    if (!e.docChanged && this.tree == this.context.tree)
      return this;
    let n = this.context.changes(e.changes, e.state), i = this.context.treeLen == e.startState.doc.length ? void 0 : Math.max(e.changes.mapPos(this.context.treeLen), n.viewport.to);
    return n.work(20, i) || n.takeTree(), new ds(n);
  }
  static init(e) {
    let n = Math.min(3e3, e.doc.length), i = ql.create(e.facet(hs).parser, e, { from: 0, to: n });
    return i.work(20, n) || i.takeTree(), new ds(i);
  }
}
ii.state = /* @__PURE__ */ dr.define({
  create: ds.init,
  update(t, e) {
    for (let n of e.effects)
      if (n.is(ii.setState))
        return n.value;
    return e.startState.facet(hs) != e.state.facet(hs) ? ds.init(e.state) : t.apply(e);
  }
});
let cy = (t) => {
  let e = setTimeout(
    () => t(),
    500
    /* Work.MaxPause */
  );
  return () => clearTimeout(e);
};
typeof requestIdleCallback < "u" && (cy = (t) => {
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
const fc = typeof navigator < "u" && (!((uc = navigator.scheduling) === null || uc === void 0) && uc.isInputPending) ? () => navigator.scheduling.isInputPending() : null, u8 = /* @__PURE__ */ lr.fromClass(class {
  constructor(e) {
    this.view = e, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
  }
  update(e) {
    let n = this.view.state.field(ii.state).context;
    (n.updateViewport(e.view.viewport) || this.view.viewport.to > n.treeLen) && this.scheduleWork(), (e.docChanged || e.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(n);
  }
  scheduleWork() {
    if (this.working)
      return;
    let { state: e } = this.view, n = e.field(ii.state);
    (n.tree != n.context.tree || !n.context.isDone(e.doc.length)) && (this.working = cy(this.work));
  }
  work(e) {
    this.working = null;
    let n = Date.now();
    if (this.chunkEnd < n && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = n + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0)
      return;
    let { state: i, viewport: { to: r } } = this.view, s = i.field(ii.state);
    if (s.tree == s.context.tree && s.context.isDone(
      r + 1e5
      /* Work.MaxParseAhead */
    ))
      return;
    let o = Date.now() + Math.min(this.chunkBudget, 100, e && !fc ? Math.max(25, e.timeRemaining() - 5) : 1e9), l = s.context.treeLen < r && i.doc.length > r + 1e3, a = s.context.work(() => fc && fc() || Date.now() > o, r + (l ? 0 : 1e5));
    this.chunkBudget -= Date.now() - n, (a || this.chunkBudget <= 0) && (s.context.takeTree(), this.view.dispatch({ effects: ii.setState.of(new ds(s.context)) })), this.chunkBudget > 0 && !(a && !l) && this.scheduleWork(), this.checkAsyncSchedule(s.context);
  }
  checkAsyncSchedule(e) {
    e.scheduleOn && (this.workScheduled++, e.scheduleOn.then(() => this.scheduleWork()).catch((n) => ni(this.view.state, n)).then(() => this.workScheduled--), e.scheduleOn = null);
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
}), hs = /* @__PURE__ */ ve.define({
  combine(t) {
    return t.length ? t[0] : null;
  },
  enables: (t) => [
    ii.state,
    u8,
    we.contentAttributes.compute([t], (e) => {
      let n = e.facet(t);
      return n && n.name ? { "data-language": n.name } : {};
    })
  ]
}), f8 = /* @__PURE__ */ ve.define(), Uf = /* @__PURE__ */ ve.define({
  combine: (t) => {
    if (!t.length)
      return "  ";
    let e = t[0];
    if (!e || /\S/.test(e) || Array.from(e).some((n) => n != e[0]))
      throw new Error("Invalid indent unit: " + JSON.stringify(t[0]));
    return e;
  }
});
function Jl(t) {
  let e = t.facet(Uf);
  return e.charCodeAt(0) == 9 ? t.tabSize * e.length : e.length;
}
function Xl(t, e) {
  let n = "", i = t.tabSize, r = t.facet(Uf)[0];
  if (r == "	") {
    for (; e >= i; )
      n += "	", e -= i;
    r = " ";
  }
  for (let s = 0; s < e; s++)
    n += r;
  return n;
}
function uy(t, e) {
  t instanceof Ne && (t = new Ta(t));
  for (let i of t.state.facet(f8)) {
    let r = i(t, e);
    if (r !== void 0)
      return r;
  }
  let n = hi(t.state);
  return n.length >= e ? h8(t, n, e) : null;
}
class Ta {
  /**
  Create an indent context.
  */
  constructor(e, n = {}) {
    this.state = e, this.options = n, this.unit = Jl(e);
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
    let i = this.state.doc.lineAt(e), { simulateBreak: r, simulateDoubleBreak: s } = this.options;
    return r != null && r >= i.from && r <= i.to ? s && r == e ? { text: "", from: e } : (n < 0 ? r < e : r <= e) ? { text: i.text.slice(r - i.from), from: r } : { text: i.text.slice(0, r - i.from), from: i.from } : i;
  }
  /**
  Get the text directly after `pos`, either the entire line
  or the next 100 characters, whichever is shorter.
  */
  textAfterPos(e, n = 1) {
    if (this.options.simulateDoubleBreak && e == this.options.simulateBreak)
      return "";
    let { text: i, from: r } = this.lineAt(e, n);
    return i.slice(e - r, Math.min(i.length, e + 100 - r));
  }
  /**
  Find the column for the given position.
  */
  column(e, n = 1) {
    let { text: i, from: r } = this.lineAt(e, n), s = this.countColumn(i, e - r), o = this.options.overrideIndentation ? this.options.overrideIndentation(r) : -1;
    return o > -1 && (s += o - this.countColumn(i, i.search(/\S|$/))), s;
  }
  /**
  Find the column position (taking tabs into account) of the given
  position in the given string.
  */
  countColumn(e, n = e.length) {
    return Ca(e, this.state.tabSize, n);
  }
  /**
  Find the indentation column of the line at the given point.
  */
  lineIndent(e, n = 1) {
    let { text: i, from: r } = this.lineAt(e, n), s = this.options.overrideIndentation;
    if (s) {
      let o = s(r);
      if (o > -1)
        return o;
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
const d8 = /* @__PURE__ */ new Le();
function h8(t, e, n) {
  let i = e.resolveStack(n), r = e.resolveInner(n, -1).resolve(n, 0).enterUnfinishedNodesBefore(n);
  if (r != i.node) {
    let s = [];
    for (let o = r; o && !(o.from == i.node.from && o.type == i.node.type); o = o.parent)
      s.push(o);
    for (let o = s.length - 1; o >= 0; o--)
      i = { node: s[o], next: i };
  }
  return fy(i, t, n);
}
function fy(t, e, n) {
  for (let i = t; i; i = i.next) {
    let r = g8(i.node);
    if (r)
      return r(jf.create(e, n, i));
  }
  return 0;
}
function p8(t) {
  return t.pos == t.options.simulateBreak && t.options.simulateDoubleBreak;
}
function g8(t) {
  let e = t.type.prop(d8);
  if (e)
    return e;
  let n = t.firstChild, i;
  if (n && (i = n.type.prop(Le.closedBy))) {
    let r = t.lastChild, s = r && i.indexOf(r.name) > -1;
    return (o) => b8(o, !0, 1, void 0, s && !p8(o) ? r.from : void 0);
  }
  return t.parent == null ? m8 : null;
}
function m8() {
  return 0;
}
class jf extends Ta {
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
    return new jf(e, n, i);
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
      if (v8(i, e))
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
    return fy(this.context.next, this.base, this.pos);
  }
}
function v8(t, e) {
  for (let n = e; n; n = n.parent)
    if (t == n)
      return !0;
  return !1;
}
function y8(t) {
  let e = t.node, n = e.childAfter(e.from), i = e.lastChild;
  if (!n)
    return null;
  let r = t.options.simulateBreak, s = t.state.doc.lineAt(n.from), o = r == null || r <= s.from ? s.to : Math.min(s.to, r);
  for (let l = n.to; ; ) {
    let a = e.childAfter(l);
    if (!a || a == i)
      return null;
    if (!a.type.isSkipped) {
      if (a.from >= o)
        return null;
      let c = /^ */.exec(s.text.slice(n.to - s.from))[0].length;
      return { from: n.from, to: n.to + c };
    }
    l = a.to;
  }
}
function b8(t, e, n, i, r) {
  let s = t.textAfter, o = s.match(/^\s*/)[0].length, l = i && s.slice(o, o + i.length) == i || r == t.pos + o, a = y8(t);
  return a ? l ? t.column(a.from) : t.column(a.to) : t.baseIndent + (l ? 0 : t.unit * n);
}
class Aa {
  constructor(e, n) {
    this.specs = e;
    let i;
    function r(l) {
      let a = rr.newName();
      return (i || (i = /* @__PURE__ */ Object.create(null)))["." + a] = l, a;
    }
    const s = typeof n.all == "string" ? n.all : n.all ? r(n.all) : void 0, o = n.scope;
    this.scope = o instanceof ii ? (l) => l.prop(Ds) == o.data : o ? (l) => l == o : void 0, this.style = ay(e.map((l) => ({
      tag: l.tag,
      class: l.class || r(Object.assign({}, l, { tag: null }))
    })), {
      all: s
    }).style, this.module = i ? new rr(i) : null, this.themeType = n.themeType;
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
    return new Aa(e, n || {});
  }
}
const Cu = /* @__PURE__ */ ve.define(), w8 = /* @__PURE__ */ ve.define({
  combine(t) {
    return t.length ? [t[0]] : null;
  }
});
function dc(t) {
  let e = t.facet(Cu);
  return e.length ? e : t.facet(w8);
}
function S8(t, e) {
  let n = [k8], i;
  return t instanceof Aa && (t.module && n.push(we.styleModule.of(t.module)), i = t.themeType), i ? n.push(Cu.computeN([we.darkTheme], (r) => r.facet(we.darkTheme) == (i == "dark") ? [t] : [])) : n.push(Cu.of(t)), n;
}
class C8 {
  constructor(e) {
    this.markCache = /* @__PURE__ */ Object.create(null), this.tree = hi(e.state), this.decorations = this.buildDeco(e, dc(e.state)), this.decoratedTo = e.viewport.to;
  }
  update(e) {
    let n = hi(e.state), i = dc(e.state), r = i != dc(e.startState), { viewport: s } = e.view, o = e.changes.mapPos(this.decoratedTo, 1);
    n.length < s.to && !r && n.type == this.tree.type && o >= s.to ? (this.decorations = this.decorations.map(e.changes), this.decoratedTo = o) : (n != this.tree || e.viewportChanged || r) && (this.tree = n, this.decorations = this.buildDeco(e.view, i), this.decoratedTo = s.to);
  }
  buildDeco(e, n) {
    if (!n || !this.tree.length)
      return Ht.none;
    let i = new oo();
    for (let { from: r, to: s } of e.visibleRanges)
      s8(this.tree, n, (o, l, a) => {
        i.add(o, l, this.markCache[a] || (this.markCache[a] = Ht.mark({ class: a })));
      }, r, s);
    return i.finish();
  }
}
const k8 = /* @__PURE__ */ Mf.high(/* @__PURE__ */ lr.fromClass(C8, {
  decorations: (t) => t.decorations
})), _8 = 1e4, E8 = "()[]{}", T8 = /* @__PURE__ */ new Le();
function ku(t, e, n) {
  let i = t.prop(e < 0 ? Le.openedBy : Le.closedBy);
  if (i)
    return i;
  if (t.name.length == 1) {
    let r = n.indexOf(t.name);
    if (r > -1 && r % 2 == (e < 0 ? 1 : 0))
      return [n[r + e]];
  }
  return null;
}
function _u(t) {
  let e = t.type.prop(T8);
  return e ? e(t.node) : t;
}
function Ur(t, e, n, i = {}) {
  let r = i.maxScanDistance || _8, s = i.brackets || E8, o = hi(t), l = o.resolveInner(e, n);
  for (let a = l; a; a = a.parent) {
    let c = ku(a.type, n, s);
    if (c && a.from < a.to) {
      let u = _u(a);
      if (u && (n > 0 ? e >= u.from && e < u.to : e > u.from && e <= u.to))
        return A8(t, e, n, a, u, c, s);
    }
  }
  return O8(t, e, n, o, l.type, r, s);
}
function A8(t, e, n, i, r, s, o) {
  let l = i.parent, a = { from: r.from, to: r.to }, c = 0, u = l?.cursor();
  if (u && (n < 0 ? u.childBefore(i.from) : u.childAfter(i.to)))
    do
      if (n < 0 ? u.to <= i.from : u.from >= i.to) {
        if (c == 0 && s.indexOf(u.type.name) > -1 && u.from < u.to) {
          let f = _u(u);
          return { start: a, end: f ? { from: f.from, to: f.to } : void 0, matched: !0 };
        } else if (ku(u.type, n, o))
          c++;
        else if (ku(u.type, -n, o)) {
          if (c == 0) {
            let f = _u(u);
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
function O8(t, e, n, i, r, s, o) {
  let l = n < 0 ? t.sliceDoc(e - 1, e) : t.sliceDoc(e, e + 1), a = o.indexOf(l);
  if (a < 0 || a % 2 == 0 != n > 0)
    return null;
  let c = { from: n < 0 ? e - 1 : e, to: n > 0 ? e + 1 : e }, u = t.doc.iterRange(e, n > 0 ? t.doc.length : 0), f = 0;
  for (let d = 0; !u.next().done && d <= s; ) {
    let h = u.value;
    n < 0 && (d += h.length);
    let p = e + d * n;
    for (let v = n > 0 ? 0 : h.length - 1, y = n > 0 ? h.length : -1; v != y; v += n) {
      let g = o.indexOf(h[v]);
      if (!(g < 0 || i.resolveInner(p + v, 1).type != r))
        if (g % 2 == 0 == n > 0)
          f++;
        else {
          if (f == 1)
            return { start: c, end: { from: p + v, to: p + v + 1 }, matched: g >> 1 == a >> 1 };
          f--;
        }
    }
    n > 0 && (d += h.length);
  }
  return u.done ? { start: c, matched: !1 } : null;
}
const x8 = /* @__PURE__ */ Object.create(null), eg = [Pn.none], tg = [], ng = /* @__PURE__ */ Object.create(null), M8 = /* @__PURE__ */ Object.create(null);
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
  M8[t] = /* @__PURE__ */ L8(x8, e);
function hc(t, e) {
  tg.indexOf(t) > -1 || (tg.push(t), console.warn(e));
}
function L8(t, e) {
  let n = [];
  for (let l of e.split(" ")) {
    let a = [];
    for (let c of l.split(".")) {
      let u = t[c] || Se[c];
      u ? typeof u == "function" ? a.length ? a = a.map(u) : hc(c, `Modifier ${c} used at start of tag`) : a.length ? hc(c, `Tag ${c} used as modifier`) : a = Array.isArray(u) ? u : [u] : hc(c, `Unknown highlighting tag ${c}`);
    }
    for (let c of a)
      n.push(c);
  }
  if (!n.length)
    return 0;
  let i = e.replace(/ /g, "_"), r = i + " " + n.map((l) => l.id), s = ng[r];
  if (s)
    return s.id;
  let o = ng[r] = Pn.define({
    id: eg.length,
    name: i,
    props: [i8({ [i]: n })]
  });
  return eg.push(o), o.id;
}
Tt.RTL, Tt.LTR;
const I8 = (t) => {
  let { state: e } = t, n = e.doc.lineAt(e.selection.main.from), i = Yf(t.state, n.from);
  return i.line ? P8(t) : i.block ? R8(t) : !1;
};
function Kf(t, e) {
  return ({ state: n, dispatch: i }) => {
    if (n.readOnly)
      return !1;
    let r = t(e, n);
    return r ? (i(n.update(r)), !0) : !1;
  };
}
const P8 = /* @__PURE__ */ Kf(
  $8,
  0
  /* CommentOption.Toggle */
), D8 = /* @__PURE__ */ Kf(
  dy,
  0
  /* CommentOption.Toggle */
), R8 = /* @__PURE__ */ Kf(
  (t, e) => dy(t, e, F8(e)),
  0
  /* CommentOption.Toggle */
);
function Yf(t, e) {
  let n = t.languageDataAt("commentTokens", e);
  return n.length ? n[0] : {};
}
const xs = 50;
function N8(t, { open: e, close: n }, i, r) {
  let s = t.sliceDoc(i - xs, i), o = t.sliceDoc(r, r + xs), l = /\s*$/.exec(s)[0].length, a = /^\s*/.exec(o)[0].length, c = s.length - l;
  if (s.slice(c - e.length, c) == e && o.slice(a, a + n.length) == n)
    return {
      open: { pos: i - l, margin: l && 1 },
      close: { pos: r + a, margin: a && 1 }
    };
  let u, f;
  r - i <= 2 * xs ? u = f = t.sliceDoc(i, r) : (u = t.sliceDoc(i, i + xs), f = t.sliceDoc(r - xs, r));
  let d = /^\s*/.exec(u)[0].length, h = /\s*$/.exec(f)[0].length, p = f.length - h - n.length;
  return u.slice(d, d + e.length) == e && f.slice(p, p + n.length) == n ? {
    open: {
      pos: i + d + e.length,
      margin: /\s/.test(u.charAt(d + e.length)) ? 1 : 0
    },
    close: {
      pos: r - h - n.length,
      margin: /\s/.test(f.charAt(p - 1)) ? 1 : 0
    }
  } : null;
}
function F8(t) {
  let e = [];
  for (let n of t.selection.ranges) {
    let i = t.doc.lineAt(n.from), r = n.to <= i.to ? i : t.doc.lineAt(n.to);
    r.from > i.from && r.from == n.to && (r = n.to == i.to + 1 ? i : t.doc.lineAt(n.to - 1));
    let s = e.length - 1;
    s >= 0 && e[s].to > i.from ? e[s].to = r.to : e.push({ from: i.from + /^\s*/.exec(i.text)[0].length, to: r.to });
  }
  return e;
}
function dy(t, e, n = e.selection.ranges) {
  let i = n.map((s) => Yf(e, s.from).block);
  if (!i.every((s) => s))
    return null;
  let r = n.map((s, o) => N8(e, i[o], s.from, s.to));
  if (t != 2 && !r.every((s) => s))
    return { changes: e.changes(n.map((s, o) => r[o] ? [] : [{ from: s.from, insert: i[o].open + " " }, { from: s.to, insert: " " + i[o].close }])) };
  if (t != 1 && r.some((s) => s)) {
    let s = [];
    for (let o = 0, l; o < r.length; o++)
      if (l = r[o]) {
        let a = i[o], { open: c, close: u } = l;
        s.push({ from: c.pos - a.open.length, to: c.pos + c.margin }, { from: u.pos - u.margin, to: u.pos + a.close.length });
      }
    return { changes: s };
  }
  return null;
}
function $8(t, e, n = e.selection.ranges) {
  let i = [], r = -1;
  for (let { from: s, to: o } of n) {
    let l = i.length, a = 1e9, c = Yf(e, s).line;
    if (c) {
      for (let u = s; u <= o; ) {
        let f = e.doc.lineAt(u);
        if (f.from > r && (s == o || o > f.from)) {
          r = f.from;
          let d = /^\s*/.exec(f.text)[0].length, h = d == f.length, p = f.text.slice(d, d + c.length) == c ? d : -1;
          d < f.text.length && d < a && (a = d), i.push({ line: f, comment: p, token: c, indent: d, empty: h, single: !1 });
        }
        u = f.to + 1;
      }
      if (a < 1e9)
        for (let u = l; u < i.length; u++)
          i[u].indent < i[u].line.text.length && (i[u].indent = a);
      i.length == l + 1 && (i[l].single = !0);
    }
  }
  if (t != 2 && i.some((s) => s.comment < 0 && (!s.empty || s.single))) {
    let s = [];
    for (let { line: l, token: a, indent: c, empty: u, single: f } of i)
      (f || !u) && s.push({ from: l.from + c, insert: a + " " });
    let o = e.changes(s);
    return { changes: o, selection: e.selection.map(o, 1) };
  } else if (t != 1 && i.some((s) => s.comment >= 0)) {
    let s = [];
    for (let { line: o, comment: l, token: a } of i)
      if (l >= 0) {
        let c = o.from + l, u = c + a.length;
        o.text[u - o.from] == " " && u++, s.push({ from: c, to: u });
      }
    return { changes: s };
  }
  return null;
}
const Eu = /* @__PURE__ */ hr.define(), B8 = /* @__PURE__ */ hr.define(), V8 = /* @__PURE__ */ ve.define(), hy = /* @__PURE__ */ ve.define({
  combine(t) {
    return r0(t, {
      minDepth: 100,
      newGroupDelay: 500,
      joinToEvent: (e, n) => n
    }, {
      minDepth: Math.max,
      newGroupDelay: Math.min,
      joinToEvent: (e, n) => (i, r) => e(i, r) || n(i, r)
    });
  }
}), py = /* @__PURE__ */ dr.define({
  create() {
    return ri.empty;
  },
  update(t, e) {
    let n = e.state.facet(hy), i = e.annotation(Eu);
    if (i) {
      let a = an.fromTransaction(e, i.selection), c = i.side, u = c == 0 ? t.undone : t.done;
      return a ? u = Zl(u, u.length, n.minDepth, a) : u = vy(u, e.startState.selection), new ri(c == 0 ? i.rest : u, c == 0 ? u : i.rest);
    }
    let r = e.annotation(B8);
    if ((r == "full" || r == "before") && (t = t.isolate()), e.annotation(Et.addToHistory) === !1)
      return e.changes.empty ? t : t.addMapping(e.changes.desc);
    let s = an.fromTransaction(e), o = e.annotation(Et.time), l = e.annotation(Et.userEvent);
    return s ? t = t.addChanges(s, o, l, n, e) : e.selection && (t = t.addSelection(e.startState.selection, o, l, n.newGroupDelay)), (r == "full" || r == "after") && (t = t.isolate()), t;
  },
  toJSON(t) {
    return { done: t.done.map((e) => e.toJSON()), undone: t.undone.map((e) => e.toJSON()) };
  },
  fromJSON(t) {
    return new ri(t.done.map(an.fromJSON), t.undone.map(an.fromJSON));
  }
});
function H8(t = {}) {
  return [
    py,
    hy.of(t),
    we.domEventHandlers({
      beforeinput(e, n) {
        let i = e.inputType == "historyUndo" ? gy : e.inputType == "historyRedo" ? Tu : null;
        return i ? (e.preventDefault(), i(n)) : !1;
      }
    })
  ];
}
function Oa(t, e) {
  return function({ state: n, dispatch: i }) {
    if (!e && n.readOnly)
      return !1;
    let r = n.field(py, !1);
    if (!r)
      return !1;
    let s = r.pop(t, n, e);
    return s ? (i(s), !0) : !1;
  };
}
const gy = /* @__PURE__ */ Oa(0, !1), Tu = /* @__PURE__ */ Oa(1, !1), W8 = /* @__PURE__ */ Oa(0, !0), z8 = /* @__PURE__ */ Oa(1, !0);
class an {
  constructor(e, n, i, r, s) {
    this.changes = e, this.effects = n, this.mapped = i, this.startSelection = r, this.selectionsAfter = s;
  }
  setSelAfter(e) {
    return new an(this.changes, this.effects, this.mapped, this.startSelection, e);
  }
  toJSON() {
    var e, n, i;
    return {
      changes: (e = this.changes) === null || e === void 0 ? void 0 : e.toJSON(),
      mapped: (n = this.mapped) === null || n === void 0 ? void 0 : n.toJSON(),
      startSelection: (i = this.startSelection) === null || i === void 0 ? void 0 : i.toJSON(),
      selectionsAfter: this.selectionsAfter.map((r) => r.toJSON())
    };
  }
  static fromJSON(e) {
    return new an(e.changes && kt.fromJSON(e.changes), [], e.mapped && li.fromJSON(e.mapped), e.startSelection && ee.fromJSON(e.startSelection), e.selectionsAfter.map(ee.fromJSON));
  }
  // This does not check `addToHistory` and such, it assumes the
  // transaction needs to be converted to an item. Returns null when
  // there are no changes or effects in the transaction.
  static fromTransaction(e, n) {
    let i = Cn;
    for (let r of e.startState.facet(V8)) {
      let s = r(e);
      s.length && (i = i.concat(s));
    }
    return !i.length && e.changes.empty ? null : new an(e.changes.invert(e.startState.doc), i, void 0, n || e.startState.selection, Cn);
  }
  static selection(e) {
    return new an(void 0, Cn, void 0, void 0, e);
  }
}
function Zl(t, e, n, i) {
  let r = e + 1 > n + 20 ? e - n - 1 : 0, s = t.slice(r, e);
  return s.push(i), s;
}
function G8(t, e) {
  let n = [], i = !1;
  return t.iterChangedRanges((r, s) => n.push(r, s)), e.iterChangedRanges((r, s, o, l) => {
    for (let a = 0; a < n.length; ) {
      let c = n[a++], u = n[a++];
      l >= c && o <= u && (i = !0);
    }
  }), i;
}
function U8(t, e) {
  return t.ranges.length == e.ranges.length && t.ranges.filter((n, i) => n.empty != e.ranges[i].empty).length === 0;
}
function my(t, e) {
  return t.length ? e.length ? t.concat(e) : t : e;
}
const Cn = [], j8 = 200;
function vy(t, e) {
  if (t.length) {
    let n = t[t.length - 1], i = n.selectionsAfter.slice(Math.max(0, n.selectionsAfter.length - j8));
    return i.length && i[i.length - 1].eq(e) ? t : (i.push(e), Zl(t, t.length - 1, 1e9, n.setSelAfter(i)));
  } else
    return [an.selection([e])];
}
function K8(t) {
  let e = t[t.length - 1], n = t.slice();
  return n[t.length - 1] = e.setSelAfter(e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)), n;
}
function pc(t, e) {
  if (!t.length)
    return t;
  let n = t.length, i = Cn;
  for (; n; ) {
    let r = Y8(t[n - 1], e, i);
    if (r.changes && !r.changes.empty || r.effects.length) {
      let s = t.slice(0, n);
      return s[n - 1] = r, s;
    } else
      e = r.mapped, n--, i = r.selectionsAfter;
  }
  return i.length ? [an.selection(i)] : Cn;
}
function Y8(t, e, n) {
  let i = my(t.selectionsAfter.length ? t.selectionsAfter.map((l) => l.map(e)) : Cn, n);
  if (!t.changes)
    return an.selection(i);
  let r = t.changes.map(e), s = e.mapDesc(t.changes, !0), o = t.mapped ? t.mapped.composeDesc(s) : s;
  return new an(r, mt.mapEffects(t.effects, e), o, t.startSelection.map(s), i);
}
const q8 = /^(input\.type|delete)($|\.)/;
class ri {
  constructor(e, n, i = 0, r = void 0) {
    this.done = e, this.undone = n, this.prevTime = i, this.prevUserEvent = r;
  }
  isolate() {
    return this.prevTime ? new ri(this.done, this.undone) : this;
  }
  addChanges(e, n, i, r, s) {
    let o = this.done, l = o[o.length - 1];
    return l && l.changes && !l.changes.empty && e.changes && (!i || q8.test(i)) && (!l.selectionsAfter.length && n - this.prevTime < r.newGroupDelay && r.joinToEvent(s, G8(l.changes, e.changes)) || // For compose (but not compose.start) events, always join with previous event
    i == "input.type.compose") ? o = Zl(o, o.length - 1, r.minDepth, new an(e.changes.compose(l.changes), my(mt.mapEffects(e.effects, l.changes), l.effects), l.mapped, l.startSelection, Cn)) : o = Zl(o, o.length, r.minDepth, e), new ri(o, Cn, n, i);
  }
  addSelection(e, n, i, r) {
    let s = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Cn;
    return s.length > 0 && n - this.prevTime < r && i == this.prevUserEvent && i && /^select($|\.)/.test(i) && U8(s[s.length - 1], e) ? this : new ri(vy(this.done, e), this.undone, n, i);
  }
  addMapping(e) {
    return new ri(pc(this.done, e), pc(this.undone, e), this.prevTime, this.prevUserEvent);
  }
  pop(e, n, i) {
    let r = e == 0 ? this.done : this.undone;
    if (r.length == 0)
      return null;
    let s = r[r.length - 1], o = s.selectionsAfter[0] || n.selection;
    if (i && s.selectionsAfter.length)
      return n.update({
        selection: s.selectionsAfter[s.selectionsAfter.length - 1],
        annotations: Eu.of({ side: e, rest: K8(r), selection: o }),
        userEvent: e == 0 ? "select.undo" : "select.redo",
        scrollIntoView: !0
      });
    if (s.changes) {
      let l = r.length == 1 ? Cn : r.slice(0, r.length - 1);
      return s.mapped && (l = pc(l, s.mapped)), n.update({
        changes: s.changes,
        selection: s.startSelection,
        effects: s.effects,
        annotations: Eu.of({ side: e, rest: l, selection: o }),
        filter: !1,
        userEvent: e == 0 ? "undo" : "redo",
        scrollIntoView: !0
      });
    } else
      return null;
  }
}
ri.empty = /* @__PURE__ */ new ri(Cn, Cn);
const J8 = [
  { key: "Mod-z", run: gy, preventDefault: !0 },
  { key: "Mod-y", mac: "Mod-Shift-z", run: Tu, preventDefault: !0 },
  { linux: "Ctrl-Shift-z", run: Tu, preventDefault: !0 },
  { key: "Mod-u", run: W8, preventDefault: !0 },
  { key: "Alt-u", mac: "Mod-Shift-u", run: z8, preventDefault: !0 }
];
function ys(t, e) {
  return ee.create(t.ranges.map(e), t.mainIndex);
}
function gi(t, e) {
  return t.update({ selection: e, scrollIntoView: !0, userEvent: "select" });
}
function Gn({ state: t, dispatch: e }, n) {
  let i = ys(t.selection, n);
  return i.eq(t.selection, !0) ? !1 : (e(gi(t, i)), !0);
}
function xa(t, e) {
  return ee.cursor(e ? t.to : t.from);
}
function yy(t, e) {
  return Gn(t, (n) => n.empty ? t.moveByChar(n, e) : xa(n, e));
}
function Zt(t) {
  return t.textDirectionAt(t.state.selection.main.head) == Tt.LTR;
}
const by = (t) => yy(t, !Zt(t)), wy = (t) => yy(t, Zt(t));
function Sy(t, e) {
  return Gn(t, (n) => n.empty ? t.moveByGroup(n, e) : xa(n, e));
}
const X8 = (t) => Sy(t, !Zt(t)), Z8 = (t) => Sy(t, Zt(t));
function Q8(t, e, n) {
  if (e.type.prop(n))
    return !0;
  let i = e.to - e.from;
  return i && (i > 2 || /[^\s,.;:]/.test(t.sliceDoc(e.from, e.to))) || e.firstChild;
}
function Ma(t, e, n) {
  let i = hi(t).resolveInner(e.head), r = n ? Le.closedBy : Le.openedBy;
  for (let a = e.head; ; ) {
    let c = n ? i.childAfter(a) : i.childBefore(a);
    if (!c)
      break;
    Q8(t, c, r) ? i = c : a = n ? c.to : c.from;
  }
  let s = i.type.prop(r), o, l;
  return s && (o = n ? Ur(t, i.from, 1) : Ur(t, i.to, -1)) && o.matched ? l = n ? o.end.to : o.end.from : l = n ? i.to : i.from, ee.cursor(l, n ? -1 : 1);
}
const e3 = (t) => Gn(t, (e) => Ma(t.state, e, !Zt(t))), t3 = (t) => Gn(t, (e) => Ma(t.state, e, Zt(t)));
function Cy(t, e) {
  return Gn(t, (n) => {
    if (!n.empty)
      return xa(n, e);
    let i = t.moveVertically(n, e);
    return i.head != n.head ? i : t.moveToLineBoundary(n, e);
  });
}
const ky = (t) => Cy(t, !1), _y = (t) => Cy(t, !0);
function Ey(t) {
  let e = t.scrollDOM.clientHeight < t.scrollDOM.scrollHeight - 2, n = 0, i = 0, r;
  if (e) {
    for (let s of t.state.facet(we.scrollMargins)) {
      let o = s(t);
      o?.top && (n = Math.max(o?.top, n)), o?.bottom && (i = Math.max(o?.bottom, i));
    }
    r = t.scrollDOM.clientHeight - n - i;
  } else
    r = (t.dom.ownerDocument.defaultView || window).innerHeight;
  return {
    marginTop: n,
    marginBottom: i,
    selfScroll: e,
    height: Math.max(t.defaultLineHeight, r - 5)
  };
}
function Ty(t, e) {
  let n = Ey(t), { state: i } = t, r = ys(i.selection, (o) => o.empty ? t.moveVertically(o, e, n.height) : xa(o, e));
  if (r.eq(i.selection))
    return !1;
  let s;
  if (n.selfScroll) {
    let o = t.coordsAtPos(i.selection.main.head), l = t.scrollDOM.getBoundingClientRect(), a = l.top + n.marginTop, c = l.bottom - n.marginBottom;
    o && o.top > a && o.bottom < c && (s = we.scrollIntoView(r.main.head, { y: "start", yMargin: o.top - a }));
  }
  return t.dispatch(gi(i, r), { effects: s }), !0;
}
const ig = (t) => Ty(t, !1), Au = (t) => Ty(t, !0);
function pr(t, e, n) {
  let i = t.lineBlockAt(e.head), r = t.moveToLineBoundary(e, n);
  if (r.head == e.head && r.head != (n ? i.to : i.from) && (r = t.moveToLineBoundary(e, n, !1)), !n && r.head == i.from && i.length) {
    let s = /^\s*/.exec(t.state.sliceDoc(i.from, Math.min(i.from + 100, i.to)))[0].length;
    s && e.head != i.from + s && (r = ee.cursor(i.from + s));
  }
  return r;
}
const n3 = (t) => Gn(t, (e) => pr(t, e, !0)), i3 = (t) => Gn(t, (e) => pr(t, e, !1)), r3 = (t) => Gn(t, (e) => pr(t, e, !Zt(t))), s3 = (t) => Gn(t, (e) => pr(t, e, Zt(t))), o3 = (t) => Gn(t, (e) => ee.cursor(t.lineBlockAt(e.head).from, 1)), l3 = (t) => Gn(t, (e) => ee.cursor(t.lineBlockAt(e.head).to, -1));
function a3(t, e, n) {
  let i = !1, r = ys(t.selection, (s) => {
    let o = Ur(t, s.head, -1) || Ur(t, s.head, 1) || s.head > 0 && Ur(t, s.head - 1, 1) || s.head < t.doc.length && Ur(t, s.head + 1, -1);
    if (!o || !o.end)
      return s;
    i = !0;
    let l = o.start.from == s.head ? o.end.to : o.end.from;
    return ee.cursor(l);
  });
  return i ? (e(gi(t, r)), !0) : !1;
}
const c3 = ({ state: t, dispatch: e }) => a3(t, e);
function Dn(t, e) {
  let n = ys(t.state.selection, (i) => {
    let r = e(i);
    return ee.range(i.anchor, r.head, r.goalColumn, r.bidiLevel || void 0);
  });
  return n.eq(t.state.selection) ? !1 : (t.dispatch(gi(t.state, n)), !0);
}
function Ay(t, e) {
  return Dn(t, (n) => t.moveByChar(n, e));
}
const Oy = (t) => Ay(t, !Zt(t)), xy = (t) => Ay(t, Zt(t));
function My(t, e) {
  return Dn(t, (n) => t.moveByGroup(n, e));
}
const u3 = (t) => My(t, !Zt(t)), f3 = (t) => My(t, Zt(t)), d3 = (t) => Dn(t, (e) => Ma(t.state, e, !Zt(t))), h3 = (t) => Dn(t, (e) => Ma(t.state, e, Zt(t)));
function Ly(t, e) {
  return Dn(t, (n) => t.moveVertically(n, e));
}
const Iy = (t) => Ly(t, !1), Py = (t) => Ly(t, !0);
function Dy(t, e) {
  return Dn(t, (n) => t.moveVertically(n, e, Ey(t).height));
}
const rg = (t) => Dy(t, !1), sg = (t) => Dy(t, !0), p3 = (t) => Dn(t, (e) => pr(t, e, !0)), g3 = (t) => Dn(t, (e) => pr(t, e, !1)), m3 = (t) => Dn(t, (e) => pr(t, e, !Zt(t))), v3 = (t) => Dn(t, (e) => pr(t, e, Zt(t))), y3 = (t) => Dn(t, (e) => ee.cursor(t.lineBlockAt(e.head).from)), b3 = (t) => Dn(t, (e) => ee.cursor(t.lineBlockAt(e.head).to)), og = ({ state: t, dispatch: e }) => (e(gi(t, { anchor: 0 })), !0), lg = ({ state: t, dispatch: e }) => (e(gi(t, { anchor: t.doc.length })), !0), ag = ({ state: t, dispatch: e }) => (e(gi(t, { anchor: t.selection.main.anchor, head: 0 })), !0), cg = ({ state: t, dispatch: e }) => (e(gi(t, { anchor: t.selection.main.anchor, head: t.doc.length })), !0), w3 = ({ state: t, dispatch: e }) => (e(t.update({ selection: { anchor: 0, head: t.doc.length }, userEvent: "select" })), !0), S3 = ({ state: t, dispatch: e }) => {
  let n = La(t).map(({ from: i, to: r }) => ee.range(i, Math.min(r + 1, t.doc.length)));
  return e(t.update({ selection: ee.create(n), userEvent: "select" })), !0;
}, C3 = ({ state: t, dispatch: e }) => {
  let n = ys(t.selection, (i) => {
    let r = hi(t), s = r.resolveStack(i.from, 1);
    if (i.empty) {
      let o = r.resolveStack(i.from, -1);
      o.node.from >= s.node.from && o.node.to <= s.node.to && (s = o);
    }
    for (let o = s; o; o = o.next) {
      let { node: l } = o;
      if ((l.from < i.from && l.to >= i.to || l.to > i.to && l.from <= i.from) && o.next)
        return ee.range(l.to, l.from);
    }
    return i;
  });
  return n.eq(t.selection) ? !1 : (e(gi(t, n)), !0);
}, k3 = ({ state: t, dispatch: e }) => {
  let n = t.selection, i = null;
  return n.ranges.length > 1 ? i = ee.create([n.main]) : n.main.empty || (i = ee.create([ee.cursor(n.main.head)])), i ? (e(gi(t, i)), !0) : !1;
};
function ko(t, e) {
  if (t.state.readOnly)
    return !1;
  let n = "delete.selection", { state: i } = t, r = i.changeByRange((s) => {
    let { from: o, to: l } = s;
    if (o == l) {
      let a = e(s);
      a < o ? (n = "delete.backward", a = sl(t, a, !1)) : a > o && (n = "delete.forward", a = sl(t, a, !0)), o = Math.min(o, a), l = Math.max(l, a);
    } else
      o = sl(t, o, !1), l = sl(t, l, !0);
    return o == l ? { range: s } : { changes: { from: o, to: l }, range: ee.cursor(o, o < s.head ? -1 : 1) };
  });
  return r.changes.empty ? !1 : (t.dispatch(i.update(r, {
    scrollIntoView: !0,
    userEvent: n,
    effects: n == "delete.selection" ? we.announce.of(i.phrase("Selection deleted")) : void 0
  })), !0);
}
function sl(t, e, n) {
  if (t instanceof we)
    for (let i of t.state.facet(we.atomicRanges).map((r) => r(t)))
      i.between(e, e, (r, s) => {
        r < e && s > e && (e = n ? s : r);
      });
  return e;
}
const Ry = (t, e, n) => ko(t, (i) => {
  let r = i.from, { state: s } = t, o = s.doc.lineAt(r), l, a;
  if (n && !e && r > o.from && r < o.from + 200 && !/[^ \t]/.test(l = o.text.slice(0, r - o.from))) {
    if (l[l.length - 1] == "	")
      return r - 1;
    let c = Ca(l, s.tabSize), u = c % Jl(s) || Jl(s);
    for (let f = 0; f < u && l[l.length - 1 - f] == " "; f++)
      r--;
    a = r;
  } else
    a = tn(o.text, r - o.from, e, e) + o.from, a == r && o.number != (e ? s.doc.lines : 1) ? a += e ? 1 : -1 : !e && /[\ufe00-\ufe0f]/.test(o.text.slice(a - o.from, r - o.from)) && (a = tn(o.text, a - o.from, !1, !1) + o.from);
  return a;
}), Ou = (t) => Ry(t, !1, !0), Ny = (t) => Ry(t, !0, !1), Fy = (t, e) => ko(t, (n) => {
  let i = n.head, { state: r } = t, s = r.doc.lineAt(i), o = r.charCategorizer(i);
  for (let l = null; ; ) {
    if (i == (e ? s.to : s.from)) {
      i == n.head && s.number != (e ? r.doc.lines : 1) && (i += e ? 1 : -1);
      break;
    }
    let a = tn(s.text, i - s.from, e) + s.from, c = s.text.slice(Math.min(i, a) - s.from, Math.max(i, a) - s.from), u = o(c);
    if (l != null && u != l)
      break;
    (c != " " || i != n.head) && (l = u), i = a;
  }
  return i;
}), $y = (t) => Fy(t, !1), _3 = (t) => Fy(t, !0), E3 = (t) => ko(t, (e) => {
  let n = t.lineBlockAt(e.head).to;
  return e.head < n ? n : Math.min(t.state.doc.length, e.head + 1);
}), T3 = (t) => ko(t, (e) => {
  let n = t.moveToLineBoundary(e, !1).head;
  return e.head > n ? n : Math.max(0, e.head - 1);
}), A3 = (t) => ko(t, (e) => {
  let n = t.moveToLineBoundary(e, !0).head;
  return e.head < n ? n : Math.min(t.state.doc.length, e.head + 1);
}), O3 = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = t.changeByRange((i) => ({
    changes: { from: i.from, to: i.to, insert: De.of(["", ""]) },
    range: ee.cursor(i.from)
  }));
  return e(t.update(n, { scrollIntoView: !0, userEvent: "input" })), !0;
}, x3 = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = t.changeByRange((i) => {
    if (!i.empty || i.from == 0 || i.from == t.doc.length)
      return { range: i };
    let r = i.from, s = t.doc.lineAt(r), o = r == s.from ? r - 1 : tn(s.text, r - s.from, !1) + s.from, l = r == s.to ? r + 1 : tn(s.text, r - s.from, !0) + s.from;
    return {
      changes: { from: o, to: l, insert: t.doc.slice(r, l).append(t.doc.slice(o, r)) },
      range: ee.cursor(l)
    };
  });
  return n.changes.empty ? !1 : (e(t.update(n, { scrollIntoView: !0, userEvent: "move.character" })), !0);
};
function La(t) {
  let e = [], n = -1;
  for (let i of t.selection.ranges) {
    let r = t.doc.lineAt(i.from), s = t.doc.lineAt(i.to);
    if (!i.empty && i.to == s.from && (s = t.doc.lineAt(i.to - 1)), n >= r.number) {
      let o = e[e.length - 1];
      o.to = s.to, o.ranges.push(i);
    } else
      e.push({ from: r.from, to: s.to, ranges: [i] });
    n = s.number + 1;
  }
  return e;
}
function By(t, e, n) {
  if (t.readOnly)
    return !1;
  let i = [], r = [];
  for (let s of La(t)) {
    if (n ? s.to == t.doc.length : s.from == 0)
      continue;
    let o = t.doc.lineAt(n ? s.to + 1 : s.from - 1), l = o.length + 1;
    if (n) {
      i.push({ from: s.to, to: o.to }, { from: s.from, insert: o.text + t.lineBreak });
      for (let a of s.ranges)
        r.push(ee.range(Math.min(t.doc.length, a.anchor + l), Math.min(t.doc.length, a.head + l)));
    } else {
      i.push({ from: o.from, to: s.from }, { from: s.to, insert: t.lineBreak + o.text });
      for (let a of s.ranges)
        r.push(ee.range(a.anchor - l, a.head - l));
    }
  }
  return i.length ? (e(t.update({
    changes: i,
    scrollIntoView: !0,
    selection: ee.create(r, t.selection.mainIndex),
    userEvent: "move.line"
  })), !0) : !1;
}
const M3 = ({ state: t, dispatch: e }) => By(t, e, !1), L3 = ({ state: t, dispatch: e }) => By(t, e, !0);
function Vy(t, e, n) {
  if (t.readOnly)
    return !1;
  let i = [];
  for (let r of La(t))
    n ? i.push({ from: r.from, insert: t.doc.slice(r.from, r.to) + t.lineBreak }) : i.push({ from: r.to, insert: t.lineBreak + t.doc.slice(r.from, r.to) });
  return e(t.update({ changes: i, scrollIntoView: !0, userEvent: "input.copyline" })), !0;
}
const I3 = ({ state: t, dispatch: e }) => Vy(t, e, !1), P3 = ({ state: t, dispatch: e }) => Vy(t, e, !0), D3 = (t) => {
  if (t.state.readOnly)
    return !1;
  let { state: e } = t, n = e.changes(La(e).map(({ from: r, to: s }) => (r > 0 ? r-- : s < e.doc.length && s++, { from: r, to: s }))), i = ys(e.selection, (r) => {
    let s;
    if (t.lineWrapping) {
      let o = t.lineBlockAt(r.head), l = t.coordsAtPos(r.head, r.assoc || 1);
      l && (s = o.bottom + t.documentTop - l.bottom + t.defaultLineHeight / 2);
    }
    return t.moveVertically(r, !0, s);
  }).map(n);
  return t.dispatch({ changes: n, selection: i, scrollIntoView: !0, userEvent: "delete.line" }), !0;
};
function R3(t, e) {
  if (/\(\)|\[\]|\{\}/.test(t.sliceDoc(e - 1, e + 1)))
    return { from: e, to: e };
  let n = hi(t).resolveInner(e), i = n.childBefore(e), r = n.childAfter(e), s;
  return i && r && i.to <= e && r.from >= e && (s = i.type.prop(Le.closedBy)) && s.indexOf(r.name) > -1 && t.doc.lineAt(i.to).from == t.doc.lineAt(r.from).from && !/\S/.test(t.sliceDoc(i.to, r.from)) ? { from: i.to, to: r.from } : null;
}
const ug = /* @__PURE__ */ Hy(!1), N3 = /* @__PURE__ */ Hy(!0);
function Hy(t) {
  return ({ state: e, dispatch: n }) => {
    if (e.readOnly)
      return !1;
    let i = e.changeByRange((r) => {
      let { from: s, to: o } = r, l = e.doc.lineAt(s), a = !t && s == o && R3(e, s);
      t && (s = o = (o <= l.to ? l : e.doc.lineAt(o)).to);
      let c = new Ta(e, { simulateBreak: s, simulateDoubleBreak: !!a }), u = uy(c, s);
      for (u == null && (u = Ca(/^\s*/.exec(e.doc.lineAt(s).text)[0], e.tabSize)); o < l.to && /\s/.test(l.text[o - l.from]); )
        o++;
      a ? { from: s, to: o } = a : s > l.from && s < l.from + 100 && !/\S/.test(l.text.slice(0, s)) && (s = l.from);
      let f = ["", Xl(e, u)];
      return a && f.push(Xl(e, c.lineIndent(l.from, -1))), {
        changes: { from: s, to: o, insert: De.of(f) },
        range: ee.cursor(s + 1 + f[1].length)
      };
    });
    return n(e.update(i, { scrollIntoView: !0, userEvent: "input" })), !0;
  };
}
function qf(t, e) {
  let n = -1;
  return t.changeByRange((i) => {
    let r = [];
    for (let o = i.from; o <= i.to; ) {
      let l = t.doc.lineAt(o);
      l.number > n && (i.empty || i.to > l.from) && (e(l, r, i), n = l.number), o = l.to + 1;
    }
    let s = t.changes(r);
    return {
      changes: r,
      range: ee.range(s.mapPos(i.anchor, 1), s.mapPos(i.head, 1))
    };
  });
}
const F3 = ({ state: t, dispatch: e }) => {
  if (t.readOnly)
    return !1;
  let n = /* @__PURE__ */ Object.create(null), i = new Ta(t, { overrideIndentation: (s) => {
    let o = n[s];
    return o ?? -1;
  } }), r = qf(t, (s, o, l) => {
    let a = uy(i, s.from);
    if (a == null)
      return;
    /\S/.test(s.text) || (a = 0);
    let c = /^\s*/.exec(s.text)[0], u = Xl(t, a);
    (c != u || l.from < s.from + c.length) && (n[s.from] = a, o.push({ from: s.from, to: s.from + c.length, insert: u }));
  });
  return r.changes.empty || e(t.update(r, { userEvent: "indent" })), !0;
}, Wy = ({ state: t, dispatch: e }) => t.readOnly ? !1 : (e(t.update(qf(t, (n, i) => {
  i.push({ from: n.from, insert: t.facet(Uf) });
}), { userEvent: "input.indent" })), !0), zy = ({ state: t, dispatch: e }) => t.readOnly ? !1 : (e(t.update(qf(t, (n, i) => {
  let r = /^\s*/.exec(n.text)[0];
  if (!r)
    return;
  let s = Ca(r, t.tabSize), o = 0, l = Xl(t, Math.max(0, s - Jl(t)));
  for (; o < r.length && o < l.length && r.charCodeAt(o) == l.charCodeAt(o); )
    o++;
  i.push({ from: n.from + o, to: n.from + r.length, insert: l.slice(o) });
}), { userEvent: "delete.dedent" })), !0), $3 = (t) => (t.setTabFocusMode(), !0), B3 = [
  { key: "Ctrl-b", run: by, shift: Oy, preventDefault: !0 },
  { key: "Ctrl-f", run: wy, shift: xy },
  { key: "Ctrl-p", run: ky, shift: Iy },
  { key: "Ctrl-n", run: _y, shift: Py },
  { key: "Ctrl-a", run: o3, shift: y3 },
  { key: "Ctrl-e", run: l3, shift: b3 },
  { key: "Ctrl-d", run: Ny },
  { key: "Ctrl-h", run: Ou },
  { key: "Ctrl-k", run: E3 },
  { key: "Ctrl-Alt-h", run: $y },
  { key: "Ctrl-o", run: O3 },
  { key: "Ctrl-t", run: x3 },
  { key: "Ctrl-v", run: Au }
], V3 = /* @__PURE__ */ [
  { key: "ArrowLeft", run: by, shift: Oy, preventDefault: !0 },
  { key: "Mod-ArrowLeft", mac: "Alt-ArrowLeft", run: X8, shift: u3, preventDefault: !0 },
  { mac: "Cmd-ArrowLeft", run: r3, shift: m3, preventDefault: !0 },
  { key: "ArrowRight", run: wy, shift: xy, preventDefault: !0 },
  { key: "Mod-ArrowRight", mac: "Alt-ArrowRight", run: Z8, shift: f3, preventDefault: !0 },
  { mac: "Cmd-ArrowRight", run: s3, shift: v3, preventDefault: !0 },
  { key: "ArrowUp", run: ky, shift: Iy, preventDefault: !0 },
  { mac: "Cmd-ArrowUp", run: og, shift: ag },
  { mac: "Ctrl-ArrowUp", run: ig, shift: rg },
  { key: "ArrowDown", run: _y, shift: Py, preventDefault: !0 },
  { mac: "Cmd-ArrowDown", run: lg, shift: cg },
  { mac: "Ctrl-ArrowDown", run: Au, shift: sg },
  { key: "PageUp", run: ig, shift: rg },
  { key: "PageDown", run: Au, shift: sg },
  { key: "Home", run: i3, shift: g3, preventDefault: !0 },
  { key: "Mod-Home", run: og, shift: ag },
  { key: "End", run: n3, shift: p3, preventDefault: !0 },
  { key: "Mod-End", run: lg, shift: cg },
  { key: "Enter", run: ug, shift: ug },
  { key: "Mod-a", run: w3 },
  { key: "Backspace", run: Ou, shift: Ou },
  { key: "Delete", run: Ny },
  { key: "Mod-Backspace", mac: "Alt-Backspace", run: $y },
  { key: "Mod-Delete", mac: "Alt-Delete", run: _3 },
  { mac: "Mod-Backspace", run: T3 },
  { mac: "Mod-Delete", run: A3 }
].concat(/* @__PURE__ */ B3.map((t) => ({ mac: t.key, run: t.run, shift: t.shift }))), H3 = /* @__PURE__ */ [
  { key: "Alt-ArrowLeft", mac: "Ctrl-ArrowLeft", run: e3, shift: d3 },
  { key: "Alt-ArrowRight", mac: "Ctrl-ArrowRight", run: t3, shift: h3 },
  { key: "Alt-ArrowUp", run: M3 },
  { key: "Shift-Alt-ArrowUp", run: I3 },
  { key: "Alt-ArrowDown", run: L3 },
  { key: "Shift-Alt-ArrowDown", run: P3 },
  { key: "Escape", run: k3 },
  { key: "Mod-Enter", run: N3 },
  { key: "Alt-l", mac: "Ctrl-l", run: S3 },
  { key: "Mod-i", run: C3, preventDefault: !0 },
  { key: "Mod-[", run: zy },
  { key: "Mod-]", run: Wy },
  { key: "Mod-Alt-\\", run: F3 },
  { key: "Shift-Mod-k", run: D3 },
  { key: "Shift-Mod-\\", run: c3 },
  { key: "Mod-/", run: I8 },
  { key: "Alt-A", run: D8 },
  { key: "Ctrl-m", mac: "Shift-Alt-m", run: $3 }
].concat(V3), W3 = { key: "Tab", run: Wy, shift: zy };
var z3 = (t) => {
  var {
    theme: e,
    settings: n = {},
    styles: i = []
  } = t, r = {
    ".cm-gutters": {}
  }, s = {};
  n.background && (s.backgroundColor = n.background), n.backgroundImage && (s.backgroundImage = n.backgroundImage), n.foreground && (s.color = n.foreground), n.fontSize && (s.fontSize = n.fontSize), (n.background || n.foreground) && (r["&"] = s), n.fontFamily && (r["&.cm-editor .cm-scroller"] = {
    fontFamily: n.fontFamily
  }), n.gutterBackground && (r[".cm-gutters"].backgroundColor = n.gutterBackground), n.gutterForeground && (r[".cm-gutters"].color = n.gutterForeground), n.gutterBorder && (r[".cm-gutters"].borderRightColor = n.gutterBorder), n.caret && (r[".cm-content"] = {
    caretColor: n.caret
  }, r[".cm-cursor, .cm-dropCursor"] = {
    borderLeftColor: n.caret
  });
  var o = {};
  n.gutterActiveForeground && (o.color = n.gutterActiveForeground), n.lineHighlight && (r[".cm-activeLine"] = {
    backgroundColor: n.lineHighlight
  }, o.backgroundColor = n.lineHighlight), r[".cm-activeLineGutter"] = o, n.selection && (r["&.cm-focused .cm-selectionBackground, & .cm-line::selection, & .cm-selectionLayer .cm-selectionBackground, .cm-content ::selection"] = {
    background: n.selection + " !important"
  }), n.selectionMatch && (r["& .cm-selectionMatch"] = {
    backgroundColor: n.selectionMatch
  });
  var l = we.theme(r, {
    dark: e === "dark"
  }), a = Aa.define(i), c = [l, S8(a)];
  return c;
};
const G3 = { class: "merge-dialog" }, U3 = { class: "merge-titlebar" }, j3 = { class: "titlebar-left" }, K3 = { class: "titlebar-text" }, Y3 = { class: "titlebar-center" }, q3 = { class: "file-tabs" }, J3 = ["onClick", "title"], X3 = { class: "tab-name" }, Z3 = { class: "file-breadcrumb" }, Q3 = { class: "breadcrumb-label" }, eR = { class: "breadcrumb-path" }, tR = { class: "breadcrumb-counter" }, nR = { class: "diff-body" }, iR = { class: "pane-toolbar" }, rR = { class: "toolbar-label" }, sR = { class: "toolbar-actions" }, oR = ["title"], lR = { class: "sync-icon" }, aR = {
  key: 0,
  class: "diff-markers"
}, cR = ["title"], uR = { class: "pane-toolbar" }, fR = { class: "toolbar-label" }, dR = {
  key: 0,
  class: "edited-indicator"
}, hR = {
  key: 0,
  class: "diff-markers"
}, pR = ["title"], gR = { class: "merge-statusbar" }, mR = { class: "statusbar-left" }, vR = ["title"], yR = { class: "nav-group" }, bR = ["disabled"], wR = ["disabled"], SR = { class: "resolve-progress" }, CR = {
  key: 0,
  class: "progress-container"
}, kR = { class: "progress-bar" }, _R = { class: "progress-text" }, ER = { class: "batch-actions" }, TR = ["title"], AR = ["title"], OR = { class: "statusbar-right" }, xR = { class: "shortcut-hints" }, MR = { class: "hint-item" }, LR = { class: "hint-item" }, IR = ["disabled"], PR = {
  key: 0,
  class: "btn-spinner"
}, DR = /* @__PURE__ */ Q({
  __name: "index",
  props: {
    modelValue: { type: Boolean },
    conflictFiles: {}
  },
  emits: ["update:modelValue", "complete", "cancel", "back", "escape"],
  setup(t, { expose: e, emit: n }) {
    const i = t, r = n, { t: s } = Dr(), o = M({
      get: () => i.modelValue,
      set: (w) => r("update:modelValue", w)
    }), l = I(0), a = I({}), c = I({}), u = I({}), f = I(!1), d = I(""), h = I(0), p = I(""), v = I(!0), y = I(null), g = I(null), b = I(!1), k = I(!1), S = I(null), _ = I(null);
    let E = null, C = null;
    const H = I(""), N = I(""), q = I(/* @__PURE__ */ new Set()), z = I(/* @__PURE__ */ new Set()), W = (w) => {
      const L = getComputedStyle(document.documentElement), K = L.getPropertyValue("--categories-panel-bg").trim() || (w ? "#1e1e1e" : "#ffffff"), de = L.getPropertyValue("--categories-text-color").trim() || (w ? "#d4d4d4" : "#000000"), he = L.getPropertyValue("--editor-selection-bg").trim() || (w ? "#264f78" : "#add6ff");
      return z3({
        theme: w ? "dark" : "light",
        settings: {
          background: K,
          foreground: de,
          caret: w ? "#aeafad" : "#000000",
          selection: he
        },
        styles: [
          { tag: Se.comment, color: "#6a9955" },
          { tag: Se.keyword, color: "#569cd6" },
          { tag: Se.string, color: "#ce9178" }
        ]
      });
    }, te = M(() => i.conflictFiles[l.value]), ge = M(() => i.conflictFiles.every((w, L) => a.value[L])), D = M(() => i.conflictFiles.filter((w, L) => a.value[L]).length), B = M(() => {
      const w = u.value[l.value], L = C ? C.state.doc.toString() : N.value;
      return w && L !== w;
    }), V = () => document.documentElement.classList.contains("dark") || document.documentElement.classList.contains("dark-theme") || document.body.classList.contains("dark") || document.body.classList.contains("dark-theme"), ce = I(V());
    let ae = null;
    function ke(w) {
      return w.split("/").pop() || w;
    }
    function Oe(w, L) {
      const K = w.split(`
`), de = L.split(`
`), he = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set(), F = Math.max(K.length, de.length);
      for (let me = 0; me < F; me++) {
        const Ee = K[me], et = de[me];
        Ee !== et && (me < K.length && he.add(me + 1), me < de.length && A.add(me + 1));
      }
      return { oldSet: he, newSet: A };
    }
    function Ae(w, L, K, de) {
      if (!w) return null;
      const he = [
        zD(),
        H8(),
        ny.of([...H3, ...J8, W3]),
        W(ce.value),
        we.lineWrapping,
        Ne.readOnly.of(K),
        we.updateListener.of((Ee) => {
          if (!K && Ee.docChanged) {
            const et = Ee.state.doc.toString();
            de ? H.value = et : (N.value = et, c.value[l.value] = et), xe();
          }
        })
      ], A = Ne.create({
        doc: L,
        extensions: he
      }), F = new we({
        state: A,
        parent: w
      }), me = (Ee) => {
        be(de, Ee);
      };
      return F.scrollDOM.addEventListener("scroll", me), F;
    }
    function be(w, L) {
      if (!v.value) return;
      const K = L.target;
      if (!K) return;
      const de = K.scrollHeight - K.clientHeight, he = de > 0 ? K.scrollTop / de : 0;
      if (w) {
        if (k.value) return;
        if (b.value = !0, C) {
          const A = C.scrollDOM, F = A.scrollHeight - A.clientHeight;
          A.scrollTop = he * (F > 0 ? F : 0), A.scrollLeft = K.scrollLeft;
        }
        requestAnimationFrame(() => {
          b.value = !1;
        });
      } else {
        if (b.value) return;
        if (k.value = !0, E) {
          const A = E.scrollDOM, F = A.scrollHeight - A.clientHeight;
          A.scrollTop = he * (F > 0 ? F : 0), A.scrollLeft = K.scrollLeft;
        }
        requestAnimationFrame(() => {
          k.value = !1;
        });
      }
    }
    function We() {
      v.value = !v.value;
    }
    function xe() {
      const w = H.value, L = C ? C.state.doc.toString() : N.value, { oldSet: K, newSet: de } = Oe(w, L);
      q.value = K, z.value = de;
    }
    function ze(w, L) {
      E && (E.destroy(), E = null), C && (C.destroy(), C = null), ct(() => {
        E = Ae(S.value, w, !0, !0), C = Ae(_.value, L, !1, !1), xe();
      });
    }
    async function Qe() {
      try {
        f.value = !0, d.value = "loading", h.value = 30, p.value = s("settings.gitSync.loadingFile");
        const w = await BM(te.value);
        H.value = w.remote_content, u.value[l.value] || (u.value[l.value] = w.local_content);
        const L = c.value[l.value] || w.local_content;
        N.value = L, h.value = 80, p.value = s("settings.gitSync.initEditor"), ze(w.remote_content, L), h.value = 100, d.value = "complete";
      } catch (w) {
        console.error("加载文件内容失败:", w), H.value = "加载失败", N.value = "加载失败";
      } finally {
        f.value = !1;
      }
    }
    function Ie(w) {
      o.value && (w.ctrlKey && w.key === "1" || w.key === "ArrowLeft" && !w.ctrlKey ? (w.preventDefault(), It()) : w.ctrlKey && w.key === "2" || w.key === "ArrowRight" && !w.ctrlKey ? (w.preventDefault(), bt()) : w.ctrlKey && w.key === "Enter" ? (w.preventDefault(), ge.value && !f.value && ot()) : w.key === "Escape" ? (w.preventDefault(), O()) : w.ctrlKey && w.key === "ArrowLeft" ? (w.preventDefault(), At()) : w.ctrlKey && w.key === "ArrowRight" && (w.preventDefault(), wt()));
    }
    function bt() {
      a.value[l.value] = "remote";
    }
    function It() {
      a.value[l.value] = "local";
    }
    function Pt() {
      i.conflictFiles.forEach((w, L) => {
        a.value[L] = "remote";
      });
    }
    function Wt() {
      i.conflictFiles.forEach((w, L) => {
        a.value[L] = "local";
      });
    }
    function At() {
      l.value > 0 && l.value--;
    }
    function wt() {
      l.value < i.conflictFiles.length - 1 && l.value++;
    }
    function ot() {
      C && a.value[l.value] === "local" && (c.value[l.value] = C.state.doc.toString());
      const w = { ...c.value };
      for (let de = 0; de < i.conflictFiles.length; de++)
        a.value[de] === "local" && !w[de] && (w[de] = u.value[de] || "");
      f.value = !0, d.value = "merging", h.value = 0, p.value = s("settings.gitSync.mergingProgress", {
        current: 1,
        total: i.conflictFiles.length
      });
      let L = 0;
      const K = setInterval(() => {
        L += 20, h.value = Math.min(L, 90), L >= 100 && clearInterval(K);
      }, 100);
      r("complete", a.value, w);
    }
    function zt() {
      o.value = !1, r("back");
    }
    function Dt() {
      o.value = !1, r("cancel");
    }
    function O() {
      o.value = !1, r("escape");
    }
    return pe(o, (w) => {
      w && i.conflictFiles.length > 0 && (l.value = 0, a.value = {}, c.value = {}, u.value = {}, Qe());
    }), pe(l, () => {
      Qe();
    }), pe(ce, () => {
      E && C && ze(H.value, N.value);
    }), Jr(() => {
      E && E.destroy(), C && C.destroy();
    }), it(() => {
      document.addEventListener("keydown", Ie), ae = new MutationObserver(() => {
        ce.value = V();
      }), ae.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: ["class"]
      }), ae.observe(document.body, {
        attributes: !0,
        attributeFilter: ["class"]
      });
    }), Jr(() => {
      document.removeEventListener("keydown", Ie), ae?.disconnect(), ae = null;
    }), e({
      setLoading: (w) => {
        f.value = w;
      }
    }), (w, L) => (x(), se(hg, { to: "body" }, [
      Z(Ri, { name: "merge-fade" }, {
        default: X(() => [
          m(o) ? (x(), R("div", {
            key: 0,
            class: "merge-overlay",
            onClick: at(O, ["self"])
          }, [
            T("div", G3, [
              j(" 顶栏 "),
              T("div", U3, [
                T("div", j3, [
                  L[0] || (L[0] = T(
                    "span",
                    { class: "titlebar-icon" },
                    "⚡",
                    -1
                    /* HOISTED */
                  )),
                  T(
                    "span",
                    K3,
                    G(w.$t("settings.gitSync.mergeTitle")),
                    1
                    /* TEXT */
                  )
                ]),
                T("div", Y3, [
                  T("div", q3, [
                    (x(!0), R(
                      _e,
                      null,
                      Ct(w.conflictFiles, (K, de) => (x(), R("button", {
                        key: K,
                        class: U(["file-tab", { active: m(l) === de, resolved: m(a)[de] }]),
                        onClick: (he) => l.value = de,
                        title: K
                      }, [
                        T(
                          "span",
                          {
                            class: U(["tab-dot", { done: m(a)[de] }])
                          },
                          null,
                          2
                          /* CLASS */
                        ),
                        T(
                          "span",
                          X3,
                          G(ke(K)),
                          1
                          /* TEXT */
                        )
                      ], 10, J3))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ]),
                T("button", {
                  class: "titlebar-close",
                  onClick: O
                }, L[1] || (L[1] = [
                  T(
                    "span",
                    null,
                    "×",
                    -1
                    /* HOISTED */
                  )
                ]))
              ]),
              j(" 文件路径栏 "),
              T("div", Z3, [
                T(
                  "span",
                  Q3,
                  G(w.$t("settings.gitSync.conflictFile")) + ":",
                  1
                  /* TEXT */
                ),
                T(
                  "span",
                  eR,
                  G(m(te)),
                  1
                  /* TEXT */
                ),
                T(
                  "span",
                  tR,
                  G(m(l) + 1) + " / " + G(w.conflictFiles.length),
                  1
                  /* TEXT */
                )
              ]),
              j(" 对比主体 "),
              T("div", nR, [
                j(" 远程 (Incoming) "),
                T(
                  "div",
                  {
                    class: U(["diff-pane incoming", { selected: m(a)[m(l)] === "remote" }])
                  },
                  [
                    T("div", iR, [
                      T("div", rR, [
                        L[2] || (L[2] = T(
                          "span",
                          { class: "label-dot incoming-dot" },
                          null,
                          -1
                          /* HOISTED */
                        )),
                        T(
                          "span",
                          null,
                          G(w.$t("settings.gitSync.remoteVersion")),
                          1
                          /* TEXT */
                        ),
                        L[3] || (L[3] = T(
                          "span",
                          { class: "label-badge" },
                          "Incoming",
                          -1
                          /* HOISTED */
                        ))
                      ]),
                      T("div", sR, [
                        T("button", {
                          class: U(["sync-scroll-btn", { active: m(v) }]),
                          onClick: We,
                          title: m(v) ? w.$t("settings.gitSync.syncScrollOn") : w.$t("settings.gitSync.syncScrollOff")
                        }, [
                          T(
                            "span",
                            lR,
                            G(m(v) ? "⤳" : "⇥"),
                            1
                            /* TEXT */
                          )
                        ], 10, oR),
                        T(
                          "button",
                          {
                            class: U(["accept-btn incoming-btn", { accepted: m(a)[m(l)] === "remote" }]),
                            onClick: bt
                          },
                          [
                            m(a)[m(l)] === "remote" ? (x(), R(
                              _e,
                              { key: 0 },
                              [
                                Ve(
                                  " ✓ " + G(w.$t("settings.gitSync.accepted")),
                                  1
                                  /* TEXT */
                                )
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            )) : (x(), R(
                              _e,
                              { key: 1 },
                              [
                                Ve(
                                  G(w.$t("settings.gitSync.acceptIncoming")),
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
                    T(
                      "div",
                      {
                        ref_key: "remotePaneRef",
                        ref: y,
                        class: U(["pane-content", { "has-diff": m(q).size > 0 }])
                      },
                      [
                        T(
                          "div",
                          {
                            ref_key: "remoteEditorRef",
                            ref: S,
                            class: "code-editor-container"
                          },
                          null,
                          512
                          /* NEED_PATCH */
                        ),
                        j(" 差异标记 "),
                        m(q).size > 0 ? (x(), R("div", aR, [
                          (x(!0), R(
                            _e,
                            null,
                            Ct(Array.from(m(q)), (K) => (x(), R("span", {
                              key: K,
                              class: "diff-line-marker remote",
                              style: tt({ top: `${(K - 1) * 20 + 8}px` }),
                              title: w.$t("settings.gitSync.lineChanged")
                            }, null, 12, cR))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])) : j("v-if", !0)
                      ],
                      2
                      /* CLASS */
                    )
                  ],
                  2
                  /* CLASS */
                ),
                j(" 分隔条 "),
                L[6] || (L[6] = T(
                  "div",
                  { class: "diff-gutter" },
                  [
                    T("div", { class: "gutter-line" })
                  ],
                  -1
                  /* HOISTED */
                )),
                j(" 本地 (Current) "),
                T(
                  "div",
                  {
                    class: U(["diff-pane current", { selected: m(a)[m(l)] === "local" }])
                  },
                  [
                    T("div", uR, [
                      T("div", fR, [
                        L[4] || (L[4] = T(
                          "span",
                          { class: "label-dot current-dot" },
                          null,
                          -1
                          /* HOISTED */
                        )),
                        T(
                          "span",
                          null,
                          G(w.$t("settings.gitSync.localVersion")),
                          1
                          /* TEXT */
                        ),
                        L[5] || (L[5] = T(
                          "span",
                          { class: "label-badge" },
                          "Current",
                          -1
                          /* HOISTED */
                        )),
                        m(B) ? (x(), R(
                          "span",
                          dR,
                          G(w.$t("settings.gitSync.edited")),
                          1
                          /* TEXT */
                        )) : j("v-if", !0)
                      ]),
                      T(
                        "button",
                        {
                          class: U(["accept-btn current-btn", { accepted: m(a)[m(l)] === "local" }]),
                          onClick: It
                        },
                        [
                          m(a)[m(l)] === "local" ? (x(), R(
                            _e,
                            { key: 0 },
                            [
                              Ve(
                                " ✓ " + G(w.$t("settings.gitSync.accepted")),
                                1
                                /* TEXT */
                              )
                            ],
                            64
                            /* STABLE_FRAGMENT */
                          )) : (x(), R(
                            _e,
                            { key: 1 },
                            [
                              Ve(
                                G(w.$t("settings.gitSync.acceptCurrent")),
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
                    T(
                      "div",
                      {
                        ref_key: "localPaneRef",
                        ref: g,
                        class: U(["pane-content editable", { "has-diff": m(z).size > 0 }])
                      },
                      [
                        T(
                          "div",
                          {
                            ref_key: "localEditorRef",
                            ref: _,
                            class: "code-editor-container"
                          },
                          null,
                          512
                          /* NEED_PATCH */
                        ),
                        j(" 差异标记 "),
                        m(z).size > 0 ? (x(), R("div", hR, [
                          (x(!0), R(
                            _e,
                            null,
                            Ct(Array.from(m(z)), (K) => (x(), R("span", {
                              key: K,
                              class: "diff-line-marker local",
                              style: tt({ top: `${(K - 1) * 20 + 8}px` }),
                              title: w.$t("settings.gitSync.lineChanged")
                            }, null, 12, pR))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])) : j("v-if", !0)
                      ],
                      2
                      /* CLASS */
                    )
                  ],
                  2
                  /* CLASS */
                )
              ]),
              j(" 底栏 "),
              T("div", gR, [
                T("div", mR, [
                  T("button", {
                    class: "status-btn",
                    onClick: zt,
                    title: w.$t("settings.gitSync.backToConflictDialog")
                  }, " ← " + G(w.$t("settings.gitSync.backToConflictDialog")), 9, vR),
                  T("div", yR, [
                    T("button", {
                      class: "nav-btn",
                      onClick: At,
                      disabled: m(l) === 0
                    }, " ‹ " + G(w.$t("settings.gitSync.prev")), 9, bR),
                    T("button", {
                      class: "nav-btn",
                      onClick: wt,
                      disabled: m(l) === w.conflictFiles.length - 1
                    }, G(w.$t("settings.gitSync.next")) + " › ", 9, wR)
                  ]),
                  T(
                    "span",
                    SR,
                    G(m(D)) + "/" + G(w.conflictFiles.length) + " " + G(w.$t("settings.gitSync.resolved")),
                    1
                    /* TEXT */
                  ),
                  j(" 进度条 "),
                  m(f) || m(d) ? (x(), R("div", CR, [
                    T("div", kR, [
                      T(
                        "div",
                        {
                          class: U(["progress-fill", { "progress-loading": m(d) === "loading", "progress-merging": m(d) === "merging" }]),
                          style: tt({ width: m(h) + "%" })
                        },
                        null,
                        6
                        /* CLASS, STYLE */
                      )
                    ]),
                    T(
                      "span",
                      _R,
                      G(m(p)),
                      1
                      /* TEXT */
                    )
                  ])) : j("v-if", !0),
                  j(" 批量操作按钮 "),
                  T("div", ER, [
                    T("button", {
                      class: "batch-btn",
                      onClick: Pt,
                      title: w.$t("settings.gitSync.acceptAllRemote")
                    }, G(w.$t("settings.gitSync.acceptAllRemote")), 9, TR),
                    T("button", {
                      class: "batch-btn",
                      onClick: Wt,
                      title: w.$t("settings.gitSync.acceptAllLocal")
                    }, G(w.$t("settings.gitSync.acceptAllLocal")), 9, AR)
                  ])
                ]),
                T("div", OR, [
                  j(" 快捷键提示 "),
                  T("div", xR, [
                    T("span", MR, [
                      L[7] || (L[7] = T(
                        "kbd",
                        null,
                        "Ctrl",
                        -1
                        /* HOISTED */
                      )),
                      L[8] || (L[8] = Ve("+")),
                      L[9] || (L[9] = T(
                        "kbd",
                        null,
                        "1",
                        -1
                        /* HOISTED */
                      )),
                      Ve(
                        " " + G(w.$t("settings.gitSync.acceptCurrent")),
                        1
                        /* TEXT */
                      )
                    ]),
                    T("span", LR, [
                      L[10] || (L[10] = T(
                        "kbd",
                        null,
                        "Ctrl",
                        -1
                        /* HOISTED */
                      )),
                      L[11] || (L[11] = Ve("+")),
                      L[12] || (L[12] = T(
                        "kbd",
                        null,
                        "2",
                        -1
                        /* HOISTED */
                      )),
                      Ve(
                        " " + G(w.$t("settings.gitSync.acceptIncoming")),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  T(
                    "button",
                    {
                      class: "status-btn cancel-btn",
                      onClick: Dt
                    },
                    G(w.$t("common.cancel")),
                    1
                    /* TEXT */
                  ),
                  T("button", {
                    class: U(["status-btn primary-btn", { loading: m(f) }]),
                    onClick: ot,
                    disabled: !m(ge) || m(f)
                  }, [
                    m(f) ? (x(), R("span", PR)) : j("v-if", !0),
                    Ve(
                      " " + G(w.$t("settings.gitSync.completeMerge")),
                      1
                      /* TEXT */
                    )
                  ], 10, IR)
                ])
              ])
            ])
          ])) : j("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
}), RR = /* @__PURE__ */ $i(DR, [["__scopeId", "data-v-ed4c8899"]]), NR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RR
}, Symbol.toStringTag, { value: "Module" }));
async function FR(t) {
  const n = Ef().label, { refreshStatus: i, refreshSettings: r, _setLastSyncTime: s } = _f();
  Ce.info(`[GitSync] [${n}] 设置 Git 事件监听器...`);
  const o = {
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
    o.gitSyncSuccess = await Kt("git-sync-success", (c) => {
      qe.msg(c.payload, "success", "bottom-right");
    }), o.gitSyncComplete = await Kt("git-sync-complete", async (c) => {
      c.payload.success && c.payload.last_sync_time && s(c.payload.last_sync_time), await r(), await i();
    }), o.gitSyncError = await Kt("git-sync-error", (c) => {
      const u = c.payload;
      if (Ce.error(`[GitSync] [${n}] Git 自动同步失败:`, u), u.includes("would be overwritten by merge") || u.includes("Please commit your changes")) {
        const f = u.match(/following files? would be overwritten[^:]*:\s*([^\n]+(?:\n\t[^\n]+)*)/);
        if (f) {
          const d = f[1].split(`
`).map((h) => h.trim()).filter((h) => h);
          qe.msg(t("settings.gitSync.conflictError", { files: d.join(", ") }), "error", "top-right", 5e3);
        } else
          qe.msg(t("settings.gitSync.conflictError", { files: "未知文件" }), "error", "top-right", 5e3);
      } else u.includes("unmerged files") || u.includes("unresolved conflict") ? qe.msg(t("settings.gitSync.unresolvedConflict"), "error", "top-right", 5e3) : qe.msg(u.split(`
`)[0] || u, "error", "top-right", 5e3);
    }), o.gitPullCompleted = await Kt("git-pull-completed", async (c) => {
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
    }), o.fileCreated = await Kt("file-created", (c) => {
      a || (a = !0, window.dispatchEvent(new CustomEvent("refresh-data", {
        detail: { source: "file-created", path: c.payload.path }
      })), setTimeout(() => {
        a = !1;
      }, 2e3));
    }), o.fileModified = await Kt("file-modified", (c) => {
      a || (a = !0, window.dispatchEvent(new CustomEvent("refresh-data", {
        detail: { source: "file-modified", path: c.payload.path }
      })), setTimeout(() => {
        a = !1;
      }, 2e3));
    }), o.fileDeleted = await Kt("file-deleted", (c) => {
      a || (a = !0, window.dispatchEvent(new CustomEvent("refresh-data", {
        detail: { source: "file-deleted", path: c.payload.path }
      })), setTimeout(() => {
        a = !1;
      }, 2e3));
    }), o.filesChangedBatch = await Kt("files-changed-batch", (c) => {
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
    }), o.dirsChangedBatch = await Kt("dirs-changed-batch", (c) => {
      const { created: u, deleted: f, renamed: d } = c.payload;
      Ce.info(`[GitSync] dirs-changed-batch: +${u.length} -${f.length} r${d?.length ?? 0}`), window.dispatchEvent(new CustomEvent("refresh-categories", {
        detail: { source: "dirs-changed-batch", created: u, deleted: f, renamed: d }
      }));
    }), Ce.info(`[GitSync] [${n}] 所有 Git 事件监听器设置完成`);
  } catch (c) {
    Ce.error(`[GitSync] [${n}] 设置 Git 事件监听器失败:`, c);
  }
  return o;
}
async function $R() {
  try {
    if (!await Y("get_workspace_root_path")) return;
    await zM() && Ce.info("[GitSync] 已为工作区自动创建 .gitignore");
  } catch (t) {
    Ce.debug("[GitSync] 确保 .gitignore 跳过或失败", t);
  }
}
const BR = {
  getGitSettings: ba,
  checkGitRepo: LM,
  initGitRepository: RM,
  gitPull: $c,
  startAutoSync: Fl,
  pauseAutoSync: xv,
  logger: Ce
};
async function VR(t, e = {}) {
  const n = { ...BR, ...e };
  try {
    const i = await n.getGitSettings();
    if (!(i.enabled && i.user_name.trim() && i.user_email.trim() && i.remote_url.trim()))
      return !1;
    let s = !1, o = !1, l = i.pull_on_start;
    if (await n.checkGitRepo() || (n.logger.info("[GitSync] 本地 Git 仓库缺失，开始根据已保存的远程配置恢复"), await n.initGitRepository(
      i.user_name,
      i.user_email,
      i.remote_url,
      i.token
    ), l = !0), l)
      try {
        const a = await n.gitPull();
        a.success && !a.has_conflicts && a.files_updated > 0 ? (qe.msg(t("settings.gitSync.pullSuccess", { count: a.files_updated }), "success", "bottom-right"), s = !0) : a.success || (o = !0);
      } catch (a) {
        o = !0, Ce.error("[GitSync] 启动时拉取失败", a);
      }
    if (i.auto_sync && (await n.startAutoSync(), o))
      try {
        await n.pauseAutoSync();
      } catch (a) {
        n.logger.error("[GitSync] 暂停自动同步失败", a);
      }
    return s;
  } catch (i) {
    return n.logger.error("[GitSync] Git 同步初始化失败", i), !1;
  }
}
function HR(t) {
  t.gitSyncSuccess && t.gitSyncSuccess(), t.gitSyncError && t.gitSyncError(), t.gitPullCompleted && t.gitPullCompleted(), t.gitSyncComplete && t.gitSyncComplete(), t.fileCreated && t.fileCreated(), t.fileModified && t.fileModified(), t.fileDeleted && t.fileDeleted(), t.filesChangedBatch && t.filesChangedBatch(), t.dirsChangedBatch && t.dirsChangedBatch();
}
const WR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cleanupGitEventListeners: HR,
  ensureWorkspaceGitignore: $R,
  initGitSync: VR,
  setupGitEventListeners: FR
}, Symbol.toStringTag, { value: "Module" })), zR = (t) => ({
  listen: t.listen ?? Kt,
  pauseAutoSync: t.pauseAutoSync ?? xv,
  logger: t.logger ?? Ce,
  isConflictDialogVisible: t.isConflictDialogVisible ?? (() => !1),
  onConflictDetected: t.onConflictDetected,
  onRepoNotFound: t.onRepoNotFound
});
async function GR(t) {
  const {
    listen: e,
    pauseAutoSync: n,
    logger: i,
    isConflictDialogVisible: r,
    onConflictDetected: s,
    onRepoNotFound: o
  } = zR(t), l = {
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
        if (a && r()) {
          i.info("[GitSync] 冲突事件已处理，跳过重复事件");
          return;
        }
        i.info("[GitSync] 收到冲突事件:", c.payload), a = !0;
        const u = c.payload.conflict_files.map(Jh), f = (c.payload.untracked_files || []).map(Jh);
        i.info("[GitSync] 解码后的冲突文件:", u), i.info("[GitSync] 解码后的未跟踪文件:", f);
        try {
          await n(), i.info("[GitSync] 已暂停自动同步，等待冲突解决");
        } catch (d) {
          i.error("[GitSync] 暂停自动同步失败:", d);
        }
        await s({
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
        await o({
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
function UR(t) {
  t.conflict && t.conflict(), t.repoNotFound && t.repoNotFound();
}
const jR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  cleanupGitSyncRuntimeListeners: UR,
  setupGitSyncRuntimeListeners: GR
}, Symbol.toStringTag, { value: "Module" })), Gy = (t = {}) => ({
  isPluginEnabled: t.isPluginEnabled ?? (() => !0),
  getGitSettings: t.getGitSettings ?? ba,
  getAutoSyncStatus: t.getAutoSyncStatus ?? FM,
  startAutoSync: t.startAutoSync ?? Fl,
  stopAutoSync: t.stopAutoSync ?? Bc,
  logger: t.logger ?? Ce
});
async function KR(t = {}) {
  const {
    isPluginEnabled: e,
    getGitSettings: n,
    getAutoSyncStatus: i,
    startAutoSync: r,
    logger: s
  } = Gy(t);
  if (!e())
    return !1;
  try {
    const o = await n();
    return !o.enabled || !o.auto_sync ? !1 : await i() ? (s.info("[GitSync] 窗口显示，自动同步已在运行"), !1) : (await r(), s.info("[GitSync] 窗口显示，已启动自动同步"), !0);
  } catch (o) {
    return s.error("[GitSync] 启动自动同步失败:", o), !1;
  }
}
async function YR(t = {}) {
  const {
    isPluginEnabled: e,
    getAutoSyncStatus: n,
    stopAutoSync: i,
    logger: r
  } = Gy(t);
  if (!e())
    return !1;
  try {
    return await n() ? (await i(), r.info("[GitSync] 窗口隐藏，已停止自动同步"), !0) : !1;
  } catch (s) {
    return r.error("[GitSync] 停止自动同步失败:", s), !1;
  }
}
const qR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  startAutoSyncForVisibleWindow: KR,
  stopAutoSyncForHiddenWindow: YR
}, Symbol.toStringTag, { value: "Module" }));
export {
  XR as activate
};
