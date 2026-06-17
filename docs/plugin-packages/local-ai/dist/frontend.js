var Xf = Object.defineProperty;
var Qf = (e, t, n) => t in e ? Xf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Me = (e, t, n) => Qf(e, typeof t != "symbol" ? t + "" : t, n);
import * as Va from "vue";
import { inject as Ne, createVNode as M, defineAsyncComponent as Jf, ref as j, shallowRef as rr, computed as R, watch as ve, onMounted as rt, onUnmounted as ga, defineComponent as ne, h as Bc, Text as Vc, Fragment as Ct, createElementBlock as H, openBlock as x, normalizeClass as U, createCommentVNode as X, renderSlot as me, createElementVNode as w, getCurrentInstance as $t, unref as c, watchEffect as jc, readonly as Ls, getCurrentScope as ed, onScopeDispose as td, nextTick as et, isRef as mo, warn as nd, provide as Sn, mergeProps as Nr, toRef as Dn, useAttrs as rd, useSlots as od, normalizeStyle as wt, createBlock as se, withCtx as oe, resolveDynamicComponent as Pt, withModifiers as qe, toDisplayString as V, onBeforeUnmount as On, Transition as Gr, withDirectives as vt, vShow as Wn, reactive as mr, onActivated as ad, onUpdated as Uc, cloneVNode as sd, Comment as ld, Teleport as id, onBeforeMount as cd, onDeactivated as ud, createTextVNode as qt, withKeys as Yt, createSlots as fd, toRaw as dd, toRefs as Is, resolveComponent as fr, resolveDirective as pd, toHandlerKey as md, renderList as $r, vModelText as ho, shallowReactive as hd, isVNode as go, render as ta } from "vue";
var gd = {
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
function vd() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function bd(e, t, n) {
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
var yd = Symbol("icon-context");
function Lt(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = vd(), i = Ne(yd, gd);
      return function() {
        var l = a.size, u = a.strokeWidth, f = a.strokeLinecap, p = a.strokeLinejoin, h = a.theme, b = a.fill, g = a.spin, v = bd(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: f,
          strokeLinejoin: p,
          theme: h,
          fill: b
        }, i), E = [i.prefix + "-icon"];
        return E.push(i.prefix + "-icon-" + e), t && i.rtl && E.push(i.prefix + "-icon-rtl"), g && E.push(i.prefix + "-icon-spin"), M("span", {
          class: E.join(" ")
        }, [n(v)]);
      };
    }
  };
  return r;
}
const _d = Lt("add", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M24 16V32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M16 24L32 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), wd = Lt("copy", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Il = Lt("delete", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M9 10V44H39V10H9Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M20 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M28 20V33",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M4 10H44",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M16 10L19.289 4H28.7771L32 10H16Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), kd = Lt("dislike", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M24 31L21 26L28 20L19 15L20 9.19942C18.4999 8.43256 16.8004 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C31.1996 8 29.5001 8.43256 28 9.19942",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Td = Lt("down", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M36 18L24 30L12 18",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ed = Lt("edit", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M7 42H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Sd = Lt("like", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ad = Lt("message", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M14 18L32 18",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M14 26H32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M14 34H24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Cd = Lt("more", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("circle", {
    cx: "12",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), M("circle", {
    cx: "24",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null), M("circle", {
    cx: "36",
    cy: "24",
    r: "3",
    fill: e.colors[0]
  }, null)]);
}), Rl = Lt("refresh", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Od = Lt("right", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M19 12L31 24L19 36",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xl = Lt("robot", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("rect", {
    x: "9",
    y: "17",
    width: "30",
    height: "26",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M33 9L28 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M15 9L20 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("circle", {
    cx: "34",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), M("circle", {
    cx: "14",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), M("rect", {
    x: "16",
    y: "24",
    width: "16",
    height: "8",
    rx: "4",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), M("path", {
    d: "M9 24H4V34H9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M39 24H44V34H39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ld = Lt("search", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Id = Lt("send", !0, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M43.0001 5L22.1001 25.9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), rs = Lt("setting-two", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), M("path", {
    d: "M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z",
    fill: e.colors[3],
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Rd = Lt("square", !1, function(e) {
  return M("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [M("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), RS = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => AE)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: rs,
    component: Jf(() => Promise.resolve().then(() => OS))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function xd(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Pl = typeof window < "u", br = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Pd = (e, t, n) => Nd({ l: e, k: t, s: n }), Nd = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), ht = (e) => typeof e == "number" && isFinite(e), $d = (e) => Rs(e) === "[object Date]", na = (e) => Rs(e) === "[object RegExp]", va = (e) => Ce(e) && Object.keys(e).length === 0, kt = Object.assign, Md = Object.create, De = (e = null) => Md(e);
let Nl;
const Zo = () => Nl || (Nl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : De());
function $l(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Ml(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Dd(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${Ml(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${Ml(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Fd = Object.prototype.hasOwnProperty;
function an(e, t) {
  return Fd.call(e, t);
}
const nt = Array.isArray, Ye = (e) => typeof e == "function", re = (e) => typeof e == "string", tt = (e) => typeof e == "boolean", Oe = (e) => e !== null && typeof e == "object", zd = (e) => Oe(e) && Ye(e.then) && Ye(e.catch), Hc = Object.prototype.toString, Rs = (e) => Hc.call(e), Ce = (e) => Rs(e) === "[object Object]", Bd = (e) => e == null ? "" : nt(e) || Ce(e) && e.toString === Hc ? JSON.stringify(e, null, 2) : String(e);
function xs(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Fo = (e) => !Oe(e) || nt(e);
function Xo(e, t) {
  if (Fo(e) || Fo(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Oe(r[a]) && !Oe(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : De()), Fo(o[a]) || Fo(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Vd(e, t, n) {
  return { line: e, column: t, offset: n };
}
function os(e, t, n) {
  return { start: e, end: t };
}
const Re = {
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
}, jd = 17;
function ba(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Ud(e) {
  throw e;
}
const pn = " ", Hd = "\r", At = `
`, Wd = "\u2028", Gd = "\u2029";
function Kd(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (L) => t[L] === Hd && t[L + 1] === At, i = (L) => t[L] === At, l = (L) => t[L] === Gd, u = (L) => t[L] === Wd, f = (L) => s(L) || i(L) || l(L) || u(L), p = () => n, h = () => r, b = () => o, g = () => a, v = (L) => s(L) || l(L) || u(L) ? At : t[L], E = () => v(n), d = () => v(n + a);
  function S() {
    return a = 0, f(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function I() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function T() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function _(L = 0) {
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
    line: h,
    column: b,
    peekOffset: g,
    charAt: v,
    currentChar: E,
    currentPeek: d,
    next: S,
    peek: I,
    reset: T,
    resetPeek: _,
    skipToPeek: O
  };
}
const xn = void 0, qd = ".", Dl = "'", Yd = "tokenizer";
function Zd(e, t = {}) {
  const n = t.location !== !1, r = Kd(e), o = () => r.index(), a = () => Vd(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  function p(k, A, D, ...K) {
    const ke = u();
    if (A.column += D, A.offset += D, f) {
      const ce = n ? os(ke.startLoc, A) : null, m = ba(k, ce, {
        domain: Yd,
        args: K
      });
      f(m);
    }
  }
  function h(k, A, D) {
    k.endLoc = a(), k.currentType = A;
    const K = { type: A };
    return n && (K.loc = os(k.startLoc, k.endLoc)), D != null && (K.value = D), K;
  }
  const b = (k) => h(
    k,
    13
    /* TokenTypes.EOF */
  );
  function g(k, A) {
    return k.currentChar() === A ? (k.next(), A) : (p(Re.EXPECTED_TOKEN, a(), 0, A), "");
  }
  function v(k) {
    let A = "";
    for (; k.currentPeek() === pn || k.currentPeek() === At; )
      A += k.currentPeek(), k.peek();
    return A;
  }
  function E(k) {
    const A = v(k);
    return k.skipToPeek(), A;
  }
  function d(k) {
    if (k === xn)
      return !1;
    const A = k.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A === 95;
  }
  function S(k) {
    if (k === xn)
      return !1;
    const A = k.charCodeAt(0);
    return A >= 48 && A <= 57;
  }
  function I(k, A) {
    const { currentType: D } = A;
    if (D !== 2)
      return !1;
    v(k);
    const K = d(k.currentPeek());
    return k.resetPeek(), K;
  }
  function T(k, A) {
    const { currentType: D } = A;
    if (D !== 2)
      return !1;
    v(k);
    const K = k.currentPeek() === "-" ? k.peek() : k.currentPeek(), ke = S(K);
    return k.resetPeek(), ke;
  }
  function _(k, A) {
    const { currentType: D } = A;
    if (D !== 2)
      return !1;
    v(k);
    const K = k.currentPeek() === Dl;
    return k.resetPeek(), K;
  }
  function O(k, A) {
    const { currentType: D } = A;
    if (D !== 7)
      return !1;
    v(k);
    const K = k.currentPeek() === ".";
    return k.resetPeek(), K;
  }
  function L(k, A) {
    const { currentType: D } = A;
    if (D !== 8)
      return !1;
    v(k);
    const K = d(k.currentPeek());
    return k.resetPeek(), K;
  }
  function W(k, A) {
    const { currentType: D } = A;
    if (!(D === 7 || D === 11))
      return !1;
    v(k);
    const K = k.currentPeek() === ":";
    return k.resetPeek(), K;
  }
  function G(k, A) {
    const { currentType: D } = A;
    if (D !== 9)
      return !1;
    const K = () => {
      const ce = k.currentPeek();
      return ce === "{" ? d(k.peek()) : ce === "@" || ce === "|" || ce === ":" || ce === "." || ce === pn || !ce ? !1 : ce === At ? (k.peek(), K()) : ue(k, !1);
    }, ke = K();
    return k.resetPeek(), ke;
  }
  function Q(k) {
    v(k);
    const A = k.currentPeek() === "|";
    return k.resetPeek(), A;
  }
  function ue(k, A = !0) {
    const D = (ke = !1, ce = "") => {
      const m = k.currentPeek();
      return m === "{" || m === "@" || !m ? ke : m === "|" ? !(ce === pn || ce === At) : m === pn ? (k.peek(), D(!0, pn)) : m === At ? (k.peek(), D(!0, At)) : !0;
    }, K = D();
    return A && k.resetPeek(), K;
  }
  function ee(k, A) {
    const D = k.currentChar();
    return D === xn ? xn : A(D) ? (k.next(), D) : null;
  }
  function he(k) {
    const A = k.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A >= 48 && A <= 57 || // 0-9
    A === 95 || // _
    A === 36;
  }
  function fe(k) {
    return ee(k, he);
  }
  function P(k) {
    const A = k.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A >= 48 && A <= 57 || // 0-9
    A === 95 || // _
    A === 36 || // $
    A === 45;
  }
  function $(k) {
    return ee(k, P);
  }
  function B(k) {
    const A = k.charCodeAt(0);
    return A >= 48 && A <= 57;
  }
  function le(k) {
    return ee(k, B);
  }
  function te(k) {
    const A = k.charCodeAt(0);
    return A >= 48 && A <= 57 || // 0-9
    A >= 65 && A <= 70 || // A-F
    A >= 97 && A <= 102;
  }
  function ge(k) {
    return ee(k, te);
  }
  function Y(k) {
    let A = "", D = "";
    for (; A = le(k); )
      D += A;
    return D;
  }
  function Ue(k) {
    let A = "";
    for (; ; ) {
      const D = k.currentChar();
      if (D === "{" || D === "}" || D === "@" || D === "|" || !D)
        break;
      if (D === pn || D === At)
        if (ue(k))
          A += D, k.next();
        else {
          if (Q(k))
            break;
          A += D, k.next();
        }
      else
        A += D, k.next();
    }
    return A;
  }
  function Ee(k) {
    E(k);
    let A = "", D = "";
    for (; A = $(k); )
      D += A;
    const K = k.currentChar();
    if (K && K !== "}" && K !== xn && K !== pn && K !== At && K !== "　") {
      const ke = ot(k);
      return p(Re.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, D + ke), D + ke;
    }
    return k.currentChar() === xn && p(Re.UNTERMINATED_CLOSING_BRACE, a(), 0), D;
  }
  function ye(k) {
    E(k);
    let A = "";
    return k.currentChar() === "-" ? (k.next(), A += `-${Y(k)}`) : A += Y(k), k.currentChar() === xn && p(Re.UNTERMINATED_CLOSING_BRACE, a(), 0), A;
  }
  function ze(k) {
    return k !== Dl && k !== At;
  }
  function we(k) {
    E(k), g(k, "'");
    let A = "", D = "";
    for (; A = ee(k, ze); )
      A === "\\" ? D += $e(k) : D += A;
    const K = k.currentChar();
    return K === At || K === xn ? (p(Re.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), K === At && (k.next(), g(k, "'")), D) : (g(k, "'"), D);
  }
  function $e(k) {
    const A = k.currentChar();
    switch (A) {
      case "\\":
      case "'":
        return k.next(), `\\${A}`;
      case "u":
        return ie(k, A, 4);
      case "U":
        return ie(k, A, 6);
      default:
        return p(Re.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, A), "";
    }
  }
  function ie(k, A, D) {
    g(k, A);
    let K = "";
    for (let ke = 0; ke < D; ke++) {
      const ce = ge(k);
      if (!ce) {
        p(Re.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${A}${K}${k.currentChar()}`);
        break;
      }
      K += ce;
    }
    return `\\${A}${K}`;
  }
  function Ke(k) {
    return k !== "{" && k !== "}" && k !== pn && k !== At;
  }
  function ot(k) {
    E(k);
    let A = "", D = "";
    for (; A = ee(k, Ke); )
      D += A;
    return D;
  }
  function He(k) {
    let A = "", D = "";
    for (; A = fe(k); )
      D += A;
    return D;
  }
  function bt(k) {
    const A = (D) => {
      const K = k.currentChar();
      return K === "{" || K === "@" || K === "|" || K === "(" || K === ")" || !K || K === pn ? D : (D += K, k.next(), A(D));
    };
    return A("");
  }
  function at(k) {
    E(k);
    const A = g(
      k,
      "|"
      /* TokenChars.Pipe */
    );
    return E(k), A;
  }
  function ft(k, A) {
    let D = null;
    switch (k.currentChar()) {
      case "{":
        return A.braceNest >= 1 && p(Re.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), k.next(), D = h(
          A,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), E(k), A.braceNest++, D;
      case "}":
        return A.braceNest > 0 && A.currentType === 2 && p(Re.EMPTY_PLACEHOLDER, a(), 0), k.next(), D = h(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), A.braceNest--, A.braceNest > 0 && E(k), A.inLinked && A.braceNest === 0 && (A.inLinked = !1), D;
      case "@":
        return A.braceNest > 0 && p(Re.UNTERMINATED_CLOSING_BRACE, a(), 0), D = dt(k, A) || b(A), A.braceNest = 0, D;
      default: {
        let ke = !0, ce = !0, m = !0;
        if (Q(k))
          return A.braceNest > 0 && p(Re.UNTERMINATED_CLOSING_BRACE, a(), 0), D = h(A, 1, at(k)), A.braceNest = 0, A.inLinked = !1, D;
        if (A.braceNest > 0 && (A.currentType === 4 || A.currentType === 5 || A.currentType === 6))
          return p(Re.UNTERMINATED_CLOSING_BRACE, a(), 0), A.braceNest = 0, We(k, A);
        if (ke = I(k, A))
          return D = h(A, 4, Ee(k)), E(k), D;
        if (ce = T(k, A))
          return D = h(A, 5, ye(k)), E(k), D;
        if (m = _(k, A))
          return D = h(A, 6, we(k)), E(k), D;
        if (!ke && !ce && !m)
          return D = h(A, 12, ot(k)), p(Re.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, D.value), E(k), D;
        break;
      }
    }
    return D;
  }
  function dt(k, A) {
    const { currentType: D } = A;
    let K = null;
    const ke = k.currentChar();
    switch ((D === 7 || D === 8 || D === 11 || D === 9) && (ke === At || ke === pn) && p(Re.INVALID_LINKED_FORMAT, a(), 0), ke) {
      case "@":
        return k.next(), K = h(
          A,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), A.inLinked = !0, K;
      case ".":
        return E(k), k.next(), h(
          A,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return E(k), k.next(), h(
          A,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return Q(k) ? (K = h(A, 1, at(k)), A.braceNest = 0, A.inLinked = !1, K) : O(k, A) || W(k, A) ? (E(k), dt(k, A)) : L(k, A) ? (E(k), h(A, 11, He(k))) : G(k, A) ? (E(k), ke === "{" ? ft(k, A) || K : h(A, 10, bt(k))) : (D === 7 && p(Re.INVALID_LINKED_FORMAT, a(), 0), A.braceNest = 0, A.inLinked = !1, We(k, A));
    }
  }
  function We(k, A) {
    let D = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (A.braceNest > 0)
      return ft(k, A) || b(A);
    if (A.inLinked)
      return dt(k, A) || b(A);
    switch (k.currentChar()) {
      case "{":
        return ft(k, A) || b(A);
      case "}":
        return p(Re.UNBALANCED_CLOSING_BRACE, a(), 0), k.next(), h(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return dt(k, A) || b(A);
      default: {
        if (Q(k))
          return D = h(A, 1, at(k)), A.braceNest = 0, A.inLinked = !1, D;
        if (ue(k))
          return h(A, 0, Ue(k));
        break;
      }
    }
    return D;
  }
  function ut() {
    const { currentType: k, offset: A, startLoc: D, endLoc: K } = l;
    return l.lastType = k, l.lastOffset = A, l.lastStartLoc = D, l.lastEndLoc = K, l.offset = o(), l.startLoc = a(), r.currentChar() === xn ? h(
      l,
      13
      /* TokenTypes.EOF */
    ) : We(r, l);
  }
  return {
    nextToken: ut,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const Xd = "parser", Qd = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Jd(e, t, n) {
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
function ep(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(d, S, I, T, ..._) {
    const O = d.currentPosition();
    if (O.offset += T, O.column += T, n) {
      const L = t ? os(I, O) : null, W = ba(S, L, {
        domain: Xd,
        args: _
      });
      n(W);
    }
  }
  function o(d, S, I) {
    const T = { type: d };
    return t && (T.start = S, T.end = S, T.loc = { start: I, end: I }), T;
  }
  function a(d, S, I, T) {
    t && (d.end = S, d.loc && (d.loc.end = I));
  }
  function s(d, S) {
    const I = d.context(), T = o(3, I.offset, I.startLoc);
    return T.value = S, a(T, d.currentOffset(), d.currentPosition()), T;
  }
  function i(d, S) {
    const I = d.context(), { lastOffset: T, lastStartLoc: _ } = I, O = o(5, T, _);
    return O.index = parseInt(S, 10), d.nextToken(), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function l(d, S) {
    const I = d.context(), { lastOffset: T, lastStartLoc: _ } = I, O = o(4, T, _);
    return O.key = S, d.nextToken(), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function u(d, S) {
    const I = d.context(), { lastOffset: T, lastStartLoc: _ } = I, O = o(9, T, _);
    return O.value = S.replace(Qd, Jd), d.nextToken(), a(O, d.currentOffset(), d.currentPosition()), O;
  }
  function f(d) {
    const S = d.nextToken(), I = d.context(), { lastOffset: T, lastStartLoc: _ } = I, O = o(8, T, _);
    return S.type !== 11 ? (r(d, Re.UNEXPECTED_EMPTY_LINKED_MODIFIER, I.lastStartLoc, 0), O.value = "", a(O, T, _), {
      nextConsumeToken: S,
      node: O
    }) : (S.value == null && r(d, Re.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, mn(S)), O.value = S.value || "", a(O, d.currentOffset(), d.currentPosition()), {
      node: O
    });
  }
  function p(d, S) {
    const I = d.context(), T = o(7, I.offset, I.startLoc);
    return T.value = S, a(T, d.currentOffset(), d.currentPosition()), T;
  }
  function h(d) {
    const S = d.context(), I = o(6, S.offset, S.startLoc);
    let T = d.nextToken();
    if (T.type === 8) {
      const _ = f(d);
      I.modifier = _.node, T = _.nextConsumeToken || d.nextToken();
    }
    switch (T.type !== 9 && r(d, Re.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, mn(T)), T = d.nextToken(), T.type === 2 && (T = d.nextToken()), T.type) {
      case 10:
        T.value == null && r(d, Re.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, mn(T)), I.key = p(d, T.value || "");
        break;
      case 4:
        T.value == null && r(d, Re.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, mn(T)), I.key = l(d, T.value || "");
        break;
      case 5:
        T.value == null && r(d, Re.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, mn(T)), I.key = i(d, T.value || "");
        break;
      case 6:
        T.value == null && r(d, Re.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, mn(T)), I.key = u(d, T.value || "");
        break;
      default: {
        r(d, Re.UNEXPECTED_EMPTY_LINKED_KEY, S.lastStartLoc, 0);
        const _ = d.context(), O = o(7, _.offset, _.startLoc);
        return O.value = "", a(O, _.offset, _.startLoc), I.key = O, a(I, _.offset, _.startLoc), {
          nextConsumeToken: T,
          node: I
        };
      }
    }
    return a(I, d.currentOffset(), d.currentPosition()), {
      node: I
    };
  }
  function b(d) {
    const S = d.context(), I = S.currentType === 1 ? d.currentOffset() : S.offset, T = S.currentType === 1 ? S.endLoc : S.startLoc, _ = o(2, I, T);
    _.items = [];
    let O = null;
    do {
      const G = O || d.nextToken();
      switch (O = null, G.type) {
        case 0:
          G.value == null && r(d, Re.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, mn(G)), _.items.push(s(d, G.value || ""));
          break;
        case 5:
          G.value == null && r(d, Re.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, mn(G)), _.items.push(i(d, G.value || ""));
          break;
        case 4:
          G.value == null && r(d, Re.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, mn(G)), _.items.push(l(d, G.value || ""));
          break;
        case 6:
          G.value == null && r(d, Re.UNEXPECTED_LEXICAL_ANALYSIS, S.lastStartLoc, 0, mn(G)), _.items.push(u(d, G.value || ""));
          break;
        case 7: {
          const Q = h(d);
          _.items.push(Q.node), O = Q.nextConsumeToken || null;
          break;
        }
      }
    } while (S.currentType !== 13 && S.currentType !== 1);
    const L = S.currentType === 1 ? S.lastOffset : d.currentOffset(), W = S.currentType === 1 ? S.lastEndLoc : d.currentPosition();
    return a(_, L, W), _;
  }
  function g(d, S, I, T) {
    const _ = d.context();
    let O = T.items.length === 0;
    const L = o(1, S, I);
    L.cases = [], L.cases.push(T);
    do {
      const W = b(d);
      O || (O = W.items.length === 0), L.cases.push(W);
    } while (_.currentType !== 13);
    return O && r(d, Re.MUST_HAVE_MESSAGES_IN_PLURAL, I, 0), a(L, d.currentOffset(), d.currentPosition()), L;
  }
  function v(d) {
    const S = d.context(), { offset: I, startLoc: T } = S, _ = b(d);
    return S.currentType === 13 ? _ : g(d, I, T, _);
  }
  function E(d) {
    const S = Zd(d, kt({}, e)), I = S.context(), T = o(0, I.offset, I.startLoc);
    return t && T.loc && (T.loc.source = d), T.body = v(S), e.onCacheKey && (T.cacheKey = e.onCacheKey(d)), I.currentType !== 13 && r(S, Re.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, d[I.offset] || ""), a(T, S.currentOffset(), S.currentPosition()), T;
  }
  return { parse: E };
}
function mn(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function tp(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Fl(e, t) {
  for (let n = 0; n < e.length; n++)
    Ps(e[n], t);
}
function Ps(e, t) {
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
      Ps(e.key, t), t.helper(
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
function np(e, t = {}) {
  const n = tp(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && Ps(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function rp(e) {
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
function Rr(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Rr(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Rr(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Rr(n[r]);
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
      Rr(t.key), t.k = t.key, delete t.key, t.modifier && (Rr(t.modifier), t.m = t.modifier, delete t.modifier);
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
function op(e, t) {
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
  function l(v, E) {
    s.code += v;
  }
  function u(v, E = !0) {
    const d = E ? r : "";
    l(o ? d + "  ".repeat(v) : d);
  }
  function f(v = !0) {
    const E = ++s.indentLevel;
    v && u(E);
  }
  function p(v = !0) {
    const E = --s.indentLevel;
    v && u(E);
  }
  function h() {
    u(s.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: f,
    deindent: p,
    newline: h,
    helper: (v) => `_${v}`,
    needIndent: () => s.needIndent
  };
}
function ap(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), Mr(e, t.key), t.modifier ? (e.push(", "), Mr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function sp(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (Mr(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function lp(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (Mr(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function ip(e, t) {
  t.body ? Mr(e, t.body) : e.push("null");
}
function Mr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ip(e, t);
      break;
    case 1:
      lp(e, t);
      break;
    case 2:
      sp(e, t);
      break;
    case 6:
      ap(e, t);
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
const cp = (e, t = {}) => {
  const n = re(t.mode) ? t.mode : "normal", r = re(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = op(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${xs(s.map((f) => `${f}: _${f}`), ", ")} } = ctx`), i.newline()), i.push("return "), Mr(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function up(e, t = {}) {
  const n = kt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = ep(n).parse(e);
  return r ? (a && rp(i), o && Rr(i), { ast: i, code: "" }) : (np(i, n), cp(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function fp() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Zo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function kn(e) {
  return Oe(e) && Ns(e) === 0 && (an(e, "b") || an(e, "body"));
}
const Wc = ["b", "body"];
function dp(e) {
  return sr(e, Wc);
}
const Gc = ["c", "cases"];
function pp(e) {
  return sr(e, Gc, []);
}
const Kc = ["s", "static"];
function mp(e) {
  return sr(e, Kc);
}
const qc = ["i", "items"];
function hp(e) {
  return sr(e, qc, []);
}
const Yc = ["t", "type"];
function Ns(e) {
  return sr(e, Yc);
}
const Zc = ["v", "value"];
function zo(e, t) {
  const n = sr(e, Zc);
  if (n != null)
    return n;
  throw vo(t);
}
const Xc = ["m", "modifier"];
function gp(e) {
  return sr(e, Xc);
}
const Qc = ["k", "key"];
function vp(e) {
  const t = sr(e, Qc);
  if (t)
    return t;
  throw vo(
    6
    /* NodeTypes.Linked */
  );
}
function sr(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (an(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const Jc = [
  ...Wc,
  ...Gc,
  ...Kc,
  ...qc,
  ...Qc,
  ...Xc,
  ...Zc,
  ...Yc
];
function vo(e) {
  return new Error(`unhandled node type: ${e}`);
}
function ja(e) {
  return (n) => bp(n, e);
}
function bp(e, t) {
  const n = dp(t);
  if (n == null)
    throw vo(
      0
      /* NodeTypes.Resource */
    );
  if (Ns(n) === 1) {
    const a = pp(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      Bl(e, i)
    ], []));
  } else
    return Bl(e, n);
}
function Bl(e, t) {
  const n = mp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = hp(t).reduce((o, a) => [...o, as(e, a)], []);
    return e.normalize(r);
  }
}
function as(e, t) {
  const n = Ns(t);
  switch (n) {
    case 3:
      return zo(t, n);
    case 9:
      return zo(t, n);
    case 4: {
      const r = t;
      if (an(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (an(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw vo(n);
    }
    case 5: {
      const r = t;
      if (an(r, "i") && ht(r.i))
        return e.interpolate(e.list(r.i));
      if (an(r, "index") && ht(r.index))
        return e.interpolate(e.list(r.index));
      throw vo(n);
    }
    case 6: {
      const r = t, o = gp(r), a = vp(r);
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
const yp = (e) => e;
let Bo = De();
function _p(e, t = {}) {
  let n = !1;
  const r = t.onError || Ud;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...up(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function wp(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && re(e)) {
    tt(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || yp)(e), o = Bo[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = _p(e, {
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
const Fn = {
  INVALID_ARGUMENT: jd,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, kp = 24;
function zn(e) {
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
      if (zd(t))
        throw zn(Fn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ua = t;
    } else
      throw zn(Fn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw zn(Fn.NOT_SUPPORT_LOCALE_TYPE);
}
function Tp(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...nt(t) ? t : Oe(t) ? Object.keys(t) : re(t) ? [t] : [n]
  ])];
}
function eu(e, t, n) {
  const r = re(n) ? n : ra, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; nt(s); )
      s = jl(a, s, t);
    const i = nt(t) || !Ce(t) ? t : t.default ? t.default : null;
    s = re(i) ? [i] : i, nt(s) && jl(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function jl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && tt(r); o++) {
    const a = t[o];
    re(a) && (r = Ep(e, t[o], n));
  }
  return r;
}
function Ep(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = Sp(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Sp(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (nt(n) || Ce(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const lr = [];
lr[
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
lr[
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
lr[
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
lr[
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
lr[
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
lr[
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
lr[
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
const Ap = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Cp(e) {
  return Ap.test(e);
}
function Op(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Lp(e) {
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
function Ip(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Cp(t) ? Op(t) : "*" + t;
}
function Rp(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, i, l, u, f, p;
  const h = [];
  h[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = i : s += i;
  }, h[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, h[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    h[
      0
      /* Actions.APPEND */
    ](), o++;
  }, h[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, r = 4, h[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, s === void 0 || (s = Ip(s), s === !1))
        return !1;
      h[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function b() {
    const g = e[n + 1];
    if (r === 5 && g === "'" || r === 6 && g === '"')
      return n++, i = "\\" + g, h[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && b())) {
      if (l = Lp(a), p = lr[r], u = p[l] || p.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (f = h[u[1]], f && (i = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Ul = /* @__PURE__ */ new Map();
function xp(e, t) {
  return Oe(e) ? e[t] : null;
}
function Pp(e, t) {
  if (!Oe(e))
    return null;
  let n = Ul.get(t);
  if (n || (n = Rp(t), n && Ul.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (Jc.includes(s) && kn(o))
      return null;
    const i = o[s];
    if (i === void 0 || Ye(o))
      return null;
    o = i, a++;
  }
  return o;
}
const Np = "11.2.2", ya = -1, ra = "en-US", Hl = "", Wl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function $p() {
  return {
    upper: (e, t) => t === "text" && re(e) ? e.toUpperCase() : t === "vnode" && Oe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && re(e) ? e.toLowerCase() : t === "vnode" && Oe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && re(e) ? Wl(e) : t === "vnode" && Oe(e) && "__v_isVNode" in e ? Wl(e.children) : e
  };
}
let tu;
function Mp(e) {
  tu = e;
}
let nu;
function Dp(e) {
  nu = e;
}
let ru;
function Fp(e) {
  ru = e;
}
let ou = null;
const Gl = (e) => {
  ou = e;
}, zp = () => ou;
let Kl = 0;
function Bp(e = {}) {
  const t = Ye(e.onWarn) ? e.onWarn : xd, n = re(e.version) ? e.version : Np, r = re(e.locale) || Ye(e.locale) ? e.locale : ra, o = Ye(r) ? ra : r, a = nt(e.fallbackLocale) || Ce(e.fallbackLocale) || re(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Ce(e.messages) ? e.messages : Ha(o), i = Ce(e.datetimeFormats) ? e.datetimeFormats : Ha(o), l = Ce(e.numberFormats) ? e.numberFormats : Ha(o), u = kt(De(), e.modifiers, $p()), f = e.pluralRules || De(), p = Ye(e.missing) ? e.missing : null, h = tt(e.missingWarn) || na(e.missingWarn) ? e.missingWarn : !0, b = tt(e.fallbackWarn) || na(e.fallbackWarn) ? e.fallbackWarn : !0, g = !!e.fallbackFormat, v = !!e.unresolving, E = Ye(e.postTranslation) ? e.postTranslation : null, d = Ce(e.processor) ? e.processor : null, S = tt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, I = !!e.escapeParameter, T = Ye(e.messageCompiler) ? e.messageCompiler : tu, _ = Ye(e.messageResolver) ? e.messageResolver : nu || xp, O = Ye(e.localeFallbacker) ? e.localeFallbacker : ru || Tp, L = Oe(e.fallbackContext) ? e.fallbackContext : void 0, W = e, G = Oe(W.__datetimeFormatters) ? W.__datetimeFormatters : /* @__PURE__ */ new Map(), Q = Oe(W.__numberFormatters) ? W.__numberFormatters : /* @__PURE__ */ new Map(), ue = Oe(W.__meta) ? W.__meta : {};
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
    missingWarn: h,
    fallbackWarn: b,
    fallbackFormat: g,
    unresolving: v,
    postTranslation: E,
    processor: d,
    warnHtmlMessage: S,
    escapeParameter: I,
    messageCompiler: T,
    messageResolver: _,
    localeFallbacker: O,
    fallbackContext: L,
    onWarn: t,
    __meta: ue
  };
  return ee.datetimeFormats = i, ee.numberFormats = l, ee.__datetimeFormatters = G, ee.__numberFormatters = Q, ee;
}
const Ha = (e) => ({ [e]: De() });
function Ms(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return re(i) ? i : t;
  } else
    return t;
}
function Qr(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Vp(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function jp(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Vp(e, t[r]))
      return !0;
  return !1;
}
function ql(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, f, p] = ss(...t), h = tt(f.missingWarn) ? f.missingWarn : e.missingWarn;
  tt(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const b = !!f.part, g = $s(e, f), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!re(l) || l === "")
    return new Intl.DateTimeFormat(g, p).format(u);
  let E = {}, d, S = null;
  const I = "datetime format";
  for (let O = 0; O < v.length && (d = v[O], E = n[d] || {}, S = E[l], !Ce(S)); O++)
    Ms(e, l, d, h, I);
  if (!Ce(S) || !re(d))
    return r ? ya : l;
  let T = `${d}__${l}`;
  va(p) || (T = `${T}__${JSON.stringify(p)}`);
  let _ = i.get(T);
  return _ || (_ = new Intl.DateTimeFormat(d, kt({}, S, p)), i.set(T, _)), b ? _.formatToParts(u) : _.format(u);
}
const au = [
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
  if (re(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw zn(Fn.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw zn(Fn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if ($d(t)) {
    if (isNaN(t.getTime()))
      throw zn(Fn.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (ht(t))
    i = t;
  else
    throw zn(Fn.INVALID_ARGUMENT);
  return re(n) ? a.key = n : Ce(n) && Object.keys(n).forEach((l) => {
    au.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), re(r) ? a.locale = r : Ce(r) && (s = r), Ce(o) && (s = o), [a.key || "", i, a, s];
}
function Yl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function Zl(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, f, p] = ls(...t), h = tt(f.missingWarn) ? f.missingWarn : e.missingWarn;
  tt(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn;
  const b = !!f.part, g = $s(e, f), v = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    g
  );
  if (!re(l) || l === "")
    return new Intl.NumberFormat(g, p).format(u);
  let E = {}, d, S = null;
  const I = "number format";
  for (let O = 0; O < v.length && (d = v[O], E = n[d] || {}, S = E[l], !Ce(S)); O++)
    Ms(e, l, d, h, I);
  if (!Ce(S) || !re(d))
    return r ? ya : l;
  let T = `${d}__${l}`;
  va(p) || (T = `${T}__${JSON.stringify(p)}`);
  let _ = i.get(T);
  return _ || (_ = new Intl.NumberFormat(d, kt({}, S, p)), i.set(T, _)), b ? _.formatToParts(u) : _.format(u);
}
const su = [
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
  if (!ht(t))
    throw zn(Fn.INVALID_ARGUMENT);
  const i = t;
  return re(n) ? a.key = n : Ce(n) && Object.keys(n).forEach((l) => {
    su.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), re(r) ? a.locale = r : Ce(r) && (s = r), Ce(o) && (s = o), [a.key || "", i, a, s];
}
function Xl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Up = (e) => e, Hp = (e) => "", Wp = "text", Gp = (e) => e.length === 0 ? "" : xs(e), Kp = Bd;
function Ql(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function qp(e) {
  const t = ht(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (ht(e.named.count) || ht(e.named.n)) ? ht(e.named.count) ? e.named.count : ht(e.named.n) ? e.named.n : t : t;
}
function Yp(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Zp(e = {}) {
  const t = e.locale, n = qp(e), r = Oe(e.pluralRules) && re(t) && Ye(e.pluralRules[t]) ? e.pluralRules[t] : Ql, o = Oe(e.pluralRules) && re(t) && Ye(e.pluralRules[t]) ? Ql : void 0, a = (d) => d[r(n, d.length, o)], s = e.list || [], i = (d) => s[d], l = e.named || De();
  ht(e.pluralIndex) && Yp(n, l);
  const u = (d) => l[d];
  function f(d, S) {
    const I = Ye(e.messages) ? e.messages(d, !!S) : Oe(e.messages) ? e.messages[d] : !1;
    return I || (e.parent ? e.parent.message(d) : Hp);
  }
  const p = (d) => e.modifiers ? e.modifiers[d] : Up, h = Ce(e.processor) && Ye(e.processor.normalize) ? e.processor.normalize : Gp, b = Ce(e.processor) && Ye(e.processor.interpolate) ? e.processor.interpolate : Kp, g = Ce(e.processor) && re(e.processor.type) ? e.processor.type : Wp, E = {
    list: i,
    named: u,
    plural: a,
    linked: (d, ...S) => {
      const [I, T] = S;
      let _ = "text", O = "";
      S.length === 1 ? Oe(I) ? (O = I.modifier || O, _ = I.type || _) : re(I) && (O = I || O) : S.length === 2 && (re(I) && (O = I || O), re(T) && (_ = T || _));
      const L = f(d, !0)(E), W = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        _ === "vnode" && nt(L) && O ? L[0] : L
      );
      return O ? p(O)(W, _) : W;
    },
    message: f,
    type: g,
    interpolate: b,
    normalize: h,
    values: kt(De(), s, l)
  };
  return E;
}
const Jl = () => "", Vn = (e) => Ye(e);
function ei(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = is(...t), f = tt(u.missingWarn) ? u.missingWarn : e.missingWarn, p = tt(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, h = tt(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, b = !!u.resolvedMessage, g = re(u.default) || tt(u.default) ? tt(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, v = n || g != null && (re(g) || Ye(g)), E = $s(e, u);
  h && Xp(u);
  let [d, S, I] = b ? [
    l,
    E,
    i[E] || De()
  ] : lu(e, l, E, s, p, f), T = d, _ = l;
  if (!b && !(re(T) || kn(T) || Vn(T)) && v && (T = g, _ = T), !b && (!(re(T) || kn(T) || Vn(T)) || !re(S)))
    return o ? ya : l;
  let O = !1;
  const L = () => {
    O = !0;
  }, W = Vn(T) ? T : iu(e, l, S, T, _, L);
  if (O)
    return T;
  const G = em(e, S, I, u), Q = Zp(G), ue = Qp(e, W, Q);
  let ee = r ? r(ue, l) : ue;
  return h && re(ee) && (ee = Dd(ee)), ee;
}
function Xp(e) {
  nt(e.list) ? e.list = e.list.map((t) => re(t) ? $l(t) : t) : Oe(e.named) && Object.keys(e.named).forEach((t) => {
    re(e.named[t]) && (e.named[t] = $l(e.named[t]));
  });
}
function lu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, f = u(e, r, n);
  let p = De(), h, b = null;
  const g = "translate";
  for (let v = 0; v < f.length && (h = f[v], p = s[h] || De(), (b = l(p, t)) === null && (b = p[t]), !(re(b) || kn(b) || Vn(b))); v++)
    if (!jp(h, f)) {
      const E = Ms(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        h,
        a,
        g
      );
      E !== t && (b = E);
    }
  return [b, h, p];
}
function iu(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (Vn(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, Jp(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function Qp(e, t, n) {
  return t(n);
}
function is(...e) {
  const [t, n, r] = e, o = De();
  if (!re(t) && !ht(t) && !Vn(t) && !kn(t))
    throw zn(Fn.INVALID_ARGUMENT);
  const a = ht(t) ? String(t) : (Vn(t), t);
  return ht(n) ? o.plural = n : re(n) ? o.default = n : Ce(n) && !va(n) ? o.named = n : nt(n) && (o.list = n), ht(r) ? o.plural = r : re(r) ? o.default = r : Ce(r) && kt(o, r), [a, o];
}
function Jp(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => Pd(t, n, s)
  };
}
function em(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: f } = e, h = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (b, g) => {
      let v = s(n, b);
      if (v == null && (f || g)) {
        const [, , E] = lu(
          f || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          b,
          t,
          i,
          l,
          u
        );
        v = s(E, b);
      }
      if (re(v) || kn(v)) {
        let E = !1;
        const S = iu(e, b, t, v, b, () => {
          E = !0;
        });
        return E ? Jl : S;
      } else return Vn(v) ? v : Jl;
    }
  };
  return e.processor && (h.processor = e.processor), r.list && (h.list = r.list), r.named && (h.named = r.named), ht(r.plural) && (h.pluralIndex = r.plural), h;
}
fp();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const tm = "11.2.2";
function nm() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Zo().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Zo().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Zo().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Dr = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: kp,
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
function bo(e, ...t) {
  return ba(e, null, void 0);
}
const cs = /* @__PURE__ */ br("__translateVNode"), us = /* @__PURE__ */ br("__datetimeParts"), fs = /* @__PURE__ */ br("__numberParts"), rm = br("__setPluralRules"), cu = /* @__PURE__ */ br("__injectWithOption"), ds = /* @__PURE__ */ br("__dispose");
function yo(e) {
  if (!Oe(e) || kn(e))
    return e;
  for (const t in e)
    if (an(e, t))
      if (!t.includes("."))
        Oe(e[t]) && yo(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = De()), !Oe(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (kn(o) ? Jc.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !kn(o)) {
          const s = o[n[r]];
          Oe(s) && yo(s);
        }
      }
  return e;
}
function uu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Ce(n) ? n : nt(r) ? De() : { [e]: De() };
  if (nt(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || De(), Xo(u, s[l])) : Xo(u, s);
    } else
      re(i) && Xo(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      an(s, i) && yo(s[i]);
  return s;
}
function om(e) {
  return e.type;
}
function am(e, t, n) {
  let r = Oe(t.messages) ? t.messages : De();
  "__i18nGlobal" in n && (r = uu(e.locale.value, {
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
  return M(Vc, null, e, 0);
}
function fu() {
  return "currentInstance" in Va ? Va["currentInstance"] : Va.getCurrentInstance();
}
const ni = () => [], sm = () => !1;
let ri = 0;
function oi(e) {
  return (t, n, r, o) => e(n, r, fu() || void 0, o);
}
function lm(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = Pl ? j : rr;
  let s = tt(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : re(e.locale) ? e.locale : ra
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : re(e.fallbackLocale) || nt(e.fallbackLocale) || Ce(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(uu(i.value, e)), f = a(Ce(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), p = a(Ce(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let h = t ? t.missingWarn : tt(e.missingWarn) || na(e.missingWarn) ? e.missingWarn : !0, b = t ? t.fallbackWarn : tt(e.fallbackWarn) || na(e.fallbackWarn) ? e.fallbackWarn : !0, g = t ? t.fallbackRoot : tt(e.fallbackRoot) ? e.fallbackRoot : !0, v = !!e.fallbackFormat, E = Ye(e.missing) ? e.missing : null, d = Ye(e.missing) ? oi(e.missing) : null, S = Ye(e.postTranslation) ? e.postTranslation : null, I = t ? t.warnHtmlMessage : tt(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, T = !!e.escapeParameter;
  const _ = t ? t.modifiers : Ce(e.modifiers) ? e.modifiers : {};
  let O = e.pluralRules || t && t.pluralRules, L;
  L = (() => {
    r && Gl(null);
    const m = {
      version: tm,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: _,
      pluralRules: O,
      missing: d === null ? void 0 : d,
      missingWarn: h,
      fallbackWarn: b,
      fallbackFormat: v,
      unresolving: !0,
      postTranslation: S === null ? void 0 : S,
      warnHtmlMessage: I,
      escapeParameter: T,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    m.datetimeFormats = f.value, m.numberFormats = p.value, m.__datetimeFormatters = Ce(L) ? L.__datetimeFormatters : void 0, m.__numberFormatters = Ce(L) ? L.__numberFormatters : void 0;
    const C = Bp(m);
    return r && Gl(C), C;
  })(), Qr(L, i.value, l.value);
  function G() {
    return [
      i.value,
      l.value,
      u.value,
      f.value,
      p.value
    ];
  }
  const Q = R({
    get: () => i.value,
    set: (m) => {
      L.locale = m, i.value = m;
    }
  }), ue = R({
    get: () => l.value,
    set: (m) => {
      L.fallbackLocale = m, l.value = m, Qr(L, i.value, m);
    }
  }), ee = R(() => u.value), he = /* @__PURE__ */ R(() => f.value), fe = /* @__PURE__ */ R(() => p.value);
  function P() {
    return Ye(S) ? S : null;
  }
  function $(m) {
    S = m, L.postTranslation = m;
  }
  function B() {
    return E;
  }
  function le(m) {
    m !== null && (d = oi(m)), E = m, L.missing = d;
  }
  const te = (m, C, F, J, pe, Le) => {
    G();
    let Se;
    try {
      r || (L.fallbackContext = t ? zp() : void 0), Se = m(L);
    } finally {
      r || (L.fallbackContext = void 0);
    }
    if (F !== "translate exists" && // for not `te` (e.g `t`)
    ht(Se) && Se === ya || F === "translate exists" && !Se) {
      const [yt, en] = C();
      return t && g ? J(t) : pe(yt);
    } else {
      if (Le(Se))
        return Se;
      throw bo(Dr.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ge(...m) {
    return te((C) => Reflect.apply(ei, null, [C, ...m]), () => is(...m), "translate", (C) => Reflect.apply(C.t, C, [...m]), (C) => C, (C) => re(C));
  }
  function Y(...m) {
    const [C, F, J] = m;
    if (J && !Oe(J))
      throw bo(Dr.INVALID_ARGUMENT);
    return ge(C, F, kt({ resolvedMessage: !0 }, J || {}));
  }
  function Ue(...m) {
    return te((C) => Reflect.apply(ql, null, [C, ...m]), () => ss(...m), "datetime format", (C) => Reflect.apply(C.d, C, [...m]), () => Hl, (C) => re(C) || nt(C));
  }
  function Ee(...m) {
    return te((C) => Reflect.apply(Zl, null, [C, ...m]), () => ls(...m), "number format", (C) => Reflect.apply(C.n, C, [...m]), () => Hl, (C) => re(C) || nt(C));
  }
  function ye(m) {
    return m.map((C) => re(C) || ht(C) || tt(C) ? ti(String(C)) : C);
  }
  const we = {
    normalize: ye,
    interpolate: (m) => m,
    type: "vnode"
  };
  function $e(...m) {
    return te((C) => {
      let F;
      const J = C;
      try {
        J.processor = we, F = Reflect.apply(ei, null, [J, ...m]);
      } finally {
        J.processor = null;
      }
      return F;
    }, () => is(...m), "translate", (C) => C[cs](...m), (C) => [ti(C)], (C) => nt(C));
  }
  function ie(...m) {
    return te((C) => Reflect.apply(Zl, null, [C, ...m]), () => ls(...m), "number format", (C) => C[fs](...m), ni, (C) => re(C) || nt(C));
  }
  function Ke(...m) {
    return te((C) => Reflect.apply(ql, null, [C, ...m]), () => ss(...m), "datetime format", (C) => C[us](...m), ni, (C) => re(C) || nt(C));
  }
  function ot(m) {
    O = m, L.pluralRules = O;
  }
  function He(m, C) {
    return te(() => {
      if (!m)
        return !1;
      const F = re(C) ? C : i.value, J = ft(F), pe = L.messageResolver(J, m);
      return kn(pe) || Vn(pe) || re(pe);
    }, () => [m], "translate exists", (F) => Reflect.apply(F.te, F, [m, C]), sm, (F) => tt(F));
  }
  function bt(m) {
    let C = null;
    const F = eu(L, l.value, i.value);
    for (let J = 0; J < F.length; J++) {
      const pe = u.value[F[J]] || {}, Le = L.messageResolver(pe, m);
      if (Le != null) {
        C = Le;
        break;
      }
    }
    return C;
  }
  function at(m) {
    const C = bt(m);
    return C ?? (t ? t.tm(m) || {} : {});
  }
  function ft(m) {
    return u.value[m] || {};
  }
  function dt(m, C) {
    if (o) {
      const F = { [m]: C };
      for (const J in F)
        an(F, J) && yo(F[J]);
      C = F[m];
    }
    u.value[m] = C, L.messages = u.value;
  }
  function We(m, C) {
    u.value[m] = u.value[m] || {};
    const F = { [m]: C };
    if (o)
      for (const J in F)
        an(F, J) && yo(F[J]);
    C = F[m], Xo(C, u.value[m]), L.messages = u.value;
  }
  function ut(m) {
    return f.value[m] || {};
  }
  function k(m, C) {
    f.value[m] = C, L.datetimeFormats = f.value, Yl(L, m, C);
  }
  function A(m, C) {
    f.value[m] = kt(f.value[m] || {}, C), L.datetimeFormats = f.value, Yl(L, m, C);
  }
  function D(m) {
    return p.value[m] || {};
  }
  function K(m, C) {
    p.value[m] = C, L.numberFormats = p.value, Xl(L, m, C);
  }
  function ke(m, C) {
    p.value[m] = kt(p.value[m] || {}, C), L.numberFormats = p.value, Xl(L, m, C);
  }
  ri++, t && Pl && (ve(t.locale, (m) => {
    s && (i.value = m, L.locale = m, Qr(L, i.value, l.value));
  }), ve(t.fallbackLocale, (m) => {
    s && (l.value = m, L.fallbackLocale = m, Qr(L, i.value, l.value));
  }));
  const ce = {
    id: ri,
    locale: Q,
    fallbackLocale: ue,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(m) {
      s = m, m && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, Qr(L, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: ee,
    get modifiers() {
      return _;
    },
    get pluralRules() {
      return O || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return h;
    },
    set missingWarn(m) {
      h = m, L.missingWarn = h;
    },
    get fallbackWarn() {
      return b;
    },
    set fallbackWarn(m) {
      b = m, L.fallbackWarn = b;
    },
    get fallbackRoot() {
      return g;
    },
    set fallbackRoot(m) {
      g = m;
    },
    get fallbackFormat() {
      return v;
    },
    set fallbackFormat(m) {
      v = m, L.fallbackFormat = v;
    },
    get warnHtmlMessage() {
      return I;
    },
    set warnHtmlMessage(m) {
      I = m, L.warnHtmlMessage = m;
    },
    get escapeParameter() {
      return T;
    },
    set escapeParameter(m) {
      T = m, L.escapeParameter = m;
    },
    t: ge,
    getLocaleMessage: ft,
    setLocaleMessage: dt,
    mergeLocaleMessage: We,
    getPostTranslationHandler: P,
    setPostTranslationHandler: $,
    getMissingHandler: B,
    setMissingHandler: le,
    [rm]: ot
  };
  return ce.datetimeFormats = he, ce.numberFormats = fe, ce.rt = Y, ce.te = He, ce.tm = at, ce.d = Ue, ce.n = Ee, ce.getDateTimeFormat = ut, ce.setDateTimeFormat = k, ce.mergeDateTimeFormat = A, ce.getNumberFormat = D, ce.setNumberFormat = K, ce.mergeNumberFormat = ke, ce[cu] = n, ce[cs] = $e, ce[us] = Ke, ce[fs] = ie, ce;
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
function im({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === Ct ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, De());
}
function du() {
  return Ct;
}
kt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => ht(e) || !isNaN(e)
  }
}, Ds);
function cm(e) {
  return nt(e) && !re(e[0]);
}
function pu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = De();
    e.locale && (s.locale = e.locale), re(e.format) ? s.key = e.format : Oe(e.format) && (re(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((h, b) => n.includes(b) ? kt(De(), h, { [b]: e.format[b] }) : h, De()));
    const l = r(e.value, s, i);
    let u = [s.key];
    nt(l) ? u = l.map((h, b) => {
      const g = o[h.type], v = g ? g({ [h.type]: h.value, index: b, parts: l }) : [h.value];
      return cm(v) && (v[0].key = `${h.type}-${b}`), v;
    }) : re(l) && (u = [l]);
    const f = kt(De(), a), p = re(e.tag) || Oe(e.tag) ? e.tag : du();
    return Bc(p, f, u);
  };
}
kt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ds);
const um = /* @__PURE__ */ br("global-vue-i18n");
function So(e = {}) {
  const t = fu();
  if (t == null)
    throw bo(Dr.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw bo(Dr.NOT_INSTALLED);
  const n = fm(t), r = pm(n), o = om(t), a = dm(e, o);
  if (a === "global")
    return am(r, e, o), r;
  if (a === "parent") {
    let l = mm(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = kt({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = lm(l), s.__composerExtend && (i[ds] = s.__composerExtend(i)), gm(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function fm(e) {
  const t = Ne(e.isCE ? um : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw bo(e.isCE ? Dr.NOT_INSTALLED_WITH_PROVIDE : Dr.UNEXPECTED_ERROR);
  return t;
}
function dm(e, t) {
  return va(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function pm(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function mm(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = hm(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[cu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function hm(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function gm(e, t, n) {
  rt(() => {
  }, t), ga(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[ds];
    o && (o(), delete r[ds]);
  }, t);
}
kt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, Ds);
nm();
Mp(wp);
Dp(Pp);
Fp(eu);
function Fs() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var yr = Fs();
function mu(e) {
  yr = e;
}
var io = { exec: () => null };
function Ae(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Nt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var vm = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Nt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, bm = /^(?:[ \t]*(?:\n|$))+/, ym = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, _m = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ao = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, wm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, zs = /(?:[*+-]|\d{1,9}[.)])/, hu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, gu = Ae(hu).replace(/bull/g, zs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), km = Ae(hu).replace(/bull/g, zs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Bs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Tm = /^[^\n]+/, Vs = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Em = Ae(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Vs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Sm = Ae(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, zs).getRegex(), _a = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", js = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Am = Ae("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", js).replace("tag", _a).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), vu = Ae(Bs).replace("hr", Ao).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _a).getRegex(), Cm = Ae(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", vu).getRegex(), Us = { blockquote: Cm, code: ym, def: Em, fences: _m, heading: wm, hr: Ao, html: Am, lheading: gu, list: Sm, newline: bm, paragraph: vu, table: io, text: Tm }, ai = Ae("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Ao).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _a).getRegex(), Om = { ...Us, lheading: km, table: ai, paragraph: Ae(Bs).replace("hr", Ao).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ai).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _a).getRegex() }, Lm = { ...Us, html: Ae(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", js).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: io, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Ae(Bs).replace("hr", Ao).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", gu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Im = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Rm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, bu = /^( {2,}|\\)\n(?!\s*$)/, xm = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, wa = /[\p{P}\p{S}]/u, Hs = /[\s\p{P}\p{S}]/u, yu = /[^\s\p{P}\p{S}]/u, Pm = Ae(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Hs).getRegex(), _u = /(?!~)[\p{P}\p{S}]/u, Nm = /(?!~)[\s\p{P}\p{S}]/u, $m = /(?:[^\s\p{P}\p{S}]|~)/u, Mm = Ae(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", vm ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), wu = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Dm = Ae(wu, "u").replace(/punct/g, wa).getRegex(), Fm = Ae(wu, "u").replace(/punct/g, _u).getRegex(), ku = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", zm = Ae(ku, "gu").replace(/notPunctSpace/g, yu).replace(/punctSpace/g, Hs).replace(/punct/g, wa).getRegex(), Bm = Ae(ku, "gu").replace(/notPunctSpace/g, $m).replace(/punctSpace/g, Nm).replace(/punct/g, _u).getRegex(), Vm = Ae("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, yu).replace(/punctSpace/g, Hs).replace(/punct/g, wa).getRegex(), jm = Ae(/\\(punct)/, "gu").replace(/punct/g, wa).getRegex(), Um = Ae(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Hm = Ae(js).replace("(?:-->|$)", "-->").getRegex(), Wm = Ae("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Hm).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), oa = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Gm = Ae(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", oa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Tu = Ae(/^!?\[(label)\]\[(ref)\]/).replace("label", oa).replace("ref", Vs).getRegex(), Eu = Ae(/^!?\[(ref)\](?:\[\])?/).replace("ref", Vs).getRegex(), Km = Ae("reflink|nolink(?!\\()", "g").replace("reflink", Tu).replace("nolink", Eu).getRegex(), si = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Ws = { _backpedal: io, anyPunctuation: jm, autolink: Um, blockSkip: Mm, br: bu, code: Rm, del: io, emStrongLDelim: Dm, emStrongRDelimAst: zm, emStrongRDelimUnd: Vm, escape: Im, link: Gm, nolink: Eu, punctuation: Pm, reflink: Tu, reflinkSearch: Km, tag: Wm, text: xm, url: io }, qm = { ...Ws, link: Ae(/^!?\[(label)\]\((.*?)\)/).replace("label", oa).getRegex(), reflink: Ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", oa).getRegex() }, ps = { ...Ws, emStrongRDelimAst: Bm, emStrongLDelim: Fm, url: Ae(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", si).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Ae(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", si).getRegex() }, Ym = { ...ps, br: Ae(bu).replace("{2,}", "*").getRegex(), text: Ae(ps.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Vo = { normal: Us, gfm: Om, pedantic: Lm }, Jr = { normal: Ws, gfm: ps, breaks: Ym, pedantic: qm }, Zm = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, li = (e) => Zm[e];
function Pn(e, t) {
  if (t) {
    if (Nt.escapeTest.test(e)) return e.replace(Nt.escapeReplace, li);
  } else if (Nt.escapeTestNoEncode.test(e)) return e.replace(Nt.escapeReplaceNoEncode, li);
  return e;
}
function ii(e) {
  try {
    e = encodeURI(e).replace(Nt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function ci(e, t) {
  let n = e.replace(Nt.findPipe, (a, s, i) => {
    let l = !1, u = s;
    for (; --u >= 0 && i[u] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), r = n.split(Nt.splitPipe), o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; o < r.length; o++) r[o] = r[o].trim().replace(Nt.slashPipe, "|");
  return r;
}
function eo(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r && e.charAt(r - o - 1) === t; )
    o++;
  return e.slice(0, r - o);
}
function Xm(e, t) {
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
function Qm(e, t, n) {
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
    this.options = e || yr;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : eo(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Qm(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = eo(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: eo(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = eo(t[0], `
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
        let h = a.at(-1);
        if (h?.type === "code") break;
        if (h?.type === "blockquote") {
          let b = h, g = b.raw + `
` + n.join(`
`), v = this.blockquote(g);
          a[a.length - 1] = v, r = r.substring(0, r.length - b.raw.length) + v.raw, o = o.substring(0, o.length - b.text.length) + v.text;
          break;
        } else if (h?.type === "list") {
          let b = h, g = b.raw + `
` + n.join(`
`), v = this.list(g);
          a[a.length - 1] = v, r = r.substring(0, r.length - h.raw.length) + v.raw, o = o.substring(0, o.length - b.raw.length) + v.raw, n = g.substring(a.at(-1).raw.length).split(`
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
`, 1)[0].replace(this.rules.other.listReplaceTabs, (v) => " ".repeat(3 * v.length)), h = e.split(`
`, 1)[0], b = !p.trim(), g = 0;
        if (this.options.pedantic ? (g = 2, f = p.trimStart()) : b ? g = t[1].length + 1 : (g = t[2].search(this.rules.other.nonSpaceChar), g = g > 4 ? 1 : g, f = p.slice(g), g += t[1].length), b && this.rules.other.blankLine.test(h) && (u += h + `
`, e = e.substring(h.length + 1), l = !0), !l) {
          let v = this.rules.other.nextBulletRegex(g), E = this.rules.other.hrRegex(g), d = this.rules.other.fencesBeginRegex(g), S = this.rules.other.headingBeginRegex(g), I = this.rules.other.htmlBeginRegex(g);
          for (; e; ) {
            let T = e.split(`
`, 1)[0], _;
            if (h = T, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), _ = h) : _ = h.replace(this.rules.other.tabCharGlobal, "    "), d.test(h) || S.test(h) || I.test(h) || v.test(h) || E.test(h)) break;
            if (_.search(this.rules.other.nonSpaceChar) >= g || !h.trim()) f += `
` + _.slice(g);
            else {
              if (b || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || d.test(p) || S.test(p) || E.test(p)) break;
              f += `
` + h;
            }
            !b && !h.trim() && (b = !0), u += T + `
`, e = e.substring(T.length + 1), p = _.slice(g);
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
        let a = eo(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = Xm(t[2], "()");
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
        let h = p.slice(2, -2);
        return { type: "strong", raw: p, text: h, tokens: this.lexer.inlineTokens(h) };
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
}, rn = class ms {
  constructor(t) {
    Me(this, "tokens");
    Me(this, "options");
    Me(this, "state");
    Me(this, "inlineQueue");
    Me(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || yr, this.options.tokenizer = this.options.tokenizer || new aa(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Nt, block: Vo.normal, inline: Jr.normal };
    this.options.pedantic ? (n.block = Vo.pedantic, n.inline = Jr.pedantic) : this.options.gfm && (n.block = Vo.gfm, this.options.breaks ? n.inline = Jr.breaks : n.inline = Jr.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: Vo, inline: Jr };
  }
  static lex(t, n) {
    return new ms(n).lex(t);
  }
  static lexInline(t, n) {
    return new ms(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Nt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.options.pedantic && (t = t.replace(Nt.tabCharGlobal, "    ").replace(Nt.spaceLine, "")); t; ) {
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
        let f = 1 / 0, p = t.slice(1), h;
        this.options.extensions.startInline.forEach((b) => {
          h = b.call({ lexer: this }, p), typeof h == "number" && h >= 0 && (f = Math.min(f, h));
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
    this.options = t || yr;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Nt.notSpaceStart)?.[0], a = t.replace(Nt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + Pn(o) + '">' + (r ? a : Pn(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : Pn(a, !0)) + `</code></pre>
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
    return `<code>${Pn(t, !0)}</code>`;
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
    return n && (s += ' title="' + Pn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = ii(t);
    if (a === null) return Pn(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${Pn(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : Pn(t.text);
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
}, on = class hs {
  constructor(t) {
    Me(this, "options");
    Me(this, "renderer");
    Me(this, "textRenderer");
    this.options = t || yr, this.options.renderer = this.options.renderer || new sa(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Gs();
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
}, Yo, so = (Yo = class {
  constructor(e) {
    Me(this, "options");
    Me(this, "block");
    this.options = e || yr;
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
    return this.block ? rn.lex : rn.lexInline;
  }
  provideParser() {
    return this.block ? on.parse : on.parseInline;
  }
}, Me(Yo, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Me(Yo, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Yo), Jm = class {
  constructor(...t) {
    Me(this, "defaults", Fs());
    Me(this, "options", this.setOptions);
    Me(this, "parse", this.parseMarkdown(!0));
    Me(this, "parseInline", this.parseMarkdown(!1));
    Me(this, "Parser", on);
    Me(this, "Renderer", sa);
    Me(this, "TextRenderer", Gs);
    Me(this, "Lexer", rn);
    Me(this, "Tokenizer", aa);
    Me(this, "Hooks", so);
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
        let a = this.defaults.hooks || new so();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let i = s, l = r.hooks[i], u = a[i];
          so.passThroughHooks.has(s) ? a[i] = (f) => {
            if (this.defaults.async && so.passThroughHooksRespectAsync.has(s)) return (async () => {
              let h = await l.call(a, f);
              return u.call(a, h);
            })();
            let p = l.call(a, f);
            return u.call(a, p);
          } : a[i] = (...f) => {
            if (this.defaults.async) return (async () => {
              let h = await l.apply(a, f);
              return h === !1 && (h = await u.apply(a, f)), h;
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
    return rn.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return on.parse(t, n ?? this.defaults);
  }
  parseMarkdown(t) {
    return (n, r) => {
      let o = { ...r }, a = { ...this.defaults, ...o }, s = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && o.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = t), a.async) return (async () => {
        let i = a.hooks ? await a.hooks.preprocess(n) : n, l = await (a.hooks ? await a.hooks.provideLexer() : t ? rn.lex : rn.lexInline)(i, a), u = a.hooks ? await a.hooks.processAllTokens(l) : l;
        a.walkTokens && await Promise.all(this.walkTokens(u, a.walkTokens));
        let f = await (a.hooks ? await a.hooks.provideParser() : t ? on.parse : on.parseInline)(u, a);
        return a.hooks ? await a.hooks.postprocess(f) : f;
      })().catch(s);
      try {
        a.hooks && (n = a.hooks.preprocess(n));
        let i = (a.hooks ? a.hooks.provideLexer() : t ? rn.lex : rn.lexInline)(n, a);
        a.hooks && (i = a.hooks.processAllTokens(i)), a.walkTokens && this.walkTokens(i, a.walkTokens);
        let l = (a.hooks ? a.hooks.provideParser() : t ? on.parse : on.parseInline)(i, a);
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
        let o = "<p>An error occurred:</p><pre>" + Pn(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, hr = new Jm();
function Pe(e, t) {
  return hr.parse(e, t);
}
Pe.options = Pe.setOptions = function(e) {
  return hr.setOptions(e), Pe.defaults = hr.defaults, mu(Pe.defaults), Pe;
};
Pe.getDefaults = Fs;
Pe.defaults = yr;
Pe.use = function(...e) {
  return hr.use(...e), Pe.defaults = hr.defaults, mu(Pe.defaults), Pe;
};
Pe.walkTokens = function(e, t) {
  return hr.walkTokens(e, t);
};
Pe.parseInline = hr.parseInline;
Pe.Parser = on;
Pe.parser = on.parse;
Pe.Renderer = sa;
Pe.TextRenderer = Gs;
Pe.Lexer = rn;
Pe.lexer = rn.lex;
Pe.Tokenizer = aa;
Pe.Hooks = so;
Pe.parse = Pe;
Pe.options;
Pe.setOptions;
Pe.use;
Pe.walkTokens;
Pe.parseInline;
on.parse;
rn.lex;
const eh = ["disabled"], th = {
  key: 0,
  class: "custom-button__loading"
}, nh = /* @__PURE__ */ ne({
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
    return (n, r) => (x(), H("button", {
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
      e.loading ? (x(), H("div", th, r[1] || (r[1] = [
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
      ]))) : X("v-if", !0),
      me(n.$slots, "default", {}, void 0, !0)
    ], 10, eh));
  }
}), Ks = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Nn = /* @__PURE__ */ Ks(nh, [["__scopeId", "data-v-9497085f"]]), Su = Symbol(), Qo = "el", rh = "is-", dr = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Au = Symbol("namespaceContextKey"), qs = (e) => {
  const t = e || ($t() ? Ne(Au, j(Qo)) : j(Qo));
  return R(() => c(t) || Qo);
}, it = (e, t) => {
  const n = qs(t);
  return {
    namespace: n,
    b: (v = "") => dr(n.value, e, v, "", ""),
    e: (v) => v ? dr(n.value, e, "", v, "") : "",
    m: (v) => v ? dr(n.value, e, "", "", v) : "",
    be: (v, E) => v && E ? dr(n.value, e, v, E, "") : "",
    em: (v, E) => v && E ? dr(n.value, e, "", v, E) : "",
    bm: (v, E) => v && E ? dr(n.value, e, v, "", E) : "",
    bem: (v, E, d) => v && E && d ? dr(n.value, e, v, E, d) : "",
    is: (v, ...E) => {
      const d = E.length >= 1 ? E[0] : !0;
      return v && d ? `${rh}${v}` : "";
    },
    cssVar: (v) => {
      const E = {};
      for (const d in v)
        v[d] && (E[`--${n.value}-${d}`] = v[d]);
      return E;
    },
    cssVarName: (v) => `--${n.value}-${v}`,
    cssVarBlock: (v) => {
      const E = {};
      for (const d in v)
        v[d] && (E[`--${n.value}-${e}-${d}`] = v[d]);
      return E;
    },
    cssVarBlockName: (v) => `--${n.value}-${e}-${v}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const _o = () => {
}, oh = Object.prototype.hasOwnProperty, fi = (e, t) => oh.call(e, t), yn = Array.isArray, Ze = (e) => typeof e == "function", Ot = (e) => typeof e == "string", Ut = (e) => e !== null && typeof e == "object", di = (e) => (Ut(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), ah = Object.prototype.toString, sh = (e) => ah.call(e), lh = (e) => sh(e) === "[object Object]";
var Cu = typeof global == "object" && global && global.Object === Object && global, ih = typeof self == "object" && self && self.Object === Object && self, Ln = Cu || ih || Function("return this")(), An = Ln.Symbol, Ou = Object.prototype, ch = Ou.hasOwnProperty, uh = Ou.toString, to = An ? An.toStringTag : void 0;
function fh(e) {
  var t = ch.call(e, to), n = e[to];
  try {
    e[to] = void 0;
    var r = !0;
  } catch {
  }
  var o = uh.call(e);
  return r && (t ? e[to] = n : delete e[to]), o;
}
var dh = Object.prototype, ph = dh.toString;
function mh(e) {
  return ph.call(e);
}
var hh = "[object Null]", gh = "[object Undefined]", pi = An ? An.toStringTag : void 0;
function Kr(e) {
  return e == null ? e === void 0 ? gh : hh : pi && pi in Object(e) ? fh(e) : mh(e);
}
function Fr(e) {
  return e != null && typeof e == "object";
}
var vh = "[object Symbol]";
function ka(e) {
  return typeof e == "symbol" || Fr(e) && Kr(e) == vh;
}
function bh(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var un = Array.isArray, mi = An ? An.prototype : void 0, hi = mi ? mi.toString : void 0;
function Lu(e) {
  if (typeof e == "string")
    return e;
  if (un(e))
    return bh(e, Lu) + "";
  if (ka(e))
    return hi ? hi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var yh = /\s/;
function _h(e) {
  for (var t = e.length; t-- && yh.test(e.charAt(t)); )
    ;
  return t;
}
var wh = /^\s+/;
function kh(e) {
  return e && e.slice(0, _h(e) + 1).replace(wh, "");
}
function ar(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var gi = NaN, Th = /^[-+]0x[0-9a-f]+$/i, Eh = /^0b[01]+$/i, Sh = /^0o[0-7]+$/i, Ah = parseInt;
function vi(e) {
  if (typeof e == "number")
    return e;
  if (ka(e))
    return gi;
  if (ar(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ar(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = kh(e);
  var n = Eh.test(e);
  return n || Sh.test(e) ? Ah(e.slice(2), n ? 2 : 8) : Th.test(e) ? gi : +e;
}
function Iu(e) {
  return e;
}
var Ch = "[object AsyncFunction]", Oh = "[object Function]", Lh = "[object GeneratorFunction]", Ih = "[object Proxy]";
function Ru(e) {
  if (!ar(e))
    return !1;
  var t = Kr(e);
  return t == Oh || t == Lh || t == Ch || t == Ih;
}
var Wa = Ln["__core-js_shared__"], bi = function() {
  var e = /[^.]+$/.exec(Wa && Wa.keys && Wa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Rh(e) {
  return !!bi && bi in e;
}
var xh = Function.prototype, Ph = xh.toString;
function _r(e) {
  if (e != null) {
    try {
      return Ph.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Nh = /[\\^$.*+?()[\]{}|]/g, $h = /^\[object .+?Constructor\]$/, Mh = Function.prototype, Dh = Object.prototype, Fh = Mh.toString, zh = Dh.hasOwnProperty, Bh = RegExp(
  "^" + Fh.call(zh).replace(Nh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Vh(e) {
  if (!ar(e) || Rh(e))
    return !1;
  var t = Ru(e) ? Bh : $h;
  return t.test(_r(e));
}
function jh(e, t) {
  return e?.[t];
}
function wr(e, t) {
  var n = jh(e, t);
  return Vh(n) ? n : void 0;
}
var gs = wr(Ln, "WeakMap");
function Uh(e, t, n) {
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
var Hh = 800, Wh = 16, Gh = Date.now;
function Kh(e) {
  var t = 0, n = 0;
  return function() {
    var r = Gh(), o = Wh - (r - n);
    if (n = r, o > 0) {
      if (++t >= Hh)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function qh(e) {
  return function() {
    return e;
  };
}
var la = function() {
  try {
    var e = wr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Yh = la ? function(e, t) {
  return la(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: qh(t),
    writable: !0
  });
} : Iu, Zh = Kh(Yh);
function Xh(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var Qh = 9007199254740991, Jh = /^(?:0|[1-9]\d*)$/;
function Ys(e, t) {
  var n = typeof e;
  return t = t ?? Qh, !!t && (n == "number" || n != "symbol" && Jh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function eg(e, t, n) {
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
var tg = Object.prototype, ng = tg.hasOwnProperty;
function rg(e, t, n) {
  var r = e[t];
  (!(ng.call(e, t) && Zs(r, n)) || n === void 0 && !(t in e)) && eg(e, t, n);
}
var yi = Math.max;
function og(e, t, n) {
  return t = yi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = yi(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Uh(e, this, i);
  };
}
var ag = 9007199254740991;
function Xs(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ag;
}
function sg(e) {
  return e != null && Xs(e.length) && !Ru(e);
}
var lg = Object.prototype;
function ig(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || lg;
  return e === n;
}
function cg(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ug = "[object Arguments]";
function _i(e) {
  return Fr(e) && Kr(e) == ug;
}
var xu = Object.prototype, fg = xu.hasOwnProperty, dg = xu.propertyIsEnumerable, Qs = _i(/* @__PURE__ */ function() {
  return arguments;
}()) ? _i : function(e) {
  return Fr(e) && fg.call(e, "callee") && !dg.call(e, "callee");
};
function pg() {
  return !1;
}
var Pu = typeof exports == "object" && exports && !exports.nodeType && exports, wi = Pu && typeof module == "object" && module && !module.nodeType && module, mg = wi && wi.exports === Pu, ki = mg ? Ln.Buffer : void 0, hg = ki ? ki.isBuffer : void 0, vs = hg || pg, gg = "[object Arguments]", vg = "[object Array]", bg = "[object Boolean]", yg = "[object Date]", _g = "[object Error]", wg = "[object Function]", kg = "[object Map]", Tg = "[object Number]", Eg = "[object Object]", Sg = "[object RegExp]", Ag = "[object Set]", Cg = "[object String]", Og = "[object WeakMap]", Lg = "[object ArrayBuffer]", Ig = "[object DataView]", Rg = "[object Float32Array]", xg = "[object Float64Array]", Pg = "[object Int8Array]", Ng = "[object Int16Array]", $g = "[object Int32Array]", Mg = "[object Uint8Array]", Dg = "[object Uint8ClampedArray]", Fg = "[object Uint16Array]", zg = "[object Uint32Array]", Ve = {};
Ve[Rg] = Ve[xg] = Ve[Pg] = Ve[Ng] = Ve[$g] = Ve[Mg] = Ve[Dg] = Ve[Fg] = Ve[zg] = !0;
Ve[gg] = Ve[vg] = Ve[Lg] = Ve[bg] = Ve[Ig] = Ve[yg] = Ve[_g] = Ve[wg] = Ve[kg] = Ve[Tg] = Ve[Eg] = Ve[Sg] = Ve[Ag] = Ve[Cg] = Ve[Og] = !1;
function Bg(e) {
  return Fr(e) && Xs(e.length) && !!Ve[Kr(e)];
}
function Vg(e) {
  return function(t) {
    return e(t);
  };
}
var Nu = typeof exports == "object" && exports && !exports.nodeType && exports, co = Nu && typeof module == "object" && module && !module.nodeType && module, jg = co && co.exports === Nu, Ga = jg && Cu.process, Ti = function() {
  try {
    var e = co && co.require && co.require("util").types;
    return e || Ga && Ga.binding && Ga.binding("util");
  } catch {
  }
}(), Ei = Ti && Ti.isTypedArray, $u = Ei ? Vg(Ei) : Bg, Ug = Object.prototype, Hg = Ug.hasOwnProperty;
function Wg(e, t) {
  var n = un(e), r = !n && Qs(e), o = !n && !r && vs(e), a = !n && !r && !o && $u(e), s = n || r || o || a, i = s ? cg(e.length, String) : [], l = i.length;
  for (var u in e)
    Hg.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ys(u, l))) && i.push(u);
  return i;
}
function Gg(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Kg = Gg(Object.keys, Object), qg = Object.prototype, Yg = qg.hasOwnProperty;
function Zg(e) {
  if (!ig(e))
    return Kg(e);
  var t = [];
  for (var n in Object(e))
    Yg.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Mu(e) {
  return sg(e) ? Wg(e) : Zg(e);
}
var Xg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Qg = /^\w*$/;
function Js(e, t) {
  if (un(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ka(e) ? !0 : Qg.test(e) || !Xg.test(e) || t != null && e in Object(t);
}
var wo = wr(Object, "create");
function Jg() {
  this.__data__ = wo ? wo(null) : {}, this.size = 0;
}
function ev(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var tv = "__lodash_hash_undefined__", nv = Object.prototype, rv = nv.hasOwnProperty;
function ov(e) {
  var t = this.__data__;
  if (wo) {
    var n = t[e];
    return n === tv ? void 0 : n;
  }
  return rv.call(t, e) ? t[e] : void 0;
}
var av = Object.prototype, sv = av.hasOwnProperty;
function lv(e) {
  var t = this.__data__;
  return wo ? t[e] !== void 0 : sv.call(t, e);
}
var iv = "__lodash_hash_undefined__";
function cv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = wo && t === void 0 ? iv : t, this;
}
function gr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
gr.prototype.clear = Jg;
gr.prototype.delete = ev;
gr.prototype.get = ov;
gr.prototype.has = lv;
gr.prototype.set = cv;
function uv() {
  this.__data__ = [], this.size = 0;
}
function Ta(e, t) {
  for (var n = e.length; n--; )
    if (Zs(e[n][0], t))
      return n;
  return -1;
}
var fv = Array.prototype, dv = fv.splice;
function pv(e) {
  var t = this.__data__, n = Ta(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : dv.call(t, n, 1), --this.size, !0;
}
function mv(e) {
  var t = this.__data__, n = Ta(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function hv(e) {
  return Ta(this.__data__, e) > -1;
}
function gv(e, t) {
  var n = this.__data__, r = Ta(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function qn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
qn.prototype.clear = uv;
qn.prototype.delete = pv;
qn.prototype.get = mv;
qn.prototype.has = hv;
qn.prototype.set = gv;
var ko = wr(Ln, "Map");
function vv() {
  this.size = 0, this.__data__ = {
    hash: new gr(),
    map: new (ko || qn)(),
    string: new gr()
  };
}
function bv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ea(e, t) {
  var n = e.__data__;
  return bv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function yv(e) {
  var t = Ea(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function _v(e) {
  return Ea(this, e).get(e);
}
function wv(e) {
  return Ea(this, e).has(e);
}
function kv(e, t) {
  var n = Ea(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Yn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Yn.prototype.clear = vv;
Yn.prototype.delete = yv;
Yn.prototype.get = _v;
Yn.prototype.has = wv;
Yn.prototype.set = kv;
var Tv = "Expected a function";
function el(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Tv);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (el.Cache || Yn)(), n;
}
el.Cache = Yn;
var Ev = 500;
function Sv(e) {
  var t = el(e, function(r) {
    return n.size === Ev && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Av = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Cv = /\\(\\)?/g, Ov = Sv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Av, function(n, r, o, a) {
    t.push(o ? a.replace(Cv, "$1") : r || n);
  }), t;
});
function Lv(e) {
  return e == null ? "" : Lu(e);
}
function Sa(e, t) {
  return un(e) ? e : Js(e, t) ? [e] : Ov(Lv(e));
}
function Co(e) {
  if (typeof e == "string" || ka(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function tl(e, t) {
  t = Sa(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Co(t[n++])];
  return n && n == r ? e : void 0;
}
function nr(e, t, n) {
  var r = e == null ? void 0 : tl(e, t);
  return r === void 0 ? n : r;
}
function Du(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Si = An ? An.isConcatSpreadable : void 0;
function Iv(e) {
  return un(e) || Qs(e) || !!(Si && e && e[Si]);
}
function Rv(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Iv), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? Du(o, i) : o[o.length] = i;
  }
  return o;
}
function xv(e) {
  var t = e == null ? 0 : e.length;
  return t ? Rv(e) : [];
}
function Pv(e) {
  return Zh(og(e, void 0, xv), e + "");
}
function tr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return un(e) ? e : [e];
}
function Nv() {
  this.__data__ = new qn(), this.size = 0;
}
function $v(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Mv(e) {
  return this.__data__.get(e);
}
function Dv(e) {
  return this.__data__.has(e);
}
var Fv = 200;
function zv(e, t) {
  var n = this.__data__;
  if (n instanceof qn) {
    var r = n.__data__;
    if (!ko || r.length < Fv - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Yn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function jn(e) {
  var t = this.__data__ = new qn(e);
  this.size = t.size;
}
jn.prototype.clear = Nv;
jn.prototype.delete = $v;
jn.prototype.get = Mv;
jn.prototype.has = Dv;
jn.prototype.set = zv;
function Bv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function Vv() {
  return [];
}
var jv = Object.prototype, Uv = jv.propertyIsEnumerable, Ai = Object.getOwnPropertySymbols, Hv = Ai ? function(e) {
  return e == null ? [] : (e = Object(e), Bv(Ai(e), function(t) {
    return Uv.call(e, t);
  }));
} : Vv;
function Wv(e, t, n) {
  var r = t(e);
  return un(e) ? r : Du(r, n(e));
}
function Ci(e) {
  return Wv(e, Mu, Hv);
}
var bs = wr(Ln, "DataView"), ys = wr(Ln, "Promise"), _s = wr(Ln, "Set"), Oi = "[object Map]", Gv = "[object Object]", Li = "[object Promise]", Ii = "[object Set]", Ri = "[object WeakMap]", xi = "[object DataView]", Kv = _r(bs), qv = _r(ko), Yv = _r(ys), Zv = _r(_s), Xv = _r(gs), er = Kr;
(bs && er(new bs(new ArrayBuffer(1))) != xi || ko && er(new ko()) != Oi || ys && er(ys.resolve()) != Li || _s && er(new _s()) != Ii || gs && er(new gs()) != Ri) && (er = function(e) {
  var t = Kr(e), n = t == Gv ? e.constructor : void 0, r = n ? _r(n) : "";
  if (r)
    switch (r) {
      case Kv:
        return xi;
      case qv:
        return Oi;
      case Yv:
        return Li;
      case Zv:
        return Ii;
      case Xv:
        return Ri;
    }
  return t;
});
var Pi = Ln.Uint8Array, Qv = "__lodash_hash_undefined__";
function Jv(e) {
  return this.__data__.set(e, Qv), this;
}
function e0(e) {
  return this.__data__.has(e);
}
function ia(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Yn(); ++t < n; )
    this.add(e[t]);
}
ia.prototype.add = ia.prototype.push = Jv;
ia.prototype.has = e0;
function t0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function n0(e, t) {
  return e.has(t);
}
var r0 = 1, o0 = 2;
function Fu(e, t, n, r, o, a) {
  var s = n & r0, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), f = a.get(t);
  if (u && f)
    return u == t && f == e;
  var p = -1, h = !0, b = n & o0 ? new ia() : void 0;
  for (a.set(e, t), a.set(t, e); ++p < i; ) {
    var g = e[p], v = t[p];
    if (r)
      var E = s ? r(v, g, p, t, e, a) : r(g, v, p, e, t, a);
    if (E !== void 0) {
      if (E)
        continue;
      h = !1;
      break;
    }
    if (b) {
      if (!t0(t, function(d, S) {
        if (!n0(b, S) && (g === d || o(g, d, n, r, a)))
          return b.push(S);
      })) {
        h = !1;
        break;
      }
    } else if (!(g === v || o(g, v, n, r, a))) {
      h = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), h;
}
function a0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function s0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var l0 = 1, i0 = 2, c0 = "[object Boolean]", u0 = "[object Date]", f0 = "[object Error]", d0 = "[object Map]", p0 = "[object Number]", m0 = "[object RegExp]", h0 = "[object Set]", g0 = "[object String]", v0 = "[object Symbol]", b0 = "[object ArrayBuffer]", y0 = "[object DataView]", Ni = An ? An.prototype : void 0, Ka = Ni ? Ni.valueOf : void 0;
function _0(e, t, n, r, o, a, s) {
  switch (n) {
    case y0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case b0:
      return !(e.byteLength != t.byteLength || !a(new Pi(e), new Pi(t)));
    case c0:
    case u0:
    case p0:
      return Zs(+e, +t);
    case f0:
      return e.name == t.name && e.message == t.message;
    case m0:
    case g0:
      return e == t + "";
    case d0:
      var i = a0;
    case h0:
      var l = r & l0;
      if (i || (i = s0), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= i0, s.set(e, t);
      var f = Fu(i(e), i(t), r, o, a, s);
      return s.delete(e), f;
    case v0:
      if (Ka)
        return Ka.call(e) == Ka.call(t);
  }
  return !1;
}
var w0 = 1, k0 = Object.prototype, T0 = k0.hasOwnProperty;
function E0(e, t, n, r, o, a) {
  var s = n & w0, i = Ci(e), l = i.length, u = Ci(t), f = u.length;
  if (l != f && !s)
    return !1;
  for (var p = l; p--; ) {
    var h = i[p];
    if (!(s ? h in t : T0.call(t, h)))
      return !1;
  }
  var b = a.get(e), g = a.get(t);
  if (b && g)
    return b == t && g == e;
  var v = !0;
  a.set(e, t), a.set(t, e);
  for (var E = s; ++p < l; ) {
    h = i[p];
    var d = e[h], S = t[h];
    if (r)
      var I = s ? r(S, d, h, t, e, a) : r(d, S, h, e, t, a);
    if (!(I === void 0 ? d === S || o(d, S, n, r, a) : I)) {
      v = !1;
      break;
    }
    E || (E = h == "constructor");
  }
  if (v && !E) {
    var T = e.constructor, _ = t.constructor;
    T != _ && "constructor" in e && "constructor" in t && !(typeof T == "function" && T instanceof T && typeof _ == "function" && _ instanceof _) && (v = !1);
  }
  return a.delete(e), a.delete(t), v;
}
var S0 = 1, $i = "[object Arguments]", Mi = "[object Array]", jo = "[object Object]", A0 = Object.prototype, Di = A0.hasOwnProperty;
function C0(e, t, n, r, o, a) {
  var s = un(e), i = un(t), l = s ? Mi : er(e), u = i ? Mi : er(t);
  l = l == $i ? jo : l, u = u == $i ? jo : u;
  var f = l == jo, p = u == jo, h = l == u;
  if (h && vs(e)) {
    if (!vs(t))
      return !1;
    s = !0, f = !1;
  }
  if (h && !f)
    return a || (a = new jn()), s || $u(e) ? Fu(e, t, n, r, o, a) : _0(e, t, l, n, r, o, a);
  if (!(n & S0)) {
    var b = f && Di.call(e, "__wrapped__"), g = p && Di.call(t, "__wrapped__");
    if (b || g) {
      var v = b ? e.value() : e, E = g ? t.value() : t;
      return a || (a = new jn()), o(v, E, n, r, a);
    }
  }
  return h ? (a || (a = new jn()), E0(e, t, n, r, o, a)) : !1;
}
function Aa(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Fr(e) && !Fr(t) ? e !== e && t !== t : C0(e, t, n, r, Aa, o);
}
var O0 = 1, L0 = 2;
function I0(e, t, n, r) {
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
      var f = new jn(), p;
      if (!(p === void 0 ? Aa(u, l, O0 | L0, r, f) : p))
        return !1;
    }
  }
  return !0;
}
function zu(e) {
  return e === e && !ar(e);
}
function R0(e) {
  for (var t = Mu(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, zu(o)];
  }
  return t;
}
function Bu(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function x0(e) {
  var t = R0(e);
  return t.length == 1 && t[0][2] ? Bu(t[0][0], t[0][1]) : function(n) {
    return n === e || I0(n, e, t);
  };
}
function P0(e, t) {
  return e != null && t in Object(e);
}
function N0(e, t, n) {
  t = Sa(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Co(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Xs(o) && Ys(s, o) && (un(e) || Qs(e)));
}
function Vu(e, t) {
  return e != null && N0(e, t, P0);
}
var $0 = 1, M0 = 2;
function D0(e, t) {
  return Js(e) && zu(t) ? Bu(Co(e), t) : function(n) {
    var r = nr(n, e);
    return r === void 0 && r === t ? Vu(n, e) : Aa(t, r, $0 | M0);
  };
}
function F0(e) {
  return function(t) {
    return t?.[e];
  };
}
function z0(e) {
  return function(t) {
    return tl(t, e);
  };
}
function B0(e) {
  return Js(e) ? F0(Co(e)) : z0(e);
}
function V0(e) {
  return typeof e == "function" ? e : e == null ? Iu : typeof e == "object" ? un(e) ? D0(e[0], e[1]) : x0(e) : B0(e);
}
var qa = function() {
  return Ln.Date.now();
}, j0 = "Expected a function", U0 = Math.max, H0 = Math.min;
function W0(e, t, n) {
  var r, o, a, s, i, l, u = 0, f = !1, p = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(j0);
  t = vi(t) || 0, ar(n) && (f = !!n.leading, p = "maxWait" in n, a = p ? U0(vi(n.maxWait) || 0, t) : a, h = "trailing" in n ? !!n.trailing : h);
  function b(O) {
    var L = r, W = o;
    return r = o = void 0, u = O, s = e.apply(W, L), s;
  }
  function g(O) {
    return u = O, i = setTimeout(d, t), f ? b(O) : s;
  }
  function v(O) {
    var L = O - l, W = O - u, G = t - L;
    return p ? H0(G, a - W) : G;
  }
  function E(O) {
    var L = O - l, W = O - u;
    return l === void 0 || L >= t || L < 0 || p && W >= a;
  }
  function d() {
    var O = qa();
    if (E(O))
      return S(O);
    i = setTimeout(d, v(O));
  }
  function S(O) {
    return i = void 0, h && r ? b(O) : (r = o = void 0, s);
  }
  function I() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function T() {
    return i === void 0 ? s : S(qa());
  }
  function _() {
    var O = qa(), L = E(O);
    if (r = arguments, o = this, l = O, L) {
      if (i === void 0)
        return g(l);
      if (p)
        return clearTimeout(i), i = setTimeout(d, t), b(l);
    }
    return i === void 0 && (i = setTimeout(d, t)), s;
  }
  return _.cancel = I, _.flush = T, _;
}
function G0(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return Xh(e, V0(t), o);
}
function ca(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function uo(e, t) {
  return Aa(e, t);
}
function Un(e) {
  return e == null;
}
function K0(e) {
  return e === void 0;
}
function q0(e, t, n, r) {
  if (!ar(e))
    return e;
  t = Sa(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = Co(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var f = i[l];
      u = void 0, u === void 0 && (u = ar(f) ? f : Ys(t[o + 1]) ? [] : {});
    }
    rg(i, l, u), i = i[l];
  }
  return e;
}
function Y0(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = tl(e, s);
    n(i, s) && q0(a, Sa(s, e), i);
  }
  return a;
}
function Z0(e, t) {
  return Y0(e, t, function(n, r) {
    return Vu(e, r);
  });
}
var X0 = Pv(function(e, t) {
  return e == null ? {} : Z0(e, t);
});
const _n = (e) => e === void 0, or = (e) => typeof e == "boolean", xe = (e) => typeof e == "number", ln = (e) => typeof Element > "u" ? !1 : e instanceof Element, Q0 = (e) => Ot(e) ? !Number.isNaN(Number(e)) : !1;
var J0 = Object.defineProperty, eb = Object.defineProperties, tb = Object.getOwnPropertyDescriptors, Fi = Object.getOwnPropertySymbols, nb = Object.prototype.hasOwnProperty, rb = Object.prototype.propertyIsEnumerable, zi = (e, t, n) => t in e ? J0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ob = (e, t) => {
  for (var n in t || (t = {}))
    nb.call(t, n) && zi(e, n, t[n]);
  if (Fi)
    for (var n of Fi(t))
      rb.call(t, n) && zi(e, n, t[n]);
  return e;
}, ab = (e, t) => eb(e, tb(t));
function sb(e, t) {
  var n;
  const r = rr();
  return jc(() => {
    r.value = e();
  }, ab(ob({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), Ls(r);
}
var Bi;
const lt = typeof window < "u", lb = (e) => typeof e == "string", ju = () => {
}, ws = lt && ((Bi = window?.navigator) == null ? void 0 : Bi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function nl(e) {
  return typeof e == "function" ? e() : c(e);
}
function ib(e) {
  return e;
}
function Oo(e) {
  return ed() ? (td(e), !0) : !1;
}
function cb(e, t = !0) {
  $t() ? rt(e) : t ? e() : et(e);
}
function Uu(e, t, n = {}) {
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
  return r && (o.value = !0, lt && l()), Oo(i), {
    isPending: Ls(o),
    start: l,
    stop: i
  };
}
function Bn(e) {
  var t;
  const n = nl(e);
  return (t = n?.$el) != null ? t : n;
}
const Ca = lt ? window : void 0;
function cn(...e) {
  let t, n, r, o;
  if (lb(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Ca) : [t, n, r, o] = e, !t)
    return ju;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((f) => f()), a.length = 0;
  }, i = (f, p, h, b) => (f.addEventListener(p, h, b), () => f.removeEventListener(p, h, b)), l = ve(() => [Bn(t), nl(o)], ([f, p]) => {
    s(), f && a.push(...n.flatMap((h) => r.map((b) => i(f, h, b, p))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return Oo(u), u;
}
let Vi = !1;
function ub(e, t, n = {}) {
  const { window: r = Ca, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  ws && !Vi && (Vi = !0, Array.from(r.document.body.children).forEach((h) => h.addEventListener("click", ju)));
  let i = !0;
  const l = (h) => o.some((b) => {
    if (typeof b == "string")
      return Array.from(r.document.querySelectorAll(b)).some((g) => g === h.target || h.composedPath().includes(g));
    {
      const g = Bn(b);
      return g && (h.target === g || h.composedPath().includes(g));
    }
  }), f = [
    cn(r, "click", (h) => {
      const b = Bn(e);
      if (!(!b || b === h.target || h.composedPath().includes(b))) {
        if (h.detail === 0 && (i = !l(h)), !i) {
          i = !0;
          return;
        }
        t(h);
      }
    }, { passive: !0, capture: a }),
    cn(r, "pointerdown", (h) => {
      const b = Bn(e);
      b && (i = !h.composedPath().includes(b) && !l(h));
    }, { passive: !0 }),
    s && cn(r, "blur", (h) => {
      var b;
      const g = Bn(e);
      ((b = r.document.activeElement) == null ? void 0 : b.tagName) === "IFRAME" && !g?.contains(r.document.activeElement) && t(h);
    })
  ].filter(Boolean);
  return () => f.forEach((h) => h());
}
function Hu(e, t = !1) {
  const n = j(), r = () => n.value = !!e();
  return r(), cb(r, t), n;
}
const ji = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ui = "__vueuse_ssr_handlers__";
ji[Ui] = ji[Ui] || {};
var Hi = Object.getOwnPropertySymbols, fb = Object.prototype.hasOwnProperty, db = Object.prototype.propertyIsEnumerable, pb = (e, t) => {
  var n = {};
  for (var r in e)
    fb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Hi)
    for (var r of Hi(e))
      t.indexOf(r) < 0 && db.call(e, r) && (n[r] = e[r]);
  return n;
};
function bn(e, t, n = {}) {
  const r = n, { window: o = Ca } = r, a = pb(r, ["window"]);
  let s;
  const i = Hu(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = ve(() => Bn(e), (p) => {
    l(), i.value && o && p && (s = new ResizeObserver(t), s.observe(p, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return Oo(f), {
    isSupported: i,
    stop: f
  };
}
var Wi = Object.getOwnPropertySymbols, mb = Object.prototype.hasOwnProperty, hb = Object.prototype.propertyIsEnumerable, gb = (e, t) => {
  var n = {};
  for (var r in e)
    mb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Wi)
    for (var r of Wi(e))
      t.indexOf(r) < 0 && hb.call(e, r) && (n[r] = e[r]);
  return n;
};
function vb(e, t, n = {}) {
  const r = n, { window: o = Ca } = r, a = gb(r, ["window"]);
  let s;
  const i = Hu(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = ve(() => Bn(e), (p) => {
    l(), i.value && o && p && (s = new MutationObserver(t), s.observe(p, a));
  }, { immediate: !0 }), f = () => {
    l(), u();
  };
  return Oo(f), {
    isSupported: i,
    stop: f
  };
}
var Gi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Gi || (Gi = {}));
var bb = Object.defineProperty, Ki = Object.getOwnPropertySymbols, yb = Object.prototype.hasOwnProperty, _b = Object.prototype.propertyIsEnumerable, qi = (e, t, n) => t in e ? bb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, wb = (e, t) => {
  for (var n in t || (t = {}))
    yb.call(t, n) && qi(e, n, t[n]);
  if (Ki)
    for (var n of Ki(t))
      _b.call(t, n) && qi(e, n, t[n]);
  return e;
};
const kb = {
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
wb({
  linear: ib
}, kb);
class Tb extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function rl(e, t) {
  throw new Tb(`[${e}] ${t}`);
}
const Yi = {
  current: 0
}, Zi = j(0), Wu = 2e3, Xi = Symbol("elZIndexContextKey"), Gu = Symbol("zIndexContextKey"), Ku = (e) => {
  const t = $t() ? Ne(Xi, Yi) : Yi, n = e || ($t() ? Ne(Gu, void 0) : void 0), r = R(() => {
    const s = c(n);
    return xe(s) ? s : Wu;
  }), o = R(() => r.value + Zi.value), a = () => (t.current++, Zi.value = t.current, o.value);
  return !lt && Ne(Xi), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var Eb = {
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
const Sb = (e) => (t, n) => Ab(t, n, c(e)), Ab = (e, t, n) => nr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Cb = (e) => {
  const t = R(() => c(e).name), n = mo(e) ? e : j(e);
  return {
    lang: t,
    locale: n,
    t: Sb(e)
  };
}, qu = Symbol("localeContextKey"), ol = (e) => {
  const t = e || Ne(qu, j());
  return Cb(R(() => t.value || Eb));
}, Yu = "__epPropKey", de = (e) => e, Ob = (e) => Ut(e) && !!e[Yu], Oa = (e, t) => {
  if (!Ut(e) || Ob(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), fi(e, "default") && p.push(o), f || (f = p.includes(u))), s && (f || (f = s(u))), !f && p.length > 0) {
        const h = [...new Set(p)].map((b) => JSON.stringify(b)).join(", ");
        nd(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [Yu]: !0
  };
  return fi(e, "default") && (l.default = o), l;
}, je = (e) => ca(Object.entries(e).map(([t, n]) => [
  t,
  Oa(n, t)
])), al = ["", "default", "small", "large"], La = Oa({
  type: String,
  values: al,
  required: !1
}), Zu = Symbol("size"), Lb = () => {
  const e = Ne(Zu, {});
  return R(() => c(e.size) || "");
}, Xu = Symbol("emptyValuesContextKey"), Ib = ["", void 0, null], Rb = void 0, Qu = je({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => Ze(e) ? !e() : !e
  }
}), xb = (e, t) => {
  const n = $t() ? Ne(Xu, j({})) : j({}), r = R(() => e.emptyValues || n.value.emptyValues || Ib), o = R(() => Ze(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : Ze(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Rb), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, Qi = (e) => Object.keys(e), ua = j();
function Ju(e, t = void 0) {
  return $t() ? Ne(Su, ua) : ua;
}
function ef(e, t) {
  const n = Ju(), r = it(e, R(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || Qo;
  })), o = ol(R(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = Ku(R(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || Wu;
  })), s = R(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return tf(R(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const tf = (e, t, n = !1) => {
  var r;
  const o = !!$t(), a = o ? Ju() : void 0, s = (r = void 0) != null ? r : o ? Sn : void 0;
  if (!s)
    return;
  const i = R(() => {
    const l = c(e);
    return a?.value ? Pb(a.value, l) : l;
  });
  return s(Su, i), s(qu, R(() => i.value.locale)), s(Au, R(() => i.value.namespace)), s(Gu, R(() => i.value.zIndex)), s(Zu, {
    size: R(() => i.value.size || "")
  }), s(Xu, R(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !ua.value) && (ua.value = i.value), i;
}, Pb = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...Qi(e), ...Qi(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, gt = "update:modelValue", Gn = "change", Hn = "input";
var Ge = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function zr(e, t = "px") {
  if (!e)
    return "";
  if (xe(e) || Q0(e))
    return `${e}${t}`;
  if (Ot(e))
    return e;
}
function Nb(e, t) {
  if (!lt)
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
const fn = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, nf = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), rf = (e) => (e.install = _o, e), $b = je({
  size: {
    type: de([Number, String])
  },
  color: {
    type: String
  }
}), Mb = ne({
  name: "ElIcon",
  inheritAttrs: !1
}), Db = /* @__PURE__ */ ne({
  ...Mb,
  props: $b,
  setup(e) {
    const t = e, n = it("icon"), r = R(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: _n(o) ? void 0 : zr(o),
        "--color": a
      };
    });
    return (o, a) => (x(), H("i", Nr({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      me(o.$slots, "default")
    ], 16));
  }
});
var Fb = /* @__PURE__ */ Ge(Db, [["__file", "icon.vue"]]);
const st = fn(Fb);
/*! Element Plus Icons Vue v2.3.1 */
var zb = /* @__PURE__ */ ne({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (x(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), of = zb, Bb = /* @__PURE__ */ ne({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (x(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Vb = Bb, jb = /* @__PURE__ */ ne({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (x(), H("svg", {
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
}), Ub = jb, Hb = /* @__PURE__ */ ne({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (x(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Wb = Hb, Gb = /* @__PURE__ */ ne({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (x(), H("svg", {
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
}), sl = Gb, Kb = /* @__PURE__ */ ne({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (x(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), fa = Kb, qb = /* @__PURE__ */ ne({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (x(), H("svg", {
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
}), Yb = qb, Zb = /* @__PURE__ */ ne({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (x(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Xb = Zb, Qb = /* @__PURE__ */ ne({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (x(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), af = Qb, Jb = /* @__PURE__ */ ne({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (x(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), ey = Jb, ty = /* @__PURE__ */ ne({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (x(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), ny = ty, ry = /* @__PURE__ */ ne({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (x(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), oy = ry, ay = /* @__PURE__ */ ne({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (x(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), sy = ay, ly = /* @__PURE__ */ ne({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (x(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), iy = ly;
const wn = de([
  String,
  Object,
  Function
]), cy = {
  Close: fa
}, uy = {
  Close: fa
}, da = {
  success: oy,
  warning: iy,
  error: Wb,
  info: Xb
}, sf = {
  validating: af,
  success: Ub,
  error: sl
}, lf = () => lt && /firefox/i.test(window.navigator.userAgent);
let Ft;
const fy = {
  height: "0",
  visibility: "hidden",
  overflow: lf() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, dy = [
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
function py(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: dy.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function Ji(e, t = 1, n) {
  var r;
  Ft || (Ft = document.createElement("textarea"), document.body.appendChild(Ft));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = py(e);
  i.forEach(([p, h]) => Ft?.style.setProperty(p, h)), Object.entries(fy).forEach(([p, h]) => Ft?.style.setProperty(p, h, "important")), Ft.value = e.value || e.placeholder || "";
  let l = Ft.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), Ft.value = "";
  const f = Ft.scrollHeight - o;
  if (xe(t)) {
    let p = f * t;
    s === "border-box" && (p = p + o + a), l = Math.max(p, l), u.minHeight = `${p}px`;
  }
  if (xe(n)) {
    let p = f * n;
    s === "border-box" && (p = p + o + a), l = Math.min(p, l);
  }
  return u.height = `${l}px`, (r = Ft.parentNode) == null || r.removeChild(Ft), Ft = void 0, u;
}
const cf = (e) => e, my = je({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), kr = (e) => X0(my, e), hy = je({
  id: {
    type: String,
    default: void 0
  },
  size: La,
  disabled: Boolean,
  modelValue: {
    type: de([
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
    type: de([Boolean, Object]),
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
    type: wn
  },
  prefixIcon: {
    type: wn
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
    type: de([Object, Array, String]),
    default: () => cf({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...kr(["ariaLabel"])
}), gy = {
  [gt]: (e) => Ot(e),
  input: (e) => Ot(e),
  change: (e) => Ot(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, vy = ["class", "style"], by = /^on[A-Z]/, yy = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = R(() => (n?.value || []).concat(vy)), o = $t();
  return o ? R(() => {
    var a;
    return ca(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && by.test(s))));
  }) : R(() => ({}));
}, ll = Symbol("formContextKey"), pa = Symbol("formItemContextKey"), ec = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, _y = Symbol("elIdInjection"), uf = () => $t() ? Ne(_y, ec) : ec, Ia = (e) => {
  const t = uf(), n = qs();
  return sb(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
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
  const s = R(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return rt(() => {
    a = ve([Dn(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : Ia().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), ga(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, ff = (e) => {
  const t = $t();
  return R(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, Lo = (e, t = {}) => {
  const n = j(void 0), r = t.prop ? n : ff("size"), o = t.global ? n : Lb(), a = t.form ? { size: void 0 } : Ne(ll, void 0), s = t.formItem ? { size: void 0 } : Ne(pa, void 0);
  return R(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, cl = (e) => {
  const t = ff("disabled"), n = Ne(ll, void 0);
  return R(() => t.value || c(e) || n?.disabled || !1);
};
function df(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = $t(), { emit: s } = a, i = rr(), l = j(!1), u = (h) => {
    Ze(t) && t(h) || l.value || (l.value = !0, s("focus", h), n?.());
  }, f = (h) => {
    var b;
    Ze(r) && r(h) || h.relatedTarget && ((b = i.value) != null && b.contains(h.relatedTarget)) || (l.value = !1, s("blur", h), o?.());
  }, p = () => {
    var h, b;
    (h = i.value) != null && h.contains(document.activeElement) && i.value !== document.activeElement || (b = e.value) == null || b.focus();
  };
  return ve(i, (h) => {
    h && h.setAttribute("tabindex", "-1");
  }), cn(i, "focus", u, !0), cn(i, "blur", f, !0), cn(i, "click", p, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: f
  };
}
const wy = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function pf({
  afterComposition: e,
  emit: t
}) {
  const n = j(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, f = u[u.length - 1] || "";
    n.value = !wy(f);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, et(() => e(i)));
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
function ky(e) {
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
const Ty = "ElInput", Ey = ne({
  name: Ty,
  inheritAttrs: !1
}), Sy = /* @__PURE__ */ ne({
  ...Ey,
  props: hy,
  emits: gy,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = rd(), a = yy(), s = od(), i = R(() => [
      r.type === "textarea" ? v.b() : g.b(),
      g.m(h.value),
      g.is("disabled", b.value),
      g.is("exceed", Ue.value),
      {
        [g.b("group")]: s.prepend || s.append,
        [g.m("prefix")]: s.prefix || r.prefixIcon,
        [g.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: le.value && te.value,
        [g.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = R(() => [
      g.e("wrapper"),
      g.is("focus", W.value)
    ]), { form: u, formItem: f } = Ra(), { inputId: p } = il(r, {
      formItemContext: f
    }), h = Lo(), b = cl(), g = it("input"), v = it("textarea"), E = rr(), d = rr(), S = j(!1), I = j(!1), T = j(), _ = rr(r.inputStyle), O = R(() => E.value || d.value), { wrapperRef: L, isFocused: W, handleFocus: G, handleBlur: Q } = df(O, {
      beforeFocus() {
        return b.value;
      },
      afterBlur() {
        var m;
        r.validateEvent && ((m = f?.validate) == null || m.call(f, "blur").catch((C) => void 0));
      }
    }), ue = R(() => {
      var m;
      return (m = u?.statusIcon) != null ? m : !1;
    }), ee = R(() => f?.validateState || ""), he = R(() => ee.value && sf[ee.value]), fe = R(() => I.value ? sy : Yb), P = R(() => [
      o.style
    ]), $ = R(() => [
      r.inputStyle,
      _.value,
      { resize: r.resize }
    ]), B = R(() => Un(r.modelValue) ? "" : String(r.modelValue)), le = R(() => r.clearable && !b.value && !r.readonly && !!B.value && (W.value || S.value)), te = R(() => r.showPassword && !b.value && !!B.value && (!!B.value || W.value)), ge = R(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !b.value && !r.readonly && !r.showPassword), Y = R(() => B.value.length), Ue = R(() => !!ge.value && Y.value > Number(r.maxlength)), Ee = R(() => !!s.suffix || !!r.suffixIcon || le.value || r.showPassword || ge.value || !!ee.value && ue.value), [ye, ze] = ky(E);
    bn(d, (m) => {
      if (ie(), !ge.value || r.resize !== "both")
        return;
      const C = m[0], { width: F } = C.contentRect;
      T.value = {
        right: `calc(100% - ${F + 15 + 6}px)`
      };
    });
    const we = () => {
      const { type: m, autosize: C } = r;
      if (!(!lt || m !== "textarea" || !d.value))
        if (C) {
          const F = Ut(C) ? C.minRows : void 0, J = Ut(C) ? C.maxRows : void 0, pe = Ji(d.value, F, J);
          _.value = {
            overflowY: "hidden",
            ...pe
          }, et(() => {
            d.value.offsetHeight, _.value = pe;
          });
        } else
          _.value = {
            minHeight: Ji(d.value).minHeight
          };
    }, ie = ((m) => {
      let C = !1;
      return () => {
        var F;
        if (C || !r.autosize)
          return;
        ((F = d.value) == null ? void 0 : F.offsetParent) === null || (m(), C = !0);
      };
    })(we), Ke = () => {
      const m = O.value, C = r.formatter ? r.formatter(B.value) : B.value;
      !m || m.value === C || (m.value = C);
    }, ot = async (m) => {
      ye();
      let { value: C } = m.target;
      if (r.formatter && r.parser && (C = r.parser(C)), !bt.value) {
        if (C === B.value) {
          Ke();
          return;
        }
        n(gt, C), n(Hn, C), await et(), Ke(), ze();
      }
    }, He = (m) => {
      let { value: C } = m.target;
      r.formatter && r.parser && (C = r.parser(C)), n(Gn, C);
    }, {
      isComposing: bt,
      handleCompositionStart: at,
      handleCompositionUpdate: ft,
      handleCompositionEnd: dt
    } = pf({ emit: n, afterComposition: ot }), We = () => {
      ye(), I.value = !I.value, setTimeout(ze);
    }, ut = () => {
      var m;
      return (m = O.value) == null ? void 0 : m.focus();
    }, k = () => {
      var m;
      return (m = O.value) == null ? void 0 : m.blur();
    }, A = (m) => {
      S.value = !1, n("mouseleave", m);
    }, D = (m) => {
      S.value = !0, n("mouseenter", m);
    }, K = (m) => {
      n("keydown", m);
    }, ke = () => {
      var m;
      (m = O.value) == null || m.select();
    }, ce = () => {
      n(gt, ""), n(Gn, ""), n("clear"), n(Hn, "");
    };
    return ve(() => r.modelValue, () => {
      var m;
      et(() => we()), r.validateEvent && ((m = f?.validate) == null || m.call(f, "change").catch((C) => void 0));
    }), ve(B, () => Ke()), ve(() => r.type, async () => {
      await et(), Ke(), we();
    }), rt(() => {
      !r.formatter && r.parser, Ke(), et(we);
    }), t({
      input: E,
      textarea: d,
      ref: O,
      textareaStyle: $,
      autosize: Dn(r, "autosize"),
      isComposing: bt,
      focus: ut,
      blur: k,
      select: ke,
      clear: ce,
      resizeTextarea: we
    }), (m, C) => (x(), H("div", {
      class: U([
        c(i),
        {
          [c(g).bm("group", "append")]: m.$slots.append,
          [c(g).bm("group", "prepend")]: m.$slots.prepend
        }
      ]),
      style: wt(c(P)),
      onMouseenter: D,
      onMouseleave: A
    }, [
      X(" input "),
      m.type !== "textarea" ? (x(), H(Ct, { key: 0 }, [
        X(" prepend slot "),
        m.$slots.prepend ? (x(), H("div", {
          key: 0,
          class: U(c(g).be("group", "prepend"))
        }, [
          me(m.$slots, "prepend")
        ], 2)) : X("v-if", !0),
        w("div", {
          ref_key: "wrapperRef",
          ref: L,
          class: U(c(l))
        }, [
          X(" prefix slot "),
          m.$slots.prefix || m.prefixIcon ? (x(), H("span", {
            key: 0,
            class: U(c(g).e("prefix"))
          }, [
            w("span", {
              class: U(c(g).e("prefix-inner"))
            }, [
              me(m.$slots, "prefix"),
              m.prefixIcon ? (x(), se(c(st), {
                key: 0,
                class: U(c(g).e("icon"))
              }, {
                default: oe(() => [
                  (x(), se(Pt(m.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0)
            ], 2)
          ], 2)) : X("v-if", !0),
          w("input", Nr({
            id: c(p),
            ref_key: "input",
            ref: E,
            class: c(g).e("inner")
          }, c(a), {
            minlength: m.minlength,
            maxlength: m.maxlength,
            type: m.showPassword ? I.value ? "text" : "password" : m.type,
            disabled: c(b),
            readonly: m.readonly,
            autocomplete: m.autocomplete,
            tabindex: m.tabindex,
            "aria-label": m.ariaLabel,
            placeholder: m.placeholder,
            style: m.inputStyle,
            form: m.form,
            autofocus: m.autofocus,
            role: m.containerRole,
            onCompositionstart: c(at),
            onCompositionupdate: c(ft),
            onCompositionend: c(dt),
            onInput: ot,
            onChange: He,
            onKeydown: K
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          X(" suffix slot "),
          c(Ee) ? (x(), H("span", {
            key: 1,
            class: U(c(g).e("suffix"))
          }, [
            w("span", {
              class: U(c(g).e("suffix-inner"))
            }, [
              !c(le) || !c(te) || !c(ge) ? (x(), H(Ct, { key: 0 }, [
                me(m.$slots, "suffix"),
                m.suffixIcon ? (x(), se(c(st), {
                  key: 0,
                  class: U(c(g).e("icon"))
                }, {
                  default: oe(() => [
                    (x(), se(Pt(m.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : X("v-if", !0)
              ], 64)) : X("v-if", !0),
              c(le) ? (x(), se(c(st), {
                key: 1,
                class: U([c(g).e("icon"), c(g).e("clear")]),
                onMousedown: qe(c(_o), ["prevent"]),
                onClick: ce
              }, {
                default: oe(() => [
                  M(c(sl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : X("v-if", !0),
              c(te) ? (x(), se(c(st), {
                key: 2,
                class: U([c(g).e("icon"), c(g).e("password")]),
                onClick: We
              }, {
                default: oe(() => [
                  (x(), se(Pt(c(fe))))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0),
              c(ge) ? (x(), H("span", {
                key: 3,
                class: U(c(g).e("count"))
              }, [
                w("span", {
                  class: U(c(g).e("count-inner"))
                }, V(c(Y)) + " / " + V(m.maxlength), 3)
              ], 2)) : X("v-if", !0),
              c(ee) && c(he) && c(ue) ? (x(), se(c(st), {
                key: 4,
                class: U([
                  c(g).e("icon"),
                  c(g).e("validateIcon"),
                  c(g).is("loading", c(ee) === "validating")
                ])
              }, {
                default: oe(() => [
                  (x(), se(Pt(c(he))))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0)
            ], 2)
          ], 2)) : X("v-if", !0)
        ], 2),
        X(" append slot "),
        m.$slots.append ? (x(), H("div", {
          key: 1,
          class: U(c(g).be("group", "append"))
        }, [
          me(m.$slots, "append")
        ], 2)) : X("v-if", !0)
      ], 64)) : (x(), H(Ct, { key: 1 }, [
        X(" textarea "),
        w("textarea", Nr({
          id: c(p),
          ref_key: "textarea",
          ref: d,
          class: [c(v).e("inner"), c(g).is("focus", c(W))]
        }, c(a), {
          minlength: m.minlength,
          maxlength: m.maxlength,
          tabindex: m.tabindex,
          disabled: c(b),
          readonly: m.readonly,
          autocomplete: m.autocomplete,
          style: c($),
          "aria-label": m.ariaLabel,
          placeholder: m.placeholder,
          form: m.form,
          autofocus: m.autofocus,
          rows: m.rows,
          role: m.containerRole,
          onCompositionstart: c(at),
          onCompositionupdate: c(ft),
          onCompositionend: c(dt),
          onInput: ot,
          onFocus: c(G),
          onBlur: c(Q),
          onChange: He,
          onKeydown: K
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(ge) ? (x(), H("span", {
          key: 0,
          style: wt(T.value),
          class: U(c(g).e("count"))
        }, V(c(Y)) + " / " + V(m.maxlength), 7)) : X("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Ay = /* @__PURE__ */ Ge(Sy, [["__file", "input.vue"]]);
const Cy = fn(Ay), Ar = 4, Oy = {
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
}, Ly = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), ul = Symbol("scrollbarContextKey"), Iy = je({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Ry = "Thumb", xy = /* @__PURE__ */ ne({
  __name: "thumb",
  props: Iy,
  setup(e) {
    const t = e, n = Ne(ul), r = it("scrollbar");
    n || rl(Ry, "can not inject scrollbar context");
    const o = j(), a = j(), s = j({}), i = j(!1);
    let l = !1, u = !1, f = lt ? document.onselectstart : null;
    const p = R(() => Oy[t.vertical ? "vertical" : "horizontal"]), h = R(() => Ly({
      size: t.size,
      move: t.move,
      bar: p.value
    })), b = R(() => o.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / a.value[p.value.offset]), g = (O) => {
      var L;
      if (O.stopPropagation(), O.ctrlKey || [1, 2].includes(O.button))
        return;
      (L = window.getSelection()) == null || L.removeAllRanges(), E(O);
      const W = O.currentTarget;
      W && (s.value[p.value.axis] = W[p.value.offset] - (O[p.value.client] - W.getBoundingClientRect()[p.value.direction]));
    }, v = (O) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const L = Math.abs(O.target.getBoundingClientRect()[p.value.direction] - O[p.value.client]), W = a.value[p.value.offset] / 2, G = (L - W) * 100 * b.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = G * n.wrapElement[p.value.scrollSize] / 100;
    }, E = (O) => {
      O.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", d), document.addEventListener("mouseup", S), f = document.onselectstart, document.onselectstart = () => !1;
    }, d = (O) => {
      if (!o.value || !a.value || l === !1)
        return;
      const L = s.value[p.value.axis];
      if (!L)
        return;
      const W = (o.value.getBoundingClientRect()[p.value.direction] - O[p.value.client]) * -1, G = a.value[p.value.offset] - L, Q = (W - G) * 100 * b.value / o.value[p.value.offset];
      n.wrapElement[p.value.scroll] = Q * n.wrapElement[p.value.scrollSize] / 100;
    }, S = () => {
      l = !1, s.value[p.value.axis] = 0, document.removeEventListener("mousemove", d), document.removeEventListener("mouseup", S), _(), u && (i.value = !1);
    }, I = () => {
      u = !1, i.value = !!t.size;
    }, T = () => {
      u = !0, i.value = l;
    };
    On(() => {
      _(), document.removeEventListener("mouseup", S);
    });
    const _ = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return cn(Dn(n, "scrollbarElement"), "mousemove", I), cn(Dn(n, "scrollbarElement"), "mouseleave", T), (O, L) => (x(), se(Gr, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: oe(() => [
        vt(w("div", {
          ref_key: "instance",
          ref: o,
          class: U([c(r).e("bar"), c(r).is(c(p).key)]),
          onMousedown: v
        }, [
          w("div", {
            ref_key: "thumb",
            ref: a,
            class: U(c(r).e("thumb")),
            style: wt(c(h)),
            onMousedown: g
          }, null, 38)
        ], 34), [
          [Wn, O.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var tc = /* @__PURE__ */ Ge(xy, [["__file", "thumb.vue"]]);
const Py = je({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Ny = /* @__PURE__ */ ne({
  __name: "bar",
  props: Py,
  setup(e, { expose: t }) {
    const n = e, r = Ne(ul), o = j(0), a = j(0), s = j(""), i = j(""), l = j(1), u = j(1);
    return t({
      handleScroll: (h) => {
        if (h) {
          const b = h.offsetHeight - Ar, g = h.offsetWidth - Ar;
          a.value = h.scrollTop * 100 / b * l.value, o.value = h.scrollLeft * 100 / g * u.value;
        }
      },
      update: () => {
        const h = r?.wrapElement;
        if (!h)
          return;
        const b = h.offsetHeight - Ar, g = h.offsetWidth - Ar, v = b ** 2 / h.scrollHeight, E = g ** 2 / h.scrollWidth, d = Math.max(v, n.minSize), S = Math.max(E, n.minSize);
        l.value = v / (b - v) / (d / (b - d)), u.value = E / (g - E) / (S / (g - S)), i.value = d + Ar < b ? `${d}px` : "", s.value = S + Ar < g ? `${S}px` : "";
      }
    }), (h, b) => (x(), H(Ct, null, [
      M(tc, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      M(tc, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: h.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var $y = /* @__PURE__ */ Ge(Ny, [["__file", "bar.vue"]]);
const My = je({
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
    type: de([String, Object, Array]),
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
  ...kr(["ariaLabel", "ariaOrientation"])
}), Dy = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(xe)
}, Fy = "ElScrollbar", zy = ne({
  name: Fy
}), By = /* @__PURE__ */ ne({
  ...zy,
  props: My,
  emits: Dy,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = it("scrollbar");
    let a, s, i = 0, l = 0;
    const u = j(), f = j(), p = j(), h = j(), b = R(() => {
      const _ = {};
      return r.height && (_.height = zr(r.height)), r.maxHeight && (_.maxHeight = zr(r.maxHeight)), [r.wrapStyle, _];
    }), g = R(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), v = R(() => [o.e("view"), r.viewClass]), E = () => {
      var _;
      f.value && ((_ = h.value) == null || _.handleScroll(f.value), i = f.value.scrollTop, l = f.value.scrollLeft, n("scroll", {
        scrollTop: f.value.scrollTop,
        scrollLeft: f.value.scrollLeft
      }));
    };
    function d(_, O) {
      Ut(_) ? f.value.scrollTo(_) : xe(_) && xe(O) && f.value.scrollTo(_, O);
    }
    const S = (_) => {
      xe(_) && (f.value.scrollTop = _);
    }, I = (_) => {
      xe(_) && (f.value.scrollLeft = _);
    }, T = () => {
      var _;
      (_ = h.value) == null || _.update();
    };
    return ve(() => r.noresize, (_) => {
      _ ? (a?.(), s?.()) : ({ stop: a } = bn(p, T), s = cn("resize", T));
    }, { immediate: !0 }), ve(() => [r.maxHeight, r.height], () => {
      r.native || et(() => {
        var _;
        T(), f.value && ((_ = h.value) == null || _.handleScroll(f.value));
      });
    }), Sn(ul, mr({
      scrollbarElement: u,
      wrapElement: f
    })), ad(() => {
      f.value && (f.value.scrollTop = i, f.value.scrollLeft = l);
    }), rt(() => {
      r.native || et(() => {
        T();
      });
    }), Uc(() => T()), t({
      wrapRef: f,
      update: T,
      scrollTo: d,
      setScrollTop: S,
      setScrollLeft: I,
      handleScroll: E
    }), (_, O) => (x(), H("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: U(c(o).b())
    }, [
      w("div", {
        ref_key: "wrapRef",
        ref: f,
        class: U(c(g)),
        style: wt(c(b)),
        tabindex: _.tabindex,
        onScroll: E
      }, [
        (x(), se(Pt(_.tag), {
          id: _.id,
          ref_key: "resizeRef",
          ref: p,
          class: U(c(v)),
          style: wt(_.viewStyle),
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
      _.native ? X("v-if", !0) : (x(), se($y, {
        key: 0,
        ref_key: "barRef",
        ref: h,
        always: _.always,
        "min-size": _.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Vy = /* @__PURE__ */ Ge(By, [["__file", "scrollbar.vue"]]);
const jy = fn(Vy), fl = Symbol("popper"), mf = Symbol("popperContent"), Uy = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], hf = je({
  role: {
    type: String,
    values: Uy,
    default: "tooltip"
  }
}), Hy = ne({
  name: "ElPopper",
  inheritAttrs: !1
}), Wy = /* @__PURE__ */ ne({
  ...Hy,
  props: hf,
  setup(e, { expose: t }) {
    const n = e, r = j(), o = j(), a = j(), s = j(), i = R(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Sn(fl, l), (u, f) => me(u.$slots, "default");
  }
});
var Gy = /* @__PURE__ */ Ge(Wy, [["__file", "popper.vue"]]);
const gf = je({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Ky = ne({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), qy = /* @__PURE__ */ ne({
  ...Ky,
  props: gf,
  setup(e, { expose: t }) {
    const n = e, r = it("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = Ne(mf, void 0);
    return ve(() => n.arrowOffset, (i) => {
      o.value = i;
    }), On(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (x(), H("span", {
      ref_key: "arrowRef",
      ref: a,
      class: U(c(r).e("arrow")),
      style: wt(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Yy = /* @__PURE__ */ Ge(qy, [["__file", "arrow.vue"]]);
const vf = je({
  virtualRef: {
    type: de(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: de(Function)
  },
  onMouseleave: {
    type: de(Function)
  },
  onClick: {
    type: de(Function)
  },
  onKeydown: {
    type: de(Function)
  },
  onFocus: {
    type: de(Function)
  },
  onBlur: {
    type: de(Function)
  },
  onContextmenu: {
    type: de(Function)
  },
  id: String,
  open: Boolean
}), bf = Symbol("elForwardRef"), Zy = (e) => {
  Sn(bf, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Xy = (e) => ({
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
}, Qy = "ElOnlyChild", Jy = ne({
  name: Qy,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = Ne(bf), a = Xy((r = o?.setForwardRef) != null ? r : _o);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = yf(i);
      return l ? vt(sd(l, n), [[a]]) : null;
    };
  }
});
function yf(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Ut(n))
      switch (n.type) {
        case ld:
          continue;
        case Vc:
        case "svg":
          return nc(n);
        case Ct:
          return yf(n.children);
        default:
          return n;
      }
    return nc(n);
  }
  return null;
}
function nc(e) {
  const t = it("only-child");
  return M("span", {
    class: t.e("content")
  }, [e]);
}
const e_ = ne({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), t_ = /* @__PURE__ */ ne({
  ...e_,
  props: vf,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = Ne(fl, void 0);
    Zy(o);
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
    return rt(() => {
      ve(() => n.virtualRef, (p) => {
        p && (o.value = Bn(p));
      }, {
        immediate: !0
      }), ve(o, (p, h) => {
        u?.(), u = void 0, ln(p) && (f.forEach((b) => {
          var g;
          const v = n[b];
          v && (p.addEventListener(b.slice(2).toLowerCase(), v), (g = h?.removeEventListener) == null || g.call(h, b.slice(2).toLowerCase(), v));
        }), ks(p) && (u = ve([a, s, i, l], (b) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((g, v) => {
            Un(b[v]) ? p.removeAttribute(g) : p.setAttribute(g, b[v]);
          });
        }, { immediate: !0 }))), ln(h) && ks(h) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((b) => h.removeAttribute(b));
      }, {
        immediate: !0
      });
    }), On(() => {
      if (u?.(), u = void 0, o.value && ln(o.value)) {
        const p = o.value;
        f.forEach((h) => {
          const b = n[h];
          b && p.removeEventListener(h.slice(2).toLowerCase(), b);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (p, h) => p.virtualTriggering ? X("v-if", !0) : (x(), se(c(Jy), Nr({ key: 0 }, p.$attrs, {
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
var n_ = /* @__PURE__ */ Ge(t_, [["__file", "trigger.vue"]]);
const Ya = "focus-trap.focus-after-trapped", Za = "focus-trap.focus-after-released", r_ = "focus-trap.focusout-prevented", rc = {
  cancelable: !0,
  bubbles: !1
}, o_ = {
  cancelable: !0,
  bubbles: !1
}, oc = "focusAfterTrapped", ac = "focusAfterReleased", a_ = Symbol("elFocusTrap"), dl = j(), xa = j(0), pl = j(0);
let Uo = 0;
const _f = (e) => {
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
    if (!s_(n, t))
      return n;
}, s_ = (e, t) => {
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
}, l_ = (e) => {
  const t = _f(e), n = sc(t, e), r = sc(t.reverse(), e);
  return [n, r];
}, i_ = (e) => e instanceof HTMLInputElement && "select" in e, $n = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    ln(e) && !ks(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), pl.value = window.performance.now(), e !== n && i_(e) && t && e.select(), ln(e) && r && e.removeAttribute("tabindex");
  }
};
function lc(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const c_ = () => {
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
}, u_ = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if ($n(r, t), document.activeElement !== n)
      return;
}, ic = c_(), f_ = () => xa.value > pl.value, Ho = () => {
  dl.value = "pointer", xa.value = window.performance.now();
}, cc = () => {
  dl.value = "keyboard", xa.value = window.performance.now();
}, d_ = () => (rt(() => {
  Uo === 0 && (document.addEventListener("mousedown", Ho), document.addEventListener("touchstart", Ho), document.addEventListener("keydown", cc)), Uo++;
}), On(() => {
  Uo--, Uo <= 0 && (document.removeEventListener("mousedown", Ho), document.removeEventListener("touchstart", Ho), document.removeEventListener("keydown", cc));
}), {
  focusReason: dl,
  lastUserFocusTimestamp: xa,
  lastAutomatedFocusTimestamp: pl
}), Wo = (e) => new CustomEvent(r_, {
  ...o_,
  detail: e
}), Tn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let xr = [];
const uc = (e) => {
  e.code === Tn.esc && xr.forEach((t) => t(e));
}, p_ = (e) => {
  rt(() => {
    xr.length === 0 && document.addEventListener("keydown", uc), lt && xr.push(e);
  }), On(() => {
    xr = xr.filter((t) => t !== e), xr.length === 0 && lt && document.removeEventListener("keydown", uc);
  });
}, m_ = ne({
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
    const { focusReason: a } = d_();
    p_((g) => {
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
      const { code: v, altKey: E, ctrlKey: d, metaKey: S, currentTarget: I, shiftKey: T } = g, { loop: _ } = e, O = v === Tn.tab && !E && !d && !S, L = document.activeElement;
      if (O && L) {
        const W = I, [G, Q] = l_(W);
        if (G && Q) {
          if (!T && L === Q) {
            const ee = Wo({
              focusReason: a.value
            });
            t("focusout-prevented", ee), ee.defaultPrevented || (g.preventDefault(), _ && $n(G, !0));
          } else if (T && [G, W].includes(L)) {
            const ee = Wo({
              focusReason: a.value
            });
            t("focusout-prevented", ee), ee.defaultPrevented || (g.preventDefault(), _ && $n(Q, !0));
          }
        } else if (L === W) {
          const ee = Wo({
            focusReason: a.value
          });
          t("focusout-prevented", ee), ee.defaultPrevented || g.preventDefault();
        }
      }
    };
    Sn(a_, {
      focusTrapRef: n,
      onKeydown: i
    }), ve(() => e.focusTrapEl, (g) => {
      g && (n.value = g);
    }, { immediate: !0 }), ve([n], ([g], [v]) => {
      g && (g.addEventListener("keydown", i), g.addEventListener("focusin", f), g.addEventListener("focusout", p)), v && (v.removeEventListener("keydown", i), v.removeEventListener("focusin", f), v.removeEventListener("focusout", p));
    });
    const l = (g) => {
      t(oc, g);
    }, u = (g) => t(ac, g), f = (g) => {
      const v = c(n);
      if (!v)
        return;
      const E = g.target, d = g.relatedTarget, S = E && v.contains(E);
      e.trapped || d && v.contains(d) || (r = d), S && t("focusin", g), !s.paused && e.trapped && (S ? o = E : $n(o, !0));
    }, p = (g) => {
      const v = c(n);
      if (!(s.paused || !v))
        if (e.trapped) {
          const E = g.relatedTarget;
          !Un(E) && !v.contains(E) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const d = Wo({
                focusReason: a.value
              });
              t("focusout-prevented", d), d.defaultPrevented || $n(o, !0);
            }
          }, 0);
        } else {
          const E = g.target;
          E && v.contains(E) || t("focusout", g);
        }
    };
    async function h() {
      await et();
      const g = c(n);
      if (g) {
        ic.push(s);
        const v = g.contains(document.activeElement) ? r : document.activeElement;
        if (r = v, !g.contains(v)) {
          const d = new Event(Ya, rc);
          g.addEventListener(Ya, l), g.dispatchEvent(d), d.defaultPrevented || et(() => {
            let S = e.focusStartEl;
            Ot(S) || ($n(S), document.activeElement !== S && (S = "first")), S === "first" && u_(_f(g), !0), (document.activeElement === v || S === "container") && $n(g);
          });
        }
      }
    }
    function b() {
      const g = c(n);
      if (g) {
        g.removeEventListener(Ya, l);
        const v = new CustomEvent(Za, {
          ...rc,
          detail: {
            focusReason: a.value
          }
        });
        g.addEventListener(Za, u), g.dispatchEvent(v), !v.defaultPrevented && (a.value == "keyboard" || !f_() || g.contains(document.activeElement)) && $n(r ?? document.body), g.removeEventListener(Za, u), ic.remove(s);
      }
    }
    return rt(() => {
      e.trapped && h(), ve(() => e.trapped, (g) => {
        g ? h() : b();
      });
    }), On(() => {
      e.trapped && b(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", f), n.value.removeEventListener("focusout", p), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function h_(e, t, n, r, o, a) {
  return me(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var g_ = /* @__PURE__ */ Ge(m_, [["render", h_], ["__file", "focus-trap.vue"]]), zt = "top", Xt = "bottom", Qt = "right", Bt = "left", ml = "auto", Io = [zt, Xt, Qt, Bt], Br = "start", To = "end", v_ = "clippingParents", wf = "viewport", no = "popper", b_ = "reference", fc = Io.reduce(function(e, t) {
  return e.concat([t + "-" + Br, t + "-" + To]);
}, []), Pa = [].concat(Io, [ml]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Br, t + "-" + To]);
}, []), y_ = "beforeRead", __ = "read", w_ = "afterRead", k_ = "beforeMain", T_ = "main", E_ = "afterMain", S_ = "beforeWrite", A_ = "write", C_ = "afterWrite", O_ = [y_, __, w_, k_, T_, E_, S_, A_, C_];
function Cn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ht(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function vr(e) {
  var t = Ht(e).Element;
  return e instanceof t || e instanceof Element;
}
function Zt(e) {
  var t = Ht(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function hl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Ht(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function L_(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !Zt(a) || !Cn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function I_(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Zt(o) || !Cn(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var kf = { name: "applyStyles", enabled: !0, phase: "write", fn: L_, effect: I_, requires: ["computeStyles"] };
function En(e) {
  return e.split("-")[0];
}
var pr = Math.max, ma = Math.min, Vr = Math.round;
function Ts() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Tf() {
  return !/^((?!chrome|android).)*safari/i.test(Ts());
}
function jr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && Zt(e) && (o = e.offsetWidth > 0 && Vr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Vr(r.height) / e.offsetHeight || 1);
  var s = vr(e) ? Ht(e) : window, i = s.visualViewport, l = !Tf() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, f = (r.top + (l && i ? i.offsetTop : 0)) / a, p = r.width / o, h = r.height / a;
  return { width: p, height: h, top: f, right: u + p, bottom: f + h, left: u, x: u, y: f };
}
function gl(e) {
  var t = jr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Ef(e, t) {
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
function Kn(e) {
  return Ht(e).getComputedStyle(e);
}
function R_(e) {
  return ["table", "td", "th"].indexOf(Cn(e)) >= 0;
}
function ir(e) {
  return ((vr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Na(e) {
  return Cn(e) === "html" ? e : e.assignedSlot || e.parentNode || (hl(e) ? e.host : null) || ir(e);
}
function dc(e) {
  return !Zt(e) || Kn(e).position === "fixed" ? null : e.offsetParent;
}
function x_(e) {
  var t = /firefox/i.test(Ts()), n = /Trident/i.test(Ts());
  if (n && Zt(e)) {
    var r = Kn(e);
    if (r.position === "fixed") return null;
  }
  var o = Na(e);
  for (hl(o) && (o = o.host); Zt(o) && ["html", "body"].indexOf(Cn(o)) < 0; ) {
    var a = Kn(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function Ro(e) {
  for (var t = Ht(e), n = dc(e); n && R_(n) && Kn(n).position === "static"; ) n = dc(n);
  return n && (Cn(n) === "html" || Cn(n) === "body" && Kn(n).position === "static") ? t : n || x_(e) || t;
}
function vl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function fo(e, t, n) {
  return pr(e, ma(t, n));
}
function P_(e, t, n) {
  var r = fo(e, t, n);
  return r > n ? n : r;
}
function Sf() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Af(e) {
  return Object.assign({}, Sf(), e);
}
function Cf(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var N_ = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Af(typeof e != "number" ? e : Cf(e, Io));
};
function $_(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = En(n.placement), l = vl(i), u = [Bt, Qt].indexOf(i) >= 0, f = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = N_(o.padding, n), h = gl(a), b = l === "y" ? zt : Bt, g = l === "y" ? Xt : Qt, v = n.rects.reference[f] + n.rects.reference[l] - s[l] - n.rects.popper[f], E = s[l] - n.rects.reference[l], d = Ro(a), S = d ? l === "y" ? d.clientHeight || 0 : d.clientWidth || 0 : 0, I = v / 2 - E / 2, T = p[b], _ = S - h[f] - p[g], O = S / 2 - h[f] / 2 + I, L = fo(T, O, _), W = l;
    n.modifiersData[r] = (t = {}, t[W] = L, t.centerOffset = L - O, t);
  }
}
function M_(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ef(t.elements.popper, o) && (t.elements.arrow = o));
}
var D_ = { name: "arrow", enabled: !0, phase: "main", fn: $_, effect: M_, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Ur(e) {
  return e.split("-")[1];
}
var F_ = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function z_(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Vr(n * o) / o || 0, y: Vr(r * o) / o || 0 };
}
function pc(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, p = e.isFixed, h = s.x, b = h === void 0 ? 0 : h, g = s.y, v = g === void 0 ? 0 : g, E = typeof f == "function" ? f({ x: b, y: v }) : { x: b, y: v };
  b = E.x, v = E.y;
  var d = s.hasOwnProperty("x"), S = s.hasOwnProperty("y"), I = Bt, T = zt, _ = window;
  if (u) {
    var O = Ro(n), L = "clientHeight", W = "clientWidth";
    if (O === Ht(n) && (O = ir(n), Kn(O).position !== "static" && i === "absolute" && (L = "scrollHeight", W = "scrollWidth")), O = O, o === zt || (o === Bt || o === Qt) && a === To) {
      T = Xt;
      var G = p && O === _ && _.visualViewport ? _.visualViewport.height : O[L];
      v -= G - r.height, v *= l ? 1 : -1;
    }
    if (o === Bt || (o === zt || o === Xt) && a === To) {
      I = Qt;
      var Q = p && O === _ && _.visualViewport ? _.visualViewport.width : O[W];
      b -= Q - r.width, b *= l ? 1 : -1;
    }
  }
  var ue = Object.assign({ position: i }, u && F_), ee = f === !0 ? z_({ x: b, y: v }, Ht(n)) : { x: b, y: v };
  if (b = ee.x, v = ee.y, l) {
    var he;
    return Object.assign({}, ue, (he = {}, he[T] = S ? "0" : "", he[I] = d ? "0" : "", he.transform = (_.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + v + "px)" : "translate3d(" + b + "px, " + v + "px, 0)", he));
  }
  return Object.assign({}, ue, (t = {}, t[T] = S ? v + "px" : "", t[I] = d ? b + "px" : "", t.transform = "", t));
}
function B_(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: En(t.placement), variation: Ur(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, pc(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, pc(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Of = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: B_, data: {} }, Go = { passive: !0 };
function V_(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = Ht(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Go);
  }), i && l.addEventListener("resize", n.update, Go), function() {
    a && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Go);
    }), i && l.removeEventListener("resize", n.update, Go);
  };
}
var Lf = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: V_, data: {} }, j_ = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Jo(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return j_[t];
  });
}
var U_ = { start: "end", end: "start" };
function mc(e) {
  return e.replace(/start|end/g, function(t) {
    return U_[t];
  });
}
function bl(e) {
  var t = Ht(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function yl(e) {
  return jr(ir(e)).left + bl(e).scrollLeft;
}
function H_(e, t) {
  var n = Ht(e), r = ir(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = Tf();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + yl(e), y: l };
}
function W_(e) {
  var t, n = ir(e), r = bl(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = pr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = pr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + yl(e), l = -r.scrollTop;
  return Kn(o || n).direction === "rtl" && (i += pr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function _l(e) {
  var t = Kn(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function If(e) {
  return ["html", "body", "#document"].indexOf(Cn(e)) >= 0 ? e.ownerDocument.body : Zt(e) && _l(e) ? e : If(Na(e));
}
function po(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = If(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Ht(r), s = o ? [a].concat(a.visualViewport || [], _l(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(po(Na(s)));
}
function Es(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function G_(e, t) {
  var n = jr(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function hc(e, t, n) {
  return t === wf ? Es(H_(e, n)) : vr(t) ? G_(t, n) : Es(W_(ir(e)));
}
function K_(e) {
  var t = po(Na(e)), n = ["absolute", "fixed"].indexOf(Kn(e).position) >= 0, r = n && Zt(e) ? Ro(e) : e;
  return vr(r) ? t.filter(function(o) {
    return vr(o) && Ef(o, r) && Cn(o) !== "body";
  }) : [];
}
function q_(e, t, n, r) {
  var o = t === "clippingParents" ? K_(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var f = hc(e, u, r);
    return l.top = pr(f.top, l.top), l.right = ma(f.right, l.right), l.bottom = ma(f.bottom, l.bottom), l.left = pr(f.left, l.left), l;
  }, hc(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Rf(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? En(r) : null, a = r ? Ur(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case zt:
      l = { x: s, y: t.y - n.height };
      break;
    case Xt:
      l = { x: s, y: t.y + t.height };
      break;
    case Qt:
      l = { x: t.x + t.width, y: i };
      break;
    case Bt:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? vl(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (a) {
      case Br:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case To:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function Eo(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? v_ : i, u = n.rootBoundary, f = u === void 0 ? wf : u, p = n.elementContext, h = p === void 0 ? no : p, b = n.altBoundary, g = b === void 0 ? !1 : b, v = n.padding, E = v === void 0 ? 0 : v, d = Af(typeof E != "number" ? E : Cf(E, Io)), S = h === no ? b_ : no, I = e.rects.popper, T = e.elements[g ? S : h], _ = q_(vr(T) ? T : T.contextElement || ir(e.elements.popper), l, f, s), O = jr(e.elements.reference), L = Rf({ reference: O, element: I, placement: o }), W = Es(Object.assign({}, I, L)), G = h === no ? W : O, Q = { top: _.top - G.top + d.top, bottom: G.bottom - _.bottom + d.bottom, left: _.left - G.left + d.left, right: G.right - _.right + d.right }, ue = e.modifiersData.offset;
  if (h === no && ue) {
    var ee = ue[o];
    Object.keys(Q).forEach(function(he) {
      var fe = [Qt, Xt].indexOf(he) >= 0 ? 1 : -1, P = [zt, Xt].indexOf(he) >= 0 ? "y" : "x";
      Q[he] += ee[P] * fe;
    });
  }
  return Q;
}
function Y_(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Pa : l, f = Ur(r), p = f ? i ? fc : fc.filter(function(g) {
    return Ur(g) === f;
  }) : Io, h = p.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  h.length === 0 && (h = p);
  var b = h.reduce(function(g, v) {
    return g[v] = Eo(e, { placement: v, boundary: o, rootBoundary: a, padding: s })[En(v)], g;
  }, {});
  return Object.keys(b).sort(function(g, v) {
    return b[g] - b[v];
  });
}
function Z_(e) {
  if (En(e) === ml) return [];
  var t = Jo(e);
  return [mc(e), t, mc(t)];
}
function X_(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, f = n.boundary, p = n.rootBoundary, h = n.altBoundary, b = n.flipVariations, g = b === void 0 ? !0 : b, v = n.allowedAutoPlacements, E = t.options.placement, d = En(E), S = d === E, I = l || (S || !g ? [Jo(E)] : Z_(E)), T = [E].concat(I).reduce(function(ye, ze) {
      return ye.concat(En(ze) === ml ? Y_(t, { placement: ze, boundary: f, rootBoundary: p, padding: u, flipVariations: g, allowedAutoPlacements: v }) : ze);
    }, []), _ = t.rects.reference, O = t.rects.popper, L = /* @__PURE__ */ new Map(), W = !0, G = T[0], Q = 0; Q < T.length; Q++) {
      var ue = T[Q], ee = En(ue), he = Ur(ue) === Br, fe = [zt, Xt].indexOf(ee) >= 0, P = fe ? "width" : "height", $ = Eo(t, { placement: ue, boundary: f, rootBoundary: p, altBoundary: h, padding: u }), B = fe ? he ? Qt : Bt : he ? Xt : zt;
      _[P] > O[P] && (B = Jo(B));
      var le = Jo(B), te = [];
      if (a && te.push($[ee] <= 0), i && te.push($[B] <= 0, $[le] <= 0), te.every(function(ye) {
        return ye;
      })) {
        G = ue, W = !1;
        break;
      }
      L.set(ue, te);
    }
    if (W) for (var ge = g ? 3 : 1, Y = function(ye) {
      var ze = T.find(function(we) {
        var $e = L.get(we);
        if ($e) return $e.slice(0, ye).every(function(ie) {
          return ie;
        });
      });
      if (ze) return G = ze, "break";
    }, Ue = ge; Ue > 0; Ue--) {
      var Ee = Y(Ue);
      if (Ee === "break") break;
    }
    t.placement !== G && (t.modifiersData[r]._skip = !0, t.placement = G, t.reset = !0);
  }
}
var Q_ = { name: "flip", enabled: !0, phase: "main", fn: X_, requiresIfExists: ["offset"], data: { _skip: !1 } };
function gc(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function vc(e) {
  return [zt, Qt, Xt, Bt].some(function(t) {
    return e[t] >= 0;
  });
}
function J_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Eo(t, { elementContext: "reference" }), i = Eo(t, { altBoundary: !0 }), l = gc(s, r), u = gc(i, o, a), f = vc(l), p = vc(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var e1 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: J_ };
function t1(e, t, n) {
  var r = En(e), o = [Bt, zt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [Bt, Qt].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function n1(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = Pa.reduce(function(f, p) {
    return f[p] = t1(p, t.rects, a), f;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var r1 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: n1 };
function o1(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Rf({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var xf = { name: "popperOffsets", enabled: !0, phase: "read", fn: o1, data: {} };
function a1(e) {
  return e === "x" ? "y" : "x";
}
function s1(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, p = n.padding, h = n.tether, b = h === void 0 ? !0 : h, g = n.tetherOffset, v = g === void 0 ? 0 : g, E = Eo(t, { boundary: l, rootBoundary: u, padding: p, altBoundary: f }), d = En(t.placement), S = Ur(t.placement), I = !S, T = vl(d), _ = a1(T), O = t.modifiersData.popperOffsets, L = t.rects.reference, W = t.rects.popper, G = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, Q = typeof G == "number" ? { mainAxis: G, altAxis: G } : Object.assign({ mainAxis: 0, altAxis: 0 }, G), ue = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, ee = { x: 0, y: 0 };
  if (O) {
    if (a) {
      var he, fe = T === "y" ? zt : Bt, P = T === "y" ? Xt : Qt, $ = T === "y" ? "height" : "width", B = O[T], le = B + E[fe], te = B - E[P], ge = b ? -W[$] / 2 : 0, Y = S === Br ? L[$] : W[$], Ue = S === Br ? -W[$] : -L[$], Ee = t.elements.arrow, ye = b && Ee ? gl(Ee) : { width: 0, height: 0 }, ze = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Sf(), we = ze[fe], $e = ze[P], ie = fo(0, L[$], ye[$]), Ke = I ? L[$] / 2 - ge - ie - we - Q.mainAxis : Y - ie - we - Q.mainAxis, ot = I ? -L[$] / 2 + ge + ie + $e + Q.mainAxis : Ue + ie + $e + Q.mainAxis, He = t.elements.arrow && Ro(t.elements.arrow), bt = He ? T === "y" ? He.clientTop || 0 : He.clientLeft || 0 : 0, at = (he = ue?.[T]) != null ? he : 0, ft = B + Ke - at - bt, dt = B + ot - at, We = fo(b ? ma(le, ft) : le, B, b ? pr(te, dt) : te);
      O[T] = We, ee[T] = We - B;
    }
    if (i) {
      var ut, k = T === "x" ? zt : Bt, A = T === "x" ? Xt : Qt, D = O[_], K = _ === "y" ? "height" : "width", ke = D + E[k], ce = D - E[A], m = [zt, Bt].indexOf(d) !== -1, C = (ut = ue?.[_]) != null ? ut : 0, F = m ? ke : D - L[K] - W[K] - C + Q.altAxis, J = m ? D + L[K] + W[K] - C - Q.altAxis : ce, pe = b && m ? P_(F, D, J) : fo(b ? F : ke, D, b ? J : ce);
      O[_] = pe, ee[_] = pe - D;
    }
    t.modifiersData[r] = ee;
  }
}
var l1 = { name: "preventOverflow", enabled: !0, phase: "main", fn: s1, requiresIfExists: ["offset"] };
function i1(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function c1(e) {
  return e === Ht(e) || !Zt(e) ? bl(e) : i1(e);
}
function u1(e) {
  var t = e.getBoundingClientRect(), n = Vr(t.width) / e.offsetWidth || 1, r = Vr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function f1(e, t, n) {
  n === void 0 && (n = !1);
  var r = Zt(t), o = Zt(t) && u1(t), a = ir(t), s = jr(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Cn(t) !== "body" || _l(a)) && (i = c1(t)), Zt(t) ? (l = jr(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = yl(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function d1(e) {
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
function p1(e) {
  var t = d1(e);
  return O_.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function m1(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function h1(e) {
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
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, bc, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, f = [], p = !1, h = { state: u, setOptions: function(v) {
      var E = typeof v == "function" ? v(u.options) : v;
      g(), u.options = Object.assign({}, a, u.options, E), u.scrollParents = { reference: vr(s) ? po(s) : s.contextElement ? po(s.contextElement) : [], popper: po(i) };
      var d = p1(h1([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = d.filter(function(S) {
        return S.enabled;
      }), b(), h.update();
    }, forceUpdate: function() {
      if (!p) {
        var v = u.elements, E = v.reference, d = v.popper;
        if (yc(E, d)) {
          u.rects = { reference: f1(E, Ro(d), u.options.strategy === "fixed"), popper: gl(d) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(W) {
            return u.modifiersData[W.name] = Object.assign({}, W.data);
          });
          for (var S = 0; S < u.orderedModifiers.length; S++) {
            if (u.reset === !0) {
              u.reset = !1, S = -1;
              continue;
            }
            var I = u.orderedModifiers[S], T = I.fn, _ = I.options, O = _ === void 0 ? {} : _, L = I.name;
            typeof T == "function" && (u = T({ state: u, options: O, name: L, instance: h }) || u);
          }
        }
      }
    }, update: m1(function() {
      return new Promise(function(v) {
        h.forceUpdate(), v(u);
      });
    }), destroy: function() {
      g(), p = !0;
    } };
    if (!yc(s, i)) return h;
    h.setOptions(l).then(function(v) {
      !p && l.onFirstUpdate && l.onFirstUpdate(v);
    });
    function b() {
      u.orderedModifiers.forEach(function(v) {
        var E = v.name, d = v.options, S = d === void 0 ? {} : d, I = v.effect;
        if (typeof I == "function") {
          var T = I({ state: u, name: E, instance: h, options: S }), _ = function() {
          };
          f.push(T || _);
        }
      });
    }
    function g() {
      f.forEach(function(v) {
        return v();
      }), f = [];
    }
    return h;
  };
}
wl();
var g1 = [Lf, xf, Of, kf];
wl({ defaultModifiers: g1 });
var v1 = [Lf, xf, Of, kf, r1, Q_, l1, D_, e1], b1 = wl({ defaultModifiers: v1 });
const y1 = ["fixed", "absolute"], _1 = je({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: de(Array),
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
    values: Pa,
    default: "bottom"
  },
  popperOptions: {
    type: de(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: y1,
    default: "absolute"
  }
}), Pf = je({
  ..._1,
  id: String,
  style: {
    type: de([String, Array, Object])
  },
  className: {
    type: de([String, Array, Object])
  },
  effect: {
    type: de(String),
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
    type: de([String, Array, Object])
  },
  popperStyle: {
    type: de([String, Array, Object])
  },
  referenceEl: {
    type: de(Object)
  },
  triggerTargetEl: {
    type: de(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...kr(["ariaLabel"])
}), w1 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, k1 = (e, t) => {
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
}, T1 = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...S1(e), ...t]
  };
  return A1(a, o?.modifiers), a;
}, E1 = (e) => {
  if (lt)
    return Bn(e);
};
function S1(e) {
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
function A1(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const C1 = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = O1(l);
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
  }), a = rr(), s = j({
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
    i(), !(!l || !u) && (a.value = b1(l, u, c(o)));
  }), On(() => {
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
function O1(e) {
  const t = Object.keys(e.elements), n = ca(t.map((o) => [o, e.styles[o] || {}])), r = ca(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const L1 = 0, I1 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Ne(fl, void 0), a = j(), s = j(), i = R(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = R(() => {
    var d;
    const S = c(a), I = (d = c(s)) != null ? d : L1;
    return {
      name: "arrow",
      enabled: !K0(S),
      options: {
        element: S,
        padding: I
      }
    };
  }), u = R(() => ({
    onFirstUpdate: () => {
      g();
    },
    ...T1(e, [
      c(l),
      c(i)
    ])
  })), f = R(() => E1(e.referenceEl) || c(r)), { attributes: p, state: h, styles: b, update: g, forceUpdate: v, instanceRef: E } = C1(f, n, u);
  return ve(E, (d) => t.value = d), rt(() => {
    ve(() => {
      var d;
      return (d = c(f)) == null ? void 0 : d.getBoundingClientRect();
    }, () => {
      g();
    });
  }), {
    attributes: p,
    arrowRef: a,
    contentRef: n,
    instanceRef: E,
    state: h,
    styles: b,
    role: o,
    forceUpdate: v,
    update: g
  };
}, R1 = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Ku(), a = it("popper"), s = R(() => c(t).popper), i = j(xe(e.zIndex) ? e.zIndex : o()), l = R(() => [
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
      i.value = xe(e.zIndex) ? e.zIndex : o();
    }
  };
}, x1 = ne({
  name: "ElPopperContent"
}), P1 = /* @__PURE__ */ ne({
  ...x1,
  props: Pf,
  emits: w1,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = k1(r, n), { attributes: p, arrowRef: h, contentRef: b, styles: g, instanceRef: v, role: E, update: d } = I1(r), {
      ariaModal: S,
      arrowStyle: I,
      contentAttrs: T,
      contentClass: _,
      contentStyle: O,
      updateZIndex: L
    } = R1(r, {
      styles: g,
      attributes: p,
      role: E
    }), W = Ne(pa, void 0), G = j();
    Sn(mf, {
      arrowStyle: I,
      arrowRef: h,
      arrowOffset: G
    }), W && Sn(pa, {
      ...W,
      addInputId: _o,
      removeInputId: _o
    });
    let Q;
    const ue = (he = !0) => {
      d(), he && L();
    }, ee = () => {
      ue(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return rt(() => {
      ve(() => r.triggerTargetEl, (he, fe) => {
        Q?.(), Q = void 0;
        const P = c(he || b.value), $ = c(fe || b.value);
        ln(P) && (Q = ve([E, () => r.ariaLabel, S, () => r.id], (B) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((le, te) => {
            Un(B[te]) ? P.removeAttribute(le) : P.setAttribute(le, B[te]);
          });
        }, { immediate: !0 })), $ !== P && ln($) && ["role", "aria-label", "aria-modal", "id"].forEach((B) => {
          $.removeAttribute(B);
        });
      }, { immediate: !0 }), ve(() => r.visible, ee, { immediate: !0 });
    }), On(() => {
      Q?.(), Q = void 0;
    }), t({
      popperContentRef: b,
      popperInstanceRef: v,
      updatePopper: ue,
      contentStyle: O
    }), (he, fe) => (x(), H("div", Nr({
      ref_key: "contentRef",
      ref: b
    }, c(T), {
      style: c(O),
      class: c(_),
      tabindex: "-1",
      onMouseenter: (P) => he.$emit("mouseenter", P),
      onMouseleave: (P) => he.$emit("mouseleave", P)
    }), [
      M(c(g_), {
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
var N1 = /* @__PURE__ */ Ge(P1, [["__file", "content.vue"]]);
const $1 = fn(Gy), kl = Symbol("elTooltip");
function _c() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Oo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const M1 = je({
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
}), D1 = ({
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
        xe(p) && p > 0 && s(() => {
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
}, Tl = je({
  ...M1,
  ...Pf,
  appendTo: {
    type: de([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: de(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...kr(["ariaLabel"])
}), Nf = je({
  ...vf,
  disabled: Boolean,
  trigger: {
    type: de([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: de(Array),
    default: () => [Tn.enter, Tn.numpadEnter, Tn.space]
  }
}), F1 = Oa({
  type: de(Boolean),
  default: null
}), z1 = Oa({
  type: de(Function)
}), B1 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: F1,
    [n]: z1
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
      const h = $t(), { emit: b } = h, g = h.props, v = R(() => Ze(g[n])), E = R(() => g[e] === null), d = (L) => {
        s.value !== !0 && (s.value = !0, i && (i.value = L), Ze(f) && f(L));
      }, S = (L) => {
        s.value !== !1 && (s.value = !1, i && (i.value = L), Ze(p) && p(L));
      }, I = (L) => {
        if (g.disabled === !0 || Ze(u) && !u())
          return;
        const W = v.value && lt;
        W && b(t, !0), (E.value || !W) && d(L);
      }, T = (L) => {
        if (g.disabled === !0 || !lt)
          return;
        const W = v.value && lt;
        W && b(t, !1), (E.value || !W) && S(L);
      }, _ = (L) => {
        or(L) && (g.disabled && L ? v.value && b(t, !1) : s.value !== L && (L ? d() : S()));
      }, O = () => {
        s.value ? T() : I();
      };
      return ve(() => g[e], _), l && h.appContext.config.globalProperties.$route !== void 0 && ve(() => ({
        ...h.proxy.$route
      }), () => {
        l.value && s.value && T();
      }), rt(() => {
        _(g[e]);
      }), {
        hide: T,
        show: I,
        toggle: O,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: V1,
  useModelToggleEmits: j1,
  useModelToggle: U1
} = B1("visible"), H1 = je({
  ...hf,
  ...V1,
  ...Tl,
  ...Nf,
  ...gf,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), W1 = [
  ...j1,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], G1 = (e, t) => yn(e) ? e.includes(t) : e === t, Cr = (e, t, n) => (r) => {
  G1(c(e), t) && n(r);
}, Mn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, K1 = ne({
  name: "ElTooltipTrigger"
}), q1 = /* @__PURE__ */ ne({
  ...K1,
  props: Nf,
  setup(e, { expose: t }) {
    const n = e, r = it("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = Ne(kl, void 0), f = j(null), p = () => {
      if (c(o) || n.disabled)
        return !0;
    }, h = Dn(n, "trigger"), b = Mn(p, Cr(h, "hover", i)), g = Mn(p, Cr(h, "hover", l)), v = Mn(p, Cr(h, "click", (T) => {
      T.button === 0 && u(T);
    })), E = Mn(p, Cr(h, "focus", i)), d = Mn(p, Cr(h, "focus", l)), S = Mn(p, Cr(h, "contextmenu", (T) => {
      T.preventDefault(), u(T);
    })), I = Mn(p, (T) => {
      const { code: _ } = T;
      n.triggerKeys.includes(_) && (T.preventDefault(), u(T));
    });
    return t({
      triggerRef: f
    }), (T, _) => (x(), se(c(n_), {
      id: c(a),
      "virtual-ref": T.virtualRef,
      open: c(s),
      "virtual-triggering": T.virtualTriggering,
      class: U(c(r).e("trigger")),
      onBlur: c(d),
      onClick: c(v),
      onContextmenu: c(S),
      onFocus: c(E),
      onMouseenter: c(b),
      onMouseleave: c(g),
      onKeydown: c(I)
    }, {
      default: oe(() => [
        me(T.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Y1 = /* @__PURE__ */ Ge(q1, [["__file", "trigger.vue"]]);
const Z1 = je({
  to: {
    type: de([String, Object]),
    required: !0
  },
  disabled: Boolean
}), X1 = /* @__PURE__ */ ne({
  __name: "teleport",
  props: Z1,
  setup(e) {
    return (t, n) => t.disabled ? me(t.$slots, "default", { key: 0 }) : (x(), se(id, {
      key: 1,
      to: t.to
    }, [
      me(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var Q1 = /* @__PURE__ */ Ge(X1, [["__file", "teleport.vue"]]);
const J1 = fn(Q1), $f = () => {
  const e = qs(), t = uf(), n = R(() => `${e.value}-popper-container-${t.prefix}`), r = R(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, ew = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, tw = () => {
  const { id: e, selector: t } = $f();
  return cd(() => {
    lt && (document.body.querySelector(t.value) || ew(e.value));
  }), {
    id: e,
    selector: t
  };
}, nw = ne({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), rw = /* @__PURE__ */ ne({
  ...nw,
  props: Tl,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = $f(), o = it("tooltip"), a = j();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: f,
      onClose: p,
      onOpen: h,
      onShow: b,
      onHide: g,
      onBeforeShow: v,
      onBeforeHide: E
    } = Ne(kl, void 0), d = R(() => n.transition || `${o.namespace.value}-fade-in-linear`), S = R(() => n.persistent);
    On(() => {
      s?.();
    });
    const I = R(() => c(S) ? !0 : c(u)), T = R(() => n.disabled ? !1 : c(u)), _ = R(() => n.appendTo || r.value), O = R(() => {
      var B;
      return (B = n.style) != null ? B : {};
    }), L = j(!0), W = () => {
      g(), $() && $n(document.body), L.value = !0;
    }, G = () => {
      if (c(i))
        return !0;
    }, Q = Mn(G, () => {
      n.enterable && c(f) === "hover" && h();
    }), ue = Mn(G, () => {
      c(f) === "hover" && p();
    }), ee = () => {
      var B, le;
      (le = (B = a.value) == null ? void 0 : B.updatePopper) == null || le.call(B), v?.();
    }, he = () => {
      E?.();
    }, fe = () => {
      b(), s = ub(R(() => {
        var B;
        return (B = a.value) == null ? void 0 : B.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(f) !== "hover" && p();
      });
    }, P = () => {
      n.virtualTriggering || p();
    }, $ = (B) => {
      var le;
      const te = (le = a.value) == null ? void 0 : le.popperContentRef, ge = B?.relatedTarget || document.activeElement;
      return te?.contains(ge);
    };
    return ve(() => c(u), (B) => {
      B ? L.value = !1 : s?.();
    }, {
      flush: "post"
    }), ve(() => n.content, () => {
      var B, le;
      (le = (B = a.value) == null ? void 0 : B.updatePopper) == null || le.call(B);
    }), t({
      contentRef: a,
      isFocusInsideContent: $
    }), (B, le) => (x(), se(c(J1), {
      disabled: !B.teleported,
      to: c(_)
    }, {
      default: oe(() => [
        M(Gr, {
          name: c(d),
          onAfterLeave: W,
          onBeforeEnter: ee,
          onAfterEnter: fe,
          onBeforeLeave: he
        }, {
          default: oe(() => [
            c(I) ? vt((x(), se(c(N1), Nr({
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
              visible: c(T),
              "z-index": B.zIndex,
              onMouseenter: c(Q),
              onMouseleave: c(ue),
              onBlur: P,
              onClose: c(p)
            }), {
              default: oe(() => [
                me(B.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [Wn, c(T)]
            ]) : X("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var ow = /* @__PURE__ */ Ge(rw, [["__file", "content.vue"]]);
const aw = ne({
  name: "ElTooltip"
}), sw = /* @__PURE__ */ ne({
  ...aw,
  props: H1,
  emits: W1,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    tw();
    const o = Ia(), a = j(), s = j(), i = () => {
      var d;
      const S = c(a);
      S && ((d = S.popperInstanceRef) == null || d.update());
    }, l = j(!1), u = j(), { show: f, hide: p, hasUpdateHandler: h } = U1({
      indicator: l,
      toggleReason: u
    }), { onOpen: b, onClose: g } = D1({
      showAfter: Dn(r, "showAfter"),
      hideAfter: Dn(r, "hideAfter"),
      autoClose: Dn(r, "autoClose"),
      open: f,
      close: p
    }), v = R(() => or(r.visible) && !h.value);
    Sn(kl, {
      controlled: v,
      id: o,
      open: Ls(l),
      trigger: Dn(r, "trigger"),
      onOpen: (d) => {
        b(d);
      },
      onClose: (d) => {
        g(d);
      },
      onToggle: (d) => {
        c(l) ? g(d) : b(d);
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
      var S;
      return (S = s.value) == null ? void 0 : S.isFocusInsideContent(d);
    };
    return ud(() => l.value && p()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: E,
      updatePopper: i,
      onOpen: b,
      onClose: g,
      hide: p
    }), (d, S) => (x(), se(c($1), {
      ref_key: "popperRef",
      ref: a,
      role: d.role
    }, {
      default: oe(() => [
        M(Y1, {
          disabled: d.disabled,
          trigger: d.trigger,
          "trigger-keys": d.triggerKeys,
          "virtual-ref": d.virtualRef,
          "virtual-triggering": d.virtualTriggering
        }, {
          default: oe(() => [
            d.$slots.default ? me(d.$slots, "default", { key: 0 }) : X("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        M(ow, {
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
              d.rawContent ? (x(), H("span", {
                key: 0,
                innerHTML: d.content
              }, null, 8, ["innerHTML"])) : (x(), H("span", { key: 1 }, V(d.content), 1))
            ]),
            d.showArrow ? (x(), se(c(Yy), {
              key: 0,
              "arrow-offset": d.arrowOffset
            }, null, 8, ["arrow-offset"])) : X("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var lw = /* @__PURE__ */ Ge(sw, [["__file", "tooltip.vue"]]);
const iw = fn(lw), cw = je({
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
    type: de([String, Object, Array])
  },
  offset: {
    type: de(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), uw = ne({
  name: "ElBadge"
}), fw = /* @__PURE__ */ ne({
  ...uw,
  props: cw,
  setup(e, { expose: t }) {
    const n = e, r = it("badge"), o = R(() => n.isDot ? "" : xe(n.value) && xe(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = R(() => {
      var s, i, l, u, f;
      return [
        {
          backgroundColor: n.color,
          marginRight: zr(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: zr((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (f = n.badgeStyle) != null ? f : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (x(), H("div", {
      class: U(c(r).b())
    }, [
      me(s.$slots, "default"),
      M(Gr, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: oe(() => [
          vt(w("sup", {
            class: U([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: wt(c(a))
          }, [
            me(s.$slots, "content", { value: c(o) }, () => [
              qt(V(c(o)), 1)
            ])
          ], 6), [
            [Wn, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var dw = /* @__PURE__ */ Ge(fw, [["__file", "badge.vue"]]);
const pw = fn(dw), mw = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Ss = je({
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
}), hw = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, gw = ne({
  name: "ElTag"
}), vw = /* @__PURE__ */ ne({
  ...gw,
  props: Ss,
  emits: hw,
  setup(e, { emit: t }) {
    const n = e, r = Lo(), o = it("tag"), a = R(() => {
      const { type: u, hit: f, effect: p, closable: h, round: b } = n;
      return [
        o.b(),
        o.is("closable", h),
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
      var f, p, h;
      (h = (p = (f = u?.component) == null ? void 0 : f.subTree) == null ? void 0 : p.component) != null && h.bum && (u.component.subTree.component.bum = null);
    };
    return (u, f) => u.disableTransitions ? (x(), H("span", {
      key: 0,
      class: U(c(a)),
      style: wt({ backgroundColor: u.color }),
      onClick: i
    }, [
      w("span", {
        class: U(c(o).e("content"))
      }, [
        me(u.$slots, "default")
      ], 2),
      u.closable ? (x(), se(c(st), {
        key: 0,
        class: U(c(o).e("close")),
        onClick: qe(s, ["stop"])
      }, {
        default: oe(() => [
          M(c(fa))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : X("v-if", !0)
    ], 6)) : (x(), se(Gr, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: oe(() => [
        w("span", {
          class: U(c(a)),
          style: wt({ backgroundColor: u.color }),
          onClick: i
        }, [
          w("span", {
            class: U(c(o).e("content"))
          }, [
            me(u.$slots, "default")
          ], 2),
          u.closable ? (x(), se(c(st), {
            key: 0,
            class: U(c(o).e("close")),
            onClick: qe(s, ["stop"])
          }, {
            default: oe(() => [
              M(c(fa))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : X("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var bw = /* @__PURE__ */ Ge(vw, [["__file", "tag.vue"]]);
const yw = fn(bw), Jn = /* @__PURE__ */ new Map();
if (lt) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of Jn.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function wc(e, t) {
  let n = [];
  return yn(t.arg) ? n = t.arg : ln(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, f = e.contains(s) || e.contains(i), p = e === s, h = n.length && n.some((g) => g?.contains(s)) || n.length && n.includes(i), b = a && (a.contains(s) || a.contains(i));
    l || u || f || p || h || b || t.value(r, o);
  };
}
const _w = {
  beforeMount(e, t) {
    Jn.has(e) || Jn.set(e, []), Jn.get(e).push({
      documentHandler: wc(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Jn.has(e) || Jn.set(e, []);
    const n = Jn.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: wc(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    Jn.delete(e);
  }
}, ww = je({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: de(Object)
  },
  size: La,
  button: {
    type: de(Object)
  },
  experimentalFeatures: {
    type: de(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: de(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...Qu
}), nn = {};
ne({
  name: "ElConfigProvider",
  props: ww,
  setup(e, { slots: t }) {
    ve(() => e.message, (r) => {
      Object.assign(nn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = tf(e);
    return () => me(t, "default", { config: n?.value });
  }
});
const kw = 100, Tw = 600, kc = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = kw, delay: o = Tw } = Ze(n) ? {} : n;
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
}, Ew = je({
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
    validator: (e) => e === null || xe(e) || ["min", "max"].includes(e),
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
  ...kr(["ariaLabel"])
}), Sw = {
  [Gn]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Hn]: (e) => xe(e) || Un(e),
  [gt]: (e) => xe(e) || Un(e)
}, Aw = ne({
  name: "ElInputNumber"
}), Cw = /* @__PURE__ */ ne({
  ...Aw,
  props: Ew,
  emits: Sw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = ol(), a = it("input-number"), s = j(), i = mr({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = Ra(), u = R(() => xe(r.modelValue) && r.modelValue <= r.min), f = R(() => xe(r.modelValue) && r.modelValue >= r.max), p = R(() => {
      const P = d(r.step);
      return _n(r.precision) ? Math.max(d(r.modelValue), P) : (P > r.precision, r.precision);
    }), h = R(() => r.controls && r.controlsPosition === "right"), b = Lo(), g = cl(), v = R(() => {
      if (i.userInput !== null)
        return i.userInput;
      let P = i.currentValue;
      if (Un(P))
        return "";
      if (xe(P)) {
        if (Number.isNaN(P))
          return "";
        _n(r.precision) || (P = P.toFixed(r.precision));
      }
      return P;
    }), E = (P, $) => {
      if (_n($) && ($ = p.value), $ === 0)
        return Math.round(P);
      let B = String(P);
      const le = B.indexOf(".");
      if (le === -1 || !B.replace(".", "").split("")[le + $])
        return P;
      const Y = B.length;
      return B.charAt(Y - 1) === "5" && (B = `${B.slice(0, Math.max(0, Y - 1))}6`), Number.parseFloat(Number(B).toFixed($));
    }, d = (P) => {
      if (Un(P))
        return 0;
      const $ = P.toString(), B = $.indexOf(".");
      let le = 0;
      return B !== -1 && (le = $.length - B - 1), le;
    }, S = (P, $ = 1) => xe(P) ? E(P + r.step * $) : i.currentValue, I = () => {
      if (r.readonly || g.value || f.value)
        return;
      const P = Number(v.value) || 0, $ = S(P);
      O($), n(Hn, i.currentValue), he();
    }, T = () => {
      if (r.readonly || g.value || u.value)
        return;
      const P = Number(v.value) || 0, $ = S(P, -1);
      O($), n(Hn, i.currentValue), he();
    }, _ = (P, $) => {
      const { max: B, min: le, step: te, precision: ge, stepStrictly: Y, valueOnClear: Ue } = r;
      B < le && rl("InputNumber", "min should not be greater than max.");
      let Ee = Number(P);
      if (Un(P) || Number.isNaN(Ee))
        return null;
      if (P === "") {
        if (Ue === null)
          return null;
        Ee = Ot(Ue) ? { min: le, max: B }[Ue] : Ue;
      }
      return Y && (Ee = E(Math.round(Ee / te) * te, ge), Ee !== P && $ && n(gt, Ee)), _n(ge) || (Ee = E(Ee, ge)), (Ee > B || Ee < le) && (Ee = Ee > B ? B : le, $ && n(gt, Ee)), Ee;
    }, O = (P, $ = !0) => {
      var B;
      const le = i.currentValue, te = _(P);
      if (!$) {
        n(gt, te);
        return;
      }
      le === te && P || (i.userInput = null, n(gt, te), le !== te && n(Gn, te, le), r.validateEvent && ((B = l?.validate) == null || B.call(l, "change").catch((ge) => void 0)), i.currentValue = te);
    }, L = (P) => {
      i.userInput = P;
      const $ = P === "" ? null : Number(P);
      n(Hn, $), O($, !1);
    }, W = (P) => {
      const $ = P !== "" ? Number(P) : "";
      (xe($) && !Number.isNaN($) || P === "") && O($), he(), i.userInput = null;
    }, G = () => {
      var P, $;
      ($ = (P = s.value) == null ? void 0 : P.focus) == null || $.call(P);
    }, Q = () => {
      var P, $;
      ($ = (P = s.value) == null ? void 0 : P.blur) == null || $.call(P);
    }, ue = (P) => {
      n("focus", P);
    }, ee = (P) => {
      var $, B;
      i.userInput = null, lf() && i.currentValue === null && (($ = s.value) != null && $.input) && (s.value.input.value = ""), n("blur", P), r.validateEvent && ((B = l?.validate) == null || B.call(l, "blur").catch((le) => void 0));
    }, he = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, fe = (P) => {
      document.activeElement === P.target && P.preventDefault();
    };
    return ve(() => r.modelValue, (P, $) => {
      const B = _(P, !0);
      i.userInput === null && B !== $ && (i.currentValue = B);
    }, { immediate: !0 }), rt(() => {
      var P;
      const { min: $, max: B, modelValue: le } = r, te = (P = s.value) == null ? void 0 : P.input;
      if (te.setAttribute("role", "spinbutton"), Number.isFinite(B) ? te.setAttribute("aria-valuemax", String(B)) : te.removeAttribute("aria-valuemax"), Number.isFinite($) ? te.setAttribute("aria-valuemin", String($)) : te.removeAttribute("aria-valuemin"), te.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), te.setAttribute("aria-disabled", String(g.value)), !xe(le) && le != null) {
        let ge = Number(le);
        Number.isNaN(ge) && (ge = null), n(gt, ge);
      }
      te.addEventListener("wheel", fe, { passive: !1 });
    }), Uc(() => {
      var P, $;
      const B = (P = s.value) == null ? void 0 : P.input;
      B?.setAttribute("aria-valuenow", `${($ = i.currentValue) != null ? $ : ""}`);
    }), t({
      focus: G,
      blur: Q
    }), (P, $) => (x(), H("div", {
      class: U([
        c(a).b(),
        c(a).m(c(b)),
        c(a).is("disabled", c(g)),
        c(a).is("without-controls", !P.controls),
        c(a).is("controls-right", c(h))
      ]),
      onDragstart: qe(() => {
      }, ["prevent"])
    }, [
      P.controls ? vt((x(), H("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: U([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: Yt(T, ["enter"])
      }, [
        me(P.$slots, "decrease-icon", {}, () => [
          M(c(st), null, {
            default: oe(() => [
              c(h) ? (x(), se(c(of), { key: 0 })) : (x(), se(c(ey), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(kc), T]
      ]) : X("v-if", !0),
      P.controls ? vt((x(), H("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: U([c(a).e("increase"), c(a).is("disabled", c(f))]),
        onKeydown: Yt(I, ["enter"])
      }, [
        me(P.$slots, "increase-icon", {}, () => [
          M(c(st), null, {
            default: oe(() => [
              c(h) ? (x(), se(c(Vb), { key: 0 })) : (x(), se(c(ny), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(kc), I]
      ]) : X("v-if", !0),
      M(c(Cy), {
        id: P.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: P.step,
        "model-value": c(v),
        placeholder: P.placeholder,
        readonly: P.readonly,
        disabled: c(g),
        size: c(b),
        max: P.max,
        min: P.min,
        name: P.name,
        "aria-label": P.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          Yt(qe(I, ["prevent"]), ["up"]),
          Yt(qe(T, ["prevent"]), ["down"])
        ],
        onBlur: ee,
        onFocus: ue,
        onInput: L,
        onChange: W
      }, fd({
        _: 2
      }, [
        P.$slots.prefix ? {
          name: "prefix",
          fn: oe(() => [
            me(P.$slots, "prefix")
          ])
        } : void 0,
        P.$slots.suffix ? {
          name: "suffix",
          fn: oe(() => [
            me(P.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var Ow = /* @__PURE__ */ Ge(Cw, [["__file", "input-number.vue"]]);
const Lw = fn(Ow);
function Iw() {
  const e = rr(), t = j(0), n = 11, r = R(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return bn(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const Mf = Symbol("ElSelectGroup"), $a = Symbol("ElSelect");
function Rw(e, t) {
  const n = Ne($a), r = Ne(Mf, { disabled: !1 }), o = R(() => f(tr(n.props.modelValue), e.value)), a = R(() => {
    var b;
    if (n.props.multiple) {
      const g = tr((b = n.props.modelValue) != null ? b : []);
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = R(() => e.label || (Ut(e.value) ? "" : e.value)), i = R(() => e.value || e.label || ""), l = R(() => e.disabled || t.groupDisabled || a.value), u = $t(), f = (b = [], g) => {
    if (Ut(e.value)) {
      const v = n.props.valueKey;
      return b && b.some((E) => dd(nr(E, v)) === nr(g, v));
    } else
      return b && b.includes(g);
  }, p = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, h = (b) => {
    const g = new RegExp(mw(b), "i");
    t.visible = g.test(s.value) || e.created;
  };
  return ve(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ve(() => e.value, (b, g) => {
    const { remote: v, valueKey: E } = n.props;
    if ((v ? b !== g : !uo(b, g)) && (n.onOptionDestroy(g, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !v) {
      if (E && Ut(b) && Ut(g) && b[E] === g[E])
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
    updateOption: h
  };
}
const xw = ne({
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
    const t = it("select"), n = Ia(), r = R(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(h))
    ]), o = mr({
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
    } = Rw(e, o), { visible: p, hover: h } = Is(o), b = $t().proxy;
    l.onOptionCreate(b), On(() => {
      const v = b.value, { selected: E } = l.states, d = E.some((S) => S.value === b.value);
      et(() => {
        l.states.cachedOptions.get(v) === b && !d && l.states.cachedOptions.delete(v);
      }), l.onOptionDestroy(v, b);
    });
    function g() {
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
      hover: h,
      selectOptionClick: g,
      states: o
    };
  }
});
function Pw(e, t, n, r, o, a) {
  return vt((x(), H("li", {
    id: e.id,
    class: U(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: qe(e.selectOptionClick, ["stop"])
  }, [
    me(e.$slots, "default", {}, () => [
      w("span", null, V(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [Wn, e.visible]
  ]);
}
var El = /* @__PURE__ */ Ge(xw, [["render", Pw], ["__file", "option.vue"]]);
const Nw = ne({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Ne($a), t = it("select"), n = R(() => e.props.popperClass), r = R(() => e.props.multiple), o = R(() => e.props.fitInputWidth), a = j("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return rt(() => {
      s(), bn(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function $w(e, t, n, r, o, a) {
  return x(), H("div", {
    class: U([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: wt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (x(), H("div", {
      key: 0,
      class: U(e.ns.be("dropdown", "header"))
    }, [
      me(e.$slots, "header")
    ], 2)) : X("v-if", !0),
    me(e.$slots, "default"),
    e.$slots.footer ? (x(), H("div", {
      key: 1,
      class: U(e.ns.be("dropdown", "footer"))
    }, [
      me(e.$slots, "footer")
    ], 2)) : X("v-if", !0)
  ], 6);
}
var Mw = /* @__PURE__ */ Ge(Nw, [["render", $w], ["__file", "select-dropdown.vue"]]);
const Dw = (e, t) => {
  const { t: n } = ol(), r = Ia(), o = it("select"), a = it("input"), s = mr({
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
  }), i = j(null), l = j(null), u = j(null), f = j(null), p = j(null), h = j(null), b = j(null), g = j(null), v = j(null), E = j(null), d = j(null), {
    isComposing: S,
    handleCompositionStart: I,
    handleCompositionUpdate: T,
    handleCompositionEnd: _
  } = pf({
    afterComposition: (N) => pe(N)
  }), { wrapperRef: O, isFocused: L, handleBlur: W } = df(p, {
    beforeFocus() {
      return $.value;
    },
    afterFocus() {
      e.automaticDropdown && !G.value && (G.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(N) {
      var q, be;
      return ((q = u.value) == null ? void 0 : q.isFocusInsideContent(N)) || ((be = f.value) == null ? void 0 : be.isFocusInsideContent(N));
    },
    afterBlur() {
      G.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), G = j(!1), Q = j(), { form: ue, formItem: ee } = Ra(), { inputId: he } = il(e, {
    formItemContext: ee
  }), { valueOnClear: fe, isEmptyValue: P } = xb(e), $ = R(() => e.disabled || ue?.disabled), B = R(() => yn(e.modelValue) ? e.modelValue.length > 0 : !P(e.modelValue)), le = R(() => {
    var N;
    return (N = ue?.statusIcon) != null ? N : !1;
  }), te = R(() => e.clearable && !$.value && s.inputHovering && B.value), ge = R(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), Y = R(() => o.is("reverse", ge.value && G.value)), Ue = R(() => ee?.validateState || ""), Ee = R(() => sf[Ue.value]), ye = R(() => e.remote ? 300 : 0), ze = R(() => e.remote && !s.inputValue && s.options.size === 0), we = R(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && $e.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), $e = R(() => ie.value.filter((N) => N.visible).length), ie = R(() => {
    const N = Array.from(s.options.values()), q = [];
    return s.optionValues.forEach((be) => {
      const Xe = N.findIndex((pt) => pt.value === be);
      Xe > -1 && q.push(N[Xe]);
    }), q.length >= N.length ? q : N;
  }), Ke = R(() => Array.from(s.cachedOptions.values())), ot = R(() => {
    const N = ie.value.filter((q) => !q.created).some((q) => q.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !N;
  }), He = () => {
    e.filterable && Ze(e.filterMethod) || e.filterable && e.remote && Ze(e.remoteMethod) || ie.value.forEach((N) => {
      var q;
      (q = N.updateOption) == null || q.call(N, s.inputValue);
    });
  }, bt = Lo(), at = R(() => ["small"].includes(bt.value) ? "small" : "default"), ft = R({
    get() {
      return G.value && !ze.value;
    },
    set(N) {
      G.value = N;
    }
  }), dt = R(() => {
    if (e.multiple && !_n(e.modelValue))
      return tr(e.modelValue).length === 0 && !s.inputValue;
    const N = yn(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || _n(N) ? !s.inputValue : !0;
  }), We = R(() => {
    var N;
    const q = (N = e.placeholder) != null ? N : n("el.select.placeholder");
    return e.multiple || !B.value ? q : s.selectedLabel;
  }), ut = R(() => ws ? null : "mouseenter");
  ve(() => e.modelValue, (N, q) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", k("")), D(), !uo(N, q) && e.validateEvent && ee?.validate("change").catch((be) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), ve(() => G.value, (N) => {
    N ? k(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", N);
  }), ve(() => s.options.entries(), () => {
    lt && (D(), e.defaultFirstOption && (e.filterable || e.remote) && $e.value && A());
  }, {
    flush: "post"
  }), ve([() => s.hoveringIndex, ie], ([N]) => {
    xe(N) && N > -1 ? Q.value = ie.value[N] || {} : Q.value = {}, ie.value.forEach((q) => {
      q.hover = Q.value === q;
    });
  }), jc(() => {
    s.isBeforeHide || He();
  });
  const k = (N) => {
    s.previousQuery === N || S.value || (s.previousQuery = N, e.filterable && Ze(e.filterMethod) ? e.filterMethod(N) : e.filterable && e.remote && Ze(e.remoteMethod) && e.remoteMethod(N), e.defaultFirstOption && (e.filterable || e.remote) && $e.value ? et(A) : et(ke));
  }, A = () => {
    const N = ie.value.filter((pt) => pt.visible && !pt.disabled && !pt.states.groupDisabled), q = N.find((pt) => pt.created), be = N[0], Xe = ie.value.map((pt) => pt.value);
    s.hoveringIndex = cr(Xe, q || be);
  }, D = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const q = yn(e.modelValue) ? e.modelValue[0] : e.modelValue, be = K(q);
      s.selectedLabel = be.currentLabel, s.selected = [be];
      return;
    }
    const N = [];
    _n(e.modelValue) || tr(e.modelValue).forEach((q) => {
      N.push(K(q));
    }), s.selected = N;
  }, K = (N) => {
    let q;
    const be = lh(N);
    for (let Gt = s.cachedOptions.size - 1; Gt >= 0; Gt--) {
      const jt = Ke.value[Gt];
      if (be ? nr(jt.value, e.valueKey) === nr(N, e.valueKey) : jt.value === N) {
        q = {
          value: N,
          currentLabel: jt.currentLabel,
          get isDisabled() {
            return jt.isDisabled;
          }
        };
        break;
      }
    }
    if (q)
      return q;
    const Xe = be ? N.label : N ?? "";
    return {
      value: N,
      currentLabel: Xe
    };
  }, ke = () => {
    s.hoveringIndex = ie.value.findIndex((N) => s.selected.some((q) => Fe(q) === Fe(N)));
  }, ce = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, m = () => {
    s.collapseItemWidth = E.value.getBoundingClientRect().width;
  }, C = () => {
    var N, q;
    (q = (N = u.value) == null ? void 0 : N.updatePopper) == null || q.call(N);
  }, F = () => {
    var N, q;
    (q = (N = f.value) == null ? void 0 : N.updatePopper) == null || q.call(N);
  }, J = () => {
    s.inputValue.length > 0 && !G.value && (G.value = !0), k(s.inputValue);
  }, pe = (N) => {
    if (s.inputValue = N.target.value, e.remote)
      Le();
    else
      return J();
  }, Le = W0(() => {
    J();
  }, ye.value), Se = (N) => {
    uo(e.modelValue, N) || t(Gn, N);
  }, yt = (N) => G0(N, (q) => {
    const be = s.cachedOptions.get(q);
    return be && !be.disabled && !be.states.groupDisabled;
  }), en = (N) => {
    if (e.multiple && N.code !== Tn.delete && N.target.value.length <= 0) {
      const q = tr(e.modelValue).slice(), be = yt(q);
      if (be < 0)
        return;
      const Xe = q[be];
      q.splice(be, 1), t(gt, q), Se(q), t("remove-tag", Xe);
    }
  }, It = (N, q) => {
    const be = s.selected.indexOf(q);
    if (be > -1 && !$.value) {
      const Xe = tr(e.modelValue).slice();
      Xe.splice(be, 1), t(gt, Xe), Se(Xe), t("remove-tag", q.value);
    }
    N.stopPropagation(), Tr();
  }, Je = (N) => {
    N.stopPropagation();
    const q = e.multiple ? [] : fe.value;
    if (e.multiple)
      for (const be of s.selected)
        be.isDisabled && q.push(be.value);
    t(gt, q), Se(q), s.hoveringIndex = -1, G.value = !1, t("clear"), Tr();
  }, In = (N) => {
    var q;
    if (e.multiple) {
      const be = tr((q = e.modelValue) != null ? q : []).slice(), Xe = cr(be, N);
      Xe > -1 ? be.splice(Xe, 1) : (e.multipleLimit <= 0 || be.length < e.multipleLimit) && be.push(N.value), t(gt, be), Se(be), N.created && k(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(gt, N.value), Se(N.value), G.value = !1;
    Tr(), !G.value && et(() => {
      Rn(N);
    });
  }, cr = (N = [], q) => _n(q) ? -1 : Ut(q.value) ? N.findIndex((be) => uo(nr(be, e.valueKey), Fe(q))) : N.indexOf(q.value), Rn = (N) => {
    var q, be, Xe, pt, Gt;
    const jt = yn(N) ? N[0] : N;
    let Dt = null;
    if (jt?.value) {
      const Qn = ie.value.filter((Mo) => Mo.value === jt.value);
      Qn.length > 0 && (Dt = Qn[0].$el);
    }
    if (u.value && Dt) {
      const Qn = (pt = (Xe = (be = (q = u.value) == null ? void 0 : q.popperRef) == null ? void 0 : be.contentRef) == null ? void 0 : Xe.querySelector) == null ? void 0 : pt.call(Xe, `.${o.be("dropdown", "wrap")}`);
      Qn && Nb(Qn, Dt);
    }
    (Gt = d.value) == null || Gt.handleScroll();
  }, Wt = (N) => {
    s.options.set(N.value, N), s.cachedOptions.set(N.value, N);
  }, Zn = (N, q) => {
    s.options.get(N) === q && s.options.delete(N);
  }, qr = R(() => {
    var N, q;
    return (q = (N = u.value) == null ? void 0 : N.popperRef) == null ? void 0 : q.contentRef;
  }), Yr = () => {
    s.isBeforeHide = !1, et(() => {
      var N;
      (N = d.value) == null || N.update(), Rn(s.selected);
    });
  }, Tr = () => {
    var N;
    (N = p.value) == null || N.focus();
  }, Zr = () => {
    var N;
    if (G.value) {
      G.value = !1, et(() => {
        var q;
        return (q = p.value) == null ? void 0 : q.blur();
      });
      return;
    }
    (N = p.value) == null || N.blur();
  }, Xr = (N) => {
    Je(N);
  }, Ma = (N) => {
    if (G.value = !1, L.value) {
      const q = new FocusEvent("focus", N);
      et(() => W(q));
    }
  }, ur = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : G.value = !1;
  }, xo = () => {
    $.value || (ws && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : G.value = !G.value);
  }, Da = () => {
    if (!G.value)
      xo();
    else {
      const N = ie.value[s.hoveringIndex];
      N && !N.isDisabled && In(N);
    }
  }, Fe = (N) => Ut(N.value) ? nr(N.value, e.valueKey) : N.value, Xn = R(() => ie.value.filter((N) => N.visible).every((N) => N.isDisabled)), Fa = R(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), Po = R(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), Er = (N) => {
    if (!G.value) {
      G.value = !0;
      return;
    }
    if (!(s.options.size === 0 || $e.value === 0 || S.value) && !Xn.value) {
      N === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : N === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const q = ie.value[s.hoveringIndex];
      (q.isDisabled || !q.visible) && Er(N), et(() => Rn(Q.value));
    }
  }, No = () => {
    if (!l.value)
      return 0;
    const N = window.getComputedStyle(l.value);
    return Number.parseFloat(N.gap || "6px");
  }, $o = R(() => {
    const N = No();
    return { maxWidth: `${E.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - N : s.selectionWidth}px` };
  }), za = R(() => ({ maxWidth: `${s.selectionWidth}px` })), Vt = (N) => {
    t("popup-scroll", N);
  };
  return bn(l, ce), bn(g, C), bn(O, C), bn(v, F), bn(E, m), rt(() => {
    D();
  }), {
    inputId: he,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: L,
    expanded: G,
    optionsArray: ie,
    hoverOption: Q,
    selectSize: bt,
    filteredOptionsCount: $e,
    updateTooltip: C,
    updateTagTooltip: F,
    debouncedOnInputChange: Le,
    onInput: pe,
    deletePrevTag: en,
    deleteTag: It,
    deleteSelected: Je,
    handleOptionSelect: In,
    scrollToOption: Rn,
    hasModelValue: B,
    shouldShowPlaceholder: dt,
    currentPlaceholder: We,
    mouseEnterEventName: ut,
    needStatusIcon: le,
    showClose: te,
    iconComponent: ge,
    iconReverse: Y,
    validateState: Ue,
    validateIcon: Ee,
    showNewOption: ot,
    updateOptions: He,
    collapseTagSize: at,
    setSelected: D,
    selectDisabled: $,
    emptyText: we,
    handleCompositionStart: I,
    handleCompositionUpdate: T,
    handleCompositionEnd: _,
    onOptionCreate: Wt,
    onOptionDestroy: Zn,
    handleMenuEnter: Yr,
    focus: Tr,
    blur: Zr,
    handleClearClick: Xr,
    handleClickOutside: Ma,
    handleEsc: ur,
    toggleMenu: xo,
    selectOption: Da,
    getValueKey: Fe,
    navigateOptions: Er,
    dropdownMenuVisible: ft,
    showTagList: Fa,
    collapseTagList: Po,
    popupScroll: Vt,
    tagStyle: $o,
    collapseTagStyle: za,
    popperRef: qr,
    inputRef: p,
    tooltipRef: u,
    tagTooltipRef: f,
    prefixRef: h,
    suffixRef: b,
    selectRef: i,
    wrapperRef: O,
    selectionRef: l,
    scrollbarRef: d,
    menuRef: g,
    tagMenuRef: v,
    collapseItemRef: E
  };
};
var Fw = ne({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Ne($a);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        yn(u) && u.forEach((f) => {
          var p, h, b, g;
          const v = (p = f?.type || {}) == null ? void 0 : p.name;
          v === "ElOptionGroup" ? l(!Ot(f.children) && !yn(f.children) && Ze((h = f.children) == null ? void 0 : h.default) ? (b = f.children) == null ? void 0 : b.default() : f.children) : v === "ElOption" ? i.push((g = f.props) == null ? void 0 : g.value) : yn(f.children) && l(f.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), uo(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const zw = je({
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
    type: de(String),
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
    type: de(Object),
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
    type: wn,
    default: sl
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: wn,
    default: of
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
    type: de(String),
    values: Pa,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: de(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...Qu,
  ...kr(["ariaLabel"])
}), Tc = "ElSelect", Bw = ne({
  name: Tc,
  componentName: Tc,
  components: {
    ElSelectMenu: Mw,
    ElOption: El,
    ElOptions: Fw,
    ElTag: yw,
    ElScrollbar: jy,
    ElTooltip: iw,
    ElIcon: st
  },
  directives: { ClickOutside: _w },
  props: zw,
  emits: [
    gt,
    Gn,
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
      return yn(l) ? u ? l : f : u ? f : l;
    }), r = mr({
      ...Is(e),
      modelValue: n
    }), o = Dw(r, t), { calculatorRef: a, inputStyle: s } = Iw();
    Sn($a, mr({
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
function Vw(e, t, n, r, o, a) {
  const s = fr("el-tag"), i = fr("el-tooltip"), l = fr("el-icon"), u = fr("el-option"), f = fr("el-options"), p = fr("el-scrollbar"), h = fr("el-select-menu"), b = pd("click-outside");
  return vt((x(), H("div", {
    ref: "selectRef",
    class: U([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [md(e.mouseEnterEventName)]: (g) => e.states.inputHovering = !0,
    onMouseleave: (g) => e.states.inputHovering = !1
  }, [
    M(i, {
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
      default: oe(() => {
        var g;
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
            onClick: qe(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (x(), H("div", {
              key: 0,
              ref: "prefixRef",
              class: U(e.nsSelect.e("prefix"))
            }, [
              me(e.$slots, "prefix")
            ], 2)) : X("v-if", !0),
            w("div", {
              ref: "selectionRef",
              class: U([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? me(e.$slots, "tag", { key: 0 }, () => [
                (x(!0), H(Ct, null, $r(e.showTagList, (v) => (x(), H("div", {
                  key: e.getValueKey(v),
                  class: U(e.nsSelect.e("selected-item"))
                }, [
                  M(s, {
                    closable: !e.selectDisabled && !v.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: wt(e.tagStyle),
                    onClose: (E) => e.deleteTag(E, v)
                  }, {
                    default: oe(() => [
                      w("span", {
                        class: U(e.nsSelect.e("tags-text"))
                      }, [
                        me(e.$slots, "label", {
                          label: v.currentLabel,
                          value: v.value
                        }, () => [
                          qt(V(v.currentLabel), 1)
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
                      M(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: wt(e.collapseTagStyle)
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
                      (x(!0), H(Ct, null, $r(e.collapseTagList, (v) => (x(), H("div", {
                        key: e.getValueKey(v),
                        class: U(e.nsSelect.e("selected-item"))
                      }, [
                        M(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !v.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (E) => e.deleteTag(E, v)
                        }, {
                          default: oe(() => [
                            w("span", {
                              class: U(e.nsSelect.e("tags-text"))
                            }, [
                              me(e.$slots, "label", {
                                label: v.currentLabel,
                                value: v.value
                              }, () => [
                                qt(V(v.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : X("v-if", !0)
              ]) : X("v-if", !0),
              w("div", {
                class: U([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                vt(w("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (v) => e.states.inputValue = v,
                  type: "text",
                  name: e.name,
                  class: U([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: wt(e.inputStyle),
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
                    Yt(qe((v) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    Yt(qe((v) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    Yt(qe(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    Yt(qe(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    Yt(qe(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: qe(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [ho, e.states.inputValue]
                ]),
                e.filterable ? (x(), H("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: U(e.nsSelect.e("input-calculator")),
                  textContent: V(e.states.inputValue)
                }, null, 10, ["textContent"])) : X("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (x(), H("div", {
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
                ]) : (x(), H("span", { key: 1 }, V(e.currentPlaceholder), 1))
              ], 2)) : X("v-if", !0)
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
                  (x(), se(Pt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0),
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
                  (x(), se(Pt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : X("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (x(), se(l, {
                key: 2,
                class: U([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: oe(() => [
                  (x(), se(Pt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : X("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: oe(() => [
        M(h, { ref: "menuRef" }, {
          default: oe(() => [
            e.$slots.header ? (x(), H("div", {
              key: 0,
              class: U(e.nsSelect.be("dropdown", "header")),
              onClick: qe(() => {
              }, ["stop"])
            }, [
              me(e.$slots, "header")
            ], 10, ["onClick"])) : X("v-if", !0),
            vt(M(p, {
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
                }, null, 8, ["value"])) : X("v-if", !0),
                M(f, null, {
                  default: oe(() => [
                    me(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [Wn, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (x(), H("div", {
              key: 1,
              class: U(e.nsSelect.be("dropdown", "loading"))
            }, [
              me(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (x(), H("div", {
              key: 2,
              class: U(e.nsSelect.be("dropdown", "empty"))
            }, [
              me(e.$slots, "empty", {}, () => [
                w("span", null, V(e.emptyText), 1)
              ])
            ], 2)) : X("v-if", !0),
            e.$slots.footer ? (x(), H("div", {
              key: 3,
              class: U(e.nsSelect.be("dropdown", "footer")),
              onClick: qe(() => {
              }, ["stop"])
            }, [
              me(e.$slots, "footer")
            ], 10, ["onClick"])) : X("v-if", !0)
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
var jw = /* @__PURE__ */ Ge(Bw, [["render", Vw], ["__file", "select.vue"]]);
const Uw = ne({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = it("select"), n = j(null), r = $t(), o = j([]);
    Sn(Mf, mr({
      ...Is(e)
    }));
    const a = R(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var f, p;
      return ((f = u.type) == null ? void 0 : f.name) === "ElOption" && !!((p = u.component) != null && p.proxy);
    }, i = (u) => {
      const f = tr(u), p = [];
      return f.forEach((h) => {
        var b, g;
        s(h) ? p.push(h.component.proxy) : (b = h.children) != null && b.length ? p.push(...i(h.children)) : (g = h.component) != null && g.subTree && p.push(...i(h.component.subTree));
      }), p;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return rt(() => {
      l();
    }), vb(n, l, {
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
function Hw(e, t, n, r, o, a) {
  return vt((x(), H("ul", {
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
    [Wn, e.visible]
  ]);
}
var Df = /* @__PURE__ */ Ge(Uw, [["render", Hw], ["__file", "option-group.vue"]]);
const Ww = fn(jw, {
  Option: El,
  OptionGroup: Df
}), Gw = rf(El);
rf(Df);
const Kw = (e) => ["", ...al].includes(e), qw = je({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: Kw
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: wn
  },
  activeActionIcon: {
    type: wn
  },
  activeIcon: {
    type: wn
  },
  inactiveIcon: {
    type: wn
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
    type: de(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...kr(["ariaLabel"])
}), Yw = {
  [gt]: (e) => or(e) || Ot(e) || xe(e),
  [Gn]: (e) => or(e) || Ot(e) || xe(e),
  [Hn]: (e) => or(e) || Ot(e) || xe(e)
}, Ff = "ElSwitch", Zw = ne({
  name: Ff
}), Xw = /* @__PURE__ */ ne({
  ...Zw,
  props: qw,
  emits: Yw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = Ra(), a = Lo(), s = it("switch"), { inputId: i } = il(r, {
      formItemContext: o
    }), l = cl(R(() => r.loading)), u = j(r.modelValue !== !1), f = j(), p = j(), h = R(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", l.value),
      s.is("checked", d.value)
    ]), b = R(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !d.value)
    ]), g = R(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", d.value)
    ]), v = R(() => ({
      width: zr(r.width)
    }));
    ve(() => r.modelValue, () => {
      u.value = !0;
    });
    const E = R(() => u.value ? r.modelValue : !1), d = R(() => E.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(E.value) || (n(gt, r.inactiveValue), n(Gn, r.inactiveValue), n(Hn, r.inactiveValue)), ve(d, (_) => {
      var O;
      f.value.checked = _, r.validateEvent && ((O = o?.validate) == null || O.call(o, "change").catch((L) => void 0));
    });
    const S = () => {
      const _ = d.value ? r.inactiveValue : r.activeValue;
      n(gt, _), n(Gn, _), n(Hn, _), et(() => {
        f.value.checked = d.value;
      });
    }, I = () => {
      if (l.value)
        return;
      const { beforeChange: _ } = r;
      if (!_) {
        S();
        return;
      }
      const O = _();
      [
        di(O),
        or(O)
      ].includes(!0) || rl(Ff, "beforeChange must return type `Promise<boolean>` or `boolean`"), di(O) ? O.then((W) => {
        W && S();
      }).catch((W) => {
      }) : O && S();
    }, T = () => {
      var _, O;
      (O = (_ = f.value) == null ? void 0 : _.focus) == null || O.call(_);
    };
    return rt(() => {
      f.value.checked = d.value;
    }), t({
      focus: T,
      checked: d
    }), (_, O) => (x(), H("div", {
      class: U(c(h)),
      onClick: qe(I, ["prevent"])
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
        onChange: S,
        onKeydown: Yt(I, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !_.inlinePrompt && (_.inactiveIcon || _.inactiveText) ? (x(), H("span", {
        key: 0,
        class: U(c(b))
      }, [
        _.inactiveIcon ? (x(), se(c(st), { key: 0 }, {
          default: oe(() => [
            (x(), se(Pt(_.inactiveIcon)))
          ]),
          _: 1
        })) : X("v-if", !0),
        !_.inactiveIcon && _.inactiveText ? (x(), H("span", {
          key: 1,
          "aria-hidden": c(d)
        }, V(_.inactiveText), 9, ["aria-hidden"])) : X("v-if", !0)
      ], 2)) : X("v-if", !0),
      w("span", {
        ref_key: "core",
        ref: p,
        class: U(c(s).e("core")),
        style: wt(c(v))
      }, [
        _.inlinePrompt ? (x(), H("div", {
          key: 0,
          class: U(c(s).e("inner"))
        }, [
          _.activeIcon || _.inactiveIcon ? (x(), se(c(st), {
            key: 0,
            class: U(c(s).is("icon"))
          }, {
            default: oe(() => [
              (x(), se(Pt(c(d) ? _.activeIcon : _.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : _.activeText || _.inactiveText ? (x(), H("span", {
            key: 1,
            class: U(c(s).is("text")),
            "aria-hidden": !c(d)
          }, V(c(d) ? _.activeText : _.inactiveText), 11, ["aria-hidden"])) : X("v-if", !0)
        ], 2)) : X("v-if", !0),
        w("div", {
          class: U(c(s).e("action"))
        }, [
          _.loading ? (x(), se(c(st), {
            key: 0,
            class: U(c(s).is("loading"))
          }, {
            default: oe(() => [
              M(c(af))
            ]),
            _: 1
          }, 8, ["class"])) : c(d) ? me(_.$slots, "active-action", { key: 1 }, () => [
            _.activeActionIcon ? (x(), se(c(st), { key: 0 }, {
              default: oe(() => [
                (x(), se(Pt(_.activeActionIcon)))
              ]),
              _: 1
            })) : X("v-if", !0)
          ]) : c(d) ? X("v-if", !0) : me(_.$slots, "inactive-action", { key: 2 }, () => [
            _.inactiveActionIcon ? (x(), se(c(st), { key: 0 }, {
              default: oe(() => [
                (x(), se(Pt(_.inactiveActionIcon)))
              ]),
              _: 1
            })) : X("v-if", !0)
          ])
        ], 2)
      ], 6),
      !_.inlinePrompt && (_.activeIcon || _.activeText) ? (x(), H("span", {
        key: 1,
        class: U(c(g))
      }, [
        _.activeIcon ? (x(), se(c(st), { key: 0 }, {
          default: oe(() => [
            (x(), se(Pt(_.activeIcon)))
          ]),
          _: 1
        })) : X("v-if", !0),
        !_.activeIcon && _.activeText ? (x(), H("span", {
          key: 1,
          "aria-hidden": !c(d)
        }, V(_.activeText), 9, ["aria-hidden"])) : X("v-if", !0)
      ], 2)) : X("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var Qw = /* @__PURE__ */ Ge(Xw, [["__file", "switch.vue"]]);
const Jw = fn(Qw), zf = ["success", "info", "warning", "error"], Et = cf({
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
  appendTo: lt ? document.body : void 0
}), ek = je({
  customClass: {
    type: String,
    default: Et.customClass
  },
  center: {
    type: Boolean,
    default: Et.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Et.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Et.duration
  },
  icon: {
    type: wn,
    default: Et.icon
  },
  id: {
    type: String,
    default: Et.id
  },
  message: {
    type: de([
      String,
      Object,
      Function
    ]),
    default: Et.message
  },
  onClose: {
    type: de(Function),
    default: Et.onClose
  },
  showClose: {
    type: Boolean,
    default: Et.showClose
  },
  type: {
    type: String,
    values: zf,
    default: Et.type
  },
  plain: {
    type: Boolean,
    default: Et.plain
  },
  offset: {
    type: Number,
    default: Et.offset
  },
  zIndex: {
    type: Number,
    default: Et.zIndex
  },
  grouping: {
    type: Boolean,
    default: Et.grouping
  },
  repeatNum: {
    type: Number,
    default: Et.repeatNum
  }
}), tk = {
  destroy: () => !0
}, sn = hd([]), nk = (e) => {
  const t = sn.findIndex((o) => o.id === e), n = sn[t];
  let r;
  return t > 0 && (r = sn[t - 1]), { current: n, prev: r };
}, rk = (e) => {
  const { prev: t } = nk(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, ok = (e, t) => sn.findIndex((r) => r.id === e) > 0 ? 16 : t, ak = ne({
  name: "ElMessage"
}), sk = /* @__PURE__ */ ne({
  ...ak,
  props: ek,
  emits: tk,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = uy, { ns: o, zIndex: a } = ef("message"), { currentZIndex: s, nextZIndex: i } = a, l = j(), u = j(!1), f = j(0);
    let p;
    const h = R(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), b = R(() => {
      const L = n.type;
      return { [o.bm("icon", L)]: L && da[L] };
    }), g = R(() => n.icon || da[n.type] || ""), v = R(() => rk(n.id)), E = R(() => ok(n.id, n.offset) + v.value), d = R(() => f.value + E.value), S = R(() => ({
      top: `${E.value}px`,
      zIndex: s.value
    }));
    function I() {
      n.duration !== 0 && ({ stop: p } = Uu(() => {
        _();
      }, n.duration));
    }
    function T() {
      p?.();
    }
    function _() {
      u.value = !1;
    }
    function O({ code: L }) {
      L === Tn.esc && _();
    }
    return rt(() => {
      I(), i(), u.value = !0;
    }), ve(() => n.repeatNum, () => {
      T(), I();
    }), cn(document, "keydown", O), bn(l, () => {
      f.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: d,
      close: _
    }), (L, W) => (x(), se(Gr, {
      name: c(o).b("fade"),
      onBeforeLeave: L.onClose,
      onAfterLeave: (G) => L.$emit("destroy"),
      persisted: ""
    }, {
      default: oe(() => [
        vt(w("div", {
          id: L.id,
          ref_key: "messageRef",
          ref: l,
          class: U([
            c(o).b(),
            { [c(o).m(L.type)]: L.type },
            c(o).is("center", L.center),
            c(o).is("closable", L.showClose),
            c(o).is("plain", L.plain),
            L.customClass
          ]),
          style: wt(c(S)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: I
        }, [
          L.repeatNum > 1 ? (x(), se(c(pw), {
            key: 0,
            value: L.repeatNum,
            type: c(h),
            class: U(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : X("v-if", !0),
          c(g) ? (x(), se(c(st), {
            key: 1,
            class: U([c(o).e("icon"), c(b)])
          }, {
            default: oe(() => [
              (x(), se(Pt(c(g))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          me(L.$slots, "default", {}, () => [
            L.dangerouslyUseHTMLString ? (x(), H(Ct, { key: 1 }, [
              X(" Caution here, message could've been compromised, never use user's input as message "),
              w("p", {
                class: U(c(o).e("content")),
                innerHTML: L.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (x(), H("p", {
              key: 0,
              class: U(c(o).e("content"))
            }, V(L.message), 3))
          ]),
          L.showClose ? (x(), se(c(st), {
            key: 2,
            class: U(c(o).e("closeBtn")),
            onClick: qe(_, ["stop"])
          }, {
            default: oe(() => [
              M(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : X("v-if", !0)
        ], 46, ["id"]), [
          [Wn, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var lk = /* @__PURE__ */ Ge(sk, [["__file", "message.vue"]]);
let ik = 1;
const Bf = (e) => {
  const t = !e || Ot(e) || go(e) || Ze(e) ? { message: e } : e, n = {
    ...Et,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Ot(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    ln(r) || (r = document.body), n.appendTo = r;
  }
  return or(nn.grouping) && !n.grouping && (n.grouping = nn.grouping), xe(nn.duration) && n.duration === 3e3 && (n.duration = nn.duration), xe(nn.offset) && n.offset === 16 && (n.offset = nn.offset), or(nn.showClose) && !n.showClose && (n.showClose = nn.showClose), n;
}, ck = (e) => {
  const t = sn.indexOf(e);
  if (t === -1)
    return;
  sn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, uk = ({ appendTo: e, ...t }, n) => {
  const r = `message_${ik++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), ck(f);
    },
    onDestroy: () => {
      ta(null, a);
    }
  }, i = M(lk, s, Ze(s.message) || go(s.message) ? {
    default: Ze(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || Hr._context, ta(i, a), e.appendChild(a.firstElementChild);
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
}, Hr = (e = {}, t) => {
  if (!lt)
    return { close: () => {
    } };
  const n = Bf(e);
  if (n.grouping && sn.length) {
    const o = sn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (xe(nn.max) && sn.length >= nn.max)
    return { close: () => {
    } };
  const r = uk(n, t);
  return sn.push(r), r.handler;
};
zf.forEach((e) => {
  Hr[e] = (t = {}, n) => {
    const r = Bf(t);
    return Hr({ ...r, type: e }, n);
  };
});
function fk(e) {
  for (const t of sn)
    (!e || e === t.props.type) && t.handler.close();
}
Hr.closeAll = fk;
Hr._context = null;
const dk = nf(Hr, "$message"), Vf = [
  "success",
  "info",
  "warning",
  "error"
], pk = je({
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
    type: wn
  },
  id: {
    type: String,
    default: ""
  },
  message: {
    type: de([
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
    type: de(Function),
    default: () => {
    }
  },
  onClose: {
    type: de(Function),
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
    values: [...Vf, ""],
    default: ""
  },
  zIndex: Number
}), mk = {
  destroy: () => !0
}, hk = ne({
  name: "ElNotification"
}), gk = /* @__PURE__ */ ne({
  ...hk,
  props: pk,
  emits: mk,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = ef("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = cy, l = j(!1);
    let u;
    const f = R(() => {
      const I = n.type;
      return I && da[n.type] ? r.m(I) : "";
    }), p = R(() => n.type && da[n.type] || n.icon), h = R(() => n.position.endsWith("right") ? "right" : "left"), b = R(() => n.position.startsWith("top") ? "top" : "bottom"), g = R(() => {
      var I;
      return {
        [b.value]: `${n.offset}px`,
        zIndex: (I = n.zIndex) != null ? I : s.value
      };
    });
    function v() {
      n.duration > 0 && ({ stop: u } = Uu(() => {
        l.value && d();
      }, n.duration));
    }
    function E() {
      u?.();
    }
    function d() {
      l.value = !1;
    }
    function S({ code: I }) {
      I === Tn.delete || I === Tn.backspace ? E() : I === Tn.esc ? l.value && d() : v();
    }
    return rt(() => {
      v(), a(), l.value = !0;
    }), cn(document, "keydown", S), t({
      visible: l,
      close: d
    }), (I, T) => (x(), se(Gr, {
      name: c(r).b("fade"),
      onBeforeLeave: I.onClose,
      onAfterLeave: (_) => I.$emit("destroy"),
      persisted: ""
    }, {
      default: oe(() => [
        vt(w("div", {
          id: I.id,
          class: U([c(r).b(), I.customClass, c(h)]),
          style: wt(c(g)),
          role: "alert",
          onMouseenter: E,
          onMouseleave: v,
          onClick: I.onClick
        }, [
          c(p) ? (x(), se(c(st), {
            key: 0,
            class: U([c(r).e("icon"), c(f)])
          }, {
            default: oe(() => [
              (x(), se(Pt(c(p))))
            ]),
            _: 1
          }, 8, ["class"])) : X("v-if", !0),
          w("div", {
            class: U(c(r).e("group"))
          }, [
            w("h2", {
              class: U(c(r).e("title")),
              textContent: V(I.title)
            }, null, 10, ["textContent"]),
            vt(w("div", {
              class: U(c(r).e("content")),
              style: wt(I.title ? void 0 : { margin: 0 })
            }, [
              me(I.$slots, "default", {}, () => [
                I.dangerouslyUseHTMLString ? (x(), H(Ct, { key: 1 }, [
                  X(" Caution here, message could've been compromised, never use user's input as message "),
                  w("p", { innerHTML: I.message }, null, 8, ["innerHTML"])
                ], 2112)) : (x(), H("p", { key: 0 }, V(I.message), 1))
              ])
            ], 6), [
              [Wn, I.message]
            ]),
            I.showClose ? (x(), se(c(st), {
              key: 0,
              class: U(c(r).e("closeBtn")),
              onClick: qe(d, ["stop"])
            }, {
              default: oe(() => [
                M(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : X("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [Wn, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var vk = /* @__PURE__ */ Ge(gk, [["__file", "notification.vue"]]);
const ha = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, As = 16;
let bk = 1;
const Wr = function(e = {}, t) {
  if (!lt)
    return { close: () => {
    } };
  (Ot(e) || go(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  ha[n].forEach(({ vm: f }) => {
    var p;
    r += (((p = f.el) == null ? void 0 : p.offsetHeight) || 0) + As;
  }), r += As;
  const o = `notification_${bk++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      yk(o, n, a);
    }
  };
  let i = document.body;
  ln(e.appendTo) ? i = e.appendTo : Ot(e.appendTo) && (i = document.querySelector(e.appendTo)), ln(i) || (i = document.body);
  const l = document.createElement("div"), u = M(vk, s, Ze(s.message) ? s.message : go(s.message) ? () => s.message : null);
  return u.appContext = _n(t) ? Wr._context : t, u.props.onDestroy = () => {
    ta(null, l);
  }, ta(u, l), ha[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Vf.forEach((e) => {
  Wr[e] = (t = {}, n) => ((Ot(t) || go(t)) && (t = {
    message: t
  }), Wr({ ...t, type: e }, n));
});
function yk(e, t, n) {
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
      const { el: f, component: p } = r[u].vm, h = Number.parseInt(f.style[i], 10) - s - As;
      p.props.offset = h;
    }
}
function _k() {
  for (const e of Object.values(ha))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
Wr.closeAll = _k;
Wr._context = null;
const wk = nf(Wr, "$notify"), xt = {
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
    r === "center" ? dk({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : wk({
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
function kk(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Tt(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Ec;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Ec || (Ec = {}));
async function Tk(e, t) {
  await Tt("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ek(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return Tt("plugin:event|listen", {
    event: e,
    target: o,
    handler: kk(t)
  }).then((a) => async () => Tk(e, a));
}
const Sk = "snippets-code:developer-mode", jf = "snippets-code:frontend-diagnostics", Ak = 240, ro = "[REDACTED]", ea = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${ro}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${ro}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  ro
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${ro}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${ro}`
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
}, Ck = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, Ok = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(jf) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Sl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Sk) === "true";
  } catch {
    return !1;
  }
}, Lk = (e, t, n) => {
  if (!Sl() || typeof localStorage > "u") return;
  const r = Ok();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Ck(),
    message: ea(t),
    data: Uf(n)
  });
  try {
    localStorage.setItem(
      jf,
      JSON.stringify(r.slice(-Ak))
    );
  } catch {
  }
}, Ik = () => Sl(), Rk = (e) => e === "warn" || e === "error" || !1 || !1 || Sl(), Ko = (e, t, n) => {
  Lk(e, t, n), Rk(e) && Tt("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Uf(n)
  }).catch(() => {
  });
}, vn = {
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
    Ik() && Ko("debug", e, t);
  }
};
async function Hf() {
  return await Tt("local_ai_get_config");
}
async function Xa(e) {
  return await Tt("local_ai_save_config", { config: e });
}
async function xk(e) {
  return await Tt("local_ai_scan_models", {
    config: e ?? null
  });
}
async function Pk() {
  return await Tt("local_ai_get_runtime_status");
}
async function Wf() {
  return await Tt("local_ai_get_status");
}
async function Nk(e) {
  return await Tt("local_ai_start_service", {
    config: e ?? null
  });
}
async function $k() {
  return await Tt("local_ai_restart_service");
}
async function Mk() {
  await Tt("local_ai_stop_service");
}
function Gf() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function Dk(e, t, n = {}) {
  const r = n.requestId ?? Gf(), o = await Ek(
    "local-ai-chat-stream",
    (a) => {
      const s = a.payload;
      s.requestId === r && (s.event === "delta" && s.content ? t(s.content) : s.event === "stats" && s.stats && n.onStats?.(s.stats));
    }
  );
  try {
    return await Tt("local_ai_chat_stream", {
      request: e,
      requestId: r
    });
  } finally {
    o();
  }
}
async function Sc(e) {
  return await Tt("local_ai_cancel_chat_stream", { requestId: e });
}
async function Fk() {
  return await Tt("local_ai_get_chat_histories");
}
async function zk(e) {
  return await Tt("local_ai_save_chat_history", { history: e });
}
async function Bk(e) {
  return await Tt("local_ai_delete_chat_history", { historyId: e });
}
/*! @license DOMPurify 3.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.7/LICENSE */
function Ac(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Vk(e) {
  if (Array.isArray(e)) return e;
}
function jk(e, t) {
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
function Uk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hk(e, t) {
  return Vk(e) || jk(e, t) || Wk(e, t) || Uk();
}
function Wk(e, t) {
  if (e) {
    if (typeof e == "string") return Ac(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ac(e, t) : void 0;
  }
}
const Kf = Object.entries, Cc = Object.setPrototypeOf, Gk = Object.isFrozen, Kk = Object.getPrototypeOf, qk = Object.getOwnPropertyDescriptor;
let Mt = Object.freeze, Jt = Object.seal, Pr = Object.create, qf = typeof Reflect < "u" && Reflect, Cs = qf.apply, Os = qf.construct;
Mt || (Mt = function(t) {
  return t;
});
Jt || (Jt = function(t) {
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
const Or = ct(Array.prototype.forEach), Yk = ct(Array.prototype.lastIndexOf), Oc = ct(Array.prototype.pop), Lr = ct(Array.prototype.push), Zk = ct(Array.prototype.splice), Rt = Array.isArray, lo = ct(String.prototype.toLowerCase), Qa = ct(String.prototype.toString), Lc = ct(String.prototype.match), Ir = ct(String.prototype.replace), Ic = ct(String.prototype.indexOf), Xk = ct(String.prototype.trim), Qk = ct(Number.prototype.toString), Jk = ct(Boolean.prototype.toString), Rc = typeof BigInt > "u" ? null : ct(BigInt.prototype.toString), xc = typeof Symbol > "u" ? null : ct(Symbol.prototype.toString), Qe = ct(Object.prototype.hasOwnProperty), oo = ct(Object.prototype.toString), _t = ct(RegExp.prototype.test), ao = eT(TypeError);
function ct(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Cs(e, t, r);
  };
}
function eT(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Os(e, n);
  };
}
function _e(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : lo;
  if (Cc && Cc(e, null), !Rt(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (Gk(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function tT(e) {
  for (let t = 0; t < e.length; t++)
    Qe(e, t) || (e[t] = null);
  return e;
}
function St(e) {
  const t = Pr(null);
  for (const r of Kf(e)) {
    var n = Hk(r, 2);
    const o = n[0], a = n[1];
    Qe(e, o) && (Rt(a) ? t[o] = tT(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = St(a) : t[o] = a);
  }
  return t;
}
function nT(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Qk(e);
    case "boolean":
      return Jk(e);
    case "bigint":
      return Rc ? Rc(e) : "0";
    case "symbol":
      return xc ? xc(e) : "Symbol()";
    case "undefined":
      return oo(e);
    case "function":
    case "object": {
      if (e === null)
        return oo(e);
      const t = e, n = gn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : oo(r);
      }
      return oo(e);
    }
    default:
      return oo(e);
  }
}
function gn(e, t) {
  for (; e !== null; ) {
    const r = qk(e, t);
    if (r) {
      if (r.get)
        return ct(r.get);
      if (typeof r.value == "function")
        return ct(r.value);
    }
    e = Kk(e);
  }
  function n() {
    return null;
  }
  return n;
}
function rT(e) {
  try {
    return _t(e, ""), !0;
  } catch {
    return !1;
  }
}
const Pc = Mt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ja = Mt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), es = Mt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), oT = Mt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ts = Mt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), aT = Mt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Nc = Mt(["#text"]), $c = Mt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ns = Mt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Mc = Mt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), qo = Mt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), sT = Jt(/{{[\w\W]*|^[\w\W]*}}/g), lT = Jt(/<%[\w\W]*|^[\w\W]*%>/g), iT = Jt(/\${[\w\W]*/g), cT = Jt(/^data-[\-\w.\u00B7-\uFFFF]+$/), uT = Jt(/^aria-[\-\w]+$/), Dc = Jt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), fT = Jt(/^(?:\w+script|data):/i), dT = Jt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), pT = Jt(/^html$/i), mT = Jt(/^[a-z][.\w]*(-[.\w]+)+$/i), hn = {
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
}, hT = function() {
  return typeof window > "u" ? null : window;
}, gT = function(t, n) {
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
}, Fc = function() {
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
function Yf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : hT();
  const t = (ae) => Yf(ae);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== hn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, p = e.trustedTypes, h = i.prototype, b = gn(h, "cloneNode"), g = gn(h, "remove"), v = gn(h, "nextSibling"), E = gn(h, "childNodes"), d = gn(h, "parentNode"), S = gn(h, "shadowRoot"), I = gn(h, "attributes"), T = s && s.prototype ? gn(s.prototype, "nodeType") : null, _ = s && s.prototype ? gn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const ae = n.createElement("template");
    ae.content && ae.content.ownerDocument && (n = ae.content.ownerDocument);
  }
  let O, L = "";
  const W = n, G = W.implementation, Q = W.createNodeIterator, ue = W.createDocumentFragment, ee = W.getElementsByTagName, he = r.importNode;
  let fe = Fc();
  t.isSupported = typeof Kf == "function" && typeof d == "function" && G && G.createHTMLDocument !== void 0;
  const P = sT, $ = lT, B = iT, le = cT, te = uT, ge = fT, Y = dT, Ue = mT;
  let Ee = Dc, ye = null;
  const ze = _e({}, [...Pc, ...Ja, ...es, ...ts, ...Nc]);
  let we = null;
  const $e = _e({}, [...$c, ...ns, ...Mc, ...qo]);
  let ie = Object.seal(Pr(null, {
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
  })), Ke = null, ot = null;
  const He = Object.seal(Pr(null, {
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
  let bt = !0, at = !0, ft = !1, dt = !0, We = !1, ut = !0, k = !1, A = !1, D = !1, K = !1, ke = !1, ce = !1, m = !0, C = !1;
  const F = "user-content-";
  let J = !0, pe = !1, Le = {}, Se = null;
  const yt = _e({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let en = null;
  const It = _e({}, ["audio", "video", "img", "source", "image", "track"]);
  let Je = null;
  const In = _e({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), cr = "http://www.w3.org/1998/Math/MathML", Rn = "http://www.w3.org/2000/svg", Wt = "http://www.w3.org/1999/xhtml";
  let Zn = Wt, qr = !1, Yr = null;
  const Tr = _e({}, [cr, Rn, Wt], Qa);
  let Zr = _e({}, ["mi", "mo", "mn", "ms", "mtext"]), Xr = _e({}, ["annotation-xml"]);
  const Ma = _e({}, ["title", "style", "font", "a", "script"]);
  let ur = null;
  const xo = ["application/xhtml+xml", "text/html"], Da = "text/html";
  let Fe = null, Xn = null;
  const Fa = n.createElement("form"), Po = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Er = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Xn && Xn === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = St(y), ur = // eslint-disable-next-line unicorn/prefer-includes
    xo.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Da : y.PARSER_MEDIA_TYPE, Fe = ur === "application/xhtml+xml" ? Qa : lo, ye = Qe(y, "ALLOWED_TAGS") && Rt(y.ALLOWED_TAGS) ? _e({}, y.ALLOWED_TAGS, Fe) : ze, we = Qe(y, "ALLOWED_ATTR") && Rt(y.ALLOWED_ATTR) ? _e({}, y.ALLOWED_ATTR, Fe) : $e, Yr = Qe(y, "ALLOWED_NAMESPACES") && Rt(y.ALLOWED_NAMESPACES) ? _e({}, y.ALLOWED_NAMESPACES, Qa) : Tr, Je = Qe(y, "ADD_URI_SAFE_ATTR") && Rt(y.ADD_URI_SAFE_ATTR) ? _e(St(In), y.ADD_URI_SAFE_ATTR, Fe) : In, en = Qe(y, "ADD_DATA_URI_TAGS") && Rt(y.ADD_DATA_URI_TAGS) ? _e(St(It), y.ADD_DATA_URI_TAGS, Fe) : It, Se = Qe(y, "FORBID_CONTENTS") && Rt(y.FORBID_CONTENTS) ? _e({}, y.FORBID_CONTENTS, Fe) : yt, Ke = Qe(y, "FORBID_TAGS") && Rt(y.FORBID_TAGS) ? _e({}, y.FORBID_TAGS, Fe) : St({}), ot = Qe(y, "FORBID_ATTR") && Rt(y.FORBID_ATTR) ? _e({}, y.FORBID_ATTR, Fe) : St({}), Le = Qe(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? St(y.USE_PROFILES) : y.USE_PROFILES : !1, bt = y.ALLOW_ARIA_ATTR !== !1, at = y.ALLOW_DATA_ATTR !== !1, ft = y.ALLOW_UNKNOWN_PROTOCOLS || !1, dt = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, We = y.SAFE_FOR_TEMPLATES || !1, ut = y.SAFE_FOR_XML !== !1, k = y.WHOLE_DOCUMENT || !1, K = y.RETURN_DOM || !1, ke = y.RETURN_DOM_FRAGMENT || !1, ce = y.RETURN_TRUSTED_TYPE || !1, D = y.FORCE_BODY || !1, m = y.SANITIZE_DOM !== !1, C = y.SANITIZE_NAMED_PROPS || !1, J = y.KEEP_CONTENT !== !1, pe = y.IN_PLACE || !1, Ee = rT(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : Dc, Zn = typeof y.NAMESPACE == "string" ? y.NAMESPACE : Wt, Zr = Qe(y, "MATHML_TEXT_INTEGRATION_POINTS") && y.MATHML_TEXT_INTEGRATION_POINTS && typeof y.MATHML_TEXT_INTEGRATION_POINTS == "object" ? St(y.MATHML_TEXT_INTEGRATION_POINTS) : _e({}, ["mi", "mo", "mn", "ms", "mtext"]), Xr = Qe(y, "HTML_INTEGRATION_POINTS") && y.HTML_INTEGRATION_POINTS && typeof y.HTML_INTEGRATION_POINTS == "object" ? St(y.HTML_INTEGRATION_POINTS) : _e({}, ["annotation-xml"]);
    const z = Qe(y, "CUSTOM_ELEMENT_HANDLING") && y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING == "object" ? St(y.CUSTOM_ELEMENT_HANDLING) : Pr(null);
    if (ie = Pr(null), Qe(z, "tagNameCheck") && Po(z.tagNameCheck) && (ie.tagNameCheck = z.tagNameCheck), Qe(z, "attributeNameCheck") && Po(z.attributeNameCheck) && (ie.attributeNameCheck = z.attributeNameCheck), Qe(z, "allowCustomizedBuiltInElements") && typeof z.allowCustomizedBuiltInElements == "boolean" && (ie.allowCustomizedBuiltInElements = z.allowCustomizedBuiltInElements), We && (at = !1), ke && (K = !0), Le && (ye = _e({}, Nc), we = Pr(null), Le.html === !0 && (_e(ye, Pc), _e(we, $c)), Le.svg === !0 && (_e(ye, Ja), _e(we, ns), _e(we, qo)), Le.svgFilters === !0 && (_e(ye, es), _e(we, ns), _e(we, qo)), Le.mathMl === !0 && (_e(ye, ts), _e(we, Mc), _e(we, qo))), He.tagCheck = null, He.attributeCheck = null, Qe(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? He.tagCheck = y.ADD_TAGS : Rt(y.ADD_TAGS) && (ye === ze && (ye = St(ye)), _e(ye, y.ADD_TAGS, Fe))), Qe(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? He.attributeCheck = y.ADD_ATTR : Rt(y.ADD_ATTR) && (we === $e && (we = St(we)), _e(we, y.ADD_ATTR, Fe))), Qe(y, "ADD_URI_SAFE_ATTR") && Rt(y.ADD_URI_SAFE_ATTR) && _e(Je, y.ADD_URI_SAFE_ATTR, Fe), Qe(y, "FORBID_CONTENTS") && Rt(y.FORBID_CONTENTS) && (Se === yt && (Se = St(Se)), _e(Se, y.FORBID_CONTENTS, Fe)), Qe(y, "ADD_FORBID_CONTENTS") && Rt(y.ADD_FORBID_CONTENTS) && (Se === yt && (Se = St(Se)), _e(Se, y.ADD_FORBID_CONTENTS, Fe)), J && (ye["#text"] = !0), k && _e(ye, ["html", "head", "body"]), ye.table && (_e(ye, ["tbody"]), delete Ke.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ao('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ao('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      O = y.TRUSTED_TYPES_POLICY, L = O.createHTML("");
    } else
      O === void 0 && (O = gT(p, o)), O !== null && typeof L == "string" && (L = O.createHTML(""));
    (fe.uponSanitizeElement.length > 0 || fe.uponSanitizeAttribute.length > 0) && ye === ze && (ye = St(ye)), fe.uponSanitizeAttribute.length > 0 && we === $e && (we = St(we)), Mt && Mt(y), Xn = y;
  }, No = _e({}, [...Ja, ...es, ...oT]), $o = _e({}, [...ts, ...aT]), za = function(y) {
    let z = d(y);
    (!z || !z.tagName) && (z = {
      namespaceURI: Zn,
      tagName: "template"
    });
    const Z = lo(y.tagName), Ie = lo(z.tagName);
    return Yr[y.namespaceURI] ? y.namespaceURI === Rn ? z.namespaceURI === Wt ? Z === "svg" : z.namespaceURI === cr ? Z === "svg" && (Ie === "annotation-xml" || Zr[Ie]) : !!No[Z] : y.namespaceURI === cr ? z.namespaceURI === Wt ? Z === "math" : z.namespaceURI === Rn ? Z === "math" && Xr[Ie] : !!$o[Z] : y.namespaceURI === Wt ? z.namespaceURI === Rn && !Xr[Ie] || z.namespaceURI === cr && !Zr[Ie] ? !1 : !$o[Z] && (Ma[Z] || !No[Z]) : !!(ur === "application/xhtml+xml" && Yr[y.namespaceURI]) : !1;
  }, Vt = function(y) {
    Lr(t.removed, {
      element: y
    });
    try {
      d(y).removeChild(y);
    } catch {
      g(y);
    }
  }, N = function(y, z) {
    try {
      Lr(t.removed, {
        attribute: z.getAttributeNode(y),
        from: z
      });
    } catch {
      Lr(t.removed, {
        attribute: null,
        from: z
      });
    }
    if (z.removeAttribute(y), y === "is")
      if (K || ke)
        try {
          Vt(z);
        } catch {
        }
      else
        try {
          z.setAttribute(y, "");
        } catch {
        }
  }, q = function(y) {
    let z = null, Z = null;
    if (D)
      y = "<remove></remove>" + y;
    else {
      const Be = Lc(y, /^[\r\n\t ]+/);
      Z = Be && Be[0];
    }
    ur === "application/xhtml+xml" && Zn === Wt && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const Ie = O ? O.createHTML(y) : y;
    if (Zn === Wt)
      try {
        z = new f().parseFromString(Ie, ur);
      } catch {
      }
    if (!z || !z.documentElement) {
      z = G.createDocument(Zn, "template", null);
      try {
        z.documentElement.innerHTML = qr ? L : Ie;
      } catch {
      }
    }
    const Te = z.body || z.documentElement;
    return y && Z && Te.insertBefore(n.createTextNode(Z), Te.childNodes[0] || null), Zn === Wt ? ee.call(z, k ? "html" : "body")[0] : k ? z.documentElement : Te;
  }, be = function(y) {
    return Q.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Xe = function(y) {
    y.normalize();
    const z = Q.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Z = z.nextNode();
    for (; Z; ) {
      let Ie = Z.data;
      Or([P, $, B], (Te) => {
        Ie = Ir(Ie, Te, " ");
      }), Z.data = Ie, Z = z.nextNode();
    }
  }, pt = function(y) {
    const z = _ ? _(y) : null;
    return typeof z != "string" || Fe(z) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== I(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== T(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, Gt = function(y) {
    if (!T || typeof y != "object" || y === null)
      return !1;
    try {
      return T(y) === hn.documentFragment;
    } catch {
      return !1;
    }
  }, jt = function(y) {
    if (!T || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof T(y) == "number";
    } catch {
      return !1;
    }
  };
  function Dt(ae, y, z) {
    Or(ae, (Z) => {
      Z.call(t, y, z, Xn);
    });
  }
  const Qn = function(y) {
    let z = null;
    if (Dt(fe.beforeSanitizeElements, y, null), pt(y))
      return Vt(y), !0;
    const Z = Fe(y.nodeName);
    if (Dt(fe.uponSanitizeElement, y, {
      tagName: Z,
      allowedTags: ye
    }), ut && y.hasChildNodes() && !jt(y.firstElementChild) && _t(/<[/\w!]/g, y.innerHTML) && _t(/<[/\w!]/g, y.textContent) || ut && y.namespaceURI === Wt && Z === "style" && jt(y.firstElementChild) || y.nodeType === hn.progressingInstruction || ut && y.nodeType === hn.comment && _t(/<[/\w]/g, y.data))
      return Vt(y), !0;
    if (Ke[Z] || !(He.tagCheck instanceof Function && He.tagCheck(Z)) && !ye[Z]) {
      if (!Ke[Z] && Al(Z) && (ie.tagNameCheck instanceof RegExp && _t(ie.tagNameCheck, Z) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(Z)))
        return !1;
      if (J && !Se[Z]) {
        const Te = d(y), Be = E(y);
        if (Be && Te) {
          const Kt = Be.length;
          for (let dn = Kt - 1; dn >= 0; --dn) {
            const tn = b(Be[dn], !0);
            Te.insertBefore(tn, v(y));
          }
        }
      }
      return Vt(y), !0;
    }
    return (T ? T(y) : y.nodeType) === hn.element && !za(y) || (Z === "noscript" || Z === "noembed" || Z === "noframes") && _t(/<\/no(script|embed|frames)/i, y.innerHTML) ? (Vt(y), !0) : (We && y.nodeType === hn.text && (z = y.textContent, Or([P, $, B], (Te) => {
      z = Ir(z, Te, " ");
    }), y.textContent !== z && (Lr(t.removed, {
      element: y.cloneNode()
    }), y.textContent = z)), Dt(fe.afterSanitizeElements, y, null), !1);
  }, Mo = function(y, z, Z) {
    if (ot[z] || m && (z === "id" || z === "name") && (Z in n || Z in Fa))
      return !1;
    const Ie = we[z] || He.attributeCheck instanceof Function && He.attributeCheck(z, y);
    if (!(at && !ot[z] && _t(le, z))) {
      if (!(bt && _t(te, z))) {
        if (!Ie || ot[z]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Al(y) && (ie.tagNameCheck instanceof RegExp && _t(ie.tagNameCheck, y) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(y)) && (ie.attributeNameCheck instanceof RegExp && _t(ie.attributeNameCheck, z) || ie.attributeNameCheck instanceof Function && ie.attributeNameCheck(z, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            z === "is" && ie.allowCustomizedBuiltInElements && (ie.tagNameCheck instanceof RegExp && _t(ie.tagNameCheck, Z) || ie.tagNameCheck instanceof Function && ie.tagNameCheck(Z)))
          ) return !1;
        } else if (!Je[z]) {
          if (!_t(Ee, Ir(Z, Y, ""))) {
            if (!((z === "src" || z === "xlink:href" || z === "href") && y !== "script" && Ic(Z, "data:") === 0 && en[y])) {
              if (!(ft && !_t(ge, Ir(Z, Y, "")))) {
                if (Z)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Zf = _e({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Al = function(y) {
    return !Zf[lo(y)] && _t(Ue, y);
  }, Cl = function(y) {
    Dt(fe.beforeSanitizeAttributes, y, null);
    const z = y.attributes;
    if (!z || pt(y))
      return;
    const Z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: we,
      forceKeepAttr: void 0
    };
    let Ie = z.length;
    for (; Ie--; ) {
      const Te = z[Ie], Be = Te.name, Kt = Te.namespaceURI, dn = Te.value, tn = Fe(Be), Ba = dn;
      let mt = Be === "value" ? Ba : Xk(Ba);
      if (Z.attrName = tn, Z.attrValue = mt, Z.keepAttr = !0, Z.forceKeepAttr = void 0, Dt(fe.uponSanitizeAttribute, y, Z), mt = Z.attrValue, C && (tn === "id" || tn === "name") && Ic(mt, F) !== 0 && (N(Be, y), mt = F + mt), ut && _t(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, mt)) {
        N(Be, y);
        continue;
      }
      if (tn === "attributename" && Lc(mt, "href")) {
        N(Be, y);
        continue;
      }
      if (Z.forceKeepAttr)
        continue;
      if (!Z.keepAttr) {
        N(Be, y);
        continue;
      }
      if (!dt && _t(/\/>/i, mt)) {
        N(Be, y);
        continue;
      }
      We && Or([P, $, B], (Ll) => {
        mt = Ir(mt, Ll, " ");
      });
      const Ol = Fe(y.nodeName);
      if (!Mo(Ol, tn, mt)) {
        N(Be, y);
        continue;
      }
      if (O && typeof p == "object" && typeof p.getAttributeType == "function" && !Kt)
        switch (p.getAttributeType(Ol, tn)) {
          case "TrustedHTML": {
            mt = O.createHTML(mt);
            break;
          }
          case "TrustedScriptURL": {
            mt = O.createScriptURL(mt);
            break;
          }
        }
      if (mt !== Ba)
        try {
          Kt ? y.setAttributeNS(Kt, Be, mt) : y.setAttribute(Be, mt), pt(y) ? Vt(y) : Oc(t.removed);
        } catch {
          N(Be, y);
        }
    }
    Dt(fe.afterSanitizeAttributes, y, null);
  }, Do = function(y) {
    let z = null;
    const Z = be(y);
    for (Dt(fe.beforeSanitizeShadowDOM, y, null); z = Z.nextNode(); )
      if (Dt(fe.uponSanitizeShadowNode, z, null), Qn(z), Cl(z), Gt(z.content) && Do(z.content), (T ? T(z) : z.nodeType) === hn.element) {
        const Te = S ? S(z) : z.shadowRoot;
        Gt(Te) && (Sr(Te), Do(Te));
      }
    Dt(fe.afterSanitizeShadowDOM, y, null);
  }, Sr = function(y) {
    const z = T ? T(y) : y.nodeType;
    if (z === hn.element) {
      const Te = S ? S(y) : y.shadowRoot;
      Gt(Te) && (Sr(Te), Do(Te));
    }
    const Z = E ? E(y) : y.childNodes;
    if (!Z)
      return;
    const Ie = [];
    Or(Z, (Te) => {
      Lr(Ie, Te);
    });
    for (const Te of Ie)
      Sr(Te);
    if (z === hn.element) {
      const Te = _ ? _(y) : null;
      if (typeof Te == "string" && Fe(Te) === "template") {
        const Be = y.content;
        Gt(Be) && Sr(Be);
      }
    }
  };
  return t.sanitize = function(ae) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, z = null, Z = null, Ie = null, Te = null;
    if (qr = !ae, qr && (ae = "<!-->"), typeof ae != "string" && !jt(ae) && (ae = nT(ae), typeof ae != "string"))
      throw ao("dirty is not a string, aborting");
    if (!t.isSupported)
      return ae;
    if (A || Er(y), t.removed = [], typeof ae == "string" && (pe = !1), pe) {
      const dn = _ ? _(ae) : ae.nodeName;
      if (typeof dn == "string") {
        const tn = Fe(dn);
        if (!ye[tn] || Ke[tn])
          throw ao("root node is forbidden and cannot be sanitized in-place");
      }
      if (pt(ae))
        throw ao("root node is clobbered and cannot be sanitized in-place");
      Sr(ae);
    } else if (jt(ae))
      z = q("<!---->"), Z = z.ownerDocument.importNode(ae, !0), Z.nodeType === hn.element && Z.nodeName === "BODY" || Z.nodeName === "HTML" ? z = Z : z.appendChild(Z), Sr(Z);
    else {
      if (!K && !We && !k && // eslint-disable-next-line unicorn/prefer-includes
      ae.indexOf("<") === -1)
        return O && ce ? O.createHTML(ae) : ae;
      if (z = q(ae), !z)
        return K ? null : ce ? L : "";
    }
    z && D && Vt(z.firstChild);
    const Be = be(pe ? ae : z);
    for (; Ie = Be.nextNode(); )
      Qn(Ie), Cl(Ie), Gt(Ie.content) && Do(Ie.content);
    if (pe)
      return We && Xe(ae), ae;
    if (K) {
      if (We && Xe(z), ke)
        for (Te = ue.call(z.ownerDocument); z.firstChild; )
          Te.appendChild(z.firstChild);
      else
        Te = z;
      return (we.shadowroot || we.shadowrootmode) && (Te = he.call(r, Te, !0)), Te;
    }
    let Kt = k ? z.outerHTML : z.innerHTML;
    return k && ye["!doctype"] && z.ownerDocument && z.ownerDocument.doctype && z.ownerDocument.doctype.name && _t(pT, z.ownerDocument.doctype.name) && (Kt = "<!DOCTYPE " + z.ownerDocument.doctype.name + `>
` + Kt), We && Or([P, $, B], (dn) => {
      Kt = Ir(Kt, dn, " ");
    }), O && ce ? O.createHTML(Kt) : Kt;
  }, t.setConfig = function() {
    let ae = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Er(ae), A = !0;
  }, t.clearConfig = function() {
    Xn = null, A = !1;
  }, t.isValidAttribute = function(ae, y, z) {
    Xn || Er({});
    const Z = Fe(ae), Ie = Fe(y);
    return Mo(Z, Ie, z);
  }, t.addHook = function(ae, y) {
    typeof y == "function" && Lr(fe[ae], y);
  }, t.removeHook = function(ae, y) {
    if (y !== void 0) {
      const z = Yk(fe[ae], y);
      return z === -1 ? void 0 : Zk(fe[ae], z, 1)[0];
    }
    return Oc(fe[ae]);
  }, t.removeHooks = function(ae) {
    fe[ae] = [];
  }, t.removeAllHooks = function() {
    fe = Fc();
  }, t;
}
var vT = Yf();
const bT = {
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
function yT(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(/\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi, "") : vT.sanitize(e, bT) : "";
}
const _T = { class: "local-ai-chat-shell" }, wT = { class: "chat-sidebar" }, kT = { class: "sidebar-header" }, TT = { class: "sidebar-title-block" }, ET = { class: "sidebar-actions" }, ST = ["title"], AT = ["title"], CT = { class: "sidebar-search" }, OT = ["placeholder"], LT = { class: "sidebar-section recent-section" }, IT = { class: "section-title" }, RT = {
  key: 0,
  class: "chat-list"
}, xT = ["onClick", "onKeydown"], PT = { class: "chat-item-title" }, NT = { class: "chat-item-time" }, $T = ["title", "onClick"], MT = {
  key: 1,
  class: "sidebar-empty"
}, DT = { class: "chat-panel" }, FT = { class: "chat-topbar" }, zT = { class: "chat-topbar-main" }, BT = { class: "chat-title-row" }, VT = { class: "service-url" }, jT = { class: "chat-topbar-actions" }, UT = ["title"], HT = { class: "date-divider" }, WT = {
  key: 0,
  class: "empty-state"
}, GT = { class: "empty-title" }, KT = { class: "empty-desc" }, qT = { class: "message-avatar" }, YT = { key: 1 }, ZT = { class: "message-body" }, XT = {
  key: 0,
  class: "user-bubble"
}, QT = { class: "assistant-head" }, JT = {
  key: 0,
  class: "assistant-content-stack"
}, eE = ["open"], tE = { key: 0 }, nE = ["innerHTML"], rE = ["innerHTML"], oE = {
  key: 1,
  class: "message-content loading-text"
}, aE = {
  key: 0,
  class: "message-stats"
}, sE = {
  key: 1,
  class: "message-warning"
}, lE = {
  key: 2,
  class: "message-actions"
}, iE = ["title", "onClick"], cE = ["title", "onClick"], uE = ["title"], fE = ["title"], dE = ["title", "onClick"], pE = ["title", "onClick"], mE = ["placeholder", "onKeydown"], hE = { class: "input-toolbar" }, gE = { class: "input-toolbar-left" }, vE = ["title"], bE = { class: "model-select-shell" }, yE = ["value"], _E = ["value"], wE = { class: "input-toolbar-right" }, kE = ["title", "aria-label"], TE = ["disabled", "title", "aria-label"], EE = /* @__PURE__ */ ne({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = So(), n = j(""), r = j([]), o = j(""), a = j(""), s = j(!1), i = j(!1), l = j(!1), u = j(null), f = j(null), p = j(null), h = j(null), b = j(Date.now());
    let g = null, v = null;
    const E = /* @__PURE__ */ new Map(), d = R(() => !!a.value.trim() && !s.value), S = R(() => p.value?.healthy ? t("localAi.serviceHealthy") : p.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), I = R(
      () => r.value.find((m) => m.id === o.value) ?? null
    ), T = R(() => I.value?.messages ?? []), _ = (m) => m ? m.split(/[\\/]+/).pop() ?? m : "", O = R(
      () => _(p.value?.modelPath) || _(f.value?.modelPath) || t("localAi.localModel")
    ), L = R(() => {
      const m = n.value.trim().toLowerCase();
      return r.value.filter(
        (C) => !m || C.title.toLowerCase().includes(m) || C.messages.some(
          (F) => F.content.toLowerCase().includes(m)
        )
      ).slice().sort((C, F) => F.updatedAt.localeCompare(C.updatedAt));
    }), W = () => t("localAi.now"), G = () => {
      const m = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: m,
        updatedAt: m,
        updatedAtLabel: W(),
        messages: []
      };
    }, Q = async () => {
      await et();
      const m = h.value;
      m && (m.scrollTop = m.scrollHeight);
    }, ue = async () => {
      try {
        f.value = await Hf();
      } catch (m) {
        vn.warn("[LocalAI] refresh chat config failed", m);
      }
    }, ee = async () => {
      i.value = !0;
      try {
        p.value = await Wf();
      } catch (m) {
        vn.warn("[LocalAI] refresh chat status failed", m);
      } finally {
        i.value = !1;
      }
    }, he = async () => {
      try {
        const m = await Fk();
        r.value = m.map((C) => ({
          id: C.id,
          title: C.title,
          createdAt: C.createdAt,
          updatedAt: C.updatedAt,
          updatedAtLabel: new Date(C.updatedAt).toLocaleString(),
          messages: C.turns.map((F) => ({
            id: F.id,
            role: F.role,
            content: F.content,
            createdAt: F.createdAt
          }))
        })), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (m) {
        vn.warn("[LocalAI] refresh histories failed", m);
      }
    }, fe = async () => {
      await Promise.all([ue(), ee(), he()]);
    }, P = async () => {
      const m = I.value;
      m && await zk({
        id: m.id,
        title: m.title,
        createdAt: m.createdAt,
        updatedAt: m.updatedAt,
        turns: m.messages.map((C) => ({
          id: C.id,
          role: C.role,
          content: C.content,
          createdAt: C.createdAt
        }))
      });
    }, $ = () => {
      const m = G();
      r.value.unshift(m), o.value = m.id, a.value = "";
    }, B = () => {
      I.value || $();
    }, le = (m) => {
      o.value = m, Q();
    }, te = async (m) => {
      r.value = r.value.filter((C) => C.id !== m), await Bk(m), o.value === m && (o.value = r.value[0]?.id ?? "");
    }, ge = () => T.value.filter((m) => !m.streaming).map((m) => ({
      role: m.role,
      content: m.content
    })), Y = (m) => {
      const C = E.get(m);
      if (C) return C;
      const F = yT(Pe.parse(m, { async: !1 }));
      if (E.set(m, F), E.size > 80) {
        const J = E.keys().next().value;
        typeof J == "string" && E.delete(J);
      }
      return F;
    }, Ue = (m) => {
      const C = m.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!C || C.index === void 0)
        return { reasoning: "", answer: m };
      const F = m.slice(0, C.index).trim(), J = C[0], pe = m.slice(C.index + J.length).trim();
      return {
        reasoning: (C[1] ?? "").trim(),
        answer: [F, pe].filter(Boolean).join(`

`)
      };
    }, Ee = (m) => Ue(m).reasoning, ye = (m) => Ue(m).answer, ze = (m) => {
      const C = m.trim();
      if (!C) return 0;
      const F = (C.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, Le = (C.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((Se, yt) => /^[A-Za-z0-9_]+$/.test(yt) ? Se + Math.max(1, Math.ceil(yt.length / 4)) : Se + 1, 0);
      return Math.max(1, Math.ceil(F + Le));
    }, we = (m) => ze(
      m.map((C) => `${C.role}: ${C.content}`).join(`
`)
    ), $e = (m) => {
      const C = b.value, F = T.value.findIndex((It) => It.id === m.id), J = m.stats?.promptTokens ?? m.promptTokens ?? ze(
        T.value.slice(0, Math.max(0, F)).map((It) => It.content).join(`
`)
      ), pe = m.stats?.completionTokens ?? ze(m.content), Le = m.stats?.totalTokens ?? J + pe, Se = f.value?.ctxSize ?? 4096, yt = (m.stats?.generationTimeMs ?? m.elapsedMs ?? C - We(m).getTime()) / 1e3, en = m.stats?.tokensPerSecond ?? (yt > 0 ? pe / yt : 0);
      return {
        context: Le,
        contextMax: Se,
        contextPercent: Math.min(100, Math.round(Le / Se * 100)),
        output: pe,
        outputMax: (f.value?.maxTokens ?? 0) > 0 ? String(f.value?.maxTokens) : "∞",
        seconds: yt.toFixed(1),
        speed: en.toFixed(1)
      };
    }, ie = () => {
      v || (b.value = Date.now(), v = setInterval(() => {
        b.value = Date.now();
      }, 250));
    }, Ke = () => {
      v && (clearInterval(v), v = null, b.value = Date.now());
    }, ot = async (m) => {
      const C = performance.now(), F = Gf();
      let J = "", pe = null, Le = null, Se = !1;
      u.value = F, l.value = !1;
      const yt = async () => {
        if (!J) {
          pe = null, Le?.(), Le = null;
          return;
        }
        const Je = l.value ? 240 : J.length > 240 ? 18 : 6;
        m.content += J.slice(0, Je), J = J.slice(Je), await Q(), pe = window.setTimeout(() => {
          yt().catch(
            (In) => vn.warn("[LocalAI] stream pump failed", In)
          );
        }, 24);
      }, en = (Je) => {
        Je && (J += Je, pe === null && (pe = window.setTimeout(() => {
          yt().catch(
            (In) => vn.warn("[LocalAI] stream pump failed", In)
          );
        }, 12)));
      }, It = await Dk(
        { messages: ge() },
        (Je) => {
          Se = !0, en(Je);
        },
        {
          requestId: F,
          onStats: (Je) => {
            m.stats = Je, b.value = Date.now();
          }
        }
      );
      if (!Se)
        en(It.content);
      else if (!l.value) {
        const Je = m.content.length + J.length;
        It.content.length > Je && en(It.content.slice(Je));
      }
      (J || pe !== null) && await new Promise((Je) => {
        Le = Je;
      }), !l.value && It.content && m.content !== It.content && (m.content = It.content), m.streaming = !1, m.elapsedMs = performance.now() - C, m.stopped = l.value, b.value = Date.now(), u.value = null;
    }, He = async () => {
      const m = u.value;
      if (!(!s.value || !m || l.value)) {
        l.value = !0;
        try {
          await Sc(m);
        } catch (C) {
          vn.warn("[LocalAI] cancel stream failed", C);
        }
      }
    }, bt = async () => {
      const m = a.value.trim();
      if (!m || s.value) return;
      B();
      const C = (/* @__PURE__ */ new Date()).toISOString();
      I.value?.messages.push({
        id: `${Date.now()}-user`,
        role: "user",
        content: m,
        createdAt: C
      });
      const F = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        promptTokens: we(ge())
      };
      I.value?.messages.push(F), a.value = "", s.value = !0, ie(), await Q();
      try {
        await ot(F), I.value && (I.value.title = I.value.title === t("localAi.newChatTitle") ? m.slice(0, 28) : I.value.title, I.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), I.value.updatedAtLabel = new Date(
          I.value.updatedAt
        ).toLocaleString(), await P()), await ee();
      } catch (J) {
        l.value || (xt.msg(`${t("localAi.chatFailed")}: ${J}`, "error"), F.content = String(J)), F.streaming = !1;
      } finally {
        s.value = !1, u.value = null, Ke(), await Q();
      }
    }, at = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, ft = () => {
      n.value = "";
    }, dt = () => {
      xt.msg(t("localAi.moreComingSoon"));
    }, We = (m) => new Date(m.createdAt || I.value?.updatedAt || Date.now()), ut = (m) => We(m).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), k = (m) => {
      const C = new Date(m), F = /* @__PURE__ */ new Date(), J = F.getTime() - C.getTime(), pe = 24 * 60 * 60 * 1e3;
      return C.toDateString() === F.toDateString() ? C.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : J < pe * 2 ? t("localAi.yesterday") : J < pe * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(J / pe))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(J / (pe * 7)))
      });
    }, A = async (m) => {
      try {
        await navigator.clipboard.writeText(m.content), xt.msg(t("localAi.copied"));
      } catch (C) {
        xt.msg(`${t("common.operationFailed")}: ${C}`, "error");
      }
    }, D = async (m) => {
      I.value && (I.value.messages = I.value.messages.filter(
        (C) => C.id !== m
      ), I.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), I.value.updatedAtLabel = new Date(
        I.value.updatedAt
      ).toLocaleString(), await P());
    }, K = (m) => {
      a.value = m.content;
    }, ke = () => {
      xt.msg(t("localAi.feedbackSaved"));
    }, ce = async (m) => {
      const C = I.value;
      if (!C || s.value) return;
      const F = C.messages.findIndex(
        (Le) => Le.id === m
      );
      if (!C.messages.slice(0, F).reverse().find((Le) => Le.role === "user")) return;
      C.messages = C.messages.slice(0, F);
      const pe = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        promptTokens: we(ge())
      };
      C.messages.push(pe), s.value = !0, ie(), await Q();
      try {
        await ot(pe), C.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), C.updatedAtLabel = new Date(C.updatedAt).toLocaleString(), await P();
      } catch (Le) {
        l.value || (xt.msg(`${t("localAi.chatFailed")}: ${Le}`, "error"), pe.content = String(Le)), pe.streaming = !1;
      } finally {
        s.value = !1, u.value = null, Ke(), await Q();
      }
    };
    return rt(async () => {
      await fe(), g = setInterval(() => {
        ee().catch(
          (m) => vn.warn("[LocalAI] status timer failed", m)
        );
      }, 8e3);
    }), ga(() => {
      g && clearInterval(g), u.value && Sc(u.value), Ke();
    }), (m, C) => (x(), H("main", _T, [
      w("aside", wT, [
        w("header", kT, [
          w("div", TT, [
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
          w("div", ET, [
            w("button", {
              class: "icon-action-btn icon-action-btn--primary",
              type: "button",
              title: c(t)("localAi.newChat"),
              onClick: $
            }, [
              M(c(_d), {
                theme: "outline",
                size: "16"
              })
            ], 8, ST),
            w("button", {
              class: "icon-action-btn",
              type: "button",
              title: c(t)("plugins.refresh"),
              onClick: fe
            }, [
              M(c(Rl), {
                theme: "outline",
                size: "16"
              })
            ], 8, AT)
          ])
        ]),
        w("div", CT, [
          M(c(Ld), {
            theme: "outline",
            size: "17"
          }),
          vt(w("input", {
            "onUpdate:modelValue": C[0] || (C[0] = (F) => mo(n) ? n.value = F : null),
            placeholder: c(t)("localAi.searchHistory")
          }, null, 8, OT), [
            [ho, c(n)]
          ])
        ]),
        w("section", LT, [
          w(
            "div",
            IT,
            V(c(t)("localAi.recent")),
            1
            /* TEXT */
          ),
          c(L).length ? (x(), H("div", RT, [
            (x(!0), H(
              Ct,
              null,
              $r(c(L), (F) => (x(), H("div", {
                key: F.id,
                class: U([
                  "chat-list-item",
                  c(o) === F.id ? "active" : ""
                ]),
                role: "button",
                tabindex: "0",
                onClick: (J) => le(F.id),
                onKeydown: Yt(qe((J) => le(F.id), ["prevent"]), ["enter"])
              }, [
                M(c(Ad), {
                  theme: "outline",
                  size: "16"
                }),
                w(
                  "span",
                  PT,
                  V(F.title),
                  1
                  /* TEXT */
                ),
                w(
                  "span",
                  NT,
                  V(k(F.updatedAt)),
                  1
                  /* TEXT */
                ),
                w("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: c(t)("common.delete"),
                  onClick: qe((J) => te(F.id), ["stop"])
                }, [
                  M(c(Il), {
                    theme: "outline",
                    size: "13"
                  })
                ], 8, $T)
              ], 42, xT))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (x(), H(
            "div",
            MT,
            V(c(t)("common.empty")),
            1
            /* TEXT */
          )),
          w("button", {
            class: "view-all-btn",
            type: "button",
            onClick: ft
          }, [
            w(
              "span",
              null,
              V(c(t)("localAi.viewAllChats")),
              1
              /* TEXT */
            ),
            M(c(Od), {
              theme: "outline",
              size: "15"
            })
          ])
        ])
      ]),
      w("section", DT, [
        w("header", FT, [
          w("div", zT, [
            w("div", BT, [
              w(
                "h3",
                null,
                V(c(I)?.title ?? c(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              w(
                "span",
                {
                  class: U([
                    "status-pill",
                    c(p)?.healthy ? "ready" : "stopped"
                  ])
                },
                [
                  C[2] || (C[2] = w(
                    "i",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  )),
                  qt(
                    " " + V(c(S)),
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
              VT,
              V(c(p)?.baseUrl ?? "http://127.0.0.1:39281"),
              1
              /* TEXT */
            )
          ]),
          w("div", jT, [
            M(c(Nn), {
              size: "small",
              plain: "",
              class: "topbar-custom-btn",
              onClick: at
            }, {
              default: oe(() => [
                M(c(rs), {
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
              onClick: dt
            }, [
              M(c(Cd), {
                theme: "outline",
                size: "17"
              })
            ], 8, UT)
          ])
        ]),
        w(
          "div",
          {
            ref_key: "messageListRef",
            ref: h,
            class: "message-list"
          },
          [
            w("div", HT, [
              w(
                "span",
                null,
                V(c(t)("localAi.today")),
                1
                /* TEXT */
              )
            ]),
            c(T).length ? X("v-if", !0) : (x(), H("div", WT, [
              M(c(xl), {
                theme: "outline",
                size: "28"
              }),
              w(
                "div",
                GT,
                V(c(t)("localAi.chatEmpty")),
                1
                /* TEXT */
              ),
              w(
                "div",
                KT,
                V(c(t)("localAi.chatPlaceholder")),
                1
                /* TEXT */
              )
            ])),
            (x(!0), H(
              Ct,
              null,
              $r(c(T), (F) => (x(), H(
                "article",
                {
                  key: F.id,
                  class: U(["message-row", `message-row--${F.role}`])
                },
                [
                  w("div", qT, [
                    F.role === "assistant" ? (x(), se(c(xl), {
                      key: 0,
                      theme: "outline",
                      size: "18"
                    })) : (x(), H(
                      "span",
                      YT,
                      V(c(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  w("div", ZT, [
                    F.role === "user" ? (x(), H("div", XT, [
                      w(
                        "div",
                        null,
                        V(F.content),
                        1
                        /* TEXT */
                      ),
                      w(
                        "time",
                        null,
                        V(ut(F)),
                        1
                        /* TEXT */
                      )
                    ])) : (x(), H(
                      Ct,
                      { key: 1 },
                      [
                        w("div", QT, [
                          w(
                            "span",
                            null,
                            V(c(O)),
                            1
                            /* TEXT */
                          ),
                          w(
                            "small",
                            null,
                            V(F.streaming ? c(t)("localAi.thinking") : ut(F)),
                            1
                            /* TEXT */
                          )
                        ]),
                        w(
                          "div",
                          {
                            class: U(["assistant-card", { "assistant-card--streaming": F.streaming }])
                          },
                          [
                            F.content ? (x(), H("div", JT, [
                              Ee(F.content) ? (x(), H("details", {
                                key: 0,
                                class: "reasoning-panel",
                                open: F.streaming
                              }, [
                                w("summary", null, [
                                  C[3] || (C[3] = w(
                                    "span",
                                    null,
                                    "Reasoning",
                                    -1
                                    /* HOISTED */
                                  )),
                                  F.streaming ? (x(), H(
                                    "small",
                                    tE,
                                    V(c(t)("localAi.thinking")),
                                    1
                                    /* TEXT */
                                  )) : X("v-if", !0)
                                ]),
                                w("div", {
                                  class: "message-content markdown-body",
                                  innerHTML: Y(Ee(F.content))
                                }, null, 8, nE)
                              ], 8, eE)) : X("v-if", !0),
                              ye(F.content) ? (x(), H("div", {
                                key: 1,
                                class: "message-content markdown-body",
                                innerHTML: Y(ye(F.content))
                              }, null, 8, rE)) : X("v-if", !0)
                            ])) : (x(), H(
                              "div",
                              oE,
                              V(c(t)("localAi.thinking")),
                              1
                              /* TEXT */
                            ))
                          ],
                          2
                          /* CLASS */
                        ),
                        F.content ? (x(), H("div", aE, [
                          w(
                            "span",
                            null,
                            " Context: " + V($e(F).context) + "/" + V($e(F).contextMax) + " (" + V($e(F).contextPercent) + "%) ",
                            1
                            /* TEXT */
                          ),
                          w(
                            "span",
                            null,
                            " Output: " + V($e(F).output) + "/" + V($e(F).outputMax),
                            1
                            /* TEXT */
                          ),
                          w(
                            "span",
                            null,
                            V($e(F).seconds) + "s",
                            1
                            /* TEXT */
                          ),
                          w(
                            "span",
                            null,
                            V($e(F).speed) + " t/s",
                            1
                            /* TEXT */
                          )
                        ])) : X("v-if", !0),
                        F.stats?.finishReason === "length" ? (x(), H(
                          "div",
                          sE,
                          V(c(t)("localAi.outputLimitReached")),
                          1
                          /* TEXT */
                        )) : X("v-if", !0),
                        F.streaming ? X("v-if", !0) : (x(), H("div", lE, [
                          w("button", {
                            type: "button",
                            title: c(t)("common.copy"),
                            onClick: (J) => A(F)
                          }, [
                            M(c(wd), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, iE),
                          w("button", {
                            type: "button",
                            title: c(t)("localAi.regenerate"),
                            onClick: (J) => ce(F.id)
                          }, [
                            M(c(Rl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, cE),
                          w("button", {
                            type: "button",
                            title: c(t)("localAi.like"),
                            onClick: ke
                          }, [
                            M(c(Sd), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, uE),
                          w("button", {
                            type: "button",
                            title: c(t)("localAi.dislike"),
                            onClick: ke
                          }, [
                            M(c(kd), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, fE),
                          w("button", {
                            type: "button",
                            title: c(t)("common.edit"),
                            onClick: (J) => K(F)
                          }, [
                            M(c(Ed), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, dE),
                          w("button", {
                            type: "button",
                            title: c(t)("common.delete"),
                            onClick: (J) => D(F.id)
                          }, [
                            M(c(Il), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, pE)
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
            onSubmit: qe(bt, ["prevent"])
          },
          [
            vt(w("textarea", {
              "onUpdate:modelValue": C[1] || (C[1] = (F) => mo(a) ? a.value = F : null),
              class: "chat-input",
              rows: "2",
              placeholder: c(t)("localAi.chatPlaceholder"),
              onKeydown: Yt(qe(bt, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, mE), [
              [ho, c(a)]
            ]),
            w("div", hE, [
              w("div", gE, [
                w("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: c(t)("localAi.settings"),
                  onClick: at
                }, [
                  M(c(rs), {
                    theme: "outline",
                    size: "16"
                  })
                ], 8, vE),
                w("label", bE, [
                  w("select", {
                    value: c(O),
                    disabled: ""
                  }, [
                    w("option", { value: c(O) }, V(c(O)), 9, _E)
                  ], 8, yE),
                  M(c(Td), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ]),
              w("div", wE, [
                C[4] || (C[4] = w(
                  "span",
                  { class: "input-hint" },
                  "Ctrl + Enter",
                  -1
                  /* HOISTED */
                )),
                c(s) ? (x(), H("button", {
                  key: 0,
                  class: "send-btn send-btn--stop",
                  type: "button",
                  title: c(t)("localAi.stopGenerating"),
                  "aria-label": c(t)("localAi.stopGenerating"),
                  onClick: He
                }, [
                  M(c(Rd), {
                    theme: "filled",
                    size: "11"
                  })
                ], 8, kE)) : (x(), H("button", {
                  key: 1,
                  class: "send-btn",
                  type: "submit",
                  disabled: !c(d),
                  title: c(t)("localAi.send"),
                  "aria-label": c(t)("localAi.send")
                }, [
                  M(c(Id), {
                    theme: "outline",
                    size: "15"
                  })
                ], 8, TE))
              ])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ]));
  }
}), SE = /* @__PURE__ */ Ks(EE, [["__scopeId", "data-v-facf7f84"]]), AE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SE
}, Symbol.toStringTag, { value: "Module" }));
async function zc(e = {}) {
  return typeof e == "object" && Object.freeze(e), await Tt("plugin:dialog|open", { options: e });
}
const CE = { class: "settings-panel local-ai-settings-shell" }, OE = { class: "local-ai-hero panel-card" }, LE = { class: "panel-title" }, IE = { class: "hero-desc" }, RE = { class: "header-actions" }, xE = {
  key: 0,
  class: "settings-grid"
}, PE = { class: "summary-panel panel-card" }, NE = { class: "status-strip" }, $E = { class: "summary-card" }, ME = { class: "summary-card__title" }, DE = { class: "summary-card__desc" }, FE = { class: "service-controls" }, zE = { class: "service-url" }, BE = { class: "summary-card" }, VE = { class: "summary-card__title" }, jE = { class: "summary-card__desc" }, UE = { class: "summary-meta" }, HE = { class: "form-panel panel-card" }, WE = { class: "settings-section" }, GE = { class: "settings-section__header" }, KE = { class: "field-stack" }, qE = { class: "field-row" }, YE = { class: "path-control" }, ZE = { class: "field-row" }, XE = { class: "field-row" }, QE = { class: "field-row" }, JE = { class: "path-control" }, eS = ["placeholder"], tS = { class: "settings-section grid-two" }, nS = { class: "settings-section__header" }, rS = { class: "param-grid" }, oS = { class: "number-field" }, aS = { class: "number-field" }, sS = { class: "number-field" }, lS = { class: "number-field" }, iS = { class: "number-field" }, cS = { class: "number-field" }, uS = { class: "settings-section grid-two" }, fS = { class: "settings-section__header" }, dS = { class: "switch-grid" }, pS = { class: "settings-section grid-two" }, mS = { class: "settings-section__header" }, hS = { class: "switch-grid switch-grid--two" }, gS = { class: "number-field" }, vS = { class: "number-field" }, bS = { class: "settings-section grid-two" }, yS = { class: "settings-section__header" }, _S = { class: "param-grid param-grid--three" }, wS = { class: "number-field" }, kS = { class: "number-field" }, TS = { class: "number-field" }, ES = { class: "settings-footer" }, SS = ["title"], AS = /* @__PURE__ */ ne({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = So(), n = j(null), r = j(null), o = j(null), a = j(null), s = j(!1), i = j(!1), l = j(!1), u = j(!1), f = j(!1);
    let p = null;
    const h = R(() => !!a.value?.selectedModelPath), b = R({ get: () => n.value?.modelPath ?? "", set: (P) => {
      n.value && (n.value.modelPath = P || void 0);
    } }), g = R({ get: () => n.value?.mmprojPath ?? "", set: (P) => {
      n.value && (n.value.mmprojPath = P || void 0);
    } }), v = R(() => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")), E = R(() => h.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")), d = R(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), S = (P) => P.split(/[\\/]+/).pop() ?? P, I = async () => {
      s.value = !0;
      try {
        n.value = await Hf(), await Promise.all([T(), O(), _()]);
      } catch (P) {
        vn.error("[LocalAI] refresh settings failed", P), xt.msg(`${t("localAi.refreshFailed")}: ${P}`, "error");
      } finally {
        s.value = !1;
      }
    }, T = async () => {
      r.value = await Pk();
    }, _ = async () => {
      o.value = await Wf();
    }, O = async () => {
      n.value && (a.value = await xk(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, L = async () => {
      if (n.value)
        try {
          await Xa(n.value);
        } catch (P) {
          vn.warn("[LocalAI] autosave failed", P);
        }
    }, W = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await Xa(n.value), await Promise.all([T(), O(), _()]), xt.msg(t("localAi.configSaved"));
        } catch (P) {
          xt.msg(`${t("localAi.configSaveFailed")}: ${P}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, G = async () => {
      const P = await zc({ directory: !0, multiple: !1, title: t("localAi.chooseModelDir") });
      !P || Array.isArray(P) || !n.value || (n.value.modelDir = P, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await O());
    }, Q = async () => {
      const P = await zc({ multiple: !1, title: t("localAi.chooseRuntime"), filters: [{ name: "llama-server", extensions: ["exe"] }] });
      !P || Array.isArray(P) || !n.value || (n.value.runtimePath = P, await L(), await T());
    }, ue = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await Xa(n.value), o.value = await Nk(n.value), xt.msg(t("localAi.serviceStarted"));
        } catch (P) {
          xt.msg(`${t("localAi.serviceStartFailed")}: ${P}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, ee = async () => {
      u.value = !0;
      try {
        await W(), o.value = await $k(), xt.msg(t("localAi.serviceRestarted"));
      } catch (P) {
        xt.msg(`${t("localAi.serviceRestartFailed")}: ${P}`, "error");
      } finally {
        u.value = !1;
      }
    }, he = async () => {
      f.value = !0;
      try {
        await Mk(), await _(), xt.msg(t("localAi.serviceStoppedMsg"));
      } catch (P) {
        xt.msg(`${t("localAi.serviceStopFailed")}: ${P}`, "error");
      } finally {
        f.value = !1;
      }
    }, fe = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return rt(async () => {
      await I(), p = setInterval(() => {
        _().catch((P) => vn.warn("[LocalAI] status refresh failed", P));
      }, 5e3);
    }), ga(() => {
      p && clearInterval(p);
    }), (P, $) => {
      const B = Gw, le = Ww, te = Lw, ge = Jw;
      return x(), H("div", CE, [
        w("header", OE, [
          w("div", null, [
            w(
              "h3",
              LE,
              V(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            w(
              "p",
              IE,
              V(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          w("div", RE, [
            M(c(Nn), {
              size: "small",
              plain: "",
              onClick: fe
            }, {
              default: oe(() => [
                qt(
                  V(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            M(c(Nn), {
              size: "small",
              loading: c(s),
              onClick: I
            }, {
              default: oe(() => [
                qt(
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
        c(n) ? (x(), H("main", xE, [
          w("aside", PE, [
            w("div", NE, [
              w(
                "div",
                {
                  class: U(["status-item", { ready: c(r)?.available }])
                },
                [
                  $[20] || ($[20] = w(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  w(
                    "span",
                    null,
                    V(c(v)),
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
                  class: U(["status-item", { ready: c(h) }])
                },
                [
                  $[21] || ($[21] = w(
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
                  $[22] || ($[22] = w(
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
            w("section", $E, [
              w(
                "div",
                ME,
                V(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              w(
                "div",
                DE,
                V(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              w("div", FE, [
                M(c(Nn), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: ue
                }, {
                  default: oe(() => [
                    qt(
                      V(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                M(c(Nn), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: ee
                }, {
                  default: oe(() => [
                    qt(
                      V(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                M(c(Nn), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(f),
                  disabled: !c(o)?.running,
                  onClick: he
                }, {
                  default: oe(() => [
                    qt(
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
                zE,
                V(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            w("section", BE, [
              w(
                "div",
                VE,
                V(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              w(
                "div",
                jE,
                V(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              w("div", UE, [
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
                    V(c(h) ? c(t)("common.yes") : c(t)("common.no")),
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
          w("section", HE, [
            w("div", WE, [
              w("div", GE, [
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
              w("div", KE, [
                w("label", qE, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  w("div", YE, [
                    vt(w(
                      "input",
                      {
                        "onUpdate:modelValue": $[0] || ($[0] = (Y) => c(n).modelDir = Y),
                        class: "text-input",
                        onChange: O
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [ho, c(n).modelDir]
                    ]),
                    M(c(Nn), {
                      size: "small",
                      plain: "",
                      onClick: G
                    }, {
                      default: oe(() => [
                        qt(
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
                w("label", ZE, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  M(le, {
                    modelValue: c(b),
                    "onUpdate:modelValue": $[1] || ($[1] = (Y) => mo(b) ? b.value = Y : null),
                    class: "field-select",
                    clearable: "",
                    onChange: L
                  }, {
                    default: oe(() => [
                      (x(!0), H(
                        Ct,
                        null,
                        $r(c(a)?.mainModels ?? [], (Y) => (x(), se(B, {
                          key: Y,
                          label: S(Y),
                          value: Y
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                w("label", XE, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  M(le, {
                    modelValue: c(g),
                    "onUpdate:modelValue": $[2] || ($[2] = (Y) => mo(g) ? g.value = Y : null),
                    class: "field-select",
                    clearable: "",
                    onChange: L
                  }, {
                    default: oe(() => [
                      (x(!0), H(
                        Ct,
                        null,
                        $r(c(a)?.mmprojModels ?? [], (Y) => (x(), se(B, {
                          key: Y,
                          label: S(Y),
                          value: Y
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ]),
                w("label", QE, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  w("div", JE, [
                    vt(w("input", {
                      "onUpdate:modelValue": $[3] || ($[3] = (Y) => c(n).runtimePath = Y),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, eS), [
                      [ho, c(n).runtimePath]
                    ]),
                    M(c(Nn), {
                      size: "small",
                      plain: "",
                      onClick: Q
                    }, {
                      default: oe(() => [
                        qt(
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
            w("div", tS, [
              w("div", nS, [
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
              w("div", rS, [
                w("label", oS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  M(te, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": $[4] || ($[4] = (Y) => c(n).ctxSize = Y),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", aS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  M(te, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": $[5] || ($[5] = (Y) => c(n).gpuLayers = Y),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", sS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  M(te, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": $[6] || ($[6] = (Y) => c(n).threads = Y),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", lS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  M(te, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": $[7] || ($[7] = (Y) => c(n).batchSize = Y),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", iS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  M(te, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": $[8] || ($[8] = (Y) => c(n).ubatchSize = Y),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", cS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  M(te, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": $[9] || ($[9] = (Y) => c(n).mainGpu = Y),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            w("div", uS, [
              w("div", fS, [
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
              w("div", dS, [
                w("label", null, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  M(ge, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": $[10] || ($[10] = (Y) => c(n).flashAttn = Y)
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
                  M(ge, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": $[11] || ($[11] = (Y) => c(n).kvOffload = Y)
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
                  M(ge, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": $[12] || ($[12] = (Y) => c(n).mmap = Y)
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
              w("div", hS, [
                w("label", null, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  M(ge, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": $[13] || ($[13] = (Y) => c(n).autoStartOnRequest = Y)
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
                  M(ge, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": $[14] || ($[14] = (Y) => c(n).keepAlive = Y)
                  }, null, 8, ["modelValue"])
                ]),
                w("label", gS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  M(te, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": $[15] || ($[15] = (Y) => c(n).idleTimeoutMinutes = Y),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", vS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  M(te, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": $[16] || ($[16] = (Y) => c(n).requestTimeoutSecs = Y),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            w("div", bS, [
              w("div", yS, [
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
              w("div", _S, [
                w("label", wS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  M(te, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": $[17] || ($[17] = (Y) => c(n).temperature = Y),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", kS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  M(te, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": $[18] || ($[18] = (Y) => c(n).maxTokens = Y),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                w("label", TS, [
                  w(
                    "span",
                    null,
                    V(c(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  M(te, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": $[19] || ($[19] = (Y) => c(n).port = Y),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ])
              ])
            ]),
            w("div", ES, [
              M(c(Nn), {
                type: "primary",
                loading: c(i),
                onClick: W
              }, {
                default: oe(() => [
                  qt(
                    V(c(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              c(o)?.commandLine ? (x(), H("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, V(c(o).commandLine), 9, SS)) : X("v-if", !0)
            ])
          ])
        ])) : X("v-if", !0)
      ]);
    };
  }
}), CS = /* @__PURE__ */ Ks(AS, [["__scopeId", "data-v-18356d29"]]), OS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CS
}, Symbol.toStringTag, { value: "Module" }));
export {
  RS as activate,
  RS as default
};
