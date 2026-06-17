var qf = Object.defineProperty;
var Zf = (e, t, n) => t in e ? qf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ne = (e, t, n) => Zf(e, typeof t != "symbol" ? t + "" : t, n);
import * as Va from "vue";
import { inject as xe, createVNode as F, defineAsyncComponent as Xf, ref as U, shallowRef as Qn, computed as R, watch as ge, onMounted as nt, onUnmounted as ga, defineComponent as ne, h as zc, Text as Bc, Fragment as Et, createElementBlock as K, openBlock as N, normalizeClass as W, createCommentVNode as Q, renderSlot as he, createElementVNode as w, getCurrentInstance as Rt, unref as c, watchEffect as Vc, readonly as Ls, getCurrentScope as Qf, onScopeDispose as Jf, nextTick as Je, isRef as po, warn as ed, provide as _n, mergeProps as Rr, toRef as xn, useAttrs as td, useSlots as nd, normalizeStyle as yt, createBlock as se, withCtx as oe, resolveDynamicComponent as Lt, withModifiers as Ke, toDisplayString as j, onBeforeUnmount as Tn, Transition as Ur, withDirectives as gt, vShow as Bn, reactive as ur, onActivated as rd, onUpdated as jc, cloneVNode as od, Comment as ad, Teleport as sd, onBeforeMount as ld, onDeactivated as id, createTextVNode as Wt, withKeys as Gt, createSlots as cd, toRaw as ud, toRefs as Is, resolveComponent as lr, resolveDirective as fd, toHandlerKey as dd, renderList as xr, vModelText as mo, shallowReactive as pd, isVNode as ho, render as ta } from "vue";
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
function Nt(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = hd(), i = xe(vd, md);
      return function() {
        var l = a.size, u = a.strokeWidth, f = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, v = a.fill, h = a.spin, g = gd(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: f,
          strokeLinejoin: p,
          theme: m,
          fill: v
        }, i), A = [i.prefix + "-icon"];
        return A.push(i.prefix + "-icon-" + e), t && i.rtl && A.push(i.prefix + "-icon-rtl"), h && A.push(i.prefix + "-icon-spin"), F("span", {
          class: A.join(" ")
        }, [n(g)]);
      };
    }
  };
  return r;
}
const bd = Nt("add", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M24 16V32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M16 24L32 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yd = Nt("copy", !0, function(e) {
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
}), Il = Nt("delete", !1, function(e) {
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
}), _d = Nt("dislike", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M24 31L21 26L28 20L19 15L20 9.19942C18.4999 8.43256 16.8004 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C31.1996 8 29.5001 8.43256 28 9.19942",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wd = Nt("down", !1, function(e) {
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
}), kd = Nt("edit", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M7 42H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Td = Nt("like", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ed = Nt("message", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M14 18L32 18",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M14 26H32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M14 34H24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Sd = Nt("more", !1, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), F("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), F("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), Rl = Nt("refresh", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ad = Nt("right", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M19 12L31 24L19 36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xl = Nt("robot", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("rect", {
    x: "9",
    y: "17",
    width: "30",
    height: "26",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M33 9L28 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M15 9L20 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("circle", {
    cx: "34",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), F("circle", {
    cx: "14",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), F("rect", {
    x: "16",
    y: "24",
    width: "16",
    height: "8",
    rx: "4",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), F("path", {
    d: "M9 24H4V34H9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M39 24H44V34H39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Cd = Nt("search", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Od = Nt("send", !0, function(e) {
  return F("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [F("path", {
    d: "M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), F("path", {
    d: "M43.0001 5L22.1001 25.9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), rs = Nt("setting-two", !1, function(e) {
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
const Nl = typeof window < "u", mr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Id = (e, t, n) => Rd({ l: e, k: t, s: n }), Rd = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), mt = (e) => typeof e == "number" && isFinite(e), xd = (e) => Rs(e) === "[object Date]", na = (e) => Rs(e) === "[object RegExp]", va = (e) => Se(e) && Object.keys(e).length === 0, _t = Object.assign, Nd = Object.create, Pe = (e = null) => Nd(e);
let Pl;
const Zo = () => Pl || (Pl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Pe());
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
const tt = Array.isArray, Ye = (e) => typeof e == "function", re = (e) => typeof e == "string", et = (e) => typeof e == "boolean", Ae = (e) => e !== null && typeof e == "object", Md = (e) => Ae(e) && Ye(e.then) && Ye(e.catch), Uc = Object.prototype.toString, Rs = (e) => Uc.call(e), Se = (e) => Rs(e) === "[object Object]", Dd = (e) => e == null ? "" : tt(e) || Se(e) && e.toString === Uc ? JSON.stringify(e, null, 2) : String(e);
function xs(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Fo = (e) => !Ae(e) || tt(e);
function Xo(e, t) {
  if (Fo(e) || Fo(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Ae(r[a]) && !Ae(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : Pe()), Fo(o[a]) || Fo(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
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
const Oe = {
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
const cn = " ", Vd = "\r", Tt = `
`, jd = "\u2028", Ud = "\u2029";
function Hd(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (L) => t[L] === Vd && t[L + 1] === Tt, i = (L) => t[L] === Tt, l = (L) => t[L] === Ud, u = (L) => t[L] === jd, f = (L) => s(L) || i(L) || l(L) || u(L), p = () => n, m = () => r, v = () => o, h = () => a, g = (L) => s(L) || l(L) || u(L) ? Tt : t[L], A = () => g(n), d = () => g(n + a);
  function S() {
    return a = 0, f(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function I() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function E() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function y(L = 0) {
    a = L;
  }
  function O() {
    const L = n + a;
    for (; L !== n; )
      S();
    a = 0;
  }
  return {
    index: p,
    line: m,
    column: v,
    peekOffset: h,
    charAt: g,
    currentChar: A,
    currentPeek: d,
    next: S,
    peek: I,
    reset: E,
    resetPeek: y,
    skipToPeek: O
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
  function p(k, C, T, ...$) {
    const V = u();
    if (C.column += T, C.offset += T, f) {
      const Y = n ? os(V.startLoc, C) : null, _ = ba(k, Y, {
        domain: Gd,
        args: $
      });
      f(_);
    }
  }
  function m(k, C, T) {
    k.endLoc = a(), k.currentType = C;
    const $ = { type: C };
    return n && ($.loc = os(k.startLoc, k.endLoc)), T != null && ($.value = T), $;
  }
  const v = (k) => m(
    k,
    13
    /* TokenTypes.EOF */
  );
  function h(k, C) {
    return k.currentChar() === C ? (k.next(), C) : (p(Oe.EXPECTED_TOKEN, a(), 0, C), "");
  }
  function g(k) {
    let C = "";
    for (; k.currentPeek() === cn || k.currentPeek() === Tt; )
      C += k.currentPeek(), k.peek();
    return C;
  }
  function A(k) {
    const C = g(k);
    return k.skipToPeek(), C;
  }
  function d(k) {
    if (k === An)
      return !1;
    const C = k.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C === 95;
  }
  function S(k) {
    if (k === An)
      return !1;
    const C = k.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function I(k, C) {
    const { currentType: T } = C;
    if (T !== 2)
      return !1;
    g(k);
    const $ = d(k.currentPeek());
    return k.resetPeek(), $;
  }
  function E(k, C) {
    const { currentType: T } = C;
    if (T !== 2)
      return !1;
    g(k);
    const $ = k.currentPeek() === "-" ? k.peek() : k.currentPeek(), V = S($);
    return k.resetPeek(), V;
  }
  function y(k, C) {
    const { currentType: T } = C;
    if (T !== 2)
      return !1;
    g(k);
    const $ = k.currentPeek() === Dl;
    return k.resetPeek(), $;
  }
  function O(k, C) {
    const { currentType: T } = C;
    if (T !== 7)
      return !1;
    g(k);
    const $ = k.currentPeek() === ".";
    return k.resetPeek(), $;
  }
  function L(k, C) {
    const { currentType: T } = C;
    if (T !== 8)
      return !1;
    g(k);
    const $ = d(k.currentPeek());
    return k.resetPeek(), $;
  }
  function H(k, C) {
    const { currentType: T } = C;
    if (!(T === 7 || T === 11))
      return !1;
    g(k);
    const $ = k.currentPeek() === ":";
    return k.resetPeek(), $;
  }
  function G(k, C) {
    const { currentType: T } = C;
    if (T !== 9)
      return !1;
    const $ = () => {
      const Y = k.currentPeek();
      return Y === "{" ? d(k.peek()) : Y === "@" || Y === "|" || Y === ":" || Y === "." || Y === cn || !Y ? !1 : Y === Tt ? (k.peek(), $()) : ue(k, !1);
    }, V = $();
    return k.resetPeek(), V;
  }
  function ee(k) {
    g(k);
    const C = k.currentPeek() === "|";
    return k.resetPeek(), C;
  }
  function ue(k, C = !0) {
    const T = (V = !1, Y = "") => {
      const _ = k.currentPeek();
      return _ === "{" || _ === "@" || !_ ? V : _ === "|" ? !(Y === cn || Y === Tt) : _ === cn ? (k.peek(), T(!0, cn)) : _ === Tt ? (k.peek(), T(!0, Tt)) : !0;
    }, $ = T();
    return C && k.resetPeek(), $;
  }
  function te(k, C) {
    const T = k.currentChar();
    return T === An ? An : C(T) ? (k.next(), T) : null;
  }
  function fe(k) {
    const C = k.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C >= 48 && C <= 57 || // 0-9
    C === 95 || // _
    C === 36;
  }
  function de(k) {
    return te(k, fe);
  }
  function P(k) {
    const C = k.charCodeAt(0);
    return C >= 97 && C <= 122 || // a-z
    C >= 65 && C <= 90 || // A-Z
    C >= 48 && C <= 57 || // 0-9
    C === 95 || // _
    C === 36 || // $
    C === 45;
  }
  function D(k) {
    return te(k, P);
  }
  function B(k) {
    const C = k.charCodeAt(0);
    return C >= 48 && C <= 57;
  }
  function le(k) {
    return te(k, B);
  }
  function J(k) {
    const C = k.charCodeAt(0);
    return C >= 48 && C <= 57 || // 0-9
    C >= 65 && C <= 70 || // A-F
    C >= 97 && C <= 102;
  }
  function ve(k) {
    return te(k, J);
  }
  function Z(k) {
    let C = "", T = "";
    for (; C = le(k); )
      T += C;
    return T;
  }
  function Ve(k) {
    let C = "";
    for (; ; ) {
      const T = k.currentChar();
      if (T === "{" || T === "}" || T === "@" || T === "|" || !T)
        break;
      if (T === cn || T === Tt)
        if (ue(k))
          C += T, k.next();
        else {
          if (ee(k))
            break;
          C += T, k.next();
        }
      else
        C += T, k.next();
    }
    return C;
  }
  function Te(k) {
    A(k);
    let C = "", T = "";
    for (; C = D(k); )
      T += C;
    const $ = k.currentChar();
    if ($ && $ !== "}" && $ !== An && $ !== cn && $ !== Tt && $ !== "　") {
      const V = it(k);
      return p(Oe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, T + V), T + V;
    }
    return k.currentChar() === An && p(Oe.UNTERMINATED_CLOSING_BRACE, a(), 0), T;
  }
  function me(k) {
    A(k);
    let C = "";
    return k.currentChar() === "-" ? (k.next(), C += `-${Z(k)}`) : C += Z(k), k.currentChar() === An && p(Oe.UNTERMINATED_CLOSING_BRACE, a(), 0), C;
  }
  function je(k) {
    return k !== Dl && k !== Tt;
  }
  function _e(k) {
    A(k), h(k, "'");
    let C = "", T = "";
    for (; C = te(k, je); )
      C === "\\" ? T += We(k) : T += C;
    const $ = k.currentChar();
    return $ === Tt || $ === An ? (p(Oe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), $ === Tt && (k.next(), h(k, "'")), T) : (h(k, "'"), T);
  }
  function We(k) {
    const C = k.currentChar();
    switch (C) {
      case "\\":
      case "'":
        return k.next(), `\\${C}`;
      case "u":
        return ie(k, C, 4);
      case "U":
        return ie(k, C, 6);
      default:
        return p(Oe.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, C), "";
    }
  }
  function ie(k, C, T) {
    h(k, C);
    let $ = "";
    for (let V = 0; V < T; V++) {
      const Y = ve(k);
      if (!Y) {
        p(Oe.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${C}${$}${k.currentChar()}`);
        break;
      }
      $ += Y;
    }
    return `\\${C}${$}`;
  }
  function Ze(k) {
    return k !== "{" && k !== "}" && k !== cn && k !== Tt;
  }
  function it(k) {
    A(k);
    let C = "", T = "";
    for (; C = te(k, Ze); )
      T += C;
    return T;
  }
  function Ue(k) {
    let C = "", T = "";
    for (; C = de(k); )
      T += C;
    return T;
  }
  function vt(k) {
    const C = (T) => {
      const $ = k.currentChar();
      return $ === "{" || $ === "@" || $ === "|" || $ === "(" || $ === ")" || !$ || $ === cn ? T : (T += $, k.next(), C(T));
    };
    return C("");
  }
  function rt(k) {
    A(k);
    const C = h(
      k,
      "|"
      /* TokenChars.Pipe */
    );
    return A(k), C;
  }
  function ct(k, C) {
    let T = null;
    switch (k.currentChar()) {
      case "{":
        return C.braceNest >= 1 && p(Oe.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), k.next(), T = m(
          C,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), A(k), C.braceNest++, T;
      case "}":
        return C.braceNest > 0 && C.currentType === 2 && p(Oe.EMPTY_PLACEHOLDER, a(), 0), k.next(), T = m(
          C,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), C.braceNest--, C.braceNest > 0 && A(k), C.inLinked && C.braceNest === 0 && (C.inLinked = !1), T;
      case "@":
        return C.braceNest > 0 && p(Oe.UNTERMINATED_CLOSING_BRACE, a(), 0), T = ut(k, C) || v(C), C.braceNest = 0, T;
      default: {
        let V = !0, Y = !0, _ = !0;
        if (ee(k))
          return C.braceNest > 0 && p(Oe.UNTERMINATED_CLOSING_BRACE, a(), 0), T = m(C, 1, rt(k)), C.braceNest = 0, C.inLinked = !1, T;
        if (C.braceNest > 0 && (C.currentType === 4 || C.currentType === 5 || C.currentType === 6))
          return p(Oe.UNTERMINATED_CLOSING_BRACE, a(), 0), C.braceNest = 0, Ge(k, C);
        if (V = I(k, C))
          return T = m(C, 4, Te(k)), A(k), T;
        if (Y = E(k, C))
          return T = m(C, 5, me(k)), A(k), T;
        if (_ = y(k, C))
          return T = m(C, 6, _e(k)), A(k), T;
        if (!V && !Y && !_)
          return T = m(C, 12, it(k)), p(Oe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, T.value), A(k), T;
        break;
      }
    }
    return T;
  }
  function ut(k, C) {
    const { currentType: T } = C;
    let $ = null;
    const V = k.currentChar();
    switch ((T === 7 || T === 8 || T === 11 || T === 9) && (V === Tt || V === cn) && p(Oe.INVALID_LINKED_FORMAT, a(), 0), V) {
      case "@":
        return k.next(), $ = m(
          C,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), C.inLinked = !0, $;
      case ".":
        return A(k), k.next(), m(
          C,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return A(k), k.next(), m(
          C,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ee(k) ? ($ = m(C, 1, rt(k)), C.braceNest = 0, C.inLinked = !1, $) : O(k, C) || H(k, C) ? (A(k), ut(k, C)) : L(k, C) ? (A(k), m(C, 11, Ue(k))) : G(k, C) ? (A(k), V === "{" ? ct(k, C) || $ : m(C, 10, vt(k))) : (T === 7 && p(Oe.INVALID_LINKED_FORMAT, a(), 0), C.braceNest = 0, C.inLinked = !1, Ge(k, C));
    }
  }
  function Ge(k, C) {
    let T = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (C.braceNest > 0)
      return ct(k, C) || v(C);
    if (C.inLinked)
      return ut(k, C) || v(C);
    switch (k.currentChar()) {
      case "{":
        return ct(k, C) || v(C);
      case "}":
        return p(Oe.UNBALANCED_CLOSING_BRACE, a(), 0), k.next(), m(
          C,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return ut(k, C) || v(C);
      default: {
        if (ee(k))
          return T = m(C, 1, rt(k)), C.braceNest = 0, C.inLinked = !1, T;
        if (ue(k))
          return m(C, 0, Ve(k));
        break;
      }
    }
    return T;
  }
  function ft() {
    const { currentType: k, offset: C, startLoc: T, endLoc: $ } = l;
    return l.lastType = k, l.lastOffset = C, l.lastStartLoc = T, l.lastEndLoc = $, l.offset = o(), l.startLoc = a(), r.currentChar() === An ? m(
      l,
      13
      /* TokenTypes.EOF */
    ) : Ge(r, l);
  }
  return {
    nextToken: ft,
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
  function r(d, S, I, E, ...y) {
    const O = d.currentPosition();
    if (O.offset += E, O.column += E, n) {
      const L = t ? os(I, O) : null, H = ba(S, L, {
        domain: Yd,
        args: y
      });
      n(H);
    }
  }
  function o(d, S, I) {
    const E = { type: d };
    return t && (E.start = S, E.end = S, E.loc = { start: I, end: I }), E;
  }
  function a(d, S, I, E) {
    t && (d.end = S, d.loc && (d.loc.end = I));
  }
  function s(d, S) {
    const I = d.context(), E = o(3, I.offset, I.startLoc);
    return E.value = S, a(E, d.currentOffset(), d.currentPosition()), E;
  }
  function i(d, S) {
    const I = d.context(), { lastOffset: E, lastStartLoc: y } = I, O = o(5, E, y);
    return O.index = parseInt(S, 10), d.nextToken(), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function l(d, S) {
    const I = d.context(), { lastOffset: E, lastStartLoc: y } = I, O = o(4, E, y);
    return O.key = S, d.nextToken(), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function u(d, S) {
    const I = d.context(), { lastOffset: E, lastStartLoc: y } = I, O = o(9, E, y);
    return O.value = S.replace(qd, Zd), d.nextToken(), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function f(d) {
    const S = d.nextToken(), I = d.context(), { lastOffset: E, lastStartLoc: y } = I, O = o(8, E, y);
    return S.type !== 11 ? (r(d, Oe.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), O.value = "", a(O, E, y), {
      nextConsumeToken: S,
      node: O
    }) : (S.value == null && r(d, Oe.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, un(S)), O.value = S.value || "", a(O, d.currentOffset(), d.currentPosition()), {
      node: O
    });
  }
  function p(d, S) {
    const I = d.context(), E = o(7, I.offset, I.startLoc);
    return E.value = S, a(E, d.currentOffset(), d.currentPosition()), E;
  }
  function m(d) {
    const S = d.context(), I = o(6, S.offset, S.startLoc);
    let E = d.nextToken();
    if (E.type === 8) {
      const y = f(d);
      I.modifier = y.node, E = y.nextConsumeToken || d.nextToken();
    }
    switch (E.type !== 9 && r(d, Oe.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, un(E)), E = d.nextToken(), E.type === 2 && (E = d.nextToken()), E.type) {
      case 10:
        E.value == null && r(d, Oe.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, un(E)), I.key = p(d, E.value || "");
        break;
      case 4:
        E.value == null && r(d, Oe.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, un(E)), I.key = l(d, E.value || "");
        break;
      case 5:
        E.value == null && r(d, Oe.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, un(E)), I.key = i(d, E.value || "");
        break;
      case 6:
        E.value == null && r(d, Oe.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, un(E)), I.key = u(d, E.value || "");
        break;
      default: {
        r(d, Oe.UNEXPECTED_EMPTY_LINKED_KEY, S.lastStartLoc, 0);
        const y = d.context(), O = o(7, y.offset, y.startLoc);
        return O.value = "", a(O, y.offset, y.startLoc), I.key = O, a(I, y.offset, y.startLoc), {
          nextConsumeToken: E,
          node: I
        };
      }
    }
    return a(I, d.currentOffset(), d.currentPosition()), {
      node: I
    };
  }
  function v(d) {
    const S = d.context(), I = S.currentType === 1 ? d.currentOffset() : S.offset, E = S.currentType === 1 ? S.endLoc : S.startLoc, y = o(2, I, E);
    y.items = [];
    let O = null;
    do {
      const G = O || d.nextToken();
      switch (O = null, G.type) {
        case 0:
          G.value == null && r(d, Oe.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, un(G)), y.items.push(s(d, G.value || ""));
          break;
        case 5:
          G.value == null && r(d, Oe.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, un(G)), y.items.push(i(d, G.value || ""));
          break;
        case 4:
          G.value == null && r(d, Oe.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, un(G)), y.items.push(l(d, G.value || ""));
          break;
        case 6:
          G.value == null && r(d, Oe.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, un(G)), y.items.push(u(d, G.value || ""));
          break;
        case 7: {
          const ee = m(d);
          y.items.push(ee.node), O = ee.nextConsumeToken || null;
          break;
        }
      }
    } while (S.currentType !== 13 && S.currentType !== 1);
    const L = S.currentType === 1 ? S.lastOffset : d.currentOffset(), H = S.currentType === 1 ? S.lastEndLoc : d.currentPosition();
    return a(y, L, H), y;
  }
  function h(d, S, I, E) {
    const y = d.context();
    let O = E.items.length === 0;
    const L = o(1, S, I);
    L.cases = [], L.cases.push(E);
    do {
      const H = v(d);
      O || (O = H.items.length === 0), L.cases.push(H);
    } while (y.currentType !== 13);
    return O && r(d, Oe.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), a(L, d.currentOffset(), d.currentPosition()), L;
  }
  function g(d) {
    const S = d.context(), { offset: I, startLoc: E } = S, y = v(d);
    return S.currentType === 13 ? y : h(d, I, E, y);
  }
  function A(d) {
    const S = Kd(d, _t({}, e)), I = S.context(), E = o(0, I.offset, I.startLoc);
    return t && E.loc && (E.loc.source = d), E.body = g(S), e.onCacheKey && (E.cacheKey = e.onCacheKey(d)), I.currentType !== 13 && r(S, Oe.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, d[I.offset] || ""), a(E, S.currentOffset(), S.currentPosition()), E;
  }
  return { parse: A };
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
  function l(g, A) {
    s.code += g;
  }
  function u(g, A = !0) {
    const d = A ? r : "";
    l(o ? d + "  ".repeat(g) : d);
  }
  function f(g = !0) {
    const A = ++s.indentLevel;
    g && u(A);
  }
  function p(g = !0) {
    const A = --s.indentLevel;
    g && u(A);
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
  const n = _t({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = Xd(n).parse(e);
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
  return Ae(e) && Ps(e) === 0 && (tn(e, "b") || tn(e, "body"));
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
      if (tn(r, "i") && mt(r.i))
        return e.interpolate(e.list(r.i));
      if (tn(r, "index") && mt(r.index))
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
let Bo = Pe();
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
  if (Ye(e)) {
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
    ...tt(t) ? t : Ae(t) ? Object.keys(t) : re(t) ? [t] : [n]
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
    const i = tt(t) || !Se(t) ? t : t.default ? t.default : null;
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
    e.push(o), (tt(n) || Se(n)) && n[o] && (r = n[o]);
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
  function v() {
    const h = e[n + 1];
    if (r === 5 && h === "'" || r === 6 && h === '"')
      return n++, i = "\\" + h, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && v())) {
      if (l = Ap(a), p = nr[r], u = p[l] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = m[u[1]], f && (i = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Ul = /* @__PURE__ */ new Map();
function Lp(e, t) {
  return Ae(e) ? e[t] : null;
}
function Ip(e, t) {
  if (!Ae(e))
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
    if (i === void 0 || Ye(o))
      return null;
    o = i, a++;
  }
  return o;
}
const Rp = "11.2.2", ya = -1, ra = "en-US", Hl = "", Wl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function xp() {
  return {
    upper: (e, t) => t === "text" && re(e) ? e.toUpperCase() : t === "vnode" && Ae(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && re(e) ? e.toLowerCase() : t === "vnode" && Ae(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && re(e) ? Wl(e) : t === "vnode" && Ae(e) && "__v_isVNode" in e ? Wl(e.children) : e
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
  const t = Ye(e.onWarn) ? e.onWarn : Ld, n = re(e.version) ? e.version : Rp, r = re(e.locale) || Ye(e.locale) ? e.locale : ra, o = Ye(r) ? ra : r, a = tt(e.fallbackLocale) || Se(e.fallbackLocale) || re(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Se(e.messages) ? e.messages : Ha(o), i = Se(e.datetimeFormats) ? e.datetimeFormats : Ha(o), l = Se(e.numberFormats) ? e.numberFormats : Ha(o), u = _t(Pe(), e.modifiers, xp()), f = e.pluralRules || Pe(), p = Ye(e.missing) ? e.missing : null, m = et(e.missingWarn) || na(e.missingWarn) ? e.missingWarn : !0, v = et(e.fallbackWarn) || na(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, g = !!e.unresolving, A = Ye(e.postTranslation) ? e.postTranslation : null, d = Se(e.processor) ? e.processor : null, S = et(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter, E = Ye(e.messageCompiler) ? e.messageCompiler : eu, y = Ye(e.messageResolver) ? e.messageResolver : tu || Lp, O = Ye(e.localeFallbacker) ? e.localeFallbacker : nu || _p, L = Ae(e.fallbackContext) ? e.fallbackContext : void 0, H = e, G = Ae(H.__datetimeFormatters) ? H.__datetimeFormatters : /* @__PURE__ */ new Map(), ee = Ae(H.__numberFormatters) ? H.__numberFormatters : /* @__PURE__ */ new Map(), ue = Ae(H.__meta) ? H.__meta : {};
  Kl++;
  const te = {
    version: n,
    cid: Kl,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: u,
    pluralRules: f,
    missing: p,
    missingWarn: m,
    fallbackWarn: v,
    fallbackFormat: h,
    unresolving: g,
    postTranslation: A,
    processor: d,
    warnHtmlMessage: S,
    escapeParameter: I,
    messageCompiler: E,
    messageResolver: y,
    localeFallbacker: O,
    fallbackContext: L,
    onWarn: t,
    __meta: ue
  };
  return te.datetimeFormats = i, te.numberFormats = l, te.__datetimeFormatters = G, te.__numberFormatters = ee, te;
}
const Ha = (e) => ({ [e]: Pe() });
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
  const v = !!f.part, h = $s(e, f), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!re(l) || l === "")
    return new Intl.DateTimeFormat(h, p).format(u);
  let A = {}, d, S = null;
  const I = "datetime format";
  for (let O = 0; O < g.length && (d = g[O], A = n[d] || {}, S = A[l], !Se(S)); O++)
    Ms(e, l, d, m, I);
  if (!Se(S) || !re(d))
    return r ? ya : l;
  let E = `${d}__${l}`;
  va(p) || (E = `${E}__${JSON.stringify(p)}`);
  let y = i.get(E);
  return y || (y = new Intl.DateTimeFormat(d, _t({}, S, p)), i.set(E, y)), v ? y.formatToParts(u) : y.format(u);
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
  const [t, n, r, o] = e, a = Pe();
  let s = Pe(), i;
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
  } else if (mt(t))
    i = t;
  else
    throw Pn(Nn.INVALID_ARGUMENT);
  return re(n) ? a.key = n : Se(n) && Object.keys(n).forEach((l) => {
    ou.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), re(r) ? a.locale = r : Se(r) && (s = r), Se(o) && (s = o), [a.key || "", i, a, s];
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
  const v = !!f.part, h = $s(e, f), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!re(l) || l === "")
    return new Intl.NumberFormat(h, p).format(u);
  let A = {}, d, S = null;
  const I = "number format";
  for (let O = 0; O < g.length && (d = g[O], A = n[d] || {}, S = A[l], !Se(S)); O++)
    Ms(e, l, d, m, I);
  if (!Se(S) || !re(d))
    return r ? ya : l;
  let E = `${d}__${l}`;
  va(p) || (E = `${E}__${JSON.stringify(p)}`);
  let y = i.get(E);
  return y || (y = new Intl.NumberFormat(d, _t({}, S, p)), i.set(E, y)), v ? y.formatToParts(u) : y.format(u);
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
  const [t, n, r, o] = e, a = Pe();
  let s = Pe();
  if (!mt(t))
    throw Pn(Nn.INVALID_ARGUMENT);
  const i = t;
  return re(n) ? a.key = n : Se(n) && Object.keys(n).forEach((l) => {
    au.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), re(r) ? a.locale = r : Se(r) && (s = r), Se(o) && (s = o), [a.key || "", i, a, s];
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
  const t = mt(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (mt(e.named.count) || mt(e.named.n)) ? mt(e.named.count) ? e.named.count : mt(e.named.n) ? e.named.n : t : t;
}
function Gp(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Kp(e = {}) {
  const t = e.locale, n = Wp(e), r = Ae(e.pluralRules) && re(t) && Ye(e.pluralRules[t]) ? e.pluralRules[t] : Ql, o = Ae(e.pluralRules) && re(t) && Ye(e.pluralRules[t]) ? Ql : void 0, a = (d) => d[r(n, d.length, o)], s = e.list || [], i = (d) => s[d], l = e.named || Pe();
  mt(e.pluralIndex) && Gp(n, l);
  const u = (d) => l[d];
  function f(d, S) {
    const I = Ye(e.messages) ? e.messages(d, !!S) : Ae(e.messages) ? e.messages[d] : !1;
    return I || (e.parent ? e.parent.message(d) : Vp);
  }
  const p = (d) => e.modifiers ? e.modifiers[d] : Bp, m = Se(e.processor) && Ye(e.processor.normalize) ? e.processor.normalize : Up, v = Se(e.processor) && Ye(e.processor.interpolate) ? e.processor.interpolate : Hp, h = Se(e.processor) && re(e.processor.type) ? e.processor.type : jp, A = {
    list: i,
    named: u,
    plural: a,
    linked: (d, ...S) => {
      const [I, E] = S;
      let y = "text", O = "";
      S.length === 1 ? Ae(I) ? (O = I.modifier || O, y = I.type || y) : re(I) && (O = I || O) : S.length === 2 && (re(I) && (O = I || O), re(E) && (y = E || y));
      const L = f(d, !0)(A), H = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        y === "vnode" && tt(L) && O ? L[0] : L
      );
      return O ? p(O)(H, y) : H;
    },
    message: f,
    type: h,
    interpolate: v,
    normalize: m,
    values: _t(Pe(), s, l)
  };
  return A;
}
const Jl = () => "", Mn = (e) => Ye(e);
function ei(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = is(...t), f = et(u.missingWarn) ? u.missingWarn : e.missingWarn, p = et(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = et(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, v = !!u.resolvedMessage, h = re(u.default) || et(u.default) ? et(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, g = n || h != null && (re(h) || Ye(h)), A = $s(e, u);
  m && Yp(u);
  let [d, S, I] = v ? [
    l,
    A,
    i[A] || Pe()
  ] : su(e, l, A, s, p, f), E = d, y = l;
  if (!v && !(re(E) || vn(E) || Mn(E)) && g && (E = h, y = E), !v && (!(re(E) || vn(E) || Mn(E)) || !re(S)))
    return o ? ya : l;
  let O = !1;
  const L = () => {
    O = !0;
  }, H = Mn(E) ? E : lu(e, l, S, E, y, L);
  if (O)
    return E;
  const G = Xp(e, S, I, u), ee = Kp(G), ue = qp(e, H, ee);
  let te = r ? r(ue, l) : ue;
  return m && re(te) && (te = Pd(te)), te;
}
function Yp(e) {
  tt(e.list) ? e.list = e.list.map((t) => re(t) ? $l(t) : t) : Ae(e.named) && Object.keys(e.named).forEach((t) => {
    re(e.named[t]) && (e.named[t] = $l(e.named[t]));
  });
}
function su(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, f = u(e, r, n);
  let p = Pe(), m, v = null;
  const h = "translate";
  for (let g = 0; g < f.length && (m = f[g], p = s[m] || Pe(), (v = l(p, t)) === null && (v = p[t]), !(re(v) || vn(v) || Mn(v))); g++)
    if (!zp(m, f)) {
      const A = Ms(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        a,
        h
      );
      A !== t && (v = A);
    }
  return [v, m, p];
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
  const [t, n, r] = e, o = Pe();
  if (!re(t) && !mt(t) && !Mn(t) && !vn(t))
    throw Pn(Nn.INVALID_ARGUMENT);
  const a = mt(t) ? String(t) : (Mn(t), t);
  return mt(n) ? o.plural = n : re(n) ? o.default = n : Se(n) && !va(n) ? o.named = n : tt(n) && (o.list = n), mt(r) ? o.plural = r : re(r) ? o.default = r : Se(r) && _t(o, r), [a, o];
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
    messages: (v, h) => {
      let g = s(n, v);
      if (g == null && (f || h)) {
        const [, , A] = su(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          v,
          t,
          i,
          l,
          u
        );
        g = s(A, v);
      }
      if (re(g) || vn(g)) {
        let A = !1;
        const S = lu(e, v, t, g, v, () => {
          A = !0;
        });
        return A ? Jl : S;
      } else return Mn(g) ? g : Jl;
    }
  };
  return e.processor && (m.processor = e.processor), r.list && (m.list = r.list), r.named && (m.named = r.named), mt(r.plural) && (m.pluralIndex = r.plural), m;
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
  if (!Ae(e) || vn(e))
    return e;
  for (const t in e)
    if (tn(e, t))
      if (!t.includes("."))
        Ae(e[t]) && bo(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = Pe()), !Ae(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (vn(o) ? Qc.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !vn(o)) {
          const s = o[n[r]];
          Ae(s) && bo(s);
        }
      }
  return e;
}
function cu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Se(n) ? n : tt(r) ? Pe() : { [e]: Pe() };
  if (tt(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || Pe(), Xo(u, s[l])) : Xo(u, s);
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
  let r = Ae(t.messages) ? t.messages : Pe();
  "__i18nGlobal" in n && (r = cu(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (Ae(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Ae(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function ti(e) {
  return F(Bc, null, e, 0);
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
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = Nl ? U : Qn;
  let s = et(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : re(e.locale) ? e.locale : ra
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : re(e.fallbackLocale) || tt(e.fallbackLocale) || Se(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(cu(i.value, e)), f = a(Se(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = a(Se(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : et(e.missingWarn) || na(e.missingWarn) ? e.missingWarn : !0, v = t ? t.fallbackWarn : et(e.fallbackWarn) || na(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : et(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, A = Ye(e.missing) ? e.missing : null, d = Ye(e.missing) ? oi(e.missing) : null, S = Ye(e.postTranslation) ? e.postTranslation : null, I = t ? t.warnHtmlMessage : et(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, E = !!e.escapeParameter;
  const y = t ? t.modifiers : Se(e.modifiers) ? e.modifiers : {};
  let O = e.pluralRules || t && t.pluralRules, L;
  L = (() => {
    r && Gl(null);
    const _ = {
      version: Qp,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: y,
      pluralRules: O,
      missing: d === null ? void 0 : d,
      missingWarn: m,
      fallbackWarn: v,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: S === null ? void 0 : S,
      warnHtmlMessage: I,
      escapeParameter: E,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    _.datetimeFormats = f.value, _.numberFormats = p.value, _.__datetimeFormatters = Se(L) ? L.__datetimeFormatters : void 0, _.__numberFormatters = Se(L) ? L.__numberFormatters : void 0;
    const M = Dp(_);
    return r && Gl(M), M;
  })(), Xr(L, i.value, l.value);
  function G() {
    return [
      i.value,
      l.value,
      u.value,
      f.value,
      p.value
    ];
  }
  const ee = R({
    get: () => i.value,
    set: (_) => {
      L.locale = _, i.value = _;
    }
  }), ue = R({
    get: () => l.value,
    set: (_) => {
      L.fallbackLocale = _, l.value = _, Xr(L, i.value, _);
    }
  }), te = R(() => u.value), fe = /* @__PURE__ */ R(() => f.value), de = /* @__PURE__ */ R(() => p.value);
  function P() {
    return Ye(S) ? S : null;
  }
  function D(_) {
    S = _, L.postTranslation = _;
  }
  function B() {
    return A;
  }
  function le(_) {
    _ !== null && (d = oi(_)), A = _, L.missing = d;
  }
  const J = (_, M, ce, be, Ie, $e) => {
    G();
    let Me;
    try {
      r || (L.fallbackContext = t ? Mp() : void 0), Me = _(L);
    } finally {
      r || (L.fallbackContext = void 0);
    }
    if (ce !== "translate exists" && // for not `te` (e.g `t`)
    mt(Me) && Me === ya || ce === "translate exists" && !Me) {
      const [or, Wr] = M();
      return t && h ? be(t) : Ie(or);
    } else {
      if ($e(Me))
        return Me;
      throw vo(Pr.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ve(..._) {
    return J((M) => Reflect.apply(ei, null, [M, ..._]), () => is(..._), "translate", (M) => Reflect.apply(M.t, M, [..._]), (M) => M, (M) => re(M));
  }
  function Z(..._) {
    const [M, ce, be] = _;
    if (be && !Ae(be))
      throw vo(Pr.INVALID_ARGUMENT);
    return ve(M, ce, _t({ resolvedMessage: !0 }, be || {}));
  }
  function Ve(..._) {
    return J((M) => Reflect.apply(Yl, null, [M, ..._]), () => ss(..._), "datetime format", (M) => Reflect.apply(M.d, M, [..._]), () => Hl, (M) => re(M) || tt(M));
  }
  function Te(..._) {
    return J((M) => Reflect.apply(Zl, null, [M, ..._]), () => ls(..._), "number format", (M) => Reflect.apply(M.n, M, [..._]), () => Hl, (M) => re(M) || tt(M));
  }
  function me(_) {
    return _.map((M) => re(M) || mt(M) || et(M) ? ti(String(M)) : M);
  }
  const _e = {
    normalize: me,
    interpolate: (_) => _,
    type: "vnode"
  };
  function We(..._) {
    return J((M) => {
      let ce;
      const be = M;
      try {
        be.processor = _e, ce = Reflect.apply(ei, null, [be, ..._]);
      } finally {
        be.processor = null;
      }
      return ce;
    }, () => is(..._), "translate", (M) => M[cs](..._), (M) => [ti(M)], (M) => tt(M));
  }
  function ie(..._) {
    return J((M) => Reflect.apply(Zl, null, [M, ..._]), () => ls(..._), "number format", (M) => M[fs](..._), ni, (M) => re(M) || tt(M));
  }
  function Ze(..._) {
    return J((M) => Reflect.apply(Yl, null, [M, ..._]), () => ss(..._), "datetime format", (M) => M[us](..._), ni, (M) => re(M) || tt(M));
  }
  function it(_) {
    O = _, L.pluralRules = O;
  }
  function Ue(_, M) {
    return J(() => {
      if (!_)
        return !1;
      const ce = re(M) ? M : i.value, be = ct(ce), Ie = L.messageResolver(be, _);
      return vn(Ie) || Mn(Ie) || re(Ie);
    }, () => [_], "translate exists", (ce) => Reflect.apply(ce.te, ce, [_, M]), rm, (ce) => et(ce));
  }
  function vt(_) {
    let M = null;
    const ce = Jc(L, l.value, i.value);
    for (let be = 0; be < ce.length; be++) {
      const Ie = u.value[ce[be]] || {}, $e = L.messageResolver(Ie, _);
      if ($e != null) {
        M = $e;
        break;
      }
    }
    return M;
  }
  function rt(_) {
    const M = vt(_);
    return M ?? (t ? t.tm(_) || {} : {});
  }
  function ct(_) {
    return u.value[_] || {};
  }
  function ut(_, M) {
    if (o) {
      const ce = { [_]: M };
      for (const be in ce)
        tn(ce, be) && bo(ce[be]);
      M = ce[_];
    }
    u.value[_] = M, L.messages = u.value;
  }
  function Ge(_, M) {
    u.value[_] = u.value[_] || {};
    const ce = { [_]: M };
    if (o)
      for (const be in ce)
        tn(ce, be) && bo(ce[be]);
    M = ce[_], Xo(M, u.value[_]), L.messages = u.value;
  }
  function ft(_) {
    return f.value[_] || {};
  }
  function k(_, M) {
    f.value[_] = M, L.datetimeFormats = f.value, ql(L, _, M);
  }
  function C(_, M) {
    f.value[_] = _t(f.value[_] || {}, M), L.datetimeFormats = f.value, ql(L, _, M);
  }
  function T(_) {
    return p.value[_] || {};
  }
  function $(_, M) {
    p.value[_] = M, L.numberFormats = p.value, Xl(L, _, M);
  }
  function V(_, M) {
    p.value[_] = _t(p.value[_] || {}, M), L.numberFormats = p.value, Xl(L, _, M);
  }
  ri++, t && Nl && (ge(t.locale, (_) => {
    s && (i.value = _, L.locale = _, Xr(L, i.value, l.value));
  }), ge(t.fallbackLocale, (_) => {
    s && (l.value = _, L.fallbackLocale = _, Xr(L, i.value, l.value));
  }));
  const Y = {
    id: ri,
    locale: ee,
    fallbackLocale: ue,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(_) {
      s = _, _ && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Xr(L, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: te,
    get modifiers() {
      return y;
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
    set missingWarn(_) {
      m = _, L.missingWarn = m;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(_) {
      v = _, L.fallbackWarn = v;
    },
    get fallbackRoot() {
      return h;
    },
    set fallbackRoot(_) {
      h = _;
    },
    get fallbackFormat() {
      return g;
    },
    set fallbackFormat(_) {
      g = _, L.fallbackFormat = g;
    },
    get warnHtmlMessage() {
      return I;
    },
    set warnHtmlMessage(_) {
      I = _, L.warnHtmlMessage = _;
    },
    get escapeParameter() {
      return E;
    },
    set escapeParameter(_) {
      E = _, L.escapeParameter = _;
    },
    t: ve,
    getLocaleMessage: ct,
    setLocaleMessage: ut,
    mergeLocaleMessage: Ge,
    getPostTranslationHandler: P,
    setPostTranslationHandler: D,
    getMissingHandler: B,
    setMissingHandler: le,
    [em]: it
  };
  return Y.datetimeFormats = fe, Y.numberFormats = de, Y.rt = Z, Y.te = Ue, Y.tm = rt, Y.d = Ve, Y.n = Te, Y.getDateTimeFormat = ft, Y.setDateTimeFormat = k, Y.mergeDateTimeFormat = C, Y.getNumberFormat = T, Y.setNumberFormat = $, Y.mergeNumberFormat = V, Y[iu] = n, Y[cs] = We, Y[us] = Ze, Y[fs] = ie, Y;
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
    ...o.type === Et ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, Pe());
}
function fu() {
  return Et;
}
_t({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => mt(e) || !isNaN(e)
  }
}, Ds);
function sm(e) {
  return tt(e) && !re(e[0]);
}
function du(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = Pe();
    e.locale && (s.locale = e.locale), re(e.format) ? s.key = e.format : Ae(e.format) && (re(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((m, v) => n.includes(v) ? _t(Pe(), m, { [v]: e.format[v] }) : m, Pe()));
    const l = r(e.value, s, i);
    let u = [s.key];
    tt(l) ? u = l.map((m, v) => {
      const h = o[m.type], g = h ? h({ [m.type]: m.value, index: v, parts: l }) : [m.value];
      return sm(g) && (g[0].key = `${m.type}-${v}`), g;
    }) : re(l) && (u = [l]);
    const f = _t(Pe(), a), p = re(e.tag) || Ae(e.tag) ? e.tag : fu();
    return zc(p, f, u);
  };
}
_t({
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
    const l = _t({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = om(l), s.__composerExtend && (i[ds] = s.__composerExtend(i)), pm(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function im(e) {
  const t = xe(e.isCE ? lm : e.appContext.app.__VUE_I18N_SYMBOL__);
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
_t({
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
function Ee(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(It.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var mm = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), It = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, hm = /^(?:[ \t]*(?:\n|$))+/, gm = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, vm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, So = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, bm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, zs = /(?:[*+-]|\d{1,9}[.)])/, mu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, hu = Ee(mu).replace(/bull/g, zs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), ym = Ee(mu).replace(/bull/g, zs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Bs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, _m = /^[^\n]+/, Vs = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, wm = Ee(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Vs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), km = Ee(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, zs).getRegex(), _a = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", js = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Tm = Ee("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", js).replace("tag", _a).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), gu = Ee(Bs).replace("hr", So).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _a).getRegex(), Em = Ee(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", gu).getRegex(), Us = { blockquote: Em, code: gm, def: wm, fences: vm, heading: bm, hr: So, html: Tm, lheading: hu, list: km, newline: hm, paragraph: gu, table: lo, text: _m }, ai = Ee("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", So).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _a).getRegex(), Sm = { ...Us, lheading: ym, table: ai, paragraph: Ee(Bs).replace("hr", So).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ai).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _a).getRegex() }, Am = { ...Us, html: Ee(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", js).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: lo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Ee(Bs).replace("hr", So).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", hu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Cm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Om = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, vu = /^( {2,}|\\)\n(?!\s*$)/, Lm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, wa = /[\p{P}\p{S}]/u, Hs = /[\s\p{P}\p{S}]/u, bu = /[^\s\p{P}\p{S}]/u, Im = Ee(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Hs).getRegex(), yu = /(?!~)[\p{P}\p{S}]/u, Rm = /(?!~)[\s\p{P}\p{S}]/u, xm = /(?:[^\s\p{P}\p{S}]|~)/u, Nm = Ee(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", mm ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), _u = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Pm = Ee(_u, "u").replace(/punct/g, wa).getRegex(), $m = Ee(_u, "u").replace(/punct/g, yu).getRegex(), wu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Mm = Ee(wu, "gu").replace(/notPunctSpace/g, bu).replace(/punctSpace/g, Hs).replace(/punct/g, wa).getRegex(), Dm = Ee(wu, "gu").replace(/notPunctSpace/g, xm).replace(/punctSpace/g, Rm).replace(/punct/g, yu).getRegex(), Fm = Ee("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, bu).replace(/punctSpace/g, Hs).replace(/punct/g, wa).getRegex(), zm = Ee(/\\(punct)/, "gu").replace(/punct/g, wa).getRegex(), Bm = Ee(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Vm = Ee(js).replace("(?:-->|$)", "-->").getRegex(), jm = Ee("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Vm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), oa = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Um = Ee(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", oa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ku = Ee(/^!?\[(label)\]\[(ref)\]/).replace("label", oa).replace("ref", Vs).getRegex(), Tu = Ee(/^!?\[(ref)\](?:\[\])?/).replace("ref", Vs).getRegex(), Hm = Ee("reflink|nolink(?!\\()", "g").replace("reflink", ku).replace("nolink", Tu).getRegex(), si = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Ws = { _backpedal: lo, anyPunctuation: zm, autolink: Bm, blockSkip: Nm, br: vu, code: Om, del: lo, emStrongLDelim: Pm, emStrongRDelimAst: Mm, emStrongRDelimUnd: Fm, escape: Cm, link: Um, nolink: Tu, punctuation: Im, reflink: ku, reflinkSearch: Hm, tag: jm, text: Lm, url: lo }, Wm = { ...Ws, link: Ee(/^!?\[(label)\]\((.*?)\)/).replace("label", oa).getRegex(), reflink: Ee(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", oa).getRegex() }, ps = { ...Ws, emStrongRDelimAst: Dm, emStrongLDelim: $m, url: Ee(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", si).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Ee(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", si).getRegex() }, Gm = { ...ps, br: Ee(vu).replace("{2,}", "*").getRegex(), text: Ee(ps.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Vo = { normal: Us, gfm: Sm, pedantic: Am }, Qr = { normal: Ws, gfm: ps, breaks: Gm, pedantic: Wm }, Km = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, li = (e) => Km[e];
function Cn(e, t) {
  if (t) {
    if (It.escapeTest.test(e)) return e.replace(It.escapeReplace, li);
  } else if (It.escapeTestNoEncode.test(e)) return e.replace(It.escapeReplaceNoEncode, li);
  return e;
}
function ii(e) {
  try {
    e = encodeURI(e).replace(It.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function ci(e, t) {
  let n = e.replace(It.findPipe, (a, s, i) => {
    let l = !1, u = s;
    for (; --u >= 0 && i[u] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), r = n.split(It.splitPipe), o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; o < r.length; o++) r[o] = r[o].trim().replace(It.slashPipe, "|");
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
    Ne(this, "options");
    Ne(this, "rules");
    Ne(this, "lexer");
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
          let v = m, h = v.raw + `
` + n.join(`
`), g = this.blockquote(h);
          a[a.length - 1] = g, r = r.substring(0, r.length - v.raw.length) + g.raw, o = o.substring(0, o.length - v.text.length) + g.text;
          break;
        } else if (m?.type === "list") {
          let v = m, h = v.raw + `
` + n.join(`
`), g = this.list(h);
          a[a.length - 1] = g, r = r.substring(0, r.length - m.raw.length) + g.raw, o = o.substring(0, o.length - v.raw.length) + g.raw, n = h.substring(a.at(-1).raw.length).split(`
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
`, 1)[0], v = !p.trim(), h = 0;
        if (this.options.pedantic ? (h = 2, f = p.trimStart()) : v ? h = t[1].length + 1 : (h = t[2].search(this.rules.other.nonSpaceChar), h = h > 4 ? 1 : h, f = p.slice(h), h += t[1].length), v && this.rules.other.blankLine.test(m) && (u += m + `
`, e = e.substring(m.length + 1), l = !0), !l) {
          let g = this.rules.other.nextBulletRegex(h), A = this.rules.other.hrRegex(h), d = this.rules.other.fencesBeginRegex(h), S = this.rules.other.headingBeginRegex(h), I = this.rules.other.htmlBeginRegex(h);
          for (; e; ) {
            let E = e.split(`
`, 1)[0], y;
            if (m = E, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), y = m) : y = m.replace(this.rules.other.tabCharGlobal, "    "), d.test(m) || S.test(m) || I.test(m) || g.test(m) || A.test(m)) break;
            if (y.search(this.rules.other.nonSpaceChar) >= h || !m.trim()) f += `
` + y.slice(h);
            else {
              if (v || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || d.test(p) || S.test(p) || A.test(p)) break;
              f += `
` + m;
            }
            !v && !m.trim() && (v = !0), u += E + `
`, e = e.substring(E.length + 1), p = y.slice(h);
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
          let v = p.slice(1, -1);
          return { type: "em", raw: p, text: v, tokens: this.lexer.inlineTokens(v) };
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
    Ne(this, "tokens");
    Ne(this, "options");
    Ne(this, "state");
    Ne(this, "inlineQueue");
    Ne(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || hr, this.options.tokenizer = this.options.tokenizer || new aa(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: It, block: Vo.normal, inline: Qr.normal };
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
    t = t.replace(It.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.options.pedantic && (t = t.replace(It.tabCharGlobal, "    ").replace(It.spaceLine, "")); t; ) {
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
        this.options.extensions.startInline.forEach((v) => {
          m = v.call({ lexer: this }, p), typeof m == "number" && m >= 0 && (f = Math.min(f, m));
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
    Ne(this, "options");
    Ne(this, "parser");
    this.options = t || hr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(It.notSpaceStart)?.[0], a = t.replace(It.endingNewline, "") + `
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
    Ne(this, "options");
    Ne(this, "renderer");
    Ne(this, "textRenderer");
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
    Ne(this, "options");
    Ne(this, "block");
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
}, Ne(qo, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Ne(qo, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), qo), Zm = class {
  constructor(...t) {
    Ne(this, "defaults", Fs());
    Ne(this, "options", this.setOptions);
    Ne(this, "parse", this.parseMarkdown(!0));
    Ne(this, "parseInline", this.parseMarkdown(!1));
    Ne(this, "Parser", en);
    Ne(this, "Renderer", sa);
    Ne(this, "TextRenderer", Gs);
    Ne(this, "Lexer", Jt);
    Ne(this, "Tokenizer", aa);
    Ne(this, "Hooks", ao);
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
function Re(e, t) {
  return fr.parse(e, t);
}
Re.options = Re.setOptions = function(e) {
  return fr.setOptions(e), Re.defaults = fr.defaults, pu(Re.defaults), Re;
};
Re.getDefaults = Fs;
Re.defaults = hr;
Re.use = function(...e) {
  return fr.use(...e), Re.defaults = fr.defaults, pu(Re.defaults), Re;
};
Re.walkTokens = function(e, t) {
  return fr.walkTokens(e, t);
};
Re.parseInline = fr.parseInline;
Re.Parser = en;
Re.parser = en.parse;
Re.Renderer = sa;
Re.TextRenderer = Gs;
Re.Lexer = Jt;
Re.lexer = Jt.lex;
Re.Tokenizer = aa;
Re.Hooks = ao;
Re.parse = Re;
Re.options;
Re.setOptions;
Re.use;
Re.walkTokens;
Re.parseInline;
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
    return (n, r) => (N(), K("button", {
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
      e.loading ? (N(), K("div", Qm, r[1] || (r[1] = [
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
      he(n.$slots, "default", {}, void 0, !0)
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
  const t = e || (Rt() ? xe(Su, U(Qo)) : U(Qo));
  return R(() => c(t) || Qo);
}, st = (e, t) => {
  const n = Ys(t);
  return {
    namespace: n,
    b: (g = "") => ir(n.value, e, g, "", ""),
    e: (g) => g ? ir(n.value, e, "", g, "") : "",
    m: (g) => g ? ir(n.value, e, "", "", g) : "",
    be: (g, A) => g && A ? ir(n.value, e, g, A, "") : "",
    em: (g, A) => g && A ? ir(n.value, e, "", g, A) : "",
    bm: (g, A) => g && A ? ir(n.value, e, g, "", A) : "",
    bem: (g, A, d) => g && A && d ? ir(n.value, e, g, A, d) : "",
    is: (g, ...A) => {
      const d = A.length >= 1 ? A[0] : !0;
      return g && d ? `${eh}${g}` : "";
    },
    cssVar: (g) => {
      const A = {};
      for (const d in g)
        g[d] && (A[`--${n.value}-${d}`] = g[d]);
      return A;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const A = {};
      for (const d in g)
        g[d] && (A[`--${n.value}-${e}-${d}`] = g[d]);
      return A;
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
}, th = Object.prototype.hasOwnProperty, fi = (e, t) => th.call(e, t), mn = Array.isArray, qe = (e) => typeof e == "function", St = (e) => typeof e == "string", Bt = (e) => e !== null && typeof e == "object", di = (e) => (Bt(e) || qe(e)) && qe(e.then) && qe(e.catch), nh = Object.prototype.toString, rh = (e) => nh.call(e), oh = (e) => rh(e) === "[object Object]";
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
  var p = -1, m = !0, v = n & tb ? new ia() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var h = e[p], g = t[p];
    if (r)
      var A = s ? r(g, h, p, t, e, a) : r(h, g, p, e, t, a);
    if (A !== void 0) {
      if (A)
        continue;
      m = !1;
      break;
    }
    if (v) {
      if (!Qv(t, function(d, S) {
        if (!Jv(v, S) && (h === d || o(h, d, n, r, a)))
          return v.push(S);
      })) {
        m = !1;
        break;
      }
    } else if (!(h === g || o(h, g, n, r, a))) {
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
  var v = a.get(e), h = a.get(t);
  if (v && h)
    return v == t && h == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var A = s; ++p < l; ) {
    m = i[p];
    var d = e[m], S = t[m];
    if (r)
      var I = s ? r(S, d, m, t, e, a) : r(d, S, m, e, t, a);
    if (!(I === void 0 ? d === S || o(d, S, n, r, a) : I)) {
      g = !1;
      break;
    }
    A || (A = m == "constructor");
  }
  if (g && !A) {
    var E = e.constructor, y = t.constructor;
    E != y && "constructor" in e && "constructor" in t && !(typeof E == "function" && E instanceof E && typeof y == "function" && y instanceof y) && (g = !1);
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
    var v = f && Di.call(e, "__wrapped__"), h = p && Di.call(t, "__wrapped__");
    if (v || h) {
      var g = v ? e.value() : e, A = h ? t.value() : t;
      return a || (a = new Dn()), o(g, A, n, r, a);
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
  function v(O) {
    var L = r, H = o;
    return r = o = void 0, u = O, s = e.apply(H, L), s;
  }
  function h(O) {
    return u = O, i = setTimeout(d, t), f ? v(O) : s;
  }
  function g(O) {
    var L = O - l, H = O - u, G = t - L;
    return p ? Vb(G, a - H) : G;
  }
  function A(O) {
    var L = O - l, H = O - u;
    return l === void 0 || L >= t || L < 0 || p && H >= a;
  }
  function d() {
    var O = Ya();
    if (A(O))
      return S(O);
    i = setTimeout(d, g(O));
  }
  function S(O) {
    return i = void 0, m && r ? v(O) : (r = o = void 0, s);
  }
  function I() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function E() {
    return i === void 0 ? s : S(Ya());
  }
  function y() {
    var O = Ya(), L = A(O);
    if (r = arguments, o = this, l = O, L) {
      if (i === void 0)
        return h(l);
      if (p)
        return clearTimeout(i), i = setTimeout(d, t), v(l);
    }
    return i === void 0 && (i = setTimeout(d, t)), s;
  }
  return y.cancel = I, y.flush = E, y;
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
const hn = (e) => e === void 0, Jn = (e) => typeof e == "boolean", Le = (e) => typeof e == "number", rn = (e) => typeof Element > "u" ? !1 : e instanceof Element, qb = (e) => St(e) ? !Number.isNaN(Number(e)) : !1;
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
const at = typeof window < "u", o0 = (e) => typeof e == "string", Vu = () => {
}, ws = at && ((Bi = window?.navigator) == null ? void 0 : Bi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
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
  Rt() ? nt(e) : t ? e() : Je(e);
}
function ju(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = U(!1);
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
  return r && (o.value = !0, at && l()), Co(i), {
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
const Ca = at ? window : void 0;
function on(...e) {
  let t, n, r, o;
  if (o0(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Ca) : [t, n, r, o] = e, !t)
    return Vu;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, p, m, v) => (f.addEventListener(p, m, v), () => f.removeEventListener(p, m, v)), l = ge(() => [$n(t), nl(o)], ([f, p]) => {
    s(), f && a.push(...n.flatMap((m) => r.map((v) => i(f, m, v, p))));
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
  const l = (m) => o.some((v) => {
    if (typeof v == "string")
      return Array.from(r.document.querySelectorAll(v)).some((h) => h === m.target || m.composedPath().includes(h));
    {
      const h = $n(v);
      return h && (m.target === h || m.composedPath().includes(h));
    }
  }), f = [
    on(r, "click", (m) => {
      const v = $n(e);
      if (!(!v || v === m.target || m.composedPath().includes(v))) {
        if (m.detail === 0 && (i = !l(m)), !i) {
          i = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    on(r, "pointerdown", (m) => {
      const v = $n(e);
      v && (i = !m.composedPath().includes(v) && !l(m));
    }, { passive: !0 }),
    s && on(r, "blur", (m) => {
      var v;
      const h = $n(e);
      ((v = r.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !h?.contains(r.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => f.forEach((m) => m());
}
function Uu(e, t = !1) {
  const n = U(), r = () => n.value = !!e();
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
  }, u = ge(() => $n(e), (p) => {
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
  }, u = ge(() => $n(e), (p) => {
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
}, Zi = U(0), Hu = 2e3, Xi = Symbol("elZIndexContextKey"), Wu = Symbol("zIndexContextKey"), Gu = (e) => {
  const t = Rt() ? xe(Xi, qi) : qi, n = e || (Rt() ? xe(Wu, void 0) : void 0), r = R(() => {
    const s = c(n);
    return Le(s) ? s : Hu;
  }), o = R(() => r.value + Zi.value), a = () => (t.current++, Zi.value = t.current, o.value);
  return !at && xe(Xi), {
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
  const t = R(() => c(e).name), n = po(e) ? e : U(e);
  return {
    lang: t,
    locale: n,
    t: k0(e)
  };
}, Ku = Symbol("localeContextKey"), ol = (e) => {
  const t = e || xe(Ku, U());
  return E0(R(() => t.value || w0));
}, Yu = "__epPropKey", pe = (e) => e, S0 = (e) => Bt(e) && !!e[Yu], Oa = (e, t) => {
  if (!Bt(e) || S0(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), fi(e, "default") && p.push(o), f || (f = p.includes(u))), s && (f || (f = s(u))), !f && p.length > 0) {
        const m = [...new Set(p)].map((v) => JSON.stringify(v)).join(", ");
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
  const e = xe(qu, {});
  return R(() => c(e.size) || "");
}, Zu = Symbol("emptyValuesContextKey"), C0 = ["", void 0, null], O0 = void 0, Xu = Be({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => qe(e) ? !e() : !e
  }
}), L0 = (e, t) => {
  const n = Rt() ? xe(Zu, U({})) : U({}), r = R(() => e.emptyValues || n.value.emptyValues || C0), o = R(() => qe(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : qe(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : O0), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Qi = (e) => Object.keys(e), ua = U();
function Qu(e, t = void 0) {
  return Rt() ? xe(Eu, ua) : ua;
}
function Ju(e, t) {
  const n = Qu(), r = st(e, R(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Qo;
  })), o = ol(R(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = Gu(R(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Hu;
  })), s = R(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return ef(R(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const ef = (e, t, n = !1) => {
  var r;
  const o = !!Rt(), a = o ? Qu() : void 0, s = (r = void 0) != null ? r : o ? _n : void 0;
  if (!s)
    return;
  const i = R(() => {
    const l = c(e);
    return a?.value ? I0(a.value, l) : l;
  });
  return s(Eu, i), s(Ku, R(() => i.value.locale)), s(Su, R(() => i.value.namespace)), s(Wu, R(() => i.value.zIndex)), s(qu, {
    size: R(() => i.value.size || "")
  }), s(Zu, R(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !ua.value) && (ua.value = i.value), i;
}, I0 = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Qi(e), ...Qi(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, ht = "update:modelValue", Vn = "change", zn = "input";
var He = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function Mr(e, t = "px") {
  if (!e)
    return "";
  if (Le(e) || qb(e))
    return `${e}${t}`;
  if (St(e))
    return e;
}
function R0(e, t) {
  if (!at)
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
    const t = e, n = st("icon"), r = R(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: hn(o) ? void 0 : Mr(o),
        "--color": a
      };
    });
    return (o, a) => (N(), K("i", Rr({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      he(o.$slots, "default")
    ], 16));
  }
});
var $0 = /* @__PURE__ */ He(P0, [["__file", "icon.vue"]]);
const ot = sn($0);
/*! Element Plus Icons Vue v2.3.1 */
var M0 = /* @__PURE__ */ ne({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (N(), K("svg", {
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
    return (t, n) => (N(), K("svg", {
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
    return (t, n) => (N(), K("svg", {
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
    return (t, n) => (N(), K("svg", {
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
    return (t, n) => (N(), K("svg", {
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
    return (t, n) => (N(), K("svg", {
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
    return (t, n) => (N(), K("svg", {
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
    return (t, n) => (N(), K("svg", {
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
    return (t, n) => (N(), K("svg", {
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
    return (t, n) => (N(), K("svg", {
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
    return (t, n) => (N(), K("svg", {
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
    return (t, n) => (N(), K("svg", {
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
    return (t, n) => (N(), K("svg", {
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
    return (t, n) => (N(), K("svg", {
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
}, sf = () => at && /firefox/i.test(window.navigator.userAgent);
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
  if (Le(t)) {
    let p = f * t;
    s === "border-box" && (p = p + o + a), l = Math.max(p, l), u.minHeight = `${p}px`;
  }
  if (Le(n)) {
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
  [ht]: (e) => St(e),
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
}, my = ["class", "style"], hy = /^on[A-Z]/, gy = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = R(() => (n?.value || []).concat(my)), o = Rt();
  return o ? R(() => {
    var a;
    return ca(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && hy.test(s))));
  }) : R(() => ({}));
}, ll = Symbol("formContextKey"), pa = Symbol("formItemContextKey"), ec = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, vy = Symbol("elIdInjection"), cf = () => Rt() ? xe(vy, ec) : ec, Ia = (e) => {
  const t = cf(), n = Ys();
  return r0(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Ra = () => {
  const e = xe(ll, void 0), t = xe(pa, void 0);
  return {
    form: e,
    formItem: t
  };
}, il = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = U(!1)), r || (r = U(!1));
  const o = U();
  let a;
  const s = R(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return nt(() => {
    a = ge([xn(e, "id"), n], ([i, l]) => {
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
  const t = Rt();
  return R(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, Oo = (e, t = {}) => {
  const n = U(void 0), r = t.prop ? n : uf("size"), o = t.global ? n : A0(), a = t.form ? { size: void 0 } : xe(ll, void 0), s = t.formItem ? { size: void 0 } : xe(pa, void 0);
  return R(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, cl = (e) => {
  const t = uf("disabled"), n = xe(ll, void 0);
  return R(() => t.value || c(e) || n?.disabled || !1);
};
function ff(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Rt(), { emit: s } = a, i = Qn(), l = U(!1), u = (m) => {
    qe(t) && t(m) || l.value || (l.value = !0, s("focus", m), n?.());
  }, f = (m) => {
    var v;
    qe(r) && r(m) || m.relatedTarget && ((v = i.value) != null && v.contains(m.relatedTarget)) || (l.value = !1, s("blur", m), o?.());
  }, p = () => {
    var m, v;
    (m = i.value) != null && m.contains(document.activeElement) && i.value !== document.activeElement || (v = e.value) == null || v.focus();
  };
  return ge(i, (m) => {
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
  const n = U(!1), r = (i) => {
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
    const r = e, o = td(), a = gy(), s = nd(), i = R(() => [
      r.type === "textarea" ? g.b() : h.b(),
      h.m(m.value),
      h.is("disabled", v.value),
      h.is("exceed", Ve.value),
      {
        [h.b("group")]: s.prepend || s.append,
        [h.m("prefix")]: s.prefix || r.prefixIcon,
        [h.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [h.bm("suffix", "password-clear")]: le.value && J.value,
        [h.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = R(() => [
      h.e("wrapper"),
      h.is("focus", H.value)
    ]), { form: u, formItem: f } = Ra(), { inputId: p } = il(r, {
      formItemContext: f
    }), m = Oo(), v = cl(), h = st("input"), g = st("textarea"), A = Qn(), d = Qn(), S = U(!1), I = U(!1), E = U(), y = Qn(r.inputStyle), O = R(() => A.value || d.value), { wrapperRef: L, isFocused: H, handleFocus: G, handleBlur: ee } = ff(O, {
      beforeFocus() {
        return v.value;
      },
      afterBlur() {
        var _;
        r.validateEvent && ((_ = f?.validate) == null || _.call(f, "blur").catch((M) => void 0));
      }
    }), ue = R(() => {
      var _;
      return (_ = u?.statusIcon) != null ? _ : !1;
    }), te = R(() => f?.validateState || ""), fe = R(() => te.value && af[te.value]), de = R(() => I.value ? ry : G0), P = R(() => [
      o.style
    ]), D = R(() => [
      r.inputStyle,
      y.value,
      { resize: r.resize }
    ]), B = R(() => Fn(r.modelValue) ? "" : String(r.modelValue)), le = R(() => r.clearable && !v.value && !r.readonly && !!B.value && (H.value || S.value)), J = R(() => r.showPassword && !v.value && !!B.value && (!!B.value || H.value)), ve = R(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !v.value && !r.readonly && !r.showPassword), Z = R(() => B.value.length), Ve = R(() => !!ve.value && Z.value > Number(r.maxlength)), Te = R(() => !!s.suffix || !!r.suffixIcon || le.value || r.showPassword || ve.value || !!te.value && ue.value), [me, je] = yy(A);
    pn(d, (_) => {
      if (ie(), !ve.value || r.resize !== "both")
        return;
      const M = _[0], { width: ce } = M.contentRect;
      E.value = {
        right: `calc(100% - ${ce + 15 + 6}px)`
      };
    });
    const _e = () => {
      const { type: _, autosize: M } = r;
      if (!(!at || _ !== "textarea" || !d.value))
        if (M) {
          const ce = Bt(M) ? M.minRows : void 0, be = Bt(M) ? M.maxRows : void 0, Ie = Ji(d.value, ce, be);
          y.value = {
            overflowY: "hidden",
            ...Ie
          }, Je(() => {
            d.value.offsetHeight, y.value = Ie;
          });
        } else
          y.value = {
            minHeight: Ji(d.value).minHeight
          };
    }, ie = ((_) => {
      let M = !1;
      return () => {
        var ce;
        if (M || !r.autosize)
          return;
        ((ce = d.value) == null ? void 0 : ce.offsetParent) === null || (_(), M = !0);
      };
    })(_e), Ze = () => {
      const _ = O.value, M = r.formatter ? r.formatter(B.value) : B.value;
      !_ || _.value === M || (_.value = M);
    }, it = async (_) => {
      me();
      let { value: M } = _.target;
      if (r.formatter && r.parser && (M = r.parser(M)), !vt.value) {
        if (M === B.value) {
          Ze();
          return;
        }
        n(ht, M), n(zn, M), await Je(), Ze(), je();
      }
    }, Ue = (_) => {
      let { value: M } = _.target;
      r.formatter && r.parser && (M = r.parser(M)), n(Vn, M);
    }, {
      isComposing: vt,
      handleCompositionStart: rt,
      handleCompositionUpdate: ct,
      handleCompositionEnd: ut
    } = df({ emit: n, afterComposition: it }), Ge = () => {
      me(), I.value = !I.value, setTimeout(je);
    }, ft = () => {
      var _;
      return (_ = O.value) == null ? void 0 : _.focus();
    }, k = () => {
      var _;
      return (_ = O.value) == null ? void 0 : _.blur();
    }, C = (_) => {
      S.value = !1, n("mouseleave", _);
    }, T = (_) => {
      S.value = !0, n("mouseenter", _);
    }, $ = (_) => {
      n("keydown", _);
    }, V = () => {
      var _;
      (_ = O.value) == null || _.select();
    }, Y = () => {
      n(ht, ""), n(Vn, ""), n("clear"), n(zn, "");
    };
    return ge(() => r.modelValue, () => {
      var _;
      Je(() => _e()), r.validateEvent && ((_ = f?.validate) == null || _.call(f, "change").catch((M) => void 0));
    }), ge(B, () => Ze()), ge(() => r.type, async () => {
      await Je(), Ze(), _e();
    }), nt(() => {
      !r.formatter && r.parser, Ze(), Je(_e);
    }), t({
      input: A,
      textarea: d,
      ref: O,
      textareaStyle: D,
      autosize: xn(r, "autosize"),
      isComposing: vt,
      focus: ft,
      blur: k,
      select: V,
      clear: Y,
      resizeTextarea: _e
    }), (_, M) => (N(), K("div", {
      class: W([
        c(i),
        {
          [c(h).bm("group", "append")]: _.$slots.append,
          [c(h).bm("group", "prepend")]: _.$slots.prepend
        }
      ]),
      style: yt(c(P)),
      onMouseenter: T,
      onMouseleave: C
    }, [
      Q(" input "),
      _.type !== "textarea" ? (N(), K(Et, { key: 0 }, [
        Q(" prepend slot "),
        _.$slots.prepend ? (N(), K("div", {
          key: 0,
          class: W(c(h).be("group", "prepend"))
        }, [
          he(_.$slots, "prepend")
        ], 2)) : Q("v-if", !0),
        w("div", {
          ref_key: "wrapperRef",
          ref: L,
          class: W(c(l))
        }, [
          Q(" prefix slot "),
          _.$slots.prefix || _.prefixIcon ? (N(), K("span", {
            key: 0,
            class: W(c(h).e("prefix"))
          }, [
            w("span", {
              class: W(c(h).e("prefix-inner"))
            }, [
              he(_.$slots, "prefix"),
              _.prefixIcon ? (N(), se(c(ot), {
                key: 0,
                class: W(c(h).e("icon"))
              }, {
                default: oe(() => [
                  (N(), se(Lt(_.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 2)) : Q("v-if", !0),
          w("input", Rr({
            id: c(p),
            ref_key: "input",
            ref: A,
            class: c(h).e("inner")
          }, c(a), {
            minlength: _.minlength,
            maxlength: _.maxlength,
            type: _.showPassword ? I.value ? "text" : "password" : _.type,
            disabled: c(v),
            readonly: _.readonly,
            autocomplete: _.autocomplete,
            tabindex: _.tabindex,
            "aria-label": _.ariaLabel,
            placeholder: _.placeholder,
            style: _.inputStyle,
            form: _.form,
            autofocus: _.autofocus,
            role: _.containerRole,
            onCompositionstart: c(rt),
            onCompositionupdate: c(ct),
            onCompositionend: c(ut),
            onInput: it,
            onChange: Ue,
            onKeydown: $
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          Q(" suffix slot "),
          c(Te) ? (N(), K("span", {
            key: 1,
            class: W(c(h).e("suffix"))
          }, [
            w("span", {
              class: W(c(h).e("suffix-inner"))
            }, [
              !c(le) || !c(J) || !c(ve) ? (N(), K(Et, { key: 0 }, [
                he(_.$slots, "suffix"),
                _.suffixIcon ? (N(), se(c(ot), {
                  key: 0,
                  class: W(c(h).e("icon"))
                }, {
                  default: oe(() => [
                    (N(), se(Lt(_.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Q("v-if", !0)
              ], 64)) : Q("v-if", !0),
              c(le) ? (N(), se(c(ot), {
                key: 1,
                class: W([c(h).e("icon"), c(h).e("clear")]),
                onMousedown: Ke(c(yo), ["prevent"]),
                onClick: Y
              }, {
                default: oe(() => [
                  F(c(sl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Q("v-if", !0),
              c(J) ? (N(), se(c(ot), {
                key: 2,
                class: W([c(h).e("icon"), c(h).e("password")]),
                onClick: Ge
              }, {
                default: oe(() => [
                  (N(), se(Lt(c(de))))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0),
              c(ve) ? (N(), K("span", {
                key: 3,
                class: W(c(h).e("count"))
              }, [
                w("span", {
                  class: W(c(h).e("count-inner"))
                }, j(c(Z)) + " / " + j(_.maxlength), 3)
              ], 2)) : Q("v-if", !0),
              c(te) && c(fe) && c(ue) ? (N(), se(c(ot), {
                key: 4,
                class: W([
                  c(h).e("icon"),
                  c(h).e("validateIcon"),
                  c(h).is("loading", c(te) === "validating")
                ])
              }, {
                default: oe(() => [
                  (N(), se(Lt(c(fe))))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 2)) : Q("v-if", !0)
        ], 2),
        Q(" append slot "),
        _.$slots.append ? (N(), K("div", {
          key: 1,
          class: W(c(h).be("group", "append"))
        }, [
          he(_.$slots, "append")
        ], 2)) : Q("v-if", !0)
      ], 64)) : (N(), K(Et, { key: 1 }, [
        Q(" textarea "),
        w("textarea", Rr({
          id: c(p),
          ref_key: "textarea",
          ref: d,
          class: [c(g).e("inner"), c(h).is("focus", c(H))]
        }, c(a), {
          minlength: _.minlength,
          maxlength: _.maxlength,
          tabindex: _.tabindex,
          disabled: c(v),
          readonly: _.readonly,
          autocomplete: _.autocomplete,
          style: c(D),
          "aria-label": _.ariaLabel,
          placeholder: _.placeholder,
          form: _.form,
          autofocus: _.autofocus,
          rows: _.rows,
          role: _.containerRole,
          onCompositionstart: c(rt),
          onCompositionupdate: c(ct),
          onCompositionend: c(ut),
          onInput: it,
          onFocus: c(G),
          onBlur: c(ee),
          onChange: Ue,
          onKeydown: $
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(ve) ? (N(), K("span", {
          key: 0,
          style: yt(E.value),
          class: W(c(h).e("count"))
        }, j(c(Z)) + " / " + j(_.maxlength), 7)) : Q("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Ty = /* @__PURE__ */ He(ky, [["__file", "input.vue"]]);
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
    const t = e, n = xe(ul), r = st("scrollbar");
    n || rl(Oy, "can not inject scrollbar context");
    const o = U(), a = U(), s = U({}), i = U(!1);
    let l = !1, u = !1, f = at ? document.onselectstart : null;
    const p = R(() => Sy[t.vertical ? "vertical" : "horizontal"]), m = R(() => Ay({
      size: t.size,
      move: t.move,
      bar: p.value
    })), v = R(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), h = (O) => {
      var L;
      if (O.stopPropagation(), O.ctrlKey || [1, 2].includes(O.button))
        return;
      (L = window.getSelection()) == null || L.removeAllRanges(), A(O);
      const H = O.currentTarget;
      H && (s.value[p.value.axis] = H[p.value.offset] - (O[p.value.client] - H.getBoundingClientRect()[p.value.direction]));
    }, g = (O) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const L = Math.abs(O.target.getBoundingClientRect()[p.value.direction] - O[p.value.client]), H = a.value[p.value.offset] / 2, G = (L - H) * 100 * v.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = G * n.wrapElement[p.value.scrollSize] / 100;
    }, A = (O) => {
      O.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", S), f = document.onselectstart, document.onselectstart = () => !1;
    }, d = (O) => {
      if (!o.value || !a.value || l === !1)
        return;
      const L = s.value[p.value.axis];
      if (!L)
        return;
      const H = (o.value.getBoundingClientRect()[p.value.direction] - O[p.value.client]) * -1, G = a.value[p.value.offset] - L, ee = (H - G) * 100 * v.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = ee * n.wrapElement[p.value.scrollSize] / 100;
    }, S = () => {
      l = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", S), y(), u && (i.value = !1);
    }, I = () => {
      u = !1, i.value = !!t.size;
    }, E = () => {
      u = !0, i.value = l;
    };
    Tn(() => {
      y(), document.removeEventListener("mouseup", S);
    });
    const y = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return on(xn(n, "scrollbarElement"), "mousemove", I), on(xn(n, "scrollbarElement"), "mouseleave", E), (O, L) => (N(), se(Ur, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: oe(() => [
        gt(w("div", {
          ref_key: "instance",
          ref: o,
          class: W([c(r).e("bar"), c(r).is(c(p).key)]),
          onMousedown: g
        }, [
          w("div", {
            ref_key: "thumb",
            ref: a,
            class: W(c(r).e("thumb")),
            style: yt(c(m)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [Bn, O.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var tc = /* @__PURE__ */ He(Ly, [["__file", "thumb.vue"]]);
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
    const n = e, r = xe(ul), o = U(0), a = U(0), s = U(""), i = U(""), l = U(1), u = U(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const v = m.offsetHeight - Tr, h = m.offsetWidth - Tr;
          a.value = m.scrollTop * 100 / v * l.value, o.value = m.scrollLeft * 100 / h * u.value;
        }
      },
      update: () => {
        const m = r?.wrapElement;
        if (!m)
          return;
        const v = m.offsetHeight - Tr, h = m.offsetWidth - Tr, g = v ** 2 / m.scrollHeight, A = h ** 2 / m.scrollWidth, d = Math.max(g, n.minSize), S = Math.max(A, n.minSize);
        l.value = g / (v - g) / (d / (v - d)), u.value = A / (h - A) / (S / (h - S)), i.value = d + Tr < v ? `${d}px` : "", s.value = S + Tr < h ? `${S}px` : "";
      }
    }), (m, v) => (N(), K(Et, null, [
      F(tc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      F(tc, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var xy = /* @__PURE__ */ He(Ry, [["__file", "bar.vue"]]);
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
  }) => [e, t].every(Le)
}, $y = "ElScrollbar", My = ne({
  name: $y
}), Dy = /* @__PURE__ */ ne({
  ...My,
  props: Ny,
  emits: Py,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = st("scrollbar");
    let a, s, i = 0, l = 0;
    const u = U(), f = U(), p = U(), m = U(), v = R(() => {
      const y = {};
      return r.height && (y.height = Mr(r.height)), r.maxHeight && (y.maxHeight = Mr(r.maxHeight)), [r.wrapStyle, y];
    }), h = R(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), g = R(() => [o.e("view"), r.viewClass]), A = () => {
      var y;
      f.value && ((y = m.value) == null || y.handleScroll(f.value), i = f.value.scrollTop, l = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function d(y, O) {
      Bt(y) ? f.value.scrollTo(y) : Le(y) && Le(O) && f.value.scrollTo(y, O);
    }
    const S = (y) => {
      Le(y) && (f.value.scrollTop = y);
    }, I = (y) => {
      Le(y) && (f.value.scrollLeft = y);
    }, E = () => {
      var y;
      (y = m.value) == null || y.update();
    };
    return ge(() => r.noresize, (y) => {
      y ? (a?.(), s?.()) : ({ stop: a } = pn(p, E), s = on("resize", E));
    }, { immediate: !0 }), ge(() => [r.maxHeight, r.height], () => {
      r.native || Je(() => {
        var y;
        E(), f.value && ((y = m.value) == null || y.handleScroll(f.value));
      });
    }), _n(ul, ur({
      scrollbarElement: u,
      wrapElement: f
    })), rd(() => {
      f.value && (f.value.scrollTop = i, f.value.scrollLeft = l);
    }), nt(() => {
      r.native || Je(() => {
        E();
      });
    }), jc(() => E()), t({
      wrapRef: f,
      update: E,
      scrollTo: d,
      setScrollTop: S,
      setScrollLeft: I,
      handleScroll: A
    }), (y, O) => (N(), K("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: W(c(o).b())
    }, [
      w("div", {
        ref_key: "wrapRef",
        ref: f,
        class: W(c(h)),
        style: yt(c(v)),
        tabindex: y.tabindex,
        onScroll: A
      }, [
        (N(), se(Lt(y.tag), {
          id: y.id,
          ref_key: "resizeRef",
          ref: p,
          class: W(c(g)),
          style: yt(y.viewStyle),
          role: y.role,
          "aria-label": y.ariaLabel,
          "aria-orientation": y.ariaOrientation
        }, {
          default: oe(() => [
            he(y.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      y.native ? Q("v-if", !0) : (N(), se(xy, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        always: y.always,
        "min-size": y.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Fy = /* @__PURE__ */ He(Dy, [["__file", "scrollbar.vue"]]);
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
    const n = e, r = U(), o = U(), a = U(), s = U(), i = R(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), _n(fl, l), (u, f) => he(u.$slots, "default");
  }
});
var Uy = /* @__PURE__ */ He(jy, [["__file", "popper.vue"]]);
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
    const n = e, r = st("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = xe(pf, void 0);
    return ge(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Tn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (N(), K("span", {
      ref_key: "arrowRef",
      ref: a,
      class: W(c(r).e("arrow")),
      style: yt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Gy = /* @__PURE__ */ He(Wy, [["__file", "arrow.vue"]]);
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
    const o = xe(vf), a = Yy((r = o?.setForwardRef) != null ? r : yo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = bf(i);
      return l ? gt(od(l, n), [[a]]) : null;
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
        case Et:
          return bf(n.children);
        default:
          return n;
      }
    return nc(n);
  }
  return null;
}
function nc(e) {
  const t = st("only-child");
  return F("span", {
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
    const n = e, { role: r, triggerRef: o } = xe(fl, void 0);
    Ky(o);
    const a = R(() => i.value ? n.id : void 0), s = R(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = R(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = R(() => i.value ? `${n.open}` : void 0);
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
      ge(() => n.virtualRef, (p) => {
        p && (o.value = $n(p));
      }, {
        immediate: !0
      }), ge(o, (p, m) => {
        u?.(), u = void 0, rn(p) && (f.forEach((v) => {
          var h;
          const g = n[v];
          g && (p.addEventListener(v.slice(2).toLowerCase(), g), (h = m?.removeEventListener) == null || h.call(m, v.slice(2).toLowerCase(), g));
        }), ks(p) && (u = ge([a, s, i, l], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, g) => {
            Fn(v[g]) ? p.removeAttribute(h) : p.setAttribute(h, v[g]);
          });
        }, { immediate: !0 }))), rn(m) && ks(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((v) => m.removeAttribute(v));
      }, {
        immediate: !0
      });
    }), Tn(() => {
      if (u?.(), u = void 0, o.value && rn(o.value)) {
        const p = o.value;
        f.forEach((m) => {
          const v = n[m];
          v && p.removeEventListener(m.slice(2).toLowerCase(), v);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, m) => p.virtualTriggering ? Q("v-if", !0) : (N(), se(c(Zy), Rr({ key: 0 }, p.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: oe(() => [
        he(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Jy = /* @__PURE__ */ He(Qy, [["__file", "trigger.vue"]]);
const qa = "focus-trap.focus-after-trapped", Za = "focus-trap.focus-after-released", e_ = "focus-trap.focusout-prevented", rc = {
  cancelable: !0,
  bubbles: !1
}, t_ = {
  cancelable: !0,
  bubbles: !1
}, oc = "focusAfterTrapped", ac = "focusAfterReleased", n_ = Symbol("elFocusTrap"), dl = U(), xa = U(0), pl = U(0);
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
    if (!r_(n, t))
      return n;
}, r_ = (e, t) => {
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
}, o_ = (e) => {
  const t = yf(e), n = sc(t, e), r = sc(t.reverse(), e);
  return [n, r];
}, a_ = (e) => e instanceof HTMLInputElement && "select" in e, Ln = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    rn(e) && !ks(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), pl.value = window.performance.now(), e !== n && a_(e) && t && e.select(), rn(e) && r && e.removeAttribute("tabindex");
  }
};
function lc(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const s_ = () => {
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
}, l_ = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Ln(r, t), document.activeElement !== n)
      return;
}, ic = s_(), i_ = () => xa.value > pl.value, Ho = () => {
  dl.value = "pointer", xa.value = window.performance.now();
}, cc = () => {
  dl.value = "keyboard", xa.value = window.performance.now();
}, c_ = () => (nt(() => {
  Uo === 0 && (document.addEventListener("mousedown", Ho), document.addEventListener("touchstart", Ho), document.addEventListener("keydown", cc)), Uo++;
}), Tn(() => {
  Uo--, Uo <= 0 && (document.removeEventListener("mousedown", Ho), document.removeEventListener("touchstart", Ho), document.removeEventListener("keydown", cc));
}), {
  focusReason: dl,
  lastUserFocusTimestamp: xa,
  lastAutomatedFocusTimestamp: pl
}), Wo = (e) => new CustomEvent(e_, {
  ...t_,
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
}, u_ = (e) => {
  nt(() => {
    Lr.length === 0 && document.addEventListener("keydown", uc), at && Lr.push(e);
  }), Tn(() => {
    Lr = Lr.filter((t) => t !== e), Lr.length === 0 && at && document.removeEventListener("keydown", uc);
  });
}, f_ = ne({
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
    const n = U();
    let r, o;
    const { focusReason: a } = c_();
    u_((h) => {
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
      const { code: g, altKey: A, ctrlKey: d, metaKey: S, currentTarget: I, shiftKey: E } = h, { loop: y } = e, O = g === bn.tab && !A && !d && !S, L = document.activeElement;
      if (O && L) {
        const H = I, [G, ee] = o_(H);
        if (G && ee) {
          if (!E && L === ee) {
            const te = Wo({
              focusReason: a.value
            });
            t("focusout-prevented", te), te.defaultPrevented || (h.preventDefault(), y && Ln(G, !0));
          } else if (E && [G, H].includes(L)) {
            const te = Wo({
              focusReason: a.value
            });
            t("focusout-prevented", te), te.defaultPrevented || (h.preventDefault(), y && Ln(ee, !0));
          }
        } else if (L === H) {
          const te = Wo({
            focusReason: a.value
          });
          t("focusout-prevented", te), te.defaultPrevented || h.preventDefault();
        }
      }
    };
    _n(n_, {
      focusTrapRef: n,
      onKeydown: i
    }), ge(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), ge([n], ([h], [g]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", f), h.addEventListener("focusout", p)), g && (g.removeEventListener("keydown", i), g.removeEventListener("focusin", f), g.removeEventListener("focusout", p));
    });
    const l = (h) => {
      t(oc, h);
    }, u = (h) => t(ac, h), f = (h) => {
      const g = c(n);
      if (!g)
        return;
      const A = h.target, d = h.relatedTarget, S = A && g.contains(A);
      e.trapped || d && g.contains(d) || (r = d), S && t("focusin", h), !s.paused && e.trapped && (S ? o = A : Ln(o, !0));
    }, p = (h) => {
      const g = c(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const A = h.relatedTarget;
          !Fn(A) && !g.contains(A) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const d = Wo({
                focusReason: a.value
              });
              t("focusout-prevented", d), d.defaultPrevented || Ln(o, !0);
            }
          }, 0);
        } else {
          const A = h.target;
          A && g.contains(A) || t("focusout", h);
        }
    };
    async function m() {
      await Je();
      const h = c(n);
      if (h) {
        ic.push(s);
        const g = h.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !h.contains(g)) {
          const d = new Event(qa, rc);
          h.addEventListener(qa, l), h.dispatchEvent(d), d.defaultPrevented || Je(() => {
            let S = e.focusStartEl;
            St(S) || (Ln(S), document.activeElement !== S && (S = "first")), S === "first" && l_(yf(h), !0), (document.activeElement === g || S === "container") && Ln(h);
          });
        }
      }
    }
    function v() {
      const h = c(n);
      if (h) {
        h.removeEventListener(qa, l);
        const g = new CustomEvent(Za, {
          ...rc,
          detail: {
            focusReason: a.value
          }
        });
        h.addEventListener(Za, u), h.dispatchEvent(g), !g.defaultPrevented && (a.value == "keyboard" || !i_() || h.contains(document.activeElement)) && Ln(r ?? document.body), h.removeEventListener(Za, u), ic.remove(s);
      }
    }
    return nt(() => {
      e.trapped && m(), ge(() => e.trapped, (h) => {
        h ? m() : v();
      });
    }), Tn(() => {
      e.trapped && v(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function d_(e, t, n, r, o, a) {
  return he(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var p_ = /* @__PURE__ */ He(f_, [["render", d_], ["__file", "focus-trap.vue"]]), Mt = "top", Yt = "bottom", qt = "right", Dt = "left", ml = "auto", Lo = [Mt, Yt, qt, Dt], Dr = "start", ko = "end", m_ = "clippingParents", _f = "viewport", to = "popper", h_ = "reference", fc = Lo.reduce(function(e, t) {
  return e.concat([t + "-" + Dr, t + "-" + ko]);
}, []), Na = [].concat(Lo, [ml]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Dr, t + "-" + ko]);
}, []), g_ = "beforeRead", v_ = "read", b_ = "afterRead", y_ = "beforeMain", __ = "main", w_ = "afterMain", k_ = "beforeWrite", T_ = "write", E_ = "afterWrite", S_ = [g_, v_, b_, y_, __, w_, k_, T_, E_];
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
function A_(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !Kt(a) || !kn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function C_(e) {
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
var wf = { name: "applyStyles", enabled: !0, phase: "write", fn: A_, effect: C_, requires: ["computeStyles"] };
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
function O_(e) {
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
function L_(e) {
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
  for (var t = Vt(e), n = dc(e); n && O_(n) && jn(n).position === "static"; ) n = dc(n);
  return n && (kn(n) === "html" || kn(n) === "body" && jn(n).position === "static") ? t : n || L_(e) || t;
}
function vl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function uo(e, t, n) {
  return cr(e, ma(t, n));
}
function I_(e, t, n) {
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
var R_ = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Sf(typeof e != "number" ? e : Af(e, Lo));
};
function x_(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = yn(n.placement), l = vl(i), u = [Dt, qt].indexOf(i) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = R_(o.padding, n), m = gl(a), v = l === "y" ? Mt : Dt, h = l === "y" ? Yt : qt, g = n.rects.reference[f] + n.rects.reference[l] - s[l] - n.rects.popper[f], A = s[l] - n.rects.reference[l], d = Io(a), S = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, I = g / 2 - A / 2, E = p[v], y = S - m[f] - p[h], O = S / 2 - m[f] / 2 + I, L = uo(E, O, y), H = l;
    n.modifiersData[r] = (t = {}, t[H] = L, t.centerOffset = L - O, t);
  }
}
function N_(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Tf(t.elements.popper, o) && (t.elements.arrow = o));
}
var P_ = { name: "arrow", enabled: !0, phase: "main", fn: x_, effect: N_, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Br(e) {
  return e.split("-")[1];
}
var $_ = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function M_(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Fr(n * o) / o || 0, y: Fr(r * o) / o || 0 };
}
function pc(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, p = e.isFixed, m = s.x, v = m === void 0 ? 0 : m, h = s.y, g = h === void 0 ? 0 : h, A = typeof f == "function" ? f({ x: v, y: g }) : { x: v, y: g };
  v = A.x, g = A.y;
  var d = s.hasOwnProperty("x"), S = s.hasOwnProperty("y"), I = Dt, E = Mt, y = window;
  if (u) {
    var O = Io(n), L = "clientHeight", H = "clientWidth";
    if (O === Vt(n) && (O = rr(n), jn(O).position !== "static" && i === "absolute" && (L = "scrollHeight", H = "scrollWidth")), O = O, o === Mt || (o === Dt || o === qt) && a === ko) {
      E = Yt;
      var G = p && O === y && y.visualViewport ? y.visualViewport.height : O[L];
      g -= G - r.height, g *= l ? 1 : -1;
    }
    if (o === Dt || (o === Mt || o === Yt) && a === ko) {
      I = qt;
      var ee = p && O === y && y.visualViewport ? y.visualViewport.width : O[H];
      v -= ee - r.width, v *= l ? 1 : -1;
    }
  }
  var ue = Object.assign({ position: i }, u && $_), te = f === !0 ? M_({ x: v, y: g }, Vt(n)) : { x: v, y: g };
  if (v = te.x, g = te.y, l) {
    var fe;
    return Object.assign({}, ue, (fe = {}, fe[E] = S ? "0" : "", fe[I] = d ? "0" : "", fe.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)", fe));
  }
  return Object.assign({}, ue, (t = {}, t[E] = S ? g + "px" : "", t[I] = d ? v + "px" : "", t.transform = "", t));
}
function D_(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: yn(t.placement), variation: Br(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, pc(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, pc(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Cf = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: D_, data: {} }, Go = { passive: !0 };
function F_(e) {
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
}, effect: F_, data: {} }, z_ = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Jo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return z_[t];
  });
}
var B_ = { start: "end", end: "start" };
function mc(e) {
  return e.replace(/start|end/g, function(t) {
    return B_[t];
  });
}
function bl(e) {
  var t = Vt(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function yl(e) {
  return zr(rr(e)).left + bl(e).scrollLeft;
}
function V_(e, t) {
  var n = Vt(e), r = rr(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = kf();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + yl(e), y: l };
}
function j_(e) {
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
function U_(e, t) {
  var n = zr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function hc(e, t, n) {
  return t === _f ? Es(V_(e, n)) : pr(t) ? U_(t, n) : Es(j_(rr(e)));
}
function H_(e) {
  var t = fo(Pa(e)), n = ["absolute", "fixed"].indexOf(jn(e).position) >= 0, r = n && Kt(e) ? Io(e) : e;
  return pr(r) ? t.filter(function(o) {
    return pr(o) && Tf(o, r) && kn(o) !== "body";
  }) : [];
}
function W_(e, t, n, r) {
  var o = t === "clippingParents" ? H_(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? m_ : i, u = n.rootBoundary, f = u === void 0 ? _f : u, p = n.elementContext, m = p === void 0 ? to : p, v = n.altBoundary, h = v === void 0 ? !1 : v, g = n.padding, A = g === void 0 ? 0 : g, d = Sf(typeof A != "number" ? A : Af(A, Lo)), S = m === to ? h_ : to, I = e.rects.popper, E = e.elements[h ? S : m], y = W_(pr(E) ? E : E.contextElement || rr(e.elements.popper), l, f, s), O = zr(e.elements.reference), L = If({ reference: O, element: I, placement: o }), H = Es(Object.assign({}, I, L)), G = m === to ? H : O, ee = { top: y.top - G.top + d.top, bottom: G.bottom - y.bottom + d.bottom, left: y.left - G.left + d.left, right: G.right - y.right + d.right }, ue = e.modifiersData.offset;
  if (m === to && ue) {
    var te = ue[o];
    Object.keys(ee).forEach(function(fe) {
      var de = [qt, Yt].indexOf(fe) >= 0 ? 1 : -1, P = [Mt, Yt].indexOf(fe) >= 0 ? "y" : "x";
      ee[fe] += te[P] * de;
    });
  }
  return ee;
}
function G_(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Na : l, f = Br(r), p = f ? i ? fc : fc.filter(function(h) {
    return Br(h) === f;
  }) : Lo, m = p.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  m.length === 0 && (m = p);
  var v = m.reduce(function(h, g) {
    return h[g] = To(e, { placement: g, boundary: o, rootBoundary: a, padding: s })[yn(g)], h;
  }, {});
  return Object.keys(v).sort(function(h, g) {
    return v[h] - v[g];
  });
}
function K_(e) {
  if (yn(e) === ml) return [];
  var t = Jo(e);
  return [mc(e), t, mc(t)];
}
function Y_(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, f = n.boundary, p = n.rootBoundary, m = n.altBoundary, v = n.flipVariations, h = v === void 0 ? !0 : v, g = n.allowedAutoPlacements, A = t.options.placement, d = yn(A), S = d === A, I = l || (S || !h ? [Jo(A)] : K_(A)), E = [A].concat(I).reduce(function(me, je) {
      return me.concat(yn(je) === ml ? G_(t, { placement: je, boundary: f, rootBoundary: p, padding: u, flipVariations: h, allowedAutoPlacements: g }) : je);
    }, []), y = t.rects.reference, O = t.rects.popper, L = /* @__PURE__ */ new Map(), H = !0, G = E[0], ee = 0; ee < E.length; ee++) {
      var ue = E[ee], te = yn(ue), fe = Br(ue) === Dr, de = [Mt, Yt].indexOf(te) >= 0, P = de ? "width" : "height", D = To(t, { placement: ue, boundary: f, rootBoundary: p, altBoundary: m, padding: u }), B = de ? fe ? qt : Dt : fe ? Yt : Mt;
      y[P] > O[P] && (B = Jo(B));
      var le = Jo(B), J = [];
      if (a && J.push(D[te] <= 0), i && J.push(D[B] <= 0, D[le] <= 0), J.every(function(me) {
        return me;
      })) {
        G = ue, H = !1;
        break;
      }
      L.set(ue, J);
    }
    if (H) for (var ve = h ? 3 : 1, Z = function(me) {
      var je = E.find(function(_e) {
        var We = L.get(_e);
        if (We) return We.slice(0, me).every(function(ie) {
          return ie;
        });
      });
      if (je) return G = je, "break";
    }, Ve = ve; Ve > 0; Ve--) {
      var Te = Z(Ve);
      if (Te === "break") break;
    }
    t.placement !== G && (t.modifiersData[r]._skip = !0, t.placement = G, t.reset = !0);
  }
}
var q_ = { name: "flip", enabled: !0, phase: "main", fn: Y_, requiresIfExists: ["offset"], data: { _skip: !1 } };
function gc(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function vc(e) {
  return [Mt, qt, Yt, Dt].some(function(t) {
    return e[t] >= 0;
  });
}
function Z_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = To(t, { elementContext: "reference" }), i = To(t, { altBoundary: !0 }), l = gc(s, r), u = gc(i, o, a), f = vc(l), p = vc(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var X_ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Z_ };
function Q_(e, t, n) {
  var r = yn(e), o = [Dt, Mt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [Dt, qt].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function J_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = Na.reduce(function(f, p) {
    return f[p] = Q_(p, t.rects, a), f;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var e1 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: J_ };
function t1(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = If({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Rf = { name: "popperOffsets", enabled: !0, phase: "read", fn: t1, data: {} };
function n1(e) {
  return e === "x" ? "y" : "x";
}
function r1(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, p = n.padding, m = n.tether, v = m === void 0 ? !0 : m, h = n.tetherOffset, g = h === void 0 ? 0 : h, A = To(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: f }), d = yn(t.placement), S = Br(t.placement), I = !S, E = vl(d), y = n1(E), O = t.modifiersData.popperOffsets, L = t.rects.reference, H = t.rects.popper, G = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, ee = typeof G == "number" ? { mainAxis: G, altAxis: G } : Object.assign({ mainAxis: 0, altAxis: 0 }, G), ue = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, te = { x: 0, y: 0 };
  if (O) {
    if (a) {
      var fe, de = E === "y" ? Mt : Dt, P = E === "y" ? Yt : qt, D = E === "y" ? "height" : "width", B = O[E], le = B + A[de], J = B - A[P], ve = v ? -H[D] / 2 : 0, Z = S === Dr ? L[D] : H[D], Ve = S === Dr ? -H[D] : -L[D], Te = t.elements.arrow, me = v && Te ? gl(Te) : { width: 0, height: 0 }, je = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ef(), _e = je[de], We = je[P], ie = uo(0, L[D], me[D]), Ze = I ? L[D] / 2 - ve - ie - _e - ee.mainAxis : Z - ie - _e - ee.mainAxis, it = I ? -L[D] / 2 + ve + ie + We + ee.mainAxis : Ve + ie + We + ee.mainAxis, Ue = t.elements.arrow && Io(t.elements.arrow), vt = Ue ? E === "y" ? Ue.clientTop || 0 : Ue.clientLeft || 0 : 0, rt = (fe = ue?.[E]) != null ? fe : 0, ct = B + Ze - rt - vt, ut = B + it - rt, Ge = uo(v ? ma(le, ct) : le, B, v ? cr(J, ut) : J);
      O[E] = Ge, te[E] = Ge - B;
    }
    if (i) {
      var ft, k = E === "x" ? Mt : Dt, C = E === "x" ? Yt : qt, T = O[y], $ = y === "y" ? "height" : "width", V = T + A[k], Y = T - A[C], _ = [Mt, Dt].indexOf(d) !== -1, M = (ft = ue?.[y]) != null ? ft : 0, ce = _ ? V : T - L[$] - H[$] - M + ee.altAxis, be = _ ? T + L[$] + H[$] - M - ee.altAxis : Y, Ie = v && _ ? I_(ce, T, be) : uo(v ? ce : V, T, v ? be : Y);
      O[y] = Ie, te[y] = Ie - T;
    }
    t.modifiersData[r] = te;
  }
}
var o1 = { name: "preventOverflow", enabled: !0, phase: "main", fn: r1, requiresIfExists: ["offset"] };
function a1(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function s1(e) {
  return e === Vt(e) || !Kt(e) ? bl(e) : a1(e);
}
function l1(e) {
  var t = e.getBoundingClientRect(), n = Fr(t.width) / e.offsetWidth || 1, r = Fr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function i1(e, t, n) {
  n === void 0 && (n = !1);
  var r = Kt(t), o = Kt(t) && l1(t), a = rr(t), s = zr(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((kn(t) !== "body" || _l(a)) && (i = s1(t)), Kt(t) ? (l = zr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = yl(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function c1(e) {
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
function u1(e) {
  var t = c1(e);
  return S_.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function f1(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function d1(e) {
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
      var A = typeof g == "function" ? g(u.options) : g;
      h(), u.options = Object.assign({}, a, u.options, A), u.scrollParents = { reference: pr(s) ? fo(s) : s.contextElement ? fo(s.contextElement) : [], popper: fo(i) };
      var d = u1(d1([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = d.filter(function(S) {
        return S.enabled;
      }), v(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var g = u.elements, A = g.reference, d = g.popper;
        if (yc(A, d)) {
          u.rects = { reference: i1(A, Io(d), u.options.strategy === "fixed"), popper: gl(d) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(H) {
            return u.modifiersData[H.name] = Object.assign({}, H.data);
          });
          for (var S = 0; S < u.orderedModifiers.length; S++) {
            if (u.reset === !0) {
              u.reset = !1, S = -1;
              continue;
            }
            var I = u.orderedModifiers[S], E = I.fn, y = I.options, O = y === void 0 ? {} : y, L = I.name;
            typeof E == "function" && (u = E({ state: u, options: O, name: L, instance: m }) || u);
          }
        }
      }
    }, update: f1(function() {
      return new Promise(function(g) {
        m.forceUpdate(), g(u);
      });
    }), destroy: function() {
      h(), p = !0;
    } };
    if (!yc(s, i)) return m;
    m.setOptions(l).then(function(g) {
      !p && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function v() {
      u.orderedModifiers.forEach(function(g) {
        var A = g.name, d = g.options, S = d === void 0 ? {} : d, I = g.effect;
        if (typeof I == "function") {
          var E = I({ state: u, name: A, instance: m, options: S }), y = function() {
          };
          f.push(E || y);
        }
      });
    }
    function h() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return m;
  };
}
wl();
var p1 = [Of, Rf, Cf, wf];
wl({ defaultModifiers: p1 });
var m1 = [Of, Rf, Cf, wf, e1, q_, o1, P_, X_], h1 = wl({ defaultModifiers: m1 });
const g1 = ["fixed", "absolute"], v1 = Be({
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
    values: g1,
    default: "absolute"
  }
}), xf = Be({
  ...v1,
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
}), b1 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, y1 = (e, t) => {
  const n = U(!1), r = U();
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
}, _1 = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...k1(e), ...t]
  };
  return T1(a, o?.modifiers), a;
}, w1 = (e) => {
  if (at)
    return $n(e);
};
function k1(e) {
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
function T1(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const E1 = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = S1(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = R(() => {
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
  }), a = Qn(), s = U({
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
  return ge(o, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), ge([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = h1(l, u, c(o)));
  }), Tn(() => {
    i();
  }), {
    state: R(() => {
      var l;
      return { ...((l = c(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: R(() => c(s).styles),
    attributes: R(() => c(s).attributes),
    update: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = c(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: R(() => c(a))
  };
};
function S1(e) {
  const t = Object.keys(e.elements), n = ca(t.map((o) => [o, e.styles[o] || {}])), r = ca(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const A1 = 0, C1 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = xe(fl, void 0), a = U(), s = U(), i = R(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = R(() => {
    var d;
    const S = c(a), I = (d = c(s)) != null ? d : A1;
    return {
      name: "arrow",
      enabled: !Hb(S),
      options: {
        element: S,
        padding: I
      }
    };
  }), u = R(() => ({
    onFirstUpdate: () => {
      h();
    },
    ..._1(e, [
      c(l),
      c(i)
    ])
  })), f = R(() => w1(e.referenceEl) || c(r)), { attributes: p, state: m, styles: v, update: h, forceUpdate: g, instanceRef: A } = E1(f, n, u);
  return ge(A, (d) => t.value = d), nt(() => {
    ge(() => {
      var d;
      return (d = c(f)) == null ? void 0 : d.getBoundingClientRect();
    }, () => {
      h();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: A,
    state: m,
    styles: v,
    role: o,
    forceUpdate: g,
    update: h
  };
}, O1 = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Gu(), a = st("popper"), s = R(() => c(t).popper), i = U(Le(e.zIndex) ? e.zIndex : o()), l = R(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = R(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), f = R(() => r.value === "dialog" ? "false" : void 0), p = R(() => c(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: p,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Le(e.zIndex) ? e.zIndex : o();
    }
  };
}, L1 = ne({
  name: "ElPopperContent"
}), I1 = /* @__PURE__ */ ne({
  ...L1,
  props: xf,
  emits: b1,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = y1(r, n), { attributes: p, arrowRef: m, contentRef: v, styles: h, instanceRef: g, role: A, update: d } = C1(r), {
      ariaModal: S,
      arrowStyle: I,
      contentAttrs: E,
      contentClass: y,
      contentStyle: O,
      updateZIndex: L
    } = O1(r, {
      styles: h,
      attributes: p,
      role: A
    }), H = xe(pa, void 0), G = U();
    _n(pf, {
      arrowStyle: I,
      arrowRef: m,
      arrowOffset: G
    }), H && _n(pa, {
      ...H,
      addInputId: yo,
      removeInputId: yo
    });
    let ee;
    const ue = (fe = !0) => {
      d(), fe && L();
    }, te = () => {
      ue(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return nt(() => {
      ge(() => r.triggerTargetEl, (fe, de) => {
        ee?.(), ee = void 0;
        const P = c(fe || v.value), D = c(de || v.value);
        rn(P) && (ee = ge([A, () => r.ariaLabel, S, () => r.id], (B) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((le, J) => {
            Fn(B[J]) ? P.removeAttribute(le) : P.setAttribute(le, B[J]);
          });
        }, { immediate: !0 })), D !== P && rn(D) && ["role", "aria-label", "aria-modal", "id"].forEach((B) => {
          D.removeAttribute(B);
        });
      }, { immediate: !0 }), ge(() => r.visible, te, { immediate: !0 });
    }), Tn(() => {
      ee?.(), ee = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: g,
      updatePopper: ue,
      contentStyle: O
    }), (fe, de) => (N(), K("div", Rr({
      ref_key: "contentRef",
      ref: v
    }, c(E), {
      style: c(O),
      class: c(y),
      tabindex: "-1",
      onMouseenter: (P) => fe.$emit("mouseenter", P),
      onMouseleave: (P) => fe.$emit("mouseleave", P)
    }), [
      F(c(p_), {
        trapped: c(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(v),
        "focus-start-el": c(o),
        onFocusAfterTrapped: c(i),
        onFocusAfterReleased: c(s),
        onFocusin: c(l),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(f)
      }, {
        default: oe(() => [
          he(fe.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var R1 = /* @__PURE__ */ He(I1, [["__file", "content.vue"]]);
const x1 = sn(Uy), kl = Symbol("elTooltip");
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
const N1 = Be({
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
}), P1 = ({
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
        Le(p) && p > 0 && s(() => {
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
  ...N1,
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
}), $1 = Oa({
  type: pe(Boolean),
  default: null
}), M1 = Oa({
  type: pe(Function)
}), D1 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: $1,
    [n]: M1
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
      const m = Rt(), { emit: v } = m, h = m.props, g = R(() => qe(h[n])), A = R(() => h[e] === null), d = (L) => {
        s.value !== !0 && (s.value = !0, i && (i.value = L), qe(f) && f(L));
      }, S = (L) => {
        s.value !== !1 && (s.value = !1, i && (i.value = L), qe(p) && p(L));
      }, I = (L) => {
        if (h.disabled === !0 || qe(u) && !u())
          return;
        const H = g.value && at;
        H && v(t, !0), (A.value || !H) && d(L);
      }, E = (L) => {
        if (h.disabled === !0 || !at)
          return;
        const H = g.value && at;
        H && v(t, !1), (A.value || !H) && S(L);
      }, y = (L) => {
        Jn(L) && (h.disabled && L ? g.value && v(t, !1) : s.value !== L && (L ? d() : S()));
      }, O = () => {
        s.value ? E() : I();
      };
      return ge(() => h[e], y), l && m.appContext.config.globalProperties.$route !== void 0 && ge(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && s.value && E();
      }), nt(() => {
        y(h[e]);
      }), {
        hide: E,
        show: I,
        toggle: O,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: F1,
  useModelToggleEmits: z1,
  useModelToggle: B1
} = D1("visible"), V1 = Be({
  ...mf,
  ...F1,
  ...Tl,
  ...Nf,
  ...hf,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), j1 = [
  ...z1,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], U1 = (e, t) => mn(e) ? e.includes(t) : e === t, Er = (e, t, n) => (r) => {
  U1(c(e), t) && n(r);
}, In = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, H1 = ne({
  name: "ElTooltipTrigger"
}), W1 = /* @__PURE__ */ ne({
  ...H1,
  props: Nf,
  setup(e, { expose: t }) {
    const n = e, r = st("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = xe(kl, void 0), f = U(null), p = () => {
      if (c(o) || n.disabled)
        return !0;
    }, m = xn(n, "trigger"), v = In(p, Er(m, "hover", i)), h = In(p, Er(m, "hover", l)), g = In(p, Er(m, "click", (E) => {
      E.button === 0 && u(E);
    })), A = In(p, Er(m, "focus", i)), d = In(p, Er(m, "focus", l)), S = In(p, Er(m, "contextmenu", (E) => {
      E.preventDefault(), u(E);
    })), I = In(p, (E) => {
      const { code: y } = E;
      n.triggerKeys.includes(y) && (E.preventDefault(), u(E));
    });
    return t({
      triggerRef: f
    }), (E, y) => (N(), se(c(Jy), {
      id: c(a),
      "virtual-ref": E.virtualRef,
      open: c(s),
      "virtual-triggering": E.virtualTriggering,
      class: W(c(r).e("trigger")),
      onBlur: c(d),
      onClick: c(g),
      onContextmenu: c(S),
      onFocus: c(A),
      onMouseenter: c(v),
      onMouseleave: c(h),
      onKeydown: c(I)
    }, {
      default: oe(() => [
        he(E.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var G1 = /* @__PURE__ */ He(W1, [["__file", "trigger.vue"]]);
const K1 = Be({
  to: {
    type: pe([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Y1 = /* @__PURE__ */ ne({
  __name: "teleport",
  props: K1,
  setup(e) {
    return (t, n) => t.disabled ? he(t.$slots, "default", { key: 0 }) : (N(), se(sd, {
      key: 1,
      to: t.to
    }, [
      he(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var q1 = /* @__PURE__ */ He(Y1, [["__file", "teleport.vue"]]);
const Z1 = sn(q1), Pf = () => {
  const e = Ys(), t = cf(), n = R(() => `${e.value}-popper-container-${t.prefix}`), r = R(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, X1 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Q1 = () => {
  const { id: e, selector: t } = Pf();
  return ld(() => {
    at && (document.body.querySelector(t.value) || X1(e.value));
  }), {
    id: e,
    selector: t
  };
}, J1 = ne({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), ew = /* @__PURE__ */ ne({
  ...J1,
  props: Tl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Pf(), o = st("tooltip"), a = U();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: f,
      onClose: p,
      onOpen: m,
      onShow: v,
      onHide: h,
      onBeforeShow: g,
      onBeforeHide: A
    } = xe(kl, void 0), d = R(() => n.transition || `${o.namespace.value}-fade-in-linear`), S = R(() => n.persistent);
    Tn(() => {
      s?.();
    });
    const I = R(() => c(S) ? !0 : c(u)), E = R(() => n.disabled ? !1 : c(u)), y = R(() => n.appendTo || r.value), O = R(() => {
      var B;
      return (B = n.style) != null ? B : {};
    }), L = U(!0), H = () => {
      h(), D() && Ln(document.body), L.value = !0;
    }, G = () => {
      if (c(i))
        return !0;
    }, ee = In(G, () => {
      n.enterable && c(f) === "hover" && m();
    }), ue = In(G, () => {
      c(f) === "hover" && p();
    }), te = () => {
      var B, le;
      (le = (B = a.value) == null ? void 0 : B.updatePopper) == null || le.call(B), g?.();
    }, fe = () => {
      A?.();
    }, de = () => {
      v(), s = l0(R(() => {
        var B;
        return (B = a.value) == null ? void 0 : B.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(f) !== "hover" && p();
      });
    }, P = () => {
      n.virtualTriggering || p();
    }, D = (B) => {
      var le;
      const J = (le = a.value) == null ? void 0 : le.popperContentRef, ve = B?.relatedTarget || document.activeElement;
      return J?.contains(ve);
    };
    return ge(() => c(u), (B) => {
      B ? L.value = !1 : s?.();
    }, {
      flush: "post"
    }), ge(() => n.content, () => {
      var B, le;
      (le = (B = a.value) == null ? void 0 : B.updatePopper) == null || le.call(B);
    }), t({
      contentRef: a,
      isFocusInsideContent: D
    }), (B, le) => (N(), se(c(Z1), {
      disabled: !B.teleported,
      to: c(y)
    }, {
      default: oe(() => [
        F(Ur, {
          name: c(d),
          onAfterLeave: H,
          onBeforeEnter: te,
          onAfterEnter: de,
          onBeforeLeave: fe
        }, {
          default: oe(() => [
            c(I) ? gt((N(), se(c(R1), Rr({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, B.$attrs, {
              "aria-label": B.ariaLabel,
              "aria-hidden": L.value,
              "boundaries-padding": B.boundariesPadding,
              "fallback-placements": B.fallbackPlacements,
              "gpu-acceleration": B.gpuAcceleration,
              offset: B.offset,
              placement: B.placement,
              "popper-options": B.popperOptions,
              strategy: B.strategy,
              effect: B.effect,
              enterable: B.enterable,
              pure: B.pure,
              "popper-class": B.popperClass,
              "popper-style": [B.popperStyle, c(O)],
              "reference-el": B.referenceEl,
              "trigger-target-el": B.triggerTargetEl,
              visible: c(E),
              "z-index": B.zIndex,
              onMouseenter: c(ee),
              onMouseleave: c(ue),
              onBlur: P,
              onClose: c(p)
            }), {
              default: oe(() => [
                he(B.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Bn, c(E)]
            ]) : Q("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var tw = /* @__PURE__ */ He(ew, [["__file", "content.vue"]]);
const nw = ne({
  name: "ElTooltip"
}), rw = /* @__PURE__ */ ne({
  ...nw,
  props: V1,
  emits: j1,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Q1();
    const o = Ia(), a = U(), s = U(), i = () => {
      var d;
      const S = c(a);
      S && ((d = S.popperInstanceRef) == null || d.update());
    }, l = U(!1), u = U(), { show: f, hide: p, hasUpdateHandler: m } = B1({
      indicator: l,
      toggleReason: u
    }), { onOpen: v, onClose: h } = P1({
      showAfter: xn(r, "showAfter"),
      hideAfter: xn(r, "hideAfter"),
      autoClose: xn(r, "autoClose"),
      open: f,
      close: p
    }), g = R(() => Jn(r.visible) && !m.value);
    _n(kl, {
      controlled: g,
      id: o,
      open: Ls(l),
      trigger: xn(r, "trigger"),
      onOpen: (d) => {
        v(d);
      },
      onClose: (d) => {
        h(d);
      },
      onToggle: (d) => {
        c(l) ? h(d) : v(d);
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
    }), ge(() => r.disabled, (d) => {
      d && l.value && (l.value = !1);
    });
    const A = (d) => {
      var S;
      return (S = s.value) == null ? void 0 : S.isFocusInsideContent(d);
    };
    return id(() => l.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: A,
      updatePopper: i,
      onOpen: v,
      onClose: h,
      hide: p
    }), (d, S) => (N(), se(c(x1), {
      ref_key: "popperRef",
      ref: a,
      role: d.role
    }, {
      default: oe(() => [
        F(G1, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: oe(() => [
            d.$slots.default ? he(d.$slots, "default", { key: 0 }) : Q("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        F(tw, {
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
            he(d.$slots, "content", {}, () => [
              d.rawContent ? (N(), K("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, ["innerHTML"])) : (N(), K("span", { key: 1 }, j(d.content), 1))
            ]),
            d.showArrow ? (N(), se(c(Gy), {
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
var ow = /* @__PURE__ */ He(rw, [["__file", "tooltip.vue"]]);
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
    const n = e, r = st("badge"), o = R(() => n.isDot ? "" : Le(n.value) && Le(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = R(() => {
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
    }), (s, i) => (N(), K("div", {
      class: W(c(r).b())
    }, [
      he(s.$slots, "default"),
      F(Ur, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: oe(() => [
          gt(w("sup", {
            class: W([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: yt(c(a))
          }, [
            he(s.$slots, "content", { value: c(o) }, () => [
              Wt(j(c(o)), 1)
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
var cw = /* @__PURE__ */ He(iw, [["__file", "badge.vue"]]);
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
    const n = e, r = Oo(), o = st("tag"), a = R(() => {
      const { type: u, hit: f, effect: p, closable: m, round: v } = n;
      return [
        o.b(),
        o.is("closable", m),
        o.m(u || "primary"),
        o.m(r.value),
        o.m(p),
        o.is("hit", f),
        o.is("round", v)
      ];
    }), s = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, l = (u) => {
      var f, p, m;
      (m = (p = (f = u?.component) == null ? void 0 : f.subTree) == null ? void 0 : p.component) != null && m.bum && (u.component.subTree.component.bum = null);
    };
    return (u, f) => u.disableTransitions ? (N(), K("span", {
      key: 0,
      class: W(c(a)),
      style: yt({ backgroundColor: u.color }),
      onClick: i
    }, [
      w("span", {
        class: W(c(o).e("content"))
      }, [
        he(u.$slots, "default")
      ], 2),
      u.closable ? (N(), se(c(ot), {
        key: 0,
        class: W(c(o).e("close")),
        onClick: Ke(s, ["stop"])
      }, {
        default: oe(() => [
          F(c(fa))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : Q("v-if", !0)
    ], 6)) : (N(), se(Ur, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: oe(() => [
        w("span", {
          class: W(c(a)),
          style: yt({ backgroundColor: u.color }),
          onClick: i
        }, [
          w("span", {
            class: W(c(o).e("content"))
          }, [
            he(u.$slots, "default")
          ], 2),
          u.closable ? (N(), se(c(ot), {
            key: 0,
            class: W(c(o).e("close")),
            onClick: Ke(s, ["stop"])
          }, {
            default: oe(() => [
              F(c(fa))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Q("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var hw = /* @__PURE__ */ He(mw, [["__file", "tag.vue"]]);
const gw = sn(hw), Yn = /* @__PURE__ */ new Map();
if (at) {
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
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, f = e.contains(s) || e.contains(i), p = e === s, m = n.length && n.some((h) => h?.contains(s)) || n.length && n.includes(i), v = a && (a.contains(s) || a.contains(i));
    l || u || f || p || m || v || t.value(r, o);
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
    ge(() => e.message, (r) => {
      Object.assign(Qt, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ef(e);
    return () => he(t, "default", { config: n?.value });
  }
});
const yw = 100, _w = 600, kc = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = yw, delay: o = _w } = qe(n) ? {} : n;
    let a, s;
    const i = () => qe(n) ? n() : n.handler(), l = () => {
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
    validator: (e) => e === null || Le(e) || ["min", "max"].includes(e),
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
  [zn]: (e) => Le(e) || Fn(e),
  [ht]: (e) => Le(e) || Fn(e)
}, Tw = ne({
  name: "ElInputNumber"
}), Ew = /* @__PURE__ */ ne({
  ...Tw,
  props: ww,
  emits: kw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = ol(), a = st("input-number"), s = U(), i = ur({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = Ra(), u = R(() => Le(r.modelValue) && r.modelValue <= r.min), f = R(() => Le(r.modelValue) && r.modelValue >= r.max), p = R(() => {
      const P = d(r.step);
      return hn(r.precision) ? Math.max(d(r.modelValue), P) : (P > r.precision, r.precision);
    }), m = R(() => r.controls && r.controlsPosition === "right"), v = Oo(), h = cl(), g = R(() => {
      if (i.userInput !== null)
        return i.userInput;
      let P = i.currentValue;
      if (Fn(P))
        return "";
      if (Le(P)) {
        if (Number.isNaN(P))
          return "";
        hn(r.precision) || (P = P.toFixed(r.precision));
      }
      return P;
    }), A = (P, D) => {
      if (hn(D) && (D = p.value), D === 0)
        return Math.round(P);
      let B = String(P);
      const le = B.indexOf(".");
      if (le === -1 || !B.replace(".", "").split("")[le + D])
        return P;
      const Z = B.length;
      return B.charAt(Z - 1) === "5" && (B = `${B.slice(0, Math.max(0, Z - 1))}6`), Number.parseFloat(Number(B).toFixed(D));
    }, d = (P) => {
      if (Fn(P))
        return 0;
      const D = P.toString(), B = D.indexOf(".");
      let le = 0;
      return B !== -1 && (le = D.length - B - 1), le;
    }, S = (P, D = 1) => Le(P) ? A(P + r.step * D) : i.currentValue, I = () => {
      if (r.readonly || h.value || f.value)
        return;
      const P = Number(g.value) || 0, D = S(P);
      O(D), n(zn, i.currentValue), fe();
    }, E = () => {
      if (r.readonly || h.value || u.value)
        return;
      const P = Number(g.value) || 0, D = S(P, -1);
      O(D), n(zn, i.currentValue), fe();
    }, y = (P, D) => {
      const { max: B, min: le, step: J, precision: ve, stepStrictly: Z, valueOnClear: Ve } = r;
      B < le && rl("InputNumber", "min should not be greater than max.");
      let Te = Number(P);
      if (Fn(P) || Number.isNaN(Te))
        return null;
      if (P === "") {
        if (Ve === null)
          return null;
        Te = St(Ve) ? { min: le, max: B }[Ve] : Ve;
      }
      return Z && (Te = A(Math.round(Te / J) * J, ve), Te !== P && D && n(ht, Te)), hn(ve) || (Te = A(Te, ve)), (Te > B || Te < le) && (Te = Te > B ? B : le, D && n(ht, Te)), Te;
    }, O = (P, D = !0) => {
      var B;
      const le = i.currentValue, J = y(P);
      if (!D) {
        n(ht, J);
        return;
      }
      le === J && P || (i.userInput = null, n(ht, J), le !== J && n(Vn, J, le), r.validateEvent && ((B = l?.validate) == null || B.call(l, "change").catch((ve) => void 0)), i.currentValue = J);
    }, L = (P) => {
      i.userInput = P;
      const D = P === "" ? null : Number(P);
      n(zn, D), O(D, !1);
    }, H = (P) => {
      const D = P !== "" ? Number(P) : "";
      (Le(D) && !Number.isNaN(D) || P === "") && O(D), fe(), i.userInput = null;
    }, G = () => {
      var P, D;
      (D = (P = s.value) == null ? void 0 : P.focus) == null || D.call(P);
    }, ee = () => {
      var P, D;
      (D = (P = s.value) == null ? void 0 : P.blur) == null || D.call(P);
    }, ue = (P) => {
      n("focus", P);
    }, te = (P) => {
      var D, B;
      i.userInput = null, sf() && i.currentValue === null && ((D = s.value) != null && D.input) && (s.value.input.value = ""), n("blur", P), r.validateEvent && ((B = l?.validate) == null || B.call(l, "blur").catch((le) => void 0));
    }, fe = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, de = (P) => {
      document.activeElement === P.target && P.preventDefault();
    };
    return ge(() => r.modelValue, (P, D) => {
      const B = y(P, !0);
      i.userInput === null && B !== D && (i.currentValue = B);
    }, { immediate: !0 }), nt(() => {
      var P;
      const { min: D, max: B, modelValue: le } = r, J = (P = s.value) == null ? void 0 : P.input;
      if (J.setAttribute("role", "spinbutton"), Number.isFinite(B) ? J.setAttribute("aria-valuemax", String(B)) : J.removeAttribute("aria-valuemax"), Number.isFinite(D) ? J.setAttribute("aria-valuemin", String(D)) : J.removeAttribute("aria-valuemin"), J.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), J.setAttribute("aria-disabled", String(h.value)), !Le(le) && le != null) {
        let ve = Number(le);
        Number.isNaN(ve) && (ve = null), n(ht, ve);
      }
      J.addEventListener("wheel", de, { passive: !1 });
    }), jc(() => {
      var P, D;
      const B = (P = s.value) == null ? void 0 : P.input;
      B?.setAttribute("aria-valuenow", `${(D = i.currentValue) != null ? D : ""}`);
    }), t({
      focus: G,
      blur: ee
    }), (P, D) => (N(), K("div", {
      class: W([
        c(a).b(),
        c(a).m(c(v)),
        c(a).is("disabled", c(h)),
        c(a).is("without-controls", !P.controls),
        c(a).is("controls-right", c(m))
      ]),
      onDragstart: Ke(() => {
      }, ["prevent"])
    }, [
      P.controls ? gt((N(), K("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: W([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: Gt(E, ["enter"])
      }, [
        he(P.$slots, "decrease-icon", {}, () => [
          F(c(ot), null, {
            default: oe(() => [
              c(m) ? (N(), se(c(rf), { key: 0 })) : (N(), se(c(X0), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(kc), E]
      ]) : Q("v-if", !0),
      P.controls ? gt((N(), K("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: W([c(a).e("increase"), c(a).is("disabled", c(f))]),
        onKeydown: Gt(I, ["enter"])
      }, [
        he(P.$slots, "increase-icon", {}, () => [
          F(c(ot), null, {
            default: oe(() => [
              c(m) ? (N(), se(c(F0), { key: 0 })) : (N(), se(c(J0), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(kc), I]
      ]) : Q("v-if", !0),
      F(c(Ey), {
        id: P.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: P.step,
        "model-value": c(g),
        placeholder: P.placeholder,
        readonly: P.readonly,
        disabled: c(h),
        size: c(v),
        max: P.max,
        min: P.min,
        name: P.name,
        "aria-label": P.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          Gt(Ke(I, ["prevent"]), ["up"]),
          Gt(Ke(E, ["prevent"]), ["down"])
        ],
        onBlur: te,
        onFocus: ue,
        onInput: L,
        onChange: H
      }, cd({
        _: 2
      }, [
        P.$slots.prefix ? {
          name: "prefix",
          fn: oe(() => [
            he(P.$slots, "prefix")
          ])
        } : void 0,
        P.$slots.suffix ? {
          name: "suffix",
          fn: oe(() => [
            he(P.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Sw = /* @__PURE__ */ He(Ew, [["__file", "input-number.vue"]]);
const Aw = sn(Sw);
function Cw() {
  const e = Qn(), t = U(0), n = 11, r = R(() => ({
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
  const n = xe($a), r = xe($f, { disabled: !1 }), o = R(() => f(Zn(n.props.modelValue), e.value)), a = R(() => {
    var v;
    if (n.props.multiple) {
      const h = Zn((v = n.props.modelValue) != null ? v : []);
      return !o.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = R(() => e.label || (Bt(e.value) ? "" : e.value)), i = R(() => e.value || e.label || ""), l = R(() => e.disabled || t.groupDisabled || a.value), u = Rt(), f = (v = [], h) => {
    if (Bt(e.value)) {
      const g = n.props.valueKey;
      return v && v.some((A) => ud(Xn(A, g)) === Xn(h, g));
    } else
      return v && v.includes(h);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, m = (v) => {
    const h = new RegExp(fw(v), "i");
    t.visible = h.test(s.value) || e.created;
  };
  return ge(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ge(() => e.value, (v, h) => {
    const { remote: g, valueKey: A } = n.props;
    if ((g ? v !== h : !co(v, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !g) {
      if (A && Bt(v) && Bt(h) && v[A] === h[A])
        return;
      n.setSelected();
    }
  }), ge(() => r.disabled, () => {
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
    const t = st("select"), n = Ia(), r = R(() => [
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
    } = Ow(e, o), { visible: p, hover: m } = Is(o), v = Rt().proxy;
    l.onOptionCreate(v), Tn(() => {
      const g = v.value, { selected: A } = l.states, d = A.some((S) => S.value === v.value);
      Je(() => {
        l.states.cachedOptions.get(g) === v && !d && l.states.cachedOptions.delete(g);
      }), l.onOptionDestroy(g, v);
    });
    function h() {
      i.value || l.handleOptionSelect(v);
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
      selectOptionClick: h,
      states: o
    };
  }
});
function Iw(e, t, n, r, o, a) {
  return gt((N(), K("li", {
    id: e.id,
    class: W(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Ke(e.selectOptionClick, ["stop"])
  }, [
    he(e.$slots, "default", {}, () => [
      w("span", null, j(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Bn, e.visible]
  ]);
}
var El = /* @__PURE__ */ He(Lw, [["render", Iw], ["__file", "option.vue"]]);
const Rw = ne({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = xe($a), t = st("select"), n = R(() => e.props.popperClass), r = R(() => e.props.multiple), o = R(() => e.props.fitInputWidth), a = U("");
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
  return N(), K("div", {
    class: W([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: yt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (N(), K("div", {
      key: 0,
      class: W(e.ns.be("dropdown", "header"))
    }, [
      he(e.$slots, "header")
    ], 2)) : Q("v-if", !0),
    he(e.$slots, "default"),
    e.$slots.footer ? (N(), K("div", {
      key: 1,
      class: W(e.ns.be("dropdown", "footer"))
    }, [
      he(e.$slots, "footer")
    ], 2)) : Q("v-if", !0)
  ], 6);
}
var Nw = /* @__PURE__ */ He(Rw, [["render", xw], ["__file", "select-dropdown.vue"]]);
const Pw = (e, t) => {
  const { t: n } = ol(), r = Ia(), o = st("select"), a = st("input"), s = ur({
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
  }), i = U(null), l = U(null), u = U(null), f = U(null), p = U(null), m = U(null), v = U(null), h = U(null), g = U(null), A = U(null), d = U(null), {
    isComposing: S,
    handleCompositionStart: I,
    handleCompositionUpdate: E,
    handleCompositionEnd: y
  } = df({
    afterComposition: (x) => Ie(x)
  }), { wrapperRef: O, isFocused: L, handleBlur: H } = ff(p, {
    beforeFocus() {
      return D.value;
    },
    afterFocus() {
      e.automaticDropdown && !G.value && (G.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(x) {
      var q, ye;
      return ((q = u.value) == null ? void 0 : q.isFocusInsideContent(x)) || ((ye = f.value) == null ? void 0 : ye.isFocusInsideContent(x));
    },
    afterBlur() {
      G.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), G = U(!1), ee = U(), { form: ue, formItem: te } = Ra(), { inputId: fe } = il(e, {
    formItemContext: te
  }), { valueOnClear: de, isEmptyValue: P } = L0(e), D = R(() => e.disabled || ue?.disabled), B = R(() => mn(e.modelValue) ? e.modelValue.length > 0 : !P(e.modelValue)), le = R(() => {
    var x;
    return (x = ue?.statusIcon) != null ? x : !1;
  }), J = R(() => e.clearable && !D.value && s.inputHovering && B.value), ve = R(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Z = R(() => o.is("reverse", ve.value && G.value)), Ve = R(() => te?.validateState || ""), Te = R(() => af[Ve.value]), me = R(() => e.remote ? 300 : 0), je = R(() => e.remote && !s.inputValue && s.options.size === 0), _e = R(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && We.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), We = R(() => ie.value.filter((x) => x.visible).length), ie = R(() => {
    const x = Array.from(s.options.values()), q = [];
    return s.optionValues.forEach((ye) => {
      const Xe = x.findIndex((dt) => dt.value === ye);
      Xe > -1 && q.push(x[Xe]);
    }), q.length >= x.length ? q : x;
  }), Ze = R(() => Array.from(s.cachedOptions.values())), it = R(() => {
    const x = ie.value.filter((q) => !q.created).some((q) => q.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !x;
  }), Ue = () => {
    e.filterable && qe(e.filterMethod) || e.filterable && e.remote && qe(e.remoteMethod) || ie.value.forEach((x) => {
      var q;
      (q = x.updateOption) == null || q.call(x, s.inputValue);
    });
  }, vt = Oo(), rt = R(() => ["small"].includes(vt.value) ? "small" : "default"), ct = R({
    get() {
      return G.value && !je.value;
    },
    set(x) {
      G.value = x;
    }
  }), ut = R(() => {
    if (e.multiple && !hn(e.modelValue))
      return Zn(e.modelValue).length === 0 && !s.inputValue;
    const x = mn(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || hn(x) ? !s.inputValue : !0;
  }), Ge = R(() => {
    var x;
    const q = (x = e.placeholder) != null ? x : n("el.select.placeholder");
    return e.multiple || !B.value ? q : s.selectedLabel;
  }), ft = R(() => ws ? null : "mouseenter");
  ge(() => e.modelValue, (x, q) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", k("")), T(), !co(x, q) && e.validateEvent && te?.validate("change").catch((ye) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ge(() => G.value, (x) => {
    x ? k(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", x);
  }), ge(() => s.options.entries(), () => {
    at && (T(), e.defaultFirstOption && (e.filterable || e.remote) && We.value && C());
  }, {
    flush: "post"
  }), ge([() => s.hoveringIndex, ie], ([x]) => {
    Le(x) && x > -1 ? ee.value = ie.value[x] || {} : ee.value = {}, ie.value.forEach((q) => {
      q.hover = ee.value === q;
    });
  }), Vc(() => {
    s.isBeforeHide || Ue();
  });
  const k = (x) => {
    s.previousQuery === x || S.value || (s.previousQuery = x, e.filterable && qe(e.filterMethod) ? e.filterMethod(x) : e.filterable && e.remote && qe(e.remoteMethod) && e.remoteMethod(x), e.defaultFirstOption && (e.filterable || e.remote) && We.value ? Je(C) : Je(V));
  }, C = () => {
    const x = ie.value.filter((dt) => dt.visible && !dt.disabled && !dt.states.groupDisabled), q = x.find((dt) => dt.created), ye = x[0], Xe = ie.value.map((dt) => dt.value);
    s.hoveringIndex = ar(Xe, q || ye);
  }, T = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const q = mn(e.modelValue) ? e.modelValue[0] : e.modelValue, ye = $(q);
      s.selectedLabel = ye.currentLabel, s.selected = [ye];
      return;
    }
    const x = [];
    hn(e.modelValue) || Zn(e.modelValue).forEach((q) => {
      x.push($(q));
    }), s.selected = x;
  }, $ = (x) => {
    let q;
    const ye = oh(x);
    for (let Ut = s.cachedOptions.size - 1; Ut >= 0; Ut--) {
      const zt = Ze.value[Ut];
      if (ye ? Xn(zt.value, e.valueKey) === Xn(x, e.valueKey) : zt.value === x) {
        q = {
          value: x,
          currentLabel: zt.currentLabel,
          get isDisabled() {
            return zt.isDisabled;
          }
        };
        break;
      }
    }
    if (q)
      return q;
    const Xe = ye ? x.label : x ?? "";
    return {
      value: x,
      currentLabel: Xe
    };
  }, V = () => {
    s.hoveringIndex = ie.value.findIndex((x) => s.selected.some((q) => De(q) === De(x)));
  }, Y = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, _ = () => {
    s.collapseItemWidth = A.value.getBoundingClientRect().width;
  }, M = () => {
    var x, q;
    (q = (x = u.value) == null ? void 0 : x.updatePopper) == null || q.call(x);
  }, ce = () => {
    var x, q;
    (q = (x = f.value) == null ? void 0 : x.updatePopper) == null || q.call(x);
  }, be = () => {
    s.inputValue.length > 0 && !G.value && (G.value = !0), k(s.inputValue);
  }, Ie = (x) => {
    if (s.inputValue = x.target.value, e.remote)
      $e();
    else
      return be();
  }, $e = jb(() => {
    be();
  }, me.value), Me = (x) => {
    co(e.modelValue, x) || t(Vn, x);
  }, or = (x) => Ub(x, (q) => {
    const ye = s.cachedOptions.get(q);
    return ye && !ye.disabled && !ye.states.groupDisabled;
  }), Wr = (x) => {
    if (e.multiple && x.code !== bn.delete && x.target.value.length <= 0) {
      const q = Zn(e.modelValue).slice(), ye = or(q);
      if (ye < 0)
        return;
      const Xe = q[ye];
      q.splice(ye, 1), t(ht, q), Me(q), t("remove-tag", Xe);
    }
  }, Ro = (x, q) => {
    const ye = s.selected.indexOf(q);
    if (ye > -1 && !D.value) {
      const Xe = Zn(e.modelValue).slice();
      Xe.splice(ye, 1), t(ht, Xe), Me(Xe), t("remove-tag", q.value);
    }
    x.stopPropagation(), _r();
  }, yr = (x) => {
    x.stopPropagation();
    const q = e.multiple ? [] : de.value;
    if (e.multiple)
      for (const ye of s.selected)
        ye.isDisabled && q.push(ye.value);
    t(ht, q), Me(q), s.hoveringIndex = -1, G.value = !1, t("clear"), _r();
  }, Gr = (x) => {
    var q;
    if (e.multiple) {
      const ye = Zn((q = e.modelValue) != null ? q : []).slice(), Xe = ar(ye, x);
      Xe > -1 ? ye.splice(Xe, 1) : (e.multipleLimit <= 0 || ye.length < e.multipleLimit) && ye.push(x.value), t(ht, ye), Me(ye), x.created && k(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(ht, x.value), Me(x.value), G.value = !1;
    _r(), !G.value && Je(() => {
      Sn(x);
    });
  }, ar = (x = [], q) => hn(q) ? -1 : Bt(q.value) ? x.findIndex((ye) => co(Xn(ye, e.valueKey), De(q))) : x.indexOf(q.value), Sn = (x) => {
    var q, ye, Xe, dt, Ut;
    const zt = mn(x) ? x[0] : x;
    let Pt = null;
    if (zt?.value) {
      const Kn = ie.value.filter((Mo) => Mo.value === zt.value);
      Kn.length > 0 && (Pt = Kn[0].$el);
    }
    if (u.value && Pt) {
      const Kn = (dt = (Xe = (ye = (q = u.value) == null ? void 0 : q.popperRef) == null ? void 0 : ye.contentRef) == null ? void 0 : Xe.querySelector) == null ? void 0 : dt.call(Xe, `.${o.be("dropdown", "wrap")}`);
      Kn && R0(Kn, Pt);
    }
    (Ut = d.value) == null || Ut.handleScroll();
  }, jt = (x) => {
    s.options.set(x.value, x), s.cachedOptions.set(x.value, x);
  }, Wn = (x, q) => {
    s.options.get(x) === q && s.options.delete(x);
  }, Kr = R(() => {
    var x, q;
    return (q = (x = u.value) == null ? void 0 : x.popperRef) == null ? void 0 : q.contentRef;
  }), Yr = () => {
    s.isBeforeHide = !1, Je(() => {
      var x;
      (x = d.value) == null || x.update(), Sn(s.selected);
    });
  }, _r = () => {
    var x;
    (x = p.value) == null || x.focus();
  }, qr = () => {
    var x;
    if (G.value) {
      G.value = !1, Je(() => {
        var q;
        return (q = p.value) == null ? void 0 : q.blur();
      });
      return;
    }
    (x = p.value) == null || x.blur();
  }, Zr = (x) => {
    yr(x);
  }, Ma = (x) => {
    if (G.value = !1, L.value) {
      const q = new FocusEvent("focus", x);
      Je(() => H(q));
    }
  }, sr = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : G.value = !1;
  }, xo = () => {
    D.value || (ws && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : G.value = !G.value);
  }, Da = () => {
    if (!G.value)
      xo();
    else {
      const x = ie.value[s.hoveringIndex];
      x && !x.isDisabled && Gr(x);
    }
  }, De = (x) => Bt(x.value) ? Xn(x.value, e.valueKey) : x.value, Gn = R(() => ie.value.filter((x) => x.visible).every((x) => x.isDisabled)), Fa = R(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), No = R(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), wr = (x) => {
    if (!G.value) {
      G.value = !0;
      return;
    }
    if (!(s.options.size === 0 || We.value === 0 || S.value) && !Gn.value) {
      x === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : x === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const q = ie.value[s.hoveringIndex];
      (q.isDisabled || !q.visible) && wr(x), Je(() => Sn(ee.value));
    }
  }, Po = () => {
    if (!l.value)
      return 0;
    const x = window.getComputedStyle(l.value);
    return Number.parseFloat(x.gap || "6px");
  }, $o = R(() => {
    const x = Po();
    return { maxWidth: `${A.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - x : s.selectionWidth}px` };
  }), za = R(() => ({ maxWidth: `${s.selectionWidth}px` })), Ft = (x) => {
    t("popup-scroll", x);
  };
  return pn(l, Y), pn(h, M), pn(O, M), pn(g, ce), pn(A, _), nt(() => {
    T();
  }), {
    inputId: fe,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: L,
    expanded: G,
    optionsArray: ie,
    hoverOption: ee,
    selectSize: vt,
    filteredOptionsCount: We,
    updateTooltip: M,
    updateTagTooltip: ce,
    debouncedOnInputChange: $e,
    onInput: Ie,
    deletePrevTag: Wr,
    deleteTag: Ro,
    deleteSelected: yr,
    handleOptionSelect: Gr,
    scrollToOption: Sn,
    hasModelValue: B,
    shouldShowPlaceholder: ut,
    currentPlaceholder: Ge,
    mouseEnterEventName: ft,
    needStatusIcon: le,
    showClose: J,
    iconComponent: ve,
    iconReverse: Z,
    validateState: Ve,
    validateIcon: Te,
    showNewOption: it,
    updateOptions: Ue,
    collapseTagSize: rt,
    setSelected: T,
    selectDisabled: D,
    emptyText: _e,
    handleCompositionStart: I,
    handleCompositionUpdate: E,
    handleCompositionEnd: y,
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
    suffixRef: v,
    selectRef: i,
    wrapperRef: O,
    selectionRef: l,
    scrollbarRef: d,
    menuRef: h,
    tagMenuRef: g,
    collapseItemRef: A
  };
};
var $w = ne({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = xe($a);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        mn(u) && u.forEach((f) => {
          var p, m, v, h;
          const g = (p = f?.type || {}) == null ? void 0 : p.name;
          g === "ElOptionGroup" ? l(!St(f.children) && !mn(f.children) && qe((m = f.children) == null ? void 0 : m.default) ? (v = f.children) == null ? void 0 : v.default() : f.children) : g === "ElOption" ? i.push((h = f.props) == null ? void 0 : h.value) : mn(f.children) && l(f.children);
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
    ElIcon: ot
  },
  directives: { ClickOutside: vw },
  props: Mw,
  emits: [
    ht,
    Vn,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = R(() => {
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
    const i = R(() => e.multiple ? o.states.selected.map((l) => l.currentLabel) : o.states.selectedLabel);
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
  const s = lr("el-tag"), i = lr("el-tooltip"), l = lr("el-icon"), u = lr("el-option"), f = lr("el-options"), p = lr("el-scrollbar"), m = lr("el-select-menu"), v = fd("click-outside");
  return gt((N(), K("div", {
    ref: "selectRef",
    class: W([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [dd(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
    onMouseleave: (h) => e.states.inputHovering = !1
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
      onHide: (h) => e.states.isBeforeHide = !1
    }, {
      default: oe(() => {
        var h;
        return [
          w("div", {
            ref: "wrapperRef",
            class: W([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Ke(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (N(), K("div", {
              key: 0,
              ref: "prefixRef",
              class: W(e.nsSelect.e("prefix"))
            }, [
              he(e.$slots, "prefix")
            ], 2)) : Q("v-if", !0),
            w("div", {
              ref: "selectionRef",
              class: W([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? he(e.$slots, "tag", { key: 0 }, () => [
                (N(!0), K(Et, null, xr(e.showTagList, (g) => (N(), K("div", {
                  key: e.getValueKey(g),
                  class: W(e.nsSelect.e("selected-item"))
                }, [
                  F(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: yt(e.tagStyle),
                    onClose: (A) => e.deleteTag(A, g)
                  }, {
                    default: oe(() => [
                      w("span", {
                        class: W(e.nsSelect.e("tags-text"))
                      }, [
                        he(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          Wt(j(g.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (N(), se(i, {
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
                      class: W(e.nsSelect.e("selected-item"))
                    }, [
                      F(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: yt(e.collapseTagStyle)
                      }, {
                        default: oe(() => [
                          w("span", {
                            class: W(e.nsSelect.e("tags-text"))
                          }, " + " + j(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: oe(() => [
                    w("div", {
                      ref: "tagMenuRef",
                      class: W(e.nsSelect.e("selection"))
                    }, [
                      (N(!0), K(Et, null, xr(e.collapseTagList, (g) => (N(), K("div", {
                        key: e.getValueKey(g),
                        class: W(e.nsSelect.e("selected-item"))
                      }, [
                        F(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !g.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (A) => e.deleteTag(A, g)
                        }, {
                          default: oe(() => [
                            w("span", {
                              class: W(e.nsSelect.e("tags-text"))
                            }, [
                              he(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                Wt(j(g.currentLabel), 1)
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
                class: W([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                gt(w("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: W([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: yt(e.inputStyle),
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
                    Gt(Ke((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Gt(Ke((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    Gt(Ke(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    Gt(Ke(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    Gt(Ke(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Ke(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [mo, e.states.inputValue]
                ]),
                e.filterable ? (N(), K("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: W(e.nsSelect.e("input-calculator")),
                  textContent: j(e.states.inputValue)
                }, null, 10, ["textContent"])) : Q("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (N(), K("div", {
                key: 1,
                class: W([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? he(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  w("span", null, j(e.currentPlaceholder), 1)
                ]) : (N(), K("span", { key: 1 }, j(e.currentPlaceholder), 1))
              ], 2)) : Q("v-if", !0)
            ], 2),
            w("div", {
              ref: "suffixRef",
              class: W(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (N(), se(l, {
                key: 0,
                class: W([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: oe(() => [
                  (N(), se(Lt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0),
              e.showClose && e.clearIcon ? (N(), se(l, {
                key: 1,
                class: W([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: oe(() => [
                  (N(), se(Lt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : Q("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (N(), se(l, {
                key: 2,
                class: W([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: oe(() => [
                  (N(), se(Lt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: oe(() => [
        F(m, { ref: "menuRef" }, {
          default: oe(() => [
            e.$slots.header ? (N(), K("div", {
              key: 0,
              class: W(e.nsSelect.be("dropdown", "header")),
              onClick: Ke(() => {
              }, ["stop"])
            }, [
              he(e.$slots, "header")
            ], 10, ["onClick"])) : Q("v-if", !0),
            gt(F(p, {
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
              default: oe(() => [
                e.showNewOption ? (N(), se(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : Q("v-if", !0),
                F(f, null, {
                  default: oe(() => [
                    he(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Bn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (N(), K("div", {
              key: 1,
              class: W(e.nsSelect.be("dropdown", "loading"))
            }, [
              he(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (N(), K("div", {
              key: 2,
              class: W(e.nsSelect.be("dropdown", "empty"))
            }, [
              he(e.$slots, "empty", {}, () => [
                w("span", null, j(e.emptyText), 1)
              ])
            ], 2)) : Q("v-if", !0),
            e.$slots.footer ? (N(), K("div", {
              key: 3,
              class: W(e.nsSelect.be("dropdown", "footer")),
              onClick: Ke(() => {
              }, ["stop"])
            }, [
              he(e.$slots, "footer")
            ], 10, ["onClick"])) : Q("v-if", !0)
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
var zw = /* @__PURE__ */ He(Dw, [["render", Fw], ["__file", "select.vue"]]);
const Bw = ne({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = st("select"), n = U(null), r = Rt(), o = U([]);
    _n($f, ur({
      ...Is(e)
    }));
    const a = R(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var f, p;
      return ((f = u.type) == null ? void 0 : f.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, i = (u) => {
      const f = Zn(u), p = [];
      return f.forEach((m) => {
        var v, h;
        s(m) ? p.push(m.component.proxy) : (v = m.children) != null && v.length ? p.push(...i(m.children)) : (h = m.component) != null && h.subTree && p.push(...i(m.component.subTree));
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
  return gt((N(), K("ul", {
    ref: "groupRef",
    class: W(e.ns.be("group", "wrap"))
  }, [
    w("li", {
      class: W(e.ns.be("group", "title"))
    }, j(e.label), 3),
    w("li", null, [
      w("ul", {
        class: W(e.ns.b("group"))
      }, [
        he(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Bn, e.visible]
  ]);
}
var Mf = /* @__PURE__ */ He(Bw, [["render", Vw], ["__file", "option-group.vue"]]);
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
  [ht]: (e) => Jn(e) || St(e) || Le(e),
  [Vn]: (e) => Jn(e) || St(e) || Le(e),
  [zn]: (e) => Jn(e) || St(e) || Le(e)
}, Df = "ElSwitch", Kw = ne({
  name: Df
}), Yw = /* @__PURE__ */ ne({
  ...Kw,
  props: Ww,
  emits: Gw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = Ra(), a = Oo(), s = st("switch"), { inputId: i } = il(r, {
      formItemContext: o
    }), l = cl(R(() => r.loading)), u = U(r.modelValue !== !1), f = U(), p = U(), m = R(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", l.value),
      s.is("checked", d.value)
    ]), v = R(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !d.value)
    ]), h = R(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", d.value)
    ]), g = R(() => ({
      width: Mr(r.width)
    }));
    ge(() => r.modelValue, () => {
      u.value = !0;
    });
    const A = R(() => u.value ? r.modelValue : !1), d = R(() => A.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(A.value) || (n(ht, r.inactiveValue), n(Vn, r.inactiveValue), n(zn, r.inactiveValue)), ge(d, (y) => {
      var O;
      f.value.checked = y, r.validateEvent && ((O = o?.validate) == null || O.call(o, "change").catch((L) => void 0));
    });
    const S = () => {
      const y = d.value ? r.inactiveValue : r.activeValue;
      n(ht, y), n(Vn, y), n(zn, y), Je(() => {
        f.value.checked = d.value;
      });
    }, I = () => {
      if (l.value)
        return;
      const { beforeChange: y } = r;
      if (!y) {
        S();
        return;
      }
      const O = y();
      [
        di(O),
        Jn(O)
      ].includes(!0) || rl(Df, "beforeChange must return type `Promise<boolean>` or `boolean`"), di(O) ? O.then((H) => {
        H && S();
      }).catch((H) => {
      }) : O && S();
    }, E = () => {
      var y, O;
      (O = (y = f.value) == null ? void 0 : y.focus) == null || O.call(y);
    };
    return nt(() => {
      f.value.checked = d.value;
    }), t({
      focus: E,
      checked: d
    }), (y, O) => (N(), K("div", {
      class: W(c(m)),
      onClick: Ke(I, ["prevent"])
    }, [
      w("input", {
        id: c(i),
        ref_key: "input",
        ref: f,
        class: W(c(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": c(d),
        "aria-disabled": c(l),
        "aria-label": y.ariaLabel,
        name: y.name,
        "true-value": y.activeValue,
        "false-value": y.inactiveValue,
        disabled: c(l),
        tabindex: y.tabindex,
        onChange: S,
        onKeydown: Gt(I, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !y.inlinePrompt && (y.inactiveIcon || y.inactiveText) ? (N(), K("span", {
        key: 0,
        class: W(c(v))
      }, [
        y.inactiveIcon ? (N(), se(c(ot), { key: 0 }, {
          default: oe(() => [
            (N(), se(Lt(y.inactiveIcon)))
          ]),
          _: 1
        })) : Q("v-if", !0),
        !y.inactiveIcon && y.inactiveText ? (N(), K("span", {
          key: 1,
          "aria-hidden": c(d)
        }, j(y.inactiveText), 9, ["aria-hidden"])) : Q("v-if", !0)
      ], 2)) : Q("v-if", !0),
      w("span", {
        ref_key: "core",
        ref: p,
        class: W(c(s).e("core")),
        style: yt(c(g))
      }, [
        y.inlinePrompt ? (N(), K("div", {
          key: 0,
          class: W(c(s).e("inner"))
        }, [
          y.activeIcon || y.inactiveIcon ? (N(), se(c(ot), {
            key: 0,
            class: W(c(s).is("icon"))
          }, {
            default: oe(() => [
              (N(), se(Lt(c(d) ? y.activeIcon : y.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : y.activeText || y.inactiveText ? (N(), K("span", {
            key: 1,
            class: W(c(s).is("text")),
            "aria-hidden": !c(d)
          }, j(c(d) ? y.activeText : y.inactiveText), 11, ["aria-hidden"])) : Q("v-if", !0)
        ], 2)) : Q("v-if", !0),
        w("div", {
          class: W(c(s).e("action"))
        }, [
          y.loading ? (N(), se(c(ot), {
            key: 0,
            class: W(c(s).is("loading"))
          }, {
            default: oe(() => [
              F(c(of))
            ]),
            _: 1
          }, 8, ["class"])) : c(d) ? he(y.$slots, "active-action", { key: 1 }, () => [
            y.activeActionIcon ? (N(), se(c(ot), { key: 0 }, {
              default: oe(() => [
                (N(), se(Lt(y.activeActionIcon)))
              ]),
              _: 1
            })) : Q("v-if", !0)
          ]) : c(d) ? Q("v-if", !0) : he(y.$slots, "inactive-action", { key: 2 }, () => [
            y.inactiveActionIcon ? (N(), se(c(ot), { key: 0 }, {
              default: oe(() => [
                (N(), se(Lt(y.inactiveActionIcon)))
              ]),
              _: 1
            })) : Q("v-if", !0)
          ])
        ], 2)
      ], 6),
      !y.inlinePrompt && (y.activeIcon || y.activeText) ? (N(), K("span", {
        key: 1,
        class: W(c(h))
      }, [
        y.activeIcon ? (N(), se(c(ot), { key: 0 }, {
          default: oe(() => [
            (N(), se(Lt(y.activeIcon)))
          ]),
          _: 1
        })) : Q("v-if", !0),
        !y.activeIcon && y.activeText ? (N(), K("span", {
          key: 1,
          "aria-hidden": !c(d)
        }, j(y.activeText), 9, ["aria-hidden"])) : Q("v-if", !0)
      ], 2)) : Q("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var qw = /* @__PURE__ */ He(Yw, [["__file", "switch.vue"]]);
const Zw = sn(qw), Ff = ["success", "info", "warning", "error"], wt = lf({
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
  appendTo: at ? document.body : void 0
}), Xw = Be({
  customClass: {
    type: String,
    default: wt.customClass
  },
  center: {
    type: Boolean,
    default: wt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: wt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: wt.duration
  },
  icon: {
    type: gn,
    default: wt.icon
  },
  id: {
    type: String,
    default: wt.id
  },
  message: {
    type: pe([
      String,
      Object,
      Function
    ]),
    default: wt.message
  },
  onClose: {
    type: pe(Function),
    default: wt.onClose
  },
  showClose: {
    type: Boolean,
    default: wt.showClose
  },
  type: {
    type: String,
    values: Ff,
    default: wt.type
  },
  plain: {
    type: Boolean,
    default: wt.plain
  },
  offset: {
    type: Number,
    default: wt.offset
  },
  zIndex: {
    type: Number,
    default: wt.zIndex
  },
  grouping: {
    type: Boolean,
    default: wt.grouping
  },
  repeatNum: {
    type: Number,
    default: wt.repeatNum
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
    const n = e, { Close: r } = ly, { ns: o, zIndex: a } = Ju("message"), { currentZIndex: s, nextZIndex: i } = a, l = U(), u = U(!1), f = U(0);
    let p;
    const m = R(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), v = R(() => {
      const L = n.type;
      return { [o.bm("icon", L)]: L && da[L] };
    }), h = R(() => n.icon || da[n.type] || ""), g = R(() => ek(n.id)), A = R(() => tk(n.id, n.offset) + g.value), d = R(() => f.value + A.value), S = R(() => ({
      top: `${A.value}px`,
      zIndex: s.value
    }));
    function I() {
      n.duration !== 0 && ({ stop: p } = ju(() => {
        y();
      }, n.duration));
    }
    function E() {
      p?.();
    }
    function y() {
      u.value = !1;
    }
    function O({ code: L }) {
      L === bn.esc && y();
    }
    return nt(() => {
      I(), i(), u.value = !0;
    }), ge(() => n.repeatNum, () => {
      E(), I();
    }), on(document, "keydown", O), pn(l, () => {
      f.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: d,
      close: y
    }), (L, H) => (N(), se(Ur, {
      name: c(o).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (G) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: oe(() => [
        gt(w("div", {
          id: L.id,
          ref_key: "messageRef",
          ref: l,
          class: W([
            c(o).b(),
            { [c(o).m(L.type)]: L.type },
            c(o).is("center", L.center),
            c(o).is("closable", L.showClose),
            c(o).is("plain", L.plain),
            L.customClass
          ]),
          style: yt(c(S)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: I
        }, [
          L.repeatNum > 1 ? (N(), se(c(uw), {
            key: 0,
            value: L.repeatNum,
            type: c(m),
            class: W(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : Q("v-if", !0),
          c(h) ? (N(), se(c(ot), {
            key: 1,
            class: W([c(o).e("icon"), c(v)])
          }, {
            default: oe(() => [
              (N(), se(Lt(c(h))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          he(L.$slots, "default", {}, () => [
            L.dangerouslyUseHTMLString ? (N(), K(Et, { key: 1 }, [
              Q(" Caution here, message could've been compromised, never use user's input as message "),
              w("p", {
                class: W(c(o).e("content")),
                innerHTML: L.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (N(), K("p", {
              key: 0,
              class: W(c(o).e("content"))
            }, j(L.message), 3))
          ]),
          L.showClose ? (N(), se(c(ot), {
            key: 2,
            class: W(c(o).e("closeBtn")),
            onClick: Ke(y, ["stop"])
          }, {
            default: oe(() => [
              F(c(r))
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
var ok = /* @__PURE__ */ He(rk, [["__file", "message.vue"]]);
let ak = 1;
const zf = (e) => {
  const t = !e || St(e) || ho(e) || qe(e) ? { message: e } : e, n = {
    ...wt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (St(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    rn(r) || (r = document.body), n.appendTo = r;
  }
  return Jn(Qt.grouping) && !n.grouping && (n.grouping = Qt.grouping), Le(Qt.duration) && n.duration === 3e3 && (n.duration = Qt.duration), Le(Qt.offset) && n.offset === 16 && (n.offset = Qt.offset), Jn(Qt.showClose) && !n.showClose && (n.showClose = Qt.showClose), n;
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
  }, i = F(ok, s, qe(s.message) || ho(s.message) ? {
    default: qe(s.message) ? s.message : () => s.message
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
  if (!at)
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
  if (Le(Qt.max) && nn.length >= Qt.max)
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
    const n = e, { ns: r, zIndex: o } = Ju("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = sy, l = U(!1);
    let u;
    const f = R(() => {
      const I = n.type;
      return I && da[n.type] ? r.m(I) : "";
    }), p = R(() => n.type && da[n.type] || n.icon), m = R(() => n.position.endsWith("right") ? "right" : "left"), v = R(() => n.position.startsWith("top") ? "top" : "bottom"), h = R(() => {
      var I;
      return {
        [v.value]: `${n.offset}px`,
        zIndex: (I = n.zIndex) != null ? I : s.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: u } = ju(() => {
        l.value && d();
      }, n.duration));
    }
    function A() {
      u?.();
    }
    function d() {
      l.value = !1;
    }
    function S({ code: I }) {
      I === bn.delete || I === bn.backspace ? A() : I === bn.esc ? l.value && d() : g();
    }
    return nt(() => {
      g(), a(), l.value = !0;
    }), on(document, "keydown", S), t({
      visible: l,
      close: d
    }), (I, E) => (N(), se(Ur, {
      name: c(r).b("fade"),
      onBeforeLeave: I.onClose,
      onAfterLeave: (y) => I.$emit("destroy"),
      persisted: ""
    }, {
      default: oe(() => [
        gt(w("div", {
          id: I.id,
          class: W([c(r).b(), I.customClass, c(m)]),
          style: yt(c(h)),
          role: "alert",
          onMouseenter: A,
          onMouseleave: g,
          onClick: I.onClick
        }, [
          c(p) ? (N(), se(c(ot), {
            key: 0,
            class: W([c(r).e("icon"), c(f)])
          }, {
            default: oe(() => [
              (N(), se(Lt(c(p))))
            ]),
            _: 1
          }, 8, ["class"])) : Q("v-if", !0),
          w("div", {
            class: W(c(r).e("group"))
          }, [
            w("h2", {
              class: W(c(r).e("title")),
              textContent: j(I.title)
            }, null, 10, ["textContent"]),
            gt(w("div", {
              class: W(c(r).e("content")),
              style: yt(I.title ? void 0 : { margin: 0 })
            }, [
              he(I.$slots, "default", {}, () => [
                I.dangerouslyUseHTMLString ? (N(), K(Et, { key: 1 }, [
                  Q(" Caution here, message could've been compromised, never use user's input as message "),
                  w("p", { innerHTML: I.message }, null, 8, ["innerHTML"])
                ], 2112)) : (N(), K("p", { key: 0 }, j(I.message), 1))
              ])
            ], 6), [
              [Bn, I.message]
            ]),
            I.showClose ? (N(), se(c(ot), {
              key: 0,
              class: W(c(r).e("closeBtn")),
              onClick: Ke(d, ["stop"])
            }, {
              default: oe(() => [
                F(c(i))
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
var mk = /* @__PURE__ */ He(pk, [["__file", "notification.vue"]]);
const ha = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, As = 16;
let hk = 1;
const jr = function(e = {}, t) {
  if (!at)
    return { close: () => {
    } };
  (St(e) || ho(e)) && (e = { message: e });
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
  rn(e.appendTo) ? i = e.appendTo : St(e.appendTo) && (i = document.querySelector(e.appendTo)), rn(i) || (i = document.body);
  const l = document.createElement("div"), u = F(mk, s, qe(s.message) ? s.message : ho(s.message) ? () => s.message : null);
  return u.appContext = hn(t) ? jr._context : t, u.props.onDestroy = () => {
    ta(null, l);
  }, ta(u, l), ha[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Bf.forEach((e) => {
  jr[e] = (t = {}, n) => ((St(t) || ho(t)) && (t = {
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
const bk = tf(jr, "$notify"), Ot = {
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
async function At(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Ec;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Ec || (Ec = {}));
async function _k(e, t) {
  await At("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function wk(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return At("plugin:event|listen", {
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
  Ak(e, t, n), Ok(e) && At("frontend_log", {
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
  return await At("local_ai_get_config");
}
async function Xa(e) {
  return await At("local_ai_save_config", { config: e });
}
async function Lk(e) {
  return await At("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Ik() {
  return await At("local_ai_get_runtime_status");
}
async function Hf() {
  return await At("local_ai_get_status");
}
async function Rk(e) {
  return await At("local_ai_start_service", {
    config: e ?? null
  });
}
async function xk() {
  return await At("local_ai_restart_service");
}
async function Nk() {
  await At("local_ai_stop_service");
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
    return await At("local_ai_chat_stream", {
      request: e,
      requestId: n
    });
  } finally {
    r();
  }
}
async function $k() {
  return await At("local_ai_get_chat_histories");
}
async function Mk(e) {
  return await At("local_ai_save_chat_history", { history: e });
}
async function Dk(e) {
  return await At("local_ai_delete_chat_history", { historyId: e });
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
let xt = Object.freeze, Zt = Object.seal, Ir = Object.create, Gf = typeof Reflect < "u" && Reflect, Cs = Gf.apply, Os = Gf.construct;
xt || (xt = function(t) {
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
const Sr = lt(Array.prototype.forEach), Gk = lt(Array.prototype.lastIndexOf), Cc = lt(Array.prototype.pop), Ar = lt(Array.prototype.push), Kk = lt(Array.prototype.splice), Ct = Array.isArray, so = lt(String.prototype.toLowerCase), Qa = lt(String.prototype.toString), Oc = lt(String.prototype.match), Cr = lt(String.prototype.replace), Lc = lt(String.prototype.indexOf), Yk = lt(String.prototype.trim), qk = lt(Number.prototype.toString), Zk = lt(Boolean.prototype.toString), Ic = typeof BigInt > "u" ? null : lt(BigInt.prototype.toString), Rc = typeof Symbol > "u" ? null : lt(Symbol.prototype.toString), Qe = lt(Object.prototype.hasOwnProperty), ro = lt(Object.prototype.toString), bt = lt(RegExp.prototype.test), oo = Xk(TypeError);
function lt(e) {
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
  if (Ac && Ac(e, null), !Ct(t))
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
function kt(e) {
  const t = Ir(null);
  for (const r of Wf(e)) {
    var n = Vk(r, 2);
    const o = n[0], a = n[1];
    Qe(e, o) && (Ct(a) ? t[o] = Qk(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = kt(a) : t[o] = a);
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
        return lt(r.get);
      if (typeof r.value == "function")
        return lt(r.value);
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
    return bt(e, ""), !0;
  } catch {
    return !1;
  }
}
const xc = xt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ja = xt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), es = xt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), tT = xt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ts = xt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), nT = xt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Nc = xt(["#text"]), Pc = xt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ns = xt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), $c = xt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Yo = xt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), rT = Zt(/{{[\w\W]*|^[\w\W]*}}/g), oT = Zt(/<%[\w\W]*|^[\w\W]*%>/g), aT = Zt(/\${[\w\W]*/g), sT = Zt(/^data-[\-\w.\u00B7-\uFFFF]+$/), lT = Zt(/^aria-[\-\w]+$/), Mc = Zt(
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
  const f = e.DOMParser, p = e.trustedTypes, m = i.prototype, v = dn(m, "cloneNode"), h = dn(m, "remove"), g = dn(m, "nextSibling"), A = dn(m, "childNodes"), d = dn(m, "parentNode"), S = dn(m, "shadowRoot"), I = dn(m, "attributes"), E = s && s.prototype ? dn(s.prototype, "nodeType") : null, y = s && s.prototype ? dn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ae = n.createElement("template");
    ae.content && ae.content.ownerDocument && (n = ae.content.ownerDocument);
  }
  let O, L = "";
  const H = n, G = H.implementation, ee = H.createNodeIterator, ue = H.createDocumentFragment, te = H.getElementsByTagName, fe = r.importNode;
  let de = Dc();
  t.isSupported = typeof Wf == "function" && typeof d == "function" && G && G.createHTMLDocument !== void 0;
  const P = rT, D = oT, B = aT, le = sT, J = lT, ve = iT, Z = cT, Ve = fT;
  let Te = Mc, me = null;
  const je = we({}, [...xc, ...Ja, ...es, ...ts, ...Nc]);
  let _e = null;
  const We = we({}, [...Pc, ...ns, ...$c, ...Yo]);
  let ie = Object.seal(Ir(null, {
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
  })), Ze = null, it = null;
  const Ue = Object.seal(Ir(null, {
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
  let vt = !0, rt = !0, ct = !1, ut = !0, Ge = !1, ft = !0, k = !1, C = !1, T = !1, $ = !1, V = !1, Y = !1, _ = !0, M = !1;
  const ce = "user-content-";
  let be = !0, Ie = !1, $e = {}, Me = null;
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
  const Fa = n.createElement("form"), No = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, wr = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Gn && Gn === b)
      return;
    (!b || typeof b != "object") && (b = {}), b = kt(b), sr = // eslint-disable-next-line unicorn/prefer-includes
    xo.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Da : b.PARSER_MEDIA_TYPE, De = sr === "application/xhtml+xml" ? Qa : so, me = Qe(b, "ALLOWED_TAGS") && Ct(b.ALLOWED_TAGS) ? we({}, b.ALLOWED_TAGS, De) : je, _e = Qe(b, "ALLOWED_ATTR") && Ct(b.ALLOWED_ATTR) ? we({}, b.ALLOWED_ATTR, De) : We, Yr = Qe(b, "ALLOWED_NAMESPACES") && Ct(b.ALLOWED_NAMESPACES) ? we({}, b.ALLOWED_NAMESPACES, Qa) : _r, yr = Qe(b, "ADD_URI_SAFE_ATTR") && Ct(b.ADD_URI_SAFE_ATTR) ? we(kt(Gr), b.ADD_URI_SAFE_ATTR, De) : Gr, Wr = Qe(b, "ADD_DATA_URI_TAGS") && Ct(b.ADD_DATA_URI_TAGS) ? we(kt(Ro), b.ADD_DATA_URI_TAGS, De) : Ro, Me = Qe(b, "FORBID_CONTENTS") && Ct(b.FORBID_CONTENTS) ? we({}, b.FORBID_CONTENTS, De) : or, Ze = Qe(b, "FORBID_TAGS") && Ct(b.FORBID_TAGS) ? we({}, b.FORBID_TAGS, De) : kt({}), it = Qe(b, "FORBID_ATTR") && Ct(b.FORBID_ATTR) ? we({}, b.FORBID_ATTR, De) : kt({}), $e = Qe(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? kt(b.USE_PROFILES) : b.USE_PROFILES : !1, vt = b.ALLOW_ARIA_ATTR !== !1, rt = b.ALLOW_DATA_ATTR !== !1, ct = b.ALLOW_UNKNOWN_PROTOCOLS || !1, ut = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ge = b.SAFE_FOR_TEMPLATES || !1, ft = b.SAFE_FOR_XML !== !1, k = b.WHOLE_DOCUMENT || !1, $ = b.RETURN_DOM || !1, V = b.RETURN_DOM_FRAGMENT || !1, Y = b.RETURN_TRUSTED_TYPE || !1, T = b.FORCE_BODY || !1, _ = b.SANITIZE_DOM !== !1, M = b.SANITIZE_NAMED_PROPS || !1, be = b.KEEP_CONTENT !== !1, Ie = b.IN_PLACE || !1, Te = eT(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : Mc, Wn = typeof b.NAMESPACE == "string" ? b.NAMESPACE : jt, qr = Qe(b, "MATHML_TEXT_INTEGRATION_POINTS") && b.MATHML_TEXT_INTEGRATION_POINTS && typeof b.MATHML_TEXT_INTEGRATION_POINTS == "object" ? kt(b.MATHML_TEXT_INTEGRATION_POINTS) : we({}, ["mi", "mo", "mn", "ms", "mtext"]), Zr = Qe(b, "HTML_INTEGRATION_POINTS") && b.HTML_INTEGRATION_POINTS && typeof b.HTML_INTEGRATION_POINTS == "object" ? kt(b.HTML_INTEGRATION_POINTS) : we({}, ["annotation-xml"]);
    const z = Qe(b, "CUSTOM_ELEMENT_HANDLING") && b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING == "object" ? kt(b.CUSTOM_ELEMENT_HANDLING) : Ir(null);
    if (ie = Ir(null), Qe(z, "tagNameCheck") && No(z.tagNameCheck) && (ie.tagNameCheck = z.tagNameCheck), Qe(z, "attributeNameCheck") && No(z.attributeNameCheck) && (ie.attributeNameCheck = z.attributeNameCheck), Qe(z, "allowCustomizedBuiltInElements") && typeof z.allowCustomizedBuiltInElements == "boolean" && (ie.allowCustomizedBuiltInElements = z.allowCustomizedBuiltInElements), Ge && (rt = !1), V && ($ = !0), $e && (me = we({}, Nc), _e = Ir(null), $e.html === !0 && (we(me, xc), we(_e, Pc)), $e.svg === !0 && (we(me, Ja), we(_e, ns), we(_e, Yo)), $e.svgFilters === !0 && (we(me, es), we(_e, ns), we(_e, Yo)), $e.mathMl === !0 && (we(me, ts), we(_e, $c), we(_e, Yo))), Ue.tagCheck = null, Ue.attributeCheck = null, Qe(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? Ue.tagCheck = b.ADD_TAGS : Ct(b.ADD_TAGS) && (me === je && (me = kt(me)), we(me, b.ADD_TAGS, De))), Qe(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? Ue.attributeCheck = b.ADD_ATTR : Ct(b.ADD_ATTR) && (_e === We && (_e = kt(_e)), we(_e, b.ADD_ATTR, De))), Qe(b, "ADD_URI_SAFE_ATTR") && Ct(b.ADD_URI_SAFE_ATTR) && we(yr, b.ADD_URI_SAFE_ATTR, De), Qe(b, "FORBID_CONTENTS") && Ct(b.FORBID_CONTENTS) && (Me === or && (Me = kt(Me)), we(Me, b.FORBID_CONTENTS, De)), Qe(b, "ADD_FORBID_CONTENTS") && Ct(b.ADD_FORBID_CONTENTS) && (Me === or && (Me = kt(Me)), we(Me, b.ADD_FORBID_CONTENTS, De)), be && (me["#text"] = !0), k && we(me, ["html", "head", "body"]), me.table && (we(me, ["tbody"]), delete Ze.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw oo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw oo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      O = b.TRUSTED_TYPES_POLICY, L = O.createHTML("");
    } else
      O === void 0 && (O = pT(p, o)), O !== null && typeof L == "string" && (L = O.createHTML(""));
    (de.uponSanitizeElement.length > 0 || de.uponSanitizeAttribute.length > 0) && me === je && (me = kt(me)), de.uponSanitizeAttribute.length > 0 && _e === We && (_e = kt(_e)), xt && xt(b), Gn = b;
  }, Po = we({}, [...Ja, ...es, ...tT]), $o = we({}, [...ts, ...nT]), za = function(b) {
    let z = d(b);
    (!z || !z.tagName) && (z = {
      namespaceURI: Wn,
      tagName: "template"
    });
    const X = so(b.tagName), Ce = so(z.tagName);
    return Yr[b.namespaceURI] ? b.namespaceURI === Sn ? z.namespaceURI === jt ? X === "svg" : z.namespaceURI === ar ? X === "svg" && (Ce === "annotation-xml" || qr[Ce]) : !!Po[X] : b.namespaceURI === ar ? z.namespaceURI === jt ? X === "math" : z.namespaceURI === Sn ? X === "math" && Zr[Ce] : !!$o[X] : b.namespaceURI === jt ? z.namespaceURI === Sn && !Zr[Ce] || z.namespaceURI === ar && !qr[Ce] ? !1 : !$o[X] && (Ma[X] || !Po[X]) : !!(sr === "application/xhtml+xml" && Yr[b.namespaceURI]) : !1;
  }, Ft = function(b) {
    Ar(t.removed, {
      element: b
    });
    try {
      d(b).removeChild(b);
    } catch {
      h(b);
    }
  }, x = function(b, z) {
    try {
      Ar(t.removed, {
        attribute: z.getAttributeNode(b),
        from: z
      });
    } catch {
      Ar(t.removed, {
        attribute: null,
        from: z
      });
    }
    if (z.removeAttribute(b), b === "is")
      if ($ || V)
        try {
          Ft(z);
        } catch {
        }
      else
        try {
          z.setAttribute(b, "");
        } catch {
        }
  }, q = function(b) {
    let z = null, X = null;
    if (T)
      b = "<remove></remove>" + b;
    else {
      const Fe = Oc(b, /^[\r\n\t ]+/);
      X = Fe && Fe[0];
    }
    sr === "application/xhtml+xml" && Wn === jt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const Ce = O ? O.createHTML(b) : b;
    if (Wn === jt)
      try {
        z = new f().parseFromString(Ce, sr);
      } catch {
      }
    if (!z || !z.documentElement) {
      z = G.createDocument(Wn, "template", null);
      try {
        z.documentElement.innerHTML = Kr ? L : Ce;
      } catch {
      }
    }
    const ke = z.body || z.documentElement;
    return b && X && ke.insertBefore(n.createTextNode(X), ke.childNodes[0] || null), Wn === jt ? te.call(z, k ? "html" : "body")[0] : k ? z.documentElement : ke;
  }, ye = function(b) {
    return ee.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Xe = function(b) {
    b.normalize();
    const z = ee.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = z.nextNode();
    for (; X; ) {
      let Ce = X.data;
      Sr([P, D, B], (ke) => {
        Ce = Cr(Ce, ke, " ");
      }), X.data = Ce, X = z.nextNode();
    }
  }, dt = function(b) {
    const z = y ? y(b) : null;
    return typeof z != "string" || De(z) !== "form" ? !1 : typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    b.attributes !== I(b) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    b.nodeType !== E(b) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    b.childNodes !== A(b);
  }, Ut = function(b) {
    if (!E || typeof b != "object" || b === null)
      return !1;
    try {
      return E(b) === fn.documentFragment;
    } catch {
      return !1;
    }
  }, zt = function(b) {
    if (!E || typeof b != "object" || b === null)
      return !1;
    try {
      return typeof E(b) == "number";
    } catch {
      return !1;
    }
  };
  function Pt(ae, b, z) {
    Sr(ae, (X) => {
      X.call(t, b, z, Gn);
    });
  }
  const Kn = function(b) {
    let z = null;
    if (Pt(de.beforeSanitizeElements, b, null), dt(b))
      return Ft(b), !0;
    const X = De(b.nodeName);
    if (Pt(de.uponSanitizeElement, b, {
      tagName: X,
      allowedTags: me
    }), ft && b.hasChildNodes() && !zt(b.firstElementChild) && bt(/<[/\w!]/g, b.innerHTML) && bt(/<[/\w!]/g, b.textContent) || ft && b.namespaceURI === jt && X === "style" && zt(b.firstElementChild) || b.nodeType === fn.progressingInstruction || ft && b.nodeType === fn.comment && bt(/<[/\w]/g, b.data))
      return Ft(b), !0;
    if (Ze[X] || !(Ue.tagCheck instanceof Function && Ue.tagCheck(X)) && !me[X]) {
      if (!Ze[X] && Al(X) && (ie.tagNameCheck instanceof RegExp && bt(ie.tagNameCheck, X) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(X)))
        return !1;
      if (be && !Me[X]) {
        const ke = d(b), Fe = A(b);
        if (Fe && ke) {
          const Ht = Fe.length;
          for (let ln = Ht - 1; ln >= 0; --ln) {
            const Xt = v(Fe[ln], !0);
            ke.insertBefore(Xt, g(b));
          }
        }
      }
      return Ft(b), !0;
    }
    return (E ? E(b) : b.nodeType) === fn.element && !za(b) || (X === "noscript" || X === "noembed" || X === "noframes") && bt(/<\/no(script|embed|frames)/i, b.innerHTML) ? (Ft(b), !0) : (Ge && b.nodeType === fn.text && (z = b.textContent, Sr([P, D, B], (ke) => {
      z = Cr(z, ke, " ");
    }), b.textContent !== z && (Ar(t.removed, {
      element: b.cloneNode()
    }), b.textContent = z)), Pt(de.afterSanitizeElements, b, null), !1);
  }, Mo = function(b, z, X) {
    if (it[z] || _ && (z === "id" || z === "name") && (X in n || X in Fa))
      return !1;
    const Ce = _e[z] || Ue.attributeCheck instanceof Function && Ue.attributeCheck(z, b);
    if (!(rt && !it[z] && bt(le, z))) {
      if (!(vt && bt(J, z))) {
        if (!Ce || it[z]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Al(b) && (ie.tagNameCheck instanceof RegExp && bt(ie.tagNameCheck, b) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(b)) && (ie.attributeNameCheck instanceof RegExp && bt(ie.attributeNameCheck, z) || ie.attributeNameCheck instanceof Function && ie.attributeNameCheck(z, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            z === "is" && ie.allowCustomizedBuiltInElements && (ie.tagNameCheck instanceof RegExp && bt(ie.tagNameCheck, X) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(X)))
          ) return !1;
        } else if (!yr[z]) {
          if (!bt(Te, Cr(X, Z, ""))) {
            if (!((z === "src" || z === "xlink:href" || z === "href") && b !== "script" && Lc(X, "data:") === 0 && Wr[b])) {
              if (!(ct && !bt(ve, Cr(X, Z, "")))) {
                if (X)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Yf = we({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Al = function(b) {
    return !Yf[so(b)] && bt(Ve, b);
  }, Cl = function(b) {
    Pt(de.beforeSanitizeAttributes, b, null);
    const z = b.attributes;
    if (!z || dt(b))
      return;
    const X = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _e,
      forceKeepAttr: void 0
    };
    let Ce = z.length;
    for (; Ce--; ) {
      const ke = z[Ce], Fe = ke.name, Ht = ke.namespaceURI, ln = ke.value, Xt = De(Fe), Ba = ln;
      let pt = Fe === "value" ? Ba : Yk(Ba);
      if (X.attrName = Xt, X.attrValue = pt, X.keepAttr = !0, X.forceKeepAttr = void 0, Pt(de.uponSanitizeAttribute, b, X), pt = X.attrValue, M && (Xt === "id" || Xt === "name") && Lc(pt, ce) !== 0 && (x(Fe, b), pt = ce + pt), ft && bt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, pt)) {
        x(Fe, b);
        continue;
      }
      if (Xt === "attributename" && Oc(pt, "href")) {
        x(Fe, b);
        continue;
      }
      if (X.forceKeepAttr)
        continue;
      if (!X.keepAttr) {
        x(Fe, b);
        continue;
      }
      if (!ut && bt(/\/>/i, pt)) {
        x(Fe, b);
        continue;
      }
      Ge && Sr([P, D, B], (Ll) => {
        pt = Cr(pt, Ll, " ");
      });
      const Ol = De(b.nodeName);
      if (!Mo(Ol, Xt, pt)) {
        x(Fe, b);
        continue;
      }
      if (O && typeof p == "object" && typeof p.getAttributeType == "function" && !Ht)
        switch (p.getAttributeType(Ol, Xt)) {
          case "TrustedHTML": {
            pt = O.createHTML(pt);
            break;
          }
          case "TrustedScriptURL": {
            pt = O.createScriptURL(pt);
            break;
          }
        }
      if (pt !== Ba)
        try {
          Ht ? b.setAttributeNS(Ht, Fe, pt) : b.setAttribute(Fe, pt), dt(b) ? Ft(b) : Cc(t.removed);
        } catch {
          x(Fe, b);
        }
    }
    Pt(de.afterSanitizeAttributes, b, null);
  }, Do = function(b) {
    let z = null;
    const X = ye(b);
    for (Pt(de.beforeSanitizeShadowDOM, b, null); z = X.nextNode(); )
      if (Pt(de.uponSanitizeShadowNode, z, null), Kn(z), Cl(z), Ut(z.content) && Do(z.content), (E ? E(z) : z.nodeType) === fn.element) {
        const ke = S ? S(z) : z.shadowRoot;
        Ut(ke) && (kr(ke), Do(ke));
      }
    Pt(de.afterSanitizeShadowDOM, b, null);
  }, kr = function(b) {
    const z = E ? E(b) : b.nodeType;
    if (z === fn.element) {
      const ke = S ? S(b) : b.shadowRoot;
      Ut(ke) && (kr(ke), Do(ke));
    }
    const X = A ? A(b) : b.childNodes;
    if (!X)
      return;
    const Ce = [];
    Sr(X, (ke) => {
      Ar(Ce, ke);
    });
    for (const ke of Ce)
      kr(ke);
    if (z === fn.element) {
      const ke = y ? y(b) : null;
      if (typeof ke == "string" && De(ke) === "template") {
        const Fe = b.content;
        Ut(Fe) && kr(Fe);
      }
    }
  };
  return t.sanitize = function(ae) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, X = null, Ce = null, ke = null;
    if (Kr = !ae, Kr && (ae = "<!-->"), typeof ae != "string" && !zt(ae) && (ae = Jk(ae), typeof ae != "string"))
      throw oo("dirty is not a string, aborting");
    if (!t.isSupported)
      return ae;
    if (C || wr(b), t.removed = [], typeof ae == "string" && (Ie = !1), Ie) {
      const ln = y ? y(ae) : ae.nodeName;
      if (typeof ln == "string") {
        const Xt = De(ln);
        if (!me[Xt] || Ze[Xt])
          throw oo("root node is forbidden and cannot be sanitized in-place");
      }
      if (dt(ae))
        throw oo("root node is clobbered and cannot be sanitized in-place");
      kr(ae);
    } else if (zt(ae))
      z = q("<!---->"), X = z.ownerDocument.importNode(ae, !0), X.nodeType === fn.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? z = X : z.appendChild(X), kr(X);
    else {
      if (!$ && !Ge && !k && // eslint-disable-next-line unicorn/prefer-includes
      ae.indexOf("<") === -1)
        return O && Y ? O.createHTML(ae) : ae;
      if (z = q(ae), !z)
        return $ ? null : Y ? L : "";
    }
    z && T && Ft(z.firstChild);
    const Fe = ye(Ie ? ae : z);
    for (; Ce = Fe.nextNode(); )
      Kn(Ce), Cl(Ce), Ut(Ce.content) && Do(Ce.content);
    if (Ie)
      return Ge && Xe(ae), ae;
    if ($) {
      if (Ge && Xe(z), V)
        for (ke = ue.call(z.ownerDocument); z.firstChild; )
          ke.appendChild(z.firstChild);
      else
        ke = z;
      return (_e.shadowroot || _e.shadowrootmode) && (ke = fe.call(r, ke, !0)), ke;
    }
    let Ht = k ? z.outerHTML : z.innerHTML;
    return k && me["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && bt(uT, z.ownerDocument.doctype.name) && (Ht = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + Ht), Ge && Sr([P, D, B], (ln) => {
      Ht = Cr(Ht, ln, " ");
    }), O && Y ? O.createHTML(Ht) : Ht;
  }, t.setConfig = function() {
    let ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wr(ae), C = !0;
  }, t.clearConfig = function() {
    Gn = null, C = !1;
  }, t.isValidAttribute = function(ae, b, z) {
    Gn || wr({});
    const X = De(ae), Ce = De(b);
    return Mo(X, Ce, z);
  }, t.addHook = function(ae, b) {
    typeof b == "function" && Ar(de[ae], b);
  }, t.removeHook = function(ae, b) {
    if (b !== void 0) {
      const z = Gk(de[ae], b);
      return z === -1 ? void 0 : Kk(de[ae], z, 1)[0];
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
}, oE = ["title", "onClick"], aE = ["title", "onClick"], sE = ["title"], lE = ["title"], iE = ["title", "onClick"], cE = ["title", "onClick"], uE = ["placeholder", "onKeydown"], fE = { class: "input-toolbar" }, dE = { class: "input-toolbar-left" }, pE = ["title"], mE = { class: "model-select-shell" }, hE = ["value"], gE = ["value"], vE = { class: "input-toolbar-right" }, bE = ["disabled", "title", "aria-label"], yE = /* @__PURE__ */ ne({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Eo(), n = U(""), r = U([]), o = U(""), a = U(""), s = U(!1), i = U(!1), l = U(null), u = U(null), f = U(null), p = U(Date.now());
    let m = null, v = null;
    const h = /* @__PURE__ */ new Map(), g = R(() => !!a.value.trim() && !s.value), A = R(() => u.value?.healthy ? t("localAi.serviceHealthy") : u.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), d = R(
      () => r.value.find((T) => T.id === o.value) ?? null
    ), S = R(() => d.value?.messages ?? []), I = (T) => T ? T.split(/[\\/]+/).pop() ?? T : "", E = R(
      () => I(u.value?.modelPath) || I(l.value?.modelPath) || t("localAi.localModel")
    ), y = R(() => {
      const T = n.value.trim().toLowerCase();
      return r.value.filter(
        ($) => !T || $.title.toLowerCase().includes(T) || $.messages.some(
          (V) => V.content.toLowerCase().includes(T)
        )
      ).slice().sort(($, V) => V.updatedAt.localeCompare($.updatedAt));
    }), O = () => t("localAi.now"), L = () => {
      const T = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: T,
        updatedAt: T,
        updatedAtLabel: O(),
        messages: []
      };
    }, H = async () => {
      await Je();
      const T = f.value;
      T && (T.scrollTop = T.scrollHeight);
    }, G = async () => {
      try {
        l.value = await Uf();
      } catch (T) {
        Rn.warn("[LocalAI] refresh chat config failed", T);
      }
    }, ee = async () => {
      i.value = !0;
      try {
        u.value = await Hf();
      } catch (T) {
        Rn.warn("[LocalAI] refresh chat status failed", T);
      } finally {
        i.value = !1;
      }
    }, ue = async () => {
      try {
        const T = await $k();
        r.value = T.map(($) => ({
          id: $.id,
          title: $.title,
          createdAt: $.createdAt,
          updatedAt: $.updatedAt,
          updatedAtLabel: new Date($.updatedAt).toLocaleString(),
          messages: $.turns.map((V) => ({
            id: V.id,
            role: V.role,
            content: V.content,
            createdAt: V.createdAt
          }))
        })), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (T) {
        Rn.warn("[LocalAI] refresh histories failed", T);
      }
    }, te = async () => {
      await Promise.all([G(), ee(), ue()]);
    }, fe = async () => {
      const T = d.value;
      T && await Mk({
        id: T.id,
        title: T.title,
        createdAt: T.createdAt,
        updatedAt: T.updatedAt,
        turns: T.messages.map(($) => ({
          id: $.id,
          role: $.role,
          content: $.content,
          createdAt: $.createdAt
        }))
      });
    }, de = () => {
      const T = L();
      r.value.unshift(T), o.value = T.id, a.value = "";
    }, P = () => {
      d.value || de();
    }, D = (T) => {
      o.value = T, H();
    }, B = async (T) => {
      r.value = r.value.filter(($) => $.id !== T), await Dk(T), o.value === T && (o.value = r.value[0]?.id ?? "");
    }, le = () => S.value.filter((T) => !T.streaming).map((T) => ({
      role: T.role,
      content: T.content
    })), J = (T) => {
      const $ = h.get(T);
      if ($) return $;
      const V = gT(Re.parse(T, { async: !1 }));
      if (h.set(T, V), h.size > 80) {
        const Y = h.keys().next().value;
        typeof Y == "string" && h.delete(Y);
      }
      return V;
    }, ve = (T) => {
      const $ = T.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!$ || $.index === void 0)
        return { reasoning: "", answer: T };
      const V = T.slice(0, $.index).trim(), Y = $[0], _ = T.slice($.index + Y.length).trim();
      return {
        reasoning: ($[1] ?? "").trim(),
        answer: [V, _].filter(Boolean).join(`

`)
      };
    }, Z = (T) => ve(T).reasoning, Ve = (T) => ve(T).answer, Te = (T) => T.trim() ? Math.max(1, Math.ceil(T.length / 2.2)) : 0, me = (T) => {
      const $ = p.value, V = S.value.findIndex((be) => be.id === T.id), Y = Te(
        S.value.slice(0, Math.max(0, V)).map((be) => be.content).join(`
`)
      ), _ = Te(T.content), M = l.value?.ctxSize ?? 4096, ce = (T.elapsedMs ?? $ - vt(T).getTime()) / 1e3;
      return {
        context: Y,
        contextMax: M,
        contextPercent: Math.min(100, Math.round(Y / M * 100)),
        output: _,
        seconds: ce.toFixed(1),
        speed: ce > 0 ? (_ / ce).toFixed(1) : "0.0"
      };
    }, je = () => {
      v || (p.value = Date.now(), v = setInterval(() => {
        p.value = Date.now();
      }, 250));
    }, _e = () => {
      v && (clearInterval(v), v = null, p.value = Date.now());
    }, We = async (T) => {
      const $ = performance.now();
      let V = "", Y = null, _ = null, M = !1;
      const ce = async () => {
        if (!V) {
          Y = null, _?.(), _ = null;
          return;
        }
        const $e = V.length > 240 ? 18 : 6;
        T.content += V.slice(0, $e), V = V.slice($e), await H(), Y = window.setTimeout(() => {
          ce().catch(
            (Me) => Rn.warn("[LocalAI] stream pump failed", Me)
          );
        }, 24);
      }, be = ($e) => {
        $e && (V += $e, Y === null && (Y = window.setTimeout(() => {
          ce().catch(
            (Me) => Rn.warn("[LocalAI] stream pump failed", Me)
          );
        }, 12)));
      }, Ie = await Pk(
        { messages: le() },
        ($e) => {
          M = !0, be($e);
        }
      );
      if (!M)
        be(Ie.content);
      else {
        const $e = T.content.length + V.length;
        Ie.content.length > $e && be(Ie.content.slice($e));
      }
      (V || Y !== null) && await new Promise(($e) => {
        _ = $e;
      }), Ie.content && T.content !== Ie.content && (T.content = Ie.content), T.streaming = !1, T.elapsedMs = performance.now() - $, p.value = Date.now();
    }, ie = async () => {
      const T = a.value.trim();
      if (!T || s.value) return;
      P();
      const $ = (/* @__PURE__ */ new Date()).toISOString();
      d.value?.messages.push({
        id: `${Date.now()}-user`,
        role: "user",
        content: T,
        createdAt: $
      });
      const V = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0
      };
      d.value?.messages.push(V), a.value = "", s.value = !0, je(), await H();
      try {
        await We(V), d.value && (d.value.title = d.value.title === t("localAi.newChatTitle") ? T.slice(0, 28) : d.value.title, d.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), d.value.updatedAtLabel = new Date(
          d.value.updatedAt
        ).toLocaleString(), await fe()), await ee();
      } catch (Y) {
        Ot.msg(`${t("localAi.chatFailed")}: ${Y}`, "error"), V.streaming = !1, V.content = String(Y);
      } finally {
        s.value = !1, _e(), await H();
      }
    }, Ze = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, it = () => {
      n.value = "";
    }, Ue = () => {
      Ot.msg(t("localAi.moreComingSoon"));
    }, vt = (T) => new Date(T.createdAt || d.value?.updatedAt || Date.now()), rt = (T) => vt(T).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), ct = (T) => {
      const $ = new Date(T), V = /* @__PURE__ */ new Date(), Y = V.getTime() - $.getTime(), _ = 24 * 60 * 60 * 1e3;
      return $.toDateString() === V.toDateString() ? $.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : Y < _ * 2 ? t("localAi.yesterday") : Y < _ * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(Y / _))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(Y / (_ * 7)))
      });
    }, ut = async (T) => {
      try {
        await navigator.clipboard.writeText(T.content), Ot.msg(t("localAi.copied"));
      } catch ($) {
        Ot.msg(`${t("common.operationFailed")}: ${$}`, "error");
      }
    }, Ge = async (T) => {
      d.value && (d.value.messages = d.value.messages.filter(
        ($) => $.id !== T
      ), d.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), d.value.updatedAtLabel = new Date(
        d.value.updatedAt
      ).toLocaleString(), await fe());
    }, ft = (T) => {
      a.value = T.content;
    }, k = () => {
      Ot.msg(t("localAi.feedbackSaved"));
    }, C = async (T) => {
      const $ = d.value;
      if (!$ || s.value) return;
      const V = $.messages.findIndex(
        (M) => M.id === T
      );
      if (!$.messages.slice(0, V).reverse().find((M) => M.role === "user")) return;
      $.messages = $.messages.slice(0, V);
      const _ = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0
      };
      $.messages.push(_), s.value = !0, je(), await H();
      try {
        await We(_), $.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), $.updatedAtLabel = new Date($.updatedAt).toLocaleString(), await fe();
      } catch (M) {
        Ot.msg(`${t("localAi.chatFailed")}: ${M}`, "error"), _.streaming = !1, _.content = String(M);
      } finally {
        s.value = !1, _e(), await H();
      }
    };
    return nt(async () => {
      await te(), m = setInterval(() => {
        ee().catch(
          (T) => Rn.warn("[LocalAI] status timer failed", T)
        );
      }, 8e3);
    }), ga(() => {
      m && clearInterval(m), _e();
    }), (T, $) => (N(), K("main", vT, [
      w("aside", bT, [
        w("header", yT, [
          w("div", _T, [
            w(
              "h2",
              null,
              j(c(t)("localAi.chatTitle")),
              1
              /* TEXT */
            ),
            w(
              "p",
              null,
              j(c(t)("localAi.chatPrivacySubtitle")),
              1
              /* TEXT */
            )
          ]),
          w("div", wT, [
            w("button", {
              class: "icon-action-btn icon-action-btn--primary",
              type: "button",
              title: c(t)("localAi.newChat"),
              onClick: de
            }, [
              F(c(bd), {
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
              F(c(Rl), {
                theme: "outline",
                size: "16"
              })
            ], 8, TT)
          ])
        ]),
        w("div", ET, [
          F(c(Cd), {
            theme: "outline",
            size: "17"
          }),
          gt(w("input", {
            "onUpdate:modelValue": $[0] || ($[0] = (V) => po(n) ? n.value = V : null),
            placeholder: c(t)("localAi.searchHistory")
          }, null, 8, ST), [
            [mo, c(n)]
          ])
        ]),
        w("section", AT, [
          w(
            "div",
            CT,
            j(c(t)("localAi.recent")),
            1
            /* TEXT */
          ),
          c(y).length ? (N(), K("div", OT, [
            (N(!0), K(
              Et,
              null,
              xr(c(y), (V) => (N(), K("div", {
                key: V.id,
                class: W([
                  "chat-list-item",
                  c(o) === V.id ? "active" : ""
                ]),
                role: "button",
                tabindex: "0",
                onClick: (Y) => D(V.id),
                onKeydown: Gt(Ke((Y) => D(V.id), ["prevent"]), ["enter"])
              }, [
                F(c(Ed), {
                  theme: "outline",
                  size: "16"
                }),
                w(
                  "span",
                  IT,
                  j(V.title),
                  1
                  /* TEXT */
                ),
                w(
                  "span",
                  RT,
                  j(ct(V.updatedAt)),
                  1
                  /* TEXT */
                ),
                w("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: c(t)("common.delete"),
                  onClick: Ke((Y) => B(V.id), ["stop"])
                }, [
                  F(c(Il), {
                    theme: "outline",
                    size: "13"
                  })
                ], 8, xT)
              ], 42, LT))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (N(), K(
            "div",
            NT,
            j(c(t)("common.empty")),
            1
            /* TEXT */
          )),
          w("button", {
            class: "view-all-btn",
            type: "button",
            onClick: it
          }, [
            w(
              "span",
              null,
              j(c(t)("localAi.viewAllChats")),
              1
              /* TEXT */
            ),
            F(c(Ad), {
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
                j(c(d)?.title ?? c(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              w(
                "span",
                {
                  class: W([
                    "status-pill",
                    c(u)?.healthy ? "ready" : "stopped"
                  ])
                },
                [
                  $[2] || ($[2] = w(
                    "i",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  )),
                  Wt(
                    " " + j(c(A)),
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
              j(c(u)?.baseUrl ?? "http://127.0.0.1:39281"),
              1
              /* TEXT */
            )
          ]),
          w("div", zT, [
            F(c(On), {
              size: "small",
              plain: "",
              class: "topbar-custom-btn",
              onClick: Ze
            }, {
              default: oe(() => [
                F(c(rs), {
                  theme: "outline",
                  size: "16"
                }),
                w(
                  "span",
                  null,
                  j(c(t)("localAi.settings")),
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
              onClick: Ue
            }, [
              F(c(Sd), {
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
                j(c(t)("localAi.today")),
                1
                /* TEXT */
              )
            ]),
            c(S).length ? Q("v-if", !0) : (N(), K("div", jT, [
              F(c(xl), {
                theme: "outline",
                size: "28"
              }),
              w(
                "div",
                UT,
                j(c(t)("localAi.chatEmpty")),
                1
                /* TEXT */
              ),
              w(
                "div",
                HT,
                j(c(t)("localAi.chatPlaceholder")),
                1
                /* TEXT */
              )
            ])),
            (N(!0), K(
              Et,
              null,
              xr(c(S), (V) => (N(), K(
                "article",
                {
                  key: V.id,
                  class: W(["message-row", `message-row--${V.role}`])
                },
                [
                  w("div", WT, [
                    V.role === "assistant" ? (N(), se(c(xl), {
                      key: 0,
                      theme: "outline",
                      size: "18"
                    })) : (N(), K(
                      "span",
                      GT,
                      j(c(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  w("div", KT, [
                    V.role === "user" ? (N(), K("div", YT, [
                      w(
                        "div",
                        null,
                        j(V.content),
                        1
                        /* TEXT */
                      ),
                      w(
                        "time",
                        null,
                        j(rt(V)),
                        1
                        /* TEXT */
                      )
                    ])) : (N(), K(
                      Et,
                      { key: 1 },
                      [
                        w("div", qT, [
                          w(
                            "span",
                            null,
                            j(c(E)),
                            1
                            /* TEXT */
                          ),
                          w(
                            "small",
                            null,
                            j(V.streaming ? c(t)("localAi.thinking") : rt(V)),
                            1
                            /* TEXT */
                          )
                        ]),
                        w(
                          "div",
                          {
                            class: W(["assistant-card", { "assistant-card--streaming": V.streaming }])
                          },
                          [
                            V.content ? (N(), K("div", ZT, [
                              Z(V.content) ? (N(), K("details", {
                                key: 0,
                                class: "reasoning-panel",
                                open: V.streaming
                              }, [
                                w("summary", null, [
                                  $[3] || ($[3] = w(
                                    "span",
                                    null,
                                    "Reasoning",
                                    -1
                                    /* HOISTED */
                                  )),
                                  V.streaming ? (N(), K(
                                    "small",
                                    QT,
                                    j(c(t)("localAi.thinking")),
                                    1
                                    /* TEXT */
                                  )) : Q("v-if", !0)
                                ]),
                                w("div", {
                                  class: "message-content markdown-body",
                                  innerHTML: J(Z(V.content))
                                }, null, 8, JT)
                              ], 8, XT)) : Q("v-if", !0),
                              Ve(V.content) ? (N(), K("div", {
                                key: 1,
                                class: "message-content markdown-body",
                                innerHTML: J(Ve(V.content))
                              }, null, 8, eE)) : Q("v-if", !0)
                            ])) : (N(), K(
                              "div",
                              tE,
                              j(c(t)("localAi.thinking")),
                              1
                              /* TEXT */
                            ))
                          ],
                          2
                          /* CLASS */
                        ),
                        V.content ? (N(), K("div", nE, [
                          w(
                            "span",
                            null,
                            " Context: " + j(me(V).context) + "/" + j(me(V).contextMax) + " (" + j(me(V).contextPercent) + "%) ",
                            1
                            /* TEXT */
                          ),
                          w(
                            "span",
                            null,
                            "Output: " + j(me(V).output),
                            1
                            /* TEXT */
                          ),
                          w(
                            "span",
                            null,
                            j(me(V).seconds) + "s",
                            1
                            /* TEXT */
                          ),
                          w(
                            "span",
                            null,
                            j(me(V).speed) + " t/s",
                            1
                            /* TEXT */
                          )
                        ])) : Q("v-if", !0),
                        V.streaming ? Q("v-if", !0) : (N(), K("div", rE, [
                          w("button", {
                            type: "button",
                            title: c(t)("common.copy"),
                            onClick: (Y) => ut(V)
                          }, [
                            F(c(yd), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, oE),
                          w("button", {
                            type: "button",
                            title: c(t)("localAi.regenerate"),
                            onClick: (Y) => C(V.id)
                          }, [
                            F(c(Rl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, aE),
                          w("button", {
                            type: "button",
                            title: c(t)("localAi.like"),
                            onClick: k
                          }, [
                            F(c(Td), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, sE),
                          w("button", {
                            type: "button",
                            title: c(t)("localAi.dislike"),
                            onClick: k
                          }, [
                            F(c(_d), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, lE),
                          w("button", {
                            type: "button",
                            title: c(t)("common.edit"),
                            onClick: (Y) => ft(V)
                          }, [
                            F(c(kd), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, iE),
                          w("button", {
                            type: "button",
                            title: c(t)("common.delete"),
                            onClick: (Y) => Ge(V.id)
                          }, [
                            F(c(Il), {
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
            onSubmit: Ke(ie, ["prevent"])
          },
          [
            gt(w("textarea", {
              "onUpdate:modelValue": $[1] || ($[1] = (V) => po(a) ? a.value = V : null),
              class: "chat-input",
              rows: "3",
              placeholder: c(t)("localAi.chatPlaceholder"),
              onKeydown: Gt(Ke(ie, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, uE), [
              [mo, c(a)]
            ]),
            w("div", fE, [
              w("div", dE, [
                w("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: c(t)("localAi.settings"),
                  onClick: Ze
                }, [
                  F(c(rs), {
                    theme: "outline",
                    size: "16"
                  })
                ], 8, pE),
                w("label", mE, [
                  w("select", {
                    value: c(E),
                    disabled: ""
                  }, [
                    w("option", { value: c(E) }, j(c(E)), 9, gE)
                  ], 8, hE),
                  F(c(wd), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ]),
              w("div", vE, [
                $[4] || ($[4] = w(
                  "span",
                  { class: "input-hint" },
                  "Ctrl + Enter",
                  -1
                  /* HOISTED */
                )),
                w("button", {
                  class: "send-btn",
                  type: "submit",
                  disabled: !c(g),
                  title: c(t)("localAi.send"),
                  "aria-label": c(t)("localAi.send")
                }, [
                  F(c(Od), {
                    theme: "outline",
                    size: "15"
                  })
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
}), _E = /* @__PURE__ */ Ks(yE, [["__scopeId", "data-v-4eadee81"]]), wE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _E
}, Symbol.toStringTag, { value: "Module" }));
async function Fc(e = {}) {
  return typeof e == "object" && Object.freeze(e), await At("plugin:dialog|open", { options: e });
}
const kE = { class: "settings-panel local-ai-settings-shell" }, TE = { class: "local-ai-hero panel-card" }, EE = { class: "panel-title" }, SE = { class: "hero-desc" }, AE = { class: "header-actions" }, CE = {
  key: 0,
  class: "settings-grid"
}, OE = { class: "summary-panel panel-card" }, LE = { class: "status-strip" }, IE = { class: "summary-card" }, RE = { class: "summary-card__title" }, xE = { class: "summary-card__desc" }, NE = { class: "service-controls" }, PE = { class: "service-url" }, $E = { class: "summary-card" }, ME = { class: "summary-card__title" }, DE = { class: "summary-card__desc" }, FE = { class: "summary-meta" }, zE = { class: "form-panel panel-card" }, BE = { class: "settings-section" }, VE = { class: "settings-section__header" }, jE = { class: "field-stack" }, UE = { class: "field-row" }, HE = { class: "path-control" }, WE = { class: "field-row" }, GE = { class: "field-row" }, KE = { class: "field-row" }, YE = { class: "path-control" }, qE = ["placeholder"], ZE = { class: "settings-section grid-two" }, XE = { class: "settings-section__header" }, QE = { class: "param-grid" }, JE = { class: "number-field" }, eS = { class: "number-field" }, tS = { class: "number-field" }, nS = { class: "number-field" }, rS = { class: "number-field" }, oS = { class: "number-field" }, aS = { class: "settings-section grid-two" }, sS = { class: "settings-section__header" }, lS = { class: "switch-grid" }, iS = { class: "settings-section grid-two" }, cS = { class: "settings-section__header" }, uS = { class: "switch-grid switch-grid--two" }, fS = { class: "number-field" }, dS = { class: "number-field" }, pS = { class: "settings-section grid-two" }, mS = { class: "settings-section__header" }, hS = { class: "param-grid param-grid--three" }, gS = { class: "number-field" }, vS = { class: "number-field" }, bS = { class: "number-field" }, yS = { class: "settings-footer" }, _S = ["title"], wS = /* @__PURE__ */ ne({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Eo(), n = U(null), r = U(null), o = U(null), a = U(null), s = U(!1), i = U(!1), l = U(!1), u = U(!1), f = U(!1);
    let p = null;
    const m = R(() => !!a.value?.selectedModelPath), v = R({ get: () => n.value?.modelPath ?? "", set: (P) => {
      n.value && (n.value.modelPath = P || void 0);
    } }), h = R({ get: () => n.value?.mmprojPath ?? "", set: (P) => {
      n.value && (n.value.mmprojPath = P || void 0);
    } }), g = R(() => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")), A = R(() => m.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")), d = R(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), S = (P) => P.split(/[\\/]+/).pop() ?? P, I = async () => {
      s.value = !0;
      try {
        n.value = await Uf(), await Promise.all([E(), O(), y()]);
      } catch (P) {
        Rn.error("[LocalAI] refresh settings failed", P), Ot.msg(`${t("localAi.refreshFailed")}: ${P}`, "error");
      } finally {
        s.value = !1;
      }
    }, E = async () => {
      r.value = await Ik();
    }, y = async () => {
      o.value = await Hf();
    }, O = async () => {
      n.value && (a.value = await Lk(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, L = async () => {
      if (n.value)
        try {
          await Xa(n.value);
        } catch (P) {
          Rn.warn("[LocalAI] autosave failed", P);
        }
    }, H = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Xa(n.value), await Promise.all([E(), O(), y()]), Ot.msg(t("localAi.configSaved"));
        } catch (P) {
          Ot.msg(`${t("localAi.configSaveFailed")}: ${P}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, G = async () => {
      const P = await Fc({ directory: !0, multiple: !1, title: t("localAi.chooseModelDir") });
      !P || Array.isArray(P) || !n.value || (n.value.modelDir = P, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await O());
    }, ee = async () => {
      const P = await Fc({ multiple: !1, title: t("localAi.chooseRuntime"), filters: [{ name: "llama-server", extensions: ["exe"] }] });
      !P || Array.isArray(P) || !n.value || (n.value.runtimePath = P, await L(), await E());
    }, ue = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Xa(n.value), o.value = await Rk(n.value), Ot.msg(t("localAi.serviceStarted"));
        } catch (P) {
          Ot.msg(`${t("localAi.serviceStartFailed")}: ${P}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, te = async () => {
      u.value = !0;
      try {
        await H(), o.value = await xk(), Ot.msg(t("localAi.serviceRestarted"));
      } catch (P) {
        Ot.msg(`${t("localAi.serviceRestartFailed")}: ${P}`, "error");
      } finally {
        u.value = !1;
      }
    }, fe = async () => {
      f.value = !0;
      try {
        await Nk(), await y(), Ot.msg(t("localAi.serviceStoppedMsg"));
      } catch (P) {
        Ot.msg(`${t("localAi.serviceStopFailed")}: ${P}`, "error");
      } finally {
        f.value = !1;
      }
    }, de = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return nt(async () => {
      await I(), p = setInterval(() => {
        y().catch((P) => Rn.warn("[LocalAI] status refresh failed", P));
      }, 5e3);
    }), ga(() => {
      p && clearInterval(p);
    }), (P, D) => {
      const B = Uw, le = jw, J = Aw, ve = Zw;
      return N(), K("div", kE, [
        w("header", TE, [
          w("div", null, [
            w(
              "h3",
              EE,
              j(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            w(
              "p",
              SE,
              j(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          w("div", AE, [
            F(c(On), {
              size: "small",
              plain: "",
              onClick: de
            }, {
              default: oe(() => [
                Wt(
                  j(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            F(c(On), {
              size: "small",
              loading: c(s),
              onClick: I
            }, {
              default: oe(() => [
                Wt(
                  j(c(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        c(n) ? (N(), K("main", CE, [
          w("aside", OE, [
            w("div", LE, [
              w(
                "div",
                {
                  class: W(["status-item", { ready: c(r)?.available }])
                },
                [
                  D[20] || (D[20] = w(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  w(
                    "span",
                    null,
                    j(c(g)),
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
                  class: W(["status-item", { ready: c(m) }])
                },
                [
                  D[21] || (D[21] = w(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  w(
                    "span",
                    null,
                    j(c(A)),
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
                  class: W(["status-item", { ready: c(o)?.healthy }])
                },
                [
                  D[22] || (D[22] = w(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  w(
                    "span",
                    null,
                    j(c(d)),
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
                j(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              w(
                "div",
                xE,
                j(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              w("div", NE, [
                F(c(On), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: ue
                }, {
                  default: oe(() => [
                    Wt(
                      j(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                F(c(On), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: te
                }, {
                  default: oe(() => [
                    Wt(
                      j(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                F(c(On), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(f),
                  disabled: !c(o)?.running,
                  onClick: fe
                }, {
                  default: oe(() => [
                    Wt(
                      j(c(t)("localAi.stopService")),
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
                j(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            w("section", $E, [
              w(
                "div",
                ME,
                j(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              w(
                "div",
                DE,
                j(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              w("div", FE, [
                w("div", null, [
                  w(
                    "span",
                    null,
                    j(c(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "b",
                    null,
                    j(c(r)?.available ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                w("div", null, [
                  w(
                    "span",
                    null,
                    j(c(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "b",
                    null,
                    j(c(m) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                w("div", null, [
                  w(
                    "span",
                    null,
                    j(c(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "b",
                    null,
                    j(c(o)?.healthy ? c(t)("common.yes") : c(t)("common.no")),
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
                    j(c(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    j(c(t)("localAi.modelRuntimeDesc")),
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
                    j(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  w("div", HE, [
                    gt(w(
                      "input",
                      {
                        "onUpdate:modelValue": D[0] || (D[0] = (Z) => c(n).modelDir = Z),
                        class: "text-input",
                        onChange: O
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [mo, c(n).modelDir]
                    ]),
                    F(c(On), {
                      size: "small",
                      plain: "",
                      onClick: G
                    }, {
                      default: oe(() => [
                        Wt(
                          j(c(t)("common.browse")),
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
                    j(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  F(le, {
                    modelValue: c(v),
                    "onUpdate:modelValue": D[1] || (D[1] = (Z) => po(v) ? v.value = Z : null),
                    class: "field-select",
                    clearable: "",
                    onChange: L
                  }, {
                    default: oe(() => [
                      (N(!0), K(
                        Et,
                        null,
                        xr(c(a)?.mainModels ?? [], (Z) => (N(), se(B, {
                          key: Z,
                          label: S(Z),
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
                    j(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  F(le, {
                    modelValue: c(h),
                    "onUpdate:modelValue": D[2] || (D[2] = (Z) => po(h) ? h.value = Z : null),
                    class: "field-select",
                    clearable: "",
                    onChange: L
                  }, {
                    default: oe(() => [
                      (N(!0), K(
                        Et,
                        null,
                        xr(c(a)?.mmprojModels ?? [], (Z) => (N(), se(B, {
                          key: Z,
                          label: S(Z),
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
                    j(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  w("div", YE, [
                    gt(w("input", {
                      "onUpdate:modelValue": D[3] || (D[3] = (Z) => c(n).runtimePath = Z),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, qE), [
                      [mo, c(n).runtimePath]
                    ]),
                    F(c(On), {
                      size: "small",
                      plain: "",
                      onClick: ee
                    }, {
                      default: oe(() => [
                        Wt(
                          j(c(t)("common.browse")),
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
                    j(c(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    j(c(t)("localAi.inferenceParamsDesc")),
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
                    j(c(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  F(J, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": D[4] || (D[4] = (Z) => c(n).ctxSize = Z),
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
                    j(c(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  F(J, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": D[5] || (D[5] = (Z) => c(n).gpuLayers = Z),
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
                    j(c(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  F(J, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": D[6] || (D[6] = (Z) => c(n).threads = Z),
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
                    j(c(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  F(J, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": D[7] || (D[7] = (Z) => c(n).batchSize = Z),
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
                    j(c(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  F(J, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": D[8] || (D[8] = (Z) => c(n).ubatchSize = Z),
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
                    j(c(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  F(J, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": D[9] || (D[9] = (Z) => c(n).mainGpu = Z),
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
                    j(c(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    j(c(t)("localAi.accelerationDesc")),
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
                    j(c(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  F(ve, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": D[10] || (D[10] = (Z) => c(n).flashAttn = Z)
                  }, null, 8, ["modelValue"])
                ]),
                w("label", null, [
                  w(
                    "span",
                    null,
                    j(c(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  F(ve, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": D[11] || (D[11] = (Z) => c(n).kvOffload = Z)
                  }, null, 8, ["modelValue"])
                ]),
                w("label", null, [
                  w(
                    "span",
                    null,
                    j(c(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  F(ve, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": D[12] || (D[12] = (Z) => c(n).mmap = Z)
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
                    j(c(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    j(c(t)("localAi.lifecycleDesc")),
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
                    j(c(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  F(ve, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": D[13] || (D[13] = (Z) => c(n).autoStartOnRequest = Z)
                  }, null, 8, ["modelValue"])
                ]),
                w("label", null, [
                  w(
                    "span",
                    null,
                    j(c(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  F(ve, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": D[14] || (D[14] = (Z) => c(n).keepAlive = Z)
                  }, null, 8, ["modelValue"])
                ]),
                w("label", fS, [
                  w(
                    "span",
                    null,
                    j(c(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  F(J, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": D[15] || (D[15] = (Z) => c(n).idleTimeoutMinutes = Z),
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
                    j(c(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  F(J, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": D[16] || (D[16] = (Z) => c(n).requestTimeoutSecs = Z),
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
                    j(c(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    j(c(t)("localAi.generationDesc")),
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
                    j(c(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  F(J, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": D[17] || (D[17] = (Z) => c(n).temperature = Z),
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
                    j(c(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  F(J, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": D[18] || (D[18] = (Z) => c(n).maxTokens = Z),
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
                    j(c(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  F(J, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": D[19] || (D[19] = (Z) => c(n).port = Z),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            w("div", yS, [
              F(c(On), {
                type: "primary",
                loading: c(i),
                onClick: H
              }, {
                default: oe(() => [
                  Wt(
                    j(c(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              c(o)?.commandLine ? (N(), K("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, j(c(o).commandLine), 9, _S)) : Q("v-if", !0)
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
