var gc = Object.defineProperty;
var vc = (e, t, n) => t in e ? gc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Un = (e, t, n) => vc(e, typeof t != "symbol" ? t + "" : t, n);
import * as yc from "vue";
import { inject as ye, createVNode as F, defineAsyncComponent as pr, getCurrentInstance as Ue, ref as M, computed as b, unref as l, shallowRef as Xt, watchEffect as Yi, readonly as mr, getCurrentScope as bc, onScopeDispose as wc, onMounted as Ie, nextTick as Se, watch as ie, isRef as oo, warn as _c, provide as vt, defineComponent as G, createElementBlock as A, openBlock as w, mergeProps as Jt, renderSlot as se, createElementVNode as y, toRef as St, onUnmounted as Xi, useAttrs as Sc, useSlots as kc, normalizeStyle as we, normalizeClass as N, createCommentVNode as H, Fragment as Oe, createBlock as Y, withCtx as q, resolveDynamicComponent as st, withModifiers as $e, toDisplayString as K, onBeforeUnmount as Et, Transition as Bn, withDirectives as Ye, vShow as Ft, reactive as Bt, onActivated as Cc, onUpdated as Ji, cloneVNode as Pc, Text as Ec, Comment as Tc, Teleport as Ic, onBeforeMount as $c, onDeactivated as Oc, createTextVNode as sn, withKeys as xt, createSlots as xc, toRaw as Lc, toRefs as In, resolveComponent as on, resolveDirective as Ac, toHandlerKey as Rc, renderList as it, vModelText as Mc, normalizeProps as zc, h as Qi, shallowReactive as Nc, isVNode as fo, render as qo, markRaw as os } from "vue";
import * as Fc from "vue-i18n";
import { useI18n as hr } from "vue-i18n";
import * as Bc from "pinia";
import { defineStore as wo } from "pinia";
import * as Vc from "vue-router";
var Dc = {
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
function Hc() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Wc(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], a = [], s = t.theme || n.theme;
  switch (s) {
    case "outline":
      a.push(typeof o[0] == "string" ? o[0] : "currentColor"), a.push("none"), a.push(typeof o[0] == "string" ? o[0] : "currentColor"), a.push("none");
      break;
    case "filled":
      a.push(typeof o[0] == "string" ? o[0] : "currentColor"), a.push(typeof o[0] == "string" ? o[0] : "currentColor"), a.push("#FFF"), a.push("#FFF");
      break;
    case "two-tone":
      a.push(typeof o[0] == "string" ? o[0] : "currentColor"), a.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone), a.push(typeof o[0] == "string" ? o[0] : "currentColor"), a.push(typeof o[1] == "string" ? o[1] : n.colors.twoTone.twoTone);
      break;
    case "multi-color":
      a.push(typeof o[0] == "string" ? o[0] : "currentColor"), a.push(typeof o[1] == "string" ? o[1] : n.colors.multiColor.outFillColor), a.push(typeof o[2] == "string" ? o[2] : n.colors.multiColor.innerStrokeColor), a.push(typeof o[3] == "string" ? o[3] : n.colors.multiColor.innerFillColor);
      break;
  }
  return {
    size: t.size || n.size,
    strokeWidth: t.strokeWidth || n.strokeWidth,
    strokeLinecap: t.strokeLinecap || n.strokeLinecap,
    strokeLinejoin: t.strokeLinejoin || n.strokeLinejoin,
    colors: a,
    id: e
  };
}
var jc = Symbol("icon-context");
function bt(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var r = Hc(), i = ye(jc, Dc);
      return function() {
        var u = s.size, c = s.strokeWidth, d = s.strokeLinecap, p = s.strokeLinejoin, h = s.theme, m = s.fill, f = s.spin, g = Wc(r, {
          size: u,
          strokeWidth: c,
          strokeLinecap: d,
          strokeLinejoin: p,
          theme: h,
          fill: m
        }, i), S = [i.prefix + "-icon"];
        return S.push(i.prefix + "-icon-" + e), t && i.rtl && S.push(i.prefix + "-icon-rtl"), f && S.push(i.prefix + "-icon-spin"), F("span", {
          class: S.join(" ")
        }, [n(g)]);
      };
    }
  };
  return o;
}
const Uc = bt("close-small", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Kc = bt("copy", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Gc = bt("delete", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Zc = bt("down", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), qc = bt("folder-open", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Yc = bt("pushpin", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Xc = bt("setting-two", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), as = bt("switch", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M42 19H5.99998",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M30 7L42 19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M6.79897 29H42.799",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M6.79895 29L18.799 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Jc = bt("translate", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Qc = bt("up", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M13 30L25 18L37 30",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), rs = bt("volume-up", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M32 24H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M38 18V30",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wk = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/translate",
    name: "Translate",
    component: () => Promise.resolve().then(() => s3)
  }), e.registerSettingsTab({
    id: "translation",
    labelKey: "translation.title",
    icon: Jc,
    component: pr(() => Promise.resolve().then(() => CS))
  });
}, el = Symbol(), Ho = "el", ed = "is-", an = (e, t, n, o, a) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), a && (s += `--${a}`), s;
}, tl = Symbol("namespaceContextKey"), gr = (e) => {
  const t = e || (Ue() ? ye(tl, M(Ho)) : M(Ho));
  return b(() => l(t) || Ho);
}, Pe = (e, t) => {
  const n = gr(t);
  return {
    namespace: n,
    b: (g = "") => an(n.value, e, g, "", ""),
    e: (g) => g ? an(n.value, e, "", g, "") : "",
    m: (g) => g ? an(n.value, e, "", "", g) : "",
    be: (g, S) => g && S ? an(n.value, e, g, S, "") : "",
    em: (g, S) => g && S ? an(n.value, e, "", g, S) : "",
    bm: (g, S) => g && S ? an(n.value, e, g, "", S) : "",
    bem: (g, S, v) => g && S && v ? an(n.value, e, g, S, v) : "",
    is: (g, ...S) => {
      const v = S.length >= 1 ? S[0] : !0;
      return g && v ? `${ed}${g}` : "";
    },
    cssVar: (g) => {
      const S = {};
      for (const v in g)
        g[v] && (S[`--${n.value}-${v}`] = g[v]);
      return S;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const S = {};
      for (const v in g)
        g[v] && (S[`--${n.value}-${e}-${v}`] = g[v]);
      return S;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const po = () => {
}, td = Object.prototype.hasOwnProperty, ss = (e, t) => td.call(e, t), We = Array.isArray, xe = (e) => typeof e == "function", Be = (e) => typeof e == "string", qe = (e) => e !== null && typeof e == "object", nd = Object.prototype.toString, od = (e) => nd.call(e), ad = (e) => od(e) === "[object Object]";
var nl = typeof global == "object" && global && global.Object === Object && global, rd = typeof self == "object" && self && self.Object === Object && self, Tt = nl || rd || Function("return this")(), Ct = Tt.Symbol, ol = Object.prototype, sd = ol.hasOwnProperty, id = ol.toString, Kn = Ct ? Ct.toStringTag : void 0;
function ld(e) {
  var t = sd.call(e, Kn), n = e[Kn];
  try {
    e[Kn] = void 0;
    var o = !0;
  } catch {
  }
  var a = id.call(e);
  return o && (t ? e[Kn] = n : delete e[Kn]), a;
}
var ud = Object.prototype, cd = ud.toString;
function dd(e) {
  return cd.call(e);
}
var fd = "[object Null]", pd = "[object Undefined]", is = Ct ? Ct.toStringTag : void 0;
function Vn(e) {
  return e == null ? e === void 0 ? pd : fd : is && is in Object(e) ? ld(e) : dd(e);
}
function $n(e) {
  return e != null && typeof e == "object";
}
var md = "[object Symbol]";
function ma(e) {
  return typeof e == "symbol" || $n(e) && Vn(e) == md;
}
function hd(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = Array(o); ++n < o; )
    a[n] = t(e[n], n, e);
  return a;
}
var yt = Array.isArray, ls = Ct ? Ct.prototype : void 0, us = ls ? ls.toString : void 0;
function al(e) {
  if (typeof e == "string")
    return e;
  if (yt(e))
    return hd(e, al) + "";
  if (ma(e))
    return us ? us.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var gd = /\s/;
function vd(e) {
  for (var t = e.length; t-- && gd.test(e.charAt(t)); )
    ;
  return t;
}
var yd = /^\s+/;
function bd(e) {
  return e && e.slice(0, vd(e) + 1).replace(yd, "");
}
function Qt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var cs = NaN, wd = /^[-+]0x[0-9a-f]+$/i, _d = /^0b[01]+$/i, Sd = /^0o[0-7]+$/i, kd = parseInt;
function ds(e) {
  if (typeof e == "number")
    return e;
  if (ma(e))
    return cs;
  if (Qt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Qt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = bd(e);
  var n = _d.test(e);
  return n || Sd.test(e) ? kd(e.slice(2), n ? 2 : 8) : wd.test(e) ? cs : +e;
}
function rl(e) {
  return e;
}
var Cd = "[object AsyncFunction]", Pd = "[object Function]", Ed = "[object GeneratorFunction]", Td = "[object Proxy]";
function sl(e) {
  if (!Qt(e))
    return !1;
  var t = Vn(e);
  return t == Pd || t == Ed || t == Cd || t == Td;
}
var Oa = Tt["__core-js_shared__"], fs = function() {
  var e = /[^.]+$/.exec(Oa && Oa.keys && Oa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Id(e) {
  return !!fs && fs in e;
}
var $d = Function.prototype, Od = $d.toString;
function dn(e) {
  if (e != null) {
    try {
      return Od.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var xd = /[\\^$.*+?()[\]{}|]/g, Ld = /^\[object .+?Constructor\]$/, Ad = Function.prototype, Rd = Object.prototype, Md = Ad.toString, zd = Rd.hasOwnProperty, Nd = RegExp(
  "^" + Md.call(zd).replace(xd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Fd(e) {
  if (!Qt(e) || Id(e))
    return !1;
  var t = sl(e) ? Nd : Ld;
  return t.test(dn(e));
}
function Bd(e, t) {
  return e?.[t];
}
function fn(e, t) {
  var n = Bd(e, t);
  return Fd(n) ? n : void 0;
}
var Ga = fn(Tt, "WeakMap");
function Vd(e, t, n) {
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
var Dd = 800, Hd = 16, Wd = Date.now;
function jd(e) {
  var t = 0, n = 0;
  return function() {
    var o = Wd(), a = Hd - (o - n);
    if (n = o, a > 0) {
      if (++t >= Dd)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ud(e) {
  return function() {
    return e;
  };
}
var Yo = function() {
  try {
    var e = fn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Kd = Yo ? function(e, t) {
  return Yo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ud(t),
    writable: !0
  });
} : rl, Gd = jd(Kd);
function Zd(e, t, n, o) {
  e.length;
  for (var a = n + 1; a--; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var qd = 9007199254740991, Yd = /^(?:0|[1-9]\d*)$/;
function vr(e, t) {
  var n = typeof e;
  return t = t ?? qd, !!t && (n == "number" || n != "symbol" && Yd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Xd(e, t, n) {
  t == "__proto__" && Yo ? Yo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function yr(e, t) {
  return e === t || e !== e && t !== t;
}
var Jd = Object.prototype, Qd = Jd.hasOwnProperty;
function ef(e, t, n) {
  var o = e[t];
  (!(Qd.call(e, t) && yr(o, n)) || n === void 0 && !(t in e)) && Xd(e, t, n);
}
var ps = Math.max;
function tf(e, t, n) {
  return t = ps(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, a = -1, s = ps(o.length - t, 0), r = Array(s); ++a < s; )
      r[a] = o[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = o[a];
    return i[t] = n(r), Vd(e, this, i);
  };
}
var nf = 9007199254740991;
function br(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= nf;
}
function of(e) {
  return e != null && br(e.length) && !sl(e);
}
var af = Object.prototype;
function rf(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || af;
  return e === n;
}
function sf(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var lf = "[object Arguments]";
function ms(e) {
  return $n(e) && Vn(e) == lf;
}
var il = Object.prototype, uf = il.hasOwnProperty, cf = il.propertyIsEnumerable, wr = ms(/* @__PURE__ */ function() {
  return arguments;
}()) ? ms : function(e) {
  return $n(e) && uf.call(e, "callee") && !cf.call(e, "callee");
};
function df() {
  return !1;
}
var ll = typeof exports == "object" && exports && !exports.nodeType && exports, hs = ll && typeof module == "object" && module && !module.nodeType && module, ff = hs && hs.exports === ll, gs = ff ? Tt.Buffer : void 0, pf = gs ? gs.isBuffer : void 0, Za = pf || df, mf = "[object Arguments]", hf = "[object Array]", gf = "[object Boolean]", vf = "[object Date]", yf = "[object Error]", bf = "[object Function]", wf = "[object Map]", _f = "[object Number]", Sf = "[object Object]", kf = "[object RegExp]", Cf = "[object Set]", Pf = "[object String]", Ef = "[object WeakMap]", Tf = "[object ArrayBuffer]", If = "[object DataView]", $f = "[object Float32Array]", Of = "[object Float64Array]", xf = "[object Int8Array]", Lf = "[object Int16Array]", Af = "[object Int32Array]", Rf = "[object Uint8Array]", Mf = "[object Uint8ClampedArray]", zf = "[object Uint16Array]", Nf = "[object Uint32Array]", Ce = {};
Ce[$f] = Ce[Of] = Ce[xf] = Ce[Lf] = Ce[Af] = Ce[Rf] = Ce[Mf] = Ce[zf] = Ce[Nf] = !0;
Ce[mf] = Ce[hf] = Ce[Tf] = Ce[gf] = Ce[If] = Ce[vf] = Ce[yf] = Ce[bf] = Ce[wf] = Ce[_f] = Ce[Sf] = Ce[kf] = Ce[Cf] = Ce[Pf] = Ce[Ef] = !1;
function Ff(e) {
  return $n(e) && br(e.length) && !!Ce[Vn(e)];
}
function Bf(e) {
  return function(t) {
    return e(t);
  };
}
var ul = typeof exports == "object" && exports && !exports.nodeType && exports, ao = ul && typeof module == "object" && module && !module.nodeType && module, Vf = ao && ao.exports === ul, xa = Vf && nl.process, vs = function() {
  try {
    var e = ao && ao.require && ao.require("util").types;
    return e || xa && xa.binding && xa.binding("util");
  } catch {
  }
}(), ys = vs && vs.isTypedArray, cl = ys ? Bf(ys) : Ff, Df = Object.prototype, Hf = Df.hasOwnProperty;
function Wf(e, t) {
  var n = yt(e), o = !n && wr(e), a = !n && !o && Za(e), s = !n && !o && !a && cl(e), r = n || o || a || s, i = r ? sf(e.length, String) : [], u = i.length;
  for (var c in e)
    Hf.call(e, c) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    vr(c, u))) && i.push(c);
  return i;
}
function jf(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Uf = jf(Object.keys, Object), Kf = Object.prototype, Gf = Kf.hasOwnProperty;
function Zf(e) {
  if (!rf(e))
    return Uf(e);
  var t = [];
  for (var n in Object(e))
    Gf.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function dl(e) {
  return of(e) ? Wf(e) : Zf(e);
}
var qf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Yf = /^\w*$/;
function _r(e, t) {
  if (yt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ma(e) ? !0 : Yf.test(e) || !qf.test(e) || t != null && e in Object(t);
}
var mo = fn(Object, "create");
function Xf() {
  this.__data__ = mo ? mo(null) : {}, this.size = 0;
}
function Jf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Qf = "__lodash_hash_undefined__", ep = Object.prototype, tp = ep.hasOwnProperty;
function np(e) {
  var t = this.__data__;
  if (mo) {
    var n = t[e];
    return n === Qf ? void 0 : n;
  }
  return tp.call(t, e) ? t[e] : void 0;
}
var op = Object.prototype, ap = op.hasOwnProperty;
function rp(e) {
  var t = this.__data__;
  return mo ? t[e] !== void 0 : ap.call(t, e);
}
var sp = "__lodash_hash_undefined__";
function ip(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = mo && t === void 0 ? sp : t, this;
}
function un(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
un.prototype.clear = Xf;
un.prototype.delete = Jf;
un.prototype.get = np;
un.prototype.has = rp;
un.prototype.set = ip;
function lp() {
  this.__data__ = [], this.size = 0;
}
function ha(e, t) {
  for (var n = e.length; n--; )
    if (yr(e[n][0], t))
      return n;
  return -1;
}
var up = Array.prototype, cp = up.splice;
function dp(e) {
  var t = this.__data__, n = ha(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : cp.call(t, n, 1), --this.size, !0;
}
function fp(e) {
  var t = this.__data__, n = ha(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function pp(e) {
  return ha(this.__data__, e) > -1;
}
function mp(e, t) {
  var n = this.__data__, o = ha(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Dt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Dt.prototype.clear = lp;
Dt.prototype.delete = dp;
Dt.prototype.get = fp;
Dt.prototype.has = pp;
Dt.prototype.set = mp;
var ho = fn(Tt, "Map");
function hp() {
  this.size = 0, this.__data__ = {
    hash: new un(),
    map: new (ho || Dt)(),
    string: new un()
  };
}
function gp(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ga(e, t) {
  var n = e.__data__;
  return gp(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function vp(e) {
  var t = ga(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function yp(e) {
  return ga(this, e).get(e);
}
function bp(e) {
  return ga(this, e).has(e);
}
function wp(e, t) {
  var n = ga(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Ht(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ht.prototype.clear = hp;
Ht.prototype.delete = vp;
Ht.prototype.get = yp;
Ht.prototype.has = bp;
Ht.prototype.set = wp;
var _p = "Expected a function";
function Sr(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(_p);
  var n = function() {
    var o = arguments, a = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(a))
      return s.get(a);
    var r = e.apply(this, o);
    return n.cache = s.set(a, r) || s, r;
  };
  return n.cache = new (Sr.Cache || Ht)(), n;
}
Sr.Cache = Ht;
var Sp = 500;
function kp(e) {
  var t = Sr(e, function(o) {
    return n.size === Sp && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Cp = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pp = /\\(\\)?/g, Ep = kp(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Cp, function(n, o, a, s) {
    t.push(a ? s.replace(Pp, "$1") : o || n);
  }), t;
});
function Tp(e) {
  return e == null ? "" : al(e);
}
function va(e, t) {
  return yt(e) ? e : _r(e, t) ? [e] : Ep(Tp(e));
}
function _o(e) {
  if (typeof e == "string" || ma(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function kr(e, t) {
  t = va(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[_o(t[n++])];
  return n && n == o ? e : void 0;
}
function Yt(e, t, n) {
  var o = e == null ? void 0 : kr(e, t);
  return o === void 0 ? n : o;
}
function fl(e, t) {
  for (var n = -1, o = t.length, a = e.length; ++n < o; )
    e[a + n] = t[n];
  return e;
}
var bs = Ct ? Ct.isConcatSpreadable : void 0;
function Ip(e) {
  return yt(e) || wr(e) || !!(bs && e && e[bs]);
}
function $p(e, t, n, o, a) {
  var s = -1, r = e.length;
  for (n || (n = Ip), a || (a = []); ++s < r; ) {
    var i = e[s];
    n(i) ? fl(a, i) : a[a.length] = i;
  }
  return a;
}
function Op(e) {
  var t = e == null ? 0 : e.length;
  return t ? $p(e) : [];
}
function xp(e) {
  return Gd(tf(e, void 0, Op), e + "");
}
function qt() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return yt(e) ? e : [e];
}
function Lp() {
  this.__data__ = new Dt(), this.size = 0;
}
function Ap(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Rp(e) {
  return this.__data__.get(e);
}
function Mp(e) {
  return this.__data__.has(e);
}
var zp = 200;
function Np(e, t) {
  var n = this.__data__;
  if (n instanceof Dt) {
    var o = n.__data__;
    if (!ho || o.length < zp - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Ht(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Mt(e) {
  var t = this.__data__ = new Dt(e);
  this.size = t.size;
}
Mt.prototype.clear = Lp;
Mt.prototype.delete = Ap;
Mt.prototype.get = Rp;
Mt.prototype.has = Mp;
Mt.prototype.set = Np;
function Fp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = 0, s = []; ++n < o; ) {
    var r = e[n];
    t(r, n, e) && (s[a++] = r);
  }
  return s;
}
function Bp() {
  return [];
}
var Vp = Object.prototype, Dp = Vp.propertyIsEnumerable, ws = Object.getOwnPropertySymbols, Hp = ws ? function(e) {
  return e == null ? [] : (e = Object(e), Fp(ws(e), function(t) {
    return Dp.call(e, t);
  }));
} : Bp;
function Wp(e, t, n) {
  var o = t(e);
  return yt(e) ? o : fl(o, n(e));
}
function _s(e) {
  return Wp(e, dl, Hp);
}
var qa = fn(Tt, "DataView"), Ya = fn(Tt, "Promise"), Xa = fn(Tt, "Set"), Ss = "[object Map]", jp = "[object Object]", ks = "[object Promise]", Cs = "[object Set]", Ps = "[object WeakMap]", Es = "[object DataView]", Up = dn(qa), Kp = dn(ho), Gp = dn(Ya), Zp = dn(Xa), qp = dn(Ga), Gt = Vn;
(qa && Gt(new qa(new ArrayBuffer(1))) != Es || ho && Gt(new ho()) != Ss || Ya && Gt(Ya.resolve()) != ks || Xa && Gt(new Xa()) != Cs || Ga && Gt(new Ga()) != Ps) && (Gt = function(e) {
  var t = Vn(e), n = t == jp ? e.constructor : void 0, o = n ? dn(n) : "";
  if (o)
    switch (o) {
      case Up:
        return Es;
      case Kp:
        return Ss;
      case Gp:
        return ks;
      case Zp:
        return Cs;
      case qp:
        return Ps;
    }
  return t;
});
var Ts = Tt.Uint8Array, Yp = "__lodash_hash_undefined__";
function Xp(e) {
  return this.__data__.set(e, Yp), this;
}
function Jp(e) {
  return this.__data__.has(e);
}
function Xo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Ht(); ++t < n; )
    this.add(e[t]);
}
Xo.prototype.add = Xo.prototype.push = Xp;
Xo.prototype.has = Jp;
function Qp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function em(e, t) {
  return e.has(t);
}
var tm = 1, nm = 2;
function pl(e, t, n, o, a, s) {
  var r = n & tm, i = e.length, u = t.length;
  if (i != u && !(r && u > i))
    return !1;
  var c = s.get(e), d = s.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, h = !0, m = n & nm ? new Xo() : void 0;
  for (s.set(e, t), s.set(t, e); ++p < i; ) {
    var f = e[p], g = t[p];
    if (o)
      var S = r ? o(g, f, p, t, e, s) : o(f, g, p, e, t, s);
    if (S !== void 0) {
      if (S)
        continue;
      h = !1;
      break;
    }
    if (m) {
      if (!Qp(t, function(v, O) {
        if (!em(m, O) && (f === v || a(f, v, n, o, s)))
          return m.push(O);
      })) {
        h = !1;
        break;
      }
    } else if (!(f === g || a(f, g, n, o, s))) {
      h = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), h;
}
function om(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, a) {
    n[++t] = [a, o];
  }), n;
}
function am(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var rm = 1, sm = 2, im = "[object Boolean]", lm = "[object Date]", um = "[object Error]", cm = "[object Map]", dm = "[object Number]", fm = "[object RegExp]", pm = "[object Set]", mm = "[object String]", hm = "[object Symbol]", gm = "[object ArrayBuffer]", vm = "[object DataView]", Is = Ct ? Ct.prototype : void 0, La = Is ? Is.valueOf : void 0;
function ym(e, t, n, o, a, s, r) {
  switch (n) {
    case vm:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case gm:
      return !(e.byteLength != t.byteLength || !s(new Ts(e), new Ts(t)));
    case im:
    case lm:
    case dm:
      return yr(+e, +t);
    case um:
      return e.name == t.name && e.message == t.message;
    case fm:
    case mm:
      return e == t + "";
    case cm:
      var i = om;
    case pm:
      var u = o & rm;
      if (i || (i = am), e.size != t.size && !u)
        return !1;
      var c = r.get(e);
      if (c)
        return c == t;
      o |= sm, r.set(e, t);
      var d = pl(i(e), i(t), o, a, s, r);
      return r.delete(e), d;
    case hm:
      if (La)
        return La.call(e) == La.call(t);
  }
  return !1;
}
var bm = 1, wm = Object.prototype, _m = wm.hasOwnProperty;
function Sm(e, t, n, o, a, s) {
  var r = n & bm, i = _s(e), u = i.length, c = _s(t), d = c.length;
  if (u != d && !r)
    return !1;
  for (var p = u; p--; ) {
    var h = i[p];
    if (!(r ? h in t : _m.call(t, h)))
      return !1;
  }
  var m = s.get(e), f = s.get(t);
  if (m && f)
    return m == t && f == e;
  var g = !0;
  s.set(e, t), s.set(t, e);
  for (var S = r; ++p < u; ) {
    h = i[p];
    var v = e[h], O = t[h];
    if (o)
      var _ = r ? o(O, v, h, t, e, s) : o(v, O, h, e, t, s);
    if (!(_ === void 0 ? v === O || a(v, O, n, o, s) : _)) {
      g = !1;
      break;
    }
    S || (S = h == "constructor");
  }
  if (g && !S) {
    var T = e.constructor, P = t.constructor;
    T != P && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof P == "function" && P instanceof P) && (g = !1);
  }
  return s.delete(e), s.delete(t), g;
}
var km = 1, $s = "[object Arguments]", Os = "[object Array]", Lo = "[object Object]", Cm = Object.prototype, xs = Cm.hasOwnProperty;
function Pm(e, t, n, o, a, s) {
  var r = yt(e), i = yt(t), u = r ? Os : Gt(e), c = i ? Os : Gt(t);
  u = u == $s ? Lo : u, c = c == $s ? Lo : c;
  var d = u == Lo, p = c == Lo, h = u == c;
  if (h && Za(e)) {
    if (!Za(t))
      return !1;
    r = !0, d = !1;
  }
  if (h && !d)
    return s || (s = new Mt()), r || cl(e) ? pl(e, t, n, o, a, s) : ym(e, t, u, n, o, a, s);
  if (!(n & km)) {
    var m = d && xs.call(e, "__wrapped__"), f = p && xs.call(t, "__wrapped__");
    if (m || f) {
      var g = m ? e.value() : e, S = f ? t.value() : t;
      return s || (s = new Mt()), a(g, S, n, o, s);
    }
  }
  return h ? (s || (s = new Mt()), Sm(e, t, n, o, a, s)) : !1;
}
function ya(e, t, n, o, a) {
  return e === t ? !0 : e == null || t == null || !$n(e) && !$n(t) ? e !== e && t !== t : Pm(e, t, n, o, ya, a);
}
var Em = 1, Tm = 2;
function Im(e, t, n, o) {
  var a = n.length, s = a;
  if (e == null)
    return !s;
  for (e = Object(e); a--; ) {
    var r = n[a];
    if (r[2] ? r[1] !== e[r[0]] : !(r[0] in e))
      return !1;
  }
  for (; ++a < s; ) {
    r = n[a];
    var i = r[0], u = e[i], c = r[1];
    if (r[2]) {
      if (u === void 0 && !(i in e))
        return !1;
    } else {
      var d = new Mt(), p;
      if (!(p === void 0 ? ya(c, u, Em | Tm, o, d) : p))
        return !1;
    }
  }
  return !0;
}
function ml(e) {
  return e === e && !Qt(e);
}
function $m(e) {
  for (var t = dl(e), n = t.length; n--; ) {
    var o = t[n], a = e[o];
    t[n] = [o, a, ml(a)];
  }
  return t;
}
function hl(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Om(e) {
  var t = $m(e);
  return t.length == 1 && t[0][2] ? hl(t[0][0], t[0][1]) : function(n) {
    return n === e || Im(n, e, t);
  };
}
function xm(e, t) {
  return e != null && t in Object(e);
}
function Lm(e, t, n) {
  t = va(t, e);
  for (var o = -1, a = t.length, s = !1; ++o < a; ) {
    var r = _o(t[o]);
    if (!(s = e != null && n(e, r)))
      break;
    e = e[r];
  }
  return s || ++o != a ? s : (a = e == null ? 0 : e.length, !!a && br(a) && vr(r, a) && (yt(e) || wr(e)));
}
function gl(e, t) {
  return e != null && Lm(e, t, xm);
}
var Am = 1, Rm = 2;
function Mm(e, t) {
  return _r(e) && ml(t) ? hl(_o(e), t) : function(n) {
    var o = Yt(n, e);
    return o === void 0 && o === t ? gl(n, e) : ya(t, o, Am | Rm);
  };
}
function zm(e) {
  return function(t) {
    return t?.[e];
  };
}
function Nm(e) {
  return function(t) {
    return kr(t, e);
  };
}
function Fm(e) {
  return _r(e) ? zm(_o(e)) : Nm(e);
}
function Bm(e) {
  return typeof e == "function" ? e : e == null ? rl : typeof e == "object" ? yt(e) ? Mm(e[0], e[1]) : Om(e) : Fm(e);
}
var Aa = function() {
  return Tt.Date.now();
}, Vm = "Expected a function", Dm = Math.max, Hm = Math.min;
function Ja(e, t, n) {
  var o, a, s, r, i, u, c = 0, d = !1, p = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(Vm);
  t = ds(t) || 0, Qt(n) && (d = !!n.leading, p = "maxWait" in n, s = p ? Dm(ds(n.maxWait) || 0, t) : s, h = "trailing" in n ? !!n.trailing : h);
  function m(I) {
    var x = o, Z = a;
    return o = a = void 0, c = I, r = e.apply(Z, x), r;
  }
  function f(I) {
    return c = I, i = setTimeout(v, t), d ? m(I) : r;
  }
  function g(I) {
    var x = I - u, Z = I - c, U = t - x;
    return p ? Hm(U, s - Z) : U;
  }
  function S(I) {
    var x = I - u, Z = I - c;
    return u === void 0 || x >= t || x < 0 || p && Z >= s;
  }
  function v() {
    var I = Aa();
    if (S(I))
      return O(I);
    i = setTimeout(v, g(I));
  }
  function O(I) {
    return i = void 0, h && o ? m(I) : (o = a = void 0, r);
  }
  function _() {
    i !== void 0 && clearTimeout(i), c = 0, o = u = a = i = void 0;
  }
  function T() {
    return i === void 0 ? r : O(Aa());
  }
  function P() {
    var I = Aa(), x = S(I);
    if (o = arguments, a = this, u = I, x) {
      if (i === void 0)
        return f(u);
      if (p)
        return clearTimeout(i), i = setTimeout(v, t), m(u);
    }
    return i === void 0 && (i = setTimeout(v, t)), r;
  }
  return P.cancel = _, P.flush = T, P;
}
function Wm(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var a = o - 1;
  return Zd(e, Bm(t), a);
}
function Jo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var a = e[t];
    o[a[0]] = a[1];
  }
  return o;
}
function ro(e, t) {
  return ya(e, t);
}
function zt(e) {
  return e == null;
}
function jm(e) {
  return e === void 0;
}
function Um(e, t, n, o) {
  if (!Qt(e))
    return e;
  t = va(t, e);
  for (var a = -1, s = t.length, r = s - 1, i = e; i != null && ++a < s; ) {
    var u = _o(t[a]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != r) {
      var d = i[u];
      c = void 0, c === void 0 && (c = Qt(d) ? d : vr(t[a + 1]) ? [] : {});
    }
    ef(i, u, c), i = i[u];
  }
  return e;
}
function Km(e, t, n) {
  for (var o = -1, a = t.length, s = {}; ++o < a; ) {
    var r = t[o], i = kr(e, r);
    n(i, r) && Um(s, va(r, e), i);
  }
  return s;
}
function Gm(e, t) {
  return Km(e, t, function(n, o) {
    return gl(e, o);
  });
}
var Zm = xp(function(e, t) {
  return e == null ? {} : Gm(e, t);
});
const pt = (e) => e === void 0, Qo = (e) => typeof e == "boolean", pe = (e) => typeof e == "number", gt = (e) => typeof Element > "u" ? !1 : e instanceof Element, qm = (e) => Be(e) ? !Number.isNaN(Number(e)) : !1;
var Ym = Object.defineProperty, Xm = Object.defineProperties, Jm = Object.getOwnPropertyDescriptors, Ls = Object.getOwnPropertySymbols, Qm = Object.prototype.hasOwnProperty, eh = Object.prototype.propertyIsEnumerable, As = (e, t, n) => t in e ? Ym(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, th = (e, t) => {
  for (var n in t || (t = {}))
    Qm.call(t, n) && As(e, n, t[n]);
  if (Ls)
    for (var n of Ls(t))
      eh.call(t, n) && As(e, n, t[n]);
  return e;
}, nh = (e, t) => Xm(e, Jm(t));
function oh(e, t) {
  var n;
  const o = Xt();
  return Yi(() => {
    o.value = e();
  }, nh(th({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), mr(o);
}
var Rs;
const Re = typeof window < "u", ah = (e) => typeof e == "string", vl = () => {
}, Qa = Re && ((Rs = window?.navigator) == null ? void 0 : Rs.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Cr(e) {
  return typeof e == "function" ? e() : l(e);
}
function rh(e) {
  return e;
}
function So(e) {
  return bc() ? (wc(e), !0) : !1;
}
function sh(e, t = !0) {
  Ue() ? Ie(e) : t ? e() : Se(e);
}
function yl(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, a = M(!1);
  let s = null;
  function r() {
    s && (clearTimeout(s), s = null);
  }
  function i() {
    a.value = !1, r();
  }
  function u(...c) {
    r(), a.value = !0, s = setTimeout(() => {
      a.value = !1, s = null, e(...c);
    }, Cr(t));
  }
  return o && (a.value = !0, Re && u()), So(i), {
    isPending: mr(a),
    start: u,
    stop: i
  };
}
function At(e) {
  var t;
  const n = Cr(e);
  return (t = n?.$el) != null ? t : n;
}
const ba = Re ? window : void 0;
function je(...e) {
  let t, n, o, a;
  if (ah(e[0]) || Array.isArray(e[0]) ? ([n, o, a] = e, t = ba) : [t, n, o, a] = e, !t)
    return vl;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], r = () => {
    s.forEach((d) => d()), s.length = 0;
  }, i = (d, p, h, m) => (d.addEventListener(p, h, m), () => d.removeEventListener(p, h, m)), u = ie(() => [At(t), Cr(a)], ([d, p]) => {
    r(), d && s.push(...n.flatMap((h) => o.map((m) => i(d, h, m, p))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), r();
  };
  return So(c), c;
}
let Ms = !1;
function ih(e, t, n = {}) {
  const { window: o = ba, ignore: a = [], capture: s = !0, detectIframe: r = !1 } = n;
  if (!o)
    return;
  Qa && !Ms && (Ms = !0, Array.from(o.document.body.children).forEach((h) => h.addEventListener("click", vl)));
  let i = !0;
  const u = (h) => a.some((m) => {
    if (typeof m == "string")
      return Array.from(o.document.querySelectorAll(m)).some((f) => f === h.target || h.composedPath().includes(f));
    {
      const f = At(m);
      return f && (h.target === f || h.composedPath().includes(f));
    }
  }), d = [
    je(o, "click", (h) => {
      const m = At(e);
      if (!(!m || m === h.target || h.composedPath().includes(m))) {
        if (h.detail === 0 && (i = !u(h)), !i) {
          i = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: s }),
    je(o, "pointerdown", (h) => {
      const m = At(e);
      m && (i = !h.composedPath().includes(m) && !u(h));
    }, { passive: !0 }),
    r && je(o, "blur", (h) => {
      var m;
      const f = At(e);
      ((m = o.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !f?.contains(o.document.activeElement) && t(h);
    })
  ].filter(Boolean);
  return () => d.forEach((h) => h());
}
function bl(e, t = !1) {
  const n = M(), o = () => n.value = !!e();
  return o(), sh(o, t), n;
}
const zs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ns = "__vueuse_ssr_handlers__";
zs[Ns] = zs[Ns] || {};
var Fs = Object.getOwnPropertySymbols, lh = Object.prototype.hasOwnProperty, uh = Object.prototype.propertyIsEnumerable, ch = (e, t) => {
  var n = {};
  for (var o in e)
    lh.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Fs)
    for (var o of Fs(e))
      t.indexOf(o) < 0 && uh.call(e, o) && (n[o] = e[o]);
  return n;
};
function _t(e, t, n = {}) {
  const o = n, { window: a = ba } = o, s = ch(o, ["window"]);
  let r;
  const i = bl(() => a && "ResizeObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, c = ie(() => At(e), (p) => {
    u(), i.value && a && p && (r = new ResizeObserver(t), r.observe(p, s));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), c();
  };
  return So(d), {
    isSupported: i,
    stop: d
  };
}
var Bs = Object.getOwnPropertySymbols, dh = Object.prototype.hasOwnProperty, fh = Object.prototype.propertyIsEnumerable, ph = (e, t) => {
  var n = {};
  for (var o in e)
    dh.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Bs)
    for (var o of Bs(e))
      t.indexOf(o) < 0 && fh.call(e, o) && (n[o] = e[o]);
  return n;
};
function mh(e, t, n = {}) {
  const o = n, { window: a = ba } = o, s = ph(o, ["window"]);
  let r;
  const i = bl(() => a && "MutationObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, c = ie(() => At(e), (p) => {
    u(), i.value && a && p && (r = new MutationObserver(t), r.observe(p, s));
  }, { immediate: !0 }), d = () => {
    u(), c();
  };
  return So(d), {
    isSupported: i,
    stop: d
  };
}
var Vs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Vs || (Vs = {}));
var hh = Object.defineProperty, Ds = Object.getOwnPropertySymbols, gh = Object.prototype.hasOwnProperty, vh = Object.prototype.propertyIsEnumerable, Hs = (e, t, n) => t in e ? hh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, yh = (e, t) => {
  for (var n in t || (t = {}))
    gh.call(t, n) && Hs(e, n, t[n]);
  if (Ds)
    for (var n of Ds(t))
      vh.call(t, n) && Hs(e, n, t[n]);
  return e;
};
const bh = {
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
yh({
  linear: rh
}, bh);
class wh extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Pr(e, t) {
  throw new wh(`[${e}] ${t}`);
}
const Ws = {
  current: 0
}, js = M(0), wl = 2e3, Us = Symbol("elZIndexContextKey"), _l = Symbol("zIndexContextKey"), Sl = (e) => {
  const t = Ue() ? ye(Us, Ws) : Ws, n = e || (Ue() ? ye(_l, void 0) : void 0), o = b(() => {
    const r = l(n);
    return pe(r) ? r : wl;
  }), a = b(() => o.value + js.value), s = () => (t.current++, js.value = t.current, a.value);
  return !Re && ye(Us), {
    initialZIndex: o,
    currentZIndex: a,
    nextZIndex: s
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
const Sh = (e) => (t, n) => kh(t, n, l(e)), kh = (e, t, n) => Yt(n, e, e).replace(/\{(\w+)\}/g, (o, a) => {
  var s;
  return `${(s = t?.[a]) != null ? s : `{${a}}`}`;
}), Ch = (e) => {
  const t = b(() => l(e).name), n = oo(e) ? e : M(e);
  return {
    lang: t,
    locale: n,
    t: Sh(e)
  };
}, kl = Symbol("localeContextKey"), wa = (e) => {
  const t = e || ye(kl, M());
  return Ch(b(() => t.value || _h));
}, Cl = "__epPropKey", te = (e) => e, Ph = (e) => qe(e) && !!e[Cl], _a = (e, t) => {
  if (!qe(e) || Ph(e))
    return e;
  const { values: n, required: o, default: a, type: s, validator: r } = e, u = {
    type: s,
    required: !!o,
    validator: n || r ? (c) => {
      let d = !1, p = [];
      if (n && (p = Array.from(n), ss(e, "default") && p.push(a), d || (d = p.includes(c))), r && (d || (d = r(c))), !d && p.length > 0) {
        const h = [...new Set(p)].map((m) => JSON.stringify(m)).join(", ");
        _c(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [Cl]: !0
  };
  return ss(e, "default") && (u.default = a), u;
}, he = (e) => Jo(Object.entries(e).map(([t, n]) => [
  t,
  _a(n, t)
])), Pl = ["", "default", "small", "large"], On = _a({
  type: String,
  values: Pl,
  required: !1
}), El = Symbol("size"), Eh = () => {
  const e = ye(El, {});
  return b(() => l(e.size) || "");
}, Tl = Symbol("emptyValuesContextKey"), Th = ["", void 0, null], Ih = void 0, Il = he({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => xe(e) ? !e() : !e
  }
}), $h = (e, t) => {
  const n = Ue() ? ye(Tl, M({})) : M({}), o = b(() => e.emptyValues || n.value.emptyValues || Th), a = b(() => xe(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : xe(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Ih), s = (r) => o.value.includes(r);
  return o.value.includes(a.value), {
    emptyValues: o,
    valueOnClear: a,
    isEmptyValue: s
  };
}, Ks = (e) => Object.keys(e), ea = M();
function $l(e, t = void 0) {
  return Ue() ? ye(el, ea) : ea;
}
function Ol(e, t) {
  const n = $l(), o = Pe(e, b(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Ho;
  })), a = wa(b(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), s = Sl(b(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || wl;
  })), r = b(() => {
    var i;
    return l(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return xl(b(() => l(n) || {})), {
    ns: o,
    locale: a,
    zIndex: s,
    size: r
  };
}
const xl = (e, t, n = !1) => {
  var o;
  const a = !!Ue(), s = a ? $l() : void 0, r = (o = void 0) != null ? o : a ? vt : void 0;
  if (!r)
    return;
  const i = b(() => {
    const u = l(e);
    return s?.value ? Oh(s.value, u) : u;
  });
  return r(el, i), r(kl, b(() => i.value.locale)), r(tl, b(() => i.value.namespace)), r(_l, b(() => i.value.zIndex)), r(El, {
    size: b(() => i.value.size || "")
  }), r(Tl, b(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !ea.value) && (ea.value = i.value), i;
}, Oh = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Ks(e), ...Ks(t)])], o = {};
  for (const a of n)
    o[a] = t[a] !== void 0 ? t[a] : e[a];
  return o;
}, Ae = "update:modelValue", en = "change", Nt = "input";
var _e = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
};
function go(e, t = "px") {
  if (!e)
    return "";
  if (pe(e) || qm(e))
    return `${e}${t}`;
  if (Be(e))
    return e;
}
function xh(e, t) {
  if (!Re)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let o = t.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    n.push(o), o = o.offsetParent;
  const a = t.offsetTop + n.reduce((u, c) => u + c.offsetTop, 0), s = a + t.offsetHeight, r = e.scrollTop, i = r + e.clientHeight;
  a < r ? e.scrollTop = a : s > i && (e.scrollTop = s - e.clientHeight);
}
const ot = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, Ll = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), Er = (e) => (e.install = po, e), Lh = he({
  size: {
    type: te([Number, String])
  },
  color: {
    type: String
  }
}), Ah = G({
  name: "ElIcon",
  inheritAttrs: !1
}), Rh = /* @__PURE__ */ G({
  ...Ah,
  props: Lh,
  setup(e) {
    const t = e, n = Pe("icon"), o = b(() => {
      const { size: a, color: s } = t;
      return !a && !s ? {} : {
        fontSize: pt(a) ? void 0 : go(a),
        "--color": s
      };
    });
    return (a, s) => (w(), A("i", Jt({
      class: l(n).b(),
      style: l(o)
    }, a.$attrs), [
      se(a.$slots, "default")
    ], 16));
  }
});
var Mh = /* @__PURE__ */ _e(Rh, [["__file", "icon.vue"]]);
const He = ot(Mh);
/*! Element Plus Icons Vue v2.3.1 */
var zh = /* @__PURE__ */ G({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Al = zh, Nh = /* @__PURE__ */ G({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Fh = Nh, Bh = /* @__PURE__ */ G({
  name: "Check",
  __name: "check",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Vh = Bh, Dh = /* @__PURE__ */ G({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      y("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Rl = Dh, Hh = /* @__PURE__ */ G({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Wh = Hh, jh = /* @__PURE__ */ G({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      y("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Sa = jh, Uh = /* @__PURE__ */ G({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), vo = Uh, Kh = /* @__PURE__ */ G({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      y("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), Gh = Kh, Zh = /* @__PURE__ */ G({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), qh = Zh, Yh = /* @__PURE__ */ G({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Xh = Yh, Jh = /* @__PURE__ */ G({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), Qh = Jh, eg = /* @__PURE__ */ G({
  name: "PictureFilled",
  __name: "picture-filled",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
      })
    ]));
  }
}), tg = eg, ng = /* @__PURE__ */ G({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), og = ng, ag = /* @__PURE__ */ G({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), rg = ag, sg = /* @__PURE__ */ G({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), ig = sg, lg = /* @__PURE__ */ G({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ml = lg;
const xn = te([
  String,
  Object,
  Function
]), ug = {
  Close: vo
}, cg = {
  Close: vo
}, ta = {
  success: rg,
  warning: Ml,
  error: Wh,
  info: qh
}, zl = {
  validating: Xh,
  success: Rl,
  error: Sa
}, Nl = () => Re && /firefox/i.test(window.navigator.userAgent);
let Ze;
const dg = {
  height: "0",
  visibility: "hidden",
  overflow: Nl() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, fg = [
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
function pg(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), a = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: fg.map((r) => [
    r,
    t.getPropertyValue(r)
  ]), paddingSize: o, borderSize: a, boxSizing: n };
}
function Gs(e, t = 1, n) {
  var o;
  Ze || (Ze = document.createElement("textarea"), document.body.appendChild(Ze));
  const { paddingSize: a, borderSize: s, boxSizing: r, contextStyle: i } = pg(e);
  i.forEach(([p, h]) => Ze?.style.setProperty(p, h)), Object.entries(dg).forEach(([p, h]) => Ze?.style.setProperty(p, h, "important")), Ze.value = e.value || e.placeholder || "";
  let u = Ze.scrollHeight;
  const c = {};
  r === "border-box" ? u = u + s : r === "content-box" && (u = u - a), Ze.value = "";
  const d = Ze.scrollHeight - a;
  if (pe(t)) {
    let p = d * t;
    r === "border-box" && (p = p + a + s), u = Math.max(p, u), c.minHeight = `${p}px`;
  }
  if (pe(n)) {
    let p = d * n;
    r === "border-box" && (p = p + a + s), u = Math.min(p, u);
  }
  return c.height = `${u}px`, (o = Ze.parentNode) == null || o.removeChild(Ze), Ze = void 0, c;
}
const Fl = (e) => e, mg = he({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), pn = (e) => Zm(mg, e), hg = he({
  id: {
    type: String,
    default: void 0
  },
  size: On,
  disabled: Boolean,
  modelValue: {
    type: te([
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
    type: te([Boolean, Object]),
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
    type: te([Object, Array, String]),
    default: () => Fl({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...pn(["ariaLabel"])
}), gg = {
  [Ae]: (e) => Be(e),
  input: (e) => Be(e),
  change: (e) => Be(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, vg = ["class", "style"], yg = /^on[A-Z]/, bg = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = b(() => (n?.value || []).concat(vg)), a = Ue();
  return a ? b(() => {
    var s;
    return Jo(Object.entries((s = a.proxy) == null ? void 0 : s.$attrs).filter(([r]) => !o.value.includes(r) && !(t && yg.test(r))));
  }) : b(() => ({}));
}, Tr = Symbol("formContextKey"), na = Symbol("formItemContextKey"), Zs = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, wg = Symbol("elIdInjection"), Bl = () => Ue() ? ye(wg, Zs) : Zs, ka = (e) => {
  const t = Bl(), n = gr();
  return oh(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Ca = () => {
  const e = ye(Tr, void 0), t = ye(na, void 0);
  return {
    form: e,
    formItem: t
  };
}, Ir = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = M(!1)), o || (o = M(!1));
  const a = M();
  let s;
  const r = b(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return Ie(() => {
    s = ie([St(e, "id"), n], ([i, u]) => {
      const c = i ?? (u ? void 0 : ka().value);
      c !== a.value && (t?.removeInputId && (a.value && t.removeInputId(a.value), !o?.value && !u && c && t.addInputId(c)), a.value = c);
    }, { immediate: !0 });
  }), Xi(() => {
    s && s(), t?.removeInputId && a.value && t.removeInputId(a.value);
  }), {
    isLabeledByFormItem: r,
    inputId: a
  };
}, Vl = (e) => {
  const t = Ue();
  return b(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, ko = (e, t = {}) => {
  const n = M(void 0), o = t.prop ? n : Vl("size"), a = t.global ? n : Eh(), s = t.form ? { size: void 0 } : ye(Tr, void 0), r = t.formItem ? { size: void 0 } : ye(na, void 0);
  return b(() => o.value || l(e) || r?.size || s?.size || a.value || "");
}, Dl = (e) => {
  const t = Vl("disabled"), n = ye(Tr, void 0);
  return b(() => t.value || l(e) || n?.disabled || !1);
};
function Hl(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: a
} = {}) {
  const s = Ue(), { emit: r } = s, i = Xt(), u = M(!1), c = (h) => {
    xe(t) && t(h) || u.value || (u.value = !0, r("focus", h), n?.());
  }, d = (h) => {
    var m;
    xe(o) && o(h) || h.relatedTarget && ((m = i.value) != null && m.contains(h.relatedTarget)) || (u.value = !1, r("blur", h), a?.());
  }, p = () => {
    var h, m;
    (h = i.value) != null && h.contains(document.activeElement) && i.value !== document.activeElement || (m = e.value) == null || m.focus();
  };
  return ie(i, (h) => {
    h && h.setAttribute("tabindex", "-1");
  }), je(i, "focus", c, !0), je(i, "blur", d, !0), je(i, "click", p, !0), {
    isFocused: u,
    wrapperRef: i,
    handleFocus: c,
    handleBlur: d
  };
}
const _g = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Wl({
  afterComposition: e,
  emit: t
}) {
  const n = M(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, a = (i) => {
    var u;
    t?.("compositionupdate", i);
    const c = (u = i.target) == null ? void 0 : u.value, d = c[c.length - 1] || "";
    n.value = !_g(d);
  }, s = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Se(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? s(i) : a(i);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: a,
    handleCompositionEnd: s
  };
}
function Sg(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: a, selectionEnd: s, value: r } = e.value;
    if (a == null || s == null)
      return;
    const i = r.slice(0, Math.max(0, a)), u = r.slice(Math.max(0, s));
    t = {
      selectionStart: a,
      selectionEnd: s,
      value: r,
      beforeTxt: i,
      afterTxt: u
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: a } = e.value, { beforeTxt: s, afterTxt: r, selectionStart: i } = t;
    if (s == null || r == null || i == null)
      return;
    let u = a.length;
    if (a.endsWith(r))
      u = a.length - r.length;
    else if (a.startsWith(s))
      u = s.length;
    else {
      const c = s[i - 1], d = a.indexOf(c, i - 1);
      d !== -1 && (u = d + 1);
    }
    e.value.setSelectionRange(u, u);
  }
  return [n, o];
}
const kg = "ElInput", Cg = G({
  name: kg,
  inheritAttrs: !1
}), Pg = /* @__PURE__ */ G({
  ...Cg,
  props: hg,
  emits: gg,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Sc(), s = bg(), r = kc(), i = b(() => [
      o.type === "textarea" ? g.b() : f.b(),
      f.m(h.value),
      f.is("disabled", m.value),
      f.is("exceed", be.value),
      {
        [f.b("group")]: r.prepend || r.append,
        [f.m("prefix")]: r.prefix || o.prefixIcon,
        [f.m("suffix")]: r.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [f.bm("suffix", "password-clear")]: ee.value && J.value,
        [f.b("hidden")]: o.type === "hidden"
      },
      a.class
    ]), u = b(() => [
      f.e("wrapper"),
      f.is("focus", Z.value)
    ]), { form: c, formItem: d } = Ca(), { inputId: p } = Ir(o, {
      formItemContext: d
    }), h = ko(), m = Dl(), f = Pe("input"), g = Pe("textarea"), S = Xt(), v = Xt(), O = M(!1), _ = M(!1), T = M(), P = Xt(o.inputStyle), I = b(() => S.value || v.value), { wrapperRef: x, isFocused: Z, handleFocus: U, handleBlur: Q } = Hl(I, {
      beforeFocus() {
        return m.value;
      },
      afterBlur() {
        var D;
        o.validateEvent && ((D = d?.validate) == null || D.call(d, "blur").catch((fe) => void 0));
      }
    }), k = b(() => {
      var D;
      return (D = c?.statusIcon) != null ? D : !1;
    }), L = b(() => d?.validateState || ""), W = b(() => L.value && zl[L.value]), re = b(() => _.value ? ig : Gh), $ = b(() => [
      a.style
    ]), z = b(() => [
      o.inputStyle,
      P.value,
      { resize: o.resize }
    ]), R = b(() => zt(o.modelValue) ? "" : String(o.modelValue)), ee = b(() => o.clearable && !m.value && !o.readonly && !!R.value && (Z.value || O.value)), J = b(() => o.showPassword && !m.value && !!R.value && (!!R.value || Z.value)), le = b(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !m.value && !o.readonly && !o.showPassword), ge = b(() => R.value.length), be = b(() => !!le.value && ge.value > Number(o.maxlength)), X = b(() => !!r.suffix || !!o.suffixIcon || ee.value || o.showPassword || le.value || !!L.value && k.value), [de, ve] = Sg(S);
    _t(v, (D) => {
      if (me(), !le.value || o.resize !== "both")
        return;
      const fe = D[0], { width: at } = fe.contentRect;
      T.value = {
        right: `calc(100% - ${at + 15 + 6}px)`
      };
    });
    const Ee = () => {
      const { type: D, autosize: fe } = o;
      if (!(!Re || D !== "textarea" || !v.value))
        if (fe) {
          const at = qe(fe) ? fe.minRows : void 0, Wt = qe(fe) ? fe.maxRows : void 0, jt = Gs(v.value, at, Wt);
          P.value = {
            overflowY: "hidden",
            ...jt
          }, Se(() => {
            v.value.offsetHeight, P.value = jt;
          });
        } else
          P.value = {
            minHeight: Gs(v.value).minHeight
          };
    }, me = ((D) => {
      let fe = !1;
      return () => {
        var at;
        if (fe || !o.autosize)
          return;
        ((at = v.value) == null ? void 0 : at.offsetParent) === null || (D(), fe = !0);
      };
    })(Ee), Fe = () => {
      const D = I.value, fe = o.formatter ? o.formatter(R.value) : R.value;
      !D || D.value === fe || (D.value = fe);
    }, V = async (D) => {
      de();
      let { value: fe } = D.target;
      if (o.formatter && o.parser && (fe = o.parser(fe)), !ne.value) {
        if (fe === R.value) {
          Fe();
          return;
        }
        n(Ae, fe), n(Nt, fe), await Se(), Fe(), ve();
      }
    }, oe = (D) => {
      let { value: fe } = D.target;
      o.formatter && o.parser && (fe = o.parser(fe)), n(en, fe);
    }, {
      isComposing: ne,
      handleCompositionStart: Te,
      handleCompositionUpdate: Ve,
      handleCompositionEnd: Le
    } = Wl({ emit: n, afterComposition: V }), ke = () => {
      de(), _.value = !_.value, setTimeout(ve);
    }, ce = () => {
      var D;
      return (D = I.value) == null ? void 0 : D.focus();
    }, Ke = () => {
      var D;
      return (D = I.value) == null ? void 0 : D.blur();
    }, mn = (D) => {
      O.value = !1, n("mouseleave", D);
    }, Ge = (D) => {
      O.value = !0, n("mouseenter", D);
    }, wt = (D) => {
      n("keydown", D);
    }, hn = () => {
      var D;
      (D = I.value) == null || D.select();
    }, nn = () => {
      n(Ae, ""), n(en, ""), n("clear"), n(Nt, "");
    };
    return ie(() => o.modelValue, () => {
      var D;
      Se(() => Ee()), o.validateEvent && ((D = d?.validate) == null || D.call(d, "change").catch((fe) => void 0));
    }), ie(R, () => Fe()), ie(() => o.type, async () => {
      await Se(), Fe(), Ee();
    }), Ie(() => {
      !o.formatter && o.parser, Fe(), Se(Ee);
    }), t({
      input: S,
      textarea: v,
      ref: I,
      textareaStyle: z,
      autosize: St(o, "autosize"),
      isComposing: ne,
      focus: ce,
      blur: Ke,
      select: hn,
      clear: nn,
      resizeTextarea: Ee
    }), (D, fe) => (w(), A("div", {
      class: N([
        l(i),
        {
          [l(f).bm("group", "append")]: D.$slots.append,
          [l(f).bm("group", "prepend")]: D.$slots.prepend
        }
      ]),
      style: we(l($)),
      onMouseenter: Ge,
      onMouseleave: mn
    }, [
      H(" input "),
      D.type !== "textarea" ? (w(), A(Oe, { key: 0 }, [
        H(" prepend slot "),
        D.$slots.prepend ? (w(), A("div", {
          key: 0,
          class: N(l(f).be("group", "prepend"))
        }, [
          se(D.$slots, "prepend")
        ], 2)) : H("v-if", !0),
        y("div", {
          ref_key: "wrapperRef",
          ref: x,
          class: N(l(u))
        }, [
          H(" prefix slot "),
          D.$slots.prefix || D.prefixIcon ? (w(), A("span", {
            key: 0,
            class: N(l(f).e("prefix"))
          }, [
            y("span", {
              class: N(l(f).e("prefix-inner"))
            }, [
              se(D.$slots, "prefix"),
              D.prefixIcon ? (w(), Y(l(He), {
                key: 0,
                class: N(l(f).e("icon"))
              }, {
                default: q(() => [
                  (w(), Y(st(D.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 2)) : H("v-if", !0),
          y("input", Jt({
            id: l(p),
            ref_key: "input",
            ref: S,
            class: l(f).e("inner")
          }, l(s), {
            minlength: D.minlength,
            maxlength: D.maxlength,
            type: D.showPassword ? _.value ? "text" : "password" : D.type,
            disabled: l(m),
            readonly: D.readonly,
            autocomplete: D.autocomplete,
            tabindex: D.tabindex,
            "aria-label": D.ariaLabel,
            placeholder: D.placeholder,
            style: D.inputStyle,
            form: D.form,
            autofocus: D.autofocus,
            role: D.containerRole,
            onCompositionstart: l(Te),
            onCompositionupdate: l(Ve),
            onCompositionend: l(Le),
            onInput: V,
            onChange: oe,
            onKeydown: wt
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          H(" suffix slot "),
          l(X) ? (w(), A("span", {
            key: 1,
            class: N(l(f).e("suffix"))
          }, [
            y("span", {
              class: N(l(f).e("suffix-inner"))
            }, [
              !l(ee) || !l(J) || !l(le) ? (w(), A(Oe, { key: 0 }, [
                se(D.$slots, "suffix"),
                D.suffixIcon ? (w(), Y(l(He), {
                  key: 0,
                  class: N(l(f).e("icon"))
                }, {
                  default: q(() => [
                    (w(), Y(st(D.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : H("v-if", !0)
              ], 64)) : H("v-if", !0),
              l(ee) ? (w(), Y(l(He), {
                key: 1,
                class: N([l(f).e("icon"), l(f).e("clear")]),
                onMousedown: $e(l(po), ["prevent"]),
                onClick: nn
              }, {
                default: q(() => [
                  F(l(Sa))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : H("v-if", !0),
              l(J) ? (w(), Y(l(He), {
                key: 2,
                class: N([l(f).e("icon"), l(f).e("password")]),
                onClick: ke
              }, {
                default: q(() => [
                  (w(), Y(st(l(re))))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0),
              l(le) ? (w(), A("span", {
                key: 3,
                class: N(l(f).e("count"))
              }, [
                y("span", {
                  class: N(l(f).e("count-inner"))
                }, K(l(ge)) + " / " + K(D.maxlength), 3)
              ], 2)) : H("v-if", !0),
              l(L) && l(W) && l(k) ? (w(), Y(l(He), {
                key: 4,
                class: N([
                  l(f).e("icon"),
                  l(f).e("validateIcon"),
                  l(f).is("loading", l(L) === "validating")
                ])
              }, {
                default: q(() => [
                  (w(), Y(st(l(W))))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 2)) : H("v-if", !0)
        ], 2),
        H(" append slot "),
        D.$slots.append ? (w(), A("div", {
          key: 1,
          class: N(l(f).be("group", "append"))
        }, [
          se(D.$slots, "append")
        ], 2)) : H("v-if", !0)
      ], 64)) : (w(), A(Oe, { key: 1 }, [
        H(" textarea "),
        y("textarea", Jt({
          id: l(p),
          ref_key: "textarea",
          ref: v,
          class: [l(g).e("inner"), l(f).is("focus", l(Z))]
        }, l(s), {
          minlength: D.minlength,
          maxlength: D.maxlength,
          tabindex: D.tabindex,
          disabled: l(m),
          readonly: D.readonly,
          autocomplete: D.autocomplete,
          style: l(z),
          "aria-label": D.ariaLabel,
          placeholder: D.placeholder,
          form: D.form,
          autofocus: D.autofocus,
          rows: D.rows,
          role: D.containerRole,
          onCompositionstart: l(Te),
          onCompositionupdate: l(Ve),
          onCompositionend: l(Le),
          onInput: V,
          onFocus: l(U),
          onBlur: l(Q),
          onChange: oe,
          onKeydown: wt
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        l(le) ? (w(), A("span", {
          key: 0,
          style: we(T.value),
          class: N(l(f).e("count"))
        }, K(l(ge)) + " / " + K(D.maxlength), 7)) : H("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Eg = /* @__PURE__ */ _e(Pg, [["__file", "input.vue"]]);
const $r = ot(Eg), vn = 4, Tg = {
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
}, Ig = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Or = Symbol("scrollbarContextKey"), $g = he({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Og = "Thumb", xg = /* @__PURE__ */ G({
  __name: "thumb",
  props: $g,
  setup(e) {
    const t = e, n = ye(Or), o = Pe("scrollbar");
    n || Pr(Og, "can not inject scrollbar context");
    const a = M(), s = M(), r = M({}), i = M(!1);
    let u = !1, c = !1, d = Re ? document.onselectstart : null;
    const p = b(() => Tg[t.vertical ? "vertical" : "horizontal"]), h = b(() => Ig({
      size: t.size,
      move: t.move,
      bar: p.value
    })), m = b(() => a.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / s.value[p.value.offset]), f = (I) => {
      var x;
      if (I.stopPropagation(), I.ctrlKey || [1, 2].includes(I.button))
        return;
      (x = window.getSelection()) == null || x.removeAllRanges(), S(I);
      const Z = I.currentTarget;
      Z && (r.value[p.value.axis] = Z[p.value.offset] - (I[p.value.client] - Z.getBoundingClientRect()[p.value.direction]));
    }, g = (I) => {
      if (!s.value || !a.value || !n.wrapElement)
        return;
      const x = Math.abs(I.target.getBoundingClientRect()[p.value.direction] - I[p.value.client]), Z = s.value[p.value.offset] / 2, U = (x - Z) * 100 * m.value / a.value[p.value.offset];
      n.wrapElement[p.value.scroll] = U * n.wrapElement[p.value.scrollSize] / 100;
    }, S = (I) => {
      I.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", v), document.addEventListener("mouseup", O), d = document.onselectstart, document.onselectstart = () => !1;
    }, v = (I) => {
      if (!a.value || !s.value || u === !1)
        return;
      const x = r.value[p.value.axis];
      if (!x)
        return;
      const Z = (a.value.getBoundingClientRect()[p.value.direction] - I[p.value.client]) * -1, U = s.value[p.value.offset] - x, Q = (Z - U) * 100 * m.value / a.value[p.value.offset];
      n.wrapElement[p.value.scroll] = Q * n.wrapElement[p.value.scrollSize] / 100;
    }, O = () => {
      u = !1, r.value[p.value.axis] = 0, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", O), P(), c && (i.value = !1);
    }, _ = () => {
      c = !1, i.value = !!t.size;
    }, T = () => {
      c = !0, i.value = u;
    };
    Et(() => {
      P(), document.removeEventListener("mouseup", O);
    });
    const P = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return je(St(n, "scrollbarElement"), "mousemove", _), je(St(n, "scrollbarElement"), "mouseleave", T), (I, x) => (w(), Y(Bn, {
      name: l(o).b("fade"),
      persisted: ""
    }, {
      default: q(() => [
        Ye(y("div", {
          ref_key: "instance",
          ref: a,
          class: N([l(o).e("bar"), l(o).is(l(p).key)]),
          onMousedown: g
        }, [
          y("div", {
            ref_key: "thumb",
            ref: s,
            class: N(l(o).e("thumb")),
            style: we(l(h)),
            onMousedown: f
          }, null, 38)
        ], 34), [
          [Ft, I.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var qs = /* @__PURE__ */ _e(xg, [["__file", "thumb.vue"]]);
const Lg = he({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Ag = /* @__PURE__ */ G({
  __name: "bar",
  props: Lg,
  setup(e, { expose: t }) {
    const n = e, o = ye(Or), a = M(0), s = M(0), r = M(""), i = M(""), u = M(1), c = M(1);
    return t({
      handleScroll: (h) => {
        if (h) {
          const m = h.offsetHeight - vn, f = h.offsetWidth - vn;
          s.value = h.scrollTop * 100 / m * u.value, a.value = h.scrollLeft * 100 / f * c.value;
        }
      },
      update: () => {
        const h = o?.wrapElement;
        if (!h)
          return;
        const m = h.offsetHeight - vn, f = h.offsetWidth - vn, g = m ** 2 / h.scrollHeight, S = f ** 2 / h.scrollWidth, v = Math.max(g, n.minSize), O = Math.max(S, n.minSize);
        u.value = g / (m - g) / (v / (m - v)), c.value = S / (f - S) / (O / (f - O)), i.value = v + vn < m ? `${v}px` : "", r.value = O + vn < f ? `${O}px` : "";
      }
    }), (h, m) => (w(), A(Oe, null, [
      F(qs, {
        move: a.value,
        ratio: c.value,
        size: r.value,
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      F(qs, {
        move: s.value,
        ratio: u.value,
        size: i.value,
        vertical: "",
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Rg = /* @__PURE__ */ _e(Ag, [["__file", "bar.vue"]]);
const Mg = he({
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
    type: te([String, Object, Array]),
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
  ...pn(["ariaLabel", "ariaOrientation"])
}), zg = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(pe)
}, Ng = "ElScrollbar", Fg = G({
  name: Ng
}), Bg = /* @__PURE__ */ G({
  ...Fg,
  props: Mg,
  emits: zg,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Pe("scrollbar");
    let s, r, i = 0, u = 0;
    const c = M(), d = M(), p = M(), h = M(), m = b(() => {
      const P = {};
      return o.height && (P.height = go(o.height)), o.maxHeight && (P.maxHeight = go(o.maxHeight)), [o.wrapStyle, P];
    }), f = b(() => [
      o.wrapClass,
      a.e("wrap"),
      { [a.em("wrap", "hidden-default")]: !o.native }
    ]), g = b(() => [a.e("view"), o.viewClass]), S = () => {
      var P;
      d.value && ((P = h.value) == null || P.handleScroll(d.value), i = d.value.scrollTop, u = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function v(P, I) {
      qe(P) ? d.value.scrollTo(P) : pe(P) && pe(I) && d.value.scrollTo(P, I);
    }
    const O = (P) => {
      pe(P) && (d.value.scrollTop = P);
    }, _ = (P) => {
      pe(P) && (d.value.scrollLeft = P);
    }, T = () => {
      var P;
      (P = h.value) == null || P.update();
    };
    return ie(() => o.noresize, (P) => {
      P ? (s?.(), r?.()) : ({ stop: s } = _t(p, T), r = je("resize", T));
    }, { immediate: !0 }), ie(() => [o.maxHeight, o.height], () => {
      o.native || Se(() => {
        var P;
        T(), d.value && ((P = h.value) == null || P.handleScroll(d.value));
      });
    }), vt(Or, Bt({
      scrollbarElement: c,
      wrapElement: d
    })), Cc(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = u);
    }), Ie(() => {
      o.native || Se(() => {
        T();
      });
    }), Ji(() => T()), t({
      wrapRef: d,
      update: T,
      scrollTo: v,
      setScrollTop: O,
      setScrollLeft: _,
      handleScroll: S
    }), (P, I) => (w(), A("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: N(l(a).b())
    }, [
      y("div", {
        ref_key: "wrapRef",
        ref: d,
        class: N(l(f)),
        style: we(l(m)),
        tabindex: P.tabindex,
        onScroll: S
      }, [
        (w(), Y(st(P.tag), {
          id: P.id,
          ref_key: "resizeRef",
          ref: p,
          class: N(l(g)),
          style: we(P.viewStyle),
          role: P.role,
          "aria-label": P.ariaLabel,
          "aria-orientation": P.ariaOrientation
        }, {
          default: q(() => [
            se(P.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      P.native ? H("v-if", !0) : (w(), Y(Rg, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        always: P.always,
        "min-size": P.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Vg = /* @__PURE__ */ _e(Bg, [["__file", "scrollbar.vue"]]);
const Dg = ot(Vg), xr = Symbol("popper"), jl = Symbol("popperContent"), Hg = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Ul = he({
  role: {
    type: String,
    values: Hg,
    default: "tooltip"
  }
}), Wg = G({
  name: "ElPopper",
  inheritAttrs: !1
}), jg = /* @__PURE__ */ G({
  ...Wg,
  props: Ul,
  setup(e, { expose: t }) {
    const n = e, o = M(), a = M(), s = M(), r = M(), i = b(() => n.role), u = {
      triggerRef: o,
      popperInstanceRef: a,
      contentRef: s,
      referenceRef: r,
      role: i
    };
    return t(u), vt(xr, u), (c, d) => se(c.$slots, "default");
  }
});
var Ug = /* @__PURE__ */ _e(jg, [["__file", "popper.vue"]]);
const Kl = he({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Kg = G({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Gg = /* @__PURE__ */ G({
  ...Kg,
  props: Kl,
  setup(e, { expose: t }) {
    const n = e, o = Pe("popper"), { arrowOffset: a, arrowRef: s, arrowStyle: r } = ye(jl, void 0);
    return ie(() => n.arrowOffset, (i) => {
      a.value = i;
    }), Et(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (i, u) => (w(), A("span", {
      ref_key: "arrowRef",
      ref: s,
      class: N(l(o).e("arrow")),
      style: we(l(r)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Zg = /* @__PURE__ */ _e(Gg, [["__file", "arrow.vue"]]);
const Gl = he({
  virtualRef: {
    type: te(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: te(Function)
  },
  onMouseleave: {
    type: te(Function)
  },
  onClick: {
    type: te(Function)
  },
  onKeydown: {
    type: te(Function)
  },
  onFocus: {
    type: te(Function)
  },
  onBlur: {
    type: te(Function)
  },
  onContextmenu: {
    type: te(Function)
  },
  id: String,
  open: Boolean
}), Zl = Symbol("elForwardRef"), qg = (e) => {
  vt(Zl, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Yg = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), er = (e) => {
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
}, Xg = "ElOnlyChild", Jg = G({
  name: Xg,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const a = ye(Zl), s = Yg((o = a?.setForwardRef) != null ? o : po);
    return () => {
      var r;
      const i = (r = t.default) == null ? void 0 : r.call(t, n);
      if (!i || i.length > 1)
        return null;
      const u = ql(i);
      return u ? Ye(Pc(u, n), [[s]]) : null;
    };
  }
});
function ql(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (qe(n))
      switch (n.type) {
        case Tc:
          continue;
        case Ec:
        case "svg":
          return Ys(n);
        case Oe:
          return ql(n.children);
        default:
          return n;
      }
    return Ys(n);
  }
  return null;
}
function Ys(e) {
  const t = Pe("only-child");
  return F("span", {
    class: t.e("content")
  }, [e]);
}
const Qg = G({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), ev = /* @__PURE__ */ G({
  ...Qg,
  props: Gl,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: a } = ye(xr, void 0);
    qg(a);
    const s = b(() => i.value ? n.id : void 0), r = b(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = b(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), u = b(() => i.value ? `${n.open}` : void 0);
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
    return Ie(() => {
      ie(() => n.virtualRef, (p) => {
        p && (a.value = At(p));
      }, {
        immediate: !0
      }), ie(a, (p, h) => {
        c?.(), c = void 0, gt(p) && (d.forEach((m) => {
          var f;
          const g = n[m];
          g && (p.addEventListener(m.slice(2).toLowerCase(), g), (f = h?.removeEventListener) == null || f.call(h, m.slice(2).toLowerCase(), g));
        }), er(p) && (c = ie([s, r, i, u], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((f, g) => {
            zt(m[g]) ? p.removeAttribute(f) : p.setAttribute(f, m[g]);
          });
        }, { immediate: !0 }))), gt(h) && er(h) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((m) => h.removeAttribute(m));
      }, {
        immediate: !0
      });
    }), Et(() => {
      if (c?.(), c = void 0, a.value && gt(a.value)) {
        const p = a.value;
        d.forEach((h) => {
          const m = n[h];
          m && p.removeEventListener(h.slice(2).toLowerCase(), m);
        }), a.value = void 0;
      }
    }), t({
      triggerRef: a
    }), (p, h) => p.virtualTriggering ? H("v-if", !0) : (w(), Y(l(Jg), Jt({ key: 0 }, p.$attrs, {
      "aria-controls": l(s),
      "aria-describedby": l(r),
      "aria-expanded": l(u),
      "aria-haspopup": l(i)
    }), {
      default: q(() => [
        se(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var tv = /* @__PURE__ */ _e(ev, [["__file", "trigger.vue"]]);
const Ra = "focus-trap.focus-after-trapped", Ma = "focus-trap.focus-after-released", nv = "focus-trap.focusout-prevented", Xs = {
  cancelable: !0,
  bubbles: !1
}, ov = {
  cancelable: !0,
  bubbles: !1
}, Js = "focusAfterTrapped", Qs = "focusAfterReleased", av = Symbol("elFocusTrap"), Lr = M(), Pa = M(0), Ar = M(0);
let Ao = 0;
const Yl = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, ei = (e, t) => {
  for (const n of e)
    if (!rv(n, t))
      return n;
}, rv = (e, t) => {
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
}, sv = (e) => {
  const t = Yl(e), n = ei(t, e), o = ei(t.reverse(), e);
  return [n, o];
}, iv = (e) => e instanceof HTMLInputElement && "select" in e, It = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    gt(e) && !er(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), Ar.value = window.performance.now(), e !== n && iv(e) && t && e.select(), gt(e) && o && e.removeAttribute("tabindex");
  }
};
function ti(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const lv = () => {
  let e = [];
  return {
    push: (o) => {
      const a = e[0];
      a && o !== a && a.pause(), e = ti(e, o), e.unshift(o);
    },
    remove: (o) => {
      var a, s;
      e = ti(e, o), (s = (a = e[0]) == null ? void 0 : a.resume) == null || s.call(a);
    }
  };
}, uv = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (It(o, t), document.activeElement !== n)
      return;
}, ni = lv(), cv = () => Pa.value > Ar.value, Ro = () => {
  Lr.value = "pointer", Pa.value = window.performance.now();
}, oi = () => {
  Lr.value = "keyboard", Pa.value = window.performance.now();
}, dv = () => (Ie(() => {
  Ao === 0 && (document.addEventListener("mousedown", Ro), document.addEventListener("touchstart", Ro), document.addEventListener("keydown", oi)), Ao++;
}), Et(() => {
  Ao--, Ao <= 0 && (document.removeEventListener("mousedown", Ro), document.removeEventListener("touchstart", Ro), document.removeEventListener("keydown", oi));
}), {
  focusReason: Lr,
  lastUserFocusTimestamp: Pa,
  lastAutomatedFocusTimestamp: Ar
}), Mo = (e) => new CustomEvent(nv, {
  ...ov,
  detail: e
}), Ne = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
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
let wn = [];
const ai = (e) => {
  e.code === Ne.esc && wn.forEach((t) => t(e));
}, fv = (e) => {
  Ie(() => {
    wn.length === 0 && document.addEventListener("keydown", ai), Re && wn.push(e);
  }), Et(() => {
    wn = wn.filter((t) => t !== e), wn.length === 0 && Re && document.removeEventListener("keydown", ai);
  });
}, pv = G({
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
    Js,
    Qs,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = M();
    let o, a;
    const { focusReason: s } = dv();
    fv((f) => {
      e.trapped && !r.paused && t("release-requested", f);
    });
    const r = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (f) => {
      if (!e.loop && !e.trapped || r.paused)
        return;
      const { code: g, altKey: S, ctrlKey: v, metaKey: O, currentTarget: _, shiftKey: T } = f, { loop: P } = e, I = g === Ne.tab && !S && !v && !O, x = document.activeElement;
      if (I && x) {
        const Z = _, [U, Q] = sv(Z);
        if (U && Q) {
          if (!T && x === Q) {
            const L = Mo({
              focusReason: s.value
            });
            t("focusout-prevented", L), L.defaultPrevented || (f.preventDefault(), P && It(U, !0));
          } else if (T && [U, Z].includes(x)) {
            const L = Mo({
              focusReason: s.value
            });
            t("focusout-prevented", L), L.defaultPrevented || (f.preventDefault(), P && It(Q, !0));
          }
        } else if (x === Z) {
          const L = Mo({
            focusReason: s.value
          });
          t("focusout-prevented", L), L.defaultPrevented || f.preventDefault();
        }
      }
    };
    vt(av, {
      focusTrapRef: n,
      onKeydown: i
    }), ie(() => e.focusTrapEl, (f) => {
      f && (n.value = f);
    }, { immediate: !0 }), ie([n], ([f], [g]) => {
      f && (f.addEventListener("keydown", i), f.addEventListener("focusin", d), f.addEventListener("focusout", p)), g && (g.removeEventListener("keydown", i), g.removeEventListener("focusin", d), g.removeEventListener("focusout", p));
    });
    const u = (f) => {
      t(Js, f);
    }, c = (f) => t(Qs, f), d = (f) => {
      const g = l(n);
      if (!g)
        return;
      const S = f.target, v = f.relatedTarget, O = S && g.contains(S);
      e.trapped || v && g.contains(v) || (o = v), O && t("focusin", f), !r.paused && e.trapped && (O ? a = S : It(a, !0));
    }, p = (f) => {
      const g = l(n);
      if (!(r.paused || !g))
        if (e.trapped) {
          const S = f.relatedTarget;
          !zt(S) && !g.contains(S) && setTimeout(() => {
            if (!r.paused && e.trapped) {
              const v = Mo({
                focusReason: s.value
              });
              t("focusout-prevented", v), v.defaultPrevented || It(a, !0);
            }
          }, 0);
        } else {
          const S = f.target;
          S && g.contains(S) || t("focusout", f);
        }
    };
    async function h() {
      await Se();
      const f = l(n);
      if (f) {
        ni.push(r);
        const g = f.contains(document.activeElement) ? o : document.activeElement;
        if (o = g, !f.contains(g)) {
          const v = new Event(Ra, Xs);
          f.addEventListener(Ra, u), f.dispatchEvent(v), v.defaultPrevented || Se(() => {
            let O = e.focusStartEl;
            Be(O) || (It(O), document.activeElement !== O && (O = "first")), O === "first" && uv(Yl(f), !0), (document.activeElement === g || O === "container") && It(f);
          });
        }
      }
    }
    function m() {
      const f = l(n);
      if (f) {
        f.removeEventListener(Ra, u);
        const g = new CustomEvent(Ma, {
          ...Xs,
          detail: {
            focusReason: s.value
          }
        });
        f.addEventListener(Ma, c), f.dispatchEvent(g), !g.defaultPrevented && (s.value == "keyboard" || !cv() || f.contains(document.activeElement)) && It(o ?? document.body), f.removeEventListener(Ma, c), ni.remove(r);
      }
    }
    return Ie(() => {
      e.trapped && h(), ie(() => e.trapped, (f) => {
        f ? h() : m();
      });
    }), Et(() => {
      e.trapped && m(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function mv(e, t, n, o, a, s) {
  return se(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var hv = /* @__PURE__ */ _e(pv, [["render", mv], ["__file", "focus-trap.vue"]]), Xe = "top", ut = "bottom", ct = "right", Je = "left", Rr = "auto", Co = [Xe, ut, ct, Je], Ln = "start", yo = "end", gv = "clippingParents", Xl = "viewport", Gn = "popper", vv = "reference", ri = Co.reduce(function(e, t) {
  return e.concat([t + "-" + Ln, t + "-" + yo]);
}, []), Dn = [].concat(Co, [Rr]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ln, t + "-" + yo]);
}, []), yv = "beforeRead", bv = "read", wv = "afterRead", _v = "beforeMain", Sv = "main", kv = "afterMain", Cv = "beforeWrite", Pv = "write", Ev = "afterWrite", Tv = [yv, bv, wv, _v, Sv, kv, Cv, Pv, Ev];
function Pt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function nt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function cn(e) {
  var t = nt(e).Element;
  return e instanceof t || e instanceof Element;
}
function lt(e) {
  var t = nt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Mr(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = nt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Iv(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, a = t.attributes[n] || {}, s = t.elements[n];
    !lt(s) || !Pt(s) || (Object.assign(s.style, o), Object.keys(a).forEach(function(r) {
      var i = a[r];
      i === !1 ? s.removeAttribute(r) : s.setAttribute(r, i === !0 ? "" : i);
    }));
  });
}
function $v(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var a = t.elements[o], s = t.attributes[o] || {}, r = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = r.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !lt(a) || !Pt(a) || (Object.assign(a.style, i), Object.keys(s).forEach(function(u) {
        a.removeAttribute(u);
      }));
    });
  };
}
var Jl = { name: "applyStyles", enabled: !0, phase: "write", fn: Iv, effect: $v, requires: ["computeStyles"] };
function kt(e) {
  return e.split("-")[0];
}
var ln = Math.max, oa = Math.min, An = Math.round;
function tr() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ql() {
  return !/^((?!chrome|android).)*safari/i.test(tr());
}
function Rn(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), a = 1, s = 1;
  t && lt(e) && (a = e.offsetWidth > 0 && An(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && An(o.height) / e.offsetHeight || 1);
  var r = cn(e) ? nt(e) : window, i = r.visualViewport, u = !Ql() && n, c = (o.left + (u && i ? i.offsetLeft : 0)) / a, d = (o.top + (u && i ? i.offsetTop : 0)) / s, p = o.width / a, h = o.height / s;
  return { width: p, height: h, top: d, right: c + p, bottom: d + h, left: c, x: c, y: d };
}
function zr(e) {
  var t = Rn(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function eu(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Mr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Vt(e) {
  return nt(e).getComputedStyle(e);
}
function Ov(e) {
  return ["table", "td", "th"].indexOf(Pt(e)) >= 0;
}
function tn(e) {
  return ((cn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ea(e) {
  return Pt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Mr(e) ? e.host : null) || tn(e);
}
function si(e) {
  return !lt(e) || Vt(e).position === "fixed" ? null : e.offsetParent;
}
function xv(e) {
  var t = /firefox/i.test(tr()), n = /Trident/i.test(tr());
  if (n && lt(e)) {
    var o = Vt(e);
    if (o.position === "fixed") return null;
  }
  var a = Ea(e);
  for (Mr(a) && (a = a.host); lt(a) && ["html", "body"].indexOf(Pt(a)) < 0; ) {
    var s = Vt(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return a;
    a = a.parentNode;
  }
  return null;
}
function Po(e) {
  for (var t = nt(e), n = si(e); n && Ov(n) && Vt(n).position === "static"; ) n = si(n);
  return n && (Pt(n) === "html" || Pt(n) === "body" && Vt(n).position === "static") ? t : n || xv(e) || t;
}
function Nr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function so(e, t, n) {
  return ln(e, oa(t, n));
}
function Lv(e, t, n) {
  var o = so(e, t, n);
  return o > n ? n : o;
}
function tu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function nu(e) {
  return Object.assign({}, tu(), e);
}
function ou(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Av = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, nu(typeof e != "number" ? e : ou(e, Co));
};
function Rv(e) {
  var t, n = e.state, o = e.name, a = e.options, s = n.elements.arrow, r = n.modifiersData.popperOffsets, i = kt(n.placement), u = Nr(i), c = [Je, ct].indexOf(i) >= 0, d = c ? "height" : "width";
  if (!(!s || !r)) {
    var p = Av(a.padding, n), h = zr(s), m = u === "y" ? Xe : Je, f = u === "y" ? ut : ct, g = n.rects.reference[d] + n.rects.reference[u] - r[u] - n.rects.popper[d], S = r[u] - n.rects.reference[u], v = Po(s), O = v ? u === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, _ = g / 2 - S / 2, T = p[m], P = O - h[d] - p[f], I = O / 2 - h[d] / 2 + _, x = so(T, I, P), Z = u;
    n.modifiersData[o] = (t = {}, t[Z] = x, t.centerOffset = x - I, t);
  }
}
function Mv(e) {
  var t = e.state, n = e.options, o = n.element, a = o === void 0 ? "[data-popper-arrow]" : o;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || eu(t.elements.popper, a) && (t.elements.arrow = a));
}
var zv = { name: "arrow", enabled: !0, phase: "main", fn: Rv, effect: Mv, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Mn(e) {
  return e.split("-")[1];
}
var Nv = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Fv(e, t) {
  var n = e.x, o = e.y, a = t.devicePixelRatio || 1;
  return { x: An(n * a) / a || 0, y: An(o * a) / a || 0 };
}
function ii(e) {
  var t, n = e.popper, o = e.popperRect, a = e.placement, s = e.variation, r = e.offsets, i = e.position, u = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, p = e.isFixed, h = r.x, m = h === void 0 ? 0 : h, f = r.y, g = f === void 0 ? 0 : f, S = typeof d == "function" ? d({ x: m, y: g }) : { x: m, y: g };
  m = S.x, g = S.y;
  var v = r.hasOwnProperty("x"), O = r.hasOwnProperty("y"), _ = Je, T = Xe, P = window;
  if (c) {
    var I = Po(n), x = "clientHeight", Z = "clientWidth";
    if (I === nt(n) && (I = tn(n), Vt(I).position !== "static" && i === "absolute" && (x = "scrollHeight", Z = "scrollWidth")), I = I, a === Xe || (a === Je || a === ct) && s === yo) {
      T = ut;
      var U = p && I === P && P.visualViewport ? P.visualViewport.height : I[x];
      g -= U - o.height, g *= u ? 1 : -1;
    }
    if (a === Je || (a === Xe || a === ut) && s === yo) {
      _ = ct;
      var Q = p && I === P && P.visualViewport ? P.visualViewport.width : I[Z];
      m -= Q - o.width, m *= u ? 1 : -1;
    }
  }
  var k = Object.assign({ position: i }, c && Nv), L = d === !0 ? Fv({ x: m, y: g }, nt(n)) : { x: m, y: g };
  if (m = L.x, g = L.y, u) {
    var W;
    return Object.assign({}, k, (W = {}, W[T] = O ? "0" : "", W[_] = v ? "0" : "", W.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", W));
  }
  return Object.assign({}, k, (t = {}, t[T] = O ? g + "px" : "", t[_] = v ? m + "px" : "", t.transform = "", t));
}
function Bv(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, a = o === void 0 ? !0 : o, s = n.adaptive, r = s === void 0 ? !0 : s, i = n.roundOffsets, u = i === void 0 ? !0 : i, c = { placement: kt(t.placement), variation: Mn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ii(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: r, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ii(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var au = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Bv, data: {} }, zo = { passive: !0 };
function Vv(e) {
  var t = e.state, n = e.instance, o = e.options, a = o.scroll, s = a === void 0 ? !0 : a, r = o.resize, i = r === void 0 ? !0 : r, u = nt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, zo);
  }), i && u.addEventListener("resize", n.update, zo), function() {
    s && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, zo);
    }), i && u.removeEventListener("resize", n.update, zo);
  };
}
var ru = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Vv, data: {} }, Dv = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Wo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Dv[t];
  });
}
var Hv = { start: "end", end: "start" };
function li(e) {
  return e.replace(/start|end/g, function(t) {
    return Hv[t];
  });
}
function Fr(e) {
  var t = nt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Br(e) {
  return Rn(tn(e)).left + Fr(e).scrollLeft;
}
function Wv(e, t) {
  var n = nt(e), o = tn(e), a = n.visualViewport, s = o.clientWidth, r = o.clientHeight, i = 0, u = 0;
  if (a) {
    s = a.width, r = a.height;
    var c = Ql();
    (c || !c && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  return { width: s, height: r, x: i + Br(e), y: u };
}
function jv(e) {
  var t, n = tn(e), o = Fr(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, s = ln(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), r = ln(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -o.scrollLeft + Br(e), u = -o.scrollTop;
  return Vt(a || n).direction === "rtl" && (i += ln(n.clientWidth, a ? a.clientWidth : 0) - s), { width: s, height: r, x: i, y: u };
}
function Vr(e) {
  var t = Vt(e), n = t.overflow, o = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function su(e) {
  return ["html", "body", "#document"].indexOf(Pt(e)) >= 0 ? e.ownerDocument.body : lt(e) && Vr(e) ? e : su(Ea(e));
}
function io(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = su(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = nt(o), r = a ? [s].concat(s.visualViewport || [], Vr(o) ? o : []) : o, i = t.concat(r);
  return a ? i : i.concat(io(Ea(r)));
}
function nr(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Uv(e, t) {
  var n = Rn(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ui(e, t, n) {
  return t === Xl ? nr(Wv(e, n)) : cn(t) ? Uv(t, n) : nr(jv(tn(e)));
}
function Kv(e) {
  var t = io(Ea(e)), n = ["absolute", "fixed"].indexOf(Vt(e).position) >= 0, o = n && lt(e) ? Po(e) : e;
  return cn(o) ? t.filter(function(a) {
    return cn(a) && eu(a, o) && Pt(a) !== "body";
  }) : [];
}
function Gv(e, t, n, o) {
  var a = t === "clippingParents" ? Kv(e) : [].concat(t), s = [].concat(a, [n]), r = s[0], i = s.reduce(function(u, c) {
    var d = ui(e, c, o);
    return u.top = ln(d.top, u.top), u.right = oa(d.right, u.right), u.bottom = oa(d.bottom, u.bottom), u.left = ln(d.left, u.left), u;
  }, ui(e, r, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function iu(e) {
  var t = e.reference, n = e.element, o = e.placement, a = o ? kt(o) : null, s = o ? Mn(o) : null, r = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, u;
  switch (a) {
    case Xe:
      u = { x: r, y: t.y - n.height };
      break;
    case ut:
      u = { x: r, y: t.y + t.height };
      break;
    case ct:
      u = { x: t.x + t.width, y: i };
      break;
    case Je:
      u = { x: t.x - n.width, y: i };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = a ? Nr(a) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (s) {
      case Ln:
        u[c] = u[c] - (t[d] / 2 - n[d] / 2);
        break;
      case yo:
        u[c] = u[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return u;
}
function bo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = o === void 0 ? e.placement : o, s = n.strategy, r = s === void 0 ? e.strategy : s, i = n.boundary, u = i === void 0 ? gv : i, c = n.rootBoundary, d = c === void 0 ? Xl : c, p = n.elementContext, h = p === void 0 ? Gn : p, m = n.altBoundary, f = m === void 0 ? !1 : m, g = n.padding, S = g === void 0 ? 0 : g, v = nu(typeof S != "number" ? S : ou(S, Co)), O = h === Gn ? vv : Gn, _ = e.rects.popper, T = e.elements[f ? O : h], P = Gv(cn(T) ? T : T.contextElement || tn(e.elements.popper), u, d, r), I = Rn(e.elements.reference), x = iu({ reference: I, element: _, placement: a }), Z = nr(Object.assign({}, _, x)), U = h === Gn ? Z : I, Q = { top: P.top - U.top + v.top, bottom: U.bottom - P.bottom + v.bottom, left: P.left - U.left + v.left, right: U.right - P.right + v.right }, k = e.modifiersData.offset;
  if (h === Gn && k) {
    var L = k[a];
    Object.keys(Q).forEach(function(W) {
      var re = [ct, ut].indexOf(W) >= 0 ? 1 : -1, $ = [Xe, ut].indexOf(W) >= 0 ? "y" : "x";
      Q[W] += L[$] * re;
    });
  }
  return Q;
}
function Zv(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = n.boundary, s = n.rootBoundary, r = n.padding, i = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? Dn : u, d = Mn(o), p = d ? i ? ri : ri.filter(function(f) {
    return Mn(f) === d;
  }) : Co, h = p.filter(function(f) {
    return c.indexOf(f) >= 0;
  });
  h.length === 0 && (h = p);
  var m = h.reduce(function(f, g) {
    return f[g] = bo(e, { placement: g, boundary: a, rootBoundary: s, padding: r })[kt(g)], f;
  }, {});
  return Object.keys(m).sort(function(f, g) {
    return m[f] - m[g];
  });
}
function qv(e) {
  if (kt(e) === Rr) return [];
  var t = Wo(e);
  return [li(e), t, li(t)];
}
function Yv(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var a = n.mainAxis, s = a === void 0 ? !0 : a, r = n.altAxis, i = r === void 0 ? !0 : r, u = n.fallbackPlacements, c = n.padding, d = n.boundary, p = n.rootBoundary, h = n.altBoundary, m = n.flipVariations, f = m === void 0 ? !0 : m, g = n.allowedAutoPlacements, S = t.options.placement, v = kt(S), O = v === S, _ = u || (O || !f ? [Wo(S)] : qv(S)), T = [S].concat(_).reduce(function(de, ve) {
      return de.concat(kt(ve) === Rr ? Zv(t, { placement: ve, boundary: d, rootBoundary: p, padding: c, flipVariations: f, allowedAutoPlacements: g }) : ve);
    }, []), P = t.rects.reference, I = t.rects.popper, x = /* @__PURE__ */ new Map(), Z = !0, U = T[0], Q = 0; Q < T.length; Q++) {
      var k = T[Q], L = kt(k), W = Mn(k) === Ln, re = [Xe, ut].indexOf(L) >= 0, $ = re ? "width" : "height", z = bo(t, { placement: k, boundary: d, rootBoundary: p, altBoundary: h, padding: c }), R = re ? W ? ct : Je : W ? ut : Xe;
      P[$] > I[$] && (R = Wo(R));
      var ee = Wo(R), J = [];
      if (s && J.push(z[L] <= 0), i && J.push(z[R] <= 0, z[ee] <= 0), J.every(function(de) {
        return de;
      })) {
        U = k, Z = !1;
        break;
      }
      x.set(k, J);
    }
    if (Z) for (var le = f ? 3 : 1, ge = function(de) {
      var ve = T.find(function(Ee) {
        var ae = x.get(Ee);
        if (ae) return ae.slice(0, de).every(function(me) {
          return me;
        });
      });
      if (ve) return U = ve, "break";
    }, be = le; be > 0; be--) {
      var X = ge(be);
      if (X === "break") break;
    }
    t.placement !== U && (t.modifiersData[o]._skip = !0, t.placement = U, t.reset = !0);
  }
}
var Xv = { name: "flip", enabled: !0, phase: "main", fn: Yv, requiresIfExists: ["offset"], data: { _skip: !1 } };
function ci(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function di(e) {
  return [Xe, ct, ut, Je].some(function(t) {
    return e[t] >= 0;
  });
}
function Jv(e) {
  var t = e.state, n = e.name, o = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, r = bo(t, { elementContext: "reference" }), i = bo(t, { altBoundary: !0 }), u = ci(r, o), c = ci(i, a, s), d = di(u), p = di(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": p });
}
var Qv = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Jv };
function e0(e, t, n) {
  var o = kt(e), a = [Je, Xe].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, r = s[0], i = s[1];
  return r = r || 0, i = (i || 0) * a, [Je, ct].indexOf(o) >= 0 ? { x: i, y: r } : { x: r, y: i };
}
function t0(e) {
  var t = e.state, n = e.options, o = e.name, a = n.offset, s = a === void 0 ? [0, 0] : a, r = Dn.reduce(function(d, p) {
    return d[p] = e0(p, t.rects, s), d;
  }, {}), i = r[t.placement], u = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = r;
}
var n0 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: t0 };
function o0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = iu({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var lu = { name: "popperOffsets", enabled: !0, phase: "read", fn: o0, data: {} };
function a0(e) {
  return e === "x" ? "y" : "x";
}
function r0(e) {
  var t = e.state, n = e.options, o = e.name, a = n.mainAxis, s = a === void 0 ? !0 : a, r = n.altAxis, i = r === void 0 ? !1 : r, u = n.boundary, c = n.rootBoundary, d = n.altBoundary, p = n.padding, h = n.tether, m = h === void 0 ? !0 : h, f = n.tetherOffset, g = f === void 0 ? 0 : f, S = bo(t, { boundary: u, rootBoundary: c, padding: p, altBoundary: d }), v = kt(t.placement), O = Mn(t.placement), _ = !O, T = Nr(v), P = a0(T), I = t.modifiersData.popperOffsets, x = t.rects.reference, Z = t.rects.popper, U = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, Q = typeof U == "number" ? { mainAxis: U, altAxis: U } : Object.assign({ mainAxis: 0, altAxis: 0 }, U), k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = { x: 0, y: 0 };
  if (I) {
    if (s) {
      var W, re = T === "y" ? Xe : Je, $ = T === "y" ? ut : ct, z = T === "y" ? "height" : "width", R = I[T], ee = R + S[re], J = R - S[$], le = m ? -Z[z] / 2 : 0, ge = O === Ln ? x[z] : Z[z], be = O === Ln ? -Z[z] : -x[z], X = t.elements.arrow, de = m && X ? zr(X) : { width: 0, height: 0 }, ve = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : tu(), Ee = ve[re], ae = ve[$], me = so(0, x[z], de[z]), Fe = _ ? x[z] / 2 - le - me - Ee - Q.mainAxis : ge - me - Ee - Q.mainAxis, V = _ ? -x[z] / 2 + le + me + ae + Q.mainAxis : be + me + ae + Q.mainAxis, oe = t.elements.arrow && Po(t.elements.arrow), ne = oe ? T === "y" ? oe.clientTop || 0 : oe.clientLeft || 0 : 0, Te = (W = k?.[T]) != null ? W : 0, Ve = R + Fe - Te - ne, Le = R + V - Te, ke = so(m ? oa(ee, Ve) : ee, R, m ? ln(J, Le) : J);
      I[T] = ke, L[T] = ke - R;
    }
    if (i) {
      var ce, Ke = T === "x" ? Xe : Je, mn = T === "x" ? ut : ct, Ge = I[P], wt = P === "y" ? "height" : "width", hn = Ge + S[Ke], nn = Ge - S[mn], D = [Xe, Je].indexOf(v) !== -1, fe = (ce = k?.[P]) != null ? ce : 0, at = D ? hn : Ge - x[wt] - Z[wt] - fe + Q.altAxis, Wt = D ? Ge + x[wt] + Z[wt] - fe - Q.altAxis : nn, jt = m && D ? Lv(at, Ge, Wt) : so(m ? at : hn, Ge, m ? Wt : nn);
      I[P] = jt, L[P] = jt - Ge;
    }
    t.modifiersData[o] = L;
  }
}
var s0 = { name: "preventOverflow", enabled: !0, phase: "main", fn: r0, requiresIfExists: ["offset"] };
function i0(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function l0(e) {
  return e === nt(e) || !lt(e) ? Fr(e) : i0(e);
}
function u0(e) {
  var t = e.getBoundingClientRect(), n = An(t.width) / e.offsetWidth || 1, o = An(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function c0(e, t, n) {
  n === void 0 && (n = !1);
  var o = lt(t), a = lt(t) && u0(t), s = tn(t), r = Rn(e, a, n), i = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (o || !o && !n) && ((Pt(t) !== "body" || Vr(s)) && (i = l0(t)), lt(t) ? (u = Rn(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : s && (u.x = Br(s))), { x: r.left + i.scrollLeft - u.x, y: r.top + i.scrollTop - u.y, width: r.width, height: r.height };
}
function d0(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function a(s) {
    n.add(s.name);
    var r = [].concat(s.requires || [], s.requiresIfExists || []);
    r.forEach(function(i) {
      if (!n.has(i)) {
        var u = t.get(i);
        u && a(u);
      }
    }), o.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || a(s);
  }), o;
}
function f0(e) {
  var t = d0(e);
  return Tv.reduce(function(n, o) {
    return n.concat(t.filter(function(a) {
      return a.phase === o;
    }));
  }, []);
}
function p0(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function m0(e) {
  var t = e.reduce(function(n, o) {
    var a = n[o.name];
    return n[o.name] = a ? Object.assign({}, a, o, { options: Object.assign({}, a.options, o.options), data: Object.assign({}, a.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var fi = { placement: "bottom", modifiers: [], strategy: "absolute" };
function pi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Dr(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, a = t.defaultOptions, s = a === void 0 ? fi : a;
  return function(r, i, u) {
    u === void 0 && (u = s);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, fi, s), modifiersData: {}, elements: { reference: r, popper: i }, attributes: {}, styles: {} }, d = [], p = !1, h = { state: c, setOptions: function(g) {
      var S = typeof g == "function" ? g(c.options) : g;
      f(), c.options = Object.assign({}, s, c.options, S), c.scrollParents = { reference: cn(r) ? io(r) : r.contextElement ? io(r.contextElement) : [], popper: io(i) };
      var v = f0(m0([].concat(o, c.options.modifiers)));
      return c.orderedModifiers = v.filter(function(O) {
        return O.enabled;
      }), m(), h.update();
    }, forceUpdate: function() {
      if (!p) {
        var g = c.elements, S = g.reference, v = g.popper;
        if (pi(S, v)) {
          c.rects = { reference: c0(S, Po(v), c.options.strategy === "fixed"), popper: zr(v) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(Z) {
            return c.modifiersData[Z.name] = Object.assign({}, Z.data);
          });
          for (var O = 0; O < c.orderedModifiers.length; O++) {
            if (c.reset === !0) {
              c.reset = !1, O = -1;
              continue;
            }
            var _ = c.orderedModifiers[O], T = _.fn, P = _.options, I = P === void 0 ? {} : P, x = _.name;
            typeof T == "function" && (c = T({ state: c, options: I, name: x, instance: h }) || c);
          }
        }
      }
    }, update: p0(function() {
      return new Promise(function(g) {
        h.forceUpdate(), g(c);
      });
    }), destroy: function() {
      f(), p = !0;
    } };
    if (!pi(r, i)) return h;
    h.setOptions(u).then(function(g) {
      !p && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function m() {
      c.orderedModifiers.forEach(function(g) {
        var S = g.name, v = g.options, O = v === void 0 ? {} : v, _ = g.effect;
        if (typeof _ == "function") {
          var T = _({ state: c, name: S, instance: h, options: O }), P = function() {
          };
          d.push(T || P);
        }
      });
    }
    function f() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return h;
  };
}
Dr();
var h0 = [ru, lu, au, Jl];
Dr({ defaultModifiers: h0 });
var g0 = [ru, lu, au, Jl, n0, Xv, s0, zv, Qv], v0 = Dr({ defaultModifiers: g0 });
const y0 = ["fixed", "absolute"], b0 = he({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: te(Array),
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
    values: Dn,
    default: "bottom"
  },
  popperOptions: {
    type: te(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: y0,
    default: "absolute"
  }
}), uu = he({
  ...b0,
  id: String,
  style: {
    type: te([String, Array, Object])
  },
  className: {
    type: te([String, Array, Object])
  },
  effect: {
    type: te(String),
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
    type: te([String, Array, Object])
  },
  popperStyle: {
    type: te([String, Array, Object])
  },
  referenceEl: {
    type: te(Object)
  },
  triggerTargetEl: {
    type: te(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...pn(["ariaLabel"])
}), w0 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, _0 = (e, t) => {
  const n = M(!1), o = M();
  return {
    focusStartRef: o,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var d;
      ((d = c.detail) == null ? void 0 : d.focusReason) !== "pointer" && (o.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (c) => {
      e.visible && !n.value && (c.target && (o.value = c.target), n.value = !0);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, S0 = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: a } = e, s = {
    placement: n,
    strategy: o,
    ...a,
    modifiers: [...C0(e), ...t]
  };
  return P0(s, a?.modifiers), s;
}, k0 = (e) => {
  if (Re)
    return At(e);
};
function C0(e) {
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
function P0(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const E0 = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = T0(u);
      Object.assign(r.value, c);
    },
    requires: ["computeStyles"]
  }, a = b(() => {
    const { onFirstUpdate: u, placement: c, strategy: d, modifiers: p } = l(n);
    return {
      onFirstUpdate: u,
      placement: c || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...p || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = Xt(), r = M({
    styles: {
      popper: {
        position: l(a).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), i = () => {
    s.value && (s.value.destroy(), s.value = void 0);
  };
  return ie(a, (u) => {
    const c = l(s);
    c && c.setOptions(u);
  }, {
    deep: !0
  }), ie([e, t], ([u, c]) => {
    i(), !(!u || !c) && (s.value = v0(u, c, l(a)));
  }), Et(() => {
    i();
  }), {
    state: b(() => {
      var u;
      return { ...((u = l(s)) == null ? void 0 : u.state) || {} };
    }),
    styles: b(() => l(r).styles),
    attributes: b(() => l(r).attributes),
    update: () => {
      var u;
      return (u = l(s)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = l(s)) == null ? void 0 : u.forceUpdate();
    },
    instanceRef: b(() => l(s))
  };
};
function T0(e) {
  const t = Object.keys(e.elements), n = Jo(t.map((a) => [a, e.styles[a] || {}])), o = Jo(t.map((a) => [a, e.attributes[a]]));
  return {
    styles: n,
    attributes: o
  };
}
const I0 = 0, $0 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: a } = ye(xr, void 0), s = M(), r = M(), i = b(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = b(() => {
    var v;
    const O = l(s), _ = (v = l(r)) != null ? v : I0;
    return {
      name: "arrow",
      enabled: !jm(O),
      options: {
        element: O,
        padding: _
      }
    };
  }), c = b(() => ({
    onFirstUpdate: () => {
      f();
    },
    ...S0(e, [
      l(u),
      l(i)
    ])
  })), d = b(() => k0(e.referenceEl) || l(o)), { attributes: p, state: h, styles: m, update: f, forceUpdate: g, instanceRef: S } = E0(d, n, c);
  return ie(S, (v) => t.value = v), Ie(() => {
    ie(() => {
      var v;
      return (v = l(d)) == null ? void 0 : v.getBoundingClientRect();
    }, () => {
      f();
    });
  }), {
    attributes: p,
    arrowRef: s,
    contentRef: n,
    instanceRef: S,
    state: h,
    styles: m,
    role: a,
    forceUpdate: g,
    update: f
  };
}, O0 = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: a } = Sl(), s = Pe("popper"), r = b(() => l(t).popper), i = M(pe(e.zIndex) ? e.zIndex : a()), u = b(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), c = b(() => [
    { zIndex: l(i) },
    l(n).popper,
    e.popperStyle || {}
  ]), d = b(() => o.value === "dialog" ? "false" : void 0), p = b(() => l(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: p,
    contentAttrs: r,
    contentClass: u,
    contentStyle: c,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = pe(e.zIndex) ? e.zIndex : a();
    }
  };
}, x0 = G({
  name: "ElPopperContent"
}), L0 = /* @__PURE__ */ G({
  ...x0,
  props: uu,
  emits: w0,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: a,
      trapped: s,
      onFocusAfterReleased: r,
      onFocusAfterTrapped: i,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: d
    } = _0(o, n), { attributes: p, arrowRef: h, contentRef: m, styles: f, instanceRef: g, role: S, update: v } = $0(o), {
      ariaModal: O,
      arrowStyle: _,
      contentAttrs: T,
      contentClass: P,
      contentStyle: I,
      updateZIndex: x
    } = O0(o, {
      styles: f,
      attributes: p,
      role: S
    }), Z = ye(na, void 0), U = M();
    vt(jl, {
      arrowStyle: _,
      arrowRef: h,
      arrowOffset: U
    }), Z && vt(na, {
      ...Z,
      addInputId: po,
      removeInputId: po
    });
    let Q;
    const k = (W = !0) => {
      v(), W && x();
    }, L = () => {
      k(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return Ie(() => {
      ie(() => o.triggerTargetEl, (W, re) => {
        Q?.(), Q = void 0;
        const $ = l(W || m.value), z = l(re || m.value);
        gt($) && (Q = ie([S, () => o.ariaLabel, O, () => o.id], (R) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ee, J) => {
            zt(R[J]) ? $.removeAttribute(ee) : $.setAttribute(ee, R[J]);
          });
        }, { immediate: !0 })), z !== $ && gt(z) && ["role", "aria-label", "aria-modal", "id"].forEach((R) => {
          z.removeAttribute(R);
        });
      }, { immediate: !0 }), ie(() => o.visible, L, { immediate: !0 });
    }), Et(() => {
      Q?.(), Q = void 0;
    }), t({
      popperContentRef: m,
      popperInstanceRef: g,
      updatePopper: k,
      contentStyle: I
    }), (W, re) => (w(), A("div", Jt({
      ref_key: "contentRef",
      ref: m
    }, l(T), {
      style: l(I),
      class: l(P),
      tabindex: "-1",
      onMouseenter: ($) => W.$emit("mouseenter", $),
      onMouseleave: ($) => W.$emit("mouseleave", $)
    }), [
      F(l(hv), {
        trapped: l(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": l(m),
        "focus-start-el": l(a),
        onFocusAfterTrapped: l(i),
        onFocusAfterReleased: l(r),
        onFocusin: l(u),
        onFocusoutPrevented: l(c),
        onReleaseRequested: l(d)
      }, {
        default: q(() => [
          se(W.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var A0 = /* @__PURE__ */ _e(L0, [["__file", "content.vue"]]);
const R0 = ot(Ug), Hr = Symbol("elTooltip");
function mi() {
  let e;
  const t = (o, a) => {
    n(), e = window.setTimeout(o, a);
  }, n = () => window.clearTimeout(e);
  return So(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const M0 = he({
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
}), z0 = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: a
}) => {
  const { registerTimeout: s } = mi(), {
    registerTimeout: r,
    cancelTimeout: i
  } = mi();
  return {
    onOpen: (d) => {
      s(() => {
        o(d);
        const p = l(n);
        pe(p) && p > 0 && r(() => {
          a(d);
        }, p);
      }, l(e));
    },
    onClose: (d) => {
      i(), s(() => {
        a(d);
      }, l(t));
    }
  };
}, Wr = he({
  ...M0,
  ...uu,
  appendTo: {
    type: te([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: te(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...pn(["ariaLabel"])
}), cu = he({
  ...Gl,
  disabled: Boolean,
  trigger: {
    type: te([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: te(Array),
    default: () => [Ne.enter, Ne.numpadEnter, Ne.space]
  }
}), N0 = _a({
  type: te(Boolean),
  default: null
}), F0 = _a({
  type: te(Function)
}), B0 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], a = {
    [e]: N0,
    [n]: F0
  };
  return {
    useModelToggle: ({
      indicator: r,
      toggleReason: i,
      shouldHideWhenRouteChanges: u,
      shouldProceed: c,
      onShow: d,
      onHide: p
    }) => {
      const h = Ue(), { emit: m } = h, f = h.props, g = b(() => xe(f[n])), S = b(() => f[e] === null), v = (x) => {
        r.value !== !0 && (r.value = !0, i && (i.value = x), xe(d) && d(x));
      }, O = (x) => {
        r.value !== !1 && (r.value = !1, i && (i.value = x), xe(p) && p(x));
      }, _ = (x) => {
        if (f.disabled === !0 || xe(c) && !c())
          return;
        const Z = g.value && Re;
        Z && m(t, !0), (S.value || !Z) && v(x);
      }, T = (x) => {
        if (f.disabled === !0 || !Re)
          return;
        const Z = g.value && Re;
        Z && m(t, !1), (S.value || !Z) && O(x);
      }, P = (x) => {
        Qo(x) && (f.disabled && x ? g.value && m(t, !1) : r.value !== x && (x ? v() : O()));
      }, I = () => {
        r.value ? T() : _();
      };
      return ie(() => f[e], P), u && h.appContext.config.globalProperties.$route !== void 0 && ie(() => ({
        ...h.proxy.$route
      }), () => {
        u.value && r.value && T();
      }), Ie(() => {
        P(f[e]);
      }), {
        hide: T,
        show: _,
        toggle: I,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: a,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: V0,
  useModelToggleEmits: D0,
  useModelToggle: H0
} = B0("visible"), W0 = he({
  ...Ul,
  ...V0,
  ...Wr,
  ...cu,
  ...Kl,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), j0 = [
  ...D0,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], U0 = (e, t) => We(e) ? e.includes(t) : e === t, yn = (e, t, n) => (o) => {
  U0(l(e), t) && n(o);
}, $t = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (a) => {
  const s = e?.(a);
  if (n === !1 || !s)
    return t?.(a);
}, K0 = G({
  name: "ElTooltipTrigger"
}), G0 = /* @__PURE__ */ G({
  ...K0,
  props: cu,
  setup(e, { expose: t }) {
    const n = e, o = Pe("tooltip"), { controlled: a, id: s, open: r, onOpen: i, onClose: u, onToggle: c } = ye(Hr, void 0), d = M(null), p = () => {
      if (l(a) || n.disabled)
        return !0;
    }, h = St(n, "trigger"), m = $t(p, yn(h, "hover", i)), f = $t(p, yn(h, "hover", u)), g = $t(p, yn(h, "click", (T) => {
      T.button === 0 && c(T);
    })), S = $t(p, yn(h, "focus", i)), v = $t(p, yn(h, "focus", u)), O = $t(p, yn(h, "contextmenu", (T) => {
      T.preventDefault(), c(T);
    })), _ = $t(p, (T) => {
      const { code: P } = T;
      n.triggerKeys.includes(P) && (T.preventDefault(), c(T));
    });
    return t({
      triggerRef: d
    }), (T, P) => (w(), Y(l(tv), {
      id: l(s),
      "virtual-ref": T.virtualRef,
      open: l(r),
      "virtual-triggering": T.virtualTriggering,
      class: N(l(o).e("trigger")),
      onBlur: l(v),
      onClick: l(g),
      onContextmenu: l(O),
      onFocus: l(S),
      onMouseenter: l(m),
      onMouseleave: l(f),
      onKeydown: l(_)
    }, {
      default: q(() => [
        se(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Z0 = /* @__PURE__ */ _e(G0, [["__file", "trigger.vue"]]);
const q0 = he({
  to: {
    type: te([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Y0 = /* @__PURE__ */ G({
  __name: "teleport",
  props: q0,
  setup(e) {
    return (t, n) => t.disabled ? se(t.$slots, "default", { key: 0 }) : (w(), Y(Ic, {
      key: 1,
      to: t.to
    }, [
      se(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var X0 = /* @__PURE__ */ _e(Y0, [["__file", "teleport.vue"]]);
const J0 = ot(X0), du = () => {
  const e = gr(), t = Bl(), n = b(() => `${e.value}-popper-container-${t.prefix}`), o = b(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, Q0 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, ey = () => {
  const { id: e, selector: t } = du();
  return $c(() => {
    Re && (document.body.querySelector(t.value) || Q0(e.value));
  }), {
    id: e,
    selector: t
  };
}, ty = G({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), ny = /* @__PURE__ */ G({
  ...ty,
  props: Wr,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = du(), a = Pe("tooltip"), s = M();
    let r;
    const {
      controlled: i,
      id: u,
      open: c,
      trigger: d,
      onClose: p,
      onOpen: h,
      onShow: m,
      onHide: f,
      onBeforeShow: g,
      onBeforeHide: S
    } = ye(Hr, void 0), v = b(() => n.transition || `${a.namespace.value}-fade-in-linear`), O = b(() => n.persistent);
    Et(() => {
      r?.();
    });
    const _ = b(() => l(O) ? !0 : l(c)), T = b(() => n.disabled ? !1 : l(c)), P = b(() => n.appendTo || o.value), I = b(() => {
      var R;
      return (R = n.style) != null ? R : {};
    }), x = M(!0), Z = () => {
      f(), z() && It(document.body), x.value = !0;
    }, U = () => {
      if (l(i))
        return !0;
    }, Q = $t(U, () => {
      n.enterable && l(d) === "hover" && h();
    }), k = $t(U, () => {
      l(d) === "hover" && p();
    }), L = () => {
      var R, ee;
      (ee = (R = s.value) == null ? void 0 : R.updatePopper) == null || ee.call(R), g?.();
    }, W = () => {
      S?.();
    }, re = () => {
      m(), r = ih(b(() => {
        var R;
        return (R = s.value) == null ? void 0 : R.popperContentRef;
      }), () => {
        if (l(i))
          return;
        l(d) !== "hover" && p();
      });
    }, $ = () => {
      n.virtualTriggering || p();
    }, z = (R) => {
      var ee;
      const J = (ee = s.value) == null ? void 0 : ee.popperContentRef, le = R?.relatedTarget || document.activeElement;
      return J?.contains(le);
    };
    return ie(() => l(c), (R) => {
      R ? x.value = !1 : r?.();
    }, {
      flush: "post"
    }), ie(() => n.content, () => {
      var R, ee;
      (ee = (R = s.value) == null ? void 0 : R.updatePopper) == null || ee.call(R);
    }), t({
      contentRef: s,
      isFocusInsideContent: z
    }), (R, ee) => (w(), Y(l(J0), {
      disabled: !R.teleported,
      to: l(P)
    }, {
      default: q(() => [
        F(Bn, {
          name: l(v),
          onAfterLeave: Z,
          onBeforeEnter: L,
          onAfterEnter: re,
          onBeforeLeave: W
        }, {
          default: q(() => [
            l(_) ? Ye((w(), Y(l(A0), Jt({
              key: 0,
              id: l(u),
              ref_key: "contentRef",
              ref: s
            }, R.$attrs, {
              "aria-label": R.ariaLabel,
              "aria-hidden": x.value,
              "boundaries-padding": R.boundariesPadding,
              "fallback-placements": R.fallbackPlacements,
              "gpu-acceleration": R.gpuAcceleration,
              offset: R.offset,
              placement: R.placement,
              "popper-options": R.popperOptions,
              strategy: R.strategy,
              effect: R.effect,
              enterable: R.enterable,
              pure: R.pure,
              "popper-class": R.popperClass,
              "popper-style": [R.popperStyle, l(I)],
              "reference-el": R.referenceEl,
              "trigger-target-el": R.triggerTargetEl,
              visible: l(T),
              "z-index": R.zIndex,
              onMouseenter: l(Q),
              onMouseleave: l(k),
              onBlur: $,
              onClose: l(p)
            }), {
              default: q(() => [
                se(R.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Ft, l(T)]
            ]) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var oy = /* @__PURE__ */ _e(ny, [["__file", "content.vue"]]);
const ay = G({
  name: "ElTooltip"
}), ry = /* @__PURE__ */ G({
  ...ay,
  props: W0,
  emits: j0,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    ey();
    const a = ka(), s = M(), r = M(), i = () => {
      var v;
      const O = l(s);
      O && ((v = O.popperInstanceRef) == null || v.update());
    }, u = M(!1), c = M(), { show: d, hide: p, hasUpdateHandler: h } = H0({
      indicator: u,
      toggleReason: c
    }), { onOpen: m, onClose: f } = z0({
      showAfter: St(o, "showAfter"),
      hideAfter: St(o, "hideAfter"),
      autoClose: St(o, "autoClose"),
      open: d,
      close: p
    }), g = b(() => Qo(o.visible) && !h.value);
    vt(Hr, {
      controlled: g,
      id: a,
      open: mr(u),
      trigger: St(o, "trigger"),
      onOpen: (v) => {
        m(v);
      },
      onClose: (v) => {
        f(v);
      },
      onToggle: (v) => {
        l(u) ? f(v) : m(v);
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
    }), ie(() => o.disabled, (v) => {
      v && u.value && (u.value = !1);
    });
    const S = (v) => {
      var O;
      return (O = r.value) == null ? void 0 : O.isFocusInsideContent(v);
    };
    return Oc(() => u.value && p()), t({
      popperRef: s,
      contentRef: r,
      isFocusInsideContent: S,
      updatePopper: i,
      onOpen: m,
      onClose: f,
      hide: p
    }), (v, O) => (w(), Y(l(R0), {
      ref_key: "popperRef",
      ref: s,
      role: v.role
    }, {
      default: q(() => [
        F(Z0, {
          disabled: v.disabled,
          trigger: v.trigger,
          "trigger-keys": v.triggerKeys,
          "virtual-ref": v.virtualRef,
          "virtual-triggering": v.virtualTriggering
        }, {
          default: q(() => [
            v.$slots.default ? se(v.$slots, "default", { key: 0 }) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        F(oy, {
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
          default: q(() => [
            se(v.$slots, "content", {}, () => [
              v.rawContent ? (w(), A("span", {
                key: 0,
                innerHTML: v.content
              }, null, 8, ["innerHTML"])) : (w(), A("span", { key: 1 }, K(v.content), 1))
            ]),
            v.showArrow ? (w(), Y(l(Zg), {
              key: 0,
              "arrow-offset": v.arrowOffset
            }, null, 8, ["arrow-offset"])) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var sy = /* @__PURE__ */ _e(ry, [["__file", "tooltip.vue"]]);
const jr = ot(sy), iy = he({
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
    type: te([String, Object, Array])
  },
  offset: {
    type: te(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), ly = G({
  name: "ElBadge"
}), uy = /* @__PURE__ */ G({
  ...ly,
  props: iy,
  setup(e, { expose: t }) {
    const n = e, o = Pe("badge"), a = b(() => n.isDot ? "" : pe(n.value) && pe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = b(() => {
      var r, i, u, c, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: go(-((i = (r = n.offset) == null ? void 0 : r[0]) != null ? i : 0)),
          marginTop: go((c = (u = n.offset) == null ? void 0 : u[1]) != null ? c : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: a
    }), (r, i) => (w(), A("div", {
      class: N(l(o).b())
    }, [
      se(r.$slots, "default"),
      F(Bn, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: q(() => [
          Ye(y("sup", {
            class: N([
              l(o).e("content"),
              l(o).em("content", r.type),
              l(o).is("fixed", !!r.$slots.default),
              l(o).is("dot", r.isDot),
              l(o).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: we(l(s))
          }, [
            se(r.$slots, "content", { value: l(a) }, () => [
              sn(K(l(a)), 1)
            ])
          ], 6), [
            [Ft, !r.hidden && (l(a) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var cy = /* @__PURE__ */ _e(uy, [["__file", "badge.vue"]]);
const dy = ot(cy), fy = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), or = he({
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
    values: Pl
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), py = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, my = G({
  name: "ElTag"
}), hy = /* @__PURE__ */ G({
  ...my,
  props: or,
  emits: py,
  setup(e, { emit: t }) {
    const n = e, o = ko(), a = Pe("tag"), s = b(() => {
      const { type: c, hit: d, effect: p, closable: h, round: m } = n;
      return [
        a.b(),
        a.is("closable", h),
        a.m(c || "primary"),
        a.m(o.value),
        a.m(p),
        a.is("hit", d),
        a.is("round", m)
      ];
    }), r = (c) => {
      t("close", c);
    }, i = (c) => {
      t("click", c);
    }, u = (c) => {
      var d, p, h;
      (h = (p = (d = c?.component) == null ? void 0 : d.subTree) == null ? void 0 : p.component) != null && h.bum && (c.component.subTree.component.bum = null);
    };
    return (c, d) => c.disableTransitions ? (w(), A("span", {
      key: 0,
      class: N(l(s)),
      style: we({ backgroundColor: c.color }),
      onClick: i
    }, [
      y("span", {
        class: N(l(a).e("content"))
      }, [
        se(c.$slots, "default")
      ], 2),
      c.closable ? (w(), Y(l(He), {
        key: 0,
        class: N(l(a).e("close")),
        onClick: $e(r, ["stop"])
      }, {
        default: q(() => [
          F(l(vo))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : H("v-if", !0)
    ], 6)) : (w(), Y(Bn, {
      key: 1,
      name: `${l(a).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: u
    }, {
      default: q(() => [
        y("span", {
          class: N(l(s)),
          style: we({ backgroundColor: c.color }),
          onClick: i
        }, [
          y("span", {
            class: N(l(a).e("content"))
          }, [
            se(c.$slots, "default")
          ], 2),
          c.closable ? (w(), Y(l(He), {
            key: 0,
            class: N(l(a).e("close")),
            onClick: $e(r, ["stop"])
          }, {
            default: q(() => [
              F(l(vo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var gy = /* @__PURE__ */ _e(hy, [["__file", "tag.vue"]]);
const vy = ot(gy), Kt = /* @__PURE__ */ new Map();
if (Re) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of Kt.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function hi(e, t) {
  let n = [];
  return We(t.arg) ? n = t.arg : gt(t.arg) && n.push(t.arg), function(o, a) {
    const s = t.instance.popperRef, r = o.target, i = a?.target, u = !t || !t.instance, c = !r || !i, d = e.contains(r) || e.contains(i), p = e === r, h = n.length && n.some((f) => f?.contains(r)) || n.length && n.includes(i), m = s && (s.contains(r) || s.contains(i));
    u || c || d || p || h || m || t.value(o, a);
  };
}
const yy = {
  beforeMount(e, t) {
    Kt.has(e) || Kt.set(e, []), Kt.get(e).push({
      documentHandler: hi(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Kt.has(e) || Kt.set(e, []);
    const n = Kt.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), a = {
      documentHandler: hi(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, a) : n.push(a);
  },
  unmounted(e) {
    Kt.delete(e);
  }
}, by = he({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: te(Object)
  },
  size: On,
  button: {
    type: te(Object)
  },
  experimentalFeatures: {
    type: te(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: te(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Il
}), ft = {};
G({
  name: "ElConfigProvider",
  props: by,
  setup(e, { slots: t }) {
    ie(() => e.message, (o) => {
      Object.assign(ft, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = xl(e);
    return () => se(t, "default", { config: n?.value });
  }
});
const wy = 100, _y = 600, gi = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = wy, delay: a = _y } = xe(n) ? {} : n;
    let s, r;
    const i = () => xe(n) ? n() : n.handler(), u = () => {
      r && (clearTimeout(r), r = void 0), s && (clearInterval(s), s = void 0);
    };
    e.addEventListener("mousedown", (c) => {
      c.button === 0 && (u(), i(), document.addEventListener("mouseup", () => u(), {
        once: !0
      }), r = setTimeout(() => {
        s = setInterval(() => {
          i();
        }, o);
      }, a));
    });
  }
}, Sy = he({
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
  size: On,
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
    validator: (e) => e === null || pe(e) || ["min", "max"].includes(e),
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
  ...pn(["ariaLabel"])
}), ky = {
  [en]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Nt]: (e) => pe(e) || zt(e),
  [Ae]: (e) => pe(e) || zt(e)
}, Cy = G({
  name: "ElInputNumber"
}), Py = /* @__PURE__ */ G({
  ...Cy,
  props: Sy,
  emits: ky,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: a } = wa(), s = Pe("input-number"), r = M(), i = Bt({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: u } = Ca(), c = b(() => pe(o.modelValue) && o.modelValue <= o.min), d = b(() => pe(o.modelValue) && o.modelValue >= o.max), p = b(() => {
      const $ = v(o.step);
      return pt(o.precision) ? Math.max(v(o.modelValue), $) : ($ > o.precision, o.precision);
    }), h = b(() => o.controls && o.controlsPosition === "right"), m = ko(), f = Dl(), g = b(() => {
      if (i.userInput !== null)
        return i.userInput;
      let $ = i.currentValue;
      if (zt($))
        return "";
      if (pe($)) {
        if (Number.isNaN($))
          return "";
        pt(o.precision) || ($ = $.toFixed(o.precision));
      }
      return $;
    }), S = ($, z) => {
      if (pt(z) && (z = p.value), z === 0)
        return Math.round($);
      let R = String($);
      const ee = R.indexOf(".");
      if (ee === -1 || !R.replace(".", "").split("")[ee + z])
        return $;
      const ge = R.length;
      return R.charAt(ge - 1) === "5" && (R = `${R.slice(0, Math.max(0, ge - 1))}6`), Number.parseFloat(Number(R).toFixed(z));
    }, v = ($) => {
      if (zt($))
        return 0;
      const z = $.toString(), R = z.indexOf(".");
      let ee = 0;
      return R !== -1 && (ee = z.length - R - 1), ee;
    }, O = ($, z = 1) => pe($) ? S($ + o.step * z) : i.currentValue, _ = () => {
      if (o.readonly || f.value || d.value)
        return;
      const $ = Number(g.value) || 0, z = O($);
      I(z), n(Nt, i.currentValue), W();
    }, T = () => {
      if (o.readonly || f.value || c.value)
        return;
      const $ = Number(g.value) || 0, z = O($, -1);
      I(z), n(Nt, i.currentValue), W();
    }, P = ($, z) => {
      const { max: R, min: ee, step: J, precision: le, stepStrictly: ge, valueOnClear: be } = o;
      R < ee && Pr("InputNumber", "min should not be greater than max.");
      let X = Number($);
      if (zt($) || Number.isNaN(X))
        return null;
      if ($ === "") {
        if (be === null)
          return null;
        X = Be(be) ? { min: ee, max: R }[be] : be;
      }
      return ge && (X = S(Math.round(X / J) * J, le), X !== $ && z && n(Ae, X)), pt(le) || (X = S(X, le)), (X > R || X < ee) && (X = X > R ? R : ee, z && n(Ae, X)), X;
    }, I = ($, z = !0) => {
      var R;
      const ee = i.currentValue, J = P($);
      if (!z) {
        n(Ae, J);
        return;
      }
      ee === J && $ || (i.userInput = null, n(Ae, J), ee !== J && n(en, J, ee), o.validateEvent && ((R = u?.validate) == null || R.call(u, "change").catch((le) => void 0)), i.currentValue = J);
    }, x = ($) => {
      i.userInput = $;
      const z = $ === "" ? null : Number($);
      n(Nt, z), I(z, !1);
    }, Z = ($) => {
      const z = $ !== "" ? Number($) : "";
      (pe(z) && !Number.isNaN(z) || $ === "") && I(z), W(), i.userInput = null;
    }, U = () => {
      var $, z;
      (z = ($ = r.value) == null ? void 0 : $.focus) == null || z.call($);
    }, Q = () => {
      var $, z;
      (z = ($ = r.value) == null ? void 0 : $.blur) == null || z.call($);
    }, k = ($) => {
      n("focus", $);
    }, L = ($) => {
      var z, R;
      i.userInput = null, Nl() && i.currentValue === null && ((z = r.value) != null && z.input) && (r.value.input.value = ""), n("blur", $), o.validateEvent && ((R = u?.validate) == null || R.call(u, "blur").catch((ee) => void 0));
    }, W = () => {
      i.currentValue !== o.modelValue && (i.currentValue = o.modelValue);
    }, re = ($) => {
      document.activeElement === $.target && $.preventDefault();
    };
    return ie(() => o.modelValue, ($, z) => {
      const R = P($, !0);
      i.userInput === null && R !== z && (i.currentValue = R);
    }, { immediate: !0 }), Ie(() => {
      var $;
      const { min: z, max: R, modelValue: ee } = o, J = ($ = r.value) == null ? void 0 : $.input;
      if (J.setAttribute("role", "spinbutton"), Number.isFinite(R) ? J.setAttribute("aria-valuemax", String(R)) : J.removeAttribute("aria-valuemax"), Number.isFinite(z) ? J.setAttribute("aria-valuemin", String(z)) : J.removeAttribute("aria-valuemin"), J.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), J.setAttribute("aria-disabled", String(f.value)), !pe(ee) && ee != null) {
        let le = Number(ee);
        Number.isNaN(le) && (le = null), n(Ae, le);
      }
      J.addEventListener("wheel", re, { passive: !1 });
    }), Ji(() => {
      var $, z;
      const R = ($ = r.value) == null ? void 0 : $.input;
      R?.setAttribute("aria-valuenow", `${(z = i.currentValue) != null ? z : ""}`);
    }), t({
      focus: U,
      blur: Q
    }), ($, z) => (w(), A("div", {
      class: N([
        l(s).b(),
        l(s).m(l(m)),
        l(s).is("disabled", l(f)),
        l(s).is("without-controls", !$.controls),
        l(s).is("controls-right", l(h))
      ]),
      onDragstart: $e(() => {
      }, ["prevent"])
    }, [
      $.controls ? Ye((w(), A("span", {
        key: 0,
        role: "button",
        "aria-label": l(a)("el.inputNumber.decrease"),
        class: N([l(s).e("decrease"), l(s).is("disabled", l(c))]),
        onKeydown: xt(T, ["enter"])
      }, [
        se($.$slots, "decrease-icon", {}, () => [
          F(l(He), null, {
            default: q(() => [
              l(h) ? (w(), Y(l(Al), { key: 0 })) : (w(), Y(l(Qh), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(gi), T]
      ]) : H("v-if", !0),
      $.controls ? Ye((w(), A("span", {
        key: 1,
        role: "button",
        "aria-label": l(a)("el.inputNumber.increase"),
        class: N([l(s).e("increase"), l(s).is("disabled", l(d))]),
        onKeydown: xt(_, ["enter"])
      }, [
        se($.$slots, "increase-icon", {}, () => [
          F(l(He), null, {
            default: q(() => [
              l(h) ? (w(), Y(l(Fh), { key: 0 })) : (w(), Y(l(og), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(gi), _]
      ]) : H("v-if", !0),
      F(l($r), {
        id: $.id,
        ref_key: "input",
        ref: r,
        type: "number",
        step: $.step,
        "model-value": l(g),
        placeholder: $.placeholder,
        readonly: $.readonly,
        disabled: l(f),
        size: l(m),
        max: $.max,
        min: $.min,
        name: $.name,
        "aria-label": $.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          xt($e(_, ["prevent"]), ["up"]),
          xt($e(T, ["prevent"]), ["down"])
        ],
        onBlur: L,
        onFocus: k,
        onInput: x,
        onChange: Z
      }, xc({
        _: 2
      }, [
        $.$slots.prefix ? {
          name: "prefix",
          fn: q(() => [
            se($.$slots, "prefix")
          ])
        } : void 0,
        $.$slots.suffix ? {
          name: "suffix",
          fn: q(() => [
            se($.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Ey = /* @__PURE__ */ _e(Py, [["__file", "input-number.vue"]]);
const Ty = ot(Ey);
function Iy() {
  const e = Xt(), t = M(0), n = 11, o = b(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return _t(e, () => {
    var s, r;
    t.value = (r = (s = e.value) == null ? void 0 : s.getBoundingClientRect().width) != null ? r : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const fu = Symbol("ElSelectGroup"), Ta = Symbol("ElSelect");
function $y(e, t) {
  const n = ye(Ta), o = ye(fu, { disabled: !1 }), a = b(() => d(qt(n.props.modelValue), e.value)), s = b(() => {
    var m;
    if (n.props.multiple) {
      const f = qt((m = n.props.modelValue) != null ? m : []);
      return !a.value && f.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), r = b(() => e.label || (qe(e.value) ? "" : e.value)), i = b(() => e.value || e.label || ""), u = b(() => e.disabled || t.groupDisabled || s.value), c = Ue(), d = (m = [], f) => {
    if (qe(e.value)) {
      const g = n.props.valueKey;
      return m && m.some((S) => Lc(Yt(S, g)) === Yt(f, g));
    } else
      return m && m.includes(f);
  }, p = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, h = (m) => {
    const f = new RegExp(fy(m), "i");
    t.visible = f.test(r.value) || e.created;
  };
  return ie(() => r.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ie(() => e.value, (m, f) => {
    const { remote: g, valueKey: S } = n.props;
    if ((g ? m !== f : !ro(m, f)) && (n.onOptionDestroy(f, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !g) {
      if (S && qe(m) && qe(f) && m[S] === f[S])
        return;
      n.setSelected();
    }
  }), ie(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: r,
    currentValue: i,
    itemSelected: a,
    isDisabled: u,
    hoverItem: p,
    updateOption: h
  };
}
const Oy = G({
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
    const t = Pe("select"), n = ka(), o = b(() => [
      t.be("dropdown", "item"),
      t.is("disabled", l(i)),
      t.is("selected", l(r)),
      t.is("hovering", l(h))
    ]), a = Bt({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: s,
      itemSelected: r,
      isDisabled: i,
      select: u,
      hoverItem: c,
      updateOption: d
    } = $y(e, a), { visible: p, hover: h } = In(a), m = Ue().proxy;
    u.onOptionCreate(m), Et(() => {
      const g = m.value, { selected: S } = u.states, v = S.some((O) => O.value === m.value);
      Se(() => {
        u.states.cachedOptions.get(g) === m && !v && u.states.cachedOptions.delete(g);
      }), u.onOptionDestroy(g, m);
    });
    function f() {
      i.value || u.handleOptionSelect(m);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: s,
      itemSelected: r,
      isDisabled: i,
      select: u,
      hoverItem: c,
      updateOption: d,
      visible: p,
      hover: h,
      selectOptionClick: f,
      states: a
    };
  }
});
function xy(e, t, n, o, a, s) {
  return Ye((w(), A("li", {
    id: e.id,
    class: N(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: $e(e.selectOptionClick, ["stop"])
  }, [
    se(e.$slots, "default", {}, () => [
      y("span", null, K(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Ft, e.visible]
  ]);
}
var Ur = /* @__PURE__ */ _e(Oy, [["render", xy], ["__file", "option.vue"]]);
const Ly = G({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ye(Ta), t = Pe("select"), n = b(() => e.props.popperClass), o = b(() => e.props.multiple), a = b(() => e.props.fitInputWidth), s = M("");
    function r() {
      var i;
      s.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return Ie(() => {
      r(), _t(e.selectRef, r);
    }), {
      ns: t,
      minWidth: s,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: a
    };
  }
});
function Ay(e, t, n, o, a, s) {
  return w(), A("div", {
    class: N([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: we({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (w(), A("div", {
      key: 0,
      class: N(e.ns.be("dropdown", "header"))
    }, [
      se(e.$slots, "header")
    ], 2)) : H("v-if", !0),
    se(e.$slots, "default"),
    e.$slots.footer ? (w(), A("div", {
      key: 1,
      class: N(e.ns.be("dropdown", "footer"))
    }, [
      se(e.$slots, "footer")
    ], 2)) : H("v-if", !0)
  ], 6);
}
var Ry = /* @__PURE__ */ _e(Ly, [["render", Ay], ["__file", "select-dropdown.vue"]]);
const My = (e, t) => {
  const { t: n } = wa(), o = ka(), a = Pe("select"), s = Pe("input"), r = Bt({
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
  }), i = M(null), u = M(null), c = M(null), d = M(null), p = M(null), h = M(null), m = M(null), f = M(null), g = M(null), S = M(null), v = M(null), {
    isComposing: O,
    handleCompositionStart: _,
    handleCompositionUpdate: T,
    handleCompositionEnd: P
  } = Wl({
    afterComposition: (C) => jt(C)
  }), { wrapperRef: I, isFocused: x, handleBlur: Z } = Hl(p, {
    beforeFocus() {
      return z.value;
    },
    afterFocus() {
      e.automaticDropdown && !U.value && (U.value = !0, r.menuVisibleOnFocus = !0);
    },
    beforeBlur(C) {
      var j, ue;
      return ((j = c.value) == null ? void 0 : j.isFocusInsideContent(C)) || ((ue = d.value) == null ? void 0 : ue.isFocusInsideContent(C));
    },
    afterBlur() {
      U.value = !1, r.menuVisibleOnFocus = !1;
    }
  }), U = M(!1), Q = M(), { form: k, formItem: L } = Ca(), { inputId: W } = Ir(e, {
    formItemContext: L
  }), { valueOnClear: re, isEmptyValue: $ } = $h(e), z = b(() => e.disabled || k?.disabled), R = b(() => We(e.modelValue) ? e.modelValue.length > 0 : !$(e.modelValue)), ee = b(() => {
    var C;
    return (C = k?.statusIcon) != null ? C : !1;
  }), J = b(() => e.clearable && !z.value && r.inputHovering && R.value), le = b(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), ge = b(() => a.is("reverse", le.value && U.value)), be = b(() => L?.validateState || ""), X = b(() => zl[be.value]), de = b(() => e.remote ? 300 : 0), ve = b(() => e.remote && !r.inputValue && r.options.size === 0), Ee = b(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && r.inputValue && r.options.size > 0 && ae.value === 0 ? e.noMatchText || n("el.select.noMatch") : r.options.size === 0 ? e.noDataText || n("el.select.noData") : null), ae = b(() => me.value.filter((C) => C.visible).length), me = b(() => {
    const C = Array.from(r.options.values()), j = [];
    return r.optionValues.forEach((ue) => {
      const Me = C.findIndex((Qe) => Qe.value === ue);
      Me > -1 && j.push(C[Me]);
    }), j.length >= C.length ? j : C;
  }), Fe = b(() => Array.from(r.cachedOptions.values())), V = b(() => {
    const C = me.value.filter((j) => !j.created).some((j) => j.currentLabel === r.inputValue);
    return e.filterable && e.allowCreate && r.inputValue !== "" && !C;
  }), oe = () => {
    e.filterable && xe(e.filterMethod) || e.filterable && e.remote && xe(e.remoteMethod) || me.value.forEach((C) => {
      var j;
      (j = C.updateOption) == null || j.call(C, r.inputValue);
    });
  }, ne = ko(), Te = b(() => ["small"].includes(ne.value) ? "small" : "default"), Ve = b({
    get() {
      return U.value && !ve.value;
    },
    set(C) {
      U.value = C;
    }
  }), Le = b(() => {
    if (e.multiple && !pt(e.modelValue))
      return qt(e.modelValue).length === 0 && !r.inputValue;
    const C = We(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || pt(C) ? !r.inputValue : !0;
  }), ke = b(() => {
    var C;
    const j = (C = e.placeholder) != null ? C : n("el.select.placeholder");
    return e.multiple || !R.value ? j : r.selectedLabel;
  }), ce = b(() => Qa ? null : "mouseenter");
  ie(() => e.modelValue, (C, j) => {
    e.multiple && e.filterable && !e.reserveKeyword && (r.inputValue = "", Ke("")), Ge(), !ro(C, j) && e.validateEvent && L?.validate("change").catch((ue) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ie(() => U.value, (C) => {
    C ? Ke(r.inputValue) : (r.inputValue = "", r.previousQuery = null, r.isBeforeHide = !0), t("visible-change", C);
  }), ie(() => r.options.entries(), () => {
    Re && (Ge(), e.defaultFirstOption && (e.filterable || e.remote) && ae.value && mn());
  }, {
    flush: "post"
  }), ie([() => r.hoveringIndex, me], ([C]) => {
    pe(C) && C > -1 ? Q.value = me.value[C] || {} : Q.value = {}, me.value.forEach((j) => {
      j.hover = Q.value === j;
    });
  }), Yi(() => {
    r.isBeforeHide || oe();
  });
  const Ke = (C) => {
    r.previousQuery === C || O.value || (r.previousQuery = C, e.filterable && xe(e.filterMethod) ? e.filterMethod(C) : e.filterable && e.remote && xe(e.remoteMethod) && e.remoteMethod(C), e.defaultFirstOption && (e.filterable || e.remote) && ae.value ? Se(mn) : Se(hn));
  }, mn = () => {
    const C = me.value.filter((Qe) => Qe.visible && !Qe.disabled && !Qe.states.groupDisabled), j = C.find((Qe) => Qe.created), ue = C[0], Me = me.value.map((Qe) => Qe.value);
    r.hoveringIndex = es(Me, j || ue);
  }, Ge = () => {
    if (e.multiple)
      r.selectedLabel = "";
    else {
      const j = We(e.modelValue) ? e.modelValue[0] : e.modelValue, ue = wt(j);
      r.selectedLabel = ue.currentLabel, r.selected = [ue];
      return;
    }
    const C = [];
    pt(e.modelValue) || qt(e.modelValue).forEach((j) => {
      C.push(wt(j));
    }), r.selected = C;
  }, wt = (C) => {
    let j;
    const ue = ad(C);
    for (let gn = r.cachedOptions.size - 1; gn >= 0; gn--) {
      const Ut = Fe.value[gn];
      if (ue ? Yt(Ut.value, e.valueKey) === Yt(C, e.valueKey) : Ut.value === C) {
        j = {
          value: C,
          currentLabel: Ut.currentLabel,
          get isDisabled() {
            return Ut.isDisabled;
          }
        };
        break;
      }
    }
    if (j)
      return j;
    const Me = ue ? C.label : C ?? "";
    return {
      value: C,
      currentLabel: Me
    };
  }, hn = () => {
    r.hoveringIndex = me.value.findIndex((C) => r.selected.some((j) => Oo(j) === Oo(C)));
  }, nn = () => {
    r.selectionWidth = u.value.getBoundingClientRect().width;
  }, D = () => {
    r.collapseItemWidth = S.value.getBoundingClientRect().width;
  }, fe = () => {
    var C, j;
    (j = (C = c.value) == null ? void 0 : C.updatePopper) == null || j.call(C);
  }, at = () => {
    var C, j;
    (j = (C = d.value) == null ? void 0 : C.updatePopper) == null || j.call(C);
  }, Wt = () => {
    r.inputValue.length > 0 && !U.value && (U.value = !0), Ke(r.inputValue);
  }, jt = (C) => {
    if (r.inputValue = C.target.value, e.remote)
      Xr();
    else
      return Wt();
  }, Xr = Ja(() => {
    Wt();
  }, de.value), Wn = (C) => {
    ro(e.modelValue, C) || t(en, C);
  }, Yu = (C) => Wm(C, (j) => {
    const ue = r.cachedOptions.get(j);
    return ue && !ue.disabled && !ue.states.groupDisabled;
  }), Xu = (C) => {
    if (e.multiple && C.code !== Ne.delete && C.target.value.length <= 0) {
      const j = qt(e.modelValue).slice(), ue = Yu(j);
      if (ue < 0)
        return;
      const Me = j[ue];
      j.splice(ue, 1), t(Ae, j), Wn(j), t("remove-tag", Me);
    }
  }, Ju = (C, j) => {
    const ue = r.selected.indexOf(j);
    if (ue > -1 && !z.value) {
      const Me = qt(e.modelValue).slice();
      Me.splice(ue, 1), t(Ae, Me), Wn(Me), t("remove-tag", j.value);
    }
    C.stopPropagation(), $o();
  }, Jr = (C) => {
    C.stopPropagation();
    const j = e.multiple ? [] : re.value;
    if (e.multiple)
      for (const ue of r.selected)
        ue.isDisabled && j.push(ue.value);
    t(Ae, j), Wn(j), r.hoveringIndex = -1, U.value = !1, t("clear"), $o();
  }, Qr = (C) => {
    var j;
    if (e.multiple) {
      const ue = qt((j = e.modelValue) != null ? j : []).slice(), Me = es(ue, C);
      Me > -1 ? ue.splice(Me, 1) : (e.multipleLimit <= 0 || ue.length < e.multipleLimit) && ue.push(C.value), t(Ae, ue), Wn(ue), C.created && Ke(""), e.filterable && !e.reserveKeyword && (r.inputValue = "");
    } else
      t(Ae, C.value), Wn(C.value), U.value = !1;
    $o(), !U.value && Se(() => {
      Io(C);
    });
  }, es = (C = [], j) => pt(j) ? -1 : qe(j.value) ? C.findIndex((ue) => ro(Yt(ue, e.valueKey), Oo(j))) : C.indexOf(j.value), Io = (C) => {
    var j, ue, Me, Qe, gn;
    const Ut = We(C) ? C[0] : C;
    let xo = null;
    if (Ut?.value) {
      const jn = me.value.filter((hc) => hc.value === Ut.value);
      jn.length > 0 && (xo = jn[0].$el);
    }
    if (c.value && xo) {
      const jn = (Qe = (Me = (ue = (j = c.value) == null ? void 0 : j.popperRef) == null ? void 0 : ue.contentRef) == null ? void 0 : Me.querySelector) == null ? void 0 : Qe.call(Me, `.${a.be("dropdown", "wrap")}`);
      jn && xh(jn, xo);
    }
    (gn = v.value) == null || gn.handleScroll();
  }, Qu = (C) => {
    r.options.set(C.value, C), r.cachedOptions.set(C.value, C);
  }, ec = (C, j) => {
    r.options.get(C) === j && r.options.delete(C);
  }, tc = b(() => {
    var C, j;
    return (j = (C = c.value) == null ? void 0 : C.popperRef) == null ? void 0 : j.contentRef;
  }), nc = () => {
    r.isBeforeHide = !1, Se(() => {
      var C;
      (C = v.value) == null || C.update(), Io(r.selected);
    });
  }, $o = () => {
    var C;
    (C = p.value) == null || C.focus();
  }, oc = () => {
    var C;
    if (U.value) {
      U.value = !1, Se(() => {
        var j;
        return (j = p.value) == null ? void 0 : j.blur();
      });
      return;
    }
    (C = p.value) == null || C.blur();
  }, ac = (C) => {
    Jr(C);
  }, rc = (C) => {
    if (U.value = !1, x.value) {
      const j = new FocusEvent("focus", C);
      Se(() => Z(j));
    }
  }, sc = () => {
    r.inputValue.length > 0 ? r.inputValue = "" : U.value = !1;
  }, ts = () => {
    z.value || (Qa && (r.inputHovering = !0), r.menuVisibleOnFocus ? r.menuVisibleOnFocus = !1 : U.value = !U.value);
  }, ic = () => {
    if (!U.value)
      ts();
    else {
      const C = me.value[r.hoveringIndex];
      C && !C.isDisabled && Qr(C);
    }
  }, Oo = (C) => qe(C.value) ? Yt(C.value, e.valueKey) : C.value, lc = b(() => me.value.filter((C) => C.visible).every((C) => C.isDisabled)), uc = b(() => e.multiple ? e.collapseTags ? r.selected.slice(0, e.maxCollapseTags) : r.selected : []), cc = b(() => e.multiple ? e.collapseTags ? r.selected.slice(e.maxCollapseTags) : [] : []), ns = (C) => {
    if (!U.value) {
      U.value = !0;
      return;
    }
    if (!(r.options.size === 0 || ae.value === 0 || O.value) && !lc.value) {
      C === "next" ? (r.hoveringIndex++, r.hoveringIndex === r.options.size && (r.hoveringIndex = 0)) : C === "prev" && (r.hoveringIndex--, r.hoveringIndex < 0 && (r.hoveringIndex = r.options.size - 1));
      const j = me.value[r.hoveringIndex];
      (j.isDisabled || !j.visible) && ns(C), Se(() => Io(Q.value));
    }
  }, dc = () => {
    if (!u.value)
      return 0;
    const C = window.getComputedStyle(u.value);
    return Number.parseFloat(C.gap || "6px");
  }, fc = b(() => {
    const C = dc();
    return { maxWidth: `${S.value && e.maxCollapseTags === 1 ? r.selectionWidth - r.collapseItemWidth - C : r.selectionWidth}px` };
  }), pc = b(() => ({ maxWidth: `${r.selectionWidth}px` })), mc = (C) => {
    t("popup-scroll", C);
  };
  return _t(u, nn), _t(f, fe), _t(I, fe), _t(g, at), _t(S, D), Ie(() => {
    Ge();
  }), {
    inputId: W,
    contentId: o,
    nsSelect: a,
    nsInput: s,
    states: r,
    isFocused: x,
    expanded: U,
    optionsArray: me,
    hoverOption: Q,
    selectSize: ne,
    filteredOptionsCount: ae,
    updateTooltip: fe,
    updateTagTooltip: at,
    debouncedOnInputChange: Xr,
    onInput: jt,
    deletePrevTag: Xu,
    deleteTag: Ju,
    deleteSelected: Jr,
    handleOptionSelect: Qr,
    scrollToOption: Io,
    hasModelValue: R,
    shouldShowPlaceholder: Le,
    currentPlaceholder: ke,
    mouseEnterEventName: ce,
    needStatusIcon: ee,
    showClose: J,
    iconComponent: le,
    iconReverse: ge,
    validateState: be,
    validateIcon: X,
    showNewOption: V,
    updateOptions: oe,
    collapseTagSize: Te,
    setSelected: Ge,
    selectDisabled: z,
    emptyText: Ee,
    handleCompositionStart: _,
    handleCompositionUpdate: T,
    handleCompositionEnd: P,
    onOptionCreate: Qu,
    onOptionDestroy: ec,
    handleMenuEnter: nc,
    focus: $o,
    blur: oc,
    handleClearClick: ac,
    handleClickOutside: rc,
    handleEsc: sc,
    toggleMenu: ts,
    selectOption: ic,
    getValueKey: Oo,
    navigateOptions: ns,
    dropdownMenuVisible: Ve,
    showTagList: uc,
    collapseTagList: cc,
    popupScroll: mc,
    tagStyle: fc,
    collapseTagStyle: pc,
    popperRef: tc,
    inputRef: p,
    tooltipRef: c,
    tagTooltipRef: d,
    prefixRef: h,
    suffixRef: m,
    selectRef: i,
    wrapperRef: I,
    selectionRef: u,
    scrollbarRef: v,
    menuRef: f,
    tagMenuRef: g,
    collapseItemRef: S
  };
};
var zy = G({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ye(Ta);
    let o = [];
    return () => {
      var a, s;
      const r = (a = t.default) == null ? void 0 : a.call(t), i = [];
      function u(c) {
        We(c) && c.forEach((d) => {
          var p, h, m, f;
          const g = (p = d?.type || {}) == null ? void 0 : p.name;
          g === "ElOptionGroup" ? u(!Be(d.children) && !We(d.children) && xe((h = d.children) == null ? void 0 : h.default) ? (m = d.children) == null ? void 0 : m.default() : d.children) : g === "ElOption" ? i.push((f = d.props) == null ? void 0 : f.value) : We(d.children) && u(d.children);
        });
      }
      return r.length && u((s = r[0]) == null ? void 0 : s.children), ro(i, o) || (o = i, n && (n.states.optionValues = i)), r;
    };
  }
});
const Ny = he({
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
  size: On,
  effect: {
    type: te(String),
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
    type: te(Object),
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
  teleported: Wr.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: xn,
    default: Sa
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: xn,
    default: Al
  },
  tagType: { ...or.type, default: "info" },
  tagEffect: { ...or.effect, default: "light" },
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
    type: te(String),
    values: Dn,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: te(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...Il,
  ...pn(["ariaLabel"])
}), vi = "ElSelect", Fy = G({
  name: vi,
  componentName: vi,
  components: {
    ElSelectMenu: Ry,
    ElOption: Ur,
    ElOptions: zy,
    ElTag: vy,
    ElScrollbar: Dg,
    ElTooltip: jr,
    ElIcon: He
  },
  directives: { ClickOutside: yy },
  props: Ny,
  emits: [
    Ae,
    en,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = b(() => {
      const { modelValue: u, multiple: c } = e, d = c ? [] : void 0;
      return We(u) ? c ? u : d : c ? d : u;
    }), o = Bt({
      ...In(e),
      modelValue: n
    }), a = My(o, t), { calculatorRef: s, inputStyle: r } = Iy();
    vt(Ta, Bt({
      props: o,
      states: a.states,
      optionsArray: a.optionsArray,
      handleOptionSelect: a.handleOptionSelect,
      onOptionCreate: a.onOptionCreate,
      onOptionDestroy: a.onOptionDestroy,
      selectRef: a.selectRef,
      setSelected: a.setSelected
    }));
    const i = b(() => e.multiple ? a.states.selected.map((u) => u.currentLabel) : a.states.selectedLabel);
    return {
      ...a,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: s,
      inputStyle: r
    };
  }
});
function By(e, t, n, o, a, s) {
  const r = on("el-tag"), i = on("el-tooltip"), u = on("el-icon"), c = on("el-option"), d = on("el-options"), p = on("el-scrollbar"), h = on("el-select-menu"), m = Ac("click-outside");
  return Ye((w(), A("div", {
    ref: "selectRef",
    class: N([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Rc(e.mouseEnterEventName)]: (f) => e.states.inputHovering = !0,
    onMouseleave: (f) => e.states.inputHovering = !1
  }, [
    F(i, {
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
      onHide: (f) => e.states.isBeforeHide = !1
    }, {
      default: q(() => {
        var f;
        return [
          y("div", {
            ref: "wrapperRef",
            class: N([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: $e(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (w(), A("div", {
              key: 0,
              ref: "prefixRef",
              class: N(e.nsSelect.e("prefix"))
            }, [
              se(e.$slots, "prefix")
            ], 2)) : H("v-if", !0),
            y("div", {
              ref: "selectionRef",
              class: N([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? se(e.$slots, "tag", { key: 0 }, () => [
                (w(!0), A(Oe, null, it(e.showTagList, (g) => (w(), A("div", {
                  key: e.getValueKey(g),
                  class: N(e.nsSelect.e("selected-item"))
                }, [
                  F(r, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: we(e.tagStyle),
                    onClose: (S) => e.deleteTag(S, g)
                  }, {
                    default: q(() => [
                      y("span", {
                        class: N(e.nsSelect.e("tags-text"))
                      }, [
                        se(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          sn(K(g.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (w(), Y(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: q(() => [
                    y("div", {
                      ref: "collapseItemRef",
                      class: N(e.nsSelect.e("selected-item"))
                    }, [
                      F(r, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: we(e.collapseTagStyle)
                      }, {
                        default: q(() => [
                          y("span", {
                            class: N(e.nsSelect.e("tags-text"))
                          }, " + " + K(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: q(() => [
                    y("div", {
                      ref: "tagMenuRef",
                      class: N(e.nsSelect.e("selection"))
                    }, [
                      (w(!0), A(Oe, null, it(e.collapseTagList, (g) => (w(), A("div", {
                        key: e.getValueKey(g),
                        class: N(e.nsSelect.e("selected-item"))
                      }, [
                        F(r, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !g.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (S) => e.deleteTag(S, g)
                        }, {
                          default: q(() => [
                            y("span", {
                              class: N(e.nsSelect.e("tags-text"))
                            }, [
                              se(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                sn(K(g.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : H("v-if", !0)
              ]) : H("v-if", !0),
              y("div", {
                class: N([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                Ye(y("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: N([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: we(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((f = e.hoverOption) == null ? void 0 : f.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    xt($e((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    xt($e((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    xt($e(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    xt($e(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    xt($e(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: $e(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Mc, e.states.inputValue]
                ]),
                e.filterable ? (w(), A("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: N(e.nsSelect.e("input-calculator")),
                  textContent: K(e.states.inputValue)
                }, null, 10, ["textContent"])) : H("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (w(), A("div", {
                key: 1,
                class: N([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? se(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  y("span", null, K(e.currentPlaceholder), 1)
                ]) : (w(), A("span", { key: 1 }, K(e.currentPlaceholder), 1))
              ], 2)) : H("v-if", !0)
            ], 2),
            y("div", {
              ref: "suffixRef",
              class: N(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (w(), Y(u, {
                key: 0,
                class: N([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: q(() => [
                  (w(), Y(st(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0),
              e.showClose && e.clearIcon ? (w(), Y(u, {
                key: 1,
                class: N([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: q(() => [
                  (w(), Y(st(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : H("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (w(), Y(u, {
                key: 2,
                class: N([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: q(() => [
                  (w(), Y(st(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: q(() => [
        F(h, { ref: "menuRef" }, {
          default: q(() => [
            e.$slots.header ? (w(), A("div", {
              key: 0,
              class: N(e.nsSelect.be("dropdown", "header")),
              onClick: $e(() => {
              }, ["stop"])
            }, [
              se(e.$slots, "header")
            ], 10, ["onClick"])) : H("v-if", !0),
            Ye(F(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: N([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: q(() => [
                e.showNewOption ? (w(), Y(c, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : H("v-if", !0),
                F(d, null, {
                  default: q(() => [
                    se(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Ft, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (w(), A("div", {
              key: 1,
              class: N(e.nsSelect.be("dropdown", "loading"))
            }, [
              se(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (w(), A("div", {
              key: 2,
              class: N(e.nsSelect.be("dropdown", "empty"))
            }, [
              se(e.$slots, "empty", {}, () => [
                y("span", null, K(e.emptyText), 1)
              ])
            ], 2)) : H("v-if", !0),
            e.$slots.footer ? (w(), A("div", {
              key: 3,
              class: N(e.nsSelect.be("dropdown", "footer")),
              onClick: $e(() => {
              }, ["stop"])
            }, [
              se(e.$slots, "footer")
            ], 10, ["onClick"])) : H("v-if", !0)
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
var Vy = /* @__PURE__ */ _e(Fy, [["render", By], ["__file", "select.vue"]]);
const Dy = G({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Pe("select"), n = M(null), o = Ue(), a = M([]);
    vt(fu, Bt({
      ...In(e)
    }));
    const s = b(() => a.value.some((c) => c.visible === !0)), r = (c) => {
      var d, p;
      return ((d = c.type) == null ? void 0 : d.name) === "ElOption" && !!((p = c.component) != null && p.proxy);
    }, i = (c) => {
      const d = qt(c), p = [];
      return d.forEach((h) => {
        var m, f;
        r(h) ? p.push(h.component.proxy) : (m = h.children) != null && m.length ? p.push(...i(h.children)) : (f = h.component) != null && f.subTree && p.push(...i(h.component.subTree));
      }), p;
    }, u = () => {
      a.value = i(o.subTree);
    };
    return Ie(() => {
      u();
    }), mh(n, u, {
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
function Hy(e, t, n, o, a, s) {
  return Ye((w(), A("ul", {
    ref: "groupRef",
    class: N(e.ns.be("group", "wrap"))
  }, [
    y("li", {
      class: N(e.ns.be("group", "title"))
    }, K(e.label), 3),
    y("li", null, [
      y("ul", {
        class: N(e.ns.b("group"))
      }, [
        se(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Ft, e.visible]
  ]);
}
var pu = /* @__PURE__ */ _e(Dy, [["render", Hy], ["__file", "option-group.vue"]]);
const Kr = ot(Vy, {
  Option: Ur,
  OptionGroup: pu
}), Gr = Er(Ur);
Er(pu);
const Wy = he({
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
    type: te(String),
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
    type: te([
      String,
      Array,
      Function
    ]),
    default: ""
  },
  striped: Boolean,
  stripedFlow: Boolean,
  format: {
    type: te(Function),
    default: (e) => `${e}%`
  }
}), jy = G({
  name: "ElProgress"
}), Uy = /* @__PURE__ */ G({
  ...jy,
  props: Wy,
  setup(e) {
    const t = e, n = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, o = Pe("progress"), a = b(() => {
      const _ = {
        width: `${t.percentage}%`,
        animationDuration: `${t.duration}s`
      }, T = O(t.percentage);
      return T.includes("gradient") ? _.background = T : _.backgroundColor = T, _;
    }), s = b(() => (t.strokeWidth / t.width * 100).toFixed(1)), r = b(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(`${50 - Number.parseFloat(s.value) / 2}`, 10) : 0), i = b(() => {
      const _ = r.value, T = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${T ? "" : "-"}${_}
          a ${_} ${_} 0 1 1 0 ${T ? "-" : ""}${_ * 2}
          a ${_} ${_} 0 1 1 0 ${T ? "" : "-"}${_ * 2}
          `;
    }), u = b(() => 2 * Math.PI * r.value), c = b(() => t.type === "dashboard" ? 0.75 : 1), d = b(() => `${-1 * u.value * (1 - c.value) / 2}px`), p = b(() => ({
      strokeDasharray: `${u.value * c.value}px, ${u.value}px`,
      strokeDashoffset: d.value
    })), h = b(() => ({
      strokeDasharray: `${u.value * c.value * (t.percentage / 100)}px, ${u.value}px`,
      strokeDashoffset: d.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), m = b(() => {
      let _;
      return t.color ? _ = O(t.percentage) : _ = n[t.status] || n.default, _;
    }), f = b(() => t.status === "warning" ? Ml : t.type === "line" ? t.status === "success" ? Rl : Sa : t.status === "success" ? Vh : vo), g = b(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), S = b(() => t.format(t.percentage));
    function v(_) {
      const T = 100 / _.length;
      return _.map((I, x) => Be(I) ? {
        color: I,
        percentage: (x + 1) * T
      } : I).sort((I, x) => I.percentage - x.percentage);
    }
    const O = (_) => {
      var T;
      const { color: P } = t;
      if (xe(P))
        return P(_);
      if (Be(P))
        return P;
      {
        const I = v(P);
        for (const x of I)
          if (x.percentage > _)
            return x.color;
        return (T = I[I.length - 1]) == null ? void 0 : T.color;
      }
    };
    return (_, T) => (w(), A("div", {
      class: N([
        l(o).b(),
        l(o).m(_.type),
        l(o).is(_.status),
        {
          [l(o).m("without-text")]: !_.showText,
          [l(o).m("text-inside")]: _.textInside
        }
      ]),
      role: "progressbar",
      "aria-valuenow": _.percentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, [
      _.type === "line" ? (w(), A("div", {
        key: 0,
        class: N(l(o).b("bar"))
      }, [
        y("div", {
          class: N(l(o).be("bar", "outer")),
          style: we({ height: `${_.strokeWidth}px` })
        }, [
          y("div", {
            class: N([
              l(o).be("bar", "inner"),
              { [l(o).bem("bar", "inner", "indeterminate")]: _.indeterminate },
              { [l(o).bem("bar", "inner", "striped")]: _.striped },
              { [l(o).bem("bar", "inner", "striped-flow")]: _.stripedFlow }
            ]),
            style: we(l(a))
          }, [
            (_.showText || _.$slots.default) && _.textInside ? (w(), A("div", {
              key: 0,
              class: N(l(o).be("bar", "innerText"))
            }, [
              se(_.$slots, "default", { percentage: _.percentage }, () => [
                y("span", null, K(l(S)), 1)
              ])
            ], 2)) : H("v-if", !0)
          ], 6)
        ], 6)
      ], 2)) : (w(), A("div", {
        key: 1,
        class: N(l(o).b("circle")),
        style: we({ height: `${_.width}px`, width: `${_.width}px` })
      }, [
        (w(), A("svg", { viewBox: "0 0 100 100" }, [
          y("path", {
            class: N(l(o).be("circle", "track")),
            d: l(i),
            stroke: `var(${l(o).cssVarName("fill-color-light")}, #e5e9f2)`,
            "stroke-linecap": _.strokeLinecap,
            "stroke-width": l(s),
            fill: "none",
            style: we(l(p))
          }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]),
          y("path", {
            class: N(l(o).be("circle", "path")),
            d: l(i),
            stroke: l(m),
            fill: "none",
            opacity: _.percentage ? 1 : 0,
            "stroke-linecap": _.strokeLinecap,
            "stroke-width": l(s),
            style: we(l(h))
          }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])
        ]))
      ], 6)),
      (_.showText || _.$slots.default) && !_.textInside ? (w(), A("div", {
        key: 2,
        class: N(l(o).e("text")),
        style: we({ fontSize: `${l(g)}px` })
      }, [
        se(_.$slots, "default", { percentage: _.percentage }, () => [
          _.status ? (w(), Y(l(He), { key: 1 }, {
            default: q(() => [
              (w(), Y(st(l(f))))
            ]),
            _: 1
          })) : (w(), A("span", { key: 0 }, K(l(S)), 1))
        ])
      ], 6)) : H("v-if", !0)
    ], 10, ["aria-valuenow"]));
  }
});
var Ky = /* @__PURE__ */ _e(Uy, [["__file", "progress.vue"]]);
const Gy = ot(Ky), Zy = he({
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
    type: te([Number, Object])
  }
}), qy = he({
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
}), Yy = G({
  name: "ElSkeletonItem"
}), Xy = /* @__PURE__ */ G({
  ...Yy,
  props: qy,
  setup(e) {
    const t = Pe("skeleton");
    return (n, o) => (w(), A("div", {
      class: N([l(t).e("item"), l(t).e(n.variant)])
    }, [
      n.variant === "image" ? (w(), Y(l(tg), { key: 0 })) : H("v-if", !0)
    ], 2));
  }
});
var aa = /* @__PURE__ */ _e(Xy, [["__file", "skeleton-item.vue"]]);
const Jy = (e, t = 0) => {
  if (t === 0)
    return e;
  const n = qe(t) && !!t.initVal, o = M(n);
  let a = null;
  const s = (i) => {
    if (pt(i)) {
      o.value = e.value;
      return;
    }
    a && clearTimeout(a), a = setTimeout(() => {
      o.value = e.value;
    }, i);
  }, r = (i) => {
    i === "leading" ? pe(t) ? s(t) : s(t.leading) : qe(t) ? s(t.trailing) : o.value = !1;
  };
  return Ie(() => r("leading")), ie(() => e.value, (i) => {
    r(i ? "leading" : "trailing");
  }), o;
}, Qy = G({
  name: "ElSkeleton"
}), eb = /* @__PURE__ */ G({
  ...Qy,
  props: Zy,
  setup(e, { expose: t }) {
    const n = e, o = Pe("skeleton"), a = Jy(St(n, "loading"), n.throttle);
    return t({
      uiLoading: a
    }), (s, r) => l(a) ? (w(), A("div", Jt({
      key: 0,
      class: [l(o).b(), l(o).is("animated", s.animated)]
    }, s.$attrs), [
      (w(!0), A(Oe, null, it(s.count, (i) => (w(), A(Oe, { key: i }, [
        l(a) ? se(s.$slots, "template", { key: i }, () => [
          F(aa, {
            class: N(l(o).is("first")),
            variant: "p"
          }, null, 8, ["class"]),
          (w(!0), A(Oe, null, it(s.rows, (u) => (w(), Y(aa, {
            key: u,
            class: N([
              l(o).e("paragraph"),
              l(o).is("last", u === s.rows && s.rows > 1)
            ]),
            variant: "p"
          }, null, 8, ["class"]))), 128))
        ]) : H("v-if", !0)
      ], 64))), 128))
    ], 16)) : se(s.$slots, "default", zc(Jt({ key: 1 }, s.$attrs)));
  }
});
var tb = /* @__PURE__ */ _e(eb, [["__file", "skeleton.vue"]]);
const nb = ot(tb, {
  SkeletonItem: aa
});
Er(aa);
const mu = Symbol("sliderContextKey"), ob = he({
  modelValue: {
    type: te([Number, Array]),
    default: 0
  },
  id: {
    type: String,
    default: void 0
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  },
  showInput: Boolean,
  showInputControls: {
    type: Boolean,
    default: !0
  },
  size: On,
  inputSize: On,
  showStops: Boolean,
  showTooltip: {
    type: Boolean,
    default: !0
  },
  formatTooltip: {
    type: te(Function),
    default: void 0
  },
  disabled: Boolean,
  range: Boolean,
  vertical: Boolean,
  height: String,
  debounce: {
    type: Number,
    default: 300
  },
  rangeStartLabel: {
    type: String,
    default: void 0
  },
  rangeEndLabel: {
    type: String,
    default: void 0
  },
  formatValueText: {
    type: te(Function),
    default: void 0
  },
  tooltipClass: {
    type: String,
    default: void 0
  },
  placement: {
    type: String,
    values: Dn,
    default: "top"
  },
  marks: {
    type: te(Object)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  persistent: {
    type: Boolean,
    default: !0
  },
  ...pn(["ariaLabel"])
}), za = (e) => pe(e) || We(e) && e.every(pe), ab = {
  [Ae]: za,
  [Nt]: za,
  [en]: za
}, rb = he({
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: Boolean,
  tooltipClass: String,
  placement: {
    type: String,
    values: Dn,
    default: "top"
  }
}), sb = {
  [Ae]: (e) => pe(e)
}, ib = (e, t, n) => {
  const o = M(), a = M(!1), s = b(() => t.value instanceof Function), r = b(() => s.value && t.value(e.modelValue) || e.modelValue), i = Ja(() => {
    n.value && (a.value = !0);
  }, 50), u = Ja(() => {
    n.value && (a.value = !1);
  }, 50);
  return {
    tooltip: o,
    tooltipVisible: a,
    formatValue: r,
    displayTooltip: i,
    hideTooltip: u
  };
}, lb = (e, t, n) => {
  const {
    disabled: o,
    min: a,
    max: s,
    step: r,
    showTooltip: i,
    persistent: u,
    precision: c,
    sliderSize: d,
    formatTooltip: p,
    emitChange: h,
    resetSize: m,
    updateDragging: f
  } = ye(mu), { tooltip: g, tooltipVisible: S, formatValue: v, displayTooltip: O, hideTooltip: _ } = ib(e, p, i), T = M(), P = b(() => `${(e.modelValue - a.value) / (s.value - a.value) * 100}%`), I = b(() => e.vertical ? { bottom: P.value } : { left: P.value }), x = () => {
    t.hovering = !0, O();
  }, Z = () => {
    t.hovering = !1, t.dragging || _();
  }, U = (X) => {
    o.value || (X.preventDefault(), J(X), window.addEventListener("mousemove", le), window.addEventListener("touchmove", le), window.addEventListener("mouseup", ge), window.addEventListener("touchend", ge), window.addEventListener("contextmenu", ge), T.value.focus());
  }, Q = (X) => {
    o.value || (t.newPosition = Number.parseFloat(P.value) + X / (s.value - a.value) * 100, be(t.newPosition), h());
  }, k = () => {
    Q(-r.value);
  }, L = () => {
    Q(r.value);
  }, W = () => {
    Q(-r.value * 4);
  }, re = () => {
    Q(r.value * 4);
  }, $ = () => {
    o.value || (be(0), h());
  }, z = () => {
    o.value || (be(100), h());
  }, R = (X) => {
    let de = !0;
    switch (X.code) {
      case Ne.left:
      case Ne.down:
        k();
        break;
      case Ne.right:
      case Ne.up:
        L();
        break;
      case Ne.home:
        $();
        break;
      case Ne.end:
        z();
        break;
      case Ne.pageDown:
        W();
        break;
      case Ne.pageUp:
        re();
        break;
      default:
        de = !1;
        break;
    }
    de && X.preventDefault();
  }, ee = (X) => {
    let de, ve;
    return X.type.startsWith("touch") ? (ve = X.touches[0].clientY, de = X.touches[0].clientX) : (ve = X.clientY, de = X.clientX), {
      clientX: de,
      clientY: ve
    };
  }, J = (X) => {
    t.dragging = !0, t.isClick = !0;
    const { clientX: de, clientY: ve } = ee(X);
    e.vertical ? t.startY = ve : t.startX = de, t.startPosition = Number.parseFloat(P.value), t.newPosition = t.startPosition;
  }, le = (X) => {
    if (t.dragging) {
      t.isClick = !1, O(), m();
      let de;
      const { clientX: ve, clientY: Ee } = ee(X);
      e.vertical ? (t.currentY = Ee, de = (t.startY - t.currentY) / d.value * 100) : (t.currentX = ve, de = (t.currentX - t.startX) / d.value * 100), t.newPosition = t.startPosition + de, be(t.newPosition);
    }
  }, ge = () => {
    t.dragging && (setTimeout(() => {
      t.dragging = !1, t.hovering || _(), t.isClick || be(t.newPosition), h();
    }, 0), window.removeEventListener("mousemove", le), window.removeEventListener("touchmove", le), window.removeEventListener("mouseup", ge), window.removeEventListener("touchend", ge), window.removeEventListener("contextmenu", ge));
  }, be = async (X) => {
    if (X === null || Number.isNaN(+X))
      return;
    X < 0 ? X = 0 : X > 100 && (X = 100);
    const de = 100 / ((s.value - a.value) / r.value);
    let Ee = Math.round(X / de) * de * (s.value - a.value) * 0.01 + a.value;
    Ee = Number.parseFloat(Ee.toFixed(c.value)), Ee !== e.modelValue && n(Ae, Ee), !t.dragging && e.modelValue !== t.oldValue && (t.oldValue = e.modelValue), await Se(), t.dragging && O(), g.value.updatePopper();
  };
  return ie(() => t.dragging, (X) => {
    f(X);
  }), je(T, "touchstart", U, { passive: !1 }), {
    disabled: o,
    button: T,
    tooltip: g,
    tooltipVisible: S,
    showTooltip: i,
    persistent: u,
    wrapperStyle: I,
    formatValue: v,
    handleMouseEnter: x,
    handleMouseLeave: Z,
    onButtonDown: U,
    onKeyDown: R,
    setPosition: be
  };
}, ub = G({
  name: "ElSliderButton"
}), cb = /* @__PURE__ */ G({
  ...ub,
  props: rb,
  emits: sb,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Pe("slider"), s = Bt({
      hovering: !1,
      dragging: !1,
      isClick: !1,
      startX: 0,
      currentX: 0,
      startY: 0,
      currentY: 0,
      startPosition: 0,
      newPosition: 0,
      oldValue: o.modelValue
    }), r = b(() => d.value ? p.value : !1), {
      disabled: i,
      button: u,
      tooltip: c,
      showTooltip: d,
      persistent: p,
      tooltipVisible: h,
      wrapperStyle: m,
      formatValue: f,
      handleMouseEnter: g,
      handleMouseLeave: S,
      onButtonDown: v,
      onKeyDown: O,
      setPosition: _
    } = lb(o, s, n), { hovering: T, dragging: P } = In(s);
    return t({
      onButtonDown: v,
      onKeyDown: O,
      setPosition: _,
      hovering: T,
      dragging: P
    }), (I, x) => (w(), A("div", {
      ref_key: "button",
      ref: u,
      class: N([l(a).e("button-wrapper"), { hover: l(T), dragging: l(P) }]),
      style: we(l(m)),
      tabindex: l(i) ? -1 : 0,
      onMouseenter: l(g),
      onMouseleave: l(S),
      onMousedown: l(v),
      onFocus: l(g),
      onBlur: l(S),
      onKeydown: l(O)
    }, [
      F(l(jr), {
        ref_key: "tooltip",
        ref: c,
        visible: l(h),
        placement: I.placement,
        "fallback-placements": ["top", "bottom", "right", "left"],
        "stop-popper-mouse-event": !1,
        "popper-class": I.tooltipClass,
        disabled: !l(d),
        persistent: l(r)
      }, {
        content: q(() => [
          y("span", null, K(l(f)), 1)
        ]),
        default: q(() => [
          y("div", {
            class: N([l(a).e("button"), { hover: l(T), dragging: l(P) }])
          }, null, 2)
        ]),
        _: 1
      }, 8, ["visible", "placement", "popper-class", "disabled", "persistent"])
    ], 46, ["tabindex", "onMouseenter", "onMouseleave", "onMousedown", "onFocus", "onBlur", "onKeydown"]));
  }
});
var yi = /* @__PURE__ */ _e(cb, [["__file", "button.vue"]]);
const db = he({
  mark: {
    type: te([String, Object]),
    default: void 0
  }
});
var fb = G({
  name: "ElSliderMarker",
  props: db,
  setup(e) {
    const t = Pe("slider"), n = b(() => Be(e.mark) ? e.mark : e.mark.label), o = b(() => Be(e.mark) ? void 0 : e.mark.style);
    return () => Qi("div", {
      class: t.e("marks-text"),
      style: o.value
    }, n.value);
  }
});
const pb = (e, t, n) => {
  const { form: o, formItem: a } = Ca(), s = Xt(), r = M(), i = M(), u = {
    firstButton: r,
    secondButton: i
  }, c = b(() => e.disabled || o?.disabled || !1), d = b(() => Math.min(t.firstValue, t.secondValue)), p = b(() => Math.max(t.firstValue, t.secondValue)), h = b(() => e.range ? `${100 * (p.value - d.value) / (e.max - e.min)}%` : `${100 * (t.firstValue - e.min) / (e.max - e.min)}%`), m = b(() => e.range ? `${100 * (d.value - e.min) / (e.max - e.min)}%` : "0%"), f = b(() => e.vertical ? { height: e.height } : {}), g = b(() => e.vertical ? {
    height: h.value,
    bottom: m.value
  } : {
    width: h.value,
    left: m.value
  }), S = () => {
    s.value && (t.sliderSize = s.value[`client${e.vertical ? "Height" : "Width"}`]);
  }, v = (L) => {
    const W = e.min + L * (e.max - e.min) / 100;
    if (!e.range)
      return r;
    let re;
    return Math.abs(d.value - W) < Math.abs(p.value - W) ? re = t.firstValue < t.secondValue ? "firstButton" : "secondButton" : re = t.firstValue > t.secondValue ? "firstButton" : "secondButton", u[re];
  }, O = (L) => {
    const W = v(L);
    return W.value.setPosition(L), W;
  }, _ = (L) => {
    t.firstValue = L ?? e.min, P(e.range ? [d.value, p.value] : L ?? e.min);
  }, T = (L) => {
    t.secondValue = L, e.range && P([d.value, p.value]);
  }, P = (L) => {
    n(Ae, L), n(Nt, L);
  }, I = async () => {
    await Se(), n(en, e.range ? [d.value, p.value] : e.modelValue);
  }, x = (L) => {
    var W, re, $, z, R, ee;
    if (c.value || t.dragging)
      return;
    S();
    let J = 0;
    if (e.vertical) {
      const le = ($ = (re = (W = L.touches) == null ? void 0 : W.item(0)) == null ? void 0 : re.clientY) != null ? $ : L.clientY;
      J = (s.value.getBoundingClientRect().bottom - le) / t.sliderSize * 100;
    } else {
      const le = (ee = (R = (z = L.touches) == null ? void 0 : z.item(0)) == null ? void 0 : R.clientX) != null ? ee : L.clientX, ge = s.value.getBoundingClientRect().left;
      J = (le - ge) / t.sliderSize * 100;
    }
    if (!(J < 0 || J > 100))
      return O(J);
  };
  return {
    elFormItem: a,
    slider: s,
    firstButton: r,
    secondButton: i,
    sliderDisabled: c,
    minValue: d,
    maxValue: p,
    runwayStyle: f,
    barStyle: g,
    resetSize: S,
    setPosition: O,
    emitChange: I,
    onSliderWrapperPrevent: (L) => {
      var W, re;
      ((W = u.firstButton.value) != null && W.dragging || (re = u.secondButton.value) != null && re.dragging) && L.preventDefault();
    },
    onSliderClick: (L) => {
      x(L) && I();
    },
    onSliderDown: async (L) => {
      const W = x(L);
      W && (await Se(), W.value.onButtonDown(L));
    },
    onSliderMarkerDown: (L) => {
      c.value || t.dragging || O(L);
    },
    setFirstValue: _,
    setSecondValue: T
  };
}, mb = (e, t, n, o) => ({
  stops: b(() => {
    if (!e.showStops || e.min > e.max)
      return [];
    if (e.step === 0)
      return [];
    const r = (e.max - e.min) / e.step, i = 100 * e.step / (e.max - e.min), u = Array.from({ length: r - 1 }).map((c, d) => (d + 1) * i);
    return e.range ? u.filter((c) => c < 100 * (n.value - e.min) / (e.max - e.min) || c > 100 * (o.value - e.min) / (e.max - e.min)) : u.filter((c) => c > 100 * (t.firstValue - e.min) / (e.max - e.min));
  }),
  getStopStyle: (r) => e.vertical ? { bottom: `${r}%` } : { left: `${r}%` }
}), hb = (e) => b(() => e.marks ? Object.keys(e.marks).map(Number.parseFloat).sort((n, o) => n - o).filter((n) => n <= e.max && n >= e.min).map((n) => ({
  point: n,
  position: (n - e.min) * 100 / (e.max - e.min),
  mark: e.marks[n]
})) : []), gb = (e, t, n, o, a, s) => {
  const r = (c) => {
    a(Ae, c), a(Nt, c);
  }, i = () => e.range ? ![n.value, o.value].every((c, d) => c === t.oldValue[d]) : e.modelValue !== t.oldValue, u = () => {
    var c, d;
    e.min > e.max && Pr("Slider", "min should not be greater than max.");
    const p = e.modelValue;
    e.range && We(p) ? p[1] < e.min ? r([e.min, e.min]) : p[0] > e.max ? r([e.max, e.max]) : p[0] < e.min ? r([e.min, p[1]]) : p[1] > e.max ? r([p[0], e.max]) : (t.firstValue = p[0], t.secondValue = p[1], i() && (e.validateEvent && ((c = s?.validate) == null || c.call(s, "change").catch((h) => void 0)), t.oldValue = p.slice())) : !e.range && pe(p) && !Number.isNaN(p) && (p < e.min ? r(e.min) : p > e.max ? r(e.max) : (t.firstValue = p, i() && (e.validateEvent && ((d = s?.validate) == null || d.call(s, "change").catch((h) => void 0)), t.oldValue = p)));
  };
  u(), ie(() => t.dragging, (c) => {
    c || u();
  }), ie(() => e.modelValue, (c, d) => {
    t.dragging || We(c) && We(d) && c.every((p, h) => p === d[h]) && t.firstValue === c[0] && t.secondValue === c[1] || u();
  }, {
    deep: !0
  }), ie(() => [e.min, e.max], () => {
    u();
  });
}, vb = (e, t, n) => {
  const o = M();
  return Ie(async () => {
    e.range ? (We(e.modelValue) ? (t.firstValue = Math.max(e.min, e.modelValue[0]), t.secondValue = Math.min(e.max, e.modelValue[1])) : (t.firstValue = e.min, t.secondValue = e.max), t.oldValue = [t.firstValue, t.secondValue]) : (!pe(e.modelValue) || Number.isNaN(e.modelValue) ? t.firstValue = e.min : t.firstValue = Math.min(e.max, Math.max(e.min, e.modelValue)), t.oldValue = t.firstValue), je(window, "resize", n), await Se(), n();
  }), {
    sliderWrapper: o
  };
}, yb = G({
  name: "ElSlider"
}), bb = /* @__PURE__ */ G({
  ...yb,
  props: ob,
  emits: ab,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Pe("slider"), { t: s } = wa(), r = Bt({
      firstValue: 0,
      secondValue: 0,
      oldValue: 0,
      dragging: !1,
      sliderSize: 1
    }), {
      elFormItem: i,
      slider: u,
      firstButton: c,
      secondButton: d,
      sliderDisabled: p,
      minValue: h,
      maxValue: m,
      runwayStyle: f,
      barStyle: g,
      resetSize: S,
      emitChange: v,
      onSliderWrapperPrevent: O,
      onSliderClick: _,
      onSliderDown: T,
      onSliderMarkerDown: P,
      setFirstValue: I,
      setSecondValue: x
    } = pb(o, r, n), { stops: Z, getStopStyle: U } = mb(o, r, h, m), { inputId: Q, isLabeledByFormItem: k } = Ir(o, {
      formItemContext: i
    }), L = ko(), W = b(() => o.inputSize || L.value), re = b(() => o.ariaLabel || s("el.slider.defaultLabel", {
      min: o.min,
      max: o.max
    })), $ = b(() => o.range ? o.rangeStartLabel || s("el.slider.defaultRangeStartLabel") : re.value), z = b(() => o.formatValueText ? o.formatValueText(X.value) : `${X.value}`), R = b(() => o.rangeEndLabel || s("el.slider.defaultRangeEndLabel")), ee = b(() => o.formatValueText ? o.formatValueText(de.value) : `${de.value}`), J = b(() => [
      a.b(),
      a.m(L.value),
      a.is("vertical", o.vertical),
      { [a.m("with-input")]: o.showInput }
    ]), le = hb(o);
    gb(o, r, h, m, n, i);
    const ge = b(() => {
      const ae = [o.min, o.max, o.step].map((me) => {
        const Fe = `${me}`.split(".")[1];
        return Fe ? Fe.length : 0;
      });
      return Math.max.apply(null, ae);
    }), { sliderWrapper: be } = vb(o, r, S), { firstValue: X, secondValue: de, sliderSize: ve } = In(r), Ee = (ae) => {
      r.dragging = ae;
    };
    return je(be, "touchstart", O, {
      passive: !1
    }), je(be, "touchmove", O, {
      passive: !1
    }), vt(mu, {
      ...In(o),
      sliderSize: ve,
      disabled: p,
      precision: ge,
      emitChange: v,
      resetSize: S,
      updateDragging: Ee
    }), t({
      onSliderClick: _
    }), (ae, me) => {
      var Fe, V;
      return w(), A("div", {
        id: ae.range ? l(Q) : void 0,
        ref_key: "sliderWrapper",
        ref: be,
        class: N(l(J)),
        role: ae.range ? "group" : void 0,
        "aria-label": ae.range && !l(k) ? l(re) : void 0,
        "aria-labelledby": ae.range && l(k) ? (Fe = l(i)) == null ? void 0 : Fe.labelId : void 0
      }, [
        y("div", {
          ref_key: "slider",
          ref: u,
          class: N([
            l(a).e("runway"),
            { "show-input": ae.showInput && !ae.range },
            l(a).is("disabled", l(p))
          ]),
          style: we(l(f)),
          onMousedown: l(T),
          onTouchstartPassive: l(T)
        }, [
          y("div", {
            class: N(l(a).e("bar")),
            style: we(l(g))
          }, null, 6),
          F(yi, {
            id: ae.range ? void 0 : l(Q),
            ref_key: "firstButton",
            ref: c,
            "model-value": l(X),
            vertical: ae.vertical,
            "tooltip-class": ae.tooltipClass,
            placement: ae.placement,
            role: "slider",
            "aria-label": ae.range || !l(k) ? l($) : void 0,
            "aria-labelledby": !ae.range && l(k) ? (V = l(i)) == null ? void 0 : V.labelId : void 0,
            "aria-valuemin": ae.min,
            "aria-valuemax": ae.range ? l(de) : ae.max,
            "aria-valuenow": l(X),
            "aria-valuetext": l(z),
            "aria-orientation": ae.vertical ? "vertical" : "horizontal",
            "aria-disabled": l(p),
            "onUpdate:modelValue": l(I)
          }, null, 8, ["id", "model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-labelledby", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"]),
          ae.range ? (w(), Y(yi, {
            key: 0,
            ref_key: "secondButton",
            ref: d,
            "model-value": l(de),
            vertical: ae.vertical,
            "tooltip-class": ae.tooltipClass,
            placement: ae.placement,
            role: "slider",
            "aria-label": l(R),
            "aria-valuemin": l(X),
            "aria-valuemax": ae.max,
            "aria-valuenow": l(de),
            "aria-valuetext": l(ee),
            "aria-orientation": ae.vertical ? "vertical" : "horizontal",
            "aria-disabled": l(p),
            "onUpdate:modelValue": l(x)
          }, null, 8, ["model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"])) : H("v-if", !0),
          ae.showStops ? (w(), A("div", { key: 1 }, [
            (w(!0), A(Oe, null, it(l(Z), (oe, ne) => (w(), A("div", {
              key: ne,
              class: N(l(a).e("stop")),
              style: we(l(U)(oe))
            }, null, 6))), 128))
          ])) : H("v-if", !0),
          l(le).length > 0 ? (w(), A(Oe, { key: 2 }, [
            y("div", null, [
              (w(!0), A(Oe, null, it(l(le), (oe, ne) => (w(), A("div", {
                key: ne,
                style: we(l(U)(oe.position)),
                class: N([l(a).e("stop"), l(a).e("marks-stop")])
              }, null, 6))), 128))
            ]),
            y("div", {
              class: N(l(a).e("marks"))
            }, [
              (w(!0), A(Oe, null, it(l(le), (oe, ne) => (w(), Y(l(fb), {
                key: ne,
                mark: oe.mark,
                style: we(l(U)(oe.position)),
                onMousedown: $e((Te) => l(P)(oe.position), ["stop"])
              }, null, 8, ["mark", "style", "onMousedown"]))), 128))
            ], 2)
          ], 64)) : H("v-if", !0)
        ], 46, ["onMousedown", "onTouchstartPassive"]),
        ae.showInput && !ae.range ? (w(), Y(l(Ty), {
          key: 0,
          ref: "input",
          "model-value": l(X),
          class: N(l(a).e("input")),
          step: ae.step,
          disabled: l(p),
          controls: ae.showInputControls,
          min: ae.min,
          max: ae.max,
          precision: l(ge),
          debounce: ae.debounce,
          size: l(W),
          "onUpdate:modelValue": l(I),
          onChange: l(v)
        }, null, 8, ["model-value", "class", "step", "disabled", "controls", "min", "max", "precision", "debounce", "size", "onUpdate:modelValue", "onChange"])) : H("v-if", !0)
      ], 10, ["id", "role", "aria-label", "aria-labelledby"]);
    };
  }
});
var wb = /* @__PURE__ */ _e(bb, [["__file", "slider.vue"]]);
const _b = ot(wb), hu = ["success", "info", "warning", "error"], De = Fl({
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
  appendTo: Re ? document.body : void 0
}), Sb = he({
  customClass: {
    type: String,
    default: De.customClass
  },
  center: {
    type: Boolean,
    default: De.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: De.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: De.duration
  },
  icon: {
    type: xn,
    default: De.icon
  },
  id: {
    type: String,
    default: De.id
  },
  message: {
    type: te([
      String,
      Object,
      Function
    ]),
    default: De.message
  },
  onClose: {
    type: te(Function),
    default: De.onClose
  },
  showClose: {
    type: Boolean,
    default: De.showClose
  },
  type: {
    type: String,
    values: hu,
    default: De.type
  },
  plain: {
    type: Boolean,
    default: De.plain
  },
  offset: {
    type: Number,
    default: De.offset
  },
  zIndex: {
    type: Number,
    default: De.zIndex
  },
  grouping: {
    type: Boolean,
    default: De.grouping
  },
  repeatNum: {
    type: Number,
    default: De.repeatNum
  }
}), kb = {
  destroy: () => !0
}, mt = Nc([]), Cb = (e) => {
  const t = mt.findIndex((a) => a.id === e), n = mt[t];
  let o;
  return t > 0 && (o = mt[t - 1]), { current: n, prev: o };
}, Pb = (e) => {
  const { prev: t } = Cb(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Eb = (e, t) => mt.findIndex((o) => o.id === e) > 0 ? 16 : t, Tb = G({
  name: "ElMessage"
}), Ib = /* @__PURE__ */ G({
  ...Tb,
  props: Sb,
  emits: kb,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = cg, { ns: a, zIndex: s } = Ol("message"), { currentZIndex: r, nextZIndex: i } = s, u = M(), c = M(!1), d = M(0);
    let p;
    const h = b(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), m = b(() => {
      const x = n.type;
      return { [a.bm("icon", x)]: x && ta[x] };
    }), f = b(() => n.icon || ta[n.type] || ""), g = b(() => Pb(n.id)), S = b(() => Eb(n.id, n.offset) + g.value), v = b(() => d.value + S.value), O = b(() => ({
      top: `${S.value}px`,
      zIndex: r.value
    }));
    function _() {
      n.duration !== 0 && ({ stop: p } = yl(() => {
        P();
      }, n.duration));
    }
    function T() {
      p?.();
    }
    function P() {
      c.value = !1;
    }
    function I({ code: x }) {
      x === Ne.esc && P();
    }
    return Ie(() => {
      _(), i(), c.value = !0;
    }), ie(() => n.repeatNum, () => {
      T(), _();
    }), je(document, "keydown", I), _t(u, () => {
      d.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: v,
      close: P
    }), (x, Z) => (w(), Y(Bn, {
      name: l(a).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (U) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: q(() => [
        Ye(y("div", {
          id: x.id,
          ref_key: "messageRef",
          ref: u,
          class: N([
            l(a).b(),
            { [l(a).m(x.type)]: x.type },
            l(a).is("center", x.center),
            l(a).is("closable", x.showClose),
            l(a).is("plain", x.plain),
            x.customClass
          ]),
          style: we(l(O)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: _
        }, [
          x.repeatNum > 1 ? (w(), Y(l(dy), {
            key: 0,
            value: x.repeatNum,
            type: l(h),
            class: N(l(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : H("v-if", !0),
          l(f) ? (w(), Y(l(He), {
            key: 1,
            class: N([l(a).e("icon"), l(m)])
          }, {
            default: q(() => [
              (w(), Y(st(l(f))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          se(x.$slots, "default", {}, () => [
            x.dangerouslyUseHTMLString ? (w(), A(Oe, { key: 1 }, [
              H(" Caution here, message could've been compromised, never use user's input as message "),
              y("p", {
                class: N(l(a).e("content")),
                innerHTML: x.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (w(), A("p", {
              key: 0,
              class: N(l(a).e("content"))
            }, K(x.message), 3))
          ]),
          x.showClose ? (w(), Y(l(He), {
            key: 2,
            class: N(l(a).e("closeBtn")),
            onClick: $e(P, ["stop"])
          }, {
            default: q(() => [
              F(l(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 46, ["id"]), [
          [Ft, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var $b = /* @__PURE__ */ _e(Ib, [["__file", "message.vue"]]);
let Ob = 1;
const gu = (e) => {
  const t = !e || Be(e) || fo(e) || xe(e) ? { message: e } : e, n = {
    ...De,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Be(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    gt(o) || (o = document.body), n.appendTo = o;
  }
  return Qo(ft.grouping) && !n.grouping && (n.grouping = ft.grouping), pe(ft.duration) && n.duration === 3e3 && (n.duration = ft.duration), pe(ft.offset) && n.offset === 16 && (n.offset = ft.offset), Qo(ft.showClose) && !n.showClose && (n.showClose = ft.showClose), n;
}, xb = (e) => {
  const t = mt.indexOf(e);
  if (t === -1)
    return;
  mt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Lb = ({ appendTo: e, ...t }, n) => {
  const o = `message_${Ob++}`, a = t.onClose, s = document.createElement("div"), r = {
    ...t,
    id: o,
    onClose: () => {
      a?.(), xb(d);
    },
    onDestroy: () => {
      qo(null, s);
    }
  }, i = F($b, r, xe(r.message) || fo(r.message) ? {
    default: xe(r.message) ? r.message : () => r.message
  } : null);
  i.appContext = n || zn._context, qo(i, s), e.appendChild(s.firstElementChild);
  const u = i.component, d = {
    id: o,
    vnode: i,
    vm: u,
    handler: {
      close: () => {
        u.exposed.visible.value = !1;
      }
    },
    props: i.component.props
  };
  return d;
}, zn = (e = {}, t) => {
  if (!Re)
    return { close: () => {
    } };
  const n = gu(e);
  if (n.grouping && mt.length) {
    const a = mt.find(({ vnode: s }) => {
      var r;
      return ((r = s.props) == null ? void 0 : r.message) === n.message;
    });
    if (a)
      return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (pe(ft.max) && mt.length >= ft.max)
    return { close: () => {
    } };
  const o = Lb(n, t);
  return mt.push(o), o.handler;
};
hu.forEach((e) => {
  zn[e] = (t = {}, n) => {
    const o = gu(t);
    return zn({ ...o, type: e }, n);
  };
});
function Ab(e) {
  for (const t of mt)
    (!e || e === t.props.type) && t.handler.close();
}
zn.closeAll = Ab;
zn._context = null;
const Rb = Ll(zn, "$message"), vu = [
  "success",
  "info",
  "warning",
  "error"
], Mb = he({
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
    type: te([
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
    type: te(Function),
    default: () => {
    }
  },
  onClose: {
    type: te(Function),
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
    values: [...vu, ""],
    default: ""
  },
  zIndex: Number
}), zb = {
  destroy: () => !0
}, Nb = G({
  name: "ElNotification"
}), Fb = /* @__PURE__ */ G({
  ...Nb,
  props: Mb,
  emits: zb,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: a } = Ol("notification"), { nextZIndex: s, currentZIndex: r } = a, { Close: i } = ug, u = M(!1);
    let c;
    const d = b(() => {
      const _ = n.type;
      return _ && ta[n.type] ? o.m(_) : "";
    }), p = b(() => n.type && ta[n.type] || n.icon), h = b(() => n.position.endsWith("right") ? "right" : "left"), m = b(() => n.position.startsWith("top") ? "top" : "bottom"), f = b(() => {
      var _;
      return {
        [m.value]: `${n.offset}px`,
        zIndex: (_ = n.zIndex) != null ? _ : r.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: c } = yl(() => {
        u.value && v();
      }, n.duration));
    }
    function S() {
      c?.();
    }
    function v() {
      u.value = !1;
    }
    function O({ code: _ }) {
      _ === Ne.delete || _ === Ne.backspace ? S() : _ === Ne.esc ? u.value && v() : g();
    }
    return Ie(() => {
      g(), s(), u.value = !0;
    }), je(document, "keydown", O), t({
      visible: u,
      close: v
    }), (_, T) => (w(), Y(Bn, {
      name: l(o).b("fade"),
      onBeforeLeave: _.onClose,
      onAfterLeave: (P) => _.$emit("destroy"),
      persisted: ""
    }, {
      default: q(() => [
        Ye(y("div", {
          id: _.id,
          class: N([l(o).b(), _.customClass, l(h)]),
          style: we(l(f)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: g,
          onClick: _.onClick
        }, [
          l(p) ? (w(), Y(l(He), {
            key: 0,
            class: N([l(o).e("icon"), l(d)])
          }, {
            default: q(() => [
              (w(), Y(st(l(p))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          y("div", {
            class: N(l(o).e("group"))
          }, [
            y("h2", {
              class: N(l(o).e("title")),
              textContent: K(_.title)
            }, null, 10, ["textContent"]),
            Ye(y("div", {
              class: N(l(o).e("content")),
              style: we(_.title ? void 0 : { margin: 0 })
            }, [
              se(_.$slots, "default", {}, () => [
                _.dangerouslyUseHTMLString ? (w(), A(Oe, { key: 1 }, [
                  H(" Caution here, message could've been compromised, never use user's input as message "),
                  y("p", { innerHTML: _.message }, null, 8, ["innerHTML"])
                ], 2112)) : (w(), A("p", { key: 0 }, K(_.message), 1))
              ])
            ], 6), [
              [Ft, _.message]
            ]),
            _.showClose ? (w(), Y(l(He), {
              key: 0,
              class: N(l(o).e("closeBtn")),
              onClick: $e(v, ["stop"])
            }, {
              default: q(() => [
                F(l(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : H("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Ft, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Bb = /* @__PURE__ */ _e(Fb, [["__file", "notification.vue"]]);
const ra = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ar = 16;
let Vb = 1;
const Nn = function(e = {}, t) {
  if (!Re)
    return { close: () => {
    } };
  (Be(e) || fo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  ra[n].forEach(({ vm: d }) => {
    var p;
    o += (((p = d.el) == null ? void 0 : p.offsetHeight) || 0) + ar;
  }), o += ar;
  const a = `notification_${Vb++}`, s = e.onClose, r = {
    ...e,
    offset: o,
    id: a,
    onClose: () => {
      Db(a, n, s);
    }
  };
  let i = document.body;
  gt(e.appendTo) ? i = e.appendTo : Be(e.appendTo) && (i = document.querySelector(e.appendTo)), gt(i) || (i = document.body);
  const u = document.createElement("div"), c = F(Bb, r, xe(r.message) ? r.message : fo(r.message) ? () => r.message : null);
  return c.appContext = pt(t) ? Nn._context : t, c.props.onDestroy = () => {
    qo(null, u);
  }, qo(c, u), ra[n].push({ vm: c }), i.appendChild(u.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
vu.forEach((e) => {
  Nn[e] = (t = {}, n) => ((Be(t) || fo(t)) && (t = {
    message: t
  }), Nn({ ...t, type: e }, n));
});
function Db(e, t, n) {
  const o = ra[t], a = o.findIndex(({ vm: c }) => {
    var d;
    return ((d = c.component) == null ? void 0 : d.props.id) === e;
  });
  if (a === -1)
    return;
  const { vm: s } = o[a];
  if (!s)
    return;
  n?.(s);
  const r = s.el.offsetHeight, i = t.split("-")[0];
  o.splice(a, 1);
  const u = o.length;
  if (!(u < 1))
    for (let c = a; c < u; c++) {
      const { el: d, component: p } = o[c].vm, h = Number.parseInt(d.style[i], 10) - r - ar;
      p.props.offset = h;
    }
}
function Hb() {
  for (const e of Object.values(ra))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Nn.closeAll = Hb;
Nn._context = null;
const Wb = Ll(Nn, "$notify");
function jb(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Ub(e, t, n, o, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var jo;
const dt = "__TAURI_TO_IPC_KEY__";
function Kb(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function E(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function yu(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Gb {
  get rid() {
    return jb(this, jo, "f");
  }
  constructor(t) {
    jo.set(this, void 0), Ub(this, jo, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return E("plugin:resources|close", {
      rid: this.rid
    });
  }
}
jo = /* @__PURE__ */ new WeakMap();
var et;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(et || (et = {}));
async function bu(e, t) {
  await E("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function rt(e, t, n) {
  var o;
  const a = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return E("plugin:event|listen", {
    event: e,
    target: a,
    handler: Kb(t)
  }).then((s) => async () => bu(e, s));
}
async function Zb(e, t, n) {
  return rt(e, (o) => {
    bu(e, o.id), t(o);
  }, n);
}
async function wu(e, t) {
  await E("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function qb(e, t, n) {
  await E("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class _u {
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
    return new lo(this.width * t, this.height * t);
  }
  [dt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[dt]();
  }
}
class lo {
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
    return new _u(this.width / t, this.height / t);
  }
  [dt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[dt]();
  }
}
class bn {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof _u ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof lo ? this.size : this.size.toPhysical(t);
  }
  [dt]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[dt]();
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
    return new Zt(this.x * t, this.y * t);
  }
  [dt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[dt]();
  }
}
class Zt {
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
  [dt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[dt]();
  }
}
class No {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Su ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Zt ? this.position : this.position.toPhysical(t);
  }
  [dt]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[dt]();
  }
}
class uo extends Gb {
  /**
   * Creates an Image from a resource ID. For internal use only.
   *
   * @ignore
   */
  constructor(t) {
    super(t);
  }
  /** Creates a new Image using RGBA data, in row-major order from top to bottom, and with specified width and height. */
  static async new(t, n, o) {
    return E("plugin:image|new", {
      rgba: sa(t),
      width: n,
      height: o
    }).then((a) => new uo(a));
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
    return E("plugin:image|from_bytes", {
      bytes: sa(t)
    }).then((n) => new uo(n));
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
    return E("plugin:image|from_path", { path: t }).then((n) => new uo(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return E("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return E("plugin:image|size", { rid: this.rid });
  }
}
function sa(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof uo ? e.rid : e;
}
var rr;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(rr || (rr = {}));
class Yb {
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
var bi;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(bi || (bi = {}));
function ku() {
  return new Cu(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Na() {
  return E("plugin:window|get_all_windows").then((e) => e.map((t) => new Cu(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Fa = ["tauri://created", "tauri://error"];
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
    var o;
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || E("plugin:window|create", {
      options: {
        ...n,
        parent: typeof n.parent == "string" ? n.parent : (o = n.parent) === null || o === void 0 ? void 0 : o.label,
        label: t
      }
    }).then(async () => this.emit("tauri://created")).catch(async (a) => this.emit("tauri://error", a));
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
    return (n = (await Na()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return ku();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Na();
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
    for (const t of await Na())
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
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : rt(t, n, {
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
      const o = this.listeners[t];
      o.splice(o.indexOf(n), 1);
    } : Zb(t, n, {
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
    if (Fa.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
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
  async emitTo(t, n, o) {
    if (Fa.includes(n)) {
      for (const a of this.listeners[n] || [])
        a({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return qb(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Fa.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return E("plugin:window|scale_factor", {
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
    return E("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Zt(t));
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
    return E("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Zt(t));
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
    return E("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new lo(t));
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
    return E("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new lo(t));
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
    return E("plugin:window|is_fullscreen", {
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
    return E("plugin:window|is_minimized", {
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
    return E("plugin:window|is_maximized", {
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
    return E("plugin:window|is_focused", {
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
    return E("plugin:window|is_decorated", {
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
    return E("plugin:window|is_resizable", {
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
    return E("plugin:window|is_maximizable", {
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
    return E("plugin:window|is_minimizable", {
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
    return E("plugin:window|is_closable", {
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
    return E("plugin:window|is_visible", {
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
    return E("plugin:window|title", {
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
    return E("plugin:window|theme", {
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
    return E("plugin:window|is_always_on_top", {
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
    return E("plugin:window|center", {
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
    return t && (t === rr.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), E("plugin:window|request_user_attention", {
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
    return E("plugin:window|set_resizable", {
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
    return E("plugin:window|set_enabled", {
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
    return E("plugin:window|is_enabled", {
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
    return E("plugin:window|set_maximizable", {
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
    return E("plugin:window|set_minimizable", {
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
    return E("plugin:window|set_closable", {
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
    return E("plugin:window|set_title", {
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
    return E("plugin:window|maximize", {
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
    return E("plugin:window|unmaximize", {
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
    return E("plugin:window|toggle_maximize", {
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
    return E("plugin:window|minimize", {
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
    return E("plugin:window|unminimize", {
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
    return E("plugin:window|show", {
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
    return E("plugin:window|hide", {
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
    return E("plugin:window|close", {
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
    return E("plugin:window|destroy", {
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
    return E("plugin:window|set_decorations", {
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
    return E("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return E("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return E("plugin:window|set_effects", {
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
    return E("plugin:window|set_always_on_top", {
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
    return E("plugin:window|set_always_on_bottom", {
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
    return E("plugin:window|set_content_protected", {
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
    return E("plugin:window|set_size", {
      label: this.label,
      value: t instanceof bn ? t : new bn(t)
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
    return E("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof bn ? t : t ? new bn(t) : null
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
    return E("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof bn ? t : t ? new bn(t) : null
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
    function n(o) {
      return o ? { Logical: o } : null;
    }
    return E("plugin:window|set_size_constraints", {
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
    return E("plugin:window|set_position", {
      label: this.label,
      value: t instanceof No ? t : new No(t)
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
    return E("plugin:window|set_fullscreen", {
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
    return E("plugin:window|set_focus", {
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
    return E("plugin:window|set_icon", {
      label: this.label,
      value: sa(t)
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
    return E("plugin:window|set_skip_taskbar", {
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
    return E("plugin:window|set_cursor_grab", {
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
    return E("plugin:window|set_cursor_visible", {
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
    return E("plugin:window|set_cursor_icon", {
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
    return E("plugin:window|set_background_color", { color: t });
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
    return E("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof No ? t : new No(t)
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
    return E("plugin:window|set_ignore_cursor_events", {
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
    return E("plugin:window|start_dragging", {
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
    return E("plugin:window|start_resize_dragging", {
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
    return E("plugin:window|set_badge_count", {
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
    return E("plugin:window|set_badge_label", {
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
    return E("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? sa(t) : void 0
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
    return E("plugin:window|set_progress_bar", {
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
    return E("plugin:window|set_visible_on_all_workspaces", {
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
    return E("plugin:window|set_title_bar_style", {
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
    return E("plugin:window|set_theme", {
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
    return this.listen(et.WINDOW_RESIZED, (n) => {
      n.payload = new lo(n.payload), t(n);
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
    return this.listen(et.WINDOW_MOVED, (n) => {
      n.payload = new Zt(n.payload), t(n);
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
    return this.listen(et.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new Yb(n);
      await t(o), o.isPreventDefault() || await this.destroy();
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
    const n = await this.listen(et.DRAG_ENTER, (r) => {
      t({
        ...r,
        payload: {
          type: "enter",
          paths: r.payload.paths,
          position: new Zt(r.payload.position)
        }
      });
    }), o = await this.listen(et.DRAG_OVER, (r) => {
      t({
        ...r,
        payload: {
          type: "over",
          position: new Zt(r.payload.position)
        }
      });
    }), a = await this.listen(et.DRAG_DROP, (r) => {
      t({
        ...r,
        payload: {
          type: "drop",
          paths: r.payload.paths,
          position: new Zt(r.payload.position)
        }
      });
    }), s = await this.listen(et.DRAG_LEAVE, (r) => {
      t({ ...r, payload: { type: "leave" } });
    });
    return () => {
      n(), a(), o(), s();
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
    const n = await this.listen(et.WINDOW_FOCUS, (a) => {
      t({ ...a, payload: !0 });
    }), o = await this.listen(et.WINDOW_BLUR, (a) => {
      t({ ...a, payload: !1 });
    });
    return () => {
      n(), o();
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
    return this.listen(et.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(et.WINDOW_THEME_CHANGED, t);
  }
}
var wi;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(wi || (wi = {}));
var _i;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(_i || (_i = {}));
var Si;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(Si || (Si = {}));
const ze = {
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
      duration: a = 3e3,
      showClose: s = !1
    } = e;
    o === "center" ? Rb({
      message: t,
      type: n,
      duration: a,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Wb({
      message: t,
      type: n,
      position: o,
      duration: a,
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
}, Xb = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1680942651462'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3789'%20data-darkreader-inline-fill=''%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M214.101333%20512c0-32.512%205.546667-63.701333%2015.36-92.928L57.173333%20290.218667A491.861333%20491.861333%200%200%200%204.693333%20512c0%2079.701333%2018.858667%20154.88%2052.394667%20221.610667l172.202667-129.066667A290.56%20290.56%200%200%201%20214.101333%20512'%20fill='%23FBBC05'%20p-id='3790'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23967002;'%3e%3c/path%3e%3cpath%20d='M516.693333%20216.192c72.106667%200%20137.258667%2025.002667%20188.458667%2065.962667L854.101333%20136.533333C763.349333%2059.178667%20646.997333%2011.392%20516.693333%2011.392c-202.325333%200-376.234667%20113.28-459.52%20278.826667l172.373334%20128.853333c39.68-118.016%20152.832-202.88%20287.146666-202.88'%20fill='%23EA4335'%20p-id='3791'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23a71d11;'%3e%3c/path%3e%3cpath%20d='M516.693333%20807.808c-134.357333%200-247.509333-84.864-287.232-202.88l-172.288%20128.853333c83.242667%20165.546667%20257.152%20278.826667%20459.52%20278.826667%20124.842667%200%20244.053333-43.392%20333.568-124.757333l-163.584-123.818667c-46.122667%2028.458667-104.234667%2043.776-170.026666%2043.776'%20fill='%2334A853'%20p-id='3792'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%232a8642;'%3e%3c/path%3e%3cpath%20d='M1005.397333%20512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696%2065.962667-51.072%20116.650667-104.533333%20149.632l163.541333%20123.818667c93.994667-85.418667%20155.136-212.650667%20155.136-375.850667'%20fill='%234285F4'%20p-id='3793'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%230943a2;'%3e%3c/path%3e%3c/svg%3e", Jb = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='240px'%20height='240px'%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNla'%20x1='11.905'%20x2='17.941'%20y1='1.952'%20y2='40.401'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffc'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNla)'%20d='M17.572,37.076L20,35.619V10.603c0-1.632-0.796-3.161-2.133-4.096L12.36,2.652%20C11.366,1.956,10,2.667,10,3.881V32.5c0,0.22,0.02,0.555,0.033,0.772C10.369,36.867,14.382,38.99,17.572,37.076z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlb'%20x1='14.342'%20x2='34.121'%20y1='41.478'%20y2='25.575'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2333bef0'/%3e%3cstop%20offset='.159'%20stop-color='%2332b9f0'/%3e%3cstop%20offset='.341'%20stop-color='%232facf2'/%3e%3cstop%20offset='.533'%20stop-color='%232a95f4'/%3e%3cstop%20offset='.733'%20stop-color='%232475f6'/%3e%3cstop%20offset='.936'%20stop-color='%231b4cfa'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlb)'%20d='M32.682,27.904L20,35.5v0l-2.428,1.457c-3.191,1.915-7.203-0.209-7.54-3.804%20C10.372,38.922,15.145,43.5,21,43.5c1.963,0,3.888-0.536,5.568-1.551l6.834-4.126c0.817-0.493,1.522-1.075,2.15-1.707%20C37.906,33.415,36.739,28.669,32.682,27.904z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlc'%20x1='24.223'%20x2='45.699'%20y1='17.113'%20y2='38.588'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffd'/%3e%3cstop%20offset='1'%20stop-color='%231de9b6'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlc)'%20d='M33.636,19.568l-7.607-3.803c-1.234-0.617-2.576,0.618-2.064,1.899l1.755,5.886%20c0.499,1.248,1.479,2.242,2.719,2.758L32.5,28c4.057,0.766,5.352,5.251,3.052,8.117C40.399,31.24,40.088,22.794,33.636,19.568z'/%3e%3c/svg%3e", Qb = "snippets-code:developer-mode", Pu = "snippets-code:frontend-diagnostics", ew = 240, Zn = "[REDACTED]", Uo = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Zn}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Zn}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Zn
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Zn}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Zn}`
), Eu = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Uo(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Uo(
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
    return Uo(String(e));
  }
}, tw = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, nw = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Pu) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Zr = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Qb) === "true";
  } catch {
    return !1;
  }
}, ow = (e, t, n) => {
  if (!Zr() || typeof localStorage > "u") return;
  const o = nw();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: tw(),
    message: Uo(t),
    data: Eu(n)
  });
  try {
    localStorage.setItem(
      Pu,
      JSON.stringify(o.slice(-ew))
    );
  } catch {
  }
}, aw = () => Zr(), rw = (e) => e === "error" || Zr(), Fo = (e, t, n) => {
  ow(e, t, n), rw(e) && E("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Eu(n)
  }).catch(() => {
  });
}, B = {
  info: (e, t, ...n) => {
    Fo("info", e, t);
  },
  error: (e, t) => {
    Fo("error", e, t);
  },
  warn: (e, t) => {
    Fo("warn", e, t);
  },
  debug: (e, t) => {
    aw() && Fo("debug", e, t);
  }
};
function sw(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
}
function Ba(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, o = e.match(/[\u3040-\u30ff]/g), a = o ? o.length : 0, s = e.match(/[\uac00-\ud7af]/g), r = s ? s.length : 0, i = e.match(/[a-zA-Z]/g), u = i ? i.length : 0, d = n + a + r + u;
  return d === 0 ? "unknown" : a >= 3 && a > u && a / d >= 0.2 ? "ja" : r >= 3 && r > n && r > u && r / d >= 0.2 ? "ko" : n > u ? "zh" : u > n ? "en" : "unknown";
}
async function iw() {
  try {
    return await E("get_app_config");
  } catch (e) {
    throw new Error(`获取应用配置失败: ${e}`);
  }
}
async function lw() {
  try {
    return await E("get_editor_settings");
  } catch (e) {
    throw new Error(`获取编辑器显示设置失败: ${e}`);
  }
}
async function uw(e) {
  try {
    await E("update_editor_settings", { settings: e });
  } catch (t) {
    throw new Error(`更新编辑器显示设置失败: ${t}`);
  }
}
const cw = wo("hotkeys", {
  state: () => ({
    searchHotkey: "",
    configHotkey: "",
    translateHotkey: "",
    selectionTranslateHotkey: "",
    screenshotHotkey: "",
    screenRecorderHotkey: "",
    darkModeHotkey: "",
    wallpaperSwitcherHotkey: "",
    pluginHotkeys: {}
  }),
  actions: {
    /** 从后端拉取快捷键配置并填充 state */
    async initialize() {
      try {
        const e = await E(
          "get_hotkey_config_map"
        );
        this.pluginHotkeys = e, this.searchHotkey = e.search || "", this.configHotkey = e.config || "", this.translateHotkey = e.translate || "", this.selectionTranslateHotkey = e.selection_translate || "", this.screenshotHotkey = e.screenshot || "", this.screenRecorderHotkey = e.screen_recorder || "", this.darkModeHotkey = e.dark_mode || "", this.wallpaperSwitcherHotkey = e.wallpaper_switcher || "";
      } catch (e) {
        B.error("获取快捷键配置失败:", e);
      }
    },
    /** 更新单个快捷键字段并同步 pluginHotkeys */
    setHotkey(e, t) {
      switch (e) {
        case "search":
          this.searchHotkey = t;
          break;
        case "config":
          this.configHotkey = t;
          break;
        case "translate":
          this.translateHotkey = t;
          break;
        case "selection_translate":
          this.selectionTranslateHotkey = t;
          break;
        case "screenshot":
          this.screenshotHotkey = t;
          break;
        case "screen_recorder":
          this.screenRecorderHotkey = t;
          break;
        case "dark_mode":
          this.darkModeHotkey = t;
          break;
        case "wallpaper_switcher":
          this.wallpaperSwitcherHotkey = t;
          break;
      }
      this.pluginHotkeys = { ...this.pluginHotkeys, [e]: t };
    }
  }
}), qn = wo("theme", {
  state: () => ({
    theme: "auto",
    systemPrefersDark: !1
  }),
  getters: {
    /** 当前实际是否为深色模式 */
    effectiveDark() {
      return this.theme === "dark" || this.theme === "auto" && this.systemPrefersDark;
    }
  },
  actions: {
    /** 更新主题并立即应用 */
    updateTheme(e) {
      B.debug(`[主题][ThemeStore] 更新主题：newTheme=${e}`), this.theme = e, this.applyTheme();
    },
    /** 应用主题到 DOM，并同步 systemPrefersDark */
    applyTheme() {
      const e = document.documentElement, t = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      B.debug(
        `[主题][ThemeStore] 应用主题到 DOM：theme=${this.theme}, prefersDark=${t}`
      ), this.theme === "auto" && (this.systemPrefersDark = t), this.theme === "dark" || this.theme === "auto" && t ? e.classList.add("dark") : e.classList.remove("dark");
    },
    /**
     * 同步系统主题样式（仅在 auto 模式下生效，不修改 store.theme）
     * 用于响应操作系统主题变化
     */
    syncSystemThemeStyle(e) {
      B.debug(
        `[主题][ThemeStore] 同步系统主题样式：isDark=${e}, store.theme=${this.theme}`
      );
      let t = this.theme;
      try {
        const n = localStorage.getItem("configuration");
        if (n) {
          const o = JSON.parse(n);
          o.theme && (t = o.theme, this.theme = t);
        }
      } catch (n) {
        B.error("从 localStorage 同步主题失败:", n);
      }
      if (t === "auto") {
        this.systemPrefersDark = e;
        const n = document.documentElement;
        e ? n.classList.add("dark") : n.classList.remove("dark");
      }
    }
  },
  persist: {
    pick: ["theme"]
  }
}), ki = 960, Ci = 768;
wo("layout", {
  state: () => ({
    /** 用户偏好：分类面板是否折叠（仅窗口足够宽时生效） */
    categoryPanelCollapsed: !1,
    /** 用户偏好：片段列表面板是否折叠（仅窗口足够宽时生效） */
    contentListPanelCollapsed: !1,
    /** 当前窗口宽度（由 resize 监听更新，用于自动折叠） */
    windowWidth: typeof window < "u" ? window.innerWidth : 1200
  }),
  getters: {
    /** 实际是否折叠分类面板：用户偏好 或 窗口过窄时强制折叠 */
    effectiveCategoryCollapsed(e) {
      return e.categoryPanelCollapsed || e.windowWidth < ki;
    },
    /** 实际是否折叠片段列表面板：用户偏好 或 窗口过窄时强制折叠 */
    effectiveContentListCollapsed(e) {
      return e.contentListPanelCollapsed || e.windowWidth < Ci;
    },
    /** 窗口是否足够宽以显示分类面板折叠按钮（点击后可实际展开） */
    isWideEnoughForCategoryPanel(e) {
      return e.windowWidth >= ki;
    },
    /** 窗口是否足够宽以显示片段列表面板折叠按钮 */
    isWideEnoughForContentListPanel(e) {
      return e.windowWidth >= Ci;
    }
  },
  actions: {
    setWindowWidth(e) {
      this.windowWidth = e;
    },
    toggleCategoryPanel() {
      this.categoryPanelCollapsed = !this.categoryPanelCollapsed;
    },
    toggleContentListPanel() {
      this.contentListPanelCollapsed = !this.contentListPanelCollapsed;
    }
  },
  persist: {
    pick: ["categoryPanelCollapsed", "contentListPanelCollapsed"]
  }
});
const dw = "https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/main/plugin-registry/marketplace/marketplace.json", fw = "https://ghfast.top/";
function pw(e) {
  return e.startsWith("https://github.com/") ? `${fw}${e}` : e;
}
async function mw() {
  return await E("get_plugin_states");
}
async function hw() {
  return await E("get_installed_plugin_manifests");
}
async function gw(e, t = !1) {
  return await E("install_local_plugin_package", {
    sourcePath: e,
    overwrite: t
  });
}
async function Tu(e, t = !1, n, o, a, s, r) {
  return await E("install_plugin_package_from_url", {
    request: {
      expectedSha256: a,
      expectedSizeBytes: o,
      packageUrl: e,
      packageSubdir: n,
      overwrite: t,
      mirrorUrls: s ?? [],
      pluginId: r
    }
  });
}
async function vw() {
  return await E("get_plugin_install_tasks");
}
const yw = (e) => {
  try {
    const t = new URL(e);
    return t.searchParams.set("_sc_refresh", `${Date.now()}`), t.toString();
  } catch {
    return e;
  }
};
async function bw(e) {
  return await E("fetch_plugin_marketplace", {
    marketplaceUrl: yw(e)
  });
}
async function ww(e, t = !1) {
  await E("uninstall_local_plugin_package", { pluginId: e, deleteData: t });
}
async function _w(e, t) {
  await E("set_plugin_enabled", { pluginId: e, enabled: t });
}
async function Sw() {
  return await E("get_rapidocr_resource_status");
}
async function kw() {
  return await E(
    "screen_recorder_get_ffmpeg_status"
  );
}
async function Iu(e, t) {
  return await E("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
async function Va() {
  await E("install_translation_offline_runtime_resources");
}
const Cw = (e, t, n, o) => ({
  id: e.id,
  source: t,
  packagePath: n,
  installedAt: o,
  manifest: e,
  nameKey: e.name.i18nKey,
  descriptionKey: e.description.i18nKey,
  category: e.category,
  enabledByDefault: e.enabledByDefault,
  routeNames: e.capabilities?.routeNames,
  settingsTabs: e.capabilities?.settingsTabs,
  hotkeys: e.capabilities?.hotkeys,
  searchSources: e.capabilities?.searchSources,
  aiProviders: e.capabilities?.aiProviders,
  aiContextProviders: e.capabilities?.aiContextProviders,
  resourceHintKey: e.resources?.hintKey,
  resourceFor: e.resourceFor
}), ht = (e) => typeof e == "object" && e !== null, Pw = (e) => ht(e) && "manifest" in e && ht(e.manifest) ? {
  manifest: e.manifest,
  packagePath: typeof e.packagePath == "string" ? e.packagePath : void 0,
  installedAt: typeof e.installedAt == "string" ? e.installedAt : void 0
} : { manifest: e }, Ew = (e) => typeof e == "string" && ["capture", "automation", "search", "sync", "editor", "appearance"].includes(
  e
), Da = (e) => typeof e == "number" && Number.isInteger(e) && e >= 0, Pi = (e) => typeof e == "string" && e.trim() ? e : null, Ei = (e) => !ht(e) || typeof e.i18nKey != "string" || typeof e.fallback != "string" ? null : {
  i18nKey: e.i18nKey,
  fallback: e.fallback
}, Tw = (e) => !ht(e) || !Da(e.schemaVersion) || !Da(e.indexSchemaVersion) || !Da(e.extractorVersion) ? null : {
  schemaVersion: e.schemaVersion,
  indexSchemaVersion: e.indexSchemaVersion,
  extractorVersion: e.extractorVersion
}, $u = (e) => !ht(e) || typeof e.algorithm != "string" || !e.algorithm.trim() || typeof e.value != "string" || !e.value.trim() || e.keyId !== void 0 && typeof e.keyId != "string" ? null : {
  algorithm: e.algorithm,
  value: e.value,
  keyId: e.keyId
}, Iw = (e) => !ht(e) || typeof e.id != "string" || !e.id.trim() || e.name !== void 0 && typeof e.name != "string" || e.trusted !== void 0 && typeof e.trusted != "boolean" || e.publicKeyId !== void 0 && typeof e.publicKeyId != "string" ? null : {
  id: e.id,
  name: e.name,
  trusted: e.trusted,
  publicKeyId: e.publicKeyId
}, $w = (e) => {
  if (!ht(e)) return null;
  let t;
  if (e.signature !== void 0) {
    const n = $u(
      e.signature
    );
    if (!n) return null;
    t = n;
  }
  return { signature: t };
}, Bo = (e, t) => {
  if (e !== void 0)
    return t(e);
}, Ow = (e) => {
  if (e.schemaVersion !== 1) return null;
  const t = Pi(e.id);
  if (!t) return null;
  const n = Pi(e.version);
  if (!n || e.kind !== "local") return null;
  const o = Ei(e.name);
  if (!o) return null;
  const a = Ei(e.description);
  return !a || !Ew(e.category) || typeof e.enabledByDefault != "boolean" ? null : {
    schemaVersion: 1,
    id: t,
    version: n,
    kind: e.kind,
    name: o,
    description: a,
    category: e.category,
    enabledByDefault: e.enabledByDefault
  };
}, xw = (e) => {
  const t = Bo(
    e.storage,
    Tw
  );
  if (t === null) return null;
  const n = Bo(
    e.signature,
    $u
  );
  if (n === null) return null;
  const o = Bo(
    e.publisher,
    Iw
  );
  if (o === null) return null;
  const a = Bo(
    e.nativeHost,
    $w
  );
  return a === null ? null : { storage: t, signature: n, publisher: o, nativeHost: a };
}, Ti = (e) => Array.isArray(e) ? e.filter((t) => typeof t == "string") : void 0, Yn = (e) => typeof e == "string" ? e : void 0, Lw = (e) => {
  if (!ht(e)) return null;
  const t = Ow(e);
  if (!t) return null;
  const n = xw(e);
  return n ? {
    ...t,
    capabilities: ht(e.capabilities) ? e.capabilities : void 0,
    resources: ht(e.resources) ? e.resources : void 0,
    entry: ht(e.entry) ? e.entry : void 0,
    ...n,
    permissions: Ti(e.permissions),
    dependencies: Ti(e.dependencies),
    resourceFor: Yn(e.resourceFor),
    compatibleAppVersion: Yn(e.compatibleAppVersion),
    minAppVersion: Yn(e.minAppVersion),
    repository: Yn(e.repository),
    releaseUrl: Yn(e.releaseUrl)
  } : null;
}, Ii = (e) => {
  const t = e.installedAt ? Date.parse(e.installedAt) : NaN;
  return Number.isFinite(t) ? t : 0;
}, Aw = (e, t) => {
  const n = Ii(t) - Ii(e);
  return n !== 0 ? n : String(e.id).localeCompare(String(t.id));
}, Rw = (e) => e.map((t) => {
  const { manifest: n, packagePath: o, installedAt: a } = Pw(t), s = Lw(n);
  if (!s) return null;
  const r = {
    manifest: s,
    packagePath: o ?? ""
  };
  return a && (r.installedAt = a), r;
}).filter(
  (t) => t !== null
), Ou = (e = []) => {
  const n = [...Rw(e).map(
    (a) => Cw(
      a.manifest,
      "local",
      a.packagePath || void 0,
      a.installedAt
    )
  ).sort(Aw)], o = /* @__PURE__ */ new Map();
  for (const a of n)
    o.has(a.id) || o.set(a.id, a);
  return Array.from(o.values());
}, Mw = Ou(), ia = Mw, zw = ia.map((e) => e.id), xu = ia.reduce(
  (e, t) => (e[t.id] = t.enabledByDefault, e),
  {}
), Nw = (e) => zw.includes(e);
async function Fw() {
  return await E("local_ai_get_runtime_status");
}
async function Bw() {
  return await E("local_ai_get_status");
}
async function Vw(e) {
  return await E("local_ai_start_service", {
    config: null
  });
}
async function $i(e) {
  return await E("local_ai_chat", { request: e });
}
function Dw() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function Hw(e, t, n = {}) {
  const o = n.requestId ?? Dw(), a = await rt(
    "local-ai-chat-stream",
    (s) => {
      const r = s.payload;
      r.requestId === o && (r.event === "delta" && r.content ? t(r.content) : r.event === "stats" && r.stats && n.onStats?.(r.stats));
    }
  );
  try {
    return await E("local_ai_chat_stream", {
      request: e,
      requestId: o
    });
  } finally {
    a();
  }
}
async function Ww(e) {
  return await E("local_ai_cancel_chat_stream", { requestId: e });
}
async function jw(e, t, n) {
  return await E("local_ai_translate", { text: e, from: t, to: n });
}
const Oi = 2500, Uw = [
  { source: "markdown", domain: "workspace", priority: 80 },
  {
    source: "local-launcher",
    domain: "apps",
    pluginId: "local-launcher",
    priority: 70
  },
  { source: "app", domain: "apps", pluginId: "local-launcher", priority: 70 },
  {
    source: "bookmark",
    domain: "bookmarks",
    pluginId: "local-launcher",
    priority: 50
  },
  {
    source: "desktop-files",
    domain: "files",
    pluginId: "desktop-files",
    priority: 40
  },
  { source: "file", domain: "files", pluginId: "desktop-files", priority: 40 },
  {
    source: "quick-tools",
    domain: "tools",
    pluginId: "quick-tools",
    priority: 100
  },
  {
    source: "engine-shortcut",
    domain: "web",
    pluginId: "search-engines",
    priority: 90
  },
  {
    source: "default-search",
    domain: "web",
    pluginId: "search-engines",
    priority: 0
  },
  { source: "url-open", domain: "web", priority: 110 }
], sr = (e) => Uw.find((t) => t.source === e), xi = (e) => sr(e)?.priority ?? 0, Ha = (e, t) => `${e}:${t}`, Kw = (e) => e instanceof Error ? e.message : String(e);
class Gw {
  constructor() {
    Un(this, "providers", /* @__PURE__ */ new Map());
    Un(this, "states", /* @__PURE__ */ new Map());
  }
  register(t) {
    const n = t.source.trim();
    if (!n)
      throw new Error(`搜索源 ${t.pluginId} 缺少 source`);
    const o = Ha(String(t.pluginId), n), a = sr(n), s = t.phase ?? "results", r = t.priority ?? a?.priority ?? xi(n), i = t.domain ?? a?.domain, u = t.timeoutMs ?? a?.timeoutMs ?? Oi;
    this.providers.set(o, {
      ...t,
      source: n,
      phase: s,
      domain: i,
      priority: r,
      timeoutMs: u
    }), this.states.set(o, {
      ...this.states.get(o),
      key: o,
      pluginId: String(t.pluginId),
      source: n,
      phase: s,
      domain: i,
      priority: r,
      timeoutMs: u,
      health: this.states.get(o)?.health ?? "idle"
    });
  }
  unregisterPlugin(t) {
    for (const n of Array.from(this.providers.keys()))
      n.startsWith(`${t}:`) && (this.providers.delete(n), this.states.delete(n));
  }
  clear() {
    this.providers.clear(), this.states.clear();
  }
  list() {
    return Array.from(this.providers.values()).sort((t, n) => {
      const o = (n.priority ?? 0) - (t.priority ?? 0);
      return o !== 0 ? o : `${t.pluginId}:${t.source}`.localeCompare(
        `${n.pluginId}:${n.source}`
      );
    });
  }
  listEnabled(t) {
    return this.list().filter(
      (n) => t(String(n.pluginId))
    );
  }
  markSearching(t, n = Date.now()) {
    this.patchState(t, {
      health: "searching",
      lastSearchedAt: n,
      lastError: void 0
    });
  }
  markSuccess(t, n, o = Date.now()) {
    this.patchState(t, {
      health: "healthy",
      lastSuccessfulAt: o,
      lastDurationMs: o - n,
      lastError: void 0
    });
  }
  markFailure(t, n, o, a = Date.now()) {
    this.patchState(t, {
      health: "failed",
      lastFailedAt: a,
      lastDurationMs: a - o,
      lastError: Kw(n)
    });
  }
  getState(t, n) {
    return this.states.get(Ha(t, n));
  }
  getStates() {
    return Array.from(this.states.values()).sort((t, n) => {
      const o = n.priority - t.priority;
      return o !== 0 ? o : t.key.localeCompare(n.key);
    });
  }
  patchState(t, n) {
    const o = t.source.trim(), a = Ha(String(t.pluginId), o), s = this.states.get(a), r = sr(o), i = t.phase ?? "results", u = t.priority ?? r?.priority ?? xi(o), c = t.timeoutMs ?? r?.timeoutMs ?? Oi;
    this.states.set(a, {
      ...s,
      ...n,
      key: a,
      pluginId: String(t.pluginId),
      source: o,
      phase: i,
      domain: t.domain ?? r?.domain,
      priority: u,
      timeoutMs: c,
      health: n.health ?? s?.health ?? "idle"
    });
  }
}
const Zw = () => new Gw(), Lu = Zw(), qw = (e) => {
  Lu.register(e);
}, Yw = (e) => {
  Lu.unregisterPlugin(e);
}, Xw = (e, t) => e.capabilities.includes(t);
class Jw {
  constructor() {
    Un(this, "providers", /* @__PURE__ */ new Map());
  }
  register(t) {
    const n = t.id.trim();
    if (!n)
      throw new Error("AI provider 缺少稳定 id");
    if (t.capabilities.length === 0)
      throw new Error(`AI provider ${n} 缺少 capability`);
    const o = this.providers.get(n);
    if (o && o.pluginId !== t.pluginId)
      throw new Error(
        `AI provider ${n} 已由 ${o.pluginId ?? "core"} 注册`
      );
    this.providers.set(n, {
      ...t,
      id: n
    });
  }
  unregister(t) {
    return this.providers.delete(t);
  }
  unregisterPlugin(t) {
    for (const [n, o] of Array.from(this.providers.entries()))
      o.pluginId === t && this.providers.delete(n);
  }
  clear() {
    this.providers.clear();
  }
  get(t) {
    return this.providers.get(t);
  }
  require(t) {
    const n = this.get(t);
    if (!n)
      throw new Error(`AI provider ${t} 未注册`);
    return n;
  }
  list(t = {}) {
    return Array.from(this.providers.values()).filter((n) => !(t.capability && !Xw(n, t.capability) || n.pluginId && t.isPluginEnabled && !t.isPluginEnabled(n.pluginId))).sort((n, o) => {
      const a = (o.priority ?? 0) - (n.priority ?? 0);
      return a !== 0 ? a : n.id.localeCompare(o.id);
    });
  }
  getDefault(t = {}) {
    return this.list(t)[0];
  }
}
const Qw = () => new Jw(), Ia = Qw(), e1 = 4e3, t1 = 12, Wa = (e) => e?.trim() || void 0, n1 = (e, t) => {
  if (t <= 0 || e.length <= t) return e;
  const n = `
[truncated]`;
  return t <= n.length ? e.slice(0, t) : `${e.slice(0, t - n.length).trimEnd()}${n}`;
}, o1 = (e) => e && Object.keys(e).length > 0 ? { ...e } : void 0, a1 = (e, t = {}) => {
  const n = Wa(e.content);
  if (!n) return null;
  const o = t.maxItemLength ?? e1, a = {
    kind: e.kind,
    content: n1(n, o)
  }, s = Wa(e.title), r = Wa(e.source), i = o1(e.metadata);
  return s && (a.title = s), r && (a.source = r), i && (a.metadata = i), a;
}, la = (e, t = {}) => {
  const n = t.maxItems ?? t1, o = e.map((a) => a1(a, t)).filter((a) => !!a).slice(0, Math.max(0, n));
  return o.length > 0 ? { items: o } : void 0;
}, Au = (e, t = {}) => la(e?.items ?? [], t), Ru = (e, t = {}) => la(
  e.flatMap((n) => n?.items ?? []),
  t
), r1 = {
  workspace: "Workspace",
  selection: "Selection",
  search: "Search"
}, s1 = (e, t) => {
  const n = e.title ? ` - ${e.title}` : "", o = e.source ? ` (${e.source})` : "";
  return `### ${t + 1}. ${r1[e.kind]}${n}${o}`;
}, i1 = (e, t = {}) => {
  const n = Au(e, t);
  return n ? [
    "Snippets Code request context. Use these references only when relevant, and treat the user message as the source of intent.",
    ...n.items.map(
      (o, a) => [s1(o, a), o.content].join(`
`)
    )
  ].join(`

`) : "";
}, l1 = (e, t, n = {}) => {
  const o = Ru(
    [e.context, t],
    n
  );
  if (!o) {
    const a = { ...e };
    return delete a.context, a;
  }
  return {
    ...e,
    context: o
  };
}, Ot = "local-ai", Li = {
  auto: "auto-detected language",
  zh: "Simplified Chinese",
  zh_tw: "Traditional Chinese",
  en: "English",
  ja: "Japanese",
  ko: "Korean",
  fr: "French",
  de: "German",
  ru: "Russian",
  es: "Spanish",
  pt_pt: "Portuguese (Portugal)",
  pt_br: "Portuguese (Brazil)",
  vi: "Vietnamese",
  id: "Indonesian",
  th: "Thai",
  ar: "Arabic"
}, u1 = (e) => e && e.split(/[\\/]/).filter(Boolean).pop() || "", Ai = (e) => ({
  providerId: Ot,
  available: e.healthy || e.running || !e.lastError,
  running: e.running,
  healthy: e.healthy,
  modelName: u1(e.modelPath),
  modelPath: e.modelPath,
  runtimePath: e.runtimePath,
  baseUrl: e.baseUrl,
  lastError: e.lastError
}), Mu = (e) => {
  const t = i1(e);
  return t ? { role: "system", content: t } : null;
}, Ri = (e) => {
  const t = Mu(e.context), n = {
    messages: t ? [t, ...e.messages] : e.messages
  };
  return e.temperature !== void 0 && (n.temperature = e.temperature), e.enableThinking !== void 0 && (n.enableThinking = e.enableThinking), e.maxTokens !== void 0 && (n.maxTokens = e.maxTokens), n;
}, c1 = (e) => [
  `Translate from ${Li[e.from] ?? e.from} to ${Li[e.to] ?? e.to}.`,
  "Preserve Markdown, code fences, inline code, URLs, numbers, and line breaks.",
  "Use the Snippets Code request context only to resolve ambiguity.",
  "Return only the translated text, with no explanations."
].join(" "), d1 = (e) => {
  const t = Mu(e.context);
  return {
    temperature: 0.2,
    enableThinking: !1,
    messages: [
      {
        role: "system",
        content: [c1(e), t?.content].filter(Boolean).join(`

`)
      },
      {
        role: "user",
        content: e.text
      }
    ]
  };
}, f1 = {
  id: Ot,
  label: "Local AI",
  pluginId: "local-ai",
  capabilities: ["chat", "vision", "translation"],
  priority: 100,
  async getStatus() {
    try {
      return Ai(await Bw());
    } catch (e) {
      return {
        providerId: Ot,
        available: !1,
        healthy: !1,
        lastError: e instanceof Error ? e.message : String(e)
      };
    }
  },
  async start() {
    return Ai(await Vw());
  },
  async chat(e) {
    const t = await $i(Ri(e));
    return {
      providerId: Ot,
      content: t.content
    };
  },
  async streamChat(e, t, n = {}) {
    const o = await Hw(
      Ri(e),
      t,
      {
        requestId: n.requestId,
        onStats: n.onStats
      }
    );
    return {
      providerId: Ot,
      content: o.content
    };
  },
  async cancelChatStream(e) {
    return await Ww(e);
  },
  async translate(e) {
    if (e.context?.items.length) {
      const t = await $i(
        d1(e)
      );
      return {
        providerId: Ot,
        text: t.content
      };
    }
    return {
      providerId: Ot,
      text: await jw(e.text, e.from, e.to)
    };
  }
}, zu = (e = Ia) => {
  e.get(Ot) || e.register(f1);
};
async function p1(e) {
  try {
    return await E("search_markdown_files_optimized", {
      query: e
    });
  } catch (t) {
    throw new Error(`搜索失败: ${t}`);
  }
}
async function m1() {
  try {
    const e = await E("get_workspace_root_path");
    return e || "";
  } catch (e) {
    const t = e instanceof Error ? e.message : String(e);
    if (t.includes("工作区未设置") || t.includes("工作区未配置"))
      return "";
    throw new Error(`获取工作区路径失败: ${e}`);
  }
}
const h1 = /* @__PURE__ */ new Set([
  "workspace",
  "selection",
  "search"
]), g1 = /* @__PURE__ */ new Set([
  "chat",
  "vision",
  "translation"
]), ja = (e) => `${e.pluginId ?? "core"}:${e.id}`, Nu = (e) => typeof e == "string" && h1.has(e), v1 = (e) => typeof e == "string" && g1.has(e), y1 = (e) => typeof e == "object" && e !== null && Array.isArray(e.items), b1 = (e) => typeof e == "object" && e !== null && Nu(e.kind) && "content" in e, w1 = (e, t) => {
  const n = Array.from(new Set(t));
  if (!n.length || n.some((o) => !Nu(o)))
    throw new Error(`AI context provider ${e} 缺少有效 kind`);
  return n;
}, _1 = (e) => {
  if (!e) return;
  const t = Array.from(new Set(e));
  if (!t.length || t.some((n) => !v1(n)))
    throw new Error("AI context provider 缺少有效 capability");
  return t;
}, S1 = (e, t) => !t || e.kinds.includes(t), k1 = (e, t) => !t || !e.capabilities || e.capabilities.includes(t), C1 = (e, t) => !e.pluginId || !t || t(e.pluginId), P1 = (e) => ({
  maxItemLength: e.maxItemLength,
  maxItems: e.maxItems
}), E1 = (e) => ({
  kind: e.kind,
  capability: e.capability,
  operation: e.operation,
  providerId: e.providerId,
  input: e.input
}), T1 = (e, t, n) => {
  if (t) {
    if (y1(t))
      return Au(t, n);
    if (Array.isArray(t))
      return la(t, n);
    if (b1(t))
      return la([t], n);
    throw new Error(`AI context provider ${e.id} 返回无效上下文`);
  }
};
class I1 {
  constructor() {
    Un(this, "providers", /* @__PURE__ */ new Map());
  }
  register(t) {
    const n = t.id.trim();
    if (!n)
      throw new Error("AI context provider 缺少稳定 id");
    const o = t.pluginId?.trim() || void 0;
    this.providers.set(ja({ id: n, pluginId: o }), {
      ...t,
      id: n,
      pluginId: o,
      kinds: w1(n, t.kinds),
      capabilities: _1(t.capabilities)
    });
  }
  unregisterPlugin(t) {
    for (const [n, o] of Array.from(this.providers.entries()))
      o.pluginId === t && this.providers.delete(n);
  }
  clear() {
    this.providers.clear();
  }
  list(t = {}) {
    return Array.from(this.providers.values()).filter(
      (n) => S1(n, t.kind) && k1(n, t.capability) && C1(n, t.isPluginEnabled)
    ).sort((n, o) => {
      const a = (o.priority ?? 0) - (n.priority ?? 0);
      return a !== 0 ? a : ja(n).localeCompare(ja(o));
    });
  }
  async collect(t = {}) {
    const n = E1(t), o = P1(t), a = await Promise.all(
      this.list(t).map(
        async (s) => T1(
          s,
          await s.collect(n),
          o
        )
      )
    );
    return Ru(a, o);
  }
}
const $1 = () => new I1(), Eo = $1(), O1 = async (e = {}, t = Eo) => t.collect(e), x1 = "workspace", L1 = "selection", A1 = "workspace-search", R1 = 5, M1 = 900, tt = (e, t) => {
  const n = e.input?.[t];
  return (typeof n == "string" ? n.trim() : "") || void 0;
}, Mi = (e, t) => {
  const n = e.input?.[t];
  return typeof n == "number" && Number.isFinite(n) ? n : void 0;
}, z1 = (e, t) => {
  const n = e.input?.[t];
  return n && typeof n == "object" && !Array.isArray(n) ? { ...n } : void 0;
}, qr = (e) => {
  const t = Object.entries(e).filter(
    ([, n]) => n != null && n !== ""
  );
  return t.length ? Object.fromEntries(t) : void 0;
}, N1 = (e) => ({
  id: x1,
  label: "Workspace Context",
  kinds: ["workspace"],
  capabilities: ["chat", "translation"],
  priority: 100,
  async collect(t) {
    const n = [], o = tt(t, "currentContent"), a = tt(t, "currentTitle"), s = tt(t, "currentFilePath");
    o && n.push({
      kind: "workspace",
      title: a ?? "Current workspace item",
      source: s ?? "workspace.current",
      content: o,
      metadata: qr({
        filePath: s,
        type: tt(t, "currentType")
      })
    });
    const i = tt(t, "workspaceRoot") ?? await (e.getWorkspaceRoot ?? m1)().catch(() => "");
    return i && n.push({
      kind: "workspace",
      title: "Workspace root",
      source: "workspace.root",
      content: `Workspace root: ${i}`
    }), n;
  }
}), F1 = () => ({
  id: L1,
  label: "Selection Context",
  kinds: ["selection"],
  capabilities: ["chat", "translation"],
  priority: 120,
  collect(e) {
    const t = tt(e, "selectionText") ?? tt(e, "selectedText");
    if (t)
      return {
        kind: "selection",
        title: tt(e, "selectionTitle") ?? "Current selection",
        source: tt(e, "selectionSource") ?? "selection",
        content: t,
        metadata: qr({
          ...z1(e, "selectionMetadata") ?? {},
          language: tt(e, "selectionLanguage"),
          filePath: tt(e, "selectionFilePath"),
          startLine: Mi(e, "selectionStartLine"),
          endLine: Mi(e, "selectionEndLine")
        })
      };
  }
}), B1 = (e, t, n) => {
  const o = e.trim();
  if (o.length <= n) return o;
  const a = o.toLowerCase(), s = t.toLowerCase().split(/\s+/).find((c) => c.length >= 2), r = s ? a.indexOf(s) : -1, i = r > 0 ? Math.max(0, r - Math.floor(n / 3)) : 0, u = Math.min(o.length, i + n);
  return `${i > 0 ? "..." : ""}${o.slice(i, u)}${u < o.length ? "..." : ""}`;
}, V1 = (e, t) => ({
  kind: "search",
  title: e.title || "Untitled",
  source: e.filePath || e.id,
  content: B1(
    e.content || "",
    t,
    M1
  ),
  metadata: qr({
    filePath: e.filePath,
    category: e.categoryName,
    type: e.type,
    score: e.score
  })
}), D1 = (e) => ({
  id: A1,
  label: "Workspace Search Context",
  kinds: ["search"],
  capabilities: ["chat", "translation"],
  priority: 80,
  async collect(t) {
    const n = tt(t, "query") ?? tt(t, "searchQuery");
    return n ? (await (e.searchMarkdownFiles ?? p1)(n).catch(() => [])).slice(0, R1).map((a) => V1(a, n)) : void 0;
  }
}), H1 = (e, t) => e.list().some((n) => n.id === t && !n.pluginId), W1 = (e = Eo, t = {}) => {
  const n = [
    F1(),
    N1(t),
    D1(t)
  ];
  for (const o of n)
    H1(e, o.id) || e.register(o);
}, j1 = (e) => ({
  query: e.text,
  selectionText: e.text,
  from: e.from,
  to: e.to
}), U1 = (e) => {
  if (!(e === void 0 || e === !1))
    return e === !0 ? {} : e;
}, K1 = async (e, t, n, o, a) => {
  const s = U1(
    e.contextCollection
  );
  if (!s) return;
  const r = e.contextRegistry ?? Eo;
  return e.contextRegistry || W1(r), await O1(
    {
      ...s,
      capability: t,
      operation: n,
      providerId: o,
      isPluginEnabled: e.isPluginEnabled,
      input: {
        ...a,
        ...s.input ?? {}
      }
    },
    r
  );
}, Fu = [
  "chat",
  "vision",
  "translation"
];
new Set(
  Fu
);
const G1 = (e) => typeof e != "string" ? void 0 : e.trim() || void 0, Z1 = (e) => {
  if (!e || typeof e != "object" || Array.isArray(e))
    return {};
  const t = {};
  for (const n of Fu) {
    const o = G1(
      e[n]
    );
    o && (t[n] = o);
  }
  return t;
}, q1 = async () => {
  const e = await iw();
  return Z1(e.ai_provider_preferences);
}, Y1 = async (e, t) => e.providerId ? e.providerId : e.providerPreferences ? e.providerPreferences[t]?.trim() || void 0 : e.registry ? void 0 : (await q1().catch(() => ({})))[t]?.trim() || void 0, Bu = (e, t) => !e.pluginId || !t || t(e.pluginId), X1 = (e, t, n) => !!(e && Bu(e, n.isPluginEnabled) && e.capabilities.includes(t)), J1 = (e, t, n, o) => o ? t.providerId ? e.require(o) : e.get(o) : e.getDefault({
  capability: n,
  isPluginEnabled: t.isPluginEnabled
}), Q1 = (e, t, n) => {
  throw Bu(e, n) ? new Error(`AI provider ${e.id} 不支持 ${t}`) : new Error(`AI provider ${e.id} 当前不可用`);
}, e2 = async (e, t) => {
  const n = e.registry ?? Ia;
  e.registry || zu(n);
  const o = await Y1(
    e,
    t
  ), a = J1(
    n,
    e,
    t,
    o
  );
  if (X1(a, t, e))
    return a;
  e.providerId && a && Q1(a, t, e.isPluginEnabled);
  const s = n.getDefault({
    capability: t,
    isPluginEnabled: e.isPluginEnabled
  });
  if (s) return s;
  throw new Error(`没有可用的 ${t} AI provider`);
}, t2 = async (e, t = {}) => {
  const n = await e2(
    {
      ...t
    },
    "translation"
  );
  if (!n.translate)
    throw new Error(`AI provider ${n.id} 不支持 translate`);
  const o = await K1(
    t,
    "translation",
    "translation",
    n.id,
    j1(e)
  ), a = await n.translate(
    l1(e, o)
  );
  return {
    ...a,
    providerId: a.providerId || n.id
  };
}, zi = (e, t) => ({
  ...t,
  providerId: e,
  available: t.available ?? !1
}), Ni = (e, t) => ({
  ...t,
  providerId: e
}), n2 = (e, t) => ({
  ...t,
  providerId: e
}), o2 = (e, t) => {
  const n = t.id.trim(), o = t.getStatus, a = t.start, s = t.streamChat, r = t.cancelChatStream, i = t.translate;
  zu();
  const u = {
    id: n,
    label: t.label,
    pluginId: e,
    capabilities: t.capabilities,
    priority: t.priority,
    getStatus: o ? async () => zi(n, await o()) : void 0,
    start: a ? async () => zi(n, await a()) : void 0,
    chat: async (c) => Ni(n, await t.chat(c)),
    streamChat: s ? async (c, d, p) => Ni(
      n,
      await s(c, d, p)
    ) : void 0,
    cancelChatStream: r ? async (c) => await r(c) : void 0,
    translate: i ? async (c) => n2(n, await i(c)) : void 0
  };
  Ia.register(u);
}, a2 = (e) => {
  Ia.unregisterPlugin(e);
}, r2 = (e, t) => {
  Eo.register({
    ...t,
    pluginId: e
  });
}, s2 = (e) => {
  Eo.unregisterPlugin(e);
}, Vu = (e) => e.manifest.permissions ?? [], Lt = (e, t) => Vu(e).includes(t), i2 = (e, t) => Lt(e, "command:*") || Lt(e, `command:${t}`), l2 = (e, t) => Lt(e, "backend:*") || Lt(e, `backend:${t}`), Du = (e, t, n) => Lt(e, "capability:*") || Lt(e, `capability:${t}`) || Lt(e, t) || Lt(e, `${t}:*`) || (n ? Lt(e, `${t}:${n}`) : !1), u2 = (e) => {
  const t = e.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`^${t.replace(/\*/g, ".*")}$`);
}, c2 = (e, t) => {
  if (!e.startsWith("network:")) return !1;
  const n = e.slice(8).trim();
  if (!n || n === "*") return !0;
  if (n.includes("*"))
    return u2(n).test(t.href);
  try {
    const o = new URL(n);
    return o.origin === t.origin && o.pathname === "/" && !o.search && !o.hash ? !0 : t.href.startsWith(o.href);
  } catch {
    return !1;
  }
}, d2 = (e, t) => {
  if (Du(e, "network", "fetch")) return !0;
  let n;
  try {
    n = new URL(t);
  } catch {
    return !1;
  }
  return Vu(e).some(
    (o) => c2(o, n)
  );
}, f2 = (e, t) => {
  if (!i2(e, t))
    throw new Error(`插件 ${e.id} 没有调用命令 ${t} 的权限`);
}, p2 = (e, t) => {
  if (!l2(e, t))
    throw new Error(`插件 ${e.id} 没有调用后端命令 ${t} 的权限`);
}, kn = (e, t, n) => {
  if (!Du(e, t, n)) {
    const o = n ? `${t}:${n}` : t;
    throw new Error(`插件 ${e.id} 没有使用 ${o} 能力的权限`);
  }
}, m2 = (e, t) => {
  if (!d2(e, t))
    throw new Error(`插件 ${e.id} 没有访问网络地址 ${t} 的权限`);
}, h2 = (e) => e instanceof URL ? e.href : typeof Request < "u" && e instanceof Request ? e.url : String(e), g2 = async () => Notification.permission !== "default" ? Notification.permission : await Notification.requestPermission(), v2 = (e) => typeof e == "string" ? { content: e } : e, y2 = (e, t) => ({
  async getRoot() {
    return kn(e, "workspace", "read"), await t.invoke("get_workspace_root_path");
  },
  async read(n) {
    return kn(e, "workspace", "read"), await t.invoke("read_markdown_file", { filePath: n });
  },
  async write(n, o) {
    kn(e, "workspace", "write");
    const a = v2(o);
    return await t.invoke("update_markdown_file", {
      filePath: n,
      content: a.content,
      metadata: a.metadata
    });
  }
}), b2 = (e, t) => ({
  async get(n) {
    return await t.invoke("get_local_plugin_data", {
      pluginId: e.id,
      key: n
    }) ?? null;
  },
  async set(n, o) {
    await t.invoke("set_local_plugin_data", {
      pluginId: e.id,
      key: n,
      value: o
    });
  },
  async delete(n) {
    await t.invoke("delete_local_plugin_data", {
      pluginId: e.id,
      key: n
    });
  }
}), w2 = (e) => ({
  registerProvider(t) {
    e.registerSearchProvider(t);
  }
}), _2 = (e) => ({
  async fetch(t, n) {
    const o = h2(t);
    return m2(e, o), await fetch(t, n);
  }
}), Fi = (e) => {
  if (typeof navigator > "u" || !navigator.clipboard)
    throw new Error(`插件 ${e.id} 当前环境不支持剪贴板能力`);
  return navigator.clipboard;
}, S2 = (e) => ({
  async read() {
    return kn(e, "clipboard", "read"), await Fi(e).readText();
  },
  async write(t) {
    kn(e, "clipboard", "write"), await Fi(e).writeText(t);
  }
}), k2 = (e) => ({
  async show(t) {
    if (kn(e, "notification", "show"), typeof Notification > "u")
      throw new Error(`插件 ${e.id} 当前环境不支持通知能力`);
    if (await g2() !== "granted")
      throw new Error(`插件 ${e.id} 没有通知授权`);
    new Notification(t.title, {
      body: t.body,
      icon: t.icon
    });
  }
}), C2 = (e) => ({
  create(t) {
    const { shortcutLabel: n, closeCommandLabel: o, ...a } = t;
    e.registerRoute({
      ...a,
      target: "window"
    }), n && e.registerWindowShortcut({
      label: n,
      closeCommandLabel: o
    });
  },
  registerShortcut(t) {
    e.registerWindowShortcut(t);
  }
}), P2 = (e, t) => ({
  workspace: y2(e, t),
  storage: b2(e, t),
  search: w2(t),
  ai: {
    registerProvider: (n) => t.registerAiProvider(n),
    registerContextProvider: (n) => t.registerAiContextProvider(n)
  },
  network: _2(e),
  clipboard: S2(e),
  notification: k2(e),
  window: C2(t)
}), Cn = [
  { id: "attachment", labelKey: "settings.attachment.menu", icon: qc }
], ir = {
  attachment: pr(
    () => Promise.resolve().then(() => hk)
  )
}, Pn = [], Ko = [], En = [], lr = [], ur = [], cr = [], Go = /* @__PURE__ */ new Set(), ua = /* @__PURE__ */ new Map(), ca = /* @__PURE__ */ new Map(), Bi = /* @__PURE__ */ new Map(), E2 = /* @__PURE__ */ new Set(), Vi = /* @__PURE__ */ new Map(), Fn = /* @__PURE__ */ new Map(), da = /* @__PURE__ */ new Set(), fa = /* @__PURE__ */ new Set(), $a = (e) => e.replace(/^[\\/]+|[\\/]+$/g, ""), T2 = (e) => !!e && !e.includes("://") && !e.startsWith("/") && !/^[a-zA-Z]:[\\/]/.test(e) && !$a(e).split(/[\\/]+/).includes(".."), I2 = (e, t) => {
  if (!e.packagePath)
    throw new Error(`插件 ${e.id} 缺少 packagePath`);
  if (!T2(t))
    throw new Error(
      `插件 ${e.id} 使用了不安全的资源路径: ${t}`
    );
  return `${e.packagePath.replace(/[\\/]+$/g, "")}/${$a(t)}`;
}, Hn = (e, t) => yu(I2(e, t)), $2 = (e) => {
  const t = $a(e).split(/[\\/]+/);
  return t.pop(), t.join("/");
}, Hu = (e) => {
  const t = /^([^?#]*)([?#].*)?$/.exec(e);
  return {
    path: t?.[1] ?? e,
    suffix: t?.[2] ?? ""
  };
}, O2 = (e, t) => {
  const { path: n } = Hu(t), o = [
    ...$a(e).split(/[\\/]+/),
    ...n.split(/[\\/]+/)
  ], a = [];
  for (const s of o)
    if (!(!s || s === ".")) {
      if (s === "..") {
        if (!a.length)
          throw new Error(`插件资源路径越界: ${t}`);
        a.pop();
        continue;
      }
      a.push(s);
    }
  return a.join("/");
}, Wu = (e, t, n) => {
  const { suffix: o } = Hu(n), a = O2(
    $2(t),
    n
  );
  return `${Hn(e, a)}${o}`;
}, x2 = /url\(\s*(['"]?)(.*?)\1\s*\)/gi, L2 = (e) => !e || e.startsWith("#") || e.startsWith("/") || e.startsWith("//") || e.startsWith("var(") || /^[a-z][a-z\d+.-]*:/i.test(e), A2 = (e, t, n) => n.replace(
  x2,
  (o, a, s) => {
    const r = s.trim();
    return L2(r) ? o : `url("${Wu(
      e,
      t,
      r
    )}")`;
  }
), R2 = [
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
], M2 = {
  vue: {
    moduleKey: "vue",
    runtime: yc,
    exportNames: R2
  },
  pinia: {
    moduleKey: "pinia",
    runtime: Bc
  },
  "vue-router": {
    moduleKey: "vueRouter",
    runtime: Vc
  },
  "vue-i18n": {
    moduleKey: "vueI18n",
    runtime: Fc
  }
}, z2 = /^[A-Za-z_$][\w$]*$/, N2 = (e, t, n, o) => {
  const s = (o ?? Object.keys(n)).filter(
    (r) => r !== "default" && r !== "__esModule" && z2.test(r)
  ).map((r) => `export const ${r} = Runtime[${JSON.stringify(r)}];`).join(`
`);
  return [
    `const Runtime = globalThis.${e}[${JSON.stringify(t)}];`,
    "export default Runtime;",
    s
  ].join(`
`);
}, F2 = (e) => {
  const t = M2[e];
  if (!t) return null;
  const n = Bi.get(e);
  if (n) return n;
  const o = "__SNIPPETS_CODE_PLUGIN_SHARED__", a = globalThis;
  a[o] = {
    ...a[o] ?? {},
    [t.moduleKey]: t.runtime
  };
  const s = N2(
    o,
    t.moduleKey,
    t.runtime,
    t.exportNames
  ), r = URL.createObjectURL(
    new Blob([s], { type: "text/javascript" })
  );
  return Bi.set(e, r), r;
}, B2 = (e, t, n) => {
  const o = (a) => {
    const s = F2(a);
    return s || (!a.startsWith("./") && !a.startsWith("../") ? a : Wu(e, t, a));
  };
  return n.replace(
    /((?:import|export)\s+(?:[^'"]*?\s+from\s*)?)(['"])([^'"]+)\2/g,
    (a, s, r, i) => `${s}${r}${o(i)}${r}`
  ).replace(
    /(import\s*\(\s*)(['"])([^'"]+)\2(\s*\))/g,
    (a, s, r, i, u) => `${s}${r}${o(i)}${r}${u}`
  );
}, V2 = (e, t) => {
  const n = ca.get(e) ?? [];
  n.push(t), ca.set(e, n);
}, D2 = (e) => {
  (ca.get(e) ?? []).forEach((n) => URL.revokeObjectURL(n)), ca.delete(e);
}, H2 = async (e, t) => {
  const n = Hn(e, t), o = await fetch(n);
  if (!o.ok)
    throw new Error(
      `插件 ${e.id} 前端入口读取失败: ${o.status} ${o.statusText}`
    );
  const a = await o.text(), s = B2(
    e,
    t,
    a
  ), r = URL.createObjectURL(
    new Blob([s], { type: "text/javascript" })
  );
  return V2(String(e.id), r), await import(
    /* @vite-ignore */
    r
  );
}, W2 = (e) => async (t, n, o) => (f2(e, t), E(t, n, o)), j2 = (e) => async (t, n = null) => (p2(e, t), await E("invoke_plugin_backend", {
  pluginId: e.id,
  command: t,
  payload: n
})), Zo = (e, t) => {
  const n = Fn.get(e) ?? /* @__PURE__ */ new Set();
  n.add(t), Fn.set(e, n);
}, U2 = (e, t) => {
  const n = Fn.get(e);
  n && (n.delete(t), n.size === 0 && Fn.delete(e));
}, K2 = (e) => {
  const t = Array.from(Fn.get(e) ?? []);
  Fn.delete(e);
  for (const n of t)
    try {
      n();
    } catch (o) {
      B.warn(`[PluginRuntime] 清理插件运行时失败: ${e}`, o);
    }
}, G2 = (e) => async (...t) => {
  const n = String(e.id), o = await rt(...t);
  let a = !0;
  const s = () => {
    a && (a = !1, U2(n, s), o());
  };
  return Zo(n, s), s;
}, Ua = (e, t, n) => {
  if (t) return os(t);
  if (!n)
    throw new Error(
      `插件 ${e.id} 注册组件时缺少 component 或 componentUrl`
    );
  return os(
    pr(
      () => import(
        /* @vite-ignore */
        Hn(e, n)
      )
    )
  );
}, Z2 = (e, t, n) => {
  if (t) {
    const o = t.__asyncLoader;
    return typeof o == "function" ? () => o() : t;
  }
  if (!n)
    throw new Error(
      `插件 ${e.id} 注册路由组件时缺少 component 或 componentUrl`
    );
  return () => import(
    /* @vite-ignore */
    Hn(e, n)
  );
}, q2 = (e, t) => {
  if (e === "config") {
    lr.push(t);
    return;
  }
  if (e === "window") {
    cr.push(t);
    return;
  }
  ur.push(t);
}, Ka = (e, t) => {
  for (let n = e.length - 1; n >= 0; n -= 1)
    e[n].meta?.pluginId === t && e.splice(n, 1);
}, Xn = (e, t, n) => {
  const o = e[t] ?? [];
  o.includes(n) || (e[t] = [...o, n]), e.manifest.capabilities = {
    ...e.manifest.capabilities,
    [t]: e[t]
  };
}, pa = (e, t) => `${e}:${t}`, Y2 = (e) => {
  const t = (d) => {
    const p = d.target ?? "layout";
    Xn(e, "routeNames", d.name);
    const h = {
      path: d.path,
      name: d.name,
      component: Z2(
        e,
        d.component,
        d.componentUrl
      ),
      meta: {
        ...d.meta,
        pluginId: e.id
      }
    };
    q2(p, h);
  }, n = (d) => {
    const p = d.labelKey ?? `plugins.${e.id}.${d.id}`, h = {
      id: d.id,
      pluginId: String(e.id),
      labelKey: p,
      label: d.label,
      icon: d.icon ?? Xc
    }, m = pa(String(e.id), d.id), f = Cn.findIndex(
      (S) => S.id === d.id && S.pluginId === String(e.id)
    ), g = Ua(e, d.component, d.componentUrl);
    f === -1 ? (Cn.push(h), ir[d.id] = g, da.add(m)) : da.has(m) && (Cn[f] = h, ir[d.id] = g), Xn(e, "settingsTabs", d.id);
  }, o = (d) => {
    const p = {
      pluginId: e.id,
      source: d.source,
      phase: d.phase,
      search: d.search
    };
    qw(p), Xn(e, "searchSources", d.source);
  }, a = (d) => {
    o2(String(e.id), d), Xn(e, "aiProviders", d.id.trim());
  }, s = (d) => {
    r2(String(e.id), d), Xn(e, "aiContextProviders", d.id.trim());
  }, r = (d) => {
    const p = pa(
      String(e.id),
      d.id
    ), h = Pn.findIndex(
      (f) => f.id === d.id && f.pluginId === e.id
    ), m = {
      id: d.id,
      pluginId: e.id,
      component: Ua(e, d.component, d.componentUrl)
    };
    h === -1 ? (Pn.push(m), fa.add(p)) : fa.has(p) && (Pn[h] = m);
  }, i = (d) => {
    Ko.push({
      label: d.label,
      pluginId: e.id,
      closeCommandLabel: d.closeCommandLabel
    });
  }, u = (d) => {
    const p = d.target ?? "config", h = {
      id: d.id,
      pluginId: e.id,
      target: p,
      component: Ua(
        e,
        d.component,
        d.componentUrl
      )
    }, m = En.findIndex(
      (f) => f.pluginId === e.id && f.id === d.id && f.target === p
    );
    m === -1 ? En.push(h) : En[m] = h;
  }, c = P2(e, {
    invoke: E,
    registerRoute: t,
    registerSearchProvider: o,
    registerAiProvider: a,
    registerAiContextProvider: s,
    registerWindowShortcut: i
  });
  return {
    pluginId: String(e.id),
    packagePath: e.packagePath ?? "",
    manifest: e.manifest,
    resolveAssetUrl: (d) => Hn(e, d),
    api: {
      invoke: W2(e),
      invokeBackend: j2(e),
      listen: G2(e),
      emit: wu
    },
    ui: {
      h: Qi,
      defineComponent: G
    },
    ...c,
    registerRoute: t,
    registerSettingsTab: n,
    registerSearchProvider: o,
    registerAiProvider: a,
    registerAiContextProvider: s,
    registerTitlebarAction: r,
    registerWindowShortcut: i,
    registerHostComponent: u
  };
}, X2 = async (e, t) => {
  const n = t.activate ?? (typeof t.default == "function" ? t.default : t.default?.activate);
  if (typeof n != "function")
    throw new Error(`插件 ${e.id} 的前端入口没有导出 activate(context)`);
  const o = await n(Y2(e)), a = String(e.id);
  if (typeof o == "function") {
    Zo(a, o);
    return;
  }
  typeof o?.deactivate == "function" && Zo(a, o.deactivate), typeof o?.dispose == "function" && Zo(a, o.dispose);
}, J2 = async (e) => {
  const t = String(e.id), n = e.manifest.entry?.styles ?? [];
  if (!n.length) {
    Yr(t);
    return;
  }
  const o = JSON.stringify({
    packagePath: e.packagePath,
    installedAt: e.installedAt,
    version: e.manifest.version,
    styles: n
  }), a = ua.get(t);
  if (a?.signature === o && a.elements.length === n.length && a.elements.every((r) => r.isConnected))
    return;
  const s = [];
  try {
    for (const r of n) {
      const i = Hn(e, r), u = await fetch(i);
      if (!u.ok)
        throw new Error(
          `插件 ${e.id} 样式读取失败: ${u.status} ${u.statusText}`
        );
      const c = await u.text(), d = document.createElement("style");
      d.textContent = A2(
        e,
        r,
        c
      ), d.dataset.pluginId = t, d.dataset.pluginStyle = r, document.head.appendChild(d), s.push(d);
    }
    a?.elements.forEach((r) => r.remove()), ua.set(t, { signature: o, elements: s }), B.info("[PluginRuntime] 插件样式已加载", {
      pluginId: t,
      styles: n
    });
  } catch (r) {
    throw s.forEach((i) => i.remove()), r;
  }
}, Yr = (e) => {
  ua.get(e)?.elements.forEach((n) => n.remove()), ua.delete(e);
}, Q2 = [
  "routeNames",
  "settingsTabs",
  "searchSources",
  "aiProviders",
  "aiContextProviders",
  "titlebarActions",
  "windows"
], e_ = (e) => {
  if (e.resourceFor || e.manifest.resourceFor || e.manifest.resources)
    return !1;
  const t = e.manifest.capabilities;
  return Q2.some((n) => {
    const o = t?.[n];
    return Array.isArray(o) && o.length > 0;
  });
}, t_ = async (e, t) => {
  for (const n of e)
    if (n.source === "local" && t(String(n.id)) && !Go.has(String(n.id))) {
      if (n.manifest.entry?.frontend) {
        try {
          await J2(n);
          const o = await H2(
            n,
            n.manifest.entry.frontend
          );
          await X2(n, o), Go.add(String(n.id));
        } catch (o) {
          ju(String(n.id)), Yr(String(n.id)), B.warn(`[PluginRuntime] 加载本地插件失败: ${n.id}`, o);
        }
        continue;
      }
      Go.add(String(n.id)), e_(n) && B.warn(`[PluginRuntime] 本地插件缺少前端入口: ${n.id}`);
    }
};
function ju(e, t = {}) {
  K2(e), Go.delete(e), t.preserveStyles || Yr(e), D2(e);
  for (const [
    n,
    o
  ] of Vi.entries())
    [
      ...lr,
      ...ur,
      ...cr
    ].some(
      (s) => s.name === n && s.meta?.pluginId === e
    ) && (o(), E2.delete(n), Vi.delete(n));
  Ka(lr, e), Ka(ur, e), Ka(cr, e);
  for (let n = Cn.length - 1; n >= 0; n -= 1) {
    const o = Cn[n], a = pa(e, o.id);
    o.pluginId === e && da.has(a) && (delete ir[o.id], Cn.splice(n, 1), da.delete(a));
  }
  Yw(e), a2(e), s2(e);
  for (let n = Pn.length - 1; n >= 0; n -= 1) {
    const o = Pn[n], a = pa(e, o.id);
    o.pluginId === e && fa.has(a) && (Pn.splice(n, 1), fa.delete(a));
  }
  for (let n = Ko.length - 1; n >= 0; n -= 1)
    Ko[n].pluginId === e && Ko.splice(n, 1);
  for (let n = En.length - 1; n >= 0; n -= 1)
    En[n].pluginId === e && En.splice(n, 1);
}
let Jn = null, rn = null, Qn = null, Di = Promise.resolve();
const n_ = async () => {
  const e = Di;
  let t;
  return Di = new Promise((n) => {
    t = n;
  }), await e, t;
}, Hi = (e, t) => {
  globalThis.setTimeout(e, t);
}, Wi = (e) => e.replace(/^v/i, "").split(".").map((t) => Number.parseInt(t, 10)).map((t) => Number.isFinite(t) ? t : 0), o_ = (e, t) => {
  const n = Wi(e), o = Wi(t), a = Math.max(n.length, o.length);
  for (let s = 0; s < a; s += 1) {
    const r = (n[s] ?? 0) - (o[s] ?? 0);
    if (r !== 0) return r;
  }
  return 0;
}, a_ = (e) => !!(e && e !== "installed" && e !== "failed"), ji = (e) => Array.isArray(e.dependencies) ? e.dependencies.filter(
  (t) => typeof t == "string" && !!t.trim()
) : [], Ui = (e) => JSON.stringify({
  id: e.id,
  source: e.source,
  packagePath: e.packagePath,
  installedAt: e.installedAt,
  version: e.manifest.version,
  entry: e.manifest.entry,
  capabilities: e.manifest.capabilities,
  dependencies: e.manifest.dependencies,
  resourceFor: e.resourceFor
}), r_ = (e, t) => Ui(e) !== Ui(t), Ki = (e, t) => {
  const n = e.reduce(
    (o, a) => (o[a.id] = a.enabledByDefault, o),
    { ...xu }
  );
  if (!t)
    return n;
  for (const o of e) {
    const a = t[o.id];
    typeof a == "boolean" && (n[o.id] = a);
  }
  return n;
}, s_ = wo("plugins", {
  state: () => ({
    enabled: { ...xu },
    installedPlugins: ia,
    initialized: !1,
    resourceStatusByPluginId: {},
    runtimeRevision: 0,
    stateUnlisten: null,
    installProgressUnlisten: null,
    installProgressByPackageUrl: {},
    installPhaseByPackageUrl: {},
    marketplaceInstallRequests: {}
  }),
  getters: {
    plugins: (e) => e.installedPlugins,
    visiblePlugins: (e) => e.installedPlugins.filter((t) => !t.resourceFor),
    resourcesForPlugin: (e) => (t) => e.installedPlugins.filter(
      (n) => n.resourceFor === t
    ),
    isInstalled: (e) => (t) => e.installedPlugins.some((n) => n.id === t),
    isEnabled: (e) => (t) => e.installedPlugins.some((n) => n.id === t) ? e.enabled[t] ?? !0 : !1,
    isPackageInstalling: (e) => (t) => !!(t && a_(e.installPhaseByPackageUrl[t])),
    isMarketplaceInstallRequested: (e) => (t) => !!e.marketplaceInstallRequests[t]
  },
  actions: {
    async initialize() {
      if (this.initialized) {
        await Promise.all([
          this.ensureStateListener(),
          this.ensureInstallProgressListener()
        ]);
        return;
      }
      if (Jn) {
        await Jn;
        return;
      }
      Jn = (async () => {
        try {
          B.info("[PluginStore] initialize start"), await this.reconcileInstalledPlugins("initialize", [], {
            loadRuntimeEntries: !1,
            refreshResourceStatus: !1
          }), B.info("[PluginStore] initialize complete", {
            plugins: this.installedPlugins.map((e) => ({
              id: e.id,
              source: e.source,
              enabled: this.isEnabled(e.id),
              packagePath: e.packagePath
            }))
          });
        } catch (e) {
          B.warn("[PluginStore] 加载插件状态失败，使用默认状态", e), this.installedPlugins = ia, this.enabled = Ki(
            this.installedPlugins,
            this.enabled
          );
        } finally {
          this.initialized = !0, await Promise.all([
            this.ensureStateListener(),
            this.ensureInstallProgressListener()
          ]);
        }
        Hi(
          () => this.loadEnabledPluginEntriesInBackground(),
          600
        ), Hi(
          () => this.refreshPluginResourceStatusInBackground(),
          1200
        );
      })();
      try {
        await Jn;
      } finally {
        Jn = null;
      }
    },
    async refreshInstalledPlugins() {
      await this.reconcileInstalledPlugins("manual-refresh");
    },
    async reconcileInstalledPlugins(e, t = [], n = {}) {
      const o = await n_();
      try {
        if (rn)
          try {
            await rn;
          } catch (f) {
            B.warn(
              "[PluginStore] 等待上一轮插件前端加载失败，继续重新注册",
              f
            );
          }
        const { refreshResourceStatus: a = !0, loadRuntimeEntries: s = !0 } = n;
        B.info("[PluginStore] reconcile installed plugins start", {
          reason: e
        });
        const r = this.installedPlugins, i = new Map(
          r.map((f) => [String(f.id), f])
        ), u = await hw(), c = Ou(u), d = new Map(
          c.map((f) => [String(f.id), f])
        ), p = new Set(t);
        for (const f of r) {
          if (f.source !== "local") continue;
          const g = String(f.id), S = d.get(g);
          (!S || r_(f, S)) && p.add(g);
        }
        this.installedPlugins = c;
        const h = await mw(), m = Object.fromEntries(
          Object.entries(this.enabled).filter(
            ([f]) => i.has(f) && d.has(f)
          )
        );
        this.enabled = Ki(this.installedPlugins, {
          ...m,
          ...h
        }), this.installedPlugins.filter(
          (f) => f.source === "local" && !this.isEnabled(f.id)
        ).forEach((f) => p.add(String(f.id))), p.forEach((f) => {
          const g = d.get(f);
          ju(f, {
            preserveStyles: !!(g?.source === "local" && this.isEnabled(f))
          });
        }), a && await this.refreshPluginResourceStatus(), s && await this.loadEnabledPluginEntries(), B.info("[PluginStore] reconcile installed plugins complete", {
          reason: e,
          resetPluginIds: Array.from(p),
          plugins: this.installedPlugins.map((f) => ({
            id: f.id,
            source: f.source,
            enabled: this.isEnabled(f.id),
            hotkeys: f.hotkeys,
            packagePath: f.packagePath
          }))
        });
      } finally {
        o();
      }
    },
    async installFromPath(e, t = !1) {
      B.info("[PluginStore] install from path start", {
        sourcePath: e,
        overwrite: t
      });
      const n = await gw(
        e,
        t
      );
      B.info("[PluginStore] install from path complete", {
        pluginId: n.manifest.id,
        packagePath: n.packagePath
      }), await this.reconcileInstalledPlugins("install-path", [
        String(n.manifest.id)
      ]);
    },
    async installFromUrl(e, t = !1, n, o, a, s, r) {
      B.info("[PluginStore] install from url start", {
        packageUrl: e,
        overwrite: t,
        packageSubdir: n,
        expectedSizeBytes: o,
        hasExpectedSha256: !!a,
        pluginId: r,
        mirrorCount: s?.length ?? 0
      });
      const i = await Tu(
        e,
        t,
        n,
        o,
        a,
        s,
        r
      );
      B.info("[PluginStore] install from url complete", {
        pluginId: i.manifest.id,
        packagePath: i.packagePath,
        packageUrl: e
      }), await this.reconcileInstalledPlugins("install-url", [
        String(i.manifest.id)
      ]);
    },
    async uninstall(e, t = !1) {
      B.info("[PluginStore] uninstall start", { pluginId: e, deleteData: t });
      try {
        await ww(e, t);
      } finally {
        await this.reconcileInstalledPlugins("uninstall", [String(e)]);
      }
      B.info("[PluginStore] uninstall complete", { pluginId: e, deleteData: t });
    },
    applyPluginStateChanged({
      pluginId: e,
      enabled: t,
      installed: n
    }) {
      if (n === !1) {
        this.installedPlugins = this.installedPlugins.filter(
          (o) => o.id !== e
        ), delete this.enabled[e];
        return;
      }
      (this.installedPlugins.some((o) => o.id === e) || Nw(e)) && (this.enabled[e] = t);
    },
    async ensureStateListener() {
      if (!this.stateUnlisten)
        try {
          this.stateUnlisten = await rt(
            "plugin-state-changed",
            async (e) => {
              const { pluginId: t, enabled: n } = e.payload;
              this.applyPluginStateChanged(e.payload), await this.reconcileInstalledPlugins(
                "backend-state-event",
                n ? [] : [t]
              );
            }
          );
        } catch (e) {
          B.warn("[PluginStore] 监听插件状态变化失败", e);
        }
    },
    setInstallProgress(e) {
      const t = this.installProgressByPackageUrl[e.packageUrl];
      t && Number(t.updatedAt || 0) > Number(e.updatedAt || 0) || (this.installProgressByPackageUrl[e.packageUrl] = e, this.installPhaseByPackageUrl[e.packageUrl] !== e.phase && (this.installPhaseByPackageUrl[e.packageUrl] = e.phase));
    },
    async ensureInstallProgressListener() {
      if (!this.installProgressUnlisten)
        try {
          this.installProgressUnlisten = await rt(
            "plugin-install-progress",
            (t) => {
              const n = t.payload;
              this.setInstallProgress(n), B.info("[PluginStore] install progress", n), n.phase === "installed" ? (n.pluginId && (this.marketplaceInstallRequests[n.pluginId] = !1), this.reconcileInstalledPlugins(
                "install-progress-installed",
                n.pluginId ? [n.pluginId] : []
              ).catch((o) => {
                B.warn("[PluginStore] 安装完成后刷新插件清单失败", o);
              })) : n.phase === "failed" && n.pluginId && (this.marketplaceInstallRequests[n.pluginId] = !1);
            }
          ), (await vw()).forEach((t) => this.setInstallProgress(t));
        } catch (e) {
          B.warn("[PluginStore] 监听插件安装任务失败", e);
        }
    },
    setMarketplaceInstallRequested(e, t) {
      this.marketplaceInstallRequests = {
        ...this.marketplaceInstallRequests,
        [e]: t
      };
    },
    async setEnabled(e, t) {
      const n = this.enabled[e];
      this.enabled[e] = t;
      try {
        B.info("[PluginStore] set enabled start", { pluginId: e, enabled: t }), await _w(e, t), await this.reconcileInstalledPlugins(
          "set-enabled",
          t ? [] : [String(e)]
        ), B.info("[PluginStore] set enabled complete", {
          pluginId: e,
          enabled: t
        });
      } catch (o) {
        throw typeof n == "boolean" ? this.enabled[e] = n : delete this.enabled[e], n && await this.loadEnabledPluginEntries(), B.error("[PluginStore] 保存插件状态失败", {
          pluginId: e,
          enabled: t,
          error: o
        }), o;
      }
    },
    async loadEnabledPluginEntries() {
      if (rn) {
        await rn;
        return;
      }
      rn = (async () => {
        await t_(
          this.installedPlugins,
          (e) => this.isEnabled(e)
        ), this.runtimeRevision += 1;
      })();
      try {
        await rn;
      } finally {
        rn = null;
      }
    },
    loadEnabledPluginEntriesInBackground() {
      this.loadEnabledPluginEntries().catch((e) => {
        B.warn("[PluginStore] 后台加载插件前端入口失败", e);
      });
    },
    shouldInstallMarketplaceItem(e) {
      const t = this.installedPlugins.find(
        (n) => n.id === e.id
      );
      return !t || t.source === "local" && o_(e.version, t.manifest.version) > 0;
    },
    async installMarketplaceItemWithDependencies(e, t, n = {}, o = /* @__PURE__ */ new Set()) {
      if (o.has(e.id))
        throw new Error(
          n.formatCircularDependencyError?.(e) ?? `Circular plugin dependency: ${e.id}`
        );
      o.add(e.id);
      try {
        for (const a of ji(e)) {
          const s = t.find(
            (r) => r.id === a
          );
          if (!s)
            throw new Error(
              n.formatMissingDependencyError?.(a) ?? `Missing plugin dependency: ${a}`
            );
          if (n.isCompatible && !n.isCompatible(s)) {
            const r = s.name?.fallback || s.name?.i18nKey || s.id;
            throw new Error(
              n.formatIncompatibleDependencyError?.(s) ?? `Incompatible plugin dependency: ${r}`
            );
          }
          this.shouldInstallMarketplaceItem(s) && await this.installMarketplaceItemWithDependencies(
            s,
            t,
            n,
            o
          );
        }
        if (e.packageUrl && this.shouldInstallMarketplaceItem(e)) {
          n.onInstallingPackage?.(e);
          const a = e.mirrorUrls && e.mirrorUrls.length > 0 ? e.mirrorUrls : [pw(e.packageUrl)];
          B.info("[PluginStore] marketplace lifecycle install package", {
            pluginId: e.id,
            packageUrl: e.packageUrl,
            packageSubdir: e.packageSubdir,
            dependencies: ji(e),
            mirrorCount: a.length
          }), await this.installFromUrl(
            e.packageUrl,
            !0,
            e.packageSubdir,
            e.sizeBytes,
            e.sha256,
            a,
            e.id
          );
        }
      } finally {
        o.delete(e.id);
      }
    },
    async refreshPluginResourceStatus() {
      if (Qn) {
        await Qn;
        return;
      }
      Qn = (async () => {
        const e = {}, t = (n) => this.installedPlugins.some(
          (o) => o.id === n || o.resourceFor === n
        );
        if (t("screenshot"))
          try {
            const n = await Sw();
            e[n.pluginId] = n;
          } catch (n) {
            B.warn("[PluginStore] 获取截图插件资源状态失败", n);
          }
        if (t("translation")) {
          const n = "resources/transformers/transformers.min.js", o = ["translation-offline-runtime", "translation"];
          let a = null, s;
          for (const r of o)
            if (a = await Iu(
              r,
              n
            ), a) {
              s = `plugin:${r}:${n}`;
              break;
            }
          e.translation = {
            pluginId: "translation",
            resourceId: "offline-transformers-runtime",
            available: !!a,
            source: s,
            path: a ?? void 0,
            searchedPaths: o.map(
              (r) => `plugins/${r}/${n}`
            )
          };
        }
        if (t("screen-recorder") && this.isEnabled("screen-recorder"))
          try {
            const n = await kw();
            e["screen-recorder"] = {
              pluginId: "screen-recorder",
              resourceId: "ffmpeg",
              available: n.available,
              source: n.source,
              path: n.path,
              searchedPaths: n.searchedPaths
            };
          } catch (n) {
            B.warn("[PluginStore] 获取录屏 FFmpeg 资源状态失败", n);
          }
        if (t("local-ai") && this.isEnabled("local-ai"))
          try {
            const n = await Fw();
            e["local-ai"] = {
              pluginId: "local-ai",
              resourceId: "llama-runtime",
              available: n.available,
              source: n.source,
              path: n.path,
              searchedPaths: n.searchedPaths
            };
          } catch (n) {
            B.warn(
              "[PluginStore] 获取本地 AI llama.cpp 资源状态失败",
              n
            );
          }
        this.resourceStatusByPluginId = e;
      })();
      try {
        await Qn;
      } finally {
        Qn = null;
      }
    },
    refreshPluginResourceStatusInBackground() {
      this.refreshPluginResourceStatus().catch((e) => {
        B.warn("[PluginStore] 后台刷新插件资源状态失败", e);
      });
    }
  },
  persist: {
    pick: ["enabled"]
  }
}), i_ = wo("configuration", {
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
    // 快捷键 —— 委托给 useHotkeyStore，此处保留以兼容现有组件
    searchHotkey: "",
    configHotkey: "",
    translateHotkey: "",
    selectionTranslateHotkey: "",
    screenshotHotkey: "",
    screenRecorderHotkey: "",
    darkModeHotkey: "",
    wallpaperSwitcherHotkey: "",
    pluginHotkeys: {},
    theme: "auto",
    // 主题
    systemPrefersDark: !1,
    // 系统是否深色
    language: "zh-CN",
    // 界面语言
    autoStart: !1,
    // 开机自启
    autoUpdateCheck: !1,
    // 检查更新
    autoHideOnBlur: !0,
    // 搜索窗口失焦时是否自动隐藏
    editorLineHeight: 1.6
    // 编辑器行距
  }),
  getters: {
    /** 当前实际是否为深色模式（委托给 useThemeStore） */
    effectiveDark() {
      return qn().effectiveDark;
    }
  },
  actions: {
    // 初始化配置
    async initialize() {
      const e = cw();
      await e.initialize(), this.searchHotkey = e.searchHotkey, this.configHotkey = e.configHotkey, this.translateHotkey = e.translateHotkey, this.selectionTranslateHotkey = e.selectionTranslateHotkey, this.screenshotHotkey = e.screenshotHotkey, this.screenRecorderHotkey = e.screenRecorderHotkey, this.darkModeHotkey = e.darkModeHotkey, this.wallpaperSwitcherHotkey = e.wallpaperSwitcherHotkey, this.pluginHotkeys = e.pluginHotkeys;
      const t = qn();
      this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
      try {
        this.autoUpdateCheck = await E("get_auto_update_check");
      } catch (n) {
        B.error("获取自动检查失败:", n);
      }
      try {
        this.autoHideOnBlur = await E("get_auto_hide_on_blur");
      } catch (n) {
        B.error("获取自动失焦隐藏设置:", n);
      }
      try {
        const n = await E("get_language");
        n && (n === "zh-CN" || n === "en-US") && (this.language = n);
      } catch (n) {
        B.error("获取语言设置失败:", n);
      }
      try {
        const n = await lw();
        this.editorLineHeight = n.lineHeight || 1.6;
      } catch (n) {
        B.error("获取编辑器显示设置失败:", n);
      }
    },
    async updateEditorLineHeight(e) {
      const t = this.editorLineHeight, n = Math.min(2, Math.max(1.2, Number(e) || 1.6));
      this.editorLineHeight = n;
      try {
        await uw({
          // 行号仅属于代码片段编辑器；保留字段以兼容已有配置格式。
          lineNumbers: !1,
          lineHeight: n
        });
      } catch (o) {
        throw this.editorLineHeight = t, B.error("更新编辑器行距设置失败:", o), o;
      }
    },
    // 更新主题并立即应用（委托给 useThemeStore）
    updateTheme(e) {
      const t = qn();
      t.updateTheme(e), this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
    },
    // 应用主题到DOM（委托给 useThemeStore）
    applyTheme() {
      const e = qn();
      e.theme = this.theme, e.applyTheme(), this.systemPrefersDark = e.systemPrefersDark;
    },
    // 同步系统主题样式（委托给 useThemeStore）
    syncSystemThemeStyle(e) {
      const t = qn();
      t.syncSystemThemeStyle(e), this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
    }
  },
  persist: {
    pick: ["theme"]
  }
}), l_ = "resources/transformers/transformers.min.js", u_ = [
  "translation-offline-runtime",
  "translation"
], c_ = "https://huggingface.co/", d_ = "{model}/resolve/{revision}/", f_ = "/__snippets_code_disabled_transformers_local_models__/", Uu = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
], p_ = [
  l_,
  ...Uu.map(
    (e) => `resources/transformers/${e}`
  )
];
let eo = null;
async function Ku() {
  const e = [];
  for (const t of u_) {
    const n = await Promise.all(
      p_.map(
        (o) => Iu(t, o)
      )
    );
    n.every(
      (o) => !!o
    ) && e.push({ pluginId: t, runtimePath: n[0] });
  }
  return e;
}
const m_ = (e) => {
  const t = e.toLowerCase();
  return [
    { index: e.lastIndexOf("/"), length: 1 },
    { index: e.lastIndexOf("\\"), length: 1 },
    { index: t.lastIndexOf("%5c"), length: 3 },
    { index: t.lastIndexOf("%2f"), length: 3 }
  ].reduce(
    (o, a) => a.index > o.index ? a : o,
    { index: -1, length: 0 }
  );
}, h_ = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, o = m_(n);
  return o.index >= 0 ? n.slice(0, o.index + o.length) : n;
}, g_ = (e) => {
  const t = h_(e);
  return Object.fromEntries(
    Uu.map((n) => [
      n,
      `${t}${n}`
    ])
  );
}, v_ = (e, t) => {
  var n, o;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = c_, e.remotePathTemplate = d_, e.allowLocalModels = !1, e.localModelPath = f_, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (o = e.backends.onnx).wasm ?? (o.wasm = {}), e.backends.onnx.wasm.wasmPaths = g_(t), e.backends.onnx.wasm.numThreads = 1);
};
async function Gu() {
  return eo || (eo = (async () => {
    const e = await Ku();
    let t = null;
    for (const { pluginId: n, runtimePath: o } of e) {
      const a = yu(o);
      try {
        const s = await import(
          /* @vite-ignore */
          a
        );
        return v_(s.env, a), B.info(
          `[离线翻译] 已从插件资源加载 Transformers runtime: ${n}`,
          {
            wasmPaths: s.env.backends?.onnx?.wasm?.wasmPaths,
            numThreads: s.env.backends?.onnx?.wasm?.numThreads,
            remoteHost: s.env.remoteHost,
            remotePathTemplate: s.env.remotePathTemplate,
            allowLocalModels: s.env.allowLocalModels,
            localModelPath: s.env.localModelPath
          }
        ), s;
      } catch (s) {
        t = s, B.warn(
          `[离线翻译] 无法加载插件运行时，尝试下一个候选包: ${n}`,
          s
        );
      }
    }
    throw t || new Error(
      "离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包"
    );
  })().catch((e) => {
    throw eo = null, e;
  }), eo);
}
async function y_() {
  await Gu();
}
let Rt = null, co = !1, _n = null, Tn = null, dr = null;
const b_ = "Xenova/opus-mt-en-zh", w_ = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], __ = 3e5;
function Gi(e) {
  dr = e;
}
function S_() {
  return w_;
}
function k_(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (o, a) => setTimeout(() => a(new Error(n)), t)
    )
  ]);
}
async function Zu() {
  return Rt || _n || (co = !0, B.info("[离线翻译] 正在加载翻译模型..."), _n = (async () => {
    try {
      const { pipeline: e } = await Gu();
      let t = "";
      const n = e("translation", b_, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (a) => {
          a.status === "done" && a.file && a.file !== t && (t = a.file, B.info(`[离线翻译] 已加载: ${a.file}`)), dr && dr({
            status: a.status,
            progress: a.progress,
            file: a.file
          });
        }
      });
      return Rt = await k_(
        n,
        __,
        "模型加载超时，请检查网络连接后重试"
      ), B.info("[离线翻译] 翻译模型加载完成"), co = !1, Rt;
    } catch (e) {
      throw co = !1, _n = null, B.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), _n);
}
async function C_(e) {
  if (!e?.trim()) return e;
  Tn = new AbortController();
  const t = Tn.signal;
  try {
    const n = await Zu();
    if (t.aborted)
      throw new Error("翻译已取消");
    const o = e.split(`
`), a = [];
    for (const s of o) {
      if (t.aborted)
        throw new Error("翻译已取消");
      const r = s.trim();
      if (!r) {
        a.push("");
        continue;
      }
      const i = await n(r);
      if (t.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(i) && i.length > 0) {
        const u = i[0].translation_text || r;
        a.push(u);
      } else
        a.push(r);
    }
    return a.join(`
`);
  } catch (n) {
    throw n instanceof Error && n.message === "翻译已取消" ? (B.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (B.warn("[离线翻译] 运行时资源未安装"), n) : (B.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    Tn = null;
  }
}
function Zi() {
  Tn && (Tn.abort(), Tn = null, B.info("[离线翻译] 已发送取消信号"));
}
async function fr() {
  await Zu();
}
function Vo() {
  return Rt !== null;
}
function P_() {
  return co;
}
async function no() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      B.info(
        `[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`
      );
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const a = await (await caches.open(n)).keys();
          if (B.info(`[离线翻译] Cache "${n}" 包含 ${a.length} 个文件`), a.some(
            (r) => r.url.includes("opus-mt-en-zh") || r.url.includes("Xenova")
          )) {
            const r = a.some((i) => i.url.includes(".onnx"));
            if (B.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${r}`), r)
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
    B.info(
      `[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`
    );
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return B.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return B.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return B.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function E_() {
  return (await no()).isCached;
}
function T_() {
  return Rt !== null;
}
async function I_() {
  if (Rt)
    try {
      await Rt.dispose?.();
    } catch {
    }
  Rt = null, _n = null, co = !1, B.info("[离线翻译] 翻译器已释放");
}
async function $_() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), B.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), B.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    B.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw B.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const O_ = { class: "translate-window" }, x_ = {
  class: "header",
  "data-tauri-drag-region": ""
}, L_ = { class: "left-buttons" }, A_ = ["aria-label"], R_ = {
  class: "window-title",
  "data-tauri-drag-region": ""
}, M_ = { class: "right-buttons" }, z_ = ["aria-label"], N_ = { class: "translate-container" }, F_ = { class: "language-selector" }, B_ = ["aria-label", "disabled"], V_ = { class: "source-area" }, D_ = { class: "source-actions" }, H_ = { class: "source-material" }, W_ = { class: "translation-results" }, j_ = ["onClick"], U_ = { class: "result-title" }, K_ = ["src"], G_ = ["src"], Z_ = {
  key: 2,
  class: "offline-icon"
}, q_ = {
  key: 3,
  class: "offline-icon ai-icon"
}, Y_ = { class: "result-controls" }, X_ = {
  key: 0,
  class: "result-body"
}, J_ = ["textContent", "onBlur"], Q_ = {
  key: 2,
  class: "result-empty"
}, e3 = { class: "result-actions" }, t3 = ["onClick"], n3 = ["onClick"], o3 = ["onClick"], a3 = /* @__PURE__ */ G({
  __name: "index",
  setup(e) {
    const { t } = hr(), n = s_(), o = ku(), a = M(!1), s = M(""), r = M("auto"), i = M("zh"), u = M(!1), c = M(!1), d = M(), p = M(!1), h = M(!1), m = M(!1);
    let f = 0;
    const g = M([
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
    ]), S = b(() => g.value.filter((V) => V.engine === "offline" ? p.value : V.engine === "local-ai" ? h.value : !0)), v = (V) => V === "bing" ? t("translate.bingTranslate") : V === "google" ? t("translate.googleTranslate") : V === "offline" ? t("translate.offlineTranslate") : V === "local-ai" ? t("translate.localAiTranslate") : V, O = b(() => [
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
    let _ = null, T = null, P = null;
    const I = M({
      forChinese: "en",
      forEnglish: "zh"
    }), x = async () => {
      if (u.value) return;
      const V = await rt("tauri://blur", () => {
        _ && clearTimeout(_), _ = setTimeout(async () => {
          u.value || (U(), await o.hide());
        }, 100);
      }), oe = await rt("tauri://focus", () => {
        _ && clearTimeout(_), me();
      }), ne = await rt("tauri://show", () => {
        me();
      }), Te = await rt("tauri://move", () => {
        _ && clearTimeout(_);
      }), Ve = await rt("selection-text", (ke) => {
        ke.payload && ke.payload.text && Ee(ke.payload.text);
      }), Le = await rt("reset-state", () => {
        U();
      });
      T = () => {
        V(), oe(), Te(), Ve(), Le(), ne();
      };
    }, Z = async () => {
      u.value = !u.value, await o.setAlwaysOnTop(u.value), u.value ? T && (T(), T = null) : x();
    }, U = () => {
      s.value = "", c.value = !1, g.value.forEach((V) => {
        V.text = "", V.loading = !1;
      });
    }, Q = async () => {
      U(), await o.close();
    }, k = () => {
      r.value !== "auto" && ([r.value, i.value] = [
        i.value,
        r.value
      ], J());
    }, L = () => {
      s.value = "", g.value.forEach((V) => {
        V.text = "", V.loading = !1;
      }), c.value = !1;
    }, W = async (V) => {
      V && (await navigator.clipboard.writeText(V), ze.success(t("translate.copiedToClipboard")));
    }, re = (V, oe) => {
      const ne = oe.target;
      ne && (V.text = ne.innerText.trim());
    }, $ = (V, oe) => {
      if (!V) return;
      const ne = new SpeechSynthesisUtterance(V), Te = oe === "zh" ? "zh-CN" : oe === "zh_tw" ? "zh-TW" : oe === "en" ? "en-US" : oe;
      ne.lang = Te, window.speechSynthesis.speak(ne);
    }, z = () => {
      if (r.value !== "auto") return;
      const V = Ba(s.value);
      V === "zh" ? i.value = I.value.forChinese : V === "en" && (i.value = I.value.forEnglish);
    }, R = () => {
      const V = Ba(s.value);
      V === "zh" ? I.value.forChinese = i.value : V === "en" && (I.value.forEnglish = i.value), J();
    }, ee = async (V, oe) => {
      const ne = g.value.find((Le) => Le.engine === V);
      if (!ne || V === "offline" && !p.value || V === "local-ai" && !h.value)
        return;
      ne.loading = !0, ne.text = "";
      const Te = sw(s.value);
      let Ve = i.value;
      V === "bing" && Ve === "auto" && (Ve = "en");
      try {
        let Le;
        if (V === "offline") {
          if (!T_())
            if (await E_())
              B.info("[翻译窗口] 离线翻译懒加载：开始加载模型..."), await fr(), B.info("[翻译窗口] 离线翻译懒加载：模型加载完成");
            else {
              ne.text = t("translate.offlineModelUnavailable");
              return;
            }
          Le = await C_(Te);
        } else V === "local-ai" ? Le = (await t2(
          {
            text: Te,
            from: r.value,
            to: Ve
          },
          {
            providerId: Ot,
            contextCollection: {
              kind: "selection",
              input: {
                selectionText: Te,
                selectionSource: "translation"
              }
            }
          }
        )).text : Le = await E("translate_text", {
          text: Te,
          from: r.value,
          to: Ve,
          engine: V
        });
        if (oe !== f) return;
        ne.text = Le;
      } catch (Le) {
        if (oe !== f) return;
        const ke = String(Le);
        if (ke.includes("翻译已取消")) return;
        B.error(`[翻译] ${V}翻译出错`, Le), ke.includes("429") || ke.includes("Too Many Requests") ? ne.text = t("translate.tooManyRequests") : ke.includes("timeout") || ke.includes("超时") ? ne.text = t("translate.timeout") : ke.includes("network") || ke.includes("网络") ? ne.text = t("translate.networkError") : ke.includes("未下载") || ke.includes("未激活") || ke.includes("运行时未安装") ? ne.text = t("translate.offlineUnavailable") : ne.text = t("translate.translateFailed");
      } finally {
        oe === f && (ne.loading = !1);
      }
    }, J = async () => {
      if (P && (clearTimeout(P), P = null), !s.value.trim()) {
        g.value.forEach((ne) => {
          ne.text = "", ne.loading = !1;
        }), a.value = !1;
        return;
      }
      Zi();
      const V = ++f;
      z(), a.value = !0;
      const oe = S.value.map(
        (ne) => ee(ne.engine, V)
      );
      await Promise.all(oe), V === f && (a.value = !1);
    }, le = (V) => {
      V.expanded = !V.expanded;
    }, ge = () => {
      m.value || (c.value = !!s.value, P && clearTimeout(P), s.value.trim() ? P = setTimeout(() => {
        J();
      }, 500) : g.value.forEach((V) => {
        V.text = "", V.loading = !1;
      }));
    }, be = () => {
      m.value = !0;
    }, X = () => {
      m.value = !1;
    };
    let de = "", ve = !1;
    const Ee = (V) => {
      V && (V === de && ve || (de = V, ve = !0, s.value = V, c.value = !0, z(), J().finally(() => {
        setTimeout(() => {
          ve = !1;
        }, 2e3);
      }), me()));
    }, ae = (V) => {
      s.value = V.text;
      const oe = Ba(s.value), ne = r.value, Te = i.value;
      ne === "auto" ? (r.value = "auto", oe === "zh" ? i.value = I.value.forChinese : i.value = I.value.forEnglish) : (r.value = Te, i.value = ne === "auto" ? oe === "zh" ? "en" : "zh" : ne), J();
    }, me = () => {
      const V = (oe = 0) => {
        if (!(oe > 5))
          if (d.value)
            d.value.focus();
          else {
            const ne = 100 * (oe + 1);
            setTimeout(() => V(oe + 1), ne);
          }
      };
      d.value && d.value.focus(), Se(() => {
        V();
      });
    }, Fe = () => {
      z(), J();
    };
    return Ie(async () => {
      try {
        await n.initialize(), h.value = n.isEnabled("local-ai");
      } catch (V) {
        B.warn("[翻译窗口] 获取本地 AI 插件状态失败:", V), h.value = !1;
      }
      try {
        const V = await E(
          "get_offline_model_activated"
        );
        B.info(`[翻译窗口] 离线模型后端激活状态: ${V}`), p.value = V;
      } catch (V) {
        B.error("[翻译窗口] 获取离线模型激活状态失败:", V), p.value = !1;
      }
      await x(), s.value.trim() && z(), me(), await Se(), setTimeout(() => {
        o.emit("translate_ready");
      }, 100);
    }), Xi(() => {
      T && T(), _ && clearTimeout(_), P && clearTimeout(P), Zi(), U();
    }), (V, oe) => {
      const ne = jr, Te = Gr, Ve = Kr, Le = $r, ke = nb;
      return w(), A("main", O_, [
        y("div", x_, [
          y("div", L_, [
            F(ne, {
              content: V.$t("pin.pinWindow"),
              placement: "bottom",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: q(() => [
                y("button", {
                  type: "button",
                  "aria-label": V.$t("pin.pinWindow"),
                  onMousedown: oe[0] || (oe[0] = $e(() => {
                  }, ["stop"])),
                  onClick: Z,
                  class: N(["window-action", "pin-button", l(u) ? "pinned" : ""])
                }, [
                  F(l(Yc), { size: 18 })
                ], 42, A_)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"])
          ]),
          y(
            "div",
            R_,
            K(V.$t("translate.title")),
            1
            /* TEXT */
          ),
          y("div", M_, [
            F(ne, {
              content: V.$t("pin.close"),
              placement: "bottom",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: q(() => [
                y("button", {
                  type: "button",
                  "aria-label": V.$t("pin.close"),
                  onMousedown: oe[1] || (oe[1] = $e(() => {
                  }, ["stop"])),
                  onClick: Q,
                  class: "window-action material-close"
                }, [
                  F(l(Uc), { size: 22 })
                ], 40, z_)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"])
          ])
        ]),
        y("div", N_, [
          H(" 语言选择区域 "),
          y("div", F_, [
            F(Ve, {
              modelValue: l(r),
              "onUpdate:modelValue": oe[2] || (oe[2] = (ce) => oo(r) ? r.value = ce : null),
              size: "small",
              onChange: Fe,
              class: "lang-select"
            }, {
              default: q(() => [
                (w(!0), A(
                  Oe,
                  null,
                  it(l(O), (ce) => (w(), Y(Te, {
                    key: ce.value,
                    label: ce.label,
                    value: ce.value
                  }, null, 8, ["label", "value"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            F(ne, {
              content: V.$t("translate.translateBack"),
              placement: "top",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: q(() => [
                y("button", {
                  type: "button",
                  "aria-label": V.$t("translate.translateBack"),
                  disabled: l(r) === "auto",
                  onClick: k,
                  class: "swap-button"
                }, [
                  F(l(as), { size: 22 })
                ], 8, B_)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"]),
            F(Ve, {
              modelValue: l(i),
              "onUpdate:modelValue": oe[3] || (oe[3] = (ce) => oo(i) ? i.value = ce : null),
              size: "small",
              onChange: R,
              class: "lang-select"
            }, {
              default: q(() => [
                (w(!0), A(
                  Oe,
                  null,
                  it(l(O), (ce) => (w(), Y(Te, {
                    key: ce.value,
                    label: ce.label,
                    value: ce.value
                  }, null, 8, ["label", "value"]))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          H(" 源文本输入区域 "),
          y("div", V_, [
            F(Le, {
              ref_key: "sourceTextArea",
              ref: d,
              modelValue: l(s),
              "onUpdate:modelValue": oe[4] || (oe[4] = (ce) => oo(s) ? s.value = ce : null),
              type: "textarea",
              rows: 2,
              placeholder: V.$t("translate.inputPlaceholder"),
              resize: "none",
              onInput: ge,
              onCompositionstart: be,
              onCompositionend: X,
              class: "source-textarea"
            }, null, 8, ["modelValue", "placeholder"]),
            y("div", D_, [
              y("div", H_, [
                F(ne, {
                  content: V.$t("translate.speakText"),
                  placement: "top",
                  "hide-after": 1e3,
                  "popper-class": "themed-tooltip-popper"
                }, {
                  default: q(() => [
                    y("button", {
                      type: "button",
                      onClick: oe[5] || (oe[5] = (ce) => $(l(s), l(r))),
                      class: "action-btn"
                    }, [
                      F(l(rs), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"]),
                l(c) ? (w(), Y(ne, {
                  key: 0,
                  content: V.$t("translate.deleteText"),
                  placement: "top",
                  "hide-after": 1e3,
                  "popper-class": "themed-tooltip-popper"
                }, {
                  default: q(() => [
                    y("button", {
                      type: "button",
                      onClick: L,
                      class: "action-btn"
                    }, [
                      F(l(Gc), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"])) : H("v-if", !0)
              ])
            ])
          ]),
          H(" 多引擎翻译结果区域 "),
          y("div", W_, [
            (w(!0), A(
              Oe,
              null,
              it(l(S), (ce) => (w(), A(
                "div",
                {
                  key: ce.engine,
                  class: N(["result-card", { "result-expanded": ce.expanded }])
                },
                [
                  y("button", {
                    type: "button",
                    class: "result-header",
                    onClick: (Ke) => le(ce)
                  }, [
                    y("div", U_, [
                      ce.engine === "google" ? (w(), A("img", {
                        key: 0,
                        src: l(Xb),
                        class: "engine-icon",
                        alt: "Google"
                      }, null, 8, K_)) : ce.engine === "bing" ? (w(), A("img", {
                        key: 1,
                        src: l(Jb),
                        class: "engine-icon",
                        alt: "Bing"
                      }, null, 8, G_)) : ce.engine === "offline" ? (w(), A(
                        "span",
                        Z_,
                        K(V.$t("translate.offlineMark")),
                        1
                        /* TEXT */
                      )) : (w(), A("span", q_, "AI")),
                      y(
                        "span",
                        null,
                        K(v(ce.engine)),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", Y_, [
                      (w(), Y(st(ce.expanded ? l(Qc) : l(Zc)), {
                        size: 18,
                        class: "expand-icon"
                      }))
                    ])
                  ], 8, j_),
                  ce.expanded ? (w(), A("div", X_, [
                    ce.loading ? (w(), Y(ke, {
                      key: 0,
                      rows: 3,
                      animated: ""
                    })) : ce.text ? (w(), A("div", {
                      key: 1,
                      class: "result-text",
                      contenteditable: "plaintext-only",
                      spellcheck: "false",
                      textContent: K(ce.text),
                      onBlur: (Ke) => re(ce, Ke)
                    }, null, 40, J_)) : (w(), A(
                      "div",
                      Q_,
                      K(V.$t("translate.resultPlaceholder")),
                      1
                      /* TEXT */
                    )),
                    y("div", e3, [
                      F(ne, {
                        content: V.$t("translate.speakText"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: q(() => [
                          y("button", {
                            type: "button",
                            onClick: (Ke) => $(ce.text, l(i)),
                            class: "action-btn"
                          }, [
                            F(l(rs), { size: 18 })
                          ], 8, t3)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      F(ne, {
                        content: V.$t("translate.copyResult"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: q(() => [
                          y("button", {
                            type: "button",
                            onClick: (Ke) => W(ce.text),
                            class: "action-btn"
                          }, [
                            F(l(Kc), { size: 18 })
                          ], 8, n3)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      F(ne, {
                        content: V.$t("translate.translateBack"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: q(() => [
                          y("button", {
                            type: "button",
                            onClick: (Ke) => ae(ce),
                            class: "action-btn rotate-icon"
                          }, [
                            F(l(as), { size: 18 })
                          ], 8, o3)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"])
                    ])
                  ])) : H("v-if", !0)
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
}), To = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, r3 = /* @__PURE__ */ To(a3, [["__scopeId", "data-v-9d2e335d"]]), s3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: r3
}, Symbol.toStringTag, { value: "Module" })), i3 = ["disabled"], l3 = {
  key: 0,
  class: "custom-button__loading"
}, u3 = /* @__PURE__ */ G({
  name: "CustomButton",
  __name: "CustomButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (e) => ["default", "primary", "success", "danger", "warning", "text"].includes(
        e
      )
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
    return (n, o) => (w(), A("button", {
      class: N([
        "custom-button",
        `custom-button--${t.type || "default"}`,
        t.size ? `custom-button--${t.size}` : "custom-button--medium",
        { "custom-button--loading": t.loading },
        { "custom-button--circle": t.circle },
        { "custom-button--plain": t.plain }
      ]),
      disabled: e.loading || e.disabled,
      onClick: o[0] || (o[0] = (a) => n.$emit("click", a))
    }, [
      e.loading ? (w(), A("div", l3, o[1] || (o[1] = [
        y(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            y("circle", {
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
      ]))) : H("v-if", !0),
      se(n.$slots, "default", {}, void 0, !0)
    ], 10, i3));
  }
}), Do = /* @__PURE__ */ To(u3, [["__scopeId", "data-v-8539c893"]]), c3 = /* @__PURE__ */ G({
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
    const n = e, o = t, a = () => {
      if (n.disabled) return;
      const s = !n.modelValue;
      o("update:modelValue", s), o("change", s);
    };
    return (s, r) => (w(), A(
      "div",
      {
        class: N(["custom-switch", {
          "custom-switch--active": e.modelValue,
          "custom-switch--disabled": e.disabled
        }]),
        onClick: a
      },
      [
        e.activeText || e.inactiveText ? (w(), A(
          "span",
          {
            key: 0,
            class: N(["custom-switch__text", { "custom-switch__text--active": e.modelValue }])
          },
          K(e.modelValue ? e.activeText : e.inactiveText),
          3
          /* TEXT, CLASS */
        )) : H("v-if", !0),
        r[0] || (r[0] = y(
          "div",
          { class: "custom-switch__core" },
          [
            y("div", { class: "custom-switch__handle" })
          ],
          -1
          /* HOISTED */
        ))
      ],
      2
      /* CLASS */
    ));
  }
}), qi = /* @__PURE__ */ To(c3, [["__scopeId", "data-v-09573d1e"]]), qu = {
  pathTemplate: "assets/${noteFileName}/",
  filenameFormat: "snippets-code",
  defaultImageScalePercent: 100,
  responsiveImages: !0,
  showImagePath: !0
}, d3 = "attachment-config-updated";
let Sn = null, to = null;
async function f3(e = !1) {
  if (!e && Sn) return { ...Sn };
  if (!e && to) return to;
  const t = E("get_attachment_config").then((n) => (Sn = { ...qu, ...n }, { ...Sn })).catch((n) => {
    throw new Error(`获取附件配置失败: ${n}`);
  }).finally(() => {
    to === t && (to = null);
  });
  return to = t, t;
}
async function p3(e) {
  try {
    await E("update_attachment_config", { config: e }), Sn = { ...qu, ...e }, typeof window < "u" && window.dispatchEvent(
      new CustomEvent(d3, {
        detail: { ...Sn }
      })
    );
  } catch (t) {
    throw new Error(`更新附件配置失败: ${t}`);
  }
}
const m3 = { class: "settings-panel" }, h3 = { class: "panel-header" }, g3 = { class: "panel-title" }, v3 = { class: "panel-content" }, y3 = { class: "summarize-section" }, b3 = { class: "summarize-label" }, w3 = { class: "summarize-label-title" }, _3 = { class: "summarize-label-desc" }, S3 = { class: "summarize-input-wrapper" }, k3 = { class: "summarize-section" }, C3 = { class: "summarize-label" }, P3 = { class: "summarize-label-title" }, E3 = { class: "summarize-label-desc" }, T3 = { class: "summarize-input-wrapper" }, I3 = { class: "flex flex-wrap items-center gap-3" }, $3 = {
  key: 0,
  class: "summarize-section"
}, O3 = { class: "summarize-label" }, x3 = { class: "summarize-label-title" }, L3 = { class: "summarize-label-desc" }, A3 = { class: "summarize-input-wrapper flex-col !items-start" }, R3 = { class: "w-full space-y-2" }, M3 = { class: "w-5 text-center" }, z3 = {
  key: 0,
  class: "text-green-500 text-base"
}, N3 = {
  key: 1,
  class: "text-red-500 text-base"
}, F3 = {
  key: 2,
  class: "text-yellow-500 text-base"
}, B3 = {
  key: 3,
  class: "text-panel-text-secondary text-base"
}, V3 = ["title"], D3 = { class: "w-16 text-right text-xs text-panel-text-secondary" }, H3 = { class: "w-24" }, W3 = {
  key: 1,
  class: "text-green-500 text-xs"
}, j3 = {
  key: 2,
  class: "text-red-500 text-xs"
}, U3 = {
  key: 3,
  class: "text-panel-text-secondary text-xs"
}, K3 = {
  key: 1,
  class: "summarize-section !mt-2"
}, G3 = { class: "summarize-label" }, Z3 = { class: "summarize-label-title" }, q3 = { class: "summarize-label-desc" }, Y3 = { class: "summarize-input-wrapper" }, X3 = { class: "model-info-card" }, J3 = { class: "info-row" }, Q3 = { class: "info-item" }, eS = { class: "info-label" }, tS = { class: "info-item" }, nS = { class: "info-label" }, oS = { class: "info-value" }, aS = { class: "info-item" }, rS = { class: "info-label" }, sS = { class: "info-value" }, iS = { class: "summarize-section !mt-2" }, lS = { class: "summarize-label" }, uS = { class: "summarize-label-title" }, cS = { class: "summarize-label-desc" }, dS = { class: "summarize-input-wrapper" }, fS = { class: "usage-tips" }, pS = { class: "tip-item" }, mS = { class: "tip-text" }, hS = { class: "tip-item" }, gS = { class: "tip-text" }, vS = { class: "tip-item" }, yS = { class: "tip-text" }, bS = { class: "tip-item" }, wS = { class: "tip-text" }, _S = "translation-offline-runtime", SS = /* @__PURE__ */ G({
  name: "Translation",
  __name: "index",
  setup(e) {
    const { t } = hr(), n = M("bing"), o = M(!1), a = M(!1), s = M({
      isCached: !1,
      cacheType: "none"
    }), r = M(!1), i = M(!1), u = M(!1), c = M(!1), d = M([]), p = b(() => s.value.isCached), h = b(() => [
      { value: "google", label: t("translation.google") },
      { value: "bing", label: t("translation.bing") },
      { value: "offline", label: t("translation.offline") },
      { value: "local-ai", label: t("translation.localAi") }
    ]), m = b(() => r.value ? t("translation.modelLoading") : c.value ? t("translation.runtimeInstalling") : u.value ? o.value ? t("translation.modelReady") : p.value && a.value ? t("translation.modelActivated") : p.value ? t("translation.modelCached") : t("translation.modelNotLoaded") : t("translation.runtimeMissing")), f = b(() => r.value || c.value ? "text-yellow-500" : u.value ? o.value || p.value && a.value ? "text-green-500" : p.value ? "text-blue-500" : "text-panel-text-secondary" : "text-red-500"), g = b(() => o.value || p.value), S = () => {
      const k = S_();
      d.value = k.map((L) => ({
        file: L.name,
        progress: 0,
        status: "pending",
        size: L.size
      }));
    }, v = (k, L, W) => {
      const re = d.value.find(
        ($) => k.includes($.file) || $.file.includes(k)
      );
      re && (re.progress = L, re.status = W);
    }, O = async () => {
      const k = await Ku();
      return u.value = k.length > 0, u.value;
    }, _ = async () => {
      c.value = !0;
      try {
        const k = await bw(
          dw
        ), L = Array.isArray(k.plugins) ? k.plugins : [], W = L.find(
          (re) => re.id === _S
        );
        if (!W)
          throw new Error(t("translation.runtimeMarketplaceMissing"));
        if (await I(W, L), await O() || (B.info("[翻译设置] 运行时资源包缺少 runtime 文件，开始补全资源"), await Va()), !await O())
          throw new Error(t("translation.runtimeInstallVerifyFailed"));
        try {
          await y_();
        } catch (re) {
          throw u.value = !1, B.error("[翻译设置] 运行时文件存在但动态加载验证失败:", re), new Error(t("translation.runtimeLoadVerifyFailed"));
        }
        c.value = !1, await Se(), ze.msg(t("translation.runtimeInstallSuccess"));
      } catch (k) {
        B.error("[翻译设置] 安装离线翻译运行时失败:", k), c.value = !1, await Se(), ze.msg(
          k instanceof Error ? k.message : t("translation.runtimeInstallFailed"),
          "error"
        );
      } finally {
        c.value = !1;
      }
    }, T = (k) => Array.isArray(k.dependencies) ? k.dependencies.filter(
      (L) => typeof L == "string" && !!L.trim()
    ) : [], P = (k) => !!(k.packageUrl && k.status !== "included"), I = async (k, L, W = /* @__PURE__ */ new Set()) => {
      if (!W.has(k.id)) {
        W.add(k.id);
        try {
          for (const re of T(k)) {
            const $ = L.find(
              (z) => z.id === re
            );
            if (!$)
              throw new Error(t("plugins.dependencyMissing", { id: re }));
            await I(
              $,
              L,
              W
            );
          }
          k.packageUrl && P(k) && (B.info("[翻译设置] 开始安装离线翻译运行时资源包", {
            pluginId: k.id,
            packageUrl: k.packageUrl
          }), await Tu(
            k.packageUrl,
            !0,
            k.packageSubdir,
            k.sizeBytes,
            k.sha256
          ));
        } finally {
          W.delete(k.id);
        }
      }
    }, x = async (k) => {
      try {
        await E("set_translation_engine", { engine: k }), ze.msg(t("translation.engineSaved"));
      } catch (L) {
        B.info("Failed to save translation engine:", L), ze.msg(t("translation.engineSaveFailed"), "error");
      }
    }, Z = async () => {
      if (B.info("[翻译设置] 开始下载离线模型..."), !await O()) {
        ze.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await Va(), await O();
      } catch (k) {
        B.error("[翻译设置] 修复离线翻译运行时失败:", k), ze.msg(
          k instanceof Error && k.message ? k.message : t("translation.runtimeInstallFailed"),
          "error"
        );
        return;
      }
      r.value = !0, S(), Gi((k) => {
        const L = k.file || "";
        k.status === "initiate" ? v(L, 0, "downloading") : k.status === "progress" && k.progress !== void 0 ? v(L, Math.round(k.progress), "downloading") : k.status === "done" && v(L, 100, "done");
      });
      try {
        await fr(), d.value.forEach((k) => {
          k.status !== "done" && (k.status = "done"), k.progress = 100;
        }), o.value = !0, a.value = !0, s.value = await no(), B.info("[翻译设置] 模型下载并加载成功，更新后端激活状态为 true"), await E("set_offline_model_activated", { activated: !0 }), ze.msg(t("translation.modelLoadSuccess"));
      } catch (k) {
        B.error("[翻译设置] 模型下载失败:", k), d.value.forEach((L) => {
          (L.status === "downloading" || L.status === "pending") && (L.status = "error");
        }), o.value = !1, ze.msg(
          k instanceof Error && k.message ? k.message : t("translation.modelLoadFailed"),
          "error"
        );
      } finally {
        r.value = !1, Gi(null), o.value = Vo(), s.value = await no(), B.info(
          `[翻译设置] 最终状态 - 内存加载: ${o.value}, 缓存存在: ${s.value.isCached}`
        );
      }
    }, U = async () => {
      if (B.info("[翻译设置] 开始激活离线模型..."), !await O()) {
        ze.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await Va(), await O();
      } catch (k) {
        B.error("[翻译设置] 修复离线翻译运行时失败:", k), ze.msg(
          k instanceof Error && k.message ? k.message : t("translation.runtimeInstallFailed"),
          "error"
        );
        return;
      }
      r.value = !0;
      try {
        await fr(), o.value = !0, a.value = !0, B.info("[翻译设置] 模型激活成功，更新后端激活状态为 true"), await E("set_offline_model_activated", { activated: !0 }), ze.msg(t("translation.modelLoadSuccess"));
      } catch (k) {
        B.error("[翻译设置] 模型激活失败:", k), o.value = !1, ze.msg(
          k instanceof Error && k.message ? k.message : t("translation.modelLoadFailed"),
          "error"
        );
      } finally {
        r.value = !1, o.value = Vo(), B.info(`[翻译设置] 激活后状态 - 内存加载: ${o.value}`);
      }
    }, Q = async () => {
      B.info("[翻译设置] 开始删除离线模型..."), i.value = !0;
      try {
        await I_(), await $_(), o.value = !1, a.value = !1, s.value = { isCached: !1, cacheType: "none" }, B.info("[翻译设置] 模型删除成功，更新后端激活状态为 false"), await E("set_offline_model_activated", { activated: !1 }), ze.msg(t("translation.modelDeleted"));
      } catch (k) {
        B.error("[翻译设置] 模型删除失败:", k), ze.msg(t("translation.modelDeleteFailed"), "error");
      } finally {
        i.value = !1, o.value = Vo(), s.value = await no(), B.info(
          `[翻译设置] 删除后状态 - 内存加载: ${o.value}, 缓存存在: ${s.value.isCached}`
        );
      }
    };
    return Ie(async () => {
      B.info("[翻译设置] 页面初始化..."), await O();
      try {
        const W = await E("get_translation_engine");
        B.info(`[翻译设置] 从后端获取翻译引擎: ${W}`), W && ["google", "bing", "offline", "local-ai"].includes(W) && (n.value = W);
      } catch (W) {
        B.error("[翻译设置] 获取翻译引擎失败:", W);
      }
      const k = Vo(), L = P_();
      s.value = await no(), B.info(
        `[翻译设置] 前端状态 - 内存加载: ${k}, 正在初始化: ${L}, 缓存存在: ${s.value.isCached}`
      ), o.value = k, r.value = L;
      try {
        const W = await E("get_offline_model_activated");
        B.info(`[翻译设置] 后端激活状态: ${W}`), a.value = W, W && !s.value.isCached && (B.info("[翻译设置] 后端已激活但缓存不存在，重置后端状态"), await E("set_offline_model_activated", { activated: !1 }), a.value = !1), !W && k && (B.info("[翻译设置] 内存已加载但后端未标记，同步后端状态为 true"), await E("set_offline_model_activated", { activated: !0 }), a.value = !0);
      } catch (W) {
        B.error("[翻译设置] 处理激活状态失败:", W);
      }
    }), (k, L) => {
      const W = Gr, re = Kr, $ = Gy;
      return w(), A("div", m3, [
        H(" 固定标题 "),
        y("div", h3, [
          y(
            "h3",
            g3,
            K(k.$t("translation.title")),
            1
            /* TEXT */
          )
        ]),
        H(" 可滚动内容 "),
        y("main", v3, [
          H(" 默认翻译引擎 "),
          y("section", y3, [
            y("div", b3, [
              y(
                "div",
                w3,
                K(k.$t("translation.defaultEngine")),
                1
                /* TEXT */
              ),
              y(
                "div",
                _3,
                K(k.$t("translation.defaultEngineDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", S3, [
              F(re, {
                class: "summarize-input !w-36",
                modelValue: n.value,
                "onUpdate:modelValue": L[0] || (L[0] = (z) => n.value = z),
                onChange: x
              }, {
                default: q(() => [
                  (w(!0), A(
                    Oe,
                    null,
                    it(h.value, (z) => (w(), Y(W, {
                      key: z.value,
                      label: z.label,
                      value: z.value
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
          H(" 离线翻译模型 "),
          y("section", k3, [
            y("div", C3, [
              y(
                "div",
                P3,
                K(k.$t("translation.offlineModel")),
                1
                /* TEXT */
              ),
              y(
                "div",
                E3,
                K(k.$t("translation.offlineModelDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", T3, [
              y("div", I3, [
                y(
                  "span",
                  {
                    class: N(["min-w-0 break-words text-sm font-medium", f.value])
                  },
                  K(m.value),
                  3
                  /* TEXT, CLASS */
                ),
                !u.value && !r.value ? (w(), Y(l(Do), {
                  key: 0,
                  type: "primary",
                  size: "small",
                  loading: c.value,
                  onClick: _
                }, {
                  default: q(() => [
                    sn(
                      K(k.$t("translation.installRuntime")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : H("v-if", !0),
                u.value && !p.value && !r.value && !c.value ? (w(), Y(l(Do), {
                  key: 1,
                  type: "primary",
                  size: "small",
                  onClick: Z
                }, {
                  default: q(() => [
                    sn(
                      K(k.$t("translation.loadModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : H("v-if", !0),
                u.value && p.value && !o.value && !a.value && !r.value && !c.value ? (w(), Y(l(Do), {
                  key: 2,
                  type: "primary",
                  size: "small",
                  onClick: U
                }, {
                  default: q(() => [
                    sn(
                      K(k.$t("translation.activateModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : H("v-if", !0),
                p.value && !r.value && !c.value ? (w(), Y(l(Do), {
                  key: 3,
                  type: "default",
                  size: "small",
                  onClick: Q,
                  loading: i.value
                }, {
                  default: q(() => [
                    sn(
                      K(k.$t("translation.deleteModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : H("v-if", !0)
              ])
            ])
          ]),
          H(" 多文件下载进度（独立区块） "),
          r.value ? (w(), A("section", $3, [
            y("div", O3, [
              y(
                "div",
                x3,
                K(k.$t("translation.downloadProgress")),
                1
                /* TEXT */
              ),
              y(
                "div",
                L3,
                K(k.$t("translation.downloadProgressDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", A3, [
              y("div", R3, [
                (w(!0), A(
                  Oe,
                  null,
                  it(d.value, (z) => (w(), A("div", {
                    key: z.file,
                    class: "flex items-center gap-3 py-1"
                  }, [
                    y("span", M3, [
                      z.status === "done" ? (w(), A("span", z3, " ✓ ")) : z.status === "error" ? (w(), A("span", N3, " ✗ ")) : z.status === "downloading" ? (w(), A("span", F3, " ↓ ")) : (w(), A("span", B3, " ○ "))
                    ]),
                    y("span", {
                      class: "w-64 truncate text-sm text-panel-text-secondary",
                      title: z.file
                    }, K(z.file), 9, V3),
                    y(
                      "span",
                      D3,
                      K(z.size),
                      1
                      /* TEXT */
                    ),
                    y("div", H3, [
                      z.status === "downloading" ? (w(), Y($, {
                        key: 0,
                        percentage: z.progress,
                        "stroke-width": 6,
                        "show-text": !0,
                        "text-inside": !1
                      }, null, 8, ["percentage"])) : z.status === "done" ? (w(), A(
                        "span",
                        W3,
                        K(k.$t("translation.completed")),
                        1
                        /* TEXT */
                      )) : z.status === "error" ? (w(), A(
                        "span",
                        j3,
                        K(k.$t("translation.failed")),
                        1
                        /* TEXT */
                      )) : (w(), A(
                        "span",
                        U3,
                        K(k.$t("translation.waiting")),
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
          ])) : H("v-if", !0),
          H(" 模型信息（仅在已缓存或已加载时显示） "),
          g.value && !r.value ? (w(), A("section", K3, [
            y("div", G3, [
              y(
                "div",
                Z3,
                K(k.$t("translation.modelInfo")),
                1
                /* TEXT */
              ),
              y(
                "div",
                q3,
                K(k.$t("translation.modelInfoDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", Y3, [
              y("div", X3, [
                y("div", J3, [
                  y("div", Q3, [
                    y(
                      "span",
                      eS,
                      K(k.$t("translation.modelName")),
                      1
                      /* TEXT */
                    ),
                    L[1] || (L[1] = y(
                      "span",
                      { class: "info-value" },
                      "Xenova/opus-mt-en-zh",
                      -1
                      /* HOISTED */
                    ))
                  ]),
                  y("div", tS, [
                    y(
                      "span",
                      nS,
                      K(k.$t("translation.modelSize")),
                      1
                      /* TEXT */
                    ),
                    y(
                      "span",
                      oS,
                      K(s.value.estimatedSize || "~300MB"),
                      1
                      /* TEXT */
                    )
                  ]),
                  y("div", aS, [
                    y(
                      "span",
                      rS,
                      K(k.$t("translation.supportLang")),
                      1
                      /* TEXT */
                    ),
                    y(
                      "span",
                      sS,
                      K(k.$t("translation.enToZh")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ])) : H("v-if", !0),
          H(" 使用说明 "),
          y("section", iS, [
            y("div", lS, [
              y(
                "div",
                uS,
                K(k.$t("translation.usage")),
                1
                /* TEXT */
              ),
              y(
                "div",
                cS,
                K(k.$t("translation.usageDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", dS, [
              y("div", fS, [
                y("div", pS, [
                  L[2] || (L[2] = y(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    mS,
                    K(k.$t("translation.usageTip1")),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", hS, [
                  L[3] || (L[3] = y(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    gS,
                    K(k.$t("translation.usageTip2")),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", vS, [
                  L[4] || (L[4] = y(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    yS,
                    K(k.$t("translation.usageTip3")),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", bS, [
                  L[5] || (L[5] = y(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    wS,
                    K(k.$t("translation.usageTip4")),
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
}), kS = /* @__PURE__ */ To(SS, [["__scopeId", "data-v-ae3f0567"]]), CS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kS
}, Symbol.toStringTag, { value: "Module" })), PS = { class: "settings-panel" }, ES = { class: "panel-header" }, TS = { class: "panel-title" }, IS = { class: "panel-content" }, $S = { class: "summarize-section" }, OS = { class: "summarize-label" }, xS = { class: "summarize-label-title" }, LS = { class: "summarize-label-desc" }, AS = { class: "summarize-input-wrapper line-height-control" }, RS = { class: "line-height-value" }, MS = { class: "summarize-section" }, zS = { class: "summarize-label" }, NS = { class: "summarize-label-title" }, FS = { class: "summarize-label-desc" }, BS = { class: "summarize-input-wrapper image-scale-control" }, VS = { class: "image-scale-value" }, DS = { class: "summarize-section" }, HS = { class: "summarize-label" }, WS = { class: "summarize-label-title" }, jS = { class: "summarize-label-desc" }, US = { class: "summarize-input-wrapper" }, KS = { class: "summarize-section" }, GS = { class: "summarize-label" }, ZS = { class: "summarize-label-title" }, qS = { class: "summarize-label-desc" }, YS = { class: "summarize-input-wrapper" }, XS = { class: "summarize-section transparent-input" }, JS = { class: "summarize-label" }, QS = { class: "summarize-label-title" }, ek = { class: "summarize-label-desc" }, tk = { class: "summarize-input-wrapper" }, nk = { class: "summarize-section transparent-input" }, ok = { class: "summarize-label" }, ak = { class: "summarize-label-title" }, rk = { class: "summarize-label-desc" }, sk = { class: "summarize-input-wrapper" }, ik = { class: "summarize-section transparent-input" }, lk = { class: "summarize-label" }, uk = { class: "summarize-label-title" }, ck = { class: "summarize-label-desc" }, dk = { class: "summarize-input-wrapper" }, fk = { class: "preview-box" }, pk = /* @__PURE__ */ G({
  name: "AttachmentSettings",
  __name: "index",
  setup(e) {
    const { t } = hr(), n = i_(), o = M({
      pathTemplate: "assets/${noteFileName}/",
      filenameFormat: "snippets-code",
      defaultImageScalePercent: 100,
      responsiveImages: !0,
      showImagePath: !0
    }), a = M(!1), s = M(!1), r = M(n.editorLineHeight), i = b(() => {
      const m = t("settings.attachment.exampleNoteName"), f = u(o.value.filenameFormat);
      return o.value.pathTemplate.replace("${noteFileName}", m) + f;
    });
    function u(m) {
      const f = /* @__PURE__ */ new Date(), g = f.toISOString().slice(0, 10).replace(/-/g, ""), S = f.toTimeString().slice(0, 8).replace(/:/g, "");
      switch (m) {
        case "snippets-code":
          return `Pasted image ${g}${S}.png`;
        case "simple":
          return `image-${g}-${S}.png`;
        case "uuid":
          return `${crypto.randomUUID()}.png`;
        default:
          return "image.png";
      }
    }
    async function c() {
      if (!s.value) {
        s.value = !0;
        try {
          await p3(o.value), ze.msg(t("settings.attachment.configSaved"));
        } catch (m) {
          console.error("保存配置失败:", m), ze.msg(t("settings.attachment.configSaveFailed"), "error");
        } finally {
          s.value = !1;
        }
      }
    }
    const d = async (m) => {
      const f = Array.isArray(m) ? m[0] : m;
      o.value.defaultImageScalePercent = Math.min(
        200,
        Math.max(25, Math.round(f))
      ), await c();
    }, p = async (m, f) => {
      o.value[m] = f, await c();
    }, h = async (m) => {
      const f = Array.isArray(m) ? m[0] : m;
      try {
        await n.updateEditorLineHeight(f);
      } catch (g) {
        r.value = n.editorLineHeight, ze.msg(`${t("settings.settingFailed")}: ${g}`, "error");
      }
    };
    return ie(
      () => n.editorLineHeight,
      (m) => {
        r.value = m;
      }
    ), Ie(async () => {
      a.value = !0;
      try {
        o.value = await f3(!0);
      } catch (m) {
        console.error("加载配置失败:", m);
      } finally {
        a.value = !1;
      }
    }), (m, f) => {
      const g = _b, S = $r, v = Gr, O = Kr;
      return w(), A("div", PS, [
        H(" 固定标题 "),
        y("div", ES, [
          y(
            "h3",
            TS,
            K(m.$t("settings.attachment.title")),
            1
            /* TEXT */
          )
        ]),
        H(" 可滚动内容 "),
        y("main", IS, [
          H(" 编辑器行距 "),
          y("section", $S, [
            y("div", OS, [
              y(
                "div",
                xS,
                K(m.$t("settings.editorLineHeight")),
                1
                /* TEXT */
              ),
              y(
                "div",
                LS,
                K(m.$t("settings.editorLineHeightDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", AS, [
              F(g, {
                modelValue: l(r),
                "onUpdate:modelValue": f[0] || (f[0] = (_) => oo(r) ? r.value = _ : null),
                min: 1.2,
                max: 2,
                step: 0.05,
                "show-tooltip": !1,
                onChange: h
              }, null, 8, ["modelValue"]),
              y(
                "span",
                RS,
                K(l(r).toFixed(2)),
                1
                /* TEXT */
              )
            ])
          ]),
          H(" 图片默认缩放 "),
          y("section", MS, [
            y("div", zS, [
              y(
                "div",
                NS,
                K(m.$t("settings.attachment.defaultImageScale")),
                1
                /* TEXT */
              ),
              y(
                "div",
                FS,
                K(m.$t("settings.attachment.defaultImageScaleHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", BS, [
              F(g, {
                modelValue: l(o).defaultImageScalePercent,
                "onUpdate:modelValue": f[1] || (f[1] = (_) => l(o).defaultImageScalePercent = _),
                min: 25,
                max: 200,
                step: 5,
                "show-tooltip": !1,
                disabled: l(s),
                onChange: d
              }, null, 8, ["modelValue", "disabled"]),
              y(
                "span",
                VS,
                K(l(o).defaultImageScalePercent) + "% ",
                1
                /* TEXT */
              )
            ])
          ]),
          H(" 图片响应式适配 "),
          y("section", DS, [
            y("div", HS, [
              y(
                "div",
                WS,
                K(m.$t("settings.attachment.responsiveImages")),
                1
                /* TEXT */
              ),
              y(
                "div",
                jS,
                K(m.$t("settings.attachment.responsiveImagesHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", US, [
              F(l(qi), {
                "model-value": l(o).responsiveImages,
                disabled: l(s),
                "active-text": m.$t("common.on"),
                "inactive-text": m.$t("common.off"),
                onChange: f[2] || (f[2] = (_) => p("responsiveImages", _))
              }, null, 8, ["model-value", "disabled", "active-text", "inactive-text"])
            ])
          ]),
          H(" 图片附件路径 "),
          y("section", KS, [
            y("div", GS, [
              y(
                "div",
                ZS,
                K(m.$t("settings.attachment.showImagePath")),
                1
                /* TEXT */
              ),
              y(
                "div",
                qS,
                K(m.$t("settings.attachment.showImagePathHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", YS, [
              F(l(qi), {
                "model-value": l(o).showImagePath,
                disabled: l(s),
                "active-text": m.$t("common.on"),
                "inactive-text": m.$t("common.off"),
                onChange: f[3] || (f[3] = (_) => p("showImagePath", _))
              }, null, 8, ["model-value", "disabled", "active-text", "inactive-text"])
            ])
          ]),
          H(" 附件路径模板 "),
          y("section", XS, [
            y("div", JS, [
              y(
                "div",
                QS,
                K(m.$t("settings.attachment.pathTemplate")),
                1
                /* TEXT */
              ),
              y(
                "div",
                ek,
                K(m.$t("settings.attachment.pathTemplateHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", tk, [
              F(S, {
                class: "summarize-input",
                modelValue: l(o).pathTemplate,
                "onUpdate:modelValue": f[4] || (f[4] = (_) => l(o).pathTemplate = _),
                placeholder: m.$t("settings.attachment.pathTemplatePlaceholder"),
                disabled: l(s),
                onBlur: c
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          H(" 文件名生成格式 "),
          y("section", nk, [
            y("div", ok, [
              y(
                "div",
                ak,
                K(m.$t("settings.attachment.filenameFormat")),
                1
                /* TEXT */
              ),
              y(
                "div",
                rk,
                K(m.$t("settings.attachment.filenameFormatHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", sk, [
              F(O, {
                class: "summarize-input !w-64",
                modelValue: l(o).filenameFormat,
                "onUpdate:modelValue": f[5] || (f[5] = (_) => l(o).filenameFormat = _),
                disabled: l(s),
                onChange: c
              }, {
                default: q(() => [
                  F(v, {
                    label: m.$t("settings.attachment.formatObsidian"),
                    value: "obsidian"
                  }, null, 8, ["label"]),
                  F(v, {
                    label: m.$t("settings.attachment.formatSimple"),
                    value: "simple"
                  }, null, 8, ["label"]),
                  F(v, {
                    label: m.$t("settings.attachment.formatUuid"),
                    value: "uuid"
                  }, null, 8, ["label"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "disabled"])
            ])
          ]),
          H(" 路径预览 "),
          y("section", ik, [
            y("div", lk, [
              y(
                "div",
                uk,
                K(m.$t("settings.attachment.pathPreview")),
                1
                /* TEXT */
              ),
              y(
                "div",
                ck,
                K(m.$t("settings.attachment.pathPreviewHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", dk, [
              y("div", fk, [
                y(
                  "code",
                  null,
                  K(l(i)),
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
}), mk = /* @__PURE__ */ To(pk, [["__scopeId", "data-v-36bcb17f"]]), hk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mk
}, Symbol.toStringTag, { value: "Module" }));
export {
  wk as activate
};
