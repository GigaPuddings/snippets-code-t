import * as xu from "vue";
import { inject as ye, createVNode as B, defineAsyncComponent as Qa, getCurrentInstance as Ue, ref as M, computed as b, unref as l, shallowRef as Zt, watchEffect as Si, readonly as es, getCurrentScope as Ru, onScopeDispose as Au, onMounted as Pe, nextTick as Se, watch as ie, isRef as Jn, warn as Mu, provide as ht, defineComponent as G, createElementBlock as R, openBlock as w, mergeProps as qt, renderSlot as re, createElementVNode as y, toRef as wt, onUnmounted as ki, useAttrs as zu, useSlots as Nu, normalizeStyle as we, normalizeClass as N, createCommentVNode as H, Fragment as Ie, createBlock as Y, withCtx as q, resolveDynamicComponent as at, withModifiers as Oe, toDisplayString as K, onBeforeUnmount as Ct, Transition as zn, withDirectives as Ye, vShow as At, reactive as Mt, onActivated as Bu, onUpdated as Ci, cloneVNode as Fu, Text as Vu, Comment as Du, Teleport as Hu, onBeforeMount as ju, onDeactivated as Wu, createTextVNode as on, withKeys as Ot, createSlots as Uu, toRaw as Ku, toRefs as Tn, resolveComponent as en, resolveDirective as Gu, toHandlerKey as Zu, renderList as st, vModelText as qu, normalizeProps as Yu, h as Ti, shallowReactive as Ju, isVNode as so, render as Do, markRaw as Hs } from "vue";
import * as Xu from "vue-i18n";
import { useI18n as ts } from "vue-i18n";
import * as Qu from "pinia";
import { defineStore as mo } from "pinia";
import * as ec from "vue-router";
var tc = {
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
function nc() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function oc(e, t, n) {
  var o = typeof t.fill == "string" ? [t.fill] : t.fill || [], a = [], r = t.theme || n.theme;
  switch (r) {
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
var ac = Symbol("icon-context");
function gt(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(r) {
      var s = nc(), i = ye(ac, tc);
      return function() {
        var u = r.size, c = r.strokeWidth, d = r.strokeLinecap, p = r.strokeLinejoin, v = r.theme, m = r.fill, f = r.spin, h = oc(s, {
          size: u,
          strokeWidth: c,
          strokeLinecap: d,
          strokeLinejoin: p,
          theme: v,
          fill: m
        }, i), S = [i.prefix + "-icon"];
        return S.push(i.prefix + "-icon-" + e), t && i.rtl && S.push(i.prefix + "-icon-rtl"), f && S.push(i.prefix + "-icon-spin"), B("span", {
          class: S.join(" ")
        }, [n(h)]);
      };
    }
  };
  return o;
}
const sc = gt("close-small", !1, function(e) {
  return B("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [B("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), rc = gt("copy", !0, function(e) {
  return B("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [B("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ic = gt("delete", !1, function(e) {
  return B("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [B("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), lc = gt("down", !1, function(e) {
  return B("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [B("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), uc = gt("folder-open", !0, function(e) {
  return B("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [B("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), cc = gt("pushpin", !1, function(e) {
  return B("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [B("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), dc = gt("setting-two", !1, function(e) {
  return B("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [B("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), js = gt("switch", !0, function(e) {
  return B("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [B("path", {
    d: "M42 19H5.99998",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M30 7L42 19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M6.79897 29H42.799",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M6.79895 29L18.799 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), fc = gt("translate", !0, function(e) {
  return B("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [B("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), pc = gt("up", !1, function(e) {
  return B("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [B("path", {
    d: "M13 30L25 18L37 30",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ws = gt("volume-up", !0, function(e) {
  return B("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [B("path", {
    d: "M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M32 24H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), B("path", {
    d: "M38 18V30",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), W_ = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/translate",
    name: "Translate",
    component: () => Promise.resolve().then(() => L1)
  }), e.registerSettingsTab({
    id: "translation",
    labelKey: "translation.title",
    icon: fc,
    component: Qa(() => Promise.resolve().then(() => q2))
  });
}, Ei = Symbol(), Ao = "el", mc = "is-", tn = (e, t, n, o, a) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), o && (r += `__${o}`), a && (r += `--${a}`), r;
}, Pi = Symbol("namespaceContextKey"), ns = (e) => {
  const t = e || (Ue() ? ye(Pi, M(Ao)) : M(Ao));
  return b(() => l(t) || Ao);
}, Ce = (e, t) => {
  const n = ns(t);
  return {
    namespace: n,
    b: (h = "") => tn(n.value, e, h, "", ""),
    e: (h) => h ? tn(n.value, e, "", h, "") : "",
    m: (h) => h ? tn(n.value, e, "", "", h) : "",
    be: (h, S) => h && S ? tn(n.value, e, h, S, "") : "",
    em: (h, S) => h && S ? tn(n.value, e, "", h, S) : "",
    bm: (h, S) => h && S ? tn(n.value, e, h, "", S) : "",
    bem: (h, S, g) => h && S && g ? tn(n.value, e, h, S, g) : "",
    is: (h, ...S) => {
      const g = S.length >= 1 ? S[0] : !0;
      return h && g ? `${mc}${h}` : "";
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
const ro = () => {
}, hc = Object.prototype.hasOwnProperty, Us = (e, t) => hc.call(e, t), je = Array.isArray, $e = (e) => typeof e == "function", Fe = (e) => typeof e == "string", qe = (e) => e !== null && typeof e == "object", vc = Object.prototype.toString, gc = (e) => vc.call(e), yc = (e) => gc(e) === "[object Object]";
var Oi = typeof global == "object" && global && global.Object === Object && global, bc = typeof self == "object" && self && self.Object === Object && self, Tt = Oi || bc || Function("return this")(), St = Tt.Symbol, Ii = Object.prototype, wc = Ii.hasOwnProperty, _c = Ii.toString, Hn = St ? St.toStringTag : void 0;
function Sc(e) {
  var t = wc.call(e, Hn), n = e[Hn];
  try {
    e[Hn] = void 0;
    var o = !0;
  } catch {
  }
  var a = _c.call(e);
  return o && (t ? e[Hn] = n : delete e[Hn]), a;
}
var kc = Object.prototype, Cc = kc.toString;
function Tc(e) {
  return Cc.call(e);
}
var Ec = "[object Null]", Pc = "[object Undefined]", Ks = St ? St.toStringTag : void 0;
function Nn(e) {
  return e == null ? e === void 0 ? Pc : Ec : Ks && Ks in Object(e) ? Sc(e) : Tc(e);
}
function En(e) {
  return e != null && typeof e == "object";
}
var Oc = "[object Symbol]";
function sa(e) {
  return typeof e == "symbol" || En(e) && Nn(e) == Oc;
}
function Ic(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = Array(o); ++n < o; )
    a[n] = t(e[n], n, e);
  return a;
}
var vt = Array.isArray, Gs = St ? St.prototype : void 0, Zs = Gs ? Gs.toString : void 0;
function $i(e) {
  if (typeof e == "string")
    return e;
  if (vt(e))
    return Ic(e, $i) + "";
  if (sa(e))
    return Zs ? Zs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var $c = /\s/;
function Lc(e) {
  for (var t = e.length; t-- && $c.test(e.charAt(t)); )
    ;
  return t;
}
var xc = /^\s+/;
function Rc(e) {
  return e && e.slice(0, Lc(e) + 1).replace(xc, "");
}
function Yt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var qs = NaN, Ac = /^[-+]0x[0-9a-f]+$/i, Mc = /^0b[01]+$/i, zc = /^0o[0-7]+$/i, Nc = parseInt;
function Ys(e) {
  if (typeof e == "number")
    return e;
  if (sa(e))
    return qs;
  if (Yt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Yt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Rc(e);
  var n = Mc.test(e);
  return n || zc.test(e) ? Nc(e.slice(2), n ? 2 : 8) : Ac.test(e) ? qs : +e;
}
function Li(e) {
  return e;
}
var Bc = "[object AsyncFunction]", Fc = "[object Function]", Vc = "[object GeneratorFunction]", Dc = "[object Proxy]";
function xi(e) {
  if (!Yt(e))
    return !1;
  var t = Nn(e);
  return t == Fc || t == Vc || t == Bc || t == Dc;
}
var wa = Tt["__core-js_shared__"], Js = function() {
  var e = /[^.]+$/.exec(wa && wa.keys && wa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Hc(e) {
  return !!Js && Js in e;
}
var jc = Function.prototype, Wc = jc.toString;
function ln(e) {
  if (e != null) {
    try {
      return Wc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Uc = /[\\^$.*+?()[\]{}|]/g, Kc = /^\[object .+?Constructor\]$/, Gc = Function.prototype, Zc = Object.prototype, qc = Gc.toString, Yc = Zc.hasOwnProperty, Jc = RegExp(
  "^" + qc.call(Yc).replace(Uc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xc(e) {
  if (!Yt(e) || Hc(e))
    return !1;
  var t = xi(e) ? Jc : Kc;
  return t.test(ln(e));
}
function Qc(e, t) {
  return e?.[t];
}
function un(e, t) {
  var n = Qc(e, t);
  return Xc(n) ? n : void 0;
}
var Aa = un(Tt, "WeakMap");
function ed(e, t, n) {
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
var td = 800, nd = 16, od = Date.now;
function ad(e) {
  var t = 0, n = 0;
  return function() {
    var o = od(), a = nd - (o - n);
    if (n = o, a > 0) {
      if (++t >= td)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function sd(e) {
  return function() {
    return e;
  };
}
var Ho = function() {
  try {
    var e = un(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), rd = Ho ? function(e, t) {
  return Ho(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: sd(t),
    writable: !0
  });
} : Li, id = ad(rd);
function ld(e, t, n, o) {
  e.length;
  for (var a = n + 1; a--; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var ud = 9007199254740991, cd = /^(?:0|[1-9]\d*)$/;
function os(e, t) {
  var n = typeof e;
  return t = t ?? ud, !!t && (n == "number" || n != "symbol" && cd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function dd(e, t, n) {
  t == "__proto__" && Ho ? Ho(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function as(e, t) {
  return e === t || e !== e && t !== t;
}
var fd = Object.prototype, pd = fd.hasOwnProperty;
function md(e, t, n) {
  var o = e[t];
  (!(pd.call(e, t) && as(o, n)) || n === void 0 && !(t in e)) && dd(e, t, n);
}
var Xs = Math.max;
function hd(e, t, n) {
  return t = Xs(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, a = -1, r = Xs(o.length - t, 0), s = Array(r); ++a < r; )
      s[a] = o[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = o[a];
    return i[t] = n(s), ed(e, this, i);
  };
}
var vd = 9007199254740991;
function ss(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= vd;
}
function gd(e) {
  return e != null && ss(e.length) && !xi(e);
}
var yd = Object.prototype;
function bd(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || yd;
  return e === n;
}
function wd(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var _d = "[object Arguments]";
function Qs(e) {
  return En(e) && Nn(e) == _d;
}
var Ri = Object.prototype, Sd = Ri.hasOwnProperty, kd = Ri.propertyIsEnumerable, rs = Qs(/* @__PURE__ */ function() {
  return arguments;
}()) ? Qs : function(e) {
  return En(e) && Sd.call(e, "callee") && !kd.call(e, "callee");
};
function Cd() {
  return !1;
}
var Ai = typeof exports == "object" && exports && !exports.nodeType && exports, er = Ai && typeof module == "object" && module && !module.nodeType && module, Td = er && er.exports === Ai, tr = Td ? Tt.Buffer : void 0, Ed = tr ? tr.isBuffer : void 0, Ma = Ed || Cd, Pd = "[object Arguments]", Od = "[object Array]", Id = "[object Boolean]", $d = "[object Date]", Ld = "[object Error]", xd = "[object Function]", Rd = "[object Map]", Ad = "[object Number]", Md = "[object Object]", zd = "[object RegExp]", Nd = "[object Set]", Bd = "[object String]", Fd = "[object WeakMap]", Vd = "[object ArrayBuffer]", Dd = "[object DataView]", Hd = "[object Float32Array]", jd = "[object Float64Array]", Wd = "[object Int8Array]", Ud = "[object Int16Array]", Kd = "[object Int32Array]", Gd = "[object Uint8Array]", Zd = "[object Uint8ClampedArray]", qd = "[object Uint16Array]", Yd = "[object Uint32Array]", ke = {};
ke[Hd] = ke[jd] = ke[Wd] = ke[Ud] = ke[Kd] = ke[Gd] = ke[Zd] = ke[qd] = ke[Yd] = !0;
ke[Pd] = ke[Od] = ke[Vd] = ke[Id] = ke[Dd] = ke[$d] = ke[Ld] = ke[xd] = ke[Rd] = ke[Ad] = ke[Md] = ke[zd] = ke[Nd] = ke[Bd] = ke[Fd] = !1;
function Jd(e) {
  return En(e) && ss(e.length) && !!ke[Nn(e)];
}
function Xd(e) {
  return function(t) {
    return e(t);
  };
}
var Mi = typeof exports == "object" && exports && !exports.nodeType && exports, Xn = Mi && typeof module == "object" && module && !module.nodeType && module, Qd = Xn && Xn.exports === Mi, _a = Qd && Oi.process, nr = function() {
  try {
    var e = Xn && Xn.require && Xn.require("util").types;
    return e || _a && _a.binding && _a.binding("util");
  } catch {
  }
}(), or = nr && nr.isTypedArray, zi = or ? Xd(or) : Jd, ef = Object.prototype, tf = ef.hasOwnProperty;
function nf(e, t) {
  var n = vt(e), o = !n && rs(e), a = !n && !o && Ma(e), r = !n && !o && !a && zi(e), s = n || o || a || r, i = s ? wd(e.length, String) : [], u = i.length;
  for (var c in e)
    tf.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    os(c, u))) && i.push(c);
  return i;
}
function of(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var af = of(Object.keys, Object), sf = Object.prototype, rf = sf.hasOwnProperty;
function lf(e) {
  if (!bd(e))
    return af(e);
  var t = [];
  for (var n in Object(e))
    rf.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ni(e) {
  return gd(e) ? nf(e) : lf(e);
}
var uf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, cf = /^\w*$/;
function is(e, t) {
  if (vt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || sa(e) ? !0 : cf.test(e) || !uf.test(e) || t != null && e in Object(t);
}
var io = un(Object, "create");
function df() {
  this.__data__ = io ? io(null) : {}, this.size = 0;
}
function ff(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var pf = "__lodash_hash_undefined__", mf = Object.prototype, hf = mf.hasOwnProperty;
function vf(e) {
  var t = this.__data__;
  if (io) {
    var n = t[e];
    return n === pf ? void 0 : n;
  }
  return hf.call(t, e) ? t[e] : void 0;
}
var gf = Object.prototype, yf = gf.hasOwnProperty;
function bf(e) {
  var t = this.__data__;
  return io ? t[e] !== void 0 : yf.call(t, e);
}
var wf = "__lodash_hash_undefined__";
function _f(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = io && t === void 0 ? wf : t, this;
}
function sn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
sn.prototype.clear = df;
sn.prototype.delete = ff;
sn.prototype.get = vf;
sn.prototype.has = bf;
sn.prototype.set = _f;
function Sf() {
  this.__data__ = [], this.size = 0;
}
function ra(e, t) {
  for (var n = e.length; n--; )
    if (as(e[n][0], t))
      return n;
  return -1;
}
var kf = Array.prototype, Cf = kf.splice;
function Tf(e) {
  var t = this.__data__, n = ra(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : Cf.call(t, n, 1), --this.size, !0;
}
function Ef(e) {
  var t = this.__data__, n = ra(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Pf(e) {
  return ra(this.__data__, e) > -1;
}
function Of(e, t) {
  var n = this.__data__, o = ra(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this;
}
function Nt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Nt.prototype.clear = Sf;
Nt.prototype.delete = Tf;
Nt.prototype.get = Ef;
Nt.prototype.has = Pf;
Nt.prototype.set = Of;
var lo = un(Tt, "Map");
function If() {
  this.size = 0, this.__data__ = {
    hash: new sn(),
    map: new (lo || Nt)(),
    string: new sn()
  };
}
function $f(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ia(e, t) {
  var n = e.__data__;
  return $f(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Lf(e) {
  var t = ia(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xf(e) {
  return ia(this, e).get(e);
}
function Rf(e) {
  return ia(this, e).has(e);
}
function Af(e, t) {
  var n = ia(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Bt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Bt.prototype.clear = If;
Bt.prototype.delete = Lf;
Bt.prototype.get = xf;
Bt.prototype.has = Rf;
Bt.prototype.set = Af;
var Mf = "Expected a function";
function ls(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Mf);
  var n = function() {
    var o = arguments, a = t ? t.apply(this, o) : o[0], r = n.cache;
    if (r.has(a))
      return r.get(a);
    var s = e.apply(this, o);
    return n.cache = r.set(a, s) || r, s;
  };
  return n.cache = new (ls.Cache || Bt)(), n;
}
ls.Cache = Bt;
var zf = 500;
function Nf(e) {
  var t = ls(e, function(o) {
    return n.size === zf && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Bf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ff = /\\(\\)?/g, Vf = Nf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Bf, function(n, o, a, r) {
    t.push(a ? r.replace(Ff, "$1") : o || n);
  }), t;
});
function Df(e) {
  return e == null ? "" : $i(e);
}
function la(e, t) {
  return vt(e) ? e : is(e, t) ? [e] : Vf(Df(e));
}
function ho(e) {
  if (typeof e == "string" || sa(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function us(e, t) {
  t = la(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[ho(t[n++])];
  return n && n == o ? e : void 0;
}
function Gt(e, t, n) {
  var o = e == null ? void 0 : us(e, t);
  return o === void 0 ? n : o;
}
function Bi(e, t) {
  for (var n = -1, o = t.length, a = e.length; ++n < o; )
    e[a + n] = t[n];
  return e;
}
var ar = St ? St.isConcatSpreadable : void 0;
function Hf(e) {
  return vt(e) || rs(e) || !!(ar && e && e[ar]);
}
function jf(e, t, n, o, a) {
  var r = -1, s = e.length;
  for (n || (n = Hf), a || (a = []); ++r < s; ) {
    var i = e[r];
    n(i) ? Bi(a, i) : a[a.length] = i;
  }
  return a;
}
function Wf(e) {
  var t = e == null ? 0 : e.length;
  return t ? jf(e) : [];
}
function Uf(e) {
  return id(hd(e, void 0, Wf), e + "");
}
function Kt() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return vt(e) ? e : [e];
}
function Kf() {
  this.__data__ = new Nt(), this.size = 0;
}
function Gf(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Zf(e) {
  return this.__data__.get(e);
}
function qf(e) {
  return this.__data__.has(e);
}
var Yf = 200;
function Jf(e, t) {
  var n = this.__data__;
  if (n instanceof Nt) {
    var o = n.__data__;
    if (!lo || o.length < Yf - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Bt(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Lt(e) {
  var t = this.__data__ = new Nt(e);
  this.size = t.size;
}
Lt.prototype.clear = Kf;
Lt.prototype.delete = Gf;
Lt.prototype.get = Zf;
Lt.prototype.has = qf;
Lt.prototype.set = Jf;
function Xf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = 0, r = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (r[a++] = s);
  }
  return r;
}
function Qf() {
  return [];
}
var ep = Object.prototype, tp = ep.propertyIsEnumerable, sr = Object.getOwnPropertySymbols, np = sr ? function(e) {
  return e == null ? [] : (e = Object(e), Xf(sr(e), function(t) {
    return tp.call(e, t);
  }));
} : Qf;
function op(e, t, n) {
  var o = t(e);
  return vt(e) ? o : Bi(o, n(e));
}
function rr(e) {
  return op(e, Ni, np);
}
var za = un(Tt, "DataView"), Na = un(Tt, "Promise"), Ba = un(Tt, "Set"), ir = "[object Map]", ap = "[object Object]", lr = "[object Promise]", ur = "[object Set]", cr = "[object WeakMap]", dr = "[object DataView]", sp = ln(za), rp = ln(lo), ip = ln(Na), lp = ln(Ba), up = ln(Aa), jt = Nn;
(za && jt(new za(new ArrayBuffer(1))) != dr || lo && jt(new lo()) != ir || Na && jt(Na.resolve()) != lr || Ba && jt(new Ba()) != ur || Aa && jt(new Aa()) != cr) && (jt = function(e) {
  var t = Nn(e), n = t == ap ? e.constructor : void 0, o = n ? ln(n) : "";
  if (o)
    switch (o) {
      case sp:
        return dr;
      case rp:
        return ir;
      case ip:
        return lr;
      case lp:
        return ur;
      case up:
        return cr;
    }
  return t;
});
var fr = Tt.Uint8Array, cp = "__lodash_hash_undefined__";
function dp(e) {
  return this.__data__.set(e, cp), this;
}
function fp(e) {
  return this.__data__.has(e);
}
function jo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Bt(); ++t < n; )
    this.add(e[t]);
}
jo.prototype.add = jo.prototype.push = dp;
jo.prototype.has = fp;
function pp(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function mp(e, t) {
  return e.has(t);
}
var hp = 1, vp = 2;
function Fi(e, t, n, o, a, r) {
  var s = n & hp, i = e.length, u = t.length;
  if (i != u && !(s && u > i))
    return !1;
  var c = r.get(e), d = r.get(t);
  if (c && d)
    return c == t && d == e;
  var p = -1, v = !0, m = n & vp ? new jo() : void 0;
  for (r.set(e, t), r.set(t, e); ++p < i; ) {
    var f = e[p], h = t[p];
    if (o)
      var S = s ? o(h, f, p, t, e, r) : o(f, h, p, e, t, r);
    if (S !== void 0) {
      if (S)
        continue;
      v = !1;
      break;
    }
    if (m) {
      if (!pp(t, function(g, I) {
        if (!mp(m, I) && (f === g || a(f, g, n, o, r)))
          return m.push(I);
      })) {
        v = !1;
        break;
      }
    } else if (!(f === h || a(f, h, n, o, r))) {
      v = !1;
      break;
    }
  }
  return r.delete(e), r.delete(t), v;
}
function gp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, a) {
    n[++t] = [a, o];
  }), n;
}
function yp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var bp = 1, wp = 2, _p = "[object Boolean]", Sp = "[object Date]", kp = "[object Error]", Cp = "[object Map]", Tp = "[object Number]", Ep = "[object RegExp]", Pp = "[object Set]", Op = "[object String]", Ip = "[object Symbol]", $p = "[object ArrayBuffer]", Lp = "[object DataView]", pr = St ? St.prototype : void 0, Sa = pr ? pr.valueOf : void 0;
function xp(e, t, n, o, a, r, s) {
  switch (n) {
    case Lp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case $p:
      return !(e.byteLength != t.byteLength || !r(new fr(e), new fr(t)));
    case _p:
    case Sp:
    case Tp:
      return as(+e, +t);
    case kp:
      return e.name == t.name && e.message == t.message;
    case Ep:
    case Op:
      return e == t + "";
    case Cp:
      var i = gp;
    case Pp:
      var u = o & bp;
      if (i || (i = yp), e.size != t.size && !u)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      o |= wp, s.set(e, t);
      var d = Fi(i(e), i(t), o, a, r, s);
      return s.delete(e), d;
    case Ip:
      if (Sa)
        return Sa.call(e) == Sa.call(t);
  }
  return !1;
}
var Rp = 1, Ap = Object.prototype, Mp = Ap.hasOwnProperty;
function zp(e, t, n, o, a, r) {
  var s = n & Rp, i = rr(e), u = i.length, c = rr(t), d = c.length;
  if (u != d && !s)
    return !1;
  for (var p = u; p--; ) {
    var v = i[p];
    if (!(s ? v in t : Mp.call(t, v)))
      return !1;
  }
  var m = r.get(e), f = r.get(t);
  if (m && f)
    return m == t && f == e;
  var h = !0;
  r.set(e, t), r.set(t, e);
  for (var S = s; ++p < u; ) {
    v = i[p];
    var g = e[v], I = t[v];
    if (o)
      var _ = s ? o(I, g, v, t, e, r) : o(g, I, v, e, t, r);
    if (!(_ === void 0 ? g === I || a(g, I, n, o, r) : _)) {
      h = !1;
      break;
    }
    S || (S = v == "constructor");
  }
  if (h && !S) {
    var E = e.constructor, T = t.constructor;
    E != T && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof T == "function" && T instanceof T) && (h = !1);
  }
  return r.delete(e), r.delete(t), h;
}
var Np = 1, mr = "[object Arguments]", hr = "[object Array]", To = "[object Object]", Bp = Object.prototype, vr = Bp.hasOwnProperty;
function Fp(e, t, n, o, a, r) {
  var s = vt(e), i = vt(t), u = s ? hr : jt(e), c = i ? hr : jt(t);
  u = u == mr ? To : u, c = c == mr ? To : c;
  var d = u == To, p = c == To, v = u == c;
  if (v && Ma(e)) {
    if (!Ma(t))
      return !1;
    s = !0, d = !1;
  }
  if (v && !d)
    return r || (r = new Lt()), s || zi(e) ? Fi(e, t, n, o, a, r) : xp(e, t, u, n, o, a, r);
  if (!(n & Np)) {
    var m = d && vr.call(e, "__wrapped__"), f = p && vr.call(t, "__wrapped__");
    if (m || f) {
      var h = m ? e.value() : e, S = f ? t.value() : t;
      return r || (r = new Lt()), a(h, S, n, o, r);
    }
  }
  return v ? (r || (r = new Lt()), zp(e, t, n, o, a, r)) : !1;
}
function ua(e, t, n, o, a) {
  return e === t ? !0 : e == null || t == null || !En(e) && !En(t) ? e !== e && t !== t : Fp(e, t, n, o, ua, a);
}
var Vp = 1, Dp = 2;
function Hp(e, t, n, o) {
  var a = n.length, r = a;
  if (e == null)
    return !r;
  for (e = Object(e); a--; ) {
    var s = n[a];
    if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++a < r; ) {
    s = n[a];
    var i = s[0], u = e[i], c = s[1];
    if (s[2]) {
      if (u === void 0 && !(i in e))
        return !1;
    } else {
      var d = new Lt(), p;
      if (!(p === void 0 ? ua(c, u, Vp | Dp, o, d) : p))
        return !1;
    }
  }
  return !0;
}
function Vi(e) {
  return e === e && !Yt(e);
}
function jp(e) {
  for (var t = Ni(e), n = t.length; n--; ) {
    var o = t[n], a = e[o];
    t[n] = [o, a, Vi(a)];
  }
  return t;
}
function Di(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Wp(e) {
  var t = jp(e);
  return t.length == 1 && t[0][2] ? Di(t[0][0], t[0][1]) : function(n) {
    return n === e || Hp(n, e, t);
  };
}
function Up(e, t) {
  return e != null && t in Object(e);
}
function Kp(e, t, n) {
  t = la(t, e);
  for (var o = -1, a = t.length, r = !1; ++o < a; ) {
    var s = ho(t[o]);
    if (!(r = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return r || ++o != a ? r : (a = e == null ? 0 : e.length, !!a && ss(a) && os(s, a) && (vt(e) || rs(e)));
}
function Hi(e, t) {
  return e != null && Kp(e, t, Up);
}
var Gp = 1, Zp = 2;
function qp(e, t) {
  return is(e) && Vi(t) ? Di(ho(e), t) : function(n) {
    var o = Gt(n, e);
    return o === void 0 && o === t ? Hi(n, e) : ua(t, o, Gp | Zp);
  };
}
function Yp(e) {
  return function(t) {
    return t?.[e];
  };
}
function Jp(e) {
  return function(t) {
    return us(t, e);
  };
}
function Xp(e) {
  return is(e) ? Yp(ho(e)) : Jp(e);
}
function Qp(e) {
  return typeof e == "function" ? e : e == null ? Li : typeof e == "object" ? vt(e) ? qp(e[0], e[1]) : Wp(e) : Xp(e);
}
var ka = function() {
  return Tt.Date.now();
}, em = "Expected a function", tm = Math.max, nm = Math.min;
function Fa(e, t, n) {
  var o, a, r, s, i, u, c = 0, d = !1, p = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(em);
  t = Ys(t) || 0, Yt(n) && (d = !!n.leading, p = "maxWait" in n, r = p ? tm(Ys(n.maxWait) || 0, t) : r, v = "trailing" in n ? !!n.trailing : v);
  function m(P) {
    var L = o, Z = a;
    return o = a = void 0, c = P, s = e.apply(Z, L), s;
  }
  function f(P) {
    return c = P, i = setTimeout(g, t), d ? m(P) : s;
  }
  function h(P) {
    var L = P - u, Z = P - c, U = t - L;
    return p ? nm(U, r - Z) : U;
  }
  function S(P) {
    var L = P - u, Z = P - c;
    return u === void 0 || L >= t || L < 0 || p && Z >= r;
  }
  function g() {
    var P = ka();
    if (S(P))
      return I(P);
    i = setTimeout(g, h(P));
  }
  function I(P) {
    return i = void 0, v && o ? m(P) : (o = a = void 0, s);
  }
  function _() {
    i !== void 0 && clearTimeout(i), c = 0, o = u = a = i = void 0;
  }
  function E() {
    return i === void 0 ? s : I(ka());
  }
  function T() {
    var P = ka(), L = S(P);
    if (o = arguments, a = this, u = P, L) {
      if (i === void 0)
        return f(u);
      if (p)
        return clearTimeout(i), i = setTimeout(g, t), m(u);
    }
    return i === void 0 && (i = setTimeout(g, t)), s;
  }
  return T.cancel = _, T.flush = E, T;
}
function om(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var a = o - 1;
  return ld(e, Qp(t), a);
}
function Wo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
    var a = e[t];
    o[a[0]] = a[1];
  }
  return o;
}
function Qn(e, t) {
  return ua(e, t);
}
function xt(e) {
  return e == null;
}
function am(e) {
  return e === void 0;
}
function sm(e, t, n, o) {
  if (!Yt(e))
    return e;
  t = la(t, e);
  for (var a = -1, r = t.length, s = r - 1, i = e; i != null && ++a < r; ) {
    var u = ho(t[a]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != s) {
      var d = i[u];
      c = void 0, c === void 0 && (c = Yt(d) ? d : os(t[a + 1]) ? [] : {});
    }
    md(i, u, c), i = i[u];
  }
  return e;
}
function rm(e, t, n) {
  for (var o = -1, a = t.length, r = {}; ++o < a; ) {
    var s = t[o], i = us(e, s);
    n(i, s) && sm(r, la(s, e), i);
  }
  return r;
}
function im(e, t) {
  return rm(e, t, function(n, o) {
    return Hi(e, o);
  });
}
var lm = Uf(function(e, t) {
  return e == null ? {} : im(e, t);
});
const ft = (e) => e === void 0, Uo = (e) => typeof e == "boolean", pe = (e) => typeof e == "number", mt = (e) => typeof Element > "u" ? !1 : e instanceof Element, um = (e) => Fe(e) ? !Number.isNaN(Number(e)) : !1;
var cm = Object.defineProperty, dm = Object.defineProperties, fm = Object.getOwnPropertyDescriptors, gr = Object.getOwnPropertySymbols, pm = Object.prototype.hasOwnProperty, mm = Object.prototype.propertyIsEnumerable, yr = (e, t, n) => t in e ? cm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, hm = (e, t) => {
  for (var n in t || (t = {}))
    pm.call(t, n) && yr(e, n, t[n]);
  if (gr)
    for (var n of gr(t))
      mm.call(t, n) && yr(e, n, t[n]);
  return e;
}, vm = (e, t) => dm(e, fm(t));
function gm(e, t) {
  var n;
  const o = Zt();
  return Si(() => {
    o.value = e();
  }, vm(hm({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), es(o);
}
var br;
const Re = typeof window < "u", ym = (e) => typeof e == "string", ji = () => {
}, Va = Re && ((br = window?.navigator) == null ? void 0 : br.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function cs(e) {
  return typeof e == "function" ? e() : l(e);
}
function bm(e) {
  return e;
}
function vo(e) {
  return Ru() ? (Au(e), !0) : !1;
}
function wm(e, t = !0) {
  Ue() ? Pe(e) : t ? e() : Se(e);
}
function Wi(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, a = M(!1);
  let r = null;
  function s() {
    r && (clearTimeout(r), r = null);
  }
  function i() {
    a.value = !1, s();
  }
  function u(...c) {
    s(), a.value = !0, r = setTimeout(() => {
      a.value = !1, r = null, e(...c);
    }, cs(t));
  }
  return o && (a.value = !0, Re && u()), vo(i), {
    isPending: es(a),
    start: u,
    stop: i
  };
}
function It(e) {
  var t;
  const n = cs(e);
  return (t = n?.$el) != null ? t : n;
}
const ca = Re ? window : void 0;
function We(...e) {
  let t, n, o, a;
  if (ym(e[0]) || Array.isArray(e[0]) ? ([n, o, a] = e, t = ca) : [t, n, o, a] = e, !t)
    return ji;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], s = () => {
    r.forEach((d) => d()), r.length = 0;
  }, i = (d, p, v, m) => (d.addEventListener(p, v, m), () => d.removeEventListener(p, v, m)), u = ie(() => [It(t), cs(a)], ([d, p]) => {
    s(), d && r.push(...n.flatMap((v) => o.map((m) => i(d, v, m, p))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), s();
  };
  return vo(c), c;
}
let wr = !1;
function _m(e, t, n = {}) {
  const { window: o = ca, ignore: a = [], capture: r = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  Va && !wr && (wr = !0, Array.from(o.document.body.children).forEach((v) => v.addEventListener("click", ji)));
  let i = !0;
  const u = (v) => a.some((m) => {
    if (typeof m == "string")
      return Array.from(o.document.querySelectorAll(m)).some((f) => f === v.target || v.composedPath().includes(f));
    {
      const f = It(m);
      return f && (v.target === f || v.composedPath().includes(f));
    }
  }), d = [
    We(o, "click", (v) => {
      const m = It(e);
      if (!(!m || m === v.target || v.composedPath().includes(m))) {
        if (v.detail === 0 && (i = !u(v)), !i) {
          i = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: r }),
    We(o, "pointerdown", (v) => {
      const m = It(e);
      m && (i = !v.composedPath().includes(m) && !u(v));
    }, { passive: !0 }),
    s && We(o, "blur", (v) => {
      var m;
      const f = It(e);
      ((m = o.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !f?.contains(o.document.activeElement) && t(v);
    })
  ].filter(Boolean);
  return () => d.forEach((v) => v());
}
function Ui(e, t = !1) {
  const n = M(), o = () => n.value = !!e();
  return o(), wm(o, t), n;
}
const _r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Sr = "__vueuse_ssr_handlers__";
_r[Sr] = _r[Sr] || {};
var kr = Object.getOwnPropertySymbols, Sm = Object.prototype.hasOwnProperty, km = Object.prototype.propertyIsEnumerable, Cm = (e, t) => {
  var n = {};
  for (var o in e)
    Sm.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && kr)
    for (var o of kr(e))
      t.indexOf(o) < 0 && km.call(e, o) && (n[o] = e[o]);
  return n;
};
function bt(e, t, n = {}) {
  const o = n, { window: a = ca } = o, r = Cm(o, ["window"]);
  let s;
  const i = Ui(() => a && "ResizeObserver" in a), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = ie(() => It(e), (p) => {
    u(), i.value && a && p && (s = new ResizeObserver(t), s.observe(p, r));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), c();
  };
  return vo(d), {
    isSupported: i,
    stop: d
  };
}
var Cr = Object.getOwnPropertySymbols, Tm = Object.prototype.hasOwnProperty, Em = Object.prototype.propertyIsEnumerable, Pm = (e, t) => {
  var n = {};
  for (var o in e)
    Tm.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Cr)
    for (var o of Cr(e))
      t.indexOf(o) < 0 && Em.call(e, o) && (n[o] = e[o]);
  return n;
};
function Om(e, t, n = {}) {
  const o = n, { window: a = ca } = o, r = Pm(o, ["window"]);
  let s;
  const i = Ui(() => a && "MutationObserver" in a), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = ie(() => It(e), (p) => {
    u(), i.value && a && p && (s = new MutationObserver(t), s.observe(p, r));
  }, { immediate: !0 }), d = () => {
    u(), c();
  };
  return vo(d), {
    isSupported: i,
    stop: d
  };
}
var Tr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Tr || (Tr = {}));
var Im = Object.defineProperty, Er = Object.getOwnPropertySymbols, $m = Object.prototype.hasOwnProperty, Lm = Object.prototype.propertyIsEnumerable, Pr = (e, t, n) => t in e ? Im(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xm = (e, t) => {
  for (var n in t || (t = {}))
    $m.call(t, n) && Pr(e, n, t[n]);
  if (Er)
    for (var n of Er(t))
      Lm.call(t, n) && Pr(e, n, t[n]);
  return e;
};
const Rm = {
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
xm({
  linear: bm
}, Rm);
class Am extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function ds(e, t) {
  throw new Am(`[${e}] ${t}`);
}
const Or = {
  current: 0
}, Ir = M(0), Ki = 2e3, $r = Symbol("elZIndexContextKey"), Gi = Symbol("zIndexContextKey"), Zi = (e) => {
  const t = Ue() ? ye($r, Or) : Or, n = e || (Ue() ? ye(Gi, void 0) : void 0), o = b(() => {
    const s = l(n);
    return pe(s) ? s : Ki;
  }), a = b(() => o.value + Ir.value), r = () => (t.current++, Ir.value = t.current, a.value);
  return !Re && ye($r), {
    initialZIndex: o,
    currentZIndex: a,
    nextZIndex: r
  };
};
var Mm = {
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
const zm = (e) => (t, n) => Nm(t, n, l(e)), Nm = (e, t, n) => Gt(n, e, e).replace(/\{(\w+)\}/g, (o, a) => {
  var r;
  return `${(r = t?.[a]) != null ? r : `{${a}}`}`;
}), Bm = (e) => {
  const t = b(() => l(e).name), n = Jn(e) ? e : M(e);
  return {
    lang: t,
    locale: n,
    t: zm(e)
  };
}, qi = Symbol("localeContextKey"), da = (e) => {
  const t = e || ye(qi, M());
  return Bm(b(() => t.value || Mm));
}, Yi = "__epPropKey", te = (e) => e, Fm = (e) => qe(e) && !!e[Yi], fa = (e, t) => {
  if (!qe(e) || Fm(e))
    return e;
  const { values: n, required: o, default: a, type: r, validator: s } = e, u = {
    type: r,
    required: !!o,
    validator: n || s ? (c) => {
      let d = !1, p = [];
      if (n && (p = Array.from(n), Us(e, "default") && p.push(a), d || (d = p.includes(c))), s && (d || (d = s(c))), !d && p.length > 0) {
        const v = [...new Set(p)].map((m) => JSON.stringify(m)).join(", ");
        Mu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [Yi]: !0
  };
  return Us(e, "default") && (u.default = a), u;
}, he = (e) => Wo(Object.entries(e).map(([t, n]) => [
  t,
  fa(n, t)
])), Ji = ["", "default", "small", "large"], Pn = fa({
  type: String,
  values: Ji,
  required: !1
}), Xi = Symbol("size"), Vm = () => {
  const e = ye(Xi, {});
  return b(() => l(e.size) || "");
}, Qi = Symbol("emptyValuesContextKey"), Dm = ["", void 0, null], Hm = void 0, el = he({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => $e(e) ? !e() : !e
  }
}), jm = (e, t) => {
  const n = Ue() ? ye(Qi, M({})) : M({}), o = b(() => e.emptyValues || n.value.emptyValues || Dm), a = b(() => $e(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : $e(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Hm), r = (s) => o.value.includes(s);
  return o.value.includes(a.value), {
    emptyValues: o,
    valueOnClear: a,
    isEmptyValue: r
  };
}, Lr = (e) => Object.keys(e), Ko = M();
function tl(e, t = void 0) {
  return Ue() ? ye(Ei, Ko) : Ko;
}
function nl(e, t) {
  const n = tl(), o = Ce(e, b(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Ao;
  })), a = da(b(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), r = Zi(b(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Ki;
  })), s = b(() => {
    var i;
    return l(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return ol(b(() => l(n) || {})), {
    ns: o,
    locale: a,
    zIndex: r,
    size: s
  };
}
const ol = (e, t, n = !1) => {
  var o;
  const a = !!Ue(), r = a ? tl() : void 0, s = (o = void 0) != null ? o : a ? ht : void 0;
  if (!s)
    return;
  const i = b(() => {
    const u = l(e);
    return r?.value ? Wm(r.value, u) : u;
  });
  return s(Ei, i), s(qi, b(() => i.value.locale)), s(Pi, b(() => i.value.namespace)), s(Gi, b(() => i.value.zIndex)), s(Xi, {
    size: b(() => i.value.size || "")
  }), s(Qi, b(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Ko.value) && (Ko.value = i.value), i;
}, Wm = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Lr(e), ...Lr(t)])], o = {};
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
function uo(e, t = "px") {
  if (!e)
    return "";
  if (pe(e) || um(e))
    return `${e}${t}`;
  if (Fe(e))
    return e;
}
function Um(e, t) {
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
  const a = t.offsetTop + n.reduce((u, c) => u + c.offsetTop, 0), r = a + t.offsetHeight, s = e.scrollTop, i = s + e.clientHeight;
  a < s ? e.scrollTop = a : r > i && (e.scrollTop = r - e.clientHeight);
}
const nt = (e, t) => {
  if (e.install = (n) => {
    for (const o of [e, ...Object.values(t ?? {})])
      n.component(o.name, o);
  }, t)
    for (const [n, o] of Object.entries(t))
      e[n] = o;
  return e;
}, al = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), fs = (e) => (e.install = ro, e), Km = he({
  size: {
    type: te([Number, String])
  },
  color: {
    type: String
  }
}), Gm = G({
  name: "ElIcon",
  inheritAttrs: !1
}), Zm = /* @__PURE__ */ G({
  ...Gm,
  props: Km,
  setup(e) {
    const t = e, n = Ce("icon"), o = b(() => {
      const { size: a, color: r } = t;
      return !a && !r ? {} : {
        fontSize: ft(a) ? void 0 : uo(a),
        "--color": r
      };
    });
    return (a, r) => (w(), R("i", qt({
      class: l(n).b(),
      style: l(o)
    }, a.$attrs), [
      re(a.$slots, "default")
    ], 16));
  }
});
var qm = /* @__PURE__ */ _e(Zm, [["__file", "icon.vue"]]);
const He = nt(qm);
/*! Element Plus Icons Vue v2.3.1 */
var Ym = /* @__PURE__ */ G({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (w(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), sl = Ym, Jm = /* @__PURE__ */ G({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (w(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Xm = Jm, Qm = /* @__PURE__ */ G({
  name: "Check",
  __name: "check",
  setup(e) {
    return (t, n) => (w(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), eh = Qm, th = /* @__PURE__ */ G({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (w(), R("svg", {
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
}), rl = th, nh = /* @__PURE__ */ G({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (w(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), oh = nh, ah = /* @__PURE__ */ G({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (w(), R("svg", {
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
}), pa = ah, sh = /* @__PURE__ */ G({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (w(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), co = sh, rh = /* @__PURE__ */ G({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (w(), R("svg", {
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
}), ih = rh, lh = /* @__PURE__ */ G({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (w(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), uh = lh, ch = /* @__PURE__ */ G({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (w(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), dh = ch, fh = /* @__PURE__ */ G({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (w(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), ph = fh, mh = /* @__PURE__ */ G({
  name: "PictureFilled",
  __name: "picture-filled",
  setup(e) {
    return (t, n) => (w(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
      })
    ]));
  }
}), hh = mh, vh = /* @__PURE__ */ G({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (w(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), gh = vh, yh = /* @__PURE__ */ G({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (w(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), bh = yh, wh = /* @__PURE__ */ G({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (w(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), _h = wh, Sh = /* @__PURE__ */ G({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (w(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), il = Sh;
const On = te([
  String,
  Object,
  Function
]), kh = {
  Close: co
}, Ch = {
  Close: co
}, Go = {
  success: bh,
  warning: il,
  error: oh,
  info: uh
}, ll = {
  validating: dh,
  success: rl,
  error: pa
}, ul = () => Re && /firefox/i.test(window.navigator.userAgent);
let Ze;
const Th = {
  height: "0",
  visibility: "hidden",
  overflow: ul() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Eh = [
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
function Ph(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), a = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Eh.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: o, borderSize: a, boxSizing: n };
}
function xr(e, t = 1, n) {
  var o;
  Ze || (Ze = document.createElement("textarea"), document.body.appendChild(Ze));
  const { paddingSize: a, borderSize: r, boxSizing: s, contextStyle: i } = Ph(e);
  i.forEach(([p, v]) => Ze?.style.setProperty(p, v)), Object.entries(Th).forEach(([p, v]) => Ze?.style.setProperty(p, v, "important")), Ze.value = e.value || e.placeholder || "";
  let u = Ze.scrollHeight;
  const c = {};
  s === "border-box" ? u = u + r : s === "content-box" && (u = u - a), Ze.value = "";
  const d = Ze.scrollHeight - a;
  if (pe(t)) {
    let p = d * t;
    s === "border-box" && (p = p + a + r), u = Math.max(p, u), c.minHeight = `${p}px`;
  }
  if (pe(n)) {
    let p = d * n;
    s === "border-box" && (p = p + a + r), u = Math.min(p, u);
  }
  return c.height = `${u}px`, (o = Ze.parentNode) == null || o.removeChild(Ze), Ze = void 0, c;
}
const cl = (e) => e, Oh = he({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), cn = (e) => lm(Oh, e), Ih = he({
  id: {
    type: String,
    default: void 0
  },
  size: Pn,
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
    type: On
  },
  prefixIcon: {
    type: On
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
    default: () => cl({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...cn(["ariaLabel"])
}), $h = {
  [xe]: (e) => Fe(e),
  input: (e) => Fe(e),
  change: (e) => Fe(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Lh = ["class", "style"], xh = /^on[A-Z]/, Rh = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = b(() => (n?.value || []).concat(Lh)), a = Ue();
  return a ? b(() => {
    var r;
    return Wo(Object.entries((r = a.proxy) == null ? void 0 : r.$attrs).filter(([s]) => !o.value.includes(s) && !(t && xh.test(s))));
  }) : b(() => ({}));
}, ps = Symbol("formContextKey"), Zo = Symbol("formItemContextKey"), Rr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Ah = Symbol("elIdInjection"), dl = () => Ue() ? ye(Ah, Rr) : Rr, ma = (e) => {
  const t = dl(), n = ns();
  return gm(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, ha = () => {
  const e = ye(ps, void 0), t = ye(Zo, void 0);
  return {
    form: e,
    formItem: t
  };
}, ms = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = M(!1)), o || (o = M(!1));
  const a = M();
  let r;
  const s = b(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return Pe(() => {
    r = ie([wt(e, "id"), n], ([i, u]) => {
      const c = i ?? (u ? void 0 : ma().value);
      c !== a.value && (t?.removeInputId && (a.value && t.removeInputId(a.value), !o?.value && !u && c && t.addInputId(c)), a.value = c);
    }, { immediate: !0 });
  }), ki(() => {
    r && r(), t?.removeInputId && a.value && t.removeInputId(a.value);
  }), {
    isLabeledByFormItem: s,
    inputId: a
  };
}, fl = (e) => {
  const t = Ue();
  return b(() => {
    var n, o;
    return (o = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : o[e];
  });
}, go = (e, t = {}) => {
  const n = M(void 0), o = t.prop ? n : fl("size"), a = t.global ? n : Vm(), r = t.form ? { size: void 0 } : ye(ps, void 0), s = t.formItem ? { size: void 0 } : ye(Zo, void 0);
  return b(() => o.value || l(e) || s?.size || r?.size || a.value || "");
}, pl = (e) => {
  const t = fl("disabled"), n = ye(ps, void 0);
  return b(() => t.value || l(e) || n?.disabled || !1);
};
function ml(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: a
} = {}) {
  const r = Ue(), { emit: s } = r, i = Zt(), u = M(!1), c = (v) => {
    $e(t) && t(v) || u.value || (u.value = !0, s("focus", v), n?.());
  }, d = (v) => {
    var m;
    $e(o) && o(v) || v.relatedTarget && ((m = i.value) != null && m.contains(v.relatedTarget)) || (u.value = !1, s("blur", v), a?.());
  }, p = () => {
    var v, m;
    (v = i.value) != null && v.contains(document.activeElement) && i.value !== document.activeElement || (m = e.value) == null || m.focus();
  };
  return ie(i, (v) => {
    v && v.setAttribute("tabindex", "-1");
  }), We(i, "focus", c, !0), We(i, "blur", d, !0), We(i, "click", p, !0), {
    isFocused: u,
    wrapperRef: i,
    handleFocus: c,
    handleBlur: d
  };
}
const Mh = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function hl({
  afterComposition: e,
  emit: t
}) {
  const n = M(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, a = (i) => {
    var u;
    t?.("compositionupdate", i);
    const c = (u = i.target) == null ? void 0 : u.value, d = c[c.length - 1] || "";
    n.value = !Mh(d);
  }, r = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Se(() => e(i)));
  };
  return {
    isComposing: n,
    handleComposition: (i) => {
      i.type === "compositionend" ? r(i) : a(i);
    },
    handleCompositionStart: o,
    handleCompositionUpdate: a,
    handleCompositionEnd: r
  };
}
function zh(e) {
  let t;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: a, selectionEnd: r, value: s } = e.value;
    if (a == null || r == null)
      return;
    const i = s.slice(0, Math.max(0, a)), u = s.slice(Math.max(0, r));
    t = {
      selectionStart: a,
      selectionEnd: r,
      value: s,
      beforeTxt: i,
      afterTxt: u
    };
  }
  function o() {
    if (e.value == null || t == null)
      return;
    const { value: a } = e.value, { beforeTxt: r, afterTxt: s, selectionStart: i } = t;
    if (r == null || s == null || i == null)
      return;
    let u = a.length;
    if (a.endsWith(s))
      u = a.length - s.length;
    else if (a.startsWith(r))
      u = r.length;
    else {
      const c = r[i - 1], d = a.indexOf(c, i - 1);
      d !== -1 && (u = d + 1);
    }
    e.value.setSelectionRange(u, u);
  }
  return [n, o];
}
const Nh = "ElInput", Bh = G({
  name: Nh,
  inheritAttrs: !1
}), Fh = /* @__PURE__ */ G({
  ...Bh,
  props: Ih,
  emits: $h,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = zu(), r = Rh(), s = Nu(), i = b(() => [
      o.type === "textarea" ? h.b() : f.b(),
      f.m(v.value),
      f.is("disabled", m.value),
      f.is("exceed", be.value),
      {
        [f.b("group")]: s.prepend || s.append,
        [f.m("prefix")]: s.prefix || o.prefixIcon,
        [f.m("suffix")]: s.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [f.bm("suffix", "password-clear")]: ee.value && X.value,
        [f.b("hidden")]: o.type === "hidden"
      },
      a.class
    ]), u = b(() => [
      f.e("wrapper"),
      f.is("focus", Z.value)
    ]), { form: c, formItem: d } = ha(), { inputId: p } = ms(o, {
      formItemContext: d
    }), v = go(), m = pl(), f = Ce("input"), h = Ce("textarea"), S = Zt(), g = Zt(), I = M(!1), _ = M(!1), E = M(), T = Zt(o.inputStyle), P = b(() => S.value || g.value), { wrapperRef: L, isFocused: Z, handleFocus: U, handleBlur: Q } = ml(P, {
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
    }), x = b(() => d?.validateState || ""), j = b(() => x.value && ll[x.value]), se = b(() => _.value ? _h : ih), O = b(() => [
      a.style
    ]), z = b(() => [
      o.inputStyle,
      T.value,
      { resize: o.resize }
    ]), A = b(() => xt(o.modelValue) ? "" : String(o.modelValue)), ee = b(() => o.clearable && !m.value && !o.readonly && !!A.value && (Z.value || I.value)), X = b(() => o.showPassword && !m.value && !!A.value && (!!A.value || Z.value)), le = b(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !m.value && !o.readonly && !o.showPassword), ve = b(() => A.value.length), be = b(() => !!le.value && ve.value > Number(o.maxlength)), J = b(() => !!s.suffix || !!o.suffixIcon || ee.value || o.showPassword || le.value || !!x.value && k.value), [de, ge] = zh(S);
    bt(g, (D) => {
      if (me(), !le.value || o.resize !== "both")
        return;
      const fe = D[0], { width: ot } = fe.contentRect;
      E.value = {
        right: `calc(100% - ${ot + 15 + 6}px)`
      };
    });
    const Ee = () => {
      const { type: D, autosize: fe } = o;
      if (!(!Re || D !== "textarea" || !g.value))
        if (fe) {
          const ot = qe(fe) ? fe.minRows : void 0, Ft = qe(fe) ? fe.maxRows : void 0, Vt = xr(g.value, ot, Ft);
          T.value = {
            overflowY: "hidden",
            ...Vt
          }, Se(() => {
            g.value.offsetHeight, T.value = Vt;
          });
        } else
          T.value = {
            minHeight: xr(g.value).minHeight
          };
    }, me = ((D) => {
      let fe = !1;
      return () => {
        var ot;
        if (fe || !o.autosize)
          return;
        ((ot = g.value) == null ? void 0 : ot.offsetParent) === null || (D(), fe = !0);
      };
    })(Ee), Be = () => {
      const D = P.value, fe = o.formatter ? o.formatter(A.value) : A.value;
      !D || D.value === fe || (D.value = fe);
    }, V = async (D) => {
      de();
      let { value: fe } = D.target;
      if (o.formatter && o.parser && (fe = o.parser(fe)), !ne.value) {
        if (fe === A.value) {
          Be();
          return;
        }
        n(xe, fe), n(Rt, fe), await Se(), Be(), ge();
      }
    }, oe = (D) => {
      let { value: fe } = D.target;
      o.formatter && o.parser && (fe = o.parser(fe)), n(Jt, fe);
    }, {
      isComposing: ne,
      handleCompositionStart: Le,
      handleCompositionUpdate: De,
      handleCompositionEnd: Ae
    } = hl({ emit: n, afterComposition: V }), Te = () => {
      de(), _.value = !_.value, setTimeout(ge);
    }, ce = () => {
      var D;
      return (D = P.value) == null ? void 0 : D.focus();
    }, Ke = () => {
      var D;
      return (D = P.value) == null ? void 0 : D.blur();
    }, dn = (D) => {
      I.value = !1, n("mouseleave", D);
    }, Ge = (D) => {
      I.value = !0, n("mouseenter", D);
    }, yt = (D) => {
      n("keydown", D);
    }, fn = () => {
      var D;
      (D = P.value) == null || D.select();
    }, Qt = () => {
      n(xe, ""), n(Jt, ""), n("clear"), n(Rt, "");
    };
    return ie(() => o.modelValue, () => {
      var D;
      Se(() => Ee()), o.validateEvent && ((D = d?.validate) == null || D.call(d, "change").catch((fe) => void 0));
    }), ie(A, () => Be()), ie(() => o.type, async () => {
      await Se(), Be(), Ee();
    }), Pe(() => {
      !o.formatter && o.parser, Be(), Se(Ee);
    }), t({
      input: S,
      textarea: g,
      ref: P,
      textareaStyle: z,
      autosize: wt(o, "autosize"),
      isComposing: ne,
      focus: ce,
      blur: Ke,
      select: fn,
      clear: Qt,
      resizeTextarea: Ee
    }), (D, fe) => (w(), R("div", {
      class: N([
        l(i),
        {
          [l(f).bm("group", "append")]: D.$slots.append,
          [l(f).bm("group", "prepend")]: D.$slots.prepend
        }
      ]),
      style: we(l(O)),
      onMouseenter: Ge,
      onMouseleave: dn
    }, [
      H(" input "),
      D.type !== "textarea" ? (w(), R(Ie, { key: 0 }, [
        H(" prepend slot "),
        D.$slots.prepend ? (w(), R("div", {
          key: 0,
          class: N(l(f).be("group", "prepend"))
        }, [
          re(D.$slots, "prepend")
        ], 2)) : H("v-if", !0),
        y("div", {
          ref_key: "wrapperRef",
          ref: L,
          class: N(l(u))
        }, [
          H(" prefix slot "),
          D.$slots.prefix || D.prefixIcon ? (w(), R("span", {
            key: 0,
            class: N(l(f).e("prefix"))
          }, [
            y("span", {
              class: N(l(f).e("prefix-inner"))
            }, [
              re(D.$slots, "prefix"),
              D.prefixIcon ? (w(), Y(l(He), {
                key: 0,
                class: N(l(f).e("icon"))
              }, {
                default: q(() => [
                  (w(), Y(at(D.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 2)) : H("v-if", !0),
          y("input", qt({
            id: l(p),
            ref_key: "input",
            ref: S,
            class: l(f).e("inner")
          }, l(r), {
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
            onCompositionstart: l(Le),
            onCompositionupdate: l(De),
            onCompositionend: l(Ae),
            onInput: V,
            onChange: oe,
            onKeydown: yt
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          H(" suffix slot "),
          l(J) ? (w(), R("span", {
            key: 1,
            class: N(l(f).e("suffix"))
          }, [
            y("span", {
              class: N(l(f).e("suffix-inner"))
            }, [
              !l(ee) || !l(X) || !l(le) ? (w(), R(Ie, { key: 0 }, [
                re(D.$slots, "suffix"),
                D.suffixIcon ? (w(), Y(l(He), {
                  key: 0,
                  class: N(l(f).e("icon"))
                }, {
                  default: q(() => [
                    (w(), Y(at(D.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : H("v-if", !0)
              ], 64)) : H("v-if", !0),
              l(ee) ? (w(), Y(l(He), {
                key: 1,
                class: N([l(f).e("icon"), l(f).e("clear")]),
                onMousedown: Oe(l(ro), ["prevent"]),
                onClick: Qt
              }, {
                default: q(() => [
                  B(l(pa))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : H("v-if", !0),
              l(X) ? (w(), Y(l(He), {
                key: 2,
                class: N([l(f).e("icon"), l(f).e("password")]),
                onClick: Te
              }, {
                default: q(() => [
                  (w(), Y(at(l(se))))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0),
              l(le) ? (w(), R("span", {
                key: 3,
                class: N(l(f).e("count"))
              }, [
                y("span", {
                  class: N(l(f).e("count-inner"))
                }, K(l(ve)) + " / " + K(D.maxlength), 3)
              ], 2)) : H("v-if", !0),
              l(x) && l(j) && l(k) ? (w(), Y(l(He), {
                key: 4,
                class: N([
                  l(f).e("icon"),
                  l(f).e("validateIcon"),
                  l(f).is("loading", l(x) === "validating")
                ])
              }, {
                default: q(() => [
                  (w(), Y(at(l(j))))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 2)) : H("v-if", !0)
        ], 2),
        H(" append slot "),
        D.$slots.append ? (w(), R("div", {
          key: 1,
          class: N(l(f).be("group", "append"))
        }, [
          re(D.$slots, "append")
        ], 2)) : H("v-if", !0)
      ], 64)) : (w(), R(Ie, { key: 1 }, [
        H(" textarea "),
        y("textarea", qt({
          id: l(p),
          ref_key: "textarea",
          ref: g,
          class: [l(h).e("inner"), l(f).is("focus", l(Z))]
        }, l(r), {
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
          onCompositionstart: l(Le),
          onCompositionupdate: l(De),
          onCompositionend: l(Ae),
          onInput: V,
          onFocus: l(U),
          onBlur: l(Q),
          onChange: oe,
          onKeydown: yt
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        l(le) ? (w(), R("span", {
          key: 0,
          style: we(E.value),
          class: N(l(f).e("count"))
        }, K(l(ve)) + " / " + K(D.maxlength), 7)) : H("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Vh = /* @__PURE__ */ _e(Fh, [["__file", "input.vue"]]);
const hs = nt(Vh), mn = 4, Dh = {
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
}, Hh = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), vs = Symbol("scrollbarContextKey"), jh = he({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Wh = "Thumb", Uh = /* @__PURE__ */ G({
  __name: "thumb",
  props: jh,
  setup(e) {
    const t = e, n = ye(vs), o = Ce("scrollbar");
    n || ds(Wh, "can not inject scrollbar context");
    const a = M(), r = M(), s = M({}), i = M(!1);
    let u = !1, c = !1, d = Re ? document.onselectstart : null;
    const p = b(() => Dh[t.vertical ? "vertical" : "horizontal"]), v = b(() => Hh({
      size: t.size,
      move: t.move,
      bar: p.value
    })), m = b(() => a.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / r.value[p.value.offset]), f = (P) => {
      var L;
      if (P.stopPropagation(), P.ctrlKey || [1, 2].includes(P.button))
        return;
      (L = window.getSelection()) == null || L.removeAllRanges(), S(P);
      const Z = P.currentTarget;
      Z && (s.value[p.value.axis] = Z[p.value.offset] - (P[p.value.client] - Z.getBoundingClientRect()[p.value.direction]));
    }, h = (P) => {
      if (!r.value || !a.value || !n.wrapElement)
        return;
      const L = Math.abs(P.target.getBoundingClientRect()[p.value.direction] - P[p.value.client]), Z = r.value[p.value.offset] / 2, U = (L - Z) * 100 * m.value / a.value[p.value.offset];
      n.wrapElement[p.value.scroll] = U * n.wrapElement[p.value.scrollSize] / 100;
    }, S = (P) => {
      P.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", I), d = document.onselectstart, document.onselectstart = () => !1;
    }, g = (P) => {
      if (!a.value || !r.value || u === !1)
        return;
      const L = s.value[p.value.axis];
      if (!L)
        return;
      const Z = (a.value.getBoundingClientRect()[p.value.direction] - P[p.value.client]) * -1, U = r.value[p.value.offset] - L, Q = (Z - U) * 100 * m.value / a.value[p.value.offset];
      n.wrapElement[p.value.scroll] = Q * n.wrapElement[p.value.scrollSize] / 100;
    }, I = () => {
      u = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", I), T(), c && (i.value = !1);
    }, _ = () => {
      c = !1, i.value = !!t.size;
    }, E = () => {
      c = !0, i.value = u;
    };
    Ct(() => {
      T(), document.removeEventListener("mouseup", I);
    });
    const T = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return We(wt(n, "scrollbarElement"), "mousemove", _), We(wt(n, "scrollbarElement"), "mouseleave", E), (P, L) => (w(), Y(zn, {
      name: l(o).b("fade"),
      persisted: ""
    }, {
      default: q(() => [
        Ye(y("div", {
          ref_key: "instance",
          ref: a,
          class: N([l(o).e("bar"), l(o).is(l(p).key)]),
          onMousedown: h
        }, [
          y("div", {
            ref_key: "thumb",
            ref: r,
            class: N(l(o).e("thumb")),
            style: we(l(v)),
            onMousedown: f
          }, null, 38)
        ], 34), [
          [At, P.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Ar = /* @__PURE__ */ _e(Uh, [["__file", "thumb.vue"]]);
const Kh = he({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Gh = /* @__PURE__ */ G({
  __name: "bar",
  props: Kh,
  setup(e, { expose: t }) {
    const n = e, o = ye(vs), a = M(0), r = M(0), s = M(""), i = M(""), u = M(1), c = M(1);
    return t({
      handleScroll: (v) => {
        if (v) {
          const m = v.offsetHeight - mn, f = v.offsetWidth - mn;
          r.value = v.scrollTop * 100 / m * u.value, a.value = v.scrollLeft * 100 / f * c.value;
        }
      },
      update: () => {
        const v = o?.wrapElement;
        if (!v)
          return;
        const m = v.offsetHeight - mn, f = v.offsetWidth - mn, h = m ** 2 / v.scrollHeight, S = f ** 2 / v.scrollWidth, g = Math.max(h, n.minSize), I = Math.max(S, n.minSize);
        u.value = h / (m - h) / (g / (m - g)), c.value = S / (f - S) / (I / (f - I)), i.value = g + mn < m ? `${g}px` : "", s.value = I + mn < f ? `${I}px` : "";
      }
    }), (v, m) => (w(), R(Ie, null, [
      B(Ar, {
        move: a.value,
        ratio: c.value,
        size: s.value,
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      B(Ar, {
        move: r.value,
        ratio: u.value,
        size: i.value,
        vertical: "",
        always: v.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Zh = /* @__PURE__ */ _e(Gh, [["__file", "bar.vue"]]);
const qh = he({
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
  ...cn(["ariaLabel", "ariaOrientation"])
}), Yh = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(pe)
}, Jh = "ElScrollbar", Xh = G({
  name: Jh
}), Qh = /* @__PURE__ */ G({
  ...Xh,
  props: qh,
  emits: Yh,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Ce("scrollbar");
    let r, s, i = 0, u = 0;
    const c = M(), d = M(), p = M(), v = M(), m = b(() => {
      const T = {};
      return o.height && (T.height = uo(o.height)), o.maxHeight && (T.maxHeight = uo(o.maxHeight)), [o.wrapStyle, T];
    }), f = b(() => [
      o.wrapClass,
      a.e("wrap"),
      { [a.em("wrap", "hidden-default")]: !o.native }
    ]), h = b(() => [a.e("view"), o.viewClass]), S = () => {
      var T;
      d.value && ((T = v.value) == null || T.handleScroll(d.value), i = d.value.scrollTop, u = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function g(T, P) {
      qe(T) ? d.value.scrollTo(T) : pe(T) && pe(P) && d.value.scrollTo(T, P);
    }
    const I = (T) => {
      pe(T) && (d.value.scrollTop = T);
    }, _ = (T) => {
      pe(T) && (d.value.scrollLeft = T);
    }, E = () => {
      var T;
      (T = v.value) == null || T.update();
    };
    return ie(() => o.noresize, (T) => {
      T ? (r?.(), s?.()) : ({ stop: r } = bt(p, E), s = We("resize", E));
    }, { immediate: !0 }), ie(() => [o.maxHeight, o.height], () => {
      o.native || Se(() => {
        var T;
        E(), d.value && ((T = v.value) == null || T.handleScroll(d.value));
      });
    }), ht(vs, Mt({
      scrollbarElement: c,
      wrapElement: d
    })), Bu(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = u);
    }), Pe(() => {
      o.native || Se(() => {
        E();
      });
    }), Ci(() => E()), t({
      wrapRef: d,
      update: E,
      scrollTo: g,
      setScrollTop: I,
      setScrollLeft: _,
      handleScroll: S
    }), (T, P) => (w(), R("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: N(l(a).b())
    }, [
      y("div", {
        ref_key: "wrapRef",
        ref: d,
        class: N(l(f)),
        style: we(l(m)),
        tabindex: T.tabindex,
        onScroll: S
      }, [
        (w(), Y(at(T.tag), {
          id: T.id,
          ref_key: "resizeRef",
          ref: p,
          class: N(l(h)),
          style: we(T.viewStyle),
          role: T.role,
          "aria-label": T.ariaLabel,
          "aria-orientation": T.ariaOrientation
        }, {
          default: q(() => [
            re(T.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      T.native ? H("v-if", !0) : (w(), Y(Zh, {
        key: 0,
        ref_key: "barRef",
        ref: v,
        always: T.always,
        "min-size": T.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var ev = /* @__PURE__ */ _e(Qh, [["__file", "scrollbar.vue"]]);
const tv = nt(ev), gs = Symbol("popper"), vl = Symbol("popperContent"), nv = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], gl = he({
  role: {
    type: String,
    values: nv,
    default: "tooltip"
  }
}), ov = G({
  name: "ElPopper",
  inheritAttrs: !1
}), av = /* @__PURE__ */ G({
  ...ov,
  props: gl,
  setup(e, { expose: t }) {
    const n = e, o = M(), a = M(), r = M(), s = M(), i = b(() => n.role), u = {
      triggerRef: o,
      popperInstanceRef: a,
      contentRef: r,
      referenceRef: s,
      role: i
    };
    return t(u), ht(gs, u), (c, d) => re(c.$slots, "default");
  }
});
var sv = /* @__PURE__ */ _e(av, [["__file", "popper.vue"]]);
const yl = he({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), rv = G({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), iv = /* @__PURE__ */ G({
  ...rv,
  props: yl,
  setup(e, { expose: t }) {
    const n = e, o = Ce("popper"), { arrowOffset: a, arrowRef: r, arrowStyle: s } = ye(vl, void 0);
    return ie(() => n.arrowOffset, (i) => {
      a.value = i;
    }), Ct(() => {
      r.value = void 0;
    }), t({
      arrowRef: r
    }), (i, u) => (w(), R("span", {
      ref_key: "arrowRef",
      ref: r,
      class: N(l(o).e("arrow")),
      style: we(l(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var lv = /* @__PURE__ */ _e(iv, [["__file", "arrow.vue"]]);
const bl = he({
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
}), wl = Symbol("elForwardRef"), uv = (e) => {
  ht(wl, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, cv = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Da = (e) => {
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
}, dv = "ElOnlyChild", fv = G({
  name: dv,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const a = ye(wl), r = cv((o = a?.setForwardRef) != null ? o : ro);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const u = _l(i);
      return u ? Ye(Fu(u, n), [[r]]) : null;
    };
  }
});
function _l(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (qe(n))
      switch (n.type) {
        case Du:
          continue;
        case Vu:
        case "svg":
          return Mr(n);
        case Ie:
          return _l(n.children);
        default:
          return n;
      }
    return Mr(n);
  }
  return null;
}
function Mr(e) {
  const t = Ce("only-child");
  return B("span", {
    class: t.e("content")
  }, [e]);
}
const pv = G({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), mv = /* @__PURE__ */ G({
  ...pv,
  props: bl,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: a } = ye(gs, void 0);
    uv(a);
    const r = b(() => i.value ? n.id : void 0), s = b(() => {
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
    return Pe(() => {
      ie(() => n.virtualRef, (p) => {
        p && (a.value = It(p));
      }, {
        immediate: !0
      }), ie(a, (p, v) => {
        c?.(), c = void 0, mt(p) && (d.forEach((m) => {
          var f;
          const h = n[m];
          h && (p.addEventListener(m.slice(2).toLowerCase(), h), (f = v?.removeEventListener) == null || f.call(v, m.slice(2).toLowerCase(), h));
        }), Da(p) && (c = ie([r, s, i, u], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((f, h) => {
            xt(m[h]) ? p.removeAttribute(f) : p.setAttribute(f, m[h]);
          });
        }, { immediate: !0 }))), mt(v) && Da(v) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((m) => v.removeAttribute(m));
      }, {
        immediate: !0
      });
    }), Ct(() => {
      if (c?.(), c = void 0, a.value && mt(a.value)) {
        const p = a.value;
        d.forEach((v) => {
          const m = n[v];
          m && p.removeEventListener(v.slice(2).toLowerCase(), m);
        }), a.value = void 0;
      }
    }), t({
      triggerRef: a
    }), (p, v) => p.virtualTriggering ? H("v-if", !0) : (w(), Y(l(fv), qt({ key: 0 }, p.$attrs, {
      "aria-controls": l(r),
      "aria-describedby": l(s),
      "aria-expanded": l(u),
      "aria-haspopup": l(i)
    }), {
      default: q(() => [
        re(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var hv = /* @__PURE__ */ _e(mv, [["__file", "trigger.vue"]]);
const Ca = "focus-trap.focus-after-trapped", Ta = "focus-trap.focus-after-released", vv = "focus-trap.focusout-prevented", zr = {
  cancelable: !0,
  bubbles: !1
}, gv = {
  cancelable: !0,
  bubbles: !1
}, Nr = "focusAfterTrapped", Br = "focusAfterReleased", yv = Symbol("elFocusTrap"), ys = M(), va = M(0), bs = M(0);
let Eo = 0;
const Sl = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const a = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Fr = (e, t) => {
  for (const n of e)
    if (!bv(n, t))
      return n;
}, bv = (e, t) => {
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
}, wv = (e) => {
  const t = Sl(e), n = Fr(t, e), o = Fr(t.reverse(), e);
  return [n, o];
}, _v = (e) => e instanceof HTMLInputElement && "select" in e, Et = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    mt(e) && !Da(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), bs.value = window.performance.now(), e !== n && _v(e) && t && e.select(), mt(e) && o && e.removeAttribute("tabindex");
  }
};
function Vr(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const Sv = () => {
  let e = [];
  return {
    push: (o) => {
      const a = e[0];
      a && o !== a && a.pause(), e = Vr(e, o), e.unshift(o);
    },
    remove: (o) => {
      var a, r;
      e = Vr(e, o), (r = (a = e[0]) == null ? void 0 : a.resume) == null || r.call(a);
    }
  };
}, kv = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Et(o, t), document.activeElement !== n)
      return;
}, Dr = Sv(), Cv = () => va.value > bs.value, Po = () => {
  ys.value = "pointer", va.value = window.performance.now();
}, Hr = () => {
  ys.value = "keyboard", va.value = window.performance.now();
}, Tv = () => (Pe(() => {
  Eo === 0 && (document.addEventListener("mousedown", Po), document.addEventListener("touchstart", Po), document.addEventListener("keydown", Hr)), Eo++;
}), Ct(() => {
  Eo--, Eo <= 0 && (document.removeEventListener("mousedown", Po), document.removeEventListener("touchstart", Po), document.removeEventListener("keydown", Hr));
}), {
  focusReason: ys,
  lastUserFocusTimestamp: va,
  lastAutomatedFocusTimestamp: bs
}), Oo = (e) => new CustomEvent(vv, {
  ...gv,
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
let gn = [];
const jr = (e) => {
  e.code === Ne.esc && gn.forEach((t) => t(e));
}, Ev = (e) => {
  Pe(() => {
    gn.length === 0 && document.addEventListener("keydown", jr), Re && gn.push(e);
  }), Ct(() => {
    gn = gn.filter((t) => t !== e), gn.length === 0 && Re && document.removeEventListener("keydown", jr);
  });
}, Pv = G({
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
    Nr,
    Br,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = M();
    let o, a;
    const { focusReason: r } = Tv();
    Ev((f) => {
      e.trapped && !s.paused && t("release-requested", f);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (f) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: h, altKey: S, ctrlKey: g, metaKey: I, currentTarget: _, shiftKey: E } = f, { loop: T } = e, P = h === Ne.tab && !S && !g && !I, L = document.activeElement;
      if (P && L) {
        const Z = _, [U, Q] = wv(Z);
        if (U && Q) {
          if (!E && L === Q) {
            const x = Oo({
              focusReason: r.value
            });
            t("focusout-prevented", x), x.defaultPrevented || (f.preventDefault(), T && Et(U, !0));
          } else if (E && [U, Z].includes(L)) {
            const x = Oo({
              focusReason: r.value
            });
            t("focusout-prevented", x), x.defaultPrevented || (f.preventDefault(), T && Et(Q, !0));
          }
        } else if (L === Z) {
          const x = Oo({
            focusReason: r.value
          });
          t("focusout-prevented", x), x.defaultPrevented || f.preventDefault();
        }
      }
    };
    ht(yv, {
      focusTrapRef: n,
      onKeydown: i
    }), ie(() => e.focusTrapEl, (f) => {
      f && (n.value = f);
    }, { immediate: !0 }), ie([n], ([f], [h]) => {
      f && (f.addEventListener("keydown", i), f.addEventListener("focusin", d), f.addEventListener("focusout", p)), h && (h.removeEventListener("keydown", i), h.removeEventListener("focusin", d), h.removeEventListener("focusout", p));
    });
    const u = (f) => {
      t(Nr, f);
    }, c = (f) => t(Br, f), d = (f) => {
      const h = l(n);
      if (!h)
        return;
      const S = f.target, g = f.relatedTarget, I = S && h.contains(S);
      e.trapped || g && h.contains(g) || (o = g), I && t("focusin", f), !s.paused && e.trapped && (I ? a = S : Et(a, !0));
    }, p = (f) => {
      const h = l(n);
      if (!(s.paused || !h))
        if (e.trapped) {
          const S = f.relatedTarget;
          !xt(S) && !h.contains(S) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const g = Oo({
                focusReason: r.value
              });
              t("focusout-prevented", g), g.defaultPrevented || Et(a, !0);
            }
          }, 0);
        } else {
          const S = f.target;
          S && h.contains(S) || t("focusout", f);
        }
    };
    async function v() {
      await Se();
      const f = l(n);
      if (f) {
        Dr.push(s);
        const h = f.contains(document.activeElement) ? o : document.activeElement;
        if (o = h, !f.contains(h)) {
          const g = new Event(Ca, zr);
          f.addEventListener(Ca, u), f.dispatchEvent(g), g.defaultPrevented || Se(() => {
            let I = e.focusStartEl;
            Fe(I) || (Et(I), document.activeElement !== I && (I = "first")), I === "first" && kv(Sl(f), !0), (document.activeElement === h || I === "container") && Et(f);
          });
        }
      }
    }
    function m() {
      const f = l(n);
      if (f) {
        f.removeEventListener(Ca, u);
        const h = new CustomEvent(Ta, {
          ...zr,
          detail: {
            focusReason: r.value
          }
        });
        f.addEventListener(Ta, c), f.dispatchEvent(h), !h.defaultPrevented && (r.value == "keyboard" || !Cv() || f.contains(document.activeElement)) && Et(o ?? document.body), f.removeEventListener(Ta, c), Dr.remove(s);
      }
    }
    return Pe(() => {
      e.trapped && v(), ie(() => e.trapped, (f) => {
        f ? v() : m();
      });
    }), Ct(() => {
      e.trapped && m(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function Ov(e, t, n, o, a, r) {
  return re(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Iv = /* @__PURE__ */ _e(Pv, [["render", Ov], ["__file", "focus-trap.vue"]]), Je = "top", it = "bottom", lt = "right", Xe = "left", ws = "auto", yo = [Je, it, lt, Xe], In = "start", fo = "end", $v = "clippingParents", kl = "viewport", jn = "popper", Lv = "reference", Wr = yo.reduce(function(e, t) {
  return e.concat([t + "-" + In, t + "-" + fo]);
}, []), Bn = [].concat(yo, [ws]).reduce(function(e, t) {
  return e.concat([t, t + "-" + In, t + "-" + fo]);
}, []), xv = "beforeRead", Rv = "read", Av = "afterRead", Mv = "beforeMain", zv = "main", Nv = "afterMain", Bv = "beforeWrite", Fv = "write", Vv = "afterWrite", Dv = [xv, Rv, Av, Mv, zv, Nv, Bv, Fv, Vv];
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
function rt(e) {
  var t = tt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function _s(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Hv(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, a = t.attributes[n] || {}, r = t.elements[n];
    !rt(r) || !kt(r) || (Object.assign(r.style, o), Object.keys(a).forEach(function(s) {
      var i = a[s];
      i === !1 ? r.removeAttribute(s) : r.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function jv(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var a = t.elements[o], r = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), i = s.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !rt(a) || !kt(a) || (Object.assign(a.style, i), Object.keys(r).forEach(function(u) {
        a.removeAttribute(u);
      }));
    });
  };
}
var Cl = { name: "applyStyles", enabled: !0, phase: "write", fn: Hv, effect: jv, requires: ["computeStyles"] };
function _t(e) {
  return e.split("-")[0];
}
var an = Math.max, qo = Math.min, $n = Math.round;
function Ha() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Tl() {
  return !/^((?!chrome|android).)*safari/i.test(Ha());
}
function Ln(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), a = 1, r = 1;
  t && rt(e) && (a = e.offsetWidth > 0 && $n(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && $n(o.height) / e.offsetHeight || 1);
  var s = rn(e) ? tt(e) : window, i = s.visualViewport, u = !Tl() && n, c = (o.left + (u && i ? i.offsetLeft : 0)) / a, d = (o.top + (u && i ? i.offsetTop : 0)) / r, p = o.width / a, v = o.height / r;
  return { width: p, height: v, top: d, right: c + p, bottom: d + v, left: c, x: c, y: d };
}
function Ss(e) {
  var t = Ln(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function El(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && _s(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o)) return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function zt(e) {
  return tt(e).getComputedStyle(e);
}
function Wv(e) {
  return ["table", "td", "th"].indexOf(kt(e)) >= 0;
}
function Xt(e) {
  return ((rn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ga(e) {
  return kt(e) === "html" ? e : e.assignedSlot || e.parentNode || (_s(e) ? e.host : null) || Xt(e);
}
function Ur(e) {
  return !rt(e) || zt(e).position === "fixed" ? null : e.offsetParent;
}
function Uv(e) {
  var t = /firefox/i.test(Ha()), n = /Trident/i.test(Ha());
  if (n && rt(e)) {
    var o = zt(e);
    if (o.position === "fixed") return null;
  }
  var a = ga(e);
  for (_s(a) && (a = a.host); rt(a) && ["html", "body"].indexOf(kt(a)) < 0; ) {
    var r = zt(a);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return a;
    a = a.parentNode;
  }
  return null;
}
function bo(e) {
  for (var t = tt(e), n = Ur(e); n && Wv(n) && zt(n).position === "static"; ) n = Ur(n);
  return n && (kt(n) === "html" || kt(n) === "body" && zt(n).position === "static") ? t : n || Uv(e) || t;
}
function ks(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function eo(e, t, n) {
  return an(e, qo(t, n));
}
function Kv(e, t, n) {
  var o = eo(e, t, n);
  return o > n ? n : o;
}
function Pl() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ol(e) {
  return Object.assign({}, Pl(), e);
}
function Il(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var Gv = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ol(typeof e != "number" ? e : Il(e, yo));
};
function Zv(e) {
  var t, n = e.state, o = e.name, a = e.options, r = n.elements.arrow, s = n.modifiersData.popperOffsets, i = _t(n.placement), u = ks(i), c = [Xe, lt].indexOf(i) >= 0, d = c ? "height" : "width";
  if (!(!r || !s)) {
    var p = Gv(a.padding, n), v = Ss(r), m = u === "y" ? Je : Xe, f = u === "y" ? it : lt, h = n.rects.reference[d] + n.rects.reference[u] - s[u] - n.rects.popper[d], S = s[u] - n.rects.reference[u], g = bo(r), I = g ? u === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, _ = h / 2 - S / 2, E = p[m], T = I - v[d] - p[f], P = I / 2 - v[d] / 2 + _, L = eo(E, P, T), Z = u;
    n.modifiersData[o] = (t = {}, t[Z] = L, t.centerOffset = L - P, t);
  }
}
function qv(e) {
  var t = e.state, n = e.options, o = n.element, a = o === void 0 ? "[data-popper-arrow]" : o;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || El(t.elements.popper, a) && (t.elements.arrow = a));
}
var Yv = { name: "arrow", enabled: !0, phase: "main", fn: Zv, effect: qv, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function xn(e) {
  return e.split("-")[1];
}
var Jv = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Xv(e, t) {
  var n = e.x, o = e.y, a = t.devicePixelRatio || 1;
  return { x: $n(n * a) / a || 0, y: $n(o * a) / a || 0 };
}
function Kr(e) {
  var t, n = e.popper, o = e.popperRect, a = e.placement, r = e.variation, s = e.offsets, i = e.position, u = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, p = e.isFixed, v = s.x, m = v === void 0 ? 0 : v, f = s.y, h = f === void 0 ? 0 : f, S = typeof d == "function" ? d({ x: m, y: h }) : { x: m, y: h };
  m = S.x, h = S.y;
  var g = s.hasOwnProperty("x"), I = s.hasOwnProperty("y"), _ = Xe, E = Je, T = window;
  if (c) {
    var P = bo(n), L = "clientHeight", Z = "clientWidth";
    if (P === tt(n) && (P = Xt(n), zt(P).position !== "static" && i === "absolute" && (L = "scrollHeight", Z = "scrollWidth")), P = P, a === Je || (a === Xe || a === lt) && r === fo) {
      E = it;
      var U = p && P === T && T.visualViewport ? T.visualViewport.height : P[L];
      h -= U - o.height, h *= u ? 1 : -1;
    }
    if (a === Xe || (a === Je || a === it) && r === fo) {
      _ = lt;
      var Q = p && P === T && T.visualViewport ? T.visualViewport.width : P[Z];
      m -= Q - o.width, m *= u ? 1 : -1;
    }
  }
  var k = Object.assign({ position: i }, c && Jv), x = d === !0 ? Xv({ x: m, y: h }, tt(n)) : { x: m, y: h };
  if (m = x.x, h = x.y, u) {
    var j;
    return Object.assign({}, k, (j = {}, j[E] = I ? "0" : "", j[_] = g ? "0" : "", j.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + h + "px)" : "translate3d(" + m + "px, " + h + "px, 0)", j));
  }
  return Object.assign({}, k, (t = {}, t[E] = I ? h + "px" : "", t[_] = g ? m + "px" : "", t.transform = "", t));
}
function Qv(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, a = o === void 0 ? !0 : o, r = n.adaptive, s = r === void 0 ? !0 : r, i = n.roundOffsets, u = i === void 0 ? !0 : i, c = { placement: _t(t.placement), variation: xn(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Kr(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Kr(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var $l = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Qv, data: {} }, Io = { passive: !0 };
function eg(e) {
  var t = e.state, n = e.instance, o = e.options, a = o.scroll, r = a === void 0 ? !0 : a, s = o.resize, i = s === void 0 ? !0 : s, u = tt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, Io);
  }), i && u.addEventListener("resize", n.update, Io), function() {
    r && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Io);
    }), i && u.removeEventListener("resize", n.update, Io);
  };
}
var Ll = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: eg, data: {} }, tg = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Mo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return tg[t];
  });
}
var ng = { start: "end", end: "start" };
function Gr(e) {
  return e.replace(/start|end/g, function(t) {
    return ng[t];
  });
}
function Cs(e) {
  var t = tt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Ts(e) {
  return Ln(Xt(e)).left + Cs(e).scrollLeft;
}
function og(e, t) {
  var n = tt(e), o = Xt(e), a = n.visualViewport, r = o.clientWidth, s = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, s = a.height;
    var c = Tl();
    (c || !c && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  return { width: r, height: s, x: i + Ts(e), y: u };
}
function ag(e) {
  var t, n = Xt(e), o = Cs(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, r = an(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = an(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -o.scrollLeft + Ts(e), u = -o.scrollTop;
  return zt(a || n).direction === "rtl" && (i += an(n.clientWidth, a ? a.clientWidth : 0) - r), { width: r, height: s, x: i, y: u };
}
function Es(e) {
  var t = zt(e), n = t.overflow, o = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function xl(e) {
  return ["html", "body", "#document"].indexOf(kt(e)) >= 0 ? e.ownerDocument.body : rt(e) && Es(e) ? e : xl(ga(e));
}
function to(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = xl(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = tt(o), s = a ? [r].concat(r.visualViewport || [], Es(o) ? o : []) : o, i = t.concat(s);
  return a ? i : i.concat(to(ga(s)));
}
function ja(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function sg(e, t) {
  var n = Ln(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Zr(e, t, n) {
  return t === kl ? ja(og(e, n)) : rn(t) ? sg(t, n) : ja(ag(Xt(e)));
}
function rg(e) {
  var t = to(ga(e)), n = ["absolute", "fixed"].indexOf(zt(e).position) >= 0, o = n && rt(e) ? bo(e) : e;
  return rn(o) ? t.filter(function(a) {
    return rn(a) && El(a, o) && kt(a) !== "body";
  }) : [];
}
function ig(e, t, n, o) {
  var a = t === "clippingParents" ? rg(e) : [].concat(t), r = [].concat(a, [n]), s = r[0], i = r.reduce(function(u, c) {
    var d = Zr(e, c, o);
    return u.top = an(d.top, u.top), u.right = qo(d.right, u.right), u.bottom = qo(d.bottom, u.bottom), u.left = an(d.left, u.left), u;
  }, Zr(e, s, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Rl(e) {
  var t = e.reference, n = e.element, o = e.placement, a = o ? _t(o) : null, r = o ? xn(o) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, u;
  switch (a) {
    case Je:
      u = { x: s, y: t.y - n.height };
      break;
    case it:
      u = { x: s, y: t.y + t.height };
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
  var c = a ? ks(a) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (r) {
      case In:
        u[c] = u[c] - (t[d] / 2 - n[d] / 2);
        break;
      case fo:
        u[c] = u[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return u;
}
function po(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = o === void 0 ? e.placement : o, r = n.strategy, s = r === void 0 ? e.strategy : r, i = n.boundary, u = i === void 0 ? $v : i, c = n.rootBoundary, d = c === void 0 ? kl : c, p = n.elementContext, v = p === void 0 ? jn : p, m = n.altBoundary, f = m === void 0 ? !1 : m, h = n.padding, S = h === void 0 ? 0 : h, g = Ol(typeof S != "number" ? S : Il(S, yo)), I = v === jn ? Lv : jn, _ = e.rects.popper, E = e.elements[f ? I : v], T = ig(rn(E) ? E : E.contextElement || Xt(e.elements.popper), u, d, s), P = Ln(e.elements.reference), L = Rl({ reference: P, element: _, placement: a }), Z = ja(Object.assign({}, _, L)), U = v === jn ? Z : P, Q = { top: T.top - U.top + g.top, bottom: U.bottom - T.bottom + g.bottom, left: T.left - U.left + g.left, right: U.right - T.right + g.right }, k = e.modifiersData.offset;
  if (v === jn && k) {
    var x = k[a];
    Object.keys(Q).forEach(function(j) {
      var se = [lt, it].indexOf(j) >= 0 ? 1 : -1, O = [Je, it].indexOf(j) >= 0 ? "y" : "x";
      Q[j] += x[O] * se;
    });
  }
  return Q;
}
function lg(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = n.boundary, r = n.rootBoundary, s = n.padding, i = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? Bn : u, d = xn(o), p = d ? i ? Wr : Wr.filter(function(f) {
    return xn(f) === d;
  }) : yo, v = p.filter(function(f) {
    return c.indexOf(f) >= 0;
  });
  v.length === 0 && (v = p);
  var m = v.reduce(function(f, h) {
    return f[h] = po(e, { placement: h, boundary: a, rootBoundary: r, padding: s })[_t(h)], f;
  }, {});
  return Object.keys(m).sort(function(f, h) {
    return m[f] - m[h];
  });
}
function ug(e) {
  if (_t(e) === ws) return [];
  var t = Mo(e);
  return [Gr(e), t, Gr(t)];
}
function cg(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var a = n.mainAxis, r = a === void 0 ? !0 : a, s = n.altAxis, i = s === void 0 ? !0 : s, u = n.fallbackPlacements, c = n.padding, d = n.boundary, p = n.rootBoundary, v = n.altBoundary, m = n.flipVariations, f = m === void 0 ? !0 : m, h = n.allowedAutoPlacements, S = t.options.placement, g = _t(S), I = g === S, _ = u || (I || !f ? [Mo(S)] : ug(S)), E = [S].concat(_).reduce(function(de, ge) {
      return de.concat(_t(ge) === ws ? lg(t, { placement: ge, boundary: d, rootBoundary: p, padding: c, flipVariations: f, allowedAutoPlacements: h }) : ge);
    }, []), T = t.rects.reference, P = t.rects.popper, L = /* @__PURE__ */ new Map(), Z = !0, U = E[0], Q = 0; Q < E.length; Q++) {
      var k = E[Q], x = _t(k), j = xn(k) === In, se = [Je, it].indexOf(x) >= 0, O = se ? "width" : "height", z = po(t, { placement: k, boundary: d, rootBoundary: p, altBoundary: v, padding: c }), A = se ? j ? lt : Xe : j ? it : Je;
      T[O] > P[O] && (A = Mo(A));
      var ee = Mo(A), X = [];
      if (r && X.push(z[x] <= 0), i && X.push(z[A] <= 0, z[ee] <= 0), X.every(function(de) {
        return de;
      })) {
        U = k, Z = !1;
        break;
      }
      L.set(k, X);
    }
    if (Z) for (var le = f ? 3 : 1, ve = function(de) {
      var ge = E.find(function(Ee) {
        var ae = L.get(Ee);
        if (ae) return ae.slice(0, de).every(function(me) {
          return me;
        });
      });
      if (ge) return U = ge, "break";
    }, be = le; be > 0; be--) {
      var J = ve(be);
      if (J === "break") break;
    }
    t.placement !== U && (t.modifiersData[o]._skip = !0, t.placement = U, t.reset = !0);
  }
}
var dg = { name: "flip", enabled: !0, phase: "main", fn: cg, requiresIfExists: ["offset"], data: { _skip: !1 } };
function qr(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Yr(e) {
  return [Je, lt, it, Xe].some(function(t) {
    return e[t] >= 0;
  });
}
function fg(e) {
  var t = e.state, n = e.name, o = t.rects.reference, a = t.rects.popper, r = t.modifiersData.preventOverflow, s = po(t, { elementContext: "reference" }), i = po(t, { altBoundary: !0 }), u = qr(s, o), c = qr(i, a, r), d = Yr(u), p = Yr(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": p });
}
var pg = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: fg };
function mg(e, t, n) {
  var o = _t(e), a = [Xe, Je].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = r[0], i = r[1];
  return s = s || 0, i = (i || 0) * a, [Xe, lt].indexOf(o) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function hg(e) {
  var t = e.state, n = e.options, o = e.name, a = n.offset, r = a === void 0 ? [0, 0] : a, s = Bn.reduce(function(d, p) {
    return d[p] = mg(p, t.rects, r), d;
  }, {}), i = s[t.placement], u = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = s;
}
var vg = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: hg };
function gg(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Rl({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Al = { name: "popperOffsets", enabled: !0, phase: "read", fn: gg, data: {} };
function yg(e) {
  return e === "x" ? "y" : "x";
}
function bg(e) {
  var t = e.state, n = e.options, o = e.name, a = n.mainAxis, r = a === void 0 ? !0 : a, s = n.altAxis, i = s === void 0 ? !1 : s, u = n.boundary, c = n.rootBoundary, d = n.altBoundary, p = n.padding, v = n.tether, m = v === void 0 ? !0 : v, f = n.tetherOffset, h = f === void 0 ? 0 : f, S = po(t, { boundary: u, rootBoundary: c, padding: p, altBoundary: d }), g = _t(t.placement), I = xn(t.placement), _ = !I, E = ks(g), T = yg(E), P = t.modifiersData.popperOffsets, L = t.rects.reference, Z = t.rects.popper, U = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, Q = typeof U == "number" ? { mainAxis: U, altAxis: U } : Object.assign({ mainAxis: 0, altAxis: 0 }, U), k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, x = { x: 0, y: 0 };
  if (P) {
    if (r) {
      var j, se = E === "y" ? Je : Xe, O = E === "y" ? it : lt, z = E === "y" ? "height" : "width", A = P[E], ee = A + S[se], X = A - S[O], le = m ? -Z[z] / 2 : 0, ve = I === In ? L[z] : Z[z], be = I === In ? -Z[z] : -L[z], J = t.elements.arrow, de = m && J ? Ss(J) : { width: 0, height: 0 }, ge = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Pl(), Ee = ge[se], ae = ge[O], me = eo(0, L[z], de[z]), Be = _ ? L[z] / 2 - le - me - Ee - Q.mainAxis : ve - me - Ee - Q.mainAxis, V = _ ? -L[z] / 2 + le + me + ae + Q.mainAxis : be + me + ae + Q.mainAxis, oe = t.elements.arrow && bo(t.elements.arrow), ne = oe ? E === "y" ? oe.clientTop || 0 : oe.clientLeft || 0 : 0, Le = (j = k?.[E]) != null ? j : 0, De = A + Be - Le - ne, Ae = A + V - Le, Te = eo(m ? qo(ee, De) : ee, A, m ? an(X, Ae) : X);
      P[E] = Te, x[E] = Te - A;
    }
    if (i) {
      var ce, Ke = E === "x" ? Je : Xe, dn = E === "x" ? it : lt, Ge = P[T], yt = T === "y" ? "height" : "width", fn = Ge + S[Ke], Qt = Ge - S[dn], D = [Je, Xe].indexOf(g) !== -1, fe = (ce = k?.[T]) != null ? ce : 0, ot = D ? fn : Ge - L[yt] - Z[yt] - fe + Q.altAxis, Ft = D ? Ge + L[yt] + Z[yt] - fe - Q.altAxis : Qt, Vt = m && D ? Kv(ot, Ge, Ft) : eo(m ? ot : fn, Ge, m ? Ft : Qt);
      P[T] = Vt, x[T] = Vt - Ge;
    }
    t.modifiersData[o] = x;
  }
}
var wg = { name: "preventOverflow", enabled: !0, phase: "main", fn: bg, requiresIfExists: ["offset"] };
function _g(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Sg(e) {
  return e === tt(e) || !rt(e) ? Cs(e) : _g(e);
}
function kg(e) {
  var t = e.getBoundingClientRect(), n = $n(t.width) / e.offsetWidth || 1, o = $n(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Cg(e, t, n) {
  n === void 0 && (n = !1);
  var o = rt(t), a = rt(t) && kg(t), r = Xt(t), s = Ln(e, a, n), i = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (o || !o && !n) && ((kt(t) !== "body" || Es(r)) && (i = Sg(t)), rt(t) ? (u = Ln(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : r && (u.x = Ts(r))), { x: s.left + i.scrollLeft - u.x, y: s.top + i.scrollTop - u.y, width: s.width, height: s.height };
}
function Tg(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(r) {
    t.set(r.name, r);
  });
  function a(r) {
    n.add(r.name);
    var s = [].concat(r.requires || [], r.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var u = t.get(i);
        u && a(u);
      }
    }), o.push(r);
  }
  return e.forEach(function(r) {
    n.has(r.name) || a(r);
  }), o;
}
function Eg(e) {
  var t = Tg(e);
  return Dv.reduce(function(n, o) {
    return n.concat(t.filter(function(a) {
      return a.phase === o;
    }));
  }, []);
}
function Pg(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Og(e) {
  var t = e.reduce(function(n, o) {
    var a = n[o.name];
    return n[o.name] = a ? Object.assign({}, a, o, { options: Object.assign({}, a.options, o.options), data: Object.assign({}, a.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Jr = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Xr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Ps(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, a = t.defaultOptions, r = a === void 0 ? Jr : a;
  return function(s, i, u) {
    u === void 0 && (u = r);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Jr, r), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], p = !1, v = { state: c, setOptions: function(h) {
      var S = typeof h == "function" ? h(c.options) : h;
      f(), c.options = Object.assign({}, r, c.options, S), c.scrollParents = { reference: rn(s) ? to(s) : s.contextElement ? to(s.contextElement) : [], popper: to(i) };
      var g = Eg(Og([].concat(o, c.options.modifiers)));
      return c.orderedModifiers = g.filter(function(I) {
        return I.enabled;
      }), m(), v.update();
    }, forceUpdate: function() {
      if (!p) {
        var h = c.elements, S = h.reference, g = h.popper;
        if (Xr(S, g)) {
          c.rects = { reference: Cg(S, bo(g), c.options.strategy === "fixed"), popper: Ss(g) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(Z) {
            return c.modifiersData[Z.name] = Object.assign({}, Z.data);
          });
          for (var I = 0; I < c.orderedModifiers.length; I++) {
            if (c.reset === !0) {
              c.reset = !1, I = -1;
              continue;
            }
            var _ = c.orderedModifiers[I], E = _.fn, T = _.options, P = T === void 0 ? {} : T, L = _.name;
            typeof E == "function" && (c = E({ state: c, options: P, name: L, instance: v }) || c);
          }
        }
      }
    }, update: Pg(function() {
      return new Promise(function(h) {
        v.forceUpdate(), h(c);
      });
    }), destroy: function() {
      f(), p = !0;
    } };
    if (!Xr(s, i)) return v;
    v.setOptions(u).then(function(h) {
      !p && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function m() {
      c.orderedModifiers.forEach(function(h) {
        var S = h.name, g = h.options, I = g === void 0 ? {} : g, _ = h.effect;
        if (typeof _ == "function") {
          var E = _({ state: c, name: S, instance: v, options: I }), T = function() {
          };
          d.push(E || T);
        }
      });
    }
    function f() {
      d.forEach(function(h) {
        return h();
      }), d = [];
    }
    return v;
  };
}
Ps();
var Ig = [Ll, Al, $l, Cl];
Ps({ defaultModifiers: Ig });
var $g = [Ll, Al, $l, Cl, vg, dg, wg, Yv, pg], Lg = Ps({ defaultModifiers: $g });
const xg = ["fixed", "absolute"], Rg = he({
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
    values: Bn,
    default: "bottom"
  },
  popperOptions: {
    type: te(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: xg,
    default: "absolute"
  }
}), Ml = he({
  ...Rg,
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
  ...cn(["ariaLabel"])
}), Ag = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Mg = (e, t) => {
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
}, zg = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: a } = e, r = {
    placement: n,
    strategy: o,
    ...a,
    modifiers: [...Bg(e), ...t]
  };
  return Fg(r, a?.modifiers), r;
}, Ng = (e) => {
  if (Re)
    return It(e);
};
function Bg(e) {
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
function Fg(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Vg = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = Dg(u);
      Object.assign(s.value, c);
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
  }), r = Zt(), s = M({
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
    r.value && (r.value.destroy(), r.value = void 0);
  };
  return ie(a, (u) => {
    const c = l(r);
    c && c.setOptions(u);
  }, {
    deep: !0
  }), ie([e, t], ([u, c]) => {
    i(), !(!u || !c) && (r.value = Lg(u, c, l(a)));
  }), Ct(() => {
    i();
  }), {
    state: b(() => {
      var u;
      return { ...((u = l(r)) == null ? void 0 : u.state) || {} };
    }),
    styles: b(() => l(s).styles),
    attributes: b(() => l(s).attributes),
    update: () => {
      var u;
      return (u = l(r)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = l(r)) == null ? void 0 : u.forceUpdate();
    },
    instanceRef: b(() => l(r))
  };
};
function Dg(e) {
  const t = Object.keys(e.elements), n = Wo(t.map((a) => [a, e.styles[a] || {}])), o = Wo(t.map((a) => [a, e.attributes[a]]));
  return {
    styles: n,
    attributes: o
  };
}
const Hg = 0, jg = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: a } = ye(gs, void 0), r = M(), s = M(), i = b(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = b(() => {
    var g;
    const I = l(r), _ = (g = l(s)) != null ? g : Hg;
    return {
      name: "arrow",
      enabled: !am(I),
      options: {
        element: I,
        padding: _
      }
    };
  }), c = b(() => ({
    onFirstUpdate: () => {
      f();
    },
    ...zg(e, [
      l(u),
      l(i)
    ])
  })), d = b(() => Ng(e.referenceEl) || l(o)), { attributes: p, state: v, styles: m, update: f, forceUpdate: h, instanceRef: S } = Vg(d, n, c);
  return ie(S, (g) => t.value = g), Pe(() => {
    ie(() => {
      var g;
      return (g = l(d)) == null ? void 0 : g.getBoundingClientRect();
    }, () => {
      f();
    });
  }), {
    attributes: p,
    arrowRef: r,
    contentRef: n,
    instanceRef: S,
    state: v,
    styles: m,
    role: a,
    forceUpdate: h,
    update: f
  };
}, Wg = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: a } = Zi(), r = Ce("popper"), s = b(() => l(t).popper), i = M(pe(e.zIndex) ? e.zIndex : a()), u = b(() => [
    r.b(),
    r.is("pure", e.pure),
    r.is(e.effect),
    e.popperClass
  ]), c = b(() => [
    { zIndex: l(i) },
    l(n).popper,
    e.popperStyle || {}
  ]), d = b(() => o.value === "dialog" ? "false" : void 0), p = b(() => l(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: u,
    contentStyle: c,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = pe(e.zIndex) ? e.zIndex : a();
    }
  };
}, Ug = G({
  name: "ElPopperContent"
}), Kg = /* @__PURE__ */ G({
  ...Ug,
  props: Ml,
  emits: Ag,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: a,
      trapped: r,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: d
    } = Mg(o, n), { attributes: p, arrowRef: v, contentRef: m, styles: f, instanceRef: h, role: S, update: g } = jg(o), {
      ariaModal: I,
      arrowStyle: _,
      contentAttrs: E,
      contentClass: T,
      contentStyle: P,
      updateZIndex: L
    } = Wg(o, {
      styles: f,
      attributes: p,
      role: S
    }), Z = ye(Zo, void 0), U = M();
    ht(vl, {
      arrowStyle: _,
      arrowRef: v,
      arrowOffset: U
    }), Z && ht(Zo, {
      ...Z,
      addInputId: ro,
      removeInputId: ro
    });
    let Q;
    const k = (j = !0) => {
      g(), j && L();
    }, x = () => {
      k(!1), o.visible && o.focusOnShow ? r.value = !0 : o.visible === !1 && (r.value = !1);
    };
    return Pe(() => {
      ie(() => o.triggerTargetEl, (j, se) => {
        Q?.(), Q = void 0;
        const O = l(j || m.value), z = l(se || m.value);
        mt(O) && (Q = ie([S, () => o.ariaLabel, I, () => o.id], (A) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ee, X) => {
            xt(A[X]) ? O.removeAttribute(ee) : O.setAttribute(ee, A[X]);
          });
        }, { immediate: !0 })), z !== O && mt(z) && ["role", "aria-label", "aria-modal", "id"].forEach((A) => {
          z.removeAttribute(A);
        });
      }, { immediate: !0 }), ie(() => o.visible, x, { immediate: !0 });
    }), Ct(() => {
      Q?.(), Q = void 0;
    }), t({
      popperContentRef: m,
      popperInstanceRef: h,
      updatePopper: k,
      contentStyle: P
    }), (j, se) => (w(), R("div", qt({
      ref_key: "contentRef",
      ref: m
    }, l(E), {
      style: l(P),
      class: l(T),
      tabindex: "-1",
      onMouseenter: (O) => j.$emit("mouseenter", O),
      onMouseleave: (O) => j.$emit("mouseleave", O)
    }), [
      B(l(Iv), {
        trapped: l(r),
        "trap-on-focus-in": !0,
        "focus-trap-el": l(m),
        "focus-start-el": l(a),
        onFocusAfterTrapped: l(i),
        onFocusAfterReleased: l(s),
        onFocusin: l(u),
        onFocusoutPrevented: l(c),
        onReleaseRequested: l(d)
      }, {
        default: q(() => [
          re(j.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var Gg = /* @__PURE__ */ _e(Kg, [["__file", "content.vue"]]);
const Zg = nt(sv), Os = Symbol("elTooltip");
function Qr() {
  let e;
  const t = (o, a) => {
    n(), e = window.setTimeout(o, a);
  }, n = () => window.clearTimeout(e);
  return vo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const qg = he({
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
}), Yg = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: a
}) => {
  const { registerTimeout: r } = Qr(), {
    registerTimeout: s,
    cancelTimeout: i
  } = Qr();
  return {
    onOpen: (d) => {
      r(() => {
        o(d);
        const p = l(n);
        pe(p) && p > 0 && s(() => {
          a(d);
        }, p);
      }, l(e));
    },
    onClose: (d) => {
      i(), r(() => {
        a(d);
      }, l(t));
    }
  };
}, Is = he({
  ...qg,
  ...Ml,
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
  ...cn(["ariaLabel"])
}), zl = he({
  ...bl,
  disabled: Boolean,
  trigger: {
    type: te([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: te(Array),
    default: () => [Ne.enter, Ne.numpadEnter, Ne.space]
  }
}), Jg = fa({
  type: te(Boolean),
  default: null
}), Xg = fa({
  type: te(Function)
}), Qg = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], a = {
    [e]: Jg,
    [n]: Xg
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: u,
      shouldProceed: c,
      onShow: d,
      onHide: p
    }) => {
      const v = Ue(), { emit: m } = v, f = v.props, h = b(() => $e(f[n])), S = b(() => f[e] === null), g = (L) => {
        s.value !== !0 && (s.value = !0, i && (i.value = L), $e(d) && d(L));
      }, I = (L) => {
        s.value !== !1 && (s.value = !1, i && (i.value = L), $e(p) && p(L));
      }, _ = (L) => {
        if (f.disabled === !0 || $e(c) && !c())
          return;
        const Z = h.value && Re;
        Z && m(t, !0), (S.value || !Z) && g(L);
      }, E = (L) => {
        if (f.disabled === !0 || !Re)
          return;
        const Z = h.value && Re;
        Z && m(t, !1), (S.value || !Z) && I(L);
      }, T = (L) => {
        Uo(L) && (f.disabled && L ? h.value && m(t, !1) : s.value !== L && (L ? g() : I()));
      }, P = () => {
        s.value ? E() : _();
      };
      return ie(() => f[e], T), u && v.appContext.config.globalProperties.$route !== void 0 && ie(() => ({
        ...v.proxy.$route
      }), () => {
        u.value && s.value && E();
      }), Pe(() => {
        T(f[e]);
      }), {
        hide: E,
        show: _,
        toggle: P,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: a,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: e0,
  useModelToggleEmits: t0,
  useModelToggle: n0
} = Qg("visible"), o0 = he({
  ...gl,
  ...e0,
  ...Is,
  ...zl,
  ...yl,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), a0 = [
  ...t0,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], s0 = (e, t) => je(e) ? e.includes(t) : e === t, hn = (e, t, n) => (o) => {
  s0(l(e), t) && n(o);
}, Pt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (a) => {
  const r = e?.(a);
  if (n === !1 || !r)
    return t?.(a);
}, r0 = G({
  name: "ElTooltipTrigger"
}), i0 = /* @__PURE__ */ G({
  ...r0,
  props: zl,
  setup(e, { expose: t }) {
    const n = e, o = Ce("tooltip"), { controlled: a, id: r, open: s, onOpen: i, onClose: u, onToggle: c } = ye(Os, void 0), d = M(null), p = () => {
      if (l(a) || n.disabled)
        return !0;
    }, v = wt(n, "trigger"), m = Pt(p, hn(v, "hover", i)), f = Pt(p, hn(v, "hover", u)), h = Pt(p, hn(v, "click", (E) => {
      E.button === 0 && c(E);
    })), S = Pt(p, hn(v, "focus", i)), g = Pt(p, hn(v, "focus", u)), I = Pt(p, hn(v, "contextmenu", (E) => {
      E.preventDefault(), c(E);
    })), _ = Pt(p, (E) => {
      const { code: T } = E;
      n.triggerKeys.includes(T) && (E.preventDefault(), c(E));
    });
    return t({
      triggerRef: d
    }), (E, T) => (w(), Y(l(hv), {
      id: l(r),
      "virtual-ref": E.virtualRef,
      open: l(s),
      "virtual-triggering": E.virtualTriggering,
      class: N(l(o).e("trigger")),
      onBlur: l(g),
      onClick: l(h),
      onContextmenu: l(I),
      onFocus: l(S),
      onMouseenter: l(m),
      onMouseleave: l(f),
      onKeydown: l(_)
    }, {
      default: q(() => [
        re(E.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var l0 = /* @__PURE__ */ _e(i0, [["__file", "trigger.vue"]]);
const u0 = he({
  to: {
    type: te([String, Object]),
    required: !0
  },
  disabled: Boolean
}), c0 = /* @__PURE__ */ G({
  __name: "teleport",
  props: u0,
  setup(e) {
    return (t, n) => t.disabled ? re(t.$slots, "default", { key: 0 }) : (w(), Y(Hu, {
      key: 1,
      to: t.to
    }, [
      re(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var d0 = /* @__PURE__ */ _e(c0, [["__file", "teleport.vue"]]);
const f0 = nt(d0), Nl = () => {
  const e = ns(), t = dl(), n = b(() => `${e.value}-popper-container-${t.prefix}`), o = b(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, p0 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, m0 = () => {
  const { id: e, selector: t } = Nl();
  return ju(() => {
    Re && (document.body.querySelector(t.value) || p0(e.value));
  }), {
    id: e,
    selector: t
  };
}, h0 = G({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), v0 = /* @__PURE__ */ G({
  ...h0,
  props: Is,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Nl(), a = Ce("tooltip"), r = M();
    let s;
    const {
      controlled: i,
      id: u,
      open: c,
      trigger: d,
      onClose: p,
      onOpen: v,
      onShow: m,
      onHide: f,
      onBeforeShow: h,
      onBeforeHide: S
    } = ye(Os, void 0), g = b(() => n.transition || `${a.namespace.value}-fade-in-linear`), I = b(() => n.persistent);
    Ct(() => {
      s?.();
    });
    const _ = b(() => l(I) ? !0 : l(c)), E = b(() => n.disabled ? !1 : l(c)), T = b(() => n.appendTo || o.value), P = b(() => {
      var A;
      return (A = n.style) != null ? A : {};
    }), L = M(!0), Z = () => {
      f(), z() && Et(document.body), L.value = !0;
    }, U = () => {
      if (l(i))
        return !0;
    }, Q = Pt(U, () => {
      n.enterable && l(d) === "hover" && v();
    }), k = Pt(U, () => {
      l(d) === "hover" && p();
    }), x = () => {
      var A, ee;
      (ee = (A = r.value) == null ? void 0 : A.updatePopper) == null || ee.call(A), h?.();
    }, j = () => {
      S?.();
    }, se = () => {
      m(), s = _m(b(() => {
        var A;
        return (A = r.value) == null ? void 0 : A.popperContentRef;
      }), () => {
        if (l(i))
          return;
        l(d) !== "hover" && p();
      });
    }, O = () => {
      n.virtualTriggering || p();
    }, z = (A) => {
      var ee;
      const X = (ee = r.value) == null ? void 0 : ee.popperContentRef, le = A?.relatedTarget || document.activeElement;
      return X?.contains(le);
    };
    return ie(() => l(c), (A) => {
      A ? L.value = !1 : s?.();
    }, {
      flush: "post"
    }), ie(() => n.content, () => {
      var A, ee;
      (ee = (A = r.value) == null ? void 0 : A.updatePopper) == null || ee.call(A);
    }), t({
      contentRef: r,
      isFocusInsideContent: z
    }), (A, ee) => (w(), Y(l(f0), {
      disabled: !A.teleported,
      to: l(T)
    }, {
      default: q(() => [
        B(zn, {
          name: l(g),
          onAfterLeave: Z,
          onBeforeEnter: x,
          onAfterEnter: se,
          onBeforeLeave: j
        }, {
          default: q(() => [
            l(_) ? Ye((w(), Y(l(Gg), qt({
              key: 0,
              id: l(u),
              ref_key: "contentRef",
              ref: r
            }, A.$attrs, {
              "aria-label": A.ariaLabel,
              "aria-hidden": L.value,
              "boundaries-padding": A.boundariesPadding,
              "fallback-placements": A.fallbackPlacements,
              "gpu-acceleration": A.gpuAcceleration,
              offset: A.offset,
              placement: A.placement,
              "popper-options": A.popperOptions,
              strategy: A.strategy,
              effect: A.effect,
              enterable: A.enterable,
              pure: A.pure,
              "popper-class": A.popperClass,
              "popper-style": [A.popperStyle, l(P)],
              "reference-el": A.referenceEl,
              "trigger-target-el": A.triggerTargetEl,
              visible: l(E),
              "z-index": A.zIndex,
              onMouseenter: l(Q),
              onMouseleave: l(k),
              onBlur: O,
              onClose: l(p)
            }), {
              default: q(() => [
                re(A.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [At, l(E)]
            ]) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var g0 = /* @__PURE__ */ _e(v0, [["__file", "content.vue"]]);
const y0 = G({
  name: "ElTooltip"
}), b0 = /* @__PURE__ */ G({
  ...y0,
  props: o0,
  emits: a0,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    m0();
    const a = ma(), r = M(), s = M(), i = () => {
      var g;
      const I = l(r);
      I && ((g = I.popperInstanceRef) == null || g.update());
    }, u = M(!1), c = M(), { show: d, hide: p, hasUpdateHandler: v } = n0({
      indicator: u,
      toggleReason: c
    }), { onOpen: m, onClose: f } = Yg({
      showAfter: wt(o, "showAfter"),
      hideAfter: wt(o, "hideAfter"),
      autoClose: wt(o, "autoClose"),
      open: d,
      close: p
    }), h = b(() => Uo(o.visible) && !v.value);
    ht(Os, {
      controlled: h,
      id: a,
      open: es(u),
      trigger: wt(o, "trigger"),
      onOpen: (g) => {
        m(g);
      },
      onClose: (g) => {
        f(g);
      },
      onToggle: (g) => {
        l(u) ? f(g) : m(g);
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
    }), ie(() => o.disabled, (g) => {
      g && u.value && (u.value = !1);
    });
    const S = (g) => {
      var I;
      return (I = s.value) == null ? void 0 : I.isFocusInsideContent(g);
    };
    return Wu(() => u.value && p()), t({
      popperRef: r,
      contentRef: s,
      isFocusInsideContent: S,
      updatePopper: i,
      onOpen: m,
      onClose: f,
      hide: p
    }), (g, I) => (w(), Y(l(Zg), {
      ref_key: "popperRef",
      ref: r,
      role: g.role
    }, {
      default: q(() => [
        B(l0, {
          disabled: g.disabled,
          trigger: g.trigger,
          "trigger-keys": g.triggerKeys,
          "virtual-ref": g.virtualRef,
          "virtual-triggering": g.virtualTriggering
        }, {
          default: q(() => [
            g.$slots.default ? re(g.$slots, "default", { key: 0 }) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        B(g0, {
          ref_key: "contentRef",
          ref: s,
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
            re(g.$slots, "content", {}, () => [
              g.rawContent ? (w(), R("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, ["innerHTML"])) : (w(), R("span", { key: 1 }, K(g.content), 1))
            ]),
            g.showArrow ? (w(), Y(l(lv), {
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
var w0 = /* @__PURE__ */ _e(b0, [["__file", "tooltip.vue"]]);
const $s = nt(w0), _0 = he({
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
}), S0 = G({
  name: "ElBadge"
}), k0 = /* @__PURE__ */ G({
  ...S0,
  props: _0,
  setup(e, { expose: t }) {
    const n = e, o = Ce("badge"), a = b(() => n.isDot ? "" : pe(n.value) && pe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), r = b(() => {
      var s, i, u, c, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: uo(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: uo((c = (u = n.offset) == null ? void 0 : u[1]) != null ? c : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: a
    }), (s, i) => (w(), R("div", {
      class: N(l(o).b())
    }, [
      re(s.$slots, "default"),
      B(zn, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: q(() => [
          Ye(y("sup", {
            class: N([
              l(o).e("content"),
              l(o).em("content", s.type),
              l(o).is("fixed", !!s.$slots.default),
              l(o).is("dot", s.isDot),
              l(o).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: we(l(r))
          }, [
            re(s.$slots, "content", { value: l(a) }, () => [
              on(K(l(a)), 1)
            ])
          ], 6), [
            [At, !s.hidden && (l(a) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var C0 = /* @__PURE__ */ _e(k0, [["__file", "badge.vue"]]);
const T0 = nt(C0), E0 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Wa = he({
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
    values: Ji
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), P0 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, O0 = G({
  name: "ElTag"
}), I0 = /* @__PURE__ */ G({
  ...O0,
  props: Wa,
  emits: P0,
  setup(e, { emit: t }) {
    const n = e, o = go(), a = Ce("tag"), r = b(() => {
      const { type: c, hit: d, effect: p, closable: v, round: m } = n;
      return [
        a.b(),
        a.is("closable", v),
        a.m(c || "primary"),
        a.m(o.value),
        a.m(p),
        a.is("hit", d),
        a.is("round", m)
      ];
    }), s = (c) => {
      t("close", c);
    }, i = (c) => {
      t("click", c);
    }, u = (c) => {
      var d, p, v;
      (v = (p = (d = c?.component) == null ? void 0 : d.subTree) == null ? void 0 : p.component) != null && v.bum && (c.component.subTree.component.bum = null);
    };
    return (c, d) => c.disableTransitions ? (w(), R("span", {
      key: 0,
      class: N(l(r)),
      style: we({ backgroundColor: c.color }),
      onClick: i
    }, [
      y("span", {
        class: N(l(a).e("content"))
      }, [
        re(c.$slots, "default")
      ], 2),
      c.closable ? (w(), Y(l(He), {
        key: 0,
        class: N(l(a).e("close")),
        onClick: Oe(s, ["stop"])
      }, {
        default: q(() => [
          B(l(co))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : H("v-if", !0)
    ], 6)) : (w(), Y(zn, {
      key: 1,
      name: `${l(a).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: u
    }, {
      default: q(() => [
        y("span", {
          class: N(l(r)),
          style: we({ backgroundColor: c.color }),
          onClick: i
        }, [
          y("span", {
            class: N(l(a).e("content"))
          }, [
            re(c.$slots, "default")
          ], 2),
          c.closable ? (w(), Y(l(He), {
            key: 0,
            class: N(l(a).e("close")),
            onClick: Oe(s, ["stop"])
          }, {
            default: q(() => [
              B(l(co))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var $0 = /* @__PURE__ */ _e(I0, [["__file", "tag.vue"]]);
const L0 = nt($0), Ht = /* @__PURE__ */ new Map();
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
function ei(e, t) {
  let n = [];
  return je(t.arg) ? n = t.arg : mt(t.arg) && n.push(t.arg), function(o, a) {
    const r = t.instance.popperRef, s = o.target, i = a?.target, u = !t || !t.instance, c = !s || !i, d = e.contains(s) || e.contains(i), p = e === s, v = n.length && n.some((f) => f?.contains(s)) || n.length && n.includes(i), m = r && (r.contains(s) || r.contains(i));
    u || c || d || p || v || m || t.value(o, a);
  };
}
const x0 = {
  beforeMount(e, t) {
    Ht.has(e) || Ht.set(e, []), Ht.get(e).push({
      documentHandler: ei(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Ht.has(e) || Ht.set(e, []);
    const n = Ht.get(e), o = n.findIndex((r) => r.bindingFn === t.oldValue), a = {
      documentHandler: ei(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, a) : n.push(a);
  },
  unmounted(e) {
    Ht.delete(e);
  }
}, R0 = he({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: te(Object)
  },
  size: Pn,
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
  ...el
}), ct = {};
G({
  name: "ElConfigProvider",
  props: R0,
  setup(e, { slots: t }) {
    ie(() => e.message, (o) => {
      Object.assign(ct, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ol(e);
    return () => re(t, "default", { config: n?.value });
  }
});
const A0 = 100, M0 = 600, ti = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = A0, delay: a = M0 } = $e(n) ? {} : n;
    let r, s;
    const i = () => $e(n) ? n() : n.handler(), u = () => {
      s && (clearTimeout(s), s = void 0), r && (clearInterval(r), r = void 0);
    };
    e.addEventListener("mousedown", (c) => {
      c.button === 0 && (u(), i(), document.addEventListener("mouseup", () => u(), {
        once: !0
      }), s = setTimeout(() => {
        r = setInterval(() => {
          i();
        }, o);
      }, a));
    });
  }
}, z0 = he({
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
  size: Pn,
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
  ...cn(["ariaLabel"])
}), N0 = {
  [Jt]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Rt]: (e) => pe(e) || xt(e),
  [xe]: (e) => pe(e) || xt(e)
}, B0 = G({
  name: "ElInputNumber"
}), F0 = /* @__PURE__ */ G({
  ...B0,
  props: z0,
  emits: N0,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: a } = da(), r = Ce("input-number"), s = M(), i = Mt({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: u } = ha(), c = b(() => pe(o.modelValue) && o.modelValue <= o.min), d = b(() => pe(o.modelValue) && o.modelValue >= o.max), p = b(() => {
      const O = g(o.step);
      return ft(o.precision) ? Math.max(g(o.modelValue), O) : (O > o.precision, o.precision);
    }), v = b(() => o.controls && o.controlsPosition === "right"), m = go(), f = pl(), h = b(() => {
      if (i.userInput !== null)
        return i.userInput;
      let O = i.currentValue;
      if (xt(O))
        return "";
      if (pe(O)) {
        if (Number.isNaN(O))
          return "";
        ft(o.precision) || (O = O.toFixed(o.precision));
      }
      return O;
    }), S = (O, z) => {
      if (ft(z) && (z = p.value), z === 0)
        return Math.round(O);
      let A = String(O);
      const ee = A.indexOf(".");
      if (ee === -1 || !A.replace(".", "").split("")[ee + z])
        return O;
      const ve = A.length;
      return A.charAt(ve - 1) === "5" && (A = `${A.slice(0, Math.max(0, ve - 1))}6`), Number.parseFloat(Number(A).toFixed(z));
    }, g = (O) => {
      if (xt(O))
        return 0;
      const z = O.toString(), A = z.indexOf(".");
      let ee = 0;
      return A !== -1 && (ee = z.length - A - 1), ee;
    }, I = (O, z = 1) => pe(O) ? S(O + o.step * z) : i.currentValue, _ = () => {
      if (o.readonly || f.value || d.value)
        return;
      const O = Number(h.value) || 0, z = I(O);
      P(z), n(Rt, i.currentValue), j();
    }, E = () => {
      if (o.readonly || f.value || c.value)
        return;
      const O = Number(h.value) || 0, z = I(O, -1);
      P(z), n(Rt, i.currentValue), j();
    }, T = (O, z) => {
      const { max: A, min: ee, step: X, precision: le, stepStrictly: ve, valueOnClear: be } = o;
      A < ee && ds("InputNumber", "min should not be greater than max.");
      let J = Number(O);
      if (xt(O) || Number.isNaN(J))
        return null;
      if (O === "") {
        if (be === null)
          return null;
        J = Fe(be) ? { min: ee, max: A }[be] : be;
      }
      return ve && (J = S(Math.round(J / X) * X, le), J !== O && z && n(xe, J)), ft(le) || (J = S(J, le)), (J > A || J < ee) && (J = J > A ? A : ee, z && n(xe, J)), J;
    }, P = (O, z = !0) => {
      var A;
      const ee = i.currentValue, X = T(O);
      if (!z) {
        n(xe, X);
        return;
      }
      ee === X && O || (i.userInput = null, n(xe, X), ee !== X && n(Jt, X, ee), o.validateEvent && ((A = u?.validate) == null || A.call(u, "change").catch((le) => void 0)), i.currentValue = X);
    }, L = (O) => {
      i.userInput = O;
      const z = O === "" ? null : Number(O);
      n(Rt, z), P(z, !1);
    }, Z = (O) => {
      const z = O !== "" ? Number(O) : "";
      (pe(z) && !Number.isNaN(z) || O === "") && P(z), j(), i.userInput = null;
    }, U = () => {
      var O, z;
      (z = (O = s.value) == null ? void 0 : O.focus) == null || z.call(O);
    }, Q = () => {
      var O, z;
      (z = (O = s.value) == null ? void 0 : O.blur) == null || z.call(O);
    }, k = (O) => {
      n("focus", O);
    }, x = (O) => {
      var z, A;
      i.userInput = null, ul() && i.currentValue === null && ((z = s.value) != null && z.input) && (s.value.input.value = ""), n("blur", O), o.validateEvent && ((A = u?.validate) == null || A.call(u, "blur").catch((ee) => void 0));
    }, j = () => {
      i.currentValue !== o.modelValue && (i.currentValue = o.modelValue);
    }, se = (O) => {
      document.activeElement === O.target && O.preventDefault();
    };
    return ie(() => o.modelValue, (O, z) => {
      const A = T(O, !0);
      i.userInput === null && A !== z && (i.currentValue = A);
    }, { immediate: !0 }), Pe(() => {
      var O;
      const { min: z, max: A, modelValue: ee } = o, X = (O = s.value) == null ? void 0 : O.input;
      if (X.setAttribute("role", "spinbutton"), Number.isFinite(A) ? X.setAttribute("aria-valuemax", String(A)) : X.removeAttribute("aria-valuemax"), Number.isFinite(z) ? X.setAttribute("aria-valuemin", String(z)) : X.removeAttribute("aria-valuemin"), X.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), X.setAttribute("aria-disabled", String(f.value)), !pe(ee) && ee != null) {
        let le = Number(ee);
        Number.isNaN(le) && (le = null), n(xe, le);
      }
      X.addEventListener("wheel", se, { passive: !1 });
    }), Ci(() => {
      var O, z;
      const A = (O = s.value) == null ? void 0 : O.input;
      A?.setAttribute("aria-valuenow", `${(z = i.currentValue) != null ? z : ""}`);
    }), t({
      focus: U,
      blur: Q
    }), (O, z) => (w(), R("div", {
      class: N([
        l(r).b(),
        l(r).m(l(m)),
        l(r).is("disabled", l(f)),
        l(r).is("without-controls", !O.controls),
        l(r).is("controls-right", l(v))
      ]),
      onDragstart: Oe(() => {
      }, ["prevent"])
    }, [
      O.controls ? Ye((w(), R("span", {
        key: 0,
        role: "button",
        "aria-label": l(a)("el.inputNumber.decrease"),
        class: N([l(r).e("decrease"), l(r).is("disabled", l(c))]),
        onKeydown: Ot(E, ["enter"])
      }, [
        re(O.$slots, "decrease-icon", {}, () => [
          B(l(He), null, {
            default: q(() => [
              l(v) ? (w(), Y(l(sl), { key: 0 })) : (w(), Y(l(ph), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(ti), E]
      ]) : H("v-if", !0),
      O.controls ? Ye((w(), R("span", {
        key: 1,
        role: "button",
        "aria-label": l(a)("el.inputNumber.increase"),
        class: N([l(r).e("increase"), l(r).is("disabled", l(d))]),
        onKeydown: Ot(_, ["enter"])
      }, [
        re(O.$slots, "increase-icon", {}, () => [
          B(l(He), null, {
            default: q(() => [
              l(v) ? (w(), Y(l(Xm), { key: 0 })) : (w(), Y(l(gh), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(ti), _]
      ]) : H("v-if", !0),
      B(l(hs), {
        id: O.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: O.step,
        "model-value": l(h),
        placeholder: O.placeholder,
        readonly: O.readonly,
        disabled: l(f),
        size: l(m),
        max: O.max,
        min: O.min,
        name: O.name,
        "aria-label": O.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          Ot(Oe(_, ["prevent"]), ["up"]),
          Ot(Oe(E, ["prevent"]), ["down"])
        ],
        onBlur: x,
        onFocus: k,
        onInput: L,
        onChange: Z
      }, Uu({
        _: 2
      }, [
        O.$slots.prefix ? {
          name: "prefix",
          fn: q(() => [
            re(O.$slots, "prefix")
          ])
        } : void 0,
        O.$slots.suffix ? {
          name: "suffix",
          fn: q(() => [
            re(O.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var V0 = /* @__PURE__ */ _e(F0, [["__file", "input-number.vue"]]);
const D0 = nt(V0);
function H0() {
  const e = Zt(), t = M(0), n = 11, o = b(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return bt(e, () => {
    var r, s;
    t.value = (s = (r = e.value) == null ? void 0 : r.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: o
  };
}
const Bl = Symbol("ElSelectGroup"), ya = Symbol("ElSelect");
function j0(e, t) {
  const n = ye(ya), o = ye(Bl, { disabled: !1 }), a = b(() => d(Kt(n.props.modelValue), e.value)), r = b(() => {
    var m;
    if (n.props.multiple) {
      const f = Kt((m = n.props.modelValue) != null ? m : []);
      return !a.value && f.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = b(() => e.label || (qe(e.value) ? "" : e.value)), i = b(() => e.value || e.label || ""), u = b(() => e.disabled || t.groupDisabled || r.value), c = Ue(), d = (m = [], f) => {
    if (qe(e.value)) {
      const h = n.props.valueKey;
      return m && m.some((S) => Ku(Gt(S, h)) === Gt(f, h));
    } else
      return m && m.includes(f);
  }, p = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, v = (m) => {
    const f = new RegExp(E0(m), "i");
    t.visible = f.test(s.value) || e.created;
  };
  return ie(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ie(() => e.value, (m, f) => {
    const { remote: h, valueKey: S } = n.props;
    if ((h ? m !== f : !Qn(m, f)) && (n.onOptionDestroy(f, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !h) {
      if (S && qe(m) && qe(f) && m[S] === f[S])
        return;
      n.setSelected();
    }
  }), ie(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: a,
    isDisabled: u,
    hoverItem: p,
    updateOption: v
  };
}
const W0 = G({
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
    const t = Ce("select"), n = ma(), o = b(() => [
      t.be("dropdown", "item"),
      t.is("disabled", l(i)),
      t.is("selected", l(s)),
      t.is("hovering", l(v))
    ]), a = Mt({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hover: !1
    }), {
      currentLabel: r,
      itemSelected: s,
      isDisabled: i,
      select: u,
      hoverItem: c,
      updateOption: d
    } = j0(e, a), { visible: p, hover: v } = Tn(a), m = Ue().proxy;
    u.onOptionCreate(m), Ct(() => {
      const h = m.value, { selected: S } = u.states, g = S.some((I) => I.value === m.value);
      Se(() => {
        u.states.cachedOptions.get(h) === m && !g && u.states.cachedOptions.delete(h);
      }), u.onOptionDestroy(h, m);
    });
    function f() {
      i.value || u.handleOptionSelect(m);
    }
    return {
      ns: t,
      id: n,
      containerKls: o,
      currentLabel: r,
      itemSelected: s,
      isDisabled: i,
      select: u,
      hoverItem: c,
      updateOption: d,
      visible: p,
      hover: v,
      selectOptionClick: f,
      states: a
    };
  }
});
function U0(e, t, n, o, a, r) {
  return Ye((w(), R("li", {
    id: e.id,
    class: N(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Oe(e.selectOptionClick, ["stop"])
  }, [
    re(e.$slots, "default", {}, () => [
      y("span", null, K(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [At, e.visible]
  ]);
}
var Ls = /* @__PURE__ */ _e(W0, [["render", U0], ["__file", "option.vue"]]);
const K0 = G({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ye(ya), t = Ce("select"), n = b(() => e.props.popperClass), o = b(() => e.props.multiple), a = b(() => e.props.fitInputWidth), r = M("");
    function s() {
      var i;
      r.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return Pe(() => {
      s(), bt(e.selectRef, s);
    }), {
      ns: t,
      minWidth: r,
      popperClass: n,
      isMultiple: o,
      isFitInputWidth: a
    };
  }
});
function G0(e, t, n, o, a, r) {
  return w(), R("div", {
    class: N([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: we({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (w(), R("div", {
      key: 0,
      class: N(e.ns.be("dropdown", "header"))
    }, [
      re(e.$slots, "header")
    ], 2)) : H("v-if", !0),
    re(e.$slots, "default"),
    e.$slots.footer ? (w(), R("div", {
      key: 1,
      class: N(e.ns.be("dropdown", "footer"))
    }, [
      re(e.$slots, "footer")
    ], 2)) : H("v-if", !0)
  ], 6);
}
var Z0 = /* @__PURE__ */ _e(K0, [["render", G0], ["__file", "select-dropdown.vue"]]);
const q0 = (e, t) => {
  const { t: n } = da(), o = ma(), a = Ce("select"), r = Ce("input"), s = Mt({
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
  }), i = M(null), u = M(null), c = M(null), d = M(null), p = M(null), v = M(null), m = M(null), f = M(null), h = M(null), S = M(null), g = M(null), {
    isComposing: I,
    handleCompositionStart: _,
    handleCompositionUpdate: E,
    handleCompositionEnd: T
  } = hl({
    afterComposition: (C) => Vt(C)
  }), { wrapperRef: P, isFocused: L, handleBlur: Z } = ml(p, {
    beforeFocus() {
      return z.value;
    },
    afterFocus() {
      e.automaticDropdown && !U.value && (U.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(C) {
      var W, ue;
      return ((W = c.value) == null ? void 0 : W.isFocusInsideContent(C)) || ((ue = d.value) == null ? void 0 : ue.isFocusInsideContent(C));
    },
    afterBlur() {
      U.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), U = M(!1), Q = M(), { form: k, formItem: x } = ha(), { inputId: j } = ms(e, {
    formItemContext: x
  }), { valueOnClear: se, isEmptyValue: O } = jm(e), z = b(() => e.disabled || k?.disabled), A = b(() => je(e.modelValue) ? e.modelValue.length > 0 : !O(e.modelValue)), ee = b(() => {
    var C;
    return (C = k?.statusIcon) != null ? C : !1;
  }), X = b(() => e.clearable && !z.value && s.inputHovering && A.value), le = b(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), ve = b(() => a.is("reverse", le.value && U.value)), be = b(() => x?.validateState || ""), J = b(() => ll[be.value]), de = b(() => e.remote ? 300 : 0), ge = b(() => e.remote && !s.inputValue && s.options.size === 0), Ee = b(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && ae.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), ae = b(() => me.value.filter((C) => C.visible).length), me = b(() => {
    const C = Array.from(s.options.values()), W = [];
    return s.optionValues.forEach((ue) => {
      const Me = C.findIndex((Qe) => Qe.value === ue);
      Me > -1 && W.push(C[Me]);
    }), W.length >= C.length ? W : C;
  }), Be = b(() => Array.from(s.cachedOptions.values())), V = b(() => {
    const C = me.value.filter((W) => !W.created).some((W) => W.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !C;
  }), oe = () => {
    e.filterable && $e(e.filterMethod) || e.filterable && e.remote && $e(e.remoteMethod) || me.value.forEach((C) => {
      var W;
      (W = C.updateOption) == null || W.call(C, s.inputValue);
    });
  }, ne = go(), Le = b(() => ["small"].includes(ne.value) ? "small" : "default"), De = b({
    get() {
      return U.value && !ge.value;
    },
    set(C) {
      U.value = C;
    }
  }), Ae = b(() => {
    if (e.multiple && !ft(e.modelValue))
      return Kt(e.modelValue).length === 0 && !s.inputValue;
    const C = je(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || ft(C) ? !s.inputValue : !0;
  }), Te = b(() => {
    var C;
    const W = (C = e.placeholder) != null ? C : n("el.select.placeholder");
    return e.multiple || !A.value ? W : s.selectedLabel;
  }), ce = b(() => Va ? null : "mouseenter");
  ie(() => e.modelValue, (C, W) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", Ke("")), Ge(), !Qn(C, W) && e.validateEvent && x?.validate("change").catch((ue) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ie(() => U.value, (C) => {
    C ? Ke(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", C);
  }), ie(() => s.options.entries(), () => {
    Re && (Ge(), e.defaultFirstOption && (e.filterable || e.remote) && ae.value && dn());
  }, {
    flush: "post"
  }), ie([() => s.hoveringIndex, me], ([C]) => {
    pe(C) && C > -1 ? Q.value = me.value[C] || {} : Q.value = {}, me.value.forEach((W) => {
      W.hover = Q.value === W;
    });
  }), Si(() => {
    s.isBeforeHide || oe();
  });
  const Ke = (C) => {
    s.previousQuery === C || I.value || (s.previousQuery = C, e.filterable && $e(e.filterMethod) ? e.filterMethod(C) : e.filterable && e.remote && $e(e.remoteMethod) && e.remoteMethod(C), e.defaultFirstOption && (e.filterable || e.remote) && ae.value ? Se(dn) : Se(fn));
  }, dn = () => {
    const C = me.value.filter((Qe) => Qe.visible && !Qe.disabled && !Qe.states.groupDisabled), W = C.find((Qe) => Qe.created), ue = C[0], Me = me.value.map((Qe) => Qe.value);
    s.hoveringIndex = Fs(Me, W || ue);
  }, Ge = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const W = je(e.modelValue) ? e.modelValue[0] : e.modelValue, ue = yt(W);
      s.selectedLabel = ue.currentLabel, s.selected = [ue];
      return;
    }
    const C = [];
    ft(e.modelValue) || Kt(e.modelValue).forEach((W) => {
      C.push(yt(W));
    }), s.selected = C;
  }, yt = (C) => {
    let W;
    const ue = yc(C);
    for (let pn = s.cachedOptions.size - 1; pn >= 0; pn--) {
      const Dt = Be.value[pn];
      if (ue ? Gt(Dt.value, e.valueKey) === Gt(C, e.valueKey) : Dt.value === C) {
        W = {
          value: C,
          currentLabel: Dt.currentLabel,
          get isDisabled() {
            return Dt.isDisabled;
          }
        };
        break;
      }
    }
    if (W)
      return W;
    const Me = ue ? C.label : C ?? "";
    return {
      value: C,
      currentLabel: Me
    };
  }, fn = () => {
    s.hoveringIndex = me.value.findIndex((C) => s.selected.some((W) => ko(W) === ko(C)));
  }, Qt = () => {
    s.selectionWidth = u.value.getBoundingClientRect().width;
  }, D = () => {
    s.collapseItemWidth = S.value.getBoundingClientRect().width;
  }, fe = () => {
    var C, W;
    (W = (C = c.value) == null ? void 0 : C.updatePopper) == null || W.call(C);
  }, ot = () => {
    var C, W;
    (W = (C = d.value) == null ? void 0 : C.updatePopper) == null || W.call(C);
  }, Ft = () => {
    s.inputValue.length > 0 && !U.value && (U.value = !0), Ke(s.inputValue);
  }, Vt = (C) => {
    if (s.inputValue = C.target.value, e.remote)
      zs();
    else
      return Ft();
  }, zs = Fa(() => {
    Ft();
  }, de.value), Vn = (C) => {
    Qn(e.modelValue, C) || t(Jt, C);
  }, fu = (C) => om(C, (W) => {
    const ue = s.cachedOptions.get(W);
    return ue && !ue.disabled && !ue.states.groupDisabled;
  }), pu = (C) => {
    if (e.multiple && C.code !== Ne.delete && C.target.value.length <= 0) {
      const W = Kt(e.modelValue).slice(), ue = fu(W);
      if (ue < 0)
        return;
      const Me = W[ue];
      W.splice(ue, 1), t(xe, W), Vn(W), t("remove-tag", Me);
    }
  }, mu = (C, W) => {
    const ue = s.selected.indexOf(W);
    if (ue > -1 && !z.value) {
      const Me = Kt(e.modelValue).slice();
      Me.splice(ue, 1), t(xe, Me), Vn(Me), t("remove-tag", W.value);
    }
    C.stopPropagation(), So();
  }, Ns = (C) => {
    C.stopPropagation();
    const W = e.multiple ? [] : se.value;
    if (e.multiple)
      for (const ue of s.selected)
        ue.isDisabled && W.push(ue.value);
    t(xe, W), Vn(W), s.hoveringIndex = -1, U.value = !1, t("clear"), So();
  }, Bs = (C) => {
    var W;
    if (e.multiple) {
      const ue = Kt((W = e.modelValue) != null ? W : []).slice(), Me = Fs(ue, C);
      Me > -1 ? ue.splice(Me, 1) : (e.multipleLimit <= 0 || ue.length < e.multipleLimit) && ue.push(C.value), t(xe, ue), Vn(ue), C.created && Ke(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(xe, C.value), Vn(C.value), U.value = !1;
    So(), !U.value && Se(() => {
      _o(C);
    });
  }, Fs = (C = [], W) => ft(W) ? -1 : qe(W.value) ? C.findIndex((ue) => Qn(Gt(ue, e.valueKey), ko(W))) : C.indexOf(W.value), _o = (C) => {
    var W, ue, Me, Qe, pn;
    const Dt = je(C) ? C[0] : C;
    let Co = null;
    if (Dt?.value) {
      const Dn = me.value.filter((Lu) => Lu.value === Dt.value);
      Dn.length > 0 && (Co = Dn[0].$el);
    }
    if (c.value && Co) {
      const Dn = (Qe = (Me = (ue = (W = c.value) == null ? void 0 : W.popperRef) == null ? void 0 : ue.contentRef) == null ? void 0 : Me.querySelector) == null ? void 0 : Qe.call(Me, `.${a.be("dropdown", "wrap")}`);
      Dn && Um(Dn, Co);
    }
    (pn = g.value) == null || pn.handleScroll();
  }, hu = (C) => {
    s.options.set(C.value, C), s.cachedOptions.set(C.value, C);
  }, vu = (C, W) => {
    s.options.get(C) === W && s.options.delete(C);
  }, gu = b(() => {
    var C, W;
    return (W = (C = c.value) == null ? void 0 : C.popperRef) == null ? void 0 : W.contentRef;
  }), yu = () => {
    s.isBeforeHide = !1, Se(() => {
      var C;
      (C = g.value) == null || C.update(), _o(s.selected);
    });
  }, So = () => {
    var C;
    (C = p.value) == null || C.focus();
  }, bu = () => {
    var C;
    if (U.value) {
      U.value = !1, Se(() => {
        var W;
        return (W = p.value) == null ? void 0 : W.blur();
      });
      return;
    }
    (C = p.value) == null || C.blur();
  }, wu = (C) => {
    Ns(C);
  }, _u = (C) => {
    if (U.value = !1, L.value) {
      const W = new FocusEvent("focus", C);
      Se(() => Z(W));
    }
  }, Su = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : U.value = !1;
  }, Vs = () => {
    z.value || (Va && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : U.value = !U.value);
  }, ku = () => {
    if (!U.value)
      Vs();
    else {
      const C = me.value[s.hoveringIndex];
      C && !C.isDisabled && Bs(C);
    }
  }, ko = (C) => qe(C.value) ? Gt(C.value, e.valueKey) : C.value, Cu = b(() => me.value.filter((C) => C.visible).every((C) => C.isDisabled)), Tu = b(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Eu = b(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Ds = (C) => {
    if (!U.value) {
      U.value = !0;
      return;
    }
    if (!(s.options.size === 0 || ae.value === 0 || I.value) && !Cu.value) {
      C === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : C === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const W = me.value[s.hoveringIndex];
      (W.isDisabled || !W.visible) && Ds(C), Se(() => _o(Q.value));
    }
  }, Pu = () => {
    if (!u.value)
      return 0;
    const C = window.getComputedStyle(u.value);
    return Number.parseFloat(C.gap || "6px");
  }, Ou = b(() => {
    const C = Pu();
    return { maxWidth: `${S.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - C : s.selectionWidth}px` };
  }), Iu = b(() => ({ maxWidth: `${s.selectionWidth}px` })), $u = (C) => {
    t("popup-scroll", C);
  };
  return bt(u, Qt), bt(f, fe), bt(P, fe), bt(h, ot), bt(S, D), Pe(() => {
    Ge();
  }), {
    inputId: j,
    contentId: o,
    nsSelect: a,
    nsInput: r,
    states: s,
    isFocused: L,
    expanded: U,
    optionsArray: me,
    hoverOption: Q,
    selectSize: ne,
    filteredOptionsCount: ae,
    updateTooltip: fe,
    updateTagTooltip: ot,
    debouncedOnInputChange: zs,
    onInput: Vt,
    deletePrevTag: pu,
    deleteTag: mu,
    deleteSelected: Ns,
    handleOptionSelect: Bs,
    scrollToOption: _o,
    hasModelValue: A,
    shouldShowPlaceholder: Ae,
    currentPlaceholder: Te,
    mouseEnterEventName: ce,
    needStatusIcon: ee,
    showClose: X,
    iconComponent: le,
    iconReverse: ve,
    validateState: be,
    validateIcon: J,
    showNewOption: V,
    updateOptions: oe,
    collapseTagSize: Le,
    setSelected: Ge,
    selectDisabled: z,
    emptyText: Ee,
    handleCompositionStart: _,
    handleCompositionUpdate: E,
    handleCompositionEnd: T,
    onOptionCreate: hu,
    onOptionDestroy: vu,
    handleMenuEnter: yu,
    focus: So,
    blur: bu,
    handleClearClick: wu,
    handleClickOutside: _u,
    handleEsc: Su,
    toggleMenu: Vs,
    selectOption: ku,
    getValueKey: ko,
    navigateOptions: Ds,
    dropdownMenuVisible: De,
    showTagList: Tu,
    collapseTagList: Eu,
    popupScroll: $u,
    tagStyle: Ou,
    collapseTagStyle: Iu,
    popperRef: gu,
    inputRef: p,
    tooltipRef: c,
    tagTooltipRef: d,
    prefixRef: v,
    suffixRef: m,
    selectRef: i,
    wrapperRef: P,
    selectionRef: u,
    scrollbarRef: g,
    menuRef: f,
    tagMenuRef: h,
    collapseItemRef: S
  };
};
var Y0 = G({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ye(ya);
    let o = [];
    return () => {
      var a, r;
      const s = (a = t.default) == null ? void 0 : a.call(t), i = [];
      function u(c) {
        je(c) && c.forEach((d) => {
          var p, v, m, f;
          const h = (p = d?.type || {}) == null ? void 0 : p.name;
          h === "ElOptionGroup" ? u(!Fe(d.children) && !je(d.children) && $e((v = d.children) == null ? void 0 : v.default) ? (m = d.children) == null ? void 0 : m.default() : d.children) : h === "ElOption" ? i.push((f = d.props) == null ? void 0 : f.value) : je(d.children) && u(d.children);
        });
      }
      return s.length && u((r = s[0]) == null ? void 0 : r.children), Qn(i, o) || (o = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const J0 = he({
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
  size: Pn,
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
  teleported: Is.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: On,
    default: pa
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: On,
    default: sl
  },
  tagType: { ...Wa.type, default: "info" },
  tagEffect: { ...Wa.effect, default: "light" },
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
    values: Bn,
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
  ...el,
  ...cn(["ariaLabel"])
}), ni = "ElSelect", X0 = G({
  name: ni,
  componentName: ni,
  components: {
    ElSelectMenu: Z0,
    ElOption: Ls,
    ElOptions: Y0,
    ElTag: L0,
    ElScrollbar: tv,
    ElTooltip: $s,
    ElIcon: He
  },
  directives: { ClickOutside: x0 },
  props: J0,
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
    const n = b(() => {
      const { modelValue: u, multiple: c } = e, d = c ? [] : void 0;
      return je(u) ? c ? u : d : c ? d : u;
    }), o = Mt({
      ...Tn(e),
      modelValue: n
    }), a = q0(o, t), { calculatorRef: r, inputStyle: s } = H0();
    ht(ya, Mt({
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
      calculatorRef: r,
      inputStyle: s
    };
  }
});
function Q0(e, t, n, o, a, r) {
  const s = en("el-tag"), i = en("el-tooltip"), u = en("el-icon"), c = en("el-option"), d = en("el-options"), p = en("el-scrollbar"), v = en("el-select-menu"), m = Gu("click-outside");
  return Ye((w(), R("div", {
    ref: "selectRef",
    class: N([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Zu(e.mouseEnterEventName)]: (f) => e.states.inputHovering = !0,
    onMouseleave: (f) => e.states.inputHovering = !1
  }, [
    B(i, {
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
            onClick: Oe(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (w(), R("div", {
              key: 0,
              ref: "prefixRef",
              class: N(e.nsSelect.e("prefix"))
            }, [
              re(e.$slots, "prefix")
            ], 2)) : H("v-if", !0),
            y("div", {
              ref: "selectionRef",
              class: N([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? re(e.$slots, "tag", { key: 0 }, () => [
                (w(!0), R(Ie, null, st(e.showTagList, (h) => (w(), R("div", {
                  key: e.getValueKey(h),
                  class: N(e.nsSelect.e("selected-item"))
                }, [
                  B(s, {
                    closable: !e.selectDisabled && !h.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: we(e.tagStyle),
                    onClose: (S) => e.deleteTag(S, h)
                  }, {
                    default: q(() => [
                      y("span", {
                        class: N(e.nsSelect.e("tags-text"))
                      }, [
                        re(e.$slots, "label", {
                          label: h.currentLabel,
                          value: h.value
                        }, () => [
                          on(K(h.currentLabel), 1)
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
                      B(s, {
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
                      (w(!0), R(Ie, null, st(e.collapseTagList, (h) => (w(), R("div", {
                        key: e.getValueKey(h),
                        class: N(e.nsSelect.e("selected-item"))
                      }, [
                        B(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !h.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (S) => e.deleteTag(S, h)
                        }, {
                          default: q(() => [
                            y("span", {
                              class: N(e.nsSelect.e("tags-text"))
                            }, [
                              re(e.$slots, "label", {
                                label: h.currentLabel,
                                value: h.value
                              }, () => [
                                on(K(h.currentLabel), 1)
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
                  "onUpdate:modelValue": (h) => e.states.inputValue = h,
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
                  [qu, e.states.inputValue]
                ]),
                e.filterable ? (w(), R("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: N(e.nsSelect.e("input-calculator")),
                  textContent: K(e.states.inputValue)
                }, null, 10, ["textContent"])) : H("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (w(), R("div", {
                key: 1,
                class: N([
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
                  y("span", null, K(e.currentPlaceholder), 1)
                ]) : (w(), R("span", { key: 1 }, K(e.currentPlaceholder), 1))
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
                  (w(), Y(at(e.iconComponent)))
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
                  (w(), Y(at(e.clearIcon)))
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
                  (w(), Y(at(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : H("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: q(() => [
        B(v, { ref: "menuRef" }, {
          default: q(() => [
            e.$slots.header ? (w(), R("div", {
              key: 0,
              class: N(e.nsSelect.be("dropdown", "header")),
              onClick: Oe(() => {
              }, ["stop"])
            }, [
              re(e.$slots, "header")
            ], 10, ["onClick"])) : H("v-if", !0),
            Ye(B(p, {
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
                B(d, null, {
                  default: q(() => [
                    re(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [At, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (w(), R("div", {
              key: 1,
              class: N(e.nsSelect.be("dropdown", "loading"))
            }, [
              re(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (w(), R("div", {
              key: 2,
              class: N(e.nsSelect.be("dropdown", "empty"))
            }, [
              re(e.$slots, "empty", {}, () => [
                y("span", null, K(e.emptyText), 1)
              ])
            ], 2)) : H("v-if", !0),
            e.$slots.footer ? (w(), R("div", {
              key: 3,
              class: N(e.nsSelect.be("dropdown", "footer")),
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
    [m, e.handleClickOutside, e.popperRef]
  ]);
}
var ey = /* @__PURE__ */ _e(X0, [["render", Q0], ["__file", "select.vue"]]);
const ty = G({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Ce("select"), n = M(null), o = Ue(), a = M([]);
    ht(Bl, Mt({
      ...Tn(e)
    }));
    const r = b(() => a.value.some((c) => c.visible === !0)), s = (c) => {
      var d, p;
      return ((d = c.type) == null ? void 0 : d.name) === "ElOption" && !!((p = c.component) != null && p.proxy);
    }, i = (c) => {
      const d = Kt(c), p = [];
      return d.forEach((v) => {
        var m, f;
        s(v) ? p.push(v.component.proxy) : (m = v.children) != null && m.length ? p.push(...i(v.children)) : (f = v.component) != null && f.subTree && p.push(...i(v.component.subTree));
      }), p;
    }, u = () => {
      a.value = i(o.subTree);
    };
    return Pe(() => {
      u();
    }), Om(n, u, {
      attributes: !0,
      subtree: !0,
      childList: !0
    }), {
      groupRef: n,
      visible: r,
      ns: t
    };
  }
});
function ny(e, t, n, o, a, r) {
  return Ye((w(), R("ul", {
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
        re(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [At, e.visible]
  ]);
}
var Fl = /* @__PURE__ */ _e(ty, [["render", ny], ["__file", "option-group.vue"]]);
const xs = nt(ey, {
  Option: Ls,
  OptionGroup: Fl
}), Rs = fs(Ls);
fs(Fl);
const oy = he({
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
}), ay = G({
  name: "ElProgress"
}), sy = /* @__PURE__ */ G({
  ...ay,
  props: oy,
  setup(e) {
    const t = e, n = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, o = Ce("progress"), a = b(() => {
      const _ = {
        width: `${t.percentage}%`,
        animationDuration: `${t.duration}s`
      }, E = I(t.percentage);
      return E.includes("gradient") ? _.background = E : _.backgroundColor = E, _;
    }), r = b(() => (t.strokeWidth / t.width * 100).toFixed(1)), s = b(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(`${50 - Number.parseFloat(r.value) / 2}`, 10) : 0), i = b(() => {
      const _ = s.value, E = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${E ? "" : "-"}${_}
          a ${_} ${_} 0 1 1 0 ${E ? "-" : ""}${_ * 2}
          a ${_} ${_} 0 1 1 0 ${E ? "" : "-"}${_ * 2}
          `;
    }), u = b(() => 2 * Math.PI * s.value), c = b(() => t.type === "dashboard" ? 0.75 : 1), d = b(() => `${-1 * u.value * (1 - c.value) / 2}px`), p = b(() => ({
      strokeDasharray: `${u.value * c.value}px, ${u.value}px`,
      strokeDashoffset: d.value
    })), v = b(() => ({
      strokeDasharray: `${u.value * c.value * (t.percentage / 100)}px, ${u.value}px`,
      strokeDashoffset: d.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), m = b(() => {
      let _;
      return t.color ? _ = I(t.percentage) : _ = n[t.status] || n.default, _;
    }), f = b(() => t.status === "warning" ? il : t.type === "line" ? t.status === "success" ? rl : pa : t.status === "success" ? eh : co), h = b(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), S = b(() => t.format(t.percentage));
    function g(_) {
      const E = 100 / _.length;
      return _.map((P, L) => Fe(P) ? {
        color: P,
        percentage: (L + 1) * E
      } : P).sort((P, L) => P.percentage - L.percentage);
    }
    const I = (_) => {
      var E;
      const { color: T } = t;
      if ($e(T))
        return T(_);
      if (Fe(T))
        return T;
      {
        const P = g(T);
        for (const L of P)
          if (L.percentage > _)
            return L.color;
        return (E = P[P.length - 1]) == null ? void 0 : E.color;
      }
    };
    return (_, E) => (w(), R("div", {
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
      _.type === "line" ? (w(), R("div", {
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
            (_.showText || _.$slots.default) && _.textInside ? (w(), R("div", {
              key: 0,
              class: N(l(o).be("bar", "innerText"))
            }, [
              re(_.$slots, "default", { percentage: _.percentage }, () => [
                y("span", null, K(l(S)), 1)
              ])
            ], 2)) : H("v-if", !0)
          ], 6)
        ], 6)
      ], 2)) : (w(), R("div", {
        key: 1,
        class: N(l(o).b("circle")),
        style: we({ height: `${_.width}px`, width: `${_.width}px` })
      }, [
        (w(), R("svg", { viewBox: "0 0 100 100" }, [
          y("path", {
            class: N(l(o).be("circle", "track")),
            d: l(i),
            stroke: `var(${l(o).cssVarName("fill-color-light")}, #e5e9f2)`,
            "stroke-linecap": _.strokeLinecap,
            "stroke-width": l(r),
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
            "stroke-width": l(r),
            style: we(l(v))
          }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])
        ]))
      ], 6)),
      (_.showText || _.$slots.default) && !_.textInside ? (w(), R("div", {
        key: 2,
        class: N(l(o).e("text")),
        style: we({ fontSize: `${l(h)}px` })
      }, [
        re(_.$slots, "default", { percentage: _.percentage }, () => [
          _.status ? (w(), Y(l(He), { key: 1 }, {
            default: q(() => [
              (w(), Y(at(l(f))))
            ]),
            _: 1
          })) : (w(), R("span", { key: 0 }, K(l(S)), 1))
        ])
      ], 6)) : H("v-if", !0)
    ], 10, ["aria-valuenow"]));
  }
});
var ry = /* @__PURE__ */ _e(sy, [["__file", "progress.vue"]]);
const iy = nt(ry), ly = he({
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
}), uy = he({
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
}), cy = G({
  name: "ElSkeletonItem"
}), dy = /* @__PURE__ */ G({
  ...cy,
  props: uy,
  setup(e) {
    const t = Ce("skeleton");
    return (n, o) => (w(), R("div", {
      class: N([l(t).e("item"), l(t).e(n.variant)])
    }, [
      n.variant === "image" ? (w(), Y(l(hh), { key: 0 })) : H("v-if", !0)
    ], 2));
  }
});
var Yo = /* @__PURE__ */ _e(dy, [["__file", "skeleton-item.vue"]]);
const fy = (e, t = 0) => {
  if (t === 0)
    return e;
  const n = qe(t) && !!t.initVal, o = M(n);
  let a = null;
  const r = (i) => {
    if (ft(i)) {
      o.value = e.value;
      return;
    }
    a && clearTimeout(a), a = setTimeout(() => {
      o.value = e.value;
    }, i);
  }, s = (i) => {
    i === "leading" ? pe(t) ? r(t) : r(t.leading) : qe(t) ? r(t.trailing) : o.value = !1;
  };
  return Pe(() => s("leading")), ie(() => e.value, (i) => {
    s(i ? "leading" : "trailing");
  }), o;
}, py = G({
  name: "ElSkeleton"
}), my = /* @__PURE__ */ G({
  ...py,
  props: ly,
  setup(e, { expose: t }) {
    const n = e, o = Ce("skeleton"), a = fy(wt(n, "loading"), n.throttle);
    return t({
      uiLoading: a
    }), (r, s) => l(a) ? (w(), R("div", qt({
      key: 0,
      class: [l(o).b(), l(o).is("animated", r.animated)]
    }, r.$attrs), [
      (w(!0), R(Ie, null, st(r.count, (i) => (w(), R(Ie, { key: i }, [
        l(a) ? re(r.$slots, "template", { key: i }, () => [
          B(Yo, {
            class: N(l(o).is("first")),
            variant: "p"
          }, null, 8, ["class"]),
          (w(!0), R(Ie, null, st(r.rows, (u) => (w(), Y(Yo, {
            key: u,
            class: N([
              l(o).e("paragraph"),
              l(o).is("last", u === r.rows && r.rows > 1)
            ]),
            variant: "p"
          }, null, 8, ["class"]))), 128))
        ]) : H("v-if", !0)
      ], 64))), 128))
    ], 16)) : re(r.$slots, "default", Yu(qt({ key: 1 }, r.$attrs)));
  }
});
var hy = /* @__PURE__ */ _e(my, [["__file", "skeleton.vue"]]);
const vy = nt(hy, {
  SkeletonItem: Yo
});
fs(Yo);
const Vl = Symbol("sliderContextKey"), gy = he({
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
  size: Pn,
  inputSize: Pn,
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
    values: Bn,
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
  ...cn(["ariaLabel"])
}), Ea = (e) => pe(e) || je(e) && e.every(pe), yy = {
  [xe]: Ea,
  [Rt]: Ea,
  [Jt]: Ea
}, by = he({
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: Boolean,
  tooltipClass: String,
  placement: {
    type: String,
    values: Bn,
    default: "top"
  }
}), wy = {
  [xe]: (e) => pe(e)
}, _y = (e, t, n) => {
  const o = M(), a = M(!1), r = b(() => t.value instanceof Function), s = b(() => r.value && t.value(e.modelValue) || e.modelValue), i = Fa(() => {
    n.value && (a.value = !0);
  }, 50), u = Fa(() => {
    n.value && (a.value = !1);
  }, 50);
  return {
    tooltip: o,
    tooltipVisible: a,
    formatValue: s,
    displayTooltip: i,
    hideTooltip: u
  };
}, Sy = (e, t, n) => {
  const {
    disabled: o,
    min: a,
    max: r,
    step: s,
    showTooltip: i,
    persistent: u,
    precision: c,
    sliderSize: d,
    formatTooltip: p,
    emitChange: v,
    resetSize: m,
    updateDragging: f
  } = ye(Vl), { tooltip: h, tooltipVisible: S, formatValue: g, displayTooltip: I, hideTooltip: _ } = _y(e, p, i), E = M(), T = b(() => `${(e.modelValue - a.value) / (r.value - a.value) * 100}%`), P = b(() => e.vertical ? { bottom: T.value } : { left: T.value }), L = () => {
    t.hovering = !0, I();
  }, Z = () => {
    t.hovering = !1, t.dragging || _();
  }, U = (J) => {
    o.value || (J.preventDefault(), X(J), window.addEventListener("mousemove", le), window.addEventListener("touchmove", le), window.addEventListener("mouseup", ve), window.addEventListener("touchend", ve), window.addEventListener("contextmenu", ve), E.value.focus());
  }, Q = (J) => {
    o.value || (t.newPosition = Number.parseFloat(T.value) + J / (r.value - a.value) * 100, be(t.newPosition), v());
  }, k = () => {
    Q(-s.value);
  }, x = () => {
    Q(s.value);
  }, j = () => {
    Q(-s.value * 4);
  }, se = () => {
    Q(s.value * 4);
  }, O = () => {
    o.value || (be(0), v());
  }, z = () => {
    o.value || (be(100), v());
  }, A = (J) => {
    let de = !0;
    switch (J.code) {
      case Ne.left:
      case Ne.down:
        k();
        break;
      case Ne.right:
      case Ne.up:
        x();
        break;
      case Ne.home:
        O();
        break;
      case Ne.end:
        z();
        break;
      case Ne.pageDown:
        j();
        break;
      case Ne.pageUp:
        se();
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
      t.isClick = !1, I(), m();
      let de;
      const { clientX: ge, clientY: Ee } = ee(J);
      e.vertical ? (t.currentY = Ee, de = (t.startY - t.currentY) / d.value * 100) : (t.currentX = ge, de = (t.currentX - t.startX) / d.value * 100), t.newPosition = t.startPosition + de, be(t.newPosition);
    }
  }, ve = () => {
    t.dragging && (setTimeout(() => {
      t.dragging = !1, t.hovering || _(), t.isClick || be(t.newPosition), v();
    }, 0), window.removeEventListener("mousemove", le), window.removeEventListener("touchmove", le), window.removeEventListener("mouseup", ve), window.removeEventListener("touchend", ve), window.removeEventListener("contextmenu", ve));
  }, be = async (J) => {
    if (J === null || Number.isNaN(+J))
      return;
    J < 0 ? J = 0 : J > 100 && (J = 100);
    const de = 100 / ((r.value - a.value) / s.value);
    let Ee = Math.round(J / de) * de * (r.value - a.value) * 0.01 + a.value;
    Ee = Number.parseFloat(Ee.toFixed(c.value)), Ee !== e.modelValue && n(xe, Ee), !t.dragging && e.modelValue !== t.oldValue && (t.oldValue = e.modelValue), await Se(), t.dragging && I(), h.value.updatePopper();
  };
  return ie(() => t.dragging, (J) => {
    f(J);
  }), We(E, "touchstart", U, { passive: !1 }), {
    disabled: o,
    button: E,
    tooltip: h,
    tooltipVisible: S,
    showTooltip: i,
    persistent: u,
    wrapperStyle: P,
    formatValue: g,
    handleMouseEnter: L,
    handleMouseLeave: Z,
    onButtonDown: U,
    onKeyDown: A,
    setPosition: be
  };
}, ky = G({
  name: "ElSliderButton"
}), Cy = /* @__PURE__ */ G({
  ...ky,
  props: by,
  emits: wy,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Ce("slider"), r = Mt({
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
    }), s = b(() => d.value ? p.value : !1), {
      disabled: i,
      button: u,
      tooltip: c,
      showTooltip: d,
      persistent: p,
      tooltipVisible: v,
      wrapperStyle: m,
      formatValue: f,
      handleMouseEnter: h,
      handleMouseLeave: S,
      onButtonDown: g,
      onKeyDown: I,
      setPosition: _
    } = Sy(o, r, n), { hovering: E, dragging: T } = Tn(r);
    return t({
      onButtonDown: g,
      onKeyDown: I,
      setPosition: _,
      hovering: E,
      dragging: T
    }), (P, L) => (w(), R("div", {
      ref_key: "button",
      ref: u,
      class: N([l(a).e("button-wrapper"), { hover: l(E), dragging: l(T) }]),
      style: we(l(m)),
      tabindex: l(i) ? -1 : 0,
      onMouseenter: l(h),
      onMouseleave: l(S),
      onMousedown: l(g),
      onFocus: l(h),
      onBlur: l(S),
      onKeydown: l(I)
    }, [
      B(l($s), {
        ref_key: "tooltip",
        ref: c,
        visible: l(v),
        placement: P.placement,
        "fallback-placements": ["top", "bottom", "right", "left"],
        "stop-popper-mouse-event": !1,
        "popper-class": P.tooltipClass,
        disabled: !l(d),
        persistent: l(s)
      }, {
        content: q(() => [
          y("span", null, K(l(f)), 1)
        ]),
        default: q(() => [
          y("div", {
            class: N([l(a).e("button"), { hover: l(E), dragging: l(T) }])
          }, null, 2)
        ]),
        _: 1
      }, 8, ["visible", "placement", "popper-class", "disabled", "persistent"])
    ], 46, ["tabindex", "onMouseenter", "onMouseleave", "onMousedown", "onFocus", "onBlur", "onKeydown"]));
  }
});
var oi = /* @__PURE__ */ _e(Cy, [["__file", "button.vue"]]);
const Ty = he({
  mark: {
    type: te([String, Object]),
    default: void 0
  }
});
var Ey = G({
  name: "ElSliderMarker",
  props: Ty,
  setup(e) {
    const t = Ce("slider"), n = b(() => Fe(e.mark) ? e.mark : e.mark.label), o = b(() => Fe(e.mark) ? void 0 : e.mark.style);
    return () => Ti("div", {
      class: t.e("marks-text"),
      style: o.value
    }, n.value);
  }
});
const Py = (e, t, n) => {
  const { form: o, formItem: a } = ha(), r = Zt(), s = M(), i = M(), u = {
    firstButton: s,
    secondButton: i
  }, c = b(() => e.disabled || o?.disabled || !1), d = b(() => Math.min(t.firstValue, t.secondValue)), p = b(() => Math.max(t.firstValue, t.secondValue)), v = b(() => e.range ? `${100 * (p.value - d.value) / (e.max - e.min)}%` : `${100 * (t.firstValue - e.min) / (e.max - e.min)}%`), m = b(() => e.range ? `${100 * (d.value - e.min) / (e.max - e.min)}%` : "0%"), f = b(() => e.vertical ? { height: e.height } : {}), h = b(() => e.vertical ? {
    height: v.value,
    bottom: m.value
  } : {
    width: v.value,
    left: m.value
  }), S = () => {
    r.value && (t.sliderSize = r.value[`client${e.vertical ? "Height" : "Width"}`]);
  }, g = (x) => {
    const j = e.min + x * (e.max - e.min) / 100;
    if (!e.range)
      return s;
    let se;
    return Math.abs(d.value - j) < Math.abs(p.value - j) ? se = t.firstValue < t.secondValue ? "firstButton" : "secondButton" : se = t.firstValue > t.secondValue ? "firstButton" : "secondButton", u[se];
  }, I = (x) => {
    const j = g(x);
    return j.value.setPosition(x), j;
  }, _ = (x) => {
    t.firstValue = x ?? e.min, T(e.range ? [d.value, p.value] : x ?? e.min);
  }, E = (x) => {
    t.secondValue = x, e.range && T([d.value, p.value]);
  }, T = (x) => {
    n(xe, x), n(Rt, x);
  }, P = async () => {
    await Se(), n(Jt, e.range ? [d.value, p.value] : e.modelValue);
  }, L = (x) => {
    var j, se, O, z, A, ee;
    if (c.value || t.dragging)
      return;
    S();
    let X = 0;
    if (e.vertical) {
      const le = (O = (se = (j = x.touches) == null ? void 0 : j.item(0)) == null ? void 0 : se.clientY) != null ? O : x.clientY;
      X = (r.value.getBoundingClientRect().bottom - le) / t.sliderSize * 100;
    } else {
      const le = (ee = (A = (z = x.touches) == null ? void 0 : z.item(0)) == null ? void 0 : A.clientX) != null ? ee : x.clientX, ve = r.value.getBoundingClientRect().left;
      X = (le - ve) / t.sliderSize * 100;
    }
    if (!(X < 0 || X > 100))
      return I(X);
  };
  return {
    elFormItem: a,
    slider: r,
    firstButton: s,
    secondButton: i,
    sliderDisabled: c,
    minValue: d,
    maxValue: p,
    runwayStyle: f,
    barStyle: h,
    resetSize: S,
    setPosition: I,
    emitChange: P,
    onSliderWrapperPrevent: (x) => {
      var j, se;
      ((j = u.firstButton.value) != null && j.dragging || (se = u.secondButton.value) != null && se.dragging) && x.preventDefault();
    },
    onSliderClick: (x) => {
      L(x) && P();
    },
    onSliderDown: async (x) => {
      const j = L(x);
      j && (await Se(), j.value.onButtonDown(x));
    },
    onSliderMarkerDown: (x) => {
      c.value || t.dragging || I(x);
    },
    setFirstValue: _,
    setSecondValue: E
  };
}, Oy = (e, t, n, o) => ({
  stops: b(() => {
    if (!e.showStops || e.min > e.max)
      return [];
    if (e.step === 0)
      return [];
    const s = (e.max - e.min) / e.step, i = 100 * e.step / (e.max - e.min), u = Array.from({ length: s - 1 }).map((c, d) => (d + 1) * i);
    return e.range ? u.filter((c) => c < 100 * (n.value - e.min) / (e.max - e.min) || c > 100 * (o.value - e.min) / (e.max - e.min)) : u.filter((c) => c > 100 * (t.firstValue - e.min) / (e.max - e.min));
  }),
  getStopStyle: (s) => e.vertical ? { bottom: `${s}%` } : { left: `${s}%` }
}), Iy = (e) => b(() => e.marks ? Object.keys(e.marks).map(Number.parseFloat).sort((n, o) => n - o).filter((n) => n <= e.max && n >= e.min).map((n) => ({
  point: n,
  position: (n - e.min) * 100 / (e.max - e.min),
  mark: e.marks[n]
})) : []), $y = (e, t, n, o, a, r) => {
  const s = (c) => {
    a(xe, c), a(Rt, c);
  }, i = () => e.range ? ![n.value, o.value].every((c, d) => c === t.oldValue[d]) : e.modelValue !== t.oldValue, u = () => {
    var c, d;
    e.min > e.max && ds("Slider", "min should not be greater than max.");
    const p = e.modelValue;
    e.range && je(p) ? p[1] < e.min ? s([e.min, e.min]) : p[0] > e.max ? s([e.max, e.max]) : p[0] < e.min ? s([e.min, p[1]]) : p[1] > e.max ? s([p[0], e.max]) : (t.firstValue = p[0], t.secondValue = p[1], i() && (e.validateEvent && ((c = r?.validate) == null || c.call(r, "change").catch((v) => void 0)), t.oldValue = p.slice())) : !e.range && pe(p) && !Number.isNaN(p) && (p < e.min ? s(e.min) : p > e.max ? s(e.max) : (t.firstValue = p, i() && (e.validateEvent && ((d = r?.validate) == null || d.call(r, "change").catch((v) => void 0)), t.oldValue = p)));
  };
  u(), ie(() => t.dragging, (c) => {
    c || u();
  }), ie(() => e.modelValue, (c, d) => {
    t.dragging || je(c) && je(d) && c.every((p, v) => p === d[v]) && t.firstValue === c[0] && t.secondValue === c[1] || u();
  }, {
    deep: !0
  }), ie(() => [e.min, e.max], () => {
    u();
  });
}, Ly = (e, t, n) => {
  const o = M();
  return Pe(async () => {
    e.range ? (je(e.modelValue) ? (t.firstValue = Math.max(e.min, e.modelValue[0]), t.secondValue = Math.min(e.max, e.modelValue[1])) : (t.firstValue = e.min, t.secondValue = e.max), t.oldValue = [t.firstValue, t.secondValue]) : (!pe(e.modelValue) || Number.isNaN(e.modelValue) ? t.firstValue = e.min : t.firstValue = Math.min(e.max, Math.max(e.min, e.modelValue)), t.oldValue = t.firstValue), We(window, "resize", n), await Se(), n();
  }), {
    sliderWrapper: o
  };
}, xy = G({
  name: "ElSlider"
}), Ry = /* @__PURE__ */ G({
  ...xy,
  props: gy,
  emits: yy,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Ce("slider"), { t: r } = da(), s = Mt({
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
      minValue: v,
      maxValue: m,
      runwayStyle: f,
      barStyle: h,
      resetSize: S,
      emitChange: g,
      onSliderWrapperPrevent: I,
      onSliderClick: _,
      onSliderDown: E,
      onSliderMarkerDown: T,
      setFirstValue: P,
      setSecondValue: L
    } = Py(o, s, n), { stops: Z, getStopStyle: U } = Oy(o, s, v, m), { inputId: Q, isLabeledByFormItem: k } = ms(o, {
      formItemContext: i
    }), x = go(), j = b(() => o.inputSize || x.value), se = b(() => o.ariaLabel || r("el.slider.defaultLabel", {
      min: o.min,
      max: o.max
    })), O = b(() => o.range ? o.rangeStartLabel || r("el.slider.defaultRangeStartLabel") : se.value), z = b(() => o.formatValueText ? o.formatValueText(J.value) : `${J.value}`), A = b(() => o.rangeEndLabel || r("el.slider.defaultRangeEndLabel")), ee = b(() => o.formatValueText ? o.formatValueText(de.value) : `${de.value}`), X = b(() => [
      a.b(),
      a.m(x.value),
      a.is("vertical", o.vertical),
      { [a.m("with-input")]: o.showInput }
    ]), le = Iy(o);
    $y(o, s, v, m, n, i);
    const ve = b(() => {
      const ae = [o.min, o.max, o.step].map((me) => {
        const Be = `${me}`.split(".")[1];
        return Be ? Be.length : 0;
      });
      return Math.max.apply(null, ae);
    }), { sliderWrapper: be } = Ly(o, s, S), { firstValue: J, secondValue: de, sliderSize: ge } = Tn(s), Ee = (ae) => {
      s.dragging = ae;
    };
    return We(be, "touchstart", I, {
      passive: !1
    }), We(be, "touchmove", I, {
      passive: !1
    }), ht(Vl, {
      ...Tn(o),
      sliderSize: ge,
      disabled: p,
      precision: ve,
      emitChange: g,
      resetSize: S,
      updateDragging: Ee
    }), t({
      onSliderClick: _
    }), (ae, me) => {
      var Be, V;
      return w(), R("div", {
        id: ae.range ? l(Q) : void 0,
        ref_key: "sliderWrapper",
        ref: be,
        class: N(l(X)),
        role: ae.range ? "group" : void 0,
        "aria-label": ae.range && !l(k) ? l(se) : void 0,
        "aria-labelledby": ae.range && l(k) ? (Be = l(i)) == null ? void 0 : Be.labelId : void 0
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
          onMousedown: l(E),
          onTouchstartPassive: l(E)
        }, [
          y("div", {
            class: N(l(a).e("bar")),
            style: we(l(h))
          }, null, 6),
          B(oi, {
            id: ae.range ? void 0 : l(Q),
            ref_key: "firstButton",
            ref: c,
            "model-value": l(J),
            vertical: ae.vertical,
            "tooltip-class": ae.tooltipClass,
            placement: ae.placement,
            role: "slider",
            "aria-label": ae.range || !l(k) ? l(O) : void 0,
            "aria-labelledby": !ae.range && l(k) ? (V = l(i)) == null ? void 0 : V.labelId : void 0,
            "aria-valuemin": ae.min,
            "aria-valuemax": ae.range ? l(de) : ae.max,
            "aria-valuenow": l(J),
            "aria-valuetext": l(z),
            "aria-orientation": ae.vertical ? "vertical" : "horizontal",
            "aria-disabled": l(p),
            "onUpdate:modelValue": l(P)
          }, null, 8, ["id", "model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-labelledby", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"]),
          ae.range ? (w(), Y(oi, {
            key: 0,
            ref_key: "secondButton",
            ref: d,
            "model-value": l(de),
            vertical: ae.vertical,
            "tooltip-class": ae.tooltipClass,
            placement: ae.placement,
            role: "slider",
            "aria-label": l(A),
            "aria-valuemin": l(J),
            "aria-valuemax": ae.max,
            "aria-valuenow": l(de),
            "aria-valuetext": l(ee),
            "aria-orientation": ae.vertical ? "vertical" : "horizontal",
            "aria-disabled": l(p),
            "onUpdate:modelValue": l(L)
          }, null, 8, ["model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"])) : H("v-if", !0),
          ae.showStops ? (w(), R("div", { key: 1 }, [
            (w(!0), R(Ie, null, st(l(Z), (oe, ne) => (w(), R("div", {
              key: ne,
              class: N(l(a).e("stop")),
              style: we(l(U)(oe))
            }, null, 6))), 128))
          ])) : H("v-if", !0),
          l(le).length > 0 ? (w(), R(Ie, { key: 2 }, [
            y("div", null, [
              (w(!0), R(Ie, null, st(l(le), (oe, ne) => (w(), R("div", {
                key: ne,
                style: we(l(U)(oe.position)),
                class: N([l(a).e("stop"), l(a).e("marks-stop")])
              }, null, 6))), 128))
            ]),
            y("div", {
              class: N(l(a).e("marks"))
            }, [
              (w(!0), R(Ie, null, st(l(le), (oe, ne) => (w(), Y(l(Ey), {
                key: ne,
                mark: oe.mark,
                style: we(l(U)(oe.position)),
                onMousedown: Oe((Le) => l(T)(oe.position), ["stop"])
              }, null, 8, ["mark", "style", "onMousedown"]))), 128))
            ], 2)
          ], 64)) : H("v-if", !0)
        ], 46, ["onMousedown", "onTouchstartPassive"]),
        ae.showInput && !ae.range ? (w(), Y(l(D0), {
          key: 0,
          ref: "input",
          "model-value": l(J),
          class: N(l(a).e("input")),
          step: ae.step,
          disabled: l(p),
          controls: ae.showInputControls,
          min: ae.min,
          max: ae.max,
          precision: l(ve),
          debounce: ae.debounce,
          size: l(j),
          "onUpdate:modelValue": l(P),
          onChange: l(g)
        }, null, 8, ["model-value", "class", "step", "disabled", "controls", "min", "max", "precision", "debounce", "size", "onUpdate:modelValue", "onChange"])) : H("v-if", !0)
      ], 10, ["id", "role", "aria-label", "aria-labelledby"]);
    };
  }
});
var Ay = /* @__PURE__ */ _e(Ry, [["__file", "slider.vue"]]);
const My = nt(Ay), Dl = ["success", "info", "warning", "error"], Ve = cl({
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
}), zy = he({
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
    type: On,
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
    values: Dl,
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
}), Ny = {
  destroy: () => !0
}, pt = Ju([]), By = (e) => {
  const t = pt.findIndex((a) => a.id === e), n = pt[t];
  let o;
  return t > 0 && (o = pt[t - 1]), { current: n, prev: o };
}, Fy = (e) => {
  const { prev: t } = By(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Vy = (e, t) => pt.findIndex((o) => o.id === e) > 0 ? 16 : t, Dy = G({
  name: "ElMessage"
}), Hy = /* @__PURE__ */ G({
  ...Dy,
  props: zy,
  emits: Ny,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = Ch, { ns: a, zIndex: r } = nl("message"), { currentZIndex: s, nextZIndex: i } = r, u = M(), c = M(!1), d = M(0);
    let p;
    const v = b(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), m = b(() => {
      const L = n.type;
      return { [a.bm("icon", L)]: L && Go[L] };
    }), f = b(() => n.icon || Go[n.type] || ""), h = b(() => Fy(n.id)), S = b(() => Vy(n.id, n.offset) + h.value), g = b(() => d.value + S.value), I = b(() => ({
      top: `${S.value}px`,
      zIndex: s.value
    }));
    function _() {
      n.duration !== 0 && ({ stop: p } = Wi(() => {
        T();
      }, n.duration));
    }
    function E() {
      p?.();
    }
    function T() {
      c.value = !1;
    }
    function P({ code: L }) {
      L === Ne.esc && T();
    }
    return Pe(() => {
      _(), i(), c.value = !0;
    }), ie(() => n.repeatNum, () => {
      E(), _();
    }), We(document, "keydown", P), bt(u, () => {
      d.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: g,
      close: T
    }), (L, Z) => (w(), Y(zn, {
      name: l(a).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (U) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: q(() => [
        Ye(y("div", {
          id: L.id,
          ref_key: "messageRef",
          ref: u,
          class: N([
            l(a).b(),
            { [l(a).m(L.type)]: L.type },
            l(a).is("center", L.center),
            l(a).is("closable", L.showClose),
            l(a).is("plain", L.plain),
            L.customClass
          ]),
          style: we(l(I)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: _
        }, [
          L.repeatNum > 1 ? (w(), Y(l(T0), {
            key: 0,
            value: L.repeatNum,
            type: l(v),
            class: N(l(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : H("v-if", !0),
          l(f) ? (w(), Y(l(He), {
            key: 1,
            class: N([l(a).e("icon"), l(m)])
          }, {
            default: q(() => [
              (w(), Y(at(l(f))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          re(L.$slots, "default", {}, () => [
            L.dangerouslyUseHTMLString ? (w(), R(Ie, { key: 1 }, [
              H(" Caution here, message could've been compromised, never use user's input as message "),
              y("p", {
                class: N(l(a).e("content")),
                innerHTML: L.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (w(), R("p", {
              key: 0,
              class: N(l(a).e("content"))
            }, K(L.message), 3))
          ]),
          L.showClose ? (w(), Y(l(He), {
            key: 2,
            class: N(l(a).e("closeBtn")),
            onClick: Oe(T, ["stop"])
          }, {
            default: q(() => [
              B(l(o))
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
var jy = /* @__PURE__ */ _e(Hy, [["__file", "message.vue"]]);
let Wy = 1;
const Hl = (e) => {
  const t = !e || Fe(e) || so(e) || $e(e) ? { message: e } : e, n = {
    ...Ve,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Fe(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    mt(o) || (o = document.body), n.appendTo = o;
  }
  return Uo(ct.grouping) && !n.grouping && (n.grouping = ct.grouping), pe(ct.duration) && n.duration === 3e3 && (n.duration = ct.duration), pe(ct.offset) && n.offset === 16 && (n.offset = ct.offset), Uo(ct.showClose) && !n.showClose && (n.showClose = ct.showClose), n;
}, Uy = (e) => {
  const t = pt.indexOf(e);
  if (t === -1)
    return;
  pt.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Ky = ({ appendTo: e, ...t }, n) => {
  const o = `message_${Wy++}`, a = t.onClose, r = document.createElement("div"), s = {
    ...t,
    id: o,
    onClose: () => {
      a?.(), Uy(d);
    },
    onDestroy: () => {
      Do(null, r);
    }
  }, i = B(jy, s, $e(s.message) || so(s.message) ? {
    default: $e(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || Rn._context, Do(i, r), e.appendChild(r.firstElementChild);
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
}, Rn = (e = {}, t) => {
  if (!Re)
    return { close: () => {
    } };
  const n = Hl(e);
  if (n.grouping && pt.length) {
    const a = pt.find(({ vnode: r }) => {
      var s;
      return ((s = r.props) == null ? void 0 : s.message) === n.message;
    });
    if (a)
      return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (pe(ct.max) && pt.length >= ct.max)
    return { close: () => {
    } };
  const o = Ky(n, t);
  return pt.push(o), o.handler;
};
Dl.forEach((e) => {
  Rn[e] = (t = {}, n) => {
    const o = Hl(t);
    return Rn({ ...o, type: e }, n);
  };
});
function Gy(e) {
  for (const t of pt)
    (!e || e === t.props.type) && t.handler.close();
}
Rn.closeAll = Gy;
Rn._context = null;
const Zy = al(Rn, "$message"), jl = [
  "success",
  "info",
  "warning",
  "error"
], qy = he({
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
    type: On
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
    values: [...jl, ""],
    default: ""
  },
  zIndex: Number
}), Yy = {
  destroy: () => !0
}, Jy = G({
  name: "ElNotification"
}), Xy = /* @__PURE__ */ G({
  ...Jy,
  props: qy,
  emits: Yy,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: a } = nl("notification"), { nextZIndex: r, currentZIndex: s } = a, { Close: i } = kh, u = M(!1);
    let c;
    const d = b(() => {
      const _ = n.type;
      return _ && Go[n.type] ? o.m(_) : "";
    }), p = b(() => n.type && Go[n.type] || n.icon), v = b(() => n.position.endsWith("right") ? "right" : "left"), m = b(() => n.position.startsWith("top") ? "top" : "bottom"), f = b(() => {
      var _;
      return {
        [m.value]: `${n.offset}px`,
        zIndex: (_ = n.zIndex) != null ? _ : s.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: c } = Wi(() => {
        u.value && g();
      }, n.duration));
    }
    function S() {
      c?.();
    }
    function g() {
      u.value = !1;
    }
    function I({ code: _ }) {
      _ === Ne.delete || _ === Ne.backspace ? S() : _ === Ne.esc ? u.value && g() : h();
    }
    return Pe(() => {
      h(), r(), u.value = !0;
    }), We(document, "keydown", I), t({
      visible: u,
      close: g
    }), (_, E) => (w(), Y(zn, {
      name: l(o).b("fade"),
      onBeforeLeave: _.onClose,
      onAfterLeave: (T) => _.$emit("destroy"),
      persisted: ""
    }, {
      default: q(() => [
        Ye(y("div", {
          id: _.id,
          class: N([l(o).b(), _.customClass, l(v)]),
          style: we(l(f)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: h,
          onClick: _.onClick
        }, [
          l(p) ? (w(), Y(l(He), {
            key: 0,
            class: N([l(o).e("icon"), l(d)])
          }, {
            default: q(() => [
              (w(), Y(at(l(p))))
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
              re(_.$slots, "default", {}, () => [
                _.dangerouslyUseHTMLString ? (w(), R(Ie, { key: 1 }, [
                  H(" Caution here, message could've been compromised, never use user's input as message "),
                  y("p", { innerHTML: _.message }, null, 8, ["innerHTML"])
                ], 2112)) : (w(), R("p", { key: 0 }, K(_.message), 1))
              ])
            ], 6), [
              [At, _.message]
            ]),
            _.showClose ? (w(), Y(l(He), {
              key: 0,
              class: N(l(o).e("closeBtn")),
              onClick: Oe(g, ["stop"])
            }, {
              default: q(() => [
                B(l(i))
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
var Qy = /* @__PURE__ */ _e(Xy, [["__file", "notification.vue"]]);
const Jo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Ua = 16;
let eb = 1;
const An = function(e = {}, t) {
  if (!Re)
    return { close: () => {
    } };
  (Fe(e) || so(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Jo[n].forEach(({ vm: d }) => {
    var p;
    o += (((p = d.el) == null ? void 0 : p.offsetHeight) || 0) + Ua;
  }), o += Ua;
  const a = `notification_${eb++}`, r = e.onClose, s = {
    ...e,
    offset: o,
    id: a,
    onClose: () => {
      tb(a, n, r);
    }
  };
  let i = document.body;
  mt(e.appendTo) ? i = e.appendTo : Fe(e.appendTo) && (i = document.querySelector(e.appendTo)), mt(i) || (i = document.body);
  const u = document.createElement("div"), c = B(Qy, s, $e(s.message) ? s.message : so(s.message) ? () => s.message : null);
  return c.appContext = ft(t) ? An._context : t, c.props.onDestroy = () => {
    Do(null, u);
  }, Do(c, u), Jo[n].push({ vm: c }), i.appendChild(u.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
jl.forEach((e) => {
  An[e] = (t = {}, n) => ((Fe(t) || so(t)) && (t = {
    message: t
  }), An({ ...t, type: e }, n));
});
function tb(e, t, n) {
  const o = Jo[t], a = o.findIndex(({ vm: c }) => {
    var d;
    return ((d = c.component) == null ? void 0 : d.props.id) === e;
  });
  if (a === -1)
    return;
  const { vm: r } = o[a];
  if (!r)
    return;
  n?.(r);
  const s = r.el.offsetHeight, i = t.split("-")[0];
  o.splice(a, 1);
  const u = o.length;
  if (!(u < 1))
    for (let c = a; c < u; c++) {
      const { el: d, component: p } = o[c].vm, v = Number.parseInt(d.style[i], 10) - s - Ua;
      p.props.offset = v;
    }
}
function nb() {
  for (const e of Object.values(Jo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
An.closeAll = nb;
An._context = null;
const ob = al(An, "$notify");
function ab(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function sb(e, t, n, o, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var zo;
const ut = "__TAURI_TO_IPC_KEY__";
function rb(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function $(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Wl(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class ib {
  get rid() {
    return ab(this, zo, "f");
  }
  constructor(t) {
    zo.set(this, void 0), sb(this, zo, t);
  }
  /**
   * Destroys and cleans up this resource from memory.
   * **You should not call any method on this object anymore and should drop any reference to it.**
   */
  async close() {
    return $("plugin:resources|close", {
      rid: this.rid
    });
  }
}
zo = /* @__PURE__ */ new WeakMap();
var et;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(et || (et = {}));
async function Ul(e, t) {
  await $("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function dt(e, t, n) {
  var o;
  const a = typeof n?.target == "string" ? { kind: "AnyLabel", label: n.target } : (o = n?.target) !== null && o !== void 0 ? o : { kind: "Any" };
  return $("plugin:event|listen", {
    event: e,
    target: a,
    handler: rb(t)
  }).then((r) => async () => Ul(e, r));
}
async function lb(e, t, n) {
  return dt(e, (o) => {
    Ul(e, o.id), t(o);
  }, n);
}
async function Kl(e, t) {
  await $("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function ub(e, t, n) {
  await $("plugin:event|emit_to", {
    target: typeof e == "string" ? { kind: "AnyLabel", label: e } : e,
    event: t,
    payload: n
  });
}
class Gl {
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
    return new no(this.width * t, this.height * t);
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
class no {
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
    return new Gl(this.width / t, this.height / t);
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
    return this.size instanceof Gl ? this.size : this.size.toLogical(t);
  }
  toPhysical(t) {
    return this.size instanceof no ? this.size : this.size.toPhysical(t);
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
class Zl {
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
    return new Zl(this.x / t, this.y / t);
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
class $o {
  constructor(t) {
    this.position = t;
  }
  toLogical(t) {
    return this.position instanceof Zl ? this.position : this.position.toLogical(t);
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
class oo extends ib {
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
    return $("plugin:image|new", {
      rgba: Xo(t),
      width: n,
      height: o
    }).then((a) => new oo(a));
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
    return $("plugin:image|from_bytes", {
      bytes: Xo(t)
    }).then((n) => new oo(n));
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
    return $("plugin:image|from_path", { path: t }).then((n) => new oo(n));
  }
  /** Returns the RGBA data for this image, in row-major order from top to bottom.  */
  async rgba() {
    return $("plugin:image|rgba", {
      rid: this.rid
    }).then((t) => new Uint8Array(t));
  }
  /** Returns the size of this image.  */
  async size() {
    return $("plugin:image|size", { rid: this.rid });
  }
}
function Xo(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof oo ? e.rid : e;
}
var Ka;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Ka || (Ka = {}));
class cb {
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
var ai;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(ai || (ai = {}));
function ql() {
  return new Yl(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Pa() {
  return $("plugin:window|get_all_windows").then((e) => e.map((t) => new Yl(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Oa = ["tauri://created", "tauri://error"];
class Yl {
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
    this.label = t, this.listeners = /* @__PURE__ */ Object.create(null), n?.skip || $("plugin:window|create", {
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
    return (n = (await Pa()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return ql();
  }
  /**
   * Gets a list of instances of `Window` for all available windows.
   */
  static async getAll() {
    return Pa();
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
    for (const t of await Pa())
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
    } : dt(t, n, {
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
    } : lb(t, n, {
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
    if (Oa.includes(t)) {
      for (const o of this.listeners[t] || [])
        o({
          event: t,
          id: -1,
          payload: n
        });
      return;
    }
    return Kl(t, n);
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
    if (Oa.includes(n)) {
      for (const a of this.listeners[n] || [])
        a({
          event: n,
          id: -1,
          payload: o
        });
      return;
    }
    return ub(t, n, o);
  }
  /** @ignore */
  _handleTauriEvent(t, n) {
    return Oa.includes(t) ? (t in this.listeners ? this.listeners[t].push(n) : this.listeners[t] = [n], !0) : !1;
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
    return $("plugin:window|scale_factor", {
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
    return $("plugin:window|inner_position", {
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
    return $("plugin:window|outer_position", {
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
    return $("plugin:window|inner_size", {
      label: this.label
    }).then((t) => new no(t));
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
    return $("plugin:window|outer_size", {
      label: this.label
    }).then((t) => new no(t));
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
    return $("plugin:window|is_fullscreen", {
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
    return $("plugin:window|is_minimized", {
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
    return $("plugin:window|is_maximized", {
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
    return $("plugin:window|is_focused", {
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
    return $("plugin:window|is_decorated", {
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
    return $("plugin:window|is_resizable", {
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
    return $("plugin:window|is_maximizable", {
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
    return $("plugin:window|is_minimizable", {
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
    return $("plugin:window|is_closable", {
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
    return $("plugin:window|is_visible", {
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
    return $("plugin:window|title", {
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
    return $("plugin:window|theme", {
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
    return $("plugin:window|is_always_on_top", {
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
    return $("plugin:window|center", {
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
    return t && (t === Ka.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), $("plugin:window|request_user_attention", {
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
    return $("plugin:window|set_resizable", {
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
    return $("plugin:window|set_enabled", {
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
    return $("plugin:window|is_enabled", {
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
    return $("plugin:window|set_maximizable", {
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
    return $("plugin:window|set_minimizable", {
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
    return $("plugin:window|set_closable", {
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
    return $("plugin:window|set_title", {
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
    return $("plugin:window|maximize", {
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
    return $("plugin:window|unmaximize", {
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
    return $("plugin:window|toggle_maximize", {
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
    return $("plugin:window|minimize", {
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
    return $("plugin:window|unminimize", {
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
    return $("plugin:window|show", {
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
    return $("plugin:window|hide", {
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
    return $("plugin:window|close", {
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
    return $("plugin:window|destroy", {
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
    return $("plugin:window|set_decorations", {
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
    return $("plugin:window|set_shadow", {
      label: this.label,
      value: t
    });
  }
  /**
   * Set window effects.
   */
  async setEffects(t) {
    return $("plugin:window|set_effects", {
      label: this.label,
      value: t
    });
  }
  /**
   * Clear any applied effects if possible.
   */
  async clearEffects() {
    return $("plugin:window|set_effects", {
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
    return $("plugin:window|set_always_on_top", {
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
    return $("plugin:window|set_always_on_bottom", {
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
    return $("plugin:window|set_content_protected", {
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
    return $("plugin:window|set_size", {
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
    return $("plugin:window|set_min_size", {
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
    return $("plugin:window|set_max_size", {
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
    return $("plugin:window|set_size_constraints", {
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
    return $("plugin:window|set_position", {
      label: this.label,
      value: t instanceof $o ? t : new $o(t)
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
    return $("plugin:window|set_fullscreen", {
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
    return $("plugin:window|set_focus", {
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
    return $("plugin:window|set_icon", {
      label: this.label,
      value: Xo(t)
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
    return $("plugin:window|set_skip_taskbar", {
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
    return $("plugin:window|set_cursor_grab", {
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
    return $("plugin:window|set_cursor_visible", {
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
    return $("plugin:window|set_cursor_icon", {
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
    return $("plugin:window|set_background_color", { color: t });
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
    return $("plugin:window|set_cursor_position", {
      label: this.label,
      value: t instanceof $o ? t : new $o(t)
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
    return $("plugin:window|set_ignore_cursor_events", {
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
    return $("plugin:window|start_dragging", {
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
    return $("plugin:window|start_resize_dragging", {
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
    return $("plugin:window|set_badge_count", {
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
    return $("plugin:window|set_badge_label", {
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
    return $("plugin:window|set_overlay_icon", {
      label: this.label,
      value: t ? Xo(t) : void 0
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
    return $("plugin:window|set_progress_bar", {
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
    return $("plugin:window|set_visible_on_all_workspaces", {
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
    return $("plugin:window|set_title_bar_style", {
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
    return $("plugin:window|set_theme", {
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
      n.payload = new no(n.payload), t(n);
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
      const o = new cb(n);
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
    const n = await this.listen(et.DRAG_ENTER, (s) => {
      t({
        ...s,
        payload: {
          type: "enter",
          paths: s.payload.paths,
          position: new Wt(s.payload.position)
        }
      });
    }), o = await this.listen(et.DRAG_OVER, (s) => {
      t({
        ...s,
        payload: {
          type: "over",
          position: new Wt(s.payload.position)
        }
      });
    }), a = await this.listen(et.DRAG_DROP, (s) => {
      t({
        ...s,
        payload: {
          type: "drop",
          paths: s.payload.paths,
          position: new Wt(s.payload.position)
        }
      });
    }), r = await this.listen(et.DRAG_LEAVE, (s) => {
      t({ ...s, payload: { type: "leave" } });
    });
    return () => {
      n(), a(), o(), r();
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
var si;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(si || (si = {}));
var ri;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(ri || (ri = {}));
var ii;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(ii || (ii = {}));
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
      showClose: r = !1
    } = e;
    o === "center" ? Zy({
      message: t,
      type: n,
      duration: a,
      showClose: r,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : ob({
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
}, db = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1680942651462'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3789'%20data-darkreader-inline-fill=''%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M214.101333%20512c0-32.512%205.546667-63.701333%2015.36-92.928L57.173333%20290.218667A491.861333%20491.861333%200%200%200%204.693333%20512c0%2079.701333%2018.858667%20154.88%2052.394667%20221.610667l172.202667-129.066667A290.56%20290.56%200%200%201%20214.101333%20512'%20fill='%23FBBC05'%20p-id='3790'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23967002;'%3e%3c/path%3e%3cpath%20d='M516.693333%20216.192c72.106667%200%20137.258667%2025.002667%20188.458667%2065.962667L854.101333%20136.533333C763.349333%2059.178667%20646.997333%2011.392%20516.693333%2011.392c-202.325333%200-376.234667%20113.28-459.52%20278.826667l172.373334%20128.853333c39.68-118.016%20152.832-202.88%20287.146666-202.88'%20fill='%23EA4335'%20p-id='3791'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23a71d11;'%3e%3c/path%3e%3cpath%20d='M516.693333%20807.808c-134.357333%200-247.509333-84.864-287.232-202.88l-172.288%20128.853333c83.242667%20165.546667%20257.152%20278.826667%20459.52%20278.826667%20124.842667%200%20244.053333-43.392%20333.568-124.757333l-163.584-123.818667c-46.122667%2028.458667-104.234667%2043.776-170.026666%2043.776'%20fill='%2334A853'%20p-id='3792'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%232a8642;'%3e%3c/path%3e%3cpath%20d='M1005.397333%20512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696%2065.962667-51.072%20116.650667-104.533333%20149.632l163.541333%20123.818667c93.994667-85.418667%20155.136-212.650667%20155.136-375.850667'%20fill='%234285F4'%20p-id='3793'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%230943a2;'%3e%3c/path%3e%3c/svg%3e", fb = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='240px'%20height='240px'%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNla'%20x1='11.905'%20x2='17.941'%20y1='1.952'%20y2='40.401'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffc'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNla)'%20d='M17.572,37.076L20,35.619V10.603c0-1.632-0.796-3.161-2.133-4.096L12.36,2.652%20C11.366,1.956,10,2.667,10,3.881V32.5c0,0.22,0.02,0.555,0.033,0.772C10.369,36.867,14.382,38.99,17.572,37.076z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlb'%20x1='14.342'%20x2='34.121'%20y1='41.478'%20y2='25.575'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2333bef0'/%3e%3cstop%20offset='.159'%20stop-color='%2332b9f0'/%3e%3cstop%20offset='.341'%20stop-color='%232facf2'/%3e%3cstop%20offset='.533'%20stop-color='%232a95f4'/%3e%3cstop%20offset='.733'%20stop-color='%232475f6'/%3e%3cstop%20offset='.936'%20stop-color='%231b4cfa'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlb)'%20d='M32.682,27.904L20,35.5v0l-2.428,1.457c-3.191,1.915-7.203-0.209-7.54-3.804%20C10.372,38.922,15.145,43.5,21,43.5c1.963,0,3.888-0.536,5.568-1.551l6.834-4.126c0.817-0.493,1.522-1.075,2.15-1.707%20C37.906,33.415,36.739,28.669,32.682,27.904z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlc'%20x1='24.223'%20x2='45.699'%20y1='17.113'%20y2='38.588'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffd'/%3e%3cstop%20offset='1'%20stop-color='%231de9b6'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlc)'%20d='M33.636,19.568l-7.607-3.803c-1.234-0.617-2.576,0.618-2.064,1.899l1.755,5.886%20c0.499,1.248,1.479,2.242,2.719,2.758L32.5,28c4.057,0.766,5.352,5.251,3.052,8.117C40.399,31.24,40.088,22.794,33.636,19.568z'/%3e%3c/svg%3e", pb = "snippets-code:developer-mode", Jl = "snippets-code:frontend-diagnostics", mb = 240, Wn = "[REDACTED]", No = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${Wn}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${Wn}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  Wn
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${Wn}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${Wn}`
), Xl = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return No(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return No(
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
    return No(String(e));
  }
}, hb = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, vb = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Jl) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, As = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(pb) === "true";
  } catch {
    return !1;
  }
}, gb = (e, t, n) => {
  if (!As() || typeof localStorage > "u") return;
  const o = vb();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: hb(),
    message: No(t),
    data: Xl(n)
  });
  try {
    localStorage.setItem(
      Jl,
      JSON.stringify(o.slice(-mb))
    );
  } catch {
  }
}, yb = () => As(), bb = (e) => e === "error" || As(), Lo = (e, t, n) => {
  gb(e, t, n), bb(e) && $("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Xl(n)
  }).catch(() => {
  });
}, F = {
  info: (e, t, ...n) => {
    Lo("info", e, t);
  },
  error: (e, t) => {
    Lo("error", e, t);
  },
  warn: (e, t) => {
    Lo("warn", e, t);
  },
  debug: (e, t) => {
    yb() && Lo("debug", e, t);
  }
};
function wb(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
}
function Ia(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, o = e.match(/[\u3040-\u30ff]/g), a = o ? o.length : 0, r = e.match(/[\uac00-\ud7af]/g), s = r ? r.length : 0, i = e.match(/[a-zA-Z]/g), u = i ? i.length : 0, d = n + a + s + u;
  return d === 0 ? "unknown" : a >= 3 && a > u && a / d >= 0.2 ? "ja" : s >= 3 && s > n && s > u && s / d >= 0.2 ? "ko" : n > u ? "zh" : u > n ? "en" : "unknown";
}
async function _b() {
  try {
    return await $("get_editor_settings");
  } catch (e) {
    throw new Error(`获取编辑器显示设置失败: ${e}`);
  }
}
async function Sb(e) {
  try {
    await $("update_editor_settings", { settings: e });
  } catch (t) {
    throw new Error(`更新编辑器显示设置失败: ${t}`);
  }
}
const kb = mo("hotkeys", {
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
        const e = await $("get_hotkey_config_map");
        this.pluginHotkeys = e, this.searchHotkey = e.search || "", this.configHotkey = e.config || "", this.translateHotkey = e.translate || "", this.selectionTranslateHotkey = e.selection_translate || "", this.screenshotHotkey = e.screenshot || "", this.screenRecorderHotkey = e.screen_recorder || "", this.darkModeHotkey = e.dark_mode || "", this.wallpaperSwitcherHotkey = e.wallpaper_switcher || "";
      } catch (e) {
        F.error("获取快捷键配置失败:", e);
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
}), Un = mo("theme", {
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
      F.debug(`[主题][ThemeStore] 更新主题：newTheme=${e}`), this.theme = e, this.applyTheme();
    },
    /** 应用主题到 DOM，并同步 systemPrefersDark */
    applyTheme() {
      const e = document.documentElement, t = window.matchMedia("(prefers-color-scheme: dark)").matches;
      F.debug(
        `[主题][ThemeStore] 应用主题到 DOM：theme=${this.theme}, prefersDark=${t}`
      ), this.theme === "auto" && (this.systemPrefersDark = t), this.theme === "dark" || this.theme === "auto" && t ? e.classList.add("dark") : e.classList.remove("dark");
    },
    /**
     * 同步系统主题样式（仅在 auto 模式下生效，不修改 store.theme）
     * 用于响应操作系统主题变化
     */
    syncSystemThemeStyle(e) {
      F.debug(
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
        F.error("从 localStorage 同步主题失败:", n);
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
mo("layout", {
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
const Cb = "https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/main/plugin-registry/marketplace/marketplace.json", Tb = "https://ghfast.top/";
function Eb(e) {
  return e.startsWith("https://github.com/") ? `${Tb}${e}` : e;
}
async function Pb() {
  return await $("get_plugin_states");
}
async function Ob() {
  return await $("get_installed_plugin_manifests");
}
async function Ib(e, t = !1) {
  return await $("install_local_plugin_package", {
    sourcePath: e,
    overwrite: t
  });
}
async function Ql(e, t = !1, n, o, a, r) {
  return await $("install_plugin_package_from_url", {
    expectedSizeBytes: o,
    packageUrl: e,
    packageSubdir: n,
    overwrite: t,
    mirrorUrls: a ?? [],
    pluginId: r
  });
}
async function $b() {
  return await $("get_plugin_install_tasks");
}
const Lb = (e) => {
  try {
    const t = new URL(e);
    return t.searchParams.set("_sc_refresh", `${Date.now()}`), t.toString();
  } catch {
    return e;
  }
};
async function xb(e) {
  return await $("fetch_plugin_marketplace", {
    marketplaceUrl: Lb(e)
  });
}
async function Rb(e, t = !1) {
  await $("uninstall_local_plugin_package", { pluginId: e, deleteData: t });
}
async function Ab(e, t) {
  await $("set_plugin_enabled", { pluginId: e, enabled: t });
}
async function Mb() {
  return await $("get_rapidocr_resource_status");
}
async function zb() {
  return await $(
    "screen_recorder_get_ffmpeg_status"
  );
}
async function eu(e, t) {
  return await $("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
async function $a() {
  await $("install_translation_offline_runtime_resources");
}
const Nb = (e, t, n, o) => ({
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
}), Ut = (e) => typeof e == "object" && e !== null, Bb = (e) => Ut(e) && "manifest" in e && Ut(e.manifest) ? {
  manifest: e.manifest,
  packagePath: typeof e.packagePath == "string" ? e.packagePath : void 0,
  installedAt: typeof e.installedAt == "string" ? e.installedAt : void 0
} : { manifest: e }, Fb = (e) => typeof e == "string" && ["capture", "automation", "search", "sync", "editor", "appearance"].includes(e), Vb = (e) => {
  if (!Ut(e) || e.schemaVersion !== 1 || typeof e.id != "string" || !e.id.trim() || typeof e.version != "string" || !e.version.trim() || e.kind !== "local" || !Ut(e.name) || typeof e.name.i18nKey != "string" || typeof e.name.fallback != "string" || !Ut(e.description) || typeof e.description.i18nKey != "string" || typeof e.description.fallback != "string" || !Fb(e.category) || typeof e.enabledByDefault != "boolean") return null;
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
}, Db = (e) => e.map((t) => {
  const { manifest: n, packagePath: o, installedAt: a } = Bb(t), r = Vb(n);
  if (!r) return null;
  const s = {
    manifest: r,
    packagePath: o ?? ""
  };
  return a && (s.installedAt = a), s;
}).filter((t) => t !== null), tu = (e = []) => {
  const n = [
    ...Db(e).map((a) => Nb(
      a.manifest,
      "local",
      a.packagePath || void 0,
      a.installedAt
    )).sort(Hb)
  ], o = /* @__PURE__ */ new Map();
  for (const a of n)
    o.has(a.id) || o.set(a.id, a);
  return Array.from(o.values());
}, ci = (e) => {
  const t = e.installedAt ? Date.parse(e.installedAt) : NaN;
  return Number.isFinite(t) ? t : 0;
}, Hb = (e, t) => {
  const n = ci(t) - ci(e);
  return n !== 0 ? n : String(e.id).localeCompare(String(t.id));
}, jb = tu(), Qo = jb, Wb = Qo.map((e) => e.id), nu = Qo.reduce((e, t) => (e[t.id] = t.enabledByDefault, e), {}), Ub = (e) => Wb.includes(e);
async function Kb() {
  return await $("local_ai_get_runtime_status");
}
const wn = [], _n = [
  { id: "attachment", labelKey: "settings.attachment.menu", icon: uc }
], Ga = {
  attachment: Qa(() => Promise.resolve().then(() => V_))
}, Sn = [], Bo = [], kn = [], ou = (e) => e.manifest.permissions ?? [], Gb = (e, t) => {
  const n = ou(e);
  return n.includes("command:*") || n.includes(`command:${t}`);
}, Zb = (e, t) => {
  const n = ou(e);
  return n.includes("backend:*") || n.includes(`backend:${t}`);
}, qb = (e, t) => {
  if (!Gb(e, t))
    throw new Error(`插件 ${e.id} 没有调用命令 ${t} 的权限`);
}, Yb = (e, t) => {
  if (!Zb(e, t))
    throw new Error(`插件 ${e.id} 没有调用后端命令 ${t} 的权限`);
}, Za = [], qa = [], Ya = [], Fo = /* @__PURE__ */ new Set(), ea = /* @__PURE__ */ new Map(), ta = /* @__PURE__ */ new Map(), di = /* @__PURE__ */ new Map(), Jb = /* @__PURE__ */ new Set(), fi = /* @__PURE__ */ new Map(), Mn = /* @__PURE__ */ new Map(), na = /* @__PURE__ */ new Set(), oa = /* @__PURE__ */ new Set(), ba = (e) => e.replace(/^[\\/]+|[\\/]+$/g, ""), Xb = (e) => !!e && !e.includes("://") && !e.startsWith("/") && !/^[a-zA-Z]:[\\/]/.test(e) && !ba(e).split(/[\\/]+/).includes(".."), Qb = (e, t) => {
  if (!e.packagePath)
    throw new Error(`插件 ${e.id} 缺少 packagePath`);
  if (!Xb(t))
    throw new Error(
      `插件 ${e.id} 使用了不安全的资源路径: ${t}`
    );
  return `${e.packagePath.replace(/[\\/]+$/g, "")}/${ba(t)}`;
}, Fn = (e, t) => Wl(Qb(e, t)), ew = (e) => {
  const t = ba(e).split(/[\\/]+/);
  return t.pop(), t.join("/");
}, au = (e) => {
  const t = /^([^?#]*)([?#].*)?$/.exec(e);
  return {
    path: t?.[1] ?? e,
    suffix: t?.[2] ?? ""
  };
}, tw = (e, t) => {
  const { path: n } = au(t), o = [
    ...ba(e).split(/[\\/]+/),
    ...n.split(/[\\/]+/)
  ], a = [];
  for (const r of o)
    if (!(!r || r === ".")) {
      if (r === "..") {
        if (!a.length)
          throw new Error(`插件资源路径越界: ${t}`);
        a.pop();
        continue;
      }
      a.push(r);
    }
  return a.join("/");
}, su = (e, t, n) => {
  const { suffix: o } = au(n), a = tw(
    ew(t),
    n
  );
  return `${Fn(e, a)}${o}`;
}, nw = /url\(\s*(['"]?)(.*?)\1\s*\)/gi, ow = (e) => !e || e.startsWith("#") || e.startsWith("/") || e.startsWith("//") || e.startsWith("var(") || /^[a-z][a-z\d+.-]*:/i.test(e), aw = (e, t, n) => n.replace(
  nw,
  (o, a, r) => {
    const s = r.trim();
    return ow(s) ? o : `url("${su(
      e,
      t,
      s
    )}")`;
  }
), sw = [
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
], rw = {
  vue: {
    moduleKey: "vue",
    runtime: xu,
    exportNames: sw
  },
  pinia: {
    moduleKey: "pinia",
    runtime: Qu
  },
  "vue-router": {
    moduleKey: "vueRouter",
    runtime: ec
  },
  "vue-i18n": {
    moduleKey: "vueI18n",
    runtime: Xu
  }
}, iw = /^[A-Za-z_$][\w$]*$/, lw = (e, t, n, o) => {
  const r = (o ?? Object.keys(n)).filter(
    (s) => s !== "default" && s !== "__esModule" && iw.test(s)
  ).map((s) => `export const ${s} = Runtime[${JSON.stringify(s)}];`).join(`
`);
  return [
    `const Runtime = globalThis.${e}[${JSON.stringify(t)}];`,
    "export default Runtime;",
    r
  ].join(`
`);
}, uw = (e) => {
  const t = rw[e];
  if (!t) return null;
  const n = di.get(e);
  if (n) return n;
  const o = "__SNIPPETS_CODE_PLUGIN_SHARED__", a = globalThis;
  a[o] = {
    ...a[o] ?? {},
    [t.moduleKey]: t.runtime
  };
  const r = lw(
    o,
    t.moduleKey,
    t.runtime,
    t.exportNames
  ), s = URL.createObjectURL(
    new Blob([r], { type: "text/javascript" })
  );
  return di.set(e, s), s;
}, cw = (e, t, n) => {
  const o = (a) => {
    const r = uw(a);
    return r || (!a.startsWith("./") && !a.startsWith("../") ? a : su(e, t, a));
  };
  return n.replace(
    /((?:import|export)\s+(?:[^'"]*?\s+from\s*)?)(['"])([^'"]+)\2/g,
    (a, r, s, i) => `${r}${s}${o(i)}${s}`
  ).replace(
    /(import\s*\(\s*)(['"])([^'"]+)\2(\s*\))/g,
    (a, r, s, i, u) => `${r}${s}${o(i)}${s}${u}`
  );
}, dw = (e, t) => {
  const n = ta.get(e) ?? [];
  n.push(t), ta.set(e, n);
}, fw = (e) => {
  (ta.get(e) ?? []).forEach((n) => URL.revokeObjectURL(n)), ta.delete(e);
}, pw = async (e, t) => {
  const n = Fn(e, t), o = await fetch(n);
  if (!o.ok)
    throw new Error(
      `插件 ${e.id} 前端入口读取失败: ${o.status} ${o.statusText}`
    );
  const a = await o.text(), r = cw(
    e,
    t,
    a
  ), s = URL.createObjectURL(
    new Blob([r], { type: "text/javascript" })
  );
  return dw(String(e.id), s), await import(
    /* @vite-ignore */
    s
  );
}, mw = (e) => async (t, n, o) => (qb(e, t), $(t, n, o)), hw = (e) => async (t, n = null) => (Yb(e, t), await $("invoke_plugin_backend", {
  pluginId: e.id,
  command: t,
  payload: n
})), Vo = (e, t) => {
  const n = Mn.get(e) ?? /* @__PURE__ */ new Set();
  n.add(t), Mn.set(e, n);
}, vw = (e, t) => {
  const n = Mn.get(e);
  n && (n.delete(t), n.size === 0 && Mn.delete(e));
}, gw = (e) => {
  const t = Array.from(Mn.get(e) ?? []);
  Mn.delete(e);
  for (const n of t)
    try {
      n();
    } catch (o) {
      F.warn(`[PluginRuntime] 清理插件运行时失败: ${e}`, o);
    }
}, yw = (e) => async (...t) => {
  const n = String(e.id), o = await dt(...t);
  let a = !0;
  const r = () => {
    a && (a = !1, vw(n, r), o());
  };
  return Vo(n, r), r;
}, La = (e, t, n) => {
  if (t) return Hs(t);
  if (!n)
    throw new Error(
      `插件 ${e.id} 注册组件时缺少 component 或 componentUrl`
    );
  return Hs(
    Qa(
      () => import(
        /* @vite-ignore */
        Fn(e, n)
      )
    )
  );
}, bw = (e, t, n) => {
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
    Fn(e, n)
  );
}, ww = (e, t) => {
  if (e === "config") {
    Za.push(t);
    return;
  }
  if (e === "window") {
    Ya.push(t);
    return;
  }
  qa.push(t);
}, xa = (e, t) => {
  for (let n = e.length - 1; n >= 0; n -= 1)
    e[n].meta?.pluginId === t && e.splice(n, 1);
}, Ra = (e, t, n) => {
  const o = e[t] ?? [];
  o.includes(n) || (e[t] = [...o, n]), e.manifest.capabilities = {
    ...e.manifest.capabilities,
    [t]: e[t]
  };
}, aa = (e, t) => `${e}:${t}`, _w = (e) => ({
  pluginId: String(e.id),
  packagePath: e.packagePath ?? "",
  manifest: e.manifest,
  resolveAssetUrl: (t) => Fn(e, t),
  api: {
    invoke: mw(e),
    invokeBackend: hw(e),
    listen: yw(e),
    emit: Kl
  },
  ui: {
    h: Ti,
    defineComponent: G
  },
  storage: {
    get: async (t) => await $("get_local_plugin_data", {
      pluginId: e.id,
      key: t
    }) ?? null,
    set: async (t, n) => {
      await $("set_local_plugin_data", {
        pluginId: e.id,
        key: t,
        value: n
      });
    },
    delete: async (t) => {
      await $("delete_local_plugin_data", {
        pluginId: e.id,
        key: t
      });
    }
  },
  registerRoute(t) {
    const n = t.target ?? "layout";
    Ra(e, "routeNames", t.name);
    const o = {
      path: t.path,
      name: t.name,
      component: bw(
        e,
        t.component,
        t.componentUrl
      ),
      meta: {
        ...t.meta,
        pluginId: e.id
      }
    };
    ww(n, o);
  },
  registerSettingsTab(t) {
    const n = t.labelKey ?? `plugins.${e.id}.${t.id}`, o = {
      id: t.id,
      pluginId: String(e.id),
      labelKey: n,
      label: t.label,
      icon: t.icon ?? dc
    }, a = aa(String(e.id), t.id), r = _n.findIndex(
      (i) => i.id === t.id && i.pluginId === String(e.id)
    ), s = La(e, t.component, t.componentUrl);
    r === -1 ? (_n.push(o), Ga[t.id] = s, na.add(a)) : na.has(a) && (_n[r] = o, Ga[t.id] = s), Ra(e, "settingsTabs", t.id);
  },
  registerSearchProvider(t) {
    const n = {
      pluginId: e.id,
      source: t.source,
      search: t.search
    }, o = wn.findIndex(
      (a) => a.pluginId === e.id && a.source === t.source
    );
    o === -1 ? wn.push(n) : wn[o] = n, Ra(e, "searchSources", t.source);
  },
  registerTitlebarAction(t) {
    const n = aa(
      String(e.id),
      t.id
    ), o = Sn.findIndex(
      (r) => r.id === t.id && r.pluginId === e.id
    ), a = {
      id: t.id,
      pluginId: e.id,
      component: La(e, t.component, t.componentUrl)
    };
    o === -1 ? (Sn.push(a), oa.add(n)) : oa.has(n) && (Sn[o] = a);
  },
  registerWindowShortcut(t) {
    Bo.push({
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
      component: La(
        e,
        t.component,
        t.componentUrl
      )
    }, a = kn.findIndex(
      (r) => r.pluginId === e.id && r.id === t.id && r.target === n
    );
    a === -1 ? kn.push(o) : kn[a] = o;
  }
}), Sw = async (e, t) => {
  const n = t.activate ?? (typeof t.default == "function" ? t.default : t.default?.activate);
  if (typeof n != "function")
    throw new Error(`插件 ${e.id} 的前端入口没有导出 activate(context)`);
  const o = await n(_w(e)), a = String(e.id);
  if (typeof o == "function") {
    Vo(a, o);
    return;
  }
  typeof o?.deactivate == "function" && Vo(a, o.deactivate), typeof o?.dispose == "function" && Vo(a, o.dispose);
}, kw = async (e) => {
  const t = String(e.id), n = e.manifest.entry?.styles ?? [];
  if (!n.length) {
    Ms(t);
    return;
  }
  const o = JSON.stringify({
    packagePath: e.packagePath,
    installedAt: e.installedAt,
    version: e.manifest.version,
    styles: n
  }), a = ea.get(t);
  if (a?.signature === o && a.elements.length === n.length && a.elements.every((s) => s.isConnected))
    return;
  const r = [];
  try {
    for (const s of n) {
      const i = Fn(e, s), u = await fetch(i);
      if (!u.ok)
        throw new Error(
          `插件 ${e.id} 样式读取失败: ${u.status} ${u.statusText}`
        );
      const c = await u.text(), d = document.createElement("style");
      d.textContent = aw(
        e,
        s,
        c
      ), d.dataset.pluginId = t, d.dataset.pluginStyle = s, document.head.appendChild(d), r.push(d);
    }
    a?.elements.forEach((s) => s.remove()), ea.set(t, { signature: o, elements: r }), F.info("[PluginRuntime] 插件样式已加载", {
      pluginId: t,
      styles: n
    });
  } catch (s) {
    throw r.forEach((i) => i.remove()), s;
  }
}, Ms = (e) => {
  ea.get(e)?.elements.forEach((n) => n.remove()), ea.delete(e);
}, Cw = [
  "routeNames",
  "settingsTabs",
  "searchSources",
  "titlebarActions",
  "windows"
], Tw = (e) => {
  if (e.resourceFor || e.manifest.resourceFor || e.manifest.resources)
    return !1;
  const t = e.manifest.capabilities;
  return Cw.some((n) => {
    const o = t?.[n];
    return Array.isArray(o) && o.length > 0;
  });
}, Ew = async (e, t) => {
  for (const n of e)
    if (n.source === "local" && t(String(n.id)) && !Fo.has(String(n.id))) {
      if (n.manifest.entry?.frontend) {
        try {
          await kw(n);
          const o = await pw(
            n,
            n.manifest.entry.frontend
          );
          await Sw(n, o), Fo.add(String(n.id));
        } catch (o) {
          ru(String(n.id)), Ms(String(n.id)), F.warn(`[PluginRuntime] 加载本地插件失败: ${n.id}`, o);
        }
        continue;
      }
      Fo.add(String(n.id)), Tw(n) && F.warn(`[PluginRuntime] 本地插件缺少前端入口: ${n.id}`);
    }
};
function ru(e, t = {}) {
  gw(e), Fo.delete(e), t.preserveStyles || Ms(e), fw(e);
  for (const [
    n,
    o
  ] of fi.entries())
    [
      ...Za,
      ...qa,
      ...Ya
    ].some(
      (r) => r.name === n && r.meta?.pluginId === e
    ) && (o(), Jb.delete(n), fi.delete(n));
  xa(Za, e), xa(qa, e), xa(Ya, e);
  for (let n = _n.length - 1; n >= 0; n -= 1) {
    const o = _n[n], a = aa(e, o.id);
    o.pluginId === e && na.has(a) && (delete Ga[o.id], _n.splice(n, 1), na.delete(a));
  }
  for (let n = wn.length - 1; n >= 0; n -= 1)
    wn[n].pluginId === e && wn.splice(n, 1);
  for (let n = Sn.length - 1; n >= 0; n -= 1) {
    const o = Sn[n], a = aa(e, o.id);
    o.pluginId === e && oa.has(a) && (Sn.splice(n, 1), oa.delete(a));
  }
  for (let n = Bo.length - 1; n >= 0; n -= 1)
    Bo[n].pluginId === e && Bo.splice(n, 1);
  for (let n = kn.length - 1; n >= 0; n -= 1)
    kn[n].pluginId === e && kn.splice(n, 1);
}
let Kn = null, nn = null, Gn = null, pi = Promise.resolve();
const Pw = async () => {
  const e = pi;
  let t;
  return pi = new Promise((n) => {
    t = n;
  }), await e, t;
}, mi = (e, t) => {
  globalThis.setTimeout(e, t);
}, hi = (e) => e.replace(/^v/i, "").split(".").map((t) => Number.parseInt(t, 10)).map((t) => Number.isFinite(t) ? t : 0), Ow = (e, t) => {
  const n = hi(e), o = hi(t), a = Math.max(n.length, o.length);
  for (let r = 0; r < a; r += 1) {
    const s = (n[r] ?? 0) - (o[r] ?? 0);
    if (s !== 0) return s;
  }
  return 0;
}, Iw = (e) => !!(e && e !== "installed" && e !== "failed"), vi = (e) => Array.isArray(e.dependencies) ? e.dependencies.filter(
  (t) => typeof t == "string" && !!t.trim()
) : [], gi = (e) => JSON.stringify({
  id: e.id,
  source: e.source,
  packagePath: e.packagePath,
  installedAt: e.installedAt,
  version: e.manifest.version,
  entry: e.manifest.entry,
  capabilities: e.manifest.capabilities,
  dependencies: e.manifest.dependencies,
  resourceFor: e.resourceFor
}), $w = (e, t) => gi(e) !== gi(t), yi = (e, t) => {
  const n = e.reduce(
    (o, a) => (o[a.id] = a.enabledByDefault, o),
    { ...nu }
  );
  if (!t)
    return n;
  for (const o of e) {
    const a = t[o.id];
    typeof a == "boolean" && (n[o.id] = a);
  }
  return n;
}, Lw = mo("plugins", {
  state: () => ({
    enabled: { ...nu },
    installedPlugins: Qo,
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
    isPackageInstalling: (e) => (t) => !!(t && Iw(e.installPhaseByPackageUrl[t])),
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
      if (Kn) {
        await Kn;
        return;
      }
      Kn = (async () => {
        try {
          F.info("[PluginStore] initialize start"), await this.reconcileInstalledPlugins("initialize", [], {
            loadRuntimeEntries: !1,
            refreshResourceStatus: !1
          }), F.info("[PluginStore] initialize complete", {
            plugins: this.installedPlugins.map((e) => ({
              id: e.id,
              source: e.source,
              enabled: this.isEnabled(e.id),
              packagePath: e.packagePath
            }))
          });
        } catch (e) {
          F.warn("[PluginStore] 加载插件状态失败，使用默认状态", e), this.installedPlugins = Qo, this.enabled = yi(
            this.installedPlugins,
            this.enabled
          );
        } finally {
          this.initialized = !0, await Promise.all([
            this.ensureStateListener(),
            this.ensureInstallProgressListener()
          ]);
        }
        mi(
          () => this.loadEnabledPluginEntriesInBackground(),
          600
        ), mi(
          () => this.refreshPluginResourceStatusInBackground(),
          1200
        );
      })();
      try {
        await Kn;
      } finally {
        Kn = null;
      }
    },
    async refreshInstalledPlugins() {
      await this.reconcileInstalledPlugins("manual-refresh");
    },
    async reconcileInstalledPlugins(e, t = [], n = {}) {
      const o = await Pw();
      try {
        if (nn)
          try {
            await nn;
          } catch (f) {
            F.warn(
              "[PluginStore] 等待上一轮插件前端加载失败，继续重新注册",
              f
            );
          }
        const { refreshResourceStatus: a = !0, loadRuntimeEntries: r = !0 } = n;
        F.info("[PluginStore] reconcile installed plugins start", {
          reason: e
        });
        const s = this.installedPlugins, i = new Map(
          s.map((f) => [String(f.id), f])
        ), u = await Ob(), c = tu(u), d = new Map(
          c.map((f) => [String(f.id), f])
        ), p = new Set(t);
        for (const f of s) {
          if (f.source !== "local") continue;
          const h = String(f.id), S = d.get(h);
          (!S || $w(f, S)) && p.add(h);
        }
        this.installedPlugins = c;
        const v = await Pb(), m = Object.fromEntries(
          Object.entries(this.enabled).filter(
            ([f]) => i.has(f) && d.has(f)
          )
        );
        this.enabled = yi(this.installedPlugins, {
          ...m,
          ...v
        }), this.installedPlugins.filter(
          (f) => f.source === "local" && !this.isEnabled(f.id)
        ).forEach((f) => p.add(String(f.id))), p.forEach((f) => {
          const h = d.get(f);
          ru(f, {
            preserveStyles: !!(h?.source === "local" && this.isEnabled(f))
          });
        }), a && await this.refreshPluginResourceStatus(), r && await this.loadEnabledPluginEntries(), F.info("[PluginStore] reconcile installed plugins complete", {
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
      F.info("[PluginStore] install from path start", {
        sourcePath: e,
        overwrite: t
      });
      const n = await Ib(
        e,
        t
      );
      F.info("[PluginStore] install from path complete", {
        pluginId: n.manifest.id,
        packagePath: n.packagePath
      }), await this.reconcileInstalledPlugins("install-path", [
        String(n.manifest.id)
      ]);
    },
    async installFromUrl(e, t = !1, n, o, a, r) {
      F.info("[PluginStore] install from url start", {
        packageUrl: e,
        overwrite: t,
        packageSubdir: n,
        expectedSizeBytes: o,
        pluginId: r,
        mirrorCount: a?.length ?? 0
      });
      const s = await Ql(
        e,
        t,
        n,
        o,
        a,
        r
      );
      F.info("[PluginStore] install from url complete", {
        pluginId: s.manifest.id,
        packagePath: s.packagePath,
        packageUrl: e
      }), await this.reconcileInstalledPlugins("install-url", [
        String(s.manifest.id)
      ]);
    },
    async uninstall(e, t = !1) {
      F.info("[PluginStore] uninstall start", { pluginId: e, deleteData: t });
      try {
        await Rb(e, t);
      } finally {
        await this.reconcileInstalledPlugins("uninstall", [String(e)]);
      }
      F.info("[PluginStore] uninstall complete", { pluginId: e, deleteData: t });
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
      (this.installedPlugins.some((o) => o.id === e) || Ub(e)) && (this.enabled[e] = t);
    },
    async ensureStateListener() {
      if (!this.stateUnlisten)
        try {
          this.stateUnlisten = await dt(
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
          F.warn("[PluginStore] 监听插件状态变化失败", e);
        }
    },
    setInstallProgress(e) {
      const t = this.installProgressByPackageUrl[e.packageUrl];
      t && Number(t.updatedAt || 0) > Number(e.updatedAt || 0) || (this.installProgressByPackageUrl[e.packageUrl] = e, this.installPhaseByPackageUrl[e.packageUrl] !== e.phase && (this.installPhaseByPackageUrl[e.packageUrl] = e.phase));
    },
    async ensureInstallProgressListener() {
      if (!this.installProgressUnlisten)
        try {
          this.installProgressUnlisten = await dt(
            "plugin-install-progress",
            (t) => {
              const n = t.payload;
              this.setInstallProgress(n), F.info("[PluginStore] install progress", n), n.phase === "installed" ? (n.pluginId && (this.marketplaceInstallRequests[n.pluginId] = !1), this.reconcileInstalledPlugins(
                "install-progress-installed",
                n.pluginId ? [n.pluginId] : []
              ).catch((o) => {
                F.warn("[PluginStore] 安装完成后刷新插件清单失败", o);
              })) : n.phase === "failed" && n.pluginId && (this.marketplaceInstallRequests[n.pluginId] = !1);
            }
          ), (await $b()).forEach((t) => this.setInstallProgress(t));
        } catch (e) {
          F.warn("[PluginStore] 监听插件安装任务失败", e);
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
        F.info("[PluginStore] set enabled start", { pluginId: e, enabled: t }), await Ab(e, t), await this.reconcileInstalledPlugins(
          "set-enabled",
          t ? [] : [String(e)]
        ), F.info("[PluginStore] set enabled complete", {
          pluginId: e,
          enabled: t
        });
      } catch (o) {
        throw typeof n == "boolean" ? this.enabled[e] = n : delete this.enabled[e], n && await this.loadEnabledPluginEntries(), F.error("[PluginStore] 保存插件状态失败", {
          pluginId: e,
          enabled: t,
          error: o
        }), o;
      }
    },
    async loadEnabledPluginEntries() {
      if (nn) {
        await nn;
        return;
      }
      nn = (async () => {
        await Ew(
          this.installedPlugins,
          (e) => this.isEnabled(e)
        ), this.runtimeRevision += 1;
      })();
      try {
        await nn;
      } finally {
        nn = null;
      }
    },
    loadEnabledPluginEntriesInBackground() {
      this.loadEnabledPluginEntries().catch((e) => {
        F.warn("[PluginStore] 后台加载插件前端入口失败", e);
      });
    },
    shouldInstallMarketplaceItem(e) {
      const t = this.installedPlugins.find(
        (n) => n.id === e.id
      );
      return !t || t.source === "local" && Ow(e.version, t.manifest.version) > 0;
    },
    async installMarketplaceItemWithDependencies(e, t, n = {}, o = /* @__PURE__ */ new Set()) {
      if (o.has(e.id))
        throw new Error(
          n.formatCircularDependencyError?.(e) ?? `Circular plugin dependency: ${e.id}`
        );
      o.add(e.id);
      try {
        for (const a of vi(e)) {
          const r = t.find(
            (s) => s.id === a
          );
          if (!r)
            throw new Error(
              n.formatMissingDependencyError?.(a) ?? `Missing plugin dependency: ${a}`
            );
          if (n.isCompatible && !n.isCompatible(r)) {
            const s = r.name?.fallback || r.name?.i18nKey || r.id;
            throw new Error(
              n.formatIncompatibleDependencyError?.(r) ?? `Incompatible plugin dependency: ${s}`
            );
          }
          this.shouldInstallMarketplaceItem(r) && await this.installMarketplaceItemWithDependencies(
            r,
            t,
            n,
            o
          );
        }
        if (e.packageUrl && this.shouldInstallMarketplaceItem(e)) {
          n.onInstallingPackage?.(e);
          const a = e.mirrorUrls && e.mirrorUrls.length > 0 ? e.mirrorUrls : [Eb(e.packageUrl)];
          F.info("[PluginStore] marketplace lifecycle install package", {
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
            a,
            e.id
          );
        }
      } finally {
        o.delete(e.id);
      }
    },
    async refreshPluginResourceStatus() {
      if (Gn) {
        await Gn;
        return;
      }
      Gn = (async () => {
        const e = {}, t = (n) => this.installedPlugins.some(
          (o) => o.id === n || o.resourceFor === n
        );
        if (t("screenshot"))
          try {
            const n = await Mb();
            e[n.pluginId] = n;
          } catch (n) {
            F.warn("[PluginStore] 获取截图插件资源状态失败", n);
          }
        if (t("translation")) {
          const n = "resources/transformers/transformers.min.js", o = ["translation-offline-runtime", "translation"];
          let a = null, r;
          for (const s of o)
            if (a = await eu(
              s,
              n
            ), a) {
              r = `plugin:${s}:${n}`;
              break;
            }
          e.translation = {
            pluginId: "translation",
            resourceId: "offline-transformers-runtime",
            available: !!a,
            source: r,
            path: a ?? void 0,
            searchedPaths: o.map(
              (s) => `plugins/${s}/${n}`
            )
          };
        }
        if (t("screen-recorder") && this.isEnabled("screen-recorder"))
          try {
            const n = await zb();
            e["screen-recorder"] = {
              pluginId: "screen-recorder",
              resourceId: "ffmpeg",
              available: n.available,
              source: n.source,
              path: n.path,
              searchedPaths: n.searchedPaths
            };
          } catch (n) {
            F.warn("[PluginStore] 获取录屏 FFmpeg 资源状态失败", n);
          }
        if (t("local-ai") && this.isEnabled("local-ai"))
          try {
            const n = await Kb();
            e["local-ai"] = {
              pluginId: "local-ai",
              resourceId: "llama-runtime",
              available: n.available,
              source: n.source,
              path: n.path,
              searchedPaths: n.searchedPaths
            };
          } catch (n) {
            F.warn(
              "[PluginStore] 获取本地 AI llama.cpp 资源状态失败",
              n
            );
          }
        this.resourceStatusByPluginId = e;
      })();
      try {
        await Gn;
      } finally {
        Gn = null;
      }
    },
    refreshPluginResourceStatusInBackground() {
      this.refreshPluginResourceStatus().catch((e) => {
        F.warn("[PluginStore] 后台刷新插件资源状态失败", e);
      });
    }
  },
  persist: {
    pick: ["enabled"]
  }
}), xw = mo("configuration", {
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
      return Un().effectiveDark;
    }
  },
  actions: {
    // 初始化配置
    async initialize() {
      const e = kb();
      await e.initialize(), this.searchHotkey = e.searchHotkey, this.configHotkey = e.configHotkey, this.translateHotkey = e.translateHotkey, this.selectionTranslateHotkey = e.selectionTranslateHotkey, this.screenshotHotkey = e.screenshotHotkey, this.screenRecorderHotkey = e.screenRecorderHotkey, this.darkModeHotkey = e.darkModeHotkey, this.wallpaperSwitcherHotkey = e.wallpaperSwitcherHotkey, this.pluginHotkeys = e.pluginHotkeys;
      const t = Un();
      this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
      try {
        this.autoUpdateCheck = await $("get_auto_update_check");
      } catch (n) {
        F.error("获取自动检查失败:", n);
      }
      try {
        this.autoHideOnBlur = await $("get_auto_hide_on_blur");
      } catch (n) {
        F.error("获取自动失焦隐藏设置:", n);
      }
      try {
        const n = await $("get_language");
        n && (n === "zh-CN" || n === "en-US") && (this.language = n);
      } catch (n) {
        F.error("获取语言设置失败:", n);
      }
      try {
        const n = await _b();
        this.editorLineHeight = n.lineHeight || 1.6;
      } catch (n) {
        F.error("获取编辑器显示设置失败:", n);
      }
    },
    async updateEditorLineHeight(e) {
      const t = this.editorLineHeight, n = Math.min(2, Math.max(1.2, Number(e) || 1.6));
      this.editorLineHeight = n;
      try {
        await Sb({
          // 行号仅属于代码片段编辑器；保留字段以兼容已有配置格式。
          lineNumbers: !1,
          lineHeight: n
        });
      } catch (o) {
        throw this.editorLineHeight = t, F.error("更新编辑器行距设置失败:", o), o;
      }
    },
    // 更新主题并立即应用（委托给 useThemeStore）
    updateTheme(e) {
      const t = Un();
      t.updateTheme(e), this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
    },
    // 应用主题到DOM（委托给 useThemeStore）
    applyTheme() {
      const e = Un();
      e.theme = this.theme, e.applyTheme(), this.systemPrefersDark = e.systemPrefersDark;
    },
    // 同步系统主题样式（委托给 useThemeStore）
    syncSystemThemeStyle(e) {
      const t = Un();
      t.syncSystemThemeStyle(e), this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
    }
  },
  persist: {
    pick: ["theme"]
  }
}), Rw = "resources/transformers/transformers.min.js", Aw = ["translation-offline-runtime", "translation"], Mw = "https://huggingface.co/", zw = "{model}/resolve/{revision}/", Nw = "/__snippets_code_disabled_transformers_local_models__/", iu = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
], Bw = [
  Rw,
  ...iu.map((e) => `resources/transformers/${e}`)
];
let Zn = null;
async function lu() {
  const e = [];
  for (const t of Aw) {
    const n = await Promise.all(
      Bw.map(
        (o) => eu(t, o)
      )
    );
    n.every((o) => !!o) && e.push({ pluginId: t, runtimePath: n[0] });
  }
  return e;
}
const Fw = (e) => {
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
}, Vw = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, o = Fw(n);
  return o.index >= 0 ? n.slice(0, o.index + o.length) : n;
}, Dw = (e) => {
  const t = Vw(e);
  return Object.fromEntries(
    iu.map((n) => [n, `${t}${n}`])
  );
}, Hw = (e, t) => {
  var n, o;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = Mw, e.remotePathTemplate = zw, e.allowLocalModels = !1, e.localModelPath = Nw, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (o = e.backends.onnx).wasm ?? (o.wasm = {}), e.backends.onnx.wasm.wasmPaths = Dw(t), e.backends.onnx.wasm.numThreads = 1);
};
async function uu() {
  return Zn || (Zn = (async () => {
    const e = await lu();
    let t = null;
    for (const { pluginId: n, runtimePath: o } of e) {
      const a = Wl(o);
      try {
        const r = await import(
          /* @vite-ignore */
          a
        );
        return Hw(r.env, a), F.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${n}`, {
          wasmPaths: r.env.backends?.onnx?.wasm?.wasmPaths,
          numThreads: r.env.backends?.onnx?.wasm?.numThreads,
          remoteHost: r.env.remoteHost,
          remotePathTemplate: r.env.remotePathTemplate,
          allowLocalModels: r.env.allowLocalModels,
          localModelPath: r.env.localModelPath
        }), r;
      } catch (r) {
        t = r, F.warn(`[离线翻译] 无法加载插件运行时，尝试下一个候选包: ${n}`, r);
      }
    }
    throw t || new Error("离线翻译运行时未安装，请先安装 translation-offline-runtime 插件资源包");
  })().catch((e) => {
    throw Zn = null, e;
  }), Zn);
}
async function jw() {
  await uu();
}
let $t = null, ao = !1, yn = null, Cn = null, Ja = null;
const Ww = "Xenova/opus-mt-en-zh", Uw = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Kw = 3e5;
function bi(e) {
  Ja = e;
}
function Gw() {
  return Uw;
}
function Zw(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (o, a) => setTimeout(() => a(new Error(n)), t)
    )
  ]);
}
async function cu() {
  return $t || yn || (ao = !0, F.info("[离线翻译] 正在加载翻译模型..."), yn = (async () => {
    try {
      const { pipeline: e } = await uu();
      let t = "";
      const n = e("translation", Ww, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (a) => {
          a.status === "done" && a.file && a.file !== t && (t = a.file, F.info(`[离线翻译] 已加载: ${a.file}`)), Ja && Ja({
            status: a.status,
            progress: a.progress,
            file: a.file
          });
        }
      });
      return $t = await Zw(
        n,
        Kw,
        "模型加载超时，请检查网络连接后重试"
      ), F.info("[离线翻译] 翻译模型加载完成"), ao = !1, $t;
    } catch (e) {
      throw ao = !1, yn = null, F.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), yn);
}
async function qw(e) {
  if (!e?.trim()) return e;
  Cn = new AbortController();
  const t = Cn.signal;
  try {
    const n = await cu();
    if (t.aborted)
      throw new Error("翻译已取消");
    const o = e.split(`
`), a = [];
    for (const r of o) {
      if (t.aborted)
        throw new Error("翻译已取消");
      const s = r.trim();
      if (!s) {
        a.push("");
        continue;
      }
      const i = await n(s);
      if (t.aborted)
        throw new Error("翻译已取消");
      if (Array.isArray(i) && i.length > 0) {
        const u = i[0].translation_text || s;
        a.push(u);
      } else
        a.push(s);
    }
    return a.join(`
`);
  } catch (n) {
    throw n instanceof Error && n.message === "翻译已取消" ? (F.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (F.warn("[离线翻译] 运行时资源未安装"), n) : (F.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    Cn = null;
  }
}
function wi() {
  Cn && (Cn.abort(), Cn = null, F.info("[离线翻译] 已发送取消信号"));
}
async function Xa() {
  await cu();
}
function xo() {
  return $t !== null;
}
function Yw() {
  return ao;
}
async function Yn() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      F.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const a = await (await caches.open(n)).keys();
          if (F.info(`[离线翻译] Cache "${n}" 包含 ${a.length} 个文件`), a.some(
            (s) => s.url.includes("opus-mt-en-zh") || s.url.includes("Xenova")
          )) {
            const s = a.some((i) => i.url.includes(".onnx"));
            if (F.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${s}`), s)
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
    F.info(`[离线翻译] IndexedDB 列表: ${JSON.stringify(e.map((t) => t.name))}`);
    for (const t of e)
      if (t.name && (t.name.includes("transformers") || t.name.includes("huggingface") || t.name.includes("onnx") || t.name.includes("localforage")))
        return F.info(`[离线翻译] 找到 IndexedDB 缓存: ${t.name}`), {
          isCached: !0,
          cacheType: "indexeddb",
          cacheName: t.name,
          estimatedSize: "~300MB"
        };
    return F.info("[离线翻译] 未找到模型缓存"), { isCached: !1, cacheType: "none" };
  } catch (e) {
    return F.warn("[离线翻译] 检查缓存失败:", e), { isCached: !1, cacheType: "none" };
  }
}
async function Jw() {
  return (await Yn()).isCached;
}
function Xw() {
  return $t !== null;
}
async function Qw() {
  if ($t)
    try {
      await $t.dispose?.();
    } catch {
    }
  $t = null, yn = null, ao = !1, F.info("[离线翻译] 翻译器已释放");
}
async function e1() {
  try {
    const e = await indexedDB.databases();
    for (const t of e)
      t.name && (t.name.includes("transformers") || t.name.includes("onnx")) && (indexedDB.deleteDatabase(t.name), F.info(`[离线翻译] 已删除 IndexedDB: ${t.name}`));
    if ("caches" in window) {
      const t = await caches.keys();
      for (const n of t)
        (n.includes("transformers") || n.includes("onnx")) && (await caches.delete(n), F.info(`[离线翻译] 已删除 Cache: ${n}`));
    }
    F.info("[离线翻译] 模型缓存已清除");
  } catch (e) {
    throw F.error("[离线翻译] 清除缓存失败:", e), e;
  }
}
const t1 = { class: "translate-window" }, n1 = {
  class: "header",
  "data-tauri-drag-region": ""
}, o1 = { class: "left-buttons" }, a1 = ["aria-label"], s1 = {
  class: "window-title",
  "data-tauri-drag-region": ""
}, r1 = { class: "right-buttons" }, i1 = ["aria-label"], l1 = { class: "translate-container" }, u1 = { class: "language-selector" }, c1 = ["aria-label", "disabled"], d1 = { class: "source-area" }, f1 = { class: "source-actions" }, p1 = { class: "source-material" }, m1 = { class: "translation-results" }, h1 = ["onClick"], v1 = { class: "result-title" }, g1 = ["src"], y1 = ["src"], b1 = {
  key: 2,
  class: "offline-icon"
}, w1 = {
  key: 3,
  class: "offline-icon ai-icon"
}, _1 = { class: "result-controls" }, S1 = {
  key: 0,
  class: "result-body"
}, k1 = ["textContent", "onBlur"], C1 = {
  key: 2,
  class: "result-empty"
}, T1 = { class: "result-actions" }, E1 = ["onClick"], P1 = ["onClick"], O1 = ["onClick"], I1 = /* @__PURE__ */ G({
  __name: "index",
  setup(e) {
    const { t } = ts(), n = Lw(), o = ql(), a = M(!1), r = M(""), s = M("auto"), i = M("zh"), u = M(!1), c = M(!1), d = M(), p = M(!1), v = M(!1), m = M(!1);
    let f = 0;
    const h = M([
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
    ]), S = b(() => h.value.filter((V) => V.engine === "offline" ? p.value : V.engine === "local-ai" ? v.value : !0)), g = (V) => V === "bing" ? t("translate.bingTranslate") : V === "google" ? t("translate.googleTranslate") : V === "offline" ? t("translate.offlineTranslate") : V === "local-ai" ? t("translate.localAiTranslate") : V, I = b(() => [
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
    let _ = null, E = null, T = null;
    const P = M({
      forChinese: "en",
      forEnglish: "zh"
    }), L = async () => {
      if (u.value) return;
      const V = await dt("tauri://blur", () => {
        _ && clearTimeout(_), _ = setTimeout(async () => {
          u.value || (U(), await o.hide());
        }, 100);
      }), oe = await dt("tauri://focus", () => {
        _ && clearTimeout(_), me();
      }), ne = await dt("tauri://show", () => {
        me();
      }), Le = await dt("tauri://move", () => {
        _ && clearTimeout(_);
      }), De = await dt("selection-text", (Te) => {
        Te.payload && Te.payload.text && Ee(Te.payload.text);
      }), Ae = await dt("reset-state", () => {
        U();
      });
      E = () => {
        V(), oe(), Le(), De(), Ae(), ne();
      };
    }, Z = async () => {
      u.value = !u.value, await o.setAlwaysOnTop(u.value), u.value ? E && (E(), E = null) : L();
    }, U = () => {
      r.value = "", c.value = !1, h.value.forEach((V) => {
        V.text = "", V.loading = !1;
      });
    }, Q = async () => {
      U(), await o.close();
    }, k = () => {
      s.value !== "auto" && ([s.value, i.value] = [
        i.value,
        s.value
      ], X());
    }, x = () => {
      r.value = "", h.value.forEach((V) => {
        V.text = "", V.loading = !1;
      }), c.value = !1;
    }, j = async (V) => {
      V && (await navigator.clipboard.writeText(V), ze.success(t("translate.copiedToClipboard")));
    }, se = (V, oe) => {
      const ne = oe.target;
      ne && (V.text = ne.innerText.trim());
    }, O = (V, oe) => {
      if (!V) return;
      const ne = new SpeechSynthesisUtterance(V), Le = oe === "zh" ? "zh-CN" : oe === "zh_tw" ? "zh-TW" : oe === "en" ? "en-US" : oe;
      ne.lang = Le, window.speechSynthesis.speak(ne);
    }, z = () => {
      if (s.value !== "auto") return;
      const V = Ia(r.value);
      V === "zh" ? i.value = P.value.forChinese : V === "en" && (i.value = P.value.forEnglish);
    }, A = () => {
      const V = Ia(r.value);
      V === "zh" ? P.value.forChinese = i.value : V === "en" && (P.value.forEnglish = i.value), X();
    }, ee = async (V, oe) => {
      const ne = h.value.find((Ae) => Ae.engine === V);
      if (!ne || V === "offline" && !p.value || V === "local-ai" && !v.value)
        return;
      ne.loading = !0, ne.text = "";
      const Le = wb(r.value);
      let De = i.value;
      V === "bing" && De === "auto" && (De = "en");
      try {
        let Ae;
        if (V === "offline") {
          if (!Xw())
            if (await Jw())
              F.info("[翻译窗口] 离线翻译懒加载：开始加载模型..."), await Xa(), F.info("[翻译窗口] 离线翻译懒加载：模型加载完成");
            else {
              ne.text = t("translate.offlineModelUnavailable");
              return;
            }
          Ae = await qw(Le);
        } else
          Ae = await $("translate_text", {
            text: Le,
            from: s.value,
            to: De,
            engine: V
          });
        if (oe !== f) return;
        ne.text = Ae;
      } catch (Ae) {
        if (oe !== f) return;
        const Te = String(Ae);
        if (Te.includes("翻译已取消")) return;
        F.error(`[翻译] ${V}翻译出错`, Ae), Te.includes("429") || Te.includes("Too Many Requests") ? ne.text = t("translate.tooManyRequests") : Te.includes("timeout") || Te.includes("超时") ? ne.text = t("translate.timeout") : Te.includes("network") || Te.includes("网络") ? ne.text = t("translate.networkError") : Te.includes("未下载") || Te.includes("未激活") || Te.includes("运行时未安装") ? ne.text = t("translate.offlineUnavailable") : ne.text = t("translate.translateFailed");
      } finally {
        oe === f && (ne.loading = !1);
      }
    }, X = async () => {
      if (T && (clearTimeout(T), T = null), !r.value.trim()) {
        h.value.forEach((ne) => {
          ne.text = "", ne.loading = !1;
        }), a.value = !1;
        return;
      }
      wi();
      const V = ++f;
      z(), a.value = !0;
      const oe = S.value.map(
        (ne) => ee(ne.engine, V)
      );
      await Promise.all(oe), V === f && (a.value = !1);
    }, le = (V) => {
      V.expanded = !V.expanded;
    }, ve = () => {
      m.value || (c.value = !!r.value, T && clearTimeout(T), r.value.trim() ? T = setTimeout(() => {
        X();
      }, 500) : h.value.forEach((V) => {
        V.text = "", V.loading = !1;
      }));
    }, be = () => {
      m.value = !0;
    }, J = () => {
      m.value = !1;
    };
    let de = "", ge = !1;
    const Ee = (V) => {
      V && (V === de && ge || (de = V, ge = !0, r.value = V, c.value = !0, z(), X().finally(() => {
        setTimeout(() => {
          ge = !1;
        }, 2e3);
      }), me()));
    }, ae = (V) => {
      r.value = V.text;
      const oe = Ia(r.value), ne = s.value, Le = i.value;
      ne === "auto" ? (s.value = "auto", oe === "zh" ? i.value = P.value.forChinese : i.value = P.value.forEnglish) : (s.value = Le, i.value = ne === "auto" ? oe === "zh" ? "en" : "zh" : ne), X();
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
    }, Be = () => {
      z(), X();
    };
    return Pe(async () => {
      try {
        await n.initialize(), v.value = n.isEnabled("local-ai");
      } catch (V) {
        F.warn("[翻译窗口] 获取本地 AI 插件状态失败:", V), v.value = !1;
      }
      try {
        const V = await $(
          "get_offline_model_activated"
        );
        F.info(`[翻译窗口] 离线模型后端激活状态: ${V}`), p.value = V;
      } catch (V) {
        F.error("[翻译窗口] 获取离线模型激活状态失败:", V), p.value = !1;
      }
      await L(), r.value.trim() && z(), me(), await Se(), setTimeout(() => {
        o.emit("translate_ready");
      }, 100);
    }), ki(() => {
      E && E(), _ && clearTimeout(_), T && clearTimeout(T), wi(), U();
    }), (V, oe) => {
      const ne = $s, Le = Rs, De = xs, Ae = hs, Te = vy;
      return w(), R("main", t1, [
        y("div", n1, [
          y("div", o1, [
            B(ne, {
              content: V.$t("pin.pinWindow"),
              placement: "bottom",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: q(() => [
                y("button", {
                  type: "button",
                  "aria-label": V.$t("pin.pinWindow"),
                  onMousedown: oe[0] || (oe[0] = Oe(() => {
                  }, ["stop"])),
                  onClick: Z,
                  class: N(["window-action", "pin-button", l(u) ? "pinned" : ""])
                }, [
                  B(l(cc), { size: 18 })
                ], 42, a1)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"])
          ]),
          y(
            "div",
            s1,
            K(V.$t("translate.title")),
            1
            /* TEXT */
          ),
          y("div", r1, [
            B(ne, {
              content: V.$t("pin.close"),
              placement: "bottom",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: q(() => [
                y("button", {
                  type: "button",
                  "aria-label": V.$t("pin.close"),
                  onMousedown: oe[1] || (oe[1] = Oe(() => {
                  }, ["stop"])),
                  onClick: Q,
                  class: "window-action material-close"
                }, [
                  B(l(sc), { size: 22 })
                ], 40, i1)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"])
          ])
        ]),
        y("div", l1, [
          H(" 语言选择区域 "),
          y("div", u1, [
            B(De, {
              modelValue: l(s),
              "onUpdate:modelValue": oe[2] || (oe[2] = (ce) => Jn(s) ? s.value = ce : null),
              size: "small",
              onChange: Be,
              class: "lang-select"
            }, {
              default: q(() => [
                (w(!0), R(
                  Ie,
                  null,
                  st(l(I), (ce) => (w(), Y(Le, {
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
            B(ne, {
              content: V.$t("translate.translateBack"),
              placement: "top",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: q(() => [
                y("button", {
                  type: "button",
                  "aria-label": V.$t("translate.translateBack"),
                  disabled: l(s) === "auto",
                  onClick: k,
                  class: "swap-button"
                }, [
                  B(l(js), { size: 22 })
                ], 8, c1)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"]),
            B(De, {
              modelValue: l(i),
              "onUpdate:modelValue": oe[3] || (oe[3] = (ce) => Jn(i) ? i.value = ce : null),
              size: "small",
              onChange: A,
              class: "lang-select"
            }, {
              default: q(() => [
                (w(!0), R(
                  Ie,
                  null,
                  st(l(I), (ce) => (w(), Y(Le, {
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
          y("div", d1, [
            B(Ae, {
              ref_key: "sourceTextArea",
              ref: d,
              modelValue: l(r),
              "onUpdate:modelValue": oe[4] || (oe[4] = (ce) => Jn(r) ? r.value = ce : null),
              type: "textarea",
              rows: 2,
              placeholder: V.$t("translate.inputPlaceholder"),
              resize: "none",
              onInput: ve,
              onCompositionstart: be,
              onCompositionend: J,
              class: "source-textarea"
            }, null, 8, ["modelValue", "placeholder"]),
            y("div", f1, [
              y("div", p1, [
                B(ne, {
                  content: V.$t("translate.speakText"),
                  placement: "top",
                  "hide-after": 1e3,
                  "popper-class": "themed-tooltip-popper"
                }, {
                  default: q(() => [
                    y("button", {
                      type: "button",
                      onClick: oe[5] || (oe[5] = (ce) => O(l(r), l(s))),
                      class: "action-btn"
                    }, [
                      B(l(Ws), { size: 18 })
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
                      onClick: x,
                      class: "action-btn"
                    }, [
                      B(l(ic), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"])) : H("v-if", !0)
              ])
            ])
          ]),
          H(" 多引擎翻译结果区域 "),
          y("div", m1, [
            (w(!0), R(
              Ie,
              null,
              st(l(S), (ce) => (w(), R(
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
                    y("div", v1, [
                      ce.engine === "google" ? (w(), R("img", {
                        key: 0,
                        src: l(db),
                        class: "engine-icon",
                        alt: "Google"
                      }, null, 8, g1)) : ce.engine === "bing" ? (w(), R("img", {
                        key: 1,
                        src: l(fb),
                        class: "engine-icon",
                        alt: "Bing"
                      }, null, 8, y1)) : ce.engine === "offline" ? (w(), R(
                        "span",
                        b1,
                        K(V.$t("translate.offlineMark")),
                        1
                        /* TEXT */
                      )) : (w(), R("span", w1, "AI")),
                      y(
                        "span",
                        null,
                        K(g(ce.engine)),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", _1, [
                      (w(), Y(at(ce.expanded ? l(pc) : l(lc)), {
                        size: 18,
                        class: "expand-icon"
                      }))
                    ])
                  ], 8, h1),
                  ce.expanded ? (w(), R("div", S1, [
                    ce.loading ? (w(), Y(Te, {
                      key: 0,
                      rows: 3,
                      animated: ""
                    })) : ce.text ? (w(), R("div", {
                      key: 1,
                      class: "result-text",
                      contenteditable: "plaintext-only",
                      spellcheck: "false",
                      textContent: K(ce.text),
                      onBlur: (Ke) => se(ce, Ke)
                    }, null, 40, k1)) : (w(), R(
                      "div",
                      C1,
                      K(V.$t("translate.resultPlaceholder")),
                      1
                      /* TEXT */
                    )),
                    y("div", T1, [
                      B(ne, {
                        content: V.$t("translate.speakText"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: q(() => [
                          y("button", {
                            type: "button",
                            onClick: (Ke) => O(ce.text, l(i)),
                            class: "action-btn"
                          }, [
                            B(l(Ws), { size: 18 })
                          ], 8, E1)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      B(ne, {
                        content: V.$t("translate.copyResult"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: q(() => [
                          y("button", {
                            type: "button",
                            onClick: (Ke) => j(ce.text),
                            class: "action-btn"
                          }, [
                            B(l(rc), { size: 18 })
                          ], 8, P1)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      B(ne, {
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
                            B(l(js), { size: 18 })
                          ], 8, O1)
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
}), wo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, $1 = /* @__PURE__ */ wo(I1, [["__scopeId", "data-v-cbe9045a"]]), L1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $1
}, Symbol.toStringTag, { value: "Module" })), x1 = ["disabled"], R1 = {
  key: 0,
  class: "custom-button__loading"
}, A1 = /* @__PURE__ */ G({
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
    return (n, o) => (w(), R("button", {
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
      e.loading ? (w(), R("div", R1, o[1] || (o[1] = [
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
      re(n.$slots, "default", {}, void 0, !0)
    ], 10, x1));
  }
}), Ro = /* @__PURE__ */ wo(A1, [["__scopeId", "data-v-5d7f8015"]]), M1 = /* @__PURE__ */ G({
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
      const r = !n.modelValue;
      o("update:modelValue", r), o("change", r);
    };
    return (r, s) => (w(), R(
      "div",
      {
        class: N(["custom-switch", {
          "custom-switch--active": e.modelValue,
          "custom-switch--disabled": e.disabled
        }]),
        onClick: a
      },
      [
        e.activeText || e.inactiveText ? (w(), R(
          "span",
          {
            key: 0,
            class: N(["custom-switch__text", { "custom-switch__text--active": e.modelValue }])
          },
          K(e.modelValue ? e.activeText : e.inactiveText),
          3
          /* TEXT, CLASS */
        )) : H("v-if", !0),
        s[0] || (s[0] = y(
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
}), _i = /* @__PURE__ */ wo(M1, [["__scopeId", "data-v-59686f54"]]), du = {
  pathTemplate: "assets/${noteFileName}/",
  filenameFormat: "snippets-code",
  defaultImageScalePercent: 100,
  responsiveImages: !0,
  showImagePath: !0
}, z1 = "attachment-config-updated";
let bn = null, qn = null;
async function N1(e = !1) {
  if (!e && bn) return { ...bn };
  if (!e && qn) return qn;
  const t = $("get_attachment_config").then((n) => (bn = { ...du, ...n }, { ...bn })).catch((n) => {
    throw new Error(`获取附件配置失败: ${n}`);
  }).finally(() => {
    qn === t && (qn = null);
  });
  return qn = t, t;
}
async function B1(e) {
  try {
    await $("update_attachment_config", { config: e }), bn = { ...du, ...e }, typeof window < "u" && window.dispatchEvent(new CustomEvent(z1, {
      detail: { ...bn }
    }));
  } catch (t) {
    throw new Error(`更新附件配置失败: ${t}`);
  }
}
const F1 = { class: "settings-panel" }, V1 = { class: "panel-header" }, D1 = { class: "panel-title" }, H1 = { class: "panel-content" }, j1 = { class: "summarize-section" }, W1 = { class: "summarize-label" }, U1 = { class: "summarize-label-title" }, K1 = { class: "summarize-label-desc" }, G1 = { class: "summarize-input-wrapper" }, Z1 = { class: "summarize-section" }, q1 = { class: "summarize-label" }, Y1 = { class: "summarize-label-title" }, J1 = { class: "summarize-label-desc" }, X1 = { class: "summarize-input-wrapper" }, Q1 = { class: "flex flex-wrap items-center gap-3" }, e2 = {
  key: 0,
  class: "summarize-section"
}, t2 = { class: "summarize-label" }, n2 = { class: "summarize-label-title" }, o2 = { class: "summarize-label-desc" }, a2 = { class: "summarize-input-wrapper flex-col !items-start" }, s2 = { class: "w-full space-y-2" }, r2 = { class: "w-5 text-center" }, i2 = {
  key: 0,
  class: "text-green-500 text-base"
}, l2 = {
  key: 1,
  class: "text-red-500 text-base"
}, u2 = {
  key: 2,
  class: "text-yellow-500 text-base"
}, c2 = {
  key: 3,
  class: "text-panel-text-secondary text-base"
}, d2 = ["title"], f2 = { class: "w-16 text-right text-xs text-panel-text-secondary" }, p2 = { class: "w-24" }, m2 = {
  key: 1,
  class: "text-green-500 text-xs"
}, h2 = {
  key: 2,
  class: "text-red-500 text-xs"
}, v2 = {
  key: 3,
  class: "text-panel-text-secondary text-xs"
}, g2 = {
  key: 1,
  class: "summarize-section !mt-2"
}, y2 = { class: "summarize-label" }, b2 = { class: "summarize-label-title" }, w2 = { class: "summarize-label-desc" }, _2 = { class: "summarize-input-wrapper" }, S2 = { class: "model-info-card" }, k2 = { class: "info-row" }, C2 = { class: "info-item" }, T2 = { class: "info-label" }, E2 = { class: "info-item" }, P2 = { class: "info-label" }, O2 = { class: "info-value" }, I2 = { class: "info-item" }, $2 = { class: "info-label" }, L2 = { class: "info-value" }, x2 = { class: "summarize-section !mt-2" }, R2 = { class: "summarize-label" }, A2 = { class: "summarize-label-title" }, M2 = { class: "summarize-label-desc" }, z2 = { class: "summarize-input-wrapper" }, N2 = { class: "usage-tips" }, B2 = { class: "tip-item" }, F2 = { class: "tip-text" }, V2 = { class: "tip-item" }, D2 = { class: "tip-text" }, H2 = { class: "tip-item" }, j2 = { class: "tip-text" }, W2 = { class: "tip-item" }, U2 = { class: "tip-text" }, K2 = "translation-offline-runtime", G2 = /* @__PURE__ */ G({
  name: "Translation",
  __name: "index",
  setup(e) {
    const { t } = ts(), n = M("bing"), o = M(!1), a = M(!1), r = M({ isCached: !1, cacheType: "none" }), s = M(!1), i = M(!1), u = M(!1), c = M(!1), d = M([]), p = b(() => r.value.isCached), v = b(() => [
      { value: "google", label: t("translation.google") },
      { value: "bing", label: t("translation.bing") },
      { value: "offline", label: t("translation.offline") },
      { value: "local-ai", label: t("translation.localAi") }
    ]), m = b(() => s.value ? t("translation.modelLoading") : c.value ? t("translation.runtimeInstalling") : u.value ? o.value ? t("translation.modelReady") : p.value && a.value ? t("translation.modelActivated") : p.value ? t("translation.modelCached") : t("translation.modelNotLoaded") : t("translation.runtimeMissing")), f = b(() => s.value || c.value ? "text-yellow-500" : u.value ? o.value || p.value && a.value ? "text-green-500" : p.value ? "text-blue-500" : "text-panel-text-secondary" : "text-red-500"), h = b(() => o.value || p.value), S = () => {
      const k = Gw();
      d.value = k.map((x) => ({
        file: x.name,
        progress: 0,
        status: "pending",
        size: x.size
      }));
    }, g = (k, x, j) => {
      const se = d.value.find((O) => k.includes(O.file) || O.file.includes(k));
      se && (se.progress = x, se.status = j);
    }, I = async () => {
      const k = await lu();
      return u.value = k.length > 0, u.value;
    }, _ = async () => {
      c.value = !0;
      try {
        const k = await xb(Cb), x = Array.isArray(k.plugins) ? k.plugins : [], j = x.find((se) => se.id === K2);
        if (!j)
          throw new Error(t("translation.runtimeMarketplaceMissing"));
        if (await P(j, x), await I() || (F.info("[翻译设置] 运行时资源包缺少 runtime 文件，开始补全资源"), await $a()), !await I())
          throw new Error(t("translation.runtimeInstallVerifyFailed"));
        try {
          await jw();
        } catch (se) {
          throw u.value = !1, F.error("[翻译设置] 运行时文件存在但动态加载验证失败:", se), new Error(t("translation.runtimeLoadVerifyFailed"));
        }
        c.value = !1, await Se(), ze.msg(t("translation.runtimeInstallSuccess"));
      } catch (k) {
        F.error("[翻译设置] 安装离线翻译运行时失败:", k), c.value = !1, await Se(), ze.msg(
          k instanceof Error ? k.message : t("translation.runtimeInstallFailed"),
          "error"
        );
      } finally {
        c.value = !1;
      }
    }, E = (k) => Array.isArray(k.dependencies) ? k.dependencies.filter((x) => typeof x == "string" && !!x.trim()) : [], T = (k) => !!(k.packageUrl && k.status !== "included"), P = async (k, x, j = /* @__PURE__ */ new Set()) => {
      if (!j.has(k.id)) {
        j.add(k.id);
        try {
          for (const se of E(k)) {
            const O = x.find((z) => z.id === se);
            if (!O)
              throw new Error(t("plugins.dependencyMissing", { id: se }));
            await P(O, x, j);
          }
          k.packageUrl && T(k) && (F.info("[翻译设置] 开始安装离线翻译运行时资源包", {
            pluginId: k.id,
            packageUrl: k.packageUrl
          }), await Ql(
            k.packageUrl,
            !0,
            k.packageSubdir,
            k.sizeBytes
          ));
        } finally {
          j.delete(k.id);
        }
      }
    }, L = async (k) => {
      try {
        await $("set_translation_engine", { engine: k }), ze.msg(t("translation.engineSaved"));
      } catch (x) {
        F.info("Failed to save translation engine:", x), ze.msg(t("translation.engineSaveFailed"), "error");
      }
    }, Z = async () => {
      if (F.info("[翻译设置] 开始下载离线模型..."), !await I()) {
        ze.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await $a(), await I();
      } catch (k) {
        F.error("[翻译设置] 修复离线翻译运行时失败:", k), ze.msg(k instanceof Error && k.message ? k.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      s.value = !0, S(), bi((k) => {
        const x = k.file || "";
        k.status === "initiate" ? g(x, 0, "downloading") : k.status === "progress" && k.progress !== void 0 ? g(x, Math.round(k.progress), "downloading") : k.status === "done" && g(x, 100, "done");
      });
      try {
        await Xa(), d.value.forEach((k) => {
          k.status !== "done" && (k.status = "done"), k.progress = 100;
        }), o.value = !0, a.value = !0, r.value = await Yn(), F.info("[翻译设置] 模型下载并加载成功，更新后端激活状态为 true"), await $("set_offline_model_activated", { activated: !0 }), ze.msg(t("translation.modelLoadSuccess"));
      } catch (k) {
        F.error("[翻译设置] 模型下载失败:", k), d.value.forEach((x) => {
          (x.status === "downloading" || x.status === "pending") && (x.status = "error");
        }), o.value = !1, ze.msg(k instanceof Error && k.message ? k.message : t("translation.modelLoadFailed"), "error");
      } finally {
        s.value = !1, bi(null), o.value = xo(), r.value = await Yn(), F.info(`[翻译设置] 最终状态 - 内存加载: ${o.value}, 缓存存在: ${r.value.isCached}`);
      }
    }, U = async () => {
      if (F.info("[翻译设置] 开始激活离线模型..."), !await I()) {
        ze.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await $a(), await I();
      } catch (k) {
        F.error("[翻译设置] 修复离线翻译运行时失败:", k), ze.msg(k instanceof Error && k.message ? k.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      s.value = !0;
      try {
        await Xa(), o.value = !0, a.value = !0, F.info("[翻译设置] 模型激活成功，更新后端激活状态为 true"), await $("set_offline_model_activated", { activated: !0 }), ze.msg(t("translation.modelLoadSuccess"));
      } catch (k) {
        F.error("[翻译设置] 模型激活失败:", k), o.value = !1, ze.msg(k instanceof Error && k.message ? k.message : t("translation.modelLoadFailed"), "error");
      } finally {
        s.value = !1, o.value = xo(), F.info(`[翻译设置] 激活后状态 - 内存加载: ${o.value}`);
      }
    }, Q = async () => {
      F.info("[翻译设置] 开始删除离线模型..."), i.value = !0;
      try {
        await Qw(), await e1(), o.value = !1, a.value = !1, r.value = { isCached: !1, cacheType: "none" }, F.info("[翻译设置] 模型删除成功，更新后端激活状态为 false"), await $("set_offline_model_activated", { activated: !1 }), ze.msg(t("translation.modelDeleted"));
      } catch (k) {
        F.error("[翻译设置] 模型删除失败:", k), ze.msg(t("translation.modelDeleteFailed"), "error");
      } finally {
        i.value = !1, o.value = xo(), r.value = await Yn(), F.info(`[翻译设置] 删除后状态 - 内存加载: ${o.value}, 缓存存在: ${r.value.isCached}`);
      }
    };
    return Pe(async () => {
      F.info("[翻译设置] 页面初始化..."), await I();
      try {
        const j = await $("get_translation_engine");
        F.info(`[翻译设置] 从后端获取翻译引擎: ${j}`), j && ["google", "bing", "offline", "local-ai"].includes(j) && (n.value = j);
      } catch (j) {
        F.error("[翻译设置] 获取翻译引擎失败:", j);
      }
      const k = xo(), x = Yw();
      r.value = await Yn(), F.info(`[翻译设置] 前端状态 - 内存加载: ${k}, 正在初始化: ${x}, 缓存存在: ${r.value.isCached}`), o.value = k, s.value = x;
      try {
        const j = await $("get_offline_model_activated");
        F.info(`[翻译设置] 后端激活状态: ${j}`), a.value = j, j && !r.value.isCached && (F.info("[翻译设置] 后端已激活但缓存不存在，重置后端状态"), await $("set_offline_model_activated", { activated: !1 }), a.value = !1), !j && k && (F.info("[翻译设置] 内存已加载但后端未标记，同步后端状态为 true"), await $("set_offline_model_activated", { activated: !0 }), a.value = !0);
      } catch (j) {
        F.error("[翻译设置] 处理激活状态失败:", j);
      }
    }), (k, x) => {
      const j = Rs, se = xs, O = iy;
      return w(), R("div", F1, [
        H(" 固定标题 "),
        y("div", V1, [
          y(
            "h3",
            D1,
            K(k.$t("translation.title")),
            1
            /* TEXT */
          )
        ]),
        H(" 可滚动内容 "),
        y("main", H1, [
          H(" 默认翻译引擎 "),
          y("section", j1, [
            y("div", W1, [
              y(
                "div",
                U1,
                K(k.$t("translation.defaultEngine")),
                1
                /* TEXT */
              ),
              y(
                "div",
                K1,
                K(k.$t("translation.defaultEngineDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", G1, [
              B(se, {
                class: "summarize-input !w-36",
                modelValue: n.value,
                "onUpdate:modelValue": x[0] || (x[0] = (z) => n.value = z),
                onChange: L
              }, {
                default: q(() => [
                  (w(!0), R(
                    Ie,
                    null,
                    st(v.value, (z) => (w(), Y(j, {
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
          y("section", Z1, [
            y("div", q1, [
              y(
                "div",
                Y1,
                K(k.$t("translation.offlineModel")),
                1
                /* TEXT */
              ),
              y(
                "div",
                J1,
                K(k.$t("translation.offlineModelDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", X1, [
              y("div", Q1, [
                y(
                  "span",
                  {
                    class: N(["min-w-0 break-words text-sm font-medium", f.value])
                  },
                  K(m.value),
                  3
                  /* TEXT, CLASS */
                ),
                !u.value && !s.value ? (w(), Y(l(Ro), {
                  key: 0,
                  type: "primary",
                  size: "small",
                  loading: c.value,
                  onClick: _
                }, {
                  default: q(() => [
                    on(
                      K(k.$t("translation.installRuntime")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : H("v-if", !0),
                u.value && !p.value && !s.value && !c.value ? (w(), Y(l(Ro), {
                  key: 1,
                  type: "primary",
                  size: "small",
                  onClick: Z
                }, {
                  default: q(() => [
                    on(
                      K(k.$t("translation.loadModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : H("v-if", !0),
                u.value && p.value && !o.value && !a.value && !s.value && !c.value ? (w(), Y(l(Ro), {
                  key: 2,
                  type: "primary",
                  size: "small",
                  onClick: U
                }, {
                  default: q(() => [
                    on(
                      K(k.$t("translation.activateModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : H("v-if", !0),
                p.value && !s.value && !c.value ? (w(), Y(l(Ro), {
                  key: 3,
                  type: "default",
                  size: "small",
                  onClick: Q,
                  loading: i.value
                }, {
                  default: q(() => [
                    on(
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
          s.value ? (w(), R("section", e2, [
            y("div", t2, [
              y(
                "div",
                n2,
                K(k.$t("translation.downloadProgress")),
                1
                /* TEXT */
              ),
              y(
                "div",
                o2,
                K(k.$t("translation.downloadProgressDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", a2, [
              y("div", s2, [
                (w(!0), R(
                  Ie,
                  null,
                  st(d.value, (z) => (w(), R("div", {
                    key: z.file,
                    class: "flex items-center gap-3 py-1"
                  }, [
                    y("span", r2, [
                      z.status === "done" ? (w(), R("span", i2, "✓")) : z.status === "error" ? (w(), R("span", l2, "✗")) : z.status === "downloading" ? (w(), R("span", u2, "↓")) : (w(), R("span", c2, "○"))
                    ]),
                    y("span", {
                      class: "w-64 truncate text-sm text-panel-text-secondary",
                      title: z.file
                    }, K(z.file), 9, d2),
                    y(
                      "span",
                      f2,
                      K(z.size),
                      1
                      /* TEXT */
                    ),
                    y("div", p2, [
                      z.status === "downloading" ? (w(), Y(O, {
                        key: 0,
                        percentage: z.progress,
                        "stroke-width": 6,
                        "show-text": !0,
                        "text-inside": !1
                      }, null, 8, ["percentage"])) : z.status === "done" ? (w(), R(
                        "span",
                        m2,
                        K(k.$t("translation.completed")),
                        1
                        /* TEXT */
                      )) : z.status === "error" ? (w(), R(
                        "span",
                        h2,
                        K(k.$t("translation.failed")),
                        1
                        /* TEXT */
                      )) : (w(), R(
                        "span",
                        v2,
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
          h.value && !s.value ? (w(), R("section", g2, [
            y("div", y2, [
              y(
                "div",
                b2,
                K(k.$t("translation.modelInfo")),
                1
                /* TEXT */
              ),
              y(
                "div",
                w2,
                K(k.$t("translation.modelInfoDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", _2, [
              y("div", S2, [
                y("div", k2, [
                  y("div", C2, [
                    y(
                      "span",
                      T2,
                      K(k.$t("translation.modelName")),
                      1
                      /* TEXT */
                    ),
                    x[1] || (x[1] = y(
                      "span",
                      { class: "info-value" },
                      "Xenova/opus-mt-en-zh",
                      -1
                      /* HOISTED */
                    ))
                  ]),
                  y("div", E2, [
                    y(
                      "span",
                      P2,
                      K(k.$t("translation.modelSize")),
                      1
                      /* TEXT */
                    ),
                    y(
                      "span",
                      O2,
                      K(r.value.estimatedSize || "~300MB"),
                      1
                      /* TEXT */
                    )
                  ]),
                  y("div", I2, [
                    y(
                      "span",
                      $2,
                      K(k.$t("translation.supportLang")),
                      1
                      /* TEXT */
                    ),
                    y(
                      "span",
                      L2,
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
          y("section", x2, [
            y("div", R2, [
              y(
                "div",
                A2,
                K(k.$t("translation.usage")),
                1
                /* TEXT */
              ),
              y(
                "div",
                M2,
                K(k.$t("translation.usageDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", z2, [
              y("div", N2, [
                y("div", B2, [
                  x[2] || (x[2] = y(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    F2,
                    K(k.$t("translation.usageTip1")),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", V2, [
                  x[3] || (x[3] = y(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    D2,
                    K(k.$t("translation.usageTip2")),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", H2, [
                  x[4] || (x[4] = y(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    j2,
                    K(k.$t("translation.usageTip3")),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", W2, [
                  x[5] || (x[5] = y(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    U2,
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
}), Z2 = /* @__PURE__ */ wo(G2, [["__scopeId", "data-v-c454786b"]]), q2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Z2
}, Symbol.toStringTag, { value: "Module" })), Y2 = { class: "settings-panel" }, J2 = { class: "panel-header" }, X2 = { class: "panel-title" }, Q2 = { class: "panel-content" }, e_ = { class: "summarize-section" }, t_ = { class: "summarize-label" }, n_ = { class: "summarize-label-title" }, o_ = { class: "summarize-label-desc" }, a_ = { class: "summarize-input-wrapper line-height-control" }, s_ = { class: "line-height-value" }, r_ = { class: "summarize-section" }, i_ = { class: "summarize-label" }, l_ = { class: "summarize-label-title" }, u_ = { class: "summarize-label-desc" }, c_ = { class: "summarize-input-wrapper image-scale-control" }, d_ = { class: "image-scale-value" }, f_ = { class: "summarize-section" }, p_ = { class: "summarize-label" }, m_ = { class: "summarize-label-title" }, h_ = { class: "summarize-label-desc" }, v_ = { class: "summarize-input-wrapper" }, g_ = { class: "summarize-section" }, y_ = { class: "summarize-label" }, b_ = { class: "summarize-label-title" }, w_ = { class: "summarize-label-desc" }, __ = { class: "summarize-input-wrapper" }, S_ = { class: "summarize-section transparent-input" }, k_ = { class: "summarize-label" }, C_ = { class: "summarize-label-title" }, T_ = { class: "summarize-label-desc" }, E_ = { class: "summarize-input-wrapper" }, P_ = { class: "summarize-section transparent-input" }, O_ = { class: "summarize-label" }, I_ = { class: "summarize-label-title" }, $_ = { class: "summarize-label-desc" }, L_ = { class: "summarize-input-wrapper" }, x_ = { class: "summarize-section transparent-input" }, R_ = { class: "summarize-label" }, A_ = { class: "summarize-label-title" }, M_ = { class: "summarize-label-desc" }, z_ = { class: "summarize-input-wrapper" }, N_ = { class: "preview-box" }, B_ = /* @__PURE__ */ G({
  name: "AttachmentSettings",
  __name: "index",
  setup(e) {
    const { t } = ts(), n = xw(), o = M({
      pathTemplate: "assets/${noteFileName}/",
      filenameFormat: "snippets-code",
      defaultImageScalePercent: 100,
      responsiveImages: !0,
      showImagePath: !0
    }), a = M(!1), r = M(!1), s = M(n.editorLineHeight), i = b(() => {
      const m = t("settings.attachment.exampleNoteName"), f = u(o.value.filenameFormat);
      return o.value.pathTemplate.replace("${noteFileName}", m) + f;
    });
    function u(m) {
      const f = /* @__PURE__ */ new Date(), h = f.toISOString().slice(0, 10).replace(/-/g, ""), S = f.toTimeString().slice(0, 8).replace(/:/g, "");
      switch (m) {
        case "snippets-code":
          return `Pasted image ${h}${S}.png`;
        case "simple":
          return `image-${h}-${S}.png`;
        case "uuid":
          return `${crypto.randomUUID()}.png`;
        default:
          return "image.png";
      }
    }
    async function c() {
      if (!r.value) {
        r.value = !0;
        try {
          await B1(o.value), ze.msg(t("settings.attachment.configSaved"));
        } catch (m) {
          console.error("保存配置失败:", m), ze.msg(t("settings.attachment.configSaveFailed"), "error");
        } finally {
          r.value = !1;
        }
      }
    }
    const d = async (m) => {
      const f = Array.isArray(m) ? m[0] : m;
      o.value.defaultImageScalePercent = Math.min(200, Math.max(25, Math.round(f))), await c();
    }, p = async (m, f) => {
      o.value[m] = f, await c();
    }, v = async (m) => {
      const f = Array.isArray(m) ? m[0] : m;
      try {
        await n.updateEditorLineHeight(f);
      } catch (h) {
        s.value = n.editorLineHeight, ze.msg(`${t("settings.settingFailed")}: ${h}`, "error");
      }
    };
    return ie(() => n.editorLineHeight, (m) => {
      s.value = m;
    }), Pe(async () => {
      a.value = !0;
      try {
        o.value = await N1(!0);
      } catch (m) {
        console.error("加载配置失败:", m);
      } finally {
        a.value = !1;
      }
    }), (m, f) => {
      const h = My, S = hs, g = Rs, I = xs;
      return w(), R("div", Y2, [
        H(" 固定标题 "),
        y("div", J2, [
          y(
            "h3",
            X2,
            K(m.$t("settings.attachment.title")),
            1
            /* TEXT */
          )
        ]),
        H(" 可滚动内容 "),
        y("main", Q2, [
          H(" 编辑器行距 "),
          y("section", e_, [
            y("div", t_, [
              y(
                "div",
                n_,
                K(m.$t("settings.editorLineHeight")),
                1
                /* TEXT */
              ),
              y(
                "div",
                o_,
                K(m.$t("settings.editorLineHeightDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", a_, [
              B(h, {
                modelValue: l(s),
                "onUpdate:modelValue": f[0] || (f[0] = (_) => Jn(s) ? s.value = _ : null),
                min: 1.2,
                max: 2,
                step: 0.05,
                "show-tooltip": !1,
                onChange: v
              }, null, 8, ["modelValue"]),
              y(
                "span",
                s_,
                K(l(s).toFixed(2)),
                1
                /* TEXT */
              )
            ])
          ]),
          H(" 图片默认缩放 "),
          y("section", r_, [
            y("div", i_, [
              y(
                "div",
                l_,
                K(m.$t("settings.attachment.defaultImageScale")),
                1
                /* TEXT */
              ),
              y(
                "div",
                u_,
                K(m.$t("settings.attachment.defaultImageScaleHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", c_, [
              B(h, {
                modelValue: l(o).defaultImageScalePercent,
                "onUpdate:modelValue": f[1] || (f[1] = (_) => l(o).defaultImageScalePercent = _),
                min: 25,
                max: 200,
                step: 5,
                "show-tooltip": !1,
                disabled: l(r),
                onChange: d
              }, null, 8, ["modelValue", "disabled"]),
              y(
                "span",
                d_,
                K(l(o).defaultImageScalePercent) + "%",
                1
                /* TEXT */
              )
            ])
          ]),
          H(" 图片响应式适配 "),
          y("section", f_, [
            y("div", p_, [
              y(
                "div",
                m_,
                K(m.$t("settings.attachment.responsiveImages")),
                1
                /* TEXT */
              ),
              y(
                "div",
                h_,
                K(m.$t("settings.attachment.responsiveImagesHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", v_, [
              B(l(_i), {
                "model-value": l(o).responsiveImages,
                disabled: l(r),
                "active-text": m.$t("common.on"),
                "inactive-text": m.$t("common.off"),
                onChange: f[2] || (f[2] = (_) => p("responsiveImages", _))
              }, null, 8, ["model-value", "disabled", "active-text", "inactive-text"])
            ])
          ]),
          H(" 图片附件路径 "),
          y("section", g_, [
            y("div", y_, [
              y(
                "div",
                b_,
                K(m.$t("settings.attachment.showImagePath")),
                1
                /* TEXT */
              ),
              y(
                "div",
                w_,
                K(m.$t("settings.attachment.showImagePathHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", __, [
              B(l(_i), {
                "model-value": l(o).showImagePath,
                disabled: l(r),
                "active-text": m.$t("common.on"),
                "inactive-text": m.$t("common.off"),
                onChange: f[3] || (f[3] = (_) => p("showImagePath", _))
              }, null, 8, ["model-value", "disabled", "active-text", "inactive-text"])
            ])
          ]),
          H(" 附件路径模板 "),
          y("section", S_, [
            y("div", k_, [
              y(
                "div",
                C_,
                K(m.$t("settings.attachment.pathTemplate")),
                1
                /* TEXT */
              ),
              y(
                "div",
                T_,
                K(m.$t("settings.attachment.pathTemplateHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", E_, [
              B(S, {
                class: "summarize-input",
                modelValue: l(o).pathTemplate,
                "onUpdate:modelValue": f[4] || (f[4] = (_) => l(o).pathTemplate = _),
                placeholder: m.$t("settings.attachment.pathTemplatePlaceholder"),
                disabled: l(r),
                onBlur: c
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          H(" 文件名生成格式 "),
          y("section", P_, [
            y("div", O_, [
              y(
                "div",
                I_,
                K(m.$t("settings.attachment.filenameFormat")),
                1
                /* TEXT */
              ),
              y(
                "div",
                $_,
                K(m.$t("settings.attachment.filenameFormatHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", L_, [
              B(I, {
                class: "summarize-input !w-64",
                modelValue: l(o).filenameFormat,
                "onUpdate:modelValue": f[5] || (f[5] = (_) => l(o).filenameFormat = _),
                disabled: l(r),
                onChange: c
              }, {
                default: q(() => [
                  B(g, {
                    label: m.$t("settings.attachment.formatObsidian"),
                    value: "obsidian"
                  }, null, 8, ["label"]),
                  B(g, {
                    label: m.$t("settings.attachment.formatSimple"),
                    value: "simple"
                  }, null, 8, ["label"]),
                  B(g, {
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
          y("section", x_, [
            y("div", R_, [
              y(
                "div",
                A_,
                K(m.$t("settings.attachment.pathPreview")),
                1
                /* TEXT */
              ),
              y(
                "div",
                M_,
                K(m.$t("settings.attachment.pathPreviewHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", z_, [
              y("div", N_, [
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
}), F_ = /* @__PURE__ */ wo(B_, [["__scopeId", "data-v-1e36bf0d"]]), V_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: F_
}, Symbol.toStringTag, { value: "Module" }));
export {
  W_ as activate
};
