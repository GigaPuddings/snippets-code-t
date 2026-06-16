var qf = Object.defineProperty;
var Zf = (e, t, n) => t in e ? qf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Me = (e, t, n) => Zf(e, typeof t != "symbol" ? t + "" : t, n);
import * as Va from "vue";
import { inject as $e, createVNode as $, defineAsyncComponent as Xf, ref as V, shallowRef as Qn, computed as I, watch as be, onMounted as ot, onUnmounted as ga, defineComponent as re, h as zc, Text as Bc, Fragment as Tt, createElementBlock as G, openBlock as N, normalizeClass as j, createCommentVNode as te, renderSlot as he, createElementVNode as w, getCurrentInstance as It, unref as c, watchEffect as Vc, readonly as Ls, getCurrentScope as Qf, onScopeDispose as Jf, nextTick as tt, isRef as po, warn as ed, provide as _n, mergeProps as Rr, toRef as Rn, useAttrs as td, useSlots as nd, normalizeStyle as bt, createBlock as le, withCtx as ae, resolveDynamicComponent as Ot, withModifiers as Ye, toDisplayString as B, onBeforeUnmount as Tn, Transition as jr, withDirectives as ht, vShow as zn, reactive as ur, onActivated as rd, onUpdated as Uc, cloneVNode as od, Comment as ad, Teleport as sd, onBeforeMount as ld, onDeactivated as id, createTextVNode as Wt, withKeys as Gt, createSlots as cd, toRaw as ud, toRefs as Is, resolveComponent as lr, resolveDirective as fd, toHandlerKey as dd, renderList as xr, vModelText as mo, shallowReactive as pd, isVNode as ho, render as ta } from "vue";
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
      var s = hd(), i = $e(vd, md);
      return function() {
        var l = a.size, u = a.strokeWidth, f = a.strokeLinecap, p = a.strokeLinejoin, m = a.theme, v = a.fill, g = a.spin, h = gd(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: f,
          strokeLinejoin: p,
          theme: m,
          fill: v
        }, i), A = [i.prefix + "-icon"];
        return A.push(i.prefix + "-icon-" + e), t && i.rtl && A.push(i.prefix + "-icon-rtl"), g && A.push(i.prefix + "-icon-spin"), $("span", {
          class: A.join(" ")
        }, [n(h)]);
      };
    }
  };
  return r;
}
const bd = xt("add", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M24 16V32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M16 24L32 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), yd = xt("copy", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Il = xt("delete", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), _d = xt("dislike", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M24 31L21 26L28 20L19 15L20 9.19942C18.4999 8.43256 16.8004 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C31.1996 8 29.5001 8.43256 28 9.19942",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wd = xt("down", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), kd = xt("edit", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M7 42H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Td = xt("like", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ed = xt("message", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M14 18L32 18",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M14 26H32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M14 34H24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Sd = xt("more", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), $("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), $("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), Rl = xt("refresh", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ad = xt("right", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M19 12L31 24L19 36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xl = xt("robot", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("rect", {
    x: "9",
    y: "17",
    width: "30",
    height: "26",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M33 9L28 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M15 9L20 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("circle", {
    cx: "34",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), $("circle", {
    cx: "14",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), $("rect", {
    x: "16",
    y: "24",
    width: "16",
    height: "8",
    rx: "4",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), $("path", {
    d: "M9 24H4V34H9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M39 24H44V34H39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Cd = xt("search", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Od = xt("send", !0, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M43.0001 5L22.1001 25.9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), rs = xt("setting-two", !1, function(e) {
  return $("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [$("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), $("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), kS = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => vE)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: rs,
    component: Xf(() => Promise.resolve().then(() => yS))
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
const Nl = typeof window < "u", mr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Id = (e, t, n) => Rd({ l: e, k: t, s: n }), Rd = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), pt = (e) => typeof e == "number" && isFinite(e), xd = (e) => Rs(e) === "[object Date]", na = (e) => Rs(e) === "[object RegExp]", va = (e) => Le(e) && Object.keys(e).length === 0, yt = Object.assign, Nd = Object.create, De = (e = null) => Nd(e);
let Pl;
const Zo = () => Pl || (Pl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : De());
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
const rt = Array.isArray, qe = (e) => typeof e == "function", oe = (e) => typeof e == "string", nt = (e) => typeof e == "boolean", Ie = (e) => e !== null && typeof e == "object", Md = (e) => Ie(e) && qe(e.then) && qe(e.catch), jc = Object.prototype.toString, Rs = (e) => jc.call(e), Le = (e) => Rs(e) === "[object Object]", Dd = (e) => e == null ? "" : rt(e) || Le(e) && e.toString === jc ? JSON.stringify(e, null, 2) : String(e);
function xs(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Fo = (e) => !Ie(e) || rt(e);
function Xo(e, t) {
  if (Fo(e) || Fo(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Ie(r[a]) && !Ie(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : De()), Fo(o[a]) || Fo(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
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
const xe = {
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
`, Ud = "\u2028", jd = "\u2029";
function Hd(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (O) => t[O] === Vd && t[O + 1] === kt, i = (O) => t[O] === kt, l = (O) => t[O] === jd, u = (O) => t[O] === Ud, f = (O) => s(O) || i(O) || l(O) || u(O), p = () => n, m = () => r, v = () => o, g = () => a, h = (O) => s(O) || l(O) || u(O) ? kt : t[O], A = () => h(n), d = () => h(n + a);
  function E() {
    return a = 0, f(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function L() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function T() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function y(O = 0) {
    a = O;
  }
  function C() {
    const O = n + a;
    for (; O !== n; )
      E();
    a = 0;
  }
  return {
    index: p,
    line: m,
    column: v,
    peekOffset: g,
    charAt: h,
    currentChar: A,
    currentPeek: d,
    next: E,
    peek: L,
    reset: T,
    resetPeek: y,
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
  function p(_, S, D, ...K) {
    const Ee = u();
    if (S.column += D, S.offset += D, f) {
      const fe = n ? os(Ee.startLoc, S) : null, k = ba(_, fe, {
        domain: Gd,
        args: K
      });
      f(k);
    }
  }
  function m(_, S, D) {
    _.endLoc = a(), _.currentType = S;
    const K = { type: S };
    return n && (K.loc = os(_.startLoc, _.endLoc)), D != null && (K.value = D), K;
  }
  const v = (_) => m(
    _,
    13
    /* TokenTypes.EOF */
  );
  function g(_, S) {
    return _.currentChar() === S ? (_.next(), S) : (p(xe.EXPECTED_TOKEN, a(), 0, S), "");
  }
  function h(_) {
    let S = "";
    for (; _.currentPeek() === cn || _.currentPeek() === kt; )
      S += _.currentPeek(), _.peek();
    return S;
  }
  function A(_) {
    const S = h(_);
    return _.skipToPeek(), S;
  }
  function d(_) {
    if (_ === An)
      return !1;
    const S = _.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S === 95;
  }
  function E(_) {
    if (_ === An)
      return !1;
    const S = _.charCodeAt(0);
    return S >= 48 && S <= 57;
  }
  function L(_, S) {
    const { currentType: D } = S;
    if (D !== 2)
      return !1;
    h(_);
    const K = d(_.currentPeek());
    return _.resetPeek(), K;
  }
  function T(_, S) {
    const { currentType: D } = S;
    if (D !== 2)
      return !1;
    h(_);
    const K = _.currentPeek() === "-" ? _.peek() : _.currentPeek(), Ee = E(K);
    return _.resetPeek(), Ee;
  }
  function y(_, S) {
    const { currentType: D } = S;
    if (D !== 2)
      return !1;
    h(_);
    const K = _.currentPeek() === Dl;
    return _.resetPeek(), K;
  }
  function C(_, S) {
    const { currentType: D } = S;
    if (D !== 7)
      return !1;
    h(_);
    const K = _.currentPeek() === ".";
    return _.resetPeek(), K;
  }
  function O(_, S) {
    const { currentType: D } = S;
    if (D !== 8)
      return !1;
    h(_);
    const K = d(_.currentPeek());
    return _.resetPeek(), K;
  }
  function W(_, S) {
    const { currentType: D } = S;
    if (!(D === 7 || D === 11))
      return !1;
    h(_);
    const K = _.currentPeek() === ":";
    return _.resetPeek(), K;
  }
  function U(_, S) {
    const { currentType: D } = S;
    if (D !== 9)
      return !1;
    const K = () => {
      const fe = _.currentPeek();
      return fe === "{" ? d(_.peek()) : fe === "@" || fe === "|" || fe === ":" || fe === "." || fe === cn || !fe ? !1 : fe === kt ? (_.peek(), K()) : ue(_, !1);
    }, Ee = K();
    return _.resetPeek(), Ee;
  }
  function ne(_) {
    h(_);
    const S = _.currentPeek() === "|";
    return _.resetPeek(), S;
  }
  function ue(_, S = !0) {
    const D = (Ee = !1, fe = "") => {
      const k = _.currentPeek();
      return k === "{" || k === "@" || !k ? Ee : k === "|" ? !(fe === cn || fe === kt) : k === cn ? (_.peek(), D(!0, cn)) : k === kt ? (_.peek(), D(!0, kt)) : !0;
    }, K = D();
    return S && _.resetPeek(), K;
  }
  function ee(_, S) {
    const D = _.currentChar();
    return D === An ? An : S(D) ? (_.next(), D) : null;
  }
  function me(_) {
    const S = _.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S >= 48 && S <= 57 || // 0-9
    S === 95 || // _
    S === 36;
  }
  function de(_) {
    return ee(_, me);
  }
  function R(_) {
    const S = _.charCodeAt(0);
    return S >= 97 && S <= 122 || // a-z
    S >= 65 && S <= 90 || // A-Z
    S >= 48 && S <= 57 || // 0-9
    S === 95 || // _
    S === 36 || // $
    S === 45;
  }
  function P(_) {
    return ee(_, R);
  }
  function z(_) {
    const S = _.charCodeAt(0);
    return S >= 48 && S <= 57;
  }
  function ie(_) {
    return ee(_, z);
  }
  function J(_) {
    const S = _.charCodeAt(0);
    return S >= 48 && S <= 57 || // 0-9
    S >= 65 && S <= 70 || // A-F
    S >= 97 && S <= 102;
  }
  function _e(_) {
    return ee(_, J);
  }
  function Z(_) {
    let S = "", D = "";
    for (; S = ie(_); )
      D += S;
    return D;
  }
  function Ue(_) {
    let S = "";
    for (; ; ) {
      const D = _.currentChar();
      if (D === "{" || D === "}" || D === "@" || D === "|" || !D)
        break;
      if (D === cn || D === kt)
        if (ue(_))
          S += D, _.next();
        else {
          if (ne(_))
            break;
          S += D, _.next();
        }
      else
        S += D, _.next();
    }
    return S;
  }
  function Ce(_) {
    A(_);
    let S = "", D = "";
    for (; S = P(_); )
      D += S;
    const K = _.currentChar();
    if (K && K !== "}" && K !== An && K !== cn && K !== kt && K !== "　") {
      const Ee = ct(_);
      return p(xe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, D + Ee), D + Ee;
    }
    return _.currentChar() === An && p(xe.UNTERMINATED_CLOSING_BRACE, a(), 0), D;
  }
  function ke(_) {
    A(_);
    let S = "";
    return _.currentChar() === "-" ? (_.next(), S += `-${Z(_)}`) : S += Z(_), _.currentChar() === An && p(xe.UNTERMINATED_CLOSING_BRACE, a(), 0), S;
  }
  function We(_) {
    return _ !== Dl && _ !== kt;
  }
  function Te(_) {
    A(_), g(_, "'");
    let S = "", D = "";
    for (; S = ee(_, We); )
      S === "\\" ? D += Ge(_) : D += S;
    const K = _.currentChar();
    return K === kt || K === An ? (p(xe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), K === kt && (_.next(), g(_, "'")), D) : (g(_, "'"), D);
  }
  function Ge(_) {
    const S = _.currentChar();
    switch (S) {
      case "\\":
      case "'":
        return _.next(), `\\${S}`;
      case "u":
        return ce(_, S, 4);
      case "U":
        return ce(_, S, 6);
      default:
        return p(xe.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, S), "";
    }
  }
  function ce(_, S, D) {
    g(_, S);
    let K = "";
    for (let Ee = 0; Ee < D; Ee++) {
      const fe = _e(_);
      if (!fe) {
        p(xe.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${S}${K}${_.currentChar()}`);
        break;
      }
      K += fe;
    }
    return `\\${S}${K}`;
  }
  function et(_) {
    return _ !== "{" && _ !== "}" && _ !== cn && _ !== kt;
  }
  function ct(_) {
    A(_);
    let S = "", D = "";
    for (; S = ee(_, et); )
      D += S;
    return D;
  }
  function je(_) {
    let S = "", D = "";
    for (; S = de(_); )
      D += S;
    return D;
  }
  function gt(_) {
    const S = (D) => {
      const K = _.currentChar();
      return K === "{" || K === "@" || K === "|" || K === "(" || K === ")" || !K || K === cn ? D : (D += K, _.next(), S(D));
    };
    return S("");
  }
  function ut(_) {
    A(_);
    const S = g(
      _,
      "|"
      /* TokenChars.Pipe */
    );
    return A(_), S;
  }
  function H(_, S) {
    let D = null;
    switch (_.currentChar()) {
      case "{":
        return S.braceNest >= 1 && p(xe.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), _.next(), D = m(
          S,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), A(_), S.braceNest++, D;
      case "}":
        return S.braceNest > 0 && S.currentType === 2 && p(xe.EMPTY_PLACEHOLDER, a(), 0), _.next(), D = m(
          S,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), S.braceNest--, S.braceNest > 0 && A(_), S.inLinked && S.braceNest === 0 && (S.inLinked = !1), D;
      case "@":
        return S.braceNest > 0 && p(xe.UNTERMINATED_CLOSING_BRACE, a(), 0), D = Q(_, S) || v(S), S.braceNest = 0, D;
      default: {
        let Ee = !0, fe = !0, k = !0;
        if (ne(_))
          return S.braceNest > 0 && p(xe.UNTERMINATED_CLOSING_BRACE, a(), 0), D = m(S, 1, ut(_)), S.braceNest = 0, S.inLinked = !1, D;
        if (S.braceNest > 0 && (S.currentType === 4 || S.currentType === 5 || S.currentType === 6))
          return p(xe.UNTERMINATED_CLOSING_BRACE, a(), 0), S.braceNest = 0, q(_, S);
        if (Ee = L(_, S))
          return D = m(S, 4, Ce(_)), A(_), D;
        if (fe = T(_, S))
          return D = m(S, 5, ke(_)), A(_), D;
        if (k = y(_, S))
          return D = m(S, 6, Te(_)), A(_), D;
        if (!Ee && !fe && !k)
          return D = m(S, 12, ct(_)), p(xe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, D.value), A(_), D;
        break;
      }
    }
    return D;
  }
  function Q(_, S) {
    const { currentType: D } = S;
    let K = null;
    const Ee = _.currentChar();
    switch ((D === 7 || D === 8 || D === 11 || D === 9) && (Ee === kt || Ee === cn) && p(xe.INVALID_LINKED_FORMAT, a(), 0), Ee) {
      case "@":
        return _.next(), K = m(
          S,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), S.inLinked = !0, K;
      case ".":
        return A(_), _.next(), m(
          S,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return A(_), _.next(), m(
          S,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ne(_) ? (K = m(S, 1, ut(_)), S.braceNest = 0, S.inLinked = !1, K) : C(_, S) || W(_, S) ? (A(_), Q(_, S)) : O(_, S) ? (A(_), m(S, 11, je(_))) : U(_, S) ? (A(_), Ee === "{" ? H(_, S) || K : m(S, 10, gt(_))) : (D === 7 && p(xe.INVALID_LINKED_FORMAT, a(), 0), S.braceNest = 0, S.inLinked = !1, q(_, S));
    }
  }
  function q(_, S) {
    let D = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (S.braceNest > 0)
      return H(_, S) || v(S);
    if (S.inLinked)
      return Q(_, S) || v(S);
    switch (_.currentChar()) {
      case "{":
        return H(_, S) || v(S);
      case "}":
        return p(xe.UNBALANCED_CLOSING_BRACE, a(), 0), _.next(), m(
          S,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return Q(_, S) || v(S);
      default: {
        if (ne(_))
          return D = m(S, 1, ut(_)), S.braceNest = 0, S.inLinked = !1, D;
        if (ue(_))
          return m(S, 0, Ue(_));
        break;
      }
    }
    return D;
  }
  function ge() {
    const { currentType: _, offset: S, startLoc: D, endLoc: K } = l;
    return l.lastType = _, l.lastOffset = S, l.lastStartLoc = D, l.lastEndLoc = K, l.offset = o(), l.startLoc = a(), r.currentChar() === An ? m(
      l,
      13
      /* TokenTypes.EOF */
    ) : q(r, l);
  }
  return {
    nextToken: ge,
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
  function r(d, E, L, T, ...y) {
    const C = d.currentPosition();
    if (C.offset += T, C.column += T, n) {
      const O = t ? os(L, C) : null, W = ba(E, O, {
        domain: Yd,
        args: y
      });
      n(W);
    }
  }
  function o(d, E, L) {
    const T = { type: d };
    return t && (T.start = E, T.end = E, T.loc = { start: L, end: L }), T;
  }
  function a(d, E, L, T) {
    t && (d.end = E, d.loc && (d.loc.end = L));
  }
  function s(d, E) {
    const L = d.context(), T = o(3, L.offset, L.startLoc);
    return T.value = E, a(T, d.currentOffset(), d.currentPosition()), T;
  }
  function i(d, E) {
    const L = d.context(), { lastOffset: T, lastStartLoc: y } = L, C = o(5, T, y);
    return C.index = parseInt(E, 10), d.nextToken(), a(C, d.currentOffset(), d.currentPosition()), C;
  }
  function l(d, E) {
    const L = d.context(), { lastOffset: T, lastStartLoc: y } = L, C = o(4, T, y);
    return C.key = E, d.nextToken(), a(C, d.currentOffset(), d.currentPosition()), C;
  }
  function u(d, E) {
    const L = d.context(), { lastOffset: T, lastStartLoc: y } = L, C = o(9, T, y);
    return C.value = E.replace(qd, Zd), d.nextToken(), a(C, d.currentOffset(), d.currentPosition()), C;
  }
  function f(d) {
    const E = d.nextToken(), L = d.context(), { lastOffset: T, lastStartLoc: y } = L, C = o(8, T, y);
    return E.type !== 11 ? (r(d, xe.UNEXPECTED_EMPTY_LINKED_MODIFIER, L.lastStartLoc, 0), C.value = "", a(C, T, y), {
      nextConsumeToken: E,
      node: C
    }) : (E.value == null && r(d, xe.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, un(E)), C.value = E.value || "", a(C, d.currentOffset(), d.currentPosition()), {
      node: C
    });
  }
  function p(d, E) {
    const L = d.context(), T = o(7, L.offset, L.startLoc);
    return T.value = E, a(T, d.currentOffset(), d.currentPosition()), T;
  }
  function m(d) {
    const E = d.context(), L = o(6, E.offset, E.startLoc);
    let T = d.nextToken();
    if (T.type === 8) {
      const y = f(d);
      L.modifier = y.node, T = y.nextConsumeToken || d.nextToken();
    }
    switch (T.type !== 9 && r(d, xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, un(T)), T = d.nextToken(), T.type === 2 && (T = d.nextToken()), T.type) {
      case 10:
        T.value == null && r(d, xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, un(T)), L.key = p(d, T.value || "");
        break;
      case 4:
        T.value == null && r(d, xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, un(T)), L.key = l(d, T.value || "");
        break;
      case 5:
        T.value == null && r(d, xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, un(T)), L.key = i(d, T.value || "");
        break;
      case 6:
        T.value == null && r(d, xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, un(T)), L.key = u(d, T.value || "");
        break;
      default: {
        r(d, xe.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
        const y = d.context(), C = o(7, y.offset, y.startLoc);
        return C.value = "", a(C, y.offset, y.startLoc), L.key = C, a(L, y.offset, y.startLoc), {
          nextConsumeToken: T,
          node: L
        };
      }
    }
    return a(L, d.currentOffset(), d.currentPosition()), {
      node: L
    };
  }
  function v(d) {
    const E = d.context(), L = E.currentType === 1 ? d.currentOffset() : E.offset, T = E.currentType === 1 ? E.endLoc : E.startLoc, y = o(2, L, T);
    y.items = [];
    let C = null;
    do {
      const U = C || d.nextToken();
      switch (C = null, U.type) {
        case 0:
          U.value == null && r(d, xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, un(U)), y.items.push(s(d, U.value || ""));
          break;
        case 5:
          U.value == null && r(d, xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, un(U)), y.items.push(i(d, U.value || ""));
          break;
        case 4:
          U.value == null && r(d, xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, un(U)), y.items.push(l(d, U.value || ""));
          break;
        case 6:
          U.value == null && r(d, xe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, un(U)), y.items.push(u(d, U.value || ""));
          break;
        case 7: {
          const ne = m(d);
          y.items.push(ne.node), C = ne.nextConsumeToken || null;
          break;
        }
      }
    } while (E.currentType !== 13 && E.currentType !== 1);
    const O = E.currentType === 1 ? E.lastOffset : d.currentOffset(), W = E.currentType === 1 ? E.lastEndLoc : d.currentPosition();
    return a(y, O, W), y;
  }
  function g(d, E, L, T) {
    const y = d.context();
    let C = T.items.length === 0;
    const O = o(1, E, L);
    O.cases = [], O.cases.push(T);
    do {
      const W = v(d);
      C || (C = W.items.length === 0), O.cases.push(W);
    } while (y.currentType !== 13);
    return C && r(d, xe.MUST_HAVE_MESSAGES_IN_PLURAL, L, 0), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function h(d) {
    const E = d.context(), { offset: L, startLoc: T } = E, y = v(d);
    return E.currentType === 13 ? y : g(d, L, T, y);
  }
  function A(d) {
    const E = Kd(d, yt({}, e)), L = E.context(), T = o(0, L.offset, L.startLoc);
    return t && T.loc && (T.loc.source = d), T.body = h(E), e.onCacheKey && (T.cacheKey = e.onCacheKey(d)), L.currentType !== 13 && r(E, xe.UNEXPECTED_LEXICAL_ANALYSIS, L.lastStartLoc, 0, d[L.offset] || ""), a(T, E.currentOffset(), E.currentPosition()), T;
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
  function l(h, A) {
    s.code += h;
  }
  function u(h, A = !0) {
    const d = A ? r : "";
    l(o ? d + "  ".repeat(h) : d);
  }
  function f(h = !0) {
    const A = ++s.indentLevel;
    h && u(A);
  }
  function p(h = !0) {
    const A = --s.indentLevel;
    h && u(A);
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
    helper: (h) => `_${h}`,
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
  const n = oe(t.mode) ? t.mode : "normal", r = oe(t.filename) ? t.filename : "message.intl";
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
  const n = yt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = Xd(n).parse(e);
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
  return Ie(e) && Ps(e) === 0 && (tn(e, "b") || tn(e, "body"));
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
function Ua(e) {
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
let Bo = De();
function vp(e, t = {}) {
  let n = !1;
  const r = t.onError || Bd;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...lp(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function bp(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && oe(e)) {
    nt(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || gp)(e), o = Bo[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = vp(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = Ua(a);
    return s ? i : Bo[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Bo[n];
      return r || (Bo[n] = Ua(e));
    } else
      return Ua(e);
  }
}
const xn = {
  INVALID_ARGUMENT: zd,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, yp = 24;
function Nn(e) {
  return ba(e, null, void 0);
}
function $s(e, t) {
  return t.locale != null ? Vl(t.locale) : Vl(e.locale);
}
let ja;
function Vl(e) {
  if (oe(e))
    return e;
  if (qe(e)) {
    if (e.resolvedOnce && ja != null)
      return ja;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Md(t))
        throw Nn(xn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return ja = t;
    } else
      throw Nn(xn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Nn(xn.NOT_SUPPORT_LOCALE_TYPE);
}
function _p(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...rt(t) ? t : Ie(t) ? Object.keys(t) : oe(t) ? [t] : [n]
  ])];
}
function Jc(e, t, n) {
  const r = oe(n) ? n : ra, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; rt(s); )
      s = Ul(a, s, t);
    const i = rt(t) || !Le(t) ? t : t.default ? t.default : null;
    s = oe(i) ? [i] : i, rt(s) && Ul(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Ul(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && nt(r); o++) {
    const a = t[o];
    oe(a) && (r = wp(e, t[o], n));
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
    e.push(o), (rt(n) || Le(n)) && n[o] && (r = n[o]);
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
    const g = e[n + 1];
    if (r === 5 && g === "'" || r === 6 && g === '"')
      return n++, i = "\\" + g, m[
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
const jl = /* @__PURE__ */ new Map();
function Lp(e, t) {
  return Ie(e) ? e[t] : null;
}
function Ip(e, t) {
  if (!Ie(e))
    return null;
  let n = jl.get(t);
  if (n || (n = Op(t), n && jl.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Qc.includes(s) && vn(o))
      return null;
    const i = o[s];
    if (i === void 0 || qe(o))
      return null;
    o = i, a++;
  }
  return o;
}
const Rp = "11.2.2", ya = -1, ra = "en-US", Hl = "", Wl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function xp() {
  return {
    upper: (e, t) => t === "text" && oe(e) ? e.toUpperCase() : t === "vnode" && Ie(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && oe(e) ? e.toLowerCase() : t === "vnode" && Ie(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && oe(e) ? Wl(e) : t === "vnode" && Ie(e) && "__v_isVNode" in e ? Wl(e.children) : e
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
  const t = qe(e.onWarn) ? e.onWarn : Ld, n = oe(e.version) ? e.version : Rp, r = oe(e.locale) || qe(e.locale) ? e.locale : ra, o = qe(r) ? ra : r, a = rt(e.fallbackLocale) || Le(e.fallbackLocale) || oe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Le(e.messages) ? e.messages : Ha(o), i = Le(e.datetimeFormats) ? e.datetimeFormats : Ha(o), l = Le(e.numberFormats) ? e.numberFormats : Ha(o), u = yt(De(), e.modifiers, xp()), f = e.pluralRules || De(), p = qe(e.missing) ? e.missing : null, m = nt(e.missingWarn) || na(e.missingWarn) ? e.missingWarn : !0, v = nt(e.fallbackWarn) || na(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, h = !!e.unresolving, A = qe(e.postTranslation) ? e.postTranslation : null, d = Le(e.processor) ? e.processor : null, E = nt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, L = !!e.escapeParameter, T = qe(e.messageCompiler) ? e.messageCompiler : eu, y = qe(e.messageResolver) ? e.messageResolver : tu || Lp, C = qe(e.localeFallbacker) ? e.localeFallbacker : nu || _p, O = Ie(e.fallbackContext) ? e.fallbackContext : void 0, W = e, U = Ie(W.__datetimeFormatters) ? W.__datetimeFormatters : /* @__PURE__ */ new Map(), ne = Ie(W.__numberFormatters) ? W.__numberFormatters : /* @__PURE__ */ new Map(), ue = Ie(W.__meta) ? W.__meta : {};
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
    fallbackWarn: v,
    fallbackFormat: g,
    unresolving: h,
    postTranslation: A,
    processor: d,
    warnHtmlMessage: E,
    escapeParameter: L,
    messageCompiler: T,
    messageResolver: y,
    localeFallbacker: C,
    fallbackContext: O,
    onWarn: t,
    __meta: ue
  };
  return ee.datetimeFormats = i, ee.numberFormats = l, ee.__datetimeFormatters = U, ee.__numberFormatters = ne, ee;
}
const Ha = (e) => ({ [e]: De() });
function Ms(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return oe(i) ? i : t;
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
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, f, p] = ss(...t), m = nt(f.missingWarn) ? f.missingWarn : e.missingWarn;
  nt(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const v = !!f.part, g = $s(e, f), h = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!oe(l) || l === "")
    return new Intl.DateTimeFormat(g, p).format(u);
  let A = {}, d, E = null;
  const L = "datetime format";
  for (let C = 0; C < h.length && (d = h[C], A = n[d] || {}, E = A[l], !Le(E)); C++)
    Ms(e, l, d, m, L);
  if (!Le(E) || !oe(d))
    return r ? ya : l;
  let T = `${d}__${l}`;
  va(p) || (T = `${T}__${JSON.stringify(p)}`);
  let y = i.get(T);
  return y || (y = new Intl.DateTimeFormat(d, yt({}, E, p)), i.set(T, y)), v ? y.formatToParts(u) : y.format(u);
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
  const [t, n, r, o] = e, a = De();
  let s = De(), i;
  if (oe(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Nn(xn.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw Nn(xn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (xd(t)) {
    if (isNaN(t.getTime()))
      throw Nn(xn.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (pt(t))
    i = t;
  else
    throw Nn(xn.INVALID_ARGUMENT);
  return oe(n) ? a.key = n : Le(n) && Object.keys(n).forEach((l) => {
    ou.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), oe(r) ? a.locale = r : Le(r) && (s = r), Le(o) && (s = o), [a.key || "", i, a, s];
}
function ql(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Zl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, f, p] = ls(...t), m = nt(f.missingWarn) ? f.missingWarn : e.missingWarn;
  nt(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const v = !!f.part, g = $s(e, f), h = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!oe(l) || l === "")
    return new Intl.NumberFormat(g, p).format(u);
  let A = {}, d, E = null;
  const L = "number format";
  for (let C = 0; C < h.length && (d = h[C], A = n[d] || {}, E = A[l], !Le(E)); C++)
    Ms(e, l, d, m, L);
  if (!Le(E) || !oe(d))
    return r ? ya : l;
  let T = `${d}__${l}`;
  va(p) || (T = `${T}__${JSON.stringify(p)}`);
  let y = i.get(T);
  return y || (y = new Intl.NumberFormat(d, yt({}, E, p)), i.set(T, y)), v ? y.formatToParts(u) : y.format(u);
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
  const [t, n, r, o] = e, a = De();
  let s = De();
  if (!pt(t))
    throw Nn(xn.INVALID_ARGUMENT);
  const i = t;
  return oe(n) ? a.key = n : Le(n) && Object.keys(n).forEach((l) => {
    au.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), oe(r) ? a.locale = r : Le(r) && (s = r), Le(o) && (s = o), [a.key || "", i, a, s];
}
function Xl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Bp = (e) => e, Vp = (e) => "", Up = "text", jp = (e) => e.length === 0 ? "" : xs(e), Hp = Dd;
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
  const t = e.locale, n = Wp(e), r = Ie(e.pluralRules) && oe(t) && qe(e.pluralRules[t]) ? e.pluralRules[t] : Ql, o = Ie(e.pluralRules) && oe(t) && qe(e.pluralRules[t]) ? Ql : void 0, a = (d) => d[r(n, d.length, o)], s = e.list || [], i = (d) => s[d], l = e.named || De();
  pt(e.pluralIndex) && Gp(n, l);
  const u = (d) => l[d];
  function f(d, E) {
    const L = qe(e.messages) ? e.messages(d, !!E) : Ie(e.messages) ? e.messages[d] : !1;
    return L || (e.parent ? e.parent.message(d) : Vp);
  }
  const p = (d) => e.modifiers ? e.modifiers[d] : Bp, m = Le(e.processor) && qe(e.processor.normalize) ? e.processor.normalize : jp, v = Le(e.processor) && qe(e.processor.interpolate) ? e.processor.interpolate : Hp, g = Le(e.processor) && oe(e.processor.type) ? e.processor.type : Up, A = {
    list: i,
    named: u,
    plural: a,
    linked: (d, ...E) => {
      const [L, T] = E;
      let y = "text", C = "";
      E.length === 1 ? Ie(L) ? (C = L.modifier || C, y = L.type || y) : oe(L) && (C = L || C) : E.length === 2 && (oe(L) && (C = L || C), oe(T) && (y = T || y));
      const O = f(d, !0)(A), W = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        y === "vnode" && rt(O) && C ? O[0] : O
      );
      return C ? p(C)(W, y) : W;
    },
    message: f,
    type: g,
    interpolate: v,
    normalize: m,
    values: yt(De(), s, l)
  };
  return A;
}
const Jl = () => "", $n = (e) => qe(e);
function ei(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = is(...t), f = nt(u.missingWarn) ? u.missingWarn : e.missingWarn, p = nt(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, m = nt(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, v = !!u.resolvedMessage, g = oe(u.default) || nt(u.default) ? nt(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, h = n || g != null && (oe(g) || qe(g)), A = $s(e, u);
  m && Yp(u);
  let [d, E, L] = v ? [
    l,
    A,
    i[A] || De()
  ] : su(e, l, A, s, p, f), T = d, y = l;
  if (!v && !(oe(T) || vn(T) || $n(T)) && h && (T = g, y = T), !v && (!(oe(T) || vn(T) || $n(T)) || !oe(E)))
    return o ? ya : l;
  let C = !1;
  const O = () => {
    C = !0;
  }, W = $n(T) ? T : lu(e, l, E, T, y, O);
  if (C)
    return T;
  const U = Xp(e, E, L, u), ne = Kp(U), ue = qp(e, W, ne);
  let ee = r ? r(ue, l) : ue;
  return m && oe(ee) && (ee = Pd(ee)), ee;
}
function Yp(e) {
  rt(e.list) ? e.list = e.list.map((t) => oe(t) ? $l(t) : t) : Ie(e.named) && Object.keys(e.named).forEach((t) => {
    oe(e.named[t]) && (e.named[t] = $l(e.named[t]));
  });
}
function su(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, f = u(e, r, n);
  let p = De(), m, v = null;
  const g = "translate";
  for (let h = 0; h < f.length && (m = f[h], p = s[m] || De(), (v = l(p, t)) === null && (v = p[t]), !(oe(v) || vn(v) || $n(v))); h++)
    if (!zp(m, f)) {
      const A = Ms(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        a,
        g
      );
      A !== t && (v = A);
    }
  return [v, m, p];
}
function lu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if ($n(r)) {
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
  const [t, n, r] = e, o = De();
  if (!oe(t) && !pt(t) && !$n(t) && !vn(t))
    throw Nn(xn.INVALID_ARGUMENT);
  const a = pt(t) ? String(t) : ($n(t), t);
  return pt(n) ? o.plural = n : oe(n) ? o.default = n : Le(n) && !va(n) ? o.named = n : rt(n) && (o.list = n), pt(r) ? o.plural = r : oe(r) ? o.default = r : Le(r) && yt(o, r), [a, o];
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
    messages: (v, g) => {
      let h = s(n, v);
      if (h == null && (f || g)) {
        const [, , A] = su(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          v,
          t,
          i,
          l,
          u
        );
        h = s(A, v);
      }
      if (oe(h) || vn(h)) {
        let A = !1;
        const E = lu(e, v, t, h, v, () => {
          A = !0;
        });
        return A ? Jl : E;
      } else return $n(h) ? h : Jl;
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
  if (!Ie(e) || vn(e))
    return e;
  for (const t in e)
    if (tn(e, t))
      if (!t.includes("."))
        Ie(e[t]) && bo(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = De()), !Ie(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (vn(o) ? Qc.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !vn(o)) {
          const s = o[n[r]];
          Ie(s) && bo(s);
        }
      }
  return e;
}
function cu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Le(n) ? n : rt(r) ? De() : { [e]: De() };
  if (rt(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || De(), Xo(u, s[l])) : Xo(u, s);
    } else
      oe(i) && Xo(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      tn(s, i) && bo(s[i]);
  return s;
}
function tm(e) {
  return e.type;
}
function nm(e, t, n) {
  let r = Ie(t.messages) ? t.messages : De();
  "__i18nGlobal" in n && (r = cu(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (Ie(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Ie(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function ti(e) {
  return $(Bc, null, e, 0);
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
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = Nl ? V : Qn;
  let s = nt(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : oe(e.locale) ? e.locale : ra
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : oe(e.fallbackLocale) || rt(e.fallbackLocale) || Le(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(cu(i.value, e)), f = a(Le(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = a(Le(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let m = t ? t.missingWarn : nt(e.missingWarn) || na(e.missingWarn) ? e.missingWarn : !0, v = t ? t.fallbackWarn : nt(e.fallbackWarn) || na(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : nt(e.fallbackRoot) ? e.fallbackRoot : !0, h = !!e.fallbackFormat, A = qe(e.missing) ? e.missing : null, d = qe(e.missing) ? oi(e.missing) : null, E = qe(e.postTranslation) ? e.postTranslation : null, L = t ? t.warnHtmlMessage : nt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter;
  const y = t ? t.modifiers : Le(e.modifiers) ? e.modifiers : {};
  let C = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    r && Gl(null);
    const k = {
      version: Qp,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: y,
      pluralRules: C,
      missing: d === null ? void 0 : d,
      missingWarn: m,
      fallbackWarn: v,
      fallbackFormat: h,
      unresolving: !0,
      postTranslation: E === null ? void 0 : E,
      warnHtmlMessage: L,
      escapeParameter: T,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    k.datetimeFormats = f.value, k.numberFormats = p.value, k.__datetimeFormatters = Le(O) ? O.__datetimeFormatters : void 0, k.__numberFormatters = Le(O) ? O.__numberFormatters : void 0;
    const M = Dp(k);
    return r && Gl(M), M;
  })(), Xr(O, i.value, l.value);
  function U() {
    return [
      i.value,
      l.value,
      u.value,
      f.value,
      p.value
    ];
  }
  const ne = I({
    get: () => i.value,
    set: (k) => {
      O.locale = k, i.value = k;
    }
  }), ue = I({
    get: () => l.value,
    set: (k) => {
      O.fallbackLocale = k, l.value = k, Xr(O, i.value, k);
    }
  }), ee = I(() => u.value), me = /* @__PURE__ */ I(() => f.value), de = /* @__PURE__ */ I(() => p.value);
  function R() {
    return qe(E) ? E : null;
  }
  function P(k) {
    E = k, O.postTranslation = k;
  }
  function z() {
    return A;
  }
  function ie(k) {
    k !== null && (d = oi(k)), A = k, O.missing = d;
  }
  const J = (k, M, ve, Ae, Xe, Nt) => {
    U();
    let Ke;
    try {
      r || (O.fallbackContext = t ? Mp() : void 0), Ke = k(O);
    } finally {
      r || (O.fallbackContext = void 0);
    }
    if (ve !== "translate exists" && // for not `te` (e.g `t`)
    pt(Ke) && Ke === ya || ve === "translate exists" && !Ke) {
      const [or, Wr] = M();
      return t && g ? Ae(t) : Xe(or);
    } else {
      if (Nt(Ke))
        return Ke;
      throw vo(Pr.UNEXPECTED_RETURN_TYPE);
    }
  };
  function _e(...k) {
    return J((M) => Reflect.apply(ei, null, [M, ...k]), () => is(...k), "translate", (M) => Reflect.apply(M.t, M, [...k]), (M) => M, (M) => oe(M));
  }
  function Z(...k) {
    const [M, ve, Ae] = k;
    if (Ae && !Ie(Ae))
      throw vo(Pr.INVALID_ARGUMENT);
    return _e(M, ve, yt({ resolvedMessage: !0 }, Ae || {}));
  }
  function Ue(...k) {
    return J((M) => Reflect.apply(Yl, null, [M, ...k]), () => ss(...k), "datetime format", (M) => Reflect.apply(M.d, M, [...k]), () => Hl, (M) => oe(M) || rt(M));
  }
  function Ce(...k) {
    return J((M) => Reflect.apply(Zl, null, [M, ...k]), () => ls(...k), "number format", (M) => Reflect.apply(M.n, M, [...k]), () => Hl, (M) => oe(M) || rt(M));
  }
  function ke(k) {
    return k.map((M) => oe(M) || pt(M) || nt(M) ? ti(String(M)) : M);
  }
  const Te = {
    normalize: ke,
    interpolate: (k) => k,
    type: "vnode"
  };
  function Ge(...k) {
    return J((M) => {
      let ve;
      const Ae = M;
      try {
        Ae.processor = Te, ve = Reflect.apply(ei, null, [Ae, ...k]);
      } finally {
        Ae.processor = null;
      }
      return ve;
    }, () => is(...k), "translate", (M) => M[cs](...k), (M) => [ti(M)], (M) => rt(M));
  }
  function ce(...k) {
    return J((M) => Reflect.apply(Zl, null, [M, ...k]), () => ls(...k), "number format", (M) => M[fs](...k), ni, (M) => oe(M) || rt(M));
  }
  function et(...k) {
    return J((M) => Reflect.apply(Yl, null, [M, ...k]), () => ss(...k), "datetime format", (M) => M[us](...k), ni, (M) => oe(M) || rt(M));
  }
  function ct(k) {
    C = k, O.pluralRules = C;
  }
  function je(k, M) {
    return J(() => {
      if (!k)
        return !1;
      const ve = oe(M) ? M : i.value, Ae = H(ve), Xe = O.messageResolver(Ae, k);
      return vn(Xe) || $n(Xe) || oe(Xe);
    }, () => [k], "translate exists", (ve) => Reflect.apply(ve.te, ve, [k, M]), rm, (ve) => nt(ve));
  }
  function gt(k) {
    let M = null;
    const ve = Jc(O, l.value, i.value);
    for (let Ae = 0; Ae < ve.length; Ae++) {
      const Xe = u.value[ve[Ae]] || {}, Nt = O.messageResolver(Xe, k);
      if (Nt != null) {
        M = Nt;
        break;
      }
    }
    return M;
  }
  function ut(k) {
    const M = gt(k);
    return M ?? (t ? t.tm(k) || {} : {});
  }
  function H(k) {
    return u.value[k] || {};
  }
  function Q(k, M) {
    if (o) {
      const ve = { [k]: M };
      for (const Ae in ve)
        tn(ve, Ae) && bo(ve[Ae]);
      M = ve[k];
    }
    u.value[k] = M, O.messages = u.value;
  }
  function q(k, M) {
    u.value[k] = u.value[k] || {};
    const ve = { [k]: M };
    if (o)
      for (const Ae in ve)
        tn(ve, Ae) && bo(ve[Ae]);
    M = ve[k], Xo(M, u.value[k]), O.messages = u.value;
  }
  function ge(k) {
    return f.value[k] || {};
  }
  function _(k, M) {
    f.value[k] = M, O.datetimeFormats = f.value, ql(O, k, M);
  }
  function S(k, M) {
    f.value[k] = yt(f.value[k] || {}, M), O.datetimeFormats = f.value, ql(O, k, M);
  }
  function D(k) {
    return p.value[k] || {};
  }
  function K(k, M) {
    p.value[k] = M, O.numberFormats = p.value, Xl(O, k, M);
  }
  function Ee(k, M) {
    p.value[k] = yt(p.value[k] || {}, M), O.numberFormats = p.value, Xl(O, k, M);
  }
  ri++, t && Nl && (be(t.locale, (k) => {
    s && (i.value = k, O.locale = k, Xr(O, i.value, l.value));
  }), be(t.fallbackLocale, (k) => {
    s && (l.value = k, O.fallbackLocale = k, Xr(O, i.value, l.value));
  }));
  const fe = {
    id: ri,
    locale: ne,
    fallbackLocale: ue,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(k) {
      s = k, k && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Xr(O, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: ee,
    get modifiers() {
      return y;
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
    set missingWarn(k) {
      m = k, O.missingWarn = m;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(k) {
      v = k, O.fallbackWarn = v;
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(k) {
      g = k;
    },
    get fallbackFormat() {
      return h;
    },
    set fallbackFormat(k) {
      h = k, O.fallbackFormat = h;
    },
    get warnHtmlMessage() {
      return L;
    },
    set warnHtmlMessage(k) {
      L = k, O.warnHtmlMessage = k;
    },
    get escapeParameter() {
      return T;
    },
    set escapeParameter(k) {
      T = k, O.escapeParameter = k;
    },
    t: _e,
    getLocaleMessage: H,
    setLocaleMessage: Q,
    mergeLocaleMessage: q,
    getPostTranslationHandler: R,
    setPostTranslationHandler: P,
    getMissingHandler: z,
    setMissingHandler: ie,
    [em]: ct
  };
  return fe.datetimeFormats = me, fe.numberFormats = de, fe.rt = Z, fe.te = je, fe.tm = ut, fe.d = Ue, fe.n = Ce, fe.getDateTimeFormat = ge, fe.setDateTimeFormat = _, fe.mergeDateTimeFormat = S, fe.getNumberFormat = D, fe.setNumberFormat = K, fe.mergeNumberFormat = Ee, fe[iu] = n, fe[cs] = Ge, fe[us] = et, fe[fs] = ce, fe;
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
  }, De());
}
function fu() {
  return Tt;
}
yt({
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
  return rt(e) && !oe(e[0]);
}
function du(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = De();
    e.locale && (s.locale = e.locale), oe(e.format) ? s.key = e.format : Ie(e.format) && (oe(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((m, v) => n.includes(v) ? yt(De(), m, { [v]: e.format[v] }) : m, De()));
    const l = r(e.value, s, i);
    let u = [s.key];
    rt(l) ? u = l.map((m, v) => {
      const g = o[m.type], h = g ? g({ [m.type]: m.value, index: v, parts: l }) : [m.value];
      return sm(h) && (h[0].key = `${m.type}-${v}`), h;
    }) : oe(l) && (u = [l]);
    const f = yt(De(), a), p = oe(e.tag) || Ie(e.tag) ? e.tag : fu();
    return zc(p, f, u);
  };
}
yt({
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
    const l = yt({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = om(l), s.__composerExtend && (i[ds] = s.__composerExtend(i)), pm(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function im(e) {
  const t = $e(e.isCE ? lm : e.appContext.app.__VUE_I18N_SYMBOL__);
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
  ot(() => {
  }, t), ga(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[ds];
    o && (o(), delete r[ds]);
  }, t);
}
yt({
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
function Oe(e, t = "") {
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
})(), Lt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, hm = /^(?:[ \t]*(?:\n|$))+/, gm = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, vm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, So = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, bm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, zs = /(?:[*+-]|\d{1,9}[.)])/, mu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, hu = Oe(mu).replace(/bull/g, zs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), ym = Oe(mu).replace(/bull/g, zs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Bs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, _m = /^[^\n]+/, Vs = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, wm = Oe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Vs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), km = Oe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, zs).getRegex(), _a = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Us = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Tm = Oe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Us).replace("tag", _a).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), gu = Oe(Bs).replace("hr", So).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _a).getRegex(), Em = Oe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", gu).getRegex(), js = { blockquote: Em, code: gm, def: wm, fences: vm, heading: bm, hr: So, html: Tm, lheading: hu, list: km, newline: hm, paragraph: gu, table: lo, text: _m }, ai = Oe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", So).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _a).getRegex(), Sm = { ...js, lheading: ym, table: ai, paragraph: Oe(Bs).replace("hr", So).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ai).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _a).getRegex() }, Am = { ...js, html: Oe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Us).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: lo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Oe(Bs).replace("hr", So).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", hu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Cm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Om = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, vu = /^( {2,}|\\)\n(?!\s*$)/, Lm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, wa = /[\p{P}\p{S}]/u, Hs = /[\s\p{P}\p{S}]/u, bu = /[^\s\p{P}\p{S}]/u, Im = Oe(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Hs).getRegex(), yu = /(?!~)[\p{P}\p{S}]/u, Rm = /(?!~)[\s\p{P}\p{S}]/u, xm = /(?:[^\s\p{P}\p{S}]|~)/u, Nm = Oe(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", mm ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), _u = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Pm = Oe(_u, "u").replace(/punct/g, wa).getRegex(), $m = Oe(_u, "u").replace(/punct/g, yu).getRegex(), wu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Mm = Oe(wu, "gu").replace(/notPunctSpace/g, bu).replace(/punctSpace/g, Hs).replace(/punct/g, wa).getRegex(), Dm = Oe(wu, "gu").replace(/notPunctSpace/g, xm).replace(/punctSpace/g, Rm).replace(/punct/g, yu).getRegex(), Fm = Oe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, bu).replace(/punctSpace/g, Hs).replace(/punct/g, wa).getRegex(), zm = Oe(/\\(punct)/, "gu").replace(/punct/g, wa).getRegex(), Bm = Oe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Vm = Oe(Us).replace("(?:-->|$)", "-->").getRegex(), Um = Oe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Vm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), oa = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, jm = Oe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", oa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ku = Oe(/^!?\[(label)\]\[(ref)\]/).replace("label", oa).replace("ref", Vs).getRegex(), Tu = Oe(/^!?\[(ref)\](?:\[\])?/).replace("ref", Vs).getRegex(), Hm = Oe("reflink|nolink(?!\\()", "g").replace("reflink", ku).replace("nolink", Tu).getRegex(), si = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Ws = { _backpedal: lo, anyPunctuation: zm, autolink: Bm, blockSkip: Nm, br: vu, code: Om, del: lo, emStrongLDelim: Pm, emStrongRDelimAst: Mm, emStrongRDelimUnd: Fm, escape: Cm, link: jm, nolink: Tu, punctuation: Im, reflink: ku, reflinkSearch: Hm, tag: Um, text: Lm, url: lo }, Wm = { ...Ws, link: Oe(/^!?\[(label)\]\((.*?)\)/).replace("label", oa).getRegex(), reflink: Oe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", oa).getRegex() }, ps = { ...Ws, emStrongRDelimAst: Dm, emStrongLDelim: $m, url: Oe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", si).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Oe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", si).getRegex() }, Gm = { ...ps, br: Oe(vu).replace("{2,}", "*").getRegex(), text: Oe(ps.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Vo = { normal: js, gfm: Sm, pedantic: Am }, Qr = { normal: Ws, gfm: ps, breaks: Gm, pedantic: Wm }, Km = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, li = (e) => Km[e];
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
    Me(this, "options");
    Me(this, "rules");
    Me(this, "lexer");
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
          let v = m, g = v.raw + `
` + n.join(`
`), h = this.blockquote(g);
          a[a.length - 1] = h, r = r.substring(0, r.length - v.raw.length) + h.raw, o = o.substring(0, o.length - v.text.length) + h.text;
          break;
        } else if (m?.type === "list") {
          let v = m, g = v.raw + `
` + n.join(`
`), h = this.list(g);
          a[a.length - 1] = h, r = r.substring(0, r.length - m.raw.length) + h.raw, o = o.substring(0, o.length - v.raw.length) + h.raw, n = g.substring(a.at(-1).raw.length).split(`
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
`, 1)[0].replace(this.rules.other.listReplaceTabs, (h) => " ".repeat(3 * h.length)), m = e.split(`
`, 1)[0], v = !p.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, f = p.trimStart()) : v ? g = t[1].length + 1 : (g = t[2].search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, f = p.slice(g), g += t[1].length), v && this.rules.other.blankLine.test(m) && (u += m + `
`, e = e.substring(m.length + 1), l = !0), !l) {
          let h = this.rules.other.nextBulletRegex(g), A = this.rules.other.hrRegex(g), d = this.rules.other.fencesBeginRegex(g), E = this.rules.other.headingBeginRegex(g), L = this.rules.other.htmlBeginRegex(g);
          for (; e; ) {
            let T = e.split(`
`, 1)[0], y;
            if (m = T, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), y = m) : y = m.replace(this.rules.other.tabCharGlobal, "    "), d.test(m) || E.test(m) || L.test(m) || h.test(m) || A.test(m)) break;
            if (y.search(this.rules.other.nonSpaceChar) >= g || !m.trim()) f += `
` + y.slice(g);
            else {
              if (v || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || d.test(p) || E.test(p) || A.test(p)) break;
              f += `
` + m;
            }
            !v && !m.trim() && (v = !0), u += T + `
`, e = e.substring(T.length + 1), p = y.slice(g);
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
    Me(this, "tokens");
    Me(this, "options");
    Me(this, "state");
    Me(this, "inlineQueue");
    Me(this, "tokenizer");
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
    Me(this, "options");
    Me(this, "parser");
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
    Me(this, "options");
    Me(this, "renderer");
    Me(this, "textRenderer");
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
    Me(this, "options");
    Me(this, "block");
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
}, Me(qo, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Me(qo, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), qo), Zm = class {
  constructor(...t) {
    Me(this, "defaults", Fs());
    Me(this, "options", this.setOptions);
    Me(this, "parse", this.parseMarkdown(!0));
    Me(this, "parseInline", this.parseMarkdown(!1));
    Me(this, "Parser", en);
    Me(this, "Renderer", sa);
    Me(this, "TextRenderer", Gs);
    Me(this, "Lexer", Jt);
    Me(this, "Tokenizer", aa);
    Me(this, "Hooks", ao);
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
function Pe(e, t) {
  return fr.parse(e, t);
}
Pe.options = Pe.setOptions = function(e) {
  return fr.setOptions(e), Pe.defaults = fr.defaults, pu(Pe.defaults), Pe;
};
Pe.getDefaults = Fs;
Pe.defaults = hr;
Pe.use = function(...e) {
  return fr.use(...e), Pe.defaults = fr.defaults, pu(Pe.defaults), Pe;
};
Pe.walkTokens = function(e, t) {
  return fr.walkTokens(e, t);
};
Pe.parseInline = fr.parseInline;
Pe.Parser = en;
Pe.parser = en.parse;
Pe.Renderer = sa;
Pe.TextRenderer = Gs;
Pe.Lexer = Jt;
Pe.lexer = Jt.lex;
Pe.Tokenizer = aa;
Pe.Hooks = ao;
Pe.parse = Pe;
Pe.options;
Pe.setOptions;
Pe.use;
Pe.walkTokens;
Pe.parseInline;
en.parse;
Jt.lex;
const Xm = ["disabled"], Qm = {
  key: 0,
  class: "custom-button__loading"
}, Jm = /* @__PURE__ */ re({
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
    return (n, r) => (N(), G("button", {
      class: j([
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
      e.loading ? (N(), G("div", Qm, r[1] || (r[1] = [
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
      ]))) : te("v-if", !0),
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
  const t = e || (It() ? $e(Su, V(Qo)) : V(Qo));
  return I(() => c(t) || Qo);
}, lt = (e, t) => {
  const n = Ys(t);
  return {
    namespace: n,
    b: (h = "") => ir(n.value, e, h, "", ""),
    e: (h) => h ? ir(n.value, e, "", h, "") : "",
    m: (h) => h ? ir(n.value, e, "", "", h) : "",
    be: (h, A) => h && A ? ir(n.value, e, h, A, "") : "",
    em: (h, A) => h && A ? ir(n.value, e, "", h, A) : "",
    bm: (h, A) => h && A ? ir(n.value, e, h, "", A) : "",
    bem: (h, A, d) => h && A && d ? ir(n.value, e, h, A, d) : "",
    is: (h, ...A) => {
      const d = A.length >= 1 ? A[0] : !0;
      return h && d ? `${eh}${h}` : "";
    },
    cssVar: (h) => {
      const A = {};
      for (const d in h)
        h[d] && (A[`--${n.value}-${d}`] = h[d]);
      return A;
    },
    cssVarName: (h) => `--${n.value}-${h}`,
    cssVarBlock: (h) => {
      const A = {};
      for (const d in h)
        h[d] && (A[`--${n.value}-${e}-${d}`] = h[d]);
      return A;
    },
    cssVarBlockName: (h) => `--${n.value}-${e}-${h}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const yo = () => {
}, th = Object.prototype.hasOwnProperty, fi = (e, t) => th.call(e, t), mn = Array.isArray, Ze = (e) => typeof e == "function", Et = (e) => typeof e == "string", Bt = (e) => e !== null && typeof e == "object", di = (e) => (Bt(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), nh = Object.prototype.toString, rh = (e) => nh.call(e), oh = (e) => rh(e) === "[object Object]";
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
var Vh = 800, Uh = 16, jh = Date.now;
function Hh(e) {
  var t = 0, n = 0;
  return function() {
    var r = jh(), o = Uh - (r - n);
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
var xu = typeof exports == "object" && exports && !exports.nodeType && exports, wi = xu && typeof module == "object" && module && !module.nodeType && module, fg = wi && wi.exports === xu, ki = fg ? En.Buffer : void 0, dg = ki ? ki.isBuffer : void 0, vs = dg || ug, pg = "[object Arguments]", mg = "[object Array]", hg = "[object Boolean]", gg = "[object Date]", vg = "[object Error]", bg = "[object Function]", yg = "[object Map]", _g = "[object Number]", wg = "[object Object]", kg = "[object RegExp]", Tg = "[object Set]", Eg = "[object String]", Sg = "[object WeakMap]", Ag = "[object ArrayBuffer]", Cg = "[object DataView]", Og = "[object Float32Array]", Lg = "[object Float64Array]", Ig = "[object Int8Array]", Rg = "[object Int16Array]", xg = "[object Int32Array]", Ng = "[object Uint8Array]", Pg = "[object Uint8ClampedArray]", $g = "[object Uint16Array]", Mg = "[object Uint32Array]", Be = {};
Be[Og] = Be[Lg] = Be[Ig] = Be[Rg] = Be[xg] = Be[Ng] = Be[Pg] = Be[$g] = Be[Mg] = !0;
Be[pg] = Be[mg] = Be[Ag] = Be[hg] = Be[Cg] = Be[gg] = Be[vg] = Be[bg] = Be[yg] = Be[_g] = Be[wg] = Be[kg] = Be[Tg] = Be[Eg] = Be[Sg] = !1;
function Dg(e) {
  return $r(e) && Xs(e.length) && !!Be[Hr(e)];
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
function Ug(e, t) {
  var n = an(e), r = !n && Qs(e), o = !n && !r && vs(e), a = !n && !r && !o && Pu(e), s = n || r || o || a, i = s ? sg(e.length, String) : [], l = i.length;
  for (var u in e)
    Vg.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    qs(u, l))) && i.push(u);
  return i;
}
function jg(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Hg = jg(Object.keys, Object), Wg = Object.prototype, Gg = Wg.hasOwnProperty;
function Kg(e) {
  if (!ag(e))
    return Hg(e);
  var t = [];
  for (var n in Object(e))
    Gg.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function $u(e) {
  return rg(e) ? Ug(e) : Kg(e);
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
function jn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
jn.prototype.clear = mv;
jn.prototype.delete = gv;
jn.prototype.get = vv;
jn.prototype.has = bv;
jn.prototype.set = yv;
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
  return n.cache = new (el.Cache || jn)(), n;
}
el.Cache = jn;
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
function qn() {
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
    n = this.__data__ = new jn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Mn(e) {
  var t = this.__data__ = new Un(e);
  this.size = t.size;
}
Mn.prototype.clear = Rv;
Mn.prototype.delete = xv;
Mn.prototype.get = Nv;
Mn.prototype.has = Pv;
Mn.prototype.set = Mv;
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
function Uv(e, t, n) {
  var r = t(e);
  return an(e) ? r : Mu(r, n(e));
}
function Ci(e) {
  return Uv(e, $u, Vv);
}
var bs = vr(En, "DataView"), ys = vr(En, "Promise"), _s = vr(En, "Set"), Oi = "[object Map]", jv = "[object Object]", Li = "[object Promise]", Ii = "[object Set]", Ri = "[object WeakMap]", xi = "[object DataView]", Hv = gr(bs), Wv = gr(wo), Gv = gr(ys), Kv = gr(_s), Yv = gr(gs), Yn = Hr;
(bs && Yn(new bs(new ArrayBuffer(1))) != xi || wo && Yn(new wo()) != Oi || ys && Yn(ys.resolve()) != Li || _s && Yn(new _s()) != Ii || gs && Yn(new gs()) != Ri) && (Yn = function(e) {
  var t = Hr(e), n = t == jv ? e.constructor : void 0, r = n ? gr(n) : "";
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
  for (this.__data__ = new jn(); ++t < n; )
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
    var g = e[p], h = t[p];
    if (r)
      var A = s ? r(h, g, p, t, e, a) : r(g, h, p, e, t, a);
    if (A !== void 0) {
      if (A)
        continue;
      m = !1;
      break;
    }
    if (v) {
      if (!Qv(t, function(d, E) {
        if (!Jv(v, E) && (g === d || o(g, d, n, r, a)))
          return v.push(E);
      })) {
        m = !1;
        break;
      }
    } else if (!(g === h || o(g, h, n, r, a))) {
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
  var v = a.get(e), g = a.get(t);
  if (v && g)
    return v == t && g == e;
  var h = !0;
  a.set(e, t), a.set(t, e);
  for (var A = s; ++p < l; ) {
    m = i[p];
    var d = e[m], E = t[m];
    if (r)
      var L = s ? r(E, d, m, t, e, a) : r(d, E, m, e, t, a);
    if (!(L === void 0 ? d === E || o(d, E, n, r, a) : L)) {
      h = !1;
      break;
    }
    A || (A = m == "constructor");
  }
  if (h && !A) {
    var T = e.constructor, y = t.constructor;
    T != y && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof y == "function" && y instanceof y) && (h = !1);
  }
  return a.delete(e), a.delete(t), h;
}
var kb = 1, $i = "[object Arguments]", Mi = "[object Array]", Uo = "[object Object]", Tb = Object.prototype, Di = Tb.hasOwnProperty;
function Eb(e, t, n, r, o, a) {
  var s = an(e), i = an(t), l = s ? Mi : Yn(e), u = i ? Mi : Yn(t);
  l = l == $i ? Uo : l, u = u == $i ? Uo : u;
  var f = l == Uo, p = u == Uo, m = l == u;
  if (m && vs(e)) {
    if (!vs(t))
      return !1;
    s = !0, f = !1;
  }
  if (m && !f)
    return a || (a = new Mn()), s || Pu(e) ? Du(e, t, n, r, o, a) : vb(e, t, l, n, r, o, a);
  if (!(n & kb)) {
    var v = f && Di.call(e, "__wrapped__"), g = p && Di.call(t, "__wrapped__");
    if (v || g) {
      var h = v ? e.value() : e, A = g ? t.value() : t;
      return a || (a = new Mn()), o(h, A, n, r, a);
    }
  }
  return m ? (a || (a = new Mn()), wb(e, t, n, r, o, a)) : !1;
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
      var f = new Mn(), p;
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
function Ub(e, t, n) {
  var r, o, a, s, i, l, u = 0, f = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(zb);
  t = vi(t) || 0, er(n) && (f = !!n.leading, p = "maxWait" in n, a = p ? Bb(vi(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function v(C) {
    var O = r, W = o;
    return r = o = void 0, u = C, s = e.apply(W, O), s;
  }
  function g(C) {
    return u = C, i = setTimeout(d, t), f ? v(C) : s;
  }
  function h(C) {
    var O = C - l, W = C - u, U = t - O;
    return p ? Vb(U, a - W) : U;
  }
  function A(C) {
    var O = C - l, W = C - u;
    return l === void 0 || O >= t || O < 0 || p && W >= a;
  }
  function d() {
    var C = Ya();
    if (A(C))
      return E(C);
    i = setTimeout(d, h(C));
  }
  function E(C) {
    return i = void 0, m && r ? v(C) : (r = o = void 0, s);
  }
  function L() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function T() {
    return i === void 0 ? s : E(Ya());
  }
  function y() {
    var C = Ya(), O = A(C);
    if (r = arguments, o = this, l = C, O) {
      if (i === void 0)
        return g(l);
      if (p)
        return clearTimeout(i), i = setTimeout(d, t), v(l);
    }
    return i === void 0 && (i = setTimeout(d, t)), s;
  }
  return y.cancel = L, y.flush = T, y;
}
function jb(e, t, n) {
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
function Dn(e) {
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
const hn = (e) => e === void 0, Jn = (e) => typeof e == "boolean", Ne = (e) => typeof e == "number", rn = (e) => typeof Element > "u" ? !1 : e instanceof Element, qb = (e) => Et(e) ? !Number.isNaN(Number(e)) : !1;
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
const st = typeof window < "u", o0 = (e) => typeof e == "string", Vu = () => {
}, ws = st && ((Bi = window?.navigator) == null ? void 0 : Bi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
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
  It() ? ot(e) : t ? e() : tt(e);
}
function Uu(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = V(!1);
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
  return r && (o.value = !0, st && l()), Co(i), {
    isPending: Ls(o),
    start: l,
    stop: i
  };
}
function Pn(e) {
  var t;
  const n = nl(e);
  return (t = n?.$el) != null ? t : n;
}
const Ca = st ? window : void 0;
function on(...e) {
  let t, n, r, o;
  if (o0(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Ca) : [t, n, r, o] = e, !t)
    return Vu;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, p, m, v) => (f.addEventListener(p, m, v), () => f.removeEventListener(p, m, v)), l = be(() => [Pn(t), nl(o)], ([f, p]) => {
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
      return Array.from(r.document.querySelectorAll(v)).some((g) => g === m.target || m.composedPath().includes(g));
    {
      const g = Pn(v);
      return g && (m.target === g || m.composedPath().includes(g));
    }
  }), f = [
    on(r, "click", (m) => {
      const v = Pn(e);
      if (!(!v || v === m.target || m.composedPath().includes(v))) {
        if (m.detail === 0 && (i = !l(m)), !i) {
          i = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    on(r, "pointerdown", (m) => {
      const v = Pn(e);
      v && (i = !m.composedPath().includes(v) && !l(m));
    }, { passive: !0 }),
    s && on(r, "blur", (m) => {
      var v;
      const g = Pn(e);
      ((v = r.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !g?.contains(r.document.activeElement) && t(m);
    })
  ].filter(Boolean);
  return () => f.forEach((m) => m());
}
function ju(e, t = !1) {
  const n = V(), r = () => n.value = !!e();
  return r(), s0(r, t), n;
}
const Ui = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ji = "__vueuse_ssr_handlers__";
Ui[ji] = Ui[ji] || {};
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
  const i = ju(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = be(() => Pn(e), (p) => {
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
  const i = ju(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = be(() => Pn(e), (p) => {
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
}, Zi = V(0), Hu = 2e3, Xi = Symbol("elZIndexContextKey"), Wu = Symbol("zIndexContextKey"), Gu = (e) => {
  const t = It() ? $e(Xi, qi) : qi, n = e || (It() ? $e(Wu, void 0) : void 0), r = I(() => {
    const s = c(n);
    return Ne(s) ? s : Hu;
  }), o = I(() => r.value + Zi.value), a = () => (t.current++, Zi.value = t.current, o.value);
  return !st && $e(Xi), {
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
  const t = I(() => c(e).name), n = po(e) ? e : V(e);
  return {
    lang: t,
    locale: n,
    t: k0(e)
  };
}, Ku = Symbol("localeContextKey"), ol = (e) => {
  const t = e || $e(Ku, V());
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
        const m = [...new Set(p)].map((v) => JSON.stringify(v)).join(", ");
        ed(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Yu]: !0
  };
  return fi(e, "default") && (l.default = o), l;
}, Ve = (e) => ca(Object.entries(e).map(([t, n]) => [
  t,
  Oa(n, t)
])), al = ["", "default", "small", "large"], La = Oa({
  type: String,
  values: al,
  required: !1
}), qu = Symbol("size"), A0 = () => {
  const e = $e(qu, {});
  return I(() => c(e.size) || "");
}, Zu = Symbol("emptyValuesContextKey"), C0 = ["", void 0, null], O0 = void 0, Xu = Ve({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ze(e) ? !e() : !e
  }
}), L0 = (e, t) => {
  const n = It() ? $e(Zu, V({})) : V({}), r = I(() => e.emptyValues || n.value.emptyValues || C0), o = I(() => Ze(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ze(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : O0), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Qi = (e) => Object.keys(e), ua = V();
function Qu(e, t = void 0) {
  return It() ? $e(Eu, ua) : ua;
}
function Ju(e, t) {
  const n = Qu(), r = lt(e, I(() => {
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
}, mt = "update:modelValue", Bn = "change", Fn = "input";
var He = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function Mr(e, t = "px") {
  if (!e)
    return "";
  if (Ne(e) || qb(e))
    return `${e}${t}`;
  if (Et(e))
    return e;
}
function R0(e, t) {
  if (!st)
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
}, e), nf = (e) => (e.install = yo, e), x0 = Ve({
  size: {
    type: pe([Number, String])
  },
  color: {
    type: String
  }
}), N0 = re({
  name: "ElIcon",
  inheritAttrs: !1
}), P0 = /* @__PURE__ */ re({
  ...N0,
  props: x0,
  setup(e) {
    const t = e, n = lt("icon"), r = I(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: hn(o) ? void 0 : Mr(o),
        "--color": a
      };
    });
    return (o, a) => (N(), G("i", Rr({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      he(o.$slots, "default")
    ], 16));
  }
});
var $0 = /* @__PURE__ */ He(P0, [["__file", "icon.vue"]]);
const at = sn($0);
/*! Element Plus Icons Vue v2.3.1 */
var M0 = /* @__PURE__ */ re({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (N(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), rf = M0, D0 = /* @__PURE__ */ re({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (N(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), F0 = D0, z0 = /* @__PURE__ */ re({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (N(), G("svg", {
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
}), B0 = z0, V0 = /* @__PURE__ */ re({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (N(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), U0 = V0, j0 = /* @__PURE__ */ re({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (N(), G("svg", {
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
}), sl = j0, H0 = /* @__PURE__ */ re({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (N(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), fa = H0, W0 = /* @__PURE__ */ re({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (N(), G("svg", {
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
}), G0 = W0, K0 = /* @__PURE__ */ re({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (N(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Y0 = K0, q0 = /* @__PURE__ */ re({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (N(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), of = q0, Z0 = /* @__PURE__ */ re({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (N(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), X0 = Z0, Q0 = /* @__PURE__ */ re({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (N(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), J0 = Q0, ey = /* @__PURE__ */ re({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (N(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ty = ey, ny = /* @__PURE__ */ re({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (N(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), ry = ny, oy = /* @__PURE__ */ re({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (N(), G("svg", {
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
  error: U0,
  info: Y0
}, af = {
  validating: of,
  success: B0,
  error: sl
}, sf = () => st && /firefox/i.test(window.navigator.userAgent);
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
  if (Ne(t)) {
    let p = f * t;
    s === "border-box" && (p = p + o + a), l = Math.max(p, l), u.minHeight = `${p}px`;
  }
  if (Ne(n)) {
    let p = f * n;
    s === "border-box" && (p = p + o + a), l = Math.min(p, l);
  }
  return u.height = `${l}px`, (r = $t.parentNode) == null || r.removeChild($t), $t = void 0, u;
}
const lf = (e) => e, fy = Ve({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), br = (e) => Yb(fy, e), dy = Ve({
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
}, vy = Symbol("elIdInjection"), cf = () => It() ? $e(vy, ec) : ec, Ia = (e) => {
  const t = cf(), n = Ys();
  return r0(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Ra = () => {
  const e = $e(ll, void 0), t = $e(pa, void 0);
  return {
    form: e,
    formItem: t
  };
}, il = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = V(!1)), r || (r = V(!1));
  const o = V();
  let a;
  const s = I(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return ot(() => {
    a = be([Rn(e, "id"), n], ([i, l]) => {
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
  const n = V(void 0), r = t.prop ? n : uf("size"), o = t.global ? n : A0(), a = t.form ? { size: void 0 } : $e(ll, void 0), s = t.formItem ? { size: void 0 } : $e(pa, void 0);
  return I(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, cl = (e) => {
  const t = uf("disabled"), n = $e(ll, void 0);
  return I(() => t.value || c(e) || n?.disabled || !1);
};
function ff(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = It(), { emit: s } = a, i = Qn(), l = V(!1), u = (m) => {
    Ze(t) && t(m) || l.value || (l.value = !0, s("focus", m), n?.());
  }, f = (m) => {
    var v;
    Ze(r) && r(m) || m.relatedTarget && ((v = i.value) != null && v.contains(m.relatedTarget)) || (l.value = !1, s("blur", m), o?.());
  }, p = () => {
    var m, v;
    (m = i.value) != null && m.contains(document.activeElement) && i.value !== document.activeElement || (v = e.value) == null || v.focus();
  };
  return be(i, (m) => {
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
  const n = V(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, f = u[u.length - 1] || "";
    n.value = !by(f);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, tt(() => e(i)));
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
const _y = "ElInput", wy = re({
  name: _y,
  inheritAttrs: !1
}), ky = /* @__PURE__ */ re({
  ...wy,
  props: dy,
  emits: py,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = td(), a = gy(), s = nd(), i = I(() => [
      r.type === "textarea" ? h.b() : g.b(),
      g.m(m.value),
      g.is("disabled", v.value),
      g.is("exceed", Ue.value),
      {
        [g.b("group")]: s.prepend || s.append,
        [g.m("prefix")]: s.prefix || r.prefixIcon,
        [g.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: ie.value && J.value,
        [g.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = I(() => [
      g.e("wrapper"),
      g.is("focus", W.value)
    ]), { form: u, formItem: f } = Ra(), { inputId: p } = il(r, {
      formItemContext: f
    }), m = Oo(), v = cl(), g = lt("input"), h = lt("textarea"), A = Qn(), d = Qn(), E = V(!1), L = V(!1), T = V(), y = Qn(r.inputStyle), C = I(() => A.value || d.value), { wrapperRef: O, isFocused: W, handleFocus: U, handleBlur: ne } = ff(C, {
      beforeFocus() {
        return v.value;
      },
      afterBlur() {
        var k;
        r.validateEvent && ((k = f?.validate) == null || k.call(f, "blur").catch((M) => void 0));
      }
    }), ue = I(() => {
      var k;
      return (k = u?.statusIcon) != null ? k : !1;
    }), ee = I(() => f?.validateState || ""), me = I(() => ee.value && af[ee.value]), de = I(() => L.value ? ry : G0), R = I(() => [
      o.style
    ]), P = I(() => [
      r.inputStyle,
      y.value,
      { resize: r.resize }
    ]), z = I(() => Dn(r.modelValue) ? "" : String(r.modelValue)), ie = I(() => r.clearable && !v.value && !r.readonly && !!z.value && (W.value || E.value)), J = I(() => r.showPassword && !v.value && !!z.value && (!!z.value || W.value)), _e = I(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !v.value && !r.readonly && !r.showPassword), Z = I(() => z.value.length), Ue = I(() => !!_e.value && Z.value > Number(r.maxlength)), Ce = I(() => !!s.suffix || !!r.suffixIcon || ie.value || r.showPassword || _e.value || !!ee.value && ue.value), [ke, We] = yy(A);
    pn(d, (k) => {
      if (ce(), !_e.value || r.resize !== "both")
        return;
      const M = k[0], { width: ve } = M.contentRect;
      T.value = {
        right: `calc(100% - ${ve + 15 + 6}px)`
      };
    });
    const Te = () => {
      const { type: k, autosize: M } = r;
      if (!(!st || k !== "textarea" || !d.value))
        if (M) {
          const ve = Bt(M) ? M.minRows : void 0, Ae = Bt(M) ? M.maxRows : void 0, Xe = Ji(d.value, ve, Ae);
          y.value = {
            overflowY: "hidden",
            ...Xe
          }, tt(() => {
            d.value.offsetHeight, y.value = Xe;
          });
        } else
          y.value = {
            minHeight: Ji(d.value).minHeight
          };
    }, ce = ((k) => {
      let M = !1;
      return () => {
        var ve;
        if (M || !r.autosize)
          return;
        ((ve = d.value) == null ? void 0 : ve.offsetParent) === null || (k(), M = !0);
      };
    })(Te), et = () => {
      const k = C.value, M = r.formatter ? r.formatter(z.value) : z.value;
      !k || k.value === M || (k.value = M);
    }, ct = async (k) => {
      ke();
      let { value: M } = k.target;
      if (r.formatter && r.parser && (M = r.parser(M)), !gt.value) {
        if (M === z.value) {
          et();
          return;
        }
        n(mt, M), n(Fn, M), await tt(), et(), We();
      }
    }, je = (k) => {
      let { value: M } = k.target;
      r.formatter && r.parser && (M = r.parser(M)), n(Bn, M);
    }, {
      isComposing: gt,
      handleCompositionStart: ut,
      handleCompositionUpdate: H,
      handleCompositionEnd: Q
    } = df({ emit: n, afterComposition: ct }), q = () => {
      ke(), L.value = !L.value, setTimeout(We);
    }, ge = () => {
      var k;
      return (k = C.value) == null ? void 0 : k.focus();
    }, _ = () => {
      var k;
      return (k = C.value) == null ? void 0 : k.blur();
    }, S = (k) => {
      E.value = !1, n("mouseleave", k);
    }, D = (k) => {
      E.value = !0, n("mouseenter", k);
    }, K = (k) => {
      n("keydown", k);
    }, Ee = () => {
      var k;
      (k = C.value) == null || k.select();
    }, fe = () => {
      n(mt, ""), n(Bn, ""), n("clear"), n(Fn, "");
    };
    return be(() => r.modelValue, () => {
      var k;
      tt(() => Te()), r.validateEvent && ((k = f?.validate) == null || k.call(f, "change").catch((M) => void 0));
    }), be(z, () => et()), be(() => r.type, async () => {
      await tt(), et(), Te();
    }), ot(() => {
      !r.formatter && r.parser, et(), tt(Te);
    }), t({
      input: A,
      textarea: d,
      ref: C,
      textareaStyle: P,
      autosize: Rn(r, "autosize"),
      isComposing: gt,
      focus: ge,
      blur: _,
      select: Ee,
      clear: fe,
      resizeTextarea: Te
    }), (k, M) => (N(), G("div", {
      class: j([
        c(i),
        {
          [c(g).bm("group", "append")]: k.$slots.append,
          [c(g).bm("group", "prepend")]: k.$slots.prepend
        }
      ]),
      style: bt(c(R)),
      onMouseenter: D,
      onMouseleave: S
    }, [
      te(" input "),
      k.type !== "textarea" ? (N(), G(Tt, { key: 0 }, [
        te(" prepend slot "),
        k.$slots.prepend ? (N(), G("div", {
          key: 0,
          class: j(c(g).be("group", "prepend"))
        }, [
          he(k.$slots, "prepend")
        ], 2)) : te("v-if", !0),
        w("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: j(c(l))
        }, [
          te(" prefix slot "),
          k.$slots.prefix || k.prefixIcon ? (N(), G("span", {
            key: 0,
            class: j(c(g).e("prefix"))
          }, [
            w("span", {
              class: j(c(g).e("prefix-inner"))
            }, [
              he(k.$slots, "prefix"),
              k.prefixIcon ? (N(), le(c(at), {
                key: 0,
                class: j(c(g).e("icon"))
              }, {
                default: ae(() => [
                  (N(), le(Ot(k.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : te("v-if", !0)
            ], 2)
          ], 2)) : te("v-if", !0),
          w("input", Rr({
            id: c(p),
            ref_key: "input",
            ref: A,
            class: c(g).e("inner")
          }, c(a), {
            minlength: k.minlength,
            maxlength: k.maxlength,
            type: k.showPassword ? L.value ? "text" : "password" : k.type,
            disabled: c(v),
            readonly: k.readonly,
            autocomplete: k.autocomplete,
            tabindex: k.tabindex,
            "aria-label": k.ariaLabel,
            placeholder: k.placeholder,
            style: k.inputStyle,
            form: k.form,
            autofocus: k.autofocus,
            role: k.containerRole,
            onCompositionstart: c(ut),
            onCompositionupdate: c(H),
            onCompositionend: c(Q),
            onInput: ct,
            onChange: je,
            onKeydown: K
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          te(" suffix slot "),
          c(Ce) ? (N(), G("span", {
            key: 1,
            class: j(c(g).e("suffix"))
          }, [
            w("span", {
              class: j(c(g).e("suffix-inner"))
            }, [
              !c(ie) || !c(J) || !c(_e) ? (N(), G(Tt, { key: 0 }, [
                he(k.$slots, "suffix"),
                k.suffixIcon ? (N(), le(c(at), {
                  key: 0,
                  class: j(c(g).e("icon"))
                }, {
                  default: ae(() => [
                    (N(), le(Ot(k.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : te("v-if", !0)
              ], 64)) : te("v-if", !0),
              c(ie) ? (N(), le(c(at), {
                key: 1,
                class: j([c(g).e("icon"), c(g).e("clear")]),
                onMousedown: Ye(c(yo), ["prevent"]),
                onClick: fe
              }, {
                default: ae(() => [
                  $(c(sl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : te("v-if", !0),
              c(J) ? (N(), le(c(at), {
                key: 2,
                class: j([c(g).e("icon"), c(g).e("password")]),
                onClick: q
              }, {
                default: ae(() => [
                  (N(), le(Ot(c(de))))
                ]),
                _: 1
              }, 8, ["class"])) : te("v-if", !0),
              c(_e) ? (N(), G("span", {
                key: 3,
                class: j(c(g).e("count"))
              }, [
                w("span", {
                  class: j(c(g).e("count-inner"))
                }, B(c(Z)) + " / " + B(k.maxlength), 3)
              ], 2)) : te("v-if", !0),
              c(ee) && c(me) && c(ue) ? (N(), le(c(at), {
                key: 4,
                class: j([
                  c(g).e("icon"),
                  c(g).e("validateIcon"),
                  c(g).is("loading", c(ee) === "validating")
                ])
              }, {
                default: ae(() => [
                  (N(), le(Ot(c(me))))
                ]),
                _: 1
              }, 8, ["class"])) : te("v-if", !0)
            ], 2)
          ], 2)) : te("v-if", !0)
        ], 2),
        te(" append slot "),
        k.$slots.append ? (N(), G("div", {
          key: 1,
          class: j(c(g).be("group", "append"))
        }, [
          he(k.$slots, "append")
        ], 2)) : te("v-if", !0)
      ], 64)) : (N(), G(Tt, { key: 1 }, [
        te(" textarea "),
        w("textarea", Rr({
          id: c(p),
          ref_key: "textarea",
          ref: d,
          class: [c(h).e("inner"), c(g).is("focus", c(W))]
        }, c(a), {
          minlength: k.minlength,
          maxlength: k.maxlength,
          tabindex: k.tabindex,
          disabled: c(v),
          readonly: k.readonly,
          autocomplete: k.autocomplete,
          style: c(P),
          "aria-label": k.ariaLabel,
          placeholder: k.placeholder,
          form: k.form,
          autofocus: k.autofocus,
          rows: k.rows,
          role: k.containerRole,
          onCompositionstart: c(ut),
          onCompositionupdate: c(H),
          onCompositionend: c(Q),
          onInput: ct,
          onFocus: c(U),
          onBlur: c(ne),
          onChange: je,
          onKeydown: K
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(_e) ? (N(), G("span", {
          key: 0,
          style: bt(T.value),
          class: j(c(g).e("count"))
        }, B(c(Z)) + " / " + B(k.maxlength), 7)) : te("v-if", !0)
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
}), ul = Symbol("scrollbarContextKey"), Cy = Ve({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Oy = "Thumb", Ly = /* @__PURE__ */ re({
  __name: "thumb",
  props: Cy,
  setup(e) {
    const t = e, n = $e(ul), r = lt("scrollbar");
    n || rl(Oy, "can not inject scrollbar context");
    const o = V(), a = V(), s = V({}), i = V(!1);
    let l = !1, u = !1, f = st ? document.onselectstart : null;
    const p = I(() => Sy[t.vertical ? "vertical" : "horizontal"]), m = I(() => Ay({
      size: t.size,
      move: t.move,
      bar: p.value
    })), v = I(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), g = (C) => {
      var O;
      if (C.stopPropagation(), C.ctrlKey || [1, 2].includes(C.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), A(C);
      const W = C.currentTarget;
      W && (s.value[p.value.axis] = W[p.value.offset] - (C[p.value.client] - W.getBoundingClientRect()[p.value.direction]));
    }, h = (C) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const O = Math.abs(C.target.getBoundingClientRect()[p.value.direction] - C[p.value.client]), W = a.value[p.value.offset] / 2, U = (O - W) * 100 * v.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = U * n.wrapElement[p.value.scrollSize] / 100;
    }, A = (C) => {
      C.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", E), f = document.onselectstart, document.onselectstart = () => !1;
    }, d = (C) => {
      if (!o.value || !a.value || l === !1)
        return;
      const O = s.value[p.value.axis];
      if (!O)
        return;
      const W = (o.value.getBoundingClientRect()[p.value.direction] - C[p.value.client]) * -1, U = a.value[p.value.offset] - O, ne = (W - U) * 100 * v.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = ne * n.wrapElement[p.value.scrollSize] / 100;
    }, E = () => {
      l = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", E), y(), u && (i.value = !1);
    }, L = () => {
      u = !1, i.value = !!t.size;
    }, T = () => {
      u = !0, i.value = l;
    };
    Tn(() => {
      y(), document.removeEventListener("mouseup", E);
    });
    const y = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return on(Rn(n, "scrollbarElement"), "mousemove", L), on(Rn(n, "scrollbarElement"), "mouseleave", T), (C, O) => (N(), le(jr, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: ae(() => [
        ht(w("div", {
          ref_key: "instance",
          ref: o,
          class: j([c(r).e("bar"), c(r).is(c(p).key)]),
          onMousedown: h
        }, [
          w("div", {
            ref_key: "thumb",
            ref: a,
            class: j(c(r).e("thumb")),
            style: bt(c(m)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [zn, C.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var tc = /* @__PURE__ */ He(Ly, [["__file", "thumb.vue"]]);
const Iy = Ve({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Ry = /* @__PURE__ */ re({
  __name: "bar",
  props: Iy,
  setup(e, { expose: t }) {
    const n = e, r = $e(ul), o = V(0), a = V(0), s = V(""), i = V(""), l = V(1), u = V(1);
    return t({
      handleScroll: (m) => {
        if (m) {
          const v = m.offsetHeight - Tr, g = m.offsetWidth - Tr;
          a.value = m.scrollTop * 100 / v * l.value, o.value = m.scrollLeft * 100 / g * u.value;
        }
      },
      update: () => {
        const m = r?.wrapElement;
        if (!m)
          return;
        const v = m.offsetHeight - Tr, g = m.offsetWidth - Tr, h = v ** 2 / m.scrollHeight, A = g ** 2 / m.scrollWidth, d = Math.max(h, n.minSize), E = Math.max(A, n.minSize);
        l.value = h / (v - h) / (d / (v - d)), u.value = A / (g - A) / (E / (g - E)), i.value = d + Tr < v ? `${d}px` : "", s.value = E + Tr < g ? `${E}px` : "";
      }
    }), (m, v) => (N(), G(Tt, null, [
      $(tc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: m.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      $(tc, {
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
const Ny = Ve({
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
  }) => [e, t].every(Ne)
}, $y = "ElScrollbar", My = re({
  name: $y
}), Dy = /* @__PURE__ */ re({
  ...My,
  props: Ny,
  emits: Py,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = lt("scrollbar");
    let a, s, i = 0, l = 0;
    const u = V(), f = V(), p = V(), m = V(), v = I(() => {
      const y = {};
      return r.height && (y.height = Mr(r.height)), r.maxHeight && (y.maxHeight = Mr(r.maxHeight)), [r.wrapStyle, y];
    }), g = I(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), h = I(() => [o.e("view"), r.viewClass]), A = () => {
      var y;
      f.value && ((y = m.value) == null || y.handleScroll(f.value), i = f.value.scrollTop, l = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function d(y, C) {
      Bt(y) ? f.value.scrollTo(y) : Ne(y) && Ne(C) && f.value.scrollTo(y, C);
    }
    const E = (y) => {
      Ne(y) && (f.value.scrollTop = y);
    }, L = (y) => {
      Ne(y) && (f.value.scrollLeft = y);
    }, T = () => {
      var y;
      (y = m.value) == null || y.update();
    };
    return be(() => r.noresize, (y) => {
      y ? (a?.(), s?.()) : ({ stop: a } = pn(p, T), s = on("resize", T));
    }, { immediate: !0 }), be(() => [r.maxHeight, r.height], () => {
      r.native || tt(() => {
        var y;
        T(), f.value && ((y = m.value) == null || y.handleScroll(f.value));
      });
    }), _n(ul, ur({
      scrollbarElement: u,
      wrapElement: f
    })), rd(() => {
      f.value && (f.value.scrollTop = i, f.value.scrollLeft = l);
    }), ot(() => {
      r.native || tt(() => {
        T();
      });
    }), Uc(() => T()), t({
      wrapRef: f,
      update: T,
      scrollTo: d,
      setScrollTop: E,
      setScrollLeft: L,
      handleScroll: A
    }), (y, C) => (N(), G("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: j(c(o).b())
    }, [
      w("div", {
        ref_key: "wrapRef",
        ref: f,
        class: j(c(g)),
        style: bt(c(v)),
        tabindex: y.tabindex,
        onScroll: A
      }, [
        (N(), le(Ot(y.tag), {
          id: y.id,
          ref_key: "resizeRef",
          ref: p,
          class: j(c(h)),
          style: bt(y.viewStyle),
          role: y.role,
          "aria-label": y.ariaLabel,
          "aria-orientation": y.ariaOrientation
        }, {
          default: ae(() => [
            he(y.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      y.native ? te("v-if", !0) : (N(), le(xy, {
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
], mf = Ve({
  role: {
    type: String,
    values: By,
    default: "tooltip"
  }
}), Vy = re({
  name: "ElPopper",
  inheritAttrs: !1
}), Uy = /* @__PURE__ */ re({
  ...Vy,
  props: mf,
  setup(e, { expose: t }) {
    const n = e, r = V(), o = V(), a = V(), s = V(), i = I(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), _n(fl, l), (u, f) => he(u.$slots, "default");
  }
});
var jy = /* @__PURE__ */ He(Uy, [["__file", "popper.vue"]]);
const hf = Ve({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Hy = re({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Wy = /* @__PURE__ */ re({
  ...Hy,
  props: hf,
  setup(e, { expose: t }) {
    const n = e, r = lt("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = $e(pf, void 0);
    return be(() => n.arrowOffset, (i) => {
      o.value = i;
    }), Tn(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (N(), G("span", {
      ref_key: "arrowRef",
      ref: a,
      class: j(c(r).e("arrow")),
      style: bt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Gy = /* @__PURE__ */ He(Wy, [["__file", "arrow.vue"]]);
const gf = Ve({
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
}, qy = "ElOnlyChild", Zy = re({
  name: qy,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = $e(vf), a = Yy((r = o?.setForwardRef) != null ? r : yo);
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
  const t = lt("only-child");
  return $("span", {
    class: t.e("content")
  }, [e]);
}
const Xy = re({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Qy = /* @__PURE__ */ re({
  ...Xy,
  props: gf,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = $e(fl, void 0);
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
    return ot(() => {
      be(() => n.virtualRef, (p) => {
        p && (o.value = Pn(p));
      }, {
        immediate: !0
      }), be(o, (p, m) => {
        u?.(), u = void 0, rn(p) && (f.forEach((v) => {
          var g;
          const h = n[v];
          h && (p.addEventListener(v.slice(2).toLowerCase(), h), (g = m?.removeEventListener) == null || g.call(m, v.slice(2).toLowerCase(), h));
        }), ks(p) && (u = be([a, s, i, l], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, h) => {
            Dn(v[h]) ? p.removeAttribute(g) : p.setAttribute(g, v[h]);
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
    }), (p, m) => p.virtualTriggering ? te("v-if", !0) : (N(), le(c(Zy), Rr({ key: 0 }, p.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: ae(() => [
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
}, oc = "focusAfterTrapped", ac = "focusAfterReleased", n_ = Symbol("elFocusTrap"), dl = V(), xa = V(0), pl = V(0);
let jo = 0;
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
}, c_ = () => (ot(() => {
  jo === 0 && (document.addEventListener("mousedown", Ho), document.addEventListener("touchstart", Ho), document.addEventListener("keydown", cc)), jo++;
}), Tn(() => {
  jo--, jo <= 0 && (document.removeEventListener("mousedown", Ho), document.removeEventListener("touchstart", Ho), document.removeEventListener("keydown", cc));
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
  ot(() => {
    Lr.length === 0 && document.addEventListener("keydown", uc), st && Lr.push(e);
  }), Tn(() => {
    Lr = Lr.filter((t) => t !== e), Lr.length === 0 && st && document.removeEventListener("keydown", uc);
  });
}, f_ = re({
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
    const n = V();
    let r, o;
    const { focusReason: a } = c_();
    u_((g) => {
      e.trapped && !s.paused && t("release-requested", g);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (g) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: h, altKey: A, ctrlKey: d, metaKey: E, currentTarget: L, shiftKey: T } = g, { loop: y } = e, C = h === bn.tab && !A && !d && !E, O = document.activeElement;
      if (C && O) {
        const W = L, [U, ne] = o_(W);
        if (U && ne) {
          if (!T && O === ne) {
            const ee = Wo({
              focusReason: a.value
            });
            t("focusout-prevented", ee), ee.defaultPrevented || (g.preventDefault(), y && Ln(U, !0));
          } else if (T && [U, W].includes(O)) {
            const ee = Wo({
              focusReason: a.value
            });
            t("focusout-prevented", ee), ee.defaultPrevented || (g.preventDefault(), y && Ln(ne, !0));
          }
        } else if (O === W) {
          const ee = Wo({
            focusReason: a.value
          });
          t("focusout-prevented", ee), ee.defaultPrevented || g.preventDefault();
        }
      }
    };
    _n(n_, {
      focusTrapRef: n,
      onKeydown: i
    }), be(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), be([n], ([g], [h]) => {
      g && (g.addEventListener("keydown", i), g.addEventListener("focusin", f), g.addEventListener("focusout", p)), h && (h.removeEventListener("keydown", i), h.removeEventListener("focusin", f), h.removeEventListener("focusout", p));
    });
    const l = (g) => {
      t(oc, g);
    }, u = (g) => t(ac, g), f = (g) => {
      const h = c(n);
      if (!h)
        return;
      const A = g.target, d = g.relatedTarget, E = A && h.contains(A);
      e.trapped || d && h.contains(d) || (r = d), E && t("focusin", g), !s.paused && e.trapped && (E ? o = A : Ln(o, !0));
    }, p = (g) => {
      const h = c(n);
      if (!(s.paused || !h))
        if (e.trapped) {
          const A = g.relatedTarget;
          !Dn(A) && !h.contains(A) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const d = Wo({
                focusReason: a.value
              });
              t("focusout-prevented", d), d.defaultPrevented || Ln(o, !0);
            }
          }, 0);
        } else {
          const A = g.target;
          A && h.contains(A) || t("focusout", g);
        }
    };
    async function m() {
      await tt();
      const g = c(n);
      if (g) {
        ic.push(s);
        const h = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = h, !g.contains(h)) {
          const d = new Event(qa, rc);
          g.addEventListener(qa, l), g.dispatchEvent(d), d.defaultPrevented || tt(() => {
            let E = e.focusStartEl;
            Et(E) || (Ln(E), document.activeElement !== E && (E = "first")), E === "first" && l_(yf(g), !0), (document.activeElement === h || E === "container") && Ln(g);
          });
        }
      }
    }
    function v() {
      const g = c(n);
      if (g) {
        g.removeEventListener(qa, l);
        const h = new CustomEvent(Za, {
          ...rc,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(Za, u), g.dispatchEvent(h), !h.defaultPrevented && (a.value == "keyboard" || !i_() || g.contains(document.activeElement)) && Ln(r ?? document.body), g.removeEventListener(Za, u), ic.remove(s);
      }
    }
    return ot(() => {
      e.trapped && m(), be(() => e.trapped, (g) => {
        g ? m() : v();
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
function Vn(e) {
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
  return !Kt(e) || Vn(e).position === "fixed" ? null : e.offsetParent;
}
function L_(e) {
  var t = /firefox/i.test(Ts()), n = /Trident/i.test(Ts());
  if (n && Kt(e)) {
    var r = Vn(e);
    if (r.position === "fixed") return null;
  }
  var o = Pa(e);
  for (hl(o) && (o = o.host); Kt(o) && ["html", "body"].indexOf(kn(o)) < 0; ) {
    var a = Vn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function Io(e) {
  for (var t = Vt(e), n = dc(e); n && O_(n) && Vn(n).position === "static"; ) n = dc(n);
  return n && (kn(n) === "html" || kn(n) === "body" && Vn(n).position === "static") ? t : n || L_(e) || t;
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
    var p = R_(o.padding, n), m = gl(a), v = l === "y" ? Mt : Dt, g = l === "y" ? Yt : qt, h = n.rects.reference[f] + n.rects.reference[l] - s[l] - n.rects.popper[f], A = s[l] - n.rects.reference[l], d = Io(a), E = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, L = h / 2 - A / 2, T = p[v], y = E - m[f] - p[g], C = E / 2 - m[f] / 2 + L, O = uo(T, C, y), W = l;
    n.modifiersData[r] = (t = {}, t[W] = O, t.centerOffset = O - C, t);
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
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, p = e.isFixed, m = s.x, v = m === void 0 ? 0 : m, g = s.y, h = g === void 0 ? 0 : g, A = typeof f == "function" ? f({ x: v, y: h }) : { x: v, y: h };
  v = A.x, h = A.y;
  var d = s.hasOwnProperty("x"), E = s.hasOwnProperty("y"), L = Dt, T = Mt, y = window;
  if (u) {
    var C = Io(n), O = "clientHeight", W = "clientWidth";
    if (C === Vt(n) && (C = rr(n), Vn(C).position !== "static" && i === "absolute" && (O = "scrollHeight", W = "scrollWidth")), C = C, o === Mt || (o === Dt || o === qt) && a === ko) {
      T = Yt;
      var U = p && C === y && y.visualViewport ? y.visualViewport.height : C[O];
      h -= U - r.height, h *= l ? 1 : -1;
    }
    if (o === Dt || (o === Mt || o === Yt) && a === ko) {
      L = qt;
      var ne = p && C === y && y.visualViewport ? y.visualViewport.width : C[W];
      v -= ne - r.width, v *= l ? 1 : -1;
    }
  }
  var ue = Object.assign({ position: i }, u && $_), ee = f === !0 ? M_({ x: v, y: h }, Vt(n)) : { x: v, y: h };
  if (v = ee.x, h = ee.y, l) {
    var me;
    return Object.assign({}, ue, (me = {}, me[T] = E ? "0" : "", me[L] = d ? "0" : "", me.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + h + "px)" : "translate3d(" + v + "px, " + h + "px, 0)", me));
  }
  return Object.assign({}, ue, (t = {}, t[T] = E ? h + "px" : "", t[L] = d ? v + "px" : "", t.transform = "", t));
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
function U_(e) {
  var t, n = rr(e), r = bl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = cr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = cr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + yl(e), l = -r.scrollTop;
  return Vn(o || n).direction === "rtl" && (i += cr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function _l(e) {
  var t = Vn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
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
function j_(e, t) {
  var n = zr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function hc(e, t, n) {
  return t === _f ? Es(V_(e, n)) : pr(t) ? j_(t, n) : Es(U_(rr(e)));
}
function H_(e) {
  var t = fo(Pa(e)), n = ["absolute", "fixed"].indexOf(Vn(e).position) >= 0, r = n && Kt(e) ? Io(e) : e;
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? m_ : i, u = n.rootBoundary, f = u === void 0 ? _f : u, p = n.elementContext, m = p === void 0 ? to : p, v = n.altBoundary, g = v === void 0 ? !1 : v, h = n.padding, A = h === void 0 ? 0 : h, d = Sf(typeof A != "number" ? A : Af(A, Lo)), E = m === to ? h_ : to, L = e.rects.popper, T = e.elements[g ? E : m], y = W_(pr(T) ? T : T.contextElement || rr(e.elements.popper), l, f, s), C = zr(e.elements.reference), O = If({ reference: C, element: L, placement: o }), W = Es(Object.assign({}, L, O)), U = m === to ? W : C, ne = { top: y.top - U.top + d.top, bottom: U.bottom - y.bottom + d.bottom, left: y.left - U.left + d.left, right: U.right - y.right + d.right }, ue = e.modifiersData.offset;
  if (m === to && ue) {
    var ee = ue[o];
    Object.keys(ne).forEach(function(me) {
      var de = [qt, Yt].indexOf(me) >= 0 ? 1 : -1, R = [Mt, Yt].indexOf(me) >= 0 ? "y" : "x";
      ne[me] += ee[R] * de;
    });
  }
  return ne;
}
function G_(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Na : l, f = Br(r), p = f ? i ? fc : fc.filter(function(g) {
    return Br(g) === f;
  }) : Lo, m = p.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  m.length === 0 && (m = p);
  var v = m.reduce(function(g, h) {
    return g[h] = To(e, { placement: h, boundary: o, rootBoundary: a, padding: s })[yn(h)], g;
  }, {});
  return Object.keys(v).sort(function(g, h) {
    return v[g] - v[h];
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
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, f = n.boundary, p = n.rootBoundary, m = n.altBoundary, v = n.flipVariations, g = v === void 0 ? !0 : v, h = n.allowedAutoPlacements, A = t.options.placement, d = yn(A), E = d === A, L = l || (E || !g ? [Jo(A)] : K_(A)), T = [A].concat(L).reduce(function(ke, We) {
      return ke.concat(yn(We) === ml ? G_(t, { placement: We, boundary: f, rootBoundary: p, padding: u, flipVariations: g, allowedAutoPlacements: h }) : We);
    }, []), y = t.rects.reference, C = t.rects.popper, O = /* @__PURE__ */ new Map(), W = !0, U = T[0], ne = 0; ne < T.length; ne++) {
      var ue = T[ne], ee = yn(ue), me = Br(ue) === Dr, de = [Mt, Yt].indexOf(ee) >= 0, R = de ? "width" : "height", P = To(t, { placement: ue, boundary: f, rootBoundary: p, altBoundary: m, padding: u }), z = de ? me ? qt : Dt : me ? Yt : Mt;
      y[R] > C[R] && (z = Jo(z));
      var ie = Jo(z), J = [];
      if (a && J.push(P[ee] <= 0), i && J.push(P[z] <= 0, P[ie] <= 0), J.every(function(ke) {
        return ke;
      })) {
        U = ue, W = !1;
        break;
      }
      O.set(ue, J);
    }
    if (W) for (var _e = g ? 3 : 1, Z = function(ke) {
      var We = T.find(function(Te) {
        var Ge = O.get(Te);
        if (Ge) return Ge.slice(0, ke).every(function(ce) {
          return ce;
        });
      });
      if (We) return U = We, "break";
    }, Ue = _e; Ue > 0; Ue--) {
      var Ce = Z(Ue);
      if (Ce === "break") break;
    }
    t.placement !== U && (t.modifiersData[r]._skip = !0, t.placement = U, t.reset = !0);
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
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, p = n.padding, m = n.tether, v = m === void 0 ? !0 : m, g = n.tetherOffset, h = g === void 0 ? 0 : g, A = To(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: f }), d = yn(t.placement), E = Br(t.placement), L = !E, T = vl(d), y = n1(T), C = t.modifiersData.popperOffsets, O = t.rects.reference, W = t.rects.popper, U = typeof h == "function" ? h(Object.assign({}, t.rects, { placement: t.placement })) : h, ne = typeof U == "number" ? { mainAxis: U, altAxis: U } : Object.assign({ mainAxis: 0, altAxis: 0 }, U), ue = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ee = { x: 0, y: 0 };
  if (C) {
    if (a) {
      var me, de = T === "y" ? Mt : Dt, R = T === "y" ? Yt : qt, P = T === "y" ? "height" : "width", z = C[T], ie = z + A[de], J = z - A[R], _e = v ? -W[P] / 2 : 0, Z = E === Dr ? O[P] : W[P], Ue = E === Dr ? -W[P] : -O[P], Ce = t.elements.arrow, ke = v && Ce ? gl(Ce) : { width: 0, height: 0 }, We = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ef(), Te = We[de], Ge = We[R], ce = uo(0, O[P], ke[P]), et = L ? O[P] / 2 - _e - ce - Te - ne.mainAxis : Z - ce - Te - ne.mainAxis, ct = L ? -O[P] / 2 + _e + ce + Ge + ne.mainAxis : Ue + ce + Ge + ne.mainAxis, je = t.elements.arrow && Io(t.elements.arrow), gt = je ? T === "y" ? je.clientTop || 0 : je.clientLeft || 0 : 0, ut = (me = ue?.[T]) != null ? me : 0, H = z + et - ut - gt, Q = z + ct - ut, q = uo(v ? ma(ie, H) : ie, z, v ? cr(J, Q) : J);
      C[T] = q, ee[T] = q - z;
    }
    if (i) {
      var ge, _ = T === "x" ? Mt : Dt, S = T === "x" ? Yt : qt, D = C[y], K = y === "y" ? "height" : "width", Ee = D + A[_], fe = D - A[S], k = [Mt, Dt].indexOf(d) !== -1, M = (ge = ue?.[y]) != null ? ge : 0, ve = k ? Ee : D - O[K] - W[K] - M + ne.altAxis, Ae = k ? D + O[K] + W[K] - M - ne.altAxis : fe, Xe = v && k ? I_(ve, D, Ae) : uo(v ? ve : Ee, D, v ? Ae : fe);
      C[y] = Xe, ee[y] = Xe - D;
    }
    t.modifiersData[r] = ee;
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
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, bc, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, f = [], p = !1, m = { state: u, setOptions: function(h) {
      var A = typeof h == "function" ? h(u.options) : h;
      g(), u.options = Object.assign({}, a, u.options, A), u.scrollParents = { reference: pr(s) ? fo(s) : s.contextElement ? fo(s.contextElement) : [], popper: fo(i) };
      var d = u1(d1([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = d.filter(function(E) {
        return E.enabled;
      }), v(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var h = u.elements, A = h.reference, d = h.popper;
        if (yc(A, d)) {
          u.rects = { reference: i1(A, Io(d), u.options.strategy === "fixed"), popper: gl(d) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(W) {
            return u.modifiersData[W.name] = Object.assign({}, W.data);
          });
          for (var E = 0; E < u.orderedModifiers.length; E++) {
            if (u.reset === !0) {
              u.reset = !1, E = -1;
              continue;
            }
            var L = u.orderedModifiers[E], T = L.fn, y = L.options, C = y === void 0 ? {} : y, O = L.name;
            typeof T == "function" && (u = T({ state: u, options: C, name: O, instance: m }) || u);
          }
        }
      }
    }, update: f1(function() {
      return new Promise(function(h) {
        m.forceUpdate(), h(u);
      });
    }), destroy: function() {
      g(), p = !0;
    } };
    if (!yc(s, i)) return m;
    m.setOptions(l).then(function(h) {
      !p && l.onFirstUpdate && l.onFirstUpdate(h);
    });
    function v() {
      u.orderedModifiers.forEach(function(h) {
        var A = h.name, d = h.options, E = d === void 0 ? {} : d, L = h.effect;
        if (typeof L == "function") {
          var T = L({ state: u, name: A, instance: m, options: E }), y = function() {
          };
          f.push(T || y);
        }
      });
    }
    function g() {
      f.forEach(function(h) {
        return h();
      }), f = [];
    }
    return m;
  };
}
wl();
var p1 = [Of, Rf, Cf, wf];
wl({ defaultModifiers: p1 });
var m1 = [Of, Rf, Cf, wf, e1, q_, o1, P_, X_], h1 = wl({ defaultModifiers: m1 });
const g1 = ["fixed", "absolute"], v1 = Ve({
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
}), xf = Ve({
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
  const n = V(!1), r = V();
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
  if (st)
    return Pn(e);
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
  }), a = Qn(), s = V({
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
  return be(o, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), be([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = h1(l, u, c(o)));
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
function S1(e) {
  const t = Object.keys(e.elements), n = ca(t.map((o) => [o, e.styles[o] || {}])), r = ca(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const A1 = 0, C1 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = $e(fl, void 0), a = V(), s = V(), i = I(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = I(() => {
    var d;
    const E = c(a), L = (d = c(s)) != null ? d : A1;
    return {
      name: "arrow",
      enabled: !Hb(E),
      options: {
        element: E,
        padding: L
      }
    };
  }), u = I(() => ({
    onFirstUpdate: () => {
      g();
    },
    ..._1(e, [
      c(l),
      c(i)
    ])
  })), f = I(() => w1(e.referenceEl) || c(r)), { attributes: p, state: m, styles: v, update: g, forceUpdate: h, instanceRef: A } = E1(f, n, u);
  return be(A, (d) => t.value = d), ot(() => {
    be(() => {
      var d;
      return (d = c(f)) == null ? void 0 : d.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: A,
    state: m,
    styles: v,
    role: o,
    forceUpdate: h,
    update: g
  };
}, O1 = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Gu(), a = lt("popper"), s = I(() => c(t).popper), i = V(Ne(e.zIndex) ? e.zIndex : o()), l = I(() => [
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
      i.value = Ne(e.zIndex) ? e.zIndex : o();
    }
  };
}, L1 = re({
  name: "ElPopperContent"
}), I1 = /* @__PURE__ */ re({
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
    } = y1(r, n), { attributes: p, arrowRef: m, contentRef: v, styles: g, instanceRef: h, role: A, update: d } = C1(r), {
      ariaModal: E,
      arrowStyle: L,
      contentAttrs: T,
      contentClass: y,
      contentStyle: C,
      updateZIndex: O
    } = O1(r, {
      styles: g,
      attributes: p,
      role: A
    }), W = $e(pa, void 0), U = V();
    _n(pf, {
      arrowStyle: L,
      arrowRef: m,
      arrowOffset: U
    }), W && _n(pa, {
      ...W,
      addInputId: yo,
      removeInputId: yo
    });
    let ne;
    const ue = (me = !0) => {
      d(), me && O();
    }, ee = () => {
      ue(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return ot(() => {
      be(() => r.triggerTargetEl, (me, de) => {
        ne?.(), ne = void 0;
        const R = c(me || v.value), P = c(de || v.value);
        rn(R) && (ne = be([A, () => r.ariaLabel, E, () => r.id], (z) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((ie, J) => {
            Dn(z[J]) ? R.removeAttribute(ie) : R.setAttribute(ie, z[J]);
          });
        }, { immediate: !0 })), P !== R && rn(P) && ["role", "aria-label", "aria-modal", "id"].forEach((z) => {
          P.removeAttribute(z);
        });
      }, { immediate: !0 }), be(() => r.visible, ee, { immediate: !0 });
    }), Tn(() => {
      ne?.(), ne = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: h,
      updatePopper: ue,
      contentStyle: C
    }), (me, de) => (N(), G("div", Rr({
      ref_key: "contentRef",
      ref: v
    }, c(T), {
      style: c(C),
      class: c(y),
      tabindex: "-1",
      onMouseenter: (R) => me.$emit("mouseenter", R),
      onMouseleave: (R) => me.$emit("mouseleave", R)
    }), [
      $(c(p_), {
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
        default: ae(() => [
          he(me.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var R1 = /* @__PURE__ */ He(I1, [["__file", "content.vue"]]);
const x1 = sn(jy), kl = Symbol("elTooltip");
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
const N1 = Ve({
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
        Ne(p) && p > 0 && s(() => {
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
}, Tl = Ve({
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
}), Nf = Ve({
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
      const m = It(), { emit: v } = m, g = m.props, h = I(() => Ze(g[n])), A = I(() => g[e] === null), d = (O) => {
        s.value !== !0 && (s.value = !0, i && (i.value = O), Ze(f) && f(O));
      }, E = (O) => {
        s.value !== !1 && (s.value = !1, i && (i.value = O), Ze(p) && p(O));
      }, L = (O) => {
        if (g.disabled === !0 || Ze(u) && !u())
          return;
        const W = h.value && st;
        W && v(t, !0), (A.value || !W) && d(O);
      }, T = (O) => {
        if (g.disabled === !0 || !st)
          return;
        const W = h.value && st;
        W && v(t, !1), (A.value || !W) && E(O);
      }, y = (O) => {
        Jn(O) && (g.disabled && O ? h.value && v(t, !1) : s.value !== O && (O ? d() : E()));
      }, C = () => {
        s.value ? T() : L();
      };
      return be(() => g[e], y), l && m.appContext.config.globalProperties.$route !== void 0 && be(() => ({
        ...m.proxy.$route
      }), () => {
        l.value && s.value && T();
      }), ot(() => {
        y(g[e]);
      }), {
        hide: T,
        show: L,
        toggle: C,
        hasUpdateHandler: h
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: F1,
  useModelToggleEmits: z1,
  useModelToggle: B1
} = D1("visible"), V1 = Ve({
  ...mf,
  ...F1,
  ...Tl,
  ...Nf,
  ...hf,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), U1 = [
  ...z1,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], j1 = (e, t) => mn(e) ? e.includes(t) : e === t, Er = (e, t, n) => (r) => {
  j1(c(e), t) && n(r);
}, In = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, H1 = re({
  name: "ElTooltipTrigger"
}), W1 = /* @__PURE__ */ re({
  ...H1,
  props: Nf,
  setup(e, { expose: t }) {
    const n = e, r = lt("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = $e(kl, void 0), f = V(null), p = () => {
      if (c(o) || n.disabled)
        return !0;
    }, m = Rn(n, "trigger"), v = In(p, Er(m, "hover", i)), g = In(p, Er(m, "hover", l)), h = In(p, Er(m, "click", (T) => {
      T.button === 0 && u(T);
    })), A = In(p, Er(m, "focus", i)), d = In(p, Er(m, "focus", l)), E = In(p, Er(m, "contextmenu", (T) => {
      T.preventDefault(), u(T);
    })), L = In(p, (T) => {
      const { code: y } = T;
      n.triggerKeys.includes(y) && (T.preventDefault(), u(T));
    });
    return t({
      triggerRef: f
    }), (T, y) => (N(), le(c(Jy), {
      id: c(a),
      "virtual-ref": T.virtualRef,
      open: c(s),
      "virtual-triggering": T.virtualTriggering,
      class: j(c(r).e("trigger")),
      onBlur: c(d),
      onClick: c(h),
      onContextmenu: c(E),
      onFocus: c(A),
      onMouseenter: c(v),
      onMouseleave: c(g),
      onKeydown: c(L)
    }, {
      default: ae(() => [
        he(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var G1 = /* @__PURE__ */ He(W1, [["__file", "trigger.vue"]]);
const K1 = Ve({
  to: {
    type: pe([String, Object]),
    required: !0
  },
  disabled: Boolean
}), Y1 = /* @__PURE__ */ re({
  __name: "teleport",
  props: K1,
  setup(e) {
    return (t, n) => t.disabled ? he(t.$slots, "default", { key: 0 }) : (N(), le(sd, {
      key: 1,
      to: t.to
    }, [
      he(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var q1 = /* @__PURE__ */ He(Y1, [["__file", "teleport.vue"]]);
const Z1 = sn(q1), Pf = () => {
  const e = Ys(), t = cf(), n = I(() => `${e.value}-popper-container-${t.prefix}`), r = I(() => `#${n.value}`);
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
    st && (document.body.querySelector(t.value) || X1(e.value));
  }), {
    id: e,
    selector: t
  };
}, J1 = re({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), ew = /* @__PURE__ */ re({
  ...J1,
  props: Tl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Pf(), o = lt("tooltip"), a = V();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: f,
      onClose: p,
      onOpen: m,
      onShow: v,
      onHide: g,
      onBeforeShow: h,
      onBeforeHide: A
    } = $e(kl, void 0), d = I(() => n.transition || `${o.namespace.value}-fade-in-linear`), E = I(() => n.persistent);
    Tn(() => {
      s?.();
    });
    const L = I(() => c(E) ? !0 : c(u)), T = I(() => n.disabled ? !1 : c(u)), y = I(() => n.appendTo || r.value), C = I(() => {
      var z;
      return (z = n.style) != null ? z : {};
    }), O = V(!0), W = () => {
      g(), P() && Ln(document.body), O.value = !0;
    }, U = () => {
      if (c(i))
        return !0;
    }, ne = In(U, () => {
      n.enterable && c(f) === "hover" && m();
    }), ue = In(U, () => {
      c(f) === "hover" && p();
    }), ee = () => {
      var z, ie;
      (ie = (z = a.value) == null ? void 0 : z.updatePopper) == null || ie.call(z), h?.();
    }, me = () => {
      A?.();
    }, de = () => {
      v(), s = l0(I(() => {
        var z;
        return (z = a.value) == null ? void 0 : z.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(f) !== "hover" && p();
      });
    }, R = () => {
      n.virtualTriggering || p();
    }, P = (z) => {
      var ie;
      const J = (ie = a.value) == null ? void 0 : ie.popperContentRef, _e = z?.relatedTarget || document.activeElement;
      return J?.contains(_e);
    };
    return be(() => c(u), (z) => {
      z ? O.value = !1 : s?.();
    }, {
      flush: "post"
    }), be(() => n.content, () => {
      var z, ie;
      (ie = (z = a.value) == null ? void 0 : z.updatePopper) == null || ie.call(z);
    }), t({
      contentRef: a,
      isFocusInsideContent: P
    }), (z, ie) => (N(), le(c(Z1), {
      disabled: !z.teleported,
      to: c(y)
    }, {
      default: ae(() => [
        $(jr, {
          name: c(d),
          onAfterLeave: W,
          onBeforeEnter: ee,
          onAfterEnter: de,
          onBeforeLeave: me
        }, {
          default: ae(() => [
            c(L) ? ht((N(), le(c(R1), Rr({
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
              visible: c(T),
              "z-index": z.zIndex,
              onMouseenter: c(ne),
              onMouseleave: c(ue),
              onBlur: R,
              onClose: c(p)
            }), {
              default: ae(() => [
                he(z.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [zn, c(T)]
            ]) : te("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var tw = /* @__PURE__ */ He(ew, [["__file", "content.vue"]]);
const nw = re({
  name: "ElTooltip"
}), rw = /* @__PURE__ */ re({
  ...nw,
  props: V1,
  emits: U1,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Q1();
    const o = Ia(), a = V(), s = V(), i = () => {
      var d;
      const E = c(a);
      E && ((d = E.popperInstanceRef) == null || d.update());
    }, l = V(!1), u = V(), { show: f, hide: p, hasUpdateHandler: m } = B1({
      indicator: l,
      toggleReason: u
    }), { onOpen: v, onClose: g } = P1({
      showAfter: Rn(r, "showAfter"),
      hideAfter: Rn(r, "hideAfter"),
      autoClose: Rn(r, "autoClose"),
      open: f,
      close: p
    }), h = I(() => Jn(r.visible) && !m.value);
    _n(kl, {
      controlled: h,
      id: o,
      open: Ls(l),
      trigger: Rn(r, "trigger"),
      onOpen: (d) => {
        v(d);
      },
      onClose: (d) => {
        g(d);
      },
      onToggle: (d) => {
        c(l) ? g(d) : v(d);
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
    }), be(() => r.disabled, (d) => {
      d && l.value && (l.value = !1);
    });
    const A = (d) => {
      var E;
      return (E = s.value) == null ? void 0 : E.isFocusInsideContent(d);
    };
    return id(() => l.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: A,
      updatePopper: i,
      onOpen: v,
      onClose: g,
      hide: p
    }), (d, E) => (N(), le(c(x1), {
      ref_key: "popperRef",
      ref: a,
      role: d.role
    }, {
      default: ae(() => [
        $(G1, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: ae(() => [
            d.$slots.default ? he(d.$slots, "default", { key: 0 }) : te("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        $(tw, {
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
          default: ae(() => [
            he(d.$slots, "content", {}, () => [
              d.rawContent ? (N(), G("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, ["innerHTML"])) : (N(), G("span", { key: 1 }, B(d.content), 1))
            ]),
            d.showArrow ? (N(), le(c(Gy), {
              key: 0,
              "arrow-offset": d.arrowOffset
            }, null, 8, ["arrow-offset"])) : te("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var ow = /* @__PURE__ */ He(rw, [["__file", "tooltip.vue"]]);
const aw = sn(ow), sw = Ve({
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
}), lw = re({
  name: "ElBadge"
}), iw = /* @__PURE__ */ re({
  ...lw,
  props: sw,
  setup(e, { expose: t }) {
    const n = e, r = lt("badge"), o = I(() => n.isDot ? "" : Ne(n.value) && Ne(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = I(() => {
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
    }), (s, i) => (N(), G("div", {
      class: j(c(r).b())
    }, [
      he(s.$slots, "default"),
      $(jr, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: ae(() => [
          ht(w("sup", {
            class: j([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: bt(c(a))
          }, [
            he(s.$slots, "content", { value: c(o) }, () => [
              Wt(B(c(o)), 1)
            ])
          ], 6), [
            [zn, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var cw = /* @__PURE__ */ He(iw, [["__file", "badge.vue"]]);
const uw = sn(cw), fw = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ss = Ve({
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
}, pw = re({
  name: "ElTag"
}), mw = /* @__PURE__ */ re({
  ...pw,
  props: Ss,
  emits: dw,
  setup(e, { emit: t }) {
    const n = e, r = Oo(), o = lt("tag"), a = I(() => {
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
    return (u, f) => u.disableTransitions ? (N(), G("span", {
      key: 0,
      class: j(c(a)),
      style: bt({ backgroundColor: u.color }),
      onClick: i
    }, [
      w("span", {
        class: j(c(o).e("content"))
      }, [
        he(u.$slots, "default")
      ], 2),
      u.closable ? (N(), le(c(at), {
        key: 0,
        class: j(c(o).e("close")),
        onClick: Ye(s, ["stop"])
      }, {
        default: ae(() => [
          $(c(fa))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : te("v-if", !0)
    ], 6)) : (N(), le(jr, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: ae(() => [
        w("span", {
          class: j(c(a)),
          style: bt({ backgroundColor: u.color }),
          onClick: i
        }, [
          w("span", {
            class: j(c(o).e("content"))
          }, [
            he(u.$slots, "default")
          ], 2),
          u.closable ? (N(), le(c(at), {
            key: 0,
            class: j(c(o).e("close")),
            onClick: Ye(s, ["stop"])
          }, {
            default: ae(() => [
              $(c(fa))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : te("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var hw = /* @__PURE__ */ He(mw, [["__file", "tag.vue"]]);
const gw = sn(hw), Kn = /* @__PURE__ */ new Map();
if (st) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of Kn.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function wc(e, t) {
  let n = [];
  return mn(t.arg) ? n = t.arg : rn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, f = e.contains(s) || e.contains(i), p = e === s, m = n.length && n.some((g) => g?.contains(s)) || n.length && n.includes(i), v = a && (a.contains(s) || a.contains(i));
    l || u || f || p || m || v || t.value(r, o);
  };
}
const vw = {
  beforeMount(e, t) {
    Kn.has(e) || Kn.set(e, []), Kn.get(e).push({
      documentHandler: wc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Kn.has(e) || Kn.set(e, []);
    const n = Kn.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: wc(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    Kn.delete(e);
  }
}, bw = Ve({
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
re({
  name: "ElConfigProvider",
  props: bw,
  setup(e, { slots: t }) {
    be(() => e.message, (r) => {
      Object.assign(Qt, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = ef(e);
    return () => he(t, "default", { config: n?.value });
  }
});
const yw = 100, _w = 600, kc = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = yw, delay: o = _w } = Ze(n) ? {} : n;
    let a, s;
    const i = () => Ze(n) ? n() : n.handler(), l = () => {
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
}, ww = Ve({
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
    validator: (e) => e === null || Ne(e) || ["min", "max"].includes(e),
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
  [Bn]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Fn]: (e) => Ne(e) || Dn(e),
  [mt]: (e) => Ne(e) || Dn(e)
}, Tw = re({
  name: "ElInputNumber"
}), Ew = /* @__PURE__ */ re({
  ...Tw,
  props: ww,
  emits: kw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = ol(), a = lt("input-number"), s = V(), i = ur({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = Ra(), u = I(() => Ne(r.modelValue) && r.modelValue <= r.min), f = I(() => Ne(r.modelValue) && r.modelValue >= r.max), p = I(() => {
      const R = d(r.step);
      return hn(r.precision) ? Math.max(d(r.modelValue), R) : (R > r.precision, r.precision);
    }), m = I(() => r.controls && r.controlsPosition === "right"), v = Oo(), g = cl(), h = I(() => {
      if (i.userInput !== null)
        return i.userInput;
      let R = i.currentValue;
      if (Dn(R))
        return "";
      if (Ne(R)) {
        if (Number.isNaN(R))
          return "";
        hn(r.precision) || (R = R.toFixed(r.precision));
      }
      return R;
    }), A = (R, P) => {
      if (hn(P) && (P = p.value), P === 0)
        return Math.round(R);
      let z = String(R);
      const ie = z.indexOf(".");
      if (ie === -1 || !z.replace(".", "").split("")[ie + P])
        return R;
      const Z = z.length;
      return z.charAt(Z - 1) === "5" && (z = `${z.slice(0, Math.max(0, Z - 1))}6`), Number.parseFloat(Number(z).toFixed(P));
    }, d = (R) => {
      if (Dn(R))
        return 0;
      const P = R.toString(), z = P.indexOf(".");
      let ie = 0;
      return z !== -1 && (ie = P.length - z - 1), ie;
    }, E = (R, P = 1) => Ne(R) ? A(R + r.step * P) : i.currentValue, L = () => {
      if (r.readonly || g.value || f.value)
        return;
      const R = Number(h.value) || 0, P = E(R);
      C(P), n(Fn, i.currentValue), me();
    }, T = () => {
      if (r.readonly || g.value || u.value)
        return;
      const R = Number(h.value) || 0, P = E(R, -1);
      C(P), n(Fn, i.currentValue), me();
    }, y = (R, P) => {
      const { max: z, min: ie, step: J, precision: _e, stepStrictly: Z, valueOnClear: Ue } = r;
      z < ie && rl("InputNumber", "min should not be greater than max.");
      let Ce = Number(R);
      if (Dn(R) || Number.isNaN(Ce))
        return null;
      if (R === "") {
        if (Ue === null)
          return null;
        Ce = Et(Ue) ? { min: ie, max: z }[Ue] : Ue;
      }
      return Z && (Ce = A(Math.round(Ce / J) * J, _e), Ce !== R && P && n(mt, Ce)), hn(_e) || (Ce = A(Ce, _e)), (Ce > z || Ce < ie) && (Ce = Ce > z ? z : ie, P && n(mt, Ce)), Ce;
    }, C = (R, P = !0) => {
      var z;
      const ie = i.currentValue, J = y(R);
      if (!P) {
        n(mt, J);
        return;
      }
      ie === J && R || (i.userInput = null, n(mt, J), ie !== J && n(Bn, J, ie), r.validateEvent && ((z = l?.validate) == null || z.call(l, "change").catch((_e) => void 0)), i.currentValue = J);
    }, O = (R) => {
      i.userInput = R;
      const P = R === "" ? null : Number(R);
      n(Fn, P), C(P, !1);
    }, W = (R) => {
      const P = R !== "" ? Number(R) : "";
      (Ne(P) && !Number.isNaN(P) || R === "") && C(P), me(), i.userInput = null;
    }, U = () => {
      var R, P;
      (P = (R = s.value) == null ? void 0 : R.focus) == null || P.call(R);
    }, ne = () => {
      var R, P;
      (P = (R = s.value) == null ? void 0 : R.blur) == null || P.call(R);
    }, ue = (R) => {
      n("focus", R);
    }, ee = (R) => {
      var P, z;
      i.userInput = null, sf() && i.currentValue === null && ((P = s.value) != null && P.input) && (s.value.input.value = ""), n("blur", R), r.validateEvent && ((z = l?.validate) == null || z.call(l, "blur").catch((ie) => void 0));
    }, me = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, de = (R) => {
      document.activeElement === R.target && R.preventDefault();
    };
    return be(() => r.modelValue, (R, P) => {
      const z = y(R, !0);
      i.userInput === null && z !== P && (i.currentValue = z);
    }, { immediate: !0 }), ot(() => {
      var R;
      const { min: P, max: z, modelValue: ie } = r, J = (R = s.value) == null ? void 0 : R.input;
      if (J.setAttribute("role", "spinbutton"), Number.isFinite(z) ? J.setAttribute("aria-valuemax", String(z)) : J.removeAttribute("aria-valuemax"), Number.isFinite(P) ? J.setAttribute("aria-valuemin", String(P)) : J.removeAttribute("aria-valuemin"), J.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), J.setAttribute("aria-disabled", String(g.value)), !Ne(ie) && ie != null) {
        let _e = Number(ie);
        Number.isNaN(_e) && (_e = null), n(mt, _e);
      }
      J.addEventListener("wheel", de, { passive: !1 });
    }), Uc(() => {
      var R, P;
      const z = (R = s.value) == null ? void 0 : R.input;
      z?.setAttribute("aria-valuenow", `${(P = i.currentValue) != null ? P : ""}`);
    }), t({
      focus: U,
      blur: ne
    }), (R, P) => (N(), G("div", {
      class: j([
        c(a).b(),
        c(a).m(c(v)),
        c(a).is("disabled", c(g)),
        c(a).is("without-controls", !R.controls),
        c(a).is("controls-right", c(m))
      ]),
      onDragstart: Ye(() => {
      }, ["prevent"])
    }, [
      R.controls ? ht((N(), G("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: j([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: Gt(T, ["enter"])
      }, [
        he(R.$slots, "decrease-icon", {}, () => [
          $(c(at), null, {
            default: ae(() => [
              c(m) ? (N(), le(c(rf), { key: 0 })) : (N(), le(c(X0), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(kc), T]
      ]) : te("v-if", !0),
      R.controls ? ht((N(), G("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: j([c(a).e("increase"), c(a).is("disabled", c(f))]),
        onKeydown: Gt(L, ["enter"])
      }, [
        he(R.$slots, "increase-icon", {}, () => [
          $(c(at), null, {
            default: ae(() => [
              c(m) ? (N(), le(c(F0), { key: 0 })) : (N(), le(c(J0), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(kc), L]
      ]) : te("v-if", !0),
      $(c(Ey), {
        id: R.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: R.step,
        "model-value": c(h),
        placeholder: R.placeholder,
        readonly: R.readonly,
        disabled: c(g),
        size: c(v),
        max: R.max,
        min: R.min,
        name: R.name,
        "aria-label": R.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          Gt(Ye(L, ["prevent"]), ["up"]),
          Gt(Ye(T, ["prevent"]), ["down"])
        ],
        onBlur: ee,
        onFocus: ue,
        onInput: O,
        onChange: W
      }, cd({
        _: 2
      }, [
        R.$slots.prefix ? {
          name: "prefix",
          fn: ae(() => [
            he(R.$slots, "prefix")
          ])
        } : void 0,
        R.$slots.suffix ? {
          name: "suffix",
          fn: ae(() => [
            he(R.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Sw = /* @__PURE__ */ He(Ew, [["__file", "input-number.vue"]]);
const Aw = sn(Sw);
function Cw() {
  const e = Qn(), t = V(0), n = 11, r = I(() => ({
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
  const n = $e($a), r = $e($f, { disabled: !1 }), o = I(() => f(qn(n.props.modelValue), e.value)), a = I(() => {
    var v;
    if (n.props.multiple) {
      const g = qn((v = n.props.modelValue) != null ? v : []);
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = I(() => e.label || (Bt(e.value) ? "" : e.value)), i = I(() => e.value || e.label || ""), l = I(() => e.disabled || t.groupDisabled || a.value), u = It(), f = (v = [], g) => {
    if (Bt(e.value)) {
      const h = n.props.valueKey;
      return v && v.some((A) => ud(Xn(A, h)) === Xn(g, h));
    } else
      return v && v.includes(g);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, m = (v) => {
    const g = new RegExp(fw(v), "i");
    t.visible = g.test(s.value) || e.created;
  };
  return be(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), be(() => e.value, (v, g) => {
    const { remote: h, valueKey: A } = n.props;
    if ((h ? v !== g : !co(v, g)) && (n.onOptionDestroy(g, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !h) {
      if (A && Bt(v) && Bt(g) && v[A] === g[A])
        return;
      n.setSelected();
    }
  }), be(() => r.disabled, () => {
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
const Lw = re({
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
    const t = lt("select"), n = Ia(), r = I(() => [
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
    } = Ow(e, o), { visible: p, hover: m } = Is(o), v = It().proxy;
    l.onOptionCreate(v), Tn(() => {
      const h = v.value, { selected: A } = l.states, d = A.some((E) => E.value === v.value);
      tt(() => {
        l.states.cachedOptions.get(h) === v && !d && l.states.cachedOptions.delete(h);
      }), l.onOptionDestroy(h, v);
    });
    function g() {
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
      selectOptionClick: g,
      states: o
    };
  }
});
function Iw(e, t, n, r, o, a) {
  return ht((N(), G("li", {
    id: e.id,
    class: j(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: Ye(e.selectOptionClick, ["stop"])
  }, [
    he(e.$slots, "default", {}, () => [
      w("span", null, B(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [zn, e.visible]
  ]);
}
var El = /* @__PURE__ */ He(Lw, [["render", Iw], ["__file", "option.vue"]]);
const Rw = re({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = $e($a), t = lt("select"), n = I(() => e.props.popperClass), r = I(() => e.props.multiple), o = I(() => e.props.fitInputWidth), a = V("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return ot(() => {
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
  return N(), G("div", {
    class: j([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: bt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (N(), G("div", {
      key: 0,
      class: j(e.ns.be("dropdown", "header"))
    }, [
      he(e.$slots, "header")
    ], 2)) : te("v-if", !0),
    he(e.$slots, "default"),
    e.$slots.footer ? (N(), G("div", {
      key: 1,
      class: j(e.ns.be("dropdown", "footer"))
    }, [
      he(e.$slots, "footer")
    ], 2)) : te("v-if", !0)
  ], 6);
}
var Nw = /* @__PURE__ */ He(Rw, [["render", xw], ["__file", "select-dropdown.vue"]]);
const Pw = (e, t) => {
  const { t: n } = ol(), r = Ia(), o = lt("select"), a = lt("input"), s = ur({
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
  }), i = V(null), l = V(null), u = V(null), f = V(null), p = V(null), m = V(null), v = V(null), g = V(null), h = V(null), A = V(null), d = V(null), {
    isComposing: E,
    handleCompositionStart: L,
    handleCompositionUpdate: T,
    handleCompositionEnd: y
  } = df({
    afterComposition: (x) => Xe(x)
  }), { wrapperRef: C, isFocused: O, handleBlur: W } = ff(p, {
    beforeFocus() {
      return P.value;
    },
    afterFocus() {
      e.automaticDropdown && !U.value && (U.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(x) {
      var Y, ye;
      return ((Y = u.value) == null ? void 0 : Y.isFocusInsideContent(x)) || ((ye = f.value) == null ? void 0 : ye.isFocusInsideContent(x));
    },
    afterBlur() {
      U.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), U = V(!1), ne = V(), { form: ue, formItem: ee } = Ra(), { inputId: me } = il(e, {
    formItemContext: ee
  }), { valueOnClear: de, isEmptyValue: R } = L0(e), P = I(() => e.disabled || ue?.disabled), z = I(() => mn(e.modelValue) ? e.modelValue.length > 0 : !R(e.modelValue)), ie = I(() => {
    var x;
    return (x = ue?.statusIcon) != null ? x : !1;
  }), J = I(() => e.clearable && !P.value && s.inputHovering && z.value), _e = I(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Z = I(() => o.is("reverse", _e.value && U.value)), Ue = I(() => ee?.validateState || ""), Ce = I(() => af[Ue.value]), ke = I(() => e.remote ? 300 : 0), We = I(() => e.remote && !s.inputValue && s.options.size === 0), Te = I(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && Ge.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), Ge = I(() => ce.value.filter((x) => x.visible).length), ce = I(() => {
    const x = Array.from(s.options.values()), Y = [];
    return s.optionValues.forEach((ye) => {
      const Qe = x.findIndex((ft) => ft.value === ye);
      Qe > -1 && Y.push(x[Qe]);
    }), Y.length >= x.length ? Y : x;
  }), et = I(() => Array.from(s.cachedOptions.values())), ct = I(() => {
    const x = ce.value.filter((Y) => !Y.created).some((Y) => Y.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !x;
  }), je = () => {
    e.filterable && Ze(e.filterMethod) || e.filterable && e.remote && Ze(e.remoteMethod) || ce.value.forEach((x) => {
      var Y;
      (Y = x.updateOption) == null || Y.call(x, s.inputValue);
    });
  }, gt = Oo(), ut = I(() => ["small"].includes(gt.value) ? "small" : "default"), H = I({
    get() {
      return U.value && !We.value;
    },
    set(x) {
      U.value = x;
    }
  }), Q = I(() => {
    if (e.multiple && !hn(e.modelValue))
      return qn(e.modelValue).length === 0 && !s.inputValue;
    const x = mn(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || hn(x) ? !s.inputValue : !0;
  }), q = I(() => {
    var x;
    const Y = (x = e.placeholder) != null ? x : n("el.select.placeholder");
    return e.multiple || !z.value ? Y : s.selectedLabel;
  }), ge = I(() => ws ? null : "mouseenter");
  be(() => e.modelValue, (x, Y) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", _("")), D(), !co(x, Y) && e.validateEvent && ee?.validate("change").catch((ye) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), be(() => U.value, (x) => {
    x ? _(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", x);
  }), be(() => s.options.entries(), () => {
    st && (D(), e.defaultFirstOption && (e.filterable || e.remote) && Ge.value && S());
  }, {
    flush: "post"
  }), be([() => s.hoveringIndex, ce], ([x]) => {
    Ne(x) && x > -1 ? ne.value = ce.value[x] || {} : ne.value = {}, ce.value.forEach((Y) => {
      Y.hover = ne.value === Y;
    });
  }), Vc(() => {
    s.isBeforeHide || je();
  });
  const _ = (x) => {
    s.previousQuery === x || E.value || (s.previousQuery = x, e.filterable && Ze(e.filterMethod) ? e.filterMethod(x) : e.filterable && e.remote && Ze(e.remoteMethod) && e.remoteMethod(x), e.defaultFirstOption && (e.filterable || e.remote) && Ge.value ? tt(S) : tt(Ee));
  }, S = () => {
    const x = ce.value.filter((ft) => ft.visible && !ft.disabled && !ft.states.groupDisabled), Y = x.find((ft) => ft.created), ye = x[0], Qe = ce.value.map((ft) => ft.value);
    s.hoveringIndex = ar(Qe, Y || ye);
  }, D = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const Y = mn(e.modelValue) ? e.modelValue[0] : e.modelValue, ye = K(Y);
      s.selectedLabel = ye.currentLabel, s.selected = [ye];
      return;
    }
    const x = [];
    hn(e.modelValue) || qn(e.modelValue).forEach((Y) => {
      x.push(K(Y));
    }), s.selected = x;
  }, K = (x) => {
    let Y;
    const ye = oh(x);
    for (let jt = s.cachedOptions.size - 1; jt >= 0; jt--) {
      const zt = et.value[jt];
      if (ye ? Xn(zt.value, e.valueKey) === Xn(x, e.valueKey) : zt.value === x) {
        Y = {
          value: x,
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
    const Qe = ye ? x.label : x ?? "";
    return {
      value: x,
      currentLabel: Qe
    };
  }, Ee = () => {
    s.hoveringIndex = ce.value.findIndex((x) => s.selected.some((Y) => Fe(Y) === Fe(x)));
  }, fe = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, k = () => {
    s.collapseItemWidth = A.value.getBoundingClientRect().width;
  }, M = () => {
    var x, Y;
    (Y = (x = u.value) == null ? void 0 : x.updatePopper) == null || Y.call(x);
  }, ve = () => {
    var x, Y;
    (Y = (x = f.value) == null ? void 0 : x.updatePopper) == null || Y.call(x);
  }, Ae = () => {
    s.inputValue.length > 0 && !U.value && (U.value = !0), _(s.inputValue);
  }, Xe = (x) => {
    if (s.inputValue = x.target.value, e.remote)
      Nt();
    else
      return Ae();
  }, Nt = Ub(() => {
    Ae();
  }, ke.value), Ke = (x) => {
    co(e.modelValue, x) || t(Bn, x);
  }, or = (x) => jb(x, (Y) => {
    const ye = s.cachedOptions.get(Y);
    return ye && !ye.disabled && !ye.states.groupDisabled;
  }), Wr = (x) => {
    if (e.multiple && x.code !== bn.delete && x.target.value.length <= 0) {
      const Y = qn(e.modelValue).slice(), ye = or(Y);
      if (ye < 0)
        return;
      const Qe = Y[ye];
      Y.splice(ye, 1), t(mt, Y), Ke(Y), t("remove-tag", Qe);
    }
  }, Ro = (x, Y) => {
    const ye = s.selected.indexOf(Y);
    if (ye > -1 && !P.value) {
      const Qe = qn(e.modelValue).slice();
      Qe.splice(ye, 1), t(mt, Qe), Ke(Qe), t("remove-tag", Y.value);
    }
    x.stopPropagation(), _r();
  }, yr = (x) => {
    x.stopPropagation();
    const Y = e.multiple ? [] : de.value;
    if (e.multiple)
      for (const ye of s.selected)
        ye.isDisabled && Y.push(ye.value);
    t(mt, Y), Ke(Y), s.hoveringIndex = -1, U.value = !1, t("clear"), _r();
  }, Gr = (x) => {
    var Y;
    if (e.multiple) {
      const ye = qn((Y = e.modelValue) != null ? Y : []).slice(), Qe = ar(ye, x);
      Qe > -1 ? ye.splice(Qe, 1) : (e.multipleLimit <= 0 || ye.length < e.multipleLimit) && ye.push(x.value), t(mt, ye), Ke(ye), x.created && _(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(mt, x.value), Ke(x.value), U.value = !1;
    _r(), !U.value && tt(() => {
      Sn(x);
    });
  }, ar = (x = [], Y) => hn(Y) ? -1 : Bt(Y.value) ? x.findIndex((ye) => co(Xn(ye, e.valueKey), Fe(Y))) : x.indexOf(Y.value), Sn = (x) => {
    var Y, ye, Qe, ft, jt;
    const zt = mn(x) ? x[0] : x;
    let Pt = null;
    if (zt?.value) {
      const Gn = ce.value.filter((Mo) => Mo.value === zt.value);
      Gn.length > 0 && (Pt = Gn[0].$el);
    }
    if (u.value && Pt) {
      const Gn = (ft = (Qe = (ye = (Y = u.value) == null ? void 0 : Y.popperRef) == null ? void 0 : ye.contentRef) == null ? void 0 : Qe.querySelector) == null ? void 0 : ft.call(Qe, `.${o.be("dropdown", "wrap")}`);
      Gn && R0(Gn, Pt);
    }
    (jt = d.value) == null || jt.handleScroll();
  }, Ut = (x) => {
    s.options.set(x.value, x), s.cachedOptions.set(x.value, x);
  }, Hn = (x, Y) => {
    s.options.get(x) === Y && s.options.delete(x);
  }, Kr = I(() => {
    var x, Y;
    return (Y = (x = u.value) == null ? void 0 : x.popperRef) == null ? void 0 : Y.contentRef;
  }), Yr = () => {
    s.isBeforeHide = !1, tt(() => {
      var x;
      (x = d.value) == null || x.update(), Sn(s.selected);
    });
  }, _r = () => {
    var x;
    (x = p.value) == null || x.focus();
  }, qr = () => {
    var x;
    if (U.value) {
      U.value = !1, tt(() => {
        var Y;
        return (Y = p.value) == null ? void 0 : Y.blur();
      });
      return;
    }
    (x = p.value) == null || x.blur();
  }, Zr = (x) => {
    yr(x);
  }, Ma = (x) => {
    if (U.value = !1, O.value) {
      const Y = new FocusEvent("focus", x);
      tt(() => W(Y));
    }
  }, sr = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : U.value = !1;
  }, xo = () => {
    P.value || (ws && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : U.value = !U.value);
  }, Da = () => {
    if (!U.value)
      xo();
    else {
      const x = ce.value[s.hoveringIndex];
      x && !x.isDisabled && Gr(x);
    }
  }, Fe = (x) => Bt(x.value) ? Xn(x.value, e.valueKey) : x.value, Wn = I(() => ce.value.filter((x) => x.visible).every((x) => x.isDisabled)), Fa = I(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), No = I(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), wr = (x) => {
    if (!U.value) {
      U.value = !0;
      return;
    }
    if (!(s.options.size === 0 || Ge.value === 0 || E.value) && !Wn.value) {
      x === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : x === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const Y = ce.value[s.hoveringIndex];
      (Y.isDisabled || !Y.visible) && wr(x), tt(() => Sn(ne.value));
    }
  }, Po = () => {
    if (!l.value)
      return 0;
    const x = window.getComputedStyle(l.value);
    return Number.parseFloat(x.gap || "6px");
  }, $o = I(() => {
    const x = Po();
    return { maxWidth: `${A.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - x : s.selectionWidth}px` };
  }), za = I(() => ({ maxWidth: `${s.selectionWidth}px` })), Ft = (x) => {
    t("popup-scroll", x);
  };
  return pn(l, fe), pn(g, M), pn(C, M), pn(h, ve), pn(A, k), ot(() => {
    D();
  }), {
    inputId: me,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: O,
    expanded: U,
    optionsArray: ce,
    hoverOption: ne,
    selectSize: gt,
    filteredOptionsCount: Ge,
    updateTooltip: M,
    updateTagTooltip: ve,
    debouncedOnInputChange: Nt,
    onInput: Xe,
    deletePrevTag: Wr,
    deleteTag: Ro,
    deleteSelected: yr,
    handleOptionSelect: Gr,
    scrollToOption: Sn,
    hasModelValue: z,
    shouldShowPlaceholder: Q,
    currentPlaceholder: q,
    mouseEnterEventName: ge,
    needStatusIcon: ie,
    showClose: J,
    iconComponent: _e,
    iconReverse: Z,
    validateState: Ue,
    validateIcon: Ce,
    showNewOption: ct,
    updateOptions: je,
    collapseTagSize: ut,
    setSelected: D,
    selectDisabled: P,
    emptyText: Te,
    handleCompositionStart: L,
    handleCompositionUpdate: T,
    handleCompositionEnd: y,
    onOptionCreate: Ut,
    onOptionDestroy: Hn,
    handleMenuEnter: Yr,
    focus: _r,
    blur: qr,
    handleClearClick: Zr,
    handleClickOutside: Ma,
    handleEsc: sr,
    toggleMenu: xo,
    selectOption: Da,
    getValueKey: Fe,
    navigateOptions: wr,
    dropdownMenuVisible: H,
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
    wrapperRef: C,
    selectionRef: l,
    scrollbarRef: d,
    menuRef: g,
    tagMenuRef: h,
    collapseItemRef: A
  };
};
var $w = re({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = $e($a);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        mn(u) && u.forEach((f) => {
          var p, m, v, g;
          const h = (p = f?.type || {}) == null ? void 0 : p.name;
          h === "ElOptionGroup" ? l(!Et(f.children) && !mn(f.children) && Ze((m = f.children) == null ? void 0 : m.default) ? (v = f.children) == null ? void 0 : v.default() : f.children) : h === "ElOption" ? i.push((g = f.props) == null ? void 0 : g.value) : mn(f.children) && l(f.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), co(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const Mw = Ve({
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
}), Tc = "ElSelect", Dw = re({
  name: Tc,
  componentName: Tc,
  components: {
    ElSelectMenu: Nw,
    ElOption: El,
    ElOptions: $w,
    ElTag: gw,
    ElScrollbar: zy,
    ElTooltip: aw,
    ElIcon: at
  },
  directives: { ClickOutside: vw },
  props: Mw,
  emits: [
    mt,
    Bn,
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
  const s = lr("el-tag"), i = lr("el-tooltip"), l = lr("el-icon"), u = lr("el-option"), f = lr("el-options"), p = lr("el-scrollbar"), m = lr("el-select-menu"), v = fd("click-outside");
  return ht((N(), G("div", {
    ref: "selectRef",
    class: j([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [dd(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
    onMouseleave: (g) => e.states.inputHovering = !1
  }, [
    $(i, {
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
      onHide: (g) => e.states.isBeforeHide = !1
    }, {
      default: ae(() => {
        var g;
        return [
          w("div", {
            ref: "wrapperRef",
            class: j([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: Ye(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (N(), G("div", {
              key: 0,
              ref: "prefixRef",
              class: j(e.nsSelect.e("prefix"))
            }, [
              he(e.$slots, "prefix")
            ], 2)) : te("v-if", !0),
            w("div", {
              ref: "selectionRef",
              class: j([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? he(e.$slots, "tag", { key: 0 }, () => [
                (N(!0), G(Tt, null, xr(e.showTagList, (h) => (N(), G("div", {
                  key: e.getValueKey(h),
                  class: j(e.nsSelect.e("selected-item"))
                }, [
                  $(s, {
                    closable: !e.selectDisabled && !h.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: bt(e.tagStyle),
                    onClose: (A) => e.deleteTag(A, h)
                  }, {
                    default: ae(() => [
                      w("span", {
                        class: j(e.nsSelect.e("tags-text"))
                      }, [
                        he(e.$slots, "label", {
                          label: h.currentLabel,
                          value: h.value
                        }, () => [
                          Wt(B(h.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (N(), le(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: ae(() => [
                    w("div", {
                      ref: "collapseItemRef",
                      class: j(e.nsSelect.e("selected-item"))
                    }, [
                      $(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: bt(e.collapseTagStyle)
                      }, {
                        default: ae(() => [
                          w("span", {
                            class: j(e.nsSelect.e("tags-text"))
                          }, " + " + B(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: ae(() => [
                    w("div", {
                      ref: "tagMenuRef",
                      class: j(e.nsSelect.e("selection"))
                    }, [
                      (N(!0), G(Tt, null, xr(e.collapseTagList, (h) => (N(), G("div", {
                        key: e.getValueKey(h),
                        class: j(e.nsSelect.e("selected-item"))
                      }, [
                        $(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !h.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (A) => e.deleteTag(A, h)
                        }, {
                          default: ae(() => [
                            w("span", {
                              class: j(e.nsSelect.e("tags-text"))
                            }, [
                              he(e.$slots, "label", {
                                label: h.currentLabel,
                                value: h.value
                              }, () => [
                                Wt(B(h.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : te("v-if", !0)
              ]) : te("v-if", !0),
              w("div", {
                class: j([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                ht(w("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (h) => e.states.inputValue = h,
                  type: "text",
                  name: e.name,
                  class: j([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: bt(e.inputStyle),
                  tabindex: e.tabindex,
                  role: "combobox",
                  readonly: !e.filterable,
                  spellcheck: "false",
                  "aria-activedescendant": ((g = e.hoverOption) == null ? void 0 : g.id) || "",
                  "aria-controls": e.contentId,
                  "aria-expanded": e.dropdownMenuVisible,
                  "aria-label": e.ariaLabel,
                  "aria-autocomplete": "none",
                  "aria-haspopup": "listbox",
                  onKeydown: [
                    Gt(Ye((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Gt(Ye((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    Gt(Ye(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    Gt(Ye(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    Gt(Ye(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: Ye(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [mo, e.states.inputValue]
                ]),
                e.filterable ? (N(), G("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: j(e.nsSelect.e("input-calculator")),
                  textContent: B(e.states.inputValue)
                }, null, 10, ["textContent"])) : te("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (N(), G("div", {
                key: 1,
                class: j([
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
                  w("span", null, B(e.currentPlaceholder), 1)
                ]) : (N(), G("span", { key: 1 }, B(e.currentPlaceholder), 1))
              ], 2)) : te("v-if", !0)
            ], 2),
            w("div", {
              ref: "suffixRef",
              class: j(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (N(), le(l, {
                key: 0,
                class: j([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: ae(() => [
                  (N(), le(Ot(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : te("v-if", !0),
              e.showClose && e.clearIcon ? (N(), le(l, {
                key: 1,
                class: j([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: ae(() => [
                  (N(), le(Ot(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : te("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (N(), le(l, {
                key: 2,
                class: j([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: ae(() => [
                  (N(), le(Ot(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : te("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: ae(() => [
        $(m, { ref: "menuRef" }, {
          default: ae(() => [
            e.$slots.header ? (N(), G("div", {
              key: 0,
              class: j(e.nsSelect.be("dropdown", "header")),
              onClick: Ye(() => {
              }, ["stop"])
            }, [
              he(e.$slots, "header")
            ], 10, ["onClick"])) : te("v-if", !0),
            ht($(p, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: j([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: ae(() => [
                e.showNewOption ? (N(), le(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : te("v-if", !0),
                $(f, null, {
                  default: ae(() => [
                    he(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [zn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (N(), G("div", {
              key: 1,
              class: j(e.nsSelect.be("dropdown", "loading"))
            }, [
              he(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (N(), G("div", {
              key: 2,
              class: j(e.nsSelect.be("dropdown", "empty"))
            }, [
              he(e.$slots, "empty", {}, () => [
                w("span", null, B(e.emptyText), 1)
              ])
            ], 2)) : te("v-if", !0),
            e.$slots.footer ? (N(), G("div", {
              key: 3,
              class: j(e.nsSelect.be("dropdown", "footer")),
              onClick: Ye(() => {
              }, ["stop"])
            }, [
              he(e.$slots, "footer")
            ], 10, ["onClick"])) : te("v-if", !0)
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
const Bw = re({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = lt("select"), n = V(null), r = It(), o = V([]);
    _n($f, ur({
      ...Is(e)
    }));
    const a = I(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var f, p;
      return ((f = u.type) == null ? void 0 : f.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, i = (u) => {
      const f = qn(u), p = [];
      return f.forEach((m) => {
        var v, g;
        s(m) ? p.push(m.component.proxy) : (v = m.children) != null && v.length ? p.push(...i(m.children)) : (g = m.component) != null && g.subTree && p.push(...i(m.component.subTree));
      }), p;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return ot(() => {
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
  return ht((N(), G("ul", {
    ref: "groupRef",
    class: j(e.ns.be("group", "wrap"))
  }, [
    w("li", {
      class: j(e.ns.be("group", "title"))
    }, B(e.label), 3),
    w("li", null, [
      w("ul", {
        class: j(e.ns.b("group"))
      }, [
        he(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [zn, e.visible]
  ]);
}
var Mf = /* @__PURE__ */ He(Bw, [["render", Vw], ["__file", "option-group.vue"]]);
const Uw = sn(zw, {
  Option: El,
  OptionGroup: Mf
}), jw = nf(El);
nf(Mf);
const Hw = (e) => ["", ...al].includes(e), Ww = Ve({
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
  [mt]: (e) => Jn(e) || Et(e) || Ne(e),
  [Bn]: (e) => Jn(e) || Et(e) || Ne(e),
  [Fn]: (e) => Jn(e) || Et(e) || Ne(e)
}, Df = "ElSwitch", Kw = re({
  name: Df
}), Yw = /* @__PURE__ */ re({
  ...Kw,
  props: Ww,
  emits: Gw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = Ra(), a = Oo(), s = lt("switch"), { inputId: i } = il(r, {
      formItemContext: o
    }), l = cl(I(() => r.loading)), u = V(r.modelValue !== !1), f = V(), p = V(), m = I(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", l.value),
      s.is("checked", d.value)
    ]), v = I(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !d.value)
    ]), g = I(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", d.value)
    ]), h = I(() => ({
      width: Mr(r.width)
    }));
    be(() => r.modelValue, () => {
      u.value = !0;
    });
    const A = I(() => u.value ? r.modelValue : !1), d = I(() => A.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(A.value) || (n(mt, r.inactiveValue), n(Bn, r.inactiveValue), n(Fn, r.inactiveValue)), be(d, (y) => {
      var C;
      f.value.checked = y, r.validateEvent && ((C = o?.validate) == null || C.call(o, "change").catch((O) => void 0));
    });
    const E = () => {
      const y = d.value ? r.inactiveValue : r.activeValue;
      n(mt, y), n(Bn, y), n(Fn, y), tt(() => {
        f.value.checked = d.value;
      });
    }, L = () => {
      if (l.value)
        return;
      const { beforeChange: y } = r;
      if (!y) {
        E();
        return;
      }
      const C = y();
      [
        di(C),
        Jn(C)
      ].includes(!0) || rl(Df, "beforeChange must return type `Promise<boolean>` or `boolean`"), di(C) ? C.then((W) => {
        W && E();
      }).catch((W) => {
      }) : C && E();
    }, T = () => {
      var y, C;
      (C = (y = f.value) == null ? void 0 : y.focus) == null || C.call(y);
    };
    return ot(() => {
      f.value.checked = d.value;
    }), t({
      focus: T,
      checked: d
    }), (y, C) => (N(), G("div", {
      class: j(c(m)),
      onClick: Ye(L, ["prevent"])
    }, [
      w("input", {
        id: c(i),
        ref_key: "input",
        ref: f,
        class: j(c(s).e("input")),
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
        onChange: E,
        onKeydown: Gt(L, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !y.inlinePrompt && (y.inactiveIcon || y.inactiveText) ? (N(), G("span", {
        key: 0,
        class: j(c(v))
      }, [
        y.inactiveIcon ? (N(), le(c(at), { key: 0 }, {
          default: ae(() => [
            (N(), le(Ot(y.inactiveIcon)))
          ]),
          _: 1
        })) : te("v-if", !0),
        !y.inactiveIcon && y.inactiveText ? (N(), G("span", {
          key: 1,
          "aria-hidden": c(d)
        }, B(y.inactiveText), 9, ["aria-hidden"])) : te("v-if", !0)
      ], 2)) : te("v-if", !0),
      w("span", {
        ref_key: "core",
        ref: p,
        class: j(c(s).e("core")),
        style: bt(c(h))
      }, [
        y.inlinePrompt ? (N(), G("div", {
          key: 0,
          class: j(c(s).e("inner"))
        }, [
          y.activeIcon || y.inactiveIcon ? (N(), le(c(at), {
            key: 0,
            class: j(c(s).is("icon"))
          }, {
            default: ae(() => [
              (N(), le(Ot(c(d) ? y.activeIcon : y.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : y.activeText || y.inactiveText ? (N(), G("span", {
            key: 1,
            class: j(c(s).is("text")),
            "aria-hidden": !c(d)
          }, B(c(d) ? y.activeText : y.inactiveText), 11, ["aria-hidden"])) : te("v-if", !0)
        ], 2)) : te("v-if", !0),
        w("div", {
          class: j(c(s).e("action"))
        }, [
          y.loading ? (N(), le(c(at), {
            key: 0,
            class: j(c(s).is("loading"))
          }, {
            default: ae(() => [
              $(c(of))
            ]),
            _: 1
          }, 8, ["class"])) : c(d) ? he(y.$slots, "active-action", { key: 1 }, () => [
            y.activeActionIcon ? (N(), le(c(at), { key: 0 }, {
              default: ae(() => [
                (N(), le(Ot(y.activeActionIcon)))
              ]),
              _: 1
            })) : te("v-if", !0)
          ]) : c(d) ? te("v-if", !0) : he(y.$slots, "inactive-action", { key: 2 }, () => [
            y.inactiveActionIcon ? (N(), le(c(at), { key: 0 }, {
              default: ae(() => [
                (N(), le(Ot(y.inactiveActionIcon)))
              ]),
              _: 1
            })) : te("v-if", !0)
          ])
        ], 2)
      ], 6),
      !y.inlinePrompt && (y.activeIcon || y.activeText) ? (N(), G("span", {
        key: 1,
        class: j(c(g))
      }, [
        y.activeIcon ? (N(), le(c(at), { key: 0 }, {
          default: ae(() => [
            (N(), le(Ot(y.activeIcon)))
          ]),
          _: 1
        })) : te("v-if", !0),
        !y.activeIcon && y.activeText ? (N(), G("span", {
          key: 1,
          "aria-hidden": !c(d)
        }, B(y.activeText), 9, ["aria-hidden"])) : te("v-if", !0)
      ], 2)) : te("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var qw = /* @__PURE__ */ He(Yw, [["__file", "switch.vue"]]);
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
  appendTo: st ? document.body : void 0
}), Xw = Ve({
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
}, tk = (e, t) => nn.findIndex((r) => r.id === e) > 0 ? 16 : t, nk = re({
  name: "ElMessage"
}), rk = /* @__PURE__ */ re({
  ...nk,
  props: Xw,
  emits: Qw,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = ly, { ns: o, zIndex: a } = Ju("message"), { currentZIndex: s, nextZIndex: i } = a, l = V(), u = V(!1), f = V(0);
    let p;
    const m = I(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), v = I(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && da[O] };
    }), g = I(() => n.icon || da[n.type] || ""), h = I(() => ek(n.id)), A = I(() => tk(n.id, n.offset) + h.value), d = I(() => f.value + A.value), E = I(() => ({
      top: `${A.value}px`,
      zIndex: s.value
    }));
    function L() {
      n.duration !== 0 && ({ stop: p } = Uu(() => {
        y();
      }, n.duration));
    }
    function T() {
      p?.();
    }
    function y() {
      u.value = !1;
    }
    function C({ code: O }) {
      O === bn.esc && y();
    }
    return ot(() => {
      L(), i(), u.value = !0;
    }), be(() => n.repeatNum, () => {
      T(), L();
    }), on(document, "keydown", C), pn(l, () => {
      f.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: d,
      close: y
    }), (O, W) => (N(), le(jr, {
      name: c(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (U) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: ae(() => [
        ht(w("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: l,
          class: j([
            c(o).b(),
            { [c(o).m(O.type)]: O.type },
            c(o).is("center", O.center),
            c(o).is("closable", O.showClose),
            c(o).is("plain", O.plain),
            O.customClass
          ]),
          style: bt(c(E)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: L
        }, [
          O.repeatNum > 1 ? (N(), le(c(uw), {
            key: 0,
            value: O.repeatNum,
            type: c(m),
            class: j(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : te("v-if", !0),
          c(g) ? (N(), le(c(at), {
            key: 1,
            class: j([c(o).e("icon"), c(v)])
          }, {
            default: ae(() => [
              (N(), le(Ot(c(g))))
            ]),
            _: 1
          }, 8, ["class"])) : te("v-if", !0),
          he(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (N(), G(Tt, { key: 1 }, [
              te(" Caution here, message could've been compromised, never use user's input as message "),
              w("p", {
                class: j(c(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (N(), G("p", {
              key: 0,
              class: j(c(o).e("content"))
            }, B(O.message), 3))
          ]),
          O.showClose ? (N(), le(c(at), {
            key: 2,
            class: j(c(o).e("closeBtn")),
            onClick: Ye(y, ["stop"])
          }, {
            default: ae(() => [
              $(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : te("v-if", !0)
        ], 46, ["id"]), [
          [zn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var ok = /* @__PURE__ */ He(rk, [["__file", "message.vue"]]);
let ak = 1;
const zf = (e) => {
  const t = !e || Et(e) || ho(e) || Ze(e) ? { message: e } : e, n = {
    ..._t,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Et(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    rn(r) || (r = document.body), n.appendTo = r;
  }
  return Jn(Qt.grouping) && !n.grouping && (n.grouping = Qt.grouping), Ne(Qt.duration) && n.duration === 3e3 && (n.duration = Qt.duration), Ne(Qt.offset) && n.offset === 16 && (n.offset = Qt.offset), Jn(Qt.showClose) && !n.showClose && (n.showClose = Qt.showClose), n;
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
  }, i = $(ok, s, Ze(s.message) || ho(s.message) ? {
    default: Ze(s.message) ? s.message : () => s.message
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
  if (!st)
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
  if (Ne(Qt.max) && nn.length >= Qt.max)
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
], uk = Ve({
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
}, dk = re({
  name: "ElNotification"
}), pk = /* @__PURE__ */ re({
  ...dk,
  props: uk,
  emits: fk,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = Ju("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = sy, l = V(!1);
    let u;
    const f = I(() => {
      const L = n.type;
      return L && da[n.type] ? r.m(L) : "";
    }), p = I(() => n.type && da[n.type] || n.icon), m = I(() => n.position.endsWith("right") ? "right" : "left"), v = I(() => n.position.startsWith("top") ? "top" : "bottom"), g = I(() => {
      var L;
      return {
        [v.value]: `${n.offset}px`,
        zIndex: (L = n.zIndex) != null ? L : s.value
      };
    });
    function h() {
      n.duration > 0 && ({ stop: u } = Uu(() => {
        l.value && d();
      }, n.duration));
    }
    function A() {
      u?.();
    }
    function d() {
      l.value = !1;
    }
    function E({ code: L }) {
      L === bn.delete || L === bn.backspace ? A() : L === bn.esc ? l.value && d() : h();
    }
    return ot(() => {
      h(), a(), l.value = !0;
    }), on(document, "keydown", E), t({
      visible: l,
      close: d
    }), (L, T) => (N(), le(jr, {
      name: c(r).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (y) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: ae(() => [
        ht(w("div", {
          id: L.id,
          class: j([c(r).b(), L.customClass, c(m)]),
          style: bt(c(g)),
          role: "alert",
          onMouseenter: A,
          onMouseleave: h,
          onClick: L.onClick
        }, [
          c(p) ? (N(), le(c(at), {
            key: 0,
            class: j([c(r).e("icon"), c(f)])
          }, {
            default: ae(() => [
              (N(), le(Ot(c(p))))
            ]),
            _: 1
          }, 8, ["class"])) : te("v-if", !0),
          w("div", {
            class: j(c(r).e("group"))
          }, [
            w("h2", {
              class: j(c(r).e("title")),
              textContent: B(L.title)
            }, null, 10, ["textContent"]),
            ht(w("div", {
              class: j(c(r).e("content")),
              style: bt(L.title ? void 0 : { margin: 0 })
            }, [
              he(L.$slots, "default", {}, () => [
                L.dangerouslyUseHTMLString ? (N(), G(Tt, { key: 1 }, [
                  te(" Caution here, message could've been compromised, never use user's input as message "),
                  w("p", { innerHTML: L.message }, null, 8, ["innerHTML"])
                ], 2112)) : (N(), G("p", { key: 0 }, B(L.message), 1))
              ])
            ], 6), [
              [zn, L.message]
            ]),
            L.showClose ? (N(), le(c(at), {
              key: 0,
              class: j(c(r).e("closeBtn")),
              onClick: Ye(d, ["stop"])
            }, {
              default: ae(() => [
                $(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : te("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [zn, l.value]
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
const Ur = function(e = {}, t) {
  if (!st)
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
  const l = document.createElement("div"), u = $(mk, s, Ze(s.message) ? s.message : ho(s.message) ? () => s.message : null);
  return u.appContext = hn(t) ? Ur._context : t, u.props.onDestroy = () => {
    ta(null, l);
  }, ta(u, l), ha[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Bf.forEach((e) => {
  Ur[e] = (t = {}, n) => ((Et(t) || ho(t)) && (t = {
    message: t
  }), Ur({ ...t, type: e }, n));
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
Ur.closeAll = vk;
Ur._context = null;
const bk = tf(Ur, "$notify"), Ct = {
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
), Uf = (e) => {
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
    data: Uf(n)
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
    data: n === void 0 ? null : Uf(n)
  }).catch(() => {
  });
}, Zn = {
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
async function jf() {
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
  return Fk(e) || zk(e, t) || Uk(e, t) || Bk();
}
function Uk(e, t) {
  if (e) {
    if (typeof e == "string") return Sc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Sc(e, t) : void 0;
  }
}
const Wf = Object.entries, Ac = Object.setPrototypeOf, jk = Object.isFrozen, Hk = Object.getPrototypeOf, Wk = Object.getOwnPropertyDescriptor;
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
const Sr = it(Array.prototype.forEach), Gk = it(Array.prototype.lastIndexOf), Cc = it(Array.prototype.pop), Ar = it(Array.prototype.push), Kk = it(Array.prototype.splice), At = Array.isArray, so = it(String.prototype.toLowerCase), Qa = it(String.prototype.toString), Oc = it(String.prototype.match), Cr = it(String.prototype.replace), Lc = it(String.prototype.indexOf), Yk = it(String.prototype.trim), qk = it(Number.prototype.toString), Zk = it(Boolean.prototype.toString), Ic = typeof BigInt > "u" ? null : it(BigInt.prototype.toString), Rc = typeof Symbol > "u" ? null : it(Symbol.prototype.toString), Je = it(Object.prototype.hasOwnProperty), ro = it(Object.prototype.toString), vt = it(RegExp.prototype.test), oo = Xk(TypeError);
function it(e) {
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
      a !== o && (jk(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function Qk(e) {
  for (let t = 0; t < e.length; t++)
    Je(e, t) || (e[t] = null);
  return e;
}
function wt(e) {
  const t = Ir(null);
  for (const r of Wf(e)) {
    var n = Vk(r, 2);
    const o = n[0], a = n[1];
    Je(e, o) && (At(a) ? t[o] = Qk(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = wt(a) : t[o] = a);
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
        return it(r.get);
      if (typeof r.value == "function")
        return it(r.value);
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
    return vt(e, ""), !0;
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
  const t = (se) => Kf(se);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== fn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, p = e.trustedTypes, m = i.prototype, v = dn(m, "cloneNode"), g = dn(m, "remove"), h = dn(m, "nextSibling"), A = dn(m, "childNodes"), d = dn(m, "parentNode"), E = dn(m, "shadowRoot"), L = dn(m, "attributes"), T = s && s.prototype ? dn(s.prototype, "nodeType") : null, y = s && s.prototype ? dn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const se = n.createElement("template");
    se.content && se.content.ownerDocument && (n = se.content.ownerDocument);
  }
  let C, O = "";
  const W = n, U = W.implementation, ne = W.createNodeIterator, ue = W.createDocumentFragment, ee = W.getElementsByTagName, me = r.importNode;
  let de = Dc();
  t.isSupported = typeof Wf == "function" && typeof d == "function" && U && U.createHTMLDocument !== void 0;
  const R = rT, P = oT, z = aT, ie = sT, J = lT, _e = iT, Z = cT, Ue = fT;
  let Ce = Mc, ke = null;
  const We = we({}, [...xc, ...Ja, ...es, ...ts, ...Nc]);
  let Te = null;
  const Ge = we({}, [...Pc, ...ns, ...$c, ...Yo]);
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
  })), et = null, ct = null;
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
  let gt = !0, ut = !0, H = !1, Q = !0, q = !1, ge = !0, _ = !1, S = !1, D = !1, K = !1, Ee = !1, fe = !1, k = !0, M = !1;
  const ve = "user-content-";
  let Ae = !0, Xe = !1, Nt = {}, Ke = null;
  const or = we({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Wr = null;
  const Ro = we({}, ["audio", "video", "img", "source", "image", "track"]);
  let yr = null;
  const Gr = we({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ar = "http://www.w3.org/1998/Math/MathML", Sn = "http://www.w3.org/2000/svg", Ut = "http://www.w3.org/1999/xhtml";
  let Hn = Ut, Kr = !1, Yr = null;
  const _r = we({}, [ar, Sn, Ut], Qa);
  let qr = we({}, ["mi", "mo", "mn", "ms", "mtext"]), Zr = we({}, ["annotation-xml"]);
  const Ma = we({}, ["title", "style", "font", "a", "script"]);
  let sr = null;
  const xo = ["application/xhtml+xml", "text/html"], Da = "text/html";
  let Fe = null, Wn = null;
  const Fa = n.createElement("form"), No = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, wr = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Wn && Wn === b)
      return;
    (!b || typeof b != "object") && (b = {}), b = wt(b), sr = // eslint-disable-next-line unicorn/prefer-includes
    xo.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Da : b.PARSER_MEDIA_TYPE, Fe = sr === "application/xhtml+xml" ? Qa : so, ke = Je(b, "ALLOWED_TAGS") && At(b.ALLOWED_TAGS) ? we({}, b.ALLOWED_TAGS, Fe) : We, Te = Je(b, "ALLOWED_ATTR") && At(b.ALLOWED_ATTR) ? we({}, b.ALLOWED_ATTR, Fe) : Ge, Yr = Je(b, "ALLOWED_NAMESPACES") && At(b.ALLOWED_NAMESPACES) ? we({}, b.ALLOWED_NAMESPACES, Qa) : _r, yr = Je(b, "ADD_URI_SAFE_ATTR") && At(b.ADD_URI_SAFE_ATTR) ? we(wt(Gr), b.ADD_URI_SAFE_ATTR, Fe) : Gr, Wr = Je(b, "ADD_DATA_URI_TAGS") && At(b.ADD_DATA_URI_TAGS) ? we(wt(Ro), b.ADD_DATA_URI_TAGS, Fe) : Ro, Ke = Je(b, "FORBID_CONTENTS") && At(b.FORBID_CONTENTS) ? we({}, b.FORBID_CONTENTS, Fe) : or, et = Je(b, "FORBID_TAGS") && At(b.FORBID_TAGS) ? we({}, b.FORBID_TAGS, Fe) : wt({}), ct = Je(b, "FORBID_ATTR") && At(b.FORBID_ATTR) ? we({}, b.FORBID_ATTR, Fe) : wt({}), Nt = Je(b, "USE_PROFILES") ? b.USE_PROFILES && typeof b.USE_PROFILES == "object" ? wt(b.USE_PROFILES) : b.USE_PROFILES : !1, gt = b.ALLOW_ARIA_ATTR !== !1, ut = b.ALLOW_DATA_ATTR !== !1, H = b.ALLOW_UNKNOWN_PROTOCOLS || !1, Q = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, q = b.SAFE_FOR_TEMPLATES || !1, ge = b.SAFE_FOR_XML !== !1, _ = b.WHOLE_DOCUMENT || !1, K = b.RETURN_DOM || !1, Ee = b.RETURN_DOM_FRAGMENT || !1, fe = b.RETURN_TRUSTED_TYPE || !1, D = b.FORCE_BODY || !1, k = b.SANITIZE_DOM !== !1, M = b.SANITIZE_NAMED_PROPS || !1, Ae = b.KEEP_CONTENT !== !1, Xe = b.IN_PLACE || !1, Ce = eT(b.ALLOWED_URI_REGEXP) ? b.ALLOWED_URI_REGEXP : Mc, Hn = typeof b.NAMESPACE == "string" ? b.NAMESPACE : Ut, qr = Je(b, "MATHML_TEXT_INTEGRATION_POINTS") && b.MATHML_TEXT_INTEGRATION_POINTS && typeof b.MATHML_TEXT_INTEGRATION_POINTS == "object" ? wt(b.MATHML_TEXT_INTEGRATION_POINTS) : we({}, ["mi", "mo", "mn", "ms", "mtext"]), Zr = Je(b, "HTML_INTEGRATION_POINTS") && b.HTML_INTEGRATION_POINTS && typeof b.HTML_INTEGRATION_POINTS == "object" ? wt(b.HTML_INTEGRATION_POINTS) : we({}, ["annotation-xml"]);
    const F = Je(b, "CUSTOM_ELEMENT_HANDLING") && b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING == "object" ? wt(b.CUSTOM_ELEMENT_HANDLING) : Ir(null);
    if (ce = Ir(null), Je(F, "tagNameCheck") && No(F.tagNameCheck) && (ce.tagNameCheck = F.tagNameCheck), Je(F, "attributeNameCheck") && No(F.attributeNameCheck) && (ce.attributeNameCheck = F.attributeNameCheck), Je(F, "allowCustomizedBuiltInElements") && typeof F.allowCustomizedBuiltInElements == "boolean" && (ce.allowCustomizedBuiltInElements = F.allowCustomizedBuiltInElements), q && (ut = !1), Ee && (K = !0), Nt && (ke = we({}, Nc), Te = Ir(null), Nt.html === !0 && (we(ke, xc), we(Te, Pc)), Nt.svg === !0 && (we(ke, Ja), we(Te, ns), we(Te, Yo)), Nt.svgFilters === !0 && (we(ke, es), we(Te, ns), we(Te, Yo)), Nt.mathMl === !0 && (we(ke, ts), we(Te, $c), we(Te, Yo))), je.tagCheck = null, je.attributeCheck = null, Je(b, "ADD_TAGS") && (typeof b.ADD_TAGS == "function" ? je.tagCheck = b.ADD_TAGS : At(b.ADD_TAGS) && (ke === We && (ke = wt(ke)), we(ke, b.ADD_TAGS, Fe))), Je(b, "ADD_ATTR") && (typeof b.ADD_ATTR == "function" ? je.attributeCheck = b.ADD_ATTR : At(b.ADD_ATTR) && (Te === Ge && (Te = wt(Te)), we(Te, b.ADD_ATTR, Fe))), Je(b, "ADD_URI_SAFE_ATTR") && At(b.ADD_URI_SAFE_ATTR) && we(yr, b.ADD_URI_SAFE_ATTR, Fe), Je(b, "FORBID_CONTENTS") && At(b.FORBID_CONTENTS) && (Ke === or && (Ke = wt(Ke)), we(Ke, b.FORBID_CONTENTS, Fe)), Je(b, "ADD_FORBID_CONTENTS") && At(b.ADD_FORBID_CONTENTS) && (Ke === or && (Ke = wt(Ke)), we(Ke, b.ADD_FORBID_CONTENTS, Fe)), Ae && (ke["#text"] = !0), _ && we(ke, ["html", "head", "body"]), ke.table && (we(ke, ["tbody"]), delete et.tbody), b.TRUSTED_TYPES_POLICY) {
      if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw oo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw oo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      C = b.TRUSTED_TYPES_POLICY, O = C.createHTML("");
    } else
      C === void 0 && (C = pT(p, o)), C !== null && typeof O == "string" && (O = C.createHTML(""));
    (de.uponSanitizeElement.length > 0 || de.uponSanitizeAttribute.length > 0) && ke === We && (ke = wt(ke)), de.uponSanitizeAttribute.length > 0 && Te === Ge && (Te = wt(Te)), Rt && Rt(b), Wn = b;
  }, Po = we({}, [...Ja, ...es, ...tT]), $o = we({}, [...ts, ...nT]), za = function(b) {
    let F = d(b);
    (!F || !F.tagName) && (F = {
      namespaceURI: Hn,
      tagName: "template"
    });
    const X = so(b.tagName), Re = so(F.tagName);
    return Yr[b.namespaceURI] ? b.namespaceURI === Sn ? F.namespaceURI === Ut ? X === "svg" : F.namespaceURI === ar ? X === "svg" && (Re === "annotation-xml" || qr[Re]) : !!Po[X] : b.namespaceURI === ar ? F.namespaceURI === Ut ? X === "math" : F.namespaceURI === Sn ? X === "math" && Zr[Re] : !!$o[X] : b.namespaceURI === Ut ? F.namespaceURI === Sn && !Zr[Re] || F.namespaceURI === ar && !qr[Re] ? !1 : !$o[X] && (Ma[X] || !Po[X]) : !!(sr === "application/xhtml+xml" && Yr[b.namespaceURI]) : !1;
  }, Ft = function(b) {
    Ar(t.removed, {
      element: b
    });
    try {
      d(b).removeChild(b);
    } catch {
      g(b);
    }
  }, x = function(b, F) {
    try {
      Ar(t.removed, {
        attribute: F.getAttributeNode(b),
        from: F
      });
    } catch {
      Ar(t.removed, {
        attribute: null,
        from: F
      });
    }
    if (F.removeAttribute(b), b === "is")
      if (K || Ee)
        try {
          Ft(F);
        } catch {
        }
      else
        try {
          F.setAttribute(b, "");
        } catch {
        }
  }, Y = function(b) {
    let F = null, X = null;
    if (D)
      b = "<remove></remove>" + b;
    else {
      const ze = Oc(b, /^[\r\n\t ]+/);
      X = ze && ze[0];
    }
    sr === "application/xhtml+xml" && Hn === Ut && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const Re = C ? C.createHTML(b) : b;
    if (Hn === Ut)
      try {
        F = new f().parseFromString(Re, sr);
      } catch {
      }
    if (!F || !F.documentElement) {
      F = U.createDocument(Hn, "template", null);
      try {
        F.documentElement.innerHTML = Kr ? O : Re;
      } catch {
      }
    }
    const Se = F.body || F.documentElement;
    return b && X && Se.insertBefore(n.createTextNode(X), Se.childNodes[0] || null), Hn === Ut ? ee.call(F, _ ? "html" : "body")[0] : _ ? F.documentElement : Se;
  }, ye = function(b) {
    return ne.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Qe = function(b) {
    b.normalize();
    const F = ne.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = F.nextNode();
    for (; X; ) {
      let Re = X.data;
      Sr([R, P, z], (Se) => {
        Re = Cr(Re, Se, " ");
      }), X.data = Re, X = F.nextNode();
    }
  }, ft = function(b) {
    const F = y ? y(b) : null;
    return typeof F != "string" || Fe(F) !== "form" ? !1 : typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    b.attributes !== L(b) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    b.nodeType !== T(b) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, jt = function(b) {
    if (!T || typeof b != "object" || b === null)
      return !1;
    try {
      return T(b) === fn.documentFragment;
    } catch {
      return !1;
    }
  }, zt = function(b) {
    if (!T || typeof b != "object" || b === null)
      return !1;
    try {
      return typeof T(b) == "number";
    } catch {
      return !1;
    }
  };
  function Pt(se, b, F) {
    Sr(se, (X) => {
      X.call(t, b, F, Wn);
    });
  }
  const Gn = function(b) {
    let F = null;
    if (Pt(de.beforeSanitizeElements, b, null), ft(b))
      return Ft(b), !0;
    const X = Fe(b.nodeName);
    if (Pt(de.uponSanitizeElement, b, {
      tagName: X,
      allowedTags: ke
    }), ge && b.hasChildNodes() && !zt(b.firstElementChild) && vt(/<[/\w!]/g, b.innerHTML) && vt(/<[/\w!]/g, b.textContent) || ge && b.namespaceURI === Ut && X === "style" && zt(b.firstElementChild) || b.nodeType === fn.progressingInstruction || ge && b.nodeType === fn.comment && vt(/<[/\w]/g, b.data))
      return Ft(b), !0;
    if (et[X] || !(je.tagCheck instanceof Function && je.tagCheck(X)) && !ke[X]) {
      if (!et[X] && Al(X) && (ce.tagNameCheck instanceof RegExp && vt(ce.tagNameCheck, X) || ce.tagNameCheck instanceof Function && ce.tagNameCheck(X)))
        return !1;
      if (Ae && !Ke[X]) {
        const Se = d(b), ze = A(b);
        if (ze && Se) {
          const Ht = ze.length;
          for (let ln = Ht - 1; ln >= 0; --ln) {
            const Xt = v(ze[ln], !0);
            Se.insertBefore(Xt, h(b));
          }
        }
      }
      return Ft(b), !0;
    }
    return (T ? T(b) : b.nodeType) === fn.element && !za(b) || (X === "noscript" || X === "noembed" || X === "noframes") && vt(/<\/no(script|embed|frames)/i, b.innerHTML) ? (Ft(b), !0) : (q && b.nodeType === fn.text && (F = b.textContent, Sr([R, P, z], (Se) => {
      F = Cr(F, Se, " ");
    }), b.textContent !== F && (Ar(t.removed, {
      element: b.cloneNode()
    }), b.textContent = F)), Pt(de.afterSanitizeElements, b, null), !1);
  }, Mo = function(b, F, X) {
    if (ct[F] || k && (F === "id" || F === "name") && (X in n || X in Fa))
      return !1;
    const Re = Te[F] || je.attributeCheck instanceof Function && je.attributeCheck(F, b);
    if (!(ut && !ct[F] && vt(ie, F))) {
      if (!(gt && vt(J, F))) {
        if (!Re || ct[F]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Al(b) && (ce.tagNameCheck instanceof RegExp && vt(ce.tagNameCheck, b) || ce.tagNameCheck instanceof Function && ce.tagNameCheck(b)) && (ce.attributeNameCheck instanceof RegExp && vt(ce.attributeNameCheck, F) || ce.attributeNameCheck instanceof Function && ce.attributeNameCheck(F, b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            F === "is" && ce.allowCustomizedBuiltInElements && (ce.tagNameCheck instanceof RegExp && vt(ce.tagNameCheck, X) || ce.tagNameCheck instanceof Function && ce.tagNameCheck(X)))
          ) return !1;
        } else if (!yr[F]) {
          if (!vt(Ce, Cr(X, Z, ""))) {
            if (!((F === "src" || F === "xlink:href" || F === "href") && b !== "script" && Lc(X, "data:") === 0 && Wr[b])) {
              if (!(H && !vt(_e, Cr(X, Z, "")))) {
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
    return !Yf[so(b)] && vt(Ue, b);
  }, Cl = function(b) {
    Pt(de.beforeSanitizeAttributes, b, null);
    const F = b.attributes;
    if (!F || ft(b))
      return;
    const X = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Te,
      forceKeepAttr: void 0
    };
    let Re = F.length;
    for (; Re--; ) {
      const Se = F[Re], ze = Se.name, Ht = Se.namespaceURI, ln = Se.value, Xt = Fe(ze), Ba = ln;
      let dt = ze === "value" ? Ba : Yk(Ba);
      if (X.attrName = Xt, X.attrValue = dt, X.keepAttr = !0, X.forceKeepAttr = void 0, Pt(de.uponSanitizeAttribute, b, X), dt = X.attrValue, M && (Xt === "id" || Xt === "name") && Lc(dt, ve) !== 0 && (x(ze, b), dt = ve + dt), ge && vt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, dt)) {
        x(ze, b);
        continue;
      }
      if (Xt === "attributename" && Oc(dt, "href")) {
        x(ze, b);
        continue;
      }
      if (X.forceKeepAttr)
        continue;
      if (!X.keepAttr) {
        x(ze, b);
        continue;
      }
      if (!Q && vt(/\/>/i, dt)) {
        x(ze, b);
        continue;
      }
      q && Sr([R, P, z], (Ll) => {
        dt = Cr(dt, Ll, " ");
      });
      const Ol = Fe(b.nodeName);
      if (!Mo(Ol, Xt, dt)) {
        x(ze, b);
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
          Ht ? b.setAttributeNS(Ht, ze, dt) : b.setAttribute(ze, dt), ft(b) ? Ft(b) : Cc(t.removed);
        } catch {
          x(ze, b);
        }
    }
    Pt(de.afterSanitizeAttributes, b, null);
  }, Do = function(b) {
    let F = null;
    const X = ye(b);
    for (Pt(de.beforeSanitizeShadowDOM, b, null); F = X.nextNode(); )
      if (Pt(de.uponSanitizeShadowNode, F, null), Gn(F), Cl(F), jt(F.content) && Do(F.content), (T ? T(F) : F.nodeType) === fn.element) {
        const Se = E ? E(F) : F.shadowRoot;
        jt(Se) && (kr(Se), Do(Se));
      }
    Pt(de.afterSanitizeShadowDOM, b, null);
  }, kr = function(b) {
    const F = T ? T(b) : b.nodeType;
    if (F === fn.element) {
      const Se = E ? E(b) : b.shadowRoot;
      jt(Se) && (kr(Se), Do(Se));
    }
    const X = A ? A(b) : b.childNodes;
    if (!X)
      return;
    const Re = [];
    Sr(X, (Se) => {
      Ar(Re, Se);
    });
    for (const Se of Re)
      kr(Se);
    if (F === fn.element) {
      const Se = y ? y(b) : null;
      if (typeof Se == "string" && Fe(Se) === "template") {
        const ze = b.content;
        jt(ze) && kr(ze);
      }
    }
  };
  return t.sanitize = function(se) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, F = null, X = null, Re = null, Se = null;
    if (Kr = !se, Kr && (se = "<!-->"), typeof se != "string" && !zt(se) && (se = Jk(se), typeof se != "string"))
      throw oo("dirty is not a string, aborting");
    if (!t.isSupported)
      return se;
    if (S || wr(b), t.removed = [], typeof se == "string" && (Xe = !1), Xe) {
      const ln = y ? y(se) : se.nodeName;
      if (typeof ln == "string") {
        const Xt = Fe(ln);
        if (!ke[Xt] || et[Xt])
          throw oo("root node is forbidden and cannot be sanitized in-place");
      }
      if (ft(se))
        throw oo("root node is clobbered and cannot be sanitized in-place");
      kr(se);
    } else if (zt(se))
      F = Y("<!---->"), X = F.ownerDocument.importNode(se, !0), X.nodeType === fn.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? F = X : F.appendChild(X), kr(X);
    else {
      if (!K && !q && !_ && // eslint-disable-next-line unicorn/prefer-includes
      se.indexOf("<") === -1)
        return C && fe ? C.createHTML(se) : se;
      if (F = Y(se), !F)
        return K ? null : fe ? O : "";
    }
    F && D && Ft(F.firstChild);
    const ze = ye(Xe ? se : F);
    for (; Re = ze.nextNode(); )
      Gn(Re), Cl(Re), jt(Re.content) && Do(Re.content);
    if (Xe)
      return q && Qe(se), se;
    if (K) {
      if (q && Qe(F), Ee)
        for (Se = ue.call(F.ownerDocument); F.firstChild; )
          Se.appendChild(F.firstChild);
      else
        Se = F;
      return (Te.shadowroot || Te.shadowrootmode) && (Se = me.call(r, Se, !0)), Se;
    }
    let Ht = _ ? F.outerHTML : F.innerHTML;
    return _ && ke["!doctype"] && F.ownerDocument && F.ownerDocument.doctype && F.ownerDocument.doctype.name && vt(uT, F.ownerDocument.doctype.name) && (Ht = "<!DOCTYPE " + F.ownerDocument.doctype.name + `>
` + Ht), q && Sr([R, P, z], (ln) => {
      Ht = Cr(Ht, ln, " ");
    }), C && fe ? C.createHTML(Ht) : Ht;
  }, t.setConfig = function() {
    let se = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    wr(se), S = !0;
  }, t.clearConfig = function() {
    Wn = null, S = !1;
  }, t.isValidAttribute = function(se, b, F) {
    Wn || wr({});
    const X = Fe(se), Re = Fe(b);
    return Mo(X, Re, F);
  }, t.addHook = function(se, b) {
    typeof b == "function" && Ar(de[se], b);
  }, t.removeHook = function(se, b) {
    if (b !== void 0) {
      const F = Gk(de[se], b);
      return F === -1 ? void 0 : Kk(de[se], F, 1)[0];
    }
    return Cc(de[se]);
  }, t.removeHooks = function(se) {
    de[se] = [];
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
}, PT = { class: "chat-panel" }, $T = { class: "chat-topbar" }, MT = { class: "chat-topbar-main" }, DT = { class: "chat-title-row" }, FT = { class: "service-url" }, zT = { class: "chat-meta-pills" }, BT = { class: "chat-topbar-actions" }, VT = ["title"], UT = { class: "date-divider" }, jT = {
  key: 0,
  class: "empty-state"
}, HT = { class: "empty-title" }, WT = { class: "empty-desc" }, GT = { class: "message-avatar" }, KT = { key: 1 }, YT = { class: "message-body" }, qT = {
  key: 0,
  class: "user-bubble"
}, ZT = { class: "assistant-head" }, XT = ["innerHTML"], QT = {
  key: 1,
  class: "message-content loading-text"
}, JT = {
  key: 0,
  class: "message-actions"
}, eE = ["title", "onClick"], tE = ["title", "onClick"], nE = ["title"], rE = ["title"], oE = ["title", "onClick"], aE = ["title", "onClick"], sE = ["placeholder", "onKeydown"], lE = { class: "input-toolbar" }, iE = { class: "input-toolbar-left" }, cE = ["title"], uE = { class: "model-select-shell" }, fE = ["value"], dE = ["value"], pE = { class: "input-toolbar-right" }, mE = ["disabled"], hE = /* @__PURE__ */ re({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Eo(), n = V(""), r = V([]), o = V(""), a = V(""), s = V(!1), i = V(!1), l = V(null), u = V(null), f = V(null);
    let p = null;
    const m = /* @__PURE__ */ new Map(), v = I(() => !!a.value.trim() && !s.value), g = I(() => u.value?.healthy ? t("localAi.serviceHealthy") : u.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), h = I(
      () => r.value.find((H) => H.id === o.value) ?? null
    ), A = I(() => h.value?.messages ?? []), d = (H) => H ? H.split(/[\\/]+/).pop() ?? H : "", E = I(
      () => d(u.value?.modelPath) || d(l.value?.modelPath) || t("localAi.localModel")
    ), L = I(
      () => l.value?.ctxSize ? String(l.value.ctxSize) : t("localAi.defaultContext")
    ), T = I(
      () => l.value?.temperature ?? 0.3
    ), y = I(() => l.value?.maxTokens ?? 1024), C = I(() => {
      const H = n.value.trim().toLowerCase();
      return r.value.filter(
        (Q) => !H || Q.title.toLowerCase().includes(H) || Q.messages.some(
          (q) => q.content.toLowerCase().includes(H)
        )
      ).slice().sort((Q, q) => q.updatedAt.localeCompare(Q.updatedAt));
    }), O = () => t("localAi.now"), W = () => {
      const H = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: H,
        updatedAt: H,
        updatedAtLabel: O(),
        messages: []
      };
    }, U = async () => {
      await tt();
      const H = f.value;
      H && (H.scrollTop = H.scrollHeight);
    }, ne = async () => {
      try {
        l.value = await jf();
      } catch (H) {
        Zn.warn("[LocalAI] refresh chat config failed", H);
      }
    }, ue = async () => {
      i.value = !0;
      try {
        u.value = await Hf();
      } catch (H) {
        Zn.warn("[LocalAI] refresh chat status failed", H);
      } finally {
        i.value = !1;
      }
    }, ee = async () => {
      try {
        const H = await $k();
        r.value = H.map((Q) => ({
          id: Q.id,
          title: Q.title,
          createdAt: Q.createdAt,
          updatedAt: Q.updatedAt,
          updatedAtLabel: new Date(Q.updatedAt).toLocaleString(),
          messages: Q.turns.map((q) => ({
            id: q.id,
            role: q.role,
            content: q.content,
            createdAt: q.createdAt
          }))
        })), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (H) {
        Zn.warn("[LocalAI] refresh histories failed", H);
      }
    }, me = async () => {
      await Promise.all([ne(), ue(), ee()]);
    }, de = async () => {
      const H = h.value;
      H && await Mk({
        id: H.id,
        title: H.title,
        createdAt: H.createdAt,
        updatedAt: H.updatedAt,
        turns: H.messages.map((Q) => ({
          id: Q.id,
          role: Q.role,
          content: Q.content,
          createdAt: Q.createdAt
        }))
      });
    }, R = () => {
      const H = W();
      r.value.unshift(H), o.value = H.id, a.value = "";
    }, P = () => {
      h.value || R();
    }, z = (H) => {
      o.value = H, U();
    }, ie = async (H) => {
      r.value = r.value.filter((Q) => Q.id !== H), await Dk(H), o.value === H && (o.value = r.value[0]?.id ?? "");
    }, J = () => A.value.filter((H) => !H.streaming).map((H) => ({
      role: H.role,
      content: H.content
    })), _e = (H) => {
      const Q = m.get(H);
      if (Q) return Q;
      const q = gT(Pe.parse(H, { async: !1 }));
      if (m.set(H, q), m.size > 80) {
        const ge = m.keys().next().value;
        typeof ge == "string" && m.delete(ge);
      }
      return q;
    }, Z = async (H) => {
      const Q = performance.now();
      let q = "", ge = null;
      const _ = async () => {
        if (!q) {
          ge = null;
          return;
        }
        H.content += q, q = "", ge = null, await U();
      }, S = () => {
        ge === null && (ge = window.setTimeout(() => {
          _().catch(
            (K) => Zn.warn("[LocalAI] stream flush failed", K)
          );
        }, 48));
      }, D = await Pk(
        { messages: J() },
        (K) => {
          q += K, S();
        }
      );
      ge !== null && (window.clearTimeout(ge), ge = null), q && await _(), H.content = D.content || H.content, H.streaming = !1, H.elapsedMs = performance.now() - Q;
    }, Ue = async () => {
      const H = a.value.trim();
      if (!H || s.value) return;
      P();
      const Q = (/* @__PURE__ */ new Date()).toISOString();
      h.value?.messages.push({
        id: `${Date.now()}-user`,
        role: "user",
        content: H,
        createdAt: Q
      });
      const q = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0
      };
      h.value?.messages.push(q), a.value = "", s.value = !0, await U();
      try {
        await Z(q), h.value && (h.value.title = h.value.title === t("localAi.newChatTitle") ? H.slice(0, 28) : h.value.title, h.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), h.value.updatedAtLabel = new Date(
          h.value.updatedAt
        ).toLocaleString(), await de()), await ue();
      } catch (ge) {
        Ct.msg(`${t("localAi.chatFailed")}: ${ge}`, "error"), q.streaming = !1, q.content = String(ge);
      } finally {
        s.value = !1, await U();
      }
    }, Ce = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, ke = () => {
      n.value = "";
    }, We = () => {
      Ct.msg(t("localAi.moreComingSoon"));
    }, Te = (H) => new Date(H.createdAt || h.value?.updatedAt || Date.now()), Ge = (H) => Te(H).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), ce = (H) => {
      const Q = new Date(H), q = /* @__PURE__ */ new Date(), ge = q.getTime() - Q.getTime(), _ = 24 * 60 * 60 * 1e3;
      return Q.toDateString() === q.toDateString() ? Q.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ge < _ * 2 ? t("localAi.yesterday") : ge < _ * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(ge / _))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(ge / (_ * 7)))
      });
    }, et = async (H) => {
      try {
        await navigator.clipboard.writeText(H.content), Ct.msg(t("localAi.copied"));
      } catch (Q) {
        Ct.msg(`${t("common.operationFailed")}: ${Q}`, "error");
      }
    }, ct = async (H) => {
      h.value && (h.value.messages = h.value.messages.filter(
        (Q) => Q.id !== H
      ), h.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), h.value.updatedAtLabel = new Date(
        h.value.updatedAt
      ).toLocaleString(), await de());
    }, je = (H) => {
      a.value = H.content;
    }, gt = () => {
      Ct.msg(t("localAi.feedbackSaved"));
    }, ut = async (H) => {
      const Q = h.value;
      if (!Q || s.value) return;
      const q = Q.messages.findIndex(
        (S) => S.id === H
      );
      if (!Q.messages.slice(0, q).reverse().find((S) => S.role === "user")) return;
      Q.messages = Q.messages.slice(0, q);
      const _ = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0
      };
      Q.messages.push(_), s.value = !0, await U();
      try {
        await Z(_), Q.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), Q.updatedAtLabel = new Date(Q.updatedAt).toLocaleString(), await de();
      } catch (S) {
        Ct.msg(`${t("localAi.chatFailed")}: ${S}`, "error"), _.streaming = !1, _.content = String(S);
      } finally {
        s.value = !1, await U();
      }
    };
    return ot(async () => {
      await me(), p = setInterval(() => {
        ue().catch(
          (H) => Zn.warn("[LocalAI] status timer failed", H)
        );
      }, 8e3);
    }), ga(() => {
      p && clearInterval(p);
    }), (H, Q) => (N(), G("main", vT, [
      w("aside", bT, [
        w("header", yT, [
          w("div", _T, [
            w(
              "h2",
              null,
              B(c(t)("localAi.chatTitle")),
              1
              /* TEXT */
            ),
            w(
              "p",
              null,
              B(c(t)("localAi.chatPrivacySubtitle")),
              1
              /* TEXT */
            )
          ]),
          w("div", wT, [
            w("button", {
              class: "icon-action-btn icon-action-btn--primary",
              type: "button",
              title: c(t)("localAi.newChat"),
              onClick: R
            }, [
              $(c(bd), {
                theme: "outline",
                size: "16"
              })
            ], 8, kT),
            w("button", {
              class: "icon-action-btn",
              type: "button",
              title: c(t)("plugins.refresh"),
              onClick: me
            }, [
              $(c(Rl), {
                theme: "outline",
                size: "16"
              })
            ], 8, TT)
          ])
        ]),
        w("div", ET, [
          $(c(Cd), {
            theme: "outline",
            size: "17"
          }),
          ht(w("input", {
            "onUpdate:modelValue": Q[0] || (Q[0] = (q) => po(n) ? n.value = q : null),
            placeholder: c(t)("localAi.searchHistory")
          }, null, 8, ST), [
            [mo, c(n)]
          ])
        ]),
        w("section", AT, [
          w(
            "div",
            CT,
            B(c(t)("localAi.recent")),
            1
            /* TEXT */
          ),
          c(C).length ? (N(), G("div", OT, [
            (N(!0), G(
              Tt,
              null,
              xr(c(C), (q) => (N(), G("div", {
                key: q.id,
                class: j([
                  "chat-list-item",
                  c(o) === q.id ? "active" : ""
                ]),
                role: "button",
                tabindex: "0",
                onClick: (ge) => z(q.id),
                onKeydown: Gt(Ye((ge) => z(q.id), ["prevent"]), ["enter"])
              }, [
                $(c(Ed), {
                  theme: "outline",
                  size: "16"
                }),
                w(
                  "span",
                  IT,
                  B(q.title),
                  1
                  /* TEXT */
                ),
                w(
                  "span",
                  RT,
                  B(ce(q.updatedAt)),
                  1
                  /* TEXT */
                ),
                w("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: c(t)("common.delete"),
                  onClick: Ye((ge) => ie(q.id), ["stop"])
                }, [
                  $(c(Il), {
                    theme: "outline",
                    size: "13"
                  })
                ], 8, xT)
              ], 42, LT))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (N(), G(
            "div",
            NT,
            B(c(t)("common.empty")),
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
              B(c(t)("localAi.viewAllChats")),
              1
              /* TEXT */
            ),
            $(c(Ad), {
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
                B(c(h)?.title ?? c(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              w(
                "span",
                {
                  class: j([
                    "status-pill",
                    c(u)?.healthy ? "ready" : "stopped"
                  ])
                },
                [
                  Q[2] || (Q[2] = w(
                    "i",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  )),
                  Wt(
                    " " + B(c(g)),
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
              B(c(u)?.baseUrl ?? "http://127.0.0.1:39281"),
              1
              /* TEXT */
            ),
            w("div", zT, [
              w(
                "span",
                null,
                B(c(t)("localAi.modelLabel")) + ": " + B(c(E)),
                1
                /* TEXT */
              ),
              w(
                "span",
                null,
                B(c(t)("localAi.contextLabel")) + ": " + B(c(L)),
                1
                /* TEXT */
              ),
              w(
                "span",
                null,
                B(c(t)("localAi.temperature")) + ": " + B(c(T)),
                1
                /* TEXT */
              ),
              w(
                "span",
                null,
                B(c(t)("localAi.maxTokens")) + ": " + B(c(y)),
                1
                /* TEXT */
              )
            ])
          ]),
          w("div", BT, [
            $(c(On), {
              size: "small",
              plain: "",
              class: "topbar-custom-btn",
              onClick: Ce
            }, {
              default: ae(() => [
                $(c(rs), {
                  theme: "outline",
                  size: "16"
                }),
                w(
                  "span",
                  null,
                  B(c(t)("localAi.settings")),
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
              onClick: We
            }, [
              $(c(Sd), {
                theme: "outline",
                size: "17"
              })
            ], 8, VT)
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
            w("div", UT, [
              w(
                "span",
                null,
                B(c(t)("localAi.today")),
                1
                /* TEXT */
              )
            ]),
            c(A).length ? te("v-if", !0) : (N(), G("div", jT, [
              $(c(xl), {
                theme: "outline",
                size: "28"
              }),
              w(
                "div",
                HT,
                B(c(t)("localAi.chatEmpty")),
                1
                /* TEXT */
              ),
              w(
                "div",
                WT,
                B(c(t)("localAi.chatPlaceholder")),
                1
                /* TEXT */
              )
            ])),
            (N(!0), G(
              Tt,
              null,
              xr(c(A), (q) => (N(), G(
                "article",
                {
                  key: q.id,
                  class: j(["message-row", `message-row--${q.role}`])
                },
                [
                  w("div", GT, [
                    q.role === "assistant" ? (N(), le(c(xl), {
                      key: 0,
                      theme: "outline",
                      size: "18"
                    })) : (N(), G(
                      "span",
                      KT,
                      B(c(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  w("div", YT, [
                    q.role === "user" ? (N(), G("div", qT, [
                      w(
                        "div",
                        null,
                        B(q.content),
                        1
                        /* TEXT */
                      ),
                      w(
                        "time",
                        null,
                        B(Ge(q)),
                        1
                        /* TEXT */
                      )
                    ])) : (N(), G(
                      Tt,
                      { key: 1 },
                      [
                        w("div", ZT, [
                          w(
                            "span",
                            null,
                            B(c(E)),
                            1
                            /* TEXT */
                          ),
                          w(
                            "small",
                            null,
                            B(q.streaming ? c(t)("localAi.thinking") : Ge(q)),
                            1
                            /* TEXT */
                          )
                        ]),
                        w(
                          "div",
                          {
                            class: j(["assistant-card", { "assistant-card--streaming": q.streaming }])
                          },
                          [
                            q.content ? (N(), G("div", {
                              key: 0,
                              class: "message-content markdown-body",
                              innerHTML: _e(q.content)
                            }, null, 8, XT)) : (N(), G(
                              "div",
                              QT,
                              B(c(t)("localAi.thinking")),
                              1
                              /* TEXT */
                            ))
                          ],
                          2
                          /* CLASS */
                        ),
                        q.streaming ? te("v-if", !0) : (N(), G("div", JT, [
                          w("button", {
                            type: "button",
                            title: c(t)("common.copy"),
                            onClick: (ge) => et(q)
                          }, [
                            $(c(yd), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, eE),
                          w("button", {
                            type: "button",
                            title: c(t)("localAi.regenerate"),
                            onClick: (ge) => ut(q.id)
                          }, [
                            $(c(Rl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, tE),
                          w("button", {
                            type: "button",
                            title: c(t)("localAi.like"),
                            onClick: gt
                          }, [
                            $(c(Td), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, nE),
                          w("button", {
                            type: "button",
                            title: c(t)("localAi.dislike"),
                            onClick: gt
                          }, [
                            $(c(_d), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, rE),
                          w("button", {
                            type: "button",
                            title: c(t)("common.edit"),
                            onClick: (ge) => je(q)
                          }, [
                            $(c(kd), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, oE),
                          w("button", {
                            type: "button",
                            title: c(t)("common.delete"),
                            onClick: (ge) => ct(q.id)
                          }, [
                            $(c(Il), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, aE)
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
            onSubmit: Ye(Ue, ["prevent"])
          },
          [
            ht(w("textarea", {
              "onUpdate:modelValue": Q[1] || (Q[1] = (q) => po(a) ? a.value = q : null),
              class: "chat-input",
              rows: "3",
              placeholder: c(t)("localAi.chatPlaceholder"),
              onKeydown: Gt(Ye(Ue, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, sE), [
              [mo, c(a)]
            ]),
            w("div", lE, [
              w("div", iE, [
                w("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: c(t)("localAi.settings"),
                  onClick: Ce
                }, [
                  $(c(rs), {
                    theme: "outline",
                    size: "16"
                  })
                ], 8, cE),
                w("label", uE, [
                  w("select", {
                    value: c(E),
                    disabled: ""
                  }, [
                    w("option", { value: c(E) }, B(c(E)), 9, dE)
                  ], 8, fE),
                  $(c(wd), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ]),
              w("div", pE, [
                Q[3] || (Q[3] = w(
                  "span",
                  { class: "input-hint" },
                  "Ctrl + Enter",
                  -1
                  /* HOISTED */
                )),
                w("button", {
                  class: "send-btn",
                  type: "submit",
                  disabled: !c(v)
                }, [
                  $(c(Od), {
                    theme: "outline",
                    size: "16"
                  }),
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.send")),
                    1
                    /* TEXT */
                  )
                ], 8, mE)
              ])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ]));
  }
}), gE = /* @__PURE__ */ Ks(hE, [["__scopeId", "data-v-e57693bb"]]), vE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gE
}, Symbol.toStringTag, { value: "Module" }));
async function Fc(e = {}) {
  return typeof e == "object" && Object.freeze(e), await St("plugin:dialog|open", { options: e });
}
const bE = { class: "settings-panel local-ai-settings-shell" }, yE = { class: "local-ai-hero panel-card" }, _E = { class: "panel-title" }, wE = { class: "hero-desc" }, kE = { class: "header-actions" }, TE = {
  key: 0,
  class: "settings-grid"
}, EE = { class: "summary-panel panel-card" }, SE = { class: "status-strip" }, AE = { class: "summary-card" }, CE = { class: "summary-card__title" }, OE = { class: "summary-card__desc" }, LE = { class: "service-controls" }, IE = { class: "service-url" }, RE = { class: "summary-card" }, xE = { class: "summary-card__title" }, NE = { class: "summary-card__desc" }, PE = { class: "summary-meta" }, $E = { class: "form-panel panel-card" }, ME = { class: "settings-section" }, DE = { class: "settings-section__header" }, FE = { class: "field-stack" }, zE = { class: "field-row" }, BE = { class: "path-control" }, VE = { class: "field-row" }, UE = { class: "field-row" }, jE = { class: "field-row" }, HE = { class: "path-control" }, WE = ["placeholder"], GE = { class: "settings-section grid-two" }, KE = { class: "settings-section__header" }, YE = { class: "param-grid" }, qE = { class: "number-field" }, ZE = { class: "number-field" }, XE = { class: "number-field" }, QE = { class: "number-field" }, JE = { class: "number-field" }, eS = { class: "number-field" }, tS = { class: "settings-section grid-two" }, nS = { class: "settings-section__header" }, rS = { class: "switch-grid" }, oS = { class: "settings-section grid-two" }, aS = { class: "settings-section__header" }, sS = { class: "switch-grid switch-grid--two" }, lS = { class: "number-field" }, iS = { class: "number-field" }, cS = { class: "settings-section grid-two" }, uS = { class: "settings-section__header" }, fS = { class: "param-grid param-grid--three" }, dS = { class: "number-field" }, pS = { class: "number-field" }, mS = { class: "number-field" }, hS = { class: "settings-footer" }, gS = ["title"], vS = /* @__PURE__ */ re({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Eo(), n = V(null), r = V(null), o = V(null), a = V(null), s = V(!1), i = V(!1), l = V(!1), u = V(!1), f = V(!1);
    let p = null;
    const m = I(() => !!a.value?.selectedModelPath), v = I({ get: () => n.value?.modelPath ?? "", set: (R) => {
      n.value && (n.value.modelPath = R || void 0);
    } }), g = I({ get: () => n.value?.mmprojPath ?? "", set: (R) => {
      n.value && (n.value.mmprojPath = R || void 0);
    } }), h = I(() => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")), A = I(() => m.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")), d = I(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), E = (R) => R.split(/[\\/]+/).pop() ?? R, L = async () => {
      s.value = !0;
      try {
        n.value = await jf(), await Promise.all([T(), C(), y()]);
      } catch (R) {
        Zn.error("[LocalAI] refresh settings failed", R), Ct.msg(`${t("localAi.refreshFailed")}: ${R}`, "error");
      } finally {
        s.value = !1;
      }
    }, T = async () => {
      r.value = await Ik();
    }, y = async () => {
      o.value = await Hf();
    }, C = async () => {
      n.value && (a.value = await Lk(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, O = async () => {
      if (n.value)
        try {
          await Xa(n.value);
        } catch (R) {
          Zn.warn("[LocalAI] autosave failed", R);
        }
    }, W = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Xa(n.value), await Promise.all([T(), C(), y()]), Ct.msg(t("localAi.configSaved"));
        } catch (R) {
          Ct.msg(`${t("localAi.configSaveFailed")}: ${R}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, U = async () => {
      const R = await Fc({ directory: !0, multiple: !1, title: t("localAi.chooseModelDir") });
      !R || Array.isArray(R) || !n.value || (n.value.modelDir = R, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await C());
    }, ne = async () => {
      const R = await Fc({ multiple: !1, title: t("localAi.chooseRuntime"), filters: [{ name: "llama-server", extensions: ["exe"] }] });
      !R || Array.isArray(R) || !n.value || (n.value.runtimePath = R, await O(), await T());
    }, ue = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Xa(n.value), o.value = await Rk(n.value), Ct.msg(t("localAi.serviceStarted"));
        } catch (R) {
          Ct.msg(`${t("localAi.serviceStartFailed")}: ${R}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, ee = async () => {
      u.value = !0;
      try {
        await W(), o.value = await xk(), Ct.msg(t("localAi.serviceRestarted"));
      } catch (R) {
        Ct.msg(`${t("localAi.serviceRestartFailed")}: ${R}`, "error");
      } finally {
        u.value = !1;
      }
    }, me = async () => {
      f.value = !0;
      try {
        await Nk(), await y(), Ct.msg(t("localAi.serviceStoppedMsg"));
      } catch (R) {
        Ct.msg(`${t("localAi.serviceStopFailed")}: ${R}`, "error");
      } finally {
        f.value = !1;
      }
    }, de = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return ot(async () => {
      await L(), p = setInterval(() => {
        y().catch((R) => Zn.warn("[LocalAI] status refresh failed", R));
      }, 5e3);
    }), ga(() => {
      p && clearInterval(p);
    }), (R, P) => {
      const z = jw, ie = Uw, J = Aw, _e = Zw;
      return N(), G("div", bE, [
        w("header", yE, [
          w("div", null, [
            w(
              "h3",
              _E,
              B(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            w(
              "p",
              wE,
              B(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          w("div", kE, [
            $(c(On), {
              size: "small",
              plain: "",
              onClick: de
            }, {
              default: ae(() => [
                Wt(
                  B(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            $(c(On), {
              size: "small",
              loading: c(s),
              onClick: L
            }, {
              default: ae(() => [
                Wt(
                  B(c(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        c(n) ? (N(), G("main", TE, [
          w("aside", EE, [
            w("div", SE, [
              w(
                "div",
                {
                  class: j(["status-item", { ready: c(r)?.available }])
                },
                [
                  P[20] || (P[20] = w(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  w(
                    "span",
                    null,
                    B(c(h)),
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
                  class: j(["status-item", { ready: c(m) }])
                },
                [
                  P[21] || (P[21] = w(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  w(
                    "span",
                    null,
                    B(c(A)),
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
                  class: j(["status-item", { ready: c(o)?.healthy }])
                },
                [
                  P[22] || (P[22] = w(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  w(
                    "span",
                    null,
                    B(c(d)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            w("section", AE, [
              w(
                "div",
                CE,
                B(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              w(
                "div",
                OE,
                B(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              w("div", LE, [
                $(c(On), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: ue
                }, {
                  default: ae(() => [
                    Wt(
                      B(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                $(c(On), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: ee
                }, {
                  default: ae(() => [
                    Wt(
                      B(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                $(c(On), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(f),
                  disabled: !c(o)?.running,
                  onClick: me
                }, {
                  default: ae(() => [
                    Wt(
                      B(c(t)("localAi.stopService")),
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
                IE,
                B(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            w("section", RE, [
              w(
                "div",
                xE,
                B(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              w(
                "div",
                NE,
                B(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              w("div", PE, [
                w("div", null, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "b",
                    null,
                    B(c(r)?.available ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                w("div", null, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "b",
                    null,
                    B(c(m) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                w("div", null, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "b",
                    null,
                    B(c(o)?.healthy ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          w("section", $E, [
            w("div", ME, [
              w("div", DE, [
                w("div", null, [
                  w(
                    "h4",
                    null,
                    B(c(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    B(c(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              w("div", FE, [
                w("label", zE, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  w("div", BE, [
                    ht(w(
                      "input",
                      {
                        "onUpdate:modelValue": P[0] || (P[0] = (Z) => c(n).modelDir = Z),
                        class: "text-input",
                        onChange: C
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [mo, c(n).modelDir]
                    ]),
                    $(c(On), {
                      size: "small",
                      plain: "",
                      onClick: U
                    }, {
                      default: ae(() => [
                        Wt(
                          B(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ]),
                w("label", VE, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  $(ie, {
                    modelValue: c(v),
                    "onUpdate:modelValue": P[1] || (P[1] = (Z) => po(v) ? v.value = Z : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: ae(() => [
                      (N(!0), G(
                        Tt,
                        null,
                        xr(c(a)?.mainModels ?? [], (Z) => (N(), le(z, {
                          key: Z,
                          label: E(Z),
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
                w("label", UE, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  $(ie, {
                    modelValue: c(g),
                    "onUpdate:modelValue": P[2] || (P[2] = (Z) => po(g) ? g.value = Z : null),
                    class: "field-select",
                    clearable: "",
                    onChange: O
                  }, {
                    default: ae(() => [
                      (N(!0), G(
                        Tt,
                        null,
                        xr(c(a)?.mmprojModels ?? [], (Z) => (N(), le(z, {
                          key: Z,
                          label: E(Z),
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
                w("label", jE, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  w("div", HE, [
                    ht(w("input", {
                      "onUpdate:modelValue": P[3] || (P[3] = (Z) => c(n).runtimePath = Z),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, WE), [
                      [mo, c(n).runtimePath]
                    ]),
                    $(c(On), {
                      size: "small",
                      plain: "",
                      onClick: ne
                    }, {
                      default: ae(() => [
                        Wt(
                          B(c(t)("common.browse")),
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
            w("div", GE, [
              w("div", KE, [
                w("div", null, [
                  w(
                    "h4",
                    null,
                    B(c(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    B(c(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              w("div", YE, [
                w("label", qE, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  $(J, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": P[4] || (P[4] = (Z) => c(n).ctxSize = Z),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", ZE, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  $(J, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": P[5] || (P[5] = (Z) => c(n).gpuLayers = Z),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", XE, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  $(J, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": P[6] || (P[6] = (Z) => c(n).threads = Z),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", QE, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  $(J, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": P[7] || (P[7] = (Z) => c(n).batchSize = Z),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", JE, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  $(J, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": P[8] || (P[8] = (Z) => c(n).ubatchSize = Z),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", eS, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  $(J, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": P[9] || (P[9] = (Z) => c(n).mainGpu = Z),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            w("div", tS, [
              w("div", nS, [
                w("div", null, [
                  w(
                    "h4",
                    null,
                    B(c(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    B(c(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              w("div", rS, [
                w("label", null, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  $(_e, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": P[10] || (P[10] = (Z) => c(n).flashAttn = Z)
                  }, null, 8, ["modelValue"])
                ]),
                w("label", null, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  $(_e, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": P[11] || (P[11] = (Z) => c(n).kvOffload = Z)
                  }, null, 8, ["modelValue"])
                ]),
                w("label", null, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  $(_e, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": P[12] || (P[12] = (Z) => c(n).mmap = Z)
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            w("div", oS, [
              w("div", aS, [
                w("div", null, [
                  w(
                    "h4",
                    null,
                    B(c(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    B(c(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              w("div", sS, [
                w("label", null, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  $(_e, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": P[13] || (P[13] = (Z) => c(n).autoStartOnRequest = Z)
                  }, null, 8, ["modelValue"])
                ]),
                w("label", null, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  $(_e, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": P[14] || (P[14] = (Z) => c(n).keepAlive = Z)
                  }, null, 8, ["modelValue"])
                ]),
                w("label", lS, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  $(J, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": P[15] || (P[15] = (Z) => c(n).idleTimeoutMinutes = Z),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", iS, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  $(J, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": P[16] || (P[16] = (Z) => c(n).requestTimeoutSecs = Z),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            w("div", cS, [
              w("div", uS, [
                w("div", null, [
                  w(
                    "h4",
                    null,
                    B(c(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  w(
                    "p",
                    null,
                    B(c(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              w("div", fS, [
                w("label", dS, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  $(J, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": P[17] || (P[17] = (Z) => c(n).temperature = Z),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", pS, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  $(J, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": P[18] || (P[18] = (Z) => c(n).maxTokens = Z),
                    min: 64,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", mS, [
                  w(
                    "span",
                    null,
                    B(c(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  $(J, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": P[19] || (P[19] = (Z) => c(n).port = Z),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            w("div", hS, [
              $(c(On), {
                type: "primary",
                loading: c(i),
                onClick: W
              }, {
                default: ae(() => [
                  Wt(
                    B(c(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              c(o)?.commandLine ? (N(), G("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, B(c(o).commandLine), 9, gS)) : te("v-if", !0)
            ])
          ])
        ])) : te("v-if", !0)
      ]);
    };
  }
}), bS = /* @__PURE__ */ Ks(vS, [["__scopeId", "data-v-4e0ae2c1"]]), yS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bS
}, Symbol.toStringTag, { value: "Module" }));
export {
  kS as activate,
  kS as default
};
