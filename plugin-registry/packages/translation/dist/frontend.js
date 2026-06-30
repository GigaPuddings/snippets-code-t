import * as ro from "vue";
import { inject as we, createVNode as j, defineAsyncComponent as Xa, getCurrentInstance as tt, ref as z, computed as L, unref as f, shallowRef as mn, watchEffect as Yl, readonly as Ja, getCurrentScope as Zl, onScopeDispose as ql, onMounted as Fe, nextTick as Ae, watch as ue, isRef as gn, warn as kd, provide as zt, defineComponent as q, createElementBlock as B, openBlock as A, mergeProps as hn, renderSlot as ce, createElementVNode as I, toRef as Nt, onUnmounted as Qa, useAttrs as Od, useSlots as Pd, normalizeStyle as Re, normalizeClass as W, createCommentVNode as G, Fragment as Ve, createBlock as ne, withCtx as ee, resolveDynamicComponent as gt, withModifiers as Ze, toDisplayString as X, onBeforeUnmount as Wt, Transition as nr, withDirectives as ht, vShow as tn, reactive as On, onActivated as Ld, onUpdated as Id, cloneVNode as Ad, Text as Xl, Comment as Rd, Teleport as $d, onBeforeMount as Nd, onDeactivated as Md, createTextVNode as Cn, toRaw as Jl, toRefs as Mo, resolveComponent as En, resolveDirective as xd, toHandlerKey as Fd, renderList as Jt, withKeys as ir, vModelText as Dd, normalizeProps as zd, shallowReactive as Bd, isVNode as Tr, render as mo, h as es, hasInjectionContext as Ud, effectScope as Wd, isReactive as Ql, markRaw as _a } from "vue";
var jd = {
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
function Vd() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Hd(e, t, n) {
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
var Kd = Symbol("icon-context");
function Ot(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = Vd(), i = we(Kd, jd);
      return function() {
        var l = a.size, c = a.strokeWidth, d = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, g = a.fill, h = a.spin, v = Hd(s, {
          size: l,
          strokeWidth: c,
          strokeLinecap: d,
          strokeLinejoin: p,
          theme: m,
          fill: g
        }, i), S = [i.prefix + "-icon"];
        return S.push(i.prefix + "-icon-" + e), t && i.rtl && S.push(i.prefix + "-icon-rtl"), h && S.push(i.prefix + "-icon-spin"), j("span", {
          class: S.join(" ")
        }, [n(v)]);
      };
    }
  };
  return r;
}
const Gd = Ot("close-small", !1, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Yd = Ot("copy", !0, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Zd = Ot("delete", !1, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), qd = Ot("down", !1, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Xd = Ot("folder-open", !0, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Jd = Ot("pushpin", !1, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Qd = Ot("setting-two", !1, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Gs = Ot("switch", !0, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M42 19H5.99998",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M30 7L42 19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M6.79897 29H42.799",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M6.79895 29L18.799 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ef = Ot("translate", !0, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), tf = Ot("up", !1, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M13 30L25 18L37 30",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ys = Ot("volume-up", !0, function(e) {
  return j("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [j("path", {
    d: "M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M32 24H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), j("path", {
    d: "M38 18V30",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), d3 = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/translate",
    name: "Translate",
    component: () => Promise.resolve().then(() => SE)
  }), e.registerSettingsTab({
    id: "translation",
    labelKey: "translation.title",
    icon: ef,
    component: Xa(() => Promise.resolve().then(() => BS))
  });
}, ec = Symbol(), oo = "el", nf = "is-", Sn = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, tc = Symbol("namespaceContextKey"), ts = (e) => {
  const t = e || (tt() ? we(tc, z(oo)) : z(oo));
  return L(() => f(t) || oo);
}, xe = (e, t) => {
  const n = ts(t);
  return {
    namespace: n,
    b: (v = "") => Sn(n.value, e, v, "", ""),
    e: (v) => v ? Sn(n.value, e, "", v, "") : "",
    m: (v) => v ? Sn(n.value, e, "", "", v) : "",
    be: (v, S) => v && S ? Sn(n.value, e, v, S, "") : "",
    em: (v, S) => v && S ? Sn(n.value, e, "", v, S) : "",
    bm: (v, S) => v && S ? Sn(n.value, e, v, "", S) : "",
    bem: (v, S, u) => v && S && u ? Sn(n.value, e, v, S, u) : "",
    is: (v, ...S) => {
      const u = S.length >= 1 ? S[0] : !0;
      return v && u ? `${nf}${v}` : "";
    },
    cssVar: (v) => {
      const S = {};
      for (const u in v)
        v[u] && (S[`--${n.value}-${u}`] = v[u]);
      return S;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const S = {};
      for (const u in v)
        v[u] && (S[`--${n.value}-${e}-${u}`] = v[u]);
      return S;
    },
    cssVarBlockName: (v) => `--${n.value}-${e}-${v}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const kr = () => {
}, rf = Object.prototype.hasOwnProperty, Zs = (e, t) => rf.call(e, t), Mt = Array.isArray, We = (e) => typeof e == "function", at = (e) => typeof e == "string", ot = (e) => e !== null && typeof e == "object", of = Object.prototype.toString, af = (e) => of.call(e), sf = (e) => af(e) === "[object Object]";
var nc = typeof global == "object" && global && global.Object === Object && global, lf = typeof self == "object" && self && self.Object === Object && self, jt = nc || lf || Function("return this")(), Bt = jt.Symbol, rc = Object.prototype, cf = rc.hasOwnProperty, uf = rc.toString, lr = Bt ? Bt.toStringTag : void 0;
function df(e) {
  var t = cf.call(e, lr), n = e[lr];
  try {
    e[lr] = void 0;
    var r = !0;
  } catch {
  }
  var o = uf.call(e);
  return r && (t ? e[lr] = n : delete e[lr]), o;
}
var ff = Object.prototype, pf = ff.toString;
function mf(e) {
  return pf.call(e);
}
var gf = "[object Null]", hf = "[object Undefined]", qs = Bt ? Bt.toStringTag : void 0;
function rr(e) {
  return e == null ? e === void 0 ? hf : gf : qs && qs in Object(e) ? df(e) : mf(e);
}
function Hn(e) {
  return e != null && typeof e == "object";
}
var vf = "[object Symbol]";
function xo(e) {
  return typeof e == "symbol" || Hn(e) && rr(e) == vf;
}
function yf(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var kt = Array.isArray, Xs = Bt ? Bt.prototype : void 0, Js = Xs ? Xs.toString : void 0;
function oc(e) {
  if (typeof e == "string")
    return e;
  if (kt(e))
    return yf(e, oc) + "";
  if (xo(e))
    return Js ? Js.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var bf = /\s/;
function _f(e) {
  for (var t = e.length; t-- && bf.test(e.charAt(t)); )
    ;
  return t;
}
var wf = /^\s+/;
function Ef(e) {
  return e && e.slice(0, _f(e) + 1).replace(wf, "");
}
function vn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Qs = NaN, Sf = /^[-+]0x[0-9a-f]+$/i, Cf = /^0b[01]+$/i, Tf = /^0o[0-7]+$/i, kf = parseInt;
function ei(e) {
  if (typeof e == "number")
    return e;
  if (xo(e))
    return Qs;
  if (vn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = vn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ef(e);
  var n = Cf.test(e);
  return n || Tf.test(e) ? kf(e.slice(2), n ? 2 : 8) : Sf.test(e) ? Qs : +e;
}
function ac(e) {
  return e;
}
var Of = "[object AsyncFunction]", Pf = "[object Function]", Lf = "[object GeneratorFunction]", If = "[object Proxy]";
function sc(e) {
  if (!vn(e))
    return !1;
  var t = rr(e);
  return t == Pf || t == Lf || t == Of || t == If;
}
var na = jt["__core-js_shared__"], ti = function() {
  var e = /[^.]+$/.exec(na && na.keys && na.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Af(e) {
  return !!ti && ti in e;
}
var Rf = Function.prototype, $f = Rf.toString;
function In(e) {
  if (e != null) {
    try {
      return $f.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Nf = /[\\^$.*+?()[\]{}|]/g, Mf = /^\[object .+?Constructor\]$/, xf = Function.prototype, Ff = Object.prototype, Df = xf.toString, zf = Ff.hasOwnProperty, Bf = RegExp(
  "^" + Df.call(zf).replace(Nf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Uf(e) {
  if (!vn(e) || Af(e))
    return !1;
  var t = sc(e) ? Bf : Mf;
  return t.test(In(e));
}
function Wf(e, t) {
  return e?.[t];
}
function An(e, t) {
  var n = Wf(e, t);
  return Uf(n) ? n : void 0;
}
var wa = An(jt, "WeakMap");
function jf(e, t, n) {
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
var Vf = 800, Hf = 16, Kf = Date.now;
function Gf(e) {
  var t = 0, n = 0;
  return function() {
    var r = Kf(), o = Hf - (r - n);
    if (n = r, o > 0) {
      if (++t >= Vf)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Yf(e) {
  return function() {
    return e;
  };
}
var go = function() {
  try {
    var e = An(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Zf = go ? function(e, t) {
  return go(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Yf(t),
    writable: !0
  });
} : ac, qf = Gf(Zf);
function Xf(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Jf = 9007199254740991, Qf = /^(?:0|[1-9]\d*)$/;
function ns(e, t) {
  var n = typeof e;
  return t = t ?? Jf, !!t && (n == "number" || n != "symbol" && Qf.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ep(e, t, n) {
  t == "__proto__" && go ? go(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function rs(e, t) {
  return e === t || e !== e && t !== t;
}
var tp = Object.prototype, np = tp.hasOwnProperty;
function rp(e, t, n) {
  var r = e[t];
  (!(np.call(e, t) && rs(r, n)) || n === void 0 && !(t in e)) && ep(e, t, n);
}
var ni = Math.max;
function op(e, t, n) {
  return t = ni(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = ni(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), jf(e, this, i);
  };
}
var ap = 9007199254740991;
function os(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ap;
}
function sp(e) {
  return e != null && os(e.length) && !sc(e);
}
var ip = Object.prototype;
function lp(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || ip;
  return e === n;
}
function cp(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var up = "[object Arguments]";
function ri(e) {
  return Hn(e) && rr(e) == up;
}
var ic = Object.prototype, dp = ic.hasOwnProperty, fp = ic.propertyIsEnumerable, as = ri(/* @__PURE__ */ function() {
  return arguments;
}()) ? ri : function(e) {
  return Hn(e) && dp.call(e, "callee") && !fp.call(e, "callee");
};
function pp() {
  return !1;
}
var lc = typeof exports == "object" && exports && !exports.nodeType && exports, oi = lc && typeof module == "object" && module && !module.nodeType && module, mp = oi && oi.exports === lc, ai = mp ? jt.Buffer : void 0, gp = ai ? ai.isBuffer : void 0, Ea = gp || pp, hp = "[object Arguments]", vp = "[object Array]", yp = "[object Boolean]", bp = "[object Date]", _p = "[object Error]", wp = "[object Function]", Ep = "[object Map]", Sp = "[object Number]", Cp = "[object Object]", Tp = "[object RegExp]", kp = "[object Set]", Op = "[object String]", Pp = "[object WeakMap]", Lp = "[object ArrayBuffer]", Ip = "[object DataView]", Ap = "[object Float32Array]", Rp = "[object Float64Array]", $p = "[object Int8Array]", Np = "[object Int16Array]", Mp = "[object Int32Array]", xp = "[object Uint8Array]", Fp = "[object Uint8ClampedArray]", Dp = "[object Uint16Array]", zp = "[object Uint32Array]", Oe = {};
Oe[Ap] = Oe[Rp] = Oe[$p] = Oe[Np] = Oe[Mp] = Oe[xp] = Oe[Fp] = Oe[Dp] = Oe[zp] = !0;
Oe[hp] = Oe[vp] = Oe[Lp] = Oe[yp] = Oe[Ip] = Oe[bp] = Oe[_p] = Oe[wp] = Oe[Ep] = Oe[Sp] = Oe[Cp] = Oe[Tp] = Oe[kp] = Oe[Op] = Oe[Pp] = !1;
function Bp(e) {
  return Hn(e) && os(e.length) && !!Oe[rr(e)];
}
function Up(e) {
  return function(t) {
    return e(t);
  };
}
var cc = typeof exports == "object" && exports && !exports.nodeType && exports, vr = cc && typeof module == "object" && module && !module.nodeType && module, Wp = vr && vr.exports === cc, ra = Wp && nc.process, si = function() {
  try {
    var e = vr && vr.require && vr.require("util").types;
    return e || ra && ra.binding && ra.binding("util");
  } catch {
  }
}(), ii = si && si.isTypedArray, uc = ii ? Up(ii) : Bp, jp = Object.prototype, Vp = jp.hasOwnProperty;
function Hp(e, t) {
  var n = kt(e), r = !n && as(e), o = !n && !r && Ea(e), a = !n && !r && !o && uc(e), s = n || r || o || a, i = s ? cp(e.length, String) : [], l = i.length;
  for (var c in e)
    Vp.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    ns(c, l))) && i.push(c);
  return i;
}
function Kp(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Gp = Kp(Object.keys, Object), Yp = Object.prototype, Zp = Yp.hasOwnProperty;
function qp(e) {
  if (!lp(e))
    return Gp(e);
  var t = [];
  for (var n in Object(e))
    Zp.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function dc(e) {
  return sp(e) ? Hp(e) : qp(e);
}
var Xp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jp = /^\w*$/;
function ss(e, t) {
  if (kt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || xo(e) ? !0 : Jp.test(e) || !Xp.test(e) || t != null && e in Object(t);
}
var Or = An(Object, "create");
function Qp() {
  this.__data__ = Or ? Or(null) : {}, this.size = 0;
}
function em(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var tm = "__lodash_hash_undefined__", nm = Object.prototype, rm = nm.hasOwnProperty;
function om(e) {
  var t = this.__data__;
  if (Or) {
    var n = t[e];
    return n === tm ? void 0 : n;
  }
  return rm.call(t, e) ? t[e] : void 0;
}
var am = Object.prototype, sm = am.hasOwnProperty;
function im(e) {
  var t = this.__data__;
  return Or ? t[e] !== void 0 : sm.call(t, e);
}
var lm = "__lodash_hash_undefined__";
function cm(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Or && t === void 0 ? lm : t, this;
}
function Pn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Pn.prototype.clear = Qp;
Pn.prototype.delete = em;
Pn.prototype.get = om;
Pn.prototype.has = im;
Pn.prototype.set = cm;
function um() {
  this.__data__ = [], this.size = 0;
}
function Fo(e, t) {
  for (var n = e.length; n--; )
    if (rs(e[n][0], t))
      return n;
  return -1;
}
var dm = Array.prototype, fm = dm.splice;
function pm(e) {
  var t = this.__data__, n = Fo(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : fm.call(t, n, 1), --this.size, !0;
}
function mm(e) {
  var t = this.__data__, n = Fo(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function gm(e) {
  return Fo(this.__data__, e) > -1;
}
function hm(e, t) {
  var n = this.__data__, r = Fo(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function rn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
rn.prototype.clear = um;
rn.prototype.delete = pm;
rn.prototype.get = mm;
rn.prototype.has = gm;
rn.prototype.set = hm;
var Pr = An(jt, "Map");
function vm() {
  this.size = 0, this.__data__ = {
    hash: new Pn(),
    map: new (Pr || rn)(),
    string: new Pn()
  };
}
function ym(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Do(e, t) {
  var n = e.__data__;
  return ym(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function bm(e) {
  var t = Do(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function _m(e) {
  return Do(this, e).get(e);
}
function wm(e) {
  return Do(this, e).has(e);
}
function Em(e, t) {
  var n = Do(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function on(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
on.prototype.clear = vm;
on.prototype.delete = bm;
on.prototype.get = _m;
on.prototype.has = wm;
on.prototype.set = Em;
var Sm = "Expected a function";
function is(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Sm);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (is.Cache || on)(), n;
}
is.Cache = on;
var Cm = 500;
function Tm(e) {
  var t = is(e, function(r) {
    return n.size === Cm && n.clear(), r;
  }), n = t.cache;
  return t;
}
var km = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Om = /\\(\\)?/g, Pm = Tm(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(km, function(n, r, o, a) {
    t.push(o ? a.replace(Om, "$1") : r || n);
  }), t;
});
function Lm(e) {
  return e == null ? "" : oc(e);
}
function zo(e, t) {
  return kt(e) ? e : ss(e, t) ? [e] : Pm(Lm(e));
}
function xr(e) {
  if (typeof e == "string" || xo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ls(e, t) {
  t = zo(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[xr(t[n++])];
  return n && n == r ? e : void 0;
}
function pn(e, t, n) {
  var r = e == null ? void 0 : ls(e, t);
  return r === void 0 ? n : r;
}
function fc(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var li = Bt ? Bt.isConcatSpreadable : void 0;
function Im(e) {
  return kt(e) || as(e) || !!(li && e && e[li]);
}
function Am(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Im), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? fc(o, i) : o[o.length] = i;
  }
  return o;
}
function Rm(e) {
  var t = e == null ? 0 : e.length;
  return t ? Am(e) : [];
}
function $m(e) {
  return qf(op(e, void 0, Rm), e + "");
}
function fn() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return kt(e) ? e : [e];
}
function Nm() {
  this.__data__ = new rn(), this.size = 0;
}
function Mm(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function xm(e) {
  return this.__data__.get(e);
}
function Fm(e) {
  return this.__data__.has(e);
}
var Dm = 200;
function zm(e, t) {
  var n = this.__data__;
  if (n instanceof rn) {
    var r = n.__data__;
    if (!Pr || r.length < Dm - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new on(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Qt(e) {
  var t = this.__data__ = new rn(e);
  this.size = t.size;
}
Qt.prototype.clear = Nm;
Qt.prototype.delete = Mm;
Qt.prototype.get = xm;
Qt.prototype.has = Fm;
Qt.prototype.set = zm;
function Bm(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function Um() {
  return [];
}
var Wm = Object.prototype, jm = Wm.propertyIsEnumerable, ci = Object.getOwnPropertySymbols, Vm = ci ? function(e) {
  return e == null ? [] : (e = Object(e), Bm(ci(e), function(t) {
    return jm.call(e, t);
  }));
} : Um;
function Hm(e, t, n) {
  var r = t(e);
  return kt(e) ? r : fc(r, n(e));
}
function ui(e) {
  return Hm(e, dc, Vm);
}
var Sa = An(jt, "DataView"), Ca = An(jt, "Promise"), Ta = An(jt, "Set"), di = "[object Map]", Km = "[object Object]", fi = "[object Promise]", pi = "[object Set]", mi = "[object WeakMap]", gi = "[object DataView]", Gm = In(Sa), Ym = In(Pr), Zm = In(Ca), qm = In(Ta), Xm = In(wa), cn = rr;
(Sa && cn(new Sa(new ArrayBuffer(1))) != gi || Pr && cn(new Pr()) != di || Ca && cn(Ca.resolve()) != fi || Ta && cn(new Ta()) != pi || wa && cn(new wa()) != mi) && (cn = function(e) {
  var t = rr(e), n = t == Km ? e.constructor : void 0, r = n ? In(n) : "";
  if (r)
    switch (r) {
      case Gm:
        return gi;
      case Ym:
        return di;
      case Zm:
        return fi;
      case qm:
        return pi;
      case Xm:
        return mi;
    }
  return t;
});
var hi = jt.Uint8Array, Jm = "__lodash_hash_undefined__";
function Qm(e) {
  return this.__data__.set(e, Jm), this;
}
function eg(e) {
  return this.__data__.has(e);
}
function ho(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new on(); ++t < n; )
    this.add(e[t]);
}
ho.prototype.add = ho.prototype.push = Qm;
ho.prototype.has = eg;
function tg(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function ng(e, t) {
  return e.has(t);
}
var rg = 1, og = 2;
function pc(e, t, n, r, o, a) {
  var s = n & rg, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var c = a.get(e), d = a.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, m = !0, g = n & og ? new ho() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var h = e[p], v = t[p];
    if (r)
      var S = s ? r(v, h, p, t, e, a) : r(h, v, p, e, t, a);
    if (S !== void 0) {
      if (S)
        continue;
      m = !1;
      break;
    }
    if (g) {
      if (!tg(t, function(u, E) {
        if (!ng(g, E) && (h === u || o(h, u, n, r, a)))
          return g.push(E);
      })) {
        m = !1;
        break;
      }
    } else if (!(h === v || o(h, v, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
function ag(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function sg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ig = 1, lg = 2, cg = "[object Boolean]", ug = "[object Date]", dg = "[object Error]", fg = "[object Map]", pg = "[object Number]", mg = "[object RegExp]", gg = "[object Set]", hg = "[object String]", vg = "[object Symbol]", yg = "[object ArrayBuffer]", bg = "[object DataView]", vi = Bt ? Bt.prototype : void 0, oa = vi ? vi.valueOf : void 0;
function _g(e, t, n, r, o, a, s) {
  switch (n) {
    case bg:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case yg:
      return !(e.byteLength != t.byteLength || !a(new hi(e), new hi(t)));
    case cg:
    case ug:
    case pg:
      return rs(+e, +t);
    case dg:
      return e.name == t.name && e.message == t.message;
    case mg:
    case hg:
      return e == t + "";
    case fg:
      var i = ag;
    case gg:
      var l = r & ig;
      if (i || (i = sg), e.size != t.size && !l)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      r |= lg, s.set(e, t);
      var d = pc(i(e), i(t), r, o, a, s);
      return s.delete(e), d;
    case vg:
      if (oa)
        return oa.call(e) == oa.call(t);
  }
  return !1;
}
var wg = 1, Eg = Object.prototype, Sg = Eg.hasOwnProperty;
function Cg(e, t, n, r, o, a) {
  var s = n & wg, i = ui(e), l = i.length, c = ui(t), d = c.length;
  if (l != d && !s)
    return !1;
  for (var p = l; p--; ) {
    var m = i[p];
    if (!(s ? m in t : Sg.call(t, m)))
      return !1;
  }
  var g = a.get(e), h = a.get(t);
  if (g && h)
    return g == t && h == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var S = s; ++p < l; ) {
    m = i[p];
    var u = e[m], E = t[m];
    if (r)
      var y = s ? r(E, u, m, t, e, a) : r(u, E, m, e, t, a);
    if (!(y === void 0 ? u === E || o(u, E, n, r, a) : y)) {
      v = !1;
      break;
    }
    S || (S = m == "constructor");
  }
  if (v && !S) {
    var w = e.constructor, k = t.constructor;
    w != k && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof k == "function" && k instanceof k) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var Tg = 1, yi = "[object Arguments]", bi = "[object Array]", Hr = "[object Object]", kg = Object.prototype, _i = kg.hasOwnProperty;
function Og(e, t, n, r, o, a) {
  var s = kt(e), i = kt(t), l = s ? bi : cn(e), c = i ? bi : cn(t);
  l = l == yi ? Hr : l, c = c == yi ? Hr : c;
  var d = l == Hr, p = c == Hr, m = l == c;
  if (m && Ea(e)) {
    if (!Ea(t))
      return !1;
    s = !0, d = !1;
  }
  if (m && !d)
    return a || (a = new Qt()), s || uc(e) ? pc(e, t, n, r, o, a) : _g(e, t, l, n, r, o, a);
  if (!(n & Tg)) {
    var g = d && _i.call(e, "__wrapped__"), h = p && _i.call(t, "__wrapped__");
    if (g || h) {
      var v = g ? e.value() : e, S = h ? t.value() : t;
      return a || (a = new Qt()), o(v, S, n, r, a);
    }
  }
  return m ? (a || (a = new Qt()), Cg(e, t, n, r, o, a)) : !1;
}
function Bo(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Hn(e) && !Hn(t) ? e !== e && t !== t : Og(e, t, n, r, Bo, o);
}
var Pg = 1, Lg = 2;
function Ig(e, t, n, r) {
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
    var i = s[0], l = e[i], c = s[1];
    if (s[2]) {
      if (l === void 0 && !(i in e))
        return !1;
    } else {
      var d = new Qt(), p;
      if (!(p === void 0 ? Bo(c, l, Pg | Lg, r, d) : p))
        return !1;
    }
  }
  return !0;
}
function mc(e) {
  return e === e && !vn(e);
}
function Ag(e) {
  for (var t = dc(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, mc(o)];
  }
  return t;
}
function gc(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Rg(e) {
  var t = Ag(e);
  return t.length == 1 && t[0][2] ? gc(t[0][0], t[0][1]) : function(n) {
    return n === e || Ig(n, e, t);
  };
}
function $g(e, t) {
  return e != null && t in Object(e);
}
function Ng(e, t, n) {
  t = zo(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = xr(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && os(o) && ns(s, o) && (kt(e) || as(e)));
}
function hc(e, t) {
  return e != null && Ng(e, t, $g);
}
var Mg = 1, xg = 2;
function Fg(e, t) {
  return ss(e) && mc(t) ? gc(xr(e), t) : function(n) {
    var r = pn(n, e);
    return r === void 0 && r === t ? hc(n, e) : Bo(t, r, Mg | xg);
  };
}
function Dg(e) {
  return function(t) {
    return t?.[e];
  };
}
function zg(e) {
  return function(t) {
    return ls(t, e);
  };
}
function Bg(e) {
  return ss(e) ? Dg(xr(e)) : zg(e);
}
function Ug(e) {
  return typeof e == "function" ? e : e == null ? ac : typeof e == "object" ? kt(e) ? Fg(e[0], e[1]) : Rg(e) : Bg(e);
}
var aa = function() {
  return jt.Date.now();
}, Wg = "Expected a function", jg = Math.max, Vg = Math.min;
function Hg(e, t, n) {
  var r, o, a, s, i, l, c = 0, d = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Wg);
  t = ei(t) || 0, vn(n) && (d = !!n.leading, p = "maxWait" in n, a = p ? jg(ei(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function g(O) {
    var C = r, D = o;
    return r = o = void 0, c = O, s = e.apply(D, C), s;
  }
  function h(O) {
    return c = O, i = setTimeout(u, t), d ? g(O) : s;
  }
  function v(O) {
    var C = O - l, D = O - c, x = t - C;
    return p ? Vg(x, a - D) : x;
  }
  function S(O) {
    var C = O - l, D = O - c;
    return l === void 0 || C >= t || C < 0 || p && D >= a;
  }
  function u() {
    var O = aa();
    if (S(O))
      return E(O);
    i = setTimeout(u, v(O));
  }
  function E(O) {
    return i = void 0, m && r ? g(O) : (r = o = void 0, s);
  }
  function y() {
    i !== void 0 && clearTimeout(i), c = 0, r = l = o = i = void 0;
  }
  function w() {
    return i === void 0 ? s : E(aa());
  }
  function k() {
    var O = aa(), C = S(O);
    if (r = arguments, o = this, l = O, C) {
      if (i === void 0)
        return h(l);
      if (p)
        return clearTimeout(i), i = setTimeout(u, t), g(l);
    }
    return i === void 0 && (i = setTimeout(u, t)), s;
  }
  return k.cancel = y, k.flush = w, k;
}
function Kg(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Xf(e, Ug(t), o);
}
function vo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function yr(e, t) {
  return Bo(e, t);
}
function Uo(e) {
  return e == null;
}
function Gg(e) {
  return e === void 0;
}
function Yg(e, t, n, r) {
  if (!vn(e))
    return e;
  t = zo(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = xr(t[o]), c = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var d = i[l];
      c = void 0, c === void 0 && (c = vn(d) ? d : ns(t[o + 1]) ? [] : {});
    }
    rp(i, l, c), i = i[l];
  }
  return e;
}
function Zg(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = ls(e, s);
    n(i, s) && Yg(a, zo(s, e), i);
  }
  return a;
}
function qg(e, t) {
  return Zg(e, t, function(n, r) {
    return hc(e, r);
  });
}
var Xg = $m(function(e, t) {
  return e == null ? {} : qg(e, t);
});
const Tn = (e) => e === void 0, yo = (e) => typeof e == "boolean", je = (e) => typeof e == "number", Ct = (e) => typeof Element > "u" ? !1 : e instanceof Element, Jg = (e) => at(e) ? !Number.isNaN(Number(e)) : !1;
var Qg = Object.defineProperty, eh = Object.defineProperties, th = Object.getOwnPropertyDescriptors, wi = Object.getOwnPropertySymbols, nh = Object.prototype.hasOwnProperty, rh = Object.prototype.propertyIsEnumerable, Ei = (e, t, n) => t in e ? Qg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, oh = (e, t) => {
  for (var n in t || (t = {}))
    nh.call(t, n) && Ei(e, n, t[n]);
  if (wi)
    for (var n of wi(t))
      rh.call(t, n) && Ei(e, n, t[n]);
  return e;
}, ah = (e, t) => eh(e, th(t));
function sh(e, t) {
  var n;
  const r = mn();
  return Yl(() => {
    r.value = e();
  }, ah(oh({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Ja(r);
}
var Si;
const De = typeof window < "u", ih = (e) => typeof e == "string", vc = () => {
}, ka = De && ((Si = window?.navigator) == null ? void 0 : Si.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function cs(e) {
  return typeof e == "function" ? e() : f(e);
}
function lh(e) {
  return e;
}
function Fr(e) {
  return Zl() ? (ql(e), !0) : !1;
}
function ch(e, t = !0) {
  tt() ? Fe(e) : t ? e() : Ae(e);
}
function yc(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = z(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    o.value = !1, s();
  }
  function l(...c) {
    s(), o.value = !0, a = setTimeout(() => {
      o.value = !1, a = null, e(...c);
    }, cs(t));
  }
  return r && (o.value = !0, De && l()), Fr(i), {
    isPending: Ja(o),
    start: l,
    stop: i
  };
}
function Yt(e) {
  var t;
  const n = cs(e);
  return (t = n?.$el) != null ? t : n;
}
const Wo = De ? window : void 0;
function Tt(...e) {
  let t, n, r, o;
  if (ih(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Wo) : [t, n, r, o] = e, !t)
    return vc;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, p, m, g) => (d.addEventListener(p, m, g), () => d.removeEventListener(p, m, g)), l = ue(() => [Yt(t), cs(o)], ([d, p]) => {
    s(), d && a.push(...n.flatMap((m) => r.map((g) => i(d, m, g, p))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), s();
  };
  return Fr(c), c;
}
let Ci = !1;
function uh(e, t, n = {}) {
  const { window: r = Wo, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  ka && !Ci && (Ci = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", vc)));
  let i = !0;
  const l = (m) => o.some((g) => {
    if (typeof g == "string")
      return Array.from(r.document.querySelectorAll(g)).some((h) => h === m.target || m.composedPath().includes(h));
    {
      const h = Yt(g);
      return h && (m.target === h || m.composedPath().includes(h));
    }
  }), d = [
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
      const h = Yt(e);
      ((g = r.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !h?.contains(r.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => d.forEach((m) => m());
}
function bc(e, t = !1) {
  const n = z(), r = () => n.value = !!e();
  return r(), ch(r, t), n;
}
const Ti = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ki = "__vueuse_ssr_handlers__";
Ti[ki] = Ti[ki] || {};
var Oi = Object.getOwnPropertySymbols, dh = Object.prototype.hasOwnProperty, fh = Object.prototype.propertyIsEnumerable, ph = (e, t) => {
  var n = {};
  for (var r in e)
    dh.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Oi)
    for (var r of Oi(e))
      t.indexOf(r) < 0 && fh.call(e, r) && (n[r] = e[r]);
  return n;
};
function $t(e, t, n = {}) {
  const r = n, { window: o = Wo } = r, a = ph(r, ["window"]);
  let s;
  const i = bc(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, c = ue(() => Yt(e), (p) => {
    l(), i.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), c();
  };
  return Fr(d), {
    isSupported: i,
    stop: d
  };
}
var Pi = Object.getOwnPropertySymbols, mh = Object.prototype.hasOwnProperty, gh = Object.prototype.propertyIsEnumerable, hh = (e, t) => {
  var n = {};
  for (var r in e)
    mh.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Pi)
    for (var r of Pi(e))
      t.indexOf(r) < 0 && gh.call(e, r) && (n[r] = e[r]);
  return n;
};
function vh(e, t, n = {}) {
  const r = n, { window: o = Wo } = r, a = hh(r, ["window"]);
  let s;
  const i = bc(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, c = ue(() => Yt(e), (p) => {
    l(), i.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), d = () => {
    l(), c();
  };
  return Fr(d), {
    isSupported: i,
    stop: d
  };
}
var Li;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Li || (Li = {}));
var yh = Object.defineProperty, Ii = Object.getOwnPropertySymbols, bh = Object.prototype.hasOwnProperty, _h = Object.prototype.propertyIsEnumerable, Ai = (e, t, n) => t in e ? yh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, wh = (e, t) => {
  for (var n in t || (t = {}))
    bh.call(t, n) && Ai(e, n, t[n]);
  if (Ii)
    for (var n of Ii(t))
      _h.call(t, n) && Ai(e, n, t[n]);
  return e;
};
const Eh = {
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
wh({
  linear: lh
}, Eh);
class Sh extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ch(e, t) {
  throw new Sh(`[${e}] ${t}`);
}
const Ri = {
  current: 0
}, $i = z(0), _c = 2e3, Ni = Symbol("elZIndexContextKey"), wc = Symbol("zIndexContextKey"), Ec = (e) => {
  const t = tt() ? we(Ni, Ri) : Ri, n = e || (tt() ? we(wc, void 0) : void 0), r = L(() => {
    const s = f(n);
    return je(s) ? s : _c;
  }), o = L(() => r.value + $i.value), a = () => (t.current++, $i.value = t.current, o.value);
  return !De && we(Ni), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var Th = {
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
const kh = (e) => (t, n) => Oh(t, n, f(e)), Oh = (e, t, n) => pn(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Ph = (e) => {
  const t = L(() => f(e).name), n = gn(e) ? e : z(e);
  return {
    lang: t,
    locale: n,
    t: kh(e)
  };
}, Sc = Symbol("localeContextKey"), Cc = (e) => {
  const t = e || we(Sc, z());
  return Ph(L(() => t.value || Th));
}, Tc = "__epPropKey", se = (e) => e, Lh = (e) => ot(e) && !!e[Tc], jo = (e, t) => {
  if (!ot(e) || Lh(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (c) => {
      let d = !1, p = [];
      if (n && (p = Array.from(n), Zs(e, "default") && p.push(o), d || (d = p.includes(c))), s && (d || (d = s(c))), !d && p.length > 0) {
        const m = [...new Set(p)].map((g) => JSON.stringify(g)).join(", ");
        kd(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [Tc]: !0
  };
  return Zs(e, "default") && (l.default = o), l;
}, ke = (e) => vo(Object.entries(e).map(([t, n]) => [
  t,
  jo(n, t)
])), kc = ["", "default", "small", "large"], us = jo({
  type: String,
  values: kc,
  required: !1
}), Oc = Symbol("size"), Ih = () => {
  const e = we(Oc, {});
  return L(() => f(e.size) || "");
}, Pc = Symbol("emptyValuesContextKey"), Ah = ["", void 0, null], Rh = void 0, Lc = ke({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => We(e) ? !e() : !e
  }
}), $h = (e, t) => {
  const n = tt() ? we(Pc, z({})) : z({}), r = L(() => e.emptyValues || n.value.emptyValues || Ah), o = L(() => We(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : We(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Rh), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Mi = (e) => Object.keys(e), bo = z();
function Ic(e, t = void 0) {
  return tt() ? we(ec, bo) : bo;
}
function Ac(e, t) {
  const n = Ic(), r = xe(e, L(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || oo;
  })), o = Cc(L(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = Ec(L(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || _c;
  })), s = L(() => {
    var i;
    return f(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return Rc(L(() => f(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const Rc = (e, t, n = !1) => {
  var r;
  const o = !!tt(), a = o ? Ic() : void 0, s = (r = void 0) != null ? r : o ? zt : void 0;
  if (!s)
    return;
  const i = L(() => {
    const l = f(e);
    return a?.value ? Nh(a.value, l) : l;
  });
  return s(ec, i), s(Sc, L(() => i.value.locale)), s(tc, L(() => i.value.namespace)), s(wc, L(() => i.value.zIndex)), s(Oc, {
    size: L(() => i.value.size || "")
  }), s(Pc, L(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !bo.value) && (bo.value = i.value), i;
}, Nh = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Mi(e), ...Mi(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, Gt = "update:modelValue", _o = "change", xi = "input";
var Pe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function Lr(e, t = "px") {
  if (!e)
    return "";
  if (je(e) || Jg(e))
    return `${e}${t}`;
  if (at(e))
    return e;
}
function Mh(e, t) {
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
  const o = t.offsetTop + n.reduce((l, c) => l + c.offsetTop, 0), a = o + t.offsetHeight, s = e.scrollTop, i = s + e.clientHeight;
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
}, $c = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), ds = (e) => (e.install = kr, e), xh = ke({
  size: {
    type: se([Number, String])
  },
  color: {
    type: String
  }
}), Fh = q({
  name: "ElIcon",
  inheritAttrs: !1
}), Dh = /* @__PURE__ */ q({
  ...Fh,
  props: xh,
  setup(e) {
    const t = e, n = xe("icon"), r = L(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Tn(o) ? void 0 : Lr(o),
        "--color": a
      };
    });
    return (o, a) => (A(), B("i", hn({
      class: f(n).b(),
      style: f(r)
    }, o.$attrs), [
      ce(o.$slots, "default")
    ], 16));
  }
});
var zh = /* @__PURE__ */ Pe(Dh, [["__file", "icon.vue"]]);
const dt = Pt(zh);
/*! Element Plus Icons Vue v2.3.1 */
var Bh = /* @__PURE__ */ q({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Uh = Bh, Wh = /* @__PURE__ */ q({
  name: "Check",
  __name: "check",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), jh = Wh, Vh = /* @__PURE__ */ q({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      I("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Nc = Vh, Hh = /* @__PURE__ */ q({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Kh = Hh, Gh = /* @__PURE__ */ q({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      I("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Vo = Gh, Yh = /* @__PURE__ */ q({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Ir = Yh, Zh = /* @__PURE__ */ q({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      I("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), qh = Zh, Xh = /* @__PURE__ */ q({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Jh = Xh, Qh = /* @__PURE__ */ q({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), ev = Qh, tv = /* @__PURE__ */ q({
  name: "PictureFilled",
  __name: "picture-filled",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
      })
    ]));
  }
}), nv = tv, rv = /* @__PURE__ */ q({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ov = rv, av = /* @__PURE__ */ q({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), sv = av, iv = /* @__PURE__ */ q({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (A(), B("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      I("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Mc = iv;
const Kn = se([
  String,
  Object,
  Function
]), lv = {
  Close: Ir
}, cv = {
  Close: Ir
}, wo = {
  success: ov,
  warning: Mc,
  error: Kh,
  info: Jh
}, xc = {
  validating: ev,
  success: Nc,
  error: Vo
}, uv = () => De && /firefox/i.test(window.navigator.userAgent);
let rt;
const dv = {
  height: "0",
  visibility: "hidden",
  overflow: uv() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, fv = [
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
function pv(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: fv.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function Fi(e, t = 1, n) {
  var r;
  rt || (rt = document.createElement("textarea"), document.body.appendChild(rt));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = pv(e);
  i.forEach(([p, m]) => rt?.style.setProperty(p, m)), Object.entries(dv).forEach(([p, m]) => rt?.style.setProperty(p, m, "important")), rt.value = e.value || e.placeholder || "";
  let l = rt.scrollHeight;
  const c = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), rt.value = "";
  const d = rt.scrollHeight - o;
  if (je(t)) {
    let p = d * t;
    s === "border-box" && (p = p + o + a), l = Math.max(p, l), c.minHeight = `${p}px`;
  }
  if (je(n)) {
    let p = d * n;
    s === "border-box" && (p = p + o + a), l = Math.min(p, l);
  }
  return c.height = `${l}px`, (r = rt.parentNode) == null || r.removeChild(rt), rt = void 0, c;
}
const Fc = (e) => e, mv = ke({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Dr = (e) => Xg(mv, e), gv = ke({
  id: {
    type: String,
    default: void 0
  },
  size: us,
  disabled: Boolean,
  modelValue: {
    type: se([
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
    type: se([Boolean, Object]),
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
    type: Kn
  },
  prefixIcon: {
    type: Kn
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
    type: se([Object, Array, String]),
    default: () => Fc({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Dr(["ariaLabel"])
}), hv = {
  [Gt]: (e) => at(e),
  input: (e) => at(e),
  change: (e) => at(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, vv = ["class", "style"], yv = /^on[A-Z]/, bv = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = L(() => (n?.value || []).concat(vv)), o = tt();
  return o ? L(() => {
    var a;
    return vo(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && yv.test(s))));
  }) : L(() => ({}));
}, fs = Symbol("formContextKey"), Eo = Symbol("formItemContextKey"), Di = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, _v = Symbol("elIdInjection"), Dc = () => tt() ? we(_v, Di) : Di, Ho = (e) => {
  const t = Dc(), n = ts();
  return sh(() => f(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, zc = () => {
  const e = we(fs, void 0), t = we(Eo, void 0);
  return {
    form: e,
    formItem: t
  };
}, Bc = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = z(!1)), r || (r = z(!1));
  const o = z();
  let a;
  const s = L(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return Fe(() => {
    a = ue([Nt(e, "id"), n], ([i, l]) => {
      const c = i ?? (l ? void 0 : Ho().value);
      c !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && c && t.addInputId(c)), o.value = c);
    }, { immediate: !0 });
  }), Qa(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, Uc = (e) => {
  const t = tt();
  return L(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, ps = (e, t = {}) => {
  const n = z(void 0), r = t.prop ? n : Uc("size"), o = t.global ? n : Ih(), a = t.form ? { size: void 0 } : we(fs, void 0), s = t.formItem ? { size: void 0 } : we(Eo, void 0);
  return L(() => r.value || f(e) || s?.size || a?.size || o.value || "");
}, wv = (e) => {
  const t = Uc("disabled"), n = we(fs, void 0);
  return L(() => t.value || f(e) || n?.disabled || !1);
};
function Wc(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = tt(), { emit: s } = a, i = mn(), l = z(!1), c = (m) => {
    We(t) && t(m) || l.value || (l.value = !0, s("focus", m), n?.());
  }, d = (m) => {
    var g;
    We(r) && r(m) || m.relatedTarget && ((g = i.value) != null && g.contains(m.relatedTarget)) || (l.value = !1, s("blur", m), o?.());
  }, p = () => {
    var m, g;
    (m = i.value) != null && m.contains(document.activeElement) && i.value !== document.activeElement || (g = e.value) == null || g.focus();
  };
  return ue(i, (m) => {
    m && m.setAttribute("tabindex", "-1");
  }), Tt(i, "focus", c, !0), Tt(i, "blur", d, !0), Tt(i, "click", p, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: c,
    handleBlur: d
  };
}
const Ev = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function jc({
  afterComposition: e,
  emit: t
}) {
  const n = z(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const c = (l = i.target) == null ? void 0 : l.value, d = c[c.length - 1] || "";
    n.value = !Ev(d);
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
function Sv(e) {
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
      const c = a[i - 1], d = o.indexOf(c, i - 1);
      d !== -1 && (l = d + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, r];
}
const Cv = "ElInput", Tv = q({
  name: Cv,
  inheritAttrs: !1
}), kv = /* @__PURE__ */ q({
  ...Tv,
  props: gv,
  emits: hv,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = Od(), a = bv(), s = Pd(), i = L(() => [
      r.type === "textarea" ? v.b() : h.b(),
      h.m(m.value),
      h.is("disabled", g.value),
      h.is("exceed", Xe.value),
      {
        [h.b("group")]: s.prepend || s.append,
        [h.m("prefix")]: s.prefix || r.prefixIcon,
        [h.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [h.bm("suffix", "password-clear")]: ye.value && me.value,
        [h.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = L(() => [
      h.e("wrapper"),
      h.is("focus", D.value)
    ]), { form: c, formItem: d } = zc(), { inputId: p } = Bc(r, {
      formItemContext: d
    }), m = ps(), g = wv(), h = xe("input"), v = xe("textarea"), S = mn(), u = mn(), E = z(!1), y = z(!1), w = z(), k = mn(r.inputStyle), O = L(() => S.value || u.value), { wrapperRef: C, isFocused: D, handleFocus: x, handleBlur: Z } = Wc(O, {
      beforeFocus() {
        return g.value;
      },
      afterBlur() {
        var b;
        r.validateEvent && ((b = d?.validate) == null || b.call(d, "blur").catch(($) => void 0));
      }
    }), oe = L(() => {
      var b;
      return (b = c?.statusIcon) != null ? b : !1;
    }), P = L(() => d?.validateState || ""), V = L(() => P.value && xc[P.value]), re = L(() => y.value ? sv : qh), de = L(() => [
      o.style
    ]), ae = L(() => [
      r.inputStyle,
      k.value,
      { resize: r.resize }
    ]), M = L(() => Uo(r.modelValue) ? "" : String(r.modelValue)), ye = L(() => r.clearable && !g.value && !r.readonly && !!M.value && (D.value || E.value)), me = L(() => r.showPassword && !g.value && !!M.value && (!!M.value || D.value)), Le = L(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !g.value && !r.readonly && !r.showPassword), He = L(() => M.value.length), Xe = L(() => !!Le.value && He.value > Number(r.maxlength)), nt = L(() => !!s.suffix || !!r.suffixIcon || ye.value || r.showPassword || Le.value || !!P.value && oe.value), [$e, ze] = Sv(S);
    $t(u, (b) => {
      if (te(), !Le.value || r.resize !== "both")
        return;
      const $ = b[0], { width: fe } = $.contentRect;
      w.value = {
        right: `calc(100% - ${fe + 15 + 6}px)`
      };
    });
    const U = () => {
      const { type: b, autosize: $ } = r;
      if (!(!De || b !== "textarea" || !u.value))
        if ($) {
          const fe = ot($) ? $.minRows : void 0, be = ot($) ? $.maxRows : void 0, Je = Fi(u.value, fe, be);
          k.value = {
            overflowY: "hidden",
            ...Je
          }, Ae(() => {
            u.value.offsetHeight, k.value = Je;
          });
        } else
          k.value = {
            minHeight: Fi(u.value).minHeight
          };
    }, te = ((b) => {
      let $ = !1;
      return () => {
        var fe;
        if ($ || !r.autosize)
          return;
        ((fe = u.value) == null ? void 0 : fe.offsetParent) === null || (b(), $ = !0);
      };
    })(U), Ce = () => {
      const b = O.value, $ = r.formatter ? r.formatter(M.value) : M.value;
      !b || b.value === $ || (b.value = $);
    }, Te = async (b) => {
      $e();
      let { value: $ } = b.target;
      if (r.formatter && r.parser && ($ = r.parser($)), !Ge.value) {
        if ($ === M.value) {
          Ce();
          return;
        }
        n(Gt, $), n(xi, $), await Ae(), Ce(), ze();
      }
    }, Ee = (b) => {
      let { value: $ } = b.target;
      r.formatter && r.parser && ($ = r.parser($)), n(_o, $);
    }, {
      isComposing: Ge,
      handleCompositionStart: le,
      handleCompositionUpdate: Be,
      handleCompositionEnd: lt
    } = jc({ emit: n, afterComposition: Te }), pt = () => {
      $e(), y.value = !y.value, setTimeout(ze);
    }, Lt = () => {
      var b;
      return (b = O.value) == null ? void 0 : b.focus();
    }, _ = () => {
      var b;
      return (b = O.value) == null ? void 0 : b.blur();
    }, T = (b) => {
      E.value = !1, n("mouseleave", b);
    }, N = (b) => {
      E.value = !0, n("mouseenter", b);
    }, Y = (b) => {
      n("keydown", b);
    }, ge = () => {
      var b;
      (b = O.value) == null || b.select();
    }, ie = () => {
      n(Gt, ""), n(_o, ""), n("clear"), n(xi, "");
    };
    return ue(() => r.modelValue, () => {
      var b;
      Ae(() => U()), r.validateEvent && ((b = d?.validate) == null || b.call(d, "change").catch(($) => void 0));
    }), ue(M, () => Ce()), ue(() => r.type, async () => {
      await Ae(), Ce(), U();
    }), Fe(() => {
      !r.formatter && r.parser, Ce(), Ae(U);
    }), t({
      input: S,
      textarea: u,
      ref: O,
      textareaStyle: ae,
      autosize: Nt(r, "autosize"),
      isComposing: Ge,
      focus: Lt,
      blur: _,
      select: ge,
      clear: ie,
      resizeTextarea: U
    }), (b, $) => (A(), B("div", {
      class: W([
        f(i),
        {
          [f(h).bm("group", "append")]: b.$slots.append,
          [f(h).bm("group", "prepend")]: b.$slots.prepend
        }
      ]),
      style: Re(f(de)),
      onMouseenter: N,
      onMouseleave: T
    }, [
      G(" input "),
      b.type !== "textarea" ? (A(), B(Ve, { key: 0 }, [
        G(" prepend slot "),
        b.$slots.prepend ? (A(), B("div", {
          key: 0,
          class: W(f(h).be("group", "prepend"))
        }, [
          ce(b.$slots, "prepend")
        ], 2)) : G("v-if", !0),
        I("div", {
          ref_key: "wrapperRef",
          ref: C,
          class: W(f(l))
        }, [
          G(" prefix slot "),
          b.$slots.prefix || b.prefixIcon ? (A(), B("span", {
            key: 0,
            class: W(f(h).e("prefix"))
          }, [
            I("span", {
              class: W(f(h).e("prefix-inner"))
            }, [
              ce(b.$slots, "prefix"),
              b.prefixIcon ? (A(), ne(f(dt), {
                key: 0,
                class: W(f(h).e("icon"))
              }, {
                default: ee(() => [
                  (A(), ne(gt(b.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0)
            ], 2)
          ], 2)) : G("v-if", !0),
          I("input", hn({
            id: f(p),
            ref_key: "input",
            ref: S,
            class: f(h).e("inner")
          }, f(a), {
            minlength: b.minlength,
            maxlength: b.maxlength,
            type: b.showPassword ? y.value ? "text" : "password" : b.type,
            disabled: f(g),
            readonly: b.readonly,
            autocomplete: b.autocomplete,
            tabindex: b.tabindex,
            "aria-label": b.ariaLabel,
            placeholder: b.placeholder,
            style: b.inputStyle,
            form: b.form,
            autofocus: b.autofocus,
            role: b.containerRole,
            onCompositionstart: f(le),
            onCompositionupdate: f(Be),
            onCompositionend: f(lt),
            onInput: Te,
            onChange: Ee,
            onKeydown: Y
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          G(" suffix slot "),
          f(nt) ? (A(), B("span", {
            key: 1,
            class: W(f(h).e("suffix"))
          }, [
            I("span", {
              class: W(f(h).e("suffix-inner"))
            }, [
              !f(ye) || !f(me) || !f(Le) ? (A(), B(Ve, { key: 0 }, [
                ce(b.$slots, "suffix"),
                b.suffixIcon ? (A(), ne(f(dt), {
                  key: 0,
                  class: W(f(h).e("icon"))
                }, {
                  default: ee(() => [
                    (A(), ne(gt(b.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : G("v-if", !0)
              ], 64)) : G("v-if", !0),
              f(ye) ? (A(), ne(f(dt), {
                key: 1,
                class: W([f(h).e("icon"), f(h).e("clear")]),
                onMousedown: Ze(f(kr), ["prevent"]),
                onClick: ie
              }, {
                default: ee(() => [
                  j(f(Vo))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : G("v-if", !0),
              f(me) ? (A(), ne(f(dt), {
                key: 2,
                class: W([f(h).e("icon"), f(h).e("password")]),
                onClick: pt
              }, {
                default: ee(() => [
                  (A(), ne(gt(f(re))))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0),
              f(Le) ? (A(), B("span", {
                key: 3,
                class: W(f(h).e("count"))
              }, [
                I("span", {
                  class: W(f(h).e("count-inner"))
                }, X(f(He)) + " / " + X(b.maxlength), 3)
              ], 2)) : G("v-if", !0),
              f(P) && f(V) && f(oe) ? (A(), ne(f(dt), {
                key: 4,
                class: W([
                  f(h).e("icon"),
                  f(h).e("validateIcon"),
                  f(h).is("loading", f(P) === "validating")
                ])
              }, {
                default: ee(() => [
                  (A(), ne(gt(f(V))))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0)
            ], 2)
          ], 2)) : G("v-if", !0)
        ], 2),
        G(" append slot "),
        b.$slots.append ? (A(), B("div", {
          key: 1,
          class: W(f(h).be("group", "append"))
        }, [
          ce(b.$slots, "append")
        ], 2)) : G("v-if", !0)
      ], 64)) : (A(), B(Ve, { key: 1 }, [
        G(" textarea "),
        I("textarea", hn({
          id: f(p),
          ref_key: "textarea",
          ref: u,
          class: [f(v).e("inner"), f(h).is("focus", f(D))]
        }, f(a), {
          minlength: b.minlength,
          maxlength: b.maxlength,
          tabindex: b.tabindex,
          disabled: f(g),
          readonly: b.readonly,
          autocomplete: b.autocomplete,
          style: f(ae),
          "aria-label": b.ariaLabel,
          placeholder: b.placeholder,
          form: b.form,
          autofocus: b.autofocus,
          rows: b.rows,
          role: b.containerRole,
          onCompositionstart: f(le),
          onCompositionupdate: f(Be),
          onCompositionend: f(lt),
          onInput: Te,
          onFocus: f(x),
          onBlur: f(Z),
          onChange: Ee,
          onKeydown: Y
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        f(Le) ? (A(), B("span", {
          key: 0,
          style: Re(w.value),
          class: W(f(h).e("count"))
        }, X(f(He)) + " / " + X(b.maxlength), 7)) : G("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Ov = /* @__PURE__ */ Pe(kv, [["__file", "input.vue"]]);
const Vc = Pt(Ov), Nn = 4, Pv = {
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
}, Lv = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), ms = Symbol("scrollbarContextKey"), Iv = ke({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Av = "Thumb", Rv = /* @__PURE__ */ q({
  __name: "thumb",
  props: Iv,
  setup(e) {
    const t = e, n = we(ms), r = xe("scrollbar");
    n || Ch(Av, "can not inject scrollbar context");
    const o = z(), a = z(), s = z({}), i = z(!1);
    let l = !1, c = !1, d = De ? document.onselectstart : null;
    const p = L(() => Pv[t.vertical ? "vertical" : "horizontal"]), m = L(() => Lv({
      size: t.size,
      move: t.move,
      bar: p.value
    })), g = L(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), h = (O) => {
      var C;
      if (O.stopPropagation(), O.ctrlKey || [1, 2].includes(O.button))
        return;
      (C = window.getSelection()) == null || C.removeAllRanges(), S(O);
      const D = O.currentTarget;
      D && (s.value[p.value.axis] = D[p.value.offset] - (O[p.value.client] - D.getBoundingClientRect()[p.value.direction]));
    }, v = (O) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const C = Math.abs(O.target.getBoundingClientRect()[p.value.direction] - O[p.value.client]), D = a.value[p.value.offset] / 2, x = (C - D) * 100 * g.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = x * n.wrapElement[p.value.scrollSize] / 100;
    }, S = (O) => {
      O.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", u), document.addEventListener("mouseup", E), d = document.onselectstart, document.onselectstart = () => !1;
    }, u = (O) => {
      if (!o.value || !a.value || l === !1)
        return;
      const C = s.value[p.value.axis];
      if (!C)
        return;
      const D = (o.value.getBoundingClientRect()[p.value.direction] - O[p.value.client]) * -1, x = a.value[p.value.offset] - C, Z = (D - x) * 100 * g.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = Z * n.wrapElement[p.value.scrollSize] / 100;
    }, E = () => {
      l = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", u), document.removeEventListener("mouseup", E), k(), c && (i.value = !1);
    }, y = () => {
      c = !1, i.value = !!t.size;
    }, w = () => {
      c = !0, i.value = l;
    };
    Wt(() => {
      k(), document.removeEventListener("mouseup", E);
    });
    const k = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Tt(Nt(n, "scrollbarElement"), "mousemove", y), Tt(Nt(n, "scrollbarElement"), "mouseleave", w), (O, C) => (A(), ne(nr, {
      name: f(r).b("fade"),
      persisted: ""
    }, {
      default: ee(() => [
        ht(I("div", {
          ref_key: "instance",
          ref: o,
          class: W([f(r).e("bar"), f(r).is(f(p).key)]),
          onMousedown: v
        }, [
          I("div", {
            ref_key: "thumb",
            ref: a,
            class: W(f(r).e("thumb")),
            style: Re(f(m)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [tn, O.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var zi = /* @__PURE__ */ Pe(Rv, [["__file", "thumb.vue"]]);
const $v = ke({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Nv = /* @__PURE__ */ q({
  __name: "bar",
  props: $v,
  setup(e, { expose: t }) {
    const n = e, r = we(ms), o = z(0), a = z(0), s = z(""), i = z(""), l = z(1), c = z(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const g = m.offsetHeight - Nn, h = m.offsetWidth - Nn;
          a.value = m.scrollTop * 100 / g * l.value, o.value = m.scrollLeft * 100 / h * c.value;
        }
      },
      update: () => {
        const m = r?.wrapElement;
        if (!m)
          return;
        const g = m.offsetHeight - Nn, h = m.offsetWidth - Nn, v = g ** 2 / m.scrollHeight, S = h ** 2 / m.scrollWidth, u = Math.max(v, n.minSize), E = Math.max(S, n.minSize);
        l.value = v / (g - v) / (u / (g - u)), c.value = S / (h - S) / (E / (h - E)), i.value = u + Nn < g ? `${u}px` : "", s.value = E + Nn < h ? `${E}px` : "";
      }
    }), (m, g) => (A(), B(Ve, null, [
      j(zi, {
        move: o.value,
        ratio: c.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      j(zi, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Mv = /* @__PURE__ */ Pe(Nv, [["__file", "bar.vue"]]);
const xv = ke({
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
    type: se([String, Object, Array]),
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
  ...Dr(["ariaLabel", "ariaOrientation"])
}), Fv = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(je)
}, Dv = "ElScrollbar", zv = q({
  name: Dv
}), Bv = /* @__PURE__ */ q({
  ...zv,
  props: xv,
  emits: Fv,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = xe("scrollbar");
    let a, s, i = 0, l = 0;
    const c = z(), d = z(), p = z(), m = z(), g = L(() => {
      const k = {};
      return r.height && (k.height = Lr(r.height)), r.maxHeight && (k.maxHeight = Lr(r.maxHeight)), [r.wrapStyle, k];
    }), h = L(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), v = L(() => [o.e("view"), r.viewClass]), S = () => {
      var k;
      d.value && ((k = m.value) == null || k.handleScroll(d.value), i = d.value.scrollTop, l = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function u(k, O) {
      ot(k) ? d.value.scrollTo(k) : je(k) && je(O) && d.value.scrollTo(k, O);
    }
    const E = (k) => {
      je(k) && (d.value.scrollTop = k);
    }, y = (k) => {
      je(k) && (d.value.scrollLeft = k);
    }, w = () => {
      var k;
      (k = m.value) == null || k.update();
    };
    return ue(() => r.noresize, (k) => {
      k ? (a?.(), s?.()) : ({ stop: a } = $t(p, w), s = Tt("resize", w));
    }, { immediate: !0 }), ue(() => [r.maxHeight, r.height], () => {
      r.native || Ae(() => {
        var k;
        w(), d.value && ((k = m.value) == null || k.handleScroll(d.value));
      });
    }), zt(ms, On({
      scrollbarElement: c,
      wrapElement: d
    })), Ld(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = l);
    }), Fe(() => {
      r.native || Ae(() => {
        w();
      });
    }), Id(() => w()), t({
      wrapRef: d,
      update: w,
      scrollTo: u,
      setScrollTop: E,
      setScrollLeft: y,
      handleScroll: S
    }), (k, O) => (A(), B("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: W(f(o).b())
    }, [
      I("div", {
        ref_key: "wrapRef",
        ref: d,
        class: W(f(h)),
        style: Re(f(g)),
        tabindex: k.tabindex,
        onScroll: S
      }, [
        (A(), ne(gt(k.tag), {
          id: k.id,
          ref_key: "resizeRef",
          ref: p,
          class: W(f(v)),
          style: Re(k.viewStyle),
          role: k.role,
          "aria-label": k.ariaLabel,
          "aria-orientation": k.ariaOrientation
        }, {
          default: ee(() => [
            ce(k.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      k.native ? G("v-if", !0) : (A(), ne(Mv, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: k.always,
        "min-size": k.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Uv = /* @__PURE__ */ Pe(Bv, [["__file", "scrollbar.vue"]]);
const Wv = Pt(Uv), gs = Symbol("popper"), Hc = Symbol("popperContent"), jv = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Kc = ke({
  role: {
    type: String,
    values: jv,
    default: "tooltip"
  }
}), Vv = q({
  name: "ElPopper",
  inheritAttrs: !1
}), Hv = /* @__PURE__ */ q({
  ...Vv,
  props: Kc,
  setup(e, { expose: t }) {
    const n = e, r = z(), o = z(), a = z(), s = z(), i = L(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), zt(gs, l), (c, d) => ce(c.$slots, "default");
  }
});
var Kv = /* @__PURE__ */ Pe(Hv, [["__file", "popper.vue"]]);
const Gc = ke({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Gv = q({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Yv = /* @__PURE__ */ q({
  ...Gv,
  props: Gc,
  setup(e, { expose: t }) {
    const n = e, r = xe("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = we(Hc, void 0);
    return ue(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Wt(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (A(), B("span", {
      ref_key: "arrowRef",
      ref: a,
      class: W(f(r).e("arrow")),
      style: Re(f(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Zv = /* @__PURE__ */ Pe(Yv, [["__file", "arrow.vue"]]);
const Yc = ke({
  virtualRef: {
    type: se(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: se(Function)
  },
  onMouseleave: {
    type: se(Function)
  },
  onClick: {
    type: se(Function)
  },
  onKeydown: {
    type: se(Function)
  },
  onFocus: {
    type: se(Function)
  },
  onBlur: {
    type: se(Function)
  },
  onContextmenu: {
    type: se(Function)
  },
  id: String,
  open: Boolean
}), Zc = Symbol("elForwardRef"), qv = (e) => {
  zt(Zc, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Xv = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Oa = (e) => {
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
}, Jv = "ElOnlyChild", Qv = q({
  name: Jv,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = we(Zc), a = Xv((r = o?.setForwardRef) != null ? r : kr);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = qc(i);
      return l ? ht(Ad(l, n), [[a]]) : null;
    };
  }
});
function qc(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (ot(n))
      switch (n.type) {
        case Rd:
          continue;
        case Xl:
        case "svg":
          return Bi(n);
        case Ve:
          return qc(n.children);
        default:
          return n;
      }
    return Bi(n);
  }
  return null;
}
function Bi(e) {
  const t = xe("only-child");
  return j("span", {
    class: t.e("content")
  }, [e]);
}
const e0 = q({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), t0 = /* @__PURE__ */ q({
  ...e0,
  props: Yc,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = we(gs, void 0);
    qv(o);
    const a = L(() => i.value ? n.id : void 0), s = L(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = L(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = L(() => i.value ? `${n.open}` : void 0);
    let c;
    const d = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return Fe(() => {
      ue(() => n.virtualRef, (p) => {
        p && (o.value = Yt(p));
      }, {
        immediate: !0
      }), ue(o, (p, m) => {
        c?.(), c = void 0, Ct(p) && (d.forEach((g) => {
          var h;
          const v = n[g];
          v && (p.addEventListener(g.slice(2).toLowerCase(), v), (h = m?.removeEventListener) == null || h.call(m, g.slice(2).toLowerCase(), v));
        }), Oa(p) && (c = ue([a, s, i, l], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, v) => {
            Uo(g[v]) ? p.removeAttribute(h) : p.setAttribute(h, g[v]);
          });
        }, { immediate: !0 }))), Ct(m) && Oa(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((g) => m.removeAttribute(g));
      }, {
        immediate: !0
      });
    }), Wt(() => {
      if (c?.(), c = void 0, o.value && Ct(o.value)) {
        const p = o.value;
        d.forEach((m) => {
          const g = n[m];
          g && p.removeEventListener(m.slice(2).toLowerCase(), g);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, m) => p.virtualTriggering ? G("v-if", !0) : (A(), ne(f(Qv), hn({ key: 0 }, p.$attrs, {
      "aria-controls": f(a),
      "aria-describedby": f(s),
      "aria-expanded": f(l),
      "aria-haspopup": f(i)
    }), {
      default: ee(() => [
        ce(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var n0 = /* @__PURE__ */ Pe(t0, [["__file", "trigger.vue"]]);
const sa = "focus-trap.focus-after-trapped", ia = "focus-trap.focus-after-released", r0 = "focus-trap.focusout-prevented", Ui = {
  cancelable: !0,
  bubbles: !1
}, o0 = {
  cancelable: !0,
  bubbles: !1
}, Wi = "focusAfterTrapped", ji = "focusAfterReleased", a0 = Symbol("elFocusTrap"), hs = z(), Ko = z(0), vs = z(0);
let Kr = 0;
const Xc = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Vi = (e, t) => {
  for (const n of e)
    if (!s0(n, t))
      return n;
}, s0 = (e, t) => {
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
}, i0 = (e) => {
  const t = Xc(e), n = Vi(t, e), r = Vi(t.reverse(), e);
  return [n, r];
}, l0 = (e) => e instanceof HTMLInputElement && "select" in e, Ht = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    Ct(e) && !Oa(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), vs.value = window.performance.now(), e !== n && l0(e) && t && e.select(), Ct(e) && r && e.removeAttribute("tabindex");
  }
};
function Hi(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const c0 = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = Hi(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = Hi(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, u0 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Ht(r, t), document.activeElement !== n)
      return;
}, Ki = c0(), d0 = () => Ko.value > vs.value, Gr = () => {
  hs.value = "pointer", Ko.value = window.performance.now();
}, Gi = () => {
  hs.value = "keyboard", Ko.value = window.performance.now();
}, f0 = () => (Fe(() => {
  Kr === 0 && (document.addEventListener("mousedown", Gr), document.addEventListener("touchstart", Gr), document.addEventListener("keydown", Gi)), Kr++;
}), Wt(() => {
  Kr--, Kr <= 0 && (document.removeEventListener("mousedown", Gr), document.removeEventListener("touchstart", Gr), document.removeEventListener("keydown", Gi));
}), {
  focusReason: hs,
  lastUserFocusTimestamp: Ko,
  lastAutomatedFocusTimestamp: vs
}), Yr = (e) => new CustomEvent(r0, {
  ...o0,
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
const Yi = (e) => {
  e.code === xt.esc && Dn.forEach((t) => t(e));
}, p0 = (e) => {
  Fe(() => {
    Dn.length === 0 && document.addEventListener("keydown", Yi), De && Dn.push(e);
  }), Wt(() => {
    Dn = Dn.filter((t) => t !== e), Dn.length === 0 && De && document.removeEventListener("keydown", Yi);
  });
}, m0 = q({
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
    Wi,
    ji,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = z();
    let r, o;
    const { focusReason: a } = f0();
    p0((h) => {
      e.trapped && !s.paused && t("release-requested", h);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (h) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: v, altKey: S, ctrlKey: u, metaKey: E, currentTarget: y, shiftKey: w } = h, { loop: k } = e, O = v === xt.tab && !S && !u && !E, C = document.activeElement;
      if (O && C) {
        const D = y, [x, Z] = i0(D);
        if (x && Z) {
          if (!w && C === Z) {
            const P = Yr({
              focusReason: a.value
            });
            t("focusout-prevented", P), P.defaultPrevented || (h.preventDefault(), k && Ht(x, !0));
          } else if (w && [x, D].includes(C)) {
            const P = Yr({
              focusReason: a.value
            });
            t("focusout-prevented", P), P.defaultPrevented || (h.preventDefault(), k && Ht(Z, !0));
          }
        } else if (C === D) {
          const P = Yr({
            focusReason: a.value
          });
          t("focusout-prevented", P), P.defaultPrevented || h.preventDefault();
        }
      }
    };
    zt(a0, {
      focusTrapRef: n,
      onKeydown: i
    }), ue(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), ue([n], ([h], [v]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", d), h.addEventListener("focusout", p)), v && (v.removeEventListener("keydown", i), v.removeEventListener("focusin", d), v.removeEventListener("focusout", p));
    });
    const l = (h) => {
      t(Wi, h);
    }, c = (h) => t(ji, h), d = (h) => {
      const v = f(n);
      if (!v)
        return;
      const S = h.target, u = h.relatedTarget, E = S && v.contains(S);
      e.trapped || u && v.contains(u) || (r = u), E && t("focusin", h), !s.paused && e.trapped && (E ? o = S : Ht(o, !0));
    }, p = (h) => {
      const v = f(n);
      if (!(s.paused || !v))
        if (e.trapped) {
          const S = h.relatedTarget;
          !Uo(S) && !v.contains(S) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const u = Yr({
                focusReason: a.value
              });
              t("focusout-prevented", u), u.defaultPrevented || Ht(o, !0);
            }
          }, 0);
        } else {
          const S = h.target;
          S && v.contains(S) || t("focusout", h);
        }
    };
    async function m() {
      await Ae();
      const h = f(n);
      if (h) {
        Ki.push(s);
        const v = h.contains(document.activeElement) ? r : document.activeElement;
        if (r = v, !h.contains(v)) {
          const u = new Event(sa, Ui);
          h.addEventListener(sa, l), h.dispatchEvent(u), u.defaultPrevented || Ae(() => {
            let E = e.focusStartEl;
            at(E) || (Ht(E), document.activeElement !== E && (E = "first")), E === "first" && u0(Xc(h), !0), (document.activeElement === v || E === "container") && Ht(h);
          });
        }
      }
    }
    function g() {
      const h = f(n);
      if (h) {
        h.removeEventListener(sa, l);
        const v = new CustomEvent(ia, {
          ...Ui,
          detail: {
            focusReason: a.value
          }
        });
        h.addEventListener(ia, c), h.dispatchEvent(v), !v.defaultPrevented && (a.value == "keyboard" || !d0() || h.contains(document.activeElement)) && Ht(r ?? document.body), h.removeEventListener(ia, c), Ki.remove(s);
      }
    }
    return Fe(() => {
      e.trapped && m(), ue(() => e.trapped, (h) => {
        h ? m() : g();
      });
    }), Wt(() => {
      e.trapped && g(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function g0(e, t, n, r, o, a) {
  return ce(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var h0 = /* @__PURE__ */ Pe(m0, [["render", g0], ["__file", "focus-trap.vue"]]), st = "top", yt = "bottom", bt = "right", it = "left", ys = "auto", zr = [st, yt, bt, it], Gn = "start", Ar = "end", v0 = "clippingParents", Jc = "viewport", cr = "popper", y0 = "reference", Zi = zr.reduce(function(e, t) {
  return e.concat([t + "-" + Gn, t + "-" + Ar]);
}, []), Go = [].concat(zr, [ys]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Gn, t + "-" + Ar]);
}, []), b0 = "beforeRead", _0 = "read", w0 = "afterRead", E0 = "beforeMain", S0 = "main", C0 = "afterMain", T0 = "beforeWrite", k0 = "write", O0 = "afterWrite", P0 = [b0, _0, w0, E0, S0, C0, T0, k0, O0];
function Ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ft(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ln(e) {
  var t = ft(e).Element;
  return e instanceof t || e instanceof Element;
}
function vt(e) {
  var t = ft(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function bs(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = ft(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function L0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !vt(a) || !Ut(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function I0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !vt(o) || !Ut(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Qc = { name: "applyStyles", enabled: !0, phase: "write", fn: L0, effect: I0, requires: ["computeStyles"] };
function Ft(e) {
  return e.split("-")[0];
}
var kn = Math.max, So = Math.min, Yn = Math.round;
function Pa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function eu() {
  return !/^((?!chrome|android).)*safari/i.test(Pa());
}
function Zn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && vt(e) && (o = e.offsetWidth > 0 && Yn(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Yn(r.height) / e.offsetHeight || 1);
  var s = Ln(e) ? ft(e) : window, i = s.visualViewport, l = !eu() && n, c = (r.left + (l && i ? i.offsetLeft : 0)) / o, d = (r.top + (l && i ? i.offsetTop : 0)) / a, p = r.width / o, m = r.height / a;
  return { width: p, height: m, top: d, right: c + p, bottom: d + m, left: c, x: c, y: d };
}
function _s(e) {
  var t = Zn(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function tu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && bs(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function nn(e) {
  return ft(e).getComputedStyle(e);
}
function A0(e) {
  return ["table", "td", "th"].indexOf(Ut(e)) >= 0;
}
function yn(e) {
  return ((Ln(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Yo(e) {
  return Ut(e) === "html" ? e : e.assignedSlot || e.parentNode || (bs(e) ? e.host : null) || yn(e);
}
function qi(e) {
  return !vt(e) || nn(e).position === "fixed" ? null : e.offsetParent;
}
function R0(e) {
  var t = /firefox/i.test(Pa()), n = /Trident/i.test(Pa());
  if (n && vt(e)) {
    var r = nn(e);
    if (r.position === "fixed") return null;
  }
  var o = Yo(e);
  for (bs(o) && (o = o.host); vt(o) && ["html", "body"].indexOf(Ut(o)) < 0; ) {
    var a = nn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function Br(e) {
  for (var t = ft(e), n = qi(e); n && A0(n) && nn(n).position === "static"; ) n = qi(n);
  return n && (Ut(n) === "html" || Ut(n) === "body" && nn(n).position === "static") ? t : n || R0(e) || t;
}
function ws(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function br(e, t, n) {
  return kn(e, So(t, n));
}
function $0(e, t, n) {
  var r = br(e, t, n);
  return r > n ? n : r;
}
function nu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ru(e) {
  return Object.assign({}, nu(), e);
}
function ou(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var N0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ru(typeof e != "number" ? e : ou(e, zr));
};
function M0(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Ft(n.placement), l = ws(i), c = [it, bt].indexOf(i) >= 0, d = c ? "height" : "width";
  if (!(!a || !s)) {
    var p = N0(o.padding, n), m = _s(a), g = l === "y" ? st : it, h = l === "y" ? yt : bt, v = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], S = s[l] - n.rects.reference[l], u = Br(a), E = u ? l === "y" ? u.clientHeight || 0 : u.clientWidth || 0 : 0, y = v / 2 - S / 2, w = p[g], k = E - m[d] - p[h], O = E / 2 - m[d] / 2 + y, C = br(w, O, k), D = l;
    n.modifiersData[r] = (t = {}, t[D] = C, t.centerOffset = C - O, t);
  }
}
function x0(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || tu(t.elements.popper, o) && (t.elements.arrow = o));
}
var F0 = { name: "arrow", enabled: !0, phase: "main", fn: M0, effect: x0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function qn(e) {
  return e.split("-")[1];
}
var D0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function z0(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Yn(n * o) / o || 0, y: Yn(r * o) / o || 0 };
}
function Xi(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, p = e.isFixed, m = s.x, g = m === void 0 ? 0 : m, h = s.y, v = h === void 0 ? 0 : h, S = typeof d == "function" ? d({ x: g, y: v }) : { x: g, y: v };
  g = S.x, v = S.y;
  var u = s.hasOwnProperty("x"), E = s.hasOwnProperty("y"), y = it, w = st, k = window;
  if (c) {
    var O = Br(n), C = "clientHeight", D = "clientWidth";
    if (O === ft(n) && (O = yn(n), nn(O).position !== "static" && i === "absolute" && (C = "scrollHeight", D = "scrollWidth")), O = O, o === st || (o === it || o === bt) && a === Ar) {
      w = yt;
      var x = p && O === k && k.visualViewport ? k.visualViewport.height : O[C];
      v -= x - r.height, v *= l ? 1 : -1;
    }
    if (o === it || (o === st || o === yt) && a === Ar) {
      y = bt;
      var Z = p && O === k && k.visualViewport ? k.visualViewport.width : O[D];
      g -= Z - r.width, g *= l ? 1 : -1;
    }
  }
  var oe = Object.assign({ position: i }, c && D0), P = d === !0 ? z0({ x: g, y: v }, ft(n)) : { x: g, y: v };
  if (g = P.x, v = P.y, l) {
    var V;
    return Object.assign({}, oe, (V = {}, V[w] = E ? "0" : "", V[y] = u ? "0" : "", V.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + v + "px)" : "translate3d(" + g + "px, " + v + "px, 0)", V));
  }
  return Object.assign({}, oe, (t = {}, t[w] = E ? v + "px" : "", t[y] = u ? g + "px" : "", t.transform = "", t));
}
function B0(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, c = { placement: Ft(t.placement), variation: qn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Xi(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Xi(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var au = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: B0, data: {} }, Zr = { passive: !0 };
function U0(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = ft(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, Zr);
  }), i && l.addEventListener("resize", n.update, Zr), function() {
    a && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Zr);
    }), i && l.removeEventListener("resize", n.update, Zr);
  };
}
var su = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: U0, data: {} }, W0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ao(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return W0[t];
  });
}
var j0 = { start: "end", end: "start" };
function Ji(e) {
  return e.replace(/start|end/g, function(t) {
    return j0[t];
  });
}
function Es(e) {
  var t = ft(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Ss(e) {
  return Zn(yn(e)).left + Es(e).scrollLeft;
}
function V0(e, t) {
  var n = ft(e), r = yn(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var c = eu();
    (c || !c && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + Ss(e), y: l };
}
function H0(e) {
  var t, n = yn(e), r = Es(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = kn(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = kn(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Ss(e), l = -r.scrollTop;
  return nn(o || n).direction === "rtl" && (i += kn(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function Cs(e) {
  var t = nn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function iu(e) {
  return ["html", "body", "#document"].indexOf(Ut(e)) >= 0 ? e.ownerDocument.body : vt(e) && Cs(e) ? e : iu(Yo(e));
}
function _r(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = iu(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ft(r), s = o ? [a].concat(a.visualViewport || [], Cs(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(_r(Yo(s)));
}
function La(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function K0(e, t) {
  var n = Zn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Qi(e, t, n) {
  return t === Jc ? La(V0(e, n)) : Ln(t) ? K0(t, n) : La(H0(yn(e)));
}
function G0(e) {
  var t = _r(Yo(e)), n = ["absolute", "fixed"].indexOf(nn(e).position) >= 0, r = n && vt(e) ? Br(e) : e;
  return Ln(r) ? t.filter(function(o) {
    return Ln(o) && tu(o, r) && Ut(o) !== "body";
  }) : [];
}
function Y0(e, t, n, r) {
  var o = t === "clippingParents" ? G0(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, c) {
    var d = Qi(e, c, r);
    return l.top = kn(d.top, l.top), l.right = So(d.right, l.right), l.bottom = So(d.bottom, l.bottom), l.left = kn(d.left, l.left), l;
  }, Qi(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function lu(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Ft(r) : null, a = r ? qn(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case st:
      l = { x: s, y: t.y - n.height };
      break;
    case yt:
      l = { x: s, y: t.y + t.height };
      break;
    case bt:
      l = { x: t.x + t.width, y: i };
      break;
    case it:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = o ? ws(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (a) {
      case Gn:
        l[c] = l[c] - (t[d] / 2 - n[d] / 2);
        break;
      case Ar:
        l[c] = l[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function Rr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? v0 : i, c = n.rootBoundary, d = c === void 0 ? Jc : c, p = n.elementContext, m = p === void 0 ? cr : p, g = n.altBoundary, h = g === void 0 ? !1 : g, v = n.padding, S = v === void 0 ? 0 : v, u = ru(typeof S != "number" ? S : ou(S, zr)), E = m === cr ? y0 : cr, y = e.rects.popper, w = e.elements[h ? E : m], k = Y0(Ln(w) ? w : w.contextElement || yn(e.elements.popper), l, d, s), O = Zn(e.elements.reference), C = lu({ reference: O, element: y, placement: o }), D = La(Object.assign({}, y, C)), x = m === cr ? D : O, Z = { top: k.top - x.top + u.top, bottom: x.bottom - k.bottom + u.bottom, left: k.left - x.left + u.left, right: x.right - k.right + u.right }, oe = e.modifiersData.offset;
  if (m === cr && oe) {
    var P = oe[o];
    Object.keys(Z).forEach(function(V) {
      var re = [bt, yt].indexOf(V) >= 0 ? 1 : -1, de = [st, yt].indexOf(V) >= 0 ? "y" : "x";
      Z[V] += P[de] * re;
    });
  }
  return Z;
}
function Z0(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? Go : l, d = qn(r), p = d ? i ? Zi : Zi.filter(function(h) {
    return qn(h) === d;
  }) : zr, m = p.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  m.length === 0 && (m = p);
  var g = m.reduce(function(h, v) {
    return h[v] = Rr(e, { placement: v, boundary: o, rootBoundary: a, padding: s })[Ft(v)], h;
  }, {});
  return Object.keys(g).sort(function(h, v) {
    return g[h] - g[v];
  });
}
function q0(e) {
  if (Ft(e) === ys) return [];
  var t = ao(e);
  return [Ji(e), t, Ji(t)];
}
function X0(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, c = n.padding, d = n.boundary, p = n.rootBoundary, m = n.altBoundary, g = n.flipVariations, h = g === void 0 ? !0 : g, v = n.allowedAutoPlacements, S = t.options.placement, u = Ft(S), E = u === S, y = l || (E || !h ? [ao(S)] : q0(S)), w = [S].concat(y).reduce(function($e, ze) {
      return $e.concat(Ft(ze) === ys ? Z0(t, { placement: ze, boundary: d, rootBoundary: p, padding: c, flipVariations: h, allowedAutoPlacements: v }) : ze);
    }, []), k = t.rects.reference, O = t.rects.popper, C = /* @__PURE__ */ new Map(), D = !0, x = w[0], Z = 0; Z < w.length; Z++) {
      var oe = w[Z], P = Ft(oe), V = qn(oe) === Gn, re = [st, yt].indexOf(P) >= 0, de = re ? "width" : "height", ae = Rr(t, { placement: oe, boundary: d, rootBoundary: p, altBoundary: m, padding: c }), M = re ? V ? bt : it : V ? yt : st;
      k[de] > O[de] && (M = ao(M));
      var ye = ao(M), me = [];
      if (a && me.push(ae[P] <= 0), i && me.push(ae[M] <= 0, ae[ye] <= 0), me.every(function($e) {
        return $e;
      })) {
        x = oe, D = !1;
        break;
      }
      C.set(oe, me);
    }
    if (D) for (var Le = h ? 3 : 1, He = function($e) {
      var ze = w.find(function(U) {
        var Q = C.get(U);
        if (Q) return Q.slice(0, $e).every(function(te) {
          return te;
        });
      });
      if (ze) return x = ze, "break";
    }, Xe = Le; Xe > 0; Xe--) {
      var nt = He(Xe);
      if (nt === "break") break;
    }
    t.placement !== x && (t.modifiersData[r]._skip = !0, t.placement = x, t.reset = !0);
  }
}
var J0 = { name: "flip", enabled: !0, phase: "main", fn: X0, requiresIfExists: ["offset"], data: { _skip: !1 } };
function el(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function tl(e) {
  return [st, bt, yt, it].some(function(t) {
    return e[t] >= 0;
  });
}
function Q0(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Rr(t, { elementContext: "reference" }), i = Rr(t, { altBoundary: !0 }), l = el(s, r), c = el(i, o, a), d = tl(l), p = tl(c);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": p });
}
var ey = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Q0 };
function ty(e, t, n) {
  var r = Ft(e), o = [it, st].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [it, bt].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function ny(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = Go.reduce(function(d, p) {
    return d[p] = ty(p, t.rects, a), d;
  }, {}), i = s[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
var ry = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: ny };
function oy(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = lu({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var cu = { name: "popperOffsets", enabled: !0, phase: "read", fn: oy, data: {} };
function ay(e) {
  return e === "x" ? "y" : "x";
}
function sy(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, c = n.rootBoundary, d = n.altBoundary, p = n.padding, m = n.tether, g = m === void 0 ? !0 : m, h = n.tetherOffset, v = h === void 0 ? 0 : h, S = Rr(t, { boundary: l, rootBoundary: c, padding: p, altBoundary: d }), u = Ft(t.placement), E = qn(t.placement), y = !E, w = ws(u), k = ay(w), O = t.modifiersData.popperOffsets, C = t.rects.reference, D = t.rects.popper, x = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, Z = typeof x == "number" ? { mainAxis: x, altAxis: x } : Object.assign({ mainAxis: 0, altAxis: 0 }, x), oe = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, P = { x: 0, y: 0 };
  if (O) {
    if (a) {
      var V, re = w === "y" ? st : it, de = w === "y" ? yt : bt, ae = w === "y" ? "height" : "width", M = O[w], ye = M + S[re], me = M - S[de], Le = g ? -D[ae] / 2 : 0, He = E === Gn ? C[ae] : D[ae], Xe = E === Gn ? -D[ae] : -C[ae], nt = t.elements.arrow, $e = g && nt ? _s(nt) : { width: 0, height: 0 }, ze = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : nu(), U = ze[re], Q = ze[de], te = br(0, C[ae], $e[ae]), Ce = y ? C[ae] / 2 - Le - te - U - Z.mainAxis : He - te - U - Z.mainAxis, Te = y ? -C[ae] / 2 + Le + te + Q + Z.mainAxis : Xe + te + Q + Z.mainAxis, Ee = t.elements.arrow && Br(t.elements.arrow), Ge = Ee ? w === "y" ? Ee.clientTop || 0 : Ee.clientLeft || 0 : 0, le = (V = oe?.[w]) != null ? V : 0, Be = M + Ce - le - Ge, lt = M + Te - le, pt = br(g ? So(ye, Be) : ye, M, g ? kn(me, lt) : me);
      O[w] = pt, P[w] = pt - M;
    }
    if (i) {
      var Lt, _ = w === "x" ? st : it, T = w === "x" ? yt : bt, N = O[k], Y = k === "y" ? "height" : "width", ge = N + S[_], ie = N - S[T], b = [st, it].indexOf(u) !== -1, $ = (Lt = oe?.[k]) != null ? Lt : 0, fe = b ? ge : N - C[Y] - D[Y] - $ + Z.altAxis, be = b ? N + C[Y] + D[Y] - $ - Z.altAxis : ie, Je = g && b ? $0(fe, N, be) : br(g ? fe : ge, N, g ? be : ie);
      O[k] = Je, P[k] = Je - N;
    }
    t.modifiersData[r] = P;
  }
}
var iy = { name: "preventOverflow", enabled: !0, phase: "main", fn: sy, requiresIfExists: ["offset"] };
function ly(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function cy(e) {
  return e === ft(e) || !vt(e) ? Es(e) : ly(e);
}
function uy(e) {
  var t = e.getBoundingClientRect(), n = Yn(t.width) / e.offsetWidth || 1, r = Yn(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function dy(e, t, n) {
  n === void 0 && (n = !1);
  var r = vt(t), o = vt(t) && uy(t), a = yn(t), s = Zn(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Ut(t) !== "body" || Cs(a)) && (i = cy(t)), vt(t) ? (l = Zn(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Ss(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function fy(e) {
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
function py(e) {
  var t = fy(e);
  return P0.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function my(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function gy(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var nl = { placement: "bottom", modifiers: [], strategy: "absolute" };
function rl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Ts(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? nl : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, nl, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], p = !1, m = { state: c, setOptions: function(v) {
      var S = typeof v == "function" ? v(c.options) : v;
      h(), c.options = Object.assign({}, a, c.options, S), c.scrollParents = { reference: Ln(s) ? _r(s) : s.contextElement ? _r(s.contextElement) : [], popper: _r(i) };
      var u = py(gy([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = u.filter(function(E) {
        return E.enabled;
      }), g(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var v = c.elements, S = v.reference, u = v.popper;
        if (rl(S, u)) {
          c.rects = { reference: dy(S, Br(u), c.options.strategy === "fixed"), popper: _s(u) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(D) {
            return c.modifiersData[D.name] = Object.assign({}, D.data);
          });
          for (var E = 0; E < c.orderedModifiers.length; E++) {
            if (c.reset === !0) {
              c.reset = !1, E = -1;
              continue;
            }
            var y = c.orderedModifiers[E], w = y.fn, k = y.options, O = k === void 0 ? {} : k, C = y.name;
            typeof w == "function" && (c = w({ state: c, options: O, name: C, instance: m }) || c);
          }
        }
      }
    }, update: my(function() {
      return new Promise(function(v) {
        m.forceUpdate(), v(c);
      });
    }), destroy: function() {
      h(), p = !0;
    } };
    if (!rl(s, i)) return m;
    m.setOptions(l).then(function(v) {
      !p && l.onFirstUpdate && l.onFirstUpdate(v);
    });
    function g() {
      c.orderedModifiers.forEach(function(v) {
        var S = v.name, u = v.options, E = u === void 0 ? {} : u, y = v.effect;
        if (typeof y == "function") {
          var w = y({ state: c, name: S, instance: m, options: E }), k = function() {
          };
          d.push(w || k);
        }
      });
    }
    function h() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return m;
  };
}
Ts();
var hy = [su, cu, au, Qc];
Ts({ defaultModifiers: hy });
var vy = [su, cu, au, Qc, ry, J0, iy, F0, ey], yy = Ts({ defaultModifiers: vy });
const by = ["fixed", "absolute"], _y = ke({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: se(Array),
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
    values: Go,
    default: "bottom"
  },
  popperOptions: {
    type: se(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: by,
    default: "absolute"
  }
}), uu = ke({
  ..._y,
  id: String,
  style: {
    type: se([String, Array, Object])
  },
  className: {
    type: se([String, Array, Object])
  },
  effect: {
    type: se(String),
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
    type: se([String, Array, Object])
  },
  popperStyle: {
    type: se([String, Array, Object])
  },
  referenceEl: {
    type: se(Object)
  },
  triggerTargetEl: {
    type: se(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Dr(["ariaLabel"])
}), wy = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Ey = (e, t) => {
  const n = z(!1), r = z();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var d;
      ((d = c.detail) == null ? void 0 : d.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (c) => {
      e.visible && !n.value && (c.target && (r.value = c.target), n.value = !0);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, Sy = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...Ty(e), ...t]
  };
  return ky(a, o?.modifiers), a;
}, Cy = (e) => {
  if (De)
    return Yt(e);
};
function Ty(e) {
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
function ky(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Oy = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const c = Py(l);
      Object.assign(s.value, c);
    },
    requires: ["computeStyles"]
  }, o = L(() => {
    const { onFirstUpdate: l, placement: c, strategy: d, modifiers: p } = f(n);
    return {
      onFirstUpdate: l,
      placement: c || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...p || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = mn(), s = z({
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
    const c = f(a);
    c && c.setOptions(l);
  }, {
    deep: !0
  }), ue([e, t], ([l, c]) => {
    i(), !(!l || !c) && (a.value = yy(l, c, f(o)));
  }), Wt(() => {
    i();
  }), {
    state: L(() => {
      var l;
      return { ...((l = f(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: L(() => f(s).styles),
    attributes: L(() => f(s).attributes),
    update: () => {
      var l;
      return (l = f(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = f(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: L(() => f(a))
  };
};
function Py(e) {
  const t = Object.keys(e.elements), n = vo(t.map((o) => [o, e.styles[o] || {}])), r = vo(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const Ly = 0, Iy = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = we(gs, void 0), a = z(), s = z(), i = L(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = L(() => {
    var u;
    const E = f(a), y = (u = f(s)) != null ? u : Ly;
    return {
      name: "arrow",
      enabled: !Gg(E),
      options: {
        element: E,
        padding: y
      }
    };
  }), c = L(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...Sy(e, [
      f(l),
      f(i)
    ])
  })), d = L(() => Cy(e.referenceEl) || f(r)), { attributes: p, state: m, styles: g, update: h, forceUpdate: v, instanceRef: S } = Oy(d, n, c);
  return ue(S, (u) => t.value = u), Fe(() => {
    ue(() => {
      var u;
      return (u = f(d)) == null ? void 0 : u.getBoundingClientRect();
    }, () => {
      h();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: S,
    state: m,
    styles: g,
    role: o,
    forceUpdate: v,
    update: h
  };
}, Ay = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Ec(), a = xe("popper"), s = L(() => f(t).popper), i = z(je(e.zIndex) ? e.zIndex : o()), l = L(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), c = L(() => [
    { zIndex: f(i) },
    f(n).popper,
    e.popperStyle || {}
  ]), d = L(() => r.value === "dialog" ? "false" : void 0), p = L(() => f(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: l,
    contentStyle: c,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = je(e.zIndex) ? e.zIndex : o();
    }
  };
}, Ry = q({
  name: "ElPopperContent"
}), $y = /* @__PURE__ */ q({
  ...Ry,
  props: uu,
  emits: wy,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: c,
      onReleaseRequested: d
    } = Ey(r, n), { attributes: p, arrowRef: m, contentRef: g, styles: h, instanceRef: v, role: S, update: u } = Iy(r), {
      ariaModal: E,
      arrowStyle: y,
      contentAttrs: w,
      contentClass: k,
      contentStyle: O,
      updateZIndex: C
    } = Ay(r, {
      styles: h,
      attributes: p,
      role: S
    }), D = we(Eo, void 0), x = z();
    zt(Hc, {
      arrowStyle: y,
      arrowRef: m,
      arrowOffset: x
    }), D && zt(Eo, {
      ...D,
      addInputId: kr,
      removeInputId: kr
    });
    let Z;
    const oe = (V = !0) => {
      u(), V && C();
    }, P = () => {
      oe(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return Fe(() => {
      ue(() => r.triggerTargetEl, (V, re) => {
        Z?.(), Z = void 0;
        const de = f(V || g.value), ae = f(re || g.value);
        Ct(de) && (Z = ue([S, () => r.ariaLabel, E, () => r.id], (M) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ye, me) => {
            Uo(M[me]) ? de.removeAttribute(ye) : de.setAttribute(ye, M[me]);
          });
        }, { immediate: !0 })), ae !== de && Ct(ae) && ["role", "aria-label", "aria-modal", "id"].forEach((M) => {
          ae.removeAttribute(M);
        });
      }, { immediate: !0 }), ue(() => r.visible, P, { immediate: !0 });
    }), Wt(() => {
      Z?.(), Z = void 0;
    }), t({
      popperContentRef: g,
      popperInstanceRef: v,
      updatePopper: oe,
      contentStyle: O
    }), (V, re) => (A(), B("div", hn({
      ref_key: "contentRef",
      ref: g
    }, f(w), {
      style: f(O),
      class: f(k),
      tabindex: "-1",
      onMouseenter: (de) => V.$emit("mouseenter", de),
      onMouseleave: (de) => V.$emit("mouseleave", de)
    }), [
      j(f(h0), {
        trapped: f(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": f(g),
        "focus-start-el": f(o),
        onFocusAfterTrapped: f(i),
        onFocusAfterReleased: f(s),
        onFocusin: f(l),
        onFocusoutPrevented: f(c),
        onReleaseRequested: f(d)
      }, {
        default: ee(() => [
          ce(V.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Ny = /* @__PURE__ */ Pe($y, [["__file", "content.vue"]]);
const My = Pt(Kv), ks = Symbol("elTooltip");
function ol() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Fr(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const xy = ke({
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
}), Fy = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = ol(), {
    registerTimeout: s,
    cancelTimeout: i
  } = ol();
  return {
    onOpen: (d) => {
      a(() => {
        r(d);
        const p = f(n);
        je(p) && p > 0 && s(() => {
          o(d);
        }, p);
      }, f(e));
    },
    onClose: (d) => {
      i(), a(() => {
        o(d);
      }, f(t));
    }
  };
}, Os = ke({
  ...xy,
  ...uu,
  appendTo: {
    type: se([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: se(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Dr(["ariaLabel"])
}), du = ke({
  ...Yc,
  disabled: Boolean,
  trigger: {
    type: se([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: se(Array),
    default: () => [xt.enter, xt.numpadEnter, xt.space]
  }
}), Dy = jo({
  type: se(Boolean),
  default: null
}), zy = jo({
  type: se(Function)
}), By = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: Dy,
    [n]: zy
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: c,
      onShow: d,
      onHide: p
    }) => {
      const m = tt(), { emit: g } = m, h = m.props, v = L(() => We(h[n])), S = L(() => h[e] === null), u = (C) => {
        s.value !== !0 && (s.value = !0, i && (i.value = C), We(d) && d(C));
      }, E = (C) => {
        s.value !== !1 && (s.value = !1, i && (i.value = C), We(p) && p(C));
      }, y = (C) => {
        if (h.disabled === !0 || We(c) && !c())
          return;
        const D = v.value && De;
        D && g(t, !0), (S.value || !D) && u(C);
      }, w = (C) => {
        if (h.disabled === !0 || !De)
          return;
        const D = v.value && De;
        D && g(t, !1), (S.value || !D) && E(C);
      }, k = (C) => {
        yo(C) && (h.disabled && C ? v.value && g(t, !1) : s.value !== C && (C ? u() : E()));
      }, O = () => {
        s.value ? w() : y();
      };
      return ue(() => h[e], k), l && m.appContext.config.globalProperties.$route !== void 0 && ue(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && s.value && w();
      }), Fe(() => {
        k(h[e]);
      }), {
        hide: w,
        show: y,
        toggle: O,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: Uy,
  useModelToggleEmits: Wy,
  useModelToggle: jy
} = By("visible"), Vy = ke({
  ...Kc,
  ...Uy,
  ...Os,
  ...du,
  ...Gc,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Hy = [
  ...Wy,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Ky = (e, t) => Mt(e) ? e.includes(t) : e === t, Mn = (e, t, n) => (r) => {
  Ky(f(e), t) && n(r);
}, Kt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, Gy = q({
  name: "ElTooltipTrigger"
}), Yy = /* @__PURE__ */ q({
  ...Gy,
  props: du,
  setup(e, { expose: t }) {
    const n = e, r = xe("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: c } = we(ks, void 0), d = z(null), p = () => {
      if (f(o) || n.disabled)
        return !0;
    }, m = Nt(n, "trigger"), g = Kt(p, Mn(m, "hover", i)), h = Kt(p, Mn(m, "hover", l)), v = Kt(p, Mn(m, "click", (w) => {
      w.button === 0 && c(w);
    })), S = Kt(p, Mn(m, "focus", i)), u = Kt(p, Mn(m, "focus", l)), E = Kt(p, Mn(m, "contextmenu", (w) => {
      w.preventDefault(), c(w);
    })), y = Kt(p, (w) => {
      const { code: k } = w;
      n.triggerKeys.includes(k) && (w.preventDefault(), c(w));
    });
    return t({
      triggerRef: d
    }), (w, k) => (A(), ne(f(n0), {
      id: f(a),
      "virtual-ref": w.virtualRef,
      open: f(s),
      "virtual-triggering": w.virtualTriggering,
      class: W(f(r).e("trigger")),
      onBlur: f(u),
      onClick: f(v),
      onContextmenu: f(E),
      onFocus: f(S),
      onMouseenter: f(g),
      onMouseleave: f(h),
      onKeydown: f(y)
    }, {
      default: ee(() => [
        ce(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Zy = /* @__PURE__ */ Pe(Yy, [["__file", "trigger.vue"]]);
const qy = ke({
  to: {
    type: se([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Xy = /* @__PURE__ */ q({
  __name: "teleport",
  props: qy,
  setup(e) {
    return (t, n) => t.disabled ? ce(t.$slots, "default", { key: 0 }) : (A(), ne($d, {
      key: 1,
      to: t.to
    }, [
      ce(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Jy = /* @__PURE__ */ Pe(Xy, [["__file", "teleport.vue"]]);
const Qy = Pt(Jy), fu = () => {
  const e = ts(), t = Dc(), n = L(() => `${e.value}-popper-container-${t.prefix}`), r = L(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, eb = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, tb = () => {
  const { id: e, selector: t } = fu();
  return Nd(() => {
    De && (document.body.querySelector(t.value) || eb(e.value));
  }), {
    id: e,
    selector: t
  };
}, nb = q({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), rb = /* @__PURE__ */ q({
  ...nb,
  props: Os,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = fu(), o = xe("tooltip"), a = z();
    let s;
    const {
      controlled: i,
      id: l,
      open: c,
      trigger: d,
      onClose: p,
      onOpen: m,
      onShow: g,
      onHide: h,
      onBeforeShow: v,
      onBeforeHide: S
    } = we(ks, void 0), u = L(() => n.transition || `${o.namespace.value}-fade-in-linear`), E = L(() => n.persistent);
    Wt(() => {
      s?.();
    });
    const y = L(() => f(E) ? !0 : f(c)), w = L(() => n.disabled ? !1 : f(c)), k = L(() => n.appendTo || r.value), O = L(() => {
      var M;
      return (M = n.style) != null ? M : {};
    }), C = z(!0), D = () => {
      h(), ae() && Ht(document.body), C.value = !0;
    }, x = () => {
      if (f(i))
        return !0;
    }, Z = Kt(x, () => {
      n.enterable && f(d) === "hover" && m();
    }), oe = Kt(x, () => {
      f(d) === "hover" && p();
    }), P = () => {
      var M, ye;
      (ye = (M = a.value) == null ? void 0 : M.updatePopper) == null || ye.call(M), v?.();
    }, V = () => {
      S?.();
    }, re = () => {
      g(), s = uh(L(() => {
        var M;
        return (M = a.value) == null ? void 0 : M.popperContentRef;
      }), () => {
        if (f(i))
          return;
        f(d) !== "hover" && p();
      });
    }, de = () => {
      n.virtualTriggering || p();
    }, ae = (M) => {
      var ye;
      const me = (ye = a.value) == null ? void 0 : ye.popperContentRef, Le = M?.relatedTarget || document.activeElement;
      return me?.contains(Le);
    };
    return ue(() => f(c), (M) => {
      M ? C.value = !1 : s?.();
    }, {
      flush: "post"
    }), ue(() => n.content, () => {
      var M, ye;
      (ye = (M = a.value) == null ? void 0 : M.updatePopper) == null || ye.call(M);
    }), t({
      contentRef: a,
      isFocusInsideContent: ae
    }), (M, ye) => (A(), ne(f(Qy), {
      disabled: !M.teleported,
      to: f(k)
    }, {
      default: ee(() => [
        j(nr, {
          name: f(u),
          onAfterLeave: D,
          onBeforeEnter: P,
          onAfterEnter: re,
          onBeforeLeave: V
        }, {
          default: ee(() => [
            f(y) ? ht((A(), ne(f(Ny), hn({
              key: 0,
              id: f(l),
              ref_key: "contentRef",
              ref: a
            }, M.$attrs, {
              "aria-label": M.ariaLabel,
              "aria-hidden": C.value,
              "boundaries-padding": M.boundariesPadding,
              "fallback-placements": M.fallbackPlacements,
              "gpu-acceleration": M.gpuAcceleration,
              offset: M.offset,
              placement: M.placement,
              "popper-options": M.popperOptions,
              strategy: M.strategy,
              effect: M.effect,
              enterable: M.enterable,
              pure: M.pure,
              "popper-class": M.popperClass,
              "popper-style": [M.popperStyle, f(O)],
              "reference-el": M.referenceEl,
              "trigger-target-el": M.triggerTargetEl,
              visible: f(w),
              "z-index": M.zIndex,
              onMouseenter: f(Z),
              onMouseleave: f(oe),
              onBlur: de,
              onClose: f(p)
            }), {
              default: ee(() => [
                ce(M.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [tn, f(w)]
            ]) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var ob = /* @__PURE__ */ Pe(rb, [["__file", "content.vue"]]);
const ab = q({
  name: "ElTooltip"
}), sb = /* @__PURE__ */ q({
  ...ab,
  props: Vy,
  emits: Hy,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    tb();
    const o = Ho(), a = z(), s = z(), i = () => {
      var u;
      const E = f(a);
      E && ((u = E.popperInstanceRef) == null || u.update());
    }, l = z(!1), c = z(), { show: d, hide: p, hasUpdateHandler: m } = jy({
      indicator: l,
      toggleReason: c
    }), { onOpen: g, onClose: h } = Fy({
      showAfter: Nt(r, "showAfter"),
      hideAfter: Nt(r, "hideAfter"),
      autoClose: Nt(r, "autoClose"),
      open: d,
      close: p
    }), v = L(() => yo(r.visible) && !m.value);
    zt(ks, {
      controlled: v,
      id: o,
      open: Ja(l),
      trigger: Nt(r, "trigger"),
      onOpen: (u) => {
        g(u);
      },
      onClose: (u) => {
        h(u);
      },
      onToggle: (u) => {
        f(l) ? h(u) : g(u);
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
      updatePopper: i
    }), ue(() => r.disabled, (u) => {
      u && l.value && (l.value = !1);
    });
    const S = (u) => {
      var E;
      return (E = s.value) == null ? void 0 : E.isFocusInsideContent(u);
    };
    return Md(() => l.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: S,
      updatePopper: i,
      onOpen: g,
      onClose: h,
      hide: p
    }), (u, E) => (A(), ne(f(My), {
      ref_key: "popperRef",
      ref: a,
      role: u.role
    }, {
      default: ee(() => [
        j(Zy, {
          disabled: u.disabled,
          trigger: u.trigger,
          "trigger-keys": u.triggerKeys,
          "virtual-ref": u.virtualRef,
          "virtual-triggering": u.virtualTriggering
        }, {
          default: ee(() => [
            u.$slots.default ? ce(u.$slots, "default", { key: 0 }) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        j(ob, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": u.ariaLabel,
          "boundaries-padding": u.boundariesPadding,
          content: u.content,
          disabled: u.disabled,
          effect: u.effect,
          enterable: u.enterable,
          "fallback-placements": u.fallbackPlacements,
          "hide-after": u.hideAfter,
          "gpu-acceleration": u.gpuAcceleration,
          offset: u.offset,
          persistent: u.persistent,
          "popper-class": u.popperClass,
          "popper-style": u.popperStyle,
          placement: u.placement,
          "popper-options": u.popperOptions,
          pure: u.pure,
          "raw-content": u.rawContent,
          "reference-el": u.referenceEl,
          "trigger-target-el": u.triggerTargetEl,
          "show-after": u.showAfter,
          strategy: u.strategy,
          teleported: u.teleported,
          transition: u.transition,
          "virtual-triggering": u.virtualTriggering,
          "z-index": u.zIndex,
          "append-to": u.appendTo
        }, {
          default: ee(() => [
            ce(u.$slots, "content", {}, () => [
              u.rawContent ? (A(), B("span", {
                key: 0,
                innerHTML: u.content
              }, null, 8, ["innerHTML"])) : (A(), B("span", { key: 1 }, X(u.content), 1))
            ]),
            u.showArrow ? (A(), ne(f(Zv), {
              key: 0,
              "arrow-offset": u.arrowOffset
            }, null, 8, ["arrow-offset"])) : G("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var ib = /* @__PURE__ */ Pe(sb, [["__file", "tooltip.vue"]]);
const pu = Pt(ib), lb = ke({
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
    type: se([String, Object, Array])
  },
  offset: {
    type: se(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), cb = q({
  name: "ElBadge"
}), ub = /* @__PURE__ */ q({
  ...cb,
  props: lb,
  setup(e, { expose: t }) {
    const n = e, r = xe("badge"), o = L(() => n.isDot ? "" : je(n.value) && je(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = L(() => {
      var s, i, l, c, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: Lr(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: Lr((c = (l = n.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (A(), B("div", {
      class: W(f(r).b())
    }, [
      ce(s.$slots, "default"),
      j(nr, {
        name: `${f(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ee(() => [
          ht(I("sup", {
            class: W([
              f(r).e("content"),
              f(r).em("content", s.type),
              f(r).is("fixed", !!s.$slots.default),
              f(r).is("dot", s.isDot),
              f(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: Re(f(a))
          }, [
            ce(s.$slots, "content", { value: f(o) }, () => [
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
var db = /* @__PURE__ */ Pe(ub, [["__file", "badge.vue"]]);
const fb = Pt(db), pb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ia = ke({
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
    values: kc
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), mb = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, gb = q({
  name: "ElTag"
}), hb = /* @__PURE__ */ q({
  ...gb,
  props: Ia,
  emits: mb,
  setup(e, { emit: t }) {
    const n = e, r = ps(), o = xe("tag"), a = L(() => {
      const { type: c, hit: d, effect: p, closable: m, round: g } = n;
      return [
        o.b(),
        o.is("closable", m),
        o.m(c || "primary"),
        o.m(r.value),
        o.m(p),
        o.is("hit", d),
        o.is("round", g)
      ];
    }), s = (c) => {
      t("close", c);
    }, i = (c) => {
      t("click", c);
    }, l = (c) => {
      var d, p, m;
      (m = (p = (d = c?.component) == null ? void 0 : d.subTree) == null ? void 0 : p.component) != null && m.bum && (c.component.subTree.component.bum = null);
    };
    return (c, d) => c.disableTransitions ? (A(), B("span", {
      key: 0,
      class: W(f(a)),
      style: Re({ backgroundColor: c.color }),
      onClick: i
    }, [
      I("span", {
        class: W(f(o).e("content"))
      }, [
        ce(c.$slots, "default")
      ], 2),
      c.closable ? (A(), ne(f(dt), {
        key: 0,
        class: W(f(o).e("close")),
        onClick: Ze(s, ["stop"])
      }, {
        default: ee(() => [
          j(f(Ir))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : G("v-if", !0)
    ], 6)) : (A(), ne(nr, {
      key: 1,
      name: `${f(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: ee(() => [
        I("span", {
          class: W(f(a)),
          style: Re({ backgroundColor: c.color }),
          onClick: i
        }, [
          I("span", {
            class: W(f(o).e("content"))
          }, [
            ce(c.$slots, "default")
          ], 2),
          c.closable ? (A(), ne(f(dt), {
            key: 0,
            class: W(f(o).e("close")),
            onClick: Ze(s, ["stop"])
          }, {
            default: ee(() => [
              j(f(Ir))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : G("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var vb = /* @__PURE__ */ Pe(hb, [["__file", "tag.vue"]]);
const yb = Pt(vb), sn = /* @__PURE__ */ new Map();
if (De) {
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
function al(e, t) {
  let n = [];
  return Mt(t.arg) ? n = t.arg : Ct(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, c = !s || !i, d = e.contains(s) || e.contains(i), p = e === s, m = n.length && n.some((h) => h?.contains(s)) || n.length && n.includes(i), g = a && (a.contains(s) || a.contains(i));
    l || c || d || p || m || g || t.value(r, o);
  };
}
const bb = {
  beforeMount(e, t) {
    sn.has(e) || sn.set(e, []), sn.get(e).push({
      documentHandler: al(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    sn.has(e) || sn.set(e, []);
    const n = sn.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: al(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    sn.delete(e);
  }
}, _b = ke({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: se(Object)
  },
  size: us,
  button: {
    type: se(Object)
  },
  experimentalFeatures: {
    type: se(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: se(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Lc
}), wt = {};
q({
  name: "ElConfigProvider",
  props: _b,
  setup(e, { slots: t }) {
    ue(() => e.message, (r) => {
      Object.assign(wt, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = Rc(e);
    return () => ce(t, "default", { config: n?.value });
  }
});
function wb() {
  const e = mn(), t = z(0), n = 11, r = L(() => ({
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
const mu = Symbol("ElSelectGroup"), Zo = Symbol("ElSelect");
function Eb(e, t) {
  const n = we(Zo), r = we(mu, { disabled: !1 }), o = L(() => d(fn(n.props.modelValue), e.value)), a = L(() => {
    var g;
    if (n.props.multiple) {
      const h = fn((g = n.props.modelValue) != null ? g : []);
      return !o.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = L(() => e.label || (ot(e.value) ? "" : e.value)), i = L(() => e.value || e.label || ""), l = L(() => e.disabled || t.groupDisabled || a.value), c = tt(), d = (g = [], h) => {
    if (ot(e.value)) {
      const v = n.props.valueKey;
      return g && g.some((S) => Jl(pn(S, v)) === pn(h, v));
    } else
      return g && g.includes(h);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, m = (g) => {
    const h = new RegExp(pb(g), "i");
    t.visible = h.test(s.value) || e.created;
  };
  return ue(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ue(() => e.value, (g, h) => {
    const { remote: v, valueKey: S } = n.props;
    if ((v ? g !== h : !yr(g, h)) && (n.onOptionDestroy(h, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !v) {
      if (S && ot(g) && ot(h) && g[S] === h[S])
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
const Sb = q({
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
    const t = xe("select"), n = Ho(), r = L(() => [
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
      hoverItem: c,
      updateOption: d
    } = Eb(e, o), { visible: p, hover: m } = Mo(o), g = tt().proxy;
    l.onOptionCreate(g), Wt(() => {
      const v = g.value, { selected: S } = l.states, u = S.some((E) => E.value === g.value);
      Ae(() => {
        l.states.cachedOptions.get(v) === g && !u && l.states.cachedOptions.delete(v);
      }), l.onOptionDestroy(v, g);
    });
    function h() {
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
      hoverItem: c,
      updateOption: d,
      visible: p,
      hover: m,
      selectOptionClick: h,
      states: o
    };
  }
});
function Cb(e, t, n, r, o, a) {
  return ht((A(), B("li", {
    id: e.id,
    class: W(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Ze(e.selectOptionClick, ["stop"])
  }, [
    ce(e.$slots, "default", {}, () => [
      I("span", null, X(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [tn, e.visible]
  ]);
}
var Ps = /* @__PURE__ */ Pe(Sb, [["render", Cb], ["__file", "option.vue"]]);
const Tb = q({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = we(Zo), t = xe("select"), n = L(() => e.props.popperClass), r = L(() => e.props.multiple), o = L(() => e.props.fitInputWidth), a = z("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return Fe(() => {
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
function kb(e, t, n, r, o, a) {
  return A(), B("div", {
    class: W([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Re({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (A(), B("div", {
      key: 0,
      class: W(e.ns.be("dropdown", "header"))
    }, [
      ce(e.$slots, "header")
    ], 2)) : G("v-if", !0),
    ce(e.$slots, "default"),
    e.$slots.footer ? (A(), B("div", {
      key: 1,
      class: W(e.ns.be("dropdown", "footer"))
    }, [
      ce(e.$slots, "footer")
    ], 2)) : G("v-if", !0)
  ], 6);
}
var Ob = /* @__PURE__ */ Pe(Tb, [["render", kb], ["__file", "select-dropdown.vue"]]);
const Pb = (e, t) => {
  const { t: n } = Cc(), r = Ho(), o = xe("select"), a = xe("input"), s = On({
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
  }), i = z(null), l = z(null), c = z(null), d = z(null), p = z(null), m = z(null), g = z(null), h = z(null), v = z(null), S = z(null), u = z(null), {
    isComposing: E,
    handleCompositionStart: y,
    handleCompositionUpdate: w,
    handleCompositionEnd: k
  } = jc({
    afterComposition: (R) => Je(R)
  }), { wrapperRef: O, isFocused: C, handleBlur: D } = Wc(p, {
    beforeFocus() {
      return ae.value;
    },
    afterFocus() {
      e.automaticDropdown && !x.value && (x.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(R) {
      var H, pe;
      return ((H = c.value) == null ? void 0 : H.isFocusInsideContent(R)) || ((pe = d.value) == null ? void 0 : pe.isFocusInsideContent(R));
    },
    afterBlur() {
      x.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), x = z(!1), Z = z(), { form: oe, formItem: P } = zc(), { inputId: V } = Bc(e, {
    formItemContext: P
  }), { valueOnClear: re, isEmptyValue: de } = $h(e), ae = L(() => e.disabled || oe?.disabled), M = L(() => Mt(e.modelValue) ? e.modelValue.length > 0 : !de(e.modelValue)), ye = L(() => {
    var R;
    return (R = oe?.statusIcon) != null ? R : !1;
  }), me = L(() => e.clearable && !ae.value && s.inputHovering && M.value), Le = L(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), He = L(() => o.is("reverse", Le.value && x.value)), Xe = L(() => P?.validateState || ""), nt = L(() => xc[Xe.value]), $e = L(() => e.remote ? 300 : 0), ze = L(() => e.remote && !s.inputValue && s.options.size === 0), U = L(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Q.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Q = L(() => te.value.filter((R) => R.visible).length), te = L(() => {
    const R = Array.from(s.options.values()), H = [];
    return s.optionValues.forEach((pe) => {
      const Ue = R.findIndex((ct) => ct.value === pe);
      Ue > -1 && H.push(R[Ue]);
    }), H.length >= R.length ? H : R;
  }), Ce = L(() => Array.from(s.cachedOptions.values())), Te = L(() => {
    const R = te.value.filter((H) => !H.created).some((H) => H.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !R;
  }), Ee = () => {
    e.filterable && We(e.filterMethod) || e.filterable && e.remote && We(e.remoteMethod) || te.value.forEach((R) => {
      var H;
      (H = R.updateOption) == null || H.call(R, s.inputValue);
    });
  }, Ge = ps(), le = L(() => ["small"].includes(Ge.value) ? "small" : "default"), Be = L({
    get() {
      return x.value && !ze.value;
    },
    set(R) {
      x.value = R;
    }
  }), lt = L(() => {
    if (e.multiple && !Tn(e.modelValue))
      return fn(e.modelValue).length === 0 && !s.inputValue;
    const R = Mt(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Tn(R) ? !s.inputValue : !0;
  }), pt = L(() => {
    var R;
    const H = (R = e.placeholder) != null ? R : n("el.select.placeholder");
    return e.multiple || !M.value ? H : s.selectedLabel;
  }), Lt = L(() => ka ? null : "mouseenter");
  ue(() => e.modelValue, (R, H) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", _("")), N(), !yr(R, H) && e.validateEvent && P?.validate("change").catch((pe) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ue(() => x.value, (R) => {
    R ? _(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", R);
  }), ue(() => s.options.entries(), () => {
    De && (N(), e.defaultFirstOption && (e.filterable || e.remote) && Q.value && T());
  }, {
    flush: "post"
  }), ue([() => s.hoveringIndex, te], ([R]) => {
    je(R) && R > -1 ? Z.value = te.value[R] || {} : Z.value = {}, te.value.forEach((H) => {
      H.hover = Z.value === H;
    });
  }), Yl(() => {
    s.isBeforeHide || Ee();
  });
  const _ = (R) => {
    s.previousQuery === R || E.value || (s.previousQuery = R, e.filterable && We(e.filterMethod) ? e.filterMethod(R) : e.filterable && e.remote && We(e.remoteMethod) && e.remoteMethod(R), e.defaultFirstOption && (e.filterable || e.remote) && Q.value ? Ae(T) : Ae(ge));
  }, T = () => {
    const R = te.value.filter((ct) => ct.visible && !ct.disabled && !ct.states.groupDisabled), H = R.find((ct) => ct.created), pe = R[0], Ue = te.value.map((ct) => ct.value);
    s.hoveringIndex = Vs(Ue, H || pe);
  }, N = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const H = Mt(e.modelValue) ? e.modelValue[0] : e.modelValue, pe = Y(H);
      s.selectedLabel = pe.currentLabel, s.selected = [pe];
      return;
    }
    const R = [];
    Tn(e.modelValue) || fn(e.modelValue).forEach((H) => {
      R.push(Y(H));
    }), s.selected = R;
  }, Y = (R) => {
    let H;
    const pe = sf(R);
    for (let $n = s.cachedOptions.size - 1; $n >= 0; $n--) {
      const an = Ce.value[$n];
      if (pe ? pn(an.value, e.valueKey) === pn(R, e.valueKey) : an.value === R) {
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
    const Ue = pe ? R.label : R ?? "";
    return {
      value: R,
      currentLabel: Ue
    };
  }, ge = () => {
    s.hoveringIndex = te.value.findIndex((R) => s.selected.some((H) => jr(H) === jr(R)));
  }, ie = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, b = () => {
    s.collapseItemWidth = S.value.getBoundingClientRect().width;
  }, $ = () => {
    var R, H;
    (H = (R = c.value) == null ? void 0 : R.updatePopper) == null || H.call(R);
  }, fe = () => {
    var R, H;
    (H = (R = d.value) == null ? void 0 : R.updatePopper) == null || H.call(R);
  }, be = () => {
    s.inputValue.length > 0 && !x.value && (x.value = !0), _(s.inputValue);
  }, Je = (R) => {
    if (s.inputValue = R.target.value, e.remote)
      wn();
    else
      return be();
  }, wn = Hg(() => {
    be();
  }, $e.value), mt = (R) => {
    yr(e.modelValue, R) || t(_o, R);
  }, ta = (R) => Kg(R, (H) => {
    const pe = s.cachedOptions.get(H);
    return pe && !pe.disabled && !pe.states.groupDisabled;
  }), Us = (R) => {
    if (e.multiple && R.code !== xt.delete && R.target.value.length <= 0) {
      const H = fn(e.modelValue).slice(), pe = ta(H);
      if (pe < 0)
        return;
      const Ue = H[pe];
      H.splice(pe, 1), t(Gt, H), mt(H), t("remove-tag", Ue);
    }
  }, ld = (R, H) => {
    const pe = s.selected.indexOf(H);
    if (pe > -1 && !ae.value) {
      const Ue = fn(e.modelValue).slice();
      Ue.splice(pe, 1), t(Gt, Ue), mt(Ue), t("remove-tag", H.value);
    }
    R.stopPropagation(), Wr();
  }, Ws = (R) => {
    R.stopPropagation();
    const H = e.multiple ? [] : re.value;
    if (e.multiple)
      for (const pe of s.selected)
        pe.isDisabled && H.push(pe.value);
    t(Gt, H), mt(H), s.hoveringIndex = -1, x.value = !1, t("clear"), Wr();
  }, js = (R) => {
    var H;
    if (e.multiple) {
      const pe = fn((H = e.modelValue) != null ? H : []).slice(), Ue = Vs(pe, R);
      Ue > -1 ? pe.splice(Ue, 1) : (e.multipleLimit <= 0 || pe.length < e.multipleLimit) && pe.push(R.value), t(Gt, pe), mt(pe), R.created && _(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(Gt, R.value), mt(R.value), x.value = !1;
    Wr(), !x.value && Ae(() => {
      Ur(R);
    });
  }, Vs = (R = [], H) => Tn(H) ? -1 : ot(H.value) ? R.findIndex((pe) => yr(pn(pe, e.valueKey), jr(H))) : R.indexOf(H.value), Ur = (R) => {
    var H, pe, Ue, ct, $n;
    const an = Mt(R) ? R[0] : R;
    let Vr = null;
    if (an?.value) {
      const sr = te.value.filter((Td) => Td.value === an.value);
      sr.length > 0 && (Vr = sr[0].$el);
    }
    if (c.value && Vr) {
      const sr = (ct = (Ue = (pe = (H = c.value) == null ? void 0 : H.popperRef) == null ? void 0 : pe.contentRef) == null ? void 0 : Ue.querySelector) == null ? void 0 : ct.call(Ue, `.${o.be("dropdown", "wrap")}`);
      sr && Mh(sr, Vr);
    }
    ($n = u.value) == null || $n.handleScroll();
  }, cd = (R) => {
    s.options.set(R.value, R), s.cachedOptions.set(R.value, R);
  }, ud = (R, H) => {
    s.options.get(R) === H && s.options.delete(R);
  }, dd = L(() => {
    var R, H;
    return (H = (R = c.value) == null ? void 0 : R.popperRef) == null ? void 0 : H.contentRef;
  }), fd = () => {
    s.isBeforeHide = !1, Ae(() => {
      var R;
      (R = u.value) == null || R.update(), Ur(s.selected);
    });
  }, Wr = () => {
    var R;
    (R = p.value) == null || R.focus();
  }, pd = () => {
    var R;
    if (x.value) {
      x.value = !1, Ae(() => {
        var H;
        return (H = p.value) == null ? void 0 : H.blur();
      });
      return;
    }
    (R = p.value) == null || R.blur();
  }, md = (R) => {
    Ws(R);
  }, gd = (R) => {
    if (x.value = !1, C.value) {
      const H = new FocusEvent("focus", R);
      Ae(() => D(H));
    }
  }, hd = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : x.value = !1;
  }, Hs = () => {
    ae.value || (ka && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : x.value = !x.value);
  }, vd = () => {
    if (!x.value)
      Hs();
    else {
      const R = te.value[s.hoveringIndex];
      R && !R.isDisabled && js(R);
    }
  }, jr = (R) => ot(R.value) ? pn(R.value, e.valueKey) : R.value, yd = L(() => te.value.filter((R) => R.visible).every((R) => R.isDisabled)), bd = L(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), _d = L(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Ks = (R) => {
    if (!x.value) {
      x.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Q.value === 0 || E.value) && !yd.value) {
      R === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : R === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const H = te.value[s.hoveringIndex];
      (H.isDisabled || !H.visible) && Ks(R), Ae(() => Ur(Z.value));
    }
  }, wd = () => {
    if (!l.value)
      return 0;
    const R = window.getComputedStyle(l.value);
    return Number.parseFloat(R.gap || "6px");
  }, Ed = L(() => {
    const R = wd();
    return { maxWidth: `${S.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - R : s.selectionWidth}px` };
  }), Sd = L(() => ({ maxWidth: `${s.selectionWidth}px` })), Cd = (R) => {
    t("popup-scroll", R);
  };
  return $t(l, ie), $t(h, $), $t(O, $), $t(v, fe), $t(S, b), Fe(() => {
    N();
  }), {
    inputId: V,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: C,
    expanded: x,
    optionsArray: te,
    hoverOption: Z,
    selectSize: Ge,
    filteredOptionsCount: Q,
    updateTooltip: $,
    updateTagTooltip: fe,
    debouncedOnInputChange: wn,
    onInput: Je,
    deletePrevTag: Us,
    deleteTag: ld,
    deleteSelected: Ws,
    handleOptionSelect: js,
    scrollToOption: Ur,
    hasModelValue: M,
    shouldShowPlaceholder: lt,
    currentPlaceholder: pt,
    mouseEnterEventName: Lt,
    needStatusIcon: ye,
    showClose: me,
    iconComponent: Le,
    iconReverse: He,
    validateState: Xe,
    validateIcon: nt,
    showNewOption: Te,
    updateOptions: Ee,
    collapseTagSize: le,
    setSelected: N,
    selectDisabled: ae,
    emptyText: U,
    handleCompositionStart: y,
    handleCompositionUpdate: w,
    handleCompositionEnd: k,
    onOptionCreate: cd,
    onOptionDestroy: ud,
    handleMenuEnter: fd,
    focus: Wr,
    blur: pd,
    handleClearClick: md,
    handleClickOutside: gd,
    handleEsc: hd,
    toggleMenu: Hs,
    selectOption: vd,
    getValueKey: jr,
    navigateOptions: Ks,
    dropdownMenuVisible: Be,
    showTagList: bd,
    collapseTagList: _d,
    popupScroll: Cd,
    tagStyle: Ed,
    collapseTagStyle: Sd,
    popperRef: dd,
    inputRef: p,
    tooltipRef: c,
    tagTooltipRef: d,
    prefixRef: m,
    suffixRef: g,
    selectRef: i,
    wrapperRef: O,
    selectionRef: l,
    scrollbarRef: u,
    menuRef: h,
    tagMenuRef: v,
    collapseItemRef: S
  };
};
var Lb = q({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = we(Zo);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(c) {
        Mt(c) && c.forEach((d) => {
          var p, m, g, h;
          const v = (p = d?.type || {}) == null ? void 0 : p.name;
          v === "ElOptionGroup" ? l(!at(d.children) && !Mt(d.children) && We((m = d.children) == null ? void 0 : m.default) ? (g = d.children) == null ? void 0 : g.default() : d.children) : v === "ElOption" ? i.push((h = d.props) == null ? void 0 : h.value) : Mt(d.children) && l(d.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), yr(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const Ib = ke({
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
  size: us,
  effect: {
    type: se(String),
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
    type: se(Object),
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
  teleported: Os.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: Kn,
    default: Vo
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Kn,
    default: Uh
  },
  tagType: { ...Ia.type, default: "info" },
  tagEffect: { ...Ia.effect, default: "light" },
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
    type: se(String),
    values: Go,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: se(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...Lc,
  ...Dr(["ariaLabel"])
}), sl = "ElSelect", Ab = q({
  name: sl,
  componentName: sl,
  components: {
    ElSelectMenu: Ob,
    ElOption: Ps,
    ElOptions: Lb,
    ElTag: yb,
    ElScrollbar: Wv,
    ElTooltip: pu,
    ElIcon: dt
  },
  directives: { ClickOutside: bb },
  props: Ib,
  emits: [
    Gt,
    _o,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = L(() => {
      const { modelValue: l, multiple: c } = e, d = c ? [] : void 0;
      return Mt(l) ? c ? l : d : c ? d : l;
    }), r = On({
      ...Mo(e),
      modelValue: n
    }), o = Pb(r, t), { calculatorRef: a, inputStyle: s } = wb();
    zt(Zo, On({
      props: r,
      states: o.states,
      optionsArray: o.optionsArray,
      handleOptionSelect: o.handleOptionSelect,
      onOptionCreate: o.onOptionCreate,
      onOptionDestroy: o.onOptionDestroy,
      selectRef: o.selectRef,
      setSelected: o.setSelected
    }));
    const i = L(() => e.multiple ? o.states.selected.map((l) => l.currentLabel) : o.states.selectedLabel);
    return {
      ...o,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function Rb(e, t, n, r, o, a) {
  const s = En("el-tag"), i = En("el-tooltip"), l = En("el-icon"), c = En("el-option"), d = En("el-options"), p = En("el-scrollbar"), m = En("el-select-menu"), g = xd("click-outside");
  return ht((A(), B("div", {
    ref: "selectRef",
    class: W([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Fd(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
    onMouseleave: (h) => e.states.inputHovering = !1
  }, [
    j(i, {
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
      default: ee(() => {
        var h;
        return [
          I("div", {
            ref: "wrapperRef",
            class: W([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Ze(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (A(), B("div", {
              key: 0,
              ref: "prefixRef",
              class: W(e.nsSelect.e("prefix"))
            }, [
              ce(e.$slots, "prefix")
            ], 2)) : G("v-if", !0),
            I("div", {
              ref: "selectionRef",
              class: W([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ce(e.$slots, "tag", { key: 0 }, () => [
                (A(!0), B(Ve, null, Jt(e.showTagList, (v) => (A(), B("div", {
                  key: e.getValueKey(v),
                  class: W(e.nsSelect.e("selected-item"))
                }, [
                  j(s, {
                    closable: !e.selectDisabled && !v.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: Re(e.tagStyle),
                    onClose: (S) => e.deleteTag(S, v)
                  }, {
                    default: ee(() => [
                      I("span", {
                        class: W(e.nsSelect.e("tags-text"))
                      }, [
                        ce(e.$slots, "label", {
                          label: v.currentLabel,
                          value: v.value
                        }, () => [
                          Cn(X(v.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (A(), ne(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: ee(() => [
                    I("div", {
                      ref: "collapseItemRef",
                      class: W(e.nsSelect.e("selected-item"))
                    }, [
                      j(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: Re(e.collapseTagStyle)
                      }, {
                        default: ee(() => [
                          I("span", {
                            class: W(e.nsSelect.e("tags-text"))
                          }, " + " + X(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: ee(() => [
                    I("div", {
                      ref: "tagMenuRef",
                      class: W(e.nsSelect.e("selection"))
                    }, [
                      (A(!0), B(Ve, null, Jt(e.collapseTagList, (v) => (A(), B("div", {
                        key: e.getValueKey(v),
                        class: W(e.nsSelect.e("selected-item"))
                      }, [
                        j(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !v.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (S) => e.deleteTag(S, v)
                        }, {
                          default: ee(() => [
                            I("span", {
                              class: W(e.nsSelect.e("tags-text"))
                            }, [
                              ce(e.$slots, "label", {
                                label: v.currentLabel,
                                value: v.value
                              }, () => [
                                Cn(X(v.currentLabel), 1)
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
              I("div", {
                class: W([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                ht(I("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (v) => e.states.inputValue = v,
                  type: "text",
                  name: e.name,
                  class: W([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: Re(e.inputStyle),
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
                    ir(Ze((v) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    ir(Ze((v) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    ir(Ze(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    ir(Ze(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    ir(Ze(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Ze(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Dd, e.states.inputValue]
                ]),
                e.filterable ? (A(), B("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: W(e.nsSelect.e("input-calculator")),
                  textContent: X(e.states.inputValue)
                }, null, 10, ["textContent"])) : G("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (A(), B("div", {
                key: 1,
                class: W([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? ce(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  I("span", null, X(e.currentPlaceholder), 1)
                ]) : (A(), B("span", { key: 1 }, X(e.currentPlaceholder), 1))
              ], 2)) : G("v-if", !0)
            ], 2),
            I("div", {
              ref: "suffixRef",
              class: W(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (A(), ne(l, {
                key: 0,
                class: W([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ee(() => [
                  (A(), ne(gt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0),
              e.showClose && e.clearIcon ? (A(), ne(l, {
                key: 1,
                class: W([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: ee(() => [
                  (A(), ne(gt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : G("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (A(), ne(l, {
                key: 2,
                class: W([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: ee(() => [
                  (A(), ne(gt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : G("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: ee(() => [
        j(m, { ref: "menuRef" }, {
          default: ee(() => [
            e.$slots.header ? (A(), B("div", {
              key: 0,
              class: W(e.nsSelect.be("dropdown", "header")),
              onClick: Ze(() => {
              }, ["stop"])
            }, [
              ce(e.$slots, "header")
            ], 10, ["onClick"])) : G("v-if", !0),
            ht(j(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: W([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: ee(() => [
                e.showNewOption ? (A(), ne(c, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : G("v-if", !0),
                j(d, null, {
                  default: ee(() => [
                    ce(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [tn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (A(), B("div", {
              key: 1,
              class: W(e.nsSelect.be("dropdown", "loading"))
            }, [
              ce(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (A(), B("div", {
              key: 2,
              class: W(e.nsSelect.be("dropdown", "empty"))
            }, [
              ce(e.$slots, "empty", {}, () => [
                I("span", null, X(e.emptyText), 1)
              ])
            ], 2)) : G("v-if", !0),
            e.$slots.footer ? (A(), B("div", {
              key: 3,
              class: W(e.nsSelect.be("dropdown", "footer")),
              onClick: Ze(() => {
              }, ["stop"])
            }, [
              ce(e.$slots, "footer")
            ], 10, ["onClick"])) : G("v-if", !0)
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
var $b = /* @__PURE__ */ Pe(Ab, [["render", Rb], ["__file", "select.vue"]]);
const Nb = q({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = xe("select"), n = z(null), r = tt(), o = z([]);
    zt(mu, On({
      ...Mo(e)
    }));
    const a = L(() => o.value.some((c) => c.visible === !0)), s = (c) => {
      var d, p;
      return ((d = c.type) == null ? void 0 : d.name) === "ElOption" && !!((p = c.component) != null && p.proxy);
    }, i = (c) => {
      const d = fn(c), p = [];
      return d.forEach((m) => {
        var g, h;
        s(m) ? p.push(m.component.proxy) : (g = m.children) != null && g.length ? p.push(...i(m.children)) : (h = m.component) != null && h.subTree && p.push(...i(m.component.subTree));
      }), p;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return Fe(() => {
      l();
    }), vh(n, l, {
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
function Mb(e, t, n, r, o, a) {
  return ht((A(), B("ul", {
    ref: "groupRef",
    class: W(e.ns.be("group", "wrap"))
  }, [
    I("li", {
      class: W(e.ns.be("group", "title"))
    }, X(e.label), 3),
    I("li", null, [
      I("ul", {
        class: W(e.ns.b("group"))
      }, [
        ce(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [tn, e.visible]
  ]);
}
var gu = /* @__PURE__ */ Pe(Nb, [["render", Mb], ["__file", "option-group.vue"]]);
const Ls = Pt($b, {
  Option: Ps,
  OptionGroup: gu
}), Is = ds(Ps);
ds(gu);
const xb = ke({
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
    type: se(String),
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
    type: se([
      String,
      Array,
      Function
    ]),
    default: ""
  },
  striped: Boolean,
  stripedFlow: Boolean,
  format: {
    type: se(Function),
    default: (e) => `${e}%`
  }
}), Fb = q({
  name: "ElProgress"
}), Db = /* @__PURE__ */ q({
  ...Fb,
  props: xb,
  setup(e) {
    const t = e, n = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, r = xe("progress"), o = L(() => {
      const y = {
        width: `${t.percentage}%`,
        animationDuration: `${t.duration}s`
      }, w = E(t.percentage);
      return w.includes("gradient") ? y.background = w : y.backgroundColor = w, y;
    }), a = L(() => (t.strokeWidth / t.width * 100).toFixed(1)), s = L(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(`${50 - Number.parseFloat(a.value) / 2}`, 10) : 0), i = L(() => {
      const y = s.value, w = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${w ? "" : "-"}${y}
          a ${y} ${y} 0 1 1 0 ${w ? "-" : ""}${y * 2}
          a ${y} ${y} 0 1 1 0 ${w ? "" : "-"}${y * 2}
          `;
    }), l = L(() => 2 * Math.PI * s.value), c = L(() => t.type === "dashboard" ? 0.75 : 1), d = L(() => `${-1 * l.value * (1 - c.value) / 2}px`), p = L(() => ({
      strokeDasharray: `${l.value * c.value}px, ${l.value}px`,
      strokeDashoffset: d.value
    })), m = L(() => ({
      strokeDasharray: `${l.value * c.value * (t.percentage / 100)}px, ${l.value}px`,
      strokeDashoffset: d.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), g = L(() => {
      let y;
      return t.color ? y = E(t.percentage) : y = n[t.status] || n.default, y;
    }), h = L(() => t.status === "warning" ? Mc : t.type === "line" ? t.status === "success" ? Nc : Vo : t.status === "success" ? jh : Ir), v = L(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), S = L(() => t.format(t.percentage));
    function u(y) {
      const w = 100 / y.length;
      return y.map((O, C) => at(O) ? {
        color: O,
        percentage: (C + 1) * w
      } : O).sort((O, C) => O.percentage - C.percentage);
    }
    const E = (y) => {
      var w;
      const { color: k } = t;
      if (We(k))
        return k(y);
      if (at(k))
        return k;
      {
        const O = u(k);
        for (const C of O)
          if (C.percentage > y)
            return C.color;
        return (w = O[O.length - 1]) == null ? void 0 : w.color;
      }
    };
    return (y, w) => (A(), B("div", {
      class: W([
        f(r).b(),
        f(r).m(y.type),
        f(r).is(y.status),
        {
          [f(r).m("without-text")]: !y.showText,
          [f(r).m("text-inside")]: y.textInside
        }
      ]),
      role: "progressbar",
      "aria-valuenow": y.percentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, [
      y.type === "line" ? (A(), B("div", {
        key: 0,
        class: W(f(r).b("bar"))
      }, [
        I("div", {
          class: W(f(r).be("bar", "outer")),
          style: Re({ height: `${y.strokeWidth}px` })
        }, [
          I("div", {
            class: W([
              f(r).be("bar", "inner"),
              { [f(r).bem("bar", "inner", "indeterminate")]: y.indeterminate },
              { [f(r).bem("bar", "inner", "striped")]: y.striped },
              { [f(r).bem("bar", "inner", "striped-flow")]: y.stripedFlow }
            ]),
            style: Re(f(o))
          }, [
            (y.showText || y.$slots.default) && y.textInside ? (A(), B("div", {
              key: 0,
              class: W(f(r).be("bar", "innerText"))
            }, [
              ce(y.$slots, "default", { percentage: y.percentage }, () => [
                I("span", null, X(f(S)), 1)
              ])
            ], 2)) : G("v-if", !0)
          ], 6)
        ], 6)
      ], 2)) : (A(), B("div", {
        key: 1,
        class: W(f(r).b("circle")),
        style: Re({ height: `${y.width}px`, width: `${y.width}px` })
      }, [
        (A(), B("svg", { viewBox: "0 0 100 100" }, [
          I("path", {
            class: W(f(r).be("circle", "track")),
            d: f(i),
            stroke: `var(${f(r).cssVarName("fill-color-light")}, #e5e9f2)`,
            "stroke-linecap": y.strokeLinecap,
            "stroke-width": f(a),
            fill: "none",
            style: Re(f(p))
          }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]),
          I("path", {
            class: W(f(r).be("circle", "path")),
            d: f(i),
            stroke: f(g),
            fill: "none",
            opacity: y.percentage ? 1 : 0,
            "stroke-linecap": y.strokeLinecap,
            "stroke-width": f(a),
            style: Re(f(m))
          }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])
        ]))
      ], 6)),
      (y.showText || y.$slots.default) && !y.textInside ? (A(), B("div", {
        key: 2,
        class: W(f(r).e("text")),
        style: Re({ fontSize: `${f(v)}px` })
      }, [
        ce(y.$slots, "default", { percentage: y.percentage }, () => [
          y.status ? (A(), ne(f(dt), { key: 1 }, {
            default: ee(() => [
              (A(), ne(gt(f(h))))
            ]),
            _: 1
          })) : (A(), B("span", { key: 0 }, X(f(S)), 1))
        ])
      ], 6)) : G("v-if", !0)
    ], 10, ["aria-valuenow"]));
  }
});
var zb = /* @__PURE__ */ Pe(Db, [["__file", "progress.vue"]]);
const Bb = Pt(zb), Ub = ke({
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
    type: se([Number, Object])
  }
}), Wb = ke({
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
}), jb = q({
  name: "ElSkeletonItem"
}), Vb = /* @__PURE__ */ q({
  ...jb,
  props: Wb,
  setup(e) {
    const t = xe("skeleton");
    return (n, r) => (A(), B("div", {
      class: W([f(t).e("item"), f(t).e(n.variant)])
    }, [
      n.variant === "image" ? (A(), ne(f(nv), { key: 0 })) : G("v-if", !0)
    ], 2));
  }
});
var Co = /* @__PURE__ */ Pe(Vb, [["__file", "skeleton-item.vue"]]);
const Hb = (e, t = 0) => {
  if (t === 0)
    return e;
  const n = ot(t) && !!t.initVal, r = z(n);
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
    i === "leading" ? je(t) ? a(t) : a(t.leading) : ot(t) ? a(t.trailing) : r.value = !1;
  };
  return Fe(() => s("leading")), ue(() => e.value, (i) => {
    s(i ? "leading" : "trailing");
  }), r;
}, Kb = q({
  name: "ElSkeleton"
}), Gb = /* @__PURE__ */ q({
  ...Kb,
  props: Ub,
  setup(e, { expose: t }) {
    const n = e, r = xe("skeleton"), o = Hb(Nt(n, "loading"), n.throttle);
    return t({
      uiLoading: o
    }), (a, s) => f(o) ? (A(), B("div", hn({
      key: 0,
      class: [f(r).b(), f(r).is("animated", a.animated)]
    }, a.$attrs), [
      (A(!0), B(Ve, null, Jt(a.count, (i) => (A(), B(Ve, { key: i }, [
        f(o) ? ce(a.$slots, "template", { key: i }, () => [
          j(Co, {
            class: W(f(r).is("first")),
            variant: "p"
          }, null, 8, ["class"]),
          (A(!0), B(Ve, null, Jt(a.rows, (l) => (A(), ne(Co, {
            key: l,
            class: W([
              f(r).e("paragraph"),
              f(r).is("last", l === a.rows && a.rows > 1)
            ]),
            variant: "p"
          }, null, 8, ["class"]))), 128))
        ]) : G("v-if", !0)
      ], 64))), 128))
    ], 16)) : ce(a.$slots, "default", zd(hn({ key: 1 }, a.$attrs)));
  }
});
var Yb = /* @__PURE__ */ Pe(Gb, [["__file", "skeleton.vue"]]);
const Zb = Pt(Yb, {
  SkeletonItem: Co
});
ds(Co);
const hu = ["success", "info", "warning", "error"], Qe = Fc({
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
}), qb = ke({
  customClass: {
    type: String,
    default: Qe.customClass
  },
  center: {
    type: Boolean,
    default: Qe.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Qe.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Qe.duration
  },
  icon: {
    type: Kn,
    default: Qe.icon
  },
  id: {
    type: String,
    default: Qe.id
  },
  message: {
    type: se([
      String,
      Object,
      Function
    ]),
    default: Qe.message
  },
  onClose: {
    type: se(Function),
    default: Qe.onClose
  },
  showClose: {
    type: Boolean,
    default: Qe.showClose
  },
  type: {
    type: String,
    values: hu,
    default: Qe.type
  },
  plain: {
    type: Boolean,
    default: Qe.plain
  },
  offset: {
    type: Number,
    default: Qe.offset
  },
  zIndex: {
    type: Number,
    default: Qe.zIndex
  },
  grouping: {
    type: Boolean,
    default: Qe.grouping
  },
  repeatNum: {
    type: Number,
    default: Qe.repeatNum
  }
}), Xb = {
  destroy: () => !0
}, Et = Bd([]), Jb = (e) => {
  const t = Et.findIndex((o) => o.id === e), n = Et[t];
  let r;
  return t > 0 && (r = Et[t - 1]), { current: n, prev: r };
}, Qb = (e) => {
  const { prev: t } = Jb(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, e_ = (e, t) => Et.findIndex((r) => r.id === e) > 0 ? 16 : t, t_ = q({
  name: "ElMessage"
}), n_ = /* @__PURE__ */ q({
  ...t_,
  props: qb,
  emits: Xb,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = cv, { ns: o, zIndex: a } = Ac("message"), { currentZIndex: s, nextZIndex: i } = a, l = z(), c = z(!1), d = z(0);
    let p;
    const m = L(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), g = L(() => {
      const C = n.type;
      return { [o.bm("icon", C)]: C && wo[C] };
    }), h = L(() => n.icon || wo[n.type] || ""), v = L(() => Qb(n.id)), S = L(() => e_(n.id, n.offset) + v.value), u = L(() => d.value + S.value), E = L(() => ({
      top: `${S.value}px`,
      zIndex: s.value
    }));
    function y() {
      n.duration !== 0 && ({ stop: p } = yc(() => {
        k();
      }, n.duration));
    }
    function w() {
      p?.();
    }
    function k() {
      c.value = !1;
    }
    function O({ code: C }) {
      C === xt.esc && k();
    }
    return Fe(() => {
      y(), i(), c.value = !0;
    }), ue(() => n.repeatNum, () => {
      w(), y();
    }), Tt(document, "keydown", O), $t(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: u,
      close: k
    }), (C, D) => (A(), ne(nr, {
      name: f(o).b("fade"),
      onBeforeLeave: C.onClose,
      onAfterLeave: (x) => C.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        ht(I("div", {
          id: C.id,
          ref_key: "messageRef",
          ref: l,
          class: W([
            f(o).b(),
            { [f(o).m(C.type)]: C.type },
            f(o).is("center", C.center),
            f(o).is("closable", C.showClose),
            f(o).is("plain", C.plain),
            C.customClass
          ]),
          style: Re(f(E)),
          role: "alert",
          onMouseenter: w,
          onMouseleave: y
        }, [
          C.repeatNum > 1 ? (A(), ne(f(fb), {
            key: 0,
            value: C.repeatNum,
            type: f(m),
            class: W(f(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : G("v-if", !0),
          f(h) ? (A(), ne(f(dt), {
            key: 1,
            class: W([f(o).e("icon"), f(g)])
          }, {
            default: ee(() => [
              (A(), ne(gt(f(h))))
            ]),
            _: 1
          }, 8, ["class"])) : G("v-if", !0),
          ce(C.$slots, "default", {}, () => [
            C.dangerouslyUseHTMLString ? (A(), B(Ve, { key: 1 }, [
              G(" Caution here, message could've been compromised, never use user's input as message "),
              I("p", {
                class: W(f(o).e("content")),
                innerHTML: C.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (A(), B("p", {
              key: 0,
              class: W(f(o).e("content"))
            }, X(C.message), 3))
          ]),
          C.showClose ? (A(), ne(f(dt), {
            key: 2,
            class: W(f(o).e("closeBtn")),
            onClick: Ze(k, ["stop"])
          }, {
            default: ee(() => [
              j(f(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : G("v-if", !0)
        ], 46, ["id"]), [
          [tn, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var r_ = /* @__PURE__ */ Pe(n_, [["__file", "message.vue"]]);
let o_ = 1;
const vu = (e) => {
  const t = !e || at(e) || Tr(e) || We(e) ? { message: e } : e, n = {
    ...Qe,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (at(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    Ct(r) || (r = document.body), n.appendTo = r;
  }
  return yo(wt.grouping) && !n.grouping && (n.grouping = wt.grouping), je(wt.duration) && n.duration === 3e3 && (n.duration = wt.duration), je(wt.offset) && n.offset === 16 && (n.offset = wt.offset), yo(wt.showClose) && !n.showClose && (n.showClose = wt.showClose), n;
}, a_ = (e) => {
  const t = Et.indexOf(e);
  if (t === -1)
    return;
  Et.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, s_ = ({ appendTo: e, ...t }, n) => {
  const r = `message_${o_++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), a_(d);
    },
    onDestroy: () => {
      mo(null, a);
    }
  }, i = j(r_, s, We(s.message) || Tr(s.message) ? {
    default: We(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || Xn._context, mo(i, a), e.appendChild(a.firstElementChild);
  const l = i.component, d = {
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
  return d;
}, Xn = (e = {}, t) => {
  if (!De)
    return { close: () => {
    } };
  const n = vu(e);
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
  const r = s_(n, t);
  return Et.push(r), r.handler;
};
hu.forEach((e) => {
  Xn[e] = (t = {}, n) => {
    const r = vu(t);
    return Xn({ ...r, type: e }, n);
  };
});
function i_(e) {
  for (const t of Et)
    (!e || e === t.props.type) && t.handler.close();
}
Xn.closeAll = i_;
Xn._context = null;
const l_ = $c(Xn, "$message"), yu = [
  "success",
  "info",
  "warning",
  "error"
], c_ = ke({
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
    type: Kn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: se([
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
    type: se(Function),
    default: () => {
    }
  },
  onClose: {
    type: se(Function),
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
    values: [...yu, ""],
    default: ""
  },
  zIndex: Number
}), u_ = {
  destroy: () => !0
}, d_ = q({
  name: "ElNotification"
}), f_ = /* @__PURE__ */ q({
  ...d_,
  props: c_,
  emits: u_,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Ac("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = lv, l = z(!1);
    let c;
    const d = L(() => {
      const y = n.type;
      return y && wo[n.type] ? r.m(y) : "";
    }), p = L(() => n.type && wo[n.type] || n.icon), m = L(() => n.position.endsWith("right") ? "right" : "left"), g = L(() => n.position.startsWith("top") ? "top" : "bottom"), h = L(() => {
      var y;
      return {
        [g.value]: `${n.offset}px`,
        zIndex: (y = n.zIndex) != null ? y : s.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: c } = yc(() => {
        l.value && u();
      }, n.duration));
    }
    function S() {
      c?.();
    }
    function u() {
      l.value = !1;
    }
    function E({ code: y }) {
      y === xt.delete || y === xt.backspace ? S() : y === xt.esc ? l.value && u() : v();
    }
    return Fe(() => {
      v(), a(), l.value = !0;
    }), Tt(document, "keydown", E), t({
      visible: l,
      close: u
    }), (y, w) => (A(), ne(nr, {
      name: f(r).b("fade"),
      onBeforeLeave: y.onClose,
      onAfterLeave: (k) => y.$emit("destroy"),
      persisted: ""
    }, {
      default: ee(() => [
        ht(I("div", {
          id: y.id,
          class: W([f(r).b(), y.customClass, f(m)]),
          style: Re(f(h)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: v,
          onClick: y.onClick
        }, [
          f(p) ? (A(), ne(f(dt), {
            key: 0,
            class: W([f(r).e("icon"), f(d)])
          }, {
            default: ee(() => [
              (A(), ne(gt(f(p))))
            ]),
            _: 1
          }, 8, ["class"])) : G("v-if", !0),
          I("div", {
            class: W(f(r).e("group"))
          }, [
            I("h2", {
              class: W(f(r).e("title")),
              textContent: X(y.title)
            }, null, 10, ["textContent"]),
            ht(I("div", {
              class: W(f(r).e("content")),
              style: Re(y.title ? void 0 : { margin: 0 })
            }, [
              ce(y.$slots, "default", {}, () => [
                y.dangerouslyUseHTMLString ? (A(), B(Ve, { key: 1 }, [
                  G(" Caution here, message could've been compromised, never use user's input as message "),
                  I("p", { innerHTML: y.message }, null, 8, ["innerHTML"])
                ], 2112)) : (A(), B("p", { key: 0 }, X(y.message), 1))
              ])
            ], 6), [
              [tn, y.message]
            ]),
            y.showClose ? (A(), ne(f(dt), {
              key: 0,
              class: W(f(r).e("closeBtn")),
              onClick: Ze(u, ["stop"])
            }, {
              default: ee(() => [
                j(f(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : G("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [tn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var p_ = /* @__PURE__ */ Pe(f_, [["__file", "notification.vue"]]);
const To = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Aa = 16;
let m_ = 1;
const Jn = function(e = {}, t) {
  if (!De)
    return { close: () => {
    } };
  (at(e) || Tr(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  To[n].forEach(({ vm: d }) => {
    var p;
    r += (((p = d.el) == null ? void 0 : p.offsetHeight) || 0) + Aa;
  }), r += Aa;
  const o = `notification_${m_++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      g_(o, n, a);
    }
  };
  let i = document.body;
  Ct(e.appendTo) ? i = e.appendTo : at(e.appendTo) && (i = document.querySelector(e.appendTo)), Ct(i) || (i = document.body);
  const l = document.createElement("div"), c = j(p_, s, We(s.message) ? s.message : Tr(s.message) ? () => s.message : null);
  return c.appContext = Tn(t) ? Jn._context : t, c.props.onDestroy = () => {
    mo(null, l);
  }, mo(c, l), To[n].push({ vm: c }), i.appendChild(l.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
yu.forEach((e) => {
  Jn[e] = (t = {}, n) => ((at(t) || Tr(t)) && (t = {
    message: t
  }), Jn({ ...t, type: e }, n));
});
function g_(e, t, n) {
  const r = To[t], o = r.findIndex(({ vm: c }) => {
    var d;
    return ((d = c.component) == null ? void 0 : d.props.id) === e;
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
    for (let c = o; c < l; c++) {
      const { el: d, component: p } = r[c].vm, m = Number.parseInt(d.style[i], 10) - s - Aa;
      p.props.offset = m;
    }
}
function h_() {
  for (const e of Object.values(To))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Jn.closeAll = h_;
Jn._context = null;
const v_ = $c(Jn, "$notify");
function y_(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? r : n === "a" ? r.call(e) : r ? r.value : t.get(e);
}
function b_(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var so;
const _t = "__TAURI_TO_IPC_KEY__";
function __(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function F(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function bu(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class w_ {
  get rid() {
    return y_(this, so, "f");
  }
  constructor(t) {
    so.set(this, void 0), b_(this, so, t);
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
so = /* @__PURE__ */ new WeakMap();
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
async function Rt(e, t, n) {
  var r;
  const o = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (r = n?.target) !== null && r !== void 0 ? r : { kind: "Any" };
  return F("plugin:event|listen", {
    event: e,
    target: o,
    handler: __(t)
  }).then((a) => async () => _u(e, a));
}
async function E_(e, t, n) {
  return Rt(e, (r) => {
    _u(e, r.id), t(r);
  }, n);
}
async function wu(e, t) {
  await F("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function S_(e, t, n) {
  await F("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Eu {
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
    return new wr(this.width * t, this.height * t);
  }
  [_t]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[_t]();
  }
}
class wr {
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
    return new Eu(this.width / t, this.height / t);
  }
  [_t]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[_t]();
  }
}
class xn {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Eu ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof wr ? this.size : this.size.toPhysical(t);
  }
  [_t]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[_t]();
  }
}
class Su {
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
  [_t]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[_t]();
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
    return new Su(this.x / t, this.y / t);
  }
  [_t]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[_t]();
  }
}
class qr {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Su ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof un ? this.position : this.position.toPhysical(t);
  }
  [_t]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[_t]();
  }
}
class Er extends w_ {
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
      rgba: ko(t),
      width: n,
      height: r
    }).then((o) => new Er(o));
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
      bytes: ko(t)
    }).then((n) => new Er(n));
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
    return F("plugin:image|from_path", { path: t }).then((n) => new Er(n));
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
function ko(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof Er ? e.rid : e;
}
var Ra;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Ra || (Ra = {}));
class C_ {
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
var il;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(il || (il = {}));
function Cu() {
  return new Tu(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function la() {
  return F("plugin:window|get_all_windows").then((e) => e.map((t) => new Tu(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const ca = ["tauri://created", "tauri://error"];
class Tu {
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
    return (n = (await la()).find((r) => r.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Cu();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return la();
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
    for (const t of await la())
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
    } : E_(t, n, {
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
    if (ca.includes(t)) {
      for (const r of this.listeners[t] || [])
        r({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return wu(t, n);
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
    if (ca.includes(n)) {
      for (const o of this.listeners[n] || [])
        o({
          event: n,
          id: -1,
          payload: r
        });
      return;
    }
    return S_(t, n, r);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return ca.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new wr(t));
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
    }).then((t) => new wr(t));
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
    return t && (t === Ra.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), F("plugin:window|request_user_attention", {
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
    return F("plugin:window|set_min_size", {
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
    return F("plugin:window|set_max_size", {
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
      value: t instanceof qr ? t : new qr(t)
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
      value: ko(t)
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
      value: t instanceof qr ? t : new qr(t)
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
      value: t ? ko(t) : void 0
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
      n.payload = new wr(n.payload), t(n);
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
      const r = new C_(n);
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
var ll;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ll || (ll = {}));
var cl;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(cl || (cl = {}));
var ul;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(ul || (ul = {}));
const Ye = {
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
    r === "center" ? l_({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : v_({
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
}, T_ = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1680942651462'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3789'%20data-darkreader-inline-fill=''%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M214.101333%20512c0-32.512%205.546667-63.701333%2015.36-92.928L57.173333%20290.218667A491.861333%20491.861333%200%200%200%204.693333%20512c0%2079.701333%2018.858667%20154.88%2052.394667%20221.610667l172.202667-129.066667A290.56%20290.56%200%200%201%20214.101333%20512'%20fill='%23FBBC05'%20p-id='3790'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23967002;'%3e%3c/path%3e%3cpath%20d='M516.693333%20216.192c72.106667%200%20137.258667%2025.002667%20188.458667%2065.962667L854.101333%20136.533333C763.349333%2059.178667%20646.997333%2011.392%20516.693333%2011.392c-202.325333%200-376.234667%20113.28-459.52%20278.826667l172.373334%20128.853333c39.68-118.016%20152.832-202.88%20287.146666-202.88'%20fill='%23EA4335'%20p-id='3791'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23a71d11;'%3e%3c/path%3e%3cpath%20d='M516.693333%20807.808c-134.357333%200-247.509333-84.864-287.232-202.88l-172.288%20128.853333c83.242667%20165.546667%20257.152%20278.826667%20459.52%20278.826667%20124.842667%200%20244.053333-43.392%20333.568-124.757333l-163.584-123.818667c-46.122667%2028.458667-104.234667%2043.776-170.026666%2043.776'%20fill='%2334A853'%20p-id='3792'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%232a8642;'%3e%3c/path%3e%3cpath%20d='M1005.397333%20512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696%2065.962667-51.072%20116.650667-104.533333%20149.632l163.541333%20123.818667c93.994667-85.418667%20155.136-212.650667%20155.136-375.850667'%20fill='%234285F4'%20p-id='3793'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%230943a2;'%3e%3c/path%3e%3c/svg%3e", k_ = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='240px'%20height='240px'%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNla'%20x1='11.905'%20x2='17.941'%20y1='1.952'%20y2='40.401'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffc'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNla)'%20d='M17.572,37.076L20,35.619V10.603c0-1.632-0.796-3.161-2.133-4.096L12.36,2.652%20C11.366,1.956,10,2.667,10,3.881V32.5c0,0.22,0.02,0.555,0.033,0.772C10.369,36.867,14.382,38.99,17.572,37.076z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlb'%20x1='14.342'%20x2='34.121'%20y1='41.478'%20y2='25.575'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2333bef0'/%3e%3cstop%20offset='.159'%20stop-color='%2332b9f0'/%3e%3cstop%20offset='.341'%20stop-color='%232facf2'/%3e%3cstop%20offset='.533'%20stop-color='%232a95f4'/%3e%3cstop%20offset='.733'%20stop-color='%232475f6'/%3e%3cstop%20offset='.936'%20stop-color='%231b4cfa'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlb)'%20d='M32.682,27.904L20,35.5v0l-2.428,1.457c-3.191,1.915-7.203-0.209-7.54-3.804%20C10.372,38.922,15.145,43.5,21,43.5c1.963,0,3.888-0.536,5.568-1.551l6.834-4.126c0.817-0.493,1.522-1.075,2.15-1.707%20C37.906,33.415,36.739,28.669,32.682,27.904z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlc'%20x1='24.223'%20x2='45.699'%20y1='17.113'%20y2='38.588'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffd'/%3e%3cstop%20offset='1'%20stop-color='%231de9b6'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlc)'%20d='M33.636,19.568l-7.607-3.803c-1.234-0.617-2.576,0.618-2.064,1.899l1.755,5.886%20c0.499,1.248,1.479,2.242,2.719,2.758L32.5,28c4.057,0.766,5.352,5.251,3.052,8.117C40.399,31.24,40.088,22.794,33.636,19.568z'/%3e%3c/svg%3e";
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function O_(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const dl = typeof window < "u", Rn = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), P_ = (e, t, n) => L_({ l: e, k: t, s: n }), L_ = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ke = (e) => typeof e == "number" && isFinite(e), I_ = (e) => As(e) === "[object Date]", Oo = (e) => As(e) === "[object RegExp]", qo = (e) => he(e) && Object.keys(e).length === 0, qe = Object.assign, A_ = Object.create, Se = (e = null) => A_(e);
let fl;
const io = () => fl || (fl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Se());
function pl(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function ml(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function R_(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${ml(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${ml(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const $_ = Object.prototype.hasOwnProperty;
function St(e, t) {
  return $_.call(e, t);
}
const Me = Array.isArray, Ie = (e) => typeof e == "function", J = (e) => typeof e == "string", Ne = (e) => typeof e == "boolean", ve = (e) => e !== null && typeof e == "object", N_ = (e) => ve(e) && Ie(e.then) && Ie(e.catch), ku = Object.prototype.toString, As = (e) => ku.call(e), he = (e) => As(e) === "[object Object]", M_ = (e) => e == null ? "" : Me(e) || he(e) && e.toString === ku ? JSON.stringify(e, null, 2) : String(e);
function Rs(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Xr = (e) => !ve(e) || Me(e);
function lo(e, t) {
  if (Xr(e) || Xr(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (ve(r[a]) && !ve(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : Se()), Xr(o[a]) || Xr(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function x_(e, t, n) {
  return { line: e, column: t, offset: n };
}
function $a(e, t, n) {
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
}, F_ = 17;
function Xo(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function D_(e) {
  throw e;
}
const It = " ", z_ = "\r", et = `
`, B_ = "\u2028", U_ = "\u2029";
function W_(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (C) => t[C] === z_ && t[C + 1] === et, i = (C) => t[C] === et, l = (C) => t[C] === U_, c = (C) => t[C] === B_, d = (C) => s(C) || i(C) || l(C) || c(C), p = () => n, m = () => r, g = () => o, h = () => a, v = (C) => s(C) || l(C) || c(C) ? et : t[C], S = () => v(n), u = () => v(n + a);
  function E() {
    return a = 0, d(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function y() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function w() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function k(C = 0) {
    a = C;
  }
  function O() {
    const C = n + a;
    for (; C !== n; )
      E();
    a = 0;
  }
  return {
    index: p,
    line: m,
    column: g,
    peekOffset: h,
    charAt: v,
    currentChar: S,
    currentPeek: u,
    next: E,
    peek: y,
    reset: w,
    resetPeek: k,
    skipToPeek: O
  };
}
const Vt = void 0, j_ = ".", gl = "'", V_ = "tokenizer";
function H_(e, t = {}) {
  const n = t.location !== !1, r = W_(e), o = () => r.index(), a = () => x_(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  }, c = () => l, { onError: d } = t;
  function p(_, T, N, ...Y) {
    const ge = c();
    if (T.column += N, T.offset += N, d) {
      const ie = n ? $a(ge.startLoc, T) : null, b = Xo(_, ie, {
        domain: V_,
        args: Y
      });
      d(b);
    }
  }
  function m(_, T, N) {
    _.endLoc = a(), _.currentType = T;
    const Y = { type: T };
    return n && (Y.loc = $a(_.startLoc, _.endLoc)), N != null && (Y.value = N), Y;
  }
  const g = (_) => m(
    _,
    13
    /* TokenTypes.EOF */
  );
  function h(_, T) {
    return _.currentChar() === T ? (_.next(), T) : (p(_e.EXPECTED_TOKEN, a(), 0, T), "");
  }
  function v(_) {
    let T = "";
    for (; _.currentPeek() === It || _.currentPeek() === et; )
      T += _.currentPeek(), _.peek();
    return T;
  }
  function S(_) {
    const T = v(_);
    return _.skipToPeek(), T;
  }
  function u(_) {
    if (_ === Vt)
      return !1;
    const T = _.charCodeAt(0);
    return T >= 97 && T <= 122 || // a-z
    T >= 65 && T <= 90 || // A-Z
    T === 95;
  }
  function E(_) {
    if (_ === Vt)
      return !1;
    const T = _.charCodeAt(0);
    return T >= 48 && T <= 57;
  }
  function y(_, T) {
    const { currentType: N } = T;
    if (N !== 2)
      return !1;
    v(_);
    const Y = u(_.currentPeek());
    return _.resetPeek(), Y;
  }
  function w(_, T) {
    const { currentType: N } = T;
    if (N !== 2)
      return !1;
    v(_);
    const Y = _.currentPeek() === "-" ? _.peek() : _.currentPeek(), ge = E(Y);
    return _.resetPeek(), ge;
  }
  function k(_, T) {
    const { currentType: N } = T;
    if (N !== 2)
      return !1;
    v(_);
    const Y = _.currentPeek() === gl;
    return _.resetPeek(), Y;
  }
  function O(_, T) {
    const { currentType: N } = T;
    if (N !== 7)
      return !1;
    v(_);
    const Y = _.currentPeek() === ".";
    return _.resetPeek(), Y;
  }
  function C(_, T) {
    const { currentType: N } = T;
    if (N !== 8)
      return !1;
    v(_);
    const Y = u(_.currentPeek());
    return _.resetPeek(), Y;
  }
  function D(_, T) {
    const { currentType: N } = T;
    if (!(N === 7 || N === 11))
      return !1;
    v(_);
    const Y = _.currentPeek() === ":";
    return _.resetPeek(), Y;
  }
  function x(_, T) {
    const { currentType: N } = T;
    if (N !== 9)
      return !1;
    const Y = () => {
      const ie = _.currentPeek();
      return ie === "{" ? u(_.peek()) : ie === "@" || ie === "|" || ie === ":" || ie === "." || ie === It || !ie ? !1 : ie === et ? (_.peek(), Y()) : oe(_, !1);
    }, ge = Y();
    return _.resetPeek(), ge;
  }
  function Z(_) {
    v(_);
    const T = _.currentPeek() === "|";
    return _.resetPeek(), T;
  }
  function oe(_, T = !0) {
    const N = (ge = !1, ie = "") => {
      const b = _.currentPeek();
      return b === "{" || b === "@" || !b ? ge : b === "|" ? !(ie === It || ie === et) : b === It ? (_.peek(), N(!0, It)) : b === et ? (_.peek(), N(!0, et)) : !0;
    }, Y = N();
    return T && _.resetPeek(), Y;
  }
  function P(_, T) {
    const N = _.currentChar();
    return N === Vt ? Vt : T(N) ? (_.next(), N) : null;
  }
  function V(_) {
    const T = _.charCodeAt(0);
    return T >= 97 && T <= 122 || // a-z
    T >= 65 && T <= 90 || // A-Z
    T >= 48 && T <= 57 || // 0-9
    T === 95 || // _
    T === 36;
  }
  function re(_) {
    return P(_, V);
  }
  function de(_) {
    const T = _.charCodeAt(0);
    return T >= 97 && T <= 122 || // a-z
    T >= 65 && T <= 90 || // A-Z
    T >= 48 && T <= 57 || // 0-9
    T === 95 || // _
    T === 36 || // $
    T === 45;
  }
  function ae(_) {
    return P(_, de);
  }
  function M(_) {
    const T = _.charCodeAt(0);
    return T >= 48 && T <= 57;
  }
  function ye(_) {
    return P(_, M);
  }
  function me(_) {
    const T = _.charCodeAt(0);
    return T >= 48 && T <= 57 || // 0-9
    T >= 65 && T <= 70 || // A-F
    T >= 97 && T <= 102;
  }
  function Le(_) {
    return P(_, me);
  }
  function He(_) {
    let T = "", N = "";
    for (; T = ye(_); )
      N += T;
    return N;
  }
  function Xe(_) {
    let T = "";
    for (; ; ) {
      const N = _.currentChar();
      if (N === "{" || N === "}" || N === "@" || N === "|" || !N)
        break;
      if (N === It || N === et)
        if (oe(_))
          T += N, _.next();
        else {
          if (Z(_))
            break;
          T += N, _.next();
        }
      else
        T += N, _.next();
    }
    return T;
  }
  function nt(_) {
    S(_);
    let T = "", N = "";
    for (; T = ae(_); )
      N += T;
    const Y = _.currentChar();
    if (Y && Y !== "}" && Y !== Vt && Y !== It && Y !== et && Y !== "　") {
      const ge = Te(_);
      return p(_e.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, N + ge), N + ge;
    }
    return _.currentChar() === Vt && p(_e.UNTERMINATED_CLOSING_BRACE, a(), 0), N;
  }
  function $e(_) {
    S(_);
    let T = "";
    return _.currentChar() === "-" ? (_.next(), T += `-${He(_)}`) : T += He(_), _.currentChar() === Vt && p(_e.UNTERMINATED_CLOSING_BRACE, a(), 0), T;
  }
  function ze(_) {
    return _ !== gl && _ !== et;
  }
  function U(_) {
    S(_), h(_, "'");
    let T = "", N = "";
    for (; T = P(_, ze); )
      T === "\\" ? N += Q(_) : N += T;
    const Y = _.currentChar();
    return Y === et || Y === Vt ? (p(_e.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), Y === et && (_.next(), h(_, "'")), N) : (h(_, "'"), N);
  }
  function Q(_) {
    const T = _.currentChar();
    switch (T) {
      case "\\":
      case "'":
        return _.next(), `\\${T}`;
      case "u":
        return te(_, T, 4);
      case "U":
        return te(_, T, 6);
      default:
        return p(_e.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, T), "";
    }
  }
  function te(_, T, N) {
    h(_, T);
    let Y = "";
    for (let ge = 0; ge < N; ge++) {
      const ie = Le(_);
      if (!ie) {
        p(_e.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${T}${Y}${_.currentChar()}`);
        break;
      }
      Y += ie;
    }
    return `\\${T}${Y}`;
  }
  function Ce(_) {
    return _ !== "{" && _ !== "}" && _ !== It && _ !== et;
  }
  function Te(_) {
    S(_);
    let T = "", N = "";
    for (; T = P(_, Ce); )
      N += T;
    return N;
  }
  function Ee(_) {
    let T = "", N = "";
    for (; T = re(_); )
      N += T;
    return N;
  }
  function Ge(_) {
    const T = (N) => {
      const Y = _.currentChar();
      return Y === "{" || Y === "@" || Y === "|" || Y === "(" || Y === ")" || !Y || Y === It ? N : (N += Y, _.next(), T(N));
    };
    return T("");
  }
  function le(_) {
    S(_);
    const T = h(
      _,
      "|"
      /* TokenChars.Pipe */
    );
    return S(_), T;
  }
  function Be(_, T) {
    let N = null;
    switch (_.currentChar()) {
      case "{":
        return T.braceNest >= 1 && p(_e.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), _.next(), N = m(
          T,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), S(_), T.braceNest++, N;
      case "}":
        return T.braceNest > 0 && T.currentType === 2 && p(_e.EMPTY_PLACEHOLDER, a(), 0), _.next(), N = m(
          T,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), T.braceNest--, T.braceNest > 0 && S(_), T.inLinked && T.braceNest === 0 && (T.inLinked = !1), N;
      case "@":
        return T.braceNest > 0 && p(_e.UNTERMINATED_CLOSING_BRACE, a(), 0), N = lt(_, T) || g(T), T.braceNest = 0, N;
      default: {
        let ge = !0, ie = !0, b = !0;
        if (Z(_))
          return T.braceNest > 0 && p(_e.UNTERMINATED_CLOSING_BRACE, a(), 0), N = m(T, 1, le(_)), T.braceNest = 0, T.inLinked = !1, N;
        if (T.braceNest > 0 && (T.currentType === 4 || T.currentType === 5 || T.currentType === 6))
          return p(_e.UNTERMINATED_CLOSING_BRACE, a(), 0), T.braceNest = 0, pt(_, T);
        if (ge = y(_, T))
          return N = m(T, 4, nt(_)), S(_), N;
        if (ie = w(_, T))
          return N = m(T, 5, $e(_)), S(_), N;
        if (b = k(_, T))
          return N = m(T, 6, U(_)), S(_), N;
        if (!ge && !ie && !b)
          return N = m(T, 12, Te(_)), p(_e.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, N.value), S(_), N;
        break;
      }
    }
    return N;
  }
  function lt(_, T) {
    const { currentType: N } = T;
    let Y = null;
    const ge = _.currentChar();
    switch ((N === 7 || N === 8 || N === 11 || N === 9) && (ge === et || ge === It) && p(_e.INVALID_LINKED_FORMAT, a(), 0), ge) {
      case "@":
        return _.next(), Y = m(
          T,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), T.inLinked = !0, Y;
      case ".":
        return S(_), _.next(), m(
          T,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return S(_), _.next(), m(
          T,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return Z(_) ? (Y = m(T, 1, le(_)), T.braceNest = 0, T.inLinked = !1, Y) : O(_, T) || D(_, T) ? (S(_), lt(_, T)) : C(_, T) ? (S(_), m(T, 11, Ee(_))) : x(_, T) ? (S(_), ge === "{" ? Be(_, T) || Y : m(T, 10, Ge(_))) : (N === 7 && p(_e.INVALID_LINKED_FORMAT, a(), 0), T.braceNest = 0, T.inLinked = !1, pt(_, T));
    }
  }
  function pt(_, T) {
    let N = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (T.braceNest > 0)
      return Be(_, T) || g(T);
    if (T.inLinked)
      return lt(_, T) || g(T);
    switch (_.currentChar()) {
      case "{":
        return Be(_, T) || g(T);
      case "}":
        return p(_e.UNBALANCED_CLOSING_BRACE, a(), 0), _.next(), m(
          T,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return lt(_, T) || g(T);
      default: {
        if (Z(_))
          return N = m(T, 1, le(_)), T.braceNest = 0, T.inLinked = !1, N;
        if (oe(_))
          return m(T, 0, Xe(_));
        break;
      }
    }
    return N;
  }
  function Lt() {
    const { currentType: _, offset: T, startLoc: N, endLoc: Y } = l;
    return l.lastType = _, l.lastOffset = T, l.lastStartLoc = N, l.lastEndLoc = Y, l.offset = o(), l.startLoc = a(), r.currentChar() === Vt ? m(
      l,
      13
      /* TokenTypes.EOF */
    ) : pt(r, l);
  }
  return {
    nextToken: Lt,
    currentOffset: o,
    currentPosition: a,
    context: c
  };
}
const K_ = "parser", G_ = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Y_(e, t, n) {
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
function Z_(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(u, E, y, w, ...k) {
    const O = u.currentPosition();
    if (O.offset += w, O.column += w, n) {
      const C = t ? $a(y, O) : null, D = Xo(E, C, {
        domain: K_,
        args: k
      });
      n(D);
    }
  }
  function o(u, E, y) {
    const w = { type: u };
    return t && (w.start = E, w.end = E, w.loc = { start: y, end: y }), w;
  }
  function a(u, E, y, w) {
    t && (u.end = E, u.loc && (u.loc.end = y));
  }
  function s(u, E) {
    const y = u.context(), w = o(3, y.offset, y.startLoc);
    return w.value = E, a(w, u.currentOffset(), u.currentPosition()), w;
  }
  function i(u, E) {
    const y = u.context(), { lastOffset: w, lastStartLoc: k } = y, O = o(5, w, k);
    return O.index = parseInt(E, 10), u.nextToken(), a(O, u.currentOffset(), u.currentPosition()), O;
  }
  function l(u, E) {
    const y = u.context(), { lastOffset: w, lastStartLoc: k } = y, O = o(4, w, k);
    return O.key = E, u.nextToken(), a(O, u.currentOffset(), u.currentPosition()), O;
  }
  function c(u, E) {
    const y = u.context(), { lastOffset: w, lastStartLoc: k } = y, O = o(9, w, k);
    return O.value = E.replace(G_, Y_), u.nextToken(), a(O, u.currentOffset(), u.currentPosition()), O;
  }
  function d(u) {
    const E = u.nextToken(), y = u.context(), { lastOffset: w, lastStartLoc: k } = y, O = o(8, w, k);
    return E.type !== 11 ? (r(u, _e.UNEXPECTED_EMPTY_LINKED_MODIFIER, y.lastStartLoc, 0), O.value = "", a(O, w, k), {
      nextConsumeToken: E,
      node: O
    }) : (E.value == null && r(u, _e.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, At(E)), O.value = E.value || "", a(O, u.currentOffset(), u.currentPosition()), {
      node: O
    });
  }
  function p(u, E) {
    const y = u.context(), w = o(7, y.offset, y.startLoc);
    return w.value = E, a(w, u.currentOffset(), u.currentPosition()), w;
  }
  function m(u) {
    const E = u.context(), y = o(6, E.offset, E.startLoc);
    let w = u.nextToken();
    if (w.type === 8) {
      const k = d(u);
      y.modifier = k.node, w = k.nextConsumeToken || u.nextToken();
    }
    switch (w.type !== 9 && r(u, _e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, At(w)), w = u.nextToken(), w.type === 2 && (w = u.nextToken()), w.type) {
      case 10:
        w.value == null && r(u, _e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, At(w)), y.key = p(u, w.value || "");
        break;
      case 4:
        w.value == null && r(u, _e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, At(w)), y.key = l(u, w.value || "");
        break;
      case 5:
        w.value == null && r(u, _e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, At(w)), y.key = i(u, w.value || "");
        break;
      case 6:
        w.value == null && r(u, _e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, At(w)), y.key = c(u, w.value || "");
        break;
      default: {
        r(u, _e.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
        const k = u.context(), O = o(7, k.offset, k.startLoc);
        return O.value = "", a(O, k.offset, k.startLoc), y.key = O, a(y, k.offset, k.startLoc), {
          nextConsumeToken: w,
          node: y
        };
      }
    }
    return a(y, u.currentOffset(), u.currentPosition()), {
      node: y
    };
  }
  function g(u) {
    const E = u.context(), y = E.currentType === 1 ? u.currentOffset() : E.offset, w = E.currentType === 1 ? E.endLoc : E.startLoc, k = o(2, y, w);
    k.items = [];
    let O = null;
    do {
      const x = O || u.nextToken();
      switch (O = null, x.type) {
        case 0:
          x.value == null && r(u, _e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, At(x)), k.items.push(s(u, x.value || ""));
          break;
        case 5:
          x.value == null && r(u, _e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, At(x)), k.items.push(i(u, x.value || ""));
          break;
        case 4:
          x.value == null && r(u, _e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, At(x)), k.items.push(l(u, x.value || ""));
          break;
        case 6:
          x.value == null && r(u, _e.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, At(x)), k.items.push(c(u, x.value || ""));
          break;
        case 7: {
          const Z = m(u);
          k.items.push(Z.node), O = Z.nextConsumeToken || null;
          break;
        }
      }
    } while (E.currentType !== 13 && E.currentType !== 1);
    const C = E.currentType === 1 ? E.lastOffset : u.currentOffset(), D = E.currentType === 1 ? E.lastEndLoc : u.currentPosition();
    return a(k, C, D), k;
  }
  function h(u, E, y, w) {
    const k = u.context();
    let O = w.items.length === 0;
    const C = o(1, E, y);
    C.cases = [], C.cases.push(w);
    do {
      const D = g(u);
      O || (O = D.items.length === 0), C.cases.push(D);
    } while (k.currentType !== 13);
    return O && r(u, _e.MUST_HAVE_MESSAGES_IN_PLURAL, y, 0), a(C, u.currentOffset(), u.currentPosition()), C;
  }
  function v(u) {
    const E = u.context(), { offset: y, startLoc: w } = E, k = g(u);
    return E.currentType === 13 ? k : h(u, y, w, k);
  }
  function S(u) {
    const E = H_(u, qe({}, e)), y = E.context(), w = o(0, y.offset, y.startLoc);
    return t && w.loc && (w.loc.source = u), w.body = v(E), e.onCacheKey && (w.cacheKey = e.onCacheKey(u)), y.currentType !== 13 && r(E, _e.UNEXPECTED_LEXICAL_ANALYSIS, y.lastStartLoc, 0, u[y.offset] || ""), a(w, E.currentOffset(), E.currentPosition()), w;
  }
  return { parse: S };
}
function At(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function q_(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function hl(e, t) {
  for (let n = 0; n < e.length; n++)
    $s(e[n], t);
}
function $s(e, t) {
  switch (e.type) {
    case 1:
      hl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      hl(e.items, t);
      break;
    case 6: {
      $s(e.key, t), t.helper(
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
function X_(e, t = {}) {
  const n = q_(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && $s(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function J_(e) {
  const t = e.body;
  return t.type === 2 ? vl(t) : t.cases.forEach((n) => vl(n)), e;
}
function vl(e) {
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
      e.static = Rs(t);
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
function Q_(e, t) {
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
  function l(v, S) {
    s.code += v;
  }
  function c(v, S = !0) {
    const u = S ? r : "";
    l(o ? u + "  ".repeat(v) : u);
  }
  function d(v = !0) {
    const S = ++s.indentLevel;
    v && c(S);
  }
  function p(v = !0) {
    const S = --s.indentLevel;
    v && c(S);
  }
  function m() {
    c(s.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: d,
    deindent: p,
    newline: m,
    helper: (v) => `_${v}`,
    needIndent: () => s.needIndent
  };
}
function e1(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Qn(e, t.key), t.modifier ? (e.push(", "), Qn(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function t1(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (Qn(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function n1(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (Qn(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function r1(e, t) {
  t.body ? Qn(e, t.body) : e.push("null");
}
function Qn(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      r1(e, t);
      break;
    case 1:
      n1(e, t);
      break;
    case 2:
      t1(e, t);
      break;
    case 6:
      e1(e, t);
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
const o1 = (e, t = {}) => {
  const n = J(t.mode) ? t.mode : "normal", r = J(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = Q_(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${Rs(s.map((d) => `${d}: _${d}`), ", ")} } = ctx`), i.newline()), i.push("return "), Qn(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: c } = i.context();
  return {
    ast: e,
    code: l,
    map: c ? c.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function a1(e, t = {}) {
  const n = qe({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = Z_(n).parse(e);
  return r ? (a && J_(i), o && zn(i), { ast: i, code: "" }) : (X_(i, n), o1(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function s1() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (io().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Dt(e) {
  return ve(e) && Ns(e) === 0 && (St(e, "b") || St(e, "body"));
}
const Ou = ["b", "body"];
function i1(e) {
  return bn(e, Ou);
}
const Pu = ["c", "cases"];
function l1(e) {
  return bn(e, Pu, []);
}
const Lu = ["s", "static"];
function c1(e) {
  return bn(e, Lu);
}
const Iu = ["i", "items"];
function u1(e) {
  return bn(e, Iu, []);
}
const Au = ["t", "type"];
function Ns(e) {
  return bn(e, Au);
}
const Ru = ["v", "value"];
function Jr(e, t) {
  const n = bn(e, Ru);
  if (n != null)
    return n;
  throw $r(t);
}
const $u = ["m", "modifier"];
function d1(e) {
  return bn(e, $u);
}
const Nu = ["k", "key"];
function f1(e) {
  const t = bn(e, Nu);
  if (t)
    return t;
  throw $r(
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
const Mu = [
  ...Ou,
  ...Pu,
  ...Lu,
  ...Iu,
  ...Nu,
  ...$u,
  ...Ru,
  ...Au
];
function $r(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ua(e) {
  return (n) => p1(n, e);
}
function p1(e, t) {
  const n = i1(t);
  if (n == null)
    throw $r(
      0
      /* NodeTypes.Resource */
    );
  if (Ns(n) === 1) {
    const a = l1(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      yl(e, i)
    ], []));
  } else
    return yl(e, n);
}
function yl(e, t) {
  const n = c1(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = u1(t).reduce((o, a) => [...o, Na(e, a)], []);
    return e.normalize(r);
  }
}
function Na(e, t) {
  const n = Ns(t);
  switch (n) {
    case 3:
      return Jr(t, n);
    case 9:
      return Jr(t, n);
    case 4: {
      const r = t;
      if (St(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (St(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw $r(n);
    }
    case 5: {
      const r = t;
      if (St(r, "i") && Ke(r.i))
        return e.interpolate(e.list(r.i));
      if (St(r, "index") && Ke(r.index))
        return e.interpolate(e.list(r.index));
      throw $r(n);
    }
    case 6: {
      const r = t, o = d1(r), a = f1(r);
      return e.linked(Na(e, a), o ? Na(e, o) : void 0, e.type);
    }
    case 7:
      return Jr(t, n);
    case 8:
      return Jr(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const m1 = (e) => e;
let Qr = Se();
function g1(e, t = {}) {
  let n = !1;
  const r = t.onError || D_;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...a1(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function h1(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && J(e)) {
    Ne(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || m1)(e), o = Qr[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = g1(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = ua(a);
    return s ? i : Qr[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Qr[n];
      return r || (Qr[n] = ua(e));
    } else
      return ua(e);
  }
}
const Zt = {
  INVALID_ARGUMENT: F_,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, v1 = 24;
function qt(e) {
  return Xo(e, null, void 0);
}
function Ms(e, t) {
  return t.locale != null ? bl(t.locale) : bl(e.locale);
}
let da;
function bl(e) {
  if (J(e))
    return e;
  if (Ie(e)) {
    if (e.resolvedOnce && da != null)
      return da;
    if (e.constructor.name === "Function") {
      const t = e();
      if (N_(t))
        throw qt(Zt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return da = t;
    } else
      throw qt(Zt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw qt(Zt.NOT_SUPPORT_LOCALE_TYPE);
}
function y1(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...Me(t) ? t : ve(t) ? Object.keys(t) : J(t) ? [t] : [n]
  ])];
}
function xu(e, t, n) {
  const r = J(n) ? n : Po, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; Me(s); )
      s = _l(a, s, t);
    const i = Me(t) || !he(t) ? t : t.default ? t.default : null;
    s = J(i) ? [i] : i, Me(s) && _l(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function _l(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && Ne(r); o++) {
    const a = t[o];
    J(a) && (r = b1(e, t[o], n));
  }
  return r;
}
function b1(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = _1(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function _1(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (Me(n) || he(n)) && n[o] && (r = n[o]);
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
const w1 = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function E1(e) {
  return w1.test(e);
}
function S1(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function C1(e) {
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
function T1(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : E1(t) ? S1(t) : "*" + t;
}
function k1(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, i, l, c, d, p;
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
      if (o = 0, s === void 0 || (s = T1(s), s === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function g() {
    const h = e[n + 1];
    if (r === 5 && h === "'" || r === 6 && h === '"')
      return n++, i = "\\" + h, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && g())) {
      if (l = C1(a), p = _n[r], c = p[l] || p.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (d = m[c[1]], d && (i = a, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const wl = /* @__PURE__ */ new Map();
function O1(e, t) {
  return ve(e) ? e[t] : null;
}
function P1(e, t) {
  if (!ve(e))
    return null;
  let n = wl.get(t);
  if (n || (n = k1(t), n && wl.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Mu.includes(s) && Dt(o))
      return null;
    const i = o[s];
    if (i === void 0 || Ie(o))
      return null;
    o = i, a++;
  }
  return o;
}
const L1 = "11.2.2", Jo = -1, Po = "en-US", El = "", Sl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function I1() {
  return {
    upper: (e, t) => t === "text" && J(e) ? e.toUpperCase() : t === "vnode" && ve(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && J(e) ? e.toLowerCase() : t === "vnode" && ve(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && J(e) ? Sl(e) : t === "vnode" && ve(e) && "__v_isVNode" in e ? Sl(e.children) : e
  };
}
let Fu;
function A1(e) {
  Fu = e;
}
let Du;
function R1(e) {
  Du = e;
}
let zu;
function $1(e) {
  zu = e;
}
let Bu = null;
const Cl = (e) => {
  Bu = e;
}, N1 = () => Bu;
let Tl = 0;
function M1(e = {}) {
  const t = Ie(e.onWarn) ? e.onWarn : O_, n = J(e.version) ? e.version : L1, r = J(e.locale) || Ie(e.locale) ? e.locale : Po, o = Ie(r) ? Po : r, a = Me(e.fallbackLocale) || he(e.fallbackLocale) || J(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = he(e.messages) ? e.messages : fa(o), i = he(e.datetimeFormats) ? e.datetimeFormats : fa(o), l = he(e.numberFormats) ? e.numberFormats : fa(o), c = qe(Se(), e.modifiers, I1()), d = e.pluralRules || Se(), p = Ie(e.missing) ? e.missing : null, m = Ne(e.missingWarn) || Oo(e.missingWarn) ? e.missingWarn : !0, g = Ne(e.fallbackWarn) || Oo(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, v = !!e.unresolving, S = Ie(e.postTranslation) ? e.postTranslation : null, u = he(e.processor) ? e.processor : null, E = Ne(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter, w = Ie(e.messageCompiler) ? e.messageCompiler : Fu, k = Ie(e.messageResolver) ? e.messageResolver : Du || O1, O = Ie(e.localeFallbacker) ? e.localeFallbacker : zu || y1, C = ve(e.fallbackContext) ? e.fallbackContext : void 0, D = e, x = ve(D.__datetimeFormatters) ? D.__datetimeFormatters : /* @__PURE__ */ new Map(), Z = ve(D.__numberFormatters) ? D.__numberFormatters : /* @__PURE__ */ new Map(), oe = ve(D.__meta) ? D.__meta : {};
  Tl++;
  const P = {
    version: n,
    cid: Tl,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: c,
    pluralRules: d,
    missing: p,
    missingWarn: m,
    fallbackWarn: g,
    fallbackFormat: h,
    unresolving: v,
    postTranslation: S,
    processor: u,
    warnHtmlMessage: E,
    escapeParameter: y,
    messageCompiler: w,
    messageResolver: k,
    localeFallbacker: O,
    fallbackContext: C,
    onWarn: t,
    __meta: oe
  };
  return P.datetimeFormats = i, P.numberFormats = l, P.__datetimeFormatters = x, P.__numberFormatters = Z, P;
}
const fa = (e) => ({ [e]: Se() });
function xs(e, t, n, r, o) {
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
function x1(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function F1(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (x1(e, t[r]))
      return !0;
  return !1;
}
function kl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, c, d, p] = Ma(...t), m = Ne(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Ne(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const g = !!d.part, h = Ms(e, d), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!J(l) || l === "")
    return new Intl.DateTimeFormat(h, p).format(c);
  let S = {}, u, E = null;
  const y = "datetime format";
  for (let O = 0; O < v.length && (u = v[O], S = n[u] || {}, E = S[l], !he(E)); O++)
    xs(e, l, u, m, y);
  if (!he(E) || !J(u))
    return r ? Jo : l;
  let w = `${u}__${l}`;
  qo(p) || (w = `${w}__${JSON.stringify(p)}`);
  let k = i.get(w);
  return k || (k = new Intl.DateTimeFormat(u, qe({}, E, p)), i.set(w, k)), g ? k.formatToParts(c) : k.format(c);
}
const Uu = [
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
function Ma(...e) {
  const [t, n, r, o] = e, a = Se();
  let s = Se(), i;
  if (J(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw qt(Zt.INVALID_ISO_DATE_ARGUMENT);
    const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(c);
    try {
      i.toISOString();
    } catch {
      throw qt(Zt.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (I_(t)) {
    if (isNaN(t.getTime()))
      throw qt(Zt.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Ke(t))
    i = t;
  else
    throw qt(Zt.INVALID_ARGUMENT);
  return J(n) ? a.key = n : he(n) && Object.keys(n).forEach((l) => {
    Uu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), J(r) ? a.locale = r : he(r) && (s = r), he(o) && (s = o), [a.key || "", i, a, s];
}
function Ol(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Pl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, c, d, p] = xa(...t), m = Ne(d.missingWarn) ? d.missingWarn : e.missingWarn;
  Ne(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const g = !!d.part, h = Ms(e, d), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!J(l) || l === "")
    return new Intl.NumberFormat(h, p).format(c);
  let S = {}, u, E = null;
  const y = "number format";
  for (let O = 0; O < v.length && (u = v[O], S = n[u] || {}, E = S[l], !he(E)); O++)
    xs(e, l, u, m, y);
  if (!he(E) || !J(u))
    return r ? Jo : l;
  let w = `${u}__${l}`;
  qo(p) || (w = `${w}__${JSON.stringify(p)}`);
  let k = i.get(w);
  return k || (k = new Intl.NumberFormat(u, qe({}, E, p)), i.set(w, k)), g ? k.formatToParts(c) : k.format(c);
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
function xa(...e) {
  const [t, n, r, o] = e, a = Se();
  let s = Se();
  if (!Ke(t))
    throw qt(Zt.INVALID_ARGUMENT);
  const i = t;
  return J(n) ? a.key = n : he(n) && Object.keys(n).forEach((l) => {
    Wu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), J(r) ? a.locale = r : he(r) && (s = r), he(o) && (s = o), [a.key || "", i, a, s];
}
function Ll(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const D1 = (e) => e, z1 = (e) => "", B1 = "text", U1 = (e) => e.length === 0 ? "" : Rs(e), W1 = M_;
function Il(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function j1(e) {
  const t = Ke(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ke(e.named.count) || Ke(e.named.n)) ? Ke(e.named.count) ? e.named.count : Ke(e.named.n) ? e.named.n : t : t;
}
function V1(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function H1(e = {}) {
  const t = e.locale, n = j1(e), r = ve(e.pluralRules) && J(t) && Ie(e.pluralRules[t]) ? e.pluralRules[t] : Il, o = ve(e.pluralRules) && J(t) && Ie(e.pluralRules[t]) ? Il : void 0, a = (u) => u[r(n, u.length, o)], s = e.list || [], i = (u) => s[u], l = e.named || Se();
  Ke(e.pluralIndex) && V1(n, l);
  const c = (u) => l[u];
  function d(u, E) {
    const y = Ie(e.messages) ? e.messages(u, !!E) : ve(e.messages) ? e.messages[u] : !1;
    return y || (e.parent ? e.parent.message(u) : z1);
  }
  const p = (u) => e.modifiers ? e.modifiers[u] : D1, m = he(e.processor) && Ie(e.processor.normalize) ? e.processor.normalize : U1, g = he(e.processor) && Ie(e.processor.interpolate) ? e.processor.interpolate : W1, h = he(e.processor) && J(e.processor.type) ? e.processor.type : B1, S = {
    list: i,
    named: c,
    plural: a,
    linked: (u, ...E) => {
      const [y, w] = E;
      let k = "text", O = "";
      E.length === 1 ? ve(y) ? (O = y.modifier || O, k = y.type || k) : J(y) && (O = y || O) : E.length === 2 && (J(y) && (O = y || O), J(w) && (k = w || k));
      const C = d(u, !0)(S), D = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        k === "vnode" && Me(C) && O ? C[0] : C
      );
      return O ? p(O)(D, k) : D;
    },
    message: d,
    type: h,
    interpolate: g,
    normalize: m,
    values: qe(Se(), s, l)
  };
  return S;
}
const Al = () => "", en = (e) => Ie(e);
function Rl(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, c] = Fa(...t), d = Ne(c.missingWarn) ? c.missingWarn : e.missingWarn, p = Ne(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, m = Ne(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, g = !!c.resolvedMessage, h = J(c.default) || Ne(c.default) ? Ne(c.default) ? a ? l : () => l : c.default : n ? a ? l : () => l : null, v = n || h != null && (J(h) || Ie(h)), S = Ms(e, c);
  m && K1(c);
  let [u, E, y] = g ? [
    l,
    S,
    i[S] || Se()
  ] : ju(e, l, S, s, p, d), w = u, k = l;
  if (!g && !(J(w) || Dt(w) || en(w)) && v && (w = h, k = w), !g && (!(J(w) || Dt(w) || en(w)) || !J(E)))
    return o ? Jo : l;
  let O = !1;
  const C = () => {
    O = !0;
  }, D = en(w) ? w : Vu(e, l, E, w, k, C);
  if (O)
    return w;
  const x = Z1(e, E, y, c), Z = H1(x), oe = G1(e, D, Z);
  let P = r ? r(oe, l) : oe;
  return m && J(P) && (P = R_(P)), P;
}
function K1(e) {
  Me(e.list) ? e.list = e.list.map((t) => J(t) ? pl(t) : t) : ve(e.named) && Object.keys(e.named).forEach((t) => {
    J(e.named[t]) && (e.named[t] = pl(e.named[t]));
  });
}
function ju(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: c } = e, d = c(e, r, n);
  let p = Se(), m, g = null;
  const h = "translate";
  for (let v = 0; v < d.length && (m = d[v], p = s[m] || Se(), (g = l(p, t)) === null && (g = p[t]), !(J(g) || Dt(g) || en(g))); v++)
    if (!F1(m, d)) {
      const S = xs(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        a,
        h
      );
      S !== t && (g = S);
    }
  return [g, m, p];
}
function Vu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (en(r)) {
    const c = r;
    return c.locale = c.locale || n, c.key = c.key || t, c;
  }
  if (s == null) {
    const c = () => r;
    return c.locale = n, c.key = t, c;
  }
  const l = s(r, Y1(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function G1(e, t, n) {
  return t(n);
}
function Fa(...e) {
  const [t, n, r] = e, o = Se();
  if (!J(t) && !Ke(t) && !en(t) && !Dt(t))
    throw qt(Zt.INVALID_ARGUMENT);
  const a = Ke(t) ? String(t) : (en(t), t);
  return Ke(n) ? o.plural = n : J(n) ? o.default = n : he(n) && !qo(n) ? o.named = n : Me(n) && (o.list = n), Ke(r) ? o.plural = r : J(r) ? o.default = r : he(r) && qe(o, r), [a, o];
}
function Y1(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => P_(t, n, s)
  };
}
function Z1(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: c, fallbackContext: d } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (g, h) => {
      let v = s(n, g);
      if (v == null && (d || h)) {
        const [, , S] = ju(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          g,
          t,
          i,
          l,
          c
        );
        v = s(S, g);
      }
      if (J(v) || Dt(v)) {
        let S = !1;
        const E = Vu(e, g, t, v, g, () => {
          S = !0;
        });
        return S ? Al : E;
      } else return en(v) ? v : Al;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), Ke(r.plural) && (m.pluralIndex = r.plural), m;
}
s1();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const q1 = "11.2.2";
function X1() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (io().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (io().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (io().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const er = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: v1,
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
function Nr(e, ...t) {
  return Xo(e, null, void 0);
}
const Da = /* @__PURE__ */ Rn("__translateVNode"), za = /* @__PURE__ */ Rn("__datetimeParts"), Ba = /* @__PURE__ */ Rn("__numberParts"), J1 = Rn("__setPluralRules"), Hu = /* @__PURE__ */ Rn("__injectWithOption"), Ua = /* @__PURE__ */ Rn("__dispose");
function Mr(e) {
  if (!ve(e) || Dt(e))
    return e;
  for (const t in e)
    if (St(e, t))
      if (!t.includes("."))
        ve(e[t]) && Mr(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = Se()), !ve(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (Dt(o) ? Mu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Dt(o)) {
          const s = o[n[r]];
          ve(s) && Mr(s);
        }
      }
  return e;
}
function Ku(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = he(n) ? n : Me(r) ? Se() : { [e]: Se() };
  if (Me(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: c } = i;
      l ? (s[l] = s[l] || Se(), lo(c, s[l])) : lo(c, s);
    } else
      J(i) && lo(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      St(s, i) && Mr(s[i]);
  return s;
}
function Q1(e) {
  return e.type;
}
function ew(e, t, n) {
  let r = ve(t.messages) ? t.messages : Se();
  "__i18nGlobal" in n && (r = Ku(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (ve(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (ve(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function $l(e) {
  return j(Xl, null, e, 0);
}
function Gu() {
  return "currentInstance" in ro ? ro["currentInstance"] : ro.getCurrentInstance();
}
const Nl = () => [], tw = () => !1;
let Ml = 0;
function xl(e) {
  return (t, n, r, o) => e(n, r, Gu() || void 0, o);
}
function nw(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = dl ? z : mn;
  let s = Ne(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : J(e.locale) ? e.locale : Po
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : J(e.fallbackLocale) || Me(e.fallbackLocale) || he(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), c = a(Ku(i.value, e)), d = a(he(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = a(he(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : Ne(e.missingWarn) || Oo(e.missingWarn) ? e.missingWarn : !0, g = t ? t.fallbackWarn : Ne(e.fallbackWarn) || Oo(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : Ne(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, S = Ie(e.missing) ? e.missing : null, u = Ie(e.missing) ? xl(e.missing) : null, E = Ie(e.postTranslation) ? e.postTranslation : null, y = t ? t.warnHtmlMessage : Ne(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, w = !!e.escapeParameter;
  const k = t ? t.modifiers : he(e.modifiers) ? e.modifiers : {};
  let O = e.pluralRules || t && t.pluralRules, C;
  C = (() => {
    r && Cl(null);
    const b = {
      version: q1,
      locale: i.value,
      fallbackLocale: l.value,
      messages: c.value,
      modifiers: k,
      pluralRules: O,
      missing: u === null ? void 0 : u,
      missingWarn: m,
      fallbackWarn: g,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: E === null ? void 0 : E,
      warnHtmlMessage: y,
      escapeParameter: w,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    b.datetimeFormats = d.value, b.numberFormats = p.value, b.__datetimeFormatters = he(C) ? C.__datetimeFormatters : void 0, b.__numberFormatters = he(C) ? C.__numberFormatters : void 0;
    const $ = M1(b);
    return r && Cl($), $;
  })(), ur(C, i.value, l.value);
  function x() {
    return [
      i.value,
      l.value,
      c.value,
      d.value,
      p.value
    ];
  }
  const Z = L({
    get: () => i.value,
    set: (b) => {
      C.locale = b, i.value = b;
    }
  }), oe = L({
    get: () => l.value,
    set: (b) => {
      C.fallbackLocale = b, l.value = b, ur(C, i.value, b);
    }
  }), P = L(() => c.value), V = /* @__PURE__ */ L(() => d.value), re = /* @__PURE__ */ L(() => p.value);
  function de() {
    return Ie(E) ? E : null;
  }
  function ae(b) {
    E = b, C.postTranslation = b;
  }
  function M() {
    return S;
  }
  function ye(b) {
    b !== null && (u = xl(b)), S = b, C.missing = u;
  }
  const me = (b, $, fe, be, Je, wn) => {
    x();
    let mt;
    try {
      r || (C.fallbackContext = t ? N1() : void 0), mt = b(C);
    } finally {
      r || (C.fallbackContext = void 0);
    }
    if (fe !== "translate exists" && // for not `te` (e.g `t`)
    Ke(mt) && mt === Jo || fe === "translate exists" && !mt) {
      const [ta, Us] = $();
      return t && h ? be(t) : Je(ta);
    } else {
      if (wn(mt))
        return mt;
      throw Nr(er.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Le(...b) {
    return me(($) => Reflect.apply(Rl, null, [$, ...b]), () => Fa(...b), "translate", ($) => Reflect.apply($.t, $, [...b]), ($) => $, ($) => J($));
  }
  function He(...b) {
    const [$, fe, be] = b;
    if (be && !ve(be))
      throw Nr(er.INVALID_ARGUMENT);
    return Le($, fe, qe({ resolvedMessage: !0 }, be || {}));
  }
  function Xe(...b) {
    return me(($) => Reflect.apply(kl, null, [$, ...b]), () => Ma(...b), "datetime format", ($) => Reflect.apply($.d, $, [...b]), () => El, ($) => J($) || Me($));
  }
  function nt(...b) {
    return me(($) => Reflect.apply(Pl, null, [$, ...b]), () => xa(...b), "number format", ($) => Reflect.apply($.n, $, [...b]), () => El, ($) => J($) || Me($));
  }
  function $e(b) {
    return b.map(($) => J($) || Ke($) || Ne($) ? $l(String($)) : $);
  }
  const U = {
    normalize: $e,
    interpolate: (b) => b,
    type: "vnode"
  };
  function Q(...b) {
    return me(($) => {
      let fe;
      const be = $;
      try {
        be.processor = U, fe = Reflect.apply(Rl, null, [be, ...b]);
      } finally {
        be.processor = null;
      }
      return fe;
    }, () => Fa(...b), "translate", ($) => $[Da](...b), ($) => [$l($)], ($) => Me($));
  }
  function te(...b) {
    return me(($) => Reflect.apply(Pl, null, [$, ...b]), () => xa(...b), "number format", ($) => $[Ba](...b), Nl, ($) => J($) || Me($));
  }
  function Ce(...b) {
    return me(($) => Reflect.apply(kl, null, [$, ...b]), () => Ma(...b), "datetime format", ($) => $[za](...b), Nl, ($) => J($) || Me($));
  }
  function Te(b) {
    O = b, C.pluralRules = O;
  }
  function Ee(b, $) {
    return me(() => {
      if (!b)
        return !1;
      const fe = J($) ? $ : i.value, be = Be(fe), Je = C.messageResolver(be, b);
      return Dt(Je) || en(Je) || J(Je);
    }, () => [b], "translate exists", (fe) => Reflect.apply(fe.te, fe, [b, $]), tw, (fe) => Ne(fe));
  }
  function Ge(b) {
    let $ = null;
    const fe = xu(C, l.value, i.value);
    for (let be = 0; be < fe.length; be++) {
      const Je = c.value[fe[be]] || {}, wn = C.messageResolver(Je, b);
      if (wn != null) {
        $ = wn;
        break;
      }
    }
    return $;
  }
  function le(b) {
    const $ = Ge(b);
    return $ ?? (t ? t.tm(b) || {} : {});
  }
  function Be(b) {
    return c.value[b] || {};
  }
  function lt(b, $) {
    if (o) {
      const fe = { [b]: $ };
      for (const be in fe)
        St(fe, be) && Mr(fe[be]);
      $ = fe[b];
    }
    c.value[b] = $, C.messages = c.value;
  }
  function pt(b, $) {
    c.value[b] = c.value[b] || {};
    const fe = { [b]: $ };
    if (o)
      for (const be in fe)
        St(fe, be) && Mr(fe[be]);
    $ = fe[b], lo($, c.value[b]), C.messages = c.value;
  }
  function Lt(b) {
    return d.value[b] || {};
  }
  function _(b, $) {
    d.value[b] = $, C.datetimeFormats = d.value, Ol(C, b, $);
  }
  function T(b, $) {
    d.value[b] = qe(d.value[b] || {}, $), C.datetimeFormats = d.value, Ol(C, b, $);
  }
  function N(b) {
    return p.value[b] || {};
  }
  function Y(b, $) {
    p.value[b] = $, C.numberFormats = p.value, Ll(C, b, $);
  }
  function ge(b, $) {
    p.value[b] = qe(p.value[b] || {}, $), C.numberFormats = p.value, Ll(C, b, $);
  }
  Ml++, t && dl && (ue(t.locale, (b) => {
    s && (i.value = b, C.locale = b, ur(C, i.value, l.value));
  }), ue(t.fallbackLocale, (b) => {
    s && (l.value = b, C.fallbackLocale = b, ur(C, i.value, l.value));
  }));
  const ie = {
    id: Ml,
    locale: Z,
    fallbackLocale: oe,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(b) {
      s = b, b && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, ur(C, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: P,
    get modifiers() {
      return k;
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
    set missingWarn(b) {
      m = b, C.missingWarn = m;
    },
    get fallbackWarn() {
      return g;
    },
    set fallbackWarn(b) {
      g = b, C.fallbackWarn = g;
    },
    get fallbackRoot() {
      return h;
    },
    set fallbackRoot(b) {
      h = b;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(b) {
      v = b, C.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return y;
    },
    set warnHtmlMessage(b) {
      y = b, C.warnHtmlMessage = b;
    },
    get escapeParameter() {
      return w;
    },
    set escapeParameter(b) {
      w = b, C.escapeParameter = b;
    },
    t: Le,
    getLocaleMessage: Be,
    setLocaleMessage: lt,
    mergeLocaleMessage: pt,
    getPostTranslationHandler: de,
    setPostTranslationHandler: ae,
    getMissingHandler: M,
    setMissingHandler: ye,
    [J1]: Te
  };
  return ie.datetimeFormats = V, ie.numberFormats = re, ie.rt = He, ie.te = Ee, ie.tm = le, ie.d = Xe, ie.n = nt, ie.getDateTimeFormat = Lt, ie.setDateTimeFormat = _, ie.mergeDateTimeFormat = T, ie.getNumberFormat = N, ie.setNumberFormat = Y, ie.mergeNumberFormat = ge, ie[Hu] = n, ie[Da] = Q, ie[za] = Ce, ie[Ba] = te, ie;
}
const Fs = {
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
function rw({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === Ve ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Se());
}
function Yu() {
  return Ve;
}
qe({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Ke(e) || !isNaN(e)
  }
}, Fs);
function ow(e) {
  return Me(e) && !J(e[0]);
}
function Zu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = Se();
    e.locale && (s.locale = e.locale), J(e.format) ? s.key = e.format : ve(e.format) && (J(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((m, g) => n.includes(g) ? qe(Se(), m, { [g]: e.format[g] }) : m, Se()));
    const l = r(e.value, s, i);
    let c = [s.key];
    Me(l) ? c = l.map((m, g) => {
      const h = o[m.type], v = h ? h({ [m.type]: m.value, index: g, parts: l }) : [m.value];
      return ow(v) && (v[0].key = `${m.type}-${g}`), v;
    }) : J(l) && (c = [l]);
    const d = qe(Se(), a), p = J(e.tag) || ve(e.tag) ? e.tag : Yu();
    return es(p, d, c);
  };
}
qe({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Fs);
const aw = /* @__PURE__ */ Rn("global-vue-i18n");
function or(e = {}) {
  const t = Gu();
  if (t == null)
    throw Nr(er.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Nr(er.NOT_INSTALLED);
  const n = sw(t), r = lw(n), o = Q1(t), a = iw(e, o);
  if (a === "global")
    return ew(r, e, o), r;
  if (a === "parent") {
    let l = cw(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = qe({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = nw(l), s.__composerExtend && (i[Ua] = s.__composerExtend(i)), dw(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function sw(e) {
  const t = we(e.isCE ? aw : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Nr(e.isCE ? er.NOT_INSTALLED_WITH_PROVIDE : er.UNEXPECTED_ERROR);
  return t;
}
function iw(e, t) {
  return qo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function lw(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function cw(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = uw(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[Hu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function uw(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function dw(e, t, n) {
  Fe(() => {
  }, t), Qa(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[Ua];
    o && (o(), delete r[Ua]);
  }, t);
}
qe({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Fs);
X1();
A1(h1);
R1(P1);
$1(xu);
const fw = "snippets-code:developer-mode", qu = "snippets-code:frontend-diagnostics", pw = 240, dr = "[REDACTED]", co = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${dr}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${dr}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  dr
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${dr}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${dr}`
), Xu = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return co(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return co(
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
    return co(String(e));
  }
}, mw = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, gw = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(qu) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Ds = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(fw) === "true";
  } catch {
    return !1;
  }
}, hw = (e, t, n) => {
  if (!Ds() || typeof localStorage > "u") return;
  const r = gw();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: mw(),
    message: co(t),
    data: Xu(n)
  });
  try {
    localStorage.setItem(
      qu,
      JSON.stringify(r.slice(-pw))
    );
  } catch {
  }
}, vw = () => Ds(), yw = (e) => e === "warn" || e === "error" || !1 || !1 || Ds(), eo = (e, t, n) => {
  hw(e, t, n), yw(e) && F("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Xu(n)
  }).catch(() => {
  });
}, K = {
  info: (e, t, ...n) => {
    eo("info", e, t);
  },
  error: (e, t) => {
    eo("error", e, t);
  },
  warn: (e, t) => {
    eo("warn", e, t);
  },
  debug: (e, t) => {
    vw() && eo("debug", e, t);
  }
};
function bw(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
}
function pa(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, r = e.match(/[\u3040-\u30ff]/g), o = r ? r.length : 0, a = e.match(/[\uac00-\ud7af]/g), s = a ? a.length : 0, i = e.match(/[a-zA-Z]/g), l = i ? i.length : 0, d = n + o + s + l;
  return d === 0 ? "unknown" : o >= 3 && o > l && o / d >= 0.2 ? "ja" : s >= 3 && s > n && s > l && s / d >= 0.2 ? "ko" : n > l ? "zh" : l > n ? "en" : "unknown";
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Ju;
const zs = (e) => Ju = e, _w = (
  /* istanbul ignore next */
  Symbol()
);
function Wa(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Sr;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Sr || (Sr = {}));
const Qu = () => {
};
function Fl(e, t, n, r = Qu) {
  e.push(t);
  const o = () => {
    const a = e.indexOf(t);
    a > -1 && (e.splice(a, 1), r());
  };
  return !n && Zl() && ql(o), o;
}
function Fn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const ww = (e) => e(), Dl = Symbol(), ma = Symbol();
function ja(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    Wa(o) && Wa(r) && e.hasOwnProperty(n) && !gn(r) && !Ql(r) ? e[n] = ja(o, r) : e[n] = r;
  }
  return e;
}
const Ew = (
  /* istanbul ignore next */
  Symbol()
);
function Sw(e) {
  return !Wa(e) || !e.hasOwnProperty(Ew);
}
const { assign: ln } = Object;
function Cw(e) {
  return !!(gn(e) && e.effect);
}
function Tw(e, t, n, r) {
  const { state: o, actions: a, getters: s } = t, i = n.state.value[e];
  let l;
  function c() {
    i || (n.state.value[e] = o ? o() : {});
    const d = Mo(n.state.value[e]);
    return ln(d, a, Object.keys(s || {}).reduce((p, m) => (p[m] = _a(L(() => {
      zs(n);
      const g = n._s.get(e);
      return s[m].call(g, g);
    })), p), {}));
  }
  return l = ed(e, c, t, n, r, !0), l;
}
function ed(e, t, n = {}, r, o, a) {
  let s;
  const i = ln({ actions: {} }, n), l = { deep: !0 };
  let c, d, p = [], m = [], g;
  const h = r.state.value[e];
  !a && !h && (r.state.value[e] = {}), z({});
  let v;
  function S(D) {
    let x;
    c = d = !1, typeof D == "function" ? (D(r.state.value[e]), x = {
      type: Sr.patchFunction,
      storeId: e,
      events: g
    }) : (ja(r.state.value[e], D), x = {
      type: Sr.patchObject,
      payload: D,
      storeId: e,
      events: g
    });
    const Z = v = Symbol();
    Ae().then(() => {
      v === Z && (c = !0);
    }), d = !0, Fn(p, x, r.state.value[e]);
  }
  const u = a ? function() {
    const { state: x } = n, Z = x ? x() : {};
    this.$patch((oe) => {
      ln(oe, Z);
    });
  } : (
    /* istanbul ignore next */
    Qu
  );
  function E() {
    s.stop(), p = [], m = [], r._s.delete(e);
  }
  const y = (D, x = "") => {
    if (Dl in D)
      return D[ma] = x, D;
    const Z = function() {
      zs(r);
      const oe = Array.from(arguments), P = [], V = [];
      function re(M) {
        P.push(M);
      }
      function de(M) {
        V.push(M);
      }
      Fn(m, {
        args: oe,
        name: Z[ma],
        store: k,
        after: re,
        onError: de
      });
      let ae;
      try {
        ae = D.apply(this && this.$id === e ? this : k, oe);
      } catch (M) {
        throw Fn(V, M), M;
      }
      return ae instanceof Promise ? ae.then((M) => (Fn(P, M), M)).catch((M) => (Fn(V, M), Promise.reject(M))) : (Fn(P, ae), ae);
    };
    return Z[Dl] = !0, Z[ma] = x, Z;
  }, w = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Fl.bind(null, m),
    $patch: S,
    $reset: u,
    $subscribe(D, x = {}) {
      const Z = Fl(p, D, x.detached, () => oe()), oe = s.run(() => ue(() => r.state.value[e], (P) => {
        (x.flush === "sync" ? d : c) && D({
          storeId: e,
          type: Sr.direct,
          events: g
        }, P);
      }, ln({}, l, x)));
      return Z;
    },
    $dispose: E
  }, k = On(w);
  r._s.set(e, k);
  const C = (r._a && r._a.runWithContext || ww)(() => r._e.run(() => (s = Wd()).run(() => t({ action: y }))));
  for (const D in C) {
    const x = C[D];
    if (gn(x) && !Cw(x) || Ql(x))
      a || (h && Sw(x) && (gn(x) ? x.value = h[D] : ja(x, h[D])), r.state.value[e][D] = x);
    else if (typeof x == "function") {
      const Z = y(x, D);
      C[D] = Z, i.actions[D] = x;
    }
  }
  return ln(k, C), ln(Jl(k), C), Object.defineProperty(k, "$state", {
    get: () => r.state.value[e],
    set: (D) => {
      S((x) => {
        ln(x, D);
      });
    }
  }), r._p.forEach((D) => {
    ln(k, s.run(() => D({
      store: k,
      app: r._a,
      pinia: r,
      options: i
    })));
  }), h && a && n.hydrate && n.hydrate(k.$state, h), c = !0, d = !0, k;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function kw(e, t, n) {
  let r, o;
  const a = typeof t == "function";
  typeof e == "string" ? (r = e, o = a ? n : t) : (o = e, r = e.id);
  function s(i, l) {
    const c = Ud();
    return i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    i || (c ? we(_w, null) : null), i && zs(i), i = Ju, i._s.has(r) || (a ? ed(r, t, o, i) : Tw(r, o, i)), i._s.get(r);
  }
  return s.$id = r, s;
}
const Ow = "https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/main/plugin-registry/marketplace/marketplace.json";
async function Pw() {
  return await F("get_plugin_states");
}
async function Lw() {
  return await F("get_installed_plugin_manifests");
}
async function Iw(e, t = !1) {
  return await F("install_local_plugin_package", {
    sourcePath: e,
    overwrite: t
  });
}
async function td(e, t = !1, n, r) {
  return await F("install_plugin_package_from_url", {
    expectedSizeBytes: r,
    packageUrl: e,
    packageSubdir: n,
    overwrite: t
  });
}
const Aw = (e) => {
  try {
    const t = new URL(e);
    return t.searchParams.set("_sc_refresh", `${Date.now()}`), t.toString();
  } catch {
    return e;
  }
};
async function Rw(e) {
  return await F("fetch_plugin_marketplace", {
    marketplaceUrl: Aw(e)
  });
}
async function $w(e) {
  await F("uninstall_local_plugin_package", { pluginId: e });
}
async function Nw(e, t) {
  await F("set_plugin_enabled", { pluginId: e, enabled: t });
}
async function Mw() {
  return await F("get_rapidocr_resource_status");
}
async function xw() {
  return await F("screen_recorder_get_ffmpeg_status");
}
async function Bs(e, t) {
  return await F("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
async function ga() {
  await F("install_translation_offline_runtime_resources");
}
const Fw = (e, t, n, r) => ({
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
}), dn = (e) => typeof e == "object" && e !== null, Dw = (e) => dn(e) && "manifest" in e && dn(e.manifest) ? {
  manifest: e.manifest,
  packagePath: typeof e.packagePath == "string" ? e.packagePath : void 0,
  installedAt: typeof e.installedAt == "string" ? e.installedAt : void 0
} : { manifest: e }, zw = (e) => typeof e == "string" && ["capture", "automation", "search", "sync", "editor", "appearance"].includes(e), Bw = (e) => {
  if (!dn(e) || e.schemaVersion !== 1 || typeof e.id != "string" || !e.id.trim() || typeof e.version != "string" || !e.version.trim() || e.kind !== "local" || !dn(e.name) || typeof e.name.i18nKey != "string" || typeof e.name.fallback != "string" || !dn(e.description) || typeof e.description.i18nKey != "string" || typeof e.description.fallback != "string" || !zw(e.category) || typeof e.enabledByDefault != "boolean") return null;
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
}, Uw = (e) => e.map((t) => {
  const { manifest: n, packagePath: r, installedAt: o } = Dw(t), a = Bw(n);
  if (!a) return null;
  const s = {
    manifest: a,
    packagePath: r ?? ""
  };
  return o && (s.installedAt = o), s;
}).filter((t) => t !== null), nd = (e = []) => {
  const n = [
    ...Uw(e).map((o) => Fw(
      o.manifest,
      "local",
      o.packagePath || void 0,
      o.installedAt
    )).sort(Ww)
  ], r = /* @__PURE__ */ new Map();
  for (const o of n)
    r.has(o.id) || r.set(o.id, o);
  return Array.from(r.values());
}, zl = (e) => {
  const t = e.installedAt ? Date.parse(e.installedAt) : NaN;
  return Number.isFinite(t) ? t : 0;
}, Ww = (e, t) => {
  const n = zl(t) - zl(e);
  return n !== 0 ? n : String(e.id).localeCompare(String(t.id));
}, jw = nd(), Lo = jw, Vw = Lo.map((e) => e.id), rd = Lo.reduce((e, t) => (e[t.id] = t.enabledByDefault, e), {}), Hw = (e) => Vw.includes(e);
async function Kw() {
  return await F("local_ai_get_runtime_status");
}
const Un = [], Wn = [
  { id: "attachment", labelKey: "settings.attachment.menu", icon: Xd }
], Va = {
  attachment: Xa(() => Promise.resolve().then(() => c3))
}, jn = [], uo = [], Vn = [], od = (e) => e.manifest.permissions ?? [], Gw = (e, t) => {
  const n = od(e);
  return n.includes("command:*") || n.includes(`command:${t}`);
}, Yw = (e, t) => {
  const n = od(e);
  return n.includes("backend:*") || n.includes(`backend:${t}`);
}, Zw = (e, t) => {
  if (!Gw(e, t))
    throw new Error(`插件 ${e.id} 没有调用命令 ${t} 的权限`);
}, qw = (e, t) => {
  if (!Yw(e, t))
    throw new Error(`插件 ${e.id} 没有调用后端命令 ${t} 的权限`);
}, Ha = [], Ka = [], Ga = [], fo = /* @__PURE__ */ new Set(), Io = /* @__PURE__ */ new Map(), Ao = /* @__PURE__ */ new Map(), Bl = /* @__PURE__ */ new Map(), Xw = /* @__PURE__ */ new Set(), Ul = /* @__PURE__ */ new Map(), tr = /* @__PURE__ */ new Map(), Ro = /* @__PURE__ */ new Set(), $o = /* @__PURE__ */ new Set(), Qo = (e) => e.replace(/^[\\/]+|[\\/]+$/g, ""), Jw = (e) => !!e && !e.includes("://") && !e.startsWith("/") && !/^[a-zA-Z]:[\\/]/.test(e) && !Qo(e).split(/[\\/]+/).includes(".."), Qw = (e, t) => {
  if (!e.packagePath)
    throw new Error(`插件 ${e.id} 缺少 packagePath`);
  if (!Jw(t))
    throw new Error(
      `插件 ${e.id} 使用了不安全的资源路径: ${t}`
    );
  return `${e.packagePath.replace(/[\\/]+$/g, "")}/${Qo(t)}`;
}, ar = (e, t) => bu(Qw(e, t)), e2 = (e) => {
  const t = Qo(e).split(/[\\/]+/);
  return t.pop(), t.join("/");
}, ad = (e) => {
  const t = /^([^?#]*)([?#].*)?$/.exec(e);
  return {
    path: t?.[1] ?? e,
    suffix: t?.[2] ?? ""
  };
}, t2 = (e, t) => {
  const { path: n } = ad(t), r = [
    ...Qo(e).split(/[\\/]+/),
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
}, n2 = (e, t, n) => {
  const { suffix: r } = ad(n), o = t2(
    e2(t),
    n
  );
  return `${ar(e, o)}${r}`;
}, r2 = [
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
], o2 = (e) => {
  if (e !== "vue") return null;
  const t = Bl.get(e);
  if (t) return t;
  const n = "__SNIPPETS_CODE_PLUGIN_SHARED__", r = globalThis;
  r[n] = {
    ...r[n] ?? {},
    vue: ro
  };
  const o = r2.map((i) => `export const ${i} = Vue.${i};`).join(`
`), a = [
    `const Vue = globalThis.${n}.vue;`,
    "export default Vue;",
    o
  ].join(`
`), s = URL.createObjectURL(
    new Blob([a], { type: "text/javascript" })
  );
  return Bl.set(e, s), s;
}, a2 = (e, t, n) => {
  const r = (o) => {
    const a = o2(o);
    return a || (!o.startsWith("./") && !o.startsWith("../") ? o : n2(e, t, o));
  };
  return n.replace(
    /((?:import|export)\s+(?:[^'"]*?\s+from\s*)?)(['"])([^'"]+)\2/g,
    (o, a, s, i) => `${a}${s}${r(i)}${s}`
  ).replace(
    /(import\s*\(\s*)(['"])([^'"]+)\2(\s*\))/g,
    (o, a, s, i, l) => `${a}${s}${r(i)}${s}${l}`
  );
}, s2 = (e, t) => {
  const n = Ao.get(e) ?? [];
  n.push(t), Ao.set(e, n);
}, i2 = (e) => {
  (Ao.get(e) ?? []).forEach((n) => URL.revokeObjectURL(n)), Ao.delete(e);
}, l2 = async (e, t) => {
  const n = ar(e, t), r = await fetch(n);
  if (!r.ok)
    throw new Error(
      `插件 ${e.id} 前端入口读取失败: ${r.status} ${r.statusText}`
    );
  const o = await r.text(), a = a2(
    e,
    t,
    o
  ), s = URL.createObjectURL(
    new Blob([a], { type: "text/javascript" })
  );
  return s2(String(e.id), s), await import(
    /* @vite-ignore */
    s
  );
}, c2 = (e) => async (t, n, r) => (Zw(e, t), F(t, n, r)), u2 = (e) => async (t, n = null) => (qw(e, t), await F("invoke_plugin_backend", {
  pluginId: e.id,
  command: t,
  payload: n
})), po = (e, t) => {
  const n = tr.get(e) ?? /* @__PURE__ */ new Set();
  n.add(t), tr.set(e, n);
}, d2 = (e, t) => {
  const n = tr.get(e);
  n && (n.delete(t), n.size === 0 && tr.delete(e));
}, f2 = (e) => {
  const t = Array.from(tr.get(e) ?? []);
  tr.delete(e);
  for (const n of t)
    try {
      n();
    } catch (r) {
      K.warn(`[PluginRuntime] 清理插件运行时失败: ${e}`, r);
    }
}, p2 = (e) => async (...t) => {
  const n = String(e.id), r = await Rt(...t);
  let o = !0;
  const a = () => {
    o && (o = !1, d2(n, a), r());
  };
  return po(n, a), a;
}, ha = (e, t, n) => {
  if (t) return _a(t);
  if (!n)
    throw new Error(
      `插件 ${e.id} 注册组件时缺少 component 或 componentUrl`
    );
  return _a(
    Xa(
      () => import(
        /* @vite-ignore */
        ar(e, n)
      )
    )
  );
}, m2 = (e, t, n) => {
  if (t) {
    const r = t.__asyncLoader;
    return typeof r == "function" ? () => r() : t;
  }
  if (!n)
    throw new Error(
      `插件 ${e.id} 注册路由组件时缺少 component 或 componentUrl`
    );
  return () => import(
    /* @vite-ignore */
    ar(e, n)
  );
}, g2 = (e, t) => {
  if (e === "config") {
    Ha.push(t);
    return;
  }
  if (e === "window") {
    Ga.push(t);
    return;
  }
  Ka.push(t);
}, va = (e, t) => {
  for (let n = e.length - 1; n >= 0; n -= 1)
    e[n].meta?.pluginId === t && e.splice(n, 1);
}, ya = (e, t, n) => {
  const r = e[t] ?? [];
  r.includes(n) || (e[t] = [...r, n]), e.manifest.capabilities = {
    ...e.manifest.capabilities,
    [t]: e[t]
  };
}, No = (e, t) => `${e}:${t}`, h2 = (e) => ({
  pluginId: String(e.id),
  packagePath: e.packagePath ?? "",
  manifest: e.manifest,
  resolveAssetUrl: (t) => ar(e, t),
  api: {
    invoke: c2(e),
    invokeBackend: u2(e),
    listen: p2(e),
    emit: wu
  },
  ui: {
    h: es,
    defineComponent: q
  },
  storage: {
    get: async (t) => await F("get_local_plugin_data", {
      pluginId: e.id,
      key: t
    }) ?? null,
    set: async (t, n) => {
      await F("set_local_plugin_data", {
        pluginId: e.id,
        key: t,
        value: n
      });
    },
    delete: async (t) => {
      await F("delete_local_plugin_data", {
        pluginId: e.id,
        key: t
      });
    }
  },
  registerRoute(t) {
    const n = t.target ?? "layout";
    ya(e, "routeNames", t.name);
    const r = {
      path: t.path,
      name: t.name,
      component: m2(e, t.component, t.componentUrl),
      meta: {
        ...t.meta,
        pluginId: e.id
      }
    };
    g2(n, r);
  },
  registerSettingsTab(t) {
    const n = t.labelKey ?? `plugins.${e.id}.${t.id}`, r = {
      id: t.id,
      pluginId: String(e.id),
      labelKey: n,
      label: t.label,
      icon: t.icon ?? Qd
    }, o = No(String(e.id), t.id), a = Wn.findIndex(
      (i) => i.id === t.id && i.pluginId === String(e.id)
    ), s = ha(e, t.component, t.componentUrl);
    a === -1 ? (Wn.push(r), Va[t.id] = s, Ro.add(o)) : Ro.has(o) && (Wn[a] = r, Va[t.id] = s), ya(e, "settingsTabs", t.id);
  },
  registerSearchProvider(t) {
    const n = {
      pluginId: e.id,
      source: t.source,
      search: t.search
    }, r = Un.findIndex(
      (o) => o.pluginId === e.id && o.source === t.source
    );
    r === -1 ? Un.push(n) : Un[r] = n, ya(e, "searchSources", t.source);
  },
  registerTitlebarAction(t) {
    const n = No(
      String(e.id),
      t.id
    ), r = jn.findIndex(
      (a) => a.id === t.id && a.pluginId === e.id
    ), o = {
      id: t.id,
      pluginId: e.id,
      component: ha(e, t.component, t.componentUrl)
    };
    r === -1 ? (jn.push(o), $o.add(n)) : $o.has(n) && (jn[r] = o);
  },
  registerWindowShortcut(t) {
    uo.push({
      label: t.label,
      pluginId: e.id,
      closeCommandLabel: t.closeCommandLabel
    });
  },
  registerHostComponent(t) {
    const n = t.target ?? "config", r = {
      id: t.id,
      pluginId: e.id,
      target: n,
      component: ha(
        e,
        t.component,
        t.componentUrl
      )
    }, o = Vn.findIndex(
      (a) => a.pluginId === e.id && a.id === t.id && a.target === n
    );
    o === -1 ? Vn.push(r) : Vn[o] = r;
  }
}), v2 = async (e, t) => {
  const n = t.activate ?? (typeof t.default == "function" ? t.default : t.default?.activate);
  if (typeof n != "function")
    throw new Error(`插件 ${e.id} 的前端入口没有导出 activate(context)`);
  const r = await n(h2(e)), o = String(e.id);
  if (typeof r == "function") {
    po(o, r);
    return;
  }
  typeof r?.deactivate == "function" && po(o, r.deactivate), typeof r?.dispose == "function" && po(o, r.dispose);
}, y2 = (e) => {
  if (Io.has(String(e.id))) return;
  const t = e.manifest.entry?.styles ?? [];
  if (!t.length) return;
  const n = t.map((r) => {
    const o = document.createElement("link");
    return o.rel = "stylesheet", o.href = ar(e, r), o.dataset.pluginId = String(e.id), document.head.appendChild(o), o;
  });
  Io.set(String(e.id), n);
}, b2 = (e) => {
  (Io.get(e) ?? []).forEach((n) => n.remove()), Io.delete(e);
}, _2 = [
  "routeNames",
  "settingsTabs",
  "searchSources",
  "titlebarActions",
  "windows"
], w2 = (e) => {
  if (e.resourceFor || e.manifest.resourceFor || e.manifest.resources)
    return !1;
  const t = e.manifest.capabilities;
  return _2.some((n) => {
    const r = t?.[n];
    return Array.isArray(r) && r.length > 0;
  });
}, E2 = async (e, t) => {
  for (const n of e)
    if (n.source === "local" && t(String(n.id)) && !fo.has(String(n.id))) {
      if (n.manifest.entry?.frontend) {
        try {
          y2(n);
          const r = await l2(
            n,
            n.manifest.entry.frontend
          );
          await v2(n, r), fo.add(String(n.id));
        } catch (r) {
          Ya(String(n.id)), K.warn(`[PluginRuntime] 加载本地插件失败: ${n.id}`, r);
        }
        continue;
      }
      fo.add(String(n.id)), w2(n) && K.warn(`[PluginRuntime] 本地插件缺少前端入口: ${n.id}`);
    }
};
function Ya(e) {
  f2(e), fo.delete(e), b2(e), i2(e);
  for (const [
    t,
    n
  ] of Ul.entries())
    [
      ...Ha,
      ...Ka,
      ...Ga
    ].some(
      (o) => o.name === t && o.meta?.pluginId === e
    ) && (n(), Xw.delete(t), Ul.delete(t));
  va(Ha, e), va(Ka, e), va(Ga, e);
  for (let t = Wn.length - 1; t >= 0; t -= 1) {
    const n = Wn[t], r = No(e, n.id);
    n.pluginId === e && Ro.has(r) && (delete Va[n.id], Wn.splice(t, 1), Ro.delete(r));
  }
  for (let t = Un.length - 1; t >= 0; t -= 1)
    Un[t].pluginId === e && Un.splice(t, 1);
  for (let t = jn.length - 1; t >= 0; t -= 1) {
    const n = jn[t], r = No(e, n.id);
    n.pluginId === e && $o.has(r) && (jn.splice(t, 1), $o.delete(r));
  }
  for (let t = uo.length - 1; t >= 0; t -= 1)
    uo[t].pluginId === e && uo.splice(t, 1);
  for (let t = Vn.length - 1; t >= 0; t -= 1)
    Vn[t].pluginId === e && Vn.splice(t, 1);
}
let fr = null, pr = null, mr = null;
const Wl = (e, t) => {
  globalThis.setTimeout(e, t);
}, jl = (e) => e.replace(/^v/i, "").split(".").map((t) => Number.parseInt(t, 10)).map((t) => Number.isFinite(t) ? t : 0), S2 = (e, t) => {
  const n = jl(e), r = jl(t), o = Math.max(n.length, r.length);
  for (let a = 0; a < o; a += 1) {
    const s = (n[a] ?? 0) - (r[a] ?? 0);
    if (s !== 0) return s;
  }
  return 0;
}, Vl = (e) => Array.isArray(e.dependencies) ? e.dependencies.filter(
  (t) => typeof t == "string" && !!t.trim()
) : [], Hl = (e) => JSON.stringify({
  id: e.id,
  source: e.source,
  packagePath: e.packagePath,
  installedAt: e.installedAt,
  version: e.manifest.version,
  entry: e.manifest.entry,
  capabilities: e.manifest.capabilities,
  dependencies: e.manifest.dependencies,
  resourceFor: e.resourceFor
}), C2 = (e, t) => Hl(e) !== Hl(t), Kl = (e, t) => {
  const n = e.reduce(
    (r, o) => (r[o.id] = o.enabledByDefault, r),
    { ...rd }
  );
  if (!t)
    return n;
  for (const r of e) {
    const o = t[r.id];
    typeof o == "boolean" && (n[r.id] = o);
  }
  return n;
}, T2 = /* @__PURE__ */ kw("plugins", {
  state: () => ({
    enabled: { ...rd },
    installedPlugins: Lo,
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
      if (fr) {
        await fr;
        return;
      }
      fr = (async () => {
        try {
          K.info("[PluginStore] initialize start"), await this.reconcileInstalledPlugins("initialize", [], {
            loadRuntimeEntries: !1,
            refreshResourceStatus: !1
          }), K.info("[PluginStore] initialize complete", {
            plugins: this.installedPlugins.map((e) => ({
              id: e.id,
              source: e.source,
              enabled: this.isEnabled(e.id),
              packagePath: e.packagePath
            }))
          });
        } catch (e) {
          K.warn("[PluginStore] 加载插件状态失败，使用默认状态", e), this.installedPlugins = Lo, this.enabled = Kl(
            this.installedPlugins,
            this.enabled
          );
        } finally {
          this.initialized = !0, await this.ensureStateListener();
        }
        Wl(
          () => this.loadEnabledPluginEntriesInBackground(),
          600
        ), Wl(
          () => this.refreshPluginResourceStatusInBackground(),
          1200
        );
      })();
      try {
        await fr;
      } finally {
        fr = null;
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
      K.info("[PluginStore] reconcile installed plugins start", {
        reason: e
      });
      const a = this.installedPlugins, s = new Map(
        a.map((g) => [String(g.id), g])
      ), i = await Lw(), l = nd(i), c = new Map(
        l.map((g) => [String(g.id), g])
      ), d = new Set(t);
      for (const g of a) {
        if (g.source !== "local") continue;
        const h = String(g.id), v = c.get(h);
        (!v || C2(g, v)) && d.add(h);
      }
      this.installedPlugins = l;
      const p = await Pw(), m = Object.fromEntries(
        Object.entries(this.enabled).filter(
          ([g]) => s.has(g) && c.has(g)
        )
      );
      this.enabled = Kl(this.installedPlugins, {
        ...m,
        ...p
      }), this.installedPlugins.filter(
        (g) => g.source === "local" && !this.isEnabled(g.id)
      ).forEach((g) => d.add(String(g.id))), d.forEach(
        (g) => Ya(g)
      ), r && await this.refreshPluginResourceStatus(), o && await this.loadEnabledPluginEntries(), K.info("[PluginStore] reconcile installed plugins complete", {
        reason: e,
        resetPluginIds: Array.from(d),
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
      K.info("[PluginStore] install from path start", {
        sourcePath: e,
        overwrite: t
      });
      const n = await Iw(
        e,
        t
      );
      K.info("[PluginStore] install from path complete", {
        pluginId: n.manifest.id,
        packagePath: n.packagePath
      }), await this.reconcileInstalledPlugins("install-path", [
        String(n.manifest.id)
      ]);
    },
    async installFromUrl(e, t = !1, n, r) {
      K.info("[PluginStore] install from url start", {
        packageUrl: e,
        overwrite: t,
        packageSubdir: n,
        expectedSizeBytes: r
      });
      const o = await td(
        e,
        t,
        n,
        r
      );
      K.info("[PluginStore] install from url complete", {
        pluginId: o.manifest.id,
        packagePath: o.packagePath,
        packageUrl: e
      }), await this.reconcileInstalledPlugins("install-url", [
        String(o.manifest.id)
      ]);
    },
    async uninstall(e) {
      K.info("[PluginStore] uninstall start", { pluginId: e }), await $w(e), await this.reconcileInstalledPlugins("uninstall", [String(e)]), K.info("[PluginStore] uninstall complete", { pluginId: e });
    },
    async ensureStateListener() {
      if (!this.stateUnlisten)
        try {
          this.stateUnlisten = await Rt(
            "plugin-state-changed",
            async (e) => {
              const { pluginId: t, enabled: n } = e.payload;
              (this.installedPlugins.some((r) => r.id === t) || Hw(t)) && (this.enabled[t] = n), await this.reconcileInstalledPlugins(
                "backend-state-event",
                n ? [] : [t]
              );
            }
          );
        } catch (e) {
          K.warn("[PluginStore] 监听插件状态变化失败", e);
        }
    },
    async setEnabled(e, t) {
      const n = this.enabled[e];
      this.enabled[e] = t;
      try {
        K.info("[PluginStore] set enabled start", { pluginId: e, enabled: t }), t || (Ya(String(e)), this.runtimeRevision += 1), await Nw(e, t), await this.reconcileInstalledPlugins(
          "set-enabled",
          t ? [] : [String(e)]
        ), K.info("[PluginStore] set enabled complete", {
          pluginId: e,
          enabled: t
        });
      } catch (r) {
        throw typeof n == "boolean" ? this.enabled[e] = n : delete this.enabled[e], n && await this.loadEnabledPluginEntries(), K.error("[PluginStore] 保存插件状态失败", {
          pluginId: e,
          enabled: t,
          error: r
        }), r;
      }
    },
    async loadEnabledPluginEntries() {
      if (pr) {
        await pr;
        return;
      }
      pr = (async () => {
        await E2(
          this.installedPlugins,
          (e) => this.isEnabled(e)
        ), this.runtimeRevision += 1;
      })();
      try {
        await pr;
      } finally {
        pr = null;
      }
    },
    loadEnabledPluginEntriesInBackground() {
      this.loadEnabledPluginEntries().catch((e) => {
        K.warn("[PluginStore] 后台加载插件前端入口失败", e);
      });
    },
    shouldInstallMarketplaceItem(e) {
      const t = this.installedPlugins.find(
        (n) => n.id === e.id
      );
      return !t || t.source === "local" && S2(e.version, t.manifest.version) > 0;
    },
    async installMarketplaceItemWithDependencies(e, t, n = {}, r = /* @__PURE__ */ new Set()) {
      if (r.has(e.id))
        throw new Error(
          n.formatCircularDependencyError?.(e) ?? `Circular plugin dependency: ${e.id}`
        );
      r.add(e.id);
      try {
        for (const o of Vl(e)) {
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
        e.packageUrl && this.shouldInstallMarketplaceItem(e) && (n.onInstallingPackage?.(e), K.info("[PluginStore] marketplace lifecycle install package", {
          pluginId: e.id,
          packageUrl: e.packageUrl,
          packageSubdir: e.packageSubdir,
          dependencies: Vl(e)
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
      if (mr) {
        await mr;
        return;
      }
      mr = (async () => {
        const e = {}, t = (n) => this.installedPlugins.some(
          (r) => r.id === n || r.resourceFor === n
        );
        if (t("screenshot"))
          try {
            const n = await Mw();
            e[n.pluginId] = n;
          } catch (n) {
            K.warn("[PluginStore] 获取截图插件资源状态失败", n);
          }
        if (t("translation")) {
          const n = "resources/transformers/transformers.min.js", r = ["translation-offline-runtime", "translation"];
          let o = null, a;
          for (const s of r)
            if (o = await Bs(
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
            const n = await xw();
            e["screen-recorder"] = {
              pluginId: "screen-recorder",
              resourceId: "ffmpeg",
              available: n.available,
              source: n.source,
              path: n.path,
              searchedPaths: n.searchedPaths
            };
          } catch (n) {
            K.warn("[PluginStore] 获取录屏 FFmpeg 资源状态失败", n);
          }
        if (t("local-ai") && this.isEnabled("local-ai"))
          try {
            const n = await Kw();
            e["local-ai"] = {
              pluginId: "local-ai",
              resourceId: "llama-runtime",
              available: n.available,
              source: n.source,
              path: n.path,
              searchedPaths: n.searchedPaths
            };
          } catch (n) {
            K.warn("[PluginStore] 获取本地 AI llama.cpp 资源状态失败", n);
          }
        this.resourceStatusByPluginId = e;
      })();
      try {
        await mr;
      } finally {
        mr = null;
      }
    },
    refreshPluginResourceStatusInBackground() {
      this.refreshPluginResourceStatus().catch((e) => {
        K.warn("[PluginStore] 后台刷新插件资源状态失败", e);
      });
    }
  },
  persist: {
    pick: ["enabled"]
  }
}), k2 = "resources/transformers/transformers.min.js", O2 = ["translation-offline-runtime", "translation"], P2 = "https://huggingface.co/", L2 = "{model}/resolve/{revision}/", I2 = "/__snippets_code_disabled_transformers_local_models__/", A2 = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let gr = null;
const R2 = (e) => {
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
}, $2 = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, r = R2(n);
  return r.index >= 0 ? n.slice(0, r.index + r.length) : n;
}, N2 = (e) => {
  const t = $2(e);
  return Object.fromEntries(
    A2.map((n) => [n, `${t}${n}`])
  );
}, sd = (e, t) => {
  var n, r;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = P2, e.remotePathTemplate = L2, e.allowLocalModels = !1, e.localModelPath = I2, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (r = e.backends.onnx).wasm ?? (r.wasm = {}), e.backends.onnx.wasm.wasmPaths = N2(t), e.backends.onnx.wasm.numThreads = 1);
};
async function M2() {
  return gr || (gr = (async () => {
    for (const e of O2) {
      const t = await Bs(e, k2);
      if (!t) continue;
      const n = bu(t), r = await import(
        /* @vite-ignore */
        n
      );
      return sd(r.env, n), K.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
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
    throw gr = null, e;
  }), gr);
}
let Xt = null, Cr = !1, Bn = null, ba = null, Za = null;
const x2 = "Xenova/opus-mt-en-zh", F2 = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], D2 = 3e5;
function Gl(e) {
  Za = e;
}
function z2() {
  return F2;
}
function B2(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (r, o) => setTimeout(() => o(new Error(n)), t)
    )
  ]);
}
async function id() {
  return Xt || Bn || (Cr = !0, K.info("[离线翻译] 正在加载翻译模型..."), Bn = (async () => {
    try {
      const { pipeline: e, env: t } = await M2();
      sd(t);
      let n = "";
      const r = e("translation", x2, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (a) => {
          a.status === "done" && a.file && a.file !== n && (n = a.file, K.info(`[离线翻译] 已加载: ${a.file}`)), Za && Za({
            status: a.status,
            progress: a.progress,
            file: a.file
          });
        }
      });
      return Xt = await B2(
        r,
        D2,
        "模型加载超时，请检查网络连接后重试"
      ), K.info("[离线翻译] 翻译模型加载完成"), Cr = !1, Xt;
    } catch (e) {
      throw Cr = !1, Bn = null, K.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), Bn);
}
async function U2(e) {
  if (!e?.trim()) return e;
  ba = new AbortController();
  const t = ba.signal;
  try {
    const n = await id();
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
    throw n instanceof Error && n.message === "翻译已取消" ? (K.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (K.warn("[离线翻译] 运行时资源未安装"), n) : (K.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    ba = null;
  }
}
async function qa() {
  await id();
}
function to() {
  return Xt !== null;
}
function W2() {
  return Cr;
}
async function hr() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      K.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const o = await (await caches.open(n)).keys();
          if (K.info(`[离线翻译] Cache "${n}" 包含 ${o.length} 个文件`), o.some(
            (s) => s.url.includes("opus-mt-en-zh") || s.url.includes("Xenova")
          )) {
            const s = o.some((i) => i.url.includes(".onnx"));
            if (K.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${s}`), s)
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
    K.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return K.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return K.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return K.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function j2() {
  return (await hr()).isCached;
}
function V2() {
  return Xt !== null;
}
async function H2() {
  if (Xt)
    try {
      await Xt.dispose?.();
    } catch {
    }
  Xt = null, Bn = null, Cr = !1, K.info("[离线翻译] 翻译器已释放");
}
async function K2() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), K.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), K.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    K.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw K.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const G2 = { class: "translate-window" }, Y2 = {
  class: "header",
  "data-tauri-drag-region": ""
}, Z2 = { class: "left-buttons" }, q2 = ["aria-label"], X2 = {
  class: "window-title",
  "data-tauri-drag-region": ""
}, J2 = { class: "right-buttons" }, Q2 = ["aria-label"], eE = { class: "translate-container" }, tE = { class: "language-selector" }, nE = ["aria-label", "disabled"], rE = { class: "source-area" }, oE = { class: "source-actions" }, aE = { class: "source-material" }, sE = { class: "translation-results" }, iE = ["onClick"], lE = { class: "result-title" }, cE = ["src"], uE = ["src"], dE = {
  key: 2,
  class: "offline-icon"
}, fE = {
  key: 3,
  class: "offline-icon ai-icon"
}, pE = { class: "result-controls" }, mE = {
  key: 0,
  class: "result-body"
}, gE = ["textContent", "onBlur"], hE = {
  key: 2,
  class: "result-empty"
}, vE = { class: "result-actions" }, yE = ["onClick"], bE = ["onClick"], _E = ["onClick"], wE = /* @__PURE__ */ q({
  __name: "index",
  setup(e) {
    const { t } = or(), n = T2(), r = Cu(), o = z(!1), a = z(""), s = z("auto"), i = z("zh"), l = z(!1), c = z(!1), d = z(), p = z(!1), m = z(!1), g = z([
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
      },
      {
        engine: "local-ai",
        name: "",
        text: "",
        loading: !1,
        expanded: !0
      }
    ]), h = L(() => g.value.filter((U) => U.engine === "offline" ? p.value : U.engine === "local-ai" ? m.value : !0)), v = (U) => U === "bing" ? t("translate.bingTranslate") : U === "google" ? t("translate.googleTranslate") : U === "offline" ? t("translate.offlineTranslate") : U === "local-ai" ? t("translate.localAiTranslate") : U, S = L(() => [
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
    let u = null, E = null, y = null;
    const w = z({
      forChinese: "en",
      forEnglish: "zh"
    }), k = async () => {
      if (l.value) return;
      const U = await Rt("tauri://blur", () => {
        u && clearTimeout(u), u = setTimeout(async () => {
          l.value || (C(), await r.hide());
        }, 100);
      }), Q = await Rt("tauri://focus", () => {
        u && clearTimeout(u), $e();
      }), te = await Rt("tauri://show", () => {
        $e();
      }), Ce = await Rt("tauri://move", () => {
        u && clearTimeout(u);
      }), Te = await Rt("selection-text", (Ge) => {
        Ge.payload && Ge.payload.text && Xe(Ge.payload.text);
      }), Ee = await Rt("reset-state", () => {
        C();
      });
      E = () => {
        U(), Q(), Ce(), Te(), Ee(), te();
      };
    }, O = async () => {
      l.value = !l.value, await r.setAlwaysOnTop(l.value), l.value ? E && (E(), E = null) : k();
    }, C = () => {
      a.value = "", c.value = !1, g.value.forEach((U) => {
        U.text = "", U.loading = !1;
      });
    }, D = async () => {
      C(), await r.close();
    }, x = () => {
      s.value !== "auto" && ([s.value, i.value] = [
        i.value,
        s.value
      ], M());
    }, Z = () => {
      a.value = "", g.value.forEach((U) => {
        U.text = "";
      }), c.value = !1;
    }, oe = async (U) => {
      U && (await navigator.clipboard.writeText(U), Ye.success(t("translate.copiedToClipboard")));
    }, P = (U, Q) => {
      const te = Q.target;
      te && (U.text = te.innerText.trim());
    }, V = (U, Q) => {
      if (!U) return;
      const te = new SpeechSynthesisUtterance(U), Ce = Q === "zh" ? "zh-CN" : Q === "zh_tw" ? "zh-TW" : Q === "en" ? "en-US" : Q;
      te.lang = Ce, window.speechSynthesis.speak(te);
    }, re = () => {
      if (s.value !== "auto") return;
      const U = pa(a.value);
      U === "zh" ? i.value = w.value.forChinese : U === "en" && (i.value = w.value.forEnglish);
    }, de = () => {
      const U = pa(a.value);
      U === "zh" ? w.value.forChinese = i.value : U === "en" && (w.value.forEnglish = i.value), M();
    }, ae = async (U) => {
      const Q = g.value.find((Te) => Te.engine === U);
      if (!Q || U === "offline" && !p.value || U === "local-ai" && !m.value)
        return;
      Q.loading = !0, Q.text = "";
      const te = bw(a.value);
      let Ce = i.value;
      U === "bing" && Ce === "auto" && (Ce = "en");
      try {
        let Te;
        if (U === "offline") {
          if (!V2())
            if (await j2())
              K.info("[翻译窗口] 离线翻译懒加载：开始加载模型..."), await qa(), K.info("[翻译窗口] 离线翻译懒加载：模型加载完成");
            else
              throw new Error("离线翻译模型未下载，请在设置中下载模型");
          Te = await U2(te);
        } else
          Te = await F("translate_text", {
            text: te,
            from: s.value,
            to: Ce,
            engine: U
          });
        Q.text = Te;
      } catch (Te) {
        K.error(`[翻译] ${U}翻译出错`, Te);
        const Ee = String(Te);
        Ee.includes("429") || Ee.includes("Too Many Requests") ? Q.text = t("translate.tooManyRequests") : Ee.includes("timeout") || Ee.includes("超时") ? Q.text = t("translate.timeout") : Ee.includes("network") || Ee.includes("网络") ? Q.text = t("translate.networkError") : Ee.includes("未下载") || Ee.includes("未激活") || Ee.includes("运行时未安装") ? Q.text = Ee : Q.text = t("translate.translateFailed");
      } finally {
        Q.loading = !1;
      }
    }, M = async () => {
      if (!a.value.trim()) {
        g.value.forEach((Q) => {
          Q.text = "";
        });
        return;
      }
      re(), o.value = !0;
      const U = h.value.map(
        (Q) => ae(Q.engine)
      );
      await Promise.all(U), o.value = !1;
    }, ye = (U) => {
      U.expanded = !U.expanded;
    }, me = () => {
      c.value = !!a.value, y && clearTimeout(y), a.value.trim() ? y = setTimeout(() => {
        M();
      }, 500) : g.value.forEach((U) => {
        U.text = "";
      });
    };
    let Le = "", He = !1;
    const Xe = (U) => {
      U && (U === Le && He || (Le = U, He = !0, a.value = U, c.value = !0, re(), M().finally(() => {
        setTimeout(() => {
          He = !1;
        }, 2e3);
      }), $e()));
    }, nt = (U) => {
      a.value = U.text;
      const Q = pa(a.value), te = s.value, Ce = i.value;
      te === "auto" ? (s.value = "auto", Q === "zh" ? i.value = w.value.forChinese : i.value = w.value.forEnglish) : (s.value = Ce, i.value = te === "auto" ? Q === "zh" ? "en" : "zh" : te), M();
    }, $e = () => {
      const U = (Q = 0) => {
        if (!(Q > 5))
          if (d.value)
            d.value.focus();
          else {
            const te = 100 * (Q + 1);
            setTimeout(() => U(Q + 1), te);
          }
      };
      d.value && d.value.focus(), Ae(() => {
        U();
      });
    }, ze = () => {
      re(), M();
    };
    return Fe(async () => {
      try {
        await n.initialize(), m.value = n.isEnabled("local-ai");
      } catch (U) {
        K.warn("[翻译窗口] 获取本地 AI 插件状态失败:", U), m.value = !1;
      }
      try {
        const U = await F(
          "get_offline_model_activated"
        );
        K.info(`[翻译窗口] 离线模型后端激活状态: ${U}`), p.value = U;
      } catch (U) {
        K.error("[翻译窗口] 获取离线模型激活状态失败:", U), p.value = !1;
      }
      await k(), a.value.trim() && re(), $e(), await Ae(), setTimeout(() => {
        r.emit("translate_ready");
      }, 100);
    }), Qa(() => {
      E && E(), u && clearTimeout(u), y && clearTimeout(y), C();
    }), (U, Q) => {
      const te = pu, Ce = Is, Te = Ls, Ee = Vc, Ge = Zb;
      return A(), B("main", G2, [
        I("div", Y2, [
          I("div", Z2, [
            j(te, {
              content: U.$t("pin.pinWindow"),
              placement: "bottom",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: ee(() => [
                I("button", {
                  type: "button",
                  "aria-label": U.$t("pin.pinWindow"),
                  onMousedown: Q[0] || (Q[0] = Ze(() => {
                  }, ["stop"])),
                  onClick: O,
                  class: W(["window-action", "pin-button", f(l) ? "pinned" : ""])
                }, [
                  j(f(Jd), { size: 18 })
                ], 42, q2)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"])
          ]),
          I(
            "div",
            X2,
            X(U.$t("translate.title")),
            1
            /* TEXT */
          ),
          I("div", J2, [
            j(te, {
              content: U.$t("pin.close"),
              placement: "bottom",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: ee(() => [
                I("button", {
                  type: "button",
                  "aria-label": U.$t("pin.close"),
                  onMousedown: Q[1] || (Q[1] = Ze(() => {
                  }, ["stop"])),
                  onClick: D,
                  class: "window-action material-close"
                }, [
                  j(f(Gd), { size: 22 })
                ], 40, Q2)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"])
          ])
        ]),
        I("div", eE, [
          G(" 语言选择区域 "),
          I("div", tE, [
            j(Te, {
              modelValue: f(s),
              "onUpdate:modelValue": Q[2] || (Q[2] = (le) => gn(s) ? s.value = le : null),
              size: "small",
              onChange: ze,
              class: "lang-select"
            }, {
              default: ee(() => [
                (A(!0), B(
                  Ve,
                  null,
                  Jt(f(S), (le) => (A(), ne(Ce, {
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
            j(te, {
              content: U.$t("translate.translateBack"),
              placement: "top",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: ee(() => [
                I("button", {
                  type: "button",
                  "aria-label": U.$t("translate.translateBack"),
                  disabled: f(s) === "auto",
                  onClick: x,
                  class: "swap-button"
                }, [
                  j(f(Gs), { size: 22 })
                ], 8, nE)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"]),
            j(Te, {
              modelValue: f(i),
              "onUpdate:modelValue": Q[3] || (Q[3] = (le) => gn(i) ? i.value = le : null),
              size: "small",
              onChange: de,
              class: "lang-select"
            }, {
              default: ee(() => [
                (A(!0), B(
                  Ve,
                  null,
                  Jt(f(S), (le) => (A(), ne(Ce, {
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
          G(" 源文本输入区域 "),
          I("div", rE, [
            j(Ee, {
              ref_key: "sourceTextArea",
              ref: d,
              modelValue: f(a),
              "onUpdate:modelValue": Q[4] || (Q[4] = (le) => gn(a) ? a.value = le : null),
              type: "textarea",
              rows: 2,
              placeholder: U.$t("translate.inputPlaceholder"),
              resize: "none",
              onInput: me,
              class: "source-textarea"
            }, null, 8, ["modelValue", "placeholder"]),
            I("div", oE, [
              I("div", aE, [
                j(te, {
                  content: U.$t("translate.speakText"),
                  placement: "top",
                  "hide-after": 1e3,
                  "popper-class": "themed-tooltip-popper"
                }, {
                  default: ee(() => [
                    I("button", {
                      type: "button",
                      onClick: Q[5] || (Q[5] = (le) => V(f(a), f(s))),
                      class: "action-btn"
                    }, [
                      j(f(Ys), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"]),
                f(c) ? (A(), ne(te, {
                  key: 0,
                  content: U.$t("translate.deleteText"),
                  placement: "top",
                  "hide-after": 1e3,
                  "popper-class": "themed-tooltip-popper"
                }, {
                  default: ee(() => [
                    I("button", {
                      type: "button",
                      onClick: Z,
                      class: "action-btn"
                    }, [
                      j(f(Zd), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"])) : G("v-if", !0)
              ])
            ])
          ]),
          G(" 多引擎翻译结果区域 "),
          I("div", sE, [
            (A(!0), B(
              Ve,
              null,
              Jt(f(h), (le) => (A(), B(
                "div",
                {
                  key: le.engine,
                  class: W(["result-card", { "result-expanded": le.expanded }])
                },
                [
                  I("button", {
                    type: "button",
                    class: "result-header",
                    onClick: (Be) => ye(le)
                  }, [
                    I("div", lE, [
                      le.engine === "google" ? (A(), B("img", {
                        key: 0,
                        src: f(T_),
                        class: "engine-icon",
                        alt: "Google"
                      }, null, 8, cE)) : le.engine === "bing" ? (A(), B("img", {
                        key: 1,
                        src: f(k_),
                        class: "engine-icon",
                        alt: "Bing"
                      }, null, 8, uE)) : le.engine === "offline" ? (A(), B("span", dE, "离")) : (A(), B("span", fE, "AI")),
                      I(
                        "span",
                        null,
                        X(v(le.engine)),
                        1
                        /* TEXT */
                      )
                    ]),
                    I("div", pE, [
                      (A(), ne(gt(le.expanded ? f(tf) : f(qd)), {
                        size: 18,
                        class: "expand-icon"
                      }))
                    ])
                  ], 8, iE),
                  le.expanded ? (A(), B("div", mE, [
                    le.loading ? (A(), ne(Ge, {
                      key: 0,
                      rows: 3,
                      animated: ""
                    })) : le.text ? (A(), B("div", {
                      key: 1,
                      class: "result-text",
                      contenteditable: "plaintext-only",
                      spellcheck: "false",
                      textContent: X(le.text),
                      onBlur: (Be) => P(le, Be)
                    }, null, 40, gE)) : (A(), B(
                      "div",
                      hE,
                      X(U.$t("translate.resultPlaceholder")),
                      1
                      /* TEXT */
                    )),
                    I("div", vE, [
                      j(te, {
                        content: U.$t("translate.speakText"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: ee(() => [
                          I("button", {
                            type: "button",
                            onClick: (Be) => V(le.text, f(i)),
                            class: "action-btn"
                          }, [
                            j(f(Ys), { size: 18 })
                          ], 8, yE)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      j(te, {
                        content: U.$t("translate.copyResult"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: ee(() => [
                          I("button", {
                            type: "button",
                            onClick: (Be) => oe(le.text),
                            class: "action-btn"
                          }, [
                            j(f(Yd), { size: 18 })
                          ], 8, bE)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      j(te, {
                        content: U.$t("translate.translateBack"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: ee(() => [
                          I("button", {
                            type: "button",
                            onClick: (Be) => nt(le),
                            class: "action-btn rotate-icon"
                          }, [
                            j(f(Gs), { size: 18 })
                          ], 8, _E)
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
}), ea = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, EE = /* @__PURE__ */ ea(wE, [["__scopeId", "data-v-b5e3d672"]]), SE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EE
}, Symbol.toStringTag, { value: "Module" })), CE = ["disabled"], TE = {
  key: 0,
  class: "custom-button__loading"
}, kE = /* @__PURE__ */ q({
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
    return (n, r) => (A(), B("button", {
      class: W([
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
      e.loading ? (A(), B("div", TE, r[1] || (r[1] = [
        I(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            I("circle", {
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
      ce(n.$slots, "default", {}, void 0, !0)
    ], 10, CE));
  }
}), no = /* @__PURE__ */ ea(kE, [["__scopeId", "data-v-9497085f"]]);
async function OE() {
  try {
    return await F("get_attachment_config");
  } catch (e) {
    throw new Error(`获取附件配置失败: ${e}`);
  }
}
async function PE(e) {
  try {
    await F("update_attachment_config", { config: e });
  } catch (t) {
    throw new Error(`更新附件配置失败: ${t}`);
  }
}
const LE = { class: "settings-panel" }, IE = { class: "panel-header" }, AE = { class: "panel-title" }, RE = { class: "panel-content" }, $E = { class: "summarize-section" }, NE = { class: "summarize-label" }, ME = { class: "summarize-label-title" }, xE = { class: "summarize-label-desc" }, FE = { class: "summarize-input-wrapper" }, DE = { class: "summarize-section" }, zE = { class: "summarize-label" }, BE = { class: "summarize-label-title" }, UE = { class: "summarize-label-desc" }, WE = { class: "summarize-input-wrapper" }, jE = { class: "flex items-center gap-3" }, VE = {
  key: 0,
  class: "summarize-section"
}, HE = { class: "summarize-label" }, KE = { class: "summarize-label-title" }, GE = { class: "summarize-label-desc" }, YE = { class: "summarize-input-wrapper flex-col !items-start" }, ZE = { class: "w-full space-y-2" }, qE = { class: "w-5 text-center" }, XE = {
  key: 0,
  class: "text-green-500 text-base"
}, JE = {
  key: 1,
  class: "text-red-500 text-base"
}, QE = {
  key: 2,
  class: "text-yellow-500 text-base"
}, eS = {
  key: 3,
  class: "text-panel-text-secondary text-base"
}, tS = ["title"], nS = { class: "w-16 text-right text-xs text-panel-text-secondary" }, rS = { class: "w-24" }, oS = {
  key: 1,
  class: "text-green-500 text-xs"
}, aS = {
  key: 2,
  class: "text-red-500 text-xs"
}, sS = {
  key: 3,
  class: "text-panel-text-secondary text-xs"
}, iS = {
  key: 1,
  class: "summarize-section !mt-2"
}, lS = { class: "summarize-label" }, cS = { class: "summarize-label-title" }, uS = { class: "summarize-label-desc" }, dS = { class: "summarize-input-wrapper" }, fS = { class: "model-info-card" }, pS = { class: "info-row" }, mS = { class: "info-item" }, gS = { class: "info-label" }, hS = { class: "info-item" }, vS = { class: "info-label" }, yS = { class: "info-value" }, bS = { class: "info-item" }, _S = { class: "info-label" }, wS = { class: "info-value" }, ES = { class: "summarize-section !mt-2" }, SS = { class: "summarize-label" }, CS = { class: "summarize-label-title" }, TS = { class: "summarize-label-desc" }, kS = { class: "summarize-input-wrapper" }, OS = { class: "usage-tips" }, PS = { class: "tip-item" }, LS = { class: "tip-text" }, IS = { class: "tip-item" }, AS = { class: "tip-text" }, RS = { class: "tip-item" }, $S = { class: "tip-text" }, NS = { class: "tip-item" }, MS = { class: "tip-text" }, xS = "resources/transformers/transformers.min.js", FS = "translation-offline-runtime", DS = /* @__PURE__ */ q({
  name: "Translation",
  __name: "index",
  setup(e) {
    const { t } = or(), n = ["translation-offline-runtime", "translation"], r = z("bing"), o = z(!1), a = z(!1), s = z({ isCached: !1, cacheType: "none" }), i = z(!1), l = z(!1), c = z(!1), d = z(!1), p = z([]), m = L(() => s.value.isCached), g = L(() => [
      { value: "google", label: t("translation.google") },
      { value: "bing", label: t("translation.bing") },
      { value: "offline", label: t("translation.offline") },
      { value: "local-ai", label: t("translation.localAi") }
    ]), h = L(() => i.value ? t("translation.modelLoading") : c.value ? o.value ? t("translation.modelReady") : m.value && a.value ? t("translation.modelActivated") : m.value ? t("translation.modelCached") : t("translation.modelNotLoaded") : t("translation.runtimeMissing")), v = L(() => i.value ? "text-yellow-500" : c.value ? o.value || m.value && a.value ? "text-green-500" : m.value ? "text-blue-500" : "text-panel-text-secondary" : "text-red-500"), S = L(() => o.value || m.value), u = () => {
      const P = z2();
      p.value = P.map((V) => ({
        file: V.name,
        progress: 0,
        status: "pending",
        size: V.size
      }));
    }, E = (P, V, re) => {
      const de = p.value.find((ae) => P.includes(ae.file) || ae.file.includes(P));
      de && (de.progress = V, de.status = re);
    }, y = async () => {
      for (const P of n)
        if (await Bs(P, xS))
          return c.value = !0, !0;
      return c.value = !1, !1;
    }, w = async () => {
      d.value = !0;
      try {
        const P = await Rw(Ow), V = Array.isArray(P.plugins) ? P.plugins : [], re = V.find((de) => de.id === FS);
        if (!re)
          throw new Error(t("translation.runtimeMarketplaceMissing"));
        if (await C(re, V), await y() || (K.info("[翻译设置] 运行时资源包缺少 runtime 文件，开始补全资源"), await ga()), !await y())
          throw new Error(t("translation.runtimeInstallVerifyFailed"));
        Ye.msg(t("translation.runtimeInstallSuccess"));
      } catch (P) {
        K.error("[翻译设置] 安装离线翻译运行时失败:", P), Ye.msg(
          P instanceof Error ? P.message : t("translation.runtimeInstallFailed"),
          "error"
        );
      } finally {
        d.value = !1;
      }
    }, k = (P) => Array.isArray(P.dependencies) ? P.dependencies.filter((V) => typeof V == "string" && !!V.trim()) : [], O = (P) => !!(P.packageUrl && P.status !== "included"), C = async (P, V, re = /* @__PURE__ */ new Set()) => {
      if (!re.has(P.id)) {
        re.add(P.id);
        try {
          for (const de of k(P)) {
            const ae = V.find((M) => M.id === de);
            if (!ae)
              throw new Error(t("plugins.dependencyMissing", { id: de }));
            await C(ae, V, re);
          }
          P.packageUrl && O(P) && (K.info("[翻译设置] 开始安装离线翻译运行时资源包", {
            pluginId: P.id,
            packageUrl: P.packageUrl
          }), await td(
            P.packageUrl,
            !0,
            P.packageSubdir,
            P.sizeBytes
          ));
        } finally {
          re.delete(P.id);
        }
      }
    }, D = async (P) => {
      try {
        await F("set_translation_engine", { engine: P }), Ye.msg(t("translation.engineSaved"));
      } catch (V) {
        K.info("Failed to save translation engine:", V), Ye.msg(t("translation.engineSaveFailed"), "error");
      }
    }, x = async () => {
      if (K.info("[翻译设置] 开始下载离线模型..."), !await y()) {
        Ye.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await ga(), await y();
      } catch (P) {
        K.error("[翻译设置] 修复离线翻译运行时失败:", P), Ye.msg(P instanceof Error && P.message ? P.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      i.value = !0, u(), Gl((P) => {
        const V = P.file || "";
        P.status === "initiate" ? E(V, 0, "downloading") : P.status === "progress" && P.progress !== void 0 ? E(V, Math.round(P.progress), "downloading") : P.status === "done" && E(V, 100, "done");
      });
      try {
        await qa(), p.value.forEach((P) => {
          P.status !== "done" && (P.status = "done"), P.progress = 100;
        }), o.value = !0, a.value = !0, s.value = await hr(), K.info("[翻译设置] 模型下载并加载成功，更新后端激活状态为 true"), await F("set_offline_model_activated", { activated: !0 }), Ye.msg(t("translation.modelLoadSuccess"));
      } catch (P) {
        K.error("[翻译设置] 模型下载失败:", P), p.value.forEach((V) => {
          (V.status === "downloading" || V.status === "pending") && (V.status = "error");
        }), o.value = !1, Ye.msg(P instanceof Error && P.message ? P.message : t("translation.modelLoadFailed"), "error");
      } finally {
        i.value = !1, Gl(null), o.value = to(), s.value = await hr(), K.info(`[翻译设置] 最终状态 - 内存加载: ${o.value}, 缓存存在: ${s.value.isCached}`);
      }
    }, Z = async () => {
      if (K.info("[翻译设置] 开始激活离线模型..."), !await y()) {
        Ye.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await ga(), await y();
      } catch (P) {
        K.error("[翻译设置] 修复离线翻译运行时失败:", P), Ye.msg(P instanceof Error && P.message ? P.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      i.value = !0;
      try {
        await qa(), o.value = !0, a.value = !0, K.info("[翻译设置] 模型激活成功，更新后端激活状态为 true"), await F("set_offline_model_activated", { activated: !0 }), Ye.msg(t("translation.modelLoadSuccess"));
      } catch (P) {
        K.error("[翻译设置] 模型激活失败:", P), o.value = !1, Ye.msg(P instanceof Error && P.message ? P.message : t("translation.modelLoadFailed"), "error");
      } finally {
        i.value = !1, o.value = to(), K.info(`[翻译设置] 激活后状态 - 内存加载: ${o.value}`);
      }
    }, oe = async () => {
      K.info("[翻译设置] 开始删除离线模型..."), l.value = !0;
      try {
        await H2(), await K2(), o.value = !1, a.value = !1, s.value = { isCached: !1, cacheType: "none" }, K.info("[翻译设置] 模型删除成功，更新后端激活状态为 false"), await F("set_offline_model_activated", { activated: !1 }), Ye.msg(t("translation.modelDeleted"));
      } catch (P) {
        K.error("[翻译设置] 模型删除失败:", P), Ye.msg(t("translation.modelDeleteFailed"), "error");
      } finally {
        l.value = !1, o.value = to(), s.value = await hr(), K.info(`[翻译设置] 删除后状态 - 内存加载: ${o.value}, 缓存存在: ${s.value.isCached}`);
      }
    };
    return Fe(async () => {
      K.info("[翻译设置] 页面初始化..."), await y();
      try {
        const re = await F("get_translation_engine");
        K.info(`[翻译设置] 从后端获取翻译引擎: ${re}`), re && ["google", "bing", "offline", "local-ai"].includes(re) && (r.value = re);
      } catch (re) {
        K.error("[翻译设置] 获取翻译引擎失败:", re);
      }
      const P = to(), V = W2();
      s.value = await hr(), K.info(`[翻译设置] 前端状态 - 内存加载: ${P}, 正在初始化: ${V}, 缓存存在: ${s.value.isCached}`), o.value = P, i.value = V;
      try {
        const re = await F("get_offline_model_activated");
        K.info(`[翻译设置] 后端激活状态: ${re}`), a.value = re, re && !s.value.isCached && (K.info("[翻译设置] 后端已激活但缓存不存在，重置后端状态"), await F("set_offline_model_activated", { activated: !1 }), a.value = !1), !re && P && (K.info("[翻译设置] 内存已加载但后端未标记，同步后端状态为 true"), await F("set_offline_model_activated", { activated: !0 }), a.value = !0);
      } catch (re) {
        K.error("[翻译设置] 处理激活状态失败:", re);
      }
    }), (P, V) => {
      const re = Is, de = Ls, ae = Bb;
      return A(), B("div", LE, [
        G(" 固定标题 "),
        I("div", IE, [
          I(
            "h3",
            AE,
            X(P.$t("translation.title")),
            1
            /* TEXT */
          )
        ]),
        G(" 可滚动内容 "),
        I("main", RE, [
          G(" 默认翻译引擎 "),
          I("section", $E, [
            I("div", NE, [
              I(
                "div",
                ME,
                X(P.$t("translation.defaultEngine")),
                1
                /* TEXT */
              ),
              I(
                "div",
                xE,
                X(P.$t("translation.defaultEngineDesc")),
                1
                /* TEXT */
              )
            ]),
            I("div", FE, [
              j(de, {
                class: "summarize-input !w-36",
                modelValue: r.value,
                "onUpdate:modelValue": V[0] || (V[0] = (M) => r.value = M),
                onChange: D
              }, {
                default: ee(() => [
                  (A(!0), B(
                    Ve,
                    null,
                    Jt(g.value, (M) => (A(), ne(re, {
                      key: M.value,
                      label: M.label,
                      value: M.value
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
          I("section", DE, [
            I("div", zE, [
              I(
                "div",
                BE,
                X(P.$t("translation.offlineModel")),
                1
                /* TEXT */
              ),
              I(
                "div",
                UE,
                X(P.$t("translation.offlineModelDesc")),
                1
                /* TEXT */
              )
            ]),
            I("div", WE, [
              I("div", jE, [
                I(
                  "span",
                  {
                    class: W(["text-sm font-medium", v.value])
                  },
                  X(h.value),
                  3
                  /* TEXT, CLASS */
                ),
                !c.value && !i.value ? (A(), ne(f(no), {
                  key: 0,
                  type: "primary",
                  size: "small",
                  loading: d.value,
                  onClick: w
                }, {
                  default: ee(() => [
                    Cn(
                      X(P.$t("translation.installRuntime")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : G("v-if", !0),
                c.value && !m.value && !i.value ? (A(), ne(f(no), {
                  key: 1,
                  type: "primary",
                  size: "small",
                  onClick: x
                }, {
                  default: ee(() => [
                    Cn(
                      X(P.$t("translation.loadModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : G("v-if", !0),
                c.value && m.value && !o.value && !a.value && !i.value ? (A(), ne(f(no), {
                  key: 2,
                  type: "primary",
                  size: "small",
                  onClick: Z
                }, {
                  default: ee(() => [
                    Cn(
                      X(P.$t("translation.activateModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : G("v-if", !0),
                m.value && !i.value ? (A(), ne(f(no), {
                  key: 3,
                  type: "default",
                  size: "small",
                  onClick: oe,
                  loading: l.value
                }, {
                  default: ee(() => [
                    Cn(
                      X(P.$t("translation.deleteModel")),
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
          i.value ? (A(), B("section", VE, [
            I("div", HE, [
              I(
                "div",
                KE,
                X(P.$t("translation.downloadProgress")),
                1
                /* TEXT */
              ),
              I(
                "div",
                GE,
                X(P.$t("translation.downloadProgressDesc")),
                1
                /* TEXT */
              )
            ]),
            I("div", YE, [
              I("div", ZE, [
                (A(!0), B(
                  Ve,
                  null,
                  Jt(p.value, (M) => (A(), B("div", {
                    key: M.file,
                    class: "flex items-center gap-3 py-1"
                  }, [
                    I("span", qE, [
                      M.status === "done" ? (A(), B("span", XE, "✓")) : M.status === "error" ? (A(), B("span", JE, "✗")) : M.status === "downloading" ? (A(), B("span", QE, "↓")) : (A(), B("span", eS, "○"))
                    ]),
                    I("span", {
                      class: "w-64 truncate text-sm text-panel-text-secondary",
                      title: M.file
                    }, X(M.file), 9, tS),
                    I(
                      "span",
                      nS,
                      X(M.size),
                      1
                      /* TEXT */
                    ),
                    I("div", rS, [
                      M.status === "downloading" ? (A(), ne(ae, {
                        key: 0,
                        percentage: M.progress,
                        "stroke-width": 6,
                        "show-text": !0,
                        "text-inside": !1
                      }, null, 8, ["percentage"])) : M.status === "done" ? (A(), B(
                        "span",
                        oS,
                        X(P.$t("translation.completed")),
                        1
                        /* TEXT */
                      )) : M.status === "error" ? (A(), B(
                        "span",
                        aS,
                        X(P.$t("translation.failed")),
                        1
                        /* TEXT */
                      )) : (A(), B(
                        "span",
                        sS,
                        X(P.$t("translation.waiting")),
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
          S.value && !i.value ? (A(), B("section", iS, [
            I("div", lS, [
              I(
                "div",
                cS,
                X(P.$t("translation.modelInfo")),
                1
                /* TEXT */
              ),
              I(
                "div",
                uS,
                X(P.$t("translation.modelInfoDesc")),
                1
                /* TEXT */
              )
            ]),
            I("div", dS, [
              I("div", fS, [
                I("div", pS, [
                  I("div", mS, [
                    I(
                      "span",
                      gS,
                      X(P.$t("translation.modelName")),
                      1
                      /* TEXT */
                    ),
                    V[1] || (V[1] = I(
                      "span",
                      { class: "info-value" },
                      "Xenova/opus-mt-en-zh",
                      -1
                      /* HOISTED */
                    ))
                  ]),
                  I("div", hS, [
                    I(
                      "span",
                      vS,
                      X(P.$t("translation.modelSize")),
                      1
                      /* TEXT */
                    ),
                    I(
                      "span",
                      yS,
                      X(s.value.estimatedSize || "~300MB"),
                      1
                      /* TEXT */
                    )
                  ]),
                  I("div", bS, [
                    I(
                      "span",
                      _S,
                      X(P.$t("translation.supportLang")),
                      1
                      /* TEXT */
                    ),
                    I(
                      "span",
                      wS,
                      X(P.$t("translation.enToZh")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ])) : G("v-if", !0),
          G(" 使用说明 "),
          I("section", ES, [
            I("div", SS, [
              I(
                "div",
                CS,
                X(P.$t("translation.usage")),
                1
                /* TEXT */
              ),
              I(
                "div",
                TS,
                X(P.$t("translation.usageDesc")),
                1
                /* TEXT */
              )
            ]),
            I("div", kS, [
              I("div", OS, [
                I("div", PS, [
                  V[2] || (V[2] = I(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  I(
                    "span",
                    LS,
                    X(P.$t("translation.usageTip1")),
                    1
                    /* TEXT */
                  )
                ]),
                I("div", IS, [
                  V[3] || (V[3] = I(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  I(
                    "span",
                    AS,
                    X(P.$t("translation.usageTip2")),
                    1
                    /* TEXT */
                  )
                ]),
                I("div", RS, [
                  V[4] || (V[4] = I(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  I(
                    "span",
                    $S,
                    X(P.$t("translation.usageTip3")),
                    1
                    /* TEXT */
                  )
                ]),
                I("div", NS, [
                  V[5] || (V[5] = I(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  I(
                    "span",
                    MS,
                    X(P.$t("translation.usageTip4")),
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
}), zS = /* @__PURE__ */ ea(DS, [["__scopeId", "data-v-b5694b08"]]), BS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zS
}, Symbol.toStringTag, { value: "Module" })), US = { class: "settings-panel" }, WS = { class: "panel-header" }, jS = { class: "panel-title" }, VS = { class: "panel-content" }, HS = { class: "summarize-section transparent-input" }, KS = { class: "summarize-label" }, GS = { class: "summarize-label-title" }, YS = { class: "summarize-label-desc" }, ZS = { class: "summarize-input-wrapper" }, qS = { class: "summarize-section transparent-input" }, XS = { class: "summarize-label" }, JS = { class: "summarize-label-title" }, QS = { class: "summarize-label-desc" }, e3 = { class: "summarize-input-wrapper" }, t3 = { class: "summarize-section transparent-input" }, n3 = { class: "summarize-label" }, r3 = { class: "summarize-label-title" }, o3 = { class: "summarize-label-desc" }, a3 = { class: "summarize-input-wrapper" }, s3 = { class: "preview-box" }, i3 = /* @__PURE__ */ q({
  name: "AttachmentSettings",
  __name: "index",
  setup(e) {
    const { t } = or(), n = z({
      pathTemplate: "assets/${noteFileName}/",
      filenameFormat: "snippets-code"
    }), r = z(!1), o = z(!1), a = L(() => {
      const l = t("settings.attachment.exampleNoteName") || "示例笔记", c = s(n.value.filenameFormat);
      return n.value.pathTemplate.replace("${noteFileName}", l) + c;
    });
    function s(l) {
      const c = /* @__PURE__ */ new Date(), d = c.toISOString().slice(0, 10).replace(/-/g, ""), p = c.toTimeString().slice(0, 8).replace(/:/g, "");
      switch (l) {
        case "snippets-code":
          return `Pasted image ${d}${p}.png`;
        case "simple":
          return `image-${d}-${p}.png`;
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
          await PE(n.value), Ye.msg(t("settings.attachment.configSaved"));
        } catch (l) {
          console.error("保存配置失败:", l), Ye.msg(t("settings.attachment.configSaveFailed"), "error");
        } finally {
          o.value = !1;
        }
      }
    }
    return Fe(async () => {
      r.value = !0;
      try {
        n.value = await OE();
      } catch (l) {
        console.error("加载配置失败:", l);
      } finally {
        r.value = !1;
      }
    }), (l, c) => {
      const d = Vc, p = Is, m = Ls;
      return A(), B("div", US, [
        G(" 固定标题 "),
        I("div", WS, [
          I(
            "h3",
            jS,
            X(l.$t("settings.attachment.title")),
            1
            /* TEXT */
          )
        ]),
        G(" 可滚动内容 "),
        I("main", VS, [
          G(" 附件路径模板 "),
          I("section", HS, [
            I("div", KS, [
              I(
                "div",
                GS,
                X(l.$t("settings.attachment.pathTemplate")),
                1
                /* TEXT */
              ),
              I(
                "div",
                YS,
                X(l.$t("settings.attachment.pathTemplateHint")),
                1
                /* TEXT */
              )
            ]),
            I("div", ZS, [
              j(d, {
                class: "summarize-input",
                modelValue: f(n).pathTemplate,
                "onUpdate:modelValue": c[0] || (c[0] = (g) => f(n).pathTemplate = g),
                placeholder: l.$t("settings.attachment.pathTemplatePlaceholder"),
                disabled: f(o),
                onBlur: i
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          G(" 文件名生成格式 "),
          I("section", qS, [
            I("div", XS, [
              I(
                "div",
                JS,
                X(l.$t("settings.attachment.filenameFormat")),
                1
                /* TEXT */
              ),
              I(
                "div",
                QS,
                X(l.$t("settings.attachment.filenameFormatHint")),
                1
                /* TEXT */
              )
            ]),
            I("div", e3, [
              j(m, {
                class: "summarize-input !w-64",
                modelValue: f(n).filenameFormat,
                "onUpdate:modelValue": c[1] || (c[1] = (g) => f(n).filenameFormat = g),
                disabled: f(o),
                onChange: i
              }, {
                default: ee(() => [
                  j(p, {
                    label: l.$t("settings.attachment.formatObsidian"),
                    value: "obsidian"
                  }, null, 8, ["label"]),
                  j(p, {
                    label: l.$t("settings.attachment.formatSimple"),
                    value: "simple"
                  }, null, 8, ["label"]),
                  j(p, {
                    label: l.$t("settings.attachment.formatUuid"),
                    value: "uuid"
                  }, null, 8, ["label"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "disabled"])
            ])
          ]),
          G(" 路径预览 "),
          I("section", t3, [
            I("div", n3, [
              I(
                "div",
                r3,
                X(l.$t("settings.attachment.pathPreview")),
                1
                /* TEXT */
              ),
              I(
                "div",
                o3,
                X(l.$t("settings.attachment.pathPreviewHint")),
                1
                /* TEXT */
              )
            ]),
            I("div", a3, [
              I("div", s3, [
                I(
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
}), l3 = /* @__PURE__ */ ea(i3, [["__scopeId", "data-v-52dba400"]]), c3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: l3
}, Symbol.toStringTag, { value: "Module" }));
export {
  d3 as activate
};
