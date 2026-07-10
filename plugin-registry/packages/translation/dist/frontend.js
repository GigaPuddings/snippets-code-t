import * as Cu from "vue";
import { inject as ye, createVNode as F, defineAsyncComponent as Xa, getCurrentInstance as Ue, ref as A, computed as y, unref as l, shallowRef as Zt, watchEffect as wi, readonly as Qa, getCurrentScope as Tu, onScopeDispose as Eu, onMounted as Pe, nextTick as Ce, watch as se, isRef as Yn, warn as Pu, provide as mt, defineComponent as U, createElementBlock as R, openBlock as _, mergeProps as Yt, renderSlot as re, createElementVNode as b, toRef as wt, onUnmounted as _i, useAttrs as Ou, useSlots as $u, normalizeStyle as we, normalizeClass as M, createCommentVNode as H, Fragment as $e, createBlock as q, withCtx as Z, resolveDynamicComponent as at, withModifiers as Oe, toDisplayString as K, onBeforeUnmount as Ct, Transition as An, withDirectives as qe, vShow as At, reactive as Mt, onActivated as Iu, onUpdated as Si, cloneVNode as Lu, Text as xu, Comment as Ru, Teleport as Au, onBeforeMount as Mu, onDeactivated as Nu, createTextVNode as nn, withKeys as Ot, createSlots as zu, toRaw as Fu, toRefs as kn, resolveComponent as en, resolveDirective as Bu, toHandlerKey as Vu, renderList as rt, vModelText as Du, normalizeProps as Hu, h as ki, shallowReactive as ju, isVNode as oo, render as Bo, markRaw as Dr } from "vue";
import * as Wu from "vue-i18n";
import { useI18n as er } from "vue-i18n";
import * as Uu from "pinia";
import { defineStore as fo } from "pinia";
import * as Ku from "vue-router";
var Gu = {
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
function Zu() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Yu(e, t, n) {
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
var qu = Symbol("icon-context");
function ht(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var r = Zu(), i = ye(qu, Gu);
      return function() {
        var u = s.size, c = s.strokeWidth, d = s.strokeLinecap, f = s.strokeLinejoin, p = s.theme, v = s.fill, m = s.spin, h = Yu(r, {
          size: u,
          strokeWidth: c,
          strokeLinecap: d,
          strokeLinejoin: f,
          theme: p,
          fill: v
        }, i), k = [i.prefix + "-icon"];
        return k.push(i.prefix + "-icon-" + e), t && i.rtl && k.push(i.prefix + "-icon-rtl"), m && k.push(i.prefix + "-icon-spin"), F("span", {
          class: k.join(" ")
        }, [n(h)]);
      };
    }
  };
  return o;
}
const Ju = ht("close-small", !1, function(e) {
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
}), Xu = ht("copy", !0, function(e) {
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
}), Qu = ht("delete", !1, function(e) {
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
}), ec = ht("down", !1, function(e) {
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
}), tc = ht("folder-open", !0, function(e) {
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
}), nc = ht("pushpin", !1, function(e) {
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
}), oc = ht("setting-two", !1, function(e) {
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
}), Hr = ht("switch", !0, function(e) {
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
}), ac = ht("translate", !0, function(e) {
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
}), rc = ht("up", !1, function(e) {
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
}), jr = ht("volume-up", !0, function(e) {
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
}), w_ = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/translate",
    name: "Translate",
    component: () => Promise.resolve().then(() => g1)
  }), e.registerSettingsTab({
    id: "translation",
    labelKey: "translation.title",
    icon: ac,
    component: Xa(() => Promise.resolve().then(() => N2))
  });
}, Ci = Symbol(), xo = "el", sc = "is-", tn = (e, t, n, o, a) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), a && (s += `--${a}`), s;
}, Ti = Symbol("namespaceContextKey"), tr = (e) => {
  const t = e || (Ue() ? ye(Ti, A(xo)) : A(xo));
  return y(() => l(t) || xo);
}, Te = (e, t) => {
  const n = tr(t);
  return {
    namespace: n,
    b: (h = "") => tn(n.value, e, h, "", ""),
    e: (h) => h ? tn(n.value, e, "", h, "") : "",
    m: (h) => h ? tn(n.value, e, "", "", h) : "",
    be: (h, k) => h && k ? tn(n.value, e, h, k, "") : "",
    em: (h, k) => h && k ? tn(n.value, e, "", h, k) : "",
    bm: (h, k) => h && k ? tn(n.value, e, h, "", k) : "",
    bem: (h, k, g) => h && k && g ? tn(n.value, e, h, k, g) : "",
    is: (h, ...k) => {
      const g = k.length >= 1 ? k[0] : !0;
      return h && g ? `${sc}${h}` : "";
    },
    cssVar: (h) => {
      const k = {};
      for (const g in h)
        h[g] && (k[`--${n.value}-${g}`] = h[g]);
      return k;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const k = {};
      for (const g in h)
        h[g] && (k[`--${n.value}-${e}-${g}`] = h[g]);
      return k;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ao = () => {
}, ic = Object.prototype.hasOwnProperty, Wr = (e, t) => ic.call(e, t), je = Array.isArray, Ie = (e) => typeof e == "function", Be = (e) => typeof e == "string", Ye = (e) => e !== null && typeof e == "object", lc = Object.prototype.toString, uc = (e) => lc.call(e), cc = (e) => uc(e) === "[object Object]";
var Ei = typeof global == "object" && global && global.Object === Object && global, dc = typeof self == "object" && self && self.Object === Object && self, Tt = Ei || dc || Function("return this")(), St = Tt.Symbol, Pi = Object.prototype, fc = Pi.hasOwnProperty, pc = Pi.toString, Vn = St ? St.toStringTag : void 0;
function mc(e) {
  var t = fc.call(e, Vn), n = e[Vn];
  try {
    e[Vn] = void 0;
    var o = !0;
  } catch {
  }
  var a = pc.call(e);
  return o && (t ? e[Vn] = n : delete e[Vn]), a;
}
var vc = Object.prototype, hc = vc.toString;
function gc(e) {
  return hc.call(e);
}
var yc = "[object Null]", bc = "[object Undefined]", Ur = St ? St.toStringTag : void 0;
function Mn(e) {
  return e == null ? e === void 0 ? bc : yc : Ur && Ur in Object(e) ? mc(e) : gc(e);
}
function Cn(e) {
  return e != null && typeof e == "object";
}
var wc = "[object Symbol]";
function oa(e) {
  return typeof e == "symbol" || Cn(e) && Mn(e) == wc;
}
function _c(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = Array(o); ++n < o; )
    a[n] = t(e[n], n, e);
  return a;
}
var vt = Array.isArray, Kr = St ? St.prototype : void 0, Gr = Kr ? Kr.toString : void 0;
function Oi(e) {
  if (typeof e == "string")
    return e;
  if (vt(e))
    return _c(e, Oi) + "";
  if (oa(e))
    return Gr ? Gr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Sc = /\s/;
function kc(e) {
  for (var t = e.length; t-- && Sc.test(e.charAt(t)); )
    ;
  return t;
}
var Cc = /^\s+/;
function Tc(e) {
  return e && e.slice(0, kc(e) + 1).replace(Cc, "");
}
function qt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Zr = NaN, Ec = /^[-+]0x[0-9a-f]+$/i, Pc = /^0b[01]+$/i, Oc = /^0o[0-7]+$/i, $c = parseInt;
function Yr(e) {
  if (typeof e == "number")
    return e;
  if (oa(e))
    return Zr;
  if (qt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = qt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Tc(e);
  var n = Pc.test(e);
  return n || Oc.test(e) ? $c(e.slice(2), n ? 2 : 8) : Ec.test(e) ? Zr : +e;
}
function $i(e) {
  return e;
}
var Ic = "[object AsyncFunction]", Lc = "[object Function]", xc = "[object GeneratorFunction]", Rc = "[object Proxy]";
function Ii(e) {
  if (!qt(e))
    return !1;
  var t = Mn(e);
  return t == Lc || t == xc || t == Ic || t == Rc;
}
var ya = Tt["__core-js_shared__"], qr = function() {
  var e = /[^.]+$/.exec(ya && ya.keys && ya.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ac(e) {
  return !!qr && qr in e;
}
var Mc = Function.prototype, Nc = Mc.toString;
function sn(e) {
  if (e != null) {
    try {
      return Nc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var zc = /[\\^$.*+?()[\]{}|]/g, Fc = /^\[object .+?Constructor\]$/, Bc = Function.prototype, Vc = Object.prototype, Dc = Bc.toString, Hc = Vc.hasOwnProperty, jc = RegExp(
  "^" + Dc.call(Hc).replace(zc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Wc(e) {
  if (!qt(e) || Ac(e))
    return !1;
  var t = Ii(e) ? jc : Fc;
  return t.test(sn(e));
}
function Uc(e, t) {
  return e?.[t];
}
function ln(e, t) {
  var n = Uc(e, t);
  return Wc(n) ? n : void 0;
}
var xa = ln(Tt, "WeakMap");
function Kc(e, t, n) {
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
var Gc = 800, Zc = 16, Yc = Date.now;
function qc(e) {
  var t = 0, n = 0;
  return function() {
    var o = Yc(), a = Zc - (o - n);
    if (n = o, a > 0) {
      if (++t >= Gc)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Jc(e) {
  return function() {
    return e;
  };
}
var Vo = function() {
  try {
    var e = ln(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Xc = Vo ? function(e, t) {
  return Vo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Jc(t),
    writable: !0
  });
} : $i, Qc = qc(Xc);
function ed(e, t, n, o) {
  e.length;
  for (var a = n + 1; a--; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var td = 9007199254740991, nd = /^(?:0|[1-9]\d*)$/;
function nr(e, t) {
  var n = typeof e;
  return t = t ?? td, !!t && (n == "number" || n != "symbol" && nd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function od(e, t, n) {
  t == "__proto__" && Vo ? Vo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function or(e, t) {
  return e === t || e !== e && t !== t;
}
var ad = Object.prototype, rd = ad.hasOwnProperty;
function sd(e, t, n) {
  var o = e[t];
  (!(rd.call(e, t) && or(o, n)) || n === void 0 && !(t in e)) && od(e, t, n);
}
var Jr = Math.max;
function id(e, t, n) {
  return t = Jr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, a = -1, s = Jr(o.length - t, 0), r = Array(s); ++a < s; )
      r[a] = o[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = o[a];
    return i[t] = n(r), Kc(e, this, i);
  };
}
var ld = 9007199254740991;
function ar(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ld;
}
function ud(e) {
  return e != null && ar(e.length) && !Ii(e);
}
var cd = Object.prototype;
function dd(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || cd;
  return e === n;
}
function fd(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var pd = "[object Arguments]";
function Xr(e) {
  return Cn(e) && Mn(e) == pd;
}
var Li = Object.prototype, md = Li.hasOwnProperty, vd = Li.propertyIsEnumerable, rr = Xr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Xr : function(e) {
  return Cn(e) && md.call(e, "callee") && !vd.call(e, "callee");
};
function hd() {
  return !1;
}
var xi = typeof exports == "object" && exports && !exports.nodeType && exports, Qr = xi && typeof module == "object" && module && !module.nodeType && module, gd = Qr && Qr.exports === xi, es = gd ? Tt.Buffer : void 0, yd = es ? es.isBuffer : void 0, Ra = yd || hd, bd = "[object Arguments]", wd = "[object Array]", _d = "[object Boolean]", Sd = "[object Date]", kd = "[object Error]", Cd = "[object Function]", Td = "[object Map]", Ed = "[object Number]", Pd = "[object Object]", Od = "[object RegExp]", $d = "[object Set]", Id = "[object String]", Ld = "[object WeakMap]", xd = "[object ArrayBuffer]", Rd = "[object DataView]", Ad = "[object Float32Array]", Md = "[object Float64Array]", Nd = "[object Int8Array]", zd = "[object Int16Array]", Fd = "[object Int32Array]", Bd = "[object Uint8Array]", Vd = "[object Uint8ClampedArray]", Dd = "[object Uint16Array]", Hd = "[object Uint32Array]", ke = {};
ke[Ad] = ke[Md] = ke[Nd] = ke[zd] = ke[Fd] = ke[Bd] = ke[Vd] = ke[Dd] = ke[Hd] = !0;
ke[bd] = ke[wd] = ke[xd] = ke[_d] = ke[Rd] = ke[Sd] = ke[kd] = ke[Cd] = ke[Td] = ke[Ed] = ke[Pd] = ke[Od] = ke[$d] = ke[Id] = ke[Ld] = !1;
function jd(e) {
  return Cn(e) && ar(e.length) && !!ke[Mn(e)];
}
function Wd(e) {
  return function(t) {
    return e(t);
  };
}
var Ri = typeof exports == "object" && exports && !exports.nodeType && exports, qn = Ri && typeof module == "object" && module && !module.nodeType && module, Ud = qn && qn.exports === Ri, ba = Ud && Ei.process, ts = function() {
  try {
    var e = qn && qn.require && qn.require("util").types;
    return e || ba && ba.binding && ba.binding("util");
  } catch {
  }
}(), ns = ts && ts.isTypedArray, Ai = ns ? Wd(ns) : jd, Kd = Object.prototype, Gd = Kd.hasOwnProperty;
function Zd(e, t) {
  var n = vt(e), o = !n && rr(e), a = !n && !o && Ra(e), s = !n && !o && !a && Ai(e), r = n || o || a || s, i = r ? fd(e.length, String) : [], u = i.length;
  for (var c in e)
    Gd.call(e, c) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    nr(c, u))) && i.push(c);
  return i;
}
function Yd(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var qd = Yd(Object.keys, Object), Jd = Object.prototype, Xd = Jd.hasOwnProperty;
function Qd(e) {
  if (!dd(e))
    return qd(e);
  var t = [];
  for (var n in Object(e))
    Xd.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Mi(e) {
  return ud(e) ? Zd(e) : Qd(e);
}
var ef = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tf = /^\w*$/;
function sr(e, t) {
  if (vt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || oa(e) ? !0 : tf.test(e) || !ef.test(e) || t != null && e in Object(t);
}
var ro = ln(Object, "create");
function nf() {
  this.__data__ = ro ? ro(null) : {}, this.size = 0;
}
function of(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var af = "__lodash_hash_undefined__", rf = Object.prototype, sf = rf.hasOwnProperty;
function lf(e) {
  var t = this.__data__;
  if (ro) {
    var n = t[e];
    return n === af ? void 0 : n;
  }
  return sf.call(t, e) ? t[e] : void 0;
}
var uf = Object.prototype, cf = uf.hasOwnProperty;
function df(e) {
  var t = this.__data__;
  return ro ? t[e] !== void 0 : cf.call(t, e);
}
var ff = "__lodash_hash_undefined__";
function pf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ro && t === void 0 ? ff : t, this;
}
function an(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
an.prototype.clear = nf;
an.prototype.delete = of;
an.prototype.get = lf;
an.prototype.has = df;
an.prototype.set = pf;
function mf() {
  this.__data__ = [], this.size = 0;
}
function aa(e, t) {
  for (var n = e.length; n--; )
    if (or(e[n][0], t))
      return n;
  return -1;
}
var vf = Array.prototype, hf = vf.splice;
function gf(e) {
  var t = this.__data__, n = aa(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : hf.call(t, n, 1), --this.size, !0;
}
function yf(e) {
  var t = this.__data__, n = aa(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function bf(e) {
  return aa(this.__data__, e) > -1;
}
function wf(e, t) {
  var n = this.__data__, o = aa(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function zt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
zt.prototype.clear = mf;
zt.prototype.delete = gf;
zt.prototype.get = yf;
zt.prototype.has = bf;
zt.prototype.set = wf;
var so = ln(Tt, "Map");
function _f() {
  this.size = 0, this.__data__ = {
    hash: new an(),
    map: new (so || zt)(),
    string: new an()
  };
}
function Sf(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ra(e, t) {
  var n = e.__data__;
  return Sf(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function kf(e) {
  var t = ra(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Cf(e) {
  return ra(this, e).get(e);
}
function Tf(e) {
  return ra(this, e).has(e);
}
function Ef(e, t) {
  var n = ra(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Ft(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ft.prototype.clear = _f;
Ft.prototype.delete = kf;
Ft.prototype.get = Cf;
Ft.prototype.has = Tf;
Ft.prototype.set = Ef;
var Pf = "Expected a function";
function ir(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Pf);
  var n = function() {
    var o = arguments, a = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(a))
      return s.get(a);
    var r = e.apply(this, o);
    return n.cache = s.set(a, r) || s, r;
  };
  return n.cache = new (ir.Cache || Ft)(), n;
}
ir.Cache = Ft;
var Of = 500;
function $f(e) {
  var t = ir(e, function(o) {
    return n.size === Of && n.clear(), o;
  }), n = t.cache;
  return t;
}
var If = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Lf = /\\(\\)?/g, xf = $f(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(If, function(n, o, a, s) {
    t.push(a ? s.replace(Lf, "$1") : o || n);
  }), t;
});
function Rf(e) {
  return e == null ? "" : Oi(e);
}
function sa(e, t) {
  return vt(e) ? e : sr(e, t) ? [e] : xf(Rf(e));
}
function po(e) {
  if (typeof e == "string" || oa(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function lr(e, t) {
  t = sa(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[po(t[n++])];
  return n && n == o ? e : void 0;
}
function Gt(e, t, n) {
  var o = e == null ? void 0 : lr(e, t);
  return o === void 0 ? n : o;
}
function Ni(e, t) {
  for (var n = -1, o = t.length, a = e.length; ++n < o; )
    e[a + n] = t[n];
  return e;
}
var os = St ? St.isConcatSpreadable : void 0;
function Af(e) {
  return vt(e) || rr(e) || !!(os && e && e[os]);
}
function Mf(e, t, n, o, a) {
  var s = -1, r = e.length;
  for (n || (n = Af), a || (a = []); ++s < r; ) {
    var i = e[s];
    n(i) ? Ni(a, i) : a[a.length] = i;
  }
  return a;
}
function Nf(e) {
  var t = e == null ? 0 : e.length;
  return t ? Mf(e) : [];
}
function zf(e) {
  return Qc(id(e, void 0, Nf), e + "");
}
function Kt() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return vt(e) ? e : [e];
}
function Ff() {
  this.__data__ = new zt(), this.size = 0;
}
function Bf(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Vf(e) {
  return this.__data__.get(e);
}
function Df(e) {
  return this.__data__.has(e);
}
var Hf = 200;
function jf(e, t) {
  var n = this.__data__;
  if (n instanceof zt) {
    var o = n.__data__;
    if (!so || o.length < Hf - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Ft(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Lt(e) {
  var t = this.__data__ = new zt(e);
  this.size = t.size;
}
Lt.prototype.clear = Ff;
Lt.prototype.delete = Bf;
Lt.prototype.get = Vf;
Lt.prototype.has = Df;
Lt.prototype.set = jf;
function Wf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = 0, s = []; ++n < o; ) {
    var r = e[n];
    t(r, n, e) && (s[a++] = r);
  }
  return s;
}
function Uf() {
  return [];
}
var Kf = Object.prototype, Gf = Kf.propertyIsEnumerable, as = Object.getOwnPropertySymbols, Zf = as ? function(e) {
  return e == null ? [] : (e = Object(e), Wf(as(e), function(t) {
    return Gf.call(e, t);
  }));
} : Uf;
function Yf(e, t, n) {
  var o = t(e);
  return vt(e) ? o : Ni(o, n(e));
}
function rs(e) {
  return Yf(e, Mi, Zf);
}
var Aa = ln(Tt, "DataView"), Ma = ln(Tt, "Promise"), Na = ln(Tt, "Set"), ss = "[object Map]", qf = "[object Object]", is = "[object Promise]", ls = "[object Set]", us = "[object WeakMap]", cs = "[object DataView]", Jf = sn(Aa), Xf = sn(so), Qf = sn(Ma), ep = sn(Na), tp = sn(xa), jt = Mn;
(Aa && jt(new Aa(new ArrayBuffer(1))) != cs || so && jt(new so()) != ss || Ma && jt(Ma.resolve()) != is || Na && jt(new Na()) != ls || xa && jt(new xa()) != us) && (jt = function(e) {
  var t = Mn(e), n = t == qf ? e.constructor : void 0, o = n ? sn(n) : "";
  if (o)
    switch (o) {
      case Jf:
        return cs;
      case Xf:
        return ss;
      case Qf:
        return is;
      case ep:
        return ls;
      case tp:
        return us;
    }
  return t;
});
var ds = Tt.Uint8Array, np = "__lodash_hash_undefined__";
function op(e) {
  return this.__data__.set(e, np), this;
}
function ap(e) {
  return this.__data__.has(e);
}
function Do(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Ft(); ++t < n; )
    this.add(e[t]);
}
Do.prototype.add = Do.prototype.push = op;
Do.prototype.has = ap;
function rp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function sp(e, t) {
  return e.has(t);
}
var ip = 1, lp = 2;
function zi(e, t, n, o, a, s) {
  var r = n & ip, i = e.length, u = t.length;
  if (i != u && !(r && u > i))
    return !1;
  var c = s.get(e), d = s.get(t);
  if (c && d)
    return c == t && d == e;
  var f = -1, p = !0, v = n & lp ? new Do() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < i; ) {
    var m = e[f], h = t[f];
    if (o)
      var k = r ? o(h, m, f, t, e, s) : o(m, h, f, e, t, s);
    if (k !== void 0) {
      if (k)
        continue;
      p = !1;
      break;
    }
    if (v) {
      if (!rp(t, function(g, $) {
        if (!sp(v, $) && (m === g || a(m, g, n, o, s)))
          return v.push($);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === h || a(m, h, n, o, s))) {
      p = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), p;
}
function up(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, a) {
    n[++t] = [a, o];
  }), n;
}
function cp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var dp = 1, fp = 2, pp = "[object Boolean]", mp = "[object Date]", vp = "[object Error]", hp = "[object Map]", gp = "[object Number]", yp = "[object RegExp]", bp = "[object Set]", wp = "[object String]", _p = "[object Symbol]", Sp = "[object ArrayBuffer]", kp = "[object DataView]", fs = St ? St.prototype : void 0, wa = fs ? fs.valueOf : void 0;
function Cp(e, t, n, o, a, s, r) {
  switch (n) {
    case kp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Sp:
      return !(e.byteLength != t.byteLength || !s(new ds(e), new ds(t)));
    case pp:
    case mp:
    case gp:
      return or(+e, +t);
    case vp:
      return e.name == t.name && e.message == t.message;
    case yp:
    case wp:
      return e == t + "";
    case hp:
      var i = up;
    case bp:
      var u = o & dp;
      if (i || (i = cp), e.size != t.size && !u)
        return !1;
      var c = r.get(e);
      if (c)
        return c == t;
      o |= fp, r.set(e, t);
      var d = zi(i(e), i(t), o, a, s, r);
      return r.delete(e), d;
    case _p:
      if (wa)
        return wa.call(e) == wa.call(t);
  }
  return !1;
}
var Tp = 1, Ep = Object.prototype, Pp = Ep.hasOwnProperty;
function Op(e, t, n, o, a, s) {
  var r = n & Tp, i = rs(e), u = i.length, c = rs(t), d = c.length;
  if (u != d && !r)
    return !1;
  for (var f = u; f--; ) {
    var p = i[f];
    if (!(r ? p in t : Pp.call(t, p)))
      return !1;
  }
  var v = s.get(e), m = s.get(t);
  if (v && m)
    return v == t && m == e;
  var h = !0;
  s.set(e, t), s.set(t, e);
  for (var k = r; ++f < u; ) {
    p = i[f];
    var g = e[p], $ = t[p];
    if (o)
      var S = r ? o($, g, p, t, e, s) : o(g, $, p, e, t, s);
    if (!(S === void 0 ? g === $ || a(g, $, n, o, s) : S)) {
      h = !1;
      break;
    }
    k || (k = p == "constructor");
  }
  if (h && !k) {
    var O = e.constructor, T = t.constructor;
    O != T && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof T == "function" && T instanceof T) && (h = !1);
  }
  return s.delete(e), s.delete(t), h;
}
var $p = 1, ps = "[object Arguments]", ms = "[object Array]", ko = "[object Object]", Ip = Object.prototype, vs = Ip.hasOwnProperty;
function Lp(e, t, n, o, a, s) {
  var r = vt(e), i = vt(t), u = r ? ms : jt(e), c = i ? ms : jt(t);
  u = u == ps ? ko : u, c = c == ps ? ko : c;
  var d = u == ko, f = c == ko, p = u == c;
  if (p && Ra(e)) {
    if (!Ra(t))
      return !1;
    r = !0, d = !1;
  }
  if (p && !d)
    return s || (s = new Lt()), r || Ai(e) ? zi(e, t, n, o, a, s) : Cp(e, t, u, n, o, a, s);
  if (!(n & $p)) {
    var v = d && vs.call(e, "__wrapped__"), m = f && vs.call(t, "__wrapped__");
    if (v || m) {
      var h = v ? e.value() : e, k = m ? t.value() : t;
      return s || (s = new Lt()), a(h, k, n, o, s);
    }
  }
  return p ? (s || (s = new Lt()), Op(e, t, n, o, a, s)) : !1;
}
function ia(e, t, n, o, a) {
  return e === t ? !0 : e == null || t == null || !Cn(e) && !Cn(t) ? e !== e && t !== t : Lp(e, t, n, o, ia, a);
}
var xp = 1, Rp = 2;
function Ap(e, t, n, o) {
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
      var d = new Lt(), f;
      if (!(f === void 0 ? ia(c, u, xp | Rp, o, d) : f))
        return !1;
    }
  }
  return !0;
}
function Fi(e) {
  return e === e && !qt(e);
}
function Mp(e) {
  for (var t = Mi(e), n = t.length; n--; ) {
    var o = t[n], a = e[o];
    t[n] = [o, a, Fi(a)];
  }
  return t;
}
function Bi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Np(e) {
  var t = Mp(e);
  return t.length == 1 && t[0][2] ? Bi(t[0][0], t[0][1]) : function(n) {
    return n === e || Ap(n, e, t);
  };
}
function zp(e, t) {
  return e != null && t in Object(e);
}
function Fp(e, t, n) {
  t = sa(t, e);
  for (var o = -1, a = t.length, s = !1; ++o < a; ) {
    var r = po(t[o]);
    if (!(s = e != null && n(e, r)))
      break;
    e = e[r];
  }
  return s || ++o != a ? s : (a = e == null ? 0 : e.length, !!a && ar(a) && nr(r, a) && (vt(e) || rr(e)));
}
function Vi(e, t) {
  return e != null && Fp(e, t, zp);
}
var Bp = 1, Vp = 2;
function Dp(e, t) {
  return sr(e) && Fi(t) ? Bi(po(e), t) : function(n) {
    var o = Gt(n, e);
    return o === void 0 && o === t ? Vi(n, e) : ia(t, o, Bp | Vp);
  };
}
function Hp(e) {
  return function(t) {
    return t?.[e];
  };
}
function jp(e) {
  return function(t) {
    return lr(t, e);
  };
}
function Wp(e) {
  return sr(e) ? Hp(po(e)) : jp(e);
}
function Up(e) {
  return typeof e == "function" ? e : e == null ? $i : typeof e == "object" ? vt(e) ? Dp(e[0], e[1]) : Np(e) : Wp(e);
}
var _a = function() {
  return Tt.Date.now();
}, Kp = "Expected a function", Gp = Math.max, Zp = Math.min;
function za(e, t, n) {
  var o, a, s, r, i, u, c = 0, d = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Kp);
  t = Yr(t) || 0, qt(n) && (d = !!n.leading, f = "maxWait" in n, s = f ? Gp(Yr(n.maxWait) || 0, t) : s, p = "trailing" in n ? !!n.trailing : p);
  function v(I) {
    var x = o, G = a;
    return o = a = void 0, c = I, r = e.apply(G, x), r;
  }
  function m(I) {
    return c = I, i = setTimeout(g, t), d ? v(I) : r;
  }
  function h(I) {
    var x = I - u, G = I - c, W = t - x;
    return f ? Zp(W, s - G) : W;
  }
  function k(I) {
    var x = I - u, G = I - c;
    return u === void 0 || x >= t || x < 0 || f && G >= s;
  }
  function g() {
    var I = _a();
    if (k(I))
      return $(I);
    i = setTimeout(g, h(I));
  }
  function $(I) {
    return i = void 0, p && o ? v(I) : (o = a = void 0, r);
  }
  function S() {
    i !== void 0 && clearTimeout(i), c = 0, o = u = a = i = void 0;
  }
  function O() {
    return i === void 0 ? r : $(_a());
  }
  function T() {
    var I = _a(), x = k(I);
    if (o = arguments, a = this, u = I, x) {
      if (i === void 0)
        return m(u);
      if (f)
        return clearTimeout(i), i = setTimeout(g, t), v(u);
    }
    return i === void 0 && (i = setTimeout(g, t)), r;
  }
  return T.cancel = S, T.flush = O, T;
}
function Yp(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var a = o - 1;
  return ed(e, Up(t), a);
}
function Ho(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var a = e[t];
    o[a[0]] = a[1];
  }
  return o;
}
function Jn(e, t) {
  return ia(e, t);
}
function xt(e) {
  return e == null;
}
function qp(e) {
  return e === void 0;
}
function Jp(e, t, n, o) {
  if (!qt(e))
    return e;
  t = sa(t, e);
  for (var a = -1, s = t.length, r = s - 1, i = e; i != null && ++a < s; ) {
    var u = po(t[a]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != r) {
      var d = i[u];
      c = void 0, c === void 0 && (c = qt(d) ? d : nr(t[a + 1]) ? [] : {});
    }
    sd(i, u, c), i = i[u];
  }
  return e;
}
function Xp(e, t, n) {
  for (var o = -1, a = t.length, s = {}; ++o < a; ) {
    var r = t[o], i = lr(e, r);
    n(i, r) && Jp(s, sa(r, e), i);
  }
  return s;
}
function Qp(e, t) {
  return Xp(e, t, function(n, o) {
    return Vi(e, o);
  });
}
var em = zf(function(e, t) {
  return e == null ? {} : Qp(e, t);
});
const dt = (e) => e === void 0, jo = (e) => typeof e == "boolean", pe = (e) => typeof e == "number", pt = (e) => typeof Element > "u" ? !1 : e instanceof Element, tm = (e) => Be(e) ? !Number.isNaN(Number(e)) : !1;
var nm = Object.defineProperty, om = Object.defineProperties, am = Object.getOwnPropertyDescriptors, hs = Object.getOwnPropertySymbols, rm = Object.prototype.hasOwnProperty, sm = Object.prototype.propertyIsEnumerable, gs = (e, t, n) => t in e ? nm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, im = (e, t) => {
  for (var n in t || (t = {}))
    rm.call(t, n) && gs(e, n, t[n]);
  if (hs)
    for (var n of hs(t))
      sm.call(t, n) && gs(e, n, t[n]);
  return e;
}, lm = (e, t) => om(e, am(t));
function um(e, t) {
  var n;
  const o = Zt();
  return wi(() => {
    o.value = e();
  }, lm(im({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Qa(o);
}
var ys;
const Re = typeof window < "u", cm = (e) => typeof e == "string", Di = () => {
}, Fa = Re && ((ys = window?.navigator) == null ? void 0 : ys.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ur(e) {
  return typeof e == "function" ? e() : l(e);
}
function dm(e) {
  return e;
}
function mo(e) {
  return Tu() ? (Eu(e), !0) : !1;
}
function fm(e, t = !0) {
  Ue() ? Pe(e) : t ? e() : Ce(e);
}
function Hi(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, a = A(!1);
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
    }, ur(t));
  }
  return o && (a.value = !0, Re && u()), mo(i), {
    isPending: Qa(a),
    start: u,
    stop: i
  };
}
function $t(e) {
  var t;
  const n = ur(e);
  return (t = n?.$el) != null ? t : n;
}
const la = Re ? window : void 0;
function We(...e) {
  let t, n, o, a;
  if (cm(e[0]) || Array.isArray(e[0]) ? ([n, o, a] = e, t = la) : [t, n, o, a] = e, !t)
    return Di;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], r = () => {
    s.forEach((d) => d()), s.length = 0;
  }, i = (d, f, p, v) => (d.addEventListener(f, p, v), () => d.removeEventListener(f, p, v)), u = se(() => [$t(t), ur(a)], ([d, f]) => {
    r(), d && s.push(...n.flatMap((p) => o.map((v) => i(d, p, v, f))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), r();
  };
  return mo(c), c;
}
let bs = !1;
function pm(e, t, n = {}) {
  const { window: o = la, ignore: a = [], capture: s = !0, detectIframe: r = !1 } = n;
  if (!o)
    return;
  Fa && !bs && (bs = !0, Array.from(o.document.body.children).forEach((p) => p.addEventListener("click", Di)));
  let i = !0;
  const u = (p) => a.some((v) => {
    if (typeof v == "string")
      return Array.from(o.document.querySelectorAll(v)).some((m) => m === p.target || p.composedPath().includes(m));
    {
      const m = $t(v);
      return m && (p.target === m || p.composedPath().includes(m));
    }
  }), d = [
    We(o, "click", (p) => {
      const v = $t(e);
      if (!(!v || v === p.target || p.composedPath().includes(v))) {
        if (p.detail === 0 && (i = !u(p)), !i) {
          i = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: s }),
    We(o, "pointerdown", (p) => {
      const v = $t(e);
      v && (i = !p.composedPath().includes(v) && !u(p));
    }, { passive: !0 }),
    r && We(o, "blur", (p) => {
      var v;
      const m = $t(e);
      ((v = o.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !m?.contains(o.document.activeElement) && t(p);
    })
  ].filter(Boolean);
  return () => d.forEach((p) => p());
}
function ji(e, t = !1) {
  const n = A(), o = () => n.value = !!e();
  return o(), fm(o, t), n;
}
const ws = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _s = "__vueuse_ssr_handlers__";
ws[_s] = ws[_s] || {};
var Ss = Object.getOwnPropertySymbols, mm = Object.prototype.hasOwnProperty, vm = Object.prototype.propertyIsEnumerable, hm = (e, t) => {
  var n = {};
  for (var o in e)
    mm.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ss)
    for (var o of Ss(e))
      t.indexOf(o) < 0 && vm.call(e, o) && (n[o] = e[o]);
  return n;
};
function bt(e, t, n = {}) {
  const o = n, { window: a = la } = o, s = hm(o, ["window"]);
  let r;
  const i = ji(() => a && "ResizeObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, c = se(() => $t(e), (f) => {
    u(), i.value && a && f && (r = new ResizeObserver(t), r.observe(f, s));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), c();
  };
  return mo(d), {
    isSupported: i,
    stop: d
  };
}
var ks = Object.getOwnPropertySymbols, gm = Object.prototype.hasOwnProperty, ym = Object.prototype.propertyIsEnumerable, bm = (e, t) => {
  var n = {};
  for (var o in e)
    gm.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ks)
    for (var o of ks(e))
      t.indexOf(o) < 0 && ym.call(e, o) && (n[o] = e[o]);
  return n;
};
function wm(e, t, n = {}) {
  const o = n, { window: a = la } = o, s = bm(o, ["window"]);
  let r;
  const i = ji(() => a && "MutationObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, c = se(() => $t(e), (f) => {
    u(), i.value && a && f && (r = new MutationObserver(t), r.observe(f, s));
  }, { immediate: !0 }), d = () => {
    u(), c();
  };
  return mo(d), {
    isSupported: i,
    stop: d
  };
}
var Cs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Cs || (Cs = {}));
var _m = Object.defineProperty, Ts = Object.getOwnPropertySymbols, Sm = Object.prototype.hasOwnProperty, km = Object.prototype.propertyIsEnumerable, Es = (e, t, n) => t in e ? _m(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Cm = (e, t) => {
  for (var n in t || (t = {}))
    Sm.call(t, n) && Es(e, n, t[n]);
  if (Ts)
    for (var n of Ts(t))
      km.call(t, n) && Es(e, n, t[n]);
  return e;
};
const Tm = {
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
Cm({
  linear: dm
}, Tm);
class Em extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function cr(e, t) {
  throw new Em(`[${e}] ${t}`);
}
const Ps = {
  current: 0
}, Os = A(0), Wi = 2e3, $s = Symbol("elZIndexContextKey"), Ui = Symbol("zIndexContextKey"), Ki = (e) => {
  const t = Ue() ? ye($s, Ps) : Ps, n = e || (Ue() ? ye(Ui, void 0) : void 0), o = y(() => {
    const r = l(n);
    return pe(r) ? r : Wi;
  }), a = y(() => o.value + Os.value), s = () => (t.current++, Os.value = t.current, a.value);
  return !Re && ye($s), {
    initialZIndex: o,
    currentZIndex: a,
    nextZIndex: s
  };
};
var Pm = {
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
const Om = (e) => (t, n) => $m(t, n, l(e)), $m = (e, t, n) => Gt(n, e, e).replace(/\{(\w+)\}/g, (o, a) => {
  var s;
  return `${(s = t?.[a]) != null ? s : `{${a}}`}`;
}), Im = (e) => {
  const t = y(() => l(e).name), n = Yn(e) ? e : A(e);
  return {
    lang: t,
    locale: n,
    t: Om(e)
  };
}, Gi = Symbol("localeContextKey"), ua = (e) => {
  const t = e || ye(Gi, A());
  return Im(y(() => t.value || Pm));
}, Zi = "__epPropKey", te = (e) => e, Lm = (e) => Ye(e) && !!e[Zi], ca = (e, t) => {
  if (!Ye(e) || Lm(e))
    return e;
  const { values: n, required: o, default: a, type: s, validator: r } = e, u = {
    type: s,
    required: !!o,
    validator: n || r ? (c) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), Wr(e, "default") && f.push(a), d || (d = f.includes(c))), r && (d || (d = r(c))), !d && f.length > 0) {
        const p = [...new Set(f)].map((v) => JSON.stringify(v)).join(", ");
        Pu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [Zi]: !0
  };
  return Wr(e, "default") && (u.default = a), u;
}, ve = (e) => Ho(Object.entries(e).map(([t, n]) => [
  t,
  ca(n, t)
])), Yi = ["", "default", "small", "large"], Tn = ca({
  type: String,
  values: Yi,
  required: !1
}), qi = Symbol("size"), xm = () => {
  const e = ye(qi, {});
  return y(() => l(e.size) || "");
}, Ji = Symbol("emptyValuesContextKey"), Rm = ["", void 0, null], Am = void 0, Xi = ve({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ie(e) ? !e() : !e
  }
}), Mm = (e, t) => {
  const n = Ue() ? ye(Ji, A({})) : A({}), o = y(() => e.emptyValues || n.value.emptyValues || Rm), a = y(() => Ie(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ie(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Am), s = (r) => o.value.includes(r);
  return o.value.includes(a.value), {
    emptyValues: o,
    valueOnClear: a,
    isEmptyValue: s
  };
}, Is = (e) => Object.keys(e), Wo = A();
function Qi(e, t = void 0) {
  return Ue() ? ye(Ci, Wo) : Wo;
}
function el(e, t) {
  const n = Qi(), o = Te(e, y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || xo;
  })), a = ua(y(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), s = Ki(y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Wi;
  })), r = y(() => {
    var i;
    return l(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return tl(y(() => l(n) || {})), {
    ns: o,
    locale: a,
    zIndex: s,
    size: r
  };
}
const tl = (e, t, n = !1) => {
  var o;
  const a = !!Ue(), s = a ? Qi() : void 0, r = (o = void 0) != null ? o : a ? mt : void 0;
  if (!r)
    return;
  const i = y(() => {
    const u = l(e);
    return s?.value ? Nm(s.value, u) : u;
  });
  return r(Ci, i), r(Gi, y(() => i.value.locale)), r(Ti, y(() => i.value.namespace)), r(Ui, y(() => i.value.zIndex)), r(qi, {
    size: y(() => i.value.size || "")
  }), r(Ji, y(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Wo.value) && (Wo.value = i.value), i;
}, Nm = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Is(e), ...Is(t)])], o = {};
  for (const a of n)
    o[a] = t[a] !== void 0 ? t[a] : e[a];
  return o;
}, xe = "update:modelValue", Jt = "change", Rt = "input";
var _e = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
};
function io(e, t = "px") {
  if (!e)
    return "";
  if (pe(e) || tm(e))
    return `${e}${t}`;
  if (Be(e))
    return e;
}
function zm(e, t) {
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
const nt = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, nl = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), dr = (e) => (e.install = ao, e), Fm = ve({
  size: {
    type: te([Number, String])
  },
  color: {
    type: String
  }
}), Bm = U({
  name: "ElIcon",
  inheritAttrs: !1
}), Vm = /* @__PURE__ */ U({
  ...Bm,
  props: Fm,
  setup(e) {
    const t = e, n = Te("icon"), o = y(() => {
      const { size: a, color: s } = t;
      return !a && !s ? {} : {
        fontSize: dt(a) ? void 0 : io(a),
        "--color": s
      };
    });
    return (a, s) => (_(), R("i", Yt({
      class: l(n).b(),
      style: l(o)
    }, a.$attrs), [
      re(a.$slots, "default")
    ], 16));
  }
});
var Dm = /* @__PURE__ */ _e(Vm, [["__file", "icon.vue"]]);
const He = nt(Dm);
/*! Element Plus Icons Vue v2.3.1 */
var Hm = /* @__PURE__ */ U({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), ol = Hm, jm = /* @__PURE__ */ U({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Wm = jm, Um = /* @__PURE__ */ U({
  name: "Check",
  __name: "check",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Km = Um, Gm = /* @__PURE__ */ U({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (_(), R("svg", {
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
}), al = Gm, Zm = /* @__PURE__ */ U({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Ym = Zm, qm = /* @__PURE__ */ U({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (_(), R("svg", {
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
}), da = qm, Jm = /* @__PURE__ */ U({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), lo = Jm, Xm = /* @__PURE__ */ U({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (_(), R("svg", {
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
}), Qm = Xm, ev = /* @__PURE__ */ U({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), tv = ev, nv = /* @__PURE__ */ U({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), ov = nv, av = /* @__PURE__ */ U({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), rv = av, sv = /* @__PURE__ */ U({
  name: "PictureFilled",
  __name: "picture-filled",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
      })
    ]));
  }
}), iv = sv, lv = /* @__PURE__ */ U({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), uv = lv, cv = /* @__PURE__ */ U({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), dv = cv, fv = /* @__PURE__ */ U({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), pv = fv, mv = /* @__PURE__ */ U({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      b("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), rl = mv;
const En = te([
  String,
  Object,
  Function
]), vv = {
  Close: lo
}, hv = {
  Close: lo
}, Uo = {
  success: dv,
  warning: rl,
  error: Ym,
  info: tv
}, sl = {
  validating: ov,
  success: al,
  error: da
}, il = () => Re && /firefox/i.test(window.navigator.userAgent);
let Ze;
const gv = {
  height: "0",
  visibility: "hidden",
  overflow: il() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, yv = [
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
function bv(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), a = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: yv.map((r) => [
    r,
    t.getPropertyValue(r)
  ]), paddingSize: o, borderSize: a, boxSizing: n };
}
function Ls(e, t = 1, n) {
  var o;
  Ze || (Ze = document.createElement("textarea"), document.body.appendChild(Ze));
  const { paddingSize: a, borderSize: s, boxSizing: r, contextStyle: i } = bv(e);
  i.forEach(([f, p]) => Ze?.style.setProperty(f, p)), Object.entries(gv).forEach(([f, p]) => Ze?.style.setProperty(f, p, "important")), Ze.value = e.value || e.placeholder || "";
  let u = Ze.scrollHeight;
  const c = {};
  r === "border-box" ? u = u + s : r === "content-box" && (u = u - a), Ze.value = "";
  const d = Ze.scrollHeight - a;
  if (pe(t)) {
    let f = d * t;
    r === "border-box" && (f = f + a + s), u = Math.max(f, u), c.minHeight = `${f}px`;
  }
  if (pe(n)) {
    let f = d * n;
    r === "border-box" && (f = f + a + s), u = Math.min(f, u);
  }
  return c.height = `${u}px`, (o = Ze.parentNode) == null || o.removeChild(Ze), Ze = void 0, c;
}
const ll = (e) => e, wv = ve({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), un = (e) => em(wv, e), _v = ve({
  id: {
    type: String,
    default: void 0
  },
  size: Tn,
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
    type: En
  },
  prefixIcon: {
    type: En
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
    default: () => ll({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...un(["ariaLabel"])
}), Sv = {
  [xe]: (e) => Be(e),
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
}, kv = ["class", "style"], Cv = /^on[A-Z]/, Tv = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = y(() => (n?.value || []).concat(kv)), a = Ue();
  return a ? y(() => {
    var s;
    return Ho(Object.entries((s = a.proxy) == null ? void 0 : s.$attrs).filter(([r]) => !o.value.includes(r) && !(t && Cv.test(r))));
  }) : y(() => ({}));
}, fr = Symbol("formContextKey"), Ko = Symbol("formItemContextKey"), xs = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Ev = Symbol("elIdInjection"), ul = () => Ue() ? ye(Ev, xs) : xs, fa = (e) => {
  const t = ul(), n = tr();
  return um(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, pa = () => {
  const e = ye(fr, void 0), t = ye(Ko, void 0);
  return {
    form: e,
    formItem: t
  };
}, pr = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = A(!1)), o || (o = A(!1));
  const a = A();
  let s;
  const r = y(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return Pe(() => {
    s = se([wt(e, "id"), n], ([i, u]) => {
      const c = i ?? (u ? void 0 : fa().value);
      c !== a.value && (t?.removeInputId && (a.value && t.removeInputId(a.value), !o?.value && !u && c && t.addInputId(c)), a.value = c);
    }, { immediate: !0 });
  }), _i(() => {
    s && s(), t?.removeInputId && a.value && t.removeInputId(a.value);
  }), {
    isLabeledByFormItem: r,
    inputId: a
  };
}, cl = (e) => {
  const t = Ue();
  return y(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, vo = (e, t = {}) => {
  const n = A(void 0), o = t.prop ? n : cl("size"), a = t.global ? n : xm(), s = t.form ? { size: void 0 } : ye(fr, void 0), r = t.formItem ? { size: void 0 } : ye(Ko, void 0);
  return y(() => o.value || l(e) || r?.size || s?.size || a.value || "");
}, dl = (e) => {
  const t = cl("disabled"), n = ye(fr, void 0);
  return y(() => t.value || l(e) || n?.disabled || !1);
};
function fl(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: a
} = {}) {
  const s = Ue(), { emit: r } = s, i = Zt(), u = A(!1), c = (p) => {
    Ie(t) && t(p) || u.value || (u.value = !0, r("focus", p), n?.());
  }, d = (p) => {
    var v;
    Ie(o) && o(p) || p.relatedTarget && ((v = i.value) != null && v.contains(p.relatedTarget)) || (u.value = !1, r("blur", p), a?.());
  }, f = () => {
    var p, v;
    (p = i.value) != null && p.contains(document.activeElement) && i.value !== document.activeElement || (v = e.value) == null || v.focus();
  };
  return se(i, (p) => {
    p && p.setAttribute("tabindex", "-1");
  }), We(i, "focus", c, !0), We(i, "blur", d, !0), We(i, "click", f, !0), {
    isFocused: u,
    wrapperRef: i,
    handleFocus: c,
    handleBlur: d
  };
}
const Pv = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function pl({
  afterComposition: e,
  emit: t
}) {
  const n = A(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, a = (i) => {
    var u;
    t?.("compositionupdate", i);
    const c = (u = i.target) == null ? void 0 : u.value, d = c[c.length - 1] || "";
    n.value = !Pv(d);
  }, s = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Ce(() => e(i)));
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
function Ov(e) {
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
const $v = "ElInput", Iv = U({
  name: $v,
  inheritAttrs: !1
}), Lv = /* @__PURE__ */ U({
  ...Iv,
  props: _v,
  emits: Sv,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Ou(), s = Tv(), r = $u(), i = y(() => [
      o.type === "textarea" ? h.b() : m.b(),
      m.m(p.value),
      m.is("disabled", v.value),
      m.is("exceed", be.value),
      {
        [m.b("group")]: r.prepend || r.append,
        [m.m("prefix")]: r.prefix || o.prefixIcon,
        [m.m("suffix")]: r.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [m.bm("suffix", "password-clear")]: ee.value && X.value,
        [m.b("hidden")]: o.type === "hidden"
      },
      a.class
    ]), u = y(() => [
      m.e("wrapper"),
      m.is("focus", G.value)
    ]), { form: c, formItem: d } = pa(), { inputId: f } = pr(o, {
      formItemContext: d
    }), p = vo(), v = dl(), m = Te("input"), h = Te("textarea"), k = Zt(), g = Zt(), $ = A(!1), S = A(!1), O = A(), T = Zt(o.inputStyle), I = y(() => k.value || g.value), { wrapperRef: x, isFocused: G, handleFocus: W, handleBlur: Q } = fl(I, {
      beforeFocus() {
        return v.value;
      },
      afterBlur() {
        var D;
        o.validateEvent && ((D = d?.validate) == null || D.call(d, "blur").catch((fe) => void 0));
      }
    }), ie = y(() => {
      var D;
      return (D = c?.statusIcon) != null ? D : !1;
    }), w = y(() => d?.validateState || ""), N = y(() => w.value && sl[w.value]), Y = y(() => S.value ? pv : Qm), P = y(() => [
      a.style
    ]), z = y(() => [
      o.inputStyle,
      T.value,
      { resize: o.resize }
    ]), E = y(() => xt(o.modelValue) ? "" : String(o.modelValue)), ee = y(() => o.clearable && !v.value && !o.readonly && !!E.value && (G.value || $.value)), X = y(() => o.showPassword && !v.value && !!E.value && (!!E.value || G.value)), le = y(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !v.value && !o.readonly && !o.showPassword), he = y(() => E.value.length), be = y(() => !!le.value && he.value > Number(o.maxlength)), J = y(() => !!r.suffix || !!o.suffixIcon || ee.value || o.showPassword || le.value || !!w.value && ie.value), [de, ge] = Ov(k);
    bt(g, (D) => {
      if (me(), !le.value || o.resize !== "both")
        return;
      const fe = D[0], { width: ot } = fe.contentRect;
      O.value = {
        right: `calc(100% - ${ot + 15 + 6}px)`
      };
    });
    const Ee = () => {
      const { type: D, autosize: fe } = o;
      if (!(!Re || D !== "textarea" || !g.value))
        if (fe) {
          const ot = Ye(fe) ? fe.minRows : void 0, Bt = Ye(fe) ? fe.maxRows : void 0, Vt = Ls(g.value, ot, Bt);
          T.value = {
            overflowY: "hidden",
            ...Vt
          }, Ce(() => {
            g.value.offsetHeight, T.value = Vt;
          });
        } else
          T.value = {
            minHeight: Ls(g.value).minHeight
          };
    }, me = ((D) => {
      let fe = !1;
      return () => {
        var ot;
        if (fe || !o.autosize)
          return;
        ((ot = g.value) == null ? void 0 : ot.offsetParent) === null || (D(), fe = !0);
      };
    })(Ee), Fe = () => {
      const D = I.value, fe = o.formatter ? o.formatter(E.value) : E.value;
      !D || D.value === fe || (D.value = fe);
    }, B = async (D) => {
      de();
      let { value: fe } = D.target;
      if (o.formatter && o.parser && (fe = o.parser(fe)), !oe.value) {
        if (fe === E.value) {
          Fe();
          return;
        }
        n(xe, fe), n(Rt, fe), await Ce(), Fe(), ge();
      }
    }, ne = (D) => {
      let { value: fe } = D.target;
      o.formatter && o.parser && (fe = o.parser(fe)), n(Jt, fe);
    }, {
      isComposing: oe,
      handleCompositionStart: Le,
      handleCompositionUpdate: De,
      handleCompositionEnd: Ae
    } = pl({ emit: n, afterComposition: B }), Se = () => {
      de(), S.value = !S.value, setTimeout(ge);
    }, ce = () => {
      var D;
      return (D = I.value) == null ? void 0 : D.focus();
    }, Ke = () => {
      var D;
      return (D = I.value) == null ? void 0 : D.blur();
    }, cn = (D) => {
      $.value = !1, n("mouseleave", D);
    }, Ge = (D) => {
      $.value = !0, n("mouseenter", D);
    }, gt = (D) => {
      n("keydown", D);
    }, dn = () => {
      var D;
      (D = I.value) == null || D.select();
    }, Qt = () => {
      n(xe, ""), n(Jt, ""), n("clear"), n(Rt, "");
    };
    return se(() => o.modelValue, () => {
      var D;
      Ce(() => Ee()), o.validateEvent && ((D = d?.validate) == null || D.call(d, "change").catch((fe) => void 0));
    }), se(E, () => Fe()), se(() => o.type, async () => {
      await Ce(), Fe(), Ee();
    }), Pe(() => {
      !o.formatter && o.parser, Fe(), Ce(Ee);
    }), t({
      input: k,
      textarea: g,
      ref: I,
      textareaStyle: z,
      autosize: wt(o, "autosize"),
      isComposing: oe,
      focus: ce,
      blur: Ke,
      select: dn,
      clear: Qt,
      resizeTextarea: Ee
    }), (D, fe) => (_(), R("div", {
      class: M([
        l(i),
        {
          [l(m).bm("group", "append")]: D.$slots.append,
          [l(m).bm("group", "prepend")]: D.$slots.prepend
        }
      ]),
      style: we(l(P)),
      onMouseenter: Ge,
      onMouseleave: cn
    }, [
      H(" input "),
      D.type !== "textarea" ? (_(), R($e, { key: 0 }, [
        H(" prepend slot "),
        D.$slots.prepend ? (_(), R("div", {
          key: 0,
          class: M(l(m).be("group", "prepend"))
        }, [
          re(D.$slots, "prepend")
        ], 2)) : H("v-if", !0),
        b("div", {
          ref_key: "wrapperRef",
          ref: x,
          class: M(l(u))
        }, [
          H(" prefix slot "),
          D.$slots.prefix || D.prefixIcon ? (_(), R("span", {
            key: 0,
            class: M(l(m).e("prefix"))
          }, [
            b("span", {
              class: M(l(m).e("prefix-inner"))
            }, [
              re(D.$slots, "prefix"),
              D.prefixIcon ? (_(), q(l(He), {
                key: 0,
                class: M(l(m).e("icon"))
              }, {
                default: Z(() => [
                  (_(), q(at(D.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 2)) : H("v-if", !0),
          b("input", Yt({
            id: l(f),
            ref_key: "input",
            ref: k,
            class: l(m).e("inner")
          }, l(s), {
            minlength: D.minlength,
            maxlength: D.maxlength,
            type: D.showPassword ? S.value ? "text" : "password" : D.type,
            disabled: l(v),
            readonly: D.readonly,
            autocomplete: D.autocomplete,
            tabindex: D.tabindex,
            "aria-label": D.ariaLabel,
            placeholder: D.placeholder,
            style: D.inputStyle,
            form: D.form,
            autofocus: D.autofocus,
            role: D.containerRole,
            onCompositionstart: l(Le),
            onCompositionupdate: l(De),
            onCompositionend: l(Ae),
            onInput: B,
            onChange: ne,
            onKeydown: gt
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          H(" suffix slot "),
          l(J) ? (_(), R("span", {
            key: 1,
            class: M(l(m).e("suffix"))
          }, [
            b("span", {
              class: M(l(m).e("suffix-inner"))
            }, [
              !l(ee) || !l(X) || !l(le) ? (_(), R($e, { key: 0 }, [
                re(D.$slots, "suffix"),
                D.suffixIcon ? (_(), q(l(He), {
                  key: 0,
                  class: M(l(m).e("icon"))
                }, {
                  default: Z(() => [
                    (_(), q(at(D.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : H("v-if", !0)
              ], 64)) : H("v-if", !0),
              l(ee) ? (_(), q(l(He), {
                key: 1,
                class: M([l(m).e("icon"), l(m).e("clear")]),
                onMousedown: Oe(l(ao), ["prevent"]),
                onClick: Qt
              }, {
                default: Z(() => [
                  F(l(da))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : H("v-if", !0),
              l(X) ? (_(), q(l(He), {
                key: 2,
                class: M([l(m).e("icon"), l(m).e("password")]),
                onClick: Se
              }, {
                default: Z(() => [
                  (_(), q(at(l(Y))))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0),
              l(le) ? (_(), R("span", {
                key: 3,
                class: M(l(m).e("count"))
              }, [
                b("span", {
                  class: M(l(m).e("count-inner"))
                }, K(l(he)) + " / " + K(D.maxlength), 3)
              ], 2)) : H("v-if", !0),
              l(w) && l(N) && l(ie) ? (_(), q(l(He), {
                key: 4,
                class: M([
                  l(m).e("icon"),
                  l(m).e("validateIcon"),
                  l(m).is("loading", l(w) === "validating")
                ])
              }, {
                default: Z(() => [
                  (_(), q(at(l(N))))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 2)) : H("v-if", !0)
        ], 2),
        H(" append slot "),
        D.$slots.append ? (_(), R("div", {
          key: 1,
          class: M(l(m).be("group", "append"))
        }, [
          re(D.$slots, "append")
        ], 2)) : H("v-if", !0)
      ], 64)) : (_(), R($e, { key: 1 }, [
        H(" textarea "),
        b("textarea", Yt({
          id: l(f),
          ref_key: "textarea",
          ref: g,
          class: [l(h).e("inner"), l(m).is("focus", l(G))]
        }, l(s), {
          minlength: D.minlength,
          maxlength: D.maxlength,
          tabindex: D.tabindex,
          disabled: l(v),
          readonly: D.readonly,
          autocomplete: D.autocomplete,
          style: l(z),
          "aria-label": D.ariaLabel,
          placeholder: D.placeholder,
          form: D.form,
          autofocus: D.autofocus,
          rows: D.rows,
          role: D.containerRole,
          onCompositionstart: l(Le),
          onCompositionupdate: l(De),
          onCompositionend: l(Ae),
          onInput: B,
          onFocus: l(W),
          onBlur: l(Q),
          onChange: ne,
          onKeydown: gt
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        l(le) ? (_(), R("span", {
          key: 0,
          style: we(O.value),
          class: M(l(m).e("count"))
        }, K(l(he)) + " / " + K(D.maxlength), 7)) : H("v-if", !0)
      ], 64))
    ], 38));
  }
});
var xv = /* @__PURE__ */ _e(Lv, [["__file", "input.vue"]]);
const mr = nt(xv), pn = 4, Rv = {
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
}, Av = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), vr = Symbol("scrollbarContextKey"), Mv = ve({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Nv = "Thumb", zv = /* @__PURE__ */ U({
  __name: "thumb",
  props: Mv,
  setup(e) {
    const t = e, n = ye(vr), o = Te("scrollbar");
    n || cr(Nv, "can not inject scrollbar context");
    const a = A(), s = A(), r = A({}), i = A(!1);
    let u = !1, c = !1, d = Re ? document.onselectstart : null;
    const f = y(() => Rv[t.vertical ? "vertical" : "horizontal"]), p = y(() => Av({
      size: t.size,
      move: t.move,
      bar: f.value
    })), v = y(() => a.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / s.value[f.value.offset]), m = (I) => {
      var x;
      if (I.stopPropagation(), I.ctrlKey || [1, 2].includes(I.button))
        return;
      (x = window.getSelection()) == null || x.removeAllRanges(), k(I);
      const G = I.currentTarget;
      G && (r.value[f.value.axis] = G[f.value.offset] - (I[f.value.client] - G.getBoundingClientRect()[f.value.direction]));
    }, h = (I) => {
      if (!s.value || !a.value || !n.wrapElement)
        return;
      const x = Math.abs(I.target.getBoundingClientRect()[f.value.direction] - I[f.value.client]), G = s.value[f.value.offset] / 2, W = (x - G) * 100 * v.value / a.value[f.value.offset];
      n.wrapElement[f.value.scroll] = W * n.wrapElement[f.value.scrollSize] / 100;
    }, k = (I) => {
      I.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", $), d = document.onselectstart, document.onselectstart = () => !1;
    }, g = (I) => {
      if (!a.value || !s.value || u === !1)
        return;
      const x = r.value[f.value.axis];
      if (!x)
        return;
      const G = (a.value.getBoundingClientRect()[f.value.direction] - I[f.value.client]) * -1, W = s.value[f.value.offset] - x, Q = (G - W) * 100 * v.value / a.value[f.value.offset];
      n.wrapElement[f.value.scroll] = Q * n.wrapElement[f.value.scrollSize] / 100;
    }, $ = () => {
      u = !1, r.value[f.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", $), T(), c && (i.value = !1);
    }, S = () => {
      c = !1, i.value = !!t.size;
    }, O = () => {
      c = !0, i.value = u;
    };
    Ct(() => {
      T(), document.removeEventListener("mouseup", $);
    });
    const T = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return We(wt(n, "scrollbarElement"), "mousemove", S), We(wt(n, "scrollbarElement"), "mouseleave", O), (I, x) => (_(), q(An, {
      name: l(o).b("fade"),
      persisted: ""
    }, {
      default: Z(() => [
        qe(b("div", {
          ref_key: "instance",
          ref: a,
          class: M([l(o).e("bar"), l(o).is(l(f).key)]),
          onMousedown: h
        }, [
          b("div", {
            ref_key: "thumb",
            ref: s,
            class: M(l(o).e("thumb")),
            style: we(l(p)),
            onMousedown: m
          }, null, 38)
        ], 34), [
          [At, I.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Rs = /* @__PURE__ */ _e(zv, [["__file", "thumb.vue"]]);
const Fv = ve({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Bv = /* @__PURE__ */ U({
  __name: "bar",
  props: Fv,
  setup(e, { expose: t }) {
    const n = e, o = ye(vr), a = A(0), s = A(0), r = A(""), i = A(""), u = A(1), c = A(1);
    return t({
      handleScroll: (p) => {
        if (p) {
          const v = p.offsetHeight - pn, m = p.offsetWidth - pn;
          s.value = p.scrollTop * 100 / v * u.value, a.value = p.scrollLeft * 100 / m * c.value;
        }
      },
      update: () => {
        const p = o?.wrapElement;
        if (!p)
          return;
        const v = p.offsetHeight - pn, m = p.offsetWidth - pn, h = v ** 2 / p.scrollHeight, k = m ** 2 / p.scrollWidth, g = Math.max(h, n.minSize), $ = Math.max(k, n.minSize);
        u.value = h / (v - h) / (g / (v - g)), c.value = k / (m - k) / ($ / (m - $)), i.value = g + pn < v ? `${g}px` : "", r.value = $ + pn < m ? `${$}px` : "";
      }
    }), (p, v) => (_(), R($e, null, [
      F(Rs, {
        move: a.value,
        ratio: c.value,
        size: r.value,
        always: p.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      F(Rs, {
        move: s.value,
        ratio: u.value,
        size: i.value,
        vertical: "",
        always: p.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Vv = /* @__PURE__ */ _e(Bv, [["__file", "bar.vue"]]);
const Dv = ve({
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
  ...un(["ariaLabel", "ariaOrientation"])
}), Hv = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(pe)
}, jv = "ElScrollbar", Wv = U({
  name: jv
}), Uv = /* @__PURE__ */ U({
  ...Wv,
  props: Dv,
  emits: Hv,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Te("scrollbar");
    let s, r, i = 0, u = 0;
    const c = A(), d = A(), f = A(), p = A(), v = y(() => {
      const T = {};
      return o.height && (T.height = io(o.height)), o.maxHeight && (T.maxHeight = io(o.maxHeight)), [o.wrapStyle, T];
    }), m = y(() => [
      o.wrapClass,
      a.e("wrap"),
      { [a.em("wrap", "hidden-default")]: !o.native }
    ]), h = y(() => [a.e("view"), o.viewClass]), k = () => {
      var T;
      d.value && ((T = p.value) == null || T.handleScroll(d.value), i = d.value.scrollTop, u = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function g(T, I) {
      Ye(T) ? d.value.scrollTo(T) : pe(T) && pe(I) && d.value.scrollTo(T, I);
    }
    const $ = (T) => {
      pe(T) && (d.value.scrollTop = T);
    }, S = (T) => {
      pe(T) && (d.value.scrollLeft = T);
    }, O = () => {
      var T;
      (T = p.value) == null || T.update();
    };
    return se(() => o.noresize, (T) => {
      T ? (s?.(), r?.()) : ({ stop: s } = bt(f, O), r = We("resize", O));
    }, { immediate: !0 }), se(() => [o.maxHeight, o.height], () => {
      o.native || Ce(() => {
        var T;
        O(), d.value && ((T = p.value) == null || T.handleScroll(d.value));
      });
    }), mt(vr, Mt({
      scrollbarElement: c,
      wrapElement: d
    })), Iu(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = u);
    }), Pe(() => {
      o.native || Ce(() => {
        O();
      });
    }), Si(() => O()), t({
      wrapRef: d,
      update: O,
      scrollTo: g,
      setScrollTop: $,
      setScrollLeft: S,
      handleScroll: k
    }), (T, I) => (_(), R("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: M(l(a).b())
    }, [
      b("div", {
        ref_key: "wrapRef",
        ref: d,
        class: M(l(m)),
        style: we(l(v)),
        tabindex: T.tabindex,
        onScroll: k
      }, [
        (_(), q(at(T.tag), {
          id: T.id,
          ref_key: "resizeRef",
          ref: f,
          class: M(l(h)),
          style: we(T.viewStyle),
          role: T.role,
          "aria-label": T.ariaLabel,
          "aria-orientation": T.ariaOrientation
        }, {
          default: Z(() => [
            re(T.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      T.native ? H("v-if", !0) : (_(), q(Vv, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        always: T.always,
        "min-size": T.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Kv = /* @__PURE__ */ _e(Uv, [["__file", "scrollbar.vue"]]);
const Gv = nt(Kv), hr = Symbol("popper"), ml = Symbol("popperContent"), Zv = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], vl = ve({
  role: {
    type: String,
    values: Zv,
    default: "tooltip"
  }
}), Yv = U({
  name: "ElPopper",
  inheritAttrs: !1
}), qv = /* @__PURE__ */ U({
  ...Yv,
  props: vl,
  setup(e, { expose: t }) {
    const n = e, o = A(), a = A(), s = A(), r = A(), i = y(() => n.role), u = {
      triggerRef: o,
      popperInstanceRef: a,
      contentRef: s,
      referenceRef: r,
      role: i
    };
    return t(u), mt(hr, u), (c, d) => re(c.$slots, "default");
  }
});
var Jv = /* @__PURE__ */ _e(qv, [["__file", "popper.vue"]]);
const hl = ve({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Xv = U({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Qv = /* @__PURE__ */ U({
  ...Xv,
  props: hl,
  setup(e, { expose: t }) {
    const n = e, o = Te("popper"), { arrowOffset: a, arrowRef: s, arrowStyle: r } = ye(ml, void 0);
    return se(() => n.arrowOffset, (i) => {
      a.value = i;
    }), Ct(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (i, u) => (_(), R("span", {
      ref_key: "arrowRef",
      ref: s,
      class: M(l(o).e("arrow")),
      style: we(l(r)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var eh = /* @__PURE__ */ _e(Qv, [["__file", "arrow.vue"]]);
const gl = ve({
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
}), yl = Symbol("elForwardRef"), th = (e) => {
  mt(yl, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, nh = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Ba = (e) => {
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
}, oh = "ElOnlyChild", ah = U({
  name: oh,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const a = ye(yl), s = nh((o = a?.setForwardRef) != null ? o : ao);
    return () => {
      var r;
      const i = (r = t.default) == null ? void 0 : r.call(t, n);
      if (!i || i.length > 1)
        return null;
      const u = bl(i);
      return u ? qe(Lu(u, n), [[s]]) : null;
    };
  }
});
function bl(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Ye(n))
      switch (n.type) {
        case Ru:
          continue;
        case xu:
        case "svg":
          return As(n);
        case $e:
          return bl(n.children);
        default:
          return n;
      }
    return As(n);
  }
  return null;
}
function As(e) {
  const t = Te("only-child");
  return F("span", {
    class: t.e("content")
  }, [e]);
}
const rh = U({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), sh = /* @__PURE__ */ U({
  ...rh,
  props: gl,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: a } = ye(hr, void 0);
    th(a);
    const s = y(() => i.value ? n.id : void 0), r = y(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = y(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), u = y(() => i.value ? `${n.open}` : void 0);
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
    return Pe(() => {
      se(() => n.virtualRef, (f) => {
        f && (a.value = $t(f));
      }, {
        immediate: !0
      }), se(a, (f, p) => {
        c?.(), c = void 0, pt(f) && (d.forEach((v) => {
          var m;
          const h = n[v];
          h && (f.addEventListener(v.slice(2).toLowerCase(), h), (m = p?.removeEventListener) == null || m.call(p, v.slice(2).toLowerCase(), h));
        }), Ba(f) && (c = se([s, r, i, u], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((m, h) => {
            xt(v[h]) ? f.removeAttribute(m) : f.setAttribute(m, v[h]);
          });
        }, { immediate: !0 }))), pt(p) && Ba(p) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((v) => p.removeAttribute(v));
      }, {
        immediate: !0
      });
    }), Ct(() => {
      if (c?.(), c = void 0, a.value && pt(a.value)) {
        const f = a.value;
        d.forEach((p) => {
          const v = n[p];
          v && f.removeEventListener(p.slice(2).toLowerCase(), v);
        }), a.value = void 0;
      }
    }), t({
      triggerRef: a
    }), (f, p) => f.virtualTriggering ? H("v-if", !0) : (_(), q(l(ah), Yt({ key: 0 }, f.$attrs, {
      "aria-controls": l(s),
      "aria-describedby": l(r),
      "aria-expanded": l(u),
      "aria-haspopup": l(i)
    }), {
      default: Z(() => [
        re(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var ih = /* @__PURE__ */ _e(sh, [["__file", "trigger.vue"]]);
const Sa = "focus-trap.focus-after-trapped", ka = "focus-trap.focus-after-released", lh = "focus-trap.focusout-prevented", Ms = {
  cancelable: !0,
  bubbles: !1
}, uh = {
  cancelable: !0,
  bubbles: !1
}, Ns = "focusAfterTrapped", zs = "focusAfterReleased", ch = Symbol("elFocusTrap"), gr = A(), ma = A(0), yr = A(0);
let Co = 0;
const wl = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Fs = (e, t) => {
  for (const n of e)
    if (!dh(n, t))
      return n;
}, dh = (e, t) => {
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
}, fh = (e) => {
  const t = wl(e), n = Fs(t, e), o = Fs(t.reverse(), e);
  return [n, o];
}, ph = (e) => e instanceof HTMLInputElement && "select" in e, Et = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    pt(e) && !Ba(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), yr.value = window.performance.now(), e !== n && ph(e) && t && e.select(), pt(e) && o && e.removeAttribute("tabindex");
  }
};
function Bs(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const mh = () => {
  let e = [];
  return {
    push: (o) => {
      const a = e[0];
      a && o !== a && a.pause(), e = Bs(e, o), e.unshift(o);
    },
    remove: (o) => {
      var a, s;
      e = Bs(e, o), (s = (a = e[0]) == null ? void 0 : a.resume) == null || s.call(a);
    }
  };
}, vh = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Et(o, t), document.activeElement !== n)
      return;
}, Vs = mh(), hh = () => ma.value > yr.value, To = () => {
  gr.value = "pointer", ma.value = window.performance.now();
}, Ds = () => {
  gr.value = "keyboard", ma.value = window.performance.now();
}, gh = () => (Pe(() => {
  Co === 0 && (document.addEventListener("mousedown", To), document.addEventListener("touchstart", To), document.addEventListener("keydown", Ds)), Co++;
}), Ct(() => {
  Co--, Co <= 0 && (document.removeEventListener("mousedown", To), document.removeEventListener("touchstart", To), document.removeEventListener("keydown", Ds));
}), {
  focusReason: gr,
  lastUserFocusTimestamp: ma,
  lastAutomatedFocusTimestamp: yr
}), Eo = (e) => new CustomEvent(lh, {
  ...uh,
  detail: e
}), ze = {
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
let hn = [];
const Hs = (e) => {
  e.code === ze.esc && hn.forEach((t) => t(e));
}, yh = (e) => {
  Pe(() => {
    hn.length === 0 && document.addEventListener("keydown", Hs), Re && hn.push(e);
  }), Ct(() => {
    hn = hn.filter((t) => t !== e), hn.length === 0 && Re && document.removeEventListener("keydown", Hs);
  });
}, bh = U({
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
    Ns,
    zs,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = A();
    let o, a;
    const { focusReason: s } = gh();
    yh((m) => {
      e.trapped && !r.paused && t("release-requested", m);
    });
    const r = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (m) => {
      if (!e.loop && !e.trapped || r.paused)
        return;
      const { code: h, altKey: k, ctrlKey: g, metaKey: $, currentTarget: S, shiftKey: O } = m, { loop: T } = e, I = h === ze.tab && !k && !g && !$, x = document.activeElement;
      if (I && x) {
        const G = S, [W, Q] = fh(G);
        if (W && Q) {
          if (!O && x === Q) {
            const w = Eo({
              focusReason: s.value
            });
            t("focusout-prevented", w), w.defaultPrevented || (m.preventDefault(), T && Et(W, !0));
          } else if (O && [W, G].includes(x)) {
            const w = Eo({
              focusReason: s.value
            });
            t("focusout-prevented", w), w.defaultPrevented || (m.preventDefault(), T && Et(Q, !0));
          }
        } else if (x === G) {
          const w = Eo({
            focusReason: s.value
          });
          t("focusout-prevented", w), w.defaultPrevented || m.preventDefault();
        }
      }
    };
    mt(ch, {
      focusTrapRef: n,
      onKeydown: i
    }), se(() => e.focusTrapEl, (m) => {
      m && (n.value = m);
    }, { immediate: !0 }), se([n], ([m], [h]) => {
      m && (m.addEventListener("keydown", i), m.addEventListener("focusin", d), m.addEventListener("focusout", f)), h && (h.removeEventListener("keydown", i), h.removeEventListener("focusin", d), h.removeEventListener("focusout", f));
    });
    const u = (m) => {
      t(Ns, m);
    }, c = (m) => t(zs, m), d = (m) => {
      const h = l(n);
      if (!h)
        return;
      const k = m.target, g = m.relatedTarget, $ = k && h.contains(k);
      e.trapped || g && h.contains(g) || (o = g), $ && t("focusin", m), !r.paused && e.trapped && ($ ? a = k : Et(a, !0));
    }, f = (m) => {
      const h = l(n);
      if (!(r.paused || !h))
        if (e.trapped) {
          const k = m.relatedTarget;
          !xt(k) && !h.contains(k) && setTimeout(() => {
            if (!r.paused && e.trapped) {
              const g = Eo({
                focusReason: s.value
              });
              t("focusout-prevented", g), g.defaultPrevented || Et(a, !0);
            }
          }, 0);
        } else {
          const k = m.target;
          k && h.contains(k) || t("focusout", m);
        }
    };
    async function p() {
      await Ce();
      const m = l(n);
      if (m) {
        Vs.push(r);
        const h = m.contains(document.activeElement) ? o : document.activeElement;
        if (o = h, !m.contains(h)) {
          const g = new Event(Sa, Ms);
          m.addEventListener(Sa, u), m.dispatchEvent(g), g.defaultPrevented || Ce(() => {
            let $ = e.focusStartEl;
            Be($) || (Et($), document.activeElement !== $ && ($ = "first")), $ === "first" && vh(wl(m), !0), (document.activeElement === h || $ === "container") && Et(m);
          });
        }
      }
    }
    function v() {
      const m = l(n);
      if (m) {
        m.removeEventListener(Sa, u);
        const h = new CustomEvent(ka, {
          ...Ms,
          detail: {
            focusReason: s.value
          }
        });
        m.addEventListener(ka, c), m.dispatchEvent(h), !h.defaultPrevented && (s.value == "keyboard" || !hh() || m.contains(document.activeElement)) && Et(o ?? document.body), m.removeEventListener(ka, c), Vs.remove(r);
      }
    }
    return Pe(() => {
      e.trapped && p(), se(() => e.trapped, (m) => {
        m ? p() : v();
      });
    }), Ct(() => {
      e.trapped && v(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", f), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function wh(e, t, n, o, a, s) {
  return re(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var _h = /* @__PURE__ */ _e(bh, [["render", wh], ["__file", "focus-trap.vue"]]), Je = "top", it = "bottom", lt = "right", Xe = "left", br = "auto", ho = [Je, it, lt, Xe], Pn = "start", uo = "end", Sh = "clippingParents", _l = "viewport", Dn = "popper", kh = "reference", js = ho.reduce(function(e, t) {
  return e.concat([t + "-" + Pn, t + "-" + uo]);
}, []), Nn = [].concat(ho, [br]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Pn, t + "-" + uo]);
}, []), Ch = "beforeRead", Th = "read", Eh = "afterRead", Ph = "beforeMain", Oh = "main", $h = "afterMain", Ih = "beforeWrite", Lh = "write", xh = "afterWrite", Rh = [Ch, Th, Eh, Ph, Oh, $h, Ih, Lh, xh];
function kt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function tt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function rn(e) {
  var t = tt(e).Element;
  return e instanceof t || e instanceof Element;
}
function st(e) {
  var t = tt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function wr(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ah(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, a = t.attributes[n] || {}, s = t.elements[n];
    !st(s) || !kt(s) || (Object.assign(s.style, o), Object.keys(a).forEach(function(r) {
      var i = a[r];
      i === !1 ? s.removeAttribute(r) : s.setAttribute(r, i === !0 ? "" : i);
    }));
  });
}
function Mh(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var a = t.elements[o], s = t.attributes[o] || {}, r = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = r.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !st(a) || !kt(a) || (Object.assign(a.style, i), Object.keys(s).forEach(function(u) {
        a.removeAttribute(u);
      }));
    });
  };
}
var Sl = { name: "applyStyles", enabled: !0, phase: "write", fn: Ah, effect: Mh, requires: ["computeStyles"] };
function _t(e) {
  return e.split("-")[0];
}
var on = Math.max, Go = Math.min, On = Math.round;
function Va() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function kl() {
  return !/^((?!chrome|android).)*safari/i.test(Va());
}
function $n(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), a = 1, s = 1;
  t && st(e) && (a = e.offsetWidth > 0 && On(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && On(o.height) / e.offsetHeight || 1);
  var r = rn(e) ? tt(e) : window, i = r.visualViewport, u = !kl() && n, c = (o.left + (u && i ? i.offsetLeft : 0)) / a, d = (o.top + (u && i ? i.offsetTop : 0)) / s, f = o.width / a, p = o.height / s;
  return { width: f, height: p, top: d, right: c + f, bottom: d + p, left: c, x: c, y: d };
}
function _r(e) {
  var t = $n(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function Cl(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && wr(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Nt(e) {
  return tt(e).getComputedStyle(e);
}
function Nh(e) {
  return ["table", "td", "th"].indexOf(kt(e)) >= 0;
}
function Xt(e) {
  return ((rn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function va(e) {
  return kt(e) === "html" ? e : e.assignedSlot || e.parentNode || (wr(e) ? e.host : null) || Xt(e);
}
function Ws(e) {
  return !st(e) || Nt(e).position === "fixed" ? null : e.offsetParent;
}
function zh(e) {
  var t = /firefox/i.test(Va()), n = /Trident/i.test(Va());
  if (n && st(e)) {
    var o = Nt(e);
    if (o.position === "fixed") return null;
  }
  var a = va(e);
  for (wr(a) && (a = a.host); st(a) && ["html", "body"].indexOf(kt(a)) < 0; ) {
    var s = Nt(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return a;
    a = a.parentNode;
  }
  return null;
}
function go(e) {
  for (var t = tt(e), n = Ws(e); n && Nh(n) && Nt(n).position === "static"; ) n = Ws(n);
  return n && (kt(n) === "html" || kt(n) === "body" && Nt(n).position === "static") ? t : n || zh(e) || t;
}
function Sr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xn(e, t, n) {
  return on(e, Go(t, n));
}
function Fh(e, t, n) {
  var o = Xn(e, t, n);
  return o > n ? n : o;
}
function Tl() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function El(e) {
  return Object.assign({}, Tl(), e);
}
function Pl(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Bh = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, El(typeof e != "number" ? e : Pl(e, ho));
};
function Vh(e) {
  var t, n = e.state, o = e.name, a = e.options, s = n.elements.arrow, r = n.modifiersData.popperOffsets, i = _t(n.placement), u = Sr(i), c = [Xe, lt].indexOf(i) >= 0, d = c ? "height" : "width";
  if (!(!s || !r)) {
    var f = Bh(a.padding, n), p = _r(s), v = u === "y" ? Je : Xe, m = u === "y" ? it : lt, h = n.rects.reference[d] + n.rects.reference[u] - r[u] - n.rects.popper[d], k = r[u] - n.rects.reference[u], g = go(s), $ = g ? u === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, S = h / 2 - k / 2, O = f[v], T = $ - p[d] - f[m], I = $ / 2 - p[d] / 2 + S, x = Xn(O, I, T), G = u;
    n.modifiersData[o] = (t = {}, t[G] = x, t.centerOffset = x - I, t);
  }
}
function Dh(e) {
  var t = e.state, n = e.options, o = n.element, a = o === void 0 ? "[data-popper-arrow]" : o;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Cl(t.elements.popper, a) && (t.elements.arrow = a));
}
var Hh = { name: "arrow", enabled: !0, phase: "main", fn: Vh, effect: Dh, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function In(e) {
  return e.split("-")[1];
}
var jh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Wh(e, t) {
  var n = e.x, o = e.y, a = t.devicePixelRatio || 1;
  return { x: On(n * a) / a || 0, y: On(o * a) / a || 0 };
}
function Us(e) {
  var t, n = e.popper, o = e.popperRect, a = e.placement, s = e.variation, r = e.offsets, i = e.position, u = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = r.x, v = p === void 0 ? 0 : p, m = r.y, h = m === void 0 ? 0 : m, k = typeof d == "function" ? d({ x: v, y: h }) : { x: v, y: h };
  v = k.x, h = k.y;
  var g = r.hasOwnProperty("x"), $ = r.hasOwnProperty("y"), S = Xe, O = Je, T = window;
  if (c) {
    var I = go(n), x = "clientHeight", G = "clientWidth";
    if (I === tt(n) && (I = Xt(n), Nt(I).position !== "static" && i === "absolute" && (x = "scrollHeight", G = "scrollWidth")), I = I, a === Je || (a === Xe || a === lt) && s === uo) {
      O = it;
      var W = f && I === T && T.visualViewport ? T.visualViewport.height : I[x];
      h -= W - o.height, h *= u ? 1 : -1;
    }
    if (a === Xe || (a === Je || a === it) && s === uo) {
      S = lt;
      var Q = f && I === T && T.visualViewport ? T.visualViewport.width : I[G];
      v -= Q - o.width, v *= u ? 1 : -1;
    }
  }
  var ie = Object.assign({ position: i }, c && jh), w = d === !0 ? Wh({ x: v, y: h }, tt(n)) : { x: v, y: h };
  if (v = w.x, h = w.y, u) {
    var N;
    return Object.assign({}, ie, (N = {}, N[O] = $ ? "0" : "", N[S] = g ? "0" : "", N.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", N));
  }
  return Object.assign({}, ie, (t = {}, t[O] = $ ? h + "px" : "", t[S] = g ? v + "px" : "", t.transform = "", t));
}
function Uh(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, a = o === void 0 ? !0 : o, s = n.adaptive, r = s === void 0 ? !0 : s, i = n.roundOffsets, u = i === void 0 ? !0 : i, c = { placement: _t(t.placement), variation: In(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Us(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: r, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Us(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Ol = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Uh, data: {} }, Po = { passive: !0 };
function Kh(e) {
  var t = e.state, n = e.instance, o = e.options, a = o.scroll, s = a === void 0 ? !0 : a, r = o.resize, i = r === void 0 ? !0 : r, u = tt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, Po);
  }), i && u.addEventListener("resize", n.update, Po), function() {
    s && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Po);
    }), i && u.removeEventListener("resize", n.update, Po);
  };
}
var $l = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Kh, data: {} }, Gh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ro(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Gh[t];
  });
}
var Zh = { start: "end", end: "start" };
function Ks(e) {
  return e.replace(/start|end/g, function(t) {
    return Zh[t];
  });
}
function kr(e) {
  var t = tt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Cr(e) {
  return $n(Xt(e)).left + kr(e).scrollLeft;
}
function Yh(e, t) {
  var n = tt(e), o = Xt(e), a = n.visualViewport, s = o.clientWidth, r = o.clientHeight, i = 0, u = 0;
  if (a) {
    s = a.width, r = a.height;
    var c = kl();
    (c || !c && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  return { width: s, height: r, x: i + Cr(e), y: u };
}
function qh(e) {
  var t, n = Xt(e), o = kr(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, s = on(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), r = on(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -o.scrollLeft + Cr(e), u = -o.scrollTop;
  return Nt(a || n).direction === "rtl" && (i += on(n.clientWidth, a ? a.clientWidth : 0) - s), { width: s, height: r, x: i, y: u };
}
function Tr(e) {
  var t = Nt(e), n = t.overflow, o = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function Il(e) {
  return ["html", "body", "#document"].indexOf(kt(e)) >= 0 ? e.ownerDocument.body : st(e) && Tr(e) ? e : Il(va(e));
}
function Qn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Il(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = tt(o), r = a ? [s].concat(s.visualViewport || [], Tr(o) ? o : []) : o, i = t.concat(r);
  return a ? i : i.concat(Qn(va(r)));
}
function Da(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Jh(e, t) {
  var n = $n(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Gs(e, t, n) {
  return t === _l ? Da(Yh(e, n)) : rn(t) ? Jh(t, n) : Da(qh(Xt(e)));
}
function Xh(e) {
  var t = Qn(va(e)), n = ["absolute", "fixed"].indexOf(Nt(e).position) >= 0, o = n && st(e) ? go(e) : e;
  return rn(o) ? t.filter(function(a) {
    return rn(a) && Cl(a, o) && kt(a) !== "body";
  }) : [];
}
function Qh(e, t, n, o) {
  var a = t === "clippingParents" ? Xh(e) : [].concat(t), s = [].concat(a, [n]), r = s[0], i = s.reduce(function(u, c) {
    var d = Gs(e, c, o);
    return u.top = on(d.top, u.top), u.right = Go(d.right, u.right), u.bottom = Go(d.bottom, u.bottom), u.left = on(d.left, u.left), u;
  }, Gs(e, r, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ll(e) {
  var t = e.reference, n = e.element, o = e.placement, a = o ? _t(o) : null, s = o ? In(o) : null, r = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, u;
  switch (a) {
    case Je:
      u = { x: r, y: t.y - n.height };
      break;
    case it:
      u = { x: r, y: t.y + t.height };
      break;
    case lt:
      u = { x: t.x + t.width, y: i };
      break;
    case Xe:
      u = { x: t.x - n.width, y: i };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = a ? Sr(a) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (s) {
      case Pn:
        u[c] = u[c] - (t[d] / 2 - n[d] / 2);
        break;
      case uo:
        u[c] = u[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return u;
}
function co(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = o === void 0 ? e.placement : o, s = n.strategy, r = s === void 0 ? e.strategy : s, i = n.boundary, u = i === void 0 ? Sh : i, c = n.rootBoundary, d = c === void 0 ? _l : c, f = n.elementContext, p = f === void 0 ? Dn : f, v = n.altBoundary, m = v === void 0 ? !1 : v, h = n.padding, k = h === void 0 ? 0 : h, g = El(typeof k != "number" ? k : Pl(k, ho)), $ = p === Dn ? kh : Dn, S = e.rects.popper, O = e.elements[m ? $ : p], T = Qh(rn(O) ? O : O.contextElement || Xt(e.elements.popper), u, d, r), I = $n(e.elements.reference), x = Ll({ reference: I, element: S, placement: a }), G = Da(Object.assign({}, S, x)), W = p === Dn ? G : I, Q = { top: T.top - W.top + g.top, bottom: W.bottom - T.bottom + g.bottom, left: T.left - W.left + g.left, right: W.right - T.right + g.right }, ie = e.modifiersData.offset;
  if (p === Dn && ie) {
    var w = ie[a];
    Object.keys(Q).forEach(function(N) {
      var Y = [lt, it].indexOf(N) >= 0 ? 1 : -1, P = [Je, it].indexOf(N) >= 0 ? "y" : "x";
      Q[N] += w[P] * Y;
    });
  }
  return Q;
}
function eg(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = n.boundary, s = n.rootBoundary, r = n.padding, i = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? Nn : u, d = In(o), f = d ? i ? js : js.filter(function(m) {
    return In(m) === d;
  }) : ho, p = f.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  p.length === 0 && (p = f);
  var v = p.reduce(function(m, h) {
    return m[h] = co(e, { placement: h, boundary: a, rootBoundary: s, padding: r })[_t(h)], m;
  }, {});
  return Object.keys(v).sort(function(m, h) {
    return v[m] - v[h];
  });
}
function tg(e) {
  if (_t(e) === br) return [];
  var t = Ro(e);
  return [Ks(e), t, Ks(t)];
}
function ng(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var a = n.mainAxis, s = a === void 0 ? !0 : a, r = n.altAxis, i = r === void 0 ? !0 : r, u = n.fallbackPlacements, c = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, v = n.flipVariations, m = v === void 0 ? !0 : v, h = n.allowedAutoPlacements, k = t.options.placement, g = _t(k), $ = g === k, S = u || ($ || !m ? [Ro(k)] : tg(k)), O = [k].concat(S).reduce(function(de, ge) {
      return de.concat(_t(ge) === br ? eg(t, { placement: ge, boundary: d, rootBoundary: f, padding: c, flipVariations: m, allowedAutoPlacements: h }) : ge);
    }, []), T = t.rects.reference, I = t.rects.popper, x = /* @__PURE__ */ new Map(), G = !0, W = O[0], Q = 0; Q < O.length; Q++) {
      var ie = O[Q], w = _t(ie), N = In(ie) === Pn, Y = [Je, it].indexOf(w) >= 0, P = Y ? "width" : "height", z = co(t, { placement: ie, boundary: d, rootBoundary: f, altBoundary: p, padding: c }), E = Y ? N ? lt : Xe : N ? it : Je;
      T[P] > I[P] && (E = Ro(E));
      var ee = Ro(E), X = [];
      if (s && X.push(z[w] <= 0), i && X.push(z[E] <= 0, z[ee] <= 0), X.every(function(de) {
        return de;
      })) {
        W = ie, G = !1;
        break;
      }
      x.set(ie, X);
    }
    if (G) for (var le = m ? 3 : 1, he = function(de) {
      var ge = O.find(function(Ee) {
        var ae = x.get(Ee);
        if (ae) return ae.slice(0, de).every(function(me) {
          return me;
        });
      });
      if (ge) return W = ge, "break";
    }, be = le; be > 0; be--) {
      var J = he(be);
      if (J === "break") break;
    }
    t.placement !== W && (t.modifiersData[o]._skip = !0, t.placement = W, t.reset = !0);
  }
}
var og = { name: "flip", enabled: !0, phase: "main", fn: ng, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Zs(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Ys(e) {
  return [Je, lt, it, Xe].some(function(t) {
    return e[t] >= 0;
  });
}
function ag(e) {
  var t = e.state, n = e.name, o = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, r = co(t, { elementContext: "reference" }), i = co(t, { altBoundary: !0 }), u = Zs(r, o), c = Zs(i, a, s), d = Ys(u), f = Ys(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var rg = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: ag };
function sg(e, t, n) {
  var o = _t(e), a = [Xe, Je].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, r = s[0], i = s[1];
  return r = r || 0, i = (i || 0) * a, [Xe, lt].indexOf(o) >= 0 ? { x: i, y: r } : { x: r, y: i };
}
function ig(e) {
  var t = e.state, n = e.options, o = e.name, a = n.offset, s = a === void 0 ? [0, 0] : a, r = Nn.reduce(function(d, f) {
    return d[f] = sg(f, t.rects, s), d;
  }, {}), i = r[t.placement], u = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = r;
}
var lg = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: ig };
function ug(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ll({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var xl = { name: "popperOffsets", enabled: !0, phase: "read", fn: ug, data: {} };
function cg(e) {
  return e === "x" ? "y" : "x";
}
function dg(e) {
  var t = e.state, n = e.options, o = e.name, a = n.mainAxis, s = a === void 0 ? !0 : a, r = n.altAxis, i = r === void 0 ? !1 : r, u = n.boundary, c = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, v = p === void 0 ? !0 : p, m = n.tetherOffset, h = m === void 0 ? 0 : m, k = co(t, { boundary: u, rootBoundary: c, padding: f, altBoundary: d }), g = _t(t.placement), $ = In(t.placement), S = !$, O = Sr(g), T = cg(O), I = t.modifiersData.popperOffsets, x = t.rects.reference, G = t.rects.popper, W = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, Q = typeof W == "number" ? { mainAxis: W, altAxis: W } : Object.assign({ mainAxis: 0, altAxis: 0 }, W), ie = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, w = { x: 0, y: 0 };
  if (I) {
    if (s) {
      var N, Y = O === "y" ? Je : Xe, P = O === "y" ? it : lt, z = O === "y" ? "height" : "width", E = I[O], ee = E + k[Y], X = E - k[P], le = v ? -G[z] / 2 : 0, he = $ === Pn ? x[z] : G[z], be = $ === Pn ? -G[z] : -x[z], J = t.elements.arrow, de = v && J ? _r(J) : { width: 0, height: 0 }, ge = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Tl(), Ee = ge[Y], ae = ge[P], me = Xn(0, x[z], de[z]), Fe = S ? x[z] / 2 - le - me - Ee - Q.mainAxis : he - me - Ee - Q.mainAxis, B = S ? -x[z] / 2 + le + me + ae + Q.mainAxis : be + me + ae + Q.mainAxis, ne = t.elements.arrow && go(t.elements.arrow), oe = ne ? O === "y" ? ne.clientTop || 0 : ne.clientLeft || 0 : 0, Le = (N = ie?.[O]) != null ? N : 0, De = E + Fe - Le - oe, Ae = E + B - Le, Se = Xn(v ? Go(ee, De) : ee, E, v ? on(X, Ae) : X);
      I[O] = Se, w[O] = Se - E;
    }
    if (i) {
      var ce, Ke = O === "x" ? Je : Xe, cn = O === "x" ? it : lt, Ge = I[T], gt = T === "y" ? "height" : "width", dn = Ge + k[Ke], Qt = Ge - k[cn], D = [Je, Xe].indexOf(g) !== -1, fe = (ce = ie?.[T]) != null ? ce : 0, ot = D ? dn : Ge - x[gt] - G[gt] - fe + Q.altAxis, Bt = D ? Ge + x[gt] + G[gt] - fe - Q.altAxis : Qt, Vt = v && D ? Fh(ot, Ge, Bt) : Xn(v ? ot : dn, Ge, v ? Bt : Qt);
      I[T] = Vt, w[T] = Vt - Ge;
    }
    t.modifiersData[o] = w;
  }
}
var fg = { name: "preventOverflow", enabled: !0, phase: "main", fn: dg, requiresIfExists: ["offset"] };
function pg(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function mg(e) {
  return e === tt(e) || !st(e) ? kr(e) : pg(e);
}
function vg(e) {
  var t = e.getBoundingClientRect(), n = On(t.width) / e.offsetWidth || 1, o = On(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function hg(e, t, n) {
  n === void 0 && (n = !1);
  var o = st(t), a = st(t) && vg(t), s = Xt(t), r = $n(e, a, n), i = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (o || !o && !n) && ((kt(t) !== "body" || Tr(s)) && (i = mg(t)), st(t) ? (u = $n(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : s && (u.x = Cr(s))), { x: r.left + i.scrollLeft - u.x, y: r.top + i.scrollTop - u.y, width: r.width, height: r.height };
}
function gg(e) {
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
function yg(e) {
  var t = gg(e);
  return Rh.reduce(function(n, o) {
    return n.concat(t.filter(function(a) {
      return a.phase === o;
    }));
  }, []);
}
function bg(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function wg(e) {
  var t = e.reduce(function(n, o) {
    var a = n[o.name];
    return n[o.name] = a ? Object.assign({}, a, o, { options: Object.assign({}, a.options, o.options), data: Object.assign({}, a.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var qs = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Js() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Er(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, a = t.defaultOptions, s = a === void 0 ? qs : a;
  return function(r, i, u) {
    u === void 0 && (u = s);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, qs, s), modifiersData: {}, elements: { reference: r, popper: i }, attributes: {}, styles: {} }, d = [], f = !1, p = { state: c, setOptions: function(h) {
      var k = typeof h == "function" ? h(c.options) : h;
      m(), c.options = Object.assign({}, s, c.options, k), c.scrollParents = { reference: rn(r) ? Qn(r) : r.contextElement ? Qn(r.contextElement) : [], popper: Qn(i) };
      var g = yg(wg([].concat(o, c.options.modifiers)));
      return c.orderedModifiers = g.filter(function($) {
        return $.enabled;
      }), v(), p.update();
    }, forceUpdate: function() {
      if (!f) {
        var h = c.elements, k = h.reference, g = h.popper;
        if (Js(k, g)) {
          c.rects = { reference: hg(k, go(g), c.options.strategy === "fixed"), popper: _r(g) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(G) {
            return c.modifiersData[G.name] = Object.assign({}, G.data);
          });
          for (var $ = 0; $ < c.orderedModifiers.length; $++) {
            if (c.reset === !0) {
              c.reset = !1, $ = -1;
              continue;
            }
            var S = c.orderedModifiers[$], O = S.fn, T = S.options, I = T === void 0 ? {} : T, x = S.name;
            typeof O == "function" && (c = O({ state: c, options: I, name: x, instance: p }) || c);
          }
        }
      }
    }, update: bg(function() {
      return new Promise(function(h) {
        p.forceUpdate(), h(c);
      });
    }), destroy: function() {
      m(), f = !0;
    } };
    if (!Js(r, i)) return p;
    p.setOptions(u).then(function(h) {
      !f && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function v() {
      c.orderedModifiers.forEach(function(h) {
        var k = h.name, g = h.options, $ = g === void 0 ? {} : g, S = h.effect;
        if (typeof S == "function") {
          var O = S({ state: c, name: k, instance: p, options: $ }), T = function() {
          };
          d.push(O || T);
        }
      });
    }
    function m() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return p;
  };
}
Er();
var _g = [$l, xl, Ol, Sl];
Er({ defaultModifiers: _g });
var Sg = [$l, xl, Ol, Sl, lg, og, fg, Hh, rg], kg = Er({ defaultModifiers: Sg });
const Cg = ["fixed", "absolute"], Tg = ve({
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
    values: Nn,
    default: "bottom"
  },
  popperOptions: {
    type: te(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Cg,
    default: "absolute"
  }
}), Rl = ve({
  ...Tg,
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
  ...un(["ariaLabel"])
}), Eg = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Pg = (e, t) => {
  const n = A(!1), o = A();
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
}, Og = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: a } = e, s = {
    placement: n,
    strategy: o,
    ...a,
    modifiers: [...Ig(e), ...t]
  };
  return Lg(s, a?.modifiers), s;
}, $g = (e) => {
  if (Re)
    return $t(e);
};
function Ig(e) {
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
function Lg(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const xg = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = Rg(u);
      Object.assign(r.value, c);
    },
    requires: ["computeStyles"]
  }, a = y(() => {
    const { onFirstUpdate: u, placement: c, strategy: d, modifiers: f } = l(n);
    return {
      onFirstUpdate: u,
      placement: c || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...f || [],
        o,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), s = Zt(), r = A({
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
  return se(a, (u) => {
    const c = l(s);
    c && c.setOptions(u);
  }, {
    deep: !0
  }), se([e, t], ([u, c]) => {
    i(), !(!u || !c) && (s.value = kg(u, c, l(a)));
  }), Ct(() => {
    i();
  }), {
    state: y(() => {
      var u;
      return { ...((u = l(s)) == null ? void 0 : u.state) || {} };
    }),
    styles: y(() => l(r).styles),
    attributes: y(() => l(r).attributes),
    update: () => {
      var u;
      return (u = l(s)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = l(s)) == null ? void 0 : u.forceUpdate();
    },
    instanceRef: y(() => l(s))
  };
};
function Rg(e) {
  const t = Object.keys(e.elements), n = Ho(t.map((a) => [a, e.styles[a] || {}])), o = Ho(t.map((a) => [a, e.attributes[a]]));
  return {
    styles: n,
    attributes: o
  };
}
const Ag = 0, Mg = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: a } = ye(hr, void 0), s = A(), r = A(), i = y(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = y(() => {
    var g;
    const $ = l(s), S = (g = l(r)) != null ? g : Ag;
    return {
      name: "arrow",
      enabled: !qp($),
      options: {
        element: $,
        padding: S
      }
    };
  }), c = y(() => ({
    onFirstUpdate: () => {
      m();
    },
    ...Og(e, [
      l(u),
      l(i)
    ])
  })), d = y(() => $g(e.referenceEl) || l(o)), { attributes: f, state: p, styles: v, update: m, forceUpdate: h, instanceRef: k } = xg(d, n, c);
  return se(k, (g) => t.value = g), Pe(() => {
    se(() => {
      var g;
      return (g = l(d)) == null ? void 0 : g.getBoundingClientRect();
    }, () => {
      m();
    });
  }), {
    attributes: f,
    arrowRef: s,
    contentRef: n,
    instanceRef: k,
    state: p,
    styles: v,
    role: a,
    forceUpdate: h,
    update: m
  };
}, Ng = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: a } = Ki(), s = Te("popper"), r = y(() => l(t).popper), i = A(pe(e.zIndex) ? e.zIndex : a()), u = y(() => [
    s.b(),
    s.is("pure", e.pure),
    s.is(e.effect),
    e.popperClass
  ]), c = y(() => [
    { zIndex: l(i) },
    l(n).popper,
    e.popperStyle || {}
  ]), d = y(() => o.value === "dialog" ? "false" : void 0), f = y(() => l(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: f,
    contentAttrs: r,
    contentClass: u,
    contentStyle: c,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = pe(e.zIndex) ? e.zIndex : a();
    }
  };
}, zg = U({
  name: "ElPopperContent"
}), Fg = /* @__PURE__ */ U({
  ...zg,
  props: Rl,
  emits: Eg,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: a,
      trapped: s,
      onFocusAfterReleased: r,
      onFocusAfterTrapped: i,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: d
    } = Pg(o, n), { attributes: f, arrowRef: p, contentRef: v, styles: m, instanceRef: h, role: k, update: g } = Mg(o), {
      ariaModal: $,
      arrowStyle: S,
      contentAttrs: O,
      contentClass: T,
      contentStyle: I,
      updateZIndex: x
    } = Ng(o, {
      styles: m,
      attributes: f,
      role: k
    }), G = ye(Ko, void 0), W = A();
    mt(ml, {
      arrowStyle: S,
      arrowRef: p,
      arrowOffset: W
    }), G && mt(Ko, {
      ...G,
      addInputId: ao,
      removeInputId: ao
    });
    let Q;
    const ie = (N = !0) => {
      g(), N && x();
    }, w = () => {
      ie(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return Pe(() => {
      se(() => o.triggerTargetEl, (N, Y) => {
        Q?.(), Q = void 0;
        const P = l(N || v.value), z = l(Y || v.value);
        pt(P) && (Q = se([k, () => o.ariaLabel, $, () => o.id], (E) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ee, X) => {
            xt(E[X]) ? P.removeAttribute(ee) : P.setAttribute(ee, E[X]);
          });
        }, { immediate: !0 })), z !== P && pt(z) && ["role", "aria-label", "aria-modal", "id"].forEach((E) => {
          z.removeAttribute(E);
        });
      }, { immediate: !0 }), se(() => o.visible, w, { immediate: !0 });
    }), Ct(() => {
      Q?.(), Q = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: h,
      updatePopper: ie,
      contentStyle: I
    }), (N, Y) => (_(), R("div", Yt({
      ref_key: "contentRef",
      ref: v
    }, l(O), {
      style: l(I),
      class: l(T),
      tabindex: "-1",
      onMouseenter: (P) => N.$emit("mouseenter", P),
      onMouseleave: (P) => N.$emit("mouseleave", P)
    }), [
      F(l(_h), {
        trapped: l(s),
        "trap-on-focus-in": !0,
        "focus-trap-el": l(v),
        "focus-start-el": l(a),
        onFocusAfterTrapped: l(i),
        onFocusAfterReleased: l(r),
        onFocusin: l(u),
        onFocusoutPrevented: l(c),
        onReleaseRequested: l(d)
      }, {
        default: Z(() => [
          re(N.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Bg = /* @__PURE__ */ _e(Fg, [["__file", "content.vue"]]);
const Vg = nt(Jv), Pr = Symbol("elTooltip");
function Xs() {
  let e;
  const t = (o, a) => {
    n(), e = window.setTimeout(o, a);
  }, n = () => window.clearTimeout(e);
  return mo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Dg = ve({
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
}), Hg = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: a
}) => {
  const { registerTimeout: s } = Xs(), {
    registerTimeout: r,
    cancelTimeout: i
  } = Xs();
  return {
    onOpen: (d) => {
      s(() => {
        o(d);
        const f = l(n);
        pe(f) && f > 0 && r(() => {
          a(d);
        }, f);
      }, l(e));
    },
    onClose: (d) => {
      i(), s(() => {
        a(d);
      }, l(t));
    }
  };
}, Or = ve({
  ...Dg,
  ...Rl,
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
  ...un(["ariaLabel"])
}), Al = ve({
  ...gl,
  disabled: Boolean,
  trigger: {
    type: te([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: te(Array),
    default: () => [ze.enter, ze.numpadEnter, ze.space]
  }
}), jg = ca({
  type: te(Boolean),
  default: null
}), Wg = ca({
  type: te(Function)
}), Ug = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], a = {
    [e]: jg,
    [n]: Wg
  };
  return {
    useModelToggle: ({
      indicator: r,
      toggleReason: i,
      shouldHideWhenRouteChanges: u,
      shouldProceed: c,
      onShow: d,
      onHide: f
    }) => {
      const p = Ue(), { emit: v } = p, m = p.props, h = y(() => Ie(m[n])), k = y(() => m[e] === null), g = (x) => {
        r.value !== !0 && (r.value = !0, i && (i.value = x), Ie(d) && d(x));
      }, $ = (x) => {
        r.value !== !1 && (r.value = !1, i && (i.value = x), Ie(f) && f(x));
      }, S = (x) => {
        if (m.disabled === !0 || Ie(c) && !c())
          return;
        const G = h.value && Re;
        G && v(t, !0), (k.value || !G) && g(x);
      }, O = (x) => {
        if (m.disabled === !0 || !Re)
          return;
        const G = h.value && Re;
        G && v(t, !1), (k.value || !G) && $(x);
      }, T = (x) => {
        jo(x) && (m.disabled && x ? h.value && v(t, !1) : r.value !== x && (x ? g() : $()));
      }, I = () => {
        r.value ? O() : S();
      };
      return se(() => m[e], T), u && p.appContext.config.globalProperties.$route !== void 0 && se(() => ({
        ...p.proxy.$route
      }), () => {
        u.value && r.value && O();
      }), Pe(() => {
        T(m[e]);
      }), {
        hide: O,
        show: S,
        toggle: I,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: a,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: Kg,
  useModelToggleEmits: Gg,
  useModelToggle: Zg
} = Ug("visible"), Yg = ve({
  ...vl,
  ...Kg,
  ...Or,
  ...Al,
  ...hl,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), qg = [
  ...Gg,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Jg = (e, t) => je(e) ? e.includes(t) : e === t, mn = (e, t, n) => (o) => {
  Jg(l(e), t) && n(o);
}, Pt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (a) => {
  const s = e?.(a);
  if (n === !1 || !s)
    return t?.(a);
}, Xg = U({
  name: "ElTooltipTrigger"
}), Qg = /* @__PURE__ */ U({
  ...Xg,
  props: Al,
  setup(e, { expose: t }) {
    const n = e, o = Te("tooltip"), { controlled: a, id: s, open: r, onOpen: i, onClose: u, onToggle: c } = ye(Pr, void 0), d = A(null), f = () => {
      if (l(a) || n.disabled)
        return !0;
    }, p = wt(n, "trigger"), v = Pt(f, mn(p, "hover", i)), m = Pt(f, mn(p, "hover", u)), h = Pt(f, mn(p, "click", (O) => {
      O.button === 0 && c(O);
    })), k = Pt(f, mn(p, "focus", i)), g = Pt(f, mn(p, "focus", u)), $ = Pt(f, mn(p, "contextmenu", (O) => {
      O.preventDefault(), c(O);
    })), S = Pt(f, (O) => {
      const { code: T } = O;
      n.triggerKeys.includes(T) && (O.preventDefault(), c(O));
    });
    return t({
      triggerRef: d
    }), (O, T) => (_(), q(l(ih), {
      id: l(s),
      "virtual-ref": O.virtualRef,
      open: l(r),
      "virtual-triggering": O.virtualTriggering,
      class: M(l(o).e("trigger")),
      onBlur: l(g),
      onClick: l(h),
      onContextmenu: l($),
      onFocus: l(k),
      onMouseenter: l(v),
      onMouseleave: l(m),
      onKeydown: l(S)
    }, {
      default: Z(() => [
        re(O.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var e0 = /* @__PURE__ */ _e(Qg, [["__file", "trigger.vue"]]);
const t0 = ve({
  to: {
    type: te([String, Object]),
    required: !0
  },
  disabled: Boolean
}), n0 = /* @__PURE__ */ U({
  __name: "teleport",
  props: t0,
  setup(e) {
    return (t, n) => t.disabled ? re(t.$slots, "default", { key: 0 }) : (_(), q(Au, {
      key: 1,
      to: t.to
    }, [
      re(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var o0 = /* @__PURE__ */ _e(n0, [["__file", "teleport.vue"]]);
const a0 = nt(o0), Ml = () => {
  const e = tr(), t = ul(), n = y(() => `${e.value}-popper-container-${t.prefix}`), o = y(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, r0 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, s0 = () => {
  const { id: e, selector: t } = Ml();
  return Mu(() => {
    Re && (document.body.querySelector(t.value) || r0(e.value));
  }), {
    id: e,
    selector: t
  };
}, i0 = U({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), l0 = /* @__PURE__ */ U({
  ...i0,
  props: Or,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Ml(), a = Te("tooltip"), s = A();
    let r;
    const {
      controlled: i,
      id: u,
      open: c,
      trigger: d,
      onClose: f,
      onOpen: p,
      onShow: v,
      onHide: m,
      onBeforeShow: h,
      onBeforeHide: k
    } = ye(Pr, void 0), g = y(() => n.transition || `${a.namespace.value}-fade-in-linear`), $ = y(() => n.persistent);
    Ct(() => {
      r?.();
    });
    const S = y(() => l($) ? !0 : l(c)), O = y(() => n.disabled ? !1 : l(c)), T = y(() => n.appendTo || o.value), I = y(() => {
      var E;
      return (E = n.style) != null ? E : {};
    }), x = A(!0), G = () => {
      m(), z() && Et(document.body), x.value = !0;
    }, W = () => {
      if (l(i))
        return !0;
    }, Q = Pt(W, () => {
      n.enterable && l(d) === "hover" && p();
    }), ie = Pt(W, () => {
      l(d) === "hover" && f();
    }), w = () => {
      var E, ee;
      (ee = (E = s.value) == null ? void 0 : E.updatePopper) == null || ee.call(E), h?.();
    }, N = () => {
      k?.();
    }, Y = () => {
      v(), r = pm(y(() => {
        var E;
        return (E = s.value) == null ? void 0 : E.popperContentRef;
      }), () => {
        if (l(i))
          return;
        l(d) !== "hover" && f();
      });
    }, P = () => {
      n.virtualTriggering || f();
    }, z = (E) => {
      var ee;
      const X = (ee = s.value) == null ? void 0 : ee.popperContentRef, le = E?.relatedTarget || document.activeElement;
      return X?.contains(le);
    };
    return se(() => l(c), (E) => {
      E ? x.value = !1 : r?.();
    }, {
      flush: "post"
    }), se(() => n.content, () => {
      var E, ee;
      (ee = (E = s.value) == null ? void 0 : E.updatePopper) == null || ee.call(E);
    }), t({
      contentRef: s,
      isFocusInsideContent: z
    }), (E, ee) => (_(), q(l(a0), {
      disabled: !E.teleported,
      to: l(T)
    }, {
      default: Z(() => [
        F(An, {
          name: l(g),
          onAfterLeave: G,
          onBeforeEnter: w,
          onAfterEnter: Y,
          onBeforeLeave: N
        }, {
          default: Z(() => [
            l(S) ? qe((_(), q(l(Bg), Yt({
              key: 0,
              id: l(u),
              ref_key: "contentRef",
              ref: s
            }, E.$attrs, {
              "aria-label": E.ariaLabel,
              "aria-hidden": x.value,
              "boundaries-padding": E.boundariesPadding,
              "fallback-placements": E.fallbackPlacements,
              "gpu-acceleration": E.gpuAcceleration,
              offset: E.offset,
              placement: E.placement,
              "popper-options": E.popperOptions,
              strategy: E.strategy,
              effect: E.effect,
              enterable: E.enterable,
              pure: E.pure,
              "popper-class": E.popperClass,
              "popper-style": [E.popperStyle, l(I)],
              "reference-el": E.referenceEl,
              "trigger-target-el": E.triggerTargetEl,
              visible: l(O),
              "z-index": E.zIndex,
              onMouseenter: l(Q),
              onMouseleave: l(ie),
              onBlur: P,
              onClose: l(f)
            }), {
              default: Z(() => [
                re(E.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [At, l(O)]
            ]) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var u0 = /* @__PURE__ */ _e(l0, [["__file", "content.vue"]]);
const c0 = U({
  name: "ElTooltip"
}), d0 = /* @__PURE__ */ U({
  ...c0,
  props: Yg,
  emits: qg,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    s0();
    const a = fa(), s = A(), r = A(), i = () => {
      var g;
      const $ = l(s);
      $ && ((g = $.popperInstanceRef) == null || g.update());
    }, u = A(!1), c = A(), { show: d, hide: f, hasUpdateHandler: p } = Zg({
      indicator: u,
      toggleReason: c
    }), { onOpen: v, onClose: m } = Hg({
      showAfter: wt(o, "showAfter"),
      hideAfter: wt(o, "hideAfter"),
      autoClose: wt(o, "autoClose"),
      open: d,
      close: f
    }), h = y(() => jo(o.visible) && !p.value);
    mt(Pr, {
      controlled: h,
      id: a,
      open: Qa(u),
      trigger: wt(o, "trigger"),
      onOpen: (g) => {
        v(g);
      },
      onClose: (g) => {
        m(g);
      },
      onToggle: (g) => {
        l(u) ? m(g) : v(g);
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
    }), se(() => o.disabled, (g) => {
      g && u.value && (u.value = !1);
    });
    const k = (g) => {
      var $;
      return ($ = r.value) == null ? void 0 : $.isFocusInsideContent(g);
    };
    return Nu(() => u.value && f()), t({
      popperRef: s,
      contentRef: r,
      isFocusInsideContent: k,
      updatePopper: i,
      onOpen: v,
      onClose: m,
      hide: f
    }), (g, $) => (_(), q(l(Vg), {
      ref_key: "popperRef",
      ref: s,
      role: g.role
    }, {
      default: Z(() => [
        F(e0, {
          disabled: g.disabled,
          trigger: g.trigger,
          "trigger-keys": g.triggerKeys,
          "virtual-ref": g.virtualRef,
          "virtual-triggering": g.virtualTriggering
        }, {
          default: Z(() => [
            g.$slots.default ? re(g.$slots, "default", { key: 0 }) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        F(u0, {
          ref_key: "contentRef",
          ref: r,
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
          default: Z(() => [
            re(g.$slots, "content", {}, () => [
              g.rawContent ? (_(), R("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, ["innerHTML"])) : (_(), R("span", { key: 1 }, K(g.content), 1))
            ]),
            g.showArrow ? (_(), q(l(eh), {
              key: 0,
              "arrow-offset": g.arrowOffset
            }, null, 8, ["arrow-offset"])) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var f0 = /* @__PURE__ */ _e(d0, [["__file", "tooltip.vue"]]);
const $r = nt(f0), p0 = ve({
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
}), m0 = U({
  name: "ElBadge"
}), v0 = /* @__PURE__ */ U({
  ...m0,
  props: p0,
  setup(e, { expose: t }) {
    const n = e, o = Te("badge"), a = y(() => n.isDot ? "" : pe(n.value) && pe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = y(() => {
      var r, i, u, c, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: io(-((i = (r = n.offset) == null ? void 0 : r[0]) != null ? i : 0)),
          marginTop: io((c = (u = n.offset) == null ? void 0 : u[1]) != null ? c : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: a
    }), (r, i) => (_(), R("div", {
      class: M(l(o).b())
    }, [
      re(r.$slots, "default"),
      F(An, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Z(() => [
          qe(b("sup", {
            class: M([
              l(o).e("content"),
              l(o).em("content", r.type),
              l(o).is("fixed", !!r.$slots.default),
              l(o).is("dot", r.isDot),
              l(o).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: we(l(s))
          }, [
            re(r.$slots, "content", { value: l(a) }, () => [
              nn(K(l(a)), 1)
            ])
          ], 6), [
            [At, !r.hidden && (l(a) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var h0 = /* @__PURE__ */ _e(v0, [["__file", "badge.vue"]]);
const g0 = nt(h0), y0 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ha = ve({
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
    values: Yi
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), b0 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, w0 = U({
  name: "ElTag"
}), _0 = /* @__PURE__ */ U({
  ...w0,
  props: Ha,
  emits: b0,
  setup(e, { emit: t }) {
    const n = e, o = vo(), a = Te("tag"), s = y(() => {
      const { type: c, hit: d, effect: f, closable: p, round: v } = n;
      return [
        a.b(),
        a.is("closable", p),
        a.m(c || "primary"),
        a.m(o.value),
        a.m(f),
        a.is("hit", d),
        a.is("round", v)
      ];
    }), r = (c) => {
      t("close", c);
    }, i = (c) => {
      t("click", c);
    }, u = (c) => {
      var d, f, p;
      (p = (f = (d = c?.component) == null ? void 0 : d.subTree) == null ? void 0 : f.component) != null && p.bum && (c.component.subTree.component.bum = null);
    };
    return (c, d) => c.disableTransitions ? (_(), R("span", {
      key: 0,
      class: M(l(s)),
      style: we({ backgroundColor: c.color }),
      onClick: i
    }, [
      b("span", {
        class: M(l(a).e("content"))
      }, [
        re(c.$slots, "default")
      ], 2),
      c.closable ? (_(), q(l(He), {
        key: 0,
        class: M(l(a).e("close")),
        onClick: Oe(r, ["stop"])
      }, {
        default: Z(() => [
          F(l(lo))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : H("v-if", !0)
    ], 6)) : (_(), q(An, {
      key: 1,
      name: `${l(a).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: u
    }, {
      default: Z(() => [
        b("span", {
          class: M(l(s)),
          style: we({ backgroundColor: c.color }),
          onClick: i
        }, [
          b("span", {
            class: M(l(a).e("content"))
          }, [
            re(c.$slots, "default")
          ], 2),
          c.closable ? (_(), q(l(He), {
            key: 0,
            class: M(l(a).e("close")),
            onClick: Oe(r, ["stop"])
          }, {
            default: Z(() => [
              F(l(lo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var S0 = /* @__PURE__ */ _e(_0, [["__file", "tag.vue"]]);
const k0 = nt(S0), Ht = /* @__PURE__ */ new Map();
if (Re) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of Ht.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function Qs(e, t) {
  let n = [];
  return je(t.arg) ? n = t.arg : pt(t.arg) && n.push(t.arg), function(o, a) {
    const s = t.instance.popperRef, r = o.target, i = a?.target, u = !t || !t.instance, c = !r || !i, d = e.contains(r) || e.contains(i), f = e === r, p = n.length && n.some((m) => m?.contains(r)) || n.length && n.includes(i), v = s && (s.contains(r) || s.contains(i));
    u || c || d || f || p || v || t.value(o, a);
  };
}
const C0 = {
  beforeMount(e, t) {
    Ht.has(e) || Ht.set(e, []), Ht.get(e).push({
      documentHandler: Qs(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Ht.has(e) || Ht.set(e, []);
    const n = Ht.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), a = {
      documentHandler: Qs(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, a) : n.push(a);
  },
  unmounted(e) {
    Ht.delete(e);
  }
}, T0 = ve({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: te(Object)
  },
  size: Tn,
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
  ...Xi
}), ct = {};
U({
  name: "ElConfigProvider",
  props: T0,
  setup(e, { slots: t }) {
    se(() => e.message, (o) => {
      Object.assign(ct, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = tl(e);
    return () => re(t, "default", { config: n?.value });
  }
});
const E0 = 100, P0 = 600, ei = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = E0, delay: a = P0 } = Ie(n) ? {} : n;
    let s, r;
    const i = () => Ie(n) ? n() : n.handler(), u = () => {
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
}, O0 = ve({
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
  size: Tn,
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
  ...un(["ariaLabel"])
}), $0 = {
  [Jt]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Rt]: (e) => pe(e) || xt(e),
  [xe]: (e) => pe(e) || xt(e)
}, I0 = U({
  name: "ElInputNumber"
}), L0 = /* @__PURE__ */ U({
  ...I0,
  props: O0,
  emits: $0,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: a } = ua(), s = Te("input-number"), r = A(), i = Mt({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: u } = pa(), c = y(() => pe(o.modelValue) && o.modelValue <= o.min), d = y(() => pe(o.modelValue) && o.modelValue >= o.max), f = y(() => {
      const P = g(o.step);
      return dt(o.precision) ? Math.max(g(o.modelValue), P) : (P > o.precision, o.precision);
    }), p = y(() => o.controls && o.controlsPosition === "right"), v = vo(), m = dl(), h = y(() => {
      if (i.userInput !== null)
        return i.userInput;
      let P = i.currentValue;
      if (xt(P))
        return "";
      if (pe(P)) {
        if (Number.isNaN(P))
          return "";
        dt(o.precision) || (P = P.toFixed(o.precision));
      }
      return P;
    }), k = (P, z) => {
      if (dt(z) && (z = f.value), z === 0)
        return Math.round(P);
      let E = String(P);
      const ee = E.indexOf(".");
      if (ee === -1 || !E.replace(".", "").split("")[ee + z])
        return P;
      const he = E.length;
      return E.charAt(he - 1) === "5" && (E = `${E.slice(0, Math.max(0, he - 1))}6`), Number.parseFloat(Number(E).toFixed(z));
    }, g = (P) => {
      if (xt(P))
        return 0;
      const z = P.toString(), E = z.indexOf(".");
      let ee = 0;
      return E !== -1 && (ee = z.length - E - 1), ee;
    }, $ = (P, z = 1) => pe(P) ? k(P + o.step * z) : i.currentValue, S = () => {
      if (o.readonly || m.value || d.value)
        return;
      const P = Number(h.value) || 0, z = $(P);
      I(z), n(Rt, i.currentValue), N();
    }, O = () => {
      if (o.readonly || m.value || c.value)
        return;
      const P = Number(h.value) || 0, z = $(P, -1);
      I(z), n(Rt, i.currentValue), N();
    }, T = (P, z) => {
      const { max: E, min: ee, step: X, precision: le, stepStrictly: he, valueOnClear: be } = o;
      E < ee && cr("InputNumber", "min should not be greater than max.");
      let J = Number(P);
      if (xt(P) || Number.isNaN(J))
        return null;
      if (P === "") {
        if (be === null)
          return null;
        J = Be(be) ? { min: ee, max: E }[be] : be;
      }
      return he && (J = k(Math.round(J / X) * X, le), J !== P && z && n(xe, J)), dt(le) || (J = k(J, le)), (J > E || J < ee) && (J = J > E ? E : ee, z && n(xe, J)), J;
    }, I = (P, z = !0) => {
      var E;
      const ee = i.currentValue, X = T(P);
      if (!z) {
        n(xe, X);
        return;
      }
      ee === X && P || (i.userInput = null, n(xe, X), ee !== X && n(Jt, X, ee), o.validateEvent && ((E = u?.validate) == null || E.call(u, "change").catch((le) => void 0)), i.currentValue = X);
    }, x = (P) => {
      i.userInput = P;
      const z = P === "" ? null : Number(P);
      n(Rt, z), I(z, !1);
    }, G = (P) => {
      const z = P !== "" ? Number(P) : "";
      (pe(z) && !Number.isNaN(z) || P === "") && I(z), N(), i.userInput = null;
    }, W = () => {
      var P, z;
      (z = (P = r.value) == null ? void 0 : P.focus) == null || z.call(P);
    }, Q = () => {
      var P, z;
      (z = (P = r.value) == null ? void 0 : P.blur) == null || z.call(P);
    }, ie = (P) => {
      n("focus", P);
    }, w = (P) => {
      var z, E;
      i.userInput = null, il() && i.currentValue === null && ((z = r.value) != null && z.input) && (r.value.input.value = ""), n("blur", P), o.validateEvent && ((E = u?.validate) == null || E.call(u, "blur").catch((ee) => void 0));
    }, N = () => {
      i.currentValue !== o.modelValue && (i.currentValue = o.modelValue);
    }, Y = (P) => {
      document.activeElement === P.target && P.preventDefault();
    };
    return se(() => o.modelValue, (P, z) => {
      const E = T(P, !0);
      i.userInput === null && E !== z && (i.currentValue = E);
    }, { immediate: !0 }), Pe(() => {
      var P;
      const { min: z, max: E, modelValue: ee } = o, X = (P = r.value) == null ? void 0 : P.input;
      if (X.setAttribute("role", "spinbutton"), Number.isFinite(E) ? X.setAttribute("aria-valuemax", String(E)) : X.removeAttribute("aria-valuemax"), Number.isFinite(z) ? X.setAttribute("aria-valuemin", String(z)) : X.removeAttribute("aria-valuemin"), X.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), X.setAttribute("aria-disabled", String(m.value)), !pe(ee) && ee != null) {
        let le = Number(ee);
        Number.isNaN(le) && (le = null), n(xe, le);
      }
      X.addEventListener("wheel", Y, { passive: !1 });
    }), Si(() => {
      var P, z;
      const E = (P = r.value) == null ? void 0 : P.input;
      E?.setAttribute("aria-valuenow", `${(z = i.currentValue) != null ? z : ""}`);
    }), t({
      focus: W,
      blur: Q
    }), (P, z) => (_(), R("div", {
      class: M([
        l(s).b(),
        l(s).m(l(v)),
        l(s).is("disabled", l(m)),
        l(s).is("without-controls", !P.controls),
        l(s).is("controls-right", l(p))
      ]),
      onDragstart: Oe(() => {
      }, ["prevent"])
    }, [
      P.controls ? qe((_(), R("span", {
        key: 0,
        role: "button",
        "aria-label": l(a)("el.inputNumber.decrease"),
        class: M([l(s).e("decrease"), l(s).is("disabled", l(c))]),
        onKeydown: Ot(O, ["enter"])
      }, [
        re(P.$slots, "decrease-icon", {}, () => [
          F(l(He), null, {
            default: Z(() => [
              l(p) ? (_(), q(l(ol), { key: 0 })) : (_(), q(l(rv), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(ei), O]
      ]) : H("v-if", !0),
      P.controls ? qe((_(), R("span", {
        key: 1,
        role: "button",
        "aria-label": l(a)("el.inputNumber.increase"),
        class: M([l(s).e("increase"), l(s).is("disabled", l(d))]),
        onKeydown: Ot(S, ["enter"])
      }, [
        re(P.$slots, "increase-icon", {}, () => [
          F(l(He), null, {
            default: Z(() => [
              l(p) ? (_(), q(l(Wm), { key: 0 })) : (_(), q(l(uv), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(ei), S]
      ]) : H("v-if", !0),
      F(l(mr), {
        id: P.id,
        ref_key: "input",
        ref: r,
        type: "number",
        step: P.step,
        "model-value": l(h),
        placeholder: P.placeholder,
        readonly: P.readonly,
        disabled: l(m),
        size: l(v),
        max: P.max,
        min: P.min,
        name: P.name,
        "aria-label": P.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          Ot(Oe(S, ["prevent"]), ["up"]),
          Ot(Oe(O, ["prevent"]), ["down"])
        ],
        onBlur: w,
        onFocus: ie,
        onInput: x,
        onChange: G
      }, zu({
        _: 2
      }, [
        P.$slots.prefix ? {
          name: "prefix",
          fn: Z(() => [
            re(P.$slots, "prefix")
          ])
        } : void 0,
        P.$slots.suffix ? {
          name: "suffix",
          fn: Z(() => [
            re(P.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var x0 = /* @__PURE__ */ _e(L0, [["__file", "input-number.vue"]]);
const R0 = nt(x0);
function A0() {
  const e = Zt(), t = A(0), n = 11, o = y(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return bt(e, () => {
    var s, r;
    t.value = (r = (s = e.value) == null ? void 0 : s.getBoundingClientRect().width) != null ? r : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const Nl = Symbol("ElSelectGroup"), ha = Symbol("ElSelect");
function M0(e, t) {
  const n = ye(ha), o = ye(Nl, { disabled: !1 }), a = y(() => d(Kt(n.props.modelValue), e.value)), s = y(() => {
    var v;
    if (n.props.multiple) {
      const m = Kt((v = n.props.modelValue) != null ? v : []);
      return !a.value && m.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), r = y(() => e.label || (Ye(e.value) ? "" : e.value)), i = y(() => e.value || e.label || ""), u = y(() => e.disabled || t.groupDisabled || s.value), c = Ue(), d = (v = [], m) => {
    if (Ye(e.value)) {
      const h = n.props.valueKey;
      return v && v.some((k) => Fu(Gt(k, h)) === Gt(m, h));
    } else
      return v && v.includes(m);
  }, f = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, p = (v) => {
    const m = new RegExp(y0(v), "i");
    t.visible = m.test(r.value) || e.created;
  };
  return se(() => r.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), se(() => e.value, (v, m) => {
    const { remote: h, valueKey: k } = n.props;
    if ((h ? v !== m : !Jn(v, m)) && (n.onOptionDestroy(m, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !h) {
      if (k && Ye(v) && Ye(m) && v[k] === m[k])
        return;
      n.setSelected();
    }
  }), se(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: r,
    currentValue: i,
    itemSelected: a,
    isDisabled: u,
    hoverItem: f,
    updateOption: p
  };
}
const N0 = U({
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
    const t = Te("select"), n = fa(), o = y(() => [
      t.be("dropdown", "item"),
      t.is("disabled", l(i)),
      t.is("selected", l(r)),
      t.is("hovering", l(p))
    ]), a = Mt({
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
    } = M0(e, a), { visible: f, hover: p } = kn(a), v = Ue().proxy;
    u.onOptionCreate(v), Ct(() => {
      const h = v.value, { selected: k } = u.states, g = k.some(($) => $.value === v.value);
      Ce(() => {
        u.states.cachedOptions.get(h) === v && !g && u.states.cachedOptions.delete(h);
      }), u.onOptionDestroy(h, v);
    });
    function m() {
      i.value || u.handleOptionSelect(v);
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
      visible: f,
      hover: p,
      selectOptionClick: m,
      states: a
    };
  }
});
function z0(e, t, n, o, a, s) {
  return qe((_(), R("li", {
    id: e.id,
    class: M(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Oe(e.selectOptionClick, ["stop"])
  }, [
    re(e.$slots, "default", {}, () => [
      b("span", null, K(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [At, e.visible]
  ]);
}
var Ir = /* @__PURE__ */ _e(N0, [["render", z0], ["__file", "option.vue"]]);
const F0 = U({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ye(ha), t = Te("select"), n = y(() => e.props.popperClass), o = y(() => e.props.multiple), a = y(() => e.props.fitInputWidth), s = A("");
    function r() {
      var i;
      s.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return Pe(() => {
      r(), bt(e.selectRef, r);
    }), {
      ns: t,
      minWidth: s,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: a
    };
  }
});
function B0(e, t, n, o, a, s) {
  return _(), R("div", {
    class: M([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: we({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (_(), R("div", {
      key: 0,
      class: M(e.ns.be("dropdown", "header"))
    }, [
      re(e.$slots, "header")
    ], 2)) : H("v-if", !0),
    re(e.$slots, "default"),
    e.$slots.footer ? (_(), R("div", {
      key: 1,
      class: M(e.ns.be("dropdown", "footer"))
    }, [
      re(e.$slots, "footer")
    ], 2)) : H("v-if", !0)
  ], 6);
}
var V0 = /* @__PURE__ */ _e(F0, [["render", B0], ["__file", "select-dropdown.vue"]]);
const D0 = (e, t) => {
  const { t: n } = ua(), o = fa(), a = Te("select"), s = Te("input"), r = Mt({
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
  }), i = A(null), u = A(null), c = A(null), d = A(null), f = A(null), p = A(null), v = A(null), m = A(null), h = A(null), k = A(null), g = A(null), {
    isComposing: $,
    handleCompositionStart: S,
    handleCompositionUpdate: O,
    handleCompositionEnd: T
  } = pl({
    afterComposition: (C) => Vt(C)
  }), { wrapperRef: I, isFocused: x, handleBlur: G } = fl(f, {
    beforeFocus() {
      return z.value;
    },
    afterFocus() {
      e.automaticDropdown && !W.value && (W.value = !0, r.menuVisibleOnFocus = !0);
    },
    beforeBlur(C) {
      var j, ue;
      return ((j = c.value) == null ? void 0 : j.isFocusInsideContent(C)) || ((ue = d.value) == null ? void 0 : ue.isFocusInsideContent(C));
    },
    afterBlur() {
      W.value = !1, r.menuVisibleOnFocus = !1;
    }
  }), W = A(!1), Q = A(), { form: ie, formItem: w } = pa(), { inputId: N } = pr(e, {
    formItemContext: w
  }), { valueOnClear: Y, isEmptyValue: P } = Mm(e), z = y(() => e.disabled || ie?.disabled), E = y(() => je(e.modelValue) ? e.modelValue.length > 0 : !P(e.modelValue)), ee = y(() => {
    var C;
    return (C = ie?.statusIcon) != null ? C : !1;
  }), X = y(() => e.clearable && !z.value && r.inputHovering && E.value), le = y(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), he = y(() => a.is("reverse", le.value && W.value)), be = y(() => w?.validateState || ""), J = y(() => sl[be.value]), de = y(() => e.remote ? 300 : 0), ge = y(() => e.remote && !r.inputValue && r.options.size === 0), Ee = y(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && r.inputValue && r.options.size > 0 && ae.value === 0 ? e.noMatchText || n("el.select.noMatch") : r.options.size === 0 ? e.noDataText || n("el.select.noData") : null), ae = y(() => me.value.filter((C) => C.visible).length), me = y(() => {
    const C = Array.from(r.options.values()), j = [];
    return r.optionValues.forEach((ue) => {
      const Me = C.findIndex((Qe) => Qe.value === ue);
      Me > -1 && j.push(C[Me]);
    }), j.length >= C.length ? j : C;
  }), Fe = y(() => Array.from(r.cachedOptions.values())), B = y(() => {
    const C = me.value.filter((j) => !j.created).some((j) => j.currentLabel === r.inputValue);
    return e.filterable && e.allowCreate && r.inputValue !== "" && !C;
  }), ne = () => {
    e.filterable && Ie(e.filterMethod) || e.filterable && e.remote && Ie(e.remoteMethod) || me.value.forEach((C) => {
      var j;
      (j = C.updateOption) == null || j.call(C, r.inputValue);
    });
  }, oe = vo(), Le = y(() => ["small"].includes(oe.value) ? "small" : "default"), De = y({
    get() {
      return W.value && !ge.value;
    },
    set(C) {
      W.value = C;
    }
  }), Ae = y(() => {
    if (e.multiple && !dt(e.modelValue))
      return Kt(e.modelValue).length === 0 && !r.inputValue;
    const C = je(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || dt(C) ? !r.inputValue : !0;
  }), Se = y(() => {
    var C;
    const j = (C = e.placeholder) != null ? C : n("el.select.placeholder");
    return e.multiple || !E.value ? j : r.selectedLabel;
  }), ce = y(() => Fa ? null : "mouseenter");
  se(() => e.modelValue, (C, j) => {
    e.multiple && e.filterable && !e.reserveKeyword && (r.inputValue = "", Ke("")), Ge(), !Jn(C, j) && e.validateEvent && w?.validate("change").catch((ue) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), se(() => W.value, (C) => {
    C ? Ke(r.inputValue) : (r.inputValue = "", r.previousQuery = null, r.isBeforeHide = !0), t("visible-change", C);
  }), se(() => r.options.entries(), () => {
    Re && (Ge(), e.defaultFirstOption && (e.filterable || e.remote) && ae.value && cn());
  }, {
    flush: "post"
  }), se([() => r.hoveringIndex, me], ([C]) => {
    pe(C) && C > -1 ? Q.value = me.value[C] || {} : Q.value = {}, me.value.forEach((j) => {
      j.hover = Q.value === j;
    });
  }), wi(() => {
    r.isBeforeHide || ne();
  });
  const Ke = (C) => {
    r.previousQuery === C || $.value || (r.previousQuery = C, e.filterable && Ie(e.filterMethod) ? e.filterMethod(C) : e.filterable && e.remote && Ie(e.remoteMethod) && e.remoteMethod(C), e.defaultFirstOption && (e.filterable || e.remote) && ae.value ? Ce(cn) : Ce(dn));
  }, cn = () => {
    const C = me.value.filter((Qe) => Qe.visible && !Qe.disabled && !Qe.states.groupDisabled), j = C.find((Qe) => Qe.created), ue = C[0], Me = me.value.map((Qe) => Qe.value);
    r.hoveringIndex = Fr(Me, j || ue);
  }, Ge = () => {
    if (e.multiple)
      r.selectedLabel = "";
    else {
      const j = je(e.modelValue) ? e.modelValue[0] : e.modelValue, ue = gt(j);
      r.selectedLabel = ue.currentLabel, r.selected = [ue];
      return;
    }
    const C = [];
    dt(e.modelValue) || Kt(e.modelValue).forEach((j) => {
      C.push(gt(j));
    }), r.selected = C;
  }, gt = (C) => {
    let j;
    const ue = cc(C);
    for (let fn = r.cachedOptions.size - 1; fn >= 0; fn--) {
      const Dt = Fe.value[fn];
      if (ue ? Gt(Dt.value, e.valueKey) === Gt(C, e.valueKey) : Dt.value === C) {
        j = {
          value: C,
          currentLabel: Dt.currentLabel,
          get isDisabled() {
            return Dt.isDisabled;
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
  }, dn = () => {
    r.hoveringIndex = me.value.findIndex((C) => r.selected.some((j) => _o(j) === _o(C)));
  }, Qt = () => {
    r.selectionWidth = u.value.getBoundingClientRect().width;
  }, D = () => {
    r.collapseItemWidth = k.value.getBoundingClientRect().width;
  }, fe = () => {
    var C, j;
    (j = (C = c.value) == null ? void 0 : C.updatePopper) == null || j.call(C);
  }, ot = () => {
    var C, j;
    (j = (C = d.value) == null ? void 0 : C.updatePopper) == null || j.call(C);
  }, Bt = () => {
    r.inputValue.length > 0 && !W.value && (W.value = !0), Ke(r.inputValue);
  }, Vt = (C) => {
    if (r.inputValue = C.target.value, e.remote)
      Mr();
    else
      return Bt();
  }, Mr = za(() => {
    Bt();
  }, de.value), Fn = (C) => {
    Jn(e.modelValue, C) || t(Jt, C);
  }, au = (C) => Yp(C, (j) => {
    const ue = r.cachedOptions.get(j);
    return ue && !ue.disabled && !ue.states.groupDisabled;
  }), ru = (C) => {
    if (e.multiple && C.code !== ze.delete && C.target.value.length <= 0) {
      const j = Kt(e.modelValue).slice(), ue = au(j);
      if (ue < 0)
        return;
      const Me = j[ue];
      j.splice(ue, 1), t(xe, j), Fn(j), t("remove-tag", Me);
    }
  }, su = (C, j) => {
    const ue = r.selected.indexOf(j);
    if (ue > -1 && !z.value) {
      const Me = Kt(e.modelValue).slice();
      Me.splice(ue, 1), t(xe, Me), Fn(Me), t("remove-tag", j.value);
    }
    C.stopPropagation(), wo();
  }, Nr = (C) => {
    C.stopPropagation();
    const j = e.multiple ? [] : Y.value;
    if (e.multiple)
      for (const ue of r.selected)
        ue.isDisabled && j.push(ue.value);
    t(xe, j), Fn(j), r.hoveringIndex = -1, W.value = !1, t("clear"), wo();
  }, zr = (C) => {
    var j;
    if (e.multiple) {
      const ue = Kt((j = e.modelValue) != null ? j : []).slice(), Me = Fr(ue, C);
      Me > -1 ? ue.splice(Me, 1) : (e.multipleLimit <= 0 || ue.length < e.multipleLimit) && ue.push(C.value), t(xe, ue), Fn(ue), C.created && Ke(""), e.filterable && !e.reserveKeyword && (r.inputValue = "");
    } else
      t(xe, C.value), Fn(C.value), W.value = !1;
    wo(), !W.value && Ce(() => {
      bo(C);
    });
  }, Fr = (C = [], j) => dt(j) ? -1 : Ye(j.value) ? C.findIndex((ue) => Jn(Gt(ue, e.valueKey), _o(j))) : C.indexOf(j.value), bo = (C) => {
    var j, ue, Me, Qe, fn;
    const Dt = je(C) ? C[0] : C;
    let So = null;
    if (Dt?.value) {
      const Bn = me.value.filter((ku) => ku.value === Dt.value);
      Bn.length > 0 && (So = Bn[0].$el);
    }
    if (c.value && So) {
      const Bn = (Qe = (Me = (ue = (j = c.value) == null ? void 0 : j.popperRef) == null ? void 0 : ue.contentRef) == null ? void 0 : Me.querySelector) == null ? void 0 : Qe.call(Me, `.${a.be("dropdown", "wrap")}`);
      Bn && zm(Bn, So);
    }
    (fn = g.value) == null || fn.handleScroll();
  }, iu = (C) => {
    r.options.set(C.value, C), r.cachedOptions.set(C.value, C);
  }, lu = (C, j) => {
    r.options.get(C) === j && r.options.delete(C);
  }, uu = y(() => {
    var C, j;
    return (j = (C = c.value) == null ? void 0 : C.popperRef) == null ? void 0 : j.contentRef;
  }), cu = () => {
    r.isBeforeHide = !1, Ce(() => {
      var C;
      (C = g.value) == null || C.update(), bo(r.selected);
    });
  }, wo = () => {
    var C;
    (C = f.value) == null || C.focus();
  }, du = () => {
    var C;
    if (W.value) {
      W.value = !1, Ce(() => {
        var j;
        return (j = f.value) == null ? void 0 : j.blur();
      });
      return;
    }
    (C = f.value) == null || C.blur();
  }, fu = (C) => {
    Nr(C);
  }, pu = (C) => {
    if (W.value = !1, x.value) {
      const j = new FocusEvent("focus", C);
      Ce(() => G(j));
    }
  }, mu = () => {
    r.inputValue.length > 0 ? r.inputValue = "" : W.value = !1;
  }, Br = () => {
    z.value || (Fa && (r.inputHovering = !0), r.menuVisibleOnFocus ? r.menuVisibleOnFocus = !1 : W.value = !W.value);
  }, vu = () => {
    if (!W.value)
      Br();
    else {
      const C = me.value[r.hoveringIndex];
      C && !C.isDisabled && zr(C);
    }
  }, _o = (C) => Ye(C.value) ? Gt(C.value, e.valueKey) : C.value, hu = y(() => me.value.filter((C) => C.visible).every((C) => C.isDisabled)), gu = y(() => e.multiple ? e.collapseTags ? r.selected.slice(0, e.maxCollapseTags) : r.selected : []), yu = y(() => e.multiple ? e.collapseTags ? r.selected.slice(e.maxCollapseTags) : [] : []), Vr = (C) => {
    if (!W.value) {
      W.value = !0;
      return;
    }
    if (!(r.options.size === 0 || ae.value === 0 || $.value) && !hu.value) {
      C === "next" ? (r.hoveringIndex++, r.hoveringIndex === r.options.size && (r.hoveringIndex = 0)) : C === "prev" && (r.hoveringIndex--, r.hoveringIndex < 0 && (r.hoveringIndex = r.options.size - 1));
      const j = me.value[r.hoveringIndex];
      (j.isDisabled || !j.visible) && Vr(C), Ce(() => bo(Q.value));
    }
  }, bu = () => {
    if (!u.value)
      return 0;
    const C = window.getComputedStyle(u.value);
    return Number.parseFloat(C.gap || "6px");
  }, wu = y(() => {
    const C = bu();
    return { maxWidth: `${k.value && e.maxCollapseTags === 1 ? r.selectionWidth - r.collapseItemWidth - C : r.selectionWidth}px` };
  }), _u = y(() => ({ maxWidth: `${r.selectionWidth}px` })), Su = (C) => {
    t("popup-scroll", C);
  };
  return bt(u, Qt), bt(m, fe), bt(I, fe), bt(h, ot), bt(k, D), Pe(() => {
    Ge();
  }), {
    inputId: N,
    contentId: o,
    nsSelect: a,
    nsInput: s,
    states: r,
    isFocused: x,
    expanded: W,
    optionsArray: me,
    hoverOption: Q,
    selectSize: oe,
    filteredOptionsCount: ae,
    updateTooltip: fe,
    updateTagTooltip: ot,
    debouncedOnInputChange: Mr,
    onInput: Vt,
    deletePrevTag: ru,
    deleteTag: su,
    deleteSelected: Nr,
    handleOptionSelect: zr,
    scrollToOption: bo,
    hasModelValue: E,
    shouldShowPlaceholder: Ae,
    currentPlaceholder: Se,
    mouseEnterEventName: ce,
    needStatusIcon: ee,
    showClose: X,
    iconComponent: le,
    iconReverse: he,
    validateState: be,
    validateIcon: J,
    showNewOption: B,
    updateOptions: ne,
    collapseTagSize: Le,
    setSelected: Ge,
    selectDisabled: z,
    emptyText: Ee,
    handleCompositionStart: S,
    handleCompositionUpdate: O,
    handleCompositionEnd: T,
    onOptionCreate: iu,
    onOptionDestroy: lu,
    handleMenuEnter: cu,
    focus: wo,
    blur: du,
    handleClearClick: fu,
    handleClickOutside: pu,
    handleEsc: mu,
    toggleMenu: Br,
    selectOption: vu,
    getValueKey: _o,
    navigateOptions: Vr,
    dropdownMenuVisible: De,
    showTagList: gu,
    collapseTagList: yu,
    popupScroll: Su,
    tagStyle: wu,
    collapseTagStyle: _u,
    popperRef: uu,
    inputRef: f,
    tooltipRef: c,
    tagTooltipRef: d,
    prefixRef: p,
    suffixRef: v,
    selectRef: i,
    wrapperRef: I,
    selectionRef: u,
    scrollbarRef: g,
    menuRef: m,
    tagMenuRef: h,
    collapseItemRef: k
  };
};
var H0 = U({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ye(ha);
    let o = [];
    return () => {
      var a, s;
      const r = (a = t.default) == null ? void 0 : a.call(t), i = [];
      function u(c) {
        je(c) && c.forEach((d) => {
          var f, p, v, m;
          const h = (f = d?.type || {}) == null ? void 0 : f.name;
          h === "ElOptionGroup" ? u(!Be(d.children) && !je(d.children) && Ie((p = d.children) == null ? void 0 : p.default) ? (v = d.children) == null ? void 0 : v.default() : d.children) : h === "ElOption" ? i.push((m = d.props) == null ? void 0 : m.value) : je(d.children) && u(d.children);
        });
      }
      return r.length && u((s = r[0]) == null ? void 0 : s.children), Jn(i, o) || (o = i, n && (n.states.optionValues = i)), r;
    };
  }
});
const j0 = ve({
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
  size: Tn,
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
  teleported: Or.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: En,
    default: da
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: En,
    default: ol
  },
  tagType: { ...Ha.type, default: "info" },
  tagEffect: { ...Ha.effect, default: "light" },
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
    values: Nn,
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
  ...Xi,
  ...un(["ariaLabel"])
}), ti = "ElSelect", W0 = U({
  name: ti,
  componentName: ti,
  components: {
    ElSelectMenu: V0,
    ElOption: Ir,
    ElOptions: H0,
    ElTag: k0,
    ElScrollbar: Gv,
    ElTooltip: $r,
    ElIcon: He
  },
  directives: { ClickOutside: C0 },
  props: j0,
  emits: [
    xe,
    Jt,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = y(() => {
      const { modelValue: u, multiple: c } = e, d = c ? [] : void 0;
      return je(u) ? c ? u : d : c ? d : u;
    }), o = Mt({
      ...kn(e),
      modelValue: n
    }), a = D0(o, t), { calculatorRef: s, inputStyle: r } = A0();
    mt(ha, Mt({
      props: o,
      states: a.states,
      optionsArray: a.optionsArray,
      handleOptionSelect: a.handleOptionSelect,
      onOptionCreate: a.onOptionCreate,
      onOptionDestroy: a.onOptionDestroy,
      selectRef: a.selectRef,
      setSelected: a.setSelected
    }));
    const i = y(() => e.multiple ? a.states.selected.map((u) => u.currentLabel) : a.states.selectedLabel);
    return {
      ...a,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: s,
      inputStyle: r
    };
  }
});
function U0(e, t, n, o, a, s) {
  const r = en("el-tag"), i = en("el-tooltip"), u = en("el-icon"), c = en("el-option"), d = en("el-options"), f = en("el-scrollbar"), p = en("el-select-menu"), v = Bu("click-outside");
  return qe((_(), R("div", {
    ref: "selectRef",
    class: M([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Vu(e.mouseEnterEventName)]: (m) => e.states.inputHovering = !0,
    onMouseleave: (m) => e.states.inputHovering = !1
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
      onHide: (m) => e.states.isBeforeHide = !1
    }, {
      default: Z(() => {
        var m;
        return [
          b("div", {
            ref: "wrapperRef",
            class: M([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Oe(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (_(), R("div", {
              key: 0,
              ref: "prefixRef",
              class: M(e.nsSelect.e("prefix"))
            }, [
              re(e.$slots, "prefix")
            ], 2)) : H("v-if", !0),
            b("div", {
              ref: "selectionRef",
              class: M([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? re(e.$slots, "tag", { key: 0 }, () => [
                (_(!0), R($e, null, rt(e.showTagList, (h) => (_(), R("div", {
                  key: e.getValueKey(h),
                  class: M(e.nsSelect.e("selected-item"))
                }, [
                  F(r, {
                    closable: !e.selectDisabled && !h.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: we(e.tagStyle),
                    onClose: (k) => e.deleteTag(k, h)
                  }, {
                    default: Z(() => [
                      b("span", {
                        class: M(e.nsSelect.e("tags-text"))
                      }, [
                        re(e.$slots, "label", {
                          label: h.currentLabel,
                          value: h.value
                        }, () => [
                          nn(K(h.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (_(), q(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: Z(() => [
                    b("div", {
                      ref: "collapseItemRef",
                      class: M(e.nsSelect.e("selected-item"))
                    }, [
                      F(r, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: we(e.collapseTagStyle)
                      }, {
                        default: Z(() => [
                          b("span", {
                            class: M(e.nsSelect.e("tags-text"))
                          }, " + " + K(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: Z(() => [
                    b("div", {
                      ref: "tagMenuRef",
                      class: M(e.nsSelect.e("selection"))
                    }, [
                      (_(!0), R($e, null, rt(e.collapseTagList, (h) => (_(), R("div", {
                        key: e.getValueKey(h),
                        class: M(e.nsSelect.e("selected-item"))
                      }, [
                        F(r, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !h.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (k) => e.deleteTag(k, h)
                        }, {
                          default: Z(() => [
                            b("span", {
                              class: M(e.nsSelect.e("tags-text"))
                            }, [
                              re(e.$slots, "label", {
                                label: h.currentLabel,
                                value: h.value
                              }, () => [
                                nn(K(h.currentLabel), 1)
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
              b("div", {
                class: M([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                qe(b("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (h) => e.states.inputValue = h,
                  type: "text",
                  name: e.name,
                  class: M([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: we(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((m = e.hoverOption) == null ? void 0 : m.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    Ot(Oe((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Ot(Oe((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    Ot(Oe(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    Ot(Oe(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    Ot(Oe(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Oe(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Du, e.states.inputValue]
                ]),
                e.filterable ? (_(), R("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: M(e.nsSelect.e("input-calculator")),
                  textContent: K(e.states.inputValue)
                }, null, 10, ["textContent"])) : H("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (_(), R("div", {
                key: 1,
                class: M([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? re(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  b("span", null, K(e.currentPlaceholder), 1)
                ]) : (_(), R("span", { key: 1 }, K(e.currentPlaceholder), 1))
              ], 2)) : H("v-if", !0)
            ], 2),
            b("div", {
              ref: "suffixRef",
              class: M(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (_(), q(u, {
                key: 0,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: Z(() => [
                  (_(), q(at(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0),
              e.showClose && e.clearIcon ? (_(), q(u, {
                key: 1,
                class: M([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: Z(() => [
                  (_(), q(at(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : H("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (_(), q(u, {
                key: 2,
                class: M([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: Z(() => [
                  (_(), q(at(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: Z(() => [
        F(p, { ref: "menuRef" }, {
          default: Z(() => [
            e.$slots.header ? (_(), R("div", {
              key: 0,
              class: M(e.nsSelect.be("dropdown", "header")),
              onClick: Oe(() => {
              }, ["stop"])
            }, [
              re(e.$slots, "header")
            ], 10, ["onClick"])) : H("v-if", !0),
            qe(F(f, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: M([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: Z(() => [
                e.showNewOption ? (_(), q(c, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : H("v-if", !0),
                F(d, null, {
                  default: Z(() => [
                    re(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [At, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (_(), R("div", {
              key: 1,
              class: M(e.nsSelect.be("dropdown", "loading"))
            }, [
              re(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (_(), R("div", {
              key: 2,
              class: M(e.nsSelect.be("dropdown", "empty"))
            }, [
              re(e.$slots, "empty", {}, () => [
                b("span", null, K(e.emptyText), 1)
              ])
            ], 2)) : H("v-if", !0),
            e.$slots.footer ? (_(), R("div", {
              key: 3,
              class: M(e.nsSelect.be("dropdown", "footer")),
              onClick: Oe(() => {
              }, ["stop"])
            }, [
              re(e.$slots, "footer")
            ], 10, ["onClick"])) : H("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [v, e.handleClickOutside, e.popperRef]
  ]);
}
var K0 = /* @__PURE__ */ _e(W0, [["render", U0], ["__file", "select.vue"]]);
const G0 = U({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Te("select"), n = A(null), o = Ue(), a = A([]);
    mt(Nl, Mt({
      ...kn(e)
    }));
    const s = y(() => a.value.some((c) => c.visible === !0)), r = (c) => {
      var d, f;
      return ((d = c.type) == null ? void 0 : d.name) === "ElOption" && !!((f = c.component) != null && f.proxy);
    }, i = (c) => {
      const d = Kt(c), f = [];
      return d.forEach((p) => {
        var v, m;
        r(p) ? f.push(p.component.proxy) : (v = p.children) != null && v.length ? f.push(...i(p.children)) : (m = p.component) != null && m.subTree && f.push(...i(p.component.subTree));
      }), f;
    }, u = () => {
      a.value = i(o.subTree);
    };
    return Pe(() => {
      u();
    }), wm(n, u, {
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
function Z0(e, t, n, o, a, s) {
  return qe((_(), R("ul", {
    ref: "groupRef",
    class: M(e.ns.be("group", "wrap"))
  }, [
    b("li", {
      class: M(e.ns.be("group", "title"))
    }, K(e.label), 3),
    b("li", null, [
      b("ul", {
        class: M(e.ns.b("group"))
      }, [
        re(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [At, e.visible]
  ]);
}
var zl = /* @__PURE__ */ _e(G0, [["render", Z0], ["__file", "option-group.vue"]]);
const Lr = nt(K0, {
  Option: Ir,
  OptionGroup: zl
}), xr = dr(Ir);
dr(zl);
const Y0 = ve({
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
}), q0 = U({
  name: "ElProgress"
}), J0 = /* @__PURE__ */ U({
  ...q0,
  props: Y0,
  setup(e) {
    const t = e, n = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, o = Te("progress"), a = y(() => {
      const S = {
        width: `${t.percentage}%`,
        animationDuration: `${t.duration}s`
      }, O = $(t.percentage);
      return O.includes("gradient") ? S.background = O : S.backgroundColor = O, S;
    }), s = y(() => (t.strokeWidth / t.width * 100).toFixed(1)), r = y(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(`${50 - Number.parseFloat(s.value) / 2}`, 10) : 0), i = y(() => {
      const S = r.value, O = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${O ? "" : "-"}${S}
          a ${S} ${S} 0 1 1 0 ${O ? "-" : ""}${S * 2}
          a ${S} ${S} 0 1 1 0 ${O ? "" : "-"}${S * 2}
          `;
    }), u = y(() => 2 * Math.PI * r.value), c = y(() => t.type === "dashboard" ? 0.75 : 1), d = y(() => `${-1 * u.value * (1 - c.value) / 2}px`), f = y(() => ({
      strokeDasharray: `${u.value * c.value}px, ${u.value}px`,
      strokeDashoffset: d.value
    })), p = y(() => ({
      strokeDasharray: `${u.value * c.value * (t.percentage / 100)}px, ${u.value}px`,
      strokeDashoffset: d.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), v = y(() => {
      let S;
      return t.color ? S = $(t.percentage) : S = n[t.status] || n.default, S;
    }), m = y(() => t.status === "warning" ? rl : t.type === "line" ? t.status === "success" ? al : da : t.status === "success" ? Km : lo), h = y(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), k = y(() => t.format(t.percentage));
    function g(S) {
      const O = 100 / S.length;
      return S.map((I, x) => Be(I) ? {
        color: I,
        percentage: (x + 1) * O
      } : I).sort((I, x) => I.percentage - x.percentage);
    }
    const $ = (S) => {
      var O;
      const { color: T } = t;
      if (Ie(T))
        return T(S);
      if (Be(T))
        return T;
      {
        const I = g(T);
        for (const x of I)
          if (x.percentage > S)
            return x.color;
        return (O = I[I.length - 1]) == null ? void 0 : O.color;
      }
    };
    return (S, O) => (_(), R("div", {
      class: M([
        l(o).b(),
        l(o).m(S.type),
        l(o).is(S.status),
        {
          [l(o).m("without-text")]: !S.showText,
          [l(o).m("text-inside")]: S.textInside
        }
      ]),
      role: "progressbar",
      "aria-valuenow": S.percentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, [
      S.type === "line" ? (_(), R("div", {
        key: 0,
        class: M(l(o).b("bar"))
      }, [
        b("div", {
          class: M(l(o).be("bar", "outer")),
          style: we({ height: `${S.strokeWidth}px` })
        }, [
          b("div", {
            class: M([
              l(o).be("bar", "inner"),
              { [l(o).bem("bar", "inner", "indeterminate")]: S.indeterminate },
              { [l(o).bem("bar", "inner", "striped")]: S.striped },
              { [l(o).bem("bar", "inner", "striped-flow")]: S.stripedFlow }
            ]),
            style: we(l(a))
          }, [
            (S.showText || S.$slots.default) && S.textInside ? (_(), R("div", {
              key: 0,
              class: M(l(o).be("bar", "innerText"))
            }, [
              re(S.$slots, "default", { percentage: S.percentage }, () => [
                b("span", null, K(l(k)), 1)
              ])
            ], 2)) : H("v-if", !0)
          ], 6)
        ], 6)
      ], 2)) : (_(), R("div", {
        key: 1,
        class: M(l(o).b("circle")),
        style: we({ height: `${S.width}px`, width: `${S.width}px` })
      }, [
        (_(), R("svg", { viewBox: "0 0 100 100" }, [
          b("path", {
            class: M(l(o).be("circle", "track")),
            d: l(i),
            stroke: `var(${l(o).cssVarName("fill-color-light")}, #e5e9f2)`,
            "stroke-linecap": S.strokeLinecap,
            "stroke-width": l(s),
            fill: "none",
            style: we(l(f))
          }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]),
          b("path", {
            class: M(l(o).be("circle", "path")),
            d: l(i),
            stroke: l(v),
            fill: "none",
            opacity: S.percentage ? 1 : 0,
            "stroke-linecap": S.strokeLinecap,
            "stroke-width": l(s),
            style: we(l(p))
          }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])
        ]))
      ], 6)),
      (S.showText || S.$slots.default) && !S.textInside ? (_(), R("div", {
        key: 2,
        class: M(l(o).e("text")),
        style: we({ fontSize: `${l(h)}px` })
      }, [
        re(S.$slots, "default", { percentage: S.percentage }, () => [
          S.status ? (_(), q(l(He), { key: 1 }, {
            default: Z(() => [
              (_(), q(at(l(m))))
            ]),
            _: 1
          })) : (_(), R("span", { key: 0 }, K(l(k)), 1))
        ])
      ], 6)) : H("v-if", !0)
    ], 10, ["aria-valuenow"]));
  }
});
var X0 = /* @__PURE__ */ _e(J0, [["__file", "progress.vue"]]);
const Q0 = nt(X0), ey = ve({
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
}), ty = ve({
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
}), ny = U({
  name: "ElSkeletonItem"
}), oy = /* @__PURE__ */ U({
  ...ny,
  props: ty,
  setup(e) {
    const t = Te("skeleton");
    return (n, o) => (_(), R("div", {
      class: M([l(t).e("item"), l(t).e(n.variant)])
    }, [
      n.variant === "image" ? (_(), q(l(iv), { key: 0 })) : H("v-if", !0)
    ], 2));
  }
});
var Zo = /* @__PURE__ */ _e(oy, [["__file", "skeleton-item.vue"]]);
const ay = (e, t = 0) => {
  if (t === 0)
    return e;
  const n = Ye(t) && !!t.initVal, o = A(n);
  let a = null;
  const s = (i) => {
    if (dt(i)) {
      o.value = e.value;
      return;
    }
    a && clearTimeout(a), a = setTimeout(() => {
      o.value = e.value;
    }, i);
  }, r = (i) => {
    i === "leading" ? pe(t) ? s(t) : s(t.leading) : Ye(t) ? s(t.trailing) : o.value = !1;
  };
  return Pe(() => r("leading")), se(() => e.value, (i) => {
    r(i ? "leading" : "trailing");
  }), o;
}, ry = U({
  name: "ElSkeleton"
}), sy = /* @__PURE__ */ U({
  ...ry,
  props: ey,
  setup(e, { expose: t }) {
    const n = e, o = Te("skeleton"), a = ay(wt(n, "loading"), n.throttle);
    return t({
      uiLoading: a
    }), (s, r) => l(a) ? (_(), R("div", Yt({
      key: 0,
      class: [l(o).b(), l(o).is("animated", s.animated)]
    }, s.$attrs), [
      (_(!0), R($e, null, rt(s.count, (i) => (_(), R($e, { key: i }, [
        l(a) ? re(s.$slots, "template", { key: i }, () => [
          F(Zo, {
            class: M(l(o).is("first")),
            variant: "p"
          }, null, 8, ["class"]),
          (_(!0), R($e, null, rt(s.rows, (u) => (_(), q(Zo, {
            key: u,
            class: M([
              l(o).e("paragraph"),
              l(o).is("last", u === s.rows && s.rows > 1)
            ]),
            variant: "p"
          }, null, 8, ["class"]))), 128))
        ]) : H("v-if", !0)
      ], 64))), 128))
    ], 16)) : re(s.$slots, "default", Hu(Yt({ key: 1 }, s.$attrs)));
  }
});
var iy = /* @__PURE__ */ _e(sy, [["__file", "skeleton.vue"]]);
const ly = nt(iy, {
  SkeletonItem: Zo
});
dr(Zo);
const Fl = Symbol("sliderContextKey"), uy = ve({
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
  size: Tn,
  inputSize: Tn,
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
    values: Nn,
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
  ...un(["ariaLabel"])
}), Ca = (e) => pe(e) || je(e) && e.every(pe), cy = {
  [xe]: Ca,
  [Rt]: Ca,
  [Jt]: Ca
}, dy = ve({
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: Boolean,
  tooltipClass: String,
  placement: {
    type: String,
    values: Nn,
    default: "top"
  }
}), fy = {
  [xe]: (e) => pe(e)
}, py = (e, t, n) => {
  const o = A(), a = A(!1), s = y(() => t.value instanceof Function), r = y(() => s.value && t.value(e.modelValue) || e.modelValue), i = za(() => {
    n.value && (a.value = !0);
  }, 50), u = za(() => {
    n.value && (a.value = !1);
  }, 50);
  return {
    tooltip: o,
    tooltipVisible: a,
    formatValue: r,
    displayTooltip: i,
    hideTooltip: u
  };
}, my = (e, t, n) => {
  const {
    disabled: o,
    min: a,
    max: s,
    step: r,
    showTooltip: i,
    persistent: u,
    precision: c,
    sliderSize: d,
    formatTooltip: f,
    emitChange: p,
    resetSize: v,
    updateDragging: m
  } = ye(Fl), { tooltip: h, tooltipVisible: k, formatValue: g, displayTooltip: $, hideTooltip: S } = py(e, f, i), O = A(), T = y(() => `${(e.modelValue - a.value) / (s.value - a.value) * 100}%`), I = y(() => e.vertical ? { bottom: T.value } : { left: T.value }), x = () => {
    t.hovering = !0, $();
  }, G = () => {
    t.hovering = !1, t.dragging || S();
  }, W = (J) => {
    o.value || (J.preventDefault(), X(J), window.addEventListener("mousemove", le), window.addEventListener("touchmove", le), window.addEventListener("mouseup", he), window.addEventListener("touchend", he), window.addEventListener("contextmenu", he), O.value.focus());
  }, Q = (J) => {
    o.value || (t.newPosition = Number.parseFloat(T.value) + J / (s.value - a.value) * 100, be(t.newPosition), p());
  }, ie = () => {
    Q(-r.value);
  }, w = () => {
    Q(r.value);
  }, N = () => {
    Q(-r.value * 4);
  }, Y = () => {
    Q(r.value * 4);
  }, P = () => {
    o.value || (be(0), p());
  }, z = () => {
    o.value || (be(100), p());
  }, E = (J) => {
    let de = !0;
    switch (J.code) {
      case ze.left:
      case ze.down:
        ie();
        break;
      case ze.right:
      case ze.up:
        w();
        break;
      case ze.home:
        P();
        break;
      case ze.end:
        z();
        break;
      case ze.pageDown:
        N();
        break;
      case ze.pageUp:
        Y();
        break;
      default:
        de = !1;
        break;
    }
    de && J.preventDefault();
  }, ee = (J) => {
    let de, ge;
    return J.type.startsWith("touch") ? (ge = J.touches[0].clientY, de = J.touches[0].clientX) : (ge = J.clientY, de = J.clientX), {
      clientX: de,
      clientY: ge
    };
  }, X = (J) => {
    t.dragging = !0, t.isClick = !0;
    const { clientX: de, clientY: ge } = ee(J);
    e.vertical ? t.startY = ge : t.startX = de, t.startPosition = Number.parseFloat(T.value), t.newPosition = t.startPosition;
  }, le = (J) => {
    if (t.dragging) {
      t.isClick = !1, $(), v();
      let de;
      const { clientX: ge, clientY: Ee } = ee(J);
      e.vertical ? (t.currentY = Ee, de = (t.startY - t.currentY) / d.value * 100) : (t.currentX = ge, de = (t.currentX - t.startX) / d.value * 100), t.newPosition = t.startPosition + de, be(t.newPosition);
    }
  }, he = () => {
    t.dragging && (setTimeout(() => {
      t.dragging = !1, t.hovering || S(), t.isClick || be(t.newPosition), p();
    }, 0), window.removeEventListener("mousemove", le), window.removeEventListener("touchmove", le), window.removeEventListener("mouseup", he), window.removeEventListener("touchend", he), window.removeEventListener("contextmenu", he));
  }, be = async (J) => {
    if (J === null || Number.isNaN(+J))
      return;
    J < 0 ? J = 0 : J > 100 && (J = 100);
    const de = 100 / ((s.value - a.value) / r.value);
    let Ee = Math.round(J / de) * de * (s.value - a.value) * 0.01 + a.value;
    Ee = Number.parseFloat(Ee.toFixed(c.value)), Ee !== e.modelValue && n(xe, Ee), !t.dragging && e.modelValue !== t.oldValue && (t.oldValue = e.modelValue), await Ce(), t.dragging && $(), h.value.updatePopper();
  };
  return se(() => t.dragging, (J) => {
    m(J);
  }), We(O, "touchstart", W, { passive: !1 }), {
    disabled: o,
    button: O,
    tooltip: h,
    tooltipVisible: k,
    showTooltip: i,
    persistent: u,
    wrapperStyle: I,
    formatValue: g,
    handleMouseEnter: x,
    handleMouseLeave: G,
    onButtonDown: W,
    onKeyDown: E,
    setPosition: be
  };
}, vy = U({
  name: "ElSliderButton"
}), hy = /* @__PURE__ */ U({
  ...vy,
  props: dy,
  emits: fy,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Te("slider"), s = Mt({
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
    }), r = y(() => d.value ? f.value : !1), {
      disabled: i,
      button: u,
      tooltip: c,
      showTooltip: d,
      persistent: f,
      tooltipVisible: p,
      wrapperStyle: v,
      formatValue: m,
      handleMouseEnter: h,
      handleMouseLeave: k,
      onButtonDown: g,
      onKeyDown: $,
      setPosition: S
    } = my(o, s, n), { hovering: O, dragging: T } = kn(s);
    return t({
      onButtonDown: g,
      onKeyDown: $,
      setPosition: S,
      hovering: O,
      dragging: T
    }), (I, x) => (_(), R("div", {
      ref_key: "button",
      ref: u,
      class: M([l(a).e("button-wrapper"), { hover: l(O), dragging: l(T) }]),
      style: we(l(v)),
      tabindex: l(i) ? -1 : 0,
      onMouseenter: l(h),
      onMouseleave: l(k),
      onMousedown: l(g),
      onFocus: l(h),
      onBlur: l(k),
      onKeydown: l($)
    }, [
      F(l($r), {
        ref_key: "tooltip",
        ref: c,
        visible: l(p),
        placement: I.placement,
        "fallback-placements": ["top", "bottom", "right", "left"],
        "stop-popper-mouse-event": !1,
        "popper-class": I.tooltipClass,
        disabled: !l(d),
        persistent: l(r)
      }, {
        content: Z(() => [
          b("span", null, K(l(m)), 1)
        ]),
        default: Z(() => [
          b("div", {
            class: M([l(a).e("button"), { hover: l(O), dragging: l(T) }])
          }, null, 2)
        ]),
        _: 1
      }, 8, ["visible", "placement", "popper-class", "disabled", "persistent"])
    ], 46, ["tabindex", "onMouseenter", "onMouseleave", "onMousedown", "onFocus", "onBlur", "onKeydown"]));
  }
});
var ni = /* @__PURE__ */ _e(hy, [["__file", "button.vue"]]);
const gy = ve({
  mark: {
    type: te([String, Object]),
    default: void 0
  }
});
var yy = U({
  name: "ElSliderMarker",
  props: gy,
  setup(e) {
    const t = Te("slider"), n = y(() => Be(e.mark) ? e.mark : e.mark.label), o = y(() => Be(e.mark) ? void 0 : e.mark.style);
    return () => ki("div", {
      class: t.e("marks-text"),
      style: o.value
    }, n.value);
  }
});
const by = (e, t, n) => {
  const { form: o, formItem: a } = pa(), s = Zt(), r = A(), i = A(), u = {
    firstButton: r,
    secondButton: i
  }, c = y(() => e.disabled || o?.disabled || !1), d = y(() => Math.min(t.firstValue, t.secondValue)), f = y(() => Math.max(t.firstValue, t.secondValue)), p = y(() => e.range ? `${100 * (f.value - d.value) / (e.max - e.min)}%` : `${100 * (t.firstValue - e.min) / (e.max - e.min)}%`), v = y(() => e.range ? `${100 * (d.value - e.min) / (e.max - e.min)}%` : "0%"), m = y(() => e.vertical ? { height: e.height } : {}), h = y(() => e.vertical ? {
    height: p.value,
    bottom: v.value
  } : {
    width: p.value,
    left: v.value
  }), k = () => {
    s.value && (t.sliderSize = s.value[`client${e.vertical ? "Height" : "Width"}`]);
  }, g = (w) => {
    const N = e.min + w * (e.max - e.min) / 100;
    if (!e.range)
      return r;
    let Y;
    return Math.abs(d.value - N) < Math.abs(f.value - N) ? Y = t.firstValue < t.secondValue ? "firstButton" : "secondButton" : Y = t.firstValue > t.secondValue ? "firstButton" : "secondButton", u[Y];
  }, $ = (w) => {
    const N = g(w);
    return N.value.setPosition(w), N;
  }, S = (w) => {
    t.firstValue = w ?? e.min, T(e.range ? [d.value, f.value] : w ?? e.min);
  }, O = (w) => {
    t.secondValue = w, e.range && T([d.value, f.value]);
  }, T = (w) => {
    n(xe, w), n(Rt, w);
  }, I = async () => {
    await Ce(), n(Jt, e.range ? [d.value, f.value] : e.modelValue);
  }, x = (w) => {
    var N, Y, P, z, E, ee;
    if (c.value || t.dragging)
      return;
    k();
    let X = 0;
    if (e.vertical) {
      const le = (P = (Y = (N = w.touches) == null ? void 0 : N.item(0)) == null ? void 0 : Y.clientY) != null ? P : w.clientY;
      X = (s.value.getBoundingClientRect().bottom - le) / t.sliderSize * 100;
    } else {
      const le = (ee = (E = (z = w.touches) == null ? void 0 : z.item(0)) == null ? void 0 : E.clientX) != null ? ee : w.clientX, he = s.value.getBoundingClientRect().left;
      X = (le - he) / t.sliderSize * 100;
    }
    if (!(X < 0 || X > 100))
      return $(X);
  };
  return {
    elFormItem: a,
    slider: s,
    firstButton: r,
    secondButton: i,
    sliderDisabled: c,
    minValue: d,
    maxValue: f,
    runwayStyle: m,
    barStyle: h,
    resetSize: k,
    setPosition: $,
    emitChange: I,
    onSliderWrapperPrevent: (w) => {
      var N, Y;
      ((N = u.firstButton.value) != null && N.dragging || (Y = u.secondButton.value) != null && Y.dragging) && w.preventDefault();
    },
    onSliderClick: (w) => {
      x(w) && I();
    },
    onSliderDown: async (w) => {
      const N = x(w);
      N && (await Ce(), N.value.onButtonDown(w));
    },
    onSliderMarkerDown: (w) => {
      c.value || t.dragging || $(w);
    },
    setFirstValue: S,
    setSecondValue: O
  };
}, wy = (e, t, n, o) => ({
  stops: y(() => {
    if (!e.showStops || e.min > e.max)
      return [];
    if (e.step === 0)
      return [];
    const r = (e.max - e.min) / e.step, i = 100 * e.step / (e.max - e.min), u = Array.from({ length: r - 1 }).map((c, d) => (d + 1) * i);
    return e.range ? u.filter((c) => c < 100 * (n.value - e.min) / (e.max - e.min) || c > 100 * (o.value - e.min) / (e.max - e.min)) : u.filter((c) => c > 100 * (t.firstValue - e.min) / (e.max - e.min));
  }),
  getStopStyle: (r) => e.vertical ? { bottom: `${r}%` } : { left: `${r}%` }
}), _y = (e) => y(() => e.marks ? Object.keys(e.marks).map(Number.parseFloat).sort((n, o) => n - o).filter((n) => n <= e.max && n >= e.min).map((n) => ({
  point: n,
  position: (n - e.min) * 100 / (e.max - e.min),
  mark: e.marks[n]
})) : []), Sy = (e, t, n, o, a, s) => {
  const r = (c) => {
    a(xe, c), a(Rt, c);
  }, i = () => e.range ? ![n.value, o.value].every((c, d) => c === t.oldValue[d]) : e.modelValue !== t.oldValue, u = () => {
    var c, d;
    e.min > e.max && cr("Slider", "min should not be greater than max.");
    const f = e.modelValue;
    e.range && je(f) ? f[1] < e.min ? r([e.min, e.min]) : f[0] > e.max ? r([e.max, e.max]) : f[0] < e.min ? r([e.min, f[1]]) : f[1] > e.max ? r([f[0], e.max]) : (t.firstValue = f[0], t.secondValue = f[1], i() && (e.validateEvent && ((c = s?.validate) == null || c.call(s, "change").catch((p) => void 0)), t.oldValue = f.slice())) : !e.range && pe(f) && !Number.isNaN(f) && (f < e.min ? r(e.min) : f > e.max ? r(e.max) : (t.firstValue = f, i() && (e.validateEvent && ((d = s?.validate) == null || d.call(s, "change").catch((p) => void 0)), t.oldValue = f)));
  };
  u(), se(() => t.dragging, (c) => {
    c || u();
  }), se(() => e.modelValue, (c, d) => {
    t.dragging || je(c) && je(d) && c.every((f, p) => f === d[p]) && t.firstValue === c[0] && t.secondValue === c[1] || u();
  }, {
    deep: !0
  }), se(() => [e.min, e.max], () => {
    u();
  });
}, ky = (e, t, n) => {
  const o = A();
  return Pe(async () => {
    e.range ? (je(e.modelValue) ? (t.firstValue = Math.max(e.min, e.modelValue[0]), t.secondValue = Math.min(e.max, e.modelValue[1])) : (t.firstValue = e.min, t.secondValue = e.max), t.oldValue = [t.firstValue, t.secondValue]) : (!pe(e.modelValue) || Number.isNaN(e.modelValue) ? t.firstValue = e.min : t.firstValue = Math.min(e.max, Math.max(e.min, e.modelValue)), t.oldValue = t.firstValue), We(window, "resize", n), await Ce(), n();
  }), {
    sliderWrapper: o
  };
}, Cy = U({
  name: "ElSlider"
}), Ty = /* @__PURE__ */ U({
  ...Cy,
  props: uy,
  emits: cy,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Te("slider"), { t: s } = ua(), r = Mt({
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
      sliderDisabled: f,
      minValue: p,
      maxValue: v,
      runwayStyle: m,
      barStyle: h,
      resetSize: k,
      emitChange: g,
      onSliderWrapperPrevent: $,
      onSliderClick: S,
      onSliderDown: O,
      onSliderMarkerDown: T,
      setFirstValue: I,
      setSecondValue: x
    } = by(o, r, n), { stops: G, getStopStyle: W } = wy(o, r, p, v), { inputId: Q, isLabeledByFormItem: ie } = pr(o, {
      formItemContext: i
    }), w = vo(), N = y(() => o.inputSize || w.value), Y = y(() => o.ariaLabel || s("el.slider.defaultLabel", {
      min: o.min,
      max: o.max
    })), P = y(() => o.range ? o.rangeStartLabel || s("el.slider.defaultRangeStartLabel") : Y.value), z = y(() => o.formatValueText ? o.formatValueText(J.value) : `${J.value}`), E = y(() => o.rangeEndLabel || s("el.slider.defaultRangeEndLabel")), ee = y(() => o.formatValueText ? o.formatValueText(de.value) : `${de.value}`), X = y(() => [
      a.b(),
      a.m(w.value),
      a.is("vertical", o.vertical),
      { [a.m("with-input")]: o.showInput }
    ]), le = _y(o);
    Sy(o, r, p, v, n, i);
    const he = y(() => {
      const ae = [o.min, o.max, o.step].map((me) => {
        const Fe = `${me}`.split(".")[1];
        return Fe ? Fe.length : 0;
      });
      return Math.max.apply(null, ae);
    }), { sliderWrapper: be } = ky(o, r, k), { firstValue: J, secondValue: de, sliderSize: ge } = kn(r), Ee = (ae) => {
      r.dragging = ae;
    };
    return We(be, "touchstart", $, {
      passive: !1
    }), We(be, "touchmove", $, {
      passive: !1
    }), mt(Fl, {
      ...kn(o),
      sliderSize: ge,
      disabled: f,
      precision: he,
      emitChange: g,
      resetSize: k,
      updateDragging: Ee
    }), t({
      onSliderClick: S
    }), (ae, me) => {
      var Fe, B;
      return _(), R("div", {
        id: ae.range ? l(Q) : void 0,
        ref_key: "sliderWrapper",
        ref: be,
        class: M(l(X)),
        role: ae.range ? "group" : void 0,
        "aria-label": ae.range && !l(ie) ? l(Y) : void 0,
        "aria-labelledby": ae.range && l(ie) ? (Fe = l(i)) == null ? void 0 : Fe.labelId : void 0
      }, [
        b("div", {
          ref_key: "slider",
          ref: u,
          class: M([
            l(a).e("runway"),
            { "show-input": ae.showInput && !ae.range },
            l(a).is("disabled", l(f))
          ]),
          style: we(l(m)),
          onMousedown: l(O),
          onTouchstartPassive: l(O)
        }, [
          b("div", {
            class: M(l(a).e("bar")),
            style: we(l(h))
          }, null, 6),
          F(ni, {
            id: ae.range ? void 0 : l(Q),
            ref_key: "firstButton",
            ref: c,
            "model-value": l(J),
            vertical: ae.vertical,
            "tooltip-class": ae.tooltipClass,
            placement: ae.placement,
            role: "slider",
            "aria-label": ae.range || !l(ie) ? l(P) : void 0,
            "aria-labelledby": !ae.range && l(ie) ? (B = l(i)) == null ? void 0 : B.labelId : void 0,
            "aria-valuemin": ae.min,
            "aria-valuemax": ae.range ? l(de) : ae.max,
            "aria-valuenow": l(J),
            "aria-valuetext": l(z),
            "aria-orientation": ae.vertical ? "vertical" : "horizontal",
            "aria-disabled": l(f),
            "onUpdate:modelValue": l(I)
          }, null, 8, ["id", "model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-labelledby", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"]),
          ae.range ? (_(), q(ni, {
            key: 0,
            ref_key: "secondButton",
            ref: d,
            "model-value": l(de),
            vertical: ae.vertical,
            "tooltip-class": ae.tooltipClass,
            placement: ae.placement,
            role: "slider",
            "aria-label": l(E),
            "aria-valuemin": l(J),
            "aria-valuemax": ae.max,
            "aria-valuenow": l(de),
            "aria-valuetext": l(ee),
            "aria-orientation": ae.vertical ? "vertical" : "horizontal",
            "aria-disabled": l(f),
            "onUpdate:modelValue": l(x)
          }, null, 8, ["model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"])) : H("v-if", !0),
          ae.showStops ? (_(), R("div", { key: 1 }, [
            (_(!0), R($e, null, rt(l(G), (ne, oe) => (_(), R("div", {
              key: oe,
              class: M(l(a).e("stop")),
              style: we(l(W)(ne))
            }, null, 6))), 128))
          ])) : H("v-if", !0),
          l(le).length > 0 ? (_(), R($e, { key: 2 }, [
            b("div", null, [
              (_(!0), R($e, null, rt(l(le), (ne, oe) => (_(), R("div", {
                key: oe,
                style: we(l(W)(ne.position)),
                class: M([l(a).e("stop"), l(a).e("marks-stop")])
              }, null, 6))), 128))
            ]),
            b("div", {
              class: M(l(a).e("marks"))
            }, [
              (_(!0), R($e, null, rt(l(le), (ne, oe) => (_(), q(l(yy), {
                key: oe,
                mark: ne.mark,
                style: we(l(W)(ne.position)),
                onMousedown: Oe((Le) => l(T)(ne.position), ["stop"])
              }, null, 8, ["mark", "style", "onMousedown"]))), 128))
            ], 2)
          ], 64)) : H("v-if", !0)
        ], 46, ["onMousedown", "onTouchstartPassive"]),
        ae.showInput && !ae.range ? (_(), q(l(R0), {
          key: 0,
          ref: "input",
          "model-value": l(J),
          class: M(l(a).e("input")),
          step: ae.step,
          disabled: l(f),
          controls: ae.showInputControls,
          min: ae.min,
          max: ae.max,
          precision: l(he),
          debounce: ae.debounce,
          size: l(N),
          "onUpdate:modelValue": l(I),
          onChange: l(g)
        }, null, 8, ["model-value", "class", "step", "disabled", "controls", "min", "max", "precision", "debounce", "size", "onUpdate:modelValue", "onChange"])) : H("v-if", !0)
      ], 10, ["id", "role", "aria-label", "aria-labelledby"]);
    };
  }
});
var Ey = /* @__PURE__ */ _e(Ty, [["__file", "slider.vue"]]);
const Py = nt(Ey), Bl = ["success", "info", "warning", "error"], Ve = ll({
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
}), Oy = ve({
  customClass: {
    type: String,
    default: Ve.customClass
  },
  center: {
    type: Boolean,
    default: Ve.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Ve.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Ve.duration
  },
  icon: {
    type: En,
    default: Ve.icon
  },
  id: {
    type: String,
    default: Ve.id
  },
  message: {
    type: te([
      String,
      Object,
      Function
    ]),
    default: Ve.message
  },
  onClose: {
    type: te(Function),
    default: Ve.onClose
  },
  showClose: {
    type: Boolean,
    default: Ve.showClose
  },
  type: {
    type: String,
    values: Bl,
    default: Ve.type
  },
  plain: {
    type: Boolean,
    default: Ve.plain
  },
  offset: {
    type: Number,
    default: Ve.offset
  },
  zIndex: {
    type: Number,
    default: Ve.zIndex
  },
  grouping: {
    type: Boolean,
    default: Ve.grouping
  },
  repeatNum: {
    type: Number,
    default: Ve.repeatNum
  }
}), $y = {
  destroy: () => !0
}, ft = ju([]), Iy = (e) => {
  const t = ft.findIndex((a) => a.id === e), n = ft[t];
  let o;
  return t > 0 && (o = ft[t - 1]), { current: n, prev: o };
}, Ly = (e) => {
  const { prev: t } = Iy(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, xy = (e, t) => ft.findIndex((o) => o.id === e) > 0 ? 16 : t, Ry = U({
  name: "ElMessage"
}), Ay = /* @__PURE__ */ U({
  ...Ry,
  props: Oy,
  emits: $y,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = hv, { ns: a, zIndex: s } = el("message"), { currentZIndex: r, nextZIndex: i } = s, u = A(), c = A(!1), d = A(0);
    let f;
    const p = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), v = y(() => {
      const x = n.type;
      return { [a.bm("icon", x)]: x && Uo[x] };
    }), m = y(() => n.icon || Uo[n.type] || ""), h = y(() => Ly(n.id)), k = y(() => xy(n.id, n.offset) + h.value), g = y(() => d.value + k.value), $ = y(() => ({
      top: `${k.value}px`,
      zIndex: r.value
    }));
    function S() {
      n.duration !== 0 && ({ stop: f } = Hi(() => {
        T();
      }, n.duration));
    }
    function O() {
      f?.();
    }
    function T() {
      c.value = !1;
    }
    function I({ code: x }) {
      x === ze.esc && T();
    }
    return Pe(() => {
      S(), i(), c.value = !0;
    }), se(() => n.repeatNum, () => {
      O(), S();
    }), We(document, "keydown", I), bt(u, () => {
      d.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: g,
      close: T
    }), (x, G) => (_(), q(An, {
      name: l(a).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (W) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: Z(() => [
        qe(b("div", {
          id: x.id,
          ref_key: "messageRef",
          ref: u,
          class: M([
            l(a).b(),
            { [l(a).m(x.type)]: x.type },
            l(a).is("center", x.center),
            l(a).is("closable", x.showClose),
            l(a).is("plain", x.plain),
            x.customClass
          ]),
          style: we(l($)),
          role: "alert",
          onMouseenter: O,
          onMouseleave: S
        }, [
          x.repeatNum > 1 ? (_(), q(l(g0), {
            key: 0,
            value: x.repeatNum,
            type: l(p),
            class: M(l(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : H("v-if", !0),
          l(m) ? (_(), q(l(He), {
            key: 1,
            class: M([l(a).e("icon"), l(v)])
          }, {
            default: Z(() => [
              (_(), q(at(l(m))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          re(x.$slots, "default", {}, () => [
            x.dangerouslyUseHTMLString ? (_(), R($e, { key: 1 }, [
              H(" Caution here, message could've been compromised, never use user's input as message "),
              b("p", {
                class: M(l(a).e("content")),
                innerHTML: x.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (_(), R("p", {
              key: 0,
              class: M(l(a).e("content"))
            }, K(x.message), 3))
          ]),
          x.showClose ? (_(), q(l(He), {
            key: 2,
            class: M(l(a).e("closeBtn")),
            onClick: Oe(T, ["stop"])
          }, {
            default: Z(() => [
              F(l(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 46, ["id"]), [
          [At, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var My = /* @__PURE__ */ _e(Ay, [["__file", "message.vue"]]);
let Ny = 1;
const Vl = (e) => {
  const t = !e || Be(e) || oo(e) || Ie(e) ? { message: e } : e, n = {
    ...Ve,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Be(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    pt(o) || (o = document.body), n.appendTo = o;
  }
  return jo(ct.grouping) && !n.grouping && (n.grouping = ct.grouping), pe(ct.duration) && n.duration === 3e3 && (n.duration = ct.duration), pe(ct.offset) && n.offset === 16 && (n.offset = ct.offset), jo(ct.showClose) && !n.showClose && (n.showClose = ct.showClose), n;
}, zy = (e) => {
  const t = ft.indexOf(e);
  if (t === -1)
    return;
  ft.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Fy = ({ appendTo: e, ...t }, n) => {
  const o = `message_${Ny++}`, a = t.onClose, s = document.createElement("div"), r = {
    ...t,
    id: o,
    onClose: () => {
      a?.(), zy(d);
    },
    onDestroy: () => {
      Bo(null, s);
    }
  }, i = F(My, r, Ie(r.message) || oo(r.message) ? {
    default: Ie(r.message) ? r.message : () => r.message
  } : null);
  i.appContext = n || Ln._context, Bo(i, s), e.appendChild(s.firstElementChild);
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
}, Ln = (e = {}, t) => {
  if (!Re)
    return { close: () => {
    } };
  const n = Vl(e);
  if (n.grouping && ft.length) {
    const a = ft.find(({ vnode: s }) => {
      var r;
      return ((r = s.props) == null ? void 0 : r.message) === n.message;
    });
    if (a)
      return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (pe(ct.max) && ft.length >= ct.max)
    return { close: () => {
    } };
  const o = Fy(n, t);
  return ft.push(o), o.handler;
};
Bl.forEach((e) => {
  Ln[e] = (t = {}, n) => {
    const o = Vl(t);
    return Ln({ ...o, type: e }, n);
  };
});
function By(e) {
  for (const t of ft)
    (!e || e === t.props.type) && t.handler.close();
}
Ln.closeAll = By;
Ln._context = null;
const Vy = nl(Ln, "$message"), Dl = [
  "success",
  "info",
  "warning",
  "error"
], Dy = ve({
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
    type: En
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
    values: [...Dl, ""],
    default: ""
  },
  zIndex: Number
}), Hy = {
  destroy: () => !0
}, jy = U({
  name: "ElNotification"
}), Wy = /* @__PURE__ */ U({
  ...jy,
  props: Dy,
  emits: Hy,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: a } = el("notification"), { nextZIndex: s, currentZIndex: r } = a, { Close: i } = vv, u = A(!1);
    let c;
    const d = y(() => {
      const S = n.type;
      return S && Uo[n.type] ? o.m(S) : "";
    }), f = y(() => n.type && Uo[n.type] || n.icon), p = y(() => n.position.endsWith("right") ? "right" : "left"), v = y(() => n.position.startsWith("top") ? "top" : "bottom"), m = y(() => {
      var S;
      return {
        [v.value]: `${n.offset}px`,
        zIndex: (S = n.zIndex) != null ? S : r.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: c } = Hi(() => {
        u.value && g();
      }, n.duration));
    }
    function k() {
      c?.();
    }
    function g() {
      u.value = !1;
    }
    function $({ code: S }) {
      S === ze.delete || S === ze.backspace ? k() : S === ze.esc ? u.value && g() : h();
    }
    return Pe(() => {
      h(), s(), u.value = !0;
    }), We(document, "keydown", $), t({
      visible: u,
      close: g
    }), (S, O) => (_(), q(An, {
      name: l(o).b("fade"),
      onBeforeLeave: S.onClose,
      onAfterLeave: (T) => S.$emit("destroy"),
      persisted: ""
    }, {
      default: Z(() => [
        qe(b("div", {
          id: S.id,
          class: M([l(o).b(), S.customClass, l(p)]),
          style: we(l(m)),
          role: "alert",
          onMouseenter: k,
          onMouseleave: h,
          onClick: S.onClick
        }, [
          l(f) ? (_(), q(l(He), {
            key: 0,
            class: M([l(o).e("icon"), l(d)])
          }, {
            default: Z(() => [
              (_(), q(at(l(f))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          b("div", {
            class: M(l(o).e("group"))
          }, [
            b("h2", {
              class: M(l(o).e("title")),
              textContent: K(S.title)
            }, null, 10, ["textContent"]),
            qe(b("div", {
              class: M(l(o).e("content")),
              style: we(S.title ? void 0 : { margin: 0 })
            }, [
              re(S.$slots, "default", {}, () => [
                S.dangerouslyUseHTMLString ? (_(), R($e, { key: 1 }, [
                  H(" Caution here, message could've been compromised, never use user's input as message "),
                  b("p", { innerHTML: S.message }, null, 8, ["innerHTML"])
                ], 2112)) : (_(), R("p", { key: 0 }, K(S.message), 1))
              ])
            ], 6), [
              [At, S.message]
            ]),
            S.showClose ? (_(), q(l(He), {
              key: 0,
              class: M(l(o).e("closeBtn")),
              onClick: Oe(g, ["stop"])
            }, {
              default: Z(() => [
                F(l(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : H("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [At, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Uy = /* @__PURE__ */ _e(Wy, [["__file", "notification.vue"]]);
const Yo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ja = 16;
let Ky = 1;
const xn = function(e = {}, t) {
  if (!Re)
    return { close: () => {
    } };
  (Be(e) || oo(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Yo[n].forEach(({ vm: d }) => {
    var f;
    o += (((f = d.el) == null ? void 0 : f.offsetHeight) || 0) + ja;
  }), o += ja;
  const a = `notification_${Ky++}`, s = e.onClose, r = {
    ...e,
    offset: o,
    id: a,
    onClose: () => {
      Gy(a, n, s);
    }
  };
  let i = document.body;
  pt(e.appendTo) ? i = e.appendTo : Be(e.appendTo) && (i = document.querySelector(e.appendTo)), pt(i) || (i = document.body);
  const u = document.createElement("div"), c = F(Uy, r, Ie(r.message) ? r.message : oo(r.message) ? () => r.message : null);
  return c.appContext = dt(t) ? xn._context : t, c.props.onDestroy = () => {
    Bo(null, u);
  }, Bo(c, u), Yo[n].push({ vm: c }), i.appendChild(u.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
Dl.forEach((e) => {
  xn[e] = (t = {}, n) => ((Be(t) || oo(t)) && (t = {
    message: t
  }), xn({ ...t, type: e }, n));
});
function Gy(e, t, n) {
  const o = Yo[t], a = o.findIndex(({ vm: c }) => {
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
      const { el: d, component: f } = o[c].vm, p = Number.parseInt(d.style[i], 10) - r - ja;
      f.props.offset = p;
    }
}
function Zy() {
  for (const e of Object.values(Yo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
xn.closeAll = Zy;
xn._context = null;
const Yy = nl(xn, "$notify");
function qy(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function Jy(e, t, n, o, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ao;
const ut = "__TAURI_TO_IPC_KEY__";
function Xy(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function L(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Hl(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Qy {
  get rid() {
    return qy(this, Ao, "f");
  }
  constructor(t) {
    Ao.set(this, void 0), Jy(this, Ao, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return L("plugin:resources|close", {
      rid: this.rid
    });
  }
}
Ao = /* @__PURE__ */ new WeakMap();
var et;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(et || (et = {}));
async function jl(e, t) {
  await L("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function yt(e, t, n) {
  var o;
  const a = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return L("plugin:event|listen", {
    event: e,
    target: a,
    handler: Xy(t)
  }).then((s) => async () => jl(e, s));
}
async function eb(e, t, n) {
  return yt(e, (o) => {
    jl(e, o.id), t(o);
  }, n);
}
async function Wl(e, t) {
  await L("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function tb(e, t, n) {
  await L("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Ul {
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
    return new eo(this.width * t, this.height * t);
  }
  [ut]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ut]();
  }
}
class eo {
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
    return new Ul(this.width / t, this.height / t);
  }
  [ut]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[ut]();
  }
}
class vn {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Ul ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof eo ? this.size : this.size.toPhysical(t);
  }
  [ut]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[ut]();
  }
}
class Kl {
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
    return new Wt(this.x * t, this.y * t);
  }
  [ut]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ut]();
  }
}
class Wt {
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
    return new Kl(this.x / t, this.y / t);
  }
  [ut]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[ut]();
  }
}
class Oo {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Kl ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Wt ? this.position : this.position.toPhysical(t);
  }
  [ut]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[ut]();
  }
}
class to extends Qy {
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
    return L("plugin:image|new", {
      rgba: qo(t),
      width: n,
      height: o
    }).then((a) => new to(a));
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
    return L("plugin:image|from_bytes", {
      bytes: qo(t)
    }).then((n) => new to(n));
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
    return L("plugin:image|from_path", { path: t }).then((n) => new to(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return L("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return L("plugin:image|size", { rid: this.rid });
  }
}
function qo(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof to ? e.rid : e;
}
var Wa;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Wa || (Wa = {}));
class nb {
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
var oi;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(oi || (oi = {}));
function Gl() {
  return new Zl(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Ta() {
  return L("plugin:window|get_all_windows").then((e) => e.map((t) => new Zl(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Ea = ["tauri://created", "tauri://error"];
class Zl {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || L("plugin:window|create", {
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
    return (n = (await Ta()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Gl();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Ta();
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
    for (const t of await Ta())
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
    } : yt(t, n, {
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
    } : eb(t, n, {
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
    if (Ea.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Wl(t, n);
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
    if (Ea.includes(n)) {
      for (const a of this.listeners[n] || [])
        a({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return tb(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Ea.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return L("plugin:window|scale_factor", {
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
    return L("plugin:window|inner_position", {
      label: this.label
    }).then((t) => new Wt(t));
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
    return L("plugin:window|outer_position", {
      label: this.label
    }).then((t) => new Wt(t));
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
    return L("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new eo(t));
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
    return L("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new eo(t));
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
    return L("plugin:window|is_fullscreen", {
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
    return L("plugin:window|is_minimized", {
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
    return L("plugin:window|is_maximized", {
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
    return L("plugin:window|is_focused", {
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
    return L("plugin:window|is_decorated", {
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
    return L("plugin:window|is_resizable", {
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
    return L("plugin:window|is_maximizable", {
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
    return L("plugin:window|is_minimizable", {
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
    return L("plugin:window|is_closable", {
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
    return L("plugin:window|is_visible", {
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
    return L("plugin:window|title", {
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
    return L("plugin:window|theme", {
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
    return L("plugin:window|is_always_on_top", {
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
    return L("plugin:window|center", {
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
    return t && (t === Wa.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), L("plugin:window|request_user_attention", {
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
    return L("plugin:window|set_resizable", {
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
    return L("plugin:window|set_enabled", {
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
    return L("plugin:window|is_enabled", {
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
    return L("plugin:window|set_maximizable", {
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
    return L("plugin:window|set_minimizable", {
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
    return L("plugin:window|set_closable", {
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
    return L("plugin:window|set_title", {
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
    return L("plugin:window|maximize", {
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
    return L("plugin:window|unmaximize", {
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
    return L("plugin:window|toggle_maximize", {
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
    return L("plugin:window|minimize", {
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
    return L("plugin:window|unminimize", {
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
    return L("plugin:window|show", {
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
    return L("plugin:window|hide", {
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
    return L("plugin:window|close", {
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
    return L("plugin:window|destroy", {
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
    return L("plugin:window|set_decorations", {
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
    return L("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return L("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return L("plugin:window|set_effects", {
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
    return L("plugin:window|set_always_on_top", {
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
    return L("plugin:window|set_always_on_bottom", {
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
    return L("plugin:window|set_content_protected", {
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
    return L("plugin:window|set_size", {
      label: this.label,
      value: t instanceof vn ? t : new vn(t)
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
    return L("plugin:window|set_min_size", {
      label: this.label,
      value: t instanceof vn ? t : t ? new vn(t) : null
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
    return L("plugin:window|set_max_size", {
      label: this.label,
      value: t instanceof vn ? t : t ? new vn(t) : null
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
    return L("plugin:window|set_size_constraints", {
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
    return L("plugin:window|set_position", {
      label: this.label,
      value: t instanceof Oo ? t : new Oo(t)
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
    return L("plugin:window|set_fullscreen", {
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
    return L("plugin:window|set_focus", {
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
    return L("plugin:window|set_icon", {
      label: this.label,
      value: qo(t)
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
    return L("plugin:window|set_skip_taskbar", {
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
    return L("plugin:window|set_cursor_grab", {
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
    return L("plugin:window|set_cursor_visible", {
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
    return L("plugin:window|set_cursor_icon", {
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
    return L("plugin:window|set_background_color", { color: t });
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
    return L("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof Oo ? t : new Oo(t)
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
    return L("plugin:window|set_ignore_cursor_events", {
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
    return L("plugin:window|start_dragging", {
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
    return L("plugin:window|start_resize_dragging", {
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
    return L("plugin:window|set_badge_count", {
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
    return L("plugin:window|set_badge_label", {
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
    return L("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? qo(t) : void 0
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
    return L("plugin:window|set_progress_bar", {
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
    return L("plugin:window|set_visible_on_all_workspaces", {
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
    return L("plugin:window|set_title_bar_style", {
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
    return L("plugin:window|set_theme", {
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
      n.payload = new eo(n.payload), t(n);
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
      n.payload = new Wt(n.payload), t(n);
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
      const o = new nb(n);
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
          position: new Wt(r.payload.position)
        }
      });
    }), o = await this.listen(et.DRAG_OVER, (r) => {
      t({
        ...r,
        payload: {
          type: "over",
          position: new Wt(r.payload.position)
        }
      });
    }), a = await this.listen(et.DRAG_DROP, (r) => {
      t({
        ...r,
        payload: {
          type: "drop",
          paths: r.payload.paths,
          position: new Wt(r.payload.position)
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
var ai;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ai || (ai = {}));
var ri;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(ri || (ri = {}));
var si;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(si || (si = {}));
const Ne = {
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
    o === "center" ? Vy({
      message: t,
      type: n,
      duration: a,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Yy({
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
}, ob = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1680942651462'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3789'%20data-darkreader-inline-fill=''%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M214.101333%20512c0-32.512%205.546667-63.701333%2015.36-92.928L57.173333%20290.218667A491.861333%20491.861333%200%200%200%204.693333%20512c0%2079.701333%2018.858667%20154.88%2052.394667%20221.610667l172.202667-129.066667A290.56%20290.56%200%200%201%20214.101333%20512'%20fill='%23FBBC05'%20p-id='3790'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23967002;'%3e%3c/path%3e%3cpath%20d='M516.693333%20216.192c72.106667%200%20137.258667%2025.002667%20188.458667%2065.962667L854.101333%20136.533333C763.349333%2059.178667%20646.997333%2011.392%20516.693333%2011.392c-202.325333%200-376.234667%20113.28-459.52%20278.826667l172.373334%20128.853333c39.68-118.016%20152.832-202.88%20287.146666-202.88'%20fill='%23EA4335'%20p-id='3791'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23a71d11;'%3e%3c/path%3e%3cpath%20d='M516.693333%20807.808c-134.357333%200-247.509333-84.864-287.232-202.88l-172.288%20128.853333c83.242667%20165.546667%20257.152%20278.826667%20459.52%20278.826667%20124.842667%200%20244.053333-43.392%20333.568-124.757333l-163.584-123.818667c-46.122667%2028.458667-104.234667%2043.776-170.026666%2043.776'%20fill='%2334A853'%20p-id='3792'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%232a8642;'%3e%3c/path%3e%3cpath%20d='M1005.397333%20512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696%2065.962667-51.072%20116.650667-104.533333%20149.632l163.541333%20123.818667c93.994667-85.418667%20155.136-212.650667%20155.136-375.850667'%20fill='%234285F4'%20p-id='3793'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%230943a2;'%3e%3c/path%3e%3c/svg%3e", ab = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='240px'%20height='240px'%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNla'%20x1='11.905'%20x2='17.941'%20y1='1.952'%20y2='40.401'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffc'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNla)'%20d='M17.572,37.076L20,35.619V10.603c0-1.632-0.796-3.161-2.133-4.096L12.36,2.652%20C11.366,1.956,10,2.667,10,3.881V32.5c0,0.22,0.02,0.555,0.033,0.772C10.369,36.867,14.382,38.99,17.572,37.076z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlb'%20x1='14.342'%20x2='34.121'%20y1='41.478'%20y2='25.575'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2333bef0'/%3e%3cstop%20offset='.159'%20stop-color='%2332b9f0'/%3e%3cstop%20offset='.341'%20stop-color='%232facf2'/%3e%3cstop%20offset='.533'%20stop-color='%232a95f4'/%3e%3cstop%20offset='.733'%20stop-color='%232475f6'/%3e%3cstop%20offset='.936'%20stop-color='%231b4cfa'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlb)'%20d='M32.682,27.904L20,35.5v0l-2.428,1.457c-3.191,1.915-7.203-0.209-7.54-3.804%20C10.372,38.922,15.145,43.5,21,43.5c1.963,0,3.888-0.536,5.568-1.551l6.834-4.126c0.817-0.493,1.522-1.075,2.15-1.707%20C37.906,33.415,36.739,28.669,32.682,27.904z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlc'%20x1='24.223'%20x2='45.699'%20y1='17.113'%20y2='38.588'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffd'/%3e%3cstop%20offset='1'%20stop-color='%231de9b6'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlc)'%20d='M33.636,19.568l-7.607-3.803c-1.234-0.617-2.576,0.618-2.064,1.899l1.755,5.886%20c0.499,1.248,1.479,2.242,2.719,2.758L32.5,28c4.057,0.766,5.352,5.251,3.052,8.117C40.399,31.24,40.088,22.794,33.636,19.568z'/%3e%3c/svg%3e", rb = "snippets-code:developer-mode", Yl = "snippets-code:frontend-diagnostics", sb = 240, Hn = "[REDACTED]", Mo = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Hn}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Hn}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Hn
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Hn}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Hn}`
), ql = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Mo(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Mo(
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
    return Mo(String(e));
  }
}, ib = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, lb = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Yl) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Rr = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(rb) === "true";
  } catch {
    return !1;
  }
}, ub = (e, t, n) => {
  if (!Rr() || typeof localStorage > "u") return;
  const o = lb();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: ib(),
    message: Mo(t),
    data: ql(n)
  });
  try {
    localStorage.setItem(
      Yl,
      JSON.stringify(o.slice(-sb))
    );
  } catch {
  }
}, cb = () => Rr(), db = (e) => e === "error" || Rr(), $o = (e, t, n) => {
  ub(e, t, n), db(e) && L("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : ql(n)
  }).catch(() => {
  });
}, V = {
  info: (e, t, ...n) => {
    $o("info", e, t);
  },
  error: (e, t) => {
    $o("error", e, t);
  },
  warn: (e, t) => {
    $o("warn", e, t);
  },
  debug: (e, t) => {
    cb() && $o("debug", e, t);
  }
};
function fb(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
}
function Pa(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, o = e.match(/[\u3040-\u30ff]/g), a = o ? o.length : 0, s = e.match(/[\uac00-\ud7af]/g), r = s ? s.length : 0, i = e.match(/[a-zA-Z]/g), u = i ? i.length : 0, d = n + a + r + u;
  return d === 0 ? "unknown" : a >= 3 && a > u && a / d >= 0.2 ? "ja" : r >= 3 && r > n && r > u && r / d >= 0.2 ? "ko" : n > u ? "zh" : u > n ? "en" : "unknown";
}
async function pb() {
  try {
    return await L("get_editor_settings");
  } catch (e) {
    throw new Error(`获取编辑器显示设置失败: ${e}`);
  }
}
async function ii(e) {
  try {
    await L("update_editor_settings", { settings: e });
  } catch (t) {
    throw new Error(`更新编辑器显示设置失败: ${t}`);
  }
}
const mb = fo("hotkeys", {
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
        const e = await L("get_hotkey_config_map");
        this.pluginHotkeys = e, this.searchHotkey = e.search || "", this.configHotkey = e.config || "", this.translateHotkey = e.translate || "", this.selectionTranslateHotkey = e.selection_translate || "", this.screenshotHotkey = e.screenshot || "", this.screenRecorderHotkey = e.screen_recorder || "", this.darkModeHotkey = e.dark_mode || "", this.wallpaperSwitcherHotkey = e.wallpaper_switcher || "";
      } catch (e) {
        V.error("获取快捷键配置失败:", e);
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
}), jn = fo("theme", {
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
      V.debug(`[主题][ThemeStore] 更新主题：newTheme=${e}`), this.theme = e, this.applyTheme();
    },
    /** 应用主题到 DOM，并同步 systemPrefersDark */
    applyTheme() {
      const e = document.documentElement, t = window.matchMedia("(prefers-color-scheme: dark)").matches;
      V.debug(
        `[主题][ThemeStore] 应用主题到 DOM：theme=${this.theme}, prefersDark=${t}`
      ), this.theme === "auto" && (this.systemPrefersDark = t), this.theme === "dark" || this.theme === "auto" && t ? e.classList.add("dark") : e.classList.remove("dark");
    },
    /**
     * 同步系统主题样式（仅在 auto 模式下生效，不修改 store.theme）
     * 用于响应操作系统主题变化
     */
    syncSystemThemeStyle(e) {
      V.debug(
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
        V.error("从 localStorage 同步主题失败:", n);
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
}), li = 960, ui = 768;
fo("layout", {
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
      return e.categoryPanelCollapsed || e.windowWidth < li;
    },
    /** 实际是否折叠片段列表面板：用户偏好 或 窗口过窄时强制折叠 */
    effectiveContentListCollapsed(e) {
      return e.contentListPanelCollapsed || e.windowWidth < ui;
    },
    /** 窗口是否足够宽以显示分类面板折叠按钮（点击后可实际展开） */
    isWideEnoughForCategoryPanel(e) {
      return e.windowWidth >= li;
    },
    /** 窗口是否足够宽以显示片段列表面板折叠按钮 */
    isWideEnoughForContentListPanel(e) {
      return e.windowWidth >= ui;
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
const vb = "https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/main/plugin-registry/marketplace/marketplace.json", hb = "https://ghfast.top/";
function gb(e) {
  return e.startsWith("https://github.com/") ? `${hb}${e}` : e;
}
async function yb() {
  return await L("get_plugin_states");
}
async function bb() {
  return await L("get_installed_plugin_manifests");
}
async function wb(e, t = !1) {
  return await L("install_local_plugin_package", {
    sourcePath: e,
    overwrite: t
  });
}
async function Jl(e, t = !1, n, o, a) {
  return await L("install_plugin_package_from_url", {
    expectedSizeBytes: o,
    packageUrl: e,
    packageSubdir: n,
    overwrite: t,
    mirrorUrls: a ?? []
  });
}
const _b = (e) => {
  try {
    const t = new URL(e);
    return t.searchParams.set("_sc_refresh", `${Date.now()}`), t.toString();
  } catch {
    return e;
  }
};
async function Sb(e) {
  return await L("fetch_plugin_marketplace", {
    marketplaceUrl: _b(e)
  });
}
async function kb(e) {
  await L("uninstall_local_plugin_package", { pluginId: e });
}
async function Cb(e, t) {
  await L("set_plugin_enabled", { pluginId: e, enabled: t });
}
async function Tb() {
  return await L("get_rapidocr_resource_status");
}
async function Eb() {
  return await L("screen_recorder_get_ffmpeg_status");
}
async function Ar(e, t) {
  return await L("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
async function Oa() {
  await L("install_translation_offline_runtime_resources");
}
const Pb = (e, t, n, o) => ({
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
  resourceHintKey: e.resources?.hintKey,
  resourceFor: e.resourceFor
}), Ut = (e) => typeof e == "object" && e !== null, Ob = (e) => Ut(e) && "manifest" in e && Ut(e.manifest) ? {
  manifest: e.manifest,
  packagePath: typeof e.packagePath == "string" ? e.packagePath : void 0,
  installedAt: typeof e.installedAt == "string" ? e.installedAt : void 0
} : { manifest: e }, $b = (e) => typeof e == "string" && ["capture", "automation", "search", "sync", "editor", "appearance"].includes(e), Ib = (e) => {
  if (!Ut(e) || e.schemaVersion !== 1 || typeof e.id != "string" || !e.id.trim() || typeof e.version != "string" || !e.version.trim() || e.kind !== "local" || !Ut(e.name) || typeof e.name.i18nKey != "string" || typeof e.name.fallback != "string" || !Ut(e.description) || typeof e.description.i18nKey != "string" || typeof e.description.fallback != "string" || !$b(e.category) || typeof e.enabledByDefault != "boolean") return null;
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
    capabilities: Ut(e.capabilities) ? e.capabilities : void 0,
    resources: Ut(e.resources) ? e.resources : void 0,
    entry: Ut(e.entry) ? e.entry : void 0,
    permissions: Array.isArray(e.permissions) ? e.permissions.filter((o) => typeof o == "string") : void 0,
    dependencies: Array.isArray(e.dependencies) ? e.dependencies.filter((o) => typeof o == "string") : void 0,
    resourceFor: typeof e.resourceFor == "string" ? e.resourceFor : void 0,
    compatibleAppVersion: typeof e.compatibleAppVersion == "string" ? e.compatibleAppVersion : void 0,
    minAppVersion: typeof e.minAppVersion == "string" ? e.minAppVersion : void 0,
    repository: typeof e.repository == "string" ? e.repository : void 0,
    releaseUrl: typeof e.releaseUrl == "string" ? e.releaseUrl : void 0
  };
}, Lb = (e) => e.map((t) => {
  const { manifest: n, packagePath: o, installedAt: a } = Ob(t), s = Ib(n);
  if (!s) return null;
  const r = {
    manifest: s,
    packagePath: o ?? ""
  };
  return a && (r.installedAt = a), r;
}).filter((t) => t !== null), Xl = (e = []) => {
  const n = [
    ...Lb(e).map((a) => Pb(
      a.manifest,
      "local",
      a.packagePath || void 0,
      a.installedAt
    )).sort(xb)
  ], o = /* @__PURE__ */ new Map();
  for (const a of n)
    o.has(a.id) || o.set(a.id, a);
  return Array.from(o.values());
}, ci = (e) => {
  const t = e.installedAt ? Date.parse(e.installedAt) : NaN;
  return Number.isFinite(t) ? t : 0;
}, xb = (e, t) => {
  const n = ci(t) - ci(e);
  return n !== 0 ? n : String(e.id).localeCompare(String(t.id));
}, Rb = Xl(), Jo = Rb, Ab = Jo.map((e) => e.id), Ql = Jo.reduce((e, t) => (e[t.id] = t.enabledByDefault, e), {}), Mb = (e) => Ab.includes(e);
async function Nb() {
  return await L("local_ai_get_runtime_status");
}
const yn = [], bn = [
  { id: "attachment", labelKey: "settings.attachment.menu", icon: tc }
], Ua = {
  attachment: Xa(() => Promise.resolve().then(() => h_))
}, wn = [], No = [], _n = [], eu = (e) => e.manifest.permissions ?? [], zb = (e, t) => {
  const n = eu(e);
  return n.includes("command:*") || n.includes(`command:${t}`);
}, Fb = (e, t) => {
  const n = eu(e);
  return n.includes("backend:*") || n.includes(`backend:${t}`);
}, Bb = (e, t) => {
  if (!zb(e, t))
    throw new Error(`插件 ${e.id} 没有调用命令 ${t} 的权限`);
}, Vb = (e, t) => {
  if (!Fb(e, t))
    throw new Error(`插件 ${e.id} 没有调用后端命令 ${t} 的权限`);
}, Ka = [], Ga = [], Za = [], zo = /* @__PURE__ */ new Set(), Xo = /* @__PURE__ */ new Map(), Qo = /* @__PURE__ */ new Map(), di = /* @__PURE__ */ new Map(), Db = /* @__PURE__ */ new Set(), fi = /* @__PURE__ */ new Map(), Rn = /* @__PURE__ */ new Map(), ea = /* @__PURE__ */ new Set(), ta = /* @__PURE__ */ new Set(), ga = (e) => e.replace(/^[\\/]+|[\\/]+$/g, ""), Hb = (e) => !!e && !e.includes("://") && !e.startsWith("/") && !/^[a-zA-Z]:[\\/]/.test(e) && !ga(e).split(/[\\/]+/).includes(".."), jb = (e, t) => {
  if (!e.packagePath)
    throw new Error(`插件 ${e.id} 缺少 packagePath`);
  if (!Hb(t))
    throw new Error(
      `插件 ${e.id} 使用了不安全的资源路径: ${t}`
    );
  return `${e.packagePath.replace(/[\\/]+$/g, "")}/${ga(t)}`;
}, zn = (e, t) => Hl(jb(e, t)), Wb = (e) => {
  const t = ga(e).split(/[\\/]+/);
  return t.pop(), t.join("/");
}, tu = (e) => {
  const t = /^([^?#]*)([?#].*)?$/.exec(e);
  return {
    path: t?.[1] ?? e,
    suffix: t?.[2] ?? ""
  };
}, Ub = (e, t) => {
  const { path: n } = tu(t), o = [
    ...ga(e).split(/[\\/]+/),
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
}, Kb = (e, t, n) => {
  const { suffix: o } = tu(n), a = Ub(
    Wb(t),
    n
  );
  return `${zn(e, a)}${o}`;
}, Gb = [
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
], Zb = {
  vue: {
    moduleKey: "vue",
    runtime: Cu,
    exportNames: Gb
  },
  pinia: {
    moduleKey: "pinia",
    runtime: Uu
  },
  "vue-router": {
    moduleKey: "vueRouter",
    runtime: Ku
  },
  "vue-i18n": {
    moduleKey: "vueI18n",
    runtime: Wu
  }
}, Yb = /^[A-Za-z_$][\w$]*$/, qb = (e, t, n, o) => {
  const s = (o ?? Object.keys(n)).filter(
    (r) => r !== "default" && r !== "__esModule" && Yb.test(r)
  ).map((r) => `export const ${r} = Runtime[${JSON.stringify(r)}];`).join(`
`);
  return [
    `const Runtime = globalThis.${e}[${JSON.stringify(t)}];`,
    "export default Runtime;",
    s
  ].join(`
`);
}, Jb = (e) => {
  const t = Zb[e];
  if (!t) return null;
  const n = di.get(e);
  if (n) return n;
  const o = "__SNIPPETS_CODE_PLUGIN_SHARED__", a = globalThis;
  a[o] = {
    ...a[o] ?? {},
    [t.moduleKey]: t.runtime
  };
  const s = qb(
    o,
    t.moduleKey,
    t.runtime,
    t.exportNames
  ), r = URL.createObjectURL(
    new Blob([s], { type: "text/javascript" })
  );
  return di.set(e, r), r;
}, Xb = (e, t, n) => {
  const o = (a) => {
    const s = Jb(a);
    return s || (!a.startsWith("./") && !a.startsWith("../") ? a : Kb(e, t, a));
  };
  return n.replace(
    /((?:import|export)\s+(?:[^'"]*?\s+from\s*)?)(['"])([^'"]+)\2/g,
    (a, s, r, i) => `${s}${r}${o(i)}${r}`
  ).replace(
    /(import\s*\(\s*)(['"])([^'"]+)\2(\s*\))/g,
    (a, s, r, i, u) => `${s}${r}${o(i)}${r}${u}`
  );
}, Qb = (e, t) => {
  const n = Qo.get(e) ?? [];
  n.push(t), Qo.set(e, n);
}, ew = (e) => {
  (Qo.get(e) ?? []).forEach((n) => URL.revokeObjectURL(n)), Qo.delete(e);
}, tw = async (e, t) => {
  const n = zn(e, t), o = await fetch(n);
  if (!o.ok)
    throw new Error(
      `插件 ${e.id} 前端入口读取失败: ${o.status} ${o.statusText}`
    );
  const a = await o.text(), s = Xb(
    e,
    t,
    a
  ), r = URL.createObjectURL(
    new Blob([s], { type: "text/javascript" })
  );
  return Qb(String(e.id), r), await import(
    /* @vite-ignore */
    r
  );
}, nw = (e) => async (t, n, o) => (Bb(e, t), L(t, n, o)), ow = (e) => async (t, n = null) => (Vb(e, t), await L("invoke_plugin_backend", {
  pluginId: e.id,
  command: t,
  payload: n
})), Fo = (e, t) => {
  const n = Rn.get(e) ?? /* @__PURE__ */ new Set();
  n.add(t), Rn.set(e, n);
}, aw = (e, t) => {
  const n = Rn.get(e);
  n && (n.delete(t), n.size === 0 && Rn.delete(e));
}, rw = (e) => {
  const t = Array.from(Rn.get(e) ?? []);
  Rn.delete(e);
  for (const n of t)
    try {
      n();
    } catch (o) {
      V.warn(`[PluginRuntime] 清理插件运行时失败: ${e}`, o);
    }
}, sw = (e) => async (...t) => {
  const n = String(e.id), o = await yt(...t);
  let a = !0;
  const s = () => {
    a && (a = !1, aw(n, s), o());
  };
  return Fo(n, s), s;
}, $a = (e, t, n) => {
  if (t) return Dr(t);
  if (!n)
    throw new Error(
      `插件 ${e.id} 注册组件时缺少 component 或 componentUrl`
    );
  return Dr(
    Xa(
      () => import(
        /* @vite-ignore */
        zn(e, n)
      )
    )
  );
}, iw = (e, t, n) => {
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
    zn(e, n)
  );
}, lw = (e, t) => {
  if (e === "config") {
    Ka.push(t);
    return;
  }
  if (e === "window") {
    Za.push(t);
    return;
  }
  Ga.push(t);
}, Ia = (e, t) => {
  for (let n = e.length - 1; n >= 0; n -= 1)
    e[n].meta?.pluginId === t && e.splice(n, 1);
}, La = (e, t, n) => {
  const o = e[t] ?? [];
  o.includes(n) || (e[t] = [...o, n]), e.manifest.capabilities = {
    ...e.manifest.capabilities,
    [t]: e[t]
  };
}, na = (e, t) => `${e}:${t}`, uw = (e) => ({
  pluginId: String(e.id),
  packagePath: e.packagePath ?? "",
  manifest: e.manifest,
  resolveAssetUrl: (t) => zn(e, t),
  api: {
    invoke: nw(e),
    invokeBackend: ow(e),
    listen: sw(e),
    emit: Wl
  },
  ui: {
    h: ki,
    defineComponent: U
  },
  storage: {
    get: async (t) => await L("get_local_plugin_data", {
      pluginId: e.id,
      key: t
    }) ?? null,
    set: async (t, n) => {
      await L("set_local_plugin_data", {
        pluginId: e.id,
        key: t,
        value: n
      });
    },
    delete: async (t) => {
      await L("delete_local_plugin_data", {
        pluginId: e.id,
        key: t
      });
    }
  },
  registerRoute(t) {
    const n = t.target ?? "layout";
    La(e, "routeNames", t.name);
    const o = {
      path: t.path,
      name: t.name,
      component: iw(e, t.component, t.componentUrl),
      meta: {
        ...t.meta,
        pluginId: e.id
      }
    };
    lw(n, o);
  },
  registerSettingsTab(t) {
    const n = t.labelKey ?? `plugins.${e.id}.${t.id}`, o = {
      id: t.id,
      pluginId: String(e.id),
      labelKey: n,
      label: t.label,
      icon: t.icon ?? oc
    }, a = na(String(e.id), t.id), s = bn.findIndex(
      (i) => i.id === t.id && i.pluginId === String(e.id)
    ), r = $a(e, t.component, t.componentUrl);
    s === -1 ? (bn.push(o), Ua[t.id] = r, ea.add(a)) : ea.has(a) && (bn[s] = o, Ua[t.id] = r), La(e, "settingsTabs", t.id);
  },
  registerSearchProvider(t) {
    const n = {
      pluginId: e.id,
      source: t.source,
      search: t.search
    }, o = yn.findIndex(
      (a) => a.pluginId === e.id && a.source === t.source
    );
    o === -1 ? yn.push(n) : yn[o] = n, La(e, "searchSources", t.source);
  },
  registerTitlebarAction(t) {
    const n = na(
      String(e.id),
      t.id
    ), o = wn.findIndex(
      (s) => s.id === t.id && s.pluginId === e.id
    ), a = {
      id: t.id,
      pluginId: e.id,
      component: $a(e, t.component, t.componentUrl)
    };
    o === -1 ? (wn.push(a), ta.add(n)) : ta.has(n) && (wn[o] = a);
  },
  registerWindowShortcut(t) {
    No.push({
      label: t.label,
      pluginId: e.id,
      closeCommandLabel: t.closeCommandLabel
    });
  },
  registerHostComponent(t) {
    const n = t.target ?? "config", o = {
      id: t.id,
      pluginId: e.id,
      target: n,
      component: $a(
        e,
        t.component,
        t.componentUrl
      )
    }, a = _n.findIndex(
      (s) => s.pluginId === e.id && s.id === t.id && s.target === n
    );
    a === -1 ? _n.push(o) : _n[a] = o;
  }
}), cw = async (e, t) => {
  const n = t.activate ?? (typeof t.default == "function" ? t.default : t.default?.activate);
  if (typeof n != "function")
    throw new Error(`插件 ${e.id} 的前端入口没有导出 activate(context)`);
  const o = await n(uw(e)), a = String(e.id);
  if (typeof o == "function") {
    Fo(a, o);
    return;
  }
  typeof o?.deactivate == "function" && Fo(a, o.deactivate), typeof o?.dispose == "function" && Fo(a, o.dispose);
}, dw = (e) => {
  if (Xo.has(String(e.id))) return;
  const t = e.manifest.entry?.styles ?? [];
  if (!t.length) return;
  const n = t.map((o) => {
    const a = document.createElement("link");
    return a.rel = "stylesheet", a.href = zn(e, o), a.dataset.pluginId = String(e.id), document.head.appendChild(a), a;
  });
  Xo.set(String(e.id), n);
}, fw = (e) => {
  (Xo.get(e) ?? []).forEach((n) => n.remove()), Xo.delete(e);
}, pw = [
  "routeNames",
  "settingsTabs",
  "searchSources",
  "titlebarActions",
  "windows"
], mw = (e) => {
  if (e.resourceFor || e.manifest.resourceFor || e.manifest.resources)
    return !1;
  const t = e.manifest.capabilities;
  return pw.some((n) => {
    const o = t?.[n];
    return Array.isArray(o) && o.length > 0;
  });
}, vw = async (e, t) => {
  for (const n of e)
    if (n.source === "local" && t(String(n.id)) && !zo.has(String(n.id))) {
      if (n.manifest.entry?.frontend) {
        try {
          dw(n);
          const o = await tw(
            n,
            n.manifest.entry.frontend
          );
          await cw(n, o), zo.add(String(n.id));
        } catch (o) {
          Ya(String(n.id)), V.warn(`[PluginRuntime] 加载本地插件失败: ${n.id}`, o);
        }
        continue;
      }
      zo.add(String(n.id)), mw(n) && V.warn(`[PluginRuntime] 本地插件缺少前端入口: ${n.id}`);
    }
};
function Ya(e) {
  rw(e), zo.delete(e), fw(e), ew(e);
  for (const [
    t,
    n
  ] of fi.entries())
    [
      ...Ka,
      ...Ga,
      ...Za
    ].some(
      (a) => a.name === t && a.meta?.pluginId === e
    ) && (n(), Db.delete(t), fi.delete(t));
  Ia(Ka, e), Ia(Ga, e), Ia(Za, e);
  for (let t = bn.length - 1; t >= 0; t -= 1) {
    const n = bn[t], o = na(e, n.id);
    n.pluginId === e && ea.has(o) && (delete Ua[n.id], bn.splice(t, 1), ea.delete(o));
  }
  for (let t = yn.length - 1; t >= 0; t -= 1)
    yn[t].pluginId === e && yn.splice(t, 1);
  for (let t = wn.length - 1; t >= 0; t -= 1) {
    const n = wn[t], o = na(e, n.id);
    n.pluginId === e && ta.has(o) && (wn.splice(t, 1), ta.delete(o));
  }
  for (let t = No.length - 1; t >= 0; t -= 1)
    No[t].pluginId === e && No.splice(t, 1);
  for (let t = _n.length - 1; t >= 0; t -= 1)
    _n[t].pluginId === e && _n.splice(t, 1);
}
let Wn = null, Un = null, Kn = null;
const pi = (e, t) => {
  globalThis.setTimeout(e, t);
}, mi = (e) => e.replace(/^v/i, "").split(".").map((t) => Number.parseInt(t, 10)).map((t) => Number.isFinite(t) ? t : 0), hw = (e, t) => {
  const n = mi(e), o = mi(t), a = Math.max(n.length, o.length);
  for (let s = 0; s < a; s += 1) {
    const r = (n[s] ?? 0) - (o[s] ?? 0);
    if (r !== 0) return r;
  }
  return 0;
}, vi = (e) => Array.isArray(e.dependencies) ? e.dependencies.filter(
  (t) => typeof t == "string" && !!t.trim()
) : [], hi = (e) => JSON.stringify({
  id: e.id,
  source: e.source,
  packagePath: e.packagePath,
  installedAt: e.installedAt,
  version: e.manifest.version,
  entry: e.manifest.entry,
  capabilities: e.manifest.capabilities,
  dependencies: e.manifest.dependencies,
  resourceFor: e.resourceFor
}), gw = (e, t) => hi(e) !== hi(t), gi = (e, t) => {
  const n = e.reduce(
    (o, a) => (o[a.id] = a.enabledByDefault, o),
    { ...Ql }
  );
  if (!t)
    return n;
  for (const o of e) {
    const a = t[o.id];
    typeof a == "boolean" && (n[o.id] = a);
  }
  return n;
}, yw = fo("plugins", {
  state: () => ({
    enabled: { ...Ql },
    installedPlugins: Jo,
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
      if (Wn) {
        await Wn;
        return;
      }
      Wn = (async () => {
        try {
          V.info("[PluginStore] initialize start"), await this.reconcileInstalledPlugins("initialize", [], {
            loadRuntimeEntries: !1,
            refreshResourceStatus: !1
          }), V.info("[PluginStore] initialize complete", {
            plugins: this.installedPlugins.map((e) => ({
              id: e.id,
              source: e.source,
              enabled: this.isEnabled(e.id),
              packagePath: e.packagePath
            }))
          });
        } catch (e) {
          V.warn("[PluginStore] 加载插件状态失败，使用默认状态", e), this.installedPlugins = Jo, this.enabled = gi(
            this.installedPlugins,
            this.enabled
          );
        } finally {
          this.initialized = !0, await this.ensureStateListener();
        }
        pi(
          () => this.loadEnabledPluginEntriesInBackground(),
          600
        ), pi(
          () => this.refreshPluginResourceStatusInBackground(),
          1200
        );
      })();
      try {
        await Wn;
      } finally {
        Wn = null;
      }
    },
    async refreshInstalledPlugins() {
      await this.reconcileInstalledPlugins("manual-refresh");
    },
    async reconcileInstalledPlugins(e, t = [], n = {}) {
      const {
        refreshResourceStatus: o = !0,
        loadRuntimeEntries: a = !0
      } = n;
      V.info("[PluginStore] reconcile installed plugins start", {
        reason: e
      });
      const s = this.installedPlugins, r = new Map(
        s.map((v) => [String(v.id), v])
      ), i = await bb(), u = Xl(i), c = new Map(
        u.map((v) => [String(v.id), v])
      ), d = new Set(t);
      for (const v of s) {
        if (v.source !== "local") continue;
        const m = String(v.id), h = c.get(m);
        (!h || gw(v, h)) && d.add(m);
      }
      this.installedPlugins = u;
      const f = await yb(), p = Object.fromEntries(
        Object.entries(this.enabled).filter(
          ([v]) => r.has(v) && c.has(v)
        )
      );
      this.enabled = gi(this.installedPlugins, {
        ...p,
        ...f
      }), this.installedPlugins.filter(
        (v) => v.source === "local" && !this.isEnabled(v.id)
      ).forEach((v) => d.add(String(v.id))), d.forEach(
        (v) => Ya(v)
      ), o && await this.refreshPluginResourceStatus(), a && await this.loadEnabledPluginEntries(), V.info("[PluginStore] reconcile installed plugins complete", {
        reason: e,
        resetPluginIds: Array.from(d),
        plugins: this.installedPlugins.map((v) => ({
          id: v.id,
          source: v.source,
          enabled: this.isEnabled(v.id),
          hotkeys: v.hotkeys,
          packagePath: v.packagePath
        }))
      });
    },
    async installFromPath(e, t = !1) {
      V.info("[PluginStore] install from path start", {
        sourcePath: e,
        overwrite: t
      });
      const n = await wb(
        e,
        t
      );
      V.info("[PluginStore] install from path complete", {
        pluginId: n.manifest.id,
        packagePath: n.packagePath
      }), await this.reconcileInstalledPlugins("install-path", [
        String(n.manifest.id)
      ]);
    },
    async installFromUrl(e, t = !1, n, o, a) {
      V.info("[PluginStore] install from url start", {
        packageUrl: e,
        overwrite: t,
        packageSubdir: n,
        expectedSizeBytes: o,
        mirrorCount: a?.length ?? 0
      });
      const s = await Jl(
        e,
        t,
        n,
        o,
        a
      );
      V.info("[PluginStore] install from url complete", {
        pluginId: s.manifest.id,
        packagePath: s.packagePath,
        packageUrl: e
      }), await this.reconcileInstalledPlugins("install-url", [
        String(s.manifest.id)
      ]);
    },
    async uninstall(e) {
      V.info("[PluginStore] uninstall start", { pluginId: e }), await kb(e), await this.reconcileInstalledPlugins("uninstall", [String(e)]), V.info("[PluginStore] uninstall complete", { pluginId: e });
    },
    async ensureStateListener() {
      if (!this.stateUnlisten)
        try {
          this.stateUnlisten = await yt(
            "plugin-state-changed",
            async (e) => {
              const { pluginId: t, enabled: n } = e.payload;
              (this.installedPlugins.some((o) => o.id === t) || Mb(t)) && (this.enabled[t] = n), await this.reconcileInstalledPlugins(
                "backend-state-event",
                n ? [] : [t]
              );
            }
          );
        } catch (e) {
          V.warn("[PluginStore] 监听插件状态变化失败", e);
        }
    },
    async setEnabled(e, t) {
      const n = this.enabled[e];
      this.enabled[e] = t;
      try {
        V.info("[PluginStore] set enabled start", { pluginId: e, enabled: t }), t || (Ya(String(e)), this.runtimeRevision += 1), await Cb(e, t), await this.reconcileInstalledPlugins(
          "set-enabled",
          t ? [] : [String(e)]
        ), V.info("[PluginStore] set enabled complete", {
          pluginId: e,
          enabled: t
        });
      } catch (o) {
        throw typeof n == "boolean" ? this.enabled[e] = n : delete this.enabled[e], n && await this.loadEnabledPluginEntries(), V.error("[PluginStore] 保存插件状态失败", {
          pluginId: e,
          enabled: t,
          error: o
        }), o;
      }
    },
    async loadEnabledPluginEntries() {
      if (Un) {
        await Un;
        return;
      }
      Un = (async () => {
        await vw(
          this.installedPlugins,
          (e) => this.isEnabled(e)
        ), this.runtimeRevision += 1;
      })();
      try {
        await Un;
      } finally {
        Un = null;
      }
    },
    loadEnabledPluginEntriesInBackground() {
      this.loadEnabledPluginEntries().catch((e) => {
        V.warn("[PluginStore] 后台加载插件前端入口失败", e);
      });
    },
    shouldInstallMarketplaceItem(e) {
      const t = this.installedPlugins.find(
        (n) => n.id === e.id
      );
      return !t || t.source === "local" && hw(e.version, t.manifest.version) > 0;
    },
    async installMarketplaceItemWithDependencies(e, t, n = {}, o = /* @__PURE__ */ new Set()) {
      if (o.has(e.id))
        throw new Error(
          n.formatCircularDependencyError?.(e) ?? `Circular plugin dependency: ${e.id}`
        );
      o.add(e.id);
      try {
        for (const a of vi(e)) {
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
          const a = e.mirrorUrls && e.mirrorUrls.length > 0 ? e.mirrorUrls : [gb(e.packageUrl)];
          V.info("[PluginStore] marketplace lifecycle install package", {
            pluginId: e.id,
            packageUrl: e.packageUrl,
            packageSubdir: e.packageSubdir,
            dependencies: vi(e),
            mirrorCount: a.length
          }), await this.installFromUrl(
            e.packageUrl,
            !0,
            e.packageSubdir,
            e.sizeBytes,
            a
          );
        }
      } finally {
        o.delete(e.id);
      }
    },
    async refreshPluginResourceStatus() {
      if (Kn) {
        await Kn;
        return;
      }
      Kn = (async () => {
        const e = {}, t = (n) => this.installedPlugins.some(
          (o) => o.id === n || o.resourceFor === n
        );
        if (t("screenshot"))
          try {
            const n = await Tb();
            e[n.pluginId] = n;
          } catch (n) {
            V.warn("[PluginStore] 获取截图插件资源状态失败", n);
          }
        if (t("translation")) {
          const n = "resources/transformers/transformers.min.js", o = ["translation-offline-runtime", "translation"];
          let a = null, s;
          for (const r of o)
            if (a = await Ar(
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
            const n = await Eb();
            e["screen-recorder"] = {
              pluginId: "screen-recorder",
              resourceId: "ffmpeg",
              available: n.available,
              source: n.source,
              path: n.path,
              searchedPaths: n.searchedPaths
            };
          } catch (n) {
            V.warn("[PluginStore] 获取录屏 FFmpeg 资源状态失败", n);
          }
        if (t("local-ai") && this.isEnabled("local-ai"))
          try {
            const n = await Nb();
            e["local-ai"] = {
              pluginId: "local-ai",
              resourceId: "llama-runtime",
              available: n.available,
              source: n.source,
              path: n.path,
              searchedPaths: n.searchedPaths
            };
          } catch (n) {
            V.warn("[PluginStore] 获取本地 AI llama.cpp 资源状态失败", n);
          }
        this.resourceStatusByPluginId = e;
      })();
      try {
        await Kn;
      } finally {
        Kn = null;
      }
    },
    refreshPluginResourceStatusInBackground() {
      this.refreshPluginResourceStatus().catch((e) => {
        V.warn("[PluginStore] 后台刷新插件资源状态失败", e);
      });
    }
  },
  persist: {
    pick: ["enabled"]
  }
}), bw = fo("configuration", {
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
    dbPath: null,
    // 数据库路径
    dbBackup: "A",
    // 数据库备份
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
    editorLineNumbers: !0,
    // 富文本编辑器是否显示行号
    editorLineHeight: 1.6
    // 编辑器行距
  }),
  getters: {
    /** 当前实际是否为深色模式（委托给 useThemeStore） */
    effectiveDark() {
      return jn().effectiveDark;
    }
  },
  actions: {
    // 初始化配置
    async initialize() {
      try {
        this.dbPath = await L("get_db_path") || "";
      } catch (n) {
        V.error("获取数据库路径失败:", n);
      }
      const e = mb();
      await e.initialize(), this.searchHotkey = e.searchHotkey, this.configHotkey = e.configHotkey, this.translateHotkey = e.translateHotkey, this.selectionTranslateHotkey = e.selectionTranslateHotkey, this.screenshotHotkey = e.screenshotHotkey, this.screenRecorderHotkey = e.screenRecorderHotkey, this.darkModeHotkey = e.darkModeHotkey, this.wallpaperSwitcherHotkey = e.wallpaperSwitcherHotkey, this.pluginHotkeys = e.pluginHotkeys;
      const t = jn();
      this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
      try {
        this.autoUpdateCheck = await L("get_auto_update_check");
      } catch (n) {
        V.error("获取自动检查失败:", n);
      }
      try {
        this.autoHideOnBlur = await L("get_auto_hide_on_blur");
      } catch (n) {
        V.error("获取自动失焦隐藏设置:", n);
      }
      try {
        const n = await L("get_language");
        n && (n === "zh-CN" || n === "en-US") && (this.language = n);
      } catch (n) {
        V.error("获取语言设置失败:", n);
      }
      try {
        const n = await pb();
        this.editorLineNumbers = n.lineNumbers, this.editorLineHeight = n.lineHeight || 1.6;
      } catch (n) {
        V.error("获取编辑器显示设置失败:", n);
      }
    },
    async updateEditorLineNumbers(e) {
      const t = this.editorLineNumbers;
      this.editorLineNumbers = e;
      try {
        await ii({
          lineNumbers: e,
          lineHeight: this.editorLineHeight
        });
      } catch (n) {
        throw this.editorLineNumbers = t, V.error("更新编辑器行号设置失败:", n), n;
      }
    },
    async updateEditorLineHeight(e) {
      const t = this.editorLineHeight, n = Math.min(2, Math.max(1.2, Number(e) || 1.6));
      this.editorLineHeight = n;
      try {
        await ii({
          lineNumbers: this.editorLineNumbers,
          lineHeight: n
        });
      } catch (o) {
        throw this.editorLineHeight = t, V.error("更新编辑器行距设置失败:", o), o;
      }
    },
    // 更新主题并立即应用（委托给 useThemeStore）
    updateTheme(e) {
      const t = jn();
      t.updateTheme(e), this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
    },
    // 应用主题到DOM（委托给 useThemeStore）
    applyTheme() {
      const e = jn();
      e.theme = this.theme, e.applyTheme(), this.systemPrefersDark = e.systemPrefersDark;
    },
    // 同步系统主题样式（委托给 useThemeStore）
    syncSystemThemeStyle(e) {
      const t = jn();
      t.syncSystemThemeStyle(e), this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
    }
  },
  persist: {
    pick: ["theme", "dbPath"]
  }
}), ww = "resources/transformers/transformers.min.js", _w = ["translation-offline-runtime", "translation"], Sw = "https://huggingface.co/", kw = "{model}/resolve/{revision}/", Cw = "/__snippets_code_disabled_transformers_local_models__/", Tw = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let Gn = null;
const Ew = (e) => {
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
}, Pw = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, o = Ew(n);
  return o.index >= 0 ? n.slice(0, o.index + o.length) : n;
}, Ow = (e) => {
  const t = Pw(e);
  return Object.fromEntries(
    Tw.map((n) => [n, `${t}${n}`])
  );
}, nu = (e, t) => {
  var n, o;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = Sw, e.remotePathTemplate = kw, e.allowLocalModels = !1, e.localModelPath = Cw, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (o = e.backends.onnx).wasm ?? (o.wasm = {}), e.backends.onnx.wasm.wasmPaths = Ow(t), e.backends.onnx.wasm.numThreads = 1);
};
async function $w() {
  return Gn || (Gn = (async () => {
    for (const e of _w) {
      const t = await Ar(e, ww);
      if (!t) continue;
      const n = Hl(t), o = await import(
        /* @vite-ignore */
        n
      );
      return nu(o.env, n), V.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
        wasmPaths: o.env.backends?.onnx?.wasm?.wasmPaths,
        numThreads: o.env.backends?.onnx?.wasm?.numThreads,
        remoteHost: o.env.remoteHost,
        remotePathTemplate: o.env.remotePathTemplate,
        allowLocalModels: o.env.allowLocalModels,
        localModelPath: o.env.localModelPath
      }), o;
    }
    throw new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((e) => {
    throw Gn = null, e;
  }), Gn);
}
let It = null, no = !1, gn = null, Sn = null, qa = null;
const Iw = "Xenova/opus-mt-en-zh", Lw = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], xw = 3e5;
function yi(e) {
  qa = e;
}
function Rw() {
  return Lw;
}
function Aw(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (o, a) => setTimeout(() => a(new Error(n)), t)
    )
  ]);
}
async function ou() {
  return It || gn || (no = !0, V.info("[离线翻译] 正在加载翻译模型..."), gn = (async () => {
    try {
      const { pipeline: e, env: t } = await $w();
      nu(t);
      let n = "";
      const o = e("translation", Iw, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (s) => {
          s.status === "done" && s.file && s.file !== n && (n = s.file, V.info(`[离线翻译] 已加载: ${s.file}`)), qa && qa({
            status: s.status,
            progress: s.progress,
            file: s.file
          });
        }
      });
      return It = await Aw(
        o,
        xw,
        "模型加载超时，请检查网络连接后重试"
      ), V.info("[离线翻译] 翻译模型加载完成"), no = !1, It;
    } catch (e) {
      throw no = !1, gn = null, V.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), gn);
}
async function Mw(e) {
  if (!e?.trim()) return e;
  Sn = new AbortController();
  const t = Sn.signal;
  try {
    const n = await ou();
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
    throw n instanceof Error && n.message === "翻译已取消" ? (V.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (V.warn("[离线翻译] 运行时资源未安装"), n) : (V.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    Sn = null;
  }
}
function bi() {
  Sn && (Sn.abort(), Sn = null, V.info("[离线翻译] 已发送取消信号"));
}
async function Ja() {
  await ou();
}
function Io() {
  return It !== null;
}
function Nw() {
  return no;
}
async function Zn() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      V.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const a = await (await caches.open(n)).keys();
          if (V.info(`[离线翻译] Cache "${n}" 包含 ${a.length} 个文件`), a.some(
            (r) => r.url.includes("opus-mt-en-zh") || r.url.includes("Xenova")
          )) {
            const r = a.some((i) => i.url.includes(".onnx"));
            if (V.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${r}`), r)
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
    V.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return V.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return V.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return V.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function zw() {
  return (await Zn()).isCached;
}
function Fw() {
  return It !== null;
}
async function Bw() {
  if (It)
    try {
      await It.dispose?.();
    } catch {
    }
  It = null, gn = null, no = !1, V.info("[离线翻译] 翻译器已释放");
}
async function Vw() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), V.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), V.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    V.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw V.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const Dw = { class: "translate-window" }, Hw = {
  class: "header",
  "data-tauri-drag-region": ""
}, jw = { class: "left-buttons" }, Ww = ["aria-label"], Uw = {
  class: "window-title",
  "data-tauri-drag-region": ""
}, Kw = { class: "right-buttons" }, Gw = ["aria-label"], Zw = { class: "translate-container" }, Yw = { class: "language-selector" }, qw = ["aria-label", "disabled"], Jw = { class: "source-area" }, Xw = { class: "source-actions" }, Qw = { class: "source-material" }, e1 = { class: "translation-results" }, t1 = ["onClick"], n1 = { class: "result-title" }, o1 = ["src"], a1 = ["src"], r1 = {
  key: 2,
  class: "offline-icon"
}, s1 = {
  key: 3,
  class: "offline-icon ai-icon"
}, i1 = { class: "result-controls" }, l1 = {
  key: 0,
  class: "result-body"
}, u1 = ["textContent", "onBlur"], c1 = {
  key: 2,
  class: "result-empty"
}, d1 = { class: "result-actions" }, f1 = ["onClick"], p1 = ["onClick"], m1 = ["onClick"], v1 = /* @__PURE__ */ U({
  __name: "index",
  setup(e) {
    const { t } = er(), n = yw(), o = Gl(), a = A(!1), s = A(""), r = A("auto"), i = A("zh"), u = A(!1), c = A(!1), d = A(), f = A(!1), p = A(!1), v = A(!1);
    let m = 0;
    const h = A([
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
    ]), k = y(() => h.value.filter((B) => B.engine === "offline" ? f.value : B.engine === "local-ai" ? p.value : !0)), g = (B) => B === "bing" ? t("translate.bingTranslate") : B === "google" ? t("translate.googleTranslate") : B === "offline" ? t("translate.offlineTranslate") : B === "local-ai" ? t("translate.localAiTranslate") : B, $ = y(() => [
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
    let S = null, O = null, T = null;
    const I = A({
      forChinese: "en",
      forEnglish: "zh"
    }), x = async () => {
      if (u.value) return;
      const B = await yt("tauri://blur", () => {
        S && clearTimeout(S), S = setTimeout(async () => {
          u.value || (W(), await o.hide());
        }, 100);
      }), ne = await yt("tauri://focus", () => {
        S && clearTimeout(S), me();
      }), oe = await yt("tauri://show", () => {
        me();
      }), Le = await yt("tauri://move", () => {
        S && clearTimeout(S);
      }), De = await yt("selection-text", (Se) => {
        Se.payload && Se.payload.text && Ee(Se.payload.text);
      }), Ae = await yt("reset-state", () => {
        W();
      });
      O = () => {
        B(), ne(), Le(), De(), Ae(), oe();
      };
    }, G = async () => {
      u.value = !u.value, await o.setAlwaysOnTop(u.value), u.value ? O && (O(), O = null) : x();
    }, W = () => {
      s.value = "", c.value = !1, h.value.forEach((B) => {
        B.text = "", B.loading = !1;
      });
    }, Q = async () => {
      W(), await o.close();
    }, ie = () => {
      r.value !== "auto" && ([r.value, i.value] = [
        i.value,
        r.value
      ], X());
    }, w = () => {
      s.value = "", h.value.forEach((B) => {
        B.text = "", B.loading = !1;
      }), c.value = !1;
    }, N = async (B) => {
      B && (await navigator.clipboard.writeText(B), Ne.success(t("translate.copiedToClipboard")));
    }, Y = (B, ne) => {
      const oe = ne.target;
      oe && (B.text = oe.innerText.trim());
    }, P = (B, ne) => {
      if (!B) return;
      const oe = new SpeechSynthesisUtterance(B), Le = ne === "zh" ? "zh-CN" : ne === "zh_tw" ? "zh-TW" : ne === "en" ? "en-US" : ne;
      oe.lang = Le, window.speechSynthesis.speak(oe);
    }, z = () => {
      if (r.value !== "auto") return;
      const B = Pa(s.value);
      B === "zh" ? i.value = I.value.forChinese : B === "en" && (i.value = I.value.forEnglish);
    }, E = () => {
      const B = Pa(s.value);
      B === "zh" ? I.value.forChinese = i.value : B === "en" && (I.value.forEnglish = i.value), X();
    }, ee = async (B, ne) => {
      const oe = h.value.find((Ae) => Ae.engine === B);
      if (!oe || B === "offline" && !f.value || B === "local-ai" && !p.value)
        return;
      oe.loading = !0, oe.text = "";
      const Le = fb(s.value);
      let De = i.value;
      B === "bing" && De === "auto" && (De = "en");
      try {
        let Ae;
        if (B === "offline") {
          if (!Fw())
            if (await zw())
              V.info("[翻译窗口] 离线翻译懒加载：开始加载模型..."), await Ja(), V.info("[翻译窗口] 离线翻译懒加载：模型加载完成");
            else
              throw new Error("离线翻译模型未下载，请在设置中下载模型");
          Ae = await Mw(Le);
        } else
          Ae = await L("translate_text", {
            text: Le,
            from: r.value,
            to: De,
            engine: B
          });
        if (ne !== m) return;
        oe.text = Ae;
      } catch (Ae) {
        if (ne !== m) return;
        const Se = String(Ae);
        if (Se.includes("翻译已取消")) return;
        V.error(`[翻译] ${B}翻译出错`, Ae), Se.includes("429") || Se.includes("Too Many Requests") ? oe.text = t("translate.tooManyRequests") : Se.includes("timeout") || Se.includes("超时") ? oe.text = t("translate.timeout") : Se.includes("network") || Se.includes("网络") ? oe.text = t("translate.networkError") : Se.includes("未下载") || Se.includes("未激活") || Se.includes("运行时未安装") ? oe.text = Se : oe.text = t("translate.translateFailed");
      } finally {
        ne === m && (oe.loading = !1);
      }
    }, X = async () => {
      if (T && (clearTimeout(T), T = null), !s.value.trim()) {
        h.value.forEach((oe) => {
          oe.text = "", oe.loading = !1;
        }), a.value = !1;
        return;
      }
      bi();
      const B = ++m;
      z(), a.value = !0;
      const ne = k.value.map(
        (oe) => ee(oe.engine, B)
      );
      await Promise.all(ne), B === m && (a.value = !1);
    }, le = (B) => {
      B.expanded = !B.expanded;
    }, he = () => {
      v.value || (c.value = !!s.value, T && clearTimeout(T), s.value.trim() ? T = setTimeout(() => {
        X();
      }, 500) : h.value.forEach((B) => {
        B.text = "", B.loading = !1;
      }));
    }, be = () => {
      v.value = !0;
    }, J = () => {
      v.value = !1;
    };
    let de = "", ge = !1;
    const Ee = (B) => {
      B && (B === de && ge || (de = B, ge = !0, s.value = B, c.value = !0, z(), X().finally(() => {
        setTimeout(() => {
          ge = !1;
        }, 2e3);
      }), me()));
    }, ae = (B) => {
      s.value = B.text;
      const ne = Pa(s.value), oe = r.value, Le = i.value;
      oe === "auto" ? (r.value = "auto", ne === "zh" ? i.value = I.value.forChinese : i.value = I.value.forEnglish) : (r.value = Le, i.value = oe === "auto" ? ne === "zh" ? "en" : "zh" : oe), X();
    }, me = () => {
      const B = (ne = 0) => {
        if (!(ne > 5))
          if (d.value)
            d.value.focus();
          else {
            const oe = 100 * (ne + 1);
            setTimeout(() => B(ne + 1), oe);
          }
      };
      d.value && d.value.focus(), Ce(() => {
        B();
      });
    }, Fe = () => {
      z(), X();
    };
    return Pe(async () => {
      try {
        await n.initialize(), p.value = n.isEnabled("local-ai");
      } catch (B) {
        V.warn("[翻译窗口] 获取本地 AI 插件状态失败:", B), p.value = !1;
      }
      try {
        const B = await L(
          "get_offline_model_activated"
        );
        V.info(`[翻译窗口] 离线模型后端激活状态: ${B}`), f.value = B;
      } catch (B) {
        V.error("[翻译窗口] 获取离线模型激活状态失败:", B), f.value = !1;
      }
      await x(), s.value.trim() && z(), me(), await Ce(), setTimeout(() => {
        o.emit("translate_ready");
      }, 100);
    }), _i(() => {
      O && O(), S && clearTimeout(S), T && clearTimeout(T), bi(), W();
    }), (B, ne) => {
      const oe = $r, Le = xr, De = Lr, Ae = mr, Se = ly;
      return _(), R("main", Dw, [
        b("div", Hw, [
          b("div", jw, [
            F(oe, {
              content: B.$t("pin.pinWindow"),
              placement: "bottom",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: Z(() => [
                b("button", {
                  type: "button",
                  "aria-label": B.$t("pin.pinWindow"),
                  onMousedown: ne[0] || (ne[0] = Oe(() => {
                  }, ["stop"])),
                  onClick: G,
                  class: M(["window-action", "pin-button", l(u) ? "pinned" : ""])
                }, [
                  F(l(nc), { size: 18 })
                ], 42, Ww)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"])
          ]),
          b(
            "div",
            Uw,
            K(B.$t("translate.title")),
            1
            /* TEXT */
          ),
          b("div", Kw, [
            F(oe, {
              content: B.$t("pin.close"),
              placement: "bottom",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: Z(() => [
                b("button", {
                  type: "button",
                  "aria-label": B.$t("pin.close"),
                  onMousedown: ne[1] || (ne[1] = Oe(() => {
                  }, ["stop"])),
                  onClick: Q,
                  class: "window-action material-close"
                }, [
                  F(l(Ju), { size: 22 })
                ], 40, Gw)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"])
          ])
        ]),
        b("div", Zw, [
          H(" 语言选择区域 "),
          b("div", Yw, [
            F(De, {
              modelValue: l(r),
              "onUpdate:modelValue": ne[2] || (ne[2] = (ce) => Yn(r) ? r.value = ce : null),
              size: "small",
              onChange: Fe,
              class: "lang-select"
            }, {
              default: Z(() => [
                (_(!0), R(
                  $e,
                  null,
                  rt(l($), (ce) => (_(), q(Le, {
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
            F(oe, {
              content: B.$t("translate.translateBack"),
              placement: "top",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: Z(() => [
                b("button", {
                  type: "button",
                  "aria-label": B.$t("translate.translateBack"),
                  disabled: l(r) === "auto",
                  onClick: ie,
                  class: "swap-button"
                }, [
                  F(l(Hr), { size: 22 })
                ], 8, qw)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"]),
            F(De, {
              modelValue: l(i),
              "onUpdate:modelValue": ne[3] || (ne[3] = (ce) => Yn(i) ? i.value = ce : null),
              size: "small",
              onChange: E,
              class: "lang-select"
            }, {
              default: Z(() => [
                (_(!0), R(
                  $e,
                  null,
                  rt(l($), (ce) => (_(), q(Le, {
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
          b("div", Jw, [
            F(Ae, {
              ref_key: "sourceTextArea",
              ref: d,
              modelValue: l(s),
              "onUpdate:modelValue": ne[4] || (ne[4] = (ce) => Yn(s) ? s.value = ce : null),
              type: "textarea",
              rows: 2,
              placeholder: B.$t("translate.inputPlaceholder"),
              resize: "none",
              onInput: he,
              onCompositionstart: be,
              onCompositionend: J,
              class: "source-textarea"
            }, null, 8, ["modelValue", "placeholder"]),
            b("div", Xw, [
              b("div", Qw, [
                F(oe, {
                  content: B.$t("translate.speakText"),
                  placement: "top",
                  "hide-after": 1e3,
                  "popper-class": "themed-tooltip-popper"
                }, {
                  default: Z(() => [
                    b("button", {
                      type: "button",
                      onClick: ne[5] || (ne[5] = (ce) => P(l(s), l(r))),
                      class: "action-btn"
                    }, [
                      F(l(jr), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"]),
                l(c) ? (_(), q(oe, {
                  key: 0,
                  content: B.$t("translate.deleteText"),
                  placement: "top",
                  "hide-after": 1e3,
                  "popper-class": "themed-tooltip-popper"
                }, {
                  default: Z(() => [
                    b("button", {
                      type: "button",
                      onClick: w,
                      class: "action-btn"
                    }, [
                      F(l(Qu), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"])) : H("v-if", !0)
              ])
            ])
          ]),
          H(" 多引擎翻译结果区域 "),
          b("div", e1, [
            (_(!0), R(
              $e,
              null,
              rt(l(k), (ce) => (_(), R(
                "div",
                {
                  key: ce.engine,
                  class: M(["result-card", { "result-expanded": ce.expanded }])
                },
                [
                  b("button", {
                    type: "button",
                    class: "result-header",
                    onClick: (Ke) => le(ce)
                  }, [
                    b("div", n1, [
                      ce.engine === "google" ? (_(), R("img", {
                        key: 0,
                        src: l(ob),
                        class: "engine-icon",
                        alt: "Google"
                      }, null, 8, o1)) : ce.engine === "bing" ? (_(), R("img", {
                        key: 1,
                        src: l(ab),
                        class: "engine-icon",
                        alt: "Bing"
                      }, null, 8, a1)) : ce.engine === "offline" ? (_(), R("span", r1, "离")) : (_(), R("span", s1, "AI")),
                      b(
                        "span",
                        null,
                        K(g(ce.engine)),
                        1
                        /* TEXT */
                      )
                    ]),
                    b("div", i1, [
                      (_(), q(at(ce.expanded ? l(rc) : l(ec)), {
                        size: 18,
                        class: "expand-icon"
                      }))
                    ])
                  ], 8, t1),
                  ce.expanded ? (_(), R("div", l1, [
                    ce.loading ? (_(), q(Se, {
                      key: 0,
                      rows: 3,
                      animated: ""
                    })) : ce.text ? (_(), R("div", {
                      key: 1,
                      class: "result-text",
                      contenteditable: "plaintext-only",
                      spellcheck: "false",
                      textContent: K(ce.text),
                      onBlur: (Ke) => Y(ce, Ke)
                    }, null, 40, u1)) : (_(), R(
                      "div",
                      c1,
                      K(B.$t("translate.resultPlaceholder")),
                      1
                      /* TEXT */
                    )),
                    b("div", d1, [
                      F(oe, {
                        content: B.$t("translate.speakText"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: Z(() => [
                          b("button", {
                            type: "button",
                            onClick: (Ke) => P(ce.text, l(i)),
                            class: "action-btn"
                          }, [
                            F(l(jr), { size: 18 })
                          ], 8, f1)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      F(oe, {
                        content: B.$t("translate.copyResult"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: Z(() => [
                          b("button", {
                            type: "button",
                            onClick: (Ke) => N(ce.text),
                            class: "action-btn"
                          }, [
                            F(l(Xu), { size: 18 })
                          ], 8, p1)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      F(oe, {
                        content: B.$t("translate.translateBack"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: Z(() => [
                          b("button", {
                            type: "button",
                            onClick: (Ke) => ae(ce),
                            class: "action-btn rotate-icon"
                          }, [
                            F(l(Hr), { size: 18 })
                          ], 8, m1)
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
}), yo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, h1 = /* @__PURE__ */ yo(v1, [["__scopeId", "data-v-2b3f136a"]]), g1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: h1
}, Symbol.toStringTag, { value: "Module" })), y1 = ["disabled"], b1 = {
  key: 0,
  class: "custom-button__loading"
}, w1 = /* @__PURE__ */ U({
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
    return (n, o) => (_(), R("button", {
      class: M([
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
      e.loading ? (_(), R("div", b1, o[1] || (o[1] = [
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
      ]))) : H("v-if", !0),
      re(n.$slots, "default", {}, void 0, !0)
    ], 10, y1));
  }
}), Lo = /* @__PURE__ */ yo(w1, [["__scopeId", "data-v-9497085f"]]), _1 = /* @__PURE__ */ U({
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
    return (s, r) => (_(), R(
      "div",
      {
        class: M(["custom-switch", {
          "custom-switch--active": e.modelValue,
          "custom-switch--disabled": e.disabled
        }]),
        onClick: a
      },
      [
        e.activeText || e.inactiveText ? (_(), R(
          "span",
          {
            key: 0,
            class: M(["custom-switch__text", { "custom-switch__text--active": e.modelValue }])
          },
          K(e.modelValue ? e.activeText : e.inactiveText),
          3
          /* TEXT, CLASS */
        )) : H("v-if", !0),
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
}), S1 = /* @__PURE__ */ yo(_1, [["__scopeId", "data-v-09573d1e"]]);
async function k1() {
  try {
    return await L("get_attachment_config");
  } catch (e) {
    throw new Error(`获取附件配置失败: ${e}`);
  }
}
async function C1(e) {
  try {
    await L("update_attachment_config", { config: e });
  } catch (t) {
    throw new Error(`更新附件配置失败: ${t}`);
  }
}
const T1 = { class: "settings-panel" }, E1 = { class: "panel-header" }, P1 = { class: "panel-title" }, O1 = { class: "panel-content" }, $1 = { class: "summarize-section" }, I1 = { class: "summarize-label" }, L1 = { class: "summarize-label-title" }, x1 = { class: "summarize-label-desc" }, R1 = { class: "summarize-input-wrapper" }, A1 = { class: "summarize-section" }, M1 = { class: "summarize-label" }, N1 = { class: "summarize-label-title" }, z1 = { class: "summarize-label-desc" }, F1 = { class: "summarize-input-wrapper" }, B1 = { class: "flex items-center gap-3" }, V1 = {
  key: 0,
  class: "summarize-section"
}, D1 = { class: "summarize-label" }, H1 = { class: "summarize-label-title" }, j1 = { class: "summarize-label-desc" }, W1 = { class: "summarize-input-wrapper flex-col !items-start" }, U1 = { class: "w-full space-y-2" }, K1 = { class: "w-5 text-center" }, G1 = {
  key: 0,
  class: "text-green-500 text-base"
}, Z1 = {
  key: 1,
  class: "text-red-500 text-base"
}, Y1 = {
  key: 2,
  class: "text-yellow-500 text-base"
}, q1 = {
  key: 3,
  class: "text-panel-text-secondary text-base"
}, J1 = ["title"], X1 = { class: "w-16 text-right text-xs text-panel-text-secondary" }, Q1 = { class: "w-24" }, e2 = {
  key: 1,
  class: "text-green-500 text-xs"
}, t2 = {
  key: 2,
  class: "text-red-500 text-xs"
}, n2 = {
  key: 3,
  class: "text-panel-text-secondary text-xs"
}, o2 = {
  key: 1,
  class: "summarize-section !mt-2"
}, a2 = { class: "summarize-label" }, r2 = { class: "summarize-label-title" }, s2 = { class: "summarize-label-desc" }, i2 = { class: "summarize-input-wrapper" }, l2 = { class: "model-info-card" }, u2 = { class: "info-row" }, c2 = { class: "info-item" }, d2 = { class: "info-label" }, f2 = { class: "info-item" }, p2 = { class: "info-label" }, m2 = { class: "info-value" }, v2 = { class: "info-item" }, h2 = { class: "info-label" }, g2 = { class: "info-value" }, y2 = { class: "summarize-section !mt-2" }, b2 = { class: "summarize-label" }, w2 = { class: "summarize-label-title" }, _2 = { class: "summarize-label-desc" }, S2 = { class: "summarize-input-wrapper" }, k2 = { class: "usage-tips" }, C2 = { class: "tip-item" }, T2 = { class: "tip-text" }, E2 = { class: "tip-item" }, P2 = { class: "tip-text" }, O2 = { class: "tip-item" }, $2 = { class: "tip-text" }, I2 = { class: "tip-item" }, L2 = { class: "tip-text" }, x2 = "resources/transformers/transformers.min.js", R2 = "translation-offline-runtime", A2 = /* @__PURE__ */ U({
  name: "Translation",
  __name: "index",
  setup(e) {
    const { t } = er(), n = ["translation-offline-runtime", "translation"], o = A("bing"), a = A(!1), s = A(!1), r = A({ isCached: !1, cacheType: "none" }), i = A(!1), u = A(!1), c = A(!1), d = A(!1), f = A([]), p = y(() => r.value.isCached), v = y(() => [
      { value: "google", label: t("translation.google") },
      { value: "bing", label: t("translation.bing") },
      { value: "offline", label: t("translation.offline") },
      { value: "local-ai", label: t("translation.localAi") }
    ]), m = y(() => i.value ? t("translation.modelLoading") : c.value ? a.value ? t("translation.modelReady") : p.value && s.value ? t("translation.modelActivated") : p.value ? t("translation.modelCached") : t("translation.modelNotLoaded") : t("translation.runtimeMissing")), h = y(() => i.value ? "text-yellow-500" : c.value ? a.value || p.value && s.value ? "text-green-500" : p.value ? "text-blue-500" : "text-panel-text-secondary" : "text-red-500"), k = y(() => a.value || p.value), g = () => {
      const w = Rw();
      f.value = w.map((N) => ({
        file: N.name,
        progress: 0,
        status: "pending",
        size: N.size
      }));
    }, $ = (w, N, Y) => {
      const P = f.value.find((z) => w.includes(z.file) || z.file.includes(w));
      P && (P.progress = N, P.status = Y);
    }, S = async () => {
      for (const w of n)
        if (await Ar(w, x2))
          return c.value = !0, !0;
      return c.value = !1, !1;
    }, O = async () => {
      d.value = !0;
      try {
        const w = await Sb(vb), N = Array.isArray(w.plugins) ? w.plugins : [], Y = N.find((P) => P.id === R2);
        if (!Y)
          throw new Error(t("translation.runtimeMarketplaceMissing"));
        if (await x(Y, N), await S() || (V.info("[翻译设置] 运行时资源包缺少 runtime 文件，开始补全资源"), await Oa()), !await S())
          throw new Error(t("translation.runtimeInstallVerifyFailed"));
        Ne.msg(t("translation.runtimeInstallSuccess"));
      } catch (w) {
        V.error("[翻译设置] 安装离线翻译运行时失败:", w), Ne.msg(
          w instanceof Error ? w.message : t("translation.runtimeInstallFailed"),
          "error"
        );
      } finally {
        d.value = !1;
      }
    }, T = (w) => Array.isArray(w.dependencies) ? w.dependencies.filter((N) => typeof N == "string" && !!N.trim()) : [], I = (w) => !!(w.packageUrl && w.status !== "included"), x = async (w, N, Y = /* @__PURE__ */ new Set()) => {
      if (!Y.has(w.id)) {
        Y.add(w.id);
        try {
          for (const P of T(w)) {
            const z = N.find((E) => E.id === P);
            if (!z)
              throw new Error(t("plugins.dependencyMissing", { id: P }));
            await x(z, N, Y);
          }
          w.packageUrl && I(w) && (V.info("[翻译设置] 开始安装离线翻译运行时资源包", {
            pluginId: w.id,
            packageUrl: w.packageUrl
          }), await Jl(
            w.packageUrl,
            !0,
            w.packageSubdir,
            w.sizeBytes
          ));
        } finally {
          Y.delete(w.id);
        }
      }
    }, G = async (w) => {
      try {
        await L("set_translation_engine", { engine: w }), Ne.msg(t("translation.engineSaved"));
      } catch (N) {
        V.info("Failed to save translation engine:", N), Ne.msg(t("translation.engineSaveFailed"), "error");
      }
    }, W = async () => {
      if (V.info("[翻译设置] 开始下载离线模型..."), !await S()) {
        Ne.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await Oa(), await S();
      } catch (w) {
        V.error("[翻译设置] 修复离线翻译运行时失败:", w), Ne.msg(w instanceof Error && w.message ? w.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      i.value = !0, g(), yi((w) => {
        const N = w.file || "";
        w.status === "initiate" ? $(N, 0, "downloading") : w.status === "progress" && w.progress !== void 0 ? $(N, Math.round(w.progress), "downloading") : w.status === "done" && $(N, 100, "done");
      });
      try {
        await Ja(), f.value.forEach((w) => {
          w.status !== "done" && (w.status = "done"), w.progress = 100;
        }), a.value = !0, s.value = !0, r.value = await Zn(), V.info("[翻译设置] 模型下载并加载成功，更新后端激活状态为 true"), await L("set_offline_model_activated", { activated: !0 }), Ne.msg(t("translation.modelLoadSuccess"));
      } catch (w) {
        V.error("[翻译设置] 模型下载失败:", w), f.value.forEach((N) => {
          (N.status === "downloading" || N.status === "pending") && (N.status = "error");
        }), a.value = !1, Ne.msg(w instanceof Error && w.message ? w.message : t("translation.modelLoadFailed"), "error");
      } finally {
        i.value = !1, yi(null), a.value = Io(), r.value = await Zn(), V.info(`[翻译设置] 最终状态 - 内存加载: ${a.value}, 缓存存在: ${r.value.isCached}`);
      }
    }, Q = async () => {
      if (V.info("[翻译设置] 开始激活离线模型..."), !await S()) {
        Ne.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await Oa(), await S();
      } catch (w) {
        V.error("[翻译设置] 修复离线翻译运行时失败:", w), Ne.msg(w instanceof Error && w.message ? w.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      i.value = !0;
      try {
        await Ja(), a.value = !0, s.value = !0, V.info("[翻译设置] 模型激活成功，更新后端激活状态为 true"), await L("set_offline_model_activated", { activated: !0 }), Ne.msg(t("translation.modelLoadSuccess"));
      } catch (w) {
        V.error("[翻译设置] 模型激活失败:", w), a.value = !1, Ne.msg(w instanceof Error && w.message ? w.message : t("translation.modelLoadFailed"), "error");
      } finally {
        i.value = !1, a.value = Io(), V.info(`[翻译设置] 激活后状态 - 内存加载: ${a.value}`);
      }
    }, ie = async () => {
      V.info("[翻译设置] 开始删除离线模型..."), u.value = !0;
      try {
        await Bw(), await Vw(), a.value = !1, s.value = !1, r.value = { isCached: !1, cacheType: "none" }, V.info("[翻译设置] 模型删除成功，更新后端激活状态为 false"), await L("set_offline_model_activated", { activated: !1 }), Ne.msg(t("translation.modelDeleted"));
      } catch (w) {
        V.error("[翻译设置] 模型删除失败:", w), Ne.msg(t("translation.modelDeleteFailed"), "error");
      } finally {
        u.value = !1, a.value = Io(), r.value = await Zn(), V.info(`[翻译设置] 删除后状态 - 内存加载: ${a.value}, 缓存存在: ${r.value.isCached}`);
      }
    };
    return Pe(async () => {
      V.info("[翻译设置] 页面初始化..."), await S();
      try {
        const Y = await L("get_translation_engine");
        V.info(`[翻译设置] 从后端获取翻译引擎: ${Y}`), Y && ["google", "bing", "offline", "local-ai"].includes(Y) && (o.value = Y);
      } catch (Y) {
        V.error("[翻译设置] 获取翻译引擎失败:", Y);
      }
      const w = Io(), N = Nw();
      r.value = await Zn(), V.info(`[翻译设置] 前端状态 - 内存加载: ${w}, 正在初始化: ${N}, 缓存存在: ${r.value.isCached}`), a.value = w, i.value = N;
      try {
        const Y = await L("get_offline_model_activated");
        V.info(`[翻译设置] 后端激活状态: ${Y}`), s.value = Y, Y && !r.value.isCached && (V.info("[翻译设置] 后端已激活但缓存不存在，重置后端状态"), await L("set_offline_model_activated", { activated: !1 }), s.value = !1), !Y && w && (V.info("[翻译设置] 内存已加载但后端未标记，同步后端状态为 true"), await L("set_offline_model_activated", { activated: !0 }), s.value = !0);
      } catch (Y) {
        V.error("[翻译设置] 处理激活状态失败:", Y);
      }
    }), (w, N) => {
      const Y = xr, P = Lr, z = Q0;
      return _(), R("div", T1, [
        H(" 固定标题 "),
        b("div", E1, [
          b(
            "h3",
            P1,
            K(w.$t("translation.title")),
            1
            /* TEXT */
          )
        ]),
        H(" 可滚动内容 "),
        b("main", O1, [
          H(" 默认翻译引擎 "),
          b("section", $1, [
            b("div", I1, [
              b(
                "div",
                L1,
                K(w.$t("translation.defaultEngine")),
                1
                /* TEXT */
              ),
              b(
                "div",
                x1,
                K(w.$t("translation.defaultEngineDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", R1, [
              F(P, {
                class: "summarize-input !w-36",
                modelValue: o.value,
                "onUpdate:modelValue": N[0] || (N[0] = (E) => o.value = E),
                onChange: G
              }, {
                default: Z(() => [
                  (_(!0), R(
                    $e,
                    null,
                    rt(v.value, (E) => (_(), q(Y, {
                      key: E.value,
                      label: E.label,
                      value: E.value
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
          b("section", A1, [
            b("div", M1, [
              b(
                "div",
                N1,
                K(w.$t("translation.offlineModel")),
                1
                /* TEXT */
              ),
              b(
                "div",
                z1,
                K(w.$t("translation.offlineModelDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", F1, [
              b("div", B1, [
                b(
                  "span",
                  {
                    class: M(["text-sm font-medium", h.value])
                  },
                  K(m.value),
                  3
                  /* TEXT, CLASS */
                ),
                !c.value && !i.value ? (_(), q(l(Lo), {
                  key: 0,
                  type: "primary",
                  size: "small",
                  loading: d.value,
                  onClick: O
                }, {
                  default: Z(() => [
                    nn(
                      K(w.$t("translation.installRuntime")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : H("v-if", !0),
                c.value && !p.value && !i.value ? (_(), q(l(Lo), {
                  key: 1,
                  type: "primary",
                  size: "small",
                  onClick: W
                }, {
                  default: Z(() => [
                    nn(
                      K(w.$t("translation.loadModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : H("v-if", !0),
                c.value && p.value && !a.value && !s.value && !i.value ? (_(), q(l(Lo), {
                  key: 2,
                  type: "primary",
                  size: "small",
                  onClick: Q
                }, {
                  default: Z(() => [
                    nn(
                      K(w.$t("translation.activateModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : H("v-if", !0),
                p.value && !i.value ? (_(), q(l(Lo), {
                  key: 3,
                  type: "default",
                  size: "small",
                  onClick: ie,
                  loading: u.value
                }, {
                  default: Z(() => [
                    nn(
                      K(w.$t("translation.deleteModel")),
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
          i.value ? (_(), R("section", V1, [
            b("div", D1, [
              b(
                "div",
                H1,
                K(w.$t("translation.downloadProgress")),
                1
                /* TEXT */
              ),
              b(
                "div",
                j1,
                K(w.$t("translation.downloadProgressDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", W1, [
              b("div", U1, [
                (_(!0), R(
                  $e,
                  null,
                  rt(f.value, (E) => (_(), R("div", {
                    key: E.file,
                    class: "flex items-center gap-3 py-1"
                  }, [
                    b("span", K1, [
                      E.status === "done" ? (_(), R("span", G1, "✓")) : E.status === "error" ? (_(), R("span", Z1, "✗")) : E.status === "downloading" ? (_(), R("span", Y1, "↓")) : (_(), R("span", q1, "○"))
                    ]),
                    b("span", {
                      class: "w-64 truncate text-sm text-panel-text-secondary",
                      title: E.file
                    }, K(E.file), 9, J1),
                    b(
                      "span",
                      X1,
                      K(E.size),
                      1
                      /* TEXT */
                    ),
                    b("div", Q1, [
                      E.status === "downloading" ? (_(), q(z, {
                        key: 0,
                        percentage: E.progress,
                        "stroke-width": 6,
                        "show-text": !0,
                        "text-inside": !1
                      }, null, 8, ["percentage"])) : E.status === "done" ? (_(), R(
                        "span",
                        e2,
                        K(w.$t("translation.completed")),
                        1
                        /* TEXT */
                      )) : E.status === "error" ? (_(), R(
                        "span",
                        t2,
                        K(w.$t("translation.failed")),
                        1
                        /* TEXT */
                      )) : (_(), R(
                        "span",
                        n2,
                        K(w.$t("translation.waiting")),
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
          k.value && !i.value ? (_(), R("section", o2, [
            b("div", a2, [
              b(
                "div",
                r2,
                K(w.$t("translation.modelInfo")),
                1
                /* TEXT */
              ),
              b(
                "div",
                s2,
                K(w.$t("translation.modelInfoDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", i2, [
              b("div", l2, [
                b("div", u2, [
                  b("div", c2, [
                    b(
                      "span",
                      d2,
                      K(w.$t("translation.modelName")),
                      1
                      /* TEXT */
                    ),
                    N[1] || (N[1] = b(
                      "span",
                      { class: "info-value" },
                      "Xenova/opus-mt-en-zh",
                      -1
                      /* HOISTED */
                    ))
                  ]),
                  b("div", f2, [
                    b(
                      "span",
                      p2,
                      K(w.$t("translation.modelSize")),
                      1
                      /* TEXT */
                    ),
                    b(
                      "span",
                      m2,
                      K(r.value.estimatedSize || "~300MB"),
                      1
                      /* TEXT */
                    )
                  ]),
                  b("div", v2, [
                    b(
                      "span",
                      h2,
                      K(w.$t("translation.supportLang")),
                      1
                      /* TEXT */
                    ),
                    b(
                      "span",
                      g2,
                      K(w.$t("translation.enToZh")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ])) : H("v-if", !0),
          H(" 使用说明 "),
          b("section", y2, [
            b("div", b2, [
              b(
                "div",
                w2,
                K(w.$t("translation.usage")),
                1
                /* TEXT */
              ),
              b(
                "div",
                _2,
                K(w.$t("translation.usageDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", S2, [
              b("div", k2, [
                b("div", C2, [
                  N[2] || (N[2] = b(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    T2,
                    K(w.$t("translation.usageTip1")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", E2, [
                  N[3] || (N[3] = b(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    P2,
                    K(w.$t("translation.usageTip2")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", O2, [
                  N[4] || (N[4] = b(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    $2,
                    K(w.$t("translation.usageTip3")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", I2, [
                  N[5] || (N[5] = b(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    L2,
                    K(w.$t("translation.usageTip4")),
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
}), M2 = /* @__PURE__ */ yo(A2, [["__scopeId", "data-v-b5694b08"]]), N2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: M2
}, Symbol.toStringTag, { value: "Module" })), z2 = { class: "settings-panel" }, F2 = { class: "panel-header" }, B2 = { class: "panel-title" }, V2 = { class: "panel-content" }, D2 = { class: "summarize-section" }, H2 = { class: "summarize-label" }, j2 = { class: "summarize-label-title" }, W2 = { class: "summarize-label-desc" }, U2 = { class: "summarize-input-wrapper" }, K2 = { class: "summarize-section" }, G2 = { class: "summarize-label" }, Z2 = { class: "summarize-label-title" }, Y2 = { class: "summarize-label-desc" }, q2 = { class: "summarize-input-wrapper line-height-control" }, J2 = { class: "line-height-value" }, X2 = { class: "summarize-section transparent-input" }, Q2 = { class: "summarize-label" }, e_ = { class: "summarize-label-title" }, t_ = { class: "summarize-label-desc" }, n_ = { class: "summarize-input-wrapper" }, o_ = { class: "summarize-section transparent-input" }, a_ = { class: "summarize-label" }, r_ = { class: "summarize-label-title" }, s_ = { class: "summarize-label-desc" }, i_ = { class: "summarize-input-wrapper" }, l_ = { class: "summarize-section transparent-input" }, u_ = { class: "summarize-label" }, c_ = { class: "summarize-label-title" }, d_ = { class: "summarize-label-desc" }, f_ = { class: "summarize-input-wrapper" }, p_ = { class: "preview-box" }, m_ = /* @__PURE__ */ U({
  name: "AttachmentSettings",
  __name: "index",
  setup(e) {
    const { t } = er(), n = bw(), o = A({
      pathTemplate: "assets/${noteFileName}/",
      filenameFormat: "snippets-code"
    }), a = A(!1), s = A(!1), r = A(n.editorLineHeight), i = y(() => {
      const p = t("settings.attachment.exampleNoteName") || "示例笔记", v = u(o.value.filenameFormat);
      return o.value.pathTemplate.replace("${noteFileName}", p) + v;
    });
    function u(p) {
      const v = /* @__PURE__ */ new Date(), m = v.toISOString().slice(0, 10).replace(/-/g, ""), h = v.toTimeString().slice(0, 8).replace(/:/g, "");
      switch (p) {
        case "snippets-code":
          return `Pasted image ${m}${h}.png`;
        case "simple":
          return `image-${m}-${h}.png`;
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
          await C1(o.value), Ne.msg(t("settings.attachment.configSaved"));
        } catch (p) {
          console.error("保存配置失败:", p), Ne.msg(t("settings.attachment.configSaveFailed"), "error");
        } finally {
          s.value = !1;
        }
      }
    }
    const d = async (p) => {
      try {
        await n.updateEditorLineNumbers(p);
      } catch (v) {
        Ne.msg(`${t("settings.settingFailed")}: ${v}`, "error");
      }
    }, f = async (p) => {
      const v = Array.isArray(p) ? p[0] : p;
      try {
        await n.updateEditorLineHeight(v);
      } catch (m) {
        r.value = n.editorLineHeight, Ne.msg(`${t("settings.settingFailed")}: ${m}`, "error");
      }
    };
    return se(() => n.editorLineHeight, (p) => {
      r.value = p;
    }), Pe(async () => {
      a.value = !0;
      try {
        o.value = await k1();
      } catch (p) {
        console.error("加载配置失败:", p);
      } finally {
        a.value = !1;
      }
    }), (p, v) => {
      const m = Py, h = mr, k = xr, g = Lr;
      return _(), R("div", z2, [
        H(" 固定标题 "),
        b("div", F2, [
          b(
            "h3",
            B2,
            K(p.$t("settings.attachment.title")),
            1
            /* TEXT */
          )
        ]),
        H(" 可滚动内容 "),
        b("main", V2, [
          H(" 编辑器行号 "),
          b("section", D2, [
            b("div", H2, [
              b(
                "div",
                j2,
                K(p.$t("settings.editorLineNumbers")),
                1
                /* TEXT */
              ),
              b(
                "div",
                W2,
                K(p.$t("settings.editorLineNumbersDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", U2, [
              F(l(S1), {
                "model-value": l(n).editorLineNumbers,
                "active-text": p.$t("common.on"),
                "inactive-text": p.$t("common.off"),
                onChange: d
              }, null, 8, ["model-value", "active-text", "inactive-text"])
            ])
          ]),
          H(" 编辑器行距 "),
          b("section", K2, [
            b("div", G2, [
              b(
                "div",
                Z2,
                K(p.$t("settings.editorLineHeight")),
                1
                /* TEXT */
              ),
              b(
                "div",
                Y2,
                K(p.$t("settings.editorLineHeightDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", q2, [
              F(m, {
                modelValue: l(r),
                "onUpdate:modelValue": v[0] || (v[0] = ($) => Yn(r) ? r.value = $ : null),
                min: 1.2,
                max: 2,
                step: 0.05,
                "show-tooltip": !1,
                onChange: f
              }, null, 8, ["modelValue"]),
              b(
                "span",
                J2,
                K(l(r).toFixed(2)),
                1
                /* TEXT */
              )
            ])
          ]),
          H(" 附件路径模板 "),
          b("section", X2, [
            b("div", Q2, [
              b(
                "div",
                e_,
                K(p.$t("settings.attachment.pathTemplate")),
                1
                /* TEXT */
              ),
              b(
                "div",
                t_,
                K(p.$t("settings.attachment.pathTemplateHint")),
                1
                /* TEXT */
              )
            ]),
            b("div", n_, [
              F(h, {
                class: "summarize-input",
                modelValue: l(o).pathTemplate,
                "onUpdate:modelValue": v[1] || (v[1] = ($) => l(o).pathTemplate = $),
                placeholder: p.$t("settings.attachment.pathTemplatePlaceholder"),
                disabled: l(s),
                onBlur: c
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          H(" 文件名生成格式 "),
          b("section", o_, [
            b("div", a_, [
              b(
                "div",
                r_,
                K(p.$t("settings.attachment.filenameFormat")),
                1
                /* TEXT */
              ),
              b(
                "div",
                s_,
                K(p.$t("settings.attachment.filenameFormatHint")),
                1
                /* TEXT */
              )
            ]),
            b("div", i_, [
              F(g, {
                class: "summarize-input !w-64",
                modelValue: l(o).filenameFormat,
                "onUpdate:modelValue": v[2] || (v[2] = ($) => l(o).filenameFormat = $),
                disabled: l(s),
                onChange: c
              }, {
                default: Z(() => [
                  F(k, {
                    label: p.$t("settings.attachment.formatObsidian"),
                    value: "obsidian"
                  }, null, 8, ["label"]),
                  F(k, {
                    label: p.$t("settings.attachment.formatSimple"),
                    value: "simple"
                  }, null, 8, ["label"]),
                  F(k, {
                    label: p.$t("settings.attachment.formatUuid"),
                    value: "uuid"
                  }, null, 8, ["label"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "disabled"])
            ])
          ]),
          H(" 路径预览 "),
          b("section", l_, [
            b("div", u_, [
              b(
                "div",
                c_,
                K(p.$t("settings.attachment.pathPreview")),
                1
                /* TEXT */
              ),
              b(
                "div",
                d_,
                K(p.$t("settings.attachment.pathPreviewHint")),
                1
                /* TEXT */
              )
            ]),
            b("div", f_, [
              b("div", p_, [
                b(
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
}), v_ = /* @__PURE__ */ yo(m_, [["__scopeId", "data-v-5c6becef"]]), h_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: v_
}, Symbol.toStringTag, { value: "Module" }));
export {
  w_ as activate
};
