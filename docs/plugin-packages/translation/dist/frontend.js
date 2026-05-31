import * as eo from "vue";
import { inject as Ee, createVNode as W, defineAsyncComponent as uo, getCurrentInstance as Qe, ref as D, computed as P, unref as f, shallowRef as mn, watchEffect as Wl, readonly as Ya, getCurrentScope as Hl, onScopeDispose as Kl, onMounted as xe, nextTick as Ae, watch as ue, isRef as gn, warn as wd, provide as zt, defineComponent as q, createElementBlock as z, openBlock as A, mergeProps as hn, renderSlot as ie, createElementVNode as L, toRef as Nt, onUnmounted as Za, useAttrs as Ed, useSlots as Sd, normalizeStyle as Re, normalizeClass as B, createCommentVNode as Y, Fragment as Ue, createBlock as ee, withCtx as ne, resolveDynamicComponent as mt, withModifiers as Je, toDisplayString as X, onBeforeUnmount as Vt, Transition as tr, withDirectives as gt, vShow as tn, reactive as On, onActivated as Cd, onUpdated as Td, cloneVNode as kd, Text as Gl, Comment as Od, Teleport as Pd, onBeforeMount as Ld, onDeactivated as Id, createTextVNode as Cn, toRaw as Yl, toRefs as $o, resolveComponent as En, resolveDirective as Ad, toHandlerKey as Rd, renderList as Jt, withKeys as sr, vModelText as $d, normalizeProps as Nd, shallowReactive as Md, isVNode as Sr, render as co, h as qa, hasInjectionContext as xd, effectScope as Fd, isReactive as Zl, markRaw as ya } from "vue";
var Dd = {
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
function zd() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Bd(e, t, n) {
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
var jd = Symbol("icon-context");
function Ot(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = zd(), i = Ee(jd, Dd);
      return function() {
        var l = a.size, u = a.strokeWidth, c = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, g = a.fill, v = a.spin, h = Bd(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: c,
          strokeLinejoin: p,
          theme: m,
          fill: g
        }, i), E = [i.prefix + "-icon"];
        return E.push(i.prefix + "-icon-" + e), t && i.rtl && E.push(i.prefix + "-icon-rtl"), v && E.push(i.prefix + "-icon-spin"), W("span", {
          class: E.join(" ")
        }, [n(h)]);
      };
    }
  };
  return r;
}
const Vd = Ot("close-small", !1, function(e) {
  return W("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [W("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ud = Ot("copy", !0, function(e) {
  return W("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [W("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Wd = Ot("delete", !1, function(e) {
  return W("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [W("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Hd = Ot("down", !1, function(e) {
  return W("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [W("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Kd = Ot("folder-open", !0, function(e) {
  return W("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [W("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Gd = Ot("pushpin", !1, function(e) {
  return W("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [W("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Yd = Ot("setting-two", !1, function(e) {
  return W("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [W("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Vs = Ot("switch", !0, function(e) {
  return W("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [W("path", {
    d: "M42 19H5.99998",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M30 7L42 19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M6.79897 29H42.799",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M6.79895 29L18.799 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Zd = Ot("translate", !0, function(e) {
  return W("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [W("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), qd = Ot("up", !1, function(e) {
  return W("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [W("path", {
    d: "M13 30L25 18L37 30",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Us = Ot("volume-up", !0, function(e) {
  return W("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [W("path", {
    d: "M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M32 24H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), W("path", {
    d: "M38 18V30",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), HE = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/translate",
    name: "Translate",
    component: uo(() => Promise.resolve().then(() => d2))
  }), e.registerSettingsTab({
    id: "translation",
    labelKey: "translation.title",
    icon: Zd,
    component: uo(() => Promise.resolve().then(() => _E))
  });
}, ql = Symbol(), to = "el", Xd = "is-", Sn = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Xl = Symbol("namespaceContextKey"), Xa = (e) => {
  const t = e || (Qe() ? Ee(Xl, D(to)) : D(to));
  return P(() => f(t) || to);
}, Me = (e, t) => {
  const n = Xa(t);
  return {
    namespace: n,
    b: (h = "") => Sn(n.value, e, h, "", ""),
    e: (h) => h ? Sn(n.value, e, "", h, "") : "",
    m: (h) => h ? Sn(n.value, e, "", "", h) : "",
    be: (h, E) => h && E ? Sn(n.value, e, h, E, "") : "",
    em: (h, E) => h && E ? Sn(n.value, e, "", h, E) : "",
    bm: (h, E) => h && E ? Sn(n.value, e, h, "", E) : "",
    bem: (h, E, d) => h && E && d ? Sn(n.value, e, h, E, d) : "",
    is: (h, ...E) => {
      const d = E.length >= 1 ? E[0] : !0;
      return h && d ? `${Xd}${h}` : "";
    },
    cssVar: (h) => {
      const E = {};
      for (const d in h)
        h[d] && (E[`--${n.value}-${d}`] = h[d]);
      return E;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const E = {};
      for (const d in h)
        h[d] && (E[`--${n.value}-${e}-${d}`] = h[d]);
      return E;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Cr = () => {
}, Jd = Object.prototype.hasOwnProperty, Ws = (e, t) => Jd.call(e, t), Mt = Array.isArray, je = (e) => typeof e == "function", nt = (e) => typeof e == "string", tt = (e) => e !== null && typeof e == "object", Qd = Object.prototype.toString, ef = (e) => Qd.call(e), tf = (e) => ef(e) === "[object Object]";
var Jl = typeof global == "object" && global && global.Object === Object && global, nf = typeof self == "object" && self && self.Object === Object && self, Ut = Jl || nf || Function("return this")(), Bt = Ut.Symbol, Ql = Object.prototype, rf = Ql.hasOwnProperty, of = Ql.toString, ir = Bt ? Bt.toStringTag : void 0;
function af(e) {
  var t = rf.call(e, ir), n = e[ir];
  try {
    e[ir] = void 0;
    var r = !0;
  } catch {
  }
  var o = of.call(e);
  return r && (t ? e[ir] = n : delete e[ir]), o;
}
var sf = Object.prototype, lf = sf.toString;
function uf(e) {
  return lf.call(e);
}
var cf = "[object Null]", df = "[object Undefined]", Hs = Bt ? Bt.toStringTag : void 0;
function nr(e) {
  return e == null ? e === void 0 ? df : cf : Hs && Hs in Object(e) ? af(e) : uf(e);
}
function Wn(e) {
  return e != null && typeof e == "object";
}
var ff = "[object Symbol]";
function No(e) {
  return typeof e == "symbol" || Wn(e) && nr(e) == ff;
}
function pf(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var kt = Array.isArray, Ks = Bt ? Bt.prototype : void 0, Gs = Ks ? Ks.toString : void 0;
function eu(e) {
  if (typeof e == "string")
    return e;
  if (kt(e))
    return pf(e, eu) + "";
  if (No(e))
    return Gs ? Gs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var mf = /\s/;
function gf(e) {
  for (var t = e.length; t-- && mf.test(e.charAt(t)); )
    ;
  return t;
}
var hf = /^\s+/;
function vf(e) {
  return e && e.slice(0, gf(e) + 1).replace(hf, "");
}
function vn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ys = NaN, yf = /^[-+]0x[0-9a-f]+$/i, bf = /^0b[01]+$/i, _f = /^0o[0-7]+$/i, wf = parseInt;
function Zs(e) {
  if (typeof e == "number")
    return e;
  if (No(e))
    return Ys;
  if (vn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = vn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = vf(e);
  var n = bf.test(e);
  return n || _f.test(e) ? wf(e.slice(2), n ? 2 : 8) : yf.test(e) ? Ys : +e;
}
function tu(e) {
  return e;
}
var Ef = "[object AsyncFunction]", Sf = "[object Function]", Cf = "[object GeneratorFunction]", Tf = "[object Proxy]";
function nu(e) {
  if (!vn(e))
    return !1;
  var t = nr(e);
  return t == Sf || t == Cf || t == Ef || t == Tf;
}
var ea = Ut["__core-js_shared__"], qs = function() {
  var e = /[^.]+$/.exec(ea && ea.keys && ea.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function kf(e) {
  return !!qs && qs in e;
}
var Of = Function.prototype, Pf = Of.toString;
function In(e) {
  if (e != null) {
    try {
      return Pf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Lf = /[\\^$.*+?()[\]{}|]/g, If = /^\[object .+?Constructor\]$/, Af = Function.prototype, Rf = Object.prototype, $f = Af.toString, Nf = Rf.hasOwnProperty, Mf = RegExp(
  "^" + $f.call(Nf).replace(Lf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xf(e) {
  if (!vn(e) || kf(e))
    return !1;
  var t = nu(e) ? Mf : If;
  return t.test(In(e));
}
function Ff(e, t) {
  return e?.[t];
}
function An(e, t) {
  var n = Ff(e, t);
  return xf(n) ? n : void 0;
}
var ba = An(Ut, "WeakMap");
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
var zf = 800, Bf = 16, jf = Date.now;
function Vf(e) {
  var t = 0, n = 0;
  return function() {
    var r = jf(), o = Bf - (r - n);
    if (n = r, o > 0) {
      if (++t >= zf)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Uf(e) {
  return function() {
    return e;
  };
}
var fo = function() {
  try {
    var e = An(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Wf = fo ? function(e, t) {
  return fo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Uf(t),
    writable: !0
  });
} : tu, Hf = Vf(Wf);
function Kf(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Gf = 9007199254740991, Yf = /^(?:0|[1-9]\d*)$/;
function Ja(e, t) {
  var n = typeof e;
  return t = t ?? Gf, !!t && (n == "number" || n != "symbol" && Yf.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Zf(e, t, n) {
  t == "__proto__" && fo ? fo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Qa(e, t) {
  return e === t || e !== e && t !== t;
}
var qf = Object.prototype, Xf = qf.hasOwnProperty;
function Jf(e, t, n) {
  var r = e[t];
  (!(Xf.call(e, t) && Qa(r, n)) || n === void 0 && !(t in e)) && Zf(e, t, n);
}
var Xs = Math.max;
function Qf(e, t, n) {
  return t = Xs(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Xs(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Df(e, this, i);
  };
}
var ep = 9007199254740991;
function es(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ep;
}
function tp(e) {
  return e != null && es(e.length) && !nu(e);
}
var np = Object.prototype;
function rp(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || np;
  return e === n;
}
function op(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ap = "[object Arguments]";
function Js(e) {
  return Wn(e) && nr(e) == ap;
}
var ru = Object.prototype, sp = ru.hasOwnProperty, ip = ru.propertyIsEnumerable, ts = Js(/* @__PURE__ */ function() {
  return arguments;
}()) ? Js : function(e) {
  return Wn(e) && sp.call(e, "callee") && !ip.call(e, "callee");
};
function lp() {
  return !1;
}
var ou = typeof exports == "object" && exports && !exports.nodeType && exports, Qs = ou && typeof module == "object" && module && !module.nodeType && module, up = Qs && Qs.exports === ou, ei = up ? Ut.Buffer : void 0, cp = ei ? ei.isBuffer : void 0, _a = cp || lp, dp = "[object Arguments]", fp = "[object Array]", pp = "[object Boolean]", mp = "[object Date]", gp = "[object Error]", hp = "[object Function]", vp = "[object Map]", yp = "[object Number]", bp = "[object Object]", _p = "[object RegExp]", wp = "[object Set]", Ep = "[object String]", Sp = "[object WeakMap]", Cp = "[object ArrayBuffer]", Tp = "[object DataView]", kp = "[object Float32Array]", Op = "[object Float64Array]", Pp = "[object Int8Array]", Lp = "[object Int16Array]", Ip = "[object Int32Array]", Ap = "[object Uint8Array]", Rp = "[object Uint8ClampedArray]", $p = "[object Uint16Array]", Np = "[object Uint32Array]", Oe = {};
Oe[kp] = Oe[Op] = Oe[Pp] = Oe[Lp] = Oe[Ip] = Oe[Ap] = Oe[Rp] = Oe[$p] = Oe[Np] = !0;
Oe[dp] = Oe[fp] = Oe[Cp] = Oe[pp] = Oe[Tp] = Oe[mp] = Oe[gp] = Oe[hp] = Oe[vp] = Oe[yp] = Oe[bp] = Oe[_p] = Oe[wp] = Oe[Ep] = Oe[Sp] = !1;
function Mp(e) {
  return Wn(e) && es(e.length) && !!Oe[nr(e)];
}
function xp(e) {
  return function(t) {
    return e(t);
  };
}
var au = typeof exports == "object" && exports && !exports.nodeType && exports, gr = au && typeof module == "object" && module && !module.nodeType && module, Fp = gr && gr.exports === au, ta = Fp && Jl.process, ti = function() {
  try {
    var e = gr && gr.require && gr.require("util").types;
    return e || ta && ta.binding && ta.binding("util");
  } catch {
  }
}(), ni = ti && ti.isTypedArray, su = ni ? xp(ni) : Mp, Dp = Object.prototype, zp = Dp.hasOwnProperty;
function Bp(e, t) {
  var n = kt(e), r = !n && ts(e), o = !n && !r && _a(e), a = !n && !r && !o && su(e), s = n || r || o || a, i = s ? op(e.length, String) : [], l = i.length;
  for (var u in e)
    zp.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ja(u, l))) && i.push(u);
  return i;
}
function jp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Vp = jp(Object.keys, Object), Up = Object.prototype, Wp = Up.hasOwnProperty;
function Hp(e) {
  if (!rp(e))
    return Vp(e);
  var t = [];
  for (var n in Object(e))
    Wp.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function iu(e) {
  return tp(e) ? Bp(e) : Hp(e);
}
var Kp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gp = /^\w*$/;
function ns(e, t) {
  if (kt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || No(e) ? !0 : Gp.test(e) || !Kp.test(e) || t != null && e in Object(t);
}
var Tr = An(Object, "create");
function Yp() {
  this.__data__ = Tr ? Tr(null) : {}, this.size = 0;
}
function Zp(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var qp = "__lodash_hash_undefined__", Xp = Object.prototype, Jp = Xp.hasOwnProperty;
function Qp(e) {
  var t = this.__data__;
  if (Tr) {
    var n = t[e];
    return n === qp ? void 0 : n;
  }
  return Jp.call(t, e) ? t[e] : void 0;
}
var em = Object.prototype, tm = em.hasOwnProperty;
function nm(e) {
  var t = this.__data__;
  return Tr ? t[e] !== void 0 : tm.call(t, e);
}
var rm = "__lodash_hash_undefined__";
function om(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Tr && t === void 0 ? rm : t, this;
}
function Pn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Pn.prototype.clear = Yp;
Pn.prototype.delete = Zp;
Pn.prototype.get = Qp;
Pn.prototype.has = nm;
Pn.prototype.set = om;
function am() {
  this.__data__ = [], this.size = 0;
}
function Mo(e, t) {
  for (var n = e.length; n--; )
    if (Qa(e[n][0], t))
      return n;
  return -1;
}
var sm = Array.prototype, im = sm.splice;
function lm(e) {
  var t = this.__data__, n = Mo(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : im.call(t, n, 1), --this.size, !0;
}
function um(e) {
  var t = this.__data__, n = Mo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function cm(e) {
  return Mo(this.__data__, e) > -1;
}
function dm(e, t) {
  var n = this.__data__, r = Mo(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function rn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
rn.prototype.clear = am;
rn.prototype.delete = lm;
rn.prototype.get = um;
rn.prototype.has = cm;
rn.prototype.set = dm;
var kr = An(Ut, "Map");
function fm() {
  this.size = 0, this.__data__ = {
    hash: new Pn(),
    map: new (kr || rn)(),
    string: new Pn()
  };
}
function pm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function xo(e, t) {
  var n = e.__data__;
  return pm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function mm(e) {
  var t = xo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function gm(e) {
  return xo(this, e).get(e);
}
function hm(e) {
  return xo(this, e).has(e);
}
function vm(e, t) {
  var n = xo(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function on(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
on.prototype.clear = fm;
on.prototype.delete = mm;
on.prototype.get = gm;
on.prototype.has = hm;
on.prototype.set = vm;
var ym = "Expected a function";
function rs(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ym);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (rs.Cache || on)(), n;
}
rs.Cache = on;
var bm = 500;
function _m(e) {
  var t = rs(e, function(r) {
    return n.size === bm && n.clear(), r;
  }), n = t.cache;
  return t;
}
var wm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Em = /\\(\\)?/g, Sm = _m(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(wm, function(n, r, o, a) {
    t.push(o ? a.replace(Em, "$1") : r || n);
  }), t;
});
function Cm(e) {
  return e == null ? "" : eu(e);
}
function Fo(e, t) {
  return kt(e) ? e : ns(e, t) ? [e] : Sm(Cm(e));
}
function Nr(e) {
  if (typeof e == "string" || No(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function os(e, t) {
  t = Fo(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Nr(t[n++])];
  return n && n == r ? e : void 0;
}
function pn(e, t, n) {
  var r = e == null ? void 0 : os(e, t);
  return r === void 0 ? n : r;
}
function lu(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var ri = Bt ? Bt.isConcatSpreadable : void 0;
function Tm(e) {
  return kt(e) || ts(e) || !!(ri && e && e[ri]);
}
function km(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Tm), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? lu(o, i) : o[o.length] = i;
  }
  return o;
}
function Om(e) {
  var t = e == null ? 0 : e.length;
  return t ? km(e) : [];
}
function Pm(e) {
  return Hf(Qf(e, void 0, Om), e + "");
}
function fn() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return kt(e) ? e : [e];
}
function Lm() {
  this.__data__ = new rn(), this.size = 0;
}
function Im(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Am(e) {
  return this.__data__.get(e);
}
function Rm(e) {
  return this.__data__.has(e);
}
var $m = 200;
function Nm(e, t) {
  var n = this.__data__;
  if (n instanceof rn) {
    var r = n.__data__;
    if (!kr || r.length < $m - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new on(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Qt(e) {
  var t = this.__data__ = new rn(e);
  this.size = t.size;
}
Qt.prototype.clear = Lm;
Qt.prototype.delete = Im;
Qt.prototype.get = Am;
Qt.prototype.has = Rm;
Qt.prototype.set = Nm;
function Mm(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function xm() {
  return [];
}
var Fm = Object.prototype, Dm = Fm.propertyIsEnumerable, oi = Object.getOwnPropertySymbols, zm = oi ? function(e) {
  return e == null ? [] : (e = Object(e), Mm(oi(e), function(t) {
    return Dm.call(e, t);
  }));
} : xm;
function Bm(e, t, n) {
  var r = t(e);
  return kt(e) ? r : lu(r, n(e));
}
function ai(e) {
  return Bm(e, iu, zm);
}
var wa = An(Ut, "DataView"), Ea = An(Ut, "Promise"), Sa = An(Ut, "Set"), si = "[object Map]", jm = "[object Object]", ii = "[object Promise]", li = "[object Set]", ui = "[object WeakMap]", ci = "[object DataView]", Vm = In(wa), Um = In(kr), Wm = In(Ea), Hm = In(Sa), Km = In(ba), un = nr;
(wa && un(new wa(new ArrayBuffer(1))) != ci || kr && un(new kr()) != si || Ea && un(Ea.resolve()) != ii || Sa && un(new Sa()) != li || ba && un(new ba()) != ui) && (un = function(e) {
  var t = nr(e), n = t == jm ? e.constructor : void 0, r = n ? In(n) : "";
  if (r)
    switch (r) {
      case Vm:
        return ci;
      case Um:
        return si;
      case Wm:
        return ii;
      case Hm:
        return li;
      case Km:
        return ui;
    }
  return t;
});
var di = Ut.Uint8Array, Gm = "__lodash_hash_undefined__";
function Ym(e) {
  return this.__data__.set(e, Gm), this;
}
function Zm(e) {
  return this.__data__.has(e);
}
function po(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new on(); ++t < n; )
    this.add(e[t]);
}
po.prototype.add = po.prototype.push = Ym;
po.prototype.has = Zm;
function qm(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Xm(e, t) {
  return e.has(t);
}
var Jm = 1, Qm = 2;
function uu(e, t, n, r, o, a) {
  var s = n & Jm, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var p = -1, m = !0, g = n & Qm ? new po() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var v = e[p], h = t[p];
    if (r)
      var E = s ? r(h, v, p, t, e, a) : r(v, h, p, e, t, a);
    if (E !== void 0) {
      if (E)
        continue;
      m = !1;
      break;
    }
    if (g) {
      if (!qm(t, function(d, S) {
        if (!Xm(g, S) && (v === d || o(v, d, n, r, a)))
          return g.push(S);
      })) {
        m = !1;
        break;
      }
    } else if (!(v === h || o(v, h, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
function eg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function tg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ng = 1, rg = 2, og = "[object Boolean]", ag = "[object Date]", sg = "[object Error]", ig = "[object Map]", lg = "[object Number]", ug = "[object RegExp]", cg = "[object Set]", dg = "[object String]", fg = "[object Symbol]", pg = "[object ArrayBuffer]", mg = "[object DataView]", fi = Bt ? Bt.prototype : void 0, na = fi ? fi.valueOf : void 0;
function gg(e, t, n, r, o, a, s) {
  switch (n) {
    case mg:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case pg:
      return !(e.byteLength != t.byteLength || !a(new di(e), new di(t)));
    case og:
    case ag:
    case lg:
      return Qa(+e, +t);
    case sg:
      return e.name == t.name && e.message == t.message;
    case ug:
    case dg:
      return e == t + "";
    case ig:
      var i = eg;
    case cg:
      var l = r & ng;
      if (i || (i = tg), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= rg, s.set(e, t);
      var c = uu(i(e), i(t), r, o, a, s);
      return s.delete(e), c;
    case fg:
      if (na)
        return na.call(e) == na.call(t);
  }
  return !1;
}
var hg = 1, vg = Object.prototype, yg = vg.hasOwnProperty;
function bg(e, t, n, r, o, a) {
  var s = n & hg, i = ai(e), l = i.length, u = ai(t), c = u.length;
  if (l != c && !s)
    return !1;
  for (var p = l; p--; ) {
    var m = i[p];
    if (!(s ? m in t : yg.call(t, m)))
      return !1;
  }
  var g = a.get(e), v = a.get(t);
  if (g && v)
    return g == t && v == e;
  var h = !0;
  a.set(e, t), a.set(t, e);
  for (var E = s; ++p < l; ) {
    m = i[p];
    var d = e[m], S = t[m];
    if (r)
      var b = s ? r(S, d, m, t, e, a) : r(d, S, m, e, t, a);
    if (!(b === void 0 ? d === S || o(d, S, n, r, a) : b)) {
      h = !1;
      break;
    }
    E || (E = m == "constructor");
  }
  if (h && !E) {
    var w = e.constructor, C = t.constructor;
    w != C && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof C == "function" && C instanceof C) && (h = !1);
  }
  return a.delete(e), a.delete(t), h;
}
var _g = 1, pi = "[object Arguments]", mi = "[object Array]", Ur = "[object Object]", wg = Object.prototype, gi = wg.hasOwnProperty;
function Eg(e, t, n, r, o, a) {
  var s = kt(e), i = kt(t), l = s ? mi : un(e), u = i ? mi : un(t);
  l = l == pi ? Ur : l, u = u == pi ? Ur : u;
  var c = l == Ur, p = u == Ur, m = l == u;
  if (m && _a(e)) {
    if (!_a(t))
      return !1;
    s = !0, c = !1;
  }
  if (m && !c)
    return a || (a = new Qt()), s || su(e) ? uu(e, t, n, r, o, a) : gg(e, t, l, n, r, o, a);
  if (!(n & _g)) {
    var g = c && gi.call(e, "__wrapped__"), v = p && gi.call(t, "__wrapped__");
    if (g || v) {
      var h = g ? e.value() : e, E = v ? t.value() : t;
      return a || (a = new Qt()), o(h, E, n, r, a);
    }
  }
  return m ? (a || (a = new Qt()), bg(e, t, n, r, o, a)) : !1;
}
function Do(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Wn(e) && !Wn(t) ? e !== e && t !== t : Eg(e, t, n, r, Do, o);
}
var Sg = 1, Cg = 2;
function Tg(e, t, n, r) {
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
    var i = s[0], l = e[i], u = s[1];
    if (s[2]) {
      if (l === void 0 && !(i in e))
        return !1;
    } else {
      var c = new Qt(), p;
      if (!(p === void 0 ? Do(u, l, Sg | Cg, r, c) : p))
        return !1;
    }
  }
  return !0;
}
function cu(e) {
  return e === e && !vn(e);
}
function kg(e) {
  for (var t = iu(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, cu(o)];
  }
  return t;
}
function du(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Og(e) {
  var t = kg(e);
  return t.length == 1 && t[0][2] ? du(t[0][0], t[0][1]) : function(n) {
    return n === e || Tg(n, e, t);
  };
}
function Pg(e, t) {
  return e != null && t in Object(e);
}
function Lg(e, t, n) {
  t = Fo(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Nr(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && es(o) && Ja(s, o) && (kt(e) || ts(e)));
}
function fu(e, t) {
  return e != null && Lg(e, t, Pg);
}
var Ig = 1, Ag = 2;
function Rg(e, t) {
  return ns(e) && cu(t) ? du(Nr(e), t) : function(n) {
    var r = pn(n, e);
    return r === void 0 && r === t ? fu(n, e) : Do(t, r, Ig | Ag);
  };
}
function $g(e) {
  return function(t) {
    return t?.[e];
  };
}
function Ng(e) {
  return function(t) {
    return os(t, e);
  };
}
function Mg(e) {
  return ns(e) ? $g(Nr(e)) : Ng(e);
}
function xg(e) {
  return typeof e == "function" ? e : e == null ? tu : typeof e == "object" ? kt(e) ? Rg(e[0], e[1]) : Og(e) : Mg(e);
}
var ra = function() {
  return Ut.Date.now();
}, Fg = "Expected a function", Dg = Math.max, zg = Math.min;
function Bg(e, t, n) {
  var r, o, a, s, i, l, u = 0, c = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Fg);
  t = Zs(t) || 0, vn(n) && (c = !!n.leading, p = "maxWait" in n, a = p ? Dg(Zs(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function g(O) {
    var k = r, F = o;
    return r = o = void 0, u = O, s = e.apply(F, k), s;
  }
  function v(O) {
    return u = O, i = setTimeout(d, t), c ? g(O) : s;
  }
  function h(O) {
    var k = O - l, F = O - u, M = t - k;
    return p ? zg(M, a - F) : M;
  }
  function E(O) {
    var k = O - l, F = O - u;
    return l === void 0 || k >= t || k < 0 || p && F >= a;
  }
  function d() {
    var O = ra();
    if (E(O))
      return S(O);
    i = setTimeout(d, h(O));
  }
  function S(O) {
    return i = void 0, m && r ? g(O) : (r = o = void 0, s);
  }
  function b() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function w() {
    return i === void 0 ? s : S(ra());
  }
  function C() {
    var O = ra(), k = E(O);
    if (r = arguments, o = this, l = O, k) {
      if (i === void 0)
        return v(l);
      if (p)
        return clearTimeout(i), i = setTimeout(d, t), g(l);
    }
    return i === void 0 && (i = setTimeout(d, t)), s;
  }
  return C.cancel = b, C.flush = w, C;
}
function jg(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Kf(e, xg(t), o);
}
function mo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function hr(e, t) {
  return Do(e, t);
}
function zo(e) {
  return e == null;
}
function Vg(e) {
  return e === void 0;
}
function Ug(e, t, n, r) {
  if (!vn(e))
    return e;
  t = Fo(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = Nr(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var c = i[l];
      u = void 0, u === void 0 && (u = vn(c) ? c : Ja(t[o + 1]) ? [] : {});
    }
    Jf(i, l, u), i = i[l];
  }
  return e;
}
function Wg(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = os(e, s);
    n(i, s) && Ug(a, Fo(s, e), i);
  }
  return a;
}
function Hg(e, t) {
  return Wg(e, t, function(n, r) {
    return fu(e, r);
  });
}
var Kg = Pm(function(e, t) {
  return e == null ? {} : Hg(e, t);
});
const Tn = (e) => e === void 0, go = (e) => typeof e == "boolean", Ve = (e) => typeof e == "number", Ct = (e) => typeof Element > "u" ? !1 : e instanceof Element, Gg = (e) => nt(e) ? !Number.isNaN(Number(e)) : !1;
var Yg = Object.defineProperty, Zg = Object.defineProperties, qg = Object.getOwnPropertyDescriptors, hi = Object.getOwnPropertySymbols, Xg = Object.prototype.hasOwnProperty, Jg = Object.prototype.propertyIsEnumerable, vi = (e, t, n) => t in e ? Yg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Qg = (e, t) => {
  for (var n in t || (t = {}))
    Xg.call(t, n) && vi(e, n, t[n]);
  if (hi)
    for (var n of hi(t))
      Jg.call(t, n) && vi(e, n, t[n]);
  return e;
}, eh = (e, t) => Zg(e, qg(t));
function th(e, t) {
  var n;
  const r = mn();
  return Wl(() => {
    r.value = e();
  }, eh(Qg({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Ya(r);
}
var yi;
const Fe = typeof window < "u", nh = (e) => typeof e == "string", pu = () => {
}, Ca = Fe && ((yi = window?.navigator) == null ? void 0 : yi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function as(e) {
  return typeof e == "function" ? e() : f(e);
}
function rh(e) {
  return e;
}
function Mr(e) {
  return Hl() ? (Kl(e), !0) : !1;
}
function oh(e, t = !0) {
  Qe() ? xe(e) : t ? e() : Ae(e);
}
function mu(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = D(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    o.value = !1, s();
  }
  function l(...u) {
    s(), o.value = !0, a = setTimeout(() => {
      o.value = !1, a = null, e(...u);
    }, as(t));
  }
  return r && (o.value = !0, Fe && l()), Mr(i), {
    isPending: Ya(o),
    start: l,
    stop: i
  };
}
function Yt(e) {
  var t;
  const n = as(e);
  return (t = n?.$el) != null ? t : n;
}
const Bo = Fe ? window : void 0;
function Tt(...e) {
  let t, n, r, o;
  if (nh(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Bo) : [t, n, r, o] = e, !t)
    return pu;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((c) => c()), a.length = 0;
  }, i = (c, p, m, g) => (c.addEventListener(p, m, g), () => c.removeEventListener(p, m, g)), l = ue(() => [Yt(t), as(o)], ([c, p]) => {
    s(), c && a.push(...n.flatMap((m) => r.map((g) => i(c, m, g, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return Mr(u), u;
}
let bi = !1;
function ah(e, t, n = {}) {
  const { window: r = Bo, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Ca && !bi && (bi = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", pu)));
  let i = !0;
  const l = (m) => o.some((g) => {
    if (typeof g == "string")
      return Array.from(r.document.querySelectorAll(g)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = Yt(g);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), c = [
    Tt(r, "click", (m) => {
      const g = Yt(e);
      if (!(!g || g === m.target || m.composedPath().includes(g))) {
        if (m.detail === 0 && (i = !l(m)), !i) {
          i = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    Tt(r, "pointerdown", (m) => {
      const g = Yt(e);
      g && (i = !m.composedPath().includes(g) && !l(m));
    }, { passive: !0 }),
    s && Tt(r, "blur", (m) => {
      var g;
      const v = Yt(e);
      ((g = r.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !v?.contains(r.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => c.forEach((m) => m());
}
function gu(e, t = !1) {
  const n = D(), r = () => n.value = !!e();
  return r(), oh(r, t), n;
}
const _i = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wi = "__vueuse_ssr_handlers__";
_i[wi] = _i[wi] || {};
var Ei = Object.getOwnPropertySymbols, sh = Object.prototype.hasOwnProperty, ih = Object.prototype.propertyIsEnumerable, lh = (e, t) => {
  var n = {};
  for (var r in e)
    sh.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Ei)
    for (var r of Ei(e))
      t.indexOf(r) < 0 && ih.call(e, r) && (n[r] = e[r]);
  return n;
};
function $t(e, t, n = {}) {
  const r = n, { window: o = Bo } = r, a = lh(r, ["window"]);
  let s;
  const i = gu(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = ue(() => Yt(e), (p) => {
    l(), i.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), u();
  };
  return Mr(c), {
    isSupported: i,
    stop: c
  };
}
var Si = Object.getOwnPropertySymbols, uh = Object.prototype.hasOwnProperty, ch = Object.prototype.propertyIsEnumerable, dh = (e, t) => {
  var n = {};
  for (var r in e)
    uh.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Si)
    for (var r of Si(e))
      t.indexOf(r) < 0 && ch.call(e, r) && (n[r] = e[r]);
  return n;
};
function fh(e, t, n = {}) {
  const r = n, { window: o = Bo } = r, a = dh(r, ["window"]);
  let s;
  const i = gu(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = ue(() => Yt(e), (p) => {
    l(), i.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), c = () => {
    l(), u();
  };
  return Mr(c), {
    isSupported: i,
    stop: c
  };
}
var Ci;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ci || (Ci = {}));
var ph = Object.defineProperty, Ti = Object.getOwnPropertySymbols, mh = Object.prototype.hasOwnProperty, gh = Object.prototype.propertyIsEnumerable, ki = (e, t, n) => t in e ? ph(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, hh = (e, t) => {
  for (var n in t || (t = {}))
    mh.call(t, n) && ki(e, n, t[n]);
  if (Ti)
    for (var n of Ti(t))
      gh.call(t, n) && ki(e, n, t[n]);
  return e;
};
const vh = {
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
hh({
  linear: rh
}, vh);
class yh extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function bh(e, t) {
  throw new yh(`[${e}] ${t}`);
}
const Oi = {
  current: 0
}, Pi = D(0), hu = 2e3, Li = Symbol("elZIndexContextKey"), vu = Symbol("zIndexContextKey"), yu = (e) => {
  const t = Qe() ? Ee(Li, Oi) : Oi, n = e || (Qe() ? Ee(vu, void 0) : void 0), r = P(() => {
    const s = f(n);
    return Ve(s) ? s : hu;
  }), o = P(() => r.value + Pi.value), a = () => (t.current++, Pi.value = t.current, o.value);
  return !Fe && Ee(Li), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var _h = {
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
const wh = (e) => (t, n) => Eh(t, n, f(e)), Eh = (e, t, n) => pn(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Sh = (e) => {
  const t = P(() => f(e).name), n = gn(e) ? e : D(e);
  return {
    lang: t,
    locale: n,
    t: wh(e)
  };
}, bu = Symbol("localeContextKey"), _u = (e) => {
  const t = e || Ee(bu, D());
  return Sh(P(() => t.value || _h));
}, wu = "__epPropKey", re = (e) => e, Ch = (e) => tt(e) && !!e[wu], jo = (e, t) => {
  if (!tt(e) || Ch(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let c = !1, p = [];
      if (n && (p = Array.from(n), Ws(e, "default") && p.push(o), c || (c = p.includes(u))), s && (c || (c = s(u))), !c && p.length > 0) {
        const m = [...new Set(p)].map((g) => JSON.stringify(g)).join(", ");
        wd(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return c;
    } : void 0,
    [wu]: !0
  };
  return Ws(e, "default") && (l.default = o), l;
}, ke = (e) => mo(Object.entries(e).map(([t, n]) => [
  t,
  jo(n, t)
])), Eu = ["", "default", "small", "large"], ss = jo({
  type: String,
  values: Eu,
  required: !1
}), Su = Symbol("size"), Th = () => {
  const e = Ee(Su, {});
  return P(() => f(e.size) || "");
}, Cu = Symbol("emptyValuesContextKey"), kh = ["", void 0, null], Oh = void 0, Tu = ke({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => je(e) ? !e() : !e
  }
}), Ph = (e, t) => {
  const n = Qe() ? Ee(Cu, D({})) : D({}), r = P(() => e.emptyValues || n.value.emptyValues || kh), o = P(() => je(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : je(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Oh), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Ii = (e) => Object.keys(e), ho = D();
function ku(e, t = void 0) {
  return Qe() ? Ee(ql, ho) : ho;
}
function Ou(e, t) {
  const n = ku(), r = Me(e, P(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || to;
  })), o = _u(P(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = yu(P(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || hu;
  })), s = P(() => {
    var i;
    return f(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return Pu(P(() => f(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const Pu = (e, t, n = !1) => {
  var r;
  const o = !!Qe(), a = o ? ku() : void 0, s = (r = void 0) != null ? r : o ? zt : void 0;
  if (!s)
    return;
  const i = P(() => {
    const l = f(e);
    return a?.value ? Lh(a.value, l) : l;
  });
  return s(ql, i), s(bu, P(() => i.value.locale)), s(Xl, P(() => i.value.namespace)), s(vu, P(() => i.value.zIndex)), s(Su, {
    size: P(() => i.value.size || "")
  }), s(Cu, P(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !ho.value) && (ho.value = i.value), i;
}, Lh = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ii(e), ...Ii(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, Gt = "update:modelValue", vo = "change", Ai = "input";
var Pe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function Or(e, t = "px") {
  if (!e)
    return "";
  if (Ve(e) || Gg(e))
    return `${e}${t}`;
  if (nt(e))
    return e;
}
function Ih(e, t) {
  if (!Fe)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const o = t.offsetTop + n.reduce((l, u) => l + u.offsetTop, 0), a = o + t.offsetHeight, s = e.scrollTop, i = s + e.clientHeight;
  o < s ? e.scrollTop = o : a > i && (e.scrollTop = a - e.clientHeight);
}
const Pt = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Lu = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), is = (e) => (e.install = Cr, e), Ah = ke({
  size: {
    type: re([Number, String])
  },
  color: {
    type: String
  }
}), Rh = q({
  name: "ElIcon",
  inheritAttrs: !1
}), $h = /* @__PURE__ */ q({
  ...Rh,
  props: Ah,
  setup(e) {
    const t = e, n = Me("icon"), r = P(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Tn(o) ? void 0 : Or(o),
        "--color": a
      };
    });
    return (o, a) => (A(), z("i", hn({
      class: f(n).b(),
      style: f(r)
    }, o.$attrs), [
      ie(o.$slots, "default")
    ], 16));
  }
});
var Nh = /* @__PURE__ */ Pe($h, [["__file", "icon.vue"]]);
const ct = Pt(Nh);
/*! Element Plus Icons Vue v2.3.1 */
var Mh = /* @__PURE__ */ q({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (A(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      L("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), xh = Mh, Fh = /* @__PURE__ */ q({
  name: "Check",
  __name: "check",
  setup(e) {
    return (t, n) => (A(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      L("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Dh = Fh, zh = /* @__PURE__ */ q({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (A(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      L("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      L("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Iu = zh, Bh = /* @__PURE__ */ q({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (A(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      L("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), jh = Bh, Vh = /* @__PURE__ */ q({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (A(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      L("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      L("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Vo = Vh, Uh = /* @__PURE__ */ q({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (A(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      L("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Pr = Uh, Wh = /* @__PURE__ */ q({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (A(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      L("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      L("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), Hh = Wh, Kh = /* @__PURE__ */ q({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (A(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      L("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Gh = Kh, Yh = /* @__PURE__ */ q({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (A(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      L("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Zh = Yh, qh = /* @__PURE__ */ q({
  name: "PictureFilled",
  __name: "picture-filled",
  setup(e) {
    return (t, n) => (A(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      L("path", {
        fill: "currentColor",
        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
      })
    ]));
  }
}), Xh = qh, Jh = /* @__PURE__ */ q({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (A(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      L("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Qh = Jh, ev = /* @__PURE__ */ q({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (A(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      L("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), tv = ev, nv = /* @__PURE__ */ q({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (A(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      L("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Au = nv;
const Hn = re([
  String,
  Object,
  Function
]), rv = {
  Close: Pr
}, ov = {
  Close: Pr
}, yo = {
  success: Qh,
  warning: Au,
  error: jh,
  info: Gh
}, Ru = {
  validating: Zh,
  success: Iu,
  error: Vo
}, av = () => Fe && /firefox/i.test(window.navigator.userAgent);
let et;
const sv = {
  height: "0",
  visibility: "hidden",
  overflow: av() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, iv = [
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
function lv(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: iv.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function Ri(e, t = 1, n) {
  var r;
  et || (et = document.createElement("textarea"), document.body.appendChild(et));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = lv(e);
  i.forEach(([p, m]) => et?.style.setProperty(p, m)), Object.entries(sv).forEach(([p, m]) => et?.style.setProperty(p, m, "important")), et.value = e.value || e.placeholder || "";
  let l = et.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), et.value = "";
  const c = et.scrollHeight - o;
  if (Ve(t)) {
    let p = c * t;
    s === "border-box" && (p = p + o + a), l = Math.max(p, l), u.minHeight = `${p}px`;
  }
  if (Ve(n)) {
    let p = c * n;
    s === "border-box" && (p = p + o + a), l = Math.min(p, l);
  }
  return u.height = `${l}px`, (r = et.parentNode) == null || r.removeChild(et), et = void 0, u;
}
const $u = (e) => e, uv = ke({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), xr = (e) => Kg(uv, e), cv = ke({
  id: {
    type: String,
    default: void 0
  },
  size: ss,
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
    type: Hn
  },
  prefixIcon: {
    type: Hn
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
    default: () => $u({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...xr(["ariaLabel"])
}), dv = {
  [Gt]: (e) => nt(e),
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
}, fv = ["class", "style"], pv = /^on[A-Z]/, mv = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = P(() => (n?.value || []).concat(fv)), o = Qe();
  return o ? P(() => {
    var a;
    return mo(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && pv.test(s))));
  }) : P(() => ({}));
}, ls = Symbol("formContextKey"), bo = Symbol("formItemContextKey"), $i = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, gv = Symbol("elIdInjection"), Nu = () => Qe() ? Ee(gv, $i) : $i, Uo = (e) => {
  const t = Nu(), n = Xa();
  return th(() => f(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Mu = () => {
  const e = Ee(ls, void 0), t = Ee(bo, void 0);
  return {
    form: e,
    formItem: t
  };
}, xu = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = D(!1)), r || (r = D(!1));
  const o = D();
  let a;
  const s = P(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return xe(() => {
    a = ue([Nt(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : Uo().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), Za(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, Fu = (e) => {
  const t = Qe();
  return P(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, us = (e, t = {}) => {
  const n = D(void 0), r = t.prop ? n : Fu("size"), o = t.global ? n : Th(), a = t.form ? { size: void 0 } : Ee(ls, void 0), s = t.formItem ? { size: void 0 } : Ee(bo, void 0);
  return P(() => r.value || f(e) || s?.size || a?.size || o.value || "");
}, hv = (e) => {
  const t = Fu("disabled"), n = Ee(ls, void 0);
  return P(() => t.value || f(e) || n?.disabled || !1);
};
function Du(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Qe(), { emit: s } = a, i = mn(), l = D(!1), u = (m) => {
    je(t) && t(m) || l.value || (l.value = !0, s("focus", m), n?.());
  }, c = (m) => {
    var g;
    je(r) && r(m) || m.relatedTarget && ((g = i.value) != null && g.contains(m.relatedTarget)) || (l.value = !1, s("blur", m), o?.());
  }, p = () => {
    var m, g;
    (m = i.value) != null && m.contains(document.activeElement) && i.value !== document.activeElement || (g = e.value) == null || g.focus();
  };
  return ue(i, (m) => {
    m && m.setAttribute("tabindex", "-1");
  }), Tt(i, "focus", u, !0), Tt(i, "blur", c, !0), Tt(i, "click", p, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: c
  };
}
const vv = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function zu({
  afterComposition: e,
  emit: t
}) {
  const n = D(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, c = u[u.length - 1] || "";
    n.value = !vv(c);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Ae(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? a(i) : o(i);
    },
    handleCompositionStart: r,
    handleCompositionUpdate: o,
    handleCompositionEnd: a
  };
}
function yv(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: o, selectionEnd: a, value: s } = e.value;
    if (o == null || a == null)
      return;
    const i = s.slice(0, Math.max(0, o)), l = s.slice(Math.max(0, a));
    t = {
      selectionStart: o,
      selectionEnd: a,
      value: s,
      beforeTxt: i,
      afterTxt: l
    };
  }
  function r() {
    if (e.value == null || t == null)
      return;
    const { value: o } = e.value, { beforeTxt: a, afterTxt: s, selectionStart: i } = t;
    if (a == null || s == null || i == null)
      return;
    let l = o.length;
    if (o.endsWith(s))
      l = o.length - s.length;
    else if (o.startsWith(a))
      l = a.length;
    else {
      const u = a[i - 1], c = o.indexOf(u, i - 1);
      c !== -1 && (l = c + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, r];
}
const bv = "ElInput", _v = q({
  name: bv,
  inheritAttrs: !1
}), wv = /* @__PURE__ */ q({
  ..._v,
  props: cv,
  emits: dv,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Ed(), a = mv(), s = Sd(), i = P(() => [
      r.type === "textarea" ? h.b() : v.b(),
      v.m(m.value),
      v.is("disabled", g.value),
      v.is("exceed", Ye.value),
      {
        [v.b("group")]: s.prepend || s.append,
        [v.m("prefix")]: s.prefix || r.prefixIcon,
        [v.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [v.bm("suffix", "password-clear")]: ge.value && he.value,
        [v.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = P(() => [
      v.e("wrapper"),
      v.is("focus", F.value)
    ]), { form: u, formItem: c } = Mu(), { inputId: p } = xu(r, {
      formItemContext: c
    }), m = us(), g = hv(), v = Me("input"), h = Me("textarea"), E = mn(), d = mn(), S = D(!1), b = D(!1), w = D(), C = mn(r.inputStyle), O = P(() => E.value || d.value), { wrapperRef: k, isFocused: F, handleFocus: M, handleBlur: I } = Du(O, {
      beforeFocus() {
        return g.value;
      },
      afterBlur() {
        var y;
        r.validateEvent && ((y = c?.validate) == null || y.call(c, "blur").catch(($) => void 0));
      }
    }), V = P(() => {
      var y;
      return (y = u?.statusIcon) != null ? y : !1;
    }), U = P(() => c?.validateState || ""), te = P(() => U.value && Ru[U.value]), pe = P(() => b.value ? tv : Hh), oe = P(() => [
      o.style
    ]), ce = P(() => [
      r.inputStyle,
      C.value,
      { resize: r.resize }
    ]), j = P(() => zo(r.modelValue) ? "" : String(r.modelValue)), ge = P(() => r.clearable && !g.value && !r.readonly && !!j.value && (F.value || S.value)), he = P(() => r.showPassword && !g.value && !!j.value && (!!j.value || F.value)), Le = P(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !g.value && !r.readonly && !r.showPassword), De = P(() => j.value.length), Ye = P(() => !!Le.value && De.value > Number(r.maxlength)), K = P(() => !!s.suffix || !!r.suffixIcon || ge.value || r.showPassword || Le.value || !!U.value && V.value), [Q, me] = yv(E);
    $t(d, (y) => {
      if (ae(), !Le.value || r.resize !== "both")
        return;
      const $ = y[0], { width: de } = $.contentRect;
      w.value = {
        right: `calc(100% - ${de + 15 + 6}px)`
      };
    });
    const Se = () => {
      const { type: y, autosize: $ } = r;
      if (!(!Fe || y !== "textarea" || !d.value))
        if ($) {
          const de = tt($) ? $.minRows : void 0, _e = tt($) ? $.maxRows : void 0, Ze = Ri(d.value, de, _e);
          C.value = {
            overflowY: "hidden",
            ...Ze
          }, Ae(() => {
            d.value.offsetHeight, C.value = Ze;
          });
        } else
          C.value = {
            minHeight: Ri(d.value).minHeight
          };
    }, ae = ((y) => {
      let $ = !1;
      return () => {
        var de;
        if ($ || !r.autosize)
          return;
        ((de = d.value) == null ? void 0 : de.offsetParent) === null || (y(), $ = !0);
      };
    })(Se), ze = () => {
      const y = O.value, $ = r.formatter ? r.formatter(j.value) : j.value;
      !y || y.value === $ || (y.value = $);
    }, le = async (y) => {
      Q();
      let { value: $ } = y.target;
      if (r.formatter && r.parser && ($ = r.parser($)), !_t.value) {
        if ($ === j.value) {
          ze();
          return;
        }
        n(Gt, $), n(Ai, $), await Ae(), ze(), me();
      }
    }, He = (y) => {
      let { value: $ } = y.target;
      r.formatter && r.parser && ($ = r.parser($)), n(vo, $);
    }, {
      isComposing: _t,
      handleCompositionStart: at,
      handleCompositionUpdate: st,
      handleCompositionEnd: it
    } = zu({ emit: n, afterComposition: le }), ft = () => {
      Q(), b.value = !b.value, setTimeout(me);
    }, Lt = () => {
      var y;
      return (y = O.value) == null ? void 0 : y.focus();
    }, _ = () => {
      var y;
      return (y = O.value) == null ? void 0 : y.blur();
    }, T = (y) => {
      S.value = !1, n("mouseleave", y);
    }, N = (y) => {
      S.value = !0, n("mouseenter", y);
    }, Z = (y) => {
      n("keydown", y);
    }, ve = () => {
      var y;
      (y = O.value) == null || y.select();
    }, se = () => {
      n(Gt, ""), n(vo, ""), n("clear"), n(Ai, "");
    };
    return ue(() => r.modelValue, () => {
      var y;
      Ae(() => Se()), r.validateEvent && ((y = c?.validate) == null || y.call(c, "change").catch(($) => void 0));
    }), ue(j, () => ze()), ue(() => r.type, async () => {
      await Ae(), ze(), Se();
    }), xe(() => {
      !r.formatter && r.parser, ze(), Ae(Se);
    }), t({
      input: E,
      textarea: d,
      ref: O,
      textareaStyle: ce,
      autosize: Nt(r, "autosize"),
      isComposing: _t,
      focus: Lt,
      blur: _,
      select: ve,
      clear: se,
      resizeTextarea: Se
    }), (y, $) => (A(), z("div", {
      class: B([
        f(i),
        {
          [f(v).bm("group", "append")]: y.$slots.append,
          [f(v).bm("group", "prepend")]: y.$slots.prepend
        }
      ]),
      style: Re(f(oe)),
      onMouseenter: N,
      onMouseleave: T
    }, [
      Y(" input "),
      y.type !== "textarea" ? (A(), z(Ue, { key: 0 }, [
        Y(" prepend slot "),
        y.$slots.prepend ? (A(), z("div", {
          key: 0,
          class: B(f(v).be("group", "prepend"))
        }, [
          ie(y.$slots, "prepend")
        ], 2)) : Y("v-if", !0),
        L("div", {
          ref_key: "wrapperRef",
          ref: k,
          class: B(f(l))
        }, [
          Y(" prefix slot "),
          y.$slots.prefix || y.prefixIcon ? (A(), z("span", {
            key: 0,
            class: B(f(v).e("prefix"))
          }, [
            L("span", {
              class: B(f(v).e("prefix-inner"))
            }, [
              ie(y.$slots, "prefix"),
              y.prefixIcon ? (A(), ee(f(ct), {
                key: 0,
                class: B(f(v).e("icon"))
              }, {
                default: ne(() => [
                  (A(), ee(mt(y.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 2)) : Y("v-if", !0),
          L("input", hn({
            id: f(p),
            ref_key: "input",
            ref: E,
            class: f(v).e("inner")
          }, f(a), {
            minlength: y.minlength,
            maxlength: y.maxlength,
            type: y.showPassword ? b.value ? "text" : "password" : y.type,
            disabled: f(g),
            readonly: y.readonly,
            autocomplete: y.autocomplete,
            tabindex: y.tabindex,
            "aria-label": y.ariaLabel,
            placeholder: y.placeholder,
            style: y.inputStyle,
            form: y.form,
            autofocus: y.autofocus,
            role: y.containerRole,
            onCompositionstart: f(at),
            onCompositionupdate: f(st),
            onCompositionend: f(it),
            onInput: le,
            onChange: He,
            onKeydown: Z
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          Y(" suffix slot "),
          f(K) ? (A(), z("span", {
            key: 1,
            class: B(f(v).e("suffix"))
          }, [
            L("span", {
              class: B(f(v).e("suffix-inner"))
            }, [
              !f(ge) || !f(he) || !f(Le) ? (A(), z(Ue, { key: 0 }, [
                ie(y.$slots, "suffix"),
                y.suffixIcon ? (A(), ee(f(ct), {
                  key: 0,
                  class: B(f(v).e("icon"))
                }, {
                  default: ne(() => [
                    (A(), ee(mt(y.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Y("v-if", !0)
              ], 64)) : Y("v-if", !0),
              f(ge) ? (A(), ee(f(ct), {
                key: 1,
                class: B([f(v).e("icon"), f(v).e("clear")]),
                onMousedown: Je(f(Cr), ["prevent"]),
                onClick: se
              }, {
                default: ne(() => [
                  W(f(Vo))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Y("v-if", !0),
              f(he) ? (A(), ee(f(ct), {
                key: 2,
                class: B([f(v).e("icon"), f(v).e("password")]),
                onClick: ft
              }, {
                default: ne(() => [
                  (A(), ee(mt(f(pe))))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0),
              f(Le) ? (A(), z("span", {
                key: 3,
                class: B(f(v).e("count"))
              }, [
                L("span", {
                  class: B(f(v).e("count-inner"))
                }, X(f(De)) + " / " + X(y.maxlength), 3)
              ], 2)) : Y("v-if", !0),
              f(U) && f(te) && f(V) ? (A(), ee(f(ct), {
                key: 4,
                class: B([
                  f(v).e("icon"),
                  f(v).e("validateIcon"),
                  f(v).is("loading", f(U) === "validating")
                ])
              }, {
                default: ne(() => [
                  (A(), ee(mt(f(te))))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 2)) : Y("v-if", !0)
        ], 2),
        Y(" append slot "),
        y.$slots.append ? (A(), z("div", {
          key: 1,
          class: B(f(v).be("group", "append"))
        }, [
          ie(y.$slots, "append")
        ], 2)) : Y("v-if", !0)
      ], 64)) : (A(), z(Ue, { key: 1 }, [
        Y(" textarea "),
        L("textarea", hn({
          id: f(p),
          ref_key: "textarea",
          ref: d,
          class: [f(h).e("inner"), f(v).is("focus", f(F))]
        }, f(a), {
          minlength: y.minlength,
          maxlength: y.maxlength,
          tabindex: y.tabindex,
          disabled: f(g),
          readonly: y.readonly,
          autocomplete: y.autocomplete,
          style: f(ce),
          "aria-label": y.ariaLabel,
          placeholder: y.placeholder,
          form: y.form,
          autofocus: y.autofocus,
          rows: y.rows,
          role: y.containerRole,
          onCompositionstart: f(at),
          onCompositionupdate: f(st),
          onCompositionend: f(it),
          onInput: le,
          onFocus: f(M),
          onBlur: f(I),
          onChange: He,
          onKeydown: Z
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        f(Le) ? (A(), z("span", {
          key: 0,
          style: Re(w.value),
          class: B(f(v).e("count"))
        }, X(f(De)) + " / " + X(y.maxlength), 7)) : Y("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Ev = /* @__PURE__ */ Pe(wv, [["__file", "input.vue"]]);
const Bu = Pt(Ev), Nn = 4, Sv = {
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
}, Cv = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), cs = Symbol("scrollbarContextKey"), Tv = ke({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), kv = "Thumb", Ov = /* @__PURE__ */ q({
  __name: "thumb",
  props: Tv,
  setup(e) {
    const t = e, n = Ee(cs), r = Me("scrollbar");
    n || bh(kv, "can not inject scrollbar context");
    const o = D(), a = D(), s = D({}), i = D(!1);
    let l = !1, u = !1, c = Fe ? document.onselectstart : null;
    const p = P(() => Sv[t.vertical ? "vertical" : "horizontal"]), m = P(() => Cv({
      size: t.size,
      move: t.move,
      bar: p.value
    })), g = P(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), v = (O) => {
      var k;
      if (O.stopPropagation(), O.ctrlKey || [1, 2].includes(O.button))
        return;
      (k = window.getSelection()) == null || k.removeAllRanges(), E(O);
      const F = O.currentTarget;
      F && (s.value[p.value.axis] = F[p.value.offset] - (O[p.value.client] - F.getBoundingClientRect()[p.value.direction]));
    }, h = (O) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const k = Math.abs(O.target.getBoundingClientRect()[p.value.direction] - O[p.value.client]), F = a.value[p.value.offset] / 2, M = (k - F) * 100 * g.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = M * n.wrapElement[p.value.scrollSize] / 100;
    }, E = (O) => {
      O.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", S), c = document.onselectstart, document.onselectstart = () => !1;
    }, d = (O) => {
      if (!o.value || !a.value || l === !1)
        return;
      const k = s.value[p.value.axis];
      if (!k)
        return;
      const F = (o.value.getBoundingClientRect()[p.value.direction] - O[p.value.client]) * -1, M = a.value[p.value.offset] - k, I = (F - M) * 100 * g.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = I * n.wrapElement[p.value.scrollSize] / 100;
    }, S = () => {
      l = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", S), C(), u && (i.value = !1);
    }, b = () => {
      u = !1, i.value = !!t.size;
    }, w = () => {
      u = !0, i.value = l;
    };
    Vt(() => {
      C(), document.removeEventListener("mouseup", S);
    });
    const C = () => {
      document.onselectstart !== c && (document.onselectstart = c);
    };
    return Tt(Nt(n, "scrollbarElement"), "mousemove", b), Tt(Nt(n, "scrollbarElement"), "mouseleave", w), (O, k) => (A(), ee(tr, {
      name: f(r).b("fade"),
      persisted: ""
    }, {
      default: ne(() => [
        gt(L("div", {
          ref_key: "instance",
          ref: o,
          class: B([f(r).e("bar"), f(r).is(f(p).key)]),
          onMousedown: h
        }, [
          L("div", {
            ref_key: "thumb",
            ref: a,
            class: B(f(r).e("thumb")),
            style: Re(f(m)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [tn, O.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Ni = /* @__PURE__ */ Pe(Ov, [["__file", "thumb.vue"]]);
const Pv = ke({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Lv = /* @__PURE__ */ q({
  __name: "bar",
  props: Pv,
  setup(e, { expose: t }) {
    const n = e, r = Ee(cs), o = D(0), a = D(0), s = D(""), i = D(""), l = D(1), u = D(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const g = m.offsetHeight - Nn, v = m.offsetWidth - Nn;
          a.value = m.scrollTop * 100 / g * l.value, o.value = m.scrollLeft * 100 / v * u.value;
        }
      },
      update: () => {
        const m = r?.wrapElement;
        if (!m)
          return;
        const g = m.offsetHeight - Nn, v = m.offsetWidth - Nn, h = g ** 2 / m.scrollHeight, E = v ** 2 / m.scrollWidth, d = Math.max(h, n.minSize), S = Math.max(E, n.minSize);
        l.value = h / (g - h) / (d / (g - d)), u.value = E / (v - E) / (S / (v - S)), i.value = d + Nn < g ? `${d}px` : "", s.value = S + Nn < v ? `${S}px` : "";
      }
    }), (m, g) => (A(), z(Ue, null, [
      W(Ni, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      W(Ni, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Iv = /* @__PURE__ */ Pe(Lv, [["__file", "bar.vue"]]);
const Av = ke({
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
  ...xr(["ariaLabel", "ariaOrientation"])
}), Rv = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Ve)
}, $v = "ElScrollbar", Nv = q({
  name: $v
}), Mv = /* @__PURE__ */ q({
  ...Nv,
  props: Av,
  emits: Rv,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Me("scrollbar");
    let a, s, i = 0, l = 0;
    const u = D(), c = D(), p = D(), m = D(), g = P(() => {
      const C = {};
      return r.height && (C.height = Or(r.height)), r.maxHeight && (C.maxHeight = Or(r.maxHeight)), [r.wrapStyle, C];
    }), v = P(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), h = P(() => [o.e("view"), r.viewClass]), E = () => {
      var C;
      c.value && ((C = m.value) == null || C.handleScroll(c.value), i = c.value.scrollTop, l = c.value.scrollLeft, n("scroll", {
        scrollTop: c.value.scrollTop,
        scrollLeft: c.value.scrollLeft
      }));
    };
    function d(C, O) {
      tt(C) ? c.value.scrollTo(C) : Ve(C) && Ve(O) && c.value.scrollTo(C, O);
    }
    const S = (C) => {
      Ve(C) && (c.value.scrollTop = C);
    }, b = (C) => {
      Ve(C) && (c.value.scrollLeft = C);
    }, w = () => {
      var C;
      (C = m.value) == null || C.update();
    };
    return ue(() => r.noresize, (C) => {
      C ? (a?.(), s?.()) : ({ stop: a } = $t(p, w), s = Tt("resize", w));
    }, { immediate: !0 }), ue(() => [r.maxHeight, r.height], () => {
      r.native || Ae(() => {
        var C;
        w(), c.value && ((C = m.value) == null || C.handleScroll(c.value));
      });
    }), zt(cs, On({
      scrollbarElement: u,
      wrapElement: c
    })), Cd(() => {
      c.value && (c.value.scrollTop = i, c.value.scrollLeft = l);
    }), xe(() => {
      r.native || Ae(() => {
        w();
      });
    }), Td(() => w()), t({
      wrapRef: c,
      update: w,
      scrollTo: d,
      setScrollTop: S,
      setScrollLeft: b,
      handleScroll: E
    }), (C, O) => (A(), z("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: B(f(o).b())
    }, [
      L("div", {
        ref_key: "wrapRef",
        ref: c,
        class: B(f(v)),
        style: Re(f(g)),
        tabindex: C.tabindex,
        onScroll: E
      }, [
        (A(), ee(mt(C.tag), {
          id: C.id,
          ref_key: "resizeRef",
          ref: p,
          class: B(f(h)),
          style: Re(C.viewStyle),
          role: C.role,
          "aria-label": C.ariaLabel,
          "aria-orientation": C.ariaOrientation
        }, {
          default: ne(() => [
            ie(C.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      C.native ? Y("v-if", !0) : (A(), ee(Iv, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: C.always,
        "min-size": C.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var xv = /* @__PURE__ */ Pe(Mv, [["__file", "scrollbar.vue"]]);
const Fv = Pt(xv), ds = Symbol("popper"), ju = Symbol("popperContent"), Dv = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Vu = ke({
  role: {
    type: String,
    values: Dv,
    default: "tooltip"
  }
}), zv = q({
  name: "ElPopper",
  inheritAttrs: !1
}), Bv = /* @__PURE__ */ q({
  ...zv,
  props: Vu,
  setup(e, { expose: t }) {
    const n = e, r = D(), o = D(), a = D(), s = D(), i = P(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), zt(ds, l), (u, c) => ie(u.$slots, "default");
  }
});
var jv = /* @__PURE__ */ Pe(Bv, [["__file", "popper.vue"]]);
const Uu = ke({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Vv = q({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Uv = /* @__PURE__ */ q({
  ...Vv,
  props: Uu,
  setup(e, { expose: t }) {
    const n = e, r = Me("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = Ee(ju, void 0);
    return ue(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Vt(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (A(), z("span", {
      ref_key: "arrowRef",
      ref: a,
      class: B(f(r).e("arrow")),
      style: Re(f(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Wv = /* @__PURE__ */ Pe(Uv, [["__file", "arrow.vue"]]);
const Wu = ke({
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
}), Hu = Symbol("elForwardRef"), Hv = (e) => {
  zt(Hu, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Kv = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Ta = (e) => {
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
}, Gv = "ElOnlyChild", Yv = q({
  name: Gv,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = Ee(Hu), a = Kv((r = o?.setForwardRef) != null ? r : Cr);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = Ku(i);
      return l ? gt(kd(l, n), [[a]]) : null;
    };
  }
});
function Ku(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (tt(n))
      switch (n.type) {
        case Od:
          continue;
        case Gl:
        case "svg":
          return Mi(n);
        case Ue:
          return Ku(n.children);
        default:
          return n;
      }
    return Mi(n);
  }
  return null;
}
function Mi(e) {
  const t = Me("only-child");
  return W("span", {
    class: t.e("content")
  }, [e]);
}
const Zv = q({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), qv = /* @__PURE__ */ q({
  ...Zv,
  props: Wu,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = Ee(ds, void 0);
    Hv(o);
    const a = P(() => i.value ? n.id : void 0), s = P(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = P(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = P(() => i.value ? `${n.open}` : void 0);
    let u;
    const c = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return xe(() => {
      ue(() => n.virtualRef, (p) => {
        p && (o.value = Yt(p));
      }, {
        immediate: !0
      }), ue(o, (p, m) => {
        u?.(), u = void 0, Ct(p) && (c.forEach((g) => {
          var v;
          const h = n[g];
          h && (p.addEventListener(g.slice(2).toLowerCase(), h), (v = m?.removeEventListener) == null || v.call(m, g.slice(2).toLowerCase(), h));
        }), Ta(p) && (u = ue([a, s, i, l], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, h) => {
            zo(g[h]) ? p.removeAttribute(v) : p.setAttribute(v, g[h]);
          });
        }, { immediate: !0 }))), Ct(m) && Ta(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((g) => m.removeAttribute(g));
      }, {
        immediate: !0
      });
    }), Vt(() => {
      if (u?.(), u = void 0, o.value && Ct(o.value)) {
        const p = o.value;
        c.forEach((m) => {
          const g = n[m];
          g && p.removeEventListener(m.slice(2).toLowerCase(), g);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, m) => p.virtualTriggering ? Y("v-if", !0) : (A(), ee(f(Yv), hn({ key: 0 }, p.$attrs, {
      "aria-controls": f(a),
      "aria-describedby": f(s),
      "aria-expanded": f(l),
      "aria-haspopup": f(i)
    }), {
      default: ne(() => [
        ie(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Xv = /* @__PURE__ */ Pe(qv, [["__file", "trigger.vue"]]);
const oa = "focus-trap.focus-after-trapped", aa = "focus-trap.focus-after-released", Jv = "focus-trap.focusout-prevented", xi = {
  cancelable: !0,
  bubbles: !1
}, Qv = {
  cancelable: !0,
  bubbles: !1
}, Fi = "focusAfterTrapped", Di = "focusAfterReleased", e0 = Symbol("elFocusTrap"), fs = D(), Wo = D(0), ps = D(0);
let Wr = 0;
const Gu = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, zi = (e, t) => {
  for (const n of e)
    if (!t0(n, t))
      return n;
}, t0 = (e, t) => {
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
}, n0 = (e) => {
  const t = Gu(e), n = zi(t, e), r = zi(t.reverse(), e);
  return [n, r];
}, r0 = (e) => e instanceof HTMLInputElement && "select" in e, Ht = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    Ct(e) && !Ta(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), ps.value = window.performance.now(), e !== n && r0(e) && t && e.select(), Ct(e) && r && e.removeAttribute("tabindex");
  }
};
function Bi(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const o0 = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = Bi(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = Bi(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, a0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Ht(r, t), document.activeElement !== n)
      return;
}, ji = o0(), s0 = () => Wo.value > ps.value, Hr = () => {
  fs.value = "pointer", Wo.value = window.performance.now();
}, Vi = () => {
  fs.value = "keyboard", Wo.value = window.performance.now();
}, i0 = () => (xe(() => {
  Wr === 0 && (document.addEventListener("mousedown", Hr), document.addEventListener("touchstart", Hr), document.addEventListener("keydown", Vi)), Wr++;
}), Vt(() => {
  Wr--, Wr <= 0 && (document.removeEventListener("mousedown", Hr), document.removeEventListener("touchstart", Hr), document.removeEventListener("keydown", Vi));
}), {
  focusReason: fs,
  lastUserFocusTimestamp: Wo,
  lastAutomatedFocusTimestamp: ps
}), Kr = (e) => new CustomEvent(Jv, {
  ...Qv,
  detail: e
}), xt = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Dn = [];
const Ui = (e) => {
  e.code === xt.esc && Dn.forEach((t) => t(e));
}, l0 = (e) => {
  xe(() => {
    Dn.length === 0 && document.addEventListener("keydown", Ui), Fe && Dn.push(e);
  }), Vt(() => {
    Dn = Dn.filter((t) => t !== e), Dn.length === 0 && Fe && document.removeEventListener("keydown", Ui);
  });
}, u0 = q({
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
    Fi,
    Di,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = D();
    let r, o;
    const { focusReason: a } = i0();
    l0((v) => {
      e.trapped && !s.paused && t("release-requested", v);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (v) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: h, altKey: E, ctrlKey: d, metaKey: S, currentTarget: b, shiftKey: w } = v, { loop: C } = e, O = h === xt.tab && !E && !d && !S, k = document.activeElement;
      if (O && k) {
        const F = b, [M, I] = n0(F);
        if (M && I) {
          if (!w && k === I) {
            const U = Kr({
              focusReason: a.value
            });
            t("focusout-prevented", U), U.defaultPrevented || (v.preventDefault(), C && Ht(M, !0));
          } else if (w && [M, F].includes(k)) {
            const U = Kr({
              focusReason: a.value
            });
            t("focusout-prevented", U), U.defaultPrevented || (v.preventDefault(), C && Ht(I, !0));
          }
        } else if (k === F) {
          const U = Kr({
            focusReason: a.value
          });
          t("focusout-prevented", U), U.defaultPrevented || v.preventDefault();
        }
      }
    };
    zt(e0, {
      focusTrapRef: n,
      onKeydown: i
    }), ue(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), ue([n], ([v], [h]) => {
      v && (v.addEventListener("keydown", i), v.addEventListener("focusin", c), v.addEventListener("focusout", p)), h && (h.removeEventListener("keydown", i), h.removeEventListener("focusin", c), h.removeEventListener("focusout", p));
    });
    const l = (v) => {
      t(Fi, v);
    }, u = (v) => t(Di, v), c = (v) => {
      const h = f(n);
      if (!h)
        return;
      const E = v.target, d = v.relatedTarget, S = E && h.contains(E);
      e.trapped || d && h.contains(d) || (r = d), S && t("focusin", v), !s.paused && e.trapped && (S ? o = E : Ht(o, !0));
    }, p = (v) => {
      const h = f(n);
      if (!(s.paused || !h))
        if (e.trapped) {
          const E = v.relatedTarget;
          !zo(E) && !h.contains(E) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const d = Kr({
                focusReason: a.value
              });
              t("focusout-prevented", d), d.defaultPrevented || Ht(o, !0);
            }
          }, 0);
        } else {
          const E = v.target;
          E && h.contains(E) || t("focusout", v);
        }
    };
    async function m() {
      await Ae();
      const v = f(n);
      if (v) {
        ji.push(s);
        const h = v.contains(document.activeElement) ? r : document.activeElement;
        if (r = h, !v.contains(h)) {
          const d = new Event(oa, xi);
          v.addEventListener(oa, l), v.dispatchEvent(d), d.defaultPrevented || Ae(() => {
            let S = e.focusStartEl;
            nt(S) || (Ht(S), document.activeElement !== S && (S = "first")), S === "first" && a0(Gu(v), !0), (document.activeElement === h || S === "container") && Ht(v);
          });
        }
      }
    }
    function g() {
      const v = f(n);
      if (v) {
        v.removeEventListener(oa, l);
        const h = new CustomEvent(aa, {
          ...xi,
          detail: {
            focusReason: a.value
          }
        });
        v.addEventListener(aa, u), v.dispatchEvent(h), !h.defaultPrevented && (a.value == "keyboard" || !s0() || v.contains(document.activeElement)) && Ht(r ?? document.body), v.removeEventListener(aa, u), ji.remove(s);
      }
    }
    return xe(() => {
      e.trapped && m(), ue(() => e.trapped, (v) => {
        v ? m() : g();
      });
    }), Vt(() => {
      e.trapped && g(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", c), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function c0(e, t, n, r, o, a) {
  return ie(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var d0 = /* @__PURE__ */ Pe(u0, [["render", c0], ["__file", "focus-trap.vue"]]), rt = "top", vt = "bottom", yt = "right", ot = "left", ms = "auto", Fr = [rt, vt, yt, ot], Kn = "start", Lr = "end", f0 = "clippingParents", Yu = "viewport", lr = "popper", p0 = "reference", Wi = Fr.reduce(function(e, t) {
  return e.concat([t + "-" + Kn, t + "-" + Lr]);
}, []), Ho = [].concat(Fr, [ms]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Kn, t + "-" + Lr]);
}, []), m0 = "beforeRead", g0 = "read", h0 = "afterRead", v0 = "beforeMain", y0 = "main", b0 = "afterMain", _0 = "beforeWrite", w0 = "write", E0 = "afterWrite", S0 = [m0, g0, h0, v0, y0, b0, _0, w0, E0];
function jt(e) {
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
function Ln(e) {
  var t = dt(e).Element;
  return e instanceof t || e instanceof Element;
}
function ht(e) {
  var t = dt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function gs(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = dt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function C0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !ht(a) || !jt(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function T0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !ht(o) || !jt(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Zu = { name: "applyStyles", enabled: !0, phase: "write", fn: C0, effect: T0, requires: ["computeStyles"] };
function Ft(e) {
  return e.split("-")[0];
}
var kn = Math.max, _o = Math.min, Gn = Math.round;
function ka() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function qu() {
  return !/^((?!chrome|android).)*safari/i.test(ka());
}
function Yn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && ht(e) && (o = e.offsetWidth > 0 && Gn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Gn(r.height) / e.offsetHeight || 1);
  var s = Ln(e) ? dt(e) : window, i = s.visualViewport, l = !qu() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, c = (r.top + (l && i ? i.offsetTop : 0)) / a, p = r.width / o, m = r.height / a;
  return { width: p, height: m, top: c, right: u + p, bottom: c + m, left: u, x: u, y: c };
}
function hs(e) {
  var t = Yn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Xu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && gs(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function nn(e) {
  return dt(e).getComputedStyle(e);
}
function k0(e) {
  return ["table", "td", "th"].indexOf(jt(e)) >= 0;
}
function yn(e) {
  return ((Ln(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ko(e) {
  return jt(e) === "html" ? e : e.assignedSlot || e.parentNode || (gs(e) ? e.host : null) || yn(e);
}
function Hi(e) {
  return !ht(e) || nn(e).position === "fixed" ? null : e.offsetParent;
}
function O0(e) {
  var t = /firefox/i.test(ka()), n = /Trident/i.test(ka());
  if (n && ht(e)) {
    var r = nn(e);
    if (r.position === "fixed") return null;
  }
  var o = Ko(e);
  for (gs(o) && (o = o.host); ht(o) && ["html", "body"].indexOf(jt(o)) < 0; ) {
    var a = nn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function Dr(e) {
  for (var t = dt(e), n = Hi(e); n && k0(n) && nn(n).position === "static"; ) n = Hi(n);
  return n && (jt(n) === "html" || jt(n) === "body" && nn(n).position === "static") ? t : n || O0(e) || t;
}
function vs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function vr(e, t, n) {
  return kn(e, _o(t, n));
}
function P0(e, t, n) {
  var r = vr(e, t, n);
  return r > n ? n : r;
}
function Ju() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Qu(e) {
  return Object.assign({}, Ju(), e);
}
function ec(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var L0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Qu(typeof e != "number" ? e : ec(e, Fr));
};
function I0(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Ft(n.placement), l = vs(i), u = [ot, yt].indexOf(i) >= 0, c = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = L0(o.padding, n), m = hs(a), g = l === "y" ? rt : ot, v = l === "y" ? vt : yt, h = n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c], E = s[l] - n.rects.reference[l], d = Dr(a), S = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, b = h / 2 - E / 2, w = p[g], C = S - m[c] - p[v], O = S / 2 - m[c] / 2 + b, k = vr(w, O, C), F = l;
    n.modifiersData[r] = (t = {}, t[F] = k, t.centerOffset = k - O, t);
  }
}
function A0(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Xu(t.elements.popper, o) && (t.elements.arrow = o));
}
var R0 = { name: "arrow", enabled: !0, phase: "main", fn: I0, effect: A0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Zn(e) {
  return e.split("-")[1];
}
var $0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function N0(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Gn(n * o) / o || 0, y: Gn(r * o) / o || 0 };
}
function Ki(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, m = s.x, g = m === void 0 ? 0 : m, v = s.y, h = v === void 0 ? 0 : v, E = typeof c == "function" ? c({ x: g, y: h }) : { x: g, y: h };
  g = E.x, h = E.y;
  var d = s.hasOwnProperty("x"), S = s.hasOwnProperty("y"), b = ot, w = rt, C = window;
  if (u) {
    var O = Dr(n), k = "clientHeight", F = "clientWidth";
    if (O === dt(n) && (O = yn(n), nn(O).position !== "static" && i === "absolute" && (k = "scrollHeight", F = "scrollWidth")), O = O, o === rt || (o === ot || o === yt) && a === Lr) {
      w = vt;
      var M = p && O === C && C.visualViewport ? C.visualViewport.height : O[k];
      h -= M - r.height, h *= l ? 1 : -1;
    }
    if (o === ot || (o === rt || o === vt) && a === Lr) {
      b = yt;
      var I = p && O === C && C.visualViewport ? C.visualViewport.width : O[F];
      g -= I - r.width, g *= l ? 1 : -1;
    }
  }
  var V = Object.assign({ position: i }, u && $0), U = c === !0 ? N0({ x: g, y: h }, dt(n)) : { x: g, y: h };
  if (g = U.x, h = U.y, l) {
    var te;
    return Object.assign({}, V, (te = {}, te[w] = S ? "0" : "", te[b] = d ? "0" : "", te.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + h + "px)" : "translate3d(" + g + "px, " + h + "px, 0)", te));
  }
  return Object.assign({}, V, (t = {}, t[w] = S ? h + "px" : "", t[b] = d ? g + "px" : "", t.transform = "", t));
}
function M0(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: Ft(t.placement), variation: Zn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ki(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ki(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var tc = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: M0, data: {} }, Gr = { passive: !0 };
function x0(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = dt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Gr);
  }), i && l.addEventListener("resize", n.update, Gr), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Gr);
    }), i && l.removeEventListener("resize", n.update, Gr);
  };
}
var nc = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: x0, data: {} }, F0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function no(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return F0[t];
  });
}
var D0 = { start: "end", end: "start" };
function Gi(e) {
  return e.replace(/start|end/g, function(t) {
    return D0[t];
  });
}
function ys(e) {
  var t = dt(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function bs(e) {
  return Yn(yn(e)).left + ys(e).scrollLeft;
}
function z0(e, t) {
  var n = dt(e), r = yn(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = qu();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + bs(e), y: l };
}
function B0(e) {
  var t, n = yn(e), r = ys(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = kn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = kn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + bs(e), l = -r.scrollTop;
  return nn(o || n).direction === "rtl" && (i += kn(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function _s(e) {
  var t = nn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function rc(e) {
  return ["html", "body", "#document"].indexOf(jt(e)) >= 0 ? e.ownerDocument.body : ht(e) && _s(e) ? e : rc(Ko(e));
}
function yr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = rc(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = dt(r), s = o ? [a].concat(a.visualViewport || [], _s(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(yr(Ko(s)));
}
function Oa(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function j0(e, t) {
  var n = Yn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Yi(e, t, n) {
  return t === Yu ? Oa(z0(e, n)) : Ln(t) ? j0(t, n) : Oa(B0(yn(e)));
}
function V0(e) {
  var t = yr(Ko(e)), n = ["absolute", "fixed"].indexOf(nn(e).position) >= 0, r = n && ht(e) ? Dr(e) : e;
  return Ln(r) ? t.filter(function(o) {
    return Ln(o) && Xu(o, r) && jt(o) !== "body";
  }) : [];
}
function U0(e, t, n, r) {
  var o = t === "clippingParents" ? V0(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var c = Yi(e, u, r);
    return l.top = kn(c.top, l.top), l.right = _o(c.right, l.right), l.bottom = _o(c.bottom, l.bottom), l.left = kn(c.left, l.left), l;
  }, Yi(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function oc(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Ft(r) : null, a = r ? Zn(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case rt:
      l = { x: s, y: t.y - n.height };
      break;
    case vt:
      l = { x: s, y: t.y + t.height };
      break;
    case yt:
      l = { x: t.x + t.width, y: i };
      break;
    case ot:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? vs(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case Kn:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Lr:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function Ir(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? f0 : i, u = n.rootBoundary, c = u === void 0 ? Yu : u, p = n.elementContext, m = p === void 0 ? lr : p, g = n.altBoundary, v = g === void 0 ? !1 : g, h = n.padding, E = h === void 0 ? 0 : h, d = Qu(typeof E != "number" ? E : ec(E, Fr)), S = m === lr ? p0 : lr, b = e.rects.popper, w = e.elements[v ? S : m], C = U0(Ln(w) ? w : w.contextElement || yn(e.elements.popper), l, c, s), O = Yn(e.elements.reference), k = oc({ reference: O, element: b, placement: o }), F = Oa(Object.assign({}, b, k)), M = m === lr ? F : O, I = { top: C.top - M.top + d.top, bottom: M.bottom - C.bottom + d.bottom, left: C.left - M.left + d.left, right: M.right - C.right + d.right }, V = e.modifiersData.offset;
  if (m === lr && V) {
    var U = V[o];
    Object.keys(I).forEach(function(te) {
      var pe = [yt, vt].indexOf(te) >= 0 ? 1 : -1, oe = [rt, vt].indexOf(te) >= 0 ? "y" : "x";
      I[te] += U[oe] * pe;
    });
  }
  return I;
}
function W0(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Ho : l, c = Zn(r), p = c ? i ? Wi : Wi.filter(function(v) {
    return Zn(v) === c;
  }) : Fr, m = p.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  m.length === 0 && (m = p);
  var g = m.reduce(function(v, h) {
    return v[h] = Ir(e, { placement: h, boundary: o, rootBoundary: a, padding: s })[Ft(h)], v;
  }, {});
  return Object.keys(g).sort(function(v, h) {
    return g[v] - g[h];
  });
}
function H0(e) {
  if (Ft(e) === ms) return [];
  var t = no(e);
  return [Gi(e), t, Gi(t)];
}
function K0(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, c = n.boundary, p = n.rootBoundary, m = n.altBoundary, g = n.flipVariations, v = g === void 0 ? !0 : g, h = n.allowedAutoPlacements, E = t.options.placement, d = Ft(E), S = d === E, b = l || (S || !v ? [no(E)] : H0(E)), w = [E].concat(b).reduce(function(Q, me) {
      return Q.concat(Ft(me) === ms ? W0(t, { placement: me, boundary: c, rootBoundary: p, padding: u, flipVariations: v, allowedAutoPlacements: h }) : me);
    }, []), C = t.rects.reference, O = t.rects.popper, k = /* @__PURE__ */ new Map(), F = !0, M = w[0], I = 0; I < w.length; I++) {
      var V = w[I], U = Ft(V), te = Zn(V) === Kn, pe = [rt, vt].indexOf(U) >= 0, oe = pe ? "width" : "height", ce = Ir(t, { placement: V, boundary: c, rootBoundary: p, altBoundary: m, padding: u }), j = pe ? te ? yt : ot : te ? vt : rt;
      C[oe] > O[oe] && (j = no(j));
      var ge = no(j), he = [];
      if (a && he.push(ce[U] <= 0), i && he.push(ce[j] <= 0, ce[ge] <= 0), he.every(function(Q) {
        return Q;
      })) {
        M = V, F = !1;
        break;
      }
      k.set(V, he);
    }
    if (F) for (var Le = v ? 3 : 1, De = function(Q) {
      var me = w.find(function(Se) {
        var Ce = k.get(Se);
        if (Ce) return Ce.slice(0, Q).every(function(ae) {
          return ae;
        });
      });
      if (me) return M = me, "break";
    }, Ye = Le; Ye > 0; Ye--) {
      var K = De(Ye);
      if (K === "break") break;
    }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
var G0 = { name: "flip", enabled: !0, phase: "main", fn: K0, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Zi(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function qi(e) {
  return [rt, yt, vt, ot].some(function(t) {
    return e[t] >= 0;
  });
}
function Y0(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Ir(t, { elementContext: "reference" }), i = Ir(t, { altBoundary: !0 }), l = Zi(s, r), u = Zi(i, o, a), c = qi(l), p = qi(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: c, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": c, "data-popper-escaped": p });
}
var Z0 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Y0 };
function q0(e, t, n) {
  var r = Ft(e), o = [ot, rt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [ot, yt].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function X0(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = Ho.reduce(function(c, p) {
    return c[p] = q0(p, t.rects, a), c;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var J0 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: X0 };
function Q0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = oc({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var ac = { name: "popperOffsets", enabled: !0, phase: "read", fn: Q0, data: {} };
function ey(e) {
  return e === "x" ? "y" : "x";
}
function ty(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, p = n.padding, m = n.tether, g = m === void 0 ? !0 : m, v = n.tetherOffset, h = v === void 0 ? 0 : v, E = Ir(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: c }), d = Ft(t.placement), S = Zn(t.placement), b = !S, w = vs(d), C = ey(w), O = t.modifiersData.popperOffsets, k = t.rects.reference, F = t.rects.popper, M = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, I = typeof M == "number" ? { mainAxis: M, altAxis: M } : Object.assign({ mainAxis: 0, altAxis: 0 }, M), V = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = { x: 0, y: 0 };
  if (O) {
    if (a) {
      var te, pe = w === "y" ? rt : ot, oe = w === "y" ? vt : yt, ce = w === "y" ? "height" : "width", j = O[w], ge = j + E[pe], he = j - E[oe], Le = g ? -F[ce] / 2 : 0, De = S === Kn ? k[ce] : F[ce], Ye = S === Kn ? -F[ce] : -k[ce], K = t.elements.arrow, Q = g && K ? hs(K) : { width: 0, height: 0 }, me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ju(), Se = me[pe], Ce = me[oe], ae = vr(0, k[ce], Q[ce]), ze = b ? k[ce] / 2 - Le - ae - Se - I.mainAxis : De - ae - Se - I.mainAxis, le = b ? -k[ce] / 2 + Le + ae + Ce + I.mainAxis : Ye + ae + Ce + I.mainAxis, He = t.elements.arrow && Dr(t.elements.arrow), _t = He ? w === "y" ? He.clientTop || 0 : He.clientLeft || 0 : 0, at = (te = V?.[w]) != null ? te : 0, st = j + ze - at - _t, it = j + le - at, ft = vr(g ? _o(ge, st) : ge, j, g ? kn(he, it) : he);
      O[w] = ft, U[w] = ft - j;
    }
    if (i) {
      var Lt, _ = w === "x" ? rt : ot, T = w === "x" ? vt : yt, N = O[C], Z = C === "y" ? "height" : "width", ve = N + E[_], se = N - E[T], y = [rt, ot].indexOf(d) !== -1, $ = (Lt = V?.[C]) != null ? Lt : 0, de = y ? ve : N - k[Z] - F[Z] - $ + I.altAxis, _e = y ? N + k[Z] + F[Z] - $ - I.altAxis : se, Ze = g && y ? P0(de, N, _e) : vr(g ? de : ve, N, g ? _e : se);
      O[C] = Ze, U[C] = Ze - N;
    }
    t.modifiersData[r] = U;
  }
}
var ny = { name: "preventOverflow", enabled: !0, phase: "main", fn: ty, requiresIfExists: ["offset"] };
function ry(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function oy(e) {
  return e === dt(e) || !ht(e) ? ys(e) : ry(e);
}
function ay(e) {
  var t = e.getBoundingClientRect(), n = Gn(t.width) / e.offsetWidth || 1, r = Gn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function sy(e, t, n) {
  n === void 0 && (n = !1);
  var r = ht(t), o = ht(t) && ay(t), a = yn(t), s = Yn(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((jt(t) !== "body" || _s(a)) && (i = oy(t)), ht(t) ? (l = Yn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = bs(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function iy(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && o(l);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function ly(e) {
  var t = iy(e);
  return S0.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function uy(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function cy(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Xi = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Ji() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ws(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? Xi : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Xi, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, c = [], p = !1, m = { state: u, setOptions: function(h) {
      var E = typeof h == "function" ? h(u.options) : h;
      v(), u.options = Object.assign({}, a, u.options, E), u.scrollParents = { reference: Ln(s) ? yr(s) : s.contextElement ? yr(s.contextElement) : [], popper: yr(i) };
      var d = ly(cy([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = d.filter(function(S) {
        return S.enabled;
      }), g(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var h = u.elements, E = h.reference, d = h.popper;
        if (Ji(E, d)) {
          u.rects = { reference: sy(E, Dr(d), u.options.strategy === "fixed"), popper: hs(d) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(F) {
            return u.modifiersData[F.name] = Object.assign({}, F.data);
          });
          for (var S = 0; S < u.orderedModifiers.length; S++) {
            if (u.reset === !0) {
              u.reset = !1, S = -1;
              continue;
            }
            var b = u.orderedModifiers[S], w = b.fn, C = b.options, O = C === void 0 ? {} : C, k = b.name;
            typeof w == "function" && (u = w({ state: u, options: O, name: k, instance: m }) || u);
          }
        }
      }
    }, update: uy(function() {
      return new Promise(function(h) {
        m.forceUpdate(), h(u);
      });
    }), destroy: function() {
      v(), p = !0;
    } };
    if (!Ji(s, i)) return m;
    m.setOptions(l).then(function(h) {
      !p && l.onFirstUpdate && l.onFirstUpdate(h);
    });
    function g() {
      u.orderedModifiers.forEach(function(h) {
        var E = h.name, d = h.options, S = d === void 0 ? {} : d, b = h.effect;
        if (typeof b == "function") {
          var w = b({ state: u, name: E, instance: m, options: S }), C = function() {
          };
          c.push(w || C);
        }
      });
    }
    function v() {
      c.forEach(function(h) {
        return h();
      }), c = [];
    }
    return m;
  };
}
ws();
var dy = [nc, ac, tc, Zu];
ws({ defaultModifiers: dy });
var fy = [nc, ac, tc, Zu, J0, G0, ny, R0, Z0], py = ws({ defaultModifiers: fy });
const my = ["fixed", "absolute"], gy = ke({
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
    values: Ho,
    default: "bottom"
  },
  popperOptions: {
    type: re(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: my,
    default: "absolute"
  }
}), sc = ke({
  ...gy,
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
  ...xr(["ariaLabel"])
}), hy = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, vy = (e, t) => {
  const n = D(!1), r = D();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var c;
      ((c = u.detail) == null ? void 0 : c.focusReason) !== "pointer" && (r.value = "first", t("blur"));
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
}, yy = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [..._y(e), ...t]
  };
  return wy(a, o?.modifiers), a;
}, by = (e) => {
  if (Fe)
    return Yt(e);
};
function _y(e) {
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
function wy(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Ey = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = Sy(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = P(() => {
    const { onFirstUpdate: l, placement: u, strategy: c, modifiers: p } = f(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: c || "absolute",
      modifiers: [
        ...p || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = mn(), s = D({
    styles: {
      popper: {
        position: f(o).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), i = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return ue(o, (l) => {
    const u = f(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), ue([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = py(l, u, f(o)));
  }), Vt(() => {
    i();
  }), {
    state: P(() => {
      var l;
      return { ...((l = f(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: P(() => f(s).styles),
    attributes: P(() => f(s).attributes),
    update: () => {
      var l;
      return (l = f(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = f(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: P(() => f(a))
  };
};
function Sy(e) {
  const t = Object.keys(e.elements), n = mo(t.map((o) => [o, e.styles[o] || {}])), r = mo(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const Cy = 0, Ty = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Ee(ds, void 0), a = D(), s = D(), i = P(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = P(() => {
    var d;
    const S = f(a), b = (d = f(s)) != null ? d : Cy;
    return {
      name: "arrow",
      enabled: !Vg(S),
      options: {
        element: S,
        padding: b
      }
    };
  }), u = P(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...yy(e, [
      f(l),
      f(i)
    ])
  })), c = P(() => by(e.referenceEl) || f(r)), { attributes: p, state: m, styles: g, update: v, forceUpdate: h, instanceRef: E } = Ey(c, n, u);
  return ue(E, (d) => t.value = d), xe(() => {
    ue(() => {
      var d;
      return (d = f(c)) == null ? void 0 : d.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: E,
    state: m,
    styles: g,
    role: o,
    forceUpdate: h,
    update: v
  };
}, ky = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = yu(), a = Me("popper"), s = P(() => f(t).popper), i = D(Ve(e.zIndex) ? e.zIndex : o()), l = P(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = P(() => [
    { zIndex: f(i) },
    f(n).popper,
    e.popperStyle || {}
  ]), c = P(() => r.value === "dialog" ? "false" : void 0), p = P(() => f(n).arrow || {});
  return {
    ariaModal: c,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Ve(e.zIndex) ? e.zIndex : o();
    }
  };
}, Oy = q({
  name: "ElPopperContent"
}), Py = /* @__PURE__ */ q({
  ...Oy,
  props: sc,
  emits: hy,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: c
    } = vy(r, n), { attributes: p, arrowRef: m, contentRef: g, styles: v, instanceRef: h, role: E, update: d } = Ty(r), {
      ariaModal: S,
      arrowStyle: b,
      contentAttrs: w,
      contentClass: C,
      contentStyle: O,
      updateZIndex: k
    } = ky(r, {
      styles: v,
      attributes: p,
      role: E
    }), F = Ee(bo, void 0), M = D();
    zt(ju, {
      arrowStyle: b,
      arrowRef: m,
      arrowOffset: M
    }), F && zt(bo, {
      ...F,
      addInputId: Cr,
      removeInputId: Cr
    });
    let I;
    const V = (te = !0) => {
      d(), te && k();
    }, U = () => {
      V(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return xe(() => {
      ue(() => r.triggerTargetEl, (te, pe) => {
        I?.(), I = void 0;
        const oe = f(te || g.value), ce = f(pe || g.value);
        Ct(oe) && (I = ue([E, () => r.ariaLabel, S, () => r.id], (j) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ge, he) => {
            zo(j[he]) ? oe.removeAttribute(ge) : oe.setAttribute(ge, j[he]);
          });
        }, { immediate: !0 })), ce !== oe && Ct(ce) && ["role", "aria-label", "aria-modal", "id"].forEach((j) => {
          ce.removeAttribute(j);
        });
      }, { immediate: !0 }), ue(() => r.visible, U, { immediate: !0 });
    }), Vt(() => {
      I?.(), I = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: h,
      updatePopper: V,
      contentStyle: O
    }), (te, pe) => (A(), z("div", hn({
      ref_key: "contentRef",
      ref: g
    }, f(w), {
      style: f(O),
      class: f(C),
      tabindex: "-1",
      onMouseenter: (oe) => te.$emit("mouseenter", oe),
      onMouseleave: (oe) => te.$emit("mouseleave", oe)
    }), [
      W(f(d0), {
        trapped: f(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": f(g),
        "focus-start-el": f(o),
        onFocusAfterTrapped: f(i),
        onFocusAfterReleased: f(s),
        onFocusin: f(l),
        onFocusoutPrevented: f(u),
        onReleaseRequested: f(c)
      }, {
        default: ne(() => [
          ie(te.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Ly = /* @__PURE__ */ Pe(Py, [["__file", "content.vue"]]);
const Iy = Pt(jv), Es = Symbol("elTooltip");
function Qi() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Mr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Ay = ke({
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
}), Ry = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = Qi(), {
    registerTimeout: s,
    cancelTimeout: i
  } = Qi();
  return {
    onOpen: (c) => {
      a(() => {
        r(c);
        const p = f(n);
        Ve(p) && p > 0 && s(() => {
          o(c);
        }, p);
      }, f(e));
    },
    onClose: (c) => {
      i(), a(() => {
        o(c);
      }, f(t));
    }
  };
}, Ss = ke({
  ...Ay,
  ...sc,
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
  ...xr(["ariaLabel"])
}), ic = ke({
  ...Wu,
  disabled: Boolean,
  trigger: {
    type: re([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: re(Array),
    default: () => [xt.enter, xt.numpadEnter, xt.space]
  }
}), $y = jo({
  type: re(Boolean),
  default: null
}), Ny = jo({
  type: re(Function)
}), My = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: $y,
    [n]: Ny
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: c,
      onHide: p
    }) => {
      const m = Qe(), { emit: g } = m, v = m.props, h = P(() => je(v[n])), E = P(() => v[e] === null), d = (k) => {
        s.value !== !0 && (s.value = !0, i && (i.value = k), je(c) && c(k));
      }, S = (k) => {
        s.value !== !1 && (s.value = !1, i && (i.value = k), je(p) && p(k));
      }, b = (k) => {
        if (v.disabled === !0 || je(u) && !u())
          return;
        const F = h.value && Fe;
        F && g(t, !0), (E.value || !F) && d(k);
      }, w = (k) => {
        if (v.disabled === !0 || !Fe)
          return;
        const F = h.value && Fe;
        F && g(t, !1), (E.value || !F) && S(k);
      }, C = (k) => {
        go(k) && (v.disabled && k ? h.value && g(t, !1) : s.value !== k && (k ? d() : S()));
      }, O = () => {
        s.value ? w() : b();
      };
      return ue(() => v[e], C), l && m.appContext.config.globalProperties.$route !== void 0 && ue(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && s.value && w();
      }), xe(() => {
        C(v[e]);
      }), {
        hide: w,
        show: b,
        toggle: O,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: xy,
  useModelToggleEmits: Fy,
  useModelToggle: Dy
} = My("visible"), zy = ke({
  ...Vu,
  ...xy,
  ...Ss,
  ...ic,
  ...Uu,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), By = [
  ...Fy,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], jy = (e, t) => Mt(e) ? e.includes(t) : e === t, Mn = (e, t, n) => (r) => {
  jy(f(e), t) && n(r);
}, Kt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, Vy = q({
  name: "ElTooltipTrigger"
}), Uy = /* @__PURE__ */ q({
  ...Vy,
  props: ic,
  setup(e, { expose: t }) {
    const n = e, r = Me("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = Ee(Es, void 0), c = D(null), p = () => {
      if (f(o) || n.disabled)
        return !0;
    }, m = Nt(n, "trigger"), g = Kt(p, Mn(m, "hover", i)), v = Kt(p, Mn(m, "hover", l)), h = Kt(p, Mn(m, "click", (w) => {
      w.button === 0 && u(w);
    })), E = Kt(p, Mn(m, "focus", i)), d = Kt(p, Mn(m, "focus", l)), S = Kt(p, Mn(m, "contextmenu", (w) => {
      w.preventDefault(), u(w);
    })), b = Kt(p, (w) => {
      const { code: C } = w;
      n.triggerKeys.includes(C) && (w.preventDefault(), u(w));
    });
    return t({
      triggerRef: c
    }), (w, C) => (A(), ee(f(Xv), {
      id: f(a),
      "virtual-ref": w.virtualRef,
      open: f(s),
      "virtual-triggering": w.virtualTriggering,
      class: B(f(r).e("trigger")),
      onBlur: f(d),
      onClick: f(h),
      onContextmenu: f(S),
      onFocus: f(E),
      onMouseenter: f(g),
      onMouseleave: f(v),
      onKeydown: f(b)
    }, {
      default: ne(() => [
        ie(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Wy = /* @__PURE__ */ Pe(Uy, [["__file", "trigger.vue"]]);
const Hy = ke({
  to: {
    type: re([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Ky = /* @__PURE__ */ q({
  __name: "teleport",
  props: Hy,
  setup(e) {
    return (t, n) => t.disabled ? ie(t.$slots, "default", { key: 0 }) : (A(), ee(Pd, {
      key: 1,
      to: t.to
    }, [
      ie(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Gy = /* @__PURE__ */ Pe(Ky, [["__file", "teleport.vue"]]);
const Yy = Pt(Gy), lc = () => {
  const e = Xa(), t = Nu(), n = P(() => `${e.value}-popper-container-${t.prefix}`), r = P(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, Zy = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, qy = () => {
  const { id: e, selector: t } = lc();
  return Ld(() => {
    Fe && (document.body.querySelector(t.value) || Zy(e.value));
  }), {
    id: e,
    selector: t
  };
}, Xy = q({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Jy = /* @__PURE__ */ q({
  ...Xy,
  props: Ss,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = lc(), o = Me("tooltip"), a = D();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: c,
      onClose: p,
      onOpen: m,
      onShow: g,
      onHide: v,
      onBeforeShow: h,
      onBeforeHide: E
    } = Ee(Es, void 0), d = P(() => n.transition || `${o.namespace.value}-fade-in-linear`), S = P(() => n.persistent);
    Vt(() => {
      s?.();
    });
    const b = P(() => f(S) ? !0 : f(u)), w = P(() => n.disabled ? !1 : f(u)), C = P(() => n.appendTo || r.value), O = P(() => {
      var j;
      return (j = n.style) != null ? j : {};
    }), k = D(!0), F = () => {
      v(), ce() && Ht(document.body), k.value = !0;
    }, M = () => {
      if (f(i))
        return !0;
    }, I = Kt(M, () => {
      n.enterable && f(c) === "hover" && m();
    }), V = Kt(M, () => {
      f(c) === "hover" && p();
    }), U = () => {
      var j, ge;
      (ge = (j = a.value) == null ? void 0 : j.updatePopper) == null || ge.call(j), h?.();
    }, te = () => {
      E?.();
    }, pe = () => {
      g(), s = ah(P(() => {
        var j;
        return (j = a.value) == null ? void 0 : j.popperContentRef;
      }), () => {
        if (f(i))
          return;
        f(c) !== "hover" && p();
      });
    }, oe = () => {
      n.virtualTriggering || p();
    }, ce = (j) => {
      var ge;
      const he = (ge = a.value) == null ? void 0 : ge.popperContentRef, Le = j?.relatedTarget || document.activeElement;
      return he?.contains(Le);
    };
    return ue(() => f(u), (j) => {
      j ? k.value = !1 : s?.();
    }, {
      flush: "post"
    }), ue(() => n.content, () => {
      var j, ge;
      (ge = (j = a.value) == null ? void 0 : j.updatePopper) == null || ge.call(j);
    }), t({
      contentRef: a,
      isFocusInsideContent: ce
    }), (j, ge) => (A(), ee(f(Yy), {
      disabled: !j.teleported,
      to: f(C)
    }, {
      default: ne(() => [
        W(tr, {
          name: f(d),
          onAfterLeave: F,
          onBeforeEnter: U,
          onAfterEnter: pe,
          onBeforeLeave: te
        }, {
          default: ne(() => [
            f(b) ? gt((A(), ee(f(Ly), hn({
              key: 0,
              id: f(l),
              ref_key: "contentRef",
              ref: a
            }, j.$attrs, {
              "aria-label": j.ariaLabel,
              "aria-hidden": k.value,
              "boundaries-padding": j.boundariesPadding,
              "fallback-placements": j.fallbackPlacements,
              "gpu-acceleration": j.gpuAcceleration,
              offset: j.offset,
              placement: j.placement,
              "popper-options": j.popperOptions,
              strategy: j.strategy,
              effect: j.effect,
              enterable: j.enterable,
              pure: j.pure,
              "popper-class": j.popperClass,
              "popper-style": [j.popperStyle, f(O)],
              "reference-el": j.referenceEl,
              "trigger-target-el": j.triggerTargetEl,
              visible: f(w),
              "z-index": j.zIndex,
              onMouseenter: f(I),
              onMouseleave: f(V),
              onBlur: oe,
              onClose: f(p)
            }), {
              default: ne(() => [
                ie(j.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [tn, f(w)]
            ]) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var Qy = /* @__PURE__ */ Pe(Jy, [["__file", "content.vue"]]);
const eb = q({
  name: "ElTooltip"
}), tb = /* @__PURE__ */ q({
  ...eb,
  props: zy,
  emits: By,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    qy();
    const o = Uo(), a = D(), s = D(), i = () => {
      var d;
      const S = f(a);
      S && ((d = S.popperInstanceRef) == null || d.update());
    }, l = D(!1), u = D(), { show: c, hide: p, hasUpdateHandler: m } = Dy({
      indicator: l,
      toggleReason: u
    }), { onOpen: g, onClose: v } = Ry({
      showAfter: Nt(r, "showAfter"),
      hideAfter: Nt(r, "hideAfter"),
      autoClose: Nt(r, "autoClose"),
      open: c,
      close: p
    }), h = P(() => go(r.visible) && !m.value);
    zt(Es, {
      controlled: h,
      id: o,
      open: Ya(l),
      trigger: Nt(r, "trigger"),
      onOpen: (d) => {
        g(d);
      },
      onClose: (d) => {
        v(d);
      },
      onToggle: (d) => {
        f(l) ? v(d) : g(d);
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
    }), ue(() => r.disabled, (d) => {
      d && l.value && (l.value = !1);
    });
    const E = (d) => {
      var S;
      return (S = s.value) == null ? void 0 : S.isFocusInsideContent(d);
    };
    return Id(() => l.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: E,
      updatePopper: i,
      onOpen: g,
      onClose: v,
      hide: p
    }), (d, S) => (A(), ee(f(Iy), {
      ref_key: "popperRef",
      ref: a,
      role: d.role
    }, {
      default: ne(() => [
        W(Wy, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: ne(() => [
            d.$slots.default ? ie(d.$slots, "default", { key: 0 }) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        W(Qy, {
          ref_key: "contentRef",
          ref: s,
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
            ie(d.$slots, "content", {}, () => [
              d.rawContent ? (A(), z("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, ["innerHTML"])) : (A(), z("span", { key: 1 }, X(d.content), 1))
            ]),
            d.showArrow ? (A(), ee(f(Wv), {
              key: 0,
              "arrow-offset": d.arrowOffset
            }, null, 8, ["arrow-offset"])) : Y("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var nb = /* @__PURE__ */ Pe(tb, [["__file", "tooltip.vue"]]);
const uc = Pt(nb), rb = ke({
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
}), ob = q({
  name: "ElBadge"
}), ab = /* @__PURE__ */ q({
  ...ob,
  props: rb,
  setup(e, { expose: t }) {
    const n = e, r = Me("badge"), o = P(() => n.isDot ? "" : Ve(n.value) && Ve(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = P(() => {
      var s, i, l, u, c;
      return [
        {
          backgroundColor: n.color,
          marginRight: Or(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: Or((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (c = n.badgeStyle) != null ? c : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (A(), z("div", {
      class: B(f(r).b())
    }, [
      ie(s.$slots, "default"),
      W(tr, {
        name: `${f(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ne(() => [
          gt(L("sup", {
            class: B([
              f(r).e("content"),
              f(r).em("content", s.type),
              f(r).is("fixed", !!s.$slots.default),
              f(r).is("dot", s.isDot),
              f(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Re(f(a))
          }, [
            ie(s.$slots, "content", { value: f(o) }, () => [
              Cn(X(f(o)), 1)
            ])
          ], 6), [
            [tn, !s.hidden && (f(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var sb = /* @__PURE__ */ Pe(ab, [["__file", "badge.vue"]]);
const ib = Pt(sb), lb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Pa = ke({
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
    values: Eu
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), ub = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, cb = q({
  name: "ElTag"
}), db = /* @__PURE__ */ q({
  ...cb,
  props: Pa,
  emits: ub,
  setup(e, { emit: t }) {
    const n = e, r = us(), o = Me("tag"), a = P(() => {
      const { type: u, hit: c, effect: p, closable: m, round: g } = n;
      return [
        o.b(),
        o.is("closable", m),
        o.m(u || "primary"),
        o.m(r.value),
        o.m(p),
        o.is("hit", c),
        o.is("round", g)
      ];
    }), s = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, l = (u) => {
      var c, p, m;
      (m = (p = (c = u?.component) == null ? void 0 : c.subTree) == null ? void 0 : p.component) != null && m.bum && (u.component.subTree.component.bum = null);
    };
    return (u, c) => u.disableTransitions ? (A(), z("span", {
      key: 0,
      class: B(f(a)),
      style: Re({ backgroundColor: u.color }),
      onClick: i
    }, [
      L("span", {
        class: B(f(o).e("content"))
      }, [
        ie(u.$slots, "default")
      ], 2),
      u.closable ? (A(), ee(f(ct), {
        key: 0,
        class: B(f(o).e("close")),
        onClick: Je(s, ["stop"])
      }, {
        default: ne(() => [
          W(f(Pr))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : Y("v-if", !0)
    ], 6)) : (A(), ee(tr, {
      key: 1,
      name: `${f(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: ne(() => [
        L("span", {
          class: B(f(a)),
          style: Re({ backgroundColor: u.color }),
          onClick: i
        }, [
          L("span", {
            class: B(f(o).e("content"))
          }, [
            ie(u.$slots, "default")
          ], 2),
          u.closable ? (A(), ee(f(ct), {
            key: 0,
            class: B(f(o).e("close")),
            onClick: Je(s, ["stop"])
          }, {
            default: ne(() => [
              W(f(Pr))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Y("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var fb = /* @__PURE__ */ Pe(db, [["__file", "tag.vue"]]);
const pb = Pt(fb), sn = /* @__PURE__ */ new Map();
if (Fe) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of sn.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function el(e, t) {
  let n = [];
  return Mt(t.arg) ? n = t.arg : Ct(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, c = e.contains(s) || e.contains(i), p = e === s, m = n.length && n.some((v) => v?.contains(s)) || n.length && n.includes(i), g = a && (a.contains(s) || a.contains(i));
    l || u || c || p || m || g || t.value(r, o);
  };
}
const mb = {
  beforeMount(e, t) {
    sn.has(e) || sn.set(e, []), sn.get(e).push({
      documentHandler: el(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    sn.has(e) || sn.set(e, []);
    const n = sn.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: el(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    sn.delete(e);
  }
}, gb = ke({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: re(Object)
  },
  size: ss,
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
  ...Tu
}), wt = {};
q({
  name: "ElConfigProvider",
  props: gb,
  setup(e, { slots: t }) {
    ue(() => e.message, (r) => {
      Object.assign(wt, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Pu(e);
    return () => ie(t, "default", { config: n?.value });
  }
});
function hb() {
  const e = mn(), t = D(0), n = 11, r = P(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return $t(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const cc = Symbol("ElSelectGroup"), Go = Symbol("ElSelect");
function vb(e, t) {
  const n = Ee(Go), r = Ee(cc, { disabled: !1 }), o = P(() => c(fn(n.props.modelValue), e.value)), a = P(() => {
    var g;
    if (n.props.multiple) {
      const v = fn((g = n.props.modelValue) != null ? g : []);
      return !o.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = P(() => e.label || (tt(e.value) ? "" : e.value)), i = P(() => e.value || e.label || ""), l = P(() => e.disabled || t.groupDisabled || a.value), u = Qe(), c = (g = [], v) => {
    if (tt(e.value)) {
      const h = n.props.valueKey;
      return g && g.some((E) => Yl(pn(E, h)) === pn(v, h));
    } else
      return g && g.includes(v);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, m = (g) => {
    const v = new RegExp(lb(g), "i");
    t.visible = v.test(s.value) || e.created;
  };
  return ue(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ue(() => e.value, (g, v) => {
    const { remote: h, valueKey: E } = n.props;
    if ((h ? g !== v : !hr(g, v)) && (n.onOptionDestroy(v, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !h) {
      if (E && tt(g) && tt(v) && g[E] === v[E])
        return;
      n.setSelected();
    }
  }), ue(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: o,
    isDisabled: l,
    hoverItem: p,
    updateOption: m
  };
}
const yb = q({
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
    const t = Me("select"), n = Uo(), r = P(() => [
      t.be("dropdown", "item"),
      t.is("disabled", f(i)),
      t.is("selected", f(s)),
      t.is("hovering", f(m))
    ]), o = On({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: a,
      itemSelected: s,
      isDisabled: i,
      select: l,
      hoverItem: u,
      updateOption: c
    } = vb(e, o), { visible: p, hover: m } = $o(o), g = Qe().proxy;
    l.onOptionCreate(g), Vt(() => {
      const h = g.value, { selected: E } = l.states, d = E.some((S) => S.value === g.value);
      Ae(() => {
        l.states.cachedOptions.get(h) === g && !d && l.states.cachedOptions.delete(h);
      }), l.onOptionDestroy(h, g);
    });
    function v() {
      i.value || l.handleOptionSelect(g);
    }
    return {
      ns: t,
      id: n,
      containerKls: r,
      currentLabel: a,
      itemSelected: s,
      isDisabled: i,
      select: l,
      hoverItem: u,
      updateOption: c,
      visible: p,
      hover: m,
      selectOptionClick: v,
      states: o
    };
  }
});
function bb(e, t, n, r, o, a) {
  return gt((A(), z("li", {
    id: e.id,
    class: B(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Je(e.selectOptionClick, ["stop"])
  }, [
    ie(e.$slots, "default", {}, () => [
      L("span", null, X(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [tn, e.visible]
  ]);
}
var Cs = /* @__PURE__ */ Pe(yb, [["render", bb], ["__file", "option.vue"]]);
const _b = q({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Ee(Go), t = Me("select"), n = P(() => e.props.popperClass), r = P(() => e.props.multiple), o = P(() => e.props.fitInputWidth), a = D("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return xe(() => {
      s(), $t(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function wb(e, t, n, r, o, a) {
  return A(), z("div", {
    class: B([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Re({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (A(), z("div", {
      key: 0,
      class: B(e.ns.be("dropdown", "header"))
    }, [
      ie(e.$slots, "header")
    ], 2)) : Y("v-if", !0),
    ie(e.$slots, "default"),
    e.$slots.footer ? (A(), z("div", {
      key: 1,
      class: B(e.ns.be("dropdown", "footer"))
    }, [
      ie(e.$slots, "footer")
    ], 2)) : Y("v-if", !0)
  ], 6);
}
var Eb = /* @__PURE__ */ Pe(_b, [["render", wb], ["__file", "select-dropdown.vue"]]);
const Sb = (e, t) => {
  const { t: n } = _u(), r = Uo(), o = Me("select"), a = Me("input"), s = On({
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
  }), i = D(null), l = D(null), u = D(null), c = D(null), p = D(null), m = D(null), g = D(null), v = D(null), h = D(null), E = D(null), d = D(null), {
    isComposing: S,
    handleCompositionStart: b,
    handleCompositionUpdate: w,
    handleCompositionEnd: C
  } = zu({
    afterComposition: (R) => Ze(R)
  }), { wrapperRef: O, isFocused: k, handleBlur: F } = Du(p, {
    beforeFocus() {
      return ce.value;
    },
    afterFocus() {
      e.automaticDropdown && !M.value && (M.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(R) {
      var H, fe;
      return ((H = u.value) == null ? void 0 : H.isFocusInsideContent(R)) || ((fe = c.value) == null ? void 0 : fe.isFocusInsideContent(R));
    },
    afterBlur() {
      M.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), M = D(!1), I = D(), { form: V, formItem: U } = Mu(), { inputId: te } = xu(e, {
    formItemContext: U
  }), { valueOnClear: pe, isEmptyValue: oe } = Ph(e), ce = P(() => e.disabled || V?.disabled), j = P(() => Mt(e.modelValue) ? e.modelValue.length > 0 : !oe(e.modelValue)), ge = P(() => {
    var R;
    return (R = V?.statusIcon) != null ? R : !1;
  }), he = P(() => e.clearable && !ce.value && s.inputHovering && j.value), Le = P(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), De = P(() => o.is("reverse", Le.value && M.value)), Ye = P(() => U?.validateState || ""), K = P(() => Ru[Ye.value]), Q = P(() => e.remote ? 300 : 0), me = P(() => e.remote && !s.inputValue && s.options.size === 0), Se = P(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ce.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ce = P(() => ae.value.filter((R) => R.visible).length), ae = P(() => {
    const R = Array.from(s.options.values()), H = [];
    return s.optionValues.forEach((fe) => {
      const Be = R.findIndex((lt) => lt.value === fe);
      Be > -1 && H.push(R[Be]);
    }), H.length >= R.length ? H : R;
  }), ze = P(() => Array.from(s.cachedOptions.values())), le = P(() => {
    const R = ae.value.filter((H) => !H.created).some((H) => H.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !R;
  }), He = () => {
    e.filterable && je(e.filterMethod) || e.filterable && e.remote && je(e.remoteMethod) || ae.value.forEach((R) => {
      var H;
      (H = R.updateOption) == null || H.call(R, s.inputValue);
    });
  }, _t = us(), at = P(() => ["small"].includes(_t.value) ? "small" : "default"), st = P({
    get() {
      return M.value && !me.value;
    },
    set(R) {
      M.value = R;
    }
  }), it = P(() => {
    if (e.multiple && !Tn(e.modelValue))
      return fn(e.modelValue).length === 0 && !s.inputValue;
    const R = Mt(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Tn(R) ? !s.inputValue : !0;
  }), ft = P(() => {
    var R;
    const H = (R = e.placeholder) != null ? R : n("el.select.placeholder");
    return e.multiple || !j.value ? H : s.selectedLabel;
  }), Lt = P(() => Ca ? null : "mouseenter");
  ue(() => e.modelValue, (R, H) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", _("")), N(), !hr(R, H) && e.validateEvent && U?.validate("change").catch((fe) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ue(() => M.value, (R) => {
    R ? _(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", R);
  }), ue(() => s.options.entries(), () => {
    Fe && (N(), e.defaultFirstOption && (e.filterable || e.remote) && Ce.value && T());
  }, {
    flush: "post"
  }), ue([() => s.hoveringIndex, ae], ([R]) => {
    Ve(R) && R > -1 ? I.value = ae.value[R] || {} : I.value = {}, ae.value.forEach((H) => {
      H.hover = I.value === H;
    });
  }), Wl(() => {
    s.isBeforeHide || He();
  });
  const _ = (R) => {
    s.previousQuery === R || S.value || (s.previousQuery = R, e.filterable && je(e.filterMethod) ? e.filterMethod(R) : e.filterable && e.remote && je(e.remoteMethod) && e.remoteMethod(R), e.defaultFirstOption && (e.filterable || e.remote) && Ce.value ? Ae(T) : Ae(ve));
  }, T = () => {
    const R = ae.value.filter((lt) => lt.visible && !lt.disabled && !lt.states.groupDisabled), H = R.find((lt) => lt.created), fe = R[0], Be = ae.value.map((lt) => lt.value);
    s.hoveringIndex = zs(Be, H || fe);
  }, N = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const H = Mt(e.modelValue) ? e.modelValue[0] : e.modelValue, fe = Z(H);
      s.selectedLabel = fe.currentLabel, s.selected = [fe];
      return;
    }
    const R = [];
    Tn(e.modelValue) || fn(e.modelValue).forEach((H) => {
      R.push(Z(H));
    }), s.selected = R;
  }, Z = (R) => {
    let H;
    const fe = tf(R);
    for (let $n = s.cachedOptions.size - 1; $n >= 0; $n--) {
      const an = ze.value[$n];
      if (fe ? pn(an.value, e.valueKey) === pn(R, e.valueKey) : an.value === R) {
        H = {
          value: R,
          currentLabel: an.currentLabel,
          get isDisabled() {
            return an.isDisabled;
          }
        };
        break;
      }
    }
    if (H)
      return H;
    const Be = fe ? R.label : R ?? "";
    return {
      value: R,
      currentLabel: Be
    };
  }, ve = () => {
    s.hoveringIndex = ae.value.findIndex((R) => s.selected.some((H) => jr(H) === jr(R)));
  }, se = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, y = () => {
    s.collapseItemWidth = E.value.getBoundingClientRect().width;
  }, $ = () => {
    var R, H;
    (H = (R = u.value) == null ? void 0 : R.updatePopper) == null || H.call(R);
  }, de = () => {
    var R, H;
    (H = (R = c.value) == null ? void 0 : R.updatePopper) == null || H.call(R);
  }, _e = () => {
    s.inputValue.length > 0 && !M.value && (M.value = !0), _(s.inputValue);
  }, Ze = (R) => {
    if (s.inputValue = R.target.value, e.remote)
      wn();
    else
      return _e();
  }, wn = Bg(() => {
    _e();
  }, Q.value), pt = (R) => {
    hr(e.modelValue, R) || t(vo, R);
  }, Qo = (R) => jg(R, (H) => {
    const fe = s.cachedOptions.get(H);
    return fe && !fe.disabled && !fe.states.groupDisabled;
  }), xs = (R) => {
    if (e.multiple && R.code !== xt.delete && R.target.value.length <= 0) {
      const H = fn(e.modelValue).slice(), fe = Qo(H);
      if (fe < 0)
        return;
      const Be = H[fe];
      H.splice(fe, 1), t(Gt, H), pt(H), t("remove-tag", Be);
    }
  }, rd = (R, H) => {
    const fe = s.selected.indexOf(H);
    if (fe > -1 && !ce.value) {
      const Be = fn(e.modelValue).slice();
      Be.splice(fe, 1), t(Gt, Be), pt(Be), t("remove-tag", H.value);
    }
    R.stopPropagation(), Br();
  }, Fs = (R) => {
    R.stopPropagation();
    const H = e.multiple ? [] : pe.value;
    if (e.multiple)
      for (const fe of s.selected)
        fe.isDisabled && H.push(fe.value);
    t(Gt, H), pt(H), s.hoveringIndex = -1, M.value = !1, t("clear"), Br();
  }, Ds = (R) => {
    var H;
    if (e.multiple) {
      const fe = fn((H = e.modelValue) != null ? H : []).slice(), Be = zs(fe, R);
      Be > -1 ? fe.splice(Be, 1) : (e.multipleLimit <= 0 || fe.length < e.multipleLimit) && fe.push(R.value), t(Gt, fe), pt(fe), R.created && _(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Gt, R.value), pt(R.value), M.value = !1;
    Br(), !M.value && Ae(() => {
      zr(R);
    });
  }, zs = (R = [], H) => Tn(H) ? -1 : tt(H.value) ? R.findIndex((fe) => hr(pn(fe, e.valueKey), jr(H))) : R.indexOf(H.value), zr = (R) => {
    var H, fe, Be, lt, $n;
    const an = Mt(R) ? R[0] : R;
    let Vr = null;
    if (an?.value) {
      const ar = ae.value.filter((_d) => _d.value === an.value);
      ar.length > 0 && (Vr = ar[0].$el);
    }
    if (u.value && Vr) {
      const ar = (lt = (Be = (fe = (H = u.value) == null ? void 0 : H.popperRef) == null ? void 0 : fe.contentRef) == null ? void 0 : Be.querySelector) == null ? void 0 : lt.call(Be, `.${o.be("dropdown", "wrap")}`);
      ar && Ih(ar, Vr);
    }
    ($n = d.value) == null || $n.handleScroll();
  }, od = (R) => {
    s.options.set(R.value, R), s.cachedOptions.set(R.value, R);
  }, ad = (R, H) => {
    s.options.get(R) === H && s.options.delete(R);
  }, sd = P(() => {
    var R, H;
    return (H = (R = u.value) == null ? void 0 : R.popperRef) == null ? void 0 : H.contentRef;
  }), id = () => {
    s.isBeforeHide = !1, Ae(() => {
      var R;
      (R = d.value) == null || R.update(), zr(s.selected);
    });
  }, Br = () => {
    var R;
    (R = p.value) == null || R.focus();
  }, ld = () => {
    var R;
    if (M.value) {
      M.value = !1, Ae(() => {
        var H;
        return (H = p.value) == null ? void 0 : H.blur();
      });
      return;
    }
    (R = p.value) == null || R.blur();
  }, ud = (R) => {
    Fs(R);
  }, cd = (R) => {
    if (M.value = !1, k.value) {
      const H = new FocusEvent("focus", R);
      Ae(() => F(H));
    }
  }, dd = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : M.value = !1;
  }, Bs = () => {
    ce.value || (Ca && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : M.value = !M.value);
  }, fd = () => {
    if (!M.value)
      Bs();
    else {
      const R = ae.value[s.hoveringIndex];
      R && !R.isDisabled && Ds(R);
    }
  }, jr = (R) => tt(R.value) ? pn(R.value, e.valueKey) : R.value, pd = P(() => ae.value.filter((R) => R.visible).every((R) => R.isDisabled)), md = P(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), gd = P(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), js = (R) => {
    if (!M.value) {
      M.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ce.value === 0 || S.value) && !pd.value) {
      R === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : R === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const H = ae.value[s.hoveringIndex];
      (H.isDisabled || !H.visible) && js(R), Ae(() => zr(I.value));
    }
  }, hd = () => {
    if (!l.value)
      return 0;
    const R = window.getComputedStyle(l.value);
    return Number.parseFloat(R.gap || "6px");
  }, vd = P(() => {
    const R = hd();
    return { maxWidth: `${E.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - R : s.selectionWidth}px` };
  }), yd = P(() => ({ maxWidth: `${s.selectionWidth}px` })), bd = (R) => {
    t("popup-scroll", R);
  };
  return $t(l, se), $t(v, $), $t(O, $), $t(h, de), $t(E, y), xe(() => {
    N();
  }), {
    inputId: te,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: k,
    expanded: M,
    optionsArray: ae,
    hoverOption: I,
    selectSize: _t,
    filteredOptionsCount: Ce,
    updateTooltip: $,
    updateTagTooltip: de,
    debouncedOnInputChange: wn,
    onInput: Ze,
    deletePrevTag: xs,
    deleteTag: rd,
    deleteSelected: Fs,
    handleOptionSelect: Ds,
    scrollToOption: zr,
    hasModelValue: j,
    shouldShowPlaceholder: it,
    currentPlaceholder: ft,
    mouseEnterEventName: Lt,
    needStatusIcon: ge,
    showClose: he,
    iconComponent: Le,
    iconReverse: De,
    validateState: Ye,
    validateIcon: K,
    showNewOption: le,
    updateOptions: He,
    collapseTagSize: at,
    setSelected: N,
    selectDisabled: ce,
    emptyText: Se,
    handleCompositionStart: b,
    handleCompositionUpdate: w,
    handleCompositionEnd: C,
    onOptionCreate: od,
    onOptionDestroy: ad,
    handleMenuEnter: id,
    focus: Br,
    blur: ld,
    handleClearClick: ud,
    handleClickOutside: cd,
    handleEsc: dd,
    toggleMenu: Bs,
    selectOption: fd,
    getValueKey: jr,
    navigateOptions: js,
    dropdownMenuVisible: st,
    showTagList: md,
    collapseTagList: gd,
    popupScroll: bd,
    tagStyle: vd,
    collapseTagStyle: yd,
    popperRef: sd,
    inputRef: p,
    tooltipRef: u,
    tagTooltipRef: c,
    prefixRef: m,
    suffixRef: g,
    selectRef: i,
    wrapperRef: O,
    selectionRef: l,
    scrollbarRef: d,
    menuRef: v,
    tagMenuRef: h,
    collapseItemRef: E
  };
};
var Cb = q({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Ee(Go);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        Mt(u) && u.forEach((c) => {
          var p, m, g, v;
          const h = (p = c?.type || {}) == null ? void 0 : p.name;
          h === "ElOptionGroup" ? l(!nt(c.children) && !Mt(c.children) && je((m = c.children) == null ? void 0 : m.default) ? (g = c.children) == null ? void 0 : g.default() : c.children) : h === "ElOption" ? i.push((v = c.props) == null ? void 0 : v.value) : Mt(c.children) && l(c.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), hr(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const Tb = ke({
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
  size: ss,
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
  teleported: Ss.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Hn,
    default: Vo
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Hn,
    default: xh
  },
  tagType: { ...Pa.type, default: "info" },
  tagEffect: { ...Pa.effect, default: "light" },
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
    values: Ho,
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
  ...Tu,
  ...xr(["ariaLabel"])
}), tl = "ElSelect", kb = q({
  name: tl,
  componentName: tl,
  components: {
    ElSelectMenu: Eb,
    ElOption: Cs,
    ElOptions: Cb,
    ElTag: pb,
    ElScrollbar: Fv,
    ElTooltip: uc,
    ElIcon: ct
  },
  directives: { ClickOutside: mb },
  props: Tb,
  emits: [
    Gt,
    vo,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = P(() => {
      const { modelValue: l, multiple: u } = e, c = u ? [] : void 0;
      return Mt(l) ? u ? l : c : u ? c : l;
    }), r = On({
      ...$o(e),
      modelValue: n
    }), o = Sb(r, t), { calculatorRef: a, inputStyle: s } = hb();
    zt(Go, On({
      props: r,
      states: o.states,
      optionsArray: o.optionsArray,
      handleOptionSelect: o.handleOptionSelect,
      onOptionCreate: o.onOptionCreate,
      onOptionDestroy: o.onOptionDestroy,
      selectRef: o.selectRef,
      setSelected: o.setSelected
    }));
    const i = P(() => e.multiple ? o.states.selected.map((l) => l.currentLabel) : o.states.selectedLabel);
    return {
      ...o,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function Ob(e, t, n, r, o, a) {
  const s = En("el-tag"), i = En("el-tooltip"), l = En("el-icon"), u = En("el-option"), c = En("el-options"), p = En("el-scrollbar"), m = En("el-select-menu"), g = Ad("click-outside");
  return gt((A(), z("div", {
    ref: "selectRef",
    class: B([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Rd(e.mouseEnterEventName)]: (v) => e.states.inputHovering = !0,
    onMouseleave: (v) => e.states.inputHovering = !1
  }, [
    W(i, {
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
      default: ne(() => {
        var v;
        return [
          L("div", {
            ref: "wrapperRef",
            class: B([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Je(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (A(), z("div", {
              key: 0,
              ref: "prefixRef",
              class: B(e.nsSelect.e("prefix"))
            }, [
              ie(e.$slots, "prefix")
            ], 2)) : Y("v-if", !0),
            L("div", {
              ref: "selectionRef",
              class: B([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ie(e.$slots, "tag", { key: 0 }, () => [
                (A(!0), z(Ue, null, Jt(e.showTagList, (h) => (A(), z("div", {
                  key: e.getValueKey(h),
                  class: B(e.nsSelect.e("selected-item"))
                }, [
                  W(s, {
                    closable: !e.selectDisabled && !h.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Re(e.tagStyle),
                    onClose: (E) => e.deleteTag(E, h)
                  }, {
                    default: ne(() => [
                      L("span", {
                        class: B(e.nsSelect.e("tags-text"))
                      }, [
                        ie(e.$slots, "label", {
                          label: h.currentLabel,
                          value: h.value
                        }, () => [
                          Cn(X(h.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (A(), ee(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: ne(() => [
                    L("div", {
                      ref: "collapseItemRef",
                      class: B(e.nsSelect.e("selected-item"))
                    }, [
                      W(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Re(e.collapseTagStyle)
                      }, {
                        default: ne(() => [
                          L("span", {
                            class: B(e.nsSelect.e("tags-text"))
                          }, " + " + X(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: ne(() => [
                    L("div", {
                      ref: "tagMenuRef",
                      class: B(e.nsSelect.e("selection"))
                    }, [
                      (A(!0), z(Ue, null, Jt(e.collapseTagList, (h) => (A(), z("div", {
                        key: e.getValueKey(h),
                        class: B(e.nsSelect.e("selected-item"))
                      }, [
                        W(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !h.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (E) => e.deleteTag(E, h)
                        }, {
                          default: ne(() => [
                            L("span", {
                              class: B(e.nsSelect.e("tags-text"))
                            }, [
                              ie(e.$slots, "label", {
                                label: h.currentLabel,
                                value: h.value
                              }, () => [
                                Cn(X(h.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : Y("v-if", !0)
              ]) : Y("v-if", !0),
              L("div", {
                class: B([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                gt(L("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (h) => e.states.inputValue = h,
                  type: "text",
                  name: e.name,
                  class: B([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Re(e.inputStyle),
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
                    sr(Je((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    sr(Je((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    sr(Je(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    sr(Je(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    sr(Je(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Je(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [$d, e.states.inputValue]
                ]),
                e.filterable ? (A(), z("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: B(e.nsSelect.e("input-calculator")),
                  textContent: X(e.states.inputValue)
                }, null, 10, ["textContent"])) : Y("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (A(), z("div", {
                key: 1,
                class: B([
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
                  L("span", null, X(e.currentPlaceholder), 1)
                ]) : (A(), z("span", { key: 1 }, X(e.currentPlaceholder), 1))
              ], 2)) : Y("v-if", !0)
            ], 2),
            L("div", {
              ref: "suffixRef",
              class: B(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (A(), ee(l, {
                key: 0,
                class: B([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ne(() => [
                  (A(), ee(mt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0),
              e.showClose && e.clearIcon ? (A(), ee(l, {
                key: 1,
                class: B([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: ne(() => [
                  (A(), ee(mt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : Y("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (A(), ee(l, {
                key: 2,
                class: B([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: ne(() => [
                  (A(), ee(mt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Y("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: ne(() => [
        W(m, { ref: "menuRef" }, {
          default: ne(() => [
            e.$slots.header ? (A(), z("div", {
              key: 0,
              class: B(e.nsSelect.be("dropdown", "header")),
              onClick: Je(() => {
              }, ["stop"])
            }, [
              ie(e.$slots, "header")
            ], 10, ["onClick"])) : Y("v-if", !0),
            gt(W(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: B([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: ne(() => [
                e.showNewOption ? (A(), ee(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : Y("v-if", !0),
                W(c, null, {
                  default: ne(() => [
                    ie(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [tn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (A(), z("div", {
              key: 1,
              class: B(e.nsSelect.be("dropdown", "loading"))
            }, [
              ie(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (A(), z("div", {
              key: 2,
              class: B(e.nsSelect.be("dropdown", "empty"))
            }, [
              ie(e.$slots, "empty", {}, () => [
                L("span", null, X(e.emptyText), 1)
              ])
            ], 2)) : Y("v-if", !0),
            e.$slots.footer ? (A(), z("div", {
              key: 3,
              class: B(e.nsSelect.be("dropdown", "footer")),
              onClick: Je(() => {
              }, ["stop"])
            }, [
              ie(e.$slots, "footer")
            ], 10, ["onClick"])) : Y("v-if", !0)
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
var Pb = /* @__PURE__ */ Pe(kb, [["render", Ob], ["__file", "select.vue"]]);
const Lb = q({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Me("select"), n = D(null), r = Qe(), o = D([]);
    zt(cc, On({
      ...$o(e)
    }));
    const a = P(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var c, p;
      return ((c = u.type) == null ? void 0 : c.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, i = (u) => {
      const c = fn(u), p = [];
      return c.forEach((m) => {
        var g, v;
        s(m) ? p.push(m.component.proxy) : (g = m.children) != null && g.length ? p.push(...i(m.children)) : (v = m.component) != null && v.subTree && p.push(...i(m.component.subTree));
      }), p;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return xe(() => {
      l();
    }), fh(n, l, {
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
function Ib(e, t, n, r, o, a) {
  return gt((A(), z("ul", {
    ref: "groupRef",
    class: B(e.ns.be("group", "wrap"))
  }, [
    L("li", {
      class: B(e.ns.be("group", "title"))
    }, X(e.label), 3),
    L("li", null, [
      L("ul", {
        class: B(e.ns.b("group"))
      }, [
        ie(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [tn, e.visible]
  ]);
}
var dc = /* @__PURE__ */ Pe(Lb, [["render", Ib], ["__file", "option-group.vue"]]);
const Ts = Pt(Pb, {
  Option: Cs,
  OptionGroup: dc
}), ks = is(Cs);
is(dc);
const Ab = ke({
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
}), Rb = q({
  name: "ElProgress"
}), $b = /* @__PURE__ */ q({
  ...Rb,
  props: Ab,
  setup(e) {
    const t = e, n = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, r = Me("progress"), o = P(() => {
      const b = {
        width: `${t.percentage}%`,
        animationDuration: `${t.duration}s`
      }, w = S(t.percentage);
      return w.includes("gradient") ? b.background = w : b.backgroundColor = w, b;
    }), a = P(() => (t.strokeWidth / t.width * 100).toFixed(1)), s = P(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(`${50 - Number.parseFloat(a.value) / 2}`, 10) : 0), i = P(() => {
      const b = s.value, w = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${w ? "" : "-"}${b}
          a ${b} ${b} 0 1 1 0 ${w ? "-" : ""}${b * 2}
          a ${b} ${b} 0 1 1 0 ${w ? "" : "-"}${b * 2}
          `;
    }), l = P(() => 2 * Math.PI * s.value), u = P(() => t.type === "dashboard" ? 0.75 : 1), c = P(() => `${-1 * l.value * (1 - u.value) / 2}px`), p = P(() => ({
      strokeDasharray: `${l.value * u.value}px, ${l.value}px`,
      strokeDashoffset: c.value
    })), m = P(() => ({
      strokeDasharray: `${l.value * u.value * (t.percentage / 100)}px, ${l.value}px`,
      strokeDashoffset: c.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), g = P(() => {
      let b;
      return t.color ? b = S(t.percentage) : b = n[t.status] || n.default, b;
    }), v = P(() => t.status === "warning" ? Au : t.type === "line" ? t.status === "success" ? Iu : Vo : t.status === "success" ? Dh : Pr), h = P(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), E = P(() => t.format(t.percentage));
    function d(b) {
      const w = 100 / b.length;
      return b.map((O, k) => nt(O) ? {
        color: O,
        percentage: (k + 1) * w
      } : O).sort((O, k) => O.percentage - k.percentage);
    }
    const S = (b) => {
      var w;
      const { color: C } = t;
      if (je(C))
        return C(b);
      if (nt(C))
        return C;
      {
        const O = d(C);
        for (const k of O)
          if (k.percentage > b)
            return k.color;
        return (w = O[O.length - 1]) == null ? void 0 : w.color;
      }
    };
    return (b, w) => (A(), z("div", {
      class: B([
        f(r).b(),
        f(r).m(b.type),
        f(r).is(b.status),
        {
          [f(r).m("without-text")]: !b.showText,
          [f(r).m("text-inside")]: b.textInside
        }
      ]),
      role: "progressbar",
      "aria-valuenow": b.percentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, [
      b.type === "line" ? (A(), z("div", {
        key: 0,
        class: B(f(r).b("bar"))
      }, [
        L("div", {
          class: B(f(r).be("bar", "outer")),
          style: Re({ height: `${b.strokeWidth}px` })
        }, [
          L("div", {
            class: B([
              f(r).be("bar", "inner"),
              { [f(r).bem("bar", "inner", "indeterminate")]: b.indeterminate },
              { [f(r).bem("bar", "inner", "striped")]: b.striped },
              { [f(r).bem("bar", "inner", "striped-flow")]: b.stripedFlow }
            ]),
            style: Re(f(o))
          }, [
            (b.showText || b.$slots.default) && b.textInside ? (A(), z("div", {
              key: 0,
              class: B(f(r).be("bar", "innerText"))
            }, [
              ie(b.$slots, "default", { percentage: b.percentage }, () => [
                L("span", null, X(f(E)), 1)
              ])
            ], 2)) : Y("v-if", !0)
          ], 6)
        ], 6)
      ], 2)) : (A(), z("div", {
        key: 1,
        class: B(f(r).b("circle")),
        style: Re({ height: `${b.width}px`, width: `${b.width}px` })
      }, [
        (A(), z("svg", { viewBox: "0 0 100 100" }, [
          L("path", {
            class: B(f(r).be("circle", "track")),
            d: f(i),
            stroke: `var(${f(r).cssVarName("fill-color-light")}, #e5e9f2)`,
            "stroke-linecap": b.strokeLinecap,
            "stroke-width": f(a),
            fill: "none",
            style: Re(f(p))
          }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]),
          L("path", {
            class: B(f(r).be("circle", "path")),
            d: f(i),
            stroke: f(g),
            fill: "none",
            opacity: b.percentage ? 1 : 0,
            "stroke-linecap": b.strokeLinecap,
            "stroke-width": f(a),
            style: Re(f(m))
          }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])
        ]))
      ], 6)),
      (b.showText || b.$slots.default) && !b.textInside ? (A(), z("div", {
        key: 2,
        class: B(f(r).e("text")),
        style: Re({ fontSize: `${f(h)}px` })
      }, [
        ie(b.$slots, "default", { percentage: b.percentage }, () => [
          b.status ? (A(), ee(f(ct), { key: 1 }, {
            default: ne(() => [
              (A(), ee(mt(f(v))))
            ]),
            _: 1
          })) : (A(), z("span", { key: 0 }, X(f(E)), 1))
        ])
      ], 6)) : Y("v-if", !0)
    ], 10, ["aria-valuenow"]));
  }
});
var Nb = /* @__PURE__ */ Pe($b, [["__file", "progress.vue"]]);
const Mb = Pt(Nb), xb = ke({
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
}), Fb = ke({
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
}), Db = q({
  name: "ElSkeletonItem"
}), zb = /* @__PURE__ */ q({
  ...Db,
  props: Fb,
  setup(e) {
    const t = Me("skeleton");
    return (n, r) => (A(), z("div", {
      class: B([f(t).e("item"), f(t).e(n.variant)])
    }, [
      n.variant === "image" ? (A(), ee(f(Xh), { key: 0 })) : Y("v-if", !0)
    ], 2));
  }
});
var wo = /* @__PURE__ */ Pe(zb, [["__file", "skeleton-item.vue"]]);
const Bb = (e, t = 0) => {
  if (t === 0)
    return e;
  const n = tt(t) && !!t.initVal, r = D(n);
  let o = null;
  const a = (i) => {
    if (Tn(i)) {
      r.value = e.value;
      return;
    }
    o && clearTimeout(o), o = setTimeout(() => {
      r.value = e.value;
    }, i);
  }, s = (i) => {
    i === "leading" ? Ve(t) ? a(t) : a(t.leading) : tt(t) ? a(t.trailing) : r.value = !1;
  };
  return xe(() => s("leading")), ue(() => e.value, (i) => {
    s(i ? "leading" : "trailing");
  }), r;
}, jb = q({
  name: "ElSkeleton"
}), Vb = /* @__PURE__ */ q({
  ...jb,
  props: xb,
  setup(e, { expose: t }) {
    const n = e, r = Me("skeleton"), o = Bb(Nt(n, "loading"), n.throttle);
    return t({
      uiLoading: o
    }), (a, s) => f(o) ? (A(), z("div", hn({
      key: 0,
      class: [f(r).b(), f(r).is("animated", a.animated)]
    }, a.$attrs), [
      (A(!0), z(Ue, null, Jt(a.count, (i) => (A(), z(Ue, { key: i }, [
        f(o) ? ie(a.$slots, "template", { key: i }, () => [
          W(wo, {
            class: B(f(r).is("first")),
            variant: "p"
          }, null, 8, ["class"]),
          (A(!0), z(Ue, null, Jt(a.rows, (l) => (A(), ee(wo, {
            key: l,
            class: B([
              f(r).e("paragraph"),
              f(r).is("last", l === a.rows && a.rows > 1)
            ]),
            variant: "p"
          }, null, 8, ["class"]))), 128))
        ]) : Y("v-if", !0)
      ], 64))), 128))
    ], 16)) : ie(a.$slots, "default", Nd(hn({ key: 1 }, a.$attrs)));
  }
});
var Ub = /* @__PURE__ */ Pe(Vb, [["__file", "skeleton.vue"]]);
const Wb = Pt(Ub, {
  SkeletonItem: wo
});
is(wo);
const fc = ["success", "info", "warning", "error"], qe = $u({
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
  appendTo: Fe ? document.body : void 0
}), Hb = ke({
  customClass: {
    type: String,
    default: qe.customClass
  },
  center: {
    type: Boolean,
    default: qe.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: qe.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: qe.duration
  },
  icon: {
    type: Hn,
    default: qe.icon
  },
  id: {
    type: String,
    default: qe.id
  },
  message: {
    type: re([
      String,
      Object,
      Function
    ]),
    default: qe.message
  },
  onClose: {
    type: re(Function),
    default: qe.onClose
  },
  showClose: {
    type: Boolean,
    default: qe.showClose
  },
  type: {
    type: String,
    values: fc,
    default: qe.type
  },
  plain: {
    type: Boolean,
    default: qe.plain
  },
  offset: {
    type: Number,
    default: qe.offset
  },
  zIndex: {
    type: Number,
    default: qe.zIndex
  },
  grouping: {
    type: Boolean,
    default: qe.grouping
  },
  repeatNum: {
    type: Number,
    default: qe.repeatNum
  }
}), Kb = {
  destroy: () => !0
}, Et = Md([]), Gb = (e) => {
  const t = Et.findIndex((o) => o.id === e), n = Et[t];
  let r;
  return t > 0 && (r = Et[t - 1]), { current: n, prev: r };
}, Yb = (e) => {
  const { prev: t } = Gb(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Zb = (e, t) => Et.findIndex((r) => r.id === e) > 0 ? 16 : t, qb = q({
  name: "ElMessage"
}), Xb = /* @__PURE__ */ q({
  ...qb,
  props: Hb,
  emits: Kb,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = ov, { ns: o, zIndex: a } = Ou("message"), { currentZIndex: s, nextZIndex: i } = a, l = D(), u = D(!1), c = D(0);
    let p;
    const m = P(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), g = P(() => {
      const k = n.type;
      return { [o.bm("icon", k)]: k && yo[k] };
    }), v = P(() => n.icon || yo[n.type] || ""), h = P(() => Yb(n.id)), E = P(() => Zb(n.id, n.offset) + h.value), d = P(() => c.value + E.value), S = P(() => ({
      top: `${E.value}px`,
      zIndex: s.value
    }));
    function b() {
      n.duration !== 0 && ({ stop: p } = mu(() => {
        C();
      }, n.duration));
    }
    function w() {
      p?.();
    }
    function C() {
      u.value = !1;
    }
    function O({ code: k }) {
      k === xt.esc && C();
    }
    return xe(() => {
      b(), i(), u.value = !0;
    }), ue(() => n.repeatNum, () => {
      w(), b();
    }), Tt(document, "keydown", O), $t(l, () => {
      c.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: d,
      close: C
    }), (k, F) => (A(), ee(tr, {
      name: f(o).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: (M) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: ne(() => [
        gt(L("div", {
          id: k.id,
          ref_key: "messageRef",
          ref: l,
          class: B([
            f(o).b(),
            { [f(o).m(k.type)]: k.type },
            f(o).is("center", k.center),
            f(o).is("closable", k.showClose),
            f(o).is("plain", k.plain),
            k.customClass
          ]),
          style: Re(f(S)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: b
        }, [
          k.repeatNum > 1 ? (A(), ee(f(ib), {
            key: 0,
            value: k.repeatNum,
            type: f(m),
            class: B(f(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Y("v-if", !0),
          f(v) ? (A(), ee(f(ct), {
            key: 1,
            class: B([f(o).e("icon"), f(g)])
          }, {
            default: ne(() => [
              (A(), ee(mt(f(v))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          ie(k.$slots, "default", {}, () => [
            k.dangerouslyUseHTMLString ? (A(), z(Ue, { key: 1 }, [
              Y(" Caution here, message could've been compromised, never use user's input as message "),
              L("p", {
                class: B(f(o).e("content")),
                innerHTML: k.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (A(), z("p", {
              key: 0,
              class: B(f(o).e("content"))
            }, X(k.message), 3))
          ]),
          k.showClose ? (A(), ee(f(ct), {
            key: 2,
            class: B(f(o).e("closeBtn")),
            onClick: Je(C, ["stop"])
          }, {
            default: ne(() => [
              W(f(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Y("v-if", !0)
        ], 46, ["id"]), [
          [tn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Jb = /* @__PURE__ */ Pe(Xb, [["__file", "message.vue"]]);
let Qb = 1;
const pc = (e) => {
  const t = !e || nt(e) || Sr(e) || je(e) ? { message: e } : e, n = {
    ...qe,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (nt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    Ct(r) || (r = document.body), n.appendTo = r;
  }
  return go(wt.grouping) && !n.grouping && (n.grouping = wt.grouping), Ve(wt.duration) && n.duration === 3e3 && (n.duration = wt.duration), Ve(wt.offset) && n.offset === 16 && (n.offset = wt.offset), go(wt.showClose) && !n.showClose && (n.showClose = wt.showClose), n;
}, e1 = (e) => {
  const t = Et.indexOf(e);
  if (t === -1)
    return;
  Et.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, t1 = ({ appendTo: e, ...t }, n) => {
  const r = `message_${Qb++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), e1(c);
    },
    onDestroy: () => {
      co(null, a);
    }
  }, i = W(Jb, s, je(s.message) || Sr(s.message) ? {
    default: je(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || qn._context, co(i, a), e.appendChild(a.firstElementChild);
  const l = i.component, c = {
    id: r,
    vnode: i,
    vm: l,
    handler: {
      close: () => {
        l.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return c;
}, qn = (e = {}, t) => {
  if (!Fe)
    return { close: () => {
    } };
  const n = pc(e);
  if (n.grouping && Et.length) {
    const o = Et.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (Ve(wt.max) && Et.length >= wt.max)
    return { close: () => {
    } };
  const r = t1(n, t);
  return Et.push(r), r.handler;
};
fc.forEach((e) => {
  qn[e] = (t = {}, n) => {
    const r = pc(t);
    return qn({ ...r, type: e }, n);
  };
});
function n1(e) {
  for (const t of Et)
    (!e || e === t.props.type) && t.handler.close();
}
qn.closeAll = n1;
qn._context = null;
const r1 = Lu(qn, "$message"), mc = [
  "success",
  "info",
  "warning",
  "error"
], o1 = ke({
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
    type: Hn
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
    values: [...mc, ""],
    default: ""
  },
  zIndex: Number
}), a1 = {
  destroy: () => !0
}, s1 = q({
  name: "ElNotification"
}), i1 = /* @__PURE__ */ q({
  ...s1,
  props: o1,
  emits: a1,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Ou("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = rv, l = D(!1);
    let u;
    const c = P(() => {
      const b = n.type;
      return b && yo[n.type] ? r.m(b) : "";
    }), p = P(() => n.type && yo[n.type] || n.icon), m = P(() => n.position.endsWith("right") ? "right" : "left"), g = P(() => n.position.startsWith("top") ? "top" : "bottom"), v = P(() => {
      var b;
      return {
        [g.value]: `${n.offset}px`,
        zIndex: (b = n.zIndex) != null ? b : s.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: u } = mu(() => {
        l.value && d();
      }, n.duration));
    }
    function E() {
      u?.();
    }
    function d() {
      l.value = !1;
    }
    function S({ code: b }) {
      b === xt.delete || b === xt.backspace ? E() : b === xt.esc ? l.value && d() : h();
    }
    return xe(() => {
      h(), a(), l.value = !0;
    }), Tt(document, "keydown", S), t({
      visible: l,
      close: d
    }), (b, w) => (A(), ee(tr, {
      name: f(r).b("fade"),
      onBeforeLeave: b.onClose,
      onAfterLeave: (C) => b.$emit("destroy"),
      persisted: ""
    }, {
      default: ne(() => [
        gt(L("div", {
          id: b.id,
          class: B([f(r).b(), b.customClass, f(m)]),
          style: Re(f(v)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: h,
          onClick: b.onClick
        }, [
          f(p) ? (A(), ee(f(ct), {
            key: 0,
            class: B([f(r).e("icon"), f(c)])
          }, {
            default: ne(() => [
              (A(), ee(mt(f(p))))
            ]),
            _: 1
          }, 8, ["class"])) : Y("v-if", !0),
          L("div", {
            class: B(f(r).e("group"))
          }, [
            L("h2", {
              class: B(f(r).e("title")),
              textContent: X(b.title)
            }, null, 10, ["textContent"]),
            gt(L("div", {
              class: B(f(r).e("content")),
              style: Re(b.title ? void 0 : { margin: 0 })
            }, [
              ie(b.$slots, "default", {}, () => [
                b.dangerouslyUseHTMLString ? (A(), z(Ue, { key: 1 }, [
                  Y(" Caution here, message could've been compromised, never use user's input as message "),
                  L("p", { innerHTML: b.message }, null, 8, ["innerHTML"])
                ], 2112)) : (A(), z("p", { key: 0 }, X(b.message), 1))
              ])
            ], 6), [
              [tn, b.message]
            ]),
            b.showClose ? (A(), ee(f(ct), {
              key: 0,
              class: B(f(r).e("closeBtn")),
              onClick: Je(d, ["stop"])
            }, {
              default: ne(() => [
                W(f(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Y("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [tn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var l1 = /* @__PURE__ */ Pe(i1, [["__file", "notification.vue"]]);
const Eo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, La = 16;
let u1 = 1;
const Xn = function(e = {}, t) {
  if (!Fe)
    return { close: () => {
    } };
  (nt(e) || Sr(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  Eo[n].forEach(({ vm: c }) => {
    var p;
    r += (((p = c.el) == null ? void 0 : p.offsetHeight) || 0) + La;
  }), r += La;
  const o = `notification_${u1++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      c1(o, n, a);
    }
  };
  let i = document.body;
  Ct(e.appendTo) ? i = e.appendTo : nt(e.appendTo) && (i = document.querySelector(e.appendTo)), Ct(i) || (i = document.body);
  const l = document.createElement("div"), u = W(l1, s, je(s.message) ? s.message : Sr(s.message) ? () => s.message : null);
  return u.appContext = Tn(t) ? Xn._context : t, u.props.onDestroy = () => {
    co(null, l);
  }, co(u, l), Eo[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
mc.forEach((e) => {
  Xn[e] = (t = {}, n) => ((nt(t) || Sr(t)) && (t = {
    message: t
  }), Xn({ ...t, type: e }, n));
});
function c1(e, t, n) {
  const r = Eo[t], o = r.findIndex(({ vm: u }) => {
    var c;
    return ((c = u.component) == null ? void 0 : c.props.id) === e;
  });
  if (o === -1)
    return;
  const { vm: a } = r[o];
  if (!a)
    return;
  n?.(a);
  const s = a.el.offsetHeight, i = t.split("-")[0];
  r.splice(o, 1);
  const l = r.length;
  if (!(l < 1))
    for (let u = o; u < l; u++) {
      const { el: c, component: p } = r[u].vm, m = Number.parseInt(c.style[i], 10) - s - La;
      p.props.offset = m;
    }
}
function d1() {
  for (const e of Object.values(Eo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Xn.closeAll = d1;
Xn._context = null;
const f1 = Lu(Xn, "$notify");
function p1(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function m1(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var ro;
const bt = "__TAURI_TO_IPC_KEY__";
function g1(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function x(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function gc(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class h1 {
  get rid() {
    return p1(this, ro, "f");
  }
  constructor(t) {
    ro.set(this, void 0), m1(this, ro, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return x("plugin:resources|close", {
      rid: this.rid
    });
  }
}
ro = /* @__PURE__ */ new WeakMap();
var ut;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(ut || (ut = {}));
async function hc(e, t) {
  await x("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Rt(e, t, n) {
  var r;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return x("plugin:event|listen", {
    event: e,
    target: o,
    handler: g1(t)
  }).then((a) => async () => hc(e, a));
}
async function v1(e, t, n) {
  return Rt(e, (r) => {
    hc(e, r.id), t(r);
  }, n);
}
async function vc(e, t) {
  await x("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function y1(e, t, n) {
  await x("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class yc {
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
    return new br(this.width * t, this.height * t);
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
class br {
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
    return new yc(this.width / t, this.height / t);
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
class xn {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof yc ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof br ? this.size : this.size.toPhysical(t);
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
class bc {
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
    return new cn(this.x * t, this.y * t);
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
class cn {
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
    return new bc(this.x / t, this.y / t);
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
class Yr {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof bc ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof cn ? this.position : this.position.toPhysical(t);
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
class _r extends h1 {
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
    return x("plugin:image|new", {
      rgba: So(t),
      width: n,
      height: r
    }).then((o) => new _r(o));
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
    return x("plugin:image|from_bytes", {
      bytes: So(t)
    }).then((n) => new _r(n));
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
    return x("plugin:image|from_path", { path: t }).then((n) => new _r(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return x("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return x("plugin:image|size", { rid: this.rid });
  }
}
function So(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof _r ? e.rid : e;
}
var Ia;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Ia || (Ia = {}));
class b1 {
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
var nl;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(nl || (nl = {}));
function _c() {
  return new wc(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function sa() {
  return x("plugin:window|get_all_windows").then((e) => e.map((t) => new wc(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const ia = ["tauri://created", "tauri://error"];
class wc {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || x("plugin:window|create", {
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
    return (n = (await sa()).find((r) => r.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return _c();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return sa();
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
    for (const t of await sa())
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
    } : Rt(t, n, {
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
    } : v1(t, n, {
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
    if (ia.includes(t)) {
      for (const r of this.listeners[t] || [])
        r({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return vc(t, n);
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
    if (ia.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: r
        });
      return;
    }
    return y1(t, n, r);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return ia.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return x("plugin:window|scale_factor", {
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
    return x("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new cn(t));
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
    return x("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new cn(t));
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
    return x("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new br(t));
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
    return x("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new br(t));
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
    return x("plugin:window|is_fullscreen", {
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
    return x("plugin:window|is_minimized", {
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
    return x("plugin:window|is_maximized", {
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
    return x("plugin:window|is_focused", {
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
    return x("plugin:window|is_decorated", {
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
    return x("plugin:window|is_resizable", {
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
    return x("plugin:window|is_maximizable", {
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
    return x("plugin:window|is_minimizable", {
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
    return x("plugin:window|is_closable", {
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
    return x("plugin:window|is_visible", {
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
    return x("plugin:window|title", {
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
    return x("plugin:window|theme", {
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
    return x("plugin:window|is_always_on_top", {
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
    return x("plugin:window|center", {
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
    return t && (t === Ia.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), x("plugin:window|request_user_attention", {
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
    return x("plugin:window|set_resizable", {
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
    return x("plugin:window|set_enabled", {
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
    return x("plugin:window|is_enabled", {
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
    return x("plugin:window|set_maximizable", {
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
    return x("plugin:window|set_minimizable", {
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
    return x("plugin:window|set_closable", {
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
    return x("plugin:window|set_title", {
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
    return x("plugin:window|maximize", {
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
    return x("plugin:window|unmaximize", {
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
    return x("plugin:window|toggle_maximize", {
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
    return x("plugin:window|minimize", {
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
    return x("plugin:window|unminimize", {
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
    return x("plugin:window|show", {
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
    return x("plugin:window|hide", {
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
    return x("plugin:window|close", {
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
    return x("plugin:window|destroy", {
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
    return x("plugin:window|set_decorations", {
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
    return x("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return x("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return x("plugin:window|set_effects", {
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
    return x("plugin:window|set_always_on_top", {
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
    return x("plugin:window|set_always_on_bottom", {
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
    return x("plugin:window|set_content_protected", {
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
    return x("plugin:window|set_size", {
      label: this.label,
      value: t instanceof xn ? t : new xn(t)
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
    return x("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof xn ? t : t ? new xn(t) : null
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
    return x("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof xn ? t : t ? new xn(t) : null
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
    return x("plugin:window|set_size_constraints", {
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
    return x("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Yr ? t : new Yr(t)
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
    return x("plugin:window|set_fullscreen", {
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
    return x("plugin:window|set_focus", {
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
    return x("plugin:window|set_icon", {
      label: this.label,
      value: So(t)
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
    return x("plugin:window|set_skip_taskbar", {
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
    return x("plugin:window|set_cursor_grab", {
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
    return x("plugin:window|set_cursor_visible", {
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
    return x("plugin:window|set_cursor_icon", {
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
    return x("plugin:window|set_background_color", { color: t });
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
    return x("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Yr ? t : new Yr(t)
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
    return x("plugin:window|set_ignore_cursor_events", {
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
    return x("plugin:window|start_dragging", {
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
    return x("plugin:window|start_resize_dragging", {
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
    return x("plugin:window|set_badge_count", {
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
    return x("plugin:window|set_badge_label", {
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
    return x("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? So(t) : void 0
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
    return x("plugin:window|set_progress_bar", {
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
    return x("plugin:window|set_visible_on_all_workspaces", {
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
    return x("plugin:window|set_title_bar_style", {
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
    return x("plugin:window|set_theme", {
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
      n.payload = new br(n.payload), t(n);
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
      n.payload = new cn(n.payload), t(n);
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
      const r = new b1(n);
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
          position: new cn(s.payload.position)
        }
      });
    }), r = await this.listen(ut.DRAG_OVER, (s) => {
      t({
        ...s,
        payload: {
          type: "over",
          position: new cn(s.payload.position)
        }
      });
    }), o = await this.listen(ut.DRAG_DROP, (s) => {
      t({
        ...s,
        payload: {
          type: "drop",
          paths: s.payload.paths,
          position: new cn(s.payload.position)
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
var rl;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(rl || (rl = {}));
var ol;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(ol || (ol = {}));
var al;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(al || (al = {}));
const Ke = {
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
    r === "center" ? r1({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0
    }) : f1({
      message: t,
      type: n,
      position: r,
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
}, _1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1680942651462'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3789'%20data-darkreader-inline-fill=''%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M214.101333%20512c0-32.512%205.546667-63.701333%2015.36-92.928L57.173333%20290.218667A491.861333%20491.861333%200%200%200%204.693333%20512c0%2079.701333%2018.858667%20154.88%2052.394667%20221.610667l172.202667-129.066667A290.56%20290.56%200%200%201%20214.101333%20512'%20fill='%23FBBC05'%20p-id='3790'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23967002;'%3e%3c/path%3e%3cpath%20d='M516.693333%20216.192c72.106667%200%20137.258667%2025.002667%20188.458667%2065.962667L854.101333%20136.533333C763.349333%2059.178667%20646.997333%2011.392%20516.693333%2011.392c-202.325333%200-376.234667%20113.28-459.52%20278.826667l172.373334%20128.853333c39.68-118.016%20152.832-202.88%20287.146666-202.88'%20fill='%23EA4335'%20p-id='3791'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23a71d11;'%3e%3c/path%3e%3cpath%20d='M516.693333%20807.808c-134.357333%200-247.509333-84.864-287.232-202.88l-172.288%20128.853333c83.242667%20165.546667%20257.152%20278.826667%20459.52%20278.826667%20124.842667%200%20244.053333-43.392%20333.568-124.757333l-163.584-123.818667c-46.122667%2028.458667-104.234667%2043.776-170.026666%2043.776'%20fill='%2334A853'%20p-id='3792'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%232a8642;'%3e%3c/path%3e%3cpath%20d='M1005.397333%20512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696%2065.962667-51.072%20116.650667-104.533333%20149.632l163.541333%20123.818667c93.994667-85.418667%20155.136-212.650667%20155.136-375.850667'%20fill='%234285F4'%20p-id='3793'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%230943a2;'%3e%3c/path%3e%3c/svg%3e", w1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='240px'%20height='240px'%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNla'%20x1='11.905'%20x2='17.941'%20y1='1.952'%20y2='40.401'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffc'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNla)'%20d='M17.572,37.076L20,35.619V10.603c0-1.632-0.796-3.161-2.133-4.096L12.36,2.652%20C11.366,1.956,10,2.667,10,3.881V32.5c0,0.22,0.02,0.555,0.033,0.772C10.369,36.867,14.382,38.99,17.572,37.076z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlb'%20x1='14.342'%20x2='34.121'%20y1='41.478'%20y2='25.575'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2333bef0'/%3e%3cstop%20offset='.159'%20stop-color='%2332b9f0'/%3e%3cstop%20offset='.341'%20stop-color='%232facf2'/%3e%3cstop%20offset='.533'%20stop-color='%232a95f4'/%3e%3cstop%20offset='.733'%20stop-color='%232475f6'/%3e%3cstop%20offset='.936'%20stop-color='%231b4cfa'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlb)'%20d='M32.682,27.904L20,35.5v0l-2.428,1.457c-3.191,1.915-7.203-0.209-7.54-3.804%20C10.372,38.922,15.145,43.5,21,43.5c1.963,0,3.888-0.536,5.568-1.551l6.834-4.126c0.817-0.493,1.522-1.075,2.15-1.707%20C37.906,33.415,36.739,28.669,32.682,27.904z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlc'%20x1='24.223'%20x2='45.699'%20y1='17.113'%20y2='38.588'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffd'/%3e%3cstop%20offset='1'%20stop-color='%231de9b6'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlc)'%20d='M33.636,19.568l-7.607-3.803c-1.234-0.617-2.576,0.618-2.064,1.899l1.755,5.886%20c0.499,1.248,1.479,2.242,2.719,2.758L32.5,28c4.057,0.766,5.352,5.251,3.052,8.117C40.399,31.24,40.088,22.794,33.636,19.568z'/%3e%3c/svg%3e";
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function E1(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const sl = typeof window < "u", Rn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), S1 = (e, t, n) => C1({ l: e, k: t, s: n }), C1 = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), We = (e) => typeof e == "number" && isFinite(e), T1 = (e) => Os(e) === "[object Date]", Co = (e) => Os(e) === "[object RegExp]", Yo = (e) => ye(e) && Object.keys(e).length === 0, Ge = Object.assign, k1 = Object.create, Te = (e = null) => k1(e);
let il;
const oo = () => il || (il = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Te());
function ll(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ul(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function O1(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${ul(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${ul(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const P1 = Object.prototype.hasOwnProperty;
function St(e, t) {
  return P1.call(e, t);
}
const Ne = Array.isArray, Ie = (e) => typeof e == "function", J = (e) => typeof e == "string", $e = (e) => typeof e == "boolean", be = (e) => e !== null && typeof e == "object", L1 = (e) => be(e) && Ie(e.then) && Ie(e.catch), Ec = Object.prototype.toString, Os = (e) => Ec.call(e), ye = (e) => Os(e) === "[object Object]", I1 = (e) => e == null ? "" : Ne(e) || ye(e) && e.toString === Ec ? JSON.stringify(e, null, 2) : String(e);
function Ps(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Zr = (e) => !be(e) || Ne(e);
function ao(e, t) {
  if (Zr(e) || Zr(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (be(r[a]) && !be(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : Te()), Zr(o[a]) || Zr(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function A1(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Aa(e, t, n) {
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
}, R1 = 17;
function Zo(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function $1(e) {
  throw e;
}
const It = " ", N1 = "\r", Xe = `
`, M1 = "\u2028", x1 = "\u2029";
function F1(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (k) => t[k] === N1 && t[k + 1] === Xe, i = (k) => t[k] === Xe, l = (k) => t[k] === x1, u = (k) => t[k] === M1, c = (k) => s(k) || i(k) || l(k) || u(k), p = () => n, m = () => r, g = () => o, v = () => a, h = (k) => s(k) || l(k) || u(k) ? Xe : t[k], E = () => h(n), d = () => h(n + a);
  function S() {
    return a = 0, c(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function b() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function w() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function C(k = 0) {
    a = k;
  }
  function O() {
    const k = n + a;
    for (; k !== n; )
      S();
    a = 0;
  }
  return {
    index: p,
    line: m,
    column: g,
    peekOffset: v,
    charAt: h,
    currentChar: E,
    currentPeek: d,
    next: S,
    peek: b,
    reset: w,
    resetPeek: C,
    skipToPeek: O
  };
}
const Wt = void 0, D1 = ".", cl = "'", z1 = "tokenizer";
function B1(e, t = {}) {
  const n = t.location !== !1, r = F1(e), o = () => r.index(), a = () => A1(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
    currentType: 13,
    offset: i,
    startLoc: s,
    endLoc: s,
    lastType: 13,
    lastOffset: i,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, u = () => l, { onError: c } = t;
  function p(_, T, N, ...Z) {
    const ve = u();
    if (T.column += N, T.offset += N, c) {
      const se = n ? Aa(ve.startLoc, T) : null, y = Zo(_, se, {
        domain: z1,
        args: Z
      });
      c(y);
    }
  }
  function m(_, T, N) {
    _.endLoc = a(), _.currentType = T;
    const Z = { type: T };
    return n && (Z.loc = Aa(_.startLoc, _.endLoc)), N != null && (Z.value = N), Z;
  }
  const g = (_) => m(
    _,
    13
    /* TokenTypes.EOF */
  );
  function v(_, T) {
    return _.currentChar() === T ? (_.next(), T) : (p(we.EXPECTED_TOKEN, a(), 0, T), "");
  }
  function h(_) {
    let T = "";
    for (; _.currentPeek() === It || _.currentPeek() === Xe; )
      T += _.currentPeek(), _.peek();
    return T;
  }
  function E(_) {
    const T = h(_);
    return _.skipToPeek(), T;
  }
  function d(_) {
    if (_ === Wt)
      return !1;
    const T = _.charCodeAt(0);
    return T >= 97 && T <= 122 || // a-z
    T >= 65 && T <= 90 || // A-Z
    T === 95;
  }
  function S(_) {
    if (_ === Wt)
      return !1;
    const T = _.charCodeAt(0);
    return T >= 48 && T <= 57;
  }
  function b(_, T) {
    const { currentType: N } = T;
    if (N !== 2)
      return !1;
    h(_);
    const Z = d(_.currentPeek());
    return _.resetPeek(), Z;
  }
  function w(_, T) {
    const { currentType: N } = T;
    if (N !== 2)
      return !1;
    h(_);
    const Z = _.currentPeek() === "-" ? _.peek() : _.currentPeek(), ve = S(Z);
    return _.resetPeek(), ve;
  }
  function C(_, T) {
    const { currentType: N } = T;
    if (N !== 2)
      return !1;
    h(_);
    const Z = _.currentPeek() === cl;
    return _.resetPeek(), Z;
  }
  function O(_, T) {
    const { currentType: N } = T;
    if (N !== 7)
      return !1;
    h(_);
    const Z = _.currentPeek() === ".";
    return _.resetPeek(), Z;
  }
  function k(_, T) {
    const { currentType: N } = T;
    if (N !== 8)
      return !1;
    h(_);
    const Z = d(_.currentPeek());
    return _.resetPeek(), Z;
  }
  function F(_, T) {
    const { currentType: N } = T;
    if (!(N === 7 || N === 11))
      return !1;
    h(_);
    const Z = _.currentPeek() === ":";
    return _.resetPeek(), Z;
  }
  function M(_, T) {
    const { currentType: N } = T;
    if (N !== 9)
      return !1;
    const Z = () => {
      const se = _.currentPeek();
      return se === "{" ? d(_.peek()) : se === "@" || se === "|" || se === ":" || se === "." || se === It || !se ? !1 : se === Xe ? (_.peek(), Z()) : V(_, !1);
    }, ve = Z();
    return _.resetPeek(), ve;
  }
  function I(_) {
    h(_);
    const T = _.currentPeek() === "|";
    return _.resetPeek(), T;
  }
  function V(_, T = !0) {
    const N = (ve = !1, se = "") => {
      const y = _.currentPeek();
      return y === "{" || y === "@" || !y ? ve : y === "|" ? !(se === It || se === Xe) : y === It ? (_.peek(), N(!0, It)) : y === Xe ? (_.peek(), N(!0, Xe)) : !0;
    }, Z = N();
    return T && _.resetPeek(), Z;
  }
  function U(_, T) {
    const N = _.currentChar();
    return N === Wt ? Wt : T(N) ? (_.next(), N) : null;
  }
  function te(_) {
    const T = _.charCodeAt(0);
    return T >= 97 && T <= 122 || // a-z
    T >= 65 && T <= 90 || // A-Z
    T >= 48 && T <= 57 || // 0-9
    T === 95 || // _
    T === 36;
  }
  function pe(_) {
    return U(_, te);
  }
  function oe(_) {
    const T = _.charCodeAt(0);
    return T >= 97 && T <= 122 || // a-z
    T >= 65 && T <= 90 || // A-Z
    T >= 48 && T <= 57 || // 0-9
    T === 95 || // _
    T === 36 || // $
    T === 45;
  }
  function ce(_) {
    return U(_, oe);
  }
  function j(_) {
    const T = _.charCodeAt(0);
    return T >= 48 && T <= 57;
  }
  function ge(_) {
    return U(_, j);
  }
  function he(_) {
    const T = _.charCodeAt(0);
    return T >= 48 && T <= 57 || // 0-9
    T >= 65 && T <= 70 || // A-F
    T >= 97 && T <= 102;
  }
  function Le(_) {
    return U(_, he);
  }
  function De(_) {
    let T = "", N = "";
    for (; T = ge(_); )
      N += T;
    return N;
  }
  function Ye(_) {
    let T = "";
    for (; ; ) {
      const N = _.currentChar();
      if (N === "{" || N === "}" || N === "@" || N === "|" || !N)
        break;
      if (N === It || N === Xe)
        if (V(_))
          T += N, _.next();
        else {
          if (I(_))
            break;
          T += N, _.next();
        }
      else
        T += N, _.next();
    }
    return T;
  }
  function K(_) {
    E(_);
    let T = "", N = "";
    for (; T = ce(_); )
      N += T;
    const Z = _.currentChar();
    if (Z && Z !== "}" && Z !== Wt && Z !== It && Z !== Xe && Z !== "　") {
      const ve = le(_);
      return p(we.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, N + ve), N + ve;
    }
    return _.currentChar() === Wt && p(we.UNTERMINATED_CLOSING_BRACE, a(), 0), N;
  }
  function Q(_) {
    E(_);
    let T = "";
    return _.currentChar() === "-" ? (_.next(), T += `-${De(_)}`) : T += De(_), _.currentChar() === Wt && p(we.UNTERMINATED_CLOSING_BRACE, a(), 0), T;
  }
  function me(_) {
    return _ !== cl && _ !== Xe;
  }
  function Se(_) {
    E(_), v(_, "'");
    let T = "", N = "";
    for (; T = U(_, me); )
      T === "\\" ? N += Ce(_) : N += T;
    const Z = _.currentChar();
    return Z === Xe || Z === Wt ? (p(we.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), Z === Xe && (_.next(), v(_, "'")), N) : (v(_, "'"), N);
  }
  function Ce(_) {
    const T = _.currentChar();
    switch (T) {
      case "\\":
      case "'":
        return _.next(), `\\${T}`;
      case "u":
        return ae(_, T, 4);
      case "U":
        return ae(_, T, 6);
      default:
        return p(we.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, T), "";
    }
  }
  function ae(_, T, N) {
    v(_, T);
    let Z = "";
    for (let ve = 0; ve < N; ve++) {
      const se = Le(_);
      if (!se) {
        p(we.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${T}${Z}${_.currentChar()}`);
        break;
      }
      Z += se;
    }
    return `\\${T}${Z}`;
  }
  function ze(_) {
    return _ !== "{" && _ !== "}" && _ !== It && _ !== Xe;
  }
  function le(_) {
    E(_);
    let T = "", N = "";
    for (; T = U(_, ze); )
      N += T;
    return N;
  }
  function He(_) {
    let T = "", N = "";
    for (; T = pe(_); )
      N += T;
    return N;
  }
  function _t(_) {
    const T = (N) => {
      const Z = _.currentChar();
      return Z === "{" || Z === "@" || Z === "|" || Z === "(" || Z === ")" || !Z || Z === It ? N : (N += Z, _.next(), T(N));
    };
    return T("");
  }
  function at(_) {
    E(_);
    const T = v(
      _,
      "|"
      /* TokenChars.Pipe */
    );
    return E(_), T;
  }
  function st(_, T) {
    let N = null;
    switch (_.currentChar()) {
      case "{":
        return T.braceNest >= 1 && p(we.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), _.next(), N = m(
          T,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(_), T.braceNest++, N;
      case "}":
        return T.braceNest > 0 && T.currentType === 2 && p(we.EMPTY_PLACEHOLDER, a(), 0), _.next(), N = m(
          T,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), T.braceNest--, T.braceNest > 0 && E(_), T.inLinked && T.braceNest === 0 && (T.inLinked = !1), N;
      case "@":
        return T.braceNest > 0 && p(we.UNTERMINATED_CLOSING_BRACE, a(), 0), N = it(_, T) || g(T), T.braceNest = 0, N;
      default: {
        let ve = !0, se = !0, y = !0;
        if (I(_))
          return T.braceNest > 0 && p(we.UNTERMINATED_CLOSING_BRACE, a(), 0), N = m(T, 1, at(_)), T.braceNest = 0, T.inLinked = !1, N;
        if (T.braceNest > 0 && (T.currentType === 4 || T.currentType === 5 || T.currentType === 6))
          return p(we.UNTERMINATED_CLOSING_BRACE, a(), 0), T.braceNest = 0, ft(_, T);
        if (ve = b(_, T))
          return N = m(T, 4, K(_)), E(_), N;
        if (se = w(_, T))
          return N = m(T, 5, Q(_)), E(_), N;
        if (y = C(_, T))
          return N = m(T, 6, Se(_)), E(_), N;
        if (!ve && !se && !y)
          return N = m(T, 12, le(_)), p(we.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, N.value), E(_), N;
        break;
      }
    }
    return N;
  }
  function it(_, T) {
    const { currentType: N } = T;
    let Z = null;
    const ve = _.currentChar();
    switch ((N === 7 || N === 8 || N === 11 || N === 9) && (ve === Xe || ve === It) && p(we.INVALID_LINKED_FORMAT, a(), 0), ve) {
      case "@":
        return _.next(), Z = m(
          T,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), T.inLinked = !0, Z;
      case ".":
        return E(_), _.next(), m(
          T,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(_), _.next(), m(
          T,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return I(_) ? (Z = m(T, 1, at(_)), T.braceNest = 0, T.inLinked = !1, Z) : O(_, T) || F(_, T) ? (E(_), it(_, T)) : k(_, T) ? (E(_), m(T, 11, He(_))) : M(_, T) ? (E(_), ve === "{" ? st(_, T) || Z : m(T, 10, _t(_))) : (N === 7 && p(we.INVALID_LINKED_FORMAT, a(), 0), T.braceNest = 0, T.inLinked = !1, ft(_, T));
    }
  }
  function ft(_, T) {
    let N = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (T.braceNest > 0)
      return st(_, T) || g(T);
    if (T.inLinked)
      return it(_, T) || g(T);
    switch (_.currentChar()) {
      case "{":
        return st(_, T) || g(T);
      case "}":
        return p(we.UNBALANCED_CLOSING_BRACE, a(), 0), _.next(), m(
          T,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return it(_, T) || g(T);
      default: {
        if (I(_))
          return N = m(T, 1, at(_)), T.braceNest = 0, T.inLinked = !1, N;
        if (V(_))
          return m(T, 0, Ye(_));
        break;
      }
    }
    return N;
  }
  function Lt() {
    const { currentType: _, offset: T, startLoc: N, endLoc: Z } = l;
    return l.lastType = _, l.lastOffset = T, l.lastStartLoc = N, l.lastEndLoc = Z, l.offset = o(), l.startLoc = a(), r.currentChar() === Wt ? m(
      l,
      13
      /* TokenTypes.EOF */
    ) : ft(r, l);
  }
  return {
    nextToken: Lt,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const j1 = "parser", V1 = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function U1(e, t, n) {
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
function W1(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(d, S, b, w, ...C) {
    const O = d.currentPosition();
    if (O.offset += w, O.column += w, n) {
      const k = t ? Aa(b, O) : null, F = Zo(S, k, {
        domain: j1,
        args: C
      });
      n(F);
    }
  }
  function o(d, S, b) {
    const w = { type: d };
    return t && (w.start = S, w.end = S, w.loc = { start: b, end: b }), w;
  }
  function a(d, S, b, w) {
    t && (d.end = S, d.loc && (d.loc.end = b));
  }
  function s(d, S) {
    const b = d.context(), w = o(3, b.offset, b.startLoc);
    return w.value = S, a(w, d.currentOffset(), d.currentPosition()), w;
  }
  function i(d, S) {
    const b = d.context(), { lastOffset: w, lastStartLoc: C } = b, O = o(5, w, C);
    return O.index = parseInt(S, 10), d.nextToken(), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function l(d, S) {
    const b = d.context(), { lastOffset: w, lastStartLoc: C } = b, O = o(4, w, C);
    return O.key = S, d.nextToken(), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function u(d, S) {
    const b = d.context(), { lastOffset: w, lastStartLoc: C } = b, O = o(9, w, C);
    return O.value = S.replace(V1, U1), d.nextToken(), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function c(d) {
    const S = d.nextToken(), b = d.context(), { lastOffset: w, lastStartLoc: C } = b, O = o(8, w, C);
    return S.type !== 11 ? (r(d, we.UNEXPECTED_EMPTY_LINKED_MODIFIER, b.lastStartLoc, 0), O.value = "", a(O, w, C), {
      nextConsumeToken: S,
      node: O
    }) : (S.value == null && r(d, we.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, At(S)), O.value = S.value || "", a(O, d.currentOffset(), d.currentPosition()), {
      node: O
    });
  }
  function p(d, S) {
    const b = d.context(), w = o(7, b.offset, b.startLoc);
    return w.value = S, a(w, d.currentOffset(), d.currentPosition()), w;
  }
  function m(d) {
    const S = d.context(), b = o(6, S.offset, S.startLoc);
    let w = d.nextToken();
    if (w.type === 8) {
      const C = c(d);
      b.modifier = C.node, w = C.nextConsumeToken || d.nextToken();
    }
    switch (w.type !== 9 && r(d, we.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, At(w)), w = d.nextToken(), w.type === 2 && (w = d.nextToken()), w.type) {
      case 10:
        w.value == null && r(d, we.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, At(w)), b.key = p(d, w.value || "");
        break;
      case 4:
        w.value == null && r(d, we.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, At(w)), b.key = l(d, w.value || "");
        break;
      case 5:
        w.value == null && r(d, we.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, At(w)), b.key = i(d, w.value || "");
        break;
      case 6:
        w.value == null && r(d, we.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, At(w)), b.key = u(d, w.value || "");
        break;
      default: {
        r(d, we.UNEXPECTED_EMPTY_LINKED_KEY, S.lastStartLoc, 0);
        const C = d.context(), O = o(7, C.offset, C.startLoc);
        return O.value = "", a(O, C.offset, C.startLoc), b.key = O, a(b, C.offset, C.startLoc), {
          nextConsumeToken: w,
          node: b
        };
      }
    }
    return a(b, d.currentOffset(), d.currentPosition()), {
      node: b
    };
  }
  function g(d) {
    const S = d.context(), b = S.currentType === 1 ? d.currentOffset() : S.offset, w = S.currentType === 1 ? S.endLoc : S.startLoc, C = o(2, b, w);
    C.items = [];
    let O = null;
    do {
      const M = O || d.nextToken();
      switch (O = null, M.type) {
        case 0:
          M.value == null && r(d, we.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, At(M)), C.items.push(s(d, M.value || ""));
          break;
        case 5:
          M.value == null && r(d, we.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, At(M)), C.items.push(i(d, M.value || ""));
          break;
        case 4:
          M.value == null && r(d, we.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, At(M)), C.items.push(l(d, M.value || ""));
          break;
        case 6:
          M.value == null && r(d, we.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, At(M)), C.items.push(u(d, M.value || ""));
          break;
        case 7: {
          const I = m(d);
          C.items.push(I.node), O = I.nextConsumeToken || null;
          break;
        }
      }
    } while (S.currentType !== 13 && S.currentType !== 1);
    const k = S.currentType === 1 ? S.lastOffset : d.currentOffset(), F = S.currentType === 1 ? S.lastEndLoc : d.currentPosition();
    return a(C, k, F), C;
  }
  function v(d, S, b, w) {
    const C = d.context();
    let O = w.items.length === 0;
    const k = o(1, S, b);
    k.cases = [], k.cases.push(w);
    do {
      const F = g(d);
      O || (O = F.items.length === 0), k.cases.push(F);
    } while (C.currentType !== 13);
    return O && r(d, we.MUST_HAVE_MESSAGES_IN_PLURAL, b, 0), a(k, d.currentOffset(), d.currentPosition()), k;
  }
  function h(d) {
    const S = d.context(), { offset: b, startLoc: w } = S, C = g(d);
    return S.currentType === 13 ? C : v(d, b, w, C);
  }
  function E(d) {
    const S = B1(d, Ge({}, e)), b = S.context(), w = o(0, b.offset, b.startLoc);
    return t && w.loc && (w.loc.source = d), w.body = h(S), e.onCacheKey && (w.cacheKey = e.onCacheKey(d)), b.currentType !== 13 && r(S, we.UNEXPECTED_LEXICAL_ANALYSIS, b.lastStartLoc, 0, d[b.offset] || ""), a(w, S.currentOffset(), S.currentPosition()), w;
  }
  return { parse: E };
}
function At(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function H1(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function dl(e, t) {
  for (let n = 0; n < e.length; n++)
    Ls(e[n], t);
}
function Ls(e, t) {
  switch (e.type) {
    case 1:
      dl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      dl(e.items, t);
      break;
    case 6: {
      Ls(e.key, t), t.helper(
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
function K1(e, t = {}) {
  const n = H1(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ls(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function G1(e) {
  const t = e.body;
  return t.type === 2 ? fl(t) : t.cases.forEach((n) => fl(n)), e;
}
function fl(e) {
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
      e.static = Ps(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function zn(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      zn(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        zn(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        zn(n[r]);
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
      zn(t.key), t.k = t.key, delete t.key, t.modifier && (zn(t.modifier), t.m = t.modifier, delete t.modifier);
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
function Y1(e, t) {
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
  const i = () => s;
  function l(h, E) {
    s.code += h;
  }
  function u(h, E = !0) {
    const d = E ? r : "";
    l(o ? d + "  ".repeat(h) : d);
  }
  function c(h = !0) {
    const E = ++s.indentLevel;
    h && u(E);
  }
  function p(h = !0) {
    const E = --s.indentLevel;
    h && u(E);
  }
  function m() {
    u(s.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: c,
    deindent: p,
    newline: m,
    helper: (h) => `_${h}`,
    needIndent: () => s.needIndent
  };
}
function Z1(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Jn(e, t.key), t.modifier ? (e.push(", "), Jn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function q1(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (Jn(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function X1(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (Jn(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function J1(e, t) {
  t.body ? Jn(e, t.body) : e.push("null");
}
function Jn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      J1(e, t);
      break;
    case 1:
      X1(e, t);
      break;
    case 2:
      q1(e, t);
      break;
    case 6:
      Z1(e, t);
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
const Q1 = (e, t = {}) => {
  const n = J(t.mode) ? t.mode : "normal", r = J(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = Y1(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${Ps(s.map((c) => `${c}: _${c}`), ", ")} } = ctx`), i.newline()), i.push("return "), Jn(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function e_(e, t = {}) {
  const n = Ge({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = W1(n).parse(e);
  return r ? (a && G1(i), o && zn(i), { ast: i, code: "" }) : (K1(i, n), Q1(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function t_() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (oo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Dt(e) {
  return be(e) && Is(e) === 0 && (St(e, "b") || St(e, "body"));
}
const Sc = ["b", "body"];
function n_(e) {
  return bn(e, Sc);
}
const Cc = ["c", "cases"];
function r_(e) {
  return bn(e, Cc, []);
}
const Tc = ["s", "static"];
function o_(e) {
  return bn(e, Tc);
}
const kc = ["i", "items"];
function a_(e) {
  return bn(e, kc, []);
}
const Oc = ["t", "type"];
function Is(e) {
  return bn(e, Oc);
}
const Pc = ["v", "value"];
function qr(e, t) {
  const n = bn(e, Pc);
  if (n != null)
    return n;
  throw Ar(t);
}
const Lc = ["m", "modifier"];
function s_(e) {
  return bn(e, Lc);
}
const Ic = ["k", "key"];
function i_(e) {
  const t = bn(e, Ic);
  if (t)
    return t;
  throw Ar(
    6
    /* NodeTypes.Linked */
  );
}
function bn(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (St(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Ac = [
  ...Sc,
  ...Cc,
  ...Tc,
  ...kc,
  ...Ic,
  ...Lc,
  ...Pc,
  ...Oc
];
function Ar(e) {
  return new Error(`unhandled node type: ${e}`);
}
function la(e) {
  return (n) => l_(n, e);
}
function l_(e, t) {
  const n = n_(t);
  if (n == null)
    throw Ar(
      0
      /* NodeTypes.Resource */
    );
  if (Is(n) === 1) {
    const a = r_(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      pl(e, i)
    ], []));
  } else
    return pl(e, n);
}
function pl(e, t) {
  const n = o_(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = a_(t).reduce((o, a) => [...o, Ra(e, a)], []);
    return e.normalize(r);
  }
}
function Ra(e, t) {
  const n = Is(t);
  switch (n) {
    case 3:
      return qr(t, n);
    case 9:
      return qr(t, n);
    case 4: {
      const r = t;
      if (St(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (St(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Ar(n);
    }
    case 5: {
      const r = t;
      if (St(r, "i") && We(r.i))
        return e.interpolate(e.list(r.i));
      if (St(r, "index") && We(r.index))
        return e.interpolate(e.list(r.index));
      throw Ar(n);
    }
    case 6: {
      const r = t, o = s_(r), a = i_(r);
      return e.linked(Ra(e, a), o ? Ra(e, o) : void 0, e.type);
    }
    case 7:
      return qr(t, n);
    case 8:
      return qr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const u_ = (e) => e;
let Xr = Te();
function c_(e, t = {}) {
  let n = !1;
  const r = t.onError || $1;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...e_(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function d_(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && J(e)) {
    $e(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || u_)(e), o = Xr[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = c_(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = la(a);
    return s ? i : Xr[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Xr[n];
      return r || (Xr[n] = la(e));
    } else
      return la(e);
  }
}
const Zt = {
  INVALID_ARGUMENT: R1,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, f_ = 24;
function qt(e) {
  return Zo(e, null, void 0);
}
function As(e, t) {
  return t.locale != null ? ml(t.locale) : ml(e.locale);
}
let ua;
function ml(e) {
  if (J(e))
    return e;
  if (Ie(e)) {
    if (e.resolvedOnce && ua != null)
      return ua;
    if (e.constructor.name === "Function") {
      const t = e();
      if (L1(t))
        throw qt(Zt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return ua = t;
    } else
      throw qt(Zt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw qt(Zt.NOT_SUPPORT_LOCALE_TYPE);
}
function p_(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Ne(t) ? t : be(t) ? Object.keys(t) : J(t) ? [t] : [n]
  ])];
}
function Rc(e, t, n) {
  const r = J(n) ? n : To, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; Ne(s); )
      s = gl(a, s, t);
    const i = Ne(t) || !ye(t) ? t : t.default ? t.default : null;
    s = J(i) ? [i] : i, Ne(s) && gl(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function gl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && $e(r); o++) {
    const a = t[o];
    J(a) && (r = m_(e, t[o], n));
  }
  return r;
}
function m_(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = g_(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function g_(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Ne(n) || ye(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const _n = [];
_n[
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
_n[
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
_n[
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
_n[
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
_n[
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
_n[
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
_n[
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
const h_ = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function v_(e) {
  return h_.test(e);
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
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : v_(t) ? y_(t) : "*" + t;
}
function w_(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, i, l, u, c, p;
  const m = [];
  m[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = i : s += i;
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
  function g() {
    const v = e[n + 1];
    if (r === 5 && v === "'" || r === 6 && v === '"')
      return n++, i = "\\" + v, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && g())) {
      if (l = b_(a), p = _n[r], u = p[l] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (c = m[u[1]], c && (i = a, c() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const hl = /* @__PURE__ */ new Map();
function E_(e, t) {
  return be(e) ? e[t] : null;
}
function S_(e, t) {
  if (!be(e))
    return null;
  let n = hl.get(t);
  if (n || (n = w_(t), n && hl.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Ac.includes(s) && Dt(o))
      return null;
    const i = o[s];
    if (i === void 0 || Ie(o))
      return null;
    o = i, a++;
  }
  return o;
}
const C_ = "11.2.2", qo = -1, To = "en-US", vl = "", yl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function T_() {
  return {
    upper: (e, t) => t === "text" && J(e) ? e.toUpperCase() : t === "vnode" && be(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && J(e) ? e.toLowerCase() : t === "vnode" && be(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && J(e) ? yl(e) : t === "vnode" && be(e) && "__v_isVNode" in e ? yl(e.children) : e
  };
}
let $c;
function k_(e) {
  $c = e;
}
let Nc;
function O_(e) {
  Nc = e;
}
let Mc;
function P_(e) {
  Mc = e;
}
let xc = null;
const bl = (e) => {
  xc = e;
}, L_ = () => xc;
let _l = 0;
function I_(e = {}) {
  const t = Ie(e.onWarn) ? e.onWarn : E1, n = J(e.version) ? e.version : C_, r = J(e.locale) || Ie(e.locale) ? e.locale : To, o = Ie(r) ? To : r, a = Ne(e.fallbackLocale) || ye(e.fallbackLocale) || J(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = ye(e.messages) ? e.messages : ca(o), i = ye(e.datetimeFormats) ? e.datetimeFormats : ca(o), l = ye(e.numberFormats) ? e.numberFormats : ca(o), u = Ge(Te(), e.modifiers, T_()), c = e.pluralRules || Te(), p = Ie(e.missing) ? e.missing : null, m = $e(e.missingWarn) || Co(e.missingWarn) ? e.missingWarn : !0, g = $e(e.fallbackWarn) || Co(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, h = !!e.unresolving, E = Ie(e.postTranslation) ? e.postTranslation : null, d = ye(e.processor) ? e.processor : null, S = $e(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, b = !!e.escapeParameter, w = Ie(e.messageCompiler) ? e.messageCompiler : $c, C = Ie(e.messageResolver) ? e.messageResolver : Nc || E_, O = Ie(e.localeFallbacker) ? e.localeFallbacker : Mc || p_, k = be(e.fallbackContext) ? e.fallbackContext : void 0, F = e, M = be(F.__datetimeFormatters) ? F.__datetimeFormatters : /* @__PURE__ */ new Map(), I = be(F.__numberFormatters) ? F.__numberFormatters : /* @__PURE__ */ new Map(), V = be(F.__meta) ? F.__meta : {};
  _l++;
  const U = {
    version: n,
    cid: _l,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: u,
    pluralRules: c,
    missing: p,
    missingWarn: m,
    fallbackWarn: g,
    fallbackFormat: v,
    unresolving: h,
    postTranslation: E,
    processor: d,
    warnHtmlMessage: S,
    escapeParameter: b,
    messageCompiler: w,
    messageResolver: C,
    localeFallbacker: O,
    fallbackContext: k,
    onWarn: t,
    __meta: V
  };
  return U.datetimeFormats = i, U.numberFormats = l, U.__datetimeFormatters = M, U.__numberFormatters = I, U;
}
const ca = (e) => ({ [e]: Te() });
function Rs(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return J(i) ? i : t;
  } else
    return t;
}
function ur(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function A_(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function R_(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (A_(e, t[r]))
      return !0;
  return !1;
}
function wl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, c, p] = $a(...t), m = $e(c.missingWarn) ? c.missingWarn : e.missingWarn;
  $e(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const g = !!c.part, v = As(e, c), h = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    v
  );
  if (!J(l) || l === "")
    return new Intl.DateTimeFormat(v, p).format(u);
  let E = {}, d, S = null;
  const b = "datetime format";
  for (let O = 0; O < h.length && (d = h[O], E = n[d] || {}, S = E[l], !ye(S)); O++)
    Rs(e, l, d, m, b);
  if (!ye(S) || !J(d))
    return r ? qo : l;
  let w = `${d}__${l}`;
  Yo(p) || (w = `${w}__${JSON.stringify(p)}`);
  let C = i.get(w);
  return C || (C = new Intl.DateTimeFormat(d, Ge({}, S, p)), i.set(w, C)), g ? C.formatToParts(u) : C.format(u);
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
function $a(...e) {
  const [t, n, r, o] = e, a = Te();
  let s = Te(), i;
  if (J(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw qt(Zt.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw qt(Zt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (T1(t)) {
    if (isNaN(t.getTime()))
      throw qt(Zt.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (We(t))
    i = t;
  else
    throw qt(Zt.INVALID_ARGUMENT);
  return J(n) ? a.key = n : ye(n) && Object.keys(n).forEach((l) => {
    Fc.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), J(r) ? a.locale = r : ye(r) && (s = r), ye(o) && (s = o), [a.key || "", i, a, s];
}
function El(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Sl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, c, p] = Na(...t), m = $e(c.missingWarn) ? c.missingWarn : e.missingWarn;
  $e(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
  const g = !!c.part, v = As(e, c), h = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    v
  );
  if (!J(l) || l === "")
    return new Intl.NumberFormat(v, p).format(u);
  let E = {}, d, S = null;
  const b = "number format";
  for (let O = 0; O < h.length && (d = h[O], E = n[d] || {}, S = E[l], !ye(S)); O++)
    Rs(e, l, d, m, b);
  if (!ye(S) || !J(d))
    return r ? qo : l;
  let w = `${d}__${l}`;
  Yo(p) || (w = `${w}__${JSON.stringify(p)}`);
  let C = i.get(w);
  return C || (C = new Intl.NumberFormat(d, Ge({}, S, p)), i.set(w, C)), g ? C.formatToParts(u) : C.format(u);
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
function Na(...e) {
  const [t, n, r, o] = e, a = Te();
  let s = Te();
  if (!We(t))
    throw qt(Zt.INVALID_ARGUMENT);
  const i = t;
  return J(n) ? a.key = n : ye(n) && Object.keys(n).forEach((l) => {
    Dc.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), J(r) ? a.locale = r : ye(r) && (s = r), ye(o) && (s = o), [a.key || "", i, a, s];
}
function Cl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const $_ = (e) => e, N_ = (e) => "", M_ = "text", x_ = (e) => e.length === 0 ? "" : Ps(e), F_ = I1;
function Tl(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function D_(e) {
  const t = We(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (We(e.named.count) || We(e.named.n)) ? We(e.named.count) ? e.named.count : We(e.named.n) ? e.named.n : t : t;
}
function z_(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function B_(e = {}) {
  const t = e.locale, n = D_(e), r = be(e.pluralRules) && J(t) && Ie(e.pluralRules[t]) ? e.pluralRules[t] : Tl, o = be(e.pluralRules) && J(t) && Ie(e.pluralRules[t]) ? Tl : void 0, a = (d) => d[r(n, d.length, o)], s = e.list || [], i = (d) => s[d], l = e.named || Te();
  We(e.pluralIndex) && z_(n, l);
  const u = (d) => l[d];
  function c(d, S) {
    const b = Ie(e.messages) ? e.messages(d, !!S) : be(e.messages) ? e.messages[d] : !1;
    return b || (e.parent ? e.parent.message(d) : N_);
  }
  const p = (d) => e.modifiers ? e.modifiers[d] : $_, m = ye(e.processor) && Ie(e.processor.normalize) ? e.processor.normalize : x_, g = ye(e.processor) && Ie(e.processor.interpolate) ? e.processor.interpolate : F_, v = ye(e.processor) && J(e.processor.type) ? e.processor.type : M_, E = {
    list: i,
    named: u,
    plural: a,
    linked: (d, ...S) => {
      const [b, w] = S;
      let C = "text", O = "";
      S.length === 1 ? be(b) ? (O = b.modifier || O, C = b.type || C) : J(b) && (O = b || O) : S.length === 2 && (J(b) && (O = b || O), J(w) && (C = w || C));
      const k = c(d, !0)(E), F = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        C === "vnode" && Ne(k) && O ? k[0] : k
      );
      return O ? p(O)(F, C) : F;
    },
    message: c,
    type: v,
    interpolate: g,
    normalize: m,
    values: Ge(Te(), s, l)
  };
  return E;
}
const kl = () => "", en = (e) => Ie(e);
function Ol(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = Ma(...t), c = $e(u.missingWarn) ? u.missingWarn : e.missingWarn, p = $e(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = $e(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, g = !!u.resolvedMessage, v = J(u.default) || $e(u.default) ? $e(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, h = n || v != null && (J(v) || Ie(v)), E = As(e, u);
  m && j_(u);
  let [d, S, b] = g ? [
    l,
    E,
    i[E] || Te()
  ] : zc(e, l, E, s, p, c), w = d, C = l;
  if (!g && !(J(w) || Dt(w) || en(w)) && h && (w = v, C = w), !g && (!(J(w) || Dt(w) || en(w)) || !J(S)))
    return o ? qo : l;
  let O = !1;
  const k = () => {
    O = !0;
  }, F = en(w) ? w : Bc(e, l, S, w, C, k);
  if (O)
    return w;
  const M = W_(e, S, b, u), I = B_(M), V = V_(e, F, I);
  let U = r ? r(V, l) : V;
  return m && J(U) && (U = O1(U)), U;
}
function j_(e) {
  Ne(e.list) ? e.list = e.list.map((t) => J(t) ? ll(t) : t) : be(e.named) && Object.keys(e.named).forEach((t) => {
    J(e.named[t]) && (e.named[t] = ll(e.named[t]));
  });
}
function zc(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, c = u(e, r, n);
  let p = Te(), m, g = null;
  const v = "translate";
  for (let h = 0; h < c.length && (m = c[h], p = s[m] || Te(), (g = l(p, t)) === null && (g = p[t]), !(J(g) || Dt(g) || en(g))); h++)
    if (!R_(m, c)) {
      const E = Rs(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        a,
        v
      );
      E !== t && (g = E);
    }
  return [g, m, p];
}
function Bc(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (en(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, U_(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function V_(e, t, n) {
  return t(n);
}
function Ma(...e) {
  const [t, n, r] = e, o = Te();
  if (!J(t) && !We(t) && !en(t) && !Dt(t))
    throw qt(Zt.INVALID_ARGUMENT);
  const a = We(t) ? String(t) : (en(t), t);
  return We(n) ? o.plural = n : J(n) ? o.default = n : ye(n) && !Yo(n) ? o.named = n : Ne(n) && (o.list = n), We(r) ? o.plural = r : J(r) ? o.default = r : ye(r) && Ge(o, r), [a, o];
}
function U_(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => S1(t, n, s)
  };
}
function W_(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: c } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (g, v) => {
      let h = s(n, g);
      if (h == null && (c || v)) {
        const [, , E] = zc(
          c || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          g,
          t,
          i,
          l,
          u
        );
        h = s(E, g);
      }
      if (J(h) || Dt(h)) {
        let E = !1;
        const S = Bc(e, g, t, h, g, () => {
          E = !0;
        });
        return E ? kl : S;
      } else return en(h) ? h : kl;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), We(r.plural) && (m.pluralIndex = r.plural), m;
}
t_();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const H_ = "11.2.2";
function K_() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (oo().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (oo().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (oo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Qn = {
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
function Rr(e, ...t) {
  return Zo(e, null, void 0);
}
const xa = /* @__PURE__ */ Rn("__translateVNode"), Fa = /* @__PURE__ */ Rn("__datetimeParts"), Da = /* @__PURE__ */ Rn("__numberParts"), G_ = Rn("__setPluralRules"), jc = /* @__PURE__ */ Rn("__injectWithOption"), za = /* @__PURE__ */ Rn("__dispose");
function $r(e) {
  if (!be(e) || Dt(e))
    return e;
  for (const t in e)
    if (St(e, t))
      if (!t.includes("."))
        be(e[t]) && $r(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = Te()), !be(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (Dt(o) ? Ac.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Dt(o)) {
          const s = o[n[r]];
          be(s) && $r(s);
        }
      }
  return e;
}
function Vc(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = ye(n) ? n : Ne(r) ? Te() : { [e]: Te() };
  if (Ne(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || Te(), ao(u, s[l])) : ao(u, s);
    } else
      J(i) && ao(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      St(s, i) && $r(s[i]);
  return s;
}
function Y_(e) {
  return e.type;
}
function Z_(e, t, n) {
  let r = be(t.messages) ? t.messages : Te();
  "__i18nGlobal" in n && (r = Vc(e.locale.value, {
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
function Pl(e) {
  return W(Gl, null, e, 0);
}
function Uc() {
  return "currentInstance" in eo ? eo["currentInstance"] : eo.getCurrentInstance();
}
const Ll = () => [], q_ = () => !1;
let Il = 0;
function Al(e) {
  return (t, n, r, o) => e(n, r, Uc() || void 0, o);
}
function X_(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = sl ? D : mn;
  let s = $e(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : J(e.locale) ? e.locale : To
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : J(e.fallbackLocale) || Ne(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(Vc(i.value, e)), c = a(ye(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = a(ye(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : $e(e.missingWarn) || Co(e.missingWarn) ? e.missingWarn : !0, g = t ? t.fallbackWarn : $e(e.fallbackWarn) || Co(e.fallbackWarn) ? e.fallbackWarn : !0, v = t ? t.fallbackRoot : $e(e.fallbackRoot) ? e.fallbackRoot : !0, h = !!e.fallbackFormat, E = Ie(e.missing) ? e.missing : null, d = Ie(e.missing) ? Al(e.missing) : null, S = Ie(e.postTranslation) ? e.postTranslation : null, b = t ? t.warnHtmlMessage : $e(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, w = !!e.escapeParameter;
  const C = t ? t.modifiers : ye(e.modifiers) ? e.modifiers : {};
  let O = e.pluralRules || t && t.pluralRules, k;
  k = (() => {
    r && bl(null);
    const y = {
      version: H_,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: C,
      pluralRules: O,
      missing: d === null ? void 0 : d,
      missingWarn: m,
      fallbackWarn: g,
      fallbackFormat: h,
      unresolving: !0,
      postTranslation: S === null ? void 0 : S,
      warnHtmlMessage: b,
      escapeParameter: w,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    y.datetimeFormats = c.value, y.numberFormats = p.value, y.__datetimeFormatters = ye(k) ? k.__datetimeFormatters : void 0, y.__numberFormatters = ye(k) ? k.__numberFormatters : void 0;
    const $ = I_(y);
    return r && bl($), $;
  })(), ur(k, i.value, l.value);
  function M() {
    return [
      i.value,
      l.value,
      u.value,
      c.value,
      p.value
    ];
  }
  const I = P({
    get: () => i.value,
    set: (y) => {
      k.locale = y, i.value = y;
    }
  }), V = P({
    get: () => l.value,
    set: (y) => {
      k.fallbackLocale = y, l.value = y, ur(k, i.value, y);
    }
  }), U = P(() => u.value), te = /* @__PURE__ */ P(() => c.value), pe = /* @__PURE__ */ P(() => p.value);
  function oe() {
    return Ie(S) ? S : null;
  }
  function ce(y) {
    S = y, k.postTranslation = y;
  }
  function j() {
    return E;
  }
  function ge(y) {
    y !== null && (d = Al(y)), E = y, k.missing = d;
  }
  const he = (y, $, de, _e, Ze, wn) => {
    M();
    let pt;
    try {
      r || (k.fallbackContext = t ? L_() : void 0), pt = y(k);
    } finally {
      r || (k.fallbackContext = void 0);
    }
    if (de !== "translate exists" && // for not `te` (e.g `t`)
    We(pt) && pt === qo || de === "translate exists" && !pt) {
      const [Qo, xs] = $();
      return t && v ? _e(t) : Ze(Qo);
    } else {
      if (wn(pt))
        return pt;
      throw Rr(Qn.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Le(...y) {
    return he(($) => Reflect.apply(Ol, null, [$, ...y]), () => Ma(...y), "translate", ($) => Reflect.apply($.t, $, [...y]), ($) => $, ($) => J($));
  }
  function De(...y) {
    const [$, de, _e] = y;
    if (_e && !be(_e))
      throw Rr(Qn.INVALID_ARGUMENT);
    return Le($, de, Ge({ resolvedMessage: !0 }, _e || {}));
  }
  function Ye(...y) {
    return he(($) => Reflect.apply(wl, null, [$, ...y]), () => $a(...y), "datetime format", ($) => Reflect.apply($.d, $, [...y]), () => vl, ($) => J($) || Ne($));
  }
  function K(...y) {
    return he(($) => Reflect.apply(Sl, null, [$, ...y]), () => Na(...y), "number format", ($) => Reflect.apply($.n, $, [...y]), () => vl, ($) => J($) || Ne($));
  }
  function Q(y) {
    return y.map(($) => J($) || We($) || $e($) ? Pl(String($)) : $);
  }
  const Se = {
    normalize: Q,
    interpolate: (y) => y,
    type: "vnode"
  };
  function Ce(...y) {
    return he(($) => {
      let de;
      const _e = $;
      try {
        _e.processor = Se, de = Reflect.apply(Ol, null, [_e, ...y]);
      } finally {
        _e.processor = null;
      }
      return de;
    }, () => Ma(...y), "translate", ($) => $[xa](...y), ($) => [Pl($)], ($) => Ne($));
  }
  function ae(...y) {
    return he(($) => Reflect.apply(Sl, null, [$, ...y]), () => Na(...y), "number format", ($) => $[Da](...y), Ll, ($) => J($) || Ne($));
  }
  function ze(...y) {
    return he(($) => Reflect.apply(wl, null, [$, ...y]), () => $a(...y), "datetime format", ($) => $[Fa](...y), Ll, ($) => J($) || Ne($));
  }
  function le(y) {
    O = y, k.pluralRules = O;
  }
  function He(y, $) {
    return he(() => {
      if (!y)
        return !1;
      const de = J($) ? $ : i.value, _e = st(de), Ze = k.messageResolver(_e, y);
      return Dt(Ze) || en(Ze) || J(Ze);
    }, () => [y], "translate exists", (de) => Reflect.apply(de.te, de, [y, $]), q_, (de) => $e(de));
  }
  function _t(y) {
    let $ = null;
    const de = Rc(k, l.value, i.value);
    for (let _e = 0; _e < de.length; _e++) {
      const Ze = u.value[de[_e]] || {}, wn = k.messageResolver(Ze, y);
      if (wn != null) {
        $ = wn;
        break;
      }
    }
    return $;
  }
  function at(y) {
    const $ = _t(y);
    return $ ?? (t ? t.tm(y) || {} : {});
  }
  function st(y) {
    return u.value[y] || {};
  }
  function it(y, $) {
    if (o) {
      const de = { [y]: $ };
      for (const _e in de)
        St(de, _e) && $r(de[_e]);
      $ = de[y];
    }
    u.value[y] = $, k.messages = u.value;
  }
  function ft(y, $) {
    u.value[y] = u.value[y] || {};
    const de = { [y]: $ };
    if (o)
      for (const _e in de)
        St(de, _e) && $r(de[_e]);
    $ = de[y], ao($, u.value[y]), k.messages = u.value;
  }
  function Lt(y) {
    return c.value[y] || {};
  }
  function _(y, $) {
    c.value[y] = $, k.datetimeFormats = c.value, El(k, y, $);
  }
  function T(y, $) {
    c.value[y] = Ge(c.value[y] || {}, $), k.datetimeFormats = c.value, El(k, y, $);
  }
  function N(y) {
    return p.value[y] || {};
  }
  function Z(y, $) {
    p.value[y] = $, k.numberFormats = p.value, Cl(k, y, $);
  }
  function ve(y, $) {
    p.value[y] = Ge(p.value[y] || {}, $), k.numberFormats = p.value, Cl(k, y, $);
  }
  Il++, t && sl && (ue(t.locale, (y) => {
    s && (i.value = y, k.locale = y, ur(k, i.value, l.value));
  }), ue(t.fallbackLocale, (y) => {
    s && (l.value = y, k.fallbackLocale = y, ur(k, i.value, l.value));
  }));
  const se = {
    id: Il,
    locale: I,
    fallbackLocale: V,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(y) {
      s = y, y && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, ur(k, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: U,
    get modifiers() {
      return C;
    },
    get pluralRules() {
      return O || {};
    },
    get isGlobal() {
      return r;
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
      return v;
    },
    set fallbackRoot(y) {
      v = y;
    },
    get fallbackFormat() {
      return h;
    },
    set fallbackFormat(y) {
      h = y, k.fallbackFormat = h;
    },
    get warnHtmlMessage() {
      return b;
    },
    set warnHtmlMessage(y) {
      b = y, k.warnHtmlMessage = y;
    },
    get escapeParameter() {
      return w;
    },
    set escapeParameter(y) {
      w = y, k.escapeParameter = y;
    },
    t: Le,
    getLocaleMessage: st,
    setLocaleMessage: it,
    mergeLocaleMessage: ft,
    getPostTranslationHandler: oe,
    setPostTranslationHandler: ce,
    getMissingHandler: j,
    setMissingHandler: ge,
    [G_]: le
  };
  return se.datetimeFormats = te, se.numberFormats = pe, se.rt = De, se.te = He, se.tm = at, se.d = Ye, se.n = K, se.getDateTimeFormat = Lt, se.setDateTimeFormat = _, se.mergeDateTimeFormat = T, se.getNumberFormat = N, se.setNumberFormat = Z, se.mergeNumberFormat = ve, se[jc] = n, se[xa] = Ce, se[Fa] = ze, se[Da] = ae, se;
}
const $s = {
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
    ...o.type === Ue ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Te());
}
function Wc() {
  return Ue;
}
Ge({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => We(e) || !isNaN(e)
  }
}, $s);
function Q_(e) {
  return Ne(e) && !J(e[0]);
}
function Hc(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = Te();
    e.locale && (s.locale = e.locale), J(e.format) ? s.key = e.format : be(e.format) && (J(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((m, g) => n.includes(g) ? Ge(Te(), m, { [g]: e.format[g] }) : m, Te()));
    const l = r(e.value, s, i);
    let u = [s.key];
    Ne(l) ? u = l.map((m, g) => {
      const v = o[m.type], h = v ? v({ [m.type]: m.value, index: g, parts: l }) : [m.value];
      return Q_(h) && (h[0].key = `${m.type}-${g}`), h;
    }) : J(l) && (u = [l]);
    const c = Ge(Te(), a), p = J(e.tag) || be(e.tag) ? e.tag : Wc();
    return qa(p, c, u);
  };
}
Ge({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, $s);
const ew = /* @__PURE__ */ Rn("global-vue-i18n");
function rr(e = {}) {
  const t = Uc();
  if (t == null)
    throw Rr(Qn.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Rr(Qn.NOT_INSTALLED);
  const n = tw(t), r = rw(n), o = Y_(t), a = nw(e, o);
  if (a === "global")
    return Z_(r, e, o), r;
  if (a === "parent") {
    let l = ow(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = Ge({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = X_(l), s.__composerExtend && (i[za] = s.__composerExtend(i)), sw(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function tw(e) {
  const t = Ee(e.isCE ? ew : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Rr(e.isCE ? Qn.NOT_INSTALLED_WITH_PROVIDE : Qn.UNEXPECTED_ERROR);
  return t;
}
function nw(e, t) {
  return Yo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function rw(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function ow(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = aw(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[jc] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function aw(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function sw(e, t, n) {
  xe(() => {
  }, t), Za(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[za];
    o && (o(), delete r[za]);
  }, t);
}
Ge({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, $s);
K_();
k_(d_);
O_(S_);
P_(Rc);
const G = {
  info: (e, t, ...n) => {
    x("frontend_log", {
      level: "info",
      message: e,
      data: t === void 0 ? null : da(t)
    }).catch(() => {
    });
  },
  error: (e, t) => {
    x("frontend_log", {
      level: "error",
      message: e,
      data: t === void 0 ? null : da(t)
    }).catch(() => {
    });
  },
  warn: (e, t) => {
    x("frontend_log", {
      level: "warn",
      message: e,
      data: t === void 0 ? null : da(t)
    }).catch(() => {
    });
  },
  // 调试日志 - 只在开发模式或调试模式下输出
  debug: (e, t) => {
  }
};
function da(e) {
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
function iw(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
}
function fa(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, r = e.match(/[\u3040-\u30ff]/g), o = r ? r.length : 0, a = e.match(/[\uac00-\ud7af]/g), s = a ? a.length : 0, i = e.match(/[a-zA-Z]/g), l = i ? i.length : 0, c = n + o + s + l;
  return c === 0 ? "unknown" : o >= 3 && o > l && o / c >= 0.2 ? "ja" : s >= 3 && s > n && s > l && s / c >= 0.2 ? "ko" : n > l ? "zh" : l > n ? "en" : "unknown";
}
const lw = "https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/main/docs/plugin-marketplace/marketplace.json";
async function uw() {
  return await x("get_plugin_states");
}
async function cw() {
  return await x("get_installed_plugin_manifests");
}
async function dw(e, t = !1) {
  return await x("install_local_plugin_package", {
    sourcePath: e,
    overwrite: t
  });
}
async function fw(e, t = !1, n, r) {
  return await x("install_plugin_package_from_url", {
    expectedSizeBytes: r,
    packageUrl: e,
    packageSubdir: n,
    overwrite: t
  });
}
async function pw(e) {
  return await x("fetch_plugin_marketplace", {
    marketplaceUrl: e
  });
}
async function mw(e) {
  await x("uninstall_local_plugin_package", { pluginId: e });
}
async function gw(e, t) {
  await x("set_plugin_enabled", { pluginId: e, enabled: t });
}
async function hw() {
  return await x("get_rapidocr_resource_status");
}
async function vw() {
  return await x("screen_recorder_get_ffmpeg_status");
}
async function Ns(e, t) {
  return await x("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
async function pa() {
  await x("install_translation_offline_runtime_resources");
}
const yw = "resources/transformers/transformers.min.js", bw = ["translation-offline-runtime", "translation"], _w = "https://huggingface.co/", ww = "{model}/resolve/{revision}/", Ew = "/__snippets_code_disabled_transformers_local_models__/", Sw = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let cr = null;
const Cw = (e) => {
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
}, Tw = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, r = Cw(n);
  return r.index >= 0 ? n.slice(0, r.index + r.length) : n;
}, kw = (e) => {
  const t = Tw(e);
  return Object.fromEntries(
    Sw.map((n) => [n, `${t}${n}`])
  );
}, Kc = (e, t) => {
  var n, r;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = _w, e.remotePathTemplate = ww, e.allowLocalModels = !1, e.localModelPath = Ew, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (r = e.backends.onnx).wasm ?? (r.wasm = {}), e.backends.onnx.wasm.wasmPaths = kw(t), e.backends.onnx.wasm.numThreads = 1);
};
async function Ow() {
  return cr || (cr = (async () => {
    for (const e of bw) {
      const t = await Ns(e, yw);
      if (!t) continue;
      const n = gc(t), r = await import(
        /* @vite-ignore */
        n
      );
      return Kc(r.env, n), G.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
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
    throw cr = null, e;
  }), cr);
}
let Xt = null, wr = !1, Bn = null, ma = null, Ba = null;
const Pw = "Xenova/opus-mt-en-zh", Lw = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Iw = 3e5;
function Rl(e) {
  Ba = e;
}
function Aw() {
  return Lw;
}
function Rw(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (r, o) => setTimeout(() => o(new Error(n)), t)
    )
  ]);
}
async function Gc() {
  return Xt || Bn || (wr = !0, G.info("[离线翻译] 正在加载翻译模型..."), Bn = (async () => {
    try {
      const { pipeline: e, env: t } = await Ow();
      Kc(t);
      let n = "";
      const r = e("translation", Pw, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (a) => {
          a.status === "done" && a.file && a.file !== n && (n = a.file, G.info(`[离线翻译] 已加载: ${a.file}`)), Ba && Ba({
            status: a.status,
            progress: a.progress,
            file: a.file
          });
        }
      });
      return Xt = await Rw(
        r,
        Iw,
        "模型加载超时，请检查网络连接后重试"
      ), G.info("[离线翻译] 翻译模型加载完成"), wr = !1, Xt;
    } catch (e) {
      throw wr = !1, Bn = null, G.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Bn);
}
async function $w(e) {
  if (!e?.trim()) return e;
  ma = new AbortController();
  const t = ma.signal;
  try {
    const n = await Gc();
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
      const i = await n(s);
      if (t.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(i) && i.length > 0) {
        const l = i[0].translation_text || s;
        o.push(l);
      } else
        o.push(s);
    }
    return o.join(`
`);
  } catch (n) {
    throw n instanceof Error && n.message === "翻译已取消" ? (G.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (G.warn("[离线翻译] 运行时资源未安装"), n) : (G.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    ma = null;
  }
}
async function ja() {
  await Gc();
}
function Jr() {
  return Xt !== null;
}
function Nw() {
  return wr;
}
async function mr() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      G.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const o = await (await caches.open(n)).keys();
          if (G.info(`[离线翻译] Cache "${n}" 包含 ${o.length} 个文件`), o.some(
            (s) => s.url.includes("opus-mt-en-zh") || s.url.includes("Xenova")
          )) {
            const s = o.some((i) => i.url.includes(".onnx"));
            if (G.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${s}`), s)
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
    G.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return G.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return G.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return G.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function Mw() {
  return (await mr()).isCached;
}
function xw() {
  return Xt !== null;
}
async function Fw() {
  if (Xt)
    try {
      await Xt.dispose?.();
    } catch {
    }
  Xt = null, Bn = null, wr = !1, G.info("[离线翻译] 翻译器已释放");
}
async function Dw() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), G.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), G.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    G.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw G.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const zw = { class: "translate-window" }, Bw = {
  class: "header",
  "data-tauri-drag-region": ""
}, jw = { class: "left-buttons" }, Vw = {
  class: "bg-penal text-base",
  "data-tauri-drag-region": ""
}, Uw = { class: "right-buttons" }, Ww = { class: "translate-container transparent-input" }, Hw = { class: "language-selector" }, Kw = { class: "source-area" }, Gw = { class: "source-actions" }, Yw = { class: "source-material" }, Zw = { class: "translation-results" }, qw = ["onClick"], Xw = { class: "result-title" }, Jw = ["src"], Qw = ["src"], e2 = {
  key: 2,
  class: "offline-icon"
}, t2 = { class: "result-controls" }, n2 = {
  key: 0,
  class: "result-body"
}, r2 = {
  key: 1,
  class: "result-text"
}, o2 = {
  key: 2,
  class: "result-empty"
}, a2 = { class: "result-actions" }, s2 = ["onClick"], i2 = ["onClick"], l2 = ["onClick"], u2 = /* @__PURE__ */ q({
  __name: "index",
  setup(e) {
    const { t } = rr(), n = _c(), r = D(!1), o = D(""), a = D("auto"), s = D("zh"), i = D(!1), l = D(!1), u = D(), c = D(!1), p = D([
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
    ]), m = P(() => p.value.filter((K) => K.engine === "offline" ? c.value : !0)), g = (K) => K === "bing" ? t("translate.bingTranslate") : K === "google" ? t("translate.googleTranslate") : K === "offline" ? t("translate.offlineTranslate") : K, v = P(() => [
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
    let h = null, E = null, d = null;
    const S = D({
      forChinese: "en",
      forEnglish: "zh"
    }), b = async () => {
      if (i.value) return;
      const K = await Rt("tauri://blur", () => {
        h && clearTimeout(h), h = setTimeout(async () => {
          i.value || (C(), await n.hide());
        }, 100);
      }), Q = await Rt("tauri://focus", () => {
        h && clearTimeout(h), De();
      }), me = await Rt("tauri://show", () => {
        De();
      }), Se = await Rt("tauri://move", () => {
        h && clearTimeout(h);
      }), Ce = await Rt("selection-text", (ze) => {
        ze.payload && ze.payload.text && he(ze.payload.text);
      }), ae = await Rt("reset-state", () => {
        C();
      });
      E = () => {
        K(), Q(), Se(), Ce(), ae(), me();
      };
    }, w = async () => {
      i.value = !i.value, await n.setAlwaysOnTop(i.value), i.value ? E && (E(), E = null) : b();
    }, C = () => {
      o.value = "", l.value = !1, p.value.forEach((K) => {
        K.text = "", K.loading = !1;
      });
    }, O = async () => {
      C(), await n.close();
    }, k = () => {
      a.value !== "auto" && ([a.value, s.value] = [
        s.value,
        a.value
      ], pe());
    }, F = () => {
      o.value = "", p.value.forEach((K) => {
        K.text = "";
      }), l.value = !1;
    }, M = async (K) => {
      K && (await navigator.clipboard.writeText(K), Ke.success(t("translate.copiedToClipboard")));
    }, I = (K, Q) => {
      if (!K) return;
      const me = new SpeechSynthesisUtterance(K), Se = Q === "zh" ? "zh-CN" : Q === "zh_tw" ? "zh-TW" : Q === "en" ? "en-US" : Q;
      me.lang = Se, window.speechSynthesis.speak(me);
    }, V = () => {
      if (a.value !== "auto") return;
      const K = fa(o.value);
      K === "zh" ? s.value = S.value.forChinese : K === "en" && (s.value = S.value.forEnglish);
    }, U = () => {
      const K = fa(o.value);
      K === "zh" ? S.value.forChinese = s.value : K === "en" && (S.value.forEnglish = s.value), pe();
    }, te = async (K) => {
      const Q = p.value.find((Ce) => Ce.engine === K);
      if (!Q || K === "offline" && !c.value)
        return;
      Q.loading = !0, Q.text = "";
      const me = iw(o.value);
      let Se = s.value;
      K === "bing" && Se === "auto" && (Se = "en");
      try {
        let Ce;
        if (K === "offline") {
          if (!xw())
            if (await Mw())
              G.info("[翻译窗口] 离线翻译懒加载：开始加载模型..."), await ja(), G.info("[翻译窗口] 离线翻译懒加载：模型加载完成");
            else
              throw new Error("离线翻译模型未下载，请在设置中下载模型");
          Ce = await $w(me);
        } else
          Ce = await x("translate_text", {
            text: me,
            from: a.value,
            to: Se,
            engine: K
          });
        Q.text = Ce;
      } catch (Ce) {
        G.error(`[翻译] ${K}翻译出错`, Ce);
        const ae = String(Ce);
        ae.includes("429") || ae.includes("Too Many Requests") ? Q.text = t("translate.tooManyRequests") : ae.includes("timeout") || ae.includes("超时") ? Q.text = t("translate.timeout") : ae.includes("network") || ae.includes("网络") ? Q.text = t("translate.networkError") : ae.includes("未下载") || ae.includes("未激活") || ae.includes("运行时未安装") ? Q.text = ae : Q.text = t("translate.translateFailed");
      } finally {
        Q.loading = !1;
      }
    }, pe = async () => {
      if (!o.value.trim()) {
        p.value.forEach((Q) => {
          Q.text = "";
        });
        return;
      }
      V(), r.value = !0;
      const K = m.value.map(
        (Q) => te(Q.engine)
      );
      await Promise.all(K), r.value = !1;
    }, oe = (K) => {
      K.expanded = !K.expanded;
    }, ce = () => {
      l.value = !!o.value, d && clearTimeout(d), o.value.trim() ? d = setTimeout(() => {
        pe();
      }, 500) : p.value.forEach((K) => {
        K.text = "";
      });
    };
    let j = "", ge = !1;
    const he = (K) => {
      K && (K === j && ge || (j = K, ge = !0, o.value = K, l.value = !0, V(), pe().finally(() => {
        setTimeout(() => {
          ge = !1;
        }, 2e3);
      }), De()));
    }, Le = (K) => {
      o.value = K.text;
      const Q = fa(o.value), me = a.value, Se = s.value;
      me === "auto" ? (a.value = "auto", Q === "zh" ? s.value = S.value.forChinese : s.value = S.value.forEnglish) : (a.value = Se, s.value = me === "auto" ? Q === "zh" ? "en" : "zh" : me), pe();
    }, De = () => {
      const K = (Q = 0) => {
        if (!(Q > 5))
          if (u.value)
            u.value.focus();
          else {
            const me = 100 * (Q + 1);
            setTimeout(() => K(Q + 1), me);
          }
      };
      u.value && u.value.focus(), Ae(() => {
        K();
      });
    }, Ye = () => {
      V(), pe();
    };
    return xe(async () => {
      try {
        const K = await x("get_offline_model_activated");
        G.info(`[翻译窗口] 离线模型后端激活状态: ${K}`), c.value = K;
      } catch (K) {
        G.error("[翻译窗口] 获取离线模型激活状态失败:", K), c.value = !1;
      }
      await b(), o.value.trim() && V(), De(), await Ae(), setTimeout(() => {
        n.emit("translate_ready");
      }, 100);
    }), Za(() => {
      E && E(), h && clearTimeout(h), d && clearTimeout(d), C();
    }), (K, Q) => {
      const me = ks, Se = Ts, Ce = Bu, ae = uc, ze = Wb;
      return A(), z("main", zw, [
        L("div", Bw, [
          L("div", jw, [
            L(
              "div",
              {
                onClick: w,
                class: B(["pin-button", f(i) ? "pinned" : ""])
              },
              [
                W(f(Gd), { size: 18 })
              ],
              2
              /* CLASS */
            )
          ]),
          L(
            "div",
            Vw,
            X(K.$t("translate.title")),
            1
            /* TEXT */
          ),
          L("div", Uw, [
            L("div", {
              onClick: O,
              class: "material-close"
            }, [
              W(f(Vd), { size: 22 })
            ])
          ])
        ]),
        L("div", Ww, [
          Y(" 语言选择区域 "),
          L("div", Hw, [
            W(Se, {
              modelValue: f(a),
              "onUpdate:modelValue": Q[0] || (Q[0] = (le) => gn(a) ? a.value = le : null),
              size: "small",
              onChange: Ye,
              class: "lang-select"
            }, {
              default: ne(() => [
                (A(!0), z(
                  Ue,
                  null,
                  Jt(f(v), (le) => (A(), ee(me, {
                    key: le.value,
                    label: le.label,
                    value: le.value
                  }, null, 8, ["label", "value"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            L("div", {
              size: "small",
              onClick: k,
              class: "swap-button"
            }, [
              W(f(Vs), { size: 22 })
            ]),
            W(Se, {
              modelValue: f(s),
              "onUpdate:modelValue": Q[1] || (Q[1] = (le) => gn(s) ? s.value = le : null),
              size: "small",
              onChange: U,
              class: "lang-select"
            }, {
              default: ne(() => [
                (A(!0), z(
                  Ue,
                  null,
                  Jt(f(v), (le) => (A(), ee(me, {
                    key: le.value,
                    label: le.label,
                    value: le.value
                  }, null, 8, ["label", "value"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          Y(" 源文本输入区域 "),
          L("div", Kw, [
            W(Ce, {
              ref_key: "sourceTextArea",
              ref: u,
              modelValue: f(o),
              "onUpdate:modelValue": Q[2] || (Q[2] = (le) => gn(o) ? o.value = le : null),
              type: "textarea",
              rows: 2,
              placeholder: K.$t("translate.inputPlaceholder"),
              resize: "none",
              onInput: ce,
              class: "source-textarea"
            }, null, 8, ["modelValue", "placeholder"]),
            L("div", Gw, [
              L("div", Yw, [
                W(ae, {
                  content: K.$t("translate.speakText"),
                  placement: "top",
                  "hide-after": 1e3
                }, {
                  default: ne(() => [
                    L("div", {
                      onClick: Q[3] || (Q[3] = (le) => I(f(o), f(a))),
                      class: "action-btn"
                    }, [
                      W(f(Us), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"]),
                f(l) ? (A(), ee(ae, {
                  key: 0,
                  content: K.$t("translate.deleteText"),
                  placement: "top",
                  "hide-after": 1e3
                }, {
                  default: ne(() => [
                    L("div", {
                      onClick: F,
                      class: "action-btn"
                    }, [
                      W(f(Wd), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"])) : Y("v-if", !0)
              ])
            ])
          ]),
          Y(" 多引擎翻译结果区域 "),
          L("div", Zw, [
            (A(!0), z(
              Ue,
              null,
              Jt(f(m), (le) => (A(), z(
                "div",
                {
                  key: le.engine,
                  class: B(["result-card", { "result-expanded": le.expanded }])
                },
                [
                  L("div", {
                    class: "result-header",
                    onClick: (He) => oe(le)
                  }, [
                    L("div", Xw, [
                      le.engine === "google" ? (A(), z("img", {
                        key: 0,
                        src: f(_1),
                        class: "engine-icon",
                        alt: "Google"
                      }, null, 8, Jw)) : le.engine === "bing" ? (A(), z("img", {
                        key: 1,
                        src: f(w1),
                        class: "engine-icon",
                        alt: "Bing"
                      }, null, 8, Qw)) : (A(), z("span", e2, "离")),
                      L(
                        "span",
                        null,
                        X(g(le.engine)),
                        1
                        /* TEXT */
                      )
                    ]),
                    L("div", t2, [
                      (A(), ee(mt(le.expanded ? f(qd) : f(Hd)), {
                        size: 18,
                        class: "expand-icon"
                      }))
                    ])
                  ], 8, qw),
                  le.expanded ? (A(), z("div", n2, [
                    le.loading ? (A(), ee(ze, {
                      key: 0,
                      rows: 3,
                      animated: ""
                    })) : le.text ? (A(), z(
                      "div",
                      r2,
                      X(le.text),
                      1
                      /* TEXT */
                    )) : (A(), z(
                      "div",
                      o2,
                      X(K.$t("translate.resultPlaceholder")),
                      1
                      /* TEXT */
                    )),
                    L("div", a2, [
                      W(ae, {
                        content: K.$t("translate.speakText"),
                        placement: "top",
                        "hide-after": 1e3
                      }, {
                        default: ne(() => [
                          L("div", {
                            onClick: (He) => I(le.text, f(s)),
                            class: "action-btn"
                          }, [
                            W(f(Us), { size: 18 })
                          ], 8, s2)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      W(ae, {
                        content: K.$t("translate.copyResult"),
                        placement: "top",
                        "hide-after": 1e3
                      }, {
                        default: ne(() => [
                          L("div", {
                            onClick: (He) => M(le.text),
                            class: "action-btn"
                          }, [
                            W(f(Ud), { size: 18 })
                          ], 8, i2)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      W(ae, {
                        content: K.$t("translate.translateBack"),
                        placement: "top",
                        "hide-after": 1e3
                      }, {
                        default: ne(() => [
                          L("div", {
                            onClick: (He) => Le(le),
                            class: "action-btn rotate-icon"
                          }, [
                            W(f(Vs), { size: 18 })
                          ], 8, l2)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"])
                    ])
                  ])) : Y("v-if", !0)
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
}), Xo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, c2 = /* @__PURE__ */ Xo(u2, [["__scopeId", "data-v-5861ef19"]]), d2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: c2
}, Symbol.toStringTag, { value: "Module" })), f2 = ["disabled"], p2 = {
  key: 0,
  class: "custom-button__loading"
}, m2 = /* @__PURE__ */ q({
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
    return (n, r) => (A(), z("button", {
      class: B([
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
      e.loading ? (A(), z("div", p2, r[1] || (r[1] = [
        L(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            L("circle", {
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
      ]))) : Y("v-if", !0),
      ie(n.$slots, "default", {}, void 0, !0)
    ], 10, f2));
  }
}), Qr = /* @__PURE__ */ Xo(m2, [["__scopeId", "data-v-9497085f"]]);
async function g2() {
  try {
    return await x("get_attachment_config");
  } catch (e) {
    throw new Error(`获取附件配置失败: ${e}`);
  }
}
async function h2(e) {
  try {
    await x("update_attachment_config", { config: e });
  } catch (t) {
    throw new Error(`更新附件配置失败: ${t}`);
  }
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Yc;
const Ms = (e) => Yc = e, v2 = (
  /* istanbul ignore next */
  Symbol()
);
function Va(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Er;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Er || (Er = {}));
const Zc = () => {
};
function $l(e, t, n, r = Zc) {
  e.push(t);
  const o = () => {
    const a = e.indexOf(t);
    a > -1 && (e.splice(a, 1), r());
  };
  return !n && Hl() && Kl(o), o;
}
function Fn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const y2 = (e) => e(), Nl = Symbol(), ga = Symbol();
function Ua(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    Va(o) && Va(r) && e.hasOwnProperty(n) && !gn(r) && !Zl(r) ? e[n] = Ua(o, r) : e[n] = r;
  }
  return e;
}
const b2 = (
  /* istanbul ignore next */
  Symbol()
);
function _2(e) {
  return !Va(e) || !e.hasOwnProperty(b2);
}
const { assign: ln } = Object;
function w2(e) {
  return !!(gn(e) && e.effect);
}
function E2(e, t, n, r) {
  const { state: o, actions: a, getters: s } = t, i = n.state.value[e];
  let l;
  function u() {
    i || (n.state.value[e] = o ? o() : {});
    const c = $o(n.state.value[e]);
    return ln(c, a, Object.keys(s || {}).reduce((p, m) => (p[m] = ya(P(() => {
      Ms(n);
      const g = n._s.get(e);
      return s[m].call(g, g);
    })), p), {}));
  }
  return l = qc(e, u, t, n, r, !0), l;
}
function qc(e, t, n = {}, r, o, a) {
  let s;
  const i = ln({ actions: {} }, n), l = { deep: !0 };
  let u, c, p = [], m = [], g;
  const v = r.state.value[e];
  !a && !v && (r.state.value[e] = {}), D({});
  let h;
  function E(F) {
    let M;
    u = c = !1, typeof F == "function" ? (F(r.state.value[e]), M = {
      type: Er.patchFunction,
      storeId: e,
      events: g
    }) : (Ua(r.state.value[e], F), M = {
      type: Er.patchObject,
      payload: F,
      storeId: e,
      events: g
    });
    const I = h = Symbol();
    Ae().then(() => {
      h === I && (u = !0);
    }), c = !0, Fn(p, M, r.state.value[e]);
  }
  const d = a ? function() {
    const { state: M } = n, I = M ? M() : {};
    this.$patch((V) => {
      ln(V, I);
    });
  } : (
    /* istanbul ignore next */
    Zc
  );
  function S() {
    s.stop(), p = [], m = [], r._s.delete(e);
  }
  const b = (F, M = "") => {
    if (Nl in F)
      return F[ga] = M, F;
    const I = function() {
      Ms(r);
      const V = Array.from(arguments), U = [], te = [];
      function pe(j) {
        U.push(j);
      }
      function oe(j) {
        te.push(j);
      }
      Fn(m, {
        args: V,
        name: I[ga],
        store: C,
        after: pe,
        onError: oe
      });
      let ce;
      try {
        ce = F.apply(this && this.$id === e ? this : C, V);
      } catch (j) {
        throw Fn(te, j), j;
      }
      return ce instanceof Promise ? ce.then((j) => (Fn(U, j), j)).catch((j) => (Fn(te, j), Promise.reject(j))) : (Fn(U, ce), ce);
    };
    return I[Nl] = !0, I[ga] = M, I;
  }, w = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: $l.bind(null, m),
    $patch: E,
    $reset: d,
    $subscribe(F, M = {}) {
      const I = $l(p, F, M.detached, () => V()), V = s.run(() => ue(() => r.state.value[e], (U) => {
        (M.flush === "sync" ? c : u) && F({
          storeId: e,
          type: Er.direct,
          events: g
        }, U);
      }, ln({}, l, M)));
      return I;
    },
    $dispose: S
  }, C = On(w);
  r._s.set(e, C);
  const k = (r._a && r._a.runWithContext || y2)(() => r._e.run(() => (s = Fd()).run(() => t({ action: b }))));
  for (const F in k) {
    const M = k[F];
    if (gn(M) && !w2(M) || Zl(M))
      a || (v && _2(M) && (gn(M) ? M.value = v[F] : Ua(M, v[F])), r.state.value[e][F] = M);
    else if (typeof M == "function") {
      const I = b(M, F);
      k[F] = I, i.actions[F] = M;
    }
  }
  return ln(C, k), ln(Yl(C), k), Object.defineProperty(C, "$state", {
    get: () => r.state.value[e],
    set: (F) => {
      E((M) => {
        ln(M, F);
      });
    }
  }), r._p.forEach((F) => {
    ln(C, s.run(() => F({
      store: C,
      app: r._a,
      pinia: r,
      options: i
    })));
  }), v && a && n.hydrate && n.hydrate(C.$state, v), u = !0, c = !0, C;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function S2(e, t, n) {
  let r, o;
  const a = typeof t == "function";
  typeof e == "string" ? (r = e, o = a ? n : t) : (o = e, r = e.id);
  function s(i, l) {
    const u = xd();
    return i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    i || (u ? Ee(v2, null) : null), i && Ms(i), i = Yc, i._s.has(r) || (a ? qc(r, t, o, i) : E2(r, o, i)), i._s.get(r);
  }
  return s.$id = r, s;
}
const C2 = (e, t, n, r) => ({
  id: e.id,
  source: t,
  packagePath: n,
  installedAt: r,
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
}), dn = (e) => typeof e == "object" && e !== null, T2 = (e) => dn(e) && "manifest" in e && dn(e.manifest) ? {
  manifest: e.manifest,
  packagePath: typeof e.packagePath == "string" ? e.packagePath : void 0,
  installedAt: typeof e.installedAt == "string" ? e.installedAt : void 0
} : { manifest: e }, k2 = (e) => typeof e == "string" && ["capture", "automation", "search", "sync", "editor", "appearance"].includes(e), O2 = (e) => {
  if (!dn(e) || e.schemaVersion !== 1 || typeof e.id != "string" || !e.id.trim() || typeof e.version != "string" || !e.version.trim() || e.kind !== "builtin" && e.kind !== "local" || !dn(e.name) || typeof e.name.i18nKey != "string" || typeof e.name.fallback != "string" || !dn(e.description) || typeof e.description.i18nKey != "string" || typeof e.description.fallback != "string" || !k2(e.category) || typeof e.enabledByDefault != "boolean") return null;
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
    capabilities: dn(e.capabilities) ? e.capabilities : void 0,
    resources: dn(e.resources) ? e.resources : void 0,
    entry: dn(e.entry) ? e.entry : void 0,
    permissions: Array.isArray(e.permissions) ? e.permissions.filter((r) => typeof r == "string") : void 0,
    dependencies: Array.isArray(e.dependencies) ? e.dependencies.filter((r) => typeof r == "string") : void 0,
    resourceFor: typeof e.resourceFor == "string" ? e.resourceFor : void 0,
    compatibleAppVersion: typeof e.compatibleAppVersion == "string" ? e.compatibleAppVersion : void 0,
    minAppVersion: typeof e.minAppVersion == "string" ? e.minAppVersion : void 0,
    repository: typeof e.repository == "string" ? e.repository : void 0,
    releaseUrl: typeof e.releaseUrl == "string" ? e.releaseUrl : void 0
  };
}, P2 = (e) => e.map((t) => {
  const { manifest: n, packagePath: r, installedAt: o } = T2(t), a = O2(n);
  if (!a) return null;
  const s = {
    manifest: a,
    packagePath: r ?? ""
  };
  return o && (s.installedAt = o), s;
}).filter((t) => t !== null), Xc = (e = []) => {
  const t = [], n = P2(e).map((a) => C2(
    a.manifest,
    "local",
    a.packagePath || void 0,
    a.installedAt
  )).sort(L2), r = [
    ...t,
    ...n
  ], o = /* @__PURE__ */ new Map();
  for (const a of r)
    o.has(a.id) || o.set(a.id, a);
  return Array.from(o.values());
}, Ml = (e) => {
  const t = e.installedAt ? Date.parse(e.installedAt) : NaN;
  return Number.isFinite(t) ? t : 0;
}, L2 = (e, t) => {
  const n = Ml(t) - Ml(e);
  return n !== 0 ? n : String(e.id).localeCompare(String(t.id));
}, Jc = Xc();
Jc.filter((e) => e.source === "builtin");
const ko = Jc, I2 = ko.map((e) => e.id), Qc = ko.reduce((e, t) => (e[t.id] = t.enabledByDefault, e), {}), A2 = (e) => I2.includes(e), jn = [], Vn = [
  { id: "attachment", labelKey: "settings.attachment.menu", icon: Kd }
], Wa = {
  attachment: uo(() => Promise.resolve().then(() => UE))
}, Un = [], so = [], ed = (e) => e.manifest.permissions ?? [], R2 = (e, t) => {
  const n = ed(e);
  return n.includes("command:*") || n.includes(`command:${t}`);
}, $2 = (e, t) => {
  const n = ed(e);
  return n.includes("backend:*") || n.includes(`backend:${t}`);
}, N2 = (e, t) => {
  if (!R2(e, t))
    throw new Error(`插件 ${e.id} 没有调用命令 ${t} 的权限`);
}, M2 = (e, t) => {
  if (!$2(e, t))
    throw new Error(`插件 ${e.id} 没有调用后端命令 ${t} 的权限`);
}, Ha = [], Ka = [], Ga = [], io = /* @__PURE__ */ new Set(), Oo = /* @__PURE__ */ new Map(), Po = /* @__PURE__ */ new Map(), xl = /* @__PURE__ */ new Map(), x2 = /* @__PURE__ */ new Set(), Fl = /* @__PURE__ */ new Map(), er = /* @__PURE__ */ new Map(), Lo = /* @__PURE__ */ new Set(), Io = /* @__PURE__ */ new Set(), Jo = (e) => e.replace(/^[\\/]+|[\\/]+$/g, ""), F2 = (e) => !!e && !e.includes("://") && !e.startsWith("/") && !/^[a-zA-Z]:[\\/]/.test(e) && !Jo(e).split(/[\\/]+/).includes(".."), D2 = (e, t) => {
  if (!e.packagePath)
    throw new Error(`插件 ${e.id} 缺少 packagePath`);
  if (!F2(t))
    throw new Error(
      `插件 ${e.id} 使用了不安全的资源路径: ${t}`
    );
  return `${e.packagePath.replace(/[\\/]+$/g, "")}/${Jo(t)}`;
}, or = (e, t) => gc(D2(e, t)), z2 = (e) => {
  const t = Jo(e).split(/[\\/]+/);
  return t.pop(), t.join("/");
}, td = (e) => {
  const t = /^([^?#]*)([?#].*)?$/.exec(e);
  return {
    path: t?.[1] ?? e,
    suffix: t?.[2] ?? ""
  };
}, B2 = (e, t) => {
  const { path: n } = td(t), r = [
    ...Jo(e).split(/[\\/]+/),
    ...n.split(/[\\/]+/)
  ], o = [];
  for (const a of r)
    if (!(!a || a === ".")) {
      if (a === "..") {
        if (!o.length)
          throw new Error(`插件资源路径越界: ${t}`);
        o.pop();
        continue;
      }
      o.push(a);
    }
  return o.join("/");
}, j2 = (e, t, n) => {
  const { suffix: r } = td(n), o = B2(
    z2(t),
    n
  );
  return `${or(e, o)}${r}`;
}, V2 = [
  "BaseTransition",
  "BaseTransitionPropsValidators",
  "Comment",
  "DeprecationTypes",
  "EffectScope",
  "ErrorCodes",
  "ErrorTypeStrings",
  "Fragment",
  "KeepAlive",
  "ReactiveEffect",
  "Static",
  "Suspense",
  "Teleport",
  "Text",
  "TrackOpTypes",
  "Transition",
  "TransitionGroup",
  "TriggerOpTypes",
  "VueElement",
  "assertNumber",
  "callWithAsyncErrorHandling",
  "callWithErrorHandling",
  "camelize",
  "capitalize",
  "cloneVNode",
  "compatUtils",
  "compile",
  "computed",
  "createApp",
  "createBlock",
  "createCommentVNode",
  "createElementBlock",
  "createElementVNode",
  "createHydrationRenderer",
  "createPropsRestProxy",
  "createRenderer",
  "createSSRApp",
  "createSlots",
  "createStaticVNode",
  "createTextVNode",
  "createVNode",
  "customRef",
  "defineAsyncComponent",
  "defineComponent",
  "defineCustomElement",
  "defineEmits",
  "defineExpose",
  "defineModel",
  "defineOptions",
  "defineProps",
  "defineSSRCustomElement",
  "defineSlots",
  "devtools",
  "effect",
  "effectScope",
  "getCurrentInstance",
  "getCurrentScope",
  "getCurrentWatcher",
  "getTransitionRawChildren",
  "guardReactiveProps",
  "h",
  "handleError",
  "hasInjectionContext",
  "hydrate",
  "hydrateOnIdle",
  "hydrateOnInteraction",
  "hydrateOnMediaQuery",
  "hydrateOnVisible",
  "initCustomFormatter",
  "initDirectivesForSSR",
  "inject",
  "isMemoSame",
  "isProxy",
  "isReactive",
  "isReadonly",
  "isRef",
  "isRuntimeOnly",
  "isShallow",
  "isVNode",
  "markRaw",
  "mergeDefaults",
  "mergeModels",
  "mergeProps",
  "nextTick",
  "normalizeClass",
  "normalizeProps",
  "normalizeStyle",
  "onActivated",
  "onBeforeMount",
  "onBeforeUnmount",
  "onBeforeUpdate",
  "onDeactivated",
  "onErrorCaptured",
  "onMounted",
  "onRenderTracked",
  "onRenderTriggered",
  "onScopeDispose",
  "onServerPrefetch",
  "onUnmounted",
  "onUpdated",
  "onWatcherCleanup",
  "openBlock",
  "popScopeId",
  "provide",
  "proxyRefs",
  "pushScopeId",
  "queuePostFlushCb",
  "reactive",
  "readonly",
  "ref",
  "registerRuntimeCompiler",
  "render",
  "renderList",
  "renderSlot",
  "resolveComponent",
  "resolveDirective",
  "resolveDynamicComponent",
  "resolveFilter",
  "resolveTransitionHooks",
  "setBlockTracking",
  "setDevtoolsHook",
  "setTransitionHooks",
  "shallowReactive",
  "shallowReadonly",
  "shallowRef",
  "ssrContextKey",
  "ssrUtils",
  "stop",
  "toDisplayString",
  "toHandlerKey",
  "toHandlers",
  "toRaw",
  "toRef",
  "toRefs",
  "toValue",
  "transformVNodeArgs",
  "triggerRef",
  "unref",
  "useAttrs",
  "useCssModule",
  "useCssVars",
  "useHost",
  "useId",
  "useModel",
  "useSSRContext",
  "useShadowRoot",
  "useSlots",
  "useTemplateRef",
  "useTransitionState",
  "vModelCheckbox",
  "vModelDynamic",
  "vModelRadio",
  "vModelSelect",
  "vModelText",
  "vShow",
  "version",
  "warn",
  "watch",
  "watchEffect",
  "watchPostEffect",
  "watchSyncEffect",
  "withAsyncContext",
  "withCtx",
  "withDefaults",
  "withDirectives",
  "withKeys",
  "withMemo",
  "withModifiers",
  "withScopeId"
], U2 = (e) => {
  if (e !== "vue") return null;
  const t = xl.get(e);
  if (t) return t;
  const n = "__SNIPPETS_CODE_PLUGIN_SHARED__", r = globalThis;
  r[n] = {
    ...r[n] ?? {},
    vue: eo
  };
  const o = V2.map((i) => `export const ${i} = Vue.${i};`).join(`
`), a = [
    `const Vue = globalThis.${n}.vue;`,
    "export default Vue;",
    o
  ].join(`
`), s = URL.createObjectURL(
    new Blob([a], { type: "text/javascript" })
  );
  return xl.set(e, s), s;
}, W2 = (e, t, n) => {
  const r = (o) => {
    const a = U2(o);
    return a || (!o.startsWith("./") && !o.startsWith("../") ? o : j2(e, t, o));
  };
  return n.replace(
    /((?:import|export)\s+(?:[^'"]*?\s+from\s*)?)(['"])([^'"]+)\2/g,
    (o, a, s, i) => `${a}${s}${r(i)}${s}`
  ).replace(
    /(import\s*\(\s*)(['"])([^'"]+)\2(\s*\))/g,
    (o, a, s, i, l) => `${a}${s}${r(i)}${s}${l}`
  );
}, H2 = (e, t) => {
  const n = Po.get(e) ?? [];
  n.push(t), Po.set(e, n);
}, K2 = (e) => {
  (Po.get(e) ?? []).forEach((n) => URL.revokeObjectURL(n)), Po.delete(e);
}, G2 = async (e, t) => {
  const n = or(e, t), r = await fetch(n);
  if (!r.ok)
    throw new Error(
      `插件 ${e.id} 前端入口读取失败: ${r.status} ${r.statusText}`
    );
  const o = await r.text(), a = W2(
    e,
    t,
    o
  ), s = URL.createObjectURL(
    new Blob([a], { type: "text/javascript" })
  );
  return H2(String(e.id), s), await import(
    /* @vite-ignore */
    s
  );
}, Y2 = (e) => async (t, n, r) => (N2(e, t), x(t, n, r)), Z2 = (e) => async (t, n = null) => (M2(e, t), await x("invoke_plugin_backend", {
  pluginId: e.id,
  command: t,
  payload: n
})), lo = (e, t) => {
  const n = er.get(e) ?? /* @__PURE__ */ new Set();
  n.add(t), er.set(e, n);
}, q2 = (e, t) => {
  const n = er.get(e);
  n && (n.delete(t), n.size === 0 && er.delete(e));
}, X2 = (e) => {
  const t = Array.from(er.get(e) ?? []);
  er.delete(e);
  for (const n of t)
    try {
      n();
    } catch (r) {
      G.warn(`[PluginRuntime] 清理插件运行时失败: ${e}`, r);
    }
}, J2 = (e) => async (...t) => {
  const n = String(e.id), r = await Rt(...t);
  let o = !0;
  const a = () => {
    o && (o = !1, q2(n, a), r());
  };
  return lo(n, a), a;
}, Dl = (e, t, n) => {
  if (t) return ya(t);
  if (!n)
    throw new Error(
      `插件 ${e.id} 注册组件时缺少 component 或 componentUrl`
    );
  return ya(
    uo(
      () => import(
        /* @vite-ignore */
        or(e, n)
      )
    )
  );
}, Q2 = (e, t, n) => {
  if (t) return t;
  if (!n)
    throw new Error(
      `插件 ${e.id} 注册路由组件时缺少 component 或 componentUrl`
    );
  return () => import(
    /* @vite-ignore */
    or(e, n)
  );
}, e3 = (e, t) => {
  if (e === "config") {
    Ha.push(t);
    return;
  }
  if (e === "window") {
    Ga.push(t);
    return;
  }
  Ka.push(t);
}, ha = (e, t) => {
  for (let n = e.length - 1; n >= 0; n -= 1)
    e[n].meta?.pluginId === t && e.splice(n, 1);
}, va = (e, t, n) => {
  const r = e[t] ?? [];
  r.includes(n) || (e[t] = [...r, n]), e.manifest.capabilities = {
    ...e.manifest.capabilities,
    [t]: e[t]
  };
}, Ao = (e, t) => `${e}:${t}`, nd = (e) => ({
  pluginId: String(e.id),
  packagePath: e.packagePath ?? "",
  manifest: e.manifest,
  resolveAssetUrl: (t) => or(e, t),
  api: {
    invoke: Y2(e),
    invokeBackend: Z2(e),
    listen: J2(e),
    emit: vc
  },
  ui: {
    h: qa,
    defineComponent: q
  },
  storage: {
    get: async (t) => await x("get_local_plugin_data", {
      pluginId: e.id,
      key: t
    }) ?? null,
    set: async (t, n) => {
      await x("set_local_plugin_data", {
        pluginId: e.id,
        key: t,
        value: n
      });
    },
    delete: async (t) => {
      await x("delete_local_plugin_data", {
        pluginId: e.id,
        key: t
      });
    }
  },
  registerRoute(t) {
    const n = t.target ?? "layout";
    va(e, "routeNames", t.name);
    const r = {
      path: t.path,
      name: t.name,
      component: Q2(e, t.component, t.componentUrl),
      meta: {
        ...t.meta,
        pluginId: e.id
      }
    };
    e3(n, r);
  },
  registerSettingsTab(t) {
    const n = t.labelKey ?? `plugins.${e.id}.${t.id}`, r = {
      id: t.id,
      pluginId: String(e.id),
      labelKey: n,
      label: t.label,
      icon: t.icon ?? Yd
    }, o = Ao(String(e.id), t.id), a = Vn.findIndex(
      (i) => i.id === t.id && i.pluginId === String(e.id)
    ), s = Dl(e, t.component, t.componentUrl);
    a === -1 ? (Vn.push(r), Wa[t.id] = s, Lo.add(o)) : Lo.has(o) && (Vn[a] = r, Wa[t.id] = s), va(e, "settingsTabs", t.id);
  },
  registerSearchProvider(t) {
    const n = {
      pluginId: e.id,
      source: t.source,
      search: t.search
    }, r = jn.findIndex(
      (o) => o.pluginId === e.id && o.source === t.source
    );
    r === -1 ? jn.push(n) : jn[r] = n, va(e, "searchSources", t.source);
  },
  registerTitlebarAction(t) {
    const n = Ao(
      String(e.id),
      t.id
    ), r = Un.findIndex(
      (a) => a.id === t.id && a.pluginId === e.id
    ), o = {
      id: t.id,
      pluginId: e.id,
      component: Dl(e, t.component, t.componentUrl)
    };
    r === -1 ? (Un.push(o), Io.add(n)) : Io.has(n) && (Un[r] = o);
  },
  registerWindowShortcut(t) {
    so.push({
      label: t.label,
      pluginId: e.id,
      closeCommandLabel: t.closeCommandLabel
    });
  }
}), t3 = async (e, t) => {
  const n = t.activate ?? (typeof t.default == "function" ? t.default : t.default?.activate);
  if (typeof n != "function")
    throw new Error(`插件 ${e.id} 的前端入口没有导出 activate(context)`);
  const r = await n(nd(e)), o = String(e.id);
  if (typeof r == "function") {
    lo(o, r);
    return;
  }
  typeof r?.deactivate == "function" && lo(o, r.deactivate), typeof r?.dispose == "function" && lo(o, r.dispose);
}, n3 = async (e) => !1, r3 = (e) => {
  if (Oo.has(String(e.id))) return;
  const t = e.manifest.entry?.styles ?? [];
  if (!t.length) return;
  const n = t.map((r) => {
    const o = document.createElement("link");
    return o.rel = "stylesheet", o.href = or(e, r), o.dataset.pluginId = String(e.id), document.head.appendChild(o), o;
  });
  Oo.set(String(e.id), n);
}, o3 = (e) => {
  (Oo.get(e) ?? []).forEach((n) => n.remove()), Oo.delete(e);
}, a3 = async (e, t) => {
  for (const n of e)
    if (n.source === "local" && t(String(n.id)) && !io.has(String(n.id))) {
      if (n.manifest.entry?.frontend) {
        try {
          r3(n);
          const r = await G2(
            n,
            n.manifest.entry.frontend
          );
          await t3(n, r), io.add(String(n.id));
        } catch (r) {
          Ro(String(n.id)), G.warn(`[PluginRuntime] 加载本地插件失败: ${n.id}`, r);
        }
        continue;
      }
      try {
        await n3(
          nd(n)
        ) && io.add(String(n.id));
      } catch (r) {
        Ro(String(n.id)), G.warn(
          `[PluginRuntime] 加载官方插件运行时失败: ${n.id}`,
          r
        );
      }
    }
};
function Ro(e) {
  X2(e), io.delete(e), o3(e), K2(e);
  for (const [
    t,
    n
  ] of Fl.entries())
    [
      ...Ha,
      ...Ka,
      ...Ga
    ].some(
      (o) => o.name === t && o.meta?.pluginId === e
    ) && (n(), x2.delete(t), Fl.delete(t));
  ha(Ha, e), ha(Ka, e), ha(Ga, e);
  for (let t = Vn.length - 1; t >= 0; t -= 1) {
    const n = Vn[t], r = Ao(e, n.id);
    n.pluginId === e && Lo.has(r) && (delete Wa[n.id], Vn.splice(t, 1), Lo.delete(r));
  }
  for (let t = jn.length - 1; t >= 0; t -= 1)
    jn[t].pluginId === e && jn.splice(t, 1);
  for (let t = Un.length - 1; t >= 0; t -= 1) {
    const n = Un[t], r = Ao(e, n.id);
    n.pluginId === e && Io.has(r) && (Un.splice(t, 1), Io.delete(r));
  }
  for (let t = so.length - 1; t >= 0; t -= 1)
    so[t].pluginId === e && so.splice(t, 1);
}
let dr = null, fr = null, pr = null;
const zl = (e, t) => {
  globalThis.setTimeout(e, t);
}, Bl = (e) => e.replace(/^v/i, "").split(".").map((t) => Number.parseInt(t, 10)).map((t) => Number.isFinite(t) ? t : 0), s3 = (e, t) => {
  const n = Bl(e), r = Bl(t), o = Math.max(n.length, r.length);
  for (let a = 0; a < o; a += 1) {
    const s = (n[a] ?? 0) - (r[a] ?? 0);
    if (s !== 0) return s;
  }
  return 0;
}, jl = (e) => Array.isArray(e.dependencies) ? e.dependencies.filter(
  (t) => typeof t == "string" && !!t.trim()
) : [], Vl = (e) => JSON.stringify({
  id: e.id,
  source: e.source,
  packagePath: e.packagePath,
  installedAt: e.installedAt,
  version: e.manifest.version,
  entry: e.manifest.entry,
  capabilities: e.manifest.capabilities,
  dependencies: e.manifest.dependencies,
  resourceFor: e.resourceFor
}), i3 = (e, t) => Vl(e) !== Vl(t), Ul = (e, t) => {
  const n = e.reduce(
    (r, o) => (r[o.id] = o.enabledByDefault, r),
    { ...Qc }
  );
  if (!t)
    return n;
  for (const r of e) {
    const o = t[r.id];
    typeof o == "boolean" && (n[r.id] = o);
  }
  return n;
}, l3 = /* @__PURE__ */ S2("plugins", {
  state: () => ({
    enabled: { ...Qc },
    installedPlugins: ko,
    initialized: !1,
    resourceStatusByPluginId: {},
    runtimeRevision: 0,
    stateUnlisten: null
  }),
  getters: {
    plugins: (e) => e.installedPlugins,
    visiblePlugins: (e) => e.installedPlugins.filter((t) => !t.resourceFor),
    resourcesForPlugin: (e) => (t) => e.installedPlugins.filter(
      (n) => n.resourceFor === t
    ),
    isInstalled: (e) => (t) => e.installedPlugins.some((n) => n.id === t),
    isEnabled: (e) => (t) => e.installedPlugins.some((n) => n.id === t) ? e.enabled[t] ?? !0 : !1
  },
  actions: {
    async initialize() {
      if (this.initialized) {
        await this.ensureStateListener();
        return;
      }
      if (dr) {
        await dr;
        return;
      }
      dr = (async () => {
        try {
          G.info("[PluginStore] initialize start"), await this.reconcileInstalledPlugins("initialize", [], {
            loadRuntimeEntries: !1,
            refreshResourceStatus: !1
          }), G.info("[PluginStore] initialize complete", {
            plugins: this.installedPlugins.map((e) => ({
              id: e.id,
              source: e.source,
              enabled: this.isEnabled(e.id),
              packagePath: e.packagePath
            }))
          });
        } catch (e) {
          G.warn("[PluginStore] 加载插件状态失败，使用默认状态", e), this.installedPlugins = ko, this.enabled = Ul(
            this.installedPlugins,
            this.enabled
          );
        } finally {
          this.initialized = !0, await this.ensureStateListener();
        }
        zl(
          () => this.loadEnabledPluginEntriesInBackground(),
          600
        ), zl(
          () => this.refreshPluginResourceStatusInBackground(),
          1200
        );
      })();
      try {
        await dr;
      } finally {
        dr = null;
      }
    },
    async refreshInstalledPlugins() {
      await this.reconcileInstalledPlugins("manual-refresh");
    },
    async reconcileInstalledPlugins(e, t = [], n = {}) {
      const {
        refreshResourceStatus: r = !0,
        loadRuntimeEntries: o = !0
      } = n;
      G.info("[PluginStore] reconcile installed plugins start", {
        reason: e
      });
      const a = this.installedPlugins, s = new Map(
        a.map((g) => [String(g.id), g])
      ), i = await cw(), l = Xc(i), u = new Map(
        l.map((g) => [String(g.id), g])
      ), c = new Set(t);
      for (const g of a) {
        if (g.source !== "local") continue;
        const v = String(g.id), h = u.get(v);
        (!h || i3(g, h)) && c.add(v);
      }
      this.installedPlugins = l;
      const p = await uw(), m = Object.fromEntries(
        Object.entries(this.enabled).filter(
          ([g]) => s.has(g) && u.has(g)
        )
      );
      this.enabled = Ul(this.installedPlugins, {
        ...m,
        ...p
      }), this.installedPlugins.filter(
        (g) => g.source === "local" && !this.isEnabled(g.id)
      ).forEach((g) => c.add(String(g.id))), c.forEach(
        (g) => Ro(g)
      ), r && await this.refreshPluginResourceStatus(), o && await this.loadEnabledPluginEntries(), G.info("[PluginStore] reconcile installed plugins complete", {
        reason: e,
        resetPluginIds: Array.from(c),
        plugins: this.installedPlugins.map((g) => ({
          id: g.id,
          source: g.source,
          enabled: this.isEnabled(g.id),
          hotkeys: g.hotkeys,
          packagePath: g.packagePath
        }))
      });
    },
    async installFromPath(e, t = !1) {
      G.info("[PluginStore] install from path start", {
        sourcePath: e,
        overwrite: t
      });
      const n = await dw(
        e,
        t
      );
      G.info("[PluginStore] install from path complete", {
        pluginId: n.manifest.id,
        packagePath: n.packagePath
      }), await this.reconcileInstalledPlugins("install-path", [
        String(n.manifest.id)
      ]);
    },
    async installFromUrl(e, t = !1, n, r) {
      G.info("[PluginStore] install from url start", {
        packageUrl: e,
        overwrite: t,
        packageSubdir: n,
        expectedSizeBytes: r
      });
      const o = await fw(
        e,
        t,
        n,
        r
      );
      G.info("[PluginStore] install from url complete", {
        pluginId: o.manifest.id,
        packagePath: o.packagePath,
        packageUrl: e
      }), await this.reconcileInstalledPlugins("install-url", [
        String(o.manifest.id)
      ]);
    },
    async uninstall(e) {
      G.info("[PluginStore] uninstall start", { pluginId: e }), await mw(e), await this.reconcileInstalledPlugins("uninstall", [String(e)]), G.info("[PluginStore] uninstall complete", { pluginId: e });
    },
    async ensureStateListener() {
      if (!this.stateUnlisten)
        try {
          this.stateUnlisten = await Rt(
            "plugin-state-changed",
            async (e) => {
              const { pluginId: t, enabled: n } = e.payload;
              (this.installedPlugins.some((r) => r.id === t) || A2(t)) && (this.enabled[t] = n), await this.reconcileInstalledPlugins(
                "backend-state-event",
                n ? [] : [t]
              );
            }
          );
        } catch (e) {
          G.warn("[PluginStore] 监听插件状态变化失败", e);
        }
    },
    async setEnabled(e, t) {
      const n = this.enabled[e];
      this.enabled[e] = t;
      try {
        G.info("[PluginStore] set enabled start", { pluginId: e, enabled: t }), t || (Ro(String(e)), this.runtimeRevision += 1), await gw(e, t), await this.reconcileInstalledPlugins(
          "set-enabled",
          t ? [] : [String(e)]
        ), G.info("[PluginStore] set enabled complete", {
          pluginId: e,
          enabled: t
        });
      } catch (r) {
        throw typeof n == "boolean" ? this.enabled[e] = n : delete this.enabled[e], n && await this.loadEnabledPluginEntries(), G.error("[PluginStore] 保存插件状态失败", {
          pluginId: e,
          enabled: t,
          error: r
        }), r;
      }
    },
    async loadEnabledPluginEntries() {
      if (fr) {
        await fr;
        return;
      }
      fr = (async () => {
        await a3(
          this.installedPlugins,
          (e) => this.isEnabled(e)
        ), this.runtimeRevision += 1;
      })();
      try {
        await fr;
      } finally {
        fr = null;
      }
    },
    loadEnabledPluginEntriesInBackground() {
      this.loadEnabledPluginEntries().catch((e) => {
        G.warn("[PluginStore] 后台加载插件前端入口失败", e);
      });
    },
    shouldInstallMarketplaceItem(e) {
      const t = this.installedPlugins.find(
        (n) => n.id === e.id
      );
      return !t || t.source === "local" && s3(e.version, t.manifest.version) > 0;
    },
    async installMarketplaceItemWithDependencies(e, t, n = {}, r = /* @__PURE__ */ new Set()) {
      if (r.has(e.id))
        throw new Error(
          n.formatCircularDependencyError?.(e) ?? `Circular plugin dependency: ${e.id}`
        );
      r.add(e.id);
      try {
        for (const o of jl(e)) {
          const a = t.find(
            (s) => s.id === o
          );
          if (!a)
            throw new Error(
              n.formatMissingDependencyError?.(o) ?? `Missing plugin dependency: ${o}`
            );
          if (n.isCompatible && !n.isCompatible(a)) {
            const s = a.name?.fallback || a.name?.i18nKey || a.id;
            throw new Error(
              n.formatIncompatibleDependencyError?.(a) ?? `Incompatible plugin dependency: ${s}`
            );
          }
          this.shouldInstallMarketplaceItem(a) && await this.installMarketplaceItemWithDependencies(
            a,
            t,
            n,
            r
          );
        }
        e.packageUrl && this.shouldInstallMarketplaceItem(e) && (n.onInstallingPackage?.(e), G.info("[PluginStore] marketplace lifecycle install package", {
          pluginId: e.id,
          packageUrl: e.packageUrl,
          packageSubdir: e.packageSubdir,
          dependencies: jl(e)
        }), await this.installFromUrl(
          e.packageUrl,
          !0,
          e.packageSubdir,
          e.sizeBytes
        ));
      } finally {
        r.delete(e.id);
      }
    },
    async refreshPluginResourceStatus() {
      if (pr) {
        await pr;
        return;
      }
      pr = (async () => {
        const e = {}, t = (n) => this.installedPlugins.some(
          (r) => r.id === n || r.resourceFor === n
        );
        if (t("screenshot"))
          try {
            const n = await hw();
            e[n.pluginId] = n;
          } catch (n) {
            G.warn("[PluginStore] 获取截图插件资源状态失败", n);
          }
        if (t("translation")) {
          const n = "resources/transformers/transformers.min.js", r = ["translation-offline-runtime", "translation"];
          let o = null, a;
          for (const s of r)
            if (o = await Ns(
              s,
              n
            ), o) {
              a = `plugin:${s}:${n}`;
              break;
            }
          e.translation = {
            pluginId: "translation",
            resourceId: "offline-transformers-runtime",
            available: !!o,
            source: a,
            path: o ?? void 0,
            searchedPaths: r.map(
              (s) => `plugins/${s}/${n}`
            )
          };
        }
        if (t("screen-recorder") && this.isEnabled("screen-recorder"))
          try {
            const n = await vw();
            e["screen-recorder"] = {
              pluginId: "screen-recorder",
              resourceId: "ffmpeg",
              available: n.available,
              source: n.source,
              path: n.path,
              searchedPaths: n.searchedPaths
            };
          } catch (n) {
            G.warn("[PluginStore] 获取录屏 FFmpeg 资源状态失败", n);
          }
        this.resourceStatusByPluginId = e;
      })();
      try {
        await pr;
      } finally {
        pr = null;
      }
    },
    refreshPluginResourceStatusInBackground() {
      this.refreshPluginResourceStatus().catch((e) => {
        G.warn("[PluginStore] 后台刷新插件资源状态失败", e);
      });
    }
  },
  persist: {
    pick: ["enabled"]
  }
}), u3 = { class: "settings-panel" }, c3 = { class: "panel-header" }, d3 = { class: "panel-title" }, f3 = { class: "panel-content" }, p3 = { class: "summarize-section" }, m3 = { class: "summarize-label" }, g3 = { class: "summarize-label-title" }, h3 = { class: "summarize-label-desc" }, v3 = { class: "summarize-input-wrapper" }, y3 = { class: "summarize-section" }, b3 = { class: "summarize-label" }, _3 = { class: "summarize-label-title" }, w3 = { class: "summarize-label-desc" }, E3 = { class: "summarize-input-wrapper" }, S3 = { class: "flex items-center gap-3" }, C3 = {
  key: 0,
  class: "summarize-section"
}, T3 = { class: "summarize-label" }, k3 = { class: "summarize-label-title" }, O3 = { class: "summarize-label-desc" }, P3 = { class: "summarize-input-wrapper flex-col !items-start" }, L3 = { class: "w-full space-y-2" }, I3 = { class: "w-5 text-center" }, A3 = {
  key: 0,
  class: "text-green-500 text-base"
}, R3 = {
  key: 1,
  class: "text-red-500 text-base"
}, $3 = {
  key: 2,
  class: "text-yellow-500 text-base"
}, N3 = {
  key: 3,
  class: "text-panel-text-secondary text-base"
}, M3 = ["title"], x3 = { class: "w-16 text-right text-xs text-panel-text-secondary" }, F3 = { class: "w-24" }, D3 = {
  key: 1,
  class: "text-green-500 text-xs"
}, z3 = {
  key: 2,
  class: "text-red-500 text-xs"
}, B3 = {
  key: 3,
  class: "text-panel-text-secondary text-xs"
}, j3 = {
  key: 1,
  class: "summarize-section !mt-2"
}, V3 = { class: "summarize-label" }, U3 = { class: "summarize-label-title" }, W3 = { class: "summarize-label-desc" }, H3 = { class: "summarize-input-wrapper" }, K3 = { class: "model-info-card" }, G3 = { class: "info-row" }, Y3 = { class: "info-item" }, Z3 = { class: "info-label" }, q3 = { class: "info-item" }, X3 = { class: "info-label" }, J3 = { class: "info-value" }, Q3 = { class: "info-item" }, eE = { class: "info-label" }, tE = { class: "info-value" }, nE = { class: "summarize-section !mt-2" }, rE = { class: "summarize-label" }, oE = { class: "summarize-label-title" }, aE = { class: "summarize-label-desc" }, sE = { class: "summarize-input-wrapper" }, iE = { class: "usage-tips" }, lE = { class: "tip-item" }, uE = { class: "tip-text" }, cE = { class: "tip-item" }, dE = { class: "tip-text" }, fE = { class: "tip-item" }, pE = { class: "tip-text" }, mE = { class: "tip-item" }, gE = { class: "tip-text" }, hE = "resources/transformers/transformers.min.js", vE = "translation-offline-runtime", yE = /* @__PURE__ */ q({
  name: "Translation",
  __name: "index",
  setup(e) {
    const { t } = rr(), n = l3(), r = ["translation-offline-runtime", "translation"], o = D("bing"), a = D(!1), s = D(!1), i = D({ isCached: !1, cacheType: "none" }), l = D(!1), u = D(!1), c = D(!1), p = D(!1), m = D([]), g = P(() => i.value.isCached), v = P(() => [
      { value: "google", label: t("translation.google") },
      { value: "bing", label: t("translation.bing") },
      { value: "offline", label: t("translation.offline") }
    ]), h = P(() => l.value ? t("translation.modelLoading") : c.value ? a.value ? t("translation.modelReady") : g.value && s.value ? t("translation.modelActivated") : g.value ? t("translation.modelCached") : t("translation.modelNotLoaded") : t("translation.runtimeMissing")), E = P(() => l.value ? "text-yellow-500" : c.value ? a.value || g.value && s.value ? "text-green-500" : g.value ? "text-blue-500" : "text-panel-text-secondary" : "text-red-500"), d = P(() => a.value || g.value), S = () => {
      const I = Aw();
      m.value = I.map((V) => ({
        file: V.name,
        progress: 0,
        status: "pending",
        size: V.size
      }));
    }, b = (I, V, U) => {
      const te = m.value.find((pe) => I.includes(pe.file) || pe.file.includes(I));
      te && (te.progress = V, te.status = U);
    }, w = async () => {
      for (const I of r)
        if (await Ns(I, hE))
          return c.value = !0, !0;
      return c.value = !1, !1;
    }, C = async () => {
      p.value = !0;
      try {
        const I = await pw(lw), V = Array.isArray(I.plugins) ? I.plugins : [], U = V.find((te) => te.id === vE);
        if (!U)
          throw new Error(t("translation.runtimeMarketplaceMissing"));
        if (await n.installMarketplaceItemWithDependencies(
          U,
          V,
          {
            formatMissingDependencyError: (te) => t("plugins.dependencyMissing", { id: te }),
            onInstallingPackage: (te) => {
              G.info("[翻译设置] 开始安装离线翻译运行时资源包", {
                pluginId: te.id,
                packageUrl: te.packageUrl
              });
            }
          }
        ), await w() || (G.info("[翻译设置] 运行时资源包缺少 runtime 文件，开始补全资源"), await pa()), !await w())
          throw new Error(t("translation.runtimeInstallVerifyFailed"));
        Ke.msg(t("translation.runtimeInstallSuccess"));
      } catch (I) {
        G.error("[翻译设置] 安装离线翻译运行时失败:", I), Ke.msg(
          I instanceof Error ? I.message : t("translation.runtimeInstallFailed"),
          "error"
        );
      } finally {
        p.value = !1;
      }
    }, O = async (I) => {
      try {
        await x("set_translation_engine", { engine: I }), Ke.msg(t("translation.engineSaved"));
      } catch (V) {
        G.info("Failed to save translation engine:", V), Ke.msg(t("translation.engineSaveFailed"), "error");
      }
    }, k = async () => {
      if (G.info("[翻译设置] 开始下载离线模型..."), !await w()) {
        Ke.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await pa(), await w();
      } catch (I) {
        G.error("[翻译设置] 修复离线翻译运行时失败:", I), Ke.msg(I instanceof Error && I.message ? I.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      l.value = !0, S(), Rl((I) => {
        const V = I.file || "";
        I.status === "initiate" ? b(V, 0, "downloading") : I.status === "progress" && I.progress !== void 0 ? b(V, Math.round(I.progress), "downloading") : I.status === "done" && b(V, 100, "done");
      });
      try {
        await ja(), m.value.forEach((I) => {
          I.status !== "done" && (I.status = "done"), I.progress = 100;
        }), a.value = !0, s.value = !0, i.value = await mr(), G.info("[翻译设置] 模型下载并加载成功，更新后端激活状态为 true"), await x("set_offline_model_activated", { activated: !0 }), Ke.msg(t("translation.modelLoadSuccess"));
      } catch (I) {
        G.error("[翻译设置] 模型下载失败:", I), m.value.forEach((V) => {
          (V.status === "downloading" || V.status === "pending") && (V.status = "error");
        }), a.value = !1, Ke.msg(I instanceof Error && I.message ? I.message : t("translation.modelLoadFailed"), "error");
      } finally {
        l.value = !1, Rl(null), a.value = Jr(), i.value = await mr(), G.info(`[翻译设置] 最终状态 - 内存加载: ${a.value}, 缓存存在: ${i.value.isCached}`);
      }
    }, F = async () => {
      if (G.info("[翻译设置] 开始激活离线模型..."), !await w()) {
        Ke.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await pa(), await w();
      } catch (I) {
        G.error("[翻译设置] 修复离线翻译运行时失败:", I), Ke.msg(I instanceof Error && I.message ? I.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      l.value = !0;
      try {
        await ja(), a.value = !0, s.value = !0, G.info("[翻译设置] 模型激活成功，更新后端激活状态为 true"), await x("set_offline_model_activated", { activated: !0 }), Ke.msg(t("translation.modelLoadSuccess"));
      } catch (I) {
        G.error("[翻译设置] 模型激活失败:", I), a.value = !1, Ke.msg(I instanceof Error && I.message ? I.message : t("translation.modelLoadFailed"), "error");
      } finally {
        l.value = !1, a.value = Jr(), G.info(`[翻译设置] 激活后状态 - 内存加载: ${a.value}`);
      }
    }, M = async () => {
      G.info("[翻译设置] 开始删除离线模型..."), u.value = !0;
      try {
        await Fw(), await Dw(), a.value = !1, s.value = !1, i.value = { isCached: !1, cacheType: "none" }, G.info("[翻译设置] 模型删除成功，更新后端激活状态为 false"), await x("set_offline_model_activated", { activated: !1 }), Ke.msg(t("translation.modelDeleted"));
      } catch (I) {
        G.error("[翻译设置] 模型删除失败:", I), Ke.msg(t("translation.modelDeleteFailed"), "error");
      } finally {
        u.value = !1, a.value = Jr(), i.value = await mr(), G.info(`[翻译设置] 删除后状态 - 内存加载: ${a.value}, 缓存存在: ${i.value.isCached}`);
      }
    };
    return xe(async () => {
      G.info("[翻译设置] 页面初始化..."), await w();
      try {
        const U = await x("get_translation_engine");
        G.info(`[翻译设置] 从后端获取翻译引擎: ${U}`), U && ["google", "bing", "offline"].includes(U) && (o.value = U);
      } catch (U) {
        G.error("[翻译设置] 获取翻译引擎失败:", U);
      }
      const I = Jr(), V = Nw();
      i.value = await mr(), G.info(`[翻译设置] 前端状态 - 内存加载: ${I}, 正在初始化: ${V}, 缓存存在: ${i.value.isCached}`), a.value = I, l.value = V;
      try {
        const U = await x("get_offline_model_activated");
        G.info(`[翻译设置] 后端激活状态: ${U}`), s.value = U, U && !i.value.isCached && (G.info("[翻译设置] 后端已激活但缓存不存在，重置后端状态"), await x("set_offline_model_activated", { activated: !1 }), s.value = !1), !U && I && (G.info("[翻译设置] 内存已加载但后端未标记，同步后端状态为 true"), await x("set_offline_model_activated", { activated: !0 }), s.value = !0);
      } catch (U) {
        G.error("[翻译设置] 处理激活状态失败:", U);
      }
    }), (I, V) => {
      const U = ks, te = Ts, pe = Mb;
      return A(), z("div", u3, [
        Y(" 固定标题 "),
        L("div", c3, [
          L(
            "h3",
            d3,
            X(I.$t("translation.title")),
            1
            /* TEXT */
          )
        ]),
        Y(" 可滚动内容 "),
        L("main", f3, [
          Y(" 默认翻译引擎 "),
          L("section", p3, [
            L("div", m3, [
              L(
                "div",
                g3,
                X(I.$t("translation.defaultEngine")),
                1
                /* TEXT */
              ),
              L(
                "div",
                h3,
                X(I.$t("translation.defaultEngineDesc")),
                1
                /* TEXT */
              )
            ]),
            L("div", v3, [
              W(te, {
                class: "summarize-input !w-36",
                modelValue: o.value,
                "onUpdate:modelValue": V[0] || (V[0] = (oe) => o.value = oe),
                onChange: O
              }, {
                default: ne(() => [
                  (A(!0), z(
                    Ue,
                    null,
                    Jt(v.value, (oe) => (A(), ee(U, {
                      key: oe.value,
                      label: oe.label,
                      value: oe.value
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
          Y(" 离线翻译模型 "),
          L("section", y3, [
            L("div", b3, [
              L(
                "div",
                _3,
                X(I.$t("translation.offlineModel")),
                1
                /* TEXT */
              ),
              L(
                "div",
                w3,
                X(I.$t("translation.offlineModelDesc")),
                1
                /* TEXT */
              )
            ]),
            L("div", E3, [
              L("div", S3, [
                L(
                  "span",
                  {
                    class: B(["text-sm font-medium", E.value])
                  },
                  X(h.value),
                  3
                  /* TEXT, CLASS */
                ),
                !c.value && !l.value ? (A(), ee(f(Qr), {
                  key: 0,
                  type: "primary",
                  size: "small",
                  loading: p.value,
                  onClick: C
                }, {
                  default: ne(() => [
                    Cn(
                      X(I.$t("translation.installRuntime")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : Y("v-if", !0),
                c.value && !g.value && !l.value ? (A(), ee(f(Qr), {
                  key: 1,
                  type: "primary",
                  size: "small",
                  onClick: k
                }, {
                  default: ne(() => [
                    Cn(
                      X(I.$t("translation.loadModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : Y("v-if", !0),
                c.value && g.value && !a.value && !s.value && !l.value ? (A(), ee(f(Qr), {
                  key: 2,
                  type: "primary",
                  size: "small",
                  onClick: F
                }, {
                  default: ne(() => [
                    Cn(
                      X(I.$t("translation.activateModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : Y("v-if", !0),
                g.value && !l.value ? (A(), ee(f(Qr), {
                  key: 3,
                  type: "default",
                  size: "small",
                  onClick: M,
                  loading: u.value
                }, {
                  default: ne(() => [
                    Cn(
                      X(I.$t("translation.deleteModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : Y("v-if", !0)
              ])
            ])
          ]),
          Y(" 多文件下载进度（独立区块） "),
          l.value ? (A(), z("section", C3, [
            L("div", T3, [
              L(
                "div",
                k3,
                X(I.$t("translation.downloadProgress")),
                1
                /* TEXT */
              ),
              L(
                "div",
                O3,
                X(I.$t("translation.downloadProgressDesc")),
                1
                /* TEXT */
              )
            ]),
            L("div", P3, [
              L("div", L3, [
                (A(!0), z(
                  Ue,
                  null,
                  Jt(m.value, (oe) => (A(), z("div", {
                    key: oe.file,
                    class: "flex items-center gap-3 py-1"
                  }, [
                    L("span", I3, [
                      oe.status === "done" ? (A(), z("span", A3, "✓")) : oe.status === "error" ? (A(), z("span", R3, "✗")) : oe.status === "downloading" ? (A(), z("span", $3, "↓")) : (A(), z("span", N3, "○"))
                    ]),
                    L("span", {
                      class: "w-64 truncate text-sm text-panel-text-secondary",
                      title: oe.file
                    }, X(oe.file), 9, M3),
                    L(
                      "span",
                      x3,
                      X(oe.size),
                      1
                      /* TEXT */
                    ),
                    L("div", F3, [
                      oe.status === "downloading" ? (A(), ee(pe, {
                        key: 0,
                        percentage: oe.progress,
                        "stroke-width": 6,
                        "show-text": !0,
                        "text-inside": !1
                      }, null, 8, ["percentage"])) : oe.status === "done" ? (A(), z(
                        "span",
                        D3,
                        X(I.$t("translation.completed")),
                        1
                        /* TEXT */
                      )) : oe.status === "error" ? (A(), z(
                        "span",
                        z3,
                        X(I.$t("translation.failed")),
                        1
                        /* TEXT */
                      )) : (A(), z(
                        "span",
                        B3,
                        X(I.$t("translation.waiting")),
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
          ])) : Y("v-if", !0),
          Y(" 模型信息（仅在已缓存或已加载时显示） "),
          d.value && !l.value ? (A(), z("section", j3, [
            L("div", V3, [
              L(
                "div",
                U3,
                X(I.$t("translation.modelInfo")),
                1
                /* TEXT */
              ),
              L(
                "div",
                W3,
                X(I.$t("translation.modelInfoDesc")),
                1
                /* TEXT */
              )
            ]),
            L("div", H3, [
              L("div", K3, [
                L("div", G3, [
                  L("div", Y3, [
                    L(
                      "span",
                      Z3,
                      X(I.$t("translation.modelName")),
                      1
                      /* TEXT */
                    ),
                    V[1] || (V[1] = L(
                      "span",
                      { class: "info-value" },
                      "Xenova/opus-mt-en-zh",
                      -1
                      /* HOISTED */
                    ))
                  ]),
                  L("div", q3, [
                    L(
                      "span",
                      X3,
                      X(I.$t("translation.modelSize")),
                      1
                      /* TEXT */
                    ),
                    L(
                      "span",
                      J3,
                      X(i.value.estimatedSize || "~300MB"),
                      1
                      /* TEXT */
                    )
                  ]),
                  L("div", Q3, [
                    L(
                      "span",
                      eE,
                      X(I.$t("translation.supportLang")),
                      1
                      /* TEXT */
                    ),
                    L(
                      "span",
                      tE,
                      X(I.$t("translation.enToZh")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ])) : Y("v-if", !0),
          Y(" 使用说明 "),
          L("section", nE, [
            L("div", rE, [
              L(
                "div",
                oE,
                X(I.$t("translation.usage")),
                1
                /* TEXT */
              ),
              L(
                "div",
                aE,
                X(I.$t("translation.usageDesc")),
                1
                /* TEXT */
              )
            ]),
            L("div", sE, [
              L("div", iE, [
                L("div", lE, [
                  V[2] || (V[2] = L(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  L(
                    "span",
                    uE,
                    X(I.$t("translation.usageTip1")),
                    1
                    /* TEXT */
                  )
                ]),
                L("div", cE, [
                  V[3] || (V[3] = L(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  L(
                    "span",
                    dE,
                    X(I.$t("translation.usageTip2")),
                    1
                    /* TEXT */
                  )
                ]),
                L("div", fE, [
                  V[4] || (V[4] = L(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  L(
                    "span",
                    pE,
                    X(I.$t("translation.usageTip3")),
                    1
                    /* TEXT */
                  )
                ]),
                L("div", mE, [
                  V[5] || (V[5] = L(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  L(
                    "span",
                    gE,
                    X(I.$t("translation.usageTip4")),
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
}), bE = /* @__PURE__ */ Xo(yE, [["__scopeId", "data-v-1a70fd71"]]), _E = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bE
}, Symbol.toStringTag, { value: "Module" })), wE = { class: "settings-panel" }, EE = { class: "panel-header" }, SE = { class: "panel-title" }, CE = { class: "panel-content" }, TE = { class: "summarize-section transparent-input" }, kE = { class: "summarize-label" }, OE = { class: "summarize-label-title" }, PE = { class: "summarize-label-desc" }, LE = { class: "summarize-input-wrapper" }, IE = { class: "summarize-section transparent-input" }, AE = { class: "summarize-label" }, RE = { class: "summarize-label-title" }, $E = { class: "summarize-label-desc" }, NE = { class: "summarize-input-wrapper" }, ME = { class: "summarize-section transparent-input" }, xE = { class: "summarize-label" }, FE = { class: "summarize-label-title" }, DE = { class: "summarize-label-desc" }, zE = { class: "summarize-input-wrapper" }, BE = { class: "preview-box" }, jE = /* @__PURE__ */ q({
  name: "AttachmentSettings",
  __name: "index",
  setup(e) {
    const { t } = rr(), n = D({
      pathTemplate: "assets/${noteFileName}/",
      filenameFormat: "snippets-code"
    }), r = D(!1), o = D(!1), a = P(() => {
      const l = t("settings.attachment.exampleNoteName") || "示例笔记", u = s(n.value.filenameFormat);
      return n.value.pathTemplate.replace("${noteFileName}", l) + u;
    });
    function s(l) {
      const u = /* @__PURE__ */ new Date(), c = u.toISOString().slice(0, 10).replace(/-/g, ""), p = u.toTimeString().slice(0, 8).replace(/:/g, "");
      switch (l) {
        case "snippets-code":
          return `Pasted image ${c}${p}.png`;
        case "simple":
          return `image-${c}-${p}.png`;
        case "uuid":
          return `${crypto.randomUUID()}.png`;
        default:
          return "image.png";
      }
    }
    async function i() {
      if (!o.value) {
        o.value = !0;
        try {
          await h2(n.value), Ke.msg(t("settings.attachment.configSaved"));
        } catch (l) {
          console.error("保存配置失败:", l), Ke.msg(t("settings.attachment.configSaveFailed"), "error");
        } finally {
          o.value = !1;
        }
      }
    }
    return xe(async () => {
      r.value = !0;
      try {
        n.value = await g2();
      } catch (l) {
        console.error("加载配置失败:", l);
      } finally {
        r.value = !1;
      }
    }), (l, u) => {
      const c = Bu, p = ks, m = Ts;
      return A(), z("div", wE, [
        Y(" 固定标题 "),
        L("div", EE, [
          L(
            "h3",
            SE,
            X(l.$t("settings.attachment.title")),
            1
            /* TEXT */
          )
        ]),
        Y(" 可滚动内容 "),
        L("main", CE, [
          Y(" 附件路径模板 "),
          L("section", TE, [
            L("div", kE, [
              L(
                "div",
                OE,
                X(l.$t("settings.attachment.pathTemplate")),
                1
                /* TEXT */
              ),
              L(
                "div",
                PE,
                X(l.$t("settings.attachment.pathTemplateHint")),
                1
                /* TEXT */
              )
            ]),
            L("div", LE, [
              W(c, {
                class: "summarize-input",
                modelValue: f(n).pathTemplate,
                "onUpdate:modelValue": u[0] || (u[0] = (g) => f(n).pathTemplate = g),
                placeholder: l.$t("settings.attachment.pathTemplatePlaceholder"),
                disabled: f(o),
                onBlur: i
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          Y(" 文件名生成格式 "),
          L("section", IE, [
            L("div", AE, [
              L(
                "div",
                RE,
                X(l.$t("settings.attachment.filenameFormat")),
                1
                /* TEXT */
              ),
              L(
                "div",
                $E,
                X(l.$t("settings.attachment.filenameFormatHint")),
                1
                /* TEXT */
              )
            ]),
            L("div", NE, [
              W(m, {
                class: "summarize-input !w-64",
                modelValue: f(n).filenameFormat,
                "onUpdate:modelValue": u[1] || (u[1] = (g) => f(n).filenameFormat = g),
                disabled: f(o),
                onChange: i
              }, {
                default: ne(() => [
                  W(p, {
                    label: l.$t("settings.attachment.formatObsidian"),
                    value: "obsidian"
                  }, null, 8, ["label"]),
                  W(p, {
                    label: l.$t("settings.attachment.formatSimple"),
                    value: "simple"
                  }, null, 8, ["label"]),
                  W(p, {
                    label: l.$t("settings.attachment.formatUuid"),
                    value: "uuid"
                  }, null, 8, ["label"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "disabled"])
            ])
          ]),
          Y(" 路径预览 "),
          L("section", ME, [
            L("div", xE, [
              L(
                "div",
                FE,
                X(l.$t("settings.attachment.pathPreview")),
                1
                /* TEXT */
              ),
              L(
                "div",
                DE,
                X(l.$t("settings.attachment.pathPreviewHint")),
                1
                /* TEXT */
              )
            ]),
            L("div", zE, [
              L("div", BE, [
                L(
                  "code",
                  null,
                  X(f(a)),
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
}), VE = /* @__PURE__ */ Xo(jE, [["__scopeId", "data-v-52dba400"]]), UE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VE
}, Symbol.toStringTag, { value: "Module" }));
export {
  HE as activate
};
