var qf = Object.defineProperty;
var Zf = (e, t, n) => t in e ? qf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $e = (e, t, n) => Zf(e, typeof t != "symbol" ? t + "" : t, n);
import * as Va from "vue";
import { inject as Ne, createVNode as D, defineAsyncComponent as Xf, ref as j, shallowRef as Qn, computed as I, watch as ve, onMounted as nt, onUnmounted as ga, defineComponent as ne, h as zc, Text as Bc, Fragment as Tt, createElementBlock as K, openBlock as x, normalizeClass as U, createCommentVNode as Q, renderSlot as me, createElementVNode as w, getCurrentInstance as It, unref as c, watchEffect as Vc, readonly as Ls, getCurrentScope as Qf, onScopeDispose as Jf, nextTick as Je, isRef as po, warn as ed, provide as _n, mergeProps as Rr, toRef as xn, useAttrs as td, useSlots as nd, normalizeStyle as vt, createBlock as se, withCtx as oe, resolveDynamicComponent as Ot, withModifiers as We, toDisplayString as V, onBeforeUnmount as Tn, Transition as Ur, withDirectives as ht, vShow as Bn, reactive as ur, onActivated as rd, onUpdated as jc, cloneVNode as od, Comment as ad, Teleport as sd, onBeforeMount as ld, onDeactivated as id, createTextVNode as Wt, withKeys as Gt, createSlots as cd, toRaw as ud, toRefs as Is, resolveComponent as lr, resolveDirective as fd, toHandlerKey as dd, renderList as xr, vModelText as mo, shallowReactive as pd, isVNode as ho, render as ta } from "vue";
var md = {
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
function hd() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function gd(e, t, n) {
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
var vd = Symbol("icon-context");
function xt(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = hd(), i = Ne(vd, md);
      return function() {
        var l = a.size, u = a.strokeWidth, f = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, b = a.fill, v = a.spin, g = gd(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: f,
          strokeLinejoin: p,
          theme: m,
          fill: b
        }, i), E = [i.prefix + "-icon"];
        return E.push(i.prefix + "-icon-" + e), t && i.rtl && E.push(i.prefix + "-icon-rtl"), v && E.push(i.prefix + "-icon-spin"), D("span", {
          class: E.join(" ")
        }, [n(g)]);
      };
    }
  };
  return r;
}
const bd = xt("add", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M24 16V32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M16 24L32 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yd = xt("copy", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Il = xt("delete", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), _d = xt("dislike", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M24 31L21 26L28 20L19 15L20 9.19942C18.4999 8.43256 16.8004 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C31.1996 8 29.5001 8.43256 28 9.19942",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wd = xt("down", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), kd = xt("edit", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M7 42H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Td = xt("like", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ed = xt("message", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M14 18L32 18",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M14 26H32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M14 34H24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Sd = xt("more", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), D("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), D("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), Rl = xt("refresh", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ad = xt("right", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M19 12L31 24L19 36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xl = xt("robot", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("rect", {
    x: "9",
    y: "17",
    width: "30",
    height: "26",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M33 9L28 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M15 9L20 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("circle", {
    cx: "34",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), D("circle", {
    cx: "14",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), D("rect", {
    x: "16",
    y: "24",
    width: "16",
    height: "8",
    rx: "4",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), D("path", {
    d: "M9 24H4V34H9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M39 24H44V34H39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Cd = xt("search", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Od = xt("send", !0, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M43.0001 5L22.1001 25.9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), rs = xt("setting-two", !1, function(e) {
  return D("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [D("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), D("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), AS = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => wE)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: rs,
    component: Xf(() => Promise.resolve().then(() => TS))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ld(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Nl = typeof window < "u", mr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Id = (e, t, n) => Rd({ l: e, k: t, s: n }), Rd = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), pt = (e) => typeof e == "number" && isFinite(e), xd = (e) => Rs(e) === "[object Date]", na = (e) => Rs(e) === "[object RegExp]", va = (e) => Ce(e) && Object.keys(e).length === 0, bt = Object.assign, Nd = Object.create, Me = (e = null) => Nd(e);
let Pl;
const Zo = () => Pl || (Pl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Me());
function $l(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Ml(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Pd(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${Ml(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${Ml(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const $d = Object.prototype.hasOwnProperty;
function tn(e, t) {
  return $d.call(e, t);
}
const tt = Array.isArray, Ge = (e) => typeof e == "function", re = (e) => typeof e == "string", et = (e) => typeof e == "boolean", Oe = (e) => e !== null && typeof e == "object", Md = (e) => Oe(e) && Ge(e.then) && Ge(e.catch), Uc = Object.prototype.toString, Rs = (e) => Uc.call(e), Ce = (e) => Rs(e) === "[object Object]", Dd = (e) => e == null ? "" : tt(e) || Ce(e) && e.toString === Uc ? JSON.stringify(e, null, 2) : String(e);
function xs(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Fo = (e) => !Oe(e) || tt(e);
function Xo(e, t) {
  if (Fo(e) || Fo(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Oe(r[a]) && !Oe(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : Me()), Fo(o[a]) || Fo(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Fd(e, t, n) {
  return { line: e, column: t, offset: n };
}
function os(e, t, n) {
  return { start: e, end: t };
}
const Ie = {
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
}, zd = 17;
function ba(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Bd(e) {
  throw e;
}
const cn = " ", Vd = "\r", kt = `
`, jd = "\u2028", Ud = "\u2029";
function Hd(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (O) => t[O] === Vd && t[O + 1] === kt, i = (O) => t[O] === kt, l = (O) => t[O] === Ud, u = (O) => t[O] === jd, f = (O) => s(O) || i(O) || l(O) || u(O), p = () => n, m = () => r, b = () => o, v = () => a, g = (O) => s(O) || l(O) || u(O) ? kt : t[O], E = () => g(n), d = () => g(n + a);
  function A() {
    return a = 0, f(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function L() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function S() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function _(O = 0) {
    a = O;
  }
  function C() {
    const O = n + a;
    for (; O !== n; )
      A();
    a = 0;
  }
  return {
    index: p,
    line: m,
    column: b,
    peekOffset: v,
    charAt: g,
    currentChar: E,
    currentPeek: d,
    next: A,
    peek: L,
    reset: S,
    resetPeek: _,
    skipToPeek: C
  };
}
const An = void 0, Wd = ".", Dl = "'", Gd = "tokenizer";
function Kd(e, t = {}) {
  const n = t.location !== !1, r = Hd(e), o = () => r.index(), a = () => Fd(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  }, u = () => l, { onError: f } = t;
  function p(h, k, $, ...W) {
    const ge = u();
    if (k.column += $, k.offset += $, f) {
      const ie = n ? os(ge.startLoc, k) : null, T = ba(h, ie, {
        domain: Gd,
        args: W
      });
      f(T);
    }
  }
  function m(h, k, $) {
    h.endLoc = a(), h.currentType = k;
    const W = { type: k };
    return n && (W.loc = os(h.startLoc, h.endLoc)), $ != null && (W.value = $), W;
  }
  const b = (h) => m(
    h,
    13
    /* TokenTypes.EOF */
  );
  function v(h, k) {
    return h.currentChar() === k ? (h.next(), k) : (p(Ie.EXPECTED_TOKEN, a(), 0, k), "");
  }
  function g(h) {
    let k = "";
    for (; h.currentPeek() === cn || h.currentPeek() === kt; )
      k += h.currentPeek(), h.peek();
    return k;
  }
  function E(h) {
    const k = g(h);
    return h.skipToPeek(), k;
  }
  function d(h) {
    if (h === An)
      return !1;
    const k = h.charCodeAt(0);
    return k >= 97 && k <= 122 || // a-z
    k >= 65 && k <= 90 || // A-Z
    k === 95;
  }
  function A(h) {
    if (h === An)
      return !1;
    const k = h.charCodeAt(0);
    return k >= 48 && k <= 57;
  }
  function L(h, k) {
    const { currentType: $ } = k;
    if ($ !== 2)
      return !1;
    g(h);
    const W = d(h.currentPeek());
    return h.resetPeek(), W;
  }
  function S(h, k) {
    const { currentType: $ } = k;
    if ($ !== 2)
      return !1;
    g(h);
    const W = h.currentPeek() === "-" ? h.peek() : h.currentPeek(), ge = A(W);
    return h.resetPeek(), ge;
  }
  function _(h, k) {
    const { currentType: $ } = k;
    if ($ !== 2)
      return !1;
    g(h);
    const W = h.currentPeek() === Dl;
    return h.resetPeek(), W;
  }
  function C(h, k) {
    const { currentType: $ } = k;
    if ($ !== 7)
      return !1;
    g(h);
    const W = h.currentPeek() === ".";
    return h.resetPeek(), W;
  }
  function O(h, k) {
    const { currentType: $ } = k;
    if ($ !== 8)
      return !1;
    g(h);
    const W = d(h.currentPeek());
    return h.resetPeek(), W;
  }
  function H(h, k) {
    const { currentType: $ } = k;
    if (!($ === 7 || $ === 11))
      return !1;
    g(h);
    const W = h.currentPeek() === ":";
    return h.resetPeek(), W;
  }
  function G(h, k) {
    const { currentType: $ } = k;
    if ($ !== 9)
      return !1;
    const W = () => {
      const ie = h.currentPeek();
      return ie === "{" ? d(h.peek()) : ie === "@" || ie === "|" || ie === ":" || ie === "." || ie === cn || !ie ? !1 : ie === kt ? (h.peek(), W()) : ue(h, !1);
    }, ge = W();
    return h.resetPeek(), ge;
  }
  function te(h) {
    g(h);
    const k = h.currentPeek() === "|";
    return h.resetPeek(), k;
  }
  function ue(h, k = !0) {
    const $ = (ge = !1, ie = "") => {
      const T = h.currentPeek();
      return T === "{" || T === "@" || !T ? ge : T === "|" ? !(ie === cn || ie === kt) : T === cn ? (h.peek(), $(!0, cn)) : T === kt ? (h.peek(), $(!0, kt)) : !0;
    }, W = $();
    return k && h.resetPeek(), W;
  }
  function ee(h, k) {
    const $ = h.currentChar();
    return $ === An ? An : k($) ? (h.next(), $) : null;
  }
  function he(h) {
    const k = h.charCodeAt(0);
    return k >= 97 && k <= 122 || // a-z
    k >= 65 && k <= 90 || // A-Z
    k >= 48 && k <= 57 || // 0-9
    k === 95 || // _
    k === 36;
  }
  function de(h) {
    return ee(h, he);
  }
  function N(h) {
    const k = h.charCodeAt(0);
    return k >= 97 && k <= 122 || // a-z
    k >= 65 && k <= 90 || // A-Z
    k >= 48 && k <= 57 || // 0-9
    k === 95 || // _
    k === 36 || // $
    k === 45;
  }
  function M(h) {
    return ee(h, N);
  }
  function z(h) {
    const k = h.charCodeAt(0);
    return k >= 48 && k <= 57;
  }
  function le(h) {
    return ee(h, z);
  }
  function J(h) {
    const k = h.charCodeAt(0);
    return k >= 48 && k <= 57 || // 0-9
    k >= 65 && k <= 70 || // A-F
    k >= 97 && k <= 102;
  }
  function be(h) {
    return ee(h, J);
  }
  function Z(h) {
    let k = "", $ = "";
    for (; k = le(h); )
      $ += k;
    return $;
  }
  function Pe(h) {
    let k = "";
    for (; ; ) {
      const $ = h.currentChar();
      if ($ === "{" || $ === "}" || $ === "@" || $ === "|" || !$)
        break;
      if ($ === cn || $ === kt)
        if (ue(h))
          k += $, h.next();
        else {
          if (te(h))
            break;
          k += $, h.next();
        }
      else
        k += $, h.next();
    }
    return k;
  }
  function Se(h) {
    E(h);
    let k = "", $ = "";
    for (; k = M(h); )
      $ += k;
    const W = h.currentChar();
    if (W && W !== "}" && W !== An && W !== cn && W !== kt && W !== "　") {
      const ge = lt(h);
      return p(Ie.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, $ + ge), $ + ge;
    }
    return h.currentChar() === An && p(Ie.UNTERMINATED_CLOSING_BRACE, a(), 0), $;
  }
  function _e(h) {
    E(h);
    let k = "";
    return h.currentChar() === "-" ? (h.next(), k += `-${Z(h)}`) : k += Z(h), h.currentChar() === An && p(Ie.UNTERMINATED_CLOSING_BRACE, a(), 0), k;
  }
  function Ve(h) {
    return h !== Dl && h !== kt;
  }
  function ke(h) {
    E(h), v(h, "'");
    let k = "", $ = "";
    for (; k = ee(h, Ve); )
      k === "\\" ? $ += Ye(h) : $ += k;
    const W = h.currentChar();
    return W === kt || W === An ? (p(Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), W === kt && (h.next(), v(h, "'")), $) : (v(h, "'"), $);
  }
  function Ye(h) {
    const k = h.currentChar();
    switch (k) {
      case "\\":
      case "'":
        return h.next(), `\\${k}`;
      case "u":
        return ce(h, k, 4);
      case "U":
        return ce(h, k, 6);
      default:
        return p(Ie.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, k), "";
    }
  }
  function ce(h, k, $) {
    v(h, k);
    let W = "";
    for (let ge = 0; ge < $; ge++) {
      const ie = be(h);
      if (!ie) {
        p(Ie.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${k}${W}${h.currentChar()}`);
        break;
      }
      W += ie;
    }
    return `\\${k}${W}`;
  }
  function qe(h) {
    return h !== "{" && h !== "}" && h !== cn && h !== kt;
  }
  function lt(h) {
    E(h);
    let k = "", $ = "";
    for (; k = ee(h, qe); )
      $ += k;
    return $;
  }
  function je(h) {
    let k = "", $ = "";
    for (; k = de(h); )
      $ += k;
    return $;
  }
  function yt(h) {
    const k = ($) => {
      const W = h.currentChar();
      return W === "{" || W === "@" || W === "|" || W === "(" || W === ")" || !W || W === cn ? $ : ($ += W, h.next(), k($));
    };
    return k("");
  }
  function it(h) {
    E(h);
    const k = v(
      h,
      "|"
      /* TokenChars.Pipe */
    );
    return E(h), k;
  }
  function ct(h, k) {
    let $ = null;
    switch (h.currentChar()) {
      case "{":
        return k.braceNest >= 1 && p(Ie.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), h.next(), $ = m(
          k,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(h), k.braceNest++, $;
      case "}":
        return k.braceNest > 0 && k.currentType === 2 && p(Ie.EMPTY_PLACEHOLDER, a(), 0), h.next(), $ = m(
          k,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), k.braceNest--, k.braceNest > 0 && E(h), k.inLinked && k.braceNest === 0 && (k.inLinked = !1), $;
      case "@":
        return k.braceNest > 0 && p(Ie.UNTERMINATED_CLOSING_BRACE, a(), 0), $ = ut(h, k) || b(k), k.braceNest = 0, $;
      default: {
        let ge = !0, ie = !0, T = !0;
        if (te(h))
          return k.braceNest > 0 && p(Ie.UNTERMINATED_CLOSING_BRACE, a(), 0), $ = m(k, 1, it(h)), k.braceNest = 0, k.inLinked = !1, $;
        if (k.braceNest > 0 && (k.currentType === 4 || k.currentType === 5 || k.currentType === 6))
          return p(Ie.UNTERMINATED_CLOSING_BRACE, a(), 0), k.braceNest = 0, B(h, k);
        if (ge = L(h, k))
          return $ = m(k, 4, Se(h)), E(h), $;
        if (ie = S(h, k))
          return $ = m(k, 5, _e(h)), E(h), $;
        if (T = _(h, k))
          return $ = m(k, 6, ke(h)), E(h), $;
        if (!ge && !ie && !T)
          return $ = m(k, 12, lt(h)), p(Ie.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, $.value), E(h), $;
        break;
      }
    }
    return $;
  }
  function ut(h, k) {
    const { currentType: $ } = k;
    let W = null;
    const ge = h.currentChar();
    switch (($ === 7 || $ === 8 || $ === 11 || $ === 9) && (ge === kt || ge === cn) && p(Ie.INVALID_LINKED_FORMAT, a(), 0), ge) {
      case "@":
        return h.next(), W = m(
          k,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), k.inLinked = !0, W;
      case ".":
        return E(h), h.next(), m(
          k,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(h), h.next(), m(
          k,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return te(h) ? (W = m(k, 1, it(h)), k.braceNest = 0, k.inLinked = !1, W) : C(h, k) || H(h, k) ? (E(h), ut(h, k)) : O(h, k) ? (E(h), m(k, 11, je(h))) : G(h, k) ? (E(h), ge === "{" ? ct(h, k) || W : m(k, 10, yt(h))) : ($ === 7 && p(Ie.INVALID_LINKED_FORMAT, a(), 0), k.braceNest = 0, k.inLinked = !1, B(h, k));
    }
  }
  function B(h, k) {
    let $ = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (k.braceNest > 0)
      return ct(h, k) || b(k);
    if (k.inLinked)
      return ut(h, k) || b(k);
    switch (h.currentChar()) {
      case "{":
        return ct(h, k) || b(k);
      case "}":
        return p(Ie.UNBALANCED_CLOSING_BRACE, a(), 0), h.next(), m(
          k,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return ut(h, k) || b(k);
      default: {
        if (te(h))
          return $ = m(k, 1, it(h)), k.braceNest = 0, k.inLinked = !1, $;
        if (ue(h))
          return m(k, 0, Pe(h));
        break;
      }
    }
    return $;
  }
  function q() {
    const { currentType: h, offset: k, startLoc: $, endLoc: W } = l;
    return l.lastType = h, l.lastOffset = k, l.lastStartLoc = $, l.lastEndLoc = W, l.offset = o(), l.startLoc = a(), r.currentChar() === An ? m(
      l,
      13
      /* TokenTypes.EOF */
    ) : B(r, l);
  }
  return {
    nextToken: q,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const Yd = "parser", qd = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Zd(e, t, n) {
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
function Xd(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(d, A, L, S, ..._) {
    const C = d.currentPosition();
    if (C.offset += S, C.column += S, n) {
      const O = t ? os(L, C) : null, H = ba(A, O, {
        domain: Yd,
        args: _
      });
      n(H);
    }
  }
  function o(d, A, L) {
    const S = { type: d };
    return t && (S.start = A, S.end = A, S.loc = { start: L, end: L }), S;
  }
  function a(d, A, L, S) {
    t && (d.end = A, d.loc && (d.loc.end = L));
  }
  function s(d, A) {
    const L = d.context(), S = o(3, L.offset, L.startLoc);
    return S.value = A, a(S, d.currentOffset(), d.currentPosition()), S;
  }
  function i(d, A) {
    const L = d.context(), { lastOffset: S, lastStartLoc: _ } = L, C = o(5, S, _);
    return C.index = parseInt(A, 10), d.nextToken(), a(C, d.currentOffset(), d.currentPosition()), C;
  }
  function l(d, A) {
    const L = d.context(), { lastOffset: S, lastStartLoc: _ } = L, C = o(4, S, _);
    return C.key = A, d.nextToken(), a(C, d.currentOffset(), d.currentPosition()), C;
  }
  function u(d, A) {
    const L = d.context(), { lastOffset: S, lastStartLoc: _ } = L, C = o(9, S, _);
    return C.value = A.replace(qd, Zd), d.nextToken(), a(C, d.currentOffset(), d.currentPosition()), C;
  }
  function f(d) {
    const A = d.nextToken(), L = d.context(), { lastOffset: S, lastStartLoc: _ } = L, C = o(8, S, _);
    return A.type !== 11 ? (r(d, Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), C.value = "", a(C, S, _), {
      nextConsumeToken: A,
      node: C
    }) : (A.value == null && r(d, Ie.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, un(A)), C.value = A.value || "", a(C, d.currentOffset(), d.currentPosition()), {
      node: C
    });
  }
  function p(d, A) {
    const L = d.context(), S = o(7, L.offset, L.startLoc);
    return S.value = A, a(S, d.currentOffset(), d.currentPosition()), S;
  }
  function m(d) {
    const A = d.context(), L = o(6, A.offset, A.startLoc);
    let S = d.nextToken();
    if (S.type === 8) {
      const _ = f(d);
      L.modifier = _.node, S = _.nextConsumeToken || d.nextToken();
    }
    switch (S.type !== 9 && r(d, Ie.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, un(S)), S = d.nextToken(), S.type === 2 && (S = d.nextToken()), S.type) {
      case 10:
        S.value == null && r(d, Ie.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, un(S)), L.key = p(d, S.value || "");
        break;
      case 4:
        S.value == null && r(d, Ie.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, un(S)), L.key = l(d, S.value || "");
        break;
      case 5:
        S.value == null && r(d, Ie.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, un(S)), L.key = i(d, S.value || "");
        break;
      case 6:
        S.value == null && r(d, Ie.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, un(S)), L.key = u(d, S.value || "");
        break;
      default: {
        r(d, Ie.UNEXPECTED_EMPTY_LINKED_KEY, A.lastStartLoc, 0);
        const _ = d.context(), C = o(7, _.offset, _.startLoc);
        return C.value = "", a(C, _.offset, _.startLoc), L.key = C, a(L, _.offset, _.startLoc), {
          nextConsumeToken: S,
          node: L
        };
      }
    }
    return a(L, d.currentOffset(), d.currentPosition()), {
      node: L
    };
  }
  function b(d) {
    const A = d.context(), L = A.currentType === 1 ? d.currentOffset() : A.offset, S = A.currentType === 1 ? A.endLoc : A.startLoc, _ = o(2, L, S);
    _.items = [];
    let C = null;
    do {
      const G = C || d.nextToken();
      switch (C = null, G.type) {
        case 0:
          G.value == null && r(d, Ie.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, un(G)), _.items.push(s(d, G.value || ""));
          break;
        case 5:
          G.value == null && r(d, Ie.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, un(G)), _.items.push(i(d, G.value || ""));
          break;
        case 4:
          G.value == null && r(d, Ie.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, un(G)), _.items.push(l(d, G.value || ""));
          break;
        case 6:
          G.value == null && r(d, Ie.UNEXPECTED_LEXICAL_ANALYSIS, A.lastStartLoc, 0, un(G)), _.items.push(u(d, G.value || ""));
          break;
        case 7: {
          const te = m(d);
          _.items.push(te.node), C = te.nextConsumeToken || null;
          break;
        }
      }
    } while (A.currentType !== 13 && A.currentType !== 1);
    const O = A.currentType === 1 ? A.lastOffset : d.currentOffset(), H = A.currentType === 1 ? A.lastEndLoc : d.currentPosition();
    return a(_, O, H), _;
  }
  function v(d, A, L, S) {
    const _ = d.context();
    let C = S.items.length === 0;
    const O = o(1, A, L);
    O.cases = [], O.cases.push(S);
    do {
      const H = b(d);
      C || (C = H.items.length === 0), O.cases.push(H);
    } while (_.currentType !== 13);
    return C && r(d, Ie.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function g(d) {
    const A = d.context(), { offset: L, startLoc: S } = A, _ = b(d);
    return A.currentType === 13 ? _ : v(d, L, S, _);
  }
  function E(d) {
    const A = Kd(d, bt({}, e)), L = A.context(), S = o(0, L.offset, L.startLoc);
    return t && S.loc && (S.loc.source = d), S.body = g(A), e.onCacheKey && (S.cacheKey = e.onCacheKey(d)), L.currentType !== 13 && r(A, Ie.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, d[L.offset] || ""), a(S, A.currentOffset(), A.currentPosition()), S;
  }
  return { parse: E };
}
function un(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Qd(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Fl(e, t) {
  for (let n = 0; n < e.length; n++)
    Ns(e[n], t);
}
function Ns(e, t) {
  switch (e.type) {
    case 1:
      Fl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Fl(e.items, t);
      break;
    case 6: {
      Ns(e.key, t), t.helper(
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
function Jd(e, t = {}) {
  const n = Qd(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ns(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function ep(e) {
  const t = e.body;
  return t.type === 2 ? zl(t) : t.cases.forEach((n) => zl(n)), e;
}
function zl(e) {
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
      e.static = xs(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function Or(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Or(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Or(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Or(n[r]);
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
      Or(t.key), t.k = t.key, delete t.key, t.modifier && (Or(t.modifier), t.m = t.modifier, delete t.modifier);
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
function tp(e, t) {
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
  function l(g, E) {
    s.code += g;
  }
  function u(g, E = !0) {
    const d = E ? r : "";
    l(o ? d + "  ".repeat(g) : d);
  }
  function f(g = !0) {
    const E = ++s.indentLevel;
    g && u(E);
  }
  function p(g = !0) {
    const E = --s.indentLevel;
    g && u(E);
  }
  function m() {
    u(s.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: f,
    deindent: p,
    newline: m,
    helper: (g) => `_${g}`,
    needIndent: () => s.needIndent
  };
}
function np(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Nr(e, t.key), t.modifier ? (e.push(", "), Nr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function rp(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (Nr(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function op(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (Nr(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function ap(e, t) {
  t.body ? Nr(e, t.body) : e.push("null");
}
function Nr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ap(e, t);
      break;
    case 1:
      op(e, t);
      break;
    case 2:
      rp(e, t);
      break;
    case 6:
      np(e, t);
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
const sp = (e, t = {}) => {
  const n = re(t.mode) ? t.mode : "normal", r = re(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = tp(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${xs(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), i.newline()), i.push("return "), Nr(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function lp(e, t = {}) {
  const n = bt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = Xd(n).parse(e);
  return r ? (a && ep(i), o && Or(i), { ast: i, code: "" }) : (Jd(i, n), sp(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function ip() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Zo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function vn(e) {
  return Oe(e) && Ps(e) === 0 && (tn(e, "b") || tn(e, "body"));
}
const Hc = ["b", "body"];
function cp(e) {
  return tr(e, Hc);
}
const Wc = ["c", "cases"];
function up(e) {
  return tr(e, Wc, []);
}
const Gc = ["s", "static"];
function fp(e) {
  return tr(e, Gc);
}
const Kc = ["i", "items"];
function dp(e) {
  return tr(e, Kc, []);
}
const Yc = ["t", "type"];
function Ps(e) {
  return tr(e, Yc);
}
const qc = ["v", "value"];
function zo(e, t) {
  const n = tr(e, qc);
  if (n != null)
    return n;
  throw go(t);
}
const Zc = ["m", "modifier"];
function pp(e) {
  return tr(e, Zc);
}
const Xc = ["k", "key"];
function mp(e) {
  const t = tr(e, Xc);
  if (t)
    return t;
  throw go(
    6
    /* NodeTypes.Linked */
  );
}
function tr(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (tn(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Qc = [
  ...Hc,
  ...Wc,
  ...Gc,
  ...Kc,
  ...Xc,
  ...Zc,
  ...qc,
  ...Yc
];
function go(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ja(e) {
  return (n) => hp(n, e);
}
function hp(e, t) {
  const n = cp(t);
  if (n == null)
    throw go(
      0
      /* NodeTypes.Resource */
    );
  if (Ps(n) === 1) {
    const a = up(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      Bl(e, i)
    ], []));
  } else
    return Bl(e, n);
}
function Bl(e, t) {
  const n = fp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = dp(t).reduce((o, a) => [...o, as(e, a)], []);
    return e.normalize(r);
  }
}
function as(e, t) {
  const n = Ps(t);
  switch (n) {
    case 3:
      return zo(t, n);
    case 9:
      return zo(t, n);
    case 4: {
      const r = t;
      if (tn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (tn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw go(n);
    }
    case 5: {
      const r = t;
      if (tn(r, "i") && pt(r.i))
        return e.interpolate(e.list(r.i));
      if (tn(r, "index") && pt(r.index))
        return e.interpolate(e.list(r.index));
      throw go(n);
    }
    case 6: {
      const r = t, o = pp(r), a = mp(r);
      return e.linked(as(e, a), o ? as(e, o) : void 0, e.type);
    }
    case 7:
      return zo(t, n);
    case 8:
      return zo(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const gp = (e) => e;
let Bo = Me();
function vp(e, t = {}) {
  let n = !1;
  const r = t.onError || Bd;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...lp(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function bp(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && re(e)) {
    et(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || gp)(e), o = Bo[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = vp(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = ja(a);
    return s ? i : Bo[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Bo[n];
      return r || (Bo[n] = ja(e));
    } else
      return ja(e);
  }
}
const Nn = {
  INVALID_ARGUMENT: zd,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, yp = 24;
function Pn(e) {
  return ba(e, null, void 0);
}
function $s(e, t) {
  return t.locale != null ? Vl(t.locale) : Vl(e.locale);
}
let Ua;
function Vl(e) {
  if (re(e))
    return e;
  if (Ge(e)) {
    if (e.resolvedOnce && Ua != null)
      return Ua;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Md(t))
        throw Pn(Nn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ua = t;
    } else
      throw Pn(Nn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Pn(Nn.NOT_SUPPORT_LOCALE_TYPE);
}
function _p(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...tt(t) ? t : Oe(t) ? Object.keys(t) : re(t) ? [t] : [n]
  ])];
}
function Jc(e, t, n) {
  const r = re(n) ? n : ra, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; tt(s); )
      s = jl(a, s, t);
    const i = tt(t) || !Ce(t) ? t : t.default ? t.default : null;
    s = re(i) ? [i] : i, tt(s) && jl(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function jl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && et(r); o++) {
    const a = t[o];
    re(a) && (r = wp(e, t[o], n));
  }
  return r;
}
function wp(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = kp(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function kp(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (tt(n) || Ce(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const nr = [];
nr[
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
nr[
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
nr[
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
nr[
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
nr[
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
nr[
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
nr[
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
const Tp = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ep(e) {
  return Tp.test(e);
}
function Sp(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ap(e) {
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
function Cp(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ep(t) ? Sp(t) : "*" + t;
}
function Op(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, i, l, u, f, p;
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
      if (o = 0, s === void 0 || (s = Cp(s), s === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function b() {
    const v = e[n + 1];
    if (r === 5 && v === "'" || r === 6 && v === '"')
      return n++, i = "\\" + v, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && b())) {
      if (l = Ap(a), p = nr[r], u = p[l] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = m[u[1]], f && (i = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Ul = /* @__PURE__ */ new Map();
function Lp(e, t) {
  return Oe(e) ? e[t] : null;
}
function Ip(e, t) {
  if (!Oe(e))
    return null;
  let n = Ul.get(t);
  if (n || (n = Op(t), n && Ul.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Qc.includes(s) && vn(o))
      return null;
    const i = o[s];
    if (i === void 0 || Ge(o))
      return null;
    o = i, a++;
  }
  return o;
}
const Rp = "11.2.2", ya = -1, ra = "en-US", Hl = "", Wl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function xp() {
  return {
    upper: (e, t) => t === "text" && re(e) ? e.toUpperCase() : t === "vnode" && Oe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && re(e) ? e.toLowerCase() : t === "vnode" && Oe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && re(e) ? Wl(e) : t === "vnode" && Oe(e) && "__v_isVNode" in e ? Wl(e.children) : e
  };
}
let eu;
function Np(e) {
  eu = e;
}
let tu;
function Pp(e) {
  tu = e;
}
let nu;
function $p(e) {
  nu = e;
}
let ru = null;
const Gl = (e) => {
  ru = e;
}, Mp = () => ru;
let Kl = 0;
function Dp(e = {}) {
  const t = Ge(e.onWarn) ? e.onWarn : Ld, n = re(e.version) ? e.version : Rp, r = re(e.locale) || Ge(e.locale) ? e.locale : ra, o = Ge(r) ? ra : r, a = tt(e.fallbackLocale) || Ce(e.fallbackLocale) || re(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Ce(e.messages) ? e.messages : Ha(o), i = Ce(e.datetimeFormats) ? e.datetimeFormats : Ha(o), l = Ce(e.numberFormats) ? e.numberFormats : Ha(o), u = bt(Me(), e.modifiers, xp()), f = e.pluralRules || Me(), p = Ge(e.missing) ? e.missing : null, m = et(e.missingWarn) || na(e.missingWarn) ? e.missingWarn : !0, b = et(e.fallbackWarn) || na(e.fallbackWarn) ? e.fallbackWarn : !0, v = !!e.fallbackFormat, g = !!e.unresolving, E = Ge(e.postTranslation) ? e.postTranslation : null, d = Ce(e.processor) ? e.processor : null, A = et(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, S = Ge(e.messageCompiler) ? e.messageCompiler : eu, _ = Ge(e.messageResolver) ? e.messageResolver : tu || Lp, C = Ge(e.localeFallbacker) ? e.localeFallbacker : nu || _p, O = Oe(e.fallbackContext) ? e.fallbackContext : void 0, H = e, G = Oe(H.__datetimeFormatters) ? H.__datetimeFormatters : /* @__PURE__ */ new Map(), te = Oe(H.__numberFormatters) ? H.__numberFormatters : /* @__PURE__ */ new Map(), ue = Oe(H.__meta) ? H.__meta : {};
  Kl++;
  const ee = {
    version: n,
    cid: Kl,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: u,
    pluralRules: f,
    missing: p,
    missingWarn: m,
    fallbackWarn: b,
    fallbackFormat: v,
    unresolving: g,
    postTranslation: E,
    processor: d,
    warnHtmlMessage: A,
    escapeParameter: L,
    messageCompiler: S,
    messageResolver: _,
    localeFallbacker: C,
    fallbackContext: O,
    onWarn: t,
    __meta: ue
  };
  return ee.datetimeFormats = i, ee.numberFormats = l, ee.__datetimeFormatters = G, ee.__numberFormatters = te, ee;
}
const Ha = (e) => ({ [e]: Me() });
function Ms(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return re(i) ? i : t;
  } else
    return t;
}
function Xr(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Fp(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function zp(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Fp(e, t[r]))
      return !0;
  return !1;
}
function Yl(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, f, p] = ss(...t), m = et(f.missingWarn) ? f.missingWarn : e.missingWarn;
  et(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const b = !!f.part, v = $s(e, f), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    v
  );
  if (!re(l) || l === "")
    return new Intl.DateTimeFormat(v, p).format(u);
  let E = {}, d, A = null;
  const L = "datetime format";
  for (let C = 0; C < g.length && (d = g[C], E = n[d] || {}, A = E[l], !Ce(A)); C++)
    Ms(e, l, d, m, L);
  if (!Ce(A) || !re(d))
    return r ? ya : l;
  let S = `${d}__${l}`;
  va(p) || (S = `${S}__${JSON.stringify(p)}`);
  let _ = i.get(S);
  return _ || (_ = new Intl.DateTimeFormat(d, bt({}, A, p)), i.set(S, _)), b ? _.formatToParts(u) : _.format(u);
}
const ou = [
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
function ss(...e) {
  const [t, n, r, o] = e, a = Me();
  let s = Me(), i;
  if (re(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Pn(Nn.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw Pn(Nn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (xd(t)) {
    if (isNaN(t.getTime()))
      throw Pn(Nn.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (pt(t))
    i = t;
  else
    throw Pn(Nn.INVALID_ARGUMENT);
  return re(n) ? a.key = n : Ce(n) && Object.keys(n).forEach((l) => {
    ou.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), re(r) ? a.locale = r : Ce(r) && (s = r), Ce(o) && (s = o), [a.key || "", i, a, s];
}
function ql(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Zl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, f, p] = ls(...t), m = et(f.missingWarn) ? f.missingWarn : e.missingWarn;
  et(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const b = !!f.part, v = $s(e, f), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    v
  );
  if (!re(l) || l === "")
    return new Intl.NumberFormat(v, p).format(u);
  let E = {}, d, A = null;
  const L = "number format";
  for (let C = 0; C < g.length && (d = g[C], E = n[d] || {}, A = E[l], !Ce(A)); C++)
    Ms(e, l, d, m, L);
  if (!Ce(A) || !re(d))
    return r ? ya : l;
  let S = `${d}__${l}`;
  va(p) || (S = `${S}__${JSON.stringify(p)}`);
  let _ = i.get(S);
  return _ || (_ = new Intl.NumberFormat(d, bt({}, A, p)), i.set(S, _)), b ? _.formatToParts(u) : _.format(u);
}
const au = [
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
function ls(...e) {
  const [t, n, r, o] = e, a = Me();
  let s = Me();
  if (!pt(t))
    throw Pn(Nn.INVALID_ARGUMENT);
  const i = t;
  return re(n) ? a.key = n : Ce(n) && Object.keys(n).forEach((l) => {
    au.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), re(r) ? a.locale = r : Ce(r) && (s = r), Ce(o) && (s = o), [a.key || "", i, a, s];
}
function Xl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Bp = (e) => e, Vp = (e) => "", jp = "text", Up = (e) => e.length === 0 ? "" : xs(e), Hp = Dd;
function Ql(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Wp(e) {
  const t = pt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (pt(e.named.count) || pt(e.named.n)) ? pt(e.named.count) ? e.named.count : pt(e.named.n) ? e.named.n : t : t;
}
function Gp(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Kp(e = {}) {
  const t = e.locale, n = Wp(e), r = Oe(e.pluralRules) && re(t) && Ge(e.pluralRules[t]) ? e.pluralRules[t] : Ql, o = Oe(e.pluralRules) && re(t) && Ge(e.pluralRules[t]) ? Ql : void 0, a = (d) => d[r(n, d.length, o)], s = e.list || [], i = (d) => s[d], l = e.named || Me();
  pt(e.pluralIndex) && Gp(n, l);
  const u = (d) => l[d];
  function f(d, A) {
    const L = Ge(e.messages) ? e.messages(d, !!A) : Oe(e.messages) ? e.messages[d] : !1;
    return L || (e.parent ? e.parent.message(d) : Vp);
  }
  const p = (d) => e.modifiers ? e.modifiers[d] : Bp, m = Ce(e.processor) && Ge(e.processor.normalize) ? e.processor.normalize : Up, b = Ce(e.processor) && Ge(e.processor.interpolate) ? e.processor.interpolate : Hp, v = Ce(e.processor) && re(e.processor.type) ? e.processor.type : jp, E = {
    list: i,
    named: u,
    plural: a,
    linked: (d, ...A) => {
      const [L, S] = A;
      let _ = "text", C = "";
      A.length === 1 ? Oe(L) ? (C = L.modifier || C, _ = L.type || _) : re(L) && (C = L || C) : A.length === 2 && (re(L) && (C = L || C), re(S) && (_ = S || _));
      const O = f(d, !0)(E), H = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        _ === "vnode" && tt(O) && C ? O[0] : O
      );
      return C ? p(C)(H, _) : H;
    },
    message: f,
    type: v,
    interpolate: b,
    normalize: m,
    values: bt(Me(), s, l)
  };
  return E;
}
const Jl = () => "", Mn = (e) => Ge(e);
function ei(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = is(...t), f = et(u.missingWarn) ? u.missingWarn : e.missingWarn, p = et(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = et(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, b = !!u.resolvedMessage, v = re(u.default) || et(u.default) ? et(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, g = n || v != null && (re(v) || Ge(v)), E = $s(e, u);
  m && Yp(u);
  let [d, A, L] = b ? [
    l,
    E,
    i[E] || Me()
  ] : su(e, l, E, s, p, f), S = d, _ = l;
  if (!b && !(re(S) || vn(S) || Mn(S)) && g && (S = v, _ = S), !b && (!(re(S) || vn(S) || Mn(S)) || !re(A)))
    return o ? ya : l;
  let C = !1;
  const O = () => {
    C = !0;
  }, H = Mn(S) ? S : lu(e, l, A, S, _, O);
  if (C)
    return S;
  const G = Xp(e, A, L, u), te = Kp(G), ue = qp(e, H, te);
  let ee = r ? r(ue, l) : ue;
  return m && re(ee) && (ee = Pd(ee)), ee;
}
function Yp(e) {
  tt(e.list) ? e.list = e.list.map((t) => re(t) ? $l(t) : t) : Oe(e.named) && Object.keys(e.named).forEach((t) => {
    re(e.named[t]) && (e.named[t] = $l(e.named[t]));
  });
}
function su(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, f = u(e, r, n);
  let p = Me(), m, b = null;
  const v = "translate";
  for (let g = 0; g < f.length && (m = f[g], p = s[m] || Me(), (b = l(p, t)) === null && (b = p[t]), !(re(b) || vn(b) || Mn(b))); g++)
    if (!zp(m, f)) {
      const E = Ms(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        a,
        v
      );
      E !== t && (b = E);
    }
  return [b, m, p];
}
function lu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (Mn(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, Zp(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function qp(e, t, n) {
  return t(n);
}
function is(...e) {
  const [t, n, r] = e, o = Me();
  if (!re(t) && !pt(t) && !Mn(t) && !vn(t))
    throw Pn(Nn.INVALID_ARGUMENT);
  const a = pt(t) ? String(t) : (Mn(t), t);
  return pt(n) ? o.plural = n : re(n) ? o.default = n : Ce(n) && !va(n) ? o.named = n : tt(n) && (o.list = n), pt(r) ? o.plural = r : re(r) ? o.default = r : Ce(r) && bt(o, r), [a, o];
}
function Zp(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => Id(t, n, s)
  };
}
function Xp(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: f } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (b, v) => {
      let g = s(n, b);
      if (g == null && (f || v)) {
        const [, , E] = su(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          b,
          t,
          i,
          l,
          u
        );
        g = s(E, b);
      }
      if (re(g) || vn(g)) {
        let E = !1;
        const A = lu(e, b, t, g, b, () => {
          E = !0;
        });
        return E ? Jl : A;
      } else return Mn(g) ? g : Jl;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), pt(r.plural) && (m.pluralIndex = r.plural), m;
}
ip();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Qp = "11.2.2";
function Jp() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Zo().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Zo().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Zo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Pr = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: yp,
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
function vo(e, ...t) {
  return ba(e, null, void 0);
}
const cs = /* @__PURE__ */ mr("__translateVNode"), us = /* @__PURE__ */ mr("__datetimeParts"), fs = /* @__PURE__ */ mr("__numberParts"), em = mr("__setPluralRules"), iu = /* @__PURE__ */ mr("__injectWithOption"), ds = /* @__PURE__ */ mr("__dispose");
function bo(e) {
  if (!Oe(e) || vn(e))
    return e;
  for (const t in e)
    if (tn(e, t))
      if (!t.includes("."))
        Oe(e[t]) && bo(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = Me()), !Oe(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (vn(o) ? Qc.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !vn(o)) {
          const s = o[n[r]];
          Oe(s) && bo(s);
        }
      }
  return e;
}
function cu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Ce(n) ? n : tt(r) ? Me() : { [e]: Me() };
  if (tt(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || Me(), Xo(u, s[l])) : Xo(u, s);
    } else
      re(i) && Xo(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      tn(s, i) && bo(s[i]);
  return s;
}
function tm(e) {
  return e.type;
}
function nm(e, t, n) {
  let r = Oe(t.messages) ? t.messages : Me();
  "__i18nGlobal" in n && (r = cu(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (Oe(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Oe(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function ti(e) {
  return D(Bc, null, e, 0);
}
function uu() {
  return "currentInstance" in Va ? Va["currentInstance"] : Va.getCurrentInstance();
}
const ni = () => [], rm = () => !1;
let ri = 0;
function oi(e) {
  return (t, n, r, o) => e(n, r, uu() || void 0, o);
}
function om(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = Nl ? j : Qn;
  let s = et(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : re(e.locale) ? e.locale : ra
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : re(e.fallbackLocale) || tt(e.fallbackLocale) || Ce(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(cu(i.value, e)), f = a(Ce(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = a(Ce(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : et(e.missingWarn) || na(e.missingWarn) ? e.missingWarn : !0, b = t ? t.fallbackWarn : et(e.fallbackWarn) || na(e.fallbackWarn) ? e.fallbackWarn : !0, v = t ? t.fallbackRoot : et(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, E = Ge(e.missing) ? e.missing : null, d = Ge(e.missing) ? oi(e.missing) : null, A = Ge(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : et(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, S = !!e.escapeParameter;
  const _ = t ? t.modifiers : Ce(e.modifiers) ? e.modifiers : {};
  let C = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    r && Gl(null);
    const T = {
      version: Qp,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: _,
      pluralRules: C,
      missing: d === null ? void 0 : d,
      missingWarn: m,
      fallbackWarn: b,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: A === null ? void 0 : A,
      warnHtmlMessage: L,
      escapeParameter: S,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    T.datetimeFormats = f.value, T.numberFormats = p.value, T.__datetimeFormatters = Ce(O) ? O.__datetimeFormatters : void 0, T.__numberFormatters = Ce(O) ? O.__numberFormatters : void 0;
    const P = Dp(T);
    return r && Gl(P), P;
  })(), Xr(O, i.value, l.value);
  function G() {
    return [
      i.value,
      l.value,
      u.value,
      f.value,
      p.value
    ];
  }
  const te = I({
    get: () => i.value,
    set: (T) => {
      O.locale = T, i.value = T;
    }
  }), ue = I({
    get: () => l.value,
    set: (T) => {
      O.fallbackLocale = T, l.value = T, Xr(O, i.value, T);
    }
  }), ee = I(() => u.value), he = /* @__PURE__ */ I(() => f.value), de = /* @__PURE__ */ I(() => p.value);
  function N() {
    return Ge(A) ? A : null;
  }
  function M(T) {
    A = T, O.postTranslation = T;
  }
  function z() {
    return E;
  }
  function le(T) {
    T !== null && (d = oi(T)), E = T, O.missing = d;
  }
  const J = (T, P, fe, Ee, Ze, Nt) => {
    G();
    let He;
    try {
      r || (O.fallbackContext = t ? Mp() : void 0), He = T(O);
    } finally {
      r || (O.fallbackContext = void 0);
    }
    if (fe !== "translate exists" && // for not `te` (e.g `t`)
    pt(He) && He === ya || fe === "translate exists" && !He) {
      const [or, Wr] = P();
      return t && v ? Ee(t) : Ze(or);
    } else {
      if (Nt(He))
        return He;
      throw vo(Pr.UNEXPECTED_RETURN_TYPE);
    }
  };
  function be(...T) {
    return J((P) => Reflect.apply(ei, null, [P, ...T]), () => is(...T), "translate", (P) => Reflect.apply(P.t, P, [...T]), (P) => P, (P) => re(P));
  }
  function Z(...T) {
    const [P, fe, Ee] = T;
    if (Ee && !Oe(Ee))
      throw vo(Pr.INVALID_ARGUMENT);
    return be(P, fe, bt({ resolvedMessage: !0 }, Ee || {}));
  }
  function Pe(...T) {
    return J((P) => Reflect.apply(Yl, null, [P, ...T]), () => ss(...T), "datetime format", (P) => Reflect.apply(P.d, P, [...T]), () => Hl, (P) => re(P) || tt(P));
  }
  function Se(...T) {
    return J((P) => Reflect.apply(Zl, null, [P, ...T]), () => ls(...T), "number format", (P) => Reflect.apply(P.n, P, [...T]), () => Hl, (P) => re(P) || tt(P));
  }
  function _e(T) {
    return T.map((P) => re(P) || pt(P) || et(P) ? ti(String(P)) : P);
  }
  const ke = {
    normalize: _e,
    interpolate: (T) => T,
    type: "vnode"
  };
  function Ye(...T) {
    return J((P) => {
      let fe;
      const Ee = P;
      try {
        Ee.processor = ke, fe = Reflect.apply(ei, null, [Ee, ...T]);
      } finally {
        Ee.processor = null;
      }
      return fe;
    }, () => is(...T), "translate", (P) => P[cs](...T), (P) => [ti(P)], (P) => tt(P));
  }
  function ce(...T) {
    return J((P) => Reflect.apply(Zl, null, [P, ...T]), () => ls(...T), "number format", (P) => P[fs](...T), ni, (P) => re(P) || tt(P));
  }
  function qe(...T) {
    return J((P) => Reflect.apply(Yl, null, [P, ...T]), () => ss(...T), "datetime format", (P) => P[us](...T), ni, (P) => re(P) || tt(P));
  }
  function lt(T) {
    C = T, O.pluralRules = C;
  }
  function je(T, P) {
    return J(() => {
      if (!T)
        return !1;
      const fe = re(P) ? P : i.value, Ee = ct(fe), Ze = O.messageResolver(Ee, T);
      return vn(Ze) || Mn(Ze) || re(Ze);
    }, () => [T], "translate exists", (fe) => Reflect.apply(fe.te, fe, [T, P]), rm, (fe) => et(fe));
  }
  function yt(T) {
    let P = null;
    const fe = Jc(O, l.value, i.value);
    for (let Ee = 0; Ee < fe.length; Ee++) {
      const Ze = u.value[fe[Ee]] || {}, Nt = O.messageResolver(Ze, T);
      if (Nt != null) {
        P = Nt;
        break;
      }
    }
    return P;
  }
  function it(T) {
    const P = yt(T);
    return P ?? (t ? t.tm(T) || {} : {});
  }
  function ct(T) {
    return u.value[T] || {};
  }
  function ut(T, P) {
    if (o) {
      const fe = { [T]: P };
      for (const Ee in fe)
        tn(fe, Ee) && bo(fe[Ee]);
      P = fe[T];
    }
    u.value[T] = P, O.messages = u.value;
  }
  function B(T, P) {
    u.value[T] = u.value[T] || {};
    const fe = { [T]: P };
    if (o)
      for (const Ee in fe)
        tn(fe, Ee) && bo(fe[Ee]);
    P = fe[T], Xo(P, u.value[T]), O.messages = u.value;
  }
  function q(T) {
    return f.value[T] || {};
  }
  function h(T, P) {
    f.value[T] = P, O.datetimeFormats = f.value, ql(O, T, P);
  }
  function k(T, P) {
    f.value[T] = bt(f.value[T] || {}, P), O.datetimeFormats = f.value, ql(O, T, P);
  }
  function $(T) {
    return p.value[T] || {};
  }
  function W(T, P) {
    p.value[T] = P, O.numberFormats = p.value, Xl(O, T, P);
  }
  function ge(T, P) {
    p.value[T] = bt(p.value[T] || {}, P), O.numberFormats = p.value, Xl(O, T, P);
  }
  ri++, t && Nl && (ve(t.locale, (T) => {
    s && (i.value = T, O.locale = T, Xr(O, i.value, l.value));
  }), ve(t.fallbackLocale, (T) => {
    s && (l.value = T, O.fallbackLocale = T, Xr(O, i.value, l.value));
  }));
  const ie = {
    id: ri,
    locale: te,
    fallbackLocale: ue,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(T) {
      s = T, T && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Xr(O, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: ee,
    get modifiers() {
      return _;
    },
    get pluralRules() {
      return C || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return m;
    },
    set missingWarn(T) {
      m = T, O.missingWarn = m;
    },
    get fallbackWarn() {
      return b;
    },
    set fallbackWarn(T) {
      b = T, O.fallbackWarn = b;
    },
    get fallbackRoot() {
      return v;
    },
    set fallbackRoot(T) {
      v = T;
    },
    get fallbackFormat() {
      return g;
    },
    set fallbackFormat(T) {
      g = T, O.fallbackFormat = g;
    },
    get warnHtmlMessage() {
      return L;
    },
    set warnHtmlMessage(T) {
      L = T, O.warnHtmlMessage = T;
    },
    get escapeParameter() {
      return S;
    },
    set escapeParameter(T) {
      S = T, O.escapeParameter = T;
    },
    t: be,
    getLocaleMessage: ct,
    setLocaleMessage: ut,
    mergeLocaleMessage: B,
    getPostTranslationHandler: N,
    setPostTranslationHandler: M,
    getMissingHandler: z,
    setMissingHandler: le,
    [em]: lt
  };
  return ie.datetimeFormats = he, ie.numberFormats = de, ie.rt = Z, ie.te = je, ie.tm = it, ie.d = Pe, ie.n = Se, ie.getDateTimeFormat = q, ie.setDateTimeFormat = h, ie.mergeDateTimeFormat = k, ie.getNumberFormat = $, ie.setNumberFormat = W, ie.mergeNumberFormat = ge, ie[iu] = n, ie[cs] = Ye, ie[us] = qe, ie[fs] = ce, ie;
}
const Ds = {
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
function am({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === Tt ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Me());
}
function fu() {
  return Tt;
}
bt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => pt(e) || !isNaN(e)
  }
}, Ds);
function sm(e) {
  return tt(e) && !re(e[0]);
}
function du(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = Me();
    e.locale && (s.locale = e.locale), re(e.format) ? s.key = e.format : Oe(e.format) && (re(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((m, b) => n.includes(b) ? bt(Me(), m, { [b]: e.format[b] }) : m, Me()));
    const l = r(e.value, s, i);
    let u = [s.key];
    tt(l) ? u = l.map((m, b) => {
      const v = o[m.type], g = v ? v({ [m.type]: m.value, index: b, parts: l }) : [m.value];
      return sm(g) && (g[0].key = `${m.type}-${b}`), g;
    }) : re(l) && (u = [l]);
    const f = bt(Me(), a), p = re(e.tag) || Oe(e.tag) ? e.tag : fu();
    return zc(p, f, u);
  };
}
bt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ds);
const lm = /* @__PURE__ */ mr("global-vue-i18n");
function Eo(e = {}) {
  const t = uu();
  if (t == null)
    throw vo(Pr.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw vo(Pr.NOT_INSTALLED);
  const n = im(t), r = um(n), o = tm(t), a = cm(e, o);
  if (a === "global")
    return nm(r, e, o), r;
  if (a === "parent") {
    let l = fm(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = bt({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = om(l), s.__composerExtend && (i[ds] = s.__composerExtend(i)), pm(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function im(e) {
  const t = Ne(e.isCE ? lm : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw vo(e.isCE ? Pr.NOT_INSTALLED_WITH_PROVIDE : Pr.UNEXPECTED_ERROR);
  return t;
}
function cm(e, t) {
  return va(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function um(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function fm(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = dm(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[iu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function dm(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function pm(e, t, n) {
  nt(() => {
  }, t), ga(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[ds];
    o && (o(), delete r[ds]);
  }, t);
}
bt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ds);
Jp();
Np(bp);
Pp(Ip);
$p(Jc);
function Fs() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var hr = Fs();
function pu(e) {
  hr = e;
}
var lo = { exec: () => null };
function Ae(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Lt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var mm = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Lt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, hm = /^(?:[ \t]*(?:\n|$))+/, gm = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, vm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, So = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, bm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, zs = /(?:[*+-]|\d{1,9}[.)])/, mu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, hu = Ae(mu).replace(/bull/g, zs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), ym = Ae(mu).replace(/bull/g, zs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Bs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, _m = /^[^\n]+/, Vs = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, wm = Ae(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Vs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), km = Ae(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, zs).getRegex(), _a = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", js = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Tm = Ae("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", js).replace("tag", _a).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), gu = Ae(Bs).replace("hr", So).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _a).getRegex(), Em = Ae(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", gu).getRegex(), Us = { blockquote: Em, code: gm, def: wm, fences: vm, heading: bm, hr: So, html: Tm, lheading: hu, list: km, newline: hm, paragraph: gu, table: lo, text: _m }, ai = Ae("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", So).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _a).getRegex(), Sm = { ...Us, lheading: ym, table: ai, paragraph: Ae(Bs).replace("hr", So).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ai).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _a).getRegex() }, Am = { ...Us, html: Ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", js).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: lo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Ae(Bs).replace("hr", So).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", hu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Cm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Om = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, vu = /^( {2,}|\\)\n(?!\s*$)/, Lm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, wa = /[\p{P}\p{S}]/u, Hs = /[\s\p{P}\p{S}]/u, bu = /[^\s\p{P}\p{S}]/u, Im = Ae(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Hs).getRegex(), yu = /(?!~)[\p{P}\p{S}]/u, Rm = /(?!~)[\s\p{P}\p{S}]/u, xm = /(?:[^\s\p{P}\p{S}]|~)/u, Nm = Ae(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", mm ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), _u = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Pm = Ae(_u, "u").replace(/punct/g, wa).getRegex(), $m = Ae(_u, "u").replace(/punct/g, yu).getRegex(), wu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Mm = Ae(wu, "gu").replace(/notPunctSpace/g, bu).replace(/punctSpace/g, Hs).replace(/punct/g, wa).getRegex(), Dm = Ae(wu, "gu").replace(/notPunctSpace/g, xm).replace(/punctSpace/g, Rm).replace(/punct/g, yu).getRegex(), Fm = Ae("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, bu).replace(/punctSpace/g, Hs).replace(/punct/g, wa).getRegex(), zm = Ae(/\\(punct)/, "gu").replace(/punct/g, wa).getRegex(), Bm = Ae(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Vm = Ae(js).replace("(?:-->|$)", "-->").getRegex(), jm = Ae("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Vm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), oa = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Um = Ae(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", oa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ku = Ae(/^!?\[(label)\]\[(ref)\]/).replace("label", oa).replace("ref", Vs).getRegex(), Tu = Ae(/^!?\[(ref)\](?:\[\])?/).replace("ref", Vs).getRegex(), Hm = Ae("reflink|nolink(?!\\()", "g").replace("reflink", ku).replace("nolink", Tu).getRegex(), si = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Ws = { _backpedal: lo, anyPunctuation: zm, autolink: Bm, blockSkip: Nm, br: vu, code: Om, del: lo, emStrongLDelim: Pm, emStrongRDelimAst: Mm, emStrongRDelimUnd: Fm, escape: Cm, link: Um, nolink: Tu, punctuation: Im, reflink: ku, reflinkSearch: Hm, tag: jm, text: Lm, url: lo }, Wm = { ...Ws, link: Ae(/^!?\[(label)\]\((.*?)\)/).replace("label", oa).getRegex(), reflink: Ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", oa).getRegex() }, ps = { ...Ws, emStrongRDelimAst: Dm, emStrongLDelim: $m, url: Ae(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", si).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Ae(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", si).getRegex() }, Gm = { ...ps, br: Ae(vu).replace("{2,}", "*").getRegex(), text: Ae(ps.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Vo = { normal: Us, gfm: Sm, pedantic: Am }, Qr = { normal: Ws, gfm: ps, breaks: Gm, pedantic: Wm }, Km = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, li = (e) => Km[e];
function Cn(e, t) {
  if (t) {
    if (Lt.escapeTest.test(e)) return e.replace(Lt.escapeReplace, li);
  } else if (Lt.escapeTestNoEncode.test(e)) return e.replace(Lt.escapeReplaceNoEncode, li);
  return e;
}
function ii(e) {
  try {
    e = encodeURI(e).replace(Lt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function ci(e, t) {
  let n = e.replace(Lt.findPipe, (a, s, i) => {
    let l = !1, u = s;
    for (; --u >= 0 && i[u] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), r = n.split(Lt.splitPipe), o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; o < r.length; o++) r[o] = r[o].trim().replace(Lt.slashPipe, "|");
  return r;
}
function Jr(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r && e.charAt(r - o - 1) === t; )
    o++;
  return e.slice(0, r - o);
}
function Ym(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function ui(e, t, n, r, o) {
  let a = t.href, s = t.title || null, i = e[1].replace(o.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: i, tokens: r.inlineTokens(i) };
  return r.state.inLink = !1, l;
}
function qm(e, t, n) {
  let r = e.match(n.other.indentCodeCompensation);
  if (r === null) return t;
  let o = r[1];
  return t.split(`
`).map((a) => {
    let s = a.match(n.other.beginningSpace);
    if (s === null) return a;
    let [i] = s;
    return i.length >= o.length ? a.slice(o.length) : a;
  }).join(`
`);
}
var aa = class {
  constructor(e) {
    $e(this, "options");
    $e(this, "rules");
    $e(this, "lexer");
    this.options = e || hr;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : Jr(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = qm(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = Jr(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: Jr(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = Jr(t[0], `
`).split(`
`), r = "", o = "", a = [];
      for (; n.length > 0; ) {
        let s = !1, i = [], l;
        for (l = 0; l < n.length; l++) if (this.rules.other.blockquoteStart.test(n[l])) i.push(n[l]), s = !0;
        else if (!s) i.push(n[l]);
        else break;
        n = n.slice(l);
        let u = i.join(`
`), f = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${u}` : u, o = o ? `${o}
${f}` : f;
        let p = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(f, a, !0), this.lexer.state.top = p, n.length === 0) break;
        let m = a.at(-1);
        if (m?.type === "code") break;
        if (m?.type === "blockquote") {
          let b = m, v = b.raw + `
` + n.join(`
`), g = this.blockquote(v);
          a[a.length - 1] = g, r = r.substring(0, r.length - b.raw.length) + g.raw, o = o.substring(0, o.length - b.text.length) + g.text;
          break;
        } else if (m?.type === "list") {
          let b = m, v = b.raw + `
` + n.join(`
`), g = this.list(v);
          a[a.length - 1] = g, r = r.substring(0, r.length - m.raw.length) + g.raw, o = o.substring(0, o.length - b.raw.length) + g.raw, n = v.substring(a.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: r, tokens: a, text: o };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), r = n.length > 1, o = { type: "list", raw: "", ordered: r, start: r ? +n.slice(0, -1) : "", loose: !1, items: [] };
      n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
      let a = this.rules.other.listItemRegex(n), s = !1;
      for (; e; ) {
        let l = !1, u = "", f = "";
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t[0], e = e.substring(u.length);
        let p = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (g) => " ".repeat(3 * g.length)), m = e.split(`
`, 1)[0], b = !p.trim(), v = 0;
        if (this.options.pedantic ? (v = 2, f = p.trimStart()) : b ? v = t[1].length + 1 : (v = t[2].search(this.rules.other.nonSpaceChar), v = v > 4 ? 1 : v, f = p.slice(v), v += t[1].length), b && this.rules.other.blankLine.test(m) && (u += m + `
`, e = e.substring(m.length + 1), l = !0), !l) {
          let g = this.rules.other.nextBulletRegex(v), E = this.rules.other.hrRegex(v), d = this.rules.other.fencesBeginRegex(v), A = this.rules.other.headingBeginRegex(v), L = this.rules.other.htmlBeginRegex(v);
          for (; e; ) {
            let S = e.split(`
`, 1)[0], _;
            if (m = S, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), _ = m) : _ = m.replace(this.rules.other.tabCharGlobal, "    "), d.test(m) || A.test(m) || L.test(m) || g.test(m) || E.test(m)) break;
            if (_.search(this.rules.other.nonSpaceChar) >= v || !m.trim()) f += `
` + _.slice(v);
            else {
              if (b || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || d.test(p) || A.test(p) || E.test(p)) break;
              f += `
` + m;
            }
            !b && !m.trim() && (b = !0), u += S + `
`, e = e.substring(S.length + 1), p = _.slice(v);
          }
        }
        o.loose || (s ? o.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (s = !0)), o.items.push({ type: "list_item", raw: u, task: !!this.options.gfm && this.rules.other.listIsTask.test(f), loose: !1, text: f, tokens: [] }), o.raw += u;
      }
      let i = o.items.at(-1);
      if (i) i.raw = i.raw.trimEnd(), i.text = i.text.trimEnd();
      else return;
      o.raw = o.raw.trimEnd();
      for (let l of o.items) {
        if (this.lexer.state.top = !1, l.tokens = this.lexer.blockTokens(l.text, []), l.task) {
          if (l.text = l.text.replace(this.rules.other.listReplaceTask, ""), l.tokens[0]?.type === "text" || l.tokens[0]?.type === "paragraph") {
            l.tokens[0].raw = l.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), l.tokens[0].text = l.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
            for (let f = this.lexer.inlineQueue.length - 1; f >= 0; f--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)) {
              this.lexer.inlineQueue[f].src = this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask, "");
              break;
            }
          }
          let u = this.rules.other.listTaskCheckbox.exec(l.raw);
          if (u) {
            let f = { type: "checkbox", raw: u[0] + " ", checked: u[0] !== "[ ]" };
            l.checked = f.checked, o.loose ? l.tokens[0] && ["paragraph", "text"].includes(l.tokens[0].type) && "tokens" in l.tokens[0] && l.tokens[0].tokens ? (l.tokens[0].raw = f.raw + l.tokens[0].raw, l.tokens[0].text = f.raw + l.tokens[0].text, l.tokens[0].tokens.unshift(f)) : l.tokens.unshift({ type: "paragraph", raw: f.raw, text: f.raw, tokens: [f] }) : l.tokens.unshift(f);
          }
        }
        if (!o.loose) {
          let u = l.tokens.filter((p) => p.type === "space"), f = u.length > 0 && u.some((p) => this.rules.other.anyLine.test(p.raw));
          o.loose = f;
        }
      }
      if (o.loose) for (let l of o.items) {
        l.loose = !0;
        for (let u of l.tokens) u.type === "text" && (u.type = "paragraph");
      }
      return o;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) return { type: "html", block: !0, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: t[0], href: r, title: o };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = ci(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let s of r) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of o) a.rows.push(ci(s, a.header.length).map((i, l) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[l] })));
      return a;
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t) return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: t[0] };
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let n = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n)) return;
        let a = Jr(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = Ym(t[2], "()");
        if (a === -2) return;
        if (a > -1) {
          let s = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + a;
          t[2] = t[2].substring(0, a), t[0] = t[0].substring(0, s).trim(), t[3] = "";
        }
      }
      let r = t[2], o = "";
      if (this.options.pedantic) {
        let a = this.rules.other.pedanticHrefTitle.exec(r);
        a && (r = a[1], o = a[3]);
      } else o = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), ui(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), o = t[r.toLowerCase()];
      if (!o) {
        let a = n[0].charAt(0);
        return { type: "text", raw: a, text: a };
      }
      return ui(n, o, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!(!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[2]) || !n || this.rules.inline.punctuation.exec(n))) {
      let o = [...r[0]].length - 1, a, s, i = o, l = 0, u = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, t = t.slice(-1 * e.length + o); (r = u.exec(t)) != null; ) {
        if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a) continue;
        if (s = [...a].length, r[3] || r[4]) {
          i += s;
          continue;
        } else if ((r[5] || r[6]) && o % 3 && !((o + s) % 3)) {
          l += s;
          continue;
        }
        if (i -= s, i > 0) continue;
        s = Math.min(s, s + i + l);
        let f = [...r[0]][0].length, p = e.slice(0, o + r.index + f + s);
        if (Math.min(o, s) % 2) {
          let b = p.slice(1, -1);
          return { type: "em", raw: p, text: b, tokens: this.lexer.inlineTokens(b) };
        }
        let m = p.slice(2, -2);
        return { type: "strong", raw: p, text: m, tokens: this.lexer.inlineTokens(m) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(n), o = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return r && o && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e) {
    let t = this.rules.inline.del.exec(e);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, r;
      return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, r;
      if (t[2] === "@") n = t[0], r = "mailto:" + n;
      else {
        let o;
        do
          o = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (o !== t[0]);
        n = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: t[0], escaped: n };
    }
  }
}, Jt = class ms {
  constructor(t) {
    $e(this, "tokens");
    $e(this, "options");
    $e(this, "state");
    $e(this, "inlineQueue");
    $e(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || hr, this.options.tokenizer = this.options.tokenizer || new aa(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Lt, block: Vo.normal, inline: Qr.normal };
    this.options.pedantic ? (n.block = Vo.pedantic, n.inline = Qr.pedantic) : this.options.gfm && (n.block = Vo.gfm, this.options.breaks ? n.inline = Qr.breaks : n.inline = Qr.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: Vo, inline: Qr };
  }
  static lex(t, n) {
    return new ms(n).lex(t);
  }
  static lexInline(t, n) {
    return new ms(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Lt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.options.pedantic && (t = t.replace(Lt.tabCharGlobal, "    ").replace(Lt.spaceLine, "")); t; ) {
      let o;
      if (this.options.extensions?.block?.some((s) => (o = s.call({ lexer: this }, t, n)) ? (t = t.substring(o.raw.length), n.push(o), !0) : !1)) continue;
      if (o = this.tokenizer.space(t)) {
        t = t.substring(o.raw.length);
        let s = n.at(-1);
        o.raw.length === 1 && s !== void 0 ? s.raw += `
` : n.push(o);
        continue;
      }
      if (o = this.tokenizer.code(t)) {
        t = t.substring(o.raw.length);
        let s = n.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + o.raw, s.text += `
` + o.text, this.inlineQueue.at(-1).src = s.text) : n.push(o);
        continue;
      }
      if (o = this.tokenizer.fences(t)) {
        t = t.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.heading(t)) {
        t = t.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.hr(t)) {
        t = t.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.blockquote(t)) {
        t = t.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.list(t)) {
        t = t.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.html(t)) {
        t = t.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.def(t)) {
        t = t.substring(o.raw.length);
        let s = n.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + o.raw, s.text += `
` + o.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[o.tag] || (this.tokens.links[o.tag] = { href: o.href, title: o.title }, n.push(o));
        continue;
      }
      if (o = this.tokenizer.table(t)) {
        t = t.substring(o.raw.length), n.push(o);
        continue;
      }
      if (o = this.tokenizer.lheading(t)) {
        t = t.substring(o.raw.length), n.push(o);
        continue;
      }
      let a = t;
      if (this.options.extensions?.startBlock) {
        let s = 1 / 0, i = t.slice(1), l;
        this.options.extensions.startBlock.forEach((u) => {
          l = u.call({ lexer: this }, i), typeof l == "number" && l >= 0 && (s = Math.min(s, l));
        }), s < 1 / 0 && s >= 0 && (a = t.substring(0, s + 1));
      }
      if (this.state.top && (o = this.tokenizer.paragraph(a))) {
        let s = n.at(-1);
        r && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + o.raw, s.text += `
` + o.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : n.push(o), r = a.length !== t.length, t = t.substring(o.raw.length);
        continue;
      }
      if (o = this.tokenizer.text(t)) {
        t = t.substring(o.raw.length);
        let s = n.at(-1);
        s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + o.raw, s.text += `
` + o.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : n.push(o);
        continue;
      }
      if (t) {
        let s = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(s);
          break;
        } else throw new Error(s);
      }
    }
    return this.state.top = !0, n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  inlineTokens(t, n = []) {
    let r = t, o = null;
    if (this.tokens.links) {
      let l = Object.keys(this.tokens.links);
      if (l.length > 0) for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(r)) != null; ) l.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (r = r.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(r)) != null; ) r = r.slice(0, o.index) + "++" + r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let a;
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(r)) != null; ) a = o[2] ? o[2].length : 0, r = r.slice(0, o.index + a) + "[" + "a".repeat(o[0].length - a - 2) + "]" + r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    r = this.options.hooks?.emStrongMask?.call({ lexer: this }, r) ?? r;
    let s = !1, i = "";
    for (; t; ) {
      s || (i = ""), s = !1;
      let l;
      if (this.options.extensions?.inline?.some((f) => (l = f.call({ lexer: this }, t, n)) ? (t = t.substring(l.raw.length), n.push(l), !0) : !1)) continue;
      if (l = this.tokenizer.escape(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.tag(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.link(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(l.raw.length);
        let f = n.at(-1);
        l.type === "text" && f?.type === "text" ? (f.raw += l.raw, f.text += l.text) : n.push(l);
        continue;
      }
      if (l = this.tokenizer.emStrong(t, r, i)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.codespan(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.br(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.del(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (l = this.tokenizer.autolink(t)) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      if (!this.state.inLink && (l = this.tokenizer.url(t))) {
        t = t.substring(l.raw.length), n.push(l);
        continue;
      }
      let u = t;
      if (this.options.extensions?.startInline) {
        let f = 1 / 0, p = t.slice(1), m;
        this.options.extensions.startInline.forEach((b) => {
          m = b.call({ lexer: this }, p), typeof m == "number" && m >= 0 && (f = Math.min(f, m));
        }), f < 1 / 0 && f >= 0 && (u = t.substring(0, f + 1));
      }
      if (l = this.tokenizer.inlineText(u)) {
        t = t.substring(l.raw.length), l.raw.slice(-1) !== "_" && (i = l.raw.slice(-1)), s = !0;
        let f = n.at(-1);
        f?.type === "text" ? (f.raw += l.raw, f.text += l.text) : n.push(l);
        continue;
      }
      if (t) {
        let f = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(f);
          break;
        } else throw new Error(f);
      }
    }
    return n;
  }
}, sa = class {
  constructor(t) {
    $e(this, "options");
    $e(this, "parser");
    this.options = t || hr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Lt.notSpaceStart)?.[0], a = t.replace(Lt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Cn(o) + '">' + (r ? a : Cn(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : Cn(a, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  def(t) {
    return "";
  }
  heading({ tokens: t, depth: n }) {
    return `<h${n}>${this.parser.parseInline(t)}</h${n}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let n = t.ordered, r = t.start, o = "";
    for (let i = 0; i < t.items.length; i++) {
      let l = t.items[i];
      o += this.listitem(l);
    }
    let a = n ? "ol" : "ul", s = n && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + a + s + `>
` + o + "</" + a + `>
`;
  }
  listitem(t) {
    return `<li>${this.parser.parse(t.tokens)}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let n = "", r = "";
    for (let a = 0; a < t.header.length; a++) r += this.tablecell(t.header[a]);
    n += this.tablerow({ text: r });
    let o = "";
    for (let a = 0; a < t.rows.length; a++) {
      let s = t.rows[a];
      r = "";
      for (let i = 0; i < s.length; i++) r += this.tablecell(s[i]);
      o += this.tablerow({ text: r });
    }
    return o && (o = `<tbody>${o}</tbody>`), `<table>
<thead>
` + n + `</thead>
` + o + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let n = this.parser.parseInline(t.tokens), r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + n + `</${r}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${Cn(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    let o = this.parser.parseInline(r), a = ii(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + Cn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = ii(t);
    if (a === null) return Cn(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${Cn(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Cn(t.text);
  }
}, Gs = class {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
  checkbox({ raw: e }) {
    return e;
  }
}, en = class hs {
  constructor(t) {
    $e(this, "options");
    $e(this, "renderer");
    $e(this, "textRenderer");
    this.options = t || hr, this.options.renderer = this.options.renderer || new sa(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Gs();
  }
  static parse(t, n) {
    return new hs(n).parse(t);
  }
  static parseInline(t, n) {
    return new hs(n).parseInline(t);
  }
  parse(t) {
    let n = "";
    for (let r = 0; r < t.length; r++) {
      let o = t[r];
      if (this.options.extensions?.renderers?.[o.type]) {
        let s = o, i = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (i !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(s.type)) {
          n += i || "";
          continue;
        }
      }
      let a = o;
      switch (a.type) {
        case "space": {
          n += this.renderer.space(a);
          break;
        }
        case "hr": {
          n += this.renderer.hr(a);
          break;
        }
        case "heading": {
          n += this.renderer.heading(a);
          break;
        }
        case "code": {
          n += this.renderer.code(a);
          break;
        }
        case "table": {
          n += this.renderer.table(a);
          break;
        }
        case "blockquote": {
          n += this.renderer.blockquote(a);
          break;
        }
        case "list": {
          n += this.renderer.list(a);
          break;
        }
        case "checkbox": {
          n += this.renderer.checkbox(a);
          break;
        }
        case "html": {
          n += this.renderer.html(a);
          break;
        }
        case "def": {
          n += this.renderer.def(a);
          break;
        }
        case "paragraph": {
          n += this.renderer.paragraph(a);
          break;
        }
        case "text": {
          n += this.renderer.text(a);
          break;
        }
        default: {
          let s = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(s), "";
          throw new Error(s);
        }
      }
    }
    return n;
  }
  parseInline(t, n = this.renderer) {
    let r = "";
    for (let o = 0; o < t.length; o++) {
      let a = t[o];
      if (this.options.extensions?.renderers?.[a.type]) {
        let i = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (i !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(a.type)) {
          r += i || "";
          continue;
        }
      }
      let s = a;
      switch (s.type) {
        case "escape": {
          r += n.text(s);
          break;
        }
        case "html": {
          r += n.html(s);
          break;
        }
        case "link": {
          r += n.link(s);
          break;
        }
        case "image": {
          r += n.image(s);
          break;
        }
        case "checkbox": {
          r += n.checkbox(s);
          break;
        }
        case "strong": {
          r += n.strong(s);
          break;
        }
        case "em": {
          r += n.em(s);
          break;
        }
        case "codespan": {
          r += n.codespan(s);
          break;
        }
        case "br": {
          r += n.br(s);
          break;
        }
        case "del": {
          r += n.del(s);
          break;
        }
        case "text": {
          r += n.text(s);
          break;
        }
        default: {
          let i = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(i), "";
          throw new Error(i);
        }
      }
    }
    return r;
  }
}, qo, ao = (qo = class {
  constructor(e) {
    $e(this, "options");
    $e(this, "block");
    this.options = e || hr;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer() {
    return this.block ? Jt.lex : Jt.lexInline;
  }
  provideParser() {
    return this.block ? en.parse : en.parseInline;
  }
}, $e(qo, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), $e(qo, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), qo), Zm = class {
  constructor(...t) {
    $e(this, "defaults", Fs());
    $e(this, "options", this.setOptions);
    $e(this, "parse", this.parseMarkdown(!0));
    $e(this, "parseInline", this.parseMarkdown(!1));
    $e(this, "Parser", en);
    $e(this, "Renderer", sa);
    $e(this, "TextRenderer", Gs);
    $e(this, "Lexer", Jt);
    $e(this, "Tokenizer", aa);
    $e(this, "Hooks", ao);
    this.use(...t);
  }
  walkTokens(t, n) {
    let r = [];
    for (let o of t) switch (r = r.concat(n.call(this, o)), o.type) {
      case "table": {
        let a = o;
        for (let s of a.header) r = r.concat(this.walkTokens(s.tokens, n));
        for (let s of a.rows) for (let i of s) r = r.concat(this.walkTokens(i.tokens, n));
        break;
      }
      case "list": {
        let a = o;
        r = r.concat(this.walkTokens(a.items, n));
        break;
      }
      default: {
        let a = o;
        this.defaults.extensions?.childTokens?.[a.type] ? this.defaults.extensions.childTokens[a.type].forEach((s) => {
          let i = a[s].flat(1 / 0);
          r = r.concat(this.walkTokens(i, n));
        }) : a.tokens && (r = r.concat(this.walkTokens(a.tokens, n)));
      }
    }
    return r;
  }
  use(...t) {
    let n = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((r) => {
      let o = { ...r };
      if (o.async = this.defaults.async || o.async || !1, r.extensions && (r.extensions.forEach((a) => {
        if (!a.name) throw new Error("extension name required");
        if ("renderer" in a) {
          let s = n.renderers[a.name];
          s ? n.renderers[a.name] = function(...i) {
            let l = a.renderer.apply(this, i);
            return l === !1 && (l = s.apply(this, i)), l;
          } : n.renderers[a.name] = a.renderer;
        }
        if ("tokenizer" in a) {
          if (!a.level || a.level !== "block" && a.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = n[a.level];
          s ? s.unshift(a.tokenizer) : n[a.level] = [a.tokenizer], a.start && (a.level === "block" ? n.startBlock ? n.startBlock.push(a.start) : n.startBlock = [a.start] : a.level === "inline" && (n.startInline ? n.startInline.push(a.start) : n.startInline = [a.start]));
        }
        "childTokens" in a && a.childTokens && (n.childTokens[a.name] = a.childTokens);
      }), o.extensions = n), r.renderer) {
        let a = this.defaults.renderer || new sa(this.defaults);
        for (let s in r.renderer) {
          if (!(s in a)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let i = s, l = r.renderer[i], u = a[i];
          a[i] = (...f) => {
            let p = l.apply(a, f);
            return p === !1 && (p = u.apply(a, f)), p || "";
          };
        }
        o.renderer = a;
      }
      if (r.tokenizer) {
        let a = this.defaults.tokenizer || new aa(this.defaults);
        for (let s in r.tokenizer) {
          if (!(s in a)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let i = s, l = r.tokenizer[i], u = a[i];
          a[i] = (...f) => {
            let p = l.apply(a, f);
            return p === !1 && (p = u.apply(a, f)), p;
          };
        }
        o.tokenizer = a;
      }
      if (r.hooks) {
        let a = this.defaults.hooks || new ao();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let i = s, l = r.hooks[i], u = a[i];
          ao.passThroughHooks.has(s) ? a[i] = (f) => {
            if (this.defaults.async && ao.passThroughHooksRespectAsync.has(s)) return (async () => {
              let m = await l.call(a, f);
              return u.call(a, m);
            })();
            let p = l.call(a, f);
            return u.call(a, p);
          } : a[i] = (...f) => {
            if (this.defaults.async) return (async () => {
              let m = await l.apply(a, f);
              return m === !1 && (m = await u.apply(a, f)), m;
            })();
            let p = l.apply(a, f);
            return p === !1 && (p = u.apply(a, f)), p;
          };
        }
        o.hooks = a;
      }
      if (r.walkTokens) {
        let a = this.defaults.walkTokens, s = r.walkTokens;
        o.walkTokens = function(i) {
          let l = [];
          return l.push(s.call(this, i)), a && (l = l.concat(a.call(this, i))), l;
        };
      }
      this.defaults = { ...this.defaults, ...o };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, n) {
    return Jt.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return en.parse(t, n ?? this.defaults);
  }
  parseMarkdown(t) {
    return (n, r) => {
      let o = { ...r }, a = { ...this.defaults, ...o }, s = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && o.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = t), a.async) return (async () => {
        let i = a.hooks ? await a.hooks.preprocess(n) : n, l = await (a.hooks ? await a.hooks.provideLexer() : t ? Jt.lex : Jt.lexInline)(i, a), u = a.hooks ? await a.hooks.processAllTokens(l) : l;
        a.walkTokens && await Promise.all(this.walkTokens(u, a.walkTokens));
        let f = await (a.hooks ? await a.hooks.provideParser() : t ? en.parse : en.parseInline)(u, a);
        return a.hooks ? await a.hooks.postprocess(f) : f;
      })().catch(s);
      try {
        a.hooks && (n = a.hooks.preprocess(n));
        let i = (a.hooks ? a.hooks.provideLexer() : t ? Jt.lex : Jt.lexInline)(n, a);
        a.hooks && (i = a.hooks.processAllTokens(i)), a.walkTokens && this.walkTokens(i, a.walkTokens);
        let l = (a.hooks ? a.hooks.provideParser() : t ? en.parse : en.parseInline)(i, a);
        return a.hooks && (l = a.hooks.postprocess(l)), l;
      } catch (i) {
        return s(i);
      }
    };
  }
  onError(t, n) {
    return (r) => {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let o = "<p>An error occurred:</p><pre>" + Cn(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, fr = new Zm();
function xe(e, t) {
  return fr.parse(e, t);
}
xe.options = xe.setOptions = function(e) {
  return fr.setOptions(e), xe.defaults = fr.defaults, pu(xe.defaults), xe;
};
xe.getDefaults = Fs;
xe.defaults = hr;
xe.use = function(...e) {
  return fr.use(...e), xe.defaults = fr.defaults, pu(xe.defaults), xe;
};
xe.walkTokens = function(e, t) {
  return fr.walkTokens(e, t);
};
xe.parseInline = fr.parseInline;
xe.Parser = en;
xe.parser = en.parse;
xe.Renderer = sa;
xe.TextRenderer = Gs;
xe.Lexer = Jt;
xe.lexer = Jt.lex;
xe.Tokenizer = aa;
xe.Hooks = ao;
xe.parse = xe;
xe.options;
xe.setOptions;
xe.use;
xe.walkTokens;
xe.parseInline;
en.parse;
Jt.lex;
const Xm = ["disabled"], Qm = {
  key: 0,
  class: "custom-button__loading"
}, Jm = /* @__PURE__ */ ne({
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
    return (n, r) => (x(), K("button", {
      class: U([
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
      e.loading ? (x(), K("div", Qm, r[1] || (r[1] = [
        w(
          "svg",
          {
            class: "custom-button__spinner",
            viewBox: "0 0 50 50"
          },
          [
            w("circle", {
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
      ]))) : Q("v-if", !0),
      me(n.$slots, "default", {}, void 0, !0)
    ], 10, Xm));
  }
}), Ks = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, On = /* @__PURE__ */ Ks(Jm, [["__scopeId", "data-v-9497085f"]]), Eu = Symbol(), Qo = "el", eh = "is-", ir = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Su = Symbol("namespaceContextKey"), Ys = (e) => {
  const t = e || (It() ? Ne(Su, j(Qo)) : j(Qo));
  return I(() => c(t) || Qo);
}, at = (e, t) => {
  const n = Ys(t);
  return {
    namespace: n,
    b: (g = "") => ir(n.value, e, g, "", ""),
    e: (g) => g ? ir(n.value, e, "", g, "") : "",
    m: (g) => g ? ir(n.value, e, "", "", g) : "",
    be: (g, E) => g && E ? ir(n.value, e, g, E, "") : "",
    em: (g, E) => g && E ? ir(n.value, e, "", g, E) : "",
    bm: (g, E) => g && E ? ir(n.value, e, g, "", E) : "",
    bem: (g, E, d) => g && E && d ? ir(n.value, e, g, E, d) : "",
    is: (g, ...E) => {
      const d = E.length >= 1 ? E[0] : !0;
      return g && d ? `${eh}${g}` : "";
    },
    cssVar: (g) => {
      const E = {};
      for (const d in g)
        g[d] && (E[`--${n.value}-${d}`] = g[d]);
      return E;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const E = {};
      for (const d in g)
        g[d] && (E[`--${n.value}-${e}-${d}`] = g[d]);
      return E;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const yo = () => {
}, th = Object.prototype.hasOwnProperty, fi = (e, t) => th.call(e, t), mn = Array.isArray, Ke = (e) => typeof e == "function", Et = (e) => typeof e == "string", Bt = (e) => e !== null && typeof e == "object", di = (e) => (Bt(e) || Ke(e)) && Ke(e.then) && Ke(e.catch), nh = Object.prototype.toString, rh = (e) => nh.call(e), oh = (e) => rh(e) === "[object Object]";
var Au = typeof global == "object" && global && global.Object === Object && global, ah = typeof self == "object" && self && self.Object === Object && self, En = Au || ah || Function("return this")(), wn = En.Symbol, Cu = Object.prototype, sh = Cu.hasOwnProperty, lh = Cu.toString, eo = wn ? wn.toStringTag : void 0;
function ih(e) {
  var t = sh.call(e, eo), n = e[eo];
  try {
    e[eo] = void 0;
    var r = !0;
  } catch {
  }
  var o = lh.call(e);
  return r && (t ? e[eo] = n : delete e[eo]), o;
}
var ch = Object.prototype, uh = ch.toString;
function fh(e) {
  return uh.call(e);
}
var dh = "[object Null]", ph = "[object Undefined]", pi = wn ? wn.toStringTag : void 0;
function Hr(e) {
  return e == null ? e === void 0 ? ph : dh : pi && pi in Object(e) ? ih(e) : fh(e);
}
function $r(e) {
  return e != null && typeof e == "object";
}
var mh = "[object Symbol]";
function ka(e) {
  return typeof e == "symbol" || $r(e) && Hr(e) == mh;
}
function hh(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var an = Array.isArray, mi = wn ? wn.prototype : void 0, hi = mi ? mi.toString : void 0;
function Ou(e) {
  if (typeof e == "string")
    return e;
  if (an(e))
    return hh(e, Ou) + "";
  if (ka(e))
    return hi ? hi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var gh = /\s/;
function vh(e) {
  for (var t = e.length; t-- && gh.test(e.charAt(t)); )
    ;
  return t;
}
var bh = /^\s+/;
function yh(e) {
  return e && e.slice(0, vh(e) + 1).replace(bh, "");
}
function er(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var gi = NaN, _h = /^[-+]0x[0-9a-f]+$/i, wh = /^0b[01]+$/i, kh = /^0o[0-7]+$/i, Th = parseInt;
function vi(e) {
  if (typeof e == "number")
    return e;
  if (ka(e))
    return gi;
  if (er(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = er(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = yh(e);
  var n = wh.test(e);
  return n || kh.test(e) ? Th(e.slice(2), n ? 2 : 8) : _h.test(e) ? gi : +e;
}
function Lu(e) {
  return e;
}
var Eh = "[object AsyncFunction]", Sh = "[object Function]", Ah = "[object GeneratorFunction]", Ch = "[object Proxy]";
function Iu(e) {
  if (!er(e))
    return !1;
  var t = Hr(e);
  return t == Sh || t == Ah || t == Eh || t == Ch;
}
var Wa = En["__core-js_shared__"], bi = function() {
  var e = /[^.]+$/.exec(Wa && Wa.keys && Wa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Oh(e) {
  return !!bi && bi in e;
}
var Lh = Function.prototype, Ih = Lh.toString;
function gr(e) {
  if (e != null) {
    try {
      return Ih.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Rh = /[\\^$.*+?()[\]{}|]/g, xh = /^\[object .+?Constructor\]$/, Nh = Function.prototype, Ph = Object.prototype, $h = Nh.toString, Mh = Ph.hasOwnProperty, Dh = RegExp(
  "^" + $h.call(Mh).replace(Rh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Fh(e) {
  if (!er(e) || Oh(e))
    return !1;
  var t = Iu(e) ? Dh : xh;
  return t.test(gr(e));
}
function zh(e, t) {
  return e?.[t];
}
function vr(e, t) {
  var n = zh(e, t);
  return Fh(n) ? n : void 0;
}
var gs = vr(En, "WeakMap");
function Bh(e, t, n) {
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
var Vh = 800, jh = 16, Uh = Date.now;
function Hh(e) {
  var t = 0, n = 0;
  return function() {
    var r = Uh(), o = jh - (r - n);
    if (n = r, o > 0) {
      if (++t >= Vh)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Wh(e) {
  return function() {
    return e;
  };
}
var la = function() {
  try {
    var e = vr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Gh = la ? function(e, t) {
  return la(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Wh(t),
    writable: !0
  });
} : Lu, Kh = Hh(Gh);
function Yh(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var qh = 9007199254740991, Zh = /^(?:0|[1-9]\d*)$/;
function qs(e, t) {
  var n = typeof e;
  return t = t ?? qh, !!t && (n == "number" || n != "symbol" && Zh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Xh(e, t, n) {
  t == "__proto__" && la ? la(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Zs(e, t) {
  return e === t || e !== e && t !== t;
}
var Qh = Object.prototype, Jh = Qh.hasOwnProperty;
function eg(e, t, n) {
  var r = e[t];
  (!(Jh.call(e, t) && Zs(r, n)) || n === void 0 && !(t in e)) && Xh(e, t, n);
}
var yi = Math.max;
function tg(e, t, n) {
  return t = yi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = yi(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Bh(e, this, i);
  };
}
var ng = 9007199254740991;
function Xs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ng;
}
function rg(e) {
  return e != null && Xs(e.length) && !Iu(e);
}
var og = Object.prototype;
function ag(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || og;
  return e === n;
}
function sg(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var lg = "[object Arguments]";
function _i(e) {
  return $r(e) && Hr(e) == lg;
}
var Ru = Object.prototype, ig = Ru.hasOwnProperty, cg = Ru.propertyIsEnumerable, Qs = _i(/* @__PURE__ */ function() {
  return arguments;
}()) ? _i : function(e) {
  return $r(e) && ig.call(e, "callee") && !cg.call(e, "callee");
};
function ug() {
  return !1;
}
var xu = typeof exports == "object" && exports && !exports.nodeType && exports, wi = xu && typeof module == "object" && module && !module.nodeType && module, fg = wi && wi.exports === xu, ki = fg ? En.Buffer : void 0, dg = ki ? ki.isBuffer : void 0, vs = dg || ug, pg = "[object Arguments]", mg = "[object Array]", hg = "[object Boolean]", gg = "[object Date]", vg = "[object Error]", bg = "[object Function]", yg = "[object Map]", _g = "[object Number]", wg = "[object Object]", kg = "[object RegExp]", Tg = "[object Set]", Eg = "[object String]", Sg = "[object WeakMap]", Ag = "[object ArrayBuffer]", Cg = "[object DataView]", Og = "[object Float32Array]", Lg = "[object Float64Array]", Ig = "[object Int8Array]", Rg = "[object Int16Array]", xg = "[object Int32Array]", Ng = "[object Uint8Array]", Pg = "[object Uint8ClampedArray]", $g = "[object Uint16Array]", Mg = "[object Uint32Array]", ze = {};
ze[Og] = ze[Lg] = ze[Ig] = ze[Rg] = ze[xg] = ze[Ng] = ze[Pg] = ze[$g] = ze[Mg] = !0;
ze[pg] = ze[mg] = ze[Ag] = ze[hg] = ze[Cg] = ze[gg] = ze[vg] = ze[bg] = ze[yg] = ze[_g] = ze[wg] = ze[kg] = ze[Tg] = ze[Eg] = ze[Sg] = !1;
function Dg(e) {
  return $r(e) && Xs(e.length) && !!ze[Hr(e)];
}
function Fg(e) {
  return function(t) {
    return e(t);
  };
}
var Nu = typeof exports == "object" && exports && !exports.nodeType && exports, io = Nu && typeof module == "object" && module && !module.nodeType && module, zg = io && io.exports === Nu, Ga = zg && Au.process, Ti = function() {
  try {
    var e = io && io.require && io.require("util").types;
    return e || Ga && Ga.binding && Ga.binding("util");
  } catch {
  }
}(), Ei = Ti && Ti.isTypedArray, Pu = Ei ? Fg(Ei) : Dg, Bg = Object.prototype, Vg = Bg.hasOwnProperty;
function jg(e, t) {
  var n = an(e), r = !n && Qs(e), o = !n && !r && vs(e), a = !n && !r && !o && Pu(e), s = n || r || o || a, i = s ? sg(e.length, String) : [], l = i.length;
  for (var u in e)
    Vg.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    qs(u, l))) && i.push(u);
  return i;
}
function Ug(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Hg = Ug(Object.keys, Object), Wg = Object.prototype, Gg = Wg.hasOwnProperty;
function Kg(e) {
  if (!ag(e))
    return Hg(e);
  var t = [];
  for (var n in Object(e))
    Gg.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function $u(e) {
  return rg(e) ? jg(e) : Kg(e);
}
var Yg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, qg = /^\w*$/;
function Js(e, t) {
  if (an(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ka(e) ? !0 : qg.test(e) || !Yg.test(e) || t != null && e in Object(t);
}
var _o = vr(Object, "create");
function Zg() {
  this.__data__ = _o ? _o(null) : {}, this.size = 0;
}
function Xg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Qg = "__lodash_hash_undefined__", Jg = Object.prototype, ev = Jg.hasOwnProperty;
function tv(e) {
  var t = this.__data__;
  if (_o) {
    var n = t[e];
    return n === Qg ? void 0 : n;
  }
  return ev.call(t, e) ? t[e] : void 0;
}
var nv = Object.prototype, rv = nv.hasOwnProperty;
function ov(e) {
  var t = this.__data__;
  return _o ? t[e] !== void 0 : rv.call(t, e);
}
var av = "__lodash_hash_undefined__";
function sv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = _o && t === void 0 ? av : t, this;
}
function dr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
dr.prototype.clear = Zg;
dr.prototype.delete = Xg;
dr.prototype.get = tv;
dr.prototype.has = ov;
dr.prototype.set = sv;
function lv() {
  this.__data__ = [], this.size = 0;
}
function Ta(e, t) {
  for (var n = e.length; n--; )
    if (Zs(e[n][0], t))
      return n;
  return -1;
}
var iv = Array.prototype, cv = iv.splice;
function uv(e) {
  var t = this.__data__, n = Ta(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : cv.call(t, n, 1), --this.size, !0;
}
function fv(e) {
  var t = this.__data__, n = Ta(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function dv(e) {
  return Ta(this.__data__, e) > -1;
}
function pv(e, t) {
  var n = this.__data__, r = Ta(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Un(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Un.prototype.clear = lv;
Un.prototype.delete = uv;
Un.prototype.get = fv;
Un.prototype.has = dv;
Un.prototype.set = pv;
var wo = vr(En, "Map");
function mv() {
  this.size = 0, this.__data__ = {
    hash: new dr(),
    map: new (wo || Un)(),
    string: new dr()
  };
}
function hv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ea(e, t) {
  var n = e.__data__;
  return hv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function gv(e) {
  var t = Ea(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function vv(e) {
  return Ea(this, e).get(e);
}
function bv(e) {
  return Ea(this, e).has(e);
}
function yv(e, t) {
  var n = Ea(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Hn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Hn.prototype.clear = mv;
Hn.prototype.delete = gv;
Hn.prototype.get = vv;
Hn.prototype.has = bv;
Hn.prototype.set = yv;
var _v = "Expected a function";
function el(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(_v);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (el.Cache || Hn)(), n;
}
el.Cache = Hn;
var wv = 500;
function kv(e) {
  var t = el(e, function(r) {
    return n.size === wv && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Tv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ev = /\\(\\)?/g, Sv = kv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Tv, function(n, r, o, a) {
    t.push(o ? a.replace(Ev, "$1") : r || n);
  }), t;
});
function Av(e) {
  return e == null ? "" : Ou(e);
}
function Sa(e, t) {
  return an(e) ? e : Js(e, t) ? [e] : Sv(Av(e));
}
function Ao(e) {
  if (typeof e == "string" || ka(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function tl(e, t) {
  t = Sa(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Ao(t[n++])];
  return n && n == r ? e : void 0;
}
function Xn(e, t, n) {
  var r = e == null ? void 0 : tl(e, t);
  return r === void 0 ? n : r;
}
function Mu(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Si = wn ? wn.isConcatSpreadable : void 0;
function Cv(e) {
  return an(e) || Qs(e) || !!(Si && e && e[Si]);
}
function Ov(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Cv), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? Mu(o, i) : o[o.length] = i;
  }
  return o;
}
function Lv(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ov(e) : [];
}
function Iv(e) {
  return Kh(tg(e, void 0, Lv), e + "");
}
function Zn() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return an(e) ? e : [e];
}
function Rv() {
  this.__data__ = new Un(), this.size = 0;
}
function xv(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Nv(e) {
  return this.__data__.get(e);
}
function Pv(e) {
  return this.__data__.has(e);
}
var $v = 200;
function Mv(e, t) {
  var n = this.__data__;
  if (n instanceof Un) {
    var r = n.__data__;
    if (!wo || r.length < $v - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Hn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Dn(e) {
  var t = this.__data__ = new Un(e);
  this.size = t.size;
}
Dn.prototype.clear = Rv;
Dn.prototype.delete = xv;
Dn.prototype.get = Nv;
Dn.prototype.has = Pv;
Dn.prototype.set = Mv;
function Dv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function Fv() {
  return [];
}
var zv = Object.prototype, Bv = zv.propertyIsEnumerable, Ai = Object.getOwnPropertySymbols, Vv = Ai ? function(e) {
  return e == null ? [] : (e = Object(e), Dv(Ai(e), function(t) {
    return Bv.call(e, t);
  }));
} : Fv;
function jv(e, t, n) {
  var r = t(e);
  return an(e) ? r : Mu(r, n(e));
}
function Ci(e) {
  return jv(e, $u, Vv);
}
var bs = vr(En, "DataView"), ys = vr(En, "Promise"), _s = vr(En, "Set"), Oi = "[object Map]", Uv = "[object Object]", Li = "[object Promise]", Ii = "[object Set]", Ri = "[object WeakMap]", xi = "[object DataView]", Hv = gr(bs), Wv = gr(wo), Gv = gr(ys), Kv = gr(_s), Yv = gr(gs), qn = Hr;
(bs && qn(new bs(new ArrayBuffer(1))) != xi || wo && qn(new wo()) != Oi || ys && qn(ys.resolve()) != Li || _s && qn(new _s()) != Ii || gs && qn(new gs()) != Ri) && (qn = function(e) {
  var t = Hr(e), n = t == Uv ? e.constructor : void 0, r = n ? gr(n) : "";
  if (r)
    switch (r) {
      case Hv:
        return xi;
      case Wv:
        return Oi;
      case Gv:
        return Li;
      case Kv:
        return Ii;
      case Yv:
        return Ri;
    }
  return t;
});
var Ni = En.Uint8Array, qv = "__lodash_hash_undefined__";
function Zv(e) {
  return this.__data__.set(e, qv), this;
}
function Xv(e) {
  return this.__data__.has(e);
}
function ia(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Hn(); ++t < n; )
    this.add(e[t]);
}
ia.prototype.add = ia.prototype.push = Zv;
ia.prototype.has = Xv;
function Qv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Jv(e, t) {
  return e.has(t);
}
var eb = 1, tb = 2;
function Du(e, t, n, r, o, a) {
  var s = n & eb, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), f = a.get(t);
  if (u && f)
    return u == t && f == e;
  var p = -1, m = !0, b = n & tb ? new ia() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var v = e[p], g = t[p];
    if (r)
      var E = s ? r(g, v, p, t, e, a) : r(v, g, p, e, t, a);
    if (E !== void 0) {
      if (E)
        continue;
      m = !1;
      break;
    }
    if (b) {
      if (!Qv(t, function(d, A) {
        if (!Jv(b, A) && (v === d || o(v, d, n, r, a)))
          return b.push(A);
      })) {
        m = !1;
        break;
      }
    } else if (!(v === g || o(v, g, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), m;
}
function nb(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function rb(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var ob = 1, ab = 2, sb = "[object Boolean]", lb = "[object Date]", ib = "[object Error]", cb = "[object Map]", ub = "[object Number]", fb = "[object RegExp]", db = "[object Set]", pb = "[object String]", mb = "[object Symbol]", hb = "[object ArrayBuffer]", gb = "[object DataView]", Pi = wn ? wn.prototype : void 0, Ka = Pi ? Pi.valueOf : void 0;
function vb(e, t, n, r, o, a, s) {
  switch (n) {
    case gb:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case hb:
      return !(e.byteLength != t.byteLength || !a(new Ni(e), new Ni(t)));
    case sb:
    case lb:
    case ub:
      return Zs(+e, +t);
    case ib:
      return e.name == t.name && e.message == t.message;
    case fb:
    case pb:
      return e == t + "";
    case cb:
      var i = nb;
    case db:
      var l = r & ob;
      if (i || (i = rb), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= ab, s.set(e, t);
      var f = Du(i(e), i(t), r, o, a, s);
      return s.delete(e), f;
    case mb:
      if (Ka)
        return Ka.call(e) == Ka.call(t);
  }
  return !1;
}
var bb = 1, yb = Object.prototype, _b = yb.hasOwnProperty;
function wb(e, t, n, r, o, a) {
  var s = n & bb, i = Ci(e), l = i.length, u = Ci(t), f = u.length;
  if (l != f && !s)
    return !1;
  for (var p = l; p--; ) {
    var m = i[p];
    if (!(s ? m in t : _b.call(t, m)))
      return !1;
  }
  var b = a.get(e), v = a.get(t);
  if (b && v)
    return b == t && v == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var E = s; ++p < l; ) {
    m = i[p];
    var d = e[m], A = t[m];
    if (r)
      var L = s ? r(A, d, m, t, e, a) : r(d, A, m, e, t, a);
    if (!(L === void 0 ? d === A || o(d, A, n, r, a) : L)) {
      g = !1;
      break;
    }
    E || (E = m == "constructor");
  }
  if (g && !E) {
    var S = e.constructor, _ = t.constructor;
    S != _ && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof _ == "function" && _ instanceof _) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var kb = 1, $i = "[object Arguments]", Mi = "[object Array]", jo = "[object Object]", Tb = Object.prototype, Di = Tb.hasOwnProperty;
function Eb(e, t, n, r, o, a) {
  var s = an(e), i = an(t), l = s ? Mi : qn(e), u = i ? Mi : qn(t);
  l = l == $i ? jo : l, u = u == $i ? jo : u;
  var f = l == jo, p = u == jo, m = l == u;
  if (m && vs(e)) {
    if (!vs(t))
      return !1;
    s = !0, f = !1;
  }
  if (m && !f)
    return a || (a = new Dn()), s || Pu(e) ? Du(e, t, n, r, o, a) : vb(e, t, l, n, r, o, a);
  if (!(n & kb)) {
    var b = f && Di.call(e, "__wrapped__"), v = p && Di.call(t, "__wrapped__");
    if (b || v) {
      var g = b ? e.value() : e, E = v ? t.value() : t;
      return a || (a = new Dn()), o(g, E, n, r, a);
    }
  }
  return m ? (a || (a = new Dn()), wb(e, t, n, r, o, a)) : !1;
}
function Aa(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !$r(e) && !$r(t) ? e !== e && t !== t : Eb(e, t, n, r, Aa, o);
}
var Sb = 1, Ab = 2;
function Cb(e, t, n, r) {
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
      var f = new Dn(), p;
      if (!(p === void 0 ? Aa(u, l, Sb | Ab, r, f) : p))
        return !1;
    }
  }
  return !0;
}
function Fu(e) {
  return e === e && !er(e);
}
function Ob(e) {
  for (var t = $u(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Fu(o)];
  }
  return t;
}
function zu(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Lb(e) {
  var t = Ob(e);
  return t.length == 1 && t[0][2] ? zu(t[0][0], t[0][1]) : function(n) {
    return n === e || Cb(n, e, t);
  };
}
function Ib(e, t) {
  return e != null && t in Object(e);
}
function Rb(e, t, n) {
  t = Sa(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Ao(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Xs(o) && qs(s, o) && (an(e) || Qs(e)));
}
function Bu(e, t) {
  return e != null && Rb(e, t, Ib);
}
var xb = 1, Nb = 2;
function Pb(e, t) {
  return Js(e) && Fu(t) ? zu(Ao(e), t) : function(n) {
    var r = Xn(n, e);
    return r === void 0 && r === t ? Bu(n, e) : Aa(t, r, xb | Nb);
  };
}
function $b(e) {
  return function(t) {
    return t?.[e];
  };
}
function Mb(e) {
  return function(t) {
    return tl(t, e);
  };
}
function Db(e) {
  return Js(e) ? $b(Ao(e)) : Mb(e);
}
function Fb(e) {
  return typeof e == "function" ? e : e == null ? Lu : typeof e == "object" ? an(e) ? Pb(e[0], e[1]) : Lb(e) : Db(e);
}
var Ya = function() {
  return En.Date.now();
}, zb = "Expected a function", Bb = Math.max, Vb = Math.min;
function jb(e, t, n) {
  var r, o, a, s, i, l, u = 0, f = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(zb);
  t = vi(t) || 0, er(n) && (f = !!n.leading, p = "maxWait" in n, a = p ? Bb(vi(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function b(C) {
    var O = r, H = o;
    return r = o = void 0, u = C, s = e.apply(H, O), s;
  }
  function v(C) {
    return u = C, i = setTimeout(d, t), f ? b(C) : s;
  }
  function g(C) {
    var O = C - l, H = C - u, G = t - O;
    return p ? Vb(G, a - H) : G;
  }
  function E(C) {
    var O = C - l, H = C - u;
    return l === void 0 || O >= t || O < 0 || p && H >= a;
  }
  function d() {
    var C = Ya();
    if (E(C))
      return A(C);
    i = setTimeout(d, g(C));
  }
  function A(C) {
    return i = void 0, m && r ? b(C) : (r = o = void 0, s);
  }
  function L() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function S() {
    return i === void 0 ? s : A(Ya());
  }
  function _() {
    var C = Ya(), O = E(C);
    if (r = arguments, o = this, l = C, O) {
      if (i === void 0)
        return v(l);
      if (p)
        return clearTimeout(i), i = setTimeout(d, t), b(l);
    }
    return i === void 0 && (i = setTimeout(d, t)), s;
  }
  return _.cancel = L, _.flush = S, _;
}
function Ub(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Yh(e, Fb(t), o);
}
function ca(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function co(e, t) {
  return Aa(e, t);
}
function Fn(e) {
  return e == null;
}
function Hb(e) {
  return e === void 0;
}
function Wb(e, t, n, r) {
  if (!er(e))
    return e;
  t = Sa(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = Ao(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var f = i[l];
      u = void 0, u === void 0 && (u = er(f) ? f : qs(t[o + 1]) ? [] : {});
    }
    eg(i, l, u), i = i[l];
  }
  return e;
}
function Gb(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = tl(e, s);
    n(i, s) && Wb(a, Sa(s, e), i);
  }
  return a;
}
function Kb(e, t) {
  return Gb(e, t, function(n, r) {
    return Bu(e, r);
  });
}
var Yb = Iv(function(e, t) {
  return e == null ? {} : Kb(e, t);
});
const hn = (e) => e === void 0, Jn = (e) => typeof e == "boolean", Re = (e) => typeof e == "number", rn = (e) => typeof Element > "u" ? !1 : e instanceof Element, qb = (e) => Et(e) ? !Number.isNaN(Number(e)) : !1;
var Zb = Object.defineProperty, Xb = Object.defineProperties, Qb = Object.getOwnPropertyDescriptors, Fi = Object.getOwnPropertySymbols, Jb = Object.prototype.hasOwnProperty, e0 = Object.prototype.propertyIsEnumerable, zi = (e, t, n) => t in e ? Zb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, t0 = (e, t) => {
  for (var n in t || (t = {}))
    Jb.call(t, n) && zi(e, n, t[n]);
  if (Fi)
    for (var n of Fi(t))
      e0.call(t, n) && zi(e, n, t[n]);
  return e;
}, n0 = (e, t) => Xb(e, Qb(t));
function r0(e, t) {
  var n;
  const r = Qn();
  return Vc(() => {
    r.value = e();
  }, n0(t0({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Ls(r);
}
var Bi;
const ot = typeof window < "u", o0 = (e) => typeof e == "string", Vu = () => {
}, ws = ot && ((Bi = window?.navigator) == null ? void 0 : Bi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function nl(e) {
  return typeof e == "function" ? e() : c(e);
}
function a0(e) {
  return e;
}
function Co(e) {
  return Qf() ? (Jf(e), !0) : !1;
}
function s0(e, t = !0) {
  It() ? nt(e) : t ? e() : Je(e);
}
function ju(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = j(!1);
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
    }, nl(t));
  }
  return r && (o.value = !0, ot && l()), Co(i), {
    isPending: Ls(o),
    start: l,
    stop: i
  };
}
function $n(e) {
  var t;
  const n = nl(e);
  return (t = n?.$el) != null ? t : n;
}
const Ca = ot ? window : void 0;
function on(...e) {
  let t, n, r, o;
  if (o0(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Ca) : [t, n, r, o] = e, !t)
    return Vu;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, p, m, b) => (f.addEventListener(p, m, b), () => f.removeEventListener(p, m, b)), l = ve(() => [$n(t), nl(o)], ([f, p]) => {
    s(), f && a.push(...n.flatMap((m) => r.map((b) => i(f, m, b, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return Co(u), u;
}
let Vi = !1;
function l0(e, t, n = {}) {
  const { window: r = Ca, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  ws && !Vi && (Vi = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", Vu)));
  let i = !0;
  const l = (m) => o.some((b) => {
    if (typeof b == "string")
      return Array.from(r.document.querySelectorAll(b)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = $n(b);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), f = [
    on(r, "click", (m) => {
      const b = $n(e);
      if (!(!b || b === m.target || m.composedPath().includes(b))) {
        if (m.detail === 0 && (i = !l(m)), !i) {
          i = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    on(r, "pointerdown", (m) => {
      const b = $n(e);
      b && (i = !m.composedPath().includes(b) && !l(m));
    }, { passive: !0 }),
    s && on(r, "blur", (m) => {
      var b;
      const v = $n(e);
      ((b = r.document.activeElement) == null ? void 0 : b.tagName) === "IFRAME" && !v?.contains(r.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => f.forEach((m) => m());
}
function Uu(e, t = !1) {
  const n = j(), r = () => n.value = !!e();
  return r(), s0(r, t), n;
}
const ji = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ui = "__vueuse_ssr_handlers__";
ji[Ui] = ji[Ui] || {};
var Hi = Object.getOwnPropertySymbols, i0 = Object.prototype.hasOwnProperty, c0 = Object.prototype.propertyIsEnumerable, u0 = (e, t) => {
  var n = {};
  for (var r in e)
    i0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Hi)
    for (var r of Hi(e))
      t.indexOf(r) < 0 && c0.call(e, r) && (n[r] = e[r]);
  return n;
};
function pn(e, t, n = {}) {
  const r = n, { window: o = Ca } = r, a = u0(r, ["window"]);
  let s;
  const i = Uu(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = ve(() => $n(e), (p) => {
    l(), i.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return Co(f), {
    isSupported: i,
    stop: f
  };
}
var Wi = Object.getOwnPropertySymbols, f0 = Object.prototype.hasOwnProperty, d0 = Object.prototype.propertyIsEnumerable, p0 = (e, t) => {
  var n = {};
  for (var r in e)
    f0.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Wi)
    for (var r of Wi(e))
      t.indexOf(r) < 0 && d0.call(e, r) && (n[r] = e[r]);
  return n;
};
function m0(e, t, n = {}) {
  const r = n, { window: o = Ca } = r, a = p0(r, ["window"]);
  let s;
  const i = Uu(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = ve(() => $n(e), (p) => {
    l(), i.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), f = () => {
    l(), u();
  };
  return Co(f), {
    isSupported: i,
    stop: f
  };
}
var Gi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Gi || (Gi = {}));
var h0 = Object.defineProperty, Ki = Object.getOwnPropertySymbols, g0 = Object.prototype.hasOwnProperty, v0 = Object.prototype.propertyIsEnumerable, Yi = (e, t, n) => t in e ? h0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, b0 = (e, t) => {
  for (var n in t || (t = {}))
    g0.call(t, n) && Yi(e, n, t[n]);
  if (Ki)
    for (var n of Ki(t))
      v0.call(t, n) && Yi(e, n, t[n]);
  return e;
};
const y0 = {
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
b0({
  linear: a0
}, y0);
class _0 extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function rl(e, t) {
  throw new _0(`[${e}] ${t}`);
}
const qi = {
  current: 0
}, Zi = j(0), Hu = 2e3, Xi = Symbol("elZIndexContextKey"), Wu = Symbol("zIndexContextKey"), Gu = (e) => {
  const t = It() ? Ne(Xi, qi) : qi, n = e || (It() ? Ne(Wu, void 0) : void 0), r = I(() => {
    const s = c(n);
    return Re(s) ? s : Hu;
  }), o = I(() => r.value + Zi.value), a = () => (t.current++, Zi.value = t.current, o.value);
  return !ot && Ne(Xi), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var w0 = {
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
const k0 = (e) => (t, n) => T0(t, n, c(e)), T0 = (e, t, n) => Xn(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), E0 = (e) => {
  const t = I(() => c(e).name), n = po(e) ? e : j(e);
  return {
    lang: t,
    locale: n,
    t: k0(e)
  };
}, Ku = Symbol("localeContextKey"), ol = (e) => {
  const t = e || Ne(Ku, j());
  return E0(I(() => t.value || w0));
}, Yu = "__epPropKey", pe = (e) => e, S0 = (e) => Bt(e) && !!e[Yu], Oa = (e, t) => {
  if (!Bt(e) || S0(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), fi(e, "default") && p.push(o), f || (f = p.includes(u))), s && (f || (f = s(u))), !f && p.length > 0) {
        const m = [...new Set(p)].map((b) => JSON.stringify(b)).join(", ");
        ed(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Yu]: !0
  };
  return fi(e, "default") && (l.default = o), l;
}, Be = (e) => ca(Object.entries(e).map(([t, n]) => [
  t,
  Oa(n, t)
])), al = ["", "default", "small", "large"], La = Oa({
  type: String,
  values: al,
  required: !1
}), qu = Symbol("size"), A0 = () => {
  const e = Ne(qu, {});
  return I(() => c(e.size) || "");
}, Zu = Symbol("emptyValuesContextKey"), C0 = ["", void 0, null], O0 = void 0, Xu = Be({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ke(e) ? !e() : !e
  }
}), L0 = (e, t) => {
  const n = It() ? Ne(Zu, j({})) : j({}), r = I(() => e.emptyValues || n.value.emptyValues || C0), o = I(() => Ke(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ke(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : O0), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Qi = (e) => Object.keys(e), ua = j();
function Qu(e, t = void 0) {
  return It() ? Ne(Eu, ua) : ua;
}
function Ju(e, t) {
  const n = Qu(), r = at(e, I(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Qo;
  })), o = ol(I(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = Gu(I(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Hu;
  })), s = I(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return ef(I(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const ef = (e, t, n = !1) => {
  var r;
  const o = !!It(), a = o ? Qu() : void 0, s = (r = void 0) != null ? r : o ? _n : void 0;
  if (!s)
    return;
  const i = I(() => {
    const l = c(e);
    return a?.value ? I0(a.value, l) : l;
  });
  return s(Eu, i), s(Ku, I(() => i.value.locale)), s(Su, I(() => i.value.namespace)), s(Wu, I(() => i.value.zIndex)), s(qu, {
    size: I(() => i.value.size || "")
  }), s(Zu, I(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !ua.value) && (ua.value = i.value), i;
}, I0 = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Qi(e), ...Qi(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, mt = "update:modelValue", Vn = "change", zn = "input";
var Ue = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function Mr(e, t = "px") {
  if (!e)
    return "";
  if (Re(e) || qb(e))
    return `${e}${t}`;
  if (Et(e))
    return e;
}
function R0(e, t) {
  if (!ot)
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
const sn = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, tf = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), nf = (e) => (e.install = yo, e), x0 = Be({
  size: {
    type: pe([Number, String])
  },
  color: {
    type: String
  }
}), N0 = ne({
  name: "ElIcon",
  inheritAttrs: !1
}), P0 = /* @__PURE__ */ ne({
  ...N0,
  props: x0,
  setup(e) {
    const t = e, n = at("icon"), r = I(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: hn(o) ? void 0 : Mr(o),
        "--color": a
      };
    });
    return (o, a) => (x(), K("i", Rr({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      me(o.$slots, "default")
    ], 16));
  }
});
var $0 = /* @__PURE__ */ Ue(P0, [["__file", "icon.vue"]]);
const rt = sn($0);
/*! Element Plus Icons Vue v2.3.1 */
var M0 = /* @__PURE__ */ ne({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), rf = M0, D0 = /* @__PURE__ */ ne({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), F0 = D0, z0 = /* @__PURE__ */ ne({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      w("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), B0 = z0, V0 = /* @__PURE__ */ ne({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), j0 = V0, U0 = /* @__PURE__ */ ne({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      w("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), sl = U0, H0 = /* @__PURE__ */ ne({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), fa = H0, W0 = /* @__PURE__ */ ne({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      w("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), G0 = W0, K0 = /* @__PURE__ */ ne({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Y0 = K0, q0 = /* @__PURE__ */ ne({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), of = q0, Z0 = /* @__PURE__ */ ne({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), X0 = Z0, Q0 = /* @__PURE__ */ ne({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), J0 = Q0, ey = /* @__PURE__ */ ne({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ty = ey, ny = /* @__PURE__ */ ne({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), ry = ny, oy = /* @__PURE__ */ ne({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (x(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), ay = oy;
const gn = pe([
  String,
  Object,
  Function
]), sy = {
  Close: fa
}, ly = {
  Close: fa
}, da = {
  success: ty,
  warning: ay,
  error: j0,
  info: Y0
}, af = {
  validating: of,
  success: B0,
  error: sl
}, sf = () => ot && /firefox/i.test(window.navigator.userAgent);
let $t;
const iy = {
  height: "0",
  visibility: "hidden",
  overflow: sf() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, cy = [
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
function uy(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: cy.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function Ji(e, t = 1, n) {
  var r;
  $t || ($t = document.createElement("textarea"), document.body.appendChild($t));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = uy(e);
  i.forEach(([p, m]) => $t?.style.setProperty(p, m)), Object.entries(iy).forEach(([p, m]) => $t?.style.setProperty(p, m, "important")), $t.value = e.value || e.placeholder || "";
  let l = $t.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), $t.value = "";
  const f = $t.scrollHeight - o;
  if (Re(t)) {
    let p = f * t;
    s === "border-box" && (p = p + o + a), l = Math.max(p, l), u.minHeight = `${p}px`;
  }
  if (Re(n)) {
    let p = f * n;
    s === "border-box" && (p = p + o + a), l = Math.min(p, l);
  }
  return u.height = `${l}px`, (r = $t.parentNode) == null || r.removeChild($t), $t = void 0, u;
}
const lf = (e) => e, fy = Be({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), br = (e) => Yb(fy, e), dy = Be({
  id: {
    type: String,
    default: void 0
  },
  size: La,
  disabled: Boolean,
  modelValue: {
    type: pe([
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
    type: pe([Boolean, Object]),
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
    type: gn
  },
  prefixIcon: {
    type: gn
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
    type: pe([Object, Array, String]),
    default: () => lf({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...br(["ariaLabel"])
}), py = {
  [mt]: (e) => Et(e),
  input: (e) => Et(e),
  change: (e) => Et(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, my = ["class", "style"], hy = /^on[A-Z]/, gy = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = I(() => (n?.value || []).concat(my)), o = It();
  return o ? I(() => {
    var a;
    return ca(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && hy.test(s))));
  }) : I(() => ({}));
}, ll = Symbol("formContextKey"), pa = Symbol("formItemContextKey"), ec = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, vy = Symbol("elIdInjection"), cf = () => It() ? Ne(vy, ec) : ec, Ia = (e) => {
  const t = cf(), n = Ys();
  return r0(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Ra = () => {
  const e = Ne(ll, void 0), t = Ne(pa, void 0);
  return {
    form: e,
    formItem: t
  };
}, il = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = j(!1)), r || (r = j(!1));
  const o = j();
  let a;
  const s = I(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return nt(() => {
    a = ve([xn(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : Ia().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), ga(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, uf = (e) => {
  const t = It();
  return I(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, Oo = (e, t = {}) => {
  const n = j(void 0), r = t.prop ? n : uf("size"), o = t.global ? n : A0(), a = t.form ? { size: void 0 } : Ne(ll, void 0), s = t.formItem ? { size: void 0 } : Ne(pa, void 0);
  return I(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, cl = (e) => {
  const t = uf("disabled"), n = Ne(ll, void 0);
  return I(() => t.value || c(e) || n?.disabled || !1);
};
function ff(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = It(), { emit: s } = a, i = Qn(), l = j(!1), u = (m) => {
    Ke(t) && t(m) || l.value || (l.value = !0, s("focus", m), n?.());
  }, f = (m) => {
    var b;
    Ke(r) && r(m) || m.relatedTarget && ((b = i.value) != null && b.contains(m.relatedTarget)) || (l.value = !1, s("blur", m), o?.());
  }, p = () => {
    var m, b;
    (m = i.value) != null && m.contains(document.activeElement) && i.value !== document.activeElement || (b = e.value) == null || b.focus();
  };
  return ve(i, (m) => {
    m && m.setAttribute("tabindex", "-1");
  }), on(i, "focus", u, !0), on(i, "blur", f, !0), on(i, "click", p, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: f
  };
}
const by = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function df({
  afterComposition: e,
  emit: t
}) {
  const n = j(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, f = u[u.length - 1] || "";
    n.value = !by(f);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, Je(() => e(i)));
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
function yy(e) {
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
      const u = a[i - 1], f = o.indexOf(u, i - 1);
      f !== -1 && (l = f + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, r];
}
const _y = "ElInput", wy = ne({
  name: _y,
  inheritAttrs: !1
}), ky = /* @__PURE__ */ ne({
  ...wy,
  props: dy,
  emits: py,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = td(), a = gy(), s = nd(), i = I(() => [
      r.type === "textarea" ? g.b() : v.b(),
      v.m(m.value),
      v.is("disabled", b.value),
      v.is("exceed", Pe.value),
      {
        [v.b("group")]: s.prepend || s.append,
        [v.m("prefix")]: s.prefix || r.prefixIcon,
        [v.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [v.bm("suffix", "password-clear")]: le.value && J.value,
        [v.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = I(() => [
      v.e("wrapper"),
      v.is("focus", H.value)
    ]), { form: u, formItem: f } = Ra(), { inputId: p } = il(r, {
      formItemContext: f
    }), m = Oo(), b = cl(), v = at("input"), g = at("textarea"), E = Qn(), d = Qn(), A = j(!1), L = j(!1), S = j(), _ = Qn(r.inputStyle), C = I(() => E.value || d.value), { wrapperRef: O, isFocused: H, handleFocus: G, handleBlur: te } = ff(C, {
      beforeFocus() {
        return b.value;
      },
      afterBlur() {
        var T;
        r.validateEvent && ((T = f?.validate) == null || T.call(f, "blur").catch((P) => void 0));
      }
    }), ue = I(() => {
      var T;
      return (T = u?.statusIcon) != null ? T : !1;
    }), ee = I(() => f?.validateState || ""), he = I(() => ee.value && af[ee.value]), de = I(() => L.value ? ry : G0), N = I(() => [
      o.style
    ]), M = I(() => [
      r.inputStyle,
      _.value,
      { resize: r.resize }
    ]), z = I(() => Fn(r.modelValue) ? "" : String(r.modelValue)), le = I(() => r.clearable && !b.value && !r.readonly && !!z.value && (H.value || A.value)), J = I(() => r.showPassword && !b.value && !!z.value && (!!z.value || H.value)), be = I(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !b.value && !r.readonly && !r.showPassword), Z = I(() => z.value.length), Pe = I(() => !!be.value && Z.value > Number(r.maxlength)), Se = I(() => !!s.suffix || !!r.suffixIcon || le.value || r.showPassword || be.value || !!ee.value && ue.value), [_e, Ve] = yy(E);
    pn(d, (T) => {
      if (ce(), !be.value || r.resize !== "both")
        return;
      const P = T[0], { width: fe } = P.contentRect;
      S.value = {
        right: `calc(100% - ${fe + 15 + 6}px)`
      };
    });
    const ke = () => {
      const { type: T, autosize: P } = r;
      if (!(!ot || T !== "textarea" || !d.value))
        if (P) {
          const fe = Bt(P) ? P.minRows : void 0, Ee = Bt(P) ? P.maxRows : void 0, Ze = Ji(d.value, fe, Ee);
          _.value = {
            overflowY: "hidden",
            ...Ze
          }, Je(() => {
            d.value.offsetHeight, _.value = Ze;
          });
        } else
          _.value = {
            minHeight: Ji(d.value).minHeight
          };
    }, ce = ((T) => {
      let P = !1;
      return () => {
        var fe;
        if (P || !r.autosize)
          return;
        ((fe = d.value) == null ? void 0 : fe.offsetParent) === null || (T(), P = !0);
      };
    })(ke), qe = () => {
      const T = C.value, P = r.formatter ? r.formatter(z.value) : z.value;
      !T || T.value === P || (T.value = P);
    }, lt = async (T) => {
      _e();
      let { value: P } = T.target;
      if (r.formatter && r.parser && (P = r.parser(P)), !yt.value) {
        if (P === z.value) {
          qe();
          return;
        }
        n(mt, P), n(zn, P), await Je(), qe(), Ve();
      }
    }, je = (T) => {
      let { value: P } = T.target;
      r.formatter && r.parser && (P = r.parser(P)), n(Vn, P);
    }, {
      isComposing: yt,
      handleCompositionStart: it,
      handleCompositionUpdate: ct,
      handleCompositionEnd: ut
    } = df({ emit: n, afterComposition: lt }), B = () => {
      _e(), L.value = !L.value, setTimeout(Ve);
    }, q = () => {
      var T;
      return (T = C.value) == null ? void 0 : T.focus();
    }, h = () => {
      var T;
      return (T = C.value) == null ? void 0 : T.blur();
    }, k = (T) => {
      A.value = !1, n("mouseleave", T);
    }, $ = (T) => {
      A.value = !0, n("mouseenter", T);
    }, W = (T) => {
      n("keydown", T);
    }, ge = () => {
      var T;
      (T = C.value) == null || T.select();
    }, ie = () => {
      n(mt, ""), n(Vn, ""), n("clear"), n(zn, "");
    };
    return ve(() => r.modelValue, () => {
      var T;
      Je(() => ke()), r.validateEvent && ((T = f?.validate) == null || T.call(f, "change").catch((P) => void 0));
    }), ve(z, () => qe()), ve(() => r.type, async () => {
      await Je(), qe(), ke();
    }), nt(() => {
      !r.formatter && r.parser, qe(), Je(ke);
    }), t({
      input: E,
      textarea: d,
      ref: C,
      textareaStyle: M,
      autosize: xn(r, "autosize"),
      isComposing: yt,
      focus: q,
      blur: h,
      select: ge,
      clear: ie,
      resizeTextarea: ke
    }), (T, P) => (x(), K("div", {
      class: U([
        c(i),
        {
          [c(v).bm("group", "append")]: T.$slots.append,
          [c(v).bm("group", "prepend")]: T.$slots.prepend
        }
      ]),
      style: vt(c(N)),
      onMouseenter: $,
      onMouseleave: k
    }, [
      Q(" input "),
      T.type !== "textarea" ? (x(), K(Tt, { key: 0 }, [
        Q(" prepend slot "),
        T.$slots.prepend ? (x(), K("div", {
          key: 0,
          class: U(c(v).be("group", "prepend"))
        }, [
          me(T.$slots, "prepend")
        ], 2)) : Q("v-if", !0),
        w("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: U(c(l))
        }, [
          Q(" prefix slot "),
          T.$slots.prefix || T.prefixIcon ? (x(), K("span", {
            key: 0,
            class: U(c(v).e("prefix"))
          }, [
            w("span", {
              class: U(c(v).e("prefix-inner"))
            }, [
              me(T.$slots, "prefix"),
              T.prefixIcon ? (x(), se(c(rt), {
                key: 0,
                class: U(c(v).e("icon"))
              }, {
                default: oe(() => [
                  (x(), se(Ot(T.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 2)) : Q("v-if", !0),
          w("input", Rr({
            id: c(p),
            ref_key: "input",
            ref: E,
            class: c(v).e("inner")
          }, c(a), {
            minlength: T.minlength,
            maxlength: T.maxlength,
            type: T.showPassword ? L.value ? "text" : "password" : T.type,
            disabled: c(b),
            readonly: T.readonly,
            autocomplete: T.autocomplete,
            tabindex: T.tabindex,
            "aria-label": T.ariaLabel,
            placeholder: T.placeholder,
            style: T.inputStyle,
            form: T.form,
            autofocus: T.autofocus,
            role: T.containerRole,
            onCompositionstart: c(it),
            onCompositionupdate: c(ct),
            onCompositionend: c(ut),
            onInput: lt,
            onChange: je,
            onKeydown: W
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          Q(" suffix slot "),
          c(Se) ? (x(), K("span", {
            key: 1,
            class: U(c(v).e("suffix"))
          }, [
            w("span", {
              class: U(c(v).e("suffix-inner"))
            }, [
              !c(le) || !c(J) || !c(be) ? (x(), K(Tt, { key: 0 }, [
                me(T.$slots, "suffix"),
                T.suffixIcon ? (x(), se(c(rt), {
                  key: 0,
                  class: U(c(v).e("icon"))
                }, {
                  default: oe(() => [
                    (x(), se(Ot(T.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Q("v-if", !0)
              ], 64)) : Q("v-if", !0),
              c(le) ? (x(), se(c(rt), {
                key: 1,
                class: U([c(v).e("icon"), c(v).e("clear")]),
                onMousedown: We(c(yo), ["prevent"]),
                onClick: ie
              }, {
                default: oe(() => [
                  D(c(sl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Q("v-if", !0),
              c(J) ? (x(), se(c(rt), {
                key: 2,
                class: U([c(v).e("icon"), c(v).e("password")]),
                onClick: B
              }, {
                default: oe(() => [
                  (x(), se(Ot(c(de))))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0),
              c(be) ? (x(), K("span", {
                key: 3,
                class: U(c(v).e("count"))
              }, [
                w("span", {
                  class: U(c(v).e("count-inner"))
                }, V(c(Z)) + " / " + V(T.maxlength), 3)
              ], 2)) : Q("v-if", !0),
              c(ee) && c(he) && c(ue) ? (x(), se(c(rt), {
                key: 4,
                class: U([
                  c(v).e("icon"),
                  c(v).e("validateIcon"),
                  c(v).is("loading", c(ee) === "validating")
                ])
              }, {
                default: oe(() => [
                  (x(), se(Ot(c(he))))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 2)) : Q("v-if", !0)
        ], 2),
        Q(" append slot "),
        T.$slots.append ? (x(), K("div", {
          key: 1,
          class: U(c(v).be("group", "append"))
        }, [
          me(T.$slots, "append")
        ], 2)) : Q("v-if", !0)
      ], 64)) : (x(), K(Tt, { key: 1 }, [
        Q(" textarea "),
        w("textarea", Rr({
          id: c(p),
          ref_key: "textarea",
          ref: d,
          class: [c(g).e("inner"), c(v).is("focus", c(H))]
        }, c(a), {
          minlength: T.minlength,
          maxlength: T.maxlength,
          tabindex: T.tabindex,
          disabled: c(b),
          readonly: T.readonly,
          autocomplete: T.autocomplete,
          style: c(M),
          "aria-label": T.ariaLabel,
          placeholder: T.placeholder,
          form: T.form,
          autofocus: T.autofocus,
          rows: T.rows,
          role: T.containerRole,
          onCompositionstart: c(it),
          onCompositionupdate: c(ct),
          onCompositionend: c(ut),
          onInput: lt,
          onFocus: c(G),
          onBlur: c(te),
          onChange: je,
          onKeydown: W
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(be) ? (x(), K("span", {
          key: 0,
          style: vt(S.value),
          class: U(c(v).e("count"))
        }, V(c(Z)) + " / " + V(T.maxlength), 7)) : Q("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Ty = /* @__PURE__ */ Ue(ky, [["__file", "input.vue"]]);
const Ey = sn(Ty), Tr = 4, Sy = {
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
}, Ay = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), ul = Symbol("scrollbarContextKey"), Cy = Be({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Oy = "Thumb", Ly = /* @__PURE__ */ ne({
  __name: "thumb",
  props: Cy,
  setup(e) {
    const t = e, n = Ne(ul), r = at("scrollbar");
    n || rl(Oy, "can not inject scrollbar context");
    const o = j(), a = j(), s = j({}), i = j(!1);
    let l = !1, u = !1, f = ot ? document.onselectstart : null;
    const p = I(() => Sy[t.vertical ? "vertical" : "horizontal"]), m = I(() => Ay({
      size: t.size,
      move: t.move,
      bar: p.value
    })), b = I(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), v = (C) => {
      var O;
      if (C.stopPropagation(), C.ctrlKey || [1, 2].includes(C.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), E(C);
      const H = C.currentTarget;
      H && (s.value[p.value.axis] = H[p.value.offset] - (C[p.value.client] - H.getBoundingClientRect()[p.value.direction]));
    }, g = (C) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const O = Math.abs(C.target.getBoundingClientRect()[p.value.direction] - C[p.value.client]), H = a.value[p.value.offset] / 2, G = (O - H) * 100 * b.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = G * n.wrapElement[p.value.scrollSize] / 100;
    }, E = (C) => {
      C.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", A), f = document.onselectstart, document.onselectstart = () => !1;
    }, d = (C) => {
      if (!o.value || !a.value || l === !1)
        return;
      const O = s.value[p.value.axis];
      if (!O)
        return;
      const H = (o.value.getBoundingClientRect()[p.value.direction] - C[p.value.client]) * -1, G = a.value[p.value.offset] - O, te = (H - G) * 100 * b.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = te * n.wrapElement[p.value.scrollSize] / 100;
    }, A = () => {
      l = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", A), _(), u && (i.value = !1);
    }, L = () => {
      u = !1, i.value = !!t.size;
    }, S = () => {
      u = !0, i.value = l;
    };
    Tn(() => {
      _(), document.removeEventListener("mouseup", A);
    });
    const _ = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return on(xn(n, "scrollbarElement"), "mousemove", L), on(xn(n, "scrollbarElement"), "mouseleave", S), (C, O) => (x(), se(Ur, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: oe(() => [
        ht(w("div", {
          ref_key: "instance",
          ref: o,
          class: U([c(r).e("bar"), c(r).is(c(p).key)]),
          onMousedown: g
        }, [
          w("div", {
            ref_key: "thumb",
            ref: a,
            class: U(c(r).e("thumb")),
            style: vt(c(m)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [Bn, C.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var tc = /* @__PURE__ */ Ue(Ly, [["__file", "thumb.vue"]]);
const Iy = Be({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Ry = /* @__PURE__ */ ne({
  __name: "bar",
  props: Iy,
  setup(e, { expose: t }) {
    const n = e, r = Ne(ul), o = j(0), a = j(0), s = j(""), i = j(""), l = j(1), u = j(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const b = m.offsetHeight - Tr, v = m.offsetWidth - Tr;
          a.value = m.scrollTop * 100 / b * l.value, o.value = m.scrollLeft * 100 / v * u.value;
        }
      },
      update: () => {
        const m = r?.wrapElement;
        if (!m)
          return;
        const b = m.offsetHeight - Tr, v = m.offsetWidth - Tr, g = b ** 2 / m.scrollHeight, E = v ** 2 / m.scrollWidth, d = Math.max(g, n.minSize), A = Math.max(E, n.minSize);
        l.value = g / (b - g) / (d / (b - d)), u.value = E / (v - E) / (A / (v - A)), i.value = d + Tr < b ? `${d}px` : "", s.value = A + Tr < v ? `${A}px` : "";
      }
    }), (m, b) => (x(), K(Tt, null, [
      D(tc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      D(tc, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var xy = /* @__PURE__ */ Ue(Ry, [["__file", "bar.vue"]]);
const Ny = Be({
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
    type: pe([String, Object, Array]),
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
  ...br(["ariaLabel", "ariaOrientation"])
}), Py = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Re)
}, $y = "ElScrollbar", My = ne({
  name: $y
}), Dy = /* @__PURE__ */ ne({
  ...My,
  props: Ny,
  emits: Py,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = at("scrollbar");
    let a, s, i = 0, l = 0;
    const u = j(), f = j(), p = j(), m = j(), b = I(() => {
      const _ = {};
      return r.height && (_.height = Mr(r.height)), r.maxHeight && (_.maxHeight = Mr(r.maxHeight)), [r.wrapStyle, _];
    }), v = I(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), g = I(() => [o.e("view"), r.viewClass]), E = () => {
      var _;
      f.value && ((_ = m.value) == null || _.handleScroll(f.value), i = f.value.scrollTop, l = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function d(_, C) {
      Bt(_) ? f.value.scrollTo(_) : Re(_) && Re(C) && f.value.scrollTo(_, C);
    }
    const A = (_) => {
      Re(_) && (f.value.scrollTop = _);
    }, L = (_) => {
      Re(_) && (f.value.scrollLeft = _);
    }, S = () => {
      var _;
      (_ = m.value) == null || _.update();
    };
    return ve(() => r.noresize, (_) => {
      _ ? (a?.(), s?.()) : ({ stop: a } = pn(p, S), s = on("resize", S));
    }, { immediate: !0 }), ve(() => [r.maxHeight, r.height], () => {
      r.native || Je(() => {
        var _;
        S(), f.value && ((_ = m.value) == null || _.handleScroll(f.value));
      });
    }), _n(ul, ur({
      scrollbarElement: u,
      wrapElement: f
    })), rd(() => {
      f.value && (f.value.scrollTop = i, f.value.scrollLeft = l);
    }), nt(() => {
      r.native || Je(() => {
        S();
      });
    }), jc(() => S()), t({
      wrapRef: f,
      update: S,
      scrollTo: d,
      setScrollTop: A,
      setScrollLeft: L,
      handleScroll: E
    }), (_, C) => (x(), K("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: U(c(o).b())
    }, [
      w("div", {
        ref_key: "wrapRef",
        ref: f,
        class: U(c(v)),
        style: vt(c(b)),
        tabindex: _.tabindex,
        onScroll: E
      }, [
        (x(), se(Ot(_.tag), {
          id: _.id,
          ref_key: "resizeRef",
          ref: p,
          class: U(c(g)),
          style: vt(_.viewStyle),
          role: _.role,
          "aria-label": _.ariaLabel,
          "aria-orientation": _.ariaOrientation
        }, {
          default: oe(() => [
            me(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      _.native ? Q("v-if", !0) : (x(), se(xy, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: _.always,
        "min-size": _.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Fy = /* @__PURE__ */ Ue(Dy, [["__file", "scrollbar.vue"]]);
const zy = sn(Fy), fl = Symbol("popper"), pf = Symbol("popperContent"), By = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], mf = Be({
  role: {
    type: String,
    values: By,
    default: "tooltip"
  }
}), Vy = ne({
  name: "ElPopper",
  inheritAttrs: !1
}), jy = /* @__PURE__ */ ne({
  ...Vy,
  props: mf,
  setup(e, { expose: t }) {
    const n = e, r = j(), o = j(), a = j(), s = j(), i = I(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), _n(fl, l), (u, f) => me(u.$slots, "default");
  }
});
var Uy = /* @__PURE__ */ Ue(jy, [["__file", "popper.vue"]]);
const hf = Be({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Hy = ne({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Wy = /* @__PURE__ */ ne({
  ...Hy,
  props: hf,
  setup(e, { expose: t }) {
    const n = e, r = at("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = Ne(pf, void 0);
    return ve(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Tn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (x(), K("span", {
      ref_key: "arrowRef",
      ref: a,
      class: U(c(r).e("arrow")),
      style: vt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Gy = /* @__PURE__ */ Ue(Wy, [["__file", "arrow.vue"]]);
const gf = Be({
  virtualRef: {
    type: pe(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: pe(Function)
  },
  onMouseleave: {
    type: pe(Function)
  },
  onClick: {
    type: pe(Function)
  },
  onKeydown: {
    type: pe(Function)
  },
  onFocus: {
    type: pe(Function)
  },
  onBlur: {
    type: pe(Function)
  },
  onContextmenu: {
    type: pe(Function)
  },
  id: String,
  open: Boolean
}), vf = Symbol("elForwardRef"), Ky = (e) => {
  _n(vf, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Yy = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), ks = (e) => {
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
}, qy = "ElOnlyChild", Zy = ne({
  name: qy,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = Ne(vf), a = Yy((r = o?.setForwardRef) != null ? r : yo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = bf(i);
      return l ? ht(od(l, n), [[a]]) : null;
    };
  }
});
function bf(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Bt(n))
      switch (n.type) {
        case ad:
          continue;
        case Bc:
        case "svg":
          return nc(n);
        case Tt:
          return bf(n.children);
        default:
          return n;
      }
    return nc(n);
  }
  return null;
}
function nc(e) {
  const t = at("only-child");
  return D("span", {
    class: t.e("content")
  }, [e]);
}
const Xy = ne({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Qy = /* @__PURE__ */ ne({
  ...Xy,
  props: gf,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = Ne(fl, void 0);
    Ky(o);
    const a = I(() => i.value ? n.id : void 0), s = I(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = I(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = I(() => i.value ? `${n.open}` : void 0);
    let u;
    const f = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return nt(() => {
      ve(() => n.virtualRef, (p) => {
        p && (o.value = $n(p));
      }, {
        immediate: !0
      }), ve(o, (p, m) => {
        u?.(), u = void 0, rn(p) && (f.forEach((b) => {
          var v;
          const g = n[b];
          g && (p.addEventListener(b.slice(2).toLowerCase(), g), (v = m?.removeEventListener) == null || v.call(m, b.slice(2).toLowerCase(), g));
        }), ks(p) && (u = ve([a, s, i, l], (b) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, g) => {
            Fn(b[g]) ? p.removeAttribute(v) : p.setAttribute(v, b[g]);
          });
        }, { immediate: !0 }))), rn(m) && ks(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((b) => m.removeAttribute(b));
      }, {
        immediate: !0
      });
    }), Tn(() => {
      if (u?.(), u = void 0, o.value && rn(o.value)) {
        const p = o.value;
        f.forEach((m) => {
          const b = n[m];
          b && p.removeEventListener(m.slice(2).toLowerCase(), b);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, m) => p.virtualTriggering ? Q("v-if", !0) : (x(), se(c(Zy), Rr({ key: 0 }, p.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: oe(() => [
        me(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Jy = /* @__PURE__ */ Ue(Qy, [["__file", "trigger.vue"]]);
const qa = "focus-trap.focus-after-trapped", Za = "focus-trap.focus-after-released", e1 = "focus-trap.focusout-prevented", rc = {
  cancelable: !0,
  bubbles: !1
}, t1 = {
  cancelable: !0,
  bubbles: !1
}, oc = "focusAfterTrapped", ac = "focusAfterReleased", n1 = Symbol("elFocusTrap"), dl = j(), xa = j(0), pl = j(0);
let Uo = 0;
const yf = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, sc = (e, t) => {
  for (const n of e)
    if (!r1(n, t))
      return n;
}, r1 = (e, t) => {
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
}, o1 = (e) => {
  const t = yf(e), n = sc(t, e), r = sc(t.reverse(), e);
  return [n, r];
}, a1 = (e) => e instanceof HTMLInputElement && "select" in e, Ln = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    rn(e) && !ks(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), pl.value = window.performance.now(), e !== n && a1(e) && t && e.select(), rn(e) && r && e.removeAttribute("tabindex");
  }
};
function lc(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const s1 = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = lc(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = lc(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, l1 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Ln(r, t), document.activeElement !== n)
      return;
}, ic = s1(), i1 = () => xa.value > pl.value, Ho = () => {
  dl.value = "pointer", xa.value = window.performance.now();
}, cc = () => {
  dl.value = "keyboard", xa.value = window.performance.now();
}, c1 = () => (nt(() => {
  Uo === 0 && (document.addEventListener("mousedown", Ho), document.addEventListener("touchstart", Ho), document.addEventListener("keydown", cc)), Uo++;
}), Tn(() => {
  Uo--, Uo <= 0 && (document.removeEventListener("mousedown", Ho), document.removeEventListener("touchstart", Ho), document.removeEventListener("keydown", cc));
}), {
  focusReason: dl,
  lastUserFocusTimestamp: xa,
  lastAutomatedFocusTimestamp: pl
}), Wo = (e) => new CustomEvent(e1, {
  ...t1,
  detail: e
}), bn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Lr = [];
const uc = (e) => {
  e.code === bn.esc && Lr.forEach((t) => t(e));
}, u1 = (e) => {
  nt(() => {
    Lr.length === 0 && document.addEventListener("keydown", uc), ot && Lr.push(e);
  }), Tn(() => {
    Lr = Lr.filter((t) => t !== e), Lr.length === 0 && ot && document.removeEventListener("keydown", uc);
  });
}, f1 = ne({
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
    oc,
    ac,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = j();
    let r, o;
    const { focusReason: a } = c1();
    u1((v) => {
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
      const { code: g, altKey: E, ctrlKey: d, metaKey: A, currentTarget: L, shiftKey: S } = v, { loop: _ } = e, C = g === bn.tab && !E && !d && !A, O = document.activeElement;
      if (C && O) {
        const H = L, [G, te] = o1(H);
        if (G && te) {
          if (!S && O === te) {
            const ee = Wo({
              focusReason: a.value
            });
            t("focusout-prevented", ee), ee.defaultPrevented || (v.preventDefault(), _ && Ln(G, !0));
          } else if (S && [G, H].includes(O)) {
            const ee = Wo({
              focusReason: a.value
            });
            t("focusout-prevented", ee), ee.defaultPrevented || (v.preventDefault(), _ && Ln(te, !0));
          }
        } else if (O === H) {
          const ee = Wo({
            focusReason: a.value
          });
          t("focusout-prevented", ee), ee.defaultPrevented || v.preventDefault();
        }
      }
    };
    _n(n1, {
      focusTrapRef: n,
      onKeydown: i
    }), ve(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), ve([n], ([v], [g]) => {
      v && (v.addEventListener("keydown", i), v.addEventListener("focusin", f), v.addEventListener("focusout", p)), g && (g.removeEventListener("keydown", i), g.removeEventListener("focusin", f), g.removeEventListener("focusout", p));
    });
    const l = (v) => {
      t(oc, v);
    }, u = (v) => t(ac, v), f = (v) => {
      const g = c(n);
      if (!g)
        return;
      const E = v.target, d = v.relatedTarget, A = E && g.contains(E);
      e.trapped || d && g.contains(d) || (r = d), A && t("focusin", v), !s.paused && e.trapped && (A ? o = E : Ln(o, !0));
    }, p = (v) => {
      const g = c(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const E = v.relatedTarget;
          !Fn(E) && !g.contains(E) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const d = Wo({
                focusReason: a.value
              });
              t("focusout-prevented", d), d.defaultPrevented || Ln(o, !0);
            }
          }, 0);
        } else {
          const E = v.target;
          E && g.contains(E) || t("focusout", v);
        }
    };
    async function m() {
      await Je();
      const v = c(n);
      if (v) {
        ic.push(s);
        const g = v.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !v.contains(g)) {
          const d = new Event(qa, rc);
          v.addEventListener(qa, l), v.dispatchEvent(d), d.defaultPrevented || Je(() => {
            let A = e.focusStartEl;
            Et(A) || (Ln(A), document.activeElement !== A && (A = "first")), A === "first" && l1(yf(v), !0), (document.activeElement === g || A === "container") && Ln(v);
          });
        }
      }
    }
    function b() {
      const v = c(n);
      if (v) {
        v.removeEventListener(qa, l);
        const g = new CustomEvent(Za, {
          ...rc,
          detail: {
            focusReason: a.value
          }
        });
        v.addEventListener(Za, u), v.dispatchEvent(g), !g.defaultPrevented && (a.value == "keyboard" || !i1() || v.contains(document.activeElement)) && Ln(r ?? document.body), v.removeEventListener(Za, u), ic.remove(s);
      }
    }
    return nt(() => {
      e.trapped && m(), ve(() => e.trapped, (v) => {
        v ? m() : b();
      });
    }), Tn(() => {
      e.trapped && b(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function d1(e, t, n, r, o, a) {
  return me(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var p1 = /* @__PURE__ */ Ue(f1, [["render", d1], ["__file", "focus-trap.vue"]]), Mt = "top", Yt = "bottom", qt = "right", Dt = "left", ml = "auto", Lo = [Mt, Yt, qt, Dt], Dr = "start", ko = "end", m1 = "clippingParents", _f = "viewport", to = "popper", h1 = "reference", fc = Lo.reduce(function(e, t) {
  return e.concat([t + "-" + Dr, t + "-" + ko]);
}, []), Na = [].concat(Lo, [ml]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Dr, t + "-" + ko]);
}, []), g1 = "beforeRead", v1 = "read", b1 = "afterRead", y1 = "beforeMain", _1 = "main", w1 = "afterMain", k1 = "beforeWrite", T1 = "write", E1 = "afterWrite", S1 = [g1, v1, b1, y1, _1, w1, k1, T1, E1];
function kn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Vt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function pr(e) {
  var t = Vt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Kt(e) {
  var t = Vt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function hl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Vt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function A1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !Kt(a) || !kn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function C1(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Kt(o) || !kn(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var wf = { name: "applyStyles", enabled: !0, phase: "write", fn: A1, effect: C1, requires: ["computeStyles"] };
function yn(e) {
  return e.split("-")[0];
}
var cr = Math.max, ma = Math.min, Fr = Math.round;
function Ts() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function kf() {
  return !/^((?!chrome|android).)*safari/i.test(Ts());
}
function zr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && Kt(e) && (o = e.offsetWidth > 0 && Fr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Fr(r.height) / e.offsetHeight || 1);
  var s = pr(e) ? Vt(e) : window, i = s.visualViewport, l = !kf() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, f = (r.top + (l && i ? i.offsetTop : 0)) / a, p = r.width / o, m = r.height / a;
  return { width: p, height: m, top: f, right: u + p, bottom: f + m, left: u, x: u, y: f };
}
function gl(e) {
  var t = zr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Tf(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && hl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function jn(e) {
  return Vt(e).getComputedStyle(e);
}
function O1(e) {
  return ["table", "td", "th"].indexOf(kn(e)) >= 0;
}
function rr(e) {
  return ((pr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Pa(e) {
  return kn(e) === "html" ? e : e.assignedSlot || e.parentNode || (hl(e) ? e.host : null) || rr(e);
}
function dc(e) {
  return !Kt(e) || jn(e).position === "fixed" ? null : e.offsetParent;
}
function L1(e) {
  var t = /firefox/i.test(Ts()), n = /Trident/i.test(Ts());
  if (n && Kt(e)) {
    var r = jn(e);
    if (r.position === "fixed") return null;
  }
  var o = Pa(e);
  for (hl(o) && (o = o.host); Kt(o) && ["html", "body"].indexOf(kn(o)) < 0; ) {
    var a = jn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function Io(e) {
  for (var t = Vt(e), n = dc(e); n && O1(n) && jn(n).position === "static"; ) n = dc(n);
  return n && (kn(n) === "html" || kn(n) === "body" && jn(n).position === "static") ? t : n || L1(e) || t;
}
function vl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function uo(e, t, n) {
  return cr(e, ma(t, n));
}
function I1(e, t, n) {
  var r = uo(e, t, n);
  return r > n ? n : r;
}
function Ef() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Sf(e) {
  return Object.assign({}, Ef(), e);
}
function Af(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var R1 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Sf(typeof e != "number" ? e : Af(e, Lo));
};
function x1(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = yn(n.placement), l = vl(i), u = [Dt, qt].indexOf(i) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = R1(o.padding, n), m = gl(a), b = l === "y" ? Mt : Dt, v = l === "y" ? Yt : qt, g = n.rects.reference[f] + n.rects.reference[l] - s[l] - n.rects.popper[f], E = s[l] - n.rects.reference[l], d = Io(a), A = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, L = g / 2 - E / 2, S = p[b], _ = A - m[f] - p[v], C = A / 2 - m[f] / 2 + L, O = uo(S, C, _), H = l;
    n.modifiersData[r] = (t = {}, t[H] = O, t.centerOffset = O - C, t);
  }
}
function N1(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Tf(t.elements.popper, o) && (t.elements.arrow = o));
}
var P1 = { name: "arrow", enabled: !0, phase: "main", fn: x1, effect: N1, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Br(e) {
  return e.split("-")[1];
}
var $1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function M1(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Fr(n * o) / o || 0, y: Fr(r * o) / o || 0 };
}
function pc(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, p = e.isFixed, m = s.x, b = m === void 0 ? 0 : m, v = s.y, g = v === void 0 ? 0 : v, E = typeof f == "function" ? f({ x: b, y: g }) : { x: b, y: g };
  b = E.x, g = E.y;
  var d = s.hasOwnProperty("x"), A = s.hasOwnProperty("y"), L = Dt, S = Mt, _ = window;
  if (u) {
    var C = Io(n), O = "clientHeight", H = "clientWidth";
    if (C === Vt(n) && (C = rr(n), jn(C).position !== "static" && i === "absolute" && (O = "scrollHeight", H = "scrollWidth")), C = C, o === Mt || (o === Dt || o === qt) && a === ko) {
      S = Yt;
      var G = p && C === _ && _.visualViewport ? _.visualViewport.height : C[O];
      g -= G - r.height, g *= l ? 1 : -1;
    }
    if (o === Dt || (o === Mt || o === Yt) && a === ko) {
      L = qt;
      var te = p && C === _ && _.visualViewport ? _.visualViewport.width : C[H];
      b -= te - r.width, b *= l ? 1 : -1;
    }
  }
  var ue = Object.assign({ position: i }, u && $1), ee = f === !0 ? M1({ x: b, y: g }, Vt(n)) : { x: b, y: g };
  if (b = ee.x, g = ee.y, l) {
    var he;
    return Object.assign({}, ue, (he = {}, he[S] = A ? "0" : "", he[L] = d ? "0" : "", he.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + g + "px)" : "translate3d(" + b + "px, " + g + "px, 0)", he));
  }
  return Object.assign({}, ue, (t = {}, t[S] = A ? g + "px" : "", t[L] = d ? b + "px" : "", t.transform = "", t));
}
function D1(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: yn(t.placement), variation: Br(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, pc(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, pc(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Cf = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: D1, data: {} }, Go = { passive: !0 };
function F1(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = Vt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Go);
  }), i && l.addEventListener("resize", n.update, Go), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Go);
    }), i && l.removeEventListener("resize", n.update, Go);
  };
}
var Of = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: F1, data: {} }, z1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Jo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return z1[t];
  });
}
var B1 = { start: "end", end: "start" };
function mc(e) {
  return e.replace(/start|end/g, function(t) {
    return B1[t];
  });
}
function bl(e) {
  var t = Vt(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function yl(e) {
  return zr(rr(e)).left + bl(e).scrollLeft;
}
function V1(e, t) {
  var n = Vt(e), r = rr(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = kf();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + yl(e), y: l };
}
function j1(e) {
  var t, n = rr(e), r = bl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = cr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = cr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + yl(e), l = -r.scrollTop;
  return jn(o || n).direction === "rtl" && (i += cr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function _l(e) {
  var t = jn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Lf(e) {
  return ["html", "body", "#document"].indexOf(kn(e)) >= 0 ? e.ownerDocument.body : Kt(e) && _l(e) ? e : Lf(Pa(e));
}
function fo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Lf(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Vt(r), s = o ? [a].concat(a.visualViewport || [], _l(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(fo(Pa(s)));
}
function Es(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function U1(e, t) {
  var n = zr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function hc(e, t, n) {
  return t === _f ? Es(V1(e, n)) : pr(t) ? U1(t, n) : Es(j1(rr(e)));
}
function H1(e) {
  var t = fo(Pa(e)), n = ["absolute", "fixed"].indexOf(jn(e).position) >= 0, r = n && Kt(e) ? Io(e) : e;
  return pr(r) ? t.filter(function(o) {
    return pr(o) && Tf(o, r) && kn(o) !== "body";
  }) : [];
}
function W1(e, t, n, r) {
  var o = t === "clippingParents" ? H1(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var f = hc(e, u, r);
    return l.top = cr(f.top, l.top), l.right = ma(f.right, l.right), l.bottom = ma(f.bottom, l.bottom), l.left = cr(f.left, l.left), l;
  }, hc(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function If(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? yn(r) : null, a = r ? Br(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case Mt:
      l = { x: s, y: t.y - n.height };
      break;
    case Yt:
      l = { x: s, y: t.y + t.height };
      break;
    case qt:
      l = { x: t.x + t.width, y: i };
      break;
    case Dt:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? vl(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case Dr:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case ko:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function To(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? m1 : i, u = n.rootBoundary, f = u === void 0 ? _f : u, p = n.elementContext, m = p === void 0 ? to : p, b = n.altBoundary, v = b === void 0 ? !1 : b, g = n.padding, E = g === void 0 ? 0 : g, d = Sf(typeof E != "number" ? E : Af(E, Lo)), A = m === to ? h1 : to, L = e.rects.popper, S = e.elements[v ? A : m], _ = W1(pr(S) ? S : S.contextElement || rr(e.elements.popper), l, f, s), C = zr(e.elements.reference), O = If({ reference: C, element: L, placement: o }), H = Es(Object.assign({}, L, O)), G = m === to ? H : C, te = { top: _.top - G.top + d.top, bottom: G.bottom - _.bottom + d.bottom, left: _.left - G.left + d.left, right: G.right - _.right + d.right }, ue = e.modifiersData.offset;
  if (m === to && ue) {
    var ee = ue[o];
    Object.keys(te).forEach(function(he) {
      var de = [qt, Yt].indexOf(he) >= 0 ? 1 : -1, N = [Mt, Yt].indexOf(he) >= 0 ? "y" : "x";
      te[he] += ee[N] * de;
    });
  }
  return te;
}
function G1(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Na : l, f = Br(r), p = f ? i ? fc : fc.filter(function(v) {
    return Br(v) === f;
  }) : Lo, m = p.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  m.length === 0 && (m = p);
  var b = m.reduce(function(v, g) {
    return v[g] = To(e, { placement: g, boundary: o, rootBoundary: a, padding: s })[yn(g)], v;
  }, {});
  return Object.keys(b).sort(function(v, g) {
    return b[v] - b[g];
  });
}
function K1(e) {
  if (yn(e) === ml) return [];
  var t = Jo(e);
  return [mc(e), t, mc(t)];
}
function Y1(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, f = n.boundary, p = n.rootBoundary, m = n.altBoundary, b = n.flipVariations, v = b === void 0 ? !0 : b, g = n.allowedAutoPlacements, E = t.options.placement, d = yn(E), A = d === E, L = l || (A || !v ? [Jo(E)] : K1(E)), S = [E].concat(L).reduce(function(_e, Ve) {
      return _e.concat(yn(Ve) === ml ? G1(t, { placement: Ve, boundary: f, rootBoundary: p, padding: u, flipVariations: v, allowedAutoPlacements: g }) : Ve);
    }, []), _ = t.rects.reference, C = t.rects.popper, O = /* @__PURE__ */ new Map(), H = !0, G = S[0], te = 0; te < S.length; te++) {
      var ue = S[te], ee = yn(ue), he = Br(ue) === Dr, de = [Mt, Yt].indexOf(ee) >= 0, N = de ? "width" : "height", M = To(t, { placement: ue, boundary: f, rootBoundary: p, altBoundary: m, padding: u }), z = de ? he ? qt : Dt : he ? Yt : Mt;
      _[N] > C[N] && (z = Jo(z));
      var le = Jo(z), J = [];
      if (a && J.push(M[ee] <= 0), i && J.push(M[z] <= 0, M[le] <= 0), J.every(function(_e) {
        return _e;
      })) {
        G = ue, H = !1;
        break;
      }
      O.set(ue, J);
    }
    if (H) for (var be = v ? 3 : 1, Z = function(_e) {
      var Ve = S.find(function(ke) {
        var Ye = O.get(ke);
        if (Ye) return Ye.slice(0, _e).every(function(ce) {
          return ce;
        });
      });
      if (Ve) return G = Ve, "break";
    }, Pe = be; Pe > 0; Pe--) {
      var Se = Z(Pe);
      if (Se === "break") break;
    }
    t.placement !== G && (t.modifiersData[r]._skip = !0, t.placement = G, t.reset = !0);
  }
}
var q1 = { name: "flip", enabled: !0, phase: "main", fn: Y1, requiresIfExists: ["offset"], data: { _skip: !1 } };
function gc(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function vc(e) {
  return [Mt, qt, Yt, Dt].some(function(t) {
    return e[t] >= 0;
  });
}
function Z1(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = To(t, { elementContext: "reference" }), i = To(t, { altBoundary: !0 }), l = gc(s, r), u = gc(i, o, a), f = vc(l), p = vc(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var X1 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Z1 };
function Q1(e, t, n) {
  var r = yn(e), o = [Dt, Mt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [Dt, qt].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function J1(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = Na.reduce(function(f, p) {
    return f[p] = Q1(p, t.rects, a), f;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var e_ = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: J1 };
function t_(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = If({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Rf = { name: "popperOffsets", enabled: !0, phase: "read", fn: t_, data: {} };
function n_(e) {
  return e === "x" ? "y" : "x";
}
function r_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, p = n.padding, m = n.tether, b = m === void 0 ? !0 : m, v = n.tetherOffset, g = v === void 0 ? 0 : v, E = To(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: f }), d = yn(t.placement), A = Br(t.placement), L = !A, S = vl(d), _ = n_(S), C = t.modifiersData.popperOffsets, O = t.rects.reference, H = t.rects.popper, G = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, te = typeof G == "number" ? { mainAxis: G, altAxis: G } : Object.assign({ mainAxis: 0, altAxis: 0 }, G), ue = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ee = { x: 0, y: 0 };
  if (C) {
    if (a) {
      var he, de = S === "y" ? Mt : Dt, N = S === "y" ? Yt : qt, M = S === "y" ? "height" : "width", z = C[S], le = z + E[de], J = z - E[N], be = b ? -H[M] / 2 : 0, Z = A === Dr ? O[M] : H[M], Pe = A === Dr ? -H[M] : -O[M], Se = t.elements.arrow, _e = b && Se ? gl(Se) : { width: 0, height: 0 }, Ve = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ef(), ke = Ve[de], Ye = Ve[N], ce = uo(0, O[M], _e[M]), qe = L ? O[M] / 2 - be - ce - ke - te.mainAxis : Z - ce - ke - te.mainAxis, lt = L ? -O[M] / 2 + be + ce + Ye + te.mainAxis : Pe + ce + Ye + te.mainAxis, je = t.elements.arrow && Io(t.elements.arrow), yt = je ? S === "y" ? je.clientTop || 0 : je.clientLeft || 0 : 0, it = (he = ue?.[S]) != null ? he : 0, ct = z + qe - it - yt, ut = z + lt - it, B = uo(b ? ma(le, ct) : le, z, b ? cr(J, ut) : J);
      C[S] = B, ee[S] = B - z;
    }
    if (i) {
      var q, h = S === "x" ? Mt : Dt, k = S === "x" ? Yt : qt, $ = C[_], W = _ === "y" ? "height" : "width", ge = $ + E[h], ie = $ - E[k], T = [Mt, Dt].indexOf(d) !== -1, P = (q = ue?.[_]) != null ? q : 0, fe = T ? ge : $ - O[W] - H[W] - P + te.altAxis, Ee = T ? $ + O[W] + H[W] - P - te.altAxis : ie, Ze = b && T ? I1(fe, $, Ee) : uo(b ? fe : ge, $, b ? Ee : ie);
      C[_] = Ze, ee[_] = Ze - $;
    }
    t.modifiersData[r] = ee;
  }
}
var o_ = { name: "preventOverflow", enabled: !0, phase: "main", fn: r_, requiresIfExists: ["offset"] };
function a_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function s_(e) {
  return e === Vt(e) || !Kt(e) ? bl(e) : a_(e);
}
function l_(e) {
  var t = e.getBoundingClientRect(), n = Fr(t.width) / e.offsetWidth || 1, r = Fr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function i_(e, t, n) {
  n === void 0 && (n = !1);
  var r = Kt(t), o = Kt(t) && l_(t), a = rr(t), s = zr(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((kn(t) !== "body" || _l(a)) && (i = s_(t)), Kt(t) ? (l = zr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = yl(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function c_(e) {
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
function u_(e) {
  var t = c_(e);
  return S1.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function f_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function d_(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var bc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function yc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function wl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? bc : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, bc, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, f = [], p = !1, m = { state: u, setOptions: function(g) {
      var E = typeof g == "function" ? g(u.options) : g;
      v(), u.options = Object.assign({}, a, u.options, E), u.scrollParents = { reference: pr(s) ? fo(s) : s.contextElement ? fo(s.contextElement) : [], popper: fo(i) };
      var d = u_(d_([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = d.filter(function(A) {
        return A.enabled;
      }), b(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var g = u.elements, E = g.reference, d = g.popper;
        if (yc(E, d)) {
          u.rects = { reference: i_(E, Io(d), u.options.strategy === "fixed"), popper: gl(d) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(H) {
            return u.modifiersData[H.name] = Object.assign({}, H.data);
          });
          for (var A = 0; A < u.orderedModifiers.length; A++) {
            if (u.reset === !0) {
              u.reset = !1, A = -1;
              continue;
            }
            var L = u.orderedModifiers[A], S = L.fn, _ = L.options, C = _ === void 0 ? {} : _, O = L.name;
            typeof S == "function" && (u = S({ state: u, options: C, name: O, instance: m }) || u);
          }
        }
      }
    }, update: f_(function() {
      return new Promise(function(g) {
        m.forceUpdate(), g(u);
      });
    }), destroy: function() {
      v(), p = !0;
    } };
    if (!yc(s, i)) return m;
    m.setOptions(l).then(function(g) {
      !p && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function b() {
      u.orderedModifiers.forEach(function(g) {
        var E = g.name, d = g.options, A = d === void 0 ? {} : d, L = g.effect;
        if (typeof L == "function") {
          var S = L({ state: u, name: E, instance: m, options: A }), _ = function() {
          };
          f.push(S || _);
        }
      });
    }
    function v() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return m;
  };
}
wl();
var p_ = [Of, Rf, Cf, wf];
wl({ defaultModifiers: p_ });
var m_ = [Of, Rf, Cf, wf, e_, q1, o_, P1, X1], h_ = wl({ defaultModifiers: m_ });
const g_ = ["fixed", "absolute"], v_ = Be({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: pe(Array),
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
    values: Na,
    default: "bottom"
  },
  popperOptions: {
    type: pe(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: g_,
    default: "absolute"
  }
}), xf = Be({
  ...v_,
  id: String,
  style: {
    type: pe([String, Array, Object])
  },
  className: {
    type: pe([String, Array, Object])
  },
  effect: {
    type: pe(String),
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
    type: pe([String, Array, Object])
  },
  popperStyle: {
    type: pe([String, Array, Object])
  },
  referenceEl: {
    type: pe(Object)
  },
  triggerTargetEl: {
    type: pe(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...br(["ariaLabel"])
}), b_ = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, y_ = (e, t) => {
  const n = j(!1), r = j();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var f;
      ((f = u.detail) == null ? void 0 : f.focusReason) !== "pointer" && (r.value = "first", t("blur"));
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
}, __ = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...k_(e), ...t]
  };
  return T_(a, o?.modifiers), a;
}, w_ = (e) => {
  if (ot)
    return $n(e);
};
function k_(e) {
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
function T_(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const E_ = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = S_(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = I(() => {
    const { onFirstUpdate: l, placement: u, strategy: f, modifiers: p } = c(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...p || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = Qn(), s = j({
    styles: {
      popper: {
        position: c(o).strategy,
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
  return ve(o, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), ve([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = h_(l, u, c(o)));
  }), Tn(() => {
    i();
  }), {
    state: I(() => {
      var l;
      return { ...((l = c(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: I(() => c(s).styles),
    attributes: I(() => c(s).attributes),
    update: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: I(() => c(a))
  };
};
function S_(e) {
  const t = Object.keys(e.elements), n = ca(t.map((o) => [o, e.styles[o] || {}])), r = ca(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const A_ = 0, C_ = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Ne(fl, void 0), a = j(), s = j(), i = I(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = I(() => {
    var d;
    const A = c(a), L = (d = c(s)) != null ? d : A_;
    return {
      name: "arrow",
      enabled: !Hb(A),
      options: {
        element: A,
        padding: L
      }
    };
  }), u = I(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...__(e, [
      c(l),
      c(i)
    ])
  })), f = I(() => w_(e.referenceEl) || c(r)), { attributes: p, state: m, styles: b, update: v, forceUpdate: g, instanceRef: E } = E_(f, n, u);
  return ve(E, (d) => t.value = d), nt(() => {
    ve(() => {
      var d;
      return (d = c(f)) == null ? void 0 : d.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: E,
    state: m,
    styles: b,
    role: o,
    forceUpdate: g,
    update: v
  };
}, O_ = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Gu(), a = at("popper"), s = I(() => c(t).popper), i = j(Re(e.zIndex) ? e.zIndex : o()), l = I(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = I(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), f = I(() => r.value === "dialog" ? "false" : void 0), p = I(() => c(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Re(e.zIndex) ? e.zIndex : o();
    }
  };
}, L_ = ne({
  name: "ElPopperContent"
}), I_ = /* @__PURE__ */ ne({
  ...L_,
  props: xf,
  emits: b_,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = y_(r, n), { attributes: p, arrowRef: m, contentRef: b, styles: v, instanceRef: g, role: E, update: d } = C_(r), {
      ariaModal: A,
      arrowStyle: L,
      contentAttrs: S,
      contentClass: _,
      contentStyle: C,
      updateZIndex: O
    } = O_(r, {
      styles: v,
      attributes: p,
      role: E
    }), H = Ne(pa, void 0), G = j();
    _n(pf, {
      arrowStyle: L,
      arrowRef: m,
      arrowOffset: G
    }), H && _n(pa, {
      ...H,
      addInputId: yo,
      removeInputId: yo
    });
    let te;
    const ue = (he = !0) => {
      d(), he && O();
    }, ee = () => {
      ue(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return nt(() => {
      ve(() => r.triggerTargetEl, (he, de) => {
        te?.(), te = void 0;
        const N = c(he || b.value), M = c(de || b.value);
        rn(N) && (te = ve([E, () => r.ariaLabel, A, () => r.id], (z) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((le, J) => {
            Fn(z[J]) ? N.removeAttribute(le) : N.setAttribute(le, z[J]);
          });
        }, { immediate: !0 })), M !== N && rn(M) && ["role", "aria-label", "aria-modal", "id"].forEach((z) => {
          M.removeAttribute(z);
        });
      }, { immediate: !0 }), ve(() => r.visible, ee, { immediate: !0 });
    }), Tn(() => {
      te?.(), te = void 0;
    }), t({
      popperContentRef: b,
      popperInstanceRef: g,
      updatePopper: ue,
      contentStyle: C
    }), (he, de) => (x(), K("div", Rr({
      ref_key: "contentRef",
      ref: b
    }, c(S), {
      style: c(C),
      class: c(_),
      tabindex: "-1",
      onMouseenter: (N) => he.$emit("mouseenter", N),
      onMouseleave: (N) => he.$emit("mouseleave", N)
    }), [
      D(c(p1), {
        trapped: c(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(b),
        "focus-start-el": c(o),
        onFocusAfterTrapped: c(i),
        onFocusAfterReleased: c(s),
        onFocusin: c(l),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(f)
      }, {
        default: oe(() => [
          me(he.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var R_ = /* @__PURE__ */ Ue(I_, [["__file", "content.vue"]]);
const x_ = sn(Uy), kl = Symbol("elTooltip");
function _c() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Co(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const N_ = Be({
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
}), P_ = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = _c(), {
    registerTimeout: s,
    cancelTimeout: i
  } = _c();
  return {
    onOpen: (f) => {
      a(() => {
        r(f);
        const p = c(n);
        Re(p) && p > 0 && s(() => {
          o(f);
        }, p);
      }, c(e));
    },
    onClose: (f) => {
      i(), a(() => {
        o(f);
      }, c(t));
    }
  };
}, Tl = Be({
  ...N_,
  ...xf,
  appendTo: {
    type: pe([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: pe(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...br(["ariaLabel"])
}), Nf = Be({
  ...gf,
  disabled: Boolean,
  trigger: {
    type: pe([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: pe(Array),
    default: () => [bn.enter, bn.numpadEnter, bn.space]
  }
}), $_ = Oa({
  type: pe(Boolean),
  default: null
}), M_ = Oa({
  type: pe(Function)
}), D_ = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: $_,
    [n]: M_
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: f,
      onHide: p
    }) => {
      const m = It(), { emit: b } = m, v = m.props, g = I(() => Ke(v[n])), E = I(() => v[e] === null), d = (O) => {
        s.value !== !0 && (s.value = !0, i && (i.value = O), Ke(f) && f(O));
      }, A = (O) => {
        s.value !== !1 && (s.value = !1, i && (i.value = O), Ke(p) && p(O));
      }, L = (O) => {
        if (v.disabled === !0 || Ke(u) && !u())
          return;
        const H = g.value && ot;
        H && b(t, !0), (E.value || !H) && d(O);
      }, S = (O) => {
        if (v.disabled === !0 || !ot)
          return;
        const H = g.value && ot;
        H && b(t, !1), (E.value || !H) && A(O);
      }, _ = (O) => {
        Jn(O) && (v.disabled && O ? g.value && b(t, !1) : s.value !== O && (O ? d() : A()));
      }, C = () => {
        s.value ? S() : L();
      };
      return ve(() => v[e], _), l && m.appContext.config.globalProperties.$route !== void 0 && ve(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && s.value && S();
      }), nt(() => {
        _(v[e]);
      }), {
        hide: S,
        show: L,
        toggle: C,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: F_,
  useModelToggleEmits: z_,
  useModelToggle: B_
} = D_("visible"), V_ = Be({
  ...mf,
  ...F_,
  ...Tl,
  ...Nf,
  ...hf,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), j_ = [
  ...z_,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], U_ = (e, t) => mn(e) ? e.includes(t) : e === t, Er = (e, t, n) => (r) => {
  U_(c(e), t) && n(r);
}, In = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, H_ = ne({
  name: "ElTooltipTrigger"
}), W_ = /* @__PURE__ */ ne({
  ...H_,
  props: Nf,
  setup(e, { expose: t }) {
    const n = e, r = at("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = Ne(kl, void 0), f = j(null), p = () => {
      if (c(o) || n.disabled)
        return !0;
    }, m = xn(n, "trigger"), b = In(p, Er(m, "hover", i)), v = In(p, Er(m, "hover", l)), g = In(p, Er(m, "click", (S) => {
      S.button === 0 && u(S);
    })), E = In(p, Er(m, "focus", i)), d = In(p, Er(m, "focus", l)), A = In(p, Er(m, "contextmenu", (S) => {
      S.preventDefault(), u(S);
    })), L = In(p, (S) => {
      const { code: _ } = S;
      n.triggerKeys.includes(_) && (S.preventDefault(), u(S));
    });
    return t({
      triggerRef: f
    }), (S, _) => (x(), se(c(Jy), {
      id: c(a),
      "virtual-ref": S.virtualRef,
      open: c(s),
      "virtual-triggering": S.virtualTriggering,
      class: U(c(r).e("trigger")),
      onBlur: c(d),
      onClick: c(g),
      onContextmenu: c(A),
      onFocus: c(E),
      onMouseenter: c(b),
      onMouseleave: c(v),
      onKeydown: c(L)
    }, {
      default: oe(() => [
        me(S.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var G_ = /* @__PURE__ */ Ue(W_, [["__file", "trigger.vue"]]);
const K_ = Be({
  to: {
    type: pe([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Y_ = /* @__PURE__ */ ne({
  __name: "teleport",
  props: K_,
  setup(e) {
    return (t, n) => t.disabled ? me(t.$slots, "default", { key: 0 }) : (x(), se(sd, {
      key: 1,
      to: t.to
    }, [
      me(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var q_ = /* @__PURE__ */ Ue(Y_, [["__file", "teleport.vue"]]);
const Z_ = sn(q_), Pf = () => {
  const e = Ys(), t = cf(), n = I(() => `${e.value}-popper-container-${t.prefix}`), r = I(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, X_ = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Q_ = () => {
  const { id: e, selector: t } = Pf();
  return ld(() => {
    ot && (document.body.querySelector(t.value) || X_(e.value));
  }), {
    id: e,
    selector: t
  };
}, J_ = ne({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), ew = /* @__PURE__ */ ne({
  ...J_,
  props: Tl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Pf(), o = at("tooltip"), a = j();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: f,
      onClose: p,
      onOpen: m,
      onShow: b,
      onHide: v,
      onBeforeShow: g,
      onBeforeHide: E
    } = Ne(kl, void 0), d = I(() => n.transition || `${o.namespace.value}-fade-in-linear`), A = I(() => n.persistent);
    Tn(() => {
      s?.();
    });
    const L = I(() => c(A) ? !0 : c(u)), S = I(() => n.disabled ? !1 : c(u)), _ = I(() => n.appendTo || r.value), C = I(() => {
      var z;
      return (z = n.style) != null ? z : {};
    }), O = j(!0), H = () => {
      v(), M() && Ln(document.body), O.value = !0;
    }, G = () => {
      if (c(i))
        return !0;
    }, te = In(G, () => {
      n.enterable && c(f) === "hover" && m();
    }), ue = In(G, () => {
      c(f) === "hover" && p();
    }), ee = () => {
      var z, le;
      (le = (z = a.value) == null ? void 0 : z.updatePopper) == null || le.call(z), g?.();
    }, he = () => {
      E?.();
    }, de = () => {
      b(), s = l0(I(() => {
        var z;
        return (z = a.value) == null ? void 0 : z.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(f) !== "hover" && p();
      });
    }, N = () => {
      n.virtualTriggering || p();
    }, M = (z) => {
      var le;
      const J = (le = a.value) == null ? void 0 : le.popperContentRef, be = z?.relatedTarget || document.activeElement;
      return J?.contains(be);
    };
    return ve(() => c(u), (z) => {
      z ? O.value = !1 : s?.();
    }, {
      flush: "post"
    }), ve(() => n.content, () => {
      var z, le;
      (le = (z = a.value) == null ? void 0 : z.updatePopper) == null || le.call(z);
    }), t({
      contentRef: a,
      isFocusInsideContent: M
    }), (z, le) => (x(), se(c(Z_), {
      disabled: !z.teleported,
      to: c(_)
    }, {
      default: oe(() => [
        D(Ur, {
          name: c(d),
          onAfterLeave: H,
          onBeforeEnter: ee,
          onAfterEnter: de,
          onBeforeLeave: he
        }, {
          default: oe(() => [
            c(L) ? ht((x(), se(c(R_), Rr({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, z.$attrs, {
              "aria-label": z.ariaLabel,
              "aria-hidden": O.value,
              "boundaries-padding": z.boundariesPadding,
              "fallback-placements": z.fallbackPlacements,
              "gpu-acceleration": z.gpuAcceleration,
              offset: z.offset,
              placement: z.placement,
              "popper-options": z.popperOptions,
              strategy: z.strategy,
              effect: z.effect,
              enterable: z.enterable,
              pure: z.pure,
              "popper-class": z.popperClass,
              "popper-style": [z.popperStyle, c(C)],
              "reference-el": z.referenceEl,
              "trigger-target-el": z.triggerTargetEl,
              visible: c(S),
              "z-index": z.zIndex,
              onMouseenter: c(te),
              onMouseleave: c(ue),
              onBlur: N,
              onClose: c(p)
            }), {
              default: oe(() => [
                me(z.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Bn, c(S)]
            ]) : Q("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var tw = /* @__PURE__ */ Ue(ew, [["__file", "content.vue"]]);
const nw = ne({
  name: "ElTooltip"
}), rw = /* @__PURE__ */ ne({
  ...nw,
  props: V_,
  emits: j_,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Q_();
    const o = Ia(), a = j(), s = j(), i = () => {
      var d;
      const A = c(a);
      A && ((d = A.popperInstanceRef) == null || d.update());
    }, l = j(!1), u = j(), { show: f, hide: p, hasUpdateHandler: m } = B_({
      indicator: l,
      toggleReason: u
    }), { onOpen: b, onClose: v } = P_({
      showAfter: xn(r, "showAfter"),
      hideAfter: xn(r, "hideAfter"),
      autoClose: xn(r, "autoClose"),
      open: f,
      close: p
    }), g = I(() => Jn(r.visible) && !m.value);
    _n(kl, {
      controlled: g,
      id: o,
      open: Ls(l),
      trigger: xn(r, "trigger"),
      onOpen: (d) => {
        b(d);
      },
      onClose: (d) => {
        v(d);
      },
      onToggle: (d) => {
        c(l) ? v(d) : b(d);
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
    }), ve(() => r.disabled, (d) => {
      d && l.value && (l.value = !1);
    });
    const E = (d) => {
      var A;
      return (A = s.value) == null ? void 0 : A.isFocusInsideContent(d);
    };
    return id(() => l.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: E,
      updatePopper: i,
      onOpen: b,
      onClose: v,
      hide: p
    }), (d, A) => (x(), se(c(x_), {
      ref_key: "popperRef",
      ref: a,
      role: d.role
    }, {
      default: oe(() => [
        D(G_, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: oe(() => [
            d.$slots.default ? me(d.$slots, "default", { key: 0 }) : Q("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        D(tw, {
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
          default: oe(() => [
            me(d.$slots, "content", {}, () => [
              d.rawContent ? (x(), K("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, ["innerHTML"])) : (x(), K("span", { key: 1 }, V(d.content), 1))
            ]),
            d.showArrow ? (x(), se(c(Gy), {
              key: 0,
              "arrow-offset": d.arrowOffset
            }, null, 8, ["arrow-offset"])) : Q("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var ow = /* @__PURE__ */ Ue(rw, [["__file", "tooltip.vue"]]);
const aw = sn(ow), sw = Be({
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
    type: pe([String, Object, Array])
  },
  offset: {
    type: pe(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), lw = ne({
  name: "ElBadge"
}), iw = /* @__PURE__ */ ne({
  ...lw,
  props: sw,
  setup(e, { expose: t }) {
    const n = e, r = at("badge"), o = I(() => n.isDot ? "" : Re(n.value) && Re(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = I(() => {
      var s, i, l, u, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: Mr(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: Mr((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (x(), K("div", {
      class: U(c(r).b())
    }, [
      me(s.$slots, "default"),
      D(Ur, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: oe(() => [
          ht(w("sup", {
            class: U([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: vt(c(a))
          }, [
            me(s.$slots, "content", { value: c(o) }, () => [
              Wt(V(c(o)), 1)
            ])
          ], 6), [
            [Bn, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var cw = /* @__PURE__ */ Ue(iw, [["__file", "badge.vue"]]);
const uw = sn(cw), fw = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ss = Be({
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
    values: al
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), dw = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, pw = ne({
  name: "ElTag"
}), mw = /* @__PURE__ */ ne({
  ...pw,
  props: Ss,
  emits: dw,
  setup(e, { emit: t }) {
    const n = e, r = Oo(), o = at("tag"), a = I(() => {
      const { type: u, hit: f, effect: p, closable: m, round: b } = n;
      return [
        o.b(),
        o.is("closable", m),
        o.m(u || "primary"),
        o.m(r.value),
        o.m(p),
        o.is("hit", f),
        o.is("round", b)
      ];
    }), s = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, l = (u) => {
      var f, p, m;
      (m = (p = (f = u?.component) == null ? void 0 : f.subTree) == null ? void 0 : p.component) != null && m.bum && (u.component.subTree.component.bum = null);
    };
    return (u, f) => u.disableTransitions ? (x(), K("span", {
      key: 0,
      class: U(c(a)),
      style: vt({ backgroundColor: u.color }),
      onClick: i
    }, [
      w("span", {
        class: U(c(o).e("content"))
      }, [
        me(u.$slots, "default")
      ], 2),
      u.closable ? (x(), se(c(rt), {
        key: 0,
        class: U(c(o).e("close")),
        onClick: We(s, ["stop"])
      }, {
        default: oe(() => [
          D(c(fa))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : Q("v-if", !0)
    ], 6)) : (x(), se(Ur, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: oe(() => [
        w("span", {
          class: U(c(a)),
          style: vt({ backgroundColor: u.color }),
          onClick: i
        }, [
          w("span", {
            class: U(c(o).e("content"))
          }, [
            me(u.$slots, "default")
          ], 2),
          u.closable ? (x(), se(c(rt), {
            key: 0,
            class: U(c(o).e("close")),
            onClick: We(s, ["stop"])
          }, {
            default: oe(() => [
              D(c(fa))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Q("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var hw = /* @__PURE__ */ Ue(mw, [["__file", "tag.vue"]]);
const gw = sn(hw), Yn = /* @__PURE__ */ new Map();
if (ot) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of Yn.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function wc(e, t) {
  let n = [];
  return mn(t.arg) ? n = t.arg : rn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, f = e.contains(s) || e.contains(i), p = e === s, m = n.length && n.some((v) => v?.contains(s)) || n.length && n.includes(i), b = a && (a.contains(s) || a.contains(i));
    l || u || f || p || m || b || t.value(r, o);
  };
}
const vw = {
  beforeMount(e, t) {
    Yn.has(e) || Yn.set(e, []), Yn.get(e).push({
      documentHandler: wc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Yn.has(e) || Yn.set(e, []);
    const n = Yn.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: wc(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    Yn.delete(e);
  }
}, bw = Be({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: pe(Object)
  },
  size: La,
  button: {
    type: pe(Object)
  },
  experimentalFeatures: {
    type: pe(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: pe(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Xu
}), Qt = {};
ne({
  name: "ElConfigProvider",
  props: bw,
  setup(e, { slots: t }) {
    ve(() => e.message, (r) => {
      Object.assign(Qt, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ef(e);
    return () => me(t, "default", { config: n?.value });
  }
});
const yw = 100, _w = 600, kc = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = yw, delay: o = _w } = Ke(n) ? {} : n;
    let a, s;
    const i = () => Ke(n) ? n() : n.handler(), l = () => {
      s && (clearTimeout(s), s = void 0), a && (clearInterval(a), a = void 0);
    };
    e.addEventListener("mousedown", (u) => {
      u.button === 0 && (l(), i(), document.addEventListener("mouseup", () => l(), {
        once: !0
      }), s = setTimeout(() => {
        a = setInterval(() => {
          i();
        }, r);
      }, o));
    });
  }
}, ww = Be({
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
  size: La,
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
    validator: (e) => e === null || Re(e) || ["min", "max"].includes(e),
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
  ...br(["ariaLabel"])
}), kw = {
  [Vn]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [zn]: (e) => Re(e) || Fn(e),
  [mt]: (e) => Re(e) || Fn(e)
}, Tw = ne({
  name: "ElInputNumber"
}), Ew = /* @__PURE__ */ ne({
  ...Tw,
  props: ww,
  emits: kw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = ol(), a = at("input-number"), s = j(), i = ur({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = Ra(), u = I(() => Re(r.modelValue) && r.modelValue <= r.min), f = I(() => Re(r.modelValue) && r.modelValue >= r.max), p = I(() => {
      const N = d(r.step);
      return hn(r.precision) ? Math.max(d(r.modelValue), N) : (N > r.precision, r.precision);
    }), m = I(() => r.controls && r.controlsPosition === "right"), b = Oo(), v = cl(), g = I(() => {
      if (i.userInput !== null)
        return i.userInput;
      let N = i.currentValue;
      if (Fn(N))
        return "";
      if (Re(N)) {
        if (Number.isNaN(N))
          return "";
        hn(r.precision) || (N = N.toFixed(r.precision));
      }
      return N;
    }), E = (N, M) => {
      if (hn(M) && (M = p.value), M === 0)
        return Math.round(N);
      let z = String(N);
      const le = z.indexOf(".");
      if (le === -1 || !z.replace(".", "").split("")[le + M])
        return N;
      const Z = z.length;
      return z.charAt(Z - 1) === "5" && (z = `${z.slice(0, Math.max(0, Z - 1))}6`), Number.parseFloat(Number(z).toFixed(M));
    }, d = (N) => {
      if (Fn(N))
        return 0;
      const M = N.toString(), z = M.indexOf(".");
      let le = 0;
      return z !== -1 && (le = M.length - z - 1), le;
    }, A = (N, M = 1) => Re(N) ? E(N + r.step * M) : i.currentValue, L = () => {
      if (r.readonly || v.value || f.value)
        return;
      const N = Number(g.value) || 0, M = A(N);
      C(M), n(zn, i.currentValue), he();
    }, S = () => {
      if (r.readonly || v.value || u.value)
        return;
      const N = Number(g.value) || 0, M = A(N, -1);
      C(M), n(zn, i.currentValue), he();
    }, _ = (N, M) => {
      const { max: z, min: le, step: J, precision: be, stepStrictly: Z, valueOnClear: Pe } = r;
      z < le && rl("InputNumber", "min should not be greater than max.");
      let Se = Number(N);
      if (Fn(N) || Number.isNaN(Se))
        return null;
      if (N === "") {
        if (Pe === null)
          return null;
        Se = Et(Pe) ? { min: le, max: z }[Pe] : Pe;
      }
      return Z && (Se = E(Math.round(Se / J) * J, be), Se !== N && M && n(mt, Se)), hn(be) || (Se = E(Se, be)), (Se > z || Se < le) && (Se = Se > z ? z : le, M && n(mt, Se)), Se;
    }, C = (N, M = !0) => {
      var z;
      const le = i.currentValue, J = _(N);
      if (!M) {
        n(mt, J);
        return;
      }
      le === J && N || (i.userInput = null, n(mt, J), le !== J && n(Vn, J, le), r.validateEvent && ((z = l?.validate) == null || z.call(l, "change").catch((be) => void 0)), i.currentValue = J);
    }, O = (N) => {
      i.userInput = N;
      const M = N === "" ? null : Number(N);
      n(zn, M), C(M, !1);
    }, H = (N) => {
      const M = N !== "" ? Number(N) : "";
      (Re(M) && !Number.isNaN(M) || N === "") && C(M), he(), i.userInput = null;
    }, G = () => {
      var N, M;
      (M = (N = s.value) == null ? void 0 : N.focus) == null || M.call(N);
    }, te = () => {
      var N, M;
      (M = (N = s.value) == null ? void 0 : N.blur) == null || M.call(N);
    }, ue = (N) => {
      n("focus", N);
    }, ee = (N) => {
      var M, z;
      i.userInput = null, sf() && i.currentValue === null && ((M = s.value) != null && M.input) && (s.value.input.value = ""), n("blur", N), r.validateEvent && ((z = l?.validate) == null || z.call(l, "blur").catch((le) => void 0));
    }, he = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, de = (N) => {
      document.activeElement === N.target && N.preventDefault();
    };
    return ve(() => r.modelValue, (N, M) => {
      const z = _(N, !0);
      i.userInput === null && z !== M && (i.currentValue = z);
    }, { immediate: !0 }), nt(() => {
      var N;
      const { min: M, max: z, modelValue: le } = r, J = (N = s.value) == null ? void 0 : N.input;
      if (J.setAttribute("role", "spinbutton"), Number.isFinite(z) ? J.setAttribute("aria-valuemax", String(z)) : J.removeAttribute("aria-valuemax"), Number.isFinite(M) ? J.setAttribute("aria-valuemin", String(M)) : J.removeAttribute("aria-valuemin"), J.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), J.setAttribute("aria-disabled", String(v.value)), !Re(le) && le != null) {
        let be = Number(le);
        Number.isNaN(be) && (be = null), n(mt, be);
      }
      J.addEventListener("wheel", de, { passive: !1 });
    }), jc(() => {
      var N, M;
      const z = (N = s.value) == null ? void 0 : N.input;
      z?.setAttribute("aria-valuenow", `${(M = i.currentValue) != null ? M : ""}`);
    }), t({
      focus: G,
      blur: te
    }), (N, M) => (x(), K("div", {
      class: U([
        c(a).b(),
        c(a).m(c(b)),
        c(a).is("disabled", c(v)),
        c(a).is("without-controls", !N.controls),
        c(a).is("controls-right", c(m))
      ]),
      onDragstart: We(() => {
      }, ["prevent"])
    }, [
      N.controls ? ht((x(), K("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: U([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: Gt(S, ["enter"])
      }, [
        me(N.$slots, "decrease-icon", {}, () => [
          D(c(rt), null, {
            default: oe(() => [
              c(m) ? (x(), se(c(rf), { key: 0 })) : (x(), se(c(X0), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(kc), S]
      ]) : Q("v-if", !0),
      N.controls ? ht((x(), K("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: U([c(a).e("increase"), c(a).is("disabled", c(f))]),
        onKeydown: Gt(L, ["enter"])
      }, [
        me(N.$slots, "increase-icon", {}, () => [
          D(c(rt), null, {
            default: oe(() => [
              c(m) ? (x(), se(c(F0), { key: 0 })) : (x(), se(c(J0), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(kc), L]
      ]) : Q("v-if", !0),
      D(c(Ey), {
        id: N.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: N.step,
        "model-value": c(g),
        placeholder: N.placeholder,
        readonly: N.readonly,
        disabled: c(v),
        size: c(b),
        max: N.max,
        min: N.min,
        name: N.name,
        "aria-label": N.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          Gt(We(L, ["prevent"]), ["up"]),
          Gt(We(S, ["prevent"]), ["down"])
        ],
        onBlur: ee,
        onFocus: ue,
        onInput: O,
        onChange: H
      }, cd({
        _: 2
      }, [
        N.$slots.prefix ? {
          name: "prefix",
          fn: oe(() => [
            me(N.$slots, "prefix")
          ])
        } : void 0,
        N.$slots.suffix ? {
          name: "suffix",
          fn: oe(() => [
            me(N.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Sw = /* @__PURE__ */ Ue(Ew, [["__file", "input-number.vue"]]);
const Aw = sn(Sw);
function Cw() {
  const e = Qn(), t = j(0), n = 11, r = I(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return pn(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const $f = Symbol("ElSelectGroup"), $a = Symbol("ElSelect");
function Ow(e, t) {
  const n = Ne($a), r = Ne($f, { disabled: !1 }), o = I(() => f(Zn(n.props.modelValue), e.value)), a = I(() => {
    var b;
    if (n.props.multiple) {
      const v = Zn((b = n.props.modelValue) != null ? b : []);
      return !o.value && v.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = I(() => e.label || (Bt(e.value) ? "" : e.value)), i = I(() => e.value || e.label || ""), l = I(() => e.disabled || t.groupDisabled || a.value), u = It(), f = (b = [], v) => {
    if (Bt(e.value)) {
      const g = n.props.valueKey;
      return b && b.some((E) => ud(Xn(E, g)) === Xn(v, g));
    } else
      return b && b.includes(v);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, m = (b) => {
    const v = new RegExp(fw(b), "i");
    t.visible = v.test(s.value) || e.created;
  };
  return ve(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ve(() => e.value, (b, v) => {
    const { remote: g, valueKey: E } = n.props;
    if ((g ? b !== v : !co(b, v)) && (n.onOptionDestroy(v, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !g) {
      if (E && Bt(b) && Bt(v) && b[E] === v[E])
        return;
      n.setSelected();
    }
  }), ve(() => r.disabled, () => {
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
const Lw = ne({
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
    const t = at("select"), n = Ia(), r = I(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(m))
    ]), o = ur({
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
      updateOption: f
    } = Ow(e, o), { visible: p, hover: m } = Is(o), b = It().proxy;
    l.onOptionCreate(b), Tn(() => {
      const g = b.value, { selected: E } = l.states, d = E.some((A) => A.value === b.value);
      Je(() => {
        l.states.cachedOptions.get(g) === b && !d && l.states.cachedOptions.delete(g);
      }), l.onOptionDestroy(g, b);
    });
    function v() {
      i.value || l.handleOptionSelect(b);
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
      updateOption: f,
      visible: p,
      hover: m,
      selectOptionClick: v,
      states: o
    };
  }
});
function Iw(e, t, n, r, o, a) {
  return ht((x(), K("li", {
    id: e.id,
    class: U(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: We(e.selectOptionClick, ["stop"])
  }, [
    me(e.$slots, "default", {}, () => [
      w("span", null, V(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Bn, e.visible]
  ]);
}
var El = /* @__PURE__ */ Ue(Lw, [["render", Iw], ["__file", "option.vue"]]);
const Rw = ne({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Ne($a), t = at("select"), n = I(() => e.props.popperClass), r = I(() => e.props.multiple), o = I(() => e.props.fitInputWidth), a = j("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return nt(() => {
      s(), pn(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function xw(e, t, n, r, o, a) {
  return x(), K("div", {
    class: U([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: vt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (x(), K("div", {
      key: 0,
      class: U(e.ns.be("dropdown", "header"))
    }, [
      me(e.$slots, "header")
    ], 2)) : Q("v-if", !0),
    me(e.$slots, "default"),
    e.$slots.footer ? (x(), K("div", {
      key: 1,
      class: U(e.ns.be("dropdown", "footer"))
    }, [
      me(e.$slots, "footer")
    ], 2)) : Q("v-if", !0)
  ], 6);
}
var Nw = /* @__PURE__ */ Ue(Rw, [["render", xw], ["__file", "select-dropdown.vue"]]);
const Pw = (e, t) => {
  const { t: n } = ol(), r = Ia(), o = at("select"), a = at("input"), s = ur({
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
  }), i = j(null), l = j(null), u = j(null), f = j(null), p = j(null), m = j(null), b = j(null), v = j(null), g = j(null), E = j(null), d = j(null), {
    isComposing: A,
    handleCompositionStart: L,
    handleCompositionUpdate: S,
    handleCompositionEnd: _
  } = df({
    afterComposition: (R) => Ze(R)
  }), { wrapperRef: C, isFocused: O, handleBlur: H } = ff(p, {
    beforeFocus() {
      return M.value;
    },
    afterFocus() {
      e.automaticDropdown && !G.value && (G.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(R) {
      var Y, ye;
      return ((Y = u.value) == null ? void 0 : Y.isFocusInsideContent(R)) || ((ye = f.value) == null ? void 0 : ye.isFocusInsideContent(R));
    },
    afterBlur() {
      G.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), G = j(!1), te = j(), { form: ue, formItem: ee } = Ra(), { inputId: he } = il(e, {
    formItemContext: ee
  }), { valueOnClear: de, isEmptyValue: N } = L0(e), M = I(() => e.disabled || ue?.disabled), z = I(() => mn(e.modelValue) ? e.modelValue.length > 0 : !N(e.modelValue)), le = I(() => {
    var R;
    return (R = ue?.statusIcon) != null ? R : !1;
  }), J = I(() => e.clearable && !M.value && s.inputHovering && z.value), be = I(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Z = I(() => o.is("reverse", be.value && G.value)), Pe = I(() => ee?.validateState || ""), Se = I(() => af[Pe.value]), _e = I(() => e.remote ? 300 : 0), Ve = I(() => e.remote && !s.inputValue && s.options.size === 0), ke = I(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ye.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ye = I(() => ce.value.filter((R) => R.visible).length), ce = I(() => {
    const R = Array.from(s.options.values()), Y = [];
    return s.optionValues.forEach((ye) => {
      const Xe = R.findIndex((ft) => ft.value === ye);
      Xe > -1 && Y.push(R[Xe]);
    }), Y.length >= R.length ? Y : R;
  }), qe = I(() => Array.from(s.cachedOptions.values())), lt = I(() => {
    const R = ce.value.filter((Y) => !Y.created).some((Y) => Y.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !R;
  }), je = () => {
    e.filterable && Ke(e.filterMethod) || e.filterable && e.remote && Ke(e.remoteMethod) || ce.value.forEach((R) => {
      var Y;
      (Y = R.updateOption) == null || Y.call(R, s.inputValue);
    });
  }, yt = Oo(), it = I(() => ["small"].includes(yt.value) ? "small" : "default"), ct = I({
    get() {
      return G.value && !Ve.value;
    },
    set(R) {
      G.value = R;
    }
  }), ut = I(() => {
    if (e.multiple && !hn(e.modelValue))
      return Zn(e.modelValue).length === 0 && !s.inputValue;
    const R = mn(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || hn(R) ? !s.inputValue : !0;
  }), B = I(() => {
    var R;
    const Y = (R = e.placeholder) != null ? R : n("el.select.placeholder");
    return e.multiple || !z.value ? Y : s.selectedLabel;
  }), q = I(() => ws ? null : "mouseenter");
  ve(() => e.modelValue, (R, Y) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", h("")), $(), !co(R, Y) && e.validateEvent && ee?.validate("change").catch((ye) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ve(() => G.value, (R) => {
    R ? h(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", R);
  }), ve(() => s.options.entries(), () => {
    ot && ($(), e.defaultFirstOption && (e.filterable || e.remote) && Ye.value && k());
  }, {
    flush: "post"
  }), ve([() => s.hoveringIndex, ce], ([R]) => {
    Re(R) && R > -1 ? te.value = ce.value[R] || {} : te.value = {}, ce.value.forEach((Y) => {
      Y.hover = te.value === Y;
    });
  }), Vc(() => {
    s.isBeforeHide || je();
  });
  const h = (R) => {
    s.previousQuery === R || A.value || (s.previousQuery = R, e.filterable && Ke(e.filterMethod) ? e.filterMethod(R) : e.filterable && e.remote && Ke(e.remoteMethod) && e.remoteMethod(R), e.defaultFirstOption && (e.filterable || e.remote) && Ye.value ? Je(k) : Je(ge));
  }, k = () => {
    const R = ce.value.filter((ft) => ft.visible && !ft.disabled && !ft.states.groupDisabled), Y = R.find((ft) => ft.created), ye = R[0], Xe = ce.value.map((ft) => ft.value);
    s.hoveringIndex = ar(Xe, Y || ye);
  }, $ = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const Y = mn(e.modelValue) ? e.modelValue[0] : e.modelValue, ye = W(Y);
      s.selectedLabel = ye.currentLabel, s.selected = [ye];
      return;
    }
    const R = [];
    hn(e.modelValue) || Zn(e.modelValue).forEach((Y) => {
      R.push(W(Y));
    }), s.selected = R;
  }, W = (R) => {
    let Y;
    const ye = oh(R);
    for (let Ut = s.cachedOptions.size - 1; Ut >= 0; Ut--) {
      const zt = qe.value[Ut];
      if (ye ? Xn(zt.value, e.valueKey) === Xn(R, e.valueKey) : zt.value === R) {
        Y = {
          value: R,
          currentLabel: zt.currentLabel,
          get isDisabled() {
            return zt.isDisabled;
          }
        };
        break;
      }
    }
    if (Y)
      return Y;
    const Xe = ye ? R.label : R ?? "";
    return {
      value: R,
      currentLabel: Xe
    };
  }, ge = () => {
    s.hoveringIndex = ce.value.findIndex((R) => s.selected.some((Y) => De(Y) === De(R)));
  }, ie = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, T = () => {
    s.collapseItemWidth = E.value.getBoundingClientRect().width;
  }, P = () => {
    var R, Y;
    (Y = (R = u.value) == null ? void 0 : R.updatePopper) == null || Y.call(R);
  }, fe = () => {
    var R, Y;
    (Y = (R = f.value) == null ? void 0 : R.updatePopper) == null || Y.call(R);
  }, Ee = () => {
    s.inputValue.length > 0 && !G.value && (G.value = !0), h(s.inputValue);
  }, Ze = (R) => {
    if (s.inputValue = R.target.value, e.remote)
      Nt();
    else
      return Ee();
  }, Nt = jb(() => {
    Ee();
  }, _e.value), He = (R) => {
    co(e.modelValue, R) || t(Vn, R);
  }, or = (R) => Ub(R, (Y) => {
    const ye = s.cachedOptions.get(Y);
    return ye && !ye.disabled && !ye.states.groupDisabled;
  }), Wr = (R) => {
    if (e.multiple && R.code !== bn.delete && R.target.value.length <= 0) {
      const Y = Zn(e.modelValue).slice(), ye = or(Y);
      if (ye < 0)
        return;
      const Xe = Y[ye];
      Y.splice(ye, 1), t(mt, Y), He(Y), t("remove-tag", Xe);
    }
  }, Ro = (R, Y) => {
    const ye = s.selected.indexOf(Y);
    if (ye > -1 && !M.value) {
      const Xe = Zn(e.modelValue).slice();
      Xe.splice(ye, 1), t(mt, Xe), He(Xe), t("remove-tag", Y.value);
    }
    R.stopPropagation(), _r();
  }, yr = (R) => {
    R.stopPropagation();
    const Y = e.multiple ? [] : de.value;
    if (e.multiple)
      for (const ye of s.selected)
        ye.isDisabled && Y.push(ye.value);
    t(mt, Y), He(Y), s.hoveringIndex = -1, G.value = !1, t("clear"), _r();
  }, Gr = (R) => {
    var Y;
    if (e.multiple) {
      const ye = Zn((Y = e.modelValue) != null ? Y : []).slice(), Xe = ar(ye, R);
      Xe > -1 ? ye.splice(Xe, 1) : (e.multipleLimit <= 0 || ye.length < e.multipleLimit) && ye.push(R.value), t(mt, ye), He(ye), R.created && h(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(mt, R.value), He(R.value), G.value = !1;
    _r(), !G.value && Je(() => {
      Sn(R);
    });
  }, ar = (R = [], Y) => hn(Y) ? -1 : Bt(Y.value) ? R.findIndex((ye) => co(Xn(ye, e.valueKey), De(Y))) : R.indexOf(Y.value), Sn = (R) => {
    var Y, ye, Xe, ft, Ut;
    const zt = mn(R) ? R[0] : R;
    let Pt = null;
    if (zt?.value) {
      const Kn = ce.value.filter((Mo) => Mo.value === zt.value);
      Kn.length > 0 && (Pt = Kn[0].$el);
    }
    if (u.value && Pt) {
      const Kn = (ft = (Xe = (ye = (Y = u.value) == null ? void 0 : Y.popperRef) == null ? void 0 : ye.contentRef) == null ? void 0 : Xe.querySelector) == null ? void 0 : ft.call(Xe, `.${o.be("dropdown", "wrap")}`);
      Kn && R0(Kn, Pt);
    }
    (Ut = d.value) == null || Ut.handleScroll();
  }, jt = (R) => {
    s.options.set(R.value, R), s.cachedOptions.set(R.value, R);
  }, Wn = (R, Y) => {
    s.options.get(R) === Y && s.options.delete(R);
  }, Kr = I(() => {
    var R, Y;
    return (Y = (R = u.value) == null ? void 0 : R.popperRef) == null ? void 0 : Y.contentRef;
  }), Yr = () => {
    s.isBeforeHide = !1, Je(() => {
      var R;
      (R = d.value) == null || R.update(), Sn(s.selected);
    });
  }, _r = () => {
    var R;
    (R = p.value) == null || R.focus();
  }, qr = () => {
    var R;
    if (G.value) {
      G.value = !1, Je(() => {
        var Y;
        return (Y = p.value) == null ? void 0 : Y.blur();
      });
      return;
    }
    (R = p.value) == null || R.blur();
  }, Zr = (R) => {
    yr(R);
  }, Ma = (R) => {
    if (G.value = !1, O.value) {
      const Y = new FocusEvent("focus", R);
      Je(() => H(Y));
    }
  }, sr = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : G.value = !1;
  }, xo = () => {
    M.value || (ws && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : G.value = !G.value);
  }, Da = () => {
    if (!G.value)
      xo();
    else {
      const R = ce.value[s.hoveringIndex];
      R && !R.isDisabled && Gr(R);
    }
  }, De = (R) => Bt(R.value) ? Xn(R.value, e.valueKey) : R.value, Gn = I(() => ce.value.filter((R) => R.visible).every((R) => R.isDisabled)), Fa = I(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), No = I(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), wr = (R) => {
    if (!G.value) {
      G.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ye.value === 0 || A.value) && !Gn.value) {
      R === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : R === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const Y = ce.value[s.hoveringIndex];
      (Y.isDisabled || !Y.visible) && wr(R), Je(() => Sn(te.value));
    }
  }, Po = () => {
    if (!l.value)
      return 0;
    const R = window.getComputedStyle(l.value);
    return Number.parseFloat(R.gap || "6px");
  }, $o = I(() => {
    const R = Po();
    return { maxWidth: `${E.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - R : s.selectionWidth}px` };
  }), za = I(() => ({ maxWidth: `${s.selectionWidth}px` })), Ft = (R) => {
    t("popup-scroll", R);
  };
  return pn(l, ie), pn(v, P), pn(C, P), pn(g, fe), pn(E, T), nt(() => {
    $();
  }), {
    inputId: he,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: O,
    expanded: G,
    optionsArray: ce,
    hoverOption: te,
    selectSize: yt,
    filteredOptionsCount: Ye,
    updateTooltip: P,
    updateTagTooltip: fe,
    debouncedOnInputChange: Nt,
    onInput: Ze,
    deletePrevTag: Wr,
    deleteTag: Ro,
    deleteSelected: yr,
    handleOptionSelect: Gr,
    scrollToOption: Sn,
    hasModelValue: z,
    shouldShowPlaceholder: ut,
    currentPlaceholder: B,
    mouseEnterEventName: q,
    needStatusIcon: le,
    showClose: J,
    iconComponent: be,
    iconReverse: Z,
    validateState: Pe,
    validateIcon: Se,
    showNewOption: lt,
    updateOptions: je,
    collapseTagSize: it,
    setSelected: $,
    selectDisabled: M,
    emptyText: ke,
    handleCompositionStart: L,
    handleCompositionUpdate: S,
    handleCompositionEnd: _,
    onOptionCreate: jt,
    onOptionDestroy: Wn,
    handleMenuEnter: Yr,
    focus: _r,
    blur: qr,
    handleClearClick: Zr,
    handleClickOutside: Ma,
    handleEsc: sr,
    toggleMenu: xo,
    selectOption: Da,
    getValueKey: De,
    navigateOptions: wr,
    dropdownMenuVisible: ct,
    showTagList: Fa,
    collapseTagList: No,
    popupScroll: Ft,
    tagStyle: $o,
    collapseTagStyle: za,
    popperRef: Kr,
    inputRef: p,
    tooltipRef: u,
    tagTooltipRef: f,
    prefixRef: m,
    suffixRef: b,
    selectRef: i,
    wrapperRef: C,
    selectionRef: l,
    scrollbarRef: d,
    menuRef: v,
    tagMenuRef: g,
    collapseItemRef: E
  };
};
var $w = ne({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Ne($a);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        mn(u) && u.forEach((f) => {
          var p, m, b, v;
          const g = (p = f?.type || {}) == null ? void 0 : p.name;
          g === "ElOptionGroup" ? l(!Et(f.children) && !mn(f.children) && Ke((m = f.children) == null ? void 0 : m.default) ? (b = f.children) == null ? void 0 : b.default() : f.children) : g === "ElOption" ? i.push((v = f.props) == null ? void 0 : v.value) : mn(f.children) && l(f.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), co(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const Mw = Be({
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
  size: La,
  effect: {
    type: pe(String),
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
    type: pe(Object),
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
  teleported: Tl.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: gn,
    default: sl
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: gn,
    default: rf
  },
  tagType: { ...Ss.type, default: "info" },
  tagEffect: { ...Ss.effect, default: "light" },
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
    type: pe(String),
    values: Na,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: pe(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...Xu,
  ...br(["ariaLabel"])
}), Tc = "ElSelect", Dw = ne({
  name: Tc,
  componentName: Tc,
  components: {
    ElSelectMenu: Nw,
    ElOption: El,
    ElOptions: $w,
    ElTag: gw,
    ElScrollbar: zy,
    ElTooltip: aw,
    ElIcon: rt
  },
  directives: { ClickOutside: vw },
  props: Mw,
  emits: [
    mt,
    Vn,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = I(() => {
      const { modelValue: l, multiple: u } = e, f = u ? [] : void 0;
      return mn(l) ? u ? l : f : u ? f : l;
    }), r = ur({
      ...Is(e),
      modelValue: n
    }), o = Pw(r, t), { calculatorRef: a, inputStyle: s } = Cw();
    _n($a, ur({
      props: r,
      states: o.states,
      optionsArray: o.optionsArray,
      handleOptionSelect: o.handleOptionSelect,
      onOptionCreate: o.onOptionCreate,
      onOptionDestroy: o.onOptionDestroy,
      selectRef: o.selectRef,
      setSelected: o.setSelected
    }));
    const i = I(() => e.multiple ? o.states.selected.map((l) => l.currentLabel) : o.states.selectedLabel);
    return {
      ...o,
      modelValue: n,
      selectedLabel: i,
      calculatorRef: a,
      inputStyle: s
    };
  }
});
function Fw(e, t, n, r, o, a) {
  const s = lr("el-tag"), i = lr("el-tooltip"), l = lr("el-icon"), u = lr("el-option"), f = lr("el-options"), p = lr("el-scrollbar"), m = lr("el-select-menu"), b = fd("click-outside");
  return ht((x(), K("div", {
    ref: "selectRef",
    class: U([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [dd(e.mouseEnterEventName)]: (v) => e.states.inputHovering = !0,
    onMouseleave: (v) => e.states.inputHovering = !1
  }, [
    D(i, {
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
      default: oe(() => {
        var v;
        return [
          w("div", {
            ref: "wrapperRef",
            class: U([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: We(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (x(), K("div", {
              key: 0,
              ref: "prefixRef",
              class: U(e.nsSelect.e("prefix"))
            }, [
              me(e.$slots, "prefix")
            ], 2)) : Q("v-if", !0),
            w("div", {
              ref: "selectionRef",
              class: U([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? me(e.$slots, "tag", { key: 0 }, () => [
                (x(!0), K(Tt, null, xr(e.showTagList, (g) => (x(), K("div", {
                  key: e.getValueKey(g),
                  class: U(e.nsSelect.e("selected-item"))
                }, [
                  D(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: vt(e.tagStyle),
                    onClose: (E) => e.deleteTag(E, g)
                  }, {
                    default: oe(() => [
                      w("span", {
                        class: U(e.nsSelect.e("tags-text"))
                      }, [
                        me(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          Wt(V(g.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (x(), se(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: oe(() => [
                    w("div", {
                      ref: "collapseItemRef",
                      class: U(e.nsSelect.e("selected-item"))
                    }, [
                      D(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: vt(e.collapseTagStyle)
                      }, {
                        default: oe(() => [
                          w("span", {
                            class: U(e.nsSelect.e("tags-text"))
                          }, " + " + V(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: oe(() => [
                    w("div", {
                      ref: "tagMenuRef",
                      class: U(e.nsSelect.e("selection"))
                    }, [
                      (x(!0), K(Tt, null, xr(e.collapseTagList, (g) => (x(), K("div", {
                        key: e.getValueKey(g),
                        class: U(e.nsSelect.e("selected-item"))
                      }, [
                        D(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !g.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (E) => e.deleteTag(E, g)
                        }, {
                          default: oe(() => [
                            w("span", {
                              class: U(e.nsSelect.e("tags-text"))
                            }, [
                              me(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                Wt(V(g.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : Q("v-if", !0)
              ]) : Q("v-if", !0),
              w("div", {
                class: U([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                ht(w("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: U([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: vt(e.inputStyle),
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
                    Gt(We((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Gt(We((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    Gt(We(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    Gt(We(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    Gt(We(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: We(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [mo, e.states.inputValue]
                ]),
                e.filterable ? (x(), K("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: U(e.nsSelect.e("input-calculator")),
                  textContent: V(e.states.inputValue)
                }, null, 10, ["textContent"])) : Q("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (x(), K("div", {
                key: 1,
                class: U([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? me(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  w("span", null, V(e.currentPlaceholder), 1)
                ]) : (x(), K("span", { key: 1 }, V(e.currentPlaceholder), 1))
              ], 2)) : Q("v-if", !0)
            ], 2),
            w("div", {
              ref: "suffixRef",
              class: U(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (x(), se(l, {
                key: 0,
                class: U([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: oe(() => [
                  (x(), se(Ot(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0),
              e.showClose && e.clearIcon ? (x(), se(l, {
                key: 1,
                class: U([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: oe(() => [
                  (x(), se(Ot(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : Q("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (x(), se(l, {
                key: 2,
                class: U([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: oe(() => [
                  (x(), se(Ot(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: oe(() => [
        D(m, { ref: "menuRef" }, {
          default: oe(() => [
            e.$slots.header ? (x(), K("div", {
              key: 0,
              class: U(e.nsSelect.be("dropdown", "header")),
              onClick: We(() => {
              }, ["stop"])
            }, [
              me(e.$slots, "header")
            ], 10, ["onClick"])) : Q("v-if", !0),
            ht(D(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: U([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: oe(() => [
                e.showNewOption ? (x(), se(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : Q("v-if", !0),
                D(f, null, {
                  default: oe(() => [
                    me(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Bn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (x(), K("div", {
              key: 1,
              class: U(e.nsSelect.be("dropdown", "loading"))
            }, [
              me(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (x(), K("div", {
              key: 2,
              class: U(e.nsSelect.be("dropdown", "empty"))
            }, [
              me(e.$slots, "empty", {}, () => [
                w("span", null, V(e.emptyText), 1)
              ])
            ], 2)) : Q("v-if", !0),
            e.$slots.footer ? (x(), K("div", {
              key: 3,
              class: U(e.nsSelect.be("dropdown", "footer")),
              onClick: We(() => {
              }, ["stop"])
            }, [
              me(e.$slots, "footer")
            ], 10, ["onClick"])) : Q("v-if", !0)
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow", "onHide"])
  ], 16, ["onMouseleave"])), [
    [b, e.handleClickOutside, e.popperRef]
  ]);
}
var zw = /* @__PURE__ */ Ue(Dw, [["render", Fw], ["__file", "select.vue"]]);
const Bw = ne({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = at("select"), n = j(null), r = It(), o = j([]);
    _n($f, ur({
      ...Is(e)
    }));
    const a = I(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var f, p;
      return ((f = u.type) == null ? void 0 : f.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, i = (u) => {
      const f = Zn(u), p = [];
      return f.forEach((m) => {
        var b, v;
        s(m) ? p.push(m.component.proxy) : (b = m.children) != null && b.length ? p.push(...i(m.children)) : (v = m.component) != null && v.subTree && p.push(...i(m.component.subTree));
      }), p;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return nt(() => {
      l();
    }), m0(n, l, {
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
function Vw(e, t, n, r, o, a) {
  return ht((x(), K("ul", {
    ref: "groupRef",
    class: U(e.ns.be("group", "wrap"))
  }, [
    w("li", {
      class: U(e.ns.be("group", "title"))
    }, V(e.label), 3),
    w("li", null, [
      w("ul", {
        class: U(e.ns.b("group"))
      }, [
        me(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Bn, e.visible]
  ]);
}
var Mf = /* @__PURE__ */ Ue(Bw, [["render", Vw], ["__file", "option-group.vue"]]);
const jw = sn(zw, {
  Option: El,
  OptionGroup: Mf
}), Uw = nf(El);
nf(Mf);
const Hw = (e) => ["", ...al].includes(e), Ww = Be({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: Hw
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: gn
  },
  activeActionIcon: {
    type: gn
  },
  activeIcon: {
    type: gn
  },
  inactiveIcon: {
    type: gn
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: !0
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  beforeChange: {
    type: pe(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...br(["ariaLabel"])
}), Gw = {
  [mt]: (e) => Jn(e) || Et(e) || Re(e),
  [Vn]: (e) => Jn(e) || Et(e) || Re(e),
  [zn]: (e) => Jn(e) || Et(e) || Re(e)
}, Df = "ElSwitch", Kw = ne({
  name: Df
}), Yw = /* @__PURE__ */ ne({
  ...Kw,
  props: Ww,
  emits: Gw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = Ra(), a = Oo(), s = at("switch"), { inputId: i } = il(r, {
      formItemContext: o
    }), l = cl(I(() => r.loading)), u = j(r.modelValue !== !1), f = j(), p = j(), m = I(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", l.value),
      s.is("checked", d.value)
    ]), b = I(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !d.value)
    ]), v = I(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", d.value)
    ]), g = I(() => ({
      width: Mr(r.width)
    }));
    ve(() => r.modelValue, () => {
      u.value = !0;
    });
    const E = I(() => u.value ? r.modelValue : !1), d = I(() => E.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(E.value) || (n(mt, r.inactiveValue), n(Vn, r.inactiveValue), n(zn, r.inactiveValue)), ve(d, (_) => {
      var C;
      f.value.checked = _, r.validateEvent && ((C = o?.validate) == null || C.call(o, "change").catch((O) => void 0));
    });
    const A = () => {
      const _ = d.value ? r.inactiveValue : r.activeValue;
      n(mt, _), n(Vn, _), n(zn, _), Je(() => {
        f.value.checked = d.value;
      });
    }, L = () => {
      if (l.value)
        return;
      const { beforeChange: _ } = r;
      if (!_) {
        A();
        return;
      }
      const C = _();
      [
        di(C),
        Jn(C)
      ].includes(!0) || rl(Df, "beforeChange must return type `Promise<boolean>` or `boolean`"), di(C) ? C.then((H) => {
        H && A();
      }).catch((H) => {
      }) : C && A();
    }, S = () => {
      var _, C;
      (C = (_ = f.value) == null ? void 0 : _.focus) == null || C.call(_);
    };
    return nt(() => {
      f.value.checked = d.value;
    }), t({
      focus: S,
      checked: d
    }), (_, C) => (x(), K("div", {
      class: U(c(m)),
      onClick: We(L, ["prevent"])
    }, [
      w("input", {
        id: c(i),
        ref_key: "input",
        ref: f,
        class: U(c(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": c(d),
        "aria-disabled": c(l),
        "aria-label": _.ariaLabel,
        name: _.name,
        "true-value": _.activeValue,
        "false-value": _.inactiveValue,
        disabled: c(l),
        tabindex: _.tabindex,
        onChange: A,
        onKeydown: Gt(L, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !_.inlinePrompt && (_.inactiveIcon || _.inactiveText) ? (x(), K("span", {
        key: 0,
        class: U(c(b))
      }, [
        _.inactiveIcon ? (x(), se(c(rt), { key: 0 }, {
          default: oe(() => [
            (x(), se(Ot(_.inactiveIcon)))
          ]),
          _: 1
        })) : Q("v-if", !0),
        !_.inactiveIcon && _.inactiveText ? (x(), K("span", {
          key: 1,
          "aria-hidden": c(d)
        }, V(_.inactiveText), 9, ["aria-hidden"])) : Q("v-if", !0)
      ], 2)) : Q("v-if", !0),
      w("span", {
        ref_key: "core",
        ref: p,
        class: U(c(s).e("core")),
        style: vt(c(g))
      }, [
        _.inlinePrompt ? (x(), K("div", {
          key: 0,
          class: U(c(s).e("inner"))
        }, [
          _.activeIcon || _.inactiveIcon ? (x(), se(c(rt), {
            key: 0,
            class: U(c(s).is("icon"))
          }, {
            default: oe(() => [
              (x(), se(Ot(c(d) ? _.activeIcon : _.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : _.activeText || _.inactiveText ? (x(), K("span", {
            key: 1,
            class: U(c(s).is("text")),
            "aria-hidden": !c(d)
          }, V(c(d) ? _.activeText : _.inactiveText), 11, ["aria-hidden"])) : Q("v-if", !0)
        ], 2)) : Q("v-if", !0),
        w("div", {
          class: U(c(s).e("action"))
        }, [
          _.loading ? (x(), se(c(rt), {
            key: 0,
            class: U(c(s).is("loading"))
          }, {
            default: oe(() => [
              D(c(of))
            ]),
            _: 1
          }, 8, ["class"])) : c(d) ? me(_.$slots, "active-action", { key: 1 }, () => [
            _.activeActionIcon ? (x(), se(c(rt), { key: 0 }, {
              default: oe(() => [
                (x(), se(Ot(_.activeActionIcon)))
              ]),
              _: 1
            })) : Q("v-if", !0)
          ]) : c(d) ? Q("v-if", !0) : me(_.$slots, "inactive-action", { key: 2 }, () => [
            _.inactiveActionIcon ? (x(), se(c(rt), { key: 0 }, {
              default: oe(() => [
                (x(), se(Ot(_.inactiveActionIcon)))
              ]),
              _: 1
            })) : Q("v-if", !0)
          ])
        ], 2)
      ], 6),
      !_.inlinePrompt && (_.activeIcon || _.activeText) ? (x(), K("span", {
        key: 1,
        class: U(c(v))
      }, [
        _.activeIcon ? (x(), se(c(rt), { key: 0 }, {
          default: oe(() => [
            (x(), se(Ot(_.activeIcon)))
          ]),
          _: 1
        })) : Q("v-if", !0),
        !_.activeIcon && _.activeText ? (x(), K("span", {
          key: 1,
          "aria-hidden": !c(d)
        }, V(_.activeText), 9, ["aria-hidden"])) : Q("v-if", !0)
      ], 2)) : Q("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var qw = /* @__PURE__ */ Ue(Yw, [["__file", "switch.vue"]]);
const Zw = sn(qw), Ff = ["success", "info", "warning", "error"], _t = lf({
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
  appendTo: ot ? document.body : void 0
}), Xw = Be({
  customClass: {
    type: String,
    default: _t.customClass
  },
  center: {
    type: Boolean,
    default: _t.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: _t.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: _t.duration
  },
  icon: {
    type: gn,
    default: _t.icon
  },
  id: {
    type: String,
    default: _t.id
  },
  message: {
    type: pe([
      String,
      Object,
      Function
    ]),
    default: _t.message
  },
  onClose: {
    type: pe(Function),
    default: _t.onClose
  },
  showClose: {
    type: Boolean,
    default: _t.showClose
  },
  type: {
    type: String,
    values: Ff,
    default: _t.type
  },
  plain: {
    type: Boolean,
    default: _t.plain
  },
  offset: {
    type: Number,
    default: _t.offset
  },
  zIndex: {
    type: Number,
    default: _t.zIndex
  },
  grouping: {
    type: Boolean,
    default: _t.grouping
  },
  repeatNum: {
    type: Number,
    default: _t.repeatNum
  }
}), Qw = {
  destroy: () => !0
}, nn = pd([]), Jw = (e) => {
  const t = nn.findIndex((o) => o.id === e), n = nn[t];
  let r;
  return t > 0 && (r = nn[t - 1]), { current: n, prev: r };
}, ek = (e) => {
  const { prev: t } = Jw(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, tk = (e, t) => nn.findIndex((r) => r.id === e) > 0 ? 16 : t, nk = ne({
  name: "ElMessage"
}), rk = /* @__PURE__ */ ne({
  ...nk,
  props: Xw,
  emits: Qw,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = ly, { ns: o, zIndex: a } = Ju("message"), { currentZIndex: s, nextZIndex: i } = a, l = j(), u = j(!1), f = j(0);
    let p;
    const m = I(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), b = I(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && da[O] };
    }), v = I(() => n.icon || da[n.type] || ""), g = I(() => ek(n.id)), E = I(() => tk(n.id, n.offset) + g.value), d = I(() => f.value + E.value), A = I(() => ({
      top: `${E.value}px`,
      zIndex: s.value
    }));
    function L() {
      n.duration !== 0 && ({ stop: p } = ju(() => {
        _();
      }, n.duration));
    }
    function S() {
      p?.();
    }
    function _() {
      u.value = !1;
    }
    function C({ code: O }) {
      O === bn.esc && _();
    }
    return nt(() => {
      L(), i(), u.value = !0;
    }), ve(() => n.repeatNum, () => {
      S(), L();
    }), on(document, "keydown", C), pn(l, () => {
      f.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: d,
      close: _
    }), (O, H) => (x(), se(Ur, {
      name: c(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (G) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: oe(() => [
        ht(w("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: l,
          class: U([
            c(o).b(),
            { [c(o).m(O.type)]: O.type },
            c(o).is("center", O.center),
            c(o).is("closable", O.showClose),
            c(o).is("plain", O.plain),
            O.customClass
          ]),
          style: vt(c(A)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: L
        }, [
          O.repeatNum > 1 ? (x(), se(c(uw), {
            key: 0,
            value: O.repeatNum,
            type: c(m),
            class: U(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Q("v-if", !0),
          c(v) ? (x(), se(c(rt), {
            key: 1,
            class: U([c(o).e("icon"), c(b)])
          }, {
            default: oe(() => [
              (x(), se(Ot(c(v))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          me(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (x(), K(Tt, { key: 1 }, [
              Q(" Caution here, message could've been compromised, never use user's input as message "),
              w("p", {
                class: U(c(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (x(), K("p", {
              key: 0,
              class: U(c(o).e("content"))
            }, V(O.message), 3))
          ]),
          O.showClose ? (x(), se(c(rt), {
            key: 2,
            class: U(c(o).e("closeBtn")),
            onClick: We(_, ["stop"])
          }, {
            default: oe(() => [
              D(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Q("v-if", !0)
        ], 46, ["id"]), [
          [Bn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ok = /* @__PURE__ */ Ue(rk, [["__file", "message.vue"]]);
let ak = 1;
const zf = (e) => {
  const t = !e || Et(e) || ho(e) || Ke(e) ? { message: e } : e, n = {
    ..._t,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Et(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    rn(r) || (r = document.body), n.appendTo = r;
  }
  return Jn(Qt.grouping) && !n.grouping && (n.grouping = Qt.grouping), Re(Qt.duration) && n.duration === 3e3 && (n.duration = Qt.duration), Re(Qt.offset) && n.offset === 16 && (n.offset = Qt.offset), Jn(Qt.showClose) && !n.showClose && (n.showClose = Qt.showClose), n;
}, sk = (e) => {
  const t = nn.indexOf(e);
  if (t === -1)
    return;
  nn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, lk = ({ appendTo: e, ...t }, n) => {
  const r = `message_${ak++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), sk(f);
    },
    onDestroy: () => {
      ta(null, a);
    }
  }, i = D(ok, s, Ke(s.message) || ho(s.message) ? {
    default: Ke(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || Vr._context, ta(i, a), e.appendChild(a.firstElementChild);
  const l = i.component, f = {
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
  return f;
}, Vr = (e = {}, t) => {
  if (!ot)
    return { close: () => {
    } };
  const n = zf(e);
  if (n.grouping && nn.length) {
    const o = nn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (Re(Qt.max) && nn.length >= Qt.max)
    return { close: () => {
    } };
  const r = lk(n, t);
  return nn.push(r), r.handler;
};
Ff.forEach((e) => {
  Vr[e] = (t = {}, n) => {
    const r = zf(t);
    return Vr({ ...r, type: e }, n);
  };
});
function ik(e) {
  for (const t of nn)
    (!e || e === t.props.type) && t.handler.close();
}
Vr.closeAll = ik;
Vr._context = null;
const ck = tf(Vr, "$message"), Bf = [
  "success",
  "info",
  "warning",
  "error"
], uk = Be({
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
    type: gn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: pe([
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
    type: pe(Function),
    default: () => {
    }
  },
  onClose: {
    type: pe(Function),
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
    values: [...Bf, ""],
    default: ""
  },
  zIndex: Number
}), fk = {
  destroy: () => !0
}, dk = ne({
  name: "ElNotification"
}), pk = /* @__PURE__ */ ne({
  ...dk,
  props: uk,
  emits: fk,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Ju("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = sy, l = j(!1);
    let u;
    const f = I(() => {
      const L = n.type;
      return L && da[n.type] ? r.m(L) : "";
    }), p = I(() => n.type && da[n.type] || n.icon), m = I(() => n.position.endsWith("right") ? "right" : "left"), b = I(() => n.position.startsWith("top") ? "top" : "bottom"), v = I(() => {
      var L;
      return {
        [b.value]: `${n.offset}px`,
        zIndex: (L = n.zIndex) != null ? L : s.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: u } = ju(() => {
        l.value && d();
      }, n.duration));
    }
    function E() {
      u?.();
    }
    function d() {
      l.value = !1;
    }
    function A({ code: L }) {
      L === bn.delete || L === bn.backspace ? E() : L === bn.esc ? l.value && d() : g();
    }
    return nt(() => {
      g(), a(), l.value = !0;
    }), on(document, "keydown", A), t({
      visible: l,
      close: d
    }), (L, S) => (x(), se(Ur, {
      name: c(r).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (_) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: oe(() => [
        ht(w("div", {
          id: L.id,
          class: U([c(r).b(), L.customClass, c(m)]),
          style: vt(c(v)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: g,
          onClick: L.onClick
        }, [
          c(p) ? (x(), se(c(rt), {
            key: 0,
            class: U([c(r).e("icon"), c(f)])
          }, {
            default: oe(() => [
              (x(), se(Ot(c(p))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          w("div", {
            class: U(c(r).e("group"))
          }, [
            w("h2", {
              class: U(c(r).e("title")),
              textContent: V(L.title)
            }, null, 10, ["textContent"]),
            ht(w("div", {
              class: U(c(r).e("content")),
              style: vt(L.title ? void 0 : { margin: 0 })
            }, [
              me(L.$slots, "default", {}, () => [
                L.dangerouslyUseHTMLString ? (x(), K(Tt, { key: 1 }, [
                  Q(" Caution here, message could've been compromised, never use user's input as message "),
                  w("p", { innerHTML: L.message }, null, 8, ["innerHTML"])
                ], 2112)) : (x(), K("p", { key: 0 }, V(L.message), 1))
              ])
            ], 6), [
              [Bn, L.message]
            ]),
            L.showClose ? (x(), se(c(rt), {
              key: 0,
              class: U(c(r).e("closeBtn")),
              onClick: We(d, ["stop"])
            }, {
              default: oe(() => [
                D(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : Q("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Bn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var mk = /* @__PURE__ */ Ue(pk, [["__file", "notification.vue"]]);
const ha = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, As = 16;
let hk = 1;
const jr = function(e = {}, t) {
  if (!ot)
    return { close: () => {
    } };
  (Et(e) || ho(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  ha[n].forEach(({ vm: f }) => {
    var p;
    r += (((p = f.el) == null ? void 0 : p.offsetHeight) || 0) + As;
  }), r += As;
  const o = `notification_${hk++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      gk(o, n, a);
    }
  };
  let i = document.body;
  rn(e.appendTo) ? i = e.appendTo : Et(e.appendTo) && (i = document.querySelector(e.appendTo)), rn(i) || (i = document.body);
  const l = document.createElement("div"), u = D(mk, s, Ke(s.message) ? s.message : ho(s.message) ? () => s.message : null);
  return u.appContext = hn(t) ? jr._context : t, u.props.onDestroy = () => {
    ta(null, l);
  }, ta(u, l), ha[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Bf.forEach((e) => {
  jr[e] = (t = {}, n) => ((Et(t) || ho(t)) && (t = {
    message: t
  }), jr({ ...t, type: e }, n));
});
function gk(e, t, n) {
  const r = ha[t], o = r.findIndex(({ vm: u }) => {
    var f;
    return ((f = u.component) == null ? void 0 : f.props.id) === e;
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
      const { el: f, component: p } = r[u].vm, m = Number.parseInt(f.style[i], 10) - s - As;
      p.props.offset = m;
    }
}
function vk() {
  for (const e of Object.values(ha))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
jr.closeAll = vk;
jr._context = null;
const bk = tf(jr, "$notify"), Ct = {
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
    r === "center" ? ck({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : bk({
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
};
function yk(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function St(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Ec;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Ec || (Ec = {}));
async function _k(e, t) {
  await St("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function wk(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return St("plugin:event|listen", {
    event: e,
    target: o,
    handler: yk(t)
  }).then((a) => async () => _k(e, a));
}
const kk = "snippets-code:developer-mode", Vf = "snippets-code:frontend-diagnostics", Tk = 240, no = "[REDACTED]", ea = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${no}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${no}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  no
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${no}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${no}`
), jf = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return ea(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return ea(
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
    return ea(String(e));
  }
}, Ek = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Sk = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Vf) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Sl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(kk) === "true";
  } catch {
    return !1;
  }
}, Ak = (e, t, n) => {
  if (!Sl() || typeof localStorage > "u") return;
  const r = Sk();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Ek(),
    message: ea(t),
    data: jf(n)
  });
  try {
    localStorage.setItem(
      Vf,
      JSON.stringify(r.slice(-Tk))
    );
  } catch {
  }
}, Ck = () => Sl(), Ok = (e) => e === "warn" || e === "error" || !1 || !1 || Sl(), Ko = (e, t, n) => {
  Ak(e, t, n), Ok(e) && St("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : jf(n)
  }).catch(() => {
  });
}, Rn = {
  info: (e, t, ...n) => {
    Ko("info", e, t);
  },
  error: (e, t) => {
    Ko("error", e, t);
  },
  warn: (e, t) => {
    Ko("warn", e, t);
  },
  debug: (e, t) => {
    Ck() && Ko("debug", e, t);
  }
};
async function Uf() {
  return await St("local_ai_get_config");
}
async function Xa(e) {
  return await St("local_ai_save_config", { config: e });
}
async function Lk(e) {
  return await St("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Ik() {
  return await St("local_ai_get_runtime_status");
}
async function Hf() {
  return await St("local_ai_get_status");
}
async function Rk(e) {
  return await St("local_ai_start_service", {
    config: e ?? null
  });
}
async function xk() {
  return await St("local_ai_restart_service");
}
async function Nk() {
  await St("local_ai_stop_service");
}
async function Pk(e, t) {
  const n = typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`, r = await wk(
    "local-ai-chat-stream",
    (o) => {
      const a = o.payload;
      a.requestId === n && a.event === "delta" && a.content && t(a.content);
    }
  );
  try {
    return await St("local_ai_chat_stream", {
      request: e,
      requestId: n
    });
  } finally {
    r();
  }
}
async function $k() {
  return await St("local_ai_get_chat_histories");
}
async function Mk(e) {
  return await St("local_ai_save_chat_history", { history: e });
}
async function Dk(e) {
  return await St("local_ai_delete_chat_history", { historyId: e });
}
/*! @license DOMPurify 3.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.7/LICENSE */
function Sc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Fk(e) {
  if (Array.isArray(e)) return e;
}
function zk(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, s, i = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (i.push(r.value), i.length !== t); l = !0) ;
    } catch (f) {
      u = !0, o = f;
    } finally {
      try {
        if (!l && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (u) throw o;
      }
    }
    return i;
  }
}
function Bk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vk(e, t) {
  return Fk(e) || zk(e, t) || jk(e, t) || Bk();
}
function jk(e, t) {
  if (e) {
    if (typeof e == "string") return Sc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Sc(e, t) : void 0;
  }
}
const Wf = Object.entries, Ac = Object.setPrototypeOf, Uk = Object.isFrozen, Hk = Object.getPrototypeOf, Wk = Object.getOwnPropertyDescriptor;
let Rt = Object.freeze, Zt = Object.seal, Ir = Object.create, Gf = typeof Reflect < "u" && Reflect, Cs = Gf.apply, Os = Gf.construct;
Rt || (Rt = function(t) {
  return t;
});
Zt || (Zt = function(t) {
  return t;
});
Cs || (Cs = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  return t.apply(n, o);
});
Os || (Os = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const Sr = st(Array.prototype.forEach), Gk = st(Array.prototype.lastIndexOf), Cc = st(Array.prototype.pop), Ar = st(Array.prototype.push), Kk = st(Array.prototype.splice), At = Array.isArray, so = st(String.prototype.toLowerCase), Qa = st(String.prototype.toString), Oc = st(String.prototype.match), Cr = st(String.prototype.replace), Lc = st(String.prototype.indexOf), Yk = st(String.prototype.trim), qk = st(Number.prototype.toString), Zk = st(Boolean.prototype.toString), Ic = typeof BigInt > "u" ? null : st(BigInt.prototype.toString), Rc = typeof Symbol > "u" ? null : st(Symbol.prototype.toString), Qe = st(Object.prototype.hasOwnProperty), ro = st(Object.prototype.toString), gt = st(RegExp.prototype.test), oo = Xk(TypeError);
function st(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Cs(e, t, r);
  };
}
function Xk(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Os(e, n);
  };
}
function we(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : so;
  if (Ac && Ac(e, null), !At(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (Uk(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function Qk(e) {
  for (let t = 0; t < e.length; t++)
    Qe(e, t) || (e[t] = null);
  return e;
}
function wt(e) {
  const t = Ir(null);
  for (const r of Wf(e)) {
    var n = Vk(r, 2);
    const o = n[0], a = n[1];
    Qe(e, o) && (At(a) ? t[o] = Qk(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = wt(a) : t[o] = a);
  }
  return t;
}
function Jk(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return qk(e);
    case "boolean":
      return Zk(e);
    case "bigint":
      return Ic ? Ic(e) : "0";
    case "symbol":
      return Rc ? Rc(e) : "Symbol()";
    case "undefined":
      return ro(e);
    case "function":
    case "object": {
      if (e === null)
        return ro(e);
      const t = e, n = dn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : ro(r);
      }
      return ro(e);
    }
    default:
      return ro(e);
  }
}
function dn(e, t) {
  for (; e !== null; ) {
    const r = Wk(e, t);
    if (r) {
      if (r.get)
        return st(r.get);
      if (typeof r.value == "function")
        return st(r.value);
    }
    e = Hk(e);
  }
  function n() {
    return null;
  }
  return n;
}
function eT(e) {
  try {
    return gt(e, ""), !0;
  } catch {
    return !1;
  }
}
const xc = Rt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ja = Rt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), es = Rt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), tT = Rt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ts = Rt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), nT = Rt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Nc = Rt(["#text"]), Pc = Rt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ns = Rt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), $c = Rt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Yo = Rt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), rT = Zt(/{{[\w\W]*|^[\w\W]*}}/g), oT = Zt(/<%[\w\W]*|^[\w\W]*%>/g), aT = Zt(/\${[\w\W]*/g), sT = Zt(/^data-[\-\w.\u00B7-\uFFFF]+$/), lT = Zt(/^aria-[\-\w]+$/), Mc = Zt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), iT = Zt(/^(?:\w+script|data):/i), cT = Zt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), uT = Zt(/^html$/i), fT = Zt(/^[a-z][.\w]*(-[.\w]+)+$/i), fn = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, dT = function() {
  return typeof window > "u" ? null : window;
}, pT = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const o = "data-tt-policy-suffix";
  n && n.hasAttribute(o) && (r = n.getAttribute(o));
  const a = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(a, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, Dc = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Kf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dT();
  const t = (ae) => Kf(ae);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== fn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, p = e.trustedTypes, m = i.prototype, b = dn(m, "cloneNode"), v = dn(m, "remove"), g = dn(m, "nextSibling"), E = dn(m, "childNodes"), d = dn(m, "parentNode"), A = dn(m, "shadowRoot"), L = dn(m, "attributes"), S = s && s.prototype ? dn(s.prototype, "nodeType") : null, _ = s && s.prototype ? dn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ae = n.createElement("template");
    ae.content && ae.content.ownerDocument && (n = ae.content.ownerDocument);
  }
  let C, O = "";
  const H = n, G = H.implementation, te = H.createNodeIterator, ue = H.createDocumentFragment, ee = H.getElementsByTagName, he = r.importNode;
  let de = Dc();
  t.isSupported = typeof Wf == "function" && typeof d == "function" && G && G.createHTMLDocument !== void 0;
  const N = rT, M = oT, z = aT, le = sT, J = lT, be = iT, Z = cT, Pe = fT;
  let Se = Mc, _e = null;
  const Ve = we({}, [...xc, ...Ja, ...es, ...ts, ...Nc]);
  let ke = null;
  const Ye = we({}, [...Pc, ...ns, ...$c, ...Yo]);
  let ce = Object.seal(Ir(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), qe = null, lt = null;
  const je = Object.seal(Ir(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let yt = !0, it = !0, ct = !1, ut = !0, B = !1, q = !0, h = !1, k = !1, $ = !1, W = !1, ge = !1, ie = !1, T = !0, P = !1;
  const fe = "user-content-";
  let Ee = !0, Ze = !1, Nt = {}, He = null;
  const or = we({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Wr = null;
  const Ro = we({}, ["audio", "video", "img", "source", "image", "track"]);
  let yr = null;
  const Gr = we({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ar = "http://www.w3.org/1998/Math/MathML", Sn = "http://www.w3.org/2000/svg", jt = "http://www.w3.org/1999/xhtml";
  let Wn = jt, Kr = !1, Yr = null;
  const _r = we({}, [ar, Sn, jt], Qa);
  let qr = we({}, ["mi", "mo", "mn", "ms", "mtext"]), Zr = we({}, ["annotation-xml"]);
  const Ma = we({}, ["title", "style", "font", "a", "script"]);
  let sr = null;
  const xo = ["application/xhtml+xml", "text/html"], Da = "text/html";
  let De = null, Gn = null;
  const Fa = n.createElement("form"), No = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, wr = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Gn && Gn === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = wt(y), sr = // eslint-disable-next-line unicorn/prefer-includes
    xo.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Da : y.PARSER_MEDIA_TYPE, De = sr === "application/xhtml+xml" ? Qa : so, _e = Qe(y, "ALLOWED_TAGS") && At(y.ALLOWED_TAGS) ? we({}, y.ALLOWED_TAGS, De) : Ve, ke = Qe(y, "ALLOWED_ATTR") && At(y.ALLOWED_ATTR) ? we({}, y.ALLOWED_ATTR, De) : Ye, Yr = Qe(y, "ALLOWED_NAMESPACES") && At(y.ALLOWED_NAMESPACES) ? we({}, y.ALLOWED_NAMESPACES, Qa) : _r, yr = Qe(y, "ADD_URI_SAFE_ATTR") && At(y.ADD_URI_SAFE_ATTR) ? we(wt(Gr), y.ADD_URI_SAFE_ATTR, De) : Gr, Wr = Qe(y, "ADD_DATA_URI_TAGS") && At(y.ADD_DATA_URI_TAGS) ? we(wt(Ro), y.ADD_DATA_URI_TAGS, De) : Ro, He = Qe(y, "FORBID_CONTENTS") && At(y.FORBID_CONTENTS) ? we({}, y.FORBID_CONTENTS, De) : or, qe = Qe(y, "FORBID_TAGS") && At(y.FORBID_TAGS) ? we({}, y.FORBID_TAGS, De) : wt({}), lt = Qe(y, "FORBID_ATTR") && At(y.FORBID_ATTR) ? we({}, y.FORBID_ATTR, De) : wt({}), Nt = Qe(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? wt(y.USE_PROFILES) : y.USE_PROFILES : !1, yt = y.ALLOW_ARIA_ATTR !== !1, it = y.ALLOW_DATA_ATTR !== !1, ct = y.ALLOW_UNKNOWN_PROTOCOLS || !1, ut = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = y.SAFE_FOR_TEMPLATES || !1, q = y.SAFE_FOR_XML !== !1, h = y.WHOLE_DOCUMENT || !1, W = y.RETURN_DOM || !1, ge = y.RETURN_DOM_FRAGMENT || !1, ie = y.RETURN_TRUSTED_TYPE || !1, $ = y.FORCE_BODY || !1, T = y.SANITIZE_DOM !== !1, P = y.SANITIZE_NAMED_PROPS || !1, Ee = y.KEEP_CONTENT !== !1, Ze = y.IN_PLACE || !1, Se = eT(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : Mc, Wn = typeof y.NAMESPACE == "string" ? y.NAMESPACE : jt, qr = Qe(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? wt(y.MATHML_TEXT_INTEGRATION_POINTS) : we({}, ["mi", "mo", "mn", "ms", "mtext"]), Zr = Qe(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? wt(y.HTML_INTEGRATION_POINTS) : we({}, ["annotation-xml"]);
    const F = Qe(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? wt(y.CUSTOM_ELEMENT_HANDLING) : Ir(null);
    if (ce = Ir(null), Qe(F, "tagNameCheck") && No(F.tagNameCheck) && (ce.tagNameCheck = F.tagNameCheck), Qe(F, "attributeNameCheck") && No(F.attributeNameCheck) && (ce.attributeNameCheck = F.attributeNameCheck), Qe(F, "allowCustomizedBuiltInElements") && typeof F.allowCustomizedBuiltInElements == "boolean" && (ce.allowCustomizedBuiltInElements = F.allowCustomizedBuiltInElements), B && (it = !1), ge && (W = !0), Nt && (_e = we({}, Nc), ke = Ir(null), Nt.html === !0 && (we(_e, xc), we(ke, Pc)), Nt.svg === !0 && (we(_e, Ja), we(ke, ns), we(ke, Yo)), Nt.svgFilters === !0 && (we(_e, es), we(ke, ns), we(ke, Yo)), Nt.mathMl === !0 && (we(_e, ts), we(ke, $c), we(ke, Yo))), je.tagCheck = null, je.attributeCheck = null, Qe(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? je.tagCheck = y.ADD_TAGS : At(y.ADD_TAGS) && (_e === Ve && (_e = wt(_e)), we(_e, y.ADD_TAGS, De))), Qe(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? je.attributeCheck = y.ADD_ATTR : At(y.ADD_ATTR) && (ke === Ye && (ke = wt(ke)), we(ke, y.ADD_ATTR, De))), Qe(y, "ADD_URI_SAFE_ATTR") && At(y.ADD_URI_SAFE_ATTR) && we(yr, y.ADD_URI_SAFE_ATTR, De), Qe(y, "FORBID_CONTENTS") && At(y.FORBID_CONTENTS) && (He === or && (He = wt(He)), we(He, y.FORBID_CONTENTS, De)), Qe(y, "ADD_FORBID_CONTENTS") && At(y.ADD_FORBID_CONTENTS) && (He === or && (He = wt(He)), we(He, y.ADD_FORBID_CONTENTS, De)), Ee && (_e["#text"] = !0), h && we(_e, ["html", "head", "body"]), _e.table && (we(_e, ["tbody"]), delete qe.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw oo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw oo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      C = y.TRUSTED_TYPES_POLICY, O = C.createHTML("");
    } else
      C === void 0 && (C = pT(p, o)), C !== null && typeof O == "string" && (O = C.createHTML(""));
    (de.uponSanitizeElement.length > 0 || de.uponSanitizeAttribute.length > 0) && _e === Ve && (_e = wt(_e)), de.uponSanitizeAttribute.length > 0 && ke === Ye && (ke = wt(ke)), Rt && Rt(y), Gn = y;
  }, Po = we({}, [...Ja, ...es, ...tT]), $o = we({}, [...ts, ...nT]), za = function(y) {
    let F = d(y);
    (!F || !F.tagName) && (F = {
      namespaceURI: Wn,
      tagName: "template"
    });
    const X = so(y.tagName), Le = so(F.tagName);
    return Yr[y.namespaceURI] ? y.namespaceURI === Sn ? F.namespaceURI === jt ? X === "svg" : F.namespaceURI === ar ? X === "svg" && (Le === "annotation-xml" || qr[Le]) : !!Po[X] : y.namespaceURI === ar ? F.namespaceURI === jt ? X === "math" : F.namespaceURI === Sn ? X === "math" && Zr[Le] : !!$o[X] : y.namespaceURI === jt ? F.namespaceURI === Sn && !Zr[Le] || F.namespaceURI === ar && !qr[Le] ? !1 : !$o[X] && (Ma[X] || !Po[X]) : !!(sr === "application/xhtml+xml" && Yr[y.namespaceURI]) : !1;
  }, Ft = function(y) {
    Ar(t.removed, {
      element: y
    });
    try {
      d(y).removeChild(y);
    } catch {
      v(y);
    }
  }, R = function(y, F) {
    try {
      Ar(t.removed, {
        attribute: F.getAttributeNode(y),
        from: F
      });
    } catch {
      Ar(t.removed, {
        attribute: null,
        from: F
      });
    }
    if (F.removeAttribute(y), y === "is")
      if (W || ge)
        try {
          Ft(F);
        } catch {
        }
      else
        try {
          F.setAttribute(y, "");
        } catch {
        }
  }, Y = function(y) {
    let F = null, X = null;
    if ($)
      y = "<remove></remove>" + y;
    else {
      const Fe = Oc(y, /^[\r\n\t ]+/);
      X = Fe && Fe[0];
    }
    sr === "application/xhtml+xml" && Wn === jt && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const Le = C ? C.createHTML(y) : y;
    if (Wn === jt)
      try {
        F = new f().parseFromString(Le, sr);
      } catch {
      }
    if (!F || !F.documentElement) {
      F = G.createDocument(Wn, "template", null);
      try {
        F.documentElement.innerHTML = Kr ? O : Le;
      } catch {
      }
    }
    const Te = F.body || F.documentElement;
    return y && X && Te.insertBefore(n.createTextNode(X), Te.childNodes[0] || null), Wn === jt ? ee.call(F, h ? "html" : "body")[0] : h ? F.documentElement : Te;
  }, ye = function(y) {
    return te.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Xe = function(y) {
    y.normalize();
    const F = te.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = F.nextNode();
    for (; X; ) {
      let Le = X.data;
      Sr([N, M, z], (Te) => {
        Le = Cr(Le, Te, " ");
      }), X.data = Le, X = F.nextNode();
    }
  }, ft = function(y) {
    const F = _ ? _(y) : null;
    return typeof F != "string" || De(F) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== L(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== S(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    y.childNodes !== E(y);
  }, Ut = function(y) {
    if (!S || typeof y != "object" || y === null)
      return !1;
    try {
      return S(y) === fn.documentFragment;
    } catch {
      return !1;
    }
  }, zt = function(y) {
    if (!S || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof S(y) == "number";
    } catch {
      return !1;
    }
  };
  function Pt(ae, y, F) {
    Sr(ae, (X) => {
      X.call(t, y, F, Gn);
    });
  }
  const Kn = function(y) {
    let F = null;
    if (Pt(de.beforeSanitizeElements, y, null), ft(y))
      return Ft(y), !0;
    const X = De(y.nodeName);
    if (Pt(de.uponSanitizeElement, y, {
      tagName: X,
      allowedTags: _e
    }), q && y.hasChildNodes() && !zt(y.firstElementChild) && gt(/<[/\w!]/g, y.innerHTML) && gt(/<[/\w!]/g, y.textContent) || q && y.namespaceURI === jt && X === "style" && zt(y.firstElementChild) || y.nodeType === fn.progressingInstruction || q && y.nodeType === fn.comment && gt(/<[/\w]/g, y.data))
      return Ft(y), !0;
    if (qe[X] || !(je.tagCheck instanceof Function && je.tagCheck(X)) && !_e[X]) {
      if (!qe[X] && Al(X) && (ce.tagNameCheck instanceof RegExp && gt(ce.tagNameCheck, X) || ce.tagNameCheck instanceof Function && ce.tagNameCheck(X)))
        return !1;
      if (Ee && !He[X]) {
        const Te = d(y), Fe = E(y);
        if (Fe && Te) {
          const Ht = Fe.length;
          for (let ln = Ht - 1; ln >= 0; --ln) {
            const Xt = b(Fe[ln], !0);
            Te.insertBefore(Xt, g(y));
          }
        }
      }
      return Ft(y), !0;
    }
    return (S ? S(y) : y.nodeType) === fn.element && !za(y) || (X === "noscript" || X === "noembed" || X === "noframes") && gt(/<\/no(script|embed|frames)/i, y.innerHTML) ? (Ft(y), !0) : (B && y.nodeType === fn.text && (F = y.textContent, Sr([N, M, z], (Te) => {
      F = Cr(F, Te, " ");
    }), y.textContent !== F && (Ar(t.removed, {
      element: y.cloneNode()
    }), y.textContent = F)), Pt(de.afterSanitizeElements, y, null), !1);
  }, Mo = function(y, F, X) {
    if (lt[F] || T && (F === "id" || F === "name") && (X in n || X in Fa))
      return !1;
    const Le = ke[F] || je.attributeCheck instanceof Function && je.attributeCheck(F, y);
    if (!(it && !lt[F] && gt(le, F))) {
      if (!(yt && gt(J, F))) {
        if (!Le || lt[F]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Al(y) && (ce.tagNameCheck instanceof RegExp && gt(ce.tagNameCheck, y) || ce.tagNameCheck instanceof Function && ce.tagNameCheck(y)) && (ce.attributeNameCheck instanceof RegExp && gt(ce.attributeNameCheck, F) || ce.attributeNameCheck instanceof Function && ce.attributeNameCheck(F, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            F === "is" && ce.allowCustomizedBuiltInElements && (ce.tagNameCheck instanceof RegExp && gt(ce.tagNameCheck, X) || ce.tagNameCheck instanceof Function && ce.tagNameCheck(X)))
          ) return !1;
        } else if (!yr[F]) {
          if (!gt(Se, Cr(X, Z, ""))) {
            if (!((F === "src" || F === "xlink:href" || F === "href") && y !== "script" && Lc(X, "data:") === 0 && Wr[y])) {
              if (!(ct && !gt(be, Cr(X, Z, "")))) {
                if (X)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Yf = we({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Al = function(y) {
    return !Yf[so(y)] && gt(Pe, y);
  }, Cl = function(y) {
    Pt(de.beforeSanitizeAttributes, y, null);
    const F = y.attributes;
    if (!F || ft(y))
      return;
    const X = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ke,
      forceKeepAttr: void 0
    };
    let Le = F.length;
    for (; Le--; ) {
      const Te = F[Le], Fe = Te.name, Ht = Te.namespaceURI, ln = Te.value, Xt = De(Fe), Ba = ln;
      let dt = Fe === "value" ? Ba : Yk(Ba);
      if (X.attrName = Xt, X.attrValue = dt, X.keepAttr = !0, X.forceKeepAttr = void 0, Pt(de.uponSanitizeAttribute, y, X), dt = X.attrValue, P && (Xt === "id" || Xt === "name") && Lc(dt, fe) !== 0 && (R(Fe, y), dt = fe + dt), q && gt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        R(Fe, y);
        continue;
      }
      if (Xt === "attributename" && Oc(dt, "href")) {
        R(Fe, y);
        continue;
      }
      if (X.forceKeepAttr)
        continue;
      if (!X.keepAttr) {
        R(Fe, y);
        continue;
      }
      if (!ut && gt(/\/>/i, dt)) {
        R(Fe, y);
        continue;
      }
      B && Sr([N, M, z], (Ll) => {
        dt = Cr(dt, Ll, " ");
      });
      const Ol = De(y.nodeName);
      if (!Mo(Ol, Xt, dt)) {
        R(Fe, y);
        continue;
      }
      if (C && typeof p == "object" && typeof p.getAttributeType == "function" && !Ht)
        switch (p.getAttributeType(Ol, Xt)) {
          case "TrustedHTML": {
            dt = C.createHTML(dt);
            break;
          }
          case "TrustedScriptURL": {
            dt = C.createScriptURL(dt);
            break;
          }
        }
      if (dt !== Ba)
        try {
          Ht ? y.setAttributeNS(Ht, Fe, dt) : y.setAttribute(Fe, dt), ft(y) ? Ft(y) : Cc(t.removed);
        } catch {
          R(Fe, y);
        }
    }
    Pt(de.afterSanitizeAttributes, y, null);
  }, Do = function(y) {
    let F = null;
    const X = ye(y);
    for (Pt(de.beforeSanitizeShadowDOM, y, null); F = X.nextNode(); )
      if (Pt(de.uponSanitizeShadowNode, F, null), Kn(F), Cl(F), Ut(F.content) && Do(F.content), (S ? S(F) : F.nodeType) === fn.element) {
        const Te = A ? A(F) : F.shadowRoot;
        Ut(Te) && (kr(Te), Do(Te));
      }
    Pt(de.afterSanitizeShadowDOM, y, null);
  }, kr = function(y) {
    const F = S ? S(y) : y.nodeType;
    if (F === fn.element) {
      const Te = A ? A(y) : y.shadowRoot;
      Ut(Te) && (kr(Te), Do(Te));
    }
    const X = E ? E(y) : y.childNodes;
    if (!X)
      return;
    const Le = [];
    Sr(X, (Te) => {
      Ar(Le, Te);
    });
    for (const Te of Le)
      kr(Te);
    if (F === fn.element) {
      const Te = _ ? _(y) : null;
      if (typeof Te == "string" && De(Te) === "template") {
        const Fe = y.content;
        Ut(Fe) && kr(Fe);
      }
    }
  };
  return t.sanitize = function(ae) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, F = null, X = null, Le = null, Te = null;
    if (Kr = !ae, Kr && (ae = "<!-->"), typeof ae != "string" && !zt(ae) && (ae = Jk(ae), typeof ae != "string"))
      throw oo("dirty is not a string, aborting");
    if (!t.isSupported)
      return ae;
    if (k || wr(y), t.removed = [], typeof ae == "string" && (Ze = !1), Ze) {
      const ln = _ ? _(ae) : ae.nodeName;
      if (typeof ln == "string") {
        const Xt = De(ln);
        if (!_e[Xt] || qe[Xt])
          throw oo("root node is forbidden and cannot be sanitized in-place");
      }
      if (ft(ae))
        throw oo("root node is clobbered and cannot be sanitized in-place");
      kr(ae);
    } else if (zt(ae))
      F = Y("<!---->"), X = F.ownerDocument.importNode(ae, !0), X.nodeType === fn.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? F = X : F.appendChild(X), kr(X);
    else {
      if (!W && !B && !h && // eslint-disable-next-line unicorn/prefer-includes
      ae.indexOf("<") === -1)
        return C && ie ? C.createHTML(ae) : ae;
      if (F = Y(ae), !F)
        return W ? null : ie ? O : "";
    }
    F && $ && Ft(F.firstChild);
    const Fe = ye(Ze ? ae : F);
    for (; Le = Fe.nextNode(); )
      Kn(Le), Cl(Le), Ut(Le.content) && Do(Le.content);
    if (Ze)
      return B && Xe(ae), ae;
    if (W) {
      if (B && Xe(F), ge)
        for (Te = ue.call(F.ownerDocument); F.firstChild; )
          Te.appendChild(F.firstChild);
      else
        Te = F;
      return (ke.shadowroot || ke.shadowrootmode) && (Te = he.call(r, Te, !0)), Te;
    }
    let Ht = h ? F.outerHTML : F.innerHTML;
    return h && _e["!doctype"] && F.ownerDocument && F.ownerDocument.doctype && F.ownerDocument.doctype.name && gt(uT, F.ownerDocument.doctype.name) && (Ht = "<!DOCTYPE " + F.ownerDocument.doctype.name + `>
` + Ht), B && Sr([N, M, z], (ln) => {
      Ht = Cr(Ht, ln, " ");
    }), C && ie ? C.createHTML(Ht) : Ht;
  }, t.setConfig = function() {
    let ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wr(ae), k = !0;
  }, t.clearConfig = function() {
    Gn = null, k = !1;
  }, t.isValidAttribute = function(ae, y, F) {
    Gn || wr({});
    const X = De(ae), Le = De(y);
    return Mo(X, Le, F);
  }, t.addHook = function(ae, y) {
    typeof y == "function" && Ar(de[ae], y);
  }, t.removeHook = function(ae, y) {
    if (y !== void 0) {
      const F = Gk(de[ae], y);
      return F === -1 ? void 0 : Kk(de[ae], F, 1)[0];
    }
    return Cc(de[ae]);
  }, t.removeHooks = function(ae) {
    de[ae] = [];
  }, t.removeAllHooks = function() {
    de = Dc();
  }, t;
}
var mT = Kf();
const hT = {
  ADD_ATTR: [
    "checked",
    "class",
    "data-checked",
    "data-original-path",
    "data-type",
    "id",
    "rel",
    "target",
    "width"
  ],
  FORBID_TAGS: ["script", "style", "iframe", "object", "embed"],
  FORBID_ATTR: ["style"]
};
function gT(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(/\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi, "") : mT.sanitize(e, hT) : "";
}
const vT = { class: "local-ai-chat-shell" }, bT = { class: "chat-sidebar" }, yT = { class: "sidebar-header" }, _T = { class: "sidebar-title-block" }, wT = { class: "sidebar-actions" }, kT = ["title"], TT = ["title"], ET = { class: "sidebar-search" }, ST = ["placeholder"], AT = { class: "sidebar-section recent-section" }, CT = { class: "section-title" }, OT = {
  key: 0,
  class: "chat-list"
}, LT = ["onClick", "onKeydown"], IT = { class: "chat-item-title" }, RT = { class: "chat-item-time" }, xT = ["title", "onClick"], NT = {
  key: 1,
  class: "sidebar-empty"
}, PT = { class: "chat-panel" }, $T = { class: "chat-topbar" }, MT = { class: "chat-topbar-main" }, DT = { class: "chat-title-row" }, FT = { class: "service-url" }, zT = { class: "chat-topbar-actions" }, BT = ["title"], VT = { class: "date-divider" }, jT = {
  key: 0,
  class: "empty-state"
}, UT = { class: "empty-title" }, HT = { class: "empty-desc" }, WT = { class: "message-avatar" }, GT = { key: 1 }, KT = { class: "message-body" }, YT = {
  key: 0,
  class: "user-bubble"
}, qT = { class: "assistant-head" }, ZT = {
  key: 0,
  class: "assistant-content-stack"
}, XT = ["open"], QT = { key: 0 }, JT = ["innerHTML"], eE = ["innerHTML"], tE = {
  key: 1,
  class: "message-content loading-text"
}, nE = {
  key: 0,
  class: "message-stats"
}, rE = {
  key: 1,
  class: "message-actions"
}, oE = ["title", "onClick"], aE = ["title", "onClick"], sE = ["title"], lE = ["title"], iE = ["title", "onClick"], cE = ["title", "onClick"], uE = ["placeholder", "onKeydown"], fE = { class: "input-toolbar" }, dE = { class: "input-toolbar-left" }, pE = ["title"], mE = { class: "model-select-shell" }, hE = ["value"], gE = ["value"], vE = { class: "input-toolbar-right" }, bE = ["disabled"], yE = /* @__PURE__ */ ne({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Eo(), n = j(""), r = j([]), o = j(""), a = j(""), s = j(!1), i = j(!1), l = j(null), u = j(null), f = j(null);
    let p = null;
    const m = /* @__PURE__ */ new Map(), b = I(() => !!a.value.trim() && !s.value), v = I(() => u.value?.healthy ? t("localAi.serviceHealthy") : u.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), g = I(
      () => r.value.find((B) => B.id === o.value) ?? null
    ), E = I(() => g.value?.messages ?? []), d = (B) => B ? B.split(/[\\/]+/).pop() ?? B : "", A = I(
      () => d(u.value?.modelPath) || d(l.value?.modelPath) || t("localAi.localModel")
    ), L = I(() => {
      const B = n.value.trim().toLowerCase();
      return r.value.filter(
        (q) => !B || q.title.toLowerCase().includes(B) || q.messages.some(
          (h) => h.content.toLowerCase().includes(B)
        )
      ).slice().sort((q, h) => h.updatedAt.localeCompare(q.updatedAt));
    }), S = () => t("localAi.now"), _ = () => {
      const B = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: B,
        updatedAt: B,
        updatedAtLabel: S(),
        messages: []
      };
    }, C = async () => {
      await Je();
      const B = f.value;
      B && (B.scrollTop = B.scrollHeight);
    }, O = async () => {
      try {
        l.value = await Uf();
      } catch (B) {
        Rn.warn("[LocalAI] refresh chat config failed", B);
      }
    }, H = async () => {
      i.value = !0;
      try {
        u.value = await Hf();
      } catch (B) {
        Rn.warn("[LocalAI] refresh chat status failed", B);
      } finally {
        i.value = !1;
      }
    }, G = async () => {
      try {
        const B = await $k();
        r.value = B.map((q) => ({
          id: q.id,
          title: q.title,
          createdAt: q.createdAt,
          updatedAt: q.updatedAt,
          updatedAtLabel: new Date(q.updatedAt).toLocaleString(),
          messages: q.turns.map((h) => ({
            id: h.id,
            role: h.role,
            content: h.content,
            createdAt: h.createdAt
          }))
        })), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (B) {
        Rn.warn("[LocalAI] refresh histories failed", B);
      }
    }, te = async () => {
      await Promise.all([O(), H(), G()]);
    }, ue = async () => {
      const B = g.value;
      B && await Mk({
        id: B.id,
        title: B.title,
        createdAt: B.createdAt,
        updatedAt: B.updatedAt,
        turns: B.messages.map((q) => ({
          id: q.id,
          role: q.role,
          content: q.content,
          createdAt: q.createdAt
        }))
      });
    }, ee = () => {
      const B = _();
      r.value.unshift(B), o.value = B.id, a.value = "";
    }, he = () => {
      g.value || ee();
    }, de = (B) => {
      o.value = B, C();
    }, N = async (B) => {
      r.value = r.value.filter((q) => q.id !== B), await Dk(B), o.value === B && (o.value = r.value[0]?.id ?? "");
    }, M = () => E.value.filter((B) => !B.streaming).map((B) => ({
      role: B.role,
      content: B.content
    })), z = (B) => {
      const q = m.get(B);
      if (q) return q;
      const h = gT(xe.parse(B, { async: !1 }));
      if (m.set(B, h), m.size > 80) {
        const k = m.keys().next().value;
        typeof k == "string" && m.delete(k);
      }
      return h;
    }, le = (B) => {
      const q = B.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!q || q.index === void 0)
        return { reasoning: "", answer: B };
      const h = B.slice(0, q.index).trim(), k = q[0], $ = B.slice(q.index + k.length).trim();
      return {
        reasoning: (q[1] ?? "").trim(),
        answer: [h, $].filter(Boolean).join(`

`)
      };
    }, J = (B) => le(B).reasoning, be = (B) => le(B).answer, Z = (B) => B.trim() ? Math.max(1, Math.ceil(B.length / 2.2)) : 0, Pe = (B) => {
      const q = E.value.findIndex((ge) => ge.id === B.id), h = Z(
        E.value.slice(0, Math.max(0, q)).map((ge) => ge.content).join(`
`)
      ), k = Z(B.content), $ = l.value?.ctxSize ?? 4096, W = (B.elapsedMs ?? Date.now() - ce(B).getTime()) / 1e3;
      return {
        context: h,
        contextMax: $,
        contextPercent: Math.min(100, Math.round(h / $ * 100)),
        output: k,
        seconds: W.toFixed(1),
        speed: W > 0 ? (k / W).toFixed(1) : "0.0"
      };
    }, Se = async (B) => {
      const q = performance.now();
      let h = "", k = null, $ = null, W = !1;
      const ge = async () => {
        if (!h) {
          k = null, $?.(), $ = null;
          return;
        }
        const P = h.length > 240 ? 18 : 6;
        B.content += h.slice(0, P), h = h.slice(P), await C(), k = window.setTimeout(() => {
          ge().catch(
            (fe) => Rn.warn("[LocalAI] stream pump failed", fe)
          );
        }, 24);
      }, ie = (P) => {
        P && (h += P, k === null && (k = window.setTimeout(() => {
          ge().catch(
            (fe) => Rn.warn("[LocalAI] stream pump failed", fe)
          );
        }, 12)));
      }, T = await Pk(
        { messages: M() },
        (P) => {
          W = !0, ie(P);
        }
      );
      if (!W)
        ie(T.content);
      else {
        const P = B.content.length + h.length;
        T.content.length > P && ie(T.content.slice(P));
      }
      (h || k !== null) && await new Promise((P) => {
        $ = P;
      }), T.content && B.content !== T.content && (B.content = T.content), B.streaming = !1, B.elapsedMs = performance.now() - q;
    }, _e = async () => {
      const B = a.value.trim();
      if (!B || s.value) return;
      he();
      const q = (/* @__PURE__ */ new Date()).toISOString();
      g.value?.messages.push({
        id: `${Date.now()}-user`,
        role: "user",
        content: B,
        createdAt: q
      });
      const h = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0
      };
      g.value?.messages.push(h), a.value = "", s.value = !0, await C();
      try {
        await Se(h), g.value && (g.value.title = g.value.title === t("localAi.newChatTitle") ? B.slice(0, 28) : g.value.title, g.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), g.value.updatedAtLabel = new Date(
          g.value.updatedAt
        ).toLocaleString(), await ue()), await H();
      } catch (k) {
        Ct.msg(`${t("localAi.chatFailed")}: ${k}`, "error"), h.streaming = !1, h.content = String(k);
      } finally {
        s.value = !1, await C();
      }
    }, Ve = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, ke = () => {
      n.value = "";
    }, Ye = () => {
      Ct.msg(t("localAi.moreComingSoon"));
    }, ce = (B) => new Date(B.createdAt || g.value?.updatedAt || Date.now()), qe = (B) => ce(B).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), lt = (B) => {
      const q = new Date(B), h = /* @__PURE__ */ new Date(), k = h.getTime() - q.getTime(), $ = 24 * 60 * 60 * 1e3;
      return q.toDateString() === h.toDateString() ? q.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : k < $ * 2 ? t("localAi.yesterday") : k < $ * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(k / $))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(k / ($ * 7)))
      });
    }, je = async (B) => {
      try {
        await navigator.clipboard.writeText(B.content), Ct.msg(t("localAi.copied"));
      } catch (q) {
        Ct.msg(`${t("common.operationFailed")}: ${q}`, "error");
      }
    }, yt = async (B) => {
      g.value && (g.value.messages = g.value.messages.filter(
        (q) => q.id !== B
      ), g.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), g.value.updatedAtLabel = new Date(
        g.value.updatedAt
      ).toLocaleString(), await ue());
    }, it = (B) => {
      a.value = B.content;
    }, ct = () => {
      Ct.msg(t("localAi.feedbackSaved"));
    }, ut = async (B) => {
      const q = g.value;
      if (!q || s.value) return;
      const h = q.messages.findIndex(
        (W) => W.id === B
      );
      if (!q.messages.slice(0, h).reverse().find((W) => W.role === "user")) return;
      q.messages = q.messages.slice(0, h);
      const $ = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0
      };
      q.messages.push($), s.value = !0, await C();
      try {
        await Se($), q.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), q.updatedAtLabel = new Date(q.updatedAt).toLocaleString(), await ue();
      } catch (W) {
        Ct.msg(`${t("localAi.chatFailed")}: ${W}`, "error"), $.streaming = !1, $.content = String(W);
      } finally {
        s.value = !1, await C();
      }
    };
    return nt(async () => {
      await te(), p = setInterval(() => {
        H().catch(
          (B) => Rn.warn("[LocalAI] status timer failed", B)
        );
      }, 8e3);
    }), ga(() => {
      p && clearInterval(p);
    }), (B, q) => (x(), K("main", vT, [
      w("aside", bT, [
        w("header", yT, [
          w("div", _T, [
            w(
              "h2",
              null,
              V(c(t)("localAi.chatTitle")),
              1
              /* TEXT */
            ),
            w(
              "p",
              null,
              V(c(t)("localAi.chatPrivacySubtitle")),
              1
              /* TEXT */
            )
          ]),
          w("div", wT, [
            w("button", {
              class: "icon-action-btn icon-action-btn--primary",
              type: "button",
              title: c(t)("localAi.newChat"),
              onClick: ee
            }, [
              D(c(bd), {
                theme: "outline",
                size: "16"
              })
            ], 8, kT),
            w("button", {
              class: "icon-action-btn",
              type: "button",
              title: c(t)("plugins.refresh"),
              onClick: te
            }, [
              D(c(Rl), {
                theme: "outline",
                size: "16"
              })
            ], 8, TT)
          ])
        ]),
        w("div", ET, [
          D(c(Cd), {
            theme: "outline",
            size: "17"
          }),
          ht(w("input", {
            "onUpdate:modelValue": q[0] || (q[0] = (h) => po(n) ? n.value = h : null),
            placeholder: c(t)("localAi.searchHistory")
          }, null, 8, ST), [
            [mo, c(n)]
          ])
        ]),
        w("section", AT, [
          w(
            "div",
            CT,
            V(c(t)("localAi.recent")),
            1
            /* TEXT */
          ),
          c(L).length ? (x(), K("div", OT, [
            (x(!0), K(
              Tt,
              null,
              xr(c(L), (h) => (x(), K("div", {
                key: h.id,
                class: U([
                  "chat-list-item",
                  c(o) === h.id ? "active" : ""
                ]),
                role: "button",
                tabindex: "0",
                onClick: (k) => de(h.id),
                onKeydown: Gt(We((k) => de(h.id), ["prevent"]), ["enter"])
              }, [
                D(c(Ed), {
                  theme: "outline",
                  size: "16"
                }),
                w(
                  "span",
                  IT,
                  V(h.title),
                  1
                  /* TEXT */
                ),
                w(
                  "span",
                  RT,
                  V(lt(h.updatedAt)),
                  1
                  /* TEXT */
                ),
                w("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: c(t)("common.delete"),
                  onClick: We((k) => N(h.id), ["stop"])
                }, [
                  D(c(Il), {
                    theme: "outline",
                    size: "13"
                  })
                ], 8, xT)
              ], 42, LT))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (x(), K(
            "div",
            NT,
            V(c(t)("common.empty")),
            1
            /* TEXT */
          )),
          w("button", {
            class: "view-all-btn",
            type: "button",
            onClick: ke
          }, [
            w(
              "span",
              null,
              V(c(t)("localAi.viewAllChats")),
              1
              /* TEXT */
            ),
            D(c(Ad), {
              theme: "outline",
              size: "15"
            })
          ])
        ])
      ]),
      w("section", PT, [
        w("header", $T, [
          w("div", MT, [
            w("div", DT, [
              w(
                "h3",
                null,
                V(c(g)?.title ?? c(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              w(
                "span",
                {
                  class: U([
                    "status-pill",
                    c(u)?.healthy ? "ready" : "stopped"
                  ])
                },
                [
                  q[2] || (q[2] = w(
                    "i",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  )),
                  Wt(
                    " " + V(c(v)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            w(
              "div",
              FT,
              V(c(u)?.baseUrl ?? "http://127.0.0.1:39281"),
              1
              /* TEXT */
            )
          ]),
          w("div", zT, [
            D(c(On), {
              size: "small",
              plain: "",
              class: "topbar-custom-btn",
              onClick: Ve
            }, {
              default: oe(() => [
                D(c(rs), {
                  theme: "outline",
                  size: "16"
                }),
                w(
                  "span",
                  null,
                  V(c(t)("localAi.settings")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            w("button", {
              class: "topbar-btn topbar-btn--icon",
              type: "button",
              title: c(t)("common.more"),
              onClick: Ye
            }, [
              D(c(Sd), {
                theme: "outline",
                size: "17"
              })
            ], 8, BT)
          ])
        ]),
        w(
          "div",
          {
            ref_key: "messageListRef",
            ref: f,
            class: "message-list"
          },
          [
            w("div", VT, [
              w(
                "span",
                null,
                V(c(t)("localAi.today")),
                1
                /* TEXT */
              )
            ]),
            c(E).length ? Q("v-if", !0) : (x(), K("div", jT, [
              D(c(xl), {
                theme: "outline",
                size: "28"
              }),
              w(
                "div",
                UT,
                V(c(t)("localAi.chatEmpty")),
                1
                /* TEXT */
              ),
              w(
                "div",
                HT,
                V(c(t)("localAi.chatPlaceholder")),
                1
                /* TEXT */
              )
            ])),
            (x(!0), K(
              Tt,
              null,
              xr(c(E), (h) => (x(), K(
                "article",
                {
                  key: h.id,
                  class: U(["message-row", `message-row--${h.role}`])
                },
                [
                  w("div", WT, [
                    h.role === "assistant" ? (x(), se(c(xl), {
                      key: 0,
                      theme: "outline",
                      size: "18"
                    })) : (x(), K(
                      "span",
                      GT,
                      V(c(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  w("div", KT, [
                    h.role === "user" ? (x(), K("div", YT, [
                      w(
                        "div",
                        null,
                        V(h.content),
                        1
                        /* TEXT */
                      ),
                      w(
                        "time",
                        null,
                        V(qe(h)),
                        1
                        /* TEXT */
                      )
                    ])) : (x(), K(
                      Tt,
                      { key: 1 },
                      [
                        w("div", qT, [
                          w(
                            "span",
                            null,
                            V(c(A)),
                            1
                            /* TEXT */
                          ),
                          w(
                            "small",
                            null,
                            V(h.streaming ? c(t)("localAi.thinking") : qe(h)),
                            1
                            /* TEXT */
                          )
                        ]),
                        w(
                          "div",
                          {
                            class: U(["assistant-card", { "assistant-card--streaming": h.streaming }])
                          },
                          [
                            h.content ? (x(), K("div", ZT, [
                              J(h.content) ? (x(), K("details", {
                                key: 0,
                                class: "reasoning-panel",
                                open: h.streaming
                              }, [
                                w("summary", null, [
                                  q[3] || (q[3] = w(
                                    "span",
                                    null,
                                    "Reasoning",
                                    -1
                                    /* HOISTED */
                                  )),
                                  h.streaming ? (x(), K(
                                    "small",
                                    QT,
                                    V(c(t)("localAi.thinking")),
                                    1
                                    /* TEXT */
                                  )) : Q("v-if", !0)
                                ]),
                                w("div", {
                                  class: "message-content markdown-body",
                                  innerHTML: z(J(h.content))
                                }, null, 8, JT)
                              ], 8, XT)) : Q("v-if", !0),
                              be(h.content) ? (x(), K("div", {
                                key: 1,
                                class: "message-content markdown-body",
                                innerHTML: z(be(h.content))
                              }, null, 8, eE)) : Q("v-if", !0)
                            ])) : (x(), K(
                              "div",
                              tE,
                              V(c(t)("localAi.thinking")),
                              1
                              /* TEXT */
                            ))
                          ],
                          2
                          /* CLASS */
                        ),
                        h.content ? (x(), K("div", nE, [
                          w(
                            "span",
                            null,
                            " Context: " + V(Pe(h).context) + "/" + V(Pe(h).contextMax) + " (" + V(Pe(h).contextPercent) + "%) ",
                            1
                            /* TEXT */
                          ),
                          w(
                            "span",
                            null,
                            "Output: " + V(Pe(h).output),
                            1
                            /* TEXT */
                          ),
                          w(
                            "span",
                            null,
                            V(Pe(h).seconds) + "s",
                            1
                            /* TEXT */
                          ),
                          w(
                            "span",
                            null,
                            V(Pe(h).speed) + " t/s",
                            1
                            /* TEXT */
                          )
                        ])) : Q("v-if", !0),
                        h.streaming ? Q("v-if", !0) : (x(), K("div", rE, [
                          w("button", {
                            type: "button",
                            title: c(t)("common.copy"),
                            onClick: (k) => je(h)
                          }, [
                            D(c(yd), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, oE),
                          w("button", {
                            type: "button",
                            title: c(t)("localAi.regenerate"),
                            onClick: (k) => ut(h.id)
                          }, [
                            D(c(Rl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, aE),
                          w("button", {
                            type: "button",
                            title: c(t)("localAi.like"),
                            onClick: ct
                          }, [
                            D(c(Td), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, sE),
                          w("button", {
                            type: "button",
                            title: c(t)("localAi.dislike"),
                            onClick: ct
                          }, [
                            D(c(_d), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, lE),
                          w("button", {
                            type: "button",
                            title: c(t)("common.edit"),
                            onClick: (k) => it(h)
                          }, [
                            D(c(kd), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, iE),
                          w("button", {
                            type: "button",
                            title: c(t)("common.delete"),
                            onClick: (k) => yt(h.id)
                          }, [
                            D(c(Il), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, cE)
                        ]))
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ])
                ],
                2
                /* CLASS */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          512
          /* NEED_PATCH */
        ),
        w(
          "form",
          {
            class: "chat-input-card",
            onSubmit: We(_e, ["prevent"])
          },
          [
            ht(w("textarea", {
              "onUpdate:modelValue": q[1] || (q[1] = (h) => po(a) ? a.value = h : null),
              class: "chat-input",
              rows: "3",
              placeholder: c(t)("localAi.chatPlaceholder"),
              onKeydown: Gt(We(_e, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, uE), [
              [mo, c(a)]
            ]),
            w("div", fE, [
              w("div", dE, [
                w("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: c(t)("localAi.settings"),
                  onClick: Ve
                }, [
                  D(c(rs), {
                    theme: "outline",
                    size: "16"
                  })
                ], 8, pE),
                w("label", mE, [
                  w("select", {
                    value: c(A),
                    disabled: ""
                  }, [
                    w("option", { value: c(A) }, V(c(A)), 9, gE)
                  ], 8, hE),
                  D(c(wd), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ]),
              w("div", vE, [
                q[4] || (q[4] = w(
                  "span",
                  { class: "input-hint" },
                  "Ctrl + Enter",
                  -1
                  /* HOISTED */
                )),
                w("button", {
                  class: "send-btn",
                  type: "submit",
                  disabled: !c(b)
                }, [
                  D(c(Od), {
                    theme: "outline",
                    size: "16"
                  }),
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.send")),
                    1
                    /* TEXT */
                  )
                ], 8, bE)
              ])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ]));
  }
}), _E = /* @__PURE__ */ Ks(yE, [["__scopeId", "data-v-f3bea1a6"]]), wE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _E
}, Symbol.toStringTag, { value: "Module" }));
async function Fc(e = {}) {
  return typeof e == "object" && Object.freeze(e), await St("plugin:dialog|open", { options: e });
}
const kE = { class: "settings-panel local-ai-settings-shell" }, TE = { class: "local-ai-hero panel-card" }, EE = { class: "panel-title" }, SE = { class: "hero-desc" }, AE = { class: "header-actions" }, CE = {
  key: 0,
  class: "settings-grid"
}, OE = { class: "summary-panel panel-card" }, LE = { class: "status-strip" }, IE = { class: "summary-card" }, RE = { class: "summary-card__title" }, xE = { class: "summary-card__desc" }, NE = { class: "service-controls" }, PE = { class: "service-url" }, $E = { class: "summary-card" }, ME = { class: "summary-card__title" }, DE = { class: "summary-card__desc" }, FE = { class: "summary-meta" }, zE = { class: "form-panel panel-card" }, BE = { class: "settings-section" }, VE = { class: "settings-section__header" }, jE = { class: "field-stack" }, UE = { class: "field-row" }, HE = { class: "path-control" }, WE = { class: "field-row" }, GE = { class: "field-row" }, KE = { class: "field-row" }, YE = { class: "path-control" }, qE = ["placeholder"], ZE = { class: "settings-section grid-two" }, XE = { class: "settings-section__header" }, QE = { class: "param-grid" }, JE = { class: "number-field" }, eS = { class: "number-field" }, tS = { class: "number-field" }, nS = { class: "number-field" }, rS = { class: "number-field" }, oS = { class: "number-field" }, aS = { class: "settings-section grid-two" }, sS = { class: "settings-section__header" }, lS = { class: "switch-grid" }, iS = { class: "settings-section grid-two" }, cS = { class: "settings-section__header" }, uS = { class: "switch-grid switch-grid--two" }, fS = { class: "number-field" }, dS = { class: "number-field" }, pS = { class: "settings-section grid-two" }, mS = { class: "settings-section__header" }, hS = { class: "param-grid param-grid--three" }, gS = { class: "number-field" }, vS = { class: "number-field" }, bS = { class: "number-field" }, yS = { class: "settings-footer" }, _S = ["title"], wS = /* @__PURE__ */ ne({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Eo(), n = j(null), r = j(null), o = j(null), a = j(null), s = j(!1), i = j(!1), l = j(!1), u = j(!1), f = j(!1);
    let p = null;
    const m = I(() => !!a.value?.selectedModelPath), b = I({ get: () => n.value?.modelPath ?? "", set: (N) => {
      n.value && (n.value.modelPath = N || void 0);
    } }), v = I({ get: () => n.value?.mmprojPath ?? "", set: (N) => {
      n.value && (n.value.mmprojPath = N || void 0);
    } }), g = I(() => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")), E = I(() => m.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")), d = I(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), A = (N) => N.split(/[\\/]+/).pop() ?? N, L = async () => {
      s.value = !0;
      try {
        n.value = await Uf(), await Promise.all([S(), C(), _()]);
      } catch (N) {
        Rn.error("[LocalAI] refresh settings failed", N), Ct.msg(`${t("localAi.refreshFailed")}: ${N}`, "error");
      } finally {
        s.value = !1;
      }
    }, S = async () => {
      r.value = await Ik();
    }, _ = async () => {
      o.value = await Hf();
    }, C = async () => {
      n.value && (a.value = await Lk(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, O = async () => {
      if (n.value)
        try {
          await Xa(n.value);
        } catch (N) {
          Rn.warn("[LocalAI] autosave failed", N);
        }
    }, H = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Xa(n.value), await Promise.all([S(), C(), _()]), Ct.msg(t("localAi.configSaved"));
        } catch (N) {
          Ct.msg(`${t("localAi.configSaveFailed")}: ${N}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, G = async () => {
      const N = await Fc({ directory: !0, multiple: !1, title: t("localAi.chooseModelDir") });
      !N || Array.isArray(N) || !n.value || (n.value.modelDir = N, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await C());
    }, te = async () => {
      const N = await Fc({ multiple: !1, title: t("localAi.chooseRuntime"), filters: [{ name: "llama-server", extensions: ["exe"] }] });
      !N || Array.isArray(N) || !n.value || (n.value.runtimePath = N, await O(), await S());
    }, ue = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Xa(n.value), o.value = await Rk(n.value), Ct.msg(t("localAi.serviceStarted"));
        } catch (N) {
          Ct.msg(`${t("localAi.serviceStartFailed")}: ${N}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, ee = async () => {
      u.value = !0;
      try {
        await H(), o.value = await xk(), Ct.msg(t("localAi.serviceRestarted"));
      } catch (N) {
        Ct.msg(`${t("localAi.serviceRestartFailed")}: ${N}`, "error");
      } finally {
        u.value = !1;
      }
    }, he = async () => {
      f.value = !0;
      try {
        await Nk(), await _(), Ct.msg(t("localAi.serviceStoppedMsg"));
      } catch (N) {
        Ct.msg(`${t("localAi.serviceStopFailed")}: ${N}`, "error");
      } finally {
        f.value = !1;
      }
    }, de = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return nt(async () => {
      await L(), p = setInterval(() => {
        _().catch((N) => Rn.warn("[LocalAI] status refresh failed", N));
      }, 5e3);
    }), ga(() => {
      p && clearInterval(p);
    }), (N, M) => {
      const z = Uw, le = jw, J = Aw, be = Zw;
      return x(), K("div", kE, [
        w("header", TE, [
          w("div", null, [
            w(
              "h3",
              EE,
              V(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            w(
              "p",
              SE,
              V(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          w("div", AE, [
            D(c(On), {
              size: "small",
              plain: "",
              onClick: de
            }, {
              default: oe(() => [
                Wt(
                  V(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            D(c(On), {
              size: "small",
              loading: c(s),
              onClick: L
            }, {
              default: oe(() => [
                Wt(
                  V(c(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        c(n) ? (x(), K("main", CE, [
          w("aside", OE, [
            w("div", LE, [
              w(
                "div",
                {
                  class: U(["status-item", { ready: c(r)?.available }])
                },
                [
                  M[20] || (M[20] = w(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  w(
                    "span",
                    null,
                    V(c(g)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              w(
                "div",
                {
                  class: U(["status-item", { ready: c(m) }])
                },
                [
                  M[21] || (M[21] = w(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  w(
                    "span",
                    null,
                    V(c(E)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              w(
                "div",
                {
                  class: U(["status-item", { ready: c(o)?.healthy }])
                },
                [
                  M[22] || (M[22] = w(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  w(
                    "span",
                    null,
                    V(c(d)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            w("section", IE, [
              w(
                "div",
                RE,
                V(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              w(
                "div",
                xE,
                V(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              w("div", NE, [
                D(c(On), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: ue
                }, {
                  default: oe(() => [
                    Wt(
                      V(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                D(c(On), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: ee
                }, {
                  default: oe(() => [
                    Wt(
                      V(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                D(c(On), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(f),
                  disabled: !c(o)?.running,
                  onClick: he
                }, {
                  default: oe(() => [
                    Wt(
                      V(c(t)("localAi.stopService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"])
              ]),
              w(
                "div",
                PE,
                V(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            w("section", $E, [
              w(
                "div",
                ME,
                V(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              w(
                "div",
                DE,
                V(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              w("div", FE, [
                w("div", null, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "b",
                    null,
                    V(c(r)?.available ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                w("div", null, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "b",
                    null,
                    V(c(m) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                w("div", null, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "b",
                    null,
                    V(c(o)?.healthy ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          w("section", zE, [
            w("div", BE, [
              w("div", VE, [
                w("div", null, [
                  w(
                    "h4",
                    null,
                    V(c(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    V(c(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              w("div", jE, [
                w("label", UE, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  w("div", HE, [
                    ht(w(
                      "input",
                      {
                        "onUpdate:modelValue": M[0] || (M[0] = (Z) => c(n).modelDir = Z),
                        class: "text-input",
                        onChange: C
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [mo, c(n).modelDir]
                    ]),
                    D(c(On), {
                      size: "small",
                      plain: "",
                      onClick: G
                    }, {
                      default: oe(() => [
                        Wt(
                          V(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ]),
                w("label", WE, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  D(le, {
                    modelValue: c(b),
                    "onUpdate:modelValue": M[1] || (M[1] = (Z) => po(b) ? b.value = Z : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: oe(() => [
                      (x(!0), K(
                        Tt,
                        null,
                        xr(c(a)?.mainModels ?? [], (Z) => (x(), se(z, {
                          key: Z,
                          label: A(Z),
                          value: Z
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                w("label", GE, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  D(le, {
                    modelValue: c(v),
                    "onUpdate:modelValue": M[2] || (M[2] = (Z) => po(v) ? v.value = Z : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: oe(() => [
                      (x(!0), K(
                        Tt,
                        null,
                        xr(c(a)?.mmprojModels ?? [], (Z) => (x(), se(z, {
                          key: Z,
                          label: A(Z),
                          value: Z
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                w("label", KE, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  w("div", YE, [
                    ht(w("input", {
                      "onUpdate:modelValue": M[3] || (M[3] = (Z) => c(n).runtimePath = Z),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, qE), [
                      [mo, c(n).runtimePath]
                    ]),
                    D(c(On), {
                      size: "small",
                      plain: "",
                      onClick: te
                    }, {
                      default: oe(() => [
                        Wt(
                          V(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ])
              ])
            ]),
            w("div", ZE, [
              w("div", XE, [
                w("div", null, [
                  w(
                    "h4",
                    null,
                    V(c(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    V(c(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              w("div", QE, [
                w("label", JE, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  D(J, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": M[4] || (M[4] = (Z) => c(n).ctxSize = Z),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", eS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  D(J, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": M[5] || (M[5] = (Z) => c(n).gpuLayers = Z),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", tS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  D(J, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": M[6] || (M[6] = (Z) => c(n).threads = Z),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", nS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  D(J, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": M[7] || (M[7] = (Z) => c(n).batchSize = Z),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", rS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  D(J, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": M[8] || (M[8] = (Z) => c(n).ubatchSize = Z),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", oS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  D(J, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": M[9] || (M[9] = (Z) => c(n).mainGpu = Z),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            w("div", aS, [
              w("div", sS, [
                w("div", null, [
                  w(
                    "h4",
                    null,
                    V(c(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    V(c(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              w("div", lS, [
                w("label", null, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  D(be, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": M[10] || (M[10] = (Z) => c(n).flashAttn = Z)
                  }, null, 8, ["modelValue"])
                ]),
                w("label", null, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  D(be, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": M[11] || (M[11] = (Z) => c(n).kvOffload = Z)
                  }, null, 8, ["modelValue"])
                ]),
                w("label", null, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  D(be, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": M[12] || (M[12] = (Z) => c(n).mmap = Z)
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            w("div", iS, [
              w("div", cS, [
                w("div", null, [
                  w(
                    "h4",
                    null,
                    V(c(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    V(c(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              w("div", uS, [
                w("label", null, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  D(be, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": M[13] || (M[13] = (Z) => c(n).autoStartOnRequest = Z)
                  }, null, 8, ["modelValue"])
                ]),
                w("label", null, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  D(be, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": M[14] || (M[14] = (Z) => c(n).keepAlive = Z)
                  }, null, 8, ["modelValue"])
                ]),
                w("label", fS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  D(J, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": M[15] || (M[15] = (Z) => c(n).idleTimeoutMinutes = Z),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", dS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  D(J, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": M[16] || (M[16] = (Z) => c(n).requestTimeoutSecs = Z),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            w("div", pS, [
              w("div", mS, [
                w("div", null, [
                  w(
                    "h4",
                    null,
                    V(c(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    V(c(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              w("div", hS, [
                w("label", gS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  D(J, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": M[17] || (M[17] = (Z) => c(n).temperature = Z),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", vS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  D(J, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": M[18] || (M[18] = (Z) => c(n).maxTokens = Z),
                    min: 64,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", bS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  D(J, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": M[19] || (M[19] = (Z) => c(n).port = Z),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            w("div", yS, [
              D(c(On), {
                type: "primary",
                loading: c(i),
                onClick: H
              }, {
                default: oe(() => [
                  Wt(
                    V(c(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              c(o)?.commandLine ? (x(), K("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, V(c(o).commandLine), 9, _S)) : Q("v-if", !0)
            ])
          ])
        ])) : Q("v-if", !0)
      ]);
    };
  }
}), kS = /* @__PURE__ */ Ks(wS, [["__scopeId", "data-v-4e0ae2c1"]]), TS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kS
}, Symbol.toStringTag, { value: "Module" }));
export {
  AS as activate,
  AS as default
};
