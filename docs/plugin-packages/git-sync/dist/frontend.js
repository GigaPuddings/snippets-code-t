import * as Kr from "vue";
import { inject as ie, createVNode as K, defineAsyncComponent as Pa, getCurrentInstance as Je, ref as R, computed as O, unref as c, shallowRef as Sn, watchEffect as Ps, readonly as Tr, getCurrentScope as gd, onScopeDispose as Ri, onMounted as Re, nextTick as Ve, watch as ae, isRef as rn, warn as hd, provide as Ze, defineComponent as Y, createElementBlock as x, openBlock as L, mergeProps as Nt, renderSlot as Q, createElementVNode as N, toRef as lt, onUnmounted as $s, useAttrs as yd, useSlots as Rs, normalizeStyle as Ke, normalizeClass as z, createCommentVNode as W, Fragment as ke, createBlock as te, withCtx as j, resolveDynamicComponent as pt, withModifiers as Fe, toDisplayString as ee, onBeforeUnmount as Tt, Transition as kn, withDirectives as vt, vShow as Kt, reactive as Tn, onActivated as bd, onUpdated as Mi, cloneVNode as _d, Text as Ms, Comment as wd, Teleport as Fi, onBeforeMount as Cd, onDeactivated as Sd, createTextVNode as ht, h as Fs, createSlots as Or, resolveComponent as Pe, normalizeProps as Ed, guardReactiveProps as Td, withKeys as nn, toRaw as Od, toRefs as Ds, resolveDirective as Id, toHandlerKey as kd, renderList as _n, vModelText as Ld, shallowReactive as Ad, isVNode as Eo, render as fr } from "vue";
var Nd = {
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
function Pd() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function $d(e, t, n) {
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
var Rd = Symbol("icon-context");
function io(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var a = Pd(), l = ie(Rd, Nd);
      return function() {
        var i = s.size, u = s.strokeWidth, d = s.strokeLinecap, f = s.strokeLinejoin, g = s.theme, m = s.fill, v = s.spin, h = $d(a, {
          size: i,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: f,
          theme: g,
          fill: m
        }, l), y = [l.prefix + "-icon"];
        return y.push(l.prefix + "-icon-" + e), t && l.rtl && y.push(l.prefix + "-icon-rtl"), v && y.push(l.prefix + "-icon-spin"), K("span", {
          class: y.join(" ")
        }, [n(h)]);
      };
    }
  };
  return o;
}
const Md = io("attention", !0, function(e) {
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
}), $a = io("branch", !0, function(e) {
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
}), Fd = io("check-one", !0, function(e) {
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
}), Dd = io("close-small", !1, function(e) {
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
}), Bd = io("github", !0, function(e) {
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
}), Di = io("loading", !0, function(e) {
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
}), lS = (e) => {
  e.registerSettingsTab({
    id: "gitSync",
    labelKey: "settings.gitSync.menu",
    icon: Bd,
    component: Pa(() => Promise.resolve().then(() => qC))
  }), e.registerTitlebarAction({
    id: "git-sync-status",
    component: Pa(() => Promise.resolve().then(() => sS))
  });
}, Bi = Symbol(), ho = "el", Vd = "is-", $n = (e, t, n, o, r) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s;
}, Vi = Symbol("namespaceContextKey"), Bs = (e) => {
  const t = e || (Je() ? ie(Vi, R(ho)) : R(ho));
  return O(() => c(t) || ho);
}, Ee = (e, t) => {
  const n = Bs(t);
  return {
    namespace: n,
    b: (h = "") => $n(n.value, e, h, "", ""),
    e: (h) => h ? $n(n.value, e, "", h, "") : "",
    m: (h) => h ? $n(n.value, e, "", "", h) : "",
    be: (h, y) => h && y ? $n(n.value, e, h, y, "") : "",
    em: (h, y) => h && y ? $n(n.value, e, "", h, y) : "",
    bm: (h, y) => h && y ? $n(n.value, e, h, "", y) : "",
    bem: (h, y, p) => h && y && p ? $n(n.value, e, h, y, p) : "",
    is: (h, ...y) => {
      const p = y.length >= 1 ? y[0] : !0;
      return h && p ? `${Vd}${h}` : "";
    },
    cssVar: (h) => {
      const y = {};
      for (const p in h)
        h[p] && (y[`--${n.value}-${p}`] = h[p]);
      return y;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const y = {};
      for (const p in h)
        h[p] && (y[`--${n.value}-${e}-${p}`] = h[p]);
      return y;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const En = () => {
}, xd = Object.prototype.hasOwnProperty, Ra = (e, t) => xd.call(e, t), Wt = Array.isArray, He = (e) => typeof e == "function", St = (e) => typeof e == "string", kt = (e) => e !== null && typeof e == "object", zd = Object.prototype.toString, Hd = (e) => zd.call(e), Wd = (e) => Hd(e) === "[object Object]", Ud = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, jd = /-(\w)/g, Gd = Ud(
  (e) => e.replace(jd, (t, n) => n ? n.toUpperCase() : "")
);
var xi = typeof global == "object" && global && global.Object === Object && global, Kd = typeof self == "object" && self && self.Object === Object && self, Jt = xi || Kd || Function("return this")(), Yt = Jt.Symbol, zi = Object.prototype, Yd = zi.hasOwnProperty, qd = zi.toString, vo = Yt ? Yt.toStringTag : void 0;
function Xd(e) {
  var t = Yd.call(e, vo), n = e[vo];
  try {
    e[vo] = void 0;
    var o = !0;
  } catch {
  }
  var r = qd.call(e);
  return o && (t ? e[vo] = n : delete e[vo]), r;
}
var Jd = Object.prototype, Zd = Jd.toString;
function Qd(e) {
  return Zd.call(e);
}
var ef = "[object Null]", tf = "[object Undefined]", Ma = Yt ? Yt.toStringTag : void 0;
function uo(e) {
  return e == null ? e === void 0 ? tf : ef : Ma && Ma in Object(e) ? Xd(e) : Qd(e);
}
function Zn(e) {
  return e != null && typeof e == "object";
}
var nf = "[object Symbol]";
function Ir(e) {
  return typeof e == "symbol" || Zn(e) && uo(e) == nf;
}
function of(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var Vt = Array.isArray, Fa = Yt ? Yt.prototype : void 0, Da = Fa ? Fa.toString : void 0;
function Hi(e) {
  if (typeof e == "string")
    return e;
  if (Vt(e))
    return of(e, Hi) + "";
  if (Ir(e))
    return Da ? Da.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var rf = /\s/;
function sf(e) {
  for (var t = e.length; t-- && rf.test(e.charAt(t)); )
    ;
  return t;
}
var af = /^\s+/;
function lf(e) {
  return e && e.slice(0, sf(e) + 1).replace(af, "");
}
function On(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ba = NaN, uf = /^[-+]0x[0-9a-f]+$/i, cf = /^0b[01]+$/i, df = /^0o[0-7]+$/i, ff = parseInt;
function Va(e) {
  if (typeof e == "number")
    return e;
  if (Ir(e))
    return Ba;
  if (On(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = On(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = lf(e);
  var n = cf.test(e);
  return n || df.test(e) ? ff(e.slice(2), n ? 2 : 8) : uf.test(e) ? Ba : +e;
}
function Wi(e) {
  return e;
}
var pf = "[object AsyncFunction]", vf = "[object Function]", mf = "[object GeneratorFunction]", gf = "[object Proxy]";
function Ui(e) {
  if (!On(e))
    return !1;
  var t = uo(e);
  return t == vf || t == mf || t == pf || t == gf;
}
var Yr = Jt["__core-js_shared__"], xa = function() {
  var e = /[^.]+$/.exec(Yr && Yr.keys && Yr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function hf(e) {
  return !!xa && xa in e;
}
var yf = Function.prototype, bf = yf.toString;
function xn(e) {
  if (e != null) {
    try {
      return bf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var _f = /[\\^$.*+?()[\]{}|]/g, wf = /^\[object .+?Constructor\]$/, Cf = Function.prototype, Sf = Object.prototype, Ef = Cf.toString, Tf = Sf.hasOwnProperty, Of = RegExp(
  "^" + Ef.call(Tf).replace(_f, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function If(e) {
  if (!On(e) || hf(e))
    return !1;
  var t = Ui(e) ? Of : wf;
  return t.test(xn(e));
}
function kf(e, t) {
  return e?.[t];
}
function zn(e, t) {
  var n = kf(e, t);
  return If(n) ? n : void 0;
}
var cs = zn(Jt, "WeakMap");
function Lf(e, t, n) {
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
var Af = 800, Nf = 16, Pf = Date.now;
function $f(e) {
  var t = 0, n = 0;
  return function() {
    var o = Pf(), r = Nf - (o - n);
    if (n = o, r > 0) {
      if (++t >= Af)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Rf(e) {
  return function() {
    return e;
  };
}
var pr = function() {
  try {
    var e = zn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Mf = pr ? function(e, t) {
  return pr(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Rf(t),
    writable: !0
  });
} : Wi, Ff = $f(Mf);
function Df(e, t, n, o) {
  e.length;
  for (var r = n + 1; r--; )
    if (t(e[r], r, e))
      return r;
  return -1;
}
var Bf = 9007199254740991, Vf = /^(?:0|[1-9]\d*)$/;
function Vs(e, t) {
  var n = typeof e;
  return t = t ?? Bf, !!t && (n == "number" || n != "symbol" && Vf.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function xf(e, t, n) {
  t == "__proto__" && pr ? pr(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function xs(e, t) {
  return e === t || e !== e && t !== t;
}
var zf = Object.prototype, Hf = zf.hasOwnProperty;
function Wf(e, t, n) {
  var o = e[t];
  (!(Hf.call(e, t) && xs(o, n)) || n === void 0 && !(t in e)) && xf(e, t, n);
}
var za = Math.max;
function Uf(e, t, n) {
  return t = za(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, r = -1, s = za(o.length - t, 0), a = Array(s); ++r < s; )
      a[r] = o[t + r];
    r = -1;
    for (var l = Array(t + 1); ++r < t; )
      l[r] = o[r];
    return l[t] = n(a), Lf(e, this, l);
  };
}
var jf = 9007199254740991;
function zs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= jf;
}
function Gf(e) {
  return e != null && zs(e.length) && !Ui(e);
}
var Kf = Object.prototype;
function Yf(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Kf;
  return e === n;
}
function qf(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var Xf = "[object Arguments]";
function Ha(e) {
  return Zn(e) && uo(e) == Xf;
}
var ji = Object.prototype, Jf = ji.hasOwnProperty, Zf = ji.propertyIsEnumerable, Hs = Ha(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ha : function(e) {
  return Zn(e) && Jf.call(e, "callee") && !Zf.call(e, "callee");
};
function Qf() {
  return !1;
}
var Gi = typeof exports == "object" && exports && !exports.nodeType && exports, Wa = Gi && typeof module == "object" && module && !module.nodeType && module, ep = Wa && Wa.exports === Gi, Ua = ep ? Jt.Buffer : void 0, tp = Ua ? Ua.isBuffer : void 0, ds = tp || Qf, np = "[object Arguments]", op = "[object Array]", rp = "[object Boolean]", sp = "[object Date]", ap = "[object Error]", lp = "[object Function]", ip = "[object Map]", up = "[object Number]", cp = "[object Object]", dp = "[object RegExp]", fp = "[object Set]", pp = "[object String]", vp = "[object WeakMap]", mp = "[object ArrayBuffer]", gp = "[object DataView]", hp = "[object Float32Array]", yp = "[object Float64Array]", bp = "[object Int8Array]", _p = "[object Int16Array]", wp = "[object Int32Array]", Cp = "[object Uint8Array]", Sp = "[object Uint8ClampedArray]", Ep = "[object Uint16Array]", Tp = "[object Uint32Array]", Ie = {};
Ie[hp] = Ie[yp] = Ie[bp] = Ie[_p] = Ie[wp] = Ie[Cp] = Ie[Sp] = Ie[Ep] = Ie[Tp] = !0;
Ie[np] = Ie[op] = Ie[mp] = Ie[rp] = Ie[gp] = Ie[sp] = Ie[ap] = Ie[lp] = Ie[ip] = Ie[up] = Ie[cp] = Ie[dp] = Ie[fp] = Ie[pp] = Ie[vp] = !1;
function Op(e) {
  return Zn(e) && zs(e.length) && !!Ie[uo(e)];
}
function Ip(e) {
  return function(t) {
    return e(t);
  };
}
var Ki = typeof exports == "object" && exports && !exports.nodeType && exports, yo = Ki && typeof module == "object" && module && !module.nodeType && module, kp = yo && yo.exports === Ki, qr = kp && xi.process, ja = function() {
  try {
    var e = yo && yo.require && yo.require("util").types;
    return e || qr && qr.binding && qr.binding("util");
  } catch {
  }
}(), Ga = ja && ja.isTypedArray, Yi = Ga ? Ip(Ga) : Op, Lp = Object.prototype, Ap = Lp.hasOwnProperty;
function Np(e, t) {
  var n = Vt(e), o = !n && Hs(e), r = !n && !o && ds(e), s = !n && !o && !r && Yi(e), a = n || o || r || s, l = a ? qf(e.length, String) : [], i = l.length;
  for (var u in e)
    Ap.call(e, u) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Vs(u, i))) && l.push(u);
  return l;
}
function Pp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var $p = Pp(Object.keys, Object), Rp = Object.prototype, Mp = Rp.hasOwnProperty;
function Fp(e) {
  if (!Yf(e))
    return $p(e);
  var t = [];
  for (var n in Object(e))
    Mp.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function qi(e) {
  return Gf(e) ? Np(e) : Fp(e);
}
var Dp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bp = /^\w*$/;
function Ws(e, t) {
  if (Vt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ir(e) ? !0 : Bp.test(e) || !Dp.test(e) || t != null && e in Object(t);
}
var To = zn(Object, "create");
function Vp() {
  this.__data__ = To ? To(null) : {}, this.size = 0;
}
function xp(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var zp = "__lodash_hash_undefined__", Hp = Object.prototype, Wp = Hp.hasOwnProperty;
function Up(e) {
  var t = this.__data__;
  if (To) {
    var n = t[e];
    return n === zp ? void 0 : n;
  }
  return Wp.call(t, e) ? t[e] : void 0;
}
var jp = Object.prototype, Gp = jp.hasOwnProperty;
function Kp(e) {
  var t = this.__data__;
  return To ? t[e] !== void 0 : Gp.call(t, e);
}
var Yp = "__lodash_hash_undefined__";
function qp(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = To && t === void 0 ? Yp : t, this;
}
function Bn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Bn.prototype.clear = Vp;
Bn.prototype.delete = xp;
Bn.prototype.get = Up;
Bn.prototype.has = Kp;
Bn.prototype.set = qp;
function Xp() {
  this.__data__ = [], this.size = 0;
}
function kr(e, t) {
  for (var n = e.length; n--; )
    if (xs(e[n][0], t))
      return n;
  return -1;
}
var Jp = Array.prototype, Zp = Jp.splice;
function Qp(e) {
  var t = this.__data__, n = kr(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Zp.call(t, n, 1), --this.size, !0;
}
function ev(e) {
  var t = this.__data__, n = kr(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function tv(e) {
  return kr(this.__data__, e) > -1;
}
function nv(e, t) {
  var n = this.__data__, o = kr(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function vn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
vn.prototype.clear = Xp;
vn.prototype.delete = Qp;
vn.prototype.get = ev;
vn.prototype.has = tv;
vn.prototype.set = nv;
var Oo = zn(Jt, "Map");
function ov() {
  this.size = 0, this.__data__ = {
    hash: new Bn(),
    map: new (Oo || vn)(),
    string: new Bn()
  };
}
function rv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Lr(e, t) {
  var n = e.__data__;
  return rv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function sv(e) {
  var t = Lr(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function av(e) {
  return Lr(this, e).get(e);
}
function lv(e) {
  return Lr(this, e).has(e);
}
function iv(e, t) {
  var n = Lr(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function mn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
mn.prototype.clear = ov;
mn.prototype.delete = sv;
mn.prototype.get = av;
mn.prototype.has = lv;
mn.prototype.set = iv;
var uv = "Expected a function";
function Us(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(uv);
  var n = function() {
    var o = arguments, r = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(r))
      return s.get(r);
    var a = e.apply(this, o);
    return n.cache = s.set(r, a) || s, a;
  };
  return n.cache = new (Us.Cache || mn)(), n;
}
Us.Cache = mn;
var cv = 500;
function dv(e) {
  var t = Us(e, function(o) {
    return n.size === cv && n.clear(), o;
  }), n = t.cache;
  return t;
}
var fv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pv = /\\(\\)?/g, vv = dv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(fv, function(n, o, r, s) {
    t.push(r ? s.replace(pv, "$1") : o || n);
  }), t;
});
function mv(e) {
  return e == null ? "" : Hi(e);
}
function Ar(e, t) {
  return Vt(e) ? e : Ws(e, t) ? [e] : vv(mv(e));
}
function Ro(e) {
  if (typeof e == "string" || Ir(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function js(e, t) {
  t = Ar(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[Ro(t[n++])];
  return n && n == o ? e : void 0;
}
function wn(e, t, n) {
  var o = e == null ? void 0 : js(e, t);
  return o === void 0 ? n : o;
}
function Xi(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; )
    e[r + n] = t[n];
  return e;
}
var Ka = Yt ? Yt.isConcatSpreadable : void 0;
function gv(e) {
  return Vt(e) || Hs(e) || !!(Ka && e && e[Ka]);
}
function hv(e, t, n, o, r) {
  var s = -1, a = e.length;
  for (n || (n = gv), r || (r = []); ++s < a; ) {
    var l = e[s];
    n(l) ? Xi(r, l) : r[r.length] = l;
  }
  return r;
}
function yv(e) {
  var t = e == null ? 0 : e.length;
  return t ? hv(e) : [];
}
function bv(e) {
  return Ff(Uf(e, void 0, yv), e + "");
}
function on() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return Vt(e) ? e : [e];
}
function _v() {
  this.__data__ = new vn(), this.size = 0;
}
function wv(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Cv(e) {
  return this.__data__.get(e);
}
function Sv(e) {
  return this.__data__.has(e);
}
var Ev = 200;
function Tv(e, t) {
  var n = this.__data__;
  if (n instanceof vn) {
    var o = n.__data__;
    if (!Oo || o.length < Ev - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new mn(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function un(e) {
  var t = this.__data__ = new vn(e);
  this.size = t.size;
}
un.prototype.clear = _v;
un.prototype.delete = wv;
un.prototype.get = Cv;
un.prototype.has = Sv;
un.prototype.set = Tv;
function Ov(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, s = []; ++n < o; ) {
    var a = e[n];
    t(a, n, e) && (s[r++] = a);
  }
  return s;
}
function Iv() {
  return [];
}
var kv = Object.prototype, Lv = kv.propertyIsEnumerable, Ya = Object.getOwnPropertySymbols, Av = Ya ? function(e) {
  return e == null ? [] : (e = Object(e), Ov(Ya(e), function(t) {
    return Lv.call(e, t);
  }));
} : Iv;
function Nv(e, t, n) {
  var o = t(e);
  return Vt(e) ? o : Xi(o, n(e));
}
function qa(e) {
  return Nv(e, qi, Av);
}
var fs = zn(Jt, "DataView"), ps = zn(Jt, "Promise"), vs = zn(Jt, "Set"), Xa = "[object Map]", Pv = "[object Object]", Ja = "[object Promise]", Za = "[object Set]", Qa = "[object WeakMap]", el = "[object DataView]", $v = xn(fs), Rv = xn(Oo), Mv = xn(ps), Fv = xn(vs), Dv = xn(cs), bn = uo;
(fs && bn(new fs(new ArrayBuffer(1))) != el || Oo && bn(new Oo()) != Xa || ps && bn(ps.resolve()) != Ja || vs && bn(new vs()) != Za || cs && bn(new cs()) != Qa) && (bn = function(e) {
  var t = uo(e), n = t == Pv ? e.constructor : void 0, o = n ? xn(n) : "";
  if (o)
    switch (o) {
      case $v:
        return el;
      case Rv:
        return Xa;
      case Mv:
        return Ja;
      case Fv:
        return Za;
      case Dv:
        return Qa;
    }
  return t;
});
var tl = Jt.Uint8Array, Bv = "__lodash_hash_undefined__";
function Vv(e) {
  return this.__data__.set(e, Bv), this;
}
function xv(e) {
  return this.__data__.has(e);
}
function vr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new mn(); ++t < n; )
    this.add(e[t]);
}
vr.prototype.add = vr.prototype.push = Vv;
vr.prototype.has = xv;
function zv(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Hv(e, t) {
  return e.has(t);
}
var Wv = 1, Uv = 2;
function Ji(e, t, n, o, r, s) {
  var a = n & Wv, l = e.length, i = t.length;
  if (l != i && !(a && i > l))
    return !1;
  var u = s.get(e), d = s.get(t);
  if (u && d)
    return u == t && d == e;
  var f = -1, g = !0, m = n & Uv ? new vr() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < l; ) {
    var v = e[f], h = t[f];
    if (o)
      var y = a ? o(h, v, f, t, e, s) : o(v, h, f, e, t, s);
    if (y !== void 0) {
      if (y)
        continue;
      g = !1;
      break;
    }
    if (m) {
      if (!zv(t, function(p, C) {
        if (!Hv(m, C) && (v === p || r(v, p, n, o, s)))
          return m.push(C);
      })) {
        g = !1;
        break;
      }
    } else if (!(v === h || r(v, h, n, o, s))) {
      g = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), g;
}
function jv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, r) {
    n[++t] = [r, o];
  }), n;
}
function Gv(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var Kv = 1, Yv = 2, qv = "[object Boolean]", Xv = "[object Date]", Jv = "[object Error]", Zv = "[object Map]", Qv = "[object Number]", em = "[object RegExp]", tm = "[object Set]", nm = "[object String]", om = "[object Symbol]", rm = "[object ArrayBuffer]", sm = "[object DataView]", nl = Yt ? Yt.prototype : void 0, Xr = nl ? nl.valueOf : void 0;
function am(e, t, n, o, r, s, a) {
  switch (n) {
    case sm:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case rm:
      return !(e.byteLength != t.byteLength || !s(new tl(e), new tl(t)));
    case qv:
    case Xv:
    case Qv:
      return xs(+e, +t);
    case Jv:
      return e.name == t.name && e.message == t.message;
    case em:
    case nm:
      return e == t + "";
    case Zv:
      var l = jv;
    case tm:
      var i = o & Kv;
      if (l || (l = Gv), e.size != t.size && !i)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      o |= Yv, a.set(e, t);
      var d = Ji(l(e), l(t), o, r, s, a);
      return a.delete(e), d;
    case om:
      if (Xr)
        return Xr.call(e) == Xr.call(t);
  }
  return !1;
}
var lm = 1, im = Object.prototype, um = im.hasOwnProperty;
function cm(e, t, n, o, r, s) {
  var a = n & lm, l = qa(e), i = l.length, u = qa(t), d = u.length;
  if (i != d && !a)
    return !1;
  for (var f = i; f--; ) {
    var g = l[f];
    if (!(a ? g in t : um.call(t, g)))
      return !1;
  }
  var m = s.get(e), v = s.get(t);
  if (m && v)
    return m == t && v == e;
  var h = !0;
  s.set(e, t), s.set(t, e);
  for (var y = a; ++f < i; ) {
    g = l[f];
    var p = e[g], C = t[g];
    if (o)
      var k = a ? o(C, p, g, t, e, s) : o(p, C, g, e, t, s);
    if (!(k === void 0 ? p === C || r(p, C, n, o, s) : k)) {
      h = !1;
      break;
    }
    y || (y = g == "constructor");
  }
  if (h && !y) {
    var w = e.constructor, T = t.constructor;
    w != T && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof T == "function" && T instanceof T) && (h = !1);
  }
  return s.delete(e), s.delete(t), h;
}
var dm = 1, ol = "[object Arguments]", rl = "[object Array]", jo = "[object Object]", fm = Object.prototype, sl = fm.hasOwnProperty;
function pm(e, t, n, o, r, s) {
  var a = Vt(e), l = Vt(t), i = a ? rl : bn(e), u = l ? rl : bn(t);
  i = i == ol ? jo : i, u = u == ol ? jo : u;
  var d = i == jo, f = u == jo, g = i == u;
  if (g && ds(e)) {
    if (!ds(t))
      return !1;
    a = !0, d = !1;
  }
  if (g && !d)
    return s || (s = new un()), a || Yi(e) ? Ji(e, t, n, o, r, s) : am(e, t, i, n, o, r, s);
  if (!(n & dm)) {
    var m = d && sl.call(e, "__wrapped__"), v = f && sl.call(t, "__wrapped__");
    if (m || v) {
      var h = m ? e.value() : e, y = v ? t.value() : t;
      return s || (s = new un()), r(h, y, n, o, s);
    }
  }
  return g ? (s || (s = new un()), cm(e, t, n, o, r, s)) : !1;
}
function Nr(e, t, n, o, r) {
  return e === t ? !0 : e == null || t == null || !Zn(e) && !Zn(t) ? e !== e && t !== t : pm(e, t, n, o, Nr, r);
}
var vm = 1, mm = 2;
function gm(e, t, n, o) {
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
      if (!(f === void 0 ? Nr(u, i, vm | mm, o, d) : f))
        return !1;
    }
  }
  return !0;
}
function Zi(e) {
  return e === e && !On(e);
}
function hm(e) {
  for (var t = qi(e), n = t.length; n--; ) {
    var o = t[n], r = e[o];
    t[n] = [o, r, Zi(r)];
  }
  return t;
}
function Qi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function ym(e) {
  var t = hm(e);
  return t.length == 1 && t[0][2] ? Qi(t[0][0], t[0][1]) : function(n) {
    return n === e || gm(n, e, t);
  };
}
function bm(e, t) {
  return e != null && t in Object(e);
}
function _m(e, t, n) {
  t = Ar(t, e);
  for (var o = -1, r = t.length, s = !1; ++o < r; ) {
    var a = Ro(t[o]);
    if (!(s = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return s || ++o != r ? s : (r = e == null ? 0 : e.length, !!r && zs(r) && Vs(a, r) && (Vt(e) || Hs(e)));
}
function eu(e, t) {
  return e != null && _m(e, t, bm);
}
var wm = 1, Cm = 2;
function Sm(e, t) {
  return Ws(e) && Zi(t) ? Qi(Ro(e), t) : function(n) {
    var o = wn(n, e);
    return o === void 0 && o === t ? eu(n, e) : Nr(t, o, wm | Cm);
  };
}
function Em(e) {
  return function(t) {
    return t?.[e];
  };
}
function Tm(e) {
  return function(t) {
    return js(t, e);
  };
}
function Om(e) {
  return Ws(e) ? Em(Ro(e)) : Tm(e);
}
function Im(e) {
  return typeof e == "function" ? e : e == null ? Wi : typeof e == "object" ? Vt(e) ? Sm(e[0], e[1]) : ym(e) : Om(e);
}
var Jr = function() {
  return Jt.Date.now();
}, km = "Expected a function", Lm = Math.max, Am = Math.min;
function Nm(e, t, n) {
  var o, r, s, a, l, i, u = 0, d = !1, f = !1, g = !0;
  if (typeof e != "function")
    throw new TypeError(km);
  t = Va(t) || 0, On(n) && (d = !!n.leading, f = "maxWait" in n, s = f ? Lm(Va(n.maxWait) || 0, t) : s, g = "trailing" in n ? !!n.trailing : g);
  function m(I) {
    var E = o, H = r;
    return o = r = void 0, u = I, a = e.apply(H, E), a;
  }
  function v(I) {
    return u = I, l = setTimeout(p, t), d ? m(I) : a;
  }
  function h(I) {
    var E = I - i, H = I - u, V = t - E;
    return f ? Am(V, s - H) : V;
  }
  function y(I) {
    var E = I - i, H = I - u;
    return i === void 0 || E >= t || E < 0 || f && H >= s;
  }
  function p() {
    var I = Jr();
    if (y(I))
      return C(I);
    l = setTimeout(p, h(I));
  }
  function C(I) {
    return l = void 0, g && o ? m(I) : (o = r = void 0, a);
  }
  function k() {
    l !== void 0 && clearTimeout(l), u = 0, o = i = r = l = void 0;
  }
  function w() {
    return l === void 0 ? a : C(Jr());
  }
  function T() {
    var I = Jr(), E = y(I);
    if (o = arguments, r = this, i = I, E) {
      if (l === void 0)
        return v(i);
      if (f)
        return clearTimeout(l), l = setTimeout(p, t), m(i);
    }
    return l === void 0 && (l = setTimeout(p, t)), a;
  }
  return T.cancel = k, T.flush = w, T;
}
function Pm(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var r = o - 1;
  return Df(e, Im(t), r);
}
function mr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var r = e[t];
    o[r[0]] = r[1];
  }
  return o;
}
function bo(e, t) {
  return Nr(e, t);
}
function cn(e) {
  return e == null;
}
function tu(e) {
  return e === void 0;
}
function $m(e, t, n, o) {
  if (!On(e))
    return e;
  t = Ar(t, e);
  for (var r = -1, s = t.length, a = s - 1, l = e; l != null && ++r < s; ) {
    var i = Ro(t[r]), u = n;
    if (i === "__proto__" || i === "constructor" || i === "prototype")
      return e;
    if (r != a) {
      var d = l[i];
      u = void 0, u === void 0 && (u = On(d) ? d : Vs(t[r + 1]) ? [] : {});
    }
    Wf(l, i, u), l = l[i];
  }
  return e;
}
function Rm(e, t, n) {
  for (var o = -1, r = t.length, s = {}; ++o < r; ) {
    var a = t[o], l = js(e, a);
    n(l, a) && $m(s, Ar(a, e), l);
  }
  return s;
}
function Mm(e, t) {
  return Rm(e, t, function(n, o) {
    return eu(e, o);
  });
}
var Fm = bv(function(e, t) {
  return e == null ? {} : Mm(e, t);
});
const Ut = (e) => e === void 0, Io = (e) => typeof e == "boolean", Oe = (e) => typeof e == "number", Bt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Dm = (e) => St(e) ? !Number.isNaN(Number(e)) : !1;
var Bm = Object.defineProperty, Vm = Object.defineProperties, xm = Object.getOwnPropertyDescriptors, al = Object.getOwnPropertySymbols, zm = Object.prototype.hasOwnProperty, Hm = Object.prototype.propertyIsEnumerable, ll = (e, t, n) => t in e ? Bm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Wm = (e, t) => {
  for (var n in t || (t = {}))
    zm.call(t, n) && ll(e, n, t[n]);
  if (al)
    for (var n of al(t))
      Hm.call(t, n) && ll(e, n, t[n]);
  return e;
}, Um = (e, t) => Vm(e, xm(t));
function jm(e, t) {
  var n;
  const o = Sn();
  return Ps(() => {
    o.value = e();
  }, Um(Wm({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Tr(o);
}
var il;
const Ne = typeof window < "u", Gm = (e) => typeof e == "string", nu = () => {
}, ms = Ne && ((il = window?.navigator) == null ? void 0 : il.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Gs(e) {
  return typeof e == "function" ? e() : c(e);
}
function Km(e) {
  return e;
}
function Mo(e) {
  return gd() ? (Ri(e), !0) : !1;
}
function Ym(e, t = !0) {
  Je() ? Re(e) : t ? e() : Ve(e);
}
function gr(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, r = R(!1);
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
    }, Gs(t));
  }
  return o && (r.value = !0, Ne && i()), Mo(l), {
    isPending: Tr(r),
    start: i,
    stop: l
  };
}
function sn(e) {
  var t;
  const n = Gs(e);
  return (t = n?.$el) != null ? t : n;
}
const Pr = Ne ? window : void 0;
function Lt(...e) {
  let t, n, o, r;
  if (Gm(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = Pr) : [t, n, o, r] = e, !t)
    return nu;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], a = () => {
    s.forEach((d) => d()), s.length = 0;
  }, l = (d, f, g, m) => (d.addEventListener(f, g, m), () => d.removeEventListener(f, g, m)), i = ae(() => [sn(t), Gs(r)], ([d, f]) => {
    a(), d && s.push(...n.flatMap((g) => o.map((m) => l(d, g, m, f))));
  }, { immediate: !0, flush: "post" }), u = () => {
    i(), a();
  };
  return Mo(u), u;
}
let ul = !1;
function qm(e, t, n = {}) {
  const { window: o = Pr, ignore: r = [], capture: s = !0, detectIframe: a = !1 } = n;
  if (!o)
    return;
  ms && !ul && (ul = !0, Array.from(o.document.body.children).forEach((g) => g.addEventListener("click", nu)));
  let l = !0;
  const i = (g) => r.some((m) => {
    if (typeof m == "string")
      return Array.from(o.document.querySelectorAll(m)).some((v) => v === g.target || g.composedPath().includes(v));
    {
      const v = sn(m);
      return v && (g.target === v || g.composedPath().includes(v));
    }
  }), d = [
    Lt(o, "click", (g) => {
      const m = sn(e);
      if (!(!m || m === g.target || g.composedPath().includes(m))) {
        if (g.detail === 0 && (l = !i(g)), !l) {
          l = !0;
          return;
        }
        t(g);
      }
    }, { passive: !0, capture: s }),
    Lt(o, "pointerdown", (g) => {
      const m = sn(e);
      m && (l = !g.composedPath().includes(m) && !i(g));
    }, { passive: !0 }),
    a && Lt(o, "blur", (g) => {
      var m;
      const v = sn(e);
      ((m = o.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !v?.contains(o.document.activeElement) && t(g);
    })
  ].filter(Boolean);
  return () => d.forEach((g) => g());
}
function ou(e, t = !1) {
  const n = R(), o = () => n.value = !!e();
  return o(), Ym(o, t), n;
}
const cl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, dl = "__vueuse_ssr_handlers__";
cl[dl] = cl[dl] || {};
var fl = Object.getOwnPropertySymbols, Xm = Object.prototype.hasOwnProperty, Jm = Object.prototype.propertyIsEnumerable, Zm = (e, t) => {
  var n = {};
  for (var o in e)
    Xm.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && fl)
    for (var o of fl(e))
      t.indexOf(o) < 0 && Jm.call(e, o) && (n[o] = e[o]);
  return n;
};
function Ht(e, t, n = {}) {
  const o = n, { window: r = Pr } = o, s = Zm(o, ["window"]);
  let a;
  const l = ou(() => r && "ResizeObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, u = ae(() => sn(e), (f) => {
    i(), l.value && r && f && (a = new ResizeObserver(t), a.observe(f, s));
  }, { immediate: !0, flush: "post" }), d = () => {
    i(), u();
  };
  return Mo(d), {
    isSupported: l,
    stop: d
  };
}
var pl = Object.getOwnPropertySymbols, Qm = Object.prototype.hasOwnProperty, eg = Object.prototype.propertyIsEnumerable, tg = (e, t) => {
  var n = {};
  for (var o in e)
    Qm.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && pl)
    for (var o of pl(e))
      t.indexOf(o) < 0 && eg.call(e, o) && (n[o] = e[o]);
  return n;
};
function ng(e, t, n = {}) {
  const o = n, { window: r = Pr } = o, s = tg(o, ["window"]);
  let a;
  const l = ou(() => r && "MutationObserver" in r), i = () => {
    a && (a.disconnect(), a = void 0);
  }, u = ae(() => sn(e), (f) => {
    i(), l.value && r && f && (a = new MutationObserver(t), a.observe(f, s));
  }, { immediate: !0 }), d = () => {
    i(), u();
  };
  return Mo(d), {
    isSupported: l,
    stop: d
  };
}
var vl;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(vl || (vl = {}));
var og = Object.defineProperty, ml = Object.getOwnPropertySymbols, rg = Object.prototype.hasOwnProperty, sg = Object.prototype.propertyIsEnumerable, gl = (e, t, n) => t in e ? og(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ag = (e, t) => {
  for (var n in t || (t = {}))
    rg.call(t, n) && gl(e, n, t[n]);
  if (ml)
    for (var n of ml(t))
      sg.call(t, n) && gl(e, n, t[n]);
  return e;
};
const lg = {
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
ag({
  linear: Km
}, lg);
class ig extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ks(e, t) {
  throw new ig(`[${e}] ${t}`);
}
const hl = {
  current: 0
}, yl = R(0), ru = 2e3, bl = Symbol("elZIndexContextKey"), su = Symbol("zIndexContextKey"), Ys = (e) => {
  const t = Je() ? ie(bl, hl) : hl, n = e || (Je() ? ie(su, void 0) : void 0), o = O(() => {
    const a = c(n);
    return Oe(a) ? a : ru;
  }), r = O(() => o.value + yl.value), s = () => (t.current++, yl.value = t.current, r.value);
  return !Ne && ie(bl), {
    initialZIndex: o,
    currentZIndex: r,
    nextZIndex: s
  };
};
var ug = {
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
const cg = (e) => (t, n) => dg(t, n, c(e)), dg = (e, t, n) => wn(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var s;
  return `${(s = t?.[r]) != null ? s : `{${r}}`}`;
}), fg = (e) => {
  const t = O(() => c(e).name), n = rn(e) ? e : R(e);
  return {
    lang: t,
    locale: n,
    t: cg(e)
  };
}, au = Symbol("localeContextKey"), Fo = (e) => {
  const t = e || ie(au, R());
  return fg(O(() => t.value || ug));
}, lu = "__epPropKey", oe = (e) => e, pg = (e) => kt(e) && !!e[lu], $r = (e, t) => {
  if (!kt(e) || pg(e))
    return e;
  const { values: n, required: o, default: r, type: s, validator: a } = e, i = {
    type: s,
    required: !!o,
    validator: n || a ? (u) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), Ra(e, "default") && f.push(r), d || (d = f.includes(u))), a && (d || (d = a(u))), !d && f.length > 0) {
        const g = [...new Set(f)].map((m) => JSON.stringify(m)).join(", ");
        hd(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [lu]: !0
  };
  return Ra(e, "default") && (i.default = r), i;
}, me = (e) => mr(Object.entries(e).map(([t, n]) => [
  t,
  $r(n, t)
])), iu = ["", "default", "small", "large"], Do = $r({
  type: String,
  values: iu,
  required: !1
}), uu = Symbol("size"), vg = () => {
  const e = ie(uu, {});
  return O(() => c(e.size) || "");
}, cu = Symbol("emptyValuesContextKey"), mg = ["", void 0, null], gg = void 0, du = me({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => He(e) ? !e() : !e
  }
}), hg = (e, t) => {
  const n = Je() ? ie(cu, R({})) : R({}), o = O(() => e.emptyValues || n.value.emptyValues || mg), r = O(() => He(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : He(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : gg), s = (a) => o.value.includes(a);
  return o.value.includes(r.value), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: s
  };
}, _l = (e) => Object.keys(e), hr = R();
function Rr(e, t = void 0) {
  const n = Je() ? ie(Bi, hr) : hr;
  return e ? O(() => {
    var o, r;
    return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t;
  }) : n;
}
function fu(e, t) {
  const n = Rr(), o = Ee(e, O(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.namespace) || ho;
  })), r = Fo(O(() => {
    var l;
    return (l = n.value) == null ? void 0 : l.locale;
  })), s = Ys(O(() => {
    var l;
    return ((l = n.value) == null ? void 0 : l.zIndex) || ru;
  })), a = O(() => {
    var l;
    return c(t) || ((l = n.value) == null ? void 0 : l.size) || "";
  });
  return pu(O(() => c(n) || {})), {
    ns: o,
    locale: r,
    zIndex: s,
    size: a
  };
}
const pu = (e, t, n = !1) => {
  var o;
  const r = !!Je(), s = r ? Rr() : void 0, a = (o = void 0) != null ? o : r ? Ze : void 0;
  if (!a)
    return;
  const l = O(() => {
    const i = c(e);
    return s?.value ? yg(s.value, i) : i;
  });
  return a(Bi, l), a(au, O(() => l.value.locale)), a(Vi, O(() => l.value.namespace)), a(su, O(() => l.value.zIndex)), a(uu, {
    size: O(() => l.value.size || "")
  }), a(cu, O(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (n || !hr.value) && (hr.value = l.value), l;
}, yg = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([..._l(e), ..._l(t)])], o = {};
  for (const r of n)
    o[r] = t[r] !== void 0 ? t[r] : e[r];
  return o;
}, tt = "update:modelValue", Qn = "change", Jn = "input";
var ve = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
};
const vu = (e = "") => e.split(" ").filter((t) => !!t.trim()), wl = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, bg = (e, t) => {
  !e || !t.trim() || e.classList.add(...vu(t));
}, _g = (e, t) => {
  !e || !t.trim() || e.classList.remove(...vu(t));
}, wg = (e, t) => {
  var n;
  if (!Ne || !e)
    return "";
  let o = Gd(t);
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
function fn(e, t = "px") {
  if (!e)
    return "";
  if (Oe(e) || Dm(e))
    return `${e}${t}`;
  if (St(e))
    return e;
}
let Go;
const Cg = (e) => {
  var t;
  if (!Ne)
    return 0;
  if (Go !== void 0)
    return Go;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const o = n.offsetWidth;
  n.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", n.appendChild(r);
  const s = r.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), Go = o - s, Go;
};
function Sg(e, t) {
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
}, mu = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Bo = (e) => (e.install = En, e), Eg = me({
  size: {
    type: oe([Number, String])
  },
  color: {
    type: String
  }
}), Tg = Y({
  name: "ElIcon",
  inheritAttrs: !1
}), Og = /* @__PURE__ */ Y({
  ...Tg,
  props: Eg,
  setup(e) {
    const t = e, n = Ee("icon"), o = O(() => {
      const { size: r, color: s } = t;
      return !r && !s ? {} : {
        fontSize: Ut(r) ? void 0 : fn(r),
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
var Ig = /* @__PURE__ */ ve(Og, [["__file", "icon.vue"]]);
const Ge = Ot(Ig);
/*! Element Plus Icons Vue v2.3.1 */
var kg = /* @__PURE__ */ Y({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), qs = kg, Lg = /* @__PURE__ */ Y({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Ag = Lg, Ng = /* @__PURE__ */ Y({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (L(), x("svg", {
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
}), Pg = Ng, $g = /* @__PURE__ */ Y({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Rg = $g, Mg = /* @__PURE__ */ Y({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (L(), x("svg", {
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
}), Xs = Mg, Fg = /* @__PURE__ */ Y({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), yr = Fg, Dg = /* @__PURE__ */ Y({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (L(), x("svg", {
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
}), Bg = Dg, Vg = /* @__PURE__ */ Y({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), xg = Vg, zg = /* @__PURE__ */ Y({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), gu = zg, Hg = /* @__PURE__ */ Y({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), Wg = Hg, Ug = /* @__PURE__ */ Y({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), jg = Ug, Gg = /* @__PURE__ */ Y({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Kg = Gg, Yg = /* @__PURE__ */ Y({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), qg = Yg, Xg = /* @__PURE__ */ Y({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      N("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Jg = Xg;
const qt = oe([
  String,
  Object,
  Function
]), hu = {
  Close: yr
}, Zg = {
  Close: yr
}, br = {
  success: Kg,
  warning: Jg,
  error: Rg,
  info: xg
}, yu = {
  validating: gu,
  success: Pg,
  error: Xs
}, bu = () => Ne && /firefox/i.test(window.navigator.userAgent);
let gt;
const Qg = {
  height: "0",
  visibility: "hidden",
  overflow: bu() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, eh = [
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
function th(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: eh.map((a) => [
    a,
    t.getPropertyValue(a)
  ]), paddingSize: o, borderSize: r, boxSizing: n };
}
function Cl(e, t = 1, n) {
  var o;
  gt || (gt = document.createElement("textarea"), document.body.appendChild(gt));
  const { paddingSize: r, borderSize: s, boxSizing: a, contextStyle: l } = th(e);
  l.forEach(([f, g]) => gt?.style.setProperty(f, g)), Object.entries(Qg).forEach(([f, g]) => gt?.style.setProperty(f, g, "important")), gt.value = e.value || e.placeholder || "";
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
const _u = (e) => e, nh = me({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), co = (e) => Fm(nh, e), oh = me({
  id: {
    type: String,
    default: void 0
  },
  size: Do,
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
    type: qt
  },
  prefixIcon: {
    type: qt
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
    default: () => _u({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...co(["ariaLabel"])
}), rh = {
  [tt]: (e) => St(e),
  input: (e) => St(e),
  change: (e) => St(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, sh = ["class", "style"], ah = /^on[A-Z]/, lh = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = O(() => (n?.value || []).concat(sh)), r = Je();
  return r ? O(() => {
    var s;
    return mr(Object.entries((s = r.proxy) == null ? void 0 : s.$attrs).filter(([a]) => !o.value.includes(a) && !(t && ah.test(a))));
  }) : O(() => ({}));
}, Js = Symbol("formContextKey"), _r = Symbol("formItemContextKey"), Sl = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, ih = Symbol("elIdInjection"), wu = () => Je() ? ie(ih, Sl) : Sl, In = (e) => {
  const t = wu(), n = Bs();
  return jm(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Mr = () => {
  const e = ie(Js, void 0), t = ie(_r, void 0);
  return {
    form: e,
    formItem: t
  };
}, Cu = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = R(!1)), o || (o = R(!1));
  const r = R();
  let s;
  const a = O(() => {
    var l;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((l = t.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return Re(() => {
    s = ae([lt(e, "id"), n], ([l, i]) => {
      const u = l ?? (i ? void 0 : In().value);
      u !== r.value && (t?.removeInputId && (r.value && t.removeInputId(r.value), !o?.value && !i && u && t.addInputId(u)), r.value = u);
    }, { immediate: !0 });
  }), $s(() => {
    s && s(), t?.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: a,
    inputId: r
  };
}, Su = (e) => {
  const t = Je();
  return O(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, fo = (e, t = {}) => {
  const n = R(void 0), o = t.prop ? n : Su("size"), r = t.global ? n : vg(), s = t.form ? { size: void 0 } : ie(Js, void 0), a = t.formItem ? { size: void 0 } : ie(_r, void 0);
  return O(() => o.value || c(e) || a?.size || s?.size || r.value || "");
}, Fr = (e) => {
  const t = Su("disabled"), n = ie(Js, void 0);
  return O(() => t.value || c(e) || n?.disabled || !1);
};
function Eu(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: r
} = {}) {
  const s = Je(), { emit: a } = s, l = Sn(), i = R(!1), u = (g) => {
    He(t) && t(g) || i.value || (i.value = !0, a("focus", g), n?.());
  }, d = (g) => {
    var m;
    He(o) && o(g) || g.relatedTarget && ((m = l.value) != null && m.contains(g.relatedTarget)) || (i.value = !1, a("blur", g), r?.());
  }, f = () => {
    var g, m;
    (g = l.value) != null && g.contains(document.activeElement) && l.value !== document.activeElement || (m = e.value) == null || m.focus();
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
const uh = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Tu({
  afterComposition: e,
  emit: t
}) {
  const n = R(!1), o = (l) => {
    t?.("compositionstart", l), n.value = !0;
  }, r = (l) => {
    var i;
    t?.("compositionupdate", l);
    const u = (i = l.target) == null ? void 0 : i.value, d = u[u.length - 1] || "";
    n.value = !uh(d);
  }, s = (l) => {
    t?.("compositionend", l), n.value && (n.value = !1, Ve(() => e(l)));
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
function ch(e) {
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
const dh = "ElInput", fh = Y({
  name: dh,
  inheritAttrs: !1
}), ph = /* @__PURE__ */ Y({
  ...fh,
  props: oh,
  emits: rh,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = yd(), s = lh(), a = Rs(), l = O(() => [
      o.type === "textarea" ? h.b() : v.b(),
      v.m(g.value),
      v.is("disabled", m.value),
      v.is("exceed", Me.value),
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
    ]), { form: u, formItem: d } = Mr(), { inputId: f } = Cu(o, {
      formItemContext: d
    }), g = fo(), m = Fr(), v = Ee("input"), h = Ee("textarea"), y = Sn(), p = Sn(), C = R(!1), k = R(!1), w = R(), T = Sn(o.inputStyle), I = O(() => y.value || p.value), { wrapperRef: E, isFocused: H, handleFocus: V, handleBlur: Z } = Eu(I, {
      beforeFocus() {
        return m.value;
      },
      afterBlur() {
        var _;
        o.validateEvent && ((_ = d?.validate) == null || _.call(d, "blur").catch((F) => void 0));
      }
    }), G = O(() => {
      var _;
      return (_ = u?.statusIcon) != null ? _ : !1;
    }), J = O(() => d?.validateState || ""), le = O(() => J.value && yu[J.value]), Te = O(() => k.value ? qg : Bg), $ = O(() => [
      r.style
    ]), M = O(() => [
      o.inputStyle,
      T.value,
      { resize: o.resize }
    ]), D = O(() => cn(o.modelValue) ? "" : String(o.modelValue)), re = O(() => o.clearable && !m.value && !o.readonly && !!D.value && (H.value || C.value)), se = O(() => o.showPassword && !m.value && !!D.value && (!!D.value || H.value)), pe = O(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !m.value && !o.readonly && !o.showPassword), Ae = O(() => D.value.length), Me = O(() => !!pe.value && Ae.value > Number(o.maxlength)), we = O(() => !!a.suffix || !!o.suffixIcon || re.value || o.showPassword || pe.value || !!J.value && G.value), [Ye, Ue] = ch(y);
    Ht(p, (_) => {
      if (ye(), !pe.value || o.resize !== "both")
        return;
      const F = _[0], { width: ce } = F.contentRect;
      w.value = {
        right: `calc(100% - ${ce + 15 + 6}px)`
      };
    });
    const qe = () => {
      const { type: _, autosize: F } = o;
      if (!(!Ne || _ !== "textarea" || !p.value))
        if (F) {
          const ce = kt(F) ? F.minRows : void 0, be = kt(F) ? F.maxRows : void 0, rt = Cl(p.value, ce, be);
          T.value = {
            overflowY: "hidden",
            ...rt
          }, Ve(() => {
            p.value.offsetHeight, T.value = rt;
          });
        } else
          T.value = {
            minHeight: Cl(p.value).minHeight
          };
    }, ye = ((_) => {
      let F = !1;
      return () => {
        var ce;
        if (F || !o.autosize)
          return;
        ((ce = p.value) == null ? void 0 : ce.offsetParent) === null || (_(), F = !0);
      };
    })(qe), ut = () => {
      const _ = I.value, F = o.formatter ? o.formatter(D.value) : D.value;
      !_ || _.value === F || (_.value = F);
    }, mt = async (_) => {
      Ye();
      let { value: F } = _.target;
      if (o.formatter && o.parser && (F = o.parser(F)), !_t.value) {
        if (F === D.value) {
          ut();
          return;
        }
        n(tt, F), n(Jn, F), await Ve(), ut(), Ue();
      }
    }, ct = (_) => {
      let { value: F } = _.target;
      o.formatter && o.parser && (F = o.parser(F)), n(Qn, F);
    }, {
      isComposing: _t,
      handleCompositionStart: dt,
      handleCompositionUpdate: ft,
      handleCompositionEnd: B
    } = Tu({ emit: n, afterComposition: mt }), U = () => {
      Ye(), k.value = !k.value, setTimeout(Ue);
    }, Ce = () => {
      var _;
      return (_ = I.value) == null ? void 0 : _.focus();
    }, b = () => {
      var _;
      return (_ = I.value) == null ? void 0 : _.blur();
    }, S = (_) => {
      C.value = !1, n("mouseleave", _);
    }, A = (_) => {
      C.value = !0, n("mouseenter", _);
    }, q = (_) => {
      n("keydown", _);
    }, fe = () => {
      var _;
      (_ = I.value) == null || _.select();
    }, ue = () => {
      n(tt, ""), n(Qn, ""), n("clear"), n(Jn, "");
    };
    return ae(() => o.modelValue, () => {
      var _;
      Ve(() => qe()), o.validateEvent && ((_ = d?.validate) == null || _.call(d, "change").catch((F) => void 0));
    }), ae(D, () => ut()), ae(() => o.type, async () => {
      await Ve(), ut(), qe();
    }), Re(() => {
      !o.formatter && o.parser, ut(), Ve(qe);
    }), t({
      input: y,
      textarea: p,
      ref: I,
      textareaStyle: M,
      autosize: lt(o, "autosize"),
      isComposing: _t,
      focus: Ce,
      blur: b,
      select: fe,
      clear: ue,
      resizeTextarea: qe
    }), (_, F) => (L(), x("div", {
      class: z([
        c(l),
        {
          [c(v).bm("group", "append")]: _.$slots.append,
          [c(v).bm("group", "prepend")]: _.$slots.prepend
        }
      ]),
      style: Ke(c($)),
      onMouseenter: A,
      onMouseleave: S
    }, [
      W(" input "),
      _.type !== "textarea" ? (L(), x(ke, { key: 0 }, [
        W(" prepend slot "),
        _.$slots.prepend ? (L(), x("div", {
          key: 0,
          class: z(c(v).be("group", "prepend"))
        }, [
          Q(_.$slots, "prepend")
        ], 2)) : W("v-if", !0),
        N("div", {
          ref_key: "wrapperRef",
          ref: E,
          class: z(c(i))
        }, [
          W(" prefix slot "),
          _.$slots.prefix || _.prefixIcon ? (L(), x("span", {
            key: 0,
            class: z(c(v).e("prefix"))
          }, [
            N("span", {
              class: z(c(v).e("prefix-inner"))
            }, [
              Q(_.$slots, "prefix"),
              _.prefixIcon ? (L(), te(c(Ge), {
                key: 0,
                class: z(c(v).e("icon"))
              }, {
                default: j(() => [
                  (L(), te(pt(_.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 2)) : W("v-if", !0),
          N("input", Nt({
            id: c(f),
            ref_key: "input",
            ref: y,
            class: c(v).e("inner")
          }, c(s), {
            minlength: _.minlength,
            maxlength: _.maxlength,
            type: _.showPassword ? k.value ? "text" : "password" : _.type,
            disabled: c(m),
            readonly: _.readonly,
            autocomplete: _.autocomplete,
            tabindex: _.tabindex,
            "aria-label": _.ariaLabel,
            placeholder: _.placeholder,
            style: _.inputStyle,
            form: _.form,
            autofocus: _.autofocus,
            role: _.containerRole,
            onCompositionstart: c(dt),
            onCompositionupdate: c(ft),
            onCompositionend: c(B),
            onInput: mt,
            onChange: ct,
            onKeydown: q
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          W(" suffix slot "),
          c(we) ? (L(), x("span", {
            key: 1,
            class: z(c(v).e("suffix"))
          }, [
            N("span", {
              class: z(c(v).e("suffix-inner"))
            }, [
              !c(re) || !c(se) || !c(pe) ? (L(), x(ke, { key: 0 }, [
                Q(_.$slots, "suffix"),
                _.suffixIcon ? (L(), te(c(Ge), {
                  key: 0,
                  class: z(c(v).e("icon"))
                }, {
                  default: j(() => [
                    (L(), te(pt(_.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : W("v-if", !0)
              ], 64)) : W("v-if", !0),
              c(re) ? (L(), te(c(Ge), {
                key: 1,
                class: z([c(v).e("icon"), c(v).e("clear")]),
                onMousedown: Fe(c(En), ["prevent"]),
                onClick: ue
              }, {
                default: j(() => [
                  K(c(Xs))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : W("v-if", !0),
              c(se) ? (L(), te(c(Ge), {
                key: 2,
                class: z([c(v).e("icon"), c(v).e("password")]),
                onClick: U
              }, {
                default: j(() => [
                  (L(), te(pt(c(Te))))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0),
              c(pe) ? (L(), x("span", {
                key: 3,
                class: z(c(v).e("count"))
              }, [
                N("span", {
                  class: z(c(v).e("count-inner"))
                }, ee(c(Ae)) + " / " + ee(_.maxlength), 3)
              ], 2)) : W("v-if", !0),
              c(J) && c(le) && c(G) ? (L(), te(c(Ge), {
                key: 4,
                class: z([
                  c(v).e("icon"),
                  c(v).e("validateIcon"),
                  c(v).is("loading", c(J) === "validating")
                ])
              }, {
                default: j(() => [
                  (L(), te(pt(c(le))))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 2)) : W("v-if", !0)
        ], 2),
        W(" append slot "),
        _.$slots.append ? (L(), x("div", {
          key: 1,
          class: z(c(v).be("group", "append"))
        }, [
          Q(_.$slots, "append")
        ], 2)) : W("v-if", !0)
      ], 64)) : (L(), x(ke, { key: 1 }, [
        W(" textarea "),
        N("textarea", Nt({
          id: c(f),
          ref_key: "textarea",
          ref: p,
          class: [c(h).e("inner"), c(v).is("focus", c(H))]
        }, c(s), {
          minlength: _.minlength,
          maxlength: _.maxlength,
          tabindex: _.tabindex,
          disabled: c(m),
          readonly: _.readonly,
          autocomplete: _.autocomplete,
          style: c(M),
          "aria-label": _.ariaLabel,
          placeholder: _.placeholder,
          form: _.form,
          autofocus: _.autofocus,
          rows: _.rows,
          role: _.containerRole,
          onCompositionstart: c(dt),
          onCompositionupdate: c(ft),
          onCompositionend: c(B),
          onInput: mt,
          onFocus: c(V),
          onBlur: c(Z),
          onChange: ct,
          onKeydown: q
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(pe) ? (L(), x("span", {
          key: 0,
          style: Ke(w.value),
          class: z(c(v).e("count"))
        }, ee(c(Ae)) + " / " + ee(_.maxlength), 7)) : W("v-if", !0)
      ], 64))
    ], 38));
  }
});
var vh = /* @__PURE__ */ ve(ph, [["__file", "input.vue"]]);
const mh = Ot(vh), jn = 4, gh = {
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
}, hh = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Zs = Symbol("scrollbarContextKey"), yh = me({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), bh = "Thumb", _h = /* @__PURE__ */ Y({
  __name: "thumb",
  props: yh,
  setup(e) {
    const t = e, n = ie(Zs), o = Ee("scrollbar");
    n || Ks(bh, "can not inject scrollbar context");
    const r = R(), s = R(), a = R({}), l = R(!1);
    let i = !1, u = !1, d = Ne ? document.onselectstart : null;
    const f = O(() => gh[t.vertical ? "vertical" : "horizontal"]), g = O(() => hh({
      size: t.size,
      move: t.move,
      bar: f.value
    })), m = O(() => r.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / s.value[f.value.offset]), v = (I) => {
      var E;
      if (I.stopPropagation(), I.ctrlKey || [1, 2].includes(I.button))
        return;
      (E = window.getSelection()) == null || E.removeAllRanges(), y(I);
      const H = I.currentTarget;
      H && (a.value[f.value.axis] = H[f.value.offset] - (I[f.value.client] - H.getBoundingClientRect()[f.value.direction]));
    }, h = (I) => {
      if (!s.value || !r.value || !n.wrapElement)
        return;
      const E = Math.abs(I.target.getBoundingClientRect()[f.value.direction] - I[f.value.client]), H = s.value[f.value.offset] / 2, V = (E - H) * 100 * m.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = V * n.wrapElement[f.value.scrollSize] / 100;
    }, y = (I) => {
      I.stopImmediatePropagation(), i = !0, document.addEventListener("mousemove", p), document.addEventListener("mouseup", C), d = document.onselectstart, document.onselectstart = () => !1;
    }, p = (I) => {
      if (!r.value || !s.value || i === !1)
        return;
      const E = a.value[f.value.axis];
      if (!E)
        return;
      const H = (r.value.getBoundingClientRect()[f.value.direction] - I[f.value.client]) * -1, V = s.value[f.value.offset] - E, Z = (H - V) * 100 * m.value / r.value[f.value.offset];
      n.wrapElement[f.value.scroll] = Z * n.wrapElement[f.value.scrollSize] / 100;
    }, C = () => {
      i = !1, a.value[f.value.axis] = 0, document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", C), T(), u && (l.value = !1);
    }, k = () => {
      u = !1, l.value = !!t.size;
    }, w = () => {
      u = !0, l.value = i;
    };
    Tt(() => {
      T(), document.removeEventListener("mouseup", C);
    });
    const T = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Lt(lt(n, "scrollbarElement"), "mousemove", k), Lt(lt(n, "scrollbarElement"), "mouseleave", w), (I, E) => (L(), te(kn, {
      name: c(o).b("fade"),
      persisted: ""
    }, {
      default: j(() => [
        vt(N("div", {
          ref_key: "instance",
          ref: r,
          class: z([c(o).e("bar"), c(o).is(c(f).key)]),
          onMousedown: h
        }, [
          N("div", {
            ref_key: "thumb",
            ref: s,
            class: z(c(o).e("thumb")),
            style: Ke(c(g)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [Kt, I.always || l.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var El = /* @__PURE__ */ ve(_h, [["__file", "thumb.vue"]]);
const wh = me({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Ch = /* @__PURE__ */ Y({
  __name: "bar",
  props: wh,
  setup(e, { expose: t }) {
    const n = e, o = ie(Zs), r = R(0), s = R(0), a = R(""), l = R(""), i = R(1), u = R(1);
    return t({
      handleScroll: (g) => {
        if (g) {
          const m = g.offsetHeight - jn, v = g.offsetWidth - jn;
          s.value = g.scrollTop * 100 / m * i.value, r.value = g.scrollLeft * 100 / v * u.value;
        }
      },
      update: () => {
        const g = o?.wrapElement;
        if (!g)
          return;
        const m = g.offsetHeight - jn, v = g.offsetWidth - jn, h = m ** 2 / g.scrollHeight, y = v ** 2 / g.scrollWidth, p = Math.max(h, n.minSize), C = Math.max(y, n.minSize);
        i.value = h / (m - h) / (p / (m - p)), u.value = y / (v - y) / (C / (v - C)), l.value = p + jn < m ? `${p}px` : "", a.value = C + jn < v ? `${C}px` : "";
      }
    }), (g, m) => (L(), x(ke, null, [
      K(El, {
        move: r.value,
        ratio: u.value,
        size: a.value,
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      K(El, {
        move: s.value,
        ratio: i.value,
        size: l.value,
        vertical: "",
        always: g.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Sh = /* @__PURE__ */ ve(Ch, [["__file", "bar.vue"]]);
const Eh = me({
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
  ...co(["ariaLabel", "ariaOrientation"])
}), Th = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Oe)
}, Oh = "ElScrollbar", Ih = Y({
  name: Oh
}), kh = /* @__PURE__ */ Y({
  ...Ih,
  props: Eh,
  emits: Th,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = Ee("scrollbar");
    let s, a, l = 0, i = 0;
    const u = R(), d = R(), f = R(), g = R(), m = O(() => {
      const T = {};
      return o.height && (T.height = fn(o.height)), o.maxHeight && (T.maxHeight = fn(o.maxHeight)), [o.wrapStyle, T];
    }), v = O(() => [
      o.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !o.native }
    ]), h = O(() => [r.e("view"), o.viewClass]), y = () => {
      var T;
      d.value && ((T = g.value) == null || T.handleScroll(d.value), l = d.value.scrollTop, i = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function p(T, I) {
      kt(T) ? d.value.scrollTo(T) : Oe(T) && Oe(I) && d.value.scrollTo(T, I);
    }
    const C = (T) => {
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
      o.native || Ve(() => {
        var T;
        w(), d.value && ((T = g.value) == null || T.handleScroll(d.value));
      });
    }), Ze(Zs, Tn({
      scrollbarElement: u,
      wrapElement: d
    })), bd(() => {
      d.value && (d.value.scrollTop = l, d.value.scrollLeft = i);
    }), Re(() => {
      o.native || Ve(() => {
        w();
      });
    }), Mi(() => w()), t({
      wrapRef: d,
      update: w,
      scrollTo: p,
      setScrollTop: C,
      setScrollLeft: k,
      handleScroll: y
    }), (T, I) => (L(), x("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: z(c(r).b())
    }, [
      N("div", {
        ref_key: "wrapRef",
        ref: d,
        class: z(c(v)),
        style: Ke(c(m)),
        tabindex: T.tabindex,
        onScroll: y
      }, [
        (L(), te(pt(T.tag), {
          id: T.id,
          ref_key: "resizeRef",
          ref: f,
          class: z(c(h)),
          style: Ke(T.viewStyle),
          role: T.role,
          "aria-label": T.ariaLabel,
          "aria-orientation": T.ariaOrientation
        }, {
          default: j(() => [
            Q(T.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      T.native ? W("v-if", !0) : (L(), te(Sh, {
        key: 0,
        ref_key: "barRef",
        ref: g,
        always: T.always,
        "min-size": T.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Lh = /* @__PURE__ */ ve(kh, [["__file", "scrollbar.vue"]]);
const Ou = Ot(Lh), Qs = Symbol("popper"), Iu = Symbol("popperContent"), ku = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Lu = me({
  role: {
    type: String,
    values: ku,
    default: "tooltip"
  }
}), Ah = Y({
  name: "ElPopper",
  inheritAttrs: !1
}), Nh = /* @__PURE__ */ Y({
  ...Ah,
  props: Lu,
  setup(e, { expose: t }) {
    const n = e, o = R(), r = R(), s = R(), a = R(), l = O(() => n.role), i = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: s,
      referenceRef: a,
      role: l
    };
    return t(i), Ze(Qs, i), (u, d) => Q(u.$slots, "default");
  }
});
var Ph = /* @__PURE__ */ ve(Nh, [["__file", "popper.vue"]]);
const Au = me({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), $h = Y({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Rh = /* @__PURE__ */ Y({
  ...$h,
  props: Au,
  setup(e, { expose: t }) {
    const n = e, o = Ee("popper"), { arrowOffset: r, arrowRef: s, arrowStyle: a } = ie(Iu, void 0);
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
      style: Ke(c(a)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Mh = /* @__PURE__ */ ve(Rh, [["__file", "arrow.vue"]]);
const Nu = me({
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
}), Pu = Symbol("elForwardRef"), Fh = (e) => {
  Ze(Pu, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Dh = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), gs = (e) => {
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
}, Bh = "ElOnlyChild", $u = Y({
  name: Bh,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = ie(Pu), s = Dh((o = r?.setForwardRef) != null ? o : En);
    return () => {
      var a;
      const l = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!l || l.length > 1)
        return null;
      const i = Ru(l);
      return i ? vt(_d(i, n), [[s]]) : null;
    };
  }
});
function Ru(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (kt(n))
      switch (n.type) {
        case wd:
          continue;
        case Ms:
        case "svg":
          return Tl(n);
        case ke:
          return Ru(n.children);
        default:
          return n;
      }
    return Tl(n);
  }
  return null;
}
function Tl(e) {
  const t = Ee("only-child");
  return K("span", {
    class: t.e("content")
  }, [e]);
}
const Vh = Y({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), xh = /* @__PURE__ */ Y({
  ...Vh,
  props: Nu,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = ie(Qs, void 0);
    Fh(r);
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
    return Re(() => {
      ae(() => n.virtualRef, (f) => {
        f && (r.value = sn(f));
      }, {
        immediate: !0
      }), ae(r, (f, g) => {
        u?.(), u = void 0, Bt(f) && (d.forEach((m) => {
          var v;
          const h = n[m];
          h && (f.addEventListener(m.slice(2).toLowerCase(), h), (v = g?.removeEventListener) == null || v.call(g, m.slice(2).toLowerCase(), h));
        }), gs(f) && (u = ae([s, a, l, i], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, h) => {
            cn(m[h]) ? f.removeAttribute(v) : f.setAttribute(v, m[h]);
          });
        }, { immediate: !0 }))), Bt(g) && gs(g) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((m) => g.removeAttribute(m));
      }, {
        immediate: !0
      });
    }), Tt(() => {
      if (u?.(), u = void 0, r.value && Bt(r.value)) {
        const f = r.value;
        d.forEach((g) => {
          const m = n[g];
          m && f.removeEventListener(g.slice(2).toLowerCase(), m);
        }), r.value = void 0;
      }
    }), t({
      triggerRef: r
    }), (f, g) => f.virtualTriggering ? W("v-if", !0) : (L(), te(c($u), Nt({ key: 0 }, f.$attrs, {
      "aria-controls": c(s),
      "aria-describedby": c(a),
      "aria-expanded": c(i),
      "aria-haspopup": c(l)
    }), {
      default: j(() => [
        Q(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var zh = /* @__PURE__ */ ve(xh, [["__file", "trigger.vue"]]);
const Zr = "focus-trap.focus-after-trapped", Qr = "focus-trap.focus-after-released", Hh = "focus-trap.focusout-prevented", Ol = {
  cancelable: !0,
  bubbles: !1
}, Wh = {
  cancelable: !0,
  bubbles: !1
}, Il = "focusAfterTrapped", kl = "focusAfterReleased", ea = Symbol("elFocusTrap"), ta = R(), Dr = R(0), na = R(0);
let Ko = 0;
const Mu = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Ll = (e, t) => {
  for (const n of e)
    if (!Uh(n, t))
      return n;
}, Uh = (e, t) => {
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
}, jh = (e) => {
  const t = Mu(e), n = Ll(t, e), o = Ll(t.reverse(), e);
  return [n, o];
}, Gh = (e) => e instanceof HTMLInputElement && "select" in e, en = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    Bt(e) && !gs(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), na.value = window.performance.now(), e !== n && Gh(e) && t && e.select(), Bt(e) && o && e.removeAttribute("tabindex");
  }
};
function Al(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Kh = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Al(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, s;
      e = Al(e, o), (s = (r = e[0]) == null ? void 0 : r.resume) == null || s.call(r);
    }
  };
}, Yh = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (en(o, t), document.activeElement !== n)
      return;
}, Nl = Kh(), qh = () => Dr.value > na.value, Yo = () => {
  ta.value = "pointer", Dr.value = window.performance.now();
}, Pl = () => {
  ta.value = "keyboard", Dr.value = window.performance.now();
}, Xh = () => (Re(() => {
  Ko === 0 && (document.addEventListener("mousedown", Yo), document.addEventListener("touchstart", Yo), document.addEventListener("keydown", Pl)), Ko++;
}), Tt(() => {
  Ko--, Ko <= 0 && (document.removeEventListener("mousedown", Yo), document.removeEventListener("touchstart", Yo), document.removeEventListener("keydown", Pl));
}), {
  focusReason: ta,
  lastUserFocusTimestamp: Dr,
  lastAutomatedFocusTimestamp: na
}), qo = (e) => new CustomEvent(Hh, {
  ...Wh,
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
let Yn = [];
const $l = (e) => {
  e.code === Le.esc && Yn.forEach((t) => t(e));
}, Jh = (e) => {
  Re(() => {
    Yn.length === 0 && document.addEventListener("keydown", $l), Ne && Yn.push(e);
  }), Tt(() => {
    Yn = Yn.filter((t) => t !== e), Yn.length === 0 && Ne && document.removeEventListener("keydown", $l);
  });
}, Zh = Y({
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
    Il,
    kl,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = R();
    let o, r;
    const { focusReason: s } = Xh();
    Jh((v) => {
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
      const { code: h, altKey: y, ctrlKey: p, metaKey: C, currentTarget: k, shiftKey: w } = v, { loop: T } = e, I = h === Le.tab && !y && !p && !C, E = document.activeElement;
      if (I && E) {
        const H = k, [V, Z] = jh(H);
        if (V && Z) {
          if (!w && E === Z) {
            const J = qo({
              focusReason: s.value
            });
            t("focusout-prevented", J), J.defaultPrevented || (v.preventDefault(), T && en(V, !0));
          } else if (w && [V, H].includes(E)) {
            const J = qo({
              focusReason: s.value
            });
            t("focusout-prevented", J), J.defaultPrevented || (v.preventDefault(), T && en(Z, !0));
          }
        } else if (E === H) {
          const J = qo({
            focusReason: s.value
          });
          t("focusout-prevented", J), J.defaultPrevented || v.preventDefault();
        }
      }
    };
    Ze(ea, {
      focusTrapRef: n,
      onKeydown: l
    }), ae(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), ae([n], ([v], [h]) => {
      v && (v.addEventListener("keydown", l), v.addEventListener("focusin", d), v.addEventListener("focusout", f)), h && (h.removeEventListener("keydown", l), h.removeEventListener("focusin", d), h.removeEventListener("focusout", f));
    });
    const i = (v) => {
      t(Il, v);
    }, u = (v) => t(kl, v), d = (v) => {
      const h = c(n);
      if (!h)
        return;
      const y = v.target, p = v.relatedTarget, C = y && h.contains(y);
      e.trapped || p && h.contains(p) || (o = p), C && t("focusin", v), !a.paused && e.trapped && (C ? r = y : en(r, !0));
    }, f = (v) => {
      const h = c(n);
      if (!(a.paused || !h))
        if (e.trapped) {
          const y = v.relatedTarget;
          !cn(y) && !h.contains(y) && setTimeout(() => {
            if (!a.paused && e.trapped) {
              const p = qo({
                focusReason: s.value
              });
              t("focusout-prevented", p), p.defaultPrevented || en(r, !0);
            }
          }, 0);
        } else {
          const y = v.target;
          y && h.contains(y) || t("focusout", v);
        }
    };
    async function g() {
      await Ve();
      const v = c(n);
      if (v) {
        Nl.push(a);
        const h = v.contains(document.activeElement) ? o : document.activeElement;
        if (o = h, !v.contains(h)) {
          const p = new Event(Zr, Ol);
          v.addEventListener(Zr, i), v.dispatchEvent(p), p.defaultPrevented || Ve(() => {
            let C = e.focusStartEl;
            St(C) || (en(C), document.activeElement !== C && (C = "first")), C === "first" && Yh(Mu(v), !0), (document.activeElement === h || C === "container") && en(v);
          });
        }
      }
    }
    function m() {
      const v = c(n);
      if (v) {
        v.removeEventListener(Zr, i);
        const h = new CustomEvent(Qr, {
          ...Ol,
          detail: {
            focusReason: s.value
          }
        });
        v.addEventListener(Qr, u), v.dispatchEvent(h), !h.defaultPrevented && (s.value == "keyboard" || !qh() || v.contains(document.activeElement)) && en(o ?? document.body), v.removeEventListener(Qr, u), Nl.remove(a);
      }
    }
    return Re(() => {
      e.trapped && g(), ae(() => e.trapped, (v) => {
        v ? g() : m();
      });
    }), Tt(() => {
      e.trapped && m(), n.value && (n.value.removeEventListener("keydown", l), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", f), n.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function Qh(e, t, n, o, r, s) {
  return Q(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Fu = /* @__PURE__ */ ve(Zh, [["render", Qh], ["__file", "focus-trap.vue"]]), yt = "top", Pt = "bottom", $t = "right", bt = "left", oa = "auto", Vo = [yt, Pt, $t, bt], eo = "start", ko = "end", e0 = "clippingParents", Du = "viewport", mo = "popper", t0 = "reference", Rl = Vo.reduce(function(e, t) {
  return e.concat([t + "-" + eo, t + "-" + ko]);
}, []), Br = [].concat(Vo, [oa]).reduce(function(e, t) {
  return e.concat([t, t + "-" + eo, t + "-" + ko]);
}, []), n0 = "beforeRead", o0 = "read", r0 = "afterRead", s0 = "beforeMain", a0 = "main", l0 = "afterMain", i0 = "beforeWrite", u0 = "write", c0 = "afterWrite", d0 = [n0, o0, r0, s0, a0, l0, i0, u0, c0];
function Xt(e) {
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
function ra(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Et(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function f0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, s = t.elements[n];
    !At(s) || !Xt(s) || (Object.assign(s.style, o), Object.keys(r).forEach(function(a) {
      var l = r[a];
      l === !1 ? s.removeAttribute(a) : s.setAttribute(a, l === !0 ? "" : l);
    }));
  });
}
function p0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], s = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), l = a.reduce(function(i, u) {
        return i[u] = "", i;
      }, {});
      !At(r) || !Xt(r) || (Object.assign(r.style, l), Object.keys(s).forEach(function(i) {
        r.removeAttribute(i);
      }));
    });
  };
}
var Bu = { name: "applyStyles", enabled: !0, phase: "write", fn: f0, effect: p0, requires: ["computeStyles"] };
function jt(e) {
  return e.split("-")[0];
}
var Dn = Math.max, wr = Math.min, to = Math.round;
function hs() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Vu() {
  return !/^((?!chrome|android).)*safari/i.test(hs());
}
function no(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), r = 1, s = 1;
  t && At(e) && (r = e.offsetWidth > 0 && to(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && to(o.height) / e.offsetHeight || 1);
  var a = Vn(e) ? Et(e) : window, l = a.visualViewport, i = !Vu() && n, u = (o.left + (i && l ? l.offsetLeft : 0)) / r, d = (o.top + (i && l ? l.offsetTop : 0)) / s, f = o.width / r, g = o.height / s;
  return { width: f, height: g, top: d, right: u + f, bottom: d + g, left: u, x: u, y: d };
}
function sa(e) {
  var t = no(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function xu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ra(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function pn(e) {
  return Et(e).getComputedStyle(e);
}
function v0(e) {
  return ["table", "td", "th"].indexOf(Xt(e)) >= 0;
}
function Ln(e) {
  return ((Vn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Vr(e) {
  return Xt(e) === "html" ? e : e.assignedSlot || e.parentNode || (ra(e) ? e.host : null) || Ln(e);
}
function Ml(e) {
  return !At(e) || pn(e).position === "fixed" ? null : e.offsetParent;
}
function m0(e) {
  var t = /firefox/i.test(hs()), n = /Trident/i.test(hs());
  if (n && At(e)) {
    var o = pn(e);
    if (o.position === "fixed") return null;
  }
  var r = Vr(e);
  for (ra(r) && (r = r.host); At(r) && ["html", "body"].indexOf(Xt(r)) < 0; ) {
    var s = pn(r);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
    r = r.parentNode;
  }
  return null;
}
function xo(e) {
  for (var t = Et(e), n = Ml(e); n && v0(n) && pn(n).position === "static"; ) n = Ml(n);
  return n && (Xt(n) === "html" || Xt(n) === "body" && pn(n).position === "static") ? t : n || m0(e) || t;
}
function aa(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function _o(e, t, n) {
  return Dn(e, wr(t, n));
}
function g0(e, t, n) {
  var o = _o(e, t, n);
  return o > n ? n : o;
}
function zu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Hu(e) {
  return Object.assign({}, zu(), e);
}
function Wu(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var h0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Hu(typeof e != "number" ? e : Wu(e, Vo));
};
function y0(e) {
  var t, n = e.state, o = e.name, r = e.options, s = n.elements.arrow, a = n.modifiersData.popperOffsets, l = jt(n.placement), i = aa(l), u = [bt, $t].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!s || !a)) {
    var f = h0(r.padding, n), g = sa(s), m = i === "y" ? yt : bt, v = i === "y" ? Pt : $t, h = n.rects.reference[d] + n.rects.reference[i] - a[i] - n.rects.popper[d], y = a[i] - n.rects.reference[i], p = xo(s), C = p ? i === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, k = h / 2 - y / 2, w = f[m], T = C - g[d] - f[v], I = C / 2 - g[d] / 2 + k, E = _o(w, I, T), H = i;
    n.modifiersData[o] = (t = {}, t[H] = E, t.centerOffset = E - I, t);
  }
}
function b0(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || xu(t.elements.popper, r) && (t.elements.arrow = r));
}
var _0 = { name: "arrow", enabled: !0, phase: "main", fn: y0, effect: b0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function oo(e) {
  return e.split("-")[1];
}
var w0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function C0(e, t) {
  var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
  return { x: to(n * r) / r || 0, y: to(o * r) / r || 0 };
}
function Fl(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, s = e.variation, a = e.offsets, l = e.position, i = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, g = a.x, m = g === void 0 ? 0 : g, v = a.y, h = v === void 0 ? 0 : v, y = typeof d == "function" ? d({ x: m, y: h }) : { x: m, y: h };
  m = y.x, h = y.y;
  var p = a.hasOwnProperty("x"), C = a.hasOwnProperty("y"), k = bt, w = yt, T = window;
  if (u) {
    var I = xo(n), E = "clientHeight", H = "clientWidth";
    if (I === Et(n) && (I = Ln(n), pn(I).position !== "static" && l === "absolute" && (E = "scrollHeight", H = "scrollWidth")), I = I, r === yt || (r === bt || r === $t) && s === ko) {
      w = Pt;
      var V = f && I === T && T.visualViewport ? T.visualViewport.height : I[E];
      h -= V - o.height, h *= i ? 1 : -1;
    }
    if (r === bt || (r === yt || r === Pt) && s === ko) {
      k = $t;
      var Z = f && I === T && T.visualViewport ? T.visualViewport.width : I[H];
      m -= Z - o.width, m *= i ? 1 : -1;
    }
  }
  var G = Object.assign({ position: l }, u && w0), J = d === !0 ? C0({ x: m, y: h }, Et(n)) : { x: m, y: h };
  if (m = J.x, h = J.y, i) {
    var le;
    return Object.assign({}, G, (le = {}, le[w] = C ? "0" : "", le[k] = p ? "0" : "", le.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + h + "px)" : "translate3d(" + m + "px, " + h + "px, 0)", le));
  }
  return Object.assign({}, G, (t = {}, t[w] = C ? h + "px" : "", t[k] = p ? m + "px" : "", t.transform = "", t));
}
function S0(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, s = n.adaptive, a = s === void 0 ? !0 : s, l = n.roundOffsets, i = l === void 0 ? !0 : l, u = { placement: jt(t.placement), variation: oo(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Fl(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: i })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Fl(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: i })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Uu = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: S0, data: {} }, Xo = { passive: !0 };
function E0(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, s = r === void 0 ? !0 : r, a = o.resize, l = a === void 0 ? !0 : a, i = Et(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Xo);
  }), l && i.addEventListener("resize", n.update, Xo), function() {
    s && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Xo);
    }), l && i.removeEventListener("resize", n.update, Xo);
  };
}
var ju = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: E0, data: {} }, T0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function or(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return T0[t];
  });
}
var O0 = { start: "end", end: "start" };
function Dl(e) {
  return e.replace(/start|end/g, function(t) {
    return O0[t];
  });
}
function la(e) {
  var t = Et(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function ia(e) {
  return no(Ln(e)).left + la(e).scrollLeft;
}
function I0(e, t) {
  var n = Et(e), o = Ln(e), r = n.visualViewport, s = o.clientWidth, a = o.clientHeight, l = 0, i = 0;
  if (r) {
    s = r.width, a = r.height;
    var u = Vu();
    (u || !u && t === "fixed") && (l = r.offsetLeft, i = r.offsetTop);
  }
  return { width: s, height: a, x: l + ia(e), y: i };
}
function k0(e) {
  var t, n = Ln(e), o = la(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, s = Dn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = Dn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), l = -o.scrollLeft + ia(e), i = -o.scrollTop;
  return pn(r || n).direction === "rtl" && (l += Dn(n.clientWidth, r ? r.clientWidth : 0) - s), { width: s, height: a, x: l, y: i };
}
function ua(e) {
  var t = pn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Gu(e) {
  return ["html", "body", "#document"].indexOf(Xt(e)) >= 0 ? e.ownerDocument.body : At(e) && ua(e) ? e : Gu(Vr(e));
}
function wo(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Gu(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Et(o), a = r ? [s].concat(s.visualViewport || [], ua(o) ? o : []) : o, l = t.concat(a);
  return r ? l : l.concat(wo(Vr(a)));
}
function ys(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function L0(e, t) {
  var n = no(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Bl(e, t, n) {
  return t === Du ? ys(I0(e, n)) : Vn(t) ? L0(t, n) : ys(k0(Ln(e)));
}
function A0(e) {
  var t = wo(Vr(e)), n = ["absolute", "fixed"].indexOf(pn(e).position) >= 0, o = n && At(e) ? xo(e) : e;
  return Vn(o) ? t.filter(function(r) {
    return Vn(r) && xu(r, o) && Xt(r) !== "body";
  }) : [];
}
function N0(e, t, n, o) {
  var r = t === "clippingParents" ? A0(e) : [].concat(t), s = [].concat(r, [n]), a = s[0], l = s.reduce(function(i, u) {
    var d = Bl(e, u, o);
    return i.top = Dn(d.top, i.top), i.right = wr(d.right, i.right), i.bottom = wr(d.bottom, i.bottom), i.left = Dn(d.left, i.left), i;
  }, Bl(e, a, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ku(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? jt(o) : null, s = o ? oo(o) : null, a = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, i;
  switch (r) {
    case yt:
      i = { x: a, y: t.y - n.height };
      break;
    case Pt:
      i = { x: a, y: t.y + t.height };
      break;
    case $t:
      i = { x: t.x + t.width, y: l };
      break;
    case bt:
      i = { x: t.x - n.width, y: l };
      break;
    default:
      i = { x: t.x, y: t.y };
  }
  var u = r ? aa(r) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (s) {
      case eo:
        i[u] = i[u] - (t[d] / 2 - n[d] / 2);
        break;
      case ko:
        i[u] = i[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return i;
}
function Lo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, s = n.strategy, a = s === void 0 ? e.strategy : s, l = n.boundary, i = l === void 0 ? e0 : l, u = n.rootBoundary, d = u === void 0 ? Du : u, f = n.elementContext, g = f === void 0 ? mo : f, m = n.altBoundary, v = m === void 0 ? !1 : m, h = n.padding, y = h === void 0 ? 0 : h, p = Hu(typeof y != "number" ? y : Wu(y, Vo)), C = g === mo ? t0 : mo, k = e.rects.popper, w = e.elements[v ? C : g], T = N0(Vn(w) ? w : w.contextElement || Ln(e.elements.popper), i, d, a), I = no(e.elements.reference), E = Ku({ reference: I, element: k, placement: r }), H = ys(Object.assign({}, k, E)), V = g === mo ? H : I, Z = { top: T.top - V.top + p.top, bottom: V.bottom - T.bottom + p.bottom, left: T.left - V.left + p.left, right: V.right - T.right + p.right }, G = e.modifiersData.offset;
  if (g === mo && G) {
    var J = G[r];
    Object.keys(Z).forEach(function(le) {
      var Te = [$t, Pt].indexOf(le) >= 0 ? 1 : -1, $ = [yt, Pt].indexOf(le) >= 0 ? "y" : "x";
      Z[le] += J[$] * Te;
    });
  }
  return Z;
}
function P0(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, s = n.rootBoundary, a = n.padding, l = n.flipVariations, i = n.allowedAutoPlacements, u = i === void 0 ? Br : i, d = oo(o), f = d ? l ? Rl : Rl.filter(function(v) {
    return oo(v) === d;
  }) : Vo, g = f.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  g.length === 0 && (g = f);
  var m = g.reduce(function(v, h) {
    return v[h] = Lo(e, { placement: h, boundary: r, rootBoundary: s, padding: a })[jt(h)], v;
  }, {});
  return Object.keys(m).sort(function(v, h) {
    return m[v] - m[h];
  });
}
function $0(e) {
  if (jt(e) === oa) return [];
  var t = or(e);
  return [Dl(e), t, Dl(t)];
}
function R0(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, l = a === void 0 ? !0 : a, i = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, g = n.altBoundary, m = n.flipVariations, v = m === void 0 ? !0 : m, h = n.allowedAutoPlacements, y = t.options.placement, p = jt(y), C = p === y, k = i || (C || !v ? [or(y)] : $0(y)), w = [y].concat(k).reduce(function(Ye, Ue) {
      return Ye.concat(jt(Ue) === oa ? P0(t, { placement: Ue, boundary: d, rootBoundary: f, padding: u, flipVariations: v, allowedAutoPlacements: h }) : Ue);
    }, []), T = t.rects.reference, I = t.rects.popper, E = /* @__PURE__ */ new Map(), H = !0, V = w[0], Z = 0; Z < w.length; Z++) {
      var G = w[Z], J = jt(G), le = oo(G) === eo, Te = [yt, Pt].indexOf(J) >= 0, $ = Te ? "width" : "height", M = Lo(t, { placement: G, boundary: d, rootBoundary: f, altBoundary: g, padding: u }), D = Te ? le ? $t : bt : le ? Pt : yt;
      T[$] > I[$] && (D = or(D));
      var re = or(D), se = [];
      if (s && se.push(M[J] <= 0), l && se.push(M[D] <= 0, M[re] <= 0), se.every(function(Ye) {
        return Ye;
      })) {
        V = G, H = !1;
        break;
      }
      E.set(G, se);
    }
    if (H) for (var pe = v ? 3 : 1, Ae = function(Ye) {
      var Ue = w.find(function(qe) {
        var De = E.get(qe);
        if (De) return De.slice(0, Ye).every(function(ye) {
          return ye;
        });
      });
      if (Ue) return V = Ue, "break";
    }, Me = pe; Me > 0; Me--) {
      var we = Ae(Me);
      if (we === "break") break;
    }
    t.placement !== V && (t.modifiersData[o]._skip = !0, t.placement = V, t.reset = !0);
  }
}
var M0 = { name: "flip", enabled: !0, phase: "main", fn: R0, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Vl(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function xl(e) {
  return [yt, $t, Pt, bt].some(function(t) {
    return e[t] >= 0;
  });
}
function F0(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, s = t.modifiersData.preventOverflow, a = Lo(t, { elementContext: "reference" }), l = Lo(t, { altBoundary: !0 }), i = Vl(a, o), u = Vl(l, r, s), d = xl(i), f = xl(u);
  t.modifiersData[n] = { referenceClippingOffsets: i, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var D0 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: F0 };
function B0(e, t, n) {
  var o = jt(e), r = [bt, yt].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = s[0], l = s[1];
  return a = a || 0, l = (l || 0) * r, [bt, $t].indexOf(o) >= 0 ? { x: l, y: a } : { x: a, y: l };
}
function V0(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, s = r === void 0 ? [0, 0] : r, a = Br.reduce(function(d, f) {
    return d[f] = B0(f, t.rects, s), d;
  }, {}), l = a[t.placement], i = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var x0 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: V0 };
function z0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ku({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Yu = { name: "popperOffsets", enabled: !0, phase: "read", fn: z0, data: {} };
function H0(e) {
  return e === "x" ? "y" : "x";
}
function W0(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, s = r === void 0 ? !0 : r, a = n.altAxis, l = a === void 0 ? !1 : a, i = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, g = n.tether, m = g === void 0 ? !0 : g, v = n.tetherOffset, h = v === void 0 ? 0 : v, y = Lo(t, { boundary: i, rootBoundary: u, padding: f, altBoundary: d }), p = jt(t.placement), C = oo(t.placement), k = !C, w = aa(p), T = H0(w), I = t.modifiersData.popperOffsets, E = t.rects.reference, H = t.rects.popper, V = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, Z = typeof V == "number" ? { mainAxis: V, altAxis: V } : Object.assign({ mainAxis: 0, altAxis: 0 }, V), G = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, J = { x: 0, y: 0 };
  if (I) {
    if (s) {
      var le, Te = w === "y" ? yt : bt, $ = w === "y" ? Pt : $t, M = w === "y" ? "height" : "width", D = I[w], re = D + y[Te], se = D - y[$], pe = m ? -H[M] / 2 : 0, Ae = C === eo ? E[M] : H[M], Me = C === eo ? -H[M] : -E[M], we = t.elements.arrow, Ye = m && we ? sa(we) : { width: 0, height: 0 }, Ue = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : zu(), qe = Ue[Te], De = Ue[$], ye = _o(0, E[M], Ye[M]), ut = k ? E[M] / 2 - pe - ye - qe - Z.mainAxis : Ae - ye - qe - Z.mainAxis, mt = k ? -E[M] / 2 + pe + ye + De + Z.mainAxis : Me + ye + De + Z.mainAxis, ct = t.elements.arrow && xo(t.elements.arrow), _t = ct ? w === "y" ? ct.clientTop || 0 : ct.clientLeft || 0 : 0, dt = (le = G?.[w]) != null ? le : 0, ft = D + ut - dt - _t, B = D + mt - dt, U = _o(m ? wr(re, ft) : re, D, m ? Dn(se, B) : se);
      I[w] = U, J[w] = U - D;
    }
    if (l) {
      var Ce, b = w === "x" ? yt : bt, S = w === "x" ? Pt : $t, A = I[T], q = T === "y" ? "height" : "width", fe = A + y[b], ue = A - y[S], _ = [yt, bt].indexOf(p) !== -1, F = (Ce = G?.[T]) != null ? Ce : 0, ce = _ ? fe : A - E[q] - H[q] - F + Z.altAxis, be = _ ? A + E[q] + H[q] - F - Z.altAxis : ue, rt = m && _ ? g0(ce, A, be) : _o(m ? ce : fe, A, m ? be : ue);
      I[T] = rt, J[T] = rt - A;
    }
    t.modifiersData[o] = J;
  }
}
var U0 = { name: "preventOverflow", enabled: !0, phase: "main", fn: W0, requiresIfExists: ["offset"] };
function j0(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function G0(e) {
  return e === Et(e) || !At(e) ? la(e) : j0(e);
}
function K0(e) {
  var t = e.getBoundingClientRect(), n = to(t.width) / e.offsetWidth || 1, o = to(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Y0(e, t, n) {
  n === void 0 && (n = !1);
  var o = At(t), r = At(t) && K0(t), s = Ln(t), a = no(e, r, n), l = { scrollLeft: 0, scrollTop: 0 }, i = { x: 0, y: 0 };
  return (o || !o && !n) && ((Xt(t) !== "body" || ua(s)) && (l = G0(t)), At(t) ? (i = no(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : s && (i.x = ia(s))), { x: a.left + l.scrollLeft - i.x, y: a.top + l.scrollTop - i.y, width: a.width, height: a.height };
}
function q0(e) {
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
function X0(e) {
  var t = q0(e);
  return d0.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function J0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Z0(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var zl = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Hl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function ca(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, s = r === void 0 ? zl : r;
  return function(a, l, i) {
    i === void 0 && (i = s);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, zl, s), modifiersData: {}, elements: { reference: a, popper: l }, attributes: {}, styles: {} }, d = [], f = !1, g = { state: u, setOptions: function(h) {
      var y = typeof h == "function" ? h(u.options) : h;
      v(), u.options = Object.assign({}, s, u.options, y), u.scrollParents = { reference: Vn(a) ? wo(a) : a.contextElement ? wo(a.contextElement) : [], popper: wo(l) };
      var p = X0(Z0([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = p.filter(function(C) {
        return C.enabled;
      }), m(), g.update();
    }, forceUpdate: function() {
      if (!f) {
        var h = u.elements, y = h.reference, p = h.popper;
        if (Hl(y, p)) {
          u.rects = { reference: Y0(y, xo(p), u.options.strategy === "fixed"), popper: sa(p) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(H) {
            return u.modifiersData[H.name] = Object.assign({}, H.data);
          });
          for (var C = 0; C < u.orderedModifiers.length; C++) {
            if (u.reset === !0) {
              u.reset = !1, C = -1;
              continue;
            }
            var k = u.orderedModifiers[C], w = k.fn, T = k.options, I = T === void 0 ? {} : T, E = k.name;
            typeof w == "function" && (u = w({ state: u, options: I, name: E, instance: g }) || u);
          }
        }
      }
    }, update: J0(function() {
      return new Promise(function(h) {
        g.forceUpdate(), h(u);
      });
    }), destroy: function() {
      v(), f = !0;
    } };
    if (!Hl(a, l)) return g;
    g.setOptions(i).then(function(h) {
      !f && i.onFirstUpdate && i.onFirstUpdate(h);
    });
    function m() {
      u.orderedModifiers.forEach(function(h) {
        var y = h.name, p = h.options, C = p === void 0 ? {} : p, k = h.effect;
        if (typeof k == "function") {
          var w = k({ state: u, name: y, instance: g, options: C }), T = function() {
          };
          d.push(w || T);
        }
      });
    }
    function v() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return g;
  };
}
ca();
var Q0 = [ju, Yu, Uu, Bu];
ca({ defaultModifiers: Q0 });
var ey = [ju, Yu, Uu, Bu, x0, M0, U0, _0, D0], ty = ca({ defaultModifiers: ey });
const ny = ["fixed", "absolute"], oy = me({
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
    values: Br,
    default: "bottom"
  },
  popperOptions: {
    type: oe(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: ny,
    default: "absolute"
  }
}), qu = me({
  ...oy,
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
  ...co(["ariaLabel"])
}), ry = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, sy = (e, t) => {
  const n = R(!1), o = R();
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
}, ay = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: r } = e, s = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: [...iy(e), ...t]
  };
  return uy(s, r?.modifiers), s;
}, ly = (e) => {
  if (Ne)
    return sn(e);
};
function iy(e) {
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
function uy(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const cy = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: i }) => {
      const u = dy(i);
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
  }), s = Sn(), a = R({
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
    l(), !(!i || !u) && (s.value = ty(i, u, c(r)));
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
function dy(e) {
  const t = Object.keys(e.elements), n = mr(t.map((r) => [r, e.styles[r] || {}])), o = mr(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: o
  };
}
const fy = 0, py = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: r } = ie(Qs, void 0), s = R(), a = R(), l = O(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), i = O(() => {
    var p;
    const C = c(s), k = (p = c(a)) != null ? p : fy;
    return {
      name: "arrow",
      enabled: !tu(C),
      options: {
        element: C,
        padding: k
      }
    };
  }), u = O(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...ay(e, [
      c(i),
      c(l)
    ])
  })), d = O(() => ly(e.referenceEl) || c(o)), { attributes: f, state: g, styles: m, update: v, forceUpdate: h, instanceRef: y } = cy(d, n, u);
  return ae(y, (p) => t.value = p), Re(() => {
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
    styles: m,
    role: r,
    forceUpdate: h,
    update: v
  };
}, vy = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: r } = Ys(), s = Ee("popper"), a = O(() => c(t).popper), l = R(Oe(e.zIndex) ? e.zIndex : r()), i = O(() => [
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
}, my = Y({
  name: "ElPopperContent"
}), gy = /* @__PURE__ */ Y({
  ...my,
  props: qu,
  emits: ry,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: r,
      trapped: s,
      onFocusAfterReleased: a,
      onFocusAfterTrapped: l,
      onFocusInTrap: i,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = sy(o, n), { attributes: f, arrowRef: g, contentRef: m, styles: v, instanceRef: h, role: y, update: p } = py(o), {
      ariaModal: C,
      arrowStyle: k,
      contentAttrs: w,
      contentClass: T,
      contentStyle: I,
      updateZIndex: E
    } = vy(o, {
      styles: v,
      attributes: f,
      role: y
    }), H = ie(_r, void 0), V = R();
    Ze(Iu, {
      arrowStyle: k,
      arrowRef: g,
      arrowOffset: V
    }), H && Ze(_r, {
      ...H,
      addInputId: En,
      removeInputId: En
    });
    let Z;
    const G = (le = !0) => {
      p(), le && E();
    }, J = () => {
      G(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return Re(() => {
      ae(() => o.triggerTargetEl, (le, Te) => {
        Z?.(), Z = void 0;
        const $ = c(le || m.value), M = c(Te || m.value);
        Bt($) && (Z = ae([y, () => o.ariaLabel, C, () => o.id], (D) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((re, se) => {
            cn(D[se]) ? $.removeAttribute(re) : $.setAttribute(re, D[se]);
          });
        }, { immediate: !0 })), M !== $ && Bt(M) && ["role", "aria-label", "aria-modal", "id"].forEach((D) => {
          M.removeAttribute(D);
        });
      }, { immediate: !0 }), ae(() => o.visible, J, { immediate: !0 });
    }), Tt(() => {
      Z?.(), Z = void 0;
    }), t({
      popperContentRef: m,
      popperInstanceRef: h,
      updatePopper: G,
      contentStyle: I
    }), (le, Te) => (L(), x("div", Nt({
      ref_key: "contentRef",
      ref: m
    }, c(w), {
      style: c(I),
      class: c(T),
      tabindex: "-1",
      onMouseenter: ($) => le.$emit("mouseenter", $),
      onMouseleave: ($) => le.$emit("mouseleave", $)
    }), [
      K(c(Fu), {
        trapped: c(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(m),
        "focus-start-el": c(r),
        onFocusAfterTrapped: c(l),
        onFocusAfterReleased: c(a),
        onFocusin: c(i),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(d)
      }, {
        default: j(() => [
          Q(le.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var hy = /* @__PURE__ */ ve(gy, [["__file", "content.vue"]]);
const yy = Ot(Ph), da = Symbol("elTooltip");
function Wl() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Mo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const by = me({
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
}), _y = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: r
}) => {
  const { registerTimeout: s } = Wl(), {
    registerTimeout: a,
    cancelTimeout: l
  } = Wl();
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
}, Ao = me({
  ...by,
  ...qu,
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
  ...co(["ariaLabel"])
}), fa = me({
  ...Nu,
  disabled: Boolean,
  trigger: {
    type: oe([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: oe(Array),
    default: () => [Le.enter, Le.numpadEnter, Le.space]
  }
}), wy = $r({
  type: oe(Boolean),
  default: null
}), Cy = $r({
  type: oe(Function)
}), Sy = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: wy,
    [n]: Cy
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
      const g = Je(), { emit: m } = g, v = g.props, h = O(() => He(v[n])), y = O(() => v[e] === null), p = (E) => {
        a.value !== !0 && (a.value = !0, l && (l.value = E), He(d) && d(E));
      }, C = (E) => {
        a.value !== !1 && (a.value = !1, l && (l.value = E), He(f) && f(E));
      }, k = (E) => {
        if (v.disabled === !0 || He(u) && !u())
          return;
        const H = h.value && Ne;
        H && m(t, !0), (y.value || !H) && p(E);
      }, w = (E) => {
        if (v.disabled === !0 || !Ne)
          return;
        const H = h.value && Ne;
        H && m(t, !1), (y.value || !H) && C(E);
      }, T = (E) => {
        Io(E) && (v.disabled && E ? h.value && m(t, !1) : a.value !== E && (E ? p() : C()));
      }, I = () => {
        a.value ? w() : k();
      };
      return ae(() => v[e], T), i && g.appContext.config.globalProperties.$route !== void 0 && ae(() => ({
        ...g.proxy.$route
      }), () => {
        i.value && a.value && w();
      }), Re(() => {
        T(v[e]);
      }), {
        hide: w,
        show: k,
        toggle: I,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: Ey,
  useModelToggleEmits: Ty,
  useModelToggle: Oy
} = Sy("visible"), Iy = me({
  ...Lu,
  ...Ey,
  ...Ao,
  ...fa,
  ...Au,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), ky = [
  ...Ty,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Ly = (e, t) => Wt(e) ? e.includes(t) : e === t, Gn = (e, t, n) => (o) => {
  Ly(c(e), t) && n(o);
}, We = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const s = e?.(r);
  if (n === !1 || !s)
    return t?.(r);
}, Ul = (e) => (t) => t.pointerType === "mouse" ? e(t) : void 0, Ay = Y({
  name: "ElTooltipTrigger"
}), Ny = /* @__PURE__ */ Y({
  ...Ay,
  props: fa,
  setup(e, { expose: t }) {
    const n = e, o = Ee("tooltip"), { controlled: r, id: s, open: a, onOpen: l, onClose: i, onToggle: u } = ie(da, void 0), d = R(null), f = () => {
      if (c(r) || n.disabled)
        return !0;
    }, g = lt(n, "trigger"), m = We(f, Gn(g, "hover", l)), v = We(f, Gn(g, "hover", i)), h = We(f, Gn(g, "click", (w) => {
      w.button === 0 && u(w);
    })), y = We(f, Gn(g, "focus", l)), p = We(f, Gn(g, "focus", i)), C = We(f, Gn(g, "contextmenu", (w) => {
      w.preventDefault(), u(w);
    })), k = We(f, (w) => {
      const { code: T } = w;
      n.triggerKeys.includes(T) && (w.preventDefault(), u(w));
    });
    return t({
      triggerRef: d
    }), (w, T) => (L(), te(c(zh), {
      id: c(s),
      "virtual-ref": w.virtualRef,
      open: c(a),
      "virtual-triggering": w.virtualTriggering,
      class: z(c(o).e("trigger")),
      onBlur: c(p),
      onClick: c(h),
      onContextmenu: c(C),
      onFocus: c(y),
      onMouseenter: c(m),
      onMouseleave: c(v),
      onKeydown: c(k)
    }, {
      default: j(() => [
        Q(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Py = /* @__PURE__ */ ve(Ny, [["__file", "trigger.vue"]]);
const $y = me({
  to: {
    type: oe([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Ry = /* @__PURE__ */ Y({
  __name: "teleport",
  props: $y,
  setup(e) {
    return (t, n) => t.disabled ? Q(t.$slots, "default", { key: 0 }) : (L(), te(Fi, {
      key: 1,
      to: t.to
    }, [
      Q(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var My = /* @__PURE__ */ ve(Ry, [["__file", "teleport.vue"]]);
const Xu = Ot(My), Ju = () => {
  const e = Bs(), t = wu(), n = O(() => `${e.value}-popper-container-${t.prefix}`), o = O(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Fy = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Dy = () => {
  const { id: e, selector: t } = Ju();
  return Cd(() => {
    Ne && (document.body.querySelector(t.value) || Fy(e.value));
  }), {
    id: e,
    selector: t
  };
}, By = Y({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Vy = /* @__PURE__ */ Y({
  ...By,
  props: Ao,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Ju(), r = Ee("tooltip"), s = R();
    let a;
    const {
      controlled: l,
      id: i,
      open: u,
      trigger: d,
      onClose: f,
      onOpen: g,
      onShow: m,
      onHide: v,
      onBeforeShow: h,
      onBeforeHide: y
    } = ie(da, void 0), p = O(() => n.transition || `${r.namespace.value}-fade-in-linear`), C = O(() => n.persistent);
    Tt(() => {
      a?.();
    });
    const k = O(() => c(C) ? !0 : c(u)), w = O(() => n.disabled ? !1 : c(u)), T = O(() => n.appendTo || o.value), I = O(() => {
      var D;
      return (D = n.style) != null ? D : {};
    }), E = R(!0), H = () => {
      v(), M() && en(document.body), E.value = !0;
    }, V = () => {
      if (c(l))
        return !0;
    }, Z = We(V, () => {
      n.enterable && c(d) === "hover" && g();
    }), G = We(V, () => {
      c(d) === "hover" && f();
    }), J = () => {
      var D, re;
      (re = (D = s.value) == null ? void 0 : D.updatePopper) == null || re.call(D), h?.();
    }, le = () => {
      y?.();
    }, Te = () => {
      m(), a = qm(O(() => {
        var D;
        return (D = s.value) == null ? void 0 : D.popperContentRef;
      }), () => {
        if (c(l))
          return;
        c(d) !== "hover" && f();
      });
    }, $ = () => {
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
    }), (D, re) => (L(), te(c(Xu), {
      disabled: !D.teleported,
      to: c(T)
    }, {
      default: j(() => [
        K(kn, {
          name: c(p),
          onAfterLeave: H,
          onBeforeEnter: J,
          onAfterEnter: Te,
          onBeforeLeave: le
        }, {
          default: j(() => [
            c(k) ? vt((L(), te(c(hy), Nt({
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
              onMouseenter: c(Z),
              onMouseleave: c(G),
              onBlur: $,
              onClose: c(f)
            }), {
              default: j(() => [
                Q(D.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Kt, c(w)]
            ]) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var xy = /* @__PURE__ */ ve(Vy, [["__file", "content.vue"]]);
const zy = Y({
  name: "ElTooltip"
}), Hy = /* @__PURE__ */ Y({
  ...zy,
  props: Iy,
  emits: ky,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    Dy();
    const r = In(), s = R(), a = R(), l = () => {
      var p;
      const C = c(s);
      C && ((p = C.popperInstanceRef) == null || p.update());
    }, i = R(!1), u = R(), { show: d, hide: f, hasUpdateHandler: g } = Oy({
      indicator: i,
      toggleReason: u
    }), { onOpen: m, onClose: v } = _y({
      showAfter: lt(o, "showAfter"),
      hideAfter: lt(o, "hideAfter"),
      autoClose: lt(o, "autoClose"),
      open: d,
      close: f
    }), h = O(() => Io(o.visible) && !g.value);
    Ze(da, {
      controlled: h,
      id: r,
      open: Tr(i),
      trigger: lt(o, "trigger"),
      onOpen: (p) => {
        m(p);
      },
      onClose: (p) => {
        v(p);
      },
      onToggle: (p) => {
        c(i) ? v(p) : m(p);
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
      var C;
      return (C = a.value) == null ? void 0 : C.isFocusInsideContent(p);
    };
    return Sd(() => i.value && f()), t({
      popperRef: s,
      contentRef: a,
      isFocusInsideContent: y,
      updatePopper: l,
      onOpen: m,
      onClose: v,
      hide: f
    }), (p, C) => (L(), te(c(yy), {
      ref_key: "popperRef",
      ref: s,
      role: p.role
    }, {
      default: j(() => [
        K(Py, {
          disabled: p.disabled,
          trigger: p.trigger,
          "trigger-keys": p.triggerKeys,
          "virtual-ref": p.virtualRef,
          "virtual-triggering": p.virtualTriggering
        }, {
          default: j(() => [
            p.$slots.default ? Q(p.$slots, "default", { key: 0 }) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        K(xy, {
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
          default: j(() => [
            Q(p.$slots, "content", {}, () => [
              p.rawContent ? (L(), x("span", {
                key: 0,
                innerHTML: p.content
              }, null, 8, ["innerHTML"])) : (L(), x("span", { key: 1 }, ee(p.content), 1))
            ]),
            p.showArrow ? (L(), te(c(Mh), {
              key: 0,
              "arrow-offset": p.arrowOffset
            }, null, 8, ["arrow-offset"])) : W("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Wy = /* @__PURE__ */ ve(Hy, [["__file", "tooltip.vue"]]);
const Zu = Ot(Wy), Uy = me({
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
}), jy = Y({
  name: "ElBadge"
}), Gy = /* @__PURE__ */ Y({
  ...jy,
  props: Uy,
  setup(e, { expose: t }) {
    const n = e, o = Ee("badge"), r = O(() => n.isDot ? "" : Oe(n.value) && Oe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = O(() => {
      var a, l, i, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: fn(-((l = (a = n.offset) == null ? void 0 : a[0]) != null ? l : 0)),
          marginTop: fn((u = (i = n.offset) == null ? void 0 : i[1]) != null ? u : 0)
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
      K(kn, {
        name: `${c(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: j(() => [
          vt(N("sup", {
            class: z([
              c(o).e("content"),
              c(o).em("content", a.type),
              c(o).is("fixed", !!a.$slots.default),
              c(o).is("dot", a.isDot),
              c(o).is("hide-zero", !a.showZero && n.value === 0),
              a.badgeClass
            ]),
            style: Ke(c(s))
          }, [
            Q(a.$slots, "content", { value: c(r) }, () => [
              ht(ee(c(r)), 1)
            ])
          ], 6), [
            [Kt, !a.hidden && (c(r) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Ky = /* @__PURE__ */ ve(Gy, [["__file", "badge.vue"]]);
const Yy = Ot(Ky), Qu = Symbol("buttonGroupContextKey"), ec = ({ from: e, replacement: t, scope: n, version: o, ref: r, type: s = "API" }, a) => {
  ae(() => c(a), (l) => {
  }, {
    immediate: !0
  });
}, qy = (e, t) => {
  ec({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, O(() => e.type === "text"));
  const n = ie(Qu, void 0), o = Rr("button"), { form: r } = Mr(), s = fo(O(() => n?.size)), a = Fr(), l = R(), i = Rs(), u = O(() => e.type || n?.type || ""), d = O(() => {
    var v, h, y;
    return (y = (h = e.autoInsertSpace) != null ? h : (v = o.value) == null ? void 0 : v.autoInsertSpace) != null ? y : !1;
  }), f = O(() => e.tag === "button" ? {
    ariaDisabled: a.value || e.loading,
    disabled: a.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), g = O(() => {
    var v;
    const h = (v = i.default) == null ? void 0 : v.call(i);
    if (d.value && h?.length === 1) {
      const y = h[0];
      if (y?.type === Ms) {
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
}, Xy = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Jy = ["button", "submit", "reset"], bs = me({
  size: Do,
  disabled: Boolean,
  type: {
    type: String,
    values: Xy,
    default: ""
  },
  icon: {
    type: qt
  },
  nativeType: {
    type: String,
    values: Jy,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: qt,
    default: () => gu
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
}), Zy = {
  click: (e) => e instanceof MouseEvent
};
function nt(e, t) {
  Qy(e) && (e = "100%");
  var n = eb(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Jo(e) {
  return Math.min(1, Math.max(0, e));
}
function Qy(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function eb(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function tc(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Zo(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Rn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function tb(e, t, n) {
  return {
    r: nt(e, 255) * 255,
    g: nt(t, 255) * 255,
    b: nt(n, 255) * 255
  };
}
function jl(e, t, n) {
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
function es(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function nb(e, t, n) {
  var o, r, s;
  if (e = nt(e, 360), t = nt(t, 100), n = nt(n, 100), t === 0)
    r = n, s = n, o = n;
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    o = es(l, a, e + 1 / 3), r = es(l, a, e), s = es(l, a, e - 1 / 3);
  }
  return { r: o * 255, g: r * 255, b: s * 255 };
}
function Gl(e, t, n) {
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
function ob(e, t, n) {
  e = nt(e, 360) * 6, t = nt(t, 100), n = nt(n, 100);
  var o = Math.floor(e), r = e - o, s = n * (1 - t), a = n * (1 - r * t), l = n * (1 - (1 - r) * t), i = o % 6, u = [n, a, s, s, l, n][i], d = [l, n, n, a, s, s][i], f = [s, s, l, n, n, a][i];
  return { r: u * 255, g: d * 255, b: f * 255 };
}
function Kl(e, t, n, o) {
  var r = [
    Rn(Math.round(e).toString(16)),
    Rn(Math.round(t).toString(16)),
    Rn(Math.round(n).toString(16))
  ];
  return o && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function rb(e, t, n, o, r) {
  var s = [
    Rn(Math.round(e).toString(16)),
    Rn(Math.round(t).toString(16)),
    Rn(Math.round(n).toString(16)),
    Rn(sb(o))
  ];
  return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("");
}
function sb(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Yl(e) {
  return Ct(e) / 255;
}
function Ct(e) {
  return parseInt(e, 16);
}
function ab(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var _s = {
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
function lb(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, o = null, r = null, s = null, a = !1, l = !1;
  return typeof e == "string" && (e = cb(e)), typeof e == "object" && (Zt(e.r) && Zt(e.g) && Zt(e.b) ? (t = tb(e.r, e.g, e.b), a = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Zt(e.h) && Zt(e.s) && Zt(e.v) ? (o = Zo(e.s), r = Zo(e.v), t = ob(e.h, o, r), a = !0, l = "hsv") : Zt(e.h) && Zt(e.s) && Zt(e.l) && (o = Zo(e.s), s = Zo(e.l), t = nb(e.h, o, s), a = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = tc(n), {
    ok: a,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var ib = "[-\\+]?\\d+%?", ub = "[-\\+]?\\d*\\.\\d+%?", Cn = "(?:".concat(ub, ")|(?:").concat(ib, ")"), ts = "[\\s|\\(]+(".concat(Cn, ")[,|\\s]+(").concat(Cn, ")[,|\\s]+(").concat(Cn, ")\\s*\\)?"), ns = "[\\s|\\(]+(".concat(Cn, ")[,|\\s]+(").concat(Cn, ")[,|\\s]+(").concat(Cn, ")[,|\\s]+(").concat(Cn, ")\\s*\\)?"), Rt = {
  CSS_UNIT: new RegExp(Cn),
  rgb: new RegExp("rgb" + ts),
  rgba: new RegExp("rgba" + ns),
  hsl: new RegExp("hsl" + ts),
  hsla: new RegExp("hsla" + ns),
  hsv: new RegExp("hsv" + ts),
  hsva: new RegExp("hsva" + ns),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function cb(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (_s[e])
    e = _s[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Rt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Rt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Rt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Rt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Rt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Rt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Rt.hex8.exec(e), n ? {
    r: Ct(n[1]),
    g: Ct(n[2]),
    b: Ct(n[3]),
    a: Yl(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Rt.hex6.exec(e), n ? {
    r: Ct(n[1]),
    g: Ct(n[2]),
    b: Ct(n[3]),
    format: t ? "name" : "hex"
  } : (n = Rt.hex4.exec(e), n ? {
    r: Ct(n[1] + n[1]),
    g: Ct(n[2] + n[2]),
    b: Ct(n[3] + n[3]),
    a: Yl(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Rt.hex3.exec(e), n ? {
    r: Ct(n[1] + n[1]),
    g: Ct(n[2] + n[2]),
    b: Ct(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Zt(e) {
  return !!Rt.CSS_UNIT.exec(String(e));
}
var db = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var o;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = ab(t)), this.originalInput = t;
      var r = lb(t);
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
      return this.a = tc(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Gl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Gl(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = jl(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = jl(this.r, this.g, this.b), n = Math.round(t.h * 360), o = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(o, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(o, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), Kl(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), rb(this.r, this.g, this.b, this.a, t);
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
      for (var t = "#" + Kl(this.r, this.g, this.b, !1), n = 0, o = Object.entries(_s); n < o.length; n++) {
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
function hn(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function fb(e) {
  const t = Fr(), n = Ee("button");
  return O(() => {
    let o = {}, r = e.color;
    if (r) {
      const s = r.match(/var\((.*?)\)/);
      s && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(s[1]));
      const a = new db(r), l = e.dark ? a.tint(20).toString() : hn(a, 20);
      if (e.plain)
        o = n.cssVarBlock({
          "bg-color": e.dark ? hn(a, 90) : a.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? hn(a, 50) : a.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": l,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": l
        }), t.value && (o[n.cssVarBlockName("disabled-bg-color")] = e.dark ? hn(a, 90) : a.tint(90).toString(), o[n.cssVarBlockName("disabled-text-color")] = e.dark ? hn(a, 50) : a.tint(50).toString(), o[n.cssVarBlockName("disabled-border-color")] = e.dark ? hn(a, 80) : a.tint(80).toString());
      else {
        const i = e.dark ? hn(a, 30) : a.tint(30).toString(), u = a.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
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
          const d = e.dark ? hn(a, 50) : a.tint(50).toString();
          o[n.cssVarBlockName("disabled-bg-color")] = d, o[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, o[n.cssVarBlockName("disabled-border-color")] = d;
        }
      }
    }
    return o;
  });
}
const pb = Y({
  name: "ElButton"
}), vb = /* @__PURE__ */ Y({
  ...pb,
  props: bs,
  emits: Zy,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = fb(o), s = Ee("button"), { _ref: a, _size: l, _type: i, _disabled: u, _props: d, shouldAddSpace: f, handleClick: g } = qy(o, n), m = O(() => [
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
    }), (v, h) => (L(), te(pt(v.tag), Nt({
      ref_key: "_ref",
      ref: a
    }, c(d), {
      class: c(m),
      style: c(r),
      onClick: c(g)
    }), {
      default: j(() => [
        v.loading ? (L(), x(ke, { key: 0 }, [
          v.$slots.loading ? Q(v.$slots, "loading", { key: 0 }) : (L(), te(c(Ge), {
            key: 1,
            class: z(c(s).is("loading"))
          }, {
            default: j(() => [
              (L(), te(pt(v.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : v.icon || v.$slots.icon ? (L(), te(c(Ge), { key: 1 }, {
          default: j(() => [
            v.icon ? (L(), te(pt(v.icon), { key: 0 })) : Q(v.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : W("v-if", !0),
        v.$slots.default ? (L(), x("span", {
          key: 2,
          class: z({ [c(s).em("text", "expand")]: c(f) })
        }, [
          Q(v.$slots, "default")
        ], 2)) : W("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var mb = /* @__PURE__ */ ve(vb, [["__file", "button.vue"]]);
const gb = {
  size: bs.size,
  type: bs.type
}, hb = Y({
  name: "ElButtonGroup"
}), yb = /* @__PURE__ */ Y({
  ...hb,
  props: gb,
  setup(e) {
    const t = e;
    Ze(Qu, Tn({
      size: lt(t, "size"),
      type: lt(t, "type")
    }));
    const n = Ee("button");
    return (o, r) => (L(), x("div", {
      class: z(c(n).b("group"))
    }, [
      Q(o.$slots, "default")
    ], 2));
  }
});
var nc = /* @__PURE__ */ ve(yb, [["__file", "button-group.vue"]]);
const pa = Ot(mb, {
  ButtonGroup: nc
});
Bo(nc);
var rr = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(rr || {});
const bb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), ws = me({
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
    values: iu
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), _b = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, wb = Y({
  name: "ElTag"
}), Cb = /* @__PURE__ */ Y({
  ...wb,
  props: ws,
  emits: _b,
  setup(e, { emit: t }) {
    const n = e, o = fo(), r = Ee("tag"), s = O(() => {
      const { type: u, hit: d, effect: f, closable: g, round: m } = n;
      return [
        r.b(),
        r.is("closable", g),
        r.m(u || "primary"),
        r.m(o.value),
        r.m(f),
        r.is("hit", d),
        r.is("round", m)
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
      style: Ke({ backgroundColor: u.color }),
      onClick: l
    }, [
      N("span", {
        class: z(c(r).e("content"))
      }, [
        Q(u.$slots, "default")
      ], 2),
      u.closable ? (L(), te(c(Ge), {
        key: 0,
        class: z(c(r).e("close")),
        onClick: Fe(a, ["stop"])
      }, {
        default: j(() => [
          K(c(yr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : W("v-if", !0)
    ], 6)) : (L(), te(kn, {
      key: 1,
      name: `${c(r).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: i
    }, {
      default: j(() => [
        N("span", {
          class: z(c(s)),
          style: Ke({ backgroundColor: u.color }),
          onClick: l
        }, [
          N("span", {
            class: z(c(r).e("content"))
          }, [
            Q(u.$slots, "default")
          ], 2),
          u.closable ? (L(), te(c(Ge), {
            key: 0,
            class: z(c(r).e("close")),
            onClick: Fe(a, ["stop"])
          }, {
            default: j(() => [
              K(c(yr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : W("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Sb = /* @__PURE__ */ ve(Cb, [["__file", "tag.vue"]]);
const Eb = Ot(Sb), yn = /* @__PURE__ */ new Map();
if (Ne) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of yn.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function ql(e, t) {
  let n = [];
  return Wt(t.arg) ? n = t.arg : Bt(t.arg) && n.push(t.arg), function(o, r) {
    const s = t.instance.popperRef, a = o.target, l = r?.target, i = !t || !t.instance, u = !a || !l, d = e.contains(a) || e.contains(l), f = e === a, g = n.length && n.some((v) => v?.contains(a)) || n.length && n.includes(l), m = s && (s.contains(a) || s.contains(l));
    i || u || d || f || g || m || t.value(o, r);
  };
}
const Tb = {
  beforeMount(e, t) {
    yn.has(e) || yn.set(e, []), yn.get(e).push({
      documentHandler: ql(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    yn.has(e) || yn.set(e, []);
    const n = yn.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), r = {
      documentHandler: ql(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, r) : n.push(r);
  },
  unmounted(e) {
    yn.delete(e);
  }
}, Ob = me({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: oe(Object)
  },
  size: Do,
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
  ...du
}), Mt = {};
Y({
  name: "ElConfigProvider",
  props: Ob,
  setup(e, { slots: t }) {
    ae(() => e.message, (o) => {
      Object.assign(Mt, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = pu(e);
    return () => Q(t, "default", { config: n?.value });
  }
});
const Ib = 100, kb = 600, Xl = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = Ib, delay: r = kb } = He(n) ? {} : n;
    let s, a;
    const l = () => He(n) ? n() : n.handler(), i = () => {
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
}, oc = (e) => {
  if (!e)
    return { onClick: En, onMousedown: En, onMouseup: En };
  let t = !1, n = !1;
  return { onClick: (a) => {
    t && n && e(a), t = n = !1;
  }, onMousedown: (a) => {
    t = a.target === a.currentTarget;
  }, onMouseup: (a) => {
    n = a.target === a.currentTarget;
  } };
}, Lb = me({
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
}), Ab = {
  click: (e) => e instanceof MouseEvent
}, Nb = "overlay";
var Pb = Y({
  name: "ElOverlay",
  props: Lb,
  emits: Ab,
  setup(e, { slots: t, emit: n }) {
    const o = Ee(Nb), r = (i) => {
      n("click", i);
    }, { onClick: s, onMousedown: a, onMouseup: l } = oc(e.customMaskEvent ? void 0 : r);
    return () => e.mask ? K("div", {
      class: [o.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: s,
      onMousedown: a,
      onMouseup: l
    }, [Q(t, "default")], rr.STYLE | rr.CLASS | rr.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Fs("div", {
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
const $b = Pb, rc = Symbol("dialogInjectionKey"), sc = me({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: qt
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
}), Rb = {
  close: () => !0
}, Mb = (e, t, n, o) => {
  let r = {
    offsetX: 0,
    offsetY: 0
  };
  const s = (u) => {
    const d = u.clientX, f = u.clientY, { offsetX: g, offsetY: m } = r, v = e.value.getBoundingClientRect(), h = v.left, y = v.top, p = v.width, C = v.height, k = document.documentElement.clientWidth, w = document.documentElement.clientHeight, T = -h + g, I = -y + m, E = k - h - p + g, H = w - y - C + m, V = (G) => {
      let J = g + G.clientX - d, le = m + G.clientY - f;
      o?.value || (J = Math.min(Math.max(J, T), E), le = Math.min(Math.max(le, I), H)), r = {
        offsetX: J,
        offsetY: le
      }, e.value && (e.value.style.transform = `translate(${fn(J)}, ${fn(le)})`);
    }, Z = () => {
      document.removeEventListener("mousemove", V), document.removeEventListener("mouseup", Z);
    };
    document.addEventListener("mousemove", V), document.addEventListener("mouseup", Z);
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
  return Re(() => {
    Ps(() => {
      n.value ? a() : l();
    });
  }), Tt(() => {
    l();
  }), {
    resetPosition: i
  };
}, va = (...e) => (t) => {
  e.forEach((n) => {
    He(n) ? n(t) : n.value = t;
  });
}, Fb = Y({ name: "ElDialogContent" }), Db = /* @__PURE__ */ Y({
  ...Fb,
  props: sc,
  emits: Rb,
  setup(e, { expose: t }) {
    const n = e, { t: o } = Fo(), { Close: r } = hu, { dialogRef: s, headerRef: a, bodyId: l, ns: i, style: u } = ie(rc), { focusTrapRef: d } = ie(ea), f = O(() => [
      i.b(),
      i.is("fullscreen", n.fullscreen),
      i.is("draggable", n.draggable),
      i.is("align-center", n.alignCenter),
      { [i.m("center")]: n.center }
    ]), g = va(d, s), m = O(() => n.draggable), v = O(() => n.overflow), { resetPosition: h } = Mb(s, a, m, v);
    return t({
      resetPosition: h
    }), (y, p) => (L(), x("div", {
      ref: c(g),
      class: z(c(f)),
      style: Ke(c(u)),
      tabindex: "-1"
    }, [
      N("header", {
        ref_key: "headerRef",
        ref: a,
        class: z([c(i).e("header"), y.headerClass, { "show-close": y.showClose }])
      }, [
        Q(y.$slots, "header", {}, () => [
          N("span", {
            role: "heading",
            "aria-level": y.ariaLevel,
            class: z(c(i).e("title"))
          }, ee(y.title), 11, ["aria-level"])
        ]),
        y.showClose ? (L(), x("button", {
          key: 0,
          "aria-label": c(o)("el.dialog.close"),
          class: z(c(i).e("headerbtn")),
          type: "button",
          onClick: (C) => y.$emit("close")
        }, [
          K(c(Ge), {
            class: z(c(i).e("close"))
          }, {
            default: j(() => [
              (L(), te(pt(y.closeIcon || c(r))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, ["aria-label", "onClick"])) : W("v-if", !0)
      ], 2),
      N("div", {
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
      ], 2)) : W("v-if", !0)
    ], 6));
  }
});
var Bb = /* @__PURE__ */ ve(Db, [["__file", "dialog-content.vue"]]);
const Vb = me({
  ...sc,
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
}), xb = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [tt]: (e) => Io(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, zb = (e, t = {}) => {
  rn(e) || Ks("[useLockscreen]", "You need to pass a ref param to this function");
  const n = t.ns || Ee("popup"), o = O(() => n.bm("parent", "hidden"));
  if (!Ne || wl(document.body, o.value))
    return;
  let r = 0, s = !1, a = "0";
  const l = () => {
    setTimeout(() => {
      typeof document > "u" || s && document && (document.body.style.width = a, _g(document.body, o.value));
    }, 200);
  };
  ae(e, (i) => {
    if (!i) {
      l();
      return;
    }
    s = !wl(document.body, o.value), s && (a = document.body.style.width, bg(document.body, o.value)), r = Cg(n.namespace.value);
    const u = document.documentElement.clientHeight < document.body.scrollHeight, d = wg(document.body, "overflowY");
    r > 0 && (u || d === "scroll") && s && (document.body.style.width = `calc(100% - ${r}px)`);
  }), Ri(() => l());
}, Hb = (e, t) => {
  var n;
  const r = Je().emit, { nextZIndex: s } = Ys();
  let a = "";
  const l = In(), i = In(), u = R(!1), d = R(!1), f = R(!1), g = R((n = e.zIndex) != null ? n : s());
  let m, v;
  const h = Rr("namespace", ho), y = O(() => {
    const $ = {}, M = `--${h.value}-dialog`;
    return e.fullscreen || (e.top && ($[`${M}-margin-top`] = e.top), e.width && ($[`${M}-width`] = fn(e.width))), $;
  }), p = O(() => e.alignCenter ? { display: "flex" } : {});
  function C() {
    r("opened");
  }
  function k() {
    r("closed"), r(tt, !1), e.destroyOnClose && (f.value = !1);
  }
  function w() {
    r("close");
  }
  function T() {
    v?.(), m?.(), e.openDelay && e.openDelay > 0 ? { stop: m } = gr(() => V(), e.openDelay) : V();
  }
  function I() {
    m?.(), v?.(), e.closeDelay && e.closeDelay > 0 ? { stop: v } = gr(() => Z(), e.closeDelay) : Z();
  }
  function E() {
    function $(M) {
      M || (d.value = !0, u.value = !1);
    }
    e.beforeClose ? e.beforeClose($) : I();
  }
  function H() {
    e.closeOnClickModal && E();
  }
  function V() {
    Ne && (u.value = !0);
  }
  function Z() {
    u.value = !1;
  }
  function G() {
    r("openAutoFocus");
  }
  function J() {
    r("closeAutoFocus");
  }
  function le($) {
    var M;
    ((M = $.detail) == null ? void 0 : M.focusReason) === "pointer" && $.preventDefault();
  }
  e.lockScroll && zb(u);
  function Te() {
    e.closeOnPressEscape && E();
  }
  return ae(() => e.modelValue, ($) => {
    $ ? (d.value = !1, T(), f.value = !0, g.value = tu(e.zIndex) ? s() : g.value++, Ve(() => {
      r("open"), t.value && (t.value.parentElement.scrollTop = 0, t.value.parentElement.scrollLeft = 0, t.value.scrollTop = 0);
    })) : u.value && I();
  }), ae(() => e.fullscreen, ($) => {
    t.value && ($ ? (a = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = a);
  }), Re(() => {
    e.modelValue && (u.value = !0, f.value = !0, T());
  }), {
    afterEnter: C,
    afterLeave: k,
    beforeLeave: w,
    handleClose: E,
    onModalClick: H,
    close: I,
    doClose: Z,
    onOpenAutoFocus: G,
    onCloseAutoFocus: J,
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
}, Wb = Y({
  name: "ElDialog",
  inheritAttrs: !1
}), Ub = /* @__PURE__ */ Y({
  ...Wb,
  props: Vb,
  emits: xb,
  setup(e, { expose: t }) {
    const n = e, o = Rs();
    ec({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, O(() => !!o.title));
    const r = Ee("dialog"), s = R(), a = R(), l = R(), {
      visible: i,
      titleId: u,
      bodyId: d,
      style: f,
      overlayDialogStyle: g,
      rendered: m,
      zIndex: v,
      afterEnter: h,
      afterLeave: y,
      beforeLeave: p,
      handleClose: C,
      onModalClick: k,
      onOpenAutoFocus: w,
      onCloseAutoFocus: T,
      onCloseRequested: I,
      onFocusoutPrevented: E
    } = Hb(n, s);
    Ze(rc, {
      dialogRef: s,
      headerRef: a,
      bodyId: d,
      ns: r,
      rendered: m,
      style: f
    });
    const H = oc(k), V = O(() => n.draggable && !n.fullscreen);
    return t({
      visible: i,
      dialogContentRef: l,
      resetPosition: () => {
        var G;
        (G = l.value) == null || G.resetPosition();
      }
    }), (G, J) => (L(), te(c(Xu), {
      to: G.appendTo,
      disabled: G.appendTo !== "body" ? !1 : !G.appendToBody
    }, {
      default: j(() => [
        K(kn, {
          name: "dialog-fade",
          onAfterEnter: c(h),
          onAfterLeave: c(y),
          onBeforeLeave: c(p),
          persisted: ""
        }, {
          default: j(() => [
            vt(K(c($b), {
              "custom-mask-event": "",
              mask: G.modal,
              "overlay-class": G.modalClass,
              "z-index": c(v)
            }, {
              default: j(() => [
                N("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": G.title || void 0,
                  "aria-labelledby": G.title ? void 0 : c(u),
                  "aria-describedby": c(d),
                  class: z(`${c(r).namespace.value}-overlay-dialog`),
                  style: Ke(c(g)),
                  onClick: c(H).onClick,
                  onMousedown: c(H).onMousedown,
                  onMouseup: c(H).onMouseup
                }, [
                  K(c(Fu), {
                    loop: "",
                    trapped: c(i),
                    "focus-start-el": "container",
                    onFocusAfterTrapped: c(w),
                    onFocusAfterReleased: c(T),
                    onFocusoutPrevented: c(E),
                    onReleaseRequested: c(I)
                  }, {
                    default: j(() => [
                      c(m) ? (L(), te(Bb, Nt({
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
                        onClose: c(C)
                      }), Or({
                        header: j(() => [
                          G.$slots.title ? Q(G.$slots, "title", { key: 1 }) : Q(G.$slots, "header", {
                            key: 0,
                            close: c(C),
                            titleId: c(u),
                            titleClass: c(r).e("title")
                          })
                        ]),
                        default: j(() => [
                          Q(G.$slots, "default")
                        ]),
                        _: 2
                      }, [
                        G.$slots.footer ? {
                          name: "footer",
                          fn: j(() => [
                            Q(G.$slots, "footer")
                          ])
                        } : void 0
                      ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : W("v-if", !0)
                    ]),
                    _: 3
                  }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                ], 46, ["aria-label", "aria-labelledby", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [Kt, c(i)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ]),
      _: 3
    }, 8, ["to", "disabled"]));
  }
});
var jb = /* @__PURE__ */ ve(Ub, [["__file", "dialog.vue"]]);
const Gb = Ot(jb), Kb = /* @__PURE__ */ Y({
  inheritAttrs: !1
});
function Yb(e, t, n, o, r, s) {
  return Q(e.$slots, "default");
}
var qb = /* @__PURE__ */ ve(Kb, [["render", Yb], ["__file", "collection.vue"]]);
const Xb = /* @__PURE__ */ Y({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function Jb(e, t, n, o, r, s) {
  return Q(e.$slots, "default");
}
var Zb = /* @__PURE__ */ ve(Xb, [["render", Jb], ["__file", "collection-item.vue"]]);
const ac = "data-el-collection-item", lc = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, o = Symbol(t), r = Symbol(n), s = {
    ...qb,
    name: t,
    setup() {
      const l = R(), i = /* @__PURE__ */ new Map();
      Ze(o, {
        itemMap: i,
        getItems: () => {
          const d = c(l);
          if (!d)
            return [];
          const f = Array.from(d.querySelectorAll(`[${ac}]`));
          return [...i.values()].sort((m, v) => f.indexOf(m.ref) - f.indexOf(v.ref));
        },
        collectionRef: l
      });
    }
  }, a = {
    ...Zb,
    name: n,
    setup(l, { attrs: i }) {
      const u = R(), d = ie(o, void 0);
      Ze(r, {
        collectionItemRef: u
      }), Re(() => {
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
}, Qb = me({
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
  ElCollection: e_,
  ElCollectionItem: t_,
  COLLECTION_INJECTION_KEY: ma,
  COLLECTION_ITEM_INJECTION_KEY: n_
} = lc("RovingFocusGroup"), ga = Symbol("elRovingFocusGroup"), ic = Symbol("elRovingFocusGroupItem"), o_ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
}, r_ = (e, t) => e, s_ = (e, t, n) => {
  const o = r_(e.code);
  return o_[o];
}, a_ = (e, t) => e.map((n, o) => e[(o + t) % e.length]), ha = (e) => {
  const { activeElement: t } = document;
  for (const n of e)
    if (n === t || (n.focus(), t !== document.activeElement))
      return;
}, Jl = "currentTabIdChange", Zl = "rovingFocusGroup.entryFocus", l_ = { bubbles: !1, cancelable: !0 }, i_ = Y({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: !1,
  props: Qb,
  emits: [Jl, "entryFocus"],
  setup(e, { emit: t }) {
    var n;
    const o = R((n = e.currentTabId || e.defaultCurrentTabId) != null ? n : null), r = R(!1), s = R(!1), a = R(), { getItems: l } = ie(ma, void 0), i = O(() => [
      {
        outline: "none"
      },
      e.style
    ]), u = (h) => {
      t(Jl, h);
    }, d = () => {
      r.value = !0;
    }, f = We((h) => {
      var y;
      (y = e.onMousedown) == null || y.call(e, h);
    }, () => {
      s.value = !0;
    }), g = We((h) => {
      var y;
      (y = e.onFocus) == null || y.call(e, h);
    }, (h) => {
      const y = !c(s), { target: p, currentTarget: C } = h;
      if (p === C && y && !c(r)) {
        const k = new Event(Zl, l_);
        if (C?.dispatchEvent(k), !k.defaultPrevented) {
          const w = l().filter((V) => V.focusable), T = w.find((V) => V.active), I = w.find((V) => V.id === c(o)), H = [T, I, ...w].filter(Boolean).map((V) => V.ref);
          ha(H);
        }
      }
      s.value = !1;
    }), m = We((h) => {
      var y;
      (y = e.onBlur) == null || y.call(e, h);
    }, () => {
      r.value = !1;
    }), v = (...h) => {
      t("entryFocus", ...h);
    };
    Ze(ga, {
      currentTabbedId: Tr(o),
      loop: lt(e, "loop"),
      tabIndex: O(() => c(r) ? -1 : 0),
      rovingFocusGroupRef: a,
      rovingFocusGroupRootStyle: i,
      orientation: lt(e, "orientation"),
      dir: lt(e, "dir"),
      onItemFocus: u,
      onItemShiftTab: d,
      onBlur: m,
      onFocus: g,
      onMousedown: f
    }), ae(() => e.currentTabId, (h) => {
      o.value = h ?? null;
    }), Lt(a, Zl, v);
  }
});
function u_(e, t, n, o, r, s) {
  return Q(e.$slots, "default");
}
var c_ = /* @__PURE__ */ ve(i_, [["render", u_], ["__file", "roving-focus-group-impl.vue"]]);
const d_ = Y({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: e_,
    ElRovingFocusGroupImpl: c_
  }
});
function f_(e, t, n, o, r, s) {
  const a = Pe("el-roving-focus-group-impl"), l = Pe("el-focus-group-collection");
  return L(), te(l, null, {
    default: j(() => [
      K(a, Ed(Td(e.$attrs)), {
        default: j(() => [
          Q(e.$slots, "default")
        ]),
        _: 3
      }, 16)
    ]),
    _: 3
  });
}
var p_ = /* @__PURE__ */ ve(d_, [["render", f_], ["__file", "roving-focus-group.vue"]]);
const v_ = me({
  trigger: fa.trigger,
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
    ...Ao.effect,
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
    values: ku,
    default: "menu"
  },
  buttonProps: {
    type: oe(Object)
  },
  teleported: Ao.teleported,
  persistent: {
    type: Boolean,
    default: !0
  }
}), uc = me({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: qt
  }
}), m_ = me({
  onKeydown: { type: oe(Function) }
}), g_ = [
  Le.down,
  Le.pageDown,
  Le.home
], cc = [Le.up, Le.pageUp, Le.end], h_ = [...g_, ...cc], {
  ElCollection: y_,
  ElCollectionItem: b_,
  COLLECTION_INJECTION_KEY: __,
  COLLECTION_ITEM_INJECTION_KEY: w_
} = lc("Dropdown"), xr = Symbol("elDropdown"), { ButtonGroup: C_ } = pa, S_ = Y({
  name: "ElDropdown",
  components: {
    ElButton: pa,
    ElButtonGroup: C_,
    ElScrollbar: Ou,
    ElDropdownCollection: y_,
    ElTooltip: Zu,
    ElRovingFocusGroup: p_,
    ElOnlyChild: $u,
    ElIcon: Ge,
    ArrowDown: qs
  },
  props: v_,
  emits: ["visible-change", "click", "command"],
  setup(e, { emit: t }) {
    const n = Je(), o = Ee("dropdown"), { t: r } = Fo(), s = R(), a = R(), l = R(), i = R(), u = R(null), d = R(null), f = R(!1), g = O(() => ({
      maxHeight: fn(e.maxHeight)
    })), m = O(() => [o.m(w.value)]), v = O(() => on(e.trigger)), h = In().value, y = O(() => e.id || h);
    ae([s, v], ([M, D], [re]) => {
      var se, pe, Ae;
      (se = re?.$el) != null && se.removeEventListener && re.$el.removeEventListener("pointerenter", I), (pe = M?.$el) != null && pe.removeEventListener && M.$el.removeEventListener("pointerenter", I), (Ae = M?.$el) != null && Ae.addEventListener && D.includes("hover") && M.$el.addEventListener("pointerenter", I);
    }, { immediate: !0 }), Tt(() => {
      var M, D;
      (D = (M = s.value) == null ? void 0 : M.$el) != null && D.removeEventListener && s.value.$el.removeEventListener("pointerenter", I);
    });
    function p() {
      C();
    }
    function C() {
      var M;
      (M = l.value) == null || M.onClose();
    }
    function k() {
      var M;
      (M = l.value) == null || M.onOpen();
    }
    const w = fo();
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
    function Z(M) {
      f.value || (M.preventDefault(), M.stopImmediatePropagation());
    }
    function G() {
      t("visible-change", !0);
    }
    function J(M) {
      var D;
      M?.type === "keydown" && ((D = i.value) == null || D.focus());
    }
    function le() {
      t("visible-change", !1);
    }
    return Ze(xr, {
      contentRef: i,
      role: O(() => e.role),
      triggerId: y,
      isUsingKeyboard: f,
      onItemEnter: E,
      onItemLeave: H
    }), Ze("elDropdown", {
      instance: n,
      dropdownSize: w,
      handleClick: p,
      commandHandler: T,
      trigger: lt(e, "trigger"),
      hideOnClick: lt(e, "hideOnClick")
    }), {
      t: r,
      ns: o,
      scrollbar: u,
      wrapStyle: g,
      dropdownTriggerKls: m,
      dropdownSize: w,
      triggerId: y,
      currentTabId: d,
      handleCurrentTabIdChange: V,
      handlerMainButtonClick: (M) => {
        t("click", M);
      },
      handleEntryFocus: Z,
      handleClose: C,
      handleOpen: k,
      handleBeforeShowTooltip: G,
      handleShowTooltip: J,
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
function E_(e, t, n, o, r, s) {
  var a;
  const l = Pe("el-dropdown-collection"), i = Pe("el-roving-focus-group"), u = Pe("el-scrollbar"), d = Pe("el-only-child"), f = Pe("el-tooltip"), g = Pe("el-button"), m = Pe("arrow-down"), v = Pe("el-icon"), h = Pe("el-button-group");
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
    }, Or({
      content: j(() => [
        K(u, {
          ref: "scrollbar",
          "wrap-style": e.wrapStyle,
          tag: "div",
          "view-class": e.ns.e("list")
        }, {
          default: j(() => [
            K(i, {
              loop: e.loop,
              "current-tab-id": e.currentTabId,
              orientation: "horizontal",
              onCurrentTabIdChange: e.handleCurrentTabIdChange,
              onEntryFocus: e.handleEntryFocus
            }, {
              default: j(() => [
                K(l, null, {
                  default: j(() => [
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
        fn: j(() => [
          K(d, {
            id: e.triggerId,
            ref: "triggeringElementRef",
            role: "button",
            tabindex: e.tabindex
          }, {
            default: j(() => [
              Q(e.$slots, "default")
            ]),
            _: 3
          }, 8, ["id", "tabindex"])
        ])
      }
    ]), 1032, ["role", "effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "trigger-keys", "trigger-target-el", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "persistent", "onBeforeShow", "onShow", "onBeforeHide"]),
    e.splitButton ? (L(), te(h, { key: 0 }, {
      default: j(() => [
        K(g, Nt({ ref: "referenceElementRef" }, e.buttonProps, {
          size: e.dropdownSize,
          type: e.type,
          disabled: e.disabled,
          tabindex: e.tabindex,
          onClick: e.handlerMainButtonClick
        }), {
          default: j(() => [
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
          default: j(() => [
            K(v, {
              class: z(e.ns.e("icon"))
            }, {
              default: j(() => [
                K(m)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])
      ]),
      _: 3
    })) : W("v-if", !0)
  ], 2);
}
var T_ = /* @__PURE__ */ ve(S_, [["render", E_], ["__file", "dropdown.vue"]]);
const O_ = Y({
  components: {
    ElRovingFocusCollectionItem: t_
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
    const { currentTabbedId: n, loop: o, onItemFocus: r, onItemShiftTab: s } = ie(ga, void 0), { getItems: a } = ie(ma, void 0), l = In(), i = R(), u = We((m) => {
      t("mousedown", m);
    }, (m) => {
      e.focusable ? r(c(l)) : m.preventDefault();
    }), d = We((m) => {
      t("focus", m);
    }, () => {
      r(c(l));
    }), f = We((m) => {
      t("keydown", m);
    }, (m) => {
      const { code: v, shiftKey: h, target: y, currentTarget: p } = m;
      if (v === Le.tab && h) {
        s();
        return;
      }
      if (y !== p)
        return;
      const C = s_(m);
      if (C) {
        m.preventDefault();
        let w = a().filter((T) => T.focusable).map((T) => T.ref);
        switch (C) {
          case "last": {
            w.reverse();
            break;
          }
          case "prev":
          case "next": {
            C === "prev" && w.reverse();
            const T = w.indexOf(p);
            w = o.value ? a_(w, T + 1) : w.slice(T + 1);
            break;
          }
        }
        Ve(() => {
          ha(w);
        });
      }
    }), g = O(() => n.value === c(l));
    return Ze(ic, {
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
function I_(e, t, n, o, r, s) {
  const a = Pe("el-roving-focus-collection-item");
  return L(), te(a, {
    id: e.id,
    focusable: e.focusable,
    active: e.active
  }, {
    default: j(() => [
      Q(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var k_ = /* @__PURE__ */ ve(O_, [["render", I_], ["__file", "roving-focus-item.vue"]]);
const L_ = Y({
  name: "DropdownItemImpl",
  components: {
    ElIcon: Ge
  },
  props: uc,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(e, { emit: t }) {
    const n = Ee("dropdown"), { role: o } = ie(xr, void 0), { collectionItemRef: r } = ie(w_, void 0), { collectionItemRef: s } = ie(n_, void 0), {
      rovingFocusGroupItemRef: a,
      tabIndex: l,
      handleFocus: i,
      handleKeydown: u,
      handleMousedown: d
    } = ie(ic, void 0), f = va(r, s, a), g = O(() => o.value === "menu" ? "menuitem" : o.value === "navigation" ? "link" : "button"), m = We((v) => {
      if ([Le.enter, Le.numpadEnter, Le.space].includes(v.code))
        return v.preventDefault(), v.stopImmediatePropagation(), t("clickimpl", v), !0;
    }, u);
    return {
      ns: n,
      itemRef: f,
      dataset: {
        [ac]: ""
      },
      role: g,
      tabIndex: l,
      handleFocus: i,
      handleKeydown: m,
      handleMousedown: d
    };
  }
});
function A_(e, t, n, o, r, s) {
  const a = Pe("el-icon");
  return L(), x(ke, null, [
    e.divided ? (L(), x("li", {
      key: 0,
      role: "separator",
      class: z(e.ns.bem("menu", "item", "divided"))
    }, null, 2)) : W("v-if", !0),
    N("li", Nt({ ref: e.itemRef }, { ...e.dataset, ...e.$attrs }, {
      "aria-disabled": e.disabled,
      class: [e.ns.be("menu", "item"), e.ns.is("disabled", e.disabled)],
      tabindex: e.tabIndex,
      role: e.role,
      onClick: (l) => e.$emit("clickimpl", l),
      onFocus: e.handleFocus,
      onKeydown: Fe(e.handleKeydown, ["self"]),
      onMousedown: e.handleMousedown,
      onPointermove: (l) => e.$emit("pointermove", l),
      onPointerleave: (l) => e.$emit("pointerleave", l)
    }), [
      e.icon ? (L(), te(a, { key: 0 }, {
        default: j(() => [
          (L(), te(pt(e.icon)))
        ]),
        _: 1
      })) : W("v-if", !0),
      Q(e.$slots, "default")
    ], 16, ["aria-disabled", "tabindex", "role", "onClick", "onFocus", "onKeydown", "onMousedown", "onPointermove", "onPointerleave"])
  ], 64);
}
var N_ = /* @__PURE__ */ ve(L_, [["render", A_], ["__file", "dropdown-item-impl.vue"]]);
const dc = () => {
  const e = ie("elDropdown", {}), t = O(() => e?.dropdownSize);
  return {
    elDropdown: e,
    _elDropdownSize: t
  };
}, P_ = Y({
  name: "ElDropdownItem",
  components: {
    ElDropdownCollectionItem: b_,
    ElRovingFocusItem: k_,
    ElDropdownItemImpl: N_
  },
  inheritAttrs: !1,
  props: uc,
  emits: ["pointermove", "pointerleave", "click"],
  setup(e, { emit: t, attrs: n }) {
    const { elDropdown: o } = dc(), r = Je(), s = R(null), a = O(() => {
      var m, v;
      return (v = (m = c(s)) == null ? void 0 : m.textContent) != null ? v : "";
    }), { onItemEnter: l, onItemLeave: i } = ie(xr, void 0), u = We((m) => (t("pointermove", m), m.defaultPrevented), Ul((m) => {
      if (e.disabled) {
        i(m);
        return;
      }
      const v = m.currentTarget;
      v === document.activeElement || v.contains(document.activeElement) || (l(m), m.defaultPrevented || v?.focus());
    })), d = We((m) => (t("pointerleave", m), m.defaultPrevented), Ul(i)), f = We((m) => {
      if (!e.disabled)
        return t("click", m), m.type !== "keydown" && m.defaultPrevented;
    }, (m) => {
      var v, h, y;
      if (e.disabled) {
        m.stopImmediatePropagation();
        return;
      }
      (v = o?.hideOnClick) != null && v.value && ((h = o.handleClick) == null || h.call(o)), (y = o.commandHandler) == null || y.call(o, e.command, r, m);
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
function $_(e, t, n, o, r, s) {
  var a;
  const l = Pe("el-dropdown-item-impl"), i = Pe("el-roving-focus-item"), u = Pe("el-dropdown-collection-item");
  return L(), te(u, {
    disabled: e.disabled,
    "text-value": (a = e.textValue) != null ? a : e.textContent
  }, {
    default: j(() => [
      K(i, {
        focusable: !e.disabled
      }, {
        default: j(() => [
          K(l, Nt(e.propsAndAttrs, {
            onPointerleave: e.handlePointerLeave,
            onPointermove: e.handlePointerMove,
            onClickimpl: e.handleClick
          }), {
            default: j(() => [
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
var fc = /* @__PURE__ */ ve(P_, [["render", $_], ["__file", "dropdown-item.vue"]]);
const R_ = Y({
  name: "ElDropdownMenu",
  props: m_,
  setup(e) {
    const t = Ee("dropdown"), { _elDropdownSize: n } = dc(), o = n.value, { focusTrapRef: r, onKeydown: s } = ie(ea, void 0), { contentRef: a, role: l, triggerId: i } = ie(xr, void 0), { collectionRef: u, getItems: d } = ie(__, void 0), {
      rovingFocusGroupRef: f,
      rovingFocusGroupRootStyle: g,
      tabIndex: m,
      onBlur: v,
      onFocus: h,
      onMousedown: y
    } = ie(ga, void 0), { collectionRef: p } = ie(ma, void 0), C = O(() => [t.b("menu"), t.bm("menu", o?.value)]), k = va(a, u, r, f, p), w = We((I) => {
      var E;
      (E = e.onKeydown) == null || E.call(e, I);
    }, (I) => {
      const { currentTarget: E, code: H, target: V } = I;
      if (E.contains(V), Le.tab === H && I.stopImmediatePropagation(), I.preventDefault(), V !== c(a) || !h_.includes(H))
        return;
      const G = d().filter((J) => !J.disabled).map((J) => J.ref);
      cc.includes(H) && G.reverse(), ha(G);
    });
    return {
      size: o,
      rovingFocusGroupRootStyle: g,
      tabIndex: m,
      dropdownKls: C,
      role: l,
      triggerId: i,
      dropdownListWrapperRef: k,
      handleKeydown: (I) => {
        w(I), s(I);
      },
      onBlur: v,
      onFocus: h,
      onMousedown: y
    };
  }
});
function M_(e, t, n, o, r, s) {
  return L(), x("ul", {
    ref: e.dropdownListWrapperRef,
    class: z(e.dropdownKls),
    style: Ke(e.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: e.role,
    "aria-labelledby": e.triggerId,
    onBlur: e.onBlur,
    onFocus: e.onFocus,
    onKeydown: Fe(e.handleKeydown, ["self"]),
    onMousedown: Fe(e.onMousedown, ["self"])
  }, [
    Q(e.$slots, "default")
  ], 46, ["role", "aria-labelledby", "onBlur", "onFocus", "onKeydown", "onMousedown"]);
}
var pc = /* @__PURE__ */ ve(R_, [["render", M_], ["__file", "dropdown-menu.vue"]]);
Ot(T_, {
  DropdownItem: fc,
  DropdownMenu: pc
});
const F_ = Bo(fc);
Bo(pc);
const D_ = me({
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
  size: Do,
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
  ...co(["ariaLabel"])
}), B_ = {
  [Qn]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Jn]: (e) => Oe(e) || cn(e),
  [tt]: (e) => Oe(e) || cn(e)
}, V_ = Y({
  name: "ElInputNumber"
}), x_ = /* @__PURE__ */ Y({
  ...V_,
  props: D_,
  emits: B_,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: r } = Fo(), s = Ee("input-number"), a = R(), l = Tn({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: i } = Mr(), u = O(() => Oe(o.modelValue) && o.modelValue <= o.min), d = O(() => Oe(o.modelValue) && o.modelValue >= o.max), f = O(() => {
      const $ = p(o.step);
      return Ut(o.precision) ? Math.max(p(o.modelValue), $) : ($ > o.precision, o.precision);
    }), g = O(() => o.controls && o.controlsPosition === "right"), m = fo(), v = Fr(), h = O(() => {
      if (l.userInput !== null)
        return l.userInput;
      let $ = l.currentValue;
      if (cn($))
        return "";
      if (Oe($)) {
        if (Number.isNaN($))
          return "";
        Ut(o.precision) || ($ = $.toFixed(o.precision));
      }
      return $;
    }), y = ($, M) => {
      if (Ut(M) && (M = f.value), M === 0)
        return Math.round($);
      let D = String($);
      const re = D.indexOf(".");
      if (re === -1 || !D.replace(".", "").split("")[re + M])
        return $;
      const Ae = D.length;
      return D.charAt(Ae - 1) === "5" && (D = `${D.slice(0, Math.max(0, Ae - 1))}6`), Number.parseFloat(Number(D).toFixed(M));
    }, p = ($) => {
      if (cn($))
        return 0;
      const M = $.toString(), D = M.indexOf(".");
      let re = 0;
      return D !== -1 && (re = M.length - D - 1), re;
    }, C = ($, M = 1) => Oe($) ? y($ + o.step * M) : l.currentValue, k = () => {
      if (o.readonly || v.value || d.value)
        return;
      const $ = Number(h.value) || 0, M = C($);
      I(M), n(Jn, l.currentValue), le();
    }, w = () => {
      if (o.readonly || v.value || u.value)
        return;
      const $ = Number(h.value) || 0, M = C($, -1);
      I(M), n(Jn, l.currentValue), le();
    }, T = ($, M) => {
      const { max: D, min: re, step: se, precision: pe, stepStrictly: Ae, valueOnClear: Me } = o;
      D < re && Ks("InputNumber", "min should not be greater than max.");
      let we = Number($);
      if (cn($) || Number.isNaN(we))
        return null;
      if ($ === "") {
        if (Me === null)
          return null;
        we = St(Me) ? { min: re, max: D }[Me] : Me;
      }
      return Ae && (we = y(Math.round(we / se) * se, pe), we !== $ && M && n(tt, we)), Ut(pe) || (we = y(we, pe)), (we > D || we < re) && (we = we > D ? D : re, M && n(tt, we)), we;
    }, I = ($, M = !0) => {
      var D;
      const re = l.currentValue, se = T($);
      if (!M) {
        n(tt, se);
        return;
      }
      re === se && $ || (l.userInput = null, n(tt, se), re !== se && n(Qn, se, re), o.validateEvent && ((D = i?.validate) == null || D.call(i, "change").catch((pe) => void 0)), l.currentValue = se);
    }, E = ($) => {
      l.userInput = $;
      const M = $ === "" ? null : Number($);
      n(Jn, M), I(M, !1);
    }, H = ($) => {
      const M = $ !== "" ? Number($) : "";
      (Oe(M) && !Number.isNaN(M) || $ === "") && I(M), le(), l.userInput = null;
    }, V = () => {
      var $, M;
      (M = ($ = a.value) == null ? void 0 : $.focus) == null || M.call($);
    }, Z = () => {
      var $, M;
      (M = ($ = a.value) == null ? void 0 : $.blur) == null || M.call($);
    }, G = ($) => {
      n("focus", $);
    }, J = ($) => {
      var M, D;
      l.userInput = null, bu() && l.currentValue === null && ((M = a.value) != null && M.input) && (a.value.input.value = ""), n("blur", $), o.validateEvent && ((D = i?.validate) == null || D.call(i, "blur").catch((re) => void 0));
    }, le = () => {
      l.currentValue !== o.modelValue && (l.currentValue = o.modelValue);
    }, Te = ($) => {
      document.activeElement === $.target && $.preventDefault();
    };
    return ae(() => o.modelValue, ($, M) => {
      const D = T($, !0);
      l.userInput === null && D !== M && (l.currentValue = D);
    }, { immediate: !0 }), Re(() => {
      var $;
      const { min: M, max: D, modelValue: re } = o, se = ($ = a.value) == null ? void 0 : $.input;
      if (se.setAttribute("role", "spinbutton"), Number.isFinite(D) ? se.setAttribute("aria-valuemax", String(D)) : se.removeAttribute("aria-valuemax"), Number.isFinite(M) ? se.setAttribute("aria-valuemin", String(M)) : se.removeAttribute("aria-valuemin"), se.setAttribute("aria-valuenow", l.currentValue || l.currentValue === 0 ? String(l.currentValue) : ""), se.setAttribute("aria-disabled", String(v.value)), !Oe(re) && re != null) {
        let pe = Number(re);
        Number.isNaN(pe) && (pe = null), n(tt, pe);
      }
      se.addEventListener("wheel", Te, { passive: !1 });
    }), Mi(() => {
      var $, M;
      const D = ($ = a.value) == null ? void 0 : $.input;
      D?.setAttribute("aria-valuenow", `${(M = l.currentValue) != null ? M : ""}`);
    }), t({
      focus: V,
      blur: Z
    }), ($, M) => (L(), x("div", {
      class: z([
        c(s).b(),
        c(s).m(c(m)),
        c(s).is("disabled", c(v)),
        c(s).is("without-controls", !$.controls),
        c(s).is("controls-right", c(g))
      ]),
      onDragstart: Fe(() => {
      }, ["prevent"])
    }, [
      $.controls ? vt((L(), x("span", {
        key: 0,
        role: "button",
        "aria-label": c(r)("el.inputNumber.decrease"),
        class: z([c(s).e("decrease"), c(s).is("disabled", c(u))]),
        onKeydown: nn(w, ["enter"])
      }, [
        Q($.$slots, "decrease-icon", {}, () => [
          K(c(Ge), null, {
            default: j(() => [
              c(g) ? (L(), te(c(qs), { key: 0 })) : (L(), te(c(Wg), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Xl), w]
      ]) : W("v-if", !0),
      $.controls ? vt((L(), x("span", {
        key: 1,
        role: "button",
        "aria-label": c(r)("el.inputNumber.increase"),
        class: z([c(s).e("increase"), c(s).is("disabled", c(d))]),
        onKeydown: nn(k, ["enter"])
      }, [
        Q($.$slots, "increase-icon", {}, () => [
          K(c(Ge), null, {
            default: j(() => [
              c(g) ? (L(), te(c(Ag), { key: 0 })) : (L(), te(c(jg), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Xl), k]
      ]) : W("v-if", !0),
      K(c(mh), {
        id: $.id,
        ref_key: "input",
        ref: a,
        type: "number",
        step: $.step,
        "model-value": c(h),
        placeholder: $.placeholder,
        readonly: $.readonly,
        disabled: c(v),
        size: c(m),
        max: $.max,
        min: $.min,
        name: $.name,
        "aria-label": $.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          nn(Fe(k, ["prevent"]), ["up"]),
          nn(Fe(w, ["prevent"]), ["down"])
        ],
        onBlur: J,
        onFocus: G,
        onInput: E,
        onChange: H
      }, Or({
        _: 2
      }, [
        $.$slots.prefix ? {
          name: "prefix",
          fn: j(() => [
            Q($.$slots, "prefix")
          ])
        } : void 0,
        $.$slots.suffix ? {
          name: "suffix",
          fn: j(() => [
            Q($.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var z_ = /* @__PURE__ */ ve(x_, [["__file", "input-number.vue"]]);
const H_ = Ot(z_);
function W_() {
  const e = Sn(), t = R(0), n = 11, o = O(() => ({
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
const vc = Symbol("ElSelectGroup"), zr = Symbol("ElSelect");
function U_(e, t) {
  const n = ie(zr), o = ie(vc, { disabled: !1 }), r = O(() => d(on(n.props.modelValue), e.value)), s = O(() => {
    var m;
    if (n.props.multiple) {
      const v = on((m = n.props.modelValue) != null ? m : []);
      return !r.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = O(() => e.label || (kt(e.value) ? "" : e.value)), l = O(() => e.value || e.label || ""), i = O(() => e.disabled || t.groupDisabled || s.value), u = Je(), d = (m = [], v) => {
    if (kt(e.value)) {
      const h = n.props.valueKey;
      return m && m.some((y) => Od(wn(y, h)) === wn(v, h));
    } else
      return m && m.includes(v);
  }, f = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, g = (m) => {
    const v = new RegExp(bb(m), "i");
    t.visible = v.test(a.value) || e.created;
  };
  return ae(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ae(() => e.value, (m, v) => {
    const { remote: h, valueKey: y } = n.props;
    if ((h ? m !== v : !bo(m, v)) && (n.onOptionDestroy(v, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !h) {
      if (y && kt(m) && kt(v) && m[y] === v[y])
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
const j_ = Y({
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
    const t = Ee("select"), n = In(), o = O(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(l)),
      t.is("selected", c(a)),
      t.is("hovering", c(g))
    ]), r = Tn({
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
    } = U_(e, r), { visible: f, hover: g } = Ds(r), m = Je().proxy;
    i.onOptionCreate(m), Tt(() => {
      const h = m.value, { selected: y } = i.states, p = y.some((C) => C.value === m.value);
      Ve(() => {
        i.states.cachedOptions.get(h) === m && !p && i.states.cachedOptions.delete(h);
      }), i.onOptionDestroy(h, m);
    });
    function v() {
      l.value || i.handleOptionSelect(m);
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
function G_(e, t, n, o, r, s) {
  return vt((L(), x("li", {
    id: e.id,
    class: z(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Fe(e.selectOptionClick, ["stop"])
  }, [
    Q(e.$slots, "default", {}, () => [
      N("span", null, ee(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Kt, e.visible]
  ]);
}
var ya = /* @__PURE__ */ ve(j_, [["render", G_], ["__file", "option.vue"]]);
const K_ = Y({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ie(zr), t = Ee("select"), n = O(() => e.props.popperClass), o = O(() => e.props.multiple), r = O(() => e.props.fitInputWidth), s = R("");
    function a() {
      var l;
      s.value = `${(l = e.selectRef) == null ? void 0 : l.offsetWidth}px`;
    }
    return Re(() => {
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
function Y_(e, t, n, o, r, s) {
  return L(), x("div", {
    class: z([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ke({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (L(), x("div", {
      key: 0,
      class: z(e.ns.be("dropdown", "header"))
    }, [
      Q(e.$slots, "header")
    ], 2)) : W("v-if", !0),
    Q(e.$slots, "default"),
    e.$slots.footer ? (L(), x("div", {
      key: 1,
      class: z(e.ns.be("dropdown", "footer"))
    }, [
      Q(e.$slots, "footer")
    ], 2)) : W("v-if", !0)
  ], 6);
}
var q_ = /* @__PURE__ */ ve(K_, [["render", Y_], ["__file", "select-dropdown.vue"]]);
const X_ = (e, t) => {
  const { t: n } = Fo(), o = In(), r = Ee("select"), s = Ee("input"), a = Tn({
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
  }), l = R(null), i = R(null), u = R(null), d = R(null), f = R(null), g = R(null), m = R(null), v = R(null), h = R(null), y = R(null), p = R(null), {
    isComposing: C,
    handleCompositionStart: k,
    handleCompositionUpdate: w,
    handleCompositionEnd: T
  } = Tu({
    afterComposition: (P) => rt(P)
  }), { wrapperRef: I, isFocused: E, handleBlur: H } = Eu(f, {
    beforeFocus() {
      return M.value;
    },
    afterFocus() {
      e.automaticDropdown && !V.value && (V.value = !0, a.menuVisibleOnFocus = !0);
    },
    beforeBlur(P) {
      var X, de;
      return ((X = u.value) == null ? void 0 : X.isFocusInsideContent(P)) || ((de = d.value) == null ? void 0 : de.isFocusInsideContent(P));
    },
    afterBlur() {
      V.value = !1, a.menuVisibleOnFocus = !1;
    }
  }), V = R(!1), Z = R(), { form: G, formItem: J } = Mr(), { inputId: le } = Cu(e, {
    formItemContext: J
  }), { valueOnClear: Te, isEmptyValue: $ } = hg(e), M = O(() => e.disabled || G?.disabled), D = O(() => Wt(e.modelValue) ? e.modelValue.length > 0 : !$(e.modelValue)), re = O(() => {
    var P;
    return (P = G?.statusIcon) != null ? P : !1;
  }), se = O(() => e.clearable && !M.value && a.inputHovering && D.value), pe = O(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Ae = O(() => r.is("reverse", pe.value && V.value)), Me = O(() => J?.validateState || ""), we = O(() => yu[Me.value]), Ye = O(() => e.remote ? 300 : 0), Ue = O(() => e.remote && !a.inputValue && a.options.size === 0), qe = O(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && a.inputValue && a.options.size > 0 && De.value === 0 ? e.noMatchText || n("el.select.noMatch") : a.options.size === 0 ? e.noDataText || n("el.select.noData") : null), De = O(() => ye.value.filter((P) => P.visible).length), ye = O(() => {
    const P = Array.from(a.options.values()), X = [];
    return a.optionValues.forEach((de) => {
      const je = P.findIndex((wt) => wt.value === de);
      je > -1 && X.push(P[je]);
    }), X.length >= P.length ? X : P;
  }), ut = O(() => Array.from(a.cachedOptions.values())), mt = O(() => {
    const P = ye.value.filter((X) => !X.created).some((X) => X.currentLabel === a.inputValue);
    return e.filterable && e.allowCreate && a.inputValue !== "" && !P;
  }), ct = () => {
    e.filterable && He(e.filterMethod) || e.filterable && e.remote && He(e.remoteMethod) || ye.value.forEach((P) => {
      var X;
      (X = P.updateOption) == null || X.call(P, a.inputValue);
    });
  }, _t = fo(), dt = O(() => ["small"].includes(_t.value) ? "small" : "default"), ft = O({
    get() {
      return V.value && !Ue.value;
    },
    set(P) {
      V.value = P;
    }
  }), B = O(() => {
    if (e.multiple && !Ut(e.modelValue))
      return on(e.modelValue).length === 0 && !a.inputValue;
    const P = Wt(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Ut(P) ? !a.inputValue : !0;
  }), U = O(() => {
    var P;
    const X = (P = e.placeholder) != null ? P : n("el.select.placeholder");
    return e.multiple || !D.value ? X : a.selectedLabel;
  }), Ce = O(() => ms ? null : "mouseenter");
  ae(() => e.modelValue, (P, X) => {
    e.multiple && e.filterable && !e.reserveKeyword && (a.inputValue = "", b("")), A(), !bo(P, X) && e.validateEvent && J?.validate("change").catch((de) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ae(() => V.value, (P) => {
    P ? b(a.inputValue) : (a.inputValue = "", a.previousQuery = null, a.isBeforeHide = !0), t("visible-change", P);
  }), ae(() => a.options.entries(), () => {
    Ne && (A(), e.defaultFirstOption && (e.filterable || e.remote) && De.value && S());
  }, {
    flush: "post"
  }), ae([() => a.hoveringIndex, ye], ([P]) => {
    Oe(P) && P > -1 ? Z.value = ye.value[P] || {} : Z.value = {}, ye.value.forEach((X) => {
      X.hover = Z.value === X;
    });
  }), Ps(() => {
    a.isBeforeHide || ct();
  });
  const b = (P) => {
    a.previousQuery === P || C.value || (a.previousQuery = P, e.filterable && He(e.filterMethod) ? e.filterMethod(P) : e.filterable && e.remote && He(e.remoteMethod) && e.remoteMethod(P), e.defaultFirstOption && (e.filterable || e.remote) && De.value ? Ve(S) : Ve(fe));
  }, S = () => {
    const P = ye.value.filter((wt) => wt.visible && !wt.disabled && !wt.states.groupDisabled), X = P.find((wt) => wt.created), de = P[0], je = ye.value.map((wt) => wt.value);
    a.hoveringIndex = La(je, X || de);
  }, A = () => {
    if (e.multiple)
      a.selectedLabel = "";
    else {
      const X = Wt(e.modelValue) ? e.modelValue[0] : e.modelValue, de = q(X);
      a.selectedLabel = de.currentLabel, a.selected = [de];
      return;
    }
    const P = [];
    Ut(e.modelValue) || on(e.modelValue).forEach((X) => {
      P.push(q(X));
    }), a.selected = P;
  }, q = (P) => {
    let X;
    const de = Wd(P);
    for (let Un = a.cachedOptions.size - 1; Un >= 0; Un--) {
      const gn = ut.value[Un];
      if (de ? wn(gn.value, e.valueKey) === wn(P, e.valueKey) : gn.value === P) {
        X = {
          value: P,
          currentLabel: gn.currentLabel,
          get isDisabled() {
            return gn.isDisabled;
          }
        };
        break;
      }
    }
    if (X)
      return X;
    const je = de ? P.label : P ?? "";
    return {
      value: P,
      currentLabel: je
    };
  }, fe = () => {
    a.hoveringIndex = ye.value.findIndex((P) => a.selected.some((X) => Wo(X) === Wo(P)));
  }, ue = () => {
    a.selectionWidth = i.value.getBoundingClientRect().width;
  }, _ = () => {
    a.collapseItemWidth = y.value.getBoundingClientRect().width;
  }, F = () => {
    var P, X;
    (X = (P = u.value) == null ? void 0 : P.updatePopper) == null || X.call(P);
  }, ce = () => {
    var P, X;
    (X = (P = d.value) == null ? void 0 : P.updatePopper) == null || X.call(P);
  }, be = () => {
    a.inputValue.length > 0 && !V.value && (V.value = !0), b(a.inputValue);
  }, rt = (P) => {
    if (a.inputValue = P.target.value, e.remote)
      Pn();
    else
      return be();
  }, Pn = Nm(() => {
    be();
  }, Ye.value), It = (P) => {
    bo(e.modelValue, P) || t(Qn, P);
  }, Gr = (P) => Pm(P, (X) => {
    const de = a.cachedOptions.get(X);
    return de && !de.disabled && !de.states.groupDisabled;
  }), Oa = (P) => {
    if (e.multiple && P.code !== Le.delete && P.target.value.length <= 0) {
      const X = on(e.modelValue).slice(), de = Gr(X);
      if (de < 0)
        return;
      const je = X[de];
      X.splice(de, 1), t(tt, X), It(X), t("remove-tag", je);
    }
  }, Zc = (P, X) => {
    const de = a.selected.indexOf(X);
    if (de > -1 && !M.value) {
      const je = on(e.modelValue).slice();
      je.splice(de, 1), t(tt, je), It(je), t("remove-tag", X.value);
    }
    P.stopPropagation(), Ho();
  }, Ia = (P) => {
    P.stopPropagation();
    const X = e.multiple ? [] : Te.value;
    if (e.multiple)
      for (const de of a.selected)
        de.isDisabled && X.push(de.value);
    t(tt, X), It(X), a.hoveringIndex = -1, V.value = !1, t("clear"), Ho();
  }, ka = (P) => {
    var X;
    if (e.multiple) {
      const de = on((X = e.modelValue) != null ? X : []).slice(), je = La(de, P);
      je > -1 ? de.splice(je, 1) : (e.multipleLimit <= 0 || de.length < e.multipleLimit) && de.push(P.value), t(tt, de), It(de), P.created && b(""), e.filterable && !e.reserveKeyword && (a.inputValue = "");
    } else
      t(tt, P.value), It(P.value), V.value = !1;
    Ho(), !V.value && Ve(() => {
      zo(P);
    });
  }, La = (P = [], X) => Ut(X) ? -1 : kt(X.value) ? P.findIndex((de) => bo(wn(de, e.valueKey), Wo(X))) : P.indexOf(X.value), zo = (P) => {
    var X, de, je, wt, Un;
    const gn = Wt(P) ? P[0] : P;
    let Uo = null;
    if (gn?.value) {
      const po = ye.value.filter((md) => md.value === gn.value);
      po.length > 0 && (Uo = po[0].$el);
    }
    if (u.value && Uo) {
      const po = (wt = (je = (de = (X = u.value) == null ? void 0 : X.popperRef) == null ? void 0 : de.contentRef) == null ? void 0 : je.querySelector) == null ? void 0 : wt.call(je, `.${r.be("dropdown", "wrap")}`);
      po && Sg(po, Uo);
    }
    (Un = p.value) == null || Un.handleScroll();
  }, Qc = (P) => {
    a.options.set(P.value, P), a.cachedOptions.set(P.value, P);
  }, ed = (P, X) => {
    a.options.get(P) === X && a.options.delete(P);
  }, td = O(() => {
    var P, X;
    return (X = (P = u.value) == null ? void 0 : P.popperRef) == null ? void 0 : X.contentRef;
  }), nd = () => {
    a.isBeforeHide = !1, Ve(() => {
      var P;
      (P = p.value) == null || P.update(), zo(a.selected);
    });
  }, Ho = () => {
    var P;
    (P = f.value) == null || P.focus();
  }, od = () => {
    var P;
    if (V.value) {
      V.value = !1, Ve(() => {
        var X;
        return (X = f.value) == null ? void 0 : X.blur();
      });
      return;
    }
    (P = f.value) == null || P.blur();
  }, rd = (P) => {
    Ia(P);
  }, sd = (P) => {
    if (V.value = !1, E.value) {
      const X = new FocusEvent("focus", P);
      Ve(() => H(X));
    }
  }, ad = () => {
    a.inputValue.length > 0 ? a.inputValue = "" : V.value = !1;
  }, Aa = () => {
    M.value || (ms && (a.inputHovering = !0), a.menuVisibleOnFocus ? a.menuVisibleOnFocus = !1 : V.value = !V.value);
  }, ld = () => {
    if (!V.value)
      Aa();
    else {
      const P = ye.value[a.hoveringIndex];
      P && !P.isDisabled && ka(P);
    }
  }, Wo = (P) => kt(P.value) ? wn(P.value, e.valueKey) : P.value, id = O(() => ye.value.filter((P) => P.visible).every((P) => P.isDisabled)), ud = O(() => e.multiple ? e.collapseTags ? a.selected.slice(0, e.maxCollapseTags) : a.selected : []), cd = O(() => e.multiple ? e.collapseTags ? a.selected.slice(e.maxCollapseTags) : [] : []), Na = (P) => {
    if (!V.value) {
      V.value = !0;
      return;
    }
    if (!(a.options.size === 0 || De.value === 0 || C.value) && !id.value) {
      P === "next" ? (a.hoveringIndex++, a.hoveringIndex === a.options.size && (a.hoveringIndex = 0)) : P === "prev" && (a.hoveringIndex--, a.hoveringIndex < 0 && (a.hoveringIndex = a.options.size - 1));
      const X = ye.value[a.hoveringIndex];
      (X.isDisabled || !X.visible) && Na(P), Ve(() => zo(Z.value));
    }
  }, dd = () => {
    if (!i.value)
      return 0;
    const P = window.getComputedStyle(i.value);
    return Number.parseFloat(P.gap || "6px");
  }, fd = O(() => {
    const P = dd();
    return { maxWidth: `${y.value && e.maxCollapseTags === 1 ? a.selectionWidth - a.collapseItemWidth - P : a.selectionWidth}px` };
  }), pd = O(() => ({ maxWidth: `${a.selectionWidth}px` })), vd = (P) => {
    t("popup-scroll", P);
  };
  return Ht(i, ue), Ht(v, F), Ht(I, F), Ht(h, ce), Ht(y, _), Re(() => {
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
    hoverOption: Z,
    selectSize: _t,
    filteredOptionsCount: De,
    updateTooltip: F,
    updateTagTooltip: ce,
    debouncedOnInputChange: Pn,
    onInput: rt,
    deletePrevTag: Oa,
    deleteTag: Zc,
    deleteSelected: Ia,
    handleOptionSelect: ka,
    scrollToOption: zo,
    hasModelValue: D,
    shouldShowPlaceholder: B,
    currentPlaceholder: U,
    mouseEnterEventName: Ce,
    needStatusIcon: re,
    showClose: se,
    iconComponent: pe,
    iconReverse: Ae,
    validateState: Me,
    validateIcon: we,
    showNewOption: mt,
    updateOptions: ct,
    collapseTagSize: dt,
    setSelected: A,
    selectDisabled: M,
    emptyText: qe,
    handleCompositionStart: k,
    handleCompositionUpdate: w,
    handleCompositionEnd: T,
    onOptionCreate: Qc,
    onOptionDestroy: ed,
    handleMenuEnter: nd,
    focus: Ho,
    blur: od,
    handleClearClick: rd,
    handleClickOutside: sd,
    handleEsc: ad,
    toggleMenu: Aa,
    selectOption: ld,
    getValueKey: Wo,
    navigateOptions: Na,
    dropdownMenuVisible: ft,
    showTagList: ud,
    collapseTagList: cd,
    popupScroll: vd,
    tagStyle: fd,
    collapseTagStyle: pd,
    popperRef: td,
    inputRef: f,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: g,
    suffixRef: m,
    selectRef: l,
    wrapperRef: I,
    selectionRef: i,
    scrollbarRef: p,
    menuRef: v,
    tagMenuRef: h,
    collapseItemRef: y
  };
};
var J_ = Y({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ie(zr);
    let o = [];
    return () => {
      var r, s;
      const a = (r = t.default) == null ? void 0 : r.call(t), l = [];
      function i(u) {
        Wt(u) && u.forEach((d) => {
          var f, g, m, v;
          const h = (f = d?.type || {}) == null ? void 0 : f.name;
          h === "ElOptionGroup" ? i(!St(d.children) && !Wt(d.children) && He((g = d.children) == null ? void 0 : g.default) ? (m = d.children) == null ? void 0 : m.default() : d.children) : h === "ElOption" ? l.push((v = d.props) == null ? void 0 : v.value) : Wt(d.children) && i(d.children);
        });
      }
      return a.length && i((s = a[0]) == null ? void 0 : s.children), bo(l, o) || (o = l, n && (n.states.optionValues = l)), a;
    };
  }
});
const Z_ = me({
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
  size: Do,
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
  teleported: Ao.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: qt,
    default: Xs
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: qt,
    default: qs
  },
  tagType: { ...ws.type, default: "info" },
  tagEffect: { ...ws.effect, default: "light" },
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
    values: Br,
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
  ...du,
  ...co(["ariaLabel"])
}), Ql = "ElSelect", Q_ = Y({
  name: Ql,
  componentName: Ql,
  components: {
    ElSelectMenu: q_,
    ElOption: ya,
    ElOptions: J_,
    ElTag: Eb,
    ElScrollbar: Ou,
    ElTooltip: Zu,
    ElIcon: Ge
  },
  directives: { ClickOutside: Tb },
  props: Z_,
  emits: [
    tt,
    Qn,
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
      return Wt(i) ? u ? i : d : u ? d : i;
    }), o = Tn({
      ...Ds(e),
      modelValue: n
    }), r = X_(o, t), { calculatorRef: s, inputStyle: a } = W_();
    Ze(zr, Tn({
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
function e1(e, t, n, o, r, s) {
  const a = Pe("el-tag"), l = Pe("el-tooltip"), i = Pe("el-icon"), u = Pe("el-option"), d = Pe("el-options"), f = Pe("el-scrollbar"), g = Pe("el-select-menu"), m = Id("click-outside");
  return vt((L(), x("div", {
    ref: "selectRef",
    class: z([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [kd(e.mouseEnterEventName)]: (v) => e.states.inputHovering = !0,
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
      default: j(() => {
        var v;
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
            onClick: Fe(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (L(), x("div", {
              key: 0,
              ref: "prefixRef",
              class: z(e.nsSelect.e("prefix"))
            }, [
              Q(e.$slots, "prefix")
            ], 2)) : W("v-if", !0),
            N("div", {
              ref: "selectionRef",
              class: z([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? Q(e.$slots, "tag", { key: 0 }, () => [
                (L(!0), x(ke, null, _n(e.showTagList, (h) => (L(), x("div", {
                  key: e.getValueKey(h),
                  class: z(e.nsSelect.e("selected-item"))
                }, [
                  K(a, {
                    closable: !e.selectDisabled && !h.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Ke(e.tagStyle),
                    onClose: (y) => e.deleteTag(y, h)
                  }, {
                    default: j(() => [
                      N("span", {
                        class: z(e.nsSelect.e("tags-text"))
                      }, [
                        Q(e.$slots, "label", {
                          label: h.currentLabel,
                          value: h.value
                        }, () => [
                          ht(ee(h.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (L(), te(l, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: j(() => [
                    N("div", {
                      ref: "collapseItemRef",
                      class: z(e.nsSelect.e("selected-item"))
                    }, [
                      K(a, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Ke(e.collapseTagStyle)
                      }, {
                        default: j(() => [
                          N("span", {
                            class: z(e.nsSelect.e("tags-text"))
                          }, " + " + ee(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: j(() => [
                    N("div", {
                      ref: "tagMenuRef",
                      class: z(e.nsSelect.e("selection"))
                    }, [
                      (L(!0), x(ke, null, _n(e.collapseTagList, (h) => (L(), x("div", {
                        key: e.getValueKey(h),
                        class: z(e.nsSelect.e("selected-item"))
                      }, [
                        K(a, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !h.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (y) => e.deleteTag(y, h)
                        }, {
                          default: j(() => [
                            N("span", {
                              class: z(e.nsSelect.e("tags-text"))
                            }, [
                              Q(e.$slots, "label", {
                                label: h.currentLabel,
                                value: h.value
                              }, () => [
                                ht(ee(h.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : W("v-if", !0)
              ]) : W("v-if", !0),
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
                  "onUpdate:modelValue": (h) => e.states.inputValue = h,
                  type: "text",
                  name: e.name,
                  class: z([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Ke(e.inputStyle),
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
                    nn(Fe((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    nn(Fe((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    nn(Fe(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    nn(Fe(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    nn(Fe(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Fe(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Ld, e.states.inputValue]
                ]),
                e.filterable ? (L(), x("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: z(e.nsSelect.e("input-calculator")),
                  textContent: ee(e.states.inputValue)
                }, null, 10, ["textContent"])) : W("v-if", !0)
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
                  N("span", null, ee(e.currentPlaceholder), 1)
                ]) : (L(), x("span", { key: 1 }, ee(e.currentPlaceholder), 1))
              ], 2)) : W("v-if", !0)
            ], 2),
            N("div", {
              ref: "suffixRef",
              class: z(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (L(), te(i, {
                key: 0,
                class: z([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: j(() => [
                  (L(), te(pt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0),
              e.showClose && e.clearIcon ? (L(), te(i, {
                key: 1,
                class: z([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: j(() => [
                  (L(), te(pt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : W("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (L(), te(i, {
                key: 2,
                class: z([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: j(() => [
                  (L(), te(pt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : W("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: j(() => [
        K(g, { ref: "menuRef" }, {
          default: j(() => [
            e.$slots.header ? (L(), x("div", {
              key: 0,
              class: z(e.nsSelect.be("dropdown", "header")),
              onClick: Fe(() => {
              }, ["stop"])
            }, [
              Q(e.$slots, "header")
            ], 10, ["onClick"])) : W("v-if", !0),
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
              default: j(() => [
                e.showNewOption ? (L(), te(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : W("v-if", !0),
                K(d, null, {
                  default: j(() => [
                    Q(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Kt, e.states.options.size > 0 && !e.loading]
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
                N("span", null, ee(e.emptyText), 1)
              ])
            ], 2)) : W("v-if", !0),
            e.$slots.footer ? (L(), x("div", {
              key: 3,
              class: z(e.nsSelect.be("dropdown", "footer")),
              onClick: Fe(() => {
              }, ["stop"])
            }, [
              Q(e.$slots, "footer")
            ], 10, ["onClick"])) : W("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [m, e.handleClickOutside, e.popperRef]
  ]);
}
var t1 = /* @__PURE__ */ ve(Q_, [["render", e1], ["__file", "select.vue"]]);
const n1 = Y({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Ee("select"), n = R(null), o = Je(), r = R([]);
    Ze(vc, Tn({
      ...Ds(e)
    }));
    const s = O(() => r.value.some((u) => u.visible === !0)), a = (u) => {
      var d, f;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((f = u.component) != null && f.proxy);
    }, l = (u) => {
      const d = on(u), f = [];
      return d.forEach((g) => {
        var m, v;
        a(g) ? f.push(g.component.proxy) : (m = g.children) != null && m.length ? f.push(...l(g.children)) : (v = g.component) != null && v.subTree && f.push(...l(g.component.subTree));
      }), f;
    }, i = () => {
      r.value = l(o.subTree);
    };
    return Re(() => {
      i();
    }), ng(n, i, {
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
function o1(e, t, n, o, r, s) {
  return vt((L(), x("ul", {
    ref: "groupRef",
    class: z(e.ns.be("group", "wrap"))
  }, [
    N("li", {
      class: z(e.ns.be("group", "title"))
    }, ee(e.label), 3),
    N("li", null, [
      N("ul", {
        class: z(e.ns.b("group"))
      }, [
        Q(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Kt, e.visible]
  ]);
}
var mc = /* @__PURE__ */ ve(n1, [["render", o1], ["__file", "option-group.vue"]]);
const gc = Ot(t1, {
  Option: ya,
  OptionGroup: mc
}), hc = Bo(ya);
Bo(mc);
const yc = ["success", "info", "warning", "error"], st = _u({
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
}), r1 = me({
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
    type: qt,
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
    values: yc,
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
}), s1 = {
  destroy: () => !0
}, Ft = Ad([]), a1 = (e) => {
  const t = Ft.findIndex((r) => r.id === e), n = Ft[t];
  let o;
  return t > 0 && (o = Ft[t - 1]), { current: n, prev: o };
}, l1 = (e) => {
  const { prev: t } = a1(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, i1 = (e, t) => Ft.findIndex((o) => o.id === e) > 0 ? 16 : t, u1 = Y({
  name: "ElMessage"
}), c1 = /* @__PURE__ */ Y({
  ...u1,
  props: r1,
  emits: s1,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Zg, { ns: r, zIndex: s } = fu("message"), { currentZIndex: a, nextZIndex: l } = s, i = R(), u = R(!1), d = R(0);
    let f;
    const g = O(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), m = O(() => {
      const E = n.type;
      return { [r.bm("icon", E)]: E && br[E] };
    }), v = O(() => n.icon || br[n.type] || ""), h = O(() => l1(n.id)), y = O(() => i1(n.id, n.offset) + h.value), p = O(() => d.value + y.value), C = O(() => ({
      top: `${y.value}px`,
      zIndex: a.value
    }));
    function k() {
      n.duration !== 0 && ({ stop: f } = gr(() => {
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
    return Re(() => {
      k(), l(), u.value = !0;
    }), ae(() => n.repeatNum, () => {
      w(), k();
    }), Lt(document, "keydown", I), Ht(i, () => {
      d.value = i.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: p,
      close: T
    }), (E, H) => (L(), te(kn, {
      name: c(r).b("fade"),
      onBeforeLeave: E.onClose,
      onAfterLeave: (V) => E.$emit("destroy"),
      persisted: ""
    }, {
      default: j(() => [
        vt(N("div", {
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
          style: Ke(c(C)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: k
        }, [
          E.repeatNum > 1 ? (L(), te(c(Yy), {
            key: 0,
            value: E.repeatNum,
            type: c(g),
            class: z(c(r).e("badge"))
          }, null, 8, ["value", "type", "class"])) : W("v-if", !0),
          c(v) ? (L(), te(c(Ge), {
            key: 1,
            class: z([c(r).e("icon"), c(m)])
          }, {
            default: j(() => [
              (L(), te(pt(c(v))))
            ]),
            _: 1
          }, 8, ["class"])) : W("v-if", !0),
          Q(E.$slots, "default", {}, () => [
            E.dangerouslyUseHTMLString ? (L(), x(ke, { key: 1 }, [
              W(" Caution here, message could've been compromised, never use user's input as message "),
              N("p", {
                class: z(c(r).e("content")),
                innerHTML: E.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (L(), x("p", {
              key: 0,
              class: z(c(r).e("content"))
            }, ee(E.message), 3))
          ]),
          E.showClose ? (L(), te(c(Ge), {
            key: 2,
            class: z(c(r).e("closeBtn")),
            onClick: Fe(T, ["stop"])
          }, {
            default: j(() => [
              K(c(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : W("v-if", !0)
        ], 46, ["id"]), [
          [Kt, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var d1 = /* @__PURE__ */ ve(c1, [["__file", "message.vue"]]);
let f1 = 1;
const bc = (e) => {
  const t = !e || St(e) || Eo(e) || He(e) ? { message: e } : e, n = {
    ...st,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (St(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    Bt(o) || (o = document.body), n.appendTo = o;
  }
  return Io(Mt.grouping) && !n.grouping && (n.grouping = Mt.grouping), Oe(Mt.duration) && n.duration === 3e3 && (n.duration = Mt.duration), Oe(Mt.offset) && n.offset === 16 && (n.offset = Mt.offset), Io(Mt.showClose) && !n.showClose && (n.showClose = Mt.showClose), n;
}, p1 = (e) => {
  const t = Ft.indexOf(e);
  if (t === -1)
    return;
  Ft.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, v1 = ({ appendTo: e, ...t }, n) => {
  const o = `message_${f1++}`, r = t.onClose, s = document.createElement("div"), a = {
    ...t,
    id: o,
    onClose: () => {
      r?.(), p1(d);
    },
    onDestroy: () => {
      fr(null, s);
    }
  }, l = K(d1, a, He(a.message) || Eo(a.message) ? {
    default: He(a.message) ? a.message : () => a.message
  } : null);
  l.appContext = n || ro._context, fr(l, s), e.appendChild(s.firstElementChild);
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
}, ro = (e = {}, t) => {
  if (!Ne)
    return { close: () => {
    } };
  const n = bc(e);
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
  const o = v1(n, t);
  return Ft.push(o), o.handler;
};
yc.forEach((e) => {
  ro[e] = (t = {}, n) => {
    const o = bc(t);
    return ro({ ...o, type: e }, n);
  };
});
function m1(e) {
  for (const t of Ft)
    (!e || e === t.props.type) && t.handler.close();
}
ro.closeAll = m1;
ro._context = null;
const g1 = mu(ro, "$message"), _c = [
  "success",
  "info",
  "warning",
  "error"
], h1 = me({
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
    type: qt
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
    values: [..._c, ""],
    default: ""
  },
  zIndex: Number
}), y1 = {
  destroy: () => !0
}, b1 = Y({
  name: "ElNotification"
}), _1 = /* @__PURE__ */ Y({
  ...b1,
  props: h1,
  emits: y1,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: r } = fu("notification"), { nextZIndex: s, currentZIndex: a } = r, { Close: l } = hu, i = R(!1);
    let u;
    const d = O(() => {
      const k = n.type;
      return k && br[n.type] ? o.m(k) : "";
    }), f = O(() => n.type && br[n.type] || n.icon), g = O(() => n.position.endsWith("right") ? "right" : "left"), m = O(() => n.position.startsWith("top") ? "top" : "bottom"), v = O(() => {
      var k;
      return {
        [m.value]: `${n.offset}px`,
        zIndex: (k = n.zIndex) != null ? k : a.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: u } = gr(() => {
        i.value && p();
      }, n.duration));
    }
    function y() {
      u?.();
    }
    function p() {
      i.value = !1;
    }
    function C({ code: k }) {
      k === Le.delete || k === Le.backspace ? y() : k === Le.esc ? i.value && p() : h();
    }
    return Re(() => {
      h(), s(), i.value = !0;
    }), Lt(document, "keydown", C), t({
      visible: i,
      close: p
    }), (k, w) => (L(), te(kn, {
      name: c(o).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: (T) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: j(() => [
        vt(N("div", {
          id: k.id,
          class: z([c(o).b(), k.customClass, c(g)]),
          style: Ke(c(v)),
          role: "alert",
          onMouseenter: y,
          onMouseleave: h,
          onClick: k.onClick
        }, [
          c(f) ? (L(), te(c(Ge), {
            key: 0,
            class: z([c(o).e("icon"), c(d)])
          }, {
            default: j(() => [
              (L(), te(pt(c(f))))
            ]),
            _: 1
          }, 8, ["class"])) : W("v-if", !0),
          N("div", {
            class: z(c(o).e("group"))
          }, [
            N("h2", {
              class: z(c(o).e("title")),
              textContent: ee(k.title)
            }, null, 10, ["textContent"]),
            vt(N("div", {
              class: z(c(o).e("content")),
              style: Ke(k.title ? void 0 : { margin: 0 })
            }, [
              Q(k.$slots, "default", {}, () => [
                k.dangerouslyUseHTMLString ? (L(), x(ke, { key: 1 }, [
                  W(" Caution here, message could've been compromised, never use user's input as message "),
                  N("p", { innerHTML: k.message }, null, 8, ["innerHTML"])
                ], 2112)) : (L(), x("p", { key: 0 }, ee(k.message), 1))
              ])
            ], 6), [
              [Kt, k.message]
            ]),
            k.showClose ? (L(), te(c(Ge), {
              key: 0,
              class: z(c(o).e("closeBtn")),
              onClick: Fe(p, ["stop"])
            }, {
              default: j(() => [
                K(c(l))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : W("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Kt, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var w1 = /* @__PURE__ */ ve(_1, [["__file", "notification.vue"]]);
const Cr = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Cs = 16;
let C1 = 1;
const so = function(e = {}, t) {
  if (!Ne)
    return { close: () => {
    } };
  (St(e) || Eo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Cr[n].forEach(({ vm: d }) => {
    var f;
    o += (((f = d.el) == null ? void 0 : f.offsetHeight) || 0) + Cs;
  }), o += Cs;
  const r = `notification_${C1++}`, s = e.onClose, a = {
    ...e,
    offset: o,
    id: r,
    onClose: () => {
      S1(r, n, s);
    }
  };
  let l = document.body;
  Bt(e.appendTo) ? l = e.appendTo : St(e.appendTo) && (l = document.querySelector(e.appendTo)), Bt(l) || (l = document.body);
  const i = document.createElement("div"), u = K(w1, a, He(a.message) ? a.message : Eo(a.message) ? () => a.message : null);
  return u.appContext = Ut(t) ? so._context : t, u.props.onDestroy = () => {
    fr(null, i);
  }, fr(u, i), Cr[n].push({ vm: u }), l.appendChild(i.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
_c.forEach((e) => {
  so[e] = (t = {}, n) => ((St(t) || Eo(t)) && (t = {
    message: t
  }), so({ ...t, type: e }, n));
});
function S1(e, t, n) {
  const o = Cr[t], r = o.findIndex(({ vm: u }) => {
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
      const { el: d, component: f } = o[u].vm, g = Number.parseInt(d.style[l], 10) - a - Cs;
      f.props.offset = g;
    }
}
function E1() {
  for (const e of Object.values(Cr))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
so.closeAll = E1;
so._context = null;
const T1 = mu(so, "$notify");
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function O1(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const ei = typeof window < "u", Hn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), I1 = (e, t, n) => k1({ l: e, k: t, s: n }), k1 = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Xe = (e) => typeof e == "number" && isFinite(e), L1 = (e) => ba(e) === "[object Date]", Sr = (e) => ba(e) === "[object RegExp]", Hr = (e) => ge(e) && Object.keys(e).length === 0, ot = Object.assign, A1 = Object.create, Se = (e = null) => A1(e);
let ti;
const sr = () => ti || (ti = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Se());
function ni(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function oi(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function N1(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (o, r, s) => `${r}="${oi(s)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (o, r, s) => `${r}='${oi(s)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((o) => {
    e = e.replace(o, "$1javascript&#58;");
  }), e;
}
const P1 = Object.prototype.hasOwnProperty;
function Dt(e, t) {
  return P1.call(e, t);
}
const ze = Array.isArray, $e = (e) => typeof e == "function", ne = (e) => typeof e == "string", xe = (e) => typeof e == "boolean", he = (e) => e !== null && typeof e == "object", $1 = (e) => he(e) && $e(e.then) && $e(e.catch), wc = Object.prototype.toString, ba = (e) => wc.call(e), ge = (e) => ba(e) === "[object Object]", R1 = (e) => e == null ? "" : ze(e) || ge(e) && e.toString === wc ? JSON.stringify(e, null, 2) : String(e);
function _a(e, t = "") {
  return e.reduce((n, o, r) => r === 0 ? n + o : n + t + o, "");
}
const Qo = (e) => !he(e) || ze(e);
function ar(e, t) {
  if (Qo(e) || Qo(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: o, des: r } = n.pop();
    Object.keys(o).forEach((s) => {
      s !== "__proto__" && (he(o[s]) && !he(r[s]) && (r[s] = Array.isArray(o[s]) ? [] : Se()), Qo(r[s]) || Qo(o[s]) ? r[s] = o[s] : n.push({ src: o[s], des: r[s] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function M1(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ss(e, t, n) {
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
}, F1 = 17;
function Wr(e, t, n = {}) {
  const { domain: o, messages: r, args: s } = n, a = e, l = new SyntaxError(String(a));
  return l.code = e, t && (l.location = t), l.domain = o, l;
}
function D1(e) {
  throw e;
}
const xt = " ", B1 = "\r", at = `
`, V1 = "\u2028", x1 = "\u2029";
function z1(e) {
  const t = e;
  let n = 0, o = 1, r = 1, s = 0;
  const a = (E) => t[E] === B1 && t[E + 1] === at, l = (E) => t[E] === at, i = (E) => t[E] === x1, u = (E) => t[E] === V1, d = (E) => a(E) || l(E) || i(E) || u(E), f = () => n, g = () => o, m = () => r, v = () => s, h = (E) => a(E) || i(E) || u(E) ? at : t[E], y = () => h(n), p = () => h(n + s);
  function C() {
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
      C();
    s = 0;
  }
  return {
    index: f,
    line: g,
    column: m,
    peekOffset: v,
    charAt: h,
    currentChar: y,
    currentPeek: p,
    next: C,
    peek: k,
    reset: w,
    resetPeek: T,
    skipToPeek: I
  };
}
const Qt = void 0, H1 = ".", ri = "'", W1 = "tokenizer";
function U1(e, t = {}) {
  const n = t.location !== !1, o = z1(e), r = () => o.index(), s = () => M1(o.line(), o.column(), o.index()), a = s(), l = r(), i = {
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
  function f(b, S, A, ...q) {
    const fe = u();
    if (S.column += A, S.offset += A, d) {
      const ue = n ? Ss(fe.startLoc, S) : null, _ = Wr(b, ue, {
        domain: W1,
        args: q
      });
      d(_);
    }
  }
  function g(b, S, A) {
    b.endLoc = s(), b.currentType = S;
    const q = { type: S };
    return n && (q.loc = Ss(b.startLoc, b.endLoc)), A != null && (q.value = A), q;
  }
  const m = (b) => g(
    b,
    13
    /* TokenTypes.EOF */
  );
  function v(b, S) {
    return b.currentChar() === S ? (b.next(), S) : (f(_e.EXPECTED_TOKEN, s(), 0, S), "");
  }
  function h(b) {
    let S = "";
    for (; b.currentPeek() === xt || b.currentPeek() === at; )
      S += b.currentPeek(), b.peek();
    return S;
  }
  function y(b) {
    const S = h(b);
    return b.skipToPeek(), S;
  }
  function p(b) {
    if (b === Qt)
      return !1;
    const S = b.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S === 95;
  }
  function C(b) {
    if (b === Qt)
      return !1;
    const S = b.charCodeAt(0);
    return S >= 48 && S <= 57;
  }
  function k(b, S) {
    const { currentType: A } = S;
    if (A !== 2)
      return !1;
    h(b);
    const q = p(b.currentPeek());
    return b.resetPeek(), q;
  }
  function w(b, S) {
    const { currentType: A } = S;
    if (A !== 2)
      return !1;
    h(b);
    const q = b.currentPeek() === "-" ? b.peek() : b.currentPeek(), fe = C(q);
    return b.resetPeek(), fe;
  }
  function T(b, S) {
    const { currentType: A } = S;
    if (A !== 2)
      return !1;
    h(b);
    const q = b.currentPeek() === ri;
    return b.resetPeek(), q;
  }
  function I(b, S) {
    const { currentType: A } = S;
    if (A !== 7)
      return !1;
    h(b);
    const q = b.currentPeek() === ".";
    return b.resetPeek(), q;
  }
  function E(b, S) {
    const { currentType: A } = S;
    if (A !== 8)
      return !1;
    h(b);
    const q = p(b.currentPeek());
    return b.resetPeek(), q;
  }
  function H(b, S) {
    const { currentType: A } = S;
    if (!(A === 7 || A === 11))
      return !1;
    h(b);
    const q = b.currentPeek() === ":";
    return b.resetPeek(), q;
  }
  function V(b, S) {
    const { currentType: A } = S;
    if (A !== 9)
      return !1;
    const q = () => {
      const ue = b.currentPeek();
      return ue === "{" ? p(b.peek()) : ue === "@" || ue === "|" || ue === ":" || ue === "." || ue === xt || !ue ? !1 : ue === at ? (b.peek(), q()) : G(b, !1);
    }, fe = q();
    return b.resetPeek(), fe;
  }
  function Z(b) {
    h(b);
    const S = b.currentPeek() === "|";
    return b.resetPeek(), S;
  }
  function G(b, S = !0) {
    const A = (fe = !1, ue = "") => {
      const _ = b.currentPeek();
      return _ === "{" || _ === "@" || !_ ? fe : _ === "|" ? !(ue === xt || ue === at) : _ === xt ? (b.peek(), A(!0, xt)) : _ === at ? (b.peek(), A(!0, at)) : !0;
    }, q = A();
    return S && b.resetPeek(), q;
  }
  function J(b, S) {
    const A = b.currentChar();
    return A === Qt ? Qt : S(A) ? (b.next(), A) : null;
  }
  function le(b) {
    const S = b.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S >= 48 && S <= 57 || // 0-9
    S === 95 || // _
    S === 36;
  }
  function Te(b) {
    return J(b, le);
  }
  function $(b) {
    const S = b.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S >= 48 && S <= 57 || // 0-9
    S === 95 || // _
    S === 36 || // $
    S === 45;
  }
  function M(b) {
    return J(b, $);
  }
  function D(b) {
    const S = b.charCodeAt(0);
    return S >= 48 && S <= 57;
  }
  function re(b) {
    return J(b, D);
  }
  function se(b) {
    const S = b.charCodeAt(0);
    return S >= 48 && S <= 57 || // 0-9
    S >= 65 && S <= 70 || // A-F
    S >= 97 && S <= 102;
  }
  function pe(b) {
    return J(b, se);
  }
  function Ae(b) {
    let S = "", A = "";
    for (; S = re(b); )
      A += S;
    return A;
  }
  function Me(b) {
    let S = "";
    for (; ; ) {
      const A = b.currentChar();
      if (A === "{" || A === "}" || A === "@" || A === "|" || !A)
        break;
      if (A === xt || A === at)
        if (G(b))
          S += A, b.next();
        else {
          if (Z(b))
            break;
          S += A, b.next();
        }
      else
        S += A, b.next();
    }
    return S;
  }
  function we(b) {
    y(b);
    let S = "", A = "";
    for (; S = M(b); )
      A += S;
    const q = b.currentChar();
    if (q && q !== "}" && q !== Qt && q !== xt && q !== at && q !== "　") {
      const fe = mt(b);
      return f(_e.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, A + fe), A + fe;
    }
    return b.currentChar() === Qt && f(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), A;
  }
  function Ye(b) {
    y(b);
    let S = "";
    return b.currentChar() === "-" ? (b.next(), S += `-${Ae(b)}`) : S += Ae(b), b.currentChar() === Qt && f(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), S;
  }
  function Ue(b) {
    return b !== ri && b !== at;
  }
  function qe(b) {
    y(b), v(b, "'");
    let S = "", A = "";
    for (; S = J(b, Ue); )
      S === "\\" ? A += De(b) : A += S;
    const q = b.currentChar();
    return q === at || q === Qt ? (f(_e.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0), q === at && (b.next(), v(b, "'")), A) : (v(b, "'"), A);
  }
  function De(b) {
    const S = b.currentChar();
    switch (S) {
      case "\\":
      case "'":
        return b.next(), `\\${S}`;
      case "u":
        return ye(b, S, 4);
      case "U":
        return ye(b, S, 6);
      default:
        return f(_e.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, S), "";
    }
  }
  function ye(b, S, A) {
    v(b, S);
    let q = "";
    for (let fe = 0; fe < A; fe++) {
      const ue = pe(b);
      if (!ue) {
        f(_e.INVALID_UNICODE_ESCAPE_SEQUENCE, s(), 0, `\\${S}${q}${b.currentChar()}`);
        break;
      }
      q += ue;
    }
    return `\\${S}${q}`;
  }
  function ut(b) {
    return b !== "{" && b !== "}" && b !== xt && b !== at;
  }
  function mt(b) {
    y(b);
    let S = "", A = "";
    for (; S = J(b, ut); )
      A += S;
    return A;
  }
  function ct(b) {
    let S = "", A = "";
    for (; S = Te(b); )
      A += S;
    return A;
  }
  function _t(b) {
    const S = (A) => {
      const q = b.currentChar();
      return q === "{" || q === "@" || q === "|" || q === "(" || q === ")" || !q || q === xt ? A : (A += q, b.next(), S(A));
    };
    return S("");
  }
  function dt(b) {
    y(b);
    const S = v(
      b,
      "|"
      /* TokenChars.Pipe */
    );
    return y(b), S;
  }
  function ft(b, S) {
    let A = null;
    switch (b.currentChar()) {
      case "{":
        return S.braceNest >= 1 && f(_e.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0), b.next(), A = g(
          S,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), y(b), S.braceNest++, A;
      case "}":
        return S.braceNest > 0 && S.currentType === 2 && f(_e.EMPTY_PLACEHOLDER, s(), 0), b.next(), A = g(
          S,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), S.braceNest--, S.braceNest > 0 && y(b), S.inLinked && S.braceNest === 0 && (S.inLinked = !1), A;
      case "@":
        return S.braceNest > 0 && f(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), A = B(b, S) || m(S), S.braceNest = 0, A;
      default: {
        let fe = !0, ue = !0, _ = !0;
        if (Z(b))
          return S.braceNest > 0 && f(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), A = g(S, 1, dt(b)), S.braceNest = 0, S.inLinked = !1, A;
        if (S.braceNest > 0 && (S.currentType === 4 || S.currentType === 5 || S.currentType === 6))
          return f(_e.UNTERMINATED_CLOSING_BRACE, s(), 0), S.braceNest = 0, U(b, S);
        if (fe = k(b, S))
          return A = g(S, 4, we(b)), y(b), A;
        if (ue = w(b, S))
          return A = g(S, 5, Ye(b)), y(b), A;
        if (_ = T(b, S))
          return A = g(S, 6, qe(b)), y(b), A;
        if (!fe && !ue && !_)
          return A = g(S, 12, mt(b)), f(_e.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, A.value), y(b), A;
        break;
      }
    }
    return A;
  }
  function B(b, S) {
    const { currentType: A } = S;
    let q = null;
    const fe = b.currentChar();
    switch ((A === 7 || A === 8 || A === 11 || A === 9) && (fe === at || fe === xt) && f(_e.INVALID_LINKED_FORMAT, s(), 0), fe) {
      case "@":
        return b.next(), q = g(
          S,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), S.inLinked = !0, q;
      case ".":
        return y(b), b.next(), g(
          S,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return y(b), b.next(), g(
          S,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return Z(b) ? (q = g(S, 1, dt(b)), S.braceNest = 0, S.inLinked = !1, q) : I(b, S) || H(b, S) ? (y(b), B(b, S)) : E(b, S) ? (y(b), g(S, 11, ct(b))) : V(b, S) ? (y(b), fe === "{" ? ft(b, S) || q : g(S, 10, _t(b))) : (A === 7 && f(_e.INVALID_LINKED_FORMAT, s(), 0), S.braceNest = 0, S.inLinked = !1, U(b, S));
    }
  }
  function U(b, S) {
    let A = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (S.braceNest > 0)
      return ft(b, S) || m(S);
    if (S.inLinked)
      return B(b, S) || m(S);
    switch (b.currentChar()) {
      case "{":
        return ft(b, S) || m(S);
      case "}":
        return f(_e.UNBALANCED_CLOSING_BRACE, s(), 0), b.next(), g(
          S,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return B(b, S) || m(S);
      default: {
        if (Z(b))
          return A = g(S, 1, dt(b)), S.braceNest = 0, S.inLinked = !1, A;
        if (G(b))
          return g(S, 0, Me(b));
        break;
      }
    }
    return A;
  }
  function Ce() {
    const { currentType: b, offset: S, startLoc: A, endLoc: q } = i;
    return i.lastType = b, i.lastOffset = S, i.lastStartLoc = A, i.lastEndLoc = q, i.offset = r(), i.startLoc = s(), o.currentChar() === Qt ? g(
      i,
      13
      /* TokenTypes.EOF */
    ) : U(o, i);
  }
  return {
    nextToken: Ce,
    currentOffset: r,
    currentPosition: s,
    context: u
  };
}
const j1 = "parser", G1 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function K1(e, t, n) {
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
function Y1(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function o(p, C, k, w, ...T) {
    const I = p.currentPosition();
    if (I.offset += w, I.column += w, n) {
      const E = t ? Ss(k, I) : null, H = Wr(C, E, {
        domain: j1,
        args: T
      });
      n(H);
    }
  }
  function r(p, C, k) {
    const w = { type: p };
    return t && (w.start = C, w.end = C, w.loc = { start: k, end: k }), w;
  }
  function s(p, C, k, w) {
    t && (p.end = C, p.loc && (p.loc.end = k));
  }
  function a(p, C) {
    const k = p.context(), w = r(3, k.offset, k.startLoc);
    return w.value = C, s(w, p.currentOffset(), p.currentPosition()), w;
  }
  function l(p, C) {
    const k = p.context(), { lastOffset: w, lastStartLoc: T } = k, I = r(5, w, T);
    return I.index = parseInt(C, 10), p.nextToken(), s(I, p.currentOffset(), p.currentPosition()), I;
  }
  function i(p, C) {
    const k = p.context(), { lastOffset: w, lastStartLoc: T } = k, I = r(4, w, T);
    return I.key = C, p.nextToken(), s(I, p.currentOffset(), p.currentPosition()), I;
  }
  function u(p, C) {
    const k = p.context(), { lastOffset: w, lastStartLoc: T } = k, I = r(9, w, T);
    return I.value = C.replace(G1, K1), p.nextToken(), s(I, p.currentOffset(), p.currentPosition()), I;
  }
  function d(p) {
    const C = p.nextToken(), k = p.context(), { lastOffset: w, lastStartLoc: T } = k, I = r(8, w, T);
    return C.type !== 11 ? (o(p, _e.UNEXPECTED_EMPTY_LINKED_MODIFIER, k.lastStartLoc, 0), I.value = "", s(I, w, T), {
      nextConsumeToken: C,
      node: I
    }) : (C.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, zt(C)), I.value = C.value || "", s(I, p.currentOffset(), p.currentPosition()), {
      node: I
    });
  }
  function f(p, C) {
    const k = p.context(), w = r(7, k.offset, k.startLoc);
    return w.value = C, s(w, p.currentOffset(), p.currentPosition()), w;
  }
  function g(p) {
    const C = p.context(), k = r(6, C.offset, C.startLoc);
    let w = p.nextToken();
    if (w.type === 8) {
      const T = d(p);
      k.modifier = T.node, w = T.nextConsumeToken || p.nextToken();
    }
    switch (w.type !== 9 && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, zt(w)), w = p.nextToken(), w.type === 2 && (w = p.nextToken()), w.type) {
      case 10:
        w.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, zt(w)), k.key = f(p, w.value || "");
        break;
      case 4:
        w.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, zt(w)), k.key = i(p, w.value || "");
        break;
      case 5:
        w.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, zt(w)), k.key = l(p, w.value || "");
        break;
      case 6:
        w.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, zt(w)), k.key = u(p, w.value || "");
        break;
      default: {
        o(p, _e.UNEXPECTED_EMPTY_LINKED_KEY, C.lastStartLoc, 0);
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
  function m(p) {
    const C = p.context(), k = C.currentType === 1 ? p.currentOffset() : C.offset, w = C.currentType === 1 ? C.endLoc : C.startLoc, T = r(2, k, w);
    T.items = [];
    let I = null;
    do {
      const V = I || p.nextToken();
      switch (I = null, V.type) {
        case 0:
          V.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, zt(V)), T.items.push(a(p, V.value || ""));
          break;
        case 5:
          V.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, zt(V)), T.items.push(l(p, V.value || ""));
          break;
        case 4:
          V.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, zt(V)), T.items.push(i(p, V.value || ""));
          break;
        case 6:
          V.value == null && o(p, _e.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, zt(V)), T.items.push(u(p, V.value || ""));
          break;
        case 7: {
          const Z = g(p);
          T.items.push(Z.node), I = Z.nextConsumeToken || null;
          break;
        }
      }
    } while (C.currentType !== 13 && C.currentType !== 1);
    const E = C.currentType === 1 ? C.lastOffset : p.currentOffset(), H = C.currentType === 1 ? C.lastEndLoc : p.currentPosition();
    return s(T, E, H), T;
  }
  function v(p, C, k, w) {
    const T = p.context();
    let I = w.items.length === 0;
    const E = r(1, C, k);
    E.cases = [], E.cases.push(w);
    do {
      const H = m(p);
      I || (I = H.items.length === 0), E.cases.push(H);
    } while (T.currentType !== 13);
    return I && o(p, _e.MUST_HAVE_MESSAGES_IN_PLURAL, k, 0), s(E, p.currentOffset(), p.currentPosition()), E;
  }
  function h(p) {
    const C = p.context(), { offset: k, startLoc: w } = C, T = m(p);
    return C.currentType === 13 ? T : v(p, k, w, T);
  }
  function y(p) {
    const C = U1(p, ot({}, e)), k = C.context(), w = r(0, k.offset, k.startLoc);
    return t && w.loc && (w.loc.source = p), w.body = h(C), e.onCacheKey && (w.cacheKey = e.onCacheKey(p)), k.currentType !== 13 && o(C, _e.UNEXPECTED_LEXICAL_ANALYSIS, k.lastStartLoc, 0, p[k.offset] || ""), s(w, C.currentOffset(), C.currentPosition()), w;
  }
  return { parse: y };
}
function zt(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function q1(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (s) => (n.helpers.add(s), s) };
}
function si(e, t) {
  for (let n = 0; n < e.length; n++)
    wa(e[n], t);
}
function wa(e, t) {
  switch (e.type) {
    case 1:
      si(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      si(e.items, t);
      break;
    case 6: {
      wa(e.key, t), t.helper(
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
function X1(e, t = {}) {
  const n = q1(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && wa(e.body, n);
  const o = n.context();
  e.helpers = Array.from(o.helpers);
}
function J1(e) {
  const t = e.body;
  return t.type === 2 ? ai(t) : t.cases.forEach((n) => ai(n)), e;
}
function ai(e) {
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
      e.static = _a(t);
      for (let n = 0; n < e.items.length; n++) {
        const o = e.items[n];
        (o.type === 3 || o.type === 9) && delete o.value;
      }
    }
  }
}
function qn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      qn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let o = 0; o < n.length; o++)
        qn(n[o]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let o = 0; o < n.length; o++)
        qn(n[o]);
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
      qn(t.key), t.k = t.key, delete t.key, t.modifier && (qn(t.modifier), t.m = t.modifier, delete t.modifier);
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
function Z1(e, t) {
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
  function i(h, y) {
    a.code += h;
  }
  function u(h, y = !0) {
    const p = y ? o : "";
    i(r ? p + "  ".repeat(h) : p);
  }
  function d(h = !0) {
    const y = ++a.indentLevel;
    h && u(y);
  }
  function f(h = !0) {
    const y = --a.indentLevel;
    h && u(y);
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
    helper: (h) => `_${h}`,
    needIndent: () => a.needIndent
  };
}
function Q1(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ao(e, t.key), t.modifier ? (e.push(", "), ao(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ew(e, t) {
  const { helper: n, needIndent: o } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(o());
  const r = t.items.length;
  for (let s = 0; s < r && (ao(e, t.items[s]), s !== r - 1); s++)
    e.push(", ");
  e.deindent(o()), e.push("])");
}
function tw(e, t) {
  const { helper: n, needIndent: o } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(o());
    const r = t.cases.length;
    for (let s = 0; s < r && (ao(e, t.cases[s]), s !== r - 1); s++)
      e.push(", ");
    e.deindent(o()), e.push("])");
  }
}
function nw(e, t) {
  t.body ? ao(e, t.body) : e.push("null");
}
function ao(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      nw(e, t);
      break;
    case 1:
      tw(e, t);
      break;
    case 2:
      ew(e, t);
      break;
    case 6:
      Q1(e, t);
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
const ow = (e, t = {}) => {
  const n = ne(t.mode) ? t.mode : "normal", o = ne(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const r = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", a = e.helpers || [], l = Z1(e, {
    filename: o,
    breakLineCode: r,
    needIndent: s
  });
  l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), l.indent(s), a.length > 0 && (l.push(`const { ${_a(a.map((d) => `${d}: _${d}`), ", ")} } = ctx`), l.newline()), l.push("return "), ao(l, e), l.deindent(s), l.push("}"), delete e.helpers;
  const { code: i, map: u } = l.context();
  return {
    ast: e,
    code: i,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function rw(e, t = {}) {
  const n = ot({}, t), o = !!n.jit, r = !!n.minify, s = n.optimize == null ? !0 : n.optimize, l = Y1(n).parse(e);
  return o ? (s && J1(l), r && qn(l), { ast: l, code: "" }) : (X1(l, n), ow(l, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function sw() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (sr().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Gt(e) {
  return he(e) && Ca(e) === 0 && (Dt(e, "b") || Dt(e, "body"));
}
const Cc = ["b", "body"];
function aw(e) {
  return An(e, Cc);
}
const Sc = ["c", "cases"];
function lw(e) {
  return An(e, Sc, []);
}
const Ec = ["s", "static"];
function iw(e) {
  return An(e, Ec);
}
const Tc = ["i", "items"];
function uw(e) {
  return An(e, Tc, []);
}
const Oc = ["t", "type"];
function Ca(e) {
  return An(e, Oc);
}
const Ic = ["v", "value"];
function er(e, t) {
  const n = An(e, Ic);
  if (n != null)
    return n;
  throw No(t);
}
const kc = ["m", "modifier"];
function cw(e) {
  return An(e, kc);
}
const Lc = ["k", "key"];
function dw(e) {
  const t = An(e, Lc);
  if (t)
    return t;
  throw No(
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
const Ac = [
  ...Cc,
  ...Sc,
  ...Ec,
  ...Tc,
  ...Lc,
  ...kc,
  ...Ic,
  ...Oc
];
function No(e) {
  return new Error(`unhandled node type: ${e}`);
}
function os(e) {
  return (n) => fw(n, e);
}
function fw(e, t) {
  const n = aw(t);
  if (n == null)
    throw No(
      0
      /* NodeTypes.Resource */
    );
  if (Ca(n) === 1) {
    const s = lw(n);
    return e.plural(s.reduce((a, l) => [
      ...a,
      li(e, l)
    ], []));
  } else
    return li(e, n);
}
function li(e, t) {
  const n = iw(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const o = uw(t).reduce((r, s) => [...r, Es(e, s)], []);
    return e.normalize(o);
  }
}
function Es(e, t) {
  const n = Ca(t);
  switch (n) {
    case 3:
      return er(t, n);
    case 9:
      return er(t, n);
    case 4: {
      const o = t;
      if (Dt(o, "k") && o.k)
        return e.interpolate(e.named(o.k));
      if (Dt(o, "key") && o.key)
        return e.interpolate(e.named(o.key));
      throw No(n);
    }
    case 5: {
      const o = t;
      if (Dt(o, "i") && Xe(o.i))
        return e.interpolate(e.list(o.i));
      if (Dt(o, "index") && Xe(o.index))
        return e.interpolate(e.list(o.index));
      throw No(n);
    }
    case 6: {
      const o = t, r = cw(o), s = dw(o);
      return e.linked(Es(e, s), r ? Es(e, r) : void 0, e.type);
    }
    case 7:
      return er(t, n);
    case 8:
      return er(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const pw = (e) => e;
let tr = Se();
function vw(e, t = {}) {
  let n = !1;
  const o = t.onError || D1;
  return t.onError = (r) => {
    n = !0, o(r);
  }, { ...rw(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function mw(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ne(e)) {
    xe(t.warnHtmlMessage) && t.warnHtmlMessage;
    const o = (t.onCacheKey || pw)(e), r = tr[o];
    if (r)
      return r;
    const { ast: s, detectError: a } = vw(e, {
      ...t,
      location: !1,
      jit: !0
    }), l = os(s);
    return a ? l : tr[o] = l;
  } else {
    const n = e.cacheKey;
    if (n) {
      const o = tr[n];
      return o || (tr[n] = os(e));
    } else
      return os(e);
  }
}
const an = {
  INVALID_ARGUMENT: F1,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, gw = 24;
function ln(e) {
  return Wr(e, null, void 0);
}
function Sa(e, t) {
  return t.locale != null ? ii(t.locale) : ii(e.locale);
}
let rs;
function ii(e) {
  if (ne(e))
    return e;
  if ($e(e)) {
    if (e.resolvedOnce && rs != null)
      return rs;
    if (e.constructor.name === "Function") {
      const t = e();
      if ($1(t))
        throw ln(an.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return rs = t;
    } else
      throw ln(an.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw ln(an.NOT_SUPPORT_LOCALE_TYPE);
}
function hw(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...ze(t) ? t : he(t) ? Object.keys(t) : ne(t) ? [t] : [n]
  ])];
}
function Nc(e, t, n) {
  const o = ne(n) ? n : Er, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let s = r.__localeChainCache.get(o);
  if (!s) {
    s = [];
    let a = [n];
    for (; ze(a); )
      a = ui(s, a, t);
    const l = ze(t) || !ge(t) ? t : t.default ? t.default : null;
    a = ne(l) ? [l] : l, ze(a) && ui(s, a, !1), r.__localeChainCache.set(o, s);
  }
  return s;
}
function ui(e, t, n) {
  let o = !0;
  for (let r = 0; r < t.length && xe(o); r++) {
    const s = t[r];
    ne(s) && (o = yw(e, t[r], n));
  }
  return o;
}
function yw(e, t, n) {
  let o;
  const r = t.split("-");
  do {
    const s = r.join("-");
    o = bw(e, s, n), r.splice(-1, 1);
  } while (r.length && o === !0);
  return o;
}
function bw(e, t, n) {
  let o = !1;
  if (!e.includes(t) && (o = !0, t)) {
    o = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), (ze(n) || ge(n)) && n[r] && (o = n[r]);
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
const _w = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function ww(e) {
  return _w.test(e);
}
function Cw(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Sw(e) {
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
function Ew(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : ww(t) ? Cw(t) : "*" + t;
}
function Tw(e) {
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
      if (r = 0, a === void 0 || (a = Ew(a), a === !1))
        return !1;
      g[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function m() {
    const v = e[n + 1];
    if (o === 5 && v === "'" || o === 6 && v === '"')
      return n++, l = "\\" + v, g[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; o !== null; )
    if (n++, s = e[n], !(s === "\\" && m())) {
      if (i = Sw(s), f = Nn[o], u = f[i] || f.l || 8, u === 8 || (o = u[0], u[1] !== void 0 && (d = g[u[1]], d && (l = s, d() === !1))))
        return;
      if (o === 7)
        return t;
    }
}
const ci = /* @__PURE__ */ new Map();
function Ow(e, t) {
  return he(e) ? e[t] : null;
}
function Iw(e, t) {
  if (!he(e))
    return null;
  let n = ci.get(t);
  if (n || (n = Tw(t), n && ci.set(t, n)), !n)
    return null;
  const o = n.length;
  let r = e, s = 0;
  for (; s < o; ) {
    const a = n[s];
    if (Ac.includes(a) && Gt(r))
      return null;
    const l = r[a];
    if (l === void 0 || $e(r))
      return null;
    r = l, s++;
  }
  return r;
}
const kw = "11.2.2", Ur = -1, Er = "en-US", di = "", fi = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Lw() {
  return {
    upper: (e, t) => t === "text" && ne(e) ? e.toUpperCase() : t === "vnode" && he(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ne(e) ? e.toLowerCase() : t === "vnode" && he(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ne(e) ? fi(e) : t === "vnode" && he(e) && "__v_isVNode" in e ? fi(e.children) : e
  };
}
let Pc;
function Aw(e) {
  Pc = e;
}
let $c;
function Nw(e) {
  $c = e;
}
let Rc;
function Pw(e) {
  Rc = e;
}
let Mc = null;
const pi = (e) => {
  Mc = e;
}, $w = () => Mc;
let vi = 0;
function Rw(e = {}) {
  const t = $e(e.onWarn) ? e.onWarn : O1, n = ne(e.version) ? e.version : kw, o = ne(e.locale) || $e(e.locale) ? e.locale : Er, r = $e(o) ? Er : o, s = ze(e.fallbackLocale) || ge(e.fallbackLocale) || ne(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : r, a = ge(e.messages) ? e.messages : ss(r), l = ge(e.datetimeFormats) ? e.datetimeFormats : ss(r), i = ge(e.numberFormats) ? e.numberFormats : ss(r), u = ot(Se(), e.modifiers, Lw()), d = e.pluralRules || Se(), f = $e(e.missing) ? e.missing : null, g = xe(e.missingWarn) || Sr(e.missingWarn) ? e.missingWarn : !0, m = xe(e.fallbackWarn) || Sr(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, h = !!e.unresolving, y = $e(e.postTranslation) ? e.postTranslation : null, p = ge(e.processor) ? e.processor : null, C = xe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, k = !!e.escapeParameter, w = $e(e.messageCompiler) ? e.messageCompiler : Pc, T = $e(e.messageResolver) ? e.messageResolver : $c || Ow, I = $e(e.localeFallbacker) ? e.localeFallbacker : Rc || hw, E = he(e.fallbackContext) ? e.fallbackContext : void 0, H = e, V = he(H.__datetimeFormatters) ? H.__datetimeFormatters : /* @__PURE__ */ new Map(), Z = he(H.__numberFormatters) ? H.__numberFormatters : /* @__PURE__ */ new Map(), G = he(H.__meta) ? H.__meta : {};
  vi++;
  const J = {
    version: n,
    cid: vi,
    locale: o,
    fallbackLocale: s,
    messages: a,
    modifiers: u,
    pluralRules: d,
    missing: f,
    missingWarn: g,
    fallbackWarn: m,
    fallbackFormat: v,
    unresolving: h,
    postTranslation: y,
    processor: p,
    warnHtmlMessage: C,
    escapeParameter: k,
    messageCompiler: w,
    messageResolver: T,
    localeFallbacker: I,
    fallbackContext: E,
    onWarn: t,
    __meta: G
  };
  return J.datetimeFormats = l, J.numberFormats = i, J.__datetimeFormatters = V, J.__numberFormatters = Z, J;
}
const ss = (e) => ({ [e]: Se() });
function Ea(e, t, n, o, r) {
  const { missing: s, onWarn: a } = e;
  if (s !== null) {
    const l = s(e, n, t, r);
    return ne(l) ? l : t;
  } else
    return t;
}
function go(e, t, n) {
  const o = e;
  o.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Mw(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Fw(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let o = n + 1; o < t.length; o++)
    if (Mw(e, t[o]))
      return !0;
  return !1;
}
function mi(e, ...t) {
  const { datetimeFormats: n, unresolving: o, fallbackLocale: r, onWarn: s, localeFallbacker: a } = e, { __datetimeFormatters: l } = e, [i, u, d, f] = Ts(...t), g = xe(d.missingWarn) ? d.missingWarn : e.missingWarn;
  xe(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const m = !!d.part, v = Sa(e, d), h = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    v
  );
  if (!ne(i) || i === "")
    return new Intl.DateTimeFormat(v, f).format(u);
  let y = {}, p, C = null;
  const k = "datetime format";
  for (let I = 0; I < h.length && (p = h[I], y = n[p] || {}, C = y[i], !ge(C)); I++)
    Ea(e, i, p, g, k);
  if (!ge(C) || !ne(p))
    return o ? Ur : i;
  let w = `${p}__${i}`;
  Hr(f) || (w = `${w}__${JSON.stringify(f)}`);
  let T = l.get(w);
  return T || (T = new Intl.DateTimeFormat(p, ot({}, C, f)), l.set(w, T)), m ? T.formatToParts(u) : T.format(u);
}
const Fc = [
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
function Ts(...e) {
  const [t, n, o, r] = e, s = Se();
  let a = Se(), l;
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
  } else if (L1(t)) {
    if (isNaN(t.getTime()))
      throw ln(an.INVALID_DATE_ARGUMENT);
    l = t;
  } else if (Xe(t))
    l = t;
  else
    throw ln(an.INVALID_ARGUMENT);
  return ne(n) ? s.key = n : ge(n) && Object.keys(n).forEach((i) => {
    Fc.includes(i) ? a[i] = n[i] : s[i] = n[i];
  }), ne(o) ? s.locale = o : ge(o) && (a = o), ge(r) && (a = r), [s.key || "", l, s, a];
}
function gi(e, t, n) {
  const o = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    o.__datetimeFormatters.has(s) && o.__datetimeFormatters.delete(s);
  }
}
function hi(e, ...t) {
  const { numberFormats: n, unresolving: o, fallbackLocale: r, onWarn: s, localeFallbacker: a } = e, { __numberFormatters: l } = e, [i, u, d, f] = Os(...t), g = xe(d.missingWarn) ? d.missingWarn : e.missingWarn;
  xe(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const m = !!d.part, v = Sa(e, d), h = a(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    r,
    v
  );
  if (!ne(i) || i === "")
    return new Intl.NumberFormat(v, f).format(u);
  let y = {}, p, C = null;
  const k = "number format";
  for (let I = 0; I < h.length && (p = h[I], y = n[p] || {}, C = y[i], !ge(C)); I++)
    Ea(e, i, p, g, k);
  if (!ge(C) || !ne(p))
    return o ? Ur : i;
  let w = `${p}__${i}`;
  Hr(f) || (w = `${w}__${JSON.stringify(f)}`);
  let T = l.get(w);
  return T || (T = new Intl.NumberFormat(p, ot({}, C, f)), l.set(w, T)), m ? T.formatToParts(u) : T.format(u);
}
const Dc = [
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
function Os(...e) {
  const [t, n, o, r] = e, s = Se();
  let a = Se();
  if (!Xe(t))
    throw ln(an.INVALID_ARGUMENT);
  const l = t;
  return ne(n) ? s.key = n : ge(n) && Object.keys(n).forEach((i) => {
    Dc.includes(i) ? a[i] = n[i] : s[i] = n[i];
  }), ne(o) ? s.locale = o : ge(o) && (a = o), ge(r) && (a = r), [s.key || "", l, s, a];
}
function yi(e, t, n) {
  const o = e;
  for (const r in n) {
    const s = `${t}__${r}`;
    o.__numberFormatters.has(s) && o.__numberFormatters.delete(s);
  }
}
const Dw = (e) => e, Bw = (e) => "", Vw = "text", xw = (e) => e.length === 0 ? "" : _a(e), zw = R1;
function bi(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Hw(e) {
  const t = Xe(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Xe(e.named.count) || Xe(e.named.n)) ? Xe(e.named.count) ? e.named.count : Xe(e.named.n) ? e.named.n : t : t;
}
function Ww(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Uw(e = {}) {
  const t = e.locale, n = Hw(e), o = he(e.pluralRules) && ne(t) && $e(e.pluralRules[t]) ? e.pluralRules[t] : bi, r = he(e.pluralRules) && ne(t) && $e(e.pluralRules[t]) ? bi : void 0, s = (p) => p[o(n, p.length, r)], a = e.list || [], l = (p) => a[p], i = e.named || Se();
  Xe(e.pluralIndex) && Ww(n, i);
  const u = (p) => i[p];
  function d(p, C) {
    const k = $e(e.messages) ? e.messages(p, !!C) : he(e.messages) ? e.messages[p] : !1;
    return k || (e.parent ? e.parent.message(p) : Bw);
  }
  const f = (p) => e.modifiers ? e.modifiers[p] : Dw, g = ge(e.processor) && $e(e.processor.normalize) ? e.processor.normalize : xw, m = ge(e.processor) && $e(e.processor.interpolate) ? e.processor.interpolate : zw, v = ge(e.processor) && ne(e.processor.type) ? e.processor.type : Vw, y = {
    list: l,
    named: u,
    plural: s,
    linked: (p, ...C) => {
      const [k, w] = C;
      let T = "text", I = "";
      C.length === 1 ? he(k) ? (I = k.modifier || I, T = k.type || T) : ne(k) && (I = k || I) : C.length === 2 && (ne(k) && (I = k || I), ne(w) && (T = w || T));
      const E = d(p, !0)(y), H = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        T === "vnode" && ze(E) && I ? E[0] : E
      );
      return I ? f(I)(H, T) : H;
    },
    message: d,
    type: v,
    interpolate: m,
    normalize: g,
    values: ot(Se(), a, i)
  };
  return y;
}
const _i = () => "", dn = (e) => $e(e);
function wi(e, ...t) {
  const { fallbackFormat: n, postTranslation: o, unresolving: r, messageCompiler: s, fallbackLocale: a, messages: l } = e, [i, u] = Is(...t), d = xe(u.missingWarn) ? u.missingWarn : e.missingWarn, f = xe(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, g = xe(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, m = !!u.resolvedMessage, v = ne(u.default) || xe(u.default) ? xe(u.default) ? s ? i : () => i : u.default : n ? s ? i : () => i : null, h = n || v != null && (ne(v) || $e(v)), y = Sa(e, u);
  g && jw(u);
  let [p, C, k] = m ? [
    i,
    y,
    l[y] || Se()
  ] : Bc(e, i, y, a, f, d), w = p, T = i;
  if (!m && !(ne(w) || Gt(w) || dn(w)) && h && (w = v, T = w), !m && (!(ne(w) || Gt(w) || dn(w)) || !ne(C)))
    return r ? Ur : i;
  let I = !1;
  const E = () => {
    I = !0;
  }, H = dn(w) ? w : Vc(e, i, C, w, T, E);
  if (I)
    return w;
  const V = Yw(e, C, k, u), Z = Uw(V), G = Gw(e, H, Z);
  let J = o ? o(G, i) : G;
  return g && ne(J) && (J = N1(J)), J;
}
function jw(e) {
  ze(e.list) ? e.list = e.list.map((t) => ne(t) ? ni(t) : t) : he(e.named) && Object.keys(e.named).forEach((t) => {
    ne(e.named[t]) && (e.named[t] = ni(e.named[t]));
  });
}
function Bc(e, t, n, o, r, s) {
  const { messages: a, onWarn: l, messageResolver: i, localeFallbacker: u } = e, d = u(e, o, n);
  let f = Se(), g, m = null;
  const v = "translate";
  for (let h = 0; h < d.length && (g = d[h], f = a[g] || Se(), (m = i(f, t)) === null && (m = f[t]), !(ne(m) || Gt(m) || dn(m))); h++)
    if (!Fw(g, d)) {
      const y = Ea(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        g,
        s,
        v
      );
      y !== t && (m = y);
    }
  return [m, g, f];
}
function Vc(e, t, n, o, r, s) {
  const { messageCompiler: a, warnHtmlMessage: l } = e;
  if (dn(o)) {
    const u = o;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (a == null) {
    const u = () => o;
    return u.locale = n, u.key = t, u;
  }
  const i = a(o, Kw(e, n, r, o, l, s));
  return i.locale = n, i.key = t, i.source = o, i;
}
function Gw(e, t, n) {
  return t(n);
}
function Is(...e) {
  const [t, n, o] = e, r = Se();
  if (!ne(t) && !Xe(t) && !dn(t) && !Gt(t))
    throw ln(an.INVALID_ARGUMENT);
  const s = Xe(t) ? String(t) : (dn(t), t);
  return Xe(n) ? r.plural = n : ne(n) ? r.default = n : ge(n) && !Hr(n) ? r.named = n : ze(n) && (r.list = n), Xe(o) ? r.plural = o : ne(o) ? r.default = o : ge(o) && ot(r, o), [s, r];
}
function Kw(e, t, n, o, r, s) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: r,
    onError: (a) => {
      throw s && s(a), a;
    },
    onCacheKey: (a) => I1(t, n, a)
  };
}
function Yw(e, t, n, o) {
  const { modifiers: r, pluralRules: s, messageResolver: a, fallbackLocale: l, fallbackWarn: i, missingWarn: u, fallbackContext: d } = e, g = {
    locale: t,
    modifiers: r,
    pluralRules: s,
    messages: (m, v) => {
      let h = a(n, m);
      if (h == null && (d || v)) {
        const [, , y] = Bc(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          m,
          t,
          l,
          i,
          u
        );
        h = a(y, m);
      }
      if (ne(h) || Gt(h)) {
        let y = !1;
        const C = Vc(e, m, t, h, m, () => {
          y = !0;
        });
        return y ? _i : C;
      } else return dn(h) ? h : _i;
    }
  };
  return e.processor && (g.processor = e.processor), o.list && (g.list = o.list), o.named && (g.named = o.named), Xe(o.plural) && (g.pluralIndex = o.plural), g;
}
sw();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const qw = "11.2.2";
function Xw() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (sr().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (sr().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (sr().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const lo = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: gw,
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
  return Wr(e, null, void 0);
}
const ks = /* @__PURE__ */ Hn("__translateVNode"), Ls = /* @__PURE__ */ Hn("__datetimeParts"), As = /* @__PURE__ */ Hn("__numberParts"), Jw = Hn("__setPluralRules"), xc = /* @__PURE__ */ Hn("__injectWithOption"), Ns = /* @__PURE__ */ Hn("__dispose");
function $o(e) {
  if (!he(e) || Gt(e))
    return e;
  for (const t in e)
    if (Dt(e, t))
      if (!t.includes("."))
        he(e[t]) && $o(e[t]);
      else {
        const n = t.split("."), o = n.length - 1;
        let r = e, s = !1;
        for (let a = 0; a < o; a++) {
          if (n[a] === "__proto__")
            throw new Error(`unsafe key: ${n[a]}`);
          if (n[a] in r || (r[n[a]] = Se()), !he(r[n[a]])) {
            s = !0;
            break;
          }
          r = r[n[a]];
        }
        if (s || (Gt(r) ? Ac.includes(n[o]) || delete e[t] : (r[n[o]] = e[t], delete e[t])), !Gt(r)) {
          const a = r[n[o]];
          he(a) && $o(a);
        }
      }
  return e;
}
function zc(e, t) {
  const { messages: n, __i18n: o, messageResolver: r, flatJson: s } = t, a = ge(n) ? n : ze(o) ? Se() : { [e]: Se() };
  if (ze(o) && o.forEach((l) => {
    if ("locale" in l && "resource" in l) {
      const { locale: i, resource: u } = l;
      i ? (a[i] = a[i] || Se(), ar(u, a[i])) : ar(u, a);
    } else
      ne(l) && ar(JSON.parse(l), a);
  }), r == null && s)
    for (const l in a)
      Dt(a, l) && $o(a[l]);
  return a;
}
function Zw(e) {
  return e.type;
}
function Qw(e, t, n) {
  let o = he(t.messages) ? t.messages : Se();
  "__i18nGlobal" in n && (o = zc(e.locale.value, {
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
function Ci(e) {
  return K(Ms, null, e, 0);
}
function Hc() {
  return "currentInstance" in Kr ? Kr["currentInstance"] : Kr.getCurrentInstance();
}
const Si = () => [], e2 = () => !1;
let Ei = 0;
function Ti(e) {
  return (t, n, o, r) => e(n, o, Hc() || void 0, r);
}
function t2(e = {}) {
  const { __root: t, __injectWithOption: n } = e, o = t === void 0, r = e.flatJson, s = ei ? R : Sn;
  let a = xe(e.inheritLocale) ? e.inheritLocale : !0;
  const l = s(
    // prettier-ignore
    t && a ? t.locale.value : ne(e.locale) ? e.locale : Er
  ), i = s(
    // prettier-ignore
    t && a ? t.fallbackLocale.value : ne(e.fallbackLocale) || ze(e.fallbackLocale) || ge(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : l.value
  ), u = s(zc(l.value, e)), d = s(ge(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }), f = s(ge(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let g = t ? t.missingWarn : xe(e.missingWarn) || Sr(e.missingWarn) ? e.missingWarn : !0, m = t ? t.fallbackWarn : xe(e.fallbackWarn) || Sr(e.fallbackWarn) ? e.fallbackWarn : !0, v = t ? t.fallbackRoot : xe(e.fallbackRoot) ? e.fallbackRoot : !0, h = !!e.fallbackFormat, y = $e(e.missing) ? e.missing : null, p = $e(e.missing) ? Ti(e.missing) : null, C = $e(e.postTranslation) ? e.postTranslation : null, k = t ? t.warnHtmlMessage : xe(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, w = !!e.escapeParameter;
  const T = t ? t.modifiers : ge(e.modifiers) ? e.modifiers : {};
  let I = e.pluralRules || t && t.pluralRules, E;
  E = (() => {
    o && pi(null);
    const _ = {
      version: qw,
      locale: l.value,
      fallbackLocale: i.value,
      messages: u.value,
      modifiers: T,
      pluralRules: I,
      missing: p === null ? void 0 : p,
      missingWarn: g,
      fallbackWarn: m,
      fallbackFormat: h,
      unresolving: !0,
      postTranslation: C === null ? void 0 : C,
      warnHtmlMessage: k,
      escapeParameter: w,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    _.datetimeFormats = d.value, _.numberFormats = f.value, _.__datetimeFormatters = ge(E) ? E.__datetimeFormatters : void 0, _.__numberFormatters = ge(E) ? E.__numberFormatters : void 0;
    const F = Rw(_);
    return o && pi(F), F;
  })(), go(E, l.value, i.value);
  function V() {
    return [
      l.value,
      i.value,
      u.value,
      d.value,
      f.value
    ];
  }
  const Z = O({
    get: () => l.value,
    set: (_) => {
      E.locale = _, l.value = _;
    }
  }), G = O({
    get: () => i.value,
    set: (_) => {
      E.fallbackLocale = _, i.value = _, go(E, l.value, _);
    }
  }), J = O(() => u.value), le = /* @__PURE__ */ O(() => d.value), Te = /* @__PURE__ */ O(() => f.value);
  function $() {
    return $e(C) ? C : null;
  }
  function M(_) {
    C = _, E.postTranslation = _;
  }
  function D() {
    return y;
  }
  function re(_) {
    _ !== null && (p = Ti(_)), y = _, E.missing = p;
  }
  const se = (_, F, ce, be, rt, Pn) => {
    V();
    let It;
    try {
      o || (E.fallbackContext = t ? $w() : void 0), It = _(E);
    } finally {
      o || (E.fallbackContext = void 0);
    }
    if (ce !== "translate exists" && // for not `te` (e.g `t`)
    Xe(It) && It === Ur || ce === "translate exists" && !It) {
      const [Gr, Oa] = F();
      return t && v ? be(t) : rt(Gr);
    } else {
      if (Pn(It))
        return It;
      throw Po(lo.UNEXPECTED_RETURN_TYPE);
    }
  };
  function pe(..._) {
    return se((F) => Reflect.apply(wi, null, [F, ..._]), () => Is(..._), "translate", (F) => Reflect.apply(F.t, F, [..._]), (F) => F, (F) => ne(F));
  }
  function Ae(..._) {
    const [F, ce, be] = _;
    if (be && !he(be))
      throw Po(lo.INVALID_ARGUMENT);
    return pe(F, ce, ot({ resolvedMessage: !0 }, be || {}));
  }
  function Me(..._) {
    return se((F) => Reflect.apply(mi, null, [F, ..._]), () => Ts(..._), "datetime format", (F) => Reflect.apply(F.d, F, [..._]), () => di, (F) => ne(F) || ze(F));
  }
  function we(..._) {
    return se((F) => Reflect.apply(hi, null, [F, ..._]), () => Os(..._), "number format", (F) => Reflect.apply(F.n, F, [..._]), () => di, (F) => ne(F) || ze(F));
  }
  function Ye(_) {
    return _.map((F) => ne(F) || Xe(F) || xe(F) ? Ci(String(F)) : F);
  }
  const qe = {
    normalize: Ye,
    interpolate: (_) => _,
    type: "vnode"
  };
  function De(..._) {
    return se((F) => {
      let ce;
      const be = F;
      try {
        be.processor = qe, ce = Reflect.apply(wi, null, [be, ..._]);
      } finally {
        be.processor = null;
      }
      return ce;
    }, () => Is(..._), "translate", (F) => F[ks](..._), (F) => [Ci(F)], (F) => ze(F));
  }
  function ye(..._) {
    return se((F) => Reflect.apply(hi, null, [F, ..._]), () => Os(..._), "number format", (F) => F[As](..._), Si, (F) => ne(F) || ze(F));
  }
  function ut(..._) {
    return se((F) => Reflect.apply(mi, null, [F, ..._]), () => Ts(..._), "datetime format", (F) => F[Ls](..._), Si, (F) => ne(F) || ze(F));
  }
  function mt(_) {
    I = _, E.pluralRules = I;
  }
  function ct(_, F) {
    return se(() => {
      if (!_)
        return !1;
      const ce = ne(F) ? F : l.value, be = ft(ce), rt = E.messageResolver(be, _);
      return Gt(rt) || dn(rt) || ne(rt);
    }, () => [_], "translate exists", (ce) => Reflect.apply(ce.te, ce, [_, F]), e2, (ce) => xe(ce));
  }
  function _t(_) {
    let F = null;
    const ce = Nc(E, i.value, l.value);
    for (let be = 0; be < ce.length; be++) {
      const rt = u.value[ce[be]] || {}, Pn = E.messageResolver(rt, _);
      if (Pn != null) {
        F = Pn;
        break;
      }
    }
    return F;
  }
  function dt(_) {
    const F = _t(_);
    return F ?? (t ? t.tm(_) || {} : {});
  }
  function ft(_) {
    return u.value[_] || {};
  }
  function B(_, F) {
    if (r) {
      const ce = { [_]: F };
      for (const be in ce)
        Dt(ce, be) && $o(ce[be]);
      F = ce[_];
    }
    u.value[_] = F, E.messages = u.value;
  }
  function U(_, F) {
    u.value[_] = u.value[_] || {};
    const ce = { [_]: F };
    if (r)
      for (const be in ce)
        Dt(ce, be) && $o(ce[be]);
    F = ce[_], ar(F, u.value[_]), E.messages = u.value;
  }
  function Ce(_) {
    return d.value[_] || {};
  }
  function b(_, F) {
    d.value[_] = F, E.datetimeFormats = d.value, gi(E, _, F);
  }
  function S(_, F) {
    d.value[_] = ot(d.value[_] || {}, F), E.datetimeFormats = d.value, gi(E, _, F);
  }
  function A(_) {
    return f.value[_] || {};
  }
  function q(_, F) {
    f.value[_] = F, E.numberFormats = f.value, yi(E, _, F);
  }
  function fe(_, F) {
    f.value[_] = ot(f.value[_] || {}, F), E.numberFormats = f.value, yi(E, _, F);
  }
  Ei++, t && ei && (ae(t.locale, (_) => {
    a && (l.value = _, E.locale = _, go(E, l.value, i.value));
  }), ae(t.fallbackLocale, (_) => {
    a && (i.value = _, E.fallbackLocale = _, go(E, l.value, i.value));
  }));
  const ue = {
    id: Ei,
    locale: Z,
    fallbackLocale: G,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(_) {
      a = _, _ && t && (l.value = t.locale.value, i.value = t.fallbackLocale.value, go(E, l.value, i.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: J,
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
    set missingWarn(_) {
      g = _, E.missingWarn = g;
    },
    get fallbackWarn() {
      return m;
    },
    set fallbackWarn(_) {
      m = _, E.fallbackWarn = m;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(_) {
      v = _;
    },
    get fallbackFormat() {
      return h;
    },
    set fallbackFormat(_) {
      h = _, E.fallbackFormat = h;
    },
    get warnHtmlMessage() {
      return k;
    },
    set warnHtmlMessage(_) {
      k = _, E.warnHtmlMessage = _;
    },
    get escapeParameter() {
      return w;
    },
    set escapeParameter(_) {
      w = _, E.escapeParameter = _;
    },
    t: pe,
    getLocaleMessage: ft,
    setLocaleMessage: B,
    mergeLocaleMessage: U,
    getPostTranslationHandler: $,
    setPostTranslationHandler: M,
    getMissingHandler: D,
    setMissingHandler: re,
    [Jw]: mt
  };
  return ue.datetimeFormats = le, ue.numberFormats = Te, ue.rt = Ae, ue.te = ct, ue.tm = dt, ue.d = Me, ue.n = we, ue.getDateTimeFormat = Ce, ue.setDateTimeFormat = b, ue.mergeDateTimeFormat = S, ue.getNumberFormat = A, ue.setNumberFormat = q, ue.mergeNumberFormat = fe, ue[xc] = n, ue[ks] = De, ue[Ls] = ut, ue[As] = ye, ue;
}
const Ta = {
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
function n2({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((o, r) => [
    ...o,
    // prettier-ignore
    ...r.type === ke ? r.children : [r]
  ], []) : t.reduce((n, o) => {
    const r = e[o];
    return r && (n[o] = r()), n;
  }, Se());
}
function Wc() {
  return ke;
}
ot({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Xe(e) || !isNaN(e)
  }
}, Ta);
function o2(e) {
  return ze(e) && !ne(e[0]);
}
function Uc(e, t, n, o) {
  const { slots: r, attrs: s } = t;
  return () => {
    const a = { part: !0 };
    let l = Se();
    e.locale && (a.locale = e.locale), ne(e.format) ? a.key = e.format : he(e.format) && (ne(e.format.key) && (a.key = e.format.key), l = Object.keys(e.format).reduce((g, m) => n.includes(m) ? ot(Se(), g, { [m]: e.format[m] }) : g, Se()));
    const i = o(e.value, a, l);
    let u = [a.key];
    ze(i) ? u = i.map((g, m) => {
      const v = r[g.type], h = v ? v({ [g.type]: g.value, index: m, parts: i }) : [g.value];
      return o2(h) && (h[0].key = `${g.type}-${m}`), h;
    }) : ne(i) && (u = [i]);
    const d = ot(Se(), s), f = ne(e.tag) || he(e.tag) ? e.tag : Wc();
    return Fs(f, d, u);
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
}, Ta);
const r2 = /* @__PURE__ */ Hn("global-vue-i18n");
function jr(e = {}) {
  const t = Hc();
  if (t == null)
    throw Po(lo.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Po(lo.NOT_INSTALLED);
  const n = s2(t), o = l2(n), r = Zw(t), s = a2(e, r);
  if (s === "global")
    return Qw(o, e, r), o;
  if (s === "parent") {
    let i = i2(n, t, e.__useComponent);
    return i == null && (i = o), i;
  }
  const a = n;
  let l = a.__getInstance(t);
  if (l == null) {
    const i = ot({}, e);
    "__i18n" in r && (i.__i18n = r.__i18n), o && (i.__root = o), l = t2(i), a.__composerExtend && (l[Ns] = a.__composerExtend(l)), c2(a, t, l), a.__setInstance(t, l);
  }
  return l;
}
function s2(e) {
  const t = ie(e.isCE ? r2 : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Po(e.isCE ? lo.NOT_INSTALLED_WITH_PROVIDE : lo.UNEXPECTED_ERROR);
  return t;
}
function a2(e, t) {
  return Hr(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function l2(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function i2(e, t, n = !1) {
  let o = null;
  const r = t.root;
  let s = u2(t, n);
  for (; s != null; ) {
    const a = e;
    if (e.mode === "composition")
      o = a.__getInstance(s);
    else if (__VUE_I18N_LEGACY_API__) {
      const l = a.__getInstance(s);
      l != null && (o = l.__composer, n && o && !o[xc] && (o = null));
    }
    if (o != null || r === s)
      break;
    s = s.parent;
  }
  return o;
}
function u2(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function c2(e, t, n) {
  Re(() => {
  }, t), $s(() => {
    const o = n;
    e.__deleteInstance(t);
    const r = o[Ns];
    r && (r(), delete o[Ns]);
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
}, Ta);
Xw();
Aw(mw);
Nw(Iw);
Pw(Nc);
const d2 = ["disabled"], f2 = {
  key: 0,
  class: "custom-button__loading"
}, p2 = /* @__PURE__ */ Y({
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
      e.loading ? (L(), x("div", f2, o[1] || (o[1] = [
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
      ]))) : W("v-if", !0),
      Q(n.$slots, "default", {}, void 0, !0)
    ], 10, d2));
  }
}), Wn = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Co = /* @__PURE__ */ Wn(p2, [["__scopeId", "data-v-9497085f"]]), v2 = /* @__PURE__ */ Y({
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
          ee(e.modelValue ? e.activeText : e.inactiveText),
          3
          /* TEXT, CLASS */
        )) : W("v-if", !0),
        a[0] || (a[0] = N(
          "div",
          { class: "custom-switch__core" },
          [
            N("div", { class: "custom-switch__handle" })
          ],
          -1
          /* HOISTED */
        ))
      ],
      2
      /* CLASS */
    ));
  }
}), as = /* @__PURE__ */ Wn(v2, [["__scopeId", "data-v-09573d1e"]]), m2 = { class: "dialog-footer-default" }, g2 = { class: "footer-left" }, h2 = { class: "footer-right" }, y2 = /* @__PURE__ */ Y({
  __name: "CommonDialog",
  props: {
    modelValue: { type: Boolean, default: !1 },
    title: { default: "" },
    width: { default: "540px" },
    closeOnClickModal: { type: Boolean, default: !1 },
    draggable: { type: Boolean, default: !0 },
    center: { type: Boolean, default: !1 },
    showClose: { type: Boolean, default: !0 },
    showDefaultFooter: { type: Boolean, default: !1 },
    confirmText: { default: "确定" },
    cancelText: { default: "取消" },
    loading: { type: Boolean, default: !1 },
    customClass: { default: "" }
  },
  emits: ["update:modelValue", "confirm", "cancel", "close"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, s = R(o.modelValue);
    ae(
      () => o.modelValue,
      (u) => {
        s.value = u;
      }
    ), ae(s, (u) => {
      r("update:modelValue", u);
    });
    const a = () => {
      r("close");
    }, l = () => {
      r("confirm");
    }, i = () => {
      s.value = !1, r("cancel");
    };
    return t({
      open: () => {
        s.value = !0;
      },
      close: () => {
        s.value = !1;
      }
    }), (u, d) => {
      const f = pa, g = Gb;
      return L(), te(g, {
        modelValue: c(s),
        "onUpdate:modelValue": d[0] || (d[0] = (m) => rn(s) ? s.value = m : null),
        title: u.title,
        width: u.width,
        "close-on-click-modal": u.closeOnClickModal,
        draggable: u.draggable,
        center: u.center,
        "show-close": u.showClose,
        "custom-class": u.customClass,
        onClose: a
      }, Or({
        default: j(() => [
          Q(u.$slots, "default", {}, void 0, !0)
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        u.$slots.header ? {
          name: "header",
          fn: j(() => [
            Q(u.$slots, "header", {}, void 0, !0)
          ]),
          key: "0"
        } : void 0,
        u.$slots.footer || u.showDefaultFooter ? {
          name: "footer",
          fn: j(() => [
            Q(u.$slots, "footer", {}, () => [
              N("div", m2, [
                N("div", g2, [
                  Q(u.$slots, "footer-left", {}, void 0, !0)
                ]),
                N("div", h2, [
                  K(f, { onClick: i }, {
                    default: j(() => [
                      ht(
                        ee(u.cancelText),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  K(f, {
                    type: "primary",
                    loading: u.loading,
                    onClick: l
                  }, {
                    default: j(() => [
                      ht(
                        ee(u.confirmText),
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
      ]), 1032, ["modelValue", "title", "width", "close-on-click-modal", "draggable", "center", "show-close", "custom-class"]);
    };
  }
}), b2 = /* @__PURE__ */ Wn(y2, [["__scopeId", "data-v-b43b7f03"]]), _2 = { class: "select-confirm-content" }, w2 = { class: "mb-4" }, C2 = { class: "select-confirm-footer" }, S2 = /* @__PURE__ */ Y({
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
    const o = e, r = n, s = R(o.modelValue), a = R(o.defaultValue);
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
      const f = hc, g = gc;
      return L(), te(b2, {
        modelValue: c(s),
        "onUpdate:modelValue": d[1] || (d[1] = (m) => rn(s) ? s.value = m : null),
        title: u.title,
        width: u.width,
        center: u.center,
        "show-close": u.showClose
      }, {
        footer: j(() => [
          N("div", C2, [
            K(Co, {
              type: "default",
              onClick: i
            }, {
              default: j(() => [
                ht(
                  ee(u.cancelText),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            K(Co, {
              type: "primary",
              loading: u.loading,
              onClick: l
            }, {
              default: j(() => [
                ht(
                  ee(u.confirmText),
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
          N("div", _2, [
            N(
              "div",
              w2,
              ee(u.message),
              1
              /* TEXT */
            ),
            K(g, {
              modelValue: c(a),
              "onUpdate:modelValue": d[0] || (d[0] = (m) => rn(a) ? a.value = m : null),
              class: "w-full",
              placeholder: u.selectPlaceholder
            }, {
              default: j(() => [
                (L(!0), x(
                  ke,
                  null,
                  _n(u.options, (m) => (L(), te(f, {
                    key: m.value,
                    label: m.label,
                    value: m.value
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
}), E2 = /* @__PURE__ */ Wn(S2, [["__scopeId", "data-v-bd31799c"]]), Qe = {
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
    o === "center" ? g1({
      message: t,
      type: n,
      duration: r,
      showClose: s,
      grouping: !0
    }) : T1({
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
};
function T2(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function it(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Oi;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Oi || (Oi = {}));
async function O2(e, t) {
  await it("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function lr(e, t, n) {
  var o;
  const r = (o = void 0) !== null && o !== void 0 ? o : { kind: "Any" };
  return it("plugin:event|listen", {
    event: e,
    target: r,
    handler: T2(t)
  }).then((s) => async () => O2(e, s));
}
const et = {
  info: (e, t, ...n) => {
    it("frontend_log", {
      level: "info",
      message: e,
      data: t === void 0 ? null : ls(t)
    }).catch(() => {
    });
  },
  error: (e, t) => {
    it("frontend_log", {
      level: "error",
      message: e,
      data: t === void 0 ? null : ls(t)
    }).catch(() => {
    });
  },
  warn: (e, t) => {
    it("frontend_log", {
      level: "warn",
      message: e,
      data: t === void 0 ? null : ls(t)
    }).catch(() => {
    });
  },
  // 调试日志 - 只在开发模式或调试模式下输出
  debug: (e, t) => {
  }
};
function ls(e) {
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
const I2 = { class: "confirm-header" }, k2 = { class: "header-title" }, L2 = { class: "confirm-body" }, A2 = { class: "message-text" }, N2 = {
  key: 0,
  class: "hint-list"
}, P2 = { class: "confirm-footer" }, $2 = /* @__PURE__ */ Y({
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
    const o = e, r = n, s = R(o.modelValue), a = O(() => {
      switch (o.type) {
        case "warning":
          return "⚠";
        case "danger":
          return "!";
        default:
          return "?";
      }
    }), l = O(() => `icon-${o.type}`), i = O(() => {
      const m = o.message || "", v = m.split(`
`).filter(Boolean), h = [];
      for (const y of v) {
        const p = y.trim();
        if (/^[•·\-]\s*/.test(p)) break;
        p && h.push(y);
      }
      return h.join(`
`) || v[0] || m;
    }), u = O(() => {
      const v = (o.message || "").split(`
`).filter(Boolean), h = [];
      for (const y of v) {
        const C = y.trim().match(/^[•·\-]\s*(.+)$/);
        C && h.push(C[1].trim());
      }
      return h;
    });
    ae(
      () => o.modelValue,
      (m) => {
        s.value = m;
      }
    ), ae(s, (m) => {
      r("update:modelValue", m);
    });
    function d() {
      s.value = !1, r("primary");
    }
    function f() {
      s.value = !1, r("secondary");
    }
    function g() {
      s.value = !1, r("close");
    }
    return t({
      open: () => {
        s.value = !0;
      },
      close: () => {
        s.value = !1;
      }
    }), (m, v) => (L(), te(Fi, { to: "body" }, [
      K(kn, { name: "confirm-fade" }, {
        default: j(() => [
          c(s) ? (L(), x("div", {
            key: 0,
            class: "confirm-overlay",
            onClick: Fe(g, ["self"])
          }, [
            N(
              "div",
              {
                class: z(["confirm-dialog", [`type-${m.type}`]])
              },
              [
                W(" 顶栏 "),
                N("div", I2, [
                  N("div", k2, [
                    N(
                      "span",
                      {
                        class: z(["header-icon", c(l)])
                      },
                      ee(c(a)),
                      3
                      /* TEXT, CLASS */
                    ),
                    N(
                      "span",
                      null,
                      ee(m.title),
                      1
                      /* TEXT */
                    )
                  ]),
                  N("button", {
                    class: "header-close",
                    onClick: g,
                    title: "×"
                  }, v[0] || (v[0] = [
                    N(
                      "span",
                      null,
                      "×",
                      -1
                      /* HOISTED */
                    )
                  ]))
                ]),
                W(" 内容区 "),
                N("div", L2, [
                  N(
                    "div",
                    A2,
                    ee(c(i)),
                    1
                    /* TEXT */
                  ),
                  c(u).length ? (L(), x("div", N2, [
                    (L(!0), x(
                      ke,
                      null,
                      _n(c(u), (h, y) => (L(), x("div", {
                        key: y,
                        class: "hint-item"
                      }, [
                        v[1] || (v[1] = N(
                          "span",
                          { class: "hint-dot" },
                          null,
                          -1
                          /* HOISTED */
                        )),
                        N(
                          "span",
                          null,
                          ee(h),
                          1
                          /* TEXT */
                        )
                      ]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])) : W("v-if", !0)
                ]),
                W(" 底栏 "),
                N("div", P2, [
                  m.secondaryText ? (L(), x(
                    "button",
                    {
                      key: 0,
                      class: "footer-btn secondary",
                      onClick: f
                    },
                    ee(m.secondaryText),
                    1
                    /* TEXT */
                  )) : W("v-if", !0),
                  N(
                    "button",
                    {
                      class: z(["footer-btn primary", { danger: m.type === "danger" }]),
                      onClick: d
                    },
                    ee(m.primaryText),
                    3
                    /* TEXT, CLASS */
                  )
                ])
              ],
              2
              /* CLASS */
            )
          ])) : W("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
}), is = /* @__PURE__ */ Wn($2, [["__scopeId", "data-v-e42cf928"]]);
async function jc() {
  try {
    return await it("get_git_settings_command");
  } catch (e) {
    throw new Error(`获取 Git 设置失败: ${e}`);
  }
}
async function R2(e) {
  try {
    await it("update_git_settings_command", { settings: e });
  } catch (t) {
    throw new Error(`更新 Git 设置失败: ${t}`);
  }
}
async function Gc() {
  try {
    return await it("get_git_status_command");
  } catch (e) {
    throw new Error(`获取 Git 状态失败: ${e}`);
  }
}
async function M2(e = 10) {
  try {
    return await it("get_git_records_command", { limit: e });
  } catch (t) {
    throw new Error(`获取 Git 记录失败: ${t}`);
  }
}
async function F2(e, t) {
  try {
    await it("restore_git_record_file_command", { commitHash: e, filePath: t });
  } catch (n) {
    throw new Error(`恢复 Git 记录文件失败: ${n}`);
  }
}
async function Ii() {
  try {
    return await it("git_pull_command");
  } catch (e) {
    throw new Error(`Git pull 失败: ${e}`);
  }
}
async function ki(e) {
  try {
    await it("switch_git_branch_command", { branch: e });
  } catch (t) {
    throw new Error(`切换 Git 分支失败: ${t}`);
  }
}
async function D2(e) {
  try {
    await it("remove_untracked_file_command", { filePath: e });
  } catch (t) {
    throw new Error(`删除未跟踪文件失败: ${t}`);
  }
}
async function B2(e) {
  try {
    return await it("git_push_command", { message: e });
  } catch (t) {
    throw new Error(`Git push 失败: ${t}`);
  }
}
async function Li() {
  try {
    await it("start_auto_sync_command");
  } catch (e) {
    throw new Error(`启动自动同步失败: ${e}`);
  }
}
async function Ai() {
  try {
    await it("stop_auto_sync_command");
  } catch (e) {
    throw new Error(`停止自动同步失败: ${e}`);
  }
}
const Be = R("disabled"), tn = R(null), Xn = R(null), Kn = R(null), nr = R(!1);
let Mn = null, Fn = null;
const us = R(!1), Kc = R(0), Yc = R(Date.now());
let So = null, ir = null, ur = null, cr = null, dr = null;
const qc = (e) => {
  const n = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return [
    "工作区未设置",
    "工作区未配置",
    "workspace not set",
    "workspace is not set",
    "workspace root"
  ].some((o) => n.includes(o.toLowerCase()));
}, Xc = (e) => {
  const n = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return n.includes("插件 'git-sync' 未启用") || n.includes('插件 "git-sync" 未启用') || n.includes("plugin 'git-sync'") && (n.includes("disabled") || n.includes("not enabled") || n.includes("未启用"));
};
function Jc() {
  const e = O(() => !tn.value || !tn.value.is_repo ? 0 : tn.value.changed_files.length), t = O(() => {
    if (Kc.value, !Xn.value) return "";
    const l = new Date(Xn.value), i = Yc.value - l.getTime(), u = Math.floor(i / 6e4), d = Math.floor(u / 60), f = Math.floor(d / 24);
    return u < 1 ? "刚刚" : u < 60 ? `${u}分钟前` : d < 24 ? `${d}小时前` : f < 7 ? `${f}天前` : l.toLocaleDateString("zh-CN");
  }), n = O(() => {
    const l = Kn.value;
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
    if (Kn.value && !Kn.value.enabled) {
      tn.value = null, Be.value = "disabled";
      return;
    }
    if (nr.value || Be.value === "syncing") {
      us.value = !0;
      return;
    }
    nr.value = !0;
    try {
      const l = await Gc();
      tn.value = l, !l.is_repo || !Kn.value?.enabled ? Be.value = "disabled" : l.has_changes ? Be.value = "has_changes" : Be.value = "synced";
    } catch (l) {
      if (qc(l) || Xc(l)) {
        tn.value = null, Be.value = "disabled";
        return;
      }
      et.error("[GitStatus] 获取 Git 状态失败", l), Be.value = "error";
    } finally {
      nr.value = !1, us.value && (us.value = !1, setTimeout(() => o(), 100));
    }
  };
  return {
    syncState: Be,
    gitStatus: tn,
    pendingFilesCount: e,
    lastSyncTime: Xn,
    gitSettings: Kn,
    isLoading: nr,
    refreshStatus: o,
    refreshSettings: async () => {
      try {
        const l = await jc();
        Kn.value = l, l.enabled ? (Be.value === "disabled" && (Be.value = "idle"), l.last_sync_time && (Xn.value = l.last_sync_time)) : Be.value = "disabled";
      } catch (l) {
        et.error("[GitStatus] 获取 Git 设置失败", l);
      }
    },
    formattedLastSyncTime: t,
    stateDescription: n,
    // 导出内部方法供外部调用
    _setSyncState: (l) => {
      Be.value = l;
    },
    _setLastSyncTime: (l) => {
      Xn.value = l;
    }
  };
}
function V2() {
  So || (So = setInterval(() => {
    Yc.value = Date.now(), Kc.value += 1;
  }, 6e4)), lr("git-pull-start", () => {
    Be.value = "syncing";
  }).then((e) => {
    ir = e;
  }), lr("git-push-start", () => {
    Be.value = "syncing";
  }).then((e) => {
    ur = e;
  }), lr("git-sync-complete", (e) => {
    e.payload.success ? (Be.value = "syncing", e.payload.last_sync_time && (Xn.value = e.payload.last_sync_time)) : Be.value = "error", Fn !== null && clearTimeout(Fn), Fn = setTimeout(() => {
      Fn = null, Gc().then((t) => {
        tn.value = t, t.has_changes ? Be.value = "has_changes" : Be.value = "synced";
      }).catch((t) => {
        if (qc(t) || Xc(t)) {
          tn.value = null, Be.value = "disabled";
          return;
        }
        et.error("[GitStatus] git-sync-complete 后刷新状态失败", t), Be.value = "error";
      });
    }, 1e3);
  }).then((e) => {
    cr = e;
  });
}
function x2(e, t = 300) {
  lr("git-workspace-changed", () => {
    Mn !== null && clearTimeout(Mn), Mn = setTimeout(async () => {
      Mn = null, await e();
    }, t);
  }).then((n) => {
    dr = n;
  });
}
function z2() {
  So && (clearInterval(So), So = null), Mn && (clearTimeout(Mn), Mn = null), Fn && (clearTimeout(Fn), Fn = null), ir && (ir(), ir = null), ur && (ur(), ur = null), cr && (cr(), cr = null), dr && (dr(), dr = null);
}
function H2(e) {
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
function W2(e) {
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
const U2 = { class: "settings-panel" }, j2 = { class: "panel-header" }, G2 = { class: "panel-title" }, K2 = { class: "panel-content" }, Y2 = { class: "sync-status-panel__left" }, q2 = { class: "sync-status-icon" }, X2 = { class: "sync-status-info" }, J2 = { class: "sync-status-label" }, Z2 = { class: "sync-status-detail" }, Q2 = {
  key: 1,
  class: "pending-count"
}, eC = { class: "sync-status-panel__right" }, tC = { class: "sync-pending-files-header" }, nC = { class: "sync-pending-files-list" }, oC = { class: "file-name" }, rC = { class: "settings-section-title" }, sC = { class: "summarize-section" }, aC = { class: "summarize-label" }, lC = { class: "summarize-label-title" }, iC = { class: "summarize-label-desc" }, uC = { class: "summarize-input-wrapper" }, cC = {
  key: 0,
  class: "summarize-section"
}, dC = { class: "summarize-input-wrapper" }, fC = { class: "summarize-section" }, pC = { class: "summarize-label" }, vC = { class: "summarize-label-title" }, mC = { class: "summarize-label-desc" }, gC = { class: "summarize-input-wrapper" }, hC = { class: "summarize-section" }, yC = { class: "summarize-label" }, bC = { class: "summarize-label-title" }, _C = { class: "summarize-label-desc" }, wC = { class: "summarize-input-wrapper" }, CC = {
  key: 1,
  class: "summarize-section transparent-input"
}, SC = { class: "summarize-label" }, EC = { class: "summarize-label-title" }, TC = { class: "summarize-label-desc" }, OC = { class: "summarize-input-wrapper" }, IC = { class: "ml-2 text-sm text-panel" }, kC = { class: "settings-section-title" }, LC = { class: "summarize-section" }, AC = { class: "summarize-label" }, NC = { class: "summarize-label-title" }, PC = { class: "summarize-label-desc" }, $C = { class: "summarize-input-wrapper flex gap-2" }, RC = { class: "git-records-section" }, MC = { class: "git-records-head" }, FC = {
  key: 0,
  class: "git-records-list"
}, DC = { class: "git-record-main" }, BC = ["title"], VC = { class: "git-record-time" }, xC = { class: "git-record-meta" }, zC = {
  key: 0,
  class: "git-record-files"
}, HC = ["title", "onClick"], WC = { class: "git-record-file-status" }, UC = { class: "git-record-file-name" }, jC = {
  key: 0,
  class: "git-record-more"
}, GC = {
  key: 1,
  class: "git-records-empty"
}, KC = /* @__PURE__ */ Y({
  name: "GitSync",
  __name: "index",
  setup(e) {
    const { t } = jr(), {
      syncState: n,
      pendingFilesCount: o,
      formattedLastSyncTime: r,
      gitStatus: s,
      refreshStatus: a,
      refreshSettings: l
    } = Jc(), i = O(() => s.value?.changed_files ? s.value.changed_files : []), u = (B) => {
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
    }, d = R({
      enabled: !1,
      user_name: "",
      user_email: "",
      token: "",
      remote_url: "",
      pull_on_start: !0,
      auto_sync: !1,
      auto_sync_delay: 1
    }), f = R(!1), g = R(!1), m = R(!1), v = R(!1), h = R({
      title: "",
      message: "",
      primaryText: "",
      secondaryText: "",
      type: "info"
    }), y = R(!1), p = R(null), C = R("main"), k = R(!1), w = R(""), T = R([]), I = R([]), E = R(!1), H = R(!1), V = R(!1), Z = R(null), G = O(() => (p.value?.available_branches?.length ? p.value.available_branches : ["main"]).map((U) => ({
      label: U === "main" ? `${U}（主分支）` : U,
      value: U
    }))), J = O(() => p.value ? `${p.value.reason}
当前分支：${p.value.current_branch || "未知"}；建议选择：${p.value.recommended_branch}` : "请选择要同步的分支"), le = O(() => {
      const B = T.value.map((U) => `- ${U}`).join(`
`);
      return `目标分支会覆盖以下未跟踪文件。选择“使用目标分支文件”会先删除这些本地未跟踪文件，再切换到 ${w.value || "目标"} 分支。

${B}`;
    }), Te = O(() => {
      const B = Z.value;
      return B ? `确认将文件恢复到这条记录之前的版本？

- 文件：${B.file.file_path}
- 记录：${B.record.short_hash} ${B.record.message}

当前文件内容会被覆盖，恢复后会出现在待同步列表中。` : "";
    }), $ = (B) => {
      const U = H2(B), Ce = W2(U.type), b = String(B).replace(/^Error:\s*/, "");
      let S = `${Ce} ${U.title}

${U.message}`;
      b && !U.message.includes(b) && (S += `

详情: ${b.slice(0, 100)}${b.length > 100 ? "..." : ""}`), Qe.msg(S, "error", "top-right"), console.group(`🔧 Git 错误解决建议 - ${U.title}`), console.log(b), console.log("建议步骤:"), U.suggestions.forEach((A, q) => {
        console.log(`${q + 1}. ${A}`);
      }), console.groupEnd();
    }, M = (B) => {
      v.value = !1;
    }, D = (B) => {
      p.value = B, C.value = B.recommended_branch || "main", y.value = !0;
    }, re = (B) => {
      const U = String(B), Ce = "would be overwritten by checkout:", b = U.indexOf(Ce);
      if (b < 0) return [];
      const S = U.slice(b + Ce.length), A = S.search(/Please move|Aborting|Error:/);
      return (A >= 0 ? S.slice(0, A) : S).split(/\r?\n/).map((fe) => fe.trim()).filter((fe) => fe && !fe.startsWith("Please ") && !fe.startsWith("Aborting"));
    }, se = async (B) => {
      try {
        return await ki(B), await a(), Qe.msg(`已切换到 ${B} 分支`, "success", "bottom-right"), !0;
      } catch (U) {
        const Ce = re(U);
        if (Ce.length > 0)
          return w.value = B, T.value = Ce, y.value = !1, k.value = !0, !1;
        throw U;
      }
    }, pe = async (B) => {
      f.value = !0;
      try {
        await se(B);
      } catch (U) {
        et.error("[GitSync] 切换分支失败", U), $(U);
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
        for (const Ce of U)
          await D2(Ce);
        k.value = !1, T.value = [], w.value = "", await ki(B), await a(), Qe.msg(`已切换到 ${B} 分支`, "success", "bottom-right");
      } catch (Ce) {
        et.error("[GitSync] 处理未跟踪文件后切换分支失败", Ce), $(Ce);
      } finally {
        f.value = !1;
      }
    }, Me = (B) => {
      if (B.branch_selection) {
        D(B.branch_selection);
        return;
      }
      B.success ? B.has_conflicts ? et.info("[GitSync] Pull 检测到冲突，由全局对话框处理") : B.files_updated === 0 ? Qe.msg(t("settings.gitSync.alreadyUpToDate"), "success", "bottom-right") : Qe.msg(t("settings.gitSync.pullSuccess", { count: B.files_updated }), "success", "bottom-right") : Qe.msg(t("settings.gitSync.pullFailed"), "error", "top-right");
    }, we = async () => {
      E.value = !0;
      try {
        I.value = await M2(10), H.value = !0;
      } catch (B) {
        et.error("[GitSync] 加载 Git 记录失败", B), $(B);
      } finally {
        E.value = !1;
      }
    }, Ye = (B, U) => {
      Z.value = { record: B, file: U }, V.value = !0;
    }, Ue = async () => {
      const B = Z.value;
      if (B)
        try {
          await F2(B.record.commit_hash, B.file.file_path), Qe.msg("文件已恢复，请检查待同步记录后再推送", "success", "bottom-right"), Z.value = null, await a();
        } catch (U) {
          et.error("[GitSync] 恢复 Git 文件失败", U), $(U);
        }
    }, qe = async () => {
      try {
        et.info("[GitSync] 开始加载 Git 设置");
        const B = await jc();
        d.value = B, et.info("[GitSync] Git 设置加载成功", B);
      } catch (B) {
        et.error("[GitSync] 加载 Git 设置失败", B), Qe.msg(t("settings.gitSync.loadFailed"), "error", "top-right");
      }
    }, De = async () => {
      try {
        await R2(d.value);
      } catch (B) {
        throw et.error("[GitSync] 保存 Git 设置失败", B), B;
      }
    }, ye = async (B) => {
      f.value = !0;
      try {
        await De(), Qe.msg(t(B ? "settings.gitSync.enabledSuccess" : "settings.gitSync.disabledSuccess"), "success", "bottom-right");
      } catch {
        Qe.msg(t("settings.gitSync.saveFailed"), "error", "top-right"), d.value.enabled = !B;
      } finally {
        f.value = !1;
      }
    }, ut = async (B) => {
      f.value = !0;
      try {
        await De(), Qe.msg(t(B ? "settings.gitSync.pullOnStartEnabled" : "settings.gitSync.pullOnStartDisabled"), "success", "bottom-right");
      } catch {
        Qe.msg(t("settings.gitSync.saveFailed"), "error", "top-right"), d.value.pull_on_start = !B;
      } finally {
        f.value = !1;
      }
    }, mt = async (B) => {
      f.value = !0;
      try {
        await De(), B ? await Li() : await Ai(), Qe.msg(t(B ? "settings.gitSync.autoSyncEnabled" : "settings.gitSync.autoSyncDisabled"), "success", "bottom-right");
      } catch {
        Qe.msg(t("settings.gitSync.saveFailed"), "error", "top-right"), d.value.auto_sync = !B;
      } finally {
        f.value = !1;
      }
    }, ct = async () => {
      f.value = !0;
      try {
        await De(), d.value.auto_sync && (await Ai(), await Li());
      } catch {
        Qe.msg(t("settings.gitSync.saveFailed"), "error", "top-right");
      } finally {
        f.value = !1;
      }
    }, _t = async () => {
      et.info("[GitSync] 手动 Pull 开始"), g.value = !0;
      try {
        const B = await Ii();
        Me(B);
      } catch (B) {
        et.error("[GitSync] 手动 Pull 失败", B), $(B);
      } finally {
        g.value = !1;
      }
    }, dt = async (B) => {
      const U = String(B || "main");
      g.value = !0;
      try {
        if (!await se(U)) return;
        y.value = !1;
        const b = await Ii();
        Me(b);
      } catch (Ce) {
        et.error("[GitSync] 切换分支后 Pull 失败", Ce), $(Ce);
      } finally {
        g.value = !1;
      }
    }, ft = async () => {
      et.info("[GitSync] 手动 Push 开始"), m.value = !0;
      try {
        const B = await B2("Manual sync");
        B.success ? Qe.msg(t("settings.gitSync.pushSuccess", { count: B.files_pushed }), "success", "bottom-right") : Qe.msg(t("settings.gitSync.pushFailed"), "error", "top-right");
      } catch (B) {
        et.error("[GitSync] 手动 Push 失败", B), $(B);
      } finally {
        m.value = !1;
      }
    };
    return Re(async () => {
      await qe(), await l(), await a();
    }), (B, U) => {
      const Ce = hc, b = gc, S = H_;
      return L(), x("div", U2, [
        W(" 固定标题 "),
        N("div", j2, [
          N(
            "h3",
            G2,
            ee(B.$t("settings.gitSync.title")),
            1
            /* TEXT */
          )
        ]),
        W(" 可滚动内容 "),
        N("main", K2, [
          W(" 当前同步状态：同面板内左右分栏 "),
          c(d).enabled ? (L(), x(
            "div",
            {
              key: 0,
              class: z(["sync-status-panel", `sync-status-panel--${c(n)}`])
            },
            [
              W(" 左侧：状态摘要 "),
              N("div", Y2, [
                N("div", q2, [
                  c(n) === "syncing" ? (L(), te(c(Di), {
                    key: 0,
                    class: "git-sync-icon",
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : c(n) === "synced" || c(n) === "idle" || c(n) === "disabled" ? (L(), te(c(Fd), {
                    key: 1,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : c(n) === "has_changes" ? (L(), te(c(Md), {
                    key: 2,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : c(n) === "error" ? (L(), te(c(Dd), {
                    key: 3,
                    theme: "outline",
                    size: "24",
                    strokeWidth: 3
                  })) : W("v-if", !0)
                ]),
                N("div", X2, [
                  N(
                    "div",
                    J2,
                    ee(u(c(n))),
                    1
                    /* TEXT */
                  ),
                  N("div", Z2, [
                    c(n) === "syncing" ? (L(), x(
                      ke,
                      { key: 0 },
                      [
                        ht(
                          ee(B.$t("settings.gitSync.status.syncing")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : c(n) === "has_changes" ? (L(), x(
                      "span",
                      Q2,
                      ee(c(o)) + " " + ee(B.$t("settings.gitSync.status.pendingFiles")),
                      1
                      /* TEXT */
                    )) : c(n) === "synced" || c(n) === "idle" ? (L(), x(
                      ke,
                      { key: 2 },
                      [
                        ht(
                          ee(c(r) ? `${B.$t("settings.gitSync.status.lastSync")}: ${c(r)}` : B.$t("settings.gitSync.status.waitingSync")),
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
                        ht(
                          ee(B.$t("settings.gitSync.status.error")),
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
                        ht(
                          ee(B.$t("settings.gitSync.status.checking")),
                          1
                          /* TEXT */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : W("v-if", !0)
                  ])
                ])
              ]),
              W(" 右侧：待同步文件列表（仅在有变更时显示） "),
              c(n) === "has_changes" && c(o) > 0 ? (L(), x(
                ke,
                { key: 0 },
                [
                  U[16] || (U[16] = N(
                    "div",
                    { class: "sync-status-panel__divider" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  N("div", eC, [
                    N(
                      "div",
                      tC,
                      ee(B.$t("settings.gitSync.status.pendingFilesTitle")) + " (" + ee(c(o)) + ") ",
                      1
                      /* TEXT */
                    ),
                    N("div", nC, [
                      (L(!0), x(
                        ke,
                        null,
                        _n(c(i), (A) => (L(), x("div", {
                          key: A,
                          class: "sync-pending-file-item"
                        }, [
                          N(
                            "span",
                            oC,
                            ee(A),
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
              )) : W("v-if", !0)
            ],
            2
            /* CLASS */
          )) : W("v-if", !0),
          W(" 第一部分：Git 配置 "),
          N(
            "div",
            rC,
            ee(B.$t("settings.gitSync.status.section.config")),
            1
            /* TEXT */
          ),
          W(" 启用 Git 同步 "),
          N("section", sC, [
            N("div", aC, [
              N(
                "div",
                lC,
                ee(B.$t("settings.gitSync.enabled")),
                1
                /* TEXT */
              ),
              N(
                "div",
                iC,
                ee(B.$t("settings.gitSync.enabledDesc")),
                1
                /* TEXT */
              )
            ]),
            N("div", uC, [
              K(c(as), {
                modelValue: c(d).enabled,
                "onUpdate:modelValue": U[0] || (U[0] = (A) => c(d).enabled = A),
                "active-text": B.$t("common.on"),
                "inactive-text": B.$t("common.off"),
                disabled: c(f),
                onChange: ye
              }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
            ])
          ]),
          W(" 同步选项（Git 必要配置在个人中心填写，此处仅保留开关与同步操作） "),
          c(d).enabled ? (L(), x(
            ke,
            { key: 1 },
            [
              c(s)?.available_branches?.length ? (L(), x("section", cC, [
                U[17] || (U[17] = N(
                  "div",
                  { class: "summarize-label" },
                  [
                    N("div", { class: "summarize-label-title" }, "同步分支"),
                    N("div", { class: "summarize-label-desc" }, " 主分支固定为 main，检测到其他分支时可在这里切换 ")
                  ],
                  -1
                  /* HOISTED */
                )),
                N("div", dC, [
                  K(b, {
                    "model-value": c(s).branch || "main",
                    class: "summarize-input !w-40",
                    disabled: c(f) || c(g) || c(m),
                    onChange: pe
                  }, {
                    default: j(() => [
                      (L(!0), x(
                        ke,
                        null,
                        _n(c(s).available_branches, (A) => (L(), te(Ce, {
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
              ])) : W("v-if", !0),
              W(" 启动时自动拉取 "),
              N("section", fC, [
                N("div", pC, [
                  N(
                    "div",
                    vC,
                    ee(B.$t("settings.gitSync.pullOnStart")),
                    1
                    /* TEXT */
                  ),
                  N(
                    "div",
                    mC,
                    ee(B.$t("settings.gitSync.pullOnStartDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                N("div", gC, [
                  K(c(as), {
                    modelValue: c(d).pull_on_start,
                    "onUpdate:modelValue": U[1] || (U[1] = (A) => c(d).pull_on_start = A),
                    "active-text": B.$t("common.on"),
                    "inactive-text": B.$t("common.off"),
                    disabled: c(f),
                    onChange: ut
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              W(" 自动同步 "),
              N("section", hC, [
                N("div", yC, [
                  N(
                    "div",
                    bC,
                    ee(B.$t("settings.gitSync.autoSync")),
                    1
                    /* TEXT */
                  ),
                  N(
                    "div",
                    _C,
                    ee(B.$t("settings.gitSync.autoSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                N("div", wC, [
                  K(c(as), {
                    modelValue: c(d).auto_sync,
                    "onUpdate:modelValue": U[2] || (U[2] = (A) => c(d).auto_sync = A),
                    "active-text": B.$t("common.on"),
                    "inactive-text": B.$t("common.off"),
                    disabled: c(f),
                    onChange: mt
                  }, null, 8, ["modelValue", "active-text", "inactive-text", "disabled"])
                ])
              ]),
              W(" 自动同步延迟（仅在启用自动同步时显示） "),
              c(d).auto_sync ? (L(), x("section", CC, [
                N("div", SC, [
                  N(
                    "div",
                    EC,
                    ee(B.$t("settings.gitSync.autoSyncDelay")),
                    1
                    /* TEXT */
                  ),
                  N(
                    "div",
                    TC,
                    ee(B.$t("settings.gitSync.autoSyncDelayDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                N("div", OC, [
                  K(S, {
                    modelValue: c(d).auto_sync_delay,
                    "onUpdate:modelValue": U[3] || (U[3] = (A) => c(d).auto_sync_delay = A),
                    min: 1,
                    max: 60,
                    disabled: c(f),
                    onChange: ct,
                    class: "!w-32"
                  }, null, 8, ["modelValue", "disabled"]),
                  N(
                    "span",
                    IC,
                    ee(B.$t("settings.gitSync.minutes")),
                    1
                    /* TEXT */
                  )
                ])
              ])) : W("v-if", !0),
              W(" 第二部分：同步操作 "),
              N(
                "div",
                kC,
                ee(B.$t("settings.gitSync.status.section.sync") || "同步操作"),
                1
                /* TEXT */
              ),
              W(" 手动同步按钮 "),
              N("section", LC, [
                N("div", AC, [
                  N(
                    "div",
                    NC,
                    ee(B.$t("settings.gitSync.manualSync")),
                    1
                    /* TEXT */
                  ),
                  N(
                    "div",
                    PC,
                    ee(B.$t("settings.gitSync.manualSyncDesc")),
                    1
                    /* TEXT */
                  )
                ]),
                N("div", $C, [
                  K(c(Co), {
                    type: "primary",
                    size: "small",
                    loading: c(g),
                    onClick: _t
                  }, {
                    default: j(() => [
                      ht(
                        ee(B.$t("settings.gitSync.pull")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"]),
                  K(c(Co), {
                    type: "primary",
                    size: "small",
                    loading: c(m),
                    onClick: ft
                  }, {
                    default: j(() => [
                      ht(
                        ee(B.$t("settings.gitSync.push")),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ])
              ]),
              N("section", RC, [
                N("div", MC, [
                  U[19] || (U[19] = N(
                    "div",
                    null,
                    [
                      N("div", { class: "summarize-label-title" }, "Git 记录"),
                      N("div", { class: "summarize-label-desc" }, "最近 10 条提交，可查看同步状态并恢复单个文件")
                    ],
                    -1
                    /* HOISTED */
                  )),
                  K(c(Co), {
                    size: "small",
                    loading: c(E),
                    onClick: we
                  }, {
                    default: j(() => U[18] || (U[18] = [
                      ht(" 刷新 ")
                    ])),
                    _: 1
                    /* STABLE */
                  }, 8, ["loading"])
                ]),
                c(I).length ? (L(), x("div", FC, [
                  (L(!0), x(
                    ke,
                    null,
                    _n(c(I), (A) => (L(), x("div", {
                      key: A.commit_hash,
                      class: "git-record-item"
                    }, [
                      N("div", DC, [
                        N(
                          "span",
                          {
                            class: z(["git-record-state", { synced: A.synced }])
                          },
                          ee(A.synced ? "已同步" : "待推送"),
                          3
                          /* TEXT, CLASS */
                        ),
                        N("span", {
                          class: "git-record-message",
                          title: A.message
                        }, ee(A.message), 9, BC),
                        N(
                          "span",
                          VC,
                          ee(A.time),
                          1
                          /* TEXT */
                        )
                      ]),
                      N("div", xC, [
                        N(
                          "span",
                          null,
                          ee(A.short_hash),
                          1
                          /* TEXT */
                        ),
                        N(
                          "span",
                          null,
                          ee(A.author),
                          1
                          /* TEXT */
                        )
                      ]),
                      A.files.length ? (L(), x("div", zC, [
                        (L(!0), x(
                          ke,
                          null,
                          _n(A.files.slice(0, 6), (q) => (L(), x("button", {
                            key: `${A.commit_hash}-${q.file_path}`,
                            class: "git-record-file",
                            type: "button",
                            title: `${q.status} ${q.file_path}`,
                            onClick: (fe) => Ye(A, q)
                          }, [
                            N(
                              "span",
                              WC,
                              ee(q.status),
                              1
                              /* TEXT */
                            ),
                            N(
                              "span",
                              UC,
                              ee(q.file_name),
                              1
                              /* TEXT */
                            )
                          ], 8, HC))),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        A.files.length > 6 ? (L(), x(
                          "span",
                          jC,
                          " +" + ee(A.files.length - 6),
                          1
                          /* TEXT */
                        )) : W("v-if", !0)
                      ])) : W("v-if", !0)
                    ]))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])) : (L(), x(
                  "div",
                  GC,
                  ee(c(E) ? "正在加载记录..." : c(H) ? "暂无 Git 记录" : "点击刷新查看最近 10 条提交"),
                  1
                  /* TEXT */
                ))
              ])
            ],
            64
            /* STABLE_FRAGMENT */
          )) : W("v-if", !0)
        ]),
        W(" 自定义确认框 "),
        K(is, {
          modelValue: c(v),
          "onUpdate:modelValue": U[4] || (U[4] = (A) => rn(v) ? v.value = A : null),
          title: c(h).title,
          message: c(h).message,
          "primary-text": c(h).primaryText,
          "secondary-text": c(h).secondaryText,
          type: c(h).type,
          onPrimary: U[5] || (U[5] = (A) => M()),
          onSecondary: U[6] || (U[6] = (A) => M()),
          onClose: U[7] || (U[7] = (A) => M())
        }, null, 8, ["modelValue", "title", "message", "primary-text", "secondary-text", "type"]),
        K(c(E2), {
          modelValue: c(y),
          "onUpdate:modelValue": U[8] || (U[8] = (A) => rn(y) ? y.value = A : null),
          title: "选择同步分支",
          message: c(J),
          options: c(G),
          "default-value": c(C),
          "confirm-text": "切换并同步",
          "cancel-text": "取消",
          loading: c(g),
          onConfirm: dt,
          onCancel: U[9] || (U[9] = (A) => y.value = !1)
        }, null, 8, ["modelValue", "message", "options", "default-value", "loading"]),
        K(is, {
          modelValue: c(k),
          "onUpdate:modelValue": U[10] || (U[10] = (A) => rn(k) ? k.value = A : null),
          title: "切换分支前需要处理未跟踪文件",
          message: c(le),
          "primary-text": "使用目标分支文件",
          "secondary-text": "取消",
          type: "warning",
          onPrimary: Ae,
          onSecondary: U[11] || (U[11] = (A) => k.value = !1),
          onClose: U[12] || (U[12] = (A) => k.value = !1)
        }, null, 8, ["modelValue", "message"]),
        K(is, {
          modelValue: c(V),
          "onUpdate:modelValue": U[13] || (U[13] = (A) => rn(V) ? V.value = A : null),
          title: "恢复文件",
          message: c(Te),
          "primary-text": "确认恢复",
          "secondary-text": "取消",
          type: "warning",
          onPrimary: Ue,
          onSecondary: U[14] || (U[14] = (A) => V.value = !1),
          onClose: U[15] || (U[15] = (A) => V.value = !1)
        }, null, 8, ["modelValue", "message"])
      ]);
    };
  }
}), YC = /* @__PURE__ */ Wn(KC, [["__scopeId", "data-v-3ce37232"]]), qC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: YC
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var Ni;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ni || (Ni = {}));
var Pi;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Pi || (Pi = {}));
var $i;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})($i || ($i = {}));
const XC = Symbol("");
function JC() {
  return ie(XC);
}
const ZC = ["title"], QC = {
  key: 2,
  class: "git-badge"
}, eS = {
  key: 3,
  class: "git-time"
}, tS = { class: "ml-2" }, nS = {
  key: 0,
  class: "git-badge ml-1"
}, oS = /* @__PURE__ */ Y({
  __name: "TitlebarGitStatus",
  props: {
    variant: { default: "inline" }
  },
  setup(e) {
    const t = JC(), {
      syncState: n,
      pendingFilesCount: o,
      formattedLastSyncTime: r,
      refreshStatus: s,
      refreshSettings: a,
      stateDescription: l,
      gitSettings: i
    } = Jc(), u = O(() => !!i.value?.enabled && n.value !== "error"), d = () => {
      t.push("/config/category/settings?tab=gitSync");
    };
    return Re(async () => {
      V2(), x2(s), await a(), await s();
    }), $s(() => {
      z2();
    }), (f, g) => {
      const m = F_;
      return u.value && f.variant === "inline" ? (L(), x("div", {
        key: 0,
        class: z(["git-status-indicator", `git-status-${c(n)}`]),
        title: c(l),
        onClick: d
      }, [
        c(n) === "syncing" ? (L(), te(c(Di), {
          key: 0,
          class: "icon git-sync-icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })) : (L(), te(c($a), {
          key: 1,
          class: "icon",
          theme: "outline",
          size: "16",
          strokeWidth: 3
        })),
        c(n) === "has_changes" ? (L(), x(
          "span",
          QC,
          ee(c(o)),
          1
          /* TEXT */
        )) : W("v-if", !0),
        c(r) && c(n) !== "syncing" ? (L(), x(
          "span",
          eS,
          ee(c(r)),
          1
          /* TEXT */
        )) : W("v-if", !0)
      ], 10, ZC)) : u.value ? (L(), te(m, {
        key: 1,
        onClick: d
      }, {
        default: j(() => [
          K(c($a), {
            theme: "outline",
            size: "16",
            strokeWidth: 3,
            class: "align-middle"
          }),
          N(
            "span",
            tS,
            ee(f.$t("titlebar.gitSync")),
            1
            /* TEXT */
          ),
          c(n) === "has_changes" ? (L(), x(
            "span",
            nS,
            ee(c(o)),
            1
            /* TEXT */
          )) : W("v-if", !0)
        ]),
        _: 1
        /* STABLE */
      })) : W("v-if", !0);
    };
  }
}), rS = /* @__PURE__ */ Wn(oS, [["__scopeId", "data-v-c2d8aaac"]]), sS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rS
}, Symbol.toStringTag, { value: "Module" }));
export {
  lS as activate
};
