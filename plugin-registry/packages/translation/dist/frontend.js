import * as Ou from "vue";
import { inject as ye, createVNode as N, defineAsyncComponent as es, getCurrentInstance as Ue, ref as A, computed as b, unref as l, shallowRef as Zt, watchEffect as Si, readonly as ts, getCurrentScope as $u, onScopeDispose as Iu, onMounted as Pe, nextTick as ke, watch as re, isRef as Jn, warn as Lu, provide as mt, defineComponent as K, createElementBlock as R, openBlock as _, mergeProps as Yt, renderSlot as se, createElementVNode as y, toRef as wt, onUnmounted as ki, useAttrs as xu, useSlots as Ru, normalizeStyle as we, normalizeClass as M, createCommentVNode as H, Fragment as $e, createBlock as q, withCtx as Z, resolveDynamicComponent as at, withModifiers as Oe, toDisplayString as U, onBeforeUnmount as Ct, Transition as Mn, withDirectives as qe, vShow as At, reactive as Mt, onActivated as Au, onUpdated as Ci, cloneVNode as Mu, Text as zu, Comment as Nu, Teleport as Fu, onBeforeMount as Bu, onDeactivated as Vu, createTextVNode as nn, withKeys as Ot, createSlots as Du, toRaw as Hu, toRefs as Cn, resolveComponent as en, resolveDirective as ju, toHandlerKey as Wu, renderList as st, vModelText as Uu, normalizeProps as Ku, h as Ti, shallowReactive as Gu, isVNode as so, render as Do, markRaw as js } from "vue";
import * as Zu from "vue-i18n";
import { useI18n as ns } from "vue-i18n";
import * as Yu from "pinia";
import { defineStore as mo } from "pinia";
import * as qu from "vue-router";
var Ju = {
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
function Xu() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Qu(e, t, n) {
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
var ec = Symbol("icon-context");
function vt(e, t, n) {
  var o = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(r) {
      var s = Xu(), i = ye(ec, Ju);
      return function() {
        var u = r.size, c = r.strokeWidth, d = r.strokeLinecap, f = r.strokeLinejoin, h = r.theme, p = r.fill, m = r.spin, v = Qu(s, {
          size: u,
          strokeWidth: c,
          strokeLinecap: d,
          strokeLinejoin: f,
          theme: h,
          fill: p
        }, i), k = [i.prefix + "-icon"];
        return k.push(i.prefix + "-icon-" + e), t && i.rtl && k.push(i.prefix + "-icon-rtl"), m && k.push(i.prefix + "-icon-spin"), N("span", {
          class: k.join(" ")
        }, [n(v)]);
      };
    }
  };
  return o;
}
const tc = vt("close-small", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M14 14L34 34",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M14 34L34 14",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), nc = vt("copy", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), oc = vt("delete", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ac = vt("down", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), sc = vt("folder-open", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M40 41L44 21H8.8125L4 41H40Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), rc = vt("pushpin", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), ic = vt("setting-two", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ws = vt("switch", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M42 19H5.99998",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M30 7L42 19",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M6.79897 29H42.799",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M6.79895 29L18.799 41",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), lc = vt("translate", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M16 6L17 9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M6 11H28",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), uc = vt("up", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M13 30L25 18L37 30",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Us = vt("volume-up", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M24 6V42C17 42 11.7985 32.8391 11.7985 32.8391H6C4.89543 32.8391 4 31.9437 4 30.8391V17.0108C4 15.9062 4.89543 15.0108 6 15.0108H11.7985C11.7985 15.0108 17 6 24 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M32 24H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M38 18V30",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), F_ = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/translate",
    name: "Translate",
    component: () => Promise.resolve().then(() => C1)
  }), e.registerSettingsTab({
    id: "translation",
    labelKey: "translation.title",
    icon: lc,
    component: es(() => Promise.resolve().then(() => j2))
  });
}, Ei = Symbol(), Ao = "el", cc = "is-", tn = (e, t, n, o, a) => {
  let r = `${e}-${t}`;
  return n && (r += `-${n}`), o && (r += `__${o}`), a && (r += `--${a}`), r;
}, Pi = Symbol("namespaceContextKey"), os = (e) => {
  const t = e || (Ue() ? ye(Pi, A(Ao)) : A(Ao));
  return b(() => l(t) || Ao);
}, Ce = (e, t) => {
  const n = os(t);
  return {
    namespace: n,
    b: (v = "") => tn(n.value, e, v, "", ""),
    e: (v) => v ? tn(n.value, e, "", v, "") : "",
    m: (v) => v ? tn(n.value, e, "", "", v) : "",
    be: (v, k) => v && k ? tn(n.value, e, v, k, "") : "",
    em: (v, k) => v && k ? tn(n.value, e, "", v, k) : "",
    bm: (v, k) => v && k ? tn(n.value, e, v, "", k) : "",
    bem: (v, k, g) => v && k && g ? tn(n.value, e, v, k, g) : "",
    is: (v, ...k) => {
      const g = k.length >= 1 ? k[0] : !0;
      return v && g ? `${cc}${v}` : "";
    },
    cssVar: (v) => {
      const k = {};
      for (const g in v)
        v[g] && (k[`--${n.value}-${g}`] = v[g]);
      return k;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const k = {};
      for (const g in v)
        v[g] && (k[`--${n.value}-${e}-${g}`] = v[g]);
      return k;
    },
    cssVarBlockName: (v) => `--${n.value}-${e}-${v}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ro = () => {
}, dc = Object.prototype.hasOwnProperty, Ks = (e, t) => dc.call(e, t), je = Array.isArray, Ie = (e) => typeof e == "function", Be = (e) => typeof e == "string", Ye = (e) => e !== null && typeof e == "object", fc = Object.prototype.toString, pc = (e) => fc.call(e), mc = (e) => pc(e) === "[object Object]";
var Oi = typeof global == "object" && global && global.Object === Object && global, hc = typeof self == "object" && self && self.Object === Object && self, Tt = Oi || hc || Function("return this")(), St = Tt.Symbol, $i = Object.prototype, vc = $i.hasOwnProperty, gc = $i.toString, Dn = St ? St.toStringTag : void 0;
function yc(e) {
  var t = vc.call(e, Dn), n = e[Dn];
  try {
    e[Dn] = void 0;
    var o = !0;
  } catch {
  }
  var a = gc.call(e);
  return o && (t ? e[Dn] = n : delete e[Dn]), a;
}
var bc = Object.prototype, wc = bc.toString;
function _c(e) {
  return wc.call(e);
}
var Sc = "[object Null]", kc = "[object Undefined]", Gs = St ? St.toStringTag : void 0;
function zn(e) {
  return e == null ? e === void 0 ? kc : Sc : Gs && Gs in Object(e) ? yc(e) : _c(e);
}
function Tn(e) {
  return e != null && typeof e == "object";
}
var Cc = "[object Symbol]";
function sa(e) {
  return typeof e == "symbol" || Tn(e) && zn(e) == Cc;
}
function Tc(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = Array(o); ++n < o; )
    a[n] = t(e[n], n, e);
  return a;
}
var ht = Array.isArray, Zs = St ? St.prototype : void 0, Ys = Zs ? Zs.toString : void 0;
function Ii(e) {
  if (typeof e == "string")
    return e;
  if (ht(e))
    return Tc(e, Ii) + "";
  if (sa(e))
    return Ys ? Ys.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Ec = /\s/;
function Pc(e) {
  for (var t = e.length; t-- && Ec.test(e.charAt(t)); )
    ;
  return t;
}
var Oc = /^\s+/;
function $c(e) {
  return e && e.slice(0, Pc(e) + 1).replace(Oc, "");
}
function qt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var qs = NaN, Ic = /^[-+]0x[0-9a-f]+$/i, Lc = /^0b[01]+$/i, xc = /^0o[0-7]+$/i, Rc = parseInt;
function Js(e) {
  if (typeof e == "number")
    return e;
  if (sa(e))
    return qs;
  if (qt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = qt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = $c(e);
  var n = Lc.test(e);
  return n || xc.test(e) ? Rc(e.slice(2), n ? 2 : 8) : Ic.test(e) ? qs : +e;
}
function Li(e) {
  return e;
}
var Ac = "[object AsyncFunction]", Mc = "[object Function]", zc = "[object GeneratorFunction]", Nc = "[object Proxy]";
function xi(e) {
  if (!qt(e))
    return !1;
  var t = zn(e);
  return t == Mc || t == zc || t == Ac || t == Nc;
}
var wa = Tt["__core-js_shared__"], Xs = function() {
  var e = /[^.]+$/.exec(wa && wa.keys && wa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fc(e) {
  return !!Xs && Xs in e;
}
var Bc = Function.prototype, Vc = Bc.toString;
function rn(e) {
  if (e != null) {
    try {
      return Vc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Dc = /[\\^$.*+?()[\]{}|]/g, Hc = /^\[object .+?Constructor\]$/, jc = Function.prototype, Wc = Object.prototype, Uc = jc.toString, Kc = Wc.hasOwnProperty, Gc = RegExp(
  "^" + Uc.call(Kc).replace(Dc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Zc(e) {
  if (!qt(e) || Fc(e))
    return !1;
  var t = xi(e) ? Gc : Hc;
  return t.test(rn(e));
}
function Yc(e, t) {
  return e?.[t];
}
function ln(e, t) {
  var n = Yc(e, t);
  return Zc(n) ? n : void 0;
}
var Aa = ln(Tt, "WeakMap");
function qc(e, t, n) {
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
var Jc = 800, Xc = 16, Qc = Date.now;
function ed(e) {
  var t = 0, n = 0;
  return function() {
    var o = Qc(), a = Xc - (o - n);
    if (n = o, a > 0) {
      if (++t >= Jc)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function td(e) {
  return function() {
    return e;
  };
}
var Ho = function() {
  try {
    var e = ln(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), nd = Ho ? function(e, t) {
  return Ho(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: td(t),
    writable: !0
  });
} : Li, od = ed(nd);
function ad(e, t, n, o) {
  e.length;
  for (var a = n + 1; a--; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var sd = 9007199254740991, rd = /^(?:0|[1-9]\d*)$/;
function as(e, t) {
  var n = typeof e;
  return t = t ?? sd, !!t && (n == "number" || n != "symbol" && rd.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function id(e, t, n) {
  t == "__proto__" && Ho ? Ho(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function ss(e, t) {
  return e === t || e !== e && t !== t;
}
var ld = Object.prototype, ud = ld.hasOwnProperty;
function cd(e, t, n) {
  var o = e[t];
  (!(ud.call(e, t) && ss(o, n)) || n === void 0 && !(t in e)) && id(e, t, n);
}
var Qs = Math.max;
function dd(e, t, n) {
  return t = Qs(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, a = -1, r = Qs(o.length - t, 0), s = Array(r); ++a < r; )
      s[a] = o[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = o[a];
    return i[t] = n(s), qc(e, this, i);
  };
}
var fd = 9007199254740991;
function rs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fd;
}
function pd(e) {
  return e != null && rs(e.length) && !xi(e);
}
var md = Object.prototype;
function hd(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || md;
  return e === n;
}
function vd(e, t) {
  for (var n = -1, o = Array(e); ++n < e; )
    o[n] = t(n);
  return o;
}
var gd = "[object Arguments]";
function er(e) {
  return Tn(e) && zn(e) == gd;
}
var Ri = Object.prototype, yd = Ri.hasOwnProperty, bd = Ri.propertyIsEnumerable, is = er(/* @__PURE__ */ function() {
  return arguments;
}()) ? er : function(e) {
  return Tn(e) && yd.call(e, "callee") && !bd.call(e, "callee");
};
function wd() {
  return !1;
}
var Ai = typeof exports == "object" && exports && !exports.nodeType && exports, tr = Ai && typeof module == "object" && module && !module.nodeType && module, _d = tr && tr.exports === Ai, nr = _d ? Tt.Buffer : void 0, Sd = nr ? nr.isBuffer : void 0, Ma = Sd || wd, kd = "[object Arguments]", Cd = "[object Array]", Td = "[object Boolean]", Ed = "[object Date]", Pd = "[object Error]", Od = "[object Function]", $d = "[object Map]", Id = "[object Number]", Ld = "[object Object]", xd = "[object RegExp]", Rd = "[object Set]", Ad = "[object String]", Md = "[object WeakMap]", zd = "[object ArrayBuffer]", Nd = "[object DataView]", Fd = "[object Float32Array]", Bd = "[object Float64Array]", Vd = "[object Int8Array]", Dd = "[object Int16Array]", Hd = "[object Int32Array]", jd = "[object Uint8Array]", Wd = "[object Uint8ClampedArray]", Ud = "[object Uint16Array]", Kd = "[object Uint32Array]", Se = {};
Se[Fd] = Se[Bd] = Se[Vd] = Se[Dd] = Se[Hd] = Se[jd] = Se[Wd] = Se[Ud] = Se[Kd] = !0;
Se[kd] = Se[Cd] = Se[zd] = Se[Td] = Se[Nd] = Se[Ed] = Se[Pd] = Se[Od] = Se[$d] = Se[Id] = Se[Ld] = Se[xd] = Se[Rd] = Se[Ad] = Se[Md] = !1;
function Gd(e) {
  return Tn(e) && rs(e.length) && !!Se[zn(e)];
}
function Zd(e) {
  return function(t) {
    return e(t);
  };
}
var Mi = typeof exports == "object" && exports && !exports.nodeType && exports, Xn = Mi && typeof module == "object" && module && !module.nodeType && module, Yd = Xn && Xn.exports === Mi, _a = Yd && Oi.process, or = function() {
  try {
    var e = Xn && Xn.require && Xn.require("util").types;
    return e || _a && _a.binding && _a.binding("util");
  } catch {
  }
}(), ar = or && or.isTypedArray, zi = ar ? Zd(ar) : Gd, qd = Object.prototype, Jd = qd.hasOwnProperty;
function Xd(e, t) {
  var n = ht(e), o = !n && is(e), a = !n && !o && Ma(e), r = !n && !o && !a && zi(e), s = n || o || a || r, i = s ? vd(e.length, String) : [], u = i.length;
  for (var c in e)
    Jd.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    as(c, u))) && i.push(c);
  return i;
}
function Qd(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var ef = Qd(Object.keys, Object), tf = Object.prototype, nf = tf.hasOwnProperty;
function of(e) {
  if (!hd(e))
    return ef(e);
  var t = [];
  for (var n in Object(e))
    nf.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Ni(e) {
  return pd(e) ? Xd(e) : of(e);
}
var af = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, sf = /^\w*$/;
function ls(e, t) {
  if (ht(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || sa(e) ? !0 : sf.test(e) || !af.test(e) || t != null && e in Object(t);
}
var io = ln(Object, "create");
function rf() {
  this.__data__ = io ? io(null) : {}, this.size = 0;
}
function lf(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var uf = "__lodash_hash_undefined__", cf = Object.prototype, df = cf.hasOwnProperty;
function ff(e) {
  var t = this.__data__;
  if (io) {
    var n = t[e];
    return n === uf ? void 0 : n;
  }
  return df.call(t, e) ? t[e] : void 0;
}
var pf = Object.prototype, mf = pf.hasOwnProperty;
function hf(e) {
  var t = this.__data__;
  return io ? t[e] !== void 0 : mf.call(t, e);
}
var vf = "__lodash_hash_undefined__";
function gf(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = io && t === void 0 ? vf : t, this;
}
function an(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
an.prototype.clear = rf;
an.prototype.delete = lf;
an.prototype.get = ff;
an.prototype.has = hf;
an.prototype.set = gf;
function yf() {
  this.__data__ = [], this.size = 0;
}
function ra(e, t) {
  for (var n = e.length; n--; )
    if (ss(e[n][0], t))
      return n;
  return -1;
}
var bf = Array.prototype, wf = bf.splice;
function _f(e) {
  var t = this.__data__, n = ra(t, e);
  if (n < 0)
    return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : wf.call(t, n, 1), --this.size, !0;
}
function Sf(e) {
  var t = this.__data__, n = ra(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function kf(e) {
  return ra(this.__data__, e) > -1;
}
function Cf(e, t) {
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
Nt.prototype.clear = yf;
Nt.prototype.delete = _f;
Nt.prototype.get = Sf;
Nt.prototype.has = kf;
Nt.prototype.set = Cf;
var lo = ln(Tt, "Map");
function Tf() {
  this.size = 0, this.__data__ = {
    hash: new an(),
    map: new (lo || Nt)(),
    string: new an()
  };
}
function Ef(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ia(e, t) {
  var n = e.__data__;
  return Ef(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Pf(e) {
  var t = ia(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Of(e) {
  return ia(this, e).get(e);
}
function $f(e) {
  return ia(this, e).has(e);
}
function If(e, t) {
  var n = ia(this, e), o = n.size;
  return n.set(e, t), this.size += n.size == o ? 0 : 1, this;
}
function Ft(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Ft.prototype.clear = Tf;
Ft.prototype.delete = Pf;
Ft.prototype.get = Of;
Ft.prototype.has = $f;
Ft.prototype.set = If;
var Lf = "Expected a function";
function us(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Lf);
  var n = function() {
    var o = arguments, a = t ? t.apply(this, o) : o[0], r = n.cache;
    if (r.has(a))
      return r.get(a);
    var s = e.apply(this, o);
    return n.cache = r.set(a, s) || r, s;
  };
  return n.cache = new (us.Cache || Ft)(), n;
}
us.Cache = Ft;
var xf = 500;
function Rf(e) {
  var t = us(e, function(o) {
    return n.size === xf && n.clear(), o;
  }), n = t.cache;
  return t;
}
var Af = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Mf = /\\(\\)?/g, zf = Rf(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Af, function(n, o, a, r) {
    t.push(a ? r.replace(Mf, "$1") : o || n);
  }), t;
});
function Nf(e) {
  return e == null ? "" : Ii(e);
}
function la(e, t) {
  return ht(e) ? e : ls(e, t) ? [e] : zf(Nf(e));
}
function ho(e) {
  if (typeof e == "string" || sa(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function cs(e, t) {
  t = la(t, e);
  for (var n = 0, o = t.length; e != null && n < o; )
    e = e[ho(t[n++])];
  return n && n == o ? e : void 0;
}
function Gt(e, t, n) {
  var o = e == null ? void 0 : cs(e, t);
  return o === void 0 ? n : o;
}
function Fi(e, t) {
  for (var n = -1, o = t.length, a = e.length; ++n < o; )
    e[a + n] = t[n];
  return e;
}
var sr = St ? St.isConcatSpreadable : void 0;
function Ff(e) {
  return ht(e) || is(e) || !!(sr && e && e[sr]);
}
function Bf(e, t, n, o, a) {
  var r = -1, s = e.length;
  for (n || (n = Ff), a || (a = []); ++r < s; ) {
    var i = e[r];
    n(i) ? Fi(a, i) : a[a.length] = i;
  }
  return a;
}
function Vf(e) {
  var t = e == null ? 0 : e.length;
  return t ? Bf(e) : [];
}
function Df(e) {
  return od(dd(e, void 0, Vf), e + "");
}
function Kt() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return ht(e) ? e : [e];
}
function Hf() {
  this.__data__ = new Nt(), this.size = 0;
}
function jf(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Wf(e) {
  return this.__data__.get(e);
}
function Uf(e) {
  return this.__data__.has(e);
}
var Kf = 200;
function Gf(e, t) {
  var n = this.__data__;
  if (n instanceof Nt) {
    var o = n.__data__;
    if (!lo || o.length < Kf - 1)
      return o.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Ft(o);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Lt(e) {
  var t = this.__data__ = new Nt(e);
  this.size = t.size;
}
Lt.prototype.clear = Hf;
Lt.prototype.delete = jf;
Lt.prototype.get = Wf;
Lt.prototype.has = Uf;
Lt.prototype.set = Gf;
function Zf(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, a = 0, r = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (r[a++] = s);
  }
  return r;
}
function Yf() {
  return [];
}
var qf = Object.prototype, Jf = qf.propertyIsEnumerable, rr = Object.getOwnPropertySymbols, Xf = rr ? function(e) {
  return e == null ? [] : (e = Object(e), Zf(rr(e), function(t) {
    return Jf.call(e, t);
  }));
} : Yf;
function Qf(e, t, n) {
  var o = t(e);
  return ht(e) ? o : Fi(o, n(e));
}
function ir(e) {
  return Qf(e, Ni, Xf);
}
var za = ln(Tt, "DataView"), Na = ln(Tt, "Promise"), Fa = ln(Tt, "Set"), lr = "[object Map]", ep = "[object Object]", ur = "[object Promise]", cr = "[object Set]", dr = "[object WeakMap]", fr = "[object DataView]", tp = rn(za), np = rn(lo), op = rn(Na), ap = rn(Fa), sp = rn(Aa), jt = zn;
(za && jt(new za(new ArrayBuffer(1))) != fr || lo && jt(new lo()) != lr || Na && jt(Na.resolve()) != ur || Fa && jt(new Fa()) != cr || Aa && jt(new Aa()) != dr) && (jt = function(e) {
  var t = zn(e), n = t == ep ? e.constructor : void 0, o = n ? rn(n) : "";
  if (o)
    switch (o) {
      case tp:
        return fr;
      case np:
        return lr;
      case op:
        return ur;
      case ap:
        return cr;
      case sp:
        return dr;
    }
  return t;
});
var pr = Tt.Uint8Array, rp = "__lodash_hash_undefined__";
function ip(e) {
  return this.__data__.set(e, rp), this;
}
function lp(e) {
  return this.__data__.has(e);
}
function jo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Ft(); ++t < n; )
    this.add(e[t]);
}
jo.prototype.add = jo.prototype.push = ip;
jo.prototype.has = lp;
function up(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function cp(e, t) {
  return e.has(t);
}
var dp = 1, fp = 2;
function Bi(e, t, n, o, a, r) {
  var s = n & dp, i = e.length, u = t.length;
  if (i != u && !(s && u > i))
    return !1;
  var c = r.get(e), d = r.get(t);
  if (c && d)
    return c == t && d == e;
  var f = -1, h = !0, p = n & fp ? new jo() : void 0;
  for (r.set(e, t), r.set(t, e); ++f < i; ) {
    var m = e[f], v = t[f];
    if (o)
      var k = s ? o(v, m, f, t, e, r) : o(m, v, f, e, t, r);
    if (k !== void 0) {
      if (k)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!up(t, function(g, I) {
        if (!cp(p, I) && (m === g || a(m, g, n, o, r)))
          return p.push(I);
      })) {
        h = !1;
        break;
      }
    } else if (!(m === v || a(m, v, n, o, r))) {
      h = !1;
      break;
    }
  }
  return r.delete(e), r.delete(t), h;
}
function pp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o, a) {
    n[++t] = [a, o];
  }), n;
}
function mp(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(o) {
    n[++t] = o;
  }), n;
}
var hp = 1, vp = 2, gp = "[object Boolean]", yp = "[object Date]", bp = "[object Error]", wp = "[object Map]", _p = "[object Number]", Sp = "[object RegExp]", kp = "[object Set]", Cp = "[object String]", Tp = "[object Symbol]", Ep = "[object ArrayBuffer]", Pp = "[object DataView]", mr = St ? St.prototype : void 0, Sa = mr ? mr.valueOf : void 0;
function Op(e, t, n, o, a, r, s) {
  switch (n) {
    case Pp:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ep:
      return !(e.byteLength != t.byteLength || !r(new pr(e), new pr(t)));
    case gp:
    case yp:
    case _p:
      return ss(+e, +t);
    case bp:
      return e.name == t.name && e.message == t.message;
    case Sp:
    case Cp:
      return e == t + "";
    case wp:
      var i = pp;
    case kp:
      var u = o & hp;
      if (i || (i = mp), e.size != t.size && !u)
        return !1;
      var c = s.get(e);
      if (c)
        return c == t;
      o |= vp, s.set(e, t);
      var d = Bi(i(e), i(t), o, a, r, s);
      return s.delete(e), d;
    case Tp:
      if (Sa)
        return Sa.call(e) == Sa.call(t);
  }
  return !1;
}
var $p = 1, Ip = Object.prototype, Lp = Ip.hasOwnProperty;
function xp(e, t, n, o, a, r) {
  var s = n & $p, i = ir(e), u = i.length, c = ir(t), d = c.length;
  if (u != d && !s)
    return !1;
  for (var f = u; f--; ) {
    var h = i[f];
    if (!(s ? h in t : Lp.call(t, h)))
      return !1;
  }
  var p = r.get(e), m = r.get(t);
  if (p && m)
    return p == t && m == e;
  var v = !0;
  r.set(e, t), r.set(t, e);
  for (var k = s; ++f < u; ) {
    h = i[f];
    var g = e[h], I = t[h];
    if (o)
      var S = s ? o(I, g, h, t, e, r) : o(g, I, h, e, t, r);
    if (!(S === void 0 ? g === I || a(g, I, n, o, r) : S)) {
      v = !1;
      break;
    }
    k || (k = h == "constructor");
  }
  if (v && !k) {
    var O = e.constructor, T = t.constructor;
    O != T && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof T == "function" && T instanceof T) && (v = !1);
  }
  return r.delete(e), r.delete(t), v;
}
var Rp = 1, hr = "[object Arguments]", vr = "[object Array]", To = "[object Object]", Ap = Object.prototype, gr = Ap.hasOwnProperty;
function Mp(e, t, n, o, a, r) {
  var s = ht(e), i = ht(t), u = s ? vr : jt(e), c = i ? vr : jt(t);
  u = u == hr ? To : u, c = c == hr ? To : c;
  var d = u == To, f = c == To, h = u == c;
  if (h && Ma(e)) {
    if (!Ma(t))
      return !1;
    s = !0, d = !1;
  }
  if (h && !d)
    return r || (r = new Lt()), s || zi(e) ? Bi(e, t, n, o, a, r) : Op(e, t, u, n, o, a, r);
  if (!(n & Rp)) {
    var p = d && gr.call(e, "__wrapped__"), m = f && gr.call(t, "__wrapped__");
    if (p || m) {
      var v = p ? e.value() : e, k = m ? t.value() : t;
      return r || (r = new Lt()), a(v, k, n, o, r);
    }
  }
  return h ? (r || (r = new Lt()), xp(e, t, n, o, a, r)) : !1;
}
function ua(e, t, n, o, a) {
  return e === t ? !0 : e == null || t == null || !Tn(e) && !Tn(t) ? e !== e && t !== t : Mp(e, t, n, o, ua, a);
}
var zp = 1, Np = 2;
function Fp(e, t, n, o) {
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
      var d = new Lt(), f;
      if (!(f === void 0 ? ua(c, u, zp | Np, o, d) : f))
        return !1;
    }
  }
  return !0;
}
function Vi(e) {
  return e === e && !qt(e);
}
function Bp(e) {
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
function Vp(e) {
  var t = Bp(e);
  return t.length == 1 && t[0][2] ? Di(t[0][0], t[0][1]) : function(n) {
    return n === e || Fp(n, e, t);
  };
}
function Dp(e, t) {
  return e != null && t in Object(e);
}
function Hp(e, t, n) {
  t = la(t, e);
  for (var o = -1, a = t.length, r = !1; ++o < a; ) {
    var s = ho(t[o]);
    if (!(r = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return r || ++o != a ? r : (a = e == null ? 0 : e.length, !!a && rs(a) && as(s, a) && (ht(e) || is(e)));
}
function Hi(e, t) {
  return e != null && Hp(e, t, Dp);
}
var jp = 1, Wp = 2;
function Up(e, t) {
  return ls(e) && Vi(t) ? Di(ho(e), t) : function(n) {
    var o = Gt(n, e);
    return o === void 0 && o === t ? Hi(n, e) : ua(t, o, jp | Wp);
  };
}
function Kp(e) {
  return function(t) {
    return t?.[e];
  };
}
function Gp(e) {
  return function(t) {
    return cs(t, e);
  };
}
function Zp(e) {
  return ls(e) ? Kp(ho(e)) : Gp(e);
}
function Yp(e) {
  return typeof e == "function" ? e : e == null ? Li : typeof e == "object" ? ht(e) ? Up(e[0], e[1]) : Vp(e) : Zp(e);
}
var ka = function() {
  return Tt.Date.now();
}, qp = "Expected a function", Jp = Math.max, Xp = Math.min;
function Ba(e, t, n) {
  var o, a, r, s, i, u, c = 0, d = !1, f = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(qp);
  t = Js(t) || 0, qt(n) && (d = !!n.leading, f = "maxWait" in n, r = f ? Jp(Js(n.maxWait) || 0, t) : r, h = "trailing" in n ? !!n.trailing : h);
  function p($) {
    var x = o, G = a;
    return o = a = void 0, c = $, s = e.apply(G, x), s;
  }
  function m($) {
    return c = $, i = setTimeout(g, t), d ? p($) : s;
  }
  function v($) {
    var x = $ - u, G = $ - c, W = t - x;
    return f ? Xp(W, r - G) : W;
  }
  function k($) {
    var x = $ - u, G = $ - c;
    return u === void 0 || x >= t || x < 0 || f && G >= r;
  }
  function g() {
    var $ = ka();
    if (k($))
      return I($);
    i = setTimeout(g, v($));
  }
  function I($) {
    return i = void 0, h && o ? p($) : (o = a = void 0, s);
  }
  function S() {
    i !== void 0 && clearTimeout(i), c = 0, o = u = a = i = void 0;
  }
  function O() {
    return i === void 0 ? s : I(ka());
  }
  function T() {
    var $ = ka(), x = k($);
    if (o = arguments, a = this, u = $, x) {
      if (i === void 0)
        return m(u);
      if (f)
        return clearTimeout(i), i = setTimeout(g, t), p(u);
    }
    return i === void 0 && (i = setTimeout(g, t)), s;
  }
  return T.cancel = S, T.flush = O, T;
}
function Qp(e, t, n) {
  var o = e == null ? 0 : e.length;
  if (!o)
    return -1;
  var a = o - 1;
  return ad(e, Yp(t), a);
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
function em(e) {
  return e === void 0;
}
function tm(e, t, n, o) {
  if (!qt(e))
    return e;
  t = la(t, e);
  for (var a = -1, r = t.length, s = r - 1, i = e; i != null && ++a < r; ) {
    var u = ho(t[a]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != s) {
      var d = i[u];
      c = void 0, c === void 0 && (c = qt(d) ? d : as(t[a + 1]) ? [] : {});
    }
    cd(i, u, c), i = i[u];
  }
  return e;
}
function nm(e, t, n) {
  for (var o = -1, a = t.length, r = {}; ++o < a; ) {
    var s = t[o], i = cs(e, s);
    n(i, s) && tm(r, la(s, e), i);
  }
  return r;
}
function om(e, t) {
  return nm(e, t, function(n, o) {
    return Hi(e, o);
  });
}
var am = Df(function(e, t) {
  return e == null ? {} : om(e, t);
});
const dt = (e) => e === void 0, Uo = (e) => typeof e == "boolean", pe = (e) => typeof e == "number", pt = (e) => typeof Element > "u" ? !1 : e instanceof Element, sm = (e) => Be(e) ? !Number.isNaN(Number(e)) : !1;
var rm = Object.defineProperty, im = Object.defineProperties, lm = Object.getOwnPropertyDescriptors, yr = Object.getOwnPropertySymbols, um = Object.prototype.hasOwnProperty, cm = Object.prototype.propertyIsEnumerable, br = (e, t, n) => t in e ? rm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, dm = (e, t) => {
  for (var n in t || (t = {}))
    um.call(t, n) && br(e, n, t[n]);
  if (yr)
    for (var n of yr(t))
      cm.call(t, n) && br(e, n, t[n]);
  return e;
}, fm = (e, t) => im(e, lm(t));
function pm(e, t) {
  var n;
  const o = Zt();
  return Si(() => {
    o.value = e();
  }, fm(dm({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), ts(o);
}
var wr;
const Re = typeof window < "u", mm = (e) => typeof e == "string", ji = () => {
}, Va = Re && ((wr = window?.navigator) == null ? void 0 : wr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ds(e) {
  return typeof e == "function" ? e() : l(e);
}
function hm(e) {
  return e;
}
function vo(e) {
  return $u() ? (Iu(e), !0) : !1;
}
function vm(e, t = !0) {
  Ue() ? Pe(e) : t ? e() : ke(e);
}
function Wi(e, t, n = {}) {
  const {
    immediate: o = !0
  } = n, a = A(!1);
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
    }, ds(t));
  }
  return o && (a.value = !0, Re && u()), vo(i), {
    isPending: ts(a),
    start: u,
    stop: i
  };
}
function $t(e) {
  var t;
  const n = ds(e);
  return (t = n?.$el) != null ? t : n;
}
const ca = Re ? window : void 0;
function We(...e) {
  let t, n, o, a;
  if (mm(e[0]) || Array.isArray(e[0]) ? ([n, o, a] = e, t = ca) : [t, n, o, a] = e, !t)
    return ji;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], s = () => {
    r.forEach((d) => d()), r.length = 0;
  }, i = (d, f, h, p) => (d.addEventListener(f, h, p), () => d.removeEventListener(f, h, p)), u = re(() => [$t(t), ds(a)], ([d, f]) => {
    s(), d && r.push(...n.flatMap((h) => o.map((p) => i(d, h, p, f))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), s();
  };
  return vo(c), c;
}
let _r = !1;
function gm(e, t, n = {}) {
  const { window: o = ca, ignore: a = [], capture: r = !0, detectIframe: s = !1 } = n;
  if (!o)
    return;
  Va && !_r && (_r = !0, Array.from(o.document.body.children).forEach((h) => h.addEventListener("click", ji)));
  let i = !0;
  const u = (h) => a.some((p) => {
    if (typeof p == "string")
      return Array.from(o.document.querySelectorAll(p)).some((m) => m === h.target || h.composedPath().includes(m));
    {
      const m = $t(p);
      return m && (h.target === m || h.composedPath().includes(m));
    }
  }), d = [
    We(o, "click", (h) => {
      const p = $t(e);
      if (!(!p || p === h.target || h.composedPath().includes(p))) {
        if (h.detail === 0 && (i = !u(h)), !i) {
          i = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: r }),
    We(o, "pointerdown", (h) => {
      const p = $t(e);
      p && (i = !h.composedPath().includes(p) && !u(h));
    }, { passive: !0 }),
    s && We(o, "blur", (h) => {
      var p;
      const m = $t(e);
      ((p = o.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !m?.contains(o.document.activeElement) && t(h);
    })
  ].filter(Boolean);
  return () => d.forEach((h) => h());
}
function Ui(e, t = !1) {
  const n = A(), o = () => n.value = !!e();
  return o(), vm(o, t), n;
}
const Sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, kr = "__vueuse_ssr_handlers__";
Sr[kr] = Sr[kr] || {};
var Cr = Object.getOwnPropertySymbols, ym = Object.prototype.hasOwnProperty, bm = Object.prototype.propertyIsEnumerable, wm = (e, t) => {
  var n = {};
  for (var o in e)
    ym.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Cr)
    for (var o of Cr(e))
      t.indexOf(o) < 0 && bm.call(e, o) && (n[o] = e[o]);
  return n;
};
function bt(e, t, n = {}) {
  const o = n, { window: a = ca } = o, r = wm(o, ["window"]);
  let s;
  const i = Ui(() => a && "ResizeObserver" in a), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = re(() => $t(e), (f) => {
    u(), i.value && a && f && (s = new ResizeObserver(t), s.observe(f, r));
  }, { immediate: !0, flush: "post" }), d = () => {
    u(), c();
  };
  return vo(d), {
    isSupported: i,
    stop: d
  };
}
var Tr = Object.getOwnPropertySymbols, _m = Object.prototype.hasOwnProperty, Sm = Object.prototype.propertyIsEnumerable, km = (e, t) => {
  var n = {};
  for (var o in e)
    _m.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && Tr)
    for (var o of Tr(e))
      t.indexOf(o) < 0 && Sm.call(e, o) && (n[o] = e[o]);
  return n;
};
function Cm(e, t, n = {}) {
  const o = n, { window: a = ca } = o, r = km(o, ["window"]);
  let s;
  const i = Ui(() => a && "MutationObserver" in a), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = re(() => $t(e), (f) => {
    u(), i.value && a && f && (s = new MutationObserver(t), s.observe(f, r));
  }, { immediate: !0 }), d = () => {
    u(), c();
  };
  return vo(d), {
    isSupported: i,
    stop: d
  };
}
var Er;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Er || (Er = {}));
var Tm = Object.defineProperty, Pr = Object.getOwnPropertySymbols, Em = Object.prototype.hasOwnProperty, Pm = Object.prototype.propertyIsEnumerable, Or = (e, t, n) => t in e ? Tm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Om = (e, t) => {
  for (var n in t || (t = {}))
    Em.call(t, n) && Or(e, n, t[n]);
  if (Pr)
    for (var n of Pr(t))
      Pm.call(t, n) && Or(e, n, t[n]);
  return e;
};
const $m = {
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
Om({
  linear: hm
}, $m);
class Im extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function fs(e, t) {
  throw new Im(`[${e}] ${t}`);
}
const $r = {
  current: 0
}, Ir = A(0), Ki = 2e3, Lr = Symbol("elZIndexContextKey"), Gi = Symbol("zIndexContextKey"), Zi = (e) => {
  const t = Ue() ? ye(Lr, $r) : $r, n = e || (Ue() ? ye(Gi, void 0) : void 0), o = b(() => {
    const s = l(n);
    return pe(s) ? s : Ki;
  }), a = b(() => o.value + Ir.value), r = () => (t.current++, Ir.value = t.current, a.value);
  return !Re && ye(Lr), {
    initialZIndex: o,
    currentZIndex: a,
    nextZIndex: r
  };
};
var Lm = {
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
const xm = (e) => (t, n) => Rm(t, n, l(e)), Rm = (e, t, n) => Gt(n, e, e).replace(/\{(\w+)\}/g, (o, a) => {
  var r;
  return `${(r = t?.[a]) != null ? r : `{${a}}`}`;
}), Am = (e) => {
  const t = b(() => l(e).name), n = Jn(e) ? e : A(e);
  return {
    lang: t,
    locale: n,
    t: xm(e)
  };
}, Yi = Symbol("localeContextKey"), da = (e) => {
  const t = e || ye(Yi, A());
  return Am(b(() => t.value || Lm));
}, qi = "__epPropKey", te = (e) => e, Mm = (e) => Ye(e) && !!e[qi], fa = (e, t) => {
  if (!Ye(e) || Mm(e))
    return e;
  const { values: n, required: o, default: a, type: r, validator: s } = e, u = {
    type: r,
    required: !!o,
    validator: n || s ? (c) => {
      let d = !1, f = [];
      if (n && (f = Array.from(n), Ks(e, "default") && f.push(a), d || (d = f.includes(c))), s && (d || (d = s(c))), !d && f.length > 0) {
        const h = [...new Set(f)].map((p) => JSON.stringify(p)).join(", ");
        Lu(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(c)}.`);
      }
      return d;
    } : void 0,
    [qi]: !0
  };
  return Ks(e, "default") && (u.default = a), u;
}, he = (e) => Wo(Object.entries(e).map(([t, n]) => [
  t,
  fa(n, t)
])), Ji = ["", "default", "small", "large"], En = fa({
  type: String,
  values: Ji,
  required: !1
}), Xi = Symbol("size"), zm = () => {
  const e = ye(Xi, {});
  return b(() => l(e.size) || "");
}, Qi = Symbol("emptyValuesContextKey"), Nm = ["", void 0, null], Fm = void 0, el = he({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ie(e) ? !e() : !e
  }
}), Bm = (e, t) => {
  const n = Ue() ? ye(Qi, A({})) : A({}), o = b(() => e.emptyValues || n.value.emptyValues || Nm), a = b(() => Ie(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ie(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Fm), r = (s) => o.value.includes(s);
  return o.value.includes(a.value), {
    emptyValues: o,
    valueOnClear: a,
    isEmptyValue: r
  };
}, xr = (e) => Object.keys(e), Ko = A();
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
  const a = !!Ue(), r = a ? tl() : void 0, s = (o = void 0) != null ? o : a ? mt : void 0;
  if (!s)
    return;
  const i = b(() => {
    const u = l(e);
    return r?.value ? Vm(r.value, u) : u;
  });
  return s(Ei, i), s(Yi, b(() => i.value.locale)), s(Pi, b(() => i.value.namespace)), s(Gi, b(() => i.value.zIndex)), s(Xi, {
    size: b(() => i.value.size || "")
  }), s(Qi, b(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !Ko.value) && (Ko.value = i.value), i;
}, Vm = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...xr(e), ...xr(t)])], o = {};
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
  if (pe(e) || sm(e))
    return `${e}${t}`;
  if (Be(e))
    return e;
}
function Dm(e, t) {
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
}, e), ps = (e) => (e.install = ro, e), Hm = he({
  size: {
    type: te([Number, String])
  },
  color: {
    type: String
  }
}), jm = K({
  name: "ElIcon",
  inheritAttrs: !1
}), Wm = /* @__PURE__ */ K({
  ...jm,
  props: Hm,
  setup(e) {
    const t = e, n = Ce("icon"), o = b(() => {
      const { size: a, color: r } = t;
      return !a && !r ? {} : {
        fontSize: dt(a) ? void 0 : uo(a),
        "--color": r
      };
    });
    return (a, r) => (_(), R("i", Yt({
      class: l(n).b(),
      style: l(o)
    }, a.$attrs), [
      se(a.$slots, "default")
    ], 16));
  }
});
var Um = /* @__PURE__ */ _e(Wm, [["__file", "icon.vue"]]);
const He = nt(Um);
/*! Element Plus Icons Vue v2.3.1 */
var Km = /* @__PURE__ */ K({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), sl = Km, Gm = /* @__PURE__ */ K({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Zm = Gm, Ym = /* @__PURE__ */ K({
  name: "Check",
  __name: "check",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), qm = Ym, Jm = /* @__PURE__ */ K({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (_(), R("svg", {
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
}), rl = Jm, Xm = /* @__PURE__ */ K({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Qm = Xm, eh = /* @__PURE__ */ K({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (_(), R("svg", {
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
}), pa = eh, th = /* @__PURE__ */ K({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), co = th, nh = /* @__PURE__ */ K({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (_(), R("svg", {
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
}), oh = nh, ah = /* @__PURE__ */ K({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), sh = ah, rh = /* @__PURE__ */ K({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), ih = rh, lh = /* @__PURE__ */ K({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), uh = lh, ch = /* @__PURE__ */ K({
  name: "PictureFilled",
  __name: "picture-filled",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
      })
    ]));
  }
}), dh = ch, fh = /* @__PURE__ */ K({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), ph = fh, mh = /* @__PURE__ */ K({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), hh = mh, vh = /* @__PURE__ */ K({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), gh = vh, yh = /* @__PURE__ */ K({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (_(), R("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), il = yh;
const Pn = te([
  String,
  Object,
  Function
]), bh = {
  Close: co
}, wh = {
  Close: co
}, Go = {
  success: hh,
  warning: il,
  error: Qm,
  info: sh
}, ll = {
  validating: ih,
  success: rl,
  error: pa
}, ul = () => Re && /firefox/i.test(window.navigator.userAgent);
let Ze;
const _h = {
  height: "0",
  visibility: "hidden",
  overflow: ul() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Sh = [
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
function kh(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), o = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), a = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Sh.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: o, borderSize: a, boxSizing: n };
}
function Rr(e, t = 1, n) {
  var o;
  Ze || (Ze = document.createElement("textarea"), document.body.appendChild(Ze));
  const { paddingSize: a, borderSize: r, boxSizing: s, contextStyle: i } = kh(e);
  i.forEach(([f, h]) => Ze?.style.setProperty(f, h)), Object.entries(_h).forEach(([f, h]) => Ze?.style.setProperty(f, h, "important")), Ze.value = e.value || e.placeholder || "";
  let u = Ze.scrollHeight;
  const c = {};
  s === "border-box" ? u = u + r : s === "content-box" && (u = u - a), Ze.value = "";
  const d = Ze.scrollHeight - a;
  if (pe(t)) {
    let f = d * t;
    s === "border-box" && (f = f + a + r), u = Math.max(f, u), c.minHeight = `${f}px`;
  }
  if (pe(n)) {
    let f = d * n;
    s === "border-box" && (f = f + a + r), u = Math.min(f, u);
  }
  return c.height = `${u}px`, (o = Ze.parentNode) == null || o.removeChild(Ze), Ze = void 0, c;
}
const cl = (e) => e, Ch = he({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), un = (e) => am(Ch, e), Th = he({
  id: {
    type: String,
    default: void 0
  },
  size: En,
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
    type: Pn
  },
  prefixIcon: {
    type: Pn
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
  ...un(["ariaLabel"])
}), Eh = {
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
}, Ph = ["class", "style"], Oh = /^on[A-Z]/, $h = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, o = b(() => (n?.value || []).concat(Ph)), a = Ue();
  return a ? b(() => {
    var r;
    return Wo(Object.entries((r = a.proxy) == null ? void 0 : r.$attrs).filter(([s]) => !o.value.includes(s) && !(t && Oh.test(s))));
  }) : b(() => ({}));
}, ms = Symbol("formContextKey"), Zo = Symbol("formItemContextKey"), Ar = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Ih = Symbol("elIdInjection"), dl = () => Ue() ? ye(Ih, Ar) : Ar, ma = (e) => {
  const t = dl(), n = os();
  return pm(() => l(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, ha = () => {
  const e = ye(ms, void 0), t = ye(Zo, void 0);
  return {
    form: e,
    formItem: t
  };
}, hs = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: o
}) => {
  n || (n = A(!1)), o || (o = A(!1));
  const a = A();
  let r;
  const s = b(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return Pe(() => {
    r = re([wt(e, "id"), n], ([i, u]) => {
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
  const n = A(void 0), o = t.prop ? n : fl("size"), a = t.global ? n : zm(), r = t.form ? { size: void 0 } : ye(ms, void 0), s = t.formItem ? { size: void 0 } : ye(Zo, void 0);
  return b(() => o.value || l(e) || s?.size || r?.size || a.value || "");
}, pl = (e) => {
  const t = fl("disabled"), n = ye(ms, void 0);
  return b(() => t.value || l(e) || n?.disabled || !1);
};
function ml(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: o,
  afterBlur: a
} = {}) {
  const r = Ue(), { emit: s } = r, i = Zt(), u = A(!1), c = (h) => {
    Ie(t) && t(h) || u.value || (u.value = !0, s("focus", h), n?.());
  }, d = (h) => {
    var p;
    Ie(o) && o(h) || h.relatedTarget && ((p = i.value) != null && p.contains(h.relatedTarget)) || (u.value = !1, s("blur", h), a?.());
  }, f = () => {
    var h, p;
    (h = i.value) != null && h.contains(document.activeElement) && i.value !== document.activeElement || (p = e.value) == null || p.focus();
  };
  return re(i, (h) => {
    h && h.setAttribute("tabindex", "-1");
  }), We(i, "focus", c, !0), We(i, "blur", d, !0), We(i, "click", f, !0), {
    isFocused: u,
    wrapperRef: i,
    handleFocus: c,
    handleBlur: d
  };
}
const Lh = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function hl({
  afterComposition: e,
  emit: t
}) {
  const n = A(!1), o = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, a = (i) => {
    var u;
    t?.("compositionupdate", i);
    const c = (u = i.target) == null ? void 0 : u.value, d = c[c.length - 1] || "";
    n.value = !Lh(d);
  }, r = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, ke(() => e(i)));
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
function xh(e) {
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
const Rh = "ElInput", Ah = K({
  name: Rh,
  inheritAttrs: !1
}), Mh = /* @__PURE__ */ K({
  ...Ah,
  props: Th,
  emits: Eh,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = xu(), r = $h(), s = Ru(), i = b(() => [
      o.type === "textarea" ? v.b() : m.b(),
      m.m(h.value),
      m.is("disabled", p.value),
      m.is("exceed", be.value),
      {
        [m.b("group")]: s.prepend || s.append,
        [m.m("prefix")]: s.prefix || o.prefixIcon,
        [m.m("suffix")]: s.suffix || o.suffixIcon || o.clearable || o.showPassword,
        [m.bm("suffix", "password-clear")]: ee.value && X.value,
        [m.b("hidden")]: o.type === "hidden"
      },
      a.class
    ]), u = b(() => [
      m.e("wrapper"),
      m.is("focus", G.value)
    ]), { form: c, formItem: d } = ha(), { inputId: f } = hs(o, {
      formItemContext: d
    }), h = go(), p = pl(), m = Ce("input"), v = Ce("textarea"), k = Zt(), g = Zt(), I = A(!1), S = A(!1), O = A(), T = Zt(o.inputStyle), $ = b(() => k.value || g.value), { wrapperRef: x, isFocused: G, handleFocus: W, handleBlur: Q } = ml($, {
      beforeFocus() {
        return p.value;
      },
      afterBlur() {
        var D;
        o.validateEvent && ((D = d?.validate) == null || D.call(d, "blur").catch((fe) => void 0));
      }
    }), ie = b(() => {
      var D;
      return (D = c?.statusIcon) != null ? D : !1;
    }), w = b(() => d?.validateState || ""), z = b(() => w.value && ll[w.value]), Y = b(() => S.value ? gh : oh), P = b(() => [
      a.style
    ]), F = b(() => [
      o.inputStyle,
      T.value,
      { resize: o.resize }
    ]), E = b(() => xt(o.modelValue) ? "" : String(o.modelValue)), ee = b(() => o.clearable && !p.value && !o.readonly && !!E.value && (G.value || I.value)), X = b(() => o.showPassword && !p.value && !!E.value && (!!E.value || G.value)), le = b(() => o.showWordLimit && !!o.maxlength && (o.type === "text" || o.type === "textarea") && !p.value && !o.readonly && !o.showPassword), ve = b(() => E.value.length), be = b(() => !!le.value && ve.value > Number(o.maxlength)), J = b(() => !!s.suffix || !!o.suffixIcon || ee.value || o.showPassword || le.value || !!w.value && ie.value), [de, ge] = xh(k);
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
          const ot = Ye(fe) ? fe.minRows : void 0, Bt = Ye(fe) ? fe.maxRows : void 0, Vt = Rr(g.value, ot, Bt);
          T.value = {
            overflowY: "hidden",
            ...Vt
          }, ke(() => {
            g.value.offsetHeight, T.value = Vt;
          });
        } else
          T.value = {
            minHeight: Rr(g.value).minHeight
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
      const D = $.value, fe = o.formatter ? o.formatter(E.value) : E.value;
      !D || D.value === fe || (D.value = fe);
    }, B = async (D) => {
      de();
      let { value: fe } = D.target;
      if (o.formatter && o.parser && (fe = o.parser(fe)), !ne.value) {
        if (fe === E.value) {
          Fe();
          return;
        }
        n(xe, fe), n(Rt, fe), await ke(), Fe(), ge();
      }
    }, oe = (D) => {
      let { value: fe } = D.target;
      o.formatter && o.parser && (fe = o.parser(fe)), n(Jt, fe);
    }, {
      isComposing: ne,
      handleCompositionStart: Le,
      handleCompositionUpdate: De,
      handleCompositionEnd: Ae
    } = hl({ emit: n, afterComposition: B }), Te = () => {
      de(), S.value = !S.value, setTimeout(ge);
    }, ce = () => {
      var D;
      return (D = $.value) == null ? void 0 : D.focus();
    }, Ke = () => {
      var D;
      return (D = $.value) == null ? void 0 : D.blur();
    }, cn = (D) => {
      I.value = !1, n("mouseleave", D);
    }, Ge = (D) => {
      I.value = !0, n("mouseenter", D);
    }, gt = (D) => {
      n("keydown", D);
    }, dn = () => {
      var D;
      (D = $.value) == null || D.select();
    }, Qt = () => {
      n(xe, ""), n(Jt, ""), n("clear"), n(Rt, "");
    };
    return re(() => o.modelValue, () => {
      var D;
      ke(() => Ee()), o.validateEvent && ((D = d?.validate) == null || D.call(d, "change").catch((fe) => void 0));
    }), re(E, () => Fe()), re(() => o.type, async () => {
      await ke(), Fe(), Ee();
    }), Pe(() => {
      !o.formatter && o.parser, Fe(), ke(Ee);
    }), t({
      input: k,
      textarea: g,
      ref: $,
      textareaStyle: F,
      autosize: wt(o, "autosize"),
      isComposing: ne,
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
          se(D.$slots, "prepend")
        ], 2)) : H("v-if", !0),
        y("div", {
          ref_key: "wrapperRef",
          ref: x,
          class: M(l(u))
        }, [
          H(" prefix slot "),
          D.$slots.prefix || D.prefixIcon ? (_(), R("span", {
            key: 0,
            class: M(l(m).e("prefix"))
          }, [
            y("span", {
              class: M(l(m).e("prefix-inner"))
            }, [
              se(D.$slots, "prefix"),
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
          y("input", Yt({
            id: l(f),
            ref_key: "input",
            ref: k,
            class: l(m).e("inner")
          }, l(r), {
            minlength: D.minlength,
            maxlength: D.maxlength,
            type: D.showPassword ? S.value ? "text" : "password" : D.type,
            disabled: l(p),
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
            onChange: oe,
            onKeydown: gt
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          H(" suffix slot "),
          l(J) ? (_(), R("span", {
            key: 1,
            class: M(l(m).e("suffix"))
          }, [
            y("span", {
              class: M(l(m).e("suffix-inner"))
            }, [
              !l(ee) || !l(X) || !l(le) ? (_(), R($e, { key: 0 }, [
                se(D.$slots, "suffix"),
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
                onMousedown: Oe(l(ro), ["prevent"]),
                onClick: Qt
              }, {
                default: Z(() => [
                  N(l(pa))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : H("v-if", !0),
              l(X) ? (_(), q(l(He), {
                key: 2,
                class: M([l(m).e("icon"), l(m).e("password")]),
                onClick: Te
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
                y("span", {
                  class: M(l(m).e("count-inner"))
                }, U(l(ve)) + " / " + U(D.maxlength), 3)
              ], 2)) : H("v-if", !0),
              l(w) && l(z) && l(ie) ? (_(), q(l(He), {
                key: 4,
                class: M([
                  l(m).e("icon"),
                  l(m).e("validateIcon"),
                  l(m).is("loading", l(w) === "validating")
                ])
              }, {
                default: Z(() => [
                  (_(), q(at(l(z))))
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
          se(D.$slots, "append")
        ], 2)) : H("v-if", !0)
      ], 64)) : (_(), R($e, { key: 1 }, [
        H(" textarea "),
        y("textarea", Yt({
          id: l(f),
          ref_key: "textarea",
          ref: g,
          class: [l(v).e("inner"), l(m).is("focus", l(G))]
        }, l(r), {
          minlength: D.minlength,
          maxlength: D.maxlength,
          tabindex: D.tabindex,
          disabled: l(p),
          readonly: D.readonly,
          autocomplete: D.autocomplete,
          style: l(F),
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
          onChange: oe,
          onKeydown: gt
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        l(le) ? (_(), R("span", {
          key: 0,
          style: we(O.value),
          class: M(l(m).e("count"))
        }, U(l(ve)) + " / " + U(D.maxlength), 7)) : H("v-if", !0)
      ], 64))
    ], 38));
  }
});
var zh = /* @__PURE__ */ _e(Mh, [["__file", "input.vue"]]);
const vs = nt(zh), pn = 4, Nh = {
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
}, Fh = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), gs = Symbol("scrollbarContextKey"), Bh = he({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Vh = "Thumb", Dh = /* @__PURE__ */ K({
  __name: "thumb",
  props: Bh,
  setup(e) {
    const t = e, n = ye(gs), o = Ce("scrollbar");
    n || fs(Vh, "can not inject scrollbar context");
    const a = A(), r = A(), s = A({}), i = A(!1);
    let u = !1, c = !1, d = Re ? document.onselectstart : null;
    const f = b(() => Nh[t.vertical ? "vertical" : "horizontal"]), h = b(() => Fh({
      size: t.size,
      move: t.move,
      bar: f.value
    })), p = b(() => a.value[f.value.offset] ** 2 / n.wrapElement[f.value.scrollSize] / t.ratio / r.value[f.value.offset]), m = ($) => {
      var x;
      if ($.stopPropagation(), $.ctrlKey || [1, 2].includes($.button))
        return;
      (x = window.getSelection()) == null || x.removeAllRanges(), k($);
      const G = $.currentTarget;
      G && (s.value[f.value.axis] = G[f.value.offset] - ($[f.value.client] - G.getBoundingClientRect()[f.value.direction]));
    }, v = ($) => {
      if (!r.value || !a.value || !n.wrapElement)
        return;
      const x = Math.abs($.target.getBoundingClientRect()[f.value.direction] - $[f.value.client]), G = r.value[f.value.offset] / 2, W = (x - G) * 100 * p.value / a.value[f.value.offset];
      n.wrapElement[f.value.scroll] = W * n.wrapElement[f.value.scrollSize] / 100;
    }, k = ($) => {
      $.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", g), document.addEventListener("mouseup", I), d = document.onselectstart, document.onselectstart = () => !1;
    }, g = ($) => {
      if (!a.value || !r.value || u === !1)
        return;
      const x = s.value[f.value.axis];
      if (!x)
        return;
      const G = (a.value.getBoundingClientRect()[f.value.direction] - $[f.value.client]) * -1, W = r.value[f.value.offset] - x, Q = (G - W) * 100 * p.value / a.value[f.value.offset];
      n.wrapElement[f.value.scroll] = Q * n.wrapElement[f.value.scrollSize] / 100;
    }, I = () => {
      u = !1, s.value[f.value.axis] = 0, document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", I), T(), c && (i.value = !1);
    }, S = () => {
      c = !1, i.value = !!t.size;
    }, O = () => {
      c = !0, i.value = u;
    };
    Ct(() => {
      T(), document.removeEventListener("mouseup", I);
    });
    const T = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return We(wt(n, "scrollbarElement"), "mousemove", S), We(wt(n, "scrollbarElement"), "mouseleave", O), ($, x) => (_(), q(Mn, {
      name: l(o).b("fade"),
      persisted: ""
    }, {
      default: Z(() => [
        qe(y("div", {
          ref_key: "instance",
          ref: a,
          class: M([l(o).e("bar"), l(o).is(l(f).key)]),
          onMousedown: v
        }, [
          y("div", {
            ref_key: "thumb",
            ref: r,
            class: M(l(o).e("thumb")),
            style: we(l(h)),
            onMousedown: m
          }, null, 38)
        ], 34), [
          [At, $.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var Mr = /* @__PURE__ */ _e(Dh, [["__file", "thumb.vue"]]);
const Hh = he({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), jh = /* @__PURE__ */ K({
  __name: "bar",
  props: Hh,
  setup(e, { expose: t }) {
    const n = e, o = ye(gs), a = A(0), r = A(0), s = A(""), i = A(""), u = A(1), c = A(1);
    return t({
      handleScroll: (h) => {
        if (h) {
          const p = h.offsetHeight - pn, m = h.offsetWidth - pn;
          r.value = h.scrollTop * 100 / p * u.value, a.value = h.scrollLeft * 100 / m * c.value;
        }
      },
      update: () => {
        const h = o?.wrapElement;
        if (!h)
          return;
        const p = h.offsetHeight - pn, m = h.offsetWidth - pn, v = p ** 2 / h.scrollHeight, k = m ** 2 / h.scrollWidth, g = Math.max(v, n.minSize), I = Math.max(k, n.minSize);
        u.value = v / (p - v) / (g / (p - g)), c.value = k / (m - k) / (I / (m - I)), i.value = g + pn < p ? `${g}px` : "", s.value = I + pn < m ? `${I}px` : "";
      }
    }), (h, p) => (_(), R($e, null, [
      N(Mr, {
        move: a.value,
        ratio: c.value,
        size: s.value,
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      N(Mr, {
        move: r.value,
        ratio: u.value,
        size: i.value,
        vertical: "",
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Wh = /* @__PURE__ */ _e(jh, [["__file", "bar.vue"]]);
const Uh = he({
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
}), Kh = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(pe)
}, Gh = "ElScrollbar", Zh = K({
  name: Gh
}), Yh = /* @__PURE__ */ K({
  ...Zh,
  props: Uh,
  emits: Kh,
  setup(e, { expose: t, emit: n }) {
    const o = e, a = Ce("scrollbar");
    let r, s, i = 0, u = 0;
    const c = A(), d = A(), f = A(), h = A(), p = b(() => {
      const T = {};
      return o.height && (T.height = uo(o.height)), o.maxHeight && (T.maxHeight = uo(o.maxHeight)), [o.wrapStyle, T];
    }), m = b(() => [
      o.wrapClass,
      a.e("wrap"),
      { [a.em("wrap", "hidden-default")]: !o.native }
    ]), v = b(() => [a.e("view"), o.viewClass]), k = () => {
      var T;
      d.value && ((T = h.value) == null || T.handleScroll(d.value), i = d.value.scrollTop, u = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function g(T, $) {
      Ye(T) ? d.value.scrollTo(T) : pe(T) && pe($) && d.value.scrollTo(T, $);
    }
    const I = (T) => {
      pe(T) && (d.value.scrollTop = T);
    }, S = (T) => {
      pe(T) && (d.value.scrollLeft = T);
    }, O = () => {
      var T;
      (T = h.value) == null || T.update();
    };
    return re(() => o.noresize, (T) => {
      T ? (r?.(), s?.()) : ({ stop: r } = bt(f, O), s = We("resize", O));
    }, { immediate: !0 }), re(() => [o.maxHeight, o.height], () => {
      o.native || ke(() => {
        var T;
        O(), d.value && ((T = h.value) == null || T.handleScroll(d.value));
      });
    }), mt(gs, Mt({
      scrollbarElement: c,
      wrapElement: d
    })), Au(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = u);
    }), Pe(() => {
      o.native || ke(() => {
        O();
      });
    }), Ci(() => O()), t({
      wrapRef: d,
      update: O,
      scrollTo: g,
      setScrollTop: I,
      setScrollLeft: S,
      handleScroll: k
    }), (T, $) => (_(), R("div", {
      ref_key: "scrollbarRef",
      ref: c,
      class: M(l(a).b())
    }, [
      y("div", {
        ref_key: "wrapRef",
        ref: d,
        class: M(l(m)),
        style: we(l(p)),
        tabindex: T.tabindex,
        onScroll: k
      }, [
        (_(), q(at(T.tag), {
          id: T.id,
          ref_key: "resizeRef",
          ref: f,
          class: M(l(v)),
          style: we(T.viewStyle),
          role: T.role,
          "aria-label": T.ariaLabel,
          "aria-orientation": T.ariaOrientation
        }, {
          default: Z(() => [
            se(T.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      T.native ? H("v-if", !0) : (_(), q(Wh, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        always: T.always,
        "min-size": T.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var qh = /* @__PURE__ */ _e(Yh, [["__file", "scrollbar.vue"]]);
const Jh = nt(qh), ys = Symbol("popper"), vl = Symbol("popperContent"), Xh = [
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
    values: Xh,
    default: "tooltip"
  }
}), Qh = K({
  name: "ElPopper",
  inheritAttrs: !1
}), ev = /* @__PURE__ */ K({
  ...Qh,
  props: gl,
  setup(e, { expose: t }) {
    const n = e, o = A(), a = A(), r = A(), s = A(), i = b(() => n.role), u = {
      triggerRef: o,
      popperInstanceRef: a,
      contentRef: r,
      referenceRef: s,
      role: i
    };
    return t(u), mt(ys, u), (c, d) => se(c.$slots, "default");
  }
});
var tv = /* @__PURE__ */ _e(ev, [["__file", "popper.vue"]]);
const yl = he({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), nv = K({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), ov = /* @__PURE__ */ K({
  ...nv,
  props: yl,
  setup(e, { expose: t }) {
    const n = e, o = Ce("popper"), { arrowOffset: a, arrowRef: r, arrowStyle: s } = ye(vl, void 0);
    return re(() => n.arrowOffset, (i) => {
      a.value = i;
    }), Ct(() => {
      r.value = void 0;
    }), t({
      arrowRef: r
    }), (i, u) => (_(), R("span", {
      ref_key: "arrowRef",
      ref: r,
      class: M(l(o).e("arrow")),
      style: we(l(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var av = /* @__PURE__ */ _e(ov, [["__file", "arrow.vue"]]);
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
}), wl = Symbol("elForwardRef"), sv = (e) => {
  mt(wl, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, rv = (e) => ({
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
}, iv = "ElOnlyChild", lv = K({
  name: iv,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const a = ye(wl), r = rv((o = a?.setForwardRef) != null ? o : ro);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const u = _l(i);
      return u ? qe(Mu(u, n), [[r]]) : null;
    };
  }
});
function _l(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Ye(n))
      switch (n.type) {
        case Nu:
          continue;
        case zu:
        case "svg":
          return zr(n);
        case $e:
          return _l(n.children);
        default:
          return n;
      }
    return zr(n);
  }
  return null;
}
function zr(e) {
  const t = Ce("only-child");
  return N("span", {
    class: t.e("content")
  }, [e]);
}
const uv = K({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), cv = /* @__PURE__ */ K({
  ...uv,
  props: bl,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: a } = ye(ys, void 0);
    sv(a);
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
      re(() => n.virtualRef, (f) => {
        f && (a.value = $t(f));
      }, {
        immediate: !0
      }), re(a, (f, h) => {
        c?.(), c = void 0, pt(f) && (d.forEach((p) => {
          var m;
          const v = n[p];
          v && (f.addEventListener(p.slice(2).toLowerCase(), v), (m = h?.removeEventListener) == null || m.call(h, p.slice(2).toLowerCase(), v));
        }), Da(f) && (c = re([r, s, i, u], (p) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((m, v) => {
            xt(p[v]) ? f.removeAttribute(m) : f.setAttribute(m, p[v]);
          });
        }, { immediate: !0 }))), pt(h) && Da(h) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((p) => h.removeAttribute(p));
      }, {
        immediate: !0
      });
    }), Ct(() => {
      if (c?.(), c = void 0, a.value && pt(a.value)) {
        const f = a.value;
        d.forEach((h) => {
          const p = n[h];
          p && f.removeEventListener(h.slice(2).toLowerCase(), p);
        }), a.value = void 0;
      }
    }), t({
      triggerRef: a
    }), (f, h) => f.virtualTriggering ? H("v-if", !0) : (_(), q(l(lv), Yt({ key: 0 }, f.$attrs, {
      "aria-controls": l(r),
      "aria-describedby": l(s),
      "aria-expanded": l(u),
      "aria-haspopup": l(i)
    }), {
      default: Z(() => [
        se(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var dv = /* @__PURE__ */ _e(cv, [["__file", "trigger.vue"]]);
const Ca = "focus-trap.focus-after-trapped", Ta = "focus-trap.focus-after-released", fv = "focus-trap.focusout-prevented", Nr = {
  cancelable: !0,
  bubbles: !1
}, pv = {
  cancelable: !0,
  bubbles: !1
}, Fr = "focusAfterTrapped", Br = "focusAfterReleased", mv = Symbol("elFocusTrap"), bs = A(), va = A(0), ws = A(0);
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
}, Vr = (e, t) => {
  for (const n of e)
    if (!hv(n, t))
      return n;
}, hv = (e, t) => {
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
}, vv = (e) => {
  const t = Sl(e), n = Vr(t, e), o = Vr(t.reverse(), e);
  return [n, o];
}, gv = (e) => e instanceof HTMLInputElement && "select" in e, Et = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let o = !1;
    pt(e) && !Da(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), o = !0), e.focus({ preventScroll: !0 }), ws.value = window.performance.now(), e !== n && gv(e) && t && e.select(), pt(e) && o && e.removeAttribute("tabindex");
  }
};
function Dr(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const yv = () => {
  let e = [];
  return {
    push: (o) => {
      const a = e[0];
      a && o !== a && a.pause(), e = Dr(e, o), e.unshift(o);
    },
    remove: (o) => {
      var a, r;
      e = Dr(e, o), (r = (a = e[0]) == null ? void 0 : a.resume) == null || r.call(a);
    }
  };
}, bv = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (Et(o, t), document.activeElement !== n)
      return;
}, Hr = yv(), wv = () => va.value > ws.value, Po = () => {
  bs.value = "pointer", va.value = window.performance.now();
}, jr = () => {
  bs.value = "keyboard", va.value = window.performance.now();
}, _v = () => (Pe(() => {
  Eo === 0 && (document.addEventListener("mousedown", Po), document.addEventListener("touchstart", Po), document.addEventListener("keydown", jr)), Eo++;
}), Ct(() => {
  Eo--, Eo <= 0 && (document.removeEventListener("mousedown", Po), document.removeEventListener("touchstart", Po), document.removeEventListener("keydown", jr));
}), {
  focusReason: bs,
  lastUserFocusTimestamp: va,
  lastAutomatedFocusTimestamp: ws
}), Oo = (e) => new CustomEvent(fv, {
  ...pv,
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
let vn = [];
const Wr = (e) => {
  e.code === Ne.esc && vn.forEach((t) => t(e));
}, Sv = (e) => {
  Pe(() => {
    vn.length === 0 && document.addEventListener("keydown", Wr), Re && vn.push(e);
  }), Ct(() => {
    vn = vn.filter((t) => t !== e), vn.length === 0 && Re && document.removeEventListener("keydown", Wr);
  });
}, kv = K({
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
    Fr,
    Br,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = A();
    let o, a;
    const { focusReason: r } = _v();
    Sv((m) => {
      e.trapped && !s.paused && t("release-requested", m);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (m) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: v, altKey: k, ctrlKey: g, metaKey: I, currentTarget: S, shiftKey: O } = m, { loop: T } = e, $ = v === Ne.tab && !k && !g && !I, x = document.activeElement;
      if ($ && x) {
        const G = S, [W, Q] = vv(G);
        if (W && Q) {
          if (!O && x === Q) {
            const w = Oo({
              focusReason: r.value
            });
            t("focusout-prevented", w), w.defaultPrevented || (m.preventDefault(), T && Et(W, !0));
          } else if (O && [W, G].includes(x)) {
            const w = Oo({
              focusReason: r.value
            });
            t("focusout-prevented", w), w.defaultPrevented || (m.preventDefault(), T && Et(Q, !0));
          }
        } else if (x === G) {
          const w = Oo({
            focusReason: r.value
          });
          t("focusout-prevented", w), w.defaultPrevented || m.preventDefault();
        }
      }
    };
    mt(mv, {
      focusTrapRef: n,
      onKeydown: i
    }), re(() => e.focusTrapEl, (m) => {
      m && (n.value = m);
    }, { immediate: !0 }), re([n], ([m], [v]) => {
      m && (m.addEventListener("keydown", i), m.addEventListener("focusin", d), m.addEventListener("focusout", f)), v && (v.removeEventListener("keydown", i), v.removeEventListener("focusin", d), v.removeEventListener("focusout", f));
    });
    const u = (m) => {
      t(Fr, m);
    }, c = (m) => t(Br, m), d = (m) => {
      const v = l(n);
      if (!v)
        return;
      const k = m.target, g = m.relatedTarget, I = k && v.contains(k);
      e.trapped || g && v.contains(g) || (o = g), I && t("focusin", m), !s.paused && e.trapped && (I ? a = k : Et(a, !0));
    }, f = (m) => {
      const v = l(n);
      if (!(s.paused || !v))
        if (e.trapped) {
          const k = m.relatedTarget;
          !xt(k) && !v.contains(k) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const g = Oo({
                focusReason: r.value
              });
              t("focusout-prevented", g), g.defaultPrevented || Et(a, !0);
            }
          }, 0);
        } else {
          const k = m.target;
          k && v.contains(k) || t("focusout", m);
        }
    };
    async function h() {
      await ke();
      const m = l(n);
      if (m) {
        Hr.push(s);
        const v = m.contains(document.activeElement) ? o : document.activeElement;
        if (o = v, !m.contains(v)) {
          const g = new Event(Ca, Nr);
          m.addEventListener(Ca, u), m.dispatchEvent(g), g.defaultPrevented || ke(() => {
            let I = e.focusStartEl;
            Be(I) || (Et(I), document.activeElement !== I && (I = "first")), I === "first" && bv(Sl(m), !0), (document.activeElement === v || I === "container") && Et(m);
          });
        }
      }
    }
    function p() {
      const m = l(n);
      if (m) {
        m.removeEventListener(Ca, u);
        const v = new CustomEvent(Ta, {
          ...Nr,
          detail: {
            focusReason: r.value
          }
        });
        m.addEventListener(Ta, c), m.dispatchEvent(v), !v.defaultPrevented && (r.value == "keyboard" || !wv() || m.contains(document.activeElement)) && Et(o ?? document.body), m.removeEventListener(Ta, c), Hr.remove(s);
      }
    }
    return Pe(() => {
      e.trapped && h(), re(() => e.trapped, (m) => {
        m ? h() : p();
      });
    }), Ct(() => {
      e.trapped && p(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", f), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function Cv(e, t, n, o, a, r) {
  return se(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Tv = /* @__PURE__ */ _e(kv, [["render", Cv], ["__file", "focus-trap.vue"]]), Je = "top", it = "bottom", lt = "right", Xe = "left", _s = "auto", yo = [Je, it, lt, Xe], On = "start", fo = "end", Ev = "clippingParents", kl = "viewport", Hn = "popper", Pv = "reference", Ur = yo.reduce(function(e, t) {
  return e.concat([t + "-" + On, t + "-" + fo]);
}, []), Nn = [].concat(yo, [_s]).reduce(function(e, t) {
  return e.concat([t, t + "-" + On, t + "-" + fo]);
}, []), Ov = "beforeRead", $v = "read", Iv = "afterRead", Lv = "beforeMain", xv = "main", Rv = "afterMain", Av = "beforeWrite", Mv = "write", zv = "afterWrite", Nv = [Ov, $v, Iv, Lv, xv, Rv, Av, Mv, zv];
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
function sn(e) {
  var t = tt(e).Element;
  return e instanceof t || e instanceof Element;
}
function rt(e) {
  var t = tt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ss(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = tt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Fv(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, a = t.attributes[n] || {}, r = t.elements[n];
    !rt(r) || !kt(r) || (Object.assign(r.style, o), Object.keys(a).forEach(function(s) {
      var i = a[s];
      i === !1 ? r.removeAttribute(s) : r.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Bv(e) {
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
var Cl = { name: "applyStyles", enabled: !0, phase: "write", fn: Fv, effect: Bv, requires: ["computeStyles"] };
function _t(e) {
  return e.split("-")[0];
}
var on = Math.max, Yo = Math.min, $n = Math.round;
function Ha() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Tl() {
  return !/^((?!chrome|android).)*safari/i.test(Ha());
}
function In(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var o = e.getBoundingClientRect(), a = 1, r = 1;
  t && rt(e) && (a = e.offsetWidth > 0 && $n(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && $n(o.height) / e.offsetHeight || 1);
  var s = sn(e) ? tt(e) : window, i = s.visualViewport, u = !Tl() && n, c = (o.left + (u && i ? i.offsetLeft : 0)) / a, d = (o.top + (u && i ? i.offsetTop : 0)) / r, f = o.width / a, h = o.height / r;
  return { width: f, height: h, top: d, right: c + f, bottom: d + h, left: c, x: c, y: d };
}
function ks(e) {
  var t = In(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function El(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Ss(n)) {
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
function Vv(e) {
  return ["table", "td", "th"].indexOf(kt(e)) >= 0;
}
function Xt(e) {
  return ((sn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ga(e) {
  return kt(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ss(e) ? e.host : null) || Xt(e);
}
function Kr(e) {
  return !rt(e) || zt(e).position === "fixed" ? null : e.offsetParent;
}
function Dv(e) {
  var t = /firefox/i.test(Ha()), n = /Trident/i.test(Ha());
  if (n && rt(e)) {
    var o = zt(e);
    if (o.position === "fixed") return null;
  }
  var a = ga(e);
  for (Ss(a) && (a = a.host); rt(a) && ["html", "body"].indexOf(kt(a)) < 0; ) {
    var r = zt(a);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none") return a;
    a = a.parentNode;
  }
  return null;
}
function bo(e) {
  for (var t = tt(e), n = Kr(e); n && Vv(n) && zt(n).position === "static"; ) n = Kr(n);
  return n && (kt(n) === "html" || kt(n) === "body" && zt(n).position === "static") ? t : n || Dv(e) || t;
}
function Cs(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function eo(e, t, n) {
  return on(e, Yo(t, n));
}
function Hv(e, t, n) {
  var o = eo(e, t, n);
  return o > n ? n : o;
}
function Pl() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ol(e) {
  return Object.assign({}, Pl(), e);
}
function $l(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var jv = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Ol(typeof e != "number" ? e : $l(e, yo));
};
function Wv(e) {
  var t, n = e.state, o = e.name, a = e.options, r = n.elements.arrow, s = n.modifiersData.popperOffsets, i = _t(n.placement), u = Cs(i), c = [Xe, lt].indexOf(i) >= 0, d = c ? "height" : "width";
  if (!(!r || !s)) {
    var f = jv(a.padding, n), h = ks(r), p = u === "y" ? Je : Xe, m = u === "y" ? it : lt, v = n.rects.reference[d] + n.rects.reference[u] - s[u] - n.rects.popper[d], k = s[u] - n.rects.reference[u], g = bo(r), I = g ? u === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, S = v / 2 - k / 2, O = f[p], T = I - h[d] - f[m], $ = I / 2 - h[d] / 2 + S, x = eo(O, $, T), G = u;
    n.modifiersData[o] = (t = {}, t[G] = x, t.centerOffset = x - $, t);
  }
}
function Uv(e) {
  var t = e.state, n = e.options, o = n.element, a = o === void 0 ? "[data-popper-arrow]" : o;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || El(t.elements.popper, a) && (t.elements.arrow = a));
}
var Kv = { name: "arrow", enabled: !0, phase: "main", fn: Wv, effect: Uv, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Ln(e) {
  return e.split("-")[1];
}
var Gv = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Zv(e, t) {
  var n = e.x, o = e.y, a = t.devicePixelRatio || 1;
  return { x: $n(n * a) / a || 0, y: $n(o * a) / a || 0 };
}
function Gr(e) {
  var t, n = e.popper, o = e.popperRect, a = e.placement, r = e.variation, s = e.offsets, i = e.position, u = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, f = e.isFixed, h = s.x, p = h === void 0 ? 0 : h, m = s.y, v = m === void 0 ? 0 : m, k = typeof d == "function" ? d({ x: p, y: v }) : { x: p, y: v };
  p = k.x, v = k.y;
  var g = s.hasOwnProperty("x"), I = s.hasOwnProperty("y"), S = Xe, O = Je, T = window;
  if (c) {
    var $ = bo(n), x = "clientHeight", G = "clientWidth";
    if ($ === tt(n) && ($ = Xt(n), zt($).position !== "static" && i === "absolute" && (x = "scrollHeight", G = "scrollWidth")), $ = $, a === Je || (a === Xe || a === lt) && r === fo) {
      O = it;
      var W = f && $ === T && T.visualViewport ? T.visualViewport.height : $[x];
      v -= W - o.height, v *= u ? 1 : -1;
    }
    if (a === Xe || (a === Je || a === it) && r === fo) {
      S = lt;
      var Q = f && $ === T && T.visualViewport ? T.visualViewport.width : $[G];
      p -= Q - o.width, p *= u ? 1 : -1;
    }
  }
  var ie = Object.assign({ position: i }, c && Gv), w = d === !0 ? Zv({ x: p, y: v }, tt(n)) : { x: p, y: v };
  if (p = w.x, v = w.y, u) {
    var z;
    return Object.assign({}, ie, (z = {}, z[O] = I ? "0" : "", z[S] = g ? "0" : "", z.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)" : "translate3d(" + p + "px, " + v + "px, 0)", z));
  }
  return Object.assign({}, ie, (t = {}, t[O] = I ? v + "px" : "", t[S] = g ? p + "px" : "", t.transform = "", t));
}
function Yv(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, a = o === void 0 ? !0 : o, r = n.adaptive, s = r === void 0 ? !0 : r, i = n.roundOffsets, u = i === void 0 ? !0 : i, c = { placement: _t(t.placement), variation: Ln(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Gr(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Gr(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Il = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Yv, data: {} }, $o = { passive: !0 };
function qv(e) {
  var t = e.state, n = e.instance, o = e.options, a = o.scroll, r = a === void 0 ? !0 : a, s = o.resize, i = s === void 0 ? !0 : s, u = tt(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, $o);
  }), i && u.addEventListener("resize", n.update, $o), function() {
    r && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, $o);
    }), i && u.removeEventListener("resize", n.update, $o);
  };
}
var Ll = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: qv, data: {} }, Jv = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Mo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Jv[t];
  });
}
var Xv = { start: "end", end: "start" };
function Zr(e) {
  return e.replace(/start|end/g, function(t) {
    return Xv[t];
  });
}
function Ts(e) {
  var t = tt(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function Es(e) {
  return In(Xt(e)).left + Ts(e).scrollLeft;
}
function Qv(e, t) {
  var n = tt(e), o = Xt(e), a = n.visualViewport, r = o.clientWidth, s = o.clientHeight, i = 0, u = 0;
  if (a) {
    r = a.width, s = a.height;
    var c = Tl();
    (c || !c && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  return { width: r, height: s, x: i + Es(e), y: u };
}
function eg(e) {
  var t, n = Xt(e), o = Ts(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, r = on(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = on(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), i = -o.scrollLeft + Es(e), u = -o.scrollTop;
  return zt(a || n).direction === "rtl" && (i += on(n.clientWidth, a ? a.clientWidth : 0) - r), { width: r, height: s, x: i, y: u };
}
function Ps(e) {
  var t = zt(e), n = t.overflow, o = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + o);
}
function xl(e) {
  return ["html", "body", "#document"].indexOf(kt(e)) >= 0 ? e.ownerDocument.body : rt(e) && Ps(e) ? e : xl(ga(e));
}
function to(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = xl(e), a = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = tt(o), s = a ? [r].concat(r.visualViewport || [], Ps(o) ? o : []) : o, i = t.concat(s);
  return a ? i : i.concat(to(ga(s)));
}
function ja(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function tg(e, t) {
  var n = In(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Yr(e, t, n) {
  return t === kl ? ja(Qv(e, n)) : sn(t) ? tg(t, n) : ja(eg(Xt(e)));
}
function ng(e) {
  var t = to(ga(e)), n = ["absolute", "fixed"].indexOf(zt(e).position) >= 0, o = n && rt(e) ? bo(e) : e;
  return sn(o) ? t.filter(function(a) {
    return sn(a) && El(a, o) && kt(a) !== "body";
  }) : [];
}
function og(e, t, n, o) {
  var a = t === "clippingParents" ? ng(e) : [].concat(t), r = [].concat(a, [n]), s = r[0], i = r.reduce(function(u, c) {
    var d = Yr(e, c, o);
    return u.top = on(d.top, u.top), u.right = Yo(d.right, u.right), u.bottom = Yo(d.bottom, u.bottom), u.left = on(d.left, u.left), u;
  }, Yr(e, s, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Rl(e) {
  var t = e.reference, n = e.element, o = e.placement, a = o ? _t(o) : null, r = o ? Ln(o) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, u;
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
  var c = a ? Cs(a) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (r) {
      case On:
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
  var n = t, o = n.placement, a = o === void 0 ? e.placement : o, r = n.strategy, s = r === void 0 ? e.strategy : r, i = n.boundary, u = i === void 0 ? Ev : i, c = n.rootBoundary, d = c === void 0 ? kl : c, f = n.elementContext, h = f === void 0 ? Hn : f, p = n.altBoundary, m = p === void 0 ? !1 : p, v = n.padding, k = v === void 0 ? 0 : v, g = Ol(typeof k != "number" ? k : $l(k, yo)), I = h === Hn ? Pv : Hn, S = e.rects.popper, O = e.elements[m ? I : h], T = og(sn(O) ? O : O.contextElement || Xt(e.elements.popper), u, d, s), $ = In(e.elements.reference), x = Rl({ reference: $, element: S, placement: a }), G = ja(Object.assign({}, S, x)), W = h === Hn ? G : $, Q = { top: T.top - W.top + g.top, bottom: W.bottom - T.bottom + g.bottom, left: T.left - W.left + g.left, right: W.right - T.right + g.right }, ie = e.modifiersData.offset;
  if (h === Hn && ie) {
    var w = ie[a];
    Object.keys(Q).forEach(function(z) {
      var Y = [lt, it].indexOf(z) >= 0 ? 1 : -1, P = [Je, it].indexOf(z) >= 0 ? "y" : "x";
      Q[z] += w[P] * Y;
    });
  }
  return Q;
}
function ag(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, a = n.boundary, r = n.rootBoundary, s = n.padding, i = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? Nn : u, d = Ln(o), f = d ? i ? Ur : Ur.filter(function(m) {
    return Ln(m) === d;
  }) : yo, h = f.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  h.length === 0 && (h = f);
  var p = h.reduce(function(m, v) {
    return m[v] = po(e, { placement: v, boundary: a, rootBoundary: r, padding: s })[_t(v)], m;
  }, {});
  return Object.keys(p).sort(function(m, v) {
    return p[m] - p[v];
  });
}
function sg(e) {
  if (_t(e) === _s) return [];
  var t = Mo(e);
  return [Zr(e), t, Zr(t)];
}
function rg(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var a = n.mainAxis, r = a === void 0 ? !0 : a, s = n.altAxis, i = s === void 0 ? !0 : s, u = n.fallbackPlacements, c = n.padding, d = n.boundary, f = n.rootBoundary, h = n.altBoundary, p = n.flipVariations, m = p === void 0 ? !0 : p, v = n.allowedAutoPlacements, k = t.options.placement, g = _t(k), I = g === k, S = u || (I || !m ? [Mo(k)] : sg(k)), O = [k].concat(S).reduce(function(de, ge) {
      return de.concat(_t(ge) === _s ? ag(t, { placement: ge, boundary: d, rootBoundary: f, padding: c, flipVariations: m, allowedAutoPlacements: v }) : ge);
    }, []), T = t.rects.reference, $ = t.rects.popper, x = /* @__PURE__ */ new Map(), G = !0, W = O[0], Q = 0; Q < O.length; Q++) {
      var ie = O[Q], w = _t(ie), z = Ln(ie) === On, Y = [Je, it].indexOf(w) >= 0, P = Y ? "width" : "height", F = po(t, { placement: ie, boundary: d, rootBoundary: f, altBoundary: h, padding: c }), E = Y ? z ? lt : Xe : z ? it : Je;
      T[P] > $[P] && (E = Mo(E));
      var ee = Mo(E), X = [];
      if (r && X.push(F[w] <= 0), i && X.push(F[E] <= 0, F[ee] <= 0), X.every(function(de) {
        return de;
      })) {
        W = ie, G = !1;
        break;
      }
      x.set(ie, X);
    }
    if (G) for (var le = m ? 3 : 1, ve = function(de) {
      var ge = O.find(function(Ee) {
        var ae = x.get(Ee);
        if (ae) return ae.slice(0, de).every(function(me) {
          return me;
        });
      });
      if (ge) return W = ge, "break";
    }, be = le; be > 0; be--) {
      var J = ve(be);
      if (J === "break") break;
    }
    t.placement !== W && (t.modifiersData[o]._skip = !0, t.placement = W, t.reset = !0);
  }
}
var ig = { name: "flip", enabled: !0, phase: "main", fn: rg, requiresIfExists: ["offset"], data: { _skip: !1 } };
function qr(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Jr(e) {
  return [Je, lt, it, Xe].some(function(t) {
    return e[t] >= 0;
  });
}
function lg(e) {
  var t = e.state, n = e.name, o = t.rects.reference, a = t.rects.popper, r = t.modifiersData.preventOverflow, s = po(t, { elementContext: "reference" }), i = po(t, { altBoundary: !0 }), u = qr(s, o), c = qr(i, a, r), d = Jr(u), f = Jr(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: d, hasPopperEscaped: f }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": f });
}
var ug = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: lg };
function cg(e, t, n) {
  var o = _t(e), a = [Xe, Je].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = r[0], i = r[1];
  return s = s || 0, i = (i || 0) * a, [Xe, lt].indexOf(o) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function dg(e) {
  var t = e.state, n = e.options, o = e.name, a = n.offset, r = a === void 0 ? [0, 0] : a, s = Nn.reduce(function(d, f) {
    return d[f] = cg(f, t.rects, r), d;
  }, {}), i = s[t.placement], u = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = s;
}
var fg = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: dg };
function pg(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Rl({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Al = { name: "popperOffsets", enabled: !0, phase: "read", fn: pg, data: {} };
function mg(e) {
  return e === "x" ? "y" : "x";
}
function hg(e) {
  var t = e.state, n = e.options, o = e.name, a = n.mainAxis, r = a === void 0 ? !0 : a, s = n.altAxis, i = s === void 0 ? !1 : s, u = n.boundary, c = n.rootBoundary, d = n.altBoundary, f = n.padding, h = n.tether, p = h === void 0 ? !0 : h, m = n.tetherOffset, v = m === void 0 ? 0 : m, k = po(t, { boundary: u, rootBoundary: c, padding: f, altBoundary: d }), g = _t(t.placement), I = Ln(t.placement), S = !I, O = Cs(g), T = mg(O), $ = t.modifiersData.popperOffsets, x = t.rects.reference, G = t.rects.popper, W = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, Q = typeof W == "number" ? { mainAxis: W, altAxis: W } : Object.assign({ mainAxis: 0, altAxis: 0 }, W), ie = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, w = { x: 0, y: 0 };
  if ($) {
    if (r) {
      var z, Y = O === "y" ? Je : Xe, P = O === "y" ? it : lt, F = O === "y" ? "height" : "width", E = $[O], ee = E + k[Y], X = E - k[P], le = p ? -G[F] / 2 : 0, ve = I === On ? x[F] : G[F], be = I === On ? -G[F] : -x[F], J = t.elements.arrow, de = p && J ? ks(J) : { width: 0, height: 0 }, ge = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Pl(), Ee = ge[Y], ae = ge[P], me = eo(0, x[F], de[F]), Fe = S ? x[F] / 2 - le - me - Ee - Q.mainAxis : ve - me - Ee - Q.mainAxis, B = S ? -x[F] / 2 + le + me + ae + Q.mainAxis : be + me + ae + Q.mainAxis, oe = t.elements.arrow && bo(t.elements.arrow), ne = oe ? O === "y" ? oe.clientTop || 0 : oe.clientLeft || 0 : 0, Le = (z = ie?.[O]) != null ? z : 0, De = E + Fe - Le - ne, Ae = E + B - Le, Te = eo(p ? Yo(ee, De) : ee, E, p ? on(X, Ae) : X);
      $[O] = Te, w[O] = Te - E;
    }
    if (i) {
      var ce, Ke = O === "x" ? Je : Xe, cn = O === "x" ? it : lt, Ge = $[T], gt = T === "y" ? "height" : "width", dn = Ge + k[Ke], Qt = Ge - k[cn], D = [Je, Xe].indexOf(g) !== -1, fe = (ce = ie?.[T]) != null ? ce : 0, ot = D ? dn : Ge - x[gt] - G[gt] - fe + Q.altAxis, Bt = D ? Ge + x[gt] + G[gt] - fe - Q.altAxis : Qt, Vt = p && D ? Hv(ot, Ge, Bt) : eo(p ? ot : dn, Ge, p ? Bt : Qt);
      $[T] = Vt, w[T] = Vt - Ge;
    }
    t.modifiersData[o] = w;
  }
}
var vg = { name: "preventOverflow", enabled: !0, phase: "main", fn: hg, requiresIfExists: ["offset"] };
function gg(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function yg(e) {
  return e === tt(e) || !rt(e) ? Ts(e) : gg(e);
}
function bg(e) {
  var t = e.getBoundingClientRect(), n = $n(t.width) / e.offsetWidth || 1, o = $n(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function wg(e, t, n) {
  n === void 0 && (n = !1);
  var o = rt(t), a = rt(t) && bg(t), r = Xt(t), s = In(e, a, n), i = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (o || !o && !n) && ((kt(t) !== "body" || Ps(r)) && (i = yg(t)), rt(t) ? (u = In(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : r && (u.x = Es(r))), { x: s.left + i.scrollLeft - u.x, y: s.top + i.scrollTop - u.y, width: s.width, height: s.height };
}
function _g(e) {
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
function Sg(e) {
  var t = _g(e);
  return Nv.reduce(function(n, o) {
    return n.concat(t.filter(function(a) {
      return a.phase === o;
    }));
  }, []);
}
function kg(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Cg(e) {
  var t = e.reduce(function(n, o) {
    var a = n[o.name];
    return n[o.name] = a ? Object.assign({}, a, o, { options: Object.assign({}, a.options, o.options), data: Object.assign({}, a.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Xr = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Qr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Os(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, a = t.defaultOptions, r = a === void 0 ? Xr : a;
  return function(s, i, u) {
    u === void 0 && (u = r);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Xr, r), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], f = !1, h = { state: c, setOptions: function(v) {
      var k = typeof v == "function" ? v(c.options) : v;
      m(), c.options = Object.assign({}, r, c.options, k), c.scrollParents = { reference: sn(s) ? to(s) : s.contextElement ? to(s.contextElement) : [], popper: to(i) };
      var g = Sg(Cg([].concat(o, c.options.modifiers)));
      return c.orderedModifiers = g.filter(function(I) {
        return I.enabled;
      }), p(), h.update();
    }, forceUpdate: function() {
      if (!f) {
        var v = c.elements, k = v.reference, g = v.popper;
        if (Qr(k, g)) {
          c.rects = { reference: wg(k, bo(g), c.options.strategy === "fixed"), popper: ks(g) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(G) {
            return c.modifiersData[G.name] = Object.assign({}, G.data);
          });
          for (var I = 0; I < c.orderedModifiers.length; I++) {
            if (c.reset === !0) {
              c.reset = !1, I = -1;
              continue;
            }
            var S = c.orderedModifiers[I], O = S.fn, T = S.options, $ = T === void 0 ? {} : T, x = S.name;
            typeof O == "function" && (c = O({ state: c, options: $, name: x, instance: h }) || c);
          }
        }
      }
    }, update: kg(function() {
      return new Promise(function(v) {
        h.forceUpdate(), v(c);
      });
    }), destroy: function() {
      m(), f = !0;
    } };
    if (!Qr(s, i)) return h;
    h.setOptions(u).then(function(v) {
      !f && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function p() {
      c.orderedModifiers.forEach(function(v) {
        var k = v.name, g = v.options, I = g === void 0 ? {} : g, S = v.effect;
        if (typeof S == "function") {
          var O = S({ state: c, name: k, instance: h, options: I }), T = function() {
          };
          d.push(O || T);
        }
      });
    }
    function m() {
      d.forEach(function(v) {
        return v();
      }), d = [];
    }
    return h;
  };
}
Os();
var Tg = [Ll, Al, Il, Cl];
Os({ defaultModifiers: Tg });
var Eg = [Ll, Al, Il, Cl, fg, ig, vg, Kv, ug], Pg = Os({ defaultModifiers: Eg });
const Og = ["fixed", "absolute"], $g = he({
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
    values: Og,
    default: "absolute"
  }
}), Ml = he({
  ...$g,
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
}), Ig = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Lg = (e, t) => {
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
}, xg = (e, t = []) => {
  const { placement: n, strategy: o, popperOptions: a } = e, r = {
    placement: n,
    strategy: o,
    ...a,
    modifiers: [...Ag(e), ...t]
  };
  return Mg(r, a?.modifiers), r;
}, Rg = (e) => {
  if (Re)
    return $t(e);
};
function Ag(e) {
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
function Mg(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const zg = (e, t, n = {}) => {
  const o = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = Ng(u);
      Object.assign(s.value, c);
    },
    requires: ["computeStyles"]
  }, a = b(() => {
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
  }), r = Zt(), s = A({
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
  return re(a, (u) => {
    const c = l(r);
    c && c.setOptions(u);
  }, {
    deep: !0
  }), re([e, t], ([u, c]) => {
    i(), !(!u || !c) && (r.value = Pg(u, c, l(a)));
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
function Ng(e) {
  const t = Object.keys(e.elements), n = Wo(t.map((a) => [a, e.styles[a] || {}])), o = Wo(t.map((a) => [a, e.attributes[a]]));
  return {
    styles: n,
    attributes: o
  };
}
const Fg = 0, Bg = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: o, role: a } = ye(ys, void 0), r = A(), s = A(), i = b(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = b(() => {
    var g;
    const I = l(r), S = (g = l(s)) != null ? g : Fg;
    return {
      name: "arrow",
      enabled: !em(I),
      options: {
        element: I,
        padding: S
      }
    };
  }), c = b(() => ({
    onFirstUpdate: () => {
      m();
    },
    ...xg(e, [
      l(u),
      l(i)
    ])
  })), d = b(() => Rg(e.referenceEl) || l(o)), { attributes: f, state: h, styles: p, update: m, forceUpdate: v, instanceRef: k } = zg(d, n, c);
  return re(k, (g) => t.value = g), Pe(() => {
    re(() => {
      var g;
      return (g = l(d)) == null ? void 0 : g.getBoundingClientRect();
    }, () => {
      m();
    });
  }), {
    attributes: f,
    arrowRef: r,
    contentRef: n,
    instanceRef: k,
    state: h,
    styles: p,
    role: a,
    forceUpdate: v,
    update: m
  };
}, Vg = (e, {
  attributes: t,
  styles: n,
  role: o
}) => {
  const { nextZIndex: a } = Zi(), r = Ce("popper"), s = b(() => l(t).popper), i = A(pe(e.zIndex) ? e.zIndex : a()), u = b(() => [
    r.b(),
    r.is("pure", e.pure),
    r.is(e.effect),
    e.popperClass
  ]), c = b(() => [
    { zIndex: l(i) },
    l(n).popper,
    e.popperStyle || {}
  ]), d = b(() => o.value === "dialog" ? "false" : void 0), f = b(() => l(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: f,
    contentAttrs: s,
    contentClass: u,
    contentStyle: c,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = pe(e.zIndex) ? e.zIndex : a();
    }
  };
}, Dg = K({
  name: "ElPopperContent"
}), Hg = /* @__PURE__ */ K({
  ...Dg,
  props: Ml,
  emits: Ig,
  setup(e, { expose: t, emit: n }) {
    const o = e, {
      focusStartRef: a,
      trapped: r,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: d
    } = Lg(o, n), { attributes: f, arrowRef: h, contentRef: p, styles: m, instanceRef: v, role: k, update: g } = Bg(o), {
      ariaModal: I,
      arrowStyle: S,
      contentAttrs: O,
      contentClass: T,
      contentStyle: $,
      updateZIndex: x
    } = Vg(o, {
      styles: m,
      attributes: f,
      role: k
    }), G = ye(Zo, void 0), W = A();
    mt(vl, {
      arrowStyle: S,
      arrowRef: h,
      arrowOffset: W
    }), G && mt(Zo, {
      ...G,
      addInputId: ro,
      removeInputId: ro
    });
    let Q;
    const ie = (z = !0) => {
      g(), z && x();
    }, w = () => {
      ie(!1), o.visible && o.focusOnShow ? r.value = !0 : o.visible === !1 && (r.value = !1);
    };
    return Pe(() => {
      re(() => o.triggerTargetEl, (z, Y) => {
        Q?.(), Q = void 0;
        const P = l(z || p.value), F = l(Y || p.value);
        pt(P) && (Q = re([k, () => o.ariaLabel, I, () => o.id], (E) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ee, X) => {
            xt(E[X]) ? P.removeAttribute(ee) : P.setAttribute(ee, E[X]);
          });
        }, { immediate: !0 })), F !== P && pt(F) && ["role", "aria-label", "aria-modal", "id"].forEach((E) => {
          F.removeAttribute(E);
        });
      }, { immediate: !0 }), re(() => o.visible, w, { immediate: !0 });
    }), Ct(() => {
      Q?.(), Q = void 0;
    }), t({
      popperContentRef: p,
      popperInstanceRef: v,
      updatePopper: ie,
      contentStyle: $
    }), (z, Y) => (_(), R("div", Yt({
      ref_key: "contentRef",
      ref: p
    }, l(O), {
      style: l($),
      class: l(T),
      tabindex: "-1",
      onMouseenter: (P) => z.$emit("mouseenter", P),
      onMouseleave: (P) => z.$emit("mouseleave", P)
    }), [
      N(l(Tv), {
        trapped: l(r),
        "trap-on-focus-in": !0,
        "focus-trap-el": l(p),
        "focus-start-el": l(a),
        onFocusAfterTrapped: l(i),
        onFocusAfterReleased: l(s),
        onFocusin: l(u),
        onFocusoutPrevented: l(c),
        onReleaseRequested: l(d)
      }, {
        default: Z(() => [
          se(z.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var jg = /* @__PURE__ */ _e(Hg, [["__file", "content.vue"]]);
const Wg = nt(tv), $s = Symbol("elTooltip");
function ei() {
  let e;
  const t = (o, a) => {
    n(), e = window.setTimeout(o, a);
  }, n = () => window.clearTimeout(e);
  return vo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Ug = he({
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
}), Kg = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: o,
  close: a
}) => {
  const { registerTimeout: r } = ei(), {
    registerTimeout: s,
    cancelTimeout: i
  } = ei();
  return {
    onOpen: (d) => {
      r(() => {
        o(d);
        const f = l(n);
        pe(f) && f > 0 && s(() => {
          a(d);
        }, f);
      }, l(e));
    },
    onClose: (d) => {
      i(), r(() => {
        a(d);
      }, l(t));
    }
  };
}, Is = he({
  ...Ug,
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
  ...un(["ariaLabel"])
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
}), Gg = fa({
  type: te(Boolean),
  default: null
}), Zg = fa({
  type: te(Function)
}), Yg = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], a = {
    [e]: Gg,
    [n]: Zg
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: u,
      shouldProceed: c,
      onShow: d,
      onHide: f
    }) => {
      const h = Ue(), { emit: p } = h, m = h.props, v = b(() => Ie(m[n])), k = b(() => m[e] === null), g = (x) => {
        s.value !== !0 && (s.value = !0, i && (i.value = x), Ie(d) && d(x));
      }, I = (x) => {
        s.value !== !1 && (s.value = !1, i && (i.value = x), Ie(f) && f(x));
      }, S = (x) => {
        if (m.disabled === !0 || Ie(c) && !c())
          return;
        const G = v.value && Re;
        G && p(t, !0), (k.value || !G) && g(x);
      }, O = (x) => {
        if (m.disabled === !0 || !Re)
          return;
        const G = v.value && Re;
        G && p(t, !1), (k.value || !G) && I(x);
      }, T = (x) => {
        Uo(x) && (m.disabled && x ? v.value && p(t, !1) : s.value !== x && (x ? g() : I()));
      }, $ = () => {
        s.value ? O() : S();
      };
      return re(() => m[e], T), u && h.appContext.config.globalProperties.$route !== void 0 && re(() => ({
        ...h.proxy.$route
      }), () => {
        u.value && s.value && O();
      }), Pe(() => {
        T(m[e]);
      }), {
        hide: O,
        show: S,
        toggle: $,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: a,
    useModelToggleEmits: o
  };
}, {
  useModelToggleProps: qg,
  useModelToggleEmits: Jg,
  useModelToggle: Xg
} = Yg("visible"), Qg = he({
  ...gl,
  ...qg,
  ...Is,
  ...zl,
  ...yl,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), e0 = [
  ...Jg,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], t0 = (e, t) => je(e) ? e.includes(t) : e === t, mn = (e, t, n) => (o) => {
  t0(l(e), t) && n(o);
}, Pt = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (a) => {
  const r = e?.(a);
  if (n === !1 || !r)
    return t?.(a);
}, n0 = K({
  name: "ElTooltipTrigger"
}), o0 = /* @__PURE__ */ K({
  ...n0,
  props: zl,
  setup(e, { expose: t }) {
    const n = e, o = Ce("tooltip"), { controlled: a, id: r, open: s, onOpen: i, onClose: u, onToggle: c } = ye($s, void 0), d = A(null), f = () => {
      if (l(a) || n.disabled)
        return !0;
    }, h = wt(n, "trigger"), p = Pt(f, mn(h, "hover", i)), m = Pt(f, mn(h, "hover", u)), v = Pt(f, mn(h, "click", (O) => {
      O.button === 0 && c(O);
    })), k = Pt(f, mn(h, "focus", i)), g = Pt(f, mn(h, "focus", u)), I = Pt(f, mn(h, "contextmenu", (O) => {
      O.preventDefault(), c(O);
    })), S = Pt(f, (O) => {
      const { code: T } = O;
      n.triggerKeys.includes(T) && (O.preventDefault(), c(O));
    });
    return t({
      triggerRef: d
    }), (O, T) => (_(), q(l(dv), {
      id: l(r),
      "virtual-ref": O.virtualRef,
      open: l(s),
      "virtual-triggering": O.virtualTriggering,
      class: M(l(o).e("trigger")),
      onBlur: l(g),
      onClick: l(v),
      onContextmenu: l(I),
      onFocus: l(k),
      onMouseenter: l(p),
      onMouseleave: l(m),
      onKeydown: l(S)
    }, {
      default: Z(() => [
        se(O.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var a0 = /* @__PURE__ */ _e(o0, [["__file", "trigger.vue"]]);
const s0 = he({
  to: {
    type: te([String, Object]),
    required: !0
  },
  disabled: Boolean
}), r0 = /* @__PURE__ */ K({
  __name: "teleport",
  props: s0,
  setup(e) {
    return (t, n) => t.disabled ? se(t.$slots, "default", { key: 0 }) : (_(), q(Fu, {
      key: 1,
      to: t.to
    }, [
      se(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var i0 = /* @__PURE__ */ _e(r0, [["__file", "teleport.vue"]]);
const l0 = nt(i0), Nl = () => {
  const e = os(), t = dl(), n = b(() => `${e.value}-popper-container-${t.prefix}`), o = b(() => `#${n.value}`);
  return {
    id: n,
    selector: o
  };
}, u0 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, c0 = () => {
  const { id: e, selector: t } = Nl();
  return Bu(() => {
    Re && (document.body.querySelector(t.value) || u0(e.value));
  }), {
    id: e,
    selector: t
  };
}, d0 = K({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), f0 = /* @__PURE__ */ K({
  ...d0,
  props: Is,
  setup(e, { expose: t }) {
    const n = e, { selector: o } = Nl(), a = Ce("tooltip"), r = A();
    let s;
    const {
      controlled: i,
      id: u,
      open: c,
      trigger: d,
      onClose: f,
      onOpen: h,
      onShow: p,
      onHide: m,
      onBeforeShow: v,
      onBeforeHide: k
    } = ye($s, void 0), g = b(() => n.transition || `${a.namespace.value}-fade-in-linear`), I = b(() => n.persistent);
    Ct(() => {
      s?.();
    });
    const S = b(() => l(I) ? !0 : l(c)), O = b(() => n.disabled ? !1 : l(c)), T = b(() => n.appendTo || o.value), $ = b(() => {
      var E;
      return (E = n.style) != null ? E : {};
    }), x = A(!0), G = () => {
      m(), F() && Et(document.body), x.value = !0;
    }, W = () => {
      if (l(i))
        return !0;
    }, Q = Pt(W, () => {
      n.enterable && l(d) === "hover" && h();
    }), ie = Pt(W, () => {
      l(d) === "hover" && f();
    }), w = () => {
      var E, ee;
      (ee = (E = r.value) == null ? void 0 : E.updatePopper) == null || ee.call(E), v?.();
    }, z = () => {
      k?.();
    }, Y = () => {
      p(), s = gm(b(() => {
        var E;
        return (E = r.value) == null ? void 0 : E.popperContentRef;
      }), () => {
        if (l(i))
          return;
        l(d) !== "hover" && f();
      });
    }, P = () => {
      n.virtualTriggering || f();
    }, F = (E) => {
      var ee;
      const X = (ee = r.value) == null ? void 0 : ee.popperContentRef, le = E?.relatedTarget || document.activeElement;
      return X?.contains(le);
    };
    return re(() => l(c), (E) => {
      E ? x.value = !1 : s?.();
    }, {
      flush: "post"
    }), re(() => n.content, () => {
      var E, ee;
      (ee = (E = r.value) == null ? void 0 : E.updatePopper) == null || ee.call(E);
    }), t({
      contentRef: r,
      isFocusInsideContent: F
    }), (E, ee) => (_(), q(l(l0), {
      disabled: !E.teleported,
      to: l(T)
    }, {
      default: Z(() => [
        N(Mn, {
          name: l(g),
          onAfterLeave: G,
          onBeforeEnter: w,
          onAfterEnter: Y,
          onBeforeLeave: z
        }, {
          default: Z(() => [
            l(S) ? qe((_(), q(l(jg), Yt({
              key: 0,
              id: l(u),
              ref_key: "contentRef",
              ref: r
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
              "popper-style": [E.popperStyle, l($)],
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
                se(E.$slots, "default")
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
var p0 = /* @__PURE__ */ _e(f0, [["__file", "content.vue"]]);
const m0 = K({
  name: "ElTooltip"
}), h0 = /* @__PURE__ */ K({
  ...m0,
  props: Qg,
  emits: e0,
  setup(e, { expose: t, emit: n }) {
    const o = e;
    c0();
    const a = ma(), r = A(), s = A(), i = () => {
      var g;
      const I = l(r);
      I && ((g = I.popperInstanceRef) == null || g.update());
    }, u = A(!1), c = A(), { show: d, hide: f, hasUpdateHandler: h } = Xg({
      indicator: u,
      toggleReason: c
    }), { onOpen: p, onClose: m } = Kg({
      showAfter: wt(o, "showAfter"),
      hideAfter: wt(o, "hideAfter"),
      autoClose: wt(o, "autoClose"),
      open: d,
      close: f
    }), v = b(() => Uo(o.visible) && !h.value);
    mt($s, {
      controlled: v,
      id: a,
      open: ts(u),
      trigger: wt(o, "trigger"),
      onOpen: (g) => {
        p(g);
      },
      onClose: (g) => {
        m(g);
      },
      onToggle: (g) => {
        l(u) ? m(g) : p(g);
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
    const k = (g) => {
      var I;
      return (I = s.value) == null ? void 0 : I.isFocusInsideContent(g);
    };
    return Vu(() => u.value && f()), t({
      popperRef: r,
      contentRef: s,
      isFocusInsideContent: k,
      updatePopper: i,
      onOpen: p,
      onClose: m,
      hide: f
    }), (g, I) => (_(), q(l(Wg), {
      ref_key: "popperRef",
      ref: r,
      role: g.role
    }, {
      default: Z(() => [
        N(a0, {
          disabled: g.disabled,
          trigger: g.trigger,
          "trigger-keys": g.triggerKeys,
          "virtual-ref": g.virtualRef,
          "virtual-triggering": g.virtualTriggering
        }, {
          default: Z(() => [
            g.$slots.default ? se(g.$slots, "default", { key: 0 }) : H("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        N(p0, {
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
          default: Z(() => [
            se(g.$slots, "content", {}, () => [
              g.rawContent ? (_(), R("span", {
                key: 0,
                innerHTML: g.content
              }, null, 8, ["innerHTML"])) : (_(), R("span", { key: 1 }, U(g.content), 1))
            ]),
            g.showArrow ? (_(), q(l(av), {
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
var v0 = /* @__PURE__ */ _e(h0, [["__file", "tooltip.vue"]]);
const Ls = nt(v0), g0 = he({
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
}), y0 = K({
  name: "ElBadge"
}), b0 = /* @__PURE__ */ K({
  ...y0,
  props: g0,
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
    }), (s, i) => (_(), R("div", {
      class: M(l(o).b())
    }, [
      se(s.$slots, "default"),
      N(Mn, {
        name: `${l(o).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: Z(() => [
          qe(y("sup", {
            class: M([
              l(o).e("content"),
              l(o).em("content", s.type),
              l(o).is("fixed", !!s.$slots.default),
              l(o).is("dot", s.isDot),
              l(o).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: we(l(r))
          }, [
            se(s.$slots, "content", { value: l(a) }, () => [
              nn(U(l(a)), 1)
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
var w0 = /* @__PURE__ */ _e(b0, [["__file", "badge.vue"]]);
const _0 = nt(w0), S0 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Wa = he({
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
}), k0 = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, C0 = K({
  name: "ElTag"
}), T0 = /* @__PURE__ */ K({
  ...C0,
  props: Wa,
  emits: k0,
  setup(e, { emit: t }) {
    const n = e, o = go(), a = Ce("tag"), r = b(() => {
      const { type: c, hit: d, effect: f, closable: h, round: p } = n;
      return [
        a.b(),
        a.is("closable", h),
        a.m(c || "primary"),
        a.m(o.value),
        a.m(f),
        a.is("hit", d),
        a.is("round", p)
      ];
    }), s = (c) => {
      t("close", c);
    }, i = (c) => {
      t("click", c);
    }, u = (c) => {
      var d, f, h;
      (h = (f = (d = c?.component) == null ? void 0 : d.subTree) == null ? void 0 : f.component) != null && h.bum && (c.component.subTree.component.bum = null);
    };
    return (c, d) => c.disableTransitions ? (_(), R("span", {
      key: 0,
      class: M(l(r)),
      style: we({ backgroundColor: c.color }),
      onClick: i
    }, [
      y("span", {
        class: M(l(a).e("content"))
      }, [
        se(c.$slots, "default")
      ], 2),
      c.closable ? (_(), q(l(He), {
        key: 0,
        class: M(l(a).e("close")),
        onClick: Oe(s, ["stop"])
      }, {
        default: Z(() => [
          N(l(co))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : H("v-if", !0)
    ], 6)) : (_(), q(Mn, {
      key: 1,
      name: `${l(a).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: u
    }, {
      default: Z(() => [
        y("span", {
          class: M(l(r)),
          style: we({ backgroundColor: c.color }),
          onClick: i
        }, [
          y("span", {
            class: M(l(a).e("content"))
          }, [
            se(c.$slots, "default")
          ], 2),
          c.closable ? (_(), q(l(He), {
            key: 0,
            class: M(l(a).e("close")),
            onClick: Oe(s, ["stop"])
          }, {
            default: Z(() => [
              N(l(co))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : H("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var E0 = /* @__PURE__ */ _e(T0, [["__file", "tag.vue"]]);
const P0 = nt(E0), Ht = /* @__PURE__ */ new Map();
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
function ti(e, t) {
  let n = [];
  return je(t.arg) ? n = t.arg : pt(t.arg) && n.push(t.arg), function(o, a) {
    const r = t.instance.popperRef, s = o.target, i = a?.target, u = !t || !t.instance, c = !s || !i, d = e.contains(s) || e.contains(i), f = e === s, h = n.length && n.some((m) => m?.contains(s)) || n.length && n.includes(i), p = r && (r.contains(s) || r.contains(i));
    u || c || d || f || h || p || t.value(o, a);
  };
}
const O0 = {
  beforeMount(e, t) {
    Ht.has(e) || Ht.set(e, []), Ht.get(e).push({
      documentHandler: ti(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Ht.has(e) || Ht.set(e, []);
    const n = Ht.get(e), o = n.findIndex((r) => r.bindingFn === t.oldValue), a = {
      documentHandler: ti(e, t),
      bindingFn: t.value
    };
    o >= 0 ? n.splice(o, 1, a) : n.push(a);
  },
  unmounted(e) {
    Ht.delete(e);
  }
}, $0 = he({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: te(Object)
  },
  size: En,
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
K({
  name: "ElConfigProvider",
  props: $0,
  setup(e, { slots: t }) {
    re(() => e.message, (o) => {
      Object.assign(ct, o ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ol(e);
    return () => se(t, "default", { config: n?.value });
  }
});
const I0 = 100, L0 = 600, ni = {
  beforeMount(e, t) {
    const n = t.value, { interval: o = I0, delay: a = L0 } = Ie(n) ? {} : n;
    let r, s;
    const i = () => Ie(n) ? n() : n.handler(), u = () => {
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
}, x0 = he({
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
  size: En,
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
}), R0 = {
  [Jt]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Rt]: (e) => pe(e) || xt(e),
  [xe]: (e) => pe(e) || xt(e)
}, A0 = K({
  name: "ElInputNumber"
}), M0 = /* @__PURE__ */ K({
  ...A0,
  props: x0,
  emits: R0,
  setup(e, { expose: t, emit: n }) {
    const o = e, { t: a } = da(), r = Ce("input-number"), s = A(), i = Mt({
      currentValue: o.modelValue,
      userInput: null
    }), { formItem: u } = ha(), c = b(() => pe(o.modelValue) && o.modelValue <= o.min), d = b(() => pe(o.modelValue) && o.modelValue >= o.max), f = b(() => {
      const P = g(o.step);
      return dt(o.precision) ? Math.max(g(o.modelValue), P) : (P > o.precision, o.precision);
    }), h = b(() => o.controls && o.controlsPosition === "right"), p = go(), m = pl(), v = b(() => {
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
    }), k = (P, F) => {
      if (dt(F) && (F = f.value), F === 0)
        return Math.round(P);
      let E = String(P);
      const ee = E.indexOf(".");
      if (ee === -1 || !E.replace(".", "").split("")[ee + F])
        return P;
      const ve = E.length;
      return E.charAt(ve - 1) === "5" && (E = `${E.slice(0, Math.max(0, ve - 1))}6`), Number.parseFloat(Number(E).toFixed(F));
    }, g = (P) => {
      if (xt(P))
        return 0;
      const F = P.toString(), E = F.indexOf(".");
      let ee = 0;
      return E !== -1 && (ee = F.length - E - 1), ee;
    }, I = (P, F = 1) => pe(P) ? k(P + o.step * F) : i.currentValue, S = () => {
      if (o.readonly || m.value || d.value)
        return;
      const P = Number(v.value) || 0, F = I(P);
      $(F), n(Rt, i.currentValue), z();
    }, O = () => {
      if (o.readonly || m.value || c.value)
        return;
      const P = Number(v.value) || 0, F = I(P, -1);
      $(F), n(Rt, i.currentValue), z();
    }, T = (P, F) => {
      const { max: E, min: ee, step: X, precision: le, stepStrictly: ve, valueOnClear: be } = o;
      E < ee && fs("InputNumber", "min should not be greater than max.");
      let J = Number(P);
      if (xt(P) || Number.isNaN(J))
        return null;
      if (P === "") {
        if (be === null)
          return null;
        J = Be(be) ? { min: ee, max: E }[be] : be;
      }
      return ve && (J = k(Math.round(J / X) * X, le), J !== P && F && n(xe, J)), dt(le) || (J = k(J, le)), (J > E || J < ee) && (J = J > E ? E : ee, F && n(xe, J)), J;
    }, $ = (P, F = !0) => {
      var E;
      const ee = i.currentValue, X = T(P);
      if (!F) {
        n(xe, X);
        return;
      }
      ee === X && P || (i.userInput = null, n(xe, X), ee !== X && n(Jt, X, ee), o.validateEvent && ((E = u?.validate) == null || E.call(u, "change").catch((le) => void 0)), i.currentValue = X);
    }, x = (P) => {
      i.userInput = P;
      const F = P === "" ? null : Number(P);
      n(Rt, F), $(F, !1);
    }, G = (P) => {
      const F = P !== "" ? Number(P) : "";
      (pe(F) && !Number.isNaN(F) || P === "") && $(F), z(), i.userInput = null;
    }, W = () => {
      var P, F;
      (F = (P = s.value) == null ? void 0 : P.focus) == null || F.call(P);
    }, Q = () => {
      var P, F;
      (F = (P = s.value) == null ? void 0 : P.blur) == null || F.call(P);
    }, ie = (P) => {
      n("focus", P);
    }, w = (P) => {
      var F, E;
      i.userInput = null, ul() && i.currentValue === null && ((F = s.value) != null && F.input) && (s.value.input.value = ""), n("blur", P), o.validateEvent && ((E = u?.validate) == null || E.call(u, "blur").catch((ee) => void 0));
    }, z = () => {
      i.currentValue !== o.modelValue && (i.currentValue = o.modelValue);
    }, Y = (P) => {
      document.activeElement === P.target && P.preventDefault();
    };
    return re(() => o.modelValue, (P, F) => {
      const E = T(P, !0);
      i.userInput === null && E !== F && (i.currentValue = E);
    }, { immediate: !0 }), Pe(() => {
      var P;
      const { min: F, max: E, modelValue: ee } = o, X = (P = s.value) == null ? void 0 : P.input;
      if (X.setAttribute("role", "spinbutton"), Number.isFinite(E) ? X.setAttribute("aria-valuemax", String(E)) : X.removeAttribute("aria-valuemax"), Number.isFinite(F) ? X.setAttribute("aria-valuemin", String(F)) : X.removeAttribute("aria-valuemin"), X.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), X.setAttribute("aria-disabled", String(m.value)), !pe(ee) && ee != null) {
        let le = Number(ee);
        Number.isNaN(le) && (le = null), n(xe, le);
      }
      X.addEventListener("wheel", Y, { passive: !1 });
    }), Ci(() => {
      var P, F;
      const E = (P = s.value) == null ? void 0 : P.input;
      E?.setAttribute("aria-valuenow", `${(F = i.currentValue) != null ? F : ""}`);
    }), t({
      focus: W,
      blur: Q
    }), (P, F) => (_(), R("div", {
      class: M([
        l(r).b(),
        l(r).m(l(p)),
        l(r).is("disabled", l(m)),
        l(r).is("without-controls", !P.controls),
        l(r).is("controls-right", l(h))
      ]),
      onDragstart: Oe(() => {
      }, ["prevent"])
    }, [
      P.controls ? qe((_(), R("span", {
        key: 0,
        role: "button",
        "aria-label": l(a)("el.inputNumber.decrease"),
        class: M([l(r).e("decrease"), l(r).is("disabled", l(c))]),
        onKeydown: Ot(O, ["enter"])
      }, [
        se(P.$slots, "decrease-icon", {}, () => [
          N(l(He), null, {
            default: Z(() => [
              l(h) ? (_(), q(l(sl), { key: 0 })) : (_(), q(l(uh), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(ni), O]
      ]) : H("v-if", !0),
      P.controls ? qe((_(), R("span", {
        key: 1,
        role: "button",
        "aria-label": l(a)("el.inputNumber.increase"),
        class: M([l(r).e("increase"), l(r).is("disabled", l(d))]),
        onKeydown: Ot(S, ["enter"])
      }, [
        se(P.$slots, "increase-icon", {}, () => [
          N(l(He), null, {
            default: Z(() => [
              l(h) ? (_(), q(l(Zm), { key: 0 })) : (_(), q(l(ph), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [l(ni), S]
      ]) : H("v-if", !0),
      N(l(vs), {
        id: P.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: P.step,
        "model-value": l(v),
        placeholder: P.placeholder,
        readonly: P.readonly,
        disabled: l(m),
        size: l(p),
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
      }, Du({
        _: 2
      }, [
        P.$slots.prefix ? {
          name: "prefix",
          fn: Z(() => [
            se(P.$slots, "prefix")
          ])
        } : void 0,
        P.$slots.suffix ? {
          name: "suffix",
          fn: Z(() => [
            se(P.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var z0 = /* @__PURE__ */ _e(M0, [["__file", "input-number.vue"]]);
const N0 = nt(z0);
function F0() {
  const e = Zt(), t = A(0), n = 11, o = b(() => ({
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
const Fl = Symbol("ElSelectGroup"), ya = Symbol("ElSelect");
function B0(e, t) {
  const n = ye(ya), o = ye(Fl, { disabled: !1 }), a = b(() => d(Kt(n.props.modelValue), e.value)), r = b(() => {
    var p;
    if (n.props.multiple) {
      const m = Kt((p = n.props.modelValue) != null ? p : []);
      return !a.value && m.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = b(() => e.label || (Ye(e.value) ? "" : e.value)), i = b(() => e.value || e.label || ""), u = b(() => e.disabled || t.groupDisabled || r.value), c = Ue(), d = (p = [], m) => {
    if (Ye(e.value)) {
      const v = n.props.valueKey;
      return p && p.some((k) => Hu(Gt(k, v)) === Gt(m, v));
    } else
      return p && p.includes(m);
  }, f = () => {
    !e.disabled && !o.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(c.proxy));
  }, h = (p) => {
    const m = new RegExp(S0(p), "i");
    t.visible = m.test(s.value) || e.created;
  };
  return re(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), re(() => e.value, (p, m) => {
    const { remote: v, valueKey: k } = n.props;
    if ((v ? p !== m : !Qn(p, m)) && (n.onOptionDestroy(m, c.proxy), n.onOptionCreate(c.proxy)), !e.created && !v) {
      if (k && Ye(p) && Ye(m) && p[k] === m[k])
        return;
      n.setSelected();
    }
  }), re(() => o.disabled, () => {
    t.groupDisabled = o.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: a,
    isDisabled: u,
    hoverItem: f,
    updateOption: h
  };
}
const V0 = K({
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
      t.is("hovering", l(h))
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
    } = B0(e, a), { visible: f, hover: h } = Cn(a), p = Ue().proxy;
    u.onOptionCreate(p), Ct(() => {
      const v = p.value, { selected: k } = u.states, g = k.some((I) => I.value === p.value);
      ke(() => {
        u.states.cachedOptions.get(v) === p && !g && u.states.cachedOptions.delete(v);
      }), u.onOptionDestroy(v, p);
    });
    function m() {
      i.value || u.handleOptionSelect(p);
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
      visible: f,
      hover: h,
      selectOptionClick: m,
      states: a
    };
  }
});
function D0(e, t, n, o, a, r) {
  return qe((_(), R("li", {
    id: e.id,
    class: M(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Oe(e.selectOptionClick, ["stop"])
  }, [
    se(e.$slots, "default", {}, () => [
      y("span", null, U(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [At, e.visible]
  ]);
}
var xs = /* @__PURE__ */ _e(V0, [["render", D0], ["__file", "option.vue"]]);
const H0 = K({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = ye(ya), t = Ce("select"), n = b(() => e.props.popperClass), o = b(() => e.props.multiple), a = b(() => e.props.fitInputWidth), r = A("");
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
function j0(e, t, n, o, a, r) {
  return _(), R("div", {
    class: M([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: we({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (_(), R("div", {
      key: 0,
      class: M(e.ns.be("dropdown", "header"))
    }, [
      se(e.$slots, "header")
    ], 2)) : H("v-if", !0),
    se(e.$slots, "default"),
    e.$slots.footer ? (_(), R("div", {
      key: 1,
      class: M(e.ns.be("dropdown", "footer"))
    }, [
      se(e.$slots, "footer")
    ], 2)) : H("v-if", !0)
  ], 6);
}
var W0 = /* @__PURE__ */ _e(H0, [["render", j0], ["__file", "select-dropdown.vue"]]);
const U0 = (e, t) => {
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
  }), i = A(null), u = A(null), c = A(null), d = A(null), f = A(null), h = A(null), p = A(null), m = A(null), v = A(null), k = A(null), g = A(null), {
    isComposing: I,
    handleCompositionStart: S,
    handleCompositionUpdate: O,
    handleCompositionEnd: T
  } = hl({
    afterComposition: (C) => Vt(C)
  }), { wrapperRef: $, isFocused: x, handleBlur: G } = ml(f, {
    beforeFocus() {
      return F.value;
    },
    afterFocus() {
      e.automaticDropdown && !W.value && (W.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(C) {
      var j, ue;
      return ((j = c.value) == null ? void 0 : j.isFocusInsideContent(C)) || ((ue = d.value) == null ? void 0 : ue.isFocusInsideContent(C));
    },
    afterBlur() {
      W.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), W = A(!1), Q = A(), { form: ie, formItem: w } = ha(), { inputId: z } = hs(e, {
    formItemContext: w
  }), { valueOnClear: Y, isEmptyValue: P } = Bm(e), F = b(() => e.disabled || ie?.disabled), E = b(() => je(e.modelValue) ? e.modelValue.length > 0 : !P(e.modelValue)), ee = b(() => {
    var C;
    return (C = ie?.statusIcon) != null ? C : !1;
  }), X = b(() => e.clearable && !F.value && s.inputHovering && E.value), le = b(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), ve = b(() => a.is("reverse", le.value && W.value)), be = b(() => w?.validateState || ""), J = b(() => ll[be.value]), de = b(() => e.remote ? 300 : 0), ge = b(() => e.remote && !s.inputValue && s.options.size === 0), Ee = b(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && ae.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), ae = b(() => me.value.filter((C) => C.visible).length), me = b(() => {
    const C = Array.from(s.options.values()), j = [];
    return s.optionValues.forEach((ue) => {
      const Me = C.findIndex((Qe) => Qe.value === ue);
      Me > -1 && j.push(C[Me]);
    }), j.length >= C.length ? j : C;
  }), Fe = b(() => Array.from(s.cachedOptions.values())), B = b(() => {
    const C = me.value.filter((j) => !j.created).some((j) => j.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !C;
  }), oe = () => {
    e.filterable && Ie(e.filterMethod) || e.filterable && e.remote && Ie(e.remoteMethod) || me.value.forEach((C) => {
      var j;
      (j = C.updateOption) == null || j.call(C, s.inputValue);
    });
  }, ne = go(), Le = b(() => ["small"].includes(ne.value) ? "small" : "default"), De = b({
    get() {
      return W.value && !ge.value;
    },
    set(C) {
      W.value = C;
    }
  }), Ae = b(() => {
    if (e.multiple && !dt(e.modelValue))
      return Kt(e.modelValue).length === 0 && !s.inputValue;
    const C = je(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || dt(C) ? !s.inputValue : !0;
  }), Te = b(() => {
    var C;
    const j = (C = e.placeholder) != null ? C : n("el.select.placeholder");
    return e.multiple || !E.value ? j : s.selectedLabel;
  }), ce = b(() => Va ? null : "mouseenter");
  re(() => e.modelValue, (C, j) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", Ke("")), Ge(), !Qn(C, j) && e.validateEvent && w?.validate("change").catch((ue) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), re(() => W.value, (C) => {
    C ? Ke(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", C);
  }), re(() => s.options.entries(), () => {
    Re && (Ge(), e.defaultFirstOption && (e.filterable || e.remote) && ae.value && cn());
  }, {
    flush: "post"
  }), re([() => s.hoveringIndex, me], ([C]) => {
    pe(C) && C > -1 ? Q.value = me.value[C] || {} : Q.value = {}, me.value.forEach((j) => {
      j.hover = Q.value === j;
    });
  }), Si(() => {
    s.isBeforeHide || oe();
  });
  const Ke = (C) => {
    s.previousQuery === C || I.value || (s.previousQuery = C, e.filterable && Ie(e.filterMethod) ? e.filterMethod(C) : e.filterable && e.remote && Ie(e.remoteMethod) && e.remoteMethod(C), e.defaultFirstOption && (e.filterable || e.remote) && ae.value ? ke(cn) : ke(dn));
  }, cn = () => {
    const C = me.value.filter((Qe) => Qe.visible && !Qe.disabled && !Qe.states.groupDisabled), j = C.find((Qe) => Qe.created), ue = C[0], Me = me.value.map((Qe) => Qe.value);
    s.hoveringIndex = Vs(Me, j || ue);
  }, Ge = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const j = je(e.modelValue) ? e.modelValue[0] : e.modelValue, ue = gt(j);
      s.selectedLabel = ue.currentLabel, s.selected = [ue];
      return;
    }
    const C = [];
    dt(e.modelValue) || Kt(e.modelValue).forEach((j) => {
      C.push(gt(j));
    }), s.selected = C;
  }, gt = (C) => {
    let j;
    const ue = mc(C);
    for (let fn = s.cachedOptions.size - 1; fn >= 0; fn--) {
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
    s.hoveringIndex = me.value.findIndex((C) => s.selected.some((j) => ko(j) === ko(C)));
  }, Qt = () => {
    s.selectionWidth = u.value.getBoundingClientRect().width;
  }, D = () => {
    s.collapseItemWidth = k.value.getBoundingClientRect().width;
  }, fe = () => {
    var C, j;
    (j = (C = c.value) == null ? void 0 : C.updatePopper) == null || j.call(C);
  }, ot = () => {
    var C, j;
    (j = (C = d.value) == null ? void 0 : C.updatePopper) == null || j.call(C);
  }, Bt = () => {
    s.inputValue.length > 0 && !W.value && (W.value = !0), Ke(s.inputValue);
  }, Vt = (C) => {
    if (s.inputValue = C.target.value, e.remote)
      Ns();
    else
      return Bt();
  }, Ns = Ba(() => {
    Bt();
  }, de.value), Bn = (C) => {
    Qn(e.modelValue, C) || t(Jt, C);
  }, lu = (C) => Qp(C, (j) => {
    const ue = s.cachedOptions.get(j);
    return ue && !ue.disabled && !ue.states.groupDisabled;
  }), uu = (C) => {
    if (e.multiple && C.code !== Ne.delete && C.target.value.length <= 0) {
      const j = Kt(e.modelValue).slice(), ue = lu(j);
      if (ue < 0)
        return;
      const Me = j[ue];
      j.splice(ue, 1), t(xe, j), Bn(j), t("remove-tag", Me);
    }
  }, cu = (C, j) => {
    const ue = s.selected.indexOf(j);
    if (ue > -1 && !F.value) {
      const Me = Kt(e.modelValue).slice();
      Me.splice(ue, 1), t(xe, Me), Bn(Me), t("remove-tag", j.value);
    }
    C.stopPropagation(), So();
  }, Fs = (C) => {
    C.stopPropagation();
    const j = e.multiple ? [] : Y.value;
    if (e.multiple)
      for (const ue of s.selected)
        ue.isDisabled && j.push(ue.value);
    t(xe, j), Bn(j), s.hoveringIndex = -1, W.value = !1, t("clear"), So();
  }, Bs = (C) => {
    var j;
    if (e.multiple) {
      const ue = Kt((j = e.modelValue) != null ? j : []).slice(), Me = Vs(ue, C);
      Me > -1 ? ue.splice(Me, 1) : (e.multipleLimit <= 0 || ue.length < e.multipleLimit) && ue.push(C.value), t(xe, ue), Bn(ue), C.created && Ke(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(xe, C.value), Bn(C.value), W.value = !1;
    So(), !W.value && ke(() => {
      _o(C);
    });
  }, Vs = (C = [], j) => dt(j) ? -1 : Ye(j.value) ? C.findIndex((ue) => Qn(Gt(ue, e.valueKey), ko(j))) : C.indexOf(j.value), _o = (C) => {
    var j, ue, Me, Qe, fn;
    const Dt = je(C) ? C[0] : C;
    let Co = null;
    if (Dt?.value) {
      const Vn = me.value.filter((Pu) => Pu.value === Dt.value);
      Vn.length > 0 && (Co = Vn[0].$el);
    }
    if (c.value && Co) {
      const Vn = (Qe = (Me = (ue = (j = c.value) == null ? void 0 : j.popperRef) == null ? void 0 : ue.contentRef) == null ? void 0 : Me.querySelector) == null ? void 0 : Qe.call(Me, `.${a.be("dropdown", "wrap")}`);
      Vn && Dm(Vn, Co);
    }
    (fn = g.value) == null || fn.handleScroll();
  }, du = (C) => {
    s.options.set(C.value, C), s.cachedOptions.set(C.value, C);
  }, fu = (C, j) => {
    s.options.get(C) === j && s.options.delete(C);
  }, pu = b(() => {
    var C, j;
    return (j = (C = c.value) == null ? void 0 : C.popperRef) == null ? void 0 : j.contentRef;
  }), mu = () => {
    s.isBeforeHide = !1, ke(() => {
      var C;
      (C = g.value) == null || C.update(), _o(s.selected);
    });
  }, So = () => {
    var C;
    (C = f.value) == null || C.focus();
  }, hu = () => {
    var C;
    if (W.value) {
      W.value = !1, ke(() => {
        var j;
        return (j = f.value) == null ? void 0 : j.blur();
      });
      return;
    }
    (C = f.value) == null || C.blur();
  }, vu = (C) => {
    Fs(C);
  }, gu = (C) => {
    if (W.value = !1, x.value) {
      const j = new FocusEvent("focus", C);
      ke(() => G(j));
    }
  }, yu = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : W.value = !1;
  }, Ds = () => {
    F.value || (Va && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : W.value = !W.value);
  }, bu = () => {
    if (!W.value)
      Ds();
    else {
      const C = me.value[s.hoveringIndex];
      C && !C.isDisabled && Bs(C);
    }
  }, ko = (C) => Ye(C.value) ? Gt(C.value, e.valueKey) : C.value, wu = b(() => me.value.filter((C) => C.visible).every((C) => C.isDisabled)), _u = b(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Su = b(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Hs = (C) => {
    if (!W.value) {
      W.value = !0;
      return;
    }
    if (!(s.options.size === 0 || ae.value === 0 || I.value) && !wu.value) {
      C === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : C === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const j = me.value[s.hoveringIndex];
      (j.isDisabled || !j.visible) && Hs(C), ke(() => _o(Q.value));
    }
  }, ku = () => {
    if (!u.value)
      return 0;
    const C = window.getComputedStyle(u.value);
    return Number.parseFloat(C.gap || "6px");
  }, Cu = b(() => {
    const C = ku();
    return { maxWidth: `${k.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - C : s.selectionWidth}px` };
  }), Tu = b(() => ({ maxWidth: `${s.selectionWidth}px` })), Eu = (C) => {
    t("popup-scroll", C);
  };
  return bt(u, Qt), bt(m, fe), bt($, fe), bt(v, ot), bt(k, D), Pe(() => {
    Ge();
  }), {
    inputId: z,
    contentId: o,
    nsSelect: a,
    nsInput: r,
    states: s,
    isFocused: x,
    expanded: W,
    optionsArray: me,
    hoverOption: Q,
    selectSize: ne,
    filteredOptionsCount: ae,
    updateTooltip: fe,
    updateTagTooltip: ot,
    debouncedOnInputChange: Ns,
    onInput: Vt,
    deletePrevTag: uu,
    deleteTag: cu,
    deleteSelected: Fs,
    handleOptionSelect: Bs,
    scrollToOption: _o,
    hasModelValue: E,
    shouldShowPlaceholder: Ae,
    currentPlaceholder: Te,
    mouseEnterEventName: ce,
    needStatusIcon: ee,
    showClose: X,
    iconComponent: le,
    iconReverse: ve,
    validateState: be,
    validateIcon: J,
    showNewOption: B,
    updateOptions: oe,
    collapseTagSize: Le,
    setSelected: Ge,
    selectDisabled: F,
    emptyText: Ee,
    handleCompositionStart: S,
    handleCompositionUpdate: O,
    handleCompositionEnd: T,
    onOptionCreate: du,
    onOptionDestroy: fu,
    handleMenuEnter: mu,
    focus: So,
    blur: hu,
    handleClearClick: vu,
    handleClickOutside: gu,
    handleEsc: yu,
    toggleMenu: Ds,
    selectOption: bu,
    getValueKey: ko,
    navigateOptions: Hs,
    dropdownMenuVisible: De,
    showTagList: _u,
    collapseTagList: Su,
    popupScroll: Eu,
    tagStyle: Cu,
    collapseTagStyle: Tu,
    popperRef: pu,
    inputRef: f,
    tooltipRef: c,
    tagTooltipRef: d,
    prefixRef: h,
    suffixRef: p,
    selectRef: i,
    wrapperRef: $,
    selectionRef: u,
    scrollbarRef: g,
    menuRef: m,
    tagMenuRef: v,
    collapseItemRef: k
  };
};
var K0 = K({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = ye(ya);
    let o = [];
    return () => {
      var a, r;
      const s = (a = t.default) == null ? void 0 : a.call(t), i = [];
      function u(c) {
        je(c) && c.forEach((d) => {
          var f, h, p, m;
          const v = (f = d?.type || {}) == null ? void 0 : f.name;
          v === "ElOptionGroup" ? u(!Be(d.children) && !je(d.children) && Ie((h = d.children) == null ? void 0 : h.default) ? (p = d.children) == null ? void 0 : p.default() : d.children) : v === "ElOption" ? i.push((m = d.props) == null ? void 0 : m.value) : je(d.children) && u(d.children);
        });
      }
      return s.length && u((r = s[0]) == null ? void 0 : r.children), Qn(i, o) || (o = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const G0 = he({
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
  size: En,
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
    type: Pn,
    default: pa
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: Pn,
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
  ...el,
  ...un(["ariaLabel"])
}), oi = "ElSelect", Z0 = K({
  name: oi,
  componentName: oi,
  components: {
    ElSelectMenu: W0,
    ElOption: xs,
    ElOptions: K0,
    ElTag: P0,
    ElScrollbar: Jh,
    ElTooltip: Ls,
    ElIcon: He
  },
  directives: { ClickOutside: O0 },
  props: G0,
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
      ...Cn(e),
      modelValue: n
    }), a = U0(o, t), { calculatorRef: r, inputStyle: s } = F0();
    mt(ya, Mt({
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
function Y0(e, t, n, o, a, r) {
  const s = en("el-tag"), i = en("el-tooltip"), u = en("el-icon"), c = en("el-option"), d = en("el-options"), f = en("el-scrollbar"), h = en("el-select-menu"), p = ju("click-outside");
  return qe((_(), R("div", {
    ref: "selectRef",
    class: M([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [Wu(e.mouseEnterEventName)]: (m) => e.states.inputHovering = !0,
    onMouseleave: (m) => e.states.inputHovering = !1
  }, [
    N(i, {
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
          y("div", {
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
              se(e.$slots, "prefix")
            ], 2)) : H("v-if", !0),
            y("div", {
              ref: "selectionRef",
              class: M([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? se(e.$slots, "tag", { key: 0 }, () => [
                (_(!0), R($e, null, st(e.showTagList, (v) => (_(), R("div", {
                  key: e.getValueKey(v),
                  class: M(e.nsSelect.e("selected-item"))
                }, [
                  N(s, {
                    closable: !e.selectDisabled && !v.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: we(e.tagStyle),
                    onClose: (k) => e.deleteTag(k, v)
                  }, {
                    default: Z(() => [
                      y("span", {
                        class: M(e.nsSelect.e("tags-text"))
                      }, [
                        se(e.$slots, "label", {
                          label: v.currentLabel,
                          value: v.value
                        }, () => [
                          nn(U(v.currentLabel), 1)
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
                    y("div", {
                      ref: "collapseItemRef",
                      class: M(e.nsSelect.e("selected-item"))
                    }, [
                      N(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: we(e.collapseTagStyle)
                      }, {
                        default: Z(() => [
                          y("span", {
                            class: M(e.nsSelect.e("tags-text"))
                          }, " + " + U(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: Z(() => [
                    y("div", {
                      ref: "tagMenuRef",
                      class: M(e.nsSelect.e("selection"))
                    }, [
                      (_(!0), R($e, null, st(e.collapseTagList, (v) => (_(), R("div", {
                        key: e.getValueKey(v),
                        class: M(e.nsSelect.e("selected-item"))
                      }, [
                        N(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !v.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (k) => e.deleteTag(k, v)
                        }, {
                          default: Z(() => [
                            y("span", {
                              class: M(e.nsSelect.e("tags-text"))
                            }, [
                              se(e.$slots, "label", {
                                label: v.currentLabel,
                                value: v.value
                              }, () => [
                                nn(U(v.currentLabel), 1)
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
                class: M([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                qe(y("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (v) => e.states.inputValue = v,
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
                    Ot(Oe((v) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Ot(Oe((v) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
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
                  [Uu, e.states.inputValue]
                ]),
                e.filterable ? (_(), R("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: M(e.nsSelect.e("input-calculator")),
                  textContent: U(e.states.inputValue)
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
                e.hasModelValue ? se(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  y("span", null, U(e.currentPlaceholder), 1)
                ]) : (_(), R("span", { key: 1 }, U(e.currentPlaceholder), 1))
              ], 2)) : H("v-if", !0)
            ], 2),
            y("div", {
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
        N(h, { ref: "menuRef" }, {
          default: Z(() => [
            e.$slots.header ? (_(), R("div", {
              key: 0,
              class: M(e.nsSelect.be("dropdown", "header")),
              onClick: Oe(() => {
              }, ["stop"])
            }, [
              se(e.$slots, "header")
            ], 10, ["onClick"])) : H("v-if", !0),
            qe(N(f, {
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
                N(d, null, {
                  default: Z(() => [
                    se(e.$slots, "default")
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
              se(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (_(), R("div", {
              key: 2,
              class: M(e.nsSelect.be("dropdown", "empty"))
            }, [
              se(e.$slots, "empty", {}, () => [
                y("span", null, U(e.emptyText), 1)
              ])
            ], 2)) : H("v-if", !0),
            e.$slots.footer ? (_(), R("div", {
              key: 3,
              class: M(e.nsSelect.be("dropdown", "footer")),
              onClick: Oe(() => {
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
    [p, e.handleClickOutside, e.popperRef]
  ]);
}
var q0 = /* @__PURE__ */ _e(Z0, [["render", Y0], ["__file", "select.vue"]]);
const J0 = K({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Ce("select"), n = A(null), o = Ue(), a = A([]);
    mt(Fl, Mt({
      ...Cn(e)
    }));
    const r = b(() => a.value.some((c) => c.visible === !0)), s = (c) => {
      var d, f;
      return ((d = c.type) == null ? void 0 : d.name) === "ElOption" && !!((f = c.component) != null && f.proxy);
    }, i = (c) => {
      const d = Kt(c), f = [];
      return d.forEach((h) => {
        var p, m;
        s(h) ? f.push(h.component.proxy) : (p = h.children) != null && p.length ? f.push(...i(h.children)) : (m = h.component) != null && m.subTree && f.push(...i(h.component.subTree));
      }), f;
    }, u = () => {
      a.value = i(o.subTree);
    };
    return Pe(() => {
      u();
    }), Cm(n, u, {
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
function X0(e, t, n, o, a, r) {
  return qe((_(), R("ul", {
    ref: "groupRef",
    class: M(e.ns.be("group", "wrap"))
  }, [
    y("li", {
      class: M(e.ns.be("group", "title"))
    }, U(e.label), 3),
    y("li", null, [
      y("ul", {
        class: M(e.ns.b("group"))
      }, [
        se(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [At, e.visible]
  ]);
}
var Bl = /* @__PURE__ */ _e(J0, [["render", X0], ["__file", "option-group.vue"]]);
const Rs = nt(q0, {
  Option: xs,
  OptionGroup: Bl
}), As = ps(xs);
ps(Bl);
const Q0 = he({
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
}), ey = K({
  name: "ElProgress"
}), ty = /* @__PURE__ */ K({
  ...ey,
  props: Q0,
  setup(e) {
    const t = e, n = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    }, o = Ce("progress"), a = b(() => {
      const S = {
        width: `${t.percentage}%`,
        animationDuration: `${t.duration}s`
      }, O = I(t.percentage);
      return O.includes("gradient") ? S.background = O : S.backgroundColor = O, S;
    }), r = b(() => (t.strokeWidth / t.width * 100).toFixed(1)), s = b(() => ["circle", "dashboard"].includes(t.type) ? Number.parseInt(`${50 - Number.parseFloat(r.value) / 2}`, 10) : 0), i = b(() => {
      const S = s.value, O = t.type === "dashboard";
      return `
          M 50 50
          m 0 ${O ? "" : "-"}${S}
          a ${S} ${S} 0 1 1 0 ${O ? "-" : ""}${S * 2}
          a ${S} ${S} 0 1 1 0 ${O ? "" : "-"}${S * 2}
          `;
    }), u = b(() => 2 * Math.PI * s.value), c = b(() => t.type === "dashboard" ? 0.75 : 1), d = b(() => `${-1 * u.value * (1 - c.value) / 2}px`), f = b(() => ({
      strokeDasharray: `${u.value * c.value}px, ${u.value}px`,
      strokeDashoffset: d.value
    })), h = b(() => ({
      strokeDasharray: `${u.value * c.value * (t.percentage / 100)}px, ${u.value}px`,
      strokeDashoffset: d.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    })), p = b(() => {
      let S;
      return t.color ? S = I(t.percentage) : S = n[t.status] || n.default, S;
    }), m = b(() => t.status === "warning" ? il : t.type === "line" ? t.status === "success" ? rl : pa : t.status === "success" ? qm : co), v = b(() => t.type === "line" ? 12 + t.strokeWidth * 0.4 : t.width * 0.111111 + 2), k = b(() => t.format(t.percentage));
    function g(S) {
      const O = 100 / S.length;
      return S.map(($, x) => Be($) ? {
        color: $,
        percentage: (x + 1) * O
      } : $).sort(($, x) => $.percentage - x.percentage);
    }
    const I = (S) => {
      var O;
      const { color: T } = t;
      if (Ie(T))
        return T(S);
      if (Be(T))
        return T;
      {
        const $ = g(T);
        for (const x of $)
          if (x.percentage > S)
            return x.color;
        return (O = $[$.length - 1]) == null ? void 0 : O.color;
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
        y("div", {
          class: M(l(o).be("bar", "outer")),
          style: we({ height: `${S.strokeWidth}px` })
        }, [
          y("div", {
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
              se(S.$slots, "default", { percentage: S.percentage }, () => [
                y("span", null, U(l(k)), 1)
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
          y("path", {
            class: M(l(o).be("circle", "track")),
            d: l(i),
            stroke: `var(${l(o).cssVarName("fill-color-light")}, #e5e9f2)`,
            "stroke-linecap": S.strokeLinecap,
            "stroke-width": l(r),
            fill: "none",
            style: we(l(f))
          }, null, 14, ["d", "stroke", "stroke-linecap", "stroke-width"]),
          y("path", {
            class: M(l(o).be("circle", "path")),
            d: l(i),
            stroke: l(p),
            fill: "none",
            opacity: S.percentage ? 1 : 0,
            "stroke-linecap": S.strokeLinecap,
            "stroke-width": l(r),
            style: we(l(h))
          }, null, 14, ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"])
        ]))
      ], 6)),
      (S.showText || S.$slots.default) && !S.textInside ? (_(), R("div", {
        key: 2,
        class: M(l(o).e("text")),
        style: we({ fontSize: `${l(v)}px` })
      }, [
        se(S.$slots, "default", { percentage: S.percentage }, () => [
          S.status ? (_(), q(l(He), { key: 1 }, {
            default: Z(() => [
              (_(), q(at(l(m))))
            ]),
            _: 1
          })) : (_(), R("span", { key: 0 }, U(l(k)), 1))
        ])
      ], 6)) : H("v-if", !0)
    ], 10, ["aria-valuenow"]));
  }
});
var ny = /* @__PURE__ */ _e(ty, [["__file", "progress.vue"]]);
const oy = nt(ny), ay = he({
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
}), sy = he({
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
}), ry = K({
  name: "ElSkeletonItem"
}), iy = /* @__PURE__ */ K({
  ...ry,
  props: sy,
  setup(e) {
    const t = Ce("skeleton");
    return (n, o) => (_(), R("div", {
      class: M([l(t).e("item"), l(t).e(n.variant)])
    }, [
      n.variant === "image" ? (_(), q(l(dh), { key: 0 })) : H("v-if", !0)
    ], 2));
  }
});
var qo = /* @__PURE__ */ _e(iy, [["__file", "skeleton-item.vue"]]);
const ly = (e, t = 0) => {
  if (t === 0)
    return e;
  const n = Ye(t) && !!t.initVal, o = A(n);
  let a = null;
  const r = (i) => {
    if (dt(i)) {
      o.value = e.value;
      return;
    }
    a && clearTimeout(a), a = setTimeout(() => {
      o.value = e.value;
    }, i);
  }, s = (i) => {
    i === "leading" ? pe(t) ? r(t) : r(t.leading) : Ye(t) ? r(t.trailing) : o.value = !1;
  };
  return Pe(() => s("leading")), re(() => e.value, (i) => {
    s(i ? "leading" : "trailing");
  }), o;
}, uy = K({
  name: "ElSkeleton"
}), cy = /* @__PURE__ */ K({
  ...uy,
  props: ay,
  setup(e, { expose: t }) {
    const n = e, o = Ce("skeleton"), a = ly(wt(n, "loading"), n.throttle);
    return t({
      uiLoading: a
    }), (r, s) => l(a) ? (_(), R("div", Yt({
      key: 0,
      class: [l(o).b(), l(o).is("animated", r.animated)]
    }, r.$attrs), [
      (_(!0), R($e, null, st(r.count, (i) => (_(), R($e, { key: i }, [
        l(a) ? se(r.$slots, "template", { key: i }, () => [
          N(qo, {
            class: M(l(o).is("first")),
            variant: "p"
          }, null, 8, ["class"]),
          (_(!0), R($e, null, st(r.rows, (u) => (_(), q(qo, {
            key: u,
            class: M([
              l(o).e("paragraph"),
              l(o).is("last", u === r.rows && r.rows > 1)
            ]),
            variant: "p"
          }, null, 8, ["class"]))), 128))
        ]) : H("v-if", !0)
      ], 64))), 128))
    ], 16)) : se(r.$slots, "default", Ku(Yt({ key: 1 }, r.$attrs)));
  }
});
var dy = /* @__PURE__ */ _e(cy, [["__file", "skeleton.vue"]]);
const fy = nt(dy, {
  SkeletonItem: qo
});
ps(qo);
const Vl = Symbol("sliderContextKey"), py = he({
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
  size: En,
  inputSize: En,
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
}), Ea = (e) => pe(e) || je(e) && e.every(pe), my = {
  [xe]: Ea,
  [Rt]: Ea,
  [Jt]: Ea
}, hy = he({
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
}), vy = {
  [xe]: (e) => pe(e)
}, gy = (e, t, n) => {
  const o = A(), a = A(!1), r = b(() => t.value instanceof Function), s = b(() => r.value && t.value(e.modelValue) || e.modelValue), i = Ba(() => {
    n.value && (a.value = !0);
  }, 50), u = Ba(() => {
    n.value && (a.value = !1);
  }, 50);
  return {
    tooltip: o,
    tooltipVisible: a,
    formatValue: s,
    displayTooltip: i,
    hideTooltip: u
  };
}, yy = (e, t, n) => {
  const {
    disabled: o,
    min: a,
    max: r,
    step: s,
    showTooltip: i,
    persistent: u,
    precision: c,
    sliderSize: d,
    formatTooltip: f,
    emitChange: h,
    resetSize: p,
    updateDragging: m
  } = ye(Vl), { tooltip: v, tooltipVisible: k, formatValue: g, displayTooltip: I, hideTooltip: S } = gy(e, f, i), O = A(), T = b(() => `${(e.modelValue - a.value) / (r.value - a.value) * 100}%`), $ = b(() => e.vertical ? { bottom: T.value } : { left: T.value }), x = () => {
    t.hovering = !0, I();
  }, G = () => {
    t.hovering = !1, t.dragging || S();
  }, W = (J) => {
    o.value || (J.preventDefault(), X(J), window.addEventListener("mousemove", le), window.addEventListener("touchmove", le), window.addEventListener("mouseup", ve), window.addEventListener("touchend", ve), window.addEventListener("contextmenu", ve), O.value.focus());
  }, Q = (J) => {
    o.value || (t.newPosition = Number.parseFloat(T.value) + J / (r.value - a.value) * 100, be(t.newPosition), h());
  }, ie = () => {
    Q(-s.value);
  }, w = () => {
    Q(s.value);
  }, z = () => {
    Q(-s.value * 4);
  }, Y = () => {
    Q(s.value * 4);
  }, P = () => {
    o.value || (be(0), h());
  }, F = () => {
    o.value || (be(100), h());
  }, E = (J) => {
    let de = !0;
    switch (J.code) {
      case Ne.left:
      case Ne.down:
        ie();
        break;
      case Ne.right:
      case Ne.up:
        w();
        break;
      case Ne.home:
        P();
        break;
      case Ne.end:
        F();
        break;
      case Ne.pageDown:
        z();
        break;
      case Ne.pageUp:
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
      t.isClick = !1, I(), p();
      let de;
      const { clientX: ge, clientY: Ee } = ee(J);
      e.vertical ? (t.currentY = Ee, de = (t.startY - t.currentY) / d.value * 100) : (t.currentX = ge, de = (t.currentX - t.startX) / d.value * 100), t.newPosition = t.startPosition + de, be(t.newPosition);
    }
  }, ve = () => {
    t.dragging && (setTimeout(() => {
      t.dragging = !1, t.hovering || S(), t.isClick || be(t.newPosition), h();
    }, 0), window.removeEventListener("mousemove", le), window.removeEventListener("touchmove", le), window.removeEventListener("mouseup", ve), window.removeEventListener("touchend", ve), window.removeEventListener("contextmenu", ve));
  }, be = async (J) => {
    if (J === null || Number.isNaN(+J))
      return;
    J < 0 ? J = 0 : J > 100 && (J = 100);
    const de = 100 / ((r.value - a.value) / s.value);
    let Ee = Math.round(J / de) * de * (r.value - a.value) * 0.01 + a.value;
    Ee = Number.parseFloat(Ee.toFixed(c.value)), Ee !== e.modelValue && n(xe, Ee), !t.dragging && e.modelValue !== t.oldValue && (t.oldValue = e.modelValue), await ke(), t.dragging && I(), v.value.updatePopper();
  };
  return re(() => t.dragging, (J) => {
    m(J);
  }), We(O, "touchstart", W, { passive: !1 }), {
    disabled: o,
    button: O,
    tooltip: v,
    tooltipVisible: k,
    showTooltip: i,
    persistent: u,
    wrapperStyle: $,
    formatValue: g,
    handleMouseEnter: x,
    handleMouseLeave: G,
    onButtonDown: W,
    onKeyDown: E,
    setPosition: be
  };
}, by = K({
  name: "ElSliderButton"
}), wy = /* @__PURE__ */ K({
  ...by,
  props: hy,
  emits: vy,
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
    }), s = b(() => d.value ? f.value : !1), {
      disabled: i,
      button: u,
      tooltip: c,
      showTooltip: d,
      persistent: f,
      tooltipVisible: h,
      wrapperStyle: p,
      formatValue: m,
      handleMouseEnter: v,
      handleMouseLeave: k,
      onButtonDown: g,
      onKeyDown: I,
      setPosition: S
    } = yy(o, r, n), { hovering: O, dragging: T } = Cn(r);
    return t({
      onButtonDown: g,
      onKeyDown: I,
      setPosition: S,
      hovering: O,
      dragging: T
    }), ($, x) => (_(), R("div", {
      ref_key: "button",
      ref: u,
      class: M([l(a).e("button-wrapper"), { hover: l(O), dragging: l(T) }]),
      style: we(l(p)),
      tabindex: l(i) ? -1 : 0,
      onMouseenter: l(v),
      onMouseleave: l(k),
      onMousedown: l(g),
      onFocus: l(v),
      onBlur: l(k),
      onKeydown: l(I)
    }, [
      N(l(Ls), {
        ref_key: "tooltip",
        ref: c,
        visible: l(h),
        placement: $.placement,
        "fallback-placements": ["top", "bottom", "right", "left"],
        "stop-popper-mouse-event": !1,
        "popper-class": $.tooltipClass,
        disabled: !l(d),
        persistent: l(s)
      }, {
        content: Z(() => [
          y("span", null, U(l(m)), 1)
        ]),
        default: Z(() => [
          y("div", {
            class: M([l(a).e("button"), { hover: l(O), dragging: l(T) }])
          }, null, 2)
        ]),
        _: 1
      }, 8, ["visible", "placement", "popper-class", "disabled", "persistent"])
    ], 46, ["tabindex", "onMouseenter", "onMouseleave", "onMousedown", "onFocus", "onBlur", "onKeydown"]));
  }
});
var ai = /* @__PURE__ */ _e(wy, [["__file", "button.vue"]]);
const _y = he({
  mark: {
    type: te([String, Object]),
    default: void 0
  }
});
var Sy = K({
  name: "ElSliderMarker",
  props: _y,
  setup(e) {
    const t = Ce("slider"), n = b(() => Be(e.mark) ? e.mark : e.mark.label), o = b(() => Be(e.mark) ? void 0 : e.mark.style);
    return () => Ti("div", {
      class: t.e("marks-text"),
      style: o.value
    }, n.value);
  }
});
const ky = (e, t, n) => {
  const { form: o, formItem: a } = ha(), r = Zt(), s = A(), i = A(), u = {
    firstButton: s,
    secondButton: i
  }, c = b(() => e.disabled || o?.disabled || !1), d = b(() => Math.min(t.firstValue, t.secondValue)), f = b(() => Math.max(t.firstValue, t.secondValue)), h = b(() => e.range ? `${100 * (f.value - d.value) / (e.max - e.min)}%` : `${100 * (t.firstValue - e.min) / (e.max - e.min)}%`), p = b(() => e.range ? `${100 * (d.value - e.min) / (e.max - e.min)}%` : "0%"), m = b(() => e.vertical ? { height: e.height } : {}), v = b(() => e.vertical ? {
    height: h.value,
    bottom: p.value
  } : {
    width: h.value,
    left: p.value
  }), k = () => {
    r.value && (t.sliderSize = r.value[`client${e.vertical ? "Height" : "Width"}`]);
  }, g = (w) => {
    const z = e.min + w * (e.max - e.min) / 100;
    if (!e.range)
      return s;
    let Y;
    return Math.abs(d.value - z) < Math.abs(f.value - z) ? Y = t.firstValue < t.secondValue ? "firstButton" : "secondButton" : Y = t.firstValue > t.secondValue ? "firstButton" : "secondButton", u[Y];
  }, I = (w) => {
    const z = g(w);
    return z.value.setPosition(w), z;
  }, S = (w) => {
    t.firstValue = w ?? e.min, T(e.range ? [d.value, f.value] : w ?? e.min);
  }, O = (w) => {
    t.secondValue = w, e.range && T([d.value, f.value]);
  }, T = (w) => {
    n(xe, w), n(Rt, w);
  }, $ = async () => {
    await ke(), n(Jt, e.range ? [d.value, f.value] : e.modelValue);
  }, x = (w) => {
    var z, Y, P, F, E, ee;
    if (c.value || t.dragging)
      return;
    k();
    let X = 0;
    if (e.vertical) {
      const le = (P = (Y = (z = w.touches) == null ? void 0 : z.item(0)) == null ? void 0 : Y.clientY) != null ? P : w.clientY;
      X = (r.value.getBoundingClientRect().bottom - le) / t.sliderSize * 100;
    } else {
      const le = (ee = (E = (F = w.touches) == null ? void 0 : F.item(0)) == null ? void 0 : E.clientX) != null ? ee : w.clientX, ve = r.value.getBoundingClientRect().left;
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
    maxValue: f,
    runwayStyle: m,
    barStyle: v,
    resetSize: k,
    setPosition: I,
    emitChange: $,
    onSliderWrapperPrevent: (w) => {
      var z, Y;
      ((z = u.firstButton.value) != null && z.dragging || (Y = u.secondButton.value) != null && Y.dragging) && w.preventDefault();
    },
    onSliderClick: (w) => {
      x(w) && $();
    },
    onSliderDown: async (w) => {
      const z = x(w);
      z && (await ke(), z.value.onButtonDown(w));
    },
    onSliderMarkerDown: (w) => {
      c.value || t.dragging || I(w);
    },
    setFirstValue: S,
    setSecondValue: O
  };
}, Cy = (e, t, n, o) => ({
  stops: b(() => {
    if (!e.showStops || e.min > e.max)
      return [];
    if (e.step === 0)
      return [];
    const s = (e.max - e.min) / e.step, i = 100 * e.step / (e.max - e.min), u = Array.from({ length: s - 1 }).map((c, d) => (d + 1) * i);
    return e.range ? u.filter((c) => c < 100 * (n.value - e.min) / (e.max - e.min) || c > 100 * (o.value - e.min) / (e.max - e.min)) : u.filter((c) => c > 100 * (t.firstValue - e.min) / (e.max - e.min));
  }),
  getStopStyle: (s) => e.vertical ? { bottom: `${s}%` } : { left: `${s}%` }
}), Ty = (e) => b(() => e.marks ? Object.keys(e.marks).map(Number.parseFloat).sort((n, o) => n - o).filter((n) => n <= e.max && n >= e.min).map((n) => ({
  point: n,
  position: (n - e.min) * 100 / (e.max - e.min),
  mark: e.marks[n]
})) : []), Ey = (e, t, n, o, a, r) => {
  const s = (c) => {
    a(xe, c), a(Rt, c);
  }, i = () => e.range ? ![n.value, o.value].every((c, d) => c === t.oldValue[d]) : e.modelValue !== t.oldValue, u = () => {
    var c, d;
    e.min > e.max && fs("Slider", "min should not be greater than max.");
    const f = e.modelValue;
    e.range && je(f) ? f[1] < e.min ? s([e.min, e.min]) : f[0] > e.max ? s([e.max, e.max]) : f[0] < e.min ? s([e.min, f[1]]) : f[1] > e.max ? s([f[0], e.max]) : (t.firstValue = f[0], t.secondValue = f[1], i() && (e.validateEvent && ((c = r?.validate) == null || c.call(r, "change").catch((h) => void 0)), t.oldValue = f.slice())) : !e.range && pe(f) && !Number.isNaN(f) && (f < e.min ? s(e.min) : f > e.max ? s(e.max) : (t.firstValue = f, i() && (e.validateEvent && ((d = r?.validate) == null || d.call(r, "change").catch((h) => void 0)), t.oldValue = f)));
  };
  u(), re(() => t.dragging, (c) => {
    c || u();
  }), re(() => e.modelValue, (c, d) => {
    t.dragging || je(c) && je(d) && c.every((f, h) => f === d[h]) && t.firstValue === c[0] && t.secondValue === c[1] || u();
  }, {
    deep: !0
  }), re(() => [e.min, e.max], () => {
    u();
  });
}, Py = (e, t, n) => {
  const o = A();
  return Pe(async () => {
    e.range ? (je(e.modelValue) ? (t.firstValue = Math.max(e.min, e.modelValue[0]), t.secondValue = Math.min(e.max, e.modelValue[1])) : (t.firstValue = e.min, t.secondValue = e.max), t.oldValue = [t.firstValue, t.secondValue]) : (!pe(e.modelValue) || Number.isNaN(e.modelValue) ? t.firstValue = e.min : t.firstValue = Math.min(e.max, Math.max(e.min, e.modelValue)), t.oldValue = t.firstValue), We(window, "resize", n), await ke(), n();
  }), {
    sliderWrapper: o
  };
}, Oy = K({
  name: "ElSlider"
}), $y = /* @__PURE__ */ K({
  ...Oy,
  props: py,
  emits: my,
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
      sliderDisabled: f,
      minValue: h,
      maxValue: p,
      runwayStyle: m,
      barStyle: v,
      resetSize: k,
      emitChange: g,
      onSliderWrapperPrevent: I,
      onSliderClick: S,
      onSliderDown: O,
      onSliderMarkerDown: T,
      setFirstValue: $,
      setSecondValue: x
    } = ky(o, s, n), { stops: G, getStopStyle: W } = Cy(o, s, h, p), { inputId: Q, isLabeledByFormItem: ie } = hs(o, {
      formItemContext: i
    }), w = go(), z = b(() => o.inputSize || w.value), Y = b(() => o.ariaLabel || r("el.slider.defaultLabel", {
      min: o.min,
      max: o.max
    })), P = b(() => o.range ? o.rangeStartLabel || r("el.slider.defaultRangeStartLabel") : Y.value), F = b(() => o.formatValueText ? o.formatValueText(J.value) : `${J.value}`), E = b(() => o.rangeEndLabel || r("el.slider.defaultRangeEndLabel")), ee = b(() => o.formatValueText ? o.formatValueText(de.value) : `${de.value}`), X = b(() => [
      a.b(),
      a.m(w.value),
      a.is("vertical", o.vertical),
      { [a.m("with-input")]: o.showInput }
    ]), le = Ty(o);
    Ey(o, s, h, p, n, i);
    const ve = b(() => {
      const ae = [o.min, o.max, o.step].map((me) => {
        const Fe = `${me}`.split(".")[1];
        return Fe ? Fe.length : 0;
      });
      return Math.max.apply(null, ae);
    }), { sliderWrapper: be } = Py(o, s, k), { firstValue: J, secondValue: de, sliderSize: ge } = Cn(s), Ee = (ae) => {
      s.dragging = ae;
    };
    return We(be, "touchstart", I, {
      passive: !1
    }), We(be, "touchmove", I, {
      passive: !1
    }), mt(Vl, {
      ...Cn(o),
      sliderSize: ge,
      disabled: f,
      precision: ve,
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
        y("div", {
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
          y("div", {
            class: M(l(a).e("bar")),
            style: we(l(v))
          }, null, 6),
          N(ai, {
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
            "aria-valuetext": l(F),
            "aria-orientation": ae.vertical ? "vertical" : "horizontal",
            "aria-disabled": l(f),
            "onUpdate:modelValue": l($)
          }, null, 8, ["id", "model-value", "vertical", "tooltip-class", "placement", "aria-label", "aria-labelledby", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-orientation", "aria-disabled", "onUpdate:modelValue"]),
          ae.range ? (_(), q(ai, {
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
            (_(!0), R($e, null, st(l(G), (oe, ne) => (_(), R("div", {
              key: ne,
              class: M(l(a).e("stop")),
              style: we(l(W)(oe))
            }, null, 6))), 128))
          ])) : H("v-if", !0),
          l(le).length > 0 ? (_(), R($e, { key: 2 }, [
            y("div", null, [
              (_(!0), R($e, null, st(l(le), (oe, ne) => (_(), R("div", {
                key: ne,
                style: we(l(W)(oe.position)),
                class: M([l(a).e("stop"), l(a).e("marks-stop")])
              }, null, 6))), 128))
            ]),
            y("div", {
              class: M(l(a).e("marks"))
            }, [
              (_(!0), R($e, null, st(l(le), (oe, ne) => (_(), q(l(Sy), {
                key: ne,
                mark: oe.mark,
                style: we(l(W)(oe.position)),
                onMousedown: Oe((Le) => l(T)(oe.position), ["stop"])
              }, null, 8, ["mark", "style", "onMousedown"]))), 128))
            ], 2)
          ], 64)) : H("v-if", !0)
        ], 46, ["onMousedown", "onTouchstartPassive"]),
        ae.showInput && !ae.range ? (_(), q(l(N0), {
          key: 0,
          ref: "input",
          "model-value": l(J),
          class: M(l(a).e("input")),
          step: ae.step,
          disabled: l(f),
          controls: ae.showInputControls,
          min: ae.min,
          max: ae.max,
          precision: l(ve),
          debounce: ae.debounce,
          size: l(z),
          "onUpdate:modelValue": l($),
          onChange: l(g)
        }, null, 8, ["model-value", "class", "step", "disabled", "controls", "min", "max", "precision", "debounce", "size", "onUpdate:modelValue", "onChange"])) : H("v-if", !0)
      ], 10, ["id", "role", "aria-label", "aria-labelledby"]);
    };
  }
});
var Iy = /* @__PURE__ */ _e($y, [["__file", "slider.vue"]]);
const Ly = nt(Iy), Dl = ["success", "info", "warning", "error"], Ve = cl({
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
}), xy = he({
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
    type: Pn,
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
}), Ry = {
  destroy: () => !0
}, ft = Gu([]), Ay = (e) => {
  const t = ft.findIndex((a) => a.id === e), n = ft[t];
  let o;
  return t > 0 && (o = ft[t - 1]), { current: n, prev: o };
}, My = (e) => {
  const { prev: t } = Ay(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, zy = (e, t) => ft.findIndex((o) => o.id === e) > 0 ? 16 : t, Ny = K({
  name: "ElMessage"
}), Fy = /* @__PURE__ */ K({
  ...Ny,
  props: xy,
  emits: Ry,
  setup(e, { expose: t }) {
    const n = e, { Close: o } = wh, { ns: a, zIndex: r } = nl("message"), { currentZIndex: s, nextZIndex: i } = r, u = A(), c = A(!1), d = A(0);
    let f;
    const h = b(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), p = b(() => {
      const x = n.type;
      return { [a.bm("icon", x)]: x && Go[x] };
    }), m = b(() => n.icon || Go[n.type] || ""), v = b(() => My(n.id)), k = b(() => zy(n.id, n.offset) + v.value), g = b(() => d.value + k.value), I = b(() => ({
      top: `${k.value}px`,
      zIndex: s.value
    }));
    function S() {
      n.duration !== 0 && ({ stop: f } = Wi(() => {
        T();
      }, n.duration));
    }
    function O() {
      f?.();
    }
    function T() {
      c.value = !1;
    }
    function $({ code: x }) {
      x === Ne.esc && T();
    }
    return Pe(() => {
      S(), i(), c.value = !0;
    }), re(() => n.repeatNum, () => {
      O(), S();
    }), We(document, "keydown", $), bt(u, () => {
      d.value = u.value.getBoundingClientRect().height;
    }), t({
      visible: c,
      bottom: g,
      close: T
    }), (x, G) => (_(), q(Mn, {
      name: l(a).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (W) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: Z(() => [
        qe(y("div", {
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
          style: we(l(I)),
          role: "alert",
          onMouseenter: O,
          onMouseleave: S
        }, [
          x.repeatNum > 1 ? (_(), q(l(_0), {
            key: 0,
            value: x.repeatNum,
            type: l(h),
            class: M(l(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : H("v-if", !0),
          l(m) ? (_(), q(l(He), {
            key: 1,
            class: M([l(a).e("icon"), l(p)])
          }, {
            default: Z(() => [
              (_(), q(at(l(m))))
            ]),
            _: 1
          }, 8, ["class"])) : H("v-if", !0),
          se(x.$slots, "default", {}, () => [
            x.dangerouslyUseHTMLString ? (_(), R($e, { key: 1 }, [
              H(" Caution here, message could've been compromised, never use user's input as message "),
              y("p", {
                class: M(l(a).e("content")),
                innerHTML: x.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (_(), R("p", {
              key: 0,
              class: M(l(a).e("content"))
            }, U(x.message), 3))
          ]),
          x.showClose ? (_(), q(l(He), {
            key: 2,
            class: M(l(a).e("closeBtn")),
            onClick: Oe(T, ["stop"])
          }, {
            default: Z(() => [
              N(l(o))
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
var By = /* @__PURE__ */ _e(Fy, [["__file", "message.vue"]]);
let Vy = 1;
const Hl = (e) => {
  const t = !e || Be(e) || so(e) || Ie(e) ? { message: e } : e, n = {
    ...Ve,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Be(n.appendTo)) {
    let o = document.querySelector(n.appendTo);
    pt(o) || (o = document.body), n.appendTo = o;
  }
  return Uo(ct.grouping) && !n.grouping && (n.grouping = ct.grouping), pe(ct.duration) && n.duration === 3e3 && (n.duration = ct.duration), pe(ct.offset) && n.offset === 16 && (n.offset = ct.offset), Uo(ct.showClose) && !n.showClose && (n.showClose = ct.showClose), n;
}, Dy = (e) => {
  const t = ft.indexOf(e);
  if (t === -1)
    return;
  ft.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, Hy = ({ appendTo: e, ...t }, n) => {
  const o = `message_${Vy++}`, a = t.onClose, r = document.createElement("div"), s = {
    ...t,
    id: o,
    onClose: () => {
      a?.(), Dy(d);
    },
    onDestroy: () => {
      Do(null, r);
    }
  }, i = N(By, s, Ie(s.message) || so(s.message) ? {
    default: Ie(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || xn._context, Do(i, r), e.appendChild(r.firstElementChild);
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
}, xn = (e = {}, t) => {
  if (!Re)
    return { close: () => {
    } };
  const n = Hl(e);
  if (n.grouping && ft.length) {
    const a = ft.find(({ vnode: r }) => {
      var s;
      return ((s = r.props) == null ? void 0 : s.message) === n.message;
    });
    if (a)
      return a.props.repeatNum += 1, a.props.type = n.type, a.handler;
  }
  if (pe(ct.max) && ft.length >= ct.max)
    return { close: () => {
    } };
  const o = Hy(n, t);
  return ft.push(o), o.handler;
};
Dl.forEach((e) => {
  xn[e] = (t = {}, n) => {
    const o = Hl(t);
    return xn({ ...o, type: e }, n);
  };
});
function jy(e) {
  for (const t of ft)
    (!e || e === t.props.type) && t.handler.close();
}
xn.closeAll = jy;
xn._context = null;
const Wy = al(xn, "$message"), jl = [
  "success",
  "info",
  "warning",
  "error"
], Uy = he({
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
    type: Pn
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
}), Ky = {
  destroy: () => !0
}, Gy = K({
  name: "ElNotification"
}), Zy = /* @__PURE__ */ K({
  ...Gy,
  props: Uy,
  emits: Ky,
  setup(e, { expose: t }) {
    const n = e, { ns: o, zIndex: a } = nl("notification"), { nextZIndex: r, currentZIndex: s } = a, { Close: i } = bh, u = A(!1);
    let c;
    const d = b(() => {
      const S = n.type;
      return S && Go[n.type] ? o.m(S) : "";
    }), f = b(() => n.type && Go[n.type] || n.icon), h = b(() => n.position.endsWith("right") ? "right" : "left"), p = b(() => n.position.startsWith("top") ? "top" : "bottom"), m = b(() => {
      var S;
      return {
        [p.value]: `${n.offset}px`,
        zIndex: (S = n.zIndex) != null ? S : s.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: c } = Wi(() => {
        u.value && g();
      }, n.duration));
    }
    function k() {
      c?.();
    }
    function g() {
      u.value = !1;
    }
    function I({ code: S }) {
      S === Ne.delete || S === Ne.backspace ? k() : S === Ne.esc ? u.value && g() : v();
    }
    return Pe(() => {
      v(), r(), u.value = !0;
    }), We(document, "keydown", I), t({
      visible: u,
      close: g
    }), (S, O) => (_(), q(Mn, {
      name: l(o).b("fade"),
      onBeforeLeave: S.onClose,
      onAfterLeave: (T) => S.$emit("destroy"),
      persisted: ""
    }, {
      default: Z(() => [
        qe(y("div", {
          id: S.id,
          class: M([l(o).b(), S.customClass, l(h)]),
          style: we(l(m)),
          role: "alert",
          onMouseenter: k,
          onMouseleave: v,
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
          y("div", {
            class: M(l(o).e("group"))
          }, [
            y("h2", {
              class: M(l(o).e("title")),
              textContent: U(S.title)
            }, null, 10, ["textContent"]),
            qe(y("div", {
              class: M(l(o).e("content")),
              style: we(S.title ? void 0 : { margin: 0 })
            }, [
              se(S.$slots, "default", {}, () => [
                S.dangerouslyUseHTMLString ? (_(), R($e, { key: 1 }, [
                  H(" Caution here, message could've been compromised, never use user's input as message "),
                  y("p", { innerHTML: S.message }, null, 8, ["innerHTML"])
                ], 2112)) : (_(), R("p", { key: 0 }, U(S.message), 1))
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
                N(l(i))
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
var Yy = /* @__PURE__ */ _e(Zy, [["__file", "notification.vue"]]);
const Jo = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Ua = 16;
let qy = 1;
const Rn = function(e = {}, t) {
  if (!Re)
    return { close: () => {
    } };
  (Be(e) || so(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let o = e.offset || 0;
  Jo[n].forEach(({ vm: d }) => {
    var f;
    o += (((f = d.el) == null ? void 0 : f.offsetHeight) || 0) + Ua;
  }), o += Ua;
  const a = `notification_${qy++}`, r = e.onClose, s = {
    ...e,
    offset: o,
    id: a,
    onClose: () => {
      Jy(a, n, r);
    }
  };
  let i = document.body;
  pt(e.appendTo) ? i = e.appendTo : Be(e.appendTo) && (i = document.querySelector(e.appendTo)), pt(i) || (i = document.body);
  const u = document.createElement("div"), c = N(Yy, s, Ie(s.message) ? s.message : so(s.message) ? () => s.message : null);
  return c.appContext = dt(t) ? Rn._context : t, c.props.onDestroy = () => {
    Do(null, u);
  }, Do(c, u), Jo[n].push({ vm: c }), i.appendChild(u.firstElementChild), {
    close: () => {
      c.component.exposed.visible.value = !1;
    }
  };
};
jl.forEach((e) => {
  Rn[e] = (t = {}, n) => ((Be(t) || so(t)) && (t = {
    message: t
  }), Rn({ ...t, type: e }, n));
});
function Jy(e, t, n) {
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
      const { el: d, component: f } = o[c].vm, h = Number.parseInt(d.style[i], 10) - s - Ua;
      f.props.offset = h;
    }
}
function Xy() {
  for (const e of Object.values(Jo))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Rn.closeAll = Xy;
Rn._context = null;
const Qy = al(Rn, "$notify");
function eb(e, t, n, o) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return n === "m" ? o : n === "a" ? o.call(e) : o ? o.value : t.get(e);
}
function tb(e, t, n, o, a) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var zo;
const ut = "__TAURI_TO_IPC_KEY__";
function nb(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function L(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
function Wl(e, t = "asset") {
  return window.__TAURI_INTERNALS__.convertFileSrc(e, t);
}
class ob {
  get rid() {
    return eb(this, zo, "f");
  }
  constructor(t) {
    zo.set(this, void 0), tb(this, zo, t);
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
zo = /* @__PURE__ */ new WeakMap();
var et;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(et || (et = {}));
async function Ul(e, t) {
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
    handler: nb(t)
  }).then((r) => async () => Ul(e, r));
}
async function ab(e, t, n) {
  return yt(e, (o) => {
    Ul(e, o.id), t(o);
  }, n);
}
async function Kl(e, t) {
  await L("plugin:event|emit", {
    event: e,
    payload: t
  });
}
async function sb(e, t, n) {
  await L("plugin:event|emit_to", {
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
class hn {
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
class Io {
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
class oo extends ob {
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
    return L("plugin:image|from_bytes", {
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
    return L("plugin:image|from_path", { path: t }).then((n) => new oo(n));
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
function Xo(e) {
  return e == null ? null : typeof e == "string" ? e : e instanceof oo ? e.rid : e;
}
var Ka;
(function(e) {
  e[e.Critical = 1] = "Critical", e[e.Informational = 2] = "Informational";
})(Ka || (Ka = {}));
class rb {
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
var si;
(function(e) {
  e.None = "none", e.Normal = "normal", e.Indeterminate = "indeterminate", e.Paused = "paused", e.Error = "error";
})(si || (si = {}));
function Yl() {
  return new ql(window.__TAURI_INTERNALS__.metadata.currentWindow.label, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  });
}
async function Pa() {
  return L("plugin:window|get_all_windows").then((e) => e.map((t) => new ql(t, {
    // @ts-expect-error `skip` is not defined in the public API but it is handled by the constructor
    skip: !0
  })));
}
const Oa = ["tauri://created", "tauri://error"];
class ql {
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
    return (n = (await Pa()).find((o) => o.label === t)) !== null && n !== void 0 ? n : null;
  }
  /**
   * Get an instance of `Window` for the current window.
   */
  static getCurrent() {
    return Yl();
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
    } : ab(t, n, {
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
    return sb(t, n, o);
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
    return L("plugin:window|outer_size", {
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
    return t && (t === Ka.Critical ? n = { type: "Critical" } : n = { type: "Informational" }), L("plugin:window|request_user_attention", {
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
      value: t instanceof hn ? t : new hn(t)
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
      value: t instanceof hn ? t : t ? new hn(t) : null
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
      value: t instanceof hn ? t : t ? new hn(t) : null
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
      value: t instanceof Io ? t : new Io(t)
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
      value: t instanceof Io ? t : new Io(t)
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
      const o = new rb(n);
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
var ri;
(function(e) {
  e.Disabled = "disabled", e.Throttle = "throttle", e.Suspend = "suspend";
})(ri || (ri = {}));
var ii;
(function(e) {
  e.AppearanceBased = "appearanceBased", e.Light = "light", e.Dark = "dark", e.MediumLight = "mediumLight", e.UltraDark = "ultraDark", e.Titlebar = "titlebar", e.Selection = "selection", e.Menu = "menu", e.Popover = "popover", e.Sidebar = "sidebar", e.HeaderView = "headerView", e.Sheet = "sheet", e.WindowBackground = "windowBackground", e.HudWindow = "hudWindow", e.FullScreenUI = "fullScreenUI", e.Tooltip = "tooltip", e.ContentBackground = "contentBackground", e.UnderWindowBackground = "underWindowBackground", e.UnderPageBackground = "underPageBackground", e.Mica = "mica", e.Blur = "blur", e.Acrylic = "acrylic", e.Tabbed = "tabbed", e.TabbedDark = "tabbedDark", e.TabbedLight = "tabbedLight";
})(ii || (ii = {}));
var li;
(function(e) {
  e.FollowsWindowActiveState = "followsWindowActiveState", e.Active = "active", e.Inactive = "inactive";
})(li || (li = {}));
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
    o === "center" ? Wy({
      message: t,
      type: n,
      duration: a,
      showClose: r,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Qy({
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
}, ib = "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1680942651462'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='3789'%20data-darkreader-inline-fill=''%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M214.101333%20512c0-32.512%205.546667-63.701333%2015.36-92.928L57.173333%20290.218667A491.861333%20491.861333%200%200%200%204.693333%20512c0%2079.701333%2018.858667%20154.88%2052.394667%20221.610667l172.202667-129.066667A290.56%20290.56%200%200%201%20214.101333%20512'%20fill='%23FBBC05'%20p-id='3790'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23967002;'%3e%3c/path%3e%3cpath%20d='M516.693333%20216.192c72.106667%200%20137.258667%2025.002667%20188.458667%2065.962667L854.101333%20136.533333C763.349333%2059.178667%20646.997333%2011.392%20516.693333%2011.392c-202.325333%200-376.234667%20113.28-459.52%20278.826667l172.373334%20128.853333c39.68-118.016%20152.832-202.88%20287.146666-202.88'%20fill='%23EA4335'%20p-id='3791'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%23a71d11;'%3e%3c/path%3e%3cpath%20d='M516.693333%20807.808c-134.357333%200-247.509333-84.864-287.232-202.88l-172.288%20128.853333c83.242667%20165.546667%20257.152%20278.826667%20459.52%20278.826667%20124.842667%200%20244.053333-43.392%20333.568-124.757333l-163.584-123.818667c-46.122667%2028.458667-104.234667%2043.776-170.026666%2043.776'%20fill='%2334A853'%20p-id='3792'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%232a8642;'%3e%3c/path%3e%3cpath%20d='M1005.397333%20512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696%2065.962667-51.072%20116.650667-104.533333%20149.632l163.541333%20123.818667c93.994667-85.418667%20155.136-212.650667%20155.136-375.850667'%20fill='%234285F4'%20p-id='3793'%20data-darkreader-inline-fill=''%20style='--darkreader-inline-fill:%20%230943a2;'%3e%3c/path%3e%3c/svg%3e", lb = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20width='240px'%20height='240px'%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNla'%20x1='11.905'%20x2='17.941'%20y1='1.952'%20y2='40.401'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffc'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNla)'%20d='M17.572,37.076L20,35.619V10.603c0-1.632-0.796-3.161-2.133-4.096L12.36,2.652%20C11.366,1.956,10,2.667,10,3.881V32.5c0,0.22,0.02,0.555,0.033,0.772C10.369,36.867,14.382,38.99,17.572,37.076z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlb'%20x1='14.342'%20x2='34.121'%20y1='41.478'%20y2='25.575'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2333bef0'/%3e%3cstop%20offset='.159'%20stop-color='%2332b9f0'/%3e%3cstop%20offset='.341'%20stop-color='%232facf2'/%3e%3cstop%20offset='.533'%20stop-color='%232a95f4'/%3e%3cstop%20offset='.733'%20stop-color='%232475f6'/%3e%3cstop%20offset='.936'%20stop-color='%231b4cfa'/%3e%3cstop%20offset='1'%20stop-color='%23183efb'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlb)'%20d='M32.682,27.904L20,35.5v0l-2.428,1.457c-3.191,1.915-7.203-0.209-7.54-3.804%20C10.372,38.922,15.145,43.5,21,43.5c1.963,0,3.888-0.536,5.568-1.551l6.834-4.126c0.817-0.493,1.522-1.075,2.15-1.707%20C37.906,33.415,36.739,28.669,32.682,27.904z'/%3e%3clinearGradient%20id='ZkmZ8eVihrQTUnr9TZpNlc'%20x1='24.223'%20x2='45.699'%20y1='17.113'%20y2='38.588'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%233dbffd'/%3e%3cstop%20offset='1'%20stop-color='%231de9b6'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23ZkmZ8eVihrQTUnr9TZpNlc)'%20d='M33.636,19.568l-7.607-3.803c-1.234-0.617-2.576,0.618-2.064,1.899l1.755,5.886%20c0.499,1.248,1.479,2.242,2.719,2.758L32.5,28c4.057,0.766,5.352,5.251,3.052,8.117C40.399,31.24,40.088,22.794,33.636,19.568z'/%3e%3c/svg%3e", ub = "snippets-code:developer-mode", Jl = "snippets-code:frontend-diagnostics", cb = 240, jn = "[REDACTED]", No = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${jn}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${jn}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  jn
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${jn}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${jn}`
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
}, db = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, fb = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Jl) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Ms = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(ub) === "true";
  } catch {
    return !1;
  }
}, pb = (e, t, n) => {
  if (!Ms() || typeof localStorage > "u") return;
  const o = fb();
  o.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: db(),
    message: No(t),
    data: Xl(n)
  });
  try {
    localStorage.setItem(
      Jl,
      JSON.stringify(o.slice(-cb))
    );
  } catch {
  }
}, mb = () => Ms(), hb = (e) => e === "error" || Ms(), Lo = (e, t, n) => {
  pb(e, t, n), hb(e) && L("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Xl(n)
  }).catch(() => {
  });
}, V = {
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
    mb() && Lo("debug", e, t);
  }
};
function vb(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2");
}
function $a(e) {
  if (!e) return "unknown";
  const t = e.match(/[\u4e00-\u9fa5]/g), n = t ? t.length : 0, o = e.match(/[\u3040-\u30ff]/g), a = o ? o.length : 0, r = e.match(/[\uac00-\ud7af]/g), s = r ? r.length : 0, i = e.match(/[a-zA-Z]/g), u = i ? i.length : 0, d = n + a + s + u;
  return d === 0 ? "unknown" : a >= 3 && a > u && a / d >= 0.2 ? "ja" : s >= 3 && s > n && s > u && s / d >= 0.2 ? "ko" : n > u ? "zh" : u > n ? "en" : "unknown";
}
async function gb() {
  try {
    return await L("get_editor_settings");
  } catch (e) {
    throw new Error(`获取编辑器显示设置失败: ${e}`);
  }
}
async function yb(e) {
  try {
    await L("update_editor_settings", { settings: e });
  } catch (t) {
    throw new Error(`更新编辑器显示设置失败: ${t}`);
  }
}
const bb = mo("hotkeys", {
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
}), Wn = mo("theme", {
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
}), ui = 960, ci = 768;
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
      return e.categoryPanelCollapsed || e.windowWidth < ui;
    },
    /** 实际是否折叠片段列表面板：用户偏好 或 窗口过窄时强制折叠 */
    effectiveContentListCollapsed(e) {
      return e.contentListPanelCollapsed || e.windowWidth < ci;
    },
    /** 窗口是否足够宽以显示分类面板折叠按钮（点击后可实际展开） */
    isWideEnoughForCategoryPanel(e) {
      return e.windowWidth >= ui;
    },
    /** 窗口是否足够宽以显示片段列表面板折叠按钮 */
    isWideEnoughForContentListPanel(e) {
      return e.windowWidth >= ci;
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
const wb = "https://raw.githubusercontent.com/GigaPuddings/snippets-code-t/main/plugin-registry/marketplace/marketplace.json", _b = "https://ghfast.top/";
function Sb(e) {
  return e.startsWith("https://github.com/") ? `${_b}${e}` : e;
}
async function kb() {
  return await L("get_plugin_states");
}
async function Cb() {
  return await L("get_installed_plugin_manifests");
}
async function Tb(e, t = !1) {
  return await L("install_local_plugin_package", {
    sourcePath: e,
    overwrite: t
  });
}
async function Ql(e, t = !1, n, o, a) {
  return await L("install_plugin_package_from_url", {
    expectedSizeBytes: o,
    packageUrl: e,
    packageSubdir: n,
    overwrite: t,
    mirrorUrls: a ?? []
  });
}
const Eb = (e) => {
  try {
    const t = new URL(e);
    return t.searchParams.set("_sc_refresh", `${Date.now()}`), t.toString();
  } catch {
    return e;
  }
};
async function Pb(e) {
  return await L("fetch_plugin_marketplace", {
    marketplaceUrl: Eb(e)
  });
}
async function Ob(e) {
  await L("uninstall_local_plugin_package", { pluginId: e });
}
async function $b(e, t) {
  await L("set_plugin_enabled", { pluginId: e, enabled: t });
}
async function Ib() {
  return await L("get_rapidocr_resource_status");
}
async function Lb() {
  return await L("screen_recorder_get_ffmpeg_status");
}
async function zs(e, t) {
  return await L("get_local_plugin_resource_path", {
    pluginId: e,
    relativePath: t
  });
}
async function Ia() {
  await L("install_translation_offline_runtime_resources");
}
const xb = (e, t, n, o) => ({
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
}), Ut = (e) => typeof e == "object" && e !== null, Rb = (e) => Ut(e) && "manifest" in e && Ut(e.manifest) ? {
  manifest: e.manifest,
  packagePath: typeof e.packagePath == "string" ? e.packagePath : void 0,
  installedAt: typeof e.installedAt == "string" ? e.installedAt : void 0
} : { manifest: e }, Ab = (e) => typeof e == "string" && ["capture", "automation", "search", "sync", "editor", "appearance"].includes(e), Mb = (e) => {
  if (!Ut(e) || e.schemaVersion !== 1 || typeof e.id != "string" || !e.id.trim() || typeof e.version != "string" || !e.version.trim() || e.kind !== "local" || !Ut(e.name) || typeof e.name.i18nKey != "string" || typeof e.name.fallback != "string" || !Ut(e.description) || typeof e.description.i18nKey != "string" || typeof e.description.fallback != "string" || !Ab(e.category) || typeof e.enabledByDefault != "boolean") return null;
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
}, zb = (e) => e.map((t) => {
  const { manifest: n, packagePath: o, installedAt: a } = Rb(t), r = Mb(n);
  if (!r) return null;
  const s = {
    manifest: r,
    packagePath: o ?? ""
  };
  return a && (s.installedAt = a), s;
}).filter((t) => t !== null), eu = (e = []) => {
  const n = [
    ...zb(e).map((a) => xb(
      a.manifest,
      "local",
      a.packagePath || void 0,
      a.installedAt
    )).sort(Nb)
  ], o = /* @__PURE__ */ new Map();
  for (const a of n)
    o.has(a.id) || o.set(a.id, a);
  return Array.from(o.values());
}, di = (e) => {
  const t = e.installedAt ? Date.parse(e.installedAt) : NaN;
  return Number.isFinite(t) ? t : 0;
}, Nb = (e, t) => {
  const n = di(t) - di(e);
  return n !== 0 ? n : String(e.id).localeCompare(String(t.id));
}, Fb = eu(), Qo = Fb, Bb = Qo.map((e) => e.id), tu = Qo.reduce((e, t) => (e[t.id] = t.enabledByDefault, e), {}), Vb = (e) => Bb.includes(e);
async function Db() {
  return await L("local_ai_get_runtime_status");
}
const bn = [], wn = [
  { id: "attachment", labelKey: "settings.attachment.menu", icon: sc }
], Ga = {
  attachment: es(() => Promise.resolve().then(() => A_))
}, _n = [], Fo = [], Sn = [], nu = (e) => e.manifest.permissions ?? [], Hb = (e, t) => {
  const n = nu(e);
  return n.includes("command:*") || n.includes(`command:${t}`);
}, jb = (e, t) => {
  const n = nu(e);
  return n.includes("backend:*") || n.includes(`backend:${t}`);
}, Wb = (e, t) => {
  if (!Hb(e, t))
    throw new Error(`插件 ${e.id} 没有调用命令 ${t} 的权限`);
}, Ub = (e, t) => {
  if (!jb(e, t))
    throw new Error(`插件 ${e.id} 没有调用后端命令 ${t} 的权限`);
}, Za = [], Ya = [], qa = [], Bo = /* @__PURE__ */ new Set(), ea = /* @__PURE__ */ new Map(), ta = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map(), Kb = /* @__PURE__ */ new Set(), pi = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), na = /* @__PURE__ */ new Set(), oa = /* @__PURE__ */ new Set(), ba = (e) => e.replace(/^[\\/]+|[\\/]+$/g, ""), Gb = (e) => !!e && !e.includes("://") && !e.startsWith("/") && !/^[a-zA-Z]:[\\/]/.test(e) && !ba(e).split(/[\\/]+/).includes(".."), Zb = (e, t) => {
  if (!e.packagePath)
    throw new Error(`插件 ${e.id} 缺少 packagePath`);
  if (!Gb(t))
    throw new Error(
      `插件 ${e.id} 使用了不安全的资源路径: ${t}`
    );
  return `${e.packagePath.replace(/[\\/]+$/g, "")}/${ba(t)}`;
}, Fn = (e, t) => Wl(Zb(e, t)), Yb = (e) => {
  const t = ba(e).split(/[\\/]+/);
  return t.pop(), t.join("/");
}, ou = (e) => {
  const t = /^([^?#]*)([?#].*)?$/.exec(e);
  return {
    path: t?.[1] ?? e,
    suffix: t?.[2] ?? ""
  };
}, qb = (e, t) => {
  const { path: n } = ou(t), o = [
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
}, au = (e, t, n) => {
  const { suffix: o } = ou(n), a = qb(
    Yb(t),
    n
  );
  return `${Fn(e, a)}${o}`;
}, Jb = /url\(\s*(['"]?)(.*?)\1\s*\)/gi, Xb = (e) => !e || e.startsWith("#") || e.startsWith("/") || e.startsWith("//") || e.startsWith("var(") || /^[a-z][a-z\d+.-]*:/i.test(e), Qb = (e, t, n) => n.replace(
  Jb,
  (o, a, r) => {
    const s = r.trim();
    return Xb(s) ? o : `url("${au(
      e,
      t,
      s
    )}")`;
  }
), ew = [
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
], tw = {
  vue: {
    moduleKey: "vue",
    runtime: Ou,
    exportNames: ew
  },
  pinia: {
    moduleKey: "pinia",
    runtime: Yu
  },
  "vue-router": {
    moduleKey: "vueRouter",
    runtime: qu
  },
  "vue-i18n": {
    moduleKey: "vueI18n",
    runtime: Zu
  }
}, nw = /^[A-Za-z_$][\w$]*$/, ow = (e, t, n, o) => {
  const r = (o ?? Object.keys(n)).filter(
    (s) => s !== "default" && s !== "__esModule" && nw.test(s)
  ).map((s) => `export const ${s} = Runtime[${JSON.stringify(s)}];`).join(`
`);
  return [
    `const Runtime = globalThis.${e}[${JSON.stringify(t)}];`,
    "export default Runtime;",
    r
  ].join(`
`);
}, aw = (e) => {
  const t = tw[e];
  if (!t) return null;
  const n = fi.get(e);
  if (n) return n;
  const o = "__SNIPPETS_CODE_PLUGIN_SHARED__", a = globalThis;
  a[o] = {
    ...a[o] ?? {},
    [t.moduleKey]: t.runtime
  };
  const r = ow(
    o,
    t.moduleKey,
    t.runtime,
    t.exportNames
  ), s = URL.createObjectURL(
    new Blob([r], { type: "text/javascript" })
  );
  return fi.set(e, s), s;
}, sw = (e, t, n) => {
  const o = (a) => {
    const r = aw(a);
    return r || (!a.startsWith("./") && !a.startsWith("../") ? a : au(e, t, a));
  };
  return n.replace(
    /((?:import|export)\s+(?:[^'"]*?\s+from\s*)?)(['"])([^'"]+)\2/g,
    (a, r, s, i) => `${r}${s}${o(i)}${s}`
  ).replace(
    /(import\s*\(\s*)(['"])([^'"]+)\2(\s*\))/g,
    (a, r, s, i, u) => `${r}${s}${o(i)}${s}${u}`
  );
}, rw = (e, t) => {
  const n = ta.get(e) ?? [];
  n.push(t), ta.set(e, n);
}, iw = (e) => {
  (ta.get(e) ?? []).forEach((n) => URL.revokeObjectURL(n)), ta.delete(e);
}, lw = async (e, t) => {
  const n = Fn(e, t), o = await fetch(n);
  if (!o.ok)
    throw new Error(
      `插件 ${e.id} 前端入口读取失败: ${o.status} ${o.statusText}`
    );
  const a = await o.text(), r = sw(
    e,
    t,
    a
  ), s = URL.createObjectURL(
    new Blob([r], { type: "text/javascript" })
  );
  return rw(String(e.id), s), await import(
    /* @vite-ignore */
    s
  );
}, uw = (e) => async (t, n, o) => (Wb(e, t), L(t, n, o)), cw = (e) => async (t, n = null) => (Ub(e, t), await L("invoke_plugin_backend", {
  pluginId: e.id,
  command: t,
  payload: n
})), Vo = (e, t) => {
  const n = An.get(e) ?? /* @__PURE__ */ new Set();
  n.add(t), An.set(e, n);
}, dw = (e, t) => {
  const n = An.get(e);
  n && (n.delete(t), n.size === 0 && An.delete(e));
}, fw = (e) => {
  const t = Array.from(An.get(e) ?? []);
  An.delete(e);
  for (const n of t)
    try {
      n();
    } catch (o) {
      V.warn(`[PluginRuntime] 清理插件运行时失败: ${e}`, o);
    }
}, pw = (e) => async (...t) => {
  const n = String(e.id), o = await yt(...t);
  let a = !0;
  const r = () => {
    a && (a = !1, dw(n, r), o());
  };
  return Vo(n, r), r;
}, La = (e, t, n) => {
  if (t) return js(t);
  if (!n)
    throw new Error(
      `插件 ${e.id} 注册组件时缺少 component 或 componentUrl`
    );
  return js(
    es(
      () => import(
        /* @vite-ignore */
        Fn(e, n)
      )
    )
  );
}, mw = (e, t, n) => {
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
}, hw = (e, t) => {
  if (e === "config") {
    Za.push(t);
    return;
  }
  if (e === "window") {
    qa.push(t);
    return;
  }
  Ya.push(t);
}, xa = (e, t) => {
  for (let n = e.length - 1; n >= 0; n -= 1)
    e[n].meta?.pluginId === t && e.splice(n, 1);
}, Ra = (e, t, n) => {
  const o = e[t] ?? [];
  o.includes(n) || (e[t] = [...o, n]), e.manifest.capabilities = {
    ...e.manifest.capabilities,
    [t]: e[t]
  };
}, aa = (e, t) => `${e}:${t}`, vw = (e) => ({
  pluginId: String(e.id),
  packagePath: e.packagePath ?? "",
  manifest: e.manifest,
  resolveAssetUrl: (t) => Fn(e, t),
  api: {
    invoke: uw(e),
    invokeBackend: cw(e),
    listen: pw(e),
    emit: Kl
  },
  ui: {
    h: Ti,
    defineComponent: K
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
    Ra(e, "routeNames", t.name);
    const o = {
      path: t.path,
      name: t.name,
      component: mw(
        e,
        t.component,
        t.componentUrl
      ),
      meta: {
        ...t.meta,
        pluginId: e.id
      }
    };
    hw(n, o);
  },
  registerSettingsTab(t) {
    const n = t.labelKey ?? `plugins.${e.id}.${t.id}`, o = {
      id: t.id,
      pluginId: String(e.id),
      labelKey: n,
      label: t.label,
      icon: t.icon ?? ic
    }, a = aa(String(e.id), t.id), r = wn.findIndex(
      (i) => i.id === t.id && i.pluginId === String(e.id)
    ), s = La(e, t.component, t.componentUrl);
    r === -1 ? (wn.push(o), Ga[t.id] = s, na.add(a)) : na.has(a) && (wn[r] = o, Ga[t.id] = s), Ra(e, "settingsTabs", t.id);
  },
  registerSearchProvider(t) {
    const n = {
      pluginId: e.id,
      source: t.source,
      search: t.search
    }, o = bn.findIndex(
      (a) => a.pluginId === e.id && a.source === t.source
    );
    o === -1 ? bn.push(n) : bn[o] = n, Ra(e, "searchSources", t.source);
  },
  registerTitlebarAction(t) {
    const n = aa(
      String(e.id),
      t.id
    ), o = _n.findIndex(
      (r) => r.id === t.id && r.pluginId === e.id
    ), a = {
      id: t.id,
      pluginId: e.id,
      component: La(e, t.component, t.componentUrl)
    };
    o === -1 ? (_n.push(a), oa.add(n)) : oa.has(n) && (_n[o] = a);
  },
  registerWindowShortcut(t) {
    Fo.push({
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
    }, a = Sn.findIndex(
      (r) => r.pluginId === e.id && r.id === t.id && r.target === n
    );
    a === -1 ? Sn.push(o) : Sn[a] = o;
  }
}), gw = async (e, t) => {
  const n = t.activate ?? (typeof t.default == "function" ? t.default : t.default?.activate);
  if (typeof n != "function")
    throw new Error(`插件 ${e.id} 的前端入口没有导出 activate(context)`);
  const o = await n(vw(e)), a = String(e.id);
  if (typeof o == "function") {
    Vo(a, o);
    return;
  }
  typeof o?.deactivate == "function" && Vo(a, o.deactivate), typeof o?.dispose == "function" && Vo(a, o.dispose);
}, yw = async (e) => {
  const t = String(e.id);
  if (ea.has(t)) return;
  const n = e.manifest.entry?.styles ?? [];
  if (!n.length) return;
  const o = [];
  try {
    for (const a of n) {
      const r = Fn(e, a), s = await fetch(r);
      if (!s.ok)
        throw new Error(
          `插件 ${e.id} 样式读取失败: ${s.status} ${s.statusText}`
        );
      const i = await s.text(), u = document.createElement("style");
      u.textContent = Qb(
        e,
        a,
        i
      ), u.dataset.pluginId = t, u.dataset.pluginStyle = a, document.head.appendChild(u), o.push(u);
    }
    ea.set(t, o);
  } catch (a) {
    throw o.forEach((r) => r.remove()), a;
  }
}, su = (e) => {
  (ea.get(e) ?? []).forEach((n) => n.remove()), ea.delete(e);
}, bw = [
  "routeNames",
  "settingsTabs",
  "searchSources",
  "titlebarActions",
  "windows"
], ww = (e) => {
  if (e.resourceFor || e.manifest.resourceFor || e.manifest.resources)
    return !1;
  const t = e.manifest.capabilities;
  return bw.some((n) => {
    const o = t?.[n];
    return Array.isArray(o) && o.length > 0;
  });
}, _w = async (e, t) => {
  for (const n of e)
    if (n.source === "local" && t(String(n.id)) && !Bo.has(String(n.id))) {
      if (n.manifest.entry?.frontend) {
        try {
          await yw(n);
          const o = await lw(
            n,
            n.manifest.entry.frontend
          );
          await gw(n, o), Bo.add(String(n.id));
        } catch (o) {
          Ja(String(n.id)), su(String(n.id)), V.warn(`[PluginRuntime] 加载本地插件失败: ${n.id}`, o);
        }
        continue;
      }
      Bo.add(String(n.id)), ww(n) && V.warn(`[PluginRuntime] 本地插件缺少前端入口: ${n.id}`);
    }
};
function Ja(e) {
  fw(e), Bo.delete(e), su(e), iw(e);
  for (const [
    t,
    n
  ] of pi.entries())
    [
      ...Za,
      ...Ya,
      ...qa
    ].some(
      (a) => a.name === t && a.meta?.pluginId === e
    ) && (n(), Kb.delete(t), pi.delete(t));
  xa(Za, e), xa(Ya, e), xa(qa, e);
  for (let t = wn.length - 1; t >= 0; t -= 1) {
    const n = wn[t], o = aa(e, n.id);
    n.pluginId === e && na.has(o) && (delete Ga[n.id], wn.splice(t, 1), na.delete(o));
  }
  for (let t = bn.length - 1; t >= 0; t -= 1)
    bn[t].pluginId === e && bn.splice(t, 1);
  for (let t = _n.length - 1; t >= 0; t -= 1) {
    const n = _n[t], o = aa(e, n.id);
    n.pluginId === e && oa.has(o) && (_n.splice(t, 1), oa.delete(o));
  }
  for (let t = Fo.length - 1; t >= 0; t -= 1)
    Fo[t].pluginId === e && Fo.splice(t, 1);
  for (let t = Sn.length - 1; t >= 0; t -= 1)
    Sn[t].pluginId === e && Sn.splice(t, 1);
}
let Un = null, Kn = null, Gn = null;
const mi = (e, t) => {
  globalThis.setTimeout(e, t);
}, hi = (e) => e.replace(/^v/i, "").split(".").map((t) => Number.parseInt(t, 10)).map((t) => Number.isFinite(t) ? t : 0), Sw = (e, t) => {
  const n = hi(e), o = hi(t), a = Math.max(n.length, o.length);
  for (let r = 0; r < a; r += 1) {
    const s = (n[r] ?? 0) - (o[r] ?? 0);
    if (s !== 0) return s;
  }
  return 0;
}, vi = (e) => Array.isArray(e.dependencies) ? e.dependencies.filter(
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
}), kw = (e, t) => gi(e) !== gi(t), yi = (e, t) => {
  const n = e.reduce(
    (o, a) => (o[a.id] = a.enabledByDefault, o),
    { ...tu }
  );
  if (!t)
    return n;
  for (const o of e) {
    const a = t[o.id];
    typeof a == "boolean" && (n[o.id] = a);
  }
  return n;
}, Cw = mo("plugins", {
  state: () => ({
    enabled: { ...tu },
    installedPlugins: Qo,
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
      if (Un) {
        await Un;
        return;
      }
      Un = (async () => {
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
          V.warn("[PluginStore] 加载插件状态失败，使用默认状态", e), this.installedPlugins = Qo, this.enabled = yi(
            this.installedPlugins,
            this.enabled
          );
        } finally {
          this.initialized = !0, await this.ensureStateListener();
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
        await Un;
      } finally {
        Un = null;
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
      const r = this.installedPlugins, s = new Map(
        r.map((p) => [String(p.id), p])
      ), i = await Cb(), u = eu(i), c = new Map(
        u.map((p) => [String(p.id), p])
      ), d = new Set(t);
      for (const p of r) {
        if (p.source !== "local") continue;
        const m = String(p.id), v = c.get(m);
        (!v || kw(p, v)) && d.add(m);
      }
      this.installedPlugins = u;
      const f = await kb(), h = Object.fromEntries(
        Object.entries(this.enabled).filter(
          ([p]) => s.has(p) && c.has(p)
        )
      );
      this.enabled = yi(this.installedPlugins, {
        ...h,
        ...f
      }), this.installedPlugins.filter(
        (p) => p.source === "local" && !this.isEnabled(p.id)
      ).forEach((p) => d.add(String(p.id))), d.forEach(
        (p) => Ja(p)
      ), o && await this.refreshPluginResourceStatus(), a && await this.loadEnabledPluginEntries(), V.info("[PluginStore] reconcile installed plugins complete", {
        reason: e,
        resetPluginIds: Array.from(d),
        plugins: this.installedPlugins.map((p) => ({
          id: p.id,
          source: p.source,
          enabled: this.isEnabled(p.id),
          hotkeys: p.hotkeys,
          packagePath: p.packagePath
        }))
      });
    },
    async installFromPath(e, t = !1) {
      V.info("[PluginStore] install from path start", {
        sourcePath: e,
        overwrite: t
      });
      const n = await Tb(
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
      const r = await Ql(
        e,
        t,
        n,
        o,
        a
      );
      V.info("[PluginStore] install from url complete", {
        pluginId: r.manifest.id,
        packagePath: r.packagePath,
        packageUrl: e
      }), await this.reconcileInstalledPlugins("install-url", [
        String(r.manifest.id)
      ]);
    },
    async uninstall(e) {
      V.info("[PluginStore] uninstall start", { pluginId: e }), await Ob(e), await this.reconcileInstalledPlugins("uninstall", [String(e)]), V.info("[PluginStore] uninstall complete", { pluginId: e });
    },
    async ensureStateListener() {
      if (!this.stateUnlisten)
        try {
          this.stateUnlisten = await yt(
            "plugin-state-changed",
            async (e) => {
              const { pluginId: t, enabled: n } = e.payload;
              (this.installedPlugins.some((o) => o.id === t) || Vb(t)) && (this.enabled[t] = n), await this.reconcileInstalledPlugins(
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
        V.info("[PluginStore] set enabled start", { pluginId: e, enabled: t }), t || (Ja(String(e)), this.runtimeRevision += 1), await $b(e, t), await this.reconcileInstalledPlugins(
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
      if (Kn) {
        await Kn;
        return;
      }
      Kn = (async () => {
        await _w(
          this.installedPlugins,
          (e) => this.isEnabled(e)
        ), this.runtimeRevision += 1;
      })();
      try {
        await Kn;
      } finally {
        Kn = null;
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
      return !t || t.source === "local" && Sw(e.version, t.manifest.version) > 0;
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
          const a = e.mirrorUrls && e.mirrorUrls.length > 0 ? e.mirrorUrls : [Sb(e.packageUrl)];
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
            const n = await Ib();
            e[n.pluginId] = n;
          } catch (n) {
            V.warn("[PluginStore] 获取截图插件资源状态失败", n);
          }
        if (t("translation")) {
          const n = "resources/transformers/transformers.min.js", o = ["translation-offline-runtime", "translation"];
          let a = null, r;
          for (const s of o)
            if (a = await zs(
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
            const n = await Lb();
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
            const n = await Db();
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
        await Gn;
      } finally {
        Gn = null;
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
}), Tw = mo("configuration", {
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
    editorLineHeight: 1.6
    // 编辑器行距
  }),
  getters: {
    /** 当前实际是否为深色模式（委托给 useThemeStore） */
    effectiveDark() {
      return Wn().effectiveDark;
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
      const e = bb();
      await e.initialize(), this.searchHotkey = e.searchHotkey, this.configHotkey = e.configHotkey, this.translateHotkey = e.translateHotkey, this.selectionTranslateHotkey = e.selectionTranslateHotkey, this.screenshotHotkey = e.screenshotHotkey, this.screenRecorderHotkey = e.screenRecorderHotkey, this.darkModeHotkey = e.darkModeHotkey, this.wallpaperSwitcherHotkey = e.wallpaperSwitcherHotkey, this.pluginHotkeys = e.pluginHotkeys;
      const t = Wn();
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
        const n = await gb();
        this.editorLineHeight = n.lineHeight || 1.6;
      } catch (n) {
        V.error("获取编辑器显示设置失败:", n);
      }
    },
    async updateEditorLineHeight(e) {
      const t = this.editorLineHeight, n = Math.min(2, Math.max(1.2, Number(e) || 1.6));
      this.editorLineHeight = n;
      try {
        await yb({
          // 行号仅属于代码片段编辑器；保留字段以兼容已有配置格式。
          lineNumbers: !1,
          lineHeight: n
        });
      } catch (o) {
        throw this.editorLineHeight = t, V.error("更新编辑器行距设置失败:", o), o;
      }
    },
    // 更新主题并立即应用（委托给 useThemeStore）
    updateTheme(e) {
      const t = Wn();
      t.updateTheme(e), this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
    },
    // 应用主题到DOM（委托给 useThemeStore）
    applyTheme() {
      const e = Wn();
      e.theme = this.theme, e.applyTheme(), this.systemPrefersDark = e.systemPrefersDark;
    },
    // 同步系统主题样式（委托给 useThemeStore）
    syncSystemThemeStyle(e) {
      const t = Wn();
      t.syncSystemThemeStyle(e), this.theme = t.theme, this.systemPrefersDark = t.systemPrefersDark;
    }
  },
  persist: {
    pick: ["theme", "dbPath"]
  }
}), Ew = "resources/transformers/transformers.min.js", Pw = ["translation-offline-runtime", "translation"], Ow = "https://huggingface.co/", $w = "{model}/resolve/{revision}/", Iw = "/__snippets_code_disabled_transformers_local_models__/", Lw = [
  "ort-wasm-simd-threaded.wasm",
  "ort-wasm-simd.wasm",
  "ort-wasm-threaded.wasm",
  "ort-wasm.wasm"
];
let Zn = null;
const xw = (e) => {
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
}, Rw = (e) => {
  const t = e.search(/[?#]/), n = t >= 0 ? e.slice(0, t) : e, o = xw(n);
  return o.index >= 0 ? n.slice(0, o.index + o.length) : n;
}, Aw = (e) => {
  const t = Rw(e);
  return Object.fromEntries(
    Lw.map((n) => [n, `${t}${n}`])
  );
}, Mw = (e, t) => {
  var n, o;
  e.useBrowserCache = !0, e.allowRemoteModels = !0, e.remoteHost = Ow, e.remotePathTemplate = $w, e.allowLocalModels = !1, e.localModelPath = Iw, t && (e.backends ?? (e.backends = {}), (n = e.backends).onnx ?? (n.onnx = {}), (o = e.backends.onnx).wasm ?? (o.wasm = {}), e.backends.onnx.wasm.wasmPaths = Aw(t), e.backends.onnx.wasm.numThreads = 1);
};
async function zw() {
  return Zn || (Zn = (async () => {
    for (const e of Pw) {
      const t = await zs(e, Ew);
      if (!t) continue;
      const n = Wl(t), o = await import(
        /* @vite-ignore */
        n
      );
      return Mw(o.env, n), V.info(`[离线翻译] 已从插件资源加载 Transformers runtime: ${e}`, {
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
    throw Zn = null, e;
  }), Zn);
}
let It = null, ao = !1, gn = null, kn = null, Xa = null;
const Nw = "Xenova/opus-mt-en-zh", Fw = [
  { name: "tokenizer_config.json", size: "~1KB" },
  { name: "config.json", size: "~1KB" },
  { name: "tokenizer.json", size: "~2MB" },
  { name: "generation_config.json", size: "~1KB" },
  { name: "onnx/encoder_model_quantized.onnx", size: "~75MB" },
  { name: "onnx/decoder_model_merged_quantized.onnx", size: "~220MB" }
], Bw = 3e5;
function bi(e) {
  Xa = e;
}
function Vw() {
  return Fw;
}
function Dw(e, t, n) {
  return Promise.race([
    e,
    new Promise(
      (o, a) => setTimeout(() => a(new Error(n)), t)
    )
  ]);
}
async function ru() {
  return It || gn || (ao = !0, V.info("[离线翻译] 正在加载翻译模型..."), gn = (async () => {
    try {
      const { pipeline: e } = await zw();
      let t = "";
      const n = e("translation", Nw, {
        dtype: "q8",
        device: "wasm",
        revision: "main",
        local_files_only: !1,
        progress_callback: (a) => {
          a.status === "done" && a.file && a.file !== t && (t = a.file, V.info(`[离线翻译] 已加载: ${a.file}`)), Xa && Xa({
            status: a.status,
            progress: a.progress,
            file: a.file
          });
        }
      });
      return It = await Dw(
        n,
        Bw,
        "模型加载超时，请检查网络连接后重试"
      ), V.info("[离线翻译] 翻译模型加载完成"), ao = !1, It;
    } catch (e) {
      throw ao = !1, gn = null, V.error("[离线翻译] 模型加载失败:", e), e;
    }
  })(), gn);
}
async function Hw(e) {
  if (!e?.trim()) return e;
  kn = new AbortController();
  const t = kn.signal;
  try {
    const n = await ru();
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
    throw n instanceof Error && n.message === "翻译已取消" ? (V.info("[离线翻译] 翻译已取消"), n) : n instanceof Error && n.message.includes("离线翻译运行时未安装") ? (V.warn("[离线翻译] 运行时资源未安装"), n) : (V.error("[离线翻译] 翻译失败:", n), new Error("离线翻译失败，请检查模型是否正确加载"));
  } finally {
    kn = null;
  }
}
function wi() {
  kn && (kn.abort(), kn = null, V.info("[离线翻译] 已发送取消信号"));
}
async function Qa() {
  await ru();
}
function xo() {
  return It !== null;
}
function jw() {
  return ao;
}
async function qn() {
  try {
    if ("caches" in window) {
      const t = await caches.keys();
      V.info(`[离线翻译] Cache Storage 列表: ${JSON.stringify(t)}`);
      for (const n of t)
        if (n.includes("transformers") || n.includes("huggingface")) {
          const a = await (await caches.open(n)).keys();
          if (V.info(`[离线翻译] Cache "${n}" 包含 ${a.length} 个文件`), a.some(
            (s) => s.url.includes("opus-mt-en-zh") || s.url.includes("Xenova")
          )) {
            const s = a.some((i) => i.url.includes(".onnx"));
            if (V.info(`[离线翻译] 找到模型缓存，包含 ONNX: ${s}`), s)
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
async function Ww() {
  return (await qn()).isCached;
}
function Uw() {
  return It !== null;
}
async function Kw() {
  if (It)
    try {
      await It.dispose?.();
    } catch {
    }
  It = null, gn = null, ao = !1, V.info("[离线翻译] 翻译器已释放");
}
async function Gw() {
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
const Zw = { class: "translate-window" }, Yw = {
  class: "header",
  "data-tauri-drag-region": ""
}, qw = { class: "left-buttons" }, Jw = ["aria-label"], Xw = {
  class: "window-title",
  "data-tauri-drag-region": ""
}, Qw = { class: "right-buttons" }, e1 = ["aria-label"], t1 = { class: "translate-container" }, n1 = { class: "language-selector" }, o1 = ["aria-label", "disabled"], a1 = { class: "source-area" }, s1 = { class: "source-actions" }, r1 = { class: "source-material" }, i1 = { class: "translation-results" }, l1 = ["onClick"], u1 = { class: "result-title" }, c1 = ["src"], d1 = ["src"], f1 = {
  key: 2,
  class: "offline-icon"
}, p1 = {
  key: 3,
  class: "offline-icon ai-icon"
}, m1 = { class: "result-controls" }, h1 = {
  key: 0,
  class: "result-body"
}, v1 = ["textContent", "onBlur"], g1 = {
  key: 2,
  class: "result-empty"
}, y1 = { class: "result-actions" }, b1 = ["onClick"], w1 = ["onClick"], _1 = ["onClick"], S1 = /* @__PURE__ */ K({
  __name: "index",
  setup(e) {
    const { t } = ns(), n = Cw(), o = Yl(), a = A(!1), r = A(""), s = A("auto"), i = A("zh"), u = A(!1), c = A(!1), d = A(), f = A(!1), h = A(!1), p = A(!1);
    let m = 0;
    const v = A([
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
    ]), k = b(() => v.value.filter((B) => B.engine === "offline" ? f.value : B.engine === "local-ai" ? h.value : !0)), g = (B) => B === "bing" ? t("translate.bingTranslate") : B === "google" ? t("translate.googleTranslate") : B === "offline" ? t("translate.offlineTranslate") : B === "local-ai" ? t("translate.localAiTranslate") : B, I = b(() => [
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
    const $ = A({
      forChinese: "en",
      forEnglish: "zh"
    }), x = async () => {
      if (u.value) return;
      const B = await yt("tauri://blur", () => {
        S && clearTimeout(S), S = setTimeout(async () => {
          u.value || (W(), await o.hide());
        }, 100);
      }), oe = await yt("tauri://focus", () => {
        S && clearTimeout(S), me();
      }), ne = await yt("tauri://show", () => {
        me();
      }), Le = await yt("tauri://move", () => {
        S && clearTimeout(S);
      }), De = await yt("selection-text", (Te) => {
        Te.payload && Te.payload.text && Ee(Te.payload.text);
      }), Ae = await yt("reset-state", () => {
        W();
      });
      O = () => {
        B(), oe(), Le(), De(), Ae(), ne();
      };
    }, G = async () => {
      u.value = !u.value, await o.setAlwaysOnTop(u.value), u.value ? O && (O(), O = null) : x();
    }, W = () => {
      r.value = "", c.value = !1, v.value.forEach((B) => {
        B.text = "", B.loading = !1;
      });
    }, Q = async () => {
      W(), await o.close();
    }, ie = () => {
      s.value !== "auto" && ([s.value, i.value] = [
        i.value,
        s.value
      ], X());
    }, w = () => {
      r.value = "", v.value.forEach((B) => {
        B.text = "", B.loading = !1;
      }), c.value = !1;
    }, z = async (B) => {
      B && (await navigator.clipboard.writeText(B), ze.success(t("translate.copiedToClipboard")));
    }, Y = (B, oe) => {
      const ne = oe.target;
      ne && (B.text = ne.innerText.trim());
    }, P = (B, oe) => {
      if (!B) return;
      const ne = new SpeechSynthesisUtterance(B), Le = oe === "zh" ? "zh-CN" : oe === "zh_tw" ? "zh-TW" : oe === "en" ? "en-US" : oe;
      ne.lang = Le, window.speechSynthesis.speak(ne);
    }, F = () => {
      if (s.value !== "auto") return;
      const B = $a(r.value);
      B === "zh" ? i.value = $.value.forChinese : B === "en" && (i.value = $.value.forEnglish);
    }, E = () => {
      const B = $a(r.value);
      B === "zh" ? $.value.forChinese = i.value : B === "en" && ($.value.forEnglish = i.value), X();
    }, ee = async (B, oe) => {
      const ne = v.value.find((Ae) => Ae.engine === B);
      if (!ne || B === "offline" && !f.value || B === "local-ai" && !h.value)
        return;
      ne.loading = !0, ne.text = "";
      const Le = vb(r.value);
      let De = i.value;
      B === "bing" && De === "auto" && (De = "en");
      try {
        let Ae;
        if (B === "offline") {
          if (!Uw())
            if (await Ww())
              V.info("[翻译窗口] 离线翻译懒加载：开始加载模型..."), await Qa(), V.info("[翻译窗口] 离线翻译懒加载：模型加载完成");
            else {
              ne.text = t("translate.offlineModelUnavailable");
              return;
            }
          Ae = await Hw(Le);
        } else
          Ae = await L("translate_text", {
            text: Le,
            from: s.value,
            to: De,
            engine: B
          });
        if (oe !== m) return;
        ne.text = Ae;
      } catch (Ae) {
        if (oe !== m) return;
        const Te = String(Ae);
        if (Te.includes("翻译已取消")) return;
        V.error(`[翻译] ${B}翻译出错`, Ae), Te.includes("429") || Te.includes("Too Many Requests") ? ne.text = t("translate.tooManyRequests") : Te.includes("timeout") || Te.includes("超时") ? ne.text = t("translate.timeout") : Te.includes("network") || Te.includes("网络") ? ne.text = t("translate.networkError") : Te.includes("未下载") || Te.includes("未激活") || Te.includes("运行时未安装") ? ne.text = t("translate.offlineUnavailable") : ne.text = t("translate.translateFailed");
      } finally {
        oe === m && (ne.loading = !1);
      }
    }, X = async () => {
      if (T && (clearTimeout(T), T = null), !r.value.trim()) {
        v.value.forEach((ne) => {
          ne.text = "", ne.loading = !1;
        }), a.value = !1;
        return;
      }
      wi();
      const B = ++m;
      F(), a.value = !0;
      const oe = k.value.map(
        (ne) => ee(ne.engine, B)
      );
      await Promise.all(oe), B === m && (a.value = !1);
    }, le = (B) => {
      B.expanded = !B.expanded;
    }, ve = () => {
      p.value || (c.value = !!r.value, T && clearTimeout(T), r.value.trim() ? T = setTimeout(() => {
        X();
      }, 500) : v.value.forEach((B) => {
        B.text = "", B.loading = !1;
      }));
    }, be = () => {
      p.value = !0;
    }, J = () => {
      p.value = !1;
    };
    let de = "", ge = !1;
    const Ee = (B) => {
      B && (B === de && ge || (de = B, ge = !0, r.value = B, c.value = !0, F(), X().finally(() => {
        setTimeout(() => {
          ge = !1;
        }, 2e3);
      }), me()));
    }, ae = (B) => {
      r.value = B.text;
      const oe = $a(r.value), ne = s.value, Le = i.value;
      ne === "auto" ? (s.value = "auto", oe === "zh" ? i.value = $.value.forChinese : i.value = $.value.forEnglish) : (s.value = Le, i.value = ne === "auto" ? oe === "zh" ? "en" : "zh" : ne), X();
    }, me = () => {
      const B = (oe = 0) => {
        if (!(oe > 5))
          if (d.value)
            d.value.focus();
          else {
            const ne = 100 * (oe + 1);
            setTimeout(() => B(oe + 1), ne);
          }
      };
      d.value && d.value.focus(), ke(() => {
        B();
      });
    }, Fe = () => {
      F(), X();
    };
    return Pe(async () => {
      try {
        await n.initialize(), h.value = n.isEnabled("local-ai");
      } catch (B) {
        V.warn("[翻译窗口] 获取本地 AI 插件状态失败:", B), h.value = !1;
      }
      try {
        const B = await L(
          "get_offline_model_activated"
        );
        V.info(`[翻译窗口] 离线模型后端激活状态: ${B}`), f.value = B;
      } catch (B) {
        V.error("[翻译窗口] 获取离线模型激活状态失败:", B), f.value = !1;
      }
      await x(), r.value.trim() && F(), me(), await ke(), setTimeout(() => {
        o.emit("translate_ready");
      }, 100);
    }), ki(() => {
      O && O(), S && clearTimeout(S), T && clearTimeout(T), wi(), W();
    }), (B, oe) => {
      const ne = Ls, Le = As, De = Rs, Ae = vs, Te = fy;
      return _(), R("main", Zw, [
        y("div", Yw, [
          y("div", qw, [
            N(ne, {
              content: B.$t("pin.pinWindow"),
              placement: "bottom",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: Z(() => [
                y("button", {
                  type: "button",
                  "aria-label": B.$t("pin.pinWindow"),
                  onMousedown: oe[0] || (oe[0] = Oe(() => {
                  }, ["stop"])),
                  onClick: G,
                  class: M(["window-action", "pin-button", l(u) ? "pinned" : ""])
                }, [
                  N(l(rc), { size: 18 })
                ], 42, Jw)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"])
          ]),
          y(
            "div",
            Xw,
            U(B.$t("translate.title")),
            1
            /* TEXT */
          ),
          y("div", Qw, [
            N(ne, {
              content: B.$t("pin.close"),
              placement: "bottom",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: Z(() => [
                y("button", {
                  type: "button",
                  "aria-label": B.$t("pin.close"),
                  onMousedown: oe[1] || (oe[1] = Oe(() => {
                  }, ["stop"])),
                  onClick: Q,
                  class: "window-action material-close"
                }, [
                  N(l(tc), { size: 22 })
                ], 40, e1)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"])
          ])
        ]),
        y("div", t1, [
          H(" 语言选择区域 "),
          y("div", n1, [
            N(De, {
              modelValue: l(s),
              "onUpdate:modelValue": oe[2] || (oe[2] = (ce) => Jn(s) ? s.value = ce : null),
              size: "small",
              onChange: Fe,
              class: "lang-select"
            }, {
              default: Z(() => [
                (_(!0), R(
                  $e,
                  null,
                  st(l(I), (ce) => (_(), q(Le, {
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
            N(ne, {
              content: B.$t("translate.translateBack"),
              placement: "top",
              "hide-after": 1e3,
              "popper-class": "themed-tooltip-popper"
            }, {
              default: Z(() => [
                y("button", {
                  type: "button",
                  "aria-label": B.$t("translate.translateBack"),
                  disabled: l(s) === "auto",
                  onClick: ie,
                  class: "swap-button"
                }, [
                  N(l(Ws), { size: 22 })
                ], 8, o1)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["content"]),
            N(De, {
              modelValue: l(i),
              "onUpdate:modelValue": oe[3] || (oe[3] = (ce) => Jn(i) ? i.value = ce : null),
              size: "small",
              onChange: E,
              class: "lang-select"
            }, {
              default: Z(() => [
                (_(!0), R(
                  $e,
                  null,
                  st(l(I), (ce) => (_(), q(Le, {
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
          y("div", a1, [
            N(Ae, {
              ref_key: "sourceTextArea",
              ref: d,
              modelValue: l(r),
              "onUpdate:modelValue": oe[4] || (oe[4] = (ce) => Jn(r) ? r.value = ce : null),
              type: "textarea",
              rows: 2,
              placeholder: B.$t("translate.inputPlaceholder"),
              resize: "none",
              onInput: ve,
              onCompositionstart: be,
              onCompositionend: J,
              class: "source-textarea"
            }, null, 8, ["modelValue", "placeholder"]),
            y("div", s1, [
              y("div", r1, [
                N(ne, {
                  content: B.$t("translate.speakText"),
                  placement: "top",
                  "hide-after": 1e3,
                  "popper-class": "themed-tooltip-popper"
                }, {
                  default: Z(() => [
                    y("button", {
                      type: "button",
                      onClick: oe[5] || (oe[5] = (ce) => P(l(r), l(s))),
                      class: "action-btn"
                    }, [
                      N(l(Us), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"]),
                l(c) ? (_(), q(ne, {
                  key: 0,
                  content: B.$t("translate.deleteText"),
                  placement: "top",
                  "hide-after": 1e3,
                  "popper-class": "themed-tooltip-popper"
                }, {
                  default: Z(() => [
                    y("button", {
                      type: "button",
                      onClick: w,
                      class: "action-btn"
                    }, [
                      N(l(oc), { size: 18 })
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["content"])) : H("v-if", !0)
              ])
            ])
          ]),
          H(" 多引擎翻译结果区域 "),
          y("div", i1, [
            (_(!0), R(
              $e,
              null,
              st(l(k), (ce) => (_(), R(
                "div",
                {
                  key: ce.engine,
                  class: M(["result-card", { "result-expanded": ce.expanded }])
                },
                [
                  y("button", {
                    type: "button",
                    class: "result-header",
                    onClick: (Ke) => le(ce)
                  }, [
                    y("div", u1, [
                      ce.engine === "google" ? (_(), R("img", {
                        key: 0,
                        src: l(ib),
                        class: "engine-icon",
                        alt: "Google"
                      }, null, 8, c1)) : ce.engine === "bing" ? (_(), R("img", {
                        key: 1,
                        src: l(lb),
                        class: "engine-icon",
                        alt: "Bing"
                      }, null, 8, d1)) : ce.engine === "offline" ? (_(), R(
                        "span",
                        f1,
                        U(B.$t("translate.offlineMark")),
                        1
                        /* TEXT */
                      )) : (_(), R("span", p1, "AI")),
                      y(
                        "span",
                        null,
                        U(g(ce.engine)),
                        1
                        /* TEXT */
                      )
                    ]),
                    y("div", m1, [
                      (_(), q(at(ce.expanded ? l(uc) : l(ac)), {
                        size: 18,
                        class: "expand-icon"
                      }))
                    ])
                  ], 8, l1),
                  ce.expanded ? (_(), R("div", h1, [
                    ce.loading ? (_(), q(Te, {
                      key: 0,
                      rows: 3,
                      animated: ""
                    })) : ce.text ? (_(), R("div", {
                      key: 1,
                      class: "result-text",
                      contenteditable: "plaintext-only",
                      spellcheck: "false",
                      textContent: U(ce.text),
                      onBlur: (Ke) => Y(ce, Ke)
                    }, null, 40, v1)) : (_(), R(
                      "div",
                      g1,
                      U(B.$t("translate.resultPlaceholder")),
                      1
                      /* TEXT */
                    )),
                    y("div", y1, [
                      N(ne, {
                        content: B.$t("translate.speakText"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: Z(() => [
                          y("button", {
                            type: "button",
                            onClick: (Ke) => P(ce.text, l(i)),
                            class: "action-btn"
                          }, [
                            N(l(Us), { size: 18 })
                          ], 8, b1)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      N(ne, {
                        content: B.$t("translate.copyResult"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: Z(() => [
                          y("button", {
                            type: "button",
                            onClick: (Ke) => z(ce.text),
                            class: "action-btn"
                          }, [
                            N(l(nc), { size: 18 })
                          ], 8, w1)
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["content"]),
                      N(ne, {
                        content: B.$t("translate.translateBack"),
                        placement: "top",
                        "hide-after": 1e3,
                        "popper-class": "themed-tooltip-popper"
                      }, {
                        default: Z(() => [
                          y("button", {
                            type: "button",
                            onClick: (Ke) => ae(ce),
                            class: "action-btn rotate-icon"
                          }, [
                            N(l(Ws), { size: 18 })
                          ], 8, _1)
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
}, k1 = /* @__PURE__ */ wo(S1, [["__scopeId", "data-v-cbe9045a"]]), C1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: k1
}, Symbol.toStringTag, { value: "Module" })), T1 = ["disabled"], E1 = {
  key: 0,
  class: "custom-button__loading"
}, P1 = /* @__PURE__ */ K({
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
      e.loading ? (_(), R("div", E1, o[1] || (o[1] = [
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
    ], 10, T1));
  }
}), Ro = /* @__PURE__ */ wo(P1, [["__scopeId", "data-v-9497085f"]]), O1 = /* @__PURE__ */ K({
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
    return (r, s) => (_(), R(
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
          U(e.modelValue ? e.activeText : e.inactiveText),
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
}), _i = /* @__PURE__ */ wo(O1, [["__scopeId", "data-v-59686f54"]]), iu = {
  pathTemplate: "assets/${noteFileName}/",
  filenameFormat: "snippets-code",
  defaultImageScalePercent: 100,
  responsiveImages: !0,
  showImagePath: !0
}, $1 = "attachment-config-updated";
let yn = null, Yn = null;
async function I1(e = !1) {
  if (!e && yn) return { ...yn };
  if (!e && Yn) return Yn;
  const t = L("get_attachment_config").then((n) => (yn = { ...iu, ...n }, { ...yn })).catch((n) => {
    throw new Error(`获取附件配置失败: ${n}`);
  }).finally(() => {
    Yn === t && (Yn = null);
  });
  return Yn = t, t;
}
async function L1(e) {
  try {
    await L("update_attachment_config", { config: e }), yn = { ...iu, ...e }, typeof window < "u" && window.dispatchEvent(new CustomEvent($1, {
      detail: { ...yn }
    }));
  } catch (t) {
    throw new Error(`更新附件配置失败: ${t}`);
  }
}
const x1 = { class: "settings-panel" }, R1 = { class: "panel-header" }, A1 = { class: "panel-title" }, M1 = { class: "panel-content" }, z1 = { class: "summarize-section" }, N1 = { class: "summarize-label" }, F1 = { class: "summarize-label-title" }, B1 = { class: "summarize-label-desc" }, V1 = { class: "summarize-input-wrapper" }, D1 = { class: "summarize-section" }, H1 = { class: "summarize-label" }, j1 = { class: "summarize-label-title" }, W1 = { class: "summarize-label-desc" }, U1 = { class: "summarize-input-wrapper" }, K1 = { class: "flex flex-wrap items-center gap-3" }, G1 = {
  key: 0,
  class: "summarize-section"
}, Z1 = { class: "summarize-label" }, Y1 = { class: "summarize-label-title" }, q1 = { class: "summarize-label-desc" }, J1 = { class: "summarize-input-wrapper flex-col !items-start" }, X1 = { class: "w-full space-y-2" }, Q1 = { class: "w-5 text-center" }, e2 = {
  key: 0,
  class: "text-green-500 text-base"
}, t2 = {
  key: 1,
  class: "text-red-500 text-base"
}, n2 = {
  key: 2,
  class: "text-yellow-500 text-base"
}, o2 = {
  key: 3,
  class: "text-panel-text-secondary text-base"
}, a2 = ["title"], s2 = { class: "w-16 text-right text-xs text-panel-text-secondary" }, r2 = { class: "w-24" }, i2 = {
  key: 1,
  class: "text-green-500 text-xs"
}, l2 = {
  key: 2,
  class: "text-red-500 text-xs"
}, u2 = {
  key: 3,
  class: "text-panel-text-secondary text-xs"
}, c2 = {
  key: 1,
  class: "summarize-section !mt-2"
}, d2 = { class: "summarize-label" }, f2 = { class: "summarize-label-title" }, p2 = { class: "summarize-label-desc" }, m2 = { class: "summarize-input-wrapper" }, h2 = { class: "model-info-card" }, v2 = { class: "info-row" }, g2 = { class: "info-item" }, y2 = { class: "info-label" }, b2 = { class: "info-item" }, w2 = { class: "info-label" }, _2 = { class: "info-value" }, S2 = { class: "info-item" }, k2 = { class: "info-label" }, C2 = { class: "info-value" }, T2 = { class: "summarize-section !mt-2" }, E2 = { class: "summarize-label" }, P2 = { class: "summarize-label-title" }, O2 = { class: "summarize-label-desc" }, $2 = { class: "summarize-input-wrapper" }, I2 = { class: "usage-tips" }, L2 = { class: "tip-item" }, x2 = { class: "tip-text" }, R2 = { class: "tip-item" }, A2 = { class: "tip-text" }, M2 = { class: "tip-item" }, z2 = { class: "tip-text" }, N2 = { class: "tip-item" }, F2 = { class: "tip-text" }, B2 = "resources/transformers/transformers.min.js", V2 = "translation-offline-runtime", D2 = /* @__PURE__ */ K({
  name: "Translation",
  __name: "index",
  setup(e) {
    const { t } = ns(), n = ["translation-offline-runtime", "translation"], o = A("bing"), a = A(!1), r = A(!1), s = A({ isCached: !1, cacheType: "none" }), i = A(!1), u = A(!1), c = A(!1), d = A(!1), f = A([]), h = b(() => s.value.isCached), p = b(() => [
      { value: "google", label: t("translation.google") },
      { value: "bing", label: t("translation.bing") },
      { value: "offline", label: t("translation.offline") },
      { value: "local-ai", label: t("translation.localAi") }
    ]), m = b(() => i.value ? t("translation.modelLoading") : c.value ? a.value ? t("translation.modelReady") : h.value && r.value ? t("translation.modelActivated") : h.value ? t("translation.modelCached") : t("translation.modelNotLoaded") : t("translation.runtimeMissing")), v = b(() => i.value ? "text-yellow-500" : c.value ? a.value || h.value && r.value ? "text-green-500" : h.value ? "text-blue-500" : "text-panel-text-secondary" : "text-red-500"), k = b(() => a.value || h.value), g = () => {
      const w = Vw();
      f.value = w.map((z) => ({
        file: z.name,
        progress: 0,
        status: "pending",
        size: z.size
      }));
    }, I = (w, z, Y) => {
      const P = f.value.find((F) => w.includes(F.file) || F.file.includes(w));
      P && (P.progress = z, P.status = Y);
    }, S = async () => {
      for (const w of n)
        if (await zs(w, B2))
          return c.value = !0, !0;
      return c.value = !1, !1;
    }, O = async () => {
      d.value = !0;
      try {
        const w = await Pb(wb), z = Array.isArray(w.plugins) ? w.plugins : [], Y = z.find((P) => P.id === V2);
        if (!Y)
          throw new Error(t("translation.runtimeMarketplaceMissing"));
        if (await x(Y, z), await S() || (V.info("[翻译设置] 运行时资源包缺少 runtime 文件，开始补全资源"), await Ia()), !await S())
          throw new Error(t("translation.runtimeInstallVerifyFailed"));
        ze.msg(t("translation.runtimeInstallSuccess"));
      } catch (w) {
        V.error("[翻译设置] 安装离线翻译运行时失败:", w), ze.msg(
          w instanceof Error ? w.message : t("translation.runtimeInstallFailed"),
          "error"
        );
      } finally {
        d.value = !1;
      }
    }, T = (w) => Array.isArray(w.dependencies) ? w.dependencies.filter((z) => typeof z == "string" && !!z.trim()) : [], $ = (w) => !!(w.packageUrl && w.status !== "included"), x = async (w, z, Y = /* @__PURE__ */ new Set()) => {
      if (!Y.has(w.id)) {
        Y.add(w.id);
        try {
          for (const P of T(w)) {
            const F = z.find((E) => E.id === P);
            if (!F)
              throw new Error(t("plugins.dependencyMissing", { id: P }));
            await x(F, z, Y);
          }
          w.packageUrl && $(w) && (V.info("[翻译设置] 开始安装离线翻译运行时资源包", {
            pluginId: w.id,
            packageUrl: w.packageUrl
          }), await Ql(
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
        await L("set_translation_engine", { engine: w }), ze.msg(t("translation.engineSaved"));
      } catch (z) {
        V.info("Failed to save translation engine:", z), ze.msg(t("translation.engineSaveFailed"), "error");
      }
    }, W = async () => {
      if (V.info("[翻译设置] 开始下载离线模型..."), !await S()) {
        ze.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await Ia(), await S();
      } catch (w) {
        V.error("[翻译设置] 修复离线翻译运行时失败:", w), ze.msg(w instanceof Error && w.message ? w.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      i.value = !0, g(), bi((w) => {
        const z = w.file || "";
        w.status === "initiate" ? I(z, 0, "downloading") : w.status === "progress" && w.progress !== void 0 ? I(z, Math.round(w.progress), "downloading") : w.status === "done" && I(z, 100, "done");
      });
      try {
        await Qa(), f.value.forEach((w) => {
          w.status !== "done" && (w.status = "done"), w.progress = 100;
        }), a.value = !0, r.value = !0, s.value = await qn(), V.info("[翻译设置] 模型下载并加载成功，更新后端激活状态为 true"), await L("set_offline_model_activated", { activated: !0 }), ze.msg(t("translation.modelLoadSuccess"));
      } catch (w) {
        V.error("[翻译设置] 模型下载失败:", w), f.value.forEach((z) => {
          (z.status === "downloading" || z.status === "pending") && (z.status = "error");
        }), a.value = !1, ze.msg(w instanceof Error && w.message ? w.message : t("translation.modelLoadFailed"), "error");
      } finally {
        i.value = !1, bi(null), a.value = xo(), s.value = await qn(), V.info(`[翻译设置] 最终状态 - 内存加载: ${a.value}, 缓存存在: ${s.value.isCached}`);
      }
    }, Q = async () => {
      if (V.info("[翻译设置] 开始激活离线模型..."), !await S()) {
        ze.msg(t("translation.runtimeMissingInstallFirst"), "error");
        return;
      }
      try {
        await Ia(), await S();
      } catch (w) {
        V.error("[翻译设置] 修复离线翻译运行时失败:", w), ze.msg(w instanceof Error && w.message ? w.message : t("translation.runtimeInstallFailed"), "error");
        return;
      }
      i.value = !0;
      try {
        await Qa(), a.value = !0, r.value = !0, V.info("[翻译设置] 模型激活成功，更新后端激活状态为 true"), await L("set_offline_model_activated", { activated: !0 }), ze.msg(t("translation.modelLoadSuccess"));
      } catch (w) {
        V.error("[翻译设置] 模型激活失败:", w), a.value = !1, ze.msg(w instanceof Error && w.message ? w.message : t("translation.modelLoadFailed"), "error");
      } finally {
        i.value = !1, a.value = xo(), V.info(`[翻译设置] 激活后状态 - 内存加载: ${a.value}`);
      }
    }, ie = async () => {
      V.info("[翻译设置] 开始删除离线模型..."), u.value = !0;
      try {
        await Kw(), await Gw(), a.value = !1, r.value = !1, s.value = { isCached: !1, cacheType: "none" }, V.info("[翻译设置] 模型删除成功，更新后端激活状态为 false"), await L("set_offline_model_activated", { activated: !1 }), ze.msg(t("translation.modelDeleted"));
      } catch (w) {
        V.error("[翻译设置] 模型删除失败:", w), ze.msg(t("translation.modelDeleteFailed"), "error");
      } finally {
        u.value = !1, a.value = xo(), s.value = await qn(), V.info(`[翻译设置] 删除后状态 - 内存加载: ${a.value}, 缓存存在: ${s.value.isCached}`);
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
      const w = xo(), z = jw();
      s.value = await qn(), V.info(`[翻译设置] 前端状态 - 内存加载: ${w}, 正在初始化: ${z}, 缓存存在: ${s.value.isCached}`), a.value = w, i.value = z;
      try {
        const Y = await L("get_offline_model_activated");
        V.info(`[翻译设置] 后端激活状态: ${Y}`), r.value = Y, Y && !s.value.isCached && (V.info("[翻译设置] 后端已激活但缓存不存在，重置后端状态"), await L("set_offline_model_activated", { activated: !1 }), r.value = !1), !Y && w && (V.info("[翻译设置] 内存已加载但后端未标记，同步后端状态为 true"), await L("set_offline_model_activated", { activated: !0 }), r.value = !0);
      } catch (Y) {
        V.error("[翻译设置] 处理激活状态失败:", Y);
      }
    }), (w, z) => {
      const Y = As, P = Rs, F = oy;
      return _(), R("div", x1, [
        H(" 固定标题 "),
        y("div", R1, [
          y(
            "h3",
            A1,
            U(w.$t("translation.title")),
            1
            /* TEXT */
          )
        ]),
        H(" 可滚动内容 "),
        y("main", M1, [
          H(" 默认翻译引擎 "),
          y("section", z1, [
            y("div", N1, [
              y(
                "div",
                F1,
                U(w.$t("translation.defaultEngine")),
                1
                /* TEXT */
              ),
              y(
                "div",
                B1,
                U(w.$t("translation.defaultEngineDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", V1, [
              N(P, {
                class: "summarize-input !w-36",
                modelValue: o.value,
                "onUpdate:modelValue": z[0] || (z[0] = (E) => o.value = E),
                onChange: G
              }, {
                default: Z(() => [
                  (_(!0), R(
                    $e,
                    null,
                    st(p.value, (E) => (_(), q(Y, {
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
          y("section", D1, [
            y("div", H1, [
              y(
                "div",
                j1,
                U(w.$t("translation.offlineModel")),
                1
                /* TEXT */
              ),
              y(
                "div",
                W1,
                U(w.$t("translation.offlineModelDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", U1, [
              y("div", K1, [
                y(
                  "span",
                  {
                    class: M(["min-w-0 break-words text-sm font-medium", v.value])
                  },
                  U(m.value),
                  3
                  /* TEXT, CLASS */
                ),
                !c.value && !i.value ? (_(), q(l(Ro), {
                  key: 0,
                  type: "primary",
                  size: "small",
                  loading: d.value,
                  onClick: O
                }, {
                  default: Z(() => [
                    nn(
                      U(w.$t("translation.installRuntime")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading"])) : H("v-if", !0),
                c.value && !h.value && !i.value ? (_(), q(l(Ro), {
                  key: 1,
                  type: "primary",
                  size: "small",
                  onClick: W
                }, {
                  default: Z(() => [
                    nn(
                      U(w.$t("translation.loadModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : H("v-if", !0),
                c.value && h.value && !a.value && !r.value && !i.value ? (_(), q(l(Ro), {
                  key: 2,
                  type: "primary",
                  size: "small",
                  onClick: Q
                }, {
                  default: Z(() => [
                    nn(
                      U(w.$t("translation.activateModel")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })) : H("v-if", !0),
                h.value && !i.value ? (_(), q(l(Ro), {
                  key: 3,
                  type: "default",
                  size: "small",
                  onClick: ie,
                  loading: u.value
                }, {
                  default: Z(() => [
                    nn(
                      U(w.$t("translation.deleteModel")),
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
          i.value ? (_(), R("section", G1, [
            y("div", Z1, [
              y(
                "div",
                Y1,
                U(w.$t("translation.downloadProgress")),
                1
                /* TEXT */
              ),
              y(
                "div",
                q1,
                U(w.$t("translation.downloadProgressDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", J1, [
              y("div", X1, [
                (_(!0), R(
                  $e,
                  null,
                  st(f.value, (E) => (_(), R("div", {
                    key: E.file,
                    class: "flex items-center gap-3 py-1"
                  }, [
                    y("span", Q1, [
                      E.status === "done" ? (_(), R("span", e2, "✓")) : E.status === "error" ? (_(), R("span", t2, "✗")) : E.status === "downloading" ? (_(), R("span", n2, "↓")) : (_(), R("span", o2, "○"))
                    ]),
                    y("span", {
                      class: "w-64 truncate text-sm text-panel-text-secondary",
                      title: E.file
                    }, U(E.file), 9, a2),
                    y(
                      "span",
                      s2,
                      U(E.size),
                      1
                      /* TEXT */
                    ),
                    y("div", r2, [
                      E.status === "downloading" ? (_(), q(F, {
                        key: 0,
                        percentage: E.progress,
                        "stroke-width": 6,
                        "show-text": !0,
                        "text-inside": !1
                      }, null, 8, ["percentage"])) : E.status === "done" ? (_(), R(
                        "span",
                        i2,
                        U(w.$t("translation.completed")),
                        1
                        /* TEXT */
                      )) : E.status === "error" ? (_(), R(
                        "span",
                        l2,
                        U(w.$t("translation.failed")),
                        1
                        /* TEXT */
                      )) : (_(), R(
                        "span",
                        u2,
                        U(w.$t("translation.waiting")),
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
          k.value && !i.value ? (_(), R("section", c2, [
            y("div", d2, [
              y(
                "div",
                f2,
                U(w.$t("translation.modelInfo")),
                1
                /* TEXT */
              ),
              y(
                "div",
                p2,
                U(w.$t("translation.modelInfoDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", m2, [
              y("div", h2, [
                y("div", v2, [
                  y("div", g2, [
                    y(
                      "span",
                      y2,
                      U(w.$t("translation.modelName")),
                      1
                      /* TEXT */
                    ),
                    z[1] || (z[1] = y(
                      "span",
                      { class: "info-value" },
                      "Xenova/opus-mt-en-zh",
                      -1
                      /* HOISTED */
                    ))
                  ]),
                  y("div", b2, [
                    y(
                      "span",
                      w2,
                      U(w.$t("translation.modelSize")),
                      1
                      /* TEXT */
                    ),
                    y(
                      "span",
                      _2,
                      U(s.value.estimatedSize || "~300MB"),
                      1
                      /* TEXT */
                    )
                  ]),
                  y("div", S2, [
                    y(
                      "span",
                      k2,
                      U(w.$t("translation.supportLang")),
                      1
                      /* TEXT */
                    ),
                    y(
                      "span",
                      C2,
                      U(w.$t("translation.enToZh")),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])
            ])
          ])) : H("v-if", !0),
          H(" 使用说明 "),
          y("section", T2, [
            y("div", E2, [
              y(
                "div",
                P2,
                U(w.$t("translation.usage")),
                1
                /* TEXT */
              ),
              y(
                "div",
                O2,
                U(w.$t("translation.usageDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", $2, [
              y("div", I2, [
                y("div", L2, [
                  z[2] || (z[2] = y(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    x2,
                    U(w.$t("translation.usageTip1")),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", R2, [
                  z[3] || (z[3] = y(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    A2,
                    U(w.$t("translation.usageTip2")),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", M2, [
                  z[4] || (z[4] = y(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    z2,
                    U(w.$t("translation.usageTip3")),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", N2, [
                  z[5] || (z[5] = y(
                    "span",
                    { class: "tip-icon" },
                    "•",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    F2,
                    U(w.$t("translation.usageTip4")),
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
}), H2 = /* @__PURE__ */ wo(D2, [["__scopeId", "data-v-6fcd3312"]]), j2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: H2
}, Symbol.toStringTag, { value: "Module" })), W2 = { class: "settings-panel" }, U2 = { class: "panel-header" }, K2 = { class: "panel-title" }, G2 = { class: "panel-content" }, Z2 = { class: "summarize-section" }, Y2 = { class: "summarize-label" }, q2 = { class: "summarize-label-title" }, J2 = { class: "summarize-label-desc" }, X2 = { class: "summarize-input-wrapper line-height-control" }, Q2 = { class: "line-height-value" }, e_ = { class: "summarize-section" }, t_ = { class: "summarize-label" }, n_ = { class: "summarize-label-title" }, o_ = { class: "summarize-label-desc" }, a_ = { class: "summarize-input-wrapper image-scale-control" }, s_ = { class: "image-scale-value" }, r_ = { class: "summarize-section" }, i_ = { class: "summarize-label" }, l_ = { class: "summarize-label-title" }, u_ = { class: "summarize-label-desc" }, c_ = { class: "summarize-input-wrapper" }, d_ = { class: "summarize-section" }, f_ = { class: "summarize-label" }, p_ = { class: "summarize-label-title" }, m_ = { class: "summarize-label-desc" }, h_ = { class: "summarize-input-wrapper" }, v_ = { class: "summarize-section transparent-input" }, g_ = { class: "summarize-label" }, y_ = { class: "summarize-label-title" }, b_ = { class: "summarize-label-desc" }, w_ = { class: "summarize-input-wrapper" }, __ = { class: "summarize-section transparent-input" }, S_ = { class: "summarize-label" }, k_ = { class: "summarize-label-title" }, C_ = { class: "summarize-label-desc" }, T_ = { class: "summarize-input-wrapper" }, E_ = { class: "summarize-section transparent-input" }, P_ = { class: "summarize-label" }, O_ = { class: "summarize-label-title" }, $_ = { class: "summarize-label-desc" }, I_ = { class: "summarize-input-wrapper" }, L_ = { class: "preview-box" }, x_ = /* @__PURE__ */ K({
  name: "AttachmentSettings",
  __name: "index",
  setup(e) {
    const { t } = ns(), n = Tw(), o = A({
      pathTemplate: "assets/${noteFileName}/",
      filenameFormat: "snippets-code",
      defaultImageScalePercent: 100,
      responsiveImages: !0,
      showImagePath: !0
    }), a = A(!1), r = A(!1), s = A(n.editorLineHeight), i = b(() => {
      const p = t("settings.attachment.exampleNoteName"), m = u(o.value.filenameFormat);
      return o.value.pathTemplate.replace("${noteFileName}", p) + m;
    });
    function u(p) {
      const m = /* @__PURE__ */ new Date(), v = m.toISOString().slice(0, 10).replace(/-/g, ""), k = m.toTimeString().slice(0, 8).replace(/:/g, "");
      switch (p) {
        case "snippets-code":
          return `Pasted image ${v}${k}.png`;
        case "simple":
          return `image-${v}-${k}.png`;
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
          await L1(o.value), ze.msg(t("settings.attachment.configSaved"));
        } catch (p) {
          console.error("保存配置失败:", p), ze.msg(t("settings.attachment.configSaveFailed"), "error");
        } finally {
          r.value = !1;
        }
      }
    }
    const d = async (p) => {
      const m = Array.isArray(p) ? p[0] : p;
      o.value.defaultImageScalePercent = Math.min(200, Math.max(25, Math.round(m))), await c();
    }, f = async (p, m) => {
      o.value[p] = m, await c();
    }, h = async (p) => {
      const m = Array.isArray(p) ? p[0] : p;
      try {
        await n.updateEditorLineHeight(m);
      } catch (v) {
        s.value = n.editorLineHeight, ze.msg(`${t("settings.settingFailed")}: ${v}`, "error");
      }
    };
    return re(() => n.editorLineHeight, (p) => {
      s.value = p;
    }), Pe(async () => {
      a.value = !0;
      try {
        o.value = await I1(!0);
      } catch (p) {
        console.error("加载配置失败:", p);
      } finally {
        a.value = !1;
      }
    }), (p, m) => {
      const v = Ly, k = vs, g = As, I = Rs;
      return _(), R("div", W2, [
        H(" 固定标题 "),
        y("div", U2, [
          y(
            "h3",
            K2,
            U(p.$t("settings.attachment.title")),
            1
            /* TEXT */
          )
        ]),
        H(" 可滚动内容 "),
        y("main", G2, [
          H(" 编辑器行距 "),
          y("section", Z2, [
            y("div", Y2, [
              y(
                "div",
                q2,
                U(p.$t("settings.editorLineHeight")),
                1
                /* TEXT */
              ),
              y(
                "div",
                J2,
                U(p.$t("settings.editorLineHeightDesc")),
                1
                /* TEXT */
              )
            ]),
            y("div", X2, [
              N(v, {
                modelValue: l(s),
                "onUpdate:modelValue": m[0] || (m[0] = (S) => Jn(s) ? s.value = S : null),
                min: 1.2,
                max: 2,
                step: 0.05,
                "show-tooltip": !1,
                onChange: h
              }, null, 8, ["modelValue"]),
              y(
                "span",
                Q2,
                U(l(s).toFixed(2)),
                1
                /* TEXT */
              )
            ])
          ]),
          H(" 图片默认缩放 "),
          y("section", e_, [
            y("div", t_, [
              y(
                "div",
                n_,
                U(p.$t("settings.attachment.defaultImageScale")),
                1
                /* TEXT */
              ),
              y(
                "div",
                o_,
                U(p.$t("settings.attachment.defaultImageScaleHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", a_, [
              N(v, {
                modelValue: l(o).defaultImageScalePercent,
                "onUpdate:modelValue": m[1] || (m[1] = (S) => l(o).defaultImageScalePercent = S),
                min: 25,
                max: 200,
                step: 5,
                "show-tooltip": !1,
                disabled: l(r),
                onChange: d
              }, null, 8, ["modelValue", "disabled"]),
              y(
                "span",
                s_,
                U(l(o).defaultImageScalePercent) + "%",
                1
                /* TEXT */
              )
            ])
          ]),
          H(" 图片响应式适配 "),
          y("section", r_, [
            y("div", i_, [
              y(
                "div",
                l_,
                U(p.$t("settings.attachment.responsiveImages")),
                1
                /* TEXT */
              ),
              y(
                "div",
                u_,
                U(p.$t("settings.attachment.responsiveImagesHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", c_, [
              N(l(_i), {
                "model-value": l(o).responsiveImages,
                disabled: l(r),
                "active-text": p.$t("common.on"),
                "inactive-text": p.$t("common.off"),
                onChange: m[2] || (m[2] = (S) => f("responsiveImages", S))
              }, null, 8, ["model-value", "disabled", "active-text", "inactive-text"])
            ])
          ]),
          H(" 图片附件路径 "),
          y("section", d_, [
            y("div", f_, [
              y(
                "div",
                p_,
                U(p.$t("settings.attachment.showImagePath")),
                1
                /* TEXT */
              ),
              y(
                "div",
                m_,
                U(p.$t("settings.attachment.showImagePathHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", h_, [
              N(l(_i), {
                "model-value": l(o).showImagePath,
                disabled: l(r),
                "active-text": p.$t("common.on"),
                "inactive-text": p.$t("common.off"),
                onChange: m[3] || (m[3] = (S) => f("showImagePath", S))
              }, null, 8, ["model-value", "disabled", "active-text", "inactive-text"])
            ])
          ]),
          H(" 附件路径模板 "),
          y("section", v_, [
            y("div", g_, [
              y(
                "div",
                y_,
                U(p.$t("settings.attachment.pathTemplate")),
                1
                /* TEXT */
              ),
              y(
                "div",
                b_,
                U(p.$t("settings.attachment.pathTemplateHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", w_, [
              N(k, {
                class: "summarize-input",
                modelValue: l(o).pathTemplate,
                "onUpdate:modelValue": m[4] || (m[4] = (S) => l(o).pathTemplate = S),
                placeholder: p.$t("settings.attachment.pathTemplatePlaceholder"),
                disabled: l(r),
                onBlur: c
              }, null, 8, ["modelValue", "placeholder", "disabled"])
            ])
          ]),
          H(" 文件名生成格式 "),
          y("section", __, [
            y("div", S_, [
              y(
                "div",
                k_,
                U(p.$t("settings.attachment.filenameFormat")),
                1
                /* TEXT */
              ),
              y(
                "div",
                C_,
                U(p.$t("settings.attachment.filenameFormatHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", T_, [
              N(I, {
                class: "summarize-input !w-64",
                modelValue: l(o).filenameFormat,
                "onUpdate:modelValue": m[5] || (m[5] = (S) => l(o).filenameFormat = S),
                disabled: l(r),
                onChange: c
              }, {
                default: Z(() => [
                  N(g, {
                    label: p.$t("settings.attachment.formatObsidian"),
                    value: "obsidian"
                  }, null, 8, ["label"]),
                  N(g, {
                    label: p.$t("settings.attachment.formatSimple"),
                    value: "simple"
                  }, null, 8, ["label"]),
                  N(g, {
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
          y("section", E_, [
            y("div", P_, [
              y(
                "div",
                O_,
                U(p.$t("settings.attachment.pathPreview")),
                1
                /* TEXT */
              ),
              y(
                "div",
                $_,
                U(p.$t("settings.attachment.pathPreviewHint")),
                1
                /* TEXT */
              )
            ]),
            y("div", I_, [
              y("div", L_, [
                y(
                  "code",
                  null,
                  U(l(i)),
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
}), R_ = /* @__PURE__ */ wo(x_, [["__scopeId", "data-v-1e36bf0d"]]), A_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: R_
}, Symbol.toStringTag, { value: "Module" }));
export {
  F_ as activate
};
