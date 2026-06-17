var tf = Object.defineProperty;
var nf = (e, t, n) => t in e ? tf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ue = (e, t, n) => nf(e, typeof t != "symbol" ? t + "" : t, n);
import * as ja from "vue";
import { inject as Ve, createVNode as N, defineAsyncComponent as rf, ref as W, shallowRef as pr, computed as I, watch as _e, onMounted as ft, onUnmounted as wa, defineComponent as oe, h as Uc, Text as Hc, Fragment as Lt, createElementBlock as K, openBlock as P, normalizeClass as Z, createCommentVNode as ee, renderSlot as ye, createElementVNode as y, getCurrentInstance as jt, unref as c, watchEffect as Wc, readonly as xs, getCurrentScope as of, onScopeDispose as af, nextTick as ct, isRef as Gr, warn as sf, provide as Rn, mergeProps as Kr, toRef as Gn, useAttrs as lf, useSlots as cf, normalizeStyle as It, createBlock as ie, withCtx as se, resolveDynamicComponent as Bt, withModifiers as rt, toDisplayString as F, onBeforeUnmount as $n, Transition as oo, withDirectives as kt, vShow as er, reactive as Er, onActivated as uf, onUpdated as Gc, cloneVNode as df, Comment as ff, Teleport as pf, onBeforeMount as mf, onDeactivated as hf, createTextVNode as Zt, withKeys as tn, createSlots as gf, toRaw as vf, toRefs as Rs, resolveComponent as wr, resolveDirective as bf, toHandlerKey as yf, renderList as Tr, vModelText as To, shallowReactive as _f, isVNode as So, render as sa, vModelSelect as wf } from "vue";
var kf = {
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
function Tf() {
  return "icon-" + ((1 + Math.random()) * 4294967296 | 0).toString(16).substring(1);
}
function Sf(e, t, n) {
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
var Ef = Symbol("icon-context");
function Ht(e, t, n) {
  var r = {
    name: "icon-" + e,
    props: ["size", "strokeWidth", "strokeLinecap", "strokeLinejoin", "theme", "fill", "spin"],
    setup: function(a) {
      var s = Tf(), i = Ve(Ef, kf);
      return function() {
        var l = a.size, u = a.strokeWidth, d = a.strokeLinecap, m = a.strokeLinejoin, p = a.theme, v = a.fill, h = a.spin, g = Sf(s, {
          size: l,
          strokeWidth: u,
          strokeLinecap: d,
          strokeLinejoin: m,
          theme: p,
          fill: v
        }, i), T = [i.prefix + "-icon"];
        return T.push(i.prefix + "-icon-" + e), t && i.rtl && T.push(i.prefix + "-icon-rtl"), h && T.push(i.prefix + "-icon-spin"), N("span", {
          class: T.join(" ")
        }, [n(g)]);
      };
    }
  };
  return r;
}
const Af = Ht("add", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("rect", {
    x: "6",
    y: "6",
    width: "36",
    height: "36",
    rx: "3",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M24 16V32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M16 24L32 24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Rl = Ht("brain", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M19.036 44.0002C18.0561 40.8046 16.5778 38.4223 14.6011 36.8533C11.636 34.4998 6.92483 35.9625 5.18458 33.535C3.44433 31.1074 6.40382 26.6432 7.44234 24.0091C8.48086 21.3751 3.46179 20.4437 4.04776 19.6959C4.43842 19.1974 6.97471 17.7588 11.6567 15.3802C12.987 7.79356 17.9008 4.00024 26.3982 4.00024C39.1441 4.00024 44 14.8062 44 21.6791C44 28.5521 38.1201 35.9564 29.7441 37.5529C28.9951 38.6437 30.0754 40.7928 32.9848 44.0002",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19.4997 14.5001C18.8464 17.0344 19.0408 18.8139 20.0829 19.8386C21.125 20.8634 22.9011 21.5335 25.4112 21.849C24.8417 25.1177 25.5361 26.6512 27.4942 26.4494C29.4524 26.2476 30.6289 25.434 31.0239 24.0084C34.0842 24.8685 35.7428 24.1487 35.9997 21.849C36.3852 18.3994 34.525 15.6476 33.7624 15.6476C32.9997 15.6476 31.0239 15.5548 31.0239 14.5001C31.0239 13.4453 28.7159 12.8494 26.6329 12.8494C24.5499 12.8494 25.8035 11.4453 22.9432 12.0001C21.0363 12.3699 19.8885 13.2032 19.4997 14.5001Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M30.5002 25.5002C29.4833 26.1313 28.0878 27.1805 27.5002 28.0002C26.0313 30.0497 24.8398 31.2976 24.5791 32.6083",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap
  }, null)]);
}), Cf = Ht("copy", !0, function(e) {
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
}), Pl = Ht("delete", !1, function(e) {
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
}), Of = Ht("dislike", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M24 31L21 26L28 20L19 15L20 9.19942C18.4999 8.43256 16.8004 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C31.1996 8 29.5001 8.43256 28 9.19942",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Nl = Ht("down", !1, function(e) {
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
}), Lf = Ht("edit", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M7 42H43",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), If = Ht("like", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), xf = Ht("message", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M14 18L32 18",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M14 26H32",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M14 34H24",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), $l = Ht("refresh", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M42 8V24",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M6 24L6 40",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Ml = Ht("robot", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("rect", {
    x: "9",
    y: "17",
    width: "30",
    height: "26",
    rx: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M33 9L28 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M15 9L20 17",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("circle", {
    cx: "34",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), N("circle", {
    cx: "14",
    cy: "7",
    r: "2",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), N("rect", {
    x: "16",
    y: "24",
    width: "16",
    height: "8",
    rx: "4",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null), N("path", {
    d: "M9 24H4V34H9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M39 24H44V34H39",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Rf = Ht("search", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",
    stroke: e.colors[2],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M33.2216 33.2217L41.7069 41.707",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), Pf = Ht("send", !0, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linejoin": e.strokeLinejoin
  }, null), N("path", {
    d: "M43.0001 5L22.1001 25.9",
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth,
    "stroke-linecap": e.strokeLinecap,
    "stroke-linejoin": e.strokeLinejoin
  }, null)]);
}), as = Ht("setting-two", !1, function(e) {
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
}), Nf = Ht("square", !1, function(e) {
  return N("svg", {
    width: e.size,
    height: e.size,
    viewBox: "0 0 48 48",
    fill: "none"
  }, [N("path", {
    d: "M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z",
    fill: e.colors[1],
    stroke: e.colors[0],
    "stroke-width": e.strokeWidth
  }, null)]);
}), Q2 = (e) => {
  e.registerRoute({
    target: "layout",
    path: "/local-ai/chat",
    name: "LocalAiChat",
    component: () => Promise.resolve().then(() => PS)
  }), e.registerSettingsTab({
    id: "localAi",
    labelKey: "localAi.title",
    icon: as,
    component: rf(() => Promise.resolve().then(() => Y2))
  });
};
/*!
  * shared v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function $f(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Dl = typeof window < "u", Lr = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Mf = (e, t, n) => Df({ l: e, k: t, s: n }), Df = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Et = (e) => typeof e == "number" && isFinite(e), Ff = (e) => Ps(e) === "[object Date]", la = (e) => Ps(e) === "[object RegExp]", ka = (e) => Pe(e) && Object.keys(e).length === 0, xt = Object.assign, zf = Object.create, He = (e = null) => zf(e);
let Fl;
const ea = () => Fl || (Fl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : He());
function zl(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function Bl(e) {
  return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Bf(e) {
  return e = e.replace(/(\w+)\s*=\s*"([^"]*)"/g, (r, o, a) => `${o}="${Bl(a)}"`), e = e.replace(/(\w+)\s*=\s*'([^']*)'/g, (r, o, a) => `${o}='${Bl(a)}'`), /\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e) && (e = e.replace(/(\s+)(on)(\w+\s*=)/gi, "$1&#111;n$3")), [
    // In href, src, action, formaction attributes
    /(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,
    // In style attributes within url()
    /(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi
  ].forEach((r) => {
    e = e.replace(r, "$1javascript&#58;");
  }), e;
}
const Vf = Object.prototype.hasOwnProperty;
function pn(e, t) {
  return Vf.call(e, t);
}
const dt = Array.isArray, ot = (e) => typeof e == "function", ae = (e) => typeof e == "string", ut = (e) => typeof e == "boolean", Ne = (e) => e !== null && typeof e == "object", jf = (e) => Ne(e) && ot(e.then) && ot(e.catch), Kc = Object.prototype.toString, Ps = (e) => Kc.call(e), Pe = (e) => Ps(e) === "[object Object]", Uf = (e) => e == null ? "" : dt(e) || Pe(e) && e.toString === Kc ? JSON.stringify(e, null, 2) : String(e);
function Ns(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const jo = (e) => !Ne(e) || dt(e);
function ta(e, t) {
  if (jo(e) || jo(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Ne(r[a]) && !Ne(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : He()), jo(o[a]) || jo(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Hf(e, t, n) {
  return { line: e, column: t, offset: n };
}
function ss(e, t, n) {
  return { start: e, end: t };
}
const Fe = {
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
}, Wf = 17;
function Ta(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, s = e, i = new SyntaxError(String(s));
  return i.code = e, t && (i.location = t), i.domain = r, i;
}
function Gf(e) {
  throw e;
}
const wn = " ", Kf = "\r", $t = `
`, qf = "\u2028", Yf = "\u2029";
function Zf(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const s = (O) => t[O] === Kf && t[O + 1] === $t, i = (O) => t[O] === $t, l = (O) => t[O] === Yf, u = (O) => t[O] === qf, d = (O) => s(O) || i(O) || l(O) || u(O), m = () => n, p = () => r, v = () => o, h = () => a, g = (O) => s(O) || l(O) || u(O) ? $t : t[O], T = () => g(n), f = () => g(n + a);
  function E() {
    return a = 0, d(n) && (r++, o = 0), s(n) && n++, n++, o++, t[n];
  }
  function x() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function S() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function b(O = 0) {
    a = O;
  }
  function C() {
    const O = n + a;
    for (; O !== n; )
      E();
    a = 0;
  }
  return {
    index: m,
    line: p,
    column: v,
    peekOffset: h,
    charAt: g,
    currentChar: T,
    currentPeek: f,
    next: E,
    peek: x,
    reset: S,
    resetPeek: b,
    skipToPeek: C
  };
}
const Vn = void 0, Xf = ".", Vl = "'", Qf = "tokenizer";
function Jf(e, t = {}) {
  const n = t.location !== !1, r = Zf(e), o = () => r.index(), a = () => Hf(r.line(), r.column(), r.index()), s = a(), i = o(), l = {
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
  }, u = () => l, { onError: d } = t;
  function m(w, A, M, ...J) {
    const Ae = u();
    if (A.column += M, A.offset += M, d) {
      const ue = n ? ss(Ae.startLoc, A) : null, k = Ta(w, ue, {
        domain: Qf,
        args: J
      });
      d(k);
    }
  }
  function p(w, A, M) {
    w.endLoc = a(), w.currentType = A;
    const J = { type: A };
    return n && (J.loc = ss(w.startLoc, w.endLoc)), M != null && (J.value = M), J;
  }
  const v = (w) => p(
    w,
    13
    /* TokenTypes.EOF */
  );
  function h(w, A) {
    return w.currentChar() === A ? (w.next(), A) : (m(Fe.EXPECTED_TOKEN, a(), 0, A), "");
  }
  function g(w) {
    let A = "";
    for (; w.currentPeek() === wn || w.currentPeek() === $t; )
      A += w.currentPeek(), w.peek();
    return A;
  }
  function T(w) {
    const A = g(w);
    return w.skipToPeek(), A;
  }
  function f(w) {
    if (w === Vn)
      return !1;
    const A = w.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A === 95;
  }
  function E(w) {
    if (w === Vn)
      return !1;
    const A = w.charCodeAt(0);
    return A >= 48 && A <= 57;
  }
  function x(w, A) {
    const { currentType: M } = A;
    if (M !== 2)
      return !1;
    g(w);
    const J = f(w.currentPeek());
    return w.resetPeek(), J;
  }
  function S(w, A) {
    const { currentType: M } = A;
    if (M !== 2)
      return !1;
    g(w);
    const J = w.currentPeek() === "-" ? w.peek() : w.currentPeek(), Ae = E(J);
    return w.resetPeek(), Ae;
  }
  function b(w, A) {
    const { currentType: M } = A;
    if (M !== 2)
      return !1;
    g(w);
    const J = w.currentPeek() === Vl;
    return w.resetPeek(), J;
  }
  function C(w, A) {
    const { currentType: M } = A;
    if (M !== 7)
      return !1;
    g(w);
    const J = w.currentPeek() === ".";
    return w.resetPeek(), J;
  }
  function O(w, A) {
    const { currentType: M } = A;
    if (M !== 8)
      return !1;
    g(w);
    const J = f(w.currentPeek());
    return w.resetPeek(), J;
  }
  function D(w, A) {
    const { currentType: M } = A;
    if (!(M === 7 || M === 11))
      return !1;
    g(w);
    const J = w.currentPeek() === ":";
    return w.resetPeek(), J;
  }
  function X(w, A) {
    const { currentType: M } = A;
    if (M !== 9)
      return !1;
    const J = () => {
      const ue = w.currentPeek();
      return ue === "{" ? f(w.peek()) : ue === "@" || ue === "|" || ue === ":" || ue === "." || ue === wn || !ue ? !1 : ue === $t ? (w.peek(), J()) : fe(w, !1);
    }, Ae = J();
    return w.resetPeek(), Ae;
  }
  function ne(w) {
    g(w);
    const A = w.currentPeek() === "|";
    return w.resetPeek(), A;
  }
  function fe(w, A = !0) {
    const M = (Ae = !1, ue = "") => {
      const k = w.currentPeek();
      return k === "{" || k === "@" || !k ? Ae : k === "|" ? !(ue === wn || ue === $t) : k === wn ? (w.peek(), M(!0, wn)) : k === $t ? (w.peek(), M(!0, $t)) : !0;
    }, J = M();
    return A && w.resetPeek(), J;
  }
  function re(w, A) {
    const M = w.currentChar();
    return M === Vn ? Vn : A(M) ? (w.next(), M) : null;
  }
  function pe(w) {
    const A = w.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A >= 48 && A <= 57 || // 0-9
    A === 95 || // _
    A === 36;
  }
  function ge(w) {
    return re(w, pe);
  }
  function B(w) {
    const A = w.charCodeAt(0);
    return A >= 97 && A <= 122 || // a-z
    A >= 65 && A <= 90 || // A-Z
    A >= 48 && A <= 57 || // 0-9
    A === 95 || // _
    A === 36 || // $
    A === 45;
  }
  function Q(w) {
    return re(w, B);
  }
  function j(w) {
    const A = w.charCodeAt(0);
    return A >= 48 && A <= 57;
  }
  function q(w) {
    return re(w, j);
  }
  function z(w) {
    const A = w.charCodeAt(0);
    return A >= 48 && A <= 57 || // 0-9
    A >= 65 && A <= 70 || // A-F
    A >= 97 && A <= 102;
  }
  function Se(w) {
    return re(w, z);
  }
  function $e(w) {
    let A = "", M = "";
    for (; A = q(w); )
      M += A;
    return M;
  }
  function Te(w) {
    let A = "";
    for (; ; ) {
      const M = w.currentChar();
      if (M === "{" || M === "}" || M === "@" || M === "|" || !M)
        break;
      if (M === wn || M === $t)
        if (fe(w))
          A += M, w.next();
        else {
          if (ne(w))
            break;
          A += M, w.next();
        }
      else
        A += M, w.next();
    }
    return A;
  }
  function me(w) {
    T(w);
    let A = "", M = "";
    for (; A = Q(w); )
      M += A;
    const J = w.currentChar();
    if (J && J !== "}" && J !== Vn && J !== wn && J !== $t && J !== "　") {
      const Ae = pt(w);
      return m(Fe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, M + Ae), M + Ae;
    }
    return w.currentChar() === Vn && m(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), M;
  }
  function G(w) {
    T(w);
    let A = "";
    return w.currentChar() === "-" ? (w.next(), A += `-${$e(w)}`) : A += $e(w), w.currentChar() === Vn && m(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), A;
  }
  function Ke(w) {
    return w !== Vl && w !== $t;
  }
  function we(w) {
    T(w), h(w, "'");
    let A = "", M = "";
    for (; A = re(w, Ke); )
      A === "\\" ? M += st(w) : M += A;
    const J = w.currentChar();
    return J === $t || J === Vn ? (m(Fe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), J === $t && (w.next(), h(w, "'")), M) : (h(w, "'"), M);
  }
  function st(w) {
    const A = w.currentChar();
    switch (A) {
      case "\\":
      case "'":
        return w.next(), `\\${A}`;
      case "u":
        return de(w, A, 4);
      case "U":
        return de(w, A, 6);
      default:
        return m(Fe.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, A), "";
    }
  }
  function de(w, A, M) {
    h(w, A);
    let J = "";
    for (let Ae = 0; Ae < M; Ae++) {
      const ue = Se(w);
      if (!ue) {
        m(Fe.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${A}${J}${w.currentChar()}`);
        break;
      }
      J += ue;
    }
    return `\\${A}${J}`;
  }
  function qe(w) {
    return w !== "{" && w !== "}" && w !== wn && w !== $t;
  }
  function pt(w) {
    T(w);
    let A = "", M = "";
    for (; A = re(w, qe); )
      M += A;
    return M;
  }
  function et(w) {
    let A = "", M = "";
    for (; A = ge(w); )
      M += A;
    return M;
  }
  function Ct(w) {
    const A = (M) => {
      const J = w.currentChar();
      return J === "{" || J === "@" || J === "|" || J === "(" || J === ")" || !J || J === wn ? M : (M += J, w.next(), A(M));
    };
    return A("");
  }
  function bt(w) {
    T(w);
    const A = h(
      w,
      "|"
      /* TokenChars.Pipe */
    );
    return T(w), A;
  }
  function Tt(w, A) {
    let M = null;
    switch (w.currentChar()) {
      case "{":
        return A.braceNest >= 1 && m(Fe.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), w.next(), M = p(
          A,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), T(w), A.braceNest++, M;
      case "}":
        return A.braceNest > 0 && A.currentType === 2 && m(Fe.EMPTY_PLACEHOLDER, a(), 0), w.next(), M = p(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), A.braceNest--, A.braceNest > 0 && T(w), A.inLinked && A.braceNest === 0 && (A.inLinked = !1), M;
      case "@":
        return A.braceNest > 0 && m(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), M = yt(w, A) || v(A), A.braceNest = 0, M;
      default: {
        let Ae = !0, ue = !0, k = !0;
        if (ne(w))
          return A.braceNest > 0 && m(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), M = p(A, 1, bt(w)), A.braceNest = 0, A.inLinked = !1, M;
        if (A.braceNest > 0 && (A.currentType === 4 || A.currentType === 5 || A.currentType === 6))
          return m(Fe.UNTERMINATED_CLOSING_BRACE, a(), 0), A.braceNest = 0, tt(w, A);
        if (Ae = x(w, A))
          return M = p(A, 4, me(w)), T(w), M;
        if (ue = S(w, A))
          return M = p(A, 5, G(w)), T(w), M;
        if (k = b(w, A))
          return M = p(A, 6, we(w)), T(w), M;
        if (!Ae && !ue && !k)
          return M = p(A, 12, pt(w)), m(Fe.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, M.value), T(w), M;
        break;
      }
    }
    return M;
  }
  function yt(w, A) {
    const { currentType: M } = A;
    let J = null;
    const Ae = w.currentChar();
    switch ((M === 7 || M === 8 || M === 11 || M === 9) && (Ae === $t || Ae === wn) && m(Fe.INVALID_LINKED_FORMAT, a(), 0), Ae) {
      case "@":
        return w.next(), J = p(
          A,
          7,
          "@"
          /* TokenChars.LinkedAlias */
        ), A.inLinked = !0, J;
      case ".":
        return T(w), w.next(), p(
          A,
          8,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return T(w), w.next(), p(
          A,
          9,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return ne(w) ? (J = p(A, 1, bt(w)), A.braceNest = 0, A.inLinked = !1, J) : C(w, A) || D(w, A) ? (T(w), yt(w, A)) : O(w, A) ? (T(w), p(A, 11, et(w))) : X(w, A) ? (T(w), Ae === "{" ? Tt(w, A) || J : p(A, 10, Ct(w))) : (M === 7 && m(Fe.INVALID_LINKED_FORMAT, a(), 0), A.braceNest = 0, A.inLinked = !1, tt(w, A));
    }
  }
  function tt(w, A) {
    let M = {
      type: 13
      /* TokenTypes.EOF */
    };
    if (A.braceNest > 0)
      return Tt(w, A) || v(A);
    if (A.inLinked)
      return yt(w, A) || v(A);
    switch (w.currentChar()) {
      case "{":
        return Tt(w, A) || v(A);
      case "}":
        return m(Fe.UNBALANCED_CLOSING_BRACE, a(), 0), w.next(), p(
          A,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return yt(w, A) || v(A);
      default: {
        if (ne(w))
          return M = p(A, 1, bt(w)), A.braceNest = 0, A.inLinked = !1, M;
        if (fe(w))
          return p(A, 0, Te(w));
        break;
      }
    }
    return M;
  }
  function _t() {
    const { currentType: w, offset: A, startLoc: M, endLoc: J } = l;
    return l.lastType = w, l.lastOffset = A, l.lastStartLoc = M, l.lastEndLoc = J, l.offset = o(), l.startLoc = a(), r.currentChar() === Vn ? p(
      l,
      13
      /* TokenTypes.EOF */
    ) : tt(r, l);
  }
  return {
    nextToken: _t,
    currentOffset: o,
    currentPosition: a,
    context: u
  };
}
const ep = "parser", tp = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function np(e, t, n) {
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
function rp(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function r(f, E, x, S, ...b) {
    const C = f.currentPosition();
    if (C.offset += S, C.column += S, n) {
      const O = t ? ss(x, C) : null, D = Ta(E, O, {
        domain: ep,
        args: b
      });
      n(D);
    }
  }
  function o(f, E, x) {
    const S = { type: f };
    return t && (S.start = E, S.end = E, S.loc = { start: x, end: x }), S;
  }
  function a(f, E, x, S) {
    t && (f.end = E, f.loc && (f.loc.end = x));
  }
  function s(f, E) {
    const x = f.context(), S = o(3, x.offset, x.startLoc);
    return S.value = E, a(S, f.currentOffset(), f.currentPosition()), S;
  }
  function i(f, E) {
    const x = f.context(), { lastOffset: S, lastStartLoc: b } = x, C = o(5, S, b);
    return C.index = parseInt(E, 10), f.nextToken(), a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function l(f, E) {
    const x = f.context(), { lastOffset: S, lastStartLoc: b } = x, C = o(4, S, b);
    return C.key = E, f.nextToken(), a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function u(f, E) {
    const x = f.context(), { lastOffset: S, lastStartLoc: b } = x, C = o(9, S, b);
    return C.value = E.replace(tp, np), f.nextToken(), a(C, f.currentOffset(), f.currentPosition()), C;
  }
  function d(f) {
    const E = f.nextToken(), x = f.context(), { lastOffset: S, lastStartLoc: b } = x, C = o(8, S, b);
    return E.type !== 11 ? (r(f, Fe.UNEXPECTED_EMPTY_LINKED_MODIFIER, x.lastStartLoc, 0), C.value = "", a(C, S, b), {
      nextConsumeToken: E,
      node: C
    }) : (E.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, kn(E)), C.value = E.value || "", a(C, f.currentOffset(), f.currentPosition()), {
      node: C
    });
  }
  function m(f, E) {
    const x = f.context(), S = o(7, x.offset, x.startLoc);
    return S.value = E, a(S, f.currentOffset(), f.currentPosition()), S;
  }
  function p(f) {
    const E = f.context(), x = o(6, E.offset, E.startLoc);
    let S = f.nextToken();
    if (S.type === 8) {
      const b = d(f);
      x.modifier = b.node, S = b.nextConsumeToken || f.nextToken();
    }
    switch (S.type !== 9 && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, kn(S)), S = f.nextToken(), S.type === 2 && (S = f.nextToken()), S.type) {
      case 10:
        S.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, kn(S)), x.key = m(f, S.value || "");
        break;
      case 4:
        S.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, kn(S)), x.key = l(f, S.value || "");
        break;
      case 5:
        S.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, kn(S)), x.key = i(f, S.value || "");
        break;
      case 6:
        S.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, kn(S)), x.key = u(f, S.value || "");
        break;
      default: {
        r(f, Fe.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
        const b = f.context(), C = o(7, b.offset, b.startLoc);
        return C.value = "", a(C, b.offset, b.startLoc), x.key = C, a(x, b.offset, b.startLoc), {
          nextConsumeToken: S,
          node: x
        };
      }
    }
    return a(x, f.currentOffset(), f.currentPosition()), {
      node: x
    };
  }
  function v(f) {
    const E = f.context(), x = E.currentType === 1 ? f.currentOffset() : E.offset, S = E.currentType === 1 ? E.endLoc : E.startLoc, b = o(2, x, S);
    b.items = [];
    let C = null;
    do {
      const X = C || f.nextToken();
      switch (C = null, X.type) {
        case 0:
          X.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, kn(X)), b.items.push(s(f, X.value || ""));
          break;
        case 5:
          X.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, kn(X)), b.items.push(i(f, X.value || ""));
          break;
        case 4:
          X.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, kn(X)), b.items.push(l(f, X.value || ""));
          break;
        case 6:
          X.value == null && r(f, Fe.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, kn(X)), b.items.push(u(f, X.value || ""));
          break;
        case 7: {
          const ne = p(f);
          b.items.push(ne.node), C = ne.nextConsumeToken || null;
          break;
        }
      }
    } while (E.currentType !== 13 && E.currentType !== 1);
    const O = E.currentType === 1 ? E.lastOffset : f.currentOffset(), D = E.currentType === 1 ? E.lastEndLoc : f.currentPosition();
    return a(b, O, D), b;
  }
  function h(f, E, x, S) {
    const b = f.context();
    let C = S.items.length === 0;
    const O = o(1, E, x);
    O.cases = [], O.cases.push(S);
    do {
      const D = v(f);
      C || (C = D.items.length === 0), O.cases.push(D);
    } while (b.currentType !== 13);
    return C && r(f, Fe.MUST_HAVE_MESSAGES_IN_PLURAL, x, 0), a(O, f.currentOffset(), f.currentPosition()), O;
  }
  function g(f) {
    const E = f.context(), { offset: x, startLoc: S } = E, b = v(f);
    return E.currentType === 13 ? b : h(f, x, S, b);
  }
  function T(f) {
    const E = Jf(f, xt({}, e)), x = E.context(), S = o(0, x.offset, x.startLoc);
    return t && S.loc && (S.loc.source = f), S.body = g(E), e.onCacheKey && (S.cacheKey = e.onCacheKey(f)), x.currentType !== 13 && r(E, Fe.UNEXPECTED_LEXICAL_ANALYSIS, x.lastStartLoc, 0, f[x.offset] || ""), a(S, E.currentOffset(), E.currentPosition()), S;
  }
  return { parse: T };
}
function kn(e) {
  if (e.type === 13)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function op(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function jl(e, t) {
  for (let n = 0; n < e.length; n++)
    $s(e[n], t);
}
function $s(e, t) {
  switch (e.type) {
    case 1:
      jl(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      jl(e.items, t);
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
function ap(e, t = {}) {
  const n = op(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && $s(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function sp(e) {
  const t = e.body;
  return t.type === 2 ? Ul(t) : t.cases.forEach((n) => Ul(n)), e;
}
function Ul(e) {
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
      e.static = Ns(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
function Ur(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      Ur(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        Ur(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        Ur(n[r]);
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
      Ur(t.key), t.k = t.key, delete t.key, t.modifier && (Ur(t.modifier), t.m = t.modifier, delete t.modifier);
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
function lp(e, t) {
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
  function l(g, T) {
    s.code += g;
  }
  function u(g, T = !0) {
    const f = T ? r : "";
    l(o ? f + "  ".repeat(g) : f);
  }
  function d(g = !0) {
    const T = ++s.indentLevel;
    g && u(T);
  }
  function m(g = !0) {
    const T = --s.indentLevel;
    g && u(T);
  }
  function p() {
    u(s.indentLevel);
  }
  return {
    context: i,
    push: l,
    indent: d,
    deindent: m,
    newline: p,
    helper: (g) => `_${g}`,
    needIndent: () => s.needIndent
  };
}
function ip(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), qr(e, t.key), t.modifier ? (e.push(", "), qr(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function cp(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (qr(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function up(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (qr(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function dp(e, t) {
  t.body ? qr(e, t.body) : e.push("null");
}
function qr(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      dp(e, t);
      break;
    case 1:
      up(e, t);
      break;
    case 2:
      cp(e, t);
      break;
    case 6:
      ip(e, t);
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
const fp = (e, t = {}) => {
  const n = ae(t.mode) ? t.mode : "normal", r = ae(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", s = e.helpers || [], i = lp(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  i.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), i.indent(a), s.length > 0 && (i.push(`const { ${Ns(s.map((d) => `${d}: _${d}`), ", ")} } = ctx`), i.newline()), i.push("return "), qr(i, e), i.deindent(a), i.push("}"), delete e.helpers;
  const { code: l, map: u } = i.context();
  return {
    ast: e,
    code: l,
    map: u ? u.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function pp(e, t = {}) {
  const n = xt({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, i = rp(n).parse(e);
  return r ? (a && sp(i), o && Ur(i), { ast: i, code: "" }) : (ap(i, n), fp(i, n));
}
/*!
  * core-base v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function mp() {
  typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ea().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ln(e) {
  return Ne(e) && Ms(e) === 0 && (pn(e, "b") || pn(e, "body"));
}
const qc = ["b", "body"];
function hp(e) {
  return gr(e, qc);
}
const Yc = ["c", "cases"];
function gp(e) {
  return gr(e, Yc, []);
}
const Zc = ["s", "static"];
function vp(e) {
  return gr(e, Zc);
}
const Xc = ["i", "items"];
function bp(e) {
  return gr(e, Xc, []);
}
const Qc = ["t", "type"];
function Ms(e) {
  return gr(e, Qc);
}
const Jc = ["v", "value"];
function Uo(e, t) {
  const n = gr(e, Jc);
  if (n != null)
    return n;
  throw Eo(t);
}
const eu = ["m", "modifier"];
function yp(e) {
  return gr(e, eu);
}
const tu = ["k", "key"];
function _p(e) {
  const t = gr(e, tu);
  if (t)
    return t;
  throw Eo(
    6
    /* NodeTypes.Linked */
  );
}
function gr(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (pn(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const nu = [
  ...qc,
  ...Yc,
  ...Zc,
  ...Xc,
  ...tu,
  ...eu,
  ...Jc,
  ...Qc
];
function Eo(e) {
  return new Error(`unhandled node type: ${e}`);
}
function Ua(e) {
  return (n) => wp(n, e);
}
function wp(e, t) {
  const n = hp(t);
  if (n == null)
    throw Eo(
      0
      /* NodeTypes.Resource */
    );
  if (Ms(n) === 1) {
    const a = gp(n);
    return e.plural(a.reduce((s, i) => [
      ...s,
      Hl(e, i)
    ], []));
  } else
    return Hl(e, n);
}
function Hl(e, t) {
  const n = vp(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = bp(t).reduce((o, a) => [...o, ls(e, a)], []);
    return e.normalize(r);
  }
}
function ls(e, t) {
  const n = Ms(t);
  switch (n) {
    case 3:
      return Uo(t, n);
    case 9:
      return Uo(t, n);
    case 4: {
      const r = t;
      if (pn(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (pn(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw Eo(n);
    }
    case 5: {
      const r = t;
      if (pn(r, "i") && Et(r.i))
        return e.interpolate(e.list(r.i));
      if (pn(r, "index") && Et(r.index))
        return e.interpolate(e.list(r.index));
      throw Eo(n);
    }
    case 6: {
      const r = t, o = yp(r), a = _p(r);
      return e.linked(ls(e, a), o ? ls(e, o) : void 0, e.type);
    }
    case 7:
      return Uo(t, n);
    case 8:
      return Uo(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const kp = (e) => e;
let Ho = He();
function Tp(e, t = {}) {
  let n = !1;
  const r = t.onError || Gf;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...pp(e, t), detectError: n };
}
// @__NO_SIDE_EFFECTS__
function Sp(e, t) {
  if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && ae(e)) {
    ut(t.warnHtmlMessage) && t.warnHtmlMessage;
    const r = (t.onCacheKey || kp)(e), o = Ho[r];
    if (o)
      return o;
    const { ast: a, detectError: s } = Tp(e, {
      ...t,
      location: !1,
      jit: !0
    }), i = Ua(a);
    return s ? i : Ho[r] = i;
  } else {
    const n = e.cacheKey;
    if (n) {
      const r = Ho[n];
      return r || (Ho[n] = Ua(e));
    } else
      return Ua(e);
  }
}
const Kn = {
  INVALID_ARGUMENT: Wf,
  // 17
  INVALID_DATE_ARGUMENT: 18,
  INVALID_ISO_DATE_ARGUMENT: 19,
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
  NOT_SUPPORT_LOCALE_TYPE: 23
}, Ep = 24;
function qn(e) {
  return Ta(e, null, void 0);
}
function Ds(e, t) {
  return t.locale != null ? Wl(t.locale) : Wl(e.locale);
}
let Ha;
function Wl(e) {
  if (ae(e))
    return e;
  if (ot(e)) {
    if (e.resolvedOnce && Ha != null)
      return Ha;
    if (e.constructor.name === "Function") {
      const t = e();
      if (jf(t))
        throw qn(Kn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return Ha = t;
    } else
      throw qn(Kn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw qn(Kn.NOT_SUPPORT_LOCALE_TYPE);
}
function Ap(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...dt(t) ? t : Ne(t) ? Object.keys(t) : ae(t) ? [t] : [n]
  ])];
}
function ru(e, t, n) {
  const r = ae(n) ? n : ia, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let s = [n];
    for (; dt(s); )
      s = Gl(a, s, t);
    const i = dt(t) || !Pe(t) ? t : t.default ? t.default : null;
    s = ae(i) ? [i] : i, dt(s) && Gl(a, s, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Gl(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && ut(r); o++) {
    const a = t[o];
    ae(a) && (r = Cp(e, t[o], n));
  }
  return r;
}
function Cp(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = Op(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Op(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (dt(n) || Pe(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const vr = [];
vr[
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
vr[
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
vr[
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
vr[
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
vr[
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
vr[
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
vr[
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
const Lp = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ip(e) {
  return Lp.test(e);
}
function xp(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Rp(e) {
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
function Pp(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ip(t) ? xp(t) : "*" + t;
}
function Np(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, s, i, l, u, d, m;
  const p = [];
  p[
    0
    /* Actions.APPEND */
  ] = () => {
    s === void 0 ? s = i : s += i;
  }, p[
    1
    /* Actions.PUSH */
  ] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, p[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    p[
      0
      /* Actions.APPEND */
    ](), o++;
  }, p[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, r = 4, p[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, s === void 0 || (s = Pp(s), s === !1))
        return !1;
      p[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function v() {
    const h = e[n + 1];
    if (r === 5 && h === "'" || r === 6 && h === '"')
      return n++, i = "\\" + h, p[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && v())) {
      if (l = Rp(a), m = vr[r], u = m[l] || m.l || 8, u === 8 || (r = u[0], u[1] !== void 0 && (d = p[u[1]], d && (i = a, d() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Kl = /* @__PURE__ */ new Map();
function $p(e, t) {
  return Ne(e) ? e[t] : null;
}
function Mp(e, t) {
  if (!Ne(e))
    return null;
  let n = Kl.get(t);
  if (n || (n = Np(t), n && Kl.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const s = n[a];
    if (nu.includes(s) && Ln(o))
      return null;
    const i = o[s];
    if (i === void 0 || ot(o))
      return null;
    o = i, a++;
  }
  return o;
}
const Dp = "11.2.2", Sa = -1, ia = "en-US", ql = "", Yl = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Fp() {
  return {
    upper: (e, t) => t === "text" && ae(e) ? e.toUpperCase() : t === "vnode" && Ne(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && ae(e) ? e.toLowerCase() : t === "vnode" && Ne(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && ae(e) ? Yl(e) : t === "vnode" && Ne(e) && "__v_isVNode" in e ? Yl(e.children) : e
  };
}
let ou;
function zp(e) {
  ou = e;
}
let au;
function Bp(e) {
  au = e;
}
let su;
function Vp(e) {
  su = e;
}
let lu = null;
const Zl = (e) => {
  lu = e;
}, jp = () => lu;
let Xl = 0;
function Up(e = {}) {
  const t = ot(e.onWarn) ? e.onWarn : $f, n = ae(e.version) ? e.version : Dp, r = ae(e.locale) || ot(e.locale) ? e.locale : ia, o = ot(r) ? ia : r, a = dt(e.fallbackLocale) || Pe(e.fallbackLocale) || ae(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, s = Pe(e.messages) ? e.messages : Wa(o), i = Pe(e.datetimeFormats) ? e.datetimeFormats : Wa(o), l = Pe(e.numberFormats) ? e.numberFormats : Wa(o), u = xt(He(), e.modifiers, Fp()), d = e.pluralRules || He(), m = ot(e.missing) ? e.missing : null, p = ut(e.missingWarn) || la(e.missingWarn) ? e.missingWarn : !0, v = ut(e.fallbackWarn) || la(e.fallbackWarn) ? e.fallbackWarn : !0, h = !!e.fallbackFormat, g = !!e.unresolving, T = ot(e.postTranslation) ? e.postTranslation : null, f = Pe(e.processor) ? e.processor : null, E = ut(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, x = !!e.escapeParameter, S = ot(e.messageCompiler) ? e.messageCompiler : ou, b = ot(e.messageResolver) ? e.messageResolver : au || $p, C = ot(e.localeFallbacker) ? e.localeFallbacker : su || Ap, O = Ne(e.fallbackContext) ? e.fallbackContext : void 0, D = e, X = Ne(D.__datetimeFormatters) ? D.__datetimeFormatters : /* @__PURE__ */ new Map(), ne = Ne(D.__numberFormatters) ? D.__numberFormatters : /* @__PURE__ */ new Map(), fe = Ne(D.__meta) ? D.__meta : {};
  Xl++;
  const re = {
    version: n,
    cid: Xl,
    locale: r,
    fallbackLocale: a,
    messages: s,
    modifiers: u,
    pluralRules: d,
    missing: m,
    missingWarn: p,
    fallbackWarn: v,
    fallbackFormat: h,
    unresolving: g,
    postTranslation: T,
    processor: f,
    warnHtmlMessage: E,
    escapeParameter: x,
    messageCompiler: S,
    messageResolver: b,
    localeFallbacker: C,
    fallbackContext: O,
    onWarn: t,
    __meta: fe
  };
  return re.datetimeFormats = i, re.numberFormats = l, re.__datetimeFormatters = X, re.__numberFormatters = ne, re;
}
const Wa = (e) => ({ [e]: He() });
function Fs(e, t, n, r, o) {
  const { missing: a, onWarn: s } = e;
  if (a !== null) {
    const i = a(e, n, t, o);
    return ae(i) ? i : t;
  } else
    return t;
}
function lo(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Hp(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Wp(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Hp(e, t[r]))
      return !0;
  return !1;
}
function Ql(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: i } = e, [l, u, d, m] = is(...t), p = ut(d.missingWarn) ? d.missingWarn : e.missingWarn;
  ut(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const v = !!d.part, h = Ds(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!ae(l) || l === "")
    return new Intl.DateTimeFormat(h, m).format(u);
  let T = {}, f, E = null;
  const x = "datetime format";
  for (let C = 0; C < g.length && (f = g[C], T = n[f] || {}, E = T[l], !Pe(E)); C++)
    Fs(e, l, f, p, x);
  if (!Pe(E) || !ae(f))
    return r ? Sa : l;
  let S = `${f}__${l}`;
  ka(m) || (S = `${S}__${JSON.stringify(m)}`);
  let b = i.get(S);
  return b || (b = new Intl.DateTimeFormat(f, xt({}, E, m)), i.set(S, b)), v ? b.formatToParts(u) : b.format(u);
}
const iu = [
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
function is(...e) {
  const [t, n, r, o] = e, a = He();
  let s = He(), i;
  if (ae(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw qn(Kn.INVALID_ISO_DATE_ARGUMENT);
    const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    i = new Date(u);
    try {
      i.toISOString();
    } catch {
      throw qn(Kn.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Ff(t)) {
    if (isNaN(t.getTime()))
      throw qn(Kn.INVALID_DATE_ARGUMENT);
    i = t;
  } else if (Et(t))
    i = t;
  else
    throw qn(Kn.INVALID_ARGUMENT);
  return ae(n) ? a.key = n : Pe(n) && Object.keys(n).forEach((l) => {
    iu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ae(r) ? a.locale = r : Pe(r) && (s = r), Pe(o) && (s = o), [a.key || "", i, a, s];
}
function Jl(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function ei(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: i } = e, [l, u, d, m] = cs(...t), p = ut(d.missingWarn) ? d.missingWarn : e.missingWarn;
  ut(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn;
  const v = !!d.part, h = Ds(e, d), g = s(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    h
  );
  if (!ae(l) || l === "")
    return new Intl.NumberFormat(h, m).format(u);
  let T = {}, f, E = null;
  const x = "number format";
  for (let C = 0; C < g.length && (f = g[C], T = n[f] || {}, E = T[l], !Pe(E)); C++)
    Fs(e, l, f, p, x);
  if (!Pe(E) || !ae(f))
    return r ? Sa : l;
  let S = `${f}__${l}`;
  ka(m) || (S = `${S}__${JSON.stringify(m)}`);
  let b = i.get(S);
  return b || (b = new Intl.NumberFormat(f, xt({}, E, m)), i.set(S, b)), v ? b.formatToParts(u) : b.format(u);
}
const cu = [
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
function cs(...e) {
  const [t, n, r, o] = e, a = He();
  let s = He();
  if (!Et(t))
    throw qn(Kn.INVALID_ARGUMENT);
  const i = t;
  return ae(n) ? a.key = n : Pe(n) && Object.keys(n).forEach((l) => {
    cu.includes(l) ? s[l] = n[l] : a[l] = n[l];
  }), ae(r) ? a.locale = r : Pe(r) && (s = r), Pe(o) && (s = o), [a.key || "", i, a, s];
}
function ti(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
const Gp = (e) => e, Kp = (e) => "", qp = "text", Yp = (e) => e.length === 0 ? "" : Ns(e), Zp = Uf;
function ni(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Xp(e) {
  const t = Et(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Et(e.named.count) || Et(e.named.n)) ? Et(e.named.count) ? e.named.count : Et(e.named.n) ? e.named.n : t : t;
}
function Qp(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Jp(e = {}) {
  const t = e.locale, n = Xp(e), r = Ne(e.pluralRules) && ae(t) && ot(e.pluralRules[t]) ? e.pluralRules[t] : ni, o = Ne(e.pluralRules) && ae(t) && ot(e.pluralRules[t]) ? ni : void 0, a = (f) => f[r(n, f.length, o)], s = e.list || [], i = (f) => s[f], l = e.named || He();
  Et(e.pluralIndex) && Qp(n, l);
  const u = (f) => l[f];
  function d(f, E) {
    const x = ot(e.messages) ? e.messages(f, !!E) : Ne(e.messages) ? e.messages[f] : !1;
    return x || (e.parent ? e.parent.message(f) : Kp);
  }
  const m = (f) => e.modifiers ? e.modifiers[f] : Gp, p = Pe(e.processor) && ot(e.processor.normalize) ? e.processor.normalize : Yp, v = Pe(e.processor) && ot(e.processor.interpolate) ? e.processor.interpolate : Zp, h = Pe(e.processor) && ae(e.processor.type) ? e.processor.type : qp, T = {
    list: i,
    named: u,
    plural: a,
    linked: (f, ...E) => {
      const [x, S] = E;
      let b = "text", C = "";
      E.length === 1 ? Ne(x) ? (C = x.modifier || C, b = x.type || b) : ae(x) && (C = x || C) : E.length === 2 && (ae(x) && (C = x || C), ae(S) && (b = S || b));
      const O = d(f, !0)(T), D = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        b === "vnode" && dt(O) && C ? O[0] : O
      );
      return C ? m(C)(D, b) : D;
    },
    message: d,
    type: h,
    interpolate: v,
    normalize: p,
    values: xt(He(), s, l)
  };
  return T;
}
const ri = () => "", Zn = (e) => ot(e);
function oi(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: s, messages: i } = e, [l, u] = us(...t), d = ut(u.missingWarn) ? u.missingWarn : e.missingWarn, m = ut(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn, p = ut(u.escapeParameter) ? u.escapeParameter : e.escapeParameter, v = !!u.resolvedMessage, h = ae(u.default) || ut(u.default) ? ut(u.default) ? a ? l : () => l : u.default : n ? a ? l : () => l : null, g = n || h != null && (ae(h) || ot(h)), T = Ds(e, u);
  p && em(u);
  let [f, E, x] = v ? [
    l,
    T,
    i[T] || He()
  ] : uu(e, l, T, s, m, d), S = f, b = l;
  if (!v && !(ae(S) || Ln(S) || Zn(S)) && g && (S = h, b = S), !v && (!(ae(S) || Ln(S) || Zn(S)) || !ae(E)))
    return o ? Sa : l;
  let C = !1;
  const O = () => {
    C = !0;
  }, D = Zn(S) ? S : du(e, l, E, S, b, O);
  if (C)
    return S;
  const X = rm(e, E, x, u), ne = Jp(X), fe = tm(e, D, ne);
  let re = r ? r(fe, l) : fe;
  return p && ae(re) && (re = Bf(re)), re;
}
function em(e) {
  dt(e.list) ? e.list = e.list.map((t) => ae(t) ? zl(t) : t) : Ne(e.named) && Object.keys(e.named).forEach((t) => {
    ae(e.named[t]) && (e.named[t] = zl(e.named[t]));
  });
}
function uu(e, t, n, r, o, a) {
  const { messages: s, onWarn: i, messageResolver: l, localeFallbacker: u } = e, d = u(e, r, n);
  let m = He(), p, v = null;
  const h = "translate";
  for (let g = 0; g < d.length && (p = d[g], m = s[p] || He(), (v = l(m, t)) === null && (v = m[t]), !(ae(v) || Ln(v) || Zn(v))); g++)
    if (!Wp(p, d)) {
      const T = Fs(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        p,
        a,
        h
      );
      T !== t && (v = T);
    }
  return [v, p, m];
}
function du(e, t, n, r, o, a) {
  const { messageCompiler: s, warnHtmlMessage: i } = e;
  if (Zn(r)) {
    const u = r;
    return u.locale = u.locale || n, u.key = u.key || t, u;
  }
  if (s == null) {
    const u = () => r;
    return u.locale = n, u.key = t, u;
  }
  const l = s(r, nm(e, n, o, r, i, a));
  return l.locale = n, l.key = t, l.source = r, l;
}
function tm(e, t, n) {
  return t(n);
}
function us(...e) {
  const [t, n, r] = e, o = He();
  if (!ae(t) && !Et(t) && !Zn(t) && !Ln(t))
    throw qn(Kn.INVALID_ARGUMENT);
  const a = Et(t) ? String(t) : (Zn(t), t);
  return Et(n) ? o.plural = n : ae(n) ? o.default = n : Pe(n) && !ka(n) ? o.named = n : dt(n) && (o.list = n), Et(r) ? o.plural = r : ae(r) ? o.default = r : Pe(r) && xt(o, r), [a, o];
}
function nm(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (s) => {
      throw a && a(s), s;
    },
    onCacheKey: (s) => Mf(t, n, s)
  };
}
function rm(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: s, fallbackLocale: i, fallbackWarn: l, missingWarn: u, fallbackContext: d } = e, p = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (v, h) => {
      let g = s(n, v);
      if (g == null && (d || h)) {
        const [, , T] = uu(
          d || e,
          // NOTE: if has fallbackContext, fallback to root, else if use linked, fallback to local context
          v,
          t,
          i,
          l,
          u
        );
        g = s(T, v);
      }
      if (ae(g) || Ln(g)) {
        let T = !1;
        const E = du(e, v, t, g, v, () => {
          T = !0;
        });
        return T ? ri : E;
      } else return Zn(g) ? g : ri;
    }
  };
  return e.processor && (p.processor = e.processor), r.list && (p.list = r.list), r.named && (p.named = r.named), Et(r.plural) && (p.pluralIndex = r.plural), p;
}
mp();
/*!
  * vue-i18n v11.2.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const om = "11.2.2";
function am() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (ea().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (ea().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (ea().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
const Yr = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: Ep,
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
function Ao(e, ...t) {
  return Ta(e, null, void 0);
}
const ds = /* @__PURE__ */ Lr("__translateVNode"), fs = /* @__PURE__ */ Lr("__datetimeParts"), ps = /* @__PURE__ */ Lr("__numberParts"), sm = Lr("__setPluralRules"), fu = /* @__PURE__ */ Lr("__injectWithOption"), ms = /* @__PURE__ */ Lr("__dispose");
function Co(e) {
  if (!Ne(e) || Ln(e))
    return e;
  for (const t in e)
    if (pn(e, t))
      if (!t.includes("."))
        Ne(e[t]) && Co(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let s = 0; s < r; s++) {
          if (n[s] === "__proto__")
            throw new Error(`unsafe key: ${n[s]}`);
          if (n[s] in o || (o[n[s]] = He()), !Ne(o[n[s]])) {
            a = !0;
            break;
          }
          o = o[n[s]];
        }
        if (a || (Ln(o) ? nu.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Ln(o)) {
          const s = o[n[r]];
          Ne(s) && Co(s);
        }
      }
  return e;
}
function pu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, s = Pe(n) ? n : dt(r) ? He() : { [e]: He() };
  if (dt(r) && r.forEach((i) => {
    if ("locale" in i && "resource" in i) {
      const { locale: l, resource: u } = i;
      l ? (s[l] = s[l] || He(), ta(u, s[l])) : ta(u, s);
    } else
      ae(i) && ta(JSON.parse(i), s);
  }), o == null && a)
    for (const i in s)
      pn(s, i) && Co(s[i]);
  return s;
}
function lm(e) {
  return e.type;
}
function im(e, t, n) {
  let r = Ne(t.messages) ? t.messages : He();
  "__i18nGlobal" in n && (r = pu(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (Ne(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (Ne(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function ai(e) {
  return N(Hc, null, e, 0);
}
function mu() {
  return "currentInstance" in ja ? ja["currentInstance"] : ja.getCurrentInstance();
}
const si = () => [], cm = () => !1;
let li = 0;
function ii(e) {
  return (t, n, r, o) => e(n, r, mu() || void 0, o);
}
function um(e = {}) {
  const { __root: t, __injectWithOption: n } = e, r = t === void 0, o = e.flatJson, a = Dl ? W : pr;
  let s = ut(e.inheritLocale) ? e.inheritLocale : !0;
  const i = a(
    // prettier-ignore
    t && s ? t.locale.value : ae(e.locale) ? e.locale : ia
  ), l = a(
    // prettier-ignore
    t && s ? t.fallbackLocale.value : ae(e.fallbackLocale) || dt(e.fallbackLocale) || Pe(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i.value
  ), u = a(pu(i.value, e)), d = a(Pe(e.datetimeFormats) ? e.datetimeFormats : { [i.value]: {} }), m = a(Pe(e.numberFormats) ? e.numberFormats : { [i.value]: {} });
  let p = t ? t.missingWarn : ut(e.missingWarn) || la(e.missingWarn) ? e.missingWarn : !0, v = t ? t.fallbackWarn : ut(e.fallbackWarn) || la(e.fallbackWarn) ? e.fallbackWarn : !0, h = t ? t.fallbackRoot : ut(e.fallbackRoot) ? e.fallbackRoot : !0, g = !!e.fallbackFormat, T = ot(e.missing) ? e.missing : null, f = ot(e.missing) ? ii(e.missing) : null, E = ot(e.postTranslation) ? e.postTranslation : null, x = t ? t.warnHtmlMessage : ut(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, S = !!e.escapeParameter;
  const b = t ? t.modifiers : Pe(e.modifiers) ? e.modifiers : {};
  let C = e.pluralRules || t && t.pluralRules, O;
  O = (() => {
    r && Zl(null);
    const k = {
      version: om,
      locale: i.value,
      fallbackLocale: l.value,
      messages: u.value,
      modifiers: b,
      pluralRules: C,
      missing: f === null ? void 0 : f,
      missingWarn: p,
      fallbackWarn: v,
      fallbackFormat: g,
      unresolving: !0,
      postTranslation: E === null ? void 0 : E,
      warnHtmlMessage: x,
      escapeParameter: S,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    k.datetimeFormats = d.value, k.numberFormats = m.value, k.__datetimeFormatters = Pe(O) ? O.__datetimeFormatters : void 0, k.__numberFormatters = Pe(O) ? O.__numberFormatters : void 0;
    const $ = Up(k);
    return r && Zl($), $;
  })(), lo(O, i.value, l.value);
  function X() {
    return [
      i.value,
      l.value,
      u.value,
      d.value,
      m.value
    ];
  }
  const ne = I({
    get: () => i.value,
    set: (k) => {
      O.locale = k, i.value = k;
    }
  }), fe = I({
    get: () => l.value,
    set: (k) => {
      O.fallbackLocale = k, l.value = k, lo(O, i.value, k);
    }
  }), re = I(() => u.value), pe = /* @__PURE__ */ I(() => d.value), ge = /* @__PURE__ */ I(() => m.value);
  function B() {
    return ot(E) ? E : null;
  }
  function Q(k) {
    E = k, O.postTranslation = k;
  }
  function j() {
    return T;
  }
  function q(k) {
    k !== null && (f = ii(k)), T = k, O.missing = f;
  }
  const z = (k, $, ve, Ce, We, lt) => {
    X();
    let Ge;
    try {
      r || (O.fallbackContext = t ? jp() : void 0), Ge = k(O);
    } finally {
      r || (O.fallbackContext = void 0);
    }
    if (ve !== "translate exists" && // for not `te` (e.g `t`)
    Et(Ge) && Ge === Sa || ve === "translate exists" && !Ge) {
      const [Dn, Fn] = $();
      return t && h ? Ce(t) : We(Dn);
    } else {
      if (lt(Ge))
        return Ge;
      throw Ao(Yr.UNEXPECTED_RETURN_TYPE);
    }
  };
  function Se(...k) {
    return z(($) => Reflect.apply(oi, null, [$, ...k]), () => us(...k), "translate", ($) => Reflect.apply($.t, $, [...k]), ($) => $, ($) => ae($));
  }
  function $e(...k) {
    const [$, ve, Ce] = k;
    if (Ce && !Ne(Ce))
      throw Ao(Yr.INVALID_ARGUMENT);
    return Se($, ve, xt({ resolvedMessage: !0 }, Ce || {}));
  }
  function Te(...k) {
    return z(($) => Reflect.apply(Ql, null, [$, ...k]), () => is(...k), "datetime format", ($) => Reflect.apply($.d, $, [...k]), () => ql, ($) => ae($) || dt($));
  }
  function me(...k) {
    return z(($) => Reflect.apply(ei, null, [$, ...k]), () => cs(...k), "number format", ($) => Reflect.apply($.n, $, [...k]), () => ql, ($) => ae($) || dt($));
  }
  function G(k) {
    return k.map(($) => ae($) || Et($) || ut($) ? ai(String($)) : $);
  }
  const we = {
    normalize: G,
    interpolate: (k) => k,
    type: "vnode"
  };
  function st(...k) {
    return z(($) => {
      let ve;
      const Ce = $;
      try {
        Ce.processor = we, ve = Reflect.apply(oi, null, [Ce, ...k]);
      } finally {
        Ce.processor = null;
      }
      return ve;
    }, () => us(...k), "translate", ($) => $[ds](...k), ($) => [ai($)], ($) => dt($));
  }
  function de(...k) {
    return z(($) => Reflect.apply(ei, null, [$, ...k]), () => cs(...k), "number format", ($) => $[ps](...k), si, ($) => ae($) || dt($));
  }
  function qe(...k) {
    return z(($) => Reflect.apply(Ql, null, [$, ...k]), () => is(...k), "datetime format", ($) => $[fs](...k), si, ($) => ae($) || dt($));
  }
  function pt(k) {
    C = k, O.pluralRules = C;
  }
  function et(k, $) {
    return z(() => {
      if (!k)
        return !1;
      const ve = ae($) ? $ : i.value, Ce = Tt(ve), We = O.messageResolver(Ce, k);
      return Ln(We) || Zn(We) || ae(We);
    }, () => [k], "translate exists", (ve) => Reflect.apply(ve.te, ve, [k, $]), cm, (ve) => ut(ve));
  }
  function Ct(k) {
    let $ = null;
    const ve = ru(O, l.value, i.value);
    for (let Ce = 0; Ce < ve.length; Ce++) {
      const We = u.value[ve[Ce]] || {}, lt = O.messageResolver(We, k);
      if (lt != null) {
        $ = lt;
        break;
      }
    }
    return $;
  }
  function bt(k) {
    const $ = Ct(k);
    return $ ?? (t ? t.tm(k) || {} : {});
  }
  function Tt(k) {
    return u.value[k] || {};
  }
  function yt(k, $) {
    if (o) {
      const ve = { [k]: $ };
      for (const Ce in ve)
        pn(ve, Ce) && Co(ve[Ce]);
      $ = ve[k];
    }
    u.value[k] = $, O.messages = u.value;
  }
  function tt(k, $) {
    u.value[k] = u.value[k] || {};
    const ve = { [k]: $ };
    if (o)
      for (const Ce in ve)
        pn(ve, Ce) && Co(ve[Ce]);
    $ = ve[k], ta($, u.value[k]), O.messages = u.value;
  }
  function _t(k) {
    return d.value[k] || {};
  }
  function w(k, $) {
    d.value[k] = $, O.datetimeFormats = d.value, Jl(O, k, $);
  }
  function A(k, $) {
    d.value[k] = xt(d.value[k] || {}, $), O.datetimeFormats = d.value, Jl(O, k, $);
  }
  function M(k) {
    return m.value[k] || {};
  }
  function J(k, $) {
    m.value[k] = $, O.numberFormats = m.value, ti(O, k, $);
  }
  function Ae(k, $) {
    m.value[k] = xt(m.value[k] || {}, $), O.numberFormats = m.value, ti(O, k, $);
  }
  li++, t && Dl && (_e(t.locale, (k) => {
    s && (i.value = k, O.locale = k, lo(O, i.value, l.value));
  }), _e(t.fallbackLocale, (k) => {
    s && (l.value = k, O.fallbackLocale = k, lo(O, i.value, l.value));
  }));
  const ue = {
    id: li,
    locale: ne,
    fallbackLocale: fe,
    get inheritLocale() {
      return s;
    },
    set inheritLocale(k) {
      s = k, k && t && (i.value = t.locale.value, l.value = t.fallbackLocale.value, lo(O, i.value, l.value));
    },
    get availableLocales() {
      return Object.keys(u.value).sort();
    },
    messages: re,
    get modifiers() {
      return b;
    },
    get pluralRules() {
      return C || {};
    },
    get isGlobal() {
      return r;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(k) {
      p = k, O.missingWarn = p;
    },
    get fallbackWarn() {
      return v;
    },
    set fallbackWarn(k) {
      v = k, O.fallbackWarn = v;
    },
    get fallbackRoot() {
      return h;
    },
    set fallbackRoot(k) {
      h = k;
    },
    get fallbackFormat() {
      return g;
    },
    set fallbackFormat(k) {
      g = k, O.fallbackFormat = g;
    },
    get warnHtmlMessage() {
      return x;
    },
    set warnHtmlMessage(k) {
      x = k, O.warnHtmlMessage = k;
    },
    get escapeParameter() {
      return S;
    },
    set escapeParameter(k) {
      S = k, O.escapeParameter = k;
    },
    t: Se,
    getLocaleMessage: Tt,
    setLocaleMessage: yt,
    mergeLocaleMessage: tt,
    getPostTranslationHandler: B,
    setPostTranslationHandler: Q,
    getMissingHandler: j,
    setMissingHandler: q,
    [sm]: pt
  };
  return ue.datetimeFormats = pe, ue.numberFormats = ge, ue.rt = $e, ue.te = et, ue.tm = bt, ue.d = Te, ue.n = me, ue.getDateTimeFormat = _t, ue.setDateTimeFormat = w, ue.mergeDateTimeFormat = A, ue.getNumberFormat = M, ue.setNumberFormat = J, ue.mergeNumberFormat = Ae, ue[fu] = n, ue[ds] = st, ue[fs] = qe, ue[ps] = de, ue;
}
const zs = {
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
function dm({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === Lt ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, He());
}
function hu() {
  return Lt;
}
xt({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    validator: (e) => Et(e) || !isNaN(e)
  }
}, zs);
function fm(e) {
  return dt(e) && !ae(e[0]);
}
function gu(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let i = He();
    e.locale && (s.locale = e.locale), ae(e.format) ? s.key = e.format : Ne(e.format) && (ae(e.format.key) && (s.key = e.format.key), i = Object.keys(e.format).reduce((p, v) => n.includes(v) ? xt(He(), p, { [v]: e.format[v] }) : p, He()));
    const l = r(e.value, s, i);
    let u = [s.key];
    dt(l) ? u = l.map((p, v) => {
      const h = o[p.type], g = h ? h({ [p.type]: p.value, index: v, parts: l }) : [p.value];
      return fm(g) && (g[0].key = `${p.type}-${v}`), g;
    }) : ae(l) && (u = [l]);
    const d = xt(He(), a), m = ae(e.tag) || Ne(e.tag) ? e.tag : hu();
    return Uc(m, d, u);
  };
}
xt({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, zs);
const pm = /* @__PURE__ */ Lr("global-vue-i18n");
function Po(e = {}) {
  const t = mu();
  if (t == null)
    throw Ao(Yr.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Ao(Yr.NOT_INSTALLED);
  const n = mm(t), r = gm(n), o = lm(t), a = hm(e, o);
  if (a === "global")
    return im(r, e, o), r;
  if (a === "parent") {
    let l = vm(n, t, e.__useComponent);
    return l == null && (l = r), l;
  }
  const s = n;
  let i = s.__getInstance(t);
  if (i == null) {
    const l = xt({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), i = um(l), s.__composerExtend && (i[ms] = s.__composerExtend(i)), ym(s, t, i), s.__setInstance(t, i);
  }
  return i;
}
function mm(e) {
  const t = Ve(e.isCE ? pm : e.appContext.app.__VUE_I18N_SYMBOL__);
  if (!t)
    throw Ao(e.isCE ? Yr.NOT_INSTALLED_WITH_PROVIDE : Yr.UNEXPECTED_ERROR);
  return t;
}
function hm(e, t) {
  return ka(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function gm(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function vm(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = bm(t, n);
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      r = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const i = s.__getInstance(a);
      i != null && (r = i.__composer, n && r && !r[fu] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function bm(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function ym(e, t, n) {
  ft(() => {
  }, t), wa(() => {
    const r = n;
    e.__deleteInstance(t);
    const o = r[ms];
    o && (o(), delete r[ms]);
  }, t);
}
xt({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, zs);
am();
zp(Sp);
Bp(Mp);
Vp(ru);
function Bs() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Ir = Bs();
function vu(e) {
  Ir = e;
}
var bo = { exec: () => null };
function Re(e, t = "") {
  let n = typeof e == "string" ? e : e.source, r = { replace: (o, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Vt.caret, "$1"), n = n.replace(o, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
var _m = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), Vt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, wm = /^(?:[ \t]*(?:\n|$))+/, km = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Tm = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, No = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Sm = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Vs = /(?:[*+-]|\d{1,9}[.)])/, bu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, yu = Re(bu).replace(/bull/g, Vs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Em = Re(bu).replace(/bull/g, Vs).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), js = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Am = /^[^\n]+/, Us = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Cm = Re(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Us).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Om = Re(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Vs).getRegex(), Ea = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Hs = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Lm = Re("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Hs).replace("tag", Ea).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), _u = Re(js).replace("hr", No).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ea).getRegex(), Im = Re(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", _u).getRegex(), Ws = { blockquote: Im, code: km, def: Cm, fences: Tm, heading: Sm, hr: No, html: Lm, lheading: yu, list: Om, newline: wm, paragraph: _u, table: bo, text: Am }, ci = Re("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", No).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ea).getRegex(), xm = { ...Ws, lheading: Em, table: ci, paragraph: Re(js).replace("hr", No).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ci).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ea).getRegex() }, Rm = { ...Ws, html: Re(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Hs).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: bo, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Re(js).replace("hr", No).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", yu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Pm = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Nm = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, wu = /^( {2,}|\\)\n(?!\s*$)/, $m = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, Aa = /[\p{P}\p{S}]/u, Gs = /[\s\p{P}\p{S}]/u, ku = /[^\s\p{P}\p{S}]/u, Mm = Re(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Gs).getRegex(), Tu = /(?!~)[\p{P}\p{S}]/u, Dm = /(?!~)[\s\p{P}\p{S}]/u, Fm = /(?:[^\s\p{P}\p{S}]|~)/u, zm = Re(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", _m ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Su = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, Bm = Re(Su, "u").replace(/punct/g, Aa).getRegex(), Vm = Re(Su, "u").replace(/punct/g, Tu).getRegex(), Eu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", jm = Re(Eu, "gu").replace(/notPunctSpace/g, ku).replace(/punctSpace/g, Gs).replace(/punct/g, Aa).getRegex(), Um = Re(Eu, "gu").replace(/notPunctSpace/g, Fm).replace(/punctSpace/g, Dm).replace(/punct/g, Tu).getRegex(), Hm = Re("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ku).replace(/punctSpace/g, Gs).replace(/punct/g, Aa).getRegex(), Wm = Re(/\\(punct)/, "gu").replace(/punct/g, Aa).getRegex(), Gm = Re(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Km = Re(Hs).replace("(?:-->|$)", "-->").getRegex(), qm = Re("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Km).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ca = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, Ym = Re(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", ca).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Au = Re(/^!?\[(label)\]\[(ref)\]/).replace("label", ca).replace("ref", Us).getRegex(), Cu = Re(/^!?\[(ref)\](?:\[\])?/).replace("ref", Us).getRegex(), Zm = Re("reflink|nolink(?!\\()", "g").replace("reflink", Au).replace("nolink", Cu).getRegex(), ui = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Ks = { _backpedal: bo, anyPunctuation: Wm, autolink: Gm, blockSkip: zm, br: wu, code: Nm, del: bo, emStrongLDelim: Bm, emStrongRDelimAst: jm, emStrongRDelimUnd: Hm, escape: Pm, link: Ym, nolink: Cu, punctuation: Mm, reflink: Au, reflinkSearch: Zm, tag: qm, text: $m, url: bo }, Xm = { ...Ks, link: Re(/^!?\[(label)\]\((.*?)\)/).replace("label", ca).getRegex(), reflink: Re(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ca).getRegex() }, hs = { ...Ks, emStrongRDelimAst: Um, emStrongLDelim: Vm, url: Re(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", ui).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Re(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", ui).getRegex() }, Qm = { ...hs, br: Re(wu).replace("{2,}", "*").getRegex(), text: Re(hs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Wo = { normal: Ws, gfm: xm, pedantic: Rm }, io = { normal: Ks, gfm: hs, breaks: Qm, pedantic: Xm }, Jm = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, di = (e) => Jm[e];
function jn(e, t) {
  if (t) {
    if (Vt.escapeTest.test(e)) return e.replace(Vt.escapeReplace, di);
  } else if (Vt.escapeTestNoEncode.test(e)) return e.replace(Vt.escapeReplaceNoEncode, di);
  return e;
}
function fi(e) {
  try {
    e = encodeURI(e).replace(Vt.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function pi(e, t) {
  let n = e.replace(Vt.findPipe, (a, s, i) => {
    let l = !1, u = s;
    for (; --u >= 0 && i[u] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), r = n.split(Vt.splitPipe), o = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r.at(-1)?.trim() && r.pop(), t) if (r.length > t) r.splice(t);
  else for (; r.length < t; ) r.push("");
  for (; o < r.length; o++) r[o] = r[o].trim().replace(Vt.slashPipe, "|");
  return r;
}
function co(e, t, n) {
  let r = e.length;
  if (r === 0) return "";
  let o = 0;
  for (; o < r && e.charAt(r - o - 1) === t; )
    o++;
  return e.slice(0, r - o);
}
function eh(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
  else if (e[r] === t[0]) n++;
  else if (e[r] === t[1] && (n--, n < 0)) return r;
  return n > 0 ? -2 : -1;
}
function mi(e, t, n, r, o) {
  let a = t.href, s = t.title || null, i = e[1].replace(o.other.outputLinkReplace, "$1");
  r.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: n, href: a, title: s, text: i, tokens: r.inlineTokens(i) };
  return r.state.inLink = !1, l;
}
function th(e, t, n) {
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
var ua = class {
  constructor(e) {
    Ue(this, "options");
    Ue(this, "rules");
    Ue(this, "lexer");
    this.options = e || Ir;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : co(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = th(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = co(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: co(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = co(t[0], `
`).split(`
`), r = "", o = "", a = [];
      for (; n.length > 0; ) {
        let s = !1, i = [], l;
        for (l = 0; l < n.length; l++) if (this.rules.other.blockquoteStart.test(n[l])) i.push(n[l]), s = !0;
        else if (!s) i.push(n[l]);
        else break;
        n = n.slice(l);
        let u = i.join(`
`), d = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${u}` : u, o = o ? `${o}
${d}` : d;
        let m = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, a, !0), this.lexer.state.top = m, n.length === 0) break;
        let p = a.at(-1);
        if (p?.type === "code") break;
        if (p?.type === "blockquote") {
          let v = p, h = v.raw + `
` + n.join(`
`), g = this.blockquote(h);
          a[a.length - 1] = g, r = r.substring(0, r.length - v.raw.length) + g.raw, o = o.substring(0, o.length - v.text.length) + g.text;
          break;
        } else if (p?.type === "list") {
          let v = p, h = v.raw + `
` + n.join(`
`), g = this.list(h);
          a[a.length - 1] = g, r = r.substring(0, r.length - p.raw.length) + g.raw, o = o.substring(0, o.length - v.raw.length) + g.raw, n = h.substring(a.at(-1).raw.length).split(`
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
        let l = !1, u = "", d = "";
        if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t[0], e = e.substring(u.length);
        let m = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (g) => " ".repeat(3 * g.length)), p = e.split(`
`, 1)[0], v = !m.trim(), h = 0;
        if (this.options.pedantic ? (h = 2, d = m.trimStart()) : v ? h = t[1].length + 1 : (h = t[2].search(this.rules.other.nonSpaceChar), h = h > 4 ? 1 : h, d = m.slice(h), h += t[1].length), v && this.rules.other.blankLine.test(p) && (u += p + `
`, e = e.substring(p.length + 1), l = !0), !l) {
          let g = this.rules.other.nextBulletRegex(h), T = this.rules.other.hrRegex(h), f = this.rules.other.fencesBeginRegex(h), E = this.rules.other.headingBeginRegex(h), x = this.rules.other.htmlBeginRegex(h);
          for (; e; ) {
            let S = e.split(`
`, 1)[0], b;
            if (p = S, this.options.pedantic ? (p = p.replace(this.rules.other.listReplaceNesting, "  "), b = p) : b = p.replace(this.rules.other.tabCharGlobal, "    "), f.test(p) || E.test(p) || x.test(p) || g.test(p) || T.test(p)) break;
            if (b.search(this.rules.other.nonSpaceChar) >= h || !p.trim()) d += `
` + b.slice(h);
            else {
              if (v || m.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || f.test(m) || E.test(m) || T.test(m)) break;
              d += `
` + p;
            }
            !v && !p.trim() && (v = !0), u += S + `
`, e = e.substring(S.length + 1), m = b.slice(h);
          }
        }
        o.loose || (s ? o.loose = !0 : this.rules.other.doubleBlankLine.test(u) && (s = !0)), o.items.push({ type: "list_item", raw: u, task: !!this.options.gfm && this.rules.other.listIsTask.test(d), loose: !1, text: d, tokens: [] }), o.raw += u;
      }
      let i = o.items.at(-1);
      if (i) i.raw = i.raw.trimEnd(), i.text = i.text.trimEnd();
      else return;
      o.raw = o.raw.trimEnd();
      for (let l of o.items) {
        if (this.lexer.state.top = !1, l.tokens = this.lexer.blockTokens(l.text, []), l.task) {
          if (l.text = l.text.replace(this.rules.other.listReplaceTask, ""), l.tokens[0]?.type === "text" || l.tokens[0]?.type === "paragraph") {
            l.tokens[0].raw = l.tokens[0].raw.replace(this.rules.other.listReplaceTask, ""), l.tokens[0].text = l.tokens[0].text.replace(this.rules.other.listReplaceTask, "");
            for (let d = this.lexer.inlineQueue.length - 1; d >= 0; d--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[d].src)) {
              this.lexer.inlineQueue[d].src = this.lexer.inlineQueue[d].src.replace(this.rules.other.listReplaceTask, "");
              break;
            }
          }
          let u = this.rules.other.listTaskCheckbox.exec(l.raw);
          if (u) {
            let d = { type: "checkbox", raw: u[0] + " ", checked: u[0] !== "[ ]" };
            l.checked = d.checked, o.loose ? l.tokens[0] && ["paragraph", "text"].includes(l.tokens[0].type) && "tokens" in l.tokens[0] && l.tokens[0].tokens ? (l.tokens[0].raw = d.raw + l.tokens[0].raw, l.tokens[0].text = d.raw + l.tokens[0].text, l.tokens[0].tokens.unshift(d)) : l.tokens.unshift({ type: "paragraph", raw: d.raw, text: d.raw, tokens: [d] }) : l.tokens.unshift(d);
          }
        }
        if (!o.loose) {
          let u = l.tokens.filter((m) => m.type === "space"), d = u.length > 0 && u.some((m) => this.rules.other.anyLine.test(m.raw));
          o.loose = d;
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
    let n = pi(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let s of r) this.rules.other.tableAlignRight.test(s) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(s) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(s) ? a.align.push("left") : a.align.push(null);
      for (let s = 0; s < n.length; s++) a.header.push({ text: n[s], tokens: this.lexer.inline(n[s]), header: !0, align: a.align[s] });
      for (let s of o) a.rows.push(pi(s, a.header.length).map((i, l) => ({ text: i, tokens: this.lexer.inline(i), header: !1, align: a.align[l] })));
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
        let a = co(n.slice(0, -1), "\\");
        if ((n.length - a.length) % 2 === 0) return;
      } else {
        let a = eh(t[2], "()");
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
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), mi(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
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
      return mi(n, o, n[0], this.lexer, this.rules);
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
        let d = [...r[0]][0].length, m = e.slice(0, o + r.index + d + s);
        if (Math.min(o, s) % 2) {
          let v = m.slice(1, -1);
          return { type: "em", raw: m, text: v, tokens: this.lexer.inlineTokens(v) };
        }
        let p = m.slice(2, -2);
        return { type: "strong", raw: m, text: p, tokens: this.lexer.inlineTokens(p) };
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
}, dn = class gs {
  constructor(t) {
    Ue(this, "tokens");
    Ue(this, "options");
    Ue(this, "state");
    Ue(this, "inlineQueue");
    Ue(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Ir, this.options.tokenizer = this.options.tokenizer || new ua(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let n = { other: Vt, block: Wo.normal, inline: io.normal };
    this.options.pedantic ? (n.block = Wo.pedantic, n.inline = io.pedantic) : this.options.gfm && (n.block = Wo.gfm, this.options.breaks ? n.inline = io.breaks : n.inline = io.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: Wo, inline: io };
  }
  static lex(t, n) {
    return new gs(n).lex(t);
  }
  static lexInline(t, n) {
    return new gs(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(Vt.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      let r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    for (this.options.pedantic && (t = t.replace(Vt.tabCharGlobal, "    ").replace(Vt.spaceLine, "")); t; ) {
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
      if (this.options.extensions?.inline?.some((d) => (l = d.call({ lexer: this }, t, n)) ? (t = t.substring(l.raw.length), n.push(l), !0) : !1)) continue;
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
        let d = n.at(-1);
        l.type === "text" && d?.type === "text" ? (d.raw += l.raw, d.text += l.text) : n.push(l);
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
        let d = 1 / 0, m = t.slice(1), p;
        this.options.extensions.startInline.forEach((v) => {
          p = v.call({ lexer: this }, m), typeof p == "number" && p >= 0 && (d = Math.min(d, p));
        }), d < 1 / 0 && d >= 0 && (u = t.substring(0, d + 1));
      }
      if (l = this.tokenizer.inlineText(u)) {
        t = t.substring(l.raw.length), l.raw.slice(-1) !== "_" && (i = l.raw.slice(-1)), s = !0;
        let d = n.at(-1);
        d?.type === "text" ? (d.raw += l.raw, d.text += l.text) : n.push(l);
        continue;
      }
      if (t) {
        let d = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(d);
          break;
        } else throw new Error(d);
      }
    }
    return n;
  }
}, da = class {
  constructor(t) {
    Ue(this, "options");
    Ue(this, "parser");
    this.options = t || Ir;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    let o = (n || "").match(Vt.notSpaceStart)?.[0], a = t.replace(Vt.endingNewline, "") + `
`;
    return o ? '<pre><code class="language-' + jn(o) + '">' + (r ? a : jn(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : jn(a, !0)) + `</code></pre>
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
    return `<code>${jn(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    let o = this.parser.parseInline(r), a = fi(t);
    if (a === null) return o;
    t = a;
    let s = '<a href="' + t + '"';
    return n && (s += ' title="' + jn(n) + '"'), s += ">" + o + "</a>", s;
  }
  image({ href: t, title: n, text: r, tokens: o }) {
    o && (r = this.parser.parseInline(o, this.parser.textRenderer));
    let a = fi(t);
    if (a === null) return jn(r);
    t = a;
    let s = `<img src="${t}" alt="${r}"`;
    return n && (s += ` title="${jn(n)}"`), s += ">", s;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : jn(t.text);
  }
}, qs = class {
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
}, fn = class vs {
  constructor(t) {
    Ue(this, "options");
    Ue(this, "renderer");
    Ue(this, "textRenderer");
    this.options = t || Ir, this.options.renderer = this.options.renderer || new da(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new qs();
  }
  static parse(t, n) {
    return new vs(n).parse(t);
  }
  static parseInline(t, n) {
    return new vs(n).parseInline(t);
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
}, Jo, go = (Jo = class {
  constructor(e) {
    Ue(this, "options");
    Ue(this, "block");
    this.options = e || Ir;
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
    return this.block ? dn.lex : dn.lexInline;
  }
  provideParser() {
    return this.block ? fn.parse : fn.parseInline;
  }
}, Ue(Jo, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Ue(Jo, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Jo), nh = class {
  constructor(...t) {
    Ue(this, "defaults", Bs());
    Ue(this, "options", this.setOptions);
    Ue(this, "parse", this.parseMarkdown(!0));
    Ue(this, "parseInline", this.parseMarkdown(!1));
    Ue(this, "Parser", fn);
    Ue(this, "Renderer", da);
    Ue(this, "TextRenderer", qs);
    Ue(this, "Lexer", dn);
    Ue(this, "Tokenizer", ua);
    Ue(this, "Hooks", go);
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
        let a = this.defaults.renderer || new da(this.defaults);
        for (let s in r.renderer) {
          if (!(s in a)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let i = s, l = r.renderer[i], u = a[i];
          a[i] = (...d) => {
            let m = l.apply(a, d);
            return m === !1 && (m = u.apply(a, d)), m || "";
          };
        }
        o.renderer = a;
      }
      if (r.tokenizer) {
        let a = this.defaults.tokenizer || new ua(this.defaults);
        for (let s in r.tokenizer) {
          if (!(s in a)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let i = s, l = r.tokenizer[i], u = a[i];
          a[i] = (...d) => {
            let m = l.apply(a, d);
            return m === !1 && (m = u.apply(a, d)), m;
          };
        }
        o.tokenizer = a;
      }
      if (r.hooks) {
        let a = this.defaults.hooks || new go();
        for (let s in r.hooks) {
          if (!(s in a)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let i = s, l = r.hooks[i], u = a[i];
          go.passThroughHooks.has(s) ? a[i] = (d) => {
            if (this.defaults.async && go.passThroughHooksRespectAsync.has(s)) return (async () => {
              let p = await l.call(a, d);
              return u.call(a, p);
            })();
            let m = l.call(a, d);
            return u.call(a, m);
          } : a[i] = (...d) => {
            if (this.defaults.async) return (async () => {
              let p = await l.apply(a, d);
              return p === !1 && (p = await u.apply(a, d)), p;
            })();
            let m = l.apply(a, d);
            return m === !1 && (m = u.apply(a, d)), m;
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
    return dn.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return fn.parse(t, n ?? this.defaults);
  }
  parseMarkdown(t) {
    return (n, r) => {
      let o = { ...r }, a = { ...this.defaults, ...o }, s = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && o.async === !1) return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return s(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return s(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = t), a.async) return (async () => {
        let i = a.hooks ? await a.hooks.preprocess(n) : n, l = await (a.hooks ? await a.hooks.provideLexer() : t ? dn.lex : dn.lexInline)(i, a), u = a.hooks ? await a.hooks.processAllTokens(l) : l;
        a.walkTokens && await Promise.all(this.walkTokens(u, a.walkTokens));
        let d = await (a.hooks ? await a.hooks.provideParser() : t ? fn.parse : fn.parseInline)(u, a);
        return a.hooks ? await a.hooks.postprocess(d) : d;
      })().catch(s);
      try {
        a.hooks && (n = a.hooks.preprocess(n));
        let i = (a.hooks ? a.hooks.provideLexer() : t ? dn.lex : dn.lexInline)(n, a);
        a.hooks && (i = a.hooks.processAllTokens(i)), a.walkTokens && this.walkTokens(i, a.walkTokens);
        let l = (a.hooks ? a.hooks.provideParser() : t ? fn.parse : fn.parseInline)(i, a);
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
        let o = "<p>An error occurred:</p><pre>" + jn(r.message + "", !0) + "</pre>";
        return n ? Promise.resolve(o) : o;
      }
      if (n) return Promise.reject(r);
      throw r;
    };
  }
}, Ar = new nh();
function Be(e, t) {
  return Ar.parse(e, t);
}
Be.options = Be.setOptions = function(e) {
  return Ar.setOptions(e), Be.defaults = Ar.defaults, vu(Be.defaults), Be;
};
Be.getDefaults = Bs;
Be.defaults = Ir;
Be.use = function(...e) {
  return Ar.use(...e), Be.defaults = Ar.defaults, vu(Be.defaults), Be;
};
Be.walkTokens = function(e, t) {
  return Ar.walkTokens(e, t);
};
Be.parseInline = Ar.parseInline;
Be.Parser = fn;
Be.parser = fn.parse;
Be.Renderer = da;
Be.TextRenderer = qs;
Be.Lexer = dn;
Be.lexer = dn.lex;
Be.Tokenizer = ua;
Be.Hooks = go;
Be.parse = Be;
Be.options;
Be.setOptions;
Be.use;
Be.walkTokens;
Be.parseInline;
fn.parse;
dn.lex;
const rh = ["disabled"], oh = {
  key: 0,
  class: "custom-button__loading"
}, ah = /* @__PURE__ */ oe({
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
    return (n, r) => (P(), K("button", {
      class: Z([
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
      e.loading ? (P(), K("div", oh, r[1] || (r[1] = [
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
      ]))) : ee("v-if", !0),
      ye(n.$slots, "default", {}, void 0, !0)
    ], 10, rh));
  }
}), Ys = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Un = /* @__PURE__ */ Ys(ah, [["__scopeId", "data-v-9497085f"]]), Ou = Symbol(), na = "el", sh = "is-", kr = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Lu = Symbol("namespaceContextKey"), Zs = (e) => {
  const t = e || (jt() ? Ve(Lu, W(na)) : W(na));
  return I(() => c(t) || na);
}, gt = (e, t) => {
  const n = Zs(t);
  return {
    namespace: n,
    b: (g = "") => kr(n.value, e, g, "", ""),
    e: (g) => g ? kr(n.value, e, "", g, "") : "",
    m: (g) => g ? kr(n.value, e, "", "", g) : "",
    be: (g, T) => g && T ? kr(n.value, e, g, T, "") : "",
    em: (g, T) => g && T ? kr(n.value, e, "", g, T) : "",
    bm: (g, T) => g && T ? kr(n.value, e, g, "", T) : "",
    bem: (g, T, f) => g && T && f ? kr(n.value, e, g, T, f) : "",
    is: (g, ...T) => {
      const f = T.length >= 1 ? T[0] : !0;
      return g && f ? `${sh}${g}` : "";
    },
    cssVar: (g) => {
      const T = {};
      for (const f in g)
        g[f] && (T[`--${n.value}-${f}`] = g[f]);
      return T;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const T = {};
      for (const f in g)
        g[f] && (T[`--${n.value}-${e}-${f}`] = g[f]);
      return T;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Oo = () => {
}, lh = Object.prototype.hasOwnProperty, hi = (e, t) => lh.call(e, t), An = Array.isArray, at = (e) => typeof e == "function", Dt = (e) => typeof e == "string", Xt = (e) => e !== null && typeof e == "object", gi = (e) => (Xt(e) || at(e)) && at(e.then) && at(e.catch), ih = Object.prototype.toString, ch = (e) => ih.call(e), uh = (e) => ch(e) === "[object Object]";
var Iu = typeof global == "object" && global && global.Object === Object && global, dh = typeof self == "object" && self && self.Object === Object && self, Mn = Iu || dh || Function("return this")(), Pn = Mn.Symbol, xu = Object.prototype, fh = xu.hasOwnProperty, ph = xu.toString, uo = Pn ? Pn.toStringTag : void 0;
function mh(e) {
  var t = fh.call(e, uo), n = e[uo];
  try {
    e[uo] = void 0;
    var r = !0;
  } catch {
  }
  var o = ph.call(e);
  return r && (t ? e[uo] = n : delete e[uo]), o;
}
var hh = Object.prototype, gh = hh.toString;
function vh(e) {
  return gh.call(e);
}
var bh = "[object Null]", yh = "[object Undefined]", vi = Pn ? Pn.toStringTag : void 0;
function ao(e) {
  return e == null ? e === void 0 ? yh : bh : vi && vi in Object(e) ? mh(e) : vh(e);
}
function Zr(e) {
  return e != null && typeof e == "object";
}
var _h = "[object Symbol]";
function Ca(e) {
  return typeof e == "symbol" || Zr(e) && ao(e) == _h;
}
function wh(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var vn = Array.isArray, bi = Pn ? Pn.prototype : void 0, yi = bi ? bi.toString : void 0;
function Ru(e) {
  if (typeof e == "string")
    return e;
  if (vn(e))
    return wh(e, Ru) + "";
  if (Ca(e))
    return yi ? yi.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var kh = /\s/;
function Th(e) {
  for (var t = e.length; t-- && kh.test(e.charAt(t)); )
    ;
  return t;
}
var Sh = /^\s+/;
function Eh(e) {
  return e && e.slice(0, Th(e) + 1).replace(Sh, "");
}
function hr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var _i = NaN, Ah = /^[-+]0x[0-9a-f]+$/i, Ch = /^0b[01]+$/i, Oh = /^0o[0-7]+$/i, Lh = parseInt;
function wi(e) {
  if (typeof e == "number")
    return e;
  if (Ca(e))
    return _i;
  if (hr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = hr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Eh(e);
  var n = Ch.test(e);
  return n || Oh.test(e) ? Lh(e.slice(2), n ? 2 : 8) : Ah.test(e) ? _i : +e;
}
function Pu(e) {
  return e;
}
var Ih = "[object AsyncFunction]", xh = "[object Function]", Rh = "[object GeneratorFunction]", Ph = "[object Proxy]";
function Nu(e) {
  if (!hr(e))
    return !1;
  var t = ao(e);
  return t == xh || t == Rh || t == Ih || t == Ph;
}
var Ga = Mn["__core-js_shared__"], ki = function() {
  var e = /[^.]+$/.exec(Ga && Ga.keys && Ga.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Nh(e) {
  return !!ki && ki in e;
}
var $h = Function.prototype, Mh = $h.toString;
function xr(e) {
  if (e != null) {
    try {
      return Mh.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Dh = /[\\^$.*+?()[\]{}|]/g, Fh = /^\[object .+?Constructor\]$/, zh = Function.prototype, Bh = Object.prototype, Vh = zh.toString, jh = Bh.hasOwnProperty, Uh = RegExp(
  "^" + Vh.call(jh).replace(Dh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Hh(e) {
  if (!hr(e) || Nh(e))
    return !1;
  var t = Nu(e) ? Uh : Fh;
  return t.test(xr(e));
}
function Wh(e, t) {
  return e?.[t];
}
function Rr(e, t) {
  var n = Wh(e, t);
  return Hh(n) ? n : void 0;
}
var bs = Rr(Mn, "WeakMap");
function Gh(e, t, n) {
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
var Kh = 800, qh = 16, Yh = Date.now;
function Zh(e) {
  var t = 0, n = 0;
  return function() {
    var r = Yh(), o = qh - (r - n);
    if (n = r, o > 0) {
      if (++t >= Kh)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Xh(e) {
  return function() {
    return e;
  };
}
var fa = function() {
  try {
    var e = Rr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Qh = fa ? function(e, t) {
  return fa(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Xh(t),
    writable: !0
  });
} : Pu, Jh = Zh(Qh);
function eg(e, t, n, r) {
  e.length;
  for (var o = n + 1; o--; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
var tg = 9007199254740991, ng = /^(?:0|[1-9]\d*)$/;
function Xs(e, t) {
  var n = typeof e;
  return t = t ?? tg, !!t && (n == "number" || n != "symbol" && ng.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function rg(e, t, n) {
  t == "__proto__" && fa ? fa(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Qs(e, t) {
  return e === t || e !== e && t !== t;
}
var og = Object.prototype, ag = og.hasOwnProperty;
function sg(e, t, n) {
  var r = e[t];
  (!(ag.call(e, t) && Qs(r, n)) || n === void 0 && !(t in e)) && rg(e, t, n);
}
var Ti = Math.max;
function lg(e, t, n) {
  return t = Ti(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Ti(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Gh(e, this, i);
  };
}
var ig = 9007199254740991;
function Js(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ig;
}
function cg(e) {
  return e != null && Js(e.length) && !Nu(e);
}
var ug = Object.prototype;
function dg(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || ug;
  return e === n;
}
function fg(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var pg = "[object Arguments]";
function Si(e) {
  return Zr(e) && ao(e) == pg;
}
var $u = Object.prototype, mg = $u.hasOwnProperty, hg = $u.propertyIsEnumerable, el = Si(/* @__PURE__ */ function() {
  return arguments;
}()) ? Si : function(e) {
  return Zr(e) && mg.call(e, "callee") && !hg.call(e, "callee");
};
function gg() {
  return !1;
}
var Mu = typeof exports == "object" && exports && !exports.nodeType && exports, Ei = Mu && typeof module == "object" && module && !module.nodeType && module, vg = Ei && Ei.exports === Mu, Ai = vg ? Mn.Buffer : void 0, bg = Ai ? Ai.isBuffer : void 0, ys = bg || gg, yg = "[object Arguments]", _g = "[object Array]", wg = "[object Boolean]", kg = "[object Date]", Tg = "[object Error]", Sg = "[object Function]", Eg = "[object Map]", Ag = "[object Number]", Cg = "[object Object]", Og = "[object RegExp]", Lg = "[object Set]", Ig = "[object String]", xg = "[object WeakMap]", Rg = "[object ArrayBuffer]", Pg = "[object DataView]", Ng = "[object Float32Array]", $g = "[object Float64Array]", Mg = "[object Int8Array]", Dg = "[object Int16Array]", Fg = "[object Int32Array]", zg = "[object Uint8Array]", Bg = "[object Uint8ClampedArray]", Vg = "[object Uint16Array]", jg = "[object Uint32Array]", Qe = {};
Qe[Ng] = Qe[$g] = Qe[Mg] = Qe[Dg] = Qe[Fg] = Qe[zg] = Qe[Bg] = Qe[Vg] = Qe[jg] = !0;
Qe[yg] = Qe[_g] = Qe[Rg] = Qe[wg] = Qe[Pg] = Qe[kg] = Qe[Tg] = Qe[Sg] = Qe[Eg] = Qe[Ag] = Qe[Cg] = Qe[Og] = Qe[Lg] = Qe[Ig] = Qe[xg] = !1;
function Ug(e) {
  return Zr(e) && Js(e.length) && !!Qe[ao(e)];
}
function Hg(e) {
  return function(t) {
    return e(t);
  };
}
var Du = typeof exports == "object" && exports && !exports.nodeType && exports, yo = Du && typeof module == "object" && module && !module.nodeType && module, Wg = yo && yo.exports === Du, Ka = Wg && Iu.process, Ci = function() {
  try {
    var e = yo && yo.require && yo.require("util").types;
    return e || Ka && Ka.binding && Ka.binding("util");
  } catch {
  }
}(), Oi = Ci && Ci.isTypedArray, Fu = Oi ? Hg(Oi) : Ug, Gg = Object.prototype, Kg = Gg.hasOwnProperty;
function qg(e, t) {
  var n = vn(e), r = !n && el(e), o = !n && !r && ys(e), a = !n && !r && !o && Fu(e), s = n || r || o || a, i = s ? fg(e.length, String) : [], l = i.length;
  for (var u in e)
    Kg.call(e, u) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Xs(u, l))) && i.push(u);
  return i;
}
function Yg(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Zg = Yg(Object.keys, Object), Xg = Object.prototype, Qg = Xg.hasOwnProperty;
function Jg(e) {
  if (!dg(e))
    return Zg(e);
  var t = [];
  for (var n in Object(e))
    Qg.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function zu(e) {
  return cg(e) ? qg(e) : Jg(e);
}
var ev = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tv = /^\w*$/;
function tl(e, t) {
  if (vn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ca(e) ? !0 : tv.test(e) || !ev.test(e) || t != null && e in Object(t);
}
var Lo = Rr(Object, "create");
function nv() {
  this.__data__ = Lo ? Lo(null) : {}, this.size = 0;
}
function rv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ov = "__lodash_hash_undefined__", av = Object.prototype, sv = av.hasOwnProperty;
function lv(e) {
  var t = this.__data__;
  if (Lo) {
    var n = t[e];
    return n === ov ? void 0 : n;
  }
  return sv.call(t, e) ? t[e] : void 0;
}
var iv = Object.prototype, cv = iv.hasOwnProperty;
function uv(e) {
  var t = this.__data__;
  return Lo ? t[e] !== void 0 : cv.call(t, e);
}
var dv = "__lodash_hash_undefined__";
function fv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Lo && t === void 0 ? dv : t, this;
}
function Cr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Cr.prototype.clear = nv;
Cr.prototype.delete = rv;
Cr.prototype.get = lv;
Cr.prototype.has = uv;
Cr.prototype.set = fv;
function pv() {
  this.__data__ = [], this.size = 0;
}
function Oa(e, t) {
  for (var n = e.length; n--; )
    if (Qs(e[n][0], t))
      return n;
  return -1;
}
var mv = Array.prototype, hv = mv.splice;
function gv(e) {
  var t = this.__data__, n = Oa(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : hv.call(t, n, 1), --this.size, !0;
}
function vv(e) {
  var t = this.__data__, n = Oa(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function bv(e) {
  return Oa(this.__data__, e) > -1;
}
function yv(e, t) {
  var n = this.__data__, r = Oa(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function rr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
rr.prototype.clear = pv;
rr.prototype.delete = gv;
rr.prototype.get = vv;
rr.prototype.has = bv;
rr.prototype.set = yv;
var Io = Rr(Mn, "Map");
function _v() {
  this.size = 0, this.__data__ = {
    hash: new Cr(),
    map: new (Io || rr)(),
    string: new Cr()
  };
}
function wv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function La(e, t) {
  var n = e.__data__;
  return wv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function kv(e) {
  var t = La(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Tv(e) {
  return La(this, e).get(e);
}
function Sv(e) {
  return La(this, e).has(e);
}
function Ev(e, t) {
  var n = La(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function or(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
or.prototype.clear = _v;
or.prototype.delete = kv;
or.prototype.get = Tv;
or.prototype.has = Sv;
or.prototype.set = Ev;
var Av = "Expected a function";
function nl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Av);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (nl.Cache || or)(), n;
}
nl.Cache = or;
var Cv = 500;
function Ov(e) {
  var t = nl(e, function(r) {
    return n.size === Cv && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Lv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Iv = /\\(\\)?/g, xv = Ov(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Lv, function(n, r, o, a) {
    t.push(o ? a.replace(Iv, "$1") : r || n);
  }), t;
});
function Rv(e) {
  return e == null ? "" : Ru(e);
}
function Ia(e, t) {
  return vn(e) ? e : tl(e, t) ? [e] : xv(Rv(e));
}
function $o(e) {
  if (typeof e == "string" || Ca(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function rl(e, t) {
  t = Ia(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[$o(t[n++])];
  return n && n == r ? e : void 0;
}
function fr(e, t, n) {
  var r = e == null ? void 0 : rl(e, t);
  return r === void 0 ? n : r;
}
function Bu(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Li = Pn ? Pn.isConcatSpreadable : void 0;
function Pv(e) {
  return vn(e) || el(e) || !!(Li && e && e[Li]);
}
function Nv(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Pv), o || (o = []); ++a < s; ) {
    var i = e[a];
    n(i) ? Bu(o, i) : o[o.length] = i;
  }
  return o;
}
function $v(e) {
  var t = e == null ? 0 : e.length;
  return t ? Nv(e) : [];
}
function Mv(e) {
  return Jh(lg(e, void 0, $v), e + "");
}
function dr() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return vn(e) ? e : [e];
}
function Dv() {
  this.__data__ = new rr(), this.size = 0;
}
function Fv(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function zv(e) {
  return this.__data__.get(e);
}
function Bv(e) {
  return this.__data__.has(e);
}
var Vv = 200;
function jv(e, t) {
  var n = this.__data__;
  if (n instanceof rr) {
    var r = n.__data__;
    if (!Io || r.length < Vv - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new or(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Xn(e) {
  var t = this.__data__ = new rr(e);
  this.size = t.size;
}
Xn.prototype.clear = Dv;
Xn.prototype.delete = Fv;
Xn.prototype.get = zv;
Xn.prototype.has = Bv;
Xn.prototype.set = jv;
function Uv(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function Hv() {
  return [];
}
var Wv = Object.prototype, Gv = Wv.propertyIsEnumerable, Ii = Object.getOwnPropertySymbols, Kv = Ii ? function(e) {
  return e == null ? [] : (e = Object(e), Uv(Ii(e), function(t) {
    return Gv.call(e, t);
  }));
} : Hv;
function qv(e, t, n) {
  var r = t(e);
  return vn(e) ? r : Bu(r, n(e));
}
function xi(e) {
  return qv(e, zu, Kv);
}
var _s = Rr(Mn, "DataView"), ws = Rr(Mn, "Promise"), ks = Rr(Mn, "Set"), Ri = "[object Map]", Yv = "[object Object]", Pi = "[object Promise]", Ni = "[object Set]", $i = "[object WeakMap]", Mi = "[object DataView]", Zv = xr(_s), Xv = xr(Io), Qv = xr(ws), Jv = xr(ks), e0 = xr(bs), ur = ao;
(_s && ur(new _s(new ArrayBuffer(1))) != Mi || Io && ur(new Io()) != Ri || ws && ur(ws.resolve()) != Pi || ks && ur(new ks()) != Ni || bs && ur(new bs()) != $i) && (ur = function(e) {
  var t = ao(e), n = t == Yv ? e.constructor : void 0, r = n ? xr(n) : "";
  if (r)
    switch (r) {
      case Zv:
        return Mi;
      case Xv:
        return Ri;
      case Qv:
        return Pi;
      case Jv:
        return Ni;
      case e0:
        return $i;
    }
  return t;
});
var Di = Mn.Uint8Array, t0 = "__lodash_hash_undefined__";
function n0(e) {
  return this.__data__.set(e, t0), this;
}
function r0(e) {
  return this.__data__.has(e);
}
function pa(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new or(); ++t < n; )
    this.add(e[t]);
}
pa.prototype.add = pa.prototype.push = n0;
pa.prototype.has = r0;
function o0(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function a0(e, t) {
  return e.has(t);
}
var s0 = 1, l0 = 2;
function Vu(e, t, n, r, o, a) {
  var s = n & s0, i = e.length, l = t.length;
  if (i != l && !(s && l > i))
    return !1;
  var u = a.get(e), d = a.get(t);
  if (u && d)
    return u == t && d == e;
  var m = -1, p = !0, v = n & l0 ? new pa() : void 0;
  for (a.set(e, t), a.set(t, e); ++m < i; ) {
    var h = e[m], g = t[m];
    if (r)
      var T = s ? r(g, h, m, t, e, a) : r(h, g, m, e, t, a);
    if (T !== void 0) {
      if (T)
        continue;
      p = !1;
      break;
    }
    if (v) {
      if (!o0(t, function(f, E) {
        if (!a0(v, E) && (h === f || o(h, f, n, r, a)))
          return v.push(E);
      })) {
        p = !1;
        break;
      }
    } else if (!(h === g || o(h, g, n, r, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
function i0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function c0(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var u0 = 1, d0 = 2, f0 = "[object Boolean]", p0 = "[object Date]", m0 = "[object Error]", h0 = "[object Map]", g0 = "[object Number]", v0 = "[object RegExp]", b0 = "[object Set]", y0 = "[object String]", _0 = "[object Symbol]", w0 = "[object ArrayBuffer]", k0 = "[object DataView]", Fi = Pn ? Pn.prototype : void 0, qa = Fi ? Fi.valueOf : void 0;
function T0(e, t, n, r, o, a, s) {
  switch (n) {
    case k0:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case w0:
      return !(e.byteLength != t.byteLength || !a(new Di(e), new Di(t)));
    case f0:
    case p0:
    case g0:
      return Qs(+e, +t);
    case m0:
      return e.name == t.name && e.message == t.message;
    case v0:
    case y0:
      return e == t + "";
    case h0:
      var i = i0;
    case b0:
      var l = r & u0;
      if (i || (i = c0), e.size != t.size && !l)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      r |= d0, s.set(e, t);
      var d = Vu(i(e), i(t), r, o, a, s);
      return s.delete(e), d;
    case _0:
      if (qa)
        return qa.call(e) == qa.call(t);
  }
  return !1;
}
var S0 = 1, E0 = Object.prototype, A0 = E0.hasOwnProperty;
function C0(e, t, n, r, o, a) {
  var s = n & S0, i = xi(e), l = i.length, u = xi(t), d = u.length;
  if (l != d && !s)
    return !1;
  for (var m = l; m--; ) {
    var p = i[m];
    if (!(s ? p in t : A0.call(t, p)))
      return !1;
  }
  var v = a.get(e), h = a.get(t);
  if (v && h)
    return v == t && h == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var T = s; ++m < l; ) {
    p = i[m];
    var f = e[p], E = t[p];
    if (r)
      var x = s ? r(E, f, p, t, e, a) : r(f, E, p, e, t, a);
    if (!(x === void 0 ? f === E || o(f, E, n, r, a) : x)) {
      g = !1;
      break;
    }
    T || (T = p == "constructor");
  }
  if (g && !T) {
    var S = e.constructor, b = t.constructor;
    S != b && "constructor" in e && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof b == "function" && b instanceof b) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var O0 = 1, zi = "[object Arguments]", Bi = "[object Array]", Go = "[object Object]", L0 = Object.prototype, Vi = L0.hasOwnProperty;
function I0(e, t, n, r, o, a) {
  var s = vn(e), i = vn(t), l = s ? Bi : ur(e), u = i ? Bi : ur(t);
  l = l == zi ? Go : l, u = u == zi ? Go : u;
  var d = l == Go, m = u == Go, p = l == u;
  if (p && ys(e)) {
    if (!ys(t))
      return !1;
    s = !0, d = !1;
  }
  if (p && !d)
    return a || (a = new Xn()), s || Fu(e) ? Vu(e, t, n, r, o, a) : T0(e, t, l, n, r, o, a);
  if (!(n & O0)) {
    var v = d && Vi.call(e, "__wrapped__"), h = m && Vi.call(t, "__wrapped__");
    if (v || h) {
      var g = v ? e.value() : e, T = h ? t.value() : t;
      return a || (a = new Xn()), o(g, T, n, r, a);
    }
  }
  return p ? (a || (a = new Xn()), C0(e, t, n, r, o, a)) : !1;
}
function xa(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Zr(e) && !Zr(t) ? e !== e && t !== t : I0(e, t, n, r, xa, o);
}
var x0 = 1, R0 = 2;
function P0(e, t, n, r) {
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
      var d = new Xn(), m;
      if (!(m === void 0 ? xa(u, l, x0 | R0, r, d) : m))
        return !1;
    }
  }
  return !0;
}
function ju(e) {
  return e === e && !hr(e);
}
function N0(e) {
  for (var t = zu(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, ju(o)];
  }
  return t;
}
function Uu(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function $0(e) {
  var t = N0(e);
  return t.length == 1 && t[0][2] ? Uu(t[0][0], t[0][1]) : function(n) {
    return n === e || P0(n, e, t);
  };
}
function M0(e, t) {
  return e != null && t in Object(e);
}
function D0(e, t, n) {
  t = Ia(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = $o(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Js(o) && Xs(s, o) && (vn(e) || el(e)));
}
function Hu(e, t) {
  return e != null && D0(e, t, M0);
}
var F0 = 1, z0 = 2;
function B0(e, t) {
  return tl(e) && ju(t) ? Uu($o(e), t) : function(n) {
    var r = fr(n, e);
    return r === void 0 && r === t ? Hu(n, e) : xa(t, r, F0 | z0);
  };
}
function V0(e) {
  return function(t) {
    return t?.[e];
  };
}
function j0(e) {
  return function(t) {
    return rl(t, e);
  };
}
function U0(e) {
  return tl(e) ? V0($o(e)) : j0(e);
}
function H0(e) {
  return typeof e == "function" ? e : e == null ? Pu : typeof e == "object" ? vn(e) ? B0(e[0], e[1]) : $0(e) : U0(e);
}
var Ya = function() {
  return Mn.Date.now();
}, W0 = "Expected a function", G0 = Math.max, K0 = Math.min;
function q0(e, t, n) {
  var r, o, a, s, i, l, u = 0, d = !1, m = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(W0);
  t = wi(t) || 0, hr(n) && (d = !!n.leading, m = "maxWait" in n, a = m ? G0(wi(n.maxWait) || 0, t) : a, p = "trailing" in n ? !!n.trailing : p);
  function v(C) {
    var O = r, D = o;
    return r = o = void 0, u = C, s = e.apply(D, O), s;
  }
  function h(C) {
    return u = C, i = setTimeout(f, t), d ? v(C) : s;
  }
  function g(C) {
    var O = C - l, D = C - u, X = t - O;
    return m ? K0(X, a - D) : X;
  }
  function T(C) {
    var O = C - l, D = C - u;
    return l === void 0 || O >= t || O < 0 || m && D >= a;
  }
  function f() {
    var C = Ya();
    if (T(C))
      return E(C);
    i = setTimeout(f, g(C));
  }
  function E(C) {
    return i = void 0, p && r ? v(C) : (r = o = void 0, s);
  }
  function x() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function S() {
    return i === void 0 ? s : E(Ya());
  }
  function b() {
    var C = Ya(), O = T(C);
    if (r = arguments, o = this, l = C, O) {
      if (i === void 0)
        return h(l);
      if (m)
        return clearTimeout(i), i = setTimeout(f, t), v(l);
    }
    return i === void 0 && (i = setTimeout(f, t)), s;
  }
  return b.cancel = x, b.flush = S, b;
}
function Y0(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var o = r - 1;
  return eg(e, H0(t), o);
}
function ma(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function _o(e, t) {
  return xa(e, t);
}
function Qn(e) {
  return e == null;
}
function Z0(e) {
  return e === void 0;
}
function X0(e, t, n, r) {
  if (!hr(e))
    return e;
  t = Ia(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = $o(t[o]), u = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var d = i[l];
      u = void 0, u === void 0 && (u = hr(d) ? d : Xs(t[o + 1]) ? [] : {});
    }
    sg(i, l, u), i = i[l];
  }
  return e;
}
function Q0(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = rl(e, s);
    n(i, s) && X0(a, Ia(s, e), i);
  }
  return a;
}
function J0(e, t) {
  return Q0(e, t, function(n, r) {
    return Hu(e, r);
  });
}
var eb = Mv(function(e, t) {
  return e == null ? {} : J0(e, t);
});
const Cn = (e) => e === void 0, mr = (e) => typeof e == "boolean", ze = (e) => typeof e == "number", hn = (e) => typeof Element > "u" ? !1 : e instanceof Element, tb = (e) => Dt(e) ? !Number.isNaN(Number(e)) : !1;
var nb = Object.defineProperty, rb = Object.defineProperties, ob = Object.getOwnPropertyDescriptors, ji = Object.getOwnPropertySymbols, ab = Object.prototype.hasOwnProperty, sb = Object.prototype.propertyIsEnumerable, Ui = (e, t, n) => t in e ? nb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, lb = (e, t) => {
  for (var n in t || (t = {}))
    ab.call(t, n) && Ui(e, n, t[n]);
  if (ji)
    for (var n of ji(t))
      sb.call(t, n) && Ui(e, n, t[n]);
  return e;
}, ib = (e, t) => rb(e, ob(t));
function cb(e, t) {
  var n;
  const r = pr();
  return Wc(() => {
    r.value = e();
  }, ib(lb({}, t), {
    flush: (n = void 0) != null ? n : "sync"
  })), xs(r);
}
var Hi;
const ht = typeof window < "u", ub = (e) => typeof e == "string", Wu = () => {
}, Ts = ht && ((Hi = window?.navigator) == null ? void 0 : Hi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ol(e) {
  return typeof e == "function" ? e() : c(e);
}
function db(e) {
  return e;
}
function Mo(e) {
  return of() ? (af(e), !0) : !1;
}
function fb(e, t = !0) {
  jt() ? ft(e) : t ? e() : ct(e);
}
function Gu(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = W(!1);
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
    }, ol(t));
  }
  return r && (o.value = !0, ht && l()), Mo(i), {
    isPending: xs(o),
    start: l,
    stop: i
  };
}
function Yn(e) {
  var t;
  const n = ol(e);
  return (t = n?.$el) != null ? t : n;
}
const Ra = ht ? window : void 0;
function gn(...e) {
  let t, n, r, o;
  if (ub(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = Ra) : [t, n, r, o] = e, !t)
    return Wu;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((d) => d()), a.length = 0;
  }, i = (d, m, p, v) => (d.addEventListener(m, p, v), () => d.removeEventListener(m, p, v)), l = _e(() => [Yn(t), ol(o)], ([d, m]) => {
    s(), d && a.push(...n.flatMap((p) => r.map((v) => i(d, p, v, m))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), s();
  };
  return Mo(u), u;
}
let Wi = !1;
function pb(e, t, n = {}) {
  const { window: r = Ra, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  Ts && !Wi && (Wi = !0, Array.from(r.document.body.children).forEach((p) => p.addEventListener("click", Wu)));
  let i = !0;
  const l = (p) => o.some((v) => {
    if (typeof v == "string")
      return Array.from(r.document.querySelectorAll(v)).some((h) => h === p.target || p.composedPath().includes(h));
    {
      const h = Yn(v);
      return h && (p.target === h || p.composedPath().includes(h));
    }
  }), d = [
    gn(r, "click", (p) => {
      const v = Yn(e);
      if (!(!v || v === p.target || p.composedPath().includes(v))) {
        if (p.detail === 0 && (i = !l(p)), !i) {
          i = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: a }),
    gn(r, "pointerdown", (p) => {
      const v = Yn(e);
      v && (i = !p.composedPath().includes(v) && !l(p));
    }, { passive: !0 }),
    s && gn(r, "blur", (p) => {
      var v;
      const h = Yn(e);
      ((v = r.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !h?.contains(r.document.activeElement) && t(p);
    })
  ].filter(Boolean);
  return () => d.forEach((p) => p());
}
function Ku(e, t = !1) {
  const n = W(), r = () => n.value = !!e();
  return r(), fb(r, t), n;
}
const Gi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ki = "__vueuse_ssr_handlers__";
Gi[Ki] = Gi[Ki] || {};
var qi = Object.getOwnPropertySymbols, mb = Object.prototype.hasOwnProperty, hb = Object.prototype.propertyIsEnumerable, gb = (e, t) => {
  var n = {};
  for (var r in e)
    mb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && qi)
    for (var r of qi(e))
      t.indexOf(r) < 0 && hb.call(e, r) && (n[r] = e[r]);
  return n;
};
function En(e, t, n = {}) {
  const r = n, { window: o = Ra } = r, a = gb(r, ["window"]);
  let s;
  const i = Ku(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = _e(() => Yn(e), (m) => {
    l(), i.value && o && m && (s = new ResizeObserver(t), s.observe(m, a));
  }, { immediate: !0, flush: "post" }), d = () => {
    l(), u();
  };
  return Mo(d), {
    isSupported: i,
    stop: d
  };
}
var Yi = Object.getOwnPropertySymbols, vb = Object.prototype.hasOwnProperty, bb = Object.prototype.propertyIsEnumerable, yb = (e, t) => {
  var n = {};
  for (var r in e)
    vb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Yi)
    for (var r of Yi(e))
      t.indexOf(r) < 0 && bb.call(e, r) && (n[r] = e[r]);
  return n;
};
function _b(e, t, n = {}) {
  const r = n, { window: o = Ra } = r, a = yb(r, ["window"]);
  let s;
  const i = Ku(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, u = _e(() => Yn(e), (m) => {
    l(), i.value && o && m && (s = new MutationObserver(t), s.observe(m, a));
  }, { immediate: !0 }), d = () => {
    l(), u();
  };
  return Mo(d), {
    isSupported: i,
    stop: d
  };
}
var Zi;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Zi || (Zi = {}));
var wb = Object.defineProperty, Xi = Object.getOwnPropertySymbols, kb = Object.prototype.hasOwnProperty, Tb = Object.prototype.propertyIsEnumerable, Qi = (e, t, n) => t in e ? wb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Sb = (e, t) => {
  for (var n in t || (t = {}))
    kb.call(t, n) && Qi(e, n, t[n]);
  if (Xi)
    for (var n of Xi(t))
      Tb.call(t, n) && Qi(e, n, t[n]);
  return e;
};
const Eb = {
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
Sb({
  linear: db
}, Eb);
class Ab extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function al(e, t) {
  throw new Ab(`[${e}] ${t}`);
}
const Ji = {
  current: 0
}, ec = W(0), qu = 2e3, tc = Symbol("elZIndexContextKey"), Yu = Symbol("zIndexContextKey"), Zu = (e) => {
  const t = jt() ? Ve(tc, Ji) : Ji, n = e || (jt() ? Ve(Yu, void 0) : void 0), r = I(() => {
    const s = c(n);
    return ze(s) ? s : qu;
  }), o = I(() => r.value + ec.value), a = () => (t.current++, ec.value = t.current, o.value);
  return !ht && Ve(tc), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
};
var Cb = {
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
const Ob = (e) => (t, n) => Lb(t, n, c(e)), Lb = (e, t, n) => fr(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t?.[o]) != null ? a : `{${o}}`}`;
}), Ib = (e) => {
  const t = I(() => c(e).name), n = Gr(e) ? e : W(e);
  return {
    lang: t,
    locale: n,
    t: Ob(e)
  };
}, Xu = Symbol("localeContextKey"), sl = (e) => {
  const t = e || Ve(Xu, W());
  return Ib(I(() => t.value || Cb));
}, Qu = "__epPropKey", he = (e) => e, xb = (e) => Xt(e) && !!e[Qu], Pa = (e, t) => {
  if (!Xt(e) || xb(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (u) => {
      let d = !1, m = [];
      if (n && (m = Array.from(n), hi(e, "default") && m.push(o), d || (d = m.includes(u))), s && (d || (d = s(u))), !d && m.length > 0) {
        const p = [...new Set(m)].map((v) => JSON.stringify(v)).join(", ");
        sf(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Qu]: !0
  };
  return hi(e, "default") && (l.default = o), l;
}, Je = (e) => ma(Object.entries(e).map(([t, n]) => [
  t,
  Pa(n, t)
])), ll = ["", "default", "small", "large"], Na = Pa({
  type: String,
  values: ll,
  required: !1
}), Ju = Symbol("size"), Rb = () => {
  const e = Ve(Ju, {});
  return I(() => c(e.size) || "");
}, ed = Symbol("emptyValuesContextKey"), Pb = ["", void 0, null], Nb = void 0, td = Je({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => at(e) ? !e() : !e
  }
}), $b = (e, t) => {
  const n = jt() ? Ve(ed, W({})) : W({}), r = I(() => e.emptyValues || n.value.emptyValues || Pb), o = I(() => at(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : at(n.value.valueOnClear) ? n.value.valueOnClear() : n.value.valueOnClear !== void 0 ? n.value.valueOnClear : Nb), a = (s) => r.value.includes(s);
  return r.value.includes(o.value), {
    emptyValues: r,
    valueOnClear: o,
    isEmptyValue: a
  };
}, nc = (e) => Object.keys(e), ha = W();
function nd(e, t = void 0) {
  return jt() ? Ve(Ou, ha) : ha;
}
function rd(e, t) {
  const n = nd(), r = gt(e, I(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.namespace) || na;
  })), o = sl(I(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.locale;
  })), a = Zu(I(() => {
    var i;
    return ((i = n.value) == null ? void 0 : i.zIndex) || qu;
  })), s = I(() => {
    var i;
    return c(t) || ((i = n.value) == null ? void 0 : i.size) || "";
  });
  return od(I(() => c(n) || {})), {
    ns: r,
    locale: o,
    zIndex: a,
    size: s
  };
}
const od = (e, t, n = !1) => {
  var r;
  const o = !!jt(), a = o ? nd() : void 0, s = (r = void 0) != null ? r : o ? Rn : void 0;
  if (!s)
    return;
  const i = I(() => {
    const l = c(e);
    return a?.value ? Mb(a.value, l) : l;
  });
  return s(Ou, i), s(Xu, I(() => i.value.locale)), s(Lu, I(() => i.value.namespace)), s(Yu, I(() => i.value.zIndex)), s(Ju, {
    size: I(() => i.value.size || "")
  }), s(ed, I(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (n || !ha.value) && (ha.value = i.value), i;
}, Mb = (e, t) => {
  const n = [.../* @__PURE__ */ new Set([...nc(e), ...nc(t)])], r = {};
  for (const o of n)
    r[o] = t[o] !== void 0 ? t[o] : e[o];
  return r;
}, At = "update:modelValue", tr = "change", Jn = "input";
var nt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function Xr(e, t = "px") {
  if (!e)
    return "";
  if (ze(e) || tb(e))
    return `${e}${t}`;
  if (Dt(e))
    return e;
}
function Db(e, t) {
  if (!ht)
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
const bn = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, ad = (e, t) => (e.install = (n) => {
  e._context = n._context, n.config.globalProperties[t] = e;
}, e), sd = (e) => (e.install = Oo, e), Fb = Je({
  size: {
    type: he([Number, String])
  },
  color: {
    type: String
  }
}), zb = oe({
  name: "ElIcon",
  inheritAttrs: !1
}), Bb = /* @__PURE__ */ oe({
  ...zb,
  props: Fb,
  setup(e) {
    const t = e, n = gt("icon"), r = I(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Cn(o) ? void 0 : Xr(o),
        "--color": a
      };
    });
    return (o, a) => (P(), K("i", Kr({
      class: c(n).b(),
      style: c(r)
    }, o.$attrs), [
      ye(o.$slots, "default")
    ], 16));
  }
});
var Vb = /* @__PURE__ */ nt(Bb, [["__file", "icon.vue"]]);
const mt = bn(Vb);
/*! Element Plus Icons Vue v2.3.1 */
var jb = /* @__PURE__ */ oe({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (P(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), ld = jb, Ub = /* @__PURE__ */ oe({
  name: "ArrowUp",
  __name: "arrow-up",
  setup(e) {
    return (t, n) => (P(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"
      })
    ]));
  }
}), Hb = Ub, Wb = /* @__PURE__ */ oe({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (P(), K("svg", {
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
}), Gb = Wb, Kb = /* @__PURE__ */ oe({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (t, n) => (P(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), qb = Kb, Yb = /* @__PURE__ */ oe({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (P(), K("svg", {
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
}), il = Yb, Zb = /* @__PURE__ */ oe({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (P(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ga = Zb, Xb = /* @__PURE__ */ oe({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (P(), K("svg", {
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
}), Qb = Xb, Jb = /* @__PURE__ */ oe({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (t, n) => (P(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), ey = Jb, ty = /* @__PURE__ */ oe({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (P(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), id = ty, ny = /* @__PURE__ */ oe({
  name: "Minus",
  __name: "minus",
  setup(e) {
    return (t, n) => (P(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
      })
    ]));
  }
}), ry = ny, oy = /* @__PURE__ */ oe({
  name: "Plus",
  __name: "plus",
  setup(e) {
    return (t, n) => (P(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"
      })
    ]));
  }
}), ay = oy, sy = /* @__PURE__ */ oe({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (t, n) => (P(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ly = sy, iy = /* @__PURE__ */ oe({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (P(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), cy = iy, uy = /* @__PURE__ */ oe({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (t, n) => (P(), K("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), dy = uy;
const On = he([
  String,
  Object,
  Function
]), fy = {
  Close: ga
}, py = {
  Close: ga
}, va = {
  success: ly,
  warning: dy,
  error: qb,
  info: ey
}, cd = {
  validating: id,
  success: Gb,
  error: il
}, ud = () => ht && /firefox/i.test(window.navigator.userAgent);
let Kt;
const my = {
  height: "0",
  visibility: "hidden",
  overflow: ud() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, hy = [
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
function gy(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), o = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: hy.map((s) => [
    s,
    t.getPropertyValue(s)
  ]), paddingSize: r, borderSize: o, boxSizing: n };
}
function rc(e, t = 1, n) {
  var r;
  Kt || (Kt = document.createElement("textarea"), document.body.appendChild(Kt));
  const { paddingSize: o, borderSize: a, boxSizing: s, contextStyle: i } = gy(e);
  i.forEach(([m, p]) => Kt?.style.setProperty(m, p)), Object.entries(my).forEach(([m, p]) => Kt?.style.setProperty(m, p, "important")), Kt.value = e.value || e.placeholder || "";
  let l = Kt.scrollHeight;
  const u = {};
  s === "border-box" ? l = l + a : s === "content-box" && (l = l - o), Kt.value = "";
  const d = Kt.scrollHeight - o;
  if (ze(t)) {
    let m = d * t;
    s === "border-box" && (m = m + o + a), l = Math.max(m, l), u.minHeight = `${m}px`;
  }
  if (ze(n)) {
    let m = d * n;
    s === "border-box" && (m = m + o + a), l = Math.min(m, l);
  }
  return u.height = `${l}px`, (r = Kt.parentNode) == null || r.removeChild(Kt), Kt = void 0, u;
}
const dd = (e) => e, vy = Je({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Pr = (e) => eb(vy, e), by = Je({
  id: {
    type: String,
    default: void 0
  },
  size: Na,
  disabled: Boolean,
  modelValue: {
    type: he([
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
    type: he([Boolean, Object]),
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
    type: he([Object, Array, String]),
    default: () => dd({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Pr(["ariaLabel"])
}), yy = {
  [At]: (e) => Dt(e),
  input: (e) => Dt(e),
  change: (e) => Dt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, _y = ["class", "style"], wy = /^on[A-Z]/, ky = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = I(() => (n?.value || []).concat(_y)), o = jt();
  return o ? I(() => {
    var a;
    return ma(Object.entries((a = o.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !r.value.includes(s) && !(t && wy.test(s))));
  }) : I(() => ({}));
}, cl = Symbol("formContextKey"), ba = Symbol("formItemContextKey"), oc = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Ty = Symbol("elIdInjection"), fd = () => jt() ? Ve(Ty, oc) : oc, $a = (e) => {
  const t = fd(), n = Zs();
  return cb(() => c(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
}, Ma = () => {
  const e = Ve(cl, void 0), t = Ve(ba, void 0);
  return {
    form: e,
    formItem: t
  };
}, ul = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = W(!1)), r || (r = W(!1));
  const o = W();
  let a;
  const s = I(() => {
    var i;
    return !!(!(e.label || e.ariaLabel) && t && t.inputIds && ((i = t.inputIds) == null ? void 0 : i.length) <= 1);
  });
  return ft(() => {
    a = _e([Gn(e, "id"), n], ([i, l]) => {
      const u = i ?? (l ? void 0 : $a().value);
      u !== o.value && (t?.removeInputId && (o.value && t.removeInputId(o.value), !r?.value && !l && u && t.addInputId(u)), o.value = u);
    }, { immediate: !0 });
  }), wa(() => {
    a && a(), t?.removeInputId && o.value && t.removeInputId(o.value);
  }), {
    isLabeledByFormItem: s,
    inputId: o
  };
}, pd = (e) => {
  const t = jt();
  return I(() => {
    var n, r;
    return (r = (n = t?.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
}, Do = (e, t = {}) => {
  const n = W(void 0), r = t.prop ? n : pd("size"), o = t.global ? n : Rb(), a = t.form ? { size: void 0 } : Ve(cl, void 0), s = t.formItem ? { size: void 0 } : Ve(ba, void 0);
  return I(() => r.value || c(e) || s?.size || a?.size || o.value || "");
}, dl = (e) => {
  const t = pd("disabled"), n = Ve(cl, void 0);
  return I(() => t.value || c(e) || n?.disabled || !1);
};
function md(e, {
  beforeFocus: t,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = jt(), { emit: s } = a, i = pr(), l = W(!1), u = (p) => {
    at(t) && t(p) || l.value || (l.value = !0, s("focus", p), n?.());
  }, d = (p) => {
    var v;
    at(r) && r(p) || p.relatedTarget && ((v = i.value) != null && v.contains(p.relatedTarget)) || (l.value = !1, s("blur", p), o?.());
  }, m = () => {
    var p, v;
    (p = i.value) != null && p.contains(document.activeElement) && i.value !== document.activeElement || (v = e.value) == null || v.focus();
  };
  return _e(i, (p) => {
    p && p.setAttribute("tabindex", "-1");
  }), gn(i, "focus", u, !0), gn(i, "blur", d, !0), gn(i, "click", m, !0), {
    isFocused: l,
    wrapperRef: i,
    handleFocus: u,
    handleBlur: d
  };
}
const Sy = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function hd({
  afterComposition: e,
  emit: t
}) {
  const n = W(!1), r = (i) => {
    t?.("compositionstart", i), n.value = !0;
  }, o = (i) => {
    var l;
    t?.("compositionupdate", i);
    const u = (l = i.target) == null ? void 0 : l.value, d = u[u.length - 1] || "";
    n.value = !Sy(d);
  }, a = (i) => {
    t?.("compositionend", i), n.value && (n.value = !1, ct(() => e(i)));
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
function Ey(e) {
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
      const u = a[i - 1], d = o.indexOf(u, i - 1);
      d !== -1 && (l = d + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, r];
}
const Ay = "ElInput", Cy = oe({
  name: Ay,
  inheritAttrs: !1
}), Oy = /* @__PURE__ */ oe({
  ...Cy,
  props: by,
  emits: yy,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = lf(), a = ky(), s = cf(), i = I(() => [
      r.type === "textarea" ? g.b() : h.b(),
      h.m(p.value),
      h.is("disabled", v.value),
      h.is("exceed", Te.value),
      {
        [h.b("group")]: s.prepend || s.append,
        [h.m("prefix")]: s.prefix || r.prefixIcon,
        [h.m("suffix")]: s.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [h.bm("suffix", "password-clear")]: q.value && z.value,
        [h.b("hidden")]: r.type === "hidden"
      },
      o.class
    ]), l = I(() => [
      h.e("wrapper"),
      h.is("focus", D.value)
    ]), { form: u, formItem: d } = Ma(), { inputId: m } = ul(r, {
      formItemContext: d
    }), p = Do(), v = dl(), h = gt("input"), g = gt("textarea"), T = pr(), f = pr(), E = W(!1), x = W(!1), S = W(), b = pr(r.inputStyle), C = I(() => T.value || f.value), { wrapperRef: O, isFocused: D, handleFocus: X, handleBlur: ne } = md(C, {
      beforeFocus() {
        return v.value;
      },
      afterBlur() {
        var k;
        r.validateEvent && ((k = d?.validate) == null || k.call(d, "blur").catch(($) => void 0));
      }
    }), fe = I(() => {
      var k;
      return (k = u?.statusIcon) != null ? k : !1;
    }), re = I(() => d?.validateState || ""), pe = I(() => re.value && cd[re.value]), ge = I(() => x.value ? cy : Qb), B = I(() => [
      o.style
    ]), Q = I(() => [
      r.inputStyle,
      b.value,
      { resize: r.resize }
    ]), j = I(() => Qn(r.modelValue) ? "" : String(r.modelValue)), q = I(() => r.clearable && !v.value && !r.readonly && !!j.value && (D.value || E.value)), z = I(() => r.showPassword && !v.value && !!j.value && (!!j.value || D.value)), Se = I(() => r.showWordLimit && !!r.maxlength && (r.type === "text" || r.type === "textarea") && !v.value && !r.readonly && !r.showPassword), $e = I(() => j.value.length), Te = I(() => !!Se.value && $e.value > Number(r.maxlength)), me = I(() => !!s.suffix || !!r.suffixIcon || q.value || r.showPassword || Se.value || !!re.value && fe.value), [G, Ke] = Ey(T);
    En(f, (k) => {
      if (de(), !Se.value || r.resize !== "both")
        return;
      const $ = k[0], { width: ve } = $.contentRect;
      S.value = {
        right: `calc(100% - ${ve + 15 + 6}px)`
      };
    });
    const we = () => {
      const { type: k, autosize: $ } = r;
      if (!(!ht || k !== "textarea" || !f.value))
        if ($) {
          const ve = Xt($) ? $.minRows : void 0, Ce = Xt($) ? $.maxRows : void 0, We = rc(f.value, ve, Ce);
          b.value = {
            overflowY: "hidden",
            ...We
          }, ct(() => {
            f.value.offsetHeight, b.value = We;
          });
        } else
          b.value = {
            minHeight: rc(f.value).minHeight
          };
    }, de = ((k) => {
      let $ = !1;
      return () => {
        var ve;
        if ($ || !r.autosize)
          return;
        ((ve = f.value) == null ? void 0 : ve.offsetParent) === null || (k(), $ = !0);
      };
    })(we), qe = () => {
      const k = C.value, $ = r.formatter ? r.formatter(j.value) : j.value;
      !k || k.value === $ || (k.value = $);
    }, pt = async (k) => {
      G();
      let { value: $ } = k.target;
      if (r.formatter && r.parser && ($ = r.parser($)), !Ct.value) {
        if ($ === j.value) {
          qe();
          return;
        }
        n(At, $), n(Jn, $), await ct(), qe(), Ke();
      }
    }, et = (k) => {
      let { value: $ } = k.target;
      r.formatter && r.parser && ($ = r.parser($)), n(tr, $);
    }, {
      isComposing: Ct,
      handleCompositionStart: bt,
      handleCompositionUpdate: Tt,
      handleCompositionEnd: yt
    } = hd({ emit: n, afterComposition: pt }), tt = () => {
      G(), x.value = !x.value, setTimeout(Ke);
    }, _t = () => {
      var k;
      return (k = C.value) == null ? void 0 : k.focus();
    }, w = () => {
      var k;
      return (k = C.value) == null ? void 0 : k.blur();
    }, A = (k) => {
      E.value = !1, n("mouseleave", k);
    }, M = (k) => {
      E.value = !0, n("mouseenter", k);
    }, J = (k) => {
      n("keydown", k);
    }, Ae = () => {
      var k;
      (k = C.value) == null || k.select();
    }, ue = () => {
      n(At, ""), n(tr, ""), n("clear"), n(Jn, "");
    };
    return _e(() => r.modelValue, () => {
      var k;
      ct(() => we()), r.validateEvent && ((k = d?.validate) == null || k.call(d, "change").catch(($) => void 0));
    }), _e(j, () => qe()), _e(() => r.type, async () => {
      await ct(), qe(), we();
    }), ft(() => {
      !r.formatter && r.parser, qe(), ct(we);
    }), t({
      input: T,
      textarea: f,
      ref: C,
      textareaStyle: Q,
      autosize: Gn(r, "autosize"),
      isComposing: Ct,
      focus: _t,
      blur: w,
      select: Ae,
      clear: ue,
      resizeTextarea: we
    }), (k, $) => (P(), K("div", {
      class: Z([
        c(i),
        {
          [c(h).bm("group", "append")]: k.$slots.append,
          [c(h).bm("group", "prepend")]: k.$slots.prepend
        }
      ]),
      style: It(c(B)),
      onMouseenter: M,
      onMouseleave: A
    }, [
      ee(" input "),
      k.type !== "textarea" ? (P(), K(Lt, { key: 0 }, [
        ee(" prepend slot "),
        k.$slots.prepend ? (P(), K("div", {
          key: 0,
          class: Z(c(h).be("group", "prepend"))
        }, [
          ye(k.$slots, "prepend")
        ], 2)) : ee("v-if", !0),
        y("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: Z(c(l))
        }, [
          ee(" prefix slot "),
          k.$slots.prefix || k.prefixIcon ? (P(), K("span", {
            key: 0,
            class: Z(c(h).e("prefix"))
          }, [
            y("span", {
              class: Z(c(h).e("prefix-inner"))
            }, [
              ye(k.$slots, "prefix"),
              k.prefixIcon ? (P(), ie(c(mt), {
                key: 0,
                class: Z(c(h).e("icon"))
              }, {
                default: se(() => [
                  (P(), ie(Bt(k.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0),
          y("input", Kr({
            id: c(m),
            ref_key: "input",
            ref: T,
            class: c(h).e("inner")
          }, c(a), {
            minlength: k.minlength,
            maxlength: k.maxlength,
            type: k.showPassword ? x.value ? "text" : "password" : k.type,
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
            onCompositionstart: c(bt),
            onCompositionupdate: c(Tt),
            onCompositionend: c(yt),
            onInput: pt,
            onChange: et,
            onKeydown: J
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          ee(" suffix slot "),
          c(me) ? (P(), K("span", {
            key: 1,
            class: Z(c(h).e("suffix"))
          }, [
            y("span", {
              class: Z(c(h).e("suffix-inner"))
            }, [
              !c(q) || !c(z) || !c(Se) ? (P(), K(Lt, { key: 0 }, [
                ye(k.$slots, "suffix"),
                k.suffixIcon ? (P(), ie(c(mt), {
                  key: 0,
                  class: Z(c(h).e("icon"))
                }, {
                  default: se(() => [
                    (P(), ie(Bt(k.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ee("v-if", !0)
              ], 64)) : ee("v-if", !0),
              c(q) ? (P(), ie(c(mt), {
                key: 1,
                class: Z([c(h).e("icon"), c(h).e("clear")]),
                onMousedown: rt(c(Oo), ["prevent"]),
                onClick: ue
              }, {
                default: se(() => [
                  N(c(il))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ee("v-if", !0),
              c(z) ? (P(), ie(c(mt), {
                key: 2,
                class: Z([c(h).e("icon"), c(h).e("password")]),
                onClick: tt
              }, {
                default: se(() => [
                  (P(), ie(Bt(c(ge))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              c(Se) ? (P(), K("span", {
                key: 3,
                class: Z(c(h).e("count"))
              }, [
                y("span", {
                  class: Z(c(h).e("count-inner"))
                }, F(c($e)) + " / " + F(k.maxlength), 3)
              ], 2)) : ee("v-if", !0),
              c(re) && c(pe) && c(fe) ? (P(), ie(c(mt), {
                key: 4,
                class: Z([
                  c(h).e("icon"),
                  c(h).e("validateIcon"),
                  c(h).is("loading", c(re) === "validating")
                ])
              }, {
                default: se(() => [
                  (P(), ie(Bt(c(pe))))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 2)) : ee("v-if", !0)
        ], 2),
        ee(" append slot "),
        k.$slots.append ? (P(), K("div", {
          key: 1,
          class: Z(c(h).be("group", "append"))
        }, [
          ye(k.$slots, "append")
        ], 2)) : ee("v-if", !0)
      ], 64)) : (P(), K(Lt, { key: 1 }, [
        ee(" textarea "),
        y("textarea", Kr({
          id: c(m),
          ref_key: "textarea",
          ref: f,
          class: [c(g).e("inner"), c(h).is("focus", c(D))]
        }, c(a), {
          minlength: k.minlength,
          maxlength: k.maxlength,
          tabindex: k.tabindex,
          disabled: c(v),
          readonly: k.readonly,
          autocomplete: k.autocomplete,
          style: c(Q),
          "aria-label": k.ariaLabel,
          placeholder: k.placeholder,
          form: k.form,
          autofocus: k.autofocus,
          rows: k.rows,
          role: k.containerRole,
          onCompositionstart: c(bt),
          onCompositionupdate: c(Tt),
          onCompositionend: c(yt),
          onInput: pt,
          onFocus: c(X),
          onBlur: c(ne),
          onChange: et,
          onKeydown: J
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        c(Se) ? (P(), K("span", {
          key: 0,
          style: It(S.value),
          class: Z(c(h).e("count"))
        }, F(c($e)) + " / " + F(k.maxlength), 7)) : ee("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Ly = /* @__PURE__ */ nt(Oy, [["__file", "input.vue"]]);
const Iy = bn(Ly), Fr = 4, xy = {
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
}, Ry = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), fl = Symbol("scrollbarContextKey"), Py = Je({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Ny = "Thumb", $y = /* @__PURE__ */ oe({
  __name: "thumb",
  props: Py,
  setup(e) {
    const t = e, n = Ve(fl), r = gt("scrollbar");
    n || al(Ny, "can not inject scrollbar context");
    const o = W(), a = W(), s = W({}), i = W(!1);
    let l = !1, u = !1, d = ht ? document.onselectstart : null;
    const m = I(() => xy[t.vertical ? "vertical" : "horizontal"]), p = I(() => Ry({
      size: t.size,
      move: t.move,
      bar: m.value
    })), v = I(() => o.value[m.value.offset] ** 2 / n.wrapElement[m.value.scrollSize] / t.ratio / a.value[m.value.offset]), h = (C) => {
      var O;
      if (C.stopPropagation(), C.ctrlKey || [1, 2].includes(C.button))
        return;
      (O = window.getSelection()) == null || O.removeAllRanges(), T(C);
      const D = C.currentTarget;
      D && (s.value[m.value.axis] = D[m.value.offset] - (C[m.value.client] - D.getBoundingClientRect()[m.value.direction]));
    }, g = (C) => {
      if (!a.value || !o.value || !n.wrapElement)
        return;
      const O = Math.abs(C.target.getBoundingClientRect()[m.value.direction] - C[m.value.client]), D = a.value[m.value.offset] / 2, X = (O - D) * 100 * v.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = X * n.wrapElement[m.value.scrollSize] / 100;
    }, T = (C) => {
      C.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", f), document.addEventListener("mouseup", E), d = document.onselectstart, document.onselectstart = () => !1;
    }, f = (C) => {
      if (!o.value || !a.value || l === !1)
        return;
      const O = s.value[m.value.axis];
      if (!O)
        return;
      const D = (o.value.getBoundingClientRect()[m.value.direction] - C[m.value.client]) * -1, X = a.value[m.value.offset] - O, ne = (D - X) * 100 * v.value / o.value[m.value.offset];
      n.wrapElement[m.value.scroll] = ne * n.wrapElement[m.value.scrollSize] / 100;
    }, E = () => {
      l = !1, s.value[m.value.axis] = 0, document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", E), b(), u && (i.value = !1);
    }, x = () => {
      u = !1, i.value = !!t.size;
    }, S = () => {
      u = !0, i.value = l;
    };
    $n(() => {
      b(), document.removeEventListener("mouseup", E);
    });
    const b = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return gn(Gn(n, "scrollbarElement"), "mousemove", x), gn(Gn(n, "scrollbarElement"), "mouseleave", S), (C, O) => (P(), ie(oo, {
      name: c(r).b("fade"),
      persisted: ""
    }, {
      default: se(() => [
        kt(y("div", {
          ref_key: "instance",
          ref: o,
          class: Z([c(r).e("bar"), c(r).is(c(m).key)]),
          onMousedown: g
        }, [
          y("div", {
            ref_key: "thumb",
            ref: a,
            class: Z(c(r).e("thumb")),
            style: It(c(p)),
            onMousedown: h
          }, null, 38)
        ], 34), [
          [er, C.always || i.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var ac = /* @__PURE__ */ nt($y, [["__file", "thumb.vue"]]);
const My = Je({
  always: {
    type: Boolean,
    default: !0
  },
  minSize: {
    type: Number,
    required: !0
  }
}), Dy = /* @__PURE__ */ oe({
  __name: "bar",
  props: My,
  setup(e, { expose: t }) {
    const n = e, r = Ve(fl), o = W(0), a = W(0), s = W(""), i = W(""), l = W(1), u = W(1);
    return t({
      handleScroll: (p) => {
        if (p) {
          const v = p.offsetHeight - Fr, h = p.offsetWidth - Fr;
          a.value = p.scrollTop * 100 / v * l.value, o.value = p.scrollLeft * 100 / h * u.value;
        }
      },
      update: () => {
        const p = r?.wrapElement;
        if (!p)
          return;
        const v = p.offsetHeight - Fr, h = p.offsetWidth - Fr, g = v ** 2 / p.scrollHeight, T = h ** 2 / p.scrollWidth, f = Math.max(g, n.minSize), E = Math.max(T, n.minSize);
        l.value = g / (v - g) / (f / (v - f)), u.value = T / (h - T) / (E / (h - E)), i.value = f + Fr < v ? `${f}px` : "", s.value = E + Fr < h ? `${E}px` : "";
      }
    }), (p, v) => (P(), K(Lt, null, [
      N(ac, {
        move: o.value,
        ratio: u.value,
        size: s.value,
        always: p.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      N(ac, {
        move: a.value,
        ratio: l.value,
        size: i.value,
        vertical: "",
        always: p.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var Fy = /* @__PURE__ */ nt(Dy, [["__file", "bar.vue"]]);
const zy = Je({
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
    type: he([String, Object, Array]),
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
  ...Pr(["ariaLabel", "ariaOrientation"])
}), By = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ze)
}, Vy = "ElScrollbar", jy = oe({
  name: Vy
}), Uy = /* @__PURE__ */ oe({
  ...jy,
  props: zy,
  emits: By,
  setup(e, { expose: t, emit: n }) {
    const r = e, o = gt("scrollbar");
    let a, s, i = 0, l = 0;
    const u = W(), d = W(), m = W(), p = W(), v = I(() => {
      const b = {};
      return r.height && (b.height = Xr(r.height)), r.maxHeight && (b.maxHeight = Xr(r.maxHeight)), [r.wrapStyle, b];
    }), h = I(() => [
      r.wrapClass,
      o.e("wrap"),
      { [o.em("wrap", "hidden-default")]: !r.native }
    ]), g = I(() => [o.e("view"), r.viewClass]), T = () => {
      var b;
      d.value && ((b = p.value) == null || b.handleScroll(d.value), i = d.value.scrollTop, l = d.value.scrollLeft, n("scroll", {
        scrollTop: d.value.scrollTop,
        scrollLeft: d.value.scrollLeft
      }));
    };
    function f(b, C) {
      Xt(b) ? d.value.scrollTo(b) : ze(b) && ze(C) && d.value.scrollTo(b, C);
    }
    const E = (b) => {
      ze(b) && (d.value.scrollTop = b);
    }, x = (b) => {
      ze(b) && (d.value.scrollLeft = b);
    }, S = () => {
      var b;
      (b = p.value) == null || b.update();
    };
    return _e(() => r.noresize, (b) => {
      b ? (a?.(), s?.()) : ({ stop: a } = En(m, S), s = gn("resize", S));
    }, { immediate: !0 }), _e(() => [r.maxHeight, r.height], () => {
      r.native || ct(() => {
        var b;
        S(), d.value && ((b = p.value) == null || b.handleScroll(d.value));
      });
    }), Rn(fl, Er({
      scrollbarElement: u,
      wrapElement: d
    })), uf(() => {
      d.value && (d.value.scrollTop = i, d.value.scrollLeft = l);
    }), ft(() => {
      r.native || ct(() => {
        S();
      });
    }), Gc(() => S()), t({
      wrapRef: d,
      update: S,
      scrollTo: f,
      setScrollTop: E,
      setScrollLeft: x,
      handleScroll: T
    }), (b, C) => (P(), K("div", {
      ref_key: "scrollbarRef",
      ref: u,
      class: Z(c(o).b())
    }, [
      y("div", {
        ref_key: "wrapRef",
        ref: d,
        class: Z(c(h)),
        style: It(c(v)),
        tabindex: b.tabindex,
        onScroll: T
      }, [
        (P(), ie(Bt(b.tag), {
          id: b.id,
          ref_key: "resizeRef",
          ref: m,
          class: Z(c(g)),
          style: It(b.viewStyle),
          role: b.role,
          "aria-label": b.ariaLabel,
          "aria-orientation": b.ariaOrientation
        }, {
          default: se(() => [
            ye(b.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 46, ["tabindex"]),
      b.native ? ee("v-if", !0) : (P(), ie(Fy, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        always: b.always,
        "min-size": b.minSize
      }, null, 8, ["always", "min-size"]))
    ], 2));
  }
});
var Hy = /* @__PURE__ */ nt(Uy, [["__file", "scrollbar.vue"]]);
const Wy = bn(Hy), pl = Symbol("popper"), gd = Symbol("popperContent"), Gy = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], vd = Je({
  role: {
    type: String,
    values: Gy,
    default: "tooltip"
  }
}), Ky = oe({
  name: "ElPopper",
  inheritAttrs: !1
}), qy = /* @__PURE__ */ oe({
  ...Ky,
  props: vd,
  setup(e, { expose: t }) {
    const n = e, r = W(), o = W(), a = W(), s = W(), i = I(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Rn(pl, l), (u, d) => ye(u.$slots, "default");
  }
});
var Yy = /* @__PURE__ */ nt(qy, [["__file", "popper.vue"]]);
const bd = Je({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Zy = oe({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Xy = /* @__PURE__ */ oe({
  ...Zy,
  props: bd,
  setup(e, { expose: t }) {
    const n = e, r = gt("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = Ve(gd, void 0);
    return _e(() => n.arrowOffset, (i) => {
      o.value = i;
    }), $n(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (P(), K("span", {
      ref_key: "arrowRef",
      ref: a,
      class: Z(c(r).e("arrow")),
      style: It(c(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Qy = /* @__PURE__ */ nt(Xy, [["__file", "arrow.vue"]]);
const yd = Je({
  virtualRef: {
    type: he(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: he(Function)
  },
  onMouseleave: {
    type: he(Function)
  },
  onClick: {
    type: he(Function)
  },
  onKeydown: {
    type: he(Function)
  },
  onFocus: {
    type: he(Function)
  },
  onBlur: {
    type: he(Function)
  },
  onContextmenu: {
    type: he(Function)
  },
  id: String,
  open: Boolean
}), _d = Symbol("elForwardRef"), Jy = (e) => {
  Rn(_d, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, e1 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Ss = (e) => {
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
}, t1 = "ElOnlyChild", n1 = oe({
  name: t1,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = Ve(_d), a = e1((r = o?.setForwardRef) != null ? r : Oo);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i || i.length > 1)
        return null;
      const l = wd(i);
      return l ? kt(df(l, n), [[a]]) : null;
    };
  }
});
function wd(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Xt(n))
      switch (n.type) {
        case ff:
          continue;
        case Hc:
        case "svg":
          return sc(n);
        case Lt:
          return wd(n.children);
        default:
          return n;
      }
    return sc(n);
  }
  return null;
}
function sc(e) {
  const t = gt("only-child");
  return N("span", {
    class: t.e("content")
  }, [e]);
}
const r1 = oe({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), o1 = /* @__PURE__ */ oe({
  ...r1,
  props: yd,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = Ve(pl, void 0);
    Jy(o);
    const a = I(() => i.value ? n.id : void 0), s = I(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = I(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = I(() => i.value ? `${n.open}` : void 0);
    let u;
    const d = [
      "onMouseenter",
      "onMouseleave",
      "onClick",
      "onKeydown",
      "onFocus",
      "onBlur",
      "onContextmenu"
    ];
    return ft(() => {
      _e(() => n.virtualRef, (m) => {
        m && (o.value = Yn(m));
      }, {
        immediate: !0
      }), _e(o, (m, p) => {
        u?.(), u = void 0, hn(m) && (d.forEach((v) => {
          var h;
          const g = n[v];
          g && (m.addEventListener(v.slice(2).toLowerCase(), g), (h = p?.removeEventListener) == null || h.call(p, v.slice(2).toLowerCase(), g));
        }), Ss(m) && (u = _e([a, s, i, l], (v) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, g) => {
            Qn(v[g]) ? m.removeAttribute(h) : m.setAttribute(h, v[g]);
          });
        }, { immediate: !0 }))), hn(p) && Ss(p) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((v) => p.removeAttribute(v));
      }, {
        immediate: !0
      });
    }), $n(() => {
      if (u?.(), u = void 0, o.value && hn(o.value)) {
        const m = o.value;
        d.forEach((p) => {
          const v = n[p];
          v && m.removeEventListener(p.slice(2).toLowerCase(), v);
        }), o.value = void 0;
      }
    }), t({
      triggerRef: o
    }), (m, p) => m.virtualTriggering ? ee("v-if", !0) : (P(), ie(c(n1), Kr({ key: 0 }, m.$attrs, {
      "aria-controls": c(a),
      "aria-describedby": c(s),
      "aria-expanded": c(l),
      "aria-haspopup": c(i)
    }), {
      default: se(() => [
        ye(m.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var a1 = /* @__PURE__ */ nt(o1, [["__file", "trigger.vue"]]);
const Za = "focus-trap.focus-after-trapped", Xa = "focus-trap.focus-after-released", s1 = "focus-trap.focusout-prevented", lc = {
  cancelable: !0,
  bubbles: !1
}, l1 = {
  cancelable: !0,
  bubbles: !1
}, ic = "focusAfterTrapped", cc = "focusAfterReleased", i1 = Symbol("elFocusTrap"), ml = W(), Da = W(0), hl = W(0);
let Ko = 0;
const kd = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, uc = (e, t) => {
  for (const n of e)
    if (!c1(n, t))
      return n;
}, c1 = (e, t) => {
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
}, u1 = (e) => {
  const t = kd(e), n = uc(t, e), r = uc(t.reverse(), e);
  return [n, r];
}, d1 = (e) => e instanceof HTMLInputElement && "select" in e, Hn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let r = !1;
    hn(e) && !Ss(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), r = !0), e.focus({ preventScroll: !0 }), hl.value = window.performance.now(), e !== n && d1(e) && t && e.select(), hn(e) && r && e.removeAttribute("tabindex");
  }
};
function dc(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const f1 = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = dc(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = dc(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, p1 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Hn(r, t), document.activeElement !== n)
      return;
}, fc = f1(), m1 = () => Da.value > hl.value, qo = () => {
  ml.value = "pointer", Da.value = window.performance.now();
}, pc = () => {
  ml.value = "keyboard", Da.value = window.performance.now();
}, h1 = () => (ft(() => {
  Ko === 0 && (document.addEventListener("mousedown", qo), document.addEventListener("touchstart", qo), document.addEventListener("keydown", pc)), Ko++;
}), $n(() => {
  Ko--, Ko <= 0 && (document.removeEventListener("mousedown", qo), document.removeEventListener("touchstart", qo), document.removeEventListener("keydown", pc));
}), {
  focusReason: ml,
  lastUserFocusTimestamp: Da,
  lastAutomatedFocusTimestamp: hl
}), Yo = (e) => new CustomEvent(s1, {
  ...l1,
  detail: e
}), In = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter"
};
let Hr = [];
const mc = (e) => {
  e.code === In.esc && Hr.forEach((t) => t(e));
}, g1 = (e) => {
  ft(() => {
    Hr.length === 0 && document.addEventListener("keydown", mc), ht && Hr.push(e);
  }), $n(() => {
    Hr = Hr.filter((t) => t !== e), Hr.length === 0 && ht && document.removeEventListener("keydown", mc);
  });
}, v1 = oe({
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
    ic,
    cc,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = W();
    let r, o;
    const { focusReason: a } = h1();
    g1((h) => {
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
      const { code: g, altKey: T, ctrlKey: f, metaKey: E, currentTarget: x, shiftKey: S } = h, { loop: b } = e, C = g === In.tab && !T && !f && !E, O = document.activeElement;
      if (C && O) {
        const D = x, [X, ne] = u1(D);
        if (X && ne) {
          if (!S && O === ne) {
            const re = Yo({
              focusReason: a.value
            });
            t("focusout-prevented", re), re.defaultPrevented || (h.preventDefault(), b && Hn(X, !0));
          } else if (S && [X, D].includes(O)) {
            const re = Yo({
              focusReason: a.value
            });
            t("focusout-prevented", re), re.defaultPrevented || (h.preventDefault(), b && Hn(ne, !0));
          }
        } else if (O === D) {
          const re = Yo({
            focusReason: a.value
          });
          t("focusout-prevented", re), re.defaultPrevented || h.preventDefault();
        }
      }
    };
    Rn(i1, {
      focusTrapRef: n,
      onKeydown: i
    }), _e(() => e.focusTrapEl, (h) => {
      h && (n.value = h);
    }, { immediate: !0 }), _e([n], ([h], [g]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", d), h.addEventListener("focusout", m)), g && (g.removeEventListener("keydown", i), g.removeEventListener("focusin", d), g.removeEventListener("focusout", m));
    });
    const l = (h) => {
      t(ic, h);
    }, u = (h) => t(cc, h), d = (h) => {
      const g = c(n);
      if (!g)
        return;
      const T = h.target, f = h.relatedTarget, E = T && g.contains(T);
      e.trapped || f && g.contains(f) || (r = f), E && t("focusin", h), !s.paused && e.trapped && (E ? o = T : Hn(o, !0));
    }, m = (h) => {
      const g = c(n);
      if (!(s.paused || !g))
        if (e.trapped) {
          const T = h.relatedTarget;
          !Qn(T) && !g.contains(T) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const f = Yo({
                focusReason: a.value
              });
              t("focusout-prevented", f), f.defaultPrevented || Hn(o, !0);
            }
          }, 0);
        } else {
          const T = h.target;
          T && g.contains(T) || t("focusout", h);
        }
    };
    async function p() {
      await ct();
      const h = c(n);
      if (h) {
        fc.push(s);
        const g = h.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !h.contains(g)) {
          const f = new Event(Za, lc);
          h.addEventListener(Za, l), h.dispatchEvent(f), f.defaultPrevented || ct(() => {
            let E = e.focusStartEl;
            Dt(E) || (Hn(E), document.activeElement !== E && (E = "first")), E === "first" && p1(kd(h), !0), (document.activeElement === g || E === "container") && Hn(h);
          });
        }
      }
    }
    function v() {
      const h = c(n);
      if (h) {
        h.removeEventListener(Za, l);
        const g = new CustomEvent(Xa, {
          ...lc,
          detail: {
            focusReason: a.value
          }
        });
        h.addEventListener(Xa, u), h.dispatchEvent(g), !g.defaultPrevented && (a.value == "keyboard" || !m1() || h.contains(document.activeElement)) && Hn(r ?? document.body), h.removeEventListener(Xa, u), fc.remove(s);
      }
    }
    return ft(() => {
      e.trapped && p(), _e(() => e.trapped, (h) => {
        h ? p() : v();
      });
    }), $n(() => {
      e.trapped && v(), n.value && (n.value.removeEventListener("keydown", i), n.value.removeEventListener("focusin", d), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function b1(e, t, n, r, o, a) {
  return ye(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var y1 = /* @__PURE__ */ nt(v1, [["render", b1], ["__file", "focus-trap.vue"]]), qt = "top", rn = "bottom", on = "right", Yt = "left", gl = "auto", Fo = [qt, rn, on, Yt], Qr = "start", xo = "end", _1 = "clippingParents", Td = "viewport", fo = "popper", w1 = "reference", hc = Fo.reduce(function(e, t) {
  return e.concat([t + "-" + Qr, t + "-" + xo]);
}, []), Fa = [].concat(Fo, [gl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qr, t + "-" + xo]);
}, []), k1 = "beforeRead", T1 = "read", S1 = "afterRead", E1 = "beforeMain", A1 = "main", C1 = "afterMain", O1 = "beforeWrite", L1 = "write", I1 = "afterWrite", x1 = [k1, T1, S1, E1, A1, C1, O1, L1, I1];
function Nn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Qt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Or(e) {
  var t = Qt(e).Element;
  return e instanceof t || e instanceof Element;
}
function nn(e) {
  var t = Qt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function vl(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Qt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function R1(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !nn(a) || !Nn(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function P1(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !nn(o) || !Nn(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Sd = { name: "applyStyles", enabled: !0, phase: "write", fn: R1, effect: P1, requires: ["computeStyles"] };
function xn(e) {
  return e.split("-")[0];
}
var Sr = Math.max, ya = Math.min, Jr = Math.round;
function Es() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ed() {
  return !/^((?!chrome|android).)*safari/i.test(Es());
}
function eo(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && nn(e) && (o = e.offsetWidth > 0 && Jr(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Jr(r.height) / e.offsetHeight || 1);
  var s = Or(e) ? Qt(e) : window, i = s.visualViewport, l = !Ed() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, d = (r.top + (l && i ? i.offsetTop : 0)) / a, m = r.width / o, p = r.height / a;
  return { width: m, height: p, top: d, right: u + m, bottom: d + p, left: u, x: u, y: d };
}
function bl(e) {
  var t = eo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Ad(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && vl(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function nr(e) {
  return Qt(e).getComputedStyle(e);
}
function N1(e) {
  return ["table", "td", "th"].indexOf(Nn(e)) >= 0;
}
function br(e) {
  return ((Or(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function za(e) {
  return Nn(e) === "html" ? e : e.assignedSlot || e.parentNode || (vl(e) ? e.host : null) || br(e);
}
function gc(e) {
  return !nn(e) || nr(e).position === "fixed" ? null : e.offsetParent;
}
function $1(e) {
  var t = /firefox/i.test(Es()), n = /Trident/i.test(Es());
  if (n && nn(e)) {
    var r = nr(e);
    if (r.position === "fixed") return null;
  }
  var o = za(e);
  for (vl(o) && (o = o.host); nn(o) && ["html", "body"].indexOf(Nn(o)) < 0; ) {
    var a = nr(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function zo(e) {
  for (var t = Qt(e), n = gc(e); n && N1(n) && nr(n).position === "static"; ) n = gc(n);
  return n && (Nn(n) === "html" || Nn(n) === "body" && nr(n).position === "static") ? t : n || $1(e) || t;
}
function yl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function wo(e, t, n) {
  return Sr(e, ya(t, n));
}
function M1(e, t, n) {
  var r = wo(e, t, n);
  return r > n ? n : r;
}
function Cd() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Od(e) {
  return Object.assign({}, Cd(), e);
}
function Ld(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var D1 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Od(typeof e != "number" ? e : Ld(e, Fo));
};
function F1(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = xn(n.placement), l = yl(i), u = [Yt, on].indexOf(i) >= 0, d = u ? "height" : "width";
  if (!(!a || !s)) {
    var m = D1(o.padding, n), p = bl(a), v = l === "y" ? qt : Yt, h = l === "y" ? rn : on, g = n.rects.reference[d] + n.rects.reference[l] - s[l] - n.rects.popper[d], T = s[l] - n.rects.reference[l], f = zo(a), E = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, x = g / 2 - T / 2, S = m[v], b = E - p[d] - m[h], C = E / 2 - p[d] / 2 + x, O = wo(S, C, b), D = l;
    n.modifiersData[r] = (t = {}, t[D] = O, t.centerOffset = O - C, t);
  }
}
function z1(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Ad(t.elements.popper, o) && (t.elements.arrow = o));
}
var B1 = { name: "arrow", enabled: !0, phase: "main", fn: F1, effect: z1, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function to(e) {
  return e.split("-")[1];
}
var V1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function j1(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return { x: Jr(n * o) / o || 0, y: Jr(r * o) / o || 0 };
}
function vc(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, m = e.isFixed, p = s.x, v = p === void 0 ? 0 : p, h = s.y, g = h === void 0 ? 0 : h, T = typeof d == "function" ? d({ x: v, y: g }) : { x: v, y: g };
  v = T.x, g = T.y;
  var f = s.hasOwnProperty("x"), E = s.hasOwnProperty("y"), x = Yt, S = qt, b = window;
  if (u) {
    var C = zo(n), O = "clientHeight", D = "clientWidth";
    if (C === Qt(n) && (C = br(n), nr(C).position !== "static" && i === "absolute" && (O = "scrollHeight", D = "scrollWidth")), C = C, o === qt || (o === Yt || o === on) && a === xo) {
      S = rn;
      var X = m && C === b && b.visualViewport ? b.visualViewport.height : C[O];
      g -= X - r.height, g *= l ? 1 : -1;
    }
    if (o === Yt || (o === qt || o === rn) && a === xo) {
      x = on;
      var ne = m && C === b && b.visualViewport ? b.visualViewport.width : C[D];
      v -= ne - r.width, v *= l ? 1 : -1;
    }
  }
  var fe = Object.assign({ position: i }, u && V1), re = d === !0 ? j1({ x: v, y: g }, Qt(n)) : { x: v, y: g };
  if (v = re.x, g = re.y, l) {
    var pe;
    return Object.assign({}, fe, (pe = {}, pe[S] = E ? "0" : "", pe[x] = f ? "0" : "", pe.transform = (b.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + g + "px)" : "translate3d(" + v + "px, " + g + "px, 0)", pe));
  }
  return Object.assign({}, fe, (t = {}, t[S] = E ? g + "px" : "", t[x] = f ? v + "px" : "", t.transform = "", t));
}
function U1(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, u = { placement: xn(t.placement), variation: to(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, vc(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, vc(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Id = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: U1, data: {} }, Zo = { passive: !0 };
function H1(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = Qt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Zo);
  }), i && l.addEventListener("resize", n.update, Zo), function() {
    a && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Zo);
    }), i && l.removeEventListener("resize", n.update, Zo);
  };
}
var xd = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: H1, data: {} }, W1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ra(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return W1[t];
  });
}
var G1 = { start: "end", end: "start" };
function bc(e) {
  return e.replace(/start|end/g, function(t) {
    return G1[t];
  });
}
function _l(e) {
  var t = Qt(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function wl(e) {
  return eo(br(e)).left + _l(e).scrollLeft;
}
function K1(e, t) {
  var n = Qt(e), r = br(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = Ed();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return { width: a, height: s, x: i + wl(e), y: l };
}
function q1(e) {
  var t, n = br(e), r = _l(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Sr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Sr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + wl(e), l = -r.scrollTop;
  return nr(o || n).direction === "rtl" && (i += Sr(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function kl(e) {
  var t = nr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Rd(e) {
  return ["html", "body", "#document"].indexOf(Nn(e)) >= 0 ? e.ownerDocument.body : nn(e) && kl(e) ? e : Rd(za(e));
}
function ko(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Rd(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Qt(r), s = o ? [a].concat(a.visualViewport || [], kl(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(ko(za(s)));
}
function As(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Y1(e, t) {
  var n = eo(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function yc(e, t, n) {
  return t === Td ? As(K1(e, n)) : Or(t) ? Y1(t, n) : As(q1(br(e)));
}
function Z1(e) {
  var t = ko(za(e)), n = ["absolute", "fixed"].indexOf(nr(e).position) >= 0, r = n && nn(e) ? zo(e) : e;
  return Or(r) ? t.filter(function(o) {
    return Or(o) && Ad(o, r) && Nn(o) !== "body";
  }) : [];
}
function X1(e, t, n, r) {
  var o = t === "clippingParents" ? Z1(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var d = yc(e, u, r);
    return l.top = Sr(d.top, l.top), l.right = ya(d.right, l.right), l.bottom = ya(d.bottom, l.bottom), l.left = Sr(d.left, l.left), l;
  }, yc(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Pd(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? xn(r) : null, a = r ? to(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case qt:
      l = { x: s, y: t.y - n.height };
      break;
    case rn:
      l = { x: s, y: t.y + t.height };
      break;
    case on:
      l = { x: t.x + t.width, y: i };
      break;
    case Yt:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = o ? yl(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (a) {
      case Qr:
        l[u] = l[u] - (t[d] / 2 - n[d] / 2);
        break;
      case xo:
        l[u] = l[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return l;
}
function Ro(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? _1 : i, u = n.rootBoundary, d = u === void 0 ? Td : u, m = n.elementContext, p = m === void 0 ? fo : m, v = n.altBoundary, h = v === void 0 ? !1 : v, g = n.padding, T = g === void 0 ? 0 : g, f = Od(typeof T != "number" ? T : Ld(T, Fo)), E = p === fo ? w1 : fo, x = e.rects.popper, S = e.elements[h ? E : p], b = X1(Or(S) ? S : S.contextElement || br(e.elements.popper), l, d, s), C = eo(e.elements.reference), O = Pd({ reference: C, element: x, placement: o }), D = As(Object.assign({}, x, O)), X = p === fo ? D : C, ne = { top: b.top - X.top + f.top, bottom: X.bottom - b.bottom + f.bottom, left: b.left - X.left + f.left, right: X.right - b.right + f.right }, fe = e.modifiersData.offset;
  if (p === fo && fe) {
    var re = fe[o];
    Object.keys(ne).forEach(function(pe) {
      var ge = [on, rn].indexOf(pe) >= 0 ? 1 : -1, B = [qt, rn].indexOf(pe) >= 0 ? "y" : "x";
      ne[pe] += re[B] * ge;
    });
  }
  return ne;
}
function Q1(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Fa : l, d = to(r), m = d ? i ? hc : hc.filter(function(h) {
    return to(h) === d;
  }) : Fo, p = m.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  p.length === 0 && (p = m);
  var v = p.reduce(function(h, g) {
    return h[g] = Ro(e, { placement: g, boundary: o, rootBoundary: a, padding: s })[xn(g)], h;
  }, {});
  return Object.keys(v).sort(function(h, g) {
    return v[h] - v[g];
  });
}
function J1(e) {
  if (xn(e) === gl) return [];
  var t = ra(e);
  return [bc(e), t, bc(t)];
}
function e_(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, u = n.padding, d = n.boundary, m = n.rootBoundary, p = n.altBoundary, v = n.flipVariations, h = v === void 0 ? !0 : v, g = n.allowedAutoPlacements, T = t.options.placement, f = xn(T), E = f === T, x = l || (E || !h ? [ra(T)] : J1(T)), S = [T].concat(x).reduce(function(G, Ke) {
      return G.concat(xn(Ke) === gl ? Q1(t, { placement: Ke, boundary: d, rootBoundary: m, padding: u, flipVariations: h, allowedAutoPlacements: g }) : Ke);
    }, []), b = t.rects.reference, C = t.rects.popper, O = /* @__PURE__ */ new Map(), D = !0, X = S[0], ne = 0; ne < S.length; ne++) {
      var fe = S[ne], re = xn(fe), pe = to(fe) === Qr, ge = [qt, rn].indexOf(re) >= 0, B = ge ? "width" : "height", Q = Ro(t, { placement: fe, boundary: d, rootBoundary: m, altBoundary: p, padding: u }), j = ge ? pe ? on : Yt : pe ? rn : qt;
      b[B] > C[B] && (j = ra(j));
      var q = ra(j), z = [];
      if (a && z.push(Q[re] <= 0), i && z.push(Q[j] <= 0, Q[q] <= 0), z.every(function(G) {
        return G;
      })) {
        X = fe, D = !1;
        break;
      }
      O.set(fe, z);
    }
    if (D) for (var Se = h ? 3 : 1, $e = function(G) {
      var Ke = S.find(function(we) {
        var st = O.get(we);
        if (st) return st.slice(0, G).every(function(de) {
          return de;
        });
      });
      if (Ke) return X = Ke, "break";
    }, Te = Se; Te > 0; Te--) {
      var me = $e(Te);
      if (me === "break") break;
    }
    t.placement !== X && (t.modifiersData[r]._skip = !0, t.placement = X, t.reset = !0);
  }
}
var t_ = { name: "flip", enabled: !0, phase: "main", fn: e_, requiresIfExists: ["offset"], data: { _skip: !1 } };
function _c(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function wc(e) {
  return [qt, on, rn, Yt].some(function(t) {
    return e[t] >= 0;
  });
}
function n_(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Ro(t, { elementContext: "reference" }), i = Ro(t, { altBoundary: !0 }), l = _c(s, r), u = _c(i, o, a), d = wc(l), m = wc(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": m });
}
var r_ = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: n_ };
function o_(e, t, n) {
  var r = xn(e), o = [Yt, qt].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [Yt, on].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function a_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = Fa.reduce(function(d, m) {
    return d[m] = o_(m, t.rects, a), d;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var s_ = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: a_ };
function l_(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Pd({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Nd = { name: "popperOffsets", enabled: !0, phase: "read", fn: l_, data: {} };
function i_(e) {
  return e === "x" ? "y" : "x";
}
function c_(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, m = n.padding, p = n.tether, v = p === void 0 ? !0 : p, h = n.tetherOffset, g = h === void 0 ? 0 : h, T = Ro(t, { boundary: l, rootBoundary: u, padding: m, altBoundary: d }), f = xn(t.placement), E = to(t.placement), x = !E, S = yl(f), b = i_(S), C = t.modifiersData.popperOffsets, O = t.rects.reference, D = t.rects.popper, X = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, ne = typeof X == "number" ? { mainAxis: X, altAxis: X } : Object.assign({ mainAxis: 0, altAxis: 0 }, X), fe = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, re = { x: 0, y: 0 };
  if (C) {
    if (a) {
      var pe, ge = S === "y" ? qt : Yt, B = S === "y" ? rn : on, Q = S === "y" ? "height" : "width", j = C[S], q = j + T[ge], z = j - T[B], Se = v ? -D[Q] / 2 : 0, $e = E === Qr ? O[Q] : D[Q], Te = E === Qr ? -D[Q] : -O[Q], me = t.elements.arrow, G = v && me ? bl(me) : { width: 0, height: 0 }, Ke = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Cd(), we = Ke[ge], st = Ke[B], de = wo(0, O[Q], G[Q]), qe = x ? O[Q] / 2 - Se - de - we - ne.mainAxis : $e - de - we - ne.mainAxis, pt = x ? -O[Q] / 2 + Se + de + st + ne.mainAxis : Te + de + st + ne.mainAxis, et = t.elements.arrow && zo(t.elements.arrow), Ct = et ? S === "y" ? et.clientTop || 0 : et.clientLeft || 0 : 0, bt = (pe = fe?.[S]) != null ? pe : 0, Tt = j + qe - bt - Ct, yt = j + pt - bt, tt = wo(v ? ya(q, Tt) : q, j, v ? Sr(z, yt) : z);
      C[S] = tt, re[S] = tt - j;
    }
    if (i) {
      var _t, w = S === "x" ? qt : Yt, A = S === "x" ? rn : on, M = C[b], J = b === "y" ? "height" : "width", Ae = M + T[w], ue = M - T[A], k = [qt, Yt].indexOf(f) !== -1, $ = (_t = fe?.[b]) != null ? _t : 0, ve = k ? Ae : M - O[J] - D[J] - $ + ne.altAxis, Ce = k ? M + O[J] + D[J] - $ - ne.altAxis : ue, We = v && k ? M1(ve, M, Ce) : wo(v ? ve : Ae, M, v ? Ce : ue);
      C[b] = We, re[b] = We - M;
    }
    t.modifiersData[r] = re;
  }
}
var u_ = { name: "preventOverflow", enabled: !0, phase: "main", fn: c_, requiresIfExists: ["offset"] };
function d_(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function f_(e) {
  return e === Qt(e) || !nn(e) ? _l(e) : d_(e);
}
function p_(e) {
  var t = e.getBoundingClientRect(), n = Jr(t.width) / e.offsetWidth || 1, r = Jr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function m_(e, t, n) {
  n === void 0 && (n = !1);
  var r = nn(t), o = nn(t) && p_(t), a = br(t), s = eo(e, o, n), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Nn(t) !== "body" || kl(a)) && (i = f_(t)), nn(t) ? (l = eo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = wl(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function h_(e) {
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
function g_(e) {
  var t = h_(e);
  return x1.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function v_(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function b_(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var kc = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Tc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Tl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? kc : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, kc, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, d = [], m = !1, p = { state: u, setOptions: function(g) {
      var T = typeof g == "function" ? g(u.options) : g;
      h(), u.options = Object.assign({}, a, u.options, T), u.scrollParents = { reference: Or(s) ? ko(s) : s.contextElement ? ko(s.contextElement) : [], popper: ko(i) };
      var f = g_(b_([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = f.filter(function(E) {
        return E.enabled;
      }), v(), p.update();
    }, forceUpdate: function() {
      if (!m) {
        var g = u.elements, T = g.reference, f = g.popper;
        if (Tc(T, f)) {
          u.rects = { reference: m_(T, zo(f), u.options.strategy === "fixed"), popper: bl(f) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(D) {
            return u.modifiersData[D.name] = Object.assign({}, D.data);
          });
          for (var E = 0; E < u.orderedModifiers.length; E++) {
            if (u.reset === !0) {
              u.reset = !1, E = -1;
              continue;
            }
            var x = u.orderedModifiers[E], S = x.fn, b = x.options, C = b === void 0 ? {} : b, O = x.name;
            typeof S == "function" && (u = S({ state: u, options: C, name: O, instance: p }) || u);
          }
        }
      }
    }, update: v_(function() {
      return new Promise(function(g) {
        p.forceUpdate(), g(u);
      });
    }), destroy: function() {
      h(), m = !0;
    } };
    if (!Tc(s, i)) return p;
    p.setOptions(l).then(function(g) {
      !m && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function v() {
      u.orderedModifiers.forEach(function(g) {
        var T = g.name, f = g.options, E = f === void 0 ? {} : f, x = g.effect;
        if (typeof x == "function") {
          var S = x({ state: u, name: T, instance: p, options: E }), b = function() {
          };
          d.push(S || b);
        }
      });
    }
    function h() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return p;
  };
}
Tl();
var y_ = [xd, Nd, Id, Sd];
Tl({ defaultModifiers: y_ });
var __ = [xd, Nd, Id, Sd, s_, t_, u_, B1, r_], w_ = Tl({ defaultModifiers: __ });
const k_ = ["fixed", "absolute"], T_ = Je({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: he(Array),
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
    values: Fa,
    default: "bottom"
  },
  popperOptions: {
    type: he(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: k_,
    default: "absolute"
  }
}), $d = Je({
  ...T_,
  id: String,
  style: {
    type: he([String, Array, Object])
  },
  className: {
    type: he([String, Array, Object])
  },
  effect: {
    type: he(String),
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
    type: he([String, Array, Object])
  },
  popperStyle: {
    type: he([String, Array, Object])
  },
  referenceEl: {
    type: he(Object)
  },
  triggerTargetEl: {
    type: he(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Pr(["ariaLabel"])
}), S_ = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, E_ = (e, t) => {
  const n = W(!1), r = W();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var d;
      ((d = u.detail) == null ? void 0 : d.focusReason) !== "pointer" && (r.value = "first", t("blur"));
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
}, A_ = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...O_(e), ...t]
  };
  return L_(a, o?.modifiers), a;
}, C_ = (e) => {
  if (ht)
    return Yn(e);
};
function O_(e) {
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
function L_(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const I_ = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = x_(l);
      Object.assign(s.value, u);
    },
    requires: ["computeStyles"]
  }, o = I(() => {
    const { onFirstUpdate: l, placement: u, strategy: d, modifiers: m } = c(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...m || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = pr(), s = W({
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
  return _e(o, (l) => {
    const u = c(a);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), _e([e, t], ([l, u]) => {
    i(), !(!l || !u) && (a.value = w_(l, u, c(o)));
  }), $n(() => {
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
function x_(e) {
  const t = Object.keys(e.elements), n = ma(t.map((o) => [o, e.styles[o] || {}])), r = ma(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
const R_ = 0, P_ = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = Ve(pl, void 0), a = W(), s = W(), i = I(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = I(() => {
    var f;
    const E = c(a), x = (f = c(s)) != null ? f : R_;
    return {
      name: "arrow",
      enabled: !Z0(E),
      options: {
        element: E,
        padding: x
      }
    };
  }), u = I(() => ({
    onFirstUpdate: () => {
      h();
    },
    ...A_(e, [
      c(l),
      c(i)
    ])
  })), d = I(() => C_(e.referenceEl) || c(r)), { attributes: m, state: p, styles: v, update: h, forceUpdate: g, instanceRef: T } = I_(d, n, u);
  return _e(T, (f) => t.value = f), ft(() => {
    _e(() => {
      var f;
      return (f = c(d)) == null ? void 0 : f.getBoundingClientRect();
    }, () => {
      h();
    });
  }), {
    attributes: m,
    arrowRef: a,
    contentRef: n,
    instanceRef: T,
    state: p,
    styles: v,
    role: o,
    forceUpdate: g,
    update: h
  };
}, N_ = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = Zu(), a = gt("popper"), s = I(() => c(t).popper), i = W(ze(e.zIndex) ? e.zIndex : o()), l = I(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), u = I(() => [
    { zIndex: c(i) },
    c(n).popper,
    e.popperStyle || {}
  ]), d = I(() => r.value === "dialog" ? "false" : void 0), m = I(() => c(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: m,
    contentAttrs: s,
    contentClass: l,
    contentStyle: u,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = ze(e.zIndex) ? e.zIndex : o();
    }
  };
}, $_ = oe({
  name: "ElPopperContent"
}), M_ = /* @__PURE__ */ oe({
  ...$_,
  props: $d,
  emits: S_,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = E_(r, n), { attributes: m, arrowRef: p, contentRef: v, styles: h, instanceRef: g, role: T, update: f } = P_(r), {
      ariaModal: E,
      arrowStyle: x,
      contentAttrs: S,
      contentClass: b,
      contentStyle: C,
      updateZIndex: O
    } = N_(r, {
      styles: h,
      attributes: m,
      role: T
    }), D = Ve(ba, void 0), X = W();
    Rn(gd, {
      arrowStyle: x,
      arrowRef: p,
      arrowOffset: X
    }), D && Rn(ba, {
      ...D,
      addInputId: Oo,
      removeInputId: Oo
    });
    let ne;
    const fe = (pe = !0) => {
      f(), pe && O();
    }, re = () => {
      fe(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return ft(() => {
      _e(() => r.triggerTargetEl, (pe, ge) => {
        ne?.(), ne = void 0;
        const B = c(pe || v.value), Q = c(ge || v.value);
        hn(B) && (ne = _e([T, () => r.ariaLabel, E, () => r.id], (j) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((q, z) => {
            Qn(j[z]) ? B.removeAttribute(q) : B.setAttribute(q, j[z]);
          });
        }, { immediate: !0 })), Q !== B && hn(Q) && ["role", "aria-label", "aria-modal", "id"].forEach((j) => {
          Q.removeAttribute(j);
        });
      }, { immediate: !0 }), _e(() => r.visible, re, { immediate: !0 });
    }), $n(() => {
      ne?.(), ne = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: g,
      updatePopper: fe,
      contentStyle: C
    }), (pe, ge) => (P(), K("div", Kr({
      ref_key: "contentRef",
      ref: v
    }, c(S), {
      style: c(C),
      class: c(b),
      tabindex: "-1",
      onMouseenter: (B) => pe.$emit("mouseenter", B),
      onMouseleave: (B) => pe.$emit("mouseleave", B)
    }), [
      N(c(y1), {
        trapped: c(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": c(v),
        "focus-start-el": c(o),
        onFocusAfterTrapped: c(i),
        onFocusAfterReleased: c(s),
        onFocusin: c(l),
        onFocusoutPrevented: c(u),
        onReleaseRequested: c(d)
      }, {
        default: se(() => [
          ye(pe.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16, ["onMouseenter", "onMouseleave"]));
  }
});
var D_ = /* @__PURE__ */ nt(M_, [["__file", "content.vue"]]);
const F_ = bn(Yy), Sl = Symbol("elTooltip");
function Sc() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return Mo(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const z_ = Je({
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
}), B_ = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = Sc(), {
    registerTimeout: s,
    cancelTimeout: i
  } = Sc();
  return {
    onOpen: (d) => {
      a(() => {
        r(d);
        const m = c(n);
        ze(m) && m > 0 && s(() => {
          o(d);
        }, m);
      }, c(e));
    },
    onClose: (d) => {
      i(), a(() => {
        o(d);
      }, c(t));
    }
  };
}, El = Je({
  ...z_,
  ...$d,
  appendTo: {
    type: he([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: Boolean,
  persistent: Boolean,
  visible: {
    type: he(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Pr(["ariaLabel"])
}), Md = Je({
  ...yd,
  disabled: Boolean,
  trigger: {
    type: he([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: he(Array),
    default: () => [In.enter, In.numpadEnter, In.space]
  }
}), V_ = Pa({
  type: he(Boolean),
  default: null
}), j_ = Pa({
  type: he(Function)
}), U_ = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: V_,
    [n]: j_
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: d,
      onHide: m
    }) => {
      const p = jt(), { emit: v } = p, h = p.props, g = I(() => at(h[n])), T = I(() => h[e] === null), f = (O) => {
        s.value !== !0 && (s.value = !0, i && (i.value = O), at(d) && d(O));
      }, E = (O) => {
        s.value !== !1 && (s.value = !1, i && (i.value = O), at(m) && m(O));
      }, x = (O) => {
        if (h.disabled === !0 || at(u) && !u())
          return;
        const D = g.value && ht;
        D && v(t, !0), (T.value || !D) && f(O);
      }, S = (O) => {
        if (h.disabled === !0 || !ht)
          return;
        const D = g.value && ht;
        D && v(t, !1), (T.value || !D) && E(O);
      }, b = (O) => {
        mr(O) && (h.disabled && O ? g.value && v(t, !1) : s.value !== O && (O ? f() : E()));
      }, C = () => {
        s.value ? S() : x();
      };
      return _e(() => h[e], b), l && p.appContext.config.globalProperties.$route !== void 0 && _e(() => ({
        ...p.proxy.$route
      }), () => {
        l.value && s.value && S();
      }), ft(() => {
        b(h[e]);
      }), {
        hide: S,
        show: x,
        toggle: C,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
}, {
  useModelToggleProps: H_,
  useModelToggleEmits: W_,
  useModelToggle: G_
} = U_("visible"), K_ = Je({
  ...vd,
  ...H_,
  ...El,
  ...Md,
  ...bd,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), q_ = [
  ...W_,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Y_ = (e, t) => An(e) ? e.includes(t) : e === t, zr = (e, t, n) => (r) => {
  Y_(c(e), t) && n(r);
}, Wn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e?.(o);
  if (n === !1 || !a)
    return t?.(o);
}, Z_ = oe({
  name: "ElTooltipTrigger"
}), X_ = /* @__PURE__ */ oe({
  ...Z_,
  props: Md,
  setup(e, { expose: t }) {
    const n = e, r = gt("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: u } = Ve(Sl, void 0), d = W(null), m = () => {
      if (c(o) || n.disabled)
        return !0;
    }, p = Gn(n, "trigger"), v = Wn(m, zr(p, "hover", i)), h = Wn(m, zr(p, "hover", l)), g = Wn(m, zr(p, "click", (S) => {
      S.button === 0 && u(S);
    })), T = Wn(m, zr(p, "focus", i)), f = Wn(m, zr(p, "focus", l)), E = Wn(m, zr(p, "contextmenu", (S) => {
      S.preventDefault(), u(S);
    })), x = Wn(m, (S) => {
      const { code: b } = S;
      n.triggerKeys.includes(b) && (S.preventDefault(), u(S));
    });
    return t({
      triggerRef: d
    }), (S, b) => (P(), ie(c(a1), {
      id: c(a),
      "virtual-ref": S.virtualRef,
      open: c(s),
      "virtual-triggering": S.virtualTriggering,
      class: Z(c(r).e("trigger")),
      onBlur: c(f),
      onClick: c(g),
      onContextmenu: c(E),
      onFocus: c(T),
      onMouseenter: c(v),
      onMouseleave: c(h),
      onKeydown: c(x)
    }, {
      default: se(() => [
        ye(S.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Q_ = /* @__PURE__ */ nt(X_, [["__file", "trigger.vue"]]);
const J_ = Je({
  to: {
    type: he([String, Object]),
    required: !0
  },
  disabled: Boolean
}), ew = /* @__PURE__ */ oe({
  __name: "teleport",
  props: J_,
  setup(e) {
    return (t, n) => t.disabled ? ye(t.$slots, "default", { key: 0 }) : (P(), ie(pf, {
      key: 1,
      to: t.to
    }, [
      ye(t.$slots, "default")
    ], 8, ["to"]));
  }
});
var tw = /* @__PURE__ */ nt(ew, [["__file", "teleport.vue"]]);
const nw = bn(tw), Dd = () => {
  const e = Zs(), t = fd(), n = I(() => `${e.value}-popper-container-${t.prefix}`), r = I(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, rw = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, ow = () => {
  const { id: e, selector: t } = Dd();
  return mf(() => {
    ht && (document.body.querySelector(t.value) || rw(e.value));
  }), {
    id: e,
    selector: t
  };
}, aw = oe({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), sw = /* @__PURE__ */ oe({
  ...aw,
  props: El,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Dd(), o = gt("tooltip"), a = W();
    let s;
    const {
      controlled: i,
      id: l,
      open: u,
      trigger: d,
      onClose: m,
      onOpen: p,
      onShow: v,
      onHide: h,
      onBeforeShow: g,
      onBeforeHide: T
    } = Ve(Sl, void 0), f = I(() => n.transition || `${o.namespace.value}-fade-in-linear`), E = I(() => n.persistent);
    $n(() => {
      s?.();
    });
    const x = I(() => c(E) ? !0 : c(u)), S = I(() => n.disabled ? !1 : c(u)), b = I(() => n.appendTo || r.value), C = I(() => {
      var j;
      return (j = n.style) != null ? j : {};
    }), O = W(!0), D = () => {
      h(), Q() && Hn(document.body), O.value = !0;
    }, X = () => {
      if (c(i))
        return !0;
    }, ne = Wn(X, () => {
      n.enterable && c(d) === "hover" && p();
    }), fe = Wn(X, () => {
      c(d) === "hover" && m();
    }), re = () => {
      var j, q;
      (q = (j = a.value) == null ? void 0 : j.updatePopper) == null || q.call(j), g?.();
    }, pe = () => {
      T?.();
    }, ge = () => {
      v(), s = pb(I(() => {
        var j;
        return (j = a.value) == null ? void 0 : j.popperContentRef;
      }), () => {
        if (c(i))
          return;
        c(d) !== "hover" && m();
      });
    }, B = () => {
      n.virtualTriggering || m();
    }, Q = (j) => {
      var q;
      const z = (q = a.value) == null ? void 0 : q.popperContentRef, Se = j?.relatedTarget || document.activeElement;
      return z?.contains(Se);
    };
    return _e(() => c(u), (j) => {
      j ? O.value = !1 : s?.();
    }, {
      flush: "post"
    }), _e(() => n.content, () => {
      var j, q;
      (q = (j = a.value) == null ? void 0 : j.updatePopper) == null || q.call(j);
    }), t({
      contentRef: a,
      isFocusInsideContent: Q
    }), (j, q) => (P(), ie(c(nw), {
      disabled: !j.teleported,
      to: c(b)
    }, {
      default: se(() => [
        N(oo, {
          name: c(f),
          onAfterLeave: D,
          onBeforeEnter: re,
          onAfterEnter: ge,
          onBeforeLeave: pe
        }, {
          default: se(() => [
            c(x) ? kt((P(), ie(c(D_), Kr({
              key: 0,
              id: c(l),
              ref_key: "contentRef",
              ref: a
            }, j.$attrs, {
              "aria-label": j.ariaLabel,
              "aria-hidden": O.value,
              "boundaries-padding": j.boundariesPadding,
              "fallback-placements": j.fallbackPlacements,
              "gpu-acceleration": j.gpuAcceleration,
              offset: j.offset,
              placement: j.placement,
              "popper-options": j.popperOptions,
              strategy: j.strategy,
              effect: j.effect,
              enterable: j.enterable,
              pure: j.pure,
              "popper-class": j.popperClass,
              "popper-style": [j.popperStyle, c(C)],
              "reference-el": j.referenceEl,
              "trigger-target-el": j.triggerTargetEl,
              visible: c(S),
              "z-index": j.zIndex,
              onMouseenter: c(ne),
              onMouseleave: c(fe),
              onBlur: B,
              onClose: c(m)
            }), {
              default: se(() => [
                ye(j.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
              [er, c(S)]
            ]) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["name"])
      ]),
      _: 3
    }, 8, ["disabled", "to"]));
  }
});
var lw = /* @__PURE__ */ nt(sw, [["__file", "content.vue"]]);
const iw = oe({
  name: "ElTooltip"
}), cw = /* @__PURE__ */ oe({
  ...iw,
  props: K_,
  emits: q_,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    ow();
    const o = $a(), a = W(), s = W(), i = () => {
      var f;
      const E = c(a);
      E && ((f = E.popperInstanceRef) == null || f.update());
    }, l = W(!1), u = W(), { show: d, hide: m, hasUpdateHandler: p } = G_({
      indicator: l,
      toggleReason: u
    }), { onOpen: v, onClose: h } = B_({
      showAfter: Gn(r, "showAfter"),
      hideAfter: Gn(r, "hideAfter"),
      autoClose: Gn(r, "autoClose"),
      open: d,
      close: m
    }), g = I(() => mr(r.visible) && !p.value);
    Rn(Sl, {
      controlled: g,
      id: o,
      open: xs(l),
      trigger: Gn(r, "trigger"),
      onOpen: (f) => {
        v(f);
      },
      onClose: (f) => {
        h(f);
      },
      onToggle: (f) => {
        c(l) ? h(f) : v(f);
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
    }), _e(() => r.disabled, (f) => {
      f && l.value && (l.value = !1);
    });
    const T = (f) => {
      var E;
      return (E = s.value) == null ? void 0 : E.isFocusInsideContent(f);
    };
    return hf(() => l.value && m()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: T,
      updatePopper: i,
      onOpen: v,
      onClose: h,
      hide: m
    }), (f, E) => (P(), ie(c(F_), {
      ref_key: "popperRef",
      ref: a,
      role: f.role
    }, {
      default: se(() => [
        N(Q_, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: se(() => [
            f.$slots.default ? ye(f.$slots, "default", { key: 0 }) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        N(lw, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": f.ariaLabel,
          "boundaries-padding": f.boundariesPadding,
          content: f.content,
          disabled: f.disabled,
          effect: f.effect,
          enterable: f.enterable,
          "fallback-placements": f.fallbackPlacements,
          "hide-after": f.hideAfter,
          "gpu-acceleration": f.gpuAcceleration,
          offset: f.offset,
          persistent: f.persistent,
          "popper-class": f.popperClass,
          "popper-style": f.popperStyle,
          placement: f.placement,
          "popper-options": f.popperOptions,
          pure: f.pure,
          "raw-content": f.rawContent,
          "reference-el": f.referenceEl,
          "trigger-target-el": f.triggerTargetEl,
          "show-after": f.showAfter,
          strategy: f.strategy,
          teleported: f.teleported,
          transition: f.transition,
          "virtual-triggering": f.virtualTriggering,
          "z-index": f.zIndex,
          "append-to": f.appendTo
        }, {
          default: se(() => [
            ye(f.$slots, "content", {}, () => [
              f.rawContent ? (P(), K("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, ["innerHTML"])) : (P(), K("span", { key: 1 }, F(f.content), 1))
            ]),
            f.showArrow ? (P(), ie(c(Qy), {
              key: 0,
              "arrow-offset": f.arrowOffset
            }, null, 8, ["arrow-offset"])) : ee("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var uw = /* @__PURE__ */ nt(cw, [["__file", "tooltip.vue"]]);
const dw = bn(uw), fw = Je({
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
    type: he([String, Object, Array])
  },
  offset: {
    type: he(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), pw = oe({
  name: "ElBadge"
}), mw = /* @__PURE__ */ oe({
  ...pw,
  props: fw,
  setup(e, { expose: t }) {
    const n = e, r = gt("badge"), o = I(() => n.isDot ? "" : ze(n.value) && ze(n.max) ? n.max < n.value ? `${n.max}+` : `${n.value}` : `${n.value}`), a = I(() => {
      var s, i, l, u, d;
      return [
        {
          backgroundColor: n.color,
          marginRight: Xr(-((i = (s = n.offset) == null ? void 0 : s[0]) != null ? i : 0)),
          marginTop: Xr((u = (l = n.offset) == null ? void 0 : l[1]) != null ? u : 0)
        },
        (d = n.badgeStyle) != null ? d : {}
      ];
    });
    return t({
      content: o
    }), (s, i) => (P(), K("div", {
      class: Z(c(r).b())
    }, [
      ye(s.$slots, "default"),
      N(oo, {
        name: `${c(r).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: se(() => [
          kt(y("sup", {
            class: Z([
              c(r).e("content"),
              c(r).em("content", s.type),
              c(r).is("fixed", !!s.$slots.default),
              c(r).is("dot", s.isDot),
              c(r).is("hide-zero", !s.showZero && n.value === 0),
              s.badgeClass
            ]),
            style: It(c(a))
          }, [
            ye(s.$slots, "content", { value: c(o) }, () => [
              Zt(F(c(o)), 1)
            ])
          ], 6), [
            [er, !s.hidden && (c(o) || s.isDot || s.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var hw = /* @__PURE__ */ nt(mw, [["__file", "badge.vue"]]);
const gw = bn(hw), vw = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Cs = Je({
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
    values: ll
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), bw = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, yw = oe({
  name: "ElTag"
}), _w = /* @__PURE__ */ oe({
  ...yw,
  props: Cs,
  emits: bw,
  setup(e, { emit: t }) {
    const n = e, r = Do(), o = gt("tag"), a = I(() => {
      const { type: u, hit: d, effect: m, closable: p, round: v } = n;
      return [
        o.b(),
        o.is("closable", p),
        o.m(u || "primary"),
        o.m(r.value),
        o.m(m),
        o.is("hit", d),
        o.is("round", v)
      ];
    }), s = (u) => {
      t("close", u);
    }, i = (u) => {
      t("click", u);
    }, l = (u) => {
      var d, m, p;
      (p = (m = (d = u?.component) == null ? void 0 : d.subTree) == null ? void 0 : m.component) != null && p.bum && (u.component.subTree.component.bum = null);
    };
    return (u, d) => u.disableTransitions ? (P(), K("span", {
      key: 0,
      class: Z(c(a)),
      style: It({ backgroundColor: u.color }),
      onClick: i
    }, [
      y("span", {
        class: Z(c(o).e("content"))
      }, [
        ye(u.$slots, "default")
      ], 2),
      u.closable ? (P(), ie(c(mt), {
        key: 0,
        class: Z(c(o).e("close")),
        onClick: rt(s, ["stop"])
      }, {
        default: se(() => [
          N(c(ga))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ee("v-if", !0)
    ], 6)) : (P(), ie(oo, {
      key: 1,
      name: `${c(o).namespace.value}-zoom-in-center`,
      appear: "",
      onVnodeMounted: l
    }, {
      default: se(() => [
        y("span", {
          class: Z(c(a)),
          style: It({ backgroundColor: u.color }),
          onClick: i
        }, [
          y("span", {
            class: Z(c(o).e("content"))
          }, [
            ye(u.$slots, "default")
          ], 2),
          u.closable ? (P(), ie(c(mt), {
            key: 0,
            class: Z(c(o).e("close")),
            onClick: rt(s, ["stop"])
          }, {
            default: se(() => [
              N(c(ga))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var ww = /* @__PURE__ */ nt(_w, [["__file", "tag.vue"]]);
const kw = bn(ww), cr = /* @__PURE__ */ new Map();
if (ht) {
  let e;
  document.addEventListener("mousedown", (t) => e = t), document.addEventListener("mouseup", (t) => {
    if (e) {
      for (const n of cr.values())
        for (const { documentHandler: r } of n)
          r(t, e);
      e = void 0;
    }
  });
}
function Ec(e, t) {
  let n = [];
  return An(t.arg) ? n = t.arg : hn(t.arg) && n.push(t.arg), function(r, o) {
    const a = t.instance.popperRef, s = r.target, i = o?.target, l = !t || !t.instance, u = !s || !i, d = e.contains(s) || e.contains(i), m = e === s, p = n.length && n.some((h) => h?.contains(s)) || n.length && n.includes(i), v = a && (a.contains(s) || a.contains(i));
    l || u || d || m || p || v || t.value(r, o);
  };
}
const Tw = {
  beforeMount(e, t) {
    cr.has(e) || cr.set(e, []), cr.get(e).push({
      documentHandler: Ec(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    cr.has(e) || cr.set(e, []);
    const n = cr.get(e), r = n.findIndex((a) => a.bindingFn === t.oldValue), o = {
      documentHandler: Ec(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, o) : n.push(o);
  },
  unmounted(e) {
    cr.delete(e);
  }
}, Sw = Je({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: he(Object)
  },
  size: Na,
  button: {
    type: he(Object)
  },
  experimentalFeatures: {
    type: he(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: he(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...td
}), cn = {};
oe({
  name: "ElConfigProvider",
  props: Sw,
  setup(e, { slots: t }) {
    _e(() => e.message, (r) => {
      Object.assign(cn, r ?? {});
    }, { immediate: !0, deep: !0 });
    const n = od(e);
    return () => ye(t, "default", { config: n?.value });
  }
});
const Ew = 100, Aw = 600, Ac = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = Ew, delay: o = Aw } = at(n) ? {} : n;
    let a, s;
    const i = () => at(n) ? n() : n.handler(), l = () => {
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
}, Cw = Je({
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
  size: Na,
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
    validator: (e) => e === null || ze(e) || ["min", "max"].includes(e),
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
  ...Pr(["ariaLabel"])
}), Ow = {
  [tr]: (e, t) => t !== e,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [Jn]: (e) => ze(e) || Qn(e),
  [At]: (e) => ze(e) || Qn(e)
}, Lw = oe({
  name: "ElInputNumber"
}), Iw = /* @__PURE__ */ oe({
  ...Lw,
  props: Cw,
  emits: Ow,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: o } = sl(), a = gt("input-number"), s = W(), i = Er({
      currentValue: r.modelValue,
      userInput: null
    }), { formItem: l } = Ma(), u = I(() => ze(r.modelValue) && r.modelValue <= r.min), d = I(() => ze(r.modelValue) && r.modelValue >= r.max), m = I(() => {
      const B = f(r.step);
      return Cn(r.precision) ? Math.max(f(r.modelValue), B) : (B > r.precision, r.precision);
    }), p = I(() => r.controls && r.controlsPosition === "right"), v = Do(), h = dl(), g = I(() => {
      if (i.userInput !== null)
        return i.userInput;
      let B = i.currentValue;
      if (Qn(B))
        return "";
      if (ze(B)) {
        if (Number.isNaN(B))
          return "";
        Cn(r.precision) || (B = B.toFixed(r.precision));
      }
      return B;
    }), T = (B, Q) => {
      if (Cn(Q) && (Q = m.value), Q === 0)
        return Math.round(B);
      let j = String(B);
      const q = j.indexOf(".");
      if (q === -1 || !j.replace(".", "").split("")[q + Q])
        return B;
      const $e = j.length;
      return j.charAt($e - 1) === "5" && (j = `${j.slice(0, Math.max(0, $e - 1))}6`), Number.parseFloat(Number(j).toFixed(Q));
    }, f = (B) => {
      if (Qn(B))
        return 0;
      const Q = B.toString(), j = Q.indexOf(".");
      let q = 0;
      return j !== -1 && (q = Q.length - j - 1), q;
    }, E = (B, Q = 1) => ze(B) ? T(B + r.step * Q) : i.currentValue, x = () => {
      if (r.readonly || h.value || d.value)
        return;
      const B = Number(g.value) || 0, Q = E(B);
      C(Q), n(Jn, i.currentValue), pe();
    }, S = () => {
      if (r.readonly || h.value || u.value)
        return;
      const B = Number(g.value) || 0, Q = E(B, -1);
      C(Q), n(Jn, i.currentValue), pe();
    }, b = (B, Q) => {
      const { max: j, min: q, step: z, precision: Se, stepStrictly: $e, valueOnClear: Te } = r;
      j < q && al("InputNumber", "min should not be greater than max.");
      let me = Number(B);
      if (Qn(B) || Number.isNaN(me))
        return null;
      if (B === "") {
        if (Te === null)
          return null;
        me = Dt(Te) ? { min: q, max: j }[Te] : Te;
      }
      return $e && (me = T(Math.round(me / z) * z, Se), me !== B && Q && n(At, me)), Cn(Se) || (me = T(me, Se)), (me > j || me < q) && (me = me > j ? j : q, Q && n(At, me)), me;
    }, C = (B, Q = !0) => {
      var j;
      const q = i.currentValue, z = b(B);
      if (!Q) {
        n(At, z);
        return;
      }
      q === z && B || (i.userInput = null, n(At, z), q !== z && n(tr, z, q), r.validateEvent && ((j = l?.validate) == null || j.call(l, "change").catch((Se) => void 0)), i.currentValue = z);
    }, O = (B) => {
      i.userInput = B;
      const Q = B === "" ? null : Number(B);
      n(Jn, Q), C(Q, !1);
    }, D = (B) => {
      const Q = B !== "" ? Number(B) : "";
      (ze(Q) && !Number.isNaN(Q) || B === "") && C(Q), pe(), i.userInput = null;
    }, X = () => {
      var B, Q;
      (Q = (B = s.value) == null ? void 0 : B.focus) == null || Q.call(B);
    }, ne = () => {
      var B, Q;
      (Q = (B = s.value) == null ? void 0 : B.blur) == null || Q.call(B);
    }, fe = (B) => {
      n("focus", B);
    }, re = (B) => {
      var Q, j;
      i.userInput = null, ud() && i.currentValue === null && ((Q = s.value) != null && Q.input) && (s.value.input.value = ""), n("blur", B), r.validateEvent && ((j = l?.validate) == null || j.call(l, "blur").catch((q) => void 0));
    }, pe = () => {
      i.currentValue !== r.modelValue && (i.currentValue = r.modelValue);
    }, ge = (B) => {
      document.activeElement === B.target && B.preventDefault();
    };
    return _e(() => r.modelValue, (B, Q) => {
      const j = b(B, !0);
      i.userInput === null && j !== Q && (i.currentValue = j);
    }, { immediate: !0 }), ft(() => {
      var B;
      const { min: Q, max: j, modelValue: q } = r, z = (B = s.value) == null ? void 0 : B.input;
      if (z.setAttribute("role", "spinbutton"), Number.isFinite(j) ? z.setAttribute("aria-valuemax", String(j)) : z.removeAttribute("aria-valuemax"), Number.isFinite(Q) ? z.setAttribute("aria-valuemin", String(Q)) : z.removeAttribute("aria-valuemin"), z.setAttribute("aria-valuenow", i.currentValue || i.currentValue === 0 ? String(i.currentValue) : ""), z.setAttribute("aria-disabled", String(h.value)), !ze(q) && q != null) {
        let Se = Number(q);
        Number.isNaN(Se) && (Se = null), n(At, Se);
      }
      z.addEventListener("wheel", ge, { passive: !1 });
    }), Gc(() => {
      var B, Q;
      const j = (B = s.value) == null ? void 0 : B.input;
      j?.setAttribute("aria-valuenow", `${(Q = i.currentValue) != null ? Q : ""}`);
    }), t({
      focus: X,
      blur: ne
    }), (B, Q) => (P(), K("div", {
      class: Z([
        c(a).b(),
        c(a).m(c(v)),
        c(a).is("disabled", c(h)),
        c(a).is("without-controls", !B.controls),
        c(a).is("controls-right", c(p))
      ]),
      onDragstart: rt(() => {
      }, ["prevent"])
    }, [
      B.controls ? kt((P(), K("span", {
        key: 0,
        role: "button",
        "aria-label": c(o)("el.inputNumber.decrease"),
        class: Z([c(a).e("decrease"), c(a).is("disabled", c(u))]),
        onKeydown: tn(S, ["enter"])
      }, [
        ye(B.$slots, "decrease-icon", {}, () => [
          N(c(mt), null, {
            default: se(() => [
              c(p) ? (P(), ie(c(ld), { key: 0 })) : (P(), ie(c(ry), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Ac), S]
      ]) : ee("v-if", !0),
      B.controls ? kt((P(), K("span", {
        key: 1,
        role: "button",
        "aria-label": c(o)("el.inputNumber.increase"),
        class: Z([c(a).e("increase"), c(a).is("disabled", c(d))]),
        onKeydown: tn(x, ["enter"])
      }, [
        ye(B.$slots, "increase-icon", {}, () => [
          N(c(mt), null, {
            default: se(() => [
              c(p) ? (P(), ie(c(Hb), { key: 0 })) : (P(), ie(c(ay), { key: 1 }))
            ]),
            _: 1
          })
        ])
      ], 42, ["aria-label", "onKeydown"])), [
        [c(Ac), x]
      ]) : ee("v-if", !0),
      N(c(Iy), {
        id: B.id,
        ref_key: "input",
        ref: s,
        type: "number",
        step: B.step,
        "model-value": c(g),
        placeholder: B.placeholder,
        readonly: B.readonly,
        disabled: c(h),
        size: c(v),
        max: B.max,
        min: B.min,
        name: B.name,
        "aria-label": B.ariaLabel,
        "validate-event": !1,
        onKeydown: [
          tn(rt(x, ["prevent"]), ["up"]),
          tn(rt(S, ["prevent"]), ["down"])
        ],
        onBlur: re,
        onFocus: fe,
        onInput: O,
        onChange: D
      }, gf({
        _: 2
      }, [
        B.$slots.prefix ? {
          name: "prefix",
          fn: se(() => [
            ye(B.$slots, "prefix")
          ])
        } : void 0,
        B.$slots.suffix ? {
          name: "suffix",
          fn: se(() => [
            ye(B.$slots, "suffix")
          ])
        } : void 0
      ]), 1032, ["id", "step", "model-value", "placeholder", "readonly", "disabled", "size", "max", "min", "name", "aria-label", "onKeydown"])
    ], 42, ["onDragstart"]));
  }
});
var xw = /* @__PURE__ */ nt(Iw, [["__file", "input-number.vue"]]);
const Rw = bn(xw);
function Pw() {
  const e = pr(), t = W(0), n = 11, r = I(() => ({
    minWidth: `${Math.max(t.value, n)}px`
  }));
  return En(e, () => {
    var a, s;
    t.value = (s = (a = e.value) == null ? void 0 : a.getBoundingClientRect().width) != null ? s : 0;
  }), {
    calculatorRef: e,
    calculatorWidth: t,
    inputStyle: r
  };
}
const Fd = Symbol("ElSelectGroup"), Ba = Symbol("ElSelect");
function Nw(e, t) {
  const n = Ve(Ba), r = Ve(Fd, { disabled: !1 }), o = I(() => d(dr(n.props.modelValue), e.value)), a = I(() => {
    var v;
    if (n.props.multiple) {
      const h = dr((v = n.props.modelValue) != null ? v : []);
      return !o.value && h.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = I(() => e.label || (Xt(e.value) ? "" : e.value)), i = I(() => e.value || e.label || ""), l = I(() => e.disabled || t.groupDisabled || a.value), u = jt(), d = (v = [], h) => {
    if (Xt(e.value)) {
      const g = n.props.valueKey;
      return v && v.some((T) => vf(fr(T, g)) === fr(h, g));
    } else
      return v && v.includes(h);
  }, m = () => {
    !e.disabled && !r.disabled && (n.states.hoveringIndex = n.optionsArray.indexOf(u.proxy));
  }, p = (v) => {
    const h = new RegExp(vw(v), "i");
    t.visible = h.test(s.value) || e.created;
  };
  return _e(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), _e(() => e.value, (v, h) => {
    const { remote: g, valueKey: T } = n.props;
    if ((g ? v !== h : !_o(v, h)) && (n.onOptionDestroy(h, u.proxy), n.onOptionCreate(u.proxy)), !e.created && !g) {
      if (T && Xt(v) && Xt(h) && v[T] === h[T])
        return;
      n.setSelected();
    }
  }), _e(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: i,
    itemSelected: o,
    isDisabled: l,
    hoverItem: m,
    updateOption: p
  };
}
const $w = oe({
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
    const t = gt("select"), n = $a(), r = I(() => [
      t.be("dropdown", "item"),
      t.is("disabled", c(i)),
      t.is("selected", c(s)),
      t.is("hovering", c(p))
    ]), o = Er({
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
      updateOption: d
    } = Nw(e, o), { visible: m, hover: p } = Rs(o), v = jt().proxy;
    l.onOptionCreate(v), $n(() => {
      const g = v.value, { selected: T } = l.states, f = T.some((E) => E.value === v.value);
      ct(() => {
        l.states.cachedOptions.get(g) === v && !f && l.states.cachedOptions.delete(g);
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
      updateOption: d,
      visible: m,
      hover: p,
      selectOptionClick: h,
      states: o
    };
  }
});
function Mw(e, t, n, r, o, a) {
  return kt((P(), K("li", {
    id: e.id,
    class: Z(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMousemove: e.hoverItem,
    onClick: rt(e.selectOptionClick, ["stop"])
  }, [
    ye(e.$slots, "default", {}, () => [
      y("span", null, F(e.currentLabel), 1)
    ])
  ], 42, ["id", "aria-disabled", "aria-selected", "onMousemove", "onClick"])), [
    [er, e.visible]
  ]);
}
var Al = /* @__PURE__ */ nt($w, [["render", Mw], ["__file", "option.vue"]]);
const Dw = oe({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Ve(Ba), t = gt("select"), n = I(() => e.props.popperClass), r = I(() => e.props.multiple), o = I(() => e.props.fitInputWidth), a = W("");
    function s() {
      var i;
      a.value = `${(i = e.selectRef) == null ? void 0 : i.offsetWidth}px`;
    }
    return ft(() => {
      s(), En(e.selectRef, s);
    }), {
      ns: t,
      minWidth: a,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: o
    };
  }
});
function Fw(e, t, n, r, o, a) {
  return P(), K("div", {
    class: Z([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: It({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (P(), K("div", {
      key: 0,
      class: Z(e.ns.be("dropdown", "header"))
    }, [
      ye(e.$slots, "header")
    ], 2)) : ee("v-if", !0),
    ye(e.$slots, "default"),
    e.$slots.footer ? (P(), K("div", {
      key: 1,
      class: Z(e.ns.be("dropdown", "footer"))
    }, [
      ye(e.$slots, "footer")
    ], 2)) : ee("v-if", !0)
  ], 6);
}
var zw = /* @__PURE__ */ nt(Dw, [["render", Fw], ["__file", "select-dropdown.vue"]]);
const Bw = (e, t) => {
  const { t: n } = sl(), r = $a(), o = gt("select"), a = gt("input"), s = Er({
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
  }), i = W(null), l = W(null), u = W(null), d = W(null), m = W(null), p = W(null), v = W(null), h = W(null), g = W(null), T = W(null), f = W(null), {
    isComposing: E,
    handleCompositionStart: x,
    handleCompositionUpdate: S,
    handleCompositionEnd: b
  } = hd({
    afterComposition: (R) => We(R)
  }), { wrapperRef: C, isFocused: O, handleBlur: D } = md(m, {
    beforeFocus() {
      return Q.value;
    },
    afterFocus() {
      e.automaticDropdown && !X.value && (X.value = !0, s.menuVisibleOnFocus = !0);
    },
    beforeBlur(R) {
      var Y, ce;
      return ((Y = u.value) == null ? void 0 : Y.isFocusInsideContent(R)) || ((ce = d.value) == null ? void 0 : ce.isFocusInsideContent(R));
    },
    afterBlur() {
      X.value = !1, s.menuVisibleOnFocus = !1;
    }
  }), X = W(!1), ne = W(), { form: fe, formItem: re } = Ma(), { inputId: pe } = ul(e, {
    formItemContext: re
  }), { valueOnClear: ge, isEmptyValue: B } = $b(e), Q = I(() => e.disabled || fe?.disabled), j = I(() => An(e.modelValue) ? e.modelValue.length > 0 : !B(e.modelValue)), q = I(() => {
    var R;
    return (R = fe?.statusIcon) != null ? R : !1;
  }), z = I(() => e.clearable && !Q.value && s.inputHovering && j.value), Se = I(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), $e = I(() => o.is("reverse", Se.value && X.value)), Te = I(() => re?.validateState || ""), me = I(() => cd[Te.value]), G = I(() => e.remote ? 300 : 0), Ke = I(() => e.remote && !s.inputValue && s.options.size === 0), we = I(() => e.loading ? e.loadingText || n("el.select.loading") : e.filterable && s.inputValue && s.options.size > 0 && st.value === 0 ? e.noMatchText || n("el.select.noMatch") : s.options.size === 0 ? e.noDataText || n("el.select.noData") : null), st = I(() => de.value.filter((R) => R.visible).length), de = I(() => {
    const R = Array.from(s.options.values()), Y = [];
    return s.optionValues.forEach((ce) => {
      const Ye = R.findIndex((Ze) => Ze.value === ce);
      Ye > -1 && Y.push(R[Ye]);
    }), Y.length >= R.length ? Y : R;
  }), qe = I(() => Array.from(s.cachedOptions.values())), pt = I(() => {
    const R = de.value.filter((Y) => !Y.created).some((Y) => Y.currentLabel === s.inputValue);
    return e.filterable && e.allowCreate && s.inputValue !== "" && !R;
  }), et = () => {
    e.filterable && at(e.filterMethod) || e.filterable && e.remote && at(e.remoteMethod) || de.value.forEach((R) => {
      var Y;
      (Y = R.updateOption) == null || Y.call(R, s.inputValue);
    });
  }, Ct = Do(), bt = I(() => ["small"].includes(Ct.value) ? "small" : "default"), Tt = I({
    get() {
      return X.value && !Ke.value;
    },
    set(R) {
      X.value = R;
    }
  }), yt = I(() => {
    if (e.multiple && !Cn(e.modelValue))
      return dr(e.modelValue).length === 0 && !s.inputValue;
    const R = An(e.modelValue) ? e.modelValue[0] : e.modelValue;
    return e.filterable || Cn(R) ? !s.inputValue : !0;
  }), tt = I(() => {
    var R;
    const Y = (R = e.placeholder) != null ? R : n("el.select.placeholder");
    return e.multiple || !j.value ? Y : s.selectedLabel;
  }), _t = I(() => Ts ? null : "mouseenter");
  _e(() => e.modelValue, (R, Y) => {
    e.multiple && e.filterable && !e.reserveKeyword && (s.inputValue = "", w("")), M(), !_o(R, Y) && e.validateEvent && re?.validate("change").catch((ce) => void 0);
  }, {
    flush: "post",
    deep: !0
  }), _e(() => X.value, (R) => {
    R ? w(s.inputValue) : (s.inputValue = "", s.previousQuery = null, s.isBeforeHide = !0), t("visible-change", R);
  }), _e(() => s.options.entries(), () => {
    ht && (M(), e.defaultFirstOption && (e.filterable || e.remote) && st.value && A());
  }, {
    flush: "post"
  }), _e([() => s.hoveringIndex, de], ([R]) => {
    ze(R) && R > -1 ? ne.value = de.value[R] || {} : ne.value = {}, de.value.forEach((Y) => {
      Y.hover = ne.value === Y;
    });
  }), Wc(() => {
    s.isBeforeHide || et();
  });
  const w = (R) => {
    s.previousQuery === R || E.value || (s.previousQuery = R, e.filterable && at(e.filterMethod) ? e.filterMethod(R) : e.filterable && e.remote && at(e.remoteMethod) && e.remoteMethod(R), e.defaultFirstOption && (e.filterable || e.remote) && st.value ? ct(A) : ct(Ae));
  }, A = () => {
    const R = de.value.filter((Ze) => Ze.visible && !Ze.disabled && !Ze.states.groupDisabled), Y = R.find((Ze) => Ze.created), ce = R[0], Ye = de.value.map((Ze) => Ze.value);
    s.hoveringIndex = yn(Ye, Y || ce);
  }, M = () => {
    if (e.multiple)
      s.selectedLabel = "";
    else {
      const Y = An(e.modelValue) ? e.modelValue[0] : e.modelValue, ce = J(Y);
      s.selectedLabel = ce.currentLabel, s.selected = [ce];
      return;
    }
    const R = [];
    Cn(e.modelValue) || dr(e.modelValue).forEach((Y) => {
      R.push(J(Y));
    }), s.selected = R;
  }, J = (R) => {
    let Y;
    const ce = uh(R);
    for (let Me = s.cachedOptions.size - 1; Me >= 0; Me--) {
      const wt = qe.value[Me];
      if (ce ? fr(wt.value, e.valueKey) === fr(R, e.valueKey) : wt.value === R) {
        Y = {
          value: R,
          currentLabel: wt.currentLabel,
          get isDisabled() {
            return wt.isDisabled;
          }
        };
        break;
      }
    }
    if (Y)
      return Y;
    const Ye = ce ? R.label : R ?? "";
    return {
      value: R,
      currentLabel: Ye
    };
  }, Ae = () => {
    s.hoveringIndex = de.value.findIndex((R) => s.selected.some((Y) => je(Y) === je(R)));
  }, ue = () => {
    s.selectionWidth = l.value.getBoundingClientRect().width;
  }, k = () => {
    s.collapseItemWidth = T.value.getBoundingClientRect().width;
  }, $ = () => {
    var R, Y;
    (Y = (R = u.value) == null ? void 0 : R.updatePopper) == null || Y.call(R);
  }, ve = () => {
    var R, Y;
    (Y = (R = d.value) == null ? void 0 : R.updatePopper) == null || Y.call(R);
  }, Ce = () => {
    s.inputValue.length > 0 && !X.value && (X.value = !0), w(s.inputValue);
  }, We = (R) => {
    if (s.inputValue = R.target.value, e.remote)
      lt();
    else
      return Ce();
  }, lt = q0(() => {
    Ce();
  }, G.value), Ge = (R) => {
    _o(e.modelValue, R) || t(tr, R);
  }, Dn = (R) => Y0(R, (Y) => {
    const ce = s.cachedOptions.get(Y);
    return ce && !ce.disabled && !ce.states.groupDisabled;
  }), Fn = (R) => {
    if (e.multiple && R.code !== In.delete && R.target.value.length <= 0) {
      const Y = dr(e.modelValue).slice(), ce = Dn(Y);
      if (ce < 0)
        return;
      const Ye = Y[ce];
      Y.splice(ce, 1), t(At, Y), Ge(Y), t("remove-tag", Ye);
    }
  }, Nr = (R, Y) => {
    const ce = s.selected.indexOf(Y);
    if (ce > -1 && !Q.value) {
      const Ye = dr(e.modelValue).slice();
      Ye.splice(ce, 1), t(At, Ye), Ge(Ye), t("remove-tag", Y.value);
    }
    R.stopPropagation(), zn();
  }, Wt = (R) => {
    R.stopPropagation();
    const Y = e.multiple ? [] : ge.value;
    if (e.multiple)
      for (const ce of s.selected)
        ce.isDisabled && Y.push(ce.value);
    t(At, Y), Ge(Y), s.hoveringIndex = -1, X.value = !1, t("clear"), zn();
  }, ar = (R) => {
    var Y;
    if (e.multiple) {
      const ce = dr((Y = e.modelValue) != null ? Y : []).slice(), Ye = yn(ce, R);
      Ye > -1 ? ce.splice(Ye, 1) : (e.multipleLimit <= 0 || ce.length < e.multipleLimit) && ce.push(R.value), t(At, ce), Ge(ce), R.created && w(""), e.filterable && !e.reserveKeyword && (s.inputValue = "");
    } else
      t(At, R.value), Ge(R.value), X.value = !1;
    zn(), !X.value && ct(() => {
      sn(R);
    });
  }, yn = (R = [], Y) => Cn(Y) ? -1 : Xt(Y.value) ? R.findIndex((ce) => _o(fr(ce, e.valueKey), je(Y))) : R.indexOf(Y.value), sn = (R) => {
    var Y, ce, Ye, Ze, Me;
    const wt = An(R) ? R[0] : R;
    let Gt = null;
    if (wt?.value) {
      const ir = de.value.filter((Bo) => Bo.value === wt.value);
      ir.length > 0 && (Gt = ir[0].$el);
    }
    if (u.value && Gt) {
      const ir = (Ze = (Ye = (ce = (Y = u.value) == null ? void 0 : Y.popperRef) == null ? void 0 : ce.contentRef) == null ? void 0 : Ye.querySelector) == null ? void 0 : Ze.call(Ye, `.${o.be("dropdown", "wrap")}`);
      ir && Db(ir, Gt);
    }
    (Me = f.value) == null || Me.handleScroll();
  }, Ft = (R) => {
    s.options.set(R.value, R), s.cachedOptions.set(R.value, R);
  }, Jt = (R, Y) => {
    s.options.get(R) === Y && s.options.delete(R);
  }, sr = I(() => {
    var R, Y;
    return (Y = (R = u.value) == null ? void 0 : R.popperRef) == null ? void 0 : Y.contentRef;
  }), yr = () => {
    s.isBeforeHide = !1, ct(() => {
      var R;
      (R = f.value) == null || R.update(), sn(s.selected);
    });
  }, zn = () => {
    var R;
    (R = m.value) == null || R.focus();
  }, lr = () => {
    var R;
    if (X.value) {
      X.value = !1, ct(() => {
        var Y;
        return (Y = m.value) == null ? void 0 : Y.blur();
      });
      return;
    }
    (R = m.value) == null || R.blur();
  }, _r = (R) => {
    Wt(R);
  }, so = (R) => {
    if (X.value = !1, O.value) {
      const Y = new FocusEvent("focus", R);
      ct(() => D(Y));
    }
  }, Bn = () => {
    s.inputValue.length > 0 ? s.inputValue = "" : X.value = !1;
  }, $r = () => {
    Q.value || (Ts && (s.inputHovering = !0), s.menuVisibleOnFocus ? s.menuVisibleOnFocus = !1 : X.value = !X.value);
  }, Mr = () => {
    if (!X.value)
      $r();
    else {
      const R = de.value[s.hoveringIndex];
      R && !R.isDisabled && ar(R);
    }
  }, je = (R) => Xt(R.value) ? fr(R.value, e.valueKey) : R.value, L = I(() => de.value.filter((R) => R.visible).every((R) => R.isDisabled)), U = I(() => e.multiple ? e.collapseTags ? s.selected.slice(0, e.maxCollapseTags) : s.selected : []), H = I(() => e.multiple ? e.collapseTags ? s.selected.slice(e.maxCollapseTags) : [] : []), be = (R) => {
    if (!X.value) {
      X.value = !0;
      return;
    }
    if (!(s.options.size === 0 || st.value === 0 || E.value) && !L.value) {
      R === "next" ? (s.hoveringIndex++, s.hoveringIndex === s.options.size && (s.hoveringIndex = 0)) : R === "prev" && (s.hoveringIndex--, s.hoveringIndex < 0 && (s.hoveringIndex = s.options.size - 1));
      const Y = de.value[s.hoveringIndex];
      (Y.isDisabled || !Y.visible) && be(R), ct(() => sn(ne.value));
    }
  }, ke = () => {
    if (!l.value)
      return 0;
    const R = window.getComputedStyle(l.value);
    return Number.parseFloat(R.gap || "6px");
  }, Ie = I(() => {
    const R = ke();
    return { maxWidth: `${T.value && e.maxCollapseTags === 1 ? s.selectionWidth - s.collapseItemWidth - R : s.selectionWidth}px` };
  }), Oe = I(() => ({ maxWidth: `${s.selectionWidth}px` })), xe = (R) => {
    t("popup-scroll", R);
  };
  return En(l, ue), En(h, $), En(C, $), En(g, ve), En(T, k), ft(() => {
    M();
  }), {
    inputId: pe,
    contentId: r,
    nsSelect: o,
    nsInput: a,
    states: s,
    isFocused: O,
    expanded: X,
    optionsArray: de,
    hoverOption: ne,
    selectSize: Ct,
    filteredOptionsCount: st,
    updateTooltip: $,
    updateTagTooltip: ve,
    debouncedOnInputChange: lt,
    onInput: We,
    deletePrevTag: Fn,
    deleteTag: Nr,
    deleteSelected: Wt,
    handleOptionSelect: ar,
    scrollToOption: sn,
    hasModelValue: j,
    shouldShowPlaceholder: yt,
    currentPlaceholder: tt,
    mouseEnterEventName: _t,
    needStatusIcon: q,
    showClose: z,
    iconComponent: Se,
    iconReverse: $e,
    validateState: Te,
    validateIcon: me,
    showNewOption: pt,
    updateOptions: et,
    collapseTagSize: bt,
    setSelected: M,
    selectDisabled: Q,
    emptyText: we,
    handleCompositionStart: x,
    handleCompositionUpdate: S,
    handleCompositionEnd: b,
    onOptionCreate: Ft,
    onOptionDestroy: Jt,
    handleMenuEnter: yr,
    focus: zn,
    blur: lr,
    handleClearClick: _r,
    handleClickOutside: so,
    handleEsc: Bn,
    toggleMenu: $r,
    selectOption: Mr,
    getValueKey: je,
    navigateOptions: be,
    dropdownMenuVisible: Tt,
    showTagList: U,
    collapseTagList: H,
    popupScroll: xe,
    tagStyle: Ie,
    collapseTagStyle: Oe,
    popperRef: sr,
    inputRef: m,
    tooltipRef: u,
    tagTooltipRef: d,
    prefixRef: p,
    suffixRef: v,
    selectRef: i,
    wrapperRef: C,
    selectionRef: l,
    scrollbarRef: f,
    menuRef: h,
    tagMenuRef: g,
    collapseItemRef: T
  };
};
var Vw = oe({
  name: "ElOptions",
  setup(e, { slots: t }) {
    const n = Ve(Ba);
    let r = [];
    return () => {
      var o, a;
      const s = (o = t.default) == null ? void 0 : o.call(t), i = [];
      function l(u) {
        An(u) && u.forEach((d) => {
          var m, p, v, h;
          const g = (m = d?.type || {}) == null ? void 0 : m.name;
          g === "ElOptionGroup" ? l(!Dt(d.children) && !An(d.children) && at((p = d.children) == null ? void 0 : p.default) ? (v = d.children) == null ? void 0 : v.default() : d.children) : g === "ElOption" ? i.push((h = d.props) == null ? void 0 : h.value) : An(d.children) && l(d.children);
        });
      }
      return s.length && l((a = s[0]) == null ? void 0 : a.children), _o(i, r) || (r = i, n && (n.states.optionValues = i)), s;
    };
  }
});
const jw = Je({
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
  size: Na,
  effect: {
    type: he(String),
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
    type: he(Object),
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
  teleported: El.teleported,
  persistent: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: On,
    default: il
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: On,
    default: ld
  },
  tagType: { ...Cs.type, default: "info" },
  tagEffect: { ...Cs.effect, default: "light" },
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
    type: he(String),
    values: Fa,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: he(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: String,
  ...td,
  ...Pr(["ariaLabel"])
}), Cc = "ElSelect", Uw = oe({
  name: Cc,
  componentName: Cc,
  components: {
    ElSelectMenu: zw,
    ElOption: Al,
    ElOptions: Vw,
    ElTag: kw,
    ElScrollbar: Wy,
    ElTooltip: dw,
    ElIcon: mt
  },
  directives: { ClickOutside: Tw },
  props: jw,
  emits: [
    At,
    tr,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(e, { emit: t }) {
    const n = I(() => {
      const { modelValue: l, multiple: u } = e, d = u ? [] : void 0;
      return An(l) ? u ? l : d : u ? d : l;
    }), r = Er({
      ...Rs(e),
      modelValue: n
    }), o = Bw(r, t), { calculatorRef: a, inputStyle: s } = Pw();
    Rn(Ba, Er({
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
function Hw(e, t, n, r, o, a) {
  const s = wr("el-tag"), i = wr("el-tooltip"), l = wr("el-icon"), u = wr("el-option"), d = wr("el-options"), m = wr("el-scrollbar"), p = wr("el-select-menu"), v = bf("click-outside");
  return kt((P(), K("div", {
    ref: "selectRef",
    class: Z([e.nsSelect.b(), e.nsSelect.m(e.selectSize)]),
    [yf(e.mouseEnterEventName)]: (h) => e.states.inputHovering = !0,
    onMouseleave: (h) => e.states.inputHovering = !1
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
      onHide: (h) => e.states.isBeforeHide = !1
    }, {
      default: se(() => {
        var h;
        return [
          y("div", {
            ref: "wrapperRef",
            class: Z([
              e.nsSelect.e("wrapper"),
              e.nsSelect.is("focused", e.isFocused),
              e.nsSelect.is("hovering", e.states.inputHovering),
              e.nsSelect.is("filterable", e.filterable),
              e.nsSelect.is("disabled", e.selectDisabled)
            ]),
            onClick: rt(e.toggleMenu, ["prevent"])
          }, [
            e.$slots.prefix ? (P(), K("div", {
              key: 0,
              ref: "prefixRef",
              class: Z(e.nsSelect.e("prefix"))
            }, [
              ye(e.$slots, "prefix")
            ], 2)) : ee("v-if", !0),
            y("div", {
              ref: "selectionRef",
              class: Z([
                e.nsSelect.e("selection"),
                e.nsSelect.is("near", e.multiple && !e.$slots.prefix && !!e.states.selected.length)
              ])
            }, [
              e.multiple ? ye(e.$slots, "tag", { key: 0 }, () => [
                (P(!0), K(Lt, null, Tr(e.showTagList, (g) => (P(), K("div", {
                  key: e.getValueKey(g),
                  class: Z(e.nsSelect.e("selected-item"))
                }, [
                  N(s, {
                    closable: !e.selectDisabled && !g.isDisabled,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    effect: e.tagEffect,
                    "disable-transitions": "",
                    style: It(e.tagStyle),
                    onClose: (T) => e.deleteTag(T, g)
                  }, {
                    default: se(() => [
                      y("span", {
                        class: Z(e.nsSelect.e("tags-text"))
                      }, [
                        ye(e.$slots, "label", {
                          label: g.currentLabel,
                          value: g.value
                        }, () => [
                          Zt(F(g.currentLabel), 1)
                        ])
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                ], 2))), 128)),
                e.collapseTags && e.states.selected.length > e.maxCollapseTags ? (P(), ie(i, {
                  key: 0,
                  ref: "tagTooltipRef",
                  disabled: e.dropdownMenuVisible || !e.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  effect: e.effect,
                  placement: "bottom",
                  teleported: e.teleported
                }, {
                  default: se(() => [
                    y("div", {
                      ref: "collapseItemRef",
                      class: Z(e.nsSelect.e("selected-item"))
                    }, [
                      N(s, {
                        closable: !1,
                        size: e.collapseTagSize,
                        type: e.tagType,
                        effect: e.tagEffect,
                        "disable-transitions": "",
                        style: It(e.collapseTagStyle)
                      }, {
                        default: se(() => [
                          y("span", {
                            class: Z(e.nsSelect.e("tags-text"))
                          }, " + " + F(e.states.selected.length - e.maxCollapseTags), 3)
                        ]),
                        _: 1
                      }, 8, ["size", "type", "effect", "style"])
                    ], 2)
                  ]),
                  content: se(() => [
                    y("div", {
                      ref: "tagMenuRef",
                      class: Z(e.nsSelect.e("selection"))
                    }, [
                      (P(!0), K(Lt, null, Tr(e.collapseTagList, (g) => (P(), K("div", {
                        key: e.getValueKey(g),
                        class: Z(e.nsSelect.e("selected-item"))
                      }, [
                        N(s, {
                          class: "in-tooltip",
                          closable: !e.selectDisabled && !g.isDisabled,
                          size: e.collapseTagSize,
                          type: e.tagType,
                          effect: e.tagEffect,
                          "disable-transitions": "",
                          onClose: (T) => e.deleteTag(T, g)
                        }, {
                          default: se(() => [
                            y("span", {
                              class: Z(e.nsSelect.e("tags-text"))
                            }, [
                              ye(e.$slots, "label", {
                                label: g.currentLabel,
                                value: g.value
                              }, () => [
                                Zt(F(g.currentLabel), 1)
                              ])
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["closable", "size", "type", "effect", "onClose"])
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 3
                }, 8, ["disabled", "effect", "teleported"])) : ee("v-if", !0)
              ]) : ee("v-if", !0),
              y("div", {
                class: Z([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("input-wrapper"),
                  e.nsSelect.is("hidden", !e.filterable)
                ])
              }, [
                kt(y("input", {
                  id: e.inputId,
                  ref: "inputRef",
                  "onUpdate:modelValue": (g) => e.states.inputValue = g,
                  type: "text",
                  name: e.name,
                  class: Z([e.nsSelect.e("input"), e.nsSelect.is(e.selectSize)]),
                  disabled: e.selectDisabled,
                  autocomplete: e.autocomplete,
                  style: It(e.inputStyle),
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
                    tn(rt((g) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"]),
                    tn(rt((g) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"]),
                    tn(rt(e.handleEsc, ["stop", "prevent"]), ["esc"]),
                    tn(rt(e.selectOption, ["stop", "prevent"]), ["enter"]),
                    tn(rt(e.deletePrevTag, ["stop"]), ["delete"])
                  ],
                  onCompositionstart: e.handleCompositionStart,
                  onCompositionupdate: e.handleCompositionUpdate,
                  onCompositionend: e.handleCompositionEnd,
                  onInput: e.onInput,
                  onClick: rt(e.toggleMenu, ["stop"])
                }, null, 46, ["id", "onUpdate:modelValue", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label", "onKeydown", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onInput", "onClick"]), [
                  [To, e.states.inputValue]
                ]),
                e.filterable ? (P(), K("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: Z(e.nsSelect.e("input-calculator")),
                  textContent: F(e.states.inputValue)
                }, null, 10, ["textContent"])) : ee("v-if", !0)
              ], 2),
              e.shouldShowPlaceholder ? (P(), K("div", {
                key: 1,
                class: Z([
                  e.nsSelect.e("selected-item"),
                  e.nsSelect.e("placeholder"),
                  e.nsSelect.is("transparent", !e.hasModelValue || e.expanded && !e.states.inputValue)
                ])
              }, [
                e.hasModelValue ? ye(e.$slots, "label", {
                  key: 0,
                  label: e.currentPlaceholder,
                  value: e.modelValue
                }, () => [
                  y("span", null, F(e.currentPlaceholder), 1)
                ]) : (P(), K("span", { key: 1 }, F(e.currentPlaceholder), 1))
              ], 2)) : ee("v-if", !0)
            ], 2),
            y("div", {
              ref: "suffixRef",
              class: Z(e.nsSelect.e("suffix"))
            }, [
              e.iconComponent && !e.showClose ? (P(), ie(l, {
                key: 0,
                class: Z([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: se(() => [
                  (P(), ie(Bt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0),
              e.showClose && e.clearIcon ? (P(), ie(l, {
                key: 1,
                class: Z([
                  e.nsSelect.e("caret"),
                  e.nsSelect.e("icon"),
                  e.nsSelect.e("clear")
                ]),
                onClick: e.handleClearClick
              }, {
                default: se(() => [
                  (P(), ie(Bt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : ee("v-if", !0),
              e.validateState && e.validateIcon && e.needStatusIcon ? (P(), ie(l, {
                key: 2,
                class: Z([
                  e.nsInput.e("icon"),
                  e.nsInput.e("validateIcon"),
                  e.nsInput.is("loading", e.validateState === "validating")
                ])
              }, {
                default: se(() => [
                  (P(), ie(Bt(e.validateIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ee("v-if", !0)
            ], 2)
          ], 10, ["onClick"])
        ];
      }),
      content: se(() => [
        N(p, { ref: "menuRef" }, {
          default: se(() => [
            e.$slots.header ? (P(), K("div", {
              key: 0,
              class: Z(e.nsSelect.be("dropdown", "header")),
              onClick: rt(() => {
              }, ["stop"])
            }, [
              ye(e.$slots, "header")
            ], 10, ["onClick"])) : ee("v-if", !0),
            kt(N(m, {
              id: e.contentId,
              ref: "scrollbarRef",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: Z([e.nsSelect.is("empty", e.filteredOptionsCount === 0)]),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical",
              onScroll: e.popupScroll
            }, {
              default: se(() => [
                e.showNewOption ? (P(), ie(u, {
                  key: 0,
                  value: e.states.inputValue,
                  created: !0
                }, null, 8, ["value"])) : ee("v-if", !0),
                N(d, null, {
                  default: se(() => [
                    ye(e.$slots, "default")
                  ]),
                  _: 3
                })
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
              [er, e.states.options.size > 0 && !e.loading]
            ]),
            e.$slots.loading && e.loading ? (P(), K("div", {
              key: 1,
              class: Z(e.nsSelect.be("dropdown", "loading"))
            }, [
              ye(e.$slots, "loading")
            ], 2)) : e.loading || e.filteredOptionsCount === 0 ? (P(), K("div", {
              key: 2,
              class: Z(e.nsSelect.be("dropdown", "empty"))
            }, [
              ye(e.$slots, "empty", {}, () => [
                y("span", null, F(e.emptyText), 1)
              ])
            ], 2)) : ee("v-if", !0),
            e.$slots.footer ? (P(), K("div", {
              key: 3,
              class: Z(e.nsSelect.be("dropdown", "footer")),
              onClick: rt(() => {
              }, ["stop"])
            }, [
              ye(e.$slots, "footer")
            ], 10, ["onClick"])) : ee("v-if", !0)
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
var Ww = /* @__PURE__ */ nt(Uw, [["render", Hw], ["__file", "select.vue"]]);
const Gw = oe({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = gt("select"), n = W(null), r = jt(), o = W([]);
    Rn(Fd, Er({
      ...Rs(e)
    }));
    const a = I(() => o.value.some((u) => u.visible === !0)), s = (u) => {
      var d, m;
      return ((d = u.type) == null ? void 0 : d.name) === "ElOption" && !!((m = u.component) != null && m.proxy);
    }, i = (u) => {
      const d = dr(u), m = [];
      return d.forEach((p) => {
        var v, h;
        s(p) ? m.push(p.component.proxy) : (v = p.children) != null && v.length ? m.push(...i(p.children)) : (h = p.component) != null && h.subTree && m.push(...i(p.component.subTree));
      }), m;
    }, l = () => {
      o.value = i(r.subTree);
    };
    return ft(() => {
      l();
    }), _b(n, l, {
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
function Kw(e, t, n, r, o, a) {
  return kt((P(), K("ul", {
    ref: "groupRef",
    class: Z(e.ns.be("group", "wrap"))
  }, [
    y("li", {
      class: Z(e.ns.be("group", "title"))
    }, F(e.label), 3),
    y("li", null, [
      y("ul", {
        class: Z(e.ns.b("group"))
      }, [
        ye(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [er, e.visible]
  ]);
}
var zd = /* @__PURE__ */ nt(Gw, [["render", Kw], ["__file", "option-group.vue"]]);
const qw = bn(Ww, {
  Option: Al,
  OptionGroup: zd
}), Yw = sd(Al);
sd(zd);
const Zw = (e) => ["", ...ll].includes(e), Xw = Je({
  modelValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String,
    validator: Zw
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: Boolean,
  inactiveActionIcon: {
    type: On
  },
  activeActionIcon: {
    type: On
  },
  activeIcon: {
    type: On
  },
  inactiveIcon: {
    type: On
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
    type: he(Function)
  },
  id: String,
  tabindex: {
    type: [String, Number]
  },
  ...Pr(["ariaLabel"])
}), Qw = {
  [At]: (e) => mr(e) || Dt(e) || ze(e),
  [tr]: (e) => mr(e) || Dt(e) || ze(e),
  [Jn]: (e) => mr(e) || Dt(e) || ze(e)
}, Bd = "ElSwitch", Jw = oe({
  name: Bd
}), ek = /* @__PURE__ */ oe({
  ...Jw,
  props: Xw,
  emits: Qw,
  setup(e, { expose: t, emit: n }) {
    const r = e, { formItem: o } = Ma(), a = Do(), s = gt("switch"), { inputId: i } = ul(r, {
      formItemContext: o
    }), l = dl(I(() => r.loading)), u = W(r.modelValue !== !1), d = W(), m = W(), p = I(() => [
      s.b(),
      s.m(a.value),
      s.is("disabled", l.value),
      s.is("checked", f.value)
    ]), v = I(() => [
      s.e("label"),
      s.em("label", "left"),
      s.is("active", !f.value)
    ]), h = I(() => [
      s.e("label"),
      s.em("label", "right"),
      s.is("active", f.value)
    ]), g = I(() => ({
      width: Xr(r.width)
    }));
    _e(() => r.modelValue, () => {
      u.value = !0;
    });
    const T = I(() => u.value ? r.modelValue : !1), f = I(() => T.value === r.activeValue);
    [r.activeValue, r.inactiveValue].includes(T.value) || (n(At, r.inactiveValue), n(tr, r.inactiveValue), n(Jn, r.inactiveValue)), _e(f, (b) => {
      var C;
      d.value.checked = b, r.validateEvent && ((C = o?.validate) == null || C.call(o, "change").catch((O) => void 0));
    });
    const E = () => {
      const b = f.value ? r.inactiveValue : r.activeValue;
      n(At, b), n(tr, b), n(Jn, b), ct(() => {
        d.value.checked = f.value;
      });
    }, x = () => {
      if (l.value)
        return;
      const { beforeChange: b } = r;
      if (!b) {
        E();
        return;
      }
      const C = b();
      [
        gi(C),
        mr(C)
      ].includes(!0) || al(Bd, "beforeChange must return type `Promise<boolean>` or `boolean`"), gi(C) ? C.then((D) => {
        D && E();
      }).catch((D) => {
      }) : C && E();
    }, S = () => {
      var b, C;
      (C = (b = d.value) == null ? void 0 : b.focus) == null || C.call(b);
    };
    return ft(() => {
      d.value.checked = f.value;
    }), t({
      focus: S,
      checked: f
    }), (b, C) => (P(), K("div", {
      class: Z(c(p)),
      onClick: rt(x, ["prevent"])
    }, [
      y("input", {
        id: c(i),
        ref_key: "input",
        ref: d,
        class: Z(c(s).e("input")),
        type: "checkbox",
        role: "switch",
        "aria-checked": c(f),
        "aria-disabled": c(l),
        "aria-label": b.ariaLabel,
        name: b.name,
        "true-value": b.activeValue,
        "false-value": b.inactiveValue,
        disabled: c(l),
        tabindex: b.tabindex,
        onChange: E,
        onKeydown: tn(x, ["enter"])
      }, null, 42, ["id", "aria-checked", "aria-disabled", "aria-label", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"]),
      !b.inlinePrompt && (b.inactiveIcon || b.inactiveText) ? (P(), K("span", {
        key: 0,
        class: Z(c(v))
      }, [
        b.inactiveIcon ? (P(), ie(c(mt), { key: 0 }, {
          default: se(() => [
            (P(), ie(Bt(b.inactiveIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !b.inactiveIcon && b.inactiveText ? (P(), K("span", {
          key: 1,
          "aria-hidden": c(f)
        }, F(b.inactiveText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0),
      y("span", {
        ref_key: "core",
        ref: m,
        class: Z(c(s).e("core")),
        style: It(c(g))
      }, [
        b.inlinePrompt ? (P(), K("div", {
          key: 0,
          class: Z(c(s).e("inner"))
        }, [
          b.activeIcon || b.inactiveIcon ? (P(), ie(c(mt), {
            key: 0,
            class: Z(c(s).is("icon"))
          }, {
            default: se(() => [
              (P(), ie(Bt(c(f) ? b.activeIcon : b.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : b.activeText || b.inactiveText ? (P(), K("span", {
            key: 1,
            class: Z(c(s).is("text")),
            "aria-hidden": !c(f)
          }, F(c(f) ? b.activeText : b.inactiveText), 11, ["aria-hidden"])) : ee("v-if", !0)
        ], 2)) : ee("v-if", !0),
        y("div", {
          class: Z(c(s).e("action"))
        }, [
          b.loading ? (P(), ie(c(mt), {
            key: 0,
            class: Z(c(s).is("loading"))
          }, {
            default: se(() => [
              N(c(id))
            ]),
            _: 1
          }, 8, ["class"])) : c(f) ? ye(b.$slots, "active-action", { key: 1 }, () => [
            b.activeActionIcon ? (P(), ie(c(mt), { key: 0 }, {
              default: se(() => [
                (P(), ie(Bt(b.activeActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ]) : c(f) ? ee("v-if", !0) : ye(b.$slots, "inactive-action", { key: 2 }, () => [
            b.inactiveActionIcon ? (P(), ie(c(mt), { key: 0 }, {
              default: se(() => [
                (P(), ie(Bt(b.inactiveActionIcon)))
              ]),
              _: 1
            })) : ee("v-if", !0)
          ])
        ], 2)
      ], 6),
      !b.inlinePrompt && (b.activeIcon || b.activeText) ? (P(), K("span", {
        key: 1,
        class: Z(c(h))
      }, [
        b.activeIcon ? (P(), ie(c(mt), { key: 0 }, {
          default: se(() => [
            (P(), ie(Bt(b.activeIcon)))
          ]),
          _: 1
        })) : ee("v-if", !0),
        !b.activeIcon && b.activeText ? (P(), K("span", {
          key: 1,
          "aria-hidden": !c(f)
        }, F(b.activeText), 9, ["aria-hidden"])) : ee("v-if", !0)
      ], 2)) : ee("v-if", !0)
    ], 10, ["onClick"]));
  }
});
var tk = /* @__PURE__ */ nt(ek, [["__file", "switch.vue"]]);
const nk = bn(tk), Vd = ["success", "info", "warning", "error"], Pt = dd({
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
  appendTo: ht ? document.body : void 0
}), rk = Je({
  customClass: {
    type: String,
    default: Pt.customClass
  },
  center: {
    type: Boolean,
    default: Pt.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: Pt.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: Pt.duration
  },
  icon: {
    type: On,
    default: Pt.icon
  },
  id: {
    type: String,
    default: Pt.id
  },
  message: {
    type: he([
      String,
      Object,
      Function
    ]),
    default: Pt.message
  },
  onClose: {
    type: he(Function),
    default: Pt.onClose
  },
  showClose: {
    type: Boolean,
    default: Pt.showClose
  },
  type: {
    type: String,
    values: Vd,
    default: Pt.type
  },
  plain: {
    type: Boolean,
    default: Pt.plain
  },
  offset: {
    type: Number,
    default: Pt.offset
  },
  zIndex: {
    type: Number,
    default: Pt.zIndex
  },
  grouping: {
    type: Boolean,
    default: Pt.grouping
  },
  repeatNum: {
    type: Number,
    default: Pt.repeatNum
  }
}), ok = {
  destroy: () => !0
}, mn = _f([]), ak = (e) => {
  const t = mn.findIndex((o) => o.id === e), n = mn[t];
  let r;
  return t > 0 && (r = mn[t - 1]), { current: n, prev: r };
}, sk = (e) => {
  const { prev: t } = ak(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, lk = (e, t) => mn.findIndex((r) => r.id === e) > 0 ? 16 : t, ik = oe({
  name: "ElMessage"
}), ck = /* @__PURE__ */ oe({
  ...ik,
  props: rk,
  emits: ok,
  setup(e, { expose: t }) {
    const n = e, { Close: r } = py, { ns: o, zIndex: a } = rd("message"), { currentZIndex: s, nextZIndex: i } = a, l = W(), u = W(!1), d = W(0);
    let m;
    const p = I(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), v = I(() => {
      const O = n.type;
      return { [o.bm("icon", O)]: O && va[O] };
    }), h = I(() => n.icon || va[n.type] || ""), g = I(() => sk(n.id)), T = I(() => lk(n.id, n.offset) + g.value), f = I(() => d.value + T.value), E = I(() => ({
      top: `${T.value}px`,
      zIndex: s.value
    }));
    function x() {
      n.duration !== 0 && ({ stop: m } = Gu(() => {
        b();
      }, n.duration));
    }
    function S() {
      m?.();
    }
    function b() {
      u.value = !1;
    }
    function C({ code: O }) {
      O === In.esc && b();
    }
    return ft(() => {
      x(), i(), u.value = !0;
    }), _e(() => n.repeatNum, () => {
      S(), x();
    }), gn(document, "keydown", C), En(l, () => {
      d.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: u,
      bottom: f,
      close: b
    }), (O, D) => (P(), ie(oo, {
      name: c(o).b("fade"),
      onBeforeLeave: O.onClose,
      onAfterLeave: (X) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: se(() => [
        kt(y("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: l,
          class: Z([
            c(o).b(),
            { [c(o).m(O.type)]: O.type },
            c(o).is("center", O.center),
            c(o).is("closable", O.showClose),
            c(o).is("plain", O.plain),
            O.customClass
          ]),
          style: It(c(E)),
          role: "alert",
          onMouseenter: S,
          onMouseleave: x
        }, [
          O.repeatNum > 1 ? (P(), ie(c(gw), {
            key: 0,
            value: O.repeatNum,
            type: c(p),
            class: Z(c(o).e("badge"))
          }, null, 8, ["value", "type", "class"])) : ee("v-if", !0),
          c(h) ? (P(), ie(c(mt), {
            key: 1,
            class: Z([c(o).e("icon"), c(v)])
          }, {
            default: se(() => [
              (P(), ie(Bt(c(h))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          ye(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (P(), K(Lt, { key: 1 }, [
              ee(" Caution here, message could've been compromised, never use user's input as message "),
              y("p", {
                class: Z(c(o).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (P(), K("p", {
              key: 0,
              class: Z(c(o).e("content"))
            }, F(O.message), 3))
          ]),
          O.showClose ? (P(), ie(c(mt), {
            key: 2,
            class: Z(c(o).e("closeBtn")),
            onClick: rt(b, ["stop"])
          }, {
            default: se(() => [
              N(c(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ee("v-if", !0)
        ], 46, ["id"]), [
          [er, u.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var uk = /* @__PURE__ */ nt(ck, [["__file", "message.vue"]]);
let dk = 1;
const jd = (e) => {
  const t = !e || Dt(e) || So(e) || at(e) ? { message: e } : e, n = {
    ...Pt,
    ...t
  };
  if (!n.appendTo)
    n.appendTo = document.body;
  else if (Dt(n.appendTo)) {
    let r = document.querySelector(n.appendTo);
    hn(r) || (r = document.body), n.appendTo = r;
  }
  return mr(cn.grouping) && !n.grouping && (n.grouping = cn.grouping), ze(cn.duration) && n.duration === 3e3 && (n.duration = cn.duration), ze(cn.offset) && n.offset === 16 && (n.offset = cn.offset), mr(cn.showClose) && !n.showClose && (n.showClose = cn.showClose), n;
}, fk = (e) => {
  const t = mn.indexOf(e);
  if (t === -1)
    return;
  mn.splice(t, 1);
  const { handler: n } = e;
  n.close();
}, pk = ({ appendTo: e, ...t }, n) => {
  const r = `message_${dk++}`, o = t.onClose, a = document.createElement("div"), s = {
    ...t,
    id: r,
    onClose: () => {
      o?.(), fk(d);
    },
    onDestroy: () => {
      sa(null, a);
    }
  }, i = N(uk, s, at(s.message) || So(s.message) ? {
    default: at(s.message) ? s.message : () => s.message
  } : null);
  i.appContext = n || no._context, sa(i, a), e.appendChild(a.firstElementChild);
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
}, no = (e = {}, t) => {
  if (!ht)
    return { close: () => {
    } };
  const n = jd(e);
  if (n.grouping && mn.length) {
    const o = mn.find(({ vnode: a }) => {
      var s;
      return ((s = a.props) == null ? void 0 : s.message) === n.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = n.type, o.handler;
  }
  if (ze(cn.max) && mn.length >= cn.max)
    return { close: () => {
    } };
  const r = pk(n, t);
  return mn.push(r), r.handler;
};
Vd.forEach((e) => {
  no[e] = (t = {}, n) => {
    const r = jd(t);
    return no({ ...r, type: e }, n);
  };
});
function mk(e) {
  for (const t of mn)
    (!e || e === t.props.type) && t.handler.close();
}
no.closeAll = mk;
no._context = null;
const hk = ad(no, "$message"), Ud = [
  "success",
  "info",
  "warning",
  "error"
], gk = Je({
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
    type: he([
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
    type: he(Function),
    default: () => {
    }
  },
  onClose: {
    type: he(Function),
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
    values: [...Ud, ""],
    default: ""
  },
  zIndex: Number
}), vk = {
  destroy: () => !0
}, bk = oe({
  name: "ElNotification"
}), yk = /* @__PURE__ */ oe({
  ...bk,
  props: gk,
  emits: vk,
  setup(e, { expose: t }) {
    const n = e, { ns: r, zIndex: o } = rd("notification"), { nextZIndex: a, currentZIndex: s } = o, { Close: i } = fy, l = W(!1);
    let u;
    const d = I(() => {
      const x = n.type;
      return x && va[n.type] ? r.m(x) : "";
    }), m = I(() => n.type && va[n.type] || n.icon), p = I(() => n.position.endsWith("right") ? "right" : "left"), v = I(() => n.position.startsWith("top") ? "top" : "bottom"), h = I(() => {
      var x;
      return {
        [v.value]: `${n.offset}px`,
        zIndex: (x = n.zIndex) != null ? x : s.value
      };
    });
    function g() {
      n.duration > 0 && ({ stop: u } = Gu(() => {
        l.value && f();
      }, n.duration));
    }
    function T() {
      u?.();
    }
    function f() {
      l.value = !1;
    }
    function E({ code: x }) {
      x === In.delete || x === In.backspace ? T() : x === In.esc ? l.value && f() : g();
    }
    return ft(() => {
      g(), a(), l.value = !0;
    }), gn(document, "keydown", E), t({
      visible: l,
      close: f
    }), (x, S) => (P(), ie(oo, {
      name: c(r).b("fade"),
      onBeforeLeave: x.onClose,
      onAfterLeave: (b) => x.$emit("destroy"),
      persisted: ""
    }, {
      default: se(() => [
        kt(y("div", {
          id: x.id,
          class: Z([c(r).b(), x.customClass, c(p)]),
          style: It(c(h)),
          role: "alert",
          onMouseenter: T,
          onMouseleave: g,
          onClick: x.onClick
        }, [
          c(m) ? (P(), ie(c(mt), {
            key: 0,
            class: Z([c(r).e("icon"), c(d)])
          }, {
            default: se(() => [
              (P(), ie(Bt(c(m))))
            ]),
            _: 1
          }, 8, ["class"])) : ee("v-if", !0),
          y("div", {
            class: Z(c(r).e("group"))
          }, [
            y("h2", {
              class: Z(c(r).e("title")),
              textContent: F(x.title)
            }, null, 10, ["textContent"]),
            kt(y("div", {
              class: Z(c(r).e("content")),
              style: It(x.title ? void 0 : { margin: 0 })
            }, [
              ye(x.$slots, "default", {}, () => [
                x.dangerouslyUseHTMLString ? (P(), K(Lt, { key: 1 }, [
                  ee(" Caution here, message could've been compromised, never use user's input as message "),
                  y("p", { innerHTML: x.message }, null, 8, ["innerHTML"])
                ], 2112)) : (P(), K("p", { key: 0 }, F(x.message), 1))
              ])
            ], 6), [
              [er, x.message]
            ]),
            x.showClose ? (P(), ie(c(mt), {
              key: 0,
              class: Z(c(r).e("closeBtn")),
              onClick: rt(f, ["stop"])
            }, {
              default: se(() => [
                N(c(i))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : ee("v-if", !0)
          ], 2)
        ], 46, ["id", "onClick"]), [
          [er, l.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave", "onAfterLeave"]));
  }
});
var _k = /* @__PURE__ */ nt(yk, [["__file", "notification.vue"]]);
const _a = {
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  "bottom-right": []
}, Os = 16;
let wk = 1;
const ro = function(e = {}, t) {
  if (!ht)
    return { close: () => {
    } };
  (Dt(e) || So(e)) && (e = { message: e });
  const n = e.position || "top-right";
  let r = e.offset || 0;
  _a[n].forEach(({ vm: d }) => {
    var m;
    r += (((m = d.el) == null ? void 0 : m.offsetHeight) || 0) + Os;
  }), r += Os;
  const o = `notification_${wk++}`, a = e.onClose, s = {
    ...e,
    offset: r,
    id: o,
    onClose: () => {
      kk(o, n, a);
    }
  };
  let i = document.body;
  hn(e.appendTo) ? i = e.appendTo : Dt(e.appendTo) && (i = document.querySelector(e.appendTo)), hn(i) || (i = document.body);
  const l = document.createElement("div"), u = N(_k, s, at(s.message) ? s.message : So(s.message) ? () => s.message : null);
  return u.appContext = Cn(t) ? ro._context : t, u.props.onDestroy = () => {
    sa(null, l);
  }, sa(u, l), _a[n].push({ vm: u }), i.appendChild(l.firstElementChild), {
    close: () => {
      u.component.exposed.visible.value = !1;
    }
  };
};
Ud.forEach((e) => {
  ro[e] = (t = {}, n) => ((Dt(t) || So(t)) && (t = {
    message: t
  }), ro({ ...t, type: e }, n));
});
function kk(e, t, n) {
  const r = _a[t], o = r.findIndex(({ vm: u }) => {
    var d;
    return ((d = u.component) == null ? void 0 : d.props.id) === e;
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
      const { el: d, component: m } = r[u].vm, p = Number.parseInt(d.style[i], 10) - s - Os;
      m.props.offset = p;
    }
}
function Tk() {
  for (const e of Object.values(_a))
    e.forEach(({ vm: t }) => {
      t.component.exposed.visible.value = !1;
    });
}
ro.closeAll = Tk;
ro._context = null;
const Sk = ad(ro, "$notify"), Mt = {
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
    r === "center" ? hk({
      message: t,
      type: n,
      duration: o,
      showClose: a,
      grouping: !0,
      customClass: `app-toast app-toast--${n}`
    }) : Sk({
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
function Ek(e, t = !1) {
  return window.__TAURI_INTERNALS__.transformCallback(e, t);
}
async function Rt(e, t = {}, n) {
  return window.__TAURI_INTERNALS__.invoke(e, t, n);
}
var Oc;
(function(e) {
  e.WINDOW_RESIZED = "tauri://resize", e.WINDOW_MOVED = "tauri://move", e.WINDOW_CLOSE_REQUESTED = "tauri://close-requested", e.WINDOW_DESTROYED = "tauri://destroyed", e.WINDOW_FOCUS = "tauri://focus", e.WINDOW_BLUR = "tauri://blur", e.WINDOW_SCALE_FACTOR_CHANGED = "tauri://scale-change", e.WINDOW_THEME_CHANGED = "tauri://theme-changed", e.WINDOW_CREATED = "tauri://window-created", e.WEBVIEW_CREATED = "tauri://webview-created", e.DRAG_ENTER = "tauri://drag-enter", e.DRAG_OVER = "tauri://drag-over", e.DRAG_DROP = "tauri://drag-drop", e.DRAG_LEAVE = "tauri://drag-leave";
})(Oc || (Oc = {}));
async function Ak(e, t) {
  await Rt("plugin:event|unlisten", {
    event: e,
    eventId: t
  });
}
async function Ck(e, t, n) {
  var r;
  const o = (r = void 0) !== null && r !== void 0 ? r : { kind: "Any" };
  return Rt("plugin:event|listen", {
    event: e,
    target: o,
    handler: Ek(t)
  }).then((a) => async () => Ak(e, a));
}
const Ok = "snippets-code:developer-mode", Hd = "snippets-code:frontend-diagnostics", Lk = 240, po = "[REDACTED]", oa = (e) => e.replace(
  /("(?:[^"]*(?:token|password|secret|authorization)[^"]*)"\s*:\s*)("(?:\\.|[^"])*"|[^,\r\n}\]]+)/gi,
  `$1"${po}"`
).replace(/\bBearer\s+[A-Za-z0-9._~+/=-]+/gi, `Bearer ${po}`).replace(
  /\b(?:gh[pousr]_[A-Za-z0-9_]{12,}|github_pat_[A-Za-z0-9_]{12,})\b/g,
  po
).replace(/(https?:\/\/)[^/\s@]+@/gi, `$1${po}@`).replace(
  /([?&][^=&\s]*(?:token|password|secret|authorization)[^=&\s]*=)[^&\s]+/gi,
  `$1${po}`
), Wd = (e) => {
  if (e === void 0) return;
  if (typeof e == "string") return oa(e);
  const t = /* @__PURE__ */ new WeakSet();
  try {
    return oa(
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
    return oa(String(e));
  }
}, Ik = () => {
  try {
    return globalThis.__TAURI_INTERNALS__?.metadata?.currentWindow?.label ?? "webview";
  } catch {
    return "webview";
  }
}, xk = () => {
  if (typeof localStorage > "u") return [];
  try {
    const e = JSON.parse(localStorage.getItem(Hd) || "[]");
    return Array.isArray(e) ? e : [];
  } catch {
    return [];
  }
}, Cl = () => {
  if (typeof localStorage > "u") return !1;
  try {
    return localStorage.getItem(Ok) === "true";
  } catch {
    return !1;
  }
}, Rk = (e, t, n) => {
  if (!Cl() || typeof localStorage > "u") return;
  const r = xk();
  r.push({
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    level: e,
    windowLabel: Ik(),
    message: oa(t),
    data: Wd(n)
  });
  try {
    localStorage.setItem(
      Hd,
      JSON.stringify(r.slice(-Lk))
    );
  } catch {
  }
}, Pk = () => Cl(), Nk = (e) => e === "warn" || e === "error" || !1 || !1 || Cl(), Xo = (e, t, n) => {
  Rk(e, t, n), Nk(e) && Rt("frontend_log", {
    level: e,
    message: t,
    data: n === void 0 ? null : Wd(n)
  }).catch(() => {
  });
}, un = {
  info: (e, t, ...n) => {
    Xo("info", e, t);
  },
  error: (e, t) => {
    Xo("error", e, t);
  },
  warn: (e, t) => {
    Xo("warn", e, t);
  },
  debug: (e, t) => {
    Pk() && Xo("debug", e, t);
  }
};
async function Gd() {
  return await Rt("local_ai_get_config");
}
async function aa(e) {
  return await Rt("local_ai_save_config", { config: e });
}
async function Kd(e) {
  return await Rt("local_ai_scan_models", {
    config: e ?? null
  });
}
async function $k() {
  return await Rt("local_ai_get_runtime_status");
}
async function qd() {
  return await Rt("local_ai_get_status");
}
async function Mk(e) {
  return await Rt("local_ai_start_service", {
    config: e ?? null
  });
}
async function Yd() {
  return await Rt("local_ai_restart_service");
}
async function Dk() {
  await Rt("local_ai_stop_service");
}
function Zd() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : `local-ai-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
async function Fk(e, t, n = {}) {
  const r = n.requestId ?? Zd(), o = await Ck(
    "local-ai-chat-stream",
    (a) => {
      const s = a.payload;
      s.requestId === r && (s.event === "delta" && s.content ? t(s.content) : s.event === "stats" && s.stats && n.onStats?.(s.stats));
    }
  );
  try {
    return await Rt("local_ai_chat_stream", {
      request: e,
      requestId: r
    });
  } finally {
    o();
  }
}
async function Qa(e) {
  return await Rt("local_ai_cancel_chat_stream", { requestId: e });
}
async function zk() {
  return await Rt("local_ai_get_chat_histories");
}
async function Bk(e) {
  return await Rt("local_ai_save_chat_history", {
    history: e
  });
}
async function Vk(e) {
  return await Rt("local_ai_delete_chat_history", {
    historyId: e
  });
}
/*! @license DOMPurify 3.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.7/LICENSE */
function Lc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function jk(e) {
  if (Array.isArray(e)) return e;
}
function Uk(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, s, i = [], l = !0, u = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(l = (r = a.call(n)).done) && (i.push(r.value), i.length !== t); l = !0) ;
    } catch (d) {
      u = !0, o = d;
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
function Hk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wk(e, t) {
  return jk(e) || Uk(e, t) || Gk(e, t) || Hk();
}
function Gk(e, t) {
  if (e) {
    if (typeof e == "string") return Lc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Lc(e, t) : void 0;
  }
}
const Xd = Object.entries, Ic = Object.setPrototypeOf, Kk = Object.isFrozen, qk = Object.getPrototypeOf, Yk = Object.getOwnPropertyDescriptor;
let Ut = Object.freeze, an = Object.seal, Wr = Object.create, Qd = typeof Reflect < "u" && Reflect, Ls = Qd.apply, Is = Qd.construct;
Ut || (Ut = function(t) {
  return t;
});
an || (an = function(t) {
  return t;
});
Ls || (Ls = function(t, n) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    o[a - 2] = arguments[a];
  return t.apply(n, o);
});
Is || (Is = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return new t(...r);
});
const Br = vt(Array.prototype.forEach), Zk = vt(Array.prototype.lastIndexOf), xc = vt(Array.prototype.pop), Vr = vt(Array.prototype.push), Xk = vt(Array.prototype.splice), zt = Array.isArray, vo = vt(String.prototype.toLowerCase), Ja = vt(String.prototype.toString), Rc = vt(String.prototype.match), jr = vt(String.prototype.replace), Pc = vt(String.prototype.indexOf), Qk = vt(String.prototype.trim), Jk = vt(Number.prototype.toString), eT = vt(Boolean.prototype.toString), Nc = typeof BigInt > "u" ? null : vt(BigInt.prototype.toString), $c = typeof Symbol > "u" ? null : vt(Symbol.prototype.toString), it = vt(Object.prototype.hasOwnProperty), mo = vt(Object.prototype.toString), Ot = vt(RegExp.prototype.test), ho = tT(TypeError);
function vt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
      r[o - 1] = arguments[o];
    return Ls(e, t, r);
  };
}
function tT(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Is(e, n);
  };
}
function Ee(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : vo;
  if (Ic && Ic(e, null), !zt(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let o = t[r];
    if (typeof o == "string") {
      const a = n(o);
      a !== o && (Kk(t) || (t[r] = a), o = a);
    }
    e[o] = !0;
  }
  return e;
}
function nT(e) {
  for (let t = 0; t < e.length; t++)
    it(e, t) || (e[t] = null);
  return e;
}
function Nt(e) {
  const t = Wr(null);
  for (const r of Xd(e)) {
    var n = Wk(r, 2);
    const o = n[0], a = n[1];
    it(e, o) && (zt(a) ? t[o] = nT(a) : a && typeof a == "object" && a.constructor === Object ? t[o] = Nt(a) : t[o] = a);
  }
  return t;
}
function rT(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Jk(e);
    case "boolean":
      return eT(e);
    case "bigint":
      return Nc ? Nc(e) : "0";
    case "symbol":
      return $c ? $c(e) : "Symbol()";
    case "undefined":
      return mo(e);
    case "function":
    case "object": {
      if (e === null)
        return mo(e);
      const t = e, n = Sn(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : mo(r);
      }
      return mo(e);
    }
    default:
      return mo(e);
  }
}
function Sn(e, t) {
  for (; e !== null; ) {
    const r = Yk(e, t);
    if (r) {
      if (r.get)
        return vt(r.get);
      if (typeof r.value == "function")
        return vt(r.value);
    }
    e = qk(e);
  }
  function n() {
    return null;
  }
  return n;
}
function oT(e) {
  try {
    return Ot(e, ""), !0;
  } catch {
    return !1;
  }
}
const Mc = Ut(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), es = Ut(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ts = Ut(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), aT = Ut(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ns = Ut(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), sT = Ut(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Dc = Ut(["#text"]), Fc = Ut(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), rs = Ut(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), zc = Ut(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Qo = Ut(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), lT = an(/{{[\w\W]*|^[\w\W]*}}/g), iT = an(/<%[\w\W]*|^[\w\W]*%>/g), cT = an(/\${[\w\W]*/g), uT = an(/^data-[\-\w.\u00B7-\uFFFF]+$/), dT = an(/^aria-[\-\w]+$/), Bc = an(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), fT = an(/^(?:\w+script|data):/i), pT = an(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), mT = an(/^html$/i), hT = an(/^[a-z][.\w]*(-[.\w]+)+$/i), Tn = {
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
}, gT = function() {
  return typeof window > "u" ? null : window;
}, vT = function(t, n) {
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
}, Vc = function() {
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
function Jd() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gT();
  const t = (le) => Jd(le);
  if (t.version = "3.4.7", t.removed = [], !e || !e.document || e.document.nodeType !== Tn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, o = r.currentScript;
  e.DocumentFragment;
  const a = e.HTMLTemplateElement, s = e.Node, i = e.Element, l = e.NodeFilter, u = e.NamedNodeMap;
  u === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, m = e.trustedTypes, p = i.prototype, v = Sn(p, "cloneNode"), h = Sn(p, "remove"), g = Sn(p, "nextSibling"), T = Sn(p, "childNodes"), f = Sn(p, "parentNode"), E = Sn(p, "shadowRoot"), x = Sn(p, "attributes"), S = s && s.prototype ? Sn(s.prototype, "nodeType") : null, b = s && s.prototype ? Sn(s.prototype, "nodeName") : null;
  if (typeof a == "function") {
    const le = n.createElement("template");
    le.content && le.content.ownerDocument && (n = le.content.ownerDocument);
  }
  let C, O = "";
  const D = n, X = D.implementation, ne = D.createNodeIterator, fe = D.createDocumentFragment, re = D.getElementsByTagName, pe = r.importNode;
  let ge = Vc();
  t.isSupported = typeof Xd == "function" && typeof f == "function" && X && X.createHTMLDocument !== void 0;
  const B = lT, Q = iT, j = cT, q = uT, z = dT, Se = fT, $e = pT, Te = hT;
  let me = Bc, G = null;
  const Ke = Ee({}, [...Mc, ...es, ...ts, ...ns, ...Dc]);
  let we = null;
  const st = Ee({}, [...Fc, ...rs, ...zc, ...Qo]);
  let de = Object.seal(Wr(null, {
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
  })), qe = null, pt = null;
  const et = Object.seal(Wr(null, {
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
  let Ct = !0, bt = !0, Tt = !1, yt = !0, tt = !1, _t = !0, w = !1, A = !1, M = !1, J = !1, Ae = !1, ue = !1, k = !0, $ = !1;
  const ve = "user-content-";
  let Ce = !0, We = !1, lt = {}, Ge = null;
  const Dn = Ee({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Fn = null;
  const Nr = Ee({}, ["audio", "video", "img", "source", "image", "track"]);
  let Wt = null;
  const ar = Ee({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), yn = "http://www.w3.org/1998/Math/MathML", sn = "http://www.w3.org/2000/svg", Ft = "http://www.w3.org/1999/xhtml";
  let Jt = Ft, sr = !1, yr = null;
  const zn = Ee({}, [yn, sn, Ft], Ja);
  let lr = Ee({}, ["mi", "mo", "mn", "ms", "mtext"]), _r = Ee({}, ["annotation-xml"]);
  const so = Ee({}, ["title", "style", "font", "a", "script"]);
  let Bn = null;
  const $r = ["application/xhtml+xml", "text/html"], Mr = "text/html";
  let je = null, L = null;
  const U = n.createElement("form"), H = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, be = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (L && L === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = Nt(_), Bn = // eslint-disable-next-line unicorn/prefer-includes
    $r.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? Mr : _.PARSER_MEDIA_TYPE, je = Bn === "application/xhtml+xml" ? Ja : vo, G = it(_, "ALLOWED_TAGS") && zt(_.ALLOWED_TAGS) ? Ee({}, _.ALLOWED_TAGS, je) : Ke, we = it(_, "ALLOWED_ATTR") && zt(_.ALLOWED_ATTR) ? Ee({}, _.ALLOWED_ATTR, je) : st, yr = it(_, "ALLOWED_NAMESPACES") && zt(_.ALLOWED_NAMESPACES) ? Ee({}, _.ALLOWED_NAMESPACES, Ja) : zn, Wt = it(_, "ADD_URI_SAFE_ATTR") && zt(_.ADD_URI_SAFE_ATTR) ? Ee(Nt(ar), _.ADD_URI_SAFE_ATTR, je) : ar, Fn = it(_, "ADD_DATA_URI_TAGS") && zt(_.ADD_DATA_URI_TAGS) ? Ee(Nt(Nr), _.ADD_DATA_URI_TAGS, je) : Nr, Ge = it(_, "FORBID_CONTENTS") && zt(_.FORBID_CONTENTS) ? Ee({}, _.FORBID_CONTENTS, je) : Dn, qe = it(_, "FORBID_TAGS") && zt(_.FORBID_TAGS) ? Ee({}, _.FORBID_TAGS, je) : Nt({}), pt = it(_, "FORBID_ATTR") && zt(_.FORBID_ATTR) ? Ee({}, _.FORBID_ATTR, je) : Nt({}), lt = it(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? Nt(_.USE_PROFILES) : _.USE_PROFILES : !1, Ct = _.ALLOW_ARIA_ATTR !== !1, bt = _.ALLOW_DATA_ATTR !== !1, Tt = _.ALLOW_UNKNOWN_PROTOCOLS || !1, yt = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, tt = _.SAFE_FOR_TEMPLATES || !1, _t = _.SAFE_FOR_XML !== !1, w = _.WHOLE_DOCUMENT || !1, J = _.RETURN_DOM || !1, Ae = _.RETURN_DOM_FRAGMENT || !1, ue = _.RETURN_TRUSTED_TYPE || !1, M = _.FORCE_BODY || !1, k = _.SANITIZE_DOM !== !1, $ = _.SANITIZE_NAMED_PROPS || !1, Ce = _.KEEP_CONTENT !== !1, We = _.IN_PLACE || !1, me = oT(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : Bc, Jt = typeof _.NAMESPACE == "string" ? _.NAMESPACE : Ft, lr = it(_, "MATHML_TEXT_INTEGRATION_POINTS") && _.MATHML_TEXT_INTEGRATION_POINTS && typeof _.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Nt(_.MATHML_TEXT_INTEGRATION_POINTS) : Ee({}, ["mi", "mo", "mn", "ms", "mtext"]), _r = it(_, "HTML_INTEGRATION_POINTS") && _.HTML_INTEGRATION_POINTS && typeof _.HTML_INTEGRATION_POINTS == "object" ? Nt(_.HTML_INTEGRATION_POINTS) : Ee({}, ["annotation-xml"]);
    const V = it(_, "CUSTOM_ELEMENT_HANDLING") && _.CUSTOM_ELEMENT_HANDLING && typeof _.CUSTOM_ELEMENT_HANDLING == "object" ? Nt(_.CUSTOM_ELEMENT_HANDLING) : Wr(null);
    if (de = Wr(null), it(V, "tagNameCheck") && H(V.tagNameCheck) && (de.tagNameCheck = V.tagNameCheck), it(V, "attributeNameCheck") && H(V.attributeNameCheck) && (de.attributeNameCheck = V.attributeNameCheck), it(V, "allowCustomizedBuiltInElements") && typeof V.allowCustomizedBuiltInElements == "boolean" && (de.allowCustomizedBuiltInElements = V.allowCustomizedBuiltInElements), tt && (bt = !1), Ae && (J = !0), lt && (G = Ee({}, Dc), we = Wr(null), lt.html === !0 && (Ee(G, Mc), Ee(we, Fc)), lt.svg === !0 && (Ee(G, es), Ee(we, rs), Ee(we, Qo)), lt.svgFilters === !0 && (Ee(G, ts), Ee(we, rs), Ee(we, Qo)), lt.mathMl === !0 && (Ee(G, ns), Ee(we, zc), Ee(we, Qo))), et.tagCheck = null, et.attributeCheck = null, it(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? et.tagCheck = _.ADD_TAGS : zt(_.ADD_TAGS) && (G === Ke && (G = Nt(G)), Ee(G, _.ADD_TAGS, je))), it(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? et.attributeCheck = _.ADD_ATTR : zt(_.ADD_ATTR) && (we === st && (we = Nt(we)), Ee(we, _.ADD_ATTR, je))), it(_, "ADD_URI_SAFE_ATTR") && zt(_.ADD_URI_SAFE_ATTR) && Ee(Wt, _.ADD_URI_SAFE_ATTR, je), it(_, "FORBID_CONTENTS") && zt(_.FORBID_CONTENTS) && (Ge === Dn && (Ge = Nt(Ge)), Ee(Ge, _.FORBID_CONTENTS, je)), it(_, "ADD_FORBID_CONTENTS") && zt(_.ADD_FORBID_CONTENTS) && (Ge === Dn && (Ge = Nt(Ge)), Ee(Ge, _.ADD_FORBID_CONTENTS, je)), Ce && (G["#text"] = !0), w && Ee(G, ["html", "head", "body"]), G.table && (Ee(G, ["tbody"]), delete qe.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ho('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ho('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      C = _.TRUSTED_TYPES_POLICY, O = C.createHTML("");
    } else
      C === void 0 && (C = vT(m, o)), C !== null && typeof O == "string" && (O = C.createHTML(""));
    (ge.uponSanitizeElement.length > 0 || ge.uponSanitizeAttribute.length > 0) && G === Ke && (G = Nt(G)), ge.uponSanitizeAttribute.length > 0 && we === st && (we = Nt(we)), Ut && Ut(_), L = _;
  }, ke = Ee({}, [...es, ...ts, ...aT]), Ie = Ee({}, [...ns, ...sT]), Oe = function(_) {
    let V = f(_);
    (!V || !V.tagName) && (V = {
      namespaceURI: Jt,
      tagName: "template"
    });
    const te = vo(_.tagName), De = vo(V.tagName);
    return yr[_.namespaceURI] ? _.namespaceURI === sn ? V.namespaceURI === Ft ? te === "svg" : V.namespaceURI === yn ? te === "svg" && (De === "annotation-xml" || lr[De]) : !!ke[te] : _.namespaceURI === yn ? V.namespaceURI === Ft ? te === "math" : V.namespaceURI === sn ? te === "math" && _r[De] : !!Ie[te] : _.namespaceURI === Ft ? V.namespaceURI === sn && !_r[De] || V.namespaceURI === yn && !lr[De] ? !1 : !Ie[te] && (so[te] || !ke[te]) : !!(Bn === "application/xhtml+xml" && yr[_.namespaceURI]) : !1;
  }, xe = function(_) {
    Vr(t.removed, {
      element: _
    });
    try {
      f(_).removeChild(_);
    } catch {
      h(_);
    }
  }, R = function(_, V) {
    try {
      Vr(t.removed, {
        attribute: V.getAttributeNode(_),
        from: V
      });
    } catch {
      Vr(t.removed, {
        attribute: null,
        from: V
      });
    }
    if (V.removeAttribute(_), _ === "is")
      if (J || Ae)
        try {
          xe(V);
        } catch {
        }
      else
        try {
          V.setAttribute(_, "");
        } catch {
        }
  }, Y = function(_) {
    let V = null, te = null;
    if (M)
      _ = "<remove></remove>" + _;
    else {
      const Xe = Rc(_, /^[\r\n\t ]+/);
      te = Xe && Xe[0];
    }
    Bn === "application/xhtml+xml" && Jt === Ft && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const De = C ? C.createHTML(_) : _;
    if (Jt === Ft)
      try {
        V = new d().parseFromString(De, Bn);
      } catch {
      }
    if (!V || !V.documentElement) {
      V = X.createDocument(Jt, "template", null);
      try {
        V.documentElement.innerHTML = sr ? O : De;
      } catch {
      }
    }
    const Le = V.body || V.documentElement;
    return _ && te && Le.insertBefore(n.createTextNode(te), Le.childNodes[0] || null), Jt === Ft ? re.call(V, w ? "html" : "body")[0] : w ? V.documentElement : Le;
  }, ce = function(_) {
    return ne.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Ye = function(_) {
    _.normalize();
    const V = ne.call(
      _.ownerDocument || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let te = V.nextNode();
    for (; te; ) {
      let De = te.data;
      Br([B, Q, j], (Le) => {
        De = jr(De, Le, " ");
      }), te.data = De, te = V.nextNode();
    }
  }, Ze = function(_) {
    const V = b ? b(_) : null;
    return typeof V != "string" || je(V) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    _.attributes !== x(_) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function" || typeof _.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    _.nodeType !== S(_) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    _.childNodes !== T(_);
  }, Me = function(_) {
    if (!S || typeof _ != "object" || _ === null)
      return !1;
    try {
      return S(_) === Tn.documentFragment;
    } catch {
      return !1;
    }
  }, wt = function(_) {
    if (!S || typeof _ != "object" || _ === null)
      return !1;
    try {
      return typeof S(_) == "number";
    } catch {
      return !1;
    }
  };
  function Gt(le, _, V) {
    Br(le, (te) => {
      te.call(t, _, V, L);
    });
  }
  const ir = function(_) {
    let V = null;
    if (Gt(ge.beforeSanitizeElements, _, null), Ze(_))
      return xe(_), !0;
    const te = je(_.nodeName);
    if (Gt(ge.uponSanitizeElement, _, {
      tagName: te,
      allowedTags: G
    }), _t && _.hasChildNodes() && !wt(_.firstElementChild) && Ot(/<[/\w!]/g, _.innerHTML) && Ot(/<[/\w!]/g, _.textContent) || _t && _.namespaceURI === Ft && te === "style" && wt(_.firstElementChild) || _.nodeType === Tn.progressingInstruction || _t && _.nodeType === Tn.comment && Ot(/<[/\w]/g, _.data))
      return xe(_), !0;
    if (qe[te] || !(et.tagCheck instanceof Function && et.tagCheck(te)) && !G[te]) {
      if (!qe[te] && Ol(te) && (de.tagNameCheck instanceof RegExp && Ot(de.tagNameCheck, te) || de.tagNameCheck instanceof Function && de.tagNameCheck(te)))
        return !1;
      if (Ce && !Ge[te]) {
        const Le = f(_), Xe = T(_);
        if (Xe && Le) {
          const en = Xe.length;
          for (let _n = en - 1; _n >= 0; --_n) {
            const ln = v(Xe[_n], !0);
            Le.insertBefore(ln, g(_));
          }
        }
      }
      return xe(_), !0;
    }
    return (S ? S(_) : _.nodeType) === Tn.element && !Oe(_) || (te === "noscript" || te === "noembed" || te === "noframes") && Ot(/<\/no(script|embed|frames)/i, _.innerHTML) ? (xe(_), !0) : (tt && _.nodeType === Tn.text && (V = _.textContent, Br([B, Q, j], (Le) => {
      V = jr(V, Le, " ");
    }), _.textContent !== V && (Vr(t.removed, {
      element: _.cloneNode()
    }), _.textContent = V)), Gt(ge.afterSanitizeElements, _, null), !1);
  }, Bo = function(_, V, te) {
    if (pt[V] || k && (V === "id" || V === "name") && (te in n || te in U))
      return !1;
    const De = we[V] || et.attributeCheck instanceof Function && et.attributeCheck(V, _);
    if (!(bt && !pt[V] && Ot(q, V))) {
      if (!(Ct && Ot(z, V))) {
        if (!De || pt[V]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ol(_) && (de.tagNameCheck instanceof RegExp && Ot(de.tagNameCheck, _) || de.tagNameCheck instanceof Function && de.tagNameCheck(_)) && (de.attributeNameCheck instanceof RegExp && Ot(de.attributeNameCheck, V) || de.attributeNameCheck instanceof Function && de.attributeNameCheck(V, _)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            V === "is" && de.allowCustomizedBuiltInElements && (de.tagNameCheck instanceof RegExp && Ot(de.tagNameCheck, te) || de.tagNameCheck instanceof Function && de.tagNameCheck(te)))
          ) return !1;
        } else if (!Wt[V]) {
          if (!Ot(me, jr(te, $e, ""))) {
            if (!((V === "src" || V === "xlink:href" || V === "href") && _ !== "script" && Pc(te, "data:") === 0 && Fn[_])) {
              if (!(Tt && !Ot(Se, jr(te, $e, "")))) {
                if (te)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, ef = Ee({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ol = function(_) {
    return !ef[vo(_)] && Ot(Te, _);
  }, Ll = function(_) {
    Gt(ge.beforeSanitizeAttributes, _, null);
    const V = _.attributes;
    if (!V || Ze(_))
      return;
    const te = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: we,
      forceKeepAttr: void 0
    };
    let De = V.length;
    for (; De--; ) {
      const Le = V[De], Xe = Le.name, en = Le.namespaceURI, _n = Le.value, ln = je(Xe), Va = _n;
      let St = Xe === "value" ? Va : Qk(Va);
      if (te.attrName = ln, te.attrValue = St, te.keepAttr = !0, te.forceKeepAttr = void 0, Gt(ge.uponSanitizeAttribute, _, te), St = te.attrValue, $ && (ln === "id" || ln === "name") && Pc(St, ve) !== 0 && (R(Xe, _), St = ve + St), _t && Ot(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, St)) {
        R(Xe, _);
        continue;
      }
      if (ln === "attributename" && Rc(St, "href")) {
        R(Xe, _);
        continue;
      }
      if (te.forceKeepAttr)
        continue;
      if (!te.keepAttr) {
        R(Xe, _);
        continue;
      }
      if (!yt && Ot(/\/>/i, St)) {
        R(Xe, _);
        continue;
      }
      tt && Br([B, Q, j], (xl) => {
        St = jr(St, xl, " ");
      });
      const Il = je(_.nodeName);
      if (!Bo(Il, ln, St)) {
        R(Xe, _);
        continue;
      }
      if (C && typeof m == "object" && typeof m.getAttributeType == "function" && !en)
        switch (m.getAttributeType(Il, ln)) {
          case "TrustedHTML": {
            St = C.createHTML(St);
            break;
          }
          case "TrustedScriptURL": {
            St = C.createScriptURL(St);
            break;
          }
        }
      if (St !== Va)
        try {
          en ? _.setAttributeNS(en, Xe, St) : _.setAttribute(Xe, St), Ze(_) ? xe(_) : xc(t.removed);
        } catch {
          R(Xe, _);
        }
    }
    Gt(ge.afterSanitizeAttributes, _, null);
  }, Vo = function(_) {
    let V = null;
    const te = ce(_);
    for (Gt(ge.beforeSanitizeShadowDOM, _, null); V = te.nextNode(); )
      if (Gt(ge.uponSanitizeShadowNode, V, null), ir(V), Ll(V), Me(V.content) && Vo(V.content), (S ? S(V) : V.nodeType) === Tn.element) {
        const Le = E ? E(V) : V.shadowRoot;
        Me(Le) && (Dr(Le), Vo(Le));
      }
    Gt(ge.afterSanitizeShadowDOM, _, null);
  }, Dr = function(_) {
    const V = S ? S(_) : _.nodeType;
    if (V === Tn.element) {
      const Le = E ? E(_) : _.shadowRoot;
      Me(Le) && (Dr(Le), Vo(Le));
    }
    const te = T ? T(_) : _.childNodes;
    if (!te)
      return;
    const De = [];
    Br(te, (Le) => {
      Vr(De, Le);
    });
    for (const Le of De)
      Dr(Le);
    if (V === Tn.element) {
      const Le = b ? b(_) : null;
      if (typeof Le == "string" && je(Le) === "template") {
        const Xe = _.content;
        Me(Xe) && Dr(Xe);
      }
    }
  };
  return t.sanitize = function(le) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, V = null, te = null, De = null, Le = null;
    if (sr = !le, sr && (le = "<!-->"), typeof le != "string" && !wt(le) && (le = rT(le), typeof le != "string"))
      throw ho("dirty is not a string, aborting");
    if (!t.isSupported)
      return le;
    if (A || be(_), t.removed = [], typeof le == "string" && (We = !1), We) {
      const _n = b ? b(le) : le.nodeName;
      if (typeof _n == "string") {
        const ln = je(_n);
        if (!G[ln] || qe[ln])
          throw ho("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ze(le))
        throw ho("root node is clobbered and cannot be sanitized in-place");
      Dr(le);
    } else if (wt(le))
      V = Y("<!---->"), te = V.ownerDocument.importNode(le, !0), te.nodeType === Tn.element && te.nodeName === "BODY" || te.nodeName === "HTML" ? V = te : V.appendChild(te), Dr(te);
    else {
      if (!J && !tt && !w && // eslint-disable-next-line unicorn/prefer-includes
      le.indexOf("<") === -1)
        return C && ue ? C.createHTML(le) : le;
      if (V = Y(le), !V)
        return J ? null : ue ? O : "";
    }
    V && M && xe(V.firstChild);
    const Xe = ce(We ? le : V);
    for (; De = Xe.nextNode(); )
      ir(De), Ll(De), Me(De.content) && Vo(De.content);
    if (We)
      return tt && Ye(le), le;
    if (J) {
      if (tt && Ye(V), Ae)
        for (Le = fe.call(V.ownerDocument); V.firstChild; )
          Le.appendChild(V.firstChild);
      else
        Le = V;
      return (we.shadowroot || we.shadowrootmode) && (Le = pe.call(r, Le, !0)), Le;
    }
    let en = w ? V.outerHTML : V.innerHTML;
    return w && G["!doctype"] && V.ownerDocument && V.ownerDocument.doctype && V.ownerDocument.doctype.name && Ot(mT, V.ownerDocument.doctype.name) && (en = "<!DOCTYPE " + V.ownerDocument.doctype.name + `>
` + en), tt && Br([B, Q, j], (_n) => {
      en = jr(en, _n, " ");
    }), C && ue ? C.createHTML(en) : en;
  }, t.setConfig = function() {
    let le = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    be(le), A = !0;
  }, t.clearConfig = function() {
    L = null, A = !1;
  }, t.isValidAttribute = function(le, _, V) {
    L || be({});
    const te = je(le), De = je(_);
    return Bo(te, De, V);
  }, t.addHook = function(le, _) {
    typeof _ == "function" && Vr(ge[le], _);
  }, t.removeHook = function(le, _) {
    if (_ !== void 0) {
      const V = Zk(ge[le], _);
      return V === -1 ? void 0 : Xk(ge[le], V, 1)[0];
    }
    return xc(ge[le]);
  }, t.removeHooks = function(le) {
    ge[le] = [];
  }, t.removeAllHooks = function() {
    ge = Vc();
  }, t;
}
var bT = Jd();
const yT = {
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
function _T(e) {
  return e ? typeof window > "u" ? e.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/\son[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "").replace(/\s(?:href|src)\s*=\s*(?:"javascript:[^"]*"|'javascript:[^']*'|javascript:[^\s>]+)/gi, "") : bT.sanitize(e, yT) : "";
}
const wT = { class: "local-ai-chat-shell" }, kT = { class: "chat-sidebar" }, TT = { class: "sidebar-header" }, ST = { class: "sidebar-title-block" }, ET = { class: "sidebar-search" }, AT = ["placeholder"], CT = { class: "sidebar-section recent-section" }, OT = { class: "section-title-row" }, LT = { class: "section-title" }, IT = { class: "sidebar-actions" }, xT = ["title"], RT = ["title"], PT = {
  key: 0,
  class: "chat-list"
}, NT = ["onClick", "onKeydown"], $T = { class: "chat-item-title" }, MT = { class: "chat-item-time" }, DT = ["title", "onClick"], FT = {
  key: 1,
  class: "sidebar-empty"
}, zT = { class: "chat-panel" }, BT = { class: "chat-topbar" }, VT = { class: "chat-topbar-main" }, jT = { class: "chat-title-row" }, UT = { class: "service-url" }, HT = { class: "chat-topbar-actions" }, WT = { class: "date-divider" }, GT = {
  key: 0,
  class: "empty-state"
}, KT = { class: "empty-title" }, qT = { class: "empty-desc" }, YT = { class: "message-avatar" }, ZT = { key: 1 }, XT = { class: "message-body" }, QT = {
  key: 0,
  class: "user-bubble"
}, JT = { class: "assistant-head" }, eS = {
  key: 0,
  class: "assistant-content-stack"
}, tS = ["open"], nS = { class: "reasoning-summary-title" }, rS = { key: 0 }, oS = ["innerHTML"], aS = ["innerHTML"], sS = {
  key: 1,
  class: "message-content loading-text"
}, lS = {
  key: 0,
  class: "message-stats"
}, iS = {
  key: 1,
  class: "message-warning"
}, cS = {
  key: 2,
  class: "message-actions"
}, uS = ["title", "onClick"], dS = ["title", "onClick"], fS = ["title"], pS = ["title"], mS = ["title", "onClick"], hS = ["title", "onClick"], gS = ["title"], vS = ["placeholder", "onKeydown"], bS = { class: "input-toolbar" }, yS = { class: "input-toolbar-left" }, _S = ["title"], wS = ["title", "aria-pressed"], kS = { class: "model-select-shell" }, TS = ["disabled"], SS = ["value"], ES = {
  key: 0,
  value: ""
}, AS = { class: "input-toolbar-right" }, CS = ["title", "aria-label"], OS = ["disabled", "title", "aria-label"], LS = 96, IS = 4096, os = 160, xS = /* @__PURE__ */ oe({
  name: "LocalAiChat",
  __name: "index",
  setup(e) {
    const { t } = Po(), n = W(""), r = W([]), o = W(""), a = W(""), s = W(!1), i = W(!1), l = W(!1), u = W(!1), d = W(!0), m = W(!1), p = W(null), v = W(null), h = W(null), g = W(""), T = W(null), f = W(null), E = W(Date.now());
    let x = null, S = null;
    const b = /* @__PURE__ */ new Map(), C = I(() => !!a.value.trim() && !s.value), O = I(() => T.value?.healthy ? t("localAi.serviceHealthy") : T.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), D = I(
      () => r.value.find((L) => L.id === o.value) ?? null
    ), X = I(() => D.value?.messages ?? []), ne = (L) => L ? L.split(/[\\/]+/).pop() ?? L : "", fe = I(
      () => ne(g.value) || ne(T.value?.modelPath) || ne(v.value?.modelPath) || t("localAi.localModel")
    ), re = I(() => h.value?.mainModels ?? []), pe = I(
      () => T.value?.ctxSize ?? v.value?.ctxSize ?? 4096
    ), ge = I(() => {
      const L = pe.value, U = v.value?.maxTokens ?? 0;
      return U > 0 ? Math.min(
        Math.max(U, 512),
        Math.max(512, L - 512)
      ) : Math.min(
        Math.max(IS, Math.floor(L * 0.5)),
        Math.max(512, L - 512)
      );
    }), B = I(
      () => Math.max(512, pe.value - ge.value)
    ), Q = I(() => {
      const L = fe.value.toLowerCase();
      return /\b(qwen3|deepseek-r1|r1-|reasoning|thinking|think)\b/i.test(L);
    }), j = I(() => {
      const L = n.value.trim().toLowerCase();
      return r.value.filter(
        (U) => !L || U.title.toLowerCase().includes(L) || U.messages.some(
          (H) => H.content.toLowerCase().includes(L)
        )
      ).slice().sort((U, H) => H.updatedAt.localeCompare(U.updatedAt));
    }), q = () => t("localAi.now"), z = () => {
      const L = (/* @__PURE__ */ new Date()).toISOString();
      return {
        id: `chat-${Date.now()}`,
        title: t("localAi.newChatTitle"),
        createdAt: L,
        updatedAt: L,
        updatedAtLabel: q(),
        messages: []
      };
    }, Se = () => {
      const L = f.value;
      return L ? L.scrollHeight - L.scrollTop - L.clientHeight <= LS : !0;
    }, $e = () => {
      const L = Se();
      d.value = L, m.value = !L;
    }, Te = () => {
      $e();
    }, me = async (L = {}) => {
      await ct();
      const U = f.value;
      !U || !L.force && !d.value || (U.scrollTop = U.scrollHeight, $e());
    }, G = () => {
      d.value = !0, me({ force: !0 });
    }, Ke = async () => {
      try {
        v.value = await Gd(), g.value = v.value.modelPath ?? "", h.value = await Kd(v.value), Q.value || (u.value = !1);
      } catch (L) {
        un.warn("[LocalAI] refresh chat config failed", L);
      }
    }, we = async () => {
      i.value = !0;
      try {
        T.value = await qd();
      } catch (L) {
        un.warn("[LocalAI] refresh chat status failed", L);
      } finally {
        i.value = !1;
      }
    }, st = async () => {
      try {
        const L = await zk();
        r.value = L.map((U) => ({
          id: U.id,
          title: U.title,
          createdAt: U.createdAt,
          updatedAt: U.updatedAt,
          updatedAtLabel: new Date(U.updatedAt).toLocaleString(),
          messages: U.turns.map((H) => ({
            id: H.id,
            role: H.role,
            content: H.content,
            createdAt: H.createdAt
          }))
        })), !o.value && r.value[0] && (o.value = r.value[0].id);
      } catch (L) {
        un.warn("[LocalAI] refresh histories failed", L);
      }
    }, de = async () => {
      await Promise.all([Ke(), we(), st()]);
    }, qe = async () => {
      const L = D.value;
      L && await Bk({
        id: L.id,
        title: L.title,
        createdAt: L.createdAt,
        updatedAt: L.updatedAt,
        turns: L.messages.map((U) => ({
          id: U.id,
          role: U.role,
          content: U.content,
          createdAt: U.createdAt
        }))
      });
    }, pt = () => {
      const L = z();
      r.value.unshift(L), o.value = L.id, a.value = "";
    }, et = () => {
      D.value || pt();
    }, Ct = (L) => {
      o.value = L, d.value = !0, me({ force: !0 });
    }, bt = async (L) => {
      r.value = r.value.filter((U) => U.id !== L), await Vk(L), o.value === L && (o.value = r.value[0]?.id ?? "");
    }, Tt = async () => {
      if (!(!v.value || !g.value)) {
        v.value.modelPath = g.value;
        try {
          v.value = await aa(v.value), T.value?.running && (T.value = await Yd()), Mt.msg(t("localAi.modelChanged"));
        } catch (L) {
          Mt.msg(`${t("localAi.configSaveFailed")}: ${L}`, "error");
        }
      }
    }, yt = (L) => {
      const U = b.get(L);
      if (U) return U;
      const H = _T(Be.parse(L, { async: !1 }));
      if (b.set(L, H), b.size > 80) {
        const be = b.keys().next().value;
        typeof be == "string" && b.delete(be);
      }
      return H;
    }, tt = (L) => {
      const U = L.match(/<think>([\s\S]*?)(?:<\/think>|$)/i);
      if (!U || U.index === void 0)
        return { reasoning: "", answer: L };
      const H = L.slice(0, U.index).trim(), be = U[0], ke = L.slice(U.index + be.length).trim();
      return {
        reasoning: (U[1] ?? "").trim(),
        answer: [H, ke].filter(Boolean).join(`

`)
      };
    }, _t = (L) => tt(L).reasoning, w = (L) => tt(L).answer, A = (L) => !!w(L.content), M = (L) => !!(L.streaming && L.allowThinking && L.reasoningStartedAt && !L.reasoningEndedAt && !A(L)), J = (L) => {
      if (!L.reasoningStartedAt) return "0.00";
      const U = L.reasoningEndedAt ?? (L.streaming ? E.value : Date.now());
      return Math.max(0, (U - L.reasoningStartedAt) / 1e3).toFixed(2);
    }, Ae = (L) => !L.reasoningStartedAt && L.streaming ? t("localAi.reasoningTitle") : t("localAi.thoughtFor", {
      seconds: J(L)
    }), ue = (L) => new Date(
      L.createdAt || D.value?.updatedAt || Date.now()
    ), k = (L) => ue(L).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    }), $ = (L) => L.streaming ? M(L) ? t("localAi.thinking") : t("localAi.generating") : k(L), ve = (L) => L.allowThinking && !L.reasoningEndedAt ? t("localAi.thinking") : t("localAi.generating"), Ce = (L, U) => {
      L.allowThinking && (U.includes("<think>") && !L.reasoningStartedAt && (L.reasoningStartedAt = Date.now()), U.includes("</think>") && !L.reasoningEndedAt && (L.reasoningEndedAt = Date.now()));
    }, We = (L) => {
      const U = L.trim();
      if (!U) return 0;
      const H = (U.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length, Ie = (U.replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ").match(/[A-Za-z0-9_]+|[^\sA-Za-z0-9_]/g) ?? []).reduce((Oe, xe) => /^[A-Za-z0-9_]+$/.test(xe) ? Oe + Math.max(1, Math.ceil(xe.length / 4)) : Oe + 1, 0);
      return Math.max(1, Math.ceil(H + Ie));
    }, lt = (L) => We(
      L.map((U) => `${U.role}: ${U.content}`).join(`
`)
    ), Ge = (L, U) => {
      const H = Math.max(240, U * 4);
      return L.length <= H ? L : `${t("localAi.previousAnswerTail")}

${L.slice(-H)}`;
    }, Dn = (L, U) => {
      const H = [];
      let be = 0;
      for (let ke = L.length - 1; ke >= 0; ke -= 1) {
        const Ie = L[ke], Oe = lt([Ie]);
        if (be + Oe <= U || H.length === 0) {
          H.unshift(Ie), be += Oe;
          continue;
        }
        const xe = U - be;
        if (Ie.role !== "assistant" || xe < os)
          continue;
        let R = xe, Y = {
          ...Ie,
          content: Ge(Ie.content, R)
        }, ce = lt([Y]);
        for (; ce > xe && R > os; )
          R = Math.max(
            os,
            Math.floor(R * 0.7)
          ), Y = {
            ...Ie,
            content: Ge(Ie.content, R)
          }, ce = lt([Y]);
        be + ce <= U && (H.unshift(Y), be += ce);
      }
      return H;
    }, Fn = () => Dn(
      X.value.filter((L) => !L.streaming).map((L) => ({
        role: L.role,
        content: L.content
      })),
      B.value
    ), Nr = (L) => {
      const U = v.value?.maxTokens ?? 0;
      if (U > 0) return U;
      const H = lt(L);
      return Math.max(256, pe.value - H - 128);
    }, Wt = (L) => {
      const U = E.value, H = X.value.findIndex(
        (ce) => ce.id === L.id
      ), be = L.stats?.promptTokens ?? L.promptTokens ?? We(
        X.value.slice(0, Math.max(0, H)).map((ce) => ce.content).join(`
`)
      ), ke = L.stats?.completionTokens ?? We(L.content), Ie = pe.value, Oe = L.stats?.totalTokens ?? be + ke, xe = Math.min(Oe, Ie), R = Math.max(
        0,
        (L.stats?.generationTimeMs ?? L.elapsedMs ?? U - ue(L).getTime()) / 1e3
      ), Y = L.stats?.tokensPerSecond ?? (R > 0 ? ke / R : 0);
      return {
        context: xe,
        contextMax: Ie,
        contextPercent: Math.min(100, Math.round(xe / Ie * 100)),
        output: ke,
        outputMax: (v.value?.maxTokens ?? 0) > 0 ? String(v.value?.maxTokens) : "∞",
        seconds: R.toFixed(1),
        speed: Y.toFixed(1)
      };
    }, ar = (L) => L.repetitionStopped ? t("localAi.repetitionStopped") : L.interrupted ? t("localAi.streamInterrupted") : L.stopped ? t("localAi.generationStopped") : (L.stats?.totalTokens ?? (L.promptTokens ?? 0) + (L.stats?.completionTokens ?? We(L.content))) >= pe.value - 8 ? t("localAi.contextLimitReached") : L.stats?.finishReason === "length" ? t("localAi.outputLimitReached") : "", yn = (L) => {
      const U = String(L);
      return /exceeds the available context size|exceed_context_size/i.test(U) ? t("localAi.contextExceeded") : U;
    }, sn = (L) => {
      const U = L.replace(/\s+/g, " ").trim();
      if (U.length < 360) return !1;
      const be = U.slice(-1200).match(/[A-Za-z_$][\w$-]*|[\u3400-\u9fff\uf900-\ufaff]{1,4}/g)?.map((Oe) => Oe.toLowerCase()) ?? [];
      if (be.length < 72) return !1;
      const ke = be.slice(-80), Ie = /* @__PURE__ */ new Map();
      for (const Oe of ke) Ie.set(Oe, (Ie.get(Oe) ?? 0) + 1);
      if ([...Ie.values()].some((Oe) => Oe >= 28)) return !0;
      for (let Oe = 1; Oe <= 4; Oe += 1) {
        const xe = be.slice(-Oe).join("\0");
        let R = 1;
        for (let Y = be.length - Oe * 2; Y >= 0 && be.slice(Y, Y + Oe).join("\0") === xe; Y -= Oe)
          R += 1;
        if (R >= Math.max(10, Math.ceil(32 / Oe))) return !0;
      }
      return !1;
    }, Ft = () => {
      S || (E.value = Date.now(), S = setInterval(() => {
        E.value = Date.now();
      }, 250));
    }, Jt = () => {
      S && (clearInterval(S), S = null, E.value = Date.now());
    }, sr = async (L) => {
      const U = performance.now(), H = Zd(), be = Fn();
      let ke = "", Ie = null, Oe = null, xe = !1, R = !1;
      p.value = H, l.value = !1, L.promptTokens = lt(be);
      const Y = async () => {
        if (!ke) {
          Ie = null, Oe?.(), Oe = null;
          return;
        }
        const Me = l.value ? 240 : ke.length > 240 ? 18 : 6;
        L.content += ke.slice(0, Me), ke = ke.slice(Me), !R && !l.value && sn(L.content) && (R = !0, l.value = !0, L.repetitionStopped = !0, Qa(H).catch(
          (wt) => un.warn("[LocalAI] repetition stop failed", wt)
        )), await me(), Ie = window.setTimeout(() => {
          Y().catch(
            (wt) => un.warn("[LocalAI] stream pump failed", wt)
          );
        }, 24);
      }, ce = (Me) => {
        Me && (Ce(L, Me), ke += Me, Ie === null && (Ie = window.setTimeout(() => {
          Y().catch(
            (wt) => un.warn("[LocalAI] stream pump failed", wt)
          );
        }, 12)));
      }, Ye = async () => {
        !ke && Ie === null || await new Promise((Me) => {
          Oe = Me;
        });
      }, Ze = await Fk(
        {
          messages: be,
          maxTokens: Nr(be),
          enableThinking: L.allowThinking === !0
        },
        (Me) => {
          xe = !0, ce(Me);
        },
        {
          requestId: H,
          onStats: (Me) => {
            L.stats = Me, E.value = Date.now();
          }
        }
      ).catch(async (Me) => {
        throw await Ye(), Me;
      });
      if (!xe)
        ce(Ze.content);
      else if (!l.value) {
        const Me = L.content.length + ke.length;
        Ze.content.length > Me && ce(Ze.content.slice(Me));
      }
      await Ye(), !l.value && Ze.content && L.content !== Ze.content && (L.content = Ze.content), L.streaming = !1, L.elapsedMs = performance.now() - U, L.stopped = l.value, L.interrupted = !1, L.error = "", E.value = Date.now(), p.value = null;
    }, yr = async () => {
      const L = p.value;
      if (!(!s.value || !L || l.value)) {
        l.value = !0;
        try {
          await Qa(L);
        } catch (U) {
          un.warn("[LocalAI] cancel stream failed", U);
        }
      }
    }, zn = async () => {
      const L = a.value.trim();
      if (!L || s.value) return;
      et();
      const U = (/* @__PURE__ */ new Date()).toISOString();
      D.value?.messages.push({
        id: `${Date.now()}-user`,
        role: "user",
        content: L,
        createdAt: U
      });
      const H = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        allowThinking: u.value && Q.value,
        promptTokens: lt(Fn())
      };
      D.value?.messages.push(H), a.value = "", s.value = !0, Ft(), await me({ force: !0 });
      const be = performance.now();
      try {
        await sr(H), D.value && (D.value.title = D.value.title === t("localAi.newChatTitle") ? L.slice(0, 28) : D.value.title, D.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), D.value.updatedAtLabel = new Date(
          D.value.updatedAt
        ).toLocaleString(), await qe()), await we();
      } catch (ke) {
        if (!l.value) {
          const Ie = yn(ke);
          Mt.msg(`${t("localAi.chatFailed")}: ${Ie}`, "error"), H.error = Ie, H.interrupted = !!H.content.trim(), H.interrupted || (H.content = Ie), D.value && (D.value.title = D.value.title === t("localAi.newChatTitle") ? L.slice(0, 28) : D.value.title, D.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), D.value.updatedAtLabel = new Date(
            D.value.updatedAt
          ).toLocaleString(), await qe());
        }
        H.streaming = !1, H.elapsedMs = performance.now() - be;
      } finally {
        s.value = !1, p.value = null, Jt(), await me();
      }
    }, lr = () => {
      window.location.hash = "#/config/category/settings?tab=localAi";
    }, _r = (L) => {
      const U = new Date(L), H = /* @__PURE__ */ new Date(), be = H.getTime() - U.getTime(), ke = 24 * 60 * 60 * 1e3;
      return U.toDateString() === H.toDateString() ? U.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : be < ke * 2 ? t("localAi.yesterday") : be < ke * 7 ? t("localAi.daysAgo", {
        count: Math.max(2, Math.floor(be / ke))
      }) : t("localAi.weeksAgo", {
        count: Math.max(1, Math.floor(be / (ke * 7)))
      });
    }, so = async (L) => {
      try {
        await navigator.clipboard.writeText(L.content), Mt.msg(t("localAi.copied"));
      } catch (U) {
        Mt.msg(`${t("common.operationFailed")}: ${U}`, "error");
      }
    }, Bn = async (L) => {
      D.value && (D.value.messages = D.value.messages.filter(
        (U) => U.id !== L
      ), D.value.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), D.value.updatedAtLabel = new Date(
        D.value.updatedAt
      ).toLocaleString(), await qe());
    }, $r = (L) => {
      a.value = L.content;
    }, Mr = () => {
      Mt.msg(t("localAi.feedbackSaved"));
    }, je = async (L) => {
      const U = D.value;
      if (!U || s.value) return;
      const H = U.messages.findIndex(
        (Oe) => Oe.id === L
      );
      if (!U.messages.slice(0, H).reverse().find((Oe) => Oe.role === "user")) return;
      U.messages = U.messages.slice(0, H);
      const ke = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        streaming: !0,
        allowThinking: u.value && Q.value,
        promptTokens: lt(Fn())
      };
      U.messages.push(ke), s.value = !0, Ft(), await me({ force: !0 });
      const Ie = performance.now();
      try {
        await sr(ke), U.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), U.updatedAtLabel = new Date(U.updatedAt).toLocaleString(), await qe();
      } catch (Oe) {
        if (!l.value) {
          const xe = yn(Oe);
          Mt.msg(`${t("localAi.chatFailed")}: ${xe}`, "error"), ke.error = xe, ke.interrupted = !!ke.content.trim(), ke.interrupted || (ke.content = xe), U.updatedAt = (/* @__PURE__ */ new Date()).toISOString(), U.updatedAtLabel = new Date(U.updatedAt).toLocaleString(), await qe();
        }
        ke.streaming = !1, ke.elapsedMs = performance.now() - Ie;
      } finally {
        s.value = !1, p.value = null, Jt(), await me();
      }
    };
    return ft(async () => {
      await de(), x = setInterval(() => {
        we().catch(
          (L) => un.warn("[LocalAI] status timer failed", L)
        );
      }, 8e3);
    }), _e(Q, (L) => {
      L || (u.value = !1);
    }), wa(() => {
      x && clearInterval(x), p.value && Qa(p.value), Jt();
    }), (L, U) => (P(), K("main", wT, [
      y("aside", kT, [
        y("header", TT, [
          y("div", ST, [
            y(
              "h2",
              null,
              F(c(t)("localAi.chatTitle")),
              1
              /* TEXT */
            ),
            y(
              "p",
              null,
              F(c(t)("localAi.chatPrivacySubtitle")),
              1
              /* TEXT */
            )
          ])
        ]),
        y("div", ET, [
          N(c(Rf), {
            theme: "outline",
            size: "17"
          }),
          kt(y("input", {
            "onUpdate:modelValue": U[0] || (U[0] = (H) => Gr(n) ? n.value = H : null),
            placeholder: c(t)("localAi.searchHistory")
          }, null, 8, AT), [
            [To, c(n)]
          ])
        ]),
        y("section", CT, [
          y("div", OT, [
            y(
              "div",
              LT,
              F(c(t)("localAi.recent")),
              1
              /* TEXT */
            ),
            y("div", IT, [
              y("button", {
                class: "icon-action-btn icon-action-btn--primary",
                type: "button",
                title: c(t)("localAi.newChat"),
                onClick: pt
              }, [
                N(c(Af), {
                  theme: "outline",
                  size: "13"
                })
              ], 8, xT),
              y("button", {
                class: "icon-action-btn",
                type: "button",
                title: c(t)("plugins.refresh"),
                onClick: de
              }, [
                N(c($l), {
                  theme: "outline",
                  size: "13"
                })
              ], 8, RT)
            ])
          ]),
          c(j).length ? (P(), K("div", PT, [
            (P(!0), K(
              Lt,
              null,
              Tr(c(j), (H) => (P(), K("div", {
                key: H.id,
                class: Z([
                  "chat-list-item",
                  c(o) === H.id ? "active" : ""
                ]),
                role: "button",
                tabindex: "0",
                onClick: (be) => Ct(H.id),
                onKeydown: tn(rt((be) => Ct(H.id), ["prevent"]), ["enter"])
              }, [
                N(c(xf), {
                  theme: "outline",
                  size: "16"
                }),
                y(
                  "span",
                  $T,
                  F(H.title),
                  1
                  /* TEXT */
                ),
                y(
                  "span",
                  MT,
                  F(_r(H.updatedAt)),
                  1
                  /* TEXT */
                ),
                y("button", {
                  class: "chat-item-delete",
                  type: "button",
                  title: c(t)("common.delete"),
                  onClick: rt((be) => bt(H.id), ["stop"])
                }, [
                  N(c(Pl), {
                    theme: "outline",
                    size: "13"
                  })
                ], 8, DT)
              ], 42, NT))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : (P(), K(
            "div",
            FT,
            F(c(t)("common.empty")),
            1
            /* TEXT */
          ))
        ])
      ]),
      y("section", zT, [
        y("header", BT, [
          y("div", VT, [
            y("div", jT, [
              y(
                "h3",
                null,
                F(c(D)?.title ?? c(t)("localAi.newChatTitle")),
                1
                /* TEXT */
              ),
              y(
                "span",
                {
                  class: Z([
                    "status-pill",
                    c(T)?.healthy ? "ready" : "stopped"
                  ])
                },
                [
                  U[4] || (U[4] = y(
                    "i",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  )),
                  Zt(
                    " " + F(c(O)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            y(
              "div",
              UT,
              F(c(T)?.baseUrl ?? "http://127.0.0.1:39281"),
              1
              /* TEXT */
            )
          ]),
          y("div", HT, [
            N(c(Un), {
              size: "small",
              plain: "",
              class: "topbar-custom-btn",
              onClick: lr
            }, {
              default: se(() => [
                N(c(as), {
                  theme: "outline",
                  size: "16"
                }),
                y(
                  "span",
                  null,
                  F(c(t)("localAi.settings")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        y(
          "div",
          {
            ref_key: "messageListRef",
            ref: f,
            class: "message-list",
            onScroll: Te
          },
          [
            y("div", WT, [
              y(
                "span",
                null,
                F(c(t)("localAi.today")),
                1
                /* TEXT */
              )
            ]),
            c(X).length ? ee("v-if", !0) : (P(), K("div", GT, [
              N(c(Ml), {
                theme: "outline",
                size: "28"
              }),
              y(
                "div",
                KT,
                F(c(t)("localAi.chatEmpty")),
                1
                /* TEXT */
              ),
              y(
                "div",
                qT,
                F(c(t)("localAi.chatPlaceholder")),
                1
                /* TEXT */
              )
            ])),
            (P(!0), K(
              Lt,
              null,
              Tr(c(X), (H) => (P(), K(
                "article",
                {
                  key: H.id,
                  class: Z(["message-row", `message-row--${H.role}`])
                },
                [
                  y("div", YT, [
                    H.role === "assistant" ? (P(), ie(c(Ml), {
                      key: 0,
                      theme: "outline",
                      size: "18"
                    })) : (P(), K(
                      "span",
                      ZT,
                      F(c(t)("localAi.youShort")),
                      1
                      /* TEXT */
                    ))
                  ]),
                  y("div", XT, [
                    H.role === "user" ? (P(), K("div", QT, [
                      y(
                        "div",
                        null,
                        F(H.content),
                        1
                        /* TEXT */
                      ),
                      y(
                        "time",
                        null,
                        F(k(H)),
                        1
                        /* TEXT */
                      )
                    ])) : (P(), K(
                      Lt,
                      { key: 1 },
                      [
                        y("div", JT, [
                          y(
                            "span",
                            null,
                            F(c(fe)),
                            1
                            /* TEXT */
                          ),
                          y(
                            "small",
                            null,
                            F($(H)),
                            1
                            /* TEXT */
                          )
                        ]),
                        y(
                          "div",
                          {
                            class: Z(["assistant-card", { "assistant-card--streaming": H.streaming }])
                          },
                          [
                            H.content ? (P(), K("div", eS, [
                              H.allowThinking && _t(H.content) ? (P(), K("details", {
                                key: 0,
                                class: "reasoning-panel",
                                open: H.streaming && M(H)
                              }, [
                                y("summary", null, [
                                  y("span", nS, [
                                    N(c(Rl), {
                                      theme: "outline",
                                      size: "14"
                                    }),
                                    Zt(
                                      " " + F(Ae(H)),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  H.streaming ? (P(), K(
                                    "small",
                                    rS,
                                    F(M(H) ? c(t)("localAi.thinking") : c(t)("localAi.generating")),
                                    1
                                    /* TEXT */
                                  )) : ee("v-if", !0)
                                ]),
                                y("div", {
                                  class: "message-content markdown-body",
                                  innerHTML: yt(_t(H.content))
                                }, null, 8, oS)
                              ], 8, tS)) : ee("v-if", !0),
                              w(H.content) ? (P(), K("div", {
                                key: 1,
                                class: "message-content markdown-body",
                                innerHTML: yt(w(H.content))
                              }, null, 8, aS)) : ee("v-if", !0)
                            ])) : (P(), K(
                              "div",
                              sS,
                              F(ve(H)),
                              1
                              /* TEXT */
                            ))
                          ],
                          2
                          /* CLASS */
                        ),
                        H.content ? (P(), K("div", lS, [
                          y(
                            "span",
                            null,
                            " Context: " + F(Wt(H).context) + "/" + F(Wt(H).contextMax) + " (" + F(Wt(H).contextPercent) + "%) ",
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            " Output: " + F(Wt(H).output) + "/" + F(Wt(H).outputMax),
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            F(Wt(H).seconds) + "s",
                            1
                            /* TEXT */
                          ),
                          y(
                            "span",
                            null,
                            F(Wt(H).speed) + " t/s",
                            1
                            /* TEXT */
                          )
                        ])) : ee("v-if", !0),
                        ar(H) ? (P(), K(
                          "div",
                          iS,
                          F(ar(H)),
                          1
                          /* TEXT */
                        )) : ee("v-if", !0),
                        H.streaming ? ee("v-if", !0) : (P(), K("div", cS, [
                          y("button", {
                            type: "button",
                            title: c(t)("common.copy"),
                            onClick: (be) => so(H)
                          }, [
                            N(c(Cf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, uS),
                          y("button", {
                            type: "button",
                            title: c(t)("localAi.regenerate"),
                            onClick: (be) => je(H.id)
                          }, [
                            N(c($l), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, dS),
                          y("button", {
                            type: "button",
                            title: c(t)("localAi.like"),
                            onClick: Mr
                          }, [
                            N(c(If), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, fS),
                          y("button", {
                            type: "button",
                            title: c(t)("localAi.dislike"),
                            onClick: Mr
                          }, [
                            N(c(Of), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, pS),
                          y("button", {
                            type: "button",
                            title: c(t)("common.edit"),
                            onClick: (be) => $r(H)
                          }, [
                            N(c(Lf), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, mS),
                          y("button", {
                            type: "button",
                            title: c(t)("common.delete"),
                            onClick: (be) => Bn(H.id)
                          }, [
                            N(c(Pl), {
                              theme: "outline",
                              size: "14"
                            })
                          ], 8, hS)
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
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ),
        c(m) ? (P(), K("button", {
          key: 0,
          class: "scroll-bottom-btn",
          type: "button",
          title: c(t)("localAi.jumpToLatest"),
          onClick: G
        }, [
          N(c(Nl), {
            theme: "outline",
            size: "15"
          }),
          y(
            "span",
            null,
            F(c(t)("localAi.jumpToLatest")),
            1
            /* TEXT */
          )
        ], 8, gS)) : ee("v-if", !0),
        y(
          "form",
          {
            class: "chat-input-card",
            onSubmit: rt(zn, ["prevent"])
          },
          [
            kt(y("textarea", {
              "onUpdate:modelValue": U[1] || (U[1] = (H) => Gr(a) ? a.value = H : null),
              class: "chat-input",
              rows: "2",
              placeholder: c(t)("localAi.chatPlaceholder"),
              onKeydown: tn(rt(zn, ["ctrl", "prevent"]), ["enter"])
            }, null, 40, vS), [
              [To, c(a)]
            ]),
            y("div", bS, [
              y("div", yS, [
                y("button", {
                  class: "composer-tool-btn",
                  type: "button",
                  title: c(t)("localAi.settings"),
                  onClick: lr
                }, [
                  N(c(as), {
                    theme: "outline",
                    size: "16"
                  })
                ], 8, _S),
                c(Q) ? (P(), K("button", {
                  key: 0,
                  class: Z([
                    "composer-tool-btn",
                    "composer-tool-btn--wide",
                    c(u) ? "composer-tool-btn--active" : ""
                  ]),
                  type: "button",
                  title: c(u) ? c(t)("localAi.thinkingEnabled") : c(t)("localAi.thinkingDisabled"),
                  "aria-pressed": c(u),
                  onClick: U[2] || (U[2] = (H) => u.value = !c(u))
                }, [
                  N(c(Rl), {
                    theme: "outline",
                    size: "15"
                  }),
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.reasoningTitle")),
                    1
                    /* TEXT */
                  )
                ], 10, wS)) : ee("v-if", !0),
                y("label", kS, [
                  kt(y("select", {
                    "onUpdate:modelValue": U[3] || (U[3] = (H) => Gr(g) ? g.value = H : null),
                    disabled: c(s) || !c(re).length,
                    onChange: Tt
                  }, [
                    (P(!0), K(
                      Lt,
                      null,
                      Tr(c(re), (H) => (P(), K("option", {
                        key: H,
                        value: H
                      }, F(ne(H)), 9, SS))),
                      128
                      /* KEYED_FRAGMENT */
                    )),
                    c(re).length ? ee("v-if", !0) : (P(), K(
                      "option",
                      ES,
                      F(c(fe)),
                      1
                      /* TEXT */
                    ))
                  ], 40, TS), [
                    [wf, c(g)]
                  ]),
                  N(c(Nl), {
                    theme: "outline",
                    size: "14"
                  })
                ])
              ]),
              y("div", AS, [
                U[5] || (U[5] = y(
                  "span",
                  { class: "input-hint" },
                  "Ctrl + Enter",
                  -1
                  /* HOISTED */
                )),
                c(s) ? (P(), K("button", {
                  key: 0,
                  class: "send-btn send-btn--stop",
                  type: "button",
                  title: c(t)("localAi.stopGenerating"),
                  "aria-label": c(t)("localAi.stopGenerating"),
                  onClick: yr
                }, [
                  N(c(Nf), {
                    theme: "filled",
                    size: "11"
                  })
                ], 8, CS)) : (P(), K("button", {
                  key: 1,
                  class: "send-btn",
                  type: "submit",
                  disabled: !c(C),
                  title: c(t)("localAi.send"),
                  "aria-label": c(t)("localAi.send")
                }, [
                  N(c(Pf), {
                    theme: "outline",
                    size: "15"
                  })
                ], 8, OS))
              ])
            ])
          ],
          32
          /* NEED_HYDRATION */
        )
      ])
    ]));
  }
}), RS = /* @__PURE__ */ Ys(xS, [["__scopeId", "data-v-48286d5b"]]), PS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RS
}, Symbol.toStringTag, { value: "Module" }));
async function jc(e = {}) {
  return typeof e == "object" && Object.freeze(e), await Rt("plugin:dialog|open", { options: e });
}
const NS = { class: "settings-panel local-ai-settings-shell" }, $S = { class: "local-ai-hero panel-card" }, MS = { class: "panel-title" }, DS = { class: "hero-desc" }, FS = { class: "header-actions" }, zS = {
  key: 0,
  class: "settings-grid"
}, BS = { class: "summary-panel panel-card" }, VS = { class: "status-strip" }, jS = { class: "memory-card" }, US = { class: "memory-card__header" }, HS = { class: "memory-metrics" }, WS = { class: "bottleneck-row" }, GS = { class: "summary-card" }, KS = { class: "summary-card__title" }, qS = { class: "summary-card__desc" }, YS = { class: "service-controls" }, ZS = { class: "service-url" }, XS = { class: "summary-card" }, QS = { class: "summary-card__title" }, JS = { class: "summary-card__desc" }, e2 = { class: "summary-meta" }, t2 = { class: "form-panel panel-card" }, n2 = { class: "settings-section" }, r2 = { class: "settings-section__header" }, o2 = { class: "field-stack" }, a2 = ["title"], s2 = { class: "path-control" }, l2 = ["title"], i2 = ["title"], c2 = ["title"], u2 = { class: "path-control" }, d2 = ["placeholder"], f2 = { class: "settings-section grid-two" }, p2 = { class: "settings-section__header" }, m2 = { class: "param-grid" }, h2 = ["title"], g2 = ["title"], v2 = ["title"], b2 = ["title"], y2 = ["title"], _2 = ["title"], w2 = { class: "settings-section grid-two" }, k2 = { class: "settings-section__header" }, T2 = { class: "switch-grid" }, S2 = ["title"], E2 = ["title"], A2 = ["title"], C2 = { class: "settings-section grid-two" }, O2 = { class: "settings-section__header" }, L2 = { class: "switch-grid switch-grid--two" }, I2 = ["title"], x2 = ["title"], R2 = ["title"], P2 = ["title"], N2 = { class: "settings-section grid-two" }, $2 = { class: "settings-section__header" }, M2 = { class: "param-grid param-grid--three" }, D2 = ["title"], F2 = ["title"], z2 = ["title"], B2 = ["title"], V2 = ["title"], j2 = ["title"], U2 = ["title"], H2 = ["title"], W2 = { class: "settings-footer" }, G2 = ["title"], K2 = /* @__PURE__ */ oe({
  name: "LocalAiSettings",
  __name: "index",
  setup(e) {
    const { t } = Po(), n = W(null), r = W(null), o = W(null), a = W(null), s = W(!1), i = W(!1), l = W(!1), u = W(!1), d = W(!1);
    let m = null;
    const p = I(() => !!a.value?.selectedModelPath), v = I({
      get: () => n.value?.modelPath ?? "",
      set: (q) => {
        n.value && (n.value.modelPath = q || void 0);
      }
    }), h = I({
      get: () => n.value?.mmprojPath ?? "",
      set: (q) => {
        n.value && (n.value.mmprojPath = q || void 0);
      }
    }), g = I(
      () => r.value?.available ? t("localAi.runtimeReady") : t("localAi.runtimeMissing")
    ), T = I(
      () => p.value ? t("localAi.modelReady") : a.value?.message ?? t("localAi.modelMissing")
    ), f = I(() => o.value?.healthy ? t("localAi.serviceHealthy") : o.value?.running ? t("localAi.serviceStarting") : t("localAi.serviceStopped")), E = (q) => q.split(/[\\/]+/).pop() ?? q, x = I(() => {
      const z = E(
        n.value?.modelPath ?? a.value?.selectedModelPath ?? ""
      ).match(/(\d+(?:\.\d+)?)\s*b/i);
      return z ? Number(z[1]) : 4;
    }), S = I(() => {
      const q = n.value;
      if (!q)
        return {
          gpuGb: "0.00",
          totalGb: "0.00",
          bottleneck: t("localAi.bottleneckUnknown")
        };
      const z = Math.max(1.4, x.value * 0.92), Se = Math.min(1, Math.max(0, q.gpuLayers) / 32), $e = q.ctxSize / 8192 * 0.38 * (q.kvOffload ? 1 : 0.12), Te = q.batchSize / 512 * 0.18, me = z * Se + $e + Te, G = z * (1 - Se) + q.ctxSize / 8192 * 0.22, Ke = me + G, we = q.gpuLayers <= 4 ? t("localAi.bottleneckCpu") : q.ctxSize >= 32768 || q.batchSize >= 2048 ? t("localAi.bottleneckMemory") : t("localAi.bottleneckBalanced");
      return {
        gpuGb: me.toFixed(2),
        totalGb: Ke.toFixed(2),
        bottleneck: we
      };
    }), b = (q) => t(`localAi.paramHints.${q}`), C = async () => {
      r.value = await $k();
    }, O = async () => {
      o.value = await qd();
    }, D = async () => {
      n.value && (a.value = await Kd(n.value), !n.value.modelPath && a.value.selectedModelPath && (n.value.modelPath = a.value.selectedModelPath), !n.value.mmprojPath && a.value.selectedMmprojPath && (n.value.mmprojPath = a.value.selectedMmprojPath));
    }, X = async () => {
      s.value = !0;
      try {
        n.value = await Gd(), await Promise.all([C(), D(), O()]);
      } catch (q) {
        un.error("[LocalAI] refresh settings failed", q), Mt.msg(`${t("localAi.refreshFailed")}: ${q}`, "error");
      } finally {
        s.value = !1;
      }
    }, ne = async () => {
      if (n.value)
        try {
          await aa(n.value);
        } catch (q) {
          un.warn("[LocalAI] autosave failed", q);
        }
    }, fe = async () => {
      if (n.value) {
        i.value = !0;
        try {
          n.value = await aa(n.value), await Promise.all([C(), D(), O()]), Mt.msg(t("localAi.configSaved"));
        } catch (q) {
          Mt.msg(`${t("localAi.configSaveFailed")}: ${q}`, "error");
        } finally {
          i.value = !1;
        }
      }
    }, re = async () => {
      const q = await jc({
        directory: !0,
        multiple: !1,
        title: t("localAi.chooseModelDir")
      });
      !q || Array.isArray(q) || !n.value || (n.value.modelDir = q, n.value.modelPath = void 0, n.value.mmprojPath = void 0, await D());
    }, pe = async () => {
      const q = await jc({
        multiple: !1,
        title: t("localAi.chooseRuntime"),
        filters: [{ name: "llama-server", extensions: ["exe"] }]
      });
      !q || Array.isArray(q) || !n.value || (n.value.runtimePath = q, await ne(), await C());
    }, ge = async () => {
      if (n.value) {
        l.value = !0;
        try {
          await aa(n.value), o.value = await Mk(n.value), Mt.msg(t("localAi.serviceStarted"));
        } catch (q) {
          Mt.msg(`${t("localAi.serviceStartFailed")}: ${q}`, "error");
        } finally {
          l.value = !1;
        }
      }
    }, B = async () => {
      u.value = !0;
      try {
        await fe(), o.value = await Yd(), Mt.msg(t("localAi.serviceRestarted"));
      } catch (q) {
        Mt.msg(`${t("localAi.serviceRestartFailed")}: ${q}`, "error");
      } finally {
        u.value = !1;
      }
    }, Q = async () => {
      d.value = !0;
      try {
        await Dk(), await O(), Mt.msg(t("localAi.serviceStoppedMsg"));
      } catch (q) {
        Mt.msg(`${t("localAi.serviceStopFailed")}: ${q}`, "error");
      } finally {
        d.value = !1;
      }
    }, j = () => {
      window.location.hash = "#/local-ai/chat";
    };
    return ft(async () => {
      await X(), m = setInterval(() => {
        O().catch(
          (q) => un.warn("[LocalAI] status refresh failed", q)
        );
      }, 5e3);
    }), wa(() => {
      m && clearInterval(m);
    }), (q, z) => {
      const Se = Yw, $e = qw, Te = Rw, me = nk;
      return P(), K("div", NS, [
        y("header", $S, [
          y("div", null, [
            y(
              "h3",
              MS,
              F(c(t)("localAi.title")),
              1
              /* TEXT */
            ),
            y(
              "p",
              DS,
              F(c(t)("localAi.serviceControlDesc")),
              1
              /* TEXT */
            )
          ]),
          y("div", FS, [
            N(c(Un), {
              size: "small",
              plain: "",
              onClick: j
            }, {
              default: se(() => [
                Zt(
                  F(c(t)("localAi.openChat")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }),
            N(c(Un), {
              size: "small",
              loading: c(s),
              onClick: X
            }, {
              default: se(() => [
                Zt(
                  F(c(t)("plugins.refresh")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["loading"])
          ])
        ]),
        c(n) ? (P(), K("main", zS, [
          y("aside", BS, [
            y("div", VS, [
              y(
                "div",
                {
                  class: Z(["status-item", { ready: c(r)?.available }])
                },
                [
                  z[25] || (z[25] = y(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    null,
                    F(c(g)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              y(
                "div",
                {
                  class: Z(["status-item", { ready: c(p) }])
                },
                [
                  z[26] || (z[26] = y(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    null,
                    F(c(T)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              ),
              y(
                "div",
                {
                  class: Z(["status-item", { ready: c(o)?.healthy }])
                },
                [
                  z[27] || (z[27] = y(
                    "span",
                    { class: "status-dot" },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "span",
                    null,
                    F(c(f)),
                    1
                    /* TEXT */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            y("section", jS, [
              y("div", US, [
                y(
                  "span",
                  null,
                  F(c(t)("localAi.estimatedMemory")),
                  1
                  /* TEXT */
                ),
                y(
                  "small",
                  null,
                  F(c(t)("localAi.estimateBeta")),
                  1
                  /* TEXT */
                )
              ]),
              y("div", HS, [
                y("div", null, [
                  z[28] || (z[28] = y(
                    "span",
                    null,
                    "GPU",
                    -1
                    /* HOISTED */
                  )),
                  y(
                    "b",
                    null,
                    F(c(S).gpuGb) + " GB",
                    1
                    /* TEXT */
                  )
                ]),
                y("div", null, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.total")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "b",
                    null,
                    F(c(S).totalGb) + " GB",
                    1
                    /* TEXT */
                  )
                ])
              ]),
              y("div", WS, [
                y(
                  "span",
                  null,
                  F(c(t)("localAi.bottleneck")),
                  1
                  /* TEXT */
                ),
                y(
                  "b",
                  null,
                  F(c(S).bottleneck),
                  1
                  /* TEXT */
                )
              ])
            ]),
            y("section", GS, [
              y(
                "div",
                KS,
                F(c(t)("localAi.serviceControl")),
                1
                /* TEXT */
              ),
              y(
                "div",
                qS,
                F(c(t)("localAi.serviceControlDesc")),
                1
                /* TEXT */
              ),
              y("div", YS, [
                N(c(Un), {
                  type: "primary",
                  size: "small",
                  loading: c(l),
                  disabled: c(o)?.running,
                  onClick: ge
                }, {
                  default: se(() => [
                    Zt(
                      F(c(t)("localAi.startService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                N(c(Un), {
                  size: "small",
                  loading: c(u),
                  disabled: !c(o)?.running,
                  onClick: B
                }, {
                  default: se(() => [
                    Zt(
                      F(c(t)("localAi.restartService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"]),
                N(c(Un), {
                  type: "danger",
                  size: "small",
                  plain: "",
                  loading: c(d),
                  disabled: !c(o)?.running,
                  onClick: Q
                }, {
                  default: se(() => [
                    Zt(
                      F(c(t)("localAi.stopService")),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["loading", "disabled"])
              ]),
              y(
                "div",
                ZS,
                F(c(o)?.baseUrl),
                1
                /* TEXT */
              )
            ]),
            y("section", XS, [
              y(
                "div",
                QS,
                F(c(t)("localAi.modelRuntime")),
                1
                /* TEXT */
              ),
              y(
                "div",
                JS,
                F(c(t)("localAi.modelRuntimeDesc")),
                1
                /* TEXT */
              ),
              y("div", e2, [
                y("div", null, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.runtimeReady")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "b",
                    null,
                    F(c(r)?.available ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", null, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.modelReady")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "b",
                    null,
                    F(c(p) ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ]),
                y("div", null, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.serviceHealthy")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "b",
                    null,
                    F(c(o)?.healthy ? c(t)("common.yes") : c(t)("common.no")),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ]),
          y("section", t2, [
            y("div", n2, [
              y("div", r2, [
                y("div", null, [
                  y(
                    "h4",
                    null,
                    F(c(t)("localAi.modelRuntime")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "p",
                    null,
                    F(c(t)("localAi.modelRuntimeDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              y("div", o2, [
                y("label", {
                  class: "field-row",
                  title: b("modelDir")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.modelDir")),
                    1
                    /* TEXT */
                  ),
                  y("div", s2, [
                    kt(y(
                      "input",
                      {
                        "onUpdate:modelValue": z[0] || (z[0] = (G) => c(n).modelDir = G),
                        class: "text-input",
                        onChange: D
                      },
                      null,
                      544
                      /* NEED_HYDRATION, NEED_PATCH */
                    ), [
                      [To, c(n).modelDir]
                    ]),
                    N(c(Un), {
                      size: "small",
                      plain: "",
                      onClick: re
                    }, {
                      default: se(() => [
                        Zt(
                          F(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, a2),
                y("label", {
                  class: "field-row",
                  title: b("mainModel")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.mainModel")),
                    1
                    /* TEXT */
                  ),
                  N($e, {
                    modelValue: c(v),
                    "onUpdate:modelValue": z[1] || (z[1] = (G) => Gr(v) ? v.value = G : null),
                    class: "field-select",
                    clearable: "",
                    onChange: ne
                  }, {
                    default: se(() => [
                      (P(!0), K(
                        Lt,
                        null,
                        Tr(c(a)?.mainModels ?? [], (G) => (P(), ie(Se, {
                          key: G,
                          label: E(G),
                          value: G
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, l2),
                y("label", {
                  class: "field-row",
                  title: b("mmprojModel")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.mmprojModel")),
                    1
                    /* TEXT */
                  ),
                  N($e, {
                    modelValue: c(h),
                    "onUpdate:modelValue": z[2] || (z[2] = (G) => Gr(h) ? h.value = G : null),
                    class: "field-select",
                    clearable: "",
                    onChange: ne
                  }, {
                    default: se(() => [
                      (P(!0), K(
                        Lt,
                        null,
                        Tr(c(a)?.mmprojModels ?? [], (G) => (P(), ie(Se, {
                          key: G,
                          label: E(G),
                          value: G
                        }, null, 8, ["label", "value"]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["modelValue"])
                ], 8, i2),
                y("label", {
                  class: "field-row",
                  title: b("runtimePath")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.runtimePath")),
                    1
                    /* TEXT */
                  ),
                  y("div", u2, [
                    kt(y("input", {
                      "onUpdate:modelValue": z[3] || (z[3] = (G) => c(n).runtimePath = G),
                      class: "text-input",
                      placeholder: c(t)("localAi.runtimePathPlaceholder")
                    }, null, 8, d2), [
                      [To, c(n).runtimePath]
                    ]),
                    N(c(Un), {
                      size: "small",
                      plain: "",
                      onClick: pe
                    }, {
                      default: se(() => [
                        Zt(
                          F(c(t)("common.browse")),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ])
                ], 8, c2)
              ])
            ]),
            y("div", f2, [
              y("div", p2, [
                y("div", null, [
                  y(
                    "h4",
                    null,
                    F(c(t)("localAi.inferenceParams")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "p",
                    null,
                    F(c(t)("localAi.inferenceParamsDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              y("div", m2, [
                y("label", {
                  class: "number-field",
                  title: b("ctxSize")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.ctxSize")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).ctxSize,
                    "onUpdate:modelValue": z[4] || (z[4] = (G) => c(n).ctxSize = G),
                    min: 512,
                    max: 65536,
                    step: 512,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, h2),
                y("label", {
                  class: "number-field",
                  title: b("gpuLayers")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.gpuLayers")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).gpuLayers,
                    "onUpdate:modelValue": z[5] || (z[5] = (G) => c(n).gpuLayers = G),
                    min: 0,
                    max: 999,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, g2),
                y("label", {
                  class: "number-field",
                  title: b("threads")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.threads")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).threads,
                    "onUpdate:modelValue": z[6] || (z[6] = (G) => c(n).threads = G),
                    min: 1,
                    max: 64,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, v2),
                y("label", {
                  class: "number-field",
                  title: b("batchSize")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.batchSize")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).batchSize,
                    "onUpdate:modelValue": z[7] || (z[7] = (G) => c(n).batchSize = G),
                    min: 32,
                    max: 4096,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, b2),
                y("label", {
                  class: "number-field",
                  title: b("ubatchSize")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.ubatchSize")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).ubatchSize,
                    "onUpdate:modelValue": z[8] || (z[8] = (G) => c(n).ubatchSize = G),
                    min: 16,
                    max: 2048,
                    step: 16,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, y2),
                y("label", {
                  class: "number-field",
                  title: b("mainGpu")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.mainGpu")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).mainGpu,
                    "onUpdate:modelValue": z[9] || (z[9] = (G) => c(n).mainGpu = G),
                    min: 0,
                    max: 8,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, _2)
              ])
            ]),
            y("div", w2, [
              y("div", k2, [
                y("div", null, [
                  y(
                    "h4",
                    null,
                    F(c(t)("localAi.acceleration")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "p",
                    null,
                    F(c(t)("localAi.accelerationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              y("div", T2, [
                y("label", {
                  title: b("flashAttn")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.flashAttn")),
                    1
                    /* TEXT */
                  ),
                  N(me, {
                    modelValue: c(n).flashAttn,
                    "onUpdate:modelValue": z[10] || (z[10] = (G) => c(n).flashAttn = G)
                  }, null, 8, ["modelValue"])
                ], 8, S2),
                y("label", {
                  title: b("kvOffload")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.kvOffload")),
                    1
                    /* TEXT */
                  ),
                  N(me, {
                    modelValue: c(n).kvOffload,
                    "onUpdate:modelValue": z[11] || (z[11] = (G) => c(n).kvOffload = G)
                  }, null, 8, ["modelValue"])
                ], 8, E2),
                y("label", {
                  title: b("mmap")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.mmap")),
                    1
                    /* TEXT */
                  ),
                  N(me, {
                    modelValue: c(n).mmap,
                    "onUpdate:modelValue": z[12] || (z[12] = (G) => c(n).mmap = G)
                  }, null, 8, ["modelValue"])
                ], 8, A2)
              ])
            ]),
            y("div", C2, [
              y("div", O2, [
                y("div", null, [
                  y(
                    "h4",
                    null,
                    F(c(t)("localAi.lifecycle")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "p",
                    null,
                    F(c(t)("localAi.lifecycleDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              y("div", L2, [
                y("label", {
                  title: b("autoStart")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.autoStart")),
                    1
                    /* TEXT */
                  ),
                  N(me, {
                    modelValue: c(n).autoStartOnRequest,
                    "onUpdate:modelValue": z[13] || (z[13] = (G) => c(n).autoStartOnRequest = G)
                  }, null, 8, ["modelValue"])
                ], 8, I2),
                y("label", {
                  title: b("keepAlive")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.keepAlive")),
                    1
                    /* TEXT */
                  ),
                  N(me, {
                    modelValue: c(n).keepAlive,
                    "onUpdate:modelValue": z[14] || (z[14] = (G) => c(n).keepAlive = G)
                  }, null, 8, ["modelValue"])
                ], 8, x2),
                y("label", {
                  class: "number-field",
                  title: b("idleTimeout")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.idleTimeout")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).idleTimeoutMinutes,
                    "onUpdate:modelValue": z[15] || (z[15] = (G) => c(n).idleTimeoutMinutes = G),
                    min: 0,
                    max: 240,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, R2),
                y("label", {
                  class: "number-field",
                  title: b("requestTimeout")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.requestTimeout")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).requestTimeoutSecs,
                    "onUpdate:modelValue": z[16] || (z[16] = (G) => c(n).requestTimeoutSecs = G),
                    min: 30,
                    max: 3600,
                    step: 30,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, P2)
              ])
            ]),
            y("div", N2, [
              y("div", $2, [
                y("div", null, [
                  y(
                    "h4",
                    null,
                    F(c(t)("localAi.generation")),
                    1
                    /* TEXT */
                  ),
                  y(
                    "p",
                    null,
                    F(c(t)("localAi.generationDesc")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              y("div", M2, [
                y("label", {
                  class: "number-field",
                  title: b("temperature")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.temperature")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).temperature,
                    "onUpdate:modelValue": z[17] || (z[17] = (G) => c(n).temperature = G),
                    min: 0,
                    max: 2,
                    step: 0.1,
                    precision: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, D2),
                y("label", {
                  class: "number-field",
                  title: b("topP")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.topP")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).topP,
                    "onUpdate:modelValue": z[18] || (z[18] = (G) => c(n).topP = G),
                    min: 0.05,
                    max: 1,
                    step: 0.05,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, F2),
                y("label", {
                  class: "number-field",
                  title: b("topK")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.topK")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).topK,
                    "onUpdate:modelValue": z[19] || (z[19] = (G) => c(n).topK = G),
                    min: 0,
                    max: 200,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, z2),
                y("label", {
                  class: "number-field",
                  title: b("minP")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.minP")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).minP,
                    "onUpdate:modelValue": z[20] || (z[20] = (G) => c(n).minP = G),
                    min: 0,
                    max: 0.5,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, B2),
                y("label", {
                  class: "number-field",
                  title: b("repeatPenalty")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.repeatPenalty")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).repeatPenalty,
                    "onUpdate:modelValue": z[21] || (z[21] = (G) => c(n).repeatPenalty = G),
                    min: 1,
                    max: 2,
                    step: 0.01,
                    precision: 2,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, V2),
                y("label", {
                  class: "number-field",
                  title: b("repeatLastN")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.repeatLastN")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).repeatLastN,
                    "onUpdate:modelValue": z[22] || (z[22] = (G) => c(n).repeatLastN = G),
                    min: 0,
                    max: 2048,
                    step: 32,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, j2),
                y("label", {
                  class: "number-field",
                  title: b("maxTokens")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.maxTokens")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).maxTokens,
                    "onUpdate:modelValue": z[23] || (z[23] = (G) => c(n).maxTokens = G),
                    min: 0,
                    max: 8192,
                    step: 64,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, U2),
                y("label", {
                  class: "number-field",
                  title: b("port")
                }, [
                  y(
                    "span",
                    null,
                    F(c(t)("localAi.port")),
                    1
                    /* TEXT */
                  ),
                  N(Te, {
                    modelValue: c(n).port,
                    "onUpdate:modelValue": z[24] || (z[24] = (G) => c(n).port = G),
                    min: 1024,
                    max: 65535,
                    step: 1,
                    size: "small"
                  }, null, 8, ["modelValue"])
                ], 8, H2)
              ])
            ]),
            y("div", W2, [
              N(c(Un), {
                type: "primary",
                loading: c(i),
                onClick: fe
              }, {
                default: se(() => [
                  Zt(
                    F(c(t)("common.save")),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }, 8, ["loading"]),
              c(o)?.commandLine ? (P(), K("span", {
                key: 0,
                class: "command-line",
                title: c(o).commandLine
              }, F(c(o).commandLine), 9, G2)) : ee("v-if", !0)
            ])
          ])
        ])) : ee("v-if", !0)
      ]);
    };
  }
}), q2 = /* @__PURE__ */ Ys(K2, [["__scopeId", "data-v-152a5e70"]]), Y2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: q2
}, Symbol.toStringTag, { value: "Module" }));
export {
  Q2 as activate,
  Q2 as default
};
