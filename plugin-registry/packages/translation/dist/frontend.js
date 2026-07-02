import * as ku from "vue";
import { inject as he, createVNode as F, defineAsyncComponent as Xa, getCurrentInstance as De, ref as A, computed as y, unref as l, shallowRef as Ut, watchEffect as bi, readonly as Qa, getCurrentScope as Cu, onScopeDispose as Tu, onMounted as Ee, nextTick as ke, watch as re, isRef as Zn, warn as Eu, provide as ct, defineComponent as U, createElementBlock as R, openBlock as _, mergeProps as Kt, renderSlot as ae, createElementVNode as b, toRef as ht, onUnmounted as wi, useAttrs as Pu, useSlots as Ou, normalizeStyle as be, normalizeClass as M, createCommentVNode as j, Fragment as Oe, createBlock as J, withCtx as q, resolveDynamicComponent as et, withModifiers as Pe, toDisplayString as G, onBeforeUnmount as wt, Transition as Rn, withDirectives as Ue, vShow as It, reactive as Lt, onActivated as $u, onUpdated as _i, cloneVNode as Iu, Text as Lu, Comment as xu, Teleport as Ru, onBeforeMount as Au, onDeactivated as Mu, createTextVNode as Qt, withKeys as Ct, createSlots as Nu, toRaw as zu, toRefs as Sn, resolveComponent as Jt, resolveDirective as Fu, toHandlerKey as Bu, renderList as tt, vModelText as Vu, normalizeProps as Du, h as Si, shallowReactive as Hu, isVNode as no, render as Fo, markRaw as Dr } from "vue";
import * as ju from "vue-i18n";
import { useI18n as er } from "vue-i18n";
import * as Wu from "pinia";
import { defineStore as co } from "pinia";
import * as Uu from "vue-router";
var Ku = {
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
function Gu() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Zu(e, t, n) {
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
var Yu = Symbol("icon-context");
function ft(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(s) {
      var r = Gu(), i = he(Yu, Ku);
      return function() {
        var u = s.size, c = s.strokeWidth, d = s.strokeLinecap, f = s.strokeLinejoin, p = s.theme, m = s.fill, v = s.spin, h = Zu(r, {
          size: u,
          strokeWidth: c,
          strokeLinecap: d,
          strokeLinejoin: f,
          theme: p,
          fill: m
        }, i), S = [i.prefix + "-icon"];
        return S.push(i.prefix + "-icon-" + e), t && i.rtl && S.push(i.prefix + "-icon-rtl"), v && S.push(i.prefix + "-icon-spin"), F("span", {
          class: S.join(" ")
        }, [n(h)]);
      };
    }
  };
  return o;
}
const qu = ft("close-small", !1, function(e) {
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
}), Ju = ft("copy", !0, function(e) {
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
}), Xu = ft("delete", !1, function(e) {
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
}), Qu = ft("down", !1, function(e) {
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
}), ec = ft("folder-open", !0, function(e) {
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
}), tc = ft("pushpin", !1, function(e) {
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
}), nc = ft("setting-two", !1, function(e) {
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
}), Hr = ft("switch", !0, function(e) {
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
}), oc = ft("translate", !0, function(e) {
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
}), ac = ft("up", !1, function(e) {
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
}), jr = ft("volume-up", !0, function(e) {
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
}), b_ = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/translate",
    name: "Translate",
    component: () => Promise.resolve().then(() => h1)
  }), e.registerSettingsTab({
    id: "translation",
    labelKey: "translation.title",
    icon: oc,
    component: Xa(() => Promise.resolve().then(() => M2))
  });
}, ki = Symbol(), Lo = "el", rc = "is-", Xt = (e, t, n, o, a) => {
  let s = `${e}-${t}`;
  return n && (s += `-${n}`), o && (s += `__${o}`), a && (s += `--${a}`), s;
}, Ci = Symbol("namespaceContextKey"), tr = (e) => {
  const t = e || (De() ? he(Ci, A(Lo)) : A(Lo));
  return y(() => l(t) || Lo);
}, Ce = (e, t) => {
  const n = tr(t);
  return {
    namespace: n,
    b: (h = "") => Xt(n.value, e, h, "", ""),
    e: (h) => h ? Xt(n.value, e, "", h, "") : "",
    m: (h) => h ? Xt(n.value, e, "", "", h) : "",
    be: (h, S) => h && S ? Xt(n.value, e, h, S, "") : "",
    em: (h, S) => h && S ? Xt(n.value, e, "", h, S) : "",
    bm: (h, S) => h && S ? Xt(n.value, e, h, "", S) : "",
    bem: (h, S, g) => h && S && g ? Xt(n.value, e, h, S, g) : "",
    is: (h, ...S) => {
      const g = S.length >= 1 ? S[0] : !0;
      return h && g ? `${rc}${h}` : "";
    },
    cssVar: (h) => {
      const S = {};
      for (const g in h)
        h[g] && (S[`--${n.value}-${g}`] = h[g]);
      return S;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const S = {};
      for (const g in h)
        h[g] && (S[`--${n.value}-${e}-${g}`] = h[g]);
      return S;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const oo = () => {
}, sc = Object.prototype.hasOwnProperty, Wr = (e, t) => sc.call(e, t), Be = Array.isArray, $e = (e) => typeof e == "function", Ne = (e) => typeof e == "string", We = (e) => e !== null && typeof e == "object", ic = Object.prototype.toString, lc = (e) => ic.call(e), uc = (e) => lc(e) === "[object Object]";
var Ti = typeof global == "object" && global && global.Object === Object && global, cc = typeof self == "object" && self && self.Object === Object && self, _t = Ti || cc || Function("return this")(), yt = _t.Symbol, Ei = Object.prototype, dc = Ei.hasOwnProperty, fc = Ei.toString, Bn = yt ? yt.toStringTag : void 0;
function pc(e) {
  var t = dc.call(e, Bn), n = e[Bn];
  try {
    e[Bn] = void 0;
    var o = !0;
  } catch {
  }
  var a = fc.call(e);
  return o && (t ? e[Bn] = n : delete e[Bn]), a;
}
var mc = Object.prototype, vc = mc.toString;
function hc(e) {
  return vc.call(e);
}
var gc = "[object Null]", yc = "[object Undefined]", Ur = yt ? yt.toStringTag : void 0;
function An(e) {
  return e == null ? e === void 0 ? yc : gc : Ur && Ur in Object(e) ? pc(e) : hc(e);
}
function kn(e) {
  return e != null && typeof e == "object";
}
var bc = "[object Symbol]";
function na(e) {
  return typeof e == "symbol" || kn(e) && An(e) == bc;
}
function wc(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = Array(o); ++n < o; )
    a[n] = t(e[n], n, e);
  return a;
}
var dt = Array.isArray, Kr = yt ? yt.prototype : void 0, Gr = Kr ? Kr.toString : void 0;
function Pi(e) {
  if (typeof e == "string")
    return e;
  if (dt(e))
    return wc(e, Pi) + "";
  if (na(e))
    return Gr ? Gr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var _c = /\s/;
function Sc(e) {
  for (var t = e.length; t-- && _c.test(e.charAt(t)); )
    ;
  return t;
}
var kc = /^\s+/;
function Cc(e) {
  return e && e.slice(0, Sc(e) + 1).replace(kc, "");
}
function Gt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Zr = NaN, Tc = /^[-+]0x[0-9a-f]+$/i, Ec = /^0b[01]+$/i, Pc = /^0o[0-7]+$/i, Oc = parseInt;
function Yr(e) {
  if (typeof e == "number")
    return e;
  if (na(e))
    return Zr;
  if (Gt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Gt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Cc(e);
  var n = Ec.test(e);
  return n || Pc.test(e) ? Oc(e.slice(2), n ? 2 : 8) : Tc.test(e) ? Zr : +e;
}
function Oi(e) {
  return e;
}
var $c = "[object AsyncFunction]", Ic = "[object Function]", Lc = "[object GeneratorFunction]", xc = "[object Proxy]";
function $i(e) {
  if (!Gt(e))
    return !1;
  var t = An(e);
  return t == Ic || t == Lc || t == $c || t == xc;
}
var ga = _t["__core-js_shared__"], qr = function() {
  var e = /[^.]+$/.exec(ga && ga.keys && ga.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Rc(e) {
  return !!qr && qr in e;
}
var Ac = Function.prototype, Mc = Ac.toString;
function on(e) {
  if (e != null) {
    try {
      return Mc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Nc = /[\\^$.*+?()[\]{}|]/g, zc = /^\[object .+?Constructor\]$/, Fc = Function.prototype, Bc = Object.prototype, Vc = Fc.toString, Dc = Bc.hasOwnProperty, Hc = RegExp(
  "^" + Vc.call(Dc).replace(Nc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jc(e) {
  if (!Gt(e) || Rc(e))
    return !1;
  var t = $i(e) ? Hc : zc;
  return t.test(on(e));
}
function Wc(e, t) {
  return e?.[t];
}
function an(e, t) {
  var n = Wc(e, t);
  return jc(n) ? n : void 0;
}
var xa = an(_t, "WeakMap");
function Uc(e, t, n) {
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
var Kc = 800, Gc = 16, Zc = Date.now;
function Yc(e) {
  var t = 0, n = 0;
  return function() {
    var o = Zc(), a = Gc - (o - n);
    if (n = o, a > 0) {
      if (++t >= Kc)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function qc(e) {
  return function() {
    return e;
  };
}
var Bo = function() {
  try {
    var e = an(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Jc = Bo ? function(e, t) {
  return Bo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: qc(t),
    writable: !0
  });
} : Oi, Xc = Yc(Jc);
function Qc(e, t, n, o) {
  e.length;
  for (var a = n + 1; a--; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var ed = 9007199254740991, td = /^(?:0|[1-9]\d*)$/;
function nr(e, t) {
  var n = typeof e;
  return t = t ?? ed, !!t && (n == "number" || n != "symbol" && td.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function nd(e, t, n) {
  t == "__proto__" && Bo ? Bo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function or(e, t) {
  return e === t || e !== e && t !== t;
}
var od = Object.prototype, ad = od.hasOwnProperty;
function rd(e, t, n) {
  var o = e[t];
  (!(ad.call(e, t) && or(o, n)) || n === void 0 && !(t in e)) && nd(e, t, n);
}
var Jr = Math.max;
function sd(e, t, n) {
  return t = Jr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, a = -1, s = Jr(o.length - t, 0), r = Array(s); ++a < s; )
      r[a] = o[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = o[a];
    return i[t] = n(r), Uc(e, this, i);
  };
}
var id = 9007199254740991;
function ar(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= id;
}
function ld(e) {
  return e != null && ar(e.length) && !$i(e);
}
var ud = Object.prototype;
function cd(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || ud;
  return e === n;
}
function dd(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var fd = "[object Arguments]";
function Xr(e) {
  return kn(e) && An(e) == fd;
}
var Ii = Object.prototype, pd = Ii.hasOwnProperty, md = Ii.propertyIsEnumerable, rr = Xr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Xr : function(e) {
  return kn(e) && pd.call(e, "callee") && !md.call(e, "callee");
};
function vd() {
  return !1;
}
var Li = typeof exports == "object" && exports && !exports.nodeType && exports, Qr = Li && typeof module == "object" && module && !module.nodeType && module, hd = Qr && Qr.exports === Li, es = hd ? _t.Buffer : void 0, gd = es ? es.isBuffer : void 0, Ra = gd || vd, yd = "[object Arguments]", bd = "[object Array]", wd = "[object Boolean]", _d = "[object Date]", Sd = "[object Error]", kd = "[object Function]", Cd = "[object Map]", Td = "[object Number]", Ed = "[object Object]", Pd = "[object RegExp]", Od = "[object Set]", $d = "[object String]", Id = "[object WeakMap]", Ld = "[object ArrayBuffer]", xd = "[object DataView]", Rd = "[object Float32Array]", Ad = "[object Float64Array]", Md = "[object Int8Array]", Nd = "[object Int16Array]", zd = "[object Int32Array]", Fd = "[object Uint8Array]", Bd = "[object Uint8ClampedArray]", Vd = "[object Uint16Array]", Dd = "[object Uint32Array]", Se = {};
Se[Rd] = Se[Ad] = Se[Md] = Se[Nd] = Se[zd] = Se[Fd] = Se[Bd] = Se[Vd] = Se[Dd] = !0;
Se[yd] = Se[bd] = Se[Ld] = Se[wd] = Se[xd] = Se[_d] = Se[Sd] = Se[kd] = Se[Cd] = Se[Td] = Se[Ed] = Se[Pd] = Se[Od] = Se[$d] = Se[Id] = !1;
function Hd(e) {
  return kn(e) && ar(e.length) && !!Se[An(e)];
}
function jd(e) {
  return function(t) {
    return e(t);
  };
}
var xi = typeof exports == "object" && exports && !exports.nodeType && exports, Yn = xi && typeof module == "object" && module && !module.nodeType && module, Wd = Yn && Yn.exports === xi, ya = Wd && Ti.process, ts = function() {
  try {
    var e = Yn && Yn.require && Yn.require("util").types;
    return e || ya && ya.binding && ya.binding("util");
  } catch {
  }
}(), ns = ts && ts.isTypedArray, Ri = ns ? jd(ns) : Hd, Ud = Object.prototype, Kd = Ud.hasOwnProperty;
function Gd(e, t) {
  var n = dt(e), o = !n && rr(e), a = !n && !o && Ra(e), s = !n && !o && !a && Ri(e), r = n || o || a || s, i = r ? dd(e.length, String) : [], u = i.length;
  for (var c in e)
    Kd.call(e, c) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    nr(c, u))) && i.push(c);
  return i;
}
function Zd(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Yd = Zd(Object.keys, Object), qd = Object.prototype, Jd = qd.hasOwnProperty;
function Xd(e) {
  if (!cd(e))
    return Yd(e);
  var t = [];
  for (var n in Object(e))
    Jd.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ai(e) {
  return ld(e) ? Gd(e) : Xd(e);
}
var Qd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ef = /^\w*$/;
function sr(e, t) {
  if (dt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || na(e) ? !0 : ef.test(e) || !Qd.test(e) || t != null && e in Object(t);
}
var ao = an(Object, "create");
function tf() {
  this.__data__ = ao ? ao(null) : {}, this.size = 0;
}
function nf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var of = "__lodash_hash_undefined__", af = Object.prototype, rf = af.hasOwnProperty;
function sf(e) {
  var t = this.__data__;
  if (ao) {
    var n = t[e];
    return n === of ? void 0 : n;
  }
  return rf.call(t, e) ? t[e] : void 0;
}
var lf = Object.prototype, uf = lf.hasOwnProperty;
function cf(e) {
  var t = this.__data__;
  return ao ? t[e] !== void 0 : uf.call(t, e);
}
var df = "__lodash_hash_undefined__";
function ff(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ao && t === void 0 ? df : t, this;
}
function tn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
tn.prototype.clear = tf;
tn.prototype.delete = nf;
tn.prototype.get = sf;
tn.prototype.has = cf;
tn.prototype.set = ff;
function pf() {
  this.__data__ = [], this.size = 0;
}
function oa(e, t) {
  for (var n = e.length; n--; )
    if (or(e[n][0], t))
      return n;
  return -1;
}
var mf = Array.prototype, vf = mf.splice;
function hf(e) {
  var t = this.__data__, n = oa(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : vf.call(t, n, 1), --this.size, !0;
}
function gf(e) {
  var t = this.__data__, n = oa(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function yf(e) {
  return oa(this.__data__, e) > -1;
}
function bf(e, t) {
  var n = this.__data__, o = oa(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Rt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Rt.prototype.clear = pf;
Rt.prototype.delete = hf;
Rt.prototype.get = gf;
Rt.prototype.has = yf;
Rt.prototype.set = bf;
var ro = an(_t, "Map");
function wf() {
  this.size = 0, this.__data__ = {
    hash: new tn(),
    map: new (ro || Rt)(),
    string: new tn()
  };
}
function _f(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function aa(e, t) {
  var n = e.__data__;
  return _f(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Sf(e) {
  var t = aa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function kf(e) {
  return aa(this, e).get(e);
}
function Cf(e) {
  return aa(this, e).has(e);
}
function Tf(e, t) {
  var n = aa(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function At(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
At.prototype.clear = wf;
At.prototype.delete = Sf;
At.prototype.get = kf;
At.prototype.has = Cf;
At.prototype.set = Tf;
var Ef = "Expected a function";
function ir(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ef);
  var n = function() {
    var o = arguments, a = t ? t.apply(this, o) : o[0], s = n.cache;
    if (s.has(a))
      return s.get(a);
    var r = e.apply(this, o);
    return n.cache = s.set(a, r) || s, r;
  };
  return n.cache = new (ir.Cache || At)(), n;
}
ir.Cache = At;
var Pf = 500;
function Of(e) {
  var t = ir(e, function(o) {
    return n.size === Pf && n.clear(), o;
  }), n = t.cache;
  return t;
}
var $f = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, If = /\\(\\)?/g, Lf = Of(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace($f, function(n, o, a, s) {
    t.push(a ? s.replace(If, "$1") : o || n);
  }), t;
});
function xf(e) {
  return e == null ? "" : Pi(e);
}
function ra(e, t) {
  return dt(e) ? e : sr(e, t) ? [e] : Lf(xf(e));
}
function fo(e) {
  if (typeof e == "string" || na(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function lr(e, t) {
  t = ra(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[fo(t[n++])];
  return n && n == o ? e : void 0;
}
function Wt(e, t, n) {
  var o = e == null ? void 0 : lr(e, t);
  return o === void 0 ? n : o;
}
function Mi(e, t) {
  for (var n = -1, o = t.length, a = e.length; ++n < o; )
    e[a + n] = t[n];
  return e;
}
var os = yt ? yt.isConcatSpreadable : void 0;
function Rf(e) {
  return dt(e) || rr(e) || !!(os && e && e[os]);
}
function Af(e, t, n, o, a) {
  var s = -1, r = e.length;
  for (n || (n = Rf), a || (a = []); ++s < r; ) {
    var i = e[s];
    n(i) ? Mi(a, i) : a[a.length] = i;
  }
  return a;
}
function Mf(e) {
  var t = e == null ? 0 : e.length;
  return t ? Af(e) : [];
}
function Nf(e) {
  return Xc(sd(e, void 0, Mf), e + "");
}
function jt() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return dt(e) ? e : [e];
}
function zf() {
  this.__data__ = new Rt(), this.size = 0;
}
function Ff(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Bf(e) {
  return this.__data__.get(e);
}
function Vf(e) {
  return this.__data__.has(e);
}
var Df = 200;
function Hf(e, t) {
  var n = this.__data__;
  if (n instanceof Rt) {
    var o = n.__data__;
    if (!ro || o.length < Df - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new At(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Pt(e) {
  var t = this.__data__ = new Rt(e);
  this.size = t.size;
}
Pt.prototype.clear = zf;
Pt.prototype.delete = Ff;
Pt.prototype.get = Bf;
Pt.prototype.has = Vf;
Pt.prototype.set = Hf;
function jf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = 0, s = []; ++n < o; ) {
    var r = e[n];
    t(r, n, e) && (s[a++] = r);
  }
  return s;
}
function Wf() {
  return [];
}
var Uf = Object.prototype, Kf = Uf.propertyIsEnumerable, as = Object.getOwnPropertySymbols, Gf = as ? function(e) {
  return e == null ? [] : (e = Object(e), jf(as(e), function(t) {
    return Kf.call(e, t);
  }));
} : Wf;
function Zf(e, t, n) {
  var o = t(e);
  return dt(e) ? o : Mi(o, n(e));
}
function rs(e) {
  return Zf(e, Ai, Gf);
}
var Aa = an(_t, "DataView"), Ma = an(_t, "Promise"), Na = an(_t, "Set"), ss = "[object Map]", Yf = "[object Object]", is = "[object Promise]", ls = "[object Set]", us = "[object WeakMap]", cs = "[object DataView]", qf = on(Aa), Jf = on(ro), Xf = on(Ma), Qf = on(Na), ep = on(xa), Vt = An;
(Aa && Vt(new Aa(new ArrayBuffer(1))) != cs || ro && Vt(new ro()) != ss || Ma && Vt(Ma.resolve()) != is || Na && Vt(new Na()) != ls || xa && Vt(new xa()) != us) && (Vt = function(e) {
  var t = An(e), n = t == Yf ? e.constructor : void 0, o = n ? on(n) : "";
  if (o)
    switch (o) {
      case qf:
        return cs;
      case Jf:
        return ss;
      case Xf:
        return is;
      case Qf:
        return ls;
      case ep:
        return us;
    }
  return t;
});
var ds = _t.Uint8Array, tp = "__lodash_hash_undefined__";
function np(e) {
  return this.__data__.set(e, tp), this;
}
function op(e) {
  return this.__data__.has(e);
}
function Vo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new At(); ++t < n; )
    this.add(e[t]);
}
Vo.prototype.add = Vo.prototype.push = np;
Vo.prototype.has = op;
function ap(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function rp(e, t) {
  return e.has(t);
}
var sp = 1, ip = 2;
function Ni(e, t, n, o, a, s) {
  var r = n & sp, i = e.length, u = t.length;
  if (i != u && !(r && u > i))
    return !1;
  var c = s.get(e), d = s.get(t);
  if (c && d)
    return c == t && d == e;
  var f = -1, p = !0, m = n & ip ? new Vo() : void 0;
  for (s.set(e, t), s.set(t, e); ++f < i; ) {
    var v = e[f], h = t[f];
    if (o)
      var S = r ? o(h, v, f, t, e, s) : o(v, h, f, e, t, s);
    if (S !== void 0) {
      if (S)
        continue;
      p = !1;
      break;
    }
    if (m) {
      if (!ap(t, function(g, P) {
        if (!rp(m, P) && (v === g || a(v, g, n, o, s)))
          return m.push(P);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === h || a(v, h, n, o, s))) {
      p = !1;
      break;
    }
  }
  return s.delete(e), s.delete(t), p;
}
function lp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, a) {
    n[++t] = [a, o];
  }), n;
}
function up(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var cp = 1, dp = 2, fp = "[object Boolean]", pp = "[object Date]", mp = "[object Error]", vp = "[object Map]", hp = "[object Number]", gp = "[object RegExp]", yp = "[object Set]", bp = "[object String]", wp = "[object Symbol]", _p = "[object ArrayBuffer]", Sp = "[object DataView]", fs = yt ? yt.prototype : void 0, ba = fs ? fs.valueOf : void 0;
function kp(e, t, n, o, a, s, r) {
  switch (n) {
    case Sp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case _p:
      return !(e.byteLength != t.byteLength || !s(new ds(e), new ds(t)));
    case fp:
    case pp:
    case hp:
      return or(+e, +t);
    case mp:
      return e.name == t.name && e.message == t.message;
    case gp:
    case bp:
      return e == t + "";
    case vp:
      var i = lp;
    case yp:
      var u = o & cp;
      if (i || (i = up), e.size != t.size && !u)
        return !1;
      var c = r.get(e);
      if (c)
        return c == t;
      o |= dp, r.set(e, t);
      var d = Ni(i(e), i(t), o, a, s, r);
      return r.delete(e), d;
    case wp:
      if (ba)
        return ba.call(e) == ba.call(t);
  }
  return !1;
}
var Cp = 1, Tp = Object.prototype, Ep = Tp.hasOwnProperty;
function Pp(e, t, n, o, a, s) {
  var r = n & Cp, i = rs(e), u = i.length, c = rs(t), d = c.length;
  if (u != d && !r)
    return !1;
  for (var f = u; f--; ) {
    var p = i[f];
    if (!(r ? p in t : Ep.call(t, p)))
      return !1;
  }
  var m = s.get(e), v = s.get(t);
  if (m && v)
    return m == t && v == e;
  var h = !0;
  s.set(e, t), s.set(t, e);
  for (var S = r; ++f < u; ) {
    p = i[f];
    var g = e[p], P = t[p];
    if (o)
      var k = r ? o(P, g, p, t, e, s) : o(g, P, p, e, t, s);
    if (!(k === void 0 ? g === P || a(g, P, n, o, s) : k)) {
      h = !1;
      break;
    }
    S || (S = p == "constructor");
  }
  if (h && !S) {
    var $ = e.constructor, E = t.constructor;
    $ != E && "constructor" in e && "constructor" in t && !(typeof $ == "function" && $ instanceof $ && typeof E == "function" && E instanceof E) && (h = !1);
  }
  return s.delete(e), s.delete(t), h;
}
var Op = 1, ps = "[object Arguments]", ms = "[object Array]", So = "[object Object]", $p = Object.prototype, vs = $p.hasOwnProperty;
function Ip(e, t, n, o, a, s) {
  var r = dt(e), i = dt(t), u = r ? ms : Vt(e), c = i ? ms : Vt(t);
  u = u == ps ? So : u, c = c == ps ? So : c;
  var d = u == So, f = c == So, p = u == c;
  if (p && Ra(e)) {
    if (!Ra(t))
      return !1;
    r = !0, d = !1;
  }
  if (p && !d)
    return s || (s = new Pt()), r || Ri(e) ? Ni(e, t, n, o, a, s) : kp(e, t, u, n, o, a, s);
  if (!(n & Op)) {
    var m = d && vs.call(e, "__wrapped__"), v = f && vs.call(t, "__wrapped__");
    if (m || v) {
      var h = m ? e.value() : e, S = v ? t.value() : t;
      return s || (s = new Pt()), a(h, S, n, o, s);
    }
  }
  return p ? (s || (s = new Pt()), Pp(e, t, n, o, a, s)) : !1;
}
function sa(e, t, n, o, a) {
  return e === t ? !0 : e == null || t == null || !kn(e) && !kn(t) ? e !== e && t !== t : Ip(e, t, n, o, sa, a);
}
var Lp = 1, xp = 2;
function Rp(e, t, n, o) {
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
      var d = new Pt(), f;
      if (!(f === void 0 ? sa(c, u, Lp | xp, o, d) : f))
        return !1;
    }
  }
  return !0;
}
function zi(e) {
  return e === e && !Gt(e);
}
function Ap(e) {
  for (var t = Ai(e), n = t.length; n--; ) {
    var o = t[n], a = e[o];
    t[n] = [o, a, zi(a)];
  }
  return t;
}
function Fi(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Mp(e) {
  var t = Ap(e);
  return t.length == 1 && t[0][2] ? Fi(t[0][0], t[0][1]) : function(n) {
    return n === e || Rp(n, e, t);
  };
}
function Np(e, t) {
  return e != null && t in Object(e);
}
function zp(e, t, n) {
  t = ra(t, e);
  for (var o = -1, a = t.length, s = !1; ++o < a; ) {
    var r = fo(t[o]);
    if (!(s = e != null && n(e, r)))
      break;
    e = e[r];
  }
  return s || ++o != a ? s : (a = e == null ? 0 : e.length, !!a && ar(a) && nr(r, a) && (dt(e) || rr(e)));
}
function Bi(e, t) {
  return e != null && zp(e, t, Np);
}
var Fp = 1, Bp = 2;
function Vp(e, t) {
  return sr(e) && zi(t) ? Fi(fo(e), t) : function(n) {
    var o = Wt(n, e);
    return o === void 0 && o === t ? Bi(n, e) : sa(t, o, Fp | Bp);
  };
}
function Dp(e) {
  return function(t) {
    return t?.[e];
  };
}
function Hp(e) {
  return function(t) {
    return lr(t, e);
  };
}
function jp(e) {
  return sr(e) ? Dp(fo(e)) : Hp(e);
}
function Wp(e) {
  return typeof e == "function" ? e : e == null ? Oi : typeof e == "object" ? dt(e) ? Vp(e[0], e[1]) : Mp(e) : jp(e);
}
var wa = function() {
  return _t.Date.now();
}, Up = "Expected a function", Kp = Math.max, Gp = Math.min;
function za(e, t, n) {
  var o, a, s, r, i, u, c = 0, d = !1, f = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Up);
  t = Yr(t) || 0, Gt(n) && (d = !!n.leading, f = "maxWait" in n, s = f ? Kp(Yr(n.maxWait) || 0, t) : s, p = "trailing" in n ? !!n.trailing : p);
  function m(L) {
    var I = o, Z = a;
    return o = a = void 0, c = L, r = e.apply(Z, I), r;
  }
  function v(L) {
    return c = L, i = setTimeout(g, t), d ? m(L) : r;
  }
  function h(L) {
    var I = L - u, Z = L - c, K = t - I;
    return f ? Gp(K, s - Z) : K;
  }
  function S(L) {
    var I = L - u, Z = L - c;
    return u === void 0 || I >= t || I < 0 || f && Z >= s;
  }
  function g() {
    var L = wa();
    if (S(L))
      return P(L);
    i = setTimeout(g, h(L));
  }
  function P(L) {
    return i = void 0, p && o ? m(L) : (o = a = void 0, r);
  }
  function k() {
    i !== void 0 && clearTimeout(i), c = 0, o = u = a = i = void 0;
  }
  function $() {
    return i === void 0 ? r : P(wa());
  }
  function E() {
    var L = wa(), I = S(L);
    if (o = arguments, a = this, u = L, I) {
      if (i === void 0)
        return v(u);
      if (f)
        return clearTimeout(i), i = setTimeout(g, t), m(u);
    }
    return i === void 0 && (i = setTimeout(g, t)), r;
  }
  return E.cancel = k, E.flush = $, E;
}
function Zp(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var a = o - 1;
  return Qc(e, Wp(t), a);
}
function Do(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var a = e[t];
    o[a[0]] = a[1];
  }
  return o;
}
function qn(e, t) {
  return sa(e, t);
}
function Ot(e) {
  return e == null;
}
function Yp(e) {
  return e === void 0;
}
function qp(e, t, n, o) {
  if (!Gt(e))
    return e;
  t = ra(t, e);
  for (var a = -1, s = t.length, r = s - 1, i = e; i != null && ++a < s; ) {
    var u = fo(t[a]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != r) {
      var d = i[u];
      c = void 0, c === void 0 && (c = Gt(d) ? d : nr(t[a + 1]) ? [] : {});
    }
    rd(i, u, c), i = i[u];
  }
  return e;
}
function Jp(e, t, n) {
  for (var o = -1, a = t.length, s = {}; ++o < a; ) {
    var r = t[o], i = lr(e, r);
    n(i, r) && qp(s, ra(r, e), i);
  }
  return s;
}
function Xp(e, t) {
  return Jp(e, t, function(n, o) {
    return Bi(e, o);
  });
}
var Qp = Nf(function(e, t) {
  return e == null ? {} : Xp(e, t);
});
const it = (e) => e === void 0, Ho = (e) => typeof e == "boolean", pe = (e) => typeof e == "number", ut = (e) => typeof Element > "u" ? !1 : e instanceof Element, em = (e) => Ne(e) ? !Number.isNaN(Number(e)) : !1;
var tm = Object.defineProperty, nm = Object.defineProperties, om = Object.getOwnPropertyDescriptors, hs = Object.getOwnPropertySymbols, am = Object.prototype.hasOwnProperty, rm = Object.prototype.propertyIsEnumerable, gs = (e, t, n) => t in e ? tm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, sm = (e, t) => {
  for (var n in t || (t = {}))
    am.call(t, n) && gs(e, n, t[n]);
  if (hs)
    for (var n of hs(t))
      rm.call(t, n) && gs(e, n, t[n]);
  return e;
}, im = (e, t) => nm(e, om(t));
function lm(e, t) {
  var n;
  const o = Ut();
  return bi(() => {
    o.value = e();
  }, im(sm({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Qa(o);
}
var ys;
const Le = typeof window < "u", um = (e) => typeof e == "string", Vi = () => {
}, Fa = Le && ((ys = window?.navigator) == null ? void 0 : ys.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ur(e) {
  return typeof e == "function" ? e() : l(e);
}
function cm(e) {
  return e;
}
function po(e) {
  return Cu() ? (Tu(e), !0) : !1;
}
function dm(e, t = !0) {
  De() ? Ee(e) : t ? e() : ke(e);
}
function Di(e, t, n = {}) {
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
  return o && (a.value = !0, Le && u()), po(i), {
    isPending: Qa(a),
    start: u,
    stop: i
  };
}
function Tt(e) {
  var t;
  const n = ur(e);
  return (t = n?.$el) != null ? t : n;
}
const ia = Le ? window : void 0;
function Ve(...e) {
  let t, n, o, a;
  if (um(e[0]) || Array.isArray(e[0]) ? ([n, o, a] = e, t = ia) : [t, n, o, a] = e, !t)
    return Vi;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], r = () => {
    s.forEach((d) => d()), s.length = 0;
  }, i = (d, f, p, m) => (d.addEventListener(f, p, m), () => d.removeEventListener(f, p, m)), u = re(() => [Tt(t), ur(a)], ([d, f]) => {
    r(), d && s.push(...n.flatMap((p) => o.map((m) => i(d, p, m, f))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), r();
  };
  return po(c), c;
}
let bs = !1;
function fm(e, t, n = {}) {
  const { window: o = ia, ignore: a = [], capture: s = !0, detectIframe: r = !1 } = n;
  if (!o)
    return;
  Fa && !bs && (bs = !0, Array.from(o.document.body.children).forEach((p) => p.addEventListener("click", Vi)));
  let i = !0;
  const u = (p) => a.some((m) => {
    if (typeof m == "string")
      return Array.from(o.document.querySelectorAll(m)).some((v) => v === p.target || p.composedPath().includes(v));
    {
      const v = Tt(m);
      return v && (p.target === v || p.composedPath().includes(v));
    }
  }), d = [
    Ve(o, "click", (p) => {
      const m = Tt(e);
      if (!(!m || m === p.target || p.composedPath().includes(m))) {
        if (p.detail === 0 && (i = !u(p)), !i) {
          i = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: s }),
    Ve(o, "pointerdown", (p) => {
      const m = Tt(e);
      m && (i = !p.composedPath().includes(m) && !u(p));
    }, { passive: !0 }),
    r && Ve(o, "blur", (p) => {
      var m;
      const v = Tt(e);
      ((m = o.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !v?.contains(o.document.activeElement) && t(p);
    })
  ].filter(Boolean);
  return () => d.forEach((p) => p());
}
function Hi(e, t = !1) {
  const n = A(), o = () => n.value = !!e();
  return o(), dm(o, t), n;
}
const ws = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _s = "__vueuse_ssr_handlers__";
ws[_s] = ws[_s] || {};
var Ss = Object.getOwnPropertySymbols, pm = Object.prototype.hasOwnProperty, mm = Object.prototype.propertyIsEnumerable, vm = (e, t) => {
  var n = {};
  for (var o in e)
    pm.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Ss)
    for (var o of Ss(e))
      t.indexOf(o) < 0 && mm.call(e, o) && (n[o] = e[o]);
  return n;
};
function vt(e, t, n = {}) {
  const o = n, { window: a = ia } = o, s = vm(o, ["window"]);
  let r;
  const i = Hi(() => a && "ResizeObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, c = re(() => Tt(e), (f) => {
    u(), i.value && a && f && (r = new ResizeObserver(t), r.observe(f, s));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), c();
  };
  return po(d), {
    isSupported: i,
    stop: d
  };
}
var ks = Object.getOwnPropertySymbols, hm = Object.prototype.hasOwnProperty, gm = Object.prototype.propertyIsEnumerable, ym = (e, t) => {
  var n = {};
  for (var o in e)
    hm.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && ks)
    for (var o of ks(e))
      t.indexOf(o) < 0 && gm.call(e, o) && (n[o] = e[o]);
  return n;
};
function bm(e, t, n = {}) {
  const o = n, { window: a = ia } = o, s = ym(o, ["window"]);
  let r;
  const i = Hi(() => a && "MutationObserver" in a), u = () => {
    r && (r.disconnect(), r = void 0);
  }, c = re(() => Tt(e), (f) => {
    u(), i.value && a && f && (r = new MutationObserver(t), r.observe(f, s));
  }, { immediate: !0 }), d = () => {
    u(), c();
  };
  return po(d), {
    isSupported: i,
    stop: d
  };
}
var Cs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Cs || (Cs = {}));
var wm = Object.defineProperty, Ts = Object.getOwnPropertySymbols, _m = Object.prototype.hasOwnProperty, Sm = Object.prototype.propertyIsEnumerable, Es = (e, t, n) => t in e ? wm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, km = (e, t) => {
  for (var n in t || (t = {}))
    _m.call(t, n) && Es(e, n, t[n]);
  if (Ts)
    for (var n of Ts(t))
      Sm.call(t, n) && Es(e, n, t[n]);
  return e;
};
const Cm = {
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
km({
  linear: cm
}, Cm);
class Tm extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function cr(e, t) {
  throw new Tm(`[${e}] ${t}`);
}
const Ps = {
  current: 0
}, Os = A(0), ji = 2e3, $s = Symbol("elZIndexContextKey"), Wi = Symbol("zIndexContextKey"), Ui = (e) => {
  const t = De() ? he($s, Ps) : Ps, n = e || (De() ? he(Wi, void 0) : void 0), o = y(() => {
    const r = l(n);
    return pe(r) ? r : ji;
  }), a = y(() => o.value + Os.value), s = () => (t.current++, Os.value = t.current, a.value);
  return !Le && he($s), {
    initialZIndex: o,
    currentZIndex: a,
    nextZIndex: s
  };
};
var Em = {
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
const Pm = (e) => (t, n) => Om(t, n, l(e)), Om = (e, t, n) => Wt(n, e, e).replace(/\{(\w+)\}/g, (o, a) => {
  var s;
  return `${(s = t?.[a]) != null ? s : `{${a}}`}`;
}), $m = (e) => {
  const t = y(() => l(e).name), n = Zn(e) ? e : A(e);
  return {
    lang: t,
    locale: n,
    t: Pm(e)
  };
}, Ki = Symbol("localeContextKey"), la = (e) => {
  const t = e || he(Ki, A());
  return $m(y(() => t.value || Em));
}, Gi = "__epPropKey", te = (e) => e, Im = (e) => We(e) && !!e[Gi], ua = (e, t) => {
  if (!We(e) || Im(e))
    return e;
  const { values: n, required: o, default: a, type: s, validator: r } = e, u = {
    type: s,
    required: !!o,
    validator: n || r ? (c) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), Wr(e, "default") && f.push(a), d || (d = f.includes(c))), r && (d || (d = r(c))), !d && f.length > 0) {
        const p = [...new Set(f)].map((m) => JSON.stringify(m)).join(", ");
        Eu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [Gi]: !0
  };
  return Wr(e, "default") && (u.default = a), u;
}, ve = (e) => Do(Object.entries(e).map(([t, n]) => [
  t,
  ua(n, t)
])), Zi = ["", "default", "small", "large"], Cn = ua({
  type: String,
  values: Zi,
  required: !1
}), Yi = Symbol("size"), Lm = () => {
  const e = he(Yi, {});
  return y(() => l(e.size) || "");
}, qi = Symbol("emptyValuesContextKey"), xm = ["", void 0, null], Rm = void 0, Ji = ve({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => $e(e) ? !e() : !e
  }
}), Am = (e, t) => {
  const n = De() ? he(qi, A({})) : A({}), o = y(() => e.emptyValues || n.value.emptyValues || xm), a = y(() => $e(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : $e(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Rm), s = (r) => o.value.includes(r);
  return o.value.includes(a.value), {
    emptyValues: o,
    valueOnClear: a,
    isEmptyValue: s
  };
}, Is = (e) => Object.keys(e), jo = A();
function Xi(e, t = void 0) {
  return De() ? he(ki, jo) : jo;
}
function Qi(e, t) {
  const n = Xi(), o = Ce(e, y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Lo;
  })), a = la(y(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), s = Ui(y(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || ji;
  })), r = y(() => {
    var i;
    return l(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return el(y(() => l(n) || {})), {
    ns: o,
    locale: a,
    zIndex: s,
    size: r
  };
}
const el = (e, t, n = !1) => {
  var o;
  const a = !!De(), s = a ? Xi() : void 0, r = (o = void 0) != null ? o : a ? ct : void 0;
  if (!r)
    return;
  const i = y(() => {
    const u = l(e);
    return s?.value ? Mm(s.value, u) : u;
  });
  return r(ki, i), r(Ki, y(() => i.value.locale)), r(Ci, y(() => i.value.namespace)), r(Wi, y(() => i.value.zIndex)), r(Yi, {
    size: y(() => i.value.size || "")
  }), r(qi, y(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !jo.value) && (jo.value = i.value), i;
}, Mm = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Is(e), ...Is(t)])], o = {};
  for (const a of n)
    o[a] = t[a] !== void 0 ? t[a] : e[a];
  return o;
}, Ie = "update:modelValue", Zt = "change", $t = "input";
var we = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
};
function so(e, t = "px") {
  if (!e)
    return "";
  if (pe(e) || em(e))
    return `${e}${t}`;
  if (Ne(e))
    return e;
}
function Nm(e, t) {
  if (!Le)
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
const Je = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, tl = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), dr = (e) => (e.install = oo, e), zm = ve({
  size: {
    type: te([Number, String])
  },
  color: {
    type: String
  }
}), Fm = U({
  name: "ElIcon",
  inheritAttrs: !1
}), Bm = /* @__PURE__ */ U({
  ...Fm,
  props: zm,
  setup(e) {
    const t = e, n = Ce("icon"), o = y(() => {
      const { size: a, color: s } = t;
      return !a && !s ? {} : {
        fontSize: it(a) ? void 0 : so(a),
        "--color": s
      };
    });
    return (a, s) => (_(), R("i", Kt({
      class: l(n).b(),
      style: l(o)
    }, a.$attrs), [
      ae(a.$slots, "default")
    ], 16));
  }
});
var Vm = /* @__PURE__ */ we(Bm, [["__file", "icon.vue"]]);
const Fe = Je(Vm);
/*! Element Plus Icons Vue v2.3.1 */
var Dm = /* @__PURE__ */ U({
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
}), nl = Dm, Hm = /* @__PURE__ */ U({
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
}), jm = Hm, Wm = /* @__PURE__ */ U({
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
}), Um = Wm, Km = /* @__PURE__ */ U({
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
}), ol = Km, Gm = /* @__PURE__ */ U({
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
}), Zm = Gm, Ym = /* @__PURE__ */ U({
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
}), ca = Ym, qm = /* @__PURE__ */ U({
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
}), io = qm, Jm = /* @__PURE__ */ U({
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
}), Xm = Jm, Qm = /* @__PURE__ */ U({
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
}), ev = Qm, tv = /* @__PURE__ */ U({
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
}), nv = tv, ov = /* @__PURE__ */ U({
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
}), av = ov, rv = /* @__PURE__ */ U({
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
}), sv = rv, iv = /* @__PURE__ */ U({
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
}), lv = iv, uv = /* @__PURE__ */ U({
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
}), cv = uv, dv = /* @__PURE__ */ U({
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
}), fv = dv, pv = /* @__PURE__ */ U({
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
}), al = pv;
const Tn = te([
  String,
  Object,
  Function
]), mv = {
  Close: io
}, vv = {
  Close: io
}, Wo = {
  success: cv,
  warning: al,
  error: Zm,
  info: ev
}, rl = {
  validating: nv,
  success: ol,
  error: ca
}, sl = () => Le && /firefox/i.test(window.navigator.userAgent);
let je;
const hv = {
  height: "0",
  visibility: "hidden",
  overflow: sl() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, gv = [
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
function yv(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), a = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: gv.map((r) => [
    r,
    t.getPropertyValue(r)
  ]), paddingSize: o, borderSize: a, boxSizing: n };
}
function Ls(e, t = 1, n) {
  var o;
  je || (je = document.createElement("textarea"), document.body.appendChild(je));
  const { paddingSize: a, borderSize: s, boxSizing: r, contextStyle: i } = yv(e);
  i.forEach(([f, p]) => je?.style.setProperty(f, p)), Object.entries(hv).forEach(([f, p]) => je?.style.setProperty(f, p, "important")), je.value = e.value || e.placeholder || "";
  let u = je.scrollHeight;
  const c = {};
  r === "border-box" ? u = u + s : r === "content-box" && (u = u - a), je.value = "";
  const d = je.scrollHeight - a;
  if (pe(t)) {
    let f = d * t;
    r === "border-box" && (f = f + a + s), u = Math.max(f, u), c.minHeight = `${f}px`;
  }
  if (pe(n)) {
    let f = d * n;
    r === "border-box" && (f = f + a + s), u = Math.min(f, u);
  }
  return c.height = `${u}px`, (o = je.parentNode) == null || o.removeChild(je), je = void 0, c;
}
const il = (e) => e, bv = ve({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), rn = (e) => Qp(bv, e), wv = ve({
  id: {
    type: String,
    default: void 0
  },
  size: Cn,
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
    type: Tn
  },
  prefixIcon: {
    type: Tn
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
    default: () => il({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...rn(["ariaLabel"])
}), _v = {
  [Ie]: (e) => Ne(e),
  input: (e) => Ne(e),
  change: (e) => Ne(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Sv = ["class", "style"], kv = /^on[A-Z]/, Cv = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = y(() => (n?.value || []).concat(Sv)), a = De();
  return a ? y(() => {
    var s;
    return Do(Object.entries((s = a.proxy) == null ? void 0 : s.$attrs).filter(([r]) => !o.value.includes(r) && !(t && kv.test(r))));
  }) : y(() => ({}));
}, fr = Symbol("formContextKey"), Uo = Symbol("formItemContextKey"), xs = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Tv = Symbol("elIdInjection"), ll = () => De() ? he(Tv, xs) : xs, da = (e) => {
  const t = ll(), n = tr();
  return lm(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, fa = () => {
  const e = he(fr, void 0), t = he(Uo, void 0);
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
  return Ee(() => {
    s = re([ht(e, "id"), n], ([i, u]) => {
      const c = i ?? (u ? void 0 : da().value);
      c !== a.value && (t?.removeInputId && (a.value && t.removeInputId(a.value), !o?.value && !u && c && t.addInputId(c)), a.value = c);
    }, { immediate: !0 });
  }), wi(() => {
    s && s(), t?.removeInputId && a.value && t.removeInputId(a.value);
  }), {
    isLabeledByFormItem: r,
    inputId: a
  };
}, ul = (e) => {
  const t = De();
  return y(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, mo = (e, t = {}) => {
  const n = A(void 0), o = t.prop ? n : ul("size"), a = t.global ? n : Lm(), s = t.form ? { size: void 0 } : he(fr, void 0), r = t.formItem ? { size: void 0 } : he(Uo, void 0);
  return y(() => o.value || l(e) || r?.size || s?.size || a.value || "");
}, cl = (e) => {
  const t = ul("disabled"), n = he(fr, void 0);
  return y(() => t.value || l(e) || n?.disabled || !1);
};
function dl(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: a
} = {}) {
  const s = De(), { emit: r } = s, i = Ut(), u = A(!1), c = (p) => {
    $e(t) && t(p) || u.value || (u.value = !0, r("focus", p), n?.());
  }, d = (p) => {
    var m;
    $e(o) && o(p) || p.relatedTarget && ((m = i.value) != null && m.contains(p.relatedTarget)) || (u.value = !1, r("blur", p), a?.());
  }, f = () => {
    var p, m;
    (p = i.value) != null && p.contains(document.activeElement) && i.value !== document.activeElement || (m = e.value) == null || m.focus();
  };
  return re(i, (p) => {
    p && p.setAttribute("tabindex", "-1");
  }), Ve(i, "focus", c, !0), Ve(i, "blur", d, !0), Ve(i, "click", f, !0), {
    isFocused: u,
    wrapperRef: i,
    handleFocus: c,
    handleBlur: d
  };
}
const Ev = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function fl({
  afterComposition: e,
  emit: t
}) {
  const n = A(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, a = (i) => {
    var u;
    t?.("compositionupdate", i);
    const c = (u = i.target) == null ? void 0 : u.value, d = c[c.length - 1] || "";
    n.value = !Ev(d);
  }, s = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, ke(() => e(i)));
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
function Pv(e) {
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
const Ov = "ElInput", $v = U({
  name: Ov,
  inheritAttrs: !1
}), Iv = /* @__PURE__ */ U({
  ...$v,
  props: wv,
  emits: _v,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Pu(), s = Cv(), r = Ou(), i = y(() => [
      o.type === "textarea" ? h.b() : v.b(),
      v.m(p.value),
      v.is("disabled", m.value),
      v.is("exceed", ge.value),
      {
        [v.b("group")]: r.prepend || r.append,
        [v.m("prefix")]: r.prefix || o.prefixIcon,
        [v.m("suffix")]: r.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [v.bm("suffix", "password-clear")]: ee.value && oe.value,
        [v.b("hidden")]: o.type === "hidden"
      },
      a.class
    ]), u = y(() => [
      v.e("wrapper"),
      v.is("focus", Z.value)
    ]), { form: c, formItem: d } = fa(), { inputId: f } = pr(o, {
      formItemContext: d
    }), p = mo(), m = cl(), v = Ce("input"), h = Ce("textarea"), S = Ut(), g = Ut(), P = A(!1), k = A(!1), $ = A(), E = Ut(o.inputStyle), L = y(() => S.value || g.value), { wrapperRef: I, isFocused: Z, handleFocus: K, handleBlur: Q } = dl(L, {
      beforeFocus() {
        return m.value;
      },
      afterBlur() {
        var H;
        o.validateEvent && ((H = d?.validate) == null || H.call(d, "blur").catch((fe) => void 0));
      }
    }), se = y(() => {
      var H;
      return (H = c?.statusIcon) != null ? H : !1;
    }), w = y(() => d?.validateState || ""), N = y(() => w.value && rl[w.value]), Y = y(() => k.value ? fv : Xm), O = y(() => [
      a.style
    ]), B = y(() => [
      o.inputStyle,
      E.value,
      { resize: o.resize }
    ]), T = y(() => Ot(o.modelValue) ? "" : String(o.modelValue)), ee = y(() => o.clearable && !m.value && !o.readonly && !!T.value && (Z.value || P.value)), oe = y(() => o.showPassword && !m.value && !!T.value && (!!T.value || Z.value)), ie = y(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !m.value && !o.readonly && !o.showPassword), me = y(() => T.value.length), ge = y(() => !!ie.value && me.value > Number(o.maxlength)), X = y(() => !!r.suffix || !!o.suffixIcon || ee.value || o.showPassword || ie.value || !!w.value && se.value), [ue, _e] = Pv(S);
    vt(g, (H) => {
      if (ne(), !ie.value || o.resize !== "both")
        return;
      const fe = H[0], { width: Qe } = fe.contentRect;
      $.value = {
        right: `calc(100% - ${Qe + 15 + 6}px)`
      };
    });
    const z = () => {
      const { type: H, autosize: fe } = o;
      if (!(!Le || H !== "textarea" || !g.value))
        if (fe) {
          const Qe = We(fe) ? fe.minRows : void 0, Nt = We(fe) ? fe.maxRows : void 0, zt = Ls(g.value, Qe, Nt);
          E.value = {
            overflowY: "hidden",
            ...zt
          }, ke(() => {
            g.value.offsetHeight, E.value = zt;
          });
        } else
          E.value = {
            minHeight: Ls(g.value).minHeight
          };
    }, ne = ((H) => {
      let fe = !1;
      return () => {
        var Qe;
        if (fe || !o.autosize)
          return;
        ((Qe = g.value) == null ? void 0 : Qe.offsetParent) === null || (H(), fe = !0);
      };
    })(z), ye = () => {
      const H = L.value, fe = o.formatter ? o.formatter(T.value) : T.value;
      !H || H.value === fe || (H.value = fe);
    }, Te = async (H) => {
      ue();
      let { value: fe } = H.target;
      if (o.formatter && o.parser && (fe = o.parser(fe)), !xe.value) {
        if (fe === T.value) {
          ye();
          return;
        }
        n(Ie, fe), n($t, fe), await ke(), ye(), _e();
      }
    }, de = (H) => {
      let { value: fe } = H.target;
      o.formatter && o.parser && (fe = o.parser(fe)), n(Zt, fe);
    }, {
      isComposing: xe,
      handleCompositionStart: le,
      handleCompositionUpdate: Xe,
      handleCompositionEnd: sn
    } = fl({ emit: n, afterComposition: Te }), ln = () => {
      ue(), k.value = !k.value, setTimeout(_e);
    }, un = () => {
      var H;
      return (H = L.value) == null ? void 0 : H.focus();
    }, Mt = () => {
      var H;
      return (H = L.value) == null ? void 0 : H.blur();
    }, cn = (H) => {
      P.value = !1, n("mouseleave", H);
    }, He = (H) => {
      P.value = !0, n("mouseenter", H);
    }, pt = (H) => {
      n("keydown", H);
    }, dn = () => {
      var H;
      (H = L.value) == null || H.select();
    }, qt = () => {
      n(Ie, ""), n(Zt, ""), n("clear"), n($t, "");
    };
    return re(() => o.modelValue, () => {
      var H;
      ke(() => z()), o.validateEvent && ((H = d?.validate) == null || H.call(d, "change").catch((fe) => void 0));
    }), re(T, () => ye()), re(() => o.type, async () => {
      await ke(), ye(), z();
    }), Ee(() => {
      !o.formatter && o.parser, ye(), ke(z);
    }), t({
      input: S,
      textarea: g,
      ref: L,
      textareaStyle: B,
      autosize: ht(o, "autosize"),
      isComposing: xe,
      focus: un,
      blur: Mt,
      select: dn,
      clear: qt,
      resizeTextarea: z
    }), (H, fe) => (_(), R("div", {
      class: M([
        l(i),
        {
          [l(v).bm("group", "append")]: H.$slots.append,
          [l(v).bm("group", "prepend")]: H.$slots.prepend
        }
      ]),
      style: be(l(O)),
      onMouseenter: He,
      onMouseleave: cn
    }, [
      j(" input "),
      H.type !== "textarea" ? (_(), R(Oe, { key: 0 }, [
        j(" prepend slot "),
        H.$slots.prepend ? (_(), R("div", {
          key: 0,
          class: M(l(v).be("group", "prepend"))
        }, [
          ae(H.$slots, "prepend")
        ], 2)) : j("v-if", !0),
        b("div", {
          ref_key: "wrapperRef",
          ref: I,
          class: M(l(u))
        }, [
          j(" prefix slot "),
          H.$slots.prefix || H.prefixIcon ? (_(), R("span", {
            key: 0,
            class: M(l(v).e("prefix"))
          }, [
            b("span", {
              class: M(l(v).e("prefix-inner"))
            }, [
              ae(H.$slots, "prefix"),
              H.prefixIcon ? (_(), J(l(Fe), {
                key: 0,
                class: M(l(v).e("icon"))
              }, {
                default: q(() => [
                  (_(), J(et(H.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0),
          b("input", Kt({
            id: l(f),
            ref_key: "input",
            ref: S,
            class: l(v).e("inner")
          }, l(s), {
            minlength: H.minlength,
            maxlength: H.maxlength,
            type: H.showPassword ? k.value ? "text" : "password" : H.type,
            disabled: l(m),
            readonly: H.readonly,
            autocomplete: H.autocomplete,
            tabindex: H.tabindex,
            "aria-label": H.ariaLabel,
            placeholder: H.placeholder,
            style: H.inputStyle,
            form: H.form,
            autofocus: H.autofocus,
            role: H.containerRole,
            onCompositionstart: l(le),
            onCompositionupdate: l(Xe),
            onCompositionend: l(sn),
            onInput: Te,
            onChange: de,
            onKeydown: pt
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          j(" suffix slot "),
          l(X) ? (_(), R("span", {
            key: 1,
            class: M(l(v).e("suffix"))
          }, [
            b("span", {
              class: M(l(v).e("suffix-inner"))
            }, [
              !l(ee) || !l(oe) || !l(ie) ? (_(), R(Oe, { key: 0 }, [
                ae(H.$slots, "suffix"),
                H.suffixIcon ? (_(), J(l(Fe), {
                  key: 0,
                  class: M(l(v).e("icon"))
                }, {
                  default: q(() => [
                    (_(), J(et(H.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : j("v-if", !0)
              ], 64)) : j("v-if", !0),
              l(ee) ? (_(), J(l(Fe), {
                key: 1,
                class: M([l(v).e("icon"), l(v).e("clear")]),
                onMousedown: Pe(l(oo), ["prevent"]),
                onClick: qt
              }, {
                default: q(() => [
                  F(l(ca))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : j("v-if", !0),
              l(oe) ? (_(), J(l(Fe), {
                key: 2,
                class: M([l(v).e("icon"), l(v).e("password")]),
                onClick: ln
              }, {
                default: q(() => [
                  (_(), J(et(l(Y))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              l(ie) ? (_(), R("span", {
                key: 3,
                class: M(l(v).e("count"))
              }, [
                b("span", {
                  class: M(l(v).e("count-inner"))
                }, G(l(me)) + " / " + G(H.maxlength), 3)
              ], 2)) : j("v-if", !0),
              l(w) && l(N) && l(se) ? (_(), J(l(Fe), {
                key: 4,
                class: M([
                  l(v).e("icon"),
                  l(v).e("validateIcon"),
                  l(v).is("loading", l(w) === "validating")
                ])
              }, {
                default: q(() => [
                  (_(), J(et(l(N))))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 2)) : j("v-if", !0)
        ], 2),
        j(" append slot "),
        H.$slots.append ? (_(), R("div", {
          key: 1,
          class: M(l(v).be("group", "append"))
        }, [
          ae(H.$slots, "append")
        ], 2)) : j("v-if", !0)
      ], 64)) : (_(), R(Oe, { key: 1 }, [
        j(" textarea "),
        b("textarea", Kt({
          id: l(f),
          ref_key: "textarea",
          ref: g,
          class: [l(h).e("inner"), l(v).is("focus", l(Z))]
        }, l(s), {
          minlength: H.minlength,
          maxlength: H.maxlength,
          tabindex: H.tabindex,
          disabled: l(m),
          readonly: H.readonly,
          autocomplete: H.autocomplete,
          style: l(B),
          "aria-label": H.ariaLabel,
          placeholder: H.placeholder,
          form: H.form,
          autofocus: H.autofocus,
          rows: H.rows,
          role: H.containerRole,
          onCompositionstart: l(le),
          onCompositionupdate: l(Xe),
          onCompositionend: l(sn),
          onInput: Te,
          onFocus: l(K),
          onBlur: l(Q),
          onChange: de,
          onKeydown: pt
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        l(ie) ? (_(), R("span", {
          key: 0,
          style: be($.value),
          class: M(l(v).e("count"))
        }, G(l(me)) + " / " + G(H.maxlength), 7)) : j("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Lv = /* @__PURE__ */ we(Iv, [["__file", "input.vue"]]);
const mr = Je(Lv), pn = 4, xv = {
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
}, Rv = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), vr = Symbol("scrollbarContextKey"), Av = ve({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Mv = "Thumb", Nv = /* @__PURE__ */ U({
  __name: "thumb",
  props: Av,
  setup(e) {
    const t = e, n = he(vr), o = Ce("scrollbar");
    n || cr(Mv, "can not inject scrollbar context");
    const a = A(), s = A(), r = A({}), i = A(!1);
    let u = !1, c = !1, d = Le ? document.onselectstart : null;
    const f = y(() => xv[t.vertical ? "vertical" : "horizontal"]), p = y(() => Rv({
      size: t.size,
      move: t.move,
      bar: f.value
    })), m = y(() => a.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / s.value[f.value.offset]), v = (L) => {
      var I;
      if (L.stopPropagation(), L.ctrlKey || [1, 2].includes(L.button))
        return;
      (I = window.getSelection()) == null || I.removeAllRanges(), S(L);
      const Z = L.currentTarget;
      Z && (r.value[f.value.axis] = Z[f.value.offset] - (L[f.value.client] - Z.getBoundingClientRect()[f.value.direction]));
    }, h = (L) => {
      if (!s.value || !a.value || !n.wrapElement)
        return;
      const I = Math.abs(L.target.getBoundingClientRect()[f.value.direction] - L[f.value.client]), Z = s.value[f.value.offset] / 2, K = (I - Z) * 100 * m.value / a.value[f.value.offset];
      n.wrapElement[f.value.scroll] = K * n.wrapElement[f.value.scrollSize] / 100;
    }, S = (L) => {
      L.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", P), d = document.onselectstart, document.onselectstart = () => !1;
    }, g = (L) => {
      if (!a.value || !s.value || u === !1)
        return;
      const I = r.value[f.value.axis];
      if (!I)
        return;
      const Z = (a.value.getBoundingClientRect()[f.value.direction] - L[f.value.client]) * -1, K = s.value[f.value.offset] - I, Q = (Z - K) * 100 * m.value / a.value[f.value.offset];
      n.wrapElement[f.value.scroll] = Q * n.wrapElement[f.value.scrollSize] / 100;
    }, P = () => {
      u = !1, r.value[f.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", P), E(), c && (i.value = !1);
    }, k = () => {
      c = !1, i.value = !!t.size;
    }, $ = () => {
      c = !0, i.value = u;
    };
    wt(() => {
      E(), document.removeEventListener("mouseup", P);
    });
    const E = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Ve(ht(n, "scrollbarElement"), "mousemove", k), Ve(ht(n, "scrollbarElement"), "mouseleave", $), (L, I) => (_(), J(Rn, {
      name: l(o).b("fade"),
      persisted: ""
    }, {
      default: q(() => [
        Ue(b("div", {
          ref_key: "instance",
          ref: a,
          class: M([l(o).e("bar"), l(o).is(l(f).key)]),
          onMousedown: h
        }, [
          b("div", {
            ref_key: "thumb",
            ref: s,
            class: M(l(o).e("thumb")),
            style: be(l(p)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [It, L.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Rs = /* @__PURE__ */ we(Nv, [["__file", "thumb.vue"]]);
const zv = ve({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Fv = /* @__PURE__ */ U({
  __name: "bar",
  props: zv,
  setup(e, { expose: t }) {
    const n = e, o = he(vr), a = A(0), s = A(0), r = A(""), i = A(""), u = A(1), c = A(1);
    return t({
      handleScroll: (p) => {
        if (p) {
          const m = p.offsetHeight - pn, v = p.offsetWidth - pn;
          s.value = p.scrollTop * 100 / m * u.value, a.value = p.scrollLeft * 100 / v * c.value;
        }
      },
      update: () => {
        const p = o?.wrapElement;
        if (!p)
          return;
        const m = p.offsetHeight - pn, v = p.offsetWidth - pn, h = m ** 2 / p.scrollHeight, S = v ** 2 / p.scrollWidth, g = Math.max(h, n.minSize), P = Math.max(S, n.minSize);
        u.value = h / (m - h) / (g / (m - g)), c.value = S / (v - S) / (P / (v - P)), i.value = g + pn < m ? `${g}px` : "", r.value = P + pn < v ? `${P}px` : "";
      }
    }), (p, m) => (_(), R(Oe, null, [
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
var Bv = /* @__PURE__ */ we(Fv, [["__file", "bar.vue"]]);
const Vv = ve({
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
  ...rn(["ariaLabel", "ariaOrientation"])
}), Dv = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(pe)
}, Hv = "ElScrollbar", jv = U({
  name: Hv
}), Wv = /* @__PURE__ */ U({
  ...jv,
  props: Vv,
  emits: Dv,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Ce("scrollbar");
    let s, r, i = 0, u = 0;
    const c = A(), d = A(), f = A(), p = A(), m = y(() => {
      const E = {};
      return o.height && (E.height = so(o.height)), o.maxHeight && (E.maxHeight = so(o.maxHeight)), [o.wrapStyle, E];
    }), v = y(() => [
      o.wrapClass,
      a.e("wrap"),
      { [a.em("wrap", "hidden-default")]: !o.native }
    ]), h = y(() => [a.e("view"), o.viewClass]), S = () => {
      var E;
      d.value && ((E = p.value) == null || E.handleScroll(d.value), i = d.value.scrollTop, u = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function g(E, L) {
      We(E) ? d.value.scrollTo(E) : pe(E) && pe(L) && d.value.scrollTo(E, L);
    }
    const P = (E) => {
      pe(E) && (d.value.scrollTop = E);
    }, k = (E) => {
      pe(E) && (d.value.scrollLeft = E);
    }, $ = () => {
      var E;
      (E = p.value) == null || E.update();
    };
    return re(() => o.noresize, (E) => {
      E ? (s?.(), r?.()) : ({ stop: s } = vt(f, $), r = Ve("resize", $));
    }, { immediate: !0 }), re(() => [o.maxHeight, o.height], () => {
      o.native || ke(() => {
        var E;
        $(), d.value && ((E = p.value) == null || E.handleScroll(d.value));
      });
    }), ct(vr, Lt({
      scrollbarElement: c,
      wrapElement: d
    })), $u(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = u);
    }), Ee(() => {
      o.native || ke(() => {
        $();
      });
    }), _i(() => $()), t({
      wrapRef: d,
      update: $,
      scrollTo: g,
      setScrollTop: P,
      setScrollLeft: k,
      handleScroll: S
    }), (E, L) => (_(), R("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: M(l(a).b())
    }, [
      b("div", {
        ref_key: "wrapRef",
        ref: d,
        class: M(l(v)),
        style: be(l(m)),
        tabindex: E.tabindex,
        onScroll: S
      }, [
        (_(), J(et(E.tag), {
          id: E.id,
          ref_key: "resizeRef",
          ref: f,
          class: M(l(h)),
          style: be(E.viewStyle),
          role: E.role,
          "aria-label": E.ariaLabel,
          "aria-orientation": E.ariaOrientation
        }, {
          default: q(() => [
            ae(E.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      E.native ? j("v-if", !0) : (_(), J(Bv, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        always: E.always,
        "min-size": E.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Uv = /* @__PURE__ */ we(Wv, [["__file", "scrollbar.vue"]]);
const Kv = Je(Uv), hr = Symbol("popper"), pl = Symbol("popperContent"), Gv = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], ml = ve({
  role: {
    type: String,
    values: Gv,
    default: "tooltip"
  }
}), Zv = U({
  name: "ElPopper",
  inheritAttrs: !1
}), Yv = /* @__PURE__ */ U({
  ...Zv,
  props: ml,
  setup(e, { expose: t }) {
    const n = e, o = A(), a = A(), s = A(), r = A(), i = y(() => n.role), u = {
      triggerRef: o,
      popperInstanceRef: a,
      contentRef: s,
      referenceRef: r,
      role: i
    };
    return t(u), ct(hr, u), (c, d) => ae(c.$slots, "default");
  }
});
var qv = /* @__PURE__ */ we(Yv, [["__file", "popper.vue"]]);
const vl = ve({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Jv = U({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Xv = /* @__PURE__ */ U({
  ...Jv,
  props: vl,
  setup(e, { expose: t }) {
    const n = e, o = Ce("popper"), { arrowOffset: a, arrowRef: s, arrowStyle: r } = he(pl, void 0);
    return re(() => n.arrowOffset, (i) => {
      a.value = i;
    }), wt(() => {
      s.value = void 0;
    }), t({
      arrowRef: s
    }), (i, u) => (_(), R("span", {
      ref_key: "arrowRef",
      ref: s,
      class: M(l(o).e("arrow")),
      style: be(l(r)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Qv = /* @__PURE__ */ we(Xv, [["__file", "arrow.vue"]]);
const hl = ve({
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
}), gl = Symbol("elForwardRef"), eh = (e) => {
  ct(gl, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, th = (e) => ({
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
}, nh = "ElOnlyChild", oh = U({
  name: nh,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const a = he(gl), s = th((o = a?.setForwardRef) != null ? o : oo);
    return () => {
      var r;
      const i = (r = t.default) == null ? void 0 : r.call(t, n);
      if (!i || i.length > 1)
        return null;
      const u = yl(i);
      return u ? Ue(Iu(u, n), [[s]]) : null;
    };
  }
});
function yl(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (We(n))
      switch (n.type) {
        case xu:
          continue;
        case Lu:
        case "svg":
          return As(n);
        case Oe:
          return yl(n.children);
        default:
          return n;
      }
    return As(n);
  }
  return null;
}
function As(e) {
  const t = Ce("only-child");
  return F("span", {
    class: t.e("content")
  }, [e]);
}
const ah = U({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), rh = /* @__PURE__ */ U({
  ...ah,
  props: hl,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: a } = he(hr, void 0);
    eh(a);
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
    return Ee(() => {
      re(() => n.virtualRef, (f) => {
        f && (a.value = Tt(f));
      }, {
        immediate: !0
      }), re(a, (f, p) => {
        c?.(), c = void 0, ut(f) && (d.forEach((m) => {
          var v;
          const h = n[m];
          h && (f.addEventListener(m.slice(2).toLowerCase(), h), (v = p?.removeEventListener) == null || v.call(p, m.slice(2).toLowerCase(), h));
        }), Ba(f) && (c = re([s, r, i, u], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, h) => {
            Ot(m[h]) ? f.removeAttribute(v) : f.setAttribute(v, m[h]);
          });
        }, { immediate: !0 }))), ut(p) && Ba(p) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((m) => p.removeAttribute(m));
      }, {
        immediate: !0
      });
    }), wt(() => {
      if (c?.(), c = void 0, a.value && ut(a.value)) {
        const f = a.value;
        d.forEach((p) => {
          const m = n[p];
          m && f.removeEventListener(p.slice(2).toLowerCase(), m);
        }), a.value = void 0;
      }
    }), t({
      triggerRef: a
    }), (f, p) => f.virtualTriggering ? j("v-if", !0) : (_(), J(l(oh), Kt({ key: 0 }, f.$attrs, {
      "aria-controls": l(s),
      "aria-describedby": l(r),
      "aria-expanded": l(u),
      "aria-haspopup": l(i)
    }), {
      default: q(() => [
        ae(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var sh = /* @__PURE__ */ we(rh, [["__file", "trigger.vue"]]);
const _a = "focus-trap.focus-after-trapped", Sa = "focus-trap.focus-after-released", ih = "focus-trap.focusout-prevented", Ms = {
  cancelable: !0,
  bubbles: !1
}, lh = {
  cancelable: !0,
  bubbles: !1
}, Ns = "focusAfterTrapped", zs = "focusAfterReleased", uh = Symbol("elFocusTrap"), gr = A(), pa = A(0), yr = A(0);
let ko = 0;
const bl = (e) => {
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
    if (!ch(n, t))
      return n;
}, ch = (e, t) => {
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
}, dh = (e) => {
  const t = bl(e), n = Fs(t, e), o = Fs(t.reverse(), e);
  return [n, o];
}, fh = (e) => e instanceof HTMLInputElement && "select" in e, St = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    ut(e) && !Ba(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), yr.value = window.performance.now(), e !== n && fh(e) && t && e.select(), ut(e) && o && e.removeAttribute("tabindex");
  }
};
function Bs(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const ph = () => {
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
}, mh = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (St(o, t), document.activeElement !== n)
      return;
}, Vs = ph(), vh = () => pa.value > yr.value, Co = () => {
  gr.value = "pointer", pa.value = window.performance.now();
}, Ds = () => {
  gr.value = "keyboard", pa.value = window.performance.now();
}, hh = () => (Ee(() => {
  ko === 0 && (document.addEventListener("mousedown", Co), document.addEventListener("touchstart", Co), document.addEventListener("keydown", Ds)), ko++;
}), wt(() => {
  ko--, ko <= 0 && (document.removeEventListener("mousedown", Co), document.removeEventListener("touchstart", Co), document.removeEventListener("keydown", Ds));
}), {
  focusReason: gr,
  lastUserFocusTimestamp: pa,
  lastAutomatedFocusTimestamp: yr
}), To = (e) => new CustomEvent(ih, {
  ...lh,
  detail: e
}), Me = {
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
  e.code === Me.esc && hn.forEach((t) => t(e));
}, gh = (e) => {
  Ee(() => {
    hn.length === 0 && document.addEventListener("keydown", Hs), Le && hn.push(e);
  }), wt(() => {
    hn = hn.filter((t) => t !== e), hn.length === 0 && Le && document.removeEventListener("keydown", Hs);
  });
}, yh = U({
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
    const { focusReason: s } = hh();
    gh((v) => {
      e.trapped && !r.paused && t("release-requested", v);
    });
    const r = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (v) => {
      if (!e.loop && !e.trapped || r.paused)
        return;
      const { code: h, altKey: S, ctrlKey: g, metaKey: P, currentTarget: k, shiftKey: $ } = v, { loop: E } = e, L = h === Me.tab && !S && !g && !P, I = document.activeElement;
      if (L && I) {
        const Z = k, [K, Q] = dh(Z);
        if (K && Q) {
          if (!$ && I === Q) {
            const w = To({
              focusReason: s.value
            });
            t("focusout-prevented", w), w.defaultPrevented || (v.preventDefault(), E && St(K, !0));
          } else if ($ && [K, Z].includes(I)) {
            const w = To({
              focusReason: s.value
            });
            t("focusout-prevented", w), w.defaultPrevented || (v.preventDefault(), E && St(Q, !0));
          }
        } else if (I === Z) {
          const w = To({
            focusReason: s.value
          });
          t("focusout-prevented", w), w.defaultPrevented || v.preventDefault();
        }
      }
    };
    ct(uh, {
      focusTrapRef: n,
      onKeydown: i
    }), re(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), re([n], ([v], [h]) => {
      v && (v.addEventListener("keydown", i), v.addEventListener("focusin", d), v.addEventListener("focusout", f)), h && (h.removeEventListener("keydown", i), h.removeEventListener("focusin", d), h.removeEventListener("focusout", f));
    });
    const u = (v) => {
      t(Ns, v);
    }, c = (v) => t(zs, v), d = (v) => {
      const h = l(n);
      if (!h)
        return;
      const S = v.target, g = v.relatedTarget, P = S && h.contains(S);
      e.trapped || g && h.contains(g) || (o = g), P && t("focusin", v), !r.paused && e.trapped && (P ? a = S : St(a, !0));
    }, f = (v) => {
      const h = l(n);
      if (!(r.paused || !h))
        if (e.trapped) {
          const S = v.relatedTarget;
          !Ot(S) && !h.contains(S) && setTimeout(() => {
            if (!r.paused && e.trapped) {
              const g = To({
                focusReason: s.value
              });
              t("focusout-prevented", g), g.defaultPrevented || St(a, !0);
            }
          }, 0);
        } else {
          const S = v.target;
          S && h.contains(S) || t("focusout", v);
        }
    };
    async function p() {
      await ke();
      const v = l(n);
      if (v) {
        Vs.push(r);
        const h = v.contains(document.activeElement) ? o : document.activeElement;
        if (o = h, !v.contains(h)) {
          const g = new Event(_a, Ms);
          v.addEventListener(_a, u), v.dispatchEvent(g), g.defaultPrevented || ke(() => {
            let P = e.focusStartEl;
            Ne(P) || (St(P), document.activeElement !== P && (P = "first")), P === "first" && mh(bl(v), !0), (document.activeElement === h || P === "container") && St(v);
          });
        }
      }
    }
    function m() {
      const v = l(n);
      if (v) {
        v.removeEventListener(_a, u);
        const h = new CustomEvent(Sa, {
          ...Ms,
          detail: {
            focusReason: s.value
          }
        });
        v.addEventListener(Sa, c), v.dispatchEvent(h), !h.defaultPrevented && (s.value == "keyboard" || !vh() || v.contains(document.activeElement)) && St(o ?? document.body), v.removeEventListener(Sa, c), Vs.remove(r);
      }
    }
    return Ee(() => {
      e.trapped && p(), re(() => e.trapped, (v) => {
        v ? p() : m();
      });
    }), wt(() => {
      e.trapped && m(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", f), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function bh(e, t, n, o, a, s) {
  return ae(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var wh = /* @__PURE__ */ we(yh, [["render", bh], ["__file", "focus-trap.vue"]]), Ke = "top", ot = "bottom", at = "right", Ge = "left", br = "auto", vo = [Ke, ot, at, Ge], En = "start", lo = "end", _h = "clippingParents", wl = "viewport", Vn = "popper", Sh = "reference", js = vo.reduce(function(e, t) {
  return e.concat([t + "-" + En, t + "-" + lo]);
}, []), Mn = [].concat(vo, [br]).reduce(function(e, t) {
  return e.concat([t, t + "-" + En, t + "-" + lo]);
}, []), kh = "beforeRead", Ch = "read", Th = "afterRead", Eh = "beforeMain", Ph = "main", Oh = "afterMain", $h = "beforeWrite", Ih = "write", Lh = "afterWrite", xh = [kh, Ch, Th, Eh, Ph, Oh, $h, Ih, Lh];
function bt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function qe(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function nn(e) {
  var t = qe(e).Element;
  return e instanceof t || e instanceof Element;
}
function nt(e) {
  var t = qe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function wr(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = qe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Rh(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, a = t.attributes[n] || {}, s = t.elements[n];
    !nt(s) || !bt(s) || (Object.assign(s.style, o), Object.keys(a).forEach(function(r) {
      var i = a[r];
      i === !1 ? s.removeAttribute(r) : s.setAttribute(r, i === !0 ? "" : i);
    }));
  });
}
function Ah(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var a = t.elements[o], s = t.attributes[o] || {}, r = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = r.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !nt(a) || !bt(a) || (Object.assign(a.style, i), Object.keys(s).forEach(function(u) {
        a.removeAttribute(u);
      }));
    });
  };
}
var _l = { name: "applyStyles", enabled: !0, phase: "write", fn: Rh, effect: Ah, requires: ["computeStyles"] };
function gt(e) {
  return e.split("-")[0];
}
var en = Math.max, Ko = Math.min, Pn = Math.round;
function Va() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Sl() {
  return !/^((?!chrome|android).)*safari/i.test(Va());
}
function On(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), a = 1, s = 1;
  t && nt(e) && (a = e.offsetWidth > 0 && Pn(o.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Pn(o.height) / e.offsetHeight || 1);
  var r = nn(e) ? qe(e) : window, i = r.visualViewport, u = !Sl() && n, c = (o.left + (u && i ? i.offsetLeft : 0)) / a, d = (o.top + (u && i ? i.offsetTop : 0)) / s, f = o.width / a, p = o.height / s;
  return { width: f, height: p, top: d, right: c + f, bottom: d + p, left: c, x: c, y: d };
}
function _r(e) {
  var t = On(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function kl(e, t) {
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
function xt(e) {
  return qe(e).getComputedStyle(e);
}
function Mh(e) {
  return ["table", "td", "th"].indexOf(bt(e)) >= 0;
}
function Yt(e) {
  return ((nn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ma(e) {
  return bt(e) === "html" ? e : e.assignedSlot || e.parentNode || (wr(e) ? e.host : null) || Yt(e);
}
function Ws(e) {
  return !nt(e) || xt(e).position === "fixed" ? null : e.offsetParent;
}
function Nh(e) {
  var t = /firefox/i.test(Va()), n = /Trident/i.test(Va());
  if (n && nt(e)) {
    var o = xt(e);
    if (o.position === "fixed") return null;
  }
  var a = ma(e);
  for (wr(a) && (a = a.host); nt(a) && ["html", "body"].indexOf(bt(a)) < 0; ) {
    var s = xt(a);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return a;
    a = a.parentNode;
  }
  return null;
}
function ho(e) {
  for (var t = qe(e), n = Ws(e); n && Mh(n) && xt(n).position === "static"; ) n = Ws(n);
  return n && (bt(n) === "html" || bt(n) === "body" && xt(n).position === "static") ? t : n || Nh(e) || t;
}
function Sr(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Jn(e, t, n) {
  return en(e, Ko(t, n));
}
function zh(e, t, n) {
  var o = Jn(e, t, n);
  return o > n ? n : o;
}
function Cl() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Tl(e) {
  return Object.assign({}, Cl(), e);
}
function El(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Fh = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Tl(typeof e != "number" ? e : El(e, vo));
};
function Bh(e) {
  var t, n = e.state, o = e.name, a = e.options, s = n.elements.arrow, r = n.modifiersData.popperOffsets, i = gt(n.placement), u = Sr(i), c = [Ge, at].indexOf(i) >= 0, d = c ? "height" : "width";
  if (!(!s || !r)) {
    var f = Fh(a.padding, n), p = _r(s), m = u === "y" ? Ke : Ge, v = u === "y" ? ot : at, h = n.rects.reference[d] + n.rects.reference[u] - r[u] - n.rects.popper[d], S = r[u] - n.rects.reference[u], g = ho(s), P = g ? u === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, k = h / 2 - S / 2, $ = f[m], E = P - p[d] - f[v], L = P / 2 - p[d] / 2 + k, I = Jn($, L, E), Z = u;
    n.modifiersData[o] = (t = {}, t[Z] = I, t.centerOffset = I - L, t);
  }
}
function Vh(e) {
  var t = e.state, n = e.options, o = n.element, a = o === void 0 ? "[data-popper-arrow]" : o;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || kl(t.elements.popper, a) && (t.elements.arrow = a));
}
var Dh = { name: "arrow", enabled: !0, phase: "main", fn: Bh, effect: Vh, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function $n(e) {
  return e.split("-")[1];
}
var Hh = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function jh(e, t) {
  var n = e.x, o = e.y, a = t.devicePixelRatio || 1;
  return { x: Pn(n * a) / a || 0, y: Pn(o * a) / a || 0 };
}
function Us(e) {
  var t, n = e.popper, o = e.popperRect, a = e.placement, s = e.variation, r = e.offsets, i = e.position, u = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, f = e.isFixed, p = r.x, m = p === void 0 ? 0 : p, v = r.y, h = v === void 0 ? 0 : v, S = typeof d == "function" ? d({ x: m, y: h }) : { x: m, y: h };
  m = S.x, h = S.y;
  var g = r.hasOwnProperty("x"), P = r.hasOwnProperty("y"), k = Ge, $ = Ke, E = window;
  if (c) {
    var L = ho(n), I = "clientHeight", Z = "clientWidth";
    if (L === qe(n) && (L = Yt(n), xt(L).position !== "static" && i === "absolute" && (I = "scrollHeight", Z = "scrollWidth")), L = L, a === Ke || (a === Ge || a === at) && s === lo) {
      $ = ot;
      var K = f && L === E && E.visualViewport ? E.visualViewport.height : L[I];
      h -= K - o.height, h *= u ? 1 : -1;
    }
    if (a === Ge || (a === Ke || a === ot) && s === lo) {
      k = at;
      var Q = f && L === E && E.visualViewport ? E.visualViewport.width : L[Z];
      m -= Q - o.width, m *= u ? 1 : -1;
    }
  }
  var se = Object.assign({ position: i }, c && Hh), w = d === !0 ? jh({ x: m, y: h }, qe(n)) : { x: m, y: h };
  if (m = w.x, h = w.y, u) {
    var N;
    return Object.assign({}, se, (N = {}, N[$] = P ? "0" : "", N[k] = g ? "0" : "", N.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + h + "px)" : "translate3d(" + m + "px, " + h + "px, 0)", N));
  }
  return Object.assign({}, se, (t = {}, t[$] = P ? h + "px" : "", t[k] = g ? m + "px" : "", t.transform = "", t));
}
function Wh(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, a = o === void 0 ? !0 : o, s = n.adaptive, r = s === void 0 ? !0 : s, i = n.roundOffsets, u = i === void 0 ? !0 : i, c = { placement: gt(t.placement), variation: $n(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Us(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: r, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Us(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Pl = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Wh, data: {} }, Eo = { passive: !0 };
function Uh(e) {
  var t = e.state, n = e.instance, o = e.options, a = o.scroll, s = a === void 0 ? !0 : a, r = o.resize, i = r === void 0 ? !0 : r, u = qe(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, Eo);
  }), i && u.addEventListener("resize", n.update, Eo), function() {
    s && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Eo);
    }), i && u.removeEventListener("resize", n.update, Eo);
  };
}
var Ol = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Uh, data: {} }, Kh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function xo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Kh[t];
  });
}
var Gh = { start: "end", end: "start" };
function Ks(e) {
  return e.replace(/start|end/g, function(t) {
    return Gh[t];
  });
}
function kr(e) {
  var t = qe(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Cr(e) {
  return On(Yt(e)).left + kr(e).scrollLeft;
}
function Zh(e, t) {
  var n = qe(e), o = Yt(e), a = n.visualViewport, s = o.clientWidth, r = o.clientHeight, i = 0, u = 0;
  if (a) {
    s = a.width, r = a.height;
    var c = Sl();
    (c || !c && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  return { width: s, height: r, x: i + Cr(e), y: u };
}
function Yh(e) {
  var t, n = Yt(e), o = kr(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, s = en(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), r = en(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -o.scrollLeft + Cr(e), u = -o.scrollTop;
  return xt(a || n).direction === "rtl" && (i += en(n.clientWidth, a ? a.clientWidth : 0) - s), { width: s, height: r, x: i, y: u };
}
function Tr(e) {
  var t = xt(e), n = t.overflow, o = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function $l(e) {
  return ["html", "body", "#document"].indexOf(bt(e)) >= 0 ? e.ownerDocument.body : nt(e) && Tr(e) ? e : $l(ma(e));
}
function Xn(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = $l(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), s = qe(o), r = a ? [s].concat(s.visualViewport || [], Tr(o) ? o : []) : o, i = t.concat(r);
  return a ? i : i.concat(Xn(ma(r)));
}
function Da(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function qh(e, t) {
  var n = On(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Gs(e, t, n) {
  return t === wl ? Da(Zh(e, n)) : nn(t) ? qh(t, n) : Da(Yh(Yt(e)));
}
function Jh(e) {
  var t = Xn(ma(e)), n = ["absolute", "fixed"].indexOf(xt(e).position) >= 0, o = n && nt(e) ? ho(e) : e;
  return nn(o) ? t.filter(function(a) {
    return nn(a) && kl(a, o) && bt(a) !== "body";
  }) : [];
}
function Xh(e, t, n, o) {
  var a = t === "clippingParents" ? Jh(e) : [].concat(t), s = [].concat(a, [n]), r = s[0], i = s.reduce(function(u, c) {
    var d = Gs(e, c, o);
    return u.top = en(d.top, u.top), u.right = Ko(d.right, u.right), u.bottom = Ko(d.bottom, u.bottom), u.left = en(d.left, u.left), u;
  }, Gs(e, r, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Il(e) {
  var t = e.reference, n = e.element, o = e.placement, a = o ? gt(o) : null, s = o ? $n(o) : null, r = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, u;
  switch (a) {
    case Ke:
      u = { x: r, y: t.y - n.height };
      break;
    case ot:
      u = { x: r, y: t.y + t.height };
      break;
    case at:
      u = { x: t.x + t.width, y: i };
      break;
    case Ge:
      u = { x: t.x - n.width, y: i };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = a ? Sr(a) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (s) {
      case En:
        u[c] = u[c] - (t[d] / 2 - n[d] / 2);
        break;
      case lo:
        u[c] = u[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return u;
}
function uo(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = o === void 0 ? e.placement : o, s = n.strategy, r = s === void 0 ? e.strategy : s, i = n.boundary, u = i === void 0 ? _h : i, c = n.rootBoundary, d = c === void 0 ? wl : c, f = n.elementContext, p = f === void 0 ? Vn : f, m = n.altBoundary, v = m === void 0 ? !1 : m, h = n.padding, S = h === void 0 ? 0 : h, g = Tl(typeof S != "number" ? S : El(S, vo)), P = p === Vn ? Sh : Vn, k = e.rects.popper, $ = e.elements[v ? P : p], E = Xh(nn($) ? $ : $.contextElement || Yt(e.elements.popper), u, d, r), L = On(e.elements.reference), I = Il({ reference: L, element: k, placement: a }), Z = Da(Object.assign({}, k, I)), K = p === Vn ? Z : L, Q = { top: E.top - K.top + g.top, bottom: K.bottom - E.bottom + g.bottom, left: E.left - K.left + g.left, right: K.right - E.right + g.right }, se = e.modifiersData.offset;
  if (p === Vn && se) {
    var w = se[a];
    Object.keys(Q).forEach(function(N) {
      var Y = [at, ot].indexOf(N) >= 0 ? 1 : -1, O = [Ke, ot].indexOf(N) >= 0 ? "y" : "x";
      Q[N] += w[O] * Y;
    });
  }
  return Q;
}
function Qh(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = n.boundary, s = n.rootBoundary, r = n.padding, i = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? Mn : u, d = $n(o), f = d ? i ? js : js.filter(function(v) {
    return $n(v) === d;
  }) : vo, p = f.filter(function(v) {
    return c.indexOf(v) >= 0;
  });
  p.length === 0 && (p = f);
  var m = p.reduce(function(v, h) {
    return v[h] = uo(e, { placement: h, boundary: a, rootBoundary: s, padding: r })[gt(h)], v;
  }, {});
  return Object.keys(m).sort(function(v, h) {
    return m[v] - m[h];
  });
}
function eg(e) {
  if (gt(e) === br) return [];
  var t = xo(e);
  return [Ks(e), t, Ks(t)];
}
function tg(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var a = n.mainAxis, s = a === void 0 ? !0 : a, r = n.altAxis, i = r === void 0 ? !0 : r, u = n.fallbackPlacements, c = n.padding, d = n.boundary, f = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, v = m === void 0 ? !0 : m, h = n.allowedAutoPlacements, S = t.options.placement, g = gt(S), P = g === S, k = u || (P || !v ? [xo(S)] : eg(S)), $ = [S].concat(k).reduce(function(ue, _e) {
      return ue.concat(gt(_e) === br ? Qh(t, { placement: _e, boundary: d, rootBoundary: f, padding: c, flipVariations: v, allowedAutoPlacements: h }) : _e);
    }, []), E = t.rects.reference, L = t.rects.popper, I = /* @__PURE__ */ new Map(), Z = !0, K = $[0], Q = 0; Q < $.length; Q++) {
      var se = $[Q], w = gt(se), N = $n(se) === En, Y = [Ke, ot].indexOf(w) >= 0, O = Y ? "width" : "height", B = uo(t, { placement: se, boundary: d, rootBoundary: f, altBoundary: p, padding: c }), T = Y ? N ? at : Ge : N ? ot : Ke;
      E[O] > L[O] && (T = xo(T));
      var ee = xo(T), oe = [];
      if (s && oe.push(B[w] <= 0), i && oe.push(B[T] <= 0, B[ee] <= 0), oe.every(function(ue) {
        return ue;
      })) {
        K = se, Z = !1;
        break;
      }
      I.set(se, oe);
    }
    if (Z) for (var ie = v ? 3 : 1, me = function(ue) {
      var _e = $.find(function(z) {
        var V = I.get(z);
        if (V) return V.slice(0, ue).every(function(ne) {
          return ne;
        });
      });
      if (_e) return K = _e, "break";
    }, ge = ie; ge > 0; ge--) {
      var X = me(ge);
      if (X === "break") break;
    }
    t.placement !== K && (t.modifiersData[o]._skip = !0, t.placement = K, t.reset = !0);
  }
}
var ng = { name: "flip", enabled: !0, phase: "main", fn: tg, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Zs(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Ys(e) {
  return [Ke, at, ot, Ge].some(function(t) {
    return e[t] >= 0;
  });
}
function og(e) {
  var t = e.state, n = e.name, o = t.rects.reference, a = t.rects.popper, s = t.modifiersData.preventOverflow, r = uo(t, { elementContext: "reference" }), i = uo(t, { altBoundary: !0 }), u = Zs(r, o), c = Zs(i, a, s), d = Ys(u), f = Ys(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var ag = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: og };
function rg(e, t, n) {
  var o = gt(e), a = [Ge, Ke].indexOf(o) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, r = s[0], i = s[1];
  return r = r || 0, i = (i || 0) * a, [Ge, at].indexOf(o) >= 0 ? { x: i, y: r } : { x: r, y: i };
}
function sg(e) {
  var t = e.state, n = e.options, o = e.name, a = n.offset, s = a === void 0 ? [0, 0] : a, r = Mn.reduce(function(d, f) {
    return d[f] = rg(f, t.rects, s), d;
  }, {}), i = r[t.placement], u = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = r;
}
var ig = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: sg };
function lg(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Il({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Ll = { name: "popperOffsets", enabled: !0, phase: "read", fn: lg, data: {} };
function ug(e) {
  return e === "x" ? "y" : "x";
}
function cg(e) {
  var t = e.state, n = e.options, o = e.name, a = n.mainAxis, s = a === void 0 ? !0 : a, r = n.altAxis, i = r === void 0 ? !1 : r, u = n.boundary, c = n.rootBoundary, d = n.altBoundary, f = n.padding, p = n.tether, m = p === void 0 ? !0 : p, v = n.tetherOffset, h = v === void 0 ? 0 : v, S = uo(t, { boundary: u, rootBoundary: c, padding: f, altBoundary: d }), g = gt(t.placement), P = $n(t.placement), k = !P, $ = Sr(g), E = ug($), L = t.modifiersData.popperOffsets, I = t.rects.reference, Z = t.rects.popper, K = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, Q = typeof K == "number" ? { mainAxis: K, altAxis: K } : Object.assign({ mainAxis: 0, altAxis: 0 }, K), se = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, w = { x: 0, y: 0 };
  if (L) {
    if (s) {
      var N, Y = $ === "y" ? Ke : Ge, O = $ === "y" ? ot : at, B = $ === "y" ? "height" : "width", T = L[$], ee = T + S[Y], oe = T - S[O], ie = m ? -Z[B] / 2 : 0, me = P === En ? I[B] : Z[B], ge = P === En ? -Z[B] : -I[B], X = t.elements.arrow, ue = m && X ? _r(X) : { width: 0, height: 0 }, _e = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Cl(), z = _e[Y], V = _e[O], ne = Jn(0, I[B], ue[B]), ye = k ? I[B] / 2 - ie - ne - z - Q.mainAxis : me - ne - z - Q.mainAxis, Te = k ? -I[B] / 2 + ie + ne + V + Q.mainAxis : ge + ne + V + Q.mainAxis, de = t.elements.arrow && ho(t.elements.arrow), xe = de ? $ === "y" ? de.clientTop || 0 : de.clientLeft || 0 : 0, le = (N = se?.[$]) != null ? N : 0, Xe = T + ye - le - xe, sn = T + Te - le, ln = Jn(m ? Ko(ee, Xe) : ee, T, m ? en(oe, sn) : oe);
      L[$] = ln, w[$] = ln - T;
    }
    if (i) {
      var un, Mt = $ === "x" ? Ke : Ge, cn = $ === "x" ? ot : at, He = L[E], pt = E === "y" ? "height" : "width", dn = He + S[Mt], qt = He - S[cn], H = [Ke, Ge].indexOf(g) !== -1, fe = (un = se?.[E]) != null ? un : 0, Qe = H ? dn : He - I[pt] - Z[pt] - fe + Q.altAxis, Nt = H ? He + I[pt] + Z[pt] - fe - Q.altAxis : qt, zt = m && H ? zh(Qe, He, Nt) : Jn(m ? Qe : dn, He, m ? Nt : qt);
      L[E] = zt, w[E] = zt - He;
    }
    t.modifiersData[o] = w;
  }
}
var dg = { name: "preventOverflow", enabled: !0, phase: "main", fn: cg, requiresIfExists: ["offset"] };
function fg(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function pg(e) {
  return e === qe(e) || !nt(e) ? kr(e) : fg(e);
}
function mg(e) {
  var t = e.getBoundingClientRect(), n = Pn(t.width) / e.offsetWidth || 1, o = Pn(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function vg(e, t, n) {
  n === void 0 && (n = !1);
  var o = nt(t), a = nt(t) && mg(t), s = Yt(t), r = On(e, a, n), i = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (o || !o && !n) && ((bt(t) !== "body" || Tr(s)) && (i = pg(t)), nt(t) ? (u = On(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : s && (u.x = Cr(s))), { x: r.left + i.scrollLeft - u.x, y: r.top + i.scrollTop - u.y, width: r.width, height: r.height };
}
function hg(e) {
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
function gg(e) {
  var t = hg(e);
  return xh.reduce(function(n, o) {
    return n.concat(t.filter(function(a) {
      return a.phase === o;
    }));
  }, []);
}
function yg(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function bg(e) {
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
      var S = typeof h == "function" ? h(c.options) : h;
      v(), c.options = Object.assign({}, s, c.options, S), c.scrollParents = { reference: nn(r) ? Xn(r) : r.contextElement ? Xn(r.contextElement) : [], popper: Xn(i) };
      var g = gg(bg([].concat(o, c.options.modifiers)));
      return c.orderedModifiers = g.filter(function(P) {
        return P.enabled;
      }), m(), p.update();
    }, forceUpdate: function() {
      if (!f) {
        var h = c.elements, S = h.reference, g = h.popper;
        if (Js(S, g)) {
          c.rects = { reference: vg(S, ho(g), c.options.strategy === "fixed"), popper: _r(g) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(Z) {
            return c.modifiersData[Z.name] = Object.assign({}, Z.data);
          });
          for (var P = 0; P < c.orderedModifiers.length; P++) {
            if (c.reset === !0) {
              c.reset = !1, P = -1;
              continue;
            }
            var k = c.orderedModifiers[P], $ = k.fn, E = k.options, L = E === void 0 ? {} : E, I = k.name;
            typeof $ == "function" && (c = $({ state: c, options: L, name: I, instance: p }) || c);
          }
        }
      }
    }, update: yg(function() {
      return new Promise(function(h) {
        p.forceUpdate(), h(c);
      });
    }), destroy: function() {
      v(), f = !0;
    } };
    if (!Js(r, i)) return p;
    p.setOptions(u).then(function(h) {
      !f && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function m() {
      c.orderedModifiers.forEach(function(h) {
        var S = h.name, g = h.options, P = g === void 0 ? {} : g, k = h.effect;
        if (typeof k == "function") {
          var $ = k({ state: c, name: S, instance: p, options: P }), E = function() {
          };
          d.push($ || E);
        }
      });
    }
    function v() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return p;
  };
}
Er();
var wg = [Ol, Ll, Pl, _l];
Er({ defaultModifiers: wg });
var _g = [Ol, Ll, Pl, _l, ig, ng, dg, Dh, ag], Sg = Er({ defaultModifiers: _g });
const kg = ["fixed", "absolute"], Cg = ve({
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
    values: Mn,
    default: "bottom"
  },
  popperOptions: {
    type: te(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: kg,
    default: "absolute"
  }
}), xl = ve({
  ...Cg,
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
  ...rn(["ariaLabel"])
}), Tg = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Eg = (e, t) => {
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
}, Pg = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: a } = e, s = {
    placement: n,
    strategy: o,
    ...a,
    modifiers: [...$g(e), ...t]
  };
  return Ig(s, a?.modifiers), s;
}, Og = (e) => {
  if (Le)
    return Tt(e);
};
function $g(e) {
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
function Ig(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Lg = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = xg(u);
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
  }), s = Ut(), r = A({
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
  return re(a, (u) => {
    const c = l(s);
    c && c.setOptions(u);
  }, {
    deep: !0
  }), re([e, t], ([u, c]) => {
    i(), !(!u || !c) && (s.value = Sg(u, c, l(a)));
  }), wt(() => {
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
function xg(e) {
  const t = Object.keys(e.elements), n = Do(t.map((a) => [a, e.styles[a] || {}])), o = Do(t.map((a) => [a, e.attributes[a]]));
  return {
    styles: n,
    attributes: o
  };
}
const Rg = 0, Ag = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: a } = he(hr, void 0), s = A(), r = A(), i = y(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = y(() => {
    var g;
    const P = l(s), k = (g = l(r)) != null ? g : Rg;
    return {
      name: "arrow",
      enabled: !Yp(P),
      options: {
        element: P,
        padding: k
      }
    };
  }), c = y(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...Pg(e, [
      l(u),
      l(i)
    ])
  })), d = y(() => Og(e.referenceEl) || l(o)), { attributes: f, state: p, styles: m, update: v, forceUpdate: h, instanceRef: S } = Lg(d, n, c);
  return re(S, (g) => t.value = g), Ee(() => {
    re(() => {
      var g;
      return (g = l(d)) == null ? void 0 : g.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: f,
    arrowRef: s,
    contentRef: n,
    instanceRef: S,
    state: p,
    styles: m,
    role: a,
    forceUpdate: h,
    update: v
  };
}, Mg = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: a } = Ui(), s = Ce("popper"), r = y(() => l(t).popper), i = A(pe(e.zIndex) ? e.zIndex : a()), u = y(() => [
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
}, Ng = U({
  name: "ElPopperContent"
}), zg = /* @__PURE__ */ U({
  ...Ng,
  props: xl,
  emits: Tg,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: a,
      trapped: s,
      onFocusAfterReleased: r,
      onFocusAfterTrapped: i,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: d
    } = Eg(o, n), { attributes: f, arrowRef: p, contentRef: m, styles: v, instanceRef: h, role: S, update: g } = Ag(o), {
      ariaModal: P,
      arrowStyle: k,
      contentAttrs: $,
      contentClass: E,
      contentStyle: L,
      updateZIndex: I
    } = Mg(o, {
      styles: v,
      attributes: f,
      role: S
    }), Z = he(Uo, void 0), K = A();
    ct(pl, {
      arrowStyle: k,
      arrowRef: p,
      arrowOffset: K
    }), Z && ct(Uo, {
      ...Z,
      addInputId: oo,
      removeInputId: oo
    });
    let Q;
    const se = (N = !0) => {
      g(), N && I();
    }, w = () => {
      se(!1), o.visible && o.focusOnShow ? s.value = !0 : o.visible === !1 && (s.value = !1);
    };
    return Ee(() => {
      re(() => o.triggerTargetEl, (N, Y) => {
        Q?.(), Q = void 0;
        const O = l(N || m.value), B = l(Y || m.value);
        ut(O) && (Q = re([S, () => o.ariaLabel, P, () => o.id], (T) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ee, oe) => {
            Ot(T[oe]) ? O.removeAttribute(ee) : O.setAttribute(ee, T[oe]);
          });
        }, { immediate: !0 })), B !== O && ut(B) && ["role", "aria-label", "aria-modal", "id"].forEach((T) => {
          B.removeAttribute(T);
        });
      }, { immediate: !0 }), re(() => o.visible, w, { immediate: !0 });
    }), wt(() => {
      Q?.(), Q = void 0;
    }), t({
      popperContentRef: m,
      popperInstanceRef: h,
      updatePopper: se,
      contentStyle: L
    }), (N, Y) => (_(), R("div", Kt({
      ref_key: "contentRef",
      ref: m
    }, l($), {
      style: l(L),
      class: l(E),
      tabindex: "-1",
      onMouseenter: (O) => N.$emit("mouseenter", O),
      onMouseleave: (O) => N.$emit("mouseleave", O)
    }), [
      F(l(wh), {
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
          ae(N.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Fg = /* @__PURE__ */ we(zg, [["__file", "content.vue"]]);
const Bg = Je(qv), Pr = Symbol("elTooltip");
function Xs() {
  let e;
  const t = (o, a) => {
    n(), e = window.setTimeout(o, a);
  }, n = () => window.clearTimeout(e);
  return po(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Vg = ve({
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
}), Dg = ({
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
  ...Vg,
  ...xl,
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
  ...rn(["ariaLabel"])
}), Rl = ve({
  ...hl,
  disabled: Boolean,
  trigger: {
    type: te([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: te(Array),
    default: () => [Me.enter, Me.numpadEnter, Me.space]
  }
}), Hg = ua({
  type: te(Boolean),
  default: null
}), jg = ua({
  type: te(Function)
}), Wg = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], a = {
    [e]: Hg,
    [n]: jg
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
      const p = De(), { emit: m } = p, v = p.props, h = y(() => $e(v[n])), S = y(() => v[e] === null), g = (I) => {
        r.value !== !0 && (r.value = !0, i && (i.value = I), $e(d) && d(I));
      }, P = (I) => {
        r.value !== !1 && (r.value = !1, i && (i.value = I), $e(f) && f(I));
      }, k = (I) => {
        if (v.disabled === !0 || $e(c) && !c())
          return;
        const Z = h.value && Le;
        Z && m(t, !0), (S.value || !Z) && g(I);
      }, $ = (I) => {
        if (v.disabled === !0 || !Le)
          return;
        const Z = h.value && Le;
        Z && m(t, !1), (S.value || !Z) && P(I);
      }, E = (I) => {
        Ho(I) && (v.disabled && I ? h.value && m(t, !1) : r.value !== I && (I ? g() : P()));
      }, L = () => {
        r.value ? $() : k();
      };
      return re(() => v[e], E), u && p.appContext.config.globalProperties.$route !== void 0 && re(() => ({
        ...p.proxy.$route
      }), () => {
        u.value && r.value && $();
      }), Ee(() => {
        E(v[e]);
      }), {
        hide: $,
        show: k,
        toggle: L,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: a,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: Ug,
  useModelToggleEmits: Kg,
  useModelToggle: Gg
} = Wg("visible"), Zg = ve({
  ...ml,
  ...Ug,
  ...Or,
  ...Rl,
  ...vl,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Yg = [
  ...Kg,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], qg = (e, t) => Be(e) ? e.includes(t) : e === t, mn = (e, t, n) => (o) => {
  qg(l(e), t) && n(o);
}, kt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (a) => {
  const s = e?.(a);
  if (n === !1 || !s)
    return t?.(a);
}, Jg = U({
  name: "ElTooltipTrigger"
}), Xg = /* @__PURE__ */ U({
  ...Jg,
  props: Rl,
  setup(e, { expose: t }) {
    const n = e, o = Ce("tooltip"), { controlled: a, id: s, open: r, onOpen: i, onClose: u, onToggle: c } = he(Pr, void 0), d = A(null), f = () => {
      if (l(a) || n.disabled)
        return !0;
    }, p = ht(n, "trigger"), m = kt(f, mn(p, "hover", i)), v = kt(f, mn(p, "hover", u)), h = kt(f, mn(p, "click", ($) => {
      $.button === 0 && c($);
    })), S = kt(f, mn(p, "focus", i)), g = kt(f, mn(p, "focus", u)), P = kt(f, mn(p, "contextmenu", ($) => {
      $.preventDefault(), c($);
    })), k = kt(f, ($) => {
      const { code: E } = $;
      n.triggerKeys.includes(E) && ($.preventDefault(), c($));
    });
    return t({
      triggerRef: d
    }), ($, E) => (_(), J(l(sh), {
      id: l(s),
      "virtual-ref": $.virtualRef,
      open: l(r),
      "virtual-triggering": $.virtualTriggering,
      class: M(l(o).e("trigger")),
      onBlur: l(g),
      onClick: l(h),
      onContextmenu: l(P),
      onFocus: l(S),
      onMouseenter: l(m),
      onMouseleave: l(v),
      onKeydown: l(k)
    }, {
      default: q(() => [
        ae($.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Qg = /* @__PURE__ */ we(Xg, [["__file", "trigger.vue"]]);
const e0 = ve({
  to: {
    type: te([String, Object]),
    required: !0
  },
  disabled: Boolean
}), t0 = /* @__PURE__ */ U({
  __name: "teleport",
  props: e0,
  setup(e) {
    return (t, n) => t.disabled ? ae(t.$slots, "default", { key: 0 }) : (_(), J(Ru, {
      key: 1,
      to: t.to
    }, [
      ae(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var n0 = /* @__PURE__ */ we(t0, [["__file", "teleport.vue"]]);
const o0 = Je(n0), Al = () => {
  const e = tr(), t = ll(), n = y(() => `${e.value}-popper-container-${t.prefix}`), o = y(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, a0 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, r0 = () => {
  const { id: e, selector: t } = Al();
  return Au(() => {
    Le && (document.body.querySelector(t.value) || a0(e.value));
  }), {
    id: e,
    selector: t
  };
}, s0 = U({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), i0 = /* @__PURE__ */ U({
  ...s0,
  props: Or,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Al(), a = Ce("tooltip"), s = A();
    let r;
    const {
      controlled: i,
      id: u,
      open: c,
      trigger: d,
      onClose: f,
      onOpen: p,
      onShow: m,
      onHide: v,
      onBeforeShow: h,
      onBeforeHide: S
    } = he(Pr, void 0), g = y(() => n.transition || `${a.namespace.value}-fade-in-linear`), P = y(() => n.persistent);
    wt(() => {
      r?.();
    });
    const k = y(() => l(P) ? !0 : l(c)), $ = y(() => n.disabled ? !1 : l(c)), E = y(() => n.appendTo || o.value), L = y(() => {
      var T;
      return (T = n.style) != null ? T : {};
    }), I = A(!0), Z = () => {
      v(), B() && St(document.body), I.value = !0;
    }, K = () => {
      if (l(i))
        return !0;
    }, Q = kt(K, () => {
      n.enterable && l(d) === "hover" && p();
    }), se = kt(K, () => {
      l(d) === "hover" && f();
    }), w = () => {
      var T, ee;
      (ee = (T = s.value) == null ? void 0 : T.updatePopper) == null || ee.call(T), h?.();
    }, N = () => {
      S?.();
    }, Y = () => {
      m(), r = fm(y(() => {
        var T;
        return (T = s.value) == null ? void 0 : T.popperContentRef;
      }), () => {
        if (l(i))
          return;
        l(d) !== "hover" && f();
      });
    }, O = () => {
      n.virtualTriggering || f();
    }, B = (T) => {
      var ee;
      const oe = (ee = s.value) == null ? void 0 : ee.popperContentRef, ie = T?.relatedTarget || document.activeElement;
      return oe?.contains(ie);
    };
    return re(() => l(c), (T) => {
      T ? I.value = !1 : r?.();
    }, {
      flush: "post"
    }), re(() => n.content, () => {
      var T, ee;
      (ee = (T = s.value) == null ? void 0 : T.updatePopper) == null || ee.call(T);
    }), t({
      contentRef: s,
      isFocusInsideContent: B
    }), (T, ee) => (_(), J(l(o0), {
      disabled: !T.teleported,
      to: l(E)
    }, {
      default: q(() => [
        F(Rn, {
          name: l(g),
          onAfterLeave: Z,
          onBeforeEnter: w,
          onAfterEnter: Y,
          onBeforeLeave: N
        }, {
          default: q(() => [
            l(k) ? Ue((_(), J(l(Fg), Kt({
              key: 0,
              id: l(u),
              ref_key: "contentRef",
              ref: s
            }, T.$attrs, {
              "aria-label": T.ariaLabel,
              "aria-hidden": I.value,
              "boundaries-padding": T.boundariesPadding,
              "fallback-placements": T.fallbackPlacements,
              "gpu-acceleration": T.gpuAcceleration,
              offset: T.offset,
              placement: T.placement,
              "popper-options": T.popperOptions,
              strategy: T.strategy,
              effect: T.effect,
              enterable: T.enterable,
              pure: T.pure,
              "popper-class": T.popperClass,
              "popper-style": [T.popperStyle, l(L)],
              "reference-el": T.referenceEl,
              "trigger-target-el": T.triggerTargetEl,
              visible: l($),
              "z-index": T.zIndex,
              onMouseenter: l(Q),
              onMouseleave: l(se),
              onBlur: O,
              onClose: l(f)
            }), {
              default: q(() => [
                ae(T.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [It, l($)]
            ]) : j("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var l0 = /* @__PURE__ */ we(i0, [["__file", "content.vue"]]);
const u0 = U({
  name: "ElTooltip"
}), c0 = /* @__PURE__ */ U({
  ...u0,
  props: Zg,
  emits: Yg,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    r0();
    const a = da(), s = A(), r = A(), i = () => {
      var g;
      const P = l(s);
      P && ((g = P.popperInstanceRef) == null || g.update());
    }, u = A(!1), c = A(), { show: d, hide: f, hasUpdateHandler: p } = Gg({
      indicator: u,
      toggleReason: c
    }), { onOpen: m, onClose: v } = Dg({
      showAfter: ht(o, "showAfter"),
      hideAfter: ht(o, "hideAfter"),
      autoClose: ht(o, "autoClose"),
      open: d,
      close: f
    }), h = y(() => Ho(o.visible) && !p.value);
    ct(Pr, {
      controlled: h,
      id: a,
      open: Qa(u),
      trigger: ht(o, "trigger"),
      onOpen: (g) => {
        m(g);
      },
      onClose: (g) => {
        v(g);
      },
      onToggle: (g) => {
        l(u) ? v(g) : m(g);
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
    }), re(() => o.disabled, (g) => {
      g && u.value && (u.value = !1);
    });
    const S = (g) => {
      var P;
      return (P = r.value) == null ? void 0 : P.isFocusInsideContent(g);
    };
    return Mu(() => u.value && f()), t({
      popperRef: s,
      contentRef: r,
      isFocusInsideContent: S,
      updatePopper: i,
      onOpen: m,
      onClose: v,
      hide: f
    }), (g, P) => (_(), J(l(Bg), {
      ref_key: "popperRef",
      ref: s,
      role: g.role
    }, {
      default: q(() => [
        F(Qg, {
          disabled: g.disabled,
          trigger: g.trigger,
          "trigger-keys": g.triggerKeys,
          "virtual-ref": g.virtualRef,
          "virtual-triggering": g.virtualTriggering
        }, {
          default: q(() => [
            g.$slots.default ? ae(g.$slots, "default", { key: 0 }) : j("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        F(l0, {
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
          default: q(() => [
            ae(g.$slots, "content", {}, () => [
              g.rawContent ? (_(), R("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, ["innerHTML"])) : (_(), R("span", { key: 1 }, G(g.content), 1))
            ]),
            g.showArrow ? (_(), J(l(Qv), {
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
var d0 = /* @__PURE__ */ we(c0, [["__file", "tooltip.vue"]]);
const $r = Je(d0), f0 = ve({
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
}), p0 = U({
  name: "ElBadge"
}), m0 = /* @__PURE__ */ U({
  ...p0,
  props: f0,
  setup(e, { expose: t }) {
    const n = e, o = Ce("badge"), a = y(() => n.isDot ? "" : pe(n.value) && pe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), s = y(() => {
      var r, i, u, c, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: so(-((i = (r = n.offset) == null ? void 0 : r[0]) != null ? i : 0)),
          marginTop: so((c = (u = n.offset) == null ? void 0 : u[1]) != null ? c : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: a
    }), (r, i) => (_(), R("div", {
      class: M(l(o).b())
    }, [
      ae(r.$slots, "default"),
      F(Rn, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: q(() => [
          Ue(b("sup", {
            class: M([
              l(o).e("content"),
              l(o).em("content", r.type),
              l(o).is("fixed", !!r.$slots.default),
              l(o).is("dot", r.isDot),
              l(o).is("hide-zero", !r.showZero && n.value === 0),
              r.badgeClass
            ]),
            style: be(l(s))
          }, [
            ae(r.$slots, "content", { value: l(a) }, () => [
              Qt(G(l(a)), 1)
            ])
          ], 6), [
            [It, !r.hidden && (l(a) || r.isDot || r.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var v0 = /* @__PURE__ */ we(m0, [["__file", "badge.vue"]]);
const h0 = Je(v0), g0 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ha = ve({
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
    values: Zi
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), y0 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, b0 = U({
  name: "ElTag"
}), w0 = /* @__PURE__ */ U({
  ...b0,
  props: Ha,
  emits: y0,
  setup(e, { emit: t }) {
    const n = e, o = mo(), a = Ce("tag"), s = y(() => {
      const { type: c, hit: d, effect: f, closable: p, round: m } = n;
      return [
        a.b(),
        a.is("closable", p),
        a.m(c || "primary"),
        a.m(o.value),
        a.m(f),
        a.is("hit", d),
        a.is("round", m)
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
      style: be({ backgroundColor: c.color }),
      onClick: i
    }, [
      b("span", {
        class: M(l(a).e("content"))
      }, [
        ae(c.$slots, "default")
      ], 2),
      c.closable ? (_(), J(l(Fe), {
        key: 0,
        class: M(l(a).e("close")),
        onClick: Pe(r, ["stop"])
      }, {
        default: q(() => [
          F(l(io))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : j("v-if", !0)
    ], 6)) : (_(), J(Rn, {
      key: 1,
      name: `${l(a).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: u
    }, {
      default: q(() => [
        b("span", {
          class: M(l(s)),
          style: be({ backgroundColor: c.color }),
          onClick: i
        }, [
          b("span", {
            class: M(l(a).e("content"))
          }, [
            ae(c.$slots, "default")
          ], 2),
          c.closable ? (_(), J(l(Fe), {
            key: 0,
            class: M(l(a).e("close")),
            onClick: Pe(r, ["stop"])
          }, {
            default: q(() => [
              F(l(io))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : j("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var _0 = /* @__PURE__ */ we(w0, [["__file", "tag.vue"]]);
const S0 = Je(_0), Bt = /* @__PURE__ */ new Map();
if (Le) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of Bt.values())
        for (const { documentHandler: o } of n)
          o(t, e);
      e = void 0;
    }
  });
}
function Qs(e, t) {
  let n = [];
  return Be(t.arg) ? n = t.arg : ut(t.arg) && n.push(t.arg), function(o, a) {
    const s = t.instance.popperRef, r = o.target, i = a?.target, u = !t || !t.instance, c = !r || !i, d = e.contains(r) || e.contains(i), f = e === r, p = n.length && n.some((v) => v?.contains(r)) || n.length && n.includes(i), m = s && (s.contains(r) || s.contains(i));
    u || c || d || f || p || m || t.value(o, a);
  };
}
const k0 = {
  beforeMount(e, t) {
    Bt.has(e) || Bt.set(e, []), Bt.get(e).push({
      documentHandler: Qs(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Bt.has(e) || Bt.set(e, []);
    const n = Bt.get(e), o = n.findIndex((s) => s.bindingFn === t.oldValue), a = {
      documentHandler: Qs(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, a) : n.push(a);
  },
  unmounted(e) {
    Bt.delete(e);
  }
}, C0 = ve({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: te(Object)
  },
  size: Cn,
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
  ...Ji
}), st = {};
U({
  name: "ElConfigProvider",
  props: C0,
  setup(e, { slots: t }) {
    re(() => e.message, (o) => {
      Object.assign(st, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = el(e);
    return () => ae(t, "default", { config: n?.value });
  }
});
const T0 = 100, E0 = 600, ei = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = T0, delay: a = E0 } = $e(n) ? {} : n;
    let s, r;
    const i = () => $e(n) ? n() : n.handler(), u = () => {
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
}, P0 = ve({
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
  size: Cn,
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
  ...rn(["ariaLabel"])
}), O0 = {
  [Zt]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [$t]: (e) => pe(e) || Ot(e),
  [Ie]: (e) => pe(e) || Ot(e)
}, $0 = U({
  name: "ElInputNumber"
}), I0 = /* @__PURE__ */ U({
  ...$0,
  props: P0,
  emits: O0,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: a } = la(), s = Ce("input-number"), r = A(), i = Lt({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: u } = fa(), c = y(() => pe(o.modelValue) && o.modelValue <= o.min), d = y(() => pe(o.modelValue) && o.modelValue >= o.max), f = y(() => {
      const O = g(o.step);
      return it(o.precision) ? Math.max(g(o.modelValue), O) : (O > o.precision, o.precision);
    }), p = y(() => o.controls && o.controlsPosition === "right"), m = mo(), v = cl(), h = y(() => {
      if (i.userInput !== null)
        return i.userInput;
      let O = i.currentValue;
      if (Ot(O))
        return "";
      if (pe(O)) {
        if (Number.isNaN(O))
          return "";
        it(o.precision) || (O = O.toFixed(o.precision));
      }
      return O;
    }), S = (O, B) => {
      if (it(B) && (B = f.value), B === 0)
        return Math.round(O);
      let T = String(O);
      const ee = T.indexOf(".");
      if (ee === -1 || !T.replace(".", "").split("")[ee + B])
        return O;
      const me = T.length;
      return T.charAt(me - 1) === "5" && (T = `${T.slice(0, Math.max(0, me - 1))}6`), Number.parseFloat(Number(T).toFixed(B));
    }, g = (O) => {
      if (Ot(O))
        return 0;
      const B = O.toString(), T = B.indexOf(".");
      let ee = 0;
      return T !== -1 && (ee = B.length - T - 1), ee;
    }, P = (O, B = 1) => pe(O) ? S(O + o.step * B) : i.currentValue, k = () => {
      if (o.readonly || v.value || d.value)
        return;
      const O = Number(h.value) || 0, B = P(O);
      L(B), n($t, i.currentValue), N();
    }, $ = () => {
      if (o.readonly || v.value || c.value)
        return;
      const O = Number(h.value) || 0, B = P(O, -1);
      L(B), n($t, i.currentValue), N();
    }, E = (O, B) => {
      const { max: T, min: ee, step: oe, precision: ie, stepStrictly: me, valueOnClear: ge } = o;
      T < ee && cr("InputNumber", "min should not be greater than max.");
      let X = Number(O);
      if (Ot(O) || Number.isNaN(X))
        return null;
      if (O === "") {
        if (ge === null)
          return null;
        X = Ne(ge) ? { min: ee, max: T }[ge] : ge;
      }
      return me && (X = S(Math.round(X / oe) * oe, ie), X !== O && B && n(Ie, X)), it(ie) || (X = S(X, ie)), (X > T || X < ee) && (X = X > T ? T : ee, B && n(Ie, X)), X;
    }, L = (O, B = !0) => {
      var T;
      const ee = i.currentValue, oe = E(O);
      if (!B) {
        n(Ie, oe);
        return;
      }
      ee === oe && O || (i.userInput = null, n(Ie, oe), ee !== oe && n(Zt, oe, ee), o.validateEvent && ((T = u?.validate) == null || T.call(u, "change").catch((ie) => void 0)), i.currentValue = oe);
    }, I = (O) => {
      i.userInput = O;
      const B = O === "" ? null : Number(O);
      n($t, B), L(B, !1);
    }, Z = (O) => {
      const B = O !== "" ? Number(O) : "";
      (pe(B) && !Number.isNaN(B) || O === "") && L(B), N(), i.userInput = null;
    }, K = () => {
      var O, B;
      (B = (O = r.value) == null ? void 0 : O.focus) == null || B.call(O);
    }, Q = () => {
      var O, B;
      (B = (O = r.value) == null ? void 0 : O.blur) == null || B.call(O);
    }, se = (O) => {
      n("focus", O);
    }, w = (O) => {
      var B, T;
      i.userInput = null, sl() && i.currentValue === null && ((B = r.value) != null && B.input) && (r.value.input.value = ""), n("blur", O), o.validateEvent && ((T = u?.validate) == null || T.call(u, "blur").catch((ee) => void 0));
    }, N = () => {
      i.currentValue !== o.modelValue && (i.currentValue = o.modelValue);
    }, Y = (O) => {
      document.activeElement === O.target && O.preventDefault();
    };
    return re(() => o.modelValue, (O, B) => {
      const T = E(O, !0);
      i.userInput === null && T !== B && (i.currentValue = T);
    }, { immediate: !0 }), Ee(() => {
      var O;
      const { min: B, max: T, modelValue: ee } = o, oe = (O = r.value) == null ? void 0 : O.input;
      if (oe.setAttribute("role", "spinbutton"), Number.isFinite(T) ? oe.setAttribute("aria-valuemax", String(T)) : oe.removeAttribute("aria-valuemax"), Number.isFinite(B) ? oe.setAttribute("aria-valuemin", String(B)) : oe.removeAttribute("aria-valuemin"), oe.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), oe.setAttribute("aria-disabled", String(v.value)), !pe(ee) && ee != null) {
        let ie = Number(ee);
        Number.isNaN(ie) && (ie = null), n(Ie, ie);
      }
      oe.addEventListener("wheel", Y, { passive: !1 });
    }), _i(() => {
      var O, B;
      const T = (O = r.value) == null ? void 0 : O.input;
      T?.setAttribute("aria-valuenow", `${(B = i.currentValue) != null ? B : ""}`);
    }), t({
      focus: K,
      blur: Q
    }), (O, B) => (_(), R("div", {
      class: M([
        l(s).b(),
        l(s).m(l(m)),
        l(s).is("disabled", l(v)),
        l(s).is("without-controls", !O.controls),
        l(s).is("controls-right", l(p))
      ]),
      onDragstart: Pe(() => {
      }, ["prevent"])
    }, [
      O.controls ? Ue((_(), R("span", {
        key: 0,
        role: "button",
        "aria-label": l(a)("el.inputNumber.decrease"),
        class: M([l(s).e("decrease"), l(s).is("disabled", l(c))]),
        onKeydown: Ct($, ["enter"])
      }, [
        ae(O.$slots, "decrease-icon", {}, () => [
          F(l(Fe), null, {
            default: q(() => [
              l(p) ? (_(), J(l(nl), { key: 0 })) : (_(), J(l(av), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(ei), $]
      ]) : j("v-if", !0),
      O.controls ? Ue((_(), R("span", {
        key: 1,
        role: "button",
        "aria-label": l(a)("el.inputNumber.increase"),
        class: M([l(s).e("increase"), l(s).is("disabled", l(d))]),
        onKeydown: Ct(k, ["enter"])
      }, [
        ae(O.$slots, "increase-icon", {}, () => [
          F(l(Fe), null, {
            default: q(() => [
              l(p) ? (_(), J(l(jm), { key: 0 })) : (_(), J(l(lv), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(ei), k]
      ]) : j("v-if", !0),
      F(l(mr), {
        id: O.id,
        ref_key: "input",
        ref: r,
        type: "number",
        step: O.step,
        "model-value": l(h),
        placeholder: O.placeholder,
        readonly: O.readonly,
        disabled: l(v),
        size: l(m),
        max: O.max,
        min: O.min,
        name: O.name,
        "aria-label": O.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          Ct(Pe(k, ["prevent"]), ["up"]),
          Ct(Pe($, ["prevent"]), ["down"])
        ],
        onBlur: w,
        onFocus: se,
        onInput: I,
        onChange: Z
      }, Nu({
        _: 2
      }, [
        O.$slots.prefix ? {
          name: "prefix",
          fn: q(() => [
            ae(O.$slots, "prefix")
          ])
        } : void 0,
        O.$slots.suffix ? {
          name: "suffix",
          fn: q(() => [
            ae(O.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var L0 = /* @__PURE__ */ we(I0, [["__file", "input-number.vue"]]);
const x0 = Je(L0);
function R0() {
  const e = Ut(), t = A(0), n = 11, o = y(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return vt(e, () => {
    var s, r;
    t.value = (r = (s = e.value) == null ? void 0 : s.getBoundingClientRect().width) != null ? r : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const Ml = Symbol("ElSelectGroup"), va = Symbol("ElSelect");
function A0(e, t) {
  const n = he(va), o = he(Ml, { disabled: !1 }), a = y(() => d(jt(n.props.modelValue), e.value)), s = y(() => {
    var m;
    if (n.props.multiple) {
      const v = jt((m = n.props.modelValue) != null ? m : []);
      return !a.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), r = y(() => e.label || (We(e.value) ? "" : e.value)), i = y(() => e.value || e.label || ""), u = y(() => e.disabled || t.groupDisabled || s.value), c = De(), d = (m = [], v) => {
    if (We(e.value)) {
      const h = n.props.valueKey;
      return m && m.some((S) => zu(Wt(S, h)) === Wt(v, h));
    } else
      return m && m.includes(v);
  }, f = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, p = (m) => {
    const v = new RegExp(g0(m), "i");
    t.visible = v.test(r.value) || e.created;
  };
  return re(() => r.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), re(() => e.value, (m, v) => {
    const { remote: h, valueKey: S } = n.props;
    if ((h ? m !== v : !qn(m, v)) && (n.onOptionDestroy(v, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !h) {
      if (S && We(m) && We(v) && m[S] === v[S])
        return;
      n.setSelected();
    }
  }), re(() => o.disabled, () => {
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
const M0 = U({
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
    const t = Ce("select"), n = da(), o = y(() => [
      t.be("dropdown", "item"),
      t.is("disabled", l(i)),
      t.is("selected", l(r)),
      t.is("hovering", l(p))
    ]), a = Lt({
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
    } = A0(e, a), { visible: f, hover: p } = Sn(a), m = De().proxy;
    u.onOptionCreate(m), wt(() => {
      const h = m.value, { selected: S } = u.states, g = S.some((P) => P.value === m.value);
      ke(() => {
        u.states.cachedOptions.get(h) === m && !g && u.states.cachedOptions.delete(h);
      }), u.onOptionDestroy(h, m);
    });
    function v() {
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
      visible: f,
      hover: p,
      selectOptionClick: v,
      states: a
    };
  }
});
function N0(e, t, n, o, a, s) {
  return Ue((_(), R("li", {
    id: e.id,
    class: M(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Pe(e.selectOptionClick, ["stop"])
  }, [
    ae(e.$slots, "default", {}, () => [
      b("span", null, G(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [It, e.visible]
  ]);
}
var Ir = /* @__PURE__ */ we(M0, [["render", N0], ["__file", "option.vue"]]);
const z0 = U({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = he(va), t = Ce("select"), n = y(() => e.props.popperClass), o = y(() => e.props.multiple), a = y(() => e.props.fitInputWidth), s = A("");
    function r() {
      var i;
      s.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return Ee(() => {
      r(), vt(e.selectRef, r);
    }), {
      ns: t,
      minWidth: s,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: a
    };
  }
});
function F0(e, t, n, o, a, s) {
  return _(), R("div", {
    class: M([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: be({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (_(), R("div", {
      key: 0,
      class: M(e.ns.be("dropdown", "header"))
    }, [
      ae(e.$slots, "header")
    ], 2)) : j("v-if", !0),
    ae(e.$slots, "default"),
    e.$slots.footer ? (_(), R("div", {
      key: 1,
      class: M(e.ns.be("dropdown", "footer"))
    }, [
      ae(e.$slots, "footer")
    ], 2)) : j("v-if", !0)
  ], 6);
}
var B0 = /* @__PURE__ */ we(z0, [["render", F0], ["__file", "select-dropdown.vue"]]);
const V0 = (e, t) => {
  const { t: n } = la(), o = da(), a = Ce("select"), s = Ce("input"), r = Lt({
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
  }), i = A(null), u = A(null), c = A(null), d = A(null), f = A(null), p = A(null), m = A(null), v = A(null), h = A(null), S = A(null), g = A(null), {
    isComposing: P,
    handleCompositionStart: k,
    handleCompositionUpdate: $,
    handleCompositionEnd: E
  } = fl({
    afterComposition: (C) => zt(C)
  }), { wrapperRef: L, isFocused: I, handleBlur: Z } = dl(f, {
    beforeFocus() {
      return B.value;
    },
    afterFocus() {
      e.automaticDropdown && !K.value && (K.value = !0, r.menuVisibleOnFocus = !0);
    },
    beforeBlur(C) {
      var W, ce;
      return ((W = c.value) == null ? void 0 : W.isFocusInsideContent(C)) || ((ce = d.value) == null ? void 0 : ce.isFocusInsideContent(C));
    },
    afterBlur() {
      K.value = !1, r.menuVisibleOnFocus = !1;
    }
  }), K = A(!1), Q = A(), { form: se, formItem: w } = fa(), { inputId: N } = pr(e, {
    formItemContext: w
  }), { valueOnClear: Y, isEmptyValue: O } = Am(e), B = y(() => e.disabled || se?.disabled), T = y(() => Be(e.modelValue) ? e.modelValue.length > 0 : !O(e.modelValue)), ee = y(() => {
    var C;
    return (C = se?.statusIcon) != null ? C : !1;
  }), oe = y(() => e.clearable && !B.value && r.inputHovering && T.value), ie = y(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), me = y(() => a.is("reverse", ie.value && K.value)), ge = y(() => w?.validateState || ""), X = y(() => rl[ge.value]), ue = y(() => e.remote ? 300 : 0), _e = y(() => e.remote && !r.inputValue && r.options.size === 0), z = y(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && r.inputValue && r.options.size > 0 && V.value === 0 ? e.noMatchText || n("el.select.noMatch") : r.options.size === 0 ? e.noDataText || n("el.select.noData") : null), V = y(() => ne.value.filter((C) => C.visible).length), ne = y(() => {
    const C = Array.from(r.options.values()), W = [];
    return r.optionValues.forEach((ce) => {
      const Re = C.findIndex((Ze) => Ze.value === ce);
      Re > -1 && W.push(C[Re]);
    }), W.length >= C.length ? W : C;
  }), ye = y(() => Array.from(r.cachedOptions.values())), Te = y(() => {
    const C = ne.value.filter((W) => !W.created).some((W) => W.currentLabel === r.inputValue);
    return e.filterable && e.allowCreate && r.inputValue !== "" && !C;
  }), de = () => {
    e.filterable && $e(e.filterMethod) || e.filterable && e.remote && $e(e.remoteMethod) || ne.value.forEach((C) => {
      var W;
      (W = C.updateOption) == null || W.call(C, r.inputValue);
    });
  }, xe = mo(), le = y(() => ["small"].includes(xe.value) ? "small" : "default"), Xe = y({
    get() {
      return K.value && !_e.value;
    },
    set(C) {
      K.value = C;
    }
  }), sn = y(() => {
    if (e.multiple && !it(e.modelValue))
      return jt(e.modelValue).length === 0 && !r.inputValue;
    const C = Be(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || it(C) ? !r.inputValue : !0;
  }), ln = y(() => {
    var C;
    const W = (C = e.placeholder) != null ? C : n("el.select.placeholder");
    return e.multiple || !T.value ? W : r.selectedLabel;
  }), un = y(() => Fa ? null : "mouseenter");
  re(() => e.modelValue, (C, W) => {
    e.multiple && e.filterable && !e.reserveKeyword && (r.inputValue = "", Mt("")), He(), !qn(C, W) && e.validateEvent && w?.validate("change").catch((ce) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), re(() => K.value, (C) => {
    C ? Mt(r.inputValue) : (r.inputValue = "", r.previousQuery = null, r.isBeforeHide = !0), t("visible-change", C);
  }), re(() => r.options.entries(), () => {
    Le && (He(), e.defaultFirstOption && (e.filterable || e.remote) && V.value && cn());
  }, {
    flush: "post"
  }), re([() => r.hoveringIndex, ne], ([C]) => {
    pe(C) && C > -1 ? Q.value = ne.value[C] || {} : Q.value = {}, ne.value.forEach((W) => {
      W.hover = Q.value === W;
    });
  }), bi(() => {
    r.isBeforeHide || de();
  });
  const Mt = (C) => {
    r.previousQuery === C || P.value || (r.previousQuery = C, e.filterable && $e(e.filterMethod) ? e.filterMethod(C) : e.filterable && e.remote && $e(e.remoteMethod) && e.remoteMethod(C), e.defaultFirstOption && (e.filterable || e.remote) && V.value ? ke(cn) : ke(dn));
  }, cn = () => {
    const C = ne.value.filter((Ze) => Ze.visible && !Ze.disabled && !Ze.states.groupDisabled), W = C.find((Ze) => Ze.created), ce = C[0], Re = ne.value.map((Ze) => Ze.value);
    r.hoveringIndex = Fr(Re, W || ce);
  }, He = () => {
    if (e.multiple)
      r.selectedLabel = "";
    else {
      const W = Be(e.modelValue) ? e.modelValue[0] : e.modelValue, ce = pt(W);
      r.selectedLabel = ce.currentLabel, r.selected = [ce];
      return;
    }
    const C = [];
    it(e.modelValue) || jt(e.modelValue).forEach((W) => {
      C.push(pt(W));
    }), r.selected = C;
  }, pt = (C) => {
    let W;
    const ce = uc(C);
    for (let fn = r.cachedOptions.size - 1; fn >= 0; fn--) {
      const Ft = ye.value[fn];
      if (ce ? Wt(Ft.value, e.valueKey) === Wt(C, e.valueKey) : Ft.value === C) {
        W = {
          value: C,
          currentLabel: Ft.currentLabel,
          get isDisabled() {
            return Ft.isDisabled;
          }
        };
        break;
      }
    }
    if (W)
      return W;
    const Re = ce ? C.label : C ?? "";
    return {
      value: C,
      currentLabel: Re
    };
  }, dn = () => {
    r.hoveringIndex = ne.value.findIndex((C) => r.selected.some((W) => wo(W) === wo(C)));
  }, qt = () => {
    r.selectionWidth = u.value.getBoundingClientRect().width;
  }, H = () => {
    r.collapseItemWidth = S.value.getBoundingClientRect().width;
  }, fe = () => {
    var C, W;
    (W = (C = c.value) == null ? void 0 : C.updatePopper) == null || W.call(C);
  }, Qe = () => {
    var C, W;
    (W = (C = d.value) == null ? void 0 : C.updatePopper) == null || W.call(C);
  }, Nt = () => {
    r.inputValue.length > 0 && !K.value && (K.value = !0), Mt(r.inputValue);
  }, zt = (C) => {
    if (r.inputValue = C.target.value, e.remote)
      Mr();
    else
      return Nt();
  }, Mr = za(() => {
    Nt();
  }, ue.value), zn = (C) => {
    qn(e.modelValue, C) || t(Zt, C);
  }, ou = (C) => Zp(C, (W) => {
    const ce = r.cachedOptions.get(W);
    return ce && !ce.disabled && !ce.states.groupDisabled;
  }), au = (C) => {
    if (e.multiple && C.code !== Me.delete && C.target.value.length <= 0) {
      const W = jt(e.modelValue).slice(), ce = ou(W);
      if (ce < 0)
        return;
      const Re = W[ce];
      W.splice(ce, 1), t(Ie, W), zn(W), t("remove-tag", Re);
    }
  }, ru = (C, W) => {
    const ce = r.selected.indexOf(W);
    if (ce > -1 && !B.value) {
      const Re = jt(e.modelValue).slice();
      Re.splice(ce, 1), t(Ie, Re), zn(Re), t("remove-tag", W.value);
    }
    C.stopPropagation(), bo();
  }, Nr = (C) => {
    C.stopPropagation();
    const W = e.multiple ? [] : Y.value;
    if (e.multiple)
      for (const ce of r.selected)
        ce.isDisabled && W.push(ce.value);
    t(Ie, W), zn(W), r.hoveringIndex = -1, K.value = !1, t("clear"), bo();
  }, zr = (C) => {
    var W;
    if (e.multiple) {
      const ce = jt((W = e.modelValue) != null ? W : []).slice(), Re = Fr(ce, C);
      Re > -1 ? ce.splice(Re, 1) : (e.multipleLimit <= 0 || ce.length < e.multipleLimit) && ce.push(C.value), t(Ie, ce), zn(ce), C.created && Mt(""), e.filterable && !e.reserveKeyword && (r.inputValue = "");
    } else
      t(Ie, C.value), zn(C.value), K.value = !1;
    bo(), !K.value && ke(() => {
      yo(C);
    });
  }, Fr = (C = [], W) => it(W) ? -1 : We(W.value) ? C.findIndex((ce) => qn(Wt(ce, e.valueKey), wo(W))) : C.indexOf(W.value), yo = (C) => {
    var W, ce, Re, Ze, fn;
    const Ft = Be(C) ? C[0] : C;
    let _o = null;
    if (Ft?.value) {
      const Fn = ne.value.filter((Su) => Su.value === Ft.value);
      Fn.length > 0 && (_o = Fn[0].$el);
    }
    if (c.value && _o) {
      const Fn = (Ze = (Re = (ce = (W = c.value) == null ? void 0 : W.popperRef) == null ? void 0 : ce.contentRef) == null ? void 0 : Re.querySelector) == null ? void 0 : Ze.call(Re, `.${a.be("dropdown", "wrap")}`);
      Fn && Nm(Fn, _o);
    }
    (fn = g.value) == null || fn.handleScroll();
  }, su = (C) => {
    r.options.set(C.value, C), r.cachedOptions.set(C.value, C);
  }, iu = (C, W) => {
    r.options.get(C) === W && r.options.delete(C);
  }, lu = y(() => {
    var C, W;
    return (W = (C = c.value) == null ? void 0 : C.popperRef) == null ? void 0 : W.contentRef;
  }), uu = () => {
    r.isBeforeHide = !1, ke(() => {
      var C;
      (C = g.value) == null || C.update(), yo(r.selected);
    });
  }, bo = () => {
    var C;
    (C = f.value) == null || C.focus();
  }, cu = () => {
    var C;
    if (K.value) {
      K.value = !1, ke(() => {
        var W;
        return (W = f.value) == null ? void 0 : W.blur();
      });
      return;
    }
    (C = f.value) == null || C.blur();
  }, du = (C) => {
    Nr(C);
  }, fu = (C) => {
    if (K.value = !1, I.value) {
      const W = new FocusEvent("focus", C);
      ke(() => Z(W));
    }
  }, pu = () => {
    r.inputValue.length > 0 ? r.inputValue = "" : K.value = !1;
  }, Br = () => {
    B.value || (Fa && (r.inputHovering = !0), r.menuVisibleOnFocus ? r.menuVisibleOnFocus = !1 : K.value = !K.value);
  }, mu = () => {
    if (!K.value)
      Br();
    else {
      const C = ne.value[r.hoveringIndex];
      C && !C.isDisabled && zr(C);
    }
  }, wo = (C) => We(C.value) ? Wt(C.value, e.valueKey) : C.value, vu = y(() => ne.value.filter((C) => C.visible).every((C) => C.isDisabled)), hu = y(() => e.multiple ? e.collapseTags ? r.selected.slice(0, e.maxCollapseTags) : r.selected : []), gu = y(() => e.multiple ? e.collapseTags ? r.selected.slice(e.maxCollapseTags) : [] : []), Vr = (C) => {
    if (!K.value) {
      K.value = !0;
      return;
    }
    if (!(r.options.size === 0 || V.value === 0 || P.value) && !vu.value) {
      C === "next" ? (r.hoveringIndex++, r.hoveringIndex === r.options.size && (r.hoveringIndex = 0)) : C === "prev" && (r.hoveringIndex--, r.hoveringIndex < 0 && (r.hoveringIndex = r.options.size - 1));
      const W = ne.value[r.hoveringIndex];
      (W.isDisabled || !W.visible) && Vr(C), ke(() => yo(Q.value));
    }
  }, yu = () => {
    if (!u.value)
      return 0;
    const C = window.getComputedStyle(u.value);
    return Number.parseFloat(C.gap || "6px");
  }, bu = y(() => {
    const C = yu();
    return { maxWidth: `${S.value && e.maxCollapseTags === 1 ? r.selectionWidth - r.collapseItemWidth - C : r.selectionWidth}px` };
  }), wu = y(() => ({ maxWidth: `${r.selectionWidth}px` })), _u = (C) => {
    t("popup-scroll", C);
  };
  return vt(u, qt), vt(v, fe), vt(L, fe), vt(h, Qe), vt(S, H), Ee(() => {
    He();
  }), {
    inputId: N,
    contentId: o,
    nsSelect: a,
    nsInput: s,
    states: r,
    isFocused: I,
    expanded: K,
    optionsArray: ne,
    hoverOption: Q,
    selectSize: xe,
    filteredOptionsCount: V,
    updateTooltip: fe,
    updateTagTooltip: Qe,
    debouncedOnInputChange: Mr,
    onInput: zt,
    deletePrevTag: au,
    deleteTag: ru,
    deleteSelected: Nr,
    handleOptionSelect: zr,
    scrollToOption: yo,
    hasModelValue: T,
    shouldShowPlaceholder: sn,
    currentPlaceholder: ln,
    mouseEnterEventName: un,
    needStatusIcon: ee,
    showClose: oe,
    iconComponent: ie,
    iconReverse: me,
    validateState: ge,
    validateIcon: X,
    showNewOption: Te,
    updateOptions: de,
    collapseTagSize: le,
    setSelected: He,
    selectDisabled: B,
    emptyText: z,
    handleCompositionStart: k,
    handleCompositionUpdate: $,
    handleCompositionEnd: E,
    onOptionCreate: su,
    onOptionDestroy: iu,
    handleMenuEnter: uu,
    focus: bo,
    blur: cu,
    handleClearClick: du,
    handleClickOutside: fu,
    handleEsc: pu,
    toggleMenu: Br,
    selectOption: mu,
    getValueKey: wo,
    navigateOptions: Vr,
    dropdownMenuVisible: Xe,
    showTagList: hu,
    collapseTagList: gu,
    popupScroll: _u,
    tagStyle: bu,
    collapseTagStyle: wu,
    popperRef: lu,
    inputRef: f,
    tooltipRef: c,
    tagTooltipRef: d,
    prefixRef: p,
    suffixRef: m,
    selectRef: i,
    wrapperRef: L,
    selectionRef: u,
    scrollbarRef: g,
    menuRef: v,
    tagMenuRef: h,
    collapseItemRef: S
  };
};
var D0 = U({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = he(va);
    let o = [];
    return () => {
      var a, s;
      const r = (a = t.default) == null ? void 0 : a.call(t), i = [];
      function u(c) {
        Be(c) && c.forEach((d) => {
          var f, p, m, v;
          const h = (f = d?.type || {}) == null ? void 0 : f.name;
          h === "ElOptionGroup" ? u(!Ne(d.children) && !Be(d.children) && $e((p = d.children) == null ? void 0 : p.default) ? (m = d.children) == null ? void 0 : m.default() : d.children) : h === "ElOption" ? i.push((v = d.props) == null ? void 0 : v.value) : Be(d.children) && u(d.children);
        });
      }
      return r.length && u((s = r[0]) == null ? void 0 : s.children), qn(i, o) || (o = i, n && (n.states.optionValues = i)), r;
    };
  }
});
const H0 = ve({
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
  size: Cn,
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
    type: Tn,
    default: ca
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Tn,
    default: nl
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
    values: Mn,
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
  ...Ji,
  ...rn(["ariaLabel"])
}), ti = "ElSelect", j0 = U({
  name: ti,
  componentName: ti,
  components: {
    ElSelectMenu: B0,
    ElOption: Ir,
    ElOptions: D0,
    ElTag: S0,
    ElScrollbar: Kv,
    ElTooltip: $r,
    ElIcon: Fe
  },
  directives: { ClickOutside: k0 },
  props: H0,
  emits: [
    Ie,
    Zt,
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
      return Be(u) ? c ? u : d : c ? d : u;
    }), o = Lt({
      ...Sn(e),
      modelValue: n
    }), a = V0(o, t), { calculatorRef: s, inputStyle: r } = R0();
    ct(va, Lt({
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
function W0(e, t, n, o, a, s) {
  const r = Jt("el-tag"), i = Jt("el-tooltip"), u = Jt("el-icon"), c = Jt("el-option"), d = Jt("el-options"), f = Jt("el-scrollbar"), p = Jt("el-select-menu"), m = Fu("click-outside");
  return Ue((_(), R("div", {
    ref: "selectRef",
    class: M([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Bu(e.mouseEnterEventName)]: (v) => e.states.inputHovering = !0,
    onMouseleave: (v) => e.states.inputHovering = !1
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
      onHide: (v) => e.states.isBeforeHide = !1
    }, {
      default: q(() => {
        var v;
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
            onClick: Pe(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (_(), R("div", {
              key: 0,
              ref: "prefixRef",
              class: M(e.nsSelect.e("prefix"))
            }, [
              ae(e.$slots, "prefix")
            ], 2)) : j("v-if", !0),
            b("div", {
              ref: "selectionRef",
              class: M([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ae(e.$slots, "tag", { key: 0 }, () => [
                (_(!0), R(Oe, null, tt(e.showTagList, (h) => (_(), R("div", {
                  key: e.getValueKey(h),
                  class: M(e.nsSelect.e("selected-item"))
                }, [
                  F(r, {
                    closable: !e.selectDisabled && !h.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: be(e.tagStyle),
                    onClose: (S) => e.deleteTag(S, h)
                  }, {
                    default: q(() => [
                      b("span", {
                        class: M(e.nsSelect.e("tags-text"))
                      }, [
                        ae(e.$slots, "label", {
                          label: h.currentLabel,
                          value: h.value
                        }, () => [
                          Qt(G(h.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (_(), J(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: q(() => [
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
                        style: be(e.collapseTagStyle)
                      }, {
                        default: q(() => [
                          b("span", {
                            class: M(e.nsSelect.e("tags-text"))
                          }, " + " + G(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: q(() => [
                    b("div", {
                      ref: "tagMenuRef",
                      class: M(e.nsSelect.e("selection"))
                    }, [
                      (_(!0), R(Oe, null, tt(e.collapseTagList, (h) => (_(), R("div", {
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
                          onClose: (S) => e.deleteTag(S, h)
                        }, {
                          default: q(() => [
                            b("span", {
                              class: M(e.nsSelect.e("tags-text"))
                            }, [
                              ae(e.$slots, "label", {
                                label: h.currentLabel,
                                value: h.value
                              }, () => [
                                Qt(G(h.currentLabel), 1)
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
              b("div", {
                class: M([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                Ue(b("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (h) => e.states.inputValue = h,
                  type: "text",
                  name: e.name,
                  class: M([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: be(e.inputStyle),
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
                    Ct(Pe((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Ct(Pe((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    Ct(Pe(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    Ct(Pe(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    Ct(Pe(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Pe(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [Vu, e.states.inputValue]
                ]),
                e.filterable ? (_(), R("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: M(e.nsSelect.e("input-calculator")),
                  textContent: G(e.states.inputValue)
                }, null, 10, ["textContent"])) : j("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (_(), R("div", {
                key: 1,
                class: M([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? ae(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  b("span", null, G(e.currentPlaceholder), 1)
                ]) : (_(), R("span", { key: 1 }, G(e.currentPlaceholder), 1))
              ], 2)) : j("v-if", !0)
            ], 2),
            b("div", {
              ref: "suffixRef",
              class: M(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (_(), J(u, {
                key: 0,
                class: M([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: q(() => [
                  (_(), J(et(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0),
              e.showClose && e.clearIcon ? (_(), J(u, {
                key: 1,
                class: M([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: q(() => [
                  (_(), J(et(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : j("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (_(), J(u, {
                key: 2,
                class: M([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: q(() => [
                  (_(), J(et(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : j("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: q(() => [
        F(p, { ref: "menuRef" }, {
          default: q(() => [
            e.$slots.header ? (_(), R("div", {
              key: 0,
              class: M(e.nsSelect.be("dropdown", "header")),
              onClick: Pe(() => {
              }, ["stop"])
            }, [
              ae(e.$slots, "header")
            ], 10, ["onClick"])) : j("v-if", !0),
            Ue(F(f, {
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
              default: q(() => [
                e.showNewOption ? (_(), J(c, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : j("v-if", !0),
                F(d, null, {
                  default: q(() => [
                    ae(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [It, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (_(), R("div", {
              key: 1,
              class: M(e.nsSelect.be("dropdown", "loading"))
            }, [
              ae(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (_(), R("div", {
              key: 2,
              class: M(e.nsSelect.be("dropdown", "empty"))
            }, [
              ae(e.$slots, "empty", {}, () => [
                b("span", null, G(e.emptyText), 1)
              ])
            ], 2)) : j("v-if", !0),
            e.$slots.footer ? (_(), R("div", {
              key: 3,
              class: M(e.nsSelect.be("dropdown", "footer")),
              onClick: Pe(() => {
              }, ["stop"])
            }, [
              ae(e.$slots, "footer")
            ], 10, ["onClick"])) : j("v-if", !0)
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
var U0 = /* @__PURE__ */ we(j0, [["render", W0], ["__file", "select.vue"]]);
const K0 = U({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Ce("select"), n = A(null), o = De(), a = A([]);
    ct(Ml, Lt({
      ...Sn(e)
    }));
    const s = y(() => a.value.some((c) => c.visible === !0)), r = (c) => {
      var d, f;
      return ((d = c.type) == null ? void 0 : d.name) === "ElOption" && !!((f = c.component) != null && f.proxy);
    }, i = (c) => {
      const d = jt(c), f = [];
      return d.forEach((p) => {
        var m, v;
        r(p) ? f.push(p.component.proxy) : (m = p.children) != null && m.length ? f.push(...i(p.children)) : (v = p.component) != null && v.subTree && f.push(...i(p.component.subTree));
      }), f;
    }, u = () => {
      a.value = i(o.subTree);
    };
    return Ee(() => {
      u();
    }), bm(n, u, {
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
function G0(e, t, n, o, a, s) {
  return Ue((_(), R("ul", {
    ref: "groupRef",
    class: M(e.ns.be("group", "wrap"))
  }, [
    b("li", {
      class: M(e.ns.be("group", "title"))
    }, G(e.label), 3),
    b("li", null, [
      b("ul", {
        class: M(e.ns.b("group"))
      }, [
        ae(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [It, e.visible]
  ]);
}
var Nl = /* @__PURE__ */ we(K0, [["render", G0], ["__file", "option-group.vue"]]);
const Lr = Je(U0, {
  Option: Ir,
  OptionGroup: Nl
}), xr = dr(Ir);
dr(Nl);
const Z0 = ve({
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
}), Y0 = U({
  name: "ElProgress"
}), q0 = /* @__PURE__ */ U({
  ...Y0,
  props: Z0,
  setup(e) {
    const t = e, n = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, o = Ce("progress"), a = y(() => {
      const k = {
        width: `${t.percentage}%`,
        animationDuration: `${t.duration}s`
      }, $ = P(t.percentage);
      return $.includes("gradient") ? k.background = $ : k.backgroundColor = $, k;
    }), s = y(() => (t.strokeWidth / t.width * 100).toFixed(1)), r = y(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(`${50 - Number.parseFloat(s.value) / 2}`, 10) : 0), i = y(() => {
      const k = r.value, $ = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${$ ? "" : "-"}${k}
          a ${k} ${k} 0 1 1 0 ${$ ? "-" : ""}${k * 2}
          a ${k} ${k} 0 1 1 0 ${$ ? "" : "-"}${k * 2}
          `;
    }), u = y(() => 2 * Math.PI * r.value), c = y(() => t.type === "dashboard" ? 0.75 : 1), d = y(() => `${-1 * u.value * (1 - c.value) / 2}px`), f = y(() => ({
      strokeDasharray: `${u.value * c.value}px, ${u.value}px`,
      strokeDashoffset: d.value
    })), p = y(() => ({
      strokeDasharray: `${u.value * c.value * (t.percentage / 100)}px, ${u.value}px`,
      strokeDashoffset: d.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), m = y(() => {
      let k;
      return t.color ? k = P(t.percentage) : k = n[t.status] || n.default, k;
    }), v = y(() => t.status === "warning" ? al : t.type === "line" ? t.status === "success" ? ol : ca : t.status === "success" ? Um : io), h = y(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), S = y(() => t.format(t.percentage));
    function g(k) {
      const $ = 100 / k.length;
      return k.map((L, I) => Ne(L) ? {
        color: L,
        percentage: (I + 1) * $
      } : L).sort((L, I) => L.percentage - I.percentage);
    }
    const P = (k) => {
      var $;
      const { color: E } = t;
      if ($e(E))
        return E(k);
      if (Ne(E))
        return E;
      {
        const L = g(E);
        for (const I of L)
          if (I.percentage > k)
            return I.color;
        return ($ = L[L.length - 1]) == null ? void 0 : $.color;
      }
    };
    return (k, $) => (_(), R("div", {
      class: M([
        l(o).b(),
        l(o).m(k.type),
        l(o).is(k.status),
        {
          [l(o).m("without-text")]: !k.showText,
          [l(o).m("text-inside")]: k.textInside
        }
      ]),
      role: "progressbar",
      "aria-valuenow": k.percentage,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, [
      k.type === "line" ? (_(), R("div", {
        key: 0,
        class: M(l(o).b("bar"))
      }, [
        b("div", {
          class: M(l(o).be("bar", "outer")),
          style: be({ height: `${k.strokeWidth}px` })
        }, [
          b("div", {
            class: M([
              l(o).be("bar", "inner"),
              { [l(o).bem("bar", "inner", "indeterminate")]: k.indeterminate },
              { [l(o).bem("bar", "inner", "striped")]: k.striped },
              { [l(o).bem("bar", "inner", "striped-flow")]: k.stripedFlow }
            ]),
            style: be(l(a))
          }, [
            (k.showText || k.$slots.default) && k.textInside ? (_(), R("div", {
              key: 0,
              class: M(l(o).be("bar", "innerText"))
            }, [
              ae(k.$slots, "default", { percentage: k.percentage }, () => [
                b("span", null, G(l(S)), 1)
              ])
            ], 2)) : j("v-if", !0)
          ], 6)
        ], 6)
      ], 2)) : (_(), R("div", {
        key: 1,
        class: M(l(o).b("circle")),
        style: be({ height: `${k.width}px`, width: `${k.width}px` })
      }, [
        (_(), R("svg", { viewBox: "0 0 100 100" }, [
          b("path", {
            class: M(l(o).be("circle", "track")),
            d: l(i),
            stroke: `var(${l(o).cssVarName("fill-color-light")}, #e5e9f2)`,
            "stroke-linecap": k.strokeLinecap,
            "stroke-width": l(s),
            fill: "none",
            style: be(l(f))
          }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]),
          b("path", {
            class: M(l(o).be("circle", "path")),
            d: l(i),
            stroke: l(m),
            fill: "none",
            opacity: k.percentage ? 1 : 0,
            "stroke-linecap": k.strokeLinecap,
            "stroke-width": l(s),
            style: be(l(p))
          }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])
        ]))
      ], 6)),
      (k.showText || k.$slots.default) && !k.textInside ? (_(), R("div", {
        key: 2,
        class: M(l(o).e("text")),
        style: be({ fontSize: `${l(h)}px` })
      }, [
        ae(k.$slots, "default", { percentage: k.percentage }, () => [
          k.status ? (_(), J(l(Fe), { key: 1 }, {
            default: q(() => [
              (_(), J(et(l(v))))
            ]),
            _: 1
          })) : (_(), R("span", { key: 0 }, G(l(S)), 1))
        ])
      ], 6)) : j("v-if", !0)
    ], 10, ["aria-valuenow"]));
  }
});
var J0 = /* @__PURE__ */ we(q0, [["__file", "progress.vue"]]);
const X0 = Je(J0), Q0 = ve({
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
}), ey = ve({
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
}), ty = U({
  name: "ElSkeletonItem"
}), ny = /* @__PURE__ */ U({
  ...ty,
  props: ey,
  setup(e) {
    const t = Ce("skeleton");
    return (n, o) => (_(), R("div", {
      class: M([l(t).e("item"), l(t).e(n.variant)])
    }, [
      n.variant === "image" ? (_(), J(l(sv), { key: 0 })) : j("v-if", !0)
    ], 2));
  }
});
var Go = /* @__PURE__ */ we(ny, [["__file", "skeleton-item.vue"]]);
const oy = (e, t = 0) => {
  if (t === 0)
    return e;
  const n = We(t) && !!t.initVal, o = A(n);
  let a = null;
  const s = (i) => {
    if (it(i)) {
      o.value = e.value;
      return;
    }
    a && clearTimeout(a), a = setTimeout(() => {
      o.value = e.value;
    }, i);
  }, r = (i) => {
    i === "leading" ? pe(t) ? s(t) : s(t.leading) : We(t) ? s(t.trailing) : o.value = !1;
  };
  return Ee(() => r("leading")), re(() => e.value, (i) => {
    r(i ? "leading" : "trailing");
  }), o;
}, ay = U({
  name: "ElSkeleton"
}), ry = /* @__PURE__ */ U({
  ...ay,
  props: Q0,
  setup(e, { expose: t }) {
    const n = e, o = Ce("skeleton"), a = oy(ht(n, "loading"), n.throttle);
    return t({
      uiLoading: a
    }), (s, r) => l(a) ? (_(), R("div", Kt({
      key: 0,
      class: [l(o).b(), l(o).is("animated", s.animated)]
    }, s.$attrs), [
      (_(!0), R(Oe, null, tt(s.count, (i) => (_(), R(Oe, { key: i }, [
        l(a) ? ae(s.$slots, "template", { key: i }, () => [
          F(Go, {
            class: M(l(o).is("first")),
            variant: "p"
          }, null, 8, ["class"]),
          (_(!0), R(Oe, null, tt(s.rows, (u) => (_(), J(Go, {
            key: u,
            class: M([
              l(o).e("paragraph"),
              l(o).is("last", u === s.rows && s.rows > 1)
            ]),
            variant: "p"
          }, null, 8, ["class"]))), 128))
        ]) : j("v-if", !0)
      ], 64))), 128))
    ], 16)) : ae(s.$slots, "default", Du(Kt({ key: 1 }, s.$attrs)));
  }
});
var sy = /* @__PURE__ */ we(ry, [["__file", "skeleton.vue"]]);
const iy = Je(sy, {
  SkeletonItem: Go
});
dr(Go);
const zl = Symbol("sliderContextKey"), ly = ve({
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
  size: Cn,
  inputSize: Cn,
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
    values: Mn,
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
  ...rn(["ariaLabel"])
}), ka = (e) => pe(e) || Be(e) && e.every(pe), uy = {
  [Ie]: ka,
  [$t]: ka,
  [Zt]: ka
}, cy = ve({
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: Boolean,
  tooltipClass: String,
  placement: {
    type: String,
    values: Mn,
    default: "top"
  }
}), dy = {
  [Ie]: (e) => pe(e)
}, fy = (e, t, n) => {
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
}, py = (e, t, n) => {
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
    resetSize: m,
    updateDragging: v
  } = he(zl), { tooltip: h, tooltipVisible: S, formatValue: g, displayTooltip: P, hideTooltip: k } = fy(e, f, i), $ = A(), E = y(() => `${(e.modelValue - a.value) / (s.value - a.value) * 100}%`), L = y(() => e.vertical ? { bottom: E.value } : { left: E.value }), I = () => {
    t.hovering = !0, P();
  }, Z = () => {
    t.hovering = !1, t.dragging || k();
  }, K = (X) => {
    o.value || (X.preventDefault(), oe(X), window.addEventListener("mousemove", ie), window.addEventListener("touchmove", ie), window.addEventListener("mouseup", me), window.addEventListener("touchend", me), window.addEventListener("contextmenu", me), $.value.focus());
  }, Q = (X) => {
    o.value || (t.newPosition = Number.parseFloat(E.value) + X / (s.value - a.value) * 100, ge(t.newPosition), p());
  }, se = () => {
    Q(-r.value);
  }, w = () => {
    Q(r.value);
  }, N = () => {
    Q(-r.value * 4);
  }, Y = () => {
    Q(r.value * 4);
  }, O = () => {
    o.value || (ge(0), p());
  }, B = () => {
    o.value || (ge(100), p());
  }, T = (X) => {
    let ue = !0;
    switch (X.code) {
      case Me.left:
      case Me.down:
        se();
        break;
      case Me.right:
      case Me.up:
        w();
        break;
      case Me.home:
        O();
        break;
      case Me.end:
        B();
        break;
      case Me.pageDown:
        N();
        break;
      case Me.pageUp:
        Y();
        break;
      default:
        ue = !1;
        break;
    }
    ue && X.preventDefault();
  }, ee = (X) => {
    let ue, _e;
    return X.type.startsWith("touch") ? (_e = X.touches[0].clientY, ue = X.touches[0].clientX) : (_e = X.clientY, ue = X.clientX), {
      clientX: ue,
      clientY: _e
    };
  }, oe = (X) => {
    t.dragging = !0, t.isClick = !0;
    const { clientX: ue, clientY: _e } = ee(X);
    e.vertical ? t.startY = _e : t.startX = ue, t.startPosition = Number.parseFloat(E.value), t.newPosition = t.startPosition;
  }, ie = (X) => {
    if (t.dragging) {
      t.isClick = !1, P(), m();
      let ue;
      const { clientX: _e, clientY: z } = ee(X);
      e.vertical ? (t.currentY = z, ue = (t.startY - t.currentY) / d.value * 100) : (t.currentX = _e, ue = (t.currentX - t.startX) / d.value * 100), t.newPosition = t.startPosition + ue, ge(t.newPosition);
    }
  }, me = () => {
    t.dragging && (setTimeout(() => {
      t.dragging = !1, t.hovering || k(), t.isClick || ge(t.newPosition), p();
    }, 0), window.removeEventListener("mousemove", ie), window.removeEventListener("touchmove", ie), window.removeEventListener("mouseup", me), window.removeEventListener("touchend", me), window.removeEventListener("contextmenu", me));
  }, ge = async (X) => {
    if (X === null || Number.isNaN(+X))
      return;
    X < 0 ? X = 0 : X > 100 && (X = 100);
    const ue = 100 / ((s.value - a.value) / r.value);
    let z = Math.round(X / ue) * ue * (s.value - a.value) * 0.01 + a.value;
    z = Number.parseFloat(z.toFixed(c.value)), z !== e.modelValue && n(Ie, z), !t.dragging && e.modelValue !== t.oldValue && (t.oldValue = e.modelValue), await ke(), t.dragging && P(), h.value.updatePopper();
  };
  return re(() => t.dragging, (X) => {
    v(X);
  }), Ve($, "touchstart", K, { passive: !1 }), {
    disabled: o,
    button: $,
    tooltip: h,
    tooltipVisible: S,
    showTooltip: i,
    persistent: u,
    wrapperStyle: L,
    formatValue: g,
    handleMouseEnter: I,
    handleMouseLeave: Z,
    onButtonDown: K,
    onKeyDown: T,
    setPosition: ge
  };
}, my = U({
  name: "ElSliderButton"
}), vy = /* @__PURE__ */ U({
  ...my,
  props: cy,
  emits: dy,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Ce("slider"), s = Lt({
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
      wrapperStyle: m,
      formatValue: v,
      handleMouseEnter: h,
      handleMouseLeave: S,
      onButtonDown: g,
      onKeyDown: P,
      setPosition: k
    } = py(o, s, n), { hovering: $, dragging: E } = Sn(s);
    return t({
      onButtonDown: g,
      onKeyDown: P,
      setPosition: k,
      hovering: $,
      dragging: E
    }), (L, I) => (_(), R("div", {
      ref_key: "button",
      ref: u,
      class: M([l(a).e("button-wrapper"), { hover: l($), dragging: l(E) }]),
      style: be(l(m)),
      tabindex: l(i) ? -1 : 0,
      onMouseenter: l(h),
      onMouseleave: l(S),
      onMousedown: l(g),
      onFocus: l(h),
      onBlur: l(S),
      onKeydown: l(P)
    }, [
      F(l($r), {
        ref_key: "tooltip",
        ref: c,
        visible: l(p),
        placement: L.placement,
        "fallback-placements": ["top", "bottom", "right", "left"],
        "stop-popper-mouse-event": !1,
        "popper-class": L.tooltipClass,
        disabled: !l(d),
        persistent: l(r)
      }, {
        content: q(() => [
          b("span", null, G(l(v)), 1)
        ]),
        default: q(() => [
          b("div", {
            class: M([l(a).e("button"), { hover: l($), dragging: l(E) }])
          }, null, 2)
        ]),
        _: 1
      }, 8, ["visible", "placement", "popper-class", "disabled", "persistent"])
    ], 46, ["tabindex", "onMouseenter", "onMouseleave", "onMousedown", "onFocus", "onBlur", "onKeydown"]));
  }
});
var ni = /* @__PURE__ */ we(vy, [["__file", "button.vue"]]);
const hy = ve({
  mark: {
    type: te([String, Object]),
    default: void 0
  }
});
var gy = U({
  name: "ElSliderMarker",
  props: hy,
  setup(e) {
    const t = Ce("slider"), n = y(() => Ne(e.mark) ? e.mark : e.mark.label), o = y(() => Ne(e.mark) ? void 0 : e.mark.style);
    return () => Si("div", {
      class: t.e("marks-text"),
      style: o.value
    }, n.value);
  }
});
const yy = (e, t, n) => {
  const { form: o, formItem: a } = fa(), s = Ut(), r = A(), i = A(), u = {
    firstButton: r,
    secondButton: i
  }, c = y(() => e.disabled || o?.disabled || !1), d = y(() => Math.min(t.firstValue, t.secondValue)), f = y(() => Math.max(t.firstValue, t.secondValue)), p = y(() => e.range ? `${100 * (f.value - d.value) / (e.max - e.min)}%` : `${100 * (t.firstValue - e.min) / (e.max - e.min)}%`), m = y(() => e.range ? `${100 * (d.value - e.min) / (e.max - e.min)}%` : "0%"), v = y(() => e.vertical ? { height: e.height } : {}), h = y(() => e.vertical ? {
    height: p.value,
    bottom: m.value
  } : {
    width: p.value,
    left: m.value
  }), S = () => {
    s.value && (t.sliderSize = s.value[`client${e.vertical ? "Height" : "Width"}`]);
  }, g = (w) => {
    const N = e.min + w * (e.max - e.min) / 100;
    if (!e.range)
      return r;
    let Y;
    return Math.abs(d.value - N) < Math.abs(f.value - N) ? Y = t.firstValue < t.secondValue ? "firstButton" : "secondButton" : Y = t.firstValue > t.secondValue ? "firstButton" : "secondButton", u[Y];
  }, P = (w) => {
    const N = g(w);
    return N.value.setPosition(w), N;
  }, k = (w) => {
    t.firstValue = w ?? e.min, E(e.range ? [d.value, f.value] : w ?? e.min);
  }, $ = (w) => {
    t.secondValue = w, e.range && E([d.value, f.value]);
  }, E = (w) => {
    n(Ie, w), n($t, w);
  }, L = async () => {
    await ke(), n(Zt, e.range ? [d.value, f.value] : e.modelValue);
  }, I = (w) => {
    var N, Y, O, B, T, ee;
    if (c.value || t.dragging)
      return;
    S();
    let oe = 0;
    if (e.vertical) {
      const ie = (O = (Y = (N = w.touches) == null ? void 0 : N.item(0)) == null ? void 0 : Y.clientY) != null ? O : w.clientY;
      oe = (s.value.getBoundingClientRect().bottom - ie) / t.sliderSize * 100;
    } else {
      const ie = (ee = (T = (B = w.touches) == null ? void 0 : B.item(0)) == null ? void 0 : T.clientX) != null ? ee : w.clientX, me = s.value.getBoundingClientRect().left;
      oe = (ie - me) / t.sliderSize * 100;
    }
    if (!(oe < 0 || oe > 100))
      return P(oe);
  };
  return {
    elFormItem: a,
    slider: s,
    firstButton: r,
    secondButton: i,
    sliderDisabled: c,
    minValue: d,
    maxValue: f,
    runwayStyle: v,
    barStyle: h,
    resetSize: S,
    setPosition: P,
    emitChange: L,
    onSliderWrapperPrevent: (w) => {
      var N, Y;
      ((N = u.firstButton.value) != null && N.dragging || (Y = u.secondButton.value) != null && Y.dragging) && w.preventDefault();
    },
    onSliderClick: (w) => {
      I(w) && L();
    },
    onSliderDown: async (w) => {
      const N = I(w);
      N && (await ke(), N.value.onButtonDown(w));
    },
    onSliderMarkerDown: (w) => {
      c.value || t.dragging || P(w);
    },
    setFirstValue: k,
    setSecondValue: $
  };
}, by = (e, t, n, o) => ({
  stops: y(() => {
    if (!e.showStops || e.min > e.max)
      return [];
    if (e.step === 0)
      return [];
    const r = (e.max - e.min) / e.step, i = 100 * e.step / (e.max - e.min), u = Array.from({ length: r - 1 }).map((c, d) => (d + 1) * i);
    return e.range ? u.filter((c) => c < 100 * (n.value - e.min) / (e.max - e.min) || c > 100 * (o.value - e.min) / (e.max - e.min)) : u.filter((c) => c > 100 * (t.firstValue - e.min) / (e.max - e.min));
  }),
  getStopStyle: (r) => e.vertical ? { bottom: `${r}%` } : { left: `${r}%` }
}), wy = (e) => y(() => e.marks ? Object.keys(e.marks).map(Number.parseFloat).sort((n, o) => n - o).filter((n) => n <= e.max && n >= e.min).map((n) => ({
  point: n,
  position: (n - e.min) * 100 / (e.max - e.min),
  mark: e.marks[n]
})) : []), _y = (e, t, n, o, a, s) => {
  const r = (c) => {
    a(Ie, c), a($t, c);
  }, i = () => e.range ? ![n.value, o.value].every((c, d) => c === t.oldValue[d]) : e.modelValue !== t.oldValue, u = () => {
    var c, d;
    e.min > e.max && cr("Slider", "min should not be greater than max.");
    const f = e.modelValue;
    e.range && Be(f) ? f[1] < e.min ? r([e.min, e.min]) : f[0] > e.max ? r([e.max, e.max]) : f[0] < e.min ? r([e.min, f[1]]) : f[1] > e.max ? r([f[0], e.max]) : (t.firstValue = f[0], t.secondValue = f[1], i() && (e.validateEvent && ((c = s?.validate) == null || c.call(s, "change").catch((p) => void 0)), t.oldValue = f.slice())) : !e.range && pe(f) && !Number.isNaN(f) && (f < e.min ? r(e.min) : f > e.max ? r(e.max) : (t.firstValue = f, i() && (e.validateEvent && ((d = s?.validate) == null || d.call(s, "change").catch((p) => void 0)), t.oldValue = f)));
  };
  u(), re(() => t.dragging, (c) => {
    c || u();
  }), re(() => e.modelValue, (c, d) => {
    t.dragging || Be(c) && Be(d) && c.every((f, p) => f === d[p]) && t.firstValue === c[0] && t.secondValue === c[1] || u();
  }, {
    deep: !0
  }), re(() => [e.min, e.max], () => {
    u();
  });
}, Sy = (e, t, n) => {
  const o = A();
  return Ee(async () => {
    e.range ? (Be(e.modelValue) ? (t.firstValue = Math.max(e.min, e.modelValue[0]), t.secondValue = Math.min(e.max, e.modelValue[1])) : (t.firstValue = e.min, t.secondValue = e.max), t.oldValue = [t.firstValue, t.secondValue]) : (!pe(e.modelValue) || Number.isNaN(e.modelValue) ? t.firstValue = e.min : t.firstValue = Math.min(e.max, Math.max(e.min, e.modelValue)), t.oldValue = t.firstValue), Ve(window, "resize", n), await ke(), n();
  }), {
    sliderWrapper: o
  };
}, ky = U({
  name: "ElSlider"
}), Cy = /* @__PURE__ */ U({
  ...ky,
  props: ly,
  emits: uy,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Ce("slider"), { t: s } = la(), r = Lt({
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
      maxValue: m,
      runwayStyle: v,
      barStyle: h,
      resetSize: S,
      emitChange: g,
      onSliderWrapperPrevent: P,
      onSliderClick: k,
      onSliderDown: $,
      onSliderMarkerDown: E,
      setFirstValue: L,
      setSecondValue: I
    } = yy(o, r, n), { stops: Z, getStopStyle: K } = by(o, r, p, m), { inputId: Q, isLabeledByFormItem: se } = pr(o, {
      formItemContext: i
    }), w = mo(), N = y(() => o.inputSize || w.value), Y = y(() => o.ariaLabel || s("el.slider.defaultLabel", {
      min: o.min,
      max: o.max
    })), O = y(() => o.range ? o.rangeStartLabel || s("el.slider.defaultRangeStartLabel") : Y.value), B = y(() => o.formatValueText ? o.formatValueText(X.value) : `${X.value}`), T = y(() => o.rangeEndLabel || s("el.slider.defaultRangeEndLabel")), ee = y(() => o.formatValueText ? o.formatValueText(ue.value) : `${ue.value}`), oe = y(() => [
      a.b(),
      a.m(w.value),
      a.is("vertical", o.vertical),
      { [a.m("with-input")]: o.showInput }
    ]), ie = wy(o);
    _y(o, r, p, m, n, i);
    const me = y(() => {
      const V = [o.min, o.max, o.step].map((ne) => {
        const ye = `${ne}`.split(".")[1];
        return ye ? ye.length : 0;
      });
      return Math.max.apply(null, V);
    }), { sliderWrapper: ge } = Sy(o, r, S), { firstValue: X, secondValue: ue, sliderSize: _e } = Sn(r), z = (V) => {
      r.dragging = V;
    };
    return Ve(ge, "touchstart", P, {
      passive: !1
    }), Ve(ge, "touchmove", P, {
      passive: !1
    }), ct(zl, {
      ...Sn(o),
      sliderSize: _e,
      disabled: f,
      precision: me,
      emitChange: g,
      resetSize: S,
      updateDragging: z
    }), t({
      onSliderClick: k
    }), (V, ne) => {
      var ye, Te;
      return _(), R("div", {
        id: V.range ? l(Q) : void 0,
        ref_key: "sliderWrapper",
        ref: ge,
        class: M(l(oe)),
        role: V.range ? "group" : void 0,
        "aria-label": V.range && !l(se) ? l(Y) : void 0,
        "aria-labelledby": V.range && l(se) ? (ye = l(i)) == null ? void 0 : ye.labelId : void 0
      }, [
        b("div", {
          ref_key: "slider",
          ref: u,
          class: M([
            l(a).e("runway"),
            { "show-input": V.showInput && !V.range },
            l(a).is("disabled", l(f))
          ]),
          style: be(l(v)),
          onMousedown: l($),
          onTouchstartPassive: l($)
        }, [
          b("div", {
            class: M(l(a).e("bar")),
            style: be(l(h))
          }, null, 6),
          F(ni, {
            id: V.range ? void 0 : l(Q),
            ref_key: "firstButton",
            ref: c,
            "model-value": l(X),
            vertical: V.vertical,
            "tooltip-class": V.tooltipClass,
            placement: V.placement,
            role: "slider",
            "aria-label": V.range || !l(se) ? l(O) : void 0,
            "aria-labelledby": !V.range && l(se) ? (Te = l(i)) == null ? void 0 : Te.labelId : void 0,
            "aria-valuemin": V.min,
            "aria-valuemax": V.range ? l(ue) : V.max,
            "aria-valuenow": l(X),
            "aria-valuetext": l(B),
            "aria-orientation": V.vertical ? "vertical" : "horizontal",
            "aria-disabled": l(f),
            "onUpdate:modelValue": l(L)
          }, null, 8, ["id", "model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-labelledby", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"]),
          V.range ? (_(), J(ni, {
            key: 0,
            ref_key: "secondButton",
            ref: d,
            "model-value": l(ue),
            vertical: V.vertical,
            "tooltip-class": V.tooltipClass,
            placement: V.placement,
            role: "slider",
            "aria-label": l(T),
            "aria-valuemin": l(X),
            "aria-valuemax": V.max,
            "aria-valuenow": l(ue),
            "aria-valuetext": l(ee),
            "aria-orientation": V.vertical ? "vertical" : "horizontal",
            "aria-disabled": l(f),
            "onUpdate:modelValue": l(I)
          }, null, 8, ["model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"])) : j("v-if", !0),
          V.showStops ? (_(), R("div", { key: 1 }, [
            (_(!0), R(Oe, null, tt(l(Z), (de, xe) => (_(), R("div", {
              key: xe,
              class: M(l(a).e("stop")),
              style: be(l(K)(de))
            }, null, 6))), 128))
          ])) : j("v-if", !0),
          l(ie).length > 0 ? (_(), R(Oe, { key: 2 }, [
            b("div", null, [
              (_(!0), R(Oe, null, tt(l(ie), (de, xe) => (_(), R("div", {
                key: xe,
                style: be(l(K)(de.position)),
                class: M([l(a).e("stop"), l(a).e("marks-stop")])
              }, null, 6))), 128))
            ]),
            b("div", {
              class: M(l(a).e("marks"))
            }, [
              (_(!0), R(Oe, null, tt(l(ie), (de, xe) => (_(), J(l(gy), {
                key: xe,
                mark: de.mark,
                style: be(l(K)(de.position)),
                onMousedown: Pe((le) => l(E)(de.position), ["stop"])
              }, null, 8, ["mark", "style", "onMousedown"]))), 128))
            ], 2)
          ], 64)) : j("v-if", !0)
        ], 46, ["onMousedown", "onTouchstartPassive"]),
        V.showInput && !V.range ? (_(), J(l(x0), {
          key: 0,
          ref: "input",
          "model-value": l(X),
          class: M(l(a).e("input")),
          step: V.step,
          disabled: l(f),
          controls: V.showInputControls,
          min: V.min,
          max: V.max,
          precision: l(me),
          debounce: V.debounce,
          size: l(N),
          "onUpdate:modelValue": l(L),
          onChange: l(g)
        }, null, 8, ["model-value", "class", "step", "disabled", "controls", "min", "max", "precision", "debounce", "size", "onUpdate:modelValue", "onChange"])) : j("v-if", !0)
      ], 10, ["id", "role", "aria-label", "aria-labelledby"]);
    };
  }
});
var Ty = /* @__PURE__ */ we(Cy, [["__file", "slider.vue"]]);
const Ey = Je(Ty), Fl = ["success", "info", "warning", "error"], ze = il({
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
  appendTo: Le ? document.body : void 0
}), Py = ve({
  customClass: {
    type: String,
    default: ze.customClass
  },
  center: {
    type: Boolean,
    default: ze.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: ze.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: ze.duration
  },
  icon: {
    type: Tn,
    default: ze.icon
  },
  id: {
    type: String,
    default: ze.id
  },
  message: {
    type: te([
      String,
      Object,
      Function
    ]),
    default: ze.message
  },
  onClose: {
    type: te(Function),
    default: ze.onClose
  },
  showClose: {
    type: Boolean,
    default: ze.showClose
  },
  type: {
    type: String,
    values: Fl,
    default: ze.type
  },
  plain: {
    type: Boolean,
    default: ze.plain
  },
  offset: {
    type: Number,
    default: ze.offset
  },
  zIndex: {
    type: Number,
    default: ze.zIndex
  },
  grouping: {
    type: Boolean,
    default: ze.grouping
  },
  repeatNum: {
    type: Number,
    default: ze.repeatNum
  }
}), Oy = {
  destroy: () => !0
}, lt = Hu([]), $y = (e) => {
  const t = lt.findIndex((a) => a.id === e), n = lt[t];
  let o;
  return t > 0 && (o = lt[t - 1]), { current: n, prev: o };
}, Iy = (e) => {
  const { prev: t } = $y(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Ly = (e, t) => lt.findIndex((o) => o.id === e) > 0 ? 16 : t, xy = U({
  name: "ElMessage"
}), Ry = /* @__PURE__ */ U({
  ...xy,
  props: Py,
  emits: Oy,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = vv, { ns: a, zIndex: s } = Qi("message"), { currentZIndex: r, nextZIndex: i } = s, u = A(), c = A(!1), d = A(0);
    let f;
    const p = y(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), m = y(() => {
      const I = n.type;
      return { [a.bm("icon", I)]: I && Wo[I] };
    }), v = y(() => n.icon || Wo[n.type] || ""), h = y(() => Iy(n.id)), S = y(() => Ly(n.id, n.offset) + h.value), g = y(() => d.value + S.value), P = y(() => ({
      top: `${S.value}px`,
      zIndex: r.value
    }));
    function k() {
      n.duration !== 0 && ({ stop: f } = Di(() => {
        E();
      }, n.duration));
    }
    function $() {
      f?.();
    }
    function E() {
      c.value = !1;
    }
    function L({ code: I }) {
      I === Me.esc && E();
    }
    return Ee(() => {
      k(), i(), c.value = !0;
    }), re(() => n.repeatNum, () => {
      $(), k();
    }), Ve(document, "keydown", L), vt(u, () => {
      d.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: g,
      close: E
    }), (I, Z) => (_(), J(Rn, {
      name: l(a).b("fade"),
      onBeforeLeave: I.onClose,
      onAfterLeave: (K) => I.$emit("destroy"),
      persisted: ""
    }, {
      default: q(() => [
        Ue(b("div", {
          id: I.id,
          ref_key: "messageRef",
          ref: u,
          class: M([
            l(a).b(),
            { [l(a).m(I.type)]: I.type },
            l(a).is("center", I.center),
            l(a).is("closable", I.showClose),
            l(a).is("plain", I.plain),
            I.customClass
          ]),
          style: be(l(P)),
          role: "alert",
          onMouseenter: $,
          onMouseleave: k
        }, [
          I.repeatNum > 1 ? (_(), J(l(h0), {
            key: 0,
            value: I.repeatNum,
            type: l(p),
            class: M(l(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : j("v-if", !0),
          l(v) ? (_(), J(l(Fe), {
            key: 1,
            class: M([l(a).e("icon"), l(m)])
          }, {
            default: q(() => [
              (_(), J(et(l(v))))
            ]),
            _: 1
          }, 8, ["class"])) : j("v-if", !0),
          ae(I.$slots, "default", {}, () => [
            I.dangerouslyUseHTMLString ? (_(), R(Oe, { key: 1 }, [
              j(" Caution here, message could've been compromised, never use user's input as message "),
              b("p", {
                class: M(l(a).e("content")),
                innerHTML: I.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (_(), R("p", {
              key: 0,
              class: M(l(a).e("content"))
            }, G(I.message), 3))
          ]),
          I.showClose ? (_(), J(l(Fe), {
            key: 2,
            class: M(l(a).e("closeBtn")),
            onClick: Pe(E, ["stop"])
          }, {
            default: q(() => [
              F(l(o))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : j("v-if", !0)
        ], 46, ["id"]), [
          [It, c.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Ay = /* @__PURE__ */ we(Ry, [["__file", "message.vue"]]);
let My = 1;
const Bl = (e) => {
  const t = !e || Ne(e) || no(e) || $e(e) ? { message: e } : e, n = {
    ...ze,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Ne(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    ut(o) || (o = document.body), n.appendTo = o;
  }
  return Ho(st.grouping) && !n.grouping && (n.grouping = st.grouping), pe(st.duration) && n.duration === 3e3 && (n.duration = st.duration), pe(st.offset) && n.offset === 16 && (n.offset = st.offset), Ho(st.showClose) && !n.showClose && (n.showClose = st.showClose), n;
}, Ny = (e) => {
  const t = lt.indexOf(e);
  if (t === -1)
    return;
  lt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, zy = ({ appendTo: e, ...t }, n) => {
  const o = `message_${My++}`, a = t.onClose, s = document.createElement("div"), r = {
    ...t,
    id: o,
    onClose: () => {
      a?.(), Ny(d);
    },
    onDestroy: () => {
      Fo(null, s);
    }
  }, i = F(Ay, r, $e(r.message) || no(r.message) ? {
    default: $e(r.message) ? r.message : () => r.message
  } : null);
  i.appContext = n || In._context, Fo(i, s), e.appendChild(s.firstElementChild);
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
}, In = (e = {}, t) => {
  if (!Le)
    return { close: () => {
    } };
  const n = Bl(e);
  if (n.grouping && lt.length) {
    const a = lt.find(({ vnode: s }) => {
      var r;
      return ((r = s.props) == null ? void 0 : r.message) === n.message;
    });
    if (a)
      return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (pe(st.max) && lt.length >= st.max)
    return { close: () => {
    } };
  const o = zy(n, t);
  return lt.push(o), o.handler;
};
Fl.forEach((e) => {
  In[e] = (t = {}, n) => {
    const o = Bl(t);
    return In({ ...o, type: e }, n);
  };
});
function Fy(e) {
  for (const t of lt)
    (!e || e === t.props.type) && t.handler.close();
}
In.closeAll = Fy;
In._context = null;
const By = tl(In, "$message"), Vl = [
  "success",
  "info",
  "warning",
  "error"
], Vy = ve({
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
    type: Tn
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
    values: [...Vl, ""],
    default: ""
  },
  zIndex: Number
}), Dy = {
  destroy: () => !0
}, Hy = U({
  name: "ElNotification"
}), jy = /* @__PURE__ */ U({
  ...Hy,
  props: Vy,
  emits: Dy,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: a } = Qi("notification"), { nextZIndex: s, currentZIndex: r } = a, { Close: i } = mv, u = A(!1);
    let c;
    const d = y(() => {
      const k = n.type;
      return k && Wo[n.type] ? o.m(k) : "";
    }), f = y(() => n.type && Wo[n.type] || n.icon), p = y(() => n.position.endsWith("right") ? "right" : "left"), m = y(() => n.position.startsWith("top") ? "top" : "bottom"), v = y(() => {
      var k;
      return {
        [m.value]: `${n.offset}px`,
        zIndex: (k = n.zIndex) != null ? k : r.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: c } = Di(() => {
        u.value && g();
      }, n.duration));
    }
    function S() {
      c?.();
    }
    function g() {
      u.value = !1;
    }
    function P({ code: k }) {
      k === Me.delete || k === Me.backspace ? S() : k === Me.esc ? u.value && g() : h();
    }
    return Ee(() => {
      h(), s(), u.value = !0;
    }), Ve(document, "keydown", P), t({
      visible: u,
      close: g
    }), (k, $) => (_(), J(Rn, {
      name: l(o).b("fade"),
      onBeforeLeave: k.onClose,
      onAfterLeave: (E) => k.$emit("destroy"),
      persisted: ""
    }, {
      default: q(() => [
        Ue(b("div", {
          id: k.id,
          class: M([l(o).b(), k.customClass, l(p)]),
          style: be(l(v)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: h,
          onClick: k.onClick
        }, [
          l(f) ? (_(), J(l(Fe), {
            key: 0,
            class: M([l(o).e("icon"), l(d)])
          }, {
            default: q(() => [
              (_(), J(et(l(f))))
            ]),
            _: 1
          }, 8, ["class"])) : j("v-if", !0),
          b("div", {
            class: M(l(o).e("group"))
          }, [
            b("h2", {
              class: M(l(o).e("title")),
              textContent: G(k.title)
            }, null, 10, ["textContent"]),
            Ue(b("div", {
              class: M(l(o).e("content")),
              style: be(k.title ? void 0 : { margin: 0 })
            }, [
              ae(k.$slots, "default", {}, () => [
                k.dangerouslyUseHTMLString ? (_(), R(Oe, { key: 1 }, [
                  j(" Caution here, message could've been compromised, never use user's input as message "),
                  b("p", { innerHTML: k.message }, null, 8, ["innerHTML"])
                ], 2112)) : (_(), R("p", { key: 0 }, G(k.message), 1))
              ])
            ], 6), [
              [It, k.message]
            ]),
            k.showClose ? (_(), J(l(Fe), {
              key: 0,
              class: M(l(o).e("closeBtn")),
              onClick: Pe(g, ["stop"])
            }, {
              default: q(() => [
                F(l(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : j("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [It, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Wy = /* @__PURE__ */ we(jy, [["__file", "notification.vue"]]);
const Zo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, ja = 16;
let Uy = 1;
const Ln = function(e = {}, t) {
  if (!Le)
    return { close: () => {
    } };
  (Ne(e) || no(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Zo[n].forEach(({ vm: d }) => {
    var f;
    o += (((f = d.el) == null ? void 0 : f.offsetHeight) || 0) + ja;
  }), o += ja;
  const a = `notification_${Uy++}`, s = e.onClose, r = {
    ...e,
    offset: o,
    id: a,
    onClose: () => {
      Ky(a, n, s);
    }
  };
  let i = document.body;
  ut(e.appendTo) ? i = e.appendTo : Ne(e.appendTo) && (i = document.querySelector(e.appendTo)), ut(i) || (i = document.body);
  const u = document.createElement("div"), c = F(Wy, r, $e(r.message) ? r.message : no(r.message) ? () => r.message : null);
  return c.appContext = it(t) ? Ln._context : t, c.props.onDestroy = () => {
    Fo(null, u);
  }, Fo(c, u), Zo[n].push({ vm: c }), i.appendChild(u.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
Vl.forEach((e) => {
  Ln[e] = (t = {}, n) => ((Ne(t) || no(t)) && (t = {
    message: t
  }), Ln({ ...t, type: e }, n));
});
function Ky(e, t, n) {
  const o = Zo[t], a = o.findIndex(({ vm: c }) => {
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
function Gy() {
  for (const e of Object.values(Zo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Ln.closeAll = Gy;
Ln._context = null;
const Zy = tl(Ln, "$notify");
function Yy(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function qy(e, t, n, o, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ro;
const rt = "__TAURI_TO_IPC_KEY__";
function Jy(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function x(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Dl(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class Xy {
  get rid() {
    return Yy(this, Ro, "f");
  }
  constructor(t) {
    Ro.set(this, void 0), qy(this, Ro, t);
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
Ro = /* @__PURE__ */ new WeakMap();
var Ye;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Ye || (Ye = {}));
async function Hl(e, t) {
  await x("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function mt(e, t, n) {
  var o;
  const a = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return x("plugin:event|listen", {
    event: e,
    target: a,
    handler: Jy(t)
  }).then((s) => async () => Hl(e, s));
}
async function Qy(e, t, n) {
  return mt(e, (o) => {
    Hl(e, o.id), t(o);
  }, n);
}
async function jl(e, t) {
  await x("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function eb(e, t, n) {
  await x("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Wl {
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
    return new Qn(this.width * t, this.height * t);
  }
  [rt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[rt]();
  }
}
class Qn {
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
    return new Wl(this.width / t, this.height / t);
  }
  [rt]() {
    return {
      width: this.width,
      height: this.height
    };
  }
  toJSON() {
    return this[rt]();
  }
}
class vn {
  constructor(t) {
    this.size = t;
  }
  toLogical(t) {
    return this.size instanceof Wl ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof Qn ? this.size : this.size.toPhysical(t);
  }
  [rt]() {
    return {
      [`${this.size.type}`]: {
        width: this.size.width,
        height: this.size.height
      }
    };
  }
  toJSON() {
    return this[rt]();
  }
}
class Ul {
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
    return new Dt(this.x * t, this.y * t);
  }
  [rt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[rt]();
  }
}
class Dt {
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
    return new Ul(this.x / t, this.y / t);
  }
  [rt]() {
    return {
      x: this.x,
      y: this.y
    };
  }
  toJSON() {
    return this[rt]();
  }
}
class Po {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Ul ? this.position : this.position.toLogical(t);
  }
  toPhysical(t) {
    return this.position instanceof Dt ? this.position : this.position.toPhysical(t);
  }
  [rt]() {
    return {
      [`${this.position.type}`]: {
        x: this.position.x,
        y: this.position.y
      }
    };
  }
  toJSON() {
    return this[rt]();
  }
}
class eo extends Xy {
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
    return x("plugin:image|new", {
      rgba: Yo(t),
      width: n,
      height: o
    }).then((a) => new eo(a));
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
      bytes: Yo(t)
    }).then((n) => new eo(n));
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
    return x("plugin:image|from_path", { path: t }).then((n) => new eo(n));
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
function Yo(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof eo ? e.rid : e;
}
var Wa;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Wa || (Wa = {}));
class tb {
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
function Kl() {
  return new Gl(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Ca() {
  return x("plugin:window|get_all_windows").then((e) => e.map((t) => new Gl(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Ta = ["tauri://created", "tauri://error"];
class Gl {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || x("plugin:window|create", {
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
    return (n = (await Ca()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Kl();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Ca();
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
    for (const t of await Ca())
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
    } : mt(t, n, {
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
    } : Qy(t, n, {
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
    if (Ta.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return jl(t, n);
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
    if (Ta.includes(n)) {
      for (const a of this.listeners[n] || [])
        a({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return eb(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Ta.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    }).then((t) => new Dt(t));
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
    }).then((t) => new Dt(t));
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
    }).then((t) => new Qn(t));
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
    }).then((t) => new Qn(t));
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
    return t && (t === Wa.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), x("plugin:window|request_user_attention", {
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
    return x("plugin:window|set_min_size", {
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
    return x("plugin:window|set_max_size", {
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
      value: t instanceof Po ? t : new Po(t)
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
      value: Yo(t)
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
      value: t instanceof Po ? t : new Po(t)
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
      value: t ? Yo(t) : void 0
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
    return this.listen(Ye.WINDOW_RESIZED, (n) => {
      n.payload = new Qn(n.payload), t(n);
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
    return this.listen(Ye.WINDOW_MOVED, (n) => {
      n.payload = new Dt(n.payload), t(n);
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
    return this.listen(Ye.WINDOW_CLOSE_REQUESTED, async (n) => {
      const o = new tb(n);
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
    const n = await this.listen(Ye.DRAG_ENTER, (r) => {
      t({
        ...r,
        payload: {
          type: "enter",
          paths: r.payload.paths,
          position: new Dt(r.payload.position)
        }
      });
    }), o = await this.listen(Ye.DRAG_OVER, (r) => {
      t({
        ...r,
        payload: {
          type: "over",
          position: new Dt(r.payload.position)
        }
      });
    }), a = await this.listen(Ye.DRAG_DROP, (r) => {
      t({
        ...r,
        payload: {
          type: "drop",
          paths: r.payload.paths,
          position: new Dt(r.payload.position)
        }
      });
    }), s = await this.listen(Ye.DRAG_LEAVE, (r) => {
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
    const n = await this.listen(Ye.WINDOW_FOCUS, (a) => {
      t({ ...a, payload: !0 });
    }), o = await this.listen(Ye.WINDOW_BLUR, (a) => {
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
    return this.listen(Ye.WINDOW_SCALE_FACTOR_CHANGED, t);
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
    return this.listen(Ye.WINDOW_THEME_CHANGED, t);
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
const Ae = {
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
    o === "center" ? By({
      message: t,
      type: n,
      duration: a,
      showClose: s,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Zy({
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
}, nb = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1680942651462'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3789'%20data-darkreader-inline-fill=''%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M214.101333%20512c0-32.512%205.546667-63.701333%2015.36-92.928L57.173333%20290.218667A491.861333%20491.861333%200%200%200%204.693333%20512c0%2079.701333%2018.858667%20154.88%2052.394667%20221.610667l172.202667-129.066667A290.56%20290.56%200%200%201%20214.101333%20512'%20fill='%23FBBC05'%20p-id='3790'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23967002;'%3e%3c/path%3e%3cpath%20d='M516.693333%20216.192c72.106667%200%20137.258667%2025.002667%20188.458667%2065.962667L854.101333%20136.533333C763.349333%2059.178667%20646.997333%2011.392%20516.693333%2011.392c-202.325333%200-376.234667%20113.28-459.52%20278.826667l172.373334%20128.853333c39.68-118.016%20152.832-202.88%20287.146666-202.88'%20fill='%23EA4335'%20p-id='3791'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23a71d11;'%3e%3c/path%3e%3cpath%20d='M516.693333%20807.808c-134.357333%200-247.509333-84.864-287.232-202.88l-172.288%20128.853333c83.242667%20165.546667%20257.152%20278.826667%20459.52%20278.826667%20124.842667%200%20244.053333-43.392%20333.568-124.757333l-163.584-123.818667c-46.122667%2028.458667-104.234667%2043.776-170.026666%2043.776'%20fill='%2334A853'%20p-id='3792'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%232a8642;'%3e%3c/path%3e%3cpath%20d='M1005.397333%20512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696%2065.962667-51.072%20116.650667-104.533333%20149.632l163.541333%20123.818667c93.994667-85.418667%20155.136-212.650667%20155.136-375.850667'%20fill='%234285F4'%20p-id='3793'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%230943a2;'%3e%3c/path%3e%3c/svg%3e", ob = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='240px'%20height='240px'%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNla'%20x1='11.905'%20x2='17.941'%20y1='1.952'%20y2='40.401'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffc'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNla)'%20d='M17.572,37.076L20,35.619V10.603c0-1.632-0.796-3.161-2.133-4.096L12.36,2.652%20C11.366,1.956,10,2.667,10,3.881V32.5c0,0.22,0.02,0.555,0.033,0.772C10.369,36.867,14.382,38.99,17.572,37.076z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlb'%20x1='14.342'%20x2='34.121'%20y1='41.478'%20y2='25.575'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2333bef0'/%3e%3cstop%20offset='.159'%20stop-color='%2332b9f0'/%3e%3cstop%20offset='.341'%20stop-color='%232facf2'/%3e%3cstop%20offset='.533'%20stop-color='%232a95f4'/%3e%3cstop%20offset='.733'%20stop-color='%232475f6'/%3e%3cstop%20offset='.936'%20stop-color='%231b4cfa'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlb)'%20d='M32.682,27.904L20,35.5v0l-2.428,1.457c-3.191,1.915-7.203-0.209-7.54-3.804%20C10.372,38.922,15.145,43.5,21,43.5c1.963,0,3.888-0.536,5.568-1.551l6.834-4.126c0.817-0.493,1.522-1.075,2.15-1.707%20C37.906,33.415,36.739,28.669,32.682,27.904z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlc'%20x1='24.223'%20x2='45.699'%20y1='17.113'%20y2='38.588'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffd'/%3e%3cstop%20offset='1'%20stop-color='%231de9b6'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlc)'%20d='M33.636,19.568l-7.607-3.803c-1.234-0.617-2.576,0.618-2.064,1.899l1.755,5.886%20c0.499,1.248,1.479,2.242,2.719,2.758L32.5,28c4.057,0.766,5.352,5.251,3.052,8.117C40.399,31.24,40.088,22.794,33.636,19.568z'/%3e%3c/svg%3e", ab = "snippets-code:developer-mode", Zl = "snippets-code:frontend-diagnostics", rb = 240, Dn = "[REDACTED]", Ao = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Dn}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Dn}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Dn
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Dn}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Dn}`
), Yl = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return Ao(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return Ao(
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
    return Ao(String(e));
  }
}, sb = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, ib = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Zl) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Rr = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(ab) === "true";
  } catch {
    return !1;
  }
}, lb = (e, t, n) => {
  if (!Rr() || typeof localStorage > "u") return;
  const o = ib();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: sb(),
    message: Ao(t),
    data: Yl(n)
  });
  try {
    localStorage.setItem(
      Zl,
      JSON.stringify(o.slice(-rb))
    );
  } catch {
  }
}, ub = () => Rr(), cb = (e) => e === "error" || Rr(), Oo = (e, t, n) => {
  lb(e, t, n), cb(e) && x("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Yl(n)
  }).catch(() => {
  });
}, D = {
  info: (e, t, ...n) => {
    Oo("info", e, t);
  },
  error: (e, t) => {
    Oo("error", e, t);
  },
  warn: (e, t) => {
    Oo("warn", e, t);
  },
  debug: (e, t) => {
    ub() && Oo("debug", e, t);
  }
};
function db(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
}
function Ea(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, o = e.match(/[\u3040-\u30ff]/g), a = o ? o.length : 0, s = e.match(/[\uac00-\ud7af]/g), r = s ? s.length : 0, i = e.match(/[a-zA-Z]/g), u = i ? i.length : 0, d = n + a + r + u;
  return d === 0 ? "unknown" : a >= 3 && a > u && a / d >= 0.2 ? "ja" : r >= 3 && r > n && r > u && r / d >= 0.2 ? "ko" : n > u ? "zh" : u > n ? "en" : "unknown";
}
async function fb() {
  try {
    return await x("get_editor_settings");
  } catch (e) {
    throw new Error(`获取编辑器显示设置失败: ${e}`);
  }
}
async function ii(e) {
  try {
    await x("update_editor_settings", { settings: e });
  } catch (t) {
    throw new Error(`更新编辑器显示设置失败: ${t}`);
  }
}
const pb = co("hotkeys", {
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
        const e = await x("get_hotkey_config_map");
        this.pluginHotkeys = e, this.searchHotkey = e.search || "", this.configHotkey = e.config || "", this.translateHotkey = e.translate || "", this.selectionTranslateHotkey = e.selection_translate || "", this.screenshotHotkey = e.screenshot || "", this.screenRecorderHotkey = e.screen_recorder || "", this.darkModeHotkey = e.dark_mode || "", this.wallpaperSwitcherHotkey = e.wallpaper_switcher || "";
      } catch (e) {
        D.error("获取快捷键配置失败:", e);
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
}), Hn = co("theme", {
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
      D.debug(`[主题][ThemeStore] 更新主题：newTheme=${e}`), this.theme = e, this.applyTheme();
    },
    /** 应用主题到 DOM，并同步 systemPrefersDark */
    applyTheme() {
      const e = document.documentElement, t = window.matchMedia("(prefers-color-scheme: dark)").matches;
      D.debug(
        `[主题][ThemeStore] 应用主题到 DOM：theme=${this.theme}, prefersDark=${t}`
      ), this.theme === "auto" && (this.systemPrefersDark = t), this.theme === "dark" || this.theme === "auto" && t ? e.classList.add("dark") : e.classList.remove("dark");
    },
    /**
     * 同步系统主题样式（仅在 auto 模式下生效，不修改 store.theme）
     * 用于响应操作系统主题变化
     */
    syncSystemThemeStyle(e) {
      D.debug(
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
        D.error("从 localStorage 同步主题失败:", n);
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
co("layout", {
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
const mb = "https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/main/plugin-registry/marketplace/marketplace.json", vb = "https://ghfast.top/";
function hb(e) {
  return e.startsWith("https://github.com/") ? `${vb}${e}` : e;
}
async function gb() {
  return await x("get_plugin_states");
}
async function yb() {
  return await x("get_installed_plugin_manifests");
}
async function bb(e, t = !1) {
  return await x("install_local_plugin_package", {
    sourcePath: e,
    overwrite: t
  });
}
async function ql(e, t = !1, n, o, a) {
  return await x("install_plugin_package_from_url", {
    expectedSizeBytes: o,
    packageUrl: e,
    packageSubdir: n,
    overwrite: t,
    mirrorUrls: a ?? []
  });
}
const wb = (e) => {
  try {
    const t = new URL(e);
    return t.searchParams.set("_sc_refresh", `${Date.now()}`), t.toString();
  } catch {
    return e;
  }
};
async function _b(e) {
  return await x("fetch_plugin_marketplace", {
    marketplaceUrl: wb(e)
  });
}
async function Sb(e) {
  await x("uninstall_local_plugin_package", { pluginId: e });
}
async function kb(e, t) {
  await x("set_plugin_enabled", { pluginId: e, enabled: t });
}
async function Cb() {
  return await x("get_rapidocr_resource_status");
}
async function Tb() {
  return await x("screen_recorder_get_ffmpeg_status");
}
async function Ar(e, t) {
  return await x("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
async function Pa() {
  await x("install_translation_offline_runtime_resources");
}
const Eb = (e, t, n, o) => ({
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
}), Ht = (e) => typeof e == "object" && e !== null, Pb = (e) => Ht(e) && "manifest" in e && Ht(e.manifest) ? {
  manifest: e.manifest,
  packagePath: typeof e.packagePath == "string" ? e.packagePath : void 0,
  installedAt: typeof e.installedAt == "string" ? e.installedAt : void 0
} : { manifest: e }, Ob = (e) => typeof e == "string" && ["capture", "automation", "search", "sync", "editor", "appearance"].includes(e), $b = (e) => {
  if (!Ht(e) || e.schemaVersion !== 1 || typeof e.id != "string" || !e.id.trim() || typeof e.version != "string" || !e.version.trim() || e.kind !== "local" || !Ht(e.name) || typeof e.name.i18nKey != "string" || typeof e.name.fallback != "string" || !Ht(e.description) || typeof e.description.i18nKey != "string" || typeof e.description.fallback != "string" || !Ob(e.category) || typeof e.enabledByDefault != "boolean") return null;
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
    capabilities: Ht(e.capabilities) ? e.capabilities : void 0,
    resources: Ht(e.resources) ? e.resources : void 0,
    entry: Ht(e.entry) ? e.entry : void 0,
    permissions: Array.isArray(e.permissions) ? e.permissions.filter((o) => typeof o == "string") : void 0,
    dependencies: Array.isArray(e.dependencies) ? e.dependencies.filter((o) => typeof o == "string") : void 0,
    resourceFor: typeof e.resourceFor == "string" ? e.resourceFor : void 0,
    compatibleAppVersion: typeof e.compatibleAppVersion == "string" ? e.compatibleAppVersion : void 0,
    minAppVersion: typeof e.minAppVersion == "string" ? e.minAppVersion : void 0,
    repository: typeof e.repository == "string" ? e.repository : void 0,
    releaseUrl: typeof e.releaseUrl == "string" ? e.releaseUrl : void 0
  };
}, Ib = (e) => e.map((t) => {
  const { manifest: n, packagePath: o, installedAt: a } = Pb(t), s = $b(n);
  if (!s) return null;
  const r = {
    manifest: s,
    packagePath: o ?? ""
  };
  return a && (r.installedAt = a), r;
}).filter((t) => t !== null), Jl = (e = []) => {
  const n = [
    ...Ib(e).map((a) => Eb(
      a.manifest,
      "local",
      a.packagePath || void 0,
      a.installedAt
    )).sort(Lb)
  ], o = /* @__PURE__ */ new Map();
  for (const a of n)
    o.has(a.id) || o.set(a.id, a);
  return Array.from(o.values());
}, ci = (e) => {
  const t = e.installedAt ? Date.parse(e.installedAt) : NaN;
  return Number.isFinite(t) ? t : 0;
}, Lb = (e, t) => {
  const n = ci(t) - ci(e);
  return n !== 0 ? n : String(e.id).localeCompare(String(t.id));
}, xb = Jl(), qo = xb, Rb = qo.map((e) => e.id), Xl = qo.reduce((e, t) => (e[t.id] = t.enabledByDefault, e), {}), Ab = (e) => Rb.includes(e);
async function Mb() {
  return await x("local_ai_get_runtime_status");
}
const yn = [], bn = [
  { id: "attachment", labelKey: "settings.attachment.menu", icon: ec }
], Ua = {
  attachment: Xa(() => Promise.resolve().then(() => v_))
}, wn = [], Mo = [], _n = [], Ql = (e) => e.manifest.permissions ?? [], Nb = (e, t) => {
  const n = Ql(e);
  return n.includes("command:*") || n.includes(`command:${t}`);
}, zb = (e, t) => {
  const n = Ql(e);
  return n.includes("backend:*") || n.includes(`backend:${t}`);
}, Fb = (e, t) => {
  if (!Nb(e, t))
    throw new Error(`插件 ${e.id} 没有调用命令 ${t} 的权限`);
}, Bb = (e, t) => {
  if (!zb(e, t))
    throw new Error(`插件 ${e.id} 没有调用后端命令 ${t} 的权限`);
}, Ka = [], Ga = [], Za = [], No = /* @__PURE__ */ new Set(), Jo = /* @__PURE__ */ new Map(), Xo = /* @__PURE__ */ new Map(), di = /* @__PURE__ */ new Map(), Vb = /* @__PURE__ */ new Set(), fi = /* @__PURE__ */ new Map(), xn = /* @__PURE__ */ new Map(), Qo = /* @__PURE__ */ new Set(), ea = /* @__PURE__ */ new Set(), ha = (e) => e.replace(/^[\\/]+|[\\/]+$/g, ""), Db = (e) => !!e && !e.includes("://") && !e.startsWith("/") && !/^[a-zA-Z]:[\\/]/.test(e) && !ha(e).split(/[\\/]+/).includes(".."), Hb = (e, t) => {
  if (!e.packagePath)
    throw new Error(`插件 ${e.id} 缺少 packagePath`);
  if (!Db(t))
    throw new Error(
      `插件 ${e.id} 使用了不安全的资源路径: ${t}`
    );
  return `${e.packagePath.replace(/[\\/]+$/g, "")}/${ha(t)}`;
}, Nn = (e, t) => Dl(Hb(e, t)), jb = (e) => {
  const t = ha(e).split(/[\\/]+/);
  return t.pop(), t.join("/");
}, eu = (e) => {
  const t = /^([^?#]*)([?#].*)?$/.exec(e);
  return {
    path: t?.[1] ?? e,
    suffix: t?.[2] ?? ""
  };
}, Wb = (e, t) => {
  const { path: n } = eu(t), o = [
    ...ha(e).split(/[\\/]+/),
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
}, Ub = (e, t, n) => {
  const { suffix: o } = eu(n), a = Wb(
    jb(t),
    n
  );
  return `${Nn(e, a)}${o}`;
}, Kb = [
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
], Gb = {
  vue: {
    moduleKey: "vue",
    runtime: ku,
    exportNames: Kb
  },
  pinia: {
    moduleKey: "pinia",
    runtime: Wu
  },
  "vue-router": {
    moduleKey: "vueRouter",
    runtime: Uu
  },
  "vue-i18n": {
    moduleKey: "vueI18n",
    runtime: ju
  }
}, Zb = /^[A-Za-z_$][\w$]*$/, Yb = (e, t, n, o) => {
  const s = (o ?? Object.keys(n)).filter(
    (r) => r !== "default" && r !== "__esModule" && Zb.test(r)
  ).map((r) => `export const ${r} = Runtime[${JSON.stringify(r)}];`).join(`
`);
  return [
    `const Runtime = globalThis.${e}[${JSON.stringify(t)}];`,
    "export default Runtime;",
    s
  ].join(`
`);
}, qb = (e) => {
  const t = Gb[e];
  if (!t) return null;
  const n = di.get(e);
  if (n) return n;
  const o = "__SNIPPETS_CODE_PLUGIN_SHARED__", a = globalThis;
  a[o] = {
    ...a[o] ?? {},
    [t.moduleKey]: t.runtime
  };
  const s = Yb(
    o,
    t.moduleKey,
    t.runtime,
    t.exportNames
  ), r = URL.createObjectURL(
    new Blob([s], { type: "text/javascript" })
  );
  return di.set(e, r), r;
}, Jb = (e, t, n) => {
  const o = (a) => {
    const s = qb(a);
    return s || (!a.startsWith("./") && !a.startsWith("../") ? a : Ub(e, t, a));
  };
  return n.replace(
    /((?:import|export)\s+(?:[^'"]*?\s+from\s*)?)(['"])([^'"]+)\2/g,
    (a, s, r, i) => `${s}${r}${o(i)}${r}`
  ).replace(
    /(import\s*\(\s*)(['"])([^'"]+)\2(\s*\))/g,
    (a, s, r, i, u) => `${s}${r}${o(i)}${r}${u}`
  );
}, Xb = (e, t) => {
  const n = Xo.get(e) ?? [];
  n.push(t), Xo.set(e, n);
}, Qb = (e) => {
  (Xo.get(e) ?? []).forEach((n) => URL.revokeObjectURL(n)), Xo.delete(e);
}, ew = async (e, t) => {
  const n = Nn(e, t), o = await fetch(n);
  if (!o.ok)
    throw new Error(
      `插件 ${e.id} 前端入口读取失败: ${o.status} ${o.statusText}`
    );
  const a = await o.text(), s = Jb(
    e,
    t,
    a
  ), r = URL.createObjectURL(
    new Blob([s], { type: "text/javascript" })
  );
  return Xb(String(e.id), r), await import(
    /* @vite-ignore */
    r
  );
}, tw = (e) => async (t, n, o) => (Fb(e, t), x(t, n, o)), nw = (e) => async (t, n = null) => (Bb(e, t), await x("invoke_plugin_backend", {
  pluginId: e.id,
  command: t,
  payload: n
})), zo = (e, t) => {
  const n = xn.get(e) ?? /* @__PURE__ */ new Set();
  n.add(t), xn.set(e, n);
}, ow = (e, t) => {
  const n = xn.get(e);
  n && (n.delete(t), n.size === 0 && xn.delete(e));
}, aw = (e) => {
  const t = Array.from(xn.get(e) ?? []);
  xn.delete(e);
  for (const n of t)
    try {
      n();
    } catch (o) {
      D.warn(`[PluginRuntime] 清理插件运行时失败: ${e}`, o);
    }
}, rw = (e) => async (...t) => {
  const n = String(e.id), o = await mt(...t);
  let a = !0;
  const s = () => {
    a && (a = !1, ow(n, s), o());
  };
  return zo(n, s), s;
}, Oa = (e, t, n) => {
  if (t) return Dr(t);
  if (!n)
    throw new Error(
      `插件 ${e.id} 注册组件时缺少 component 或 componentUrl`
    );
  return Dr(
    Xa(
      () => import(
        /* @vite-ignore */
        Nn(e, n)
      )
    )
  );
}, sw = (e, t, n) => {
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
    Nn(e, n)
  );
}, iw = (e, t) => {
  if (e === "config") {
    Ka.push(t);
    return;
  }
  if (e === "window") {
    Za.push(t);
    return;
  }
  Ga.push(t);
}, $a = (e, t) => {
  for (let n = e.length - 1; n >= 0; n -= 1)
    e[n].meta?.pluginId === t && e.splice(n, 1);
}, Ia = (e, t, n) => {
  const o = e[t] ?? [];
  o.includes(n) || (e[t] = [...o, n]), e.manifest.capabilities = {
    ...e.manifest.capabilities,
    [t]: e[t]
  };
}, ta = (e, t) => `${e}:${t}`, lw = (e) => ({
  pluginId: String(e.id),
  packagePath: e.packagePath ?? "",
  manifest: e.manifest,
  resolveAssetUrl: (t) => Nn(e, t),
  api: {
    invoke: tw(e),
    invokeBackend: nw(e),
    listen: rw(e),
    emit: jl
  },
  ui: {
    h: Si,
    defineComponent: U
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
    Ia(e, "routeNames", t.name);
    const o = {
      path: t.path,
      name: t.name,
      component: sw(e, t.component, t.componentUrl),
      meta: {
        ...t.meta,
        pluginId: e.id
      }
    };
    iw(n, o);
  },
  registerSettingsTab(t) {
    const n = t.labelKey ?? `plugins.${e.id}.${t.id}`, o = {
      id: t.id,
      pluginId: String(e.id),
      labelKey: n,
      label: t.label,
      icon: t.icon ?? nc
    }, a = ta(String(e.id), t.id), s = bn.findIndex(
      (i) => i.id === t.id && i.pluginId === String(e.id)
    ), r = Oa(e, t.component, t.componentUrl);
    s === -1 ? (bn.push(o), Ua[t.id] = r, Qo.add(a)) : Qo.has(a) && (bn[s] = o, Ua[t.id] = r), Ia(e, "settingsTabs", t.id);
  },
  registerSearchProvider(t) {
    const n = {
      pluginId: e.id,
      source: t.source,
      search: t.search
    }, o = yn.findIndex(
      (a) => a.pluginId === e.id && a.source === t.source
    );
    o === -1 ? yn.push(n) : yn[o] = n, Ia(e, "searchSources", t.source);
  },
  registerTitlebarAction(t) {
    const n = ta(
      String(e.id),
      t.id
    ), o = wn.findIndex(
      (s) => s.id === t.id && s.pluginId === e.id
    ), a = {
      id: t.id,
      pluginId: e.id,
      component: Oa(e, t.component, t.componentUrl)
    };
    o === -1 ? (wn.push(a), ea.add(n)) : ea.has(n) && (wn[o] = a);
  },
  registerWindowShortcut(t) {
    Mo.push({
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
      component: Oa(
        e,
        t.component,
        t.componentUrl
      )
    }, a = _n.findIndex(
      (s) => s.pluginId === e.id && s.id === t.id && s.target === n
    );
    a === -1 ? _n.push(o) : _n[a] = o;
  }
}), uw = async (e, t) => {
  const n = t.activate ?? (typeof t.default == "function" ? t.default : t.default?.activate);
  if (typeof n != "function")
    throw new Error(`插件 ${e.id} 的前端入口没有导出 activate(context)`);
  const o = await n(lw(e)), a = String(e.id);
  if (typeof o == "function") {
    zo(a, o);
    return;
  }
  typeof o?.deactivate == "function" && zo(a, o.deactivate), typeof o?.dispose == "function" && zo(a, o.dispose);
}, cw = (e) => {
  if (Jo.has(String(e.id))) return;
  const t = e.manifest.entry?.styles ?? [];
  if (!t.length) return;
  const n = t.map((o) => {
    const a = document.createElement("link");
    return a.rel = "stylesheet", a.href = Nn(e, o), a.dataset.pluginId = String(e.id), document.head.appendChild(a), a;
  });
  Jo.set(String(e.id), n);
}, dw = (e) => {
  (Jo.get(e) ?? []).forEach((n) => n.remove()), Jo.delete(e);
}, fw = [
  "routeNames",
  "settingsTabs",
  "searchSources",
  "titlebarActions",
  "windows"
], pw = (e) => {
  if (e.resourceFor || e.manifest.resourceFor || e.manifest.resources)
    return !1;
  const t = e.manifest.capabilities;
  return fw.some((n) => {
    const o = t?.[n];
    return Array.isArray(o) && o.length > 0;
  });
}, mw = async (e, t) => {
  for (const n of e)
    if (n.source === "local" && t(String(n.id)) && !No.has(String(n.id))) {
      if (n.manifest.entry?.frontend) {
        try {
          cw(n);
          const o = await ew(
            n,
            n.manifest.entry.frontend
          );
          await uw(n, o), No.add(String(n.id));
        } catch (o) {
          Ya(String(n.id)), D.warn(`[PluginRuntime] 加载本地插件失败: ${n.id}`, o);
        }
        continue;
      }
      No.add(String(n.id)), pw(n) && D.warn(`[PluginRuntime] 本地插件缺少前端入口: ${n.id}`);
    }
};
function Ya(e) {
  aw(e), No.delete(e), dw(e), Qb(e);
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
    ) && (n(), Vb.delete(t), fi.delete(t));
  $a(Ka, e), $a(Ga, e), $a(Za, e);
  for (let t = bn.length - 1; t >= 0; t -= 1) {
    const n = bn[t], o = ta(e, n.id);
    n.pluginId === e && Qo.has(o) && (delete Ua[n.id], bn.splice(t, 1), Qo.delete(o));
  }
  for (let t = yn.length - 1; t >= 0; t -= 1)
    yn[t].pluginId === e && yn.splice(t, 1);
  for (let t = wn.length - 1; t >= 0; t -= 1) {
    const n = wn[t], o = ta(e, n.id);
    n.pluginId === e && ea.has(o) && (wn.splice(t, 1), ea.delete(o));
  }
  for (let t = Mo.length - 1; t >= 0; t -= 1)
    Mo[t].pluginId === e && Mo.splice(t, 1);
  for (let t = _n.length - 1; t >= 0; t -= 1)
    _n[t].pluginId === e && _n.splice(t, 1);
}
let jn = null, Wn = null, Un = null;
const pi = (e, t) => {
  globalThis.setTimeout(e, t);
}, mi = (e) => e.replace(/^v/i, "").split(".").map((t) => Number.parseInt(t, 10)).map((t) => Number.isFinite(t) ? t : 0), vw = (e, t) => {
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
}), hw = (e, t) => hi(e) !== hi(t), gi = (e, t) => {
  const n = e.reduce(
    (o, a) => (o[a.id] = a.enabledByDefault, o),
    { ...Xl }
  );
  if (!t)
    return n;
  for (const o of e) {
    const a = t[o.id];
    typeof a == "boolean" && (n[o.id] = a);
  }
  return n;
}, gw = co("plugins", {
  state: () => ({
    enabled: { ...Xl },
    installedPlugins: qo,
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
      if (jn) {
        await jn;
        return;
      }
      jn = (async () => {
        try {
          D.info("[PluginStore] initialize start"), await this.reconcileInstalledPlugins("initialize", [], {
            loadRuntimeEntries: !1,
            refreshResourceStatus: !1
          }), D.info("[PluginStore] initialize complete", {
            plugins: this.installedPlugins.map((e) => ({
              id: e.id,
              source: e.source,
              enabled: this.isEnabled(e.id),
              packagePath: e.packagePath
            }))
          });
        } catch (e) {
          D.warn("[PluginStore] 加载插件状态失败，使用默认状态", e), this.installedPlugins = qo, this.enabled = gi(
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
        await jn;
      } finally {
        jn = null;
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
      D.info("[PluginStore] reconcile installed plugins start", {
        reason: e
      });
      const s = this.installedPlugins, r = new Map(
        s.map((m) => [String(m.id), m])
      ), i = await yb(), u = Jl(i), c = new Map(
        u.map((m) => [String(m.id), m])
      ), d = new Set(t);
      for (const m of s) {
        if (m.source !== "local") continue;
        const v = String(m.id), h = c.get(v);
        (!h || hw(m, h)) && d.add(v);
      }
      this.installedPlugins = u;
      const f = await gb(), p = Object.fromEntries(
        Object.entries(this.enabled).filter(
          ([m]) => r.has(m) && c.has(m)
        )
      );
      this.enabled = gi(this.installedPlugins, {
        ...p,
        ...f
      }), this.installedPlugins.filter(
        (m) => m.source === "local" && !this.isEnabled(m.id)
      ).forEach((m) => d.add(String(m.id))), d.forEach(
        (m) => Ya(m)
      ), o && await this.refreshPluginResourceStatus(), a && await this.loadEnabledPluginEntries(), D.info("[PluginStore] reconcile installed plugins complete", {
        reason: e,
        resetPluginIds: Array.from(d),
        plugins: this.installedPlugins.map((m) => ({
          id: m.id,
          source: m.source,
          enabled: this.isEnabled(m.id),
          hotkeys: m.hotkeys,
          packagePath: m.packagePath
        }))
      });
    },
    async installFromPath(e, t = !1) {
      D.info("[PluginStore] install from path start", {
        sourcePath: e,
        overwrite: t
      });
      const n = await bb(
        e,
        t
      );
      D.info("[PluginStore] install from path complete", {
        pluginId: n.manifest.id,
        packagePath: n.packagePath
      }), await this.reconcileInstalledPlugins("install-path", [
        String(n.manifest.id)
      ]);
    },
    async installFromUrl(e, t = !1, n, o, a) {
      D.info("[PluginStore] install from url start", {
        packageUrl: e,
        overwrite: t,
        packageSubdir: n,
        expectedSizeBytes: o,
        mirrorCount: a?.length ?? 0
      });
      const s = await ql(
        e,
        t,
        n,
        o,
        a
      );
      D.info("[PluginStore] install from url complete", {
        pluginId: s.manifest.id,
        packagePath: s.packagePath,
        packageUrl: e
      }), await this.reconcileInstalledPlugins("install-url", [
        String(s.manifest.id)
      ]);
    },
    async uninstall(e) {
      D.info("[PluginStore] uninstall start", { pluginId: e }), await Sb(e), await this.reconcileInstalledPlugins("uninstall", [String(e)]), D.info("[PluginStore] uninstall complete", { pluginId: e });
    },
    async ensureStateListener() {
      if (!this.stateUnlisten)
        try {
          this.stateUnlisten = await mt(
            "plugin-state-changed",
            async (e) => {
              const { pluginId: t, enabled: n } = e.payload;
              (this.installedPlugins.some((o) => o.id === t) || Ab(t)) && (this.enabled[t] = n), await this.reconcileInstalledPlugins(
                "backend-state-event",
                n ? [] : [t]
              );
            }
          );
        } catch (e) {
          D.warn("[PluginStore] 监听插件状态变化失败", e);
        }
    },
    async setEnabled(e, t) {
      const n = this.enabled[e];
      this.enabled[e] = t;
      try {
        D.info("[PluginStore] set enabled start", { pluginId: e, enabled: t }), t || (Ya(String(e)), this.runtimeRevision += 1), await kb(e, t), await this.reconcileInstalledPlugins(
          "set-enabled",
          t ? [] : [String(e)]
        ), D.info("[PluginStore] set enabled complete", {
          pluginId: e,
          enabled: t
        });
      } catch (o) {
        throw typeof n == "boolean" ? this.enabled[e] = n : delete this.enabled[e], n && await this.loadEnabledPluginEntries(), D.error("[PluginStore] 保存插件状态失败", {
          pluginId: e,
          enabled: t,
          error: o
        }), o;
      }
    },
    async loadEnabledPluginEntries() {
      if (Wn) {
        await Wn;
        return;
      }
      Wn = (async () => {
        await mw(
          this.installedPlugins,
          (e) => this.isEnabled(e)
        ), this.runtimeRevision += 1;
      })();
      try {
        await Wn;
      } finally {
        Wn = null;
      }
    },
    loadEnabledPluginEntriesInBackground() {
      this.loadEnabledPluginEntries().catch((e) => {
        D.warn("[PluginStore] 后台加载插件前端入口失败", e);
      });
    },
    shouldInstallMarketplaceItem(e) {
      const t = this.installedPlugins.find(
        (n) => n.id === e.id
      );
      return !t || t.source === "local" && vw(e.version, t.manifest.version) > 0;
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
          const a = e.mirrorUrls && e.mirrorUrls.length > 0 ? e.mirrorUrls : [hb(e.packageUrl)];
          D.info("[PluginStore] marketplace lifecycle install package", {
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
      if (Un) {
        await Un;
        return;
      }
      Un = (async () => {
        const e = {}, t = (n) => this.installedPlugins.some(
          (o) => o.id === n || o.resourceFor === n
        );
        if (t("screenshot"))
          try {
            const n = await Cb();
            e[n.pluginId] = n;
          } catch (n) {
            D.warn("[PluginStore] 获取截图插件资源状态失败", n);
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
            const n = await Tb();
            e["screen-recorder"] = {
              pluginId: "screen-recorder",
              resourceId: "ffmpeg",
              available: n.available,
              source: n.source,
              path: n.path,
              searchedPaths: n.searchedPaths
            };
          } catch (n) {
            D.warn("[PluginStore] 获取录屏 FFmpeg 资源状态失败", n);
          }
        if (t("local-ai") && this.isEnabled("local-ai"))
          try {
            const n = await Mb();
            e["local-ai"] = {
              pluginId: "local-ai",
              resourceId: "llama-runtime",
              available: n.available,
              source: n.source,
              path: n.path,
              searchedPaths: n.searchedPaths
            };
          } catch (n) {
            D.warn("[PluginStore] 获取本地 AI llama.cpp 资源状态失败", n);
          }
        this.resourceStatusByPluginId = e;
      })();
      try {
        await Un;
      } finally {
        Un = null;
      }
    },
    refreshPluginResourceStatusInBackground() {
      this.refreshPluginResourceStatus().catch((e) => {
        D.warn("[PluginStore] 后台刷新插件资源状态失败", e);
      });
    }
  },
  persist: {
    pick: ["enabled"]
  }
}), yw = co("configuration", {
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
      return Hn().effectiveDark;
    }
  },
  actions: {
    // 初始化配置
    async initialize() {
      try {
        this.dbPath = await x("get_db_path") || "";
      } catch (n) {
        D.error("获取数据库路径失败:", n);
      }
      const e = pb();
      await e.initialize(), this.searchHotkey = e.searchHotkey, this.configHotkey = e.configHotkey, this.translateHotkey = e.translateHotkey, this.selectionTranslateHotkey = e.selectionTranslateHotkey, this.screenshotHotkey = e.screenshotHotkey, this.screenRecorderHotkey = e.screenRecorderHotkey, this.darkModeHotkey = e.darkModeHotkey, this.wallpaperSwitcherHotkey = e.wallpaperSwitcherHotkey, this.pluginHotkeys = e.pluginHotkeys;
      const t = Hn();
      this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
      try {
        this.autoUpdateCheck = await x("get_auto_update_check");
      } catch (n) {
        D.error("获取自动检查失败:", n);
      }
      try {
        this.autoHideOnBlur = await x("get_auto_hide_on_blur");
      } catch (n) {
        D.error("获取自动失焦隐藏设置:", n);
      }
      try {
        const n = await x("get_language");
        n && (n === "zh-CN" || n === "en-US") && (this.language = n);
      } catch (n) {
        D.error("获取语言设置失败:", n);
      }
      try {
        const n = await fb();
        this.editorLineNumbers = n.lineNumbers, this.editorLineHeight = n.lineHeight || 1.6;
      } catch (n) {
        D.error("获取编辑器显示设置失败:", n);
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
        throw this.editorLineNumbers = t, D.error("更新编辑器行号设置失败:", n), n;
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
        throw this.editorLineHeight = t, D.error("更新编辑器行距设置失败:", o), o;
      }
    },
    // 更新主题并立即应用（委托给 useThemeStore）
    updateTheme(e) {
      const t = Hn();
      t.updateTheme(e), this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
    },
    // 应用主题到DOM（委托给 useThemeStore）
    applyTheme() {
      const e = Hn();
      e.theme = this.theme, e.applyTheme(), this.systemPrefersDark = e.systemPrefersDark;
    },
    // 同步系统主题样式（委托给 useThemeStore）
    syncSystemThemeStyle(e) {
      const t = Hn();
      t.syncSystemThemeStyle(e), this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
    }
  },
  persist: {
    pick: ["theme", "dbPath"]
  }
}), bw = "resources/transformers/transformers.min.js", ww = ["translation-offline-runtime", "translation"], _w = "https://huggingface.co/", Sw = "{model}/resolve/{revision}/", kw = "/__snippets_code_disabled_transformers_local_models__/", Cw = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let Kn = null;
const Tw = (e) => {
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
}, Ew = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, o = Tw(n);
  return o.index >= 0 ? n.slice(0, o.index + o.length) : n;
}, Pw = (e) => {
  const t = Ew(e);
  return Object.fromEntries(
    Cw.map((n) => [n, `${t}${n}`])
  );
}, tu = (e, t) => {
  var n, o;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = _w, e.remotePathTemplate = Sw, e.allowLocalModels = !1, e.localModelPath = kw, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (o = e.backends.onnx).wasm ?? (o.wasm = {}), e.backends.onnx.wasm.wasmPaths = Pw(t), e.backends.onnx.wasm.numThreads = 1);
};
async function Ow() {
  return Kn || (Kn = (async () => {
    for (const e of ww) {
      const t = await Ar(e, bw);
      if (!t) continue;
      const n = Dl(t), o = await import(
        /* @vite-ignore */
        n
      );
      return tu(o.env, n), D.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
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
    throw Kn = null, e;
  }), Kn);
}
let Et = null, to = !1, gn = null, La = null, qa = null;
const $w = "Xenova/opus-mt-en-zh", Iw = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Lw = 3e5;
function yi(e) {
  qa = e;
}
function xw() {
  return Iw;
}
function Rw(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (o, a) => setTimeout(() => a(new Error(n)), t)
    )
  ]);
}
async function nu() {
  return Et || gn || (to = !0, D.info("[离线翻译] 正在加载翻译模型..."), gn = (async () => {
    try {
      const { pipeline: e, env: t } = await Ow();
      tu(t);
      let n = "";
      const o = e("translation", $w, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (s) => {
          s.status === "done" && s.file && s.file !== n && (n = s.file, D.info(`[离线翻译] 已加载: ${s.file}`)), qa && qa({
            status: s.status,
            progress: s.progress,
            file: s.file
          });
        }
      });
      return Et = await Rw(
        o,
        Lw,
        "模型加载超时，请检查网络连接后重试"
      ), D.info("[离线翻译] 翻译模型加载完成"), to = !1, Et;
    } catch (e) {
      throw to = !1, gn = null, D.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), gn);
}
async function Aw(e) {
  if (!e?.trim()) return e;
  La = new AbortController();
  const t = La.signal;
  try {
    const n = await nu();
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
    throw n instanceof Error && n.message === "翻译已取消" ? (D.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (D.warn("[离线翻译] 运行时资源未安装"), n) : (D.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    La = null;
  }
}
async function Ja() {
  await nu();
}
function $o() {
  return Et !== null;
}
function Mw() {
  return to;
}
async function Gn() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      D.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const a = await (await caches.open(n)).keys();
          if (D.info(`[离线翻译] Cache "${n}" 包含 ${a.length} 个文件`), a.some(
            (r) => r.url.includes("opus-mt-en-zh") || r.url.includes("Xenova")
          )) {
            const r = a.some((i) => i.url.includes(".onnx"));
            if (D.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${r}`), r)
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
    D.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return D.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return D.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return D.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function Nw() {
  return (await Gn()).isCached;
}
function zw() {
  return Et !== null;
}
async function Fw() {
  if (Et)
    try {
      await Et.dispose?.();
    } catch {
    }
  Et = null, gn = null, to = !1, D.info("[离线翻译] 翻译器已释放");
}
async function Bw() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), D.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), D.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    D.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw D.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const Vw = { class: "translate-window" }, Dw = {
  class: "header",
  "data-tauri-drag-region": ""
}, Hw = { class: "left-buttons" }, jw = ["aria-label"], Ww = {
  class: "window-title",
  "data-tauri-drag-region": ""
}, Uw = { class: "right-buttons" }, Kw = ["aria-label"], Gw = { class: "translate-container" }, Zw = { class: "language-selector" }, Yw = ["aria-label", "disabled"], qw = { class: "source-area" }, Jw = { class: "source-actions" }, Xw = { class: "source-material" }, Qw = { class: "translation-results" }, e1 = ["onClick"], t1 = { class: "result-title" }, n1 = ["src"], o1 = ["src"], a1 = {
  key: 2,
  class: "offline-icon"
}, r1 = {
  key: 3,
  class: "offline-icon ai-icon"
}, s1 = { class: "result-controls" }, i1 = {
  key: 0,
  class: "result-body"
}, l1 = ["textContent", "onBlur"], u1 = {
  key: 2,
  class: "result-empty"
}, c1 = { class: "result-actions" }, d1 = ["onClick"], f1 = ["onClick"], p1 = ["onClick"], m1 = /* @__PURE__ */ U({
  __name: "index",
  setup(e) {
    const { t } = er(), n = gw(), o = Kl(), a = A(!1), s = A(""), r = A("auto"), i = A("zh"), u = A(!1), c = A(!1), d = A(), f = A(!1), p = A(!1), m = A([
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
    ]), v = y(() => m.value.filter((z) => z.engine === "offline" ? f.value : z.engine === "local-ai" ? p.value : !0)), h = (z) => z === "bing" ? t("translate.bingTranslate") : z === "google" ? t("translate.googleTranslate") : z === "offline" ? t("translate.offlineTranslate") : z === "local-ai" ? t("translate.localAiTranslate") : z, S = y(() => [
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
    let g = null, P = null, k = null;
    const $ = A({
      forChinese: "en",
      forEnglish: "zh"
    }), E = async () => {
      if (u.value) return;
      const z = await mt("tauri://blur", () => {
        g && clearTimeout(g), g = setTimeout(async () => {
          u.value || (I(), await o.hide());
        }, 100);
      }), V = await mt("tauri://focus", () => {
        g && clearTimeout(g), ue();
      }), ne = await mt("tauri://show", () => {
        ue();
      }), ye = await mt("tauri://move", () => {
        g && clearTimeout(g);
      }), Te = await mt("selection-text", (xe) => {
        xe.payload && xe.payload.text && ge(xe.payload.text);
      }), de = await mt("reset-state", () => {
        I();
      });
      P = () => {
        z(), V(), ye(), Te(), de(), ne();
      };
    }, L = async () => {
      u.value = !u.value, await o.setAlwaysOnTop(u.value), u.value ? P && (P(), P = null) : E();
    }, I = () => {
      s.value = "", c.value = !1, m.value.forEach((z) => {
        z.text = "", z.loading = !1;
      });
    }, Z = async () => {
      I(), await o.close();
    }, K = () => {
      r.value !== "auto" && ([r.value, i.value] = [
        i.value,
        r.value
      ], T());
    }, Q = () => {
      s.value = "", m.value.forEach((z) => {
        z.text = "";
      }), c.value = !1;
    }, se = async (z) => {
      z && (await navigator.clipboard.writeText(z), Ae.success(t("translate.copiedToClipboard")));
    }, w = (z, V) => {
      const ne = V.target;
      ne && (z.text = ne.innerText.trim());
    }, N = (z, V) => {
      if (!z) return;
      const ne = new SpeechSynthesisUtterance(z), ye = V === "zh" ? "zh-CN" : V === "zh_tw" ? "zh-TW" : V === "en" ? "en-US" : V;
      ne.lang = ye, window.speechSynthesis.speak(ne);
    }, Y = () => {
      if (r.value !== "auto") return;
      const z = Ea(s.value);
      z === "zh" ? i.value = $.value.forChinese : z === "en" && (i.value = $.value.forEnglish);
    }, O = () => {
      const z = Ea(s.value);
      z === "zh" ? $.value.forChinese = i.value : z === "en" && ($.value.forEnglish = i.value), T();
    }, B = async (z) => {
      const V = m.value.find((Te) => Te.engine === z);
      if (!V || z === "offline" && !f.value || z === "local-ai" && !p.value)
        return;
      V.loading = !0, V.text = "";
      const ne = db(s.value);
      let ye = i.value;
      z === "bing" && ye === "auto" && (ye = "en");
      try {
        let Te;
        if (z === "offline") {
          if (!zw())
            if (await Nw())
              D.info("[翻译窗口] 离线翻译懒加载：开始加载模型..."), await Ja(), D.info("[翻译窗口] 离线翻译懒加载：模型加载完成");
            else
              throw new Error("离线翻译模型未下载，请在设置中下载模型");
          Te = await Aw(ne);
        } else
          Te = await x("translate_text", {
            text: ne,
            from: r.value,
            to: ye,
            engine: z
          });
        V.text = Te;
      } catch (Te) {
        D.error(`[翻译] ${z}翻译出错`, Te);
        const de = String(Te);
        de.includes("429") || de.includes("Too Many Requests") ? V.text = t("translate.tooManyRequests") : de.includes("timeout") || de.includes("超时") ? V.text = t("translate.timeout") : de.includes("network") || de.includes("网络") ? V.text = t("translate.networkError") : de.includes("未下载") || de.includes("未激活") || de.includes("运行时未安装") ? V.text = de : V.text = t("translate.translateFailed");
      } finally {
        V.loading = !1;
      }
    }, T = async () => {
      if (!s.value.trim()) {
        m.value.forEach((V) => {
          V.text = "";
        });
        return;
      }
      Y(), a.value = !0;
      const z = v.value.map(
        (V) => B(V.engine)
      );
      await Promise.all(z), a.value = !1;
    }, ee = (z) => {
      z.expanded = !z.expanded;
    }, oe = () => {
      c.value = !!s.value, k && clearTimeout(k), s.value.trim() ? k = setTimeout(() => {
        T();
      }, 500) : m.value.forEach((z) => {
        z.text = "";
      });
    };
    let ie = "", me = !1;
    const ge = (z) => {
      z && (z === ie && me || (ie = z, me = !0, s.value = z, c.value = !0, Y(), T().finally(() => {
        setTimeout(() => {
          me = !1;
        }, 2e3);
      }), ue()));
    }, X = (z) => {
      s.value = z.text;
      const V = Ea(s.value), ne = r.value, ye = i.value;
      ne === "auto" ? (r.value = "auto", V === "zh" ? i.value = $.value.forChinese : i.value = $.value.forEnglish) : (r.value = ye, i.value = ne === "auto" ? V === "zh" ? "en" : "zh" : ne), T();
    }, ue = () => {
      const z = (V = 0) => {
        if (!(V > 5))
          if (d.value)
            d.value.focus();
          else {
            const ne = 100 * (V + 1);
            setTimeout(() => z(V + 1), ne);
          }
      };
      d.value && d.value.focus(), ke(() => {
        z();
      });
    }, _e = () => {
      Y(), T();
    };
    return Ee(async () => {
      try {
        await n.initialize(), p.value = n.isEnabled("local-ai");
      } catch (z) {
        D.warn("[翻译窗口] 获取本地 AI 插件状态失败:", z), p.value = !1;
      }
      try {
        const z = await x(
          "get_offline_model_activated"
        );
        D.info(`[翻译窗口] 离线模型后端激活状态: ${z}`), f.value = z;
      } catch (z) {
        D.error("[翻译窗口] 获取离线模型激活状态失败:", z), f.value = !1;
      }
      await E(), s.value.trim() && Y(), ue(), await ke(), setTimeout(() => {
        o.emit("translate_ready");
      }, 100);
    }), wi(() => {
      P && P(), g && clearTimeout(g), k && clearTimeout(k), I();
    }), (z, V) => {
      const ne = $r, ye = xr, Te = Lr, de = mr, xe = iy;
      return _(), R("main", Vw, [
        b("div", Dw, [
          b("div", Hw, [
            F(ne, {
              content: z.$t("pin.pinWindow"),
              placement: "bottom",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: q(() => [
                b("button", {
                  type: "button",
                  "aria-label": z.$t("pin.pinWindow"),
                  onMousedown: V[0] || (V[0] = Pe(() => {
                  }, ["stop"])),
                  onClick: L,
                  class: M(["window-action", "pin-button", l(u) ? "pinned" : ""])
                }, [
                  F(l(tc), { size: 18 })
                ], 42, jw)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"])
          ]),
          b(
            "div",
            Ww,
            G(z.$t("translate.title")),
            1
            /* TEXT */
          ),
          b("div", Uw, [
            F(ne, {
              content: z.$t("pin.close"),
              placement: "bottom",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: q(() => [
                b("button", {
                  type: "button",
                  "aria-label": z.$t("pin.close"),
                  onMousedown: V[1] || (V[1] = Pe(() => {
                  }, ["stop"])),
                  onClick: Z,
                  class: "window-action material-close"
                }, [
                  F(l(qu), { size: 22 })
                ], 40, Kw)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"])
          ])
        ]),
        b("div", Gw, [
          j(" 语言选择区域 "),
          b("div", Zw, [
            F(Te, {
              modelValue: l(r),
              "onUpdate:modelValue": V[2] || (V[2] = (le) => Zn(r) ? r.value = le : null),
              size: "small",
              onChange: _e,
              class: "lang-select"
            }, {
              default: q(() => [
                (_(!0), R(
                  Oe,
                  null,
                  tt(l(S), (le) => (_(), J(ye, {
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
            F(ne, {
              content: z.$t("translate.translateBack"),
              placement: "top",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: q(() => [
                b("button", {
                  type: "button",
                  "aria-label": z.$t("translate.translateBack"),
                  disabled: l(r) === "auto",
                  onClick: K,
                  class: "swap-button"
                }, [
                  F(l(Hr), { size: 22 })
                ], 8, Yw)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"]),
            F(Te, {
              modelValue: l(i),
              "onUpdate:modelValue": V[3] || (V[3] = (le) => Zn(i) ? i.value = le : null),
              size: "small",
              onChange: O,
              class: "lang-select"
            }, {
              default: q(() => [
                (_(!0), R(
                  Oe,
                  null,
                  tt(l(S), (le) => (_(), J(ye, {
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
          j(" 源文本输入区域 "),
          b("div", qw, [
            F(de, {
              ref_key: "sourceTextArea",
              ref: d,
              modelValue: l(s),
              "onUpdate:modelValue": V[4] || (V[4] = (le) => Zn(s) ? s.value = le : null),
              type: "textarea",
              rows: 2,
              placeholder: z.$t("translate.inputPlaceholder"),
              resize: "none",
              onInput: oe,
              class: "source-textarea"
            }, null, 8, ["modelValue", "placeholder"]),
            b("div", Jw, [
              b("div", Xw, [
                F(ne, {
                  content: z.$t("translate.speakText"),
                  placement: "top",
                  "hide-after": 1e3,
                  "popper-class": "themed-tooltip-popper"
                }, {
                  default: q(() => [
                    b("button", {
                      type: "button",
                      onClick: V[5] || (V[5] = (le) => N(l(s), l(r))),
                      class: "action-btn"
                    }, [
                      F(l(jr), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"]),
                l(c) ? (_(), J(ne, {
                  key: 0,
                  content: z.$t("translate.deleteText"),
                  placement: "top",
                  "hide-after": 1e3,
                  "popper-class": "themed-tooltip-popper"
                }, {
                  default: q(() => [
                    b("button", {
                      type: "button",
                      onClick: Q,
                      class: "action-btn"
                    }, [
                      F(l(Xu), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"])) : j("v-if", !0)
              ])
            ])
          ]),
          j(" 多引擎翻译结果区域 "),
          b("div", Qw, [
            (_(!0), R(
              Oe,
              null,
              tt(l(v), (le) => (_(), R(
                "div",
                {
                  key: le.engine,
                  class: M(["result-card", { "result-expanded": le.expanded }])
                },
                [
                  b("button", {
                    type: "button",
                    class: "result-header",
                    onClick: (Xe) => ee(le)
                  }, [
                    b("div", t1, [
                      le.engine === "google" ? (_(), R("img", {
                        key: 0,
                        src: l(nb),
                        class: "engine-icon",
                        alt: "Google"
                      }, null, 8, n1)) : le.engine === "bing" ? (_(), R("img", {
                        key: 1,
                        src: l(ob),
                        class: "engine-icon",
                        alt: "Bing"
                      }, null, 8, o1)) : le.engine === "offline" ? (_(), R("span", a1, "离")) : (_(), R("span", r1, "AI")),
                      b(
                        "span",
                        null,
                        G(h(le.engine)),
                        1
                        /* TEXT */
                      )
                    ]),
                    b("div", s1, [
                      (_(), J(et(le.expanded ? l(ac) : l(Qu)), {
                        size: 18,
                        class: "expand-icon"
                      }))
                    ])
                  ], 8, e1),
                  le.expanded ? (_(), R("div", i1, [
                    le.loading ? (_(), J(xe, {
                      key: 0,
                      rows: 3,
                      animated: ""
                    })) : le.text ? (_(), R("div", {
                      key: 1,
                      class: "result-text",
                      contenteditable: "plaintext-only",
                      spellcheck: "false",
                      textContent: G(le.text),
                      onBlur: (Xe) => w(le, Xe)
                    }, null, 40, l1)) : (_(), R(
                      "div",
                      u1,
                      G(z.$t("translate.resultPlaceholder")),
                      1
                      /* TEXT */
                    )),
                    b("div", c1, [
                      F(ne, {
                        content: z.$t("translate.speakText"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: q(() => [
                          b("button", {
                            type: "button",
                            onClick: (Xe) => N(le.text, l(i)),
                            class: "action-btn"
                          }, [
                            F(l(jr), { size: 18 })
                          ], 8, d1)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      F(ne, {
                        content: z.$t("translate.copyResult"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: q(() => [
                          b("button", {
                            type: "button",
                            onClick: (Xe) => se(le.text),
                            class: "action-btn"
                          }, [
                            F(l(Ju), { size: 18 })
                          ], 8, f1)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      F(ne, {
                        content: z.$t("translate.translateBack"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: q(() => [
                          b("button", {
                            type: "button",
                            onClick: (Xe) => X(le),
                            class: "action-btn rotate-icon"
                          }, [
                            F(l(Hr), { size: 18 })
                          ], 8, p1)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"])
                    ])
                  ])) : j("v-if", !0)
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
}), go = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, v1 = /* @__PURE__ */ go(m1, [["__scopeId", "data-v-b5e3d672"]]), h1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: v1
}, Symbol.toStringTag, { value: "Module" })), g1 = ["disabled"], y1 = {
  key: 0,
  class: "custom-button__loading"
}, b1 = /* @__PURE__ */ U({
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
      e.loading ? (_(), R("div", y1, o[1] || (o[1] = [
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
      ]))) : j("v-if", !0),
      ae(n.$slots, "default", {}, void 0, !0)
    ], 10, g1));
  }
}), Io = /* @__PURE__ */ go(b1, [["__scopeId", "data-v-9497085f"]]), w1 = /* @__PURE__ */ U({
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
          G(e.modelValue ? e.activeText : e.inactiveText),
          3
          /* TEXT, CLASS */
        )) : j("v-if", !0),
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
}), _1 = /* @__PURE__ */ go(w1, [["__scopeId", "data-v-09573d1e"]]);
async function S1() {
  try {
    return await x("get_attachment_config");
  } catch (e) {
    throw new Error(`获取附件配置失败: ${e}`);
  }
}
async function k1(e) {
  try {
    await x("update_attachment_config", { config: e });
  } catch (t) {
    throw new Error(`更新附件配置失败: ${t}`);
  }
}
const C1 = { class: "settings-panel" }, T1 = { class: "panel-header" }, E1 = { class: "panel-title" }, P1 = { class: "panel-content" }, O1 = { class: "summarize-section" }, $1 = { class: "summarize-label" }, I1 = { class: "summarize-label-title" }, L1 = { class: "summarize-label-desc" }, x1 = { class: "summarize-input-wrapper" }, R1 = { class: "summarize-section" }, A1 = { class: "summarize-label" }, M1 = { class: "summarize-label-title" }, N1 = { class: "summarize-label-desc" }, z1 = { class: "summarize-input-wrapper" }, F1 = { class: "flex items-center gap-3" }, B1 = {
  key: 0,
  class: "summarize-section"
}, V1 = { class: "summarize-label" }, D1 = { class: "summarize-label-title" }, H1 = { class: "summarize-label-desc" }, j1 = { class: "summarize-input-wrapper flex-col !items-start" }, W1 = { class: "w-full space-y-2" }, U1 = { class: "w-5 text-center" }, K1 = {
  key: 0,
  class: "text-green-500 text-base"
}, G1 = {
  key: 1,
  class: "text-red-500 text-base"
}, Z1 = {
  key: 2,
  class: "text-yellow-500 text-base"
}, Y1 = {
  key: 3,
  class: "text-panel-text-secondary text-base"
}, q1 = ["title"], J1 = { class: "w-16 text-right text-xs text-panel-text-secondary" }, X1 = { class: "w-24" }, Q1 = {
  key: 1,
  class: "text-green-500 text-xs"
}, e2 = {
  key: 2,
  class: "text-red-500 text-xs"
}, t2 = {
  key: 3,
  class: "text-panel-text-secondary text-xs"
}, n2 = {
  key: 1,
  class: "summarize-section !mt-2"
}, o2 = { class: "summarize-label" }, a2 = { class: "summarize-label-title" }, r2 = { class: "summarize-label-desc" }, s2 = { class: "summarize-input-wrapper" }, i2 = { class: "model-info-card" }, l2 = { class: "info-row" }, u2 = { class: "info-item" }, c2 = { class: "info-label" }, d2 = { class: "info-item" }, f2 = { class: "info-label" }, p2 = { class: "info-value" }, m2 = { class: "info-item" }, v2 = { class: "info-label" }, h2 = { class: "info-value" }, g2 = { class: "summarize-section !mt-2" }, y2 = { class: "summarize-label" }, b2 = { class: "summarize-label-title" }, w2 = { class: "summarize-label-desc" }, _2 = { class: "summarize-input-wrapper" }, S2 = { class: "usage-tips" }, k2 = { class: "tip-item" }, C2 = { class: "tip-text" }, T2 = { class: "tip-item" }, E2 = { class: "tip-text" }, P2 = { class: "tip-item" }, O2 = { class: "tip-text" }, $2 = { class: "tip-item" }, I2 = { class: "tip-text" }, L2 = "resources/transformers/transformers.min.js", x2 = "translation-offline-runtime", R2 = /* @__PURE__ */ U({
  name: "Translation",
  __name: "index",
  setup(e) {
    const { t } = er(), n = ["translation-offline-runtime", "translation"], o = A("bing"), a = A(!1), s = A(!1), r = A({ isCached: !1, cacheType: "none" }), i = A(!1), u = A(!1), c = A(!1), d = A(!1), f = A([]), p = y(() => r.value.isCached), m = y(() => [
      { value: "google", label: t("translation.google") },
      { value: "bing", label: t("translation.bing") },
      { value: "offline", label: t("translation.offline") },
      { value: "local-ai", label: t("translation.localAi") }
    ]), v = y(() => i.value ? t("translation.modelLoading") : c.value ? a.value ? t("translation.modelReady") : p.value && s.value ? t("translation.modelActivated") : p.value ? t("translation.modelCached") : t("translation.modelNotLoaded") : t("translation.runtimeMissing")), h = y(() => i.value ? "text-yellow-500" : c.value ? a.value || p.value && s.value ? "text-green-500" : p.value ? "text-blue-500" : "text-panel-text-secondary" : "text-red-500"), S = y(() => a.value || p.value), g = () => {
      const w = xw();
      f.value = w.map((N) => ({
        file: N.name,
        progress: 0,
        status: "pending",
        size: N.size
      }));
    }, P = (w, N, Y) => {
      const O = f.value.find((B) => w.includes(B.file) || B.file.includes(w));
      O && (O.progress = N, O.status = Y);
    }, k = async () => {
      for (const w of n)
        if (await Ar(w, L2))
          return c.value = !0, !0;
      return c.value = !1, !1;
    }, $ = async () => {
      d.value = !0;
      try {
        const w = await _b(mb), N = Array.isArray(w.plugins) ? w.plugins : [], Y = N.find((O) => O.id === x2);
        if (!Y)
          throw new Error(t("translation.runtimeMarketplaceMissing"));
        if (await I(Y, N), await k() || (D.info("[翻译设置] 运行时资源包缺少 runtime 文件，开始补全资源"), await Pa()), !await k())
          throw new Error(t("translation.runtimeInstallVerifyFailed"));
        Ae.msg(t("translation.runtimeInstallSuccess"));
      } catch (w) {
        D.error("[翻译设置] 安装离线翻译运行时失败:", w), Ae.msg(
          w instanceof Error ? w.message : t("translation.runtimeInstallFailed"),
          "error"
        );
      } finally {
        d.value = !1;
      }
    }, E = (w) => Array.isArray(w.dependencies) ? w.dependencies.filter((N) => typeof N == "string" && !!N.trim()) : [], L = (w) => !!(w.packageUrl && w.status !== "included"), I = async (w, N, Y = /* @__PURE__ */ new Set()) => {
      if (!Y.has(w.id)) {
        Y.add(w.id);
        try {
          for (const O of E(w)) {
            const B = N.find((T) => T.id === O);
            if (!B)
              throw new Error(t("plugins.dependencyMissing", { id: O }));
            await I(B, N, Y);
          }
          w.packageUrl && L(w) && (D.info("[翻译设置] 开始安装离线翻译运行时资源包", {
            pluginId: w.id,
            packageUrl: w.packageUrl
          }), await ql(
            w.packageUrl,
            !0,
            w.packageSubdir,
            w.sizeBytes
          ));
        } finally {
          Y.delete(w.id);
        }
      }
    }, Z = async (w) => {
      try {
        await x("set_translation_engine", { engine: w }), Ae.msg(t("translation.engineSaved"));
      } catch (N) {
        D.info("Failed to save translation engine:", N), Ae.msg(t("translation.engineSaveFailed"), "error");
      }
    }, K = async () => {
      if (D.info("[翻译设置] 开始下载离线模型..."), !await k()) {
        Ae.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await Pa(), await k();
      } catch (w) {
        D.error("[翻译设置] 修复离线翻译运行时失败:", w), Ae.msg(w instanceof Error && w.message ? w.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      i.value = !0, g(), yi((w) => {
        const N = w.file || "";
        w.status === "initiate" ? P(N, 0, "downloading") : w.status === "progress" && w.progress !== void 0 ? P(N, Math.round(w.progress), "downloading") : w.status === "done" && P(N, 100, "done");
      });
      try {
        await Ja(), f.value.forEach((w) => {
          w.status !== "done" && (w.status = "done"), w.progress = 100;
        }), a.value = !0, s.value = !0, r.value = await Gn(), D.info("[翻译设置] 模型下载并加载成功，更新后端激活状态为 true"), await x("set_offline_model_activated", { activated: !0 }), Ae.msg(t("translation.modelLoadSuccess"));
      } catch (w) {
        D.error("[翻译设置] 模型下载失败:", w), f.value.forEach((N) => {
          (N.status === "downloading" || N.status === "pending") && (N.status = "error");
        }), a.value = !1, Ae.msg(w instanceof Error && w.message ? w.message : t("translation.modelLoadFailed"), "error");
      } finally {
        i.value = !1, yi(null), a.value = $o(), r.value = await Gn(), D.info(`[翻译设置] 最终状态 - 内存加载: ${a.value}, 缓存存在: ${r.value.isCached}`);
      }
    }, Q = async () => {
      if (D.info("[翻译设置] 开始激活离线模型..."), !await k()) {
        Ae.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await Pa(), await k();
      } catch (w) {
        D.error("[翻译设置] 修复离线翻译运行时失败:", w), Ae.msg(w instanceof Error && w.message ? w.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      i.value = !0;
      try {
        await Ja(), a.value = !0, s.value = !0, D.info("[翻译设置] 模型激活成功，更新后端激活状态为 true"), await x("set_offline_model_activated", { activated: !0 }), Ae.msg(t("translation.modelLoadSuccess"));
      } catch (w) {
        D.error("[翻译设置] 模型激活失败:", w), a.value = !1, Ae.msg(w instanceof Error && w.message ? w.message : t("translation.modelLoadFailed"), "error");
      } finally {
        i.value = !1, a.value = $o(), D.info(`[翻译设置] 激活后状态 - 内存加载: ${a.value}`);
      }
    }, se = async () => {
      D.info("[翻译设置] 开始删除离线模型..."), u.value = !0;
      try {
        await Fw(), await Bw(), a.value = !1, s.value = !1, r.value = { isCached: !1, cacheType: "none" }, D.info("[翻译设置] 模型删除成功，更新后端激活状态为 false"), await x("set_offline_model_activated", { activated: !1 }), Ae.msg(t("translation.modelDeleted"));
      } catch (w) {
        D.error("[翻译设置] 模型删除失败:", w), Ae.msg(t("translation.modelDeleteFailed"), "error");
      } finally {
        u.value = !1, a.value = $o(), r.value = await Gn(), D.info(`[翻译设置] 删除后状态 - 内存加载: ${a.value}, 缓存存在: ${r.value.isCached}`);
      }
    };
    return Ee(async () => {
      D.info("[翻译设置] 页面初始化..."), await k();
      try {
        const Y = await x("get_translation_engine");
        D.info(`[翻译设置] 从后端获取翻译引擎: ${Y}`), Y && ["google", "bing", "offline", "local-ai"].includes(Y) && (o.value = Y);
      } catch (Y) {
        D.error("[翻译设置] 获取翻译引擎失败:", Y);
      }
      const w = $o(), N = Mw();
      r.value = await Gn(), D.info(`[翻译设置] 前端状态 - 内存加载: ${w}, 正在初始化: ${N}, 缓存存在: ${r.value.isCached}`), a.value = w, i.value = N;
      try {
        const Y = await x("get_offline_model_activated");
        D.info(`[翻译设置] 后端激活状态: ${Y}`), s.value = Y, Y && !r.value.isCached && (D.info("[翻译设置] 后端已激活但缓存不存在，重置后端状态"), await x("set_offline_model_activated", { activated: !1 }), s.value = !1), !Y && w && (D.info("[翻译设置] 内存已加载但后端未标记，同步后端状态为 true"), await x("set_offline_model_activated", { activated: !0 }), s.value = !0);
      } catch (Y) {
        D.error("[翻译设置] 处理激活状态失败:", Y);
      }
    }), (w, N) => {
      const Y = xr, O = Lr, B = X0;
      return _(), R("div", C1, [
        j(" 固定标题 "),
        b("div", T1, [
          b(
            "h3",
            E1,
            G(w.$t("translation.title")),
            1
            /* TEXT */
          )
        ]),
        j(" 可滚动内容 "),
        b("main", P1, [
          j(" 默认翻译引擎 "),
          b("section", O1, [
            b("div", $1, [
              b(
                "div",
                I1,
                G(w.$t("translation.defaultEngine")),
                1
                /* TEXT */
              ),
              b(
                "div",
                L1,
                G(w.$t("translation.defaultEngineDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", x1, [
              F(O, {
                class: "summarize-input !w-36",
                modelValue: o.value,
                "onUpdate:modelValue": N[0] || (N[0] = (T) => o.value = T),
                onChange: Z
              }, {
                default: q(() => [
                  (_(!0), R(
                    Oe,
                    null,
                    tt(m.value, (T) => (_(), J(Y, {
                      key: T.value,
                      label: T.label,
                      value: T.value
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
          j(" 离线翻译模型 "),
          b("section", R1, [
            b("div", A1, [
              b(
                "div",
                M1,
                G(w.$t("translation.offlineModel")),
                1
                /* TEXT */
              ),
              b(
                "div",
                N1,
                G(w.$t("translation.offlineModelDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", z1, [
              b("div", F1, [
                b(
                  "span",
                  {
                    class: M(["text-sm font-medium", h.value])
                  },
                  G(v.value),
                  3
                  /* TEXT, CLASS */
                ),
                !c.value && !i.value ? (_(), J(l(Io), {
                  key: 0,
                  type: "primary",
                  size: "small",
                  loading: d.value,
                  onClick: $
                }, {
                  default: q(() => [
                    Qt(
                      G(w.$t("translation.installRuntime")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : j("v-if", !0),
                c.value && !p.value && !i.value ? (_(), J(l(Io), {
                  key: 1,
                  type: "primary",
                  size: "small",
                  onClick: K
                }, {
                  default: q(() => [
                    Qt(
                      G(w.$t("translation.loadModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : j("v-if", !0),
                c.value && p.value && !a.value && !s.value && !i.value ? (_(), J(l(Io), {
                  key: 2,
                  type: "primary",
                  size: "small",
                  onClick: Q
                }, {
                  default: q(() => [
                    Qt(
                      G(w.$t("translation.activateModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : j("v-if", !0),
                p.value && !i.value ? (_(), J(l(Io), {
                  key: 3,
                  type: "default",
                  size: "small",
                  onClick: se,
                  loading: u.value
                }, {
                  default: q(() => [
                    Qt(
                      G(w.$t("translation.deleteModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : j("v-if", !0)
              ])
            ])
          ]),
          j(" 多文件下载进度（独立区块） "),
          i.value ? (_(), R("section", B1, [
            b("div", V1, [
              b(
                "div",
                D1,
                G(w.$t("translation.downloadProgress")),
                1
                /* TEXT */
              ),
              b(
                "div",
                H1,
                G(w.$t("translation.downloadProgressDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", j1, [
              b("div", W1, [
                (_(!0), R(
                  Oe,
                  null,
                  tt(f.value, (T) => (_(), R("div", {
                    key: T.file,
                    class: "flex items-center gap-3 py-1"
                  }, [
                    b("span", U1, [
                      T.status === "done" ? (_(), R("span", K1, "✓")) : T.status === "error" ? (_(), R("span", G1, "✗")) : T.status === "downloading" ? (_(), R("span", Z1, "↓")) : (_(), R("span", Y1, "○"))
                    ]),
                    b("span", {
                      class: "w-64 truncate text-sm text-panel-text-secondary",
                      title: T.file
                    }, G(T.file), 9, q1),
                    b(
                      "span",
                      J1,
                      G(T.size),
                      1
                      /* TEXT */
                    ),
                    b("div", X1, [
                      T.status === "downloading" ? (_(), J(B, {
                        key: 0,
                        percentage: T.progress,
                        "stroke-width": 6,
                        "show-text": !0,
                        "text-inside": !1
                      }, null, 8, ["percentage"])) : T.status === "done" ? (_(), R(
                        "span",
                        Q1,
                        G(w.$t("translation.completed")),
                        1
                        /* TEXT */
                      )) : T.status === "error" ? (_(), R(
                        "span",
                        e2,
                        G(w.$t("translation.failed")),
                        1
                        /* TEXT */
                      )) : (_(), R(
                        "span",
                        t2,
                        G(w.$t("translation.waiting")),
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
          ])) : j("v-if", !0),
          j(" 模型信息（仅在已缓存或已加载时显示） "),
          S.value && !i.value ? (_(), R("section", n2, [
            b("div", o2, [
              b(
                "div",
                a2,
                G(w.$t("translation.modelInfo")),
                1
                /* TEXT */
              ),
              b(
                "div",
                r2,
                G(w.$t("translation.modelInfoDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", s2, [
              b("div", i2, [
                b("div", l2, [
                  b("div", u2, [
                    b(
                      "span",
                      c2,
                      G(w.$t("translation.modelName")),
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
                  b("div", d2, [
                    b(
                      "span",
                      f2,
                      G(w.$t("translation.modelSize")),
                      1
                      /* TEXT */
                    ),
                    b(
                      "span",
                      p2,
                      G(r.value.estimatedSize || "~300MB"),
                      1
                      /* TEXT */
                    )
                  ]),
                  b("div", m2, [
                    b(
                      "span",
                      v2,
                      G(w.$t("translation.supportLang")),
                      1
                      /* TEXT */
                    ),
                    b(
                      "span",
                      h2,
                      G(w.$t("translation.enToZh")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ])) : j("v-if", !0),
          j(" 使用说明 "),
          b("section", g2, [
            b("div", y2, [
              b(
                "div",
                b2,
                G(w.$t("translation.usage")),
                1
                /* TEXT */
              ),
              b(
                "div",
                w2,
                G(w.$t("translation.usageDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", _2, [
              b("div", S2, [
                b("div", k2, [
                  N[2] || (N[2] = b(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    C2,
                    G(w.$t("translation.usageTip1")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", T2, [
                  N[3] || (N[3] = b(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    E2,
                    G(w.$t("translation.usageTip2")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", P2, [
                  N[4] || (N[4] = b(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    O2,
                    G(w.$t("translation.usageTip3")),
                    1
                    /* TEXT */
                  )
                ]),
                b("div", $2, [
                  N[5] || (N[5] = b(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  b(
                    "span",
                    I2,
                    G(w.$t("translation.usageTip4")),
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
}), A2 = /* @__PURE__ */ go(R2, [["__scopeId", "data-v-b5694b08"]]), M2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: A2
}, Symbol.toStringTag, { value: "Module" })), N2 = { class: "settings-panel" }, z2 = { class: "panel-header" }, F2 = { class: "panel-title" }, B2 = { class: "panel-content" }, V2 = { class: "summarize-section" }, D2 = { class: "summarize-label" }, H2 = { class: "summarize-label-title" }, j2 = { class: "summarize-label-desc" }, W2 = { class: "summarize-input-wrapper" }, U2 = { class: "summarize-section" }, K2 = { class: "summarize-label" }, G2 = { class: "summarize-label-title" }, Z2 = { class: "summarize-label-desc" }, Y2 = { class: "summarize-input-wrapper line-height-control" }, q2 = { class: "line-height-value" }, J2 = { class: "summarize-section transparent-input" }, X2 = { class: "summarize-label" }, Q2 = { class: "summarize-label-title" }, e_ = { class: "summarize-label-desc" }, t_ = { class: "summarize-input-wrapper" }, n_ = { class: "summarize-section transparent-input" }, o_ = { class: "summarize-label" }, a_ = { class: "summarize-label-title" }, r_ = { class: "summarize-label-desc" }, s_ = { class: "summarize-input-wrapper" }, i_ = { class: "summarize-section transparent-input" }, l_ = { class: "summarize-label" }, u_ = { class: "summarize-label-title" }, c_ = { class: "summarize-label-desc" }, d_ = { class: "summarize-input-wrapper" }, f_ = { class: "preview-box" }, p_ = /* @__PURE__ */ U({
  name: "AttachmentSettings",
  __name: "index",
  setup(e) {
    const { t } = er(), n = yw(), o = A({
      pathTemplate: "assets/${noteFileName}/",
      filenameFormat: "snippets-code"
    }), a = A(!1), s = A(!1), r = A(n.editorLineHeight), i = y(() => {
      const p = t("settings.attachment.exampleNoteName") || "示例笔记", m = u(o.value.filenameFormat);
      return o.value.pathTemplate.replace("${noteFileName}", p) + m;
    });
    function u(p) {
      const m = /* @__PURE__ */ new Date(), v = m.toISOString().slice(0, 10).replace(/-/g, ""), h = m.toTimeString().slice(0, 8).replace(/:/g, "");
      switch (p) {
        case "snippets-code":
          return `Pasted image ${v}${h}.png`;
        case "simple":
          return `image-${v}-${h}.png`;
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
          await k1(o.value), Ae.msg(t("settings.attachment.configSaved"));
        } catch (p) {
          console.error("保存配置失败:", p), Ae.msg(t("settings.attachment.configSaveFailed"), "error");
        } finally {
          s.value = !1;
        }
      }
    }
    const d = async (p) => {
      try {
        await n.updateEditorLineNumbers(p);
      } catch (m) {
        Ae.msg(`${t("settings.settingFailed")}: ${m}`, "error");
      }
    }, f = async (p) => {
      const m = Array.isArray(p) ? p[0] : p;
      try {
        await n.updateEditorLineHeight(m);
      } catch (v) {
        r.value = n.editorLineHeight, Ae.msg(`${t("settings.settingFailed")}: ${v}`, "error");
      }
    };
    return re(() => n.editorLineHeight, (p) => {
      r.value = p;
    }), Ee(async () => {
      a.value = !0;
      try {
        o.value = await S1();
      } catch (p) {
        console.error("加载配置失败:", p);
      } finally {
        a.value = !1;
      }
    }), (p, m) => {
      const v = Ey, h = mr, S = xr, g = Lr;
      return _(), R("div", N2, [
        j(" 固定标题 "),
        b("div", z2, [
          b(
            "h3",
            F2,
            G(p.$t("settings.attachment.title")),
            1
            /* TEXT */
          )
        ]),
        j(" 可滚动内容 "),
        b("main", B2, [
          j(" 编辑器行号 "),
          b("section", V2, [
            b("div", D2, [
              b(
                "div",
                H2,
                G(p.$t("settings.editorLineNumbers")),
                1
                /* TEXT */
              ),
              b(
                "div",
                j2,
                G(p.$t("settings.editorLineNumbersDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", W2, [
              F(l(_1), {
                "model-value": l(n).editorLineNumbers,
                "active-text": p.$t("common.on"),
                "inactive-text": p.$t("common.off"),
                onChange: d
              }, null, 8, ["model-value", "active-text", "inactive-text"])
            ])
          ]),
          j(" 编辑器行距 "),
          b("section", U2, [
            b("div", K2, [
              b(
                "div",
                G2,
                G(p.$t("settings.editorLineHeight")),
                1
                /* TEXT */
              ),
              b(
                "div",
                Z2,
                G(p.$t("settings.editorLineHeightDesc")),
                1
                /* TEXT */
              )
            ]),
            b("div", Y2, [
              F(v, {
                modelValue: l(r),
                "onUpdate:modelValue": m[0] || (m[0] = (P) => Zn(r) ? r.value = P : null),
                min: 1.2,
                max: 2,
                step: 0.05,
                "show-tooltip": !1,
                onChange: f
              }, null, 8, ["modelValue"]),
              b(
                "span",
                q2,
                G(l(r).toFixed(2)),
                1
                /* TEXT */
              )
            ])
          ]),
          j(" 附件路径模板 "),
          b("section", J2, [
            b("div", X2, [
              b(
                "div",
                Q2,
                G(p.$t("settings.attachment.pathTemplate")),
                1
                /* TEXT */
              ),
              b(
                "div",
                e_,
                G(p.$t("settings.attachment.pathTemplateHint")),
                1
                /* TEXT */
              )
            ]),
            b("div", t_, [
              F(h, {
                class: "summarize-input",
                modelValue: l(o).pathTemplate,
                "onUpdate:modelValue": m[1] || (m[1] = (P) => l(o).pathTemplate = P),
                placeholder: p.$t("settings.attachment.pathTemplatePlaceholder"),
                disabled: l(s),
                onBlur: c
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          j(" 文件名生成格式 "),
          b("section", n_, [
            b("div", o_, [
              b(
                "div",
                a_,
                G(p.$t("settings.attachment.filenameFormat")),
                1
                /* TEXT */
              ),
              b(
                "div",
                r_,
                G(p.$t("settings.attachment.filenameFormatHint")),
                1
                /* TEXT */
              )
            ]),
            b("div", s_, [
              F(g, {
                class: "summarize-input !w-64",
                modelValue: l(o).filenameFormat,
                "onUpdate:modelValue": m[2] || (m[2] = (P) => l(o).filenameFormat = P),
                disabled: l(s),
                onChange: c
              }, {
                default: q(() => [
                  F(S, {
                    label: p.$t("settings.attachment.formatObsidian"),
                    value: "obsidian"
                  }, null, 8, ["label"]),
                  F(S, {
                    label: p.$t("settings.attachment.formatSimple"),
                    value: "simple"
                  }, null, 8, ["label"]),
                  F(S, {
                    label: p.$t("settings.attachment.formatUuid"),
                    value: "uuid"
                  }, null, 8, ["label"])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["modelValue", "disabled"])
            ])
          ]),
          j(" 路径预览 "),
          b("section", i_, [
            b("div", l_, [
              b(
                "div",
                u_,
                G(p.$t("settings.attachment.pathPreview")),
                1
                /* TEXT */
              ),
              b(
                "div",
                c_,
                G(p.$t("settings.attachment.pathPreviewHint")),
                1
                /* TEXT */
              )
            ]),
            b("div", d_, [
              b("div", f_, [
                b(
                  "code",
                  null,
                  G(l(i)),
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
}), m_ = /* @__PURE__ */ go(p_, [["__scopeId", "data-v-5c6becef"]]), v_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: m_
}, Symbol.toStringTag, { value: "Module" }));
export {
  b_ as activate
};
